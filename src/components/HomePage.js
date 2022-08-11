import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { AllCountries } from '../api/allApi'
import CountriesPage from './CountriesPage'
import Pagination from './Pagination'
// import { AllCountries } from '../api/AllApi'


const HomePage = () => {




    const [serchTerm, setSerchTerm] = useState('')
    const [nameSort, setNameSort] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);


    console.log(nameSort);

    const { isLoading, error, data } = useQuery(['repoData'], AllCountries)



    if (isLoading) return 'Loading...'


    if (error) return 'An error has occurred: ' + error.message


    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;


    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h2 className='text-center text-3xl'>All Countries </h2>

            <select id="cars" onChange={(e) => setNameSort(e.target.value)}>

                <option value="sort by name" >sort by name</option>
                <option value="sort by capital name" >sort by capital name</option>
                <option value="opel" >Opel</option>
                <option value="select" selected >select</option>
                <option value="audi" >Audi</option>
            </select>

            <form action="" className='border-black'>
                <input className='border-2' placeholder='search country' type="text" name="" id="" onChange={(e) => setSerchTerm(e.target.value)} />
            </form>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 bg-slate-300 mx-6 mt-4 drop-shadow-lg'>

                {

                    currentPosts.filter((data) => {
                        if (serchTerm === "") {
                            return data
                        }
                        else if (data.name.common.toLowerCase().includes(serchTerm.toLowerCase())) {
                            return data
                        }
                        else if (data.name.official.toLowerCase().includes(serchTerm.toLowerCase())) {
                            return data
                        }


                    }


                    ).


                        sort((a, b) => {
                            if (nameSort == "sort by name") {
                                const nameA = a.name.common.toUpperCase();
                                const nameB = b.name.common.toUpperCase();
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }

                                // names must be equal
                                return 0;
                            }
                            if (nameSort === "sort by capital name") {
                                const nameA = a?.capital[0]?.toUpperCase();
                                const nameB = b?.capital[0]?.toUpperCase();
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }

                                // names must be equal
                                return 0;
                            }
                            else return 0

                        })

                        .map((data, index) => (
                            <CountriesPage data={data} key={index} />
                        ))


                }

            </div>
            <div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default HomePage