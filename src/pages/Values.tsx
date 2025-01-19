import React from 'react';
import { Heart, Shield, Users, Target, Globe, Sparkles, CreditCard, MessageCircle, Wrench, Clock } from 'lucide-react';
import RelationshipStages from '../components/Infographics/RelationshipStages';

const values = [
  {
    icon: Heart,
    title: 'Transparence',
    description: 'Nous affichons tous les détails des véhicules et les prix de manière claire et honnête.'
  },
  {
    icon: Shield,
    title: 'Intégrité',
    description: 'Nous agissons avec honnêteté et équité dans chaque transaction.'
  },
  {
    icon: Users,
    title: 'Service Client',
    description: 'Une assistance personnalisée tout au long de votre parcours d\'achat.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Utilisation des dernières technologies pour améliorer votre expérience.'
  },
  {
    icon: CreditCard,
    title: 'Accessibilité',
    description: 'Des options de financement flexibles adaptées à chaque budget.'
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Des réponses rapides et des solutions efficaces à vos besoins.'
  },
  {
    icon: Wrench,
    title: 'Qualité',
    description: 'Des véhicules rigoureusement sélectionnés et inspectés.'
  },
  {
    icon: Globe,
    title: 'Engagement Communautaire',
    description: 'Contribution active au développement de notre communauté.'
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description: 'Dialogue ouvert et transparent avec nos clients.'
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'Recherche constante de la meilleure qualité de service.'
  }
];

const Values = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident nos actions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Notre Relation avec les Clients</h3>
            <RelationshipStages />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;