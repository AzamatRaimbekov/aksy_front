import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover h-full w-full"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.slogan')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            {t('hero.description')}
          </p>
          <button className="bg-white text-primary hover:bg-blue-50 transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-lg inline-flex items-center group">
            {t('hero.cta')}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;