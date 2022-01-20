
export function TeamMember(props) {
  return (
    <figure className="lg:flex border-leaf-800 border-b p-8">
      <img className="w-36 h-36 rounded-full p-4 bg-leaf-400 shadow-inner-lg mx-auto lg:mb-2 mb-6 object-cover" src={props.member.imageurl} alt={props.member.name} width="384" height="512"/>
      <div className="space-y-4 pl-6">
        <blockquote>
          <p className="text-md font-medium">
            “{props.member.quote}”
          </p>
        </blockquote>
        <figcaption>
          <div>{props.member.name}</div>
          <div>{props.member.title}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default TeamMember;