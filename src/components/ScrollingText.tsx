const ScrollingText = () => {
  const quotes = [
    "Hidup ini penuh ujian, tapi setiap luka adalah pelajaran untuk menjadi lebih kuat.",
    "Jangan takut berjalan sendiri, karena kadang jalan terpanjang membawa kita ke tujuan yang paling berharga.",
    "Persahabatan bukan tentang selalu bersama, tapi tentang selalu ada ketika dibutuhkan.",
    "Kesedihan itu nyata, tapi harapan lebih kuat dari kegelapan.",
    "Kegagalan hanyalah langkah awal menuju kemenangan sejati.",
    "Seseorang yang memilih untuk melindungi orang lain, meski sendirian, adalah pahlawan sejati.",
    "Impianmu adalah kekuatanmu; jangan biarkan orang lain menentukan batasnya.",
    "Kebencian bisa menghancurkan, tapi cinta dan pengertian bisa menyembuhkan luka terdalam."
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 py-3 overflow-hidden">
      <div className="scrolling-text osaka-font text-white text-lg font-bold">
        {quotes.join(" • ")} • {quotes.join(" • ")}
      </div>
    </div>
  );
};

export default ScrollingText;