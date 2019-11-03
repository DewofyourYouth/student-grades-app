import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const EditStudent = ({match}) => {

    useEffect(() => {
        getStudent();
    }, [])

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    const getStudent = () => {
        axios.get(`http://127.0.0.1:8000/api/student_grades/${match.params.id}`)
            .then(function (response){
                setFirstName(response.data.student.first_name)
                setLastName(response.data.student.last_name)
            })
    }

    const putStudent = event => {
        event.preventDefault()
        axios.put(`http://127.0.0.1:8000/api/student/${match.params.id}`, {
            "first_name": firstName, 
            "last_name": lastName
        })
            .then(function (response) {
                console.log(response)
                Swal.fire({
                    type: 'success',
                    title: 'Student Edited!',
                    text: `${response.data.student.first_name} ${response.data.student.last_name}`
                })
                window.history.back()
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    return (
        <form onSubmit={putStudent}>
            <div className="form-row">
                <div className="col text-center pt-3">
                    <h1>Edit Student</h1>
                </div>
                
            </div>
            <div className="form-row">
                <div className="col-md">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        className="form-control"
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value.trim())} />
                </div>
                <div className="col-md">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        className="form-control"
                        defaultValue={lastName}
                        onChange={(e) => setLastName(e.target.value.trim())} />
                </div>
            </div>
            <div className="form-row">
                <div className="col text-center pt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )


}

export default EditStudent