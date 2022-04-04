import Layout from "../components/Layout";
import TeamMember from "../components/TeamMember";
import {useContext} from "react";
import {LangContext} from "../contexts/LangContext";

const TEAMDATA = [{
  name:'Diederick Vos',
  title:'Consultant',
  imageurl:'/team-diederickVos.png',
  quote_nl:'Ik geloof in een wereld die we beter kunnen maken terwijl we een leuk leven leiden. Als we met z\'n allen een beetje bewuster zouden zijn en kleine verbeterstapjes zouden zetten ben ik ervan overtuigd dat we de wereld in een betere staat achter kunnen laten dan dat we haar ooit geërfd hebben.',
  quote_en:'I believe in a world we can improve whilst maintaining an enjoyable life. If we all would be a little more conscious and we would continuously make small improvements I\'m convinced we could leave our planet in a better condition than we inherited it.'
},
  {
  name:'Felix van Musschenbroek Greve',
  title:'Consultant',
  imageurl:'/team-felix.png',
  quote_nl:'Pas halverwege mijn dertigste realiseerde ik me dat ik de kracht had om zelf een betekenisvol verschil te maken voor het milieu In plaats van altijd die revolutionaire grote verandering te plannen die altijd werd uitgesteld, begon ik kleinere en meer behapbare stappen te zetten. Zo kon ik beginnen, en alle positiviteit die daaruit voortkwam, gaf me het zetje dat ik nodig had om verder te gaan.',
  quote_en:'Only midway through my 30’s, I realised that I had the power to make a meaningful difference for the environment myself Instead of always planning this revolutionary big change that was always put off, I started making smaller and more manageable steps. This allowed me to start, and all the positiveness that resulted from this, gave the push I needed to keep going further.With Releaf the Planet I hope to be at this starting point of other people’s journey towards more sustainable living. I want to help you take that "one small step". '
},
  {
  name:'Diederick Vos',
  title:'Consultant',
  imageurl:'/team-diederickVos.png',
  quote_nl:'Ik geloof in een wereld die we beter kunnen maken terwijl we een leuk leven leiden. Als we met z allen een beetje bewuster zouden zijn en kleine verbeterstapjes zouden zetten ben ik ervan overtuigd dat we de wereld in een betere staat achter kunnen laten dan dat we haar ooit geërfd hebben.',
  quote_en:'I believe in a world we can improve whilst maintaining an enjoyable life. If we all would be a little more conscious and we would continuously make small improvements I am convinced we could leave our planet in a better condition than we inherited it.'
}
]

const PAGEDATA = [
  {
    title_1:"Why Reducing the Carbon Footprint is important for us?",
    title_2:"Sustainability is a concept related to the development of products, goods, and services that involves meeting our present needs without compromising the ability of future generations to fulfill their own needs. Sustainability as a concept recognizes that the environment is an exhaustible resource. Therefore, it is important to use the environment and its resources rationally and protect it for the good of the Earth, our environment, humanity, & all living things.",
    title_3:"Who we are?"
  },
  {
    title_1:"Ondernemen is stappen maken",
    title_2:"We helpen je met informatie, tools en persoonlijk advies. Zodat de zaken goed lopen, nu en later.",
    title_3:"Letter of Credit biedt zekerheid"
  }
]
function AboutUs() {

  const [lang2, setLang2] = useContext(LangContext);
  let titles = PAGEDATA[0]
  if (lang2 == 'nl')
    titles = PAGEDATA[1]

  return (
    <div>
      <Layout>
        <div className="flex justify-center">
          <div className="m-6">
            <p className="text-2xl font-bold text-leaf-800 mb-4 text-center">{titles.title_1}</p>
            <p className="text-lg font-medium mb-6 text-center lg:mx-24 mx-2">{titles.title_2}</p>
            <p className="text-2xl font-bold text-leaf-800 my-6 text-center">{titles.title_3}</p>
            <div className="flex flex-wrap justify-center lg:mx-16">
              {TEAMDATA.map((e,index) =>
                <TeamMember key={index} member={e}/>
              )
              }
            </div>
          </div>
    </div>
      </Layout>
    </div>
  );
}

export default AboutUs;