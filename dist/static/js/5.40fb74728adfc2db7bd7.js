webpackJsonp([5],{BRgg:function(t,e,n){"use strict";function r(){var t=a()({},c.b,{platform:"h5",uin:0,format:"jsonp",needNewCode:1});return n.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,c.c)}function o(t){var e=a()({},c.b,{page:"detail",type:"top",tpl:3,topid:t,platform:"h5",needNewCode:1});return n.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,c.c)}e.b=r,e.a=o;var i=n("woOf"),a=n.n(i),s=n("Gak4"),c=n("T452"),l=n("mtWM");n.n(l)},Kjo5:function(t,e,n){n("jhEw");var r=n("VU/8")(n("L4OO"),n("S+Mw"),null,null);t.exports=r.exports},L4OO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r),i=n("exGp"),a=n.n(i),s=n("Dd8w"),c=n.n(s),l=n("BRgg"),u=n("T452"),f=n("qwAB"),p=n.n(f),h=n("y/jF"),d=n.n(h),A=n("F4+m"),g=n("NYxO");e.default={mixins:[A.c],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:c()({handlePlaylist:function(t){var e=t.length?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},_getTopList:function(){var t=this;return a()(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(l.b)();case 2:r=e.sent,r.code===u.a&&(t.topList=r.data.topList);case 4:case"end":return e.stop()}},e,t)}))()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)}},n.i(g.b)({setTopList:"SET_TOP_LIST"})),components:{Scroll:p.a,Loading:d.a}}},"S+Mw":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[n("ul",t._l(t.topList,function(e){return n("li",{staticClass:"item",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{alt:"",width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(e.songList,function(e,r){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(r+1))]),t._v(" "),n("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},SldL:function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new h(r||[]);return a._invoke=l(t,n,s),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,o,i,a){var s=r(t[n],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&m.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(t,e,n){var o=_;return function(i,a){if(o===b)throw new Error("Generator is already running");if(o===E){if("throw"===i)throw a;return A()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===j)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===_)throw o=E,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=b;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?E:k,l.arg===j)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=E,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,u(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,j;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,j):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=g,e.done=!0,e};return r.next=r}}return{next:A}}function A(){return{value:g,done:!0}}var g,v=Object.prototype,m=v.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},x=y.iterator||"@@iterator",w=y.asyncIterator||"@@asyncIterator",C=y.toStringTag||"@@toStringTag",B="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(B&&(t.exports=L));L=e.regeneratorRuntime=B?t.exports:{},L.wrap=n;var _="suspendedStart",k="suspendedYield",b="executing",E="completed",j={},O={};O[x]=function(){return this};var F=Object.getPrototypeOf,S=F&&F(F(d([])));S&&S!==v&&m.call(S,x)&&(O=S);var T=a.prototype=o.prototype=Object.create(O);i.prototype=T.constructor=a,a.constructor=i,a[C]=i.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,C in t||(t[C]="GeneratorFunction")),t.prototype=Object.create(T),t},L.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[w]=function(){return this},L.AsyncIterator=c,L.async=function(t,e,r,o){var i=new c(n(t,e,r,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(T),T[C]="Generator",T[x]=function(){return this},T.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},L.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=g),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),s=m.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:d(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=g),j}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,n){t.exports=n("jyFz")},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r=n("//Fk"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,a){try{var s=e[i](a),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},jA9f:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".rank{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist{height:100%;overflow:hidden}.rank .toplist .item{display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item:last-child{padding-bottom:20px}.rank .toplist .item .icon{flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist{flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["F:/vue_music/src/components/rank/rank.vue"],names:[],mappings:"AACA,MACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,eACE,YAAa,AACb,eAAiB,CAClB,AACD,qBACE,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,gCACE,mBAAqB,CACtB,AACD,2BACE,eAAgB,AAChB,YAAa,AACb,YAAc,CACf,AACD,+BACE,OAAQ,AACR,aAAc,AACd,sBAAuB,AACvB,uBAAwB,AACxB,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,qCACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,kCACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"rank.vue",sourcesContent:["\n.rank {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item {\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon {\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},jhEw:function(t,e,n){var r=n("jA9f");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("56894510",r,!0)},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}});
//# sourceMappingURL=5.40fb74728adfc2db7bd7.js.map