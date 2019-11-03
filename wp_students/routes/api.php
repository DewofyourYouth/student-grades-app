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

 // returns a list of grades by students:
 Route::get('/student_grades/{id}', 'StudentController@getStudentGrades');
 Route::get('/student_grades', 'StudentController@getStudentsWithGrades');

 /**
  *  GradeController routes
  *
  */

  Route::post('/grade', 'GradeController@postGrade');
  Route::delete('/grade/{id}', 'GradeController@deleteGrade');
  Route::put('/grade/{id}', 'GradeController@editGrade');
  Route::get('/grade/{id}', 'GradeController@getGrade');