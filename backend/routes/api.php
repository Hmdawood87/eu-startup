<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/login', function() {
    return response()->json(["success" => false, "message" => "Unauthorized."], 401);
})->name('login');

Route::get('email/verify/{email}/{hash}', 'AuthController@verify')->name('verify');

Route::prefix('organization')->group(function (){
    Route::post('/signup', 'AuthController@organization_signup');
    Route::post('/login', 'AuthController@login');
    Route::group(['prefix' => 'users', 'middleware' => ['auth:api', 'verified']], function(){
        Route::get('/', 'UserController@index');
        Route::get('/show', 'UserController@show');
        Route::post('/create', 'UserController@create');
        Route::put('/update', 'UserController@update');
        Route::delete('/delete', 'UserController@delete');
    });
});

Route::get('/user', function () {
    return auth()->guard('api')->user();
});

Route::group(['middleware' => ['auth:api', 'verified']], function () {
    Route::prefix('roles')->group(function () {
        Route::get('/', 'RoleController@index');
        Route::post('/create', 'RoleController@create');
        Route::get('/show/{id}', 'RoleController@show');
        Route::put('/update/{role}', 'RoleController@update');
        Route::delete('/delete/{role}', 'RoleController@destroy');
    });

    Route::prefix('permissions')->group(function () {
        Route::get('/', 'PermissionController@index');
        Route::post('/create', 'PermissionController@create');
        Route::put('/update/{permission}', 'PermissionController@update');
        Route::delete('/delete/{permission}', 'PermissionController@destroy');
    });

    Route::prefix('properties')->group(function () {
        Route::get('/', 'PropertyController@index');
        Route::post('/create', 'PropertyController@create');
        Route::post('/upload-images', 'PropertyController@uploadPropertyImages');
        Route::get('/show-details/{id}', 'PropertyController@show');
        Route::put('/update/{property}', 'PropertyController@update');
        Route::delete('/delete/{property}', 'PropertyController@destroy');
    });

    Route::prefix('countries')->group(function () {
        Route::get('/', 'CountryController@index');
        Route::post('/create', 'CountryController@create');
        Route::get('/show/{country}', 'CountryController@show');
    });

    Route::prefix('states')->group(function () {
        Route::get('/{country?}', 'StateController@index');
        Route::post('/create', 'StateController@create');
        Route::get('/show/{state}', 'StateController@show');
    });

    Route::prefix('cities')->group(function () {
        Route::get('/{state?}', 'CityController@index');
        Route::post('/create', 'CityController@create');
        Route::get('/show/{city}', 'CityController@show');
    });

    Route::prefix('owners')->group(function () {
        Route::get('/', 'OwnerController@index');
        Route::post('/create', 'OwnerController@create');
        Route::get('/show/{owner}', 'OwnerController@show');
        Route::put('/update/{owner}', 'OwnerController@update');
        Route::delete('/delete/{owner}', 'OwnerController@destroy');
    });

    Route::prefix('tenants')->group(function () {
        Route::get('/', 'TenantController@index');
        Route::post('/create', 'TenantController@create');
        Route::get('/show/{tenant}', 'TenantController@show');
        Route::put('/update/{tenant}', 'TenantController@update');
        Route::delete('/delete/{tenant}', 'TenantController@destroy');
    });

    Route::prefix('property_histories')->group(function () {
        Route::get('/', 'PropertyHistoryController@getHistory');
        Route::post('/create', 'PropertyHistoryController@create');
    });
});
