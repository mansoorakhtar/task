<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['title', 'description'];

    /**
     * @var bool
     */
    public $timestamps = false;
}
