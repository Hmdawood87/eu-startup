<?php

namespace App\Http\Controllers;
use App\Helpers\SortAndFilterAndPaginateHelper;
use App\Property;
use App\PropertyImage;
use App\PropertyHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

         try{
             $validator = Validator::make($request->all(), [
                 'organization_id' => 'bail|required|numeric'
             ]);
             if($validator->fails())
                 return response()->json(["success" => false, "message" => $validator->errors()], 412);
             $properties = Property::with('country', 'state', 'city')->where("organization_id", $request->organization_id);
             $properties = SortAndFilterAndPaginateHelper::filterAndSortAndPaginate($properties, $request, 'properties');
             if($properties){
                 if($request->limit)
                     $properties = ["data" => $properties->getCollection(), "total" => $properties->total()];
                 else
                     $properties = ["data" => $properties, "total" => count($properties)];
             }
             return response()->json(['success' => true, 'properties' => $properties], 200);
         } catch (\Exception $e) {
             return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
         }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'address'         => 'required|regex:/^[A-Za-z1-9# -]+$/|unique:properties',
                'state_id'        => 'bail|required|numeric',
                'city_id'         => 'bail|required|numeric',
                'country_id'      => 'bail|required|numeric',
                'owner_id'        => 'nullable|numeric',
                'tenant_id'       => 'nullable|numeric',
                'organization_id' => 'bail|required|numeric'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            $property = Property::create($request->all());
            return response()->json(['success' => true, 'data' => $property, 'message' => 'Property has been created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }
    public function uploadPropertyImages(Request $request)
    {


        try {
            $validator = Validator::make($request->all(), [
                'file'        => 'bail|required_with:property_id|array',
                'file.*'=>'bail|file|max:10240'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            $path = public_path('property_docs/images/'.$request->property_id.'/');
            $property = '';
            if($request->hasfile('file'))
            {

                foreach($request->file('file') as $file)
                {

                    $uploaded = $file->move($path, $file->getClientOriginalName());
                    $property=PropertyImage::create(["file_path" => $path, "submitted_id" => $request->property_id,"submitted_type" => 'property_images']);

                }
            }
             return response()->json(['success' => true, 'data' => $property, 'message' => 'Property has been created successfully'], 201);




        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $property = Property::with('country', 'state', 'city', 'owner','tenant')->findOrFail($id);
//        dd($property->toSql());
        return response()->json(['success' => true, 'data' => $property], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        $validator = Validator::make($request->all(), [
            'state_id'        => 'bail|required|numeric',
            'city_id'         => 'bail|required|numeric',
            'country_id'      => 'bail|required|numeric',
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $property->update(["address" => $request->address, "state_id" => $request->state_id, "city_id" => $request->city_id, "country_id" => $request->country_id, "tanant_id" => $request->tanant_id, "owner_id" => $request->owner_id]);
            return response()->json(['success' => true, 'data' => $property, 'message' => 'Property has been updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property $property)
    {
        try {
            $property->delete();
            return response()->json(['success' => true, 'data' => $property, 'message' => 'Property has been deleted successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }
}
