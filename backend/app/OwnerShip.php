<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OwnerShip extends Model
{
    protected $fillable = ['file_path', 'owner_id', 'status', 'user_id'];
    public static $statuses = [ //enum
        0, // Pending
        1, // Not Approved
        2  // Approved
    ];
}
