<?php

namespace App\Models;

use HasPermissions;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasPermissions;

    public function permissions() {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }

    public function hasPermissionTo(...$permissions) {
        return $this->permissions()->WhereIn('slug', $permissions)->count();
    }
}
