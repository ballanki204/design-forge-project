
interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, position, bio, image }: TeamMemberProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 aspect-[3/4] overflow-hidden bg-design-beige">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-medium">{name}</h3>
      <p className="text-design-taupe mb-2">{position}</p>
      <p className="text-design-dark/80 text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;
