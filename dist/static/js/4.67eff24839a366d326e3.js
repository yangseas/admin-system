webpackJsonp([4],{m8SO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"login__content"},[s("p",{staticClass:"login__title"},[e._v("欢迎登陆")]),e._v(" "),s("el-form",{ref:"form",attrs:{model:e.form,size:"mini"}},[s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{placeholder:"请输入密码",type:"password"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleSubmit(t):null}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),s("p",{staticClass:"login__hint"},[e._v("忘记密码?")]),e._v(" "),s("el-button",{staticClass:"login__button",attrs:{type:"primary",size:"mini"},on:{click:e.handleSubmit}},[e._v("登陆")])],1)])},staticRenderFns:[]};var a=s("VU/8")({data:function(){return{isRemember:!1,form:{name:"",password:""}}},methods:{handleSubmit:function(){this.$message({message:"登录成功",type:"success"}),this.$router.push("/home")}}},n,!1,function(e){s("py0w")},"data-v-6c5c9a2f",null);t.default=a.exports},py0w:function(e,t){}});
//# sourceMappingURL=4.67eff24839a366d326e3.js.map