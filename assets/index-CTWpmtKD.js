function tP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nP(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var fw={exports:{}},vc={},pw={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),rP=Symbol.for("react.portal"),iP=Symbol.for("react.fragment"),oP=Symbol.for("react.strict_mode"),sP=Symbol.for("react.profiler"),aP=Symbol.for("react.provider"),lP=Symbol.for("react.context"),uP=Symbol.for("react.forward_ref"),cP=Symbol.for("react.suspense"),hP=Symbol.for("react.memo"),dP=Symbol.for("react.lazy"),Fy=Symbol.iterator;function fP(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,yw={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=Ko.prototype;function Fp(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}var Up=Fp.prototype=new vw;Up.constructor=Fp;gw(Up,Ko.prototype);Up.isPureReactComponent=!0;var Uy=Array.isArray,_w=Object.prototype.hasOwnProperty,$p={current:null},ww={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)_w.call(e,r)&&!ww.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ca,type:t,key:o,ref:s,props:i,_owner:$p.current}}function pP(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function mP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $y=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mP(""+t.key):e.toString(36)}function Vl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ca:case rP:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+qh(s,0):r,Uy(i)?(n="",t!=null&&(n=t.replace($y,"$&/")+"/"),Vl(i,e,n,"",function(c){return c})):i!=null&&(zp(i)&&(i=pP(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($y,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Uy(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+qh(o,a);s+=Vl(o,e,n,u,i)}else if(u=fP(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+qh(o,a++),s+=Vl(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function al(t,e,n){if(t==null)return t;var r=[],i=0;return Vl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function gP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},jl={transition:null},yP={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:$p};function Sw(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ko;le.Fragment=iP;le.Profiler=sP;le.PureComponent=Fp;le.StrictMode=oP;le.Suspense=cP;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yP;le.act=Sw;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=$p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)_w.call(e,u)&&!ww.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ca,type:t.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(t){return t={$$typeof:lP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aP,_context:t},t.Consumer=t};le.createElement=Ew;le.createFactory=function(t){var e=Ew.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:uP,render:t}};le.isValidElement=zp;le.lazy=function(t){return{$$typeof:dP,_payload:{_status:-1,_result:t},_init:gP}};le.memo=function(t,e){return{$$typeof:hP,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};le.unstable_act=Sw;le.useCallback=function(t,e){return xt.current.useCallback(t,e)};le.useContext=function(t){return xt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};le.useEffect=function(t,e){return xt.current.useEffect(t,e)};le.useId=function(){return xt.current.useId()};le.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return xt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};le.useRef=function(t){return xt.current.useRef(t)};le.useState=function(t){return xt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return xt.current.useTransition()};le.version="18.3.1";pw.exports=le;var Ge=pw.exports;const oe=yc(Ge),zy=tP({__proto__:null,default:oe},[Ge]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vP=Ge,_P=Symbol.for("react.element"),wP=Symbol.for("react.fragment"),EP=Object.prototype.hasOwnProperty,SP=vP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TP={key:!0,ref:!0,__self:!0,__source:!0};function Tw(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)EP.call(e,r)&&!TP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_P,type:t,key:o,ref:s,props:i,_owner:SP.current}}vc.Fragment=wP;vc.jsx=Tw;vc.jsxs=Tw;fw.exports=vc;var M=fw.exports,Iw={exports:{}},Xt={},Aw={exports:{}},Pw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,V){var j=U.length;U.push(V);e:for(;0<j;){var K=j-1>>>1,H=U[K];if(0<i(H,V))U[K]=V,U[j]=H,j=K;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var V=U[0],j=U.pop();if(j!==V){U[0]=j;e:for(var K=0,H=U.length,Y=H>>>1;K<Y;){var ge=2*(K+1)-1,ce=U[ge],Ie=ge+1,Ae=U[Ie];if(0>i(ce,j))Ie<H&&0>i(Ae,ce)?(U[K]=Ae,U[Ie]=j,K=Ie):(U[K]=ce,U[ge]=j,K=ge);else if(Ie<H&&0>i(Ae,j))U[K]=Ae,U[Ie]=j,K=Ie;else break e}}return V}function i(U,V){var j=U.sortIndex-V.sortIndex;return j!==0?j:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,p=null,m=3,T=!1,A=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=U)r(c),V.sortIndex=V.expirationTime,e(u,V);else break;V=n(c)}}function k(U){if(R=!1,S(U),!A)if(n(u)!==null)A=!0,ve(N);else{var V=n(c);V!==null&&Te(k,V.startTime-U)}}function N(U,V){A=!1,R&&(R=!1,I(g),g=-1),T=!0;var j=m;try{for(S(V),p=n(u);p!==null&&(!(p.expirationTime>V)||U&&!C());){var K=p.callback;if(typeof K=="function"){p.callback=null,m=p.priorityLevel;var H=K(p.expirationTime<=V);V=t.unstable_now(),typeof H=="function"?p.callback=H:p===n(u)&&r(u),S(V)}else r(u);p=n(u)}if(p!==null)var Y=!0;else{var ge=n(c);ge!==null&&Te(k,ge.startTime-V),Y=!1}return Y}finally{p=null,m=j,T=!1}}var O=!1,v=null,g=-1,_=5,E=-1;function C(){return!(t.unstable_now()-E<_)}function x(){if(v!==null){var U=t.unstable_now();E=U;var V=!0;try{V=v(!0,U)}finally{V?P():(O=!1,v=null)}}else O=!1}var P;if(typeof y=="function")P=function(){y(x)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,de=q.port2;q.port1.onmessage=x,P=function(){de.postMessage(null)}}else P=function(){b(x,0)};function ve(U){v=U,O||(O=!0,P())}function Te(U,V){g=b(function(){U(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){A||T||(A=!0,ve(N))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var j=m;m=V;try{return U()}finally{m=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=m;m=U;try{return V()}finally{m=j}},t.unstable_scheduleCallback=function(U,V,j){var K=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?K+j:K):j=K,U){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=j+H,U={id:d++,callback:V,priorityLevel:U,startTime:j,expirationTime:H,sortIndex:-1},j>K?(U.sortIndex=j,e(c,U),n(u)===null&&U===n(c)&&(R?(I(g),g=-1):R=!0,Te(k,j-K))):(U.sortIndex=H,e(u,U),A||T||(A=!0,ve(N))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var V=m;return function(){var j=m;m=V;try{return U.apply(this,arguments)}finally{m=j}}}})(Pw);Aw.exports=Pw;var IP=Aw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AP=Ge,Gt=IP;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cw=new Set,Zs={};function Di(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(Zs[t]=e,t=0;t<e.length;t++)Cw.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,PP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},Hy={};function CP(t){return Zd.call(Hy,t)?!0:Zd.call(By,t)?!1:PP.test(t)?Hy[t]=!0:(By[t]=!0,!1)}function RP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kP(t,e,n,r){if(e===null||typeof e>"u"||RP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bp=/[\-:]([a-z])/g;function Hp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bp,Hp);ut[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bp,Hp);ut[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bp,Hp);ut[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wp(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kP(e,n,i,r)&&(n=null),r||i===null?CP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=AP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),qp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),Rw=Symbol.for("react.provider"),kw=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),xw=Symbol.for("react.offscreen"),Wy=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Kh;function Cs(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Gh=!1;function Qh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cs(t):""}function xP(t){switch(t.tag){case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Ki:return"Portal";case ef:return"Profiler";case qp:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kw:return(t.displayName||"Context")+".Consumer";case Rw:return(t._context.displayName||"Context")+".Provider";case Kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gp:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function bP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===qp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OP(t){var e=bw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=OP(t))}function Ow(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nw(t,e){e=e.checked,e!=null&&Wp(t,"checked",e,!1)}function sf(t,e){Nw(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ky(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||hu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function so(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Rs(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function Dw(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,Mw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NP=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){NP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function Vw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function jw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DP=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(DP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function Qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,ao=null,lo=null;function Yy(t){if(t=xa(t)){if(typeof ff!="function")throw Error($(280));var e=t.stateNode;e&&(e=Tc(e),ff(t.stateNode,t.type,e))}}function Fw(t){ao?lo?lo.push(t):lo=[t]:ao=t}function Uw(){if(ao){var t=ao,e=lo;if(lo=ao=null,Yy(t),e)for(t=0;t<e.length;t++)Yy(e[t])}}function $w(t,e){return t(e)}function zw(){}var Yh=!1;function Bw(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return $w(t,e,n)}finally{Yh=!1,(ao!==null||lo!==null)&&(zw(),Uw())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Tc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var pf=!1;if(tr)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){pf=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{pf=!1}function LP(t,e,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var js=!1,du=null,fu=!1,mf=null,MP={onError:function(t){js=!0,du=t}};function VP(t,e,n,r,i,o,s,a,u){js=!1,du=null,LP.apply(MP,arguments)}function jP(t,e,n,r,i,o,s,a,u){if(VP.apply(this,arguments),js){if(js){var c=du;js=!1,du=null}else throw Error($(198));fu||(fu=!0,mf=c)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xy(t){if(Li(t)!==t)throw Error($(188))}function FP(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Xy(i),t;if(o===r)return Xy(i),e;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function Ww(t){return t=FP(t),t!==null?qw(t):null}function qw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qw(t);if(e!==null)return e;t=t.sibling}return null}var Kw=Gt.unstable_scheduleCallback,Jy=Gt.unstable_cancelCallback,UP=Gt.unstable_shouldYield,$P=Gt.unstable_requestPaint,$e=Gt.unstable_now,zP=Gt.unstable_getCurrentPriorityLevel,Yp=Gt.unstable_ImmediatePriority,Gw=Gt.unstable_UserBlockingPriority,pu=Gt.unstable_NormalPriority,BP=Gt.unstable_LowPriority,Qw=Gt.unstable_IdlePriority,_c=null,Rn=null;function HP(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:KP,WP=Math.log,qP=Math.LN2;function KP(t){return t>>>=0,t===0?32:31-(WP(t)/qP|0)|0}var hl=64,dl=4194304;function ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ks(a):(o&=s,o!==0&&(r=ks(o)))}else s=n&~i,s!==0?r=ks(s):o!==0&&(r=ks(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function GP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-vn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=GP(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yw(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function YP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Xp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function Xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jw,Jp,Zw,e1,t1,yf=!1,fl=[],kr=null,xr=null,br=null,na=new Map,ra=new Map,wr=[],XP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zy(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function vs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=xa(e),e!==null&&Jp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JP(t,e,n,r,i){switch(e){case"focusin":return kr=vs(kr,t,e,n,r,i),!0;case"dragenter":return xr=vs(xr,t,e,n,r,i),!0;case"mouseover":return br=vs(br,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return na.set(o,vs(na.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ra.set(o,vs(ra.get(o)||null,t,e,n,r,i)),!0}return!1}function n1(t){var e=si(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=Hw(n),e!==null){t.blockedOn=e,t1(t.priority,function(){Zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);df=r,n.target.dispatchEvent(r),df=null}else return e=xa(n),e!==null&&Jp(e),t.blockedOn=n,!1;e.shift()}return!0}function ev(t,e,n){Fl(t)&&n.delete(e)}function ZP(){yf=!1,kr!==null&&Fl(kr)&&(kr=null),xr!==null&&Fl(xr)&&(xr=null),br!==null&&Fl(br)&&(br=null),na.forEach(ev),ra.forEach(ev)}function _s(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,ZP)))}function ia(t){function e(i){return _s(i,t)}if(0<fl.length){_s(fl[0],t);for(var n=1;n<fl.length;n++){var r=fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&_s(kr,t),xr!==null&&_s(xr,t),br!==null&&_s(br,t),na.forEach(e),ra.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)n1(n),n.blockedOn===null&&wr.shift()}var uo=lr.ReactCurrentBatchConfig,gu=!0;function eC(t,e,n,r){var i=Ee,o=uo.transition;uo.transition=null;try{Ee=1,Zp(t,e,n,r)}finally{Ee=i,uo.transition=o}}function tC(t,e,n,r){var i=Ee,o=uo.transition;uo.transition=null;try{Ee=4,Zp(t,e,n,r)}finally{Ee=i,uo.transition=o}}function Zp(t,e,n,r){if(gu){var i=vf(t,e,n,r);if(i===null)ad(t,e,r,yu,n),Zy(t,r);else if(JP(i,t,e,n,r))r.stopPropagation();else if(Zy(t,r),e&4&&-1<XP.indexOf(t)){for(;i!==null;){var o=xa(i);if(o!==null&&Jw(o),o=vf(t,e,n,r),o===null&&ad(t,e,r,yu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var yu=null;function vf(t,e,n,r){if(yu=null,t=Qp(r),t=si(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function r1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zP()){case Yp:return 1;case Gw:return 4;case pu:case BP:return 16;case Qw:return 536870912;default:return 16}default:return 16}}var Ar=null,em=null,Ul=null;function i1(){if(Ul)return Ul;var t,e=em,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ul=i.slice(t,1<r?1-r:void 0)}function $l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function tv(){return!1}function Jt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pl:tv,this.isPropagationStopped=tv,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tm=Jt(Go),ka=je({},Go,{view:0,detail:0}),nC=Jt(ka),Jh,Zh,ws,wc=je({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Jh=t.screenX-ws.screenX,Zh=t.screenY-ws.screenY):Zh=Jh=0,ws=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),nv=Jt(wc),rC=je({},wc,{dataTransfer:0}),iC=Jt(rC),oC=je({},ka,{relatedTarget:0}),ed=Jt(oC),sC=je({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),aC=Jt(sC),lC=je({},Go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uC=Jt(lC),cC=je({},Go,{data:0}),rv=Jt(cC),hC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fC[t])?!!e[t]:!1}function nm(){return pC}var mC=je({},ka,{key:function(t){if(t.key){var e=hC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nm,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gC=Jt(mC),yC=je({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iv=Jt(yC),vC=je({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nm}),_C=Jt(vC),wC=je({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),EC=Jt(wC),SC=je({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TC=Jt(SC),IC=[9,13,27,32],rm=tr&&"CompositionEvent"in window,Fs=null;tr&&"documentMode"in document&&(Fs=document.documentMode);var AC=tr&&"TextEvent"in window&&!Fs,o1=tr&&(!rm||Fs&&8<Fs&&11>=Fs),ov=" ",sv=!1;function s1(t,e){switch(t){case"keyup":return IC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function PC(t,e){switch(t){case"compositionend":return a1(e);case"keypress":return e.which!==32?null:(sv=!0,ov);case"textInput":return t=e.data,t===ov&&sv?null:t;default:return null}}function CC(t,e){if(Qi)return t==="compositionend"||!rm&&s1(t,e)?(t=i1(),Ul=em=Ar=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o1&&e.locale!=="ko"?null:e.data;default:return null}}var RC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RC[t.type]:e==="textarea"}function l1(t,e,n,r){Fw(r),e=vu(e,"onChange"),0<e.length&&(n=new tm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Us=null,oa=null;function kC(t){_1(t,0)}function Ec(t){var e=Ji(t);if(Ow(e))return t}function xC(t,e){if(t==="change")return e}var u1=!1;if(tr){var td;if(tr){var nd="oninput"in document;if(!nd){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),nd=typeof lv.oninput=="function"}td=nd}else td=!1;u1=td&&(!document.documentMode||9<document.documentMode)}function uv(){Us&&(Us.detachEvent("onpropertychange",c1),oa=Us=null)}function c1(t){if(t.propertyName==="value"&&Ec(oa)){var e=[];l1(e,oa,t,Qp(t)),Bw(kC,e)}}function bC(t,e,n){t==="focusin"?(uv(),Us=e,oa=n,Us.attachEvent("onpropertychange",c1)):t==="focusout"&&uv()}function OC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(oa)}function NC(t,e){if(t==="click")return Ec(e)}function DC(t,e){if(t==="input"||t==="change")return Ec(e)}function LC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:LC;function sa(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zd.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,e){var n=cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cv(n)}}function h1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d1(){for(var t=window,e=hu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hu(t.document)}return e}function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MC(t){var e=d1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h1(n.ownerDocument.documentElement,n)){if(r!==null&&im(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=hv(n,o);var s=hv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VC=tr&&"documentMode"in document&&11>=document.documentMode,Yi=null,_f=null,$s=null,wf=!1;function dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||Yi==null||Yi!==hu(r)||(r=Yi,"selectionStart"in r&&im(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$s&&sa($s,r)||($s=r,r=vu(_f,"onSelect"),0<r.length&&(e=new tm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},rd={},f1={};tr&&(f1=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Sc(t){if(rd[t])return rd[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f1)return rd[t]=e[n];return t}var p1=Sc("animationend"),m1=Sc("animationiteration"),g1=Sc("animationstart"),y1=Sc("transitionend"),v1=new Map,fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){v1.set(t,e),Di(e,[t])}for(var id=0;id<fv.length;id++){var od=fv[id],jC=od.toLowerCase(),FC=od[0].toUpperCase()+od.slice(1);Qr(jC,"on"+FC)}Qr(p1,"onAnimationEnd");Qr(m1,"onAnimationIteration");Qr(g1,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(y1,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Di("onBeforeInput",["compositionend","keypress","textInput","paste"]);Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UC=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jP(r,e,void 0,t),t.currentTarget=null}function _1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;pv(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;pv(i,a,c),o=u}}}if(fu)throw t=mf,fu=!1,mf=null,t}function ke(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var r=t+"__bubble";n.has(r)||(w1(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),w1(n,t,r,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[gl]){t[gl]=!0,Cw.forEach(function(n){n!=="selectionchange"&&(UC.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,sd("selectionchange",!1,e))}}function w1(t,e,n,r){switch(r1(e)){case 1:var i=eC;break;case 4:i=tC;break;default:i=Zp}n=i.bind(null,e,n,t),i=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=si(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Bw(function(){var c=o,d=Qp(n),p=[];e:{var m=v1.get(t);if(m!==void 0){var T=tm,A=t;switch(t){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":T=gC;break;case"focusin":A="focus",T=ed;break;case"focusout":A="blur",T=ed;break;case"beforeblur":case"afterblur":T=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=iC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=_C;break;case p1:case m1:case g1:T=aC;break;case y1:T=EC;break;case"scroll":T=nC;break;case"wheel":T=TC;break;case"copy":case"cut":case"paste":T=uC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=iv}var R=(e&4)!==0,b=!R&&t==="scroll",I=R?m!==null?m+"Capture":null:m;R=[];for(var y=c,S;y!==null;){S=y;var k=S.stateNode;if(S.tag===5&&k!==null&&(S=k,I!==null&&(k=ta(y,I),k!=null&&R.push(la(y,k,S)))),b)break;y=y.return}0<R.length&&(m=new T(m,A,null,n,d),p.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==df&&(A=n.relatedTarget||n.fromElement)&&(si(A)||A[nr]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(A=n.relatedTarget||n.toElement,T=c,A=A?si(A):null,A!==null&&(b=Li(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(T=null,A=c),T!==A)){if(R=nv,k="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(R=iv,k="onPointerLeave",I="onPointerEnter",y="pointer"),b=T==null?m:Ji(T),S=A==null?m:Ji(A),m=new R(k,y+"leave",T,n,d),m.target=b,m.relatedTarget=S,k=null,si(d)===c&&(R=new R(I,y+"enter",A,n,d),R.target=S,R.relatedTarget=b,k=R),b=k,T&&A)t:{for(R=T,I=A,y=0,S=R;S;S=zi(S))y++;for(S=0,k=I;k;k=zi(k))S++;for(;0<y-S;)R=zi(R),y--;for(;0<S-y;)I=zi(I),S--;for(;y--;){if(R===I||I!==null&&R===I.alternate)break t;R=zi(R),I=zi(I)}R=null}else R=null;T!==null&&mv(p,m,T,R,!1),A!==null&&b!==null&&mv(p,b,A,R,!0)}}e:{if(m=c?Ji(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var N=xC;else if(av(m))if(u1)N=DC;else{N=OC;var O=bC}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=NC);if(N&&(N=N(t,c))){l1(p,N,n,d);break e}O&&O(t,m,c),t==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&af(m,"number",m.value)}switch(O=c?Ji(c):window,t){case"focusin":(av(O)||O.contentEditable==="true")&&(Yi=O,_f=c,$s=null);break;case"focusout":$s=_f=Yi=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,dv(p,n,d);break;case"selectionchange":if(VC)break;case"keydown":case"keyup":dv(p,n,d)}var v;if(rm)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Qi?s1(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(o1&&n.locale!=="ko"&&(Qi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Qi&&(v=i1()):(Ar=d,em="value"in Ar?Ar.value:Ar.textContent,Qi=!0)),O=vu(c,g),0<O.length&&(g=new rv(g,t,null,n,d),p.push({event:g,listeners:O}),v?g.data=v:(v=a1(n),v!==null&&(g.data=v)))),(v=AC?PC(t,n):CC(t,n))&&(c=vu(c,"onBeforeInput"),0<c.length&&(d=new rv("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}_1(p,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ta(t,n),o!=null&&r.unshift(la(t,o,i)),o=ta(t,e),o!=null&&r.push(la(t,o,i))),t=t.return}return r}function zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ta(n,o),u!=null&&s.unshift(la(n,u,a))):i||(u=ta(n,o),u!=null&&s.push(la(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $C=/\r\n?/g,zC=/\u0000|\uFFFD/g;function gv(t){return(typeof t=="string"?t:""+t).replace($C,`
`).replace(zC,"")}function yl(t,e,n){if(e=gv(e),gv(t)!==e&&n)throw Error($(425))}function _u(){}var Ef=null,Sf=null;function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,BC=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(t){return yv.resolve(null).then(t).catch(WC)}:If;function WC(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ia(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ia(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Qo,ua="__reactProps$"+Qo,nr="__reactContainer$"+Qo,Af="__reactEvents$"+Qo,qC="__reactListeners$"+Qo,KC="__reactHandles$"+Qo;function si(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vv(t);t!==null;){if(n=t[Pn])return n;t=vv(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[Pn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Tc(t){return t[ua]||null}var Pf=[],Zi=-1;function Yr(t){return{current:t}}function be(t){0>Zi||(t.current=Pf[Zi],Pf[Zi]=null,Zi--)}function Ce(t,e){Zi++,Pf[Zi]=t.current,t.current=e}var zr={},wt=Yr(zr),Mt=Yr(!1),_i=zr;function Eo(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function wu(){be(Mt),be(wt)}function _v(t,e,n){if(wt.current!==zr)throw Error($(168));Ce(wt,e),Ce(Mt,n)}function E1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,bP(t)||"Unknown",i));return je({},n,r)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,_i=wt.current,Ce(wt,t),Ce(Mt,Mt.current),!0}function wv(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=E1(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,be(Mt),be(wt),Ce(wt,t)):be(Mt),Ce(Mt,n)}var qn=null,Ic=!1,ud=!1;function S1(t){qn===null?qn=[t]:qn.push(t)}function GC(t){Ic=!0,S1(t)}function Xr(){if(!ud&&qn!==null){ud=!0;var t=0,e=Ee;try{var n=qn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Ic=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),Kw(Yp,Xr),i}finally{Ee=e,ud=!1}}return null}var eo=[],to=0,Su=null,Tu=0,rn=[],on=0,wi=null,Gn=1,Qn="";function ni(t,e){eo[to++]=Tu,eo[to++]=Su,Su=t,Tu=e}function T1(t,e,n){rn[on++]=Gn,rn[on++]=Qn,rn[on++]=wi,wi=t;var r=Gn;t=Qn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var o=32-vn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gn=1<<32-vn(e)+i|n<<i|r,Qn=o+t}else Gn=1<<o|n<<i|r,Qn=t}function om(t){t.return!==null&&(ni(t,1),T1(t,1,0))}function sm(t){for(;t===Su;)Su=eo[--to],eo[to]=null,Tu=eo[--to],eo[to]=null;for(;t===wi;)wi=rn[--on],rn[on]=null,Qn=rn[--on],rn[on]=null,Gn=rn[--on],rn[on]=null}var Kt=null,Ht=null,Ne=!1,mn=null;function I1(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ev(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:Gn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rf(t){if(Ne){var e=Ht;if(e){var n=e;if(!Ev(t,e)){if(Cf(t))throw Error($(418));e=Or(n.nextSibling);var r=Kt;e&&Ev(t,e)?I1(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Kt=t)}}else{if(Cf(t))throw Error($(418));t.flags=t.flags&-4097|2,Ne=!1,Kt=t}}}function Sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function vl(t){if(t!==Kt)return!1;if(!Ne)return Sv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tf(t.type,t.memoizedProps)),e&&(e=Ht)){if(Cf(t))throw A1(),Error($(418));for(;e;)I1(t,e),e=Or(e.nextSibling)}if(Sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?Or(t.stateNode.nextSibling):null;return!0}function A1(){for(var t=Ht;t;)t=Or(t.nextSibling)}function So(){Ht=Kt=null,Ne=!1}function am(t){mn===null?mn=[t]:mn.push(t)}var QC=lr.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tv(t){var e=t._init;return e(t._payload)}function P1(t){function e(I,y){if(t){var S=I.deletions;S===null?(I.deletions=[y],I.flags|=16):S.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=Mr(I,y),I.index=0,I.sibling=null,I}function o(I,y,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<y?(I.flags|=2,y):S):(I.flags|=2,y)):(I.flags|=1048576,y)}function s(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,y,S,k){return y===null||y.tag!==6?(y=gd(S,I.mode,k),y.return=I,y):(y=i(y,S),y.return=I,y)}function u(I,y,S,k){var N=S.type;return N===Gi?d(I,y,S.props.children,k,S.key):y!==null&&(y.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yr&&Tv(N)===y.type)?(k=i(y,S.props),k.ref=Es(I,y,S),k.return=I,k):(k=Gl(S.type,S.key,S.props,null,I.mode,k),k.ref=Es(I,y,S),k.return=I,k)}function c(I,y,S,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=yd(S,I.mode,k),y.return=I,y):(y=i(y,S.children||[]),y.return=I,y)}function d(I,y,S,k,N){return y===null||y.tag!==7?(y=fi(S,I.mode,k,N),y.return=I,y):(y=i(y,S),y.return=I,y)}function p(I,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=gd(""+y,I.mode,S),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return S=Gl(y.type,y.key,y.props,null,I.mode,S),S.ref=Es(I,null,y),S.return=I,S;case Ki:return y=yd(y,I.mode,S),y.return=I,y;case yr:var k=y._init;return p(I,k(y._payload),S)}if(Rs(y)||gs(y))return y=fi(y,I.mode,S,null),y.return=I,y;_l(I,y)}return null}function m(I,y,S,k){var N=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return N!==null?null:a(I,y,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ll:return S.key===N?u(I,y,S,k):null;case Ki:return S.key===N?c(I,y,S,k):null;case yr:return N=S._init,m(I,y,N(S._payload),k)}if(Rs(S)||gs(S))return N!==null?null:d(I,y,S,k,null);_l(I,S)}return null}function T(I,y,S,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return I=I.get(S)||null,a(y,I,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ll:return I=I.get(k.key===null?S:k.key)||null,u(y,I,k,N);case Ki:return I=I.get(k.key===null?S:k.key)||null,c(y,I,k,N);case yr:var O=k._init;return T(I,y,S,O(k._payload),N)}if(Rs(k)||gs(k))return I=I.get(S)||null,d(y,I,k,N,null);_l(y,k)}return null}function A(I,y,S,k){for(var N=null,O=null,v=y,g=y=0,_=null;v!==null&&g<S.length;g++){v.index>g?(_=v,v=null):_=v.sibling;var E=m(I,v,S[g],k);if(E===null){v===null&&(v=_);break}t&&v&&E.alternate===null&&e(I,v),y=o(E,y,g),O===null?N=E:O.sibling=E,O=E,v=_}if(g===S.length)return n(I,v),Ne&&ni(I,g),N;if(v===null){for(;g<S.length;g++)v=p(I,S[g],k),v!==null&&(y=o(v,y,g),O===null?N=v:O.sibling=v,O=v);return Ne&&ni(I,g),N}for(v=r(I,v);g<S.length;g++)_=T(v,I,g,S[g],k),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?g:_.key),y=o(_,y,g),O===null?N=_:O.sibling=_,O=_);return t&&v.forEach(function(C){return e(I,C)}),Ne&&ni(I,g),N}function R(I,y,S,k){var N=gs(S);if(typeof N!="function")throw Error($(150));if(S=N.call(S),S==null)throw Error($(151));for(var O=N=null,v=y,g=y=0,_=null,E=S.next();v!==null&&!E.done;g++,E=S.next()){v.index>g?(_=v,v=null):_=v.sibling;var C=m(I,v,E.value,k);if(C===null){v===null&&(v=_);break}t&&v&&C.alternate===null&&e(I,v),y=o(C,y,g),O===null?N=C:O.sibling=C,O=C,v=_}if(E.done)return n(I,v),Ne&&ni(I,g),N;if(v===null){for(;!E.done;g++,E=S.next())E=p(I,E.value,k),E!==null&&(y=o(E,y,g),O===null?N=E:O.sibling=E,O=E);return Ne&&ni(I,g),N}for(v=r(I,v);!E.done;g++,E=S.next())E=T(v,I,g,E.value,k),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?g:E.key),y=o(E,y,g),O===null?N=E:O.sibling=E,O=E);return t&&v.forEach(function(x){return e(I,x)}),Ne&&ni(I,g),N}function b(I,y,S,k){if(typeof S=="object"&&S!==null&&S.type===Gi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ll:e:{for(var N=S.key,O=y;O!==null;){if(O.key===N){if(N=S.type,N===Gi){if(O.tag===7){n(I,O.sibling),y=i(O,S.props.children),y.return=I,I=y;break e}}else if(O.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yr&&Tv(N)===O.type){n(I,O.sibling),y=i(O,S.props),y.ref=Es(I,O,S),y.return=I,I=y;break e}n(I,O);break}else e(I,O);O=O.sibling}S.type===Gi?(y=fi(S.props.children,I.mode,k,S.key),y.return=I,I=y):(k=Gl(S.type,S.key,S.props,null,I.mode,k),k.ref=Es(I,y,S),k.return=I,I=k)}return s(I);case Ki:e:{for(O=S.key;y!==null;){if(y.key===O)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(I,y.sibling),y=i(y,S.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=yd(S,I.mode,k),y.return=I,I=y}return s(I);case yr:return O=S._init,b(I,y,O(S._payload),k)}if(Rs(S))return A(I,y,S,k);if(gs(S))return R(I,y,S,k);_l(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,S),y.return=I,I=y):(n(I,y),y=gd(S,I.mode,k),y.return=I,I=y),s(I)):n(I,y)}return b}var To=P1(!0),C1=P1(!1),Iu=Yr(null),Au=null,no=null,lm=null;function um(){lm=no=Au=null}function cm(t){var e=Iu.current;be(Iu),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function co(t,e){Au=t,lm=no=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(lm!==t)if(t={context:t,memoizedValue:e,next:null},no===null){if(Au===null)throw Error($(308));no=t,Au.dependencies={lanes:0,firstContext:t}}else no=no.next=t;return e}var ai=null;function hm(t){ai===null?ai=[t]:ai.push(t)}function R1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hm(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,hm(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xp(t,n)}}function Iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pu(t,e,n,r){var i=t.updateQueue;vr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,d=c=u=null,a=o;do{var m=a.lane,T=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=t,R=a;switch(m=e,T=n,R.tag){case 1:if(A=R.payload,typeof A=="function"){p=A.call(T,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,m=typeof A=="function"?A.call(T,p,m):A,m==null)break e;p=je({},p,m);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else T={eventTime:T,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=T,u=p):d=d.next=T,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Si|=s,t.lanes=s,t.memoizedState=p}}function Av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ba={},kn=Yr(ba),ca=Yr(ba),ha=Yr(ba);function li(t){if(t===ba)throw Error($(174));return t}function fm(t,e){switch(Ce(ha,e),Ce(ca,t),Ce(kn,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}be(kn),Ce(kn,e)}function Io(){be(kn),be(ca),be(ha)}function x1(t){li(ha.current);var e=li(kn.current),n=uf(e,t.type);e!==n&&(Ce(ca,t),Ce(kn,n))}function pm(t){ca.current===t&&(be(kn),be(ca))}var Me=Yr(0);function Cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function mm(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var Bl=lr.ReactCurrentDispatcher,hd=lr.ReactCurrentBatchConfig,Ei=0,Ve=null,Qe=null,Ze=null,Ru=!1,zs=!1,da=0,YC=0;function pt(){throw Error($(321))}function gm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function ym(t,e,n,r,i,o){if(Ei=o,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?eR:tR,t=n(r,i),zs){o=0;do{if(zs=!1,da=0,25<=o)throw Error($(301));o+=1,Ze=Qe=null,e.updateQueue=null,Bl.current=nR,t=n(r,i)}while(zs)}if(Bl.current=ku,e=Qe!==null&&Qe.next!==null,Ei=0,Ze=Qe=Ve=null,Ru=!1,e)throw Error($(300));return t}function vm(){var t=da!==0;return da=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ve.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function un(){if(Qe===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=Ze===null?Ve.memoizedState:Ze.next;if(e!==null)Ze=e,Qe=t;else{if(t===null)throw Error($(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?Ve.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function fa(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=un(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var d=c.lane;if((Ei&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,Ve.lanes|=d,Si|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Sn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ve.lanes|=o,Si|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fd(t){var e=un(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Sn(o,e.memoizedState)||(Dt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function b1(){}function O1(t,e){var n=Ve,r=un(),i=e(),o=!Sn(r.memoizedState,i);if(o&&(r.memoizedState=i,Dt=!0),r=r.queue,_m(L1.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,pa(9,D1.bind(null,n,r,i,e),void 0,null),tt===null)throw Error($(349));Ei&30||N1(n,e,i)}return i}function N1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D1(t,e,n,r){e.value=n,e.getSnapshot=r,M1(e)&&V1(t)}function L1(t,e,n){return n(function(){M1(e)&&V1(t)})}function M1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function V1(t){var e=rr(t,1);e!==null&&_n(e,t,1,-1)}function Pv(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=ZC.bind(null,Ve,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function j1(){return un().memoizedState}function Hl(t,e,n,r){var i=In();Ve.flags|=t,i.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function Ac(t,e,n,r){var i=un();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var s=Qe.memoizedState;if(o=s.destroy,r!==null&&gm(r,s.deps)){i.memoizedState=pa(e,n,o,r);return}}Ve.flags|=t,i.memoizedState=pa(1|e,n,o,r)}function Cv(t,e){return Hl(8390656,8,t,e)}function _m(t,e){return Ac(2048,8,t,e)}function F1(t,e){return Ac(4,2,t,e)}function U1(t,e){return Ac(4,4,t,e)}function $1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z1(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4,4,$1.bind(null,e,t),n)}function wm(){}function B1(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function H1(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W1(t,e,n){return Ei&21?(Sn(n,e)||(n=Yw(),Ve.lanes|=n,Si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function XC(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=hd.transition;hd.transition={};try{t(!1),e()}finally{Ee=n,hd.transition=r}}function q1(){return un().memoizedState}function JC(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K1(t))G1(e,n);else if(n=R1(t,e,n,r),n!==null){var i=Rt();_n(n,t,r,i),Q1(n,e,r)}}function ZC(t,e,n){var r=Lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K1(t))G1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,s)){var u=e.interleaved;u===null?(i.next=i,hm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=R1(t,e,i,r),n!==null&&(i=Rt(),_n(n,t,r,i),Q1(n,e,r))}}function K1(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function G1(t,e){zs=Ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xp(t,n)}}var ku={readContext:ln,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},eR={readContext:ln,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Cv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,$1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JC.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:Pv,useDebugValue:wm,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=Pv(!1),e=t[0];return t=XC.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=In();if(Ne){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),tt===null)throw Error($(349));Ei&30||N1(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Cv(L1.bind(null,r,o,t),[t]),r.flags|=2048,pa(9,D1.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=In(),e=tt.identifierPrefix;if(Ne){var n=Qn,r=Gn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tR={readContext:ln,useCallback:B1,useContext:ln,useEffect:_m,useImperativeHandle:z1,useInsertionEffect:F1,useLayoutEffect:U1,useMemo:H1,useReducer:dd,useRef:j1,useState:function(){return dd(fa)},useDebugValue:wm,useDeferredValue:function(t){var e=un();return W1(e,Qe.memoizedState,t)},useTransition:function(){var t=dd(fa)[0],e=un().memoizedState;return[t,e]},useMutableSource:b1,useSyncExternalStore:O1,useId:q1,unstable_isNewReconciler:!1},nR={readContext:ln,useCallback:B1,useContext:ln,useEffect:_m,useImperativeHandle:z1,useInsertionEffect:F1,useLayoutEffect:U1,useMemo:H1,useReducer:fd,useRef:j1,useState:function(){return fd(fa)},useDebugValue:wm,useDeferredValue:function(t){var e=un();return Qe===null?e.memoizedState=t:W1(e,Qe.memoizedState,t)},useTransition:function(){var t=fd(fa)[0],e=un().memoizedState;return[t,e]},useMutableSource:b1,useSyncExternalStore:O1,useId:q1,unstable_isNewReconciler:!1};function fn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=Lr(t),o=er(r,i);o.payload=e,n!=null&&(o.callback=n),e=Nr(t,o,i),e!==null&&(_n(e,t,i,r),zl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=Lr(t),o=er(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Nr(t,o,i),e!==null&&(_n(e,t,i,r),zl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=Lr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(_n(e,t,r,n),zl(e,t,r))}};function Rv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,o):!0}function Y1(t,e,n){var r=!1,i=zr,o=e.contextType;return typeof o=="object"&&o!==null?o=ln(o):(i=Vt(e)?_i:wt.current,r=e.contextTypes,o=(r=r!=null)?Eo(t,i):zr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function bf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},dm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ln(o):(o=Vt(e)?_i:wt.current,i.context=Eo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(xf(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pc.enqueueReplaceState(i,i.state,null),Pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=xP(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rR=typeof WeakMap=="function"?WeakMap:Map;function X1(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bu||(bu=!0,zf=r),Of(t,e)},n}function J1(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Of(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Of(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new rR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yR.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ov(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var iR=lr.ReactCurrentOwner,Dt=!1;function Pt(t,e,n,r){e.child=t===null?C1(e,null,n,r):To(e,t.child,n,r)}function Nv(t,e,n,r,i){n=n.render;var o=e.ref;return co(e,i),r=ym(t,e,n,r,o,i),n=vm(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Ne&&n&&om(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Dv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Rm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Z1(t,e,o,r,i)):(t=Gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(s,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=Mr(o,r),t.ref=e.ref,t.return=e,e.child=t}function Z1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(sa(o,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Nf(t,e,n,r,i)}function eE(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(io,Bt),Bt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(io,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(io,Bt),Bt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ce(io,Bt),Bt|=r;return Pt(t,e,i,n),e.child}function tE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,r,i){var o=Vt(n)?_i:wt.current;return o=Eo(e,o),co(e,i),n=ym(t,e,n,r,o,i),r=vm(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Ne&&r&&om(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Lv(t,e,n,r,i){if(Vt(n)){var o=!0;Eu(e)}else o=!1;if(co(e,i),e.stateNode===null)Wl(t,e),Y1(e,n,r),bf(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=Vt(n)?_i:wt.current,c=Eo(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&kv(e,s,r,c),vr=!1;var m=e.memoizedState;s.state=m,Pu(e,r,s,i),u=e.memoizedState,a!==r||m!==u||Mt.current||vr?(typeof d=="function"&&(xf(e,n,d,r),u=e.memoizedState),(a=vr||Rv(e,n,a,r,m,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,k1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fn(e.type,a),s.props=c,p=e.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=Vt(n)?_i:wt.current,u=Eo(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==u)&&kv(e,s,r,u),vr=!1,m=e.memoizedState,s.state=m,Pu(e,r,s,i);var A=e.memoizedState;a!==p||m!==A||Mt.current||vr?(typeof T=="function"&&(xf(e,n,T,r),A=e.memoizedState),(c=vr||Rv(e,n,c,r,m,A,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,A,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,A,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),s.props=r,s.state=A,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,o,i)}function Df(t,e,n,r,i,o){tE(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&wv(e,n,!1),ir(t,e,o);r=e.stateNode,iR.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=To(e,t.child,null,o),e.child=To(e,null,a,o)):Pt(t,e,a,o),e.memoizedState=r.state,i&&wv(e,n,!0),e.child}function nE(t){var e=t.stateNode;e.pendingContext?_v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_v(t,e.context,!1),fm(t,e.containerInfo)}function Mv(t,e,n,r,i){return So(),am(i),e.flags|=256,Pt(t,e,n,r),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rE(t,e,n){var r=e.pendingProps,i=Me.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(Me,i&1),t===null)return Rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=kc(s,r,0,null),t=fi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Mf(n),e.memoizedState=Lf,t):Em(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oR(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mr(a,o):(o=fi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Mf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Lf,r}return o=t.child,t=o.sibling,r=Mr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Em(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,r){return r!==null&&am(r),To(e,t.child,null,n),t=Em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oR(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error($(422))),wl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=kc({mode:"visible",children:r.children},i,0,null),o=fi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&To(e,t.child,null,s),e.child.memoizedState=Mf(s),e.memoizedState=Lf,o);if(!(e.mode&1))return wl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error($(419)),r=pd(o,r,void 0),wl(t,e,s,r)}if(a=(s&t.childLanes)!==0,Dt||a){if(r=tt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rr(t,i),_n(r,t,i,-1))}return Cm(),r=pd(Error($(421))),wl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vR.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ht=Or(i.nextSibling),Kt=e,Ne=!0,mn=null,t!==null&&(rn[on++]=Gn,rn[on++]=Qn,rn[on++]=wi,Gn=t.id,Qn=t.overflow,wi=e),e=Em(e,r.children),e.flags|=4096,e)}function Vv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function md(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function iE(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Pt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vv(t,n,e);else if(t.tag===19)Vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,o);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sR(t,e,n){switch(e.tag){case 3:nE(e),So();break;case 5:x1(e);break;case 1:Vt(e.type)&&Eu(e);break;case 4:fm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?rE(t,e,n):(Ce(Me,Me.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Ce(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,eE(t,e,n)}return ir(t,e,n)}var oE,Vf,sE,aE;oE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};sE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(kn.current);var o=null;switch(n){case"input":i=of(t,i),r=of(t,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=lf(t,i),r=lf(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_u)}cf(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ke("scroll",t),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};aE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function aR(t,e,n){var r=e.pendingProps;switch(sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Vt(e.type)&&wu(),mt(e),null;case 3:return r=e.stateNode,Io(),be(Mt),be(wt),mm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(Wf(mn),mn=null))),Vf(t,e),mt(e),null;case 5:pm(e);var i=li(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)sE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return mt(e),null}if(t=li(kn.current),vl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Pn]=e,r[ua]=o,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)ke(xs[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":qy(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":Gy(r,o),ke("invalid",r)}cf(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",""+a]):Zs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ke("scroll",r)}switch(n){case"input":ul(r),Ky(r,o,!0);break;case"textarea":ul(r),Qy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_u)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Pn]=e,t[ua]=r,oE(t,e,!1,!1),e.stateNode=t;e:{switch(s=hf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)ke(xs[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":qy(t,r),i=of(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),ke("invalid",t);break;case"textarea":Gy(t,r),i=lf(t,r),ke("invalid",t);break;default:i=r}cf(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?jw(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mw(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ea(t,u):typeof u=="number"&&ea(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ke("scroll",t):u!=null&&Wp(t,o,u,s))}switch(n){case"input":ul(t),Ky(t,r,!1);break;case"textarea":ul(t),Qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?so(t,!!r.multiple,o,!1):r.defaultValue!=null&&so(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_u)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)aE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=li(ha.current),li(kn.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(o=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return mt(e),null;case 13:if(be(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Ht!==null&&e.mode&1&&!(e.flags&128))A1(),So(),e.flags|=98560,o=!1;else if(o=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error($(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Pn]=e}else So(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),o=!1}else mn!==null&&(Wf(mn),mn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?Xe===0&&(Xe=3):Cm())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Io(),Vf(t,e),t===null&&aa(e.stateNode.containerInfo),mt(e),null;case 10:return cm(e.type._context),mt(e),null;case 17:return Vt(e.type)&&wu(),mt(e),null;case 19:if(be(Me),o=e.memoizedState,o===null)return mt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ss(o,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Cu(t),s!==null){for(e.flags|=128,Ss(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Me,Me.current&1|2),e.child}t=t.sibling}o.tail!==null&&$e()>Po&&(e.flags|=128,r=!0,Ss(o,!1),e.lanes=4194304)}else{if(!r)if(t=Cu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return mt(e),null}else 2*$e()-o.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,r=!0,Ss(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=$e(),e.sibling=null,n=Me.current,Ce(Me,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function lR(t,e){switch(sm(e),e.tag){case 1:return Vt(e.type)&&wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),be(Mt),be(wt),mm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pm(e),null;case 13:if(be(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));So()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Me),null;case 4:return Io(),null;case 10:return cm(e.type._context),null;case 22:case 23:return Pm(),null;case 24:return null;default:return null}}var El=!1,vt=!1,uR=typeof WeakSet=="function"?WeakSet:Set,G=null;function ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function jf(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var jv=!1;function cR(t,e){if(Ef=gu,t=d1(),im(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(a=s),m===o&&++d===r&&(u=s),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},gu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,b=A.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?R:fn(e.type,R),b);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(k){Ue(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return A=jv,jv=!1,A}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&jf(e,n,o)}i=i.next}while(i!==r)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lE(t){var e=t.alternate;e!==null&&(t.alternate=null,lE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[ua],delete e[Af],delete e[qC],delete e[KC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uE(t){return t.tag===5||t.tag===3||t.tag===4}function Fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_u));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var ot=null,pn=!1;function pr(t,e,n){for(n=n.child;n!==null;)cE(t,e,n),n=n.sibling}function cE(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:vt||ro(n,e);case 6:var r=ot,i=pn;ot=null,pr(t,e,n),ot=r,pn=i,ot!==null&&(pn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(pn?(t=ot,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),ia(t)):ld(ot,n.stateNode));break;case 4:r=ot,i=pn,ot=n.stateNode.containerInfo,pn=!0,pr(t,e,n),ot=r,pn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jf(n,e,s),i=i.next}while(i!==r)}pr(t,e,n);break;case 1:if(!vt&&(ro(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,pr(t,e,n),vt=r):pr(t,e,n);break;default:pr(t,e,n)}}function Uv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uR),e.forEach(function(r){var i=_R.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,pn=!1;break e;case 3:ot=a.stateNode.containerInfo,pn=!0;break e;case 4:ot=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(ot===null)throw Error($(160));cE(o,s,i),ot=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hE(e,t),e=e.sibling}function hE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),Tn(t),r&4){try{Bs(3,t,t.return),Cc(3,t)}catch(R){Ue(t,t.return,R)}try{Bs(5,t,t.return)}catch(R){Ue(t,t.return,R)}}break;case 1:dn(e,t),Tn(t),r&512&&n!==null&&ro(n,n.return);break;case 5:if(dn(e,t),Tn(t),r&512&&n!==null&&ro(n,n.return),t.flags&32){var i=t.stateNode;try{ea(i,"")}catch(R){Ue(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Nw(i,o),hf(a,s);var c=hf(a,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?jw(i,p):d==="dangerouslySetInnerHTML"?Mw(i,p):d==="children"?ea(i,p):Wp(i,d,p,c)}switch(a){case"input":sf(i,o);break;case"textarea":Dw(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?so(i,!!o.multiple,T,!1):m!==!!o.multiple&&(o.defaultValue!=null?so(i,!!o.multiple,o.defaultValue,!0):so(i,!!o.multiple,o.multiple?[]:"",!1))}i[ua]=o}catch(R){Ue(t,t.return,R)}}break;case 6:if(dn(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(R){Ue(t,t.return,R)}}break;case 3:if(dn(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(R){Ue(t,t.return,R)}break;case 4:dn(e,t),Tn(t);break;case 13:dn(e,t),Tn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Im=$e())),r&4&&Uv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||d,dn(e,t),vt=c):dn(e,t),Tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(p=G=d;G!==null;){switch(m=G,T=m.child,m.tag){case 0:case 11:case 14:case 15:Bs(4,m,m.return);break;case 1:ro(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(R){Ue(r,n,R)}}break;case 5:ro(m,m.return);break;case 22:if(m.memoizedState!==null){zv(p);continue}}T!==null?(T.return=m,G=T):zv(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Vw("display",s))}catch(R){Ue(t,t.return,R)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){Ue(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(e,t),Tn(t),r&4&&Uv(t);break;case 21:break;default:dn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ea(i,""),r.flags&=-33);var o=Fv(t);$f(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Fv(t);Uf(t,a,s);break;default:throw Error($(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hR(t,e,n){G=t,dE(t)}function dE(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||El;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||vt;a=El;var c=vt;if(El=s,(vt=u)&&!c)for(G=i;G!==null;)s=G,u=s.child,s.tag===22&&s.memoizedState!==null?Bv(i):u!==null?(u.return=s,G=u):Bv(i);for(;o!==null;)G=o,dE(o),o=o.sibling;G=i,El=a,vt=c}$v(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):$v(t)}}function $v(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Av(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Av(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ia(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}vt||e.flags&512&&Ff(e)}catch(m){Ue(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function zv(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Bv(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(u){Ue(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ue(e,i,u)}}var o=e.return;try{Ff(e)}catch(u){Ue(e,o,u)}break;case 5:var s=e.return;try{Ff(e)}catch(u){Ue(e,s,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var dR=Math.ceil,xu=lr.ReactCurrentDispatcher,Sm=lr.ReactCurrentOwner,an=lr.ReactCurrentBatchConfig,pe=0,tt=null,qe=null,at=0,Bt=0,io=Yr(0),Xe=0,ma=null,Si=0,Rc=0,Tm=0,Hs=null,Nt=null,Im=0,Po=1/0,Hn=null,bu=!1,zf=null,Dr=null,Sl=!1,Pr=null,Ou=0,Ws=0,Bf=null,ql=-1,Kl=0;function Rt(){return pe&6?$e():ql!==-1?ql:ql=$e()}function Lr(t){return t.mode&1?pe&2&&at!==0?at&-at:QC.transition!==null?(Kl===0&&(Kl=Yw()),Kl):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:r1(t.type)),t):1}function _n(t,e,n,r){if(50<Ws)throw Ws=0,Bf=null,Error($(185));Ra(t,n,r),(!(pe&2)||t!==tt)&&(t===tt&&(!(pe&2)&&(Rc|=n),Xe===4&&Er(t,at)),jt(t,r),n===1&&pe===0&&!(e.mode&1)&&(Po=$e()+500,Ic&&Xr()))}function jt(t,e){var n=t.callbackNode;QP(t,e);var r=mu(t,t===tt?at:0);if(r===0)n!==null&&Jy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jy(n),e===1)t.tag===0?GC(Hv.bind(null,t)):S1(Hv.bind(null,t)),HC(function(){!(pe&6)&&Xr()}),n=null;else{switch(Xw(r)){case 1:n=Yp;break;case 4:n=Gw;break;case 16:n=pu;break;case 536870912:n=Qw;break;default:n=pu}n=wE(n,fE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fE(t,e){if(ql=-1,Kl=0,pe&6)throw Error($(327));var n=t.callbackNode;if(ho()&&t.callbackNode!==n)return null;var r=mu(t,t===tt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var i=pe;pe|=2;var o=mE();(tt!==t||at!==e)&&(Hn=null,Po=$e()+500,di(t,e));do try{mR();break}catch(a){pE(t,a)}while(!0);um(),xu.current=o,pe=i,qe!==null?e=0:(tt=null,at=0,e=Xe)}if(e!==0){if(e===2&&(i=gf(t),i!==0&&(r=i,e=Hf(t,i))),e===1)throw n=ma,di(t,0),Er(t,r),jt(t,$e()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!fR(i)&&(e=Nu(t,r),e===2&&(o=gf(t),o!==0&&(r=o,e=Hf(t,o))),e===1))throw n=ma,di(t,0),Er(t,r),jt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:ri(t,Nt,Hn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=Im+500-$e(),10<e)){if(mu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=If(ri.bind(null,t,Nt,Hn),e);break}ri(t,Nt,Hn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-vn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dR(r/1960))-r,10<r){t.timeoutHandle=If(ri.bind(null,t,Nt,Hn),r);break}ri(t,Nt,Hn);break;case 5:ri(t,Nt,Hn);break;default:throw Error($(329))}}}return jt(t,$e()),t.callbackNode===n?fE.bind(null,t):null}function Hf(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Wf(e)),t}function Wf(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function fR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Sn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Tm,e&=~Rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function Hv(t){if(pe&6)throw Error($(327));ho();var e=mu(t,0);if(!(e&1))return jt(t,$e()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=gf(t);r!==0&&(e=r,n=Hf(t,r))}if(n===1)throw n=ma,di(t,0),Er(t,e),jt(t,$e()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,Nt,Hn),jt(t,$e()),null}function Am(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Po=$e()+500,Ic&&Xr())}}function Ti(t){Pr!==null&&Pr.tag===0&&!(pe&6)&&ho();var e=pe;pe|=1;var n=an.transition,r=Ee;try{if(an.transition=null,Ee=1,t)return t()}finally{Ee=r,an.transition=n,pe=e,!(pe&6)&&Xr()}}function Pm(){Bt=io.current,be(io)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BC(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(sm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wu();break;case 3:Io(),be(Mt),be(wt),mm();break;case 5:pm(r);break;case 4:Io();break;case 13:be(Me);break;case 19:be(Me);break;case 10:cm(r.type._context);break;case 22:case 23:Pm()}n=n.return}if(tt=t,qe=t=Mr(t.current,null),at=Bt=e,Xe=0,ma=null,Tm=Rc=Si=0,Nt=Hs=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ai=null}return t}function pE(t,e){do{var n=qe;try{if(um(),Bl.current=ku,Ru){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ru=!1}if(Ei=0,Ze=Qe=Ve=null,zs=!1,da=0,Sm.current=null,n===null||n.return===null){Xe=1,ma=e,qe=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=at,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=bv(s);if(T!==null){T.flags&=-257,Ov(T,s,a,o,e),T.mode&1&&xv(o,c,e),e=T,u=c;var A=e.updateQueue;if(A===null){var R=new Set;R.add(u),e.updateQueue=R}else A.add(u);break e}else{if(!(e&1)){xv(o,c,e),Cm();break e}u=Error($(426))}}else if(Ne&&a.mode&1){var b=bv(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ov(b,s,a,o,e),am(Ao(u,a));break e}}o=u=Ao(u,a),Xe!==4&&(Xe=2),Hs===null?Hs=[o]:Hs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var I=X1(o,u,e);Iv(o,I);break e;case 1:a=u;var y=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Dr===null||!Dr.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var k=J1(o,a,e);Iv(o,k);break e}}o=o.return}while(o!==null)}yE(n)}catch(N){e=N,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function mE(){var t=xu.current;return xu.current=ku,t===null?ku:t}function Cm(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(Si&268435455)&&!(Rc&268435455)||Er(tt,at)}function Nu(t,e){var n=pe;pe|=2;var r=mE();(tt!==t||at!==e)&&(Hn=null,di(t,e));do try{pR();break}catch(i){pE(t,i)}while(!0);if(um(),pe=n,xu.current=r,qe!==null)throw Error($(261));return tt=null,at=0,Xe}function pR(){for(;qe!==null;)gE(qe)}function mR(){for(;qe!==null&&!UP();)gE(qe)}function gE(t){var e=_E(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?yE(t):qe=e,Sm.current=null}function yE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lR(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,qe=null;return}}else if(n=aR(n,e,Bt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Xe===0&&(Xe=5)}function ri(t,e,n){var r=Ee,i=an.transition;try{an.transition=null,Ee=1,gR(t,e,n,r)}finally{an.transition=i,Ee=r}return null}function gR(t,e,n,r){do ho();while(Pr!==null);if(pe&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(YP(t,o),t===tt&&(qe=tt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,wE(pu,function(){return ho(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=an.transition,an.transition=null;var s=Ee;Ee=1;var a=pe;pe|=4,Sm.current=null,cR(t,n),hE(n,t),MC(Sf),gu=!!Ef,Sf=Ef=null,t.current=n,hR(n),$P(),pe=a,Ee=s,an.transition=o}else t.current=n;if(Sl&&(Sl=!1,Pr=t,Ou=i),o=t.pendingLanes,o===0&&(Dr=null),HP(n.stateNode),jt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bu)throw bu=!1,t=zf,zf=null,t;return Ou&1&&t.tag!==0&&ho(),o=t.pendingLanes,o&1?t===Bf?Ws++:(Ws=0,Bf=t):Ws=0,Xr(),null}function ho(){if(Pr!==null){var t=Xw(Ou),e=an.transition,n=Ee;try{if(an.transition=null,Ee=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Ou=0,pe&6)throw Error($(331));var i=pe;for(pe|=4,G=t.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Bs(8,d,o)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var m=d.sibling,T=d.return;if(lE(d),d===c){G=null;break}if(m!==null){m.return=T,G=m;break}G=T}}}var A=o.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bs(9,o,o.return)}var I=o.sibling;if(I!==null){I.return=o.return,G=I;break e}G=o.return}}var y=t.current;for(G=y;G!==null;){s=G;var S=s.child;if(s.subtreeFlags&2064&&S!==null)S.return=s,G=S;else e:for(s=y;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(N){Ue(a,a.return,N)}if(a===s){G=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,G=k;break e}G=a.return}}if(pe=i,Xr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(_c,t)}catch{}r=!0}return r}finally{Ee=n,an.transition=e}}return!1}function Wv(t,e,n){e=Ao(n,e),e=X1(t,e,1),t=Nr(t,e,1),e=Rt(),t!==null&&(Ra(t,1,e),jt(t,e))}function Ue(t,e,n){if(t.tag===3)Wv(t,t,n);else for(;e!==null;){if(e.tag===3){Wv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ao(n,t),t=J1(e,t,1),e=Nr(e,t,1),t=Rt(),e!==null&&(Ra(e,1,t),jt(e,t));break}}e=e.return}}function yR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(at&n)===n&&(Xe===4||Xe===3&&(at&130023424)===at&&500>$e()-Im?di(t,0):Tm|=n),jt(t,e)}function vE(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=Rt();t=rr(t,e),t!==null&&(Ra(t,e,n),jt(t,n))}function vR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vE(t,n)}function _R(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),vE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,sR(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Ne&&e.flags&1048576&&T1(e,Tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wl(t,e),t=e.pendingProps;var i=Eo(e,wt.current);co(e,n),i=ym(null,e,r,t,i,n);var o=vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(o=!0,Eu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dm(e),i.updater=Pc,e.stateNode=i,i._reactInternals=e,bf(e,r,t,n),e=Df(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&om(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ER(r),t=fn(r,t),i){case 0:e=Nf(null,e,r,t,n);break e;case 1:e=Lv(null,e,r,t,n);break e;case 11:e=Nv(null,e,r,t,n);break e;case 14:e=Dv(null,e,r,fn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Nf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Lv(t,e,r,i,n);case 3:e:{if(nE(e),t===null)throw Error($(387));r=e.pendingProps,o=e.memoizedState,i=o.element,k1(t,e),Pu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ao(Error($(423)),e),e=Mv(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error($(424)),e),e=Mv(t,e,r,n,i);break e}else for(Ht=Or(e.stateNode.containerInfo.firstChild),Kt=e,Ne=!0,mn=null,n=C1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(So(),r===i){e=ir(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return x1(e),t===null&&Rf(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Tf(r,i)?s=null:o!==null&&Tf(r,o)&&(e.flags|=32),tE(t,e),Pt(t,e,s,n),e.child;case 6:return t===null&&Rf(e),null;case 13:return rE(t,e,n);case 4:return fm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=To(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Nv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ce(Iu,r._currentValue),r._currentValue=s,o!==null)if(Sn(o.value,s)){if(o.children===i.children&&!Mt.current){e=ir(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=er(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),kf(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),kf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,co(e,n),i=ln(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Dv(t,e,r,i,n);case 15:return Z1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Wl(t,e),e.tag=1,Vt(r)?(t=!0,Eu(e)):t=!1,co(e,n),Y1(e,r,i),bf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return iE(t,e,n);case 22:return eE(t,e,n)}throw Error($(156,e.tag))};function wE(t,e){return Kw(t,e)}function wR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new wR(t,e,n,r)}function Rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ER(t){if(typeof t=="function")return Rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kp)return 11;if(t===Gp)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Rm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Gi:return fi(n.children,i,o,e);case qp:s=8,i|=8;break;case ef:return t=sn(12,n,e,i|2),t.elementType=ef,t.lanes=o,t;case tf:return t=sn(13,n,e,i),t.elementType=tf,t.lanes=o,t;case nf:return t=sn(19,n,e,i),t.elementType=nf,t.lanes=o,t;case xw:return kc(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rw:s=10;break e;case kw:s=9;break e;case Kp:s=11;break e;case Gp:s=14;break e;case yr:s=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=sn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function fi(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function kc(t,e,n,r){return t=sn(22,t,r,e),t.elementType=xw,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,i,o,s,a,u){return t=new SR(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=sn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dm(o),t}function TR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return zr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Vt(n))return E1(t,n,e)}return e}function SE(t,e,n,r,i,o,s,a,u){return t=km(n,r,!0,t,i,o,s,a,u),t.context=EE(null),n=t.current,r=Rt(),i=Lr(n),o=er(r,i),o.callback=e??null,Nr(n,o,i),t.current.lanes=i,Ra(t,i,r),jt(t,r),t}function xc(t,e,n,r){var i=e.current,o=Rt(),s=Lr(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=er(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,s),t!==null&&(_n(t,i,s,o),zl(t,i,s)),s}function Du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xm(t,e){qv(t,e),(t=t.alternate)&&qv(t,e)}function IR(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function bm(t){this._internalRoot=t}bc.prototype.render=bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));xc(t,e,null,null)};bc.prototype.unmount=bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ti(function(){xc(null,t,null,null)}),e[nr]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=e1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&n1(t)}};function Om(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kv(){}function AR(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Du(s);o.call(c)}}var s=SE(e,r,t,0,null,!1,!1,"",Kv);return t._reactRootContainer=s,t[nr]=s.current,aa(t.nodeType===8?t.parentNode:t),Ti(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Du(u);a.call(c)}}var u=km(t,0,!1,null,null,!1,!1,"",Kv);return t._reactRootContainer=u,t[nr]=u.current,aa(t.nodeType===8?t.parentNode:t),Ti(function(){xc(e,u,n,r)}),u}function Nc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Du(s);a.call(u)}}xc(e,s,t,i)}else s=AR(n,e,t,i,r);return Du(s)}Jw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ks(e.pendingLanes);n!==0&&(Xp(e,n|1),jt(e,$e()),!(pe&6)&&(Po=$e()+500,Xr()))}break;case 13:Ti(function(){var r=rr(t,1);if(r!==null){var i=Rt();_n(r,t,1,i)}}),xm(t,1)}};Jp=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=Rt();_n(e,t,134217728,n)}xm(t,134217728)}};Zw=function(t){if(t.tag===13){var e=Lr(t),n=rr(t,e);if(n!==null){var r=Rt();_n(n,t,e,r)}xm(t,e)}};e1=function(){return Ee};t1=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};ff=function(t,e,n){switch(e){case"input":if(sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tc(r);if(!i)throw Error($(90));Ow(r),sf(r,i)}}}break;case"textarea":Dw(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};$w=Am;zw=Ti;var PR={usingClientEntryPoint:!1,Events:[xa,Ji,Tc,Fw,Uw,Am]},Ts={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CR={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ww(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||IR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{_c=Tl.inject(CR),Rn=Tl}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PR;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Om(e))throw Error($(200));return TR(t,e,null,n)};Xt.createRoot=function(t,e){if(!Om(t))throw Error($(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,aa(t.nodeType===8?t.parentNode:t),new bm(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=Ww(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Ti(t)};Xt.hydrate=function(t,e,n){if(!Oc(e))throw Error($(200));return Nc(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Om(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=SE(e,null,t,1,n??null,i,!1,o,s),t[nr]=e.current,aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bc(e)};Xt.render=function(t,e,n){if(!Oc(e))throw Error($(200));return Nc(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!Oc(t))throw Error($(40));return t._reactRootContainer?(Ti(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Xt.unstable_batchedUpdates=Am;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Oc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Nc(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),Iw.exports=Xt;var RR=Iw.exports,AE,Gv=RR;AE=Gv.createRoot,Gv.hydrateRoot;var PE={exports:{}},CE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Ge;function kR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xR=typeof Object.is=="function"?Object.is:kR,bR=Oa.useSyncExternalStore,OR=Oa.useRef,NR=Oa.useEffect,DR=Oa.useMemo,LR=Oa.useDebugValue;CE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=OR(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=DR(function(){function u(T){if(!c){if(c=!0,d=T,T=r(T),i!==void 0&&s.hasValue){var A=s.value;if(i(A,T))return p=A}return p=T}if(A=p,xR(d,T))return A;var R=r(T);return i!==void 0&&i(A,R)?A:(d=T,p=R)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var a=bR(t,o[0],o[1]);return NR(function(){s.hasValue=!0,s.value=a},[a]),LR(a),a};PE.exports=CE;var MR=PE.exports,Wt="default"in zy?oe:zy,Qv=Symbol.for("react-redux-context"),Yv=typeof globalThis<"u"?globalThis:{};function VR(){if(!Wt.createContext)return{};const t=Yv[Qv]??(Yv[Qv]=new Map);let e=t.get(Wt.createContext);return e||(e=Wt.createContext(null),t.set(Wt.createContext,e)),e}var Br=VR(),jR=()=>{throw new Error("uSES not initialized!")};function Nm(t=Br){return function(){return Wt.useContext(t)}}var RE=Nm(),kE=jR,FR=t=>{kE=t},UR=(t,e)=>t===e;function $R(t=Br){const e=t===Br?RE:Nm(t),n=(r,i={})=>{const{equalityFn:o=UR,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:d,identityFunctionCheck:p}=e();Wt.useRef(!0);const m=Wt.useCallback({[r.name](A){return r(A)}}[r.name],[r,d,s.stabilityCheck]),T=kE(u.addNestedSub,a.getState,c||a.getState,m,o);return Wt.useDebugValue(T),T};return Object.assign(n,{withTypes:()=>n}),n}var Ii=$R();function zR(t){t()}function BR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){zR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Xv={notify(){},get:()=>[]};function HR(t,e){let n,r=Xv,i=0,o=!1;function s(R){d();const b=r.subscribe(R);let I=!1;return()=>{I||(I=!0,b(),p())}}function a(){r.notify()}function u(){A.onStateChange&&A.onStateChange()}function c(){return o}function d(){i++,n||(n=t.subscribe(u),r=BR())}function p(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Xv)}function m(){o||(o=!0,d())}function T(){o&&(o=!1,p())}const A={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:m,tryUnsubscribe:T,getListeners:()=>r};return A}var WR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qR=typeof navigator<"u"&&navigator.product==="ReactNative",KR=WR||qR?Wt.useLayoutEffect:Wt.useEffect;function GR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=Wt.useMemo(()=>{const c=HR(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[t,r,i,o]),a=Wt.useMemo(()=>t.getState(),[t]);KR(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const u=e||Br;return Wt.createElement(u.Provider,{value:s},n)}var QR=GR;function xE(t=Br){const e=t===Br?RE:Nm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var YR=xE();function XR(t=Br){const e=t===Br?YR:xE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var bE=XR();FR(MR.useSyncExternalStoreWithSelector);function qf(t,e){return qf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qf(t,e)}function Dn(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,qf(t,e)}var OE={exports:{}},JR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ZR=JR,ek=ZR;function NE(){}function DE(){}DE.resetWarningCache=NE;var tk=function(){function t(r,i,o,s,a,u){if(u!==ek){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:DE,resetWarningCache:NE};return n.PropTypes=n,n};OE.exports=tk();var nk=OE.exports;const Jv=yc(nk);function kt(){return kt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kt.apply(this,arguments)}function Il(t){return t.charAt(0)==="/"}function vd(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}function rk(t,e){e===void 0&&(e="");var n=t&&t.split("/")||[],r=e&&e.split("/")||[],i=t&&Il(t),o=e&&Il(e),s=i||o;if(t&&Il(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var a;if(r.length){var u=r[r.length-1];a=u==="."||u===".."||u===""}else a=!1;for(var c=0,d=r.length;d>=0;d--){var p=r[d];p==="."?vd(r,d):p===".."?(vd(r,d),c++):c&&(vd(r,d),c--)}if(!s)for(;c--;c)r.unshift("..");s&&r[0]!==""&&(!r[0]||!Il(r[0]))&&r.unshift("");var m=r.join("/");return a&&m.substr(-1)!=="/"&&(m+="/"),m}var ik="Invariant failed";function Mi(t,e){throw new Error(ik)}function qs(t){return t.charAt(0)==="/"?t:"/"+t}function Zv(t){return t.charAt(0)==="/"?t.substr(1):t}function ok(t,e){return t.toLowerCase().indexOf(e.toLowerCase())===0&&"/?#".indexOf(t.charAt(e.length))!==-1}function LE(t,e){return ok(t,e)?t.substr(e.length):t}function ME(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}function sk(t){var e=t||"/",n="",r="",i=e.indexOf("#");i!==-1&&(r=e.substr(i),e=e.substr(0,i));var o=e.indexOf("?");return o!==-1&&(n=e.substr(o),e=e.substr(0,o)),{pathname:e,search:n==="?"?"":n,hash:r==="#"?"":r}}function nn(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function qt(t,e,n,r){var i;typeof t=="string"?(i=sk(t),i.state=e):(i=kt({},t),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",e!==void 0&&i.state===void 0&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(o){throw o instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):o}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=rk(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function Dm(){var t=null;function e(s){return t=s,function(){t===s&&(t=null)}}function n(s,a,u,c){if(t!=null){var d=typeof t=="function"?t(s,a):t;typeof d=="string"?typeof u=="function"?u(d,c):c(!0):c(d!==!1)}else c(!0)}var r=[];function i(s){var a=!0;function u(){a&&s.apply(void 0,arguments)}return r.push(u),function(){a=!1,r=r.filter(function(c){return c!==u})}}function o(){for(var s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];r.forEach(function(c){return c.apply(void 0,a)})}return{setPrompt:e,confirmTransitionTo:n,appendListener:i,notifyListeners:o}}var VE=!!(typeof window<"u"&&window.document&&window.document.createElement);function jE(t,e){e(window.confirm(t))}function ak(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function lk(){return window.navigator.userAgent.indexOf("Trident")===-1}function uk(){return window.navigator.userAgent.indexOf("Firefox")===-1}function ck(t){return t.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var e0="popstate",t0="hashchange";function n0(){try{return window.history.state||{}}catch{return{}}}function hk(t){t===void 0&&(t={}),VE||Mi();var e=window.history,n=ak(),r=!lk(),i=t,o=i.forceRefresh,s=o===void 0?!1:o,a=i.getUserConfirmation,u=a===void 0?jE:a,c=i.keyLength,d=c===void 0?6:c,p=t.basename?ME(qs(t.basename)):"";function m(V){var j=V||{},K=j.key,H=j.state,Y=window.location,ge=Y.pathname,ce=Y.search,Ie=Y.hash,Ae=ge+ce+Ie;return p&&(Ae=LE(Ae,p)),qt(Ae,H,K)}function T(){return Math.random().toString(36).substr(2,d)}var A=Dm();function R(V){kt(U,V),U.length=e.length,A.notifyListeners(U.location,U.action)}function b(V){ck(V)||S(m(V.state))}function I(){S(m(n0()))}var y=!1;function S(V){if(y)y=!1,R();else{var j="POP";A.confirmTransitionTo(V,j,u,function(K){K?R({action:j,location:V}):k(V)})}}function k(V){var j=U.location,K=O.indexOf(j.key);K===-1&&(K=0);var H=O.indexOf(V.key);H===-1&&(H=0);var Y=K-H;Y&&(y=!0,E(Y))}var N=m(n0()),O=[N.key];function v(V){return p+nn(V)}function g(V,j){var K="PUSH",H=qt(V,j,T(),U.location);A.confirmTransitionTo(H,K,u,function(Y){if(Y){var ge=v(H),ce=H.key,Ie=H.state;if(n)if(e.pushState({key:ce,state:Ie},null,ge),s)window.location.href=ge;else{var Ae=O.indexOf(U.location.key),St=O.slice(0,Ae+1);St.push(H.key),O=St,R({action:K,location:H})}else window.location.href=ge}})}function _(V,j){var K="REPLACE",H=qt(V,j,T(),U.location);A.confirmTransitionTo(H,K,u,function(Y){if(Y){var ge=v(H),ce=H.key,Ie=H.state;if(n)if(e.replaceState({key:ce,state:Ie},null,ge),s)window.location.replace(ge);else{var Ae=O.indexOf(U.location.key);Ae!==-1&&(O[Ae]=H.key),R({action:K,location:H})}else window.location.replace(ge)}})}function E(V){e.go(V)}function C(){E(-1)}function x(){E(1)}var P=0;function q(V){P+=V,P===1&&V===1?(window.addEventListener(e0,b),r&&window.addEventListener(t0,I)):P===0&&(window.removeEventListener(e0,b),r&&window.removeEventListener(t0,I))}var de=!1;function ve(V){V===void 0&&(V=!1);var j=A.setPrompt(V);return de||(q(1),de=!0),function(){return de&&(de=!1,q(-1)),j()}}function Te(V){var j=A.appendListener(V);return q(1),function(){q(-1),j()}}var U={length:e.length,action:"POP",location:N,createHref:v,push:g,replace:_,go:E,goBack:C,goForward:x,block:ve,listen:Te};return U}var r0="hashchange",dk={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+Zv(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:Zv,decodePath:qs},slash:{encodePath:qs,decodePath:qs}};function FE(t){var e=t.indexOf("#");return e===-1?t:t.slice(0,e)}function Is(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.substring(e+1)}function fk(t){window.location.hash=t}function _d(t){window.location.replace(FE(window.location.href)+"#"+t)}function pk(t){t===void 0&&(t={}),VE||Mi();var e=window.history;uk();var n=t,r=n.getUserConfirmation,i=r===void 0?jE:r,o=n.hashType,s=o===void 0?"slash":o,a=t.basename?ME(qs(t.basename)):"",u=dk[s],c=u.encodePath,d=u.decodePath;function p(){var j=d(Is());return a&&(j=LE(j,a)),qt(j)}var m=Dm();function T(j){kt(V,j),V.length=e.length,m.notifyListeners(V.location,V.action)}var A=!1,R=null;function b(j,K){return j.pathname===K.pathname&&j.search===K.search&&j.hash===K.hash}function I(){var j=Is(),K=c(j);if(j!==K)_d(K);else{var H=p(),Y=V.location;if(!A&&b(Y,H)||R===nn(H))return;R=null,y(H)}}function y(j){if(A)A=!1,T();else{var K="POP";m.confirmTransitionTo(j,K,i,function(H){H?T({action:K,location:j}):S(j)})}}function S(j){var K=V.location,H=v.lastIndexOf(nn(K));H===-1&&(H=0);var Y=v.lastIndexOf(nn(j));Y===-1&&(Y=0);var ge=H-Y;ge&&(A=!0,C(ge))}var k=Is(),N=c(k);k!==N&&_d(N);var O=p(),v=[nn(O)];function g(j){var K=document.querySelector("base"),H="";return K&&K.getAttribute("href")&&(H=FE(window.location.href)),H+"#"+c(a+nn(j))}function _(j,K){var H="PUSH",Y=qt(j,void 0,void 0,V.location);m.confirmTransitionTo(Y,H,i,function(ge){if(ge){var ce=nn(Y),Ie=c(a+ce),Ae=Is()!==Ie;if(Ae){R=ce,fk(Ie);var St=v.lastIndexOf(nn(V.location)),en=v.slice(0,St+1);en.push(ce),v=en,T({action:H,location:Y})}else T()}})}function E(j,K){var H="REPLACE",Y=qt(j,void 0,void 0,V.location);m.confirmTransitionTo(Y,H,i,function(ge){if(ge){var ce=nn(Y),Ie=c(a+ce),Ae=Is()!==Ie;Ae&&(R=ce,_d(Ie));var St=v.indexOf(nn(V.location));St!==-1&&(v[St]=ce),T({action:H,location:Y})}})}function C(j){e.go(j)}function x(){C(-1)}function P(){C(1)}var q=0;function de(j){q+=j,q===1&&j===1?window.addEventListener(r0,I):q===0&&window.removeEventListener(r0,I)}var ve=!1;function Te(j){j===void 0&&(j=!1);var K=m.setPrompt(j);return ve||(de(1),ve=!0),function(){return ve&&(ve=!1,de(-1)),K()}}function U(j){var K=m.appendListener(j);return de(1),function(){de(-1),K()}}var V={length:e.length,action:"POP",location:O,createHref:g,push:_,replace:E,go:C,goBack:x,goForward:P,block:Te,listen:U};return V}function i0(t,e,n){return Math.min(Math.max(t,e),n)}function mk(t){t===void 0&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,i=r===void 0?["/"]:r,o=e.initialIndex,s=o===void 0?0:o,a=e.keyLength,u=a===void 0?6:a,c=Dm();function d(g){kt(v,g),v.length=v.entries.length,c.notifyListeners(v.location,v.action)}function p(){return Math.random().toString(36).substr(2,u)}var m=i0(s,0,i.length-1),T=i.map(function(g){return typeof g=="string"?qt(g,void 0,p()):qt(g,void 0,g.key||p())}),A=nn;function R(g,_){var E="PUSH",C=qt(g,_,p(),v.location);c.confirmTransitionTo(C,E,n,function(x){if(x){var P=v.index,q=P+1,de=v.entries.slice(0);de.length>q?de.splice(q,de.length-q,C):de.push(C),d({action:E,location:C,index:q,entries:de})}})}function b(g,_){var E="REPLACE",C=qt(g,_,p(),v.location);c.confirmTransitionTo(C,E,n,function(x){x&&(v.entries[v.index]=C,d({action:E,location:C}))})}function I(g){var _=i0(v.index+g,0,v.entries.length-1),E="POP",C=v.entries[_];c.confirmTransitionTo(C,E,n,function(x){x?d({action:E,location:C,index:_}):d()})}function y(){I(-1)}function S(){I(1)}function k(g){var _=v.index+g;return _>=0&&_<v.entries.length}function N(g){return g===void 0&&(g=!1),c.setPrompt(g)}function O(g){return c.appendListener(g)}var v={length:T.length,action:"POP",location:T[m],index:m,entries:T,createHref:A,push:R,replace:b,go:I,goBack:y,goForward:S,canGo:k,block:N,listen:O};return v}var wd=1073741823,o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function gk(){var t="__global_unique_id__";return o0[t]=(o0[t]||0)+1}function yk(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function vk(t){var e=[];return{on:function(r){e.push(r)},off:function(r){e=e.filter(function(i){return i!==r})},get:function(){return t},set:function(r,i){t=r,e.forEach(function(o){return o(t,i)})}}}function _k(t){return Array.isArray(t)?t[0]:t}function wk(t,e){var n,r,i="__create-react-context-"+gk()+"__",o=function(a){Dn(u,a);function u(){var d;return d=a.apply(this,arguments)||this,d.emitter=vk(d.props.value),d}var c=u.prototype;return c.getChildContext=function(){var p;return p={},p[i]=this.emitter,p},c.componentWillReceiveProps=function(p){if(this.props.value!==p.value){var m=this.props.value,T=p.value,A;yk(m,T)?A=0:(A=typeof e=="function"?e(m,T):wd,A|=0,A!==0&&this.emitter.set(p.value,A))}},c.render=function(){return this.props.children},u}(Ge.Component);o.childContextTypes=(n={},n[i]=Jv.object.isRequired,n);var s=function(a){Dn(u,a);function u(){var d;return d=a.apply(this,arguments)||this,d.state={value:d.getValue()},d.onUpdate=function(p,m){var T=d.observedBits|0;T&m&&d.setState({value:d.getValue()})},d}var c=u.prototype;return c.componentWillReceiveProps=function(p){var m=p.observedBits;this.observedBits=m??wd},c.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var p=this.props.observedBits;this.observedBits=p??wd},c.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},c.getValue=function(){return this.context[i]?this.context[i].get():t},c.render=function(){return _k(this.props.children)(this.state.value)},u}(Ge.Component);return s.contextTypes=(r={},r[i]=Jv.object,r),{Provider:o,Consumer:s}}var UE=oe.createContext||wk,Yo={exports:{}},Ek=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Lu=Ek;Yo.exports=BE;Yo.exports.parse=Lm;Yo.exports.compile=Tk;Yo.exports.tokensToFunction=$E;Yo.exports.tokensToRegExp=zE;var Sk=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Lm(t,e){for(var n=[],r=0,i=0,o="",s=e&&e.delimiter||"/",a;(a=Sk.exec(t))!=null;){var u=a[0],c=a[1],d=a.index;if(o+=t.slice(i,d),i=d+u.length,c){o+=c[1];continue}var p=t[i],m=a[2],T=a[3],A=a[4],R=a[5],b=a[6],I=a[7];o&&(n.push(o),o="");var y=m!=null&&p!=null&&p!==m,S=b==="+"||b==="*",k=b==="?"||b==="*",N=a[2]||s,O=A||R;n.push({name:T||r++,prefix:m||"",delimiter:N,optional:k,repeat:S,partial:y,asterisk:!!I,pattern:O?Pk(O):I?".*":"[^"+Ql(N)+"]+?"})}return i<t.length&&(o+=t.substr(i)),o&&n.push(o),n}function Tk(t,e){return $E(Lm(t,e),e)}function Ik(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Ak(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function $E(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",Vm(e)));return function(i,o){for(var s="",a=i||{},u=o||{},c=u.pretty?Ik:encodeURIComponent,d=0;d<t.length;d++){var p=t[d];if(typeof p=="string"){s+=p;continue}var m=a[p.name],T;if(m==null)if(p.optional){p.partial&&(s+=p.prefix);continue}else throw new TypeError('Expected "'+p.name+'" to be defined');if(Lu(m)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var A=0;A<m.length;A++){if(T=c(m[A]),!n[d].test(T))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+JSON.stringify(T)+"`");s+=(A===0?p.prefix:p.delimiter)+T}continue}if(T=p.asterisk?Ak(m):c(m),!n[d].test(T))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+T+'"');s+=p.prefix+T}return s}}function Ql(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Pk(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Mm(t,e){return t.keys=e,t}function Vm(t){return t&&t.sensitive?"":"i"}function Ck(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Mm(t,e)}function Rk(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(BE(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",Vm(n));return Mm(o,e)}function kk(t,e,n){return zE(Lm(t,n),e,n)}function zE(t,e,n){Lu(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,o="",s=0;s<t.length;s++){var a=t[s];if(typeof a=="string")o+=Ql(a);else{var u=Ql(a.prefix),c="(?:"+a.pattern+")";e.push(a),a.repeat&&(c+="(?:"+u+c+")*"),a.optional?a.partial?c=u+"("+c+")?":c="(?:"+u+"("+c+"))?":c=u+"("+c+")",o+=c}}var d=Ql(n.delimiter||"/"),p=o.slice(-d.length)===d;return r||(o=(p?o.slice(0,-d.length):o)+"(?:"+d+"(?=$))?"),i?o+="$":o+=r&&p?"":"(?="+d+"|$)",Mm(new RegExp("^"+o,Vm(n)),e)}function BE(t,e,n){return Lu(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?Ck(t,e):Lu(t)?Rk(t,e,n):kk(t,e,n)}var xk=Yo.exports;const bk=yc(xk);var HE={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,jm=nt?Symbol.for("react.element"):60103,Fm=nt?Symbol.for("react.portal"):60106,Dc=nt?Symbol.for("react.fragment"):60107,Lc=nt?Symbol.for("react.strict_mode"):60108,Mc=nt?Symbol.for("react.profiler"):60114,Vc=nt?Symbol.for("react.provider"):60109,jc=nt?Symbol.for("react.context"):60110,Um=nt?Symbol.for("react.async_mode"):60111,Fc=nt?Symbol.for("react.concurrent_mode"):60111,Uc=nt?Symbol.for("react.forward_ref"):60112,$c=nt?Symbol.for("react.suspense"):60113,Ok=nt?Symbol.for("react.suspense_list"):60120,zc=nt?Symbol.for("react.memo"):60115,Bc=nt?Symbol.for("react.lazy"):60116,Nk=nt?Symbol.for("react.block"):60121,Dk=nt?Symbol.for("react.fundamental"):60117,Lk=nt?Symbol.for("react.responder"):60118,Mk=nt?Symbol.for("react.scope"):60119;function Zt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case jm:switch(t=t.type,t){case Um:case Fc:case Dc:case Mc:case Lc:case $c:return t;default:switch(t=t&&t.$$typeof,t){case jc:case Uc:case Bc:case zc:case Vc:return t;default:return e}}case Fm:return e}}}function WE(t){return Zt(t)===Fc}Se.AsyncMode=Um;Se.ConcurrentMode=Fc;Se.ContextConsumer=jc;Se.ContextProvider=Vc;Se.Element=jm;Se.ForwardRef=Uc;Se.Fragment=Dc;Se.Lazy=Bc;Se.Memo=zc;Se.Portal=Fm;Se.Profiler=Mc;Se.StrictMode=Lc;Se.Suspense=$c;Se.isAsyncMode=function(t){return WE(t)||Zt(t)===Um};Se.isConcurrentMode=WE;Se.isContextConsumer=function(t){return Zt(t)===jc};Se.isContextProvider=function(t){return Zt(t)===Vc};Se.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===jm};Se.isForwardRef=function(t){return Zt(t)===Uc};Se.isFragment=function(t){return Zt(t)===Dc};Se.isLazy=function(t){return Zt(t)===Bc};Se.isMemo=function(t){return Zt(t)===zc};Se.isPortal=function(t){return Zt(t)===Fm};Se.isProfiler=function(t){return Zt(t)===Mc};Se.isStrictMode=function(t){return Zt(t)===Lc};Se.isSuspense=function(t){return Zt(t)===$c};Se.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Dc||t===Fc||t===Mc||t===Lc||t===$c||t===Ok||typeof t=="object"&&t!==null&&(t.$$typeof===Bc||t.$$typeof===zc||t.$$typeof===Vc||t.$$typeof===jc||t.$$typeof===Uc||t.$$typeof===Dk||t.$$typeof===Lk||t.$$typeof===Mk||t.$$typeof===Nk)};Se.typeOf=Zt;HE.exports=Se;var Vk=HE.exports;function Hc(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}var qE=Vk,jk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},KE={};KE[qE.ForwardRef]=jk;KE[qE.Memo]=Fk;var Uk=function(e){var n=UE();return n.displayName=e,n},GE=Uk("Router-History"),$k=function(e){var n=UE();return n.displayName=e,n},Ai=$k("Router"),Wc=function(t){Dn(e,t),e.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function e(r){var i;return i=t.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(o){i._isMounted?i.setState({location:o}):i._pendingLocation=o})),i}var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return oe.createElement(Ai.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},oe.createElement(GE.Provider,{children:this.props.children||null,value:this.props.history}))},e}(oe.Component);oe.Component;oe.Component;var s0={},zk=1e4,a0=0;function Bk(t,e){var n=""+e.end+e.strict+e.sensitive,r=s0[n]||(s0[n]={});if(r[t])return r[t];var i=[],o=bk(t,i,e),s={regexp:o,keys:i};return a0<zk&&(r[t]=s,a0++),s}function $m(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,i=n.exact,o=i===void 0?!1:i,s=n.strict,a=s===void 0?!1:s,u=n.sensitive,c=u===void 0?!1:u,d=[].concat(r);return d.reduce(function(p,m){if(!m&&m!=="")return null;if(p)return p;var T=Bk(m,{end:o,strict:a,sensitive:c}),A=T.regexp,R=T.keys,b=A.exec(t);if(!b)return null;var I=b[0],y=b.slice(1),S=t===I;return o&&!S?null:{path:m,url:m==="/"&&I===""?"/":I,isExact:S,params:R.reduce(function(k,N,O){return k[N.name]=y[O],k},{})}},null)}var Ed=function(t){Dn(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return oe.createElement(Ai.Consumer,null,function(o){o||Mi();var s=i.props.location||o.location,a=i.props.computedMatch?i.props.computedMatch:i.props.path?$m(s.pathname,i.props):o.match,u=kt({},o,{location:s,match:a}),c=i.props,d=c.children,p=c.component,m=c.render;return Array.isArray(d)&&d.length===0&&(d=null),oe.createElement(Ai.Provider,{value:u},u.match?d?typeof d=="function"?d(u):d:p?oe.createElement(p,u):m?m(u):null:typeof d=="function"?d(u):null)})},e}(oe.Component);function zm(t){return t.charAt(0)==="/"?t:"/"+t}function Hk(t,e){return t?kt({},e,{pathname:zm(t)+e.pathname}):e}function Wk(t,e){if(!t)return e;var n=zm(t);return e.pathname.indexOf(n)!==0?e:kt({},e,{pathname:e.pathname.substr(n.length)})}function l0(t){return typeof t=="string"?t:nn(t)}function Sd(t){return function(){Mi()}}function u0(){}oe.Component;var qk=function(t){Dn(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return oe.createElement(Ai.Consumer,null,function(o){o||Mi();var s=i.props.location||o.location,a,u;return oe.Children.forEach(i.props.children,function(c){if(u==null&&oe.isValidElement(c)){a=c;var d=c.props.path||c.props.from;u=d?$m(s.pathname,kt({},c.props,{path:d})):o.match}}),u?oe.cloneElement(a,{location:s,computedMatch:u}):null})},e}(oe.Component),QE=oe.useContext;function Kk(){return QE(GE)}function Gk(){var t=QE(Ai).match;return t?t.params:{}}var Qk=function(t){Dn(e,t);function e(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o))||this,r.history=hk(r.props),r}var n=e.prototype;return n.render=function(){return oe.createElement(Wc,{history:this.history,children:this.props.children})},e}(oe.Component);oe.Component;var Kf=function(e,n){return typeof e=="function"?e(n):e},YE=function(e,n){return typeof e=="string"?qt(e,null,null,n):e},Bm=function(e){return e},Co=oe.forwardRef;typeof Co>"u"&&(Co=Bm);function Yk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var Xk=Co(function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,o=Hc(t,["innerRef","navigate","onClick"]),s=o.target,a=kt({},o,{onClick:function(c){try{i&&i(c)}catch(d){throw c.preventDefault(),d}!c.defaultPrevented&&c.button===0&&(!s||s==="_self")&&!Yk(c)&&(c.preventDefault(),r())}});return Bm!==Co?a.ref=e||n:a.ref=n,oe.createElement("a",a)}),Na=Co(function(t,e){var n=t.component,r=n===void 0?Xk:n,i=t.replace,o=t.to,s=t.innerRef,a=Hc(t,["component","replace","to","innerRef"]);return oe.createElement(Ai.Consumer,null,function(u){u||Mi();var c=u.history,d=YE(Kf(o,u.location),u.location),p=d?c.createHref(d):"",m=kt({},a,{href:p,navigate:function(){var A=Kf(o,u.location),R=i?c.replace:c.push;R(A)}});return Bm!==Co?m.ref=e||s:m.innerRef=s,oe.createElement(r,m)})}),XE=function(e){return e},Mu=oe.forwardRef;typeof Mu>"u"&&(Mu=XE);function Jk(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(r){return r}).join(" ")}Mu(function(t,e){var n=t["aria-current"],r=n===void 0?"page":n,i=t.activeClassName,o=i===void 0?"active":i,s=t.activeStyle,a=t.className,u=t.exact,c=t.isActive,d=t.location,p=t.sensitive,m=t.strict,T=t.style,A=t.to,R=t.innerRef,b=Hc(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return oe.createElement(Ai.Consumer,null,function(I){I||Mi();var y=d||I.location,S=YE(Kf(A,y),y),k=S.pathname,N=k&&k.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=N?$m(y.pathname,{path:N,exact:u,sensitive:p,strict:m}):null,v=!!(c?c(O,y):O),g=v?Jk(a,o):a,_=v?kt({},T,{},s):T,E=kt({"aria-current":v&&r||null,className:g,style:_,to:S},b);return XE!==Mu?E.ref=e||R:E.innerRef=R,oe.createElement(Na,E)})});var Lt=function(){return Lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Lt.apply(this,arguments)};function Hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Vu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var xe="-ms-",Ks="-moz-",_e="-webkit-",JE="comm",qc="rule",Wm="decl",Zk="@import",ZE="@keyframes",ex="@layer",eS=Math.abs,qm=String.fromCharCode,Gf=Object.assign;function tx(t,e){return et(t,0)^45?(((e<<2^et(t,0))<<2^et(t,1))<<2^et(t,2))<<2^et(t,3):0}function tS(t){return t.trim()}function Wn(t,e){return(t=e.exec(t))?t[0]:t}function ie(t,e,n){return t.replace(e,n)}function Yl(t,e,n){return t.indexOf(e,n)}function et(t,e){return t.charCodeAt(e)|0}function Ro(t,e,n){return t.slice(e,n)}function An(t){return t.length}function nS(t){return t.length}function bs(t,e){return e.push(t),t}function nx(t,e){return t.map(e).join("")}function c0(t,e){return t.filter(function(n){return!Wn(n,e)})}var Kc=1,ko=1,rS=0,cn=0,We=0,Xo="";function Gc(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Kc,column:ko,length:s,return:"",siblings:a}}function gr(t,e){return Gf(Gc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Bi(t){for(;t.root;)t=gr(t.root,{children:[t]});bs(t,t.siblings)}function rx(){return We}function ix(){return We=cn>0?et(Xo,--cn):0,ko--,We===10&&(ko=1,Kc--),We}function wn(){return We=cn<rS?et(Xo,cn++):0,ko++,We===10&&(ko=1,Kc++),We}function pi(){return et(Xo,cn)}function Xl(){return cn}function Qc(t,e){return Ro(Xo,t,e)}function Qf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ox(t){return Kc=ko=1,rS=An(Xo=t),cn=0,[]}function sx(t){return Xo="",t}function Td(t){return tS(Qc(cn-1,Yf(t===91?t+2:t===40?t+1:t)))}function ax(t){for(;(We=pi())&&We<33;)wn();return Qf(t)>2||Qf(We)>3?"":" "}function lx(t,e){for(;--e&&wn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Qc(t,Xl()+(e<6&&pi()==32&&wn()==32))}function Yf(t){for(;wn();)switch(We){case t:return cn;case 34:case 39:t!==34&&t!==39&&Yf(We);break;case 40:t===41&&Yf(t);break;case 92:wn();break}return cn}function ux(t,e){for(;wn()&&t+We!==57;)if(t+We===84&&pi()===47)break;return"/*"+Qc(e,cn-1)+"*"+qm(t===47?t:wn())}function cx(t){for(;!Qf(pi());)wn();return Qc(t,cn)}function hx(t){return sx(Jl("",null,null,null,[""],t=ox(t),0,[0],t))}function Jl(t,e,n,r,i,o,s,a,u){for(var c=0,d=0,p=s,m=0,T=0,A=0,R=1,b=1,I=1,y=0,S="",k=i,N=o,O=r,v=S;b;)switch(A=y,y=wn()){case 40:if(A!=108&&et(v,p-1)==58){Yl(v+=ie(Td(y),"&","&\f"),"&\f",eS(c?a[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:v+=Td(y);break;case 9:case 10:case 13:case 32:v+=ax(A);break;case 92:v+=lx(Xl()-1,7);continue;case 47:switch(pi()){case 42:case 47:bs(dx(ux(wn(),Xl()),e,n,u),u);break;default:v+="/"}break;case 123*R:a[c++]=An(v)*I;case 125*R:case 59:case 0:switch(y){case 0:case 125:b=0;case 59+d:I==-1&&(v=ie(v,/\f/g,"")),T>0&&An(v)-p&&bs(T>32?d0(v+";",r,n,p-1,u):d0(ie(v," ","")+";",r,n,p-2,u),u);break;case 59:v+=";";default:if(bs(O=h0(v,e,n,c,d,i,a,S,k=[],N=[],p,o),o),y===123)if(d===0)Jl(v,e,O,O,k,o,p,a,N);else switch(m===99&&et(v,3)===110?100:m){case 100:case 108:case 109:case 115:Jl(t,O,O,r&&bs(h0(t,O,O,0,0,i,a,S,i,k=[],p,N),N),i,N,p,a,r?k:N);break;default:Jl(v,O,O,O,[""],N,0,a,N)}}c=d=T=0,R=I=1,S=v="",p=s;break;case 58:p=1+An(v),T=A;default:if(R<1){if(y==123)--R;else if(y==125&&R++==0&&ix()==125)continue}switch(v+=qm(y),y*R){case 38:I=d>0?1:(v+="\f",-1);break;case 44:a[c++]=(An(v)-1)*I,I=1;break;case 64:pi()===45&&(v+=Td(wn())),m=pi(),d=p=An(S=v+=cx(Xl())),y++;break;case 45:A===45&&An(v)==2&&(R=0)}}return o}function h0(t,e,n,r,i,o,s,a,u,c,d,p){for(var m=i-1,T=i===0?o:[""],A=nS(T),R=0,b=0,I=0;R<r;++R)for(var y=0,S=Ro(t,m+1,m=eS(b=s[R])),k=t;y<A;++y)(k=tS(b>0?T[y]+" "+S:ie(S,/&\f/g,T[y])))&&(u[I++]=k);return Gc(t,e,n,i===0?qc:a,u,c,d,p)}function dx(t,e,n,r){return Gc(t,e,n,JE,qm(rx()),Ro(t,2,-2),0,r)}function d0(t,e,n,r,i){return Gc(t,e,n,Wm,Ro(t,0,r),Ro(t,r+1,-1),r,i)}function iS(t,e,n){switch(tx(t,e)){case 5103:return _e+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+t+t;case 4789:return Ks+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+t+Ks+t+xe+t+t;case 5936:switch(et(t,e+11)){case 114:return _e+t+xe+ie(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return _e+t+xe+ie(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return _e+t+xe+ie(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return _e+t+xe+t+t;case 6165:return _e+t+xe+"flex-"+t+t;case 5187:return _e+t+ie(t,/(\w+).+(:[^]+)/,_e+"box-$1$2"+xe+"flex-$1$2")+t;case 5443:return _e+t+xe+"flex-item-"+ie(t,/flex-|-self/g,"")+(Wn(t,/flex-|baseline/)?"":xe+"grid-row-"+ie(t,/flex-|-self/g,""))+t;case 4675:return _e+t+xe+"flex-line-pack"+ie(t,/align-content|flex-|-self/g,"")+t;case 5548:return _e+t+xe+ie(t,"shrink","negative")+t;case 5292:return _e+t+xe+ie(t,"basis","preferred-size")+t;case 6060:return _e+"box-"+ie(t,"-grow","")+_e+t+xe+ie(t,"grow","positive")+t;case 4554:return _e+ie(t,/([^-])(transform)/g,"$1"+_e+"$2")+t;case 6187:return ie(ie(ie(t,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),t,"")+t;case 5495:case 3959:return ie(t,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return ie(ie(t,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+t+t;case 4200:if(!Wn(t,/flex-|baseline/))return xe+"grid-column-align"+Ro(t,e)+t;break;case 2592:case 3360:return xe+ie(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Wn(r.props,/grid-\w+-end/)})?~Yl(t+(n=n[e].value),"span",0)?t:xe+ie(t,"-start","")+t+xe+"grid-row-span:"+(~Yl(n,"span",0)?Wn(n,/\d+/):+Wn(n,/\d+/)-+Wn(t,/\d+/))+";":xe+ie(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Wn(r.props,/grid-\w+-start/)})?t:xe+ie(ie(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ie(t,/(.+)-inline(.+)/,_e+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(t)-1-e>6)switch(et(t,e+1)){case 109:if(et(t,e+4)!==45)break;case 102:return ie(t,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+Ks+(et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yl(t,"stretch",0)?iS(ie(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ie(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,c){return xe+i+":"+o+c+(s?xe+i+"-span:"+(a?u:+u-+o)+c:"")+t});case 4949:if(et(t,e+6)===121)return ie(t,":",":"+_e)+t;break;case 6444:switch(et(t,et(t,14)===45?18:11)){case 120:return ie(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(et(t,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+xe+"$2box$3")+t;case 100:return ie(t,":",":"+xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(t,"scroll-","scroll-snap-")+t}return t}function ju(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function fx(t,e,n,r){switch(t.type){case ex:if(t.children.length)break;case Zk:case Wm:return t.return=t.return||t.value;case JE:return"";case ZE:return t.return=t.value+"{"+ju(t.children,r)+"}";case qc:if(!An(t.value=t.props.join(",")))return""}return An(n=ju(t.children,r))?t.return=t.value+"{"+n+"}":""}function px(t){var e=nS(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function mx(t){return function(e){e.root||(e=e.return)&&t(e)}}function gx(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Wm:t.return=iS(t.value,t.length,n);return;case ZE:return ju([gr(t,{value:ie(t.value,"@","@"+_e)})],r);case qc:if(t.length)return nx(n=t.props,function(i){switch(Wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bi(gr(t,{props:[ie(i,/:(read-\w+)/,":"+Ks+"$1")]})),Bi(gr(t,{props:[i]})),Gf(t,{props:c0(n,r)});break;case"::placeholder":Bi(gr(t,{props:[ie(i,/:(plac\w+)/,":"+_e+"input-$1")]})),Bi(gr(t,{props:[ie(i,/:(plac\w+)/,":"+Ks+"$1")]})),Bi(gr(t,{props:[ie(i,/:(plac\w+)/,xe+"input-$1")]})),Bi(gr(t,{props:[i]})),Gf(t,{props:c0(n,r)});break}return""})}}var yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zt={},xo=typeof process<"u"&&zt!==void 0&&(zt.REACT_APP_SC_ATTR||zt.SC_ATTR)||"data-styled",oS="active",sS="data-styled-version",Yc="6.1.11",Km=`/*!sc*/
`,Gm=typeof window<"u"&&"HTMLElement"in window,vx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&zt!==void 0&&zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&zt.REACT_APP_SC_DISABLE_SPEEDY!==""?zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&zt!==void 0&&zt.SC_DISABLE_SPEEDY!==void 0&&zt.SC_DISABLE_SPEEDY!==""&&zt.SC_DISABLE_SPEEDY!=="false"&&zt.SC_DISABLE_SPEEDY),Xc=Object.freeze([]),bo=Object.freeze({});function _x(t,e,n){return n===void 0&&(n=bo),t.theme!==n.theme&&t.theme||e||n.theme}var aS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ex=/(^-|-$)/g;function f0(t){return t.replace(wx,"-").replace(Ex,"")}var Sx=/(a)(d)/gi,Al=52,p0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Xf(t){var e,n="";for(e=Math.abs(t);e>Al;e=e/Al|0)n=p0(e%Al)+n;return(p0(e%Al)+n).replace(Sx,"$1-$2")}var Id,lS=5381,oo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},uS=function(t){return oo(lS,t)};function Tx(t){return Xf(uS(t)>>>0)}function Ix(t){return t.displayName||t.name||"Component"}function Ad(t){return typeof t=="string"&&!0}var cS=typeof Symbol=="function"&&Symbol.for,hS=cS?Symbol.for("react.memo"):60115,Ax=cS?Symbol.for("react.forward_ref"):60112,Px={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rx=((Id={})[Ax]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Id[hS]=dS,Id);function m0(t){return("type"in(e=t)&&e.type.$$typeof)===hS?dS:"$$typeof"in t?Rx[t.$$typeof]:Px;var e}var kx=Object.defineProperty,xx=Object.getOwnPropertyNames,g0=Object.getOwnPropertySymbols,bx=Object.getOwnPropertyDescriptor,Ox=Object.getPrototypeOf,y0=Object.prototype;function fS(t,e,n){if(typeof e!="string"){if(y0){var r=Ox(e);r&&r!==y0&&fS(t,r,n)}var i=xx(e);g0&&(i=i.concat(g0(e)));for(var o=m0(t),s=m0(e),a=0;a<i.length;++a){var u=i[a];if(!(u in Cx||n&&n[u]||s&&u in s||o&&u in o)){var c=bx(e,u);try{kx(t,u,c)}catch{}}}}return t}function Oo(t){return typeof t=="function"}function Qm(t){return typeof t=="object"&&"styledComponentId"in t}function ui(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function v0(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ga(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Jf(t,e,n){if(n===void 0&&(n=!1),!n&&!ga(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Jf(t[r],e[r]);else if(ga(e))for(var r in e)t[r]=Jf(t[r],e[r]);return t}function Ym(t,e){Object.defineProperty(t,"toString",{value:e})}function Da(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Nx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Da(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Km);return n},t}(),Zl=new Map,Fu=new Map,eu=1,Pl=function(t){if(Zl.has(t))return Zl.get(t);for(;Fu.has(eu);)eu++;var e=eu++;return Zl.set(t,e),Fu.set(e,t),e},Dx=function(t,e){eu=e+1,Zl.set(t,e),Fu.set(e,t)},Lx="style[".concat(xo,"][").concat(sS,'="').concat(Yc,'"]'),Mx=new RegExp("^".concat(xo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vx=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},jx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Km),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(Mx);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Dx(d,c),Vx(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function Fx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(xo,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(xo,oS),r.setAttribute(sS,Yc);var s=Fx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Ux=function(){function t(e){this.element=pS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Da(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),$x=function(){function t(e){this.element=pS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),zx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),_0=Gm,Bx={isServer:!Gm,useCSSOMInjection:!vx},mS=function(){function t(e,n,r){e===void 0&&(e=bo),n===void 0&&(n={});var i=this;this.options=Lt(Lt({},Bx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Gm&&_0&&(_0=!1,function(o){for(var s=document.querySelectorAll(Lx),a=0,u=s.length;a<u;a++){var c=s[a];c&&c.getAttribute(xo)!==oS&&(jx(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ym(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",c=function(p){var m=function(I){return Fu.get(I)}(p);if(m===void 0)return"continue";var T=o.names.get(m),A=s.getGroup(p);if(T===void 0||A.length===0)return"continue";var R="".concat(xo,".g").concat(p,'[id="').concat(m,'"]'),b="";T!==void 0&&T.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),u+="".concat(A).concat(R,'{content:"').concat(b,'"}').concat(Km)},d=0;d<a;d++)c(d);return u}(i)})}return t.registerId=function(e){return Pl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Lt(Lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zx(i):r?new Ux(i):new $x(i)}(this.options),new Nx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Pl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Pl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Hx=/&/g,Wx=/^\s*\/\/.*$/gm;function gS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gS(n.children,e)),n})}function qx(t){var e,n,r,i=bo,o=i.options,s=o===void 0?bo:o,a=i.plugins,u=a===void 0?Xc:a,c=function(m,T,A){return A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===qc&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Hx,n).replace(r,c))}),s.prefix&&d.push(gx),d.push(fx);var p=function(m,T,A,R){T===void 0&&(T=""),A===void 0&&(A=""),R===void 0&&(R="&"),e=R,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(Wx,""),I=hx(A||T?"".concat(A," ").concat(T," { ").concat(b," }"):b);s.namespace&&(I=gS(I,s.namespace));var y=[];return ju(I,px(d.concat(mx(function(S){return y.push(S)})))),y};return p.hash=u.length?u.reduce(function(m,T){return T.name||Da(15),oo(m,T.name)},lS).toString():"",p}var Kx=new mS,Zf=qx(),yS=oe.createContext({shouldForwardProp:void 0,styleSheet:Kx,stylis:Zf});yS.Consumer;oe.createContext(void 0);function w0(){return Ge.useContext(yS)}var Gx=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Zf);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ym(this,function(){throw Da(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Zf),this.name+e.hash},t}(),Qx=function(t){return t>="A"&&t<="Z"};function E0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Qx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var vS=function(t){return t==null||t===!1||t===""},_S=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!vS(o)&&(Array.isArray(o)&&o.isCss||Oo(o)?r.push("".concat(E0(i),":"),o,";"):ga(o)?r.push.apply(r,Vu(Vu(["".concat(i," {")],_S(o),!1),["}"],!1)):r.push("".concat(E0(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in yx||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mi(t,e,n,r){if(vS(t))return[];if(Qm(t))return[".".concat(t.styledComponentId)];if(Oo(t)){if(!Oo(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return mi(i,e,n,r)}var o;return t instanceof Gx?n?(t.inject(n,r),[t.getName(r)]):[t]:ga(t)?_S(t):Array.isArray(t)?Array.prototype.concat.apply(Xc,t.map(function(s){return mi(s,e,n,r)})):[t.toString()]}function Yx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Oo(n)&&!Qm(n))return!1}return!0}var Xx=uS(Yc),Jx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yx(e),this.componentId=n,this.baseHash=oo(Xx,n),this.baseStyle=r,mS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ui(i,this.staticRulesId);else{var o=v0(mi(this.rules,e,n,r)),s=Xf(oo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=ui(i,s),this.staticRulesId=s}else{for(var u=oo(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=v0(mi(p,e,n,r));u=oo(u,m+d),c+=m}}if(c){var T=Xf(u>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(c,".".concat(T),void 0,this.componentId)),i=ui(i,T)}}return i},t}(),wS=oe.createContext(void 0);wS.Consumer;var Pd={};function Zx(t,e,n){var r=Qm(t),i=t,o=!Ad(t),s=e.attrs,a=s===void 0?Xc:s,u=e.componentId,c=u===void 0?function(k,N){var O=typeof k!="string"?"sc":f0(k);Pd[O]=(Pd[O]||0)+1;var v="".concat(O,"-").concat(Tx(Yc+O+Pd[O]));return N?"".concat(N,"-").concat(v):v}(e.displayName,e.parentComponentId):u,d=e.displayName,p=d===void 0?function(k){return Ad(k)?"styled.".concat(k):"Styled(".concat(Ix(k),")")}(t):d,m=e.displayName&&e.componentId?"".concat(f0(e.displayName),"-").concat(e.componentId):e.componentId||c,T=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,A=e.shouldForwardProp;if(r&&i.shouldForwardProp){var R=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;A=function(k,N){return R(k,N)&&b(k,N)}}else A=R}var I=new Jx(n,m,r?i.componentStyle:void 0);function y(k,N){return function(O,v,g){var _=O.attrs,E=O.componentStyle,C=O.defaultProps,x=O.foldedComponentIds,P=O.styledComponentId,q=O.target,de=oe.useContext(wS),ve=w0(),Te=O.shouldForwardProp||ve.shouldForwardProp,U=_x(v,de,C)||bo,V=function(ce,Ie,Ae){for(var St,en=Lt(Lt({},Ie),{className:void 0,theme:Ae}),cr=0;cr<ce.length;cr+=1){var $n=Oo(St=ce[cr])?St(en):St;for(var tn in $n)en[tn]=tn==="className"?ui(en[tn],$n[tn]):tn==="style"?Lt(Lt({},en[tn]),$n[tn]):$n[tn]}return Ie.className&&(en.className=ui(en.className,Ie.className)),en}(_,v,U),j=V.as||q,K={};for(var H in V)V[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&V.theme===U||(H==="forwardedAs"?K.as=V.forwardedAs:Te&&!Te(H,j)||(K[H]=V[H]));var Y=function(ce,Ie){var Ae=w0(),St=ce.generateAndInjectStyles(Ie,Ae.styleSheet,Ae.stylis);return St}(E,V),ge=ui(x,P);return Y&&(ge+=" "+Y),V.className&&(ge+=" "+V.className),K[Ad(j)&&!aS.has(j)?"class":"className"]=ge,K.ref=g,Ge.createElement(j,K)}(S,k,N)}y.displayName=p;var S=oe.forwardRef(y);return S.attrs=T,S.componentStyle=I,S.displayName=p,S.shouldForwardProp=A,S.foldedComponentIds=r?ui(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=m,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(N){for(var O=[],v=1;v<arguments.length;v++)O[v-1]=arguments[v];for(var g=0,_=O;g<_.length;g++)Jf(N,_[g],!0);return N}({},i.defaultProps,k):k}}),Ym(S,function(){return".".concat(S.styledComponentId)}),o&&fS(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function S0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var T0=function(t){return Object.assign(t,{isCss:!0})};function eb(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Oo(t)||ga(t))return T0(mi(S0(Xc,Vu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?mi(r):T0(mi(S0(r,e)))}function ep(t,e,n){if(n===void 0&&(n=bo),!e)throw Da(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,eb.apply(void 0,Vu([i],o,!1)))};return r.attrs=function(i){return ep(t,e,Lt(Lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ep(t,e,Lt(Lt({},n),i))},r}var ES=function(t){return ep(Zx,t)},te=ES;aS.forEach(function(t){te[t]=ES(t)});const tb="/assets/login-background-MxqaK5nY.jpg",nb="/assets/cta-logo-one-DDf4PjC4.svg",rb="/assets/cta-logo-two-BUg8CkjZ.png",ib=()=>M.jsx(ob,{children:M.jsxs(sb,{children:[M.jsxs(lb,{children:[M.jsx(ub,{src:nb,alt:""}),M.jsx(cb,{children:"GET ALL THERE"}),M.jsx(hb,{children:"Get Premier Access to Dune 2 and Kung Fu Panda 4 for an additional fee with a Ethio+ subscription. As of 05/13/24, the price of Ethio+ and The Disney Bundle will increase by 100birr."}),M.jsx(db,{src:rb,alt:""})]}),M.jsx(ab,{})]})}),ob=te.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`,sb=te.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`,ab=te.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${tb});
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`,lb=te.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`,ub=te.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`,cb=te.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`,hb=te.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`,db=te.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`,fb="data:image/svg+xml,%3csvg%20alt=''%20aria-hidden='true'%20aria-label='home'%20color='%23fff'%20role='img'%20version='1.1'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20data-route='HOME'%20style='color:%20white;%20fill:%20white;'%3e%3cpath%20d='M26.882%2019.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921%206.72l12.694%2012.694h-3.733z'%20class='sc-kAzzGY%20dGwULW'%3e%3c/path%3e%3c/svg%3e",pb="data:image/svg+xml,%3csvg%20alt=''%20aria-hidden='true'%20aria-label='search'%20color='%23fff'%20role='img'%20version='1.1'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20data-route='SEARCH'%20style='color:%20white;%20fill:%20white;'%3e%3cpath%20d='M21.866%2024.337c-3.933%202.762-9.398%202.386-12.914-1.13-3.936-3.936-3.936-10.318%200-14.255%203.937-3.936%2010.32-3.936%2014.256%200%203.327%203.327%203.842%208.402%201.545%2012.27l4.56%204.558a2%202%200%200%201%200%202.829l-.174.173a2%202%200%200%201-2.828%200l-4.445-4.445zm-5.786-1.36a6.897%206.897%200%201%200%200-13.794%206.897%206.897%200%200%200%200%2013.794z'%20class='sc-kAzzGY%20dGwULW'%3e%3c/path%3e%3c/svg%3e",mb="data:image/svg+xml,%3csvg%20alt=''%20aria-hidden='true'%20aria-label='watchlist'%20color='%23fff'%20role='img'%20version='1.1'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20data-route='WATCHLIST'%20style='color:%20white;%20fill:%20white;'%3e%3cpath%20d='M27.85%2015.1H20.9V8.15a2.9%202.9%200%200%200-5.8%200v6.95H8.15a2.9%202.9%200%200%200%200%205.8h6.95v6.95a2.9%202.9%200%200%200%205.8%200V20.9h6.95a2.9%202.9%200%201%200%200-5.8z'%20class='sc-kAzzGY%20dGwULW'%3e%3c/path%3e%3c/svg%3e",gb="data:image/svg+xml,%3csvg%20alt=''%20aria-hidden='true'%20aria-label='originals'%20color='%23fff'%20role='img'%20version='1.1'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20data-route='ORIGINALS'%20style='color:%20white;%20fill:%20white;'%3e%3cpath%20d='M17.625%2026.028L10.44%2030l1.373-8.412L6%2015.631l8.033-1.228%203.592-7.653%203.592%207.653%208.033%201.228-5.813%205.957L24.81%2030z'%20class='sc-kAzzGY%20dGwULW'%3e%3c/path%3e%3c/svg%3e",yb="data:image/svg+xml,%3csvg%20alt=''%20aria-hidden='true'%20aria-label='movies'%20color='%23fff'%20role='img'%20version='1.1'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20data-route='MOVIES'%20style='color:%20white;%20fill:%20white;'%3e%3cpath%20d='M24.71%2020.07a2.97%202.97%200%201%200-4.2-4.2%202.97%202.97%200%200%200%204.2%204.2m-12.262%200a2.97%202.97%200%201%200-4.2-4.2%202.97%202.97%200%200%200%204.2%204.2m6.173-10.31a2.969%202.969%200%201%200-4.199%204.198%202.969%202.969%200%200%200%204.199-4.198m0%2012.262a2.969%202.969%200%201%200-4.199%204.198%202.969%202.969%200%200%200%204.199-4.198m-1.544-4.629a.846.846%200%201%200-1.197%201.196.846.846%200%200%200%201.197-1.196m18.06-.644c-3.33%206.913-8.165%209.928-11.635%2011.24-2.57.971-4.762%201.178-5.949%201.208-.348.032-.698.053-1.052.053C10.287%2029.25%205.25%2024.213%205.25%2018S10.287%206.75%2016.5%206.75c6.214%200%2011.25%205.037%2011.25%2011.25a11.19%2011.19%200%200%201-2.493%207.054c2.832-1.612%205.844-4.382%208.138-9.143a.968.968%200%200%201%201.742.838'%20class='sc-kAzzGY%20dGwULW'%3e%3c/path%3e%3c/svg%3e",vb="data:image/svg+xml,%3csvg%20alt=''%20aria-hidden='true'%20aria-label='series'%20color='%23fff'%20role='img'%20version='1.1'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20data-route='SERIES'%20style='color:%20white;%20fill:%20white;'%3e%3cpath%20d='M18.84%2011.965h6.722a4%204%200%200%201%204%204V26a4%204%200%200%201-4%204H10.375a4%204%200%200%201-4-4V15.965a4%204%200%200%201%204-4h6.211l-3.981-3.981a1.162%201.162%200%201%201%201.643-1.644l3.465%203.465%203.464-3.465a1.162%201.162%200%200%201%201.644%201.644l-3.982%203.981zm6.428%207.73a1.718%201.718%200%201%200%200-3.436%201.718%201.718%200%200%200%200%203.436zm0%206.011a1.718%201.718%200%201%200%200-3.435%201.718%201.718%200%200%200%200%203.435z'%20class='sc-kAzzGY%20dGwULW'%3e%3c/path%3e%3c/svg%3e";var I0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_b=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},TS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|c>>6,T=c&63;u||(T=64,s||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_b(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||p==null)throw new wb;const m=o<<2|a>>4;if(r.push(m),c!==64){const T=a<<4&240|c>>2;if(r.push(T),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eb=function(t){const e=SS(t);return TS.encodeByteArray(e,!0)},Uu=function(t){return Eb(t).replace(/\./g,"")},IS=function(t){try{return TS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=()=>Sb().__FIREBASE_DEFAULTS__,Ib=()=>{if(typeof process>"u"||typeof I0>"u")return;const t=I0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ab=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&IS(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return Tb()||Ib()||Ab()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},AS=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PS=t=>{const e=AS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},CS=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config},RS=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Uu(JSON.stringify(n)),Uu(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Rb(){var t;const e=(t=Jc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bb(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ob(){return!Rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nb(){try{return typeof indexedDB=="object"}catch{return!1}}function Db(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lb,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Mb(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Fn(i,a,r)}}function Mb(t,e){return t.replace(Vb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vb=/\{\$([^}]+)}/g;function jb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(A0(o)&&A0(s)){if(!$u(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fb(t,e){const n=new Ub(t,e);return n.subscribe.bind(n)}class Ub{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$b(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cd),i.error===void 0&&(i.error=Cd),i.complete===void 0&&(i.complete=Cd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $b(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hb(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bb(t){return t===ii?void 0:t}function Hb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const qb={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Kb=ue.INFO,Gb={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Qb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Gb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xm{constructor(e){this.name=e,this._logLevel=Kb,this._logHandler=Qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Yb=(t,e)=>e.some(n=>t instanceof n);let P0,C0;function Xb(){return P0||(P0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jb(){return C0||(C0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xS=new WeakMap,tp=new WeakMap,bS=new WeakMap,Rd=new WeakMap,Jm=new WeakMap;function Zb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Vr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&xS.set(n,t)}).catch(()=>{}),Jm.set(e,t),e}function e2(t){if(tp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});tp.set(t,e)}let np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function t2(t){np=t(np)}function n2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kd(this),e,...n);return bS.set(r,e.sort?e.sort():[e]),Vr(r)}:Jb().includes(t)?function(...e){return t.apply(kd(this),e),Vr(xS.get(this))}:function(...e){return Vr(t.apply(kd(this),e))}}function r2(t){return typeof t=="function"?n2(t):(t instanceof IDBTransaction&&e2(t),Yb(t,Xb())?new Proxy(t,np):t)}function Vr(t){if(t instanceof IDBRequest)return Zb(t);if(Rd.has(t))return Rd.get(t);const e=r2(t);return e!==t&&(Rd.set(t,e),Jm.set(e,t)),e}const kd=t=>Jm.get(t);function i2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Vr(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Vr(s.result),u.oldVersion,u.newVersion,Vr(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const o2=["get","getKey","getAll","getAllKeys","count"],s2=["put","add","delete","clear"],xd=new Map;function R0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xd.get(e))return xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=s2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||o2.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return xd.set(e,o),o}t2(t=>({...t,get:(e,n,r)=>R0(e,n)||t.get(e,n,r),has:(e,n)=>!!R0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function l2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rp="@firebase/app",k0="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Xm("@firebase/app"),u2="@firebase/app-compat",c2="@firebase/analytics-compat",h2="@firebase/analytics",d2="@firebase/app-check-compat",f2="@firebase/app-check",p2="@firebase/auth",m2="@firebase/auth-compat",g2="@firebase/database",y2="@firebase/database-compat",v2="@firebase/functions",_2="@firebase/functions-compat",w2="@firebase/installations",E2="@firebase/installations-compat",S2="@firebase/messaging",T2="@firebase/messaging-compat",I2="@firebase/performance",A2="@firebase/performance-compat",P2="@firebase/remote-config",C2="@firebase/remote-config-compat",R2="@firebase/storage",k2="@firebase/storage-compat",x2="@firebase/firestore",b2="@firebase/vertexai-preview",O2="@firebase/firestore-compat",N2="firebase",D2="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="[DEFAULT]",L2={[rp]:"fire-core",[u2]:"fire-core-compat",[h2]:"fire-analytics",[c2]:"fire-analytics-compat",[f2]:"fire-app-check",[d2]:"fire-app-check-compat",[p2]:"fire-auth",[m2]:"fire-auth-compat",[g2]:"fire-rtdb",[y2]:"fire-rtdb-compat",[v2]:"fire-fn",[_2]:"fire-fn-compat",[w2]:"fire-iid",[E2]:"fire-iid-compat",[S2]:"fire-fcm",[T2]:"fire-fcm-compat",[I2]:"fire-perf",[A2]:"fire-perf-compat",[P2]:"fire-rc",[C2]:"fire-rc-compat",[R2]:"fire-gcs",[k2]:"fire-gcs-compat",[x2]:"fire-fst",[O2]:"fire-fst-compat",[b2]:"fire-vertex","fire-js":"fire-js",[N2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map,M2=new Map,op=new Map;function x0(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ci(t){const e=t.name;if(op.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;op.set(e,t);for(const n of zu.values())x0(n,t);for(const n of M2.values())x0(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new La("app","Firebase",V2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=D2;function OS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ip,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jr.create("bad-app-name",{appName:String(i)});if(n||(n=CS()),!n)throw jr.create("no-options");const o=zu.get(i);if(o){if($u(n,o.options)&&$u(r,o.config))return o;throw jr.create("duplicate-app",{appName:i})}const s=new Wb(i);for(const u of op.values())s.addComponent(u);const a=new j2(n,r,s);return zu.set(i,a),a}function Zm(t=ip){const e=zu.get(t);if(!e&&t===ip&&CS())return OS();if(!e)throw jr.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let i=(r=L2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}Ci(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2="firebase-heartbeat-database",U2=1,ya="firebase-heartbeat-store";let bd=null;function NS(){return bd||(bd=i2(F2,U2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),bd}async function $2(t){try{const n=(await NS()).transaction(ya),r=await n.objectStore(ya).get(DS(t));return await n.done,r}catch(e){if(e instanceof Fn)Pi.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function b0(t,e){try{const r=(await NS()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,DS(t)),await r.done}catch(n){if(n instanceof Fn)Pi.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function DS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=1024,B2=30*24*60*60*1e3;class H2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=O0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=B2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=O0(),{heartbeatsToSend:r,unsentEntries:i}=W2(this._heartbeatsCache.heartbeats),o=Uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function O0(){return new Date().toISOString().substring(0,10)}function W2(t,e=z2){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),N0(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nb()?Db().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N0(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){Ci(new Hr("platform-logger",e=>new a2(e),"PRIVATE")),Ci(new Hr("heartbeat",e=>new H2(e),"PRIVATE")),xn(rp,k0,t),xn(rp,k0,"esm2017"),xn("fire-js","")}K2("");var G2="firebase",Q2="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(G2,Q2,"app");function LS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y2=LS,MS=new La("auth","Firebase",LS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Xm("@firebase/auth");function X2(t,...e){Bu.logLevel<=ue.WARN&&Bu.warn(`Auth (${Vi}): ${t}`,...e)}function tu(t,...e){Bu.logLevel<=ue.ERROR&&Bu.error(`Auth (${Vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw tg(t,...e)}function En(t,...e){return tg(t,...e)}function eg(t,e,n){const r=Object.assign(Object.assign({},Y2()),{[e]:n});return new La("auth","Firebase",r).create(e,{appName:t.name})}function gi(t){return eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function J2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ln(t,"argument-error"),eg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return MS.create(t,...e)}function ee(t,e,...n){if(!t)throw tg(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function or(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Z2(){return D0()==="http:"||D0()==="https:"}function D0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z2()||kb()||"connection"in navigator)?navigator.onLine:!0}function tO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=Cb()||xb()}get(){return eO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new Va(3e4,6e4);function rg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jo(t,e,n,r,i={}){return jS(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ma(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),VS.fetch()(FS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))})}async function jS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nO),e);try{const i=new oO(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Cl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cl(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Cl(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Cl(t,"user-disabled",s);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw eg(t,d,c);Ln(t,d)}}catch(i){if(i instanceof Fn)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function iO(t,e,n,r,i={}){const o=await Jo(t,e,n,r,i);return"mfaPendingCredential"in o&&Ln(t,"multi-factor-auth-required",{_serverResponse:o}),o}function FS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ng(t.config,i):`${t.config.apiScheme}://${i}`}class oO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),rO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t,e){return Jo(t,"POST","/v1/accounts:delete",e)}async function US(t,e){return Jo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aO(t,e=!1){const n=ur(t),r=await n.getIdToken(e),i=ig(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Gs(Od(i.auth_time)),issuedAtTime:Gs(Od(i.iat)),expirationTime:Gs(Od(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function ig(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=IS(n);return i?JSON.parse(i):(tu("Failed to decode base64 JWT payload"),null)}catch(i){return tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function L0(t){const e=ig(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&lO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await va(t,US(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?$S(o.providerUserInfo):[],a=hO(t.providerData,s),u=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ap(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function cO(t){const e=ur(t);await Hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $S(t){return t.map(e=>{var{providerId:n}=e,r=Hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(t,e){const n=await jS(t,{},async()=>{const r=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=FS(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",VS.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fO(t,e){return Jo(t,"POST","/v2/accounts:revokeToken",rg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=L0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await dO(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new fo;return r&&(ee(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ap(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await va(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aO(this,e)}reload(){return cO(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await va(this,sO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,A=(s=n.photoURL)!==null&&s!==void 0?s:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:k,isAnonymous:N,providerData:O,stsTokenManager:v}=n;ee(S&&v,e,"internal-error");const g=fo.fromJSON(this.name,v);ee(typeof S=="string",e,"internal-error"),mr(p,e.name),mr(m,e.name),ee(typeof k=="boolean",e,"internal-error"),ee(typeof N=="boolean",e,"internal-error"),mr(T,e.name),mr(A,e.name),mr(R,e.name),mr(b,e.name),mr(I,e.name),mr(y,e.name);const _=new Jn({uid:S,auth:e,email:m,emailVerified:k,displayName:p,isAnonymous:N,photoURL:A,phoneNumber:T,tenantId:R,stsTokenManager:g,createdAt:I,lastLoginAt:y});return O&&Array.isArray(O)&&(_.providerData=O.map(E=>Object.assign({},E))),b&&(_._redirectEventId=b),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const o=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hu(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?$S(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new fo;a.updateFromIdToken(r);const u=new Jn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ap(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Map;function Zn(t){or(t instanceof Function,"Expected a class definition");let e=M0.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zS.type="NONE";const V0=zS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class po{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=nu(this.userKey,i.apiKey,o),this.fullPersistenceKey=nu("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new po(Zn(V0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||Zn(V0);const s=nu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(s);if(d){const p=Jn._fromJSON(e,d);c!==o&&(a=p),o=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new po(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new po(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(BS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KS(e))return"Blackberry";if(GS(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||HS(e))&&!e.includes("edge/"))return"Chrome";if(qS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function BS(t=ct()){return/firefox\//i.test(t)}function og(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HS(t=ct()){return/crios\//i.test(t)}function WS(t=ct()){return/iemobile/i.test(t)}function qS(t=ct()){return/android/i.test(t)}function KS(t=ct()){return/blackberry/i.test(t)}function GS(t=ct()){return/webos/i.test(t)}function eh(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pO(t=ct()){var e;return eh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mO(){return bb()&&document.documentMode===10}function QS(t=ct()){return eh(t)||qS(t)||GS(t)||KS(t)||/windows phone/i.test(t)||WS(t)}function gO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e=[]){let n;switch(t){case"Browser":n=j0(ct());break;case"Worker":n=`${j0(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t,e={}){return Jo(t,"GET","/v2/passwordPolicy",rg(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=6;class wO{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:_O,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new F0(this),this.idTokenSubscription=new F0(this),this.beforeStateQueue=new yO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await US(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(gi(this));const n=e?ur(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vO(this),n=new wO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&X2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function th(t){return ur(t)}class F0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fb(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SO(t){sg=t}function TO(t){return sg.loadJS(t)}function IO(){return sg.gapiScript}function AO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if($u(o,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function CO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RO(t,e,n){const r=th(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=XS(e),{host:s,port:a}=kO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),xO()}function XS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kO(t){const e=XS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:U0(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:U0(s)}}}function U0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e){return iO(t,"POST","/v1/accounts:signInWithIdp",rg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="http://localhost";class Ri extends JS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ri(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return mo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mo(e,n)}buildRequest(){const e={requestUri:bO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends ja{constructor(){super("facebook.com")}static credential(e){return Ri._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ri._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ja{constructor(){super("github.com")}static credential(e){return Ri._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ja{constructor(){super("twitter.com")}static credential(e,n){return Ri._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Jn._fromIdTokenResponse(e,r,i),s=$0(r);return new No({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$0(r);return new No({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Fn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wu(e,n,r,i)}}function ZS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(t,o,e,r):o})}async function OO(t,e,n=!1){const r=await va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return No._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e,n=!1){const{auth:r}=t;if(Yn(r.app))return Promise.reject(gi(r));const i="reauthenticate";try{const o=await va(t,ZS(r,i,e,t),n);ee(o.idToken,r,"internal-error");const s=ig(o.idToken);ee(s,r,"internal-error");const{sub:a}=s;return ee(t.uid===a,r,"user-mismatch"),No._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t,e,n=!1){if(Yn(t.app))return Promise.reject(gi(t));const r="signIn",i=await ZS(t,r,e),o=await No._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function LO(t,e,n,r){return ur(t).onIdTokenChanged(e,n,r)}function MO(t,e,n){return ur(t).beforeAuthStateChanged(e,n)}const qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(){const t=ct();return og(t)||eh(t)}const jO=1e3,FO=10;class tT extends eT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VO()&&gO(),this.fallbackToPolling=QS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);mO()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tT.type="LOCAL";const UO=tT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT extends eT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nT.type="SESSION";const rT=nT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),u=await $O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const c=lg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function BO(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function HO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qO(){return iT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="firebaseLocalStorageDb",KO=1,Ku="firebaseLocalStorage",sT="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function GO(){const t=indexedDB.deleteDatabase(oT);return new Fa(t).toPromise()}function lp(){const t=indexedDB.open(oT,KO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:sT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await GO(),e(await lp()))})})}async function z0(t,e,n){const r=rh(t,!0).put({[sT]:e,value:n});return new Fa(r).toPromise()}async function QO(t,e){const n=rh(t,!1).get(e),r=await new Fa(n).toPromise();return r===void 0?null:r.value}function B0(t,e){const n=rh(t,!0).delete(e);return new Fa(n).toPromise()}const YO=800,XO=3;class aT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(qO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HO(),!this.activeServiceWorker)return;this.sender=new zO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lp();return await z0(e,qu,"1"),await B0(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>z0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>B0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=rh(i,!1).getAll();return new Fa(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aT.type="LOCAL";const JO=aT;new Va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e){return e?Zn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends JS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZO(t){return DO(t.auth,new ug(t),t.bypassAuthState)}function eN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),NO(n,new ug(t),t.bypassAuthState)}async function tN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),OO(n,new ug(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZO;case"linkViaPopup":case"linkViaRedirect":return tN;case"reauthViaPopup":case"reauthViaRedirect":return eN;default:Ln(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=new Va(2e3,1e4);async function rN(t,e,n){if(Yn(t.app))return Promise.reject(En(t,"operation-not-supported-in-this-environment"));const r=th(t);J2(t,e,ag);const i=lT(r,n);return new ci(r,"signInViaPopup",e,i).executeNotNull()}class ci extends uT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nN.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="pendingRedirect",ru=new Map;class oN extends uT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await sN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sN(t,e){const n=uN(e),r=lN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aN(t,e){ru.set(t._key(),e)}function lN(t){return Zn(t._redirectPersistence)}function uN(t){return nu(iN,t.config.apiKey,t.name)}async function cN(t,e,n=!1){if(Yn(t.app))return Promise.reject(gi(t));const r=th(t),i=lT(r,e),s=await new oN(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=10*60*1e3;class dN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hN&&this.cachedEventUids.clear(),this.cachedEventUids.has(H0(e))}saveEventToCache(e){this.cachedEventUids.add(H0(e)),this.lastProcessedEventTime=Date.now()}}function H0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e={}){return Jo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gN=/^https?/;async function yN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pN(t);for(const n of e)try{if(vN(n))return}catch{}Ln(t,"unauthorized-domain")}function vN(t){const e=sp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!gN.test(n))return!1;if(mN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=new Va(3e4,6e4);function W0(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wN(t){return new Promise((e,n)=>{var r,i,o;function s(){W0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W0(),n(En(t,"network-request-failed"))},timeout:_N.get()})}if(!((i=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=bn().gapi)===null||o===void 0)&&o.load)s();else{const a=AO("iframefcb");return bn()[a]=()=>{gapi.load?s():n(En(t,"network-request-failed"))},TO(`${IO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw iu=null,e})}let iu=null;function EN(t){return iu=iu||wN(t),iu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=new Va(5e3,15e3),TN="__/auth/iframe",IN="emulator/auth/iframe",AN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CN(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ng(e,IN):`https://${t.config.authDomain}/${TN}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},i=PN.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ma(r).slice(1)}`}async function RN(t){const e=await EN(t),n=bn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:CN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AN,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=En(t,"network-request-failed"),a=bn().setTimeout(()=>{o(s)},SN.get());function u(){bn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xN=500,bN=600,ON="_blank",NN="http://localhost";class q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DN(t,e,n,r=xN,i=bN){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},kN),{width:r.toString(),height:i.toString(),top:o,left:s}),c=ct().toLowerCase();n&&(a=HS(c)?ON:n),BS(c)&&(e=e||NN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,A])=>`${m}${T}=${A},`,"");if(pO(c)&&a!=="_self")return LN(e||"",a),new q0(null);const p=window.open(e||"",a,d);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new q0(p)}function LN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="__/auth/handler",VN="emulator/auth/handler",jN=encodeURIComponent("fac");async function K0(t,e,n,r,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(e instanceof ag){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",jb(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))s[d]=p}if(e instanceof ja){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${jN}=${encodeURIComponent(u)}`:"";return`${FN(t)}?${Ma(a).slice(1)}${c}`}function FN({config:t}){return t.emulator?ng(t,VN):`https://${t.authDomain}/${MN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="webStorageSupport";class UN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rT,this._completeRedirectFn=cN,this._overrideRedirectResult=aN}async _openPopup(e,n,r,i){var o;or((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await K0(e,n,r,sp(),i);return DN(e,s,lg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await K0(e,n,r,sp(),i);return BO(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(or(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RN(e),r=new dN(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Nd];s!==void 0&&n(!!s),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QS()||og()||eh()}}const $N=UN;var G0="@firebase/auth",Q0="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HN(t){Ci(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ee(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YS(t)},c=new EO(r,i,o,u);return CO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ci(new Hr("auth-internal",e=>{const n=th(e.getProvider("auth").getImmediate());return(r=>new zN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(G0,Q0,BN(t)),xn(G0,Q0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=5*60,qN=RS("authIdTokenMaxAge")||WN;let Y0=null;const KN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qN)return;const i=n==null?void 0:n.token;Y0!==i&&(Y0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GN(t=Zm()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PO(t,{popupRedirectResolver:$N,persistence:[JO,UO,rT]}),r=RS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=KN(o.toString());MO(n,s,()=>s(n.currentUser)),LO(n,a=>s(a))}}const i=AS("auth");return i&&RO(n,`http://${i}`),n}function QN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=En("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",QN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HN("Browser");var X0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,hT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,C,x){for(var P=Array(arguments.length-2),q=2;q<arguments.length;q++)P[q-2]=arguments[q];return g.prototype[C].apply(E,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)E[C]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(C=0;16>C;++C)E[C]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],C=v.g[2];var x=v.g[3],P=g+(x^_&(C^x))+E[0]+3614090360&4294967295;g=_+(P<<7&4294967295|P>>>25),P=x+(C^g&(_^C))+E[1]+3905402710&4294967295,x=g+(P<<12&4294967295|P>>>20),P=C+(_^x&(g^_))+E[2]+606105819&4294967295,C=x+(P<<17&4294967295|P>>>15),P=_+(g^C&(x^g))+E[3]+3250441966&4294967295,_=C+(P<<22&4294967295|P>>>10),P=g+(x^_&(C^x))+E[4]+4118548399&4294967295,g=_+(P<<7&4294967295|P>>>25),P=x+(C^g&(_^C))+E[5]+1200080426&4294967295,x=g+(P<<12&4294967295|P>>>20),P=C+(_^x&(g^_))+E[6]+2821735955&4294967295,C=x+(P<<17&4294967295|P>>>15),P=_+(g^C&(x^g))+E[7]+4249261313&4294967295,_=C+(P<<22&4294967295|P>>>10),P=g+(x^_&(C^x))+E[8]+1770035416&4294967295,g=_+(P<<7&4294967295|P>>>25),P=x+(C^g&(_^C))+E[9]+2336552879&4294967295,x=g+(P<<12&4294967295|P>>>20),P=C+(_^x&(g^_))+E[10]+4294925233&4294967295,C=x+(P<<17&4294967295|P>>>15),P=_+(g^C&(x^g))+E[11]+2304563134&4294967295,_=C+(P<<22&4294967295|P>>>10),P=g+(x^_&(C^x))+E[12]+1804603682&4294967295,g=_+(P<<7&4294967295|P>>>25),P=x+(C^g&(_^C))+E[13]+4254626195&4294967295,x=g+(P<<12&4294967295|P>>>20),P=C+(_^x&(g^_))+E[14]+2792965006&4294967295,C=x+(P<<17&4294967295|P>>>15),P=_+(g^C&(x^g))+E[15]+1236535329&4294967295,_=C+(P<<22&4294967295|P>>>10),P=g+(C^x&(_^C))+E[1]+4129170786&4294967295,g=_+(P<<5&4294967295|P>>>27),P=x+(_^C&(g^_))+E[6]+3225465664&4294967295,x=g+(P<<9&4294967295|P>>>23),P=C+(g^_&(x^g))+E[11]+643717713&4294967295,C=x+(P<<14&4294967295|P>>>18),P=_+(x^g&(C^x))+E[0]+3921069994&4294967295,_=C+(P<<20&4294967295|P>>>12),P=g+(C^x&(_^C))+E[5]+3593408605&4294967295,g=_+(P<<5&4294967295|P>>>27),P=x+(_^C&(g^_))+E[10]+38016083&4294967295,x=g+(P<<9&4294967295|P>>>23),P=C+(g^_&(x^g))+E[15]+3634488961&4294967295,C=x+(P<<14&4294967295|P>>>18),P=_+(x^g&(C^x))+E[4]+3889429448&4294967295,_=C+(P<<20&4294967295|P>>>12),P=g+(C^x&(_^C))+E[9]+568446438&4294967295,g=_+(P<<5&4294967295|P>>>27),P=x+(_^C&(g^_))+E[14]+3275163606&4294967295,x=g+(P<<9&4294967295|P>>>23),P=C+(g^_&(x^g))+E[3]+4107603335&4294967295,C=x+(P<<14&4294967295|P>>>18),P=_+(x^g&(C^x))+E[8]+1163531501&4294967295,_=C+(P<<20&4294967295|P>>>12),P=g+(C^x&(_^C))+E[13]+2850285829&4294967295,g=_+(P<<5&4294967295|P>>>27),P=x+(_^C&(g^_))+E[2]+4243563512&4294967295,x=g+(P<<9&4294967295|P>>>23),P=C+(g^_&(x^g))+E[7]+1735328473&4294967295,C=x+(P<<14&4294967295|P>>>18),P=_+(x^g&(C^x))+E[12]+2368359562&4294967295,_=C+(P<<20&4294967295|P>>>12),P=g+(_^C^x)+E[5]+4294588738&4294967295,g=_+(P<<4&4294967295|P>>>28),P=x+(g^_^C)+E[8]+2272392833&4294967295,x=g+(P<<11&4294967295|P>>>21),P=C+(x^g^_)+E[11]+1839030562&4294967295,C=x+(P<<16&4294967295|P>>>16),P=_+(C^x^g)+E[14]+4259657740&4294967295,_=C+(P<<23&4294967295|P>>>9),P=g+(_^C^x)+E[1]+2763975236&4294967295,g=_+(P<<4&4294967295|P>>>28),P=x+(g^_^C)+E[4]+1272893353&4294967295,x=g+(P<<11&4294967295|P>>>21),P=C+(x^g^_)+E[7]+4139469664&4294967295,C=x+(P<<16&4294967295|P>>>16),P=_+(C^x^g)+E[10]+3200236656&4294967295,_=C+(P<<23&4294967295|P>>>9),P=g+(_^C^x)+E[13]+681279174&4294967295,g=_+(P<<4&4294967295|P>>>28),P=x+(g^_^C)+E[0]+3936430074&4294967295,x=g+(P<<11&4294967295|P>>>21),P=C+(x^g^_)+E[3]+3572445317&4294967295,C=x+(P<<16&4294967295|P>>>16),P=_+(C^x^g)+E[6]+76029189&4294967295,_=C+(P<<23&4294967295|P>>>9),P=g+(_^C^x)+E[9]+3654602809&4294967295,g=_+(P<<4&4294967295|P>>>28),P=x+(g^_^C)+E[12]+3873151461&4294967295,x=g+(P<<11&4294967295|P>>>21),P=C+(x^g^_)+E[15]+530742520&4294967295,C=x+(P<<16&4294967295|P>>>16),P=_+(C^x^g)+E[2]+3299628645&4294967295,_=C+(P<<23&4294967295|P>>>9),P=g+(C^(_|~x))+E[0]+4096336452&4294967295,g=_+(P<<6&4294967295|P>>>26),P=x+(_^(g|~C))+E[7]+1126891415&4294967295,x=g+(P<<10&4294967295|P>>>22),P=C+(g^(x|~_))+E[14]+2878612391&4294967295,C=x+(P<<15&4294967295|P>>>17),P=_+(x^(C|~g))+E[5]+4237533241&4294967295,_=C+(P<<21&4294967295|P>>>11),P=g+(C^(_|~x))+E[12]+1700485571&4294967295,g=_+(P<<6&4294967295|P>>>26),P=x+(_^(g|~C))+E[3]+2399980690&4294967295,x=g+(P<<10&4294967295|P>>>22),P=C+(g^(x|~_))+E[10]+4293915773&4294967295,C=x+(P<<15&4294967295|P>>>17),P=_+(x^(C|~g))+E[1]+2240044497&4294967295,_=C+(P<<21&4294967295|P>>>11),P=g+(C^(_|~x))+E[8]+1873313359&4294967295,g=_+(P<<6&4294967295|P>>>26),P=x+(_^(g|~C))+E[15]+4264355552&4294967295,x=g+(P<<10&4294967295|P>>>22),P=C+(g^(x|~_))+E[6]+2734768916&4294967295,C=x+(P<<15&4294967295|P>>>17),P=_+(x^(C|~g))+E[13]+1309151649&4294967295,_=C+(P<<21&4294967295|P>>>11),P=g+(C^(_|~x))+E[4]+4149444226&4294967295,g=_+(P<<6&4294967295|P>>>26),P=x+(_^(g|~C))+E[11]+3174756917&4294967295,x=g+(P<<10&4294967295|P>>>22),P=C+(g^(x|~_))+E[2]+718787259&4294967295,C=x+(P<<15&4294967295|P>>>17),P=_+(x^(C|~g))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(C+(P<<21&4294967295|P>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+x&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,E=this.B,C=this.h,x=0;x<g;){if(C==0)for(;x<=_;)i(this,v,x),x+=this.blockSize;if(typeof v=="string"){for(;x<g;)if(E[C++]=v.charCodeAt(x++),C==this.blockSize){i(this,E),C=0;break}}else for(;x<g;)if(E[C++]=v[x++],C==this.blockSize){i(this,E),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)v[_++]=this.g[g]>>>E&255;return v};function o(v,g){var _=a;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function s(v,g){this.h=g;for(var _=[],E=!0,C=v.length-1;0<=C;C--){var x=v[C]|0;E&&x==g||(_[C]=x,E=!1)}this.g=_}var a={};function u(v){return-128<=v&&128>v?o(v,function(g){return new s([g|0],0>g?-1:0)}):new s([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return b(c(-v));for(var g=[],_=1,E=0;v>=_;E++)g[E]=v/_|0,_*=4294967296;return new s(g,0)}function d(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return b(d(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(g,8)),E=p,C=0;C<v.length;C+=8){var x=Math.min(8,v.length-C),P=parseInt(v.substring(C,C+x),g);8>x?(x=c(Math.pow(g,x)),E=E.j(x).add(c(P))):(E=E.j(_),E=E.add(c(P)))}return E}var p=u(0),m=u(1),T=u(16777216);t=s.prototype,t.m=function(){if(R(this))return-b(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(R(this))return"-"+b(this).toString(v);for(var g=c(Math.pow(v,6)),_=this,E="";;){var C=k(_,g).g;_=I(_,C.j(g));var x=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=C,A(_))return x+E;for(;6>x.length;)x="0"+x;E=x+E}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function R(v){return v.h==-1}t.l=function(v){return v=I(this,v),R(v)?-1:A(v)?0:1};function b(v){for(var g=v.g.length,_=[],E=0;E<g;E++)_[E]=~v.g[E];return new s(_,~v.h).add(m)}t.abs=function(){return R(this)?b(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0,C=0;C<=g;C++){var x=E+(this.i(C)&65535)+(v.i(C)&65535),P=(x>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);E=P>>>16,x&=65535,P&=65535,_[C]=P<<16|x}return new s(_,_[_.length-1]&-2147483648?-1:0)};function I(v,g){return v.add(b(g))}t.j=function(v){if(A(this)||A(v))return p;if(R(this))return R(v)?b(this).j(b(v)):b(b(this).j(v));if(R(v))return b(this.j(b(v)));if(0>this.l(T)&&0>v.l(T))return c(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<v.g.length;C++){var x=this.i(E)>>>16,P=this.i(E)&65535,q=v.i(C)>>>16,de=v.i(C)&65535;_[2*E+2*C]+=P*de,y(_,2*E+2*C),_[2*E+2*C+1]+=x*de,y(_,2*E+2*C+1),_[2*E+2*C+1]+=P*q,y(_,2*E+2*C+1),_[2*E+2*C+2]+=x*q,y(_,2*E+2*C+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new s(_,0)};function y(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function S(v,g){this.g=v,this.h=g}function k(v,g){if(A(g))throw Error("division by zero");if(A(v))return new S(p,p);if(R(v))return g=k(b(v),g),new S(b(g.g),b(g.h));if(R(g))return g=k(v,b(g)),new S(b(g.g),g.h);if(30<v.g.length){if(R(v)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var _=m,E=g;0>=E.l(v);)_=N(_),E=N(E);var C=O(_,1),x=O(E,1);for(E=O(E,2),_=O(_,2);!A(E);){var P=x.add(E);0>=P.l(v)&&(C=C.add(_),x=P),E=O(E,1),_=O(_,1)}return g=I(v,C.j(g)),new S(C,g)}for(C=p;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),x=c(_),P=x.j(g);R(P)||0<P.l(v);)_-=E,x=c(_),P=x.j(g);A(x)&&(x=m),C=C.add(x),v=I(v,P)}return new S(C,v)}t.A=function(v){return k(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&v.i(E);return new s(_,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|v.i(E);return new s(_,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^v.i(E);return new s(_,this.h^v.h)};function N(v){for(var g=v.g.length+1,_=[],E=0;E<g;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new s(_,v.h)}function O(v,g){var _=g>>5;g%=32;for(var E=v.g.length-_,C=[],x=0;x<E;x++)C[x]=0<g?v.i(x+_)>>>g|v.i(x+_+1)<<32-g:v.i(x+_);return new s(C,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=d,yi=s}).apply(typeof X0<"u"?X0:typeof self<"u"?self:typeof window<"u"?window:{});var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dT,fT,Os,pT,ou,up,mT,gT,yT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rl=="object"&&Rl];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var f=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var D=l[w];if(!(D in f))break e;f=f[D]}l=l[l.length-1],w=f[l],h=h(w),h!=w&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function o(l,h){l instanceof String&&(l+="");var f=0,w=!1,D={next:function(){if(!w&&f<l.length){var L=f++;return{value:h(L,l[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return o(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,f){return l.call.apply(l.bind,arguments)}function p(l,h,f){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function m(l,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var w=f.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function A(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(w,D,L){for(var z=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)z[Pe-2]=arguments[Pe];return h.prototype[D].apply(w,z)}}function R(l){const h=l.length;if(0<h){const f=Array(h);for(let w=0;w<h;w++)f[w]=l[w];return f}return[]}function b(l,h){for(let f=1;f<arguments.length;f++){const w=arguments[f];if(u(w)){const D=l.length||0,L=w.length||0;l.length=D+L;for(let z=0;z<L;z++)l[D+z]=w[z]}else l.push(w)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var N=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function O(l,h,f){for(const w in l)h.call(f,l[w],w,l)}function v(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function g(l){const h={};for(const f in l)h[f]=l[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,h){let f,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(f in w)l[f]=w[f];for(let L=0;L<_.length;L++)f=_[L],Object.prototype.hasOwnProperty.call(w,f)&&(l[f]=w[f])}}function C(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function x(l){a.setTimeout(()=>{throw l},0)}function P(){var l=V;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class q{constructor(){this.h=this.g=null}add(h,f){const w=de.get();w.set(h,f),this.h?this.h.next=w:this.g=w,this.h=w}}var de=new I(()=>new ve,l=>l.reset());class ve{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,U=!1,V=new q,j=()=>{const l=a.Promise.resolve(void 0);Te=()=>{l.then(K)}};var K=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(f){x(f)}var h=de;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l}();function ce(l,h){if(Y.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(N){e:{try{k(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ie[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ce.aa.h.call(this)}}A(ce,Y);var Ie={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ae="closure_listenable_"+(1e6*Math.random()|0),St=0;function en(l,h,f,w,D){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!w,this.ha=D,this.key=++St,this.da=this.fa=!1}function cr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function $n(l){this.src=l,this.g={},this.h=0}$n.prototype.add=function(l,h,f,w,D){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=Ih(l,h,w,D);return-1<z?(h=l[z],f||(h.fa=!1)):(h=new en(h,this.src,L,!!w,D),h.fa=f,l.push(h)),h};function tn(l,h){var f=h.type;if(f in l.g){var w=l.g[f],D=Array.prototype.indexOf.call(w,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(w,D,1),L&&(cr(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Ih(l,h,f,w){for(var D=0;D<l.length;++D){var L=l[D];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==w)return D}return-1}var Ah="closure_lm_"+(1e6*Math.random()|0),Ph={};function Ug(l,h,f,w,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)Ug(l,h[L],f,w,D);return null}return f=Bg(f),l&&l[Ae]?l.K(h,f,c(w)?!!w.capture:!!w,D):PA(l,h,f,!1,w,D)}function PA(l,h,f,w,D,L){if(!h)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,Pe=Rh(l);if(Pe||(l[Ah]=Pe=new $n(l)),f=Pe.add(h,f,w,z,L),f.proxy)return f;if(w=CA(),f.proxy=w,w.src=l,w.listener=f,l.addEventListener)ge||(D=z),D===void 0&&(D=!1),l.addEventListener(h.toString(),w,D);else if(l.attachEvent)l.attachEvent(zg(h.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return f}function CA(){function l(f){return h.call(l.src,l.listener,f)}const h=RA;return l}function $g(l,h,f,w,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)$g(l,h[L],f,w,D);else w=c(w)?!!w.capture:!!w,f=Bg(f),l&&l[Ae]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],f=Ih(L,f,w,D),-1<f&&(cr(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=Rh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Ih(h,f,w,D)),(f=-1<l?h[l]:null)&&Ch(f))}function Ch(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Ae])tn(h.i,l);else{var f=l.type,w=l.proxy;h.removeEventListener?h.removeEventListener(f,w,l.capture):h.detachEvent?h.detachEvent(zg(f),w):h.addListener&&h.removeListener&&h.removeListener(w),(f=Rh(h))?(tn(f,l),f.h==0&&(f.src=null,h[Ah]=null)):cr(l)}}}function zg(l){return l in Ph?Ph[l]:Ph[l]="on"+l}function RA(l,h){if(l.da)l=!0;else{h=new ce(h,this);var f=l.listener,w=l.ha||l.src;l.fa&&Ch(l),l=f.call(w,h)}return l}function Rh(l){return l=l[Ah],l instanceof $n?l:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bg(l){return typeof l=="function"?l:(l[kh]||(l[kh]=function(h){return l.handleEvent(h)}),l[kh])}function ht(){H.call(this),this.i=new $n(this),this.M=this,this.F=null}A(ht,H),ht.prototype[Ae]=!0,ht.prototype.removeEventListener=function(l,h,f,w){$g(this,l,h,f,w)};function Tt(l,h){var f,w=l.F;if(w)for(f=[];w;w=w.F)f.push(w);if(l=l.M,w=h.type||h,typeof h=="string")h=new Y(h,l);else if(h instanceof Y)h.target=h.target||l;else{var D=h;h=new Y(w,l),E(h,D)}if(D=!0,f)for(var L=f.length-1;0<=L;L--){var z=h.g=f[L];D=Wa(z,w,!0,h)&&D}if(z=h.g=l,D=Wa(z,w,!0,h)&&D,D=Wa(z,w,!1,h)&&D,f)for(L=0;L<f.length;L++)z=h.g=f[L],D=Wa(z,w,!1,h)&&D}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],w=0;w<f.length;w++)cr(f[w]);delete l.g[h],l.h--}}this.F=null},ht.prototype.K=function(l,h,f,w){return this.i.add(String(l),h,!1,f,w)},ht.prototype.L=function(l,h,f,w){return this.i.add(String(l),h,!0,f,w)};function Wa(l,h,f,w){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var z=h[L];if(z&&!z.da&&z.capture==f){var Pe=z.listener,rt=z.ha||z.src;z.fa&&tn(l.i,z),D=Pe.call(rt,w)!==!1&&D}}return D&&!w.defaultPrevented}function Hg(l,h,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Wg(l){l.g=Hg(()=>{l.g=null,l.i&&(l.i=!1,Wg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class kA extends H{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Wg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(l){H.call(this),this.h=l,this.g={}}A(ns,H);var qg=[];function Kg(l){O(l.g,function(h,f){this.g.hasOwnProperty(f)&&Ch(h)},l),l.g={}}ns.prototype.N=function(){ns.aa.N.call(this),Kg(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xh=a.JSON.stringify,xA=a.JSON.parse,bA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function bh(){}bh.prototype.h=null;function Gg(l){return l.h||(l.h=l.i())}function Qg(){}var rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oh(){Y.call(this,"d")}A(Oh,Y);function Nh(){Y.call(this,"c")}A(Nh,Y);var Jr={},Yg=null;function qa(){return Yg=Yg||new ht}Jr.La="serverreachability";function Xg(l){Y.call(this,Jr.La,l)}A(Xg,Y);function is(l){const h=qa();Tt(h,new Xg(h))}Jr.STAT_EVENT="statevent";function Jg(l,h){Y.call(this,Jr.STAT_EVENT,l),this.stat=h}A(Jg,Y);function It(l){const h=qa();Tt(h,new Jg(h,l))}Jr.Ma="timingevent";function Zg(l,h){Y.call(this,Jr.Ma,l),this.size=h}A(Zg,Y);function os(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function OA(l,h,f,w,D,L){l.info(function(){if(l.g)if(L)for(var z="",Pe=L.split("&"),rt=0;rt<Pe.length;rt++){var ye=Pe[rt].split("=");if(1<ye.length){var dt=ye[0];ye=ye[1];var ft=dt.split("_");z=2<=ft.length&&ft[1]=="type"?z+(dt+"="+ye+"&"):z+(dt+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+h+`
`+f+`
`+z})}function NA(l,h,f,w,D,L,z){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+h+`
`+f+`
`+L+" "+z})}function ji(l,h,f,w){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+LA(l,f)+(w?" "+w:"")})}function DA(l,h){l.info(function(){return"TIMEOUT: "+h})}ss.prototype.info=function(){};function LA(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var w=f[l];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return xh(f)}catch{return h}}var Ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ey={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dh;function Ga(){}A(Ga,bh),Ga.prototype.g=function(){return new XMLHttpRequest},Ga.prototype.i=function(){return{}},Dh=new Ga;function hr(l,h,f,w){this.j=l,this.i=h,this.l=f,this.R=w||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ty}function ty(){this.i=null,this.g="",this.h=!1}var ny={},Lh={};function Mh(l,h,f){l.L=1,l.v=Ja(zn(h)),l.m=f,l.P=!0,ry(l,null)}function ry(l,h){l.F=Date.now(),Qa(l),l.A=zn(l.v);var f=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),yy(f.i,"t",w),l.C=0,f=l.j.J,l.h=new ty,l.g=Ly(l.j,f?h:null,!l.m),0<l.O&&(l.M=new kA(m(l.Y,l,l.g),l.O)),h=l.U,f=l.g,w=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(qg[0]=D.toString()),D=qg);for(var L=0;L<D.length;L++){var z=Ug(f,D[L],w||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),is(),OA(l.i,l.u,l.A,l.l,l.R,l.m)}hr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Bn(l)==3?h.j():this.Y(l)},hr.prototype.Y=function(l){try{if(l==this.g)e:{const ft=Bn(this.g);var h=this.g.Ba();const $i=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Iy(this.g)))){this.J||ft!=4||h==7||(h==8||0>=$i?is(3):is(2)),Vh(this);var f=this.g.Z();this.X=f;t:if(iy(this)){var w=Iy(this.g);l="";var D=w.length,L=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zr(this),as(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(w[h],{stream:!(L&&h==D-1)});w.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,NA(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,rt=this.g;if((Pe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Pe)){var ye=Pe;break t}}ye=null}if(f=ye)ji(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,f);else{this.o=!1,this.s=3,It(12),Zr(this),as(this);break e}}if(this.P){f=!0;let hn;for(;!this.J&&this.C<z.length;)if(hn=MA(this,z),hn==Lh){ft==4&&(this.s=4,It(14),f=!1),ji(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==ny){this.s=4,It(15),ji(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ji(this.i,this.l,hn,null),jh(this,hn);if(iy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||z.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)ji(this.i,this.l,z,"[Invalid Chunked Response]"),Zr(this),as(this);else if(0<z.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Hh(dt),dt.M=!0,It(11))}}else ji(this.i,this.l,z,null),jh(this,z);ft==4&&Zr(this),this.o&&!this.J&&(ft==4?by(this.j,this):(this.o=!1,Qa(this)))}else ZA(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Zr(this),as(this)}}}catch{}finally{}};function iy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function MA(l,h){var f=l.C,w=h.indexOf(`
`,f);return w==-1?Lh:(f=Number(h.substring(f,w)),isNaN(f)?ny:(w+=1,w+f>h.length?Lh:(h=h.slice(w,w+f),l.C=w+f,h)))}hr.prototype.cancel=function(){this.J=!0,Zr(this)};function Qa(l){l.S=Date.now()+l.I,oy(l,l.I)}function oy(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=os(m(l.ba,l),h)}function Vh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}hr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(DA(this.i,this.A),this.L!=2&&(is(),It(17)),Zr(this),this.s=2,as(this)):oy(this,this.S-l)};function as(l){l.j.G==0||l.J||by(l.j,l)}function Zr(l){Vh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Kg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function jh(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||Fh(f.h,l))){if(!l.K&&Fh(f.h,l)&&f.G==3){try{var w=f.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)rl(f),tl(f);else break e;Bh(f),It(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=os(m(f.Za,f),6e3));if(1>=ly(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ti(f,11)}else if((l.K||f.g==l)&&rl(f),!y(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let ye=D[h];if(f.T=ye[0],ye=ye[1],f.G==2)if(ye[0]=="c"){f.K=ye[1],f.ia=ye[2];const dt=ye[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=ye[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const $i=ye[5];$i!=null&&typeof $i=="number"&&0<$i&&(w=1.5*$i,f.L=w,f.j.info("backChannelRequestTimeoutMs_="+w)),w=f;const hn=l.g;if(hn){const ol=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ol){var L=w.h;L.g||ol.indexOf("spdy")==-1&&ol.indexOf("quic")==-1&&ol.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Uh(L,L.h),L.h=null))}if(w.D){const Wh=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wh&&(w.ya=Wh,Re(w.I,w.D,Wh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),w=f;var z=l;if(w.qa=Dy(w,w.J?w.ia:null,w.W),z.K){uy(w.h,z);var Pe=z,rt=w.L;rt&&(Pe.I=rt),Pe.B&&(Vh(Pe),Qa(Pe)),w.g=z}else ky(w);0<f.i.length&&nl(f)}else ye[0]!="stop"&&ye[0]!="close"||ti(f,7);else f.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?ti(f,7):zh(f):ye[0]!="noop"&&f.l&&f.l.ta(ye),f.v=0)}}is(4)}catch{}}var VA=class{constructor(l,h){this.g=l,this.map=h}};function sy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ay(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ly(l){return l.h?1:l.g?l.g.size:0}function Fh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Uh(l,h){l.g?l.g.add(h):l.h=h}function uy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}sy.prototype.cancel=function(){if(this.i=cy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function cy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return R(l.i)}function jA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],f=l.length,w=0;w<f;w++)h.push(l[w]);return h}h=[],f=0;for(w in l)h[f++]=l[w];return h}function FA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const w in l)h[f++]=w;return h}}}function hy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=FA(l),w=jA(l),D=w.length,L=0;L<D;L++)h.call(void 0,w[L],f&&f[L],l)}var dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UA(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var w=l[f].indexOf("="),D=null;if(0<=w){var L=l[f].substring(0,w);D=l[f].substring(w+1)}else L=l[f];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ei(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ei){this.h=l.h,Ya(this,l.j),this.o=l.o,this.g=l.g,Xa(this,l.s),this.l=l.l;var h=l.i,f=new cs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),fy(this,f),this.m=l.m}else l&&(h=String(l).match(dy))?(this.h=!1,Ya(this,h[1]||"",!0),this.o=ls(h[2]||""),this.g=ls(h[3]||"",!0),Xa(this,h[4]),this.l=ls(h[5]||"",!0),fy(this,h[6]||"",!0),this.m=ls(h[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}ei.prototype.toString=function(){var l=[],h=this.j;h&&l.push(us(h,py,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(us(h,py,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(us(f,f.charAt(0)=="/"?BA:zA,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",us(f,WA)),l.join("")};function zn(l){return new ei(l)}function Ya(l,h,f){l.j=f?ls(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Xa(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function fy(l,h,f){h instanceof cs?(l.i=h,qA(l.i,l.h)):(f||(h=us(h,HA)),l.i=new cs(h,l.h))}function Re(l,h,f){l.i.set(h,f)}function Ja(l){return Re(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ls(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function us(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,$A),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $A(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var py=/[#\/\?@]/g,zA=/[#\?:]/g,BA=/[#\?]/g,HA=/[#\?@]/g,WA=/#/g;function cs(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function dr(l){l.g||(l.g=new Map,l.h=0,l.i&&UA(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=cs.prototype,t.add=function(l,h){dr(this),this.i=null,l=Fi(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function my(l,h){dr(l),h=Fi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function gy(l,h){return dr(l),h=Fi(l,h),l.g.has(h)}t.forEach=function(l,h){dr(this),this.g.forEach(function(f,w){f.forEach(function(D){l.call(h,D,w,this)},this)},this)},t.na=function(){dr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let w=0;w<h.length;w++){const D=l[w];for(let L=0;L<D.length;L++)f.push(h[w])}return f},t.V=function(l){dr(this);let h=[];if(typeof l=="string")gy(this,l)&&(h=h.concat(this.g.get(Fi(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},t.set=function(l,h){return dr(this),this.i=null,l=Fi(this,l),gy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function yy(l,h,f){my(l,h),0<f.length&&(l.i=null,l.g.set(Fi(l,h),R(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var w=h[f];const L=encodeURIComponent(String(w)),z=this.V(w);for(w=0;w<z.length;w++){var D=L;z[w]!==""&&(D+="="+encodeURIComponent(String(z[w]))),l.push(D)}}return this.i=l.join("&")};function Fi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function qA(l,h){h&&!l.j&&(dr(l),l.i=null,l.g.forEach(function(f,w){var D=w.toLowerCase();w!=D&&(my(this,w),yy(this,D,f))},l)),l.j=h}function KA(l,h){const f=new ss;if(a.Image){const w=new Image;w.onload=T(fr,f,"TestLoadImage: loaded",!0,h,w),w.onerror=T(fr,f,"TestLoadImage: error",!1,h,w),w.onabort=T(fr,f,"TestLoadImage: abort",!1,h,w),w.ontimeout=T(fr,f,"TestLoadImage: timeout",!1,h,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else h(!1)}function GA(l,h){const f=new ss,w=new AbortController,D=setTimeout(()=>{w.abort(),fr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:w.signal}).then(L=>{clearTimeout(D),L.ok?fr(f,"TestPingServer: ok",!0,h):fr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),fr(f,"TestPingServer: error",!1,h)})}function fr(l,h,f,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(f)}catch{}}function QA(){this.g=new bA}function YA(l,h,f){const w=f||"";try{hy(l,function(D,L){let z=D;c(D)&&(z=xh(D)),h.push(w+L+"="+encodeURIComponent(z))})}catch(D){throw h.push(w+"type="+encodeURIComponent("_badmap")),D}}function hs(l){this.l=l.Ub||null,this.j=l.eb||!1}A(hs,bh),hs.prototype.g=function(){return new Za(this.l,this.j)},hs.prototype.i=function(l){return function(){return l}}({});function Za(l,h){ht.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Za,ht),t=Za.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,fs(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ds(this):fs(this),this.readyState==3&&vy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ds(this))},t.Qa=function(l){this.g&&(this.response=l,ds(this))},t.ga=function(){this.g&&ds(this)};function ds(l){l.readyState=4,l.l=null,l.j=null,l.v=null,fs(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function fs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _y(l){let h="";return O(l,function(f,w){h+=w,h+=":",h+=f,h+=`\r
`}),h}function $h(l,h,f){e:{for(w in f){var w=!1;break e}w=!0}w||(f=_y(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):Re(l,h,f))}function Fe(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Fe,ht);var XA=/^https?$/i,JA=["POST","PUT"];t=Fe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,f,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dh.g(),this.v=this.o?Gg(this.o):Gg(Dh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){wy(this,L);return}if(l=f||"",f=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)f.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())f.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(JA,h,void 0))||w||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of f)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ty(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){wy(this,L)}};function wy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ey(l),el(l)}function Ey(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sy(this):this.bb())},t.bb=function(){Sy(this)};function Sy(l){if(l.h&&typeof s<"u"&&(!l.v[1]||Bn(l)!=4||l.Z()!=2)){if(l.u&&Bn(l)==4)Hg(l.Ea,0,l);else if(Tt(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var w;if(w=z===0){var D=String(l.D).match(dy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),w=!XA.test(D?D.toLowerCase():"")}f=w}if(f)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var L=2<Bn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Ey(l)}}finally{el(l)}}}}function el(l,h){if(l.g){Ty(l);const f=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Tt(l,"ready");try{f.onreadystatechange=w}catch{}}}function Ty(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),xA(h)}};function Iy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ZA(l){const h={};l=(l.g&&2<=Bn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(y(l[w]))continue;var f=C(l[w]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[D]||[];h[D]=L,L.push(f)}v(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function Ay(l){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,l),this.cb=ps("retryDelaySeedMs",1e4,l),this.Wa=ps("forwardChannelMaxRetries",2,l),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new sy(l&&l.concurrentRequestLimit),this.Da=new QA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ay.prototype,t.la=8,t.G=1,t.connect=function(l,h,f,w){It(0),this.W=l,this.H=h||{},f&&w!==void 0&&(this.H.OSID=f,this.H.OAID=w),this.F=this.X,this.I=Dy(this,null,this.W),nl(this)};function zh(l){if(Py(l),l.G==3){var h=l.U++,f=zn(l.I);if(Re(f,"SID",l.K),Re(f,"RID",h),Re(f,"TYPE","terminate"),ms(l,f),h=new hr(l,l.j,h),h.L=2,h.v=Ja(zn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ly(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Qa(h)}Ny(l)}function tl(l){l.g&&(Hh(l),l.g.cancel(),l.g=null)}function Py(l){tl(l),l.u&&(a.clearTimeout(l.u),l.u=null),rl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function nl(l){if(!ay(l.h)&&!l.s){l.s=!0;var h=l.Ga;Te||j(),U||(Te(),U=!0),V.add(h,l),l.B=0}}function eP(l,h){return ly(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=os(m(l.Ga,l,h),Oy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new hr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=g(L),E(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var w=this.i[f];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ry(this,D,h),f=zn(this.I),Re(f,"RID",l),Re(f,"CVER",22),this.D&&Re(f,"X-HTTP-Session-Id",this.D),ms(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(_y(L)))+"&"+h:this.m&&$h(f,this.m,L)),Uh(this.h,D),this.Ua&&Re(f,"TYPE","init"),this.P?(Re(f,"$req",h),Re(f,"SID","null"),D.T=!0,Mh(D,f,null)):Mh(D,f,h),this.G=2}}else this.G==3&&(l?Cy(this,l):this.i.length==0||ay(this.h)||Cy(this))};function Cy(l,h){var f;h?f=h.l:f=l.U++;const w=zn(l.I);Re(w,"SID",l.K),Re(w,"RID",f),Re(w,"AID",l.T),ms(l,w),l.m&&l.o&&$h(w,l.m,l.o),f=new hr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Ry(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Uh(l.h,f),Mh(f,w,h)}function ms(l,h){l.H&&O(l.H,function(f,w){Re(h,w,f)}),l.l&&hy({},function(f,w){Re(h,w,f)})}function Ry(l,h,f){f=Math.min(l.i.length,f);var w=l.l?m(l.l.Na,l.l,l):null;e:{var D=l.i;let L=-1;for(;;){const z=["count="+f];L==-1?0<f?(L=D[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let Pe=!0;for(let rt=0;rt<f;rt++){let ye=D[rt].g;const dt=D[rt].map;if(ye-=L,0>ye)L=Math.max(0,D[rt].g-100),Pe=!1;else try{YA(dt,z,"req"+ye+"_")}catch{w&&w(dt)}}if(Pe){w=z.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,w}function ky(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Te||j(),U||(Te(),U=!0),V.add(h,l),l.v=0}}function Bh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=os(m(l.Fa,l),Oy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,xy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=os(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),tl(this),xy(this))};function Hh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function xy(l){l.g=new hr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=zn(l.qa);Re(h,"RID","rpc"),Re(h,"SID",l.K),Re(h,"AID",l.T),Re(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Re(h,"TO",l.ja),Re(h,"TYPE","xmlhttp"),ms(l,h),l.m&&l.o&&$h(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Ja(zn(h)),f.m=null,f.P=!0,ry(f,l)}t.Za=function(){this.C!=null&&(this.C=null,tl(this),Bh(this),It(19))};function rl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function by(l,h){var f=null;if(l.g==h){rl(l),Hh(l),l.g=null;var w=2}else if(Fh(l.h,h))f=h.D,uy(l.h,h),w=1;else return;if(l.G!=0){if(h.o)if(w==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;w=qa(),Tt(w,new Zg(w,f)),nl(l)}else ky(l);else if(D=h.s,D==3||D==0&&0<h.X||!(w==1&&eP(l,h)||w==2&&Bh(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),D){case 1:ti(l,5);break;case 4:ti(l,10);break;case 3:ti(l,6);break;default:ti(l,2)}}}function Oy(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function ti(l,h){if(l.j.info("Error code "+h),h==2){var f=m(l.fb,l),w=l.Xa;const D=!w;w=new ei(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ya(w,"https"),Ja(w),D?KA(w.toString(),f):GA(w.toString(),f)}else It(2);l.G=0,l.l&&l.l.sa(h),Ny(l),Py(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Ny(l){if(l.G=0,l.ka=[],l.l){const h=cy(l.h);(h.length!=0||l.i.length!=0)&&(b(l.ka,h),b(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Dy(l,h,f){var w=f instanceof ei?zn(f):new ei(f);if(w.g!="")h&&(w.g=h+"."+w.g),Xa(w,w.s);else{var D=a.location;w=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new ei(null);w&&Ya(L,w),h&&(L.g=h),D&&Xa(L,D),f&&(L.l=f),w=L}return f=l.D,h=l.ya,f&&h&&Re(w,f,h),Re(w,"VER",l.la),ms(l,w),w}function Ly(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Fe(new hs({eb:f})):new Fe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function My(){}t=My.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function il(){}il.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){ht.call(this),this.g=new Ay(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ui(this)}A($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){zh(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=xh(l),l=f);h.i.push(new VA(h.Ya++,l)),h.G==3&&nl(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,zh(this.g),delete this.g,$t.aa.N.call(this)};function Vy(l){Oh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}A(Vy,Oh);function jy(){Nh.call(this),this.status=1}A(jy,Nh);function Ui(l){this.g=l}A(Ui,My),Ui.prototype.ua=function(){Tt(this.g,"a")},Ui.prototype.ta=function(l){Tt(this.g,new Vy(l))},Ui.prototype.sa=function(l){Tt(this.g,new jy)},Ui.prototype.ra=function(){Tt(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,yT=function(){return new il},gT=function(){return qa()},mT=Jr,up={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ka.NO_ERROR=0,Ka.TIMEOUT=8,Ka.HTTP_ERROR=6,ou=Ka,ey.COMPLETE="complete",pT=ey,Qg.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Os=Qg,fT=hs,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,dT=Fe}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});const J0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Xm("@firebase/firestore");function As(){return ki.logLevel}function Q(t,...e){if(ki.logLevel<=ue.DEBUG){const n=e.map(cg);ki.debug(`Firestore (${Zo}): ${t}`,...n)}}function sr(t,...e){if(ki.logLevel<=ue.ERROR){const n=e.map(cg);ki.error(`Firestore (${Zo}): ${t}`,...n)}}function Do(t,...e){if(ki.logLevel<=ue.WARN){const n=e.map(cg);ki.warn(`Firestore (${Zo}): ${t}`,...n)}}function cg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function Ke(t,e){t||re()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class XN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JN{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Fr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new vT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new yt(e)}}class ZN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ke(typeof n.token=="string"),this.R=n.token,new tD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rD(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Lo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ft(0,0))}static max(){return new ne(new Ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _a?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends _a{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const iD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends _a{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return iD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new X(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new X(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(De.fromString(e))}static fromName(e){return new J(De.fromString(e).popFirst(5))}static empty(){return new J(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new De(e.slice()))}}function oD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Ft(n+1,0):new Ft(n,r));return new Wr(i,J.empty(),e)}function sD(t){return new Wr(t.readTime,t.key,-1)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(ne.min(),J.empty(),-1)}static max(){return new Wr(ne.max(),J.empty(),-1)}}function aD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==lD)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(d=>{s[c]=d,++a,a===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function cD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ua(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dg.oe=-1;function ih(t){return t==null}function cp(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kl(this.root,e,this.comparator,!0)}}class kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new st(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,o){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new e_(this.data.getIterator())}getIteratorFrom(e){return new e_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class e_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Cr([])}unionWith(e){let n=new lt(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wT("Invalid base64 string: "+o):o}}(e);return new Et(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const dD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(Ke(!!t),typeof t=="string"){let e=0;const n=dD.exec(t);if(Ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pg(t){const e=t.mapValue.fields.__previous_value__;return fg(e)?pg(e):e}function wa(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,i,o,s,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fg(t)?4:pD(t)?9007199254740991:10:re()}function Mn(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wa(t).isEqual(wa(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=qr(i.timestampValue),a=qr(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return xi(i.bytesValue).isEqual(xi(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return He(i.geoPointValue.latitude)===He(o.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return He(i.integerValue)===He(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=He(i.doubleValue),a=He(o.doubleValue);return s===a?cp(s)===cp(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Lo(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(Z0(s)!==Z0(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!Mn(s[u],a[u])))return!1;return!0}(t,e);default:return re()}}function Sa(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=He(o.integerValue||o.doubleValue),u=He(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return t_(t.timestampValue,e.timestampValue);case 4:return t_(wa(t),wa(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(o,s){const a=xi(o),u=xi(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=we(a[c],u[c]);if(d!==0)return d}return we(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=we(He(o.latitude),He(s.latitude));return a!==0?a:we(He(o.longitude),He(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],u=s.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Mo(a[c],u[c]);if(d)return d}return we(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===xl.mapValue&&s===xl.mapValue)return 0;if(o===xl.mapValue)return 1;if(s===xl.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),c=s.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=we(u[p],d[p]);if(m!==0)return m;const T=Mo(a[u[p]],c[d[p]]);if(T!==0)return T}return we(u.length,d.length)}(t.mapValue,e.mapValue);default:throw re()}}function t_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=qr(t),r=qr(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Vo(t){return hp(t)}function hp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=hp(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${hp(n.fields[s])}`;return i+"}"}(t.mapValue):re()}function dp(t){return!!t&&"integerValue"in t}function mg(t){return!!t&&"arrayValue"in t}function n_(t){return!!t&&"nullValue"in t}function r_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dd(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oh(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=Ct.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Qs(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Dd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oh(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Cn(Qs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ne.min(),ne.min(),ne.min(),Cn.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,ne.min(),ne.min(),Cn.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ne.min(),ne.min(),Cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this.position=e,this.inclusive=n}}function i_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=Mo(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function o_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n="asc"){this.field=e,this.dir=n}}function mD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{}class Ye extends ET{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yD(e,n,r):n==="array-contains"?new wD(e,r):n==="in"?new ED(e,r):n==="not-in"?new SD(e,r):n==="array-contains-any"?new TD(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vD(e,r):new _D(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends ET{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vn(e,n)}matches(e){return ST(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ST(t){return t.op==="and"}function TT(t){return gD(t)&&ST(t)}function gD(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function fp(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Vo(t.value);if(TT(t))return t.filters.map(e=>fp(e)).join(",");{const e=t.filters.map(n=>fp(n)).join(",");return`${t.op}(${e})`}}function IT(t,e){return t instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof Vn?function(r,i){return i instanceof Vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&IT(s,i.filters[a]),!0):!1}(t,e):void re()}function AT(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Vo(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(AT).join(" ,")+"}"}(t):"Filter"}class yD extends Ye{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class vD extends Ye{constructor(e,n){super(e,"in",n),this.keys=PT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _D extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=PT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class wD extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mg(n)&&Sa(n.arrayValue,this.value)}}class ED extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sa(this.value.arrayValue,n)}}class SD extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sa(this.value.arrayValue,n)}}class TD extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function s_(t,e=null,n=[],r=[],i=null,o=null,s=null){return new ID(t,e,n,r,i,o,s)}function gg(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ih(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vo(r)).join(",")),e.ue=n}return e.ue}function yg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o_(t.startAt,e.startAt)&&o_(t.endAt,e.endAt)}function pp(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AD(t,e,n,r,i,o,s,a){return new sh(t,e,n,r,i,o,s,a)}function vg(t){return new sh(t)}function a_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PD(t){return t.collectionGroup!==null}function Ys(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new lt(Ct.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Qu(o,r))}),n.has(Ct.keyField().canonicalString())||e.ce.push(new Qu(Ct.keyField(),r))}return e.ce}function On(t){const e=me(t);return e.le||(e.le=CD(e,Ys(t))),e.le}function CD(t,e){if(t.limitType==="F")return s_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Qu(i.field,o)});const n=t.endAt?new Gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gu(t.startAt.position,t.startAt.inclusive):null;return s_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mp(t,e,n){return new sh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return yg(On(t),On(e))&&t.limitType===e.limitType}function CT(t){return`${gg(On(t))}|lt:${t.limitType}`}function Hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AT(i)).join(", ")}]`),ih(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vo(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):J.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ys(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const c=i_(s,a,u);return s.inclusive?c<=0:c<0}(r.startAt,Ys(r),i)||r.endAt&&!function(s,a,u){const c=i_(s,a,u);return s.inclusive?c>=0:c>0}(r.endAt,Ys(r),i))}(t,e)}function RD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const i of Ys(t)){const o=kD(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function kD(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),c=a.data.field(o);return u!==null&&c!==null?Mo(u,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oh(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return hD(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=new ze(J.comparator);function Kr(){return xD}const kT=new ze(J.comparator);function Ns(...t){let e=kT;for(const n of t)e=e.insert(n.key,n);return e}function bD(t){let e=kT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hi(){return Xs()}function xT(){return Xs()}function Xs(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const OD=new lt(J.comparator);function fe(...t){let e=OD;for(const n of t)e=e.add(n);return e}const ND=new lt(we);function DD(){return ND}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cp(e)?"-0":e}}function MD(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function VD(t,e,n){return t instanceof gp?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&fg(o)&&(o=pg(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Yu?bT(t,e):t instanceof Xu?OT(t,e):function(i,o){const s=FD(i,o),a=l_(s)+l_(i.Pe);return dp(s)&&dp(i.Pe)?MD(a):LD(i.serializer,a)}(t,e)}function jD(t,e,n){return t instanceof Yu?bT(t,e):t instanceof Xu?OT(t,e):n}function FD(t,e){return t instanceof yp?function(r){return dp(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class gp extends uh{}class Yu extends uh{constructor(e){super(),this.elements=e}}function bT(t,e){const n=NT(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xu extends uh{constructor(e){super(),this.elements=e}}function OT(t,e){let n=NT(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class yp extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function l_(t){return He(t.integerValue||t.doubleValue)}function NT(t){return mg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Yu&&i instanceof Yu||r instanceof Xu&&i instanceof Xu?Lo(r.elements,i.elements,Mn):r instanceof yp&&i instanceof yp?Mn(r.Pe,i.Pe):r instanceof gp&&i instanceof gp}(t.transform,e.transform)}class vi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vi}static exists(e){return new vi(void 0,e)}static updateTime(e){return new vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function su(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _g{}function DT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zD(t.key,vi.none()):new wg(t.key,t.data,vi.none());{const n=t.data,r=Cn.empty();let i=new lt(Ct.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ch(t.key,r,new Cr(i.toArray()),vi.none())}}function $D(t,e,n){t instanceof wg?function(i,o,s){const a=i.value.clone(),u=c_(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ch?function(i,o,s){if(!su(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=c_(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(LT(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof wg?function(o,s,a,u){if(!su(o.precondition,s))return a;const c=o.value.clone(),d=h_(o.fieldTransforms,u,s);return c.setAll(d),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ch?function(o,s,a,u){if(!su(o.precondition,s))return a;const c=h_(o.fieldTransforms,u,s),d=s.data;return d.setAll(LT(o)),d.setAll(c),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(o,s,a){return su(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Lo(r,i,(o,s)=>UD(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wg extends _g{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ch extends _g{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function LT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c_(t,e,n){const r=new Map;Ke(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,jD(s,a,n[i]))}return r}function h_(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,VD(o,s,e))}return r}class zD extends _g{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&$D(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=DT(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,(n,r)=>u_(n,r))&&Lo(this.baseMutations,e.baseMutations,(n,r)=>u_(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,he;function MT(t){if(t===void 0)return sr("GRPC error has no .code"),B.UNKNOWN;switch(t){case Be.OK:return B.OK;case Be.CANCELLED:return B.CANCELLED;case Be.UNKNOWN:return B.UNKNOWN;case Be.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Be.INTERNAL:return B.INTERNAL;case Be.UNAVAILABLE:return B.UNAVAILABLE;case Be.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Be.NOT_FOUND:return B.NOT_FOUND;case Be.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Be.ABORTED:return B.ABORTED;case Be.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Be.DATA_LOSS:return B.DATA_LOSS;default:return re()}}(he=Be||(Be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new yi([4294967295,4294967295],0);function d_(t){const e=qD().encode(t),n=new hT;return n.update(e),new Uint8Array(n.digest())}function f_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new yi([n,r],0),new yi([i,o],0)]}class Eg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=yi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(yi.fromNumber(r)));return i.compare(KD)===1&&(i=new yi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=d_(e),[r,i]=f_(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Eg(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=d_(e),[r,i]=f_(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hh(ne.min(),i,new ze(we),Kr(),fe())}}class $a{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $a(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class VT{constructor(e,n){this.targetId=e,this.me=n}}class jT{constructor(e,n,r=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p_{constructor(){this.fe=0,this.ge=g_(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new $a(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=g_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kr(),this.qe=m_(),this.Qe=new ze(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(pp(o))if(r===0){const s=new J(o.path);this.Ue(n,s,_t.newNoDocument(s,ne.min()))}else Ke(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=xi(r).toUint8Array()}catch(u){if(u instanceof wT)return Do("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Eg(s,i,o)}catch(u){return Do(u instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&pp(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,_t.newNoDocument(u,e))}o.be&&(n.set(s,o.Ce()),o.ve())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new hh(e,n,this.Qe,this.ke,r);return this.ke=Kr(),this.qe=m_(),this.Qe=new ze(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new p_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new p_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function m_(){return new ze(J.comparator)}function g_(){return new ze(J.comparator)}const QD={asc:"ASCENDING",desc:"DESCENDING"},YD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XD={and:"AND",or:"OR"};class JD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vp(t,e){return t.useProto3Json||ih(e)?e:{value:e}}function ZD(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eL(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function go(t){return Ke(!!t),ne.fromTimestamp(function(n){const r=qr(n);return new Ft(r.seconds,r.nanos)}(t))}function tL(t,e){return _p(t,e).canonicalString()}function _p(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FT(t){const e=De.fromString(t);return Ke(HT(e)),e}function Ld(t,e){const n=FT(e);if(n.get(1)!==t.databaseId.projectId)throw new X(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J($T(n))}function UT(t,e){return tL(t.databaseId,e)}function nL(t){const e=FT(t);return e.length===4?De.emptyPath():$T(e)}function y_(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $T(t){return Ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,d){return c.useProto3Json?(Ke(d===void 0||typeof d=="string"),Et.fromBase64String(d||"")):(Ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(c){const d=c.code===void 0?B.UNKNOWN:MT(c.code);return new X(d,c.message||"")}(s);n=new jT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ld(t,r.document.name),o=go(r.document.updateTime),s=r.document.createTime?go(r.document.createTime):ne.min(),a=new Cn({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,o,s,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new au(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ld(t,r.document),o=r.readTime?go(r.readTime):ne.min(),s=_t.newNoDocument(i,o),a=r.removedTargetIds||[];n=new au([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ld(t,r.document),o=r.removedTargetIds||[];n=new au([],o,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new WD(i,o),a=r.targetId;n=new VT(a,s)}}return n}function iL(t,e){return{documents:[UT(t,e.path)]}}function oL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=UT(t,i);const o=function(c){if(c.length!==0)return BT(Vn.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Wi(m.field),direction:lL(m.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=vp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function sL(t){let e=nL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ke(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(p){const m=zT(p);return m instanceof Vn&&TT(m)?m.getFilters():[m]}(n.where));let s=[];n.orderBy&&(s=function(p){return p.map(m=>function(A){return new Qu(qi(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,ih(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new Gu(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new Gu(T,m)}(n.endAt)),AD(e,i,s,o,a,"F",u,c)}function aL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qi(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qi(n.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=qi(n.unaryFilter.field);return Ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=qi(n.unaryFilter.field);return Ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>zT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function lL(t){return QD[t]}function uL(t){return YD[t]}function cL(t){return XD[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function qi(t){return Ct.fromServerFormat(t.fieldPath)}function BT(t){return t instanceof Ye?function(n){if(n.op==="=="){if(r_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NAN"}};if(n_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NAN"}};if(n_(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(n.field),op:uL(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(i=>BT(i));return r.length===1?r[0]:{compositeFilter:{op:cL(n.op),filters:r}}}(t):re()}function HT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,r,i,o=ne.min(),s=ne.min(),a=Et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e){this.ct=e}}function dL(t){const e=sL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(){this._n=new pL}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Wr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class pL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(De.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new jo(0)}static Ln(){return new jo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Js(r.mutation,i,Cr.empty(),Ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Ns();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Kr();const s=Xs(),a=function(){return Xs()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ch)?o=o.insert(c.key,c):d!==void 0?(s.set(c.key,d.mutation.getFieldMask()),Js(d.mutation,c,d.mutation.getFieldMask(),Ft.now())):s.set(c.key,Cr.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,d)=>s.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new gL(d,(p=s.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new ze((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Cr.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=xT();d.forEach(m=>{if(!o.has(m)){const T=DT(n.get(m),r.get(m));T!==null&&p.set(m,T),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):F.resolve(hi());let a=-1,u=o;return s.next(c=>F.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),o.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,fe())).next(d=>({batchId:a,changes:bD(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,o).next(a=>F.forEach(a,u=>{const c=function(p,m){return new sh(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const d=c.getKey();s.get(d)===null&&(s=s.insert(d,_t.newInvalidDocument(d)))});let a=Ns();return s.forEach((u,c)=>{const d=o.get(u);d!==void 0&&Js(d.mutation,c,Cr.empty(),Ft.now()),lh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:go(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:dL(i.bundledQuery),readTime:go(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(){this.overlays=new ze(J.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hi();return F.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=hi(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new ze((c,d)=>c-d);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=o.get(c.largestBatchId);d===null&&(d=hi(),o=o.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=hi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new HD(n,r));let o=this.hr.get(n);o===void 0&&(o=fe(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Pr=new lt(Je.Ir),this.Tr=new lt(Je.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Je(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new J(new De([])),r=new Je(n,e),i=new Je(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new J(new De([])),r=new Je(n,e),i=new Je(n,e+1);let o=fe();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Je(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return J.comparator(e.key,n.key)||we(e.pr,n.pr)}static Er(e,n){return we(e.pr,n.pr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new lt(Je.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new BD(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.wr=this.wr.add(new Je(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(s)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const a=this.Sr(s.pr);o.push(a)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(we);return n.forEach(i=>{const o=new Je(i,0),s=new Je(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],a=>{r=r.add(a.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new Je(new J(o),0);let a=new lt(we);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},s),F.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ke(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,i=>{const o=new Je(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Je(n,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.vr=e,this.docs=function(){return new ze(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Kr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Kr();const s=n.path,a=new J(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||aD(sD(d),r)<=0||(i.has(d.key)||lh(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,n,r,i){re()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SL(this)}getSize(e){return F.resolve(this.size)}}class SL extends mL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.persistence=e,this.Mr=new es(n=>gg(n),yg),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Sg,this.targetCount=0,this.Lr=jo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new jo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(o).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n){this.Br={},this.overlays={},this.kr=new dg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new TL(this),this.indexManager=new fL,this.remoteDocumentCache=function(i){return new EL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new hL(n),this.$r=new vL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _L,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new wL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new AL(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class AL extends uD{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.zr=new Sg,this.jr=null}static Hr(e){return new Tg(e)}get Jr(){if(this.jr)return this.jr;throw re()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=J.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,ne.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ig(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ob()?8:cD(ct())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new PL;return this.Ji(e,n,s).next(a=>{if(o.result=a,this.Ui)return this.Yi(e,n,s,a.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(As()<=ue.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(As()<=ue.DEBUG&&Q("QueryEngine","Query:",Hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(As()<=ue.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):F.resolve())}ji(e,n){if(a_(n))return F.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mp(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.zi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,s,u.readTime)?this.ji(e,mp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return a_(n)||i.isEqual(ne.min())?F.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?F.resolve(null):(As()<=ue.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hi(n)),this.es(e,s,n,oD(i,-1)).next(a=>a))})}Zi(e,n){let r=new lt(RT(e));return n.forEach((i,o)=>{lh(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return As()<=ue.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Hi(n)),this.zi.getDocumentsMatchingQuery(e,n,Wr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ze(we),this.rs=new es(o=>gg(o),yg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function kL(t,e,n,r){return new RL(t,e,n,r)}async function WT(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=fe();for(const c of i){s.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of o){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:s,addedBatchIds:a}))})})}function qT(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function xL(t,e){const n=me(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Qr.removeMatchingKeys(o,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(o,d.addedDocuments,p)));let T=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Et.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(p,T),function(R,b,I){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,T,d)&&a.push(n.Qr.updateTargetData(o,T))});let u=Kr(),c=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),a.push(bL(o,s,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ne.min())){const d=n.Qr.getLastRemoteSnapshotVersion(o).next(p=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(n.ns=i,o))}function bL(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Kr();return n.forEach((a,u)=>{const c=o.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:s,ls:i}})}function OL(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,F.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new Rr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function wp(t,e,n){const r=me(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Ua(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function v_(t,e,n){const r=me(t);let i=ne.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,c,d){const p=me(u),m=p.rs.get(d);return m!==void 0?F.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,s,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:ne.min(),n?o:fe())).next(a=>(NL(r,RD(e),a),{documents:a,hs:o})))}function NL(t,e,n){let r=t.ss.get(e)||ne.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class __{constructor(){this.activeTargetIds=DD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DL{constructor(){this.no=new __,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new __,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl=null;function Md(){return bl===null?bl=function(){return 268435456+Math.round(2147483648*Math.random())}():bl++,"0x"+bl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class jL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,s){const a=Md(),u=this.vo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,o,s),this.Mo(n,u,c,i).then(d=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Do("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,o,s,a){return this.Co(n,r,i,o,s)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}vo(n,r){const i=ML[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=Md();return new Promise((s,a)=>{const u=new dT;u.setWithCredentials(!0),u.listenOnce(pT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ou.NO_ERROR:const d=u.getResponseJson();Q(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),s(d);break;case ou.TIMEOUT:Q(gt,`RPC '${e}' ${o} timed out`),a(new X(B.DEADLINE_EXCEEDED,"Request time out"));break;case ou.HTTP_ERROR:const p=u.getStatus();if(Q(gt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const A=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(I)>=0?I:B.UNKNOWN}(T.status);a(new X(A,T.message))}else a(new X(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new X(B.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Q(gt,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);Q(gt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Md(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yT(),a=gT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new fT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=o.join("");Q(gt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=s.createWebChannel(d,u);let m=!1,T=!1;const A=new VL({lo:b=>{T?Q(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(Q(gt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Q(gt,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},ho:()=>p.close()}),R=(b,I,y)=>{b.listen(I,S=>{try{y(S)}catch(k){setTimeout(()=>{throw k},0)}})};return R(p,Os.EventType.OPEN,()=>{T||(Q(gt,`RPC '${e}' stream ${i} transport opened.`),A.mo())}),R(p,Os.EventType.CLOSE,()=>{T||(T=!0,Q(gt,`RPC '${e}' stream ${i} transport closed`),A.po())}),R(p,Os.EventType.ERROR,b=>{T||(T=!0,Do(gt,`RPC '${e}' stream ${i} transport errored:`,b),A.po(new X(B.UNAVAILABLE,"The operation could not be completed")))}),R(p,Os.EventType.MESSAGE,b=>{var I;if(!T){const y=b.data[0];Ke(!!y);const S=y,k=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(k){Q(gt,`RPC '${e}' stream ${i} received error:`,k);const N=k.status;let O=function(_){const E=Be[_];if(E!==void 0)return MT(E)}(N),v=k.message;O===void 0&&(O=B.INTERNAL,v="Unknown error status: "+N+" with message "+k.message),T=!0,A.po(new X(O,v)),p.close()}else Q(gt,`RPC '${e}' stream ${i} received:`,y),A.yo(y)}}),R(a,mT.STAT_EVENT,b=>{b.stat===up.PROXY?Q(gt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===up.NOPROXY&&Q(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){return new JD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n,r,i,o,s,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new GT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new X(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UL extends FL{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=rL(this.serializer,e),r=function(o){if(!("targetChange"in o))return ne.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ne.min():s.readTime?go(s.readTime):ne.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=y_(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=pp(u)?{documents:iL(o,u)}:{query:oL(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=eL(o,s.resumeToken);const c=vp(o,s.expectedCount);c!==null&&(a.expectedCount=c)}else if(s.snapshotVersion.compareTo(ne.min())>0){a.readTime=ZD(o,s.snapshotVersion.toTimestamp());const c=vp(o,s.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=aL(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=y_(this.serializer),n.removeTarget=e,this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new X(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,_p(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(B.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.xo(e,_p(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(B.UNKNOWN,s.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class zL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(sr(n),this.y_=!1):Q("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(s=>{r.enqueueAndForget(async()=>{Ba(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=me(u);c.M_.add(4),await za(c),c.N_.set("Unknown"),c.M_.delete(4),await dh(c)}(this))})}),this.N_=new zL(r,i)}}async function dh(t){if(Ba(t))for(const e of t.x_)await e(!0)}async function za(t){for(const e of t.x_)await e(!1)}function QT(t,e){const n=me(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Rg(n)?Cg(n):ts(n).Xo()&&Pg(n,e))}function Ag(t,e){const n=me(t),r=ts(n);n.F_.delete(e),r.Xo()&&YT(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ba(n)&&n.N_.set("Unknown"))}function Pg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ts(t).P_(e)}function YT(t,e){t.L_.xe(e),ts(t).I_(e)}function Cg(t){t.L_=new GD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.N_.w_()}function Rg(t){return Ba(t)&&!ts(t).Zo()&&t.F_.size>0}function Ba(t){return me(t).M_.size===0}function XT(t){t.L_=void 0}async function HL(t){t.N_.set("Online")}async function WL(t){t.F_.forEach((e,n)=>{Pg(t,e)})}async function qL(t,e){XT(t),Rg(t)?(t.N_.D_(e),Cg(t)):t.N_.set("Unknown")}async function KL(t,e,n){if(t.N_.set("Online"),e instanceof jT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await E_(t,r)}else if(e instanceof au?t.L_.Ke(e):e instanceof VT?t.L_.He(e):t.L_.We(e),!n.isEqual(ne.min()))try{const r=await qT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.L_.rt(s);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=o.F_.get(c);d&&o.F_.set(c,d.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,c)=>{const d=o.F_.get(u);if(!d)return;o.F_.set(u,d.withResumeToken(Et.EMPTY_BYTE_STRING,d.snapshotVersion)),YT(o,u);const p=new Rr(d.target,u,c,d.sequenceNumber);Pg(o,p)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await E_(t,r)}}async function E_(t,e,n){if(!Ua(e))throw e;t.M_.add(1),await za(t),t.N_.set("Offline"),n||(n=()=>qT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await dh(t)})}async function S_(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Ba(n);n.M_.add(3),await za(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await dh(n)}async function GL(t,e){const n=me(t);e?(n.M_.delete(2),await dh(n)):e||(n.M_.add(2),await za(n),n.N_.set("Unknown"))}function ts(t){return t.B_||(t.B_=function(n,r,i){const o=me(n);return o.f_(),new UL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:HL.bind(null,t),To:WL.bind(null,t),Ao:qL.bind(null,t),h_:KL.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Rg(t)?Cg(t):t.N_.set("Unknown")):(await t.B_.stop(),XT(t))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new kg(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function JT(t,e){if(sr("AsyncQueue",`${e}: ${t}`),Ua(t))return new X(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new yo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.q_=new ze(J.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):re():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fo{constructor(e,n,r,i,o,s,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Fo(e,n,yo.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class YL{constructor(){this.queries=new es(e=>CT(e),ah),this.onlineState="Unknown",this.z_=new Set}}async function ZT(t,e){const n=me(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new QL,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await n.onListen(i,!0);break;case 1:o.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=JT(s,`Initialization of query '${Hi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.U_.push(e),e.j_(n.onlineState),o.K_&&e.H_(o.K_)&&xg(n)}async function eI(t,e){const n=me(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.U_.indexOf(e);s>=0&&(o.U_.splice(s,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XL(t,e){const n=me(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.U_)a.H_(i)&&(r=!0);s.K_=i}}r&&xg(n)}function JL(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const o of i.U_)o.onError(n);r.queries.delete(e)}function xg(t){t.z_.forEach(e=>{e.next()})}var Ep,I_;(I_=Ep||(Ep={})).J_="default",I_.Cache="cache";class tI{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ep.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.key=e}}class rI{constructor(e){this.key=e}}class ZL{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=fe(),this.mutatedKeys=fe(),this.Ia=RT(e),this.Ta=new yo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new T_,i=n?n.Ta:this.Ta;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),T=lh(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),R=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;m&&T?m.data.isEqual(T.data)?A!==R&&(r.track({type:3,doc:T}),b=!0):this.Ra(m,T)||(r.track({type:2,doc:T}),b=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(a=!0)):!m&&T?(r.track({type:0,doc:T}),b=!0):m&&!T&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(T?(s=s.add(T),o=R?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Ta:s,Aa:r,Xi:a,mutatedKeys:o}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const s=e.Aa.Q_();s.sort((d,p)=>function(T,A){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return R(T)-R(A)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,s.length!==0||c?{snapshot:new Fo(this.query,e.Ta,o,s,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new T_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=fe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new rI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new nI(r))}),n}pa(e){this.la=e.hs,this.Pa=fe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Fo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class eM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tM{constructor(e){this.key=e,this.wa=!1}}class nM{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new es(a=>CT(a),ah),this.Da=new Map,this.Ca=new Set,this.va=new ze(J.comparator),this.Fa=new Map,this.Ma=new Sg,this.xa={},this.Oa=new Map,this.Na=jo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function rM(t,e,n=!0){const r=lI(t);let i;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await iI(r,e,n,!0),i}async function iM(t,e){const n=lI(t);await iI(n,e,!0,!1)}async function iI(t,e,n,r){const i=await OL(t.localStore,On(e)),o=i.targetId,s=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let a;return r&&(a=await oM(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&QT(t.remoteStore,i),a}async function oM(t,e,n,r,i){t.Ba=(p,m,T)=>async function(R,b,I,y){let S=b.view.da(I);S.Xi&&(S=await v_(R.localStore,b.query,!1).then(({documents:v})=>b.view.da(v,S)));const k=y&&y.targetChanges.get(b.targetId),N=y&&y.targetMismatches.get(b.targetId)!=null,O=b.view.applyChanges(S,R.isPrimaryClient,k,N);return P_(R,b.targetId,O.fa),O.snapshot}(t,p,m,T);const o=await v_(t.localStore,e,!0),s=new ZL(e,o.hs),a=s.da(o.documents),u=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(a,t.isPrimaryClient,u);P_(t,n,c.fa);const d=new eM(e,n,s);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function sM(t,e,n){const r=me(t),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(s=>!ah(s,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ag(r.remoteStore,i.targetId),Sp(r,i.targetId)}).catch(hg)):(Sp(r,i.targetId),await wp(r.localStore,i.targetId,!0))}async function aM(t,e){const n=me(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ag(n.remoteStore,r.targetId))}async function oI(t,e){const n=me(t);try{const r=await xL(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Fa.get(o);s&&(Ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.wa=!0:i.modifiedDocuments.size>0?Ke(s.wa):i.removedDocuments.size>0&&(Ke(s.wa),s.wa=!1))}),await aI(n,r,e)}catch(r){await hg(r)}}function A_(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,s)=>{const a=s.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=me(s);u.onlineState=a;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(a)&&(c=!0)}),c&&xg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lM(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),o=i&&i.key;if(o){let s=new ze(J.comparator);s=s.insert(o,_t.newNoDocument(o,ne.min()));const a=fe().add(o),u=new hh(ne.min(),new Map,new ze(we),s,a);await oI(r,u),r.va=r.va.remove(o),r.Fa.delete(e),bg(r)}else await wp(r.localStore,e,!1).then(()=>Sp(r,e,n)).catch(hg)}function Sp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||sI(t,r)})}function sI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ag(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),bg(t))}function P_(t,e,n){for(const r of n)r instanceof nI?(t.Ma.addReference(r.key,e),uM(t,r)):r instanceof rI?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||sI(t,r.key)):re()}function uM(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.Ca.add(r),bg(t))}function bg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new J(De.fromString(e)),r=t.Na.next();t.Fa.set(r,new tM(n)),t.va=t.va.insert(n,r),QT(t.remoteStore,new Rr(On(vg(n.path)),r,"TargetPurposeLimboResolution",dg.oe))}}async function aI(t,e,n){const r=me(t),i=[],o=[],s=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{s.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const d=Ig.Ki(u.targetId,c);o.push(d)}}))}),await Promise.all(s),r.Sa.h_(i),await async function(u,c){const d=me(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.qi,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>F.forEach(m.Qi,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Ua(p))throw p;Q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=d.ns.get(m),A=T.snapshotVersion,R=T.withLastLimboFreeSnapshotVersion(A);d.ns=d.ns.insert(m,R)}}}(r.localStore,o))}async function cM(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await WT(n.localStore,e);n.currentUser=e,function(o,s){o.Oa.forEach(a=>{a.forEach(u=>{u.reject(new X(B.CANCELLED,s))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aI(n,r.us)}}function hM(t,e){const n=me(t),r=n.Fa.get(e);if(r&&r.wa)return fe().add(r.key);{let i=fe();const o=n.Da.get(e);if(!o)return i;for(const s of o){const a=n.ba.get(s);i=i.unionWith(a.view.Ea)}return i}}function lI(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lM.bind(null,e),e.Sa.h_=XL.bind(null,e.eventManager),e.Sa.ka=JL.bind(null,e.eventManager),e}class C_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=KT(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kL(this.persistence,new CL,e.initialUser,this.serializer)}createPersistence(e){return new IL(Tg.Hr,this.serializer)}createSharedClientState(e){return new DL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cM.bind(null,this.syncEngine),await GL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YL}()}createDatastore(e){const n=KT(e.databaseInfo.databaseId),r=function(o){return new jL(o)}(e.databaseInfo);return function(o,s,a,u){return new $L(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new BL(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A_(this.syncEngine,n,0),function(){return w_.D()?new w_:new LL}())}createSyncEngine(e,n){return function(i,o,s,a,u,c,d){const p=new nM(i,o,s,a,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=me(r);Q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await za(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=_T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=JT(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jd(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mM(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>S_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>S_(e.remoteStore,i)),t._onlineComponents=e}function pM(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!pM(n))throw n;Do("Error using user provided cache. Falling back to memory cache: "+n),await jd(t,new C_)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await jd(t,new C_);return t._offlineComponents}async function gM(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await R_(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await R_(t,new dM))),t._onlineComponents}async function cI(t){const e=await gM(t),n=e.eventManager;return n.onListen=rM.bind(null,e.syncEngine),n.onUnlisten=sM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aM.bind(null,e.syncEngine),n}function yM(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,c){const d=new uI({next:m=>{s.enqueueAndForget(()=>eI(o,p));const T=m.docs.has(a);!T&&m.fromCache?c.reject(new X(B.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new X(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new tI(vg(a.path),d,{includeMetadataChanges:!0,ra:!0});return ZT(o,p)}(await cI(t),t.asyncQueue,e,n,r)),r.promise}function vM(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,c){const d=new uI({next:m=>{s.enqueueAndForget(()=>eI(o,p)),m.fromCache&&u.source==="server"?c.reject(new X(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new tI(a,d,{includeMetadataChanges:!0,ra:!0});return ZT(o,p)}(await cI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e,n){if(!n)throw new X(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _M(t,e,n,r){if(e===!0&&r===!0)throw new X(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x_(t){if(!J.isDocumentKey(t))throw new X(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function b_(t){if(J.isDocumentKey(t))throw new X(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wM(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wM(t);throw new X(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_M("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new X(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new X(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new X(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YN;switch(r.type){case"firstParty":return new eD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=k_.get(n);r&&(Q("ComponentProvider","Removing Datastore"),k_.delete(n),r.terminate())}(this),Promise.resolve()}}function EM(t,e,n,r={}){var i;const o=(t=Ta(t,fh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Do("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=yt.MOCK_USER;else{a=kS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new XN(new vT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ph(this.firestore,e,this._query)}}class Nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nn(this.firestore,e,this._key)}}class Ur extends ph{constructor(e,n,r){super(e,n,vg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nn(this.firestore,null,new J(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}function SM(t,e,...n){if(t=ur(t),dI("collection","path",e),t instanceof fh){const r=De.fromString(e,...n);return b_(r),new Ur(t,null,r)}{if(!(t instanceof Nn||t instanceof Ur))throw new X(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return b_(r),new Ur(t.firestore,null,r)}}function TM(t,e,...n){if(t=ur(t),arguments.length===1&&(e=_T.newId()),dI("doc","path",e),t instanceof fh){const r=De.fromString(e,...n);return x_(r),new Nn(t,null,new J(r))}{if(!(t instanceof Nn||t instanceof Ur))throw new X(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return x_(r),new Nn(t.firestore,t instanceof Ur?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new GT(this,"async_queue_retry"),this.hu=()=>{const n=Vd();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Vd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Fr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ua(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=kg.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&re()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Og extends fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new IM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pI(this),this._firestoreClient.terminate()}}function AM(t,e){const n=typeof t=="object"?t:Zm(),r=typeof t=="string"?t:"(default)",i=Zc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=PS("firestore");o&&EM(i,...o)}return i}function fI(t){return t._firestoreClient||pI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pI(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,c,d){return new fD(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,hI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new fM(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ju(Et.fromBase64String(e))}catch(n){throw new X(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ju(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}const CM=new RegExp("[~\\*/\\[\\]]");function RM(t,e,n){if(e.search(CM)>=0)throw N_(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new mI(...e.split("."))._internalPath}catch{throw N_(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function N_(t,e,n,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let s="";return new X(B.INVALID_ARGUMENT,o+t+s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kM extends gI{data(){return super.data()}}function yI(t,e){return typeof e=="string"?RM(t,e):e instanceof mI?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bM{convertValue(e,n="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oh(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new PM(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const n=qr(e);return new Ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ke(HT(r));const i=new Ea(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||sr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vI extends gI{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends vI{data(e={}){return super.data(e)}}class OM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ls(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ls(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),d=s.indexOf(a.doc.key)),{type:NM(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){t=Ta(t,Nn);const e=Ta(t.firestore,Og);return yM(fI(e),t._key).then(n=>MM(e,t,n))}class _I extends bM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ju(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nn(this.firestore,null,n)}}function LM(t){t=Ta(t,ph);const e=Ta(t.firestore,Og),n=fI(e),r=new _I(e);return xM(t._query),vM(n,t._query).then(i=>new OM(e,r,t,i))}function MM(t,e,n){const r=n.docs.get(e._key),i=new _I(t);return new vI(t,i,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Zo=i})(Vi),Ci(new Hr("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new Og(new JN(r.getProvider("auth-internal")),new nD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ea(c.options.projectId,d)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),xn(J0,"4.6.2",e),xn(J0,"4.6.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firebasestorage.googleapis.com",VM="storageBucket",jM=2*60*1e3,FM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Fn{constructor(e,n,r=0){super(Fd(e),`Firebase Storage: ${n} (${Fd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function Fd(t){return"storage/"+t}function UM(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(jn.UNKNOWN,t)}function $M(){return new Un(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zM(){return new Un(jn.CANCELED,"User canceled the upload/download.")}function BM(t){return new Un(jn.INVALID_URL,"Invalid URL '"+t+"'.")}function HM(t){return new Un(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function D_(t){return new Un(jn.INVALID_ARGUMENT,t)}function EI(){return new Un(jn.APP_DELETED,"The Firebase app was deleted.")}function WM(t){return new Un(jn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw HM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},R=n===wI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${R}/${i}/${b}`,"i"),S=[{regex:a,indices:u,postModify:o},{regex:T,indices:A,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<S.length;k++){const N=S[k],O=N.regex.exec(e);if(O){const v=O[N.indices.bucket];let g=O[N.indices.path];g||(g=""),r=new yn(v,g),N.postModify(r);break}}if(r==null)throw BM(e);return r}}class qM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function p(b){i=setTimeout(()=>{i=null,t(T,u())},b)}function m(){o&&clearTimeout(o)}function T(b,...I){if(c){m();return}if(b){m(),d.call(null,b,...I);return}if(u()||s){m(),d.call(null,b,...I);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,p(S)}let A=!1;function R(b){A||(A=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),p(0)):b||(a=1)))}return p(0),o=setTimeout(()=>{s=!0,R(!0)},n),R}function GM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){return t!==void 0}function L_(t,e,n,r){if(r<e)throw D_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw D_(`Invalid value for '${t}'. Expected ${n} or less.`)}function YM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zu||(Zu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n,r,i,o,s,a,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,A)=>{this.resolve_=T,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ol(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Zu.NO_ERROR,u=o.getStatus();if(!a||XM(u,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===Zu.ABORT;r(!1,new Ol(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ol(c,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());QM(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=UM();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?EI():zM();s(u)}else{const u=$M();s(u)}};this.canceled_?n(!1,new Ol(!1,null,!0)):this.backoffId_=KM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function e4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function t4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function n4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function r4(t,e,n,r,i,o,s=!0){const a=YM(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return t4(c,e),ZM(c,n),e4(c,o),n4(c,r),new JM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ec(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return o4(this._location.path)}get storage(){return this._service}get parent(){const e=i4(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new ec(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WM(e)}}function M_(t,e){const n=e==null?void 0:e[VM];return n==null?null:yn.makeFromBucketSpec(n,t)}function s4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kS(i,t.app.options.projectId))}class a4{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=wI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jM,this._maxUploadRetryTime=FM,this._requests=new Set,i!=null?this._bucket=yn.makeFromBucketSpec(i,this._host):this._bucket=M_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=M_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ec(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new qM(EI());{const s=r4(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const V_="@firebase/storage",j_="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="storage";function l4(t=Zm(),e){t=ur(t);const r=Zc(t,SI).getImmediate({identifier:e}),i=PS("storage");return i&&u4(r,...i),r}function u4(t,e,n,r={}){s4(t,e,n,r)}function c4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new a4(n,r,i,e,Vi)}function h4(){Ci(new Hr(SI,c4,"PUBLIC").setMultipleInstances(!0)),xn(V_,j_,""),xn(V_,j_,"esm2017")}h4();const d4={apiKey:"AIzaSyDkOkyUOfpqD8kytiCJigfSELHN9AIUfZs",authDomain:"ethioplus-dad06.firebaseapp.com",projectId:"ethioplus-dad06",storageBucket:"ethioplus-dad06.appspot.com",messagingSenderId:"909296039559",appId:"1:909296039559:web:99d19fcc8ce7d962b1ea22"},f4=OS(d4),uu=GN();uu.languageCode="it";const TI=AM(f4),p4=new Kn;l4();function it(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var m4=typeof Symbol=="function"&&Symbol.observable||"@@observable",F_=m4,Ud=()=>Math.random().toString(36).substring(7).split("").join("."),g4={INIT:`@@redux/INIT${Ud()}`,REPLACE:`@@redux/REPLACE${Ud()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ud()}`},tc=g4;function Ng(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function II(t,e,n){if(typeof t!="function")throw new Error(it(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(it(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(it(1));return n(II)(t,e)}let r=t,i=e,o=new Map,s=o,a=0,u=!1;function c(){s===o&&(s=new Map,o.forEach((b,I)=>{s.set(I,b)}))}function d(){if(u)throw new Error(it(3));return i}function p(b){if(typeof b!="function")throw new Error(it(4));if(u)throw new Error(it(5));let I=!0;c();const y=a++;return s.set(y,b),function(){if(I){if(u)throw new Error(it(6));I=!1,c(),s.delete(y),o=null}}}function m(b){if(!Ng(b))throw new Error(it(7));if(typeof b.type>"u")throw new Error(it(8));if(typeof b.type!="string")throw new Error(it(17));if(u)throw new Error(it(9));try{u=!0,i=r(i,b)}finally{u=!1}return(o=s).forEach(y=>{y()}),b}function T(b){if(typeof b!="function")throw new Error(it(10));r=b,m({type:tc.REPLACE})}function A(){const b=p;return{subscribe(I){if(typeof I!="object"||I===null)throw new Error(it(11));function y(){const k=I;k.next&&k.next(d())}return y(),{unsubscribe:b(y)}},[F_](){return this}}}return m({type:tc.INIT}),{dispatch:m,subscribe:p,getState:d,replaceReducer:T,[F_]:A}}function y4(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:tc.INIT})>"u")throw new Error(it(12));if(typeof n(void 0,{type:tc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(it(13))})}function v4(t){const e=Object.keys(t),n={};for(let o=0;o<e.length;o++){const s=e[o];typeof t[s]=="function"&&(n[s]=t[s])}const r=Object.keys(n);let i;try{y4(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const p=r[d],m=n[p],T=s[p],A=m(T,a);if(typeof A>"u")throw a&&a.type,new Error(it(14));c[p]=A,u=u||A!==T}return u=u||r.length!==Object.keys(s).length,u?c:s}}function nc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function _4(...t){return e=>(n,r)=>{const i=e(n,r);let o=()=>{throw new Error(it(15))};const s={getState:i.getState,dispatch:(u,...c)=>o(u,...c)},a=t.map(u=>u(s));return o=nc(...a)(i.dispatch),{...i,dispatch:o}}}function w4(t){return Ng(t)&&"type"in t&&typeof t.type=="string"}var AI=Symbol.for("immer-nothing"),U_=Symbol.for("immer-draftable"),Qt=Symbol.for("immer-state");function gn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Uo=Object.getPrototypeOf;function Gr(t){return!!t&&!!t[Qt]}function ar(t){var e;return t?PI(t)||Array.isArray(t)||!!t[U_]||!!((e=t.constructor)!=null&&e[U_])||gh(t)||yh(t):!1}var E4=Object.prototype.constructor.toString();function PI(t){if(!t||typeof t!="object")return!1;const e=Uo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===E4}function rc(t,e){mh(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function mh(t){const e=t[Qt];return e?e.type_:Array.isArray(t)?1:gh(t)?2:yh(t)?3:0}function Tp(t,e){return mh(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function CI(t,e,n){const r=mh(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function S4(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function gh(t){return t instanceof Map}function yh(t){return t instanceof Set}function oi(t){return t.copy_||t.base_}function Ip(t,e){if(gh(t))return new Map(t);if(yh(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=PI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Qt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[s]})}return Object.create(Uo(t),r)}else{const r=Uo(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Dg(t,e=!1){return vh(t)||Gr(t)||!ar(t)||(mh(t)>1&&(t.set=t.add=t.clear=t.delete=T4),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Dg(r,!0))),t}function T4(){gn(2)}function vh(t){return Object.isFrozen(t)}var I4={};function Oi(t){const e=I4[t];return e||gn(0,t),e}var Ia;function RI(){return Ia}function A4(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function $_(t,e){e&&(Oi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Ap(t){Pp(t),t.drafts_.forEach(P4),t.drafts_=null}function Pp(t){t===Ia&&(Ia=t.parent_)}function z_(t){return Ia=A4(Ia,t)}function P4(t){const e=t[Qt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function B_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Qt].modified_&&(Ap(e),gn(4)),ar(t)&&(t=ic(e,t),e.parent_||oc(e,t)),e.patches_&&Oi("Patches").generateReplacementPatches_(n[Qt].base_,t,e.patches_,e.inversePatches_)):t=ic(e,n,[]),Ap(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==AI?t:void 0}function ic(t,e,n){if(vh(e))return e;const r=e[Qt];if(!r)return rc(e,(i,o)=>H_(t,r,e,i,o,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return oc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),rc(o,(a,u)=>H_(t,r,i,a,u,n,s)),oc(t,i,!1),n&&t.patches_&&Oi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function H_(t,e,n,r,i,o,s){if(Gr(i)){const a=o&&e&&e.type_!==3&&!Tp(e.assigned_,r)?o.concat(r):void 0,u=ic(t,i,a);if(CI(n,r,u),Gr(u))t.canAutoFreeze_=!1;else return}else s&&n.add(i);if(ar(i)&&!vh(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;ic(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&oc(t,i)}}function oc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Dg(e,n)}function C4(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:RI(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=Lg;n&&(i=[r],o=Aa);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var Lg={get(t,e){if(e===Qt)return t;const n=oi(t);if(!Tp(n,e))return R4(t,n,e);const r=n[e];return t.finalized_||!ar(r)?r:r===$d(t.base_,e)?(zd(t),t.copy_[e]=Rp(r,t)):r},has(t,e){return e in oi(t)},ownKeys(t){return Reflect.ownKeys(oi(t))},set(t,e,n){const r=kI(oi(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=$d(oi(t),e),o=i==null?void 0:i[Qt];if(o&&o.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(S4(n,i)&&(n!==void 0||Tp(t.base_,e)))return!0;zd(t),Cp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return $d(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,zd(t),Cp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=oi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){gn(11)},getPrototypeOf(t){return Uo(t.base_)},setPrototypeOf(){gn(12)}},Aa={};rc(Lg,(t,e)=>{Aa[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Aa.deleteProperty=function(t,e){return Aa.set.call(this,t,e,void 0)};Aa.set=function(t,e,n){return Lg.set.call(this,t[0],e,n,t[0])};function $d(t,e){const n=t[Qt];return(n?oi(n):t)[e]}function R4(t,e,n){var i;const r=kI(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function kI(t,e){if(!(e in t))return;let n=Uo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Uo(n)}}function Cp(t){t.modified_||(t.modified_=!0,t.parent_&&Cp(t.parent_))}function zd(t){t.copy_||(t.copy_=Ip(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var k4=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const o=n;n=e;const s=this;return function(u=o,...c){return s.produce(u,d=>n.call(this,d,...c))}}typeof n!="function"&&gn(6),r!==void 0&&typeof r!="function"&&gn(7);let i;if(ar(e)){const o=z_(this),s=Rp(e,void 0);let a=!0;try{i=n(s),a=!1}finally{a?Ap(o):Pp(o)}return $_(o,r),B_(i,o)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===AI&&(i=void 0),this.autoFreeze_&&Dg(i,!0),r){const o=[],s=[];Oi("Patches").generateReplacementPatches_(e,i,o,s),r(o,s)}return i}else gn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(s,...a)=>this.produceWithPatches(s,u=>e(u,...a));let r,i;return[this.produce(e,n,(s,a)=>{r=s,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){ar(t)||gn(8),Gr(t)&&(t=xI(t));const e=z_(this),n=Rp(t,void 0);return n[Qt].isManual_=!0,Pp(e),n}finishDraft(t,e){const n=t&&t[Qt];(!n||!n.isManual_)&&gn(9);const{scope_:r}=n;return $_(r,e),B_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Oi("Patches").applyPatches_;return Gr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Rp(t,e){const n=gh(t)?Oi("MapSet").proxyMap_(t,e):yh(t)?Oi("MapSet").proxySet_(t,e):C4(t,e);return(e?e.scope_:RI()).drafts_.push(n),n}function xI(t){return Gr(t)||gn(10,t),bI(t)}function bI(t){if(!ar(t)||vh(t))return t;const e=t[Qt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Ip(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Ip(t,!0);return rc(n,(r,i)=>{CI(n,r,bI(i))}),e&&(e.finalized_=!1),n}var Yt=new k4,OI=Yt.produce;Yt.produceWithPatches.bind(Yt);Yt.setAutoFreeze.bind(Yt);Yt.setUseStrictShallowCopy.bind(Yt);Yt.applyPatches.bind(Yt);Yt.createDraft.bind(Yt);Yt.finishDraft.bind(Yt);function x4(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function b4(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function O4(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var W_=t=>Array.isArray(t)?t:[t];function N4(t){const e=Array.isArray(t[0])?t[0]:t;return O4(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function D4(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var L4=class{constructor(t){this.value=t}deref(){return this.value}},M4=typeof WeakRef<"u"?WeakRef:L4,V4=0,q_=1;function Nl(){return{s:V4,v:void 0,o:null,p:null}}function Mg(t,e={}){let n=Nl();const{resultEqualityCheck:r}=e;let i,o=0;function s(){var p;let a=n;const{length:u}=arguments;for(let m=0,T=u;m<T;m++){const A=arguments[m];if(typeof A=="function"||typeof A=="object"&&A!==null){let R=a.o;R===null&&(a.o=R=new WeakMap);const b=R.get(A);b===void 0?(a=Nl(),R.set(A,a)):a=b}else{let R=a.p;R===null&&(a.p=R=new Map);const b=R.get(A);b===void 0?(a=Nl(),R.set(A,a)):a=b}}const c=a;let d;if(a.s===q_?d=a.v:(d=t.apply(null,arguments),o++),c.s=q_,r){const m=((p=i==null?void 0:i.deref)==null?void 0:p.call(i))??i;m!=null&&r(m,d)&&(d=m,o!==0&&o--),i=typeof d=="object"&&d!==null||typeof d=="function"?new M4(d):d}return c.v=d,d}return s.clearCache=()=>{n=Nl(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function NI(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let o=0,s=0,a,u={},c=i.pop();typeof c=="object"&&(u=c,c=i.pop()),x4(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const d={...n,...u},{memoize:p,memoizeOptions:m=[],argsMemoize:T=Mg,argsMemoizeOptions:A=[],devModeChecks:R={}}=d,b=W_(m),I=W_(A),y=N4(i),S=p(function(){return o++,c.apply(null,arguments)},...b),k=T(function(){s++;const O=D4(y,arguments);return a=S.apply(null,O),a},...I);return Object.assign(k,{resultFunc:c,memoizedResultFunc:S,dependencies:y,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:p,argsMemoize:T})};return Object.assign(r,{withTypes:()=>r}),r}var j4=NI(Mg),F4=Object.assign((t,e=j4)=>{b4(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(o=>t[o]);return e(r,(...o)=>o.reduce((s,a,u)=>(s[n[u]]=a,s),{}))},{withTypes:()=>F4});function DI(t){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,t):i(o)}var U4=DI(),$4=DI,z4=(...t)=>{const e=NI(...t),n=Object.assign((...r)=>{const i=e(...r),o=(s,...a)=>i(Gr(s)?xI(s):s,...a);return Object.assign(o,i),o},{withTypes:()=>n});return n};z4(Mg);var B4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?nc:nc.apply(null,arguments)};function $o(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Ut(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>w4(r)&&r.type===t,n}var LI=class Ms extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Ms.prototype)}static get[Symbol.species](){return Ms}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Ms(...e[0].concat(this)):new Ms(...e.concat(this))}};function K_(t){return ar(t)?OI(t,()=>{}):t}function G_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(Ut(10));const r=n.insert(e,t);return t.set(e,r),r}function H4(t){return typeof t=="boolean"}var W4=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=e??{};let s=new LI;return n&&(H4(n)?s.push(U4):s.push($4(n.extraArgument))),s},q4="RTK_autoBatch",MI=t=>e=>{setTimeout(e,t)},K4=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:MI(10),G4=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,o=!1,s=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?K4:t.type==="callback"?t.queueNotification:MI(t.timeout),c=()=>{s=!1,o&&(o=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const p=()=>i&&d(),m=r.subscribe(p);return a.add(d),()=>{m(),a.delete(d)}},dispatch(d){var p;try{return i=!((p=d==null?void 0:d.meta)!=null&&p[q4]),o=!i,o&&(s||(s=!0,u(c))),r.dispatch(d)}finally{i=!0}}})},Q4=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new LI(t);return r&&i.push(G4(typeof r=="object"?r:void 0)),i},Y4=!0;function X4(t){const e=W4(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Ng(n))a=v4(n);else throw new Error(Ut(1));let u;typeof r=="function"?u=r(e):u=e();let c=nc;i&&(c=B4({trace:!Y4,...typeof i=="object"&&i}));const d=_4(...u),p=Q4(d);let m=typeof s=="function"?s(p):p();const T=c(...m);return II(a,o,T)}function VI(t){const e={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(Ut(28));if(a in e)throw new Error(Ut(29));return e[a]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return t(i),[e,n,r]}function J4(t){return typeof t=="function"}function Z4(t,e){let[n,r,i]=VI(e),o;if(J4(t))o=()=>K_(t());else{const a=K_(t);o=()=>a}function s(a=o(),u){let c=[n[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,p)=>{if(p)if(Gr(d)){const T=p(d,u);return T===void 0?d:T}else{if(ar(d))return OI(d,m=>p(m,u));{const m=p(d,u);if(m===void 0){if(d===null)return d;throw new Error(Ut(9))}return m}}return d},a)}return s.getInitialState=o,s}var eV="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",tV=(t=21)=>{let e="",n=t;for(;n--;)e+=eV[Math.random()*64|0];return e},nV=Symbol.for("rtk-slice-createasyncthunk");function rV(t,e){return`${t}/${e}`}function iV({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[nV];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(Ut(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(sV()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,k){const N=typeof S=="string"?S:S.type;if(!N)throw new Error(Ut(12));if(N in c.sliceCaseReducersByType)throw new Error(Ut(13));return c.sliceCaseReducersByType[N]=k,d},addMatcher(S,k){return c.sliceMatchers.push({matcher:S,reducer:k}),d},exposeAction(S,k){return c.actionCreators[S]=k,d},exposeCaseReducer(S,k){return c.sliceCaseReducersByName[S]=k,d}};u.forEach(S=>{const k=a[S],N={reducerName:S,type:rV(o,S),createNotation:typeof i.reducers=="function"};lV(k)?cV(N,k,d,e):aV(N,k,d)});function p(){const[S={},k=[],N=void 0]=typeof i.extraReducers=="function"?VI(i.extraReducers):[i.extraReducers],O={...S,...c.sliceCaseReducersByType};return Z4(i.initialState,v=>{for(let g in O)v.addCase(g,O[g]);for(let g of c.sliceMatchers)v.addMatcher(g.matcher,g.reducer);for(let g of k)v.addMatcher(g.matcher,g.reducer);N&&v.addDefaultCase(N)})}const m=S=>S,T=new Map;let A;function R(S,k){return A||(A=p()),A(S,k)}function b(){return A||(A=p()),A.getInitialState()}function I(S,k=!1){function N(v){let g=v[S];return typeof g>"u"&&k&&(g=b()),g}function O(v=m){const g=G_(T,k,{insert:()=>new WeakMap});return G_(g,v,{insert:()=>{const _={};for(const[E,C]of Object.entries(i.selectors??{}))_[E]=oV(C,v,b,k);return _}})}return{reducerPath:S,getSelectors:O,get selectors(){return O(N)},selectSlice:N}}const y={name:o,reducer:R,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:b,...I(s),injectInto(S,{reducerPath:k,...N}={}){const O=k??s;return S.inject({reducerPath:O,reducer:R},N),{...y,...I(O,!0)}}};return y}}function oV(t,e,n,r){function i(o,...s){let a=e(o);return typeof a>"u"&&r&&(a=n()),t(a,...s)}return i.unwrapped=t,i}var jI=iV();function sV(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function aV({type:t,reducerName:e,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!uV(r))throw new Error(Ut(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(t,o).exposeCaseReducer(e,o).exposeAction(e,s?$o(t,s):$o(t))}function lV(t){return t._reducerDefinitionType==="asyncThunk"}function uV(t){return t._reducerDefinitionType==="reducerWithPrepare"}function cV({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Ut(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:u,settled:c,options:d}=n,p=i(t,o,d);r.exposeAction(e,p),s&&r.addCase(p.fulfilled,s),a&&r.addCase(p.pending,a),u&&r.addCase(p.rejected,u),c&&r.addMatcher(p.settled,c),r.exposeCaseReducer(e,{fulfilled:s||Dl,pending:a||Dl,rejected:u||Dl,settled:c||Dl})}function Dl(){}var hV=(t,e)=>{if(typeof t!="function")throw new Error(Ut(32))},Vg="listenerMiddleware",dV=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:o}=t;if(e)i=$o(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Ut(21));return hV(o),{predicate:i,type:e,effect:o}},fV=Object.assign(t=>{const{type:e,predicate:n,effect:r}=dV(t);return{id:tV(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Ut(22))}}},{withTypes:()=>fV}),pV=Object.assign($o(`${Vg}/add`),{withTypes:()=>pV});$o(`${Vg}/removeAll`);var mV=Object.assign($o(`${Vg}/remove`),{withTypes:()=>mV});function Ut(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const gV={name:"",email:"",photo:""},FI=jI({name:"user",initialState:gV,reducers:{setUserLoginDetails:(t,e)=>{t.name=e.payload.name,t.email=e.payload.email,t.photo=e.payload.photo},setSignOutState:t=>{t.name=null,t.email=null,t.photo=null}}}),{setUserLoginDetails:yV,setSignOutState:vV}=FI.actions,UI=t=>t.user.name,_V=t=>t.user.photo,wV=FI.reducer,EV=()=>{const t=bE(),e=Kk(),n=Ii(UI),r=Ii(_V);Ge.useEffect(()=>{uu.onAuthStateChanged(async s=>{s&&(o(s),e.push("/home"))})},[n]);const i=()=>{n?n&&uu.signOut().then(()=>{t(vV()),e.push("/")}).catch(s=>alert(s.message)):rN(uu,p4).then(s=>{o(s.user)}).catch(s=>{alert(s.message)})},o=s=>{t(yV({name:s.displayName,email:s.email,photo:s.photoURL}))};return M.jsxs(SV,{children:[M.jsx(TV,{children:"Ethio+"}),n?M.jsxs(M.Fragment,{children:[M.jsxs(IV,{children:[M.jsxs("a",{href:"/Ethio-plus/home",children:[M.jsx("img",{src:fb,alt:""}),M.jsx("span",{children:"HOME"})]}),M.jsxs("a",{children:[M.jsx("img",{src:pb,alt:""}),M.jsx("span",{children:"SEARCH"})]}),M.jsxs("a",{children:[M.jsx("img",{src:mb,alt:""}),M.jsx("span",{children:"WATCHLIST"})]}),M.jsxs("a",{children:[M.jsx("img",{src:gb,alt:""}),M.jsx("span",{children:"ORIGINALS"})]}),M.jsxs("a",{children:[M.jsx("img",{src:yb,alt:""}),M.jsx("span",{children:"MOVIES"})]}),M.jsxs("a",{children:[M.jsx("img",{src:vb,alt:""}),M.jsx("span",{children:"SERIES"})]})]}),M.jsxs(PV,{children:[M.jsx($I,{src:r,alt:n}),M.jsx(zI,{children:M.jsx("span",{onClick:i,children:"Sign out"})})]})]}):M.jsx(AV,{onClick:i,children:"Login"})]})},SV=te.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`,TV=te.a`
  cursor: pointer;
  margin-top: 4px;
  font-size: 19px;
  letter-spacing: 4px;
  font-weight: bold;
`,IV=te.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: relative;
    gap: 10px;

    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before {
          content: "";
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }

        &:hover:before {
          visibility: visible;
          opacity: 1 !important;
          transform: scaleX(1);
        }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,AV=te.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`,$I=te.img`
  height: 100%;
  letter-spacing: 1px;
`,zI=te.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`,PV=te.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${$I} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${zI} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`,CV="/assets/home-background-BAjzJNbe.png";var BI={},HI={},_h={},WI={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(WI);var RV="Expected a function",Q_=NaN,kV="[object Symbol]",xV=/^\s+|\s+$/g,bV=/^[-+]0x[0-9a-f]+$/i,OV=/^0b[01]+$/i,NV=/^0o[0-7]+$/i,DV=parseInt,LV=typeof sl=="object"&&sl&&sl.Object===Object&&sl,MV=typeof self=="object"&&self&&self.Object===Object&&self,VV=LV||MV||Function("return this")(),jV=Object.prototype,FV=jV.toString,UV=Math.max,$V=Math.min,Bd=function(){return VV.Date.now()};function zV(t,e,n){var r,i,o,s,a,u,c=0,d=!1,p=!1,m=!0;if(typeof t!="function")throw new TypeError(RV);e=Y_(e)||0,kp(n)&&(d=!!n.leading,p="maxWait"in n,o=p?UV(Y_(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m);function T(O){var v=r,g=i;return r=i=void 0,c=O,s=t.apply(g,v),s}function A(O){return c=O,a=setTimeout(I,e),d?T(O):s}function R(O){var v=O-u,g=O-c,_=e-v;return p?$V(_,o-g):_}function b(O){var v=O-u,g=O-c;return u===void 0||v>=e||v<0||p&&g>=o}function I(){var O=Bd();if(b(O))return y(O);a=setTimeout(I,R(O))}function y(O){return a=void 0,m&&r?T(O):(r=i=void 0,s)}function S(){a!==void 0&&clearTimeout(a),c=0,r=u=i=a=void 0}function k(){return a===void 0?s:y(Bd())}function N(){var O=Bd(),v=b(O);if(r=arguments,i=this,u=O,v){if(a===void 0)return A(u);if(p)return a=setTimeout(I,e),T(u)}return a===void 0&&(a=setTimeout(I,e)),s}return N.cancel=S,N.flush=k,N}function kp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function BV(t){return!!t&&typeof t=="object"}function HV(t){return typeof t=="symbol"||BV(t)&&FV.call(t)==kV}function Y_(t){if(typeof t=="number")return t;if(HV(t))return Q_;if(kp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=kp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(xV,"");var n=OV.test(t);return n||NV.test(t)?DV(t.slice(2),n?2:8):bV.test(t)?Q_:+t}var WV=zV,qI={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)e.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(qI);var wh=qI.exports,W={},jg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(Ge);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=r})(jg);Object.defineProperty(W,"__esModule",{value:!0});W.checkSpecKeys=W.checkNavigable=W.changeSlide=W.canUseDOM=W.canGoNext=void 0;W.clamp=GI;W.extractObject=void 0;W.filterSettings=s9;W.validSettings=W.swipeStart=W.swipeMove=W.swipeEnd=W.slidesOnRight=W.slidesOnLeft=W.slideHandler=W.siblingDirection=W.safePreventDefault=W.lazyStartIndex=W.lazySlidesOnRight=W.lazySlidesOnLeft=W.lazyEndIndex=W.keyHandler=W.initializedState=W.getWidth=W.getTrackLeft=W.getTrackCSS=W.getTrackAnimateCSS=W.getTotalSlides=W.getSwipeDirection=W.getSlideCount=W.getRequiredLazySlides=W.getPreClones=W.getPostClones=W.getOnDemandLazySlides=W.getNavigableIndexes=W.getHeight=void 0;var qV=KI(Ge),KV=KI(jg);function KI(t){return t&&t.__esModule?t:{default:t}}function Pa(t){"@babel/helpers - typeof";return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pa(t)}function X_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Oe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X_(Object(n),!0).forEach(function(r){GV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function GV(t,e,n){return e=QV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QV(t){var e=YV(t,"string");return Pa(e)=="symbol"?e:String(e)}function YV(t,e){if(Pa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Pa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function GI(t,e,n){return Math.max(e,Math.min(t,n))}var vo=W.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},QI=W.getOnDemandLazySlides=function(e){for(var n=[],r=YI(e),i=XI(e),o=r;o<i;o++)e.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};W.getRequiredLazySlides=function(e){for(var n=[],r=YI(e),i=XI(e),o=r;o<i;o++)n.push(o);return n};var YI=W.lazyStartIndex=function(e){return e.currentSlide-XV(e)},XI=W.lazyEndIndex=function(e){return e.currentSlide+JV(e)},XV=W.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},JV=W.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},xp=W.getWidth=function(e){return e&&e.offsetWidth||0},JI=W.getHeight=function(e){return e&&e.offsetHeight||0},ZI=W.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=e.startX-e.curX,i=e.startY-e.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"},eA=W.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};W.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};W.initializedState=function(e){var n=qV.default.Children.count(e.children),r=e.listRef,i=Math.ceil(xp(r)),o=e.trackRef&&e.trackRef.node,s=Math.ceil(xp(o)),a;if(e.vertical)a=i;else{var u=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/e.slidesToShow)}var c=r&&JI(r.querySelector('[data-index="0"]')),d=c*e.slidesToShow,p=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(p=n-1-e.initialSlide);var m=e.lazyLoadedList||[],T=QI(Oe(Oe({},e),{},{currentSlide:p,lazyLoadedList:m}));m=m.concat(T);var A={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:p,slideHeight:c,listHeight:d,lazyLoadedList:m};return e.autoplaying===null&&e.autoplay&&(A.autoplaying="playing"),A};W.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,o=e.infinite,s=e.index,a=e.slideCount,u=e.lazyLoad,c=e.currentSlide,d=e.centerMode,p=e.slidesToScroll,m=e.slidesToShow,T=e.useCSS,A=e.lazyLoadedList;if(n&&r)return{};var R=s,b,I,y,S={},k={},N=o?s:GI(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?R=s+a:s>=a&&(R=s-a),u&&A.indexOf(R)<0&&(A=A.concat(R)),S={animating:!0,currentSlide:R,lazyLoadedList:A,targetSlide:R},k={animating:!1,targetSlide:R}}else b=R,R<0?(b=R+a,o?a%p!==0&&(b=a-a%p):b=0):!eA(e)&&R>c?R=b=c:d&&R>=a?(R=o?a:a-1,b=o?0:a-1):R>=a&&(b=R-a,o?a%p!==0&&(b=0):b=a-m),!o&&R+m>=a&&(b=a-m),I=ac(Oe(Oe({},e),{},{slideIndex:R})),y=ac(Oe(Oe({},e),{},{slideIndex:b})),o||(I===y&&(R=b),I=y),u&&(A=A.concat(QI(Oe(Oe({},e),{},{currentSlide:R})))),T?(S={animating:!0,currentSlide:b,trackStyle:tA(Oe(Oe({},e),{},{left:I})),lazyLoadedList:A,targetSlide:N},k={animating:!1,currentSlide:b,trackStyle:sc(Oe(Oe({},e),{},{left:y})),swipeLeft:null,targetSlide:N}):S={currentSlide:b,trackStyle:sc(Oe(Oe({},e),{},{left:y})),lazyLoadedList:A,targetSlide:N};return{state:S,nextState:k}};W.changeSlide=function(e,n){var r,i,o,s,a,u=e.slidesToScroll,c=e.slidesToShow,d=e.slideCount,p=e.currentSlide,m=e.targetSlide,T=e.lazyLoad,A=e.infinite;if(s=d%u!==0,r=s?0:(d-p)%u,n.message==="previous")o=r===0?u:c-r,a=p-o,T&&!A&&(i=p-o,a=i===-1?d-1:i),A||(a=m-u);else if(n.message==="next")o=r===0?u:r,a=p+o,T&&!A&&(a=(p+u)%d+r),A||(a=m+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,A){var R=n9(Oe(Oe({},e),{},{targetSlide:a}));a>n.currentSlide&&R==="left"?a=a-d:a<n.currentSlide&&R==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};W.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};W.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&vo(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};W.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,c=n.currentSlide,d=n.edgeFriction,p=n.edgeDragged,m=n.onEdge,T=n.swiped,A=n.swiping,R=n.slideCount,b=n.slidesToScroll,I=n.infinite,y=n.touchObject,S=n.swipeEvent,k=n.listHeight,N=n.listWidth;if(!r){if(i)return vo(e);o&&s&&a&&vo(e);var O,v={},g=ac(n);y.curX=e.touches?e.touches[0].pageX:e.clientX,y.curY=e.touches?e.touches[0].pageY:e.clientY,y.swipeLength=Math.round(Math.sqrt(Math.pow(y.curX-y.startX,2)));var _=Math.round(Math.sqrt(Math.pow(y.curY-y.startY,2)));if(!a&&!A&&_>10)return{scrolling:!0};a&&(y.swipeLength=_);var E=(u?-1:1)*(y.curX>y.startX?1:-1);a&&(E=y.curY>y.startY?1:-1);var C=Math.ceil(R/b),x=ZI(n.touchObject,a),P=y.swipeLength;return I||(c===0&&(x==="right"||x==="down")||c+1>=C&&(x==="left"||x==="up")||!eA(n)&&(x==="left"||x==="up"))&&(P=y.swipeLength*d,p===!1&&m&&(m(x),v.edgeDragged=!0)),!T&&S&&(S(x),v.swiped=!0),o?O=g+P*(k/N)*E:u?O=g-P*E:O=g+P*E,a&&(O=g+P*E),v=Oe(Oe({},v),{},{touchObject:y,swipeLeft:O,trackStyle:sc(Oe(Oe({},n),{},{left:O}))}),Math.abs(y.curX-y.startX)<Math.abs(y.curY-y.startY)*.8||y.swipeLength>10&&(v.swiping=!0,vo(e)),v}};W.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,d=n.swipeToSlide,p=n.scrolling,m=n.onSwipe,T=n.targetSlide,A=n.currentSlide,R=n.infinite;if(!r)return i&&vo(e),{};var b=u?c/a:s/a,I=ZI(o,u),y={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p||!o.swipeLength)return y;if(o.swipeLength>b){vo(e),m&&m(I);var S,k,N=R?A:T;switch(I){case"left":case"up":k=N+Z_(n),S=d?J_(n,k):k,y.currentDirection=0;break;case"right":case"down":k=N-Z_(n),S=d?J_(n,k):k,y.currentDirection=1;break;default:S=N}y.triggerSlideHandler=S}else{var O=ac(n);y.trackStyle=tA(Oe(Oe({},n),{},{left:O}))}return y};var ZV=W.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return o},J_=W.checkNavigable=function(e,n){var r=ZV(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},Z_=W.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(u){if(e.vertical){if(u.offsetTop+JI(u)/2>e.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+xp(u)/2>e.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var s=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return e.slidesToScroll},Fg=W.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},sc=W.getTrackCSS=function(e){Fg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=t9(e)*e.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",u=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=Oe(Oe({},o),{},{WebkitTransform:s,transform:a,msTransform:u})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o},tA=W.getTrackAnimateCSS=function(e){Fg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=sc(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},ac=W.getTrackLeft=function(e){if(e.unslick)return 0;Fg(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,o=e.centerMode,s=e.slideCount,a=e.slidesToShow,u=e.slidesToScroll,c=e.slideWidth,d=e.listWidth,p=e.variableWidth,m=e.slideHeight,T=e.fade,A=e.vertical,R=0,b,I,y=0;if(T||e.slideCount===1)return 0;var S=0;if(i?(S=-cu(e),s%u!==0&&n+u>s&&(S=-(n>s?a-(n-s):s%u)),o&&(S+=parseInt(a/2))):(s%u!==0&&n+u>s&&(S=a-s%u),o&&(S=parseInt(a/2))),R=S*c,y=S*m,A?b=n*m*-1+y:b=n*c*-1+R,p===!0){var k,N=r&&r.node;if(k=n+cu(e),I=N&&N.childNodes[k],b=I?I.offsetLeft*-1:0,o===!0){k=i?n+cu(e):n,I=N&&N.children[k],b=0;for(var O=0;O<k;O++)b-=N&&N.children[O]&&N.children[O].offsetWidth;b-=parseInt(e.centerPadding),b+=I&&(d-I.offsetWidth)/2}}return b},cu=W.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},e9=W.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},t9=W.getTotalSlides=function(e){return e.slideCount===1?1:cu(e)+e.slideCount+e9(e)},n9=W.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+r9(e)?"left":"right":e.targetSlide<e.currentSlide-i9(e)?"right":"left"},r9=W.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,o=e.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1},i9=W.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,o=e.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};W.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var o9=W.validSettings=Object.keys(KV.default);function s9(t){return o9.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Eh={};Object.defineProperty(Eh,"__esModule",{value:!0});Eh.Track=void 0;var _r=nA(Ge),Hd=nA(wh),Wd=W;function nA(t){return t&&t.__esModule?t:{default:t}}function zo(t){"@babel/helpers - typeof";return zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zo(t)}function bp(){return bp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bp.apply(this,arguments)}function a9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l9(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,iA(r.key),r)}}function u9(t,e,n){return e&&l9(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function c9(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Op(t,e)}function Op(t,e){return Op=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Op(t,e)}function h9(t){var e=rA();return function(){var r=lc(t),i;if(e){var o=lc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return d9(this,i)}}function d9(t,e){if(e&&(zo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Np(t)}function Np(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rA(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rA=function(){return!!t})()}function lc(t){return lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},lc(t)}function ew(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ew(Object(n),!0).forEach(function(r){Dp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ew(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Dp(t,e,n){return e=iA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function iA(t){var e=f9(t,"string");return zo(e)=="symbol"?e:String(e)}function f9(t,e){if(zo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(zo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var qd=function(e){var n,r,i,o,s;e.rtl?s=e.slideCount-1-e.index:s=e.index,i=s<0||s>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),r=(s-e.currentSlide)%e.slideCount===0,s>e.currentSlide-o-1&&s<=e.currentSlide+o&&(n=!0)):n=e.currentSlide<=s&&s<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var u=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},p9=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Kd=function(e,n){return e.key||n},m9=function(e){var n,r=[],i=[],o=[],s=_r.default.Children.count(e.children),a=(0,Wd.lazyStartIndex)(e),u=(0,Wd.lazyEndIndex)(e);return _r.default.Children.forEach(e.children,function(c,d){var p,m={message:"children",index:d,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(d)>=0?p=c:p=_r.default.createElement("div",null);var T=p9(Ot(Ot({},e),{},{index:d})),A=p.props.className||"",R=qd(Ot(Ot({},e),{},{index:d}));if(r.push(_r.default.cloneElement(p,{key:"original"+Kd(p,d),"data-index":d,className:(0,Hd.default)(R,A),tabIndex:"-1","aria-hidden":!R["slick-active"],style:Ot(Ot({outline:"none"},p.props.style||{}),T),onClick:function(y){p.props&&p.props.onClick&&p.props.onClick(y),e.focusOnSelect&&e.focusOnSelect(m)}})),e.infinite&&e.fade===!1){var b=s-d;b<=(0,Wd.getPreClones)(e)&&(n=-b,n>=a&&(p=c),R=qd(Ot(Ot({},e),{},{index:n})),i.push(_r.default.cloneElement(p,{key:"precloned"+Kd(p,n),"data-index":n,tabIndex:"-1",className:(0,Hd.default)(R,A),"aria-hidden":!R["slick-active"],style:Ot(Ot({},p.props.style||{}),T),onClick:function(y){p.props&&p.props.onClick&&p.props.onClick(y),e.focusOnSelect&&e.focusOnSelect(m)}}))),n=s+d,n<u&&(p=c),R=qd(Ot(Ot({},e),{},{index:n})),o.push(_r.default.cloneElement(p,{key:"postcloned"+Kd(p,n),"data-index":n,tabIndex:"-1",className:(0,Hd.default)(R,A),"aria-hidden":!R["slick-active"],style:Ot(Ot({},p.props.style||{}),T),onClick:function(y){p.props&&p.props.onClick&&p.props.onClick(y),e.focusOnSelect&&e.focusOnSelect(m)}}))}}),e.rtl?i.concat(r,o).reverse():i.concat(r,o)};Eh.Track=function(t){c9(n,t);var e=h9(n);function n(){var r;a9(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=e.call.apply(e,[this].concat(o)),Dp(Np(r),"node",null),Dp(Np(r),"handleRef",function(a){r.node=a}),r}return u9(n,[{key:"render",value:function(){var i=m9(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,u=o.onMouseLeave,c={onMouseEnter:s,onMouseOver:a,onMouseLeave:u};return _r.default.createElement("div",bp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(_r.default.PureComponent);var Sh={};function Bo(t){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bo(t)}Object.defineProperty(Sh,"__esModule",{value:!0});Sh.Dots=void 0;var Ll=oA(Ge),g9=oA(wh),tw=W;function oA(t){return t&&t.__esModule?t:{default:t}}function nw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function y9(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nw(Object(n),!0).forEach(function(r){v9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function v9(t,e,n){return e=sA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w9(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,sA(r.key),r)}}function E9(t,e,n){return e&&w9(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function sA(t){var e=S9(t,"string");return Bo(e)=="symbol"?e:String(e)}function S9(t,e){if(Bo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Bo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function T9(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Lp(t,e)}function Lp(t,e){return Lp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Lp(t,e)}function I9(t){var e=aA();return function(){var r=uc(t),i;if(e){var o=uc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return A9(this,i)}}function A9(t,e){if(e&&(Bo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P9(t)}function P9(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function aA(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aA=function(){return!!t})()}function uc(t){return uc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uc(t)}var C9=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Sh.Dots=function(t){T9(n,t);var e=I9(n);function n(){return _9(this,n),e.apply(this,arguments)}return E9(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,d=i.slidesToShow,p=i.slideCount,m=i.currentSlide,T=C9({slideCount:p,slidesToScroll:c,slidesToShow:d,infinite:u}),A={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},R=[],b=0;b<T;b++){var I=(b+1)*c-1,y=u?I:(0,tw.clamp)(I,0,p-1),S=y-(c-1),k=u?S:(0,tw.clamp)(S,0,p-1),N=(0,g9.default)({"slick-active":u?m>=k&&m<=y:m===k}),O={message:"dots",index:b,slidesToScroll:c,currentSlide:m},v=this.clickHandler.bind(this,O);R=R.concat(Ll.default.createElement("li",{key:b,className:N},Ll.default.cloneElement(this.props.customPaging(b),{onClick:v})))}return Ll.default.cloneElement(this.props.appendDots(R),y9({className:this.props.dotsClass},A))}}]),n}(Ll.default.PureComponent);var Ho={};function Wo(t){"@babel/helpers - typeof";return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wo(t)}Object.defineProperty(Ho,"__esModule",{value:!0});Ho.PrevArrow=Ho.NextArrow=void 0;var _o=uA(Ge),lA=uA(wh),R9=W;function uA(t){return t&&t.__esModule?t:{default:t}}function cc(){return cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cc.apply(this,arguments)}function rw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function hc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rw(Object(n),!0).forEach(function(r){k9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function k9(t,e,n){return e=dA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x9(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,dA(r.key),r)}}function hA(t,e,n){return e&&x9(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dA(t){var e=b9(t,"string");return Wo(e)=="symbol"?e:String(e)}function b9(t,e){if(Wo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Wo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Mp(t,e)}function Mp(t,e){return Mp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Mp(t,e)}function pA(t){var e=mA();return function(){var r=dc(t),i;if(e){var o=dc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return O9(this,i)}}function O9(t,e){if(e&&(Wo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N9(t)}function N9(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function mA(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mA=function(){return!!t})()}function dc(t){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dc(t)}Ho.PrevArrow=function(t){fA(n,t);var e=pA(n);function n(){return cA(this,n),e.apply(this,arguments)}return hA(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,lA.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=_o.default.cloneElement(this.props.prevArrow,hc(hc({},s),a)):u=_o.default.createElement("button",cc({key:"0",type:"button"},s)," ","Previous"),u}}]),n}(_o.default.PureComponent);Ho.NextArrow=function(t){fA(n,t);var e=pA(n);function n(){return cA(this,n),e.apply(this,arguments)}return hA(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,R9.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,lA.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=_o.default.cloneElement(this.props.nextArrow,hc(hc({},s),a)):u=_o.default.createElement("button",cc({key:"1",type:"button"},s)," ","Next"),u}}]),n}(_o.default.PureComponent);var gA=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},e}()}(),Vp=typeof window<"u"&&typeof document<"u"&&window.document===document,fc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),D9=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(fc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),L9=2;function M9(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function s(){D9(o)}function a(){var u=Date.now();if(n){if(u-i<L9)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=u}return a}var V9=20,j9=["top","right","bottom","left","width","height","size","weight"],F9=typeof MutationObserver<"u",U9=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=M9(this.refresh.bind(this),V9)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Vp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),F9?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Vp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=j9.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),yA=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},qo=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||fc},vA=Th(0,0,0,0);function pc(t){return parseFloat(t)||0}function iw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var o=t["border-"+i+"-width"];return r+pc(o)},0)}function $9(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var o=i[r],s=t["padding-"+o];n[o]=pc(s)}return n}function z9(t){var e=t.getBBox();return Th(0,0,e.width,e.height)}function B9(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return vA;var r=qo(t).getComputedStyle(t),i=$9(r),o=i.left+i.right,s=i.top+i.bottom,a=pc(r.width),u=pc(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=iw(r,"left","right")+o),Math.round(u+s)!==n&&(u-=iw(r,"top","bottom")+s)),!W9(t)){var c=Math.round(a+o)-e,d=Math.round(u+s)-n;Math.abs(c)!==1&&(a-=c),Math.abs(d)!==1&&(u-=d)}return Th(i.left,i.top,a,u)}var H9=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof qo(t).SVGGraphicsElement}:function(t){return t instanceof qo(t).SVGElement&&typeof t.getBBox=="function"}}();function W9(t){return t===qo(t).document.documentElement}function q9(t){return Vp?H9(t)?z9(t):B9(t):vA}function K9(t){var e=t.x,n=t.y,r=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return yA(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function Th(t,e,n,r){return{x:t,y:e,width:n,height:r}}var G9=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Th(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=q9(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),Q9=function(){function t(e,n){var r=K9(n);yA(this,{target:e,contentRect:r})}return t}(),Y9=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new gA,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof qo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new G9(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof qo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Q9(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),_A=typeof WeakMap<"u"?new WeakMap:new gA,wA=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=U9.getInstance(),r=new Y9(e,n,this);_A.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){wA.prototype[t]=function(){var e;return(e=_A.get(this))[t].apply(e,arguments)}});var X9=function(){return typeof fc.ResizeObserver<"u"?fc.ResizeObserver:wA}();const J9=Object.freeze(Object.defineProperty({__proto__:null,default:X9},Symbol.toStringTag,{value:"Module"})),Z9=nP(J9);Object.defineProperty(_h,"__esModule",{value:!0});_h.InnerSlider=void 0;var At=Ha(Ge),ej=Ha(WI),tj=Ha(WV),nj=Ha(wh),Le=W,rj=Eh,ij=Sh,ow=Ho,oj=Ha(Z9);function Ha(t){return t&&t.__esModule?t:{default:t}}function Ni(t){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(t)}function mc(){return mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mc.apply(this,arguments)}function sj(t,e){if(t==null)return{};var n=aj(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function aj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sw(Object(n),!0).forEach(function(r){ae(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lj(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uj(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,SA(r.key),r)}}function cj(t,e,n){return e&&uj(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function hj(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&jp(t,e)}function jp(t,e){return jp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},jp(t,e)}function dj(t){var e=EA();return function(){var r=gc(t),i;if(e){var o=gc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fj(this,i)}}function fj(t,e){if(e&&(Ni(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return se(t)}function se(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function EA(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EA=function(){return!!t})()}function gc(t){return gc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},gc(t)}function ae(t,e,n){return e=SA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function SA(t){var e=pj(t,"string");return Ni(e)=="symbol"?e:String(e)}function pj(t,e){if(Ni(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}_h.InnerSlider=function(t){hj(n,t);var e=dj(n);function n(r){var i;lj(this,n),i=e.call(this,r),ae(se(i),"listRefHandler",function(s){return i.list=s}),ae(se(i),"trackRefHandler",function(s){return i.track=s}),ae(se(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Le.getHeight)(s)+"px"}}),ae(se(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,Le.getOnDemandLazySlides)(Z(Z({},i.props),i.state));s.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new oj.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ae(se(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ae(se(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Le.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(s);c&&i.updateState(u,c,function(){i.state.currentSlide>=At.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:At.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ae(se(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,tj.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),ae(se(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var u=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ae(se(i),"updateState",function(s,a,u){var c=(0,Le.initializedState)(s);s=Z(Z(Z({},s),c),{},{slideIndex:c.currentSlide});var d=(0,Le.getTrackLeft)(s);s=Z(Z({},s),{},{left:d});var p=(0,Le.getTrackCSS)(s);(a||At.default.Children.count(i.props.children)!==At.default.Children.count(s.children))&&(c.trackStyle=p),i.setState(c,u)}),ae(se(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,u=[],c=(0,Le.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,Le.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(v){u.push(v.props.style.width),s+=v.props.style.width});for(var p=0;p<c;p++)a+=u[u.length-1-p],s+=u[u.length-1-p];for(var m=0;m<d;m++)s+=u[m];for(var T=0;T<i.state.currentSlide;T++)a+=u[T];var A={width:s+"px",left:-a+"px"};if(i.props.centerMode){var R="".concat(u[i.state.currentSlide],"px");A.left="calc(".concat(A.left," + (100% - ").concat(R,") / 2 ) ")}return{trackStyle:A}}var b=At.default.Children.count(i.props.children),I=Z(Z(Z({},i.props),i.state),{},{slideCount:b}),y=(0,Le.getPreClones)(I)+(0,Le.getPostClones)(I)+b,S=100/i.props.slidesToShow*y,k=100/y,N=-k*((0,Le.getPreClones)(I)+i.state.currentSlide)*S/100;i.props.centerMode&&(N+=(100-k*S/100)/2);var O={width:S+"%",left:N+"%"};return{slideWidth:k+"%",trackStyle:O}}),ae(se(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,u=0;Array.prototype.forEach.call(s,function(c){var d=function(){return++u&&u>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var p=c.onclick;c.onclick=function(m){p(m),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=d,c.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ae(se(i),"progressiveLazyLoad",function(){for(var s=[],a=Z(Z({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,Le.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,Le.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){s.push(c);break}s.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ae(se(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,d=u.beforeChange,p=u.onLazyLoad,m=u.speed,T=u.afterChange,A=i.state.currentSlide,R=(0,Le.slideHandler)(Z(Z(Z({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),b=R.state,I=R.nextState;if(b){d&&d(A,b.currentSlide);var y=b.lazyLoadedList.filter(function(S){return i.state.lazyLoadedList.indexOf(S)<0});p&&y.length>0&&p(y),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),T&&T(A),delete i.animationEndCallback),i.setState(b,function(){c&&i.asNavForIndex!==s&&(i.asNavForIndex=s,c.innerSlider.slideHandler(s)),I&&(i.animationEndCallback=setTimeout(function(){var S=I.animating,k=sj(I,["animating"]);i.setState(k,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:S})},10)),T&&T(b.currentSlide),delete i.animationEndCallback})},m))})}}),ae(se(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=Z(Z({},i.props),i.state),c=(0,Le.changeSlide)(u,s);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),ae(se(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),ae(se(i),"keyHandler",function(s){var a=(0,Le.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ae(se(i),"selectHandler",function(s){i.changeSlide(s)}),ae(se(i),"disableBodyScroll",function(){var s=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=s}),ae(se(i),"enableBodyScroll",function(){window.ontouchmove=null}),ae(se(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Le.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ae(se(i),"swipeMove",function(s){var a=(0,Le.swipeMove)(s,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ae(se(i),"swipeEnd",function(s){var a=(0,Le.swipeEnd)(s,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),ae(se(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),ae(se(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ae(se(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ae(se(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),ae(se(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,Le.canGoNext)(Z(Z({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),ae(se(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ae(se(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ae(se(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ae(se(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ae(se(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ae(se(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ae(se(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ae(se(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ae(se(i),"render",function(){var s=(0,nj.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),u=(0,Le.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=Z(Z({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var p=(0,Le.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),m=i.props.pauseOnDotsHover;p=Z(Z({},p),{},{clickHandler:i.changeSlide,onMouseEnter:m?i.onDotsLeave:null,onMouseOver:m?i.onDotsOver:null,onMouseLeave:m?i.onDotsLeave:null}),d=At.default.createElement(ij.Dots,p)}var T,A,R=(0,Le.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);R.clickHandler=i.changeSlide,i.props.arrows&&(T=At.default.createElement(ow.PrevArrow,R),A=At.default.createElement(ow.NextArrow,R));var b=null;i.props.vertical&&(b={height:i.state.listHeight});var I=null;i.props.vertical===!1?i.props.centerMode===!0&&(I={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(I={padding:i.props.centerPadding+" 0px"});var y=Z(Z({},b),I),S=i.props.touchMove,k={className:"slick-list",style:y,onClick:i.clickHandler,onMouseDown:S?i.swipeStart:null,onMouseMove:i.state.dragging&&S?i.swipeMove:null,onMouseUp:S?i.swipeEnd:null,onMouseLeave:i.state.dragging&&S?i.swipeEnd:null,onTouchStart:S?i.swipeStart:null,onTouchMove:i.state.dragging&&S?i.swipeMove:null,onTouchEnd:S?i.touchEnd:null,onTouchCancel:i.state.dragging&&S?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},N={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(k={className:"slick-list"},N={className:s}),At.default.createElement("div",N,i.props.unslick?"":T,At.default.createElement("div",mc({ref:i.listRefHandler},k),At.default.createElement(rj.Track,mc({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":A,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Z(Z({},ej.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:At.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return cj(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var u=a[s];if(!i.hasOwnProperty(u)){o=!0;break}if(!(Ni(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){o=!0;break}}return o||At.default.Children.count(this.props.children)!==At.default.Children.count(i.children)}}]),n}(At.default.Component);var mj=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},gj=mj,yj=gj,vj=function(t){var e=/[height|width]$/;return e.test(t)},aw=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var o=t[r];r=yj(r),vj(r)&&typeof o=="number"&&(o=o+"px"),o===!0?e+=r:o===!1?e+="not "+r:e+="("+r+": "+o+")",i<n.length-1&&(e+=" and ")}),e},_j=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=aw(n),r<t.length-1&&(e+=", ")}),e):aw(t)},wj=_j,Gd,lw;function Ej(){if(lw)return Gd;lw=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Gd=t,Gd}var Qd,uw;function TA(){if(uw)return Qd;uw=1;function t(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Qd={isFunction:n,isArray:e,each:t},Qd}var Yd,cw;function Sj(){if(cw)return Yd;cw=1;var t=Ej(),e=TA().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Yd=n,Yd}var Xd,hw;function Tj(){if(hw)return Xd;hw=1;var t=Sj(),e=TA(),n=e.each,r=e.isFunction,i=e.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,u){var c=this.queries,d=u&&this.browserIsIncapable;return c[s]||(c[s]=new t(s,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(p){r(p)&&(p={match:p}),c[s].addHandler(p)}),this},unregister:function(s,a){var u=this.queries[s];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[s])),this}},Xd=o,Xd}var Jd,dw;function Ij(){if(dw)return Jd;dw=1;var t=Tj();return Jd=new t,Jd}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=s(Ge),n=_h,r=s(wj),i=s(jg),o=W;function s(_){return _&&_.__esModule?_:{default:_}}function a(_){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},a(_)}function u(){return u=Object.assign?Object.assign.bind():function(_){for(var E=1;E<arguments.length;E++){var C=arguments[E];for(var x in C)Object.prototype.hasOwnProperty.call(C,x)&&(_[x]=C[x])}return _},u.apply(this,arguments)}function c(_,E){var C=Object.keys(_);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(_);E&&(x=x.filter(function(P){return Object.getOwnPropertyDescriptor(_,P).enumerable})),C.push.apply(C,x)}return C}function d(_){for(var E=1;E<arguments.length;E++){var C=arguments[E]!=null?arguments[E]:{};E%2?c(Object(C),!0).forEach(function(x){N(_,x,C[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(C)):c(Object(C)).forEach(function(x){Object.defineProperty(_,x,Object.getOwnPropertyDescriptor(C,x))})}return _}function p(_,E){if(!(_ instanceof E))throw new TypeError("Cannot call a class as a function")}function m(_,E){for(var C=0;C<E.length;C++){var x=E[C];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(_,O(x.key),x)}}function T(_,E,C){return E&&m(_.prototype,E),Object.defineProperty(_,"prototype",{writable:!1}),_}function A(_,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(E&&E.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),E&&R(_,E)}function R(_,E){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,P){return x.__proto__=P,x},R(_,E)}function b(_){var E=S();return function(){var x=k(_),P;if(E){var q=k(this).constructor;P=Reflect.construct(x,arguments,q)}else P=x.apply(this,arguments);return I(this,P)}}function I(_,E){if(E&&(a(E)==="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(_)}function y(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function S(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(S=function(){return!!_})()}function k(_){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(C){return C.__proto__||Object.getPrototypeOf(C)},k(_)}function N(_,E,C){return E=O(E),E in _?Object.defineProperty(_,E,{value:C,enumerable:!0,configurable:!0,writable:!0}):_[E]=C,_}function O(_){var E=v(_,"string");return a(E)=="symbol"?E:String(E)}function v(_,E){if(a(_)!="object"||!_)return _;var C=_[Symbol.toPrimitive];if(C!==void 0){var x=C.call(_,E||"default");if(a(x)!="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(_)}var g=(0,o.canUseDOM)()&&Ij();t.default=function(_){A(C,_);var E=b(C);function C(x){var P;return p(this,C),P=E.call(this,x),N(y(P),"innerSliderRefHandler",function(q){return P.innerSlider=q}),N(y(P),"slickPrev",function(){return P.innerSlider.slickPrev()}),N(y(P),"slickNext",function(){return P.innerSlider.slickNext()}),N(y(P),"slickGoTo",function(q){var de=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return P.innerSlider.slickGoTo(q,de)}),N(y(P),"slickPause",function(){return P.innerSlider.pause("paused")}),N(y(P),"slickPlay",function(){return P.innerSlider.autoPlay("play")}),P.state={breakpoint:null},P._responsiveMediaHandlers=[],P}return T(C,[{key:"media",value:function(P,q){g.register(P,q),this._responsiveMediaHandlers.push({query:P,handler:q})}},{key:"componentDidMount",value:function(){var P=this;if(this.props.responsive){var q=this.props.responsive.map(function(ve){return ve.breakpoint});q.sort(function(ve,Te){return ve-Te}),q.forEach(function(ve,Te){var U;Te===0?U=(0,r.default)({minWidth:0,maxWidth:ve}):U=(0,r.default)({minWidth:q[Te-1]+1,maxWidth:ve}),(0,o.canUseDOM)()&&P.media(U,function(){P.setState({breakpoint:ve})})});var de=(0,r.default)({minWidth:q.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(de,function(){P.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(P){g.unregister(P.query,P.handler)})}},{key:"render",value:function(){var P=this,q,de;this.state.breakpoint?(de=this.props.responsive.filter(function(ce){return ce.breakpoint===P.state.breakpoint}),q=de[0].settings==="unslick"?"unslick":d(d(d({},i.default),this.props),de[0].settings)):q=d(d({},i.default),this.props),q.centerMode&&(q.slidesToScroll>1,q.slidesToScroll=1),q.fade&&(q.slidesToShow>1,q.slidesToScroll>1,q.slidesToShow=1,q.slidesToScroll=1);var ve=e.default.Children.toArray(this.props.children);ve=ve.filter(function(ce){return typeof ce=="string"?!!ce.trim():!!ce}),q.variableWidth&&(q.rows>1||q.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),q.variableWidth=!1);for(var Te=[],U=null,V=0;V<ve.length;V+=q.rows*q.slidesPerRow){for(var j=[],K=V;K<V+q.rows*q.slidesPerRow;K+=q.slidesPerRow){for(var H=[],Y=K;Y<K+q.slidesPerRow&&(q.variableWidth&&ve[Y].props.style&&(U=ve[Y].props.style.width),!(Y>=ve.length));Y+=1)H.push(e.default.cloneElement(ve[Y],{key:100*V+10*K+Y,tabIndex:-1,style:{width:"".concat(100/q.slidesPerRow,"%"),display:"inline-block"}}));j.push(e.default.createElement("div",{key:10*V+K},H))}q.variableWidth?Te.push(e.default.createElement("div",{key:V,style:{width:U}},j)):Te.push(e.default.createElement("div",{key:V},j))}if(q==="unslick"){var ge="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:ge},ve)}else Te.length<=q.slidesToShow&&!q.infinite&&(q.unslick=!0);return e.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(q)),Te)}}]),C}(e.default.Component)})(HI);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(HI);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(BI);const Aj=yc(BI),Pj="/assets/slider-badging-B_f5mnsA.jpg",Cj="/assets/slider-scale-DVc6_nL6.jpg",Rj="/assets/slider-badag-BeQkE4KY.jpg",kj="/assets/slider-scales-sHX16b4f.jpg",xj=t=>{let e={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0};return M.jsxs(bj,{...e,children:[M.jsx(Ml,{children:M.jsx("a",{children:M.jsx("img",{src:Pj,alt:""})})}),M.jsx(Ml,{children:M.jsx("a",{children:M.jsx("img",{src:Cj,alt:""})})}),M.jsx(Ml,{children:M.jsx("a",{children:M.jsx("img",{src:Rj,alt:""})})}),M.jsx(Ml,{children:M.jsx("a",{children:M.jsx("img",{src:kj,alt:""})})})]})},bj=te(Aj)`
  margin-top: 20px;
  height: 80vh;  /* Make the carousel take the full viewport height */

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`,Ml=te.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  height: 80vh;  /* Ensure each slide takes the full viewport height */

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    height: 100%;  /* Ensure the anchor takes the full height of the slide */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;  /* Ensure the image covers the entire area */
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`,Oj="/assets/viewers-disney-C-_yHi1P.png",Nj="/assets/viewers-pixar-CNd96nol.png",Dj="/assets/viewers-marvel-BT7h2rxj.png",Lj="/assets/viewers-starwars-qwRXo9K1.png",Mj="/assets/viewers-national-DOWXQ-9J.png",Vj="/assets/1564674844-disney-M4ZtQSQC.mp4",jj="/assets/1564676714-pixar-BJZJvJbN.mp4",Fj="/assets/1564676115-marvel-BtqWNf4R.mp4",Uj="/assets/1608229455-star-wars-DyAi_XCg.mp4",$j="/assets/1564676296-national-geographic-B_wq4-F4.mp4",zj=t=>M.jsxs(Bj,{children:[M.jsxs(Ps,{children:[M.jsx("img",{src:Oj,alt:""}),M.jsx("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:M.jsx("source",{src:Vj,type:"video/mp4"})})]}),M.jsxs(Ps,{children:[M.jsx("img",{src:Nj,alt:""}),M.jsx("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:M.jsx("source",{src:jj,type:"video/mp4"})})]}),M.jsxs(Ps,{children:[M.jsx("img",{src:Dj,alt:""}),M.jsx("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:M.jsx("source",{src:Fj,type:"video/mp4"})})]}),M.jsxs(Ps,{children:[M.jsx("img",{src:Lj,alt:""}),M.jsx("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:M.jsx("source",{src:Uj,type:"video/mp4"})})]}),M.jsxs(Ps,{children:[M.jsx("img",{src:Mj,alt:""}),M.jsx("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:M.jsx("source",{src:$j,type:"video/mp4"})})]})]}),Bj=te.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`,Ps=te.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`,Hj={recommend:null,newDisney:null,original:null,trending:null},IA=jI({name:"movie",initialState:Hj,reducers:{setMovies:(t,e)=>{t.recommend=e.payload.recommend,t.newDisney=e.payload.newDisney,t.original=e.payload.original,t.trending=e.payload.trending}}}),{setMovies:Wj}=IA.actions,qj=t=>t.movie.recommend,Kj=t=>t.movie.newDisney,Gj=t=>t.movie.original,Qj=t=>t.movie.trending,Yj=IA.reducer,Xj=()=>{const t=Ii(qj);return M.jsxs(Jj,{children:[M.jsx("h4",{children:"Recommended for You"}),M.jsx(Zj,{children:t&&t.map((e,n)=>M.jsx(e3,{children:M.jsx(Na,{to:`/detail/${e.id}`,children:M.jsx("img",{src:e.cardImg,alt:e.title})})},n))})]})},Jj=te.div`
  padding: 0 0 26px;
`,Zj=te.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,e3=te.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`,t3=()=>{const t=Ii(Kj);return M.jsxs(n3,{children:[M.jsx("h4",{children:"New to Disney+"}),M.jsx(r3,{children:t&&t.map((e,n)=>M.jsxs(i3,{children:[e.id,M.jsx(Na,{to:"/detail/"+e.id,children:M.jsx("img",{src:e.cardImg,alt:e.title})})]},n))})]})},n3=te.div`
  padding: 0 0 26px;
`,r3=te.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,i3=te.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`,o3=()=>{const t=Ii(Qj);return M.jsxs(s3,{children:[M.jsx("h4",{children:"Trending"}),M.jsx(a3,{children:t&&t.map((e,n)=>M.jsxs(l3,{children:[e.id,M.jsx(Na,{to:"/detail/"+e.id,children:M.jsx("img",{src:e.cardImg,alt:e.title})})]},n))})]})},s3=te.div`
  padding: 0 0 26px;
`,a3=te.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,l3=te.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`,u3=()=>{const t=Ii(Gj);return M.jsxs(c3,{children:[M.jsx("h4",{children:"Originals"}),M.jsx(h3,{children:t&&t.map((e,n)=>M.jsxs(d3,{children:[e.id,M.jsx(Na,{to:`/detail/${e.id}`,children:M.jsx("img",{src:e.cardImg,alt:e.title})})]},n))})]})},c3=te.div`
  padding: 0 0 26px;
`,h3=te.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,d3=te.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`,f3=()=>{const t=bE(),e=Ii(UI);return Ge.useEffect(()=>{(async()=>{let r=[],i=[],o=[],s=[];(await LM(SM(TI,"movies"))).forEach(u=>{switch(u.data().type){case"recommend":r.push({id:u.id,...u.data()});break;case"new":i.push({id:u.id,...u.data()});break;case"original":o.push({id:u.id,...u.data()});break;case"trending":s.push({id:u.id,...u.data()});break}}),t(Wj({recommend:r,newDisney:i,original:o,trending:s}))})()},[e,t]),M.jsxs(p3,{children:[M.jsx(xj,{}),M.jsx(zj,{}),M.jsx(Xj,{}),M.jsx(t3,{}),M.jsx(u3,{}),M.jsx(o3,{})]})},p3=te.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${CV}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`,m3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbeq9RgAAACV0Uk5TAFhqMqr/+o0f8eh6DdVnwlSvQpwv94oc5HcJ0knbQN8MTu9gcy+KIuoAAAB/SURBVHic7dO5EoJAFETRQbkuqKCyKS4g8P/fCJRVJlK8DogsOz7BTE+Pc/984i2WpvFhtd4YaEufYLefRLxzCAUE0VFAcDoLCOJEQKRZbiO4XAsbwe0uIB5fpY0gngIqK+FMrzlup/QkNC68nbCC6T3VA7GWKW3cNa39W34yHdTNCNmD8G7+AAAAAElFTkSuQmCC",g3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////53h4sAAAABh0Uk5TAHB/IKD/nxDv31+/QK+PMPDA4FCAkLBgyXZ3BwAAAH1JREFUeJztk0cOgDAQA2mG0CG0//8UEIi+eM+IOY8i20kc52fD9XzqBADCiEiYMd67hoU4UUhAmikkIBcb4EghRDtJUwOFJDS4SlODUiHB3JI9SLiN8eBUipNqnsk2tF3V8p06vnjP767mr8AOsrJKQt6N4CXvztDy3/JJRk2aBxl9uYRmAAAAAElFTkSuQmCC",y3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////g5kLBwAAABl0Uk5TAEBfIM//YLDvMK+/f4AQ8FDAkOCgj5/QcDW7ekAAAADmSURBVHic7ZJbEoMgDEVDMVSkgFr62P9KmxA71VDHBbT3Byc53jwA4K9G5mSPENshojuAzsRgv+flh3ChA6vIKobBayb1lIsAuUIjRDZMul3OTQAzn9cEE59GV+PgmRwLMX7pralHySzB2rWnuqXt3Dhuwd9CuHEZ63QxkhuCW1pCvAOMYTjp4WSHDhfNdZJuOx5PjAmubwht/Y4b6EGRh4z4XidX7jaQbMl8oCjmDTRLXFTgqSGz+lm02K7XkPagzXjuO6Qeli9ZQ7k0d8d3ZvNqOv1OPn6TIHneI8TOjE/z5Wp/XS9CsgorDgtVbAAAAABJRU5ErkJggg==",v3=()=>{const{id:t}=Gk(),[e,n]=Ge.useState({});return Ge.useEffect(()=>{t&&(async()=>{try{const i=TM(TI,"movies",t),o=await DM(i);o.exists()?n(o.data()):console.log("No such document in Firebase 🔥")}catch(i){console.error("Error getting document:",i)}})()},[t]),M.jsxs(_3,{children:[e.backgroundImg&&M.jsx(w3,{children:M.jsx("img",{alt:e.title,src:e.backgroundImg})}),e.titleImg&&M.jsx(E3,{children:M.jsx("img",{alt:e.title,src:e.titleImg})}),M.jsxs(S3,{children:[M.jsxs(T3,{children:[M.jsxs(AA,{children:[M.jsx("img",{src:m3,alt:""}),M.jsx("span",{children:"Play"})]}),M.jsxs(I3,{children:[M.jsx("img",{src:g3,alt:""}),M.jsx("span",{children:"Trailer"})]}),M.jsxs(A3,{children:[M.jsx("span",{}),M.jsx("span",{})]}),M.jsx(P3,{children:M.jsx("div",{children:M.jsx("img",{src:y3,alt:""})})})]}),M.jsx(C3,{children:e.subTitle}),M.jsx(R3,{children:e.description})]})]})},_3=te.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`,w3=te.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`,E3=te.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`,S3=te.div`
  max-width: 874px;
`,T3=te.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`,AA=te.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`,I3=te(AA)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`,A3=te.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`,P3=te.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`,C3=te.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`,R3=te.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;function k3(){return M.jsx("div",{className:"App",children:M.jsxs(Qk,{children:[M.jsx(EV,{}),M.jsxs(qk,{children:[M.jsx(Ed,{exact:!0,path:"/",children:M.jsx(ib,{})}),M.jsx(Ed,{path:"/home",children:M.jsx(f3,{})}),M.jsx(Ed,{path:"/detail/:id",children:M.jsx(v3,{})})]})]})})}const x3=X4({reducer:{user:wV,movie:Yj},middleware:t=>t({serializableCheck:!1})});AE(document.getElementById("root")).render(M.jsx(oe.StrictMode,{children:M.jsx(QR,{store:x3,children:M.jsx(k3,{})})}));
