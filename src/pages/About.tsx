import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, Zap, Shield, Lightbulb } from "lucide-react";

const About = () => {
  const founder = {
    name: "Mr. Himanshu Dhande",
    title: "Founder & CEO",
    image: "/src/assets/himanshu-dhande.jpeg",
    bio: "With over 10 years of experience in digital marketing, Himanshu co-founded Hexamad Digital with a vision to transform how businesses connect with their audiences online. His expertise spans across SEO, social media strategy, and conversion optimization.",
    expertise: [
      { skill: "SEO Strategy", level: 95 },
      { skill: "PPC Management", level: 88 },
      { skill: "Social Media", level: 92 },
      { skill: "Analytics", level: 90 },
      { skill: "Conversion Optimization", level: 87 }
    ]
  };

  const coFounder = {
    name: "Mr. Monu Shetty",
    title: "CTO",
    image: "/src/assets/monu-shetty.jpeg",
    bio: "Monu brings 8+ years of technical and strategic experience to Hexamad Digital. He leads our technology initiatives, overseeing web development, marketing automation, and technical infrastructure to ensure seamless digital experiences.",
    expertise: [
      { skill: "Web Development", level: 95 },
      { skill: "Marketing Automation", level: 92 },
      { skill: "Technical Strategy", level: 90 },
      { skill: "System Architecture", level: 88 },
      { skill: "Project Management", level: 93 }
    ]
  };

  const cmoAndCoo = {
    name: "Mr. Tousif Shaikh (Ali)",
    title: "CMO & COO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Tousif brings extensive experience in marketing operations and business strategy to Hexamad Digital. He oversees daily operations while driving our marketing initiatives, ensuring operational excellence and strategic growth.",
    expertise: [
      { skill: "Marketing Strategy", level: 94 },
      { skill: "Operations Management", level: 96 },
      { skill: "Business Development", level: 91 },
      { skill: "Team Leadership", level: 93 },
      { skill: "Strategic Planning", level: 89 }
    ]
  };

  const team = [
    {
      name: "Sarah Chen",
      role: "Head of SEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612a786?w=400&h=400&fit=crop&crop=face",
      description: "SEO specialist with 8+ years driving organic growth for Fortune 500 companies."
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Award-winning creative director specializing in brand storytelling and visual campaigns."
    },
    {
      name: "Emily Watson",
      role: "PPC Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Data-driven PPC expert managing $2M+ in annual ad spend with exceptional ROI."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth and success."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Staying ahead of digital trends to provide cutting-edge solutions for our clients."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete transparency in our processes, reporting, and communication with every client."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, understanding your business inside and out."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project we undertake."
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description: "Data-informed strategies that align with your long-term business objectives."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-gradient">Hexamad Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate digital marketing professionals dedicated to 
            transforming businesses through innovative strategies and measurable results.
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Meet Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionary leaders behind Hexamad Digital's success story.
            </p>
          </div>
          
          {/* First Co-Founder */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="text-center lg:text-left">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-64 h-80 rounded-2xl object-cover mx-auto lg:mx-0 shadow-elegant glow-primary"
                />
                <h3 className="text-3xl font-display font-bold mt-6 mb-2">{founder.name}</h3>
                <p className="text-primary font-medium text-lg">{founder.title}</p>
              </div>

              {/* Founder Bio & Expertise */}
              <div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Expertise Chart */}
                <div className="space-y-4">
                  <h4 className="text-xl font-display font-semibold mb-4">Core Expertise</h4>
                  {founder.expertise.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.1}s` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Co-Founder */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Bio & Expertise (Left on desktop) */}
              <div className="order-2 lg:order-1">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {coFounder.bio}
                </p>

                {/* Expertise Chart */}
                <div className="space-y-4">
                  <h4 className="text-xl font-display font-semibold mb-4">Core Expertise</h4>
                  {coFounder.expertise.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.1}s` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Founder Image (Right on desktop) */}
              <div className="order-1 lg:order-2 text-center lg:text-right">
                <img
                  src={coFounder.image}
                  alt={coFounder.name}
                  className="w-64 h-80 rounded-2xl object-cover mx-auto lg:ml-auto lg:mr-0 shadow-elegant glow-primary"
                />
                <h3 className="text-3xl font-display font-bold mt-6 mb-2">{coFounder.name}</h3>
                <p className="text-primary font-medium text-lg">{coFounder.title}</p>
              </div>
            </div>
          </div>
          
          {/* Third Leader */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Leader Image */}
              <div className="text-center lg:text-left">
                <img
                  src={cmoAndCoo.image}
                  alt={cmoAndCoo.name}
                  className="w-64 h-80 rounded-2xl object-cover mx-auto lg:mx-0 shadow-elegant glow-primary"
                />
                <h3 className="text-3xl font-display font-bold mt-6 mb-2">{cmoAndCoo.name}</h3>
                <p className="text-primary font-medium text-lg">{cmoAndCoo.title}</p>
              </div>

              {/* Leader Bio & Expertise */}
              <div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {cmoAndCoo.bio}
                </p>

                {/* Expertise Chart */}
                <div className="space-y-4">
                  <h4 className="text-xl font-display font-semibold mb-4">Core Expertise</h4>
                  {cmoAndCoo.expertise.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.1}s` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of specialists brings together decades of experience 
              in digital marketing, creative design, and strategic planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="service-card text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-2xl object-cover mx-auto mb-6 shadow-elegant"
                />
                <h3 className="text-xl font-display font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient">Hexamad Digital</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values and approach set us apart in the digital marketing landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="service-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <value.icon size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Work With <span className="text-gradient">Industry Experts</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our experienced team can help transform your digital presence 
            and drive meaningful business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule Consultation
            </button>
            <button className="btn-secondary">
              View Our Work
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;