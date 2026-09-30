import {
  aboutBio,
  aboutExperience,
  aboutAwards,
  aboutCollaborations,
} from '@/data/projects';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onNavigate: _onNavigate }: AboutPageProps) {
  return (
    <div className="bg-secondary pt-20">
      {/* Hero with John Laughton image */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/misc/john-laughton.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/84" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {aboutBio[0]}
          </h2>
          <p className="text-primary text-lg mb-8">{aboutBio[1]}</p>
          <p className="text-text text-[15px] leading-[2em] mb-12">
            {aboutBio[2]}
          </p>

          {/* Experience timeline */}
          <div className="space-y-4 mb-16">
            {aboutExperience.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-dark-border pb-4"
              >
                <span className="text-primary text-xs mt-1">▪</span>
                <p className="text-text text-[15px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Awards */}
          <h3
            className="text-white text-xl font-semibold mb-6 uppercase tracking-wider"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Awards Received
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                Massey University NZ 1996
              </p>
              <ul className="space-y-2">
                {aboutAwards.massey.map((award, i) => (
                  <li
                    key={i}
                    className="text-text text-[15px] leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▪</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                NMIT Preston Australia 2002
              </p>
              <ul className="space-y-2">
                {aboutAwards.nmit.map((award, i) => (
                  <li
                    key={i}
                    className="text-text text-[15px] leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▪</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Collaborations */}
          <h3
            className="text-white text-xl font-semibold mb-6 uppercase tracking-wider"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Has worked in collaboration with:
          </h3>
          <div className="flex flex-wrap gap-4">
            {aboutCollaborations.map((collab, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-dark-border text-text text-[15px] hover:border-primary hover:text-primary transition-colors"
              >
                {collab}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
