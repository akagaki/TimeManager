<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    use HasFactory;
    protected $guarded = array('id');

    public function records()
    {
        return $this->hasMany('App\Models\Record');
    }
}
