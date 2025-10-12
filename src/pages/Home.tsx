import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Shield,
  Lock,
  FileCheck,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroCyber from "@/assets/hero-cyber.jpg";

const services = [
  {
    icon: Shield,
    title: "Data Mapping & Inventory",
    description: "Comprehensive data flow analysis and management to understand your data ecosystem.",
  },
  {
    icon: FileCheck,
    title: "Impact Assessments",
    description: "Professional PIA and DPIA services to evaluate privacy risks and compliance.",
  },
  {
    icon: Lock,
    title: "Privacy Automation",
    description: "Integrate automated systems to streamline your data privacy compliance workflows.",
  },
  {
    icon: Users,
    title: "Training & Mentorship",
    description: "Empower your team with expert-led data privacy training and certification prep.",
  },
];

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "CTO, FinTech Solutions Ltd",
    content:
      "Tozapro transformed our approach to data privacy. Their expertise helped us achieve full NDPR compliance while maintaining business agility.",
    rating: 5,
  },
  {
    name: "Sarah Okafor",
    role: "Compliance Officer, HealthCare Inc",
    content:
      "The impact assessment and privacy policy drafting services were exceptional. Professional, thorough, and delivered on time.",
    rating: 5,
  },
  {
    name: "Michael Eze",
    role: "Data Privacy Professional",
    content:
      "The training program was comprehensive and practical. It prepared me perfectly for my IAPP certification and launched my career in data privacy.",
    rating: 5,
  },
  {
    name: "Chioma Nwosu",
    role: "CEO, E-commerce Platform",
    content:
      "Outstanding incident response planning. Tozapro gave us the confidence and framework to handle data breaches effectively.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "1000+", label: "Professionals Trained" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Ripple Effect */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroCyber})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(46, 125, 50, 0.3) 0%, 
              rgba(47, 79, 79, 0.8) 50%, 
              rgba(47, 79, 79, 0.95) 100%)`,
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Data Privacy as a{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Growth Enabler
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Transform compliance into competitive advantage with expert cybersecurity and data
              privacy solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in">
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/appointment">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data privacy and cybersecurity solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses across Nigeria
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Award key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">Ready to Secure Your Data?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Schedule a consultation with our experts and discover how we can help your business
                thrive with robust data privacy practices.
              </p>
              <Link to="/appointment">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-0"
                >
                  Book Your Appointment
                  <CheckCircle2 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
