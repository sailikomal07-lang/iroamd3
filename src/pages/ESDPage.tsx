interface ESDPageProps {
  onNavigate: (path: string) => void;
}

export default function ESDPage({ onNavigate: _onNavigate }: ESDPageProps) {
  return (
    <div className="bg-secondary pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/projects/project-3.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ESD
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="space-y-6 mb-12">
            <p className="text-text text-[15px] leading-[2em]">
              From a young age, growing up in New Zealand, I developed an
              enthusiasm for sustainable living. I believe that our built
              environment should provide all that we need to live without
              extensive connection to external infrastructure &amp; with good
              management of natural resources.
            </p>
            <p className="text-text text-[15px] leading-[2em]">
              I am passionately committed to environmentally sustainable design
              aiming to reduce the harmful effects of the construction processes
              on our natural environment and to improve the function of our
              buildings.
            </p>
          </div>

          {/* SDA section */}
          <div className="border-l-2 border-primary pl-6 mb-12">
            <h3
              className="text-white text-xl font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Sustainable Design Assessment (SDA)
            </h3>
            <p className="text-text text-[15px] leading-[2em]">
              is a straightforward evaluation that assesses the sustainability
              aspects of proposed designs for new developments or renovations.
              The purpose of an SDA is to ensure that the design aligns with
              sustainable principles and meets the council's requirements. It's
              a crucial step in the planning process to ensure environmentally
              sustainable and sensitive development.
            </p>
          </div>

          {/* Strategies */}
          <h3
            className="text-white text-xl font-semibold mb-6 uppercase tracking-wider"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Sustainable Design Strategies
          </h3>
          <div className="space-y-6 mb-12">
            <div>
              <h4 className="text-primary text-lg mb-2">
                Passive Design Techniques
              </h4>
              <p className="text-text text-[15px] leading-[2em]">
                : Strategically orienting buildings to optimize natural light
                and airflow reduces energy consumption and enhances occupant
                comfort.
              </p>
            </div>
            <div>
              <h4 className="text-primary text-lg mb-2">
                Energy-Efficient Technologies
              </h4>
              <p className="text-text text-[15px] leading-[2em]">
                : Incorporating energy-saving technologies like LED lighting,
                intelligent insulation, Solar panels for electricity generation
                with battery storage and efficient HVAC systems lowers energy
                usage and operational costs.
              </p>
            </div>
            <div>
              <h4 className="text-primary text-lg mb-2">
                Sustainable Material Selection
              </h4>
              <p className="text-text text-[15px] leading-[2em]">
                : Prioritizing locally sourced, eco-friendly materials with low
                embodied energy and high recyclability reduces environmental
                impact and supports responsible resource management.
              </p>
            </div>
          </div>

          <p className="text-text text-[15px] leading-[2em] mb-12">
            By adopting sustainable design practices, we can create a more
            harmonious and resilient world, aligning with the principles of
            ecological sustainability and improving the health and comfort of
            building occupants.
          </p>

          {/* Benefits */}
          <h3
            className="text-white text-xl font-semibold mb-6 uppercase tracking-wider"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Benefits
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-text text-[15px] leading-relaxed">
              <span className="text-primary mt-1">▪</span>
              Enhancing Human Health and Well-being
            </li>
            <li className="flex items-start gap-3 text-text text-[15px] leading-relaxed">
              <span className="text-primary mt-1">▪</span>
              Healthier and more comfortable living and working environments.
            </li>
            <li className="flex items-start gap-3 text-text text-[15px] leading-relaxed">
              <span className="text-primary mt-1">▪</span>
              Lower operating costs through energy and resource efficiency
            </li>
            <li className="flex items-start gap-3 text-text text-[15px] leading-relaxed">
              <span className="text-primary mt-1">▪</span>
              Increased property value and market competitiveness
            </li>
          </ul>
          <p className="text-text text-[15px] leading-[2em]">
            By adhering to these principles, designers can create
            environmentally sustainable designs that optimize resource
            efficiency, reduce environmental impact, and enhance occupant
            well-being.
          </p>
        </div>
      </section>
    </div>
  );
}
