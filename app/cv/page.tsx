import Link from 'next/link';

export default function CV() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--portfolio-bg-main)' }}>
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
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">Curriculum Vitae</h1>
          <div className="h-1 w-16 bg-blue-500 mb-8" />
          
          <div className="space-y-6 text-zinc-400">
            <p className="text-lg">
              CV content coming soon. This page will contain a detailed curriculum vitae 
              or link to download a PDF version.
            </p>
            
            <div className="pt-4">
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">Quick Links</h2>
              <div className="flex gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
