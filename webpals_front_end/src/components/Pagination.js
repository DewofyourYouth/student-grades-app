import React from 'react'

const Pagination = ({gradesPerPage, totalGrades, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalGrades/gradesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <button onClick={(e) => paginate(number)} className="page-link">{number}</button>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination

