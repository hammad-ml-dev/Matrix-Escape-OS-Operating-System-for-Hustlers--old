import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { EscapePlan } from './pages/EscapePlan';
import { ViralPrompts } from './pages/ViralPrompts';
import { SeoWriter } from './pages/SeoWriter';
import { DesignToolkit } from './pages/DesignToolkit';
import { LearnEscape } from './pages/LearnEscape';
import { ToolStack } from './pages/ToolStack';
import { SideHustle } from './pages/SideHustle';
import { Layout } from './components/Layout';
import { WelcomeModal } from './components/WelcomeModal';

function App() {
  const [showWelcome, setShowWelcome] = React.useState(() => {
    return !localStorage.getItem('welcomeShown');
  });

  const handleCloseWelcome = () => {
    localStorage.setItem('welcomeShown', 'true');
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <WelcomeModal onClose={handleCloseWelcome} />}
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/escape-plan" element={<EscapePlan />} />
          <Route path="/viral-prompts" element={<ViralPrompts />} />
          <Route path="/seo-writer" element={<SeoWriter />} />
          <Route path="/design-toolkit" element={<DesignToolkit />} />
          <Route path="/learn-escape" element={<LearnEscape />} />
          <Route path="/tool-stack" element={<ToolStack />} />
          <Route path="/side-hustle" element={<SideHustle />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
