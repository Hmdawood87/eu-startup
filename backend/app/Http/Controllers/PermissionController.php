<?php

namespace App\Http\Controllers;

use App\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            return response()->json(["success" => true, "data" => Permission::groupBy('id', 'group_name')->orderBy('group_name')->get()], 200);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 409);
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
            'name' => 'required|string|max:255',
            'key' => 'required|string|unique:permissions|max:255',
            'sub_group_name' => 'required|string|max:255',
            'group_name' => 'required|string|max:255'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $permission = Permission::create($request->all());
            return response()->json(['success' => true, 'data' => $permission, 'message' => 'Permission has been created successfully'],201);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Permission creation Failed!', 'error' => $e->getMessage()],409);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'sub_group_name' => 'required|string|max:255',
            'group_name' => 'required|string|max:255'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try {
            $permission->update($request->all());
            $permission = Permission::findOrFail($permission->id);
            return response()->json(['success' => true, 'data' => $permission, 'message' => 'Permission has been updated successfully'],200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Permission updation Failed!', 'error' => $e->getMessage()],409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        try {
            $permission->delete();
            return response()->json(['success' => true, 'message' => 'Permission has been deleted successfully'],200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Permission deletion Failed!', 'error' => $e->getMessage()],409);
        }
    }
}
