import NavBar from "./Navbar";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Releaf The Planet</title>
        <meta name="description" content="Calculation of Carbon Footprint" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Calculation of Carbon Footprint"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@releaftheworld" />
        <meta name="twitter:creator" content="twitter_creator" />
        <meta name="twitter:title" content="Releaf The World" />
        <meta
          name="twitter:description"
          content="Calculate your Carbon Footprint"
        />
        <meta name="twitter:image" content="/twitter-img-2.png" />
      </Head>
      <div className="bg-leaf-800 min-h-screen p-6">
        <div className="font-Opensans bg-leaf-100 rounded-lg">
          <NavBar/>
          <div>{children}</div>
        </div>
      </div>

    </div>
  );
}

export default Layout;