import {LangContext} from "../contexts/LangContext";
import {useContext} from "react";

export function TeamMember(props) {

  const [lang2, setLang2] = useContext(LangContext);
  let quote = props.member.quote_nl
  if (lang2 == 'en')
    quote = props.member.quote_en

  return (
    <figure className="w-96 items-center m-8">
      <img className="w-48 h-48 rounded-full p-4 bg-leaf-400 shadow-inner-lg mx-auto lg:mb-2 mb-6 object-cover" src={props.member.imageurl} alt={props.member.name} width="384" height="512"/>
      <div className="space-y-4 pl-6">
        <figcaption className="text-center">
          <p className="font-semibold">{props.member.name}</p>
          <p className="opacity-70">{props.member.title}</p>
        </figcaption>
        <blockquote>
          <p className="text-md font-medium mb-2 text-center">"{quote}"</p>
        </blockquote>
      </div>
    </figure>
  );
}

export default TeamMember;