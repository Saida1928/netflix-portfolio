export default function NetflixPortfolio() {
  const resumeUrl = "https://example.com/resume.pdf";

  const projects = [
    { title: "VISRAI", desc: "AI-powered silent system performance monitor." },
    { title: "Textile ERP", desc: "End-to-end workflow digitization for textile ops." },
    { title: "BA to PM Journey", desc: "Strategic product case studies and growth roadmap." },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[70vh] bg-gradient-to-r from-black via-red-950 to-black flex items-center px-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            SAIDA VALI
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Business Analyst • Product Thinker • Future Product Manager
          </p>
          <div className="flex gap-4">
            <a
              href="#resume"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold shadow-lg"
            >
              ▶ Preview Resume
            </a>
            <a
              href={resumeUrl}
              download
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-2xl font-semibold"
            >
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Continue Watching Style Project Row */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-3xl p-6 shadow-xl border border-zinc-800"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Preview */}
      <section id="resume" className="px-8 py-10">
        <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>
        <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <iframe
            src={resumeUrl}
            title="Resume Preview"
            className="w-full h-[700px] bg-white"
          />
        </div>
        <div className="mt-4">
          <a
            href={resumeUrl}
            download
            className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold"
          >
            Download PDF Resume
          </a>
        </div>
      </section>
    </div>
  );
}
