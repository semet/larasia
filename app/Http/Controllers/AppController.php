<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use function Ramsey\Uuid\v1;

class AppController extends Controller
{
    public function __invoke()
    {
        return view('welcome');
    }
}
