<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login() {

    }

    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
                    'name' => 'required|string | max:255',
                    'email' => 'required |string | email | max:255 |unique:users',
                    'password' => 'required | between:8, 255 | confirmed ',
            ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $user = User::create([
            'name' => $request ->name,
            'email' => $request ->email,
            'password' => Hash::make($request -> password)
        ]);

        if (!$user) {
            return response()->json(["success" => false, "message" => "Registration failed"], 500);
        }
        return response()->json(["success" => true, "message" => "Registration succeeded"]);

    }

}
