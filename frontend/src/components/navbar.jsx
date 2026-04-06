export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[6vw] bg-white/90 backdrop-blur-md border-b border-slate-200">
      <a href="#" className="flex items-center gap-2 font-extrabold text-[1.15rem] text-slate-900 no-underline">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">🌐</div>
        NetSim
      </a>
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["How It Works","Features","Challenges","About"].map(l => (
          <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="text-slate-500 text-sm font-medium hover:text-blue-600 no-underline transition-colors">{l}</a></li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <a href="#" className="text-slate-800 text-sm font-semibold px-4 py-2 rounded-lg border border-slate-200 bg-white hover:border-blue-500 hover:text-blue-600 no-underline transition-colors">Log In</a>
        <a href="#" className="text-white text-sm font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 no-underline transition-all hover:-translate-y-px">Sign Up</a>
      </div>
    </nav>
  );
}

/* ── Nav ── */
