import Head from "next/head";
import Image from "next/image";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ArrowRightIcon } from "@heroicons/react/solid"

export default function Home() {

  const { openConnectModal } = useConnectModal();
  
  return(
    <div>
      <Head>
        <title>Smart Nigeria</title>
        <link rel="icon" href="/nigeria.png" />
      </Head>
      <main className="w-full h-screen bg-white flex flex-col justify-center items-center">
        <div className="space-y-5">
          <div className="flex items-center justify-center">
            <div>
              <Image src={"/nigeria.png"} width={75} height={75} alt="" />
            </div>
            <h1 className="text-3xl sm:text-6xl font-semibold">SMART NIGERIA</h1>
          </div>
          <div className="w-full text-center">
            <p className="font-semibold italic">
              {'"'}Incentivizing change in africa{'"'}
            </p>
          </div>
          <div className="w-full sm:space-x-5 flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 justify-center">
            <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold hover:bg-black hover:text-white
              flex justify-center items-center space-x-5 group" onClick={openConnectModal}>
              <p className="w-5 h-5">Enter</p>
              <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-white mt-1.5" />
            </button>
            <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold hover:bg-black hover:text-white">Support us</button>
          </div>
        </div>
      </main>
    </div>
  )
}