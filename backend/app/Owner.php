<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $fillable = ["name", "email", "phone_no", "mobile_no", "organization_id"];

    public function organization()
    {
        return $this->belongsTo("App\Organization");
    }

    public function property()
    {
        return $this->hasOne("App\Property");
    }

    public function property_histories()
    {
        return $this->hasMany("App\PropertyHistory");
    }
}
