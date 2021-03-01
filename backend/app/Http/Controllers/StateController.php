<?php

namespace App\Http\Controllers;

use App\Country;
use App\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Wilgucki\Csv\Facades\Reader;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country = null)
    {
        if($country)
            $all_states = $country->states;
        else
            $all_states = State::all();
        return response()->json(["success" => true, "message" => "", "data" => $all_states], 200);
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
            $all_states = $reader->readAll();
            foreach ($all_states as $state) {
                State::create($state);
            }
            return response()->json(["success" => true, "message" => "States inserted successfully."], 201);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function show(State $state)
    {
        return response()->json(["success" => true, "message" => "", "data" => $state], 200);
    }
}
