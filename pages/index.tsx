import Head from "next/head";
<<<<<<< HEAD
import { Sidebar } from "../components";


 
=======
import Navbar from "../components/Navbar";
import { DahboardRight, DashboardLeft } from "../components/Dashboard";
>>>>>>> 5ea7cef782c84199188b3c465105202980bfd3e8

export default function Home() {
  // const { loggedIn } = useCurrentUser()

  return (
    <div>
      
      <Head>
        <title>FCL Next Scaffold</title>
        <meta
          name="description"
          content="Lancent Language learning in the web3 space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <main className="text-[#000]">hello worl</main>
     
=======
      <main className="text-[#000]">
        <Navbar />
        <div className="flex items-start w-full h-screen gap-5">
          <div className="w-[60%] h-screen overflow-y-scroll pt-[41px] pb-[50px] px-[40px]">
            <DahboardRight />
          </div>
          <div className="w-[40%] h-screen overflow-y-scroll pt-[41px] pb-[50px] px-[40px]">
            <DashboardLeft />
          </div>
        </div>
      </main>
>>>>>>> 5ea7cef782c84199188b3c465105202980bfd3e8
    </div>
  );
}
