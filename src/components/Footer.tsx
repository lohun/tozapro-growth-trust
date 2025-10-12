import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-xl">Tozapro</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Empowering businesses with data privacy and cybersecurity solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-accent transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-accent transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition-colors cursor-pointer">Data Mapping</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Impact Assessments</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Privacy Policies</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Incident Response</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@tozapro.com" className="hover:text-accent transition-colors">
                  info@tozapro.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+234" className="hover:text-accent transition-colors">
                  +234 XXX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Tozapro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
