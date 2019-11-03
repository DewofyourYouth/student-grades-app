import React from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './ui-elements/DeleteButton'
import EditButton from './ui-elements/EditButton'

const GradeRows = ({grades}) => {

    return (
            <tbody>
                {grades.map(grade => (
                    <tr key={grade.grade_id}>
                        <td>
                            <Link to={`/students/${grade.id}`}>
                                {grade.first_name}
                            </Link>
                        </td>
                        <td>
                            <Link to={`/students/${grade.id}`}>
                                {grade.last_name}
                            </Link>
                        </td>
                        <td>{grade.grade}%</td>
                        <td>{grade.created_at}</td>
                        <td>
                            <EditButton type={'grade'} id={grade.grade_id} />
                            <DeleteButton type={'grade'} id={grade.grade_id} />
                        </td>
                    </tr>
                ))}
            </tbody>
    )
}

export default GradeRows
