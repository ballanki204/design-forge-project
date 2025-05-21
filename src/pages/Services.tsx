
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";

const Services = () => {
  const residentialServices = [
    {
      title: "Full Home Design",
      description: "Comprehensive interior design for your entire home, from concept to installation, creating cohesive, beautiful spaces that reflect your unique style.",
      imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop"
    },
    {
      title: "Room Makeovers",
      description: "Transform individual rooms with our focused design services, updating color schemes, furniture, and decor to create a fresh new look.",
      imageUrl: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&auto=format&fit=crop"
    },
    {
      title: "Kitchen & Bath Design",
      description: "Specialized design for these essential spaces, balancing functionality with beautiful aesthetics to create kitchens and bathrooms you'll love.",
      imageUrl: "https://images.unsplash.com/photo-1574739782594-db4ead022697?w=800&auto=format&fit=crop"
    }
  ];

  const commercialServices = [
    {
      title: "Office Design",
      description: "Create productive, inspiring workspaces that reflect your brand identity and enhance employee wellbeing and collaboration.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
    },
    {
      title: "Retail Design",
      description: "Design compelling retail environments that enhance the customer experience and showcase your products effectively.",
      imageUrl: "https://images.unsplash.com/photo-1604176424472-9d476ffa7817?w=800&auto=format&fit=crop"
    },
    {
      title: "Hospitality Design",
      description: "Create memorable experiences in hotels, restaurants, and other hospitality spaces through thoughtful, distinctive design.",
      imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop"
    }
  ];

  const consultingServices = [
    {
      title: "Design Consultation",
      description: "Get expert advice on color schemes, furniture layouts, material selections, and more to guide your design decisions.",
      imageUrl: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&auto=format&fit=crop"
    },
    {
      title: "Furniture Selection",
      description: "Expert assistance in choosing the perfect furniture pieces to complement your space and reflect your personal style.",
      imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop"
    },
    {
      title: "Project Management",
      description: "Comprehensive oversight of your design project, coordinating contractors, vendors, and timelines for a smooth process.",
      imageUrl: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-design-beige">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-design-dark/80">
              From initial concept to final installation, we offer comprehensive interior design services tailored to your unique needs and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Design Approach"
                subtitle={
                  <>
                    <p className="mb-4">
                      We believe that exceptional interior design begins with a deep understanding of our clients' needs, preferences, and lifestyle.
                    </p>
                    <p>
                      Our collaborative process ensures that we create spaces that not only look beautiful but also function perfectly for the people who use them every day.
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop"
                alt="Design Consultation"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-design-beige">
        <div className="container-custom">
          <SectionHeading
            title="Our Design Process"
            subtitle="Our streamlined process ensures a smooth journey from initial concept to beautiful finished spaces."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center hover-scale">
              <div className="text-3xl font-serif text-design-taupe mb-3">01</div>
              <h3 className="text-xl mb-3 font-medium">Discovery</h3>
              <p className="text-design-dark/80">We begin by understanding your needs, preferences, budget, and timeline through in-depth consultation.</p>
            </div>
            <div className="bg-white p-8 text-center hover-scale">
              <div className="text-3xl font-serif text-design-taupe mb-3">02</div>
              <h3 className="text-xl mb-3 font-medium">Concept Development</h3>
              <p className="text-design-dark/80">We create detailed design concepts, including space planning, color schemes, and material selections.</p>
            </div>
            <div className="bg-white p-8 text-center hover-scale">
              <div className="text-3xl font-serif text-design-taupe mb-3">03</div>
              <h3 className="text-xl mb-3 font-medium">Design Refinement</h3>
              <p className="text-design-dark/80">Based on your feedback, we refine the design and prepare detailed implementation plans.</p>
            </div>
            <div className="bg-white p-8 text-center hover-scale">
              <div className="text-3xl font-serif text-design-taupe mb-3">04</div>
              <h3 className="text-xl mb-3 font-medium">Implementation</h3>
              <p className="text-design-dark/80">We coordinate contractors, order products, and oversee installation to bring the design to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Residential Design Services"
            subtitle="Transform your home into a beautiful, functional space that reflects your personality and enhances your lifestyle."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                icon={<></>} // Not using icons for this section
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="section-padding bg-design-beige">
        <div className="container-custom">
          <SectionHeading
            title="Commercial Design Services"
            subtitle="Create inspiring workspaces and commercial environments that boost productivity, enhance customer experiences, and reflect your brand identity."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                icon={<></>} // Not using icons for this section
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Consulting Services"
            subtitle="Get expert guidance for your design projects, whether you need help with specific aspects or comprehensive project management."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                icon={<></>} // Not using icons for this section
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-design-taupe text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to start your design project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discuss how we can help transform your space into something extraordinary.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-design-charcoal hover:bg-design-cream">
            Get in Touch
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
