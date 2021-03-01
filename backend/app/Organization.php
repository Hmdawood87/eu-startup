<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable = ["name", "email", "phone", "remember_token"];

    protected $hidden = [
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function users()
    {
        return $this->hasMany("App\User");
    }

    public function roles()
    {
        return $this->hasMany("App\Role");
    }

    public function properties()
    {
        return $this->hasMany("App\Property");
    }

    public function tenants()
    {
        return $this->hasMany("App\Tenant");
    }
}
