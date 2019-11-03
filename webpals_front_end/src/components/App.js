import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../.scss/App.scss';
import Nav from './ui-elements/Nav';
import Grades from './Grades';
import StudentDetails from './StudentDetails'
import DeleteGrade from './DeleteGrade';
import EditGrade from './EditGrade';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import AddGrade from './AddGrade';
import DeleteStudent from './DeleteStudent';


function App() {

    return (
        <Router>
            <div className="App">
                <Nav />
                <div className="container">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/grades" exact component={Grades} />
                    <Route path="/students" exact component={StudentList} />
                    <Route path="/students/:id" component={StudentDetails} />
                    <Route path="/delete_grade/:id" component={DeleteGrade} />
                    <Route path="/edit_grade/:id" component={EditGrade} />
                    <Route path="/add_student" component={AddStudent} />
                    <Route path="/add_grade" exact component={AddGrade} />
                    <Route path="/add_grade/:id" component={AddGrade} />
                    <Route path="/delete_student/:id" component={DeleteStudent} />
                </div>
            </div>
        </Router>

    )
}


export default App

const HomePage = () => {
    return (
        <div className="text-center pt-5">
            <h1>Welcome to the Student Grades Admin</h1>
            <hr />
            <p>
                Laborum minim pariatur eiusmod consectetur veniam amet aute culpa eu veniam. Consectetur irure consectetur aute deserunt sit ipsum incididunt. Consectetur amet ullamco quis amet reprehenderit esse commodo proident in reprehenderit fugiat pariatur. Dolore ut in aute dolore et veniam. Non consequat incididunt proident velit voluptate ad reprehenderit cillum pariatur ullamco veniam enim pariatur.
            </p>
        </div>
    )
}