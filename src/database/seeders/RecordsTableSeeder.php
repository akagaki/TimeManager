<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Record;

class RecordsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 1,
                'elapsed_time' => '01:10:10',
                'created_at' => '2021-08-01 08:00:00',
                'updated_at' => '2021-08-01 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 1,
                'elapsed_time' => '01:10:20',
                'created_at' => '2021-08-02 08:00:00',
                'updated_at' => '2021-08-02 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 1,
                'elapsed_time' => '01:33:32',
                'created_at' => '2021-09-01 08:00:00',
                'updated_at' => '2021-09-01 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 1,
                'elapsed_time' => '01:00:31',
                'created_at' => '2021-09-02 08:00:00',
                'updated_at' => '2021-09-02 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 1,
                'elapsed_time' => '01:10:10',
                'created_at' => '2021-09-03 08:00:00',
                'updated_at' => '2021-09-03 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '05:10:10',
                'created_at' => '2021-09-03 08:00:00',
                'updated_at' => '2021-09-03 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '46:12:10',
                'created_at' => '2021-09-02 08:00:00',
                'updated_at' => '2021-09-02 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '10:10:13',
                'created_at' => '2021-09-01 08:00:00',
                'updated_at' => '2021-09-01 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '22:10:10',
                'created_at' => '2021-08-04 08:00:00',
                'updated_at' => '2021-08-04 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '05:10:10',
                'created_at' => '2021-08-03 08:00:00',
                'updated_at' => '2021-08-03 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '05:12:10',
                'created_at' => '2021-08-02 08:00:00',
                'updated_at' => '2021-08-02 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '10:10:13',
                'created_at' => '2021-08-01 08:00:00',
                'updated_at' => '2021-08-01 08:00:00',
            ]);
            $record->save();
            $record = new Record(
            [
                'user_id'    => 1,
                'work_id' => 2,
                'elapsed_time' => '22:10:10',
                'created_at' => '2021-08-04 08:00:00',
                'updated_at' => '2021-08-04 08:00:00',
            ]);
            $record->save();
    }
}
