<?php

namespace App\Http\Controllers;

use App\OwnerShip;
use App\PropertyHistory;
use App\Property;
use App\PropertyImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PropertyHistoryController extends Controller
{
    public function getHistory(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'key' => 'bail|required|alpha',
                'id'  => 'bail|required|numeric|gt:0'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            return response()->json(["success" => true, "data" => PropertyHistory::with('owner', 'tenant','property')->where($request->key."_id", $request->id)->get()], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    public function create(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'property_id' => 'bail|required|numeric|gt:0',
                'tenant_id'   => 'bail|required_without:owner_id|numeric|gt:0',
                'owner_id'    => 'bail|required_without:tenant_id|numeric|gt:0',
                'file'        => 'bail|required_with:tenant_id,owner_id|file|max:10240'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            $property_history = PropertyHistory::with('property')->where('property_id', $request->property_id)->orderBy('created_at', 'desc')->first();
            $property = Property::find($request->property_id);
            if(strtolower($request->key) == 'remove'){
                $property->update(['tenant_id' => null]);
                $property->property_histories()->create(['owner_id' => $property->owner_id]);
                return response()->json(["success" => true, "message" => "Tenant Removed successfully.", "data" => $property], 201);
            } else {
                if($request->owner_id){
                    if($property_history && $property_history->tenant_id)
                        $request['tenant_id'] = $property_history->tenant_id;
                    $property_history = $property->property_histories()->create($request->except('file'));
                    if($property_history){
                        $path = public_path('property_docs/'.$request->property_id.'/owner/'.$request->owner_id.'/');
                        $uploaded = $request->file('file')->move($path, $request->file('file')->getClientOriginalName());
                        if($uploaded)
                            $properties=PropertyImage::create(["file_path" => $path, "submitted_id" => $request->property_id,"submitted_type" => 'property_ownership']);

//                        $property->ownerships()->create(["file_path" => $path, "owner_id" => $request->owner_id]);
                    }
                } elseif($request->tenant_id){
                    $count = 0;
                    if($property_history && $property_history->tenant_id){
                        if($property_history->tenant_id != $request->tenant_id){
                            $request['owner_id'] = $property_history->owner_id;
                            $property_history = $property->property_histories()->create($request->except('file'));
                            if($property_history)
                                $count++;
                        }
                    } else{
                        if($property_history){
                            $count++;
                            $property_history->update($request->except('file'));
                        }
                    }
                    if($count){
                        $path = public_path('property_docs/'.$request->property_id.'/tenant_agreement/'.$request->tenant_id.'/');
                        $uploaded = $request->file('file')->move($path, $request->file('file')->getClientOriginalName());
                        if($uploaded)
                            $properties=PropertyImage::create(["file_path" => $path, "submitted_id" => $request->property_id,"submitted_type" => 'property_aggrement']);

//                        $property->agreements()->create(["file_path" => $path, "owner_id" => $property->owner_id, 'tenant_id' => $request->tenant_id]);
                    }
                } else
                    return response()->json(["success" => false, "message" => "Tenant or Owner can't be null at same time.", "data" => null], 201);
                if($property_history) {
                    $property->update($request->except('file'));
                    return response()->json(["success" => true, "message" => "Property Updated successfully.", "data" => $property], 201);
                } else
                    return response()->json(["success" => false, "message" => "Somehing Went Wrong."], 201);
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }
}
