(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(94);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"\u0418\u0434\u0451\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440!"))}},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(95);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){e.exports={UserItemContainer:"UserItem_UserItemContainer__2a60J",photo:"UserItem_photo__A9lPe",name:"UserItem_name__3Hp0u",deleteFriendButton:"UserItem_deleteFriendButton__1QdBv",addFriendButton:"UserItem_addFriendButton__1Yef1"}},307:function(e,t,n){e.exports={currentPage:"Pagination_currentPage__2JXqN",pageNumberListContainer:"Pagination_pageNumberListContainer__1cHI3",pageNumberContainer:"Pagination_pageNumberContainer__3HSkW",button:"Pagination_button__hHvcW",loadingStyle:"Pagination_loadingStyle__mxq0N"}},309:function(e,t,n){"use strict";n.r(t);var r=n(26),a=n(27),o=n(29),u=n(28),l=n(0),i=n.n(l),s=n(304),c=n.n(s),f=(n(305),n(306)),p=n.n(f),m=n(15),d=n(295),g=function(e){var t=e.followed,n=e.follow,r=e.unfollow,a=e.isFetchingFollowOrUnfollowIdList,o=e.photo,u=e.name,l=e.defaultAvatarSrc,s=e.id,c=e.navlinkTo,f=t?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f",g=t?p.a.deleteFriendButton:p.a.addFriendButton,h=a.some((function(e){return e===s}))?i.a.createElement(d.a,null):null,v=o||l;return i.a.createElement("div",{className:p.a.UserItemContainer},i.a.createElement(m.b,{to:c},i.a.createElement("img",{className:p.a.photo,src:v}),i.a.createElement("p",{className:p.a.name},u)),i.a.createElement("div",null,i.a.createElement("p",null,""),i.a.createElement("p",null,""),h||i.a.createElement("button",{onClick:function(){t||n(s),t&&r(s)},className:g},f)))},h=n(296),v=n(307),b=n.n(v),w=function(e){var t=e.listPageNumbers,n=e.countCardsInPage,r=e.getCards,a=e.loading,o=a?b.a.loadingStyle:"",u=Object(l.useState)(1),s=Object(h.a)(u,2),c=s[0],f=s[1],p=t.map((function(e){return i.a.createElement("li",{className:b.a.pageNumberContainer},i.a.createElement("button",{onClick:function(){a||function(e,t){f(e),r(e,t)}(e,n)},className:"".concat(b.a.button," ").concat(c===e&&b.a.currentPage),disabled:a},e))}));return i.a.createElement("ul",{className:"".concat(o," ").concat(b.a.pageNumberListContainer)},p)},y=function(e){for(var t=e.totalUsersCount,n=e.pagesSize,r=(e.currentPage,e.setCurrentPage,e.isFetching),a=e.users,o=e.getUsers,u=e.follow,l=e.unfollow,s=e.defaultAvatarSrc,c=e.isFetchingFollowOrUnfollowIdList,f=Math.ceil(t/n),p=[],m=1;m<=f;m++)p.push(m);return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{listPageNumbers:p,countCardsInPage:n,loading:r,getCards:o}),r?i.a.createElement(d.a,null):null,!r&&a.map((function(e){return i.a.createElement(g,{navlinkTo:"/Profile/"+e.id,id:e.id,photo:e.photos.small,name:e.name,followed:e.followed,isFetchingFollowOrUnfollowIdList:c,follow:u,unfollow:l,defaultAvatarSrc:s})})))},_=n(13),C=n(127);function F(e,t){return e===t}function S(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function U(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var E=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,u=r.pop(),l=U(r),i=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=l.length,n=0;n<t;n++)e.push(l[n].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=u,s.dependencies=l,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,n=null,r=null;return function(){return S(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var P=E((function(e){return e.usersPage.users}),(function(e){return e})),O=function(e){return e.usersPage.pagesSize},I=function(e){return e.usersPage.totalUsersCount},A=function(e){return e.usersPage.isFetching},N=function(e){return e.usersPage.isFetchingFollowOrUnfollowIdList},j=function(e){return e.auth.isAuth},k=function(e){return e.usersPage.defaultAvatarSrc},L=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersSC(this.props.currentPage,this.props.pagesSize)}},{key:"render",value:function(){return i.a.createElement(y,{totalUsersCount:this.props.totalUsersCount,pagesSize:this.props.pagesSize,users:this.props.users,isFetching:this.props.isFetching,isFetchingFollowOrUnfollowIdList:this.props.isFetchingFollowOrUnfollowIdList,getUsers:this.props.getUsersSC,follow:this.props.follow,unfollow:this.props.unfollow,defaultAvatarSrc:this.props.defaultAvatarSrc})}}]),n}(i.a.Component),B=Object(_.b)((function(e){return{users:P(e),pagesSize:O(e),totalUsersCount:I(e),isFetching:A(e),isFetchingFollowOrUnfollowIdList:N(e),isAuth:j(e),defaultAvatarSrc:k(e)}}),{getUsersSC:C.c,follow:C.b,unfollow:C.d})(L),z=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth||console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439, \u043d\u0430\u0434\u043e \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435"),i.a.createElement("div",{className:c.a.UsersContainer},i.a.createElement(B,null))}}]),n}(i.a.Component);t.default=Object(_.b)((function(e){return{isAuth:e.auth.isAuth}}),null)(z)}}]);
//# sourceMappingURL=4.ac72eb12.chunk.js.map