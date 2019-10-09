

### ZlCalendar
> 仿照美团酒店编写的日历组件，展示选中区间
###### 使用方法

> html
```
<zl-switch v-model="show"></zl-switch>
<zl-calendar v-model="show" @change="calendarChange"/>
```
> js

```
data:{
    selectedData:[],
    show: false
},
methods:{
    calendarChange(val){
        this.selectedData = val
    }
}
```
> 属性


| 名字         | 类型            | 默认值                                                                    | 说明                                          | 版本要求 |
| ------------ | --------------- | ------------------------------------------------------------------------- | --------------------------------------------- | -------- |
| close        | String          | ×                                                                         | 关闭文字                                      | --       |
| color        | String          | rgb(17,55,160)                                                            | 选中的背景色                                  | --       |
| lightColor   | String          | rgb(17,55,160,.15)                                                        | 开始结束之间的背景色                          | --       |
| title        | String          | 选择日期                                                                  | 标题文字                                      | --       |
| months       | [Number,String] | 6                                                                         | 月份长度                                      | --       |
| type         | String          | double                                                                    | 选择类型 // start 开始, end 结束, double 双选 | --       |
| selectedDate | Array           | [moment().format('YYYY-MM-DD'),moment().add(1, 'd').format('YYYY-MM-DD')] | 默认选中日期                                  | --       |
| selectedText | Array           | ['入店','离店']                                                           | 选中的文字，顺序不可颠倒                      | --       |


> 事件

| 名字   | 参数                 | 说明               | 版本要求 |
| ------ | -------------------- | ------------------ | -------- |
| change | (Array,selectedDate) | 切换选中的日期区间 | --       |

