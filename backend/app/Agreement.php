<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agreement extends Model
{
    protected $fillable = ['file_path', 'owner_id', 'status', 'user_id', 'tenant_id'];
    public static $statuses = [ //enum
        0, // Pending
        1, // Not Approved
        2  // Approved
    ];
}
