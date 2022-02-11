<?php


namespace App\Actions\Users;


use App\Models\User;

class UpdateUserDetailsAction
{
    public function run($request, $userId)
    {
        $user = User::findOrFail($userId);
        $user->name = $request['name'];
        return $user->save();
    }
}
