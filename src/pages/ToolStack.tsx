import React, { useState } from 'react';
import { Wrench, Search, Star, ExternalLink } from 'lucide-react';

type ToolCategory = 'ai' | 'design' | 'websites' | 'automation' | 'sales';

interface Tool {
  name: string;
  description: string;
  url: string;
  category: ToolCategory;
  free: boolean;
  featured?: boolean;
}

export const ToolStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'ai', name: 'AI Writing' },
    { id: 'design', name: 'Design' },
    { id: 'websites', name: 'Websites' },
    { id: 'automation', name: 'Automation' },
    { id: 'sales', name: 'Digital Sales' },
  ];

  const tools: Tool[] = [
    {
      name: "ChatGPT",
      description: "AI assistant for writing, brainstorming, and problem-solving",
      url: "https://chat.openai.com",
      category: "ai",
      free: true,
      featured: true
    },
    {
      name: "Gemini",
      description: "Google's AI assistant with multimodal capabilities",
      url: "https://gemini.google.com",
      category: "ai",
      free: true
    },
    {
      name: "Copy.ai",
      description: "AI copywriting tool for marketing content and ads",
      url: "https://www.copy.ai",
      category: "ai",
      free: true
    },
    {
      name: "Canva",
      description: "Create graphics, presentations, and social media content",
      url: "https://www.canva.com",
      category: "design",
      free: true,
      featured: true
    },
    {
      name: "Photopea",
      description: "Free online alternative to Photoshop with advanced features",
      url: "https://www.photopea.com",
      category: "design",
      free: true
    },
    {
      name: "Figma",
      description: "Design UI/UX, prototypes, and collaborate with teams",
      url: "https://www.figma.com",
      category: "design",
      free: true
    },
    {
      name: "Carrd",
      description: "Build one-page websites for nearly anything",
      url: "https://carrd.co",
      category: "websites",
      free: true,
      featured: true
    },
    {
      name: "Notion",
      description: "All-in-one workspace for notes, tasks, wikis, and databases",
      url: "https://www.notion.so",
      category: "websites",
      free: true
    },
    {
      name: "WordPress",
      description: "Create websites, blogs, and online stores",
      url: "https://wordpress.com",
      category: "websites",
      free: true
    },
    {
      name: "Zapier",
      description: "Connect your apps and automate workflows",
      url: "https://zapier.com",
      category: "automation",
      free: true
    },
    {
      name: "Make",
      description: "Visual platform to design, build, and automate anything",
      url: "https://www.make.com",
      category: "automation",
      free: true,
      featured: true
    },
    {
      name: "IFTTT",
      description: "Connect apps and devices with simple automations",
      url: "https://ifttt.com",
      category: "automation",
      free: true
    },
    {
      name: "Gumroad",
      description: "Sell products directly to your audience",
      url: "https://gumroad.com",
      category: "sales",
      free: true,
      featured: true
    },
    {
      name: "Payhip",
      description: "Sell digital products, memberships, and physical goods",
      url: "https://payhip.com",
      category: "sales",
      free: true
    },
    {
      name: "Lemon Squeezy",
      description: "Sell digital products with built-in tax compliance",
      url: "https://www.lemonsqueezy.com",
      category: "sales",
      free: true
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTool = tools.find(tool => tool.featured && (activeCategory === 'all' || tool.category === activeCategory));

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <Wrench className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">Tool Stack</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Discover the best free tools to build your online business and automate your workflow.
        </p>
      </header>

      {featuredTool && (
        <div className="bg-gradient-to-r from-royal-primary/90 to-royal-secondary/90 dark:from-matrix-primary/20 dark:to-matrix-secondary/20 rounded-xl overflow-hidden mb-8">
          <div className="p-6 text-white dark:text-matrix-text">
            <div className="flex items-center mb-2">
              <Star className="text-yellow-300 mr-2" size={20} />
              <h2 className="text-xl font-semibold">Tool of the Day</h2>
            </div>
            <h3 className="text-2xl font-bold mb-2">{featuredTool.name}</h3>
            <p className="mb-4 text-white/90 dark:text-matrix-text">
              {featuredTool.description}
            </p>
            <a 
              href={featuredTool.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-royal-primary dark:bg-matrix-primary dark:text-matrix-bg px-4 py-2 rounded-lg font-medium"
            >
              Try It Free <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200 dark:border-matrix-secondary/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary font-medium'
                      : 'hover:bg-royal-primary/5 dark:hover:bg-matrix-primary/10'
                  }`}
                  onClick={() => setActiveCategory(category.id as ToolCategory | 'all')}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-muted dark:text-matrix-muted" size={16} />
              <input
                type="text"
                placeholder="Search tools..."
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border border-gray-200 dark:border-matrix-secondary/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-royal-primary dark:focus:ring-matrix-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-gray-200 dark:border-matrix-secondary/30 hover:border-royal-primary dark:hover:border-matrix-primary transition-colors"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{tool.name}</h3>
                  <div className="flex items-center">
                    {tool.free && (
                      <span className="text-xs px-2 py-0.5 rounded bg-success/10 text-success font-medium mr-2">
                        Free
                      </span>
                    )}
                    <ExternalLink size={14} className="text-royal-muted dark:text-matrix-muted" />
                  </div>
                </div>
                <p className="text-sm text-royal-muted dark:text-matrix-muted mt-1 mb-3">
                  {tool.description}
                </p>
                <div className="text-xs px-2 py-1 rounded-full bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary inline-block">
                  {categories.find(c => c.id === tool.category)?.name}
                </div>
              </a>
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-8">
              <p className="text-royal-muted dark:text-matrix-muted">
                No tools found matching your search criteria.
              </p>
              <button
                className="mt-2 text-royal-primary dark:text-matrix-primary hover:underline"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};