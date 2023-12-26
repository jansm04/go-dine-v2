import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"

import Navbar from './navbar';

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
        <div className="res-form">
            <Navbar />
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="search-header">What are you craving?</h2>
                <div className="city-type">
                    <label>City</label>
                    <select value={city} className="form-select" onChange={handleCitySelect}>
                        {cities.map(c => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div className="cuisine-type">
                    <label>Cuisine</label>
                    <select value={type} className="form-select" onChange={handleTypeSelect}>
                        {types.map(t => (
                            <option key={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="mood-type">
                    <label>Mood</label>
                    <select value={mood} className="form-select" onChange={handleMoodSelect}>
                        {moods.map(m => (
                            <option key={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <button>Find</button>
            </form>
        </div>
    )
}

export default PlaceForm