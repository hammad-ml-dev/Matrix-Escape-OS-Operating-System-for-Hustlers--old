import React from 'react';
import { 
  Compass, Zap, PenTool, Palette, BookOpen, Wrench, DollarSign, Sparkles 
} from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { MatrixBackground } from '../components/MatrixBackground';

export const Dashboard: React.FC = () => {
  const features = [
    {
      title: 'Escape Plan Generator',
      description: 'Create your custom 14-day escape plan based on your skills and goals',
      icon: <Compass size={24} />,
      to: '/escape-plan'
    },
    {
      title: 'Viral Prompt Generator',
      description: 'Create viral content for Instagram, YouTube, X, and more',
      icon: <Zap size={24} />,
      to: '/viral-prompts'
    },
    {
      title: 'SEO Blog Writer',
      description: 'Generate high-converting blog posts and copy optimized for search',
      icon: <PenTool size={24} />,
      to: '/seo-writer'
    },
    {
      title: 'Design Toolkit',
      description: 'Get UI/UX suggestions and design resources for your projects',
      icon: <Palette size={24} />,
      to: '/design-toolkit'
    },
    {
      title: 'Learn & Escape',
      description: 'Access free educational resources to build your skills',
      icon: <BookOpen size={24} />,
      to: '/learn-escape'
    },
    {
      title: 'Tool Stack',
      description: 'Discover the best free AI tools for your online business',
      icon: <Wrench size={24} />,
      to: '/tool-stack'
    },
    {
      title: 'Side Hustle Generator',
      description: 'Find the perfect side hustle and start making money in 7 days',
      icon: <DollarSign size={24} />,
      to: '/side-hustle'
    }
  ];

  return (
    <div className="relative">
      <MatrixBackground intensity="low" />
      
      <header className="mb-8 relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Matrix Escape OS</h1>
        <p className="text-royal-muted dark:text-matrix-muted text-lg max-w-3xl">
          Your operating system to escape the 9-5 and start making money online. 
          All tools are free and designed to give you real results.
        </p>
      </header>

      <div className="p-4 mb-8 bg-royal-primary/10 dark:bg-matrix-primary/20 rounded-lg border border-royal-primary/20 dark:border-matrix-primary/30 flex items-center">
        <div className="mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-royal-primary/20 dark:bg-matrix-primary/30 flex items-center justify-center">
          <Sparkles className="text-royal-primary dark:text-matrix-primary" size={20} />
        </div>
        <div>
          <h3 className="font-medium">Today's Focus</h3>
          <p className="text-sm text-royal-muted dark:text-matrix-muted">
            Create your escape plan and start your first side hustle today
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            to={feature.to}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};