import './App.css';
import Card from './Components/Card';
import Button from './Components/Button';
import Input from './Components/input';
import { useWeather } from './context/weather';
import { useEffect } from 'react';


function App() {
  const weather = useWeather();
  console.log(weather);

   useEffect(() => {
    //Get current location:
     weather.fetchCurrentUserData();

  },[])
  return (
    <div className="app">
      <h1 className='app-heading'>Live Weather Forcast</h1>
      <Input /> 
      <Button onClick={ weather.fetchData} value="Search"/> 
      <Card />
      
      {/* Adding functionality to refresh button:*/}
      <Button onClick={ weather.fetchCurrentUserData} value="Refresh"/> 
    </div>
  );
}

export default App;

     