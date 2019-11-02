<?php

namespace App\Http\Controllers;
use App\Grade;
use App\Student;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    public function postGrade(Request $request)
    {
        $grade = new Grade();
        $grade->grade = $request->input('grade');
        $grade->student_id = $request->input('student_id');
        $grade->save();
        return response()->json(['grade' => $grade], 201);
    }

    public function deleteGrade($id)
    {
        $grade = Grade::find($id);
        $grade->delete();
        return response()->json(['message' => "Grade {$id} deleted!"], 200);
    }

    public function getGrade($id)
    {
        $grade = Grade::find($id);
        if (!$grade) {
            return response()->json(["message" => "Not found"], 404);
        }
        $student = Student::find($grade->student_id);
        return response()->json(["grade" => $grade, "student" => $student], 200);
    }

    public function editGrade(Request $request, $id)
    {
        $grade = Grade::find($id);
        if (!$grade) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $grade->grade = $request->input('grade');
        $grade->save();
        return response()->json(['grade' => $grade], 200);
    }

}
