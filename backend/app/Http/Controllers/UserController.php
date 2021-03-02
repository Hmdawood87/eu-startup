<?php

namespace App\Http\Controllers;
use App\Helpers\SortAndFilterAndPaginateHelper;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request){
        $validator = Validator::make($request->all(), [
            'organization_id' => 'bail|required|numeric',
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $users = User::with('role','grade')->where("id", "!=", $request->user_id);
            $users = SortAndFilterAndPaginateHelper::filterAndSortAndPaginate($users, $request, 'users');
            if($request->limit) {
                $data = User::where("id", "=", $request->signed_user_id)->orwhere("reporting_id", "=", $request->signed_user_id)->get();
                $users = ["data" => $users->getCollection(),"condition_data" =>$data, "total" => $users->total()];
            }else {
                $users = ["data" => $users,  "total" => count($users)];
            }
            return response()->json(['success' => true, "users" => $users], 200);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'name'            => 'bail|required|string|max:30',
            'email'           => 'bail|required|email|unique:users|max:30',
            'organization_id' => 'bail|required|numeric',
            "role_id"         => 'bail|required|numeric',
            "grade_id"         => 'bail|required|numeric',

        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $request["password"]="Test@12345";
            $data             = $request->all();
            $data["password"] = bcrypt($data["password"]);
            $user = User::create($data);
            if($user)
                return response()->json(["status" => true, "message" => "User created successfully.", "data" => $user], 201);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'bail|required|numeric'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $user = User::with("role")->find($request->id);
            if($user)
                return response()->json(["status" => true, "data" => $user], 200);
            return response()->json(["status" => false, "message" => "User not found."], 404);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'id'   => 'bail|required|numeric',
            'name' => 'bail|required|string|max:30',
            'role_id'         => 'bail|required|numeric'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $user = User::find($request->id);
            $user->update(["name" => $request->name,"role_id" => $request->role_id,"grade_id" => $request->grade_id,"reporting_id" => $request->reporting_id]);
            if($user)
                return response()->json(["success" => true, "message" => "User updated successfully.", "data" => $user], 201);
            return response()->json(["success" => false, "message" => "Error occured while updating user."], 400);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request){
        $validator = Validator::make($request->all(), [
            'id'   => 'bail|required|numeric'
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $user = User::find($request->id);
            if($user && $user->role->name != "Super Admin"){
                $user->delete();
                return response()->json(["success" => true, "message" => "User deleted successfully."], 200);
            }
            return response()->json(["success" => false, "message" => "Can't delete Super Admin."], 403);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }
}
