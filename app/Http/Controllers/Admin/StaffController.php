<?php

namespace App\Http\Controllers\Admin;

use App\Models\Staff;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateStaffRequest;

class StaffController extends Controller
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
        return response()->json([
            'staffs' => Staff::orderBy('name', 'asc')->get()
        ]);
    }
    /**
     * @Author: Hamdani
     * @Date: 2020-07-27 01:50:51
     * @filter by fakultas
     */
    public function byFakultas(Request $request)
    {
        $staffs = Staff::where('fakultas_id', $request->fakultas_id)
                ->orderBy('name', 'asc')
                ->get();

        if($staffs->isNotEmpty()){
            return response()->json([
                'staffs' => $staffs,
                'status' => 200
            ]);
        }
        return response()->json([
            'message' => 'No data',
            'status'  => 404
        ]);

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateStaffRequest $request)
    {
        $staff = new Staff;
        $staff->fakultas_id = $request->fakultas_id;
        $staff->employee_number = $request->employee_number;
        $staff->name = $request->name;
        $staff->email = $request->email;
        $staff->password = bcrypt($request->employee_number);
        $staff->save();

        return response()->json([
            'message' => 'Input Data Staff Berhasil!'
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
