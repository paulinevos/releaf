import Layout from "../components/Layout";
import {LangContext} from "../contexts/LangContext";
import {useContext} from "react";

function OurMethods() {
  const [lang2] = useContext(LangContext);

  const content = [
    {
      title:'Our methods',
      q1:'What are we going to do?',
      q1_a1:'Together we’ll ensure all your employees can work carbon neutral. We’ll start by calculating the carbon footprint based on all transportation. Regardless of means, because an e-bike obviously has a lower impact than a diesel fueled car. ',
      q1_a2:'You can take care of carbon compensation yourself, but as an additional service we can take care of this too.',
      q2:'What’s in it for you and your employees?',
      q2_a1:'Insight into what needs to be compensated annually.',
      q2_a2:'Fully compliant with privacy laws. At no point will we have any personal data on your employees. ',
      q2_a3:'All job related transportation is completely carbon neutral for all your employees.',
      q2_a3_1:'This immediately boosts your company’s reputation',
      q2_a3_2:'An unexpected and therefore highly appreciated benefit for your employees',
      q2_a3_3:'And last but not least a grateful planet ',
      q3:'What exactly are we going to do and what are the costs?',
      q3_a1:'This will be based on your specific situation nd wishes. Contact us at info@releaftheplanet.nl or +31(0)615311627 ',
    },
    {
      title:'Onze aanpak',
      q1:'Wat gaan we doen?',
      q1_a1:'Samen zorgen we dat jouw medewerkers CO2 neutraal kunnen werken. We beginnen door de footprint van alle vervoerskilometers te berekenen. Op maat op basis van de verschillende vervoersmiddelen. Een e-bike is immers nog steeds een stuk beter dan een dikke dieselbak. ',
      q1_a2:'Het compenseren kan je zelf doen, maar kunnen wij ook voor je uit handen nemen. ',
      q2:'Wat levert het op?',
      q2_a1:'Inzicht wat er jaarlijks gecompenseerd moet worden.',
      q2_a2:'Volledig in lijn met privacy wetgeving. Dus geen persoonlijke gegevens van je medewerkers zullen bij ons terecht komen. ',
      q2_a3:'Al jouw medewerkers bewegen zich voor hun werk zonder CO2 uitstoot. ',
      q2_a3_1:'Dit geeft de reputatie van je bedrijf een boost.',
      q2_a3_2:'Een onverwachte en daarom extra indrukwekkende secundaire arbeidsvoorwaarde voor jouw medewerkers',
      q2_a3_3:'En uiteraard is onze planeet je ook dankbaar',
      q3:'Wat gaan we precies doen en wat kost het?',
      q3_a1:'Dat bepalen we in overleg op basis van jouw specifieke situatie. Neem vrijblijvend contact met ons op via info@releaftheplanet.nl of +31(0)615311627 ',
    }
  ]

  let pageContent = content[0]
  if (lang2 == 'en')
    pageContent = content[1]
  return (
    <div>
      <Layout>
        <div className="ml-8 text-leaf-800 pb-24">
            <p className="text-4xl font-semibold my-8">{pageContent.title}:</p>
          <div className="my-4">
            <p className="text-xl font-semibold mb-2">{pageContent.q1}</p>
            <p className="text-lg">{pageContent.q1_a1}</p>
            <p className="text-lg">{pageContent.q1_a2}</p>
          </div>
          <div className="my-4">
            <p className="text-xl font-semibold mb-2">{pageContent.q2}</p>
            <p className="text-lg">{pageContent.q2_a1}</p>
            <p className="text-lg">{pageContent.q2_a2}</p>
            <p className="text-lg">{pageContent.q2_a3}</p>
            <ul className="ml-8 my-2">
              <li>{pageContent.q2_a3_1}</li>
              <li>{pageContent.q2_a3_2}</li>
              <li>{pageContent.q2_a3_3}</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-xl font-semibold mb-2">{pageContent.q3}</p>
            <p className="text-lg">{pageContent.q3_a1}</p>
          </div>
        </div>

      </Layout>
    </div>
  );
}

export default OurMethods;