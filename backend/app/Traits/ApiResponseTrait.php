<?php
namespace App\Traits;

trait ApiResponseTrait {

    /**
     * Error response
     *
     * @param array $errors
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorResponse($errors)
    {
        return response()->json(['errors' => $errors], 422);
    }

    /**
     * Data Response
     *
     * $params array $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function dataResponse($data)
    {
        return response()->json(['data' => $data], 200);
    }

}
