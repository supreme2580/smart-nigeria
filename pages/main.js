import { location } from "atoms/location"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"

export default function Main() {
    const place = useRecoilValue(location)
    useEffect(() => {
        console.log(place)
        if (place !== "NGA" && typeof window != "undefined") {
            window.location.href = "/"
        }
    }, [])
    return(
        <div></div>
    )
}