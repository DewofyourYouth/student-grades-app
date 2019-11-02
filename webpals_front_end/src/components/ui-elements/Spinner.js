import React from 'react'

function Spinner() {
    return (
        <div className="d-flex justify-content-center loader text-primary">
            <div className="spinner-border" style={{ height: "3rem", width: "3rem" }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
