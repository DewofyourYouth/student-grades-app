import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'

import '../.scss/GradesTable.scss'
import Spinner from './Spinner'
import Pagination from './Pagination'
import GradeRows from './GradeRows'

const gradeAverage = (arr, toDec) => (arr.map(obj => obj.grade)
    .reduce((a, b) => a + b, 0) / arr.length)
    .toFixed(toDec)

const GradesTable = () => {


    const [grades, setGrades] = useState([]);
    const [gradesFilter, setFilter] = useState('updated_at')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [gradesPerPage, setGradesPerPage] = useState(5)
    const [reversed, setReverse] = useState(false)


    useEffect(() => {
        const fetchGrades = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/student_grades')
            setGrades(res.data.grades)
            setLoading(false)
        }
        fetchGrades();
    }, [])

  
    // Get current grades
    const indexOfLastGrade = currentPage * gradesPerPage
    const indexOfFirstGrade = indexOfLastGrade - gradesPerPage
    const currentGrades = grades.slice(indexOfFirstGrade, indexOfLastGrade)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
   

    const renderContent = () => {
        if (loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <div className="row">
                    <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th><button className="btn btn-outline-primary" onClick={() => {
                                    setGrades(grades.sort((a, b) => a.first_name.localeCompare(b.first_name)))
                                    setFilter('first_name')
                                    setReverse(false)
                                    }}>First Name</button></th>
                                <th>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        setGrades(grades.sort((a,b) => a.last_name.localeCompare(b.last_name)))
                                        setFilter('last_name')
                                    }}>
                                      Last  
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        setGrades(grades.sort((a, b) => b.grade - a.grade))
                                        setFilter('grade')
                                        setReverse(false)
                                    }}>
                                        Grade
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-outline-primary" onClick={() => grades.sort(function(a, b){ return a.updated_at - b.updated_at}) }>Updated At</button>
                                    
                                </th>
                                <th>
                                <button className="ml-5 btn btn-outline-primary" onClick={() => {
                                        grades.reverse()
                                        setReverse(!reversed)
                                        }}>{(!reversed) ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                                </th>
                            </tr>
                        </thead>
                        <GradeRows grades={currentGrades}/>
                    </table>
                    <Pagination gradesPerPage={gradesPerPage} totalGrades={grades.length} paginate={paginate}
                    />
                    </div>
                </div>

            )
        }
    }

    const showLessGrades = () => {
        if (gradesPerPage >= 2){
            setGradesPerPage(gradesPerPage -1)
        } else {
            setGradesPerPage(1)
        }
    }

    return (
        <div>
            <h1 className="display-3 text-center mt-4 mb-5">Grades</h1>
            <div className="row">
                        <div className="col-md-4">
                            <p><strong>Grade Count:</strong> {(!loading) ? grades.length : "loading"}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Average Grade:</strong> {(!loading) ? gradeAverage(grades, 2) : "loading"}</p>
                        </div>
                        <div className="col-md-4"><p><strong>Grades Per Page:</strong> {gradesPerPage} 
                                <button 
                                    className="btn btn-success btn-sm ml-4"
                                    onClick={() => setGradesPerPage(gradesPerPage + 1)}
                                    >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <button 
                                    className="btn btn-success btn-sm"
                                    onClick={showLessGrades}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </p></div>
                    </div>
            {renderContent()}
        </div>
    )
}

export default GradesTable