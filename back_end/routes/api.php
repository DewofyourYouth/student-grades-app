<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * StudentController routes
 * 
 */

 Route::post('/student', 'StudentController@postStudent');
 Route::get('/students', 'StudentController@getStudents');
 Route::get('/students_avg', 'StudentController@getStudentsWithAverage');
 Route::delete('/student/{id}', 'StudentController@deleteStudent');
 Route::put('/student/{id}', 'StudentController@editStudent');

 // returns a list of grades by students:
 Route::get('/student_grades/{id}', 'StudentController@getStudentGrades');
 // returns all grades with student info
 Route::get('/student_grades', 'StudentController@getStudentsWithGrades');

 /**
  *  GradeController routes
  *
  */

  Route::get('/grade/{id}', 'GradeController@getGrade');
  Route::post('/grade', 'GradeController@postGrade');
  Route::put('/grade/{id}', 'GradeController@editGrade');
  Route::delete('/grade/{id}', 'GradeController@deleteGrade');