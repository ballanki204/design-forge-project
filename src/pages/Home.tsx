
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard, { Project } from '../components/ui/ProjectCard';
import ServiceCard from '../components/ui/ServiceCard';

// Sample data (would come from an API in a real app)
const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Apartment',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    slug: 'modern-minimalist-apartment',
  },
  {
    id: '2',
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    slug: 'boutique-hotel-lobby',
  },
  {
    id: '3',
    title: 'Urban Loft Renovation',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop',
    slug: 'urban-loft-renovation',
  },
];

const services = [
  {
    title: 'Residential Design',
    description: 'Transform your house into a personalized home with our comprehensive residential design services.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
  },
  {
    title: 'Commercial Design',
    description: 'Create inspiring workspaces that boost productivity and reflect your brand identity.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop',
  },
  {
    title: 'Consultation',
    description: 'Get expert advice on color schemes, furniture layouts, and styling from our talented designers.',
    imageUrl: 'https://images.unsplash.com/photo-1577041092293-fb3ffecfe308?w=800&auto=format&fit=crop',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-12 md:pb-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&auto=format&fit=crop")',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white fade-in">
            <h1 className="mb-6">Transforming spaces into extraordinary experiences</h1>
            <p className="text-xl mb-8 text-white/90">
              We create stunning interior designs that reflect your unique style and enhance your living experience with thoughtful layouts, beautiful aesthetics, and functional solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                View Our Work
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-design-charcoal">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1616038242814-a6eac7845d88?w=800&auto=format&fit=crop"
                alt="Inside Studio Design Process"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-design-charcoal mb-4">Creating spaces that inspire</h2>
              <p className="mb-6 text-design-dark/80">
                At Inside Studio, we believe that exceptional interior design transforms spaces into captivating environments where beauty and functionality merge seamlessly.
              </p>
              <p className="mb-8 text-design-dark/80">
                Our team of passionate designers brings creativity, attention to detail, and industry expertise to every project, ensuring spaces that reflect your unique style and enhance your everyday life.
              </p>
              <Link to="/about" className="btn-outline">
                About Our Studio
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-design-beige">
        <div className="container-custom">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our most impactful designs that showcase our passion for creating beautiful, functional spaces."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-outline">
              View All Projects
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="From concept to completion, we offer a full range of interior design services tailored to your needs."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                icon={<></>} // Not using icons for this section
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline">
              Explore All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1615873968403-89e068629265?w=1400&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-design-charcoal/80"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <svg
              className="w-10 h-10 mx-auto mb-4 text-design-sage"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.2.77.03.9.41.03.1.05.21.05.32 0 .5-.41.9-.9.9-.13 0-.26-.03-.38-.08-1.2.7-2 2.13-2 3.7 0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.5 1.75-4.57 4.08-5.09.2-.04.42-.06.64-.06 1.94 0 3.5 1.56 3.5 3.47 0 .66-.18 1.29-.5 1.83-.97 1.68-3.33 1.935-3.8-.95z" />
            </svg>
            <blockquote className="text-2xl font-serif mb-8">
              "Working with Inside Studio was a delight from start to finish. Their team transformed our ordinary space into something truly extraordinary. Every detail was carefully considered, and the result exceeded our expectations."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop"
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-white/70 text-sm">Residential Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-design-taupe text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to transform your space?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch to schedule a consultation with our design team. We'll discuss your vision and how we can help bring it to life.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-design-charcoal hover:bg-design-cream">
            Contact Us
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
