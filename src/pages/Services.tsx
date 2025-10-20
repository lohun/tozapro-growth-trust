import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Database,
  FileCheck,
  FileText,
  Shield,
  Workflow,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import dataMappingImg from "@/assets/service-data-mapping.jpg";
import assessmentsImg from "@/assets/service-assessments.jpg";
import agreementsImg from "@/assets/service-agreements.jpg";
import policiesImg from "@/assets/service-policies.jpg";
import automationImg from "@/assets/service-automation.jpg";
import incidentImg from "@/assets/service-incident.jpg";

const services = [
  {
    id: "data-mapping",
    icon: Database,
    image: dataMappingImg,
    title: "Data Mapping & Inventory",
    description: "Understand and manage the complete lifecycle of data in your organization.",
    benefits: [
      "Comprehensive data flow analysis",
      "Identification of all data processing activities",
      "Data classification and categorization",
      "Visual data mapping documentation",
      "Compliance gap identification",
    ],
  },
  {
    id: "assessments",
    icon: FileCheck,
    image: assessmentsImg,
    title: "Impact Assessments",
    description:
      "Professional Privacy Impact Assessments (PIA) and Data Protection Impact Assessments (DPIA).",
    benefits: [
      "Risk identification and evaluation",
      "Compliance with NDPR and GDPR requirements",
      "Detailed assessment reports",
      "Mitigation strategy recommendations",
      "Stakeholder consultation support",
    ],
  },
  {
    id: "agreements",
    icon: FileText,
    image: agreementsImg,
    title: "Drafting Agreements",
    description: "Expert negotiation and drafting of data processing and master service agreements.",
    benefits: [
      "Data Processing Agreements (DPAs)",
      "Master Service Agreements (MSAs)",
      "Vendor contract reviews",
      "Compliance-aligned terms",
      "Risk mitigation clauses",
    ],
  },
  {
    id: "policies",
    icon: Shield,
    image: policiesImg,
    title: "Privacy Policies",
    description: "Custom privacy policies and procedures tailored to your business needs.",
    benefits: [
      "NDPR-compliant privacy notices",
      "Cookie policies and consent mechanisms",
      "Employee data protection policies",
      "Data retention and deletion procedures",
      "Regular policy reviews and updates",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    image: automationImg,
    title: "Privacy Program Automation",
    description: "Streamline your compliance workflows with integrated automated systems.",
    benefits: [
      "Automated compliance monitoring",
      "Data subject request management",
      "Consent management platforms",
      "Privacy dashboard implementation",
      "Ongoing system optimization",
    ],
  },
  {
    id: "incident",
    icon: AlertTriangle,
    image: incidentImg,
    title: "Incident Response",
    description: "Comprehensive breach preparedness and response planning services.",
    benefits: [
      "Incident response plan development",
      "Breach simulation exercises",
      "24/7 incident support",
      "Regulatory notification assistance",
      "Post-incident analysis and improvement",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive data privacy and cybersecurity solutions to protect your business and
              build trust with your customers
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 h-12 w-12 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl text-white/90">
                Let's discuss how our services can help secure your business and ensure compliance
              </p>
              <Link to="/appointment">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-0"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
