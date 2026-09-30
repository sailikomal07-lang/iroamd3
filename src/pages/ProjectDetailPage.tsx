import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ProjectDetailPage({ slug, onNavigate }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-secondary pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">Project not found</p>
          <button
            onClick={() => onNavigate('/projects')}
            className="text-primary hover:opacity-80"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-secondary pt-20">
      {/* Hero image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {project.title}
            </h1>
            <p className="text-primary text-lg mt-2 capitalize">
              {project.category} {project.year}
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {project.builder && (
            <div className="mb-8">
              <h3
                className="text-white text-sm uppercase tracking-wider mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Built By
              </h3>
              <p className="text-primary text-lg">{project.builder}</p>
            </div>
          )}

          {project.salesInfo && project.salesInfo.length > 0 && (
            <div className="mb-12">
              <h3
                className="text-white text-sm uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sales Information
              </h3>
              <ul className="space-y-2">
                {project.salesInfo.map((info, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text text-[15px] leading-relaxed"
                  >
                    <span className="text-primary mt-1">▪</span>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h3
                className="text-white text-sm uppercase tracking-wider mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="overflow-hidden aspect-[4/3]">
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prev/Next navigation */}
          <div className="flex items-center justify-between border-t border-dark-border pt-8 mt-8">
            {prevProject ? (
              <button
                onClick={() => onNavigate(`/projects/${prevProject.slug}`)}
                className="flex items-center gap-2 text-text hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft size={16} /> {prevProject.title}
              </button>
            ) : (
              <span />
            )}
            {nextProject ? (
              <button
                onClick={() => onNavigate(`/projects/${nextProject.slug}`)}
                className="flex items-center gap-2 text-text hover:text-primary transition-colors text-sm text-right"
              >
                {nextProject.title} <ArrowRight size={16} />
              </button>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
