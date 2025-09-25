import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Filter, Play, Calendar, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "SEO", "Social Media", "PPC", "Web Development", "Content Strategy"];

  const projects = [
    {
      id: 1,
      title: "E-commerce SEO Transformation",
      category: "SEO",
      description: "Increased organic traffic by 300% for leading fashion brand",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      duration: "3 months",
      results: "300% traffic increase"
    },
    {
      id: 2,
      title: "Social Media Campaign Success",
      category: "Social Media",
      description: "Viral campaign generating 2M+ impressions",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
      duration: "2 months",
      results: "2M+ impressions"
    },
    {
      id: 3,
      title: "PPC ROI Optimization",
      category: "PPC",
      description: "Achieved 400% ROI improvement for B2B client",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      duration: "4 months",
      results: "400% ROI increase"
    },
    {
      id: 4,
      title: "Modern Web Development",
      category: "Web Development",
      description: "Responsive website with 50% faster loading",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      duration: "6 weeks",
      results: "50% faster loading"
    },
    {
      id: 5,
      title: "Content Strategy Overhaul",
      category: "Content Strategy",
      description: "Content plan that doubled engagement rates",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      duration: "3 months",
      results: "2x engagement"
    },
    {
      id: 6,
      title: "Local SEO Domination",
      category: "SEO",
      description: "Restaurant chain ranked #1 in local searches",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
      duration: "5 months",
      results: "#1 local ranking"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our successful digital marketing campaigns and transformative projects 
            that have helped businesses achieve remarkable growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "bg-card hover:bg-card/80 text-foreground hover:text-primary"
              }`}
            >
              <Filter size={16} className="inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{project.results}</span>
                      <Play size={20} className="bg-primary rounded-full p-1 w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {project.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <button className="flex items-center text-primary hover:text-primary-glow transition-colors font-medium">
                  View Case Study
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Start Your <span className="text-gradient">Success Story</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful clients and transform your digital presence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Project
            </button>
            <button className="btn-secondary">
              Schedule Consultation
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;