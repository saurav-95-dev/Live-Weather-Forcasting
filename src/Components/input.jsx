import React from "react";
//Using the custom hook to see SearchCity data:
import { useWeather } from '../context/weather';

const Input = () => {

    const weather = useWeather();
    console.log('weather', weather);
    return (
        <input
            className="input-field"
            placeholder="Search here"
            value={weather.SearchCity}
            onChange={(e)=>weather.setsearchCity(e.target.value)}
        />
        
    )
};

export default Input;