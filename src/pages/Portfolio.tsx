
import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard, { Project } from "../components/ui/ProjectCard";

// Sample projects data
const projects: Project[] = [
  {
    id: "1",
    title: "Modern Minimalist Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    slug: "modern-minimalist-apartment",
  },
  {
    id: "2",
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    slug: "boutique-hotel-lobby",
  },
  {
    id: "3",
    title: "Urban Loft Renovation",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop",
    slug: "urban-loft-renovation",
  },
  {
    id: "4",
    title: "Scandinavian Inspired Home",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&auto=format&fit=crop",
    slug: "scandinavian-inspired-home",
  },
  {
    id: "5",
    title: "Luxury Restaurant Design",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    slug: "luxury-restaurant-design",
  },
  {
    id: "6",
    title: "Coastal Beach House",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop",
    slug: "coastal-beach-house",
  },
  {
    id: "7",
    title: "Modern Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
    slug: "modern-office-space",
  },
  {
    id: "8",
    title: "Mid-Century Modern Renovation",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&auto=format&fit=crop",
    slug: "mid-century-modern-renovation",
  },
  {
    id: "9",
    title: "Boutique Retail Store",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1604176424472-9d476ffa7817?w=800&auto=format&fit=crop",
    slug: "boutique-retail-store",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", "Residential", "Commercial"];
  
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-design-beige">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-design-dark/80">
              Explore our collection of completed projects showcasing our design expertise across residential and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-center mb-10">
            <div className="inline-flex border border-design-charcoal">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 text-sm font-medium transition-colors ${
                    filter === category
                      ? "bg-design-charcoal text-white"
                      : "bg-transparent text-design-charcoal hover:bg-design-beige"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-design-charcoal text-white">
        <div className="container-custom">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            center
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-design-dark/50 p-8">
              <div className="mb-4 text-design-taupe">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.2.77.03.9.41.03.1.05.21.05.32 0 .5-.41.9-.9.9-.13 0-.26-.03-.38-.08-1.2.7-2 2.13-2 3.7 0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.5 1.75-4.57 4.08-5.09.2-.04.42-.06.64-.06 1.94 0 3.5 1.56 3.5 3.47 0 .66-.18 1.29-.5 1.83-.97 1.68-3.33 1.935-3.8-.95z" fill="currentColor" />
                </svg>
              </div>
              <p className="mb-6 text-white/90">
                "Working with Inside Studio was a seamless experience from start to finish. They truly understood our vision and brought it to life in ways we couldn't have imagined. Our home now feels like a perfect reflection of our family."
              </p>
              <div>
                <p className="font-medium">Jennifer & Mark Wilson</p>
                <p className="text-white/70 text-sm">Residential Clients</p>
              </div>
            </div>
            <div className="bg-design-dark/50 p-8">
              <div className="mb-4 text-design-taupe">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.2.77.03.9.41.03.1.05.21.05.32 0 .5-.41.9-.9.9-.13 0-.26-.03-.38-.08-1.2.7-2 2.13-2 3.7 0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.5 1.75-4.57 4.08-5.09.2-.04.42-.06.64-.06 1.94 0 3.5 1.56 3.5 3.47 0 .66-.18 1.29-.5 1.83-.97 1.68-3.33 1.935-3.8-.95z" fill="currentColor" />
                </svg>
              </div>
              <p className="mb-6 text-white/90">
                "The team at Inside Studio transformed our outdated office into a modern, collaborative workspace that our employees love coming to every day. The design perfectly captures our company culture."
              </p>
              <div>
                <p className="font-medium">Robert Chen</p>
                <p className="text-white/70 text-sm">CEO, TechStart Inc.</p>
              </div>
            </div>
            <div className="bg-design-dark/50 p-8">
              <div className="mb-4 text-design-taupe">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.2.77.03.9.41.03.1.05.21.05.32 0 .5-.41.9-.9.9-.13 0-.26-.03-.38-.08-1.2.7-2 2.13-2 3.7 0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.5 1.75-4.57 4.08-5.09.2-.04.42-.06.64-.06 1.94 0 3.5 1.56 3.5 3.47 0 .66-.18 1.29-.5 1.83-.97 1.68-3.33 1.935-3.8-.95z" fill="currentColor" />
                </svg>
              </div>
              <p className="mb-6 text-white/90">
                "Emma and her team brought such creativity and attention to detail to our restaurant redesign. The space is not only beautiful but also functions perfectly for our staff and customers. Highly recommend!"
              </p>
              <div>
                <p className="font-medium">Michael Rodriguez</p>
                <p className="text-white/70 text-sm">Owner, Olive & Vine Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
