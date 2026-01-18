import Link from 'next/link';

export default function OptimizationProjects() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-zinc-100 mb-2">Applied Optimization for Business</h1>
            <div className="h-1 w-16 bg-blue-500 mb-6" />
          </div>

          <div className="space-y-6 text-zinc-400">
            <p>
              Collection of mathematical optimization solutions for complex resource allocation and scheduling problems.
            </p>
            
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">Project Overview</h2>
              <p>Details coming soon.</p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm rounded font-mono">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
