<?php


namespace App\Actions\Users;


use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UpdateUserPasswordAction
{
    public function run ($request, $userId)
    {
        $user = User::findOrFail($userId);

        if (!Hash::check($request['oldPassword'], $user->password)) {
            return false;
        }

        $user->password = Hash::make($request['newPassword']);

        if (!$user->save()) {
            return false;
        }
            return true;
    }

}
