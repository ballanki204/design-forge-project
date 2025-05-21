
import SectionHeading from "../components/ui/SectionHeading";
import TeamMember from "../components/ui/TeamMember";

// Sample team data
const teamMembers = [
  {
    name: "Emma Richardson",
    position: "Founder & Creative Director",
    bio: "With over 15 years of experience, Emma brings innovative vision and exceptional leadership to every project.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    position: "Senior Interior Designer",
    bio: "David specializes in contemporary residential design with a focus on sustainable materials and practices.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop"
  },
  {
    name: "Sophia Martinez",
    position: "Commercial Design Specialist",
    bio: "Sophia creates innovative workplace environments that inspire productivity and reflect company culture.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop"
  },
  {
    name: "Michael Taylor",
    position: "Project Manager",
    bio: "Michael ensures every project is delivered on time and within budget while maintaining exceptional quality.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop"
  }
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-design-beige">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="mb-6">About Inside Studio</h1>
            <p className="text-xl text-design-dark/80">
              We're a team of passionate designers dedicated to creating exceptional interior spaces that reflect our clients' personalities and enhance their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle={
                  <>
                    <p className="mb-4">
                      Founded in 2015 by Emma Richardson, Inside Studio began with a simple mission: to create thoughtful interior designs that balance aesthetics and functionality.
                    </p>
                    <p>
                      What started as a one-woman consultancy has grown into a diverse team of talented designers, project managers, and specialists who share a passion for transforming spaces and enhancing lives through exceptional interior design.
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7f34b1d2f2a?w=800&auto=format&fit=crop"
                alt="Inside Studio Office"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-design-charcoal text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&auto=format&fit=crop"
                alt="Designer Working"
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div>
              <SectionHeading
                title="Our Philosophy"
                subtitle={
                  <>
                    <p className="mb-4">
                      We believe that great design should be both beautiful and practical, enhancing how people experience and interact with their environments.
                    </p>
                    <p>
                      Every project begins with understanding our clients' needs, aspirations, and lifestyles. We combine this understanding with our design expertise to create spaces that are aesthetically pleasing, functional, and uniquely tailored to each client.
                    </p>
                  </>
                }
                light
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our talented team brings diverse skills and perspectives to every project, united by our passion for exceptional design."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-design-beige">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="These principles guide our approach to every project and relationship."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 hover-scale">
              <h3 className="text-xl mb-3 font-medium">Client-Centered Design</h3>
              <p className="text-design-dark/80">We listen carefully to our clients' needs and preferences, ensuring that each design reflects their unique style and enhances their lifestyle.</p>
            </div>
            <div className="bg-white p-8 hover-scale">
              <h3 className="text-xl mb-3 font-medium">Attention to Detail</h3>
              <p className="text-design-dark/80">We believe that thoughtful details make all the difference in creating spaces that delight and inspire on a daily basis.</p>
            </div>
            <div className="bg-white p-8 hover-scale">
              <h3 className="text-xl mb-3 font-medium">Sustainability</h3>
              <p className="text-design-dark/80">We're committed to incorporating sustainable practices and materials whenever possible to create healthier spaces and reduce environmental impact.</p>
            </div>
            <div className="bg-white p-8 hover-scale">
              <h3 className="text-xl mb-3 font-medium">Innovation</h3>
              <p className="text-design-dark/80">We stay at the forefront of design trends and technologies to bring fresh, innovative solutions to our clients' spaces.</p>
            </div>
            <div className="bg-white p-8 hover-scale">
              <h3 className="text-xl mb-3 font-medium">Collaboration</h3>
              <p className="text-design-dark/80">We work closely with clients, architects, contractors, and artisans to ensure a seamless design and implementation process.</p>
            </div>
            <div className="bg-white p-8 hover-scale">
              <h3 className="text-xl mb-3 font-medium">Excellence</h3>
              <p className="text-design-dark/80">We strive for excellence in every aspect of our work, from concept development to final installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Awards & Recognition"
            subtitle="Our commitment to excellence has been recognized by industry leaders."
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-serif text-design-taupe mb-3">2023</div>
              <h4 className="text-lg font-medium mb-2">Design Excellence Award</h4>
              <p className="text-sm text-design-dark/70">Interior Design Association</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-serif text-design-taupe mb-3">2022</div>
              <h4 className="text-lg font-medium mb-2">Best Residential Design</h4>
              <p className="text-sm text-design-dark/70">Home & Living Magazine</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-serif text-design-taupe mb-3">2021</div>
              <h4 className="text-lg font-medium mb-2">Sustainable Design Award</h4>
              <p className="text-sm text-design-dark/70">Green Building Council</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
