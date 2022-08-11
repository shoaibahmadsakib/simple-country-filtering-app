import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='pagination align-middle justify-center items-center p-5'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <button onClick={() => paginate(number)} href="#" className='page-link'>
            {number}
          </button>
        </li>
      ))}
    </div>
  )
}

export default Pagination