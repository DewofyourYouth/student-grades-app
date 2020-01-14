<?php

namespace App\Http\Controllers;
use App\Student;
use App\Grade;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Add a student to students table
     */
    public function postStudent(Request $request)
    {
        $student = new Student();
        $student->first_name = $request->input('first_name');
        $student->last_name = $request->input('last_name');
        $student->save();
        return response()->json(['student' => $student], 201);
    }

    /**
     * Returns a simple list of students
     */
    public function getStudents()
    {
        $students = Student::all();
        $response = [
            'students' => $students
        ];
        return response()->json($response, 200);
    }

    /**
     * This function returns a list of all students with their average grade
     */
    public function getStudentsWithAverage(Request $request)
    {
        $students = Student::all();
        $studentsAverage = [];
        foreach ($students as &$student) {
            array_push($studentsAverage, [
                'id' => $student->id,
                'first_name' => $student->first_name,
                'last_name' => $student->last_name,
                'created_at' => $student->created_at,
                'created_at_fmt' => date_format($student->created_at, "M jS, Y @ g:i A"),
                'average' => number_format((float)$student->grades()->avg('grade'), 2, '.', '')
                ]);
        }

        return response()->json(['students' => $studentsAverage], 200);
    }

    /**
     * Returns all grades with student info
     */
    public function getStudentsWithGrades(Request $request)
    {
        $grades = DB::table('students as s')
            ->select('s.id', 's.last_name', 's.first_name', 'g.grade', 'g.created_at', 'g.id as grade_id')
            ->rightJoin('grades as g', 's.id', '=', 'g.student_id')
            ->orderBy('g.created_at', 'desc')
            ->get();

            return response()->json(['grades' => $grades], 200);
    }

    /**
     * Return a student and their grades based on student id number 
     */
    public function getStudentGrades(Request $request, $id)
    {
        $student = Student::find($id);
        $grades = Grade::where('student_id', '=', $id)->get();
        
        return response()->json( ['student' => $student, 'grades' => $grades], 201);
    }

    /**
     * Edit a students name
     */
    public function editStudent(Request $request, $id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response()->json(["message" => "Not found"], 404);
        }
        $student->first_name = $request->input('first_name');
        $student->last_name = $request->input('last_name');
        $student->save();
        return response()->json(['student' => $student], 200);
    
    }

    public function deleteStudent($id)
    {
        $student = Student::find($id);
        $grades = Grade::where('student_id', '=', $id)->delete();
        $student->delete();
        return response()->json(['message' => "Student {$id} deleted"], 200);
    }
}
