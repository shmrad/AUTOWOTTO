import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Car, Wrench, CreditCard, Phone, Users, Shield, Clock } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const aboutItems = [
    {
      name: 'Notre Histoire',
      path: '/history',
      description: 'Découvrez notre parcours'
    },
    {
      name: 'Nos Valeurs',
      path: '/values',
      description: 'Ce qui nous définit'
    }
  ];

  const inventoryItems = [
    {
      name: 'Marques de Luxe',
      path: '/inventory/luxury',
      icon: Car,
      description: 'Mercedes-Benz, BMW, Audi, Lexus'
    },
    {
      name: 'Marques Premium',
      path: '/inventory/premium',
      icon: Car,
      description: 'Volvo, Genesis, Infiniti'
    },
    {
      name: 'Marques Généralistes',
      path: '/inventory/general',
      icon: Car,
      description: 'Toyota, Honda, Ford, Volkswagen'
    },
    {
      name: 'Marques Asiatiques',
      path: '/inventory/asian',
      icon: Car,
      description: 'Toyota, Honda, Hyundai, Mazda'
    }
  ];

  const serviceItems = [
    {
      name: 'Financement',
      path: '/services/financing',
      icon: CreditCard,
      description: 'Solutions de financement flexibles'
    },
    {
      name: 'Service Après-Vente',
      path: '/services/maintenance',
      icon: Wrench,
      description: 'Entretien et réparation professionnels'
    },
    {
      name: 'Assurance',
      path: '/services/insurance',
      icon: Shield,
      description: 'Protection complète pour votre véhicule'
    },
    {
      name: 'Transport',
      path: '/services/shipping',
      icon: Clock,
      description: 'Livraison et transport sécurisé'
    }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">Auto Wotto</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <span>À Propos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2">
                  {aboutItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown('inventory')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <span>Inventaire</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'inventory' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2">
                  {inventoryItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-2 text-blue-600" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-2 text-blue-600" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={scrollToContact}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown('about')}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>À Propos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="pl-4 space-y-2">
                  {aboutItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown('inventory')}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>Inventaire</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'inventory' && (
                <div className="pl-4 space-y-2">
                  {inventoryItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 space-y-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={scrollToContact}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;