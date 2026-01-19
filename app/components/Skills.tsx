export default function Skills() {
  const skillCategories = [
    {
      category: "Engineering",
      skills: ["Python", "Java","SQL", "Git", "Linux/Unix", "Software Architecture", "Docker", "Testing & Validation", "Algorithm Design (Graphs, Search, Optimization)", "Software Development"]
    },
    {
      category: "Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Computer Vision", "Natural Language Processing", "Multimodal Learning", "Model Evaluation & Experimentation", "ML Pipeline Design"]
    },
    {
      category: "Data Engineering",
      skills: ["Snowflake", "Data Pipelines & Automation", "Research Workflow Engineering", "Data Parsing & Validation", "Feature Engineering", "Data Warehousing", "Shell Scripting (Bash, Batch)"]
    },
    {
      category: "Analytics & Statistics",
      skills: ["Time Series Analysis", "Bayesian Modeling", "A/B Testing", "Forecasting", "Mathematical Optimization", "Risk Modeling"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Technical Skills</h2>
            <div className="h-1 w-16 bg-blue-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold text-zinc-100 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm rounded font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
