import Link from "next/link"
import Place from "@/interfaces/place"
import { ImNewTab } from "react-icons/im";

const PlaceDetails = ({ key, place } : { 
    key: string, 
    place: Place 
}) => {
    return (
        (place && place.id === "error") ? 
            <p className="text-gray-800">{place.displayName.text}</p> :
            (place && place.websiteUri && place.rating && place.formattedAddress) ?
                <div className="bg-[#1d1d1d] m-4 p-2.5 text-center text-[#c2c2bd] rounded-lg">
                    <Link className="italic font-bold text-[#ddd3a1] m-0.5 hover:underline sm:text-lg inline-flex" href={place.websiteUri} target="_blank">
                        {place.displayName.text}&nbsp;<ImNewTab className="mt-[4px]"/>
                    </Link>
                    <p className='m-0.5'>{place.rating}⭐️</p>
                    <p className='m-0.5'>📍{place.formattedAddress}</p>
                </div> :
                <></>
    )
}

export default PlaceDetails