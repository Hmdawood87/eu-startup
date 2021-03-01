<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = [
        'name',
        'state_id',
        'state_code',
        'country_id',
        'country_code',
        'latitude',
        'longitude'
    ];

    public function country(){
        return $this->belongsTo("App\Country");
    }

    public function state(){
        return $this->belongsTo("App\State");
    }
}
