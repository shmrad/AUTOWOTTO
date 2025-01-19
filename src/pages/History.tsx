import React from 'react';
import ShippingProcess from '../components/Infographics/ShippingProcess';
import CarPurchaseSteps from '../components/Infographics/CarPurchaseSteps';
import RelationshipJourney from '../components/Infographics/RelationshipJourney';
import { Heart, Users, Target, Globe } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      icon: Heart,
      title: "Nos Racines",
      content: "Notre histoire commence avec un rêve partagé par de jeunes Guinéens au Canada. Animés par la passion de l'automobile et le désir de servir leur communauté, ils ont transformé leur expertise en une mission : rendre accessible des véhicules de qualité à leurs compatriotes."
    },
    {
      icon: Users,
      title: "L'Esprit d'Entraide",
      content: "Ce qui a débuté comme un simple geste d'entraide - aider famille et amis à trouver des véhicules fiables - s'est transformé en une véritable vocation. Chaque réparation, chaque conseil donné a renforcé notre engagement envers l'excellence et le service client."
    },
    {
      icon: Target,
      title: "Notre Mission",
      content: "Aujourd'hui, Auto Wotto incarne plus qu'une simple entreprise de vente automobile. Nous sommes un pont entre le Canada et la Guinée, apportant non seulement des véhicules de qualité, mais aussi des valeurs de transparence, de confiance et de service personnalisé."
    },
    {
      icon: Globe,
      title: "Notre Impact",
      content: "Notre engagement va au-delà de la simple transaction commerciale. Nous investissons dans notre communauté, créons des opportunités et contribuons au développement économique de la Guinée. Chaque véhicule vendu représente une histoire de réussite partagée."
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une aventure entrepreneuriale née de la passion et de l'engagement communautaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <milestone.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{milestone.content}</p>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Le Parcours de la Relation Client</h3>
              <RelationshipJourney />
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Notre Vision</h3>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-4">
                  Chez Auto Wotto, nous croyons que chaque Guinéen mérite d'avoir accès à un véhicule fiable et abordable. Notre expérience personnelle nous a appris l'importance d'un service honnête et transparent dans le secteur automobile.
                </p>
                <p className="mb-4">
                  Notre équipe, forte de son expertise acquise au Canada, s'engage à offrir non seulement des véhicules de qualité, mais aussi un accompagnement personnalisé tout au long du processus d'achat. Nous comprenons que l'acquisition d'un véhicule est plus qu'une simple transaction - c'est un investissement dans votre avenir.
                </p>
                <p>
                  En choisissant Auto Wotto, vous rejoignez une communauté de clients satisfaits qui ont fait confiance à notre expertise et notre engagement envers l'excellence. Ensemble, nous construisons un avenir où la mobilité de qualité est accessible à tous.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Notre Processus d'Importation</h3>
              <ShippingProcess />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Comment Acheter Votre Voiture</h3>
              <CarPurchaseSteps />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;