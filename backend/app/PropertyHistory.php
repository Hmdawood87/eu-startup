<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PropertyHistory extends Model
{
    protected $fillable = ["tenant_id", "owner_id", 'property_id'];
    protected $nullable = ['tenant_id'];

    public function tenant()
    {
        return $this->belongsTo("App\Tenant");
    }

    public function owner()
    {
        return $this->belongsTo("App\Owner");
    }

    public function property()
    {
        return $this->belongsTo("App\Property");
    }
}
