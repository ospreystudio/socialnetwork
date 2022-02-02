<?php

namespace App\Models;

use App\Traits\HasPermissions;

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

    public function scopeDeveloper($query) {
        return $query->where('slug', 'developer');
    }
    public function scopeAdmin($query) {
        return $query->where('slug', 'admin');
    }
}
