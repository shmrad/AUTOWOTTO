import React from 'react';
import { Wallet, Car, Ship, MapPin, FileCheck, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: "Planification Financière",
    description: "Évaluation de votre budget et sélection des meilleures options de véhicules"
  },
  {
    icon: Car,
    title: "Inspection au Canada",
    description: "Vérification technique approfondie et certification du véhicule"
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Préparation complète des documents d'exportation et d'importation"
  },
  {
    icon: Ship,
    title: "Transport Maritime",
    description: "Acheminement sécurisé par voie maritime vers la Guinée"
  },
  {
    icon: Wrench,
    title: "Inspection Finale",
    description: "Vérification complète à l'arrivée en Guinée"
  },
  {
    icon: MapPin,
    title: "Livraison",
    description: "Remise des clés et documentation à Conakry"
  }
];

const ShippingProcess = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow border border-blue-100 hover:border-blue-500"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="ml-3 text-blue-600 font-medium">Étape {index + 1}</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingProcess;