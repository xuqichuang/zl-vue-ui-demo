
### ZlSlideDelete
> 左滑删除，可以自定义滑动或不滑动，主要内容需根据组件需求而定义

[git源文件地址](https://github.com/xuqichuang/zl-slide-delete)
###### 使用方法

> html

```
<zl-slide-delete 
  :options="dataList"
  @delete-item="deleteFn" 
  @editor="editorFn"/>
```
> js

```
data:{
dataList:[
    {
      id:1,
      title:'他大舅',
      content:[
        12,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    },
    {
      id:2,
      title:'他二舅',
      content:[
        15,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点，臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    },
    {
      id:3,
      title:'都是他舅',
      content:[
        19,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    }
],// 数组里的content必须存在
}
methods:{
    editorFn(item){
      console.log(1,item)
    },
    deleteFn(index){
      this.dataList2.splice(index, 1)
    },
}
```
> 属性

| 名字            | 类型    | 默认值                                                            | 说明                           | 版本要求 |
| --------------- | ------- | ----------------------------------------------------------------- | ------------------------------ | -------- |
| options         | Array   | --                                                                | 传入的列表                     | --       |
| left            | String  | none，目前可选 'none', 'editor'                                   | 左侧编辑，删除选项             | --       |
| right           | String  | none，目前可选 'none', 'editor'                                   | 右侧选中，编辑选项             | --       |
| slideDelete     | Boolean | true，true 可以左滑删除， false 不可以左滑删除                    | 是否支持左滑删除               | --       |
| editor          | Boolean | true，true 可以编辑， false 不可以编辑                            | 列表是否可编辑                 | --       |
| leftImgOptions  | Object  | { img: require('./img/editor.png'),width: '20px',height: '20px' } | 左侧内容， 当left不为none显示  | --       |
| rightImgOptions | Object  | { img: require('./img/editor.png'),width: '20px',height: '20px' } | 右侧内容， 当right不为none显示 | --       |

> 事件

| 名字        | 参数          | 说明                                                             | 版本要求 |
| ----------- | ------------- | ---------------------------------------------------------------- | -------- |
| delete-item | (index，item) | index, Number 删除的索引，item, Object 数组中的某一项            | --       |
| editor      | (item)        | item, Object 数组中的某一项, 开发人员可以根据item 做编辑删除操作 | --       |

