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
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "data-mapping",
    icon: Database,
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
          <div className="grid gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.id}
                id={service.id}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
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
