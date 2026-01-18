import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "TileShift",
      githubUrl: "https://github.com/sgromk/TileShift",
      description: "A tile-shifting puzzle game with a GUI and level creator, built using the Model-View-Controller and Builder design patterns.",
      technologies: ["Python", "PyGame", "Algorithms"]
    },
    {
      title: "NYC Transit Analysis",
      githubUrl: "https://github.com/sgromk/nyc-transit-analysis",
      description: "A Tournament of Models for NYC MTA ridership forecasting. Evaluates ARIMA and Bayesian AR(7) to predict subway, bus, and bridge demand for transit supply chain optimization and capacity planning.",
      technologies: ["Python", "Pandas", "Data Visualization", "SQL"]
    },
    {
      title: "Applied Optimization for Business",
      githubUrl: "https://github.com/sgromk/optimization-projects",
      description: "Collection of mathematical optimization projects focusing on Linear Programming (LP), Nonlinear Programming (NLP), and integer-based decision modeling.",
      technologies: ["Python", "Linear Programming", "Operations Research"]
    },
    {
      title: "Multimodal Price Prediction",
      githubUrl: "https://github.com/sgromk/multimodal-price-prediction",
      description: "A multimodal machine learning pipeline to predict ASOS apparel prices by fusing tabular metadata, NLP (BERT), and Computer Vision (ConvNeXt) in a Late-Fusion architecture to capture brand prestige and aesthetic value.",
      technologies: ["PyTorch", "Computer Vision", "NLP", "Time Series"]
    },
    {
      title: "Protein Parser",
      githubUrl: "https://github.com/sgromk",
      description: "Bioinformatics tool for parsing and analyzing protein sequence data with structural validation.",
      technologies: ["Python", "Bioinformatics", "Data Parsing"]
    },
    {
      title: "Austin Restaurant Whitespace",
      githubUrl: "https://github.com/sgromk",
      description: "Market analysis identifying underserved culinary niches in the Austin restaurant ecosystem.",
      technologies: ["Python", "Market Analysis", "Data Mining", "Visualization"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Projects</h2>
            <div className="h-1 w-16 bg-blue-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all group"
              >
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
