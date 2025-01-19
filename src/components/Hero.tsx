import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenue chez Auto Wotto Guinée
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Votre source de confiance pour des véhicules de qualité en Guinée
          </p>
          <a
            href="#inventory"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Découvrir Nos Véhicules
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;