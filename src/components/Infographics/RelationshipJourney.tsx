import React from 'react';
import { Car, ShieldCheck, Wrench, Truck, UserCheck } from 'lucide-react';

const RelationshipJourney = () => {
  const stages = [
    {
      icon: Car,
      title: "Découverte",
      description: "Premier contact avec Auto Wotto et exploration de notre gamme de véhicules"
    },
    {
      icon: ShieldCheck,
      title: "Consultation",
      description: "Évaluation personnalisée de vos besoins et présentation des meilleures options"
    },
    {
      icon: Wrench,
      title: "Inspection",
      description: "Vérification technique complète et transparente du véhicule choisi"
    },
    {
      icon: Truck,
      title: "Livraison",
      description: "Transport sécurisé de votre véhicule du Canada vers la Guinée"
    },
    {
      icon: UserCheck,
      title: "Service Continu",
      description: "Support après-vente et maintenance pour une satisfaction durable"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 z-0" />
        
        {/* Stages */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {stages.map((stage, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-1/5 px-4">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4 border-2 border-blue-600">
                <stage.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-center mb-2">{stage.title}</h4>
              <p className="text-sm text-gray-600 text-center">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelationshipJourney;