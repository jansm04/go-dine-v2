import Link from "next/link"
import Place from "@/model/place"

const PlaceDetails = ({ place } : { place: Place }) => {

    if (place && place.id === "loading") {
        return (
            <div className="place-details-loading">
                <p>{place.displayName.text}</p>
            </div>
        )
    }

    if (place && place.id === "error") {
        return (
            <div className="place-details-error">
                <p>{place.displayName.text}</p>
            </div>
        )
    }
 
    if (place && place.websiteUri && place.rating && place.formattedAddress) {
        return (
            <div className="place-details">
                <Link className="place-link" href={place.websiteUri} target="_blank">{place.displayName.text}</Link>
                <p className='place-rating'>{place.rating}⭐️</p>
                <p className='place-location'>📍{place.formattedAddress}</p>
            </div> 
        )
    } else {
        console.log("Null place object.")
        return <></>
    }
    
}

export default PlaceDetails