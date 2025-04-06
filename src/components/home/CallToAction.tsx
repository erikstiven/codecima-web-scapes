
import React from 'react';
import ContactForm from '../ContactForm';

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-white">Hablemos de </span>
            <span className="text-codecima-blue">negocios</span>
          </h2>
          <p className="text-codecima-blue font-semibold">Solicita DEMOSTRACIÓN</p>
          <p className="text-gray-400 text-sm">¡Recibe asesoría de expertos!</p>
        </div>
        
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
