import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "New NDPR Guidelines Released for 2025",
    date: "2025-01-15",
    category: "Regulation",
    excerpt:
      "The Nigeria Data Protection Commission has released updated guidelines for data protection compliance. Learn what changes affect your business.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    title: "Tozapro Celebrates 1000+ Trained Professionals",
    date: "2024-12-10",
    category: "Milestone",
    excerpt:
      "We're proud to announce that over 1,000 professionals have completed our data privacy training programs, with a 95% certification success rate.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    title: "Data Privacy in the Age of AI: Expert Panel Discussion",
    date: "2024-11-20",
    category: "Event",
    excerpt:
      "Join us for an exclusive panel discussion on navigating privacy challenges in AI implementation. Register now for this free virtual event.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Understanding Cross-Border Data Transfer Requirements",
    date: "2024-10-30",
    category: "Guide",
    excerpt:
      "A comprehensive guide to managing international data transfers while maintaining compliance with Nigerian and international data protection laws.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Tozapro Partners with Leading Nigerian Universities",
    date: "2024-10-05",
    category: "Partnership",
    excerpt:
      "Exciting news! We've partnered with three major Nigerian universities to integrate data privacy education into their curriculum.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
  {
    title: "Cybersecurity Awareness Month: Free Resources",
    date: "2024-10-01",
    category: "Resource",
    excerpt:
      "In celebration of Cybersecurity Awareness Month, we're offering free access to our data privacy fundamentals course and downloadable resources.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
];

const upcomingEvents = [
  {
    title: "Data Privacy Certification Workshop",
    date: "2025-02-15",
    location: "Lagos, Nigeria (Hybrid)",
    type: "Workshop",
  },
  {
    title: "NDPR Compliance Masterclass",
    date: "2025-03-01",
    location: "Online",
    type: "Training",
  },
  {
    title: "Annual Data Privacy Summit",
    date: "2025-04-20",
    location: "Abuja, Nigeria",
    type: "Conference",
  },
];

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">News & Events</h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest in data privacy, cybersecurity, and Tozapro news
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Articles */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-8">Latest News</h2>
              {newsItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div
                        className="h-48 md:h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{item.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card className="sticky top-24">
                <CardHeader>
                  <h3 className="text-2xl font-bold">Upcoming Events</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors cursor-pointer"
                    >
                      <Badge className="mb-2">{event.type}</Badge>
                      <h4 className="font-semibold mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-xs">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Stay Informed</h3>
                  <p className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for the latest updates on data privacy and
                    cybersecurity.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                    <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
