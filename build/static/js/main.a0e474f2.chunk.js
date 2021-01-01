(this["webpackJsonpdashboard-app"]=this["webpackJsonpdashboard-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(11),i=n.n(r),s=(n(87),n(148)),l=n(142),o=n(67),u=n.n(o),d=n(16),j=n(51),b=n(15);var O=n(65);function f(e,t){var n;switch(t.type){case"add-new-message":return n=[].concat(Object(j.a)(e),[t.payload]);case"delete-all":return n=[];case"change-text":return n=e.map((function(e){return t.payload.id===e.id?Object(d.a)(Object(d.a)({},e),{},{message:t.payload.text}):e}));case"change-level":return n=e.map((function(e){return t.payload.id===e.id?Object(d.a)(Object(d.a)({},e),{},{level:t.payload.level}):e}));case"toggle-delete-confirmation":return n=e.map((function(e){return t.payload===e.id?Object(d.a)(Object(d.a)({},e),{},{confirm:!e.confirm}):e}));case"delete-message":return n=e.filter((function(e){return e.id!==t.payload}));case"toggle-edit":return n=e.map((function(e){return t.payload===e.id?Object(d.a)(Object(d.a)({},e),{},{edit:!e.edit}):Object(d.a)(Object(d.a)({},e),{},{edit:!1})}));default:return n}}var m=Object(c.createContext)();function h(){return Object(c.useContext)(m)}function p(e){var t=e.children,n=Object(c.useState)(!0),r=Object(b.a)(n,2),i=r[0],s=r[1],l=Object(c.useState)([]),o=Object(b.a)(l,2),u=o[0],h=o[1],p=Object(c.useReducer)(f,u),g=Object(b.a)(p,2),v=g[0],x=g[1],y=Object(c.useState)(""),_=Object(b.a)(y,2),M=_[0],I=_[1],w=Object(c.useState)("view all"),S=Object(b.a)(w,2),C=S[0],k=S[1],E=v;"view all"!==C&&(E=v.filter((function(e){return e.level===C}))),"view all"===C&&(E=v),function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e=Object(O.randomGenerator)(),t=[].concat(Object(j.a)(u),[Object(d.a)(Object(d.a)({},e),{},{edit:!1,confirm:!1})]);h(t)}),i?2e3:null);var N={messages:u,isRunning:i,setIsRunning:s,snackbar:M,setSnackbar:I,select:C,setSelect:k,state:v,dispatch:x,msgsInView:E};return Object(a.jsx)(m.Provider,{value:N,children:t})}function g(){var e=h(),t=e.setSnackbar,n=e.snackbar;function c(e,n){"clickaway"!==n&&t(!1)}return Object(a.jsx)("div",{children:Object(a.jsx)(s.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:Boolean(n),autoHideDuration:4e3,onClose:c,message:n,severity:"success",action:Object(a.jsx)(l.a,{size:"small","aria-label":"close",color:"inherit",onClick:c,children:Object(a.jsx)(u.a,{fontSize:"small"})})})})}var v=n(68),x=n.n(v);var y=function(){return Object(a.jsx)("div",{className:x.a.main,children:Object(a.jsx)("h1",{children:"Messages Dashboard \ud83d\udcac"})})},_=n(41),M=n.n(_),I=n(145),w=n(58),S=n(52),C=n.n(S);var k=function(){var e=h(),t=e.setIsRunning,n=e.isRunning;return Object(a.jsx)("div",{className:C.a.icon,children:n?Object(a.jsx)(w.b,{className:C.a.playIcon,onClick:function(){return t(!n)}}):Object(a.jsx)(w.a,{className:C.a.pauseIcon,onClick:function(){return t(!n)}})})},E=n(49),N=n.n(E),R=n(149),D=n(150),P=n(144),A=n(146),L=n(56),V=n.n(L),U=n(143),B=Object(U.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},select:{"&:before":{borderColor:"red"},"&:after":{borderColor:"red"}},icon:{fill:"red"},selectEmpty:{marginTop:e.spacing(2)},root:{width:200,"& .MuiOutlinedInput-input":{color:"green"},"& .MuiInputLabel-root":{color:"green"},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"green"},"&:hover .MuiOutlinedInput-input":{color:"red"},"&:hover .MuiInputLabel-root":{color:"red"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"red"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"purple"},"& .MuiInputLabel-root.Mui-focused":{color:"purple"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"purple"}}}}));var T=function(e){var t,n=e.inEditView,r=e.id,i=e.prevLevel,s=h(),l=s.setSnackbar,o=s.setSelect,u=s.dispatch,d=Object(c.useState)(""),j=Object(b.a)(d,2),O=j[0],f=j[1],m=B();return n&&(t=["warn","error","status"]),n||(t=["view all","warn","error","status"]),Object(a.jsxs)(P.a,{variant:"outlined",className:m.formControl,children:[Object(a.jsx)(R.a,{id:"demo-simple-select-outlined-label",className:m.root,classes:{underline:V.a.underline},style:{color:"#E0E0E0"},children:"Levels"}),Object(a.jsx)(A.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",style:{color:"#E0E0E0"},value:O,onChange:function(e){var t=e.target.value;f(t),l("Successfully changed level to ".concat(t)),o(t),u({type:"change-level",payload:{id:r,level:t}})},label:"Levels",className:V.a.label,children:t.map((function(e,t){return e!==i&&Object(a.jsx)(D.a,{value:e,children:e},t)}))})]})},q=n(57),z=n.n(q);var F=function(e){var t=e.id,n=e.inMenu,r=e.setShowDeleteConfirmation,i=h(),s=i.setSnackbar,l=i.setIsRunning,o=i.isRunning,u=i.dispatch,d=Object(c.useState)(""),j=Object(b.a)(d,2),O=j[0],f=j[1];return Object(c.useEffect)((function(){if(n){f("Are you sure you want to delete all? This cannot be undone.")}if(!n){f("Are you sure you want to delete this message?")}}),[n]),Object(a.jsxs)("div",{className:n?z.a.inMenu:z.a.main,children:[Object(a.jsx)("h5",{id:"confirmation-dialog-title",children:O}),Object(a.jsxs)("div",{children:[Object(a.jsx)(I.a,{autoFocus:!0,onClick:function(){return function(e){n&&r(!1),n||(u({type:"toggle-delete-confirmation",payload:e}),l(!o))}(t)},variant:"contained",style:{marginRight:"1rem"},children:"Cancel"}),Object(a.jsx)(I.a,{onClick:function(){return function(e){n&&(u({type:"delete-all"}),s("Successfully deleted all"),r(!1)),n||(u({type:"delete-message",payload:e}),l(!o),s("Successfully deleted message"),l(!0))}(t)},color:"primary",variant:"contained",style:{background:"#AA647B"},children:"Delete"})]})]})},G=n(69);var H=function(){var e=h().state,t=e.filter((function(e){return"warn"===e.level})),n=e.filter((function(e){return"error"===e.level})),c=e.filter((function(e){return"status"===e.level})),r=t.length/e.length||0,i=n.length/e.length||0,s=c.length/e.length||0;return Object(a.jsx)(G.PieChart,{style:{maxHeight:"10rem"},data:[{title:"warn",value:r,color:"#3f51b5"},{title:"error",value:i,color:"#f50057"},{title:"status",value:s,color:"#e0e0e0"}]})};var W=function(){var e=h(),t=e.setIsRunning,n=e.isRunning,r=e.state,i=e.setSnackbar,s=e.select,l=e.msgsInView,o=Object(c.useState)("messages"),u=Object(b.a)(o,2),d=u[0],j=u[1],O=Object(c.useState)(!1),f=Object(b.a)(O,2),m=f[0],p=f[1];return Object(c.useEffect)((function(){1===r.length&&j("message"),1!==r.length&&j("messages")}),[r]),Object(a.jsxs)("div",{className:M.a.main,children:[Object(a.jsxs)("div",{className:M.a.left,children:[m&&Object(a.jsx)(F,{inMenu:!0,setShowDeleteConfirmation:p}),Object(a.jsxs)("div",{className:M.a.status,children:[Object(a.jsxs)("h2",{children:["Status: ",n?"Running":"Paused"]}),Object(a.jsx)(k,{})]}),Object(a.jsx)(I.a,{onClick:function(e){return t(!n),void i(n?"Paused":"Started")},variant:"contained",style:{marginRight:"1rem"},children:n?"Pause":"Start"}),Object(a.jsx)(I.a,{onClick:function(e){return p(!0)},variant:"contained",startIcon:Object(a.jsx)(N.a,{}),style:{background:"#AA647B"},children:"Delete all"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Show only:"}),Object(a.jsx)(T,{})]}),Object(a.jsxs)("div",{className:M.a.right,children:[Object(a.jsx)(H,{}),Object(a.jsxs)("p",{children:["Displaying ",l.length," ","view all"!==s&&"of ".concat(r.length," total")," ",d]})]})]})},J=n(50),X=n.n(J),Z=n(151),K=n(152);var Q=function(e){var t=e.id,n=e.confirm,c=e.editMode,r=e.setNewMsg,i=h(),s=i.setIsRunning,l=i.isRunning,o=i.dispatch,u=i.setSnackbar;return Object(a.jsxs)("div",{className:X.a.buttons,children:[n&&Object(a.jsx)(F,{id:t}),Object(a.jsx)(I.a,{onClick:function(e){return function(e){o({type:"toggle-edit",payload:e}),c||s(!1),c&&s(!0)}(t)},variant:"contained",color:c?"default":"primary",style:{marginRight:"1rem"},children:c?"Cancel":"Edit"}),Object(a.jsx)(I.a,{onClick:function(e){return function(e){c||(s(!l),o({type:"toggle-delete-confirmation",payload:e})),c&&(r(),u("Successfully edited message"))}(t)},variant:"contained",color:c?"primary":"secondary",startIcon:!c&&Object(a.jsx)(N.a,{}),children:c?"Accept":"Delete"})]})},Y=n(70),$=n.n(Y);function ee(e){return"error"===e?"secondary":"warn"===e?"primary":"status"===e?"default":void 0}function te(e){return e.charAt(0).toUpperCase()}function ne(e){return $()(e).format("llll")}var ae=function(e){var t=e.msg,n=t.timestamp,c=t.level,r=t.id,i=t.message,s=t.confirm;return Object(a.jsxs)("div",{className:X.a.message,id:r,children:[Object(a.jsx)("p",{children:Object(a.jsx)("small",{children:ne(n)})}),Object(a.jsx)(Z.a,{color:ee(c),label:c,avatar:Object(a.jsx)(K.a,{children:te(c)})}),Object(a.jsx)("h4",{children:i}),Object(a.jsx)(Q,{confirm:s,id:r})]})},ce=n(71),re=n.n(ce),ie=n(72),se=n.n(ie);var le=function(e){var t=e.msg,n=t.timestamp,r=t.level,i=t.id,s=t.message,l=t.confirm,o=Object(c.useState)(s),u=Object(b.a)(o,2),d=u[0],j=u[1],O=h(),f=O.setIsRunning,m=O.dispatch;function p(){m({type:"toggle-edit",payload:i}),f(!0)}return Object(a.jsxs)("form",{className:se.a.editMessage,id:i,onSubmit:function(){p()},children:[Object(a.jsx)("h3",{children:"Edit details:"}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["Created: ",ne(n)]})}),Object(a.jsx)(Z.a,{color:ee(r),label:r,avatar:Object(a.jsx)(K.a,{children:te(r)})}),Object(a.jsx)("br",{}),Object(a.jsx)("h4",{children:"Edit level:"}),Object(a.jsx)(T,{inEditView:!0,id:i,prevLevel:r}),Object(a.jsx)("br",{}),Object(a.jsx)("h4",{children:"Edit message:"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{name:"",id:"",cols:"100",rows:"3",defaultValue:d,onChange:function(e){return t=e.target.value,j(t),void m({type:"change-text",payload:{id:i,text:t}});var t}}),Object(a.jsx)(Q,{confirm:l,id:i,editMode:!0,setNewMsg:p})]})};var oe=function(){var e=h(),t=e.dispatch,n=e.messages,r=e.msgsInView;return Object(c.useEffect)((function(){n.length>0&&t({type:"add-new-message",payload:n[n.length-1]})}),[n,t]),Object(a.jsx)("div",{className:re.a.main,children:r.map((function(e,t){return Object(a.jsx)("div",{children:e.edit?Object(a.jsx)(le,{msg:e}):Object(a.jsx)(ae,{msg:e})},t)}))})};var ue=function(){return Object(a.jsxs)(p,{children:[Object(a.jsx)(g,{}),Object(a.jsx)(y,{}),Object(a.jsx)(W,{}),Object(a.jsx)(oe,{})]})};i.a.render(Object(a.jsx)(ue,{}),document.getElementById("root"))},41:function(e,t,n){e.exports={main:"Menu_main__177jF",left:"Menu_left__1CrpW",right:"Menu_right__3FC5U",status:"Menu_status__2XvGq"}},50:function(e,t,n){e.exports={message:"Message_message__AKUS1"}},52:function(e,t,n){e.exports={icon:"PlayPauseIcons_icon__39ZT2",playIcon:"PlayPauseIcons_playIcon__1NAXZ",pauseIcon:"PlayPauseIcons_pauseIcon__2AEyd"}},56:function(e,t,n){e.exports={label:"Select_label__1bIW3"}},57:function(e,t,n){e.exports={main:"Dialogue_main__275iq",inMenu:"Dialogue_inMenu__28Mqo"}},65:function(e,t,n){var a=n(88),c=n(103).v4,r=n(94).levels;e.exports={randomGenerator:function(){return{level:r[Math.floor(3*Math.random())],message:a().sentence({words:5}),timestamp:new Date(Date.now()).toUTCString(),id:c()}}}},68:function(e,t,n){e.exports={main:"Header_main__3OPwk"}},71:function(e,t,n){e.exports={main:"Messages_main__tmSnh"}},72:function(e,t,n){e.exports={editMessage:"EditMessage_editMessage__1U4Cp"}},87:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t),n.d(t,"levels",(function(){return a}));var a=["warn","error","status"]}},[[102,1,2]]]);
//# sourceMappingURL=main.a0e474f2.chunk.js.map