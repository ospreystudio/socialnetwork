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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, "register"]);
Route::post('login', [AuthController::class, "login"]);
Route::post('forgot-password', [App\Http\Controllers\Api\ForgotPasswordController::class, "sendResetLinkEmail"]);
Route::post('reset-password', [App\Http\Controllers\Api\ResetPasswordController::class, "reset"]);


