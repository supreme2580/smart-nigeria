import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
            <h1 className="text-6xl font-semibold">SMART NIGERIA</h1>
          </div>
          <div className="w-full text-center">
            <p className="font-semibold italic">
              "Incentivizing change in africa"
            </p>
          </div>
          <div className="w-full space-x-5 flex justify-center">
            <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold">Login</button>
            <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold">Sign up</button>
            <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold">Support us</button>
          </div>
        </div>
      </main>
    </div>
  )
}