<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Work;
use App\Models\Record;



class ApiController extends Controller
{
    // ログイン情報取得
    public function loginUser()
    {
        $loginUser = Auth::user();
        return $loginUser;
    }
    // ワーク一覧取得
    public function userWorks()
    {
        $userWorks = Auth::user()->works->sortByDesc('id')->values();
        return $userWorks;
    }
    // トータル時間を取得
    public function totalTime()
    {   
        $data = json_decode(file_get_contents("php://input"), true);
        $recordData = Work::find($data['id'])->records;
        $total_second = 0;
        foreach($recordData as $record ){
                $time =explode(':', $record-> elapsed_time);
                $total_second += $time[0] * 60 * 60 + $time[1] * 60  + $time[2];
        }
        $total_time = floor($total_second / 3600) . gmdate(":i:s", $total_second);
        return $total_time;
    }
    // 月間時間を取得
    public function monthlyTime()
    {   
        $data = json_decode(file_get_contents("php://input"), true);
        $recordData = Work::find($data['id'])->records;
        $total_second = 0;
        $now = date('Y-m');
            foreach($recordData as $record ){
                    $create = $record->created_at;
                    $month =date('Y-m', strtotime($create));
                    if($month == $now ){
                        $time =explode(':', $record-> elapsed_time);
                        $total_second += $time[0] * 60 * 60 + $time[1] * 60  + $time[2];
                    }
            }
            $total_time = floor($total_second / 3600) . gmdate(":i:s", $total_second);
            return $total_time;
    }

    // 新規ワーク登録
    public function workAdd(Request $request)
    {   
        $data = json_decode(file_get_contents("php://input"), true);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'information' => 'required',
            'interval' => 'required',
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response("入力が正しくありません");
        }else{
            $work = new Work;
            unset($data['_token']);
            $work->fill($data)->save();
            return response("新規ワークを作成しました");
        }
    }
    // レコードを登録
    public function recordAdd(Request $request)
    {   
        $data = json_decode(file_get_contents("php://input"), true);
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'work_id' => 'required',
            'elapsed_time' => 'required',
        ]);
        if ($validator->fails()) {
            return response("入力が正しくありません");
        }else{
            $record = new Record;
            unset($data['_token']);
            $record->fill($data)->save();
            return response("経過時間を記録しました");
        }
    }
}