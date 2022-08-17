import './weatherapi.scss'
import { useState } from 'react';
import axios from 'axios' //? For easy API fetching

export default function WeatherAPI() {

    const [weatherData, setWeatherData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=53f33aa9419033dcd06a4f04332dbc61`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setWeatherData(response.data)
                console.log(response.data);
            })
        }
    }
    
  return (
    <div className='weather'>
        <div className="search">
            <input value={location} onKeyPress={searchLocation} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' type="text" />
        </div>

        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{weatherData.name}</p>
                </div>
                <div>
                    {weatherData.main ? <p className='bold temp'>{Math.floor((weatherData.main.temp-273.15))}°C</p> : null}
                </div>
                <div className="desc">
                    {weatherData.main ? <p>{weatherData.weather[0].main}</p> : null}
                </div>
            </div>
        </div>
    </div>
  )
}
