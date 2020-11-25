(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);m&&m(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,c=1;c<s.length;c++){var i=s[c];0!==r[i]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=i;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},4574:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}}),s("router-view")],1)},o=[],c=(s("034f"),s("2877")),i={},u=Object(c["a"])(i,n,o,!1,null,null,null),m=u.exports,l=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Form")],1)},f=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user_form"},[e._m(0),s("form",{staticClass:"ui form",on:{submit:e.onSubmit}},[s("div",{staticClass:"field"},[s("label",[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Enter your username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[e._v("Chatroom")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.chatroom,expression:"chatroom"}],staticClass:"ui search dropdown",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.chatroom=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[e._v("select chatroom")]),s("option",{attrs:{value:"party"}},[e._v("Party")]),s("option",{attrs:{value:"programming"}},[e._v("Programming")])])]),s("button",{staticClass:"ui button",attrs:{disabled:""==e.username||""===e.chatroom,type:"submit"}},[e._v(" Join ")]),s("h3",[e._v(e._s(e.username))]),s("h3",[e._v(e._s(e.chatroom))])])])},d=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Welcome to the chat app")])])}],v=(s("99af"),s("5530")),g=s("2f62"),b={name:"Form",data:function(){return{username:"",chatroom:""}},methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["getUserDetails"])),{},{onSubmit:function(e){e.preventDefault(),this.getUserDetails({username:this.username,chatroom:this.chatroom}),this.$router.push({path:"/chat?username=".concat(this.username,"&chatroom=").concat(this.chatroom)})}}),computed:{}},_=b,y=(s("7772"),Object(c["a"])(_,h,d,!1,null,"3535ac60",null)),w=y.exports,O={name:"Home",components:{Form:w}},j=O,C=Object(c["a"])(j,p,f,!1,null,null,null),M=C.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ui raised container"},[s("DisplayChat"),s("ChatInput")],1)},S=[],D=(s("498a"),s("8e27")),k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed"},[s("form",{staticClass:"ui form",on:{submit:e.sendMsg}},[s("div",{staticClass:"field fix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"chatInput",attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("button",{staticClass:"ui green button sendBtn",attrs:{disabled:""==e.message,type:"submit"}},[e._v(" send ")])])])])},$=[],P={name:"Chatbox",data:function(){return{message:""}},methods:Object(v["a"])({sendMsg:function(e){e.preventDefault(),this.socket.emit("clientMsg",this.message,(function(e){e&&alert(e)})),this.message=""}},Object(g["b"])(["setMessages"])),computed:Object(v["a"])({},Object(g["c"])(["socket"]))},E=P,U=(s("64c2"),Object(c["a"])(E,k,$,!1,null,"2d0ea772",null)),R=U.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"chat_container",staticClass:"chat-container"},[s("div",{staticClass:"header"},[s("h5",[e._v(e._s(e.capatalize(e.userDetails.chatroom))+" Room")]),s("router-link",{attrs:{to:"/"}},[s("button",{staticClass:"ui small button",attrs:{type:"submit"}},[e._v(" Leave room ")])])],1),e._l(e.getMessages,(function(t,a){return s("div",{key:a,class:t.type},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.userDetails.username.trim().toLowerCase()!==t.user,expression:"userDetails.username.trim().toLowerCase() !== msg.user"}],staticClass:"username item1"},[e._v(e._s(t.user))]),s("p",{staticClass:"message item2"},[e._v(e._s(t.msg))])])}))],2)},L=[],N=(s("fb6a"),{name:"DisplayChat",data:function(){return{}},methods:{capatalize:function(e){return"".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))},scrollToEnd:function(){var e=this.$refs.chat_container;e.scrollTop=e.scrollHeight}},computed:Object(v["a"])({},Object(g["c"])(["getMessages","userDetails"])),updated:function(){this.scrollToEnd()}}),F=N,H=(s("f24a"),Object(c["a"])(F,T,L,!1,null,"60239aca",null)),I=H.exports,J={name:"Chat",components:{ChatInput:R,DisplayChat:I},data:function(){return{message:""}},computed:Object(v["a"])({},Object(g["c"])(["userDetails"])),methods:Object(v["a"])({},Object(g["b"])(["setSocketState","setMessages","resetStateMessages","getUserDetails"])),mounted:function(){var e=this;a=Object(D["io"])(),this.setSocketState(a),!this.userDetails.username&&!this.userDetails.chatroom&&this.getUserDetails({username:this.$route.query.username,chatroom:this.$route.query.chatroom});var t=this.userDetails,s=t.username,r=t.chatroom;a.emit("newUser",{username:s,chatroom:r},(function(e){e&&alert(e)})),a.on("adminMsg",(function(t){var s=t.user,a=t.msg,r={user:s,msg:a,type:"adminMessage"};e.setMessages(r)})),a.on("clientMessage",(function(t){var s=t.user,a=t.msg,r=e.userDetails,n=r.username,o=r.chatroom;n=n.trim().toLowerCase();var c=n===s?{user:s,msg:a,type:"myMessage",chatroom:o}:{user:s,msg:a,type:"otherMessages",chatroom:o};e.setMessages(c)}))},destroyed:function(){this.resetStateMessages(),a.disconnect(!0)}},q=J,z=Object(c["a"])(q,x,S,!1,null,"80a3515c",null),A=z.exports;r["a"].use(l["a"]);var B=[{path:"/",name:"Home",component:M},{path:"/chat",name:"Chat",component:A}],W=new l["a"]({mode:"history",base:"/",routes:B}),G=W,K=(s("96cf"),s("1da1")),Q={username:"",chatroom:"",messages:[],socket:null},V={userDetails:function(e){return{username:e.username,chatroom:e.chatroom}},socket:function(e){return e.socket},getMessages:function(e){return e.messages}},X={getUserDetails:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=e.commit,a("setUserData",t);case 2:case"end":return s.stop()}}),s)})))()},setSocketState:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=e.commit,a("setSocketState",t);case 2:case"end":return s.stop()}}),s)})))()},setMessages:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=e.commit,a("setMessages",t);case 2:case"end":return s.stop()}}),s)})))()},resetStateMessages:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.commit,s("resetStateMessages");case 2:case"end":return t.stop()}}),t)})))()}},Y={setUserData:function(e,t){var s=t.username,a=t.chatroom;e.username=s,e.chatroom=a},setSocketState:function(e,t){e.socket=t},setMessages:function(e,t){return e.messages.push(t)},resetStateMessages:function(e){return e.messages=[]}},Z={state:Q,getters:V,actions:X,mutations:Y};r["a"].use(g["a"]);var ee=new g["a"].Store({modules:{Chats:Z}});r["a"].config.productionTip=!1,new r["a"]({router:G,store:ee,render:function(e){return e(m)}}).$mount("#app")},"64c2":function(e,t,s){"use strict";s("4574")},7772:function(e,t,s){"use strict";s("e5b3")},7988:function(e,t,s){},"85ec":function(e,t,s){},e5b3:function(e,t,s){},f24a:function(e,t,s){"use strict";s("7988")}});
//# sourceMappingURL=app.48dc6cfa.js.map