import { useState } from 'react';
import MouseFollower from '../components/MouseFollower';
import Navigation from '../components/Navigation';
import HomeSection from '../components/HomeSection';
import VideoSection from '../components/VideoSection';
import AuthorSection from '../components/AuthorSection';
import ScrollingText from '../components/ScrollingText';
import '../styles/animations.css';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'video':
        return <VideoSection />;
      case 'author':
        return <AuthorSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <MouseFollower />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        {renderSection()}
      </main>
      
      <ScrollingText />
    </div>
  );
}