webpackJsonp([17],{"/iMJ":function(n,t){n.exports='<h3 id="zlconfirmplugin">ZlConfirmPlugin</h3>\n<blockquote>\n<p>confirm 提示框</p>\n</blockquote>\n<h6 id="使用方法">使用方法</h6>\n<blockquote>\n<p>方法</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>名字</th>\n<th>参数</th>\n<th>说明</th>\n<th>版本要求</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>this.$zhenlv.confirm.show()</td>\n<td>{type:&#39;&#39;,content:&#39;&#39;,onConfirm(){},onCancel(){}}</td>\n<td>弹窗显示</td>\n<td>--</td>\n</tr>\n<tr>\n<td>this.$zhenlv.confirm.hide()</td>\n<td>--</td>\n<td>弹窗关闭</td>\n<td>--</td>\n</tr>\n</tbody></table>\n<p>参数1 type: 标题</p>\n<p>参数2 content: 内容</p>\n<p>参数3 onConfirm(){}: 确认时触发</p>\n<p>参数4 onCancel(){}: 取消时触发</p>\n'},"Sj/e":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("Dd8w"),d=e.n(o),l=e("NYxO"),i=e("/iMJ"),r=e.n(i),a={data:function(){return{md:r.a}},computed:d()({},Object(l.b)({editable:function(n){return n.mavonEditor.editable},defaultOpen:function(n){return n.mavonEditor.defaultOpen},toolbarsFlag:function(n){return n.mavonEditor.toolbarsFlag},subfield:function(n){return n.mavonEditor.subfield}}))},u={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"actionsheet"},[e("zl-useage",[e("mavon-editor",{attrs:{editable:n.editable,"default-open":n.defaultOpen,toolbarsFlag:n.toolbarsFlag,subfield:n.subfield},model:{value:n.md,callback:function(t){n.md=t},expression:"md"}})],1),n._v(" "),e("zl-exhibition")],1)},staticRenderFns:[]},c=e("VU/8")(a,u,!1,null,null,null);t.default=c.exports}});