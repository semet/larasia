<?php

namespace App\Http\Controllers\Admin;

use App\Models\Semester;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateSemesterRequest;
use App\Http\Resources\Semester as SemesterResoure;

class SemesterController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SemesterResoure::collection(Semester::orderBy('year_id', 'desc')->get());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateSemesterRequest $request)
    {
        $semester             = new Semester;
        $semester->year_id    = $request->year_id;
        $semester->start_date = $request->start_date;
        $semester->end_date   = $request->end_date;
        $semester->name       = $request->name;
        $semester->active     = $request->active;
        $semester->save();

        return response()->json([
            'message' => 'Input Data Semester Berhasil!'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
