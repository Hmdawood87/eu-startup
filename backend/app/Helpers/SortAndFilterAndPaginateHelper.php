<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Schema;

class SortAndFilterAndPaginateHelper
{
    public static function filterAndSortAndPaginate($objects, $request, $table)
    {
        $all_fields = $request->all();
//        unset($all_fields["organization_id"]);
        $keywords = [];
        foreach($all_fields as $key => $item){
            if(Schema::hasColumn($table, $key)){
                array_push($keywords, [$key => $item]);
            }
        }

//        $val = '';
//        $count = 0;
//        $data = [];
//        foreach ($all_fields as $key => $field){
//            $param = explode('_', $key);
//            if(count($param) == 2 && $key != 'organization_id'){
//                if($val == '')
//                    $val = $param[0];
//                else{
//                    if($val == $param[0])
//                        $count++;
//                    else
//                        $count = 0;
//                }
//                array_push($data, [$param[0] => $field]);
//            }
//        }
//
//        if($count == 0){
//            $data = array_reverse($data);
//            foreach ($data as $datum){
//                foreach ($datum as $key => $item) {
//                    $filter_by = ucwords($key);
//                    $model = 'App\\' . $filter_by;
//                    $filter_ids = $model::where('name', 'like', '%' . $item . '%')->select('id','name')->get();
//                }
//            }
//        }
//        dd(12);
//
//        foreach ($all_fields as $key => $field){
//            $param = explode('_', $key);
//            if(count($param) == 2 && $key != 'organization_id'){
//                $lower_value = strtolower($param[0]);
//                $filter_by = ucwords($lower_value);
//                $model = 'App\\' . $filter_by;
//                $filter_ids = $model::where($param[1], 'like', '%' . $field . '%')->select('id','name')->get();
//                if($filter_ids->count())
//                {
//                    $objects->where($lower_value.'_id', $filter_ids[0]->id);
//                    unset($filter_ids[0]);
//                    if(count($filter_ids) > 1){
//                        foreach ($filter_ids as $filter_id){
//                            $objects->orWhere($lower_value.'_id', $filter_id->id);
//                        }
//                    }
//                } else
//                    return null;
//            }
//        }
//        dd(12);
//        if(array_key_exists('filter_by', $all_fields)){
//            $lower_value = strtolower($all_fields["filter_by"]);
//            $filter_by = ucwords($lower_value);
//            $model = 'App\\' . $filter_by;
//            $filter_ids = $model::where('name', 'like', '%' . $all_fields["filter_value"] . '%')->select('id','name')->get();
//            if($filter_ids->count())
//            {
//                $objects->where($lower_value.'_id', $filter_ids[0]->id);
//                unset($filter_ids[0]);
//                if(count($filter_ids) > 1){
//                    foreach ($filter_ids as $filter_id){
//                        $objects->orWhere($lower_value.'_id', $filter_id->id);
//                    }
//                }
//            } else
//                return null;
//        }
        $objects->where(function ($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                foreach ($keyword as $key => $item){
                    if(gettype($item) == 'array')
                        $query->whereIn($key, $item);
                    else
                        $query->where($key, 'like', '%' . $item . '%');
                }
            }
        });
        if($request->order_by && $request->order_type)
            $objects->orderBy($request->order_by, $request->order_type);
        if($request->limit)
            $objects = $objects->paginate($request->limit);
        else
            $objects = $objects->get();
        return $objects;
    }
}
