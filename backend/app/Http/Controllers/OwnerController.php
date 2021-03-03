<?php

namespace App\Http\Controllers;
use App\Helpers\SortAndFilterAndPaginateHelper;
use App\Owner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\PropertyImage;

class OwnerController extends Controller
{
    public function index(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'organization_id' => 'bail|required|numeric'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            $owners = PropertyImage::where("organization_id", $request->organization_id);
            $owners = SortAndFilterAndPaginateHelper::filterAndSortAndPaginate($owners, $request, 'property_images');
            if($request->limit)
                $owners = ["data" => $owners->getCollection(), "total" => $owners->total()];
            else
                $owners = ["data" => $owners, "total" => count($owners)];
            return response()->json(['success' => true, 'owners' => $owners], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file'        => 'bail|required_with:tenant_id,owner_id|file|max:10240',
            'submitted_id' => 'bail|required|numeric',
            
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $path = public_path('docs/'.$request->submitted_id.'/');
             $uploaded = $request->file('file')->move($path, $request->file('file')->getClientOriginalName());
            $properties=PropertyImage::create(["file_path" => $path, "submitted_id" => $request->submitted_id,"submitted_type" => 'purchase_slip']);
            return response()->json(['success' => true, 'data' => $properties, 'message' => 'Purchase slip has been sumitted successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    public function show(Owner $owner)
    {
        return response()->json(['success' => true, 'data' => $owner], 200);
    }

    public function update(Request $request, Owner $owner)
    {
        $validator = Validator::make($request->all(), [
            'name'=> 'bail|required|string|max:30',
            'phone_no'       => 'bail|required|numeric|digits_between:1,15',
            'mobile_no'       => 'bail|required|numeric|digits_between:1,15',
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $owner->update(["name" => $request->name, "email" => $request->email, "phone_no" => $request->phone_no, "mobile_no" => $request->mobile_no]);
            if($owner)
                return response()->json(["success" => true, "message" => "Owner updated successfully.", "data" => $owner], 201);
            return response()->json(["success" => false, "message" => "Error occured while updating Owner."], 400);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    public function destroy(Owner $owner)
    {
        try{
            $owner->delete();
            return response()->json(["success" => true, "message" => "Owner deleted successfully."], 200);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }
}
