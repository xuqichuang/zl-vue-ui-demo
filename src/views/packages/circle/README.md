
### ZlCircle
> 环形进度条
###### 使用方法

> html
```
<zl-circle
    :percent="percent"
    :stroke-color="['#04BE02', '#3FC7FA']">
    <span>{{ percent }}%</span>
</zl-circle>
<button @click="circleClick">circle增加</button>
```
> js

```
data:{
    percent: 0
},
methods:{
    circleClick(){
      this.percent += 10
    },
}
```
> 属性

| 名字          | 类型           | 默认值  | 说明                                                | 版本要求 |
| ------------- | -------------- | ------- | --------------------------------------------------- | -------- |
| strokeWidth   | Number         | 5       | 描边宽度                                            | --       |
| strokeColor   | [String,Array] | #3FC7FA | 描边颜色，数组格式为渐变颜色，目前只支持2种颜色渐变 | --       |
| trailWidth    | Number         | 5       | 背景线条宽度                                        | --       |
| trailColor    | String         | #D9D9D9 | 背景线条颜色                                        | --       |
| percent       | Number         | 0       | 进度百分比                                          | --       |
| strokeLinecap | String         | round   | 路径两端的形状，可选属性 butt                       | round    | square | inherit |  | -- |
| anticlockwise | Boolean        | false   | 按逆时针方向展示百分比， false:顺时针，true:逆时针  | --       |

> 插槽

| 名字     | 说明             | 版本要求 |
| -------- | ---------------- | -------- |
| 默认插槽 | 圆圈中间显示内容 | --       |
