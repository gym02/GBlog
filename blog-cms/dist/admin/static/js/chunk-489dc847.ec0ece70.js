(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-489dc847"],{4020:function(e,t,a){"use strict";var o=a("bc3a"),i=a.n(o),r=a("323e"),n=a.n(r),s=(a("a5d8"),a("5c96"));const l=i.a.create({baseURL:"https://gavana.top:8090/admin/",timeout:5e3});let d=i.a.CancelToken;l.interceptors.request.use(e=>{const t=window.localStorage.getItem("user")||"{}",a=JSON.parse(t);if("{}"!==t&&"ROLE_admin"!==a.role&&"get"!==e.method)return e.cancelToken=new d((function(e){e("演示模式，不允许操作")})),e;n.a.start();const o=window.localStorage.getItem("token");return o&&(e.headers.Authorization=o),e},e=>(console.info(e),Promise.reject(e))),l.interceptors.response.use(e=>{n.a.done();const t=e.data;if(200!==t.code){let e=t.msg||"Error";return s["Message"].error(e),Promise.reject(new Error(e))}return t},e=>(console.info(e),s["Message"].error(e.message),Promise.reject(e))),t["a"]=l},a9f4:function(e,t,a){"use strict";a("ce73")},ce73:function(e,t,a){},d865:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加分类")])],1)],1),a("el-table",{attrs:{data:e.categoryList}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),a("el-table-column",{attrs:{label:"名称",prop:"name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.showEditDialog(t.row)}}},[e._v("编辑")]),a("el-popconfirm",{attrs:{title:"确定删除吗？",icon:"el-icon-delete",iconColor:"red"},on:{onConfirm:function(a){return e.deleteCategoryById(t.row.id)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.queryInfo.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"添加分类",width:"50%",visible:e.addDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addCategory}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑分类",width:"50%",visible:e.editDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[a("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editCategory}},[e._v("确 定")])],1)],1)],1)},i=[],r=a("6350"),n=a("4020");function s(e){return Object(n["a"])({url:"categories",method:"GET",params:{...e}})}function l(e){return Object(n["a"])({url:"category",method:"POST",data:{...e}})}function d(e){return Object(n["a"])({url:"category",method:"PUT",data:{...e}})}function c(e){return Object(n["a"])({url:"category",method:"DELETE",params:{id:e}})}var u={name:"CategoryList",components:{Breadcrumb:r["a"]},data(){return{queryInfo:{pageNum:1,pageSize:10},categoryList:[],total:0,addDialogVisible:!1,editDialogVisible:!1,addForm:{name:""},editForm:{},formRules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},created(){this.getData()},methods:{getData(){s(this.queryInfo).then(e=>{this.categoryList=e.data.list,this.total=e.data.total})},handleSizeChange(e){this.queryInfo.pageSize=e,this.getData()},handleCurrentChange(e){this.queryInfo.pageNum=e,this.getData()},addDialogClosed(){this.$refs.addFormRef.resetFields()},editDialogClosed(){this.editForm={},this.$refs.editFormRef.resetFields()},addCategory(){this.$refs.addFormRef.validate(e=>{e&&l(this.addForm).then(e=>{this.msgSuccess(e.msg),this.addDialogVisible=!1,this.getData()})})},editCategory(){this.$refs.editFormRef.validate(e=>{e&&d(this.editForm).then(e=>{this.msgSuccess(e.msg),this.editDialogVisible=!1,this.getData()})})},showEditDialog(e){this.editForm={...e},this.editDialogVisible=!0},deleteCategoryById(e){c(e).then(e=>{this.msgSuccess(e.msg),this.getData()})}}},m=u,g=(a("a9f4"),a("2877")),f=Object(g["a"])(m,o,i,!1,null,"3a1ebf51",null);t["default"]=f.exports}}]);