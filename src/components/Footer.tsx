import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { navItems, contactInfo } from '@/data/projects';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.18] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/misc/pic7.jpeg)' }}
      />

      {/* Top border section */}
      <div className="relative border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Logo + Instagram */}
            <div>
              <img
                src="/images/logos/iroamd3-footer.png"
                alt="Iroamd3"
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>

            {/* Quick Links */}
            <div className="md:ml-[8%]">
              <h4
                className="text-white text-[12px] font-medium uppercase tracking-accent mb-6"
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '2px' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navItems
                  .filter((item) => item.label !== 'Home')
                  .map((item) => (
                    <li key={item.path}>
                      <button
                        onClick={() => onNavigate(item.path)}
                        className="text-text hover:text-primary transition-colors text-[15px]"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white text-[12px] font-medium uppercase mb-6"
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '2px' }}
              >
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-text hover:text-primary transition-colors text-[15px]"
                  >
                    <Phone size={14} className="text-primary" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-text hover:text-primary transition-colors text-[15px]"
                  >
                    <Mail size={14} className="text-primary" />
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
              <h4
                className="text-white text-[12px] font-medium uppercase mt-6 mb-3"
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '2px' }}
              >
                Visit
              </h4>
              <p className="flex items-start gap-3 text-text text-[15px] leading-relaxed">
                <MapPin size={14} className="text-primary mt-1 shrink-0" />
                <span>238 Darebin Drive,<br />Lalor,<br />VIC 3075</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
          <p className="text-center text-text text-[13px]">
            &copy; 2024, Iroamd3. Design by{' '}
            <a
              href="https://www.websolutionsydney.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80"
            >
              Web Solution Sydney
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
