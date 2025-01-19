import React, { useState } from 'react';
import { Car, Mail, Info, Search } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'Toutes les Marques' },
  { id: 'luxury', name: 'Marques de Luxe' },
  { id: 'premium', name: 'Marques Premium' },
  { id: 'general', name: 'Marques Généralistes' },
  { id: 'asian', name: 'Marques Asiatiques' }
];

const vehicleBrands = {
  luxury: [
    {
      id: 'mercedes',
      brand: 'Mercedes-Benz',
      image: '/images/Mercedez.png',
      models: ['Classe G', 'GLE', 'Classe C', 'Classe S', 'GLS'],
      description: 'Leader du luxe automobile allemand.',
      category: 'Marques de Luxe'
    },
    {
      id: 'bmw',
      brand: 'BMW',
      image: '/images/BMW.png',
      models: ['X5', 'X3', 'Série 3', 'X7', 'M3'],
      description: 'Le plaisir de conduire incarné.',
      category: 'Marques de Luxe'
    },
    {
      id: 'audi',
      brand: 'Audi',
      image: '/images/Audi.png',
      models: ['Q5', 'A4', 'Q7', 'Q8', 'RS6'],
      description: 'L\'avant-garde technologique allemande.',
      category: 'Marques de Luxe'
    }
  ],
  premium: [
    {
      id: 'volvo',
      brand: 'Volvo',
      image: '/images/Volvo.png',
      models: ['XC90', 'XC60', 'XC40', 'S90', 'V60'],
      description: 'La sécurité scandinave avec un luxe raffiné.',
      category: 'Marques Premium'
    },
    {
      id: 'genesis',
      brand: 'Genesis',
      image: '/images/Genesis.png',
      models: ['G90', 'G80', 'GV80', 'GV70', 'G70'],
      description: 'Le luxe coréen redéfini.',
      category: 'Marques Premium'
    }
  ],
  general: [
    {
      id: 'volkswagen',
      brand: 'Volkswagen',
      image: '/images/Volsvwagen.png',
      models: ['Tiguan', 'Golf', 'Passat', 'ID.4', 'Atlas'],
      description: 'La qualité allemande accessible.',
      category: 'Marques Généralistes'
    },
    {
      id: 'ford',
      brand: 'Ford',
      image: '/images/Ford.png',
      models: ['F-150', 'Explorer', 'Edge', 'Escape', 'Mustang'],
      description: 'L\'innovation américaine depuis plus d\'un siècle.',
      category: 'Marques Généralistes'
    },
    {
      id: 'jeep',
      brand: 'Jeep',
      image: '/images/Jeep.png',
      models: ['Wrangler', 'Cherokee', 'Grand Cherokee'],
      description: 'L\'aventure tout-terrain par excellence.',
      category: 'Marques Généralistes'
    }
  ],
  asian: [
    {
      id: 'toyota',
      brand: 'Toyota',
      image: '/images/Toyota.png',
      models: ['Land Cruiser', 'RAV4', 'Camry', 'Highlander', 'Tacoma'],
      description: 'La fiabilité légendaire japonaise.',
      category: 'Marques Asiatiques'
    },
    {
      id: 'honda',
      brand: 'Honda',
      image: '/images/Honda.png',
      models: ['CR-V', 'Pilot', 'Accord', 'Civic', 'HR-V'],
      description: 'L\'ingénierie japonaise à son meilleur.',
      category: 'Marques Asiatiques'
    },
    {
      id: 'hyundai',
      brand: 'Hyundai',
      image: '/images/Hyundai.png',
      models: ['Tucson', 'Santa Fe', 'Elantra', 'Palisade'],
      description: 'L\'innovation coréenne accessible.',
      category: 'Marques Asiatiques'
    }
  ]
};

const Inventory = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(region || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredBrands = () => {
    let brands = activeCategory === 'all' 
      ? Object.values(vehicleBrands).flat()
      : vehicleBrands[activeCategory as keyof typeof vehicleBrands] || [];

    if (searchTerm) {
      brands = brands.filter(brand => 
        brand.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.models.some(model => model.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return brands;
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Marques</h2>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez notre sélection de marques automobiles disponibles via nos services d'importation
            </p>

            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une marque ou un modèle..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    navigate(`/inventory/${category.id}`);
                  }}
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
            {getFilteredBrands().map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={brand.image}
                    alt={brand.brand}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {brand.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {brand.brand}
                  </h3>
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Modèles populaires:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.models.map((model, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                        >
                          <Car className="w-3 h-3 mr-1" />
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
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
    </div>
  );
};

export default Inventory;