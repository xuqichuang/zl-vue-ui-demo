
### ZlCell
> 单元格
###### 使用方法

> html
```
<zl-cell-group title="group标题">
  <zl-cell v-for="(item, index) in dataList" :key="index" :title="item.title" :ftitle="item.age" :value="item.id" :label="item.text" placeholder="请输入内容" @click="cellClick"></zl-cell>
</zl-cell-group>
```
> js

```
data:{
    dataList:[
        {
          id:'1',
          title:'他大舅',
          age:'15',
          text:'浩丰科技暗红色的深度国际卡萨丁不过据可靠水电费较轻微日前金额'
        },
        {
          id:'2',
          title:'他二舅',
          age:'16',
          text:'浩丰科技暗红色的深度国际卡萨丁不过据可靠水电费较轻微日前金额啊实sdg打实大概'
        },
        {
          id:'3',
          title:'都是他舅',
          age:'18',
          text:'浩丰科技暗红色的深'
        }
  ],
  cellValue: '内容'
},
methods:{
    cellClick(){
        // 无返回值
    }
}
```
> 属性


| 名字        | 类型    | 默认值  | 说明                                      | 版本要求 |
| ----------- | ------- | ------- | ----------------------------------------- | -------- |
| title       | String  | --      | 标题                                      | --       |
| ftitle      | String  | --      | 副标题                                    | --       |
| value       | String  | --      | 内容 (valueType为input时使用 v-model绑定) | --       |
| label       | String  | --      | 描述信息                                  | --       |
| arrow       | String  | 'right' | 箭头方向（isLink为true时显示箭头）        | --       |
| isLink      | Boolean | false   | 是否带跳转                                | --       |
| valueType   | String  | 'text'  | 内容类型（可选 'text', 'input'）          | --       |
| center      | Boolean | true    | 内容是否居中                              | --       |
| placeholder | String  | --      | valueType为input时展示                    | --       |

> 插槽

| 名字        | 说明         | 版本要求 |
| ----------- | ------------ | -------- |
| title-left  | 标题左侧插槽 | --       |
| title-right | 标题右侧插槽 | --       |
| label       | 内容描述插槽 | --       |
| text-left   | 内容左侧插槽 | --       |
| text-right  | 内容右侧插槽 | --       |



> 事件

| 名字  | 参数 | 说明           | 版本要求 |
| ----- | ---- | -------------- | -------- |
| click | --   | 单元格列表点击 | --       |

