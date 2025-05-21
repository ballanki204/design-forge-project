
import { Link } from 'react-router-dom';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/portfolio/${project.slug}`} 
      className="group block overflow-hidden hover-scale"
    >
      <div className="aspect-[4/3] overflow-hidden bg-design-beige">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-sm text-design-dark/70">{project.category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
