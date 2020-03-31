define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'schedule/index' + location.search,
                    add_url: 'schedule/add',
                    edit_url: 'schedule/edit',
                    del_url: 'schedule/del',
                    multi_url: 'schedule/multi',
                    table: 'schedule',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'typelist', title: __('Typelist'), searchList: {"1":__('Typelist 1'),"2":__('Typelist 2')}, formatter: Table.api.formatter.normal},
                        {field: 'originatorlist', title: __('Originatorlist'), searchList: {"1":__('Originatorlist 1'),"2":__('Originatorlist 2')}, formatter: Table.api.formatter.normal},
                        {field: 'remindtime', title: __('Remindtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'starttime', title: __('Starttime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});