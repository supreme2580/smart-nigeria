import Head from "next/head";
import Image from "next/image";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useSigner } from "wagmi";
import { useRouter } from "next/router"
import lookup from "coordinate_to_country"
import { useState } from "react";
import { location } from "../atoms/location"
import { useRecoilState } from "recoil";

export default function Home() {

  const { openConnectModal } = useConnectModal()
  const { data: signer } = useSigner()
  const router = useRouter()
  const [error, setError] = useState(false)
  const [iso, setIso] = useRecoilState(location)

  function showLocation(position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    const result = lookup(longitude, latitude)
    console.log(result)
    if (result != "NGA") {
      setError(true)
      setIso(result[0])
    }
    else {
      setIso(result[0])
      router.push("/main")
    }
  }

  function errorHandler(err) {
      if(err.code == 1) {
        alert("Error: Access is denied!");
      } else if( err.code == 2) {
        alert("Error: Position is unavailable!");
      }
  }

  async function getLocation() {

      if(navigator.geolocation) {
        
        // timeout at 60000 milliseconds (60 seconds)
        var options = {timeout:60000};
        await navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
      } else {
        alert("Sorry, browser does not support geolocation!");
      }
  }
  
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
              {'"'}Incentivizing change in Nigeria{'"'}
            </p>
          </div>
          {
            error && <div>
            <p className="text-red-700 font-semibold text-center">Unsupported region: {iso}</p>
          </div>
          }
          <div className="w-full sm:space-x-5 flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 justify-center">
            {
              signer ?
              <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold hover:bg-black hover:text-white
                flex items-center justify-center space-x-1 group" onClick={async() => await getLocation()}>
                <p>Enter</p>
                <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-white" />
              </button> :
              <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold hover:bg-black hover:text-white
                flex items-center justify-center space-x-5 group" onClick={openConnectModal}>Connect Wallet</button>
            }
            <button className="py-2.5 px-10 border-2 border-black rounded-[50px] font-semibold hover:bg-black hover:text-white">Support us</button>
          </div>
        </div>
      </main>
    </div>
  )
}