
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import Weather from './Components/Weather'

function App() {
  const [data , setData] = useState({})
  const[location , setLocation] = useState("")

  const API_KEY ="OpenWeatherKey "
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    const searchLocation = (evt)=>{
      if (evt.key === "Enter"){
        axios.get(url)
        .then((response)=>{
          setData(response.data)
          
        })
        setLocation("")
      }
    }
  
   return (

    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input type="text"
        className='py-3 px-6 w-[700px] text-lg rounded-3xl
        border border-gray-200 text-gray-600
        placeholder:text-gray-400 focus:outline-none
        bg-white-600/100 shadow-md'
        placeholder='Enter location'
        value={location}
        onChange={(evt)=> setLocation(evt.target.value)}
        onKeyDownCapture={searchLocation}
        />

      </div>
      <Weather weatherData= {data}/>
      
    </div>
  )
}

export default App
