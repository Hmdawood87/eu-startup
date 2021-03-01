<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = ["address", "state_id", "city_id", "country_id", "tenant_id", "owner_id", "organization_id"];

    public function organization()
    {
        return $this->belongsTo("App\Organization");
    }

    public function country()
    {
        return $this->belongsTo("App\Country");
    }

    public function state()
    {
        return $this->belongsTo("App\State");
    }

    public function city()
    {
        return $this->belongsTo("App\City");
    }

    public function tenant()
    {
        return $this->belongsTo("App\Tenant");
    }

    public function owner()
    {
        return $this->belongsTo("App\Owner");
    }

    public function property_histories()
    {
        return $this->hasMany("App\PropertyHistory");
    }

    public function ownerships()
    {
        return $this->hasMany("App\OwnerShip");
    }

    public function agreements()
    {
        return $this->hasMany("App\Agreement");
    }
}
