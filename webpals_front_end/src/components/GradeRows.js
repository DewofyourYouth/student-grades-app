import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const GradeRows = ({grades}) => {

    return (
            <tbody>
                {grades.map(grade => (
                    <tr key={grade.grade_id}>
                        <td>
                            <Link to={`/student/${grade.id}`}>
                                {grade.first_name}
                            </Link>
                        </td>
                        <td>
                            <Link to={`/student/${grade.id}`}>
                                {grade.last_name}
                            </Link>
                        </td>
                        <td>{grade.grade}%</td>
                        <td>{grade.updated_at}</td>
                        <td>
                            <button className="btn btn-outline-success">Edit</button>
                            <button class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
    )
}

export default GradeRows
