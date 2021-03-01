<?php

namespace App\Http\Controllers;

use App\Helpers\SortAndFilterAndPaginateHelper;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
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
            $roles = Role::where("organization_id", $request->organization_id);
            $roles = SortAndFilterAndPaginateHelper::filterAndSortAndPaginate($roles, $request, 'roles');
            foreach ($roles as $role){
                $permissions = [];
                if(!$role->permissions->isEmpty()){
                    foreach ($role->permissions as $permission){
                        array_push($permissions, $permission->id);
                    }
                }
                $role["role_permissions"] = $permissions;
            }
            if($request->limit)
                $roles = ["data" => $roles->getCollection(), "total" => $roles->total()];
            else
                $roles = ["data" => $roles, "total" => count($roles)];
            return response()->json(['success' => true, 'roles' => $roles], 200);
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:roles',
            'description' => 'required|string',
            'permissions' => 'sometimes|array',
            'organization_id' => 'bail|required|numeric'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $data["name"] = $request->name;
            $data["description"] = $request->description;
            $data["organization_id"] = $request->organization_id;
            $role = Role::create($data);
            $role->permissions()->attach((Array)$request->permissions);
            return response()->json(['success' => true, 'role' => $role, 'message' => 'Role has been created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    public function show($id)
    {
        try {
            $role = Role::with('permissions')->findOrFail($id);
            return response()->json(['success' => true, 'role' => $role], 201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }

    /**
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Role $role)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'permissions' => 'sometimes|array'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $role->update(["name" => $request->name, "description" => $request->description]);
            if (is_array($request->permissions))
                $role->permissions()->sync((Array)$request->permissions);
            return response()->json(['success' => true, 'message' => 'Role has been updated successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()],409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        try {
            $role->permissions()->detach();
            $role->delete();
            return response()->json(['success' => true, 'message' => "Role deleted successfully."], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 409);
        }
    }
}
