import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mohamed Camara',
    role: 'Entrepreneur',
    content: 'Service exceptionnel ! La livraison a été rapide et le véhicule était exactement comme décrit.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Aissata Diallo',
    role: 'Directrice Commerciale',
    content: 'Je recommande vivement Auto Wotto. Leur équipe est professionnelle et très attentive aux besoins des clients.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ibrahim Soumah',
    role: 'Médecin',
    content: 'Processus d\'achat simple et transparent. Très satisfait de mon expérience avec Auto Wotto.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-xl text-gray-600">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;