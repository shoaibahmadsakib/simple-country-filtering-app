import axios from 'axios'
import { useParams } from "react-router-dom"


export const AllCountries = async () => {
    try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
        return data
    } catch (error) {
        console.log(error.message);
    }

}


   
