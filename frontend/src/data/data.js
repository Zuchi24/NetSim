/* ── data ── */
const HOW_STEPS = [
  { step: "01", title: "Drag & Drop Devices", desc: "Pick from PCs, routers, and switches. Place them on your canvas to start building any topology." },
  { step: "02", title: "Connect with Cables", desc: "Choose the right cable — straight-through, crossover, or rollover — and wire your devices." },
  { step: "03", title: "Complete Challenges", desc: "Work through up to 15 real-world networking tasks with built-in guidance and progress tracking." },
];
 
const FEATURES = [
  { icon: "🗺️", title: "Visual Topology Builder", desc: "Build star, bus, ring, and mesh topologies with an intuitive drag-and-drop canvas." },
  { icon: "📋", title: "Guided Activities", desc: "Step-by-step tasks walk you through setup procedures aligned with your IT curriculum." },
  { icon: "📊", title: "Progress Tracking", desc: "See which challenges you've completed and how close you are to mastering each concept." },
];
 
const CHALLENGES = [
  { num: "#01", diff: "Easy", diffClass: "bg-green-100 text-green-700", title: "Build a Star Topology", desc: "Connect 4 PCs to a central switch using straight-through cables.", devices: 4, pct: 90, status: "90% complete" },
  { num: "#02", diff: "Easy", diffClass: "bg-green-100 text-green-700", title: "PC-to-PC Direct Link", desc: "Use a crossover cable to connect two PCs without a switch.", devices: 2, pct: 100, status: "Completed ✓" },
  { num: "#03", diff: "Medium", diffClass: "bg-yellow-100 text-yellow-700", title: "Design a Bus Network", desc: "Chain multiple PCs in a bus topology using the correct cable configuration.", devices: 6, pct: 45, status: "45% complete" },
  { num: "#04", diff: "Medium", diffClass: "bg-yellow-100 text-yellow-700", title: "Router Configuration", desc: "Add a router to link two separate LAN segments into one network.", devices: 8, pct: 10, status: "10% complete" },
  { num: "#05", diff: "Hard", diffClass: "bg-red-100 text-red-600", title: "Hybrid Topology", desc: "Combine star and bus topologies into one functional hybrid layout.", devices: 12, pct: 0, status: "Not started" },
  { num: "#06", diff: "Hard", diffClass: "bg-red-100 text-red-600", title: "Multi-Switch LAN", desc: "Cascade multiple switches to expand the network beyond a single switch.", devices: 10, pct: 0, status: "Not started" },
];