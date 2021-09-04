<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// 新規ワーク登録
Route::post('/workAdd', [App\Http\Controllers\ApiController::class, 'workAdd']);
// 新規レコード登録
Route::post('/recordAdd', [App\Http\Controllers\ApiController::class, 'recordAdd']);

