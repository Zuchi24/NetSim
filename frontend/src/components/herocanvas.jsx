import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const cables = svg.querySelectorAll(".cable-animated");
    const circles = [];
    const rafs = [];

    cables.forEach((line, i) => {
      const x1 = +line.getAttribute("x1"), y1 = +line.getAttribute("y1");
      const x2 = +line.getAttribute("x2"), y2 = +line.getAttribute("y2");
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("r", "3.5");
      c.setAttribute("fill", line.classList.contains("cable-blue") ? "#3b82f6" : "#10b981");
      c.setAttribute("opacity", "0.85");
      svg.appendChild(c);
      circles.push(c);

      let t = Math.random();
      const spd = 0.003 + Math.random() * 0.003;

      const startAnimation = () => {
        const tick = () => {
          t = (t + spd) % 1;
          c.setAttribute("cx", x1 + (x2 - x1) * t);
          c.setAttribute("cy", y1 + (y2 - y1) * t);
          rafs[i] = requestAnimationFrame(tick);
        };
        tick();
      };

      setTimeout(startAnimation, i * 380);
    });

    return () => {
      // cleanup all circles and animations
      circles.forEach(c => c.remove());
      rafs.forEach(r => cancelAnimationFrame(r));
    };
  }, []);

  return (
    <svg ref={svgRef} id="hero-svg" viewBox="0 0 820 310" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      <rect width="820" height="310" fill="#fafcff" rx="4" />
      <g stroke="#e2e8f0" strokeWidth=".8" opacity=".7">
        {[50,100,150,200,250].map(y => <line key={y} x1="0" y1={y} x2="820" y2={y}/>)}
        {[100,200,300,400,500,600,700].map(x => <line key={x} x1={x} y1="0" x2={x} y2="310"/>)}
      </g>
      {/* cables */}
      <line className="cable-animated cable-blue" x1="410" y1="155" x2="190" y2="78"  stroke="#93c5fd" strokeWidth="2" strokeDasharray="6,4"/>
      <line className="cable-animated cable-blue" x1="410" y1="155" x2="410" y2="52"  stroke="#93c5fd" strokeWidth="2" strokeDasharray="6,4"/>
      <line className="cable-animated cable-blue" x1="410" y1="155" x2="630" y2="78"  stroke="#93c5fd" strokeWidth="2" strokeDasharray="6,4"/>
      <line className="cable-animated cable-green" x1="410" y1="155" x2="190" y2="238" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="6,4"/>
      <line className="cable-animated cable-green" x1="410" y1="155" x2="410" y2="258" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="6,4"/>
      <line className="cable-animated cable-green" x1="410" y1="155" x2="630" y2="238" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="6,4"/>
      {/* ...rest of your SVG... */}
    </svg>
  );
}