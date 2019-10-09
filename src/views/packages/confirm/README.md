
### ZlConfirm
> confirm 提示框
###### 使用方法

> html

```
<zl-switch v-model="show"></zl-switch>
<zl-confirm v-model="show" title="标题" content="内容"></zl-confirm>
```
> js

```
data:{
    show:false
}

```
> 属性

| 名字       | 类型    | 默认值         | 说明              | 版本要求 |
| ---------- | ------- | -------------- | ----------------- | -------- |
| show       | Boolean | false          | 使用 v-model 绑定 | --       |
| title      | String  | --             | 标题              | --       |
| content    | String  | --             | 内容              | --       |
| leftText   | String  | 取消           | 左侧文字          | --       |
| rightText  | String  | 确定           | 右侧文字          | --       |
| background | String  | rgba(0,0,0,.6) | 弹层背景色        | --       |

> 事件

| 名字       | 参数 | 说明       | 版本要求 |
| ---------- | ---- | ---------- | -------- |
| on-cancel  | --   | 取消时触发 | --       |
| on-confirm | --   | 确定时触发 | --       |
