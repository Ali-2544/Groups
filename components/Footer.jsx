import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'GENROAR Fashion',
    'GENROAR Academy',
    'GENROAR IT Services',
    'OnePost Application'
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Contact',
    'Careers',
    'Blog',
    'Support'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                GENROAR
              </span>
            <p className="mb-6 leading-relaxed text-gray-300">
              Empowering businesses through innovative solutions in Fashion, Education, IT Services, and Social Media Management.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-blue-400" />
                <div className="text-gray-300">
                  <p>Johar Town B Blcok</p>
                  <p>Lahore, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <a href="tel:+15551234567" className="text-gray-300 transition-colors duration-300 hover:text-white">
                  +92310 7100663
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <a href="mailto:info@genroar.com" className="text-gray-300 transition-colors duration-300 hover:text-white">
                  info@genroar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest updates and offers.</p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 font-semibold transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-800 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            © {currentYear} GENROAR. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}