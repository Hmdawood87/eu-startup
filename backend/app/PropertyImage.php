<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
Relation::morphMap([
    'property_images'=>'App\Property',
    'property_aggrement'=>'App\Property',
    'property_ownership'=>'App\Property',

]);
class PropertyImage extends Model
{
    protected $fillable = ['file_path', 'submitted_id','submitted_type'];
    public function index(){
        return $this->morphTo();
    }
    //
}
