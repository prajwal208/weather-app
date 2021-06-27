import React, { useState, useEffect } from 'react'
import './style.css'

function Tempapp() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Hubli")

    useEffect(() => {
        const fetchapi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f56ae34af0ff95cb6b1bb96cfa859f1c`
           const response = await fetch(url)
            const responseJson = await response.json();
            setCity(responseJson.main)
            console.log(responseJson.main)
        }

        fetchapi();
    },[search])

    return (
        <>



            <div className="conatiner">
                <div className="border">

                    <div className="input">
                        <input type="text" name="name" placeholder="Search..." onChange={(e) => { setSearch(e.target.value) }} 
                        value={search}/>
                    </div>

                    {
                        !city ? (
                            <p>Data Not Found</p>
                        ) : (

                                <>
                                    <div className="font">
                                        <i className="fa fa-street-view"></i>
                                        <span>{search}</span>
                                    </div>

                                    <div className="celsius">
                                        <h3>{city.temp}°F</h3>
                                        <p>Min:{city.temp}°F | Max:{city.temp}°F</p>
                                    </div>

                                </>

                            )
                        }

                       

                </div>
            </div>


        </>
    )
}

export default Tempapp
