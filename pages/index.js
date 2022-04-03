import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout";
import {LangContext} from "../contexts/LangContext";
import {useContext} from "react";
import Link from "next/link";

export default function Home() {
  const [lang2] = useContext(LangContext);

  const content = [
    {
      title:'Help your company and the planet by ensuring a carbon neutral job for all your employees',
      subtitle:'Sustainability is no longer a nice to have. It has become a license to operate.',
      question:'Why is this and what does it mean?',
      q_description:'In a digital age the value of your company increasingly depends on it’s reputation. ',
      q_1:'Applicants are no longer motivated to work for a company that lacks a focus on sustainability. In addition your current employees are motivated to make a career switch for similar reasons.',
      q_2:'Generating new business is becoming harder by the day. Did you know that more tenders are won based on sustainability criteria each year (26,9% in 2018 - 37,2% in 2020). ',
      sub_description:'This coincides with stricter laws and regulations being implemented (Circulair 2050, Paris agreement) with no end in sight (thankfully).',
      conclusion:'Together we can face this challenge. Effective and at low cost.',
      btn:'Eager to learn how?'
    },
    {
      title:'Help jouw bedrijf en de planeet door te zorgen dat jouw medewerkers CO2 neutraal werken',
      subtitle:'Duurzaamheid is niet langer een nice to have, maar een license to operate.',
      question:'Hoe zit dit dan en wat betekent het voor jouw organisatie?',
      q_description:'In een digitale tijd is de immateriële waarde (reputatie) van jouw bedrijf steeds bepalender. ',
      q_1:'Sollicitanten gaan een deurtje verder kijken of medewerkers vertrekken als er geen bijdrage op duurzaamheid geleverd wordt.',
      q_2:'Klanten gunnen opdrachten niet meer aan iedereen. Wist je bijvoorbeeld dat de gunning van aanbestedingen op basis van duurzaamheidscriteria gestegen is van 26,9% in 2018 tot 37,2% in 2020. ',
      sub_description:'Bovendien worden wet en regelgeving steeds scherper (Circulair 2050, Parijs akkoord, etc.) en dan zijn we binnen Europa ook nog een van de slechtste jongetjes van de klas. Dus ga er maar van uit dat we een inhaalslag moeten gaan slaan.',
      conclusion:'Samen kunnen we dit aanpakken. Effectief en tegen lage kosten.',
      btn:'Wil je weten hoe?'
    }
  ]
  let pageContent = content[0]
  if (lang2 == 'nl')
    pageContent = content[1]
  return (
    <div>
      <Layout>
        <main>
          <div className="flex items-center my-2 flex-wrap">
            <div className="w-full p-6 pt-2 lg:w-2/5">
              <h1 className="text-3xl font-bold text-leaf-800 mb-3">{pageContent.title}</h1>
              <p className="text-xl text-leaf-800 font-extrabold mb-3">“{pageContent.subtitle}”</p>
              <p className="text-leaf-800 font-bold my-3">{pageContent.question}</p>
              <p className="text-leaf-800 my-2">{pageContent.q_description}</p>
              <p className="text-leaf-800 my-1 ml-4">•   <span className="ml-3">{pageContent.q_1}</span></p>
              <p className="text-leaf-800 my-1 ml-4">•   <span className="ml-3">{pageContent.q_2}</span></p>
              <p className="text-leaf-800 my-2">{pageContent.sub_description}</p>
              <Link href="/our-methods">
                <div className="text-right">
                  <button className="bg-leaf-800 px-4 py-2 text-white shadow-2xl rounded-2xl font-semibold m-4 hover:bg-leaf-700 transition duration-150 delay-75">{pageContent.btn}</button>
                </div>
              </Link>
            </div>
            <div className="w-3/5 hidden lg:block">
              <Image
                src="/leaf-bg.png"
                alt="Environmental place Freepik"
                width={1800}
                height={1200}
              />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}
