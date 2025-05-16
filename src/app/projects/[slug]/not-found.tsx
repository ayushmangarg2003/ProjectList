import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-2xl font-bold">Project Not Found</h2>
      <p className="text-zinc-400 max-w-md">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
      >
        ← Back to Projects
      </Link>
    </div>
  );
} 