export default function Skills() {
  const skillCategories = [
    {
      category: "Engineering",
      skills: ["Python", "SQL", "TypeScript", "Git", "Linux/Unix", "Docker", "CI/CD Pipelines"]
    },
    {
      category: "Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Computer Vision", "MLOps", "Model Training", "Hyperparameter Tuning"]
    },
    {
      category: "Data Engineering",
      skills: ["ETL Pipelines", "Data Orchestration", "Apache Spark", "Airflow", "Data Warehousing", "Stream Processing"]
    },
    {
      category: "Analytics & Statistics",
      skills: ["Statistical Modeling", "Predictive Analytics", "A/B Testing", "Experimental Design", "Time Series Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Technical Skills (TODO)</h2>
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
