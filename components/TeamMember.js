
export function TeamMember(props) {
  return (
    <figure className="lg:flex border-leaf-800 border-b lg:p-8 p-3">
      <img className="w-48 h-48 rounded-full p-4 bg-leaf-400 shadow-inner-lg mx-auto lg:mb-2 mb-6 object-cover" src={props.member.imageurl} alt={props.member.name} width="384" height="512"/>
      <div className="space-y-4 pl-6">
        <blockquote>
          <p className="text-md font-medium mb-2">
            “{props.member.quote_nl}”
          </p>
          <p className="text-md font-medium">
            “{props.member.quote_en}”
          </p>
        </blockquote>
        <figcaption>
          <p className="font-semibold">{props.member.name}</p>
          <p className="opacity-70">{props.member.title}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export default TeamMember;