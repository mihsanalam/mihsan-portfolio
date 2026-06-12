export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background text-text-primary">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-accent">
          Mihsan Alam
        </h1>
        <p className="text-lg md:text-xl text-text-secondary font-mono">
          Full Stack Engineer
        </p>
        <p className="text-sm text-text-secondary">
          Portfolio codebase successfully initialized with Next.js 14, TypeScript, and Tailwind CSS.
        </p>
        <div className="pt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 animate-pulse">
            Ready for development
          </span>
        </div>
      </div>
    </main>
  );
}
