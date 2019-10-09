
### ZlCheckbox
> 多选框
###### 使用方法

> html
```
<zl-checkbox v-model="checked" :len="len" :max="max" @change="change"></zl-checkbox>
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

| 名字     | 类型             | 默认值 | 说明             | 版本要求 |
| -------- | ---------------- | ------ | ---------------- | -------- |
| checked  | Boolean          | false  | 选中状态         | --       |
| disabled | Boolean          | false  | 不可选中         | --       |
| len      | [Number, String] | --     | 当前选中长度     | --       |
| max      | [Number, String] | --     | 允许选择最大长度 | --       |

> 事件

| 名字   | 参数      | 说明               | 版本要求 |
| ------ | --------- | ------------------ | -------- |
| change | (Boolean) | 切换选中样式时触发 | --       |
