import React, { useState } from 'react';
import { Car, Info, Mail } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tous les Véhicules' },
  { id: 'suv', name: 'SUV/Crossover' },
  { id: 'truck', name: 'Pick-up' },
  { id: 'sedan', name: 'Berline' },
  { id: 'coupe', name: 'Coupé' },
  { id: 'hatchback', name: 'Compacte' }
];

const cars = {
  suv: [
    {
      id: 1,
      name: 'Genesis GV70',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Essence',
      features: ['375ch', 'AWD', 'Cuir Nappa', 'Toit Panoramique'],
      category: 'SUV/Crossover'
    },
    {
      id: 2,
      name: 'BMW X7',
      image: '/images/BMW.png',
      specs: 'Automatique • Diesel',
      features: ['M Sport', 'xDrive', 'Sky Lounge', '7 Places'],
      category: 'SUV/Crossover',
      isLogo: true
    },
    {
      id: 3,
      name: 'Porsche Cayenne',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Hybride',
      features: ['E-Hybrid', 'Sport Chrono', 'PASM', 'PDCC'],
      category: 'SUV/Crossover'
    }
  ],
  truck: [
    {
      id: 6,
      name: 'Toyota Hilux',
      image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Diesel',
      features: ['4x4', 'Double Cabine', 'Navigation', 'JBL Audio'],
      category: 'Pick-up'
    },
    {
      id: 7,
      name: 'Ford Ranger Raptor',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Diesel',
      features: ['Fox Racing', '4x4', 'SYNC 4A', 'Bang & Olufsen'],
      category: 'Pick-up'
    }
  ],
  sedan: [
    {
      id: 9,
      name: 'Mercedes-Benz Classe S',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Hybride',
      features: ['AMG Line', 'MBUX', 'Burmester 4D', 'Digital Light'],
      category: 'Berline'
    },
    {
      id: 10,
      name: 'BMW Série 7',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Électrique',
      features: ['Theatre Screen', 'Sky Lounge', 'Bowers & Wilkins'],
      category: 'Berline'
    }
  ],
  coupe: [
    {
      id: 12,
      name: 'BMW M4 Competition',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Essence',
      features: ['510ch', 'M xDrive', 'M Sport Seats', 'Harman Kardon'],
      category: 'Coupé'
    },
    {
      id: 13,
      name: 'Porsche 911',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Essence',
      features: ['510ch', 'PDK', 'PCCB', 'Sport Chrono'],
      category: 'Coupé'
    }
  ],
  hatchback: [
    {
      id: 16,
      name: 'Audi RS3 Sportback',
      image: 'https://images.unsplash.com/photo-1614026480418-bd11fdb9fa06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Essence',
      features: ['400ch', 'quattro', 'RS Sport Exhaust', 'Bang & Olufsen'],
      category: 'Compacte'
    },
    {
      id: 17,
      name: 'Mercedes-AMG A45 S',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      specs: 'Automatique • Essence',
      features: ['421ch', '4MATIC+', 'AMG TRACK PACE', 'Burmester'],
      category: 'Compacte'
    }
  ]
};

const FeaturedCars = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getFilteredCars = () => {
    if (activeCategory === 'all') {
      return Object.values(cars).flat();
    }
    return cars[activeCategory as keyof typeof cars] || [];
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20" id="inventory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Inventaire
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez notre sélection exclusive de véhicules
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredCars().map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-white">
                <img
                  src={car.image}
                  alt={car.name}
                  className={car.isLogo ? 'absolute inset-0 m-auto h-32 w-auto p-4 object-contain' : 'absolute inset-0 w-full h-full object-cover'}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {car.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {car.name}
                </h3>
                <p className="text-gray-600 mb-4">{car.specs}</p>
                <ul className="mb-4">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 mb-1">
                      <Car className="w-4 h-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Nous Contacter
                  </button>
                  <button 
                    onClick={scrollToContact}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                  >
                    <Info className="w-4 h-4" />
                    Plus d'Infos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;