import {HOW_STEPS} from "../data/data"

/* ── How It Works ── */
function HowItWorks() {
  return (
    <section className="py-24 px-[6vw]" id="how-it-works">
      <div className="reveal mb-12">
        <span className="inline-block bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-[.72rem] font-bold tracking-widest uppercase mb-3">How It Works</span>
        <h2 className="font-extrabold text-[clamp(1.6rem,3.5vw,2.4rem)] tracking-tight leading-tight mb-3">From Zero to Network<br />in Minutes</h2>
        <p className="text-slate-500 text-[.975rem] leading-relaxed max-w-md">NetSim makes networking hands-on, visual, and beginner-friendly.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
        {HOW_STEPS.map((s, i) => (
          <div key={s.step} className="reveal bg-white border border-slate-200 rounded-xl p-7 hover:shadow-[0_8px_30px_rgba(37,99,235,.1)] hover:-translate-y-1 transition-all" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black mb-4">{s.step}</div>
            <h3 className="font-bold text-[1rem] mb-2">{s.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}