<?php

namespace App\Http\Controllers\Admin;

use App\Models\Fakultas;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateFakultasRequest;

class FakultasController extends Controller
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
            'fakultas' => Fakultas::orderBy('name')->get()
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateFakultasRequest $request)
    {
        $fakultas = new Fakultas;
        $fakultas->name = $request->name;
        $fakultas->save();

        return response()
            ->json(['message' => 'Success'], 200);
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
        Fakultas::find($id)->delete();
        return response()->json(['message' => 'Delete Fakultas Successfully'],200);
    }
}
