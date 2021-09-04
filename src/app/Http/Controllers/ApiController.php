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