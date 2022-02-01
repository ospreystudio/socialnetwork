<?php
namespace App\Traits;
use App\Models\Permission;

trait HasPermissions {

    public function hasPermissionTo(...$permissions) {
        return $this->permissions()->whereIn('slug', $permissions)->count() ||
            $this->roles()->whereHas('permissions', function ($q) use ($permissions) {
                $q->whereIn('slug', $permissions);
            })->count();
    }
    public function givePermissionTo(...$permissions)
    {
        $this->permissions()->attach($this->getPermissionIdsBySlug($permissions));
    }

    public function getPermissionIdsBySlug($permissions) {
        return Permission::whereIn('slug', $permissions)->get()->pluch('id')->toArray();
    }

    public function setPermissions(...$permissions) {
        $this->permissions()->sync($this->getPermissionIdsBySlug($permissions));
    }

    public function detachPermissions(...$permissions) {
        $this->permissions()->detach($this->getPermissionIdsBySlug($permissions));
    }




}
