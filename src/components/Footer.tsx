
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Arogyaverse', href: '#about' },
    { name: 'Ayurvedic Treatments', href: '#treatments' },
    { name: 'Medical Consultation', href: '#wellness' },
    { name: 'Our Team', href: 'https://our-team-vh31.vercel.app/' }
  ];

  const treatments = [
    { name: 'Panchakarma', href: 'https://ayurveda.com/introduction-to-panchakarma/' },
    { name: 'Abhyanga', href: 'https://www.kamaayurveda.in/blog/abhyanga' },
    { name: 'Shirodhara', href: 'https://www.forestessentialsindia.com/blog/shirodhara-benefits-and-importance-in-ayurveda.html' },
    { name: 'Pizhichil', href: 'https://www.jeevanya.co.in/treatments/pizhichil/' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (new FormData(form).get('email') || '').toString();
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error || 'Failed');
      alert('Subscribed!');
      form.reset();
    } catch (err: any) {
      alert(err.message || 'Subscription failed');
    }
  };

  return (
    <footer className="bg-kairali-brown text-kairali-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Leaf className="w-8 h-8 text-kairali-gold mr-3" />
              <div>
                AROGYAVERSE
                <div className="text-sm text-kairali-gold">AROGYAVERSE</div>
                <div className="text-sm text-kairali-gold">Immersive VR Ayurveda</div>
                <div className="text-sm text-kairali-gold">The Ayurvedic Healing Village</div>
              </div>
            </div>
            <p className="text-kairali-cream/80 mb-6 leading-relaxed">
            Explore AarogyaVerse, a groundbreaking virtual world where timeless Ayurveda comes alive. Discover ancient wellness wisdom, interactive learning, and immersive VR experiences that blend tradition with cutting-edge technology for global well-being.


            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-kairali-cream/10 hover:bg-kairali-gold hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 hover:text-kairali-brown" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-kairali-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-kairali-cream/80 hover:text-kairali-cream hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-kairali-gold">Popular Treatments</h3>
            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <li key={index}>
                  <a
                    href={treatment.href}
                    className="text-kairali-cream/80 hover:text-kairali-cream hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {treatment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-kairali-gold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-kairali-gold mr-3 mt-1 flex-shrink-0" />
                <div className="text-kairali-cream/80">
                  <div>Arogyaverse - The Ayurvedic Healing Village</div>
                  <div></div>
                  <div> Kanpur, Uttar Pradesh, India - 209305</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-kairali-gold mr-3" />
                <div className="text-kairali-cream/80">+919555504621</div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-kairali-gold mr-3" />
                <div className="text-kairali-cream/80">mail@arogyaverse.com</div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-4 bg-kairali-cream/5 rounded-lg">
              <h4 className="font-semibold mb-3 text-kairali-gold">Newsletter</h4>
              <p className="text-sm text-kairali-cream/80 mb-3">
                Get wellness tips and Ayurvedic insights
              </p>
              <form className="flex" onSubmit={handleSubscribe}>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-kairali-cream/10 border border-kairali-cream/20 rounded-l-lg text-kairali-cream placeholder-kairali-cream/60 focus:outline-none focus:border-kairali-gold"
                  required
                />
                <button type="submit" className="px-4 py-2 bg-kairali-gold hover:bg-kairali-gold-dark text-kairali-brown rounded-r-lg transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kairali-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-kairali-cream/80">
            <div className="mb-4 md:mb-0">
              © 2025 Arogyaverse - The Ayurvedic Healing Village. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-kairali-cream transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-kairali-cream transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-kairali-cream transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
