import React from 'react';
import { CreditCard, Wrench, Shield, Clock } from 'lucide-react';

const serviceItems = [
  {
    icon: CreditCard,
    title: 'Financement',
    description: 'Solutions de financement flexibles adaptées à vos besoins',
    id: 'financing'
  },
  {
    icon: Wrench,
    title: 'Service Après-Vente',
    description: 'Entretien et réparation professionnels pour votre véhicule',
    id: 'after-sales'
  },
  {
    icon: Shield,
    title: 'Assurance',
    description: 'Protection complète pour votre tranquillité d\'esprit',
    id: 'insurance'
  },
  {
    icon: Clock,
    title: 'Location',
    description: 'Options de location flexibles pour tous vos besoins',
    id: 'rental'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600">Des solutions complètes pour votre satisfaction</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;