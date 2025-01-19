import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import { ArrowLeft, Check } from 'lucide-react';

const ServiceDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const serviceData = serviceCategories.find(
    service => service.id === category
  );

  if (!serviceData) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-bold text-center">Service non trouvé</h2>
          <button 
            onClick={() => navigate('/services')}
            className="mt-4 mx-auto block bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Retour aux services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/services')}
            className="mb-8 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux services
          </button>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <serviceData.icon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-3xl font-bold">{serviceData.title}</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">{serviceData.description}</p>

              <h2 className="text-2xl font-bold mb-6">Caractéristiques du Service</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {serviceData.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {serviceData.details && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Détails Supplémentaires</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    {serviceData.details.map((detail, index) => (
                      <div key={index} className="mb-4 last:mb-0">
                        <h3 className="font-semibold mb-2">{detail.title}</h3>
                        <p className="text-gray-600">{detail.content}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;