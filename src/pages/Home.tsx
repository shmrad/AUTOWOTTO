import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedCars from '../components/FeaturedCars';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedCars />
      <ContactForm />
    </>
  );
};

export default Home;