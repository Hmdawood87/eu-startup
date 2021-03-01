<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = [
        'name',
        'iso3',
        'iso2',
        'phone_code',
        'capital',
        'currency',
        'currency_symbol',
        'native',
        'region',
        'subregion',
        'translations',
        'latitude',
        'longitude',
        'emoji',
        'emojiU'
    ];

    public function states(){
        return $this->hasMany("App\State");
    }

    public function cities(){
        return $this->hasMany("App\City");
    }
}
