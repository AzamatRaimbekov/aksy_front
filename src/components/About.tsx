import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;