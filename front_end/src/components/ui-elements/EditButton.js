import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const EditButton = ({type, obj, id}) => {
    return (
        <Link 
            className="btn btn-outline-warning"
            to={`/edit_${type}/${id}`}
            >
            <FontAwesomeIcon icon={faEdit} />
        </Link>

    )
}

export default EditButton
