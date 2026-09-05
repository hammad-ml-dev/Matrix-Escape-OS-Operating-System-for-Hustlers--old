import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/themecontext';
import {
  Menu, X, Home, Compass, Zap, PenTool, Palette,
  BookOpen, Wrench, DollarSign, Sun, Moon, User
} from 'lucide-react';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 p-3 rounded-lg transition-all duration-200
        ${isActive 
          ? 'bg-royal-primary/10 dark:bg-matrix-primary/20 text-royal-primary dark:text-matrix-primary font-medium' 
          : 'hover:bg-royal-primary/5 dark:hover:bg-matrix-primary/10 text-royal-text dark:text-matrix-text'}
      `}
      onClick={() => setSidebarOpen(false)}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile menu button */}
      <button
        className="fixed z-50 top-4 left-4 p-2 rounded-full bg-white dark:bg-matrix-bg shadow-md dark:shadow-matrix-primary/20 md:hidden"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-matrix-bg border-r border-gray-200 dark:border-matrix-muted/30 w-64 flex flex-col`}
      >
        <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-matrix-muted/30">
          <Logo className="h-10 w-10" />
          <h1 className="ml-2 text-xl font-bold">Matrix Escape OS</h1>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide py-4 px-3 space-y-1">
          <NavItem to="/" icon={<Home size={20} />} label="Dashboard" />
          <NavItem to="/escape-plan" icon={<Compass size={20} />} label="Escape Plan" />
          <NavItem to="/viral-prompts" icon={<Zap size={20} />} label="Viral Prompts" />
          <NavItem to="/seo-writer" icon={<PenTool size={20} />} label="SEO Writer" />
          <NavItem to="/design-toolkit" icon={<Palette size={20} />} label="Design Toolkit" />
          <NavItem to="/learn-escape" icon={<BookOpen size={20} />} label="Learn & Escape" />
          <NavItem to="/tool-stack" icon={<Wrench size={20} />} label="Tool Stack" />
          <NavItem to="/side-hustle" icon={<DollarSign size={20} />} label="Side Hustle" />
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-matrix-muted/30 space-y-2">
          <button 
            className="w-full flex items-center justify-between p-3 rounded-lg bg-royal-primary/5 dark:bg-matrix-primary/10"
            onClick={toggleTheme}
          >
            <span className="flex items-center gap-2">
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </span>
            <span className="w-10 h-6 bg-gray-300 dark:bg-matrix-muted rounded-full flex items-center transition duration-300 px-1">
              <span className={`w-4 h-4 rounded-full bg-white dark:bg-matrix-primary transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : ''}`}></span>
            </span>
          </button>
          
          <button className="w-full flex items-center gap-2 p-3 rounded-lg bg-royal-primary dark:bg-matrix-primary text-white dark:text-matrix-bg font-medium">
            <User size={18} />
            <span>Free Trial (14 days)</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};