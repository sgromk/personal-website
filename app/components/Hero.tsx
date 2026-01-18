export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight">Gabriel Kinshuk</h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-blue-400 font-medium">
                Machine Learning Engineering & Data Science
              </p>
              <div className="h-1 w-24 bg-blue-500" />
            </div>
            
            <div className="space-y-6 text-lg text-zinc-400">
              <p className="max-w-3xl">
                I build rigorous, scalable data pipelines and machine learning systems for high-stakes research and business environments. By combining statistical modeling with mathematical optimization, I transform complex data into actionable insights that support strategic decision-making.
              </p>
              <p className="max-w-3xl">
                My work spans automating research workflows, developing computer vision infrastructure, and applying optimization to solve supply chain challenges. Across every project, I prioritize reproducibility, engineering rigor, and measurable impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#experience" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-zinc-100 font-medium rounded border border-blue-500 transition-all"
              >
                View Experience
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded border border-zinc-700 transition-all"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-8 text-zinc-500">
              <a href="https://github.com/sgromk" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/gabrielkinshuk" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:g.kinshuk11@gmail.com" className="hover:text-zinc-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Headshot Placeholder */}
          <div className="hidden md:block">
            <div className="w-[300px] h-[300px] rounded-lg border-2 border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
              <div className="text-center text-zinc-600">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p className="text-sm font-mono">Headshot Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
