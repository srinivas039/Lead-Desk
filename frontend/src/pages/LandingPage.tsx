import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { LeadForm } from '../components/LeadForm';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <WhyChooseUs />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};
