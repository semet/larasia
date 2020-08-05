<?php

namespace App\Http\Controllers\Admin;

use App\Models\Year;
use App\Http\Resources\Year as YearResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateYearRequest;

class YearController extends Controller
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
        return YearResource::collection(Year::orderBy('start_date', 'desc')->get());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateYearRequest $request)
    {
        $year             = new Year;
        $year->start_date = $request->start_date;
        $year->end_date   = $request->end_date;
        $year->active     = $request->active;
        $year->name       = $request->name;
        $year->save();

        return response()->json([
            'message' => 'Input Data Tahun Berhasil!'
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
