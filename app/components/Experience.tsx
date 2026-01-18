export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Professional Experience</h2>
            <div className="h-1 w-16 bg-blue-500" />
          </div>

          <div className="space-y-10">
            {/* Google Capstone */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">Computer Vision Capstone Project</h3>
                  <p className="text-blue-400 font-medium">Industry Partner: Google</p>
                </div>
                <span className="text-zinc-500 text-sm mt-2 sm:mt-0">January 2026 - Present</span>
              </div>
              
              <div className="space-y-3 text-zinc-400">
                {/* In Progress Section */}
                <h4 className="text-zinc-200 font-medium">In Progress</h4>
                <ul className="space-y-2 pl-5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Conducting a literature review on action recognition techniques in computer vision and analyzing EHS regulations across different regions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Performing data augmentation on training datasets to improve model robustness and support future experimentation.</span>
                  </li>
                </ul>

                {/* Project Deliverables Section */}
                <h4 className="text-zinc-200 font-medium mt-4">Project Goals / Deliverables</h4>
                <ul className="space-y-2 pl-5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Prototype a computer vision pipeline to detect EHS-related incidents and automate structured data extraction for reporting.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Develop models for action recognition and temporal sequence analysis to identify potential causes and risk factors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Establish modular ML workflows and infrastructure to support iterative experimentation and reproducibility.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dry Lab Research */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">Graduate Researcher</h3>
                  <p className="text-blue-400 font-medium">Biomedical Engineering Research</p>
                </div>
                <span className="text-zinc-500 text-sm mt-2 sm:mt-0">2022 - 2025</span>
              </div>
              
              <div className="space-y-3 text-zinc-400">
                <p>
                  Designed and implemented automated data orchestration systems for complex research datasets. 
                  Built Python-based pipelines emphasizing modularity, reproducibility, and automation.
                </p>
                <ul className="space-y-2 pl-5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Constructed a data pipeline in MATLAB and Python utilizing machine learning and statistical modeling to determine module compatibility in hybrid transcription regulators.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Published two review papers and submitted an experimental paper focusing on predictive modeling for genetic circuits, funded by a government grant.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Composed a 70-page research paper and technical documentation in LaTeX, including self-designed figures to illustrate complex biological and statistical models.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Automated data processing workflows and implemented contemporary analysis techniques, resulting in a several-fold increase in data throughput.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded-full font-mono">Python</span>
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded-full font-mono">MATLAB</span>
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded-full font-mono">Data Orchestration & Pipelines</span>
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded-full font-mono">Statistical & Predictive Modeling</span>
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded-full font-mono">Research Workflow Automation</span>
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded-full font-mono">Shell Scripting (Bash & Batch)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
