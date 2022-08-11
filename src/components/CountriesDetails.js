import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { EveryCountries } from '../api/allApi'

const CountriesDetails = () => {
   
    const {id} = useParams()
    const EveryCountries = async () => {
   
        try {
            const { data } = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
            return data
        } catch (error) {
            console.log(error.message);
        }
    
    }
    const { isLoading, error, data } = useQuery(['countries'],EveryCountries)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
   
   console.log(data);

    return (
        <div>
            {/* <h2>{id}</h2> */}
           {
            data.map((data , index)=>{
                const {name , capital,area,maps ,flags,language ,population,timezones} = data
                return(
                    <div>
                        <h2>{name.common}</h2>
                        <h2>{name.official}</h2>
                        <img className='h-28' src={flags.png} alt="img" />
                        <p>{capital}</p>
                        <p>{language}</p>
                       <p>{population}</p>
                        <p>{area}</p>
                        <p>{timezones}</p>
                    </div>
                )
            })
           }
        </div>
    )
}

export default CountriesDetails