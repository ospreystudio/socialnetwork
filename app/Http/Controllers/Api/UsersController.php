<?php

namespace App\Http\Controllers\Api;

use App\Actions\Users\UpdateUserDetailsAction;
use App\Actions\Users\UpdateUserPasswordAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChangeDetailsRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function  User()
    {
        return new UserResource(Auth::user());
    }

    public function changePassword(ChangePasswordRequest $request, UpdateUserPasswordAction $updateUserPasswordAction)
    {
        if ($updateUserPasswordAction->run($request->all(), Auth::id())) {
            return response()->json(["success" => true]);
        }

        return response()->json(["success" => false]);
    }

    public function changeDetails(ChangeDetailsRequest $request, UpdateUserDetailsAction $updateUserDetailsAction)
    {
        if ($updateUserDetailsAction->run($request->all(), Auth::id())) {
            return response()->json(["success" => true]);

        }
        return response()->json(["success" => false]);
    }

}
