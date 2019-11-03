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

    public function getStudentsWithAverage(Request $request)
    {
        $students = Student::all();
        $studentsAverage = [];
        foreach ($students as &$student) {
            array_push($studentsAverage, [
                'id' => $student->id,
                'first_name' => $student->first_name,
                'last_name' => $student->last_name,
                'created_at' => date_format($student->created_at, "Y/m/d H:i:s"),
                'average' => number_format((float)$student->grades()->avg('grade'), 2, '.', '')
                ]);
        }

        return response()->json(['students' => $studentsAverage], 200);
    }

    public function getStudentsWithGrades(Request $request)
    {
        $grades = DB::table('students as s')
            ->select('s.id', 's.last_name', 's.first_name', 'g.grade', 'g.created_at', 'g.id as grade_id')
            ->rightJoin('grades as g', 's.id', '=', 'g.student_id')
            ->orderBy('g.created_at', 'desc')
            ->get();

            return response()->json(['grades' => $grades], 200);
    }

    public function getStudentGrades(Request $request, $id)
    {
        $student = Student::find($id);
        $grades = Grade::where('student_id', '=', $id)->get();
        
        return response()->json( ['student' => $student, 'grades' => $grades], 201);
    }

    public function deleteStudent($id)
    {
        $student = Student::find($id);
        $grades = Grade::where('student_id', '=', $id)->delete();
        $student->delete();
        return response()->json(['message' => "Student {$id} deleted"], 200);
    }
}
