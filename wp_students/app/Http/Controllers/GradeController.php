<?php

namespace App\Http\Controllers;
use App\Grade;
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
}
