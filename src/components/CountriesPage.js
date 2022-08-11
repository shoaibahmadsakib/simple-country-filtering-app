import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
const CountriesPage = ({ data }) => {

  

    const { name, area, capital, flags } = data
    return (
        <div className='bg-slate-100 p-8 grid grid-cols-3 drop-shadow-lg h-48'>
            <div className=''>
                <img className='h-24' src={flags.png} alt="img" />

            </div>
            <div className='col-span-2 text-left pl-4'>
                <h1 className='text-xl font-bold'>{name.official.slice(0, 18)}..</h1>
                <h2>{name.common}</h2>
                <h2>Capital: {capital}</h2>
                <p>Area: {area} squire km</p>
                <button className='bg-blue-400 text-white p-2 rounded-lg'><Link to={`/country/${name.common}`}> Click for details</Link></button>
            </div>

        </div>
    )
}

export default CountriesPage