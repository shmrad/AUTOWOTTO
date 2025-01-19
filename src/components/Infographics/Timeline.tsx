import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: '2020',
      title: 'Création',
      description: 'Fondation d\'Auto Wotto en Guinée'
    },
    {
      year: '2021',
      title: 'Expansion',
      description: 'Ouverture de notre premier showroom à Conakry'
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Lancement de notre plateforme en ligne'
    },
    {
      year: '2023',
      title: 'Croissance',
      description: 'Extension de nos services dans toute la Guinée'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {events.map((event, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="flex-shrink-0 w-24 text-right">
              <span className="font-bold text-blue-600">{event.year}</span>
            </div>
            <div className="mx-4 flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg mb-1">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;