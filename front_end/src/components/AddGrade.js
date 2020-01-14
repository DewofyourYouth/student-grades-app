import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const AddGrade = ({ match }) => {
    const sId = match.params.id
    const studentsUrl = "http://127.0.0.1:8000/api/students"
    const gradesUrl = "http://127.0.0.1:8000/api/grade"

    useEffect(() => {
        fetchStudents()
        if (match.params.id) {
            setstudentId(sId)
        }
    }, [])

    const [students, setStudents] = useState([])
    const [studentId, setstudentId] = useState(1)
    const [grade, setGrade] = useState(0)


    const fetchStudents = () => {
        const res = axios.get(studentsUrl)
            .then(function (res) {
                setStudents(res.data.students)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    const postGrade = (event) => {
        event.preventDefault()
        axios.post(gradesUrl, {
            "grade": grade,
            "student_id": studentId
        })
            .then(function(res) {
                Swal.fire({
                    type: 'success',
                    title: 'Grade Posted!'
                })
                window.history.back()
            })
    }



    const renderReturn = () => {
        if (match.params.id) {
            return (
                <select 
                    className="form-control" 
                    name="students" 
                    >
                <option value={studentId} >
                  Student ID#: {studentId}
                </option>
            </select>
            )
        } else {
            return (
                <select 
                    className="form-control" 
                    name="students"
                    onChange={(e) => setstudentId(e.target.value)}>
                    {students.map(student => (
                        <option 
                            key={student.id} 
                            value={student.id}>
                            {student.first_name} {student.last_name}
                        </option>
                    )
                    )}
                </select>
            )
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1 className="display-3 text-center m-3">Add Grade</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={postGrade}>
                        <div className="form-row">
                            <div className="col">
                                {renderReturn()}
                            </div>
                            <div className="col">
                                <input 
                                    className="form-control" 
                                    name="grade" 
                                    type="number"
                                    defaultValue={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                     />
                            </div>
                        </div>
                        <div className="form-row text-center">
                            <div className="col m-3">
                                <button className="btn btn-primary" type='submit'>SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddGrade
