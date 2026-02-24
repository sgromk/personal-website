import Link from 'next/link';

export default function CV() {
  return (
    <div
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--portfolio-bg-main)' }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="border border-zinc-800 rounded-lg p-8 bg-zinc-900/50">
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">
            Curriculum Vitae
          </h1>
          <div className="h-1 w-16 bg-blue-500 mb-8" />

          <div className="space-y-6 text-zinc-400">
            <p className="text-lg">
              A full academic and technical CV will be available here soon.
            </p>

            <p>
              This page will include:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Relevant graduate coursework in machine learning, optimization,
                and statistics
              </li>
              <li>
                Detailed descriptions of major research and industry projects
              </li>
              <li>
                Professional experience and collaborations with local companies
              </li>
              <li>
                Conference presentations and technical events
              </li>
              <li>
                Certifications and specialized training
              </li>
            </ul>

            <p>
              A downloadable PDF version will also be provided.
            </p>

            <div className="pt-6">
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                Quick Links
              </h2>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/#experience"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded border border-zinc-700 transition-all"
                >
                  View Experience
                </Link>
                <Link
                  href="/#education"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded border border-zinc-700 transition-all"
                >
                  View Education
                </Link>
                <Link
                  href="/#projects"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded border border-zinc-700 transition-all"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}