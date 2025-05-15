import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const GetStarted = () => {
  const { t } = useLanguage();

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-primary"
          >
            {t('getStarted.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-12"
          >
            {t('getStarted.description')}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#" 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg transition-colors"
            >
              <Download size={20} className="mr-2" />
              App Store
            </motion.a>
            <motion.a 
              href="#" 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg transition-colors"
            >
              <Download size={20} className="mr-2" />
              Google Play
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;