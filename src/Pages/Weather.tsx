import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import WeatherReport from '../Components/WeatherReport';

const Weather = () => {
    const [latLong, setLatLong] = useState({lat:"N/A", long : "N/A"})
    
    const citySearchElement = useRef<HTMLInputElement>(null);

    const [cityName, setCityName] = useState<String>("N/A")
    const [dataFetchType, setDataFetchType] = useState("TEMP") // TEMP or CITY

    useEffect(() => {}, [latLong, /*cityName, dataFetchType */ ]) // no need to add city for the time being

    


    const GetCurrentLocationWeather =  () => {
        
        navigator.geolocation.getCurrentPosition(postition => {
            setLatLong({lat: postition.coords.latitude.toString(), long: postition.coords.longitude.toString()})
            
        })
        
    }
    

    return <section className='bg-white p-3 rounded-md h-screen'>
        <div className="flex justify-center">
            <div className="mb-6 mt-4">
                <button onClick={GetCurrentLocationWeather}
                className='p-3 bg-purple-600 text-white rounded-lg'>Get Current Location Weather Report</button>
            </div>
        
        </div>
        {/* <div className="flex justify-center">
            <div className='inline-flex items-center'>
                <hr className="my-1 w-24 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className='mx-3'>OR</span>
                <hr className="my-1 w-24 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </div> */}
        
        {/* <div className="mb-6">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search City</label>
            <input 
                type="text" 
                id="city_search"
                ref={citySearchElement}
                
                placeholder='Enter city...' 
                className="block w-full p-4 text-gray-900 border border-gray-300 
                rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <button className=" bg-purple-500 text-white p-3 rounded-lg mt-3" onClick={() => {
                
                alert("Sorry!, this is not working, you can check your current location temperature.")
                // will change well its feasible to do
                // if (citySearchElement.current?.value != undefined) {
                //     setDataFetchType("CITY")
                //     setCityName(citySearchElement.current?.value)
                // }
                
            }} >Search</button>
        </div> */}

        <WeatherReport fetchType={dataFetchType} lat={latLong.lat} long={latLong.long} cityName={cityName} />
    </section>
}


export default Weather