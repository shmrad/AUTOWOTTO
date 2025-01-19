import React from 'react';
import { Heart, Shield, MessageCircle, Star, UserCheck } from 'lucide-react';

const RelationshipStages = () => {
  const stages = [
    {
      icon: Heart,
      title: "Premier Contact",
      description: "Découverte de vos besoins et préférences automobiles"
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Transparence totale sur nos véhicules et services"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Échanges réguliers et suivi personnalisé"
    },
    {
      icon: Star,
      title: "Satisfaction",
      description: "Livraison de votre véhicule idéal"
    },
    {
      icon: UserCheck,
      title: "Partenariat",
      description: "Support continu et service après-vente"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center mb-10">Notre Engagement Client</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <stage.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-center mb-2">{stage.title}</h4>
              <p className="text-sm text-gray-600 text-center">{stage.description}</p>
            </div>
            {index < stages.length - 1 && (
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-blue-200 transform -translate-y-1/2 z-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelationshipStages;