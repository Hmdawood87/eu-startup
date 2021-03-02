<?php
namespace App\Http\Controllers;
use App\Helpers\SortAndFilterAndPaginateHelper;
use App\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TenantController extends Controller
{
    public function index(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'organization_id' => 'bail|required|numeric'
            ]);
            if($validator->fails())
                return response()->json(["success" => false, "message" => $validator->errors()], 412);
            $tenants = Tenant::where("organization_id", $request->organization_id);
            $tenants = SortAndFilterAndPaginateHelper::filterAndSortAndPaginate($tenants, $request, 'grades');
            if($request->limit)
                $tenants = ["data" => $tenants->getCollection(), "total" => $tenants->total()];
            else
                $tenants = ["data" => $tenants, "total" => count($tenants)];
            return response()->json(['success' => true, 'tenants' => $tenants], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'            => 'bail|required|string|max:30',
            'salary'           => 'bail|required|string|max:30',
            'organization_id' => 'bail|required|numeric',
      
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $tenant = Tenant::create($request->all());
            return response()->json(['success' => true, 'data' => $tenant, 'message' => 'Grade has been created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    public function show(Tenant $tenant)
    {
        return response()->json(['success' => true, 'data' => $tenant], 200);
    }

    public function update(Request $request, Tenant $tenant)
    {
        $validator = Validator::make($request->all(), [
            'name'            => 'bail|required|string|max:30',
            'salary'           => 'bail|required|string|max:30',
           
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $updated = $tenant->update(["name" => $request->name, "salary" => $request->salary]);
            if($updated)
                return response()->json(["success" => true, "message" => "Grade updated successfully.", "data" => $tenant], 201);
            return response()->json(["success" => false, "message" => "Error occured while updating Tenant."], 400);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    public function destroy(Tenant $tenant)
    {
        try{
            $tenant->delete();
            return response()->json(["success" => true, "message" => "Grade deleted successfully."], 200);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }
}
