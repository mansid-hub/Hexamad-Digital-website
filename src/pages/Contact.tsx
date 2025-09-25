import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@hexamad.in",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91-8087507773",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: Phone,
      title: "Alternative Number",
      value: "+91-7709476192",
      description: "For urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Poonam Palace, B-301, near Star Hospital, Lakshmiben Chedda Road, Nalasopara West, Nala Sopara, Maharashtra 401203",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Ready to help you succeed"
    }
  ];

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "PPC Advertising",
    "Content Strategy",
    "Web Development",
    "Analytics & Reporting",
    "Brand Strategy",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and 
            create a strategy that drives real results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold mb-6">
                Start Your <span className="text-gradient">Success Story</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell us about your project, goals, and how we can help you succeed..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="service-card flex items-start space-x-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-primary">
                    <info.icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-1">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              </div>
            ))}

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaQzuU17R8&q=Poonam+Palace+B-301+near+Star+Hospital+Lakshmiben+Chedda+Road+Nalasopara+West+Nala+Sopara+Maharashtra+401203&zoom=15"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hexamad Digital Location - Poonam Palace, B-301, near Star Hospital, Nalasopara West"
              />
            </div>
          </div>
        </div>

        {/* Success Stories CTA */}
        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-primary glow-primary" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">
            Join Our <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Over 500+ businesses have transformed their digital presence with our expert strategies. 
            Your success story starts with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              View Case Studies
            </button>
            <button className="btn-accent">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;