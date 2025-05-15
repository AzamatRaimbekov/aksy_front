import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t('whyChooseUs.title')}
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.15)"
                }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {t(`whyChooseUs.reason${item}.title`)}
                </h3>
                <p className="text-blue-100">
                  {t(`whyChooseUs.reason${item}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;