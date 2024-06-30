import React, { useEffect, useState } from 'react';
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ProviderList from "../components/ProviderList";
import SubscriptionList from '../components/SubscriptionList';

const Home = () => {

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProviderList />  
      <ServicesSection />
      <SubscriptionList />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
