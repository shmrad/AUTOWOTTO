import React from 'react';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jean Dupont',
    role: 'Directeur Commercial',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    name: 'Marie Martin',
    role: 'Responsable Service Client',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    name: 'Pierre Dubois',
    role: 'Expert Technique',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
          <p className="text-xl text-gray-600">Une équipe d'experts à votre service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;