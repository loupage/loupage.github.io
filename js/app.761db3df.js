(function(e){function t(t){for(var o,r,i=t[0],d=t[1],c=t[2],u=0,l=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},r={1:0},a={1:0},s=[];function i(e){return d.p+"js/"+({}[e]||e)+"."+{2:"3a6c140f",3:"64a332a5",4:"21e157ef",5:"8e559557",6:"994e18bc",7:"00f6800b",8:"b74fda68"}[e]+".js"}function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={2:1,3:1,4:1,5:1,6:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"3b3cb087",3:"1321565a",4:"646b8b0b",5:"8a4f669d",6:"c4bc6c64",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=d.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],u=c.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=i(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("5319");var o=n("c973"),r=n.n(o),a=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),s=n("1f91"),i=n("42d2"),d=n("b05d"),c=n("436b"),u=n("2a19"),l=n("18d6");a["a"].use(d["a"],{config:{},lang:s["a"],iconSet:i["a"],plugins:{Dialog:c["a"],Notify:u["a"],LocalStorage:l["a"]}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},m=[],p=n("ded3"),h=n.n(p),b=n("2f62"),y={methods:h()({},Object(b["b"])("auth",["handleAuthStateChange"])),mounted(){this.handleAuthStateChange()},name:"App"},S=y,g=n("2877"),v=Object(g["a"])(S,f,m,!1,null,null,null),w=v.exports,I=(n("e01a"),n("4e82"),n("498a"),n("1732")),Q=n("fc1b");const C={stories:{},search:"",storiesDownloaded:!1,currentStatements:{},currentQuestions:{},currentStory:"",currentStatement:"",currentStatementText:"",currentQuestion:""},O={deleteStory(e,t){a["a"].delete(e.stories,t)},clearCurrentStatements(e){e.currentStatements={}},clearCurrentQuestions(e){e.currentQuestions={}},deleteStatement(e,t){let n=e.currentStatements;a["a"].delete(n,t.id)},deleteQuestion(e,t){let n=e.currentQuestions;a["a"].delete(n,t.id)},addStory(e,t){a["a"].set(e.stories,t.id,t.story)},addStatement(e,t){a["a"].set(e.currentStatements,t.id,t)},addQuestion(e,t){a["a"].set(e.currentQuestions,t.id,t)},updateStory(e,t){Object.assign(e.stories[t.id],t.updates)},updateStatement(e,t){Object.assign(e.currentStatements[t.id],t.updates)},updateQuestion(e,t){Object.assign(e.currentQuestions[t.id],t.updates)},setSearch(e,t){e.search=t},setStoriesDownloaded(e,t){e.storiesDownloaded=t},setCurrentStory(e,t){e.currentStory=t},setCurrentStatement(e,t){e.currentStatement=t.id,e.currentStatementText=t.statementText},setCurrentQuestion(e,t){e.currentQuestion=t.id}},P={getStatements({dispatch:e},t){e("fbReadStatements",t)},getQuestions({dispatch:e},t){e("fbReadQuestions",t)},updateStory({dispatch:e,commit:t},n){e("fbUpdateStory",n),t("updateStory",n)},updateStatement({dispatch:e,commit:t},n){e("fbUpdateStatement",n),t("updateStatement",n)},updateQuestion({dispatch:e,commit:t},n){e("fbUpdateQuestion",n),t("updateQuestion",n)},deleteStory({dispatch:e,commit:t},n){e("fbDeleteStory",n),t("deleteStory",n)},deleteStatement({commit:e,dispatch:t},n){t("fbDeleteStatement",n),e("deleteStatement",n)},deleteQuestion({commit:e,dispatch:t},n){t("fbDeleteQuestion",n),e("deleteQuestion",n)},addStatement({dispatch:e,commit:t},n,o){let r=n.sort+Object(I["a"])(),a={id:r,text:n.text,storyId:n.storyId};e("fbAddStatement",a),t("addStatement",a)},addQuestion({dispatch:e,commit:t},n){e("fbAddQuestion",n),t("addQuestion",n)},addStory({dispatch:e,commit:t},n){let o=Object(I["a"])(),r={id:o,story:n};e("fbAddStory",r),t("addStory",r)},setSearch({commit:e},t){e("setSearch",t)},setCurrentStory({commit:e},t){e("setCurrentStory",t)},setCurrentStatement({commit:e},t){e("setCurrentStatement",t)},fbReadData({commit:e}){return r()((function*(){let t=Q["b"].currentUser.uid,n=Q["c"].ref("stories/"+t),o=Q["d"].collection("stories");const r=yield o.get();r.empty?e("setStoriesDownloaded",!0):(r.forEach(t=>{e("setStoriesDownloaded",!0);let n=t.data(),o={id:t.id,story:n};e("addStory",o)}),n.on("child_removed",t=>{let n=t.key;e("deleteStory",n)}))}))()},fbReadStatements({commit:e,dispatch:t},n){return r()((function*(){e("clearCurrentStatements");const t=yield Q["d"].collection("stories").doc(n).collection("statements").get();t.empty?e("setStoriesDownloaded",!0):t.forEach(t=>{let n=t.data(),o={storyId:n.storyId,id:t.id,text:n.text};e("addStatement",o)})}))()},fbReadQuestions({commit:e,dispatch:t},n){return r()((function*(){e("clearCurrentQuestions");const t=yield Q["d"].collection("stories").doc(C.currentStory).collection("statements").doc(C.currentStatement).collection("questions").get();t.empty?e("setStoriesDownloaded",!0):t.forEach(t=>{let n=t.data(),o={statementId:n.statementId,id:t.id,question:n.question,answer:n.answer,reinforce:n.reinforce};e("addQuestion",o)})}))()},fbAddStory({dispatch:e},t){return r()((function*(){yield Q["d"].collection("stories").doc(t.id).set(t.story);for(var n=t.story.description,o=n.match(/[^\.!\?]+[\.!\?]+/g),r=[],a=0;a<o.length;a++)r.push(o[a].trim());r.forEach((n,o)=>{var r={storyId:t.id,text:n,sort:o+10};e("addStatement",r,o)})}))()},fbAddStatement({},e){return r()((function*(){yield Q["d"].collection("stories").doc(e.storyId).collection("statements").doc(e.id).set(e)}))()},fbUpdateStory({},e){return r()((function*(){const t=Q["d"].collection("stories").doc(e.id);yield t.set(e.updates)}))()},fbUpdateStatement({},e){return r()((function*(){const t=Q["d"].collection("stories").doc(e.storyId).collection("statements").doc(e.id);yield t.update(e.updates)}))()},fbUpdateQuestion({},e){return r()((function*(){const t=Q["d"].collection("stories").doc(e.storyId).collection("statements").doc(e.updates.statementId).collection("questions").doc(e.id);yield t.update(e.updates)}))()},fbAddQuestion({},e){return r()((function*(){yield Q["d"].collection("stories").doc(e.storyId).collection("statements").doc(e.statementId).collection("questions").add(e)}))()},fbDeleteStory({},e){return r()((function*(){yield Q["d"].collection("stories").doc(e).delete()}))()},fbDeleteStatement({},e){return r()((function*(){yield Q["d"].collection("stories").doc(e.storyId).collection("statements").doc(e.id).delete()}))()},fbDeleteQuestion({},e){return r()((function*(){yield Q["d"].collection("stories").doc(e.storyId).collection("statements").doc(e.statementId).collection("questions").doc(e.id).delete()}))()}},j={statementsSorted:e=>{const t={};return Object.keys(e.currentStatements).sort().forEach((function(n){t[n]=e.currentStatements[n]})),t},storiesFiltered:e=>{let t={};return e.search?(Object.keys(e.stories).forEach((function(n){let o=e.stories[n],r=o.title.toLowerCase(),a=e.search.toLowerCase();r.includes(a)&&(t[n]=o)})),t):e.stories},stories:(e,t)=>{let n=t.storiesFiltered;return n},currentStatements:(e,t)=>{let n=t.statementsSorted;return n}};var A={namespaced:!0,state:C,mutations:O,actions:P,getters:j},E=(n("a639"),n("f508"));function D(e){E["a"].hide(),c["a"].create({title:"Error",message:e})}const x={loggedIn:!1},L={setLoggedIn(e,t){e.loggedIn=t}},k={logoutUser(){Q["b"].signOut(),l["a"].set("LoggedIn",!1)},registerUser({},e){E["a"].show(),Q["b"].createUserWithEmailAndPassword(e.email,e.password).then(e=>{}).catch(e=>{D(e.message)})},loginUser({},e){E["a"].show(),Q["b"].signInWithEmailAndPassword(e.email,e.password).then(e=>{}).catch(e=>{D(e.message)})},handleAuthStateChange({commit:e,dispatch:t}){Q["b"].onAuthStateChanged(n=>{E["a"].hide(),n?(e("setLoggedIn",!0),l["a"].set("LoggedIn",!0),this.$router.push("/").catch(e=>{}),t("stories/fbReadData",null,{root:!0})):(e("stories/setStoriesDownloaded",!1,{root:!0}),e("setLoggedIn",!1),l["a"].set("LoggedIn",!1),this.$router.replace("/auth").catch(e=>{}))})}},U={};var _={namespaced:!0,state:x,mutations:L,actions:k,getters:U};a["a"].use(b["a"]);var q=function(){const e=new b["a"].Store({modules:{stories:A,auth:_},strict:!1});return e},T=n("8c4f");n("e6cf");const R=[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"b531"))},{path:"settings",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"311b"))},{path:"auth",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"f724"))},{path:"statements",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"7793"))},{path:"questions",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"d5ae"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}];var N=R;a["a"].use(T["a"]);var B=function(){const e=new T["a"]({scrollBehavior:()=>({x:0,y:0}),routes:N,mode:"hash",base:""});return e},M=function(){return $.apply(this,arguments)};function $(){return $=r()((function*(){const e="function"===typeof q?yield q({Vue:a["a"]}):q,t="function"===typeof B?yield B({Vue:a["a"],store:e}):B;e.$router=t;const n={router:t,store:e,render:e=>e(w),el:"#q-app"};return{app:n,store:e,router:t}})),$.apply(this,arguments)}var F=n("bc3a"),J=n.n(F);a["a"].prototype.$axios=J.a;var z=({router:e})=>{e.beforeEach((e,t,n)=>{let o=l["a"].getItem("LoggedIn");o||"/auth"===e.path?n():n("/auth")})};const G="";function K(){return V.apply(this,arguments)}function V(){return V=r()((function*(){const{app:e,store:t,router:n}=yield M();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),i=[void 0,Q["default"],z];for(let c=0;!1===o&&c<i.length;c++)if("function"===typeof i[c])try{yield i[c]({app:e,router:n,store:t,Vue:a["a"],ssrContext:null,redirect:r,urlPath:s,publicPath:G})}catch(d){return d&&d.url?void(window.location.href=d.url):void console.error("[Quasar] boot error:",d)}!0!==o&&new a["a"](e)})),V.apply(this,arguments)}K()},fc1b:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return d}));var o=n("59ca"),r=(n("ea7b"),n("e71f"),n("66ce"),{apiKey:"AIzaSyBgQGkyMAWS2JRSkgmKP-nQHwJYczIGo5k",authDomain:"rn-firebase-697de.firebaseapp.com",databaseURL:"https://rn-firebase-697de.firebaseio.com",projectId:"rn-firebase-697de",storageBucket:"rn-firebase-697de.appspot.com",messagingSenderId:"145497306301",appId:"1:145497306301:web:ade46b94f24f017bf9b3d4",measurementId:"G-Q0FY892NE7"});let a=o["initializeApp"](r),s=a.auth(),i=a.database(),d=a.firestore()}});