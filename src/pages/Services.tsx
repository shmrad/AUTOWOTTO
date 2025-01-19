import React from 'react';
import { CreditCard, Wrench, Shield, Clock, Search, Check, Gift, Truck, Settings } from 'lucide-react';

const serviceItems = [
  {
    icon: Search,
    title: 'Achat 100% en Ligne',
    description: 'Parcourez, sélectionnez et achetez votre voiture sans quitter votre domicile',
    details: [
      'Sélection personnalisée de véhicules',
      'Processus transparent de A à Z',
      'Suivi en temps réel de votre commande',
      'Livraison en 30 jours garantie'
    ]
  },
  {
    icon: Check,
    title: 'Inspection Certifiée',
    description: 'Inspection complète avant expédition pour votre tranquillité d\'esprit',
    details: [
      'Vérification moteur et transmission',
      'Inspection des freins et suspension',
      'Test des systèmes électriques',
      'Contrôle carrosserie et intérieur'
    ]
  },
  {
    icon: Settings,
    title: 'Conseils d\'Entretien',
    description: 'Recommandations personnalisées pour maintenir votre véhicule',
    details: [
      'Programme d\'entretien sur mesure',
      'Conseils de maintenance préventive',
      'Solutions d\'optimisation moteur',
      'Guides d\'entretien détaillés'
    ]
  },
  {
    icon: Wrench,
    title: 'Pièces de Rechange',
    description: 'Accès à des pièces de qualité pour votre véhicule',
    details: [
      'Réseau de fournisseurs fiables',
      'Pièces d\'origine garanties',
      'Prix compétitifs',
      'Service de commande rapide'
    ]
  },
  {
    icon: Gift,
    title: 'Programme Membres',
    description: 'Avantages exclusifs pour nos clients',
    details: [
      'Cadeaux personnalisés',
      'Offres spéciales',
      'Service prioritaire',
      'Support dédié'
    ]
  },
  {
    icon: CreditCard,
    title: 'Paiement Flexible',
    description: 'Options de paiement adaptées à vos besoins',
    details: [
      'Plans de paiement personnalisés',
      'Gestion des frais de douane',
      'Processus transparent',
      'Solutions de financement'
    ]
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Des solutions complètes pour votre satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb -6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Notre Engagement</h3>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Chez Auto Wotto, nous nous engageons à vous offrir une expérience d'achat exceptionnelle. 
              De la sélection de votre véhicule jusqu'à son entretien, notre équipe vous accompagne à chaque étape 
              pour garantir votre satisfaction totale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;