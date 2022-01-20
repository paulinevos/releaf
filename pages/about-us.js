import Layout from "../components/Layout";
import TeamMember from "../components/TeamMember";

function AboutUs() {
  return (
    <div>
      <Layout>
        <div className="flex justify-center">
          <div className="m-6">
            <p className="text-2xl font-bold text-leaf-800 mb-4">Why Reducing the Carbon Footprint is important for us?</p>
            <p className="text-lg font-medium mb-6">Sustainability is a concept related to the development of products, goods, and services that involves meeting our present needs without compromising the ability of future generations to fulfill their own needs. Sustainability as a concept recognizes that the environment is an exhaustible resource. Therefore, it is important to use the environment and its resources rationally and protect it for the good of the Earth, our environment, humanity, & all living things.</p>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
          </div>
    </div>
      </Layout>
    </div>
  );
}

export default AboutUs;