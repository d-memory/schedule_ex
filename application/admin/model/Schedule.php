<?php

namespace app\admin\model;

use think\Model;


class Schedule extends Model
{

    

    

    // 表名
    protected $name = 'schedule';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'typelist_text',
        'originatorlist_text',
        'remindtime_text',
        'starttime_text'
    ];
    

    
    public function getTypelistList()
    {
        return ['1' => __('Typelist 1'), '2' => __('Typelist 2')];
    }

    public function getOriginatorlistList()
    {
        return ['1' => __('Originatorlist 1'), '2' => __('Originatorlist 2')];
    }


    public function getTypelistTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['typelist']) ? $data['typelist'] : '');
        $list = $this->getTypelistList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getOriginatorlistTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['originatorlist']) ? $data['originatorlist'] : '');
        $list = $this->getOriginatorlistList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getRemindtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['remindtime']) ? $data['remindtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getStarttimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['starttime']) ? $data['starttime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setRemindtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }

    protected function setStarttimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
