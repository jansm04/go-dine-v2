"use client";
import { useState } from "react"

// components
import PlaceForm from "@/components/place-form"
import PlaceDetails from "@/components/place-details"
import Footer from "@/components/footer";

// interfaces
import Place from "@/interfaces/place"

// assets
import lp from "@/assets/loading.json"
import ep from "@/assets/error.json"

const BACKEND_SERVER = process.env.NEXT_PUBLIC_BACKEND_SERVER

const Home = () => {

    const [places, setPlaces] = useState<Place[]>([])
    
    const handleQuerySubmit = (city: string, type: string, mood: string) => {
        setPlaces([lp]) // loading place object

        // fetch array of restaurants from OpenAI API
        const fetchRestaurants = async () => {
            const response = await fetch(`${BACKEND_SERVER}/api/call?city=${city}&type=${type}&mood=${mood}`)
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
        <div>
            <div className="grid grid-cols-3 min-h-screen sm:block">
                <PlaceForm onSubmit={handleQuerySubmit} />
                <div className="p-20 bg-slate-200 col-span-2 sm:py-20 sm:px-8 sm:h-[100%] sm:max-h-fit sm:min-h-[50%]">
                    <h2 className="text-[#3a3c3d] mt-10 mb-[60px] font-bold text-xl sm:mt-0 sm:text-3xl"> Your Top Choices: </h2>
                    <div className="mb-[12%] sm:mb-12">
                        {places && places.map((place) => (
                            <PlaceDetails key={place.id} place={place}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home