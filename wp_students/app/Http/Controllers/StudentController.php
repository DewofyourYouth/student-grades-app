<?php

namespace App\Http\Controllers;
use App\Student;
use App\Grade;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function postStudent(Request $request)
    {
        $student = new Student();
        $student->first_name = $request->input('first_name');
        $student->last_name = $request->input('last_name');
        $student->save();
        return response()->json(['student' => $student], 201);
    }

    public function getStudents()
    {
        $students = Student::all();
        $response = [
            'students' => $students
        ];
        return response()->json($response, 200);
    }

    public function getStudentsWithGrades(Request $request)
    {
        $grades = DB::table('students as s')
            ->select('s.id', 's.last_name', 's.first_name', 'g.grade', 'g.updated_at', 'g.id as grade_id')
            ->leftJoin('grades as g', 's.id', '=', 'g.student_id')
            ->orderBy('g.updated_at', 'desc')
            ->get();

            return response()->json(['grades' => $grades], 200);
    }

    public function getStudentGrades(Request $request, $id)
    {
        $student = Student::find($id);
        $grades = Grade::where('student_id', '=', $id)->get();
        

        return response()->json( ['student' => $student, 'grades' => $grades], 201);
    }
}
