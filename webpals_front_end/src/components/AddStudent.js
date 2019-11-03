import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const AddStudent = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const postStudent = event => {
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/api/student', {
            "first_name": firstName, 
            "last_name": lastName
        })
            .then(function (response) {
                console.log(response)
                Swal.fire({
                    type: 'success',
                    title: 'Student Created!',
                    text: `${response.data.student.first_name} ${response.data.student.last_name}`
                })
                window.history.back()
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    return (
        <form onSubmit={postStudent}>
            <div className="form-row">
                <div className="col text-center pt-3">
                    <h1>Add Student</h1>
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

export default AddStudent