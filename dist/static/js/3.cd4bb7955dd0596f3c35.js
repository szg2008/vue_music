webpackJsonp([3],{"/lZI":function(t,e,n){n("IXzk");var r=n("VU/8")(n("98ik"),n("uJ2R"),"data-v-295de46d",null);t.exports=r.exports},"98ik":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3Q4o"),i=n("43Vb"),o=n.n(i);e.default={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;this.$nextTick(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()}),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,o=0;o<this.children.length;o++){var a=this.children[o];n.i(r.c)(a,"slider-item"),a.style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new o.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&t._play()}),this.slider.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}}}},Haw9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("exGp"),a=n.n(o),s=n("Dd8w"),c=n.n(s),d=n("qwAB"),l=n.n(d),u=n("/lZI"),f=n.n(u),m=n("y/jF"),A=n.n(m),h=n("m40h"),p=(n("T452"),n("F4+m")),v=n("NYxO");e.default={mixins:[p.c],data:function(){return{recommends:[],distList:[],checkLoaded:!1}},created:function(){this._getRecomend(),this._getDistList()},methods:c()({_getRecomend:function(){var t=this;return a()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(h.b)();case 2:r=e.sent,t.recommends=r.data.slider;case 4:case"end":return e.stop()}},e,t)}))()},_getDistList:function(){var t=this;return a()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(h.c)();case 2:r=e.sent,t.distList=r.recomPlaylist.data.v_hot;case 4:case"end":return e.stop()}},e,t)}))()},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.recommend.style.bottom=e,this.$refs.scroll.refresh()},selectItem:function(t){this.setDisc(t),this.$router.push({path:"/recommend/"+t.content_id})}},n.i(v.b)({setDisc:"SET_DISC"})),components:{Slider:f.a,Scroll:l.a,Loading:A.a}}},IFMj:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".recommend[data-v-afcb82e8]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-afcb82e8]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-afcb82e8]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title[data-v-afcb82e8]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-afcb82e8]{display:flex;box-sizing:border-box;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-afcb82e8]{flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-afcb82e8]{display:flex;flex-direction:column;justify-content:center;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-afcb82e8]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-afcb82e8]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-afcb82e8]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["F:/vue_music/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,+CACE,YAAa,AACb,eAAiB,CAClB,AACD,+DACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,2EACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,qEACE,aAAc,AACd,sBAAuB,AACvB,mBAAoB,AACpB,mBAA0B,CAC3B,AACD,2EACE,cAAe,AACf,WAAY,AACZ,kBAAoB,CACrB,AACD,2EACE,aAAc,AACd,sBAAuB,AACvB,uBAAwB,AACxB,OAAQ,AACR,iBAAkB,AAClB,gBAAiB,AACjB,cAAgB,CACjB,AACD,iFACE,mBAAoB,AACpB,UAAY,CACb,AACD,iFACE,wBAA6B,CAC9B,AACD,kEACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"recommend.vue",sourcesContent:["\n.recommend[data-v-afcb82e8] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content[data-v-afcb82e8] {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper[data-v-afcb82e8] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .recommend-list .list-title[data-v-afcb82e8] {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-content .recommend-list .item[data-v-afcb82e8] {\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 0 20px 20px 20px;\n}\n.recommend .recommend-content .recommend-list .item .icon[data-v-afcb82e8] {\n  flex: 0 0 60px;\n  width: 60px;\n  padding-right: 20px;\n}\n.recommend .recommend-content .recommend-list .item .text[data-v-afcb82e8] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n  line-height: 20px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.recommend .recommend-content .recommend-list .item .text .name[data-v-afcb82e8] {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.recommend .recommend-content .recommend-list .item .text .desc[data-v-afcb82e8] {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .recommend-content .loading-container[data-v-afcb82e8] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},IXzk:function(t,e,n){var r=n("o+Fx");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("386f51c4",r,!0)},SldL:function(t,e){!function(e){"use strict";function n(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),s=new m(r||[]);return a._invoke=d(t,n,s),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,i,o,a){var s=r(t[n],t,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&g.call(d,"__await")?Promise.resolve(d.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(d).then(function(t){c.value=t,o(c)},a)}a(s.arg)}function n(t,n){function r(){return new Promise(function(r,i){e(t,n,r,i)})}return i=i?i.then(r,r):r()}var i;this._invoke=n}function d(t,e,n){var i=_;return function(o,a){if(i===k)throw new Error("Generator is already running");if(i===L){if("throw"===o)throw a;return h()}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=l(s,n);if(c){if(c===j)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===_)throw i=L,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=k;var d=r(t,e,n);if("normal"===d.type){if(i=n.done?L:E,d.arg===j)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(i=L,n.method="throw",n.arg=d.arg)}}}function l(t,e){var n=t.iterator[e.method];if(n===p){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=p,l(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var i=r(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,j;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=p),e.delegate=null,j):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function u(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function m(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(u,this),this.reset(!0)}function A(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=p,e.done=!0,e};return r.next=r}}return{next:h}}function h(){return{value:p,done:!0}}var p,v=Object.prototype,g=v.hasOwnProperty,C="function"==typeof Symbol?Symbol:{},x=C.iterator||"@@iterator",y=C.asyncIterator||"@@asyncIterator",w=C.toStringTag||"@@toStringTag",B="object"==typeof t,b=e.regeneratorRuntime;if(b)return void(B&&(t.exports=b));b=e.regeneratorRuntime=B?t.exports:{},b.wrap=n;var _="suspendedStart",E="suspendedYield",k="executing",L="completed",j={},D={};D[x]=function(){return this};var F=Object.getPrototypeOf,P=F&&F(F(A([])));P&&P!==v&&g.call(P,x)&&(D=P);var S=a.prototype=i.prototype=Object.create(D);o.prototype=S.constructor=a,a.constructor=o,a[w]=o.displayName="GeneratorFunction",b.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},b.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,w in t||(t[w]="GeneratorFunction")),t.prototype=Object.create(S),t},b.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[y]=function(){return this},b.AsyncIterator=c,b.async=function(t,e,r,i){var o=new c(n(t,e,r,i));return b.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(S),S[w]="Generator",S[x]=function(){return this},S.toString=function(){return"[object Generator]"},b.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},b.values=A,m.prototype={constructor:m,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=p,this.done=!1,this.delegate=null,this.method="next",this.arg=p,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=p)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=p),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=g.call(i,"catchLoc"),s=g.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,j):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),f(n),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;f(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=p),j}}}(function(){return this}()||Function("return this")())},"VO+u":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.distList}},[n("div",[t.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",t._l(t.recommends,function(e){return n("div",[n("a",{attrs:{href:e.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),n("ul",{staticClass:"list"},t._l(t.distList,function(e){return n("li",{staticClass:"item",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}],attrs:{alt:"",width:"60",height:"60"}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n                                "+t._s(e.rcmdcontent)+"\n                            ")])])])}))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.distList.length,expression:"!distList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},"W1+L":function(t,e,n){n("ogEF");var r=n("VU/8")(n("Haw9"),n("VO+u"),"data-v-afcb82e8",null);t.exports=r.exports},Xxa5:function(t,e,n){t.exports=n("jyFz")},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r=n("//Fk"),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){function r(o,a){try{var s=e[o](a),c=s.value}catch(t){return void n(t)}if(!s.done)return i.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},m40h:function(t,e,n){"use strict";function r(){var t=d()({},u.b,{platform:"h5",uin:0,needNewCode:1});return n.i(l.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,u.c)}function i(){var t=d()({},u.b,{platform:"yqq",needNewCode:0,notice:0,ct:"24",format:"json",data:"%7B%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%7D"});return m.a.get("/api/distlist",{params:t}).then(function(t){return s.a.resolve(t.data)})}function o(t){var e=d()({},u.b,{type:1,json:1,utf8:1,onlysong:0,disstid:t,format:"json",g_tk:1756559080,hostUin:0,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return m.a.get("/api/songlist",{params:e}).then(function(t){return s.a.resolve(t.data)})}e.b=r,e.c=i,e.a=o;var a=n("//Fk"),s=n.n(a),c=n("woOf"),d=n.n(c),l=n("Gak4"),u=n("T452"),f=n("mtWM"),m=n.n(f)},"o+Fx":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".slider[data-v-295de46d]{min-height:1px}.slider .slider-group[data-v-295de46d]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-295de46d]{float:left;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-295de46d]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-295de46d]{display:block;width:100%}.slider .dots[data-v-295de46d]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-295de46d]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-295de46d]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["F:/vue_music/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,uCACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,wDACE,cAAe,AACf,UAAY,CACb,AACD,+BACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,oCACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,2CACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider[data-v-295de46d] {\n  min-height: 1px;\n}\n.slider .slider-group[data-v-295de46d] {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item[data-v-295de46d] {\n  float: left;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a[data-v-295de46d] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img[data-v-295de46d] {\n  display: block;\n  width: 100%;\n}\n.slider .dots[data-v-295de46d] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot[data-v-295de46d] {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active[data-v-295de46d] {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},ogEF:function(t,e,n){var r=n("IFMj");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("6b0c7b16",r,!0)},uJ2R:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,r){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===r}})}))])},staticRenderFns:[]}}});
//# sourceMappingURL=3.cd4bb7955dd0596f3c35.js.map