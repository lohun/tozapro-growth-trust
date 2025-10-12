import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const serviceTypes = [
  "Data Mapping & Inventory",
  "Impact Assessments (PIA/DPIA)",
  "Drafting Agreements",
  "Privacy Policies",
  "Privacy Automation",
  "Incident Response",
  "Training Program Inquiry",
  "General Consultation",
];

export default function Appointment() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !selectedTime) {
      toast.error("Please select a date and time for your appointment");
      return;
    }

    if (!formData.name || !formData.email || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Appointment booking:", {
      ...formData,
      date,
      time: selectedTime,
    });

    toast.success("Appointment request submitted successfully! We'll contact you shortly.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setDate(undefined);
    setSelectedTime("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Book an Appointment</h1>
            <p className="text-xl text-white/90">
              Schedule a consultation with our data privacy experts
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Service Interested In <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your needs..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Date and Time Selection */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        Select Date
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border pointer-events-auto"
                      />
                      {date && (
                        <p className="mt-4 text-sm text-muted-foreground">
                          Selected: {format(date, "PPP")}
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Select Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className="w-full"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                      {selectedTime && (
                        <p className="mt-4 text-sm text-muted-foreground">
                          Selected: {selectedTime}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full md:w-auto px-12"
                >
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-center mb-6">
                  What to Expect
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-semibold">Submit Request</h4>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form with your details and preferred time
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h4 className="font-semibold">Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll confirm your appointment within 24 hours
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h4 className="font-semibold">Consultation</h4>
                    <p className="text-sm text-muted-foreground">
                      Meet with our experts to discuss your needs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
