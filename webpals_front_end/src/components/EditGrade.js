import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditGrade = ({match}) => {
    useEffect(() => {
        fetchGrade();
    }, [])

    const [grade, setGrade] = useState(null)
    const [studentData, setData] = useState({})

    const fetchGrade = () => {
        axios.get(`http://127.0.0.1:8000/api/grade/${match.params.id}`)
            .then( (response) => {
                setGrade(response.data.grade.grade)
                setData(response.data.student)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onFormSubmit = event => {
        event.preventDefault()
        axios.put(`http://127.0.0.1:8000/api/grade/${match.params.id}`, {"grade": grade})
            .then(r => {
                Swal.fire({
                    type: 'success',
                    title: 'You Did It!',
                    text: `Changed to: ${grade}%`
                })
                window.history.back()
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="text-center" onSubmit={onFormSubmit}>
            <div className="row pt-5">
                <div className="col">
                   <h4><strong>Student:</strong> {studentData.first_name} {studentData.last_name}</h4> 
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 text-right"><label htmlFor="grade"><strong>Score: </strong></label></div>
                <div className="col-sm-2 text-left">
                    <input 
                        name="score" 
                        type="number" 
                        className="form-control" 
                        defaultValue={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </div>
            </div>
            <div className="row pt-2">
                <div className="col"><button className="btn btn-primary">SUBMIT</button></div>
            </div>
            
        </form>
    )
}

export default EditGrade
