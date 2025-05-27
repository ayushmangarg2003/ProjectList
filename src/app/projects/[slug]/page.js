'use client';

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    notFound();
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
        <p className="text-zinc-400">{project.longDescription}</p>
      </div>

      <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden cursor-pointer"
           onClick={() => handleImageClick({ src: project.thumbnail, alt: project.name })}>
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 text-sm rounded-full ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Links</h2>
            <div className="space-y-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-center bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                View on GitHub
              </a>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-center bg-white text-black hover:bg-zinc-200 rounded-lg transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>
            <p className="text-zinc-300">
              {project.month} {project.year}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image) => (
            <div
              key={image.id}
              className="relative h-[450px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick({ src: `/images/${project.slug}/${image.id}.png`, alt: image.alt })}
            >
              <Image
                src={`/images/${project.slug}/${image.id}.png`}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </div>
  );
} 