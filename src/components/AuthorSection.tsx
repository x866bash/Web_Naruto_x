const AuthorSection = () => {
  const quotes = [
    {
      title: "Jalan Ninja dan Luka yang Membentuk",
      text: "Di setiap langkahku, ada luka yang menggores jiwa. Setiap air mata adalah tinta yang menulis pelajaran. Meski kadang kesepian menyelimuti, aku belajar: Kekuatan sejati lahir dari hati yang tak menyerah."
    },
    {
      title: "Persahabatan dan Ikatan Tanpa Batas", 
      text: "Kita mungkin berbeda jalan, berbeda mimpi, Tapi persahabatan sejati tetap terikat, Seperti benang tak terlihat yang menghubungkan hati, Menyadarkan kita: tidak ada yang sendirian di dunia ini."
    },
    {
      title: "Impian yang Membakar Jiwa",
      text: "Aku pernah ragu, takut gagal, takut kehilangan arah. Tapi impianku adalah api yang tak pernah padam, Mendorongku melangkah melewati kegelapan, Karena hanya mereka yang berani bermimpi, yang bisa meraih bintang."
    },
    {
      title: "Menghadapi Kehilangan dan Kebencian",
      text: "Kebencian bisa membuat hati hancur, Kehilangan bisa membuat jiwa tersesat. Namun dari keduanya, aku belajar untuk mengasihi, Untuk melindungi mereka yang tersisa, Dan menemukan kekuatan dalam luka sendiri."
    },
    {
      title: "Menjadi Diriku Sendiri",
      text: "Aku bukan pahlawan karena aku sempurna, Aku menjadi pahlawan karena aku memilih untuk berdiri, Mempertahankan apa yang penting, meski dunia menentang. Karena keberanian sejati adalah terus melangkah, walau takut."
    }
  ];

  return (
    <div 
      className="min-h-screen relative p-8"
      style={{
        backgroundImage: 'url(/gif/naruto+marah.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Fog overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="glassmorphism anime-border neon-glow rounded-2xl p-8 mb-8 fade-in">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg shadow-orange-500/50 hover-glow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Naruto Avatar SVG */}
                  <circle cx="50" cy="50" r="48" fill="#FFDBAC"/>
                  <circle cx="35" cy="40" r="3" fill="#000"/>
                  <circle cx="65" cy="40" r="3" fill="#000"/>
                  <path d="M 40 55 Q 50 65 60 55" stroke="#000" strokeWidth="2" fill="none"/>
                  <path d="M 30 25 Q 50 15 70 25 Q 70 35 50 30 Q 30 35 30 25" fill="#FFD700"/>
                  <circle cx="45" cy="35" r="1" fill="#FF0000"/>
                  <circle cx="55" cy="35" r="1" fill="#FF0000"/>
                  <circle cx="50" cy="38" r="1" fill="#FF0000"/>
                </svg>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-yellow-400 osaka-font mb-2">x866bash</h2>
              <p className="text-orange-300 text-lg osaka-font mb-4">Web Developer & Anime Enthusiast</p>
              <div className="glassmorphism rounded-lg p-4 border border-yellow-400/30">
                <h3 className="text-yellow-300 font-bold mb-2">Syntax yang digunakan:</h3>
                <p className="text-white text-sm">
                  Website ini dibuat menggunakan React + TypeScript + Tailwind CSS dengan 
                  efek glassmorphism, animasi CSS custom, gradient borders, dan mouse tracking. 
                  Menggunakan komponen modular untuk navigation, sections, dan animations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="glassmorphism anime-border rounded-xl p-6 hover-glow fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-yellow-400 font-bold osaka-font text-lg mb-4 border-b border-orange-400/30 pb-2">
                {quote.title}
              </h3>
              <p className="text-white/90 osaka-font text-sm leading-relaxed">
                {quote.text}
              </p>
            </div>
          ))}
        </div>

        {/* Credit */}
        <div className="mt-12 text-center">
          <div className="glassmorphism rounded-full px-8 py-4 inline-block border border-pink-400/50">
            <p className="text-pink-300 osaka-font font-bold">
              Credit by: x866bash - Dibuat dengan cinta 🥰💖
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
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

export default AuthorSection;