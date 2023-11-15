(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d22e36"],{"0dd9":function(t,e,i){"use strict";i("7c26")},"1db4":function(t,e,i){"use strict";i("9596")},"7c26":function(t,e,i){},9596:function(t,e,i){},b6a0:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",[i("el-select",{staticStyle:{"min-width":"300px"},attrs:{placeholder:"请选择仓库",filterable:!0},on:{change:t.changeRepos},model:{value:t.activeRepos,callback:function(e){t.activeRepos=e},expression:"activeRepos"}},t._l(t.reposList,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),i("el-cascader",{key:t.resourceShow,staticStyle:{"min-width":"450px"},attrs:{placeholder:"请选择目录",options:t.pathArr,props:t.pathProps,disabled:!t.activeRepos},model:{value:t.activePath,callback:function(e){t.activePath=e},expression:"activePath"}}),i("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-search",disabled:!t.activeRepos},on:{click:t.search}},[t._v("查询")]),i("el-switch",{attrs:{"active-text":"CDN","inactive-text":"源站",disabled:!t.activeRepos},model:{value:t.isCDN,callback:function(e){t.isCDN=e},expression:"isCDN"}}),i("el-button",{staticClass:"right-item",attrs:{type:"primary",size:"medium",icon:"el-icon-upload",disabled:!t.activeRepos},on:{click:function(e){t.isDrawerShow=!t.isDrawerShow}}},[t._v("上传")])],1),t.hintShow1?i("el-alert",{attrs:{title:"只显示<img>标签支持的 apng,avif,bmp,gif,ico,cur,jpg,jpeg,jfif,pjpeg,pjp,png,svg,tif,tiff,webp 格式的图片，见 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img",type:"warning","show-icon":"","close-text":"不再提示"},on:{close:function(e){return t.noDisplay(1)}}}):t._e(),t.hintShow2?i("el-alert",{attrs:{title:"仅支持获取1000个文件内的目录，超出则将请求失败",type:"warning","show-icon":"","close-text":"不再提示"},on:{close:function(e){return t.noDisplay(2)}}}):t._e(),t.hintShow3?i("el-alert",{attrs:{title:"不可上传同名文件，否则将收到422错误码，如需替换，请先删除原文件",type:"warning","show-icon":"","close-text":"不再提示"},on:{close:function(e){return t.noDisplay(3)}}}):t._e(),i("el-row",{directives:[{name:"viewer",rawName:"v-viewer"}]},t._l(t.fileList,(function(e,s){return i("div",{key:s,staticClass:"image-container"},[i("el-image",{attrs:{src:t.imgUrl(e),fit:"scale-down"}}),i("div",{staticClass:"image-content"},[i("div",{staticClass:"info"},[i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"icons"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"复制CDN链接",placement:"bottom"}},[i("i",{staticClass:"icon el-icon-link",on:{click:function(i){return t.copy(1,e)}}})]),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"复制MD格式",placement:"bottom"}},[i("SvgIcon",{attrs:{"icon-class":"markdown","class-name":"icon"},on:{click:function(i){return t.copy(2,e)}}})],1),i("i",{staticClass:"icon el-icon-delete",on:{click:function(i){return t.delFile(e)}}})],1)])],1)})),0),i("el-drawer",{attrs:{title:"上传文件",visible:t.isDrawerShow,direction:"rtl",size:"40%",wrapperClosable:!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.isDrawerShow=e}}},[i("el-row",[i("el-radio",{attrs:{label:"1"},model:{value:t.nameType,callback:function(e){t.nameType=e},expression:"nameType"}},[t._v("使用源文件名")]),i("el-radio",{attrs:{label:"2"},model:{value:t.nameType,callback:function(e){t.nameType=e},expression:"nameType"}},[t._v("使用UUID文件名")]),i("el-button",{directives:[{name:"throttle",rawName:"v-throttle",value:[t.submitUpload,"click",3e3],expression:"[submitUpload,`click`,3000]"}],attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[t._v("确定上传")])],1),i("el-row",[t._v(" 当前目录："+t._s(t.realPath)+" ")]),i("el-row",[i("el-switch",{attrs:{"active-text":"自定义目录"},model:{value:t.isCustomPath,callback:function(e){t.isCustomPath=e},expression:"isCustomPath"}}),i("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"例：oldFolder/newFolder/",disabled:!t.isCustomPath,size:"medium"},model:{value:t.customPath,callback:function(e){t.customPath=e},expression:"customPath"}})],1),i("el-upload",{ref:"uploadRef",attrs:{action:"","http-request":t.upload,drag:"",multiple:"","file-list":t.uploadList,"list-type":"picture","auto-upload":!1}},[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])])])],1)],1)},a=[],o=i("c00a"),n=i("c9f7"),l=i("c54a"),r=i("f988"),c=i("f43e");let u=[],h=null;function p(){if(0===u.length)return clearInterval(h),void(h=null);let t=u.shift();t(),0===u.length&&(clearInterval(h),h=null)}function d(t,e){u.push(t),h||(p(),h=setInterval(p,e))}var m={name:"GithubManage",components:{SvgIcon:o["a"]},data(){return{reposList:[],pathArr:[{value:"",label:"根目录"}],activeRepos:"",activePath:[""],pathProps:{lazy:!0,checkStrictly:!0,lazyLoad:async(t,e)=>{let i=t.path.join("/"),s=[];await this.getReposContents(s,i),e(s)}},hintShow1:!0,hintShow2:!0,hintShow3:!0,fileList:[],resourceShow:0,isDrawerShow:!1,nameType:"1",uploadList:[],isCDN:!0,isCustomPath:!1,customPath:""}},computed:{realPath(){return this.isCustomPath?`/${this.userInfo.login}/${this.activeRepos}/${this.customPath}`:`/${this.userInfo.login}/${this.activeRepos}${this.activePath.join("/")}/`}},created(){this.hintShow1=!localStorage.getItem("hintShow1"),this.hintShow2=!localStorage.getItem("hintShow2"),this.hintShow3=!localStorage.getItem("hintShow3");const t=localStorage.getItem("githubToken"),e=localStorage.getItem("githubUserInfo");t&&e?(this.userInfo=JSON.parse(e),this.getRepos()):(this.msgError("请先配置Token"),this.$router.push("/pictureHosting/setting"))},methods:{getRepos(){Object(n["d"])(this.userInfo.login).then(t=>{this.reposList=t})},changeRepos(){this.resourceShow++,this.activePath=[""],this.fileList=[]},async getReposContents(t,e){await Object(n["b"])(this.userInfo.login,this.activeRepos,e).then(e=>{e.forEach(e=>{"dir"===e.type&&t.push({value:e.name,label:e.name,leaf:!1})})})},search(){this.fileList=[];let t=this.activePath.join("/");Object(n["b"])(this.userInfo.login,this.activeRepos,t).then(t=>{t.forEach(t=>{"file"===t.type&&Object(l["b"])(t.name)&&this.fileList.push(t)})})},noDisplay(t){localStorage.setItem("hintShow"+t,"1")},imgUrl(t){return this.isCDN?`https://fastly.jsdelivr.net/gh/${this.userInfo.login}/${this.activeRepos}/${t.path}`:t.download_url},copy(t,e){let i=`https://fastly.jsdelivr.net/gh/${this.userInfo.login}/${this.activeRepos}/${e.path}`,s=i;2==t&&(s=`![${e.name}](${i})`),Object(c["a"])(s),this.msgSuccess("复制成功")},delFile(t){this.$confirm("此操作将永久删除该文件, 是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{let e={message:"Delete file via PictureHosting",sha:t.sha};Object(n["a"])(this.userInfo.login,this.activeRepos,t.path,e).then(()=>{this.msgSuccess("删除成功"),this.search()})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},submitUpload(){this.uploadList=this.$refs.uploadRef.uploadFiles,this.uploadList.length?this.$refs.uploadRef.submit():this.msgError("请先选择文件")},upload(t){let e=new FileReader;e.readAsDataURL(t.file),e.onload=()=>{let i=e.result.split(",")[1],s=t.file.name;"2"===this.nameType&&(s=Object(r["a"])()+s.substr(s.lastIndexOf("."))),d(()=>this.push2Github(t,s,i),1e3)}},push2Github(t,e,i){let s={message:"Add files via PictureHosting",content:i},a=this.activePath.join("/");this.isCustomPath&&("/"===this.customPath?a="":(a=this.customPath,"/"!==a.charAt(0)&&(a="/"+a),"/"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1)))),Object(n["e"])(this.userInfo.login,this.activeRepos,a,e,s).then(()=>{this.msgSuccess("上传成功"),t.onSuccess()})}}},f=m,g=(i("0dd9"),i("1db4"),i("2877")),v=Object(g["a"])(f,s,a,!1,null,"23d96e02",null);e["default"]=v.exports},c9f7:function(t,e,i){"use strict";i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return u})),i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return p})),i.d(e,"e",(function(){return d}));var s=i("bc3a"),a=i.n(s),o=i("323e"),n=i.n(o),l=(i("a5d8"),i("5c96"));const r=a.a.create({baseURL:"https://api.github.com",timeout:3e4});function c(t){return r({url:"/user",method:"GET",headers:{Authorization:"token "+t}})}function u(t){return r({url:`/users/${t}/repos`,method:"GET"})}function h(t,e,i){return r({url:`/repos/${t}/${e}/contents${i}`,method:"GET"})}function p(t,e,i,s){return r({url:`/repos/${t}/${e}/contents/${i}`,method:"DELETE",data:s})}function d(t,e,i,s,a){return r({url:`/repos/${t}/${e}/contents${i}/${s}`,method:"PUT",data:a})}r.interceptors.request.use(t=>{n.a.start(),/get/i.test(t.method)&&(t.params=t.params||{},t.params.t=(new Date).getTime());const e=localStorage.getItem("githubToken");return e&&(t.headers.Authorization="token "+e),t},t=>(console.info(t),Promise.reject(t))),r.interceptors.response.use(t=>(n.a.done(),t.data),t=>(console.info(t),l["Message"].error(t.message),Promise.reject(t)))},f43e:function(t,e,i){"use strict";function s(t){let e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove()}i.d(e,"a",(function(){return s}))},f988:function(t,e,i){"use strict";function s(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0,i="x"==t?e:3&e|8;return i.toString(16)}))}i.d(e,"a",(function(){return s}))}}]);