import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Auto Wotto</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour l'achat de véhicules en Guinée
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>613-501-5274</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>Infos@autowottoguinee.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Conakry, Guinée</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-blue-400 transition-colors">
                  Inventaire
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100066806525023" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/auto.wottoguinee/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Auto Wotto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;