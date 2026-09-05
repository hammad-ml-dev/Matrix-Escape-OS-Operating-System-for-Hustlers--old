import React, { useState } from 'react';
import { Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FormInput } from '../components/FormInput';

export const EscapePlan: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    skillLevel: 'Beginner',
    hoursPerWeek: 10,
    goalIncome: 1000,
    interests: '',
    timeframe: '30 days',
  });
  const [roadmap, setRoadmap] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateRoadmap = () => {
    // In a real app, this would call an AI API to generate a personalized roadmap
    // For demo purposes, we'll use predefined roadmaps based on skill level
    const beginnerRoadmap = [
      "Day 1-2: Identify your top 3 marketable skills based on your interests",
      "Day 3-4: Create accounts on Fiverr & Upwork, optimize your profile",
      "Day 5-7: Complete 2 small projects for portfolio (even if free)",
      "Day 8-9: Research top 5 problems your target audience faces",
      "Day 10-11: Create 3 content pieces showcasing your knowledge",
      "Day 12: Set up a simple website on Carrd.co to showcase your work",
      "Day 13: Reach out to 10 potential clients with personalized messages",
      "Day 14: Create a basic weekly schedule for consistent actions"
    ];

    const intermediateRoadmap = [
      "Day 1-2: Audit your current skills & identify high-value opportunities",
      "Day 3-4: Create a specialized service package with premium pricing",
      "Day 5-6: Set up automated outreach system to find clients",
      "Day 7-8: Build a content calendar for authority positioning",
      "Day 9-10: Create a lead magnet to attract potential clients",
      "Day 11: Optimize your online profiles for higher conversion",
      "Day 12-13: Connect with 3 potential partners for cross-promotion",
      "Day 14: Set up passive income streams alongside client work"
    ];

    setRoadmap(formData.skillLevel === "Beginner" ? beginnerRoadmap : intermediateRoadmap);
    setStep(3);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center mb-2">
          <Compass className="text-royal-primary dark:text-matrix-primary mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold">Escape Plan Generator</h1>
        </div>
        <p className="text-royal-muted dark:text-matrix-muted">
          Create your customized 14-day roadmap to escape the 9-5 and start making money online.
        </p>
      </header>

      <div className="bg-white dark:bg-matrix-bg/50 rounded-xl border border-gray-200 dark:border-matrix-secondary/30 overflow-hidden">
        {/* Progress steps */}
        <div className="flex border-b border-gray-200 dark:border-matrix-secondary/30">
          <div className={`flex-1 p-4 text-center ${step >= 1 ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary' : ''}`}>
            1. Your Details
          </div>
          <div className={`flex-1 p-4 text-center ${step >= 2 ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary' : ''}`}>
            2. Your Goals
          </div>
          <div className={`flex-1 p-4 text-center ${step >= 3 ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary' : ''}`}>
            3. Your Roadmap
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Tell us about yourself</h2>
              
              <FormInput 
                label="What's your current skill level?"
                type="select"
                value={formData.skillLevel}
                options={['Beginner', 'Intermediate', 'Advanced']}
                onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'skillLevel' } })}
              />
              
              <FormInput 
                label="How many hours per week can you commit?"
                type="number"
                value={formData.hoursPerWeek}
                min={1}
                max={40}
                onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'hoursPerWeek' } })}
              />
              
              <FormInput 
                label="What are your main interests or skills?"
                placeholder="e.g., writing, design, coding, marketing..."
                value={formData.interests}
                onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'interests' } })}
              />
              
              <button 
                className="btn-primary w-full mt-4 flex items-center justify-center"
                onClick={() => setStep(2)}
              >
                Continue <ArrowRight size={18} className="ml-2" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Set your goals</h2>
              
              <FormInput 
                label="What's your monthly income goal? ($)"
                type="number"
                value={formData.goalIncome}
                min={100}
                onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'goalIncome' } })}
              />
              
              <FormInput 
                label="What's your timeframe to achieve this goal?"
                type="select"
                value={formData.timeframe}
                options={['30 days', '60 days', '90 days', '6 months']}
                onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'timeframe' } })}
              />
              
              <div className="flex gap-4 mt-6">
                <button 
                  className="btn-secondary flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button 
                  className="btn-primary flex-1 flex items-center justify-center"
                  onClick={generateRoadmap}
                >
                  Generate Plan <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 3 && roadmap.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Your 14-Day Escape Plan</h2>
                <button className="btn-secondary text-sm py-1.5">
                  Save Plan
                </button>
              </div>
              
              <div className="space-y-4">
                {roadmap.map((item, index) => (
                  <div 
                    key={index}
                    className="flex p-3 rounded-lg bg-royal-primary/5 dark:bg-matrix-primary/10 border border-royal-primary/10 dark:border-matrix-primary/20"
                  >
                    <CheckCircle2 className="text-royal-primary dark:text-matrix-primary flex-shrink-0 mt-1 mr-3" size={18} />
                    <div>
                      <div className="font-medium">{item.split(':')[0]}:</div>
                      <div className="text-royal-muted dark:text-matrix-muted">{item.split(':')[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                <p className="text-success font-medium">
                  Pro Tip: Commit to completing one action every day, even if it's just 30 minutes.
                  Consistency beats intensity!
                </p>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  className="btn-secondary flex-1"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button 
                  className="btn-primary flex-1"
                >
                  Start Day 1
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};