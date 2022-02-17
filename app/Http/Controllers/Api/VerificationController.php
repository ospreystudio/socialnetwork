<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function verify(Request $request) {

        $user = User::findOrFail($request->id);

        if (! hash_equals((string) $request->hash, sha1($user->getEmailForVerification()))) {
            return response()->json([
                "message" => "Unauthorized",
                "success" => false
            ]);
        }

        if ($user->hasVerifiedEmail()) {
            return response()->json([
                "message" => "User already verified!",
                "success" => false
            ]);
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return response()->json([
            "message" => "Email verified successfully!",
            "success" => true
        ]);
    }

        public function resendVerifiedEmail(Request $request) {
        $user = User::where('email', $request->email)->first();

        if(!$user) {
            return response()->json([
                "message" => "fa to send!!",
                "success" => true
            ]);
        }

        $user -> sendEmailVerificationNotification();
            return response()->json([
                "message" => "Check you email",
                "success" => true
            ]);

    }
}
