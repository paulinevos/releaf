import NavBar from "./Navbar";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Releaf The Planet</title>
        <meta name="description" content="Calculation of Carbon Footprint" />
        <link rel="icon" href="/favicon.ico" />
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