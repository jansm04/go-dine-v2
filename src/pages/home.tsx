"use client";
import { useState } from "react"

// components
import PlaceForm from "@/components/place-form"
import PlaceDetails from "@/components/place-details"

// model
import Place from "@/model/place"

// assets
import lp from "@/assets/loading.json"
import ep from "@/assets/error.json"

const Home = () => {

    const [places, setPlaces] = useState<Place[]>([])
    
    const handleQuerySubmit = (city: string, type: string, mood: string) => {
        setPlaces([lp]) // loading place object

        // fetch array of restaurants from OpenAI API
        const fetchRestaurants = async () => {
            const response = await fetch(`http://localhost:3000/api/call?city=${city}&type=${type}&mood=${mood}`)
            if (response.ok) {
                const json = await response.json()
                setPlaces(json)
                console.log(json)
            } else {
                setPlaces([ep]) // error place object
            }
        }
        fetchRestaurants()
    }

    return (
        <div className="container">
            <PlaceForm onSubmit={handleQuerySubmit} />
            <div className="data">
                <h2 className="data-header"> Your Top Choices: </h2>
                <div className="data-content">
                    {places && places.map((place) => (
                        <PlaceDetails place={place}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home