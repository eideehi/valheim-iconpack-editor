import{w as be,i as ye,r as Xn,B as Qn,S as B,a as U,s as G,e as _e,b as k,t as y,g as X,c as E,d as Q,f as O,o as wn,h as yn,j as g,k as _,u as bn,l as Tn,m as En,n as ie,p as F,q as x,v as j,x as J,y as S,z as q,A as L,C as N,D as ne,E as d,F as H,G as Y,H as C,I as ee,J as xn,K as ei,L as ti,M as _t,N as ni,O as ii,P as In,Q as oi,R as ri,T as li,U as kn,V as si,W as ai,X as ci,Y as ui,Z as fi,_ as On,$ as di,a0 as Rn,a1 as Re,a2 as hi,a3 as ft,a4 as He,a5 as V,a6 as z,a7 as Me,a8 as we,a9 as We,aa as pe,ab as Ve,ac as se,ad as ae,ae as Te,af as An,ag as ze,ah as Pe,ai as Ce,aj as je,ak as Nn,al as dt,am as Sn,an as mi,ao as pi,ap as gi}from"./vendor-8439f4a3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();if(navigator.language=="ja"){const i=document.createElement("link");i.href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:ital,wght@0,400;0,700;1,400;1,700&display=swap",i.rel="stylesheet",document.head.appendChild(i)}const Se=be();let ht;{const i=localStorage.getItem("theme");!i||i!=="dark"&&i!=="light"?ht=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":ht=i}Se.subscribe(i=>{i&&(localStorage.setItem("theme",i),i==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))});Se.set(ht);const vi="modulepreload",_i=function(i){return"/valheim-iconpack-editor/"+i},Ot={},Rt=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=_i(o),o in Ot)return;Ot[o]=!0;const l=o.endsWith(".css"),s=l?'[rel="stylesheet"]':"";if(!!n)for(let c=r.length-1;c>=0;c--){const f=r[c];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":vi,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})},wi=Object.assign({"/src/assets/locales/en/app.json":()=>Rt(()=>import("./app-d12f13aa.js"),[]),"/src/assets/locales/ja/app.json":()=>Rt(()=>import("./app-8f2ebf4c.js"),[])}),yi=ye.use(Xn((i,e)=>wi[`/src/assets/locales/${i}/${e}.json`]())).use(Qn).init({debug:!0,lng:"en",fallbackLng:"en",ns:["app"],defaultNS:"app",interpolation:{escapeValue:!1},supportedLngs:["en","ja"],detection:{lookupQuerystring:"lang",order:["querystring","navigator"]}}).then(()=>ye.changeLanguage().then(i=>(document.documentElement.setAttribute("lang",ye.language),Promise.resolve(i))));function bi(){return yi}const mt=be("hidden");function At(i){let e,t;const n=i[6].default,r=yn(n,i,i[5],null);return{c(){e=g("div"),r&&r.c(),_(e,"class","modal-container svelte-1ffq99t")},m(o,l){k(o,e,l),r&&r.m(e,null),i[7](e),t=!0},p(o,l){r&&r.p&&(!t||l&32)&&bn(r,n,o,o[5],t?En(n,o[5],l,null):Tn(o[5]),null)},i(o){t||(y(r,o),t=!0)},o(o){E(r,o),t=!1},d(o){o&&O(e),r&&r.d(o),i[7](null)}}}function Ti(i){let e,t,n=i[1]&&At(i);return{c(){n&&n.c(),e=_e()},m(r,o){n&&n.m(r,o),k(r,e,o),t=!0},p(r,[o]){r[1]?n?(n.p(r,o),o&2&&y(n,1)):(n=At(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(X(),E(n,1,1,()=>{n=null}),Q())},i(r){t||(y(n),t=!0)},o(r){E(n),t=!1},d(r){r&&O(e),n&&n.d(r)}}}const Fe={};function he(i){return Fe[i]}function Ei(i,e,t){let{$$slots:n={},$$scope:r}=e,{id:o=""}=e,l,s=!1,a;Fe[o]&&Fe[o].close();function u(p){t(1,s=!0),mt.set("show"),a=p}function c(){t(1,s=!1),mt.set("hidden"),a!=null&&a()}Fe[o]={open:u,close:c},wn(()=>{delete Fe[o]});function f(p){ie[p?"unshift":"push"](()=>{l=p,t(0,l)})}return i.$$set=p=>{"id"in p&&t(2,o=p.id),"$$scope"in p&&t(5,r=p.$$scope)},i.$$.update=()=>{var p;i.$$.dirty&3&&s&&l&&((p=l.parentNode)==null||p.removeChild(l),document.body.append(l))},[l,s,o,u,c,r,n,f]}class Ze extends B{constructor(e){super(),U(this,e,Ei,Ti,G,{id:2,open:3,close:4})}get open(){return this.$$.ctx[3]}get close(){return this.$$.ctx[4]}}const pt=be("show");function Ii(i){let e,t='<g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="m12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function ki(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Ke extends B{constructor(e){super(),U(this,e,ki,Ii,G,{})}}function Oi(i){let e,t,n,r,o,l,s,a;return n=new Ke({}),{c(){e=g("header"),t=g("button"),L(n.$$.fragment),r=N(),o=g("h1"),o.textContent="Valheim IconPack Editor",_(t,"class","close-button svelte-6lw50q"),_(o,"class","title svelte-6lw50q"),_(e,"class","app-header svelte-6lw50q"),ne(e,"closed",i[0]==="hidden")},m(u,c){k(u,e,c),d(e,t),H(n,t,null),d(e,r),d(e,o),l=!0,s||(a=Y(t,"click",i[1]),s=!0)},p(u,[c]){(!l||c&1)&&ne(e,"closed",u[0]==="hidden")},i(u){l||(y(n.$$.fragment,u),l=!0)},o(u){E(n.$$.fragment,u),l=!1},d(u){u&&O(e),C(n),s=!1,a()}}}function Ri(i,e,t){let n;return ee(i,pt,o=>t(0,n=o)),[n,()=>pt.set("hidden")]}class Ai extends B{constructor(e){super(),U(this,e,Ri,Oi,G,{})}}let at=ye.language;const Ln=be(at,i=>{const e=window.setInterval(()=>{const t=ye.language;at!==t&&(at=t,i(t))},250);return()=>window.clearInterval(e)}),Hn=be(ye.t),ce=Hn;Ln.subscribe(i=>{i!==ye.language&&ye.changeLanguage(i).then(e=>{Hn.set(e)})});function Ni(i,e){const t=_t(i,e);return t==null||!In(t)?!1:On(i,e)}const W={cloneDeep:xn,eq:ei,filter:ti,get:_t,has:ni,includes:ii,isEmpty:In,isEqual:oi,keys:ri,merge:li,pick:kn,remove:si,set:ai,sortBy:ci,toLower:ui,trimStart:fi,unset:On,unsetIfEmpty:Ni,without:di},Ee={text:"plain/text",png:"image/png",json:"application/json",zip:"application/zip",unknown:"unknown"},Ie=Object.freeze({get:i=>{switch(i){case"json":return Ee.json;case"zip":return Ee.zip;case"txt":case"":return Ee.text;case"png":return Ee.png;default:return"unknown"}},isMatch:(i,e)=>{switch(i){case"text":return W.eq("plain/text",W.toLower(e));case"png":return W.eq("image/png",W.toLower(e));case"json":return W.eq("application/json",W.toLower(e));case"zip":return W.includes(["application/zip","application/x-zip-compressed"],W.toLower(e));default:return!1}}});function Cn(i){return Fn(i,[]).reverse()}function Fn(i,e){return i==null?e:(e.push(i),Fn(i.parent,e))}function de(i){return i!=null&&i.type==="directory"}function Mn(i,e){for(const t of i.files){const n=e.files.find(r=>r.name==t.name);n&&de(t)&&de(n)?Mn(t,n):n||(e.files.push(t),t.parent=e)}i.files=[]}function qe(i,e){return e==null?Si(i):de(i)?typeof e=="string"?Pn(i,e):Dn(i,e):!1}function Si(i){return i.parent==null?!1:Dn(i.parent,i)}function Pn(i,e){const t=$e(e);for(let n=0;n<t.length;n++){const r=i.files.find(o=>o.name===t[n]);if(r==null)break;if(n===t.length-1)return W.remove(i.files,r),r.parent=null,!0;if(ke(r))break;i=r}return!1}function Dn(i,e){let t=Gn(ve(i),ve(e));return W.isEmpty(t)&&(t=ve(e)),Pn(i,t)}function $n(i,e){i.parent!=null&&i.parent!==e&&qe(i.parent,i);const t=e.files.find(n=>n.name===i.name);return t!=null?(e.files=[...W.without(e.files,t),i],i.parent=e,de(t)&&de(i)&&Mn(t,i),!0):(e.files.push(i),i.parent=e,!0)}function De(i,e){if(e.parent!=null){const r=Cn(e);return r.includes(i)?!1:$n(r[0],i)}const t=W.filter(i.files,r=>r.name===e.name);if(W.isEmpty(t))return i.files.push(e),e.parent=i,!0;const n=t[0];return n===e?!1:(n.parent=null,i.files=[...W.without(i.files,n),e],e.parent=i,!0)}function ke(i){return i!=null&&i.type==="file"}function Je(i){return i.replaceAll(/\\/g,"/")}function $e(i){return Je(i).split("/").filter(e=>e.length>0)}function Oe(i,e){if(typeof e=="function")return Li(i,e);if(typeof e=="string")return Hi(i,e)}function Li(i,e){if(e(i))return i;if(!de(i))return null;for(const t of i.files){const n=Oe(t,e);if(n!=null)return n}return null}function Hi(i,e){const t=$e(e);if(!de(i))return t.length===1&&i.name===t[0]?i:null;let n=i;for(let r=0;r<t.length;r++){const o=t[r],l=n.files.find(s=>s.name===o);if(l==null)return null;if(r===t.length-1)return l;if(ke(l))return null;n=l}return null}function Ci(i){return Bn(i,0)}function Bn(i,e){return i.parent==null?e:Bn(i.parent,e+1)}function wt(i){return i.parent==null?i:wt(i.parent)}function Le(i,e){if(typeof i=="string")return Un(i);if(typeof e=="string"&&Fi(i))return Pi(i,e);if(Mi(i))return gt(i);throw console.error(i),console.error(e),new Error("Illegal argument")}function Fi(i){return W.has(i,"type")&&W.get(i,["type"],"")==="directory"&&W.has(i,"name")&&W.has(i,"parent")&&W.has(i,"files")}function Mi(i){return typeof W.get(i,["name"],null)=="string"}function gt(i){const{parent:e,name:t,files:n}=i,r={type:"directory",parent:null,name:t,files:[]};return(n||[]).forEach(o=>$n(o,r)),e!=null&&De(e,r),r}function Pi(i,e){const t=Un(e),n=wt(t);return i.files.push(n),n.parent=i,t}function Un(i){const e=$e(i);if(W.isEmpty(e))return{type:"directory",parent:null,name:"",files:[]};let t=gt({name:e[0]});for(let n=1;n<e.length;n++)t=gt({parent:t,name:e[n]});return t}function Xe(i){const{parent:e,name:t,mimeType:n,data:r}=i,o=r||new ArrayBuffer(0),l={type:"file",parent:null,name:t,mimeType:n,data:o};return e!=null&&De(e,l),l}function Di(i){const e=new Rn,t=(n,r)=>{if(r.type==="directory"){const o=n.folder(r.name);if(!o)return;for(const l of r.files)t(o,l)}else n.file(r.name,r.data)};return t(e,i),e.generateAsync({type:"blob"})}function $i(i,e){const t=$e(i),n=$e(e),r=Math.min(t.length,n.length),o=[];for(let l=0;l<r&&t[l]===n[l];l++)o.push(t[l]);return o.join("/")}function Bi(i){i=Je(i);const e=i.lastIndexOf("/");return e===-1?i:i.substring(0,e)}function ve(i){return i==null?"":Cn(i).map(e=>e.name).join("/")}function Gn(i,e){const t=$i(i,e);return W.isEmpty(t)?"":W.trimStart(Je(e).replace(t,""),"/")}function Ui(i){i=Je(i);const e=i.lastIndexOf("/"),t=i.lastIndexOf("."),n=e===-1?"":i.substring(0,e),r=e===-1?i:t===-1?i.substring(e+1):i.substring(e+1,t),o=t===-1?"":i.slice(t+1);return{dirName:n,fileName:r,extension:o}}function Qe(i){const e=Oe(i,t=>/^textures$/gi.test(t.name));return de(e)?e:null}function Gi(i,e){const t=Qe(i);t!=null&&De(t,e)}function Wi(i){return Xe({parent:i,name:"automatics-child-mod",mimeType:Ee.text,data:new ArrayBuffer(0)})}function Wn(i){return Xe({parent:i,name:"custom-map-icon.json",mimeType:Ee.json,data:new ArrayBuffer(0)})}function ji(i){return Le({parent:null,name:i,files:[Wi(),Le({parent:null,name:"Textures",files:[Wn()]})]})}function ct(){return{target:{name:""},sprite:{file:"",height:0,width:0}}}function jn(i){const e=Oe(i,t=>ke(t)&&Ie.isMatch("json",t.mimeType)&&W.eq(W.toLower(t.name),"custom-map-icon.json"));return ke(e)?e:Wn(i)}function yt(i,e){const t=Qe(i);if(t==null)return;const n=Oe(t,e.sprite.file);return ke(n)?n:null}function qi(i){const e=wt(i);if(!de(e))return{parent:"",filename:i.name};const t=Qe(e);return t==null?{parent:ve(i.parent),filename:i.name}:{parent:Gn(ve(t),ve(i.parent)),filename:i.name}}function bt(i,e){return e!=null?Nt(i,e):t=>Nt(i,t)}function Nt(i,e){if(i.target.name!==e.target.name)return!1;const t=i.target.metadata,n=e.target.metadata;return t==null&&n==null?!0:t==null||n==null?!1:t.level===n.level}function Yi(i){const{target:e,sprite:t,options:n}=i;if(!e.name)return!1;if(e.metadata){const{level:r}=e.metadata;if(r<=0||r>=4)return!1}if(!t.file||t.width<=0||t.height<=0)return!1;if(n){const{iconScaleLargeMap:r,iconScaleSmallMap:o}=n;if(r!=null&&r<=0||o!=null&&o<=0)return!1}return!0}function Vi(i){return zi(i)}function zi(i){const e=Oe(i,n=>ke(n)&&n.name==="automatics-child-mod");if(e==null||Ci(e)>1)return!1;const t=Oe(e.parent||i,"Textures/custom-map-icon.json");return ke(t)}function Zi(i){return Rn.loadAsync(i).then(async e=>{let t=Le({name:Re()});const n=[];return e.forEach((r,o)=>{if(o.dir)De(t,Le(r));else{const{dirName:l,fileName:s,extension:a}=Ui(r),u=Le(l),c=W.isEmpty(a)?s:`${s}.${a}`,f=o.async("arraybuffer").then(p=>{De(t,Xe({parent:u,name:c,data:p,mimeType:Ie.get(a)}))});n.push(f)}}),await Promise.all(n),t.files.length===1&&de(t.files[0])&&(t=t.files[0],qe(t)),Vi(t)?t:null})}function Ki(i){const e=jn(i);if(e.data.byteLength===0)return[];const t=hi.parse(new TextDecoder().decode(e.data));return Array.isArray(t)?t:[]}function qn(i,e){const t=Qe(i);if(t==null)return!1;const n=qe(t,e.sprite.file),r=Oe(t,Bi(e.sprite.file));return de(r)&&W.isEmpty(r.files)&&qe(r),n}function Ji(i,e,t){return W.remove(e,bt(t)),e.every(n=>n.sprite.file!==t.sprite.file)&&qn(i,t),e}function Xi(i,e){jn(i).data=new TextEncoder().encode(JSON.stringify(e)).buffer}function Qi(i,e,t,n){const r=e.find(bt(t));if(r!=null){if(e=[...W.without(e,r),{...W.cloneDeep(t)}],e.every(o=>o.sprite.file!==r.sprite.file)){const o=yt(i,r);ve(o)!==ve(n)&&qn(i,r)}}else e=[...e,{...W.cloneDeep(t)}];return Xi(i,e),Gi(i,n),e}function St(i){let e,t,n;var r=i[1];function o(l,s){return{}}return r&&(e=He(r,o())),{c(){e&&L(e.$$.fragment),t=_e()},m(l,s){e&&H(e,l,s),k(l,t,s),n=!0},p(l,s){if(s&2&&r!==(r=l[1])){if(e){X();const a=e;E(a.$$.fragment,1,0,()=>{C(a,1)}),Q()}r?(e=He(r,o()),L(e.$$.fragment),y(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}},i(l){n||(e&&y(e.$$.fragment,l),n=!0)},o(l){e&&E(e.$$.fragment,l),n=!1},d(l){l&&O(t),e&&C(e,l)}}}function Lt(i){let e,t;return{c(){e=g("span"),t=V(i[0])},m(n,r){k(n,e,r),d(e,t)},p(n,r){r&1&&z(t,n[0])},d(n){n&&O(e)}}}function xi(i){let e,t,n,r,o,l=i[1]&&St(i),s=i[0]&&Lt(i),a=[i[2],{class:"button"}],u={};for(let c=0;c<a.length;c+=1)u=F(u,a[c]);return{c(){e=g("button"),l&&l.c(),t=N(),s&&s.c(),ft(e,u),ne(e,"svelte-1f0qfh0",!0)},m(c,f){k(c,e,f),l&&l.m(e,null),d(e,t),s&&s.m(e,null),e.autofocus&&e.focus(),n=!0,r||(o=Y(e,"click",i[3]),r=!0)},p(c,[f]){c[1]?l?(l.p(c,f),f&2&&y(l,1)):(l=St(c),l.c(),y(l,1),l.m(e,t)):l&&(X(),E(l,1,1,()=>{l=null}),Q()),c[0]?s?s.p(c,f):(s=Lt(c),s.c(),s.m(e,null)):s&&(s.d(1),s=null),ft(e,u=J(a,[f&4&&c[2],{class:"button"}])),ne(e,"svelte-1f0qfh0",!0)},i(c){n||(y(l),n=!0)},o(c){E(l),n=!1},d(c){c&&O(e),l&&l.d(),s&&s.d(),r=!1,o()}}}function eo(i,e,t){let{text:n=null}=e,{icon:r=null}=e,{options:o={}}=e;function l(s){Me.call(this,i,s)}return i.$$set=s=>{"text"in s&&t(0,n=s.text),"icon"in s&&t(1,r=s.icon),"options"in s&&t(2,o=s.options)},[n,r,o,l]}class Ye extends B{constructor(e){super(),U(this,e,eo,xi,G,{text:0,icon:1,options:2})}}function to(i){let e,t='<g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM9.879 8.464L12 10.586l2.121-2.122a1 1 0 1 1 1.415 1.415l-2.122 2.12l2.122 2.122a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 0 1-1.415-1.415L10.586 12L8.465 9.879a1 1 0 0 1 1.414-1.415Z"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function no(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Yn extends B{constructor(e){super(),U(this,e,no,to,G,{})}}function Ht(i){let e,t;return e=new Ze({props:{id:i[0],$$slots:{default:[io]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.id=n[0]),r&66&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function io(i){let e,t,n,r,o,l,s,a,u;r=new Yn({});const c=i[4].default,f=yn(c,i,i[6],null);return{c(){e=g("div"),t=g("div"),n=g("button"),L(r.$$.fragment),o=N(),l=g("div"),f&&f.c(),_(n,"class","close-button svelte-15lq09j"),_(l,"class","modal-content"),_(t,"class","dialog svelte-15lq09j"),_(e,"class","outside svelte-15lq09j")},m(p,h){k(p,e,h),d(e,t),d(t,n),H(r,n,null),d(t,o),d(t,l),f&&f.m(l,null),i[5](t),s=!0,a||(u=[Y(n,"click",i[2]),Y(e,"click",i[3])],a=!0)},p(p,h){f&&f.p&&(!s||h&64)&&bn(f,c,p,p[6],s?En(c,p[6],h,null):Tn(p[6]),null)},i(p){s||(y(r.$$.fragment,p),y(f,p),s=!0)},o(p){E(r.$$.fragment,p),E(f,p),s=!1},d(p){p&&O(e),C(r),f&&f.d(p),i[5](null),a=!1,we(u)}}}function oo(i){let e,t,n=i[0]&&Ht(i);return{c(){n&&n.c(),e=_e()},m(r,o){n&&n.m(r,o),k(r,e,o),t=!0},p(r,[o]){r[0]?n?(n.p(r,o),o&1&&y(n,1)):(n=Ht(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(X(),E(n,1,1,()=>{n=null}),Q())},i(r){t||(y(n),t=!0)},o(r){E(n),t=!1},d(r){r&&O(e),n&&n.d(r)}}}function ro(i,e,t){let{$$slots:n={},$$scope:r}=e,{id:o}=e,l;function s(){var c;(c=he(o))==null||c.close()}function a(c){c.target instanceof Node&&(l.contains(c.target)||s())}function u(c){ie[c?"unshift":"push"](()=>{l=c,t(1,l)})}return i.$$set=c=>{"id"in c&&t(0,o=c.id),"$$scope"in c&&t(6,r=c.$$scope)},[o,l,s,a,n,u,r]}class lo extends B{constructor(e){super(),U(this,e,ro,oo,G,{id:0})}}function Ct(i){let e,t;return e=new lo({props:{id:i[0],$$slots:{default:[so]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},p(n,r){const o={};r&1&&(o.id=n[0]),r&6&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function so(i){let e,t=new We().render(i[1])+"";return{c(){e=g("div"),_(e,"class","markdown")},m(n,r){k(n,e,r),e.innerHTML=t},p(n,r){r&2&&t!==(t=new We().render(n[1])+"")&&(e.innerHTML=t)},d(n){n&&O(e)}}}function ao(i){let e,t,n=i[1]&&Ct(i);return{c(){n&&n.c(),e=_e()},m(r,o){n&&n.m(r,o),k(r,e,o),t=!0},p(r,[o]){r[1]?n?(n.p(r,o),o&2&&y(n,1)):(n=Ct(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(X(),E(n,1,1,()=>{n=null}),Q())},i(r){t||(y(n),t=!0)},o(r){E(n),t=!1},d(r){r&&O(e),n&&n.d(r)}}}function co(i,e,t){let{id:n}=e,{markdown:r}=e;return i.$$set=o=>{"id"in o&&t(0,n=o.id),"markdown"in o&&t(1,r=o.markdown)},[n,r]}class xe extends B{constructor(e){super(),U(this,e,co,ao,G,{id:0,markdown:1})}}function uo(i){let e,t='<g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-9.5a3.625 3.625 0 0 1 1.348 6.99a.837.837 0 0 0-.305.201c-.044.05-.051.114-.05.18L13 14a1 1 0 0 1-1.993.117L11 14v-.25c0-1.153.93-1.845 1.604-2.116a1.626 1.626 0 1 0-2.229-1.509a1 1 0 1 1-2 0A3.625 3.625 0 0 1 12 6.5Z"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function fo(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class et extends B{constructor(e){super(),U(this,e,fo,uo,G,{})}}function Ft(i){let e,t,n,r,o=i[2].required&&Mt(i);return{c(){e=g("div"),t=g("span"),n=V(i[1]),r=N(),o&&o.c(),_(t,"class","label"),_(e,"class","label-row")},m(l,s){k(l,e,s),d(e,t),d(t,n),d(e,r),o&&o.m(e,null)},p(l,s){s&2&&z(n,l[1]),l[2].required?o?o.p(l,s):(o=Mt(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(l){l&&O(e),o&&o.d()}}}function Mt(i){let e,t=i[5]("forms.common.required-mark")+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","required svelte-xs51wb")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&32&&t!==(t=r[5]("forms.common.required-mark")+"")&&z(n,t)},d(r){r&&O(e)}}}function Pt(i){let e,t=i[2].placeholder+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","placeholder svelte-xs51wb")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&4&&t!==(t=r[2].placeholder+"")&&z(n,t)},d(r){r&&O(e)}}}function Dt(i){let e,t,n,r,o;return t=new Ke({}),{c(){e=g("button"),L(t.$$.fragment),_(e,"class","clear-button svelte-xs51wb")},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[10]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function $t(i){let e,t=i[5](i[4])+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","error svelte-xs51wb")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&48&&t!==(t=r[5](r[4])+"")&&z(n,t)},d(r){r&&O(e)}}}function Bt(i){let e,t,n,r,o;return t=new et({}),{c(){e=g("button"),L(t.$$.fragment),_(e,"class","help-button svelte-xs51wb")},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[14]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function ho(i){let e,t,n,r,o,l,s,a,u,c,f,p,h;e=new xe({props:{id:i[7],markdown:i[2].help}});let b=i[1]&&Ft(i),w=[i[6],{class:"input"},{type:"text"}],m={};for(let T=0;T<w.length;T+=1)m=F(m,w[T]);let v=i[2].placeholder&&!i[0]&&Pt(i),I=!i[2].required&&Dt(i),A=i[3]&&i[4]&&$t(i),M=!i[2].disabled&&i[2].help&&Bt(i);return{c(){L(e.$$.fragment),t=N(),n=g("div"),b&&b.c(),r=N(),o=g("div"),l=g("input"),s=N(),v&&v.c(),a=N(),I&&I.c(),u=N(),A&&A.c(),c=N(),M&&M.c(),ft(l,m),ne(l,"svelte-xs51wb",!0),_(o,"class","input-row svelte-xs51wb"),ne(o,"invalid",i[3]),_(n,"class","input-container svelte-xs51wb"),ne(n,"disabled",i[2].disabled)},m(T,D){H(e,T,D),k(T,t,D),k(T,n,D),b&&b.m(n,null),d(n,r),d(n,o),d(o,l),l.autofocus&&l.focus(),pe(l,i[0]),d(o,s),v&&v.m(o,null),d(o,a),I&&I.m(o,null),d(n,u),A&&A.m(n,null),d(n,c),M&&M.m(n,null),f=!0,p||(h=[Y(l,"input",i[13]),Y(l,"focusout",i[9]),Y(l,"input",i[8]),Y(l,"keydown",i[11]),Y(l,"keyup",i[12])],p=!0)},p(T,[D]){const Z={};D&4&&(Z.markdown=T[2].help),e.$set(Z),T[1]?b?b.p(T,D):(b=Ft(T),b.c(),b.m(n,r)):b&&(b.d(1),b=null),D&1&&l.value!==T[0]&&pe(l,T[0]),ne(l,"svelte-xs51wb",!0),T[2].placeholder&&!T[0]?v?v.p(T,D):(v=Pt(T),v.c(),v.m(o,a)):v&&(v.d(1),v=null),T[2].required?I&&(X(),E(I,1,1,()=>{I=null}),Q()):I?(I.p(T,D),D&4&&y(I,1)):(I=Dt(T),I.c(),y(I,1),I.m(o,null)),(!f||D&8)&&ne(o,"invalid",T[3]),T[3]&&T[4]?A?A.p(T,D):(A=$t(T),A.c(),A.m(n,c)):A&&(A.d(1),A=null),!T[2].disabled&&T[2].help?M?(M.p(T,D),D&4&&y(M,1)):(M=Bt(T),M.c(),y(M,1),M.m(n,null)):M&&(X(),E(M,1,1,()=>{M=null}),Q()),(!f||D&4)&&ne(n,"disabled",T[2].disabled)},i(T){f||(y(e.$$.fragment,T),y(I),y(M),f=!0)},o(T){E(e.$$.fragment,T),E(I),E(M),f=!1},d(T){T&&(O(t),O(n)),C(e,T),b&&b.d(),v&&v.d(),I&&I.d(),A&&A.d(),M&&M.d(),p=!1,we(h)}}}function mo(i,e,t){let n;ee(i,ce,T=>t(5,n=T));let{label:r=""}=e,{value:o=null}=e,{options:l={}}=e;const s=kn(l,["disabled","required"]),a=_t(l,"validation",()=>!0),u=Re(),c=Ve();let f=!1,p="";const h=T=>{t(4,p=T),t(3,f=T.length>0)};function b({target:T}){T instanceof HTMLInputElement&&(t(0,{value:o}=T,o),c("change",{value:o}),w())}function w(){let T=!o;if(T&&l.required){h("forms.common.error.required");return}if(!T&&!a(o)){h("forms.common.error.invalid-text-format");return}h("")}function m(){t(0,o=void 0),c("change",{value:o}),w()}function v(T){Me.call(this,i,T)}function I(T){Me.call(this,i,T)}function A(){o=this.value,t(0,o)}const M=()=>{var T;return(T=he(u))==null?void 0:T.open()};return i.$$set=T=>{"label"in T&&t(1,r=T.label),"value"in T&&t(0,o=T.value),"options"in T&&t(2,l=T.options)},[o,r,l,f,p,n,s,u,b,w,m,v,I,A,M]}class Vn extends B{constructor(e){super(),U(this,e,mo,ho,G,{label:1,value:0,options:2})}}function po(i){let e,t,n=i[2]("start-page.create-iconpack.caption")+"",r,o,l,s,a,u,c;function f(h){i[5](h)}let p={label:i[2]("start-page.create-iconpack.iconpack-name.label"),options:{required:!0,help:i[2]("start-page.create-iconpack.iconpack-name.help"),validation:Ut}};return i[0]!==void 0&&(p.value=i[0]),l=new Vn({props:p}),ie.push(()=>se(l,"value",f)),u=new Ye({props:{options:{disabled:i[1]},text:i[2]("start-page.create-iconpack.create-iconpack")}}),u.$on("click",i[3]),{c(){e=g("div"),t=g("h2"),r=V(n),o=N(),L(l.$$.fragment),a=N(),L(u.$$.fragment),_(t,"class","caption svelte-1up0z3p"),_(e,"class","create-iconpack svelte-1up0z3p")},m(h,b){k(h,e,b),d(e,t),d(t,r),d(e,o),H(l,e,null),d(e,a),H(u,e,null),c=!0},p(h,[b]){(!c||b&4)&&n!==(n=h[2]("start-page.create-iconpack.caption")+"")&&z(r,n);const w={};b&4&&(w.label=h[2]("start-page.create-iconpack.iconpack-name.label")),b&4&&(w.options={required:!0,help:h[2]("start-page.create-iconpack.iconpack-name.help"),validation:Ut}),!s&&b&1&&(s=!0,w.value=h[0],ae(()=>s=!1)),l.$set(w);const m={};b&2&&(m.options={disabled:h[1]}),b&4&&(m.text=h[2]("start-page.create-iconpack.create-iconpack")),u.$set(m)},i(h){c||(y(l.$$.fragment,h),y(u.$$.fragment,h),c=!0)},o(h){E(l.$$.fragment,h),E(u.$$.fragment,h),c=!1},d(h){h&&O(e),C(l),C(u)}}}function Ut(i){return i==null?!1:/^[ a-zA-Z0-9_.+-]+$/g.test(i.trim())}function go(i,e,t){let n;ee(i,ce,u=>t(2,n=u));let{files:r}=e,o="",l;function s(){t(4,r=ji(o.trim()))}function a(u){o=u,t(0,o)}return i.$$set=u=>{"files"in u&&t(4,r=u.files)},i.$$.update=()=>{i.$$.dirty&1&&t(1,l=o.trim().length===0)},[o,l,n,s,r,a]}class vo extends B{constructor(e){super(),U(this,e,go,po,G,{files:4})}}const ut=be(!1);function _o(i){let e,t='<path fill="currentColor" d="M1 1v6h2V3h4V1zm2 12H1v6h6v-2H3zm14 4h-4v2h6v-6h-2zm0-16h-4v2h4v4h2V1z"/>',n=[{viewBox:"0 0 20 20"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 20 20"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function wo(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class yo extends B{constructor(e){super(),U(this,e,wo,_o,G,{})}}function bo(i){let e,t='<path fill="currentColor" d="M7 7V1H5v4H1v2zM5 19h2v-6H1v2h4zm10-4h4v-2h-6v6h2zm0-8h4V5h-4V1h-2v6z"/>',n=[{viewBox:"0 0 20 20"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 20 20"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function To(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Eo extends B{constructor(e){super(),U(this,e,To,bo,G,{})}}function Io(i){let e,t;return e=new yo({}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ko(i){let e,t;return e=new Eo({}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Oo(i){let e,t,n,r,o,l;const s=[ko,Io],a=[];function u(c,f){return c[0]?0:1}return t=u(i),n=a[t]=s[t](i),{c(){e=g("button"),n.c()},m(c,f){k(c,e,f),a[t].m(e,null),r=!0,o||(l=Y(e,"click",i[1]),o=!0)},p(c,[f]){let p=t;t=u(c),t!==p&&(X(),E(a[p],1,1,()=>{a[p]=null}),Q(),n=a[t],n||(n=a[t]=s[t](c),n.c()),y(n,1),n.m(e,null))},i(c){r||(y(n),r=!0)},o(c){E(n),r=!1},d(c){c&&O(e),a[t].d(),o=!1,l()}}}function Ro(i,e,t){let n;ee(i,ut,o=>t(0,n=o));function r(){n?(ut.set(!1),document.exitFullscreen()):(ut.set(!0),document.documentElement.requestFullscreen())}return[n,r]}class Ao extends B{constructor(e){super(),U(this,e,Ro,Oo,G,{})}}function No(i){let e,t='<path fill="currentColor" d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07L19.07 3.5m-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13l.51 1.67m-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87l.4 1.31M19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35l-2.53-2.2m4.33-2.7l1.15-2.77l2.2 2.54l-3.35.23m1.15-4.96l-1.14-2.78l3.34.24l-2.2 2.54M9.63 18.93l2.77 1.15l-2.53 2.19l-.24-3.34Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function So(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Lo extends B{constructor(e){super(),U(this,e,So,No,G,{})}}function Ho(i){let e,t,n,r,o;return t=new Lo({}),{c(){e=g("button"),L(t.$$.fragment)},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[0]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function Co(i,e,t){let n;ee(i,Se,o=>t(1,n=o));function r(){n==="dark"?Se.set("light"):Se.set("dark")}return[r]}class Fo extends B{constructor(e){super(),U(this,e,Co,Ho,G,{})}}const zn=(i,e)=>{const t=({target:n})=>{e&&n instanceof Node&&(i.contains(n)||e(n))};return document.addEventListener("click",t),{destroy:()=>{document.removeEventListener("click",t)}}};function Mo(i){let e,t='<path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Po(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Do extends B{constructor(e){super(),U(this,e,Po,Mo,G,{})}}function Gt(i,e,t){const n=i.slice();return n[8]=e[t],n}function Wt(i){let e,t=i[1](`languages.${i[8]}`)+"",n,r,o;function l(){return i[5](i[8])}return{c(){e=g("button"),n=V(t),_(e,"class","language svelte-ltrsz4")},m(s,a){k(s,e,a),d(e,n),r||(o=Y(e,"click",l),r=!0)},p(s,a){i=s,a&2&&t!==(t=i[1](`languages.${i[8]}`)+"")&&z(n,t)},d(s){s&&O(e),r=!1,o()}}}function $o(i){let e,t,n,r,o,l,s,a,u=Te(i[2]),c=[];for(let f=0;f<u.length;f+=1)c[f]=Wt(Gt(i,u,f));return o=new Do({}),{c(){e=g("div"),t=g("div");for(let f=0;f<c.length;f+=1)c[f].c();n=N(),r=g("button"),L(o.$$.fragment),_(t,"class","languages svelte-ltrsz4"),ne(t,"active",i[0]),_(e,"class","language-select svelte-ltrsz4")},m(f,p){k(f,e,p),d(e,t);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(t,null);d(e,n),d(e,r),H(o,r,null),l=!0,s||(a=[Y(r,"click",i[6]),An(zn.call(null,e,i[7]))],s=!0)},p(f,[p]){if(p&22){u=Te(f[2]);let h;for(h=0;h<u.length;h+=1){const b=Gt(f,u,h);c[h]?c[h].p(b,p):(c[h]=Wt(b),c[h].c(),c[h].m(t,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=u.length}(!l||p&1)&&ne(t,"active",f[0])},i(f){l||(y(o.$$.fragment,f),l=!0)},o(f){E(o.$$.fragment,f),l=!1},d(f){f&&O(e),ze(c,f),C(o),s=!1,we(a)}}}function Bo(i,e,t){let n;ee(i,ce,f=>t(1,n=f));const r=["en","ja"];let o=!1;function l(f){t(0,o=f)}function s(f){Ln.set(f)}return[o,n,r,l,s,f=>s(f),()=>l(!o),()=>l(!1)]}class Uo extends B{constructor(e){super(),U(this,e,Bo,$o,G,{})}}function Go(i){let e,t='<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Wo(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class jo extends B{constructor(e){super(),U(this,e,Wo,Go,G,{})}}function qo(i){let e,t,n,r;return n=new jo({}),{c(){e=g("div"),t=g("a"),L(n.$$.fragment),_(t,"href","https://github.com/eideehi/valheim-iconpack-editor"),_(t,"target","_blank"),_(t,"rel","noopener noreferrer"),_(e,"class","github-link")},m(o,l){k(o,e,l),d(e,t),H(n,t,null),r=!0},p:S,i(o){r||(y(n.$$.fragment,o),r=!0)},o(o){E(n.$$.fragment,o),r=!1},d(o){o&&O(e),C(n)}}}class Yo extends B{constructor(e){super(),U(this,e,null,qo,G,{})}}function Vo(i){let e,t='<path fill="currentColor" d="M10.08 10.86c.05-.33.16-.62.3-.86c.3-.56.81-.85 1.5-.86c.45 0 .86.2 1.15.49c.28.31.47.74.47 1.17h1.8c-.02-.47-.11-.9-.3-1.3c-.15-.38-.38-.72-.68-1c-1.45-1.34-4.14-1.15-5.37.37c-1.29 1.67-1.32 4.59-.01 6.26c1.21 1.49 3.86 1.7 5.3.37c.31-.25.56-.56.76-.92c.16-.36.27-.74.28-1.15H13.5c0 .21-.07.4-.16.57c-.09.19-.21.34-.34.47c-.33.26-.72.4-1.14.4c-.36-.01-.66-.08-.89-.23a1.41 1.41 0 0 1-.59-.64c-.5-.9-.42-2.15-.3-3.14M12 2C6.5 2 2 6.5 2 12c.53 13.27 19.5 13.26 20 0c0-5.5-4.5-10-10-10m0 18c-4.41 0-8-3.59-8-8c.44-10.61 15.56-10.61 16 0c0 4.41-3.59 8-8 8Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function zo(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Zo extends B{constructor(e){super(),U(this,e,zo,Vo,G,{})}}const Ne={"decimal.js-light@2.5.1":{publisher:"Michael Mclaughlin",licenseText:`The MIT Expat Licence.\r
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
SOFTWARE.`,name:"the-new-css-reset",version:"1.8.4"}};function jt(i,e,t){const n=i.slice();return n[7]=e[t],n}function qt(i){let e,t,n,r,o=i[1]("licenses.library.name")+"",l,s,a,u,c,f,p=i[1]("licenses.library.version")+"",h,b,w,m,v,I,A=i[1]("licenses.library.publisher")+"",M,T,D,Z,$,R,P=i[1]("licenses.library.license")+"",K,oe,le,me;return{c(){e=g("li"),t=g("table"),n=g("tr"),r=g("th"),l=V(o),s=N(),a=g("td"),a.textContent=`${W.get(Ne[i[7]],["name"],"")}`,u=N(),c=g("tr"),f=g("th"),h=V(p),b=N(),w=g("td"),w.textContent=`${W.get(Ne[i[7]],["version"],"")}`,m=N(),v=g("tr"),I=g("th"),M=V(A),T=N(),D=g("td"),D.textContent=`${W.get(Ne[i[7]],["publisher"],"")}`,Z=N(),$=g("tr"),R=g("th"),K=V(P),oe=N(),le=g("td"),le.textContent=`${W.get(Ne[i[7]],["licenseText"],"")}`,me=N(),_(r,"class","svelte-1fy296p"),_(f,"class","svelte-1fy296p"),_(I,"class","svelte-1fy296p"),_(R,"class","svelte-1fy296p"),_(t,"class","license svelte-1fy296p"),_(e,"class","license-item svelte-1fy296p")},m(re,ge){k(re,e,ge),d(e,t),d(t,n),d(n,r),d(r,l),d(n,s),d(n,a),d(t,u),d(t,c),d(c,f),d(f,h),d(c,b),d(c,w),d(t,m),d(t,v),d(v,I),d(I,M),d(v,T),d(v,D),d(t,Z),d(t,$),d($,R),d(R,K),d($,oe),d($,le),d(e,me)},p(re,ge){ge&2&&o!==(o=re[1]("licenses.library.name")+"")&&z(l,o),ge&2&&p!==(p=re[1]("licenses.library.version")+"")&&z(h,p),ge&2&&A!==(A=re[1]("licenses.library.publisher")+"")&&z(M,A),ge&2&&P!==(P=re[1]("licenses.library.license")+"")&&z(K,P)},d(re){re&&O(e)}}}function Ko(i){let e,t,n,r,o,l,s,a=i[1]("licenses.caption")+"",u,c,f,p,h;n=new Yn({});let b=Te(W.keys(Ne)),w=[];for(let m=0;m<b.length;m+=1)w[m]=qt(jt(i,b,m));return{c(){e=g("div"),t=g("button"),L(n.$$.fragment),r=N(),o=g("ul"),l=g("li"),s=g("span"),u=V(a),c=N();for(let m=0;m<w.length;m+=1)w[m].c();_(t,"class","close-button svelte-1fy296p"),_(l,"class","caption svelte-1fy296p"),_(o,"class","license-list svelte-1fy296p"),_(e,"class","modal svelte-1fy296p")},m(m,v){k(m,e,v),d(e,t),H(n,t,null),d(e,r),d(e,o),d(o,l),d(l,s),d(s,u),d(o,c);for(let I=0;I<w.length;I+=1)w[I]&&w[I].m(o,null);f=!0,p||(h=[Y(t,"click",i[4]),An(zn.call(null,e,i[3]))],p=!0)},p(m,v){if((!f||v&2)&&a!==(a=m[1]("licenses.caption")+"")&&z(u,a),v&2){b=Te(W.keys(Ne));let I;for(I=0;I<b.length;I+=1){const A=jt(m,b,I);w[I]?w[I].p(A,v):(w[I]=qt(A),w[I].c(),w[I].m(o,null))}for(;I<w.length;I+=1)w[I].d(1);w.length=b.length}},i(m){f||(y(n.$$.fragment,m),f=!0)},o(m){E(n.$$.fragment,m),f=!1},d(m){m&&O(e),C(n),ze(w,m),p=!1,we(h)}}}function Jo(i){let e,t,n,r,o,l,s,a;return e=new Ze({props:{id:i[2],$$slots:{default:[Ko]},$$scope:{ctx:i}}}),o=new Zo({}),{c(){L(e.$$.fragment),t=N(),n=g("div"),r=g("button"),L(o.$$.fragment),_(n,"class","licenses svelte-1fy296p")},m(u,c){H(e,u,c),k(u,t,c),k(u,n,c),d(n,r),H(o,r,null),i[6](n),l=!0,s||(a=Y(r,"click",i[5]),s=!0)},p(u,[c]){const f={};c&1026&&(f.$$scope={dirty:c,ctx:u}),e.$set(f)},i(u){l||(y(e.$$.fragment,u),y(o.$$.fragment,u),l=!0)},o(u){E(e.$$.fragment,u),E(o.$$.fragment,u),l=!1},d(u){u&&(O(t),O(n)),C(e,u),C(o),i[6](null),s=!1,a()}}}function Xo(i,e,t){let n;ee(i,ce,c=>t(1,n=c));let r=Re(),o;function l(c){var f;o!=null&&(o.contains(c)||(f=he(r))==null||f.close())}const s=()=>{var c;return(c=he(r))==null?void 0:c.close()},a=()=>{var c;return(c=he(r))==null?void 0:c.open()};function u(c){ie[c?"unshift":"push"](()=>{o=c,t(0,o)})}return[o,n,r,l,s,a,u]}class Qo extends B{constructor(e){super(),U(this,e,Xo,Jo,G,{})}}function xo(i){let e,t,n,r,o,l,s,a,u,c,f;return t=new Ao({}),r=new Uo({}),l=new Fo({}),a=new Yo({}),c=new Qo({}),{c(){e=g("div"),L(t.$$.fragment),n=N(),L(r.$$.fragment),o=N(),L(l.$$.fragment),s=N(),L(a.$$.fragment),u=N(),L(c.$$.fragment),_(e,"class","tools svelte-v8m3mi")},m(p,h){k(p,e,h),H(t,e,null),d(e,n),H(r,e,null),d(e,o),H(l,e,null),d(e,s),H(a,e,null),d(e,u),H(c,e,null),f=!0},p:S,i(p){f||(y(t.$$.fragment,p),y(r.$$.fragment,p),y(l.$$.fragment,p),y(a.$$.fragment,p),y(c.$$.fragment,p),f=!0)},o(p){E(t.$$.fragment,p),E(r.$$.fragment,p),E(l.$$.fragment,p),E(a.$$.fragment,p),E(c.$$.fragment,p),f=!1},d(p){p&&O(e),C(t),C(r),C(l),C(a),C(c)}}}let Zn=class extends B{constructor(e){super(),U(this,e,null,xo,G,{})}};function er(i){let e,t=new We().render(i[0]("start-page.overview"))+"";return{c(){e=g("div"),_(e,"class","overview markdown")},m(n,r){k(n,e,r),e.innerHTML=t},p(n,[r]){r&1&&t!==(t=new We().render(n[0]("start-page.overview"))+"")&&(e.innerHTML=t)},i:S,o:S,d(n){n&&O(e)}}}function tr(i,e,t){let n;return ee(i,ce,r=>t(0,n=r)),[n]}class nr extends B{constructor(e){super(),U(this,e,tr,er,G,{})}}function ir(i){let e,t,n,r=i[2]("start-page.load-iconpack.drop-to-load-iconpack")+"",o,l,s;return{c(){e=g("div"),t=g("div"),n=g("span"),o=V(r),_(n,"class","caption svelte-ii5lhw"),_(t,"class","message-wrapper svelte-ii5lhw"),_(e,"class","drop-zone svelte-ii5lhw")},m(a,u){k(a,e,u),d(e,t),d(t,n),d(n,o),l||(s=[Y(e,"dragleave",i[7]),Y(e,"dragover",Pe(i[9])),Y(e,"drop",Pe(i[3]))],l=!0)},p(a,u){u&4&&r!==(r=a[2]("start-page.load-iconpack.drop-to-load-iconpack")+"")&&z(o,r)},d(a){a&&O(e),l=!1,we(s)}}}function Yt(i){let e,t=i[2](i[1])+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","error svelte-ii5lhw")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&6&&t!==(t=r[2](r[1])+"")&&z(n,t)},d(r){r&&O(e)}}}function or(i){let e,t,n,r,o,l=i[2]("start-page.load-iconpack.description")+"",s,a,u,c,f,p=i[2]("start-page.load-iconpack.load-iconpack")+"",h,b,w,m,v,I,A;t=new Ze({props:{id:i[5],$$slots:{default:[ir]},$$scope:{ctx:i}}});let M=i[0]&&i[1]&&Yt(i);return{c(){e=N(),L(t.$$.fragment),n=N(),r=g("div"),o=g("h2"),s=V(l),a=N(),u=g("div"),c=g("label"),f=g("span"),h=V(p),b=N(),w=g("input"),m=N(),M&&M.c(),_(o,"class","caption svelte-ii5lhw"),_(w,"class","hidden"),_(w,"type","file"),_(c,"class","load-button svelte-ii5lhw"),_(c,"role","button"),_(c,"tabindex","0"),_(u,"class","load-button-wrapper svelte-ii5lhw"),_(r,"class","load-iconpack svelte-ii5lhw")},m(T,D){k(T,e,D),H(t,T,D),k(T,n,D),k(T,r,D),d(r,o),d(o,s),d(r,a),d(r,u),d(u,c),d(c,f),d(f,h),d(c,b),d(c,w),d(u,m),M&&M.m(u,null),v=!0,I||(A=[Y(document.body,"dragenter",Pe(i[6])),Y(w,"change",i[4])],I=!0)},p(T,[D]){const Z={};D&8196&&(Z.$$scope={dirty:D,ctx:T}),t.$set(Z),(!v||D&4)&&l!==(l=T[2]("start-page.load-iconpack.description")+"")&&z(s,l),(!v||D&4)&&p!==(p=T[2]("start-page.load-iconpack.load-iconpack")+"")&&z(h,p),T[0]&&T[1]?M?M.p(T,D):(M=Yt(T),M.c(),M.m(u,null)):M&&(M.d(1),M=null)},i(T){v||(y(t.$$.fragment,T),v=!0)},o(T){E(t.$$.fragment,T),v=!1},d(T){T&&(O(e),O(n),O(r)),C(t,T),M&&M.d(),I=!1,we(A)}}}function rr(i,e,t){let n;ee(i,ce,m=>t(2,n=m));let{files:r}=e,o=!1,l="";const s=m=>{t(1,l=m),t(0,o=m.length>0)};function a(m){return m==null?(s(""),!1):Ie.isMatch("zip",m.type)?(s(""),!0):(s("forms.common.error.unsupported-file-format"),!1)}function u(m){var v;return(v=he(p))==null||v.close(),!a(m)||m==null?Promise.resolve():Zi(m.arrayBuffer()).then(I=>{if(I==null){s("start-page.load-iconpack.failed-to-load-iconpack");return}t(8,r=I)})}async function c({dataTransfer:m}){if(m)if(m.items){for(const v of m.items)if(v.kind==="file"){await u(v.getAsFile());break}}else m.files&&await u(m.files[0])}async function f(m){var v;m.target instanceof HTMLInputElement&&await u((v=m.target.files)==null?void 0:v.item(0))}const p=Re();function h(){var m;(m=he(p))==null||m.open()}function b(m){var v;(m.x<=0||m.y<=0)&&((v=he(p))==null||v.close())}function w(m){Me.call(this,i,m)}return i.$$set=m=>{"files"in m&&t(8,r=m.files)},[o,l,n,c,f,p,h,b,r,w]}class lr extends B{constructor(e){super(),U(this,e,rr,or,G,{files:8})}}function sr(i){let e,t,n,r,o,l,s,a,u,c,f,p;n=new nr({});function h(v){i[1](v)}let b={};i[0]!==void 0&&(b.files=i[0]),o=new vo({props:b}),ie.push(()=>se(o,"files",h));function w(v){i[2](v)}let m={};return i[0]!==void 0&&(m.files=i[0]),a=new lr({props:m}),ie.push(()=>se(a,"files",w)),f=new Zn({}),{c(){e=g("div"),t=g("div"),L(n.$$.fragment),r=N(),L(o.$$.fragment),s=N(),L(a.$$.fragment),c=N(),L(f.$$.fragment),_(t,"class","content svelte-1exa1ln"),_(e,"class","start-page svelte-1exa1ln")},m(v,I){k(v,e,I),d(e,t),H(n,t,null),d(t,r),H(o,t,null),d(t,s),H(a,t,null),d(e,c),H(f,e,null),p=!0},p(v,[I]){const A={};!l&&I&1&&(l=!0,A.files=v[0],ae(()=>l=!1)),o.$set(A);const M={};!u&&I&1&&(u=!0,M.files=v[0],ae(()=>u=!1)),a.$set(M)},i(v){p||(y(n.$$.fragment,v),y(o.$$.fragment,v),y(a.$$.fragment,v),y(f.$$.fragment,v),p=!0)},o(v){E(n.$$.fragment,v),E(o.$$.fragment,v),E(a.$$.fragment,v),E(f.$$.fragment,v),p=!1},d(v){v&&O(e),C(n),C(o),C(a),C(f)}}}function ar(i,e,t){let{files:n}=e;function r(l){n=l,t(0,n)}function o(l){n=l,t(0,n)}return i.$$set=l=>{"files"in l&&t(0,n=l.files)},[n,r,o]}class cr extends B{constructor(e){super(),U(this,e,ar,sr,G,{files:0})}}const Tt=Symbol();function ur(i){let e,t='<path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function fr(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class dr extends B{constructor(e){super(),U(this,e,fr,ur,G,{})}}function hr(i){let e,t='<path fill="currentColor" d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18l5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5l1.597 1.363L13 13l4 6H7l2-3z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function mr(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class pr extends B{constructor(e){super(),U(this,e,mr,hr,G,{})}}function gr(i){let e,t='<path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function vr(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}let _r=class extends B{constructor(e){super(),U(this,e,vr,gr,G,{})}};function wr(i){let e,t;return e=new dr({}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function yr(i){let e,t;return e=new _r({}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function br(i){let e,t;return e=new pr({}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Tr(i){let e,t,n,r,o,l,s,a,u=i[0].name+"",c,f;const p=[br,yr,wr],h=[];function b(w,m){return m&1&&(t=null),m&1&&(n=null),m&1&&(r=null),t==null&&(t=!!Ie.isMatch("png",w[0].mimeType)),t?0:(n==null&&(n=!!Ie.isMatch("json",w[0].mimeType)),n?1:(r==null&&(r=!!Ie.isMatch("text",w[0].mimeType)),r?2:-1))}return~(o=b(i,-1))&&(l=h[o]=p[o](i)),{c(){e=g("div"),l&&l.c(),s=N(),a=g("span"),c=V(u),_(a,"class","name"),_(e,"class","file svelte-106t3sa")},m(w,m){k(w,e,m),~o&&h[o].m(e,null),d(e,s),d(e,a),d(a,c),f=!0},p(w,[m]){let v=o;o=b(w,m),o!==v&&(l&&(X(),E(h[v],1,1,()=>{h[v]=null}),Q()),~o?(l=h[o],l||(l=h[o]=p[o](w),l.c()),y(l,1),l.m(e,s)):l=null),(!f||m&1)&&u!==(u=w[0].name+"")&&z(c,u)},i(w){f||(y(l),f=!0)},o(w){E(l),f=!1},d(w){w&&O(e),~o&&h[o].d()}}}function Er(i,e,t){let{file:n}=e;return i.$$set=r=>{"file"in r&&t(0,n=r.file)},[n]}class Ir extends B{constructor(e){super(),U(this,e,Er,Tr,G,{file:0})}}function kr(i){let e,t='<path fill="currentColor" d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Or(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Rr extends B{constructor(e){super(),U(this,e,Or,kr,G,{})}}function Ar(i){let e,t='<path fill="currentColor" d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Nr(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Sr extends B{constructor(e){super(),U(this,e,Nr,Ar,G,{})}}function Vt(i,e,t){const n=i.slice();return n[4]=e[t],n}function Lr(i){let e,t;return e=new Sr({}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Hr(i){let e,t;return e=new Rr({props:{class:"icon"}}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function zt(i){let e,t,n=Te(i[2](i[1])),r=[];for(let l=0;l<n.length;l+=1)r[l]=Zt(Vt(i,n,l));const o=l=>E(r[l],1,1,()=>{r[l]=null});return{c(){e=g("ul");for(let l=0;l<r.length;l+=1)r[l].c();_(e,"class","children svelte-eoqe6z")},m(l,s){k(l,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);t=!0},p(l,s){if(s&6){n=Te(l[2](l[1]));let a;for(a=0;a<n.length;a+=1){const u=Vt(l,n,a);r[a]?(r[a].p(u,s),y(r[a],1)):(r[a]=Zt(u),r[a].c(),y(r[a],1),r[a].m(e,null))}for(X(),a=n.length;a<r.length;a+=1)o(a);Q()}},i(l){if(!t){for(let s=0;s<n.length;s+=1)y(r[s]);t=!0}},o(l){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)E(r[s]);t=!1},d(l){l&&O(e),ze(r,l)}}}function Cr(i){let e,t;return e=new Ir({props:{file:i[4]}}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},p(n,r){const o={};r&2&&(o.file=n[4]),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Fr(i){let e,t;return e=new Kn({props:{directory:i[4]}}),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},p(n,r){const o={};r&2&&(o.directory=n[4]),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Zt(i){let e,t,n,r,o;const l=[Fr,Cr],s=[];function a(u,c){return u[4].type==="directory"?0:1}return t=a(i),n=s[t]=l[t](i),{c(){e=g("li"),n.c(),r=N()},m(u,c){k(u,e,c),s[t].m(e,null),d(e,r),o=!0},p(u,c){let f=t;t=a(u),t===f?s[t].p(u,c):(X(),E(s[f],1,1,()=>{s[f]=null}),Q(),n=s[t],n?n.p(u,c):(n=s[t]=l[t](u),n.c()),y(n,1),n.m(e,r))},i(u){o||(y(n),o=!0)},o(u){E(n),o=!1},d(u){u&&O(e),s[t].d()}}}function Mr(i){let e,t,n,r,o,l=i[1].name+"",s,a,u,c,f,p;const h=[Hr,Lr],b=[];function w(v,I){return v[0]?0:1}t=w(i),n=b[t]=h[t](i);let m=i[0]&&zt(i);return{c(){e=g("button"),n.c(),r=N(),o=g("span"),s=V(l),a=N(),m&&m.c(),u=_e(),_(o,"class","name"),_(e,"class","directory svelte-eoqe6z")},m(v,I){k(v,e,I),b[t].m(e,null),d(e,r),d(e,o),d(o,s),k(v,a,I),m&&m.m(v,I),k(v,u,I),c=!0,f||(p=Y(e,"click",i[3]),f=!0)},p(v,[I]){let A=t;t=w(v),t!==A&&(X(),E(b[A],1,1,()=>{b[A]=null}),Q(),n=b[t],n||(n=b[t]=h[t](v),n.c()),y(n,1),n.m(e,r)),(!c||I&2)&&l!==(l=v[1].name+"")&&z(s,l),v[0]?m?(m.p(v,I),I&1&&y(m,1)):(m=zt(v),m.c(),y(m,1),m.m(u.parentNode,u)):m&&(X(),E(m,1,1,()=>{m=null}),Q())},i(v){c||(y(n),y(m),c=!0)},o(v){E(n),E(m),c=!1},d(v){v&&(O(e),O(a),O(u)),b[t].d(),m&&m.d(v),f=!1,p()}}}function Pr(i,e,t){let{directory:n}=e,{expanded:r=!0}=e;function o(s){return W.sortBy(s.files,[a=>de(a)?0:1,"name"])}const l=()=>t(0,r=!r);return i.$$set=s=>{"directory"in s&&t(1,n=s.directory),"expanded"in s&&t(0,r=s.expanded)},[r,n,o,l]}class Kn extends B{constructor(e){super(),U(this,e,Pr,Mr,G,{directory:1,expanded:0})}}function Dr(i){let e,t='<path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function $r(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Br extends B{constructor(e){super(),U(this,e,$r,Dr,G,{})}}function Ur(i){let e,t,n,r,o,l,s,a,u;return n=new Br({}),{c(){e=g("div"),t=g("button"),L(n.$$.fragment),r=N(),o=g("a"),l=V("dummy"),_(o,"class","download svelte-876d1q"),_(o,"download",i[1]+".zip"),_(o,"href","#download"),_(o,"tabindex","-1"),_(e,"class","export-iconpack svelte-876d1q")},m(c,f){k(c,e,f),d(e,t),H(n,t,null),d(e,r),d(e,o),d(o,l),i[4](o),s=!0,a||(u=Y(t,"click",i[2]),a=!0)},p:S,i(c){s||(y(n.$$.fragment,c),s=!0)},o(c){E(n.$$.fragment,c),s=!1},d(c){c&&O(e),C(n),i[4](null),a=!1,u()}}}function Gr(i,e,t){let{files:n}=e,r=n.name,o;async function l(){o&&await Di(n).then(a=>{t(0,o.href=URL.createObjectURL(a),o),o.click()})}function s(a){ie[a?"unshift":"push"](()=>{o=a,t(0,o)})}return i.$$set=a=>{"files"in a&&t(3,n=a.files)},[o,r,l,n,s]}class Wr extends B{constructor(e){super(),U(this,e,Gr,Ur,G,{files:3})}}function jr(i){let e,t,n;return t=new Wr({props:{files:i[0]}}),{c(){e=g("div"),L(t.$$.fragment),_(e,"class","tools svelte-1emfrt3")},m(r,o){k(r,e,o),H(t,e,null),n=!0},p(r,[o]){const l={};o&1&&(l.files=r[0]),t.$set(l)},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){r&&O(e),C(t)}}}function qr(i,e,t){let{files:n}=e;return i.$$set=r=>{"files"in r&&t(0,n=r.files)},[n]}class Yr extends B{constructor(e){super(),U(this,e,qr,jr,G,{files:0})}}function Vr(i){let e,t,n,r,o,l;return t=new Yr({props:{files:i[1]}}),o=new Kn({props:{directory:i[1]}}),{c(){e=g("div"),L(t.$$.fragment),n=N(),r=g("div"),L(o.$$.fragment),_(r,"class","files svelte-1ja9q8f"),_(e,"class","file-tree svelte-1ja9q8f")},m(s,a){k(s,e,a),H(t,e,null),d(e,n),d(e,r),H(o,r,null),i[2](e),l=!0},p(s,[a]){const u={};a&2&&(u.files=s[1]),t.$set(u);const c={};a&2&&(c.directory=s[1]),o.$set(c)},i(s){l||(y(t.$$.fragment,s),y(o.$$.fragment,s),l=!0)},o(s){E(t.$$.fragment,s),E(o.$$.fragment,s),l=!1},d(s){s&&O(e),C(t),C(o),i[2](null)}}}function zr(i,e,t){let{ref:n}=e,{files:r}=e;function o(l){ie[l?"unshift":"push"](()=>{n=l,t(0,n)})}return i.$$set=l=>{"ref"in l&&t(0,n=l.ref),"files"in l&&t(1,r=l.files)},[n,r,o]}class Zr extends B{constructor(e){super(),U(this,e,zr,Vr,G,{ref:0,files:1})}}function Kr(i){let e,t='<path fill="currentColor" d="M16.939 7.939L12 12.879l-4.939-4.94l-2.122 2.122L12 17.121l7.061-7.06z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Jr(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Xr extends B{constructor(e){super(),U(this,e,Jr,Kr,G,{})}}function Qr(i){let e,t='<path fill="currentColor" d="m12 6.879l-7.061 7.06l2.122 2.122L12 11.121l4.939 4.94l2.122-2.122z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function xr(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class el extends B{constructor(e){super(),U(this,e,xr,Qr,G,{})}}function Kt(i){let e,t,n,r,o=i[1].required&&Jt(i);return{c(){e=g("div"),t=g("span"),n=V(i[0]),r=N(),o&&o.c(),_(t,"class","label"),_(e,"class","label-row svelte-1yqilw")},m(l,s){k(l,e,s),d(e,t),d(t,n),d(e,r),o&&o.m(e,null)},p(l,s){s&1&&z(n,l[0]),l[1].required?o?o.p(l,s):(o=Jt(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(l){l&&O(e),o&&o.d()}}}function Jt(i){let e,t=i[3]("forms.common.required-mark")+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","required svelte-1yqilw")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&8&&t!==(t=r[3]("forms.common.required-mark")+"")&&z(n,t)},d(r){r&&O(e)}}}function Xt(i){let e,t=i[1].placeholder+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","placeholder svelte-1yqilw")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&2&&t!==(t=r[1].placeholder+"")&&z(n,t)},d(r){r&&O(e)}}}function Qt(i){let e,t,n,r,o;return t=new Ke({}),{c(){e=g("button"),L(t.$$.fragment),_(e,"class","clear-button svelte-1yqilw")},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[6]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function xt(i){let e,t,n,r,o;return t=new et({}),{c(){e=g("button"),L(t.$$.fragment),_(e,"class","help-button svelte-1yqilw")},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[12]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function tl(i){let e,t,n,r,o,l,s,a,u,c,f,p,h,b,w,m,v,I=!i[1].disabled&&!W.isEmpty(i[1].help),A,M,T;e=new xe({props:{id:i[4],markdown:i[1].help}});let D=i[0]&&Kt(i),Z=i[1].placeholder&&!i[2]&&Xt(i),$=!i[1].required&&Qt(i);h=new el({}),m=new Xr({});let R=I&&xt(i);return{c(){L(e.$$.fragment),t=N(),n=g("div"),D&&D.c(),r=N(),o=g("div"),l=g("div"),s=g("input"),a=N(),Z&&Z.c(),u=N(),$&&$.c(),c=N(),f=g("div"),p=g("button"),L(h.$$.fragment),b=N(),w=g("button"),L(m.$$.fragment),v=N(),R&&R.c(),_(s,"class","input svelte-1yqilw"),_(s,"inputmode","decimal"),_(s,"type","text"),_(l,"class","input-container svelte-1yqilw"),_(p,"class","svelte-1yqilw"),_(w,"class","svelte-1yqilw"),_(f,"class","spinner-container svelte-1yqilw"),_(o,"class","input-row svelte-1yqilw"),_(n,"class","number-input svelte-1yqilw")},m(P,K){H(e,P,K),k(P,t,K),k(P,n,K),D&&D.m(n,null),d(n,r),d(n,o),d(o,l),d(l,s),pe(s,i[2]),d(l,a),Z&&Z.m(l,null),d(l,u),$&&$.m(l,null),d(o,c),d(o,f),d(f,p),H(h,p,null),d(f,b),d(f,w),H(m,w,null),d(n,v),R&&R.m(n,null),A=!0,M||(T=[Y(s,"input",i[9]),Y(s,"input",i[5]),Y(p,"click",i[10]),Y(w,"click",i[11])],M=!0)},p(P,[K]){const oe={};K&2&&(oe.markdown=P[1].help),e.$set(oe),P[0]?D?D.p(P,K):(D=Kt(P),D.c(),D.m(n,r)):D&&(D.d(1),D=null),K&4&&s.value!==P[2]&&pe(s,P[2]),P[1].placeholder&&!P[2]?Z?Z.p(P,K):(Z=Xt(P),Z.c(),Z.m(l,u)):Z&&(Z.d(1),Z=null),P[1].required?$&&(X(),E($,1,1,()=>{$=null}),Q()):$?($.p(P,K),K&2&&y($,1)):($=Qt(P),$.c(),y($,1),$.m(l,null)),K&2&&(I=!P[1].disabled&&!W.isEmpty(P[1].help)),I?R?(R.p(P,K),K&2&&y(R,1)):(R=xt(P),R.c(),y(R,1),R.m(n,null)):R&&(X(),E(R,1,1,()=>{R=null}),Q())},i(P){A||(y(e.$$.fragment,P),y($),y(h.$$.fragment,P),y(m.$$.fragment,P),y(R),A=!0)},o(P){E(e.$$.fragment,P),E($),E(h.$$.fragment,P),E(m.$$.fragment,P),E(R),A=!1},d(P){P&&(O(t),O(n)),C(e,P),D&&D.d(),Z&&Z.d(),$&&$.d(),C(h),C(m),R&&R.d(),M=!1,we(T)}}}function nl(i,e,t){let n;ee(i,ce,T=>t(3,n=T));let{label:r=null}=e,{value:o=null}=e,{options:l={}}=e;const s=Re(),a=Ve();let u,c,f,p=1;const h=T=>T.gt(f)?new Ce(f):T.lt(c)?new Ce(c):T;function b(T){let D=T.target;if(D instanceof HTMLInputElement){if(D.value==="-")return;/^-?\d+(\.(\d+)?)?$/g.test(D.value)?(t(8,o=h(new Ce(D.value)).toNumber()),a("change",{value:o})):(D.value=D.value.slice(0,-1),t(2,u=D.value),W.isEmpty(u)&&(t(8,o=null),a("change",{value:o})))}}function w(){t(8,o=null),a("change",{value:o})}function m(T){o==null?t(8,o=p):T?t(8,o=h(new Ce(o).plus(p)).toNumber()):t(8,o=h(new Ce(o).minus(p)).toNumber()),a("change",{value:o})}function v(){u=this.value,t(2,u),t(8,o)}const I=()=>m(!0),A=()=>m(!1),M=()=>{var T;return(T=he(s))==null?void 0:T.open()};return i.$$set=T=>{"label"in T&&t(0,r=T.label),"value"in T&&t(8,o=T.value),"options"in T&&t(1,l=T.options)},i.$$.update=()=>{i.$$.dirty&256&&t(2,u=o==null?"":o.toString()),i.$$.dirty&2&&(c=l.min!=null?l.min:0),i.$$.dirty&2&&(f=l.max!=null?l.max:Number.MAX_SAFE_INTEGER),i.$$.dirty&2&&(p=l.step!=null?l.step:1)},[r,l,u,n,s,b,w,m,o,v,I,A,M]}class vt extends B{constructor(e){super(),U(this,e,nl,tl,G,{label:0,value:8,options:1})}}function il(i){let e,t,n,r,o,l;return t=new Vn({props:{label:i[2]("iconpack-editor.target.label"),options:{required:!0,help:i[2]("iconpack-editor.target.help"),placeholder:"$enemy_boar"},value:i[0]}}),t.$on("change",i[3]),o=new vt({props:{label:i[2]("iconpack-editor.level.label"),options:{min:1,max:3,help:i[2]("iconpack-editor.level.help"),placeholder:i[2]("iconpack-editor.level.placeholder")},value:i[1]}}),o.$on("change",i[4]),{c(){e=g("div"),L(t.$$.fragment),n=N(),r=g("div"),L(o.$$.fragment),_(r,"class","metadata"),_(e,"class","target-editor svelte-eejb83")},m(s,a){k(s,e,a),H(t,e,null),d(e,n),d(e,r),H(o,r,null),l=!0},p(s,[a]){const u={};a&4&&(u.label=s[2]("iconpack-editor.target.label")),a&4&&(u.options={required:!0,help:s[2]("iconpack-editor.target.help"),placeholder:"$enemy_boar"}),a&1&&(u.value=s[0]),t.$set(u);const c={};a&4&&(c.label=s[2]("iconpack-editor.level.label")),a&4&&(c.options={min:1,max:3,help:s[2]("iconpack-editor.level.help"),placeholder:s[2]("iconpack-editor.level.placeholder")}),a&2&&(c.value=s[1]),o.$set(c)},i(s){l||(y(t.$$.fragment,s),y(o.$$.fragment,s),l=!0)},o(s){E(t.$$.fragment,s),E(o.$$.fragment,s),l=!1},d(s){s&&O(e),C(t),C(o)}}}function ol(i,e,t){let n;ee(i,ce,u=>t(2,n=u));let{entry:r}=e,o="",l=null;function s({detail:u}){t(5,r.target.name=u.value,r)}function a({detail:u}){u.value==null?(W.unset(r.target,["metadata","level"]),W.unsetIfEmpty(r.target,"metadata")):W.set(r.target,["metadata","level"],u.value),t(5,r)}return i.$$set=u=>{"entry"in u&&t(5,r=u.entry)},i.$$.update=()=>{i.$$.dirty&32&&(t(0,o=r.target.name),t(1,l=W.get(r.target,["metadata","level"],null)))},[o,l,n,s,a,r]}class rl extends B{constructor(e){super(),U(this,e,ol,il,G,{entry:5})}}function en(i){let e,t,n,r,o=i[3].required&&tn(i);return{c(){e=g("div"),t=g("span"),n=V(i[2]),r=N(),o&&o.c(),_(t,"class","label"),_(e,"class","label-row")},m(l,s){k(l,e,s),d(e,t),d(t,n),d(e,r),o&&o.m(e,null)},p(l,s){s&4&&z(n,l[2]),l[3].required?o?o.p(l,s):(o=tn(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(l){l&&O(e),o&&o.d()}}}function tn(i){let e,t=i[7]("forms.common.required-mark")+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","required svelte-a5tzga")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&128&&t!==(t=r[7]("forms.common.required-mark")+"")&&z(n,t)},d(r){r&&O(e)}}}function ll(i){let e,t,n,r,o,l,s,a,u,c,f,p,h,b,w,m=i[7]("forms.image-file.image-data.sub-directory")+"",v,I,A,M,T,D,Z=i[7]("forms.image-file.image-data.filename")+"",$,R,P,K,oe,le,me=i[7]("forms.image-file.image-data.width")+"",re,ge,tt,Be=W.get(i[0],["dimension","width"],"")+"",nt,Et,Ae,it,Ue=i[7]("forms.image-file.image-data.height")+"",ot,It,rt,Ge=W.get(i[0],["dimension","height"],"")+"",lt,ue,st,kt;return r=new Ke({}),{c(){e=g("div"),t=g("div"),n=g("button"),L(r.$$.fragment),o=N(),l=g("label"),s=g("img"),c=N(),f=g("input"),p=N(),h=g("div"),b=g("label"),w=g("span"),v=V(m),I=N(),A=g("input"),M=N(),T=g("label"),D=g("span"),$=V(Z),R=N(),P=g("input"),K=N(),oe=g("div"),le=g("span"),re=V(me),ge=N(),tt=g("span"),nt=V(Be),Et=N(),Ae=g("div"),it=g("span"),ot=V(Ue),It=N(),rt=g("span"),lt=V(Ge),_(n,"class","clear-button svelte-a5tzga"),je(s.src,a=i[4])||_(s,"src",a),_(s,"alt",u=i[0].name),_(s,"class","svelte-a5tzga"),_(f,"class","hidden"),_(f,"type","file"),_(l,"class","preview svelte-a5tzga"),_(t,"class","preview-wrapper svelte-a5tzga"),_(w,"class","svelte-a5tzga"),_(A,"type","text"),_(A,"class","svelte-a5tzga"),_(b,"class","data-entry sub-directory svelte-a5tzga"),_(P,"type","text"),_(P,"class","svelte-a5tzga"),_(T,"class","data-entry filename svelte-a5tzga"),_(oe,"class","data-entry width svelte-a5tzga"),_(Ae,"class","data-entry height svelte-a5tzga"),_(h,"class","data svelte-a5tzga"),_(e,"class","image-data svelte-a5tzga")},m(te,fe){k(te,e,fe),d(e,t),d(t,n),H(r,n,null),d(t,o),d(t,l),d(l,s),d(l,c),d(l,f),d(e,p),d(e,h),d(h,b),d(b,w),d(w,v),d(b,I),d(b,A),pe(A,i[1]),d(h,M),d(h,T),d(T,D),d(D,$),d(T,R),d(T,P),pe(P,i[0].name),d(h,K),d(h,oe),d(oe,le),d(le,re),d(oe,ge),d(oe,tt),d(tt,nt),d(h,Et),d(h,Ae),d(Ae,it),d(it,ot),d(Ae,It),d(Ae,rt),d(rt,lt),ue=!0,st||(kt=[Y(n,"click",i[12]),Y(f,"change",i[11]),Y(A,"input",i[14]),Y(A,"input",i[9]),Y(P,"input",i[15]),Y(P,"input",i[9])],st=!0)},p(te,fe){(!ue||fe&16&&!je(s.src,a=te[4]))&&_(s,"src",a),(!ue||fe&1&&u!==(u=te[0].name))&&_(s,"alt",u),(!ue||fe&128)&&m!==(m=te[7]("forms.image-file.image-data.sub-directory")+"")&&z(v,m),fe&2&&A.value!==te[1]&&pe(A,te[1]),(!ue||fe&128)&&Z!==(Z=te[7]("forms.image-file.image-data.filename")+"")&&z($,Z),fe&1&&P.value!==te[0].name&&pe(P,te[0].name),(!ue||fe&128)&&me!==(me=te[7]("forms.image-file.image-data.width")+"")&&z(re,me),(!ue||fe&1)&&Be!==(Be=W.get(te[0],["dimension","width"],"")+"")&&z(nt,Be),(!ue||fe&128)&&Ue!==(Ue=te[7]("forms.image-file.image-data.height")+"")&&z(ot,Ue),(!ue||fe&1)&&Ge!==(Ge=W.get(te[0],["dimension","height"],"")+"")&&z(lt,Ge)},i(te){ue||(y(r.$$.fragment,te),ue=!0)},o(te){E(r.$$.fragment,te),ue=!1},d(te){te&&O(e),C(r),st=!1,we(kt)}}}function sl(i){let e,t,n=i[7]("forms.image-file.select-area.dnd-files-here-or")+"",r,o,l,s,a=i[7]("forms.image-file.select-area.browse")+"",u,c,f,p,h;return{c(){e=g("div"),t=g("span"),r=V(n),o=N(),l=g("label"),s=g("span"),u=V(a),c=N(),f=g("input"),_(f,"class","hidden"),_(f,"type","file"),_(l,"class","browse svelte-a5tzga"),_(e,"class","select-area svelte-a5tzga")},m(b,w){k(b,e,w),d(e,t),d(t,r),d(e,o),d(e,l),d(l,s),d(s,u),d(l,c),d(l,f),p||(h=Y(f,"change",i[11]),p=!0)},p(b,w){w&128&&n!==(n=b[7]("forms.image-file.select-area.dnd-files-here-or")+"")&&z(r,n),w&128&&a!==(a=b[7]("forms.image-file.select-area.browse")+"")&&z(u,a)},i:S,o:S,d(b){b&&O(e),p=!1,h()}}}function nn(i){let e,t=i[7](i[6])+"",n;return{c(){e=g("span"),n=V(t),_(e,"class","error svelte-a5tzga")},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&192&&t!==(t=r[7](r[6])+"")&&z(n,t)},d(r){r&&O(e)}}}function on(i){let e,t,n,r,o;return t=new et({}),{c(){e=g("button"),L(t.$$.fragment),_(e,"class","help-button svelte-a5tzga")},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[16]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function al(i){let e,t,n,r,o,l,s,a,u,c,f,p;e=new xe({props:{id:i[8],markdown:i[3].help}});let h=i[2]&&en(i);const b=[sl,ll],w=[];function m(A,M){return A[0]==null?0:1}l=m(i),s=w[l]=b[l](i);let v=i[5]&&i[6]&&nn(i),I=i[3].help&&on(i);return{c(){L(e.$$.fragment),t=N(),n=g("div"),h&&h.c(),r=N(),o=g("div"),s.c(),a=N(),v&&v.c(),u=N(),I&&I.c(),_(o,"class","image-row"),_(n,"class","image-file svelte-a5tzga")},m(A,M){H(e,A,M),k(A,t,M),k(A,n,M),h&&h.m(n,null),d(n,r),d(n,o),w[l].m(o,null),d(n,a),v&&v.m(n,null),d(n,u),I&&I.m(n,null),c=!0,f||(p=[Y(o,"dragover",Pe(i[13])),Y(o,"drop",Pe(i[10]))],f=!0)},p(A,[M]){const T={};M&8&&(T.markdown=A[3].help),e.$set(T),A[2]?h?h.p(A,M):(h=en(A),h.c(),h.m(n,r)):h&&(h.d(1),h=null);let D=l;l=m(A),l===D?w[l].p(A,M):(X(),E(w[D],1,1,()=>{w[D]=null}),Q(),s=w[l],s?s.p(A,M):(s=w[l]=b[l](A),s.c()),y(s,1),s.m(o,null)),A[5]&&A[6]?v?v.p(A,M):(v=nn(A),v.c(),v.m(n,u)):v&&(v.d(1),v=null),A[3].help?I?(I.p(A,M),M&8&&y(I,1)):(I=on(A),I.c(),y(I,1),I.m(n,null)):I&&(X(),E(I,1,1,()=>{I=null}),Q())},i(A){c||(y(e.$$.fragment,A),y(s),y(I),c=!0)},o(A){E(e.$$.fragment,A),E(s),E(I),c=!1},d(A){A&&(O(t),O(n)),C(e,A),h&&h.d(),w[l].d(),v&&v.d(),I&&I.d(),f=!1,we(p)}}}function cl(i){return i==null?"":URL.createObjectURL(new Blob([i.data],{type:i.type}))}function ul(i,e,t){let n;ee(i,ce,$=>t(7,n=$));let{label:r=""}=e,{directory:o=""}=e,{image:l=null}=e,{options:s={}}=e;const a=Re(),u=Ve();let c,f=!1,p="";const h=$=>{t(6,p=$),t(5,f=$.length>0)};function b($){return $==null?(s.required&&h("forms.common.error.required"),!1):Ie.isMatch("png",$.type)?(h(""),!0):(h("forms.common.error.unsupported-file-format"),!1)}function w(){t(1,o=o.replaceAll(/[^ a-zA-Z0-9_.+-]/g,"")),u("change",{directory:o,image:l})}async function m($){if(t(1,o=""),!b($)||$==null)return t(0,l=null),w(),Promise.resolve();const R=await $.arrayBuffer();new Nn.PNG({}).parse(R,(P,K)=>{t(0,l={name:$.name,type:$.type,data:R,dimension:{width:K.width,height:K.height}}),w()})}async function v($){const{dataTransfer:R}=$;if(R)if(R.items){for(const P of R.items)if(P.kind==="file"){await m(P.getAsFile());break}}else R.files&&await m(R.files[0])}async function I($){var R;$.target instanceof HTMLInputElement&&await m((R=$.target.files)==null?void 0:R.item(0))}function A(){t(4,c=""),t(1,o=""),t(0,l=null),b(null),w()}function M($){Me.call(this,i,$)}function T(){o=this.value,t(1,o)}function D(){l.name=this.value,t(0,l)}const Z=()=>{var $;return($=he(a))==null?void 0:$.open()};return i.$$set=$=>{"label"in $&&t(2,r=$.label),"directory"in $&&t(1,o=$.directory),"image"in $&&t(0,l=$.image),"options"in $&&t(3,s=$.options)},i.$$.update=()=>{i.$$.dirty&1&&t(4,c=cl(l))},[l,o,r,s,c,f,p,n,a,w,v,I,A,M,T,D,Z]}class fl extends B{constructor(e){super(),U(this,e,ul,al,G,{label:2,directory:1,image:0,options:3})}}function dl(i){let e,t,n;return t=new fl({props:{directory:i[0],image:i[1],label:i[2]("iconpack-editor.icon.label"),options:{required:!0,help:i[2]("iconpack-editor.icon.help")}}}),t.$on("change",i[3]),{c(){e=g("div"),L(t.$$.fragment),_(e,"class","sprite-editor svelte-5zxykv")},m(r,o){k(r,e,o),H(t,e,null),n=!0},p(r,[o]){const l={};o&1&&(l.directory=r[0]),o&2&&(l.image=r[1]),o&4&&(l.label=r[2]("iconpack-editor.icon.label")),o&4&&(l.options={required:!0,help:r[2]("iconpack-editor.icon.help")}),t.$set(l)},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){r&&O(e),C(t)}}}function hl(i,e,t){let n;ee(i,ce,u=>t(2,n=u));let{entry:r}=e,{spriteFile:o}=e,l="",s=null;function a(u){const{directory:c,image:f}=u.detail;if(f==null)t(4,o=null),t(5,r.sprite={file:"",width:0,height:0},r);else{const{name:p,type:h,data:b,dimension:w}=f;t(4,o=Xe({parent:Le(c),name:p,mimeType:h,data:b})),t(5,r.sprite={file:ve(o),width:w.width,height:w.height},r)}}return i.$$set=u=>{"entry"in u&&t(5,r=u.entry),"spriteFile"in u&&t(4,o=u.spriteFile)},i.$$.update=()=>{i.$$.dirty&16&&(o!=null?new Nn.PNG({}).parse(o.data,(u,c)=>{o&&(t(0,l=qi(o).parent),t(1,s={name:o.name,type:Ee.png,data:o.data,dimension:{width:c.width,height:c.height}}))}):(t(0,l=""),t(1,s=null)))},[l,s,n,a,o,r]}class ml extends B{constructor(e){super(),U(this,e,hl,dl,G,{entry:5,spriteFile:4})}}function pl(i){let e,t='<path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function gl(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class rn extends B{constructor(e){super(),U(this,e,gl,pl,G,{})}}function vl(i){let e,t='<path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function _l(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class ln extends B{constructor(e){super(),U(this,e,_l,vl,G,{})}}function wl(i){let e,t='<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function yl(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class sn extends B{constructor(e){super(),U(this,e,yl,wl,G,{})}}function bl(i){let e,t='<path fill="currentColor" d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Tl(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class an extends B{constructor(e){super(),U(this,e,Tl,bl,G,{})}}function El(i){let e,t,n;var r=i[3]==="light"?ln:rn;function o(l,s){return{}}return r&&(e=He(r,o())),{c(){e&&L(e.$$.fragment),t=_e()},m(l,s){e&&H(e,l,s),k(l,t,s),n=!0},p(l,s){if(s&8&&r!==(r=l[3]==="light"?ln:rn)){if(e){X();const a=e;E(a.$$.fragment,1,0,()=>{C(a,1)}),Q()}r?(e=He(r,o()),L(e.$$.fragment),y(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}},i(l){n||(e&&y(e.$$.fragment,l),n=!0)},o(l){e&&E(e.$$.fragment,l),n=!1},d(l){l&&O(t),e&&C(e,l)}}}function Il(i){let e,t,n;var r=i[3]==="light"?sn:an;function o(l,s){return{}}return r&&(e=He(r,o())),{c(){e&&L(e.$$.fragment),t=_e()},m(l,s){e&&H(e,l,s),k(l,t,s),n=!0},p(l,s){if(s&8&&r!==(r=l[3]==="light"?sn:an)){if(e){X();const a=e;E(a.$$.fragment,1,0,()=>{C(a,1)}),Q()}r?(e=He(r,o()),L(e.$$.fragment),y(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}},i(l){n||(e&&y(e.$$.fragment,l),n=!0)},o(l){e&&E(e.$$.fragment,l),n=!1},d(l){l&&O(t),e&&C(e,l)}}}function cn(i){let e,t;return{c(){e=g("span"),t=V(i[1]),_(e,"class","label")},m(n,r){k(n,e,r),d(e,t)},p(n,r){r&2&&z(t,n[1])},d(n){n&&O(e)}}}function un(i){let e,t,n,r,o;return t=new et({}),{c(){e=g("button"),L(t.$$.fragment),_(e,"class","help-button svelte-1rxnw83")},m(l,s){k(l,e,s),H(t,e,null),n=!0,r||(o=Y(e,"click",i[6]),r=!0)},p:S,i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){E(t.$$.fragment,l),n=!1},d(l){l&&O(e),C(t),r=!1,o()}}}function kl(i){let e,t,n,r,o,l,s,a,u,c,f,p;e=new xe({props:{id:i[4],markdown:i[2].help}});const h=[Il,El],b=[];function w(I,A){return I[0]?0:1}l=w(i),s=b[l]=h[l](i);let m=i[1]&&cn(i),v=i[2].help&&un(i);return{c(){L(e.$$.fragment),t=N(),n=g("div"),r=g("button"),o=g("span"),s.c(),a=N(),m&&m.c(),u=N(),v&&v.c(),_(o,"class","icon svelte-1rxnw83"),_(r,"class","checkbox-input svelte-1rxnw83"),_(n,"class","checkbox svelte-1rxnw83")},m(I,A){H(e,I,A),k(I,t,A),k(I,n,A),d(n,r),d(r,o),b[l].m(o,null),d(r,a),m&&m.m(r,null),d(n,u),v&&v.m(n,null),c=!0,f||(p=Y(r,"click",i[5]),f=!0)},p(I,[A]){const M={};A&4&&(M.markdown=I[2].help),e.$set(M);let T=l;l=w(I),l===T?b[l].p(I,A):(X(),E(b[T],1,1,()=>{b[T]=null}),Q(),s=b[l],s?s.p(I,A):(s=b[l]=h[l](I),s.c()),y(s,1),s.m(o,null)),I[1]?m?m.p(I,A):(m=cn(I),m.c(),m.m(r,null)):m&&(m.d(1),m=null),I[2].help?v?(v.p(I,A),A&4&&y(v,1)):(v=un(I),v.c(),y(v,1),v.m(n,null)):v&&(X(),E(v,1,1,()=>{v=null}),Q())},i(I){c||(y(e.$$.fragment,I),y(s),y(v),c=!0)},o(I){E(e.$$.fragment,I),E(s),E(v),c=!1},d(I){I&&(O(t),O(n)),C(e,I),b[l].d(),m&&m.d(),v&&v.d(),f=!1,p()}}}function Ol(i,e,t){let n;ee(i,Se,f=>t(3,n=f));let{label:r=null}=e,{value:o=!1}=e,{options:l={}}=e;const s=Re(),a=Ve();function u(){t(0,o=!o),a("change",{value:o})}const c=()=>{var f;return(f=he(s))==null?void 0:f.open()};return i.$$set=f=>{"label"in f&&t(1,r=f.label),"value"in f&&t(0,o=f.value),"options"in f&&t(2,l=f.options)},[o,r,l,n,s,u,c]}class Rl extends B{constructor(e){super(),U(this,e,Ol,kl,G,{label:1,value:0,options:2})}}function fn(i){let e,t,n,r;return e=new vt({props:{value:i[2],label:i[4]("iconpack-editor.icon-scale-large-map.label"),options:{min:.01,step:.1,help:i[4]("iconpack-editor.icon-scale-large-map.help")}}}),e.$on("change",i[6]),n=new vt({props:{value:i[3],label:i[4]("iconpack-editor.icon-scale-small-map.label"),options:{min:.01,step:.1,help:i[4]("iconpack-editor.icon-scale-small-map.help")}}}),n.$on("change",i[7]),{c(){L(e.$$.fragment),t=N(),L(n.$$.fragment)},m(o,l){H(e,o,l),k(o,t,l),H(n,o,l),r=!0},p(o,l){const s={};l&4&&(s.value=o[2]),l&16&&(s.label=o[4]("iconpack-editor.icon-scale-large-map.label")),l&16&&(s.options={min:.01,step:.1,help:o[4]("iconpack-editor.icon-scale-large-map.help")}),e.$set(s);const a={};l&8&&(a.value=o[3]),l&16&&(a.label=o[4]("iconpack-editor.icon-scale-small-map.label")),l&16&&(a.options={min:.01,step:.1,help:o[4]("iconpack-editor.icon-scale-small-map.help")}),n.$set(a)},i(o){r||(y(e.$$.fragment,o),y(n.$$.fragment,o),r=!0)},o(o){E(e.$$.fragment,o),E(n.$$.fragment,o),r=!1},d(o){o&&O(t),C(e,o),C(n,o)}}}function Al(i){let e,t,n,r;t=new Rl({props:{label:i[4]("iconpack-editor.hide-name-tag.label"),options:{help:i[4]("iconpack-editor.hide-name-tag.help")},value:i[1]}}),t.$on("change",i[5]);let o=i[0]!=null&&fn(i);return{c(){e=g("div"),L(t.$$.fragment),n=N(),o&&o.c(),_(e,"class","options-editor svelte-ouj0tc")},m(l,s){k(l,e,s),H(t,e,null),d(e,n),o&&o.m(e,null),r=!0},p(l,[s]){const a={};s&16&&(a.label=l[4]("iconpack-editor.hide-name-tag.label")),s&16&&(a.options={help:l[4]("iconpack-editor.hide-name-tag.help")}),s&2&&(a.value=l[1]),t.$set(a),l[0]!=null?o?(o.p(l,s),s&1&&y(o,1)):(o=fn(l),o.c(),y(o,1),o.m(e,null)):o&&(X(),E(o,1,1,()=>{o=null}),Q())},i(l){r||(y(t.$$.fragment,l),y(o),r=!0)},o(l){E(t.$$.fragment,l),E(o),r=!1},d(l){l&&O(e),C(t),o&&o.d()}}}function Nl(i,e,t){let n;ee(i,ce,w=>t(4,n=w));let{entry:r}=e,{spriteFile:o=null}=e,l,s,a;const u=(w,m)=>{t(8,r.options={...W.merge(r.options||{},{[w]:m})},r)},c=w=>{W.unset(r,["options",w]),W.unsetIfEmpty(r,"options"),t(8,r={...r})},f=(w,m)=>{typeof m=="boolean"?m?u(w,m):c(w):m!=null?u(w,m):c(w)};function p({detail:w}){f("hideNameTag",w.value)}function h({detail:w}){f("iconScaleLargeMap",w.value)}function b({detail:w}){f("iconScaleSmallMap",w.value)}return i.$$set=w=>{"entry"in w&&t(8,r=w.entry),"spriteFile"in w&&t(0,o=w.spriteFile)},i.$$.update=()=>{i.$$.dirty&256&&t(1,l=W.get(r,["options","hideNameTag"],!1)),i.$$.dirty&256&&t(2,s=W.get(r,["options","iconScaleLargeMap"],null)),i.$$.dirty&256&&t(3,a=W.get(r,["options","iconScaleSmallMap"],null)),i.$$.dirty&1&&o==null&&(f("iconScaleLargeMap",null),f("iconScaleSmallMap",null))},[o,l,s,a,n,p,h,b,r]}class Sl extends B{constructor(e){super(),U(this,e,Nl,Al,G,{entry:8,spriteFile:0})}}function Ll(i){let e,t='<path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4m2 16H5V5h11.17L19 7.83V19m-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6V6Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Hl(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Cl extends B{constructor(e){super(),U(this,e,Hl,Ll,G,{})}}function Fl(i){let e,t='<path fill="currentColor" d="M4 19h6v2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v2.12l-2 2V7.83L15.17 5H4v14m10-9V6H5v4h9m6.42 2.3a.533.533 0 0 0-.38-.17c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28M12 19.94V22h2.06l6.06-6.07l-2.05-2.05L12 19.94M14 15c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3h.13L14 15.13V15"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Ml(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Pl extends B{constructor(e){super(),U(this,e,Ml,Fl,G,{})}}function Dl(i){let e,t='<path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function $l(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Bl extends B{constructor(e){super(),U(this,e,$l,Dl,G,{})}}const Jn=Symbol();function Ul(i){let e,t;return e=new Ye({props:{icon:Cl,options:{disabled:!i[1]},text:i[2]("iconpack-editor.add-entry")}}),e.$on("click",i[3]),{c(){L(e.$$.fragment)},m(n,r){H(e,n,r),t=!0},p(n,r){const o={};r&2&&(o.options={disabled:!n[1]}),r&4&&(o.text=n[2]("iconpack-editor.add-entry")),e.$set(o)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Gl(i){let e,t,n,r;return e=new Ye({props:{icon:Pl,options:{disabled:!i[1]},text:i[2]("iconpack-editor.overwrite-entry")}}),e.$on("click",i[3]),n=new Ye({props:{icon:Bl,text:i[2]("iconpack-editor.delete-entry")}}),n.$on("click",i[4]),{c(){L(e.$$.fragment),t=N(),L(n.$$.fragment)},m(o,l){H(e,o,l),k(o,t,l),H(n,o,l),r=!0},p(o,l){const s={};l&2&&(s.options={disabled:!o[1]}),l&4&&(s.text=o[2]("iconpack-editor.overwrite-entry")),e.$set(s);const a={};l&4&&(a.text=o[2]("iconpack-editor.delete-entry")),n.$set(a)},i(o){r||(y(e.$$.fragment,o),y(n.$$.fragment,o),r=!0)},o(o){E(e.$$.fragment,o),E(n.$$.fragment,o),r=!1},d(o){o&&O(t),C(e,o),C(n,o)}}}function Wl(i){let e,t,n,r;const o=[Gl,Ul],l=[];function s(a,u){return a[0]?0:1}return t=s(i),n=l[t]=o[t](i),{c(){e=g("div"),n.c(),_(e,"class","buttons svelte-iba0hz")},m(a,u){k(a,e,u),l[t].m(e,null),r=!0},p(a,[u]){let c=t;t=s(a),t===c?l[t].p(a,u):(X(),E(l[c],1,1,()=>{l[c]=null}),Q(),n=l[t],n?n.p(a,u):(n=l[t]=o[t](a),n.c()),y(n,1),n.m(e,null))},i(a){r||(y(n),r=!0)},o(a){E(n),r=!1},d(a){a&&O(e),l[t].d()}}}function jl(i,e,t){let n,r,o;ee(i,ce,c=>t(2,o=c));const{saveEntry:l,deleteEntry:s}=dt(Tt),{isValid:a,isOverwrite:u}=dt(Jn);return ee(i,a,c=>t(1,r=c)),ee(i,u,c=>t(0,n=c)),[n,r,o,l,s,a,u]}class ql extends B{constructor(e){super(),U(this,e,jl,Wl,G,{})}}function Yl(i){let e,t,n,r,o,l,s,a,u,c,f,p,h,b,w,m,v;function I(R){i[3](R)}let A={};i[0]!==void 0&&(A.entry=i[0]),n=new rl({props:A}),ie.push(()=>se(n,"entry",I));function M(R){i[4](R)}function T(R){i[5](R)}let D={};i[0]!==void 0&&(D.entry=i[0]),i[1]!==void 0&&(D.spriteFile=i[1]),l=new ml({props:D}),ie.push(()=>se(l,"entry",M)),ie.push(()=>se(l,"spriteFile",T));function Z(R){i[6](R)}let $={spriteFile:i[1]};return i[0]!==void 0&&($.entry=i[0]),c=new Sl({props:$}),ie.push(()=>se(c,"entry",Z)),h=new ql({}),m=new Zn({}),{c(){e=g("div"),t=g("div"),L(n.$$.fragment),o=N(),L(l.$$.fragment),u=N(),L(c.$$.fragment),p=N(),L(h.$$.fragment),b=N(),w=g("div"),L(m.$$.fragment),_(t,"class","editor svelte-1966qfy"),_(w,"class","tools-wrapper svelte-1966qfy"),_(e,"class","editor-wrapper svelte-1966qfy")},m(R,P){k(R,e,P),d(e,t),H(n,t,null),d(t,o),H(l,t,null),d(t,u),H(c,t,null),d(t,p),H(h,t,null),d(e,b),d(e,w),H(m,w,null),v=!0},p(R,[P]){const K={};!r&&P&1&&(r=!0,K.entry=R[0],ae(()=>r=!1)),n.$set(K);const oe={};!s&&P&1&&(s=!0,oe.entry=R[0],ae(()=>s=!1)),!a&&P&2&&(a=!0,oe.spriteFile=R[1],ae(()=>a=!1)),l.$set(oe);const le={};P&2&&(le.spriteFile=R[1]),!f&&P&1&&(f=!0,le.entry=R[0],ae(()=>f=!1)),c.$set(le)},i(R){v||(y(n.$$.fragment,R),y(l.$$.fragment,R),y(c.$$.fragment,R),y(h.$$.fragment,R),y(m.$$.fragment,R),v=!0)},o(R){E(n.$$.fragment,R),E(l.$$.fragment,R),E(c.$$.fragment,R),E(h.$$.fragment,R),E(m.$$.fragment,R),v=!1},d(R){R&&O(e),C(n),C(l),C(c),C(h),C(m)}}}function Vl(i,e,t){let{json:n}=e,{entry:r}=e,{spriteFile:o}=e;const l=be(!1),s=be(!1);Sn(Jn,{isOverwrite:l,isValid:s});function a(p){r=p,t(0,r)}function u(p){r=p,t(0,r)}function c(p){o=p,t(1,o)}function f(p){r=p,t(0,r)}return i.$$set=p=>{"json"in p&&t(2,n=p.json),"entry"in p&&t(0,r=p.entry),"spriteFile"in p&&t(1,o=p.spriteFile)},i.$$.update=()=>{i.$$.dirty&7&&(l.set(n.some(bt(r))),s.set(Yi(r)&&o!=null))},[r,o,n,a,u,c,f]}class zl extends B{constructor(e){super(),U(this,e,Vl,Yl,G,{json:2,entry:0,spriteFile:1})}}function Zl(i){let e,t='<path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},i[0]],r={};for(let o=0;o<n.length;o+=1)r=F(r,n[o]);return{c(){e=x("svg"),j(e,r)},m(o,l){k(o,e,l),e.innerHTML=t},p(o,[l]){j(e,r=J(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&o[0]]))},i:S,o:S,d(o){o&&O(e)}}}function Kl(i,e,t){return i.$$set=n=>{t(0,e=F(F({},e),q(n)))},e=q(e),[e]}class Jl extends B{constructor(e){super(),U(this,e,Kl,Zl,G,{})}}function Xl(i){let e,t,n,r,o,l,s,a;return n=new Jl({}),{c(){e=g("div"),t=g("div"),L(n.$$.fragment),r=N(),o=g("input"),_(t,"class","icon svelte-fmdp6k"),_(o,"class","input svelte-fmdp6k"),_(o,"type","text"),_(e,"class","search svelte-fmdp6k")},m(u,c){k(u,e,c),d(e,t),H(n,t,null),d(e,r),d(e,o),pe(o,i[0]),l=!0,s||(a=Y(o,"input",i[1]),s=!0)},p(u,[c]){c&1&&o.value!==u[0]&&pe(o,u[0])},i(u){l||(y(n.$$.fragment,u),l=!0)},o(u){E(n.$$.fragment,u),l=!1},d(u){u&&O(e),C(n),s=!1,a()}}}function Ql(i,e,t){let{keyword:n}=e;function r(){n=this.value,t(0,n)}return i.$$set=o=>{"keyword"in o&&t(0,n=o.keyword)},[n,r]}class xl extends B{constructor(e){super(),U(this,e,Ql,Xl,G,{keyword:0})}}function dn(i){let e,t,n;return{c(){e=g("img"),_(e,"class","icon svelte-120afkb"),je(e.src,t=i[3])||_(e,"src",t),_(e,"alt",n=i[0].target.name)},m(r,o){k(r,e,o)},p(r,o){o&8&&!je(e.src,t=r[3])&&_(e,"src",t),o&1&&n!==(n=r[0].target.name)&&_(e,"alt",n)},d(r){r&&O(e)}}}function hn(i){let e,t=i[4]("json-view.entry.level",{level:i[2]})+"",n;return{c(){e=g("span"),n=V(t)},m(r,o){k(r,e,o),d(e,n)},p(r,o){o&20&&t!==(t=r[4]("json-view.entry.level",{level:r[2]})+"")&&z(n,t)},d(r){r&&O(e)}}}function es(i){let e,t,n,r,o,l,s,a=i[3]&&dn(i),u=i[2]>0&&hn(i);return{c(){e=g("button"),a&&a.c(),t=N(),n=g("span"),r=V(i[1]),o=N(),u&&u.c(),_(e,"class","entry svelte-120afkb")},m(c,f){k(c,e,f),a&&a.m(e,null),d(e,t),d(e,n),d(n,r),d(e,o),u&&u.m(e,null),l||(s=Y(e,"click",i[7]),l=!0)},p(c,[f]){c[3]?a?a.p(c,f):(a=dn(c),a.c(),a.m(e,t)):a&&(a.d(1),a=null),f&2&&z(r,c[1]),c[2]>0?u?u.p(c,f):(u=hn(c),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:S,o:S,d(c){c&&O(e),a&&a.d(),u&&u.d(),l=!1,s()}}}function ts(i,e,t){let n;ee(i,ce,f=>t(4,n=f));let{files:r}=e,{entry:o}=e;const{openEntry:l}=dt(Tt);let s,a,u="";const c=()=>l(o);return i.$$set=f=>{"files"in f&&t(6,r=f.files),"entry"in f&&t(0,o=f.entry)},i.$$.update=()=>{if(i.$$.dirty&65){const f=yt(r,o);f!=null&&t(3,u=URL.createObjectURL(new Blob([f.data],{type:f.mimeType})))}i.$$.dirty&1&&(t(1,s=o.target.name),t(2,a=W.get(o.target,"metadata.level",0)))},[o,s,a,u,n,l,r,c]}class ns extends B{constructor(e){super(),U(this,e,ts,es,G,{files:6,entry:0})}}function mn(i,e,t){const n=i.slice();return n[7]=e[t],n}function pn(i){let e,t,n,r;return t=new ns({props:{files:i[1],entry:i[7]}}),{c(){e=g("div"),L(t.$$.fragment),n=N(),_(e,"class","entry-wrapper svelte-1fokxip"),ne(e,"active",gn(i[7],i[3]))},m(o,l){k(o,e,l),H(t,e,null),d(e,n),r=!0},p(o,l){const s={};l&2&&(s.files=o[1]),l&4&&(s.entry=o[7]),t.$set(s),(!r||l&28)&&ne(e,"active",gn(o[7],o[3]))},i(o){r||(y(t.$$.fragment,o),r=!0)},o(o){E(t.$$.fragment,o),r=!1},d(o){o&&O(e),C(t)}}}function is(i){let e,t,n,r,o,l,s;function a(h){i[5](h)}let u={};i[3]!==void 0&&(u.keyword=i[3]),n=new xl({props:u}),ie.push(()=>se(n,"keyword",a));let c=Te(i[4](i[2])),f=[];for(let h=0;h<c.length;h+=1)f[h]=pn(mn(i,c,h));const p=h=>E(f[h],1,1,()=>{f[h]=null});return{c(){e=g("div"),t=g("div"),L(n.$$.fragment),o=N(),l=g("div");for(let h=0;h<f.length;h+=1)f[h].c();_(t,"class","search-wrapper svelte-1fokxip"),_(l,"class","entries svelte-1fokxip"),_(e,"class","json-view svelte-1fokxip")},m(h,b){k(h,e,b),d(e,t),H(n,t,null),d(e,o),d(e,l);for(let w=0;w<f.length;w+=1)f[w]&&f[w].m(l,null);i[6](e),s=!0},p(h,[b]){const w={};if(!r&&b&8&&(r=!0,w.keyword=h[3],ae(()=>r=!1)),n.$set(w),b&30){c=Te(h[4](h[2]));let m;for(m=0;m<c.length;m+=1){const v=mn(h,c,m);f[m]?(f[m].p(v,b),y(f[m],1)):(f[m]=pn(v),f[m].c(),y(f[m],1),f[m].m(l,null))}for(X(),m=c.length;m<f.length;m+=1)p(m);Q()}},i(h){if(!s){y(n.$$.fragment,h);for(let b=0;b<c.length;b+=1)y(f[b]);s=!0}},o(h){E(n.$$.fragment,h),f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)E(f[b]);s=!1},d(h){h&&O(e),C(n),ze(f,h),i[6](null)}}}function gn(i,e){return i.target.name.includes(e)}function os(i,e,t){let{ref:n}=e,{files:r}=e,{json:o}=e,l="";function s(c){return W.sortBy(c,["target.name","target.metadata.level"])}function a(c){l=c,t(3,l)}function u(c){ie[c?"unshift":"push"](()=>{n=c,t(0,n)})}return i.$$set=c=>{"ref"in c&&t(0,n=c.ref),"files"in c&&t(1,r=c.files),"json"in c&&t(2,o=c.json)},[n,r,o,l,s,a,u]}class rs extends B{constructor(e){super(),U(this,e,os,is,G,{ref:0,files:1,json:2})}}function vn(i){let e,t,n;return{c(){e=g("div"),e.innerHTML='<div class="vertical-border svelte-ipi4b9"></div>',_(e,"class","resize-bar svelte-ipi4b9"),ne(e,"left",i[1]),ne(e,"right",i[2])},m(r,o){k(r,e,o),t||(n=Y(e,"mousedown",i[3]),t=!0)},p:S,d(r){r&&O(e),t=!1,n()}}}function ls(i){let e,t=i[0]&&vn(i);return{c(){t&&t.c(),e=_e()},m(n,r){t&&t.m(n,r),k(n,e,r)},p(n,[r]){n[0]?t?t.p(n,r):(t=vn(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:S,o:S,d(n){n&&O(e),t&&t.d(n)}}}function ss(i,e,t){let{ref:n}=e,{positiveDirection:r}=e;const o=r==="left",l=!o;let s=!1,a=-1,u=-1;function c(h){n&&(s=!0,a=h.clientX,u=n.clientWidth)}function f(h){if(!(!n||!s||h.movementX===0)){if(r==="right"){let w=u+(h.clientX-a);t(0,n.style.width=`${w}px`,n),t(0,n.style.minWidth=`${w}px`,n)}else if(r==="left"){let w=u+(a-h.clientX);t(0,n.style.width=`${w}px`,n),t(0,n.style.minWidth=`${w}px`,n)}}}function p(){s=!1}return mi(()=>{document.addEventListener("mouseup",p),document.addEventListener("mousemove",f)}),wn(()=>{document.removeEventListener("mouseup",p),document.removeEventListener("mousemove",f)}),i.$$set=h=>{"ref"in h&&t(0,n=h.ref),"positiveDirection"in h&&t(4,r=h.positiveDirection)},[n,o,l,c,r]}class _n extends B{constructor(e){super(),U(this,e,ss,ls,G,{ref:0,positiveDirection:4})}}function as(i){let e,t,n,r,o,l,s,a,u,c,f,p,h,b,w,m,v;function I(R){i[7](R)}let A={files:i[0]};i[1]!==void 0&&(A.ref=i[1]),t=new Zr({props:A}),ie.push(()=>se(t,"ref",I)),o=new _n({props:{positiveDirection:"right",ref:i[1]}});function M(R){i[8](R)}function T(R){i[9](R)}let D={json:i[3]};i[4]!==void 0&&(D.entry=i[4]),i[5]!==void 0&&(D.spriteFile=i[5]),s=new zl({props:D}),ie.push(()=>se(s,"entry",M)),ie.push(()=>se(s,"spriteFile",T)),f=new _n({props:{positiveDirection:"left",ref:i[2]}});function Z(R){i[10](R)}let $={files:i[0],json:i[3]};return i[2]!==void 0&&($.ref=i[2]),h=new rs({props:$}),ie.push(()=>se(h,"ref",Z)),{c(){e=g("div"),L(t.$$.fragment),r=N(),L(o.$$.fragment),l=N(),L(s.$$.fragment),c=N(),L(f.$$.fragment),p=N(),L(h.$$.fragment),_(e,"class","iconpack-editor svelte-hikcj5"),ne(e,"has-header",i[6]==="show")},m(R,P){k(R,e,P),H(t,e,null),d(e,r),H(o,e,null),d(e,l),H(s,e,null),d(e,c),H(f,e,null),d(e,p),H(h,e,null),w=!0,m||(v=Y(window,"beforeunload",cs),m=!0)},p(R,[P]){const K={};P&1&&(K.files=R[0]),!n&&P&2&&(n=!0,K.ref=R[1],ae(()=>n=!1)),t.$set(K);const oe={};P&2&&(oe.ref=R[1]),o.$set(oe);const le={};P&8&&(le.json=R[3]),!a&&P&16&&(a=!0,le.entry=R[4],ae(()=>a=!1)),!u&&P&32&&(u=!0,le.spriteFile=R[5],ae(()=>u=!1)),s.$set(le);const me={};P&4&&(me.ref=R[2]),f.$set(me);const re={};P&1&&(re.files=R[0]),P&8&&(re.json=R[3]),!b&&P&4&&(b=!0,re.ref=R[2],ae(()=>b=!1)),h.$set(re),(!w||P&64)&&ne(e,"has-header",R[6]==="show")},i(R){w||(y(t.$$.fragment,R),y(o.$$.fragment,R),y(s.$$.fragment,R),y(f.$$.fragment,R),y(h.$$.fragment,R),w=!0)},o(R){E(t.$$.fragment,R),E(o.$$.fragment,R),E(s.$$.fragment,R),E(f.$$.fragment,R),E(h.$$.fragment,R),w=!1},d(R){R&&O(e),C(t),C(o),C(s),C(f),C(h),m=!1,v()}}}function cs(i){return i.preventDefault(),i.returnValue=""}function us(i,e,t){let n;ee(i,pt,b=>t(6,n=b));let{files:r}=e,o=null,l=null,s=Ki(r),a=ct(),u=null;Sn(Tt,{saveEntry:()=>{u&&(t(3,s=[...Qi(r,s,a,u)]),t(0,r={...r}),t(4,a=ct()),t(5,u=null))},openEntry:b=>{t(4,a={...W.cloneDeep(b)}),t(5,u=yt(r,a))},deleteEntry:()=>{t(3,s=[...Ji(r,s,a)]),t(0,r={...r}),t(4,a=ct()),t(5,u=null)}});function c(b){o=b,t(1,o)}function f(b){a=b,t(4,a)}function p(b){u=b,t(5,u)}function h(b){l=b,t(2,l)}return i.$$set=b=>{"files"in b&&t(0,r=b.files)},[r,o,l,s,a,u,n,c,f,p,h]}class fs extends B{constructor(e){super(),U(this,e,us,as,G,{files:0})}}function ds(i){return{c:S,m:S,p:S,i:S,o:S,d:S}}function hs(i){let e,t,n,r;const o=[ps,ms],l=[];function s(a,u){return a[0]==null?0:1}return e=s(i),t=l[e]=o[e](i),{c(){t.c(),n=_e()},m(a,u){l[e].m(a,u),k(a,n,u),r=!0},p(a,u){let c=e;e=s(a),e===c?l[e].p(a,u):(X(),E(l[c],1,1,()=>{l[c]=null}),Q(),t=l[e],t?t.p(a,u):(t=l[e]=o[e](a),t.c()),y(t,1),t.m(n.parentNode,n))},i(a){r||(y(t),r=!0)},o(a){E(t),r=!1},d(a){a&&O(n),l[e].d(a)}}}function ms(i){let e,t,n;function r(l){i[3](l)}let o={};return i[0]!==void 0&&(o.files=i[0]),e=new fs({props:o}),ie.push(()=>se(e,"files",r)),{c(){L(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,s){const a={};!t&&s&1&&(t=!0,a.files=l[0],ae(()=>t=!1)),e.$set(a)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){C(e,l)}}}function ps(i){let e,t,n;function r(l){i[2](l)}let o={};return i[0]!==void 0&&(o.files=i[0]),e=new cr({props:o}),ie.push(()=>se(e,"files",r)),{c(){L(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,s){const a={};!t&&s&1&&(t=!0,a.files=l[0],ae(()=>t=!1)),e.$set(a)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){C(e,l)}}}function gs(i){return{c:S,m:S,p:S,i:S,o:S,d:S}}function vs(i){let e,t,n,r,o,l,s;e=new Ze({}),r=new Ai({});let a={ctx:i,current:null,token:null,hasCatch:!1,pending:gs,then:hs,catch:ds,value:4,blocks:[,,,]};return pi(bi(),a),{c(){L(e.$$.fragment),t=N(),n=g("div"),L(r.$$.fragment),o=N(),l=g("main"),a.block.c(),_(l,"class","main svelte-muyc38"),_(n,"class","valheim-iconpack-editor svelte-muyc38"),ne(n,"show-modal",i[1]==="show")},m(u,c){H(e,u,c),k(u,t,c),k(u,n,c),H(r,n,null),d(n,o),d(n,l),a.block.m(l,a.anchor=null),a.mount=()=>l,a.anchor=null,s=!0},p(u,[c]){i=u,gi(a,i,c),(!s||c&2)&&ne(n,"show-modal",i[1]==="show")},i(u){s||(y(e.$$.fragment,u),y(r.$$.fragment,u),y(a.block),s=!0)},o(u){E(e.$$.fragment,u),E(r.$$.fragment,u);for(let c=0;c<3;c+=1){const f=a.blocks[c];E(f)}s=!1},d(u){u&&(O(t),O(n)),C(e,u),C(r),a.block.d(),a.token=null,a=null}}}function _s(i,e,t){let n;ee(i,mt,s=>t(1,n=s));let r;function o(s){r=s,t(0,r)}function l(s){r=s,t(0,r)}return[r,n,o,l]}class ws extends B{constructor(e){super(),U(this,e,_s,vs,G,{})}}new ws({target:document.body});
