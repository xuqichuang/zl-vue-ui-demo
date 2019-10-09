
### ZlDialog
> dialog弹框
###### 使用方法

> html

```
<zl-dialog v-model="show"  @change="change"></zl-dialog>
```
> js

```
data:{
    show:false
},
methods:{
  change(show){

  }
}

```
> 属性

| 名字       | 类型    | 默认值         | 说明              | 版本要求 |
| ---------- | ------- | -------------- | ----------------- | -------- |
| show       | Boolean | false          | 使用 v-model 绑定 | --       |
| background | String  | rgba(0,0,0,.6) | 弹框背景色        | --       |

