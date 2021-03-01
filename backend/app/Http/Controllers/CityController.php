<?php

namespace App\Http\Controllers;

use App\City;
use App\Country;
use App\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Wilgucki\Csv\Facades\Reader;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(State $state = null)
    {
        if($state)
            $all_cities = $state->cities;
        else
            $all_cities = City::all();
        return response()->json(["success" => true, "message" => "", "data" => $all_cities], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'file' => 'bail|required|file'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            $reader = Reader::open($request->file("file"));
            $reader->getHeader();
            $all_cities = $reader->readAll();
            foreach ($all_cities as $city) {
                City::create($city);
            }
            return response()->json(["success" => true, "message" => "Cities inserted successfully."], 201);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        return response()->json(["success" => true, "message" => "", "data" => $city], 200);
    }
}
