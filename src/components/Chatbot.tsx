import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import OpenAI from 'openai';

interface Message {
  text: string;
  isBot: boolean;
}

interface Lead {
  email?: string;
  phone?: string;
  carChoice?: string;
  budget?: string;
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const systemPrompt = `Tu es un conseiller commercial virtuel pour Auto Wotto, spécialisé dans la vente de voitures en Guinée.
RÈGLES IMPORTANTES:
- Tu communiques EXCLUSIVEMENT en français
- Tu es chaleureux, professionnel et attentif
- Tu dois TOUJOURS collecter les informations suivantes des clients intéressés:
  * Email
  * Numéro de téléphone
  * Budget
  * Type de véhicule souhaité
- Pour CHAQUE demande de véhicule, tu DOIS:
  1. Demander le budget du client
  2. Explorer leurs besoins spécifiques
  3. Collecter leurs coordonnées
- Tu représentes Auto Wotto avec:
  * Livraison dans toute la Guinée sous 30 jours
  * Prix à partir de 15 000€
  * Financement bancaire disponible
  * Service après-vente professionnel
  * Véhicules neufs et d'occasion disponibles

EXEMPLE DE PREMIÈRE RÉPONSE:
"Bonjour et bienvenue chez Auto Wotto! Je suis votre conseiller personnel, comment puis-je vous aider à trouver le véhicule de vos rêves aujourd'hui?"`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour et bienvenue chez Auto Wotto! Je suis votre conseiller personnel, comment puis-je vous aider à trouver le véhicule de vos rêves aujourd'hui?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentLead, setCurrentLead] = useState<Lead>({});

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(msg => ({
            role: msg.isBot ? 'assistant' : 'user',
            content: msg.text
          })),
          { role: 'user', content: input }
        ],
        model: 'gpt-4',
        temperature: 0.7,
        max_tokens: 250
      });

      const botResponse = { 
        text: completion.choices[0]?.message?.content || "Désolé, je n'ai pas pu traiter votre demande.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);

      // Extract lead information from the conversation
      const emailMatch = input.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/);
      const phoneMatch = input.match(/(?:\+224|00224)?\s*\d{1,2}(?:\s*\d{2}){3,4}/);
      
      if (emailMatch && !currentLead.email) {
        setCurrentLead(prev => ({ ...prev, email: emailMatch[0] }));
      }
      if (phoneMatch && !currentLead.phone) {
        setCurrentLead(prev => ({ ...prev, phone: phoneMatch[0] }));
      }
      if (input.toLowerCase().includes('budget') || input.includes('€')) {
        const budgetMatch = input.match(/\d+\s*(?:k|K|000)?(?:\s*€|\s*euros)?/);
        if (budgetMatch && !currentLead.budget) {
          setCurrentLead(prev => ({ ...prev, budget: budgetMatch[0] }));
        }
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: "Désolé, une erreur s'est produite. Veuillez réessayer.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Conseiller Auto Wotto</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  Je réfléchis...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                className={`bg-blue-600 text-white p-2 rounded-lg transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
                disabled={isLoading}
                aria-label="Envoyer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;