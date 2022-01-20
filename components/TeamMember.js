
export function TeamMember(props) {
  return (
    <figure className="flex border-leaf-800 border-t p-8">
      <img className="w-36 h-36 rounded-full p-4 bg-leaf-400 shadow-inner-lg" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=171" alt="" width="384" height="512"/>
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
  );
}

export default TeamMember;