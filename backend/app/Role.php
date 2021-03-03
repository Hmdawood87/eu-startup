<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ["name", "description", "organization_id"];

    public function users()
    {
        return $this->hasMany("App\User");
    }

    public function organization()
    {
        return $this->belongsTo("App\Organization");
    }

    public function permissions()
    {
        return $this->belongsToMany('App\Permission', 'role_permissions');
    }
    
}
