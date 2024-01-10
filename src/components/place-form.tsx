import { ChangeEvent, FormEvent, useState } from "react"

import Header from './header';

const PlaceForm = ({ 
    onSubmit 
}: { 
    onSubmit: (city: string, type: string, mood: string) => any 
}) => {

    const [city, setCity] = useState("Toronto") // city
    const [type, setType] = useState("Italian") // type of restaurant
    const [mood, setMood] = useState("Casual") // restaurant mood (casual, fancy, etc.)
    
    // citites
    const cities = [
        "Toronto",
        "Vancouver",
        "Montreal",
        "Calgary",
        "Winnipeg",
        "Ottawa",
        "Edmonton"
    ]

    // types of cuisine
    const types = [
        "Italian",
        "Greek",
        "Mexican",
        "Japanese",
        "Indian",
        "Steakhouse",
        "Pizza"
    ]
    // restaurant moods
    const moods = [
        "Casual",
        "Fancy"
    ]

    // set cuisine type on selection
    const handleCitySelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setCity(event.target.value)
    }

    // set cuisine type on selection
    const handleTypeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value)
    }

    // set mood on selection
    const handleMoodSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setMood(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(city, type, mood)
    }

    return (
        <div className="bg-[#171716] p-4 sm:w-[100%]">
            <Header />
            <form className="pr-2.5 mt-[28%] text-center sm:mt-[60px]" onSubmit={handleSubmit}>
                <h2 className="mb-10 font-bold text-2xl text-[#ddd3a1] sm:mb-10 sm:text-[28px]">What are you looking for?</h2>
                <div className="mb-2.5 sm:mb-4">
                    <label className="mr-1 text-lg italic font-bold text-[#ddd3a1] sm:text-[20px]">City</label>
                    <select value={city} className="inline text-black p-2.5 text-[15px] ml-2 rounded cursor-pointer sm:text-[18px]" onChange={handleCitySelect}>
                        {cities.map(c => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2.5 sm:mb-4">
                    <label className="mr-1 text-lg italic font-bold text-[#ddd3a1] sm:text-[20px]">Cuisine</label>
                    <select value={type} className="inline text-black p-2.5 text-[15px] ml-2 rounded cursor-pointer sm:text-[18px]" onChange={handleTypeSelect}>
                        {types.map(t => (
                            <option key={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2.5 sm:mb-4">
                    <label className="mr-1 text-lg italic font-bold text-[#ddd3a1] sm:text-[20px]">Mood</label>
                    <select value={mood} className="inline text-black p-2.5 text-[15px] ml-2 rounded cursor-pointer sm:text-[18px]" onChange={handleMoodSelect}>
                        {moods.map(m => (
                            <option key={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <button className="mt-10 w-[50%] py-1 px-5 text-[15px] italic font-bold text-center cursor-pointer 
                rounded text-black bg-[#ddd3a1] hover:bg-[#bdb176] sm:mb-[45px] sm:w-[40%] sm:h-fit sm:text-lg">
                    Generate Options
                </button>
            </form>
        </div>
    )
}

export default PlaceForm