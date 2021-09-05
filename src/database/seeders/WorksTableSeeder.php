<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 初期化
        DB::table('works')->delete();
  
        # テストデータ挿入
        DB::table('works')->insert([
            [
                'user_id'    => 1,
                'name'    => 'ウォーキング',
                'information'    => '健康のため毎朝１時間ウォーキング',
                'interval' => '00:30:00',
            ]
        ]);
        DB::table('works')->insert([
            [
                'user_id'    => 1,
                'name'    => 'プログラミング学習',
                'information'    => '基礎文法の習得',
                'interval' => '01:00:00',
            ]
        ]);
    }
}
