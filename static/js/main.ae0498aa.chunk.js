(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={default:"FormControls_default__415Wr",correct:"FormControls_correct__2PIZ5",inCorrect:"FormControls_inCorrect__6I5cL",promptText:"FormControls_promptText__13Glx",inCorrectSubmitDataHint:"FormControls_inCorrectSubmitDataHint__2KAiV"}},13:function(e,t,n){e.exports={NavigationContainer:"Navigation_NavigationContainer__ordNm",NavigationContainer__list:"Navigation_NavigationContainer__list__LoNBJ",NavigationContainer__item:"Navigation_NavigationContainer__item__r_p26",NavigationContainer__link:"Navigation_NavigationContainer__link__3_iXr",active:"Navigation_active__3F8KB"}},131:function(e,t,n){e.exports={container:"App_container__21BPK"}},132:function(e,t,n){e.exports={leftPanelWrapper:"LeftPanel_leftPanelWrapper__1mnRA"}},135:function(e,t,n){e.exports={container:"FriendList_container__1pDQm"}},136:function(e,t,n){e.exports={HeaderContainer:"Header_HeaderContainer__1Na0M"}},138:function(e,t,n){},139:function(e,t,n){e.exports={navlink:"DialogItem_navlink__DPpoH"}},140:function(e,t,n){},168:function(e,t,n){e.exports=n(300)},193:function(e,t,n){e.exports=n.p+"static/media/avatar.d48a8973.png"},197:function(e,t,n){e.exports=n.p+"static/media/signIn.66b9eed0.png"},198:function(e,t,n){e.exports=n.p+"static/media/signUp.e6f42918.png"},199:function(e,t,n){e.exports=n.p+"static/media/logOut.a4e6b624.png"},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(16),i=n(18),o=n(17),s=n(0),c=n.n(s),l=n(131),u=n.n(l),m=n(132),p=n.n(m),f=n(13),g=n.n(f),d=n(14),h=function(e){var t=e.clickProfileLink;return c.a.createElement("header",null,c.a.createElement("div",{className:g.a.NavigationContainer},c.a.createElement("ul",{className:g.a.NavigationContainer__list},c.a.createElement("li",{className:g.a.NavigationContainer__item},c.a.createElement(d.b,{onClick:t,activeClassName:g.a.active,className:g.a.NavigationContainer__link,to:"/Profile"},"Profile")),c.a.createElement("li",{className:g.a.NavigationContainer__item},c.a.createElement(d.b,{activeClassName:g.a.active,className:g.a.NavigationContainer__link,to:"/dialog"},"Dialog")),c.a.createElement("li",{className:g.a.NavigationContainer__item},c.a.createElement(d.b,{activeClassName:g.a.active,className:g.a.NavigationContainer__link,to:"/news"},"News")),c.a.createElement("li",{className:g.a.NavigationContainer__item},c.a.createElement(d.b,{activeClassName:g.a.active,className:g.a.NavigationContainer__link,to:"/music"},"Music")),c.a.createElement("li",{className:g.a.NavigationContainer__item},c.a.createElement(d.b,{activeClassName:g.a.active,className:g.a.NavigationContainer__link,to:"/users"},"Users")),c.a.createElement("li",{className:g.a.NavigationContainer__item},c.a.createElement(d.b,{activeClassName:g.a.active,className:g.a.NavigationContainer__link,to:"/settings"},"Settings")))))},_=n(11),v=n.n(_),E=n(23),O=n(37),b=n(2),N=n(133),C=N.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"fd622230-6210-4ef3-a457-276f95f589d0"}}),P={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return C.get("/users?page=".concat(e,"&count=").concat(t))},follow:function(e){return C.post("/follow/"+e)},unfollow:function(e){return C.delete("/follow/"+e)}},j=function(e){return C.get("/profile/"+e)},I=function(e){return C.get("/profile/status/"+e).then((function(e){return e}))},T=function(e){return C.put("profile/status",{status:e})},S=function(){return C.get("auth/me")},x=function(e,t,n){return C.post("/auth/login",{email:e,password:t,rememberMe:n})},A=function(){return C.delete("/auth/login")},k=n(193),w={posts:[{content:"alo",imgSrc:"http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1",countLikes:"1"},{content:"helo",imgSrc:"http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1",countLikes:"3"}],profile:null,isFetching:!1,defaultStatusText:"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442.",statusText:"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442.",lookingAtMyProfile:!0,redrawToProfileComponent:!0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:Object(b.a)(Object(b.a)({},t.profile),{},{photos:Object(b.a)(Object(b.a)({},t.profile.photos),{},{large:t.profile.photos.large||k})})});case"ADD-POST":return Object(b.a)(Object(b.a)({},e),{},{posts:[].concat(Object(O.a)(e.posts),[{content:t.message,imgSrc:"http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1",countLikes:"222"}]),newPostText:""});case"START_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case"STOP_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1});case"UPDATE_STATUS_TEXT":var n=t.statusText&&""!==t.statusText?t.statusText:"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442.";return Object(b.a)(Object(b.a)({},e),{},{statusText:n});case"SET_FLAG_LOOKING_AT_MY_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{lookingAtMyProfile:!0});case"SET_FLAG_NOT_LOOKING_AT_MY_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{lookingAtMyProfile:!1});case"GET_STATUS":var a=t.statusText&&""!==t.statusText?t.statusText:"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442.";return Object(b.a)(Object(b.a)({},e),{},{statusText:a});default:return e}},y=function(e){return e=e||15634,function(){var t=Object(E.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"START_FETCHING"}),t.next=4,j(e);case 4:200===(a=t.sent).status&&(r=a.data,n({type:"SET_USER_PROFILE",profile:r}),n({type:"STOP_FETCHING"}));case 6:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(){return function(e){e({type:"SET_FLAG_LOOKING_AT_MY_PROFILE"})}},U=function(){return function(e){e({type:"SET_FLAG_NOT_LOOKING_AT_MY_PROFILE"})}},z=n(6),M=n(7),D=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).clickProfileLink=function(){e.props.isAuth||console.log("\u041d\u0430\u0434\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043b\u043e\u0433\u0438\u043d\u0438\u0437\u0430\u0446\u0438\u044e, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439!")},e}return Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth||console.log("\u041d\u0430\u0434\u043e \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439."),c.a.createElement(h,{clickProfileLink:this.clickProfileLink})}}]),n}(c.a.Component),G=Object(z.d)(Object(M.b)((function(e){return{redrawToProfileComponent:e.profilePage.redrawToProfileComponent,isAuth:e.auth.isAuth}}),{getProfile:y,lookingMyProfile:L}))(D),R=n(135),H=n.n(R),W=n(71),B=n.n(W),J=function(e){var t=e.srcPhoto,n=e.clickProfileUser,a=e.id,r=e.name;return t=t||k,c.a.createElement(d.b,{onClick:function(){return n(a)},className:B.a.friendContainer,to:"/Profile/".concat(a)},c.a.createElement("img",{className:B.a.photo,src:t}),c.a.createElement("p",{className:B.a.name},r))},q=function(e){var t=e.friendList,n=e.clickProfileUser,a=t.length?H.a.container:"",r=t.map((function(e){return c.a.createElement(J,{id:e.id,srcPhoto:e.photos.small,name:e.name,clickProfileUser:n})}));return c.a.createElement("div",{className:a},r)},K=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).clickProfileUser=function(t){e.props.getProfile(t),e.props.notLookingMyProfile()},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(q,{friendList:this.props.friendList,clickProfileUser:this.clickProfileUser})}}]),n}(c.a.Component),X=Object(z.d)(Object(M.b)((function(e){return{friendList:e.usersPage.users.filter((function(e){return e.followed}))}}),{getProfile:y,notLookingMyProfile:U}))(K),V=function(){return c.a.createElement("div",{className:p.a.leftPanelWrapper},c.a.createElement(G,null),c.a.createElement(X,null))},Y=n(136),Q=n.n(Y),Z=n(33),$=n.n(Z),ee=n(72),te=n.n(ee),ne=function(e){var t=e.onClickF,n=e.srcImg,a=e.text;return c.a.createElement(d.b,{onClick:t,activeClassName:"",className:te.a.authorizationItem,to:"/authorization"},c.a.createElement("img",{className:te.a.authorizationImg,alt:"authorization",src:n,width:100,height:100}),c.a.createElement("p",{className:te.a.authorizationText},a))},ae=n(197),re=n(198),ie=n(199),oe=function(e){var t=e.isAuth,n=e.authorizationInfo,a=e.logOutClick,r=e.signInOnClick,i=e.signUpOnClick;return t?c.a.createElement("div",{className:$.a.authorizationPanelWrapper},c.a.createElement("div",{className:$.a.authorizationPanelInfo},c.a.createElement("p",{className:$.a.infoText},"\u0410\u0439\u0434\u0438: "+n.userId),c.a.createElement("p",{className:$.a.infoText},"\u041b\u043e\u0433\u0438\u043d: "+n.login),c.a.createElement("p",{className:$.a.infoText},"\u041f\u043e\u0447\u0442\u0430: "+n.email)),c.a.createElement("div",{className:$.a.authorizationPanel},c.a.createElement(ne,{text:"\u0412\u044b\u0439\u0442\u0438",onClickF:a,srcImg:ie}))):c.a.createElement("div",{className:$.a.authorizationPanel},c.a.createElement(ne,{text:"\u0412\u043e\u0439\u0442\u0438",onClickF:r,srcImg:ae}),c.a.createElement(ne,{text:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onClickF:i,srcImg:re}))},se=n(39),ce={userId:null,email:null,login:null,isAuth:!1,signInImg:ae,signUpImg:re,logOutImg:ie},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.data),{},{isAuth:t.isAuth});case"SIGN_IN":case"SIGN_UP":case"LOG_OUT":return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.isAuth});default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n},isAuth:a}},me=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n,a,r,i,o,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return 0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,i=a.email,o=a.login,s=ue(r,i,o,!0),t(s)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).signInOnClick=function(){console.log("\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443")},e.signUpOnClick=function(){console.log("\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")},e.logOutClick=function(){console.log("\u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),e.props.logOut()},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(oe,{signInImg:this.props.signInImg,signUpImg:this.props.signUpImg,logOutImg:this.props.logOutImg,signInOnClick:this.signInOnClick,signUpOnClick:this.signUpOnClick,logOutClick:this.logOutClick,isAuth:this.props.isAuth,authorizationInfo:this.props.authorizationInfo,profile:this.props.profilePage})}}]),n}(c.a.Component),fe=Object(z.d)(Object(M.b)((function(e){return{isAuth:e.auth.isAuth,authorizationInfo:{userId:e.auth.userId,email:e.auth.email,login:e.auth.login},signInImg:e.auth.signInImg,signUpImg:e.auth.signUpImg,logOutImg:e.auth.logOutImg}}),{logOut:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:0===e.sent.data.resultCode&&(n=ue(),t(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},authMe:me}))(pe),ge=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:Q.a.HeaderContainer},c.a.createElement(fe,null),c.a.createElement("h1",null,"\u0422\u0430 \u0435\u0449\u0451 \u0434\u0438\u0447\u044c!!!")))},de=n(91),he=n.n(de),_e=n(57),ve=n.n(_e),Ee=function(e){return c.a.createElement("div",{className:ve.a.PostContainer},c.a.createElement("div",{className:ve.a.PostContentImg},c.a.createElement("img",{className:ve.a.image,width:"50",height:"50",src:e.imgSrc}),c.a.createElement("p",null,e.content)),c.a.createElement("p",{className:ve.a.PostCountLikes},e.countLikes))},Oe=n(128),be=n(129),Ne=n(58),Ce=n(12),Pe=n.n(Ce),je=function(e){var t=e.input,n=e.meta,a=Object(Ne.a)(e,["input","meta"]),r=n.touched&&!n.error,i=n.error&&n.touched;n.touched;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("textarea",Object.assign({},t,a,{className:r?Pe.a.correct:i?Pe.a.inCorrect:Pe.a.default}))),i&&c.a.createElement("span",{className:Pe.a.promptText},n.error))},Ie=function(e){var t=e.input,n=e.meta,a=Object(Ne.a)(e,["input","meta"]),r=n.touched&&!n.error,i=n.error&&n.touched;n.touched;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("input",Object.assign({},t,a,{className:r?Pe.a.correct:i?Pe.a.inCorrect:Pe.a.default}))),i&&c.a.createElement("span",{className:Pe.a.promptText},n.error))},Te=function(e){var t=e.input,n=e.meta,a=Object(Ne.a)(e,["input","meta"]),r=n.touched&&!n.error,i=n.error&&n.touched;n.touched;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("input",Object.assign({},t,a,{className:r?Pe.a.correct:i?Pe.a.inCorrect:Pe.a.default}))),i&&c.a.createElement("span",{className:Pe.a.promptText},n.error))},Se=function(e){if(!e)return"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435!"},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!")}},Ae=xe(10),ke=Object(be.a)({form:"profile"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(Oe.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u043f\u043e\u0441\u0442",name:"post",component:je,validate:[Se,Ae]})),c.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))})),we=function(e){var t=e.posts.map((function(e){return c.a.createElement(Ee,{content:e.content,imgSrc:e.imgSrc,countLikes:e.countLikes})}));return c.a.createElement("div",null,c.a.createElement("h3",null,"My posts"),t,c.a.createElement(ke,{onSubmit:function(t){e.addPost(t.post)}}))},Fe=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(we,{posts:this.props.posts,addPost:this.props.addPost})}}]),n}(c.a.Component),ye=Object(M.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:function(e){return function(t){t({type:"ADD-POST",message:e})}}})(Fe),Le=n(97),Ue=n.n(Le),ze=n(56),Me=n(55),De=n.n(Me),Ge=function(e){var t=e.lookingAtMyProfile,n=e.activateEditMode,a=e.editMode,r=e.deActivateEditModeEnterOrEsc,i=e.onStatusChange,o=e.deActivateEditMode,s=e.statusText;n=t?n:function(){};var l=t?De.a.statusText:"";return c.a.createElement("div",{className:De.a.statusTextContainer},a&&c.a.createElement("input",{className:De.a.inputStatusText,onFocus:function(e){return e.target.select()},onKeyDown:function(e){return r(e)},onBlur:o,onChange:function(e){return i(e.target.value)},type:"text",autoFocus:!0,value:s}),!a&&c.a.createElement("span",{className:l,onClick:n},s))},Re=Object(z.d)(Object(M.b)((function(e){return{statusText:e.profilePage.statusText,defaultStatusText:e.profilePage.defaultStatusText,lookingAtMyProfile:e.profilePage.lookingAtMyProfile}}),{updateNewStatusText:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:200===t.sent.status&&n({type:"UPDATE_STATUS_TEXT",statusText:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.defaultStatusText,n=e.updateNewStatusText,a=Object(s.useState)(!1),r=Object(ze.a)(a,2),i=r[0],o=r[1],l=Object(s.useState)(t),u=Object(ze.a)(l,2),m=u[0],p=u[1];return c.a.createElement(Ge,{editMode:i,activateEditMode:function(){o(!0)},deActivateEditMode:function(){o(!1),n(m)},deActivateEditModeEnterOrEsc:function(e){13===e.keyCode&&(o(!1),n(m)),27===e.keyCode&&(o(!1),n(m))},onStatusChange:function(e){p(e)},statusText:m,lookingAtMyProfile:!0})})),He=function(e){return c.a.createElement("div",{className:Ue.a.ProfileInfoContainer},c.a.createElement("h1",null,e.profile.fullName),c.a.createElement("img",{className:Ue.a.image,src:e.profile.photos.large}),c.a.createElement(Re,{placeholder:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043c\u0438\u0440"}))},We=function(e){var t=e.profile;return t?c.a.createElement("div",{className:he.a.ProfileContainer},c.a.createElement(He,{profile:t}),c.a.createElement(ye,{profile:t})):c.a.createElement(c.a.Fragment,null)},Be=n(10),Je=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getProfile(this.props.match.params.userId),this.props.getStatus(this.props.match.params.userId),this.props.match.params.userId?this.props.notLookingMyProfile():this.props.lookingMyProfile()}},{key:"render",value:function(){return c.a.createElement(We,Object.assign({},this.props,{profile:this.props.profile}))}}]),n}(c.a.Component),qe=Object(z.d)(Object(M.b)((function(e){return{profile:e.profilePage.profile,isFetching:e.profilePage.isFetching}}),{getProfile:y,lookingMyProfile:L,notLookingMyProfile:U,getStatus:function(e){return e=e||15634,function(){var t=Object(E.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:200===(a=t.sent).status&&(r=a.data,n({type:"GET_STATUS",statusText:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Be.f)(Je),Ke=n(74),Xe=n.n(Ke),Ve=n(138),Ye=n.n(Ve),Qe=function(e){return c.a.createElement("div",{className:Ye.a.MessageContainer},e.message)},Ze=n(139),$e=n.n(Ze),et=function(e){var t="/Dialog/"+e.id;return c.a.createElement(d.b,{className:$e.a.navlink,to:t},e.name)},tt=xe(10),nt=Object(be.a)({form:"message"})((function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement(Oe.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",name:"message",component:je,validate:[Se,tt]})),c.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))})),at=function(e){var t=e.dialogsData,n=e.messages,a=e.onSendMessageClick;t=t.map((function(e){return c.a.createElement(et,{name:e.name,id:e.id})})),n=n.map((function(e){return c.a.createElement(Qe,{message:e.message})}));return c.a.createElement("div",{className:Xe.a.dialogs},c.a.createElement("div",{className:Xe.a.dialogsItems},t),c.a.createElement("div",{className:Xe.a.messages},c.a.createElement("div",null,n),c.a.createElement("div",null,c.a.createElement(nt,{onSubmit:function(e){a(e.message)}}))))},rt={messages:[{id:"1",message:"Hello my friend"}],dialogsData:[{id:"1",name:"Miha"},{id:"2",name:"Kostya"}]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{messages:[].concat(Object(O.a)(e.messages),[{id:6,message:t.newMessage}]),newMessageBody:""});default:return e}},ot=function(e){return{isAuth:e.auth.isAuth}},st=Object(z.d)((function(e){var t=function(t){Object(i.a)(s,t);var n=Object(o.a)(s);function s(){return Object(a.a)(this,s),n.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(Be.a,{to:"/authorization"})}}]),s}(c.a.Component);return Object(M.b)(ot)(t)}),Object(M.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messages:e.dialogsPage.messages,isAuth:e.auth.isAuth}}),{onSendMessageClick:function(e){return function(t){t({type:"SEND-MESSAGE",newMessage:e})}}}))(at),ct=(n(298),function(e){return c.a.createElement("div",null,c.a.createElement("h2",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"))}),lt=n(140),ut=n.n(lt),mt=(n(299),n(44)),pt=n.n(mt),ft=function(e){var t=e.followed,n=e.follow,a=e.unfollow,r=e.isFetchingFollowOrUnfollowIdList,i=e.photo,o=e.name,s=e.defaultAvatarSrc,l=e.id,u=e.navlinkTo,m=t?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f",p=t?pt.a.deleteFriendButton:pt.a.addFriendButton,f=r.some((function(e){return e===l}))?c.a.createElement(ct,null):null,g=i||s;return c.a.createElement("div",{className:pt.a.UserItemContainer},c.a.createElement(d.b,{to:u},c.a.createElement("img",{className:pt.a.photo,src:g}),c.a.createElement("p",{className:pt.a.name},o)),c.a.createElement("div",null,c.a.createElement("p",null,""),c.a.createElement("p",null,""),f||c.a.createElement("button",{onClick:function(){t||n(l),t&&a(l)},className:p},m)))},gt=n(45),dt=n.n(gt),ht=function(e){var t=e.listPageNumbers,n=e.countCardsInPage,a=e.getCards,r=e.loading,i=r?dt.a.loadingStyle:"",o=Object(s.useState)(1),l=Object(ze.a)(o,2),u=l[0],m=l[1],p=t.map((function(e){return c.a.createElement("li",{className:dt.a.pageNumberContainer},c.a.createElement("button",{onClick:function(){r||function(e,t){m(e),a(e,t)}(e,n)},className:"".concat(dt.a.button," ").concat(u===e&&dt.a.currentPage),disabled:r},e))}));return c.a.createElement("ul",{className:"".concat(i," ").concat(dt.a.pageNumberListContainer)},p)},_t=function(e){for(var t=e.totalUsersCount,n=e.pagesSize,a=(e.currentPage,e.setCurrentPage,e.isFetching),r=e.users,i=e.getUsers,o=e.follow,s=e.unfollow,l=e.defaultAvatarSrc,u=e.isFetchingFollowOrUnfollowIdList,m=Math.ceil(t/n),p=[],f=1;f<=m;f++)p.push(f);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ht,{listPageNumbers:p,countCardsInPage:n,loading:a,getCards:i}),a?c.a.createElement(ct,null):null,!a&&r.map((function(e){return c.a.createElement(ft,{navlinkTo:"/Profile/"+e.id,id:e.id,photo:e.photos.small,name:e.name,followed:e.followed,isFetchingFollowOrUnfollowIdList:u,follow:o,unfollow:s,defaultAvatarSrc:l})})))},vt={users:[],defaultAvatarSrc:k,pagesSize:5,totalUsersCount:0,isFetching:!1,isFetchingFollowOrUnfollowIdList:[]},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:Object(O.a)(t.users)});case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id&&(e.followed=!0),e}))});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id&&(e.followed=!1),e}))});case"SET_TOTAL_USERS_COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return t.isFetching?Object(b.a)(Object(b.a)({},e),{},{isFetching:!0}):Object(b.a)(Object(b.a)({},e),{},{isFetching:!1});case"IS_FETCHING_FOLLOW_OR_UNFOLLOW_START":return Object(b.a)(Object(b.a)({},e),{},{isFetchingFollowOrUnfollowIdList:[].concat(Object(O.a)(e.isFetchingFollowOrUnfollowIdList),[t.id])});case"IS_FETCHING_FOLLOW_OR_UNFOLLOW_END":var n=e.isFetchingFollowOrUnfollowIdList.filter((function(e){return e!==t.id}));return Object(b.a)(Object(b.a)({},e),{},{isFetchingFollowOrUnfollowIdList:n});default:return e}},Ot=function(e){return{type:"FOLLOW",id:e}},bt=function(e){return{type:"UNFOLLOW",id:e}},Nt=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Ct=function(e){return{type:"IS_FETCHING_FOLLOW_OR_UNFOLLOW_START",id:e}},Pt=function(e){return{type:"IS_FETCHING_FOLLOW_OR_UNFOLLOW_END",id:e}},jt=function(){var e=Object(E.a)(v.a.mark((function e(t,n,a,r){var i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ct(n),t(i),e.next=4,a(n);case 4:0===e.sent.data.resultCode&&(i=r(n),t(i)),i=Pt(n),t(i);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),It=n(141),Tt=Object(It.a)((function(e){return e.usersPage.users}),(function(e){return e})),St=function(e){return e.usersPage.pagesSize},xt=function(e){return e.usersPage.totalUsersCount},At=function(e){return e.usersPage.isFetching},kt=function(e){return e.usersPage.isFetchingFollowOrUnfollowIdList},wt=function(e){return e.auth.isAuth},Ft=function(e){return e.usersPage.defaultAvatarSrc},yt=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersSC(this.props.currentPage,this.props.pagesSize)}},{key:"render",value:function(){return c.a.createElement(_t,{totalUsersCount:this.props.totalUsersCount,pagesSize:this.props.pagesSize,users:this.props.users,isFetching:this.props.isFetching,isFetchingFollowOrUnfollowIdList:this.props.isFetchingFollowOrUnfollowIdList,getUsers:this.props.getUsersSC,follow:this.props.follow,unfollow:this.props.unfollow,defaultAvatarSrc:this.props.defaultAvatarSrc})}}]),n}(c.a.Component),Lt=Object(M.b)((function(e){return{users:Tt(e),pagesSize:St(e),totalUsersCount:xt(e),isFetching:At(e),isFetchingFollowOrUnfollowIdList:kt(e),isAuth:wt(e),defaultAvatarSrc:Ft(e)}}),{getUsersSC:function(e,t){return function(){var n=Object(E.a)(v.a.mark((function n(a){var r,i;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Nt(!0),a(r),n.next=4,P.getUsers(e,t);case 4:200===(i=n.sent).status&&(s=i.data.items,a(r={type:"SET_USERS",users:s}),o=i.data.totalCount,a(r={type:"SET_TOTAL_USERS_COUNT",totalUsersCount:o}),r=Nt(!1),a(r));case 6:case"end":return n.stop()}var o,s}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:jt(n,e,P.follow.bind(P),Ot);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:jt(n,e,P.unfollow.bind(P),bt);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(yt),Ut=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth||console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439, \u043d\u0430\u0434\u043e \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435"),c.a.createElement("div",{className:ut.a.UsersContainer},c.a.createElement(Lt,null))}}]),n}(c.a.Component),zt=Object(M.b)((function(e){return{isAuth:e.auth.isAuth}}),null)(Ut),Mt=xe(40),Dt=Object(be.a)({form:"authorization"})((function(e){var t=e.handleSubmit,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement(Oe.a,{placeholder:"\u041b\u043e\u0433\u0438\u043d",name:"login",component:Ie,validate:[Mt,Se]})),c.a.createElement("div",null,c.a.createElement(Oe.a,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",component:Te,validate:[Mt,Se],type:"password"})),c.a.createElement("div",null,c.a.createElement(Oe.a,{type:"checkbox",name:"rememberMe",component:"input"})," \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),c.a.createElement("button",null,"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f"),n&&c.a.createElement("div",{className:Pe.a.inCorrectSubmitDataHint},c.a.createElement("p",null,n)))})),Gt=Object(M.b)((function(e){return{isAuth:e.auth.isAuth}}),{signIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(){var a=Object(E.a)(v.a.mark((function a(r){var i,o,s;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x(e,t,n);case 2:return 0===(i=a.sent).data.resultCode?(o=me(),r(o)):(s=me(),r(s),s=Object(se.a)("authorization",{_error:i.data.messages[0]}),r(s)),a.abrupt("return",i);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.signIn;return e.isAuth?c.a.createElement(Be.a,{to:"/profile"}):c.a.createElement("div",null,c.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),c.a.createElement(Dt,{onSubmit:function(e){t(e.login,e.password,e.rememberMe)}}))})),Rt={initializeTheApplication:!1},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE_THE_APPLICATION":return Object(b.a)(Object(b.a)({},e),{},{initializeTheApplication:t.initializeTheApplication});default:return e}},Wt=function(e){return function(t){return c.a.createElement(s.Suspense,{fallback:c.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0441\u044c")},c.a.createElement(e,t))}},Bt=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.authMe().then((function(t){e.props.initializeTheApplication(!0)}))}},{key:"render",value:function(){return this.props.initialize?c.a.createElement("div",null,this.props.initialize&&c.a.createElement("div",null,c.a.createElement(ge,null),c.a.createElement("div",{className:u.a.container},c.a.createElement(V,null),c.a.createElement(Be.b,{path:"/dialog",render:Wt(st)}),c.a.createElement(Be.b,{path:"/profile/:userId?",render:Wt(qe)}),c.a.createElement(Be.b,{path:"/users",render:Wt(zt)}),c.a.createElement(Be.b,{path:"/authorization",render:Wt(Gt)})))):c.a.createElement(ct,null)}}]),n}(c.a.Component),Jt=Object(M.b)((function(e){return{initialize:e.appPage.initializeTheApplication}}),{authMe:me,initializeTheApplication:function(e){return function(t){t(function(e){return{type:"INITIALIZE_THE_APPLICATION",initializeTheApplication:e}}(e))}}})(Bt),qt=n(67),Kt=n.n(qt),Xt=n(142),Vt=n(130),Yt=Object(z.c)({profilePage:F,dialogsPage:it,usersPage:Et,auth:le,form:Vt.a,appPage:Ht}),Qt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,Zt=Object(z.e)(Yt,Qt(Object(z.a)(Xt.a)));window.store=Zt;var $t=Zt;Kt.a.render(c.a.createElement(d.a,null,c.a.createElement(M.a,{store:$t},c.a.createElement(Jt,null))),document.getElementById("root"))},33:function(e,t,n){e.exports={authorizationPanelWrapper:"AuthorizationPanel_authorizationPanelWrapper__-PCA-",authorizationPanelInfo:"AuthorizationPanel_authorizationPanelInfo__17Bxo",authorizationPanel:"AuthorizationPanel_authorizationPanel__TESBW",infoText:"AuthorizationPanel_infoText__3AtVc"}},44:function(e,t,n){e.exports={UserItemContainer:"UserItem_UserItemContainer__pnYP4",photo:"UserItem_photo__18snE",name:"UserItem_name__3ypJv",deleteFriendButton:"UserItem_deleteFriendButton__cHMuE",addFriendButton:"UserItem_addFriendButton__lL1bQ"}},45:function(e,t,n){e.exports={currentPage:"Pagination_currentPage__3jbiP",pageNumberListContainer:"Pagination_pageNumberListContainer__165Mx",pageNumberContainer:"Pagination_pageNumberContainer__3SdD6",button:"Pagination_button__2jNSq",loadingStyle:"Pagination_loadingStyle__1JFzI"}},55:function(e,t,n){e.exports={statusTextContainer:"Status_statusTextContainer__1pm7H",statusText:"Status_statusText__1D5I6",inputStatusText:"Status_inputStatusText__1gKH4"}},57:function(e,t,n){e.exports={PostContainer:"Post_PostContainer__1yATg",PostContentImg:"Post_PostContentImg__3DElN",PostCountLikes:"Post_PostCountLikes__3ehFE",image:"Post_image__2zIf1"}},71:function(e,t,n){e.exports={friendContainer:"Friend_friendContainer__3T-Nu",photo:"Friend_photo__1izue",name:"Friend_name__32DfJ"}},72:function(e,t,n){e.exports={authorizationItem:"AuthorizationItem_authorizationItem__13Pq4",authorizationImg:"AuthorizationItem_authorizationImg__1AMTm",authorizationText:"AuthorizationItem_authorizationText__3uqOV"}},74:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__CAY9F",active:"Dialogs_active__PiIkx",dialogsItems:"Dialogs_dialogsItems__vBA4Q",messages:"Dialogs_messages__2edFn"}},91:function(e,t,n){e.exports={ProfileContainer:"Profile_ProfileContainer__1FhWq"}},97:function(e,t,n){e.exports={image:"ProfileInfo_image__31k9u"}}},[[168,1,2]]]);
//# sourceMappingURL=main.ae0498aa.chunk.js.map