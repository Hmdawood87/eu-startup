<?php

namespace App\Http\Controllers;

use App\Organization;
use App\Permission;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function organization_signup(Request $request){
        $validator = Validator::make($request->organization, [
            'name'        => 'bail|required|string|max:30',
            'email'       => 'bail|required|email|unique:organizations|max:30',
            'phone'       => 'bail|required|numeric|digits_between:1,15',
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        $validator = Validator::make($request->user, [
            'name'        => 'bail|required|string|max:30',
            'email'       => 'bail|required|email|unique:users|max:30',
            'password'    => 'bail|required|confirmed|min:6',
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            $hash = $this->generateRandomString(20);
            $organization     = Organization::create($request->organization + ["remember_token" => $hash]);
            $role             = $organization->roles()->create(["name" => "Super Admin", "organization_id" => $organization->id]);
            $role->permissions()->attach((Permission::all()->pluck('id')->toArray()));
            $data             = $request->user;
            $data["password"] = bcrypt($data["password"]);
            $data["role_id"]  = $role->id;
            $user             = $organization->users()->create($data);
            $this->sendVerificationEmail($organization->email, $hash);
            return response()->json(["status" => true, "data" => "Organization and user created successfully. An email link has been sent to organization email. Please verify to continue."], 201);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    public function verify(Request $request){
        try{
            $email = $request->segment(4);
            $hash = $request->segment(5);
            $row = Organization::whereEmail($email)->first();
            if($row->remember_token == $hash){
                $row->remember_token = null;
                $row->email_verified_at = \Carbon\Carbon::now();
                if ($row->save())
                    return response()->json(["success" => true, "message" => "Email verified successfully."], 201);
                return response()->json(["success" => false, "message" => "Error occued while confirming email."], 500);
            }
            return response()->json(["success" => false, "message" => "Invalid email or token."], 412);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'       => 'bail|required|email',
            'password'    => 'required',
        ]);
        if($validator->fails())
            return response()->json(["success" => false, "message" => $validator->errors()], 412);
        try{
            if(Auth::attempt($request->all())){
                $user = Auth::user();
                $user = User::with('organization', 'role.permissions')->find($user->id);
                if($user->organization->email_verified_at == null){
                    Auth::logout();
                    return response()->json(["success" => false, "message" => "Please verify your email first."], 412);
                }
                $success['user'] =  $user;
                $success['token'] =  $user->createToken(env("APP_NAME"))->accessToken;
                return response()->json(["success" => true, "message" => "Login successful.", "data" => $success], 200);
            }
            else
                return response()->json(["success" => false, "message" => 'Unauthorized'], 401);
        } catch (\Exception $e) {
            return response()->json(["success" => false, "message" => $e->getMessage()], 500);
        }
    }
}
