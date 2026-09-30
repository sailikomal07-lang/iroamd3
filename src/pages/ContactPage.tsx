import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/projects';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-secondary pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/projects/project-10.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative text-center px-6">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3
                    className="text-primary text-sm uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Call Us
                  </h3>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-white text-lg hover:text-primary transition-colors"
                  >
                    <Phone size={18} className="text-primary" />
                    {contactInfo.phone}
                  </a>
                </div>

                <div>
                  <h3
                    className="text-primary text-sm uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Email Us
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-white text-lg hover:text-primary transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <h3
                    className="text-primary text-sm uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Address
                  </h3>
                  <p className="flex items-start gap-3 text-white text-lg leading-relaxed">
                    <MapPin size={18} className="text-primary mt-1 shrink-0" />
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-text text-sm mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-dark-border py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-text text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-dark-border py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-text text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-dark-border py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-text text-sm mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-dark-border py-3 text-white focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-10 py-3 bg-primary text-white text-sm uppercase tracking-wider hover:bg-primary/80 transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Send
                </button>
                {sent && (
                  <p className="text-primary text-sm pt-2">
                    Thank you for your message. We'll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
