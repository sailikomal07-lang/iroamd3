import { useState } from 'react';
import { processSteps } from '@/data/projects';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export default function ProcessPage({ onNavigate: _onNavigate }: ProcessPageProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-secondary pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/projects/project-6.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Process
          </h1>
        </div>
      </section>

      {/* Process steps list */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Step labels */}
          <div className="grid grid-cols-3 md:grid-cols-9 gap-px mb-16">
            {processSteps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-3 md:p-4 text-center transition-colors border-b-2 ${
                  activeStep === i
                    ? 'border-primary text-primary'
                    : 'border-dark-border text-white/60 hover:text-white'
                }`}
              >
                <span
                  className="text-[11px] md:text-[12px] font-semibold uppercase tracking-wider"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step content */}
          {processSteps[activeStep].subtitle && (
            <div className="text-center max-w-3xl mx-auto">
              <h2
                className="text-white text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {processSteps[activeStep].subtitle}
              </h2>
              <p className="text-text text-[15px] leading-[2em]">
                {processSteps[activeStep].description}
              </p>
            </div>
          )}

          {/* Software section (always shown) */}
          <div className="mt-20 border-t border-dark-border pt-12">
            <h3
              className="text-primary text-lg uppercase tracking-[10px] font-light mb-8 text-center"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: 100 }}
            >
              The Software
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4
                  className="text-white text-xl font-semibold mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Autodesk&reg; Revit&reg;
                </h4>
                <p className="text-text text-[15px] leading-[2em] mb-4">
                  Revit allows architects, engineers, and construction
                  professionals to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-text text-[15px] leading-relaxed">
                    <span className="text-primary mt-1">▪</span>
                    Model shapes, structures, and systems in 3D with parametric
                    accuracy, precision, and ease.
                  </li>
                  <li className="flex items-start gap-2 text-text text-[15px] leading-relaxed">
                    <span className="text-primary mt-1">▪</span>
                    Streamline project management with instant revisions to
                    plans, elevations, schedules, sections, and sheets.
                  </li>
                  <li className="flex items-start gap-2 text-text text-[15px] leading-relaxed">
                    <span className="text-primary mt-1">▪</span>
                    Unite multidisciplinary project teams for higher efficiency,
                    collaboration, and impact in the office or on the
                    construction site.
                  </li>
                  <li className="flex items-start gap-2 text-text text-[15px] leading-relaxed">
                    <span className="text-primary mt-1">▪</span>
                    Provide clients with a concept 3d view of their project thus
                    informing them on design decision early in the process.
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-white text-xl font-semibold mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Twinmotion
                </h4>
                <p className="text-text text-[15px] leading-[2em] mb-4">
                  Go from CAD or BIM to photoreal renderings. With Twinmotion,
                  you can clearly communicate your ideas, respond to feedback on
                  the fly, and enable every stakeholder to experience your
                  design's full potential before a single brick is laid.
                </p>
                <p className="text-text text-[15px] leading-[2em]">
                  A 3D flythrough is a technique employed in design
                  presentations that offers a virtual journey through space from
                  a fixed perspective. It involves a seamless animation that
                  takes viewers on a guided tour, showcasing the design's
                  different areas and key features. The camera smoothly navigates
                  through the environment, providing a dynamic and visually
                  engaging experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
