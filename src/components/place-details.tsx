import Link from "next/link"
import Place from "@/interfaces/place"

const PlaceDetails = ({ key, place } : { 
    key: string, 
    place: Place 
}) => {

    if (place && place.id === "loading") {
        return (
            <div className="text-[#2a2b2c]">
                <p>{place.displayName.text}</p>
            </div>
        )
    }

    if (place && place.id === "error") {
        return (
            <div className="text-[#2a2b2c]">
                <p>{place.displayName.text}</p>
            </div>
        )
    }
 
    if (place && place.websiteUri && place.rating && place.formattedAddress) {
        return (
            <div className="bg-[#1d1d1d] m-4 p-2.5 text-center text-[#c2c2bd] rounded-lg">
                <Link className="italic font-bold text-[#ddd3a1] m-0.5 hover:underline sm:text-lg" href={place.websiteUri} target="_blank">{place.displayName.text}</Link>
                <p className='m-0.5'>{place.rating}⭐️</p>
                <p className='m-0.5'>📍{place.formattedAddress}</p>
            </div> 
        )
    } else {
        console.log("Null place object.")
        return <></>
    }
    
}

export default PlaceDetails