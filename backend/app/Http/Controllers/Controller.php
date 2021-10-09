<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function errorResponse($message = 'Something went wrong')
    {
        return response()->json(['type' => 'error', 'message' => $message], 400);
    }

    public function successResponse($message = 'Task Successfull')
    {
        return response()->json(['type' => 'success', 'message' => $message], 200);
    }
}
