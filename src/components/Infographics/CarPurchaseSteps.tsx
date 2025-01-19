import React from 'react';
import { Search, Calculator, CreditCard, MessageCircle, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Trouvez la marque",
    description: "Découvrez la marque qui correspond à votre style et vos besoins"
  },
  {
    icon: Calculator,
    title: "Définissez le budget",
    description: "Établissez votre budget pour une expérience d'achat sans stress"
  },
  {
    icon: CreditCard,
    title: "Plans de paiement",
    description: "Bénéficiez de plans de paiement personnalisés adaptés à votre situation"
  },
  {
    icon: MessageCircle,
    title: "Détails personnalisés",
    description: "Recevez des informations détaillées via WhatsApp avec vidéos et appels"
  },
  {
    icon: ShoppingCart,
    title: "Procédez à l'achat",
    description: "Finalisez votre achat avec un dépôt sécurisé"
  }
];

const CarPurchaseSteps = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center mb-12">Votre Voiture en 5 Étapes</h3>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 w-0.5 h-12 bg-blue-200 transform -translate-x-1/2"></div>
                  )}
                </div>
              </div>
              <div className="flex-grow bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarPurchaseSteps;