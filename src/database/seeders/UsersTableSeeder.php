<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 初期化
        DB::table('users')->delete();
  
        # テストデータ挿入
        DB::table('users')->insert([
            [
                'name'    => 'サンプルユーザー',
                'email' => 'sample@sample',
                'password' => bcrypt('k0123456'),
            ]
        ]);
    }
}
