
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl?: string;
}

const ServiceCard = ({ title, description, icon, imageUrl }: ServiceCardProps) => {
  return (
    <div className="group">
      {imageUrl ? (
        <div className="mb-6 aspect-[3/2] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-6 text-design-taupe">{icon}</div>
      )}
      <h3 className="text-xl mb-3 font-medium group-hover:text-design-taupe transition-colors">{title}</h3>
      <p className="text-design-dark/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
