export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Education</h2>
            <div className="h-1 w-16 bg-blue-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* MS Business Analytics */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">Master of Science in Business Analytics</h3>
                  <p className="text-zinc-400 font-medium mt-2">University of Texas at Austin</p>
                  <p className="text-zinc-500 text-sm mt-1">In Progress</p>
                </div>
                
                <div className="space-y-2 text-zinc-400 text-sm">
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Advanced Machine Learning & Predictive Modeling</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Statistical Analysis & Data Mining</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Business Intelligence & Analytics</span>
                  </p>
                </div>
              </div>
            </div>

            {/* MS Biomedical Engineering */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">Master of Science in Biomedical Engineering</h3>
                  <p className="text-zinc-400 font-medium mt-2">University of North Texas</p>
                  <p className="text-zinc-500 text-sm mt-1">Completed 2025</p>
                </div>
                
                <div className="space-y-2 text-zinc-400 text-sm">
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Computational Research Methods</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Data Pipeline Development</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Research Automation & Infrastructure</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
