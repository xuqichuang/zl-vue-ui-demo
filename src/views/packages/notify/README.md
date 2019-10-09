
### ZlNotify
> notify提示
###### 使用方法

> html

```
<zl-switch v-model="show"></zl-switch>
<zl-notify v-model="show" @change="change" text="提示文案"/>
```
> js

```
data:{
    show: false
},
methods:{
    change(val){
        
    }
}
```
> 属性

| 名字       | 类型    | 默认值       | 说明                                        | 版本要求 |
| ---------- | ------- | ------------ | ------------------------------------------- | -------- |
| show       | Boolean | false        | 控制notify显示，使用v-model绑定             | --       |
| time       | Number  | 2000         | 显示时间                                    | --       |
| text       | String  | --           | 提示文字                                    | --       |
| height     | String  | 40           | 提示高度                                    | --       |
| color      | String  | #fff         | 提示颜色                                    | --       |
| background | String  | #f44         | 提示背景颜色                                | --       |
| enterClass | String  | bounceInDown | 显示动画效果，更改动画效果请参考animate.css | --       |
| leaveClass | String  | slideOutUp   | 隐藏动画效果，更改动画效果请参考animate.css | --       |

> 事件

| 名字   | 参数      | 说明               | 版本要求 |
| ------ | --------- | ------------------ | -------- |
| change | (Boolean) | notify显示状态切换 | --       |