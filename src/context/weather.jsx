import { useContext } from "react";
import { createContext , useState } from "react";
import { getWeatherData  , getWeatherDataLiveLocation} from "../api";

// Creating Context:
const WeatherContext = createContext(null);

//Now Creating a custom useweather hook and pasing our weather context to it to read context:
export const useWeather = () => {
    return useContext(WeatherContext);
}

// Creating Context provider: hello APIQ method context
export const WeatherProvider = (props) => {

    //Creating the state of the context:
    const [data, setData] = useState(null);
    const [SearchCity, setsearchCity] = useState(null);

    //Making a function to fethc data:
    const fetchData = async () => {
        const response = await getWeatherData(SearchCity);
        setData(response);
    };

    const fetchCurrentUserData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataLiveLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data));
        });
    };

    return (
        <WeatherContext.Provider value={{data, SearchCity , setData , setsearchCity , fetchData,fetchCurrentUserData}}>
            {props.children}
        </WeatherContext.Provider>
        
    );
}