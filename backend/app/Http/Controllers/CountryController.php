<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Wilgucki\Csv\Facades\Reader;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all_countries = Country::all();
        return response()->json(["success" => true, "message" => "All countries.", "data" => $all_countries], 200);
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
            $all_countries = $reader->readAll();
            foreach ($all_countries as $country) {
                Country::create($country);
            }
            return response()->json(["success" => true, "message" => "Countries inserted successfully."], 201);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        return response()->json(["success" => true, "message" => "", "data" => $country], 200);
    }
}
