import Layout from "../components/Layout";
import TeamMember from "../components/TeamMember";

const TEAMDATA = [{
  name:'David Attenborough',
  title:'The Environment Show',
  imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU8n4gsZfWuY--UCJua3h1qeyeE2SJjjQCQ&usqp=CAU',
  quote:'Immensely powerful though we are today, it’s equally clear that we’re going to be even more powerful tomorrow. And what’s more there will be greater compulsion upon us to use our power as the number of human beings on Earth increases still further. Clearly we could devastate the world. As far as we know, the Earth is the only place in the universe where there is life. Its continued survival now rests in our hands.'
},
  {
    name:'David Attenborough',
    title:'The Environment Show',
    imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswTdb6VX3g4E8NY1pfL1jyr9OIhhQdY8PKg&usqp=CAU',
    quote:'There are three times as many people in the world as when I started making television programs 56 years ago. It is frightening. We can’t go on as we have been. We are seeing the consequences in terms of ecology, pollution, space and food production.'
  },
  {
    name:'David Attenborough',
    title:'The Environment Show',
    imageurl:'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=171',
    quote:' wish the world was twice as big - and half of it was still unexplored." "It\'s surely our responsibility to do everything within our power to create a planet that provides a home not just for us, but for all life on Earth'
  },
]

function AboutUs() {
  return (
    <div>
      <Layout>
        <div className="flex justify-center">
          <div className="m-6">
            <p className="text-2xl font-bold text-leaf-800 mb-4 text-center">Why Reducing the Carbon Footprint is important for us?</p>
            <p className="text-lg font-medium mb-6 text-center lg:mx-24 mx-2">Sustainability is a concept related to the development of products, goods, and services that involves meeting our present needs without compromising the ability of future generations to fulfill their own needs. Sustainability as a concept recognizes that the environment is an exhaustible resource. Therefore, it is important to use the environment and its resources rationally and protect it for the good of the Earth, our environment, humanity, & all living things.</p>
            <p className="text-2xl font-bold text-leaf-800 mt-6 text-center">Who we are?</p>
            {TEAMDATA.map((e,index) =>
              <TeamMember key={index} member={e}/>
            )
            }
          </div>
    </div>
      </Layout>
    </div>
  );
}

export default AboutUs;