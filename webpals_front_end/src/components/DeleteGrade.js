import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHandPaper } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const DeleteGrade = ({ match }) => {
    console.log(match)
    const deleteGrade = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/grade/${match.params.id}`)
        Swal.fire({
            type: 'success',
            title: "Deleted!",
            text: "Siyanara!"

        })
        window.history.back()
    }

    return (
        <div className="text-center question-screen">
            <div className="row">
                <div className="col-12">
                    <h2 className="pt-4">{`Delete Grade #${match.params.id}?`}</h2>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-6">
                    <div className="card text-center">
                        <div className="card-body">
                            <button
                                className="btn btn-success btn-lg"
                                onClick={() => deleteGrade(match.params.id)}
                            ><FontAwesomeIcon icon={faCheck} /></button>
                            <h5 className="card-title pt-3">Yes! Delete away!</h5>

                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <Link className="btn btn-danger btn-lg" to="/grades"><FontAwesomeIcon icon={faHandPaper} /></Link>
                            <h5 className="card-title pt-3">No! I still need that!</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DeleteGrade
