<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Work;


class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        # テストデータ挿入
                $work = new Work(
                [
                    'user_id'    => 1,
                    'name'    => 'ウォーキング',
                    'information'    => '健康のため毎朝１時間ウォーキング',
                    'interval' => '00:30:00'
                ]);
                $work->save();
                $work = new Work(
                [
                    'user_id'    => 1,
                    'name'    => 'プログラミング学習',
                    'information'    => '基礎文法の習得',
                    'interval' => '01:00:00'
                ]);
                $work->save();
    }              
}
