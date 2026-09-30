import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { navItems, projects } from '@/data/projects';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setProjectsOpen(false);
  }, [currentPath]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    setProjectsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/projects') return currentPath.startsWith('/projects');
    return currentPath === path;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="z-50 transition-opacity hover:opacity-80"
          >
            <img
              src="/images/logos/iroamd3-logo.png"
              alt="Iroamd3"
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.label === 'Projects') {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                  >
                    <button
                      onClick={() => handleNav(item.path)}
                      className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-nav transition-colors ${
                        isActive(item.path)
                          ? 'text-primary'
                          : 'text-white hover:text-primary'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.label}
                    </button>
                    {projectsOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 min-w-[500px] bg-dropdown-bg border-t border-dropdown-border"
                        style={{ marginLeft: '-20px' }}
                      >
                        <div className="py-2">
                          <button
                            onClick={() => handleNav('/projects')}
                            className="block w-full text-left px-5 py-1.5 text-[13px] font-semibold uppercase tracking-nav text-white hover:text-primary transition-colors"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            All Projects
                          </button>
                          {projects.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => handleNav(`/projects/${p.slug}`)}
                              className="block w-full text-left px-5 py-1.5 text-[13px] font-normal tracking-nav text-white hover:text-primary transition-colors capitalize"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              {p.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-nav transition-colors ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Instagram + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white z-50"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-secondary pt-24 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              if (item.label === 'Projects') {
                return (
                  <div key={item.path}>
                    <button
                      onClick={() => setProjectsOpen(!projectsOpen)}
                      className={`block w-full text-left py-3 text-[13px] font-semibold uppercase tracking-nav transition-colors ${
                        isActive(item.path) ? 'text-primary' : 'text-white'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.label} {projectsOpen ? '−' : '+'}
                    </button>
                    {projectsOpen && (
                      <div className="pl-4 border-l border-dark-border mb-2">
                        <button
                          onClick={() => handleNav('/projects')}
                          className="block w-full text-left py-2 text-[13px] font-semibold uppercase tracking-nav text-white hover:text-primary transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          All Projects
                        </button>
                        {projects.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => handleNav(`/projects/${p.slug}`)}
                            className="block w-full text-left py-2 text-[13px] text-white hover:text-primary transition-colors capitalize"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {p.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`block w-full text-left py-3 text-[13px] font-semibold uppercase tracking-nav transition-colors ${
                    isActive(item.path) ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
