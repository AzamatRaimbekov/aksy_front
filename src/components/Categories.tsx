import React from 'react';
import { 
  Monitor, ShoppingBag, Home, Car, Building2, Wrench, Heart, Baby, 
  Palmtree, Dumbbell, Apple, Briefcase 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Categories = () => {
  const { t } = useLanguage();
  
  const categories = [
    { id: 'electronics', icon: <Monitor size={32} />, name: t('categories.electronics') },
    { id: 'clothing', icon: <ShoppingBag size={32} />, name: t('categories.clothing') },
    { id: 'appliances', icon: <Home size={32} />, name: t('categories.appliances') },
    { id: 'auto', icon: <Car size={32} />, name: t('categories.auto') },
    { id: 'realestate', icon: <Building2 size={32} />, name: t('categories.realestate') },
    { id: 'services', icon: <Wrench size={32} />, name: t('categories.services') },
    { id: 'beauty', icon: <Heart size={32} />, name: t('categories.beauty') },
    { id: 'children', icon: <Baby size={32} />, name: t('categories.children') },
    { id: 'home', icon: <Palmtree size={32} />, name: t('categories.home') },
    { id: 'sports', icon: <Dumbbell size={32} />, name: t('categories.sports') },
    { id: 'food', icon: <Apple size={32} />, name: t('categories.food') },
    { id: 'jobs', icon: <Briefcase size={32} />, name: t('categories.jobs') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        >
          {t('categories.title')}
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="text-primary mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-center font-medium text-gray-800">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;