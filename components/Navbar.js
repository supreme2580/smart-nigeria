import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Navbar() {
    return(
        <div className="w-full py-2.5 px-5 shadow-black/10 shadow-sm space-y-2">
            <Head>
                <title>Smart Nigeria</title>
            </Head>
            <div className="flex items-center">
                <div>
                    <Image src={"/nigeria.png"} width={50} height={50} alt="" />
                </div>
                <h1 className="text-3xl font-semibold">SMART NIGERIA</h1>
            </div>
            <div className="w-full flex space-x-5">
                <div>
                    <Link href={"/"}>
                        <div className="p-1.5 hover:bg-black/10 rounded-lg font-semibold text-lg">
                            Mathematics
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <div className="p-1.5 hover:bg-black/10 rounded-lg font-semibold text-lg">
                            Mathematics
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <div className="p-1.5 hover:bg-black/10 rounded-lg font-semibold text-lg">
                            Mathematics
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <div className="p-1.5 hover:bg-black/10 rounded-lg font-semibold text-lg">
                            Mathematics
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <div className="p-1.5 hover:bg-black/10 rounded-lg font-semibold text-lg">
                            Mathematics
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}