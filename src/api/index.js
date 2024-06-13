const baseURL = 'https://api.weatherapi.com/v1/current.json?key=eaebedefc49047539ac192819240806';

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataLiveLocation= async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}