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

 // returns a list of grades by students:
 Route::get('/student_grades', 'StudentController@getStudentsWithGrades');
 Route::get('/student_grades/{id}', 'StudentController@getStudentGrades');

 /**
  *  GradeController routes
  *
  */

  Route::post('/grade', 'GradeController@postGrade');