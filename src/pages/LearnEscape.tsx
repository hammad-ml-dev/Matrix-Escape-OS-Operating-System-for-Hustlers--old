import React, { useState } from 'react';
import { BookOpen, ExternalLink, Youtube, Download, FileText, ArrowRight } from 'lucide-react';

type Category = 'freelancing' | 'dropshipping' | 'trading' | 'digital' | 'saas';

interface Resource {
  title: string;
  description: string;
  type: 'video' | 'article' | 'ebook' | 'course';
  url: string;
  free: boolean;
}

export const LearnEscape: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('freelancing');

  const categories = [
    { id: 'freelancing', name: 'Freelancing' },
    { id: 'dropshipping', name: 'Dropshipping' },
    { id: 'trading', name: 'Trading' },
    { id: 'digital', name: 'Digital Products' },
    { id: 'saas', name: 'Building SaaS' },
  ];

  const resources: Record<Category, Resource[]> = {
    freelancing: [
      {
        title: "Getting Started on Upwork",
        description: "Learn how to create a winning profile and land your first clients",
        type: "video",
        url: "https://www.youtube.com/watch?v=sample1",
        free: true
      },
      {
        title: "The $100 Startup",
        description: "How to build a freelance business with minimal investment",
        type: "ebook",
        url: "https://www.example.com/100-startup-ebook",
        free: true
      },
      {
        title: "Mastering Client Communication",
        description: "Templates and scripts for professional client interactions",
        type: "article",
        url: "https://www.example.com/client-communication",
        free: true
      },
      {
        title: "Freelance Rate Calculator",
        description: "Tool to help you set profitable rates for your services",
        type: "course",
        url: "https://www.example.com/rate-calculator",
        free: true
      }
    ],
    dropshipping: [
      {
        title: "Dropshipping in 2025",
        description: "Updated strategies that still work in today's market",
        type: "video",
        url: "https://www.youtube.com/watch?v=sample2",
        free: true
      },
      {
        title: "Finding Winning Products",
        description: "Research methods to discover high-margin products",
        type: "article",
        url: "https://www.example.com/winning-products",
        free: true
      },
      {
        title: "Shopify Store Setup Guide",
        description: "Step-by-step tutorial to create your first store",
        type: "course",
        url: "https://www.example.com/shopify-setup",
        free: true
      }
    ],
    trading: [
      {
        title: "Trading Fundamentals",
        description: "Learn the basics of technical and fundamental analysis",
        type: "video",
        url: "https://www.youtube.com/watch?v=sample3",
        free: true
      },
      {
        title: "Risk Management Strategies",
        description: "How to protect your capital and trade safely",
        type: "ebook",
        url: "https://www.example.com/risk-management",
        free: true
      },
      {
        title: "Paper Trading Guide",
        description: "Practice trading without risking real money",
        type: "article",
        url: "https://www.example.com/paper-trading",
        free: true
      }
    ],
    digital: [
      {
        title: "Creating Digital Products",
        description: "How to create ebooks, courses, and templates that sell",
        type: "video",
        url: "https://www.youtube.com/watch?v=sample4",
        free: true
      },
      {
        title: "Gumroad Success Blueprint",
        description: "Setting up your digital storefront for maximum sales",
        type: "article",
        url: "https://www.example.com/gumroad-blueprint",
        free: true
      },
      {
        title: "Digital Product Ideas",
        description: "50+ profitable digital product ideas you can create today",
        type: "ebook",
        url: "https://www.example.com/product-ideas",
        free: true
      }
    ],
    saas: [
      {
        title: "No-Code SaaS Development",
        description: "Build SaaS products without coding using no-code tools",
        type: "video",
        url: "https://www.youtube.com/watch?v=sample5",
        free: true
      },
      {
        title: "SaaS Pricing Strategies",
        description: "How to structure your pricing for maximum revenue",
        type: "article",
        url: "https://www.example.com/saas-pricing",
        free: true
      },
      {
        title: "Finding Your First 100 Customers",
        description: "Marketing strategies to get your first SaaS users",
        type: "course",
        url: "https://www.example.com/first-100-customers",
        free: true
      }
    ]
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'video':
        return <Youtube size={16} />;
      case 'ebook':
        return <Download size={16} />;
      case 'article':
        return <FileText size={16} />;
      case 'course':
        return <BookOpen size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <BookOpen className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">Learn & Escape</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Free educational resources to build your skills and escape the 9-5 grind.
        </p>
      </header>

      <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 overflow-hidden mb-8">
        <div className="border-b border-gray-200 dark:border-matrix-secondary/30 p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary font-medium'
                    : 'hover:bg-royal-primary/5 dark:hover:bg-matrix-primary/10'
                }`}
                onClick={() => setActiveCategory(category.id as Category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources[activeCategory].map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-gray-200 dark:border-matrix-secondary/30 hover:border-royal-primary dark:hover:border-matrix-primary transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-royal-primary/10 dark:bg-matrix-primary/20 flex items-center justify-center flex-shrink-0 mr-3">
                    {getIconForType(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{resource.title}</h3>
                      <ExternalLink size={14} className="text-royal-muted dark:text-matrix-muted" />
                    </div>
                    <p className="text-sm text-royal-muted dark:text-matrix-muted mt-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary font-medium capitalize">
                        {resource.type}
                      </span>
                      {resource.free && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded bg-success/10 text-success font-medium">
                          Free
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-royal-primary to-royal-secondary dark:from-matrix-bg dark:to-matrix-bg dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-matrix-primary/20 dark:via-matrix-bg dark:to-matrix-bg rounded-xl overflow-hidden">
        <div className="p-6 text-white dark:text-matrix-text">
          <h2 className="text-xl font-semibold mb-2">Ready to Go Deeper?</h2>
          <p className="mb-4 text-white/90 dark:text-matrix-text">
            Our "Escape in 30 Days" bootcamp gives you a structured plan with daily tasks, mentorship, and community support.
          </p>
          <button className="bg-white text-royal-primary dark:bg-matrix-primary dark:text-matrix-bg px-4 py-2 rounded-lg font-medium flex items-center">
            Learn More <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};