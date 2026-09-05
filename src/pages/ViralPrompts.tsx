import React, { useState } from 'react';
import { 
  Zap, Instagram, Youtube, Twitter, Linkedin, Copy, Check, RefreshCw
} from 'lucide-react';

type Platform = 'instagram' | 'youtube' | 'twitter' | 'linkedin';

interface PromptTemplate {
  title: string;
  prompt: string;
}

export const ViralPrompts: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('instagram');
  const [topic, setTopic] = useState('');
  const [niche, setNiche] = useState('');
  const [generating, setGenerating] = useState(false);
  const [prompts, setPrompts] = useState<PromptTemplate[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: <Instagram size={20} /> },
    { id: 'youtube', name: 'YouTube', icon: <Youtube size={20} /> },
    { id: 'twitter', name: 'X (Twitter)', icon: <Twitter size={20} /> },
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin size={20} /> },
  ];

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const generatePrompts = () => {
    if (!topic || !niche) return;
    
    setGenerating(true);
    
    // Mock API call delay
    setTimeout(() => {
      // Sample prompts based on platform (in a real app, these would come from an AI)
      const instagramPrompts = [
        { 
          title: "Day in the Life",
          prompt: `Create a day-in-the-life Reel showing how you use ${topic} to solve ${niche} problems. Start with a hook about a common pain point, then show your unique process, and end with a transformation.`
        },
        { 
          title: "Myth vs Reality",
          prompt: `Create a myth vs reality Reel about ${topic} in the ${niche} industry. Start with "The biggest myth about ${topic} is..." then reveal the truth with data or experience. Use trending audio for better reach.`
        },
        { 
          title: "How-To Tutorial",
          prompt: `Create a 30-second tutorial on how to use ${topic} to improve ${niche} results. Break it down into 3 simple steps, use on-screen text for each step, and end with a before/after example.`
        },
        { 
          title: "Top 5 Tips",
          prompt: `Share your top 5 ${topic} tips that ${niche} professionals don't want you to know. Use transitions between each tip, add emojis in your text, and end with a call to action to save the post.`
        }
      ];
      
      const youtubePrompts = [
        { 
          title: "Ultimate Guide",
          prompt: `Create an "Ultimate Guide to ${topic} for ${niche}" that starts with a shocking statistic or result. Structure it as problem → common mistakes → your solution → transformation story → tutorial → call to action.`
        },
        { 
          title: "I Tried For 30 Days",
          prompt: `"I Tried ${topic} for 30 Days in the ${niche} Space and Here's What Happened" - Document your journey, challenges, and results. Include data visualizations and a surprising twist in the middle.`
        },
        { 
          title: "Expert Interview",
          prompt: `"I Interviewed 5 ${niche} Experts About ${topic} - Here's What They Said" - Compile insights from multiple sources, highlight contradictions, and share your own conclusion about what actually works.`
        }
      ];
      
      const twitterPrompts = [
        { 
          title: "Thread Starter",
          prompt: `"I made $XXX using ${topic} in the ${niche} industry in just 30 days. Here's exactly how I did it: [THREAD]" Then break down your process into 7-10 actionable tweets with one tip per tweet.`
        },
        { 
          title: "Contrarian Take",
          prompt: `"Unpopular opinion: Most ${niche} advice about ${topic} is dead wrong. Here's why..." Then explain your contrarian perspective with data points and your alternative approach.`
        },
        { 
          title: "Case Study",
          prompt: `"CASE STUDY: How I helped a ${niche} client 10X their results using ${topic} in just 60 days:" Then break down the exact process, tools, and timeline in a step-by-step thread.`
        }
      ];
      
      const linkedinPrompts = [
        { 
          title: "Success Story",
          prompt: `Share a personal story about how you overcame a challenge with ${topic} in the ${niche} industry. Start with "3 years ago I was struggling with..." and end with the lessons learned and results achieved.`
        },
        { 
          title: "Industry Insight",
          prompt: `"The ${niche} industry is changing rapidly because of ${topic}. Here are 5 trends every professional needs to be aware of:" Then list each trend with its business impact and how to adapt.`
        },
        { 
          title: "Career Advice",
          prompt: `"The one ${topic} skill that transformed my ${niche} career:" Share your personal experience, the specific steps you took to master this skill, and how others can do the same.`
        }
      ];
      
      // Select prompts based on platform
      switch(selectedPlatform) {
        case 'instagram':
          setPrompts(instagramPrompts);
          break;
        case 'youtube':
          setPrompts(youtubePrompts);
          break;
        case 'twitter':
          setPrompts(twitterPrompts);
          break;
        case 'linkedin':
          setPrompts(linkedinPrompts);
          break;
        default:
          setPrompts([]);
      }
      
      setGenerating(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <Zap className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">Viral Prompt Generator</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Generate viral content ideas for social media that will grow your audience and establish your authority.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1 bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6">
          <h2 className="text-xl font-semibold mb-4">Content Settings</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Select Platform</label>
            <div className="grid grid-cols-2 gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  className={`flex items-center justify-center p-3 rounded-lg border transition-all ${
                    selectedPlatform === platform.id
                      ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 border-royal-primary dark:border-matrix-primary text-royal-primary dark:text-matrix-primary'
                      : 'border-gray-200 dark:border-matrix-secondary/30 hover:bg-royal-primary/5 dark:hover:bg-matrix-primary/10'
                  }`}
                  onClick={() => setSelectedPlatform(platform.id as Platform)}
                >
                  {platform.icon}
                  <span className="ml-2">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Topic</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., Freelancing, AI tools, NFTs"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Your Niche</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., Design, Finance, Health"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
            />
          </div>
          
          <button
            className="btn-primary w-full flex items-center justify-center"
            onClick={generatePrompts}
            disabled={generating || !topic || !niche}
          >
            {generating ? (
              <>
                <RefreshCw size={18} className="mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Zap size={18} className="mr-2" />
                Generate Viral Prompts
              </>
            )}
          </button>
        </div>
        
        <div className="md:col-span-2">
          {prompts.length > 0 ? (
            <div className="space-y-4">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{prompt.title}</h3>
                    <button
                      className="p-2 rounded-md hover:bg-royal-primary/10 dark:hover:bg-matrix-primary/20 transition-colors"
                      onClick={() => handleCopy(index, prompt.prompt)}
                    >
                      {copied === index ? (
                        <Check size={18} className="text-success" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>
                  <p className="text-royal-muted dark:text-matrix-muted">
                    {prompt.prompt}
                  </p>
                </div>
              ))}
              
              <div className="text-center text-sm text-royal-muted dark:text-matrix-muted mt-4">
                Pro tip: Combine multiple prompts for even better results. Customize each prompt to your unique story for maximum authenticity.
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-8 text-center h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-royal-primary/10 dark:bg-matrix-primary/20 flex items-center justify-center mb-4">
                <Zap size={24} className="text-royal-primary dark:text-matrix-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No prompts generated yet</h3>
              <p className="text-royal-muted dark:text-matrix-muted max-w-md">
                Fill in your topic and niche, then click the "Generate Viral Prompts" button to create customized content ideas.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};