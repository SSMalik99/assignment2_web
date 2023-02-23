import axios from "axios";
import React, { ReactPropTypes, useEffect, useRef, useState } from "react";
import useCelcius from "../Hooks/UseCelcius";

interface DataFetchType {
    fetchType: string; //TEMP or CITY
    lat: String;
    long: String;
    cityName: String;
}

interface FetchedData {
    "coord": {
        "lon": Number,
        "lat": Number
    };
    "weather": [
        {
            "id": Number,
            "main": String,
            "description": String;
            "icon": String
        }
    ];
    "base": String;
    "main": {
        "temp": Number,
        "feels_like": Number,
        "temp_min": Number,
        "temp_max": Number,
        "pressure": Number,
        "humidity": Number,
        "sea_level": Number,
        "grnd_level": Number,
    };
    "visibility": Number;
    "wind": {
        "speed": Number,
        "deg": Number,
        "gust": Number,
    };
    "rain": {
        "1h": Number
    };
    "clouds": {
        "all": Number
    };
    "dt": Number;
    "sys": {
        "type": Number,
        "id": Number,
        "country": String,
        "sunrise": Number,
        "sunset": Number,
    };
    "timezone": Number;
    "id": Number;
    "name": String;
    "cod": Number;
}

const WeatherReport = ({ fetchType, lat, long, cityName }: DataFetchType) => {
    const count = useRef(0);

    let [data, setData] = useState({})

    useEffect(() => {
        count.current = count.current + 1;

    }, [data])
    let [celciusTemp] = useCelcius(32)

    let ApiLatLongURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API}`
    let GeoLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_WEATHER_API}`


    const changeToCel = (fTemp: Number) => {
        // return (+fTemp - 32) * 1.8
        return +fTemp
    }
    if (fetchType == "TEMP" && lat == "N/A" && long == "N/A") {

        return <></>;

    }

    if (fetchType == "TEMP" && lat != "N/A" && long != "N/A") {

        if (count.current - 1 <= 1) {
            axios.get(ApiLatLongURL).then(data => {
                setData(data.data)
                celciusTemp = 54
            })
        }

        let newData = data as FetchedData

        if (newData.weather) {
            // TODO : Design the response
            return <>
                <div className=" content-center text-center">
                    <div className="text-lg">Weather: <span>{newData.weather[0].main}</span></div>
                    <div className="text-lg">Weather Description: <span>{newData.weather[0].description}</span></div>
                    <div className="text-lg">Temperature: <span>{changeToCel(+newData.main.temp)}</span></div>
                    <div className="text-lg">Feels Like: <span>{changeToCel(+newData.main.feels_like)}</span></div>
                    <div className="text-lg">Humidity: <span>{changeToCel(+newData.main.humidity)}</span></div>
                    <div className="text-lg">visibility: <span>{changeToCel(+newData.visibility)}</span></div>
                    {/* <div className="text-lg">Location Name: <span>{changeToCel(+newData.name.toString())}</span></div> */}

                    

                </div>
            </>
        }

        return <></>


    }

    if (fetchType == "CITY" && cityName != "N/A") {

        // axios.get(GeoLocationURL).then(data => {
        //     setData(data.data)

        // })

        
        return <>This is city data {JSON.stringify(data)}</>
    }

    return <></>
};

export default WeatherReport;
