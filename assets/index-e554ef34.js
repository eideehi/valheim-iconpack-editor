import{w as Ne,i as ye,r as qn,B as zn,S as U,a as B,s as G,e as Te,b as O,t as y,g as J,c as E,d as X,f as R,o as pn,h as gn,j as p,k as v,u as vn,l as _n,m as yn,n as ne,p as P,q as x,v as j,x as Q,y as L,z as Y,A as H,C as N,D as te,E as d,F as C,G as V,H as F,I as ie,J as Zn,K as Kn,L as Jn,M as gt,N as Xn,O as Qn,P as wn,Q as xn,R as ei,T as ti,U as bn,V as ni,W as ii,X as oi,Y as ri,Z as si,_ as Tn,$ as li,a0 as En,a1 as He,a2 as ai,a3 as ct,a4 as De,a5 as q,a6 as Z,a7 as Be,a8 as be,a9 as qe,aa as ve,ab as Je,ac as se,ad as le,ae as In,af as Xe,ag as Ge,ah as $e,ai as ze,aj as kn,ak as ut,al as On,am as ci,an as ui,ao as fi}from"./vendor-256c0d4e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();if(navigator.language=="ja"){const i=document.createElement("link");i.href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:ital,wght@0,400;0,700;1,400;1,700&display=swap",i.rel="stylesheet",document.head.appendChild(i)}const Me=Ne();let ft;{const i=localStorage.getItem("theme");!i||i!=="dark"&&i!=="light"?ft=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":ft=i}Me.subscribe(i=>{i&&(localStorage.setItem("theme",i),i==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))});Me.set(ft);const di="modulepreload",hi=function(i){return"/valheim-iconpack-editor/"+i},Et={},It=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=hi(o),o in Et)return;Et[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!n)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":di,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((u,f)=>{a.addEventListener("load",u),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},mi=Object.assign({"/src/assets/locales/en/app.json":()=>It(()=>import("./app-f3ec3fcf.js"),[]),"/src/assets/locales/ja/app.json":()=>It(()=>import("./app-5b553a82.js"),[])}),pi=ye.use(qn((i,e)=>mi[`/src/assets/locales/${i}/${e}.json`]())).use(zn).init({debug:!0,lng:"en",fallbackLng:"en",ns:["app"],defaultNS:"app",interpolation:{escapeValue:!1},supportedLngs:["en","ja"],detection:{lookupQuerystring:"lang",order:["querystring","navigator"]}}).then(()=>ye.changeLanguage().then(i=>(document.documentElement.setAttribute("lang",ye.language),Promise.resolve(i))));function gi(){return pi}const dt=Ne("hidden");function kt(i){let e,t;const n=i[6].default,r=gn(n,i,i[5],null);return{c(){e=p("div"),r&&r.c(),v(e,"class","modal-container svelte-19a1vxq")},m(o,s){O(o,e,s),r&&r.m(e,null),i[7](e),t=!0},p(o,s){r&&r.p&&(!t||s&32)&&vn(r,n,o,o[5],t?yn(n,o[5],s,null):_n(o[5]),null)},i(o){t||(y(r,o),t=!0)},o(o){E(r,o),t=!1},d(o){o&&R(e),r&&r.d(o),i[7](null)}}}function vi(i){let e,t,n=i[1]&&kt(i);return{c(){n&&n.c(),e=Te()},m(r,o){n&&n.m(r,o),O(r,e,o),t=!0},p(r,[o]){r[1]?n?(n.p(r,o),o&2&&y(n,1)):(n=kt(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(J(),E(n,1,1,()=>{n=null}),X())},i(r){t||(y(n),t=!0)},o(r){E(n),t=!1},d(r){n&&n.d(r),r&&R(e)}}}const Ue={};function me(i){return Ue[i]}function _i(i,e,t){let{$$slots:n={},$$scope:r}=e,{id:o=""}=e,s,l=!1,c;Ue[o]&&Ue[o].close();function a(_){t(1,l=!0),dt.set("show"),c=_}function u(){t(1,l=!1),dt.set("hidden"),c!=null&&c()}Ue[o]={open:a,close:u},pn(()=>{delete Ue[o]});function f(_){ne[_?"unshift":"push"](()=>{s=_,t(0,s)})}return i.$$set=_=>{"id"in _&&t(2,o=_.id),"$$scope"in _&&t(5,r=_.$$scope)},i.$$.update=()=>{var _;i.$$.dirty&3&&l&&s&&((_=s.parentNode)==null||_.removeChild(s),document.body.append(s))},[s,l,o,a,u,r,n,f]}class Qe extends U{constructor(e){super(),B(this,e,_i,vi,G,{id:2,open:3,close:4})}get open(){return this.$$.ctx[3]}get close(){return this.$$.ctx[4]}}const ht=Ne("show");function yi(i){let e,t='<g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="m12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function wi(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class xe extends U{constructor(e){super(),B(this,e,wi,yi,G,{})}}function bi(i){let e,t,n,r,o,s,l,c;return n=new xe({}),{c(){e=p("header"),t=p("button"),H(n.$$.fragment),r=N(),o=p("h1"),o.textContent="Valheim IconPack Editor",v(t,"class","close-button svelte-1o53s7r"),v(o,"class","title svelte-1o53s7r"),v(e,"class","app-header svelte-1o53s7r"),te(e,"closed",i[0]==="hidden")},m(a,u){O(a,e,u),d(e,t),C(n,t,null),d(e,r),d(e,o),s=!0,l||(c=V(t,"click",i[1]),l=!0)},p(a,[u]){(!s||u&1)&&te(e,"closed",a[0]==="hidden")},i(a){s||(y(n.$$.fragment,a),s=!0)},o(a){E(n.$$.fragment,a),s=!1},d(a){a&&R(e),F(n),l=!1,c()}}}function Ti(i,e,t){let n;return ie(i,ht,o=>t(0,n=o)),[n,()=>ht.set("hidden")]}class Ei extends U{constructor(e){super(),B(this,e,Ti,bi,G,{})}}let Ot=ye.language;const Rn=Ne(ye.language,i=>{let e=setInterval(()=>{let t=ye.language;Ot!==t&&(Ot=t,i(t))},250);return()=>clearInterval(e)}),An=Ne(ye.t),fe=An;Rn.subscribe(async i=>{i!==ye.language&&await ye.changeLanguage(i).then(e=>{An.set(e)})});function Ii(i,e){const t=gt(i,e);return t==null||!wn(t)?!1:Tn(i,e)}const W={cloneDeep:Zn,eq:Kn,filter:Jn,get:gt,has:Xn,includes:Qn,isEmpty:wn,isEqual:xn,keys:ei,merge:ti,pick:bn,remove:ni,set:ii,sortBy:oi,toLower:ri,trimStart:si,unset:Tn,unsetIfEmpty:Ii,without:li},Re={text:"plain/text",png:"image/png",json:"application/json",zip:"application/zip",unknown:"unknown"},Ae=Object.freeze({get:i=>{switch(i){case"json":return Re.json;case"zip":return Re.zip;case"txt":case"":return Re.text;case"png":return Re.png;default:return"unknown"}},isMatch:(i,e)=>{switch(i){case"text":return W.eq("plain/text",W.toLower(e));case"png":return W.eq("image/png",W.toLower(e));case"json":return W.eq("application/json",W.toLower(e));case"zip":return W.includes(["application/zip","application/x-zip-compressed"],W.toLower(e))}}});function Nn(i){return Sn(i,[]).reverse()}function Sn(i,e){return i==null?e:(e.push(i),Sn(i.parent,e))}function pe(i){return i!=null&&i.type==="directory"}function Ln(i,e){for(const t of i.files){const n=e.files.find(r=>r.name==t.name);n&&pe(t)&&pe(n)?Ln(t,n):n||(e.files.push(t),t.parent=e)}i.files=[]}function Ze(i,e){return typeof e=="string"?Hn(i,e):ki(i,e)}function Hn(i,e){const t=je(e);for(let n=0;n<t.length;n++){const r=i.files.find(o=>o.name===t[n]);if(r==null)break;if(n===t.length-1)return W.remove(i.files,r),r.parent=null,!0;if(Se(r))break;i=r}return!1}function ki(i,e){let t=Pn(we(i),we(e));return W.isEmpty(t)&&(t=we(e)),Hn(i,t)}function Cn(i,e){i.parent!=null&&i.parent!==e&&Ze(i.parent,i);const t=e.files.find(n=>n.name===i.name);return t!=null?(e.files=[...W.without(e.files,t),i],i.parent=e,pe(t)&&pe(i)&&Ln(t,i),!0):(e.files.push(i),i.parent=e,!0)}function We(i,e){if(e.parent!=null){const r=Nn(e);return r.includes(i)?!1:Cn(r[0],i)}const t=W.filter(i.files,r=>r.name===e.name);if(W.isEmpty(t))return i.files.push(e),e.parent=i,!0;const n=t[0];return n===e?!1:(n.parent=null,i.files=[...W.without(i.files,n),e],e.parent=i,!0)}function Se(i){return i!=null&&i.type==="file"}function et(i){return i.replaceAll(/\\/g,"/")}function je(i){return et(i).split("/").filter(e=>e.length>0)}function Le(i,e){if(typeof e=="function")return Oi(i,e);if(typeof e=="string")return Ri(i,e)}function Oi(i,e){if(e(i))return i;if(!pe(i))return null;for(const t of i.files){const n=Le(t,e);if(n!=null)return n}return null}function Ri(i,e){const t=je(e);if(!pe(i))return t.length===1&&i.name===t[0]?i:null;let n=i;for(let r=0;r<t.length;r++){const o=t[r],s=n.files.find(l=>l.name===o);if(s==null)return null;if(r===t.length-1)return s;if(Se(s))return null;n=s}return null}function Ai(i){return Fn(i,0)}function Fn(i,e){return i.parent==null?e:Fn(i.parent,e+1)}function vt(i){return i.parent==null?i:vt(i.parent)}function Pe(i,e){if(typeof i=="string")return Mn(i);if(typeof e=="string"&&Ni(i))return Li(i,e);if(Si(i))return mt(i);throw console.error(i),console.error(e),new Error("Illegal argument")}function Ni(i){return W.has(i,"type")&&W.get(i,["type"],"")==="directory"&&W.has(i,"name")&&W.has(i,"parent")&&W.has(i,"files")}function Si(i){return typeof W.get(i,["name"],null)=="string"}function mt(i){const{parent:e,name:t,files:n}=Object.assign({parent:null,files:[]},i),r={type:"directory",parent:null,name:t,files:[]};return n.forEach(o=>Cn(o,r)),e!=null&&We(e,r),r}function Li(i,e){const t=Mn(e),n=vt(t);return i.files.push(n),n.parent=i,t}function Mn(i){const e=je(i);if(W.isEmpty(e))return null;let t=mt({name:e[0]});for(let n=1;n<e.length;n++)t=mt({parent:t,name:e[n]});return t}function tt(i){const{parent:e,name:t,mimeType:n,data:r}=Object.assign({parent:null,data:new ArrayBuffer(0)},i),o={type:"file",parent:null,name:t,mimeType:n,data:r};return e!=null&&We(e,o),o}function Hi(i){const e=new En,t=(n,r)=>{if(r.type==="directory"){const o=n.folder(r.name);for(const s of r.files)t(o,s)}else n.file(r.name,r.data)};return t(e,i),e.generateAsync({type:"blob"})}function Ci(i,e){const t=je(i),n=je(e),r=Math.min(t.length,n.length),o=[];for(let s=0;s<r&&t[s]===n[s];s++)o.push(t[s]);return o.join("/")}function Fi(i){i=et(i);const e=i.lastIndexOf("/");return e===-1?i:i.substring(0,e)}function we(i){return Nn(i).map(e=>e.name).join("/")}function Pn(i,e){const t=Ci(i,e);return W.isEmpty(t)?"":W.trimStart(et(e).replace(t,""),"/")}function Mi(i){i=et(i);const e=i.lastIndexOf("/"),t=i.lastIndexOf("."),n=e===-1?"":i.substring(0,e),r=e===-1?i:t===-1?i.substring(e+1):i.substring(e+1,t),o=t===-1?"":i.slice(t+1);return{dirName:n,fileName:r,extension:o}}function nt(i){const e=Le(i,t=>/^textures$/gi.test(t.name));return pe(e)?e:null}function Pi(i,e){const t=nt(i);t!=null&&We(t,e)}function Di(i=null){return tt({parent:i,name:"automatics-child-mod",mimeType:Re.text,data:new ArrayBuffer(0)})}function Dn(i=null){return tt({parent:i,name:"custom-map-icon.json",mimeType:Re.json,data:new ArrayBuffer(0)})}function $i(i){return Pe({parent:null,name:i,files:[Di(),Pe({parent:null,name:"Textures",files:[Dn()]})]})}function at(){return{target:{name:""},sprite:{file:"",height:0,width:0}}}function $n(i){const e=Le(i,t=>Se(t)&&Ae.isMatch("json",t.mimeType)&&W.eq(W.toLower(t.name),"custom-map-icon.json"));return Se(e)?e:Dn(i)}function _t(i,e){const t=nt(i);if(t==null)return;const n=Le(t,e.sprite.file);return Se(n)?n:null}function Ui(i){const e=vt(i);if(!pe(e))return{parent:"",filename:i.name};const t=nt(e);return t==null?{parent:we(i.parent),filename:i.name}:{parent:Pn(we(t),we(i.parent)),filename:i.name}}function yt(i,e){return e!=null?Rt(i,e):t=>Rt(i,t)}function Rt(i,e){if(i.target.name!==e.target.name)return!1;const t=i.target.metadata,n=e.target.metadata;return t==null&&n==null?!0:t==null||n==null?!1:t.level===n.level}function Bi(i){const{target:e,sprite:t,options:n}=i;if(!e.name)return!1;if(e.metadata){const{level:r}=e.metadata;if(r<=0||r>=4)return!1}if(!t.file||t.width<=0||t.height<=0)return!1;if(n){const{iconScaleLargeMap:r,iconScaleSmallMap:o}=n;if(r!=null&&r<=0||o!=null&&o<=0)return!1}return!0}function Gi(i){return Wi(i)}function Wi(i){const e=Le(i,n=>Se(n)&&n.name==="automatics-child-mod");if(e==null||Ai(e)>1)return!1;const t=Le(e.parent||i,"Textures/custom-map-icon.json");return Se(t)}function ji(i){return En.loadAsync(i).then(async e=>{let t=Pe({name:He()});const n=[];return e.forEach((r,o)=>{if(o.dir)We(t,Pe(r));else{const{dirName:s,fileName:l,extension:c}=Mi(r),a=Pe(s),u=W.isEmpty(c)?l:`${l}.${c}`,f=o.async("arraybuffer").then(_=>{We(t,tt({parent:a,name:u,data:_,mimeType:Ae.get(c)}))});n.push(f)}}),await Promise.all(n),t.files.length===1&&pe(t.files[0])&&(t=t.files[0],Ze(t.parent,t)),Gi(t)?t:null})}function Yi(i){const e=$n(i);if(e.data.byteLength===0)return[];const t=ai.parse(new TextDecoder().decode(e.data));return Array.isArray(t)?t:[]}function Un(i,e){const t=nt(i);if(t==null)return;Ze(t,e.sprite.file);const n=Le(t,Fi(e.sprite.file));pe(n)&&W.isEmpty(n.files)&&Ze(n.parent,n)}function Vi(i,e,t){return W.remove(e,yt(t)),e.every(n=>n.sprite.file!==t.sprite.file)&&Un(i,t),e}function qi(i,e){$n(i).data=new TextEncoder().encode(JSON.stringify(e)).buffer}function zi(i,e,t,n){const r=e.find(yt(t));if(r!=null){if(e=[...W.without(e,r),{...W.cloneDeep(t)}],e.every(o=>o.sprite.file!==r.sprite.file)){const o=_t(i,r);we(o)!==we(n)&&Un(i,r)}}else e=[...e,{...W.cloneDeep(t)}];return qi(i,e),Pi(i,n),e}function At(i){let e,t,n;var r=i[1];function o(s){return{}}return r&&(e=De(r,o())),{c(){e&&H(e.$$.fragment),t=Te()},m(s,l){e&&C(e,s,l),O(s,t,l),n=!0},p(s,l){if(l&2&&r!==(r=s[1])){if(e){J();const c=e;E(c.$$.fragment,1,0,()=>{F(c,1)}),X()}r?(e=De(r,o()),H(e.$$.fragment),y(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}},i(s){n||(e&&y(e.$$.fragment,s),n=!0)},o(s){e&&E(e.$$.fragment,s),n=!1},d(s){s&&R(t),e&&F(e,s)}}}function Nt(i){let e,t;return{c(){e=p("span"),t=q(i[0])},m(n,r){O(n,e,r),d(e,t)},p(n,r){r&1&&Z(t,n[0])},d(n){n&&R(e)}}}function Zi(i){let e,t,n,r,o,s=i[1]&&At(i),l=i[0].length>0&&Nt(i),c=[i[2],{class:"button"}],a={};for(let u=0;u<c.length;u+=1)a=P(a,c[u]);return{c(){e=p("button"),s&&s.c(),t=N(),l&&l.c(),ct(e,a),te(e,"svelte-w2d26z",!0)},m(u,f){O(u,e,f),s&&s.m(e,null),d(e,t),l&&l.m(e,null),e.autofocus&&e.focus(),n=!0,r||(o=V(e,"click",i[3]),r=!0)},p(u,[f]){u[1]?s?(s.p(u,f),f&2&&y(s,1)):(s=At(u),s.c(),y(s,1),s.m(e,t)):s&&(J(),E(s,1,1,()=>{s=null}),X()),u[0].length>0?l?l.p(u,f):(l=Nt(u),l.c(),l.m(e,null)):l&&(l.d(1),l=null),ct(e,a=Q(c,[f&4&&u[2],{class:"button"}])),te(e,"svelte-w2d26z",!0)},i(u){n||(y(s),n=!0)},o(u){E(s),n=!1},d(u){u&&R(e),s&&s.d(),l&&l.d(),r=!1,o()}}}function Ki(i,e,t){let{text:n=""}=e,{icon:r=void 0}=e,{options:o={}}=e;function s(l){Be.call(this,i,l)}return i.$$set=l=>{"text"in l&&t(0,n=l.text),"icon"in l&&t(1,r=l.icon),"options"in l&&t(2,o=l.options)},[n,r,o,s]}class Ke extends U{constructor(e){super(),B(this,e,Ki,Zi,G,{text:0,icon:1,options:2})}}function Ji(i){let e,t='<g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM9.879 8.464L12 10.586l2.121-2.122a1 1 0 1 1 1.415 1.415l-2.122 2.12l2.122 2.122a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 0 1-1.415-1.415L10.586 12L8.465 9.879a1 1 0 0 1 1.414-1.415Z"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Xi(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Bn extends U{constructor(e){super(),B(this,e,Xi,Ji,G,{})}}function St(i){let e,t;return e=new Qe({props:{id:i[0],$$slots:{default:[Qi]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.id=n[0]),r&66&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Qi(i){let e,t,n,r,o,s,l,c,a;r=new Bn({});const u=i[4].default,f=gn(u,i,i[6],null);return{c(){e=p("div"),t=p("div"),n=p("button"),H(r.$$.fragment),o=N(),s=p("div"),f&&f.c(),v(n,"class","close-button svelte-cehsg0"),v(s,"class","modal-content"),v(t,"class","dialog svelte-cehsg0"),v(e,"class","outside svelte-cehsg0")},m(_,h){O(_,e,h),d(e,t),d(t,n),C(r,n,null),d(t,o),d(t,s),f&&f.m(s,null),i[5](t),l=!0,c||(a=[V(n,"click",i[2]),V(e,"click",i[3])],c=!0)},p(_,h){f&&f.p&&(!l||h&64)&&vn(f,u,_,_[6],l?yn(u,_[6],h,null):_n(_[6]),null)},i(_){l||(y(r.$$.fragment,_),y(f,_),l=!0)},o(_){E(r.$$.fragment,_),E(f,_),l=!1},d(_){_&&R(e),F(r),f&&f.d(_),i[5](null),c=!1,be(a)}}}function xi(i){let e,t,n=i[0]&&St(i);return{c(){n&&n.c(),e=Te()},m(r,o){n&&n.m(r,o),O(r,e,o),t=!0},p(r,[o]){r[0]?n?(n.p(r,o),o&1&&y(n,1)):(n=St(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(J(),E(n,1,1,()=>{n=null}),X())},i(r){t||(y(n),t=!0)},o(r){E(n),t=!1},d(r){n&&n.d(r),r&&R(e)}}}function eo(i,e,t){let{$$slots:n={},$$scope:r}=e,{id:o}=e,s;function l(){var u;(u=me(o))==null||u.close()}function c(u){u.target instanceof Node&&(s.contains(u.target)||l())}function a(u){ne[u?"unshift":"push"](()=>{s=u,t(1,s)})}return i.$$set=u=>{"id"in u&&t(0,o=u.id),"$$scope"in u&&t(6,r=u.$$scope)},[o,s,l,c,n,a,r]}class to extends U{constructor(e){super(),B(this,e,eo,xi,G,{id:0})}}function Lt(i){let e,t;return e=new to({props:{id:i[0],$$slots:{default:[no]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.id=n[0]),r&6&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function no(i){let e,t=new qe().render(i[1])+"";return{c(){e=p("div"),v(e,"class","markdown")},m(n,r){O(n,e,r),e.innerHTML=t},p(n,r){r&2&&t!==(t=new qe().render(n[1])+"")&&(e.innerHTML=t)},d(n){n&&R(e)}}}function io(i){let e,t,n=i[1]&&Lt(i);return{c(){n&&n.c(),e=Te()},m(r,o){n&&n.m(r,o),O(r,e,o),t=!0},p(r,[o]){r[1]?n?(n.p(r,o),o&2&&y(n,1)):(n=Lt(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(J(),E(n,1,1,()=>{n=null}),X())},i(r){t||(y(n),t=!0)},o(r){E(n),t=!1},d(r){n&&n.d(r),r&&R(e)}}}function oo(i,e,t){let{id:n}=e,{markdown:r}=e;return i.$$set=o=>{"id"in o&&t(0,n=o.id),"markdown"in o&&t(1,r=o.markdown)},[n,r]}class it extends U{constructor(e){super(),B(this,e,oo,io,G,{id:0,markdown:1})}}function ro(i){let e,t='<g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-9.5a3.625 3.625 0 0 1 1.348 6.99a.837.837 0 0 0-.305.201c-.044.05-.051.114-.05.18L13 14a1 1 0 0 1-1.993.117L11 14v-.25c0-1.153.93-1.845 1.604-2.116a1.626 1.626 0 1 0-2.229-1.509a1 1 0 1 1-2 0A3.625 3.625 0 0 1 12 6.5Z"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function so(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class ot extends U{constructor(e){super(),B(this,e,so,ro,G,{})}}function Ht(i){let e,t,n,r,o=i[2].required&&Ct(i);return{c(){e=p("div"),t=p("span"),n=q(i[1]),r=N(),o&&o.c(),v(t,"class","label"),v(e,"class","label-row")},m(s,l){O(s,e,l),d(e,t),d(t,n),d(e,r),o&&o.m(e,null)},p(s,l){l&2&&Z(n,s[1]),s[2].required?o?o.p(s,l):(o=Ct(s),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(s){s&&R(e),o&&o.d()}}}function Ct(i){let e,t=i[5]("forms.common.required-mark")+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","required svelte-1v2rprk")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&32&&t!==(t=r[5]("forms.common.required-mark")+"")&&Z(n,t)},d(r){r&&R(e)}}}function Ft(i){let e,t=i[2].placeholder+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","placeholder svelte-1v2rprk")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&4&&t!==(t=r[2].placeholder+"")&&Z(n,t)},d(r){r&&R(e)}}}function Mt(i){let e,t,n,r,o;return t=new xe({}),{c(){e=p("button"),H(t.$$.fragment),v(e,"class","clear-button svelte-1v2rprk")},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[10]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function Pt(i){let e,t=i[5](i[4])+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","error svelte-1v2rprk")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&48&&t!==(t=r[5](r[4])+"")&&Z(n,t)},d(r){r&&R(e)}}}function Dt(i){let e,t,n,r,o;return t=new ot({}),{c(){e=p("button"),H(t.$$.fragment),v(e,"class","help-button svelte-1v2rprk")},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[14]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function lo(i){let e,t,n,r,o,s,l,c,a,u,f,_,h;e=new it({props:{id:i[7],markdown:i[2].help}});let b=i[1]&&Ht(i),g=[i[6],{class:"input"},{type:"text"}],m={};for(let w=0;w<g.length;w+=1)m=P(m,g[w]);let T=i[2].placeholder&&!i[0]&&Ft(i),I=!i[2].required&&Mt(i),k=i[3]&&i[4]&&Pt(i),S=!i[2].disabled&&i[2].help&&Dt(i);return{c(){H(e.$$.fragment),t=N(),n=p("div"),b&&b.c(),r=N(),o=p("div"),s=p("input"),l=N(),T&&T.c(),c=N(),I&&I.c(),a=N(),k&&k.c(),u=N(),S&&S.c(),ct(s,m),te(s,"svelte-1v2rprk",!0),v(o,"class","input-row svelte-1v2rprk"),te(o,"invalid",i[3]),v(n,"class","input-container svelte-1v2rprk"),te(n,"disabled",i[2].disabled)},m(w,M){C(e,w,M),O(w,t,M),O(w,n,M),b&&b.m(n,null),d(n,r),d(n,o),d(o,s),s.autofocus&&s.focus(),ve(s,i[0]),d(o,l),T&&T.m(o,null),d(o,c),I&&I.m(o,null),d(n,a),k&&k.m(n,null),d(n,u),S&&S.m(n,null),f=!0,_||(h=[V(s,"input",i[13]),V(s,"focusout",i[9]),V(s,"input",i[8]),V(s,"keydown",i[11]),V(s,"keyup",i[12])],_=!0)},p(w,[M]){const z={};M&4&&(z.markdown=w[2].help),e.$set(z),w[1]?b?b.p(w,M):(b=Ht(w),b.c(),b.m(n,r)):b&&(b.d(1),b=null),M&1&&s.value!==w[0]&&ve(s,w[0]),te(s,"svelte-1v2rprk",!0),w[2].placeholder&&!w[0]?T?T.p(w,M):(T=Ft(w),T.c(),T.m(o,c)):T&&(T.d(1),T=null),w[2].required?I&&(J(),E(I,1,1,()=>{I=null}),X()):I?(I.p(w,M),M&4&&y(I,1)):(I=Mt(w),I.c(),y(I,1),I.m(o,null)),(!f||M&8)&&te(o,"invalid",w[3]),w[3]&&w[4]?k?k.p(w,M):(k=Pt(w),k.c(),k.m(n,u)):k&&(k.d(1),k=null),!w[2].disabled&&w[2].help?S?(S.p(w,M),M&4&&y(S,1)):(S=Dt(w),S.c(),y(S,1),S.m(n,null)):S&&(J(),E(S,1,1,()=>{S=null}),X()),(!f||M&4)&&te(n,"disabled",w[2].disabled)},i(w){f||(y(e.$$.fragment,w),y(I),y(S),f=!0)},o(w){E(e.$$.fragment,w),E(I),E(S),f=!1},d(w){F(e,w),w&&R(t),w&&R(n),b&&b.d(),T&&T.d(),I&&I.d(),k&&k.d(),S&&S.d(),_=!1,be(h)}}}function ao(i,e,t){let n;ie(i,fe,w=>t(5,n=w));let{label:r=""}=e,{value:o}=e,{options:s={}}=e;const l=bn(s,["disabled","required"]),c=gt(s,"validation",()=>!0),a=He(),u=Je();let f=!1,_="";const h=w=>{t(4,_=w),t(3,f=w.length>0)};function b({target:w}){w instanceof HTMLInputElement&&(t(0,{value:o}=w,o),u("change",{value:o}),g())}function g(){let w=!o;if(w&&s.required){h("forms.common.error.required");return}if(!w&&!c(o)){h("forms.common.error.invalid-text-format");return}h("")}function m(){t(0,o=void 0),u("change",{value:o}),g()}function T(w){Be.call(this,i,w)}function I(w){Be.call(this,i,w)}function k(){o=this.value,t(0,o)}const S=()=>{var w;return(w=me(a))==null?void 0:w.open()};return i.$$set=w=>{"label"in w&&t(1,r=w.label),"value"in w&&t(0,o=w.value),"options"in w&&t(2,s=w.options)},[o,r,s,f,_,n,l,a,b,g,m,T,I,k,S]}class Gn extends U{constructor(e){super(),B(this,e,ao,lo,G,{label:1,value:0,options:2})}}function co(i){let e,t,n=i[2]("start-page.create-iconpack.caption")+"",r,o,s,l,c,a,u;function f(h){i[5](h)}let _={label:i[2]("start-page.create-iconpack.iconpack-name.label"),options:{required:!0,help:i[2]("start-page.create-iconpack.iconpack-name.help"),validation:$t}};return i[0]!==void 0&&(_.value=i[0]),s=new Gn({props:_}),ne.push(()=>se(s,"value",f)),a=new Ke({props:{options:{disabled:i[1]},text:i[2]("start-page.create-iconpack.create-iconpack")}}),a.$on("click",i[3]),{c(){e=p("div"),t=p("h2"),r=q(n),o=N(),H(s.$$.fragment),c=N(),H(a.$$.fragment),v(t,"class","caption svelte-2bdjem"),v(e,"class","create-iconpack svelte-2bdjem")},m(h,b){O(h,e,b),d(e,t),d(t,r),d(e,o),C(s,e,null),d(e,c),C(a,e,null),u=!0},p(h,[b]){(!u||b&4)&&n!==(n=h[2]("start-page.create-iconpack.caption")+"")&&Z(r,n);const g={};b&4&&(g.label=h[2]("start-page.create-iconpack.iconpack-name.label")),b&4&&(g.options={required:!0,help:h[2]("start-page.create-iconpack.iconpack-name.help"),validation:$t}),!l&&b&1&&(l=!0,g.value=h[0],le(()=>l=!1)),s.$set(g);const m={};b&2&&(m.options={disabled:h[1]}),b&4&&(m.text=h[2]("start-page.create-iconpack.create-iconpack")),a.$set(m)},i(h){u||(y(s.$$.fragment,h),y(a.$$.fragment,h),u=!0)},o(h){E(s.$$.fragment,h),E(a.$$.fragment,h),u=!1},d(h){h&&R(e),F(s),F(a)}}}function $t(i){return/^[ a-zA-Z0-9_.+-]+$/g.test(i.trim())}function uo(i,e,t){let n;ie(i,fe,a=>t(2,n=a));let{files:r}=e,o="",s;function l(){t(4,r=$i(o.trim()))}function c(a){o=a,t(0,o)}return i.$$set=a=>{"files"in a&&t(4,r=a.files)},i.$$.update=()=>{i.$$.dirty&1&&t(1,s=o.trim().length===0)},[o,s,n,l,r,c]}class fo extends U{constructor(e){super(),B(this,e,uo,co,G,{files:4})}}function ho(i){let e,t='<path fill="currentColor" d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07L19.07 3.5m-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13l.51 1.67m-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87l.4 1.31M19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35l-2.53-2.2m4.33-2.7l1.15-2.77l2.2 2.54l-3.35.23m1.15-4.96l-1.14-2.78l3.34.24l-2.2 2.54M9.63 18.93l2.77 1.15l-2.53 2.19l-.24-3.34Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function mo(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class po extends U{constructor(e){super(),B(this,e,mo,ho,G,{})}}function go(i){let e,t,n,r,o;return t=new po({}),{c(){e=p("button"),H(t.$$.fragment)},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[0]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function vo(i,e,t){let n;ie(i,Me,o=>t(1,n=o));function r(){n==="dark"?Me.set("light"):Me.set("dark")}return[r]}class _o extends U{constructor(e){super(),B(this,e,vo,go,G,{})}}const Wn=(i,e)=>{const t=n=>{n.target instanceof Node&&(i.contains(n.target)||e(n.target))};return document.addEventListener("click",t),{destroy:()=>{document.removeEventListener("click",t)}}};function yo(i){let e,t='<path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function wo(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class bo extends U{constructor(e){super(),B(this,e,wo,yo,G,{})}}function Ut(i,e,t){const n=i.slice();return n[8]=e[t],n}function Bt(i){let e,t=i[1](`languages.${i[8]}`)+"",n,r,o;function s(){return i[5](i[8])}return{c(){e=p("button"),n=q(t),v(e,"class","language svelte-krhe5h")},m(l,c){O(l,e,c),d(e,n),r||(o=V(e,"click",s),r=!0)},p(l,c){i=l,c&2&&t!==(t=i[1](`languages.${i[8]}`)+"")&&Z(n,t)},d(l){l&&R(e),r=!1,o()}}}function To(i){let e,t,n,r,o,s,l,c,a=i[2],u=[];for(let f=0;f<a.length;f+=1)u[f]=Bt(Ut(i,a,f));return o=new bo({}),{c(){e=p("div"),t=p("div");for(let f=0;f<u.length;f+=1)u[f].c();n=N(),r=p("button"),H(o.$$.fragment),v(t,"class","languages svelte-krhe5h"),te(t,"active",i[0]),v(e,"class","language-select svelte-krhe5h")},m(f,_){O(f,e,_),d(e,t);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(t,null);d(e,n),d(e,r),C(o,r,null),s=!0,l||(c=[V(r,"click",i[6]),In(Wn.call(null,e,i[7]))],l=!0)},p(f,[_]){if(_&22){a=f[2];let h;for(h=0;h<a.length;h+=1){const b=Ut(f,a,h);u[h]?u[h].p(b,_):(u[h]=Bt(b),u[h].c(),u[h].m(t,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=a.length}(!s||_&1)&&te(t,"active",f[0])},i(f){s||(y(o.$$.fragment,f),s=!0)},o(f){E(o.$$.fragment,f),s=!1},d(f){f&&R(e),Xe(u,f),F(o),l=!1,be(c)}}}function Eo(i,e,t){let n;ie(i,fe,f=>t(1,n=f));const r=["en","ja"];let o=!1;function s(f){t(0,o=f)}function l(f){Rn.set(f)}return[o,n,r,s,l,f=>l(f),()=>s(!o),()=>s(!1)]}class Io extends U{constructor(e){super(),B(this,e,Eo,To,G,{})}}function ko(i){let e,t='<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Oo(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Ro extends U{constructor(e){super(),B(this,e,Oo,ko,G,{})}}function Ao(i){let e,t,n,r;return n=new Ro({}),{c(){e=p("div"),t=p("a"),H(n.$$.fragment),v(t,"href","https://github.com/eideehi/valheim-iconpack-editor"),v(t,"target","_blank"),v(t,"rel","noopener noreferrer"),v(e,"class","github-link")},m(o,s){O(o,e,s),d(e,t),C(n,t,null),r=!0},p:L,i(o){r||(y(n.$$.fragment,o),r=!0)},o(o){E(n.$$.fragment,o),r=!1},d(o){o&&R(e),F(n)}}}class No extends U{constructor(e){super(),B(this,e,null,Ao,G,{})}}function So(i){let e,t='<path fill="currentColor" d="M10.08 10.86c.05-.33.16-.62.3-.86c.3-.56.81-.85 1.5-.86c.45 0 .86.2 1.15.49c.28.31.47.74.47 1.17h1.8c-.02-.47-.11-.9-.3-1.3c-.15-.38-.38-.72-.68-1c-1.45-1.34-4.14-1.15-5.37.37c-1.29 1.67-1.32 4.59-.01 6.26c1.21 1.49 3.86 1.7 5.3.37c.31-.25.56-.56.76-.92c.16-.36.27-.74.28-1.15H13.5c0 .21-.07.4-.16.57c-.09.19-.21.34-.34.47c-.33.26-.72.4-1.14.4c-.36-.01-.66-.08-.89-.23a1.41 1.41 0 0 1-.59-.64c-.5-.9-.42-2.15-.3-3.14M12 2C6.5 2 2 6.5 2 12c.53 13.27 19.5 13.26 20 0c0-5.5-4.5-10-10-10m0 18c-4.41 0-8-3.59-8-8c.44-10.61 15.56-10.61 16 0c0 4.41-3.59 8-8 8Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Lo(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Ho extends U{constructor(e){super(),B(this,e,Lo,So,G,{})}}const Fe={"decimal.js-light@2.5.1":{publisher:"Michael Mclaughlin",licenseText:`The MIT Expat Licence.\r
\r
Copyright (c) 2020 Michael Mclaughlin\r
\r
Permission is hereby granted, free of charge, to any person obtaining\r
a copy of this software and associated documentation files (the\r
'Software'), to deal in the Software without restriction, including\r
without limitation the rights to use, copy, modify, merge, publish,\r
distribute, sublicense, and/or sell copies of the Software, and to\r
permit persons to whom the Software is furnished to do so, subject to\r
the following conditions:\r
\r
The above copyright notice and this permission notice shall be\r
included in all copies or substantial portions of the Software.\r
\r
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,\r
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\r
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\r
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\r
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\r
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,name:"decimal.js-light",version:"2.5.1"},"i18next-browser-languagedetector@7.0.1":{publisher:"Jan Mühlemann",licenseText:`The MIT License (MIT)

Copyright (c) 2022 i18next

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,name:"i18next-browser-languagedetector",version:"7.0.1"},"i18next-resources-to-backend@1.1.3":{licenseText:`Copyright (c) 2022 i18next

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`,name:"i18next-resources-to-backend",version:"1.1.3"},"i18next@22.4.15":{publisher:"Jan Mühlemann",licenseText:`The MIT License (MIT)

Copyright (c) 2022 i18next

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,name:"i18next",version:"22.4.15"},"json5@2.2.3":{publisher:"Aseem Kishore",licenseText:`MIT License

Copyright (c) 2012-2018 Aseem Kishore, and [others].

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[others]: https://github.com/json5/json5/contributors`,name:"json5",version:"2.2.3"},"jszip@3.10.1":{publisher:"Stuart Knightley",licenseText:`JSZip is dual licensed. At your choice you may use it under the MIT license *or* the GPLv3
license.

The MIT License
===============

Copyright (c) 2009-2016 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


GPL version 3
=============

                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS`,name:"jszip",version:"3.10.1"},"lodash-es@4.17.21":{publisher:"John-David Dalton",licenseText:`Copyright OpenJS Foundation and other contributors <https://openjsf.org/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.`,name:"lodash-es",version:"4.17.21"},"markdown-it@13.0.1":{licenseText:`Copyright (c) 2014 Vitaly Puzrin, Alex Kocharin.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.`,name:"markdown-it",version:"13.0.1"},"nanoid@4.0.2":{publisher:"Andrey Sitnik",licenseText:`The MIT License (MIT)

Copyright 2017 Andrey Sitnik <andrey@sitnik.ru>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,name:"nanoid",version:"4.0.2"},"pngjs@7.0.0":{licenseText:`pngjs original work Copyright (c) 2015 Luke Page & Original Contributors
pngjs derived work Copyright (c) 2012 Kuba Niegowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`,name:"pngjs",version:"7.0.0"},"semver@7.5.0":{publisher:"GitHub Inc.",licenseText:`The ISC License

Copyright (c) Isaac Z. Schlueter and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`,name:"semver",version:"7.5.0"},"the-new-css-reset@1.8.4":{publisher:"Elad Shechter",licenseText:`MIT License

Copyright (c) 2021 Elad Shechter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,name:"the-new-css-reset",version:"1.8.4"}};function Gt(i,e,t){const n=i.slice();return n[7]=e[t],n}function Wt(i){let e,t,n,r,o=i[1]("licenses.library.name")+"",s,l,c,a=W.get(Fe[i[7]],["name"],"")+"",u,f,_,h,b=i[1]("licenses.library.version")+"",g,m,T,I=W.get(Fe[i[7]],["version"],"")+"",k,S,w,M,z=i[1]("licenses.library.publisher")+"",$,A,D,K=W.get(Fe[i[7]],["publisher"],"")+"",oe,re,ae,ce,Ee=i[1]("licenses.library.license")+"",Ie,ke,Oe,Ye=W.get(Fe[i[7]],["licenseText"],"")+"",_e,Ce;return{c(){e=p("li"),t=p("table"),n=p("tr"),r=p("th"),s=q(o),l=N(),c=p("td"),u=q(a),f=N(),_=p("tr"),h=p("th"),g=q(b),m=N(),T=p("td"),k=q(I),S=N(),w=p("tr"),M=p("th"),$=q(z),A=N(),D=p("td"),oe=q(K),re=N(),ae=p("tr"),ce=p("th"),Ie=q(Ee),ke=N(),Oe=p("td"),_e=q(Ye),Ce=N(),v(r,"class","svelte-ax4vbj"),v(h,"class","svelte-ax4vbj"),v(M,"class","svelte-ax4vbj"),v(ce,"class","svelte-ax4vbj"),v(t,"class","license svelte-ax4vbj"),v(e,"class","license-item svelte-ax4vbj")},m(ue,ge){O(ue,e,ge),d(e,t),d(t,n),d(n,r),d(r,s),d(n,l),d(n,c),d(c,u),d(t,f),d(t,_),d(_,h),d(h,g),d(_,m),d(_,T),d(T,k),d(t,S),d(t,w),d(w,M),d(M,$),d(w,A),d(w,D),d(D,oe),d(t,re),d(t,ae),d(ae,ce),d(ce,Ie),d(ae,ke),d(ae,Oe),d(Oe,_e),d(e,Ce)},p(ue,ge){ge&2&&o!==(o=ue[1]("licenses.library.name")+"")&&Z(s,o),ge&2&&b!==(b=ue[1]("licenses.library.version")+"")&&Z(g,b),ge&2&&z!==(z=ue[1]("licenses.library.publisher")+"")&&Z($,z),ge&2&&Ee!==(Ee=ue[1]("licenses.library.license")+"")&&Z(Ie,Ee)},d(ue){ue&&R(e)}}}function Co(i){let e,t,n,r,o,s,l,c=i[1]("licenses.caption")+"",a,u,f,_,h;n=new Bn({});let b=W.keys(Fe),g=[];for(let m=0;m<b.length;m+=1)g[m]=Wt(Gt(i,b,m));return{c(){e=p("div"),t=p("button"),H(n.$$.fragment),r=N(),o=p("ul"),s=p("li"),l=p("span"),a=q(c),u=N();for(let m=0;m<g.length;m+=1)g[m].c();v(t,"class","close-button svelte-ax4vbj"),v(s,"class","caption svelte-ax4vbj"),v(o,"class","license-list svelte-ax4vbj"),v(e,"class","modal svelte-ax4vbj")},m(m,T){O(m,e,T),d(e,t),C(n,t,null),d(e,r),d(e,o),d(o,s),d(s,l),d(l,a),d(o,u);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(o,null);f=!0,_||(h=[V(t,"click",i[4]),In(Wn.call(null,e,i[3]))],_=!0)},p(m,T){if((!f||T&2)&&c!==(c=m[1]("licenses.caption")+"")&&Z(a,c),T&2){b=W.keys(Fe);let I;for(I=0;I<b.length;I+=1){const k=Gt(m,b,I);g[I]?g[I].p(k,T):(g[I]=Wt(k),g[I].c(),g[I].m(o,null))}for(;I<g.length;I+=1)g[I].d(1);g.length=b.length}},i(m){f||(y(n.$$.fragment,m),f=!0)},o(m){E(n.$$.fragment,m),f=!1},d(m){m&&R(e),F(n),Xe(g,m),_=!1,be(h)}}}function Fo(i){let e,t,n,r,o,s,l,c;return e=new Qe({props:{id:i[2],$$slots:{default:[Co]},$$scope:{ctx:i}}}),o=new Ho({}),{c(){H(e.$$.fragment),t=N(),n=p("div"),r=p("button"),H(o.$$.fragment),v(n,"class","licenses svelte-ax4vbj")},m(a,u){C(e,a,u),O(a,t,u),O(a,n,u),d(n,r),C(o,r,null),i[6](n),s=!0,l||(c=V(r,"click",i[5]),l=!0)},p(a,[u]){const f={};u&1026&&(f.$$scope={dirty:u,ctx:a}),e.$set(f)},i(a){s||(y(e.$$.fragment,a),y(o.$$.fragment,a),s=!0)},o(a){E(e.$$.fragment,a),E(o.$$.fragment,a),s=!1},d(a){F(e,a),a&&R(t),a&&R(n),F(o),i[6](null),l=!1,c()}}}function Mo(i,e,t){let n;ie(i,fe,u=>t(1,n=u));let r=He(),o;function s(u){var f;o!=null&&(o.contains(u)||(f=me(r))==null||f.close())}const l=()=>{var u;return(u=me(r))==null?void 0:u.close()},c=()=>{var u;return(u=me(r))==null?void 0:u.open()};function a(u){ne[u?"unshift":"push"](()=>{o=u,t(0,o)})}return[o,n,r,s,l,c,a]}class Po extends U{constructor(e){super(),B(this,e,Mo,Fo,G,{})}}function Do(i){let e,t,n,r,o,s,l,c,a;return t=new Io({}),r=new _o({}),s=new No({}),c=new Po({}),{c(){e=p("div"),H(t.$$.fragment),n=N(),H(r.$$.fragment),o=N(),H(s.$$.fragment),l=N(),H(c.$$.fragment),v(e,"class","tools svelte-qwg69l")},m(u,f){O(u,e,f),C(t,e,null),d(e,n),C(r,e,null),d(e,o),C(s,e,null),d(e,l),C(c,e,null),a=!0},p:L,i(u){a||(y(t.$$.fragment,u),y(r.$$.fragment,u),y(s.$$.fragment,u),y(c.$$.fragment,u),a=!0)},o(u){E(t.$$.fragment,u),E(r.$$.fragment,u),E(s.$$.fragment,u),E(c.$$.fragment,u),a=!1},d(u){u&&R(e),F(t),F(r),F(s),F(c)}}}let jn=class extends U{constructor(e){super(),B(this,e,null,Do,G,{})}};function $o(i){let e,t=new qe().render(i[0]("start-page.overview"))+"";return{c(){e=p("div"),v(e,"class","overview markdown")},m(n,r){O(n,e,r),e.innerHTML=t},p(n,[r]){r&1&&t!==(t=new qe().render(n[0]("start-page.overview"))+"")&&(e.innerHTML=t)},i:L,o:L,d(n){n&&R(e)}}}function Uo(i,e,t){let n;return ie(i,fe,r=>t(0,n=r)),[n]}class Bo extends U{constructor(e){super(),B(this,e,Uo,$o,G,{})}}function Go(i){let e,t,n;return{c(){e=p("div"),e.innerHTML='<div class="message-wrapper svelte-1a0blum"><span class="caption svelte-1a0blum">画面内にファイルをドロップするとアイコンパックを読み込みます。</span></div>',v(e,"class","drop-zone svelte-1a0blum")},m(r,o){O(r,e,o),t||(n=[V(e,"dragleave",i[7]),V(e,"dragover",Ge(i[9])),V(e,"drop",Ge(i[3]))],t=!0)},p:L,d(r){r&&R(e),t=!1,be(n)}}}function jt(i){let e,t=i[2](i[1])+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","error svelte-1a0blum")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&6&&t!==(t=r[2](r[1])+"")&&Z(n,t)},d(r){r&&R(e)}}}function Wo(i){let e,t,n,r,o,s=i[2]("start-page.load-iconpack.description")+"",l,c,a,u,f,_=i[2]("start-page.load-iconpack.load-iconpack")+"",h,b,g,m,T,I,k;t=new Qe({props:{id:i[5],$$slots:{default:[Go]},$$scope:{ctx:i}}});let S=i[0]&&i[1]&&jt(i);return{c(){e=N(),H(t.$$.fragment),n=N(),r=p("div"),o=p("h2"),l=q(s),c=N(),a=p("div"),u=p("label"),f=p("span"),h=q(_),b=N(),g=p("input"),m=N(),S&&S.c(),v(o,"class","caption svelte-1a0blum"),v(g,"class","hidden"),v(g,"type","file"),v(u,"class","load-button svelte-1a0blum"),v(u,"role","button"),v(u,"tabindex","0"),v(a,"class","load-button-wrapper svelte-1a0blum"),v(r,"class","load-iconpack svelte-1a0blum")},m(w,M){O(w,e,M),C(t,w,M),O(w,n,M),O(w,r,M),d(r,o),d(o,l),d(r,c),d(r,a),d(a,u),d(u,f),d(f,h),d(u,b),d(u,g),d(a,m),S&&S.m(a,null),T=!0,I||(k=[V(document.body,"dragenter",Ge(i[6])),V(g,"change",i[4])],I=!0)},p(w,[M]){const z={};M&8192&&(z.$$scope={dirty:M,ctx:w}),t.$set(z),(!T||M&4)&&s!==(s=w[2]("start-page.load-iconpack.description")+"")&&Z(l,s),(!T||M&4)&&_!==(_=w[2]("start-page.load-iconpack.load-iconpack")+"")&&Z(h,_),w[0]&&w[1]?S?S.p(w,M):(S=jt(w),S.c(),S.m(a,null)):S&&(S.d(1),S=null)},i(w){T||(y(t.$$.fragment,w),T=!0)},o(w){E(t.$$.fragment,w),T=!1},d(w){w&&R(e),F(t,w),w&&R(n),w&&R(r),S&&S.d(),I=!1,be(k)}}}function jo(i,e,t){let n;ie(i,fe,m=>t(2,n=m));let{files:r}=e,o=!1,s="";const l=m=>{t(1,s=m),t(0,o=m.length>0)};function c(m){return m==null?(l(""),!1):Ae.isMatch("zip",m.type)?(l(""),!0):(l("forms.common.error.unsupported-file-format"),!1)}function a(m){var T;if((T=me(_))==null||T.close(),!!c(m))return ji(m.arrayBuffer()).then(I=>{if(I==null){l("start-page.load-iconpack.failed-to-load-iconpack");return}t(8,r=I)})}async function u(m){if(m.dataTransfer.items){for(const T of m.dataTransfer.items)if(T.kind==="file"){await a(T.getAsFile());break}}else m.dataTransfer.files&&await a(m.dataTransfer.files[0])}async function f(m){m.target instanceof HTMLInputElement&&await a(m.target.files[0])}const _=He();function h(){var m;(m=me(_))==null||m.open()}function b(m){var T;(m.x<=0||m.y<=0)&&((T=me(_))==null||T.close())}function g(m){Be.call(this,i,m)}return i.$$set=m=>{"files"in m&&t(8,r=m.files)},[o,s,n,u,f,_,h,b,r,g]}class Yo extends U{constructor(e){super(),B(this,e,jo,Wo,G,{files:8})}}function Vo(i){let e,t,n,r,o,s,l,c,a,u,f,_;n=new Bo({});function h(T){i[1](T)}let b={};i[0]!==void 0&&(b.files=i[0]),o=new fo({props:b}),ne.push(()=>se(o,"files",h));function g(T){i[2](T)}let m={};return i[0]!==void 0&&(m.files=i[0]),c=new Yo({props:m}),ne.push(()=>se(c,"files",g)),f=new jn({}),{c(){e=p("div"),t=p("div"),H(n.$$.fragment),r=N(),H(o.$$.fragment),l=N(),H(c.$$.fragment),u=N(),H(f.$$.fragment),v(t,"class","content svelte-eq19hz"),v(e,"class","start-page svelte-eq19hz")},m(T,I){O(T,e,I),d(e,t),C(n,t,null),d(t,r),C(o,t,null),d(t,l),C(c,t,null),d(e,u),C(f,e,null),_=!0},p(T,[I]){const k={};!s&&I&1&&(s=!0,k.files=T[0],le(()=>s=!1)),o.$set(k);const S={};!a&&I&1&&(a=!0,S.files=T[0],le(()=>a=!1)),c.$set(S)},i(T){_||(y(n.$$.fragment,T),y(o.$$.fragment,T),y(c.$$.fragment,T),y(f.$$.fragment,T),_=!0)},o(T){E(n.$$.fragment,T),E(o.$$.fragment,T),E(c.$$.fragment,T),E(f.$$.fragment,T),_=!1},d(T){T&&R(e),F(n),F(o),F(c),F(f)}}}function qo(i,e,t){let{files:n}=e;function r(s){n=s,t(0,n)}function o(s){n=s,t(0,n)}return i.$$set=s=>{"files"in s&&t(0,n=s.files)},[n,r,o]}class zo extends U{constructor(e){super(),B(this,e,qo,Vo,G,{files:0})}}const wt=Symbol();function Zo(i){let e,t='<path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Ko(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Jo extends U{constructor(e){super(),B(this,e,Ko,Zo,G,{})}}function Xo(i){let e,t='<path fill="currentColor" d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18l5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5l1.597 1.363L13 13l4 6H7l2-3z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Qo(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class xo extends U{constructor(e){super(),B(this,e,Qo,Xo,G,{})}}function er(i){let e,t='<path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function tr(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}let nr=class extends U{constructor(e){super(),B(this,e,tr,er,G,{})}};function ir(i){let e,t;return e=new Jo({}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function or(i){let e,t;return e=new nr({}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function rr(i){let e,t;return e=new xo({}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function sr(i){let e,t,n,r,o,s,l,c,a=i[0].name+"",u,f;const _=[rr,or,ir],h=[];function b(g,m){return m&1&&(t=null),m&1&&(n=null),m&1&&(r=null),t==null&&(t=!!Ae.isMatch("png",g[0].mimeType)),t?0:(n==null&&(n=!!Ae.isMatch("json",g[0].mimeType)),n?1:(r==null&&(r=!!Ae.isMatch("text",g[0].mimeType)),r?2:-1))}return~(o=b(i,-1))&&(s=h[o]=_[o](i)),{c(){e=p("div"),s&&s.c(),l=N(),c=p("span"),u=q(a),v(c,"class","name"),v(e,"class","file svelte-1pk6y0r")},m(g,m){O(g,e,m),~o&&h[o].m(e,null),d(e,l),d(e,c),d(c,u),f=!0},p(g,[m]){let T=o;o=b(g,m),o!==T&&(s&&(J(),E(h[T],1,1,()=>{h[T]=null}),X()),~o?(s=h[o],s||(s=h[o]=_[o](g),s.c()),y(s,1),s.m(e,l)):s=null),(!f||m&1)&&a!==(a=g[0].name+"")&&Z(u,a)},i(g){f||(y(s),f=!0)},o(g){E(s),f=!1},d(g){g&&R(e),~o&&h[o].d()}}}function lr(i,e,t){let{file:n}=e;return i.$$set=r=>{"file"in r&&t(0,n=r.file)},[n]}class ar extends U{constructor(e){super(),B(this,e,lr,sr,G,{file:0})}}function cr(i){let e,t='<path fill="currentColor" d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function ur(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class fr extends U{constructor(e){super(),B(this,e,ur,cr,G,{})}}function dr(i){let e,t='<path fill="currentColor" d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function hr(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class mr extends U{constructor(e){super(),B(this,e,hr,dr,G,{})}}function Yt(i,e,t){const n=i.slice();return n[4]=e[t],n}function pr(i){let e,t;return e=new mr({}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function gr(i){let e,t;return e=new fr({props:{class:"icon"}}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Vt(i){let e,t,n=i[2](i[1]),r=[];for(let s=0;s<n.length;s+=1)r[s]=qt(Yt(i,n,s));const o=s=>E(r[s],1,1,()=>{r[s]=null});return{c(){e=p("ul");for(let s=0;s<r.length;s+=1)r[s].c();v(e,"class","children svelte-e6i9x0")},m(s,l){O(s,e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(s,l){if(l&6){n=s[2](s[1]);let c;for(c=0;c<n.length;c+=1){const a=Yt(s,n,c);r[c]?(r[c].p(a,l),y(r[c],1)):(r[c]=qt(a),r[c].c(),y(r[c],1),r[c].m(e,null))}for(J(),c=n.length;c<r.length;c+=1)o(c);X()}},i(s){if(!t){for(let l=0;l<n.length;l+=1)y(r[l]);t=!0}},o(s){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)E(r[l]);t=!1},d(s){s&&R(e),Xe(r,s)}}}function vr(i){let e,t;return e=new ar({props:{file:i[4]}}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},p(n,r){const o={};r&2&&(o.file=n[4]),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function _r(i){let e,t;return e=new Yn({props:{directory:i[4]}}),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},p(n,r){const o={};r&2&&(o.directory=n[4]),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function qt(i){let e,t,n,r,o;const s=[_r,vr],l=[];function c(a,u){return a[4].type==="directory"?0:1}return t=c(i),n=l[t]=s[t](i),{c(){e=p("li"),n.c(),r=N()},m(a,u){O(a,e,u),l[t].m(e,null),d(e,r),o=!0},p(a,u){let f=t;t=c(a),t===f?l[t].p(a,u):(J(),E(l[f],1,1,()=>{l[f]=null}),X(),n=l[t],n?n.p(a,u):(n=l[t]=s[t](a),n.c()),y(n,1),n.m(e,r))},i(a){o||(y(n),o=!0)},o(a){E(n),o=!1},d(a){a&&R(e),l[t].d()}}}function yr(i){let e,t,n,r,o,s=i[1].name+"",l,c,a,u,f,_;const h=[gr,pr],b=[];function g(T,I){return T[0]?0:1}t=g(i),n=b[t]=h[t](i);let m=i[0]&&Vt(i);return{c(){e=p("button"),n.c(),r=N(),o=p("span"),l=q(s),c=N(),m&&m.c(),a=Te(),v(o,"class","name"),v(e,"class","directory svelte-e6i9x0")},m(T,I){O(T,e,I),b[t].m(e,null),d(e,r),d(e,o),d(o,l),O(T,c,I),m&&m.m(T,I),O(T,a,I),u=!0,f||(_=V(e,"click",i[3]),f=!0)},p(T,[I]){let k=t;t=g(T),t!==k&&(J(),E(b[k],1,1,()=>{b[k]=null}),X(),n=b[t],n||(n=b[t]=h[t](T),n.c()),y(n,1),n.m(e,r)),(!u||I&2)&&s!==(s=T[1].name+"")&&Z(l,s),T[0]?m?(m.p(T,I),I&1&&y(m,1)):(m=Vt(T),m.c(),y(m,1),m.m(a.parentNode,a)):m&&(J(),E(m,1,1,()=>{m=null}),X())},i(T){u||(y(n),y(m),u=!0)},o(T){E(n),E(m),u=!1},d(T){T&&R(e),b[t].d(),T&&R(c),m&&m.d(T),T&&R(a),f=!1,_()}}}function wr(i,e,t){let{directory:n}=e,{expanded:r=!0}=e;function o(l){return W.sortBy(l.files,[c=>pe(c)?0:1,"name"])}const s=()=>t(0,r=!r);return i.$$set=l=>{"directory"in l&&t(1,n=l.directory),"expanded"in l&&t(0,r=l.expanded)},[r,n,o,s]}class Yn extends U{constructor(e){super(),B(this,e,wr,yr,G,{directory:1,expanded:0})}}function br(i){let e,t='<path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Tr(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Er extends U{constructor(e){super(),B(this,e,Tr,br,G,{})}}function Ir(i){let e,t,n,r,o,s,l,c;return n=new Er({}),{c(){e=p("div"),t=p("button"),H(n.$$.fragment),r=N(),o=p("a"),v(o,"download",i[1]+".zip"),v(o,"href","#download"),v(e,"class","export-iconpack svelte-1sehuun")},m(a,u){O(a,e,u),d(e,t),C(n,t,null),d(e,r),d(e,o),i[4](o),s=!0,l||(c=V(t,"click",i[2]),l=!0)},p:L,i(a){s||(y(n.$$.fragment,a),s=!0)},o(a){E(n.$$.fragment,a),s=!1},d(a){a&&R(e),F(n),i[4](null),l=!1,c()}}}function kr(i,e,t){let{files:n}=e,r=n.name,o;async function s(){o&&await Hi(n).then(c=>{t(0,o.href=URL.createObjectURL(c),o),o.click()})}function l(c){ne[c?"unshift":"push"](()=>{o=c,t(0,o)})}return i.$$set=c=>{"files"in c&&t(3,n=c.files)},[o,r,s,n,l]}class Or extends U{constructor(e){super(),B(this,e,kr,Ir,G,{files:3})}}function Rr(i){let e,t,n;return t=new Or({props:{files:i[0]}}),{c(){e=p("div"),H(t.$$.fragment),v(e,"class","tools svelte-1lp6wyb")},m(r,o){O(r,e,o),C(t,e,null),n=!0},p(r,[o]){const s={};o&1&&(s.files=r[0]),t.$set(s)},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){r&&R(e),F(t)}}}function Ar(i,e,t){let{files:n}=e;return i.$$set=r=>{"files"in r&&t(0,n=r.files)},[n]}class Nr extends U{constructor(e){super(),B(this,e,Ar,Rr,G,{files:0})}}function Sr(i){let e,t,n,r,o,s;return t=new Nr({props:{files:i[1]}}),o=new Yn({props:{directory:i[1]}}),{c(){e=p("div"),H(t.$$.fragment),n=N(),r=p("div"),H(o.$$.fragment),v(r,"class","files svelte-1rnorjj"),v(e,"class","file-tree svelte-1rnorjj")},m(l,c){O(l,e,c),C(t,e,null),d(e,n),d(e,r),C(o,r,null),i[2](e),s=!0},p(l,[c]){const a={};c&2&&(a.files=l[1]),t.$set(a);const u={};c&2&&(u.directory=l[1]),o.$set(u)},i(l){s||(y(t.$$.fragment,l),y(o.$$.fragment,l),s=!0)},o(l){E(t.$$.fragment,l),E(o.$$.fragment,l),s=!1},d(l){l&&R(e),F(t),F(o),i[2](null)}}}function Lr(i,e,t){let{ref:n}=e,{files:r}=e;function o(s){ne[s?"unshift":"push"](()=>{n=s,t(0,n)})}return i.$$set=s=>{"ref"in s&&t(0,n=s.ref),"files"in s&&t(1,r=s.files)},[n,r,o]}class Hr extends U{constructor(e){super(),B(this,e,Lr,Sr,G,{ref:0,files:1})}}function Cr(i){let e,t='<path fill="currentColor" d="M16.939 7.939L12 12.879l-4.939-4.94l-2.122 2.122L12 17.121l7.061-7.06z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Fr(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Mr extends U{constructor(e){super(),B(this,e,Fr,Cr,G,{})}}function Pr(i){let e,t='<path fill="currentColor" d="m12 6.879l-7.061 7.06l2.122 2.122L12 11.121l4.939 4.94l2.122-2.122z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Dr(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class $r extends U{constructor(e){super(),B(this,e,Dr,Pr,G,{})}}function zt(i){let e,t,n,r,o=i[1].required&&Zt(i);return{c(){e=p("div"),t=p("span"),n=q(i[0]),r=N(),o&&o.c(),v(t,"class","label"),v(e,"class","label-row svelte-1vo3eph")},m(s,l){O(s,e,l),d(e,t),d(t,n),d(e,r),o&&o.m(e,null)},p(s,l){l&1&&Z(n,s[0]),s[1].required?o?o.p(s,l):(o=Zt(s),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(s){s&&R(e),o&&o.d()}}}function Zt(i){let e,t=i[3]("forms.common.required-mark")+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","required svelte-1vo3eph")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&8&&t!==(t=r[3]("forms.common.required-mark")+"")&&Z(n,t)},d(r){r&&R(e)}}}function Kt(i){let e,t=i[1].placeholder+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","placeholder svelte-1vo3eph")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&2&&t!==(t=r[1].placeholder+"")&&Z(n,t)},d(r){r&&R(e)}}}function Jt(i){let e,t,n,r,o;return t=new xe({}),{c(){e=p("button"),H(t.$$.fragment),v(e,"class","clear-button svelte-1vo3eph")},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[6]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function Xt(i){let e,t,n,r,o;return t=new ot({}),{c(){e=p("button"),H(t.$$.fragment),v(e,"class","help-button svelte-1vo3eph")},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[12]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function Ur(i){let e,t,n,r,o,s,l,c,a,u,f,_,h,b,g,m,T,I=!i[1].disabled&&!W.isEmpty(i[1].help),k,S,w;e=new it({props:{id:i[4],markdown:i[1].help}});let M=i[0]&&zt(i),z=i[1].placeholder&&!i[2]&&Kt(i),$=!i[1].required&&Jt(i);h=new $r({}),m=new Mr({});let A=I&&Xt(i);return{c(){H(e.$$.fragment),t=N(),n=p("div"),M&&M.c(),r=N(),o=p("div"),s=p("div"),l=p("input"),c=N(),z&&z.c(),a=N(),$&&$.c(),u=N(),f=p("div"),_=p("button"),H(h.$$.fragment),b=N(),g=p("button"),H(m.$$.fragment),T=N(),A&&A.c(),v(l,"class","input svelte-1vo3eph"),v(l,"inputmode","decimal"),v(l,"type","text"),v(s,"class","input-container svelte-1vo3eph"),v(_,"class","svelte-1vo3eph"),v(g,"class","svelte-1vo3eph"),v(f,"class","spinner-container svelte-1vo3eph"),v(o,"class","input-row svelte-1vo3eph"),v(n,"class","number-input svelte-1vo3eph")},m(D,K){C(e,D,K),O(D,t,K),O(D,n,K),M&&M.m(n,null),d(n,r),d(n,o),d(o,s),d(s,l),ve(l,i[2]),d(s,c),z&&z.m(s,null),d(s,a),$&&$.m(s,null),d(o,u),d(o,f),d(f,_),C(h,_,null),d(f,b),d(f,g),C(m,g,null),d(n,T),A&&A.m(n,null),k=!0,S||(w=[V(l,"input",i[9]),V(l,"input",i[5]),V(_,"click",i[10]),V(g,"click",i[11])],S=!0)},p(D,[K]){const oe={};K&2&&(oe.markdown=D[1].help),e.$set(oe),D[0]?M?M.p(D,K):(M=zt(D),M.c(),M.m(n,r)):M&&(M.d(1),M=null),K&4&&l.value!==D[2]&&ve(l,D[2]),D[1].placeholder&&!D[2]?z?z.p(D,K):(z=Kt(D),z.c(),z.m(s,a)):z&&(z.d(1),z=null),D[1].required?$&&(J(),E($,1,1,()=>{$=null}),X()):$?($.p(D,K),K&2&&y($,1)):($=Jt(D),$.c(),y($,1),$.m(s,null)),K&2&&(I=!D[1].disabled&&!W.isEmpty(D[1].help)),I?A?(A.p(D,K),K&2&&y(A,1)):(A=Xt(D),A.c(),y(A,1),A.m(n,null)):A&&(J(),E(A,1,1,()=>{A=null}),X())},i(D){k||(y(e.$$.fragment,D),y($),y(h.$$.fragment,D),y(m.$$.fragment,D),y(A),k=!0)},o(D){E(e.$$.fragment,D),E($),E(h.$$.fragment,D),E(m.$$.fragment,D),E(A),k=!1},d(D){F(e,D),D&&R(t),D&&R(n),M&&M.d(),z&&z.d(),$&&$.d(),F(h),F(m),A&&A.d(),S=!1,be(w)}}}function Br(i,e,t){let n;ie(i,fe,w=>t(3,n=w));let{label:r=""}=e,{value:o=null}=e,{options:s={}}=e;const l=He(),c=Je();let a,u=0,f=Number.MAX_SAFE_INTEGER,_=1;const h=w=>w.gt(f)?new $e(f):w.lt(u)?new $e(u):w;function b(w){let M=w.target;if(M instanceof HTMLInputElement){if(M.value==="-")return;/^-?\d+(\.(\d+)?)?$/g.test(M.value)?(t(8,o=h(new $e(M.value)).toNumber()),c("change",{value:o})):(M.value=M.value.slice(0,-1),t(2,a=M.value),W.isEmpty(a)&&(t(8,o=null),c("change",{value:o})))}}function g(){t(8,o=null),c("change",{value:o})}function m(w){o==null?t(8,o=_):w?t(8,o=h(new $e(o).plus(_)).toNumber()):t(8,o=h(new $e(o).minus(_)).toNumber()),c("change",{value:o})}function T(){a=this.value,t(2,a),t(8,o)}const I=()=>m(!0),k=()=>m(!1),S=()=>{var w;return(w=me(l))==null?void 0:w.open()};return i.$$set=w=>{"label"in w&&t(0,r=w.label),"value"in w&&t(8,o=w.value),"options"in w&&t(1,s=w.options)},i.$$.update=()=>{i.$$.dirty&256&&t(2,a=(o==null?void 0:o.toString())||""),i.$$.dirty&2&&(u=s.min!=null?s.min:0,f=s.max!=null?s.max:Number.MAX_SAFE_INTEGER,_=s.step!=null?s.step:1)},[r,s,a,n,l,b,g,m,o,T,I,k,S]}class pt extends U{constructor(e){super(),B(this,e,Br,Ur,G,{label:0,value:8,options:1})}}function Gr(i){let e,t,n,r,o,s;return t=new Gn({props:{label:i[2]("iconpack-editor.target.label"),options:{required:!0,help:i[2]("iconpack-editor.target.help"),placeholder:"$enemy_boar"},value:i[0]}}),t.$on("change",i[3]),o=new pt({props:{label:i[2]("iconpack-editor.level.label"),options:{min:1,max:3,help:i[2]("iconpack-editor.level.help"),placeholder:i[2]("iconpack-editor.level.placeholder")},value:i[1]}}),o.$on("change",i[4]),{c(){e=p("div"),H(t.$$.fragment),n=N(),r=p("div"),H(o.$$.fragment),v(r,"class","metadata"),v(e,"class","target-editor svelte-a3wnvi")},m(l,c){O(l,e,c),C(t,e,null),d(e,n),d(e,r),C(o,r,null),s=!0},p(l,[c]){const a={};c&4&&(a.label=l[2]("iconpack-editor.target.label")),c&4&&(a.options={required:!0,help:l[2]("iconpack-editor.target.help"),placeholder:"$enemy_boar"}),c&1&&(a.value=l[0]),t.$set(a);const u={};c&4&&(u.label=l[2]("iconpack-editor.level.label")),c&4&&(u.options={min:1,max:3,help:l[2]("iconpack-editor.level.help"),placeholder:l[2]("iconpack-editor.level.placeholder")}),c&2&&(u.value=l[1]),o.$set(u)},i(l){s||(y(t.$$.fragment,l),y(o.$$.fragment,l),s=!0)},o(l){E(t.$$.fragment,l),E(o.$$.fragment,l),s=!1},d(l){l&&R(e),F(t),F(o)}}}function Wr(i,e,t){let n;ie(i,fe,a=>t(2,n=a));let{entry:r}=e,o="",s=null;function l({detail:a}){t(5,r.target.name=a.value,r)}function c({detail:a}){a.value==null?(W.unset(r.target,["metadata","level"]),W.unsetIfEmpty(r.target,"metadata")):W.set(r.target,["metadata","level"],a.value),t(5,r)}return i.$$set=a=>{"entry"in a&&t(5,r=a.entry)},i.$$.update=()=>{i.$$.dirty&32&&(t(0,o=r.target.name),t(1,s=W.get(r.target,["metadata","level"],null)))},[o,s,n,l,c,r]}class jr extends U{constructor(e){super(),B(this,e,Wr,Gr,G,{entry:5})}}function Qt(i){let e,t,n,r,o=i[3].required&&xt(i);return{c(){e=p("div"),t=p("span"),n=q(i[2]),r=N(),o&&o.c(),v(t,"class","label"),v(e,"class","label-row")},m(s,l){O(s,e,l),d(e,t),d(t,n),d(e,r),o&&o.m(e,null)},p(s,l){l&4&&Z(n,s[2]),s[3].required?o?o.p(s,l):(o=xt(s),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(s){s&&R(e),o&&o.d()}}}function xt(i){let e,t=i[7]("forms.common.required-mark")+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","required svelte-9cgg81")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&128&&t!==(t=r[7]("forms.common.required-mark")+"")&&Z(n,t)},d(r){r&&R(e)}}}function Yr(i){let e,t,n,r,o,s,l,c,a,u,f,_,h,b,g,m=i[7]("forms.image-file.image-data.sub-directory")+"",T,I,k,S,w,M,z=i[7]("forms.image-file.image-data.filename")+"",$,A,D,K,oe,re,ae=i[7]("forms.image-file.image-data.width")+"",ce,Ee,Ie,ke=i[0].dimension.width+"",Oe,Ye,_e,Ce,ue=i[7]("forms.image-file.image-data.height")+"",ge,bt,rt,Ve=i[0].dimension.height+"",st,de,lt,Tt;return r=new xe({}),{c(){e=p("div"),t=p("div"),n=p("button"),H(r.$$.fragment),o=N(),s=p("label"),l=p("img"),u=N(),f=p("input"),_=N(),h=p("div"),b=p("label"),g=p("span"),T=q(m),I=N(),k=p("input"),S=N(),w=p("label"),M=p("span"),$=q(z),A=N(),D=p("input"),K=N(),oe=p("div"),re=p("span"),ce=q(ae),Ee=N(),Ie=p("span"),Oe=q(ke),Ye=N(),_e=p("div"),Ce=p("span"),ge=q(ue),bt=N(),rt=p("span"),st=q(Ve),v(n,"class","clear-button svelte-9cgg81"),ze(l.src,c=i[4])||v(l,"src",c),v(l,"alt",a=i[0].name),v(l,"class","svelte-9cgg81"),v(f,"class","hidden"),v(f,"type","file"),v(s,"class","preview svelte-9cgg81"),v(t,"class","preview-wrapper svelte-9cgg81"),v(g,"class","svelte-9cgg81"),v(k,"type","text"),v(k,"class","svelte-9cgg81"),v(b,"class","data-entry sub-directory svelte-9cgg81"),v(D,"type","text"),v(D,"class","svelte-9cgg81"),v(w,"class","data-entry filename svelte-9cgg81"),v(oe,"class","data-entry width svelte-9cgg81"),v(_e,"class","data-entry height svelte-9cgg81"),v(h,"class","data svelte-9cgg81"),v(e,"class","image-data svelte-9cgg81")},m(ee,he){O(ee,e,he),d(e,t),d(t,n),C(r,n,null),d(t,o),d(t,s),d(s,l),d(s,u),d(s,f),d(e,_),d(e,h),d(h,b),d(b,g),d(g,T),d(b,I),d(b,k),ve(k,i[1]),d(h,S),d(h,w),d(w,M),d(M,$),d(w,A),d(w,D),ve(D,i[0].name),d(h,K),d(h,oe),d(oe,re),d(re,ce),d(oe,Ee),d(oe,Ie),d(Ie,Oe),d(h,Ye),d(h,_e),d(_e,Ce),d(Ce,ge),d(_e,bt),d(_e,rt),d(rt,st),de=!0,lt||(Tt=[V(n,"click",i[12]),V(f,"change",i[11]),V(k,"input",i[14]),V(k,"input",i[9]),V(D,"input",i[15]),V(D,"input",i[9])],lt=!0)},p(ee,he){(!de||he&16&&!ze(l.src,c=ee[4]))&&v(l,"src",c),(!de||he&1&&a!==(a=ee[0].name))&&v(l,"alt",a),(!de||he&128)&&m!==(m=ee[7]("forms.image-file.image-data.sub-directory")+"")&&Z(T,m),he&2&&k.value!==ee[1]&&ve(k,ee[1]),(!de||he&128)&&z!==(z=ee[7]("forms.image-file.image-data.filename")+"")&&Z($,z),he&1&&D.value!==ee[0].name&&ve(D,ee[0].name),(!de||he&128)&&ae!==(ae=ee[7]("forms.image-file.image-data.width")+"")&&Z(ce,ae),(!de||he&1)&&ke!==(ke=ee[0].dimension.width+"")&&Z(Oe,ke),(!de||he&128)&&ue!==(ue=ee[7]("forms.image-file.image-data.height")+"")&&Z(ge,ue),(!de||he&1)&&Ve!==(Ve=ee[0].dimension.height+"")&&Z(st,Ve)},i(ee){de||(y(r.$$.fragment,ee),de=!0)},o(ee){E(r.$$.fragment,ee),de=!1},d(ee){ee&&R(e),F(r),lt=!1,be(Tt)}}}function Vr(i){let e,t,n=i[7]("forms.image-file.select-area.dnd-files-here-or")+"",r,o,s,l,c=i[7]("forms.image-file.select-area.browse")+"",a,u,f,_,h;return{c(){e=p("div"),t=p("span"),r=q(n),o=N(),s=p("label"),l=p("span"),a=q(c),u=N(),f=p("input"),v(f,"class","hidden"),v(f,"type","file"),v(s,"class","browse svelte-9cgg81"),v(e,"class","select-area svelte-9cgg81")},m(b,g){O(b,e,g),d(e,t),d(t,r),d(e,o),d(e,s),d(s,l),d(l,a),d(s,u),d(s,f),_||(h=V(f,"change",i[11]),_=!0)},p(b,g){g&128&&n!==(n=b[7]("forms.image-file.select-area.dnd-files-here-or")+"")&&Z(r,n),g&128&&c!==(c=b[7]("forms.image-file.select-area.browse")+"")&&Z(a,c)},i:L,o:L,d(b){b&&R(e),_=!1,h()}}}function en(i){let e,t=i[7](i[6])+"",n;return{c(){e=p("span"),n=q(t),v(e,"class","error svelte-9cgg81")},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&192&&t!==(t=r[7](r[6])+"")&&Z(n,t)},d(r){r&&R(e)}}}function tn(i){let e,t,n,r,o;return t=new ot({}),{c(){e=p("button"),H(t.$$.fragment),v(e,"class","help-button svelte-9cgg81")},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[16]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function qr(i){let e,t,n,r,o,s,l,c,a,u,f,_;e=new it({props:{id:i[8],markdown:i[3].help}});let h=i[2]&&Qt(i);const b=[Vr,Yr],g=[];function m(k,S){return k[0]==null?0:1}s=m(i),l=g[s]=b[s](i);let T=i[5]&&i[6]&&en(i),I=i[3].help&&tn(i);return{c(){H(e.$$.fragment),t=N(),n=p("div"),h&&h.c(),r=N(),o=p("div"),l.c(),c=N(),T&&T.c(),a=N(),I&&I.c(),v(o,"class","image-row"),v(n,"class","image-file svelte-9cgg81")},m(k,S){C(e,k,S),O(k,t,S),O(k,n,S),h&&h.m(n,null),d(n,r),d(n,o),g[s].m(o,null),d(n,c),T&&T.m(n,null),d(n,a),I&&I.m(n,null),u=!0,f||(_=[V(o,"dragover",Ge(i[13])),V(o,"drop",Ge(i[10]))],f=!0)},p(k,[S]){const w={};S&8&&(w.markdown=k[3].help),e.$set(w),k[2]?h?h.p(k,S):(h=Qt(k),h.c(),h.m(n,r)):h&&(h.d(1),h=null);let M=s;s=m(k),s===M?g[s].p(k,S):(J(),E(g[M],1,1,()=>{g[M]=null}),X(),l=g[s],l?l.p(k,S):(l=g[s]=b[s](k),l.c()),y(l,1),l.m(o,null)),k[5]&&k[6]?T?T.p(k,S):(T=en(k),T.c(),T.m(n,a)):T&&(T.d(1),T=null),k[3].help?I?(I.p(k,S),S&8&&y(I,1)):(I=tn(k),I.c(),y(I,1),I.m(n,null)):I&&(J(),E(I,1,1,()=>{I=null}),X())},i(k){u||(y(e.$$.fragment,k),y(l),y(I),u=!0)},o(k){E(e.$$.fragment,k),E(l),E(I),u=!1},d(k){F(e,k),k&&R(t),k&&R(n),h&&h.d(),g[s].d(),T&&T.d(),I&&I.d(),f=!1,be(_)}}}function zr(i,e,t){let n;ie(i,fe,$=>t(7,n=$));let{label:r=""}=e,{directory:o=""}=e,{image:s=null}=e,{options:l={}}=e;const c=He(),a=Je();let u="",f=!1,_="";const h=$=>{t(6,_=$),t(5,f=$.length>0)};function b($){return $==null?(l.required&&h("forms.common.error.required"),!1):Ae.isMatch("png",$.type)?(h(""),!0):(h("forms.common.error.unsupported-file-format"),!1)}function g(){t(1,o=o.replaceAll(/[^ a-zA-Z0-9_.+-]/g,"")),a("change",{directory:o,image:s})}async function m($){if(t(1,o=""),!b($))return t(0,s=null),g(),Promise.resolve();const A=await $.arrayBuffer();new kn.PNG({}).parse(A,(D,K)=>{t(0,s={name:$.name,type:$.type,data:A,dimension:{width:K.width,height:K.height}}),g()})}async function T($){if($.dataTransfer.items){for(const A of $.dataTransfer.items)if(A.kind==="file"){await m(A.getAsFile());break}}else $.dataTransfer.files&&await m($.dataTransfer.files[0])}async function I($){$.target instanceof HTMLInputElement&&await m($.target.files[0])}function k(){t(4,u=""),t(1,o=""),t(0,s=null),b(null),g()}function S($){Be.call(this,i,$)}function w(){o=this.value,t(1,o)}function M(){s.name=this.value,t(0,s)}const z=()=>{var $;return($=me(c))==null?void 0:$.open()};return i.$$set=$=>{"label"in $&&t(2,r=$.label),"directory"in $&&t(1,o=$.directory),"image"in $&&t(0,s=$.image),"options"in $&&t(3,l=$.options)},i.$$.update=()=>{i.$$.dirty&1&&s!=null&&t(4,u=URL.createObjectURL(new Blob([s.data],{type:s.type})))},[s,o,r,l,u,f,_,n,c,g,T,I,k,S,w,M,z]}class Zr extends U{constructor(e){super(),B(this,e,zr,qr,G,{label:2,directory:1,image:0,options:3})}}function Kr(i){let e,t,n;return t=new Zr({props:{directory:i[0],image:i[1],label:i[2]("iconpack-editor.icon.label"),options:{required:!0,help:i[2]("iconpack-editor.icon.help")}}}),t.$on("change",i[3]),{c(){e=p("div"),H(t.$$.fragment),v(e,"class","sprite-editor svelte-177cowe")},m(r,o){O(r,e,o),C(t,e,null),n=!0},p(r,[o]){const s={};o&1&&(s.directory=r[0]),o&2&&(s.image=r[1]),o&4&&(s.label=r[2]("iconpack-editor.icon.label")),o&4&&(s.options={required:!0,help:r[2]("iconpack-editor.icon.help")}),t.$set(s)},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){r&&R(e),F(t)}}}function Jr(i,e,t){let n;ie(i,fe,a=>t(2,n=a));let{entry:r}=e,{spriteFile:o}=e,s="",l=null;function c(a){const{directory:u,image:f}=a.detail;if(f==null)t(4,o=null),t(5,r.sprite={file:"",width:0,height:0},r);else{const{name:_,type:h,data:b,dimension:g}=f;t(4,o=tt({parent:Pe(u),name:_,mimeType:h,data:b})),t(5,r.sprite={file:we(o),width:g.width,height:g.height},r)}}return i.$$set=a=>{"entry"in a&&t(5,r=a.entry),"spriteFile"in a&&t(4,o=a.spriteFile)},i.$$.update=()=>{i.$$.dirty&16&&(o!=null?new kn.PNG({}).parse(o.data,(a,u)=>{t(0,s=Ui(o).parent),t(1,l={name:o.name,type:Re.png,data:o.data,dimension:{width:u.width,height:u.height}})}):(t(0,s=""),t(1,l=null)))},[s,l,n,c,o,r]}class Xr extends U{constructor(e){super(),B(this,e,Jr,Kr,G,{entry:5,spriteFile:4})}}function Qr(i){let e,t='<path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function xr(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class nn extends U{constructor(e){super(),B(this,e,xr,Qr,G,{})}}function es(i){let e,t='<path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function ts(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class on extends U{constructor(e){super(),B(this,e,ts,es,G,{})}}function ns(i){let e,t='<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function is(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class rn extends U{constructor(e){super(),B(this,e,is,ns,G,{})}}function os(i){let e,t='<path fill="currentColor" d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function rs(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class sn extends U{constructor(e){super(),B(this,e,rs,os,G,{})}}function ss(i){let e,t,n;var r=i[3]==="light"?on:nn;function o(s){return{}}return r&&(e=De(r,o())),{c(){e&&H(e.$$.fragment),t=Te()},m(s,l){e&&C(e,s,l),O(s,t,l),n=!0},p(s,l){if(l&8&&r!==(r=s[3]==="light"?on:nn)){if(e){J();const c=e;E(c.$$.fragment,1,0,()=>{F(c,1)}),X()}r?(e=De(r,o()),H(e.$$.fragment),y(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}},i(s){n||(e&&y(e.$$.fragment,s),n=!0)},o(s){e&&E(e.$$.fragment,s),n=!1},d(s){s&&R(t),e&&F(e,s)}}}function ls(i){let e,t,n;var r=i[3]==="light"?rn:sn;function o(s){return{}}return r&&(e=De(r,o())),{c(){e&&H(e.$$.fragment),t=Te()},m(s,l){e&&C(e,s,l),O(s,t,l),n=!0},p(s,l){if(l&8&&r!==(r=s[3]==="light"?rn:sn)){if(e){J();const c=e;E(c.$$.fragment,1,0,()=>{F(c,1)}),X()}r?(e=De(r,o()),H(e.$$.fragment),y(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}},i(s){n||(e&&y(e.$$.fragment,s),n=!0)},o(s){e&&E(e.$$.fragment,s),n=!1},d(s){s&&R(t),e&&F(e,s)}}}function ln(i){let e,t,n,r,o;return t=new ot({}),{c(){e=p("button"),H(t.$$.fragment),v(e,"class","help-button svelte-7ecrae")},m(s,l){O(s,e,l),C(t,e,null),n=!0,r||(o=V(e,"click",i[6]),r=!0)},p:L,i(s){n||(y(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&R(e),F(t),r=!1,o()}}}function as(i){let e,t,n,r,o,s,l,c,a,u,f,_,h,b;e=new it({props:{id:i[4],markdown:i[2].help}});const g=[ls,ss],m=[];function T(k,S){return k[0]?0:1}s=T(i),l=m[s]=g[s](i);let I=i[2].help&&ln(i);return{c(){H(e.$$.fragment),t=N(),n=p("div"),r=p("button"),o=p("span"),l.c(),c=N(),a=p("span"),u=q(i[1]),f=N(),I&&I.c(),v(o,"class","icon svelte-7ecrae"),v(a,"class","label"),v(r,"class","checkbox-input svelte-7ecrae"),v(n,"class","checkbox svelte-7ecrae")},m(k,S){C(e,k,S),O(k,t,S),O(k,n,S),d(n,r),d(r,o),m[s].m(o,null),d(r,c),d(r,a),d(a,u),d(n,f),I&&I.m(n,null),_=!0,h||(b=V(r,"click",i[5]),h=!0)},p(k,[S]){const w={};S&4&&(w.markdown=k[2].help),e.$set(w);let M=s;s=T(k),s===M?m[s].p(k,S):(J(),E(m[M],1,1,()=>{m[M]=null}),X(),l=m[s],l?l.p(k,S):(l=m[s]=g[s](k),l.c()),y(l,1),l.m(o,null)),(!_||S&2)&&Z(u,k[1]),k[2].help?I?(I.p(k,S),S&4&&y(I,1)):(I=ln(k),I.c(),y(I,1),I.m(n,null)):I&&(J(),E(I,1,1,()=>{I=null}),X())},i(k){_||(y(e.$$.fragment,k),y(l),y(I),_=!0)},o(k){E(e.$$.fragment,k),E(l),E(I),_=!1},d(k){F(e,k),k&&R(t),k&&R(n),m[s].d(),I&&I.d(),h=!1,b()}}}function cs(i,e,t){let n;ie(i,Me,f=>t(3,n=f));let{label:r=""}=e,{value:o=!1}=e,{options:s={}}=e;const l=He(),c=Je();function a(){t(0,o=!o),c("change",{value:o})}const u=()=>{var f;return(f=me(l))==null?void 0:f.open()};return i.$$set=f=>{"label"in f&&t(1,r=f.label),"value"in f&&t(0,o=f.value),"options"in f&&t(2,s=f.options)},[o,r,s,n,l,a,u]}class us extends U{constructor(e){super(),B(this,e,cs,as,G,{label:1,value:0,options:2})}}function an(i){let e,t,n,r;return e=new pt({props:{value:i[2],label:i[4]("iconpack-editor.icon-scale-large-map.label"),options:{min:.01,step:.1,help:i[4]("iconpack-editor.icon-scale-large-map.help")}}}),e.$on("change",i[6]),n=new pt({props:{value:i[3],label:i[4]("iconpack-editor.icon-scale-small-map.label"),options:{min:.01,step:.1,help:i[4]("iconpack-editor.icon-scale-small-map.help")}}}),n.$on("change",i[7]),{c(){H(e.$$.fragment),t=N(),H(n.$$.fragment)},m(o,s){C(e,o,s),O(o,t,s),C(n,o,s),r=!0},p(o,s){const l={};s&4&&(l.value=o[2]),s&16&&(l.label=o[4]("iconpack-editor.icon-scale-large-map.label")),s&16&&(l.options={min:.01,step:.1,help:o[4]("iconpack-editor.icon-scale-large-map.help")}),e.$set(l);const c={};s&8&&(c.value=o[3]),s&16&&(c.label=o[4]("iconpack-editor.icon-scale-small-map.label")),s&16&&(c.options={min:.01,step:.1,help:o[4]("iconpack-editor.icon-scale-small-map.help")}),n.$set(c)},i(o){r||(y(e.$$.fragment,o),y(n.$$.fragment,o),r=!0)},o(o){E(e.$$.fragment,o),E(n.$$.fragment,o),r=!1},d(o){F(e,o),o&&R(t),F(n,o)}}}function fs(i){let e,t,n,r;t=new us({props:{label:i[4]("iconpack-editor.hide-name-tag.label"),options:{help:i[4]("iconpack-editor.hide-name-tag.help")},value:i[1]}}),t.$on("change",i[5]);let o=i[0]!=null&&an(i);return{c(){e=p("div"),H(t.$$.fragment),n=N(),o&&o.c(),v(e,"class","options-editor svelte-1kcpu3b")},m(s,l){O(s,e,l),C(t,e,null),d(e,n),o&&o.m(e,null),r=!0},p(s,[l]){const c={};l&16&&(c.label=s[4]("iconpack-editor.hide-name-tag.label")),l&16&&(c.options={help:s[4]("iconpack-editor.hide-name-tag.help")}),l&2&&(c.value=s[1]),t.$set(c),s[0]!=null?o?(o.p(s,l),l&1&&y(o,1)):(o=an(s),o.c(),y(o,1),o.m(e,null)):o&&(J(),E(o,1,1,()=>{o=null}),X())},i(s){r||(y(t.$$.fragment,s),y(o),r=!0)},o(s){E(t.$$.fragment,s),E(o),r=!1},d(s){s&&R(e),F(t),o&&o.d()}}}function ds(i,e,t){let n;ie(i,fe,g=>t(4,n=g));let{entry:r}=e,{spriteFile:o}=e,s=!1,l=null,c=null;const a=(g,m)=>{t(8,r.options={...W.merge(r.options||{},{[g]:m})},r)},u=g=>{W.unset(r,["options",g]),W.unsetIfEmpty(r,"options"),t(8,r={...r})},f=(g,m)=>{typeof m=="boolean"?m?a(g,m):u(g):m!=null?a(g,m):u(g)};function _({detail:g}){f("hideNameTag",g.value)}function h({detail:g}){f("iconScaleLargeMap",g.value)}function b({detail:g}){f("iconScaleSmallMap",g.value)}return i.$$set=g=>{"entry"in g&&t(8,r=g.entry),"spriteFile"in g&&t(0,o=g.spriteFile)},i.$$.update=()=>{i.$$.dirty&256&&(t(1,s=W.get(r,["options","hideNameTag"],!1)),t(2,l=W.get(r,["options","iconScaleLargeMap"],null)),t(3,c=W.get(r,["options","iconScaleSmallMap"],null))),i.$$.dirty&1&&o==null&&(f("iconScaleLargeMap",null),f("iconScaleSmallMap",null))},[o,s,l,c,n,_,h,b,r]}class hs extends U{constructor(e){super(),B(this,e,ds,fs,G,{entry:8,spriteFile:0})}}function ms(i){let e,t='<path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4m2 16H5V5h11.17L19 7.83V19m-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6V6Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function ps(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class gs extends U{constructor(e){super(),B(this,e,ps,ms,G,{})}}function vs(i){let e,t='<path fill="currentColor" d="M4 19h6v2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v2.12l-2 2V7.83L15.17 5H4v14m10-9V6H5v4h9m6.42 2.3a.533.533 0 0 0-.38-.17c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28M12 19.94V22h2.06l6.06-6.07l-2.05-2.05L12 19.94M14 15c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3h.13L14 15.13V15"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function _s(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class ys extends U{constructor(e){super(),B(this,e,_s,vs,G,{})}}function ws(i){let e,t='<path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function bs(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Ts extends U{constructor(e){super(),B(this,e,bs,ws,G,{})}}const Vn=Symbol();function Es(i){let e,t;return e=new Ke({props:{icon:gs,options:{disabled:!i[1]},text:i[2]("iconpack-editor.add-entry")}}),e.$on("click",i[3]),{c(){H(e.$$.fragment)},m(n,r){C(e,n,r),t=!0},p(n,r){const o={};r&2&&(o.options={disabled:!n[1]}),r&4&&(o.text=n[2]("iconpack-editor.add-entry")),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Is(i){let e,t,n,r;return e=new Ke({props:{icon:ys,options:{disabled:!i[1]},text:i[2]("iconpack-editor.overwrite-entry")}}),e.$on("click",i[3]),n=new Ke({props:{icon:Ts,text:i[2]("iconpack-editor.delete-entry")}}),n.$on("click",i[4]),{c(){H(e.$$.fragment),t=N(),H(n.$$.fragment)},m(o,s){C(e,o,s),O(o,t,s),C(n,o,s),r=!0},p(o,s){const l={};s&2&&(l.options={disabled:!o[1]}),s&4&&(l.text=o[2]("iconpack-editor.overwrite-entry")),e.$set(l);const c={};s&4&&(c.text=o[2]("iconpack-editor.delete-entry")),n.$set(c)},i(o){r||(y(e.$$.fragment,o),y(n.$$.fragment,o),r=!0)},o(o){E(e.$$.fragment,o),E(n.$$.fragment,o),r=!1},d(o){F(e,o),o&&R(t),F(n,o)}}}function ks(i){let e,t,n,r;const o=[Is,Es],s=[];function l(c,a){return c[0]?0:1}return t=l(i),n=s[t]=o[t](i),{c(){e=p("div"),n.c(),v(e,"class","buttons svelte-1gijsla")},m(c,a){O(c,e,a),s[t].m(e,null),r=!0},p(c,[a]){let u=t;t=l(c),t===u?s[t].p(c,a):(J(),E(s[u],1,1,()=>{s[u]=null}),X(),n=s[t],n?n.p(c,a):(n=s[t]=o[t](c),n.c()),y(n,1),n.m(e,null))},i(c){r||(y(n),r=!0)},o(c){E(n),r=!1},d(c){c&&R(e),s[t].d()}}}function Os(i,e,t){let n,r,o;ie(i,fe,u=>t(2,o=u));const{saveEntry:s,deleteEntry:l}=ut(wt),{isValid:c,isOverwrite:a}=ut(Vn);return ie(i,c,u=>t(1,r=u)),ie(i,a,u=>t(0,n=u)),[n,r,o,s,l,c,a]}class Rs extends U{constructor(e){super(),B(this,e,Os,ks,G,{})}}function As(i){let e,t,n,r,o,s,l,c,a,u,f,_,h,b,g,m,T;function I(A){i[3](A)}let k={};i[0]!==void 0&&(k.entry=i[0]),n=new jr({props:k}),ne.push(()=>se(n,"entry",I));function S(A){i[4](A)}function w(A){i[5](A)}let M={};i[0]!==void 0&&(M.entry=i[0]),i[1]!==void 0&&(M.spriteFile=i[1]),s=new Xr({props:M}),ne.push(()=>se(s,"entry",S)),ne.push(()=>se(s,"spriteFile",w));function z(A){i[6](A)}let $={spriteFile:i[1]};return i[0]!==void 0&&($.entry=i[0]),u=new hs({props:$}),ne.push(()=>se(u,"entry",z)),h=new Rs({}),m=new jn({}),{c(){e=p("div"),t=p("div"),H(n.$$.fragment),o=N(),H(s.$$.fragment),a=N(),H(u.$$.fragment),_=N(),H(h.$$.fragment),b=N(),g=p("div"),H(m.$$.fragment),v(t,"class","editor svelte-mbd532"),v(g,"class","tools-wrapper svelte-mbd532"),v(e,"class","editor-wrapper svelte-mbd532")},m(A,D){O(A,e,D),d(e,t),C(n,t,null),d(t,o),C(s,t,null),d(t,a),C(u,t,null),d(t,_),C(h,t,null),d(e,b),d(e,g),C(m,g,null),T=!0},p(A,[D]){const K={};!r&&D&1&&(r=!0,K.entry=A[0],le(()=>r=!1)),n.$set(K);const oe={};!l&&D&1&&(l=!0,oe.entry=A[0],le(()=>l=!1)),!c&&D&2&&(c=!0,oe.spriteFile=A[1],le(()=>c=!1)),s.$set(oe);const re={};D&2&&(re.spriteFile=A[1]),!f&&D&1&&(f=!0,re.entry=A[0],le(()=>f=!1)),u.$set(re)},i(A){T||(y(n.$$.fragment,A),y(s.$$.fragment,A),y(u.$$.fragment,A),y(h.$$.fragment,A),y(m.$$.fragment,A),T=!0)},o(A){E(n.$$.fragment,A),E(s.$$.fragment,A),E(u.$$.fragment,A),E(h.$$.fragment,A),E(m.$$.fragment,A),T=!1},d(A){A&&R(e),F(n),F(s),F(u),F(h),F(m)}}}function Ns(i,e,t){let{json:n}=e,{entry:r}=e,{spriteFile:o}=e;const s=Ne(!1),l=Ne(!1);On(Vn,{isOverwrite:s,isValid:l});function c(_){r=_,t(0,r)}function a(_){r=_,t(0,r)}function u(_){o=_,t(1,o)}function f(_){r=_,t(0,r)}return i.$$set=_=>{"json"in _&&t(2,n=_.json),"entry"in _&&t(0,r=_.entry),"spriteFile"in _&&t(1,o=_.spriteFile)},i.$$.update=()=>{i.$$.dirty&7&&(s.set(n.some(yt(r))),l.set(Bi(r)&&o!=null))},[r,o,n,c,a,u,f]}class Ss extends U{constructor(e){super(),B(this,e,Ns,As,G,{json:2,entry:0,spriteFile:1})}}function Ls(i){let e,t='<path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=P(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,s){O(o,e,s),e.innerHTML=t},p(o,[s]){j(e,r=Q(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s&1&&o[0]]))},i:L,o:L,d(o){o&&R(e)}}}function Hs(i,e,t){return i.$$set=n=>{t(0,e=P(P({},e),Y(n)))},e=Y(e),[e]}class Cs extends U{constructor(e){super(),B(this,e,Hs,Ls,G,{})}}function Fs(i){let e,t,n,r,o,s,l,c;return n=new Cs({}),{c(){e=p("div"),t=p("div"),H(n.$$.fragment),r=N(),o=p("input"),v(t,"class","icon svelte-1e5879m"),v(o,"class","input svelte-1e5879m"),v(o,"type","text"),v(e,"class","search svelte-1e5879m")},m(a,u){O(a,e,u),d(e,t),C(n,t,null),d(e,r),d(e,o),ve(o,i[0]),s=!0,l||(c=V(o,"input",i[1]),l=!0)},p(a,[u]){u&1&&o.value!==a[0]&&ve(o,a[0])},i(a){s||(y(n.$$.fragment,a),s=!0)},o(a){E(n.$$.fragment,a),s=!1},d(a){a&&R(e),F(n),l=!1,c()}}}function Ms(i,e,t){let{keyword:n}=e;function r(){n=this.value,t(0,n)}return i.$$set=o=>{"keyword"in o&&t(0,n=o.keyword)},[n,r]}class Ps extends U{constructor(e){super(),B(this,e,Ms,Fs,G,{keyword:0})}}function cn(i){let e,t,n;return{c(){e=p("img"),v(e,"class","icon svelte-1e0fxfj"),ze(e.src,t=i[3])||v(e,"src",t),v(e,"alt",n=i[0].target.name)},m(r,o){O(r,e,o)},p(r,o){o&8&&!ze(e.src,t=r[3])&&v(e,"src",t),o&1&&n!==(n=r[0].target.name)&&v(e,"alt",n)},d(r){r&&R(e)}}}function un(i){let e,t=i[4]("json-view.entry.level",{level:i[2]})+"",n;return{c(){e=p("span"),n=q(t)},m(r,o){O(r,e,o),d(e,n)},p(r,o){o&20&&t!==(t=r[4]("json-view.entry.level",{level:r[2]})+"")&&Z(n,t)},d(r){r&&R(e)}}}function Ds(i){let e,t,n,r,o,s,l,c=i[3]&&cn(i),a=i[2]>0&&un(i);return{c(){e=p("button"),c&&c.c(),t=N(),n=p("span"),r=q(i[1]),o=N(),a&&a.c(),v(e,"class","entry svelte-1e0fxfj")},m(u,f){O(u,e,f),c&&c.m(e,null),d(e,t),d(e,n),d(n,r),d(e,o),a&&a.m(e,null),s||(l=V(e,"click",i[7]),s=!0)},p(u,[f]){u[3]?c?c.p(u,f):(c=cn(u),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f&2&&Z(r,u[1]),u[2]>0?a?a.p(u,f):(a=un(u),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:L,o:L,d(u){u&&R(e),c&&c.d(),a&&a.d(),s=!1,l()}}}function $s(i,e,t){let n;ie(i,fe,f=>t(4,n=f));let{files:r}=e,{entry:o}=e;const{openEntry:s}=ut(wt);let l,c,a="";const u=()=>s(o);return i.$$set=f=>{"files"in f&&t(6,r=f.files),"entry"in f&&t(0,o=f.entry)},i.$$.update=()=>{if(i.$$.dirty&65){const f=_t(r,o);f!=null&&t(3,a=URL.createObjectURL(new Blob([f.data],{type:f.mimeType})))}i.$$.dirty&1&&(t(1,l=o.target.name),t(2,c=W.get(o.target,"metadata.level",0)))},[o,l,c,a,n,s,r,u]}class Us extends U{constructor(e){super(),B(this,e,$s,Ds,G,{files:6,entry:0})}}function fn(i,e,t){const n=i.slice();return n[7]=e[t],n}function dn(i){let e,t,n,r;return t=new Us({props:{files:i[1],entry:i[7]}}),{c(){e=p("div"),H(t.$$.fragment),n=N(),v(e,"class","entry-wrapper svelte-17i4n0v"),te(e,"active",hn(i[7],i[3]))},m(o,s){O(o,e,s),C(t,e,null),d(e,n),r=!0},p(o,s){const l={};s&2&&(l.files=o[1]),s&4&&(l.entry=o[7]),t.$set(l),(!r||s&28)&&te(e,"active",hn(o[7],o[3]))},i(o){r||(y(t.$$.fragment,o),r=!0)},o(o){E(t.$$.fragment,o),r=!1},d(o){o&&R(e),F(t)}}}function Bs(i){let e,t,n,r,o,s,l;function c(h){i[5](h)}let a={};i[3]!==void 0&&(a.keyword=i[3]),n=new Ps({props:a}),ne.push(()=>se(n,"keyword",c));let u=i[4](i[2]),f=[];for(let h=0;h<u.length;h+=1)f[h]=dn(fn(i,u,h));const _=h=>E(f[h],1,1,()=>{f[h]=null});return{c(){e=p("div"),t=p("div"),H(n.$$.fragment),o=N(),s=p("div");for(let h=0;h<f.length;h+=1)f[h].c();v(t,"class","search-wrapper svelte-17i4n0v"),v(s,"class","entries svelte-17i4n0v"),v(e,"class","json-view svelte-17i4n0v")},m(h,b){O(h,e,b),d(e,t),C(n,t,null),d(e,o),d(e,s);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(s,null);i[6](e),l=!0},p(h,[b]){const g={};if(!r&&b&8&&(r=!0,g.keyword=h[3],le(()=>r=!1)),n.$set(g),b&30){u=h[4](h[2]);let m;for(m=0;m<u.length;m+=1){const T=fn(h,u,m);f[m]?(f[m].p(T,b),y(f[m],1)):(f[m]=dn(T),f[m].c(),y(f[m],1),f[m].m(s,null))}for(J(),m=u.length;m<f.length;m+=1)_(m);X()}},i(h){if(!l){y(n.$$.fragment,h);for(let b=0;b<u.length;b+=1)y(f[b]);l=!0}},o(h){E(n.$$.fragment,h),f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)E(f[b]);l=!1},d(h){h&&R(e),F(n),Xe(f,h),i[6](null)}}}function hn(i,e){return i.target.name.includes(e)}function Gs(i,e,t){let{ref:n}=e,{files:r}=e,{json:o}=e,s="";function l(u){return W.sortBy(u,["target.name","target.metadata.level"])}function c(u){s=u,t(3,s)}function a(u){ne[u?"unshift":"push"](()=>{n=u,t(0,n)})}return i.$$set=u=>{"ref"in u&&t(0,n=u.ref),"files"in u&&t(1,r=u.files),"json"in u&&t(2,o=u.json)},[n,r,o,s,l,c,a]}class Ws extends U{constructor(e){super(),B(this,e,Gs,Bs,G,{ref:0,files:1,json:2})}}function js(i){let e,t,n;return{c(){e=p("div"),e.innerHTML='<div class="vertical-border svelte-yh5c7i"></div>',v(e,"class","resize-bar svelte-yh5c7i"),te(e,"left",i[0]),te(e,"right",i[1])},m(r,o){O(r,e,o),t||(n=V(e,"mousedown",i[2]),t=!0)},p:L,i:L,o:L,d(r){r&&R(e),t=!1,n()}}}function Ys(i,e,t){let{ref:n}=e,{positiveDirection:r}=e;const o=r==="left",s=!o;let l=!1,c=-1,a=-1;function u(h){l=!0,c=h.clientX,a=n.clientWidth}function f(h){if(!(!l||h.movementX===0)){if(r==="right"){let g=a+(h.clientX-c);t(3,n.style.width=`${g}px`,n),t(3,n.style.minWidth=`${g}px`,n)}else if(r==="left"){let g=a+(c-h.clientX);t(3,n.style.width=`${g}px`,n),t(3,n.style.minWidth=`${g}px`,n)}}}function _(){l=!1}return ci(()=>{document.addEventListener("mouseup",_),document.addEventListener("mousemove",f)}),pn(()=>{document.removeEventListener("mouseup",_),document.removeEventListener("mousemove",f)}),i.$$set=h=>{"ref"in h&&t(3,n=h.ref),"positiveDirection"in h&&t(4,r=h.positiveDirection)},[o,s,u,n,r]}class mn extends U{constructor(e){super(),B(this,e,Ys,js,G,{ref:3,positiveDirection:4})}}function Vs(i){let e,t,n,r,o,s,l,c,a,u,f,_,h,b,g,m,T;function I(A){i[7](A)}let k={files:i[0]};i[1]!==void 0&&(k.ref=i[1]),t=new Hr({props:k}),ne.push(()=>se(t,"ref",I)),o=new mn({props:{positiveDirection:"right",ref:i[1]}});function S(A){i[8](A)}function w(A){i[9](A)}let M={json:i[3]};i[4]!==void 0&&(M.entry=i[4]),i[5]!==void 0&&(M.spriteFile=i[5]),l=new Ss({props:M}),ne.push(()=>se(l,"entry",S)),ne.push(()=>se(l,"spriteFile",w)),f=new mn({props:{positiveDirection:"left",ref:i[2]}});function z(A){i[10](A)}let $={files:i[0],json:i[3]};return i[2]!==void 0&&($.ref=i[2]),h=new Ws({props:$}),ne.push(()=>se(h,"ref",z)),{c(){e=p("div"),H(t.$$.fragment),r=N(),H(o.$$.fragment),s=N(),H(l.$$.fragment),u=N(),H(f.$$.fragment),_=N(),H(h.$$.fragment),v(e,"class","iconpack-editor svelte-1ohai9w"),te(e,"has-header",i[6]==="show")},m(A,D){O(A,e,D),C(t,e,null),d(e,r),C(o,e,null),d(e,s),C(l,e,null),d(e,u),C(f,e,null),d(e,_),C(h,e,null),g=!0,m||(T=V(window,"beforeunload",qs),m=!0)},p(A,[D]){const K={};D&1&&(K.files=A[0]),!n&&D&2&&(n=!0,K.ref=A[1],le(()=>n=!1)),t.$set(K);const oe={};D&2&&(oe.ref=A[1]),o.$set(oe);const re={};D&8&&(re.json=A[3]),!c&&D&16&&(c=!0,re.entry=A[4],le(()=>c=!1)),!a&&D&32&&(a=!0,re.spriteFile=A[5],le(()=>a=!1)),l.$set(re);const ae={};D&4&&(ae.ref=A[2]),f.$set(ae);const ce={};D&1&&(ce.files=A[0]),D&8&&(ce.json=A[3]),!b&&D&4&&(b=!0,ce.ref=A[2],le(()=>b=!1)),h.$set(ce),(!g||D&64)&&te(e,"has-header",A[6]==="show")},i(A){g||(y(t.$$.fragment,A),y(o.$$.fragment,A),y(l.$$.fragment,A),y(f.$$.fragment,A),y(h.$$.fragment,A),g=!0)},o(A){E(t.$$.fragment,A),E(o.$$.fragment,A),E(l.$$.fragment,A),E(f.$$.fragment,A),E(h.$$.fragment,A),g=!1},d(A){A&&R(e),F(t),F(o),F(l),F(f),F(h),m=!1,T()}}}function qs(i){return i.preventDefault(),i.returnValue=""}function zs(i,e,t){let n;ie(i,ht,b=>t(6,n=b));let{files:r}=e,o=null,s=null,l=Yi(r),c=at(),a=null;On(wt,{saveEntry:()=>{t(3,l=[...zi(r,l,c,a)]),t(0,r={...r}),t(4,c=at()),t(5,a=null)},openEntry:b=>{t(4,c={...W.cloneDeep(b)}),t(5,a=_t(r,c))},deleteEntry:()=>{t(3,l=[...Vi(r,l,c)]),t(0,r={...r}),t(4,c=at()),t(5,a=null)}});function u(b){o=b,t(1,o)}function f(b){c=b,t(4,c)}function _(b){a=b,t(5,a)}function h(b){s=b,t(2,s)}return i.$$set=b=>{"files"in b&&t(0,r=b.files)},[r,o,s,l,c,a,n,u,f,_,h]}class Zs extends U{constructor(e){super(),B(this,e,zs,Vs,G,{files:0})}}function Ks(i){return{c:L,m:L,p:L,i:L,o:L,d:L}}function Js(i){let e,t,n,r;const o=[Qs,Xs],s=[];function l(c,a){return c[0]==null?0:1}return e=l(i),t=s[e]=o[e](i),{c(){t.c(),n=Te()},m(c,a){s[e].m(c,a),O(c,n,a),r=!0},p(c,a){let u=e;e=l(c),e===u?s[e].p(c,a):(J(),E(s[u],1,1,()=>{s[u]=null}),X(),t=s[e],t?t.p(c,a):(t=s[e]=o[e](c),t.c()),y(t,1),t.m(n.parentNode,n))},i(c){r||(y(t),r=!0)},o(c){E(t),r=!1},d(c){s[e].d(c),c&&R(n)}}}function Xs(i){let e,t,n;function r(s){i[3](s)}let o={};return i[0]!==void 0&&(o.files=i[0]),e=new Zs({props:o}),ne.push(()=>se(e,"files",r)),{c(){H(e.$$.fragment)},m(s,l){C(e,s,l),n=!0},p(s,l){const c={};!t&&l&1&&(t=!0,c.files=s[0],le(()=>t=!1)),e.$set(c)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Qs(i){let e,t,n;function r(s){i[2](s)}let o={};return i[0]!==void 0&&(o.files=i[0]),e=new zo({props:o}),ne.push(()=>se(e,"files",r)),{c(){H(e.$$.fragment)},m(s,l){C(e,s,l),n=!0},p(s,l){const c={};!t&&l&1&&(t=!0,c.files=s[0],le(()=>t=!1)),e.$set(c)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function xs(i){return{c:L,m:L,p:L,i:L,o:L,d:L}}function el(i){let e,t,n,r,o,s,l;e=new Qe({}),r=new Ei({});let c={ctx:i,current:null,token:null,hasCatch:!1,pending:xs,then:Js,catch:Ks,value:4,blocks:[,,,]};return ui(gi(),c),{c(){H(e.$$.fragment),t=N(),n=p("div"),H(r.$$.fragment),o=N(),s=p("main"),c.block.c(),v(s,"class","main svelte-1rifkzn"),v(n,"class","valheim-iconpack-editor svelte-1rifkzn"),te(n,"show-modal",i[1]==="show")},m(a,u){C(e,a,u),O(a,t,u),O(a,n,u),C(r,n,null),d(n,o),d(n,s),c.block.m(s,c.anchor=null),c.mount=()=>s,c.anchor=null,l=!0},p(a,[u]){i=a,fi(c,i,u),(!l||u&2)&&te(n,"show-modal",i[1]==="show")},i(a){l||(y(e.$$.fragment,a),y(r.$$.fragment,a),y(c.block),l=!0)},o(a){E(e.$$.fragment,a),E(r.$$.fragment,a);for(let u=0;u<3;u+=1){const f=c.blocks[u];E(f)}l=!1},d(a){F(e,a),a&&R(t),a&&R(n),F(r),c.block.d(),c.token=null,c=null}}}function tl(i,e,t){let n;ie(i,dt,l=>t(1,n=l));let r;function o(l){r=l,t(0,r)}function s(l){r=l,t(0,r)}return[r,n,o,s]}class nl extends U{constructor(e){super(),B(this,e,tl,el,G,{})}}new nl({target:document.body});
