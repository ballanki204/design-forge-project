
import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import SectionHeading from '../components/ui/SectionHeading';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-design-beige">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-design-dark/80">
              Reach out to discuss your project or schedule a consultation with our design team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-design-beige hover-scale">
              <div className="flex justify-center mb-4 text-design-taupe">
                <Phone size={32} />
              </div>
              <h3 className="text-xl mb-3 font-medium">Call Us</h3>
              <p className="text-design-dark/80 mb-2">Mon-Fri, 9am-5pm</p>
              <a href="tel:+917674887919" className="text-design-charcoal font-medium">
                +91 76748 87919
              </a>
            </div>
            <div className="text-center p-8 bg-design-beige hover-scale">
              <div className="flex justify-center mb-4 text-design-taupe">
                <Mail size={32} />
              </div>
              <h3 className="text-xl mb-3 font-medium">Email Us</h3>
              <p className="text-design-dark/80 mb-2">We'll respond within 24 hours</p>
              <a href="mailto:hello@bhuvanainterior.com" className="text-design-charcoal font-medium">
                hello@bhuvanainterior.com
              </a>
            </div>
            <div className="text-center p-8 bg-design-beige hover-scale">
              <div className="flex justify-center mb-4 text-design-taupe">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl mb-3 font-medium">Visit Us</h3>
              <p className="text-design-dark/80 mb-2">By appointment only</p>
              <address className="not-italic text-design-charcoal font-medium">
                123 Design Avenue<br />
                New York, NY 10001
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-design-beige">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="Fill out the form below to tell us about your project, and we'll get back to you as soon as possible."
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-design-dark mb-1">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-design-taupe/30 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-design-taupe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-design-dark mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-design-taupe/30 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-design-taupe"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-design-dark mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-design-taupe/30 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-design-taupe"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-design-dark mb-1">
                      Service Interested In*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-design-taupe/30 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-design-taupe"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Residential">Residential Design</option>
                      <option value="Commercial">Commercial Design</option>
                      <option value="Consultation">Design Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-design-dark mb-1">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border border-design-taupe/30 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-design-taupe"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="ml-2" size={18} />}
                  </button>
                </div>
              </form>
            </div>
            <div className="h-[400px] md:h-auto relative">
              {/* This would typically be a Google Maps embed */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-center p-8">
                <p className="text-design-dark/70">
                  Interactive map would be embedded here (Google Maps or similar service)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and process."
            center
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl mb-3 font-medium">How does the design process work?</h3>
              <p className="text-design-dark/80 mb-6">
                Our design process typically includes discovery, concept development, design refinement, and implementation phases. We'll guide you through each step to ensure a smooth experience.
              </p>
              
              <h3 className="text-xl mb-3 font-medium">What is your pricing structure?</h3>
              <p className="text-design-dark/80 mb-6">
                We offer flexible pricing options, including hourly rates and flat fees based on project scope. We'll provide a detailed proposal after our initial consultation.
              </p>
              
              <h3 className="text-xl mb-3 font-medium">How long does a typical project take?</h3>
              <p className="text-design-dark/80">
                Project timelines vary based on scope and complexity. A room redesign might take 6-8 weeks, while a full home redesign could take several months. We'll provide a timeline estimate during our consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium">Do you work with clients remotely?</h3>
              <p className="text-design-dark/80 mb-6">
                Yes, we offer virtual design services for clients outside our local area. We use video consultations, digital mood boards, and 3D renderings to communicate design concepts.
              </p>
              
              <h3 className="text-xl mb-3 font-medium">Can you work with my existing furniture?</h3>
              <p className="text-design-dark/80 mb-6">
                Absolutely! We're happy to incorporate existing pieces that you love into your new design, complementing them with new items as needed.
              </p>
              
              <h3 className="text-xl mb-3 font-medium">What information do you need to get started?</h3>
              <p className="text-design-dark/80">
                To begin, we'll need to understand your design goals, budget, timeline, and any inspiration images you may have. Photos of your current space are also helpful for our initial assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
