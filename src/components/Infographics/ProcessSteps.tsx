import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    'Consultation initiale',
    'Sélection du véhicule',
    'Vérification technique',
    'Documentation',
    'Livraison'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-grow">
              <p className="font-semibold">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;