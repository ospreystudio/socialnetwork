<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function  User()
    {
        return new UserResource(Auth::user());
    }
}
