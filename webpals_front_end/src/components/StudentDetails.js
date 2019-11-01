import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';

const gradeAverage = (arr, toDec) => (arr.map(obj => obj.grade)
                                        .reduce((a, b) => a + b, 0) / arr.length)
                                        .toFixed(toDec)

function StudentDetails({ match }) {
    useEffect(() => {
        fetchData();
    }, [])


    const [student, setStudent] = useState([])
    const [grades, setGrades] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const data = await fetch(`http://127.0.0.1:8000/api/student_grades/${match.params.id}`)

        const studentData = await data.json()
        const student = studentData.student
        const grades = studentData.grades

        setStudent(student)
        setGrades(grades)
        setLoading(false)
    }

    const renderContent = () => {
        if (loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <div>
                    <h1 className="pt-3">{student.first_name} {student.last_name}</h1>
                    <hr />
                    <p><strong>Grades:</strong> {grades.map(obj => obj.grade).join("%, ")}% </p>
                    <h4>Average Grade: {gradeAverage(grades, 2)} %</h4>
                </div>
            )
        }
    }

    return (
        <div>{renderContent()}</div>
    )
}

export default StudentDetails
