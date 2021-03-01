<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = ["name", "key", "sub_group_name", "group_name"];
}
