import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    if (form.current) {
      emailjs
        .sendForm(
          'service_ynn0dp9',
          'template_bh3vb1l',
          form.current,
          'nByaLzX7x9NJLiYMF'
        )
        .then(
          () => {
            setSubmitStatus({
              type: 'success',
              message: 'Message envoyé avec succès! Nous vous contacterons bientôt.',
            });
            if (form.current) form.current.reset();
          },
          (error) => {
            setSubmitStatus({
              type: 'error',
              message: "Une erreur s'est produite. Veuillez réessayer plus tard.",
            });
            console.error('EmailJS Error:', error);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contactez-nous</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">613-501-5274</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Infos@autowottoguinee.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">Conakry, Guinée</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;