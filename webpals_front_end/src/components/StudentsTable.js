import React from 'react'
import { Link } from 'react-router-dom'
import EditButton from './ui-elements/EditButton'
import DeleteButton from './ui-elements/DeleteButton'


const StudentsTable = ({ students }) => {
    return (
        <tbody>
            {students.map(student => (
                <tr key={student.id}>
                    <td>
                  
                    <Link to={`/students/${student.id}`} >
                            {student.id}
                        </Link>
                    </td>
                    <td>
                        <Link to={`/students/${student.id}`} >
                            {student.first_name}
                        </Link>
                    </td>
                    <td>
                        <Link to={`/students/${student.id}`} >
                            {student.last_name}
                        </Link>
                    </td>
                    <td>
                        {student.created_at}
                        {student.created_at}
                    </td>
                    <td>
                        <EditButton type={'student'} id={student.id} />
                        <DeleteButton type={'student'} id={student.id} /> 
                    </td>
                </tr>
            ))}
        </tbody>

    )
}

export default StudentsTable
