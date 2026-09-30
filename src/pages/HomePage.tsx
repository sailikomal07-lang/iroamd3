import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  homeHeroSlides,
  homeFeaturedProjects,
  homeProcessSteps,
  industryAssociations,
} from '@/data/projects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % homeHeroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-secondary">
      {/* Hero Slider - full screen */}
      <section className="relative h-screen overflow-hidden">
        {homeHeroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="text-center max-w-3xl">
                <h2
                  className="text-white text-3xl md:text-5xl lg:text-6xl font-light mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slide.title}
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {homeHeroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-8 h-[2px] transition-all ${
                i === currentSlide ? 'bg-primary' : 'bg-white/30'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Three bordered columns: About, Process, Profile */}
      <section className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {/* About */}
          <button
            onClick={() => onNavigate('/about')}
            className="group text-left p-10 md:p-12 lg:p-16 border-r border-white/10 hover:bg-secondary-light transition-colors"
          >
            <h3
              className="text-primary text-lg uppercase tracking-[10px] mb-6 font-light"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: 100 }}
            >
              About
            </h3>
            <p className="text-white/80 text-[15px] leading-[2em]">
              A highly skilled professional equipped to tackle the unique
              opportunities and challenges presented by your project.
            </p>
          </button>

          {/* Process */}
          <button
            onClick={() => onNavigate('/process')}
            className="group text-left p-10 md:p-12 lg:p-16 border-r border-white/10 hover:bg-secondary-light transition-colors"
          >
            <h3
              className="text-primary text-lg uppercase tracking-[10px] mb-6 font-light"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: 100 }}
            >
              Process
            </h3>
            <p className="text-white/80 text-[15px] leading-[2em]">
              A feasibility study is an assessment that determines the
              likelihood of success for a proposed project.
            </p>
          </button>

          {/* Profile */}
          <button
            onClick={() => onNavigate('/profile')}
            className="group text-left p-10 md:p-12 lg:p-16 hover:bg-secondary-light transition-colors"
          >
            <h3
              className="text-primary text-lg uppercase tracking-[10px] mb-6 font-light"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: 100 }}
            >
              Profile
            </h3>
            <p className="text-white/80 text-[15px] leading-[2em]">
              Iroamd3 is a design driven practice that produce elegant and
              crafted solutions, developing organically from the site…
            </p>
          </button>
        </div>
      </section>

      {/* About Us / Our Company section - dark with pic7 background */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/misc/pic7.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-primary text-[18px] uppercase tracking-[10px] font-thin mb-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                About Us
              </p>
              <h2
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                OUR COMPANY
              </h2>
              <p className="text-primary text-xl md:text-2xl mb-2">
                25 years of Experience
              </p>
              <p className="text-white/70 text-[15px] leading-[2em] max-w-lg">
                With a quarter-century of accumulated expertise and insights,
                we bring a wealth of experience to every project, ensuring
                unparalleled excellence in design and execution across diverse
                built environments
              </p>
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-3 gap-4">
              {homeProcessSteps.map((step) => (
                <div
                  key={step.num}
                  className="border border-white/10 p-6 text-center hover:border-primary transition-colors"
                >
                  <p className="text-primary text-3xl font-light mb-3">
                    {step.num}
                  </p>
                  <h4
                    className="text-white text-sm uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Works */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-white text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              OUR WORKS
            </h2>
            <button
              onClick={() => onNavigate('/projects')}
              className="text-primary text-[12px] uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              See More <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeFeaturedProjects.map((project) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-primary text-[12px] uppercase tracking-wider mb-1">
                    {project.title}
                  </p>
                  <p className="text-white text-sm capitalize">
                    {project.category} {project.year}
                  </p>
                  <span className="inline-flex items-center gap-1 text-white/60 text-xs mt-2 group-hover:text-primary transition-colors">
                    See More <ArrowRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Associations */}
      <section className="bg-secondary-light py-20 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-white text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Industry Associations
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {industryAssociations.map((assoc) => (
              <div
                key={assoc.name}
                className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <img
                  src={assoc.logo}
                  alt={assoc.name}
                  className="max-h-20 max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
