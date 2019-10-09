
### ZlRange
> 价格滑块，双向滑动，开发人员可以自定义最大值和最小值
###### 使用方法

> html

```
<v-range
  :max="rangeOptions.max"
  :min="rangeOptions.min"
  :space="150"
  :step="50"
  :point="3"
  :min-value="storeRange.minValue"
  :max-value="storeRange.maxValue"
  :status="showFlag"
  @min-move="minMove"
  @max-move="maxMove">
</v-range>
```
> js

```
data:{
    rangeOptions: {
        min: 0,
        max: 1050,
    },
    storeRange:{
        minValue:0,
        maxValue:1050
    },
    showFlag: false,
    
}
methods:{
    minMove (val) {
        this.storeRange.minValue = val
    },
    maxMove (val) {
        this.storeRange.maxValue = val
    },
}
```
> 属性

| 名字     | 类型             | 默认值 | 说明              | 版本要求 |
| -------- | ---------------- | ------ | ----------------- | -------- |
| step     | [String, Number] | 1      | 步长，默认是1像素 | --       |
| min      | [String, Number] | 0      | 可选的最小值      | --       |
| max      | [String, Number] | 100    | 可选的最大值      | --       |
| minValue | [String, Number] | 0      | 选中的最小值      | --       |
| maxValue | [String, Number] | --     | 选中的最大值      | --       |
| space    | [String, Number] | 10     | 每步滑动的像素    | --       |
| point    | [String, Number] | 10     | 一共滑几次到头    | --       |
| status   | Boolean          | true   | 弹框显示状态      | --       |

> 事件

| 名字    | 参数     | 说明             | 版本要求 |
| ------- | -------- | ---------------- | -------- |
| minMove | (String) | 切换最小值时触发 | --       |
| maxMove | (String) | 切换最大值时触发 | --       |

