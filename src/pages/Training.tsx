import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Award,
  BookOpen,
  Video,
  CheckCircle2,
  Star,
  Calendar,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Data Privacy Professional Certification Prep",
    duration: "8 Weeks",
    format: "Self-Paced Online",
    level: "Beginner to Intermediate",
    students: "500+",
    rating: 4.9,
    price: "₦150,000",
    description:
      "Comprehensive 8-week online course designed to help young professionals launch a successful career in data privacy and prepare for IAPP certification.",
    highlights: [
      "IAPP CIPP/E exam preparation",
      "Real-world case studies and scenarios",
      "Interactive learning modules",
      "Weekly live Q&A sessions",
      "Career guidance and job placement support",
      "Lifetime access to course materials",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        topic: "Foundations of Data Privacy",
        modules: [
          "Introduction to data protection laws",
          "NDPR and GDPR fundamentals",
          "Privacy principles and concepts",
          "Data protection terminology",
        ],
      },
      {
        week: "Week 3-4",
        topic: "Privacy in Practice",
        modules: [
          "Data mapping and classification",
          "Privacy impact assessments",
          "Consent management",
          "Data subject rights",
        ],
      },
      {
        week: "Week 5-6",
        topic: "Compliance & Governance",
        modules: [
          "Privacy program management",
          "Risk assessment frameworks",
          "Vendor management",
          "Privacy policies and notices",
        ],
      },
      {
        week: "Week 7-8",
        topic: "IAPP Certification Prep",
        modules: [
          "Exam preparation strategies",
          "Practice tests and quizzes",
          "Mock exams",
          "Career development guidance",
        ],
      },
    ],
  },
  {
    title: "Advanced Data Privacy Leadership",
    duration: "6 Weeks",
    format: "Live Online Sessions",
    level: "Intermediate to Advanced",
    students: "200+",
    rating: 4.8,
    price: "₦250,000",
    description:
      "Advanced course for privacy professionals looking to take on leadership roles and implement comprehensive privacy programs in their organizations.",
    highlights: [
      "Privacy program strategy and design",
      "Executive communication skills",
      "Building privacy cultures",
      "Advanced risk management",
      "Privacy technology integration",
      "Mentorship from industry leaders",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        topic: "Strategic Privacy Leadership",
        modules: [
          "Privacy as business enabler",
          "Building executive support",
          "Privacy program roadmaps",
          "Resource allocation and budgeting",
        ],
      },
      {
        week: "Week 3-4",
        topic: "Advanced Privacy Operations",
        modules: [
          "Privacy by design implementation",
          "Data protection officer role",
          "Cross-border data transfers",
          "Privacy technology stack",
        ],
      },
      {
        week: "Week 5-6",
        topic: "Crisis Management & Innovation",
        modules: [
          "Incident response leadership",
          "Privacy in emerging technologies",
          "AI and ML privacy considerations",
          "Future of privacy compliance",
        ],
      },
    ],
  },
];

export default function Training() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Professional Training</h1>
            <p className="text-xl text-white/90">
              Launch or advance your data privacy career with expert-led training and mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Video, label: "Live Sessions", value: "Weekly" },
              { icon: BookOpen, label: "Course Materials", value: "Lifetime Access" },
              { icon: Users, label: "Students Trained", value: "1000+" },
              { icon: Award, label: "Success Rate", value: "95%" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-2">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  {/* Course Header */}
                  <div className="md:w-2/5 bg-gradient-to-br from-primary/10 to-accent/10 p-8 space-y-6">
                    <div>
                      <Badge className="mb-4">{course.level}</Badge>
                      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.duration} • {course.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{course.students} enrolled</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        <span>{course.rating} rating</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="text-3xl font-bold text-primary mb-4">{course.price}</div>
                      <Link to="/appointment">
                        <Button variant="accent" size="lg" className="w-full">
                          Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="md:w-3/5 p-8 space-y-8">
                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Course Highlights
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {course.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Curriculum */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Curriculum
                      </h3>
                      <div className="space-y-4">
                        {course.curriculum.map((item, idx) => (
                          <Card key={idx} className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <Badge variant="outline">{item.week}</Badge>
                                <CardTitle className="text-lg">{item.topic}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-1">
                                {item.modules.map((module, moduleIdx) => (
                                  <li key={moduleIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <span className="text-accent">•</span>
                                    {module}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-accent to-primary p-8 flex items-center justify-center">
                  <Users className="h-24 w-24 text-white" />
                </div>
                <CardContent className="md:w-2/3 p-8 space-y-4">
                  <h2 className="text-3xl font-bold">Personal Mentorship Program</h2>
                  <p className="text-muted-foreground">
                    Get one-on-one guidance from experienced data privacy professionals as you
                    transition into your new career. Our mentorship program provides personalized
                    support, career advice, and industry insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Monthly one-on-one sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Resume and portfolio review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Interview preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Industry networking opportunities</span>
                    </li>
                  </ul>
                  <Link to="/appointment">
                    <Button variant="default" size="lg" className="mt-4">
                      Apply for Mentorship
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
