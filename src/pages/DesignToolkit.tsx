import React, { useState } from 'react';
import { Palette, Upload, RefreshCw, ExternalLink } from 'lucide-react';

export const DesignToolkit: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [feedbackGenerated, setFeedbackGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setFeedbackGenerated(false);
      };
      reader.readAsDataURL(file);
    }
  }; 

  const generateFeedback = () => {
    if (!uploadedImage) return;
    
    setGenerating(true);
    
    // Mock API call delay
    setTimeout(() => {
      setFeedbackGenerated(true);
      setGenerating(false);
    }, 1500);
  };

  const designTools = [
    {
      title: "Figma",
      description: "Design UI/UX, prototypes, and collaborate with teams",
      url: "https://www.figma.com/",
      free: true
    },
    {
      title: "Canva",
      description: "Create graphics, presentations, and social media content",
      url: "https://www.canva.com/",
      free: true
    },
    {
      title: "Photopea",
      description: "Free online alternative to Photoshop with advanced features",
      url: "https://www.photopea.com/",
      free: true
    },
    {
      title: "Pexels",
      description: "Free stock photos and videos for commercial use",
      url: "https://www.pexels.com/",
      free: true
    },
    {
      title: "Color Hunt",
      description: "Curated collection of color palettes for designers",
      url: "https://colorhunt.co/",
      free: true
    },
    {
      title: "Google Fonts",
      description: "Free, open-source typography for web and design projects",
      url: "https://fonts.google.com/",
      free: true
    }
  ];

  const feedbackItems = [
    "Improve contrast between text and background for better readability",
    "Consider a more consistent color scheme with 2-3 primary colors",
    "Add more white space around key elements to improve visual hierarchy",
    "Align elements to a grid system for more professional appearance",
    "Use consistent font styles throughout (limit to 2-3 font families)",
    "Consider adding subtle shadows or depth to create visual interest",
    "Simplify the navigation for better user experience",
    "Make call-to-action buttons more prominent and distinctive"
  ];

  const templates = [
    {
      title: "Modern SaaS Landing Page",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      url: "https://www.figma.com/community/file/1107693689317973579"
    },
    {
      title: "Portfolio Template",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=500",
      url: "https://www.figma.com/community/file/1069184553410183277"
    },
    {
      title: "E-commerce UI Kit",
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=500",
      url: "https://www.figma.com/community/file/1130742024581041461"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <Palette className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">Design Toolkit</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Get AI design feedback, templates, and resources to create professional-looking projects.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6">
          <h2 className="text-xl font-semibold mb-4">Design Feedback</h2>
          <p className="text-royal-muted dark:text-matrix-muted mb-4">
            Upload a screenshot of your design to get AI feedback and improvement suggestions.
          </p>
          
          <div className="mb-6">
            <label 
              className={`
                block w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-matrix-secondary/50 
                p-8 text-center hover:border-royal-primary dark:hover:border-matrix-primary transition-colors
                cursor-pointer ${uploadedImage ? 'border-royal-primary dark:border-matrix-primary' : ''}
              `}
            >
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload}
              />
              
              {uploadedImage ? (
                <div>
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded design" 
                    className="max-h-48 mx-auto mb-4 rounded"
                  />
                  <p className="text-royal-primary dark:text-matrix-primary">
                    Click to upload a different image
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 dark:text-matrix-muted mb-2" />
                  <p className="text-sm text-gray-600 dark:text-matrix-muted">
                    Click to upload a screenshot or image
                  </p>
                  <p className="text-xs text-gray-500 dark:text-matrix-muted mt-1">
                    Supports PNG, JPG, or GIF up to 10MB
                  </p>
                </div>
              )}
            </label>
          </div>
          
          {uploadedImage && !feedbackGenerated && (
            <button
              className="btn-primary w-full flex items-center justify-center"
              onClick={generateFeedback}
              disabled={generating}
            >
              {generating ? (
                <>
                  <RefreshCw size={18} className="mr-2 animate-spin" />
                  Analyzing design...
                </>
              ) : (
                <>
                  <Palette size={18} className="mr-2" />
                  Get Design Feedback
                </>
              )}
            </button>
          )}
          
          {feedbackGenerated && (
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Design Improvement Suggestions</h3>
              <ul className="space-y-2">
                {feedbackItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-royal-primary dark:bg-matrix-primary flex-shrink-0 text-white dark:text-matrix-bg text-xs flex items-center justify-center mt-0.5 mr-2">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div>
          <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Free Design Tools</h2>
            <div className="space-y-4">
              {designTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-royal-primary/5 dark:hover:bg-matrix-primary/10 transition-colors"
                >
                  <div>
                    <h3 className="font-medium flex items-center">
                      {tool.title}
                      {tool.free && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded bg-success/10 text-success font-medium">
                          Free
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-royal-muted dark:text-matrix-muted">
                      {tool.description}
                    </p>
                  </div>
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Free Templates</h2>
              <a 
                href="https://www.figma.com/community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-royal-primary dark:text-matrix-primary hover:underline"
              >
                See more
              </a>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {templates.map((template, index) => (
                <a
                  key={index}
                  href={template.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-3 w-full">
                        <h3 className="text-white font-medium">{template.title}</h3>
                        <p className="text-white/70 text-sm flex items-center">
                          View template <ExternalLink size={12} className="ml-1" />
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};