const VideoSection = () => {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-8"
      style={{
        backgroundImage: 'url(/gif/naruto-naruto-shippuden.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Main Content Panel */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="glassmorphism anime-border neon-glow rounded-2xl p-8 text-center fade-in">
          {/* Animated border container */}
          <div className="animated-border rounded-xl p-6 mb-6">
            <h1 className="text-4xl font-bold text-yellow-400 osaka-font mb-4 typing-animation">
              VIDEO NARUTO SHIPPUDEN COMING SOON EPS 1 - 500
            </h1>
          </div>
          
          <div className="space-y-6 text-lg">
            <p className="text-white osaka-font font-semibold bg-black/30 rounded-lg p-4 border border-orange-400/50">
              Saya lagi nyari cara biar bisa nonton tanpa berbayar tunggu ya
            </p>
            
            <p className="text-yellow-300 osaka-font font-semibold bg-black/30 rounded-lg p-4 border border-yellow-400/50">
              Bila ada yang bisa membantu email saya di sini: 💌 x866bash.github@zohomail.com
            </p>
            
            <p className="text-green-300 osaka-font font-semibold bg-black/30 rounded-lg p-4 border border-green-400/50">
              Terimakasih sudah mampir ke website jelek saya 🤠🙏
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#FFD600', '#FF6F00', '#FF3D00', '#00C853'][Math.floor(Math.random() * 4)]
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;