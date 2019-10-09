
### ZlSwitch
> switch选择器
###### 使用方法

> html

```
<zl-switch v-model="checked" @change="change"></zl-switch>
```
> js

```
data:{
    checked:false
},
methods:{
  change(checked){

  }
}

```
> 属性

| 名字     | 类型    | 默认值 | 说明                                  | 版本要求 |
| -------- | ------- | ------ | ------------------------------------- | -------- |
| checked  | Boolean | false  | 选中状态                              | --       |
| disabled | Boolean | false  | 不可选中                              | --       |
| options  | Object  | --     | {show:'选中文案', hide: '不选中文案'} | --       |

> 事件

| 名字   | 参数      | 说明               | 版本要求 |
| ------ | --------- | ------------------ | -------- |
| change | (Boolean) | 切换选中样式时触发 | --       |  |
