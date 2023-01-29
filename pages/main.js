import { location } from "../atoms/location"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import Navbar from "../components/Navbar"

export default function Main() {
    const place = useRecoilValue(location)
    useEffect(() => {
        if (place !== "NGA" && typeof window != "undefined") {
            window.location.href = "/"
        }
    }, [])
    return(
        <div className="w-full">
            <div className="w-full">
                <Navbar />
            </div>
        </div>
    )
}