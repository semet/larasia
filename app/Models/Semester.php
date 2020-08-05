<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    public function year()
    {
        return $this->belongsTo(Year::class);
    }
}
