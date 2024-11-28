var U=Object.defineProperty;var V=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>V(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function m(){}function q(e){return e()}function j(){return Object.create(null)}function g(e){e.forEach(q)}function F(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function K(e){e.parentNode&&e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function C(){return R(" ")}function b(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e){return e===""?null:+e}function H(e){return Array.from(e.childNodes)}function v(e,t){e.value=t??""}function w(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let P;function _(e){P=e}const p=[],B=[];let h=[];const M=[],J=Promise.resolve();let L=!1;function Q(){L||(L=!0,J.then(T))}function N(e){h.push(e)}const O=new Set;let d=0;function T(){if(d!==0)return;const e=P;do{try{for(;d<p.length;){const t=p[d];d++,_(t),W(t.$$)}}catch(t){throw p.length=0,d=0,t}for(_(null),p.length=0,d=0;B.length;)B.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];O.has(n)||(O.add(n),n())}h.length=0}while(p.length);for(;M.length;)M.pop()();L=!1,O.clear(),_(e)}function W(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function X(e){const t=[],n=[];h.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),h=t}const Y=new Set;function Z(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function ee(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),N(()=>{const i=e.$$.on_mount.map(q).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...i):g(i),e.$$.on_mount=[]}),r.forEach(N)}function te(e,t){const n=e.$$;n.fragment!==null&&(X(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(p.push(e),Q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,o,r,i,s=null,y=[-1]){const l=P;_(e);const u=e.$$={fragment:null,ctx:[],props:i,update:m,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:j(),dirty:y,skip_bound:!1,root:t.target||l.$$.root};s&&s(u.root);let c=!1;if(u.ctx=n?n(e,t.props||{},(f,k,...A)=>{const S=A.length?A[0]:k;return u.ctx&&r(u.ctx[f],u.ctx[f]=S)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](S),c&&ne(e,f)),k}):[],u.update(),c=!0,g(u.before_update),u.fragment=o?o(u.ctx):!1,t.target){if(t.hydrate){const f=H(t.target);u.fragment&&u.fragment.l(f),f.forEach(K)}else u.fragment&&u.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),T()}_(l)}class oe{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){te(this,1),this.$destroy=m}$on(t,n){if(!F(n))return m;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);function ue(e){let t,n,o,r,i,s,y,l,u;return{c(){t=$("main"),n=$("input"),o=C(),r=$("input"),i=C(),s=$("div"),y=R("O"),E(n,"type","range"),E(r,"type","range"),E(s,"class","A svelte-o7mdnw"),w(s,"left",e[0]+"px"),w(s,"top",e[1]+"px")},m(c,f){G(c,t,f),a(t,n),v(n,e[0]),a(t,o),a(t,r),v(r,e[1]),a(t,i),a(t,s),a(s,y),l||(u=[b(n,"change",e[2]),b(n,"input",e[2]),b(r,"change",e[3]),b(r,"input",e[3])],l=!0)},p(c,[f]){f&1&&v(n,c[0]),f&2&&v(r,c[1]),f&1&&w(s,"left",c[0]+"px"),f&2&&w(s,"top",c[1]+"px")},i:m,o:m,d(c){c&&K(t),l=!1,g(u)}}}function se(e,t,n){var o=0,r=0;function i(){o=I(this.value),n(0,o)}function s(){r=I(this.value),n(1,r)}return[o,r,i,s]}class fe extends oe{constructor(t){super(),re(this,t,se,ue,z,{})}}new fe({target:document.getElementById("app")});
