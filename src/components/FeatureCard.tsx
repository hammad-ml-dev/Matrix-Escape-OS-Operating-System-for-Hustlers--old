import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  to,
  delay = 0
}) => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="card p-6 cursor-pointer hover:translate-y-[-5px] transition-transform duration-300"
      onClick={() => navigate(to)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
    >
      <div className="w-12 h-12 rounded-full bg-royal-primary/10 dark:bg-matrix-primary/20 flex items-center justify-center text-royal-primary dark:text-matrix-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-royal-muted dark:text-matrix-muted">{description}</p>
    </motion.div>
  );
};