/*! For license information please see 3.b152d5b0.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{429:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"\u0418\u0434\u0451\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440!"))};t.a=o},430:function(e,t,n){e.exports={friend:"ButtonFollowUnfollow_friend__1wpfo",notFriend:"ButtonFollowUnfollow_notFriend__3iQnm"}},431:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},432:function(e,t,n){"use strict";var r=n(30),a=n(0),o=n.n(a),l=n(430),u=n.n(l),i=n(431),s=n.n(i),c=function(e){var t=e.friend,n=e.follow,a=e.unfollow,l=e.userId,i=t?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f",c=s()(Object(r.a)({},u.a.friend,t),Object(r.a)({},u.a.notFriend,!t)),f=t?a:n;return o.a.createElement("button",{onClick:function(){return f(l)},className:c},i)};c.defaultProps={friend:!1};var f=c;t.a=f},433:function(e,t,n){e.exports={UserItemContainer:"Users_UserItemContainer__jPxDp",photo:"Users_photo__1FgDE",name:"Users_name__1K_Vf",deleteFriendButton:"Users_deleteFriendButton__2nOmo",addFriendButton:"Users_addFriendButton__TqzPu"}},437:function(e,t,n){e.exports={currentPage:"Pagination_currentPage__2JXqN",pageNumberListContainer:"Pagination_pageNumberListContainer__1cHI3",pageNumberContainer:"Pagination_pageNumberContainer__3HSkW",button:"Pagination_button__hHvcW",loadingStyle:"Pagination_loadingStyle__mxq0N"}},440:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(433),l=n.n(o),u=n(29),i=n(429),s=n(432),c=function(e){var t=e.followed,n=e.follow,r=e.unfollow,o=e.isFetchingFollowOrUnfollowIdList,c=e.photo,f=e.name,m=e.defaultAvatarSrc,p=e.id,d=e.navlinkTo,g=e.isAuth,h=e.startCommunication,v=o.some((function(e){return e===p}))?a.a.createElement(i.a,null):null,w=c||m;return a.a.createElement("div",{className:l.a.UserItemContainer},a.a.createElement(u.b,{to:d},a.a.createElement("img",{className:l.a.photo,src:w,alt:"user"}),a.a.createElement("p",{className:l.a.name},f)),a.a.createElement("div",null,a.a.createElement("p",null,""),a.a.createElement("p",null,""),v||g&&a.a.createElement(s.a,{follow:n,unfollow:r,friend:t,userId:p}),a.a.createElement("button",{onClick:function(){return h(p)}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433")))},f=n(28),m=n(4),p=n.n(m),d=n(437),g=n.n(d);p.a.propTypes={listPageNumbers:p.a.array.isRequired,countCardsInPage:p.a.number.isRequired,getCards:p.a.func.isRequired,loading:p.a.bool.isRequired};var h=function(e){var t=e.listPageNumbers,n=e.countCardsInPage,o=e.getCards,l=e.loading,u=l?g.a.loadingStyle:"",i=Object(r.useState)(1),s=Object(f.a)(i,2),c=s[0],m=s[1],p=t.map((function(e){return a.a.createElement("li",{key:"key-"+e,className:g.a.pageNumberContainer},a.a.createElement("button",{onClick:function(){l||function(e,t){m(e),o(e,t)}(e,n)},className:"".concat(g.a.button," ").concat(c===e&&g.a.currentPage),disabled:l},e))}));return a.a.createElement("ul",{className:"".concat(u," ").concat(g.a.pageNumberListContainer)},p)},v=function(e){for(var t=e.totalUsersCount,n=e.pagesSize,r=e.isFetching,o=e.users,l=e.getUsers,u=e.follow,s=e.unfollow,f=e.defaultAvatarSrc,m=e.isFetchingFollowOrUnfollowIdList,p=e.isAuth,d=e.startCommunication,g=Math.ceil(t/n),v=[],w=1;w<=g;w++)v.push(w);return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{listPageNumbers:v,countCardsInPage:n,loading:r,getCards:l}),r?a.a.createElement(i.a,null):null,!r&&o.map((function(e,t){return a.a.createElement(c,{key:e.name+t,navlinkTo:"/Profile/"+e.id,id:e.id,photo:e.photos.small,name:e.name,followed:e.followed,isFetchingFollowOrUnfollowIdList:m,follow:u,unfollow:s,defaultAvatarSrc:f,isAuth:p,startCommunication:d})})))},w=n(36),_=n(130);function b(e,t){return e===t}function C(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function F(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var y=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,l=r.pop(),u=F(r),i=e.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=l,s.dependencies=u,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,n=null,r=null;return function(){return C(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var U=y((function(e){return e.usersPage.users}),(function(e){return e})),E=function(e){return e.usersPage.pagesSize},P=function(e){return e.usersPage.totalUsersCount},A=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.isFetchingFollowOrUnfollowIdList},N=function(e){return e.auth.isAuth},O=function(e){return e.usersPage.defaultAvatarSrc},I=n(128),j={getUsersSC:_.c,follow:_.b,unfollow:_.d,startCommunication:I.d},k=Object(w.b)((function(e){return{users:U(e),pagesSize:E(e),totalUsersCount:P(e),isFetching:A(e),isFetchingFollowOrUnfollowIdList:S(e),isAuth:N(e),defaultAvatarSrc:O(e)}}),j)((function(e){var t=e.currentPage,n=e.pagesSize,o=e.totalUsersCount,l=e.getUsersSC,u=e.users,i=e.isFetching,s=e.isFetchingFollowOrUnfollowIdList,c=e.follow,f=e.unfollow,m=e.defaultAvatarSrc,p=e.isAuth,d=e.startCommunication;return Object(r.useEffect)((function(){l(t,n)}),[l,t,n]),a.a.createElement(v,{totalUsersCount:o,pagesSize:n,users:u,isFetching:i,isFetchingFollowOrUnfollowIdList:s,getUsers:l,follow:c,unfollow:f,defaultAvatarSrc:m,isAuth:p,startCommunication:d})})),L=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),null)((function(e){return e.isAuth||console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439, \u043d\u0430\u0434\u043e \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435"),a.a.createElement("div",{className:l.a.UsersContainer},a.a.createElement(k,null))}));t.default=L}}]);
//# sourceMappingURL=3.b152d5b0.chunk.js.map