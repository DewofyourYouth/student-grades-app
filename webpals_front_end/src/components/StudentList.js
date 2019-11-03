import React, { useState, useEffect } from 'react'
import AddButton from './ui-elements/AddButton'
import axios from 'axios'
import StudentsTable from './StudentsTable'
import Pagination from './ui-elements/Pagination'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

const StudentList = () => {


    useEffect(() => {
        fetchStudents()
    }, [])

    const [students, setStudents] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [studentsPerPage, setStudentsPerPage] = useState(5)

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
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th></th>
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
