(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a05fdde"],{4020:function(e,t,i){"use strict";var o=i("bc3a"),r=i.n(o),n=i("323e"),a=i.n(n),l=(i("a5d8"),i("5c96"));const s=r.a.create({baseURL:"https://gavana.top:8090/admin/",timeout:5e3});let d=r.a.CancelToken;s.interceptors.request.use(e=>{const t=window.localStorage.getItem("user")||"{}",i=JSON.parse(t);if("{}"!==t&&"ROLE_admin"!==i.role&&"get"!==e.method)return e.cancelToken=new d((function(e){e("演示模式，不允许操作")})),e;a.a.start();const o=window.localStorage.getItem("token");return o&&(e.headers.Authorization=o),e},e=>(console.info(e),Promise.reject(e))),s.interceptors.response.use(e=>{a.a.done();const t=e.data;if(200!==t.code){let e=t.msg||"Error";return l["Message"].error(e),Promise.reject(new Error(e))}return t},e=>(console.info(e),l["Message"].error(e.message),Promise.reject(e))),t["a"]=s},7540:function(e,t,i){"use strict";i("e875")},c361:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{attrs:{inline:""}},[i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加友链")])],1),i("el-form-item",{staticStyle:{"margin-left":"20px"}},[i("el-switch",{attrs:{"active-text":"页面评论"},on:{change:e.commentEnabledChanged},model:{value:e.infoForm.commentEnabled,callback:function(t){e.$set(e.infoForm,"commentEnabled",t)},expression:"infoForm.commentEnabled"}})],1)],1),i("el-table",{attrs:{data:e.friendList}},[i("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),i("el-table-column",{attrs:{label:"头像",width:"80"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("el-avatar",{attrs:{shape:"square",size:50,fit:"contain",src:e.row.avatar}})]}}])}),i("el-table-column",{attrs:{label:"昵称",prop:"nickname"}}),i("el-table-column",{attrs:{label:"描述",prop:"description"}}),i("el-table-column",{attrs:{label:"站点",prop:"website"}}),i("el-table-column",{attrs:{label:"是否公开",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-switch",{on:{change:function(i){return e.friendPublishedChanged(t.row)}},model:{value:t.row.published,callback:function(i){e.$set(t.row,"published",i)},expression:"scope.row.published"}})]}}])}),i("el-table-column",{attrs:{label:"浏览次数",prop:"views",width:"100"}}),i("el-table-column",{attrs:{label:"创建时间",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateFormat")(t.row.createTime)))]}}])}),i("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(i){return e.showEditDialog(t.row)}}},[e._v("编辑")]),i("el-popconfirm",{attrs:{title:"确定删除吗？",icon:"el-icon-delete",iconColor:"red"},on:{onConfirm:function(i){return e.deleteFriendById(t.row.id)}}},[i("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),i("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.queryInfo.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),i("el-form",{attrs:{"label-position":"top"}},[i("el-form-item",{attrs:{label:"友链页面信息"}},[i("mavon-editor",{model:{value:e.infoForm.content,callback:function(t){e.$set(e.infoForm,"content",t)},expression:"infoForm.content"}})],1),i("el-form-item",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.updateContent}},[e._v("保存")])],1)],1),i("el-dialog",{attrs:{title:"添加友链",width:"40%",visible:e.addDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[i("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.formRules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[i("el-input",{model:{value:e.addForm.nickname,callback:function(t){e.$set(e.addForm,"nickname",t)},expression:"addForm.nickname"}})],1),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}})],1),i("el-form-item",{attrs:{label:"网站",prop:"website"}},[i("el-input",{model:{value:e.addForm.website,callback:function(t){e.$set(e.addForm,"website",t)},expression:"addForm.website"}})],1),i("el-form-item",{attrs:{label:"头像URL",prop:"avatar"}},[i("el-input",{model:{value:e.addForm.avatar,callback:function(t){e.$set(e.addForm,"avatar",t)},expression:"addForm.avatar"}})],1),i("el-form-item",{attrs:{label:"是否公开",prop:"published"}},[i("el-switch",{model:{value:e.addForm.published,callback:function(t){e.$set(e.addForm,"published",t)},expression:"addForm.published"}})],1)],1),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.saveFriend}},[e._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"编辑友链",width:"40%",visible:e.editDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[i("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.formRules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[i("el-input",{model:{value:e.editForm.nickname,callback:function(t){e.$set(e.editForm,"nickname",t)},expression:"editForm.nickname"}})],1),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),i("el-form-item",{attrs:{label:"网站",prop:"website"}},[i("el-input",{model:{value:e.editForm.website,callback:function(t){e.$set(e.editForm,"website",t)},expression:"editForm.website"}})],1),i("el-form-item",{attrs:{label:"头像URL",prop:"avatar"}},[i("el-input",{model:{value:e.editForm.avatar,callback:function(t){e.$set(e.editForm,"avatar",t)},expression:"editForm.avatar"}})],1),i("el-form-item",{attrs:{label:"是否公开",prop:"published"}},[i("el-switch",{model:{value:e.editForm.published,callback:function(t){e.$set(e.editForm,"published",t)},expression:"editForm.published"}})],1)],1),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.editFriend}},[e._v("确 定")])],1)],1)],1)},r=[],n=i("6350"),a=i("4020");function l(e){return Object(a["a"])({url:"friends",method:"GET",params:{...e}})}function s(e,t){return Object(a["a"])({url:"friend/published",method:"PUT",params:{id:e,published:t}})}function d(e){return Object(a["a"])({url:"friend",method:"POST",data:{...e}})}function c(e){return Object(a["a"])({url:"friend",method:"PUT",data:{...e}})}function m(e){return Object(a["a"])({url:"friend",method:"DELETE",params:{id:e}})}function u(){return Object(a["a"])({url:"friendInfo",method:"GET"})}function p(e){return Object(a["a"])({url:"friendInfo/commentEnabled",method:"PUT",params:{commentEnabled:e}})}function f(e){return Object(a["a"])({url:"friendInfo/content",method:"PUT",data:{content:e}})}var b={name:"FriendList",components:{Breadcrumb:n["a"]},data(){return{infoForm:{content:"",commentEnabled:!0},queryInfo:{pageNum:1,pageSize:10},friendList:[],total:0,addDialogVisible:!1,editDialogVisible:!1,addForm:{nickname:"",description:"",website:"",avatar:"",published:!0},editForm:{nickname:"",description:"",website:"",avatar:"",published:!0},formRules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}],website:[{required:!0,message:"请输入网站",trigger:"blur"}],avatar:[{required:!0,message:"请输入头像URL",trigger:"blur"}]}}},created(){this.getFriendList(),this.getInfo()},methods:{getInfo(){u().then(e=>{this.infoForm=e.data})},updateContent(){f(this.infoForm.content).then(e=>{this.msgSuccess(e.msg),this.getInfo()})},commentEnabledChanged(){p(this.infoForm.commentEnabled).then(e=>{this.msgSuccess(e.msg)})},getFriendList(){l(this.queryInfo).then(e=>{this.friendList=e.data.list,this.total=e.data.total})},handleSizeChange(e){this.queryInfo.pageSize=e,this.getFriendList()},handleCurrentChange(e){this.queryInfo.pageNum=e,this.getFriendList()},friendPublishedChanged(e){s(e.id,e.published).then(e=>{this.msgSuccess(e.msg)})},deleteFriendById(e){m(e).then(e=>{this.getFriendList(),this.msgSuccess(e.msg)})},showEditDialog(e){this.editForm={...e},this.editDialogVisible=!0},addDialogClosed(){this.$refs.addFormRef.resetFields()},editDialogClosed(){this.editForm={},this.$refs.editFormRef.resetFields()},saveFriend(){this.$refs.addFormRef.validate(e=>{e&&d(this.addForm).then(e=>{this.getFriendList(),this.msgSuccess(e.msg),this.addDialogVisible=!1})})},editFriend(){this.$refs.editFormRef.validate(e=>{e&&c(this.editForm).then(e=>{this.getFriendList(),this.msgSuccess(e.msg),this.editDialogVisible=!1})})}}},h=b,g=(i("7540"),i("2877")),F=Object(g["a"])(h,o,r,!1,null,"1bacf94c",null);t["default"]=F.exports},e875:function(e,t,i){}}]);