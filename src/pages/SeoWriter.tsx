import React, { useState } from 'react';
import { PenTool, FileText, Tag, RefreshCw } from 'lucide-react';

type ContentType = 'blog' | 'product' | 'cta';

export const SeoWriter: React.FC = () => {
  const [contentType, setContentType] = useState<ContentType>('blog');
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [seoTips, setSeoTips] = useState<string[]>([]);

  const contentTypes = [
    { id: 'blog', name: 'SEO Blog Post' },
    { id: 'product', name: 'Product Description' },
    { id: 'cta', name: 'Call to Action' },
  ];

  const generateContent = () => {
    if (!topic) return;
    
    setGenerating(true);
    
    // Mock API call delay
    setTimeout(() => {
      // In a real app, this would call an AI API to generate content
      if (contentType === 'blog') {
        setGeneratedContent(`# ${topic}: The Ultimate Guide

## Introduction
Are you looking to master ${topic} in 2025? You're in the right place. In this comprehensive guide, we'll walk through everything you need to know about ${topic} - from basic concepts to advanced strategies that will give you an edge.

## Why ${topic} Matters in 2025
The landscape of ${topic} has changed dramatically over the past few years. With the rise of artificial intelligence and automation, understanding ${topic} has become more crucial than ever. Businesses that leverage ${topic} effectively are seeing up to 3x better results compared to their competitors.

## Getting Started with ${topic}
Before diving deep, let's cover the basics:

1. **Understanding the fundamentals** - Every journey begins with a solid foundation
2. **Setting realistic goals** - Know what you want to achieve with ${topic}
3. **Assembling the right tools** - You'll need these to succeed

## Advanced Strategies for ${topic}
Once you've mastered the basics, here are three advanced strategies that will help you stand out:

### Strategy 1: Integration with AI
Artificial intelligence can significantly enhance your ${topic} efforts. By implementing machine learning algorithms, you can automate repetitive tasks and focus on strategic decisions.

### Strategy 2: Data-Driven Approach
Make decisions based on real data, not assumptions. Use analytics tools to track your progress and identify areas for improvement.

### Strategy 3: Community Building
Build a community around ${topic}. Engage with your audience, answer their questions, and create a space for like-minded individuals to connect.

## Common Mistakes to Avoid
Even experts make mistakes. Here are some pitfalls to watch out for when working with ${topic}:

- Overlooking the importance of consistency
- Focusing too much on quick results instead of long-term strategy
- Not staying updated with the latest trends and technologies

## Conclusion
Mastering ${topic} takes time and effort, but the rewards are worth it. By following the strategies outlined in this guide, you'll be well on your way to becoming an expert in ${topic}.

Remember, the journey of a thousand miles begins with a single step. Start implementing these strategies today, and you'll see significant improvements in no time.`);
        
        setSeoTips([
          "Include your primary keyword in the first 100 words",
          "Use H2 and H3 headings with keywords for better structure",
          "Add internal links to relevant content on your site",
          "Include external links to authoritative sources",
          "Add alt text to all images with keywords where appropriate",
          "Optimize meta description with primary keyword",
          "Use bullet points and numbered lists for readability"
        ]);
      } else if (contentType === 'product') {
        setGeneratedContent(`# Revolutionary ${topic} - Transform Your Results Today

**Are you tired of mediocre results? Our cutting-edge ${topic} solution is designed to revolutionize your experience and deliver exceptional outcomes.**

## Why Our ${topic} Stands Above the Rest

Meticulously crafted with premium-grade materials and advanced technology, our ${topic} offers unparalleled performance for professionals and enthusiasts alike. Each unit undergoes rigorous quality testing to ensure you receive nothing but the best.

## Key Features

- **Effortless Integration**: Seamlessly works with your existing setup
- **Time-Saving Automation**: Reduces manual work by up to 60%
- **Intuitive Interface**: Master the basics in minutes, not hours
- **Scalable Solution**: Grows with your needs without additional costs
- **Premium Support**: Our expert team is available 24/7

## Real Results from Real Customers

"After trying countless alternatives, this ${topic} has completely transformed my workflow. I've seen a 3x improvement in productivity and the quality of my output has never been better." - Alex M., Professional Designer

## Limited Time Offer

For a limited time only, get our premium ${topic} at a special introductory price. Each purchase includes:

- Complete ${topic} system with all accessories
- Comprehensive user guide and tutorial videos
- 1-year premium warranty
- 30-day risk-free guarantee

Don't settle for average results when excellence is within reach. Elevate your performance with our revolutionary ${topic} today.

**[Buy Now]** | **[Learn More]**`);
        
        setSeoTips([
          "Use descriptive, benefit-focused headings",
          "Include specific product features and benefits",
          "Add social proof with customer testimonials",
          "Use action-oriented language and power words",
          "Incorporate keywords naturally throughout the description",
          "Create urgency with limited-time offers",
          "Include clear calls-to-action"
        ]);
      } else if (contentType === 'cta') {
        setGeneratedContent(`# Ready to Transform Your Results with ${topic}?

Don't let another day go by with mediocre results. Our proven ${topic} system has helped thousands break through plateaus and achieve remarkable growth.

## Here's What You'll Get:

✅ Step-by-step guidance to master ${topic} in record time
✅ Exclusive strategies used by top industry professionals
✅ Lifetime access to our continuously updated resource library
✅ Priority support from our team of experts

## The Time for Action is Now

Your competitors aren't waiting, and neither should you. For a limited time, we're offering our complete ${topic} system at a special price.

**[Yes! I Want to Master ${topic} →]**

*"Implementing these ${topic} strategies resulted in a 40% increase in our bottom line within just 60 days. This is the real deal." – Sarah J., CEO*

## Our 30-Day Guarantee

If you don't see measurable improvements within 30 days, we'll refund every penny. That's how confident we are in our approach to ${topic}.

Don't miss this opportunity. The next success story could be yours.

**[Claim Your Spot Today →]**`);
        
        setSeoTips([
          "Use strong action verbs to start your CTA",
          "Create a sense of urgency or scarcity",
          "Highlight the value proposition clearly",
          "Use social proof to build credibility",
          "Make the button text specific and benefit-focused",
          "Reduce risk with guarantees or free trials",
          "Test different versions for optimal conversion"
        ]);
      }
      
      setGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <PenTool className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">SEO Blog + Copywriter</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Generate high-converting, SEO-optimized content for your blog, products, or calls to action.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6">
          <h2 className="text-xl font-semibold mb-4">Content Settings</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content Type</label>
            <div className="grid grid-cols-1 gap-2">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  className={`flex items-center p-3 rounded-lg border transition-all ${
                    contentType === type.id
                      ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 border-royal-primary dark:border-matrix-primary text-royal-primary dark:text-matrix-primary'
                      : 'border-gray-200 dark:border-matrix-secondary/30 hover:bg-royal-primary/5 dark:hover:bg-matrix-primary/10'
                  }`}
                  onClick={() => setContentType(type.id as ContentType)}
                >
                  {type.id === 'blog' && <FileText size={18} className="mr-2" />}
                  {type.id === 'product' && <Tag size={18} className="mr-2" />}
                  {type.id === 'cta' && <PenTool size={18} className="mr-2" />}
                  <span>{type.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Topic or Product Name</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., Digital Marketing, AI Tools"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Target Keywords (Optional)</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., passive income, side hustle"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <p className="text-xs text-royal-muted dark:text-matrix-muted mt-1">
              Separate multiple keywords with commas
            </p>
          </div>
          
          <button
            className="btn-primary w-full flex items-center justify-center"
            onClick={generateContent}
            disabled={generating || !topic}
          >
            {generating ? (
              <>
                <RefreshCw size={18} className="mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <PenTool size={18} className="mr-2" />
                Generate Content
              </>
            )}
          </button>
        </div>
        
        <div className="lg:col-span-2">
          {generatedContent ? (
            <>
              <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 mb-6">
                <div className="border-b border-gray-200 dark:border-matrix-secondary/30 p-4 flex items-center justify-between">
                  <h3 className="font-semibold">Generated Content</h3>
                  <button 
                    className="p-2 rounded-md hover:bg-royal-primary/10 dark:hover:bg-matrix-primary/20 transition-colors text-sm flex items-center"
                    onClick={() => navigator.clipboard.writeText(generatedContent)}
                  >
                    Copy All
                  </button>
                </div>
                <div className="p-6 max-h-[600px] overflow-y-auto">
                  <div className="prose dark:prose-invert max-w-none">
                    {generatedContent.split('\n\n').map((paragraph, i) => {
                      if (paragraph.startsWith('# ')) {
                        return <h1 key={i} className="text-2xl font-bold mb-4">{paragraph.substring(2)}</h1>;
                      } else if (paragraph.startsWith('## ')) {
                        return <h2 key={i} className="text-xl font-semibold mb-3 mt-6">{paragraph.substring(3)}</h2>;
                      } else if (paragraph.startsWith('### ')) {
                        return <h3 key={i} className="text-lg font-semibold mb-2 mt-4">{paragraph.substring(4)}</h3>;
                      } else if (paragraph.startsWith('- ')) {
                        return (
                          <ul key={i} className="list-disc pl-5 mb-4">
                            {paragraph.split('\n').map((item, j) => (
                              <li key={j} className="mb-1">{item.substring(2)}</li>
                            ))}
                          </ul>
                        );
                      } else if (paragraph.startsWith('✅ ')) {
                        return (
                          <div key={i} className="flex items-start mb-2">
                            <span className="text-success mr-2">✅</span>
                            <span>{paragraph.substring(2)}</span>
                          </div>
                        );
                      } else if (paragraph.startsWith('*')) {
                        return <p key={i} className="italic mb-4">{paragraph.substring(1, paragraph.length - 1)}</p>;
                      } else if (paragraph.startsWith('**[')) {
                        return (
                          <button key={i} className="btn-primary my-4">
                            {paragraph.substring(3, paragraph.indexOf(']'))}
                          </button>
                        );
                      } else {
                        return <p key={i} className="mb-4">{paragraph}</p>;
                      }
                    })}
                  </div>
                </div>
              </div>
              
              {seoTips.length > 0 && (
                <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-6">
                  <h3 className="font-semibold mb-4">SEO Optimization Tips</h3>
                  <ul className="space-y-2">
                    {seoTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-5 h-5 rounded-full bg-royal-primary dark:bg-matrix-primary flex-shrink-0 text-white dark:text-matrix-bg text-xs flex items-center justify-center mt-0.5 mr-2">
                          {index + 1}
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 p-8 text-center h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-royal-primary/10 dark:bg-matrix-primary/20 flex items-center justify-center mb-4">
                <PenTool size={24} className="text-royal-primary dark:text-matrix-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No content generated yet</h3>
              <p className="text-royal-muted dark:text-matrix-muted max-w-md">
                Enter your topic and click "Generate Content" to create SEO-optimized copy for your project.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};