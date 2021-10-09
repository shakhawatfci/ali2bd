<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class UserController extends Controller
{
    //

    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required',
            'password' => 'required',
        ]);

        try
        {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                $user = auth()->guard('user')->user();

                $token = $user->createToken('customerToken');

                return response()->json(['token' => $token->plainTextToken, 'user' => $user], 200);
            }
            throw new Exception('Wrong Credential');

        } catch (Throwable $th) {
            return $this->errorResponse($th->getMessage());
        }
    }
}
