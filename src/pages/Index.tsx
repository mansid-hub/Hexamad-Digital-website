import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ArrowRight, Play, Users, Award, TrendingUp, Star, Search, Share2, MousePointer, Code, PenTool, BarChart3, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Client logos
import uumaBanquetHall from "@/assets/uuma-banquet-hall.jpeg";
import kampMattresses from "@/assets/kamp-mattresses.jpeg";
import balajiFoundation from "@/assets/balaji-foundation.jpeg";
import truegems from "@/assets/truegems.jpeg";
import venkateshwaraProperties from "@/assets/venkateshwara-properties.jpeg";
import waLogo from "@/assets/wa-logo.jpeg";
import imageClinic from "@/assets/image-clinic.jpeg";
import gtaHomeMakers from "@/assets/gta-homemakers.jpeg";
import gktLogo from "@/assets/gkt-logo.jpeg";
import sagGallery from "@/assets/sag-gallery.jpeg";
import zprimeLogo from "@/assets/zprime-logo.jpeg";
import saajByGargee from "@/assets/saaj-by-gargee.jpeg";
import ushaEducationalTrust from "@/assets/usha-educational-trust.jpeg";
import roboticsPro from "@/assets/robotics-pro.jpeg";
import saralClasses from "@/assets/saral-classes.jpeg";
import aajachyaGoshti from "@/assets/aajachya-goshti.jpeg";
import fitnessGadh from "@/assets/fitness-gadh.jpeg";
import saiLeelaCaterers from "@/assets/sai-leela-caterers.jpeg";

const Index = () => {
  const [currentStat, setCurrentStat] = useState({ projects: 0, clients: 0, rating: 0 });

  // Animate stats on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStat({ projects: 150, clients: 120, rating: 4.9 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Client logos for carousel
  const clientLogos = [
    { name: "UUMA Banquet Hall", logo: uumaBanquetHall },
    { name: "Kamp Mattresses Pvt. Ltd.", logo: kampMattresses },
    { name: "Balaji Foundation", logo: balajiFoundation },
    { name: "Truegems", logo: truegems },
    { name: "Venkateshwara Properties", logo: venkateshwaraProperties },
    { name: "WA", logo: waLogo },
    { name: "Image Liver & Gastro Clinic", logo: imageClinic },
    { name: "GTA HomeMakers", logo: gtaHomeMakers },
    { name: "GKT", logo: gktLogo },
    { name: "Shikha Art Gallery", logo: sagGallery },
    { name: "ZPrime", logo: zprimeLogo },
    { name: "Saaj By Gargee", logo: saajByGargee },
    { name: "Usha Educational Trust", logo: ushaEducationalTrust },
    { name: "Robotics Pro", logo: roboticsPro },
    { name: "Saral Classes", logo: saralClasses },
    { name: "Aajachya Goshti", logo: aajachyaGoshti },
    { name: "Fitness Gadh", logo: fitnessGadh },
    { name: "Sai Leela Caterers", logo: saiLeelaCaterers }
  ];

  // Client projects
  const clientProjects = [
    {
      id: 1,
      name: "TechStart Inc",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      category: "B2B SaaS"
    },
    {
      id: 2,
      name: "Fashion Forward",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      category: "E-commerce"
    },
    {
      id: 3,
      name: "GreenEco Solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      category: "Sustainability"
    },
    {
      id: 4,
      name: "HealthPlus Clinic",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "Healthcare"
    },
    {
      id: 5,
      name: "FoodieDelight",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      category: "Restaurant"
    },
    {
      id: 6,
      name: "FinanceHub",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      category: "Financial Services"
    }
  ];

  // Services offered
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with our proven SEO strategies",
      advantages: [
        "Increase organic traffic by 300%+",
        "Higher search engine rankings",
        "Long-term sustainable growth",
        "Local SEO optimization"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build engaged communities and drive conversions",
      advantages: [
        "Brand awareness & engagement",
        "Targeted audience growth",
        "Content strategy & creation",
        "Community management"
      ]
    },
    {
      icon: MousePointer,
      title: "PPC Advertising",
      description: "Maximize ROI with targeted pay-per-click campaigns",
      advantages: [
        "Immediate traffic generation",
        "Precise audience targeting",
        "Budget optimization",
        "Conversion tracking & analysis"
      ]
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Compelling content that converts visitors into customers",
      advantages: [
        "Strategic content planning",
        "Brand voice development",
        "Multi-channel distribution",
        "Performance optimization"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, responsive websites that drive results",
      advantages: [
        "Mobile-first responsive design",
        "Lightning-fast performance",
        "SEO-optimized structure",
        "Conversion-focused UX"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing",
      advantages: [
        "Comprehensive performance tracking",
        "Custom dashboard creation",
        "ROI measurement & analysis",
        "Actionable recommendations"
      ]
    }
  ];

  // Recent projects with video thumbnails
  const recentProjects = [
    {
      id: 1,
      title: "E-commerce SEO Success Story",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      duration: "2:34"
    },
    {
      id: 2,
      title: "Social Media Campaign Results",
      thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=225&fit=crop",
      duration: "3:12"
    },
    {
      id: 3,
      title: "PPC ROI Transformation",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      duration: "4:08"
    },
    {
      id: 4,
      title: "Brand Awareness Campaign",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop",
      duration: "2:56"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Transform Your Digital
                <span className="hero-text-glow block mt-2">Presence Today</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Senior digital marketing agency specializing in SEO, social media, PPC, and web development. 
                Drive real results with data-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
                <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                  Get Started Today
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/portfolio" className="btn-secondary text-lg px-10 py-5">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logo Carousel */}
        <section className="py-16 bg-card/20 border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Trusted by Leading Companies Worldwide
            </h2>
            <div className="relative overflow-hidden">
              <div className="logo-scroll-infinite flex items-center gap-16">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients Worked With Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Clients We've <span className="text-gradient">Transformed</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries achieve remarkable growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {clientProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-display font-semibold mb-1">{project.name}</h3>
                        <p className="text-sm opacity-90">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gradient">Achievements</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Numbers that speak to our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
              <div className="stats-card">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <Award size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-4xl font-display font-bold mb-2 text-gradient">
                  {currentStat.projects}+
                </h3>
                <p className="text-xl font-semibold mb-2">Projects Completed</p>
                <p className="text-muted-foreground">Successfully delivered digital marketing campaigns</p>
              </div>

              <div className="stats-card">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-secondary">
                    <Users size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-4xl font-display font-bold mb-2 text-gradient">
                  {currentStat.clients}+
                </h3>
                <p className="text-xl font-semibold mb-2">Happy Clients</p>
                <p className="text-muted-foreground">Businesses transformed across various industries</p>
              </div>

              <div className="stats-card">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-accent">
                    <Star size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-4xl font-display font-bold mb-2 text-gradient">
                  {currentStat.rating}/5
                </h3>
                <p className="text-xl font-semibold mb-2">Client Satisfaction</p>
                <p className="text-muted-foreground">Average rating from client feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                      <service.icon size={32} className="text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.advantages.map((advantage, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Recent <span className="text-gradient">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch how we've transformed businesses with our digital marketing expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 animate-fade-in-up">
              {recentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play size={24} className="text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {project.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center animate-fade-in">
              <Link to="/portfolio" className="btn-secondary">
                View All Projects
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-4xl font-display font-bold mb-6">
                  Ready to <span className="text-gradient">Get Started</span>?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Let's discuss your project and create a strategy that drives real results.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-input"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="form-input"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="form-input resize-none"
                  />
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in-up space-y-8">
                <div className="service-card">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-primary">
                      <Mail size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">contact@hexamad.in</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-secondary">
                      <Phone size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">+91-8087507773</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-accent">
                      <MapPin size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Visit Us</h3>
                      <p className="text-muted-foreground">Poonam Palace, B-301, near Star Hospital, Lakshmiben Chedda Road, Nalasopara West, Nala Sopara, Maharashtra 401203</p>
                    </div>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaQzuU17R8&q=Poonam+Palace+B-301+near+Star+Hospital+Lakshmiben+Chedda+Road+Nalasopara+West+Nala+Sopara+Maharashtra+401203&zoom=15"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hexamad Digital Location - Poonam Palace, B-301, near Star Hospital, Nalasopara West"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
