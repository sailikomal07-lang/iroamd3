import { profileValues } from '@/data/projects';

interface ProfilePageProps {
  onNavigate: (path: string) => void;
}

export default function ProfilePage({ onNavigate: _onNavigate }: ProfilePageProps) {
  return (
    <div className="bg-secondary pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/projects/project-13.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Profile
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="space-y-6 mb-20">
            <p className="text-text text-[15px] leading-[2em]">
              Iroamd3 is a design driven practice that produce elegant and
              crafted solutions, developing organically from the site, its
              environment and the client's needs and aspirations. In every
              project iroamd3 looks for opportunities to build these things into
              unique outcomes that are functional, refined and inspiring. Our
              team approach delivers sound solutions that are also comprehensive
              and holistic. We believe that it is important to work with people
              who genuinely care. Clients choose iroamd3 because we listen and
              want to be invested in their dream. Our relentless pursuit of this
              means that we never settle for "good enough" or easy pathways. The
              aim is always to deliver the best possible results within all the
              given constraints. Every project is important regardless of size,
              budget, and location.
            </p>
            <p className="text-text text-[15px] leading-[2em]">
              Iroamd3 works across a wide array of typologies and scales. We
              have experience designing homes including multi-unit developments,
              mixed use retail /apartment buildings, warehouse/office &
              factories. We have designed within the constraints of heritage,
              flood & Aboriginal Cultural Sensitivity overlays, accessibility
              requirements for ageing in place and special needs, bush fire
              rating (BAL) requirements, non-sewered environments, and off-grid
              areas. We can work on large and small-scale projects effectively in
              collaboration with consultants and a range of experts in relevant
              fields to enrich the projects they work on.
            </p>
            <p className="text-text text-[15px] leading-[2em]">
              We coordinate effectively with consultants, councils, and builders
              to ensure efficient progress. Our team approach delivers sound
              solutions that are also comprehensive and holistic. The aim is
              always to deliver the best possible results within all the given
              constraints.
            </p>
            <p className="text-text text-[15px] leading-[2em]">
              We offer all services from Feasibility, Concept Design, Town
              Planning, Design Development, Contract Documentation, Contractor
              Selection, Contract Administration, Project Management, 3D
              renders, 3D fly throughs, Feasibility Studies & Sustainable Design
              Assessments (SDA).
            </p>
            <p className="text-text text-[15px] leading-[2em]">
              From conception through to handover, we can tailor a services
              package to align with each of our client's needs. We understand
              each project to be uniquely its own and adapt how we work
              accordingly so you won't end up paying for services that are not
              necessary.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border">
            {profileValues.map((value, i) => (
              <div
                key={value.name}
                className="bg-secondary p-8 lg:p-10 hover:bg-secondary-light transition-colors"
              >
                <p className="text-primary text-3xl font-light mb-3">
                  0{i + 1}
                </p>
                <h3
                  className="text-white text-lg uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {value.name}
                </h3>
                <ul className="space-y-2">
                  {value.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-text text-[14px] leading-relaxed"
                    >
                      <span className="text-primary mt-1 shrink-0">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
