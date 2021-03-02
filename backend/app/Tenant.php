<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{ 
      protected $table="grades";

    protected $fillable = ["name", "salary",  "organization_id"];

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
