
### ZlNotifyPlugin
> notify提示
###### 使用方法

> 方法

| 名字                       | 参数                   | 说明       | 版本要求 |
| -------------------------- | ---------------------- | ---------- | -------- |
| this.$zhenlv.notify.show() | 参考以下show()参数说明 | notify显示 | --       |
| this.$zhenlv.toast.hide()  | --                     | notify关闭 | --       |

> show 参数说明

| 名字       | 类型   | 默认值       | 说明                                        | 版本要求 |
| ---------- | ------ | ------------ | ------------------------------------------- | -------- |
| time       | Number | 2000         | 显示时间                                    | --       |
| text       | String | --           | 提示文字                                    | --       |
| height     | String | 40           | 提示高度                                    | --       |
| color      | String | #fff         | 提示颜色                                    | --       |
| background | String | #f44         | 提示背景颜色                                | --       |
| enterClass | String | bounceInDown | 显示动画效果，更改动画效果请参考animate.css | --       |
| leaveClass | String | slideOutUp   | 隐藏动画效果，更改动画效果请参考animate.css | --       |
