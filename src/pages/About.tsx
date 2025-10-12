import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Building secure, privacy-first solutions that businesses and individuals can trust.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional service and expertise in every engagement.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "Equipping professionals with the skills to succeed in data privacy careers.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to streamline compliance and enhance protection.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">About Tozapro</h1>
            <p className="text-xl text-white/90">
              Bridging the gap between legal privacy requirements and business realities
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Tozapro, we believe data privacy is not just a compliance burden—it's a{" "}
                <span className="text-primary font-semibold">growth and trust enabler</span>. We
                help organizations transform their approach to data protection, turning regulatory
                requirements into competitive advantages.
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold">Who We Are</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tozapro is a Nigeria-based data privacy and cybersecurity consulting firm with a
                  dual mission: helping businesses manage their data responsibly and empowering
                  young professionals to build successful careers in the data privacy field.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded by <span className="font-semibold text-foreground">Tosin Alabi</span>, our
                  firm was born from the recognition that businesses need practical, business-focused
                  privacy solutions—not just legal compliance. We bridge the gap between complex
                  regulations and real-world business operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">
                    Consulting & Services
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Data mapping and inventory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Privacy and Data Protection Impact Assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Drafting data processing agreements and MSAs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Custom privacy policies and procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Privacy program automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Breach preparedness and incident response</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">
                    Training & Mentorship
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        8-week online course for aspiring data privacy professionals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>IAPP certification preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Career transition mentorship programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Self-paced e-learning platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Practical, hands-on training modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Ongoing professional support and guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center">Meet Our Founder</h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Tosin Alabi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tosin Alabi founded Tozapro with a clear vision: to make data privacy
                    accessible, practical, and beneficial for businesses of all sizes. With deep
                    expertise in both legal compliance and business operations, Tosin recognized
                    the need for a consultancy that could speak both languages.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond consulting, Tosin is passionate about developing the next generation of
                    data privacy professionals, creating educational programs that combine
                    theoretical knowledge with practical skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
