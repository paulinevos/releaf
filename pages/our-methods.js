import Layout from "../components/Layout";
import {LangContext} from "../contexts/LangContext";
import {useContext} from "react";

function OurMethods() {
  const [lang2] = useContext(LangContext);

  const content = [
    {
      title:'Our method',
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
      connection:'This will be based on your specific situation nd wishes. Contact us at info@releaftheplanet.nl or +31(0)615311627 ',
    },
    {
      title:'Our method',
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
      connection:'This will be based on your specific situation nd wishes. Contact us at info@releaftheplanet.nl or +31(0)615311627 ',
    }
  ]
  let pageContent = content[0]
  if (lang2 == 'en')
    pageContent = content[1]
  return (
    <div>
      <Layout>
        <div className="ml-8">
          <div>
            <p className="font-bold text-sm bg-leaf-800 text-white p-2 rounded my-3 text-center mr-6">{pageContent.title}</p>
            <p className="font-bold text-lg">Removing the Plastic</p>
            <il>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
            </il>
            <p className="font-bold text-lg mt-4">Save the Water</p>
            <il>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
            </il>

            <p className="font-bold text-lg mt-4">Reduce Energy Consumption</p>
            <il>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
              <li>Dish soap, even the eco-friendly brands, is always sold in plastic bottles.</li>
            </il>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default OurMethods;