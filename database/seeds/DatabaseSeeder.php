<?php

use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $admin = new Admin;
        $admin->name = 'Admin Boongan';
        $admin->email = 'admin@admin.com';
        $admin->password = bcrypt('password');

        $admin->save();
    }
}
