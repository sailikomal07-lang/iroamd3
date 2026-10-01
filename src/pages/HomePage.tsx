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
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const homeWorkImages = [
    '/images/projects/home-work-1.jpg',
    '/images/projects/home-work-2.jpg',
    '/images/projects/home-work-3.jpg',
    '/images/projects/home-work-4.jpg',
    '/images/projects/home-work-5.jpg',
    '/images/projects/home-work-6.jpg',
  ];

  const workTitles = [
    'Residence 2008',
    'APARTMENT ADDITION 2013',
    'Residence extension & renovation 2015',
    'Multi unit development 2018',
    'Dual Occupancy 2020',
    'multi unit development 2021',
  ];

  return (
    <div className="bg-secondary">
      {/* Hero Slider - full screen with titles */}
      <section className="relative h-screen overflow-hidden">
        {homeHeroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `scale(1.05) translate${i === currentSlide ? 'Y(0)' : 'Y(2%)'}`,
                transition: 'transform 6s ease-out',
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="text-center max-w-3xl">
                <h1
                  className="text-white text-3xl md:text-5xl lg:text-6xl font-light mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slide.title}
                </h1>
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

      {/* About Us / Our Company section with IROAMD3-PL background */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/misc/iroamd3-pl.png)' }}
        />
        <div className="absolute inset-0 bg-secondary/90" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-primary text-[18px] uppercase tracking-[10px] font-thin mb-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                ABOUT US
              </p>
              <h2
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                OUR COMAPNY
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

            {/* Step cards */}
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
                    className="text-white text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {step.title}
                  </h4>
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
            {homeFeaturedProjects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => onNavigate(`/projects/${project.slug}`)}
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <img
                  src={homeWorkImages[i]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-white text-[14px] mb-1">
                    {workTitles[i]}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-xs mt-2 group-hover:opacity-80 transition-opacity">
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
