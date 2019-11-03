import React, { useState, useEffect } from 'react'
import AddButton from './ui-elements/AddButton'
import axios from 'axios'
import StudentsTable from './StudentsTable'
import Pagination from './ui-elements/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const StudentList = () => {


    useEffect(() => {
        fetchStudents()
    }, [])

    const [students, setStudents] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [studentsPerPage, setStudentsPerPage] = useState(5)
    const [filter, setFilter] = useState('id')
    const [reversed, setReversed] = useState(false)

    const fetchStudents = () => {
        axios.get(`http://127.0.0.1:8000/api/students`)
            .then((res) => {
                setStudents(res.data.students)
            })
    }

    const indexOfLastStudent = currentPage * studentsPerPage
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const showLessStudents = () => {
        if (studentsPerPage >= 2) {
            setStudentsPerPage(studentsPerPage - 1)
        } else {
            setStudentsPerPage(1)
        }
    }


    return (
        <div id="students">
            <h1 className="display-3 text-center m-3">Students</h1>
            <div className="row">
                <div className="col">
                    <AddButton type='student' />
                </div>
                <div className="col mb-4 mt-4">
                    <strong>Total Students:</strong> {students.length}
                </div>
                <div className="col mb-4 mt-4">
                    <strong>Students Per Page:</strong>
                    <button
                        className="btn btn-success btn-sm ml-2 mr-2"
                        onClick={showLessStudents}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    {studentsPerPage}
                    <button
                        className="btn btn-success btn-sm ml-2 mr-2"
                        onClick={() => setStudentsPerPage(studentsPerPage + 1)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        setStudents(students.sort((a, b) => a.id - b.id))
                                        setFilter('id')
                                        setReversed(false)
                                    }}>
                                        ID
                                    </button>
                                </th>
                                <th><button className="btn btn-outline-primary" onClick={() => {
                                    setStudents(students.sort((a, b) => a.first_name.localeCompare(b.first_name)))
                                    setFilter('first_name')
                                    setReversed(false)
                                }}>First Name</button>
                                </th>
                                <th><button className="btn btn-outline-primary" onClick={() => {
                                    setStudents(students.sort((a, b) => a.last_name.localeCompare(b.last_name)))
                                    setFilter('last_name')
                                    setReversed(false)
                                }}>Last Name</button>
                                </th>
                                <th>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        setStudents(students.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))
                                        setFilter('created_at')
                                        setReversed(false)
                                    }}>Created At</button>

                                </th>
                                <th>
                                <button className="ml-5 btn btn-outline-primary" onClick={() => {
                                        students.reverse()
                                        setReversed(!reversed)
                                        }}>{(!reversed) ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                                </th>
                            </tr>
                        </thead>
                        <StudentsTable students={currentStudents} />
                    </table>
                    <Pagination
                        perPage={studentsPerPage}
                        total={students.length}
                        paginate={paginate}
                        firstIndex={indexOfFirstStudent}
                        lastIndex={indexOfLastStudent}
                    />
                </div>
            </div>
        </div>


    )
}

export default StudentList
