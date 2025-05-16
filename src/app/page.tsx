import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-8 m-auto max-w-5xl justify-center items-center">
      <section className="space-y-4 animate-fade-in w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
        <p className="text-zinc-400 max-w-2xl text-center">
          A collection of web development projects showcasing my skills in building modern, responsive, and user-friendly applications.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group block bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-48 md:h-64">
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold group-hover:text-white transition-colors">
                  {project.name}
                </h2>
                <p className="text-zinc-400 text-sm">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2 py-1 text-xs rounded-full ${tech.color} transition-transform duration-300 hover:scale-110`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>{project.month} {project.year}</span>
                <span className="group-hover:text-white transition-colors">
                  View Project →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
