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
import EditStudent from './EditStudent';



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
                    <Route path="/edit_student/:id" component={EditStudent} />
                </div>
            </div>
        </Router>

    )
}


export default App

const HomePage = () => {
    return (
        <div className="text-center pt-5">
          <div className="row">
              <div className="col-12">
                  <h1 className="display-3">
                      Welcome to the Student Grades Admin
                  </h1>
                  <hr />
              </div>
          </div>
          <div className="row">
              <div className="col">
                <h1>
                   Laboris incididunt nisi minim est elit. 
                </h1>
                <p className="text-left">
                    Non adipisicing ullamco incididunt sit quis quis aliquip non exercitation. Tempor sint et do anim cupidatat enim laboris. Aute incididunt ipsum ullamco in. Mollit et mollit labore et pariatur sint nisi duis anim. Duis consequat reprehenderit cillum est Lorem sit cillum ipsum ad labore id laborum mollit. Labore eiusmod nulla dolor nulla sit aliquip quis laborum. Commodo esse et tempor laborum veniam enim elit laborum nostrud proident sint.    
                </p> 
              </div>
              <div className="col">
                  <h1>Proident nulla amet anim cupidatat consequat.</h1>
                  <p className="text-left">
                      Officia elit nisi adipisicing in ea ullamco aute Lorem qui consequat ad mollit. Duis aliqua non velit id enim ex voluptate. Mollit officia irure ipsum proident elit duis enim exercitation officia laborum labore quis.
                  </p>
                  <p className="text-left">
                      Nisi quis et cillum qui ipsum id amet sunt. Ad sit culpa consequat minim eiusmod amet et nulla duis excepteur aute nulla dolore excepteur. Anim non magna cillum ipsum do minim fugiat fugiat reprehenderit ullamco non sit amet in. Culpa in enim aliqua pariatur do velit magna duis qui nulla dolor cupidatat cillum ea. Laboris amet nulla sit voluptate cillum est sunt ipsum labore esse mollit eiusmod officia exercitation. Ut eiusmod eiusmod incididunt deserunt exercitation cupidatat dolore laboris aute enim incididunt mollit ad. Ea magna eiusmod dolor incididunt laborum eu incididunt laboris ipsum in non adipisicing quis.
                  </p>
              </div>
          </div>
        </div>
    )
}