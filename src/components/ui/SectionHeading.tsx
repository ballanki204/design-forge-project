
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      <h2 className={`mb-4 ${light ? 'text-white' : 'text-design-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-design-dark/80'}`}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
