<?php


use App\Http\Controllers\Api\AuthController;
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


Route::group(["middleware" => "auth:api"], function () {
    Route::get('user', [App\Http\Controllers\Api\UsersController::class,'user']);
    Route::post('change-password', [App\Http\Controllers\Api\UsersController::class,'changePassword']);
    Route::post('change-details', [App\Http\Controllers\Api\UsersController::class,'changeDetails']);
});


Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);
Route::post('logout',[AuthController::class,'logout']);
Route::post('forgot-password', [App\Http\Controllers\Api\ForgotPasswordController::class, "sendResetLinkEmail"]);
Route::post('reset-password', [App\Http\Controllers\Api\ResetPasswordController::class, "reset"]);


