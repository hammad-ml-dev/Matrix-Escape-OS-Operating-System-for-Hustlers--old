import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white dark:bg-matrix-bg border border-gray-200 dark:border-matrix-primary/30 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="relative bg-gradient-to-r from-royal-primary to-royal-secondary dark:from-matrix-bg dark:to-matrix-bg dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-matrix-primary/20 dark:via-matrix-bg dark:to-matrix-bg p-6">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-matrix-primary/20 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="currentColor" stroke="currentColor" className="text-royal-primary dark:text-matrix-bg" strokeWidth="3"/>
                <path d="M50 15C34.5 15 22 27.5 22 43C22 58.5 34.5 71 50 71C65.5 71 78 58.5 78 43C78 27.5 65.5 15 50 15ZM50 63C39 63 30 54 30 43C30 32 39 23 50 23C61 23 70 32 70 43C70 54 61 63 50 63Z" className="text-white dark:text-matrix-primary fill-current"/>
                <path d="M50 27C41.2 27 34 34.2 34 43C34 51.8 41.2 59 50 59C58.8 59 66 51.8 66 43C66 34.2 58.8 27 50 27ZM50 51C45.6 51 42 47.4 42 43C42 38.6 45.6 35 50 35C54.4 35 58 38.6 58 43C58 47.4 54.4 51 50 51Z" className="text-royal-primary dark:text-matrix-secondary fill-current"/>
                <path d="M77.1 67.5L65 55.4C64.2 56.4 63.3 57.3 62.3 58.1L74.4 70.2C75.4 71.2 77 71.2 78 70.2C79 69.2 79 67.6 78 66.6L77.1 67.5Z" className="text-royal-accent dark:text-matrix-accent fill-current"/>
                <path d="M50 71V78L60 88L70 78L50 71Z" className="text-royal-accent dark:text-matrix-accent fill-current"/>
              </svg>
            </div>
            <h2 className="ml-3 text-2xl font-bold text-white dark:text-matrix-primary">Welcome to Matrix Escape OS</h2>
          </div>
          
          <p className="text-white/90 dark:text-matrix-text mb-2">
            You are not stuck — you are untrained. This app is your OS to escape the Matrix.
          </p>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-3">What can you do here?</h3>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-royal-primary dark:bg-matrix-primary flex items-center justify-center text-white dark:text-matrix-bg text-xs mt-0.5">1</span>
              <span className="ml-2">Generate a custom 14-day escape plan tailored to your goals</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-royal-primary dark:bg-matrix-primary flex items-center justify-center text-white dark:text-matrix-bg text-xs mt-0.5">2</span>
              <span className="ml-2">Create viral content for Instagram, YouTube, X, and LinkedIn</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-royal-primary dark:bg-matrix-primary flex items-center justify-center text-white dark:text-matrix-bg text-xs mt-0.5">3</span>
              <span className="ml-2">Find the best side hustles and start making money in 7 days</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-royal-primary dark:bg-matrix-primary flex items-center justify-center text-white dark:text-matrix-bg text-xs mt-0.5">4</span>
              <span className="ml-2">Access a complete toolkit of free resources, designs, and AI tools</span>
            </li>
          </ul>
          
          <div className="text-sm bg-royal-primary/5 dark:bg-matrix-primary/10 p-3 rounded-lg mb-6">
            <p className="font-medium text-royal-primary dark:text-matrix-primary mb-1">Free Trial Active</p>
            <p>You're currently on a 14-day free trial with access to all features.</p>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full btn-primary"
          >
            Let's Escape the Matrix
          </button>
        </div>
      </motion.div>
    </div>
  );
};