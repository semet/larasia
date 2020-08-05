<?php
use Illuminate\Support\Facades\Route;

Route::post('login',    'LoginController@login');
Route::post('logout',   'LoginController@logout');
Route::get('user',     'ProfileController@index');
/**
 * @Author: Hamdani
 * @Date: 2020-08-03 06:58:02
 * @Desc:
 */
Route::get('fakultas',              'FakultasController@index');
Route::post('fakultas/store',       'FakultasController@store');
Route::post('fakultas/{id}/delete', 'FakultasController@destroy');
/**
 * @Author: Hamdani
 * @Date: 2020-08-03 06:58:02
 * @Desc:
 */
Route::get('staff',              'StaffController@index');
Route::post('staff/store',       'StaffController@store');
Route::post('staff/{id}/delete', 'StaffController@destroy');
Route::post('staff/byFakultas',        'StaffController@byFakultas');
/**
 * @Author: Hamdani
 * @Date: 2020-08-03 06:58:02
 * @Desc:
 */
Route::get('year',              'YearController@index');
Route::post('year/store',       'YearController@store');
Route::post('year/{id}/delete', 'YearController@destroy');
/**
 * @Author: Hamdani
 * @Date: 2020-08-03 06:58:02
 * @Desc:
 */
Route::get('semester',              'SemesterController@index');
Route::post('semester/store',       'SemesterController@store');
Route::post('semester/{id}/delete', 'SemesterController@destroy');
