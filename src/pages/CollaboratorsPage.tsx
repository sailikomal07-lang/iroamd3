import { collaborators } from '@/data/projects';

interface CollaboratorsPageProps {
  onNavigate: (path: string) => void;
}

export default function CollaboratorsPage({ onNavigate: _onNavigate }: CollaboratorsPageProps) {
  return (
    <div className="bg-secondary pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/projects/project-9.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Collaborators
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {collaborators.map((collab, idx) => (
            <div
              key={collab.name}
              className={`pb-16 ${idx < collaborators.length - 1 ? 'mb-16 border-b border-dark-border' : ''}`}
            >
              {/* Logo */}
              <div className="mb-8">
                <img
                  src={collab.logo}
                  alt={collab.name}
                  className="max-h-24 max-w-xs object-contain"
                />
              </div>

              {/* Description */}
              <div className="space-y-4 mb-8">
                {collab.description.map((para, i) => (
                  <p key={i} className="text-text text-[15px] leading-[2em]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Soft services (Christie Projects) */}
              {collab.softServices && (
                <div>
                  <h3
                    className="text-white text-lg font-semibold mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {collab.name} soft services include:
                  </h3>
                  <ul className="space-y-2">
                    {collab.softServices.map((service, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text text-[15px] leading-relaxed"
                      >
                        <span className="text-primary mt-1">▪</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections (Haven Properties) */}
              {collab.sections && (
                <div className="space-y-8">
                  {collab.sections.map((section, i) => (
                    <div key={i}>
                      <h3
                        className="text-primary text-lg font-semibold mb-3"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {section.title}
                      </h3>
                      <p className="text-text text-[15px] leading-[2em]">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
