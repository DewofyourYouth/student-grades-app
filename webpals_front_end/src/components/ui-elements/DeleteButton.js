import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteButton = ({type, id}) => {
    return (
        <Link
            className="btn btn-outline-danger"
            to={`/delete_${type}/${id}`}
        >
            <FontAwesomeIcon icon={faTrash} />
        </Link>
    )
}

export default DeleteButton
