import { useState } from 'react';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

const HomeSection = ({ setActiveSection }: HomeSectionProps) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setActiveSection('video');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex flex-col items-center justify-center p-8">
      {/* Main Naruto + Sasuke GIF */}
      <div className="mb-12 fade-in">
        <div className="mirror-effect">
          <img 
            src="/gif/naruto+sasuke.gif" 
            alt="Naruto and Sasuke" 
            className="w-80 h-60 object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Side by side GIFs */}
      <div className="flex space-x-8 mb-12 fade-in">
        <div className="mirror-effect">
          <img 
            src="/gif/naruto-maju.gif" 
            alt="Naruto Moving" 
            className="w-32 h-32 object-contain rounded-lg hover-glow"
          />
        </div>
        <div className="mirror-effect">
          <img 
            src="/gif/sasuke+maju.gif" 
            alt="Sasuke Moving" 
            className="w-32 h-32 object-contain rounded-lg hover-glow"
          />
        </div>
      </div>

      {/* Click Me Button */}
      <button
        onClick={handleButtonClick}
        className={`
          relative overflow-hidden rounded-full p-2 transition-all duration-300
          ${isButtonClicked ? 'fire-animation' : ''}
          hover:scale-110 transform pulse-glow
        `}
      >
        <img 
          src="/gif/klik+me.gif" 
          alt="Click Me" 
          className="w-11 h-11 object-contain"
        />
        {isButtonClicked && (
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-80 rounded-full animate-ping" />
        )}
      </button>

      {/* Particles effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;