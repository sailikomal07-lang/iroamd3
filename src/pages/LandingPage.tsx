import { useState, useEffect, useCallback } from 'react';
import { homeHeroSlides } from '@/data/projects';

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % homeHeroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-secondary">
      {/* Full screen parallax slider */}
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
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Centered logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src="/images/logos/iroamd3-logo.png"
            alt="Iroamd3"
            className="h-48 md:h-64 w-auto mx-auto"
          />
        </div>

        {/* Slide pagination dots */}
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
    </div>
  );
}
