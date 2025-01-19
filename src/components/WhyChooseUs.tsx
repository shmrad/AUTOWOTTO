import React from 'react';
import { Shield, Truck, Users, CreditCard, Settings } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fiabilité',
    description: 'Des véhicules rigoureusement sélectionnés et inspectés',
  },
  {
    icon: Truck,
    title: 'Livraison Garantie',
    description: 'Livraison dans toute la Guinée sous 30 jours',
  },
  {
    icon: Users,
    title: 'Service Personnalisé',
    description: 'Une équipe dédiée à votre satisfaction',
  },
  {
    icon: CreditCard,
    title: 'Prix Compétitifs',
    description: 'Des options de financement flexibles et adaptées',
  },
  {
    icon: Settings,
    title: 'Service Après-Vente',
    description: 'Un support technique professionnel à votre service',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50" id="history">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à vous offrir une expérience d'achat exceptionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;