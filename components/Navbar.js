import React, { useState, useContext } from "react"
import Link from "next/link";
import Menu from "./Menu";
import Image from 'next/image';
import {LangContext} from "../contexts/LangContext";

const menuElements = [
  {name: "Home", targetUrl: "/" },
  {name: "Our Methods", targetUrl: "/our-methods" },
  {name: "About Us", targetUrl: "/about-us" }
];

function NavBar() {

  const [mobile, setMobile] = useState(true);
  const [lang, setLang] = useContext(LangContext);

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <nav>
      <div className="flex items-center justify-between py-2 px-4">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/leaf-logo.png"
                   alt="Picture of the author"
                   width={80}
                   height={80}/>
            <p className="text-2xl font-bold text-leaf-800 text-shadow">Releaf The Planet</p>
          </div>
        </Link>
        <div className="flex items-center font-semibold text-leaf-800 text-shadow">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="mr-4 font-semibold text-leaf-800 text-shadow"
            onClick={() => (setLang(lang === "en" ? "nl" : "en"))}
          >{lang}</button>
          <div className="text-md grid justify-start items-center grid-flow-col gap-6">
            {menuElements.map((e, index) => (
              <Link href={e.targetUrl} key={index} target="_blank">
                <p
                  className={`hidden md:block hover:text-green-800 cursor-pointer text-sm lg:text-base`}
                >
                  {e.name}
                </p>
              </Link>
            ))}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                type="button"
                className="w-10 h-10 flex justify-center items-center rounded"
                onClick={() => setMobile(!mobile)}
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right font-semibold">
        <div className={mobile ? "hidden" : "block"}>
          {menuElements.map((e, index) => (
            <Link href={e.targetUrl} key={index}>
              <p
                className={`hover:text-leaf-700 cursor-pointer p-3`}
              >
                {e.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
    </LangContext.Provider>
  );
}

export default NavBar;