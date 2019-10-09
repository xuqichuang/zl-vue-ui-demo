
### ZlActionSheet
> 上拉菜单
###### 使用方法

> html
```
<zl-switch v-model="show"></zl-switch>
<zl-action-sheet :options="actionOptions" v-model="show" disabled="disabled" @on-cancel="cancel" @on-select="select"></zl-action-sheet>
```
> js

```
data:{
    show: false,
    actionOptions: [{
        name: '标题1',
        id: 123,
        disabled:true
    },{
        name: '标题2',
        id: 1234
    },{
        name: '标题3',
        id: 1235
    }],
},
methods:{
    cancel(){

    },
    select(item, index){

    }
}
```
> 属性


| 名字          | 类型    | 默认值         | 说明                                                       | 版本要求 |
| ------------- | ------- | -------------- | ---------------------------------------------------------- | -------- |
| background    | String  | rgba(0,0,0,.6) | 模态框背景颜色                                             | --       |
| options       | Array   | --             | actionsheet 列表                                           | --       |
| name          | String  | name           | 列表标题，定义显示的标题字段，必填                         | --       |
| desc          | String  | desc           | 列表副标题，定义显示的副标题字段，没有则不显示             | --       |
| cancelText    | String  | ''             | 取消按钮                                                   | --       |
| disabled      | String  | disabled       | 列表是否可选中，定义不支持选中字段，没有这个字段则支持选中 | --       |
| itemClickHide | Boolean | true           | 选中列表关闭                                               | --       |

> 事件

| 名字      | 参数          | 说明                                                  | 版本要求 |
| --------- | ------------- | ----------------------------------------------------- | -------- |
| on-select | (item, index) | 列表选中时触发，item: 选中的对象, index：选中的下标值 | --       |
| on-cancel | --            | 点击取消时触发                                        | --       |

