webpackJsonp([0],{"6yhl":function(t,e,n){var i=n("jIS9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("5616297e",i,!0)},BRgg:function(t,e,n){"use strict";function i(){var t=a()({},l.b,{platform:"h5",uin:0,format:"jsonp",needNewCode:1});return n.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function r(t){var e=a()({},l.b,{page:"detail",type:"top",tpl:3,topid:t,platform:"h5",needNewCode:1});return n.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,l.c)}e.b=i,e.a=r;var o=n("woOf"),a=n.n(o),s=n("Gak4"),l=n("T452"),c=n("mtWM");n.n(c)},PaUb:function(t,e,n){var i=n("VTq0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("ec4051c8",i,!0)},SldL:function(t,e){!function(e){"use strict";function n(t,e,n,i){var o=e&&e.prototype instanceof r?e:r,a=Object.create(o.prototype),s=new f(i||[]);return a._invoke=c(t,n,s),a}function i(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function r(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function l(t){function e(n,r,o,a){var s=i(t[n],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&v.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){l.value=t,o(l)},a)}a(s.arg)}function n(t,n){function i(){return new Promise(function(i,r){e(t,n,i,r)})}return r=r?r.then(i,i):i()}var r;this._invoke=n}function c(t,e,n){var r=k;return function(o,a){if(r===E)throw new Error("Generator is already running");if(r===L){if("throw"===o)throw a;return h()}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var l=u(s,n);if(l){if(l===j)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===k)throw r=L,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=E;var c=i(t,e,n);if("normal"===c.type){if(r=n.done?L:_,c.arg===j)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=L,n.method="throw",n.arg=c.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,u(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var r=i(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,j;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,j):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function d(t){if(t){var e=t[C];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(v.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=g,e.done=!0,e};return i.next=i}}return{next:h}}function h(){return{value:g,done:!0}}var g,m=Object.prototype,v=m.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},C=y.iterator||"@@iterator",b=y.asyncIterator||"@@asyncIterator",x=y.toStringTag||"@@toStringTag",B="object"==typeof t,w=e.regeneratorRuntime;if(w)return void(B&&(t.exports=w));w=e.regeneratorRuntime=B?t.exports:{},w.wrap=n;var k="suspendedStart",_="suspendedYield",E="executing",L="completed",j={},Y={};Y[C]=function(){return this};var O=Object.getPrototypeOf,z=O&&O(O(d([])));z&&z!==m&&v.call(z,C)&&(Y=z);var S=a.prototype=r.prototype=Object.create(Y);o.prototype=S.constructor=a,a.constructor=o,a[x]=o.displayName="GeneratorFunction",w.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},w.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(S),t},w.awrap=function(t){return{__await:t}},s(l.prototype),l.prototype[b]=function(){return this},w.AsyncIterator=l,w.async=function(t,e,i,r){var o=new l(n(t,e,i,r));return w.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(S),S[x]="Generator",S[C]=function(){return this},S.toString=function(){return"[object Generator]"},w.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},w.values=d,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,i){return o.type="throw",o.arg=t,n.next=e,i&&(n.method="next",n.arg=g),!!i}if(this.done)throw t;for(var n=this,i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var a=v.call(r,"catchLoc"),s=v.call(r,"finallyLoc");if(a&&s){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&v.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,j):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;p(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:d(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=g),j}}}(function(){return this}()||Function("return this")())},VTq0:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".music-list{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer{position:relative;height:100%;background:#222}.music-list .list{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper{padding:20px 30px}.music-list .list .loading-container{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["F:/vue_music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,YACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,kBACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,6BACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,mBACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,sBACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,oCACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,0CACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,qDACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,gDACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,8BACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,sBACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,kBACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,qCACE,iBAAmB,CACpB,AACD,qCACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"music-list.vue",sourcesContent:["\n.music-list {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},Xxa5:function(t,e,n){t.exports=n("jyFz")},YMwN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),o=n("qwAB"),a=n.n(o),s=n("ZV4u"),l=n.n(s),c=n("3Q4o"),u=n("y/jF"),A=n.n(u),p=n("NYxO"),f=n("F4+m"),d=n.i(c.a)("transform"),h=n.i(c.a)("backdrop");e.default={mixins:[f.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},components:{Scroll:a.a,SongList:l.a,Loading:A.a},methods:r()({scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()}},n.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTranslateY,t),n=0,i=1,r=0;this.$refs.layer.style[d]="translate3d(0,"+e+"px,0)";var o=Math.abs(t/this.imageHeight);t>0?(i=1+o,n=10):r=Math.min(20*o,20),this.$refs.filter.style[h]="blur("+r+"px)",t<this.minTranslateY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playbutton.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playbutton.style.display=""),this.$refs.bgImage.style.zIndex=n,this.$refs.bgImage.style[d]="scale("+i+")"}}}},exGp:function(t,e,n){"use strict";e.__esModule=!0;var i=n("//Fk"),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){return function(){var e=t.apply(this,arguments);return new r.default(function(t,n){function i(o,a){try{var s=e[o](a),l=s.value}catch(t){return void n(t)}if(!s.done)return r.default.resolve(l).then(function(t){i("next",t)},function(t){i("throw",t)});t(l)}return i("next")})}}},f8nL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length,expression:"songs.length"}],ref:"playbutton",staticClass:"play",on:{click:t.random}},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("div",{staticClass:"song-list-wrapper"}),t._v(" "),n("div",{staticClass:"loading-container"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{probeType:t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},staticRenderFns:[]}},gcxj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),o=n("Xxa5"),a=n.n(o),s=n("exGp"),l=n.n(s),c=n("kvay"),u=n.n(c),A=n("NYxO"),p=n("BRgg"),f=n("T452"),d=n("PvFA");e.default={created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;return l()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.toplist.id){e.next=3;break}return t.$router.push("/rank"),e.abrupt("return");case 3:return e.next=5,n.i(p.a)(t.toplist.id);case 5:i=e.sent,i.code===f.a&&(t.songs=t._normalizeSongs(i.songlist));case 7:case"end":return e.stop()}},e,t)}))()},_normalizeSongs:function(t){var e=[];return t.forEach(function(t,i){var r=t.data;r.songid&&r.albumid&&e.push(n.i(d.b)(r))}),e}},data:function(){return{songs:[],rank:!0}},computed:r()({title:function(){return this.toplist.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},n.i(A.a)(["toplist"])),components:{MusicList:u.a}}},jIS9:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".slide-enter-active[data-v-ea1e1ddc],.slide-leave-active[data-v-ea1e1ddc]{transition:all .3s ease}.slide-enter[data-v-ea1e1ddc],.slide-leave-to[data-v-ea1e1ddc]{transform:translate3d(100%,0,0)}","",{version:3,sources:["F:/vue_music/src/components/top-list/top-list.vue"],names:[],mappings:"AACA,0EAEE,uBAA0B,CAC3B,AACD,+DAEE,+BAAmC,CACpC",file:"top-list.vue",sourcesContent:["\n.slide-enter-active[data-v-ea1e1ddc],\n.slide-leave-active[data-v-ea1e1ddc] {\n  transition: all 0.3s ease;\n}\n.slide-enter[data-v-ea1e1ddc],\n.slide-leave-to[data-v-ea1e1ddc] {\n  transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},jyFz:function(t,e,n){var i=function(){return this}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("SldL"),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(t){i.regeneratorRuntime=void 0}},kvay:function(t,e,n){n("PaUb");var i=n("VU/8")(n("YMwN"),n("f8nL"),null,null);t.exports=i.exports},s3x3:function(t,e,n){n("6yhl");var i=n("VU/8")(n("gcxj"),n("sO+v"),"data-v-ea1e1ddc",null);t.exports=i.exports},"sO+v":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs,rank:t.rank}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.d40fadb5222d3e6229dc.js.map