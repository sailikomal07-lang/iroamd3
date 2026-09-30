import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="bg-secondary pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/projects/project-11.png)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Projects
          </h1>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => onNavigate(`/projects/${project.slug}`)}
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-white text-[13px] mb-1 leading-snug">
                    {project.title}
                  </p>
                  <p className="text-primary text-sm capitalize mb-2">
                    {project.category} {project.year}
                  </p>
                  <span className="inline-flex items-center gap-1 text-white/60 text-xs group-hover:text-primary transition-colors">
                    See More <ArrowRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
