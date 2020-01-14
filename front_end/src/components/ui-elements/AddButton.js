import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const AddButton = ({type, ...props}) => {
    if (props.id) {
        return (
            <Link
            className="btn btn-outline-primary btn-lg mb-4 mt-4"
            to={`/add_${type}/${props.id}`}
            >
            {`add ${type} ${' '}`.toUpperCase()} <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
        )
    }
    return (
        <Link
            className="btn btn-outline-primary btn-lg mb-4 mt-4"
            to={`/add_${type}`}
            >
            {`add ${type} ${' '}`.toUpperCase()} <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
    )
}

export default AddButton
