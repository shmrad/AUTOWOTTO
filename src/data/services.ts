import { CreditCard, Wrench, Shield, Clock, Search, Check, Gift, Truck, Settings } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'financing',
    icon: CreditCard,
    title: 'Solutions de Financement',
    description: 'Des options de financement flexibles adaptées à vos besoins',
    features: [
      'Plans de paiement personnalisés',
      'Taux compétitifs',
      'Processus d\'approbation rapide',
      'Options de refinancement',
      'Conseils financiers personnalisés'
    ],
    details: [
      {
        title: 'Types de Financement',
        content: 'Prêts classiques, leasing, et options de paiement échelonné disponibles.'
      },
      {
        title: 'Processus d\'Approbation',
        content: 'Évaluation rapide de votre dossier avec réponse sous 24-48 heures.'
      }
    ]
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Service Après-Vente',
    description: 'Entretien professionnel et maintenance préventive',
    features: [
      'Inspections régulières',
      'Maintenance préventive',
      'Réparations garanties',
      'Pièces d\'origine',
      'Service d\'urgence'
    ],
    details: [
      {
        title: 'Programme d\'Entretien',
        content: 'Suivis réguliers et maintenance préventive pour optimiser la durée de vie de votre véhicule.'
      },
      {
        title: 'Garantie',
        content: 'Toutes nos réparations sont garanties avec des pièces d\'origine.'
      }
    ]
  },
  {
    id: 'insurance',
    icon: Shield,
    title: 'Assurance Auto',
    description: 'Protection complète pour votre tranquillité d\'esprit',
    features: [
      'Couverture tous risques',
      'Assistance 24/7',
      'Protection vol et dommages',
      'Assurance personnalisée',
      'Gestion simplifiée des sinistres'
    ],
    details: [
      {
        title: 'Types de Couverture',
        content: 'Options flexibles incluant responsabilité civile, tous risques, et protections additionnelles.'
      },
      {
        title: 'Assistance',
        content: 'Service d\'assistance routière disponible 24h/24 et 7j/7.'
      }
    ]
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Transport et Livraison',
    description: 'Service de livraison sécurisé et professionnel',
    features: [
      'Livraison à domicile',
      'Transport sécurisé',
      'Suivi en temps réel',
      'Documentation complète',
      'Assurance transport'
    ],
    details: [
      {
        title: 'Processus de Livraison',
        content: 'Transport sécurisé de votre véhicule avec suivi en temps réel et documentation détaillée.'
      },
      {
        title: 'Zones Desservies',
        content: 'Service disponible dans toute la Guinée avec des délais garantis.'
      }
    ]
  }
];