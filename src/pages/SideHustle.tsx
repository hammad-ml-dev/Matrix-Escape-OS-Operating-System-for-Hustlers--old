import React, { useState } from 'react';
import { DollarSign, Calendar, Clock, Brain, Target, CheckCircle2, RefreshCw } from 'lucide-react';
import { FormInput } from '../components/FormInput';

interface HustleOption {
  title: string;
  description: string;
  income: string;
  timeline: string;
  difficulty: string;
  steps: string[];
  resources: { title: string; url: string }[];
}

export const SideHustle: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    skills: '',
    time: '1-3 hours',
    goal: 'Quick cash',
  });
  const [generating, setGenerating] = useState(false);
  const [hustleOptions, setHustleOptions] = useState<HustleOption[]>([]);

  const timeOptions = ['1-3 hours', '4-6 hours', '7-10 hours', '10+ hours'];
  const goalOptions = ['Quick cash', 'Steady income', 'Passive income', 'Build a business'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateHustles = () => {
    setGenerating(true);
    
    // Mock API call delay
    setTimeout(() => {
      // In a real app, this would call an AI API to generate personalized hustle ideas
      // For demo purposes, we'll use predefined options
      
      const freelanceWriting = {
        title: "Freelance Content Writing",
        description: "Create blog posts, articles, and social media content for businesses in your area of expertise.",
        income: "$200-500 per week",
        timeline: "Start in 2 days, first income in 7 days",
        difficulty: "Medium",
        steps: [
          "Set up profiles on Fiverr, Upwork, and ContentWriterJobs",
          "Create 3 sample articles in your niche (500-1000 words each)",
          "Reach out to 5 businesses daily with personalized pitches",
          "Start with lower rates ($0.05-0.10/word) to build reviews",
          "Deliver quality work on time to build your reputation",
          "Gradually increase your rates as you gain experience"
        ],
        resources: [
          { title: "Fiverr", url: "https://www.fiverr.com" },
          { title: "Upwork", url: "https://www.upwork.com" },
          { title: "Grammarly (Free tier)", url: "https://www.grammarly.com" },
          { title: "How to Start Freelance Writing (Free Guide)", url: "https://www.freelancewriting.com/getting-started/" }
        ]
      };
      
      const virtualAssistant = {
        title: "Virtual Assistant",
        description: "Provide administrative, technical, or creative assistance to entrepreneurs and small businesses remotely.",
        income: "$300-800 per week",
        timeline: "Start in 3 days, first income in 10 days",
        difficulty: "Medium",
        steps: [
          "Define your VA services (email management, scheduling, research, etc.)",
          "Create a simple portfolio website using Carrd.co",
          "Set up profiles on Upwork, Fiverr, and Virtual Assistant forums",
          "Reach out to 10 entrepreneurs daily via LinkedIn/Twitter",
          "Offer a free 1-hour trial to showcase your skills",
          "Collect testimonials from satisfied clients"
        ],
        resources: [
          { title: "Carrd.co (Free website builder)", url: "https://carrd.co" },
          { title: "Calendly (Free tier)", url: "https://calendly.com" },
          { title: "Trello (Free tier)", url: "https://trello.com" },
          { title: "Virtual Assistant Forums", url: "https://www.virtualassistantforums.com" }
        ]
      };
      
      const printOnDemand = {
        title: "Print-on-Demand Store",
        description: "Create and sell custom designs on t-shirts, mugs, and other products without inventory or upfront costs.",
        income: "$200-1000 per week (scaling with time)",
        timeline: "Start in 2 days, first income in 14 days",
        difficulty: "Low-Medium",
        steps: [
          "Choose a niche (pets, professions, hobbies, etc.)",
          "Create 10-20 simple designs using Canva or Photopea",
          "Set up a Printify or Printful account linked to Etsy",
          "Create eye-catching product listings with SEO keywords",
          "Set up social media accounts to showcase your products",
          "Reinvest profits into ads once you find winning designs"
        ],
        resources: [
          { title: "Printify (Free to start)", url: "https://printify.com" },
          { title: "Canva (Free tier)", url: "https://www.canva.com" },
          { title: "Etsy", url: "https://www.etsy.com" },
          { title: "Photopea (Free Photoshop alternative)", url: "https://www.photopea.com" }
        ]
      };
      
      // Customize based on form inputs
      const hustles = [freelanceWriting, virtualAssistant, printOnDemand];
      
      if (formData.goal === 'Passive income') {
        hustles[2] = {
          title: "AI Prompt Marketplace",
          description: "Create and sell premium AI prompts for ChatGPT, Midjourney, and other AI tools.",
          income: "$100-2000 per month (passive after setup)",
          timeline: "Start in 1 day, first income in 7 days",
          difficulty: "Low",
          steps: [
            "Choose a niche where people use AI tools (marketing, design, coding)",
            "Create 20+ premium prompts that solve specific problems",
            "Set up a Gumroad account to sell your prompt packages",
            "Price competitively ($9-29 per package)",
            "Create free sample prompts to demonstrate value",
            "Promote on Twitter, Reddit, and relevant communities"
          ],
          resources: [
            { title: "Gumroad (Free to start)", url: "https://gumroad.com" },
            { title: "ChatGPT", url: "https://chat.openai.com" },
            { title: "PromptBase (Research competitor prompts)", url: "https://promptbase.com" },
            { title: "AI Prompt Engineering Guide", url: "https://www.promptingguide.ai" }
          ]
        };
      }
      
      setHustleOptions(hustles);
      setStep(2);
      setGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <DollarSign className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">Side Hustle Generator</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Discover the perfect side hustle based on your skills, available time, and income goals.
        </p>
      </header>

      <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 overflow-hidden">
        {step === 1 ? (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Find Your Perfect Side Hustle</h2>
            
            <FormInput 
              label="What skills or interests do you have?"
              placeholder="e.g., writing, design, coding, social media"
              value={formData.skills}
              onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'skills' } })}
            />
            
            <FormInput 
              label="How many hours per week can you commit?"
              type="select"
              value={formData.time}
              options={timeOptions}
              onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'time' } })}
            />
            
            <FormInput 
              label="What's your primary goal?"
              type="select"
              value={formData.goal}
              options={goalOptions}
              onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'goal' } })}
            />
            
            <button
              className="btn-primary w-full flex items-center justify-center mt-6"
              onClick={generateHustles}
              disabled={generating || !formData.skills}
            >
              {generating ? (
                <>
                  <RefreshCw size={18} className="mr-2 animate-spin" />
                  Finding the best hustles for you...
                </>
              ) : (
                <>
                  <DollarSign size={18} className="mr-2" />
                  Find My Side Hustles
                </>
              )}
            </button>
          </div>
        ) : (
          <div>
            <div className="p-6 border-b border-gray-200 dark:border-matrix-secondary/30">
              <h2 className="text-xl font-semibold">Top 3 Side Hustles For You</h2>
              <p className="text-royal-muted dark:text-matrix-muted">
                Based on your skills, time commitment, and goals
              </p>
            </div>
            
            <div>
              {hustleOptions.map((hustle, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${index < hustleOptions.length - 1 ? 'border-b border-gray-200 dark:border-matrix-secondary/30' : ''}`}
                >
                  <h3 className="text-lg font-semibold mb-2">{hustle.title}</h3>
                  <p className="mb-4">{hustle.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <DollarSign size={18} className="text-royal-primary dark:text-matrix-primary mr-2" />
                      <div>
                        <div className="text-xs text-royal-muted dark:text-matrix-muted">Potential Income</div>
                        <div className="font-medium">{hustle.income}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-royal-primary dark:text-matrix-primary mr-2" />
                      <div>
                        <div className="text-xs text-royal-muted dark:text-matrix-muted">Timeline</div>
                        <div className="font-medium">{hustle.timeline}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Brain size={18} className="text-royal-primary dark:text-matrix-primary mr-2" />
                      <div>
                        <div className="text-xs text-royal-muted dark:text-matrix-muted">Difficulty</div>
                        <div className="font-medium">{hustle.difficulty}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium flex items-center mb-3">
                      <Target size={16} className="mr-2" />
                      Action Plan (7 Days)
                    </h4>
                    <div className="space-y-2">
                      {hustle.steps.map((step, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 size={16} className="text-royal-primary dark:text-matrix-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Free Resources</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {hustle.resources.map((resource, i) => (
                        <a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-royal-primary dark:text-matrix-primary hover:underline flex items-center"
                        >
                          <span className="w-4 h-4 rounded-full bg-royal-primary/10 dark:bg-matrix-primary/20 flex items-center justify-center text-xs mr-2">
                            {i + 1}
                          </span>
                          {resource.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-royal-primary/5 dark:bg-matrix-primary/10 border-t border-royal-primary/10 dark:border-matrix-primary/20">
              <h4 className="font-medium mb-2">Pro Tip</h4>
              <p className="text-sm">
                Start with just one hustle and master it before adding another. Consistency is key - even 30 minutes per day will yield results over time.
              </p>
            </div>
            
            <div className="p-6">
              <button
                className="btn-secondary w-full"
                onClick={() => setStep(1)}
              >
                Generate New Ideas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};