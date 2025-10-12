import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Data Mapping & Inventory",
    description: "Understand and manage your data flow",
    href: "/services#data-mapping",
  },
  {
    title: "Impact Assessments",
    description: "PIA and DPIA services",
    href: "/services#assessments",
  },
  {
    title: "Drafting Agreements",
    description: "Data processing and MSAs",
    href: "/services#agreements",
  },
  {
    title: "Privacy Policies",
    description: "Custom policies and procedures",
    href: "/services#policies",
  },
  {
    title: "Privacy Automation",
    description: "Streamline compliance workflows",
    href: "/services#automation",
  },
  {
    title: "Incident Response",
    description: "Breach preparedness and response",
    href: "/services#incident",
  },
];

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl group">
            <Shield className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tozapro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/about") ? "text-primary" : "text-foreground"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/training"
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/training") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Training
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/news"
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/news") ? "text-primary" : "text-foreground"
                    )}
                  >
                    News & Events
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/appointment">
              <Button variant="accent">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/training"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              to="/news"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              News & Events
            </Link>
            <Link
              to="/appointment"
              className="block px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="accent" className="w-full">
                Book Appointment
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
