export const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-900 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-green-600 font-black text-sm uppercase tracking-widest">
          SAAS
        </div>

        <div className="flex gap-8 text-[10px] text-gray-400 font-mono uppercase tracking-widest">
          <p>KRS: 0001227188</p>
          <p>NIP: 5993310463</p>
          <p>REGON: 544152102</p>
        </div>

        <div className="text-[10px] text-green-700 font-mono">
          © 2026 WSZELKIE PRAWA ZASTRZEŻONE
        </div>
        
      </div>
    </footer>
  );
};