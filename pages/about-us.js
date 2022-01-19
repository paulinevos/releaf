import Layout from "../components/Layout";

function AboutUs() {
  return (
    <div>
      <Layout>
        <div className="flex justify-center">
          <div className="m-6">
            <p className="text-2xl font-bold text-leaf-800 mb-4">Why Reducing the Carbon Footprint is important for us?</p>
            <p className="text-lg font-medium mb-6">Sustainability is a concept related to the development of products, goods, and services that involves meeting our present needs without compromising the ability of future generations to fulfill their own needs. Sustainability as a concept recognizes that the environment is an exhaustible resource. Therefore, it is important to use the environment and its resources rationally and protect it for the good of the Earth, our environment, humanity, & all living things.</p>
            <figure className="flex border-leaf-800 border-t p-8">
              <img className="w-24 h-24 rounded-full " src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=171" alt="" width="384" height="512"/>
              <div className="space-y-4 pl-6">
                <blockquote>
                  <p className="text-md font-medium">
                    “I don’t know [why we're here]. People sometimes say to me, ‘Why don’t you admit that the humming bird, the butterfly, the Bird of Paradise are proof of the wonderful things produced by Creation?’ And I always say, well, when you say that, you’ve also got to think of a little boy sitting on a river bank, like here, in West Africa, that’s got a little worm, a living organism, in his eye and boring through the eyeball and is slowly turning him blind. The Creator God that you believe in, presumably, also made that little worm. Now I personally find that difficult to accommodate…”
                  </p>
                </blockquote>
                <figcaption>
                  <div>
                    Sarah Dayan
                  </div>
                  <div>
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="flex border-leaf-800 border-t p-8">
              <img className="w-24 h-24 rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=171" alt="" width="384" height="512"/>
              <div className="space-y-4 pl-6">
                <blockquote>
                  <p className="text-md font-medium">
                    “No one will protect what they don't care about; and no one will care about what they have never experiened”
                  </p>
                </blockquote>
                <figcaption>
                  <div>
                    Sarah Dayan
                  </div>
                  <div>
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="flex border-leaf-800 border-t p-8">
              <img className="w-24 h-24 rounded-full mx-auto " src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=171" alt="" width="384" height="512"/>
              <div className="space-y-4 pl-6">
                <blockquote>
                  <p className="text-md font-medium">
                    “I don't think whole populations are villainous, but Americans are just extraordinarily unaware of all kinds of things. If you live in the middle of that vast continent, with apparently everything your heart could wish for just because you were born there, then why worry? [...] If people lose knowledge, sympathy and understanding of the natural world, they're going to mistreat it and will not ask their politicians to care for it.”
                  </p>
                </blockquote>
                <figcaption>
                  <div>
                    Sarah Dayan
                  </div>
                  <div>
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
    </div>
      </Layout>
    </div>
  );
}

export default AboutUs;