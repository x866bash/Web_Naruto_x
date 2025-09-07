interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-yellow-400/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          {['home', 'video', 'author'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                px-6 py-2 rounded-lg font-bold text-lg transition-all duration-300 osaka-font
                ${activeSection === section 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg shadow-orange-500/50' 
                  : 'text-yellow-400 hover:text-orange-400 hover:bg-white/10'
                }
                hover:scale-105 transform
              `}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;