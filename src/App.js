import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import {Route, Routes} from "react-router-dom"
import CountriesDetails from './components/CountriesDetails'
const App = () => {
    return (
        <div className='text-center'>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/country/:id' element={<CountriesDetails/>}/>
            </Routes>
          
        </div>
    )
}

export default App