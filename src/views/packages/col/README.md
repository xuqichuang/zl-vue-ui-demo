### ZlRow ZlCol
> confirm layout布局
###### 使用方法

> html

```
<zl-row :gutter="20" align="center" :bottom="10" justify="space-between">
  <zl-col class="col" :span="6" offset="4">col</zl-col>
  <zl-col class="col" :span="6">col</zl-col>
  <zl-col class="col" :span="6">col</zl-col>
  <zl-col class="col" :span="6" offset="1">col</zl-col>
  <zl-col class="col" :span="6">col</zl-col>
  <zl-col class="col" :span="6">col</zl-col>
  <zl-col class="col" :span="6">col</zl-col>
</zl-row>
```

> ZlRow 属性

| 名字    | 类型             | 默认值 | 说明                                                            | 版本要求 |
| ------- | ---------------- | ------ | --------------------------------------------------------------- | -------- |
| justify | String           | start  | 对齐方式(可选: start, end, space-between, space-around, center) | --       |
| align   | String           | top    | 垂直对齐方式                                                    | --       |
| bottom  | [Number, String] | --     | 行间距                                                          | --       |

> ZlCol 属性

| 名字   | 类型             | 默认值 | 说明                             | 版本要求 |
| ------ | ---------------- | ------ | -------------------------------- | -------- |
| span   | [String, Number] | --     | 一共分成24份，列所占的宽度百分比 | --       |
| offset | [String, Number] | --     | 偏移宽度                         | --       |
