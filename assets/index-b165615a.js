var jC=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var eF=jC(Qs=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function YC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rS={exports:{}},Tf={},sS={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),$C=Symbol.for("react.portal"),KC=Symbol.for("react.fragment"),ZC=Symbol.for("react.strict_mode"),QC=Symbol.for("react.profiler"),JC=Symbol.for("react.provider"),e2=Symbol.for("react.context"),t2=Symbol.for("react.forward_ref"),n2=Symbol.for("react.suspense"),i2=Symbol.for("react.memo"),r2=Symbol.for("react.lazy"),Rv=Symbol.iterator;function s2(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var oS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aS=Object.assign,lS={};function za(t,e,n){this.props=t,this.context=e,this.refs=lS,this.updater=n||oS}za.prototype.isReactComponent={};za.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uS(){}uS.prototype=za.prototype;function um(t,e,n){this.props=t,this.context=e,this.refs=lS,this.updater=n||oS}var cm=um.prototype=new uS;cm.constructor=um;aS(cm,za.prototype);cm.isPureReactComponent=!0;var Cv=Array.isArray,cS=Object.prototype.hasOwnProperty,fm={current:null},fS={key:!0,ref:!0,__self:!0,__source:!0};function dS(t,e,n){var i,s={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)cS.call(e,i)&&!fS.hasOwnProperty(i)&&(s[i]=e[i]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];s.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)s[i]===void 0&&(s[i]=u[i]);return{$$typeof:tu,type:t,key:o,ref:l,props:s,_owner:fm.current}}function o2(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dm(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function a2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lv=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a2(""+t.key):e.toString(36)}function Oc(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case tu:case $C:l=!0}}if(l)return l=t,s=s(l),t=i===""?"."+ih(l,0):i,Cv(s)?(n="",t!=null&&(n=t.replace(Lv,"$&/")+"/"),Oc(s,e,n,"",function(d){return d})):s!=null&&(dm(s)&&(s=o2(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Lv,"$&/")+"/")+t)),e.push(s)),1;if(l=0,i=i===""?".":i+":",Cv(t))for(var u=0;u<t.length;u++){o=t[u];var f=i+ih(o,u);l+=Oc(o,e,n,f,s)}else if(f=s2(t),typeof f=="function")for(t=f.call(t),u=0;!(o=t.next()).done;)o=o.value,f=i+ih(o,u++),l+=Oc(o,e,n,f,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Qu(t,e,n){if(t==null)return t;var i=[],s=0;return Oc(t,i,"","",function(o){return e.call(n,o,s++)}),i}function l2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Hn={current:null},zc={transition:null},u2={ReactCurrentDispatcher:Hn,ReactCurrentBatchConfig:zc,ReactCurrentOwner:fm};pt.Children={map:Qu,forEach:function(t,e,n){Qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qu(t,function(){e++}),e},toArray:function(t){return Qu(t,function(e){return e})||[]},only:function(t){if(!dm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=za;pt.Fragment=KC;pt.Profiler=QC;pt.PureComponent=um;pt.StrictMode=ZC;pt.Suspense=n2;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u2;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=aS({},t.props),s=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=fm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)cS.call(e,f)&&!fS.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:tu,type:t.type,key:s,ref:o,props:i,_owner:l}};pt.createContext=function(t){return t={$$typeof:e2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JC,_context:t},t.Consumer=t};pt.createElement=dS;pt.createFactory=function(t){var e=dS.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:t2,render:t}};pt.isValidElement=dm;pt.lazy=function(t){return{$$typeof:r2,_payload:{_status:-1,_result:t},_init:l2}};pt.memo=function(t,e){return{$$typeof:i2,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=zc.transition;zc.transition={};try{t()}finally{zc.transition=e}};pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pt.useCallback=function(t,e){return Hn.current.useCallback(t,e)};pt.useContext=function(t){return Hn.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return Hn.current.useDeferredValue(t)};pt.useEffect=function(t,e){return Hn.current.useEffect(t,e)};pt.useId=function(){return Hn.current.useId()};pt.useImperativeHandle=function(t,e,n){return Hn.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return Hn.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return Hn.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return Hn.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return Hn.current.useReducer(t,e,n)};pt.useRef=function(t){return Hn.current.useRef(t)};pt.useState=function(t){return Hn.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return Hn.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return Hn.current.useTransition()};pt.version="18.2.0";sS.exports=pt;var Pt=sS.exports;const c2=YC(Pt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f2=Pt,d2=Symbol.for("react.element"),h2=Symbol.for("react.fragment"),p2=Object.prototype.hasOwnProperty,m2=f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g2={key:!0,ref:!0,__self:!0,__source:!0};function hS(t,e,n){var i,s={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)p2.call(e,i)&&!g2.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:d2,type:t,key:o,ref:l,props:s,_owner:m2.current}}Tf.Fragment=h2;Tf.jsx=hS;Tf.jsxs=hS;rS.exports=Tf;var pe=rS.exports,sp={},pS={exports:{}},vi={},mS={exports:{}},gS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,te){var Y=B.length;B.push(te);e:for(;0<Y;){var V=Y-1>>>1,$=B[V];if(0<s($,te))B[V]=te,B[Y]=$,Y=V;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var te=B[0],Y=B.pop();if(Y!==te){B[0]=Y;e:for(var V=0,$=B.length,ye=$>>>1;V<ye;){var xe=2*(V+1)-1,Me=B[xe],De=xe+1,qe=B[De];if(0>s(Me,Y))De<$&&0>s(qe,Me)?(B[V]=qe,B[De]=Y,V=De):(B[V]=Me,B[xe]=Y,V=xe);else if(De<$&&0>s(qe,Y))B[V]=qe,B[De]=Y,V=De;else break e}}return te}function s(B,te){var Y=B.sortIndex-te.sortIndex;return Y!==0?Y:B.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],p=1,g=null,_=3,x=!1,E=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var te=n(d);te!==null;){if(te.callback===null)i(d);else if(te.startTime<=B)i(d),te.sortIndex=te.expirationTime,e(f,te);else break;te=n(d)}}function w(B){if(T=!1,S(B),!E)if(n(f)!==null)E=!0,fe(P);else{var te=n(d);te!==null&&ee(w,te.startTime-B)}}function P(B,te){E=!1,T&&(T=!1,h(H),H=-1),x=!0;var Y=_;try{for(S(te),g=n(f);g!==null&&(!(g.expirationTime>te)||B&&!oe());){var V=g.callback;if(typeof V=="function"){g.callback=null,_=g.priorityLevel;var $=V(g.expirationTime<=te);te=t.unstable_now(),typeof $=="function"?g.callback=$:g===n(f)&&i(f),S(te)}else i(f);g=n(f)}if(g!==null)var ye=!0;else{var xe=n(d);xe!==null&&ee(w,xe.startTime-te),ye=!1}return ye}finally{g=null,_=Y,x=!1}}var I=!1,D=null,H=-1,C=5,U=-1;function oe(){return!(t.unstable_now()-U<C)}function de(){if(D!==null){var B=t.unstable_now();U=B;var te=!0;try{te=D(!0,B)}finally{te?j():(I=!1,D=null)}}else I=!1}var j;if(typeof y=="function")j=function(){y(de)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ie=J.port2;J.port1.onmessage=de,j=function(){ie.postMessage(null)}}else j=function(){v(de,0)};function fe(B){D=B,I||(I=!0,j())}function ee(B,te){H=v(function(){B(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){E||x||(E=!0,fe(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var Y=_;_=te;try{return B()}finally{_=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,te){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=_;_=B;try{return te()}finally{_=Y}},t.unstable_scheduleCallback=function(B,te,Y){var V=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?V+Y:V):Y=V,B){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Y+$,B={id:p++,callback:te,priorityLevel:B,startTime:Y,expirationTime:$,sortIndex:-1},Y>V?(B.sortIndex=Y,e(d,B),n(f)===null&&B===n(d)&&(T?(h(H),H=-1):T=!0,ee(w,Y-V))):(B.sortIndex=$,e(f,B),E||x||(E=!0,fe(P))),B},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(B){var te=_;return function(){var Y=_;_=te;try{return B.apply(this,arguments)}finally{_=Y}}}})(gS);mS.exports=gS;var _2=mS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=Pt,_i=_2;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vS=new Set,Fl={};function vo(t,e){Ra(t,e),Ra(t+"Capture",e)}function Ra(t,e){for(Fl[t]=e,t=0;t<e.length;t++)vS.add(e[t])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=Object.prototype.hasOwnProperty,v2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pv={},bv={};function x2(t){return op.call(bv,t)?!0:op.call(Pv,t)?!1:v2.test(t)?bv[t]=!0:(Pv[t]=!0,!1)}function S2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y2(t,e,n,i){if(e===null||typeof e>"u"||S2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gn(t,e,n,i,s,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new Gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new Gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new Gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new Gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new Gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new Gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new Gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new Gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new Gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hm=/[\-:]([a-z])/g;function pm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hm,pm);Tn[e]=new Gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hm,pm);Tn[e]=new Gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hm,pm);Tn[e]=new Gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mm(t,e,n,i){var s=Tn.hasOwnProperty(e)?Tn[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y2(e,n,s,i)&&(n=null),i||s===null?x2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yr=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),ra=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),xS=Symbol.for("react.provider"),SS=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),vm=Symbol.for("react.memo"),cs=Symbol.for("react.lazy"),yS=Symbol.for("react.offscreen"),Uv=Symbol.iterator;function ul(t){return t===null||typeof t!="object"?null:(t=Uv&&t[Uv]||t["@@iterator"],typeof t=="function"?t:null)}var qt=Object.assign,rh;function yl(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var sh=!1;function oh(t,e){if(!t||sh)return"";sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),l=s.length-1,u=o.length-1;1<=l&&0<=u&&s[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==o[u]){var f=`
`+s[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yl(t):""}function M2(t){switch(t.tag){case 5:return yl(t.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return t=oh(t.type,!1),t;case 11:return t=oh(t.type.render,!1),t;case 1:return t=oh(t.type,!0),t;default:return""}}function cp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sa:return"Fragment";case ra:return"Portal";case ap:return"Profiler";case gm:return"StrictMode";case lp:return"Suspense";case up:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case SS:return(t.displayName||"Context")+".Consumer";case xS:return(t._context.displayName||"Context")+".Provider";case _m:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vm:return e=t.displayName||null,e!==null?e:cp(t.type)||"Memo";case cs:e=t._payload,t=t._init;try{return cp(t(e))}catch{}}return null}function E2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cp(e);case 8:return e===gm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function MS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T2(t){var e=MS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=T2(t))}function ES(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=MS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fp(t,e){var n=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TS(t,e){e=e.checked,e!=null&&mm(t,"checked",e,!1)}function dp(t,e){TS(t,e);var n=Cs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hp(t,e.type,n):e.hasOwnProperty("defaultValue")&&hp(t,e.type,Cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Iv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hp(t,e,n){(e!=="number"||Kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ml=Array.isArray;function va(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function pp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(Ml(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cs(n)}}function wS(t,e){var n=Cs(e.value),i=Cs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function AS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?AS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,RS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w2=["Webkit","ms","Moz","O"];Object.keys(Al).forEach(function(t){w2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Al[e]=Al[t]})});function CS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Al.hasOwnProperty(t)&&Al[t]?(""+e).trim():e+"px"}function LS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=CS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var A2=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gp(t,e){if(e){if(A2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function _p(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=null;function xm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xp=null,xa=null,Sa=null;function Ov(t){if(t=ru(t)){if(typeof xp!="function")throw Error(me(280));var e=t.stateNode;e&&(e=Lf(e),xp(t.stateNode,t.type,e))}}function PS(t){xa?Sa?Sa.push(t):Sa=[t]:xa=t}function bS(){if(xa){var t=xa,e=Sa;if(Sa=xa=null,Ov(t),e)for(t=0;t<e.length;t++)Ov(e[t])}}function US(t,e){return t(e)}function DS(){}var ah=!1;function IS(t,e,n){if(ah)return t(e,n);ah=!0;try{return US(t,e,n)}finally{ah=!1,(xa!==null||Sa!==null)&&(DS(),bS())}}function zl(t,e){var n=t.stateNode;if(n===null)return null;var i=Lf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var Sp=!1;if(Vr)try{var cl={};Object.defineProperty(cl,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{Sp=!1}function R2(t,e,n,i,s,o,l,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Rl=!1,Zc=null,Qc=!1,yp=null,C2={onError:function(t){Rl=!0,Zc=t}};function L2(t,e,n,i,s,o,l,u,f){Rl=!1,Zc=null,R2.apply(C2,arguments)}function P2(t,e,n,i,s,o,l,u,f){if(L2.apply(this,arguments),Rl){if(Rl){var d=Zc;Rl=!1,Zc=null}else throw Error(me(198));Qc||(Qc=!0,yp=d)}}function xo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(xo(t)!==t)throw Error(me(188))}function b2(t){var e=t.alternate;if(!e){if(e=xo(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return zv(s),t;if(o===i)return zv(s),e;o=o.sibling}throw Error(me(188))}if(n.return!==i.return)n=s,i=o;else{for(var l=!1,u=s.child;u;){if(u===n){l=!0,n=s,i=o;break}if(u===i){l=!0,i=s,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,i=s;break}if(u===i){l=!0,i=o,n=s;break}u=u.sibling}if(!l)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function FS(t){return t=b2(t),t!==null?OS(t):null}function OS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=OS(t);if(e!==null)return e;t=t.sibling}return null}var zS=_i.unstable_scheduleCallback,Bv=_i.unstable_cancelCallback,U2=_i.unstable_shouldYield,D2=_i.unstable_requestPaint,Qt=_i.unstable_now,I2=_i.unstable_getCurrentPriorityLevel,Sm=_i.unstable_ImmediatePriority,BS=_i.unstable_UserBlockingPriority,Jc=_i.unstable_NormalPriority,N2=_i.unstable_LowPriority,kS=_i.unstable_IdlePriority,wf=null,cr=null;function F2(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(wf,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:B2,O2=Math.log,z2=Math.LN2;function B2(t){return t>>>=0,t===0?32:31-(O2(t)/z2|0)|0}var nc=64,ic=4194304;function El(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ef(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~s;u!==0?i=El(u):(o&=l,o!==0&&(i=El(o)))}else l=n&~s,l!==0?i=El(l):o!==0&&(i=El(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-er(e),s=1<<n,i|=t[n],e&=~s;return i}function k2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-er(o),u=1<<l,f=s[l];f===-1?(!(u&n)||u&i)&&(s[l]=k2(u,e)):f<=e&&(t.expiredLanes|=u),o&=~u}}function Mp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HS(){var t=nc;return nc<<=1,!(nc&4194240)&&(nc=64),t}function lh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function G2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-er(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function ym(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-er(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var wt=0;function GS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var VS,Mm,WS,XS,qS,Ep=!1,rc=[],vs=null,xs=null,Ss=null,Bl=new Map,kl=new Map,ds=[],V2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(t,e){switch(t){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function fl(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=ru(e),e!==null&&Mm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function W2(t,e,n,i,s){switch(e){case"focusin":return vs=fl(vs,t,e,n,i,s),!0;case"dragenter":return xs=fl(xs,t,e,n,i,s),!0;case"mouseover":return Ss=fl(Ss,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return Bl.set(o,fl(Bl.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,kl.set(o,fl(kl.get(o)||null,t,e,n,i,s)),!0}return!1}function jS(t){var e=eo(t.target);if(e!==null){var n=xo(e);if(n!==null){if(e=n.tag,e===13){if(e=NS(n),e!==null){t.blockedOn=e,qS(t.priority,function(){WS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vp=i,n.target.dispatchEvent(i),vp=null}else return e=ru(n),e!==null&&Mm(e),t.blockedOn=n,!1;e.shift()}return!0}function Hv(t,e,n){Bc(t)&&n.delete(e)}function X2(){Ep=!1,vs!==null&&Bc(vs)&&(vs=null),xs!==null&&Bc(xs)&&(xs=null),Ss!==null&&Bc(Ss)&&(Ss=null),Bl.forEach(Hv),kl.forEach(Hv)}function dl(t,e){t.blockedOn===e&&(t.blockedOn=null,Ep||(Ep=!0,_i.unstable_scheduleCallback(_i.unstable_NormalPriority,X2)))}function Hl(t){function e(s){return dl(s,t)}if(0<rc.length){dl(rc[0],t);for(var n=1;n<rc.length;n++){var i=rc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vs!==null&&dl(vs,t),xs!==null&&dl(xs,t),Ss!==null&&dl(Ss,t),Bl.forEach(e),kl.forEach(e),n=0;n<ds.length;n++)i=ds[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ds.length&&(n=ds[0],n.blockedOn===null);)jS(n),n.blockedOn===null&&ds.shift()}var ya=Yr.ReactCurrentBatchConfig,tf=!0;function q2(t,e,n,i){var s=wt,o=ya.transition;ya.transition=null;try{wt=1,Em(t,e,n,i)}finally{wt=s,ya.transition=o}}function j2(t,e,n,i){var s=wt,o=ya.transition;ya.transition=null;try{wt=4,Em(t,e,n,i)}finally{wt=s,ya.transition=o}}function Em(t,e,n,i){if(tf){var s=Tp(t,e,n,i);if(s===null)vh(t,e,i,nf,n),kv(t,i);else if(W2(s,t,e,n,i))i.stopPropagation();else if(kv(t,i),e&4&&-1<V2.indexOf(t)){for(;s!==null;){var o=ru(s);if(o!==null&&VS(o),o=Tp(t,e,n,i),o===null&&vh(t,e,i,nf,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else vh(t,e,i,null,n)}}var nf=null;function Tp(t,e,n,i){if(nf=null,t=xm(i),t=eo(t),t!==null)if(e=xo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nf=t,null}function YS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I2()){case Sm:return 1;case BS:return 4;case Jc:case N2:return 16;case kS:return 536870912;default:return 16}default:return 16}}var ps=null,Tm=null,kc=null;function $S(){if(kc)return kc;var t,e=Tm,n=e.length,i,s="value"in ps?ps.value:ps.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===s[o-i];i++);return kc=s.slice(t,1<i?1-i:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function Gv(){return!1}function xi(t){function e(n,i,s,o,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sc:Gv,this.isPropagationStopped=Gv,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=xi(Ba),iu=qt({},Ba,{view:0,detail:0}),Y2=xi(iu),uh,ch,hl,Af=qt({},iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?(uh=t.screenX-hl.screenX,ch=t.screenY-hl.screenY):ch=uh=0,hl=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:ch}}),Vv=xi(Af),$2=qt({},Af,{dataTransfer:0}),K2=xi($2),Z2=qt({},iu,{relatedTarget:0}),fh=xi(Z2),Q2=qt({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),J2=xi(Q2),eL=qt({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tL=xi(eL),nL=qt({},Ba,{data:0}),Wv=xi(nL),iL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oL(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sL[t])?!!e[t]:!1}function Am(){return oL}var aL=qt({},iu,{key:function(t){if(t.key){var e=iL[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rL[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Am,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lL=xi(aL),uL=qt({},Af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xv=xi(uL),cL=qt({},iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Am}),fL=xi(cL),dL=qt({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),hL=xi(dL),pL=qt({},Af,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mL=xi(pL),gL=[9,13,27,32],Rm=Vr&&"CompositionEvent"in window,Cl=null;Vr&&"documentMode"in document&&(Cl=document.documentMode);var _L=Vr&&"TextEvent"in window&&!Cl,KS=Vr&&(!Rm||Cl&&8<Cl&&11>=Cl),qv=String.fromCharCode(32),jv=!1;function ZS(t,e){switch(t){case"keyup":return gL.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oa=!1;function vL(t,e){switch(t){case"compositionend":return QS(e);case"keypress":return e.which!==32?null:(jv=!0,qv);case"textInput":return t=e.data,t===qv&&jv?null:t;default:return null}}function xL(t,e){if(oa)return t==="compositionend"||!Rm&&ZS(t,e)?(t=$S(),kc=Tm=ps=null,oa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return KS&&e.locale!=="ko"?null:e.data;default:return null}}var SL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SL[t.type]:e==="textarea"}function JS(t,e,n,i){PS(i),e=rf(e,"onChange"),0<e.length&&(n=new wm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ll=null,Gl=null;function yL(t){cy(t,0)}function Rf(t){var e=ua(t);if(ES(e))return t}function ML(t,e){if(t==="change")return e}var ey=!1;if(Vr){var dh;if(Vr){var hh="oninput"in document;if(!hh){var $v=document.createElement("div");$v.setAttribute("oninput","return;"),hh=typeof $v.oninput=="function"}dh=hh}else dh=!1;ey=dh&&(!document.documentMode||9<document.documentMode)}function Kv(){Ll&&(Ll.detachEvent("onpropertychange",ty),Gl=Ll=null)}function ty(t){if(t.propertyName==="value"&&Rf(Gl)){var e=[];JS(e,Gl,t,xm(t)),IS(yL,e)}}function EL(t,e,n){t==="focusin"?(Kv(),Ll=e,Gl=n,Ll.attachEvent("onpropertychange",ty)):t==="focusout"&&Kv()}function TL(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rf(Gl)}function wL(t,e){if(t==="click")return Rf(e)}function AL(t,e){if(t==="input"||t==="change")return Rf(e)}function RL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:RL;function Vl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!op.call(e,s)||!nr(t[s],e[s]))return!1}return!0}function Zv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qv(t,e){var n=Zv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zv(n)}}function ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iy(){for(var t=window,e=Kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kc(t.document)}return e}function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CL(t){var e=iy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(i!==null&&Cm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=Qv(n,o);var l=Qv(n,i);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LL=Vr&&"documentMode"in document&&11>=document.documentMode,aa=null,wp=null,Pl=null,Ap=!1;function Jv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ap||aa==null||aa!==Kc(i)||(i=aa,"selectionStart"in i&&Cm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pl&&Vl(Pl,i)||(Pl=i,i=rf(wp,"onSelect"),0<i.length&&(e=new wm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=aa)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var la={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},ph={},ry={};Vr&&(ry=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Cf(t){if(ph[t])return ph[t];if(!la[t])return t;var e=la[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ry)return ph[t]=e[n];return t}var sy=Cf("animationend"),oy=Cf("animationiteration"),ay=Cf("animationstart"),ly=Cf("transitionend"),uy=new Map,e0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bs(t,e){uy.set(t,e),vo(e,[t])}for(var mh=0;mh<e0.length;mh++){var gh=e0[mh],PL=gh.toLowerCase(),bL=gh[0].toUpperCase()+gh.slice(1);bs(PL,"on"+bL)}bs(sy,"onAnimationEnd");bs(oy,"onAnimationIteration");bs(ay,"onAnimationStart");bs("dblclick","onDoubleClick");bs("focusin","onFocus");bs("focusout","onBlur");bs(ly,"onTransitionEnd");Ra("onMouseEnter",["mouseout","mouseover"]);Ra("onMouseLeave",["mouseout","mouseover"]);Ra("onPointerEnter",["pointerout","pointerover"]);Ra("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UL=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tl));function t0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,P2(i,e,void 0,t),t.currentTarget=null}function cy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==o&&s.isPropagationStopped())break e;t0(s,u,d),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==o&&s.isPropagationStopped())break e;t0(s,u,d),o=f}}}if(Qc)throw t=yp,Qc=!1,yp=null,t}function Nt(t,e){var n=e[bp];n===void 0&&(n=e[bp]=new Set);var i=t+"__bubble";n.has(i)||(fy(e,t,2,!1),n.add(i))}function _h(t,e,n){var i=0;e&&(i|=4),fy(n,t,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Wl(t){if(!t[ac]){t[ac]=!0,vS.forEach(function(n){n!=="selectionchange"&&(UL.has(n)||_h(n,!1,t),_h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,_h("selectionchange",!1,e))}}function fy(t,e,n,i){switch(YS(e)){case 1:var s=q2;break;case 4:s=j2;break;default:s=Em}n=s.bind(null,e,n,t),s=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function vh(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;l=l.return}for(;u!==null;){if(l=eo(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}IS(function(){var d=o,p=xm(n),g=[];e:{var _=uy.get(t);if(_!==void 0){var x=wm,E=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":x=lL;break;case"focusin":E="focus",x=fh;break;case"focusout":E="blur",x=fh;break;case"beforeblur":case"afterblur":x=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=K2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=fL;break;case sy:case oy:case ay:x=J2;break;case ly:x=hL;break;case"scroll":x=Y2;break;case"wheel":x=mL;break;case"copy":case"cut":case"paste":x=tL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xv}var T=(e&4)!==0,v=!T&&t==="scroll",h=T?_!==null?_+"Capture":null:_;T=[];for(var y=d,S;y!==null;){S=y;var w=S.stateNode;if(S.tag===5&&w!==null&&(S=w,h!==null&&(w=zl(y,h),w!=null&&T.push(Xl(y,w,S)))),v)break;y=y.return}0<T.length&&(_=new x(_,E,null,n,p),g.push({event:_,listeners:T}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==vp&&(E=n.relatedTarget||n.fromElement)&&(eo(E)||E[Wr]))break e;if((x||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=d,E=E?eo(E):null,E!==null&&(v=xo(E),E!==v||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=d),x!==E)){if(T=Vv,w="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(T=Xv,w="onPointerLeave",h="onPointerEnter",y="pointer"),v=x==null?_:ua(x),S=E==null?_:ua(E),_=new T(w,y+"leave",x,n,p),_.target=v,_.relatedTarget=S,w=null,eo(p)===d&&(T=new T(h,y+"enter",E,n,p),T.target=S,T.relatedTarget=v,w=T),v=w,x&&E)t:{for(T=x,h=E,y=0,S=T;S;S=ko(S))y++;for(S=0,w=h;w;w=ko(w))S++;for(;0<y-S;)T=ko(T),y--;for(;0<S-y;)h=ko(h),S--;for(;y--;){if(T===h||h!==null&&T===h.alternate)break t;T=ko(T),h=ko(h)}T=null}else T=null;x!==null&&n0(g,_,x,T,!1),E!==null&&v!==null&&n0(g,v,E,T,!0)}}e:{if(_=d?ua(d):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var P=ML;else if(Yv(_))if(ey)P=AL;else{P=TL;var I=EL}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(P=wL);if(P&&(P=P(t,d))){JS(g,P,n,p);break e}I&&I(t,_,d),t==="focusout"&&(I=_._wrapperState)&&I.controlled&&_.type==="number"&&hp(_,"number",_.value)}switch(I=d?ua(d):window,t){case"focusin":(Yv(I)||I.contentEditable==="true")&&(aa=I,wp=d,Pl=null);break;case"focusout":Pl=wp=aa=null;break;case"mousedown":Ap=!0;break;case"contextmenu":case"mouseup":case"dragend":Ap=!1,Jv(g,n,p);break;case"selectionchange":if(LL)break;case"keydown":case"keyup":Jv(g,n,p)}var D;if(Rm)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else oa?ZS(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(KS&&n.locale!=="ko"&&(oa||H!=="onCompositionStart"?H==="onCompositionEnd"&&oa&&(D=$S()):(ps=p,Tm="value"in ps?ps.value:ps.textContent,oa=!0)),I=rf(d,H),0<I.length&&(H=new Wv(H,t,null,n,p),g.push({event:H,listeners:I}),D?H.data=D:(D=QS(n),D!==null&&(H.data=D)))),(D=_L?vL(t,n):xL(t,n))&&(d=rf(d,"onBeforeInput"),0<d.length&&(p=new Wv("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=D))}cy(g,e)})}function Xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rf(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=zl(t,n),o!=null&&i.unshift(Xl(t,o,s)),o=zl(t,e),o!=null&&i.push(Xl(t,o,s))),t=t.return}return i}function ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function n0(t,e,n,i,s){for(var o=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&d!==null&&(u=d,s?(f=zl(n,o),f!=null&&l.unshift(Xl(n,f,u))):s||(f=zl(n,o),f!=null&&l.push(Xl(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var DL=/\r\n?/g,IL=/\u0000|\uFFFD/g;function i0(t){return(typeof t=="string"?t:""+t).replace(DL,`
`).replace(IL,"")}function lc(t,e,n){if(e=i0(e),i0(t)!==e&&n)throw Error(me(425))}function sf(){}var Rp=null,Cp=null;function Lp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,NL=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,FL=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(OL)}:Pp;function OL(t){setTimeout(function(){throw t})}function xh(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Hl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Hl(e)}function ys(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function s0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),ur="__reactFiber$"+ka,ql="__reactProps$"+ka,Wr="__reactContainer$"+ka,bp="__reactEvents$"+ka,zL="__reactListeners$"+ka,BL="__reactHandles$"+ka;function eo(t){var e=t[ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wr]||n[ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=s0(t);t!==null;){if(n=t[ur])return n;t=s0(t)}return e}t=n,n=t.parentNode}return null}function ru(t){return t=t[ur]||t[Wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ua(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function Lf(t){return t[ql]||null}var Up=[],ca=-1;function Us(t){return{current:t}}function Ft(t){0>ca||(t.current=Up[ca],Up[ca]=null,ca--)}function Ut(t,e){ca++,Up[ca]=t.current,t.current=e}var Ls={},Dn=Us(Ls),Zn=Us(!1),co=Ls;function Ca(t,e){var n=t.type.contextTypes;if(!n)return Ls;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qn(t){return t=t.childContextTypes,t!=null}function of(){Ft(Zn),Ft(Dn)}function o0(t,e,n){if(Dn.current!==Ls)throw Error(me(168));Ut(Dn,e),Ut(Zn,n)}function dy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(me(108,E2(t)||"Unknown",s));return qt({},n,i)}function af(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ls,co=Dn.current,Ut(Dn,t),Ut(Zn,Zn.current),!0}function a0(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=dy(t,e,co),i.__reactInternalMemoizedMergedChildContext=t,Ft(Zn),Ft(Dn),Ut(Dn,t)):Ft(Zn),Ut(Zn,n)}var Ir=null,Pf=!1,Sh=!1;function hy(t){Ir===null?Ir=[t]:Ir.push(t)}function kL(t){Pf=!0,hy(t)}function Ds(){if(!Sh&&Ir!==null){Sh=!0;var t=0,e=wt;try{var n=Ir;for(wt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ir=null,Pf=!1}catch(s){throw Ir!==null&&(Ir=Ir.slice(t+1)),zS(Sm,Ds),s}finally{wt=e,Sh=!1}}return null}var fa=[],da=0,lf=null,uf=0,bi=[],Ui=0,fo=null,Fr=1,Or="";function js(t,e){fa[da++]=uf,fa[da++]=lf,lf=t,uf=e}function py(t,e,n){bi[Ui++]=Fr,bi[Ui++]=Or,bi[Ui++]=fo,fo=t;var i=Fr;t=Or;var s=32-er(i)-1;i&=~(1<<s),n+=1;var o=32-er(e)+s;if(30<o){var l=s-s%5;o=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Fr=1<<32-er(e)+s|n<<s|i,Or=o+t}else Fr=1<<o|n<<s|i,Or=t}function Lm(t){t.return!==null&&(js(t,1),py(t,1,0))}function Pm(t){for(;t===lf;)lf=fa[--da],fa[da]=null,uf=fa[--da],fa[da]=null;for(;t===fo;)fo=bi[--Ui],bi[Ui]=null,Or=bi[--Ui],bi[Ui]=null,Fr=bi[--Ui],bi[Ui]=null}var hi=null,di=null,kt=!1,Ki=null;function my(t,e){var n=Ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function l0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hi=t,di=ys(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hi=t,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fo!==null?{id:Fr,overflow:Or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hi=t,di=null,!0):!1;default:return!1}}function Dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(kt){var e=di;if(e){var n=e;if(!l0(t,e)){if(Dp(t))throw Error(me(418));e=ys(n.nextSibling);var i=hi;e&&l0(t,e)?my(i,n):(t.flags=t.flags&-4097|2,kt=!1,hi=t)}}else{if(Dp(t))throw Error(me(418));t.flags=t.flags&-4097|2,kt=!1,hi=t}}}function u0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hi=t}function uc(t){if(t!==hi)return!1;if(!kt)return u0(t),kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lp(t.type,t.memoizedProps)),e&&(e=di)){if(Dp(t))throw gy(),Error(me(418));for(;e;)my(t,e),e=ys(e.nextSibling)}if(u0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){di=ys(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}di=null}}else di=hi?ys(t.stateNode.nextSibling):null;return!0}function gy(){for(var t=di;t;)t=ys(t.nextSibling)}function La(){di=hi=null,kt=!1}function bm(t){Ki===null?Ki=[t]:Ki.push(t)}var HL=Yr.ReactCurrentBatchConfig;function Yi(t,e){if(t&&t.defaultProps){e=qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cf=Us(null),ff=null,ha=null,Um=null;function Dm(){Um=ha=ff=null}function Im(t){var e=cf.current;Ft(cf),t._currentValue=e}function Np(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ma(t,e){ff=t,Um=ha=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kn=!0),t.firstContext=null)}function Oi(t){var e=t._currentValue;if(Um!==t)if(t={context:t,memoizedValue:e,next:null},ha===null){if(ff===null)throw Error(me(308));ha=t,ff.dependencies={lanes:0,firstContext:t}}else ha=ha.next=t;return e}var to=null;function Nm(t){to===null?to=[t]:to.push(t)}function _y(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Nm(e)):(n.next=s.next,s.next=n),e.interleaved=n,Xr(t,i)}function Xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fs=!1;function Fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ms(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,St&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Xr(t,n)}return s=i.interleaved,s===null?(e.next=e,Nm(i)):(e.next=s.next,s.next=e),i.interleaved=e,Xr(t,n)}function Gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ym(t,n)}}function c0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function df(t,e,n,i){var s=t.updateQueue;fs=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?o=d:l.next=d,l=f;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=f))}if(o!==null){var g=s.baseState;l=0,p=d=f=null,u=o;do{var _=u.lane,x=u.eventTime;if((i&_)===_){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var E=t,T=u;switch(_=e,x=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){g=E.call(x,g,_);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,_=typeof E=="function"?E.call(x,g,_):E,_==null)break e;g=qt({},g,_);break e;case 2:fs=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[u]:_.push(u))}else x={eventTime:x,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=x,f=g):p=p.next=x,l|=_;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;_=u,u=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(1);if(p===null&&(f=g),s.baseState=f,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);po|=l,t.lanes=l,t.memoizedState=g}}function f0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(me(191,s));s.call(i)}}}var xy=new _S.Component().refs;function Fp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bf={isMounted:function(t){return(t=t._reactInternals)?xo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kn(),s=Ts(t),o=kr(i,s);o.payload=e,n!=null&&(o.callback=n),e=Ms(t,o,s),e!==null&&(tr(e,t,s,i),Gc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kn(),s=Ts(t),o=kr(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ms(t,o,s),e!==null&&(tr(e,t,s,i),Gc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kn(),i=Ts(t),s=kr(n,i);s.tag=2,e!=null&&(s.callback=e),e=Ms(t,s,i),e!==null&&(tr(e,t,i,n),Gc(e,t,i))}};function d0(t,e,n,i,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Vl(n,i)||!Vl(s,o):!0}function Sy(t,e,n){var i=!1,s=Ls,o=e.contextType;return typeof o=="object"&&o!==null?o=Oi(o):(s=Qn(e)?co:Dn.current,i=e.contextTypes,o=(i=i!=null)?Ca(t,s):Ls),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function h0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bf.enqueueReplaceState(e,e.state,null)}function Op(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=xy,Fm(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=Oi(o):(o=Qn(e)?co:Dn.current,s.context=Ca(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Fp(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&bf.enqueueReplaceState(s,s.state,null),df(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function pl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=s.refs;u===xy&&(u=s.refs={}),l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function cc(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function p0(t){var e=t._init;return e(t._payload)}function yy(t){function e(h,y){if(t){var S=h.deletions;S===null?(h.deletions=[y],h.flags|=16):S.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function s(h,y){return h=ws(h,y),h.index=0,h.sibling=null,h}function o(h,y,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<y?(h.flags|=2,y):S):(h.flags|=2,y)):(h.flags|=1048576,y)}function l(h){return t&&h.alternate===null&&(h.flags|=2),h}function u(h,y,S,w){return y===null||y.tag!==6?(y=Rh(S,h.mode,w),y.return=h,y):(y=s(y,S),y.return=h,y)}function f(h,y,S,w){var P=S.type;return P===sa?p(h,y,S.props.children,w,S.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===cs&&p0(P)===y.type)?(w=s(y,S.props),w.ref=pl(h,y,S),w.return=h,w):(w=Yc(S.type,S.key,S.props,null,h.mode,w),w.ref=pl(h,y,S),w.return=h,w)}function d(h,y,S,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Ch(S,h.mode,w),y.return=h,y):(y=s(y,S.children||[]),y.return=h,y)}function p(h,y,S,w,P){return y===null||y.tag!==7?(y=so(S,h.mode,w,P),y.return=h,y):(y=s(y,S),y.return=h,y)}function g(h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Rh(""+y,h.mode,S),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return S=Yc(y.type,y.key,y.props,null,h.mode,S),S.ref=pl(h,null,y),S.return=h,S;case ra:return y=Ch(y,h.mode,S),y.return=h,y;case cs:var w=y._init;return g(h,w(y._payload),S)}if(Ml(y)||ul(y))return y=so(y,h.mode,S,null),y.return=h,y;cc(h,y)}return null}function _(h,y,S,w){var P=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return P!==null?null:u(h,y,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:return S.key===P?f(h,y,S,w):null;case ra:return S.key===P?d(h,y,S,w):null;case cs:return P=S._init,_(h,y,P(S._payload),w)}if(Ml(S)||ul(S))return P!==null?null:p(h,y,S,w,null);cc(h,S)}return null}function x(h,y,S,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(S)||null,u(y,h,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ju:return h=h.get(w.key===null?S:w.key)||null,f(y,h,w,P);case ra:return h=h.get(w.key===null?S:w.key)||null,d(y,h,w,P);case cs:var I=w._init;return x(h,y,S,I(w._payload),P)}if(Ml(w)||ul(w))return h=h.get(S)||null,p(y,h,w,P,null);cc(y,w)}return null}function E(h,y,S,w){for(var P=null,I=null,D=y,H=y=0,C=null;D!==null&&H<S.length;H++){D.index>H?(C=D,D=null):C=D.sibling;var U=_(h,D,S[H],w);if(U===null){D===null&&(D=C);break}t&&D&&U.alternate===null&&e(h,D),y=o(U,y,H),I===null?P=U:I.sibling=U,I=U,D=C}if(H===S.length)return n(h,D),kt&&js(h,H),P;if(D===null){for(;H<S.length;H++)D=g(h,S[H],w),D!==null&&(y=o(D,y,H),I===null?P=D:I.sibling=D,I=D);return kt&&js(h,H),P}for(D=i(h,D);H<S.length;H++)C=x(D,h,H,S[H],w),C!==null&&(t&&C.alternate!==null&&D.delete(C.key===null?H:C.key),y=o(C,y,H),I===null?P=C:I.sibling=C,I=C);return t&&D.forEach(function(oe){return e(h,oe)}),kt&&js(h,H),P}function T(h,y,S,w){var P=ul(S);if(typeof P!="function")throw Error(me(150));if(S=P.call(S),S==null)throw Error(me(151));for(var I=P=null,D=y,H=y=0,C=null,U=S.next();D!==null&&!U.done;H++,U=S.next()){D.index>H?(C=D,D=null):C=D.sibling;var oe=_(h,D,U.value,w);if(oe===null){D===null&&(D=C);break}t&&D&&oe.alternate===null&&e(h,D),y=o(oe,y,H),I===null?P=oe:I.sibling=oe,I=oe,D=C}if(U.done)return n(h,D),kt&&js(h,H),P;if(D===null){for(;!U.done;H++,U=S.next())U=g(h,U.value,w),U!==null&&(y=o(U,y,H),I===null?P=U:I.sibling=U,I=U);return kt&&js(h,H),P}for(D=i(h,D);!U.done;H++,U=S.next())U=x(D,h,H,U.value,w),U!==null&&(t&&U.alternate!==null&&D.delete(U.key===null?H:U.key),y=o(U,y,H),I===null?P=U:I.sibling=U,I=U);return t&&D.forEach(function(de){return e(h,de)}),kt&&js(h,H),P}function v(h,y,S,w){if(typeof S=="object"&&S!==null&&S.type===sa&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:e:{for(var P=S.key,I=y;I!==null;){if(I.key===P){if(P=S.type,P===sa){if(I.tag===7){n(h,I.sibling),y=s(I,S.props.children),y.return=h,h=y;break e}}else if(I.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===cs&&p0(P)===I.type){n(h,I.sibling),y=s(I,S.props),y.ref=pl(h,I,S),y.return=h,h=y;break e}n(h,I);break}else e(h,I);I=I.sibling}S.type===sa?(y=so(S.props.children,h.mode,w,S.key),y.return=h,h=y):(w=Yc(S.type,S.key,S.props,null,h.mode,w),w.ref=pl(h,y,S),w.return=h,h=w)}return l(h);case ra:e:{for(I=S.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(h,y.sibling),y=s(y,S.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=Ch(S,h.mode,w),y.return=h,h=y}return l(h);case cs:return I=S._init,v(h,y,I(S._payload),w)}if(Ml(S))return E(h,y,S,w);if(ul(S))return T(h,y,S,w);cc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(h,y.sibling),y=s(y,S),y.return=h,h=y):(n(h,y),y=Rh(S,h.mode,w),y.return=h,h=y),l(h)):n(h,y)}return v}var Pa=yy(!0),My=yy(!1),su={},fr=Us(su),jl=Us(su),Yl=Us(su);function no(t){if(t===su)throw Error(me(174));return t}function Om(t,e){switch(Ut(Yl,e),Ut(jl,t),Ut(fr,su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mp(e,t)}Ft(fr),Ut(fr,e)}function ba(){Ft(fr),Ft(jl),Ft(Yl)}function Ey(t){no(Yl.current);var e=no(fr.current),n=mp(e,t.type);e!==n&&(Ut(jl,t),Ut(fr,n))}function zm(t){jl.current===t&&(Ft(fr),Ft(jl))}var Wt=Us(0);function hf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function Bm(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var Vc=Yr.ReactCurrentDispatcher,Mh=Yr.ReactCurrentBatchConfig,ho=0,Xt=null,ln=null,mn=null,pf=!1,bl=!1,$l=0,GL=0;function Cn(){throw Error(me(321))}function km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function Hm(t,e,n,i,s,o){if(ho=o,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vc.current=t===null||t.memoizedState===null?qL:jL,t=n(i,s),bl){o=0;do{if(bl=!1,$l=0,25<=o)throw Error(me(301));o+=1,mn=ln=null,e.updateQueue=null,Vc.current=YL,t=n(i,s)}while(bl)}if(Vc.current=mf,e=ln!==null&&ln.next!==null,ho=0,mn=ln=Xt=null,pf=!1,e)throw Error(me(300));return t}function Gm(){var t=$l!==0;return $l=0,t}function ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Xt.memoizedState=mn=t:mn=mn.next=t,mn}function zi(){if(ln===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var e=mn===null?Xt.memoizedState:mn.next;if(e!==null)mn=e,ln=t;else{if(t===null)throw Error(me(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},mn===null?Xt.memoizedState=mn=t:mn=mn.next=t}return mn}function Kl(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=zi(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=ln,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=l=null,f=null,d=o;do{var p=d.lane;if((ho&p)===p)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=g,l=i):f=f.next=g,Xt.lanes|=p,po|=p}d=d.next}while(d!==null&&d!==o);f===null?l=i:f.next=u,nr(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,Xt.lanes|=o,po|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Th(t){var e=zi(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);nr(o,e.memoizedState)||(Kn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Ty(){}function wy(t,e){var n=Xt,i=zi(),s=e(),o=!nr(i.memoizedState,s);if(o&&(i.memoizedState=s,Kn=!0),i=i.queue,Vm(Cy.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||mn!==null&&mn.memoizedState.tag&1){if(n.flags|=2048,Zl(9,Ry.bind(null,n,i,s,e),void 0,null),gn===null)throw Error(me(349));ho&30||Ay(n,e,s)}return s}function Ay(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ry(t,e,n,i){e.value=n,e.getSnapshot=i,Ly(e)&&Py(t)}function Cy(t,e,n){return n(function(){Ly(e)&&Py(t)})}function Ly(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function Py(t){var e=Xr(t,1);e!==null&&tr(e,t,1,-1)}function m0(t){var e=ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:t},e.queue=t,t=t.dispatch=XL.bind(null,Xt,t),[e.memoizedState,t]}function Zl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function by(){return zi().memoizedState}function Wc(t,e,n,i){var s=ar();Xt.flags|=t,s.memoizedState=Zl(1|e,n,void 0,i===void 0?null:i)}function Uf(t,e,n,i){var s=zi();i=i===void 0?null:i;var o=void 0;if(ln!==null){var l=ln.memoizedState;if(o=l.destroy,i!==null&&km(i,l.deps)){s.memoizedState=Zl(e,n,o,i);return}}Xt.flags|=t,s.memoizedState=Zl(1|e,n,o,i)}function g0(t,e){return Wc(8390656,8,t,e)}function Vm(t,e){return Uf(2048,8,t,e)}function Uy(t,e){return Uf(4,2,t,e)}function Dy(t,e){return Uf(4,4,t,e)}function Iy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ny(t,e,n){return n=n!=null?n.concat([t]):null,Uf(4,4,Iy.bind(null,e,t),n)}function Wm(){}function Fy(t,e){var n=zi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&km(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Oy(t,e){var n=zi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&km(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zy(t,e,n){return ho&21?(nr(n,e)||(n=HS(),Xt.lanes|=n,po|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kn=!0),t.memoizedState=n)}function VL(t,e){var n=wt;wt=n!==0&&4>n?n:4,t(!0);var i=Mh.transition;Mh.transition={};try{t(!1),e()}finally{wt=n,Mh.transition=i}}function By(){return zi().memoizedState}function WL(t,e,n){var i=Ts(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ky(t))Hy(e,n);else if(n=_y(t,e,n,i),n!==null){var s=kn();tr(n,t,i,s),Gy(n,e,i)}}function XL(t,e,n){var i=Ts(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ky(t))Hy(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(s.hasEagerState=!0,s.eagerState=u,nr(u,l)){var f=e.interleaved;f===null?(s.next=s,Nm(e)):(s.next=f.next,f.next=s),e.interleaved=s;return}}catch{}finally{}n=_y(t,e,s,i),n!==null&&(s=kn(),tr(n,t,i,s),Gy(n,e,i))}}function ky(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function Hy(t,e){bl=pf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ym(t,n)}}var mf={readContext:Oi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},qL={readContext:Oi,useCallback:function(t,e){return ar().memoizedState=[t,e===void 0?null:e],t},useContext:Oi,useEffect:g0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4194308,4,Iy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wc(4,2,t,e)},useMemo:function(t,e){var n=ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ar();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=WL.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=ar();return t={current:t},e.memoizedState=t},useState:m0,useDebugValue:Wm,useDeferredValue:function(t){return ar().memoizedState=t},useTransition:function(){var t=m0(!1),e=t[0];return t=VL.bind(null,t[1]),ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,s=ar();if(kt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),gn===null)throw Error(me(349));ho&30||Ay(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,g0(Cy.bind(null,i,o,t),[t]),i.flags|=2048,Zl(9,Ry.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ar(),e=gn.identifierPrefix;if(kt){var n=Or,i=Fr;n=(i&~(1<<32-er(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GL++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jL={readContext:Oi,useCallback:Fy,useContext:Oi,useEffect:Vm,useImperativeHandle:Ny,useInsertionEffect:Uy,useLayoutEffect:Dy,useMemo:Oy,useReducer:Eh,useRef:by,useState:function(){return Eh(Kl)},useDebugValue:Wm,useDeferredValue:function(t){var e=zi();return zy(e,ln.memoizedState,t)},useTransition:function(){var t=Eh(Kl)[0],e=zi().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:wy,useId:By,unstable_isNewReconciler:!1},YL={readContext:Oi,useCallback:Fy,useContext:Oi,useEffect:Vm,useImperativeHandle:Ny,useInsertionEffect:Uy,useLayoutEffect:Dy,useMemo:Oy,useReducer:Th,useRef:by,useState:function(){return Th(Kl)},useDebugValue:Wm,useDeferredValue:function(t){var e=zi();return ln===null?e.memoizedState=t:zy(e,ln.memoizedState,t)},useTransition:function(){var t=Th(Kl)[0],e=zi().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:wy,useId:By,unstable_isNewReconciler:!1};function Ua(t,e){try{var n="",i=e;do n+=M2(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function wh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $L=typeof WeakMap=="function"?WeakMap:Map;function Vy(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_f||(_f=!0,Yp=i),zp(t,e)},n}function Wy(t,e,n){n=kr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){zp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zp(t,e),typeof i!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function _0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $L;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=uP.bind(null,t,e,n),e.then(t,t))}function v0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function x0(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,Ms(n,e,1))),n.lanes|=1),t)}var KL=Yr.ReactCurrentOwner,Kn=!1;function zn(t,e,n,i){e.child=t===null?My(e,null,n,i):Pa(e,t.child,n,i)}function S0(t,e,n,i,s){n=n.render;var o=e.ref;return Ma(e,s),i=Hm(t,e,n,i,o,s),n=Gm(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qr(t,e,s)):(kt&&n&&Lm(e),e.flags|=1,zn(t,e,i,s),e.child)}function y0(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Qm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Xy(t,e,o,i,s)):(t=Yc(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vl,n(l,i)&&t.ref===e.ref)return qr(t,e,s)}return e.flags|=1,t=ws(o,i),t.ref=e.ref,t.return=e,e.child=t}function Xy(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(Vl(o,i)&&t.ref===e.ref)if(Kn=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(Kn=!0);else return e.lanes=t.lanes,qr(t,e,s)}return Bp(t,e,n,i,s)}function qy(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(ma,fi),fi|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ut(ma,fi),fi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ut(ma,fi),fi|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ut(ma,fi),fi|=i;return zn(t,e,s,n),e.child}function jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bp(t,e,n,i,s){var o=Qn(n)?co:Dn.current;return o=Ca(e,o),Ma(e,s),n=Hm(t,e,n,i,o,s),i=Gm(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qr(t,e,s)):(kt&&i&&Lm(e),e.flags|=1,zn(t,e,n,s),e.child)}function M0(t,e,n,i,s){if(Qn(n)){var o=!0;af(e)}else o=!1;if(Ma(e,s),e.stateNode===null)Xc(t,e),Sy(e,n,i),Op(e,n,i,s),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Oi(d):(d=Qn(n)?co:Dn.current,d=Ca(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==d)&&h0(e,l,i,d),fs=!1;var _=e.memoizedState;l.state=_,df(e,i,l,s),f=e.memoizedState,u!==i||_!==f||Zn.current||fs?(typeof p=="function"&&(Fp(e,n,p,i),f=e.memoizedState),(u=fs||d0(e,n,u,i,_,f,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=d,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,vy(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:Yi(e.type,u),l.props=d,g=e.pendingProps,_=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Oi(f):(f=Qn(n)?co:Dn.current,f=Ca(e,f));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==g||_!==f)&&h0(e,l,i,f),fs=!1,_=e.memoizedState,l.state=_,df(e,i,l,s);var E=e.memoizedState;u!==g||_!==E||Zn.current||fs?(typeof x=="function"&&(Fp(e,n,x,i),E=e.memoizedState),(d=fs||d0(e,n,d,i,_,E,f)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,E,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,E,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),l.props=i,l.state=E,l.context=f,i=d):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return kp(t,e,n,i,o,s)}function kp(t,e,n,i,s,o){jy(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&a0(e,n,!1),qr(t,e,o);i=e.stateNode,KL.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=Pa(e,t.child,null,o),e.child=Pa(e,null,u,o)):zn(t,e,u,o),e.memoizedState=i.state,s&&a0(e,n,!0),e.child}function Yy(t){var e=t.stateNode;e.pendingContext?o0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&o0(t,e.context,!1),Om(t,e.containerInfo)}function E0(t,e,n,i,s){return La(),bm(s),e.flags|=256,zn(t,e,n,i),e.child}var Hp={dehydrated:null,treeContext:null,retryLane:0};function Gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function $y(t,e,n){var i=e.pendingProps,s=Wt.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ut(Wt,s&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Nf(l,i,0,null),t=so(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gp(n),e.memoizedState=Hp,t):Xm(e,l));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return ZL(t,e,l,i,u,s,n);if(o){o=i.fallback,l=e.mode,s=t.child,u=s.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=ws(s,f),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=ws(u,o):(o=so(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?Gp(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=Hp,i}return o=t.child,t=o.sibling,i=ws(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xm(t,e){return e=Nf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,i){return i!==null&&bm(i),Pa(e,t.child,null,n),t=Xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZL(t,e,n,i,s,o,l){if(n)return e.flags&256?(e.flags&=-257,i=wh(Error(me(422))),fc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=Nf({mode:"visible",children:i.children},s,0,null),o=so(o,s,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Pa(e,t.child,null,l),e.child.memoizedState=Gp(l),e.memoizedState=Hp,o);if(!(e.mode&1))return fc(t,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(me(419)),i=wh(o,i,void 0),fc(t,e,l,i)}if(u=(l&t.childLanes)!==0,Kn||u){if(i=gn,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Xr(t,s),tr(i,t,s,-1))}return Zm(),i=wh(Error(me(421))),fc(t,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=cP.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,di=ys(s.nextSibling),hi=e,kt=!0,Ki=null,t!==null&&(bi[Ui++]=Fr,bi[Ui++]=Or,bi[Ui++]=fo,Fr=t.id,Or=t.overflow,fo=e),e=Xm(e,i.children),e.flags|=4096,e)}function T0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Np(t.return,e,n)}function Ah(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function Ky(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(zn(t,e,i.children,n),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,n,e);else if(t.tag===19)T0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ut(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hf(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ah(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hf(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ah(e,!0,n,null,o);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),po|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=ws(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ws(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QL(t,e,n){switch(e.tag){case 3:Yy(e),La();break;case 5:Ey(e);break;case 1:Qn(e.type)&&af(e);break;case 4:Om(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;Ut(cf,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ut(Wt,Wt.current&1),e.flags|=128,null):n&e.child.childLanes?$y(t,e,n):(Ut(Wt,Wt.current&1),t=qr(t,e,n),t!==null?t.sibling:null);Ut(Wt,Wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ky(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ut(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,qy(t,e,n)}return qr(t,e,n)}var Zy,Vp,Qy,Jy;Zy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vp=function(){};Qy=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,no(fr.current);var o=null;switch(n){case"input":s=fp(t,s),i=fp(t,i),o=[];break;case"select":s=qt({},s,{value:void 0}),i=qt({},i,{value:void 0}),o=[];break;case"textarea":s=pp(t,s),i=pp(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sf)}gp(n,i);var l;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var f=i[d];if(u=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fl.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&Nt("scroll",t),o||u===f||(o=[])):(o=o||[]).push(d,f))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Jy=function(t,e,n,i){n!==i&&(e.flags|=4)};function ml(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function JL(t,e,n){var i=e.pendingProps;switch(Pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(e),null;case 1:return Qn(e.type)&&of(),Ln(e),null;case 3:return i=e.stateNode,ba(),Ft(Zn),Ft(Dn),Bm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ki!==null&&(Zp(Ki),Ki=null))),Vp(t,e),Ln(e),null;case 5:zm(e);var s=no(Yl.current);if(n=e.type,t!==null&&e.stateNode!=null)Qy(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return Ln(e),null}if(t=no(fr.current),uc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ur]=e,i[ql]=o,t=(e.mode&1)!==0,n){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(s=0;s<Tl.length;s++)Nt(Tl[s],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Dv(i,o),Nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Nt("invalid",i);break;case"textarea":Nv(i,o),Nt("invalid",i)}gp(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,u,t),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,u,t),s=["children",""+u]):Fl.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Nt("scroll",i)}switch(n){case"input":ec(i),Iv(i,o,!0);break;case"textarea":ec(i),Fv(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=sf)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=AS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[ur]=e,t[ql]=i,Zy(t,e,!1,!1),e.stateNode=t;e:{switch(l=_p(n,i),n){case"dialog":Nt("cancel",t),Nt("close",t),s=i;break;case"iframe":case"object":case"embed":Nt("load",t),s=i;break;case"video":case"audio":for(s=0;s<Tl.length;s++)Nt(Tl[s],t);s=i;break;case"source":Nt("error",t),s=i;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),s=i;break;case"details":Nt("toggle",t),s=i;break;case"input":Dv(t,i),s=fp(t,i),Nt("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=qt({},i,{value:void 0}),Nt("invalid",t);break;case"textarea":Nv(t,i),s=pp(t,i),Nt("invalid",t);break;default:s=i}gp(n,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?LS(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&RS(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ol(t,f):typeof f=="number"&&Ol(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fl.hasOwnProperty(o)?f!=null&&o==="onScroll"&&Nt("scroll",t):f!=null&&mm(t,o,f,l))}switch(n){case"input":ec(t),Iv(t,i,!1);break;case"textarea":ec(t),Fv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cs(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?va(t,!!i.multiple,o,!1):i.defaultValue!=null&&va(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=sf)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ln(e),null;case 6:if(t&&e.stateNode!=null)Jy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=no(Yl.current),no(fr.current),uc(e)){if(i=e.stateNode,n=e.memoizedProps,i[ur]=e,(o=i.nodeValue!==n)&&(t=hi,t!==null))switch(t.tag){case 3:lc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ur]=e,e.stateNode=i}return Ln(e),null;case 13:if(Ft(Wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&di!==null&&e.mode&1&&!(e.flags&128))gy(),La(),e.flags|=98560,o=!1;else if(o=uc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(me(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(me(317));o[ur]=e}else La(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ln(e),o=!1}else Ki!==null&&(Zp(Ki),Ki=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?un===0&&(un=3):Zm())),e.updateQueue!==null&&(e.flags|=4),Ln(e),null);case 4:return ba(),Vp(t,e),t===null&&Wl(e.stateNode.containerInfo),Ln(e),null;case 10:return Im(e.type._context),Ln(e),null;case 17:return Qn(e.type)&&of(),Ln(e),null;case 19:if(Ft(Wt),o=e.memoizedState,o===null)return Ln(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)ml(o,!1);else{if(un!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=hf(t),l!==null){for(e.flags|=128,ml(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ut(Wt,Wt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qt()>Da&&(e.flags|=128,i=!0,ml(o,!1),e.lanes=4194304)}else{if(!i)if(t=hf(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ml(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!kt)return Ln(e),null}else 2*Qt()-o.renderingStartTime>Da&&n!==1073741824&&(e.flags|=128,i=!0,ml(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qt(),e.sibling=null,n=Wt.current,Ut(Wt,i?n&1|2:n&1),e):(Ln(e),null);case 22:case 23:return Km(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fi&1073741824&&(Ln(e),e.subtreeFlags&6&&(e.flags|=8192)):Ln(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function eP(t,e){switch(Pm(e),e.tag){case 1:return Qn(e.type)&&of(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ba(),Ft(Zn),Ft(Dn),Bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zm(e),null;case 13:if(Ft(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));La()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ft(Wt),null;case 4:return ba(),null;case 10:return Im(e.type._context),null;case 22:case 23:return Km(),null;case 24:return null;default:return null}}var dc=!1,Un=!1,tP=typeof WeakSet=="function"?WeakSet:Set,Le=null;function pa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$t(t,e,i)}else n.current=null}function Wp(t,e,n){try{n()}catch(i){$t(t,e,i)}}var w0=!1;function nP(t,e){if(Rp=tf,t=iy(),Cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,d=0,p=0,g=t,_=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(u=l+s),g!==o||i!==0&&g.nodeType!==3||(f=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)_=g,g=x;for(;;){if(g===t)break t;if(_===n&&++d===s&&(u=l),_===o&&++p===i&&(f=l),(x=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=x}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cp={focusedElem:t,selectionRange:n},tf=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,v=E.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?T:Yi(e.type,T),v);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(w){$t(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return E=w0,w0=!1,E}function Ul(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&Wp(e,n,o)}s=s.next}while(s!==i)}}function Df(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eM(t){var e=t.alternate;e!==null&&(t.alternate=null,eM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ur],delete e[ql],delete e[bp],delete e[zL],delete e[BL])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tM(t){return t.tag===5||t.tag===3||t.tag===4}function A0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sf));else if(i!==4&&(t=t.child,t!==null))for(qp(t,e,n),t=t.sibling;t!==null;)qp(t,e,n),t=t.sibling}function jp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jp(t,e,n),t=t.sibling;t!==null;)jp(t,e,n),t=t.sibling}var Sn=null,$i=!1;function ss(t,e,n){for(n=n.child;n!==null;)nM(t,e,n),n=n.sibling}function nM(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(wf,n)}catch{}switch(n.tag){case 5:Un||pa(n,e);case 6:var i=Sn,s=$i;Sn=null,ss(t,e,n),Sn=i,$i=s,Sn!==null&&($i?(t=Sn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Sn.removeChild(n.stateNode));break;case 18:Sn!==null&&($i?(t=Sn,n=n.stateNode,t.nodeType===8?xh(t.parentNode,n):t.nodeType===1&&xh(t,n),Hl(t)):xh(Sn,n.stateNode));break;case 4:i=Sn,s=$i,Sn=n.stateNode.containerInfo,$i=!0,ss(t,e,n),Sn=i,$i=s;break;case 0:case 11:case 14:case 15:if(!Un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Wp(n,e,l),s=s.next}while(s!==i)}ss(t,e,n);break;case 1:if(!Un&&(pa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){$t(n,e,u)}ss(t,e,n);break;case 21:ss(t,e,n);break;case 22:n.mode&1?(Un=(i=Un)||n.memoizedState!==null,ss(t,e,n),Un=i):ss(t,e,n);break;default:ss(t,e,n)}}function R0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tP),e.forEach(function(i){var s=fP.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:Sn=u.stateNode,$i=!1;break e;case 3:Sn=u.stateNode.containerInfo,$i=!0;break e;case 4:Sn=u.stateNode.containerInfo,$i=!0;break e}u=u.return}if(Sn===null)throw Error(me(160));nM(o,l,s),Sn=null,$i=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(d){$t(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iM(e,t),e=e.sibling}function iM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vi(e,t),or(t),i&4){try{Ul(3,t,t.return),Df(3,t)}catch(T){$t(t,t.return,T)}try{Ul(5,t,t.return)}catch(T){$t(t,t.return,T)}}break;case 1:Vi(e,t),or(t),i&512&&n!==null&&pa(n,n.return);break;case 5:if(Vi(e,t),or(t),i&512&&n!==null&&pa(n,n.return),t.flags&32){var s=t.stateNode;try{Ol(s,"")}catch(T){$t(t,t.return,T)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&TS(s,o),_p(u,l);var d=_p(u,o);for(l=0;l<f.length;l+=2){var p=f[l],g=f[l+1];p==="style"?LS(s,g):p==="dangerouslySetInnerHTML"?RS(s,g):p==="children"?Ol(s,g):mm(s,p,g,d)}switch(u){case"input":dp(s,o);break;case"textarea":wS(s,o);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?va(s,!!o.multiple,x,!1):_!==!!o.multiple&&(o.defaultValue!=null?va(s,!!o.multiple,o.defaultValue,!0):va(s,!!o.multiple,o.multiple?[]:"",!1))}s[ql]=o}catch(T){$t(t,t.return,T)}}break;case 6:if(Vi(e,t),or(t),i&4){if(t.stateNode===null)throw Error(me(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(T){$t(t,t.return,T)}}break;case 3:if(Vi(e,t),or(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(T){$t(t,t.return,T)}break;case 4:Vi(e,t),or(t);break;case 13:Vi(e,t),or(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Ym=Qt())),i&4&&R0(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Un=(d=Un)||p,Vi(e,t),Un=d):Vi(e,t),or(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(Le=t,p=t.child;p!==null;){for(g=Le=p;Le!==null;){switch(_=Le,x=_.child,_.tag){case 0:case 11:case 14:case 15:Ul(4,_,_.return);break;case 1:pa(_,_.return);var E=_.stateNode;if(typeof E.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){$t(i,n,T)}}break;case 5:pa(_,_.return);break;case 22:if(_.memoizedState!==null){L0(g);continue}}x!==null?(x.return=_,Le=x):L0(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=g.stateNode,f=g.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=CS("display",l))}catch(T){$t(t,t.return,T)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(T){$t(t,t.return,T)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Vi(e,t),or(t),i&4&&R0(t);break;case 21:break;default:Vi(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tM(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ol(s,""),i.flags&=-33);var o=A0(t);jp(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,u=A0(t);qp(t,u,l);break;default:throw Error(me(161))}}catch(f){$t(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iP(t,e,n){Le=t,rM(t)}function rM(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var s=Le,o=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||dc;if(!l){var u=s.alternate,f=u!==null&&u.memoizedState!==null||Un;u=dc;var d=Un;if(dc=l,(Un=f)&&!d)for(Le=s;Le!==null;)l=Le,f=l.child,l.tag===22&&l.memoizedState!==null?P0(s):f!==null?(f.return=l,Le=f):P0(s);for(;o!==null;)Le=o,rM(o),o=o.sibling;Le=s,dc=u,Un=d}C0(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,Le=o):C0(t)}}function C0(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Un||Df(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Un)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Yi(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&f0(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f0(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Hl(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Un||e.flags&512&&Xp(e)}catch(_){$t(e,e.return,_)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function L0(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function P0(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Df(4,e)}catch(f){$t(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(f){$t(e,s,f)}}var o=e.return;try{Xp(e)}catch(f){$t(e,o,f)}break;case 5:var l=e.return;try{Xp(e)}catch(f){$t(e,l,f)}}}catch(f){$t(e,e.return,f)}if(e===t){Le=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Le=u;break}Le=e.return}}var rP=Math.ceil,gf=Yr.ReactCurrentDispatcher,qm=Yr.ReactCurrentOwner,Fi=Yr.ReactCurrentBatchConfig,St=0,gn=null,nn=null,Mn=0,fi=0,ma=Us(0),un=0,Ql=null,po=0,If=0,jm=0,Dl=null,Yn=null,Ym=0,Da=1/0,Dr=null,_f=!1,Yp=null,Es=null,hc=!1,ms=null,vf=0,Il=0,$p=null,qc=-1,jc=0;function kn(){return St&6?Qt():qc!==-1?qc:qc=Qt()}function Ts(t){return t.mode&1?St&2&&Mn!==0?Mn&-Mn:HL.transition!==null?(jc===0&&(jc=HS()),jc):(t=wt,t!==0||(t=window.event,t=t===void 0?16:YS(t.type)),t):1}function tr(t,e,n,i){if(50<Il)throw Il=0,$p=null,Error(me(185));nu(t,n,i),(!(St&2)||t!==gn)&&(t===gn&&(!(St&2)&&(If|=n),un===4&&hs(t,Mn)),Jn(t,i),n===1&&St===0&&!(e.mode&1)&&(Da=Qt()+500,Pf&&Ds()))}function Jn(t,e){var n=t.callbackNode;H2(t,e);var i=ef(t,t===gn?Mn:0);if(i===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?kL(b0.bind(null,t)):hy(b0.bind(null,t)),FL(function(){!(St&6)&&Ds()}),n=null;else{switch(GS(i)){case 1:n=Sm;break;case 4:n=BS;break;case 16:n=Jc;break;case 536870912:n=kS;break;default:n=Jc}n=dM(n,sM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sM(t,e){if(qc=-1,jc=0,St&6)throw Error(me(327));var n=t.callbackNode;if(Ea()&&t.callbackNode!==n)return null;var i=ef(t,t===gn?Mn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xf(t,i);else{e=i;var s=St;St|=2;var o=aM();(gn!==t||Mn!==e)&&(Dr=null,Da=Qt()+500,ro(t,e));do try{aP();break}catch(u){oM(t,u)}while(1);Dm(),gf.current=o,St=s,nn!==null?e=0:(gn=null,Mn=0,e=un)}if(e!==0){if(e===2&&(s=Mp(t),s!==0&&(i=s,e=Kp(t,s))),e===1)throw n=Ql,ro(t,0),hs(t,i),Jn(t,Qt()),n;if(e===6)hs(t,i);else{if(s=t.current.alternate,!(i&30)&&!sP(s)&&(e=xf(t,i),e===2&&(o=Mp(t),o!==0&&(i=o,e=Kp(t,o))),e===1))throw n=Ql,ro(t,0),hs(t,i),Jn(t,Qt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Ys(t,Yn,Dr);break;case 3:if(hs(t,i),(i&130023424)===i&&(e=Ym+500-Qt(),10<e)){if(ef(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){kn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Pp(Ys.bind(null,t,Yn,Dr),e);break}Ys(t,Yn,Dr);break;case 4:if(hs(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var l=31-er(i);o=1<<l,l=e[l],l>s&&(s=l),i&=~o}if(i=s,i=Qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rP(i/1960))-i,10<i){t.timeoutHandle=Pp(Ys.bind(null,t,Yn,Dr),i);break}Ys(t,Yn,Dr);break;case 5:Ys(t,Yn,Dr);break;default:throw Error(me(329))}}}return Jn(t,Qt()),t.callbackNode===n?sM.bind(null,t):null}function Kp(t,e){var n=Dl;return t.current.memoizedState.isDehydrated&&(ro(t,e).flags|=256),t=xf(t,e),t!==2&&(e=Yn,Yn=n,e!==null&&Zp(e)),t}function Zp(t){Yn===null?Yn=t:Yn.push.apply(Yn,t)}function sP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!nr(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hs(t,e){for(e&=~jm,e&=~If,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),i=1<<n;t[n]=-1,e&=~i}}function b0(t){if(St&6)throw Error(me(327));Ea();var e=ef(t,0);if(!(e&1))return Jn(t,Qt()),null;var n=xf(t,e);if(t.tag!==0&&n===2){var i=Mp(t);i!==0&&(e=i,n=Kp(t,i))}if(n===1)throw n=Ql,ro(t,0),hs(t,e),Jn(t,Qt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ys(t,Yn,Dr),Jn(t,Qt()),null}function $m(t,e){var n=St;St|=1;try{return t(e)}finally{St=n,St===0&&(Da=Qt()+500,Pf&&Ds())}}function mo(t){ms!==null&&ms.tag===0&&!(St&6)&&Ea();var e=St;St|=1;var n=Fi.transition,i=wt;try{if(Fi.transition=null,wt=1,t)return t()}finally{wt=i,Fi.transition=n,St=e,!(St&6)&&Ds()}}function Km(){fi=ma.current,Ft(ma)}function ro(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NL(n)),nn!==null)for(n=nn.return;n!==null;){var i=n;switch(Pm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&of();break;case 3:ba(),Ft(Zn),Ft(Dn),Bm();break;case 5:zm(i);break;case 4:ba();break;case 13:Ft(Wt);break;case 19:Ft(Wt);break;case 10:Im(i.type._context);break;case 22:case 23:Km()}n=n.return}if(gn=t,nn=t=ws(t.current,null),Mn=fi=e,un=0,Ql=null,jm=If=po=0,Yn=Dl=null,to!==null){for(e=0;e<to.length;e++)if(n=to[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,i.next=l}n.pending=i}to=null}return t}function oM(t,e){do{var n=nn;try{if(Dm(),Vc.current=mf,pf){for(var i=Xt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}pf=!1}if(ho=0,mn=ln=Xt=null,bl=!1,$l=0,qm.current=null,n===null||n.return===null){un=1,Ql=e,nn=null;break}e:{var o=t,l=n.return,u=n,f=e;if(e=Mn,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,p=u,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=v0(l);if(x!==null){x.flags&=-257,x0(x,l,u,o,e),x.mode&1&&_0(o,d,e),e=x,f=d;var E=e.updateQueue;if(E===null){var T=new Set;T.add(f),e.updateQueue=T}else E.add(f);break e}else{if(!(e&1)){_0(o,d,e),Zm();break e}f=Error(me(426))}}else if(kt&&u.mode&1){var v=v0(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),x0(v,l,u,o,e),bm(Ua(f,u));break e}}o=f=Ua(f,u),un!==4&&(un=2),Dl===null?Dl=[o]:Dl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Vy(o,f,e);c0(o,h);break e;case 1:u=f;var y=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Es===null||!Es.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Wy(o,u,e);c0(o,w);break e}}o=o.return}while(o!==null)}uM(n)}catch(P){e=P,nn===n&&n!==null&&(nn=n=n.return);continue}break}while(1)}function aM(){var t=gf.current;return gf.current=mf,t===null?mf:t}function Zm(){(un===0||un===3||un===2)&&(un=4),gn===null||!(po&268435455)&&!(If&268435455)||hs(gn,Mn)}function xf(t,e){var n=St;St|=2;var i=aM();(gn!==t||Mn!==e)&&(Dr=null,ro(t,e));do try{oP();break}catch(s){oM(t,s)}while(1);if(Dm(),St=n,gf.current=i,nn!==null)throw Error(me(261));return gn=null,Mn=0,un}function oP(){for(;nn!==null;)lM(nn)}function aP(){for(;nn!==null&&!U2();)lM(nn)}function lM(t){var e=fM(t.alternate,t,fi);t.memoizedProps=t.pendingProps,e===null?uM(t):nn=e,qm.current=null}function uM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eP(n,e),n!==null){n.flags&=32767,nn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,nn=null;return}}else if(n=JL(n,e,fi),n!==null){nn=n;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=t}while(e!==null);un===0&&(un=5)}function Ys(t,e,n){var i=wt,s=Fi.transition;try{Fi.transition=null,wt=1,lP(t,e,n,i)}finally{Fi.transition=s,wt=i}return null}function lP(t,e,n,i){do Ea();while(ms!==null);if(St&6)throw Error(me(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(G2(t,o),t===gn&&(nn=gn=null,Mn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,dM(Jc,function(){return Ea(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fi.transition,Fi.transition=null;var l=wt;wt=1;var u=St;St|=4,qm.current=null,nP(t,n),iM(n,t),CL(Cp),tf=!!Rp,Cp=Rp=null,t.current=n,iP(n),D2(),St=u,wt=l,Fi.transition=o}else t.current=n;if(hc&&(hc=!1,ms=t,vf=s),o=t.pendingLanes,o===0&&(Es=null),F2(n.stateNode),Jn(t,Qt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(_f)throw _f=!1,t=Yp,Yp=null,t;return vf&1&&t.tag!==0&&Ea(),o=t.pendingLanes,o&1?t===$p?Il++:(Il=0,$p=t):Il=0,Ds(),null}function Ea(){if(ms!==null){var t=GS(vf),e=Fi.transition,n=wt;try{if(Fi.transition=null,wt=16>t?16:t,ms===null)var i=!1;else{if(t=ms,ms=null,vf=0,St&6)throw Error(me(331));var s=St;for(St|=4,Le=t.current;Le!==null;){var o=Le,l=o.child;if(Le.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Le=d;Le!==null;){var p=Le;switch(p.tag){case 0:case 11:case 15:Ul(8,p,o)}var g=p.child;if(g!==null)g.return=p,Le=g;else for(;Le!==null;){p=Le;var _=p.sibling,x=p.return;if(eM(p),p===d){Le=null;break}if(_!==null){_.return=x,Le=_;break}Le=x}}}var E=o.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}Le=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Le=l;else e:for(;Le!==null;){if(o=Le,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ul(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Le=h;break e}Le=o.return}}var y=t.current;for(Le=y;Le!==null;){l=Le;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,Le=S;else e:for(l=y;Le!==null;){if(u=Le,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Df(9,u)}}catch(P){$t(u,u.return,P)}if(u===l){Le=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,Le=w;break e}Le=u.return}}if(St=s,Ds(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(wf,t)}catch{}i=!0}return i}finally{wt=n,Fi.transition=e}}return!1}function U0(t,e,n){e=Ua(n,e),e=Vy(t,e,1),t=Ms(t,e,1),e=kn(),t!==null&&(nu(t,1,e),Jn(t,e))}function $t(t,e,n){if(t.tag===3)U0(t,t,n);else for(;e!==null;){if(e.tag===3){U0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Es===null||!Es.has(i))){t=Ua(n,t),t=Wy(e,t,1),e=Ms(e,t,1),t=kn(),e!==null&&(nu(e,1,t),Jn(e,t));break}}e=e.return}}function uP(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=kn(),t.pingedLanes|=t.suspendedLanes&n,gn===t&&(Mn&n)===n&&(un===4||un===3&&(Mn&130023424)===Mn&&500>Qt()-Ym?ro(t,0):jm|=n),Jn(t,e)}function cM(t,e){e===0&&(t.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var n=kn();t=Xr(t,e),t!==null&&(nu(t,e,n),Jn(t,n))}function cP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cM(t,n)}function fP(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),cM(t,n)}var fM;fM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kn=!1,QL(t,e,n);Kn=!!(t.flags&131072)}else Kn=!1,kt&&e.flags&1048576&&py(e,uf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xc(t,e),t=e.pendingProps;var s=Ca(e,Dn.current);Ma(e,n),s=Hm(null,e,i,t,s,n);var o=Gm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(o=!0,af(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fm(e),s.updater=bf,e.stateNode=s,s._reactInternals=e,Op(e,i,t,n),e=kp(null,e,i,!0,o,n)):(e.tag=0,kt&&o&&Lm(e),zn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xc(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=hP(i),t=Yi(i,t),s){case 0:e=Bp(null,e,i,t,n);break e;case 1:e=M0(null,e,i,t,n);break e;case 11:e=S0(null,e,i,t,n);break e;case 14:e=y0(null,e,i,Yi(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),Bp(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),M0(t,e,i,s,n);case 3:e:{if(Yy(e),t===null)throw Error(me(387));i=e.pendingProps,o=e.memoizedState,s=o.element,vy(t,e),df(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Ua(Error(me(423)),e),e=E0(t,e,i,n,s);break e}else if(i!==s){s=Ua(Error(me(424)),e),e=E0(t,e,i,n,s);break e}else for(di=ys(e.stateNode.containerInfo.firstChild),hi=e,kt=!0,Ki=null,n=My(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(La(),i===s){e=qr(t,e,n);break e}zn(t,e,i,n)}e=e.child}return e;case 5:return Ey(e),t===null&&Ip(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,Lp(i,s)?l=null:o!==null&&Lp(i,o)&&(e.flags|=32),jy(t,e),zn(t,e,l,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return $y(t,e,n);case 4:return Om(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Pa(e,null,i,n):zn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),S0(t,e,i,s,n);case 7:return zn(t,e,e.pendingProps,n),e.child;case 8:return zn(t,e,e.pendingProps.children,n),e.child;case 12:return zn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,l=s.value,Ut(cf,i._currentValue),i._currentValue=l,o!==null)if(nr(o.value,l)){if(o.children===s.children&&!Zn.current){e=qr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=kr(-1,n&-n),f.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?f.next=f:(f.next=p.next,p.next=f),d.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),Np(o.return,n,e),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(me(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Np(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}zn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,Ma(e,n),s=Oi(s),i=i(s),e.flags|=1,zn(t,e,i,n),e.child;case 14:return i=e.type,s=Yi(i,e.pendingProps),s=Yi(i.type,s),y0(t,e,i,s,n);case 15:return Xy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),Xc(t,e),e.tag=1,Qn(i)?(t=!0,af(e)):t=!1,Ma(e,n),Sy(e,i,s),Op(e,i,s,n),kp(null,e,i,!0,t,n);case 19:return Ky(t,e,n);case 22:return qy(t,e,n)}throw Error(me(156,e.tag))};function dM(t,e){return zS(t,e)}function dP(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(t,e,n,i){return new dP(t,e,n,i)}function Qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hP(t){if(typeof t=="function")return Qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_m)return 11;if(t===vm)return 14}return 2}function ws(t,e){var n=t.alternate;return n===null?(n=Ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yc(t,e,n,i,s,o){var l=2;if(i=t,typeof t=="function")Qm(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case sa:return so(n.children,s,o,e);case gm:l=8,s|=8;break;case ap:return t=Ni(12,n,e,s|2),t.elementType=ap,t.lanes=o,t;case lp:return t=Ni(13,n,e,s),t.elementType=lp,t.lanes=o,t;case up:return t=Ni(19,n,e,s),t.elementType=up,t.lanes=o,t;case yS:return Nf(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xS:l=10;break e;case SS:l=9;break e;case _m:l=11;break e;case vm:l=14;break e;case cs:l=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Ni(l,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function so(t,e,n,i){return t=Ni(7,t,i,e),t.lanes=n,t}function Nf(t,e,n,i){return t=Ni(22,t,i,e),t.elementType=yS,t.lanes=n,t.stateNode={isHidden:!1},t}function Rh(t,e,n){return t=Ni(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pP(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lh(0),this.expirationTimes=lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lh(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Jm(t,e,n,i,s,o,l,u,f){return t=new pP(t,e,n,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ni(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fm(o),t}function mP(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ra,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function hM(t){if(!t)return Ls;t=t._reactInternals;e:{if(xo(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(Qn(n))return dy(t,n,e)}return e}function pM(t,e,n,i,s,o,l,u,f){return t=Jm(n,i,!0,t,s,o,l,u,f),t.context=hM(null),n=t.current,i=kn(),s=Ts(n),o=kr(i,s),o.callback=e??null,Ms(n,o,s),t.current.lanes=s,nu(t,s,i),Jn(t,i),t}function Ff(t,e,n,i){var s=e.current,o=kn(),l=Ts(s);return n=hM(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ms(s,e,l),t!==null&&(tr(t,s,l,o),Gc(t,s,l)),l}function Sf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eg(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function gP(){return null}var mM=typeof reportError=="function"?reportError:function(t){console.error(t)};function tg(t){this._internalRoot=t}Of.prototype.render=tg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));Ff(t,e,null,null)};Of.prototype.unmount=tg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mo(function(){Ff(null,t,null,null)}),e[Wr]=null}};function Of(t){this._internalRoot=t}Of.prototype.unstable_scheduleHydration=function(t){if(t){var e=XS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ds.length&&e!==0&&e<ds[n].priority;n++);ds.splice(n,0,t),n===0&&jS(t)}};function ng(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function I0(){}function _P(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=Sf(l);o.call(d)}}var l=pM(e,i,t,0,null,!1,!1,"",I0);return t._reactRootContainer=l,t[Wr]=l.current,Wl(t.nodeType===8?t.parentNode:t),mo(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var d=Sf(f);u.call(d)}}var f=Jm(t,0,!1,null,null,!1,!1,"",I0);return t._reactRootContainer=f,t[Wr]=f.current,Wl(t.nodeType===8?t.parentNode:t),mo(function(){Ff(e,f,n,i)}),f}function Bf(t,e,n,i,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var u=s;s=function(){var f=Sf(l);u.call(f)}}Ff(e,l,t,s)}else l=_P(n,e,t,s,i);return Sf(l)}VS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=El(e.pendingLanes);n!==0&&(ym(e,n|1),Jn(e,Qt()),!(St&6)&&(Da=Qt()+500,Ds()))}break;case 13:mo(function(){var i=Xr(t,1);if(i!==null){var s=kn();tr(i,t,1,s)}}),eg(t,1)}};Mm=function(t){if(t.tag===13){var e=Xr(t,134217728);if(e!==null){var n=kn();tr(e,t,134217728,n)}eg(t,134217728)}};WS=function(t){if(t.tag===13){var e=Ts(t),n=Xr(t,e);if(n!==null){var i=kn();tr(n,t,e,i)}eg(t,e)}};XS=function(){return wt};qS=function(t,e){var n=wt;try{return wt=t,e()}finally{wt=n}};xp=function(t,e,n){switch(e){case"input":if(dp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Lf(i);if(!s)throw Error(me(90));ES(i),dp(i,s)}}}break;case"textarea":wS(t,n);break;case"select":e=n.value,e!=null&&va(t,!!n.multiple,e,!1)}};US=$m;DS=mo;var vP={usingClientEntryPoint:!1,Events:[ru,ua,Lf,PS,bS,$m]},gl={findFiberByHostInstance:eo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xP={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=FS(t),t===null?null:t.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||gP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{wf=pc.inject(xP),cr=pc}catch{}}vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vP;vi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ng(e))throw Error(me(200));return mP(t,e,null,n)};vi.createRoot=function(t,e){if(!ng(t))throw Error(me(299));var n=!1,i="",s=mM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Jm(t,1,!1,null,null,n,!1,i,s),t[Wr]=e.current,Wl(t.nodeType===8?t.parentNode:t),new tg(e)};vi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=FS(e),t=t===null?null:t.stateNode,t};vi.flushSync=function(t){return mo(t)};vi.hydrate=function(t,e,n){if(!zf(e))throw Error(me(200));return Bf(null,t,e,!0,n)};vi.hydrateRoot=function(t,e,n){if(!ng(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",l=mM;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=pM(e,null,t,1,n??null,s,!1,o,l),t[Wr]=e.current,Wl(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Of(e)};vi.render=function(t,e,n){if(!zf(e))throw Error(me(200));return Bf(null,t,e,!1,n)};vi.unmountComponentAtNode=function(t){if(!zf(t))throw Error(me(40));return t._reactRootContainer?(mo(function(){Bf(null,null,t,!1,function(){t._reactRootContainer=null,t[Wr]=null})}),!0):!1};vi.unstable_batchedUpdates=$m;vi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zf(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Bf(t,e,n,!1,i)};vi.version="18.2.0-next-9e3b772b8-20220608";function gM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gM)}catch(t){console.error(t)}}gM(),pS.exports=vi;var SP=pS.exports,N0=SP;sp.createRoot=N0.createRoot,sp.hydrateRoot=N0.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ig="154",yP=0,F0=1,MP=2,_M=1,EP=2,Ur=3,Ps=0,ei=1,Nr=2,As=0,Ta=1,O0=2,z0=3,B0=4,TP=5,ia=100,wP=101,AP=102,k0=103,H0=104,RP=200,CP=201,LP=202,PP=203,vM=204,xM=205,bP=206,UP=207,DP=208,IP=209,NP=210,FP=0,OP=1,zP=2,Qp=3,BP=4,kP=5,HP=6,GP=7,SM=0,VP=1,WP=2,Hr=0,XP=1,qP=2,jP=3,YP=4,$P=5,yM=300,Ia=301,Na=302,Jp=303,em=304,kf=306,tm=1e3,Qi=1001,nm=1002,Bn=1003,G0=1004,Lh=1005,Di=1006,KP=1007,Jl=1008,Rs=1009,ZP=1010,QP=1011,rg=1012,MM=1013,gs=1014,_s=1015,eu=1016,EM=1017,TM=1018,oo=1020,JP=1021,Ji=1023,eb=1024,tb=1025,ao=1026,Fa=1027,nb=1028,wM=1029,ib=1030,AM=1031,RM=1033,Ph=33776,bh=33777,Uh=33778,Dh=33779,V0=35840,W0=35841,X0=35842,q0=35843,rb=36196,j0=37492,Y0=37496,$0=37808,K0=37809,Z0=37810,Q0=37811,J0=37812,ex=37813,tx=37814,nx=37815,ix=37816,rx=37817,sx=37818,ox=37819,ax=37820,lx=37821,Ih=36492,sb=36283,ux=36284,cx=36285,fx=36286,CM=3e3,lo=3001,ob=3200,ab=3201,lb=0,ub=1,uo="",ot="srgb",dr="srgb-linear",LM="display-p3",Nh=7680,cb=519,fb=512,db=513,hb=514,pb=515,mb=516,gb=517,_b=518,vb=519,dx=35044,hx="300 es",im=1035,zr=2e3,yf=2001;class Ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,rm=180/Math.PI;function ou(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function $n(t,e,n){return Math.max(e,Math.min(n,t))}function xb(t,e){return(t%e+e)%e}function Oh(t,e,n){return(1-n)*t+n*e}function px(t){return(t&t-1)===0&&t!==0}function sm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*s+e.x,this.y=o*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,i,s,o,l,u,f,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d)}set(e,n,i,s,o,l,u,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=n,p[4]=o,p[5]=f,p[6]=i,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],p=i[4],g=i[7],_=i[2],x=i[5],E=i[8],T=s[0],v=s[3],h=s[6],y=s[1],S=s[4],w=s[7],P=s[2],I=s[5],D=s[8];return o[0]=l*T+u*y+f*P,o[3]=l*v+u*S+f*I,o[6]=l*h+u*w+f*D,o[1]=d*T+p*y+g*P,o[4]=d*v+p*S+g*I,o[7]=d*h+p*w+g*D,o[2]=_*T+x*y+E*P,o[5]=_*v+x*S+E*I,o[8]=_*h+x*w+E*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return n*l*p-n*u*d-i*o*p+i*u*f+s*o*d-s*l*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=p*l-u*d,_=u*f-p*o,x=d*o-l*f,E=n*g+i*_+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(s*d-p*i)*T,e[2]=(u*i-s*l)*T,e[3]=_*T,e[4]=(p*n-s*f)*T,e[5]=(s*o-u*n)*T,e[6]=x*T,e[7]=(i*f-d*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,o,l,u){const f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(zh.makeScale(e,n)),this}rotate(e){return this.premultiply(zh.makeRotation(-e)),this}translate(e,n){return this.premultiply(zh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new ct;function PM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const mx={};function Nl(t){t in mx||(mx[t]=!0,console.warn(t))}function wa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Sb=new ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yb=new ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Mb(t){return t.convertSRGBToLinear().applyMatrix3(yb)}function Eb(t){return t.applyMatrix3(Sb).convertLinearToSRGB()}const Tb={[dr]:t=>t,[ot]:t=>t.convertSRGBToLinear(),[LM]:Mb},wb={[dr]:t=>t,[ot]:t=>t.convertLinearToSRGB(),[LM]:Eb},Wi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return dr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Tb[e],s=wb[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ho;class bM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=Mf("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=wa(o[l]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wa(n[i]/255)*255):n[i]=wa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ab=0;class UM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=ou(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(kh(s[l].image)):o.push(kh(s[l]))}else o=kh(s);i.url=o}return n||(e.images[this.uuid]=i),i}}function kh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rb=0;class pi extends Ha{constructor(e=pi.DEFAULT_IMAGE,n=pi.DEFAULT_MAPPING,i=Qi,s=Qi,o=Di,l=Jl,u=Ji,f=Rs,d=pi.DEFAULT_ANISOTROPY,p=uo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ou(),this.name="",this.source=new UM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===lo?ot:uo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tm:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tm:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?lo:CM}set encoding(e){Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lo?ot:uo}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=yM;pi.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,n=0,i=0,s=1){yn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*s+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,o;const f=e.elements,d=f[0],p=f[4],g=f[8],_=f[1],x=f[5],E=f[9],T=f[2],v=f[6],h=f[10];if(Math.abs(p-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+v)<.1&&Math.abs(d+x+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,w=(x+1)/2,P=(h+1)/2,I=(p+_)/4,D=(g+T)/4,H=(E+v)/4;return S>w&&S>P?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=I/i,o=D/i):w>P?w<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),i=I/s,o=H/s):P<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(P),i=D/o,s=H/o),this.set(i,s,o,n),this}let y=Math.sqrt((v-E)*(v-E)+(g-T)*(g-T)+(_-p)*(_-p));return Math.abs(y)<.001&&(y=1),this.x=(v-E)/y,this.y=(g-T)/y,this.z=(_-p)/y,this.w=Math.acos((d+x+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class go extends Ha{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yn(0,0,e,n),this.scissorTest=!1,this.viewport=new yn(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Nl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lo?ot:uo),this.texture=new pi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new UM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DM extends pi{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cb extends pi{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,o,l,u){let f=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3];const _=o[l+0],x=o[l+1],E=o[l+2],T=o[l+3];if(u===0){e[n+0]=f,e[n+1]=d,e[n+2]=p,e[n+3]=g;return}if(u===1){e[n+0]=_,e[n+1]=x,e[n+2]=E,e[n+3]=T;return}if(g!==T||f!==_||d!==x||p!==E){let v=1-u;const h=f*_+d*x+p*E+g*T,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const P=Math.sqrt(S),I=Math.atan2(P,h*y);v=Math.sin(v*I)/P,u=Math.sin(u*I)/P}const w=u*y;if(f=f*v+_*w,d=d*v+x*w,p=p*v+E*w,g=g*v+T*w,v===1-u){const P=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=P,d*=P,p*=P,g*=P}}e[n]=f,e[n+1]=d,e[n+2]=p,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,s,o,l){const u=i[s],f=i[s+1],d=i[s+2],p=i[s+3],g=o[l],_=o[l+1],x=o[l+2],E=o[l+3];return e[n]=u*E+p*g+f*x-d*_,e[n+1]=f*E+p*_+d*g-u*x,e[n+2]=d*E+p*x+u*_-f*g,e[n+3]=p*E-u*g-f*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(s/2),g=u(o/2),_=f(i/2),x=f(s/2),E=f(o/2);switch(l){case"XYZ":this._x=_*p*g+d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g-_*x*E;break;case"YXZ":this._x=_*p*g+d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g+_*x*E;break;case"ZXY":this._x=_*p*g-d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g-_*x*E;break;case"ZYX":this._x=_*p*g-d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g+_*x*E;break;case"YZX":this._x=_*p*g+d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g-_*x*E;break;case"XZY":this._x=_*p*g-d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],u=n[5],f=n[9],d=n[2],p=n[6],g=n[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-f)*x,this._y=(o-d)*x,this._z=(l-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(p-f)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(o-d)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(l-s)/x,this._x=(o+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,o=e._z,l=e._w,u=n._x,f=n._y,d=n._z,p=n._w;return this._x=i*p+l*u+s*d-o*f,this._y=s*p+l*f+o*u-i*d,this._z=o*p+l*d+i*f-s*u,this._w=l*p-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-n;return this._w=x*l+n*this._w,this._x=x*i+n*this._x,this._y=x*s+n*this._y,this._z=x*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),g=Math.sin((1-n)*p)/d,_=Math.sin(n*p)/d;return this._w=l*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(o),i*Math.cos(o),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*s,this.y=o[1]*n+o[4]*i+o[7]*s,this.z=o[2]*n+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,o=e.x,l=e.y,u=e.z,f=e.w,d=f*n+l*s-u*i,p=f*i+u*n-o*s,g=f*s+o*i-l*n,_=-o*n-l*i-u*s;return this.x=d*f+_*-o+p*-u-g*-l,this.y=p*f+_*-l+g*-o-d*-u,this.z=g*f+_*-u+d*-l-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s,this.y=o[1]*n+o[5]*i+o[9]*s,this.z=o[2]*n+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,o=e.z,l=n.x,u=n.y,f=n.z;return this.x=s*f-o*u,this.y=o*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new Z,gx=new au;class lu{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ar.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ar.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ar.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const o=s.attributes.position;for(let l=0,u=o.count;l<u;l++)Ar.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Ar)}else s.boundingBox===null&&s.computeBoundingBox(),Go.copy(s.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),gc.subVectors(this.max,_l),Vo.subVectors(e.a,_l),Wo.subVectors(e.b,_l),Xo.subVectors(e.c,_l),os.subVectors(Wo,Vo),as.subVectors(Xo,Wo),Vs.subVectors(Vo,Xo);let n=[0,-os.z,os.y,0,-as.z,as.y,0,-Vs.z,Vs.y,os.z,0,-os.x,as.z,0,-as.x,Vs.z,0,-Vs.x,-os.y,os.x,0,-as.y,as.x,0,-Vs.y,Vs.x,0];return!Gh(n,Vo,Wo,Xo,gc)||(n=[1,0,0,0,1,0,0,0,1],!Gh(n,Vo,Wo,Xo,gc))?!1:(_c.crossVectors(os,as),n=[_c.x,_c.y,_c.z],Gh(n,Vo,Wo,Xo,gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ar=new Z,Go=new lu,Vo=new Z,Wo=new Z,Xo=new Z,os=new Z,as=new Z,Vs=new Z,_l=new Z,gc=new Z,_c=new Z,Ws=new Z;function Gh(t,e,n,i,s){for(let o=0,l=t.length-3;o<=l;o+=3){Ws.fromArray(t,o);const u=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),f=e.dot(Ws),d=n.dot(Ws),p=i.dot(Ws);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const Lb=new lu,vl=new Z,Vh=new Z;class sg{constructor(e=new Z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Lb.setFromPoints(e).getCenter(i);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Vh)),this.expandByPoint(vl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rr=new Z,Wh=new Z,vc=new Z,ls=new Z,Xh=new Z,xc=new Z,qh=new Z;class Pb{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,n),Rr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Wh.copy(e).add(n).multiplyScalar(.5),vc.copy(n).sub(e).normalize(),ls.copy(this.origin).sub(Wh);const o=e.distanceTo(n)*.5,l=-this.direction.dot(vc),u=ls.dot(this.direction),f=-ls.dot(vc),d=ls.lengthSq(),p=Math.abs(1-l*l);let g,_,x,E;if(p>0)if(g=l*f-u,_=l*u-f,E=o*p,g>=0)if(_>=-E)if(_<=E){const T=1/p;g*=T,_*=T,x=g*(g+l*_+2*u)+_*(l*g+_+2*f)+d}else _=o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;else _=-o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;else _<=-E?(g=Math.max(0,-(-l*o+u)),_=g>0?-o:Math.min(Math.max(-o,-f),o),x=-g*g+_*(_+2*f)+d):_<=E?(g=0,_=Math.min(Math.max(-o,-f),o),x=_*(_+2*f)+d):(g=Math.max(0,-(l*o+u)),_=g>0?o:Math.min(Math.max(-o,-f),o),x=-g*g+_*(_+2*f)+d);else _=l>0?-o:o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Wh).addScaledVector(vc,_),x}intersectSphere(e,n){Rr.subVectors(e.center,this.origin);const i=Rr.dot(this.direction),s=Rr.dot(Rr)-i*i,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,o,l,u,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,l=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,l=(e.min.y-_.y)*p),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,n,i,s,o){Xh.subVectors(n,e),xc.subVectors(i,e),qh.crossVectors(Xh,xc);let l=this.direction.dot(qh),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;ls.subVectors(this.origin,e);const f=u*this.direction.dot(xc.crossVectors(ls,xc));if(f<0)return null;const d=u*this.direction.dot(Xh.cross(ls));if(d<0||f+d>l)return null;const p=-u*ls.dot(qh);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v)}set(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=o,h[5]=l,h[9]=u,h[13]=f,h[2]=d,h[6]=p,h[10]=g,h[14]=_,h[3]=x,h[7]=E,h[11]=T,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/qo.setFromMatrixColumn(e,0).length(),o=1/qo.setFromMatrixColumn(e,1).length(),l=1/qo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*p,x=l*g,E=u*p,T=u*g;n[0]=f*p,n[4]=-f*g,n[8]=d,n[1]=x+E*d,n[5]=_-T*d,n[9]=-u*f,n[2]=T-_*d,n[6]=E+x*d,n[10]=l*f}else if(e.order==="YXZ"){const _=f*p,x=f*g,E=d*p,T=d*g;n[0]=_+T*u,n[4]=E*u-x,n[8]=l*d,n[1]=l*g,n[5]=l*p,n[9]=-u,n[2]=x*u-E,n[6]=T+_*u,n[10]=l*f}else if(e.order==="ZXY"){const _=f*p,x=f*g,E=d*p,T=d*g;n[0]=_-T*u,n[4]=-l*g,n[8]=E+x*u,n[1]=x+E*u,n[5]=l*p,n[9]=T-_*u,n[2]=-l*d,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const _=l*p,x=l*g,E=u*p,T=u*g;n[0]=f*p,n[4]=E*d-x,n[8]=_*d+T,n[1]=f*g,n[5]=T*d+_,n[9]=x*d-E,n[2]=-d,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const _=l*f,x=l*d,E=u*f,T=u*d;n[0]=f*p,n[4]=T-_*g,n[8]=E*g+x,n[1]=g,n[5]=l*p,n[9]=-u*p,n[2]=-d*p,n[6]=x*g+E,n[10]=_-T*g}else if(e.order==="XZY"){const _=l*f,x=l*d,E=u*f,T=u*d;n[0]=f*p,n[4]=-g,n[8]=d*p,n[1]=_*g+T,n[5]=l*p,n[9]=x*g-E,n[2]=E*g-x,n[6]=u*p,n[10]=T*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bb,e,Ub)}lookAt(e,n,i){const s=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),us.crossVectors(i,ui),us.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),us.crossVectors(i,ui)),us.normalize(),Sc.crossVectors(ui,us),s[0]=us.x,s[4]=Sc.x,s[8]=ui.x,s[1]=us.y,s[5]=Sc.y,s[9]=ui.y,s[2]=us.z,s[6]=Sc.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],p=i[1],g=i[5],_=i[9],x=i[13],E=i[2],T=i[6],v=i[10],h=i[14],y=i[3],S=i[7],w=i[11],P=i[15],I=s[0],D=s[4],H=s[8],C=s[12],U=s[1],oe=s[5],de=s[9],j=s[13],J=s[2],ie=s[6],fe=s[10],ee=s[14],B=s[3],te=s[7],Y=s[11],V=s[15];return o[0]=l*I+u*U+f*J+d*B,o[4]=l*D+u*oe+f*ie+d*te,o[8]=l*H+u*de+f*fe+d*Y,o[12]=l*C+u*j+f*ee+d*V,o[1]=p*I+g*U+_*J+x*B,o[5]=p*D+g*oe+_*ie+x*te,o[9]=p*H+g*de+_*fe+x*Y,o[13]=p*C+g*j+_*ee+x*V,o[2]=E*I+T*U+v*J+h*B,o[6]=E*D+T*oe+v*ie+h*te,o[10]=E*H+T*de+v*fe+h*Y,o[14]=E*C+T*j+v*ee+h*V,o[3]=y*I+S*U+w*J+P*B,o[7]=y*D+S*oe+w*ie+P*te,o[11]=y*H+S*de+w*fe+P*Y,o[15]=y*C+S*j+w*ee+P*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],o=e[12],l=e[1],u=e[5],f=e[9],d=e[13],p=e[2],g=e[6],_=e[10],x=e[14],E=e[3],T=e[7],v=e[11],h=e[15];return E*(+o*f*g-s*d*g-o*u*_+i*d*_+s*u*x-i*f*x)+T*(+n*f*x-n*d*_+o*l*_-s*l*x+s*d*p-o*f*p)+v*(+n*d*g-n*u*x-o*l*g+i*l*x+o*u*p-i*d*p)+h*(-s*u*p-n*f*g+n*u*_+s*l*g-i*l*_+i*f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=e[9],_=e[10],x=e[11],E=e[12],T=e[13],v=e[14],h=e[15],y=g*v*d-T*_*d+T*f*x-u*v*x-g*f*h+u*_*h,S=E*_*d-p*v*d-E*f*x+l*v*x+p*f*h-l*_*h,w=p*T*d-E*g*d+E*u*x-l*T*x-p*u*h+l*g*h,P=E*g*f-p*T*f-E*u*_+l*T*_+p*u*v-l*g*v,I=n*y+i*S+s*w+o*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=y*D,e[1]=(T*_*o-g*v*o-T*s*x+i*v*x+g*s*h-i*_*h)*D,e[2]=(u*v*o-T*f*o+T*s*d-i*v*d-u*s*h+i*f*h)*D,e[3]=(g*f*o-u*_*o-g*s*d+i*_*d+u*s*x-i*f*x)*D,e[4]=S*D,e[5]=(p*v*o-E*_*o+E*s*x-n*v*x-p*s*h+n*_*h)*D,e[6]=(E*f*o-l*v*o-E*s*d+n*v*d+l*s*h-n*f*h)*D,e[7]=(l*_*o-p*f*o+p*s*d-n*_*d-l*s*x+n*f*x)*D,e[8]=w*D,e[9]=(E*g*o-p*T*o-E*i*x+n*T*x+p*i*h-n*g*h)*D,e[10]=(l*T*o-E*u*o+E*i*d-n*T*d-l*i*h+n*u*h)*D,e[11]=(p*u*o-l*g*o-p*i*d+n*g*d+l*i*x-n*u*x)*D,e[12]=P*D,e[13]=(p*T*s-E*g*s+E*i*_-n*T*_-p*i*v+n*g*v)*D,e[14]=(E*u*s-l*T*s-E*i*f+n*T*f+l*i*v-n*u*v)*D,e[15]=(l*g*s-p*u*s+p*i*f-n*g*f-l*i*_+n*u*_)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,o=e.z;return n[0]*=i,n[4]*=s,n[8]*=o,n[1]*=i,n[5]*=s,n[9]*=o,n[2]*=i,n[6]*=s,n[10]*=o,n[3]*=i,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),o=1-i,l=e.x,u=e.y,f=e.z,d=o*l,p=o*u;return this.set(d*l+i,d*u-s*f,d*f+s*u,0,d*u+s*f,p*u+i,p*f-s*l,0,d*f-s*u,p*f+s*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,o,l){return this.set(1,i,o,0,e,1,l,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,o=n._x,l=n._y,u=n._z,f=n._w,d=o+o,p=l+l,g=u+u,_=o*d,x=o*p,E=o*g,T=l*p,v=l*g,h=u*g,y=f*d,S=f*p,w=f*g,P=i.x,I=i.y,D=i.z;return s[0]=(1-(T+h))*P,s[1]=(x+w)*P,s[2]=(E-S)*P,s[3]=0,s[4]=(x-w)*I,s[5]=(1-(_+h))*I,s[6]=(v+y)*I,s[7]=0,s[8]=(E+S)*D,s[9]=(v-y)*D,s[10]=(1-(_+T))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let o=qo.set(s[0],s[1],s[2]).length();const l=qo.set(s[4],s[5],s[6]).length(),u=qo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Xi.copy(this);const d=1/o,p=1/l,g=1/u;return Xi.elements[0]*=d,Xi.elements[1]*=d,Xi.elements[2]*=d,Xi.elements[4]*=p,Xi.elements[5]*=p,Xi.elements[6]*=p,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),i.x=o,i.y=l,i.z=u,this}makePerspective(e,n,i,s,o,l,u=zr){const f=this.elements,d=2*o/(n-e),p=2*o/(i-s),g=(n+e)/(n-e),_=(i+s)/(i-s);let x,E;if(u===zr)x=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(u===yf)x=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,o,l,u=zr){const f=this.elements,d=1/(n-e),p=1/(i-s),g=1/(l-o),_=(n+e)*d,x=(i+s)*p;let E,T;if(u===zr)E=(l+o)*g,T=-2*g;else if(u===yf)E=o*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=T,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qo=new Z,Xi=new En,bb=new Z(0,0,0),Ub=new Z(1,1,1),us=new Z,Sc=new Z,ui=new Z,_x=new En,vx=new au;class Hf{constructor(e=0,n=0,i=0,s=Hf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],f=s[1],d=s[5],p=s[9],g=s[2],_=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin($n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin($n(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-$n(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-$n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _x.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_x,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vx.setFromEuler(this),this.setFromQuaternion(vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hf.DEFAULT_ORDER="XYZ";class IM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Db=0;const xx=new Z,jo=new au,Cr=new En,yc=new Z,xl=new Z,Ib=new Z,Nb=new au,Sx=new Z(1,0,0),yx=new Z(0,1,0),Mx=new Z(0,0,1),Fb={type:"added"},Ex={type:"removed"};class mi extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new Z,n=new Hf,i=new au,s=new Z(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new En},normalMatrix:{value:new ct}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new IM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jo.setFromAxisAngle(e,n),this.quaternion.multiply(jo),this}rotateOnWorldAxis(e,n){return jo.setFromAxisAngle(e,n),this.quaternion.premultiply(jo),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(yx,e)}rotateZ(e){return this.rotateOnAxis(Mx,e)}translateOnAxis(e,n){return xx.copy(e).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(yx,e)}translateZ(e){return this.translateOnAxis(Mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yc.copy(e):yc.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(xl,yc,this.up):Cr.lookAt(yc,xl,this.up),this.quaternion.setFromRotationMatrix(Cr),s&&(Cr.extractRotation(s.matrixWorld),jo.setFromRotationMatrix(Cr),this.quaternion.premultiply(jo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ex)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ex)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,o=this.children.length;s<o;s++){const l=this.children[s].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,Ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,Nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++){const u=s[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];o(e.shapes,g)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(e.materials,this.material[f]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),g=l(e.shapes),_=l(e.skeletons),x=l(e.animations),E=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=s,i;function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mi.DEFAULT_UP=new Z(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new Z,Lr=new Z,jh=new Z,Pr=new Z,Yo=new Z,$o=new Z,Tx=new Z,Yh=new Z,$h=new Z,Kh=new Z;let Mc=!1;class Zi{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),qi.subVectors(e,n),s.cross(qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,n,i,s,o){qi.subVectors(s,n),Lr.subVectors(i,n),jh.subVectors(e,n);const l=qi.dot(qi),u=qi.dot(Lr),f=qi.dot(jh),d=Lr.dot(Lr),p=Lr.dot(jh),g=l*d-u*u;if(g===0)return o.set(-2,-1,-1);const _=1/g,x=(d*f-u*p)*_,E=(l*p-u*f)*_;return o.set(1-x-E,E,x)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Pr),Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getUV(e,n,i,s,o,l,u,f){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),this.getInterpolation(e,n,i,s,o,l,u,f)}static getInterpolation(e,n,i,s,o,l,u,f){return this.getBarycoord(e,n,i,s,Pr),f.setScalar(0),f.addScaledVector(o,Pr.x),f.addScaledVector(l,Pr.y),f.addScaledVector(u,Pr.z),f}static isFrontFacing(e,n,i,s){return qi.subVectors(i,n),Lr.subVectors(e,n),qi.cross(Lr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),qi.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,o){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),Zi.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}getInterpolation(e,n,i,s,o){return Zi.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,o=this.c;let l,u;Yo.subVectors(s,i),$o.subVectors(o,i),Yh.subVectors(e,i);const f=Yo.dot(Yh),d=$o.dot(Yh);if(f<=0&&d<=0)return n.copy(i);$h.subVectors(e,s);const p=Yo.dot($h),g=$o.dot($h);if(p>=0&&g<=p)return n.copy(s);const _=f*g-p*d;if(_<=0&&f>=0&&p<=0)return l=f/(f-p),n.copy(i).addScaledVector(Yo,l);Kh.subVectors(e,o);const x=Yo.dot(Kh),E=$o.dot(Kh);if(E>=0&&x<=E)return n.copy(o);const T=x*d-f*E;if(T<=0&&d>=0&&E<=0)return u=d/(d-E),n.copy(i).addScaledVector($o,u);const v=p*E-x*g;if(v<=0&&g-p>=0&&x-E>=0)return Tx.subVectors(o,s),u=(g-p)/(g-p+(x-E)),n.copy(s).addScaledVector(Tx,u);const h=1/(v+T+_);return l=T*h,u=_*h,n.copy(i).addScaledVector(Yo,l).addScaledVector($o,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ob=0;class Gf extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ou(),this.name="",this.type="Material",this.blending=Ta,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vM,this.blendDst=xM,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nh,this.stencilZFail=Nh,this.stencilZPass=Nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==Ps&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(n){const o=s(e.textures),l=s(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const NM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Zh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class bt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Wi.workingColorSpace){return this.r=e,this.g=n,this.b=i,Wi.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Wi.workingColorSpace){if(e=xb(e,1),n=$n(n,0,1),i=$n(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Zh(l,o,e+1/3),this.g=Zh(l,o,e),this.b=Zh(l,o,e-1/3)}return Wi.toWorkingColorSpace(this,s),this}setStyle(e,n=ot){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ot){const i=NM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Bh(e.r),this.g=Bh(e.g),this.b=Bh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Wi.fromWorkingColorSpace(bn.copy(this),e),Math.round($n(bn.r*255,0,255))*65536+Math.round($n(bn.g*255,0,255))*256+Math.round($n(bn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Wi.workingColorSpace){Wi.fromWorkingColorSpace(bn.copy(this),n);const i=bn.r,s=bn.g,o=bn.b,l=Math.max(i,s,o),u=Math.min(i,s,o);let f,d;const p=(u+l)/2;if(u===l)f=0,d=0;else{const g=l-u;switch(d=p<=.5?g/(l+u):g/(2-l-u),l){case i:f=(s-o)/g+(s<o?6:0);break;case s:f=(o-i)/g+2;break;case o:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,n=Wi.workingColorSpace){return Wi.fromWorkingColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ot){Wi.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,i=bn.g,s=bn.b;return e!==ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),ji.h+=e,ji.s+=n,ji.l+=i,this.setHSL(ji.h,ji.s,ji.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Ec);const i=Oh(ji.h,Ec.h,n),s=Oh(ji.s,Ec.s,n),o=Oh(ji.l,Ec.l,n);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*s,this.g=o[1]*n+o[4]*i+o[7]*s,this.b=o[2]*n+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new bt;bt.NAMES=NM;class og extends Gf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=SM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new Z,Tc=new Ct;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dx,this.updateRange={offset:0,count:-1},this.gpuType=_s,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tc.fromBufferAttribute(this,n),Tc.applyMatrix3(e),this.setXY(n,Tc.x,Tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mc(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mc(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mc(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,o){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array),o=li(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class FM extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class OM extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gr extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zb=0;const Pi=new En,Qh=new mi,Ko=new Z,ci=new lu,Sl=new lu,pn=new Z;class jr extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=ou(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PM(e)?OM:FM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Gr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const o=n[i];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const u=n[o];Sl.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(ci.min,Sl.min),ci.expandByPoint(pn),pn.addVectors(ci.max,Sl.max),ci.expandByPoint(pn)):(ci.expandByPoint(Sl.min),ci.expandByPoint(Sl.max))}ci.getCenter(i);let s=0;for(let o=0,l=e.count;o<l;o++)pn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(pn));if(n)for(let o=0,l=n.length;o<l;o++){const u=n[o],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)pn.fromBufferAttribute(u,d),f&&(Ko.fromBufferAttribute(e,d),pn.add(Ko)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,o=n.normal.array,l=n.uv.array,u=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,d=[],p=[];for(let U=0;U<u;U++)d[U]=new Z,p[U]=new Z;const g=new Z,_=new Z,x=new Z,E=new Ct,T=new Ct,v=new Ct,h=new Z,y=new Z;function S(U,oe,de){g.fromArray(s,U*3),_.fromArray(s,oe*3),x.fromArray(s,de*3),E.fromArray(l,U*2),T.fromArray(l,oe*2),v.fromArray(l,de*2),_.sub(g),x.sub(g),T.sub(E),v.sub(E);const j=1/(T.x*v.y-v.x*T.y);isFinite(j)&&(h.copy(_).multiplyScalar(v.y).addScaledVector(x,-T.y).multiplyScalar(j),y.copy(x).multiplyScalar(T.x).addScaledVector(_,-v.x).multiplyScalar(j),d[U].add(h),d[oe].add(h),d[de].add(h),p[U].add(y),p[oe].add(y),p[de].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let U=0,oe=w.length;U<oe;++U){const de=w[U],j=de.start,J=de.count;for(let ie=j,fe=j+J;ie<fe;ie+=3)S(i[ie+0],i[ie+1],i[ie+2])}const P=new Z,I=new Z,D=new Z,H=new Z;function C(U){D.fromArray(o,U*3),H.copy(D);const oe=d[U];P.copy(oe),P.sub(D.multiplyScalar(D.dot(oe))).normalize(),I.crossVectors(H,oe);const j=I.dot(p[U])<0?-1:1;f[U*4]=P.x,f[U*4+1]=P.y,f[U*4+2]=P.z,f[U*4+3]=j}for(let U=0,oe=w.length;U<oe;++U){const de=w[U],j=de.start,J=de.count;for(let ie=j,fe=j+J;ie<fe;ie+=3)C(i[ie+0]),C(i[ie+1]),C(i[ie+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new Z,o=new Z,l=new Z,u=new Z,f=new Z,d=new Z,p=new Z,g=new Z;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),T=e.getX(_+1),v=e.getX(_+2);s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,v),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,v),u.add(p),f.add(p),d.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)s.fromBufferAttribute(n,_+0),o.fromBufferAttribute(n,_+1),l.fromBufferAttribute(n,_+2),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,g=u.normalized,_=new d.constructor(f.length*p);let x=0,E=0;for(let T=0,v=f.length;T<v;T++){u.isInterleavedBufferAttribute?x=f[T]*u.data.stride+u.offset:x=f[T]*p;for(let h=0;h<p;h++)_[E++]=d[x++]}return new gi(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jr,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);n.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const _=d[p],x=e(_,i);f.push(x)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];p.push(x.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(n))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let _=0,x=g.length;_<x;_++)p.push(g[_].clone(n));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wx=new En,Xs=new Pb,wc=new sg,Ax=new Z,Zo=new Z,Qo=new Z,Jo=new Z,Jh=new Z,Ac=new Z,Rc=new Ct,Cc=new Ct,Lc=new Ct,Rx=new Z,Cx=new Z,Lx=new Z,Pc=new Z,bc=new Z;class Br extends mi{constructor(e=new jr,n=new og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Ac.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=u[f],g=o[f];p!==0&&(Jh.fromBufferAttribute(g,e),l?Ac.addScaledVector(Jh,p):Ac.addScaledVector(Jh.sub(n),p))}n.add(Ac)}return n}raycast(e,n){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(o),Xs.copy(e.ray).recast(e.near),!(wc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(wc,Ax)===null||Xs.origin.distanceToSquared(Ax)>(e.far-e.near)**2))&&(wx.copy(o).invert(),Xs.copy(e.ray).applyMatrix4(wx),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xs)))}_computeIntersections(e,n,i){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const v=_[E],h=l[v.materialIndex],y=Math.max(v.start,x.start),S=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let w=y,P=S;w<P;w+=3){const I=u.getX(w),D=u.getX(w+1),H=u.getX(w+2);s=Uc(this,h,e,i,d,p,g,I,D,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let v=E,h=T;v<h;v+=3){const y=u.getX(v),S=u.getX(v+1),w=u.getX(v+2);s=Uc(this,l,e,i,d,p,g,y,S,w),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const v=_[E],h=l[v.materialIndex],y=Math.max(v.start,x.start),S=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let w=y,P=S;w<P;w+=3){const I=w,D=w+1,H=w+2;s=Uc(this,h,e,i,d,p,g,I,D,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let v=E,h=T;v<h;v+=3){const y=v,S=v+1,w=v+2;s=Uc(this,l,e,i,d,p,g,y,S,w),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}}}function Bb(t,e,n,i,s,o,l,u){let f;if(e.side===ei?f=i.intersectTriangle(l,o,s,!0,u):f=i.intersectTriangle(s,o,l,e.side===Ps,u),f===null)return null;bc.copy(u),bc.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(bc);return d<n.near||d>n.far?null:{distance:d,point:bc.clone(),object:t}}function Uc(t,e,n,i,s,o,l,u,f,d){t.getVertexPosition(u,Zo),t.getVertexPosition(f,Qo),t.getVertexPosition(d,Jo);const p=Bb(t,e,n,i,Zo,Qo,Jo,Pc);if(p){s&&(Rc.fromBufferAttribute(s,u),Cc.fromBufferAttribute(s,f),Lc.fromBufferAttribute(s,d),p.uv=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rc,Cc,Lc,new Ct)),o&&(Rc.fromBufferAttribute(o,u),Cc.fromBufferAttribute(o,f),Lc.fromBufferAttribute(o,d),p.uv1=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rc,Cc,Lc,new Ct),p.uv2=p.uv1),l&&(Rx.fromBufferAttribute(l,u),Cx.fromBufferAttribute(l,f),Lx.fromBufferAttribute(l,d),p.normal=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rx,Cx,Lx,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new Z,materialIndex:0};Zi.getNormal(Zo,Qo,Jo,g.normal),p.face=g}return p}class uu extends jr{constructor(e=1,n=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],p=[],g=[];let _=0,x=0;E("z","y","x",-1,-1,i,n,e,l,o,0),E("z","y","x",1,-1,i,n,-e,l,o,1),E("x","z","y",1,1,e,i,n,s,l,2),E("x","z","y",1,-1,e,i,-n,s,l,3),E("x","y","z",1,-1,e,n,i,s,o,4),E("x","y","z",-1,-1,e,n,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Gr(d,3)),this.setAttribute("normal",new Gr(p,3)),this.setAttribute("uv",new Gr(g,2));function E(T,v,h,y,S,w,P,I,D,H,C){const U=w/D,oe=P/H,de=w/2,j=P/2,J=I/2,ie=D+1,fe=H+1;let ee=0,B=0;const te=new Z;for(let Y=0;Y<fe;Y++){const V=Y*oe-j;for(let $=0;$<ie;$++){const ye=$*U-de;te[T]=ye*y,te[v]=V*S,te[h]=J,d.push(te.x,te.y,te.z),te[T]=0,te[v]=0,te[h]=I>0?1:-1,p.push(te.x,te.y,te.z),g.push($/D),g.push(1-Y/H),ee+=1}}for(let Y=0;Y<H;Y++)for(let V=0;V<D;V++){const $=_+V+ie*Y,ye=_+V+ie*(Y+1),xe=_+(V+1)+ie*(Y+1),Me=_+(V+1)+ie*Y;f.push($,ye,Me),f.push(ye,xe,Me),B+=6}u.addGroup(x,B,C),x+=B,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function On(t){const e={};for(let n=0;n<t.length;n++){const i=Oa(t[n]);for(const s in i)e[s]=i[s]}return e}function kb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zM(t){return t.getRenderTarget()===null?t.outputColorSpace:dr}const Hb={clone:Oa,merge:On};var Gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _o extends Gf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class BM extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=zr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ii extends BM{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fh*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/f,n-=l.offsetY*i/d,s*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ea=-90,ta=1;class Wb extends mi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new Ii(ea,ta,e,n);s.layers=this.layers,this.add(s);const o=new Ii(ea,ta,e,n);o.layers=this.layers,this.add(o);const l=new Ii(ea,ta,e,n);l.layers=this.layers,this.add(l);const u=new Ii(ea,ta,e,n);u.layers=this.layers,this.add(u);const f=new Ii(ea,ta,e,n);f.layers=this.layers,this.add(f);const d=new Ii(ea,ta,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,o,l,u,f]=n;for(const d of n)this.remove(d);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===yf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,d]=this.children,p=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=Hr,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,u),e.setRenderTarget(i,4),e.render(n,f),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(n,d),e.setRenderTarget(p),e.toneMapping=g,e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kM extends pi{constructor(e,n,i,s,o,l,u,f,d,p){e=e!==void 0?e:[],n=n!==void 0?n:Ia,super(e,n,i,s,o,l,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xb extends go{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Nl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lo?ot:uo),this.texture=new kM(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Di}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uu(5,5,5),o=new _o({name:"CubemapFromEquirect",uniforms:Oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:As});o.uniforms.tEquirect.value=n;const l=new Br(s,o),u=n.minFilter;return n.minFilter===Jl&&(n.minFilter=Di),new Wb(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,s);e.setRenderTarget(o)}}const ep=new Z,qb=new Z,jb=new ct;class $s{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ep.subVectors(i,n).cross(qb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ep),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jb.getNormalMatrix(e),s=this.coplanarPoint(ep).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new sg,Dc=new Z;class HM{constructor(e=new $s,n=new $s,i=new $s,s=new $s,o=new $s,l=new $s){this.planes=[e,n,i,s,o,l]}set(e,n,i,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zr){const i=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],f=s[3],d=s[4],p=s[5],g=s[6],_=s[7],x=s[8],E=s[9],T=s[10],v=s[11],h=s[12],y=s[13],S=s[14],w=s[15];if(i[0].setComponents(f-o,_-d,v-x,w-h).normalize(),i[1].setComponents(f+o,_+d,v+x,w+h).normalize(),i[2].setComponents(f+l,_+p,v+E,w+y).normalize(),i[3].setComponents(f-l,_-p,v-E,w-y).normalize(),i[4].setComponents(f-u,_-g,v-T,w-S).normalize(),n===zr)i[5].setComponents(f+u,_+g,v+T,w+S).normalize();else if(n===yf)i[5].setComponents(u,g,T,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function GM(){let t=null,e=!1,n=null,i=null;function s(o,l){n(o,l),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Yb(t,e){const n=e.isWebGL2,i=new WeakMap;function s(d,p){const g=d.array,_=d.usage,x=t.createBuffer();t.bindBuffer(p,x),t.bufferData(p,g,_),d.onUploadCallback();let E;if(g instanceof Float32Array)E=t.FLOAT;else if(g instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=t.SHORT;else if(g instanceof Uint32Array)E=t.UNSIGNED_INT;else if(g instanceof Int32Array)E=t.INT;else if(g instanceof Int8Array)E=t.BYTE;else if(g instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version}}function o(d,p,g){const _=p.array,x=p.updateRange;t.bindBuffer(g,d),x.count===-1?t.bufferSubData(g,0,_):(n?t.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):t.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(t.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const _=i.get(d);(!_||_.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const g=i.get(d);g===void 0?i.set(d,s(d,p)):g.version<d.version&&(o(g.buffer,d,p),g.version=d.version)}return{get:l,remove:u,update:f}}class ag extends jr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const o=e/2,l=n/2,u=Math.floor(i),f=Math.floor(s),d=u+1,p=f+1,g=e/u,_=n/f,x=[],E=[],T=[],v=[];for(let h=0;h<p;h++){const y=h*_-l;for(let S=0;S<d;S++){const w=S*g-o;E.push(w,-y,0),T.push(0,0,1),v.push(S/u),v.push(1-h/f)}}for(let h=0;h<f;h++)for(let y=0;y<u;y++){const S=y+d*h,w=y+d*(h+1),P=y+1+d*(h+1),I=y+1+d*h;x.push(S,w,I),x.push(w,P,I)}this.setIndex(x),this.setAttribute("position",new Gr(E,3)),this.setAttribute("normal",new Gr(T,3)),this.setAttribute("uv",new Gr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ag(e.width,e.height,e.widthSegments,e.heightSegments)}}var $b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_U=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vU=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EU="gl_FragColor = linearToOutputTexel( gl_FragColor );",TU=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,FU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,qU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jU=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$U=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,KU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eD=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,tD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oD=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lD=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_D=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ED=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,LD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ID=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ND=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$D=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QD=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oI=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_I=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MI=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:$b,alphahash_pars_fragment:Kb,alphamap_fragment:Zb,alphamap_pars_fragment:Qb,alphatest_fragment:Jb,alphatest_pars_fragment:eU,aomap_fragment:tU,aomap_pars_fragment:nU,begin_vertex:iU,beginnormal_vertex:rU,bsdfs:sU,iridescence_fragment:oU,bumpmap_pars_fragment:aU,clipping_planes_fragment:lU,clipping_planes_pars_fragment:uU,clipping_planes_pars_vertex:cU,clipping_planes_vertex:fU,color_fragment:dU,color_pars_fragment:hU,color_pars_vertex:pU,color_vertex:mU,common:gU,cube_uv_reflection_fragment:_U,defaultnormal_vertex:vU,displacementmap_pars_vertex:xU,displacementmap_vertex:SU,emissivemap_fragment:yU,emissivemap_pars_fragment:MU,colorspace_fragment:EU,colorspace_pars_fragment:TU,envmap_fragment:wU,envmap_common_pars_fragment:AU,envmap_pars_fragment:RU,envmap_pars_vertex:CU,envmap_physical_pars_fragment:kU,envmap_vertex:LU,fog_vertex:PU,fog_pars_vertex:bU,fog_fragment:UU,fog_pars_fragment:DU,gradientmap_pars_fragment:IU,lightmap_fragment:NU,lightmap_pars_fragment:FU,lights_lambert_fragment:OU,lights_lambert_pars_fragment:zU,lights_pars_begin:BU,lights_toon_fragment:HU,lights_toon_pars_fragment:GU,lights_phong_fragment:VU,lights_phong_pars_fragment:WU,lights_physical_fragment:XU,lights_physical_pars_fragment:qU,lights_fragment_begin:jU,lights_fragment_maps:YU,lights_fragment_end:$U,logdepthbuf_fragment:KU,logdepthbuf_pars_fragment:ZU,logdepthbuf_pars_vertex:QU,logdepthbuf_vertex:JU,map_fragment:eD,map_pars_fragment:tD,map_particle_fragment:nD,map_particle_pars_fragment:iD,metalnessmap_fragment:rD,metalnessmap_pars_fragment:sD,morphcolor_vertex:oD,morphnormal_vertex:aD,morphtarget_pars_vertex:lD,morphtarget_vertex:uD,normal_fragment_begin:cD,normal_fragment_maps:fD,normal_pars_fragment:dD,normal_pars_vertex:hD,normal_vertex:pD,normalmap_pars_fragment:mD,clearcoat_normal_fragment_begin:gD,clearcoat_normal_fragment_maps:_D,clearcoat_pars_fragment:vD,iridescence_pars_fragment:xD,opaque_fragment:SD,packing:yD,premultiplied_alpha_fragment:MD,project_vertex:ED,dithering_fragment:TD,dithering_pars_fragment:wD,roughnessmap_fragment:AD,roughnessmap_pars_fragment:RD,shadowmap_pars_fragment:CD,shadowmap_pars_vertex:LD,shadowmap_vertex:PD,shadowmask_pars_fragment:bD,skinbase_vertex:UD,skinning_pars_vertex:DD,skinning_vertex:ID,skinnormal_vertex:ND,specularmap_fragment:FD,specularmap_pars_fragment:OD,tonemapping_fragment:zD,tonemapping_pars_fragment:BD,transmission_fragment:kD,transmission_pars_fragment:HD,uv_pars_fragment:GD,uv_pars_vertex:VD,uv_vertex:WD,worldpos_vertex:XD,background_vert:qD,background_frag:jD,backgroundCube_vert:YD,backgroundCube_frag:$D,cube_vert:KD,cube_frag:ZD,depth_vert:QD,depth_frag:JD,distanceRGBA_vert:eI,distanceRGBA_frag:tI,equirect_vert:nI,equirect_frag:iI,linedashed_vert:rI,linedashed_frag:sI,meshbasic_vert:oI,meshbasic_frag:aI,meshlambert_vert:lI,meshlambert_frag:uI,meshmatcap_vert:cI,meshmatcap_frag:fI,meshnormal_vert:dI,meshnormal_frag:hI,meshphong_vert:pI,meshphong_frag:mI,meshphysical_vert:gI,meshphysical_frag:_I,meshtoon_vert:vI,meshtoon_frag:xI,points_vert:SI,points_frag:yI,shadow_vert:MI,shadow_frag:EI,sprite_vert:TI,sprite_frag:wI},Ee={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},lr={basic:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new bt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:On([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:On([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new bt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:On([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:On([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:On([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:On([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:On([Ee.common,Ee.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:On([Ee.lights,Ee.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};lr.physical={uniforms:On([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ic={r:0,b:0,g:0};function AI(t,e,n,i,s,o,l){const u=new bt(0);let f=o===!0?0:1,d,p,g=null,_=0,x=null;function E(v,h){let y=!1,S=h.isScene===!0?h.background:null;switch(S&&S.isTexture&&(S=(h.backgroundBlurriness>0?n:e).get(S)),S===null?T(u,f):S&&S.isColor&&(T(S,1),y=!0),t.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),y=!0;break}(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),S&&(S.isCubeTexture||S.mapping===kf)?(p===void 0&&(p=new Br(new uu(1,1,1),new _o({name:"BackgroundCubeMaterial",uniforms:Oa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=S,p.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,p.material.toneMapped=S.colorSpace!==ot,(g!==S||_!==S.version||x!==t.toneMapping)&&(p.material.needsUpdate=!0,g=S,_=S.version,x=t.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):S&&S.isTexture&&(d===void 0&&(d=new Br(new ag(2,2),new _o({name:"BackgroundMaterial",uniforms:Oa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=S,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=S.colorSpace!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),d.material.uniforms.uvTransform.value.copy(S.matrix),(g!==S||_!==S.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,g=S,_=S.version,x=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function T(v,h){v.getRGB(Ic,zM(t)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,h,l)}return{getClearColor:function(){return u},setClearColor:function(v,h=1){u.set(v),f=h,T(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(v){f=v,T(u,f)},render:E}}function RI(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,u={},f=v(null);let d=f,p=!1;function g(J,ie,fe,ee,B){let te=!1;if(l){const Y=T(ee,fe,ie);d!==Y&&(d=Y,x(d.object)),te=h(J,ee,fe,B),te&&y(J,ee,fe,B)}else{const Y=ie.wireframe===!0;(d.geometry!==ee.id||d.program!==fe.id||d.wireframe!==Y)&&(d.geometry=ee.id,d.program=fe.id,d.wireframe=Y,te=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(te||p)&&(p=!1,H(J,ie,fe,ee),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function _(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function x(J){return i.isWebGL2?t.bindVertexArray(J):o.bindVertexArrayOES(J)}function E(J){return i.isWebGL2?t.deleteVertexArray(J):o.deleteVertexArrayOES(J)}function T(J,ie,fe){const ee=fe.wireframe===!0;let B=u[J.id];B===void 0&&(B={},u[J.id]=B);let te=B[ie.id];te===void 0&&(te={},B[ie.id]=te);let Y=te[ee];return Y===void 0&&(Y=v(_()),te[ee]=Y),Y}function v(J){const ie=[],fe=[],ee=[];for(let B=0;B<s;B++)ie[B]=0,fe[B]=0,ee[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:fe,attributeDivisors:ee,object:J,attributes:{},index:null}}function h(J,ie,fe,ee){const B=d.attributes,te=ie.attributes;let Y=0;const V=fe.getAttributes();for(const $ in V)if(V[$].location>=0){const xe=B[$];let Me=te[$];if(Me===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(Me=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(Me=J.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;Y++}return d.attributesNum!==Y||d.index!==ee}function y(J,ie,fe,ee){const B={},te=ie.attributes;let Y=0;const V=fe.getAttributes();for(const $ in V)if(V[$].location>=0){let xe=te[$];xe===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(xe=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(xe=J.instanceColor));const Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),B[$]=Me,Y++}d.attributes=B,d.attributesNum=Y,d.index=ee}function S(){const J=d.newAttributes;for(let ie=0,fe=J.length;ie<fe;ie++)J[ie]=0}function w(J){P(J,0)}function P(J,ie){const fe=d.newAttributes,ee=d.enabledAttributes,B=d.attributeDivisors;fe[J]=1,ee[J]===0&&(t.enableVertexAttribArray(J),ee[J]=1),B[J]!==ie&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,ie),B[J]=ie)}function I(){const J=d.newAttributes,ie=d.enabledAttributes;for(let fe=0,ee=ie.length;fe<ee;fe++)ie[fe]!==J[fe]&&(t.disableVertexAttribArray(fe),ie[fe]=0)}function D(J,ie,fe,ee,B,te,Y){Y===!0?t.vertexAttribIPointer(J,ie,fe,B,te):t.vertexAttribPointer(J,ie,fe,ee,B,te)}function H(J,ie,fe,ee){if(i.isWebGL2===!1&&(J.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const B=ee.attributes,te=fe.getAttributes(),Y=ie.defaultAttributeValues;for(const V in te){const $=te[V];if($.location>=0){let ye=B[V];if(ye===void 0&&(V==="instanceMatrix"&&J.instanceMatrix&&(ye=J.instanceMatrix),V==="instanceColor"&&J.instanceColor&&(ye=J.instanceColor)),ye!==void 0){const xe=ye.normalized,Me=ye.itemSize,De=n.get(ye);if(De===void 0)continue;const qe=De.buffer,Be=De.type,mt=De.bytesPerElement,wn=i.isWebGL2===!0&&(Be===t.INT||Be===t.UNSIGNED_INT||ye.gpuType===MM);if(ye.isInterleavedBufferAttribute){const et=ye.data,X=et.stride,rn=ye.offset;if(et.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)P($.location+Ne,et.meshPerAttribute);J.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)w($.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ne=0;Ne<$.locationSize;Ne++)D($.location+Ne,Me/$.locationSize,Be,xe,X*mt,(rn+Me/$.locationSize*Ne)*mt,wn)}else{if(ye.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)P($.location+et,ye.meshPerAttribute);J.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<$.locationSize;et++)w($.location+et);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let et=0;et<$.locationSize;et++)D($.location+et,Me/$.locationSize,Be,xe,Me*mt,Me/$.locationSize*et*mt,wn)}}else if(Y!==void 0){const xe=Y[V];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv($.location,xe);break;case 3:t.vertexAttrib3fv($.location,xe);break;case 4:t.vertexAttrib4fv($.location,xe);break;default:t.vertexAttrib1fv($.location,xe)}}}}I()}function C(){de();for(const J in u){const ie=u[J];for(const fe in ie){const ee=ie[fe];for(const B in ee)E(ee[B].object),delete ee[B];delete ie[fe]}delete u[J]}}function U(J){if(u[J.id]===void 0)return;const ie=u[J.id];for(const fe in ie){const ee=ie[fe];for(const B in ee)E(ee[B].object),delete ee[B];delete ie[fe]}delete u[J.id]}function oe(J){for(const ie in u){const fe=u[ie];if(fe[J.id]===void 0)continue;const ee=fe[J.id];for(const B in ee)E(ee[B].object),delete ee[B];delete fe[J.id]}}function de(){j(),p=!0,d!==f&&(d=f,x(d.object))}function j(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:g,reset:de,resetDefaultState:j,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:oe,initAttributes:S,enableAttribute:w,disableUnusedAttributes:I}}function CI(t,e,n,i){const s=i.isWebGL2;let o;function l(d){o=d}function u(d,p){t.drawArrays(o,d,p),n.update(p,o,1)}function f(d,p,g){if(g===0)return;let _,x;if(s)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](o,d,p,g),n.update(p,o,g)}this.setMode=l,this.render=u,this.renderInstances=f}function LI(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const f=o(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=l||e.has("WEBGL_draw_buffers"),p=n.logarithmicDepthBuffer===!0,g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),T=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,w=l||e.has("OES_texture_float"),P=S&&w,I=l?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:E,maxAttributes:T,maxVertexUniforms:v,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:I}}function PI(t){const e=this;let n=null,i=0,s=!1,o=!1;const l=new $s,u=new ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){n=p(g,_,0)},this.setState=function(g,_,x){const E=g.clippingPlanes,T=g.clipIntersection,v=g.clipShadows,h=t.get(g);if(!s||E===null||E.length===0||o&&!v)o?p(null):d();else{const y=o?0:i,S=y*4;let w=h.clippingState||null;f.value=w,w=p(E,_,S,x);for(let P=0;P!==S;++P)w[P]=n[P];h.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=y}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,x,E){const T=g!==null?g.length:0;let v=null;if(T!==0){if(v=f.value,E!==!0||v===null){const h=x+T*4,y=_.matrixWorldInverse;u.getNormalMatrix(y),(v===null||v.length<h)&&(v=new Float32Array(h));for(let S=0,w=x;S!==T;++S,w+=4)l.copy(g[S]).applyMatrix4(y,u),l.normal.toArray(v,w),v[w+3]=l.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function bI(t){let e=new WeakMap;function n(l,u){return u===Jp?l.mapping=Ia:u===em&&(l.mapping=Na),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping;if(u===Jp||u===em)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new Xb(f.height/2);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",s),n(d.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class UI extends BM{constructor(e=-1,n=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ga=4,Px=[.125,.215,.35,.446,.526,.582],Zs=20,tp=new UI,bx=new bt;let np=null;const Ks=(1+Math.sqrt(5))/2,na=1/Ks,Ux=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Ks,na),new Z(0,Ks,-na),new Z(na,0,Ks),new Z(-na,0,Ks),new Z(Ks,na,0),new Z(-Ks,na,0)];class Dx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){np=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(np),e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ia||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:eu,format:Ji,colorSpace:dr,depthBuffer:!1},s=Ix(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ix(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DI(o)),this._blurMaterial=II(o,e,n)}return s}_compileMaterial(e){const n=new Br(this._lodPlanes[0],e);this._renderer.compile(n,tp)}_sceneToCubeUV(e,n,i,s){const u=new Ii(90,1,n,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(bx),p.toneMapping=Hr,p.autoClear=!1;const x=new og({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),E=new Br(new uu,x);let T=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,T=!0):(x.color.copy(bx),T=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(u.up.set(0,f[h],0),u.lookAt(d[h],0,0)):y===1?(u.up.set(0,0,f[h]),u.lookAt(0,d[h],0)):(u.up.set(0,f[h],0),u.lookAt(0,0,d[h]));const S=this._cubeSize;Nc(s,y*S,h>2?S:0,S,S),p.setRenderTarget(s),T&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ia||e.mapping===Na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Br(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Nc(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,tp)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Ux[(s-1)%Ux.length];this._blur(e,s-1,s,o,l)}n.autoClear=i}_blur(e,n,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,s,"latitudinal",o),this._halfBlur(l,e,i,i,s,"longitudinal",o)}_halfBlur(e,n,i,s,o,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Br(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Zs-1),T=o/E,v=isFinite(o)?1+Math.floor(p*T):Zs;v>Zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zs}`);const h=[];let y=0;for(let D=0;D<Zs;++D){const H=D/T,C=Math.exp(-H*H/2);h.push(C),D===0?y+=C:D<v&&(y+=2*C)}for(let D=0;D<h.length;D++)h[D]=h[D]/y;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=h,_.latitudinal.value=l==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:S}=this;_.dTheta.value=E,_.mipInt.value=S-i;const w=this._sizeLods[s],P=3*w*(s>S-ga?s-S+ga:0),I=4*(this._cubeSize-w);Nc(n,P,I,3*w,2*w),f.setRenderTarget(n),f.render(g,tp)}}function DI(t){const e=[],n=[],i=[];let s=t;const o=t-ga+1+Px.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);n.push(u);let f=1/u;l>t-ga?f=Px[l-t+ga-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),p=-d,g=1+d,_=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,E=6,T=3,v=2,h=1,y=new Float32Array(T*E*x),S=new Float32Array(v*E*x),w=new Float32Array(h*E*x);for(let I=0;I<x;I++){const D=I%3*2/3-1,H=I>2?0:-1,C=[D,H,0,D+2/3,H,0,D+2/3,H+1,0,D,H,0,D+2/3,H+1,0,D,H+1,0];y.set(C,T*E*I),S.set(_,v*E*I);const U=[I,I,I,I,I,I];w.set(U,h*E*I)}const P=new jr;P.setAttribute("position",new gi(y,T)),P.setAttribute("uv",new gi(S,v)),P.setAttribute("faceIndex",new gi(w,h)),e.push(P),s>ga&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ix(t,e,n){const i=new go(t,e,n);return i.texture.mapping=kf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nc(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function II(t,e,n){const i=new Float32Array(Zs),s=new Z(0,1,0);return new _o({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Nx(){return new _o({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Fx(){return new _o({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function lg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NI(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===Jp||f===em,p=f===Ia||f===Na;if(d||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return n===null&&(n=new Dx(t)),g=d?n.fromEquirectangular(u,g):n.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(d&&g&&g.height>0||p&&g&&s(g)){n===null&&(n=new Dx(t));const _=d?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",o),_.texture}else return null}}}return u}function s(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function FI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function OI(t,e,n,i){const s={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let v=0,h=T.length;v<h;v++)e.remove(T[v])}_.removeEventListener("dispose",l),delete s[_.id];const x=o.get(_);x&&(e.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,n.memory.geometries++),_}function f(g){const _=g.attributes;for(const E in _)e.update(_[E],t.ARRAY_BUFFER);const x=g.morphAttributes;for(const E in x){const T=x[E];for(let v=0,h=T.length;v<h;v++)e.update(T[v],t.ARRAY_BUFFER)}}function d(g){const _=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const y=x.array;T=x.version;for(let S=0,w=y.length;S<w;S+=3){const P=y[S+0],I=y[S+1],D=y[S+2];_.push(P,I,I,D,D,P)}}else{const y=E.array;T=E.version;for(let S=0,w=y.length/3-1;S<w;S+=3){const P=S+0,I=S+1,D=S+2;_.push(P,I,I,D,D,P)}}const v=new(PM(_)?OM:FM)(_,1);v.version=T;const h=o.get(g);h&&e.remove(h),o.set(g,v)}function p(g){const _=o.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function zI(t,e,n,i){const s=i.isWebGL2;let o;function l(_){o=_}let u,f;function d(_){u=_.type,f=_.bytesPerElement}function p(_,x){t.drawElements(o,x,u,_*f),n.update(x,o,1)}function g(_,x,E){if(E===0)return;let T,v;if(s)T=t,v="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[v](o,x,u,_*f,E),n.update(x,o,E)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g}function BI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(o/3);break;case t.LINES:n.lines+=u*(o/2);break;case t.LINE_STRIP:n.lines+=u*(o-1);break;case t.LINE_LOOP:n.lines+=u*o;break;case t.POINTS:n.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function kI(t,e){return t[0]-e[0]}function HI(t,e){return Math.abs(e[1])-Math.abs(t[1])}function GI(t,e,n){const i={},s=new Float32Array(8),o=new WeakMap,l=new yn,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function f(d,p,g){const _=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,T=E!==void 0?E.length:0;let v=o.get(p);if(v===void 0||v.count!==T){let ie=function(){j.dispose(),o.delete(p),p.removeEventListener("dispose",ie)};var x=ie;v!==void 0&&v.texture.dispose();const S=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,I=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let C=0;S===!0&&(C=1),w===!0&&(C=2),P===!0&&(C=3);let U=p.attributes.position.count*C,oe=1;U>e.maxTextureSize&&(oe=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const de=new Float32Array(U*oe*4*T),j=new DM(de,U,oe,T);j.type=_s,j.needsUpdate=!0;const J=C*4;for(let fe=0;fe<T;fe++){const ee=I[fe],B=D[fe],te=H[fe],Y=U*oe*4*fe;for(let V=0;V<ee.count;V++){const $=V*J;S===!0&&(l.fromBufferAttribute(ee,V),de[Y+$+0]=l.x,de[Y+$+1]=l.y,de[Y+$+2]=l.z,de[Y+$+3]=0),w===!0&&(l.fromBufferAttribute(B,V),de[Y+$+4]=l.x,de[Y+$+5]=l.y,de[Y+$+6]=l.z,de[Y+$+7]=0),P===!0&&(l.fromBufferAttribute(te,V),de[Y+$+8]=l.x,de[Y+$+9]=l.y,de[Y+$+10]=l.z,de[Y+$+11]=te.itemSize===4?l.w:1)}}v={count:T,texture:j,size:new Ct(U,oe)},o.set(p,v),p.addEventListener("dispose",ie)}let h=0;for(let S=0;S<_.length;S++)h+=_[S];const y=p.morphTargetsRelative?1:1-h;g.getUniforms().setValue(t,"morphTargetBaseInfluence",y),g.getUniforms().setValue(t,"morphTargetInfluences",_),g.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),g.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const E=_===void 0?0:_.length;let T=i[p.id];if(T===void 0||T.length!==E){T=[];for(let w=0;w<E;w++)T[w]=[w,0];i[p.id]=T}for(let w=0;w<E;w++){const P=T[w];P[0]=w,P[1]=_[w]}T.sort(HI);for(let w=0;w<8;w++)w<E&&T[w][1]?(u[w][0]=T[w][0],u[w][1]=T[w][1]):(u[w][0]=Number.MAX_SAFE_INTEGER,u[w][1]=0);u.sort(kI);const v=p.morphAttributes.position,h=p.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const P=u[w],I=P[0],D=P[1];I!==Number.MAX_SAFE_INTEGER&&D?(v&&p.getAttribute("morphTarget"+w)!==v[I]&&p.setAttribute("morphTarget"+w,v[I]),h&&p.getAttribute("morphNormal"+w)!==h[I]&&p.setAttribute("morphNormal"+w,h[I]),s[w]=D,y+=D):(v&&p.hasAttribute("morphTarget"+w)===!0&&p.deleteAttribute("morphTarget"+w),h&&p.hasAttribute("morphNormal"+w)===!0&&p.deleteAttribute("morphNormal"+w),s[w]=0)}const S=p.morphTargetsRelative?1:1-y;g.getUniforms().setValue(t,"morphTargetBaseInfluence",S),g.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:f}}function VI(t,e,n,i){let s=new WeakMap;function o(f){const d=i.render.frame,p=f.geometry,g=e.get(f,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function l(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:l}}const VM=new pi,WM=new DM,XM=new Cb,qM=new kM,Ox=[],zx=[],Bx=new Float32Array(16),kx=new Float32Array(9),Hx=new Float32Array(4);function Ga(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let o=Ox[s];if(o===void 0&&(o=new Float32Array(s),Ox[s]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(o,u)}return o}function cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function fn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vf(t,e){let n=zx[e];n===void 0&&(n=new Int32Array(e),zx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function WI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2fv(this.addr,e),fn(n,e)}}function qI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;t.uniform3fv(this.addr,e),fn(n,e)}}function jI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4fv(this.addr,e),fn(n,e)}}function YI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;Hx.set(i),t.uniformMatrix2fv(this.addr,!1,Hx),fn(n,i)}}function $I(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;kx.set(i),t.uniformMatrix3fv(this.addr,!1,kx),fn(n,i)}}function KI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;Bx.set(i),t.uniformMatrix4fv(this.addr,!1,Bx),fn(n,i)}}function ZI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2iv(this.addr,e),fn(n,e)}}function JI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3iv(this.addr,e),fn(n,e)}}function e3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4iv(this.addr,e),fn(n,e)}}function t3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function n3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2uiv(this.addr,e),fn(n,e)}}function i3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3uiv(this.addr,e),fn(n,e)}}function r3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4uiv(this.addr,e),fn(n,e)}}function s3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||VM,s)}function o3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||XM,s)}function a3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||qM,s)}function l3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||WM,s)}function u3(t){switch(t){case 5126:return WI;case 35664:return XI;case 35665:return qI;case 35666:return jI;case 35674:return YI;case 35675:return $I;case 35676:return KI;case 5124:case 35670:return ZI;case 35667:case 35671:return QI;case 35668:case 35672:return JI;case 35669:case 35673:return e3;case 5125:return t3;case 36294:return n3;case 36295:return i3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return a3;case 36289:case 36303:case 36311:case 36292:return l3}}function c3(t,e){t.uniform1fv(this.addr,e)}function f3(t,e){const n=Ga(e,this.size,2);t.uniform2fv(this.addr,n)}function d3(t,e){const n=Ga(e,this.size,3);t.uniform3fv(this.addr,n)}function h3(t,e){const n=Ga(e,this.size,4);t.uniform4fv(this.addr,n)}function p3(t,e){const n=Ga(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function m3(t,e){const n=Ga(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function g3(t,e){const n=Ga(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _3(t,e){t.uniform1iv(this.addr,e)}function v3(t,e){t.uniform2iv(this.addr,e)}function x3(t,e){t.uniform3iv(this.addr,e)}function S3(t,e){t.uniform4iv(this.addr,e)}function y3(t,e){t.uniform1uiv(this.addr,e)}function M3(t,e){t.uniform2uiv(this.addr,e)}function E3(t,e){t.uniform3uiv(this.addr,e)}function T3(t,e){t.uniform4uiv(this.addr,e)}function w3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture2D(e[l]||VM,o[l])}function A3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture3D(e[l]||XM,o[l])}function R3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTextureCube(e[l]||qM,o[l])}function C3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture2DArray(e[l]||WM,o[l])}function L3(t){switch(t){case 5126:return c3;case 35664:return f3;case 35665:return d3;case 35666:return h3;case 35674:return p3;case 35675:return m3;case 35676:return g3;case 5124:case 35670:return _3;case 35667:case 35671:return v3;case 35668:case 35672:return x3;case 35669:case 35673:return S3;case 5125:return y3;case 36294:return M3;case 36295:return E3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return w3;case 35679:case 36299:case 36307:return A3;case 35680:case 36300:case 36308:case 36293:return R3;case 36289:case 36303:case 36311:case 36292:return C3}}class P3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=u3(n.type)}}class b3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=L3(n.type)}}class U3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,n[u.id],i)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function Gx(t,e){t.seq.push(e),t.map[e.id]=e}function D3(t,e,n){const i=t.name,s=i.length;for(ip.lastIndex=0;;){const o=ip.exec(i),l=ip.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){Gx(n,d===void 0?new P3(u,t,e):new b3(u,t,e));break}else{let g=n.map[u];g===void 0&&(g=new U3(u),Gx(n,g)),n=g}}}class $c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);D3(o,l,this)}}setValue(e,n,i,s){const o=this.map[n];o!==void 0&&o.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let o=0,l=n.length;o!==l;++o){const u=n[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in n&&i.push(l)}return i}}function Vx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let I3=0;function N3(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=s;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}function F3(t){switch(t){case dr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Wx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+N3(t.getShaderSource(e),l)}else return s}function O3(t,e){const n=F3(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function z3(t,e){let n;switch(e){case XP:n="Linear";break;case qP:n="Reinhard";break;case jP:n="OptimizedCineon";break;case YP:n="ACESFilmic";break;case $P:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function B3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wl).join(`
`)}function k3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function H3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=t.getActiveAttrib(e,s),l=o.name;let u=1;o.type===t.FLOAT_MAT2&&(u=2),o.type===t.FLOAT_MAT3&&(u=3),o.type===t.FLOAT_MAT4&&(u=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function wl(t){return t!==""}function Xx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G3=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(t){return t.replace(G3,W3)}const V3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function W3(t,e){let n=st[e];if(n===void 0){const i=V3.get(e);if(i!==void 0)n=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return om(n)}const X3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jx(t){return t.replace(X3,q3)}function q3(t,e,n,i){let s="";for(let o=parseInt(e);o<parseInt(n);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Yx(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_M?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===EP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ur&&(e="SHADOWMAP_TYPE_VSM"),e}function Y3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ia:case Na:e="ENVMAP_TYPE_CUBE";break;case kf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Na:e="ENVMAP_MODE_REFRACTION";break}return e}function K3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case SM:e="ENVMAP_BLENDING_MULTIPLY";break;case VP:e="ENVMAP_BLENDING_MIX";break;case WP:e="ENVMAP_BLENDING_ADD";break}return e}function Z3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Q3(t,e,n,i){const s=t.getContext(),o=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=j3(n),d=Y3(n),p=$3(n),g=K3(n),_=Z3(n),x=n.isWebGL2?"":B3(n),E=k3(o),T=s.createProgram();let v,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),v.length>0&&(v+=`
`),h=[x,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),h.length>0&&(h+=`
`)):(v=[Yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),h=[x,Yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hr?"#define TONE_MAPPING":"",n.toneMapping!==Hr?st.tonemapping_pars_fragment:"",n.toneMapping!==Hr?z3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,O3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),l=om(l),l=Xx(l,n),l=qx(l,n),u=om(u),u=Xx(u,n),u=qx(u,n),l=jx(l),u=jx(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+v+l,w=y+h+u,P=Vx(s,s.VERTEX_SHADER,S),I=Vx(s,s.FRAGMENT_SHADER,w);if(s.attachShader(T,P),s.attachShader(T,I),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T),t.debug.checkShaderErrors){const C=s.getProgramInfoLog(T).trim(),U=s.getShaderInfoLog(P).trim(),oe=s.getShaderInfoLog(I).trim();let de=!0,j=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(de=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,T,P,I);else{const J=Wx(s,P,"vertex"),ie=Wx(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+J+`
`+ie)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(U===""||oe==="")&&(j=!1);j&&(this.diagnostics={runnable:de,programLog:C,vertexShader:{log:U,prefix:v},fragmentShader:{log:oe,prefix:h}})}s.deleteShader(P),s.deleteShader(I);let D;this.getUniforms=function(){return D===void 0&&(D=new $c(s,T)),D};let H;return this.getAttributes=function(){return H===void 0&&(H=H3(s,T)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let J3=0;class eN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tN(e),n.set(e,i)),i}}class tN{constructor(e){this.id=J3++,this.code=e,this.usedTimes=0}}function nN(t,e,n,i,s,o,l){const u=new IM,f=new eN,d=[],p=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return C===0?"uv":`uv${C}`}function v(C,U,oe,de,j){const J=de.fog,ie=j.geometry,fe=C.isMeshStandardMaterial?de.environment:null,ee=(C.isMeshStandardMaterial?n:e).get(C.envMap||fe),B=ee&&ee.mapping===kf?ee.image.height:null,te=E[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Y=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,V=Y!==void 0?Y.length:0;let $=0;ie.morphAttributes.position!==void 0&&($=1),ie.morphAttributes.normal!==void 0&&($=2),ie.morphAttributes.color!==void 0&&($=3);let ye,xe,Me,De;if(te){const ti=lr[te];ye=ti.vertexShader,xe=ti.fragmentShader}else ye=C.vertexShader,xe=C.fragmentShader,f.update(C),Me=f.getVertexShaderID(C),De=f.getFragmentShaderID(C);const qe=t.getRenderTarget(),Be=j.isInstancedMesh===!0,mt=!!C.map,wn=!!C.matcap,et=!!ee,X=!!C.aoMap,rn=!!C.lightMap,Ne=!!C.bumpMap,$e=!!C.normalMap,Ke=!!C.displacementMap,vt=!!C.emissiveMap,ut=!!C.metalnessMap,it=!!C.roughnessMap,xt=C.anisotropy>0,Et=C.clearcoat>0,jt=C.iridescence>0,N=C.sheen>0,L=C.transmission>0,ne=xt&&!!C.anisotropyMap,_e=Et&&!!C.clearcoatMap,ge=Et&&!!C.clearcoatNormalMap,Se=Et&&!!C.clearcoatRoughnessMap,Fe=jt&&!!C.iridescenceMap,Te=jt&&!!C.iridescenceThicknessMap,le=N&&!!C.sheenColorMap,Oe=N&&!!C.sheenRoughnessMap,ze=!!C.specularMap,ke=!!C.specularColorMap,be=!!C.specularIntensityMap,Ue=L&&!!C.transmissionMap,tt=L&&!!C.thicknessMap,At=!!C.gradientMap,z=!!C.alphaMap,we=C.alphaTest>0,Q=!!C.alphaHash,ve=!!C.extensions,Re=!!ie.attributes.uv1,_t=!!ie.attributes.uv2,Dt=!!ie.attributes.uv3;return{isWebGL2:p,shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:ye,fragmentShader:xe,defines:C.defines,customVertexShaderID:Me,customFragmentShaderID:De,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,instancing:Be,instancingColor:Be&&j.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:qe===null?t.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:dr,map:mt,matcap:wn,envMap:et,envMapMode:et&&ee.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:rn,bumpMap:Ne,normalMap:$e,displacementMap:_&&Ke,emissiveMap:vt,normalMapObjectSpace:$e&&C.normalMapType===ub,normalMapTangentSpace:$e&&C.normalMapType===lb,metalnessMap:ut,roughnessMap:it,anisotropy:xt,anisotropyMap:ne,clearcoat:Et,clearcoatMap:_e,clearcoatNormalMap:ge,clearcoatRoughnessMap:Se,iridescence:jt,iridescenceMap:Fe,iridescenceThicknessMap:Te,sheen:N,sheenColorMap:le,sheenRoughnessMap:Oe,specularMap:ze,specularColorMap:ke,specularIntensityMap:be,transmission:L,transmissionMap:Ue,thicknessMap:tt,gradientMap:At,opaque:C.transparent===!1&&C.blending===Ta,alphaMap:z,alphaTest:we,alphaHash:Q,combine:C.combine,mapUv:mt&&T(C.map.channel),aoMapUv:X&&T(C.aoMap.channel),lightMapUv:rn&&T(C.lightMap.channel),bumpMapUv:Ne&&T(C.bumpMap.channel),normalMapUv:$e&&T(C.normalMap.channel),displacementMapUv:Ke&&T(C.displacementMap.channel),emissiveMapUv:vt&&T(C.emissiveMap.channel),metalnessMapUv:ut&&T(C.metalnessMap.channel),roughnessMapUv:it&&T(C.roughnessMap.channel),anisotropyMapUv:ne&&T(C.anisotropyMap.channel),clearcoatMapUv:_e&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:le&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(C.sheenRoughnessMap.channel),specularMapUv:ze&&T(C.specularMap.channel),specularColorMapUv:ke&&T(C.specularColorMap.channel),specularIntensityMapUv:be&&T(C.specularIntensityMap.channel),transmissionMapUv:Ue&&T(C.transmissionMap.channel),thicknessMapUv:tt&&T(C.thicknessMap.channel),alphaMapUv:z&&T(C.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&($e||xt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:_t,vertexUv3s:Dt,pointsUvs:j.isPoints===!0&&!!ie.attributes.uv&&(mt||z),fog:!!J,useFog:C.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:j.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&oe.length>0,shadowMapType:t.shadowMap.type,toneMapping:C.toneMapped?t.toneMapping:Hr,useLegacyLights:t.useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Nr,flipSided:C.side===ei,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:ve&&C.extensions.derivatives===!0,extensionFragDepth:ve&&C.extensions.fragDepth===!0,extensionDrawBuffers:ve&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function h(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const oe in C.defines)U.push(oe),U.push(C.defines[oe]);return C.isRawShaderMaterial===!1&&(y(U,C),S(U,C),U.push(t.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function y(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function S(C,U){u.disableAll(),U.isWebGL2&&u.enable(0),U.supportsVertexTextures&&u.enable(1),U.instancing&&u.enable(2),U.instancingColor&&u.enable(3),U.matcap&&u.enable(4),U.envMap&&u.enable(5),U.normalMapObjectSpace&&u.enable(6),U.normalMapTangentSpace&&u.enable(7),U.clearcoat&&u.enable(8),U.iridescence&&u.enable(9),U.alphaTest&&u.enable(10),U.vertexColors&&u.enable(11),U.vertexAlphas&&u.enable(12),U.vertexUv1s&&u.enable(13),U.vertexUv2s&&u.enable(14),U.vertexUv3s&&u.enable(15),U.vertexTangents&&u.enable(16),U.anisotropy&&u.enable(17),C.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.skinning&&u.enable(4),U.morphTargets&&u.enable(5),U.morphNormals&&u.enable(6),U.morphColors&&u.enable(7),U.premultipliedAlpha&&u.enable(8),U.shadowMapEnabled&&u.enable(9),U.useLegacyLights&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),C.push(u.mask)}function w(C){const U=E[C.type];let oe;if(U){const de=lr[U];oe=Hb.clone(de.uniforms)}else oe=C.uniforms;return oe}function P(C,U){let oe;for(let de=0,j=d.length;de<j;de++){const J=d[de];if(J.cacheKey===U){oe=J,++oe.usedTimes;break}}return oe===void 0&&(oe=new Q3(t,U,C,o),d.push(oe)),oe}function I(C){if(--C.usedTimes===0){const U=d.indexOf(C);d[U]=d[d.length-1],d.pop(),C.destroy()}}function D(C){f.remove(C)}function H(){f.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:w,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:d,dispose:H}}function iN(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,u){t.get(o)[l]=u}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function rN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $x(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kx(){const t=[];let e=0;const n=[],i=[],s=[];function o(){e=0,n.length=0,i.length=0,s.length=0}function l(g,_,x,E,T,v){let h=t[e];return h===void 0?(h={id:g.id,object:g,geometry:_,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:v},t[e]=h):(h.id=g.id,h.object=g,h.geometry=_,h.material=x,h.groupOrder=E,h.renderOrder=g.renderOrder,h.z=T,h.group=v),e++,h}function u(g,_,x,E,T,v){const h=l(g,_,x,E,T,v);x.transmission>0?i.push(h):x.transparent===!0?s.push(h):n.push(h)}function f(g,_,x,E,T,v){const h=l(g,_,x,E,T,v);x.transmission>0?i.unshift(h):x.transparent===!0?s.unshift(h):n.unshift(h)}function d(g,_){n.length>1&&n.sort(g||rN),i.length>1&&i.sort(_||$x),s.length>1&&s.sort(_||$x)}function p(){for(let g=e,_=t.length;g<_;g++){const x=t[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:p,sort:d}}function sN(){let t=new WeakMap;function e(i,s){const o=t.get(i);let l;return o===void 0?(l=new Kx,t.set(i,[l])):s>=o.length?(l=new Kx,o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function oN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new bt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function aN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lN=0;function uN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cN(t,e){const n=new oN,i=aN(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)s.probe.push(new Z);const o=new Z,l=new En,u=new En;function f(p,g){let _=0,x=0,E=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let T=0,v=0,h=0,y=0,S=0,w=0,P=0,I=0,D=0,H=0;p.sort(uN);const C=g===!0?Math.PI:1;for(let oe=0,de=p.length;oe<de;oe++){const j=p[oe],J=j.color,ie=j.intensity,fe=j.distance,ee=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=J.r*ie*C,x+=J.g*ie*C,E+=J.b*ie*C;else if(j.isLightProbe)for(let B=0;B<9;B++)s.probe[B].addScaledVector(j.sh.coefficients[B],ie);else if(j.isDirectionalLight){const B=n.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity*C),j.castShadow){const te=j.shadow,Y=i.get(j);Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,s.directionalShadow[T]=Y,s.directionalShadowMap[T]=ee,s.directionalShadowMatrix[T]=j.shadow.matrix,w++}s.directional[T]=B,T++}else if(j.isSpotLight){const B=n.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(J).multiplyScalar(ie*C),B.distance=fe,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,s.spot[h]=B;const te=j.shadow;if(j.map&&(s.spotLightMap[D]=j.map,D++,te.updateMatrices(j),j.castShadow&&H++),s.spotLightMatrix[h]=te.matrix,j.castShadow){const Y=i.get(j);Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,s.spotShadow[h]=Y,s.spotShadowMap[h]=ee,I++}h++}else if(j.isRectAreaLight){const B=n.get(j);B.color.copy(J).multiplyScalar(ie),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),s.rectArea[y]=B,y++}else if(j.isPointLight){const B=n.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity*C),B.distance=j.distance,B.decay=j.decay,j.castShadow){const te=j.shadow,Y=i.get(j);Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,Y.shadowCameraNear=te.camera.near,Y.shadowCameraFar=te.camera.far,s.pointShadow[v]=Y,s.pointShadowMap[v]=ee,s.pointShadowMatrix[v]=j.shadow.matrix,P++}s.point[v]=B,v++}else if(j.isHemisphereLight){const B=n.get(j);B.skyColor.copy(j.color).multiplyScalar(ie*C),B.groundColor.copy(j.groundColor).multiplyScalar(ie*C),s.hemi[S]=B,S++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ee.LTC_FLOAT_1,s.rectAreaLTC2=Ee.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ee.LTC_HALF_1,s.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=E;const U=s.hash;(U.directionalLength!==T||U.pointLength!==v||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==S||U.numDirectionalShadows!==w||U.numPointShadows!==P||U.numSpotShadows!==I||U.numSpotMaps!==D)&&(s.directional.length=T,s.spot.length=h,s.rectArea.length=y,s.point.length=v,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=I+D-H,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=H,U.directionalLength=T,U.pointLength=v,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=S,U.numDirectionalShadows=w,U.numPointShadows=P,U.numSpotShadows=I,U.numSpotMaps=D,s.version=lN++)}function d(p,g){let _=0,x=0,E=0,T=0,v=0;const h=g.matrixWorldInverse;for(let y=0,S=p.length;y<S;y++){const w=p[y];if(w.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(h),_++}else if(w.isSpotLight){const P=s.spot[E];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(h),E++}else if(w.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),u.identity(),l.copy(w.matrixWorld),l.premultiply(h),u.extractRotation(l),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(w.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),x++}else if(w.isHemisphereLight){const P=s.hemi[v];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(h),v++}}}return{setup:f,setupView:d,state:s}}function Zx(t,e){const n=new cN(t,e),i=[],s=[];function o(){i.length=0,s.length=0}function l(g){i.push(g)}function u(g){s.push(g)}function f(g){n.setup(i,g)}function d(g){n.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function fN(t,e){let n=new WeakMap;function i(o,l=0){const u=n.get(o);let f;return u===void 0?(f=new Zx(t,e),n.set(o,[f])):l>=u.length?(f=new Zx(t,e),u.push(f)):f=u[l],f}function s(){n=new WeakMap}return{get:i,dispose:s}}class dN extends Gf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hN extends Gf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gN(t,e,n){let i=new HM;const s=new Ct,o=new Ct,l=new yn,u=new dN({depthPacking:ab}),f=new hN,d={},p=n.maxTextureSize,g={[Ps]:ei,[ei]:Ps,[Nr]:Nr},_=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:pN,fragmentShader:mN}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new jr;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Br(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_M;let h=this.type;this.render=function(P,I,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const H=t.getRenderTarget(),C=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),oe=t.state;oe.setBlending(As),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const de=h!==Ur&&this.type===Ur,j=h===Ur&&this.type!==Ur;for(let J=0,ie=P.length;J<ie;J++){const fe=P[J],ee=fe.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const B=ee.getFrameExtents();if(s.multiply(B),o.copy(ee.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/B.x),s.x=o.x*B.x,ee.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/B.y),s.y=o.y*B.y,ee.mapSize.y=o.y)),ee.map===null||de===!0||j===!0){const Y=this.type!==Ur?{minFilter:Bn,magFilter:Bn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new go(s.x,s.y,Y),ee.map.texture.name=fe.name+".shadowMap",ee.camera.updateProjectionMatrix()}t.setRenderTarget(ee.map),t.clear();const te=ee.getViewportCount();for(let Y=0;Y<te;Y++){const V=ee.getViewport(Y);l.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),oe.viewport(l),ee.updateMatrices(fe,Y),i=ee.getFrustum(),w(I,D,ee.camera,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===Ur&&y(ee,D),ee.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(H,C,U)};function y(P,I){const D=e.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new go(s.x,s.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,D,_,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,D,x,T,null)}function S(P,I,D,H){let C=null;const U=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)C=U;else if(C=D.isPointLight===!0?f:u,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const oe=C.uuid,de=I.uuid;let j=d[oe];j===void 0&&(j={},d[oe]=j);let J=j[de];J===void 0&&(J=C.clone(),j[de]=J),C=J}if(C.visible=I.visible,C.wireframe=I.wireframe,H===Ur?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:g[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,D.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=t.properties.get(C);oe.light=D}return C}function w(P,I,D,H,C){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===Ur)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const de=e.update(P),j=P.material;if(Array.isArray(j)){const J=de.groups;for(let ie=0,fe=J.length;ie<fe;ie++){const ee=J[ie],B=j[ee.materialIndex];if(B&&B.visible){const te=S(P,B,H,C);t.renderBufferDirect(D,null,de,te,P,ee)}}}else if(j.visible){const J=S(P,j,H,C);t.renderBufferDirect(D,null,de,J,P,null)}}const oe=P.children;for(let de=0,j=oe.length;de<j;de++)w(oe[de],I,D,H,C)}}function _N(t,e,n){const i=n.isWebGL2;function s(){let z=!1;const we=new yn;let Q=null;const ve=new yn(0,0,0,0);return{setMask:function(Re){Q!==Re&&!z&&(t.colorMask(Re,Re,Re,Re),Q=Re)},setLocked:function(Re){z=Re},setClear:function(Re,_t,Dt,Jt,ti){ti===!0&&(Re*=Jt,_t*=Jt,Dt*=Jt),we.set(Re,_t,Dt,Jt),ve.equals(we)===!1&&(t.clearColor(Re,_t,Dt,Jt),ve.copy(we))},reset:function(){z=!1,Q=null,ve.set(-1,0,0,0)}}}function o(){let z=!1,we=null,Q=null,ve=null;return{setTest:function(Re){Re?qe(t.DEPTH_TEST):Be(t.DEPTH_TEST)},setMask:function(Re){we!==Re&&!z&&(t.depthMask(Re),we=Re)},setFunc:function(Re){if(Q!==Re){switch(Re){case FP:t.depthFunc(t.NEVER);break;case OP:t.depthFunc(t.ALWAYS);break;case zP:t.depthFunc(t.LESS);break;case Qp:t.depthFunc(t.LEQUAL);break;case BP:t.depthFunc(t.EQUAL);break;case kP:t.depthFunc(t.GEQUAL);break;case HP:t.depthFunc(t.GREATER);break;case GP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=Re}},setLocked:function(Re){z=Re},setClear:function(Re){ve!==Re&&(t.clearDepth(Re),ve=Re)},reset:function(){z=!1,we=null,Q=null,ve=null}}}function l(){let z=!1,we=null,Q=null,ve=null,Re=null,_t=null,Dt=null,Jt=null,ti=null;return{setTest:function(Ot){z||(Ot?qe(t.STENCIL_TEST):Be(t.STENCIL_TEST))},setMask:function(Ot){we!==Ot&&!z&&(t.stencilMask(Ot),we=Ot)},setFunc:function(Ot,Si,_n){(Q!==Ot||ve!==Si||Re!==_n)&&(t.stencilFunc(Ot,Si,_n),Q=Ot,ve=Si,Re=_n)},setOp:function(Ot,Si,_n){(_t!==Ot||Dt!==Si||Jt!==_n)&&(t.stencilOp(Ot,Si,_n),_t=Ot,Dt=Si,Jt=_n)},setLocked:function(Ot){z=Ot},setClear:function(Ot){ti!==Ot&&(t.clearStencil(Ot),ti=Ot)},reset:function(){z=!1,we=null,Q=null,ve=null,Re=null,_t=null,Dt=null,Jt=null,ti=null}}}const u=new s,f=new o,d=new l,p=new WeakMap,g=new WeakMap;let _={},x={},E=new WeakMap,T=[],v=null,h=!1,y=null,S=null,w=null,P=null,I=null,D=null,H=null,C=!1,U=null,oe=null,de=null,j=null,J=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,ee=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(B)[1]),fe=ee>=1):B.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),fe=ee>=2);let te=null,Y={};const V=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),ye=new yn().fromArray(V),xe=new yn().fromArray($);function Me(z,we,Q,ve){const Re=new Uint8Array(4),_t=t.createTexture();t.bindTexture(z,_t),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Dt=0;Dt<Q;Dt++)i&&(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)?t.texImage3D(we,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(we+Dt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return _t}const De={};De[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),De[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),De[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),qe(t.DEPTH_TEST),f.setFunc(Qp),Ke(!1),vt(F0),qe(t.CULL_FACE),Ne(As);function qe(z){_[z]!==!0&&(t.enable(z),_[z]=!0)}function Be(z){_[z]!==!1&&(t.disable(z),_[z]=!1)}function mt(z,we){return x[z]!==we?(t.bindFramebuffer(z,we),x[z]=we,i&&(z===t.DRAW_FRAMEBUFFER&&(x[t.FRAMEBUFFER]=we),z===t.FRAMEBUFFER&&(x[t.DRAW_FRAMEBUFFER]=we)),!0):!1}function wn(z,we){let Q=T,ve=!1;if(z)if(Q=E.get(we),Q===void 0&&(Q=[],E.set(we,Q)),z.isWebGLMultipleRenderTargets){const Re=z.texture;if(Q.length!==Re.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let _t=0,Dt=Re.length;_t<Dt;_t++)Q[_t]=t.COLOR_ATTACHMENT0+_t;Q.length=Re.length,ve=!0}}else Q[0]!==t.COLOR_ATTACHMENT0&&(Q[0]=t.COLOR_ATTACHMENT0,ve=!0);else Q[0]!==t.BACK&&(Q[0]=t.BACK,ve=!0);ve&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function et(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const X={[ia]:t.FUNC_ADD,[wP]:t.FUNC_SUBTRACT,[AP]:t.FUNC_REVERSE_SUBTRACT};if(i)X[k0]=t.MIN,X[H0]=t.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(X[k0]=z.MIN_EXT,X[H0]=z.MAX_EXT)}const rn={[RP]:t.ZERO,[CP]:t.ONE,[LP]:t.SRC_COLOR,[vM]:t.SRC_ALPHA,[NP]:t.SRC_ALPHA_SATURATE,[DP]:t.DST_COLOR,[bP]:t.DST_ALPHA,[PP]:t.ONE_MINUS_SRC_COLOR,[xM]:t.ONE_MINUS_SRC_ALPHA,[IP]:t.ONE_MINUS_DST_COLOR,[UP]:t.ONE_MINUS_DST_ALPHA};function Ne(z,we,Q,ve,Re,_t,Dt,Jt){if(z===As){h===!0&&(Be(t.BLEND),h=!1);return}if(h===!1&&(qe(t.BLEND),h=!0),z!==TP){if(z!==y||Jt!==C){if((S!==ia||I!==ia)&&(t.blendEquation(t.FUNC_ADD),S=ia,I=ia),Jt)switch(z){case Ta:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case O0:t.blendFunc(t.ONE,t.ONE);break;case z0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case B0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ta:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case O0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case z0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case B0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,P=null,D=null,H=null,y=z,C=Jt}return}Re=Re||we,_t=_t||Q,Dt=Dt||ve,(we!==S||Re!==I)&&(t.blendEquationSeparate(X[we],X[Re]),S=we,I=Re),(Q!==w||ve!==P||_t!==D||Dt!==H)&&(t.blendFuncSeparate(rn[Q],rn[ve],rn[_t],rn[Dt]),w=Q,P=ve,D=_t,H=Dt),y=z,C=!1}function $e(z,we){z.side===Nr?Be(t.CULL_FACE):qe(t.CULL_FACE);let Q=z.side===ei;we&&(Q=!Q),Ke(Q),z.blending===Ta&&z.transparent===!1?Ne(As):Ne(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),f.setFunc(z.depthFunc),f.setTest(z.depthTest),f.setMask(z.depthWrite),u.setMask(z.colorWrite);const ve=z.stencilWrite;d.setTest(ve),ve&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?qe(t.SAMPLE_ALPHA_TO_COVERAGE):Be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){U!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),U=z)}function vt(z){z!==yP?(qe(t.CULL_FACE),z!==oe&&(z===F0?t.cullFace(t.BACK):z===MP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Be(t.CULL_FACE),oe=z}function ut(z){z!==de&&(fe&&t.lineWidth(z),de=z)}function it(z,we,Q){z?(qe(t.POLYGON_OFFSET_FILL),(j!==we||J!==Q)&&(t.polygonOffset(we,Q),j=we,J=Q)):Be(t.POLYGON_OFFSET_FILL)}function xt(z){z?qe(t.SCISSOR_TEST):Be(t.SCISSOR_TEST)}function Et(z){z===void 0&&(z=t.TEXTURE0+ie-1),te!==z&&(t.activeTexture(z),te=z)}function jt(z,we,Q){Q===void 0&&(te===null?Q=t.TEXTURE0+ie-1:Q=te);let ve=Y[Q];ve===void 0&&(ve={type:void 0,texture:void 0},Y[Q]=ve),(ve.type!==z||ve.texture!==we)&&(te!==Q&&(t.activeTexture(Q),te=Q),t.bindTexture(z,we||De[z]),ve.type=z,ve.texture=we)}function N(){const z=Y[te];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function L(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(z){ye.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),ye.copy(z))}function be(z){xe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),xe.copy(z))}function Ue(z,we){let Q=g.get(we);Q===void 0&&(Q=new WeakMap,g.set(we,Q));let ve=Q.get(z);ve===void 0&&(ve=t.getUniformBlockIndex(we,z.name),Q.set(z,ve))}function tt(z,we){const ve=g.get(we).get(z);p.get(we)!==ve&&(t.uniformBlockBinding(we,ve,z.__bindingPointIndex),p.set(we,ve))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),_={},te=null,Y={},x={},E=new WeakMap,T=[],v=null,h=!1,y=null,S=null,w=null,P=null,I=null,D=null,H=null,C=!1,U=null,oe=null,de=null,j=null,J=null,ye.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:qe,disable:Be,bindFramebuffer:mt,drawBuffers:wn,useProgram:et,setBlending:Ne,setMaterial:$e,setFlipSided:Ke,setCullFace:vt,setLineWidth:ut,setPolygonOffset:it,setScissorTest:xt,activeTexture:Et,bindTexture:jt,unbindTexture:N,compressedTexImage2D:L,compressedTexImage3D:ne,texImage2D:Oe,texImage3D:ze,updateUBOMapping:Ue,uniformBlockBinding:tt,texStorage2D:Te,texStorage3D:le,texSubImage2D:_e,texSubImage3D:ge,compressedTexSubImage2D:Se,compressedTexSubImage3D:Fe,scissor:ke,viewport:be,reset:At}}function vN(t,e,n,i,s,o,l){const u=s.isWebGL2,f=s.maxTextures,d=s.maxCubemapSize,p=s.maxTextureSize,g=s.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let T;const v=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,L){return h?new OffscreenCanvas(N,L):Mf("canvas")}function S(N,L,ne,_e){let ge=1;if((N.width>_e||N.height>_e)&&(ge=_e/Math.max(N.width,N.height)),ge<1||L===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Se=L?sm:Math.floor,Fe=Se(ge*N.width),Te=Se(ge*N.height);T===void 0&&(T=y(Fe,Te));const le=ne?y(Fe,Te):T;return le.width=Fe,le.height=Te,le.getContext("2d").drawImage(N,0,0,Fe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Fe+"x"+Te+")."),le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function w(N){return px(N.width)&&px(N.height)}function P(N){return u?!1:N.wrapS!==Qi||N.wrapT!==Qi||N.minFilter!==Bn&&N.minFilter!==Di}function I(N,L){return N.generateMipmaps&&L&&N.minFilter!==Bn&&N.minFilter!==Di}function D(N){t.generateMipmap(N)}function H(N,L,ne,_e,ge=!1){if(u===!1)return L;if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Se=L;return L===t.RED&&(ne===t.FLOAT&&(Se=t.R32F),ne===t.HALF_FLOAT&&(Se=t.R16F),ne===t.UNSIGNED_BYTE&&(Se=t.R8)),L===t.RG&&(ne===t.FLOAT&&(Se=t.RG32F),ne===t.HALF_FLOAT&&(Se=t.RG16F),ne===t.UNSIGNED_BYTE&&(Se=t.RG8)),L===t.RGBA&&(ne===t.FLOAT&&(Se=t.RGBA32F),ne===t.HALF_FLOAT&&(Se=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(Se=_e===ot&&ge===!1?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(Se=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(Se=t.RGB5_A1)),(Se===t.R16F||Se===t.R32F||Se===t.RG16F||Se===t.RG32F||Se===t.RGBA16F||Se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function C(N,L,ne){return I(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==Bn&&N.minFilter!==Di?Math.log2(Math.max(L.width,L.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?L.mipmaps.length:1}function U(N){return N===Bn||N===G0||N===Lh?t.NEAREST:t.LINEAR}function oe(N){const L=N.target;L.removeEventListener("dispose",oe),j(L),L.isVideoTexture&&E.delete(L)}function de(N){const L=N.target;L.removeEventListener("dispose",de),ie(L)}function j(N){const L=i.get(N);if(L.__webglInit===void 0)return;const ne=N.source,_e=v.get(ne);if(_e){const ge=_e[L.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&J(N),Object.keys(_e).length===0&&v.delete(ne)}i.remove(N)}function J(N){const L=i.get(N);t.deleteTexture(L.__webglTexture);const ne=N.source,_e=v.get(ne);delete _e[L.__cacheKey],l.memory.textures--}function ie(N){const L=N.texture,ne=i.get(N),_e=i.get(L);if(_e.__webglTexture!==void 0&&(t.deleteTexture(_e.__webglTexture),l.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)t.deleteFramebuffer(ne.__webglFramebuffer[ge]),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer[ge]);else{if(t.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let ge=0;ge<ne.__webglColorRenderbuffer.length;ge++)ne.__webglColorRenderbuffer[ge]&&t.deleteRenderbuffer(ne.__webglColorRenderbuffer[ge]);ne.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ge=0,Se=L.length;ge<Se;ge++){const Fe=i.get(L[ge]);Fe.__webglTexture&&(t.deleteTexture(Fe.__webglTexture),l.memory.textures--),i.remove(L[ge])}i.remove(L),i.remove(N)}let fe=0;function ee(){fe=0}function B(){const N=fe;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),fe+=1,N}function te(N){const L=[];return L.push(N.wrapS),L.push(N.wrapT),L.push(N.wrapR||0),L.push(N.magFilter),L.push(N.minFilter),L.push(N.anisotropy),L.push(N.internalFormat),L.push(N.format),L.push(N.type),L.push(N.generateMipmaps),L.push(N.premultiplyAlpha),L.push(N.flipY),L.push(N.unpackAlignment),L.push(N.colorSpace),L.join()}function Y(N,L){const ne=i.get(N);if(N.isVideoTexture&&Et(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const _e=N.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(ne,N,L);return}}n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+L)}function V(N,L){const ne=i.get(N);if(N.version>0&&ne.__version!==N.version){mt(ne,N,L);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+L)}function $(N,L){const ne=i.get(N);if(N.version>0&&ne.__version!==N.version){mt(ne,N,L);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+L)}function ye(N,L){const ne=i.get(N);if(N.version>0&&ne.__version!==N.version){wn(ne,N,L);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+L)}const xe={[tm]:t.REPEAT,[Qi]:t.CLAMP_TO_EDGE,[nm]:t.MIRRORED_REPEAT},Me={[Bn]:t.NEAREST,[G0]:t.NEAREST_MIPMAP_NEAREST,[Lh]:t.NEAREST_MIPMAP_LINEAR,[Di]:t.LINEAR,[KP]:t.LINEAR_MIPMAP_NEAREST,[Jl]:t.LINEAR_MIPMAP_LINEAR},De={[fb]:t.NEVER,[vb]:t.ALWAYS,[db]:t.LESS,[pb]:t.LEQUAL,[hb]:t.EQUAL,[_b]:t.GEQUAL,[mb]:t.GREATER,[gb]:t.NOTEQUAL};function qe(N,L,ne){if(ne?(t.texParameteri(N,t.TEXTURE_WRAP_S,xe[L.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,xe[L.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,xe[L.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Me[L.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Me[L.minFilter])):(t.texParameteri(N,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(N,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(L.wrapS!==Qi||L.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(N,t.TEXTURE_MAG_FILTER,U(L.magFilter)),t.texParameteri(N,t.TEXTURE_MIN_FILTER,U(L.minFilter)),L.minFilter!==Bn&&L.minFilter!==Di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,De[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Bn||L.minFilter!==Lh&&L.minFilter!==Jl||L.type===_s&&e.has("OES_texture_float_linear")===!1||u===!1&&L.type===eu&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(t.texParameterf(N,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function Be(N,L){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,L.addEventListener("dispose",oe));const _e=L.source;let ge=v.get(_e);ge===void 0&&(ge={},v.set(_e,ge));const Se=te(L);if(Se!==N.__cacheKey){ge[Se]===void 0&&(ge[Se]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),ge[Se].usedTimes++;const Fe=ge[N.__cacheKey];Fe!==void 0&&(ge[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&J(L)),N.__cacheKey=Se,N.__webglTexture=ge[Se].texture}return ne}function mt(N,L,ne){let _e=t.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(_e=t.TEXTURE_2D_ARRAY),L.isData3DTexture&&(_e=t.TEXTURE_3D);const ge=Be(N,L),Se=L.source;n.bindTexture(_e,N.__webglTexture,t.TEXTURE0+ne);const Fe=i.get(Se);if(Se.version!==Fe.__version||ge===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Te=P(L)&&w(L.image)===!1;let le=S(L.image,Te,!1,p);le=jt(L,le);const Oe=w(le)||u,ze=o.convert(L.format,L.colorSpace);let ke=o.convert(L.type),be=H(L.internalFormat,ze,ke,L.colorSpace);qe(_e,L,Oe);let Ue;const tt=L.mipmaps,At=u&&L.isVideoTexture!==!0,z=Fe.__version===void 0||ge===!0,we=C(L,le,Oe);if(L.isDepthTexture)be=t.DEPTH_COMPONENT,u?L.type===_s?be=t.DEPTH_COMPONENT32F:L.type===gs?be=t.DEPTH_COMPONENT24:L.type===oo?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:L.type===_s&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ao&&be===t.DEPTH_COMPONENT&&L.type!==rg&&L.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=gs,ke=o.convert(L.type)),L.format===Fa&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,L.type!==oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=oo,ke=o.convert(L.type))),z&&(At?n.texStorage2D(t.TEXTURE_2D,1,be,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,be,le.width,le.height,0,ze,ke,null));else if(L.isDataTexture)if(tt.length>0&&Oe){At&&z&&n.texStorage2D(t.TEXTURE_2D,we,be,tt[0].width,tt[0].height);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,ze,ke,Ue.data):n.texImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,ze,ke,Ue.data);L.generateMipmaps=!1}else At?(z&&n.texStorage2D(t.TEXTURE_2D,we,be,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ze,ke,le.data)):n.texImage2D(t.TEXTURE_2D,0,be,le.width,le.height,0,ze,ke,le.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){At&&z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,be,tt[0].width,tt[0].height,le.depth);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],L.format!==Ji?ze!==null?At?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ue.width,Ue.height,le.depth,ze,Ue.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,be,Ue.width,Ue.height,le.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ue.width,Ue.height,le.depth,ze,ke,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,be,Ue.width,Ue.height,le.depth,0,ze,ke,Ue.data)}else{At&&z&&n.texStorage2D(t.TEXTURE_2D,we,be,tt[0].width,tt[0].height);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],L.format!==Ji?ze!==null?At?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,ze,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,ze,ke,Ue.data):n.texImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,ze,ke,Ue.data)}else if(L.isDataArrayTexture)At?(z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,be,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,ke,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,le.width,le.height,le.depth,0,ze,ke,le.data);else if(L.isData3DTexture)At?(z&&n.texStorage3D(t.TEXTURE_3D,we,be,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,ke,le.data)):n.texImage3D(t.TEXTURE_3D,0,be,le.width,le.height,le.depth,0,ze,ke,le.data);else if(L.isFramebufferTexture){if(z)if(At)n.texStorage2D(t.TEXTURE_2D,we,be,le.width,le.height);else{let Q=le.width,ve=le.height;for(let Re=0;Re<we;Re++)n.texImage2D(t.TEXTURE_2D,Re,be,Q,ve,0,ze,ke,null),Q>>=1,ve>>=1}}else if(tt.length>0&&Oe){At&&z&&n.texStorage2D(t.TEXTURE_2D,we,be,tt[0].width,tt[0].height);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ze,ke,Ue):n.texImage2D(t.TEXTURE_2D,Q,be,ze,ke,Ue);L.generateMipmaps=!1}else At?(z&&n.texStorage2D(t.TEXTURE_2D,we,be,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ze,ke,le)):n.texImage2D(t.TEXTURE_2D,0,be,ze,ke,le);I(L,Oe)&&D(_e),Fe.__version=Se.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function wn(N,L,ne){if(L.image.length!==6)return;const _e=Be(N,L),ge=L.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+ne);const Se=i.get(ge);if(ge.version!==Se.__version||_e===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Fe=L.isCompressedTexture||L.image[0].isCompressedTexture,Te=L.image[0]&&L.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Fe&&!Te?le[Q]=S(L.image[Q],!1,!0,d):le[Q]=Te?L.image[Q].image:L.image[Q],le[Q]=jt(L,le[Q]);const Oe=le[0],ze=w(Oe)||u,ke=o.convert(L.format,L.colorSpace),be=o.convert(L.type),Ue=H(L.internalFormat,ke,be,L.colorSpace),tt=u&&L.isVideoTexture!==!0,At=Se.__version===void 0||_e===!0;let z=C(L,Oe,ze);qe(t.TEXTURE_CUBE_MAP,L,ze);let we;if(Fe){tt&&At&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Ue,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){we=le[Q].mipmaps;for(let ve=0;ve<we.length;ve++){const Re=we[ve];L.format!==Ji?ke!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Re.width,Re.height,ke,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Re.width,Re.height,ke,be,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ue,Re.width,Re.height,0,ke,be,Re.data)}}}else{we=L.mipmaps,tt&&At&&(we.length>0&&z++,n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Ue,le[0].width,le[0].height));for(let Q=0;Q<6;Q++)if(Te){tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,ke,be,le[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,le[Q].width,le[Q].height,0,ke,be,le[Q].data);for(let ve=0;ve<we.length;ve++){const _t=we[ve].image[Q].image;tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,_t.width,_t.height,ke,be,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ue,_t.width,_t.height,0,ke,be,_t.data)}}else{tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,be,le[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,ke,be,le[Q]);for(let ve=0;ve<we.length;ve++){const Re=we[ve];tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ke,be,Re.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ue,ke,be,Re.image[Q])}}}I(L,ze)&&D(t.TEXTURE_CUBE_MAP),Se.__version=ge.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function et(N,L,ne,_e,ge){const Se=o.convert(ne.format,ne.colorSpace),Fe=o.convert(ne.type),Te=H(ne.internalFormat,Se,Fe,ne.colorSpace);i.get(L).__hasExternalTextures||(ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,Te,L.width,L.height,L.depth,0,Se,Fe,null):n.texImage2D(ge,0,Te,L.width,L.height,0,Se,Fe,null)),n.bindFramebuffer(t.FRAMEBUFFER,N),xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,ge,i.get(ne).__webglTexture,0,it(L)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,_e,ge,i.get(ne).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(N,L,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,N),L.depthBuffer&&!L.stencilBuffer){let _e=t.DEPTH_COMPONENT16;if(ne||xt(L)){const ge=L.depthTexture;ge&&ge.isDepthTexture&&(ge.type===_s?_e=t.DEPTH_COMPONENT32F:ge.type===gs&&(_e=t.DEPTH_COMPONENT24));const Se=it(L);xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,_e,L.width,L.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,_e,L.width,L.height)}else t.renderbufferStorage(t.RENDERBUFFER,_e,L.width,L.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,N)}else if(L.depthBuffer&&L.stencilBuffer){const _e=it(L);ne&&xt(L)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,L.width,L.height):xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,L.width,L.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,N)}else{const _e=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ge=0;ge<_e.length;ge++){const Se=_e[ge],Fe=o.convert(Se.format,Se.colorSpace),Te=o.convert(Se.type),le=H(Se.internalFormat,Fe,Te,Se.colorSpace),Oe=it(L);ne&&xt(L)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,le,L.width,L.height):xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,le,L.width,L.height):t.renderbufferStorage(t.RENDERBUFFER,le,L.width,L.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rn(N,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),Y(L.depthTexture,0);const _e=i.get(L.depthTexture).__webglTexture,ge=it(L);if(L.depthTexture.format===ao)xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(L.depthTexture.format===Fa)xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const L=i.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!L.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");rn(L.__webglFramebuffer,N)}else if(ne){L.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer[_e]),L.__webglDepthbuffer[_e]=t.createRenderbuffer(),X(L.__webglDepthbuffer[_e],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=t.createRenderbuffer(),X(L.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(N,L,ne){const _e=i.get(N);L!==void 0&&et(_e.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),ne!==void 0&&Ne(N)}function Ke(N){const L=N.texture,ne=i.get(N),_e=i.get(L);N.addEventListener("dispose",de),N.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture()),_e.__version=L.version,l.memory.textures++);const ge=N.isWebGLCubeRenderTarget===!0,Se=N.isWebGLMultipleRenderTargets===!0,Fe=w(N)||u;if(ge){ne.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)ne.__webglFramebuffer[Te]=t.createFramebuffer()}else{if(ne.__webglFramebuffer=t.createFramebuffer(),Se)if(s.drawBuffers){const Te=N.texture;for(let le=0,Oe=Te.length;le<Oe;le++){const ze=i.get(Te[le]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&N.samples>0&&xt(N)===!1){const Te=Se?L:[L];ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let le=0;le<Te.length;le++){const Oe=Te[le];ne.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[le]);const ze=o.convert(Oe.format,Oe.colorSpace),ke=o.convert(Oe.type),be=H(Oe.internalFormat,ze,ke,Oe.colorSpace,N.isXRRenderTarget===!0),Ue=it(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,be,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ne.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),X(ne.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ge){n.bindTexture(t.TEXTURE_CUBE_MAP,_e.__webglTexture),qe(t.TEXTURE_CUBE_MAP,L,Fe);for(let Te=0;Te<6;Te++)et(ne.__webglFramebuffer[Te],N,L,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te);I(L,Fe)&&D(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){const Te=N.texture;for(let le=0,Oe=Te.length;le<Oe;le++){const ze=Te[le],ke=i.get(ze);n.bindTexture(t.TEXTURE_2D,ke.__webglTexture),qe(t.TEXTURE_2D,ze,Fe),et(ne.__webglFramebuffer,N,ze,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D),I(ze,Fe)&&D(t.TEXTURE_2D)}n.unbindTexture()}else{let Te=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(u?Te=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Te,_e.__webglTexture),qe(Te,L,Fe),et(ne.__webglFramebuffer,N,L,t.COLOR_ATTACHMENT0,Te),I(L,Fe)&&D(Te),n.unbindTexture()}N.depthBuffer&&Ne(N)}function vt(N){const L=w(N)||u,ne=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let _e=0,ge=ne.length;_e<ge;_e++){const Se=ne[_e];if(I(Se,L)){const Fe=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(Se).__webglTexture;n.bindTexture(Fe,Te),D(Fe),n.unbindTexture()}}}function ut(N){if(u&&N.samples>0&&xt(N)===!1){const L=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ne=N.width,_e=N.height;let ge=t.COLOR_BUFFER_BIT;const Se=[],Fe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(N),le=N.isWebGLMultipleRenderTargets===!0;if(le)for(let Oe=0;Oe<L.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){Se.push(t.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&Se.push(Fe);const ze=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(ze===!1&&(N.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),le){const ke=i.get(L[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,ge,t.NEAREST),x&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Oe=0;Oe<L.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const ze=i.get(L[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function it(N){return Math.min(g,N.samples)}function xt(N){const L=i.get(N);return u&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Et(N){const L=l.render.frame;E.get(N)!==L&&(E.set(N,L),N.update())}function jt(N,L){const ne=N.colorSpace,_e=N.format,ge=N.type;return N.isCompressedTexture===!0||N.format===im||ne!==dr&&ne!==uo&&(ne===ot?u===!1?e.has("EXT_sRGB")===!0&&_e===Ji?(N.format=im,N.minFilter=Di,N.generateMipmaps=!1):L=bM.sRGBToLinear(L):(_e!==Ji||ge!==Rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),L}this.allocateTextureUnit=B,this.resetTextureUnits=ee,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=ye,this.rebindTextures=$e,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=et,this.useMultisampledRTT=xt}function xN(t,e,n){const i=n.isWebGL2;function s(o,l=uo){let u;if(o===Rs)return t.UNSIGNED_BYTE;if(o===EM)return t.UNSIGNED_SHORT_4_4_4_4;if(o===TM)return t.UNSIGNED_SHORT_5_5_5_1;if(o===ZP)return t.BYTE;if(o===QP)return t.SHORT;if(o===rg)return t.UNSIGNED_SHORT;if(o===MM)return t.INT;if(o===gs)return t.UNSIGNED_INT;if(o===_s)return t.FLOAT;if(o===eu)return i?t.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(o===JP)return t.ALPHA;if(o===Ji)return t.RGBA;if(o===eb)return t.LUMINANCE;if(o===tb)return t.LUMINANCE_ALPHA;if(o===ao)return t.DEPTH_COMPONENT;if(o===Fa)return t.DEPTH_STENCIL;if(o===im)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(o===nb)return t.RED;if(o===wM)return t.RED_INTEGER;if(o===ib)return t.RG;if(o===AM)return t.RG_INTEGER;if(o===RM)return t.RGBA_INTEGER;if(o===Ph||o===bh||o===Uh||o===Dh)if(l===ot)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(o===Ph)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===bh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Uh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Dh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(o===Ph)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===bh)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Uh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Dh)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===V0||o===W0||o===X0||o===q0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(o===V0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===W0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===X0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===q0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===rb)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===j0||o===Y0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(o===j0)return l===ot?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(o===Y0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===$0||o===K0||o===Z0||o===Q0||o===J0||o===ex||o===tx||o===nx||o===ix||o===rx||o===sx||o===ox||o===ax||o===lx)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(o===$0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===K0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Z0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Q0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===J0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ex)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===tx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===nx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ix)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===rx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===sx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ox)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ax)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===lx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ih)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(o===Ih)return l===ot?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===sb||o===ux||o===cx||o===fx)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(o===Ih)return u.COMPRESSED_RED_RGTC1_EXT;if(o===ux)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===cx)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===fx)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===oo?i?t.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:s}}class SN extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Fc=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}};const yN={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,i),h=this._getHandJoint(d,T);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=p.position.distanceTo(g.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(yN)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class MN extends pi{constructor(e,n,i,s,o,l,u,f,d,p){if(p=p!==void 0?p:ao,p!==ao&&p!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ao&&(i=gs),i===void 0&&p===Fa&&(i=oo),super(null,s,o,l,u,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:Bn,this.minFilter=f!==void 0?f:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class EN extends Ha{constructor(e,n){super();const i=this;let s=null,o=1,l=null,u="local-floor",f=1,d=null,p=null,g=null,_=null,x=null,E=null;const T=n.getContextAttributes();let v=null,h=null;const y=[],S=[],w=new Ii;w.layers.enable(1),w.viewport=new yn;const P=new Ii;P.layers.enable(2),P.viewport=new yn;const I=[w,P],D=new SN;D.layers.enable(1),D.layers.enable(2);let H=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getGripSpace()},this.getHand=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getHandSpace()};function U(V){const $=S.indexOf(V.inputSource);if($===-1)return;const ye=y[$];ye!==void 0&&(ye.update(V.inputSource,V.frame,d||l),ye.dispatchEvent({type:V.type,data:V.inputSource}))}function oe(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",de);for(let V=0;V<y.length;V++){const $=S[V];$!==null&&(S[V]=null,y[V].disconnect($))}H=null,C=null,e.setRenderTarget(v),x=null,_=null,g=null,s=null,h=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(V){d=V},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",de),T.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,n,$),s.updateRenderState({baseLayer:x}),h=new go(x.framebufferWidth,x.framebufferHeight,{format:Ji,type:Rs,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let $=null,ye=null,xe=null;T.depth&&(xe=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=T.stencil?Fa:ao,ye=T.stencil?oo:gs);const Me={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};g=new XRWebGLBinding(s,n),_=g.createProjectionLayer(Me),s.updateRenderState({layers:[_]}),h=new go(_.textureWidth,_.textureHeight,{format:Ji,type:Rs,depthTexture:new MN(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=_.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function de(V){for(let $=0;$<V.removed.length;$++){const ye=V.removed[$],xe=S.indexOf(ye);xe>=0&&(S[xe]=null,y[xe].disconnect(ye))}for(let $=0;$<V.added.length;$++){const ye=V.added[$];let xe=S.indexOf(ye);if(xe===-1){for(let De=0;De<y.length;De++)if(De>=S.length){S.push(ye),xe=De;break}else if(S[De]===null){S[De]=ye,xe=De;break}if(xe===-1)break}const Me=y[xe];Me&&Me.connect(ye)}}const j=new Z,J=new Z;function ie(V,$,ye){j.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const xe=j.distanceTo(J),Me=$.projectionMatrix.elements,De=ye.projectionMatrix.elements,qe=Me[14]/(Me[10]-1),Be=Me[14]/(Me[10]+1),mt=(Me[9]+1)/Me[5],wn=(Me[9]-1)/Me[5],et=(Me[8]-1)/Me[0],X=(De[8]+1)/De[0],rn=qe*et,Ne=qe*X,$e=xe/(-et+X),Ke=$e*-et;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ($e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const vt=qe+$e,ut=Be+$e,it=rn-Ke,xt=Ne+(xe-Ke),Et=mt*Be/ut*vt,jt=wn*Be/ut*vt;V.projectionMatrix.makePerspective(it,xt,Et,jt,vt,ut),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function fe(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;D.near=P.near=w.near=V.near,D.far=P.far=w.far=V.far,(H!==D.near||C!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,C=D.far);const $=V.parent,ye=D.cameras;fe(D,$);for(let xe=0;xe<ye.length;xe++)fe(ye[xe],$);ye.length===2?ie(D,w,P):D.projectionMatrix.copy(w.projectionMatrix),ee(V,D,$)};function ee(V,$,ye){ye===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ye.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const xe=V.children;for(let Me=0,De=xe.length;Me<De;Me++)xe[Me].updateMatrixWorld(!0);V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=rm*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(V){f=V,_!==null&&(_.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)};let B=null;function te(V,$){if(p=$.getViewerPose(d||l),E=$,p!==null){const ye=p.views;x!==null&&(e.setRenderTargetFramebuffer(h,x.framebuffer),e.setRenderTarget(h));let xe=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,xe=!0);for(let Me=0;Me<ye.length;Me++){const De=ye[Me];let qe=null;if(x!==null)qe=x.getViewport(De);else{const mt=g.getViewSubImage(_,De);qe=mt.viewport,Me===0&&(e.setRenderTargetTextures(h,mt.colorTexture,_.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(h))}let Be=I[Me];Be===void 0&&(Be=new Ii,Be.layers.enable(Me),Be.viewport=new yn,I[Me]=Be),Be.matrix.fromArray(De.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(De.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),Me===0&&(D.matrix.copy(Be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xe===!0&&D.cameras.push(Be)}}for(let ye=0;ye<y.length;ye++){const xe=S[ye],Me=y[ye];xe!==null&&Me!==void 0&&Me.update(xe,$,d||l)}B&&B(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),E=null}const Y=new GM;Y.setAnimationLoop(te),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}function TN(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,zM(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function s(v,h,y,S,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(v,h):h.isMeshToonMaterial?(o(v,h),g(v,h)):h.isMeshPhongMaterial?(o(v,h),p(v,h)):h.isMeshStandardMaterial?(o(v,h),_(v,h),h.isMeshPhysicalMaterial&&x(v,h,w)):h.isMeshMatcapMaterial?(o(v,h),E(v,h)):h.isMeshDepthMaterial?o(v,h):h.isMeshDistanceMaterial?(o(v,h),T(v,h)):h.isMeshNormalMaterial?o(v,h):h.isLineBasicMaterial?(l(v,h),h.isLineDashedMaterial&&u(v,h)):h.isPointsMaterial?f(v,h,y,S):h.isSpriteMaterial?d(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===ei&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===ei&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(v.envMap.value=y,v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap){v.lightMap.value=h.lightMap;const S=t.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=h.lightMapIntensity*S,n(h.lightMap,v.lightMapTransform)}h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function l(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function u(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function f(v,h,y,S){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*y,v.scale.value=S*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function d(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function p(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function g(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function _(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),e.get(h).envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function x(v,h,y){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&v.clearcoatNormalScale.value.negate())),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,h){h.matcap&&(v.matcap.value=h.matcap)}function T(v,h){const y=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wN(t,e,n,i){let s={},o={},l=[];const u=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(y,S){const w=S.program;i.uniformBlockBinding(y,w)}function d(y,S){let w=s[y.id];w===void 0&&(E(y),w=p(y),s[y.id]=w,y.addEventListener("dispose",v));const P=S.program;i.updateUBOMapping(y,P);const I=e.render.frame;o[y.id]!==I&&(_(y),o[y.id]=I)}function p(y){const S=g();y.__bindingPointIndex=S;const w=t.createBuffer(),P=y.__size,I=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,w),w}function g(){for(let y=0;y<u;y++)if(l.indexOf(y)===-1)return l.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(y){const S=s[y.id],w=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let I=0,D=w.length;I<D;I++){const H=w[I];if(x(H,I,P)===!0){const C=H.__offset,U=Array.isArray(H.value)?H.value:[H.value];let oe=0;for(let de=0;de<U.length;de++){const j=U[de],J=T(j);typeof j=="number"?(H.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,C+oe,H.__data)):j.isMatrix3?(H.__data[0]=j.elements[0],H.__data[1]=j.elements[1],H.__data[2]=j.elements[2],H.__data[3]=j.elements[0],H.__data[4]=j.elements[3],H.__data[5]=j.elements[4],H.__data[6]=j.elements[5],H.__data[7]=j.elements[0],H.__data[8]=j.elements[6],H.__data[9]=j.elements[7],H.__data[10]=j.elements[8],H.__data[11]=j.elements[0]):(j.toArray(H.__data,oe),oe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,H.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(y,S,w){const P=y.value;if(w[S]===void 0){if(typeof P=="number")w[S]=P;else{const I=Array.isArray(P)?P:[P],D=[];for(let H=0;H<I.length;H++)D.push(I[H].clone());w[S]=D}return!0}else if(typeof P=="number"){if(w[S]!==P)return w[S]=P,!0}else{const I=Array.isArray(w[S])?w[S]:[w[S]],D=Array.isArray(P)?P:[P];for(let H=0;H<I.length;H++){const C=I[H];if(C.equals(D[H])===!1)return C.copy(D[H]),!0}}return!1}function E(y){const S=y.uniforms;let w=0;const P=16;let I=0;for(let D=0,H=S.length;D<H;D++){const C=S[D],U={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let de=0,j=oe.length;de<j;de++){const J=oe[de],ie=T(J);U.boundary+=ie.boundary,U.storage+=ie.storage}if(C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,D>0){I=w%P;const de=P-I;I!==0&&de-U.boundary<0&&(w+=P-I,C.__offset=w)}w+=U.storage}return I=w%P,I>0&&(w+=P-I),y.__size=w,y.__cache={},this}function T(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){const S=y.target;S.removeEventListener("dispose",v);const w=l.indexOf(S.__bindingPointIndex);l.splice(w,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function h(){for(const y in s)t.deleteBuffer(s[y]);l=[],s={},o={}}return{bind:f,update:d,dispose:h}}function AN(){const t=Mf("canvas");return t.style.display="block",t}class jM{constructor(e={}){const{canvas:n=AN(),context:i=null,depth:s=!0,stencil:o=!0,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=l;const x=new Uint32Array(4),E=new Int32Array(4);let T=null,v=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ot,this.useLegacyLights=!0,this.toneMapping=Hr,this.toneMappingExposure=1;const S=this;let w=!1,P=0,I=0,D=null,H=-1,C=null;const U=new yn,oe=new yn;let de=null;const j=new bt(0);let J=0,ie=n.width,fe=n.height,ee=1,B=null,te=null;const Y=new yn(0,0,ie,fe),V=new yn(0,0,ie,fe);let $=!1;const ye=new HM;let xe=!1,Me=!1,De=null;const qe=new En,Be=new Ct,mt=new Z,wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return D===null?ee:1}let X=i;function rn(b,q){for(let re=0;re<b.length;re++){const W=b[re],ae=n.getContext(W,q);if(ae!==null)return ae}return null}try{const b={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ig}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",ve,!1),X===null){const q=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&q.shift(),X=rn(q,b),X===null)throw rn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,$e,Ke,vt,ut,it,xt,Et,jt,N,L,ne,_e,ge,Se,Fe,Te,le,Oe,ze,ke,be,Ue,tt;function At(){Ne=new FI(X),$e=new LI(X,Ne,e),Ne.init($e),be=new xN(X,Ne,$e),Ke=new _N(X,Ne,$e),vt=new BI(X),ut=new iN,it=new vN(X,Ne,Ke,ut,$e,be,vt),xt=new bI(S),Et=new NI(S),jt=new Yb(X,$e),Ue=new RI(X,Ne,jt,$e),N=new OI(X,jt,vt,Ue),L=new VI(X,N,jt,vt),Oe=new GI(X,$e,it),Fe=new PI(ut),ne=new nN(S,xt,Et,Ne,$e,Ue,Fe),_e=new TN(S,ut),ge=new sN,Se=new fN(Ne,$e),le=new AI(S,xt,Et,Ke,L,_,f),Te=new gN(S,L,$e),tt=new wN(X,vt,$e,Ke),ze=new CI(X,Ne,vt,$e),ke=new zI(X,Ne,vt,$e),vt.programs=ne.programs,S.capabilities=$e,S.extensions=Ne,S.properties=ut,S.renderLists=ge,S.shadowMap=Te,S.state=Ke,S.info=vt}At();const z=new EN(S,X);this.xr=z,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(ie,fe,!1))},this.getSize=function(b){return b.set(ie,fe)},this.setSize=function(b,q,re=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,fe=q,n.width=Math.floor(b*ee),n.height=Math.floor(q*ee),re===!0&&(n.style.width=b+"px",n.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(ie*ee,fe*ee).floor()},this.setDrawingBufferSize=function(b,q,re){ie=b,fe=q,ee=re,n.width=Math.floor(b*re),n.height=Math.floor(q*re),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,q,re,W){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,q,re,W),Ke.viewport(U.copy(Y).multiplyScalar(ee).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,q,re,W){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,q,re,W),Ke.scissor(oe.copy(V).multiplyScalar(ee).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){Ke.setScissorTest($=b)},this.setOpaqueSort=function(b){B=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(b=!0,q=!0,re=!0){let W=0;if(b){let ae=!1;if(D!==null){const Pe=D.texture.format;ae=Pe===RM||Pe===AM||Pe===wM}if(ae){const Pe=D.texture.type,He=Pe===Rs||Pe===gs||Pe===rg||Pe===oo||Pe===EM||Pe===TM,je=le.getClearColor(),Xe=le.getClearAlpha(),at=je.r,Ye=je.g,Je=je.b;He?(x[0]=at,x[1]=Ye,x[2]=Je,x[3]=Xe,X.clearBufferuiv(X.COLOR,0,x)):(E[0]=at,E[1]=Ye,E[2]=Je,E[3]=Xe,X.clearBufferiv(X.COLOR,0,E))}else W|=X.COLOR_BUFFER_BIT}q&&(W|=X.DEPTH_BUFFER_BIT),re&&(W|=X.STENCIL_BUFFER_BIT),X.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),Se.dispose(),ut.dispose(),xt.dispose(),Et.dispose(),L.dispose(),Ue.dispose(),tt.dispose(),ne.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ot),z.removeEventListener("sessionend",Si),De&&(De.dispose(),De=null),_n.stop()};function we(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=vt.autoReset,q=Te.enabled,re=Te.autoUpdate,W=Te.needsUpdate,ae=Te.type;At(),vt.autoReset=b,Te.enabled=q,Te.autoUpdate=re,Te.needsUpdate=W,Te.type=ae}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const q=b.target;q.removeEventListener("dispose",Re),_t(q)}function _t(b){Dt(b),ut.remove(b)}function Dt(b){const q=ut.get(b).programs;q!==void 0&&(q.forEach(function(re){ne.releaseProgram(re)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,re,W,ae,Pe){q===null&&(q=wn);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,je=Wf(b,q,re,W,ae);Ke.setMaterial(W,He);let Xe=re.index,at=1;W.wireframe===!0&&(Xe=N.getWireframeAttribute(re),at=2);const Ye=re.drawRange,Je=re.attributes.position;let zt=Ye.start*at,Ht=(Ye.start+Ye.count)*at;Pe!==null&&(zt=Math.max(zt,Pe.start*at),Ht=Math.min(Ht,(Pe.start+Pe.count)*at)),Xe!==null?(zt=Math.max(zt,0),Ht=Math.min(Ht,Xe.count)):Je!=null&&(zt=Math.max(zt,0),Ht=Math.min(Ht,Je.count));const Vn=Ht-zt;if(Vn<0||Vn===1/0)return;Ue.setup(ae,W,je,re,Xe);let yi,Gt=ze;if(Xe!==null&&(yi=jt.get(Xe),Gt=ke,Gt.setIndex(yi)),ae.isMesh)W.wireframe===!0?(Ke.setLineWidth(W.wireframeLinewidth*et()),Gt.setMode(X.LINES)):Gt.setMode(X.TRIANGLES);else if(ae.isLine){let dt=W.linewidth;dt===void 0&&(dt=1),Ke.setLineWidth(dt*et()),ae.isLineSegments?Gt.setMode(X.LINES):ae.isLineLoop?Gt.setMode(X.LINE_LOOP):Gt.setMode(X.LINE_STRIP)}else ae.isPoints?Gt.setMode(X.POINTS):ae.isSprite&&Gt.setMode(X.TRIANGLES);if(ae.isInstancedMesh)Gt.renderInstances(zt,Vn,ae.count);else if(re.isInstancedBufferGeometry){const dt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wa=Math.min(re.instanceCount,dt);Gt.renderInstances(zt,Vn,Wa)}else Gt.render(zt,Vn)},this.compile=function(b,q){function re(W,ae,Pe){W.transparent===!0&&W.side===Nr&&W.forceSinglePass===!1?(W.side=ei,W.needsUpdate=!0,Mo(W,ae,Pe),W.side=Ps,W.needsUpdate=!0,Mo(W,ae,Pe),W.side=Nr):Mo(W,ae,Pe)}v=Se.get(b),v.init(),y.push(v),b.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights(S.useLegacyLights),b.traverse(function(W){const ae=W.material;if(ae)if(Array.isArray(ae))for(let Pe=0;Pe<ae.length;Pe++){const He=ae[Pe];re(He,b,W)}else re(ae,b,W)}),y.pop(),v=null};let Jt=null;function ti(b){Jt&&Jt(b)}function Ot(){_n.stop()}function Si(){_n.start()}const _n=new GM;_n.setAnimationLoop(ti),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(b){Jt=b,z.setAnimationLoop(b),b===null?_n.stop():_n.start()},z.addEventListener("sessionstart",Ot),z.addEventListener("sessionend",Si),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(q),q=z.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,q,D),v=Se.get(b,y.length),v.init(),y.push(v),qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ye.setFromProjectionMatrix(qe),Me=this.localClippingEnabled,xe=Fe.init(this.clippingPlanes,Me),T=ge.get(b,h.length),T.init(),h.push(T),So(b,q,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(B,te),this.info.render.frame++,xe===!0&&Fe.beginShadows();const re=v.state.shadowsArray;if(Te.render(re,b,q),xe===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(T,b),v.setupLights(S.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let ae=0,Pe=W.length;ae<Pe;ae++){const He=W[ae];cu(T,b,He,He.viewport)}}else cu(T,b,q);D!==null&&(it.updateMultisampleRenderTarget(D),it.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(S,b,q),Ue.resetDefaultState(),H=-1,C=null,y.pop(),y.length>0?v=y[y.length-1]:v=null,h.pop(),h.length>0?T=h[h.length-1]:T=null};function So(b,q,re,W){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ye.intersectsSprite(b)){W&&mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qe);const He=L.update(b),je=b.material;je.visible&&T.push(b,He,je,re,mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ye.intersectsObject(b))){const He=L.update(b),je=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),mt.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),mt.copy(He.boundingSphere.center)),mt.applyMatrix4(b.matrixWorld).applyMatrix4(qe)),Array.isArray(je)){const Xe=He.groups;for(let at=0,Ye=Xe.length;at<Ye;at++){const Je=Xe[at],zt=je[Je.materialIndex];zt&&zt.visible&&T.push(b,He,zt,re,mt.z,Je)}}else je.visible&&T.push(b,He,je,re,mt.z,null)}}const Pe=b.children;for(let He=0,je=Pe.length;He<je;He++)So(Pe[He],q,re,W)}function cu(b,q,re,W){const ae=b.opaque,Pe=b.transmissive,He=b.transparent;v.setupLightsView(re),xe===!0&&Fe.setGlobalState(S.clippingPlanes,re),Pe.length>0&&Va(ae,Pe,q,re),W&&Ke.viewport(U.copy(W)),ae.length>0&&yo(ae,q,re),Pe.length>0&&yo(Pe,q,re),He.length>0&&yo(He,q,re),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Va(b,q,re,W){const ae=$e.isWebGL2;De===null&&(De=new go(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?eu:Rs,minFilter:Jl,samples:ae?4:0})),S.getDrawingBufferSize(Be),ae?De.setSize(Be.x,Be.y):De.setSize(sm(Be.x),sm(Be.y));const Pe=S.getRenderTarget();S.setRenderTarget(De),S.getClearColor(j),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear();const He=S.toneMapping;S.toneMapping=Hr,yo(b,re,W),it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De);let je=!1;for(let Xe=0,at=q.length;Xe<at;Xe++){const Ye=q[Xe],Je=Ye.object,zt=Ye.geometry,Ht=Ye.material,Vn=Ye.group;if(Ht.side===Nr&&Je.layers.test(W.layers)){const yi=Ht.side;Ht.side=ei,Ht.needsUpdate=!0,fu(Je,re,W,zt,Ht,Vn),Ht.side=yi,Ht.needsUpdate=!0,je=!0}}je===!0&&(it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De)),S.setRenderTarget(Pe),S.setClearColor(j,J),S.toneMapping=He}function yo(b,q,re){const W=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Pe=b.length;ae<Pe;ae++){const He=b[ae],je=He.object,Xe=He.geometry,at=W===null?He.material:W,Ye=He.group;je.layers.test(re.layers)&&fu(je,q,re,Xe,at,Ye)}}function fu(b,q,re,W,ae,Pe){b.onBeforeRender(S,q,re,W,ae,Pe),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ae.onBeforeRender(S,q,re,W,b,Pe),ae.transparent===!0&&ae.side===Nr&&ae.forceSinglePass===!1?(ae.side=ei,ae.needsUpdate=!0,S.renderBufferDirect(re,q,W,ae,b,Pe),ae.side=Ps,ae.needsUpdate=!0,S.renderBufferDirect(re,q,W,ae,b,Pe),ae.side=Nr):S.renderBufferDirect(re,q,W,ae,b,Pe),b.onAfterRender(S,q,re,W,ae,Pe)}function Mo(b,q,re){q.isScene!==!0&&(q=wn);const W=ut.get(b),ae=v.state.lights,Pe=v.state.shadowsArray,He=ae.state.version,je=ne.getParameters(b,ae.state,Pe,q,re),Xe=ne.getProgramCacheKey(je);let at=W.programs;W.environment=b.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(b.isMeshStandardMaterial?Et:xt).get(b.envMap||W.environment),at===void 0&&(b.addEventListener("dispose",Re),at=new Map,W.programs=at);let Ye=at.get(Xe);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===He)return du(b,je),Ye}else je.uniforms=ne.getUniforms(b),b.onBuild(re,je,S),b.onBeforeCompile(je,S),Ye=ne.acquireProgram(je,Xe),at.set(Xe,Ye),W.uniforms=je.uniforms;const Je=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Fe.uniform),du(b,je),W.needsLights=qf(b),W.lightsStateVersion=He,W.needsLights&&(Je.ambientLightColor.value=ae.state.ambient,Je.lightProbe.value=ae.state.probe,Je.directionalLights.value=ae.state.directional,Je.directionalLightShadows.value=ae.state.directionalShadow,Je.spotLights.value=ae.state.spot,Je.spotLightShadows.value=ae.state.spotShadow,Je.rectAreaLights.value=ae.state.rectArea,Je.ltc_1.value=ae.state.rectAreaLTC1,Je.ltc_2.value=ae.state.rectAreaLTC2,Je.pointLights.value=ae.state.point,Je.pointLightShadows.value=ae.state.pointShadow,Je.hemisphereLights.value=ae.state.hemi,Je.directionalShadowMap.value=ae.state.directionalShadowMap,Je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Je.spotShadowMap.value=ae.state.spotShadowMap,Je.spotLightMatrix.value=ae.state.spotLightMatrix,Je.spotLightMap.value=ae.state.spotLightMap,Je.pointShadowMap.value=ae.state.pointShadowMap,Je.pointShadowMatrix.value=ae.state.pointShadowMatrix);const zt=Ye.getUniforms(),Ht=$c.seqWithValue(zt.seq,Je);return W.currentProgram=Ye,W.uniformsList=Ht,Ye}function du(b,q){const re=ut.get(b);re.outputColorSpace=q.outputColorSpace,re.instancing=q.instancing,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function Wf(b,q,re,W,ae){q.isScene!==!0&&(q=wn),it.resetTextureUnits();const Pe=q.fog,He=W.isMeshStandardMaterial?q.environment:null,je=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:dr,Xe=(W.isMeshStandardMaterial?Et:xt).get(W.envMap||He),at=W.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!re.morphAttributes.position,zt=!!re.morphAttributes.normal,Ht=!!re.morphAttributes.color,Vn=W.toneMapped?S.toneMapping:Hr,yi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Gt=yi!==void 0?yi.length:0,dt=ut.get(W),Wa=v.state.lights;if(xe===!0&&(Me===!0||b!==C)){const dn=b===C&&W.id===H;Fe.setState(W,b,dn)}let en=!1;W.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Wa.state.version||dt.outputColorSpace!==je||ae.isInstancedMesh&&dt.instancing===!1||!ae.isInstancedMesh&&dt.instancing===!0||ae.isSkinnedMesh&&dt.skinning===!1||!ae.isSkinnedMesh&&dt.skinning===!0||dt.envMap!==Xe||W.fog===!0&&dt.fog!==Pe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Fe.numPlanes||dt.numIntersection!==Fe.numIntersection)||dt.vertexAlphas!==at||dt.vertexTangents!==Ye||dt.morphTargets!==Je||dt.morphNormals!==zt||dt.morphColors!==Ht||dt.toneMapping!==Vn||$e.isWebGL2===!0&&dt.morphTargetsCount!==Gt)&&(en=!0):(en=!0,dt.__version=W.version);let pr=dt.currentProgram;en===!0&&(pr=Mo(W,q,ae));let Xa=!1,$r=!1,Eo=!1;const sn=pr.getUniforms(),mr=dt.uniforms;if(Ke.useProgram(pr.program)&&(Xa=!0,$r=!0,Eo=!0),W.id!==H&&(H=W.id,$r=!0),Xa||C!==b){if(sn.setValue(X,"projectionMatrix",b.projectionMatrix),$e.logarithmicDepthBuffer&&sn.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,$r=!0,Eo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const dn=sn.map.cameraPosition;dn!==void 0&&dn.setValue(X,mt.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&sn.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ae.isSkinnedMesh)&&sn.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(ae.isSkinnedMesh){sn.setOptional(X,ae,"bindMatrix"),sn.setOptional(X,ae,"bindMatrixInverse");const dn=ae.skeleton;dn&&($e.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),sn.setValue(X,"boneTexture",dn.boneTexture,it),sn.setValue(X,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=re.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&$e.isWebGL2===!0)&&Oe.update(ae,re,pr),($r||dt.receiveShadow!==ae.receiveShadow)&&(dt.receiveShadow=ae.receiveShadow,sn.setValue(X,"receiveShadow",ae.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mr.envMap.value=Xe,mr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),$r&&(sn.setValue(X,"toneMappingExposure",S.toneMappingExposure),dt.needsLights&&Xf(mr,Eo),Pe&&W.fog===!0&&_e.refreshFogUniforms(mr,Pe),_e.refreshMaterialUniforms(mr,W,ee,fe,De),$c.upload(X,dt.uniformsList,mr,it)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($c.upload(X,dt.uniformsList,mr,it),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&sn.setValue(X,"center",ae.center),sn.setValue(X,"modelViewMatrix",ae.modelViewMatrix),sn.setValue(X,"normalMatrix",ae.normalMatrix),sn.setValue(X,"modelMatrix",ae.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let wo=0,jf=dn.length;wo<jf;wo++)if($e.isWebGL2){const qa=dn[wo];tt.update(qa,pr),tt.bind(qa,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function Xf(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function qf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,q,re){ut.get(b.texture).__webglTexture=q,ut.get(b.depthTexture).__webglTexture=re;const W=ut.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=re===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,q){const re=ut.get(b);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,re=0){D=b,P=q,I=re;let W=!0,ae=null,Pe=!1,He=!1;if(b){const Xe=ut.get(b);Xe.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(X.FRAMEBUFFER,null),W=!1):Xe.__webglFramebuffer===void 0?it.setupRenderTarget(b):Xe.__hasExternalTextures&&it.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(He=!0);const Ye=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ae=Ye[q],Pe=!0):$e.isWebGL2&&b.samples>0&&it.useMultisampledRTT(b)===!1?ae=ut.get(b).__webglMultisampledFramebuffer:ae=Ye,U.copy(b.viewport),oe.copy(b.scissor),de=b.scissorTest}else U.copy(Y).multiplyScalar(ee).floor(),oe.copy(V).multiplyScalar(ee).floor(),de=$;if(Ke.bindFramebuffer(X.FRAMEBUFFER,ae)&&$e.drawBuffers&&W&&Ke.drawBuffers(b,ae),Ke.viewport(U),Ke.scissor(oe),Ke.setScissorTest(de),Pe){const Xe=ut.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,re)}else if(He){const Xe=ut.get(b.texture),at=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,re||0,at)}H=-1},this.readRenderTargetPixels=function(b,q,re,W,ae,Pe,He){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je){Ke.bindFramebuffer(X.FRAMEBUFFER,je);try{const Xe=b.texture,at=Xe.format,Ye=Xe.type;if(at!==Ji&&be.convert(at)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Ye===eu&&(Ne.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Ye!==Rs&&be.convert(Ye)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===_s&&($e.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-W&&re>=0&&re<=b.height-ae&&X.readPixels(q,re,W,ae,be.convert(at),be.convert(Ye),Pe)}finally{const Xe=D!==null?ut.get(D).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(b,q,re=0){const W=Math.pow(2,-re),ae=Math.floor(q.image.width*W),Pe=Math.floor(q.image.height*W);it.setTexture2D(q,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,b.x,b.y,ae,Pe),Ke.unbindTexture()},this.copyTextureToTexture=function(b,q,re,W=0){const ae=q.image.width,Pe=q.image.height,He=be.convert(re.format),je=be.convert(re.type);it.setTexture2D(re,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment),q.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,b.x,b.y,ae,Pe,He,je,q.image.data):q.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,b.x,b.y,q.mipmaps[0].width,q.mipmaps[0].height,He,q.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,W,b.x,b.y,He,je,q.image),W===0&&re.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(b,q,re,W,ae=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,He=b.max.y-b.min.y+1,je=b.max.z-b.min.z+1,Xe=be.convert(W.format),at=be.convert(W.type);let Ye;if(W.isData3DTexture)it.setTexture3D(W,0),Ye=X.TEXTURE_3D;else if(W.isDataArrayTexture)it.setTexture2DArray(W,0),Ye=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Je=X.getParameter(X.UNPACK_ROW_LENGTH),zt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ht=X.getParameter(X.UNPACK_SKIP_PIXELS),Vn=X.getParameter(X.UNPACK_SKIP_ROWS),yi=X.getParameter(X.UNPACK_SKIP_IMAGES),Gt=re.isCompressedTexture?re.mipmaps[0]:re.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,b.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,b.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,b.min.z),re.isDataTexture||re.isData3DTexture?X.texSubImage3D(Ye,ae,q.x,q.y,q.z,Pe,He,je,Xe,at,Gt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ye,ae,q.x,q.y,q.z,Pe,He,je,Xe,Gt.data)):X.texSubImage3D(Ye,ae,q.x,q.y,q.z,Pe,He,je,Xe,at,Gt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Je),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,zt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ht),X.pixelStorei(X.UNPACK_SKIP_ROWS,Vn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),ae===0&&W.generateMipmaps&&X.generateMipmap(Ye),Ke.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?it.setTextureCube(b,0):b.isData3DTexture?it.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?it.setTexture2DArray(b,0):it.setTexture2D(b,0),Ke.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,Ke.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?lo:CM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lo?ot:dr}}class RN extends jM{}RN.prototype.isWebGL1Renderer=!0;class CN extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}const Qx={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class LN{constructor(e,n,i){const s=this;let o=!1,l=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=d.length;g<_;g+=2){const x=d[g],E=d[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const PN=new LN;class ug{constructor(e){this.manager=e!==void 0?e:PN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,o){i.load(e,s,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ug.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class bN extends Error{constructor(e,n){super(e),this.response=n}}class UN extends ug{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Qx.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(o),this.manager.itemEnd(e)},0),o;if(br[e]!==void 0){br[e].push({onLoad:n,onProgress:i,onError:s});return}br[e]=[],br[e].push({onLoad:n,onProgress:i,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=br[e],g=d.body.getReader(),_=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),x=_?parseInt(_):0,E=x!==0;let T=0;const v=new ReadableStream({start(h){y();function y(){g.read().then(({done:S,value:w})=>{if(S)h.close();else{T+=w.byteLength;const P=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:x});for(let I=0,D=p.length;I<D;I++){const H=p[I];H.onProgress&&H.onProgress(P)}h.enqueue(w),y()}})}}});return new Response(v)}else throw new bN(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Qx.add(e,d);const p=br[e];delete br[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=br[e];if(p===void 0)throw this.manager.itemError(e),d;delete br[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ig}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ig);class DN extends ug{constructor(e){super(e)}load(e,n,i,s){const o=this,l=new UN(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{n(o.parse(u))}catch(f){s?s(f):console.error(f),o.manager.itemError(e)}},i,s)}parse(e){function n(d){const p=new DataView(d),g=32/8*3+32/8*3*3+16/8,_=p.getUint32(80,!0);if(80+32/8+_*g===p.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(i(E,p,T))return!1;return!0}function i(d,p,g){for(let _=0,x=d.length;_<x;_++)if(d[_]!==p.getUint8(g+_))return!1;return!0}function s(d){const p=new DataView(d),g=p.getUint32(80,!0);let _,x,E,T=!1,v,h,y,S,w;for(let oe=0;oe<80-10;oe++)p.getUint32(oe,!1)==1129270351&&p.getUint8(oe+4)==82&&p.getUint8(oe+5)==61&&(T=!0,v=new Float32Array(g*3*3),h=p.getUint8(oe+6)/255,y=p.getUint8(oe+7)/255,S=p.getUint8(oe+8)/255,w=p.getUint8(oe+9)/255);const P=84,I=12*4+2,D=new jr,H=new Float32Array(g*3*3),C=new Float32Array(g*3*3),U=new bt;for(let oe=0;oe<g;oe++){const de=P+oe*I,j=p.getFloat32(de,!0),J=p.getFloat32(de+4,!0),ie=p.getFloat32(de+8,!0);if(T){const fe=p.getUint16(de+48,!0);fe&32768?(_=h,x=y,E=S):(_=(fe&31)/31,x=(fe>>5&31)/31,E=(fe>>10&31)/31)}for(let fe=1;fe<=3;fe++){const ee=de+fe*12,B=oe*3*3+(fe-1)*3;H[B]=p.getFloat32(ee,!0),H[B+1]=p.getFloat32(ee+4,!0),H[B+2]=p.getFloat32(ee+8,!0),C[B]=j,C[B+1]=J,C[B+2]=ie,T&&(U.set(_,x,E).convertSRGBToLinear(),v[B]=U.r,v[B+1]=U.g,v[B+2]=U.b)}}return D.setAttribute("position",new gi(H,3)),D.setAttribute("normal",new gi(C,3)),T&&(D.setAttribute("color",new gi(v,3)),D.hasColors=!0,D.alpha=w),D}function o(d){const p=new jr,g=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,T=new RegExp("vertex"+E+E+E,"g"),v=new RegExp("normal"+E+E+E,"g"),h=[],y=[],S=new Z;let w,P=0,I=0,D=0;for(;(w=g.exec(d))!==null;){I=D;const H=w[0];for(;(w=_.exec(H))!==null;){let oe=0,de=0;const j=w[0];for(;(w=v.exec(j))!==null;)S.x=parseFloat(w[1]),S.y=parseFloat(w[2]),S.z=parseFloat(w[3]),de++;for(;(w=T.exec(j))!==null;)h.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),y.push(S.x,S.y,S.z),oe++,D++;de!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),oe!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const C=I,U=D-I;p.addGroup(C,U,P),P++}return p.setAttribute("position",new Gr(h,3)),p.setAttribute("normal",new Gr(y,3)),p}function l(d){return typeof d!="string"?new TextDecoder().decode(d):d}function u(d){if(typeof d=="string"){const p=new Uint8Array(d.length);for(let g=0;g<d.length;g++)p[g]=d.charCodeAt(g)&255;return p.buffer||p}else return d}const f=u(e);return n(f)?s(f):o(l(e))}}var Ef={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ef.exports;(function(t,e){(function(){var n,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",g=1,_=2,x=4,E=1,T=2,v=1,h=2,y=4,S=8,w=16,P=32,I=64,D=128,H=256,C=512,U=30,oe="...",de=800,j=16,J=1,ie=2,fe=3,ee=1/0,B=9007199254740991,te=17976931348623157e292,Y=0/0,V=4294967295,$=V-1,ye=V>>>1,xe=[["ary",D],["bind",v],["bindKey",h],["curry",S],["curryRight",w],["flip",C],["partial",P],["partialRight",I],["rearg",H]],Me="[object Arguments]",De="[object Array]",qe="[object AsyncFunction]",Be="[object Boolean]",mt="[object Date]",wn="[object DOMException]",et="[object Error]",X="[object Function]",rn="[object GeneratorFunction]",Ne="[object Map]",$e="[object Number]",Ke="[object Null]",vt="[object Object]",ut="[object Promise]",it="[object Proxy]",xt="[object RegExp]",Et="[object Set]",jt="[object String]",N="[object Symbol]",L="[object Undefined]",ne="[object WeakMap]",_e="[object WeakSet]",ge="[object ArrayBuffer]",Se="[object DataView]",Fe="[object Float32Array]",Te="[object Float64Array]",le="[object Int8Array]",Oe="[object Int16Array]",ze="[object Int32Array]",ke="[object Uint8Array]",be="[object Uint8ClampedArray]",Ue="[object Uint16Array]",tt="[object Uint32Array]",At=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,we=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,Re=RegExp(Q.source),_t=RegExp(ve.source),Dt=/<%-([\s\S]+?)%>/g,Jt=/<%([\s\S]+?)%>/g,ti=/<%=([\s\S]+?)%>/g,Ot=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Si=/^\w*$/,_n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,So=/[\\^$.*+?()[\]{}|]/g,cu=RegExp(So.source),Va=/^\s+/,yo=/\s/,fu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Mo=/\{\n\/\* \[wrapped with (.+)\] \*/,du=/,? & /,Wf=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xf=/[()=,{}\[\]\/\s]/,qf=/\\(\\)?/g,b=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,q=/\w*$/,re=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,ae=/^\[object .+?Constructor\]$/,Pe=/^0o[0-7]+$/i,He=/^(?:0|[1-9]\d*)$/,je=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xe=/($^)/,at=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",Je="\\u0300-\\u036f",zt="\\ufe20-\\ufe2f",Ht="\\u20d0-\\u20ff",Vn=Je+zt+Ht,yi="\\u2700-\\u27bf",Gt="a-z\\xdf-\\xf6\\xf8-\\xff",dt="\\xac\\xb1\\xd7\\xf7",Wa="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",en="\\u2000-\\u206f",pr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xa="A-Z\\xc0-\\xd6\\xd8-\\xde",$r="\\ufe0e\\ufe0f",Eo=dt+Wa+en+pr,sn="['’]",mr="["+Ye+"]",To="["+Eo+"]",dn="["+Vn+"]",wo="\\d+",jf="["+yi+"]",qa="["+Gt+"]",fg="[^"+Ye+Eo+wo+yi+Gt+Xa+"]",Yf="\\ud83c[\\udffb-\\udfff]",$M="(?:"+dn+"|"+Yf+")",dg="[^"+Ye+"]",$f="(?:\\ud83c[\\udde6-\\uddff]){2}",Kf="[\\ud800-\\udbff][\\udc00-\\udfff]",Ao="["+Xa+"]",hg="\\u200d",pg="(?:"+qa+"|"+fg+")",KM="(?:"+Ao+"|"+fg+")",mg="(?:"+sn+"(?:d|ll|m|re|s|t|ve))?",gg="(?:"+sn+"(?:D|LL|M|RE|S|T|VE))?",_g=$M+"?",vg="["+$r+"]?",ZM="(?:"+hg+"(?:"+[dg,$f,Kf].join("|")+")"+vg+_g+")*",QM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",JM="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xg=vg+_g+ZM,eE="(?:"+[jf,$f,Kf].join("|")+")"+xg,tE="(?:"+[dg+dn+"?",dn,$f,Kf,mr].join("|")+")",nE=RegExp(sn,"g"),iE=RegExp(dn,"g"),Zf=RegExp(Yf+"(?="+Yf+")|"+tE+xg,"g"),rE=RegExp([Ao+"?"+qa+"+"+mg+"(?="+[To,Ao,"$"].join("|")+")",KM+"+"+gg+"(?="+[To,Ao+pg,"$"].join("|")+")",Ao+"?"+pg+"+"+mg,Ao+"+"+gg,JM,QM,wo,eE].join("|"),"g"),sE=RegExp("["+hg+Ye+Vn+$r+"]"),oE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,aE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],lE=-1,It={};It[Fe]=It[Te]=It[le]=It[Oe]=It[ze]=It[ke]=It[be]=It[Ue]=It[tt]=!0,It[Me]=It[De]=It[ge]=It[Be]=It[Se]=It[mt]=It[et]=It[X]=It[Ne]=It[$e]=It[vt]=It[xt]=It[Et]=It[jt]=It[ne]=!1;var Lt={};Lt[Me]=Lt[De]=Lt[ge]=Lt[Se]=Lt[Be]=Lt[mt]=Lt[Fe]=Lt[Te]=Lt[le]=Lt[Oe]=Lt[ze]=Lt[Ne]=Lt[$e]=Lt[vt]=Lt[xt]=Lt[Et]=Lt[jt]=Lt[N]=Lt[ke]=Lt[be]=Lt[Ue]=Lt[tt]=!0,Lt[et]=Lt[X]=Lt[ne]=!1;var uE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},cE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},dE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},hE=parseFloat,pE=parseInt,Sg=typeof ll=="object"&&ll&&ll.Object===Object&&ll,mE=typeof self=="object"&&self&&self.Object===Object&&self,vn=Sg||mE||Function("return this")(),Qf=e&&!e.nodeType&&e,Is=Qf&&!0&&t&&!t.nodeType&&t,yg=Is&&Is.exports===Qf,Jf=yg&&Sg.process,Mi=function(){try{var k=Is&&Is.require&&Is.require("util").types;return k||Jf&&Jf.binding&&Jf.binding("util")}catch{}}(),Mg=Mi&&Mi.isArrayBuffer,Eg=Mi&&Mi.isDate,Tg=Mi&&Mi.isMap,wg=Mi&&Mi.isRegExp,Ag=Mi&&Mi.isSet,Rg=Mi&&Mi.isTypedArray;function ni(k,se,K){switch(K.length){case 0:return k.call(se);case 1:return k.call(se,K[0]);case 2:return k.call(se,K[0],K[1]);case 3:return k.call(se,K[0],K[1],K[2])}return k.apply(se,K)}function gE(k,se,K,Ce){for(var Ze=-1,yt=k==null?0:k.length;++Ze<yt;){var on=k[Ze];se(Ce,on,K(on),k)}return Ce}function Ei(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce&&se(k[K],K,k)!==!1;);return k}function _E(k,se){for(var K=k==null?0:k.length;K--&&se(k[K],K,k)!==!1;);return k}function Cg(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce;)if(!se(k[K],K,k))return!1;return!0}function Kr(k,se){for(var K=-1,Ce=k==null?0:k.length,Ze=0,yt=[];++K<Ce;){var on=k[K];se(on,K,k)&&(yt[Ze++]=on)}return yt}function hu(k,se){var K=k==null?0:k.length;return!!K&&Ro(k,se,0)>-1}function ed(k,se,K){for(var Ce=-1,Ze=k==null?0:k.length;++Ce<Ze;)if(K(se,k[Ce]))return!0;return!1}function Bt(k,se){for(var K=-1,Ce=k==null?0:k.length,Ze=Array(Ce);++K<Ce;)Ze[K]=se(k[K],K,k);return Ze}function Zr(k,se){for(var K=-1,Ce=se.length,Ze=k.length;++K<Ce;)k[Ze+K]=se[K];return k}function td(k,se,K,Ce){var Ze=-1,yt=k==null?0:k.length;for(Ce&&yt&&(K=k[++Ze]);++Ze<yt;)K=se(K,k[Ze],Ze,k);return K}function vE(k,se,K,Ce){var Ze=k==null?0:k.length;for(Ce&&Ze&&(K=k[--Ze]);Ze--;)K=se(K,k[Ze],Ze,k);return K}function nd(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce;)if(se(k[K],K,k))return!0;return!1}var xE=id("length");function SE(k){return k.split("")}function yE(k){return k.match(Wf)||[]}function Lg(k,se,K){var Ce;return K(k,function(Ze,yt,on){if(se(Ze,yt,on))return Ce=yt,!1}),Ce}function pu(k,se,K,Ce){for(var Ze=k.length,yt=K+(Ce?1:-1);Ce?yt--:++yt<Ze;)if(se(k[yt],yt,k))return yt;return-1}function Ro(k,se,K){return se===se?DE(k,se,K):pu(k,Pg,K)}function ME(k,se,K,Ce){for(var Ze=K-1,yt=k.length;++Ze<yt;)if(Ce(k[Ze],se))return Ze;return-1}function Pg(k){return k!==k}function bg(k,se){var K=k==null?0:k.length;return K?sd(k,se)/K:Y}function id(k){return function(se){return se==null?n:se[k]}}function rd(k){return function(se){return k==null?n:k[se]}}function Ug(k,se,K,Ce,Ze){return Ze(k,function(yt,on,Rt){K=Ce?(Ce=!1,yt):se(K,yt,on,Rt)}),K}function EE(k,se){var K=k.length;for(k.sort(se);K--;)k[K]=k[K].value;return k}function sd(k,se){for(var K,Ce=-1,Ze=k.length;++Ce<Ze;){var yt=se(k[Ce]);yt!==n&&(K=K===n?yt:K+yt)}return K}function od(k,se){for(var K=-1,Ce=Array(k);++K<k;)Ce[K]=se(K);return Ce}function TE(k,se){return Bt(se,function(K){return[K,k[K]]})}function Dg(k){return k&&k.slice(0,Og(k)+1).replace(Va,"")}function ii(k){return function(se){return k(se)}}function ad(k,se){return Bt(se,function(K){return k[K]})}function ja(k,se){return k.has(se)}function Ig(k,se){for(var K=-1,Ce=k.length;++K<Ce&&Ro(se,k[K],0)>-1;);return K}function Ng(k,se){for(var K=k.length;K--&&Ro(se,k[K],0)>-1;);return K}function wE(k,se){for(var K=k.length,Ce=0;K--;)k[K]===se&&++Ce;return Ce}var AE=rd(uE),RE=rd(cE);function CE(k){return"\\"+dE[k]}function LE(k,se){return k==null?n:k[se]}function Co(k){return sE.test(k)}function PE(k){return oE.test(k)}function bE(k){for(var se,K=[];!(se=k.next()).done;)K.push(se.value);return K}function ld(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce,Ze){K[++se]=[Ze,Ce]}),K}function Fg(k,se){return function(K){return k(se(K))}}function Qr(k,se){for(var K=-1,Ce=k.length,Ze=0,yt=[];++K<Ce;){var on=k[K];(on===se||on===p)&&(k[K]=p,yt[Ze++]=K)}return yt}function mu(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce){K[++se]=Ce}),K}function UE(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce){K[++se]=[Ce,Ce]}),K}function DE(k,se,K){for(var Ce=K-1,Ze=k.length;++Ce<Ze;)if(k[Ce]===se)return Ce;return-1}function IE(k,se,K){for(var Ce=K+1;Ce--;)if(k[Ce]===se)return Ce;return Ce}function Lo(k){return Co(k)?FE(k):xE(k)}function Bi(k){return Co(k)?OE(k):SE(k)}function Og(k){for(var se=k.length;se--&&yo.test(k.charAt(se)););return se}var NE=rd(fE);function FE(k){for(var se=Zf.lastIndex=0;Zf.test(k);)++se;return se}function OE(k){return k.match(Zf)||[]}function zE(k){return k.match(rE)||[]}var BE=function k(se){se=se==null?vn:Po.defaults(vn.Object(),se,Po.pick(vn,aE));var K=se.Array,Ce=se.Date,Ze=se.Error,yt=se.Function,on=se.Math,Rt=se.Object,ud=se.RegExp,kE=se.String,Ti=se.TypeError,gu=K.prototype,HE=yt.prototype,bo=Rt.prototype,_u=se["__core-js_shared__"],vu=HE.toString,Tt=bo.hasOwnProperty,GE=0,zg=function(){var r=/[^.]+$/.exec(_u&&_u.keys&&_u.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),xu=bo.toString,VE=vu.call(Rt),WE=vn._,XE=ud("^"+vu.call(Tt).replace(So,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Su=yg?se.Buffer:n,Jr=se.Symbol,yu=se.Uint8Array,Bg=Su?Su.allocUnsafe:n,Mu=Fg(Rt.getPrototypeOf,Rt),kg=Rt.create,Hg=bo.propertyIsEnumerable,Eu=gu.splice,Gg=Jr?Jr.isConcatSpreadable:n,Ya=Jr?Jr.iterator:n,Ns=Jr?Jr.toStringTag:n,Tu=function(){try{var r=ks(Rt,"defineProperty");return r({},"",{}),r}catch{}}(),qE=se.clearTimeout!==vn.clearTimeout&&se.clearTimeout,jE=Ce&&Ce.now!==vn.Date.now&&Ce.now,YE=se.setTimeout!==vn.setTimeout&&se.setTimeout,wu=on.ceil,Au=on.floor,cd=Rt.getOwnPropertySymbols,$E=Su?Su.isBuffer:n,Vg=se.isFinite,KE=gu.join,ZE=Fg(Rt.keys,Rt),an=on.max,An=on.min,QE=Ce.now,JE=se.parseInt,Wg=on.random,e1=gu.reverse,fd=ks(se,"DataView"),$a=ks(se,"Map"),dd=ks(se,"Promise"),Uo=ks(se,"Set"),Ka=ks(se,"WeakMap"),Za=ks(Rt,"create"),Ru=Ka&&new Ka,Do={},t1=Hs(fd),n1=Hs($a),i1=Hs(dd),r1=Hs(Uo),s1=Hs(Ka),Cu=Jr?Jr.prototype:n,Qa=Cu?Cu.valueOf:n,Xg=Cu?Cu.toString:n;function A(r){if(Yt(r)&&!Qe(r)&&!(r instanceof ht)){if(r instanceof wi)return r;if(Tt.call(r,"__wrapped__"))return q_(r)}return new wi(r)}var Io=function(){function r(){}return function(a){if(!Vt(a))return{};if(kg)return kg(a);r.prototype=a;var c=new r;return r.prototype=n,c}}();function Lu(){}function wi(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}A.templateSettings={escape:Dt,evaluate:Jt,interpolate:ti,variable:"",imports:{_:A}},A.prototype=Lu.prototype,A.prototype.constructor=A,wi.prototype=Io(Lu.prototype),wi.prototype.constructor=wi;function ht(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function o1(){var r=new ht(this.__wrapped__);return r.__actions__=Wn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Wn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Wn(this.__views__),r}function a1(){if(this.__filtered__){var r=new ht(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function l1(){var r=this.__wrapped__.value(),a=this.__dir__,c=Qe(r),m=a<0,M=c?r.length:0,R=ST(0,M,this.__views__),F=R.start,O=R.end,G=O-F,ue=m?O:F-1,ce=this.__iteratees__,he=ce.length,Ae=0,Ie=An(G,this.__takeCount__);if(!c||!m&&M==G&&Ie==G)return m_(r,this.__actions__);var Ve=[];e:for(;G--&&Ae<Ie;){ue+=a;for(var rt=-1,We=r[ue];++rt<he;){var ft=ce[rt],gt=ft.iteratee,oi=ft.type,Fn=gt(We);if(oi==ie)We=Fn;else if(!Fn){if(oi==J)continue e;break e}}Ve[Ae++]=We}return Ve}ht.prototype=Io(Lu.prototype),ht.prototype.constructor=ht;function Fs(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function u1(){this.__data__=Za?Za(null):{},this.size=0}function c1(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function f1(r){var a=this.__data__;if(Za){var c=a[r];return c===f?n:c}return Tt.call(a,r)?a[r]:n}function d1(r){var a=this.__data__;return Za?a[r]!==n:Tt.call(a,r)}function h1(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Za&&a===n?f:a,this}Fs.prototype.clear=u1,Fs.prototype.delete=c1,Fs.prototype.get=f1,Fs.prototype.has=d1,Fs.prototype.set=h1;function gr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function p1(){this.__data__=[],this.size=0}function m1(r){var a=this.__data__,c=Pu(a,r);if(c<0)return!1;var m=a.length-1;return c==m?a.pop():Eu.call(a,c,1),--this.size,!0}function g1(r){var a=this.__data__,c=Pu(a,r);return c<0?n:a[c][1]}function _1(r){return Pu(this.__data__,r)>-1}function v1(r,a){var c=this.__data__,m=Pu(c,r);return m<0?(++this.size,c.push([r,a])):c[m][1]=a,this}gr.prototype.clear=p1,gr.prototype.delete=m1,gr.prototype.get=g1,gr.prototype.has=_1,gr.prototype.set=v1;function _r(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function x1(){this.size=0,this.__data__={hash:new Fs,map:new($a||gr),string:new Fs}}function S1(r){var a=Gu(this,r).delete(r);return this.size-=a?1:0,a}function y1(r){return Gu(this,r).get(r)}function M1(r){return Gu(this,r).has(r)}function E1(r,a){var c=Gu(this,r),m=c.size;return c.set(r,a),this.size+=c.size==m?0:1,this}_r.prototype.clear=x1,_r.prototype.delete=S1,_r.prototype.get=y1,_r.prototype.has=M1,_r.prototype.set=E1;function Os(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new _r;++a<c;)this.add(r[a])}function T1(r){return this.__data__.set(r,f),this}function w1(r){return this.__data__.has(r)}Os.prototype.add=Os.prototype.push=T1,Os.prototype.has=w1;function ki(r){var a=this.__data__=new gr(r);this.size=a.size}function A1(){this.__data__=new gr,this.size=0}function R1(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function C1(r){return this.__data__.get(r)}function L1(r){return this.__data__.has(r)}function P1(r,a){var c=this.__data__;if(c instanceof gr){var m=c.__data__;if(!$a||m.length<s-1)return m.push([r,a]),this.size=++c.size,this;c=this.__data__=new _r(m)}return c.set(r,a),this.size=c.size,this}ki.prototype.clear=A1,ki.prototype.delete=R1,ki.prototype.get=C1,ki.prototype.has=L1,ki.prototype.set=P1;function qg(r,a){var c=Qe(r),m=!c&&Gs(r),M=!c&&!m&&rs(r),R=!c&&!m&&!M&&zo(r),F=c||m||M||R,O=F?od(r.length,kE):[],G=O.length;for(var ue in r)(a||Tt.call(r,ue))&&!(F&&(ue=="length"||M&&(ue=="offset"||ue=="parent")||R&&(ue=="buffer"||ue=="byteLength"||ue=="byteOffset")||yr(ue,G)))&&O.push(ue);return O}function jg(r){var a=r.length;return a?r[Ed(0,a-1)]:n}function b1(r,a){return Vu(Wn(r),zs(a,0,r.length))}function U1(r){return Vu(Wn(r))}function hd(r,a,c){(c!==n&&!Hi(r[a],c)||c===n&&!(a in r))&&vr(r,a,c)}function Ja(r,a,c){var m=r[a];(!(Tt.call(r,a)&&Hi(m,c))||c===n&&!(a in r))&&vr(r,a,c)}function Pu(r,a){for(var c=r.length;c--;)if(Hi(r[c][0],a))return c;return-1}function D1(r,a,c,m){return es(r,function(M,R,F){a(m,M,c(M),F)}),m}function Yg(r,a){return r&&rr(a,hn(a),r)}function I1(r,a){return r&&rr(a,qn(a),r)}function vr(r,a,c){a=="__proto__"&&Tu?Tu(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function pd(r,a){for(var c=-1,m=a.length,M=K(m),R=r==null;++c<m;)M[c]=R?n:Yd(r,a[c]);return M}function zs(r,a,c){return r===r&&(c!==n&&(r=r<=c?r:c),a!==n&&(r=r>=a?r:a)),r}function Ai(r,a,c,m,M,R){var F,O=a&g,G=a&_,ue=a&x;if(c&&(F=M?c(r,m,M,R):c(r)),F!==n)return F;if(!Vt(r))return r;var ce=Qe(r);if(ce){if(F=MT(r),!O)return Wn(r,F)}else{var he=Rn(r),Ae=he==X||he==rn;if(rs(r))return v_(r,O);if(he==vt||he==Me||Ae&&!M){if(F=G||Ae?{}:O_(r),!O)return G?fT(r,I1(F,r)):cT(r,Yg(F,r))}else{if(!Lt[he])return M?r:{};F=ET(r,he,O)}}R||(R=new ki);var Ie=R.get(r);if(Ie)return Ie;R.set(r,F),dv(r)?r.forEach(function(We){F.add(Ai(We,a,c,We,r,R))}):cv(r)&&r.forEach(function(We,ft){F.set(ft,Ai(We,a,c,ft,r,R))});var Ve=ue?G?Id:Dd:G?qn:hn,rt=ce?n:Ve(r);return Ei(rt||r,function(We,ft){rt&&(ft=We,We=r[ft]),Ja(F,ft,Ai(We,a,c,ft,r,R))}),F}function N1(r){var a=hn(r);return function(c){return $g(c,r,a)}}function $g(r,a,c){var m=c.length;if(r==null)return!m;for(r=Rt(r);m--;){var M=c[m],R=a[M],F=r[M];if(F===n&&!(M in r)||!R(F))return!1}return!0}function Kg(r,a,c){if(typeof r!="function")throw new Ti(l);return ol(function(){r.apply(n,c)},a)}function el(r,a,c,m){var M=-1,R=hu,F=!0,O=r.length,G=[],ue=a.length;if(!O)return G;c&&(a=Bt(a,ii(c))),m?(R=ed,F=!1):a.length>=s&&(R=ja,F=!1,a=new Os(a));e:for(;++M<O;){var ce=r[M],he=c==null?ce:c(ce);if(ce=m||ce!==0?ce:0,F&&he===he){for(var Ae=ue;Ae--;)if(a[Ae]===he)continue e;G.push(ce)}else R(a,he,m)||G.push(ce)}return G}var es=E_(ir),Zg=E_(gd,!0);function F1(r,a){var c=!0;return es(r,function(m,M,R){return c=!!a(m,M,R),c}),c}function bu(r,a,c){for(var m=-1,M=r.length;++m<M;){var R=r[m],F=a(R);if(F!=null&&(O===n?F===F&&!si(F):c(F,O)))var O=F,G=R}return G}function O1(r,a,c,m){var M=r.length;for(c=nt(c),c<0&&(c=-c>M?0:M+c),m=m===n||m>M?M:nt(m),m<0&&(m+=M),m=c>m?0:pv(m);c<m;)r[c++]=a;return r}function Qg(r,a){var c=[];return es(r,function(m,M,R){a(m,M,R)&&c.push(m)}),c}function xn(r,a,c,m,M){var R=-1,F=r.length;for(c||(c=wT),M||(M=[]);++R<F;){var O=r[R];a>0&&c(O)?a>1?xn(O,a-1,c,m,M):Zr(M,O):m||(M[M.length]=O)}return M}var md=T_(),Jg=T_(!0);function ir(r,a){return r&&md(r,a,hn)}function gd(r,a){return r&&Jg(r,a,hn)}function Uu(r,a){return Kr(a,function(c){return Mr(r[c])})}function Bs(r,a){a=ns(a,r);for(var c=0,m=a.length;r!=null&&c<m;)r=r[sr(a[c++])];return c&&c==m?r:n}function e_(r,a,c){var m=a(r);return Qe(r)?m:Zr(m,c(r))}function In(r){return r==null?r===n?L:Ke:Ns&&Ns in Rt(r)?xT(r):UT(r)}function _d(r,a){return r>a}function z1(r,a){return r!=null&&Tt.call(r,a)}function B1(r,a){return r!=null&&a in Rt(r)}function k1(r,a,c){return r>=An(a,c)&&r<an(a,c)}function vd(r,a,c){for(var m=c?ed:hu,M=r[0].length,R=r.length,F=R,O=K(R),G=1/0,ue=[];F--;){var ce=r[F];F&&a&&(ce=Bt(ce,ii(a))),G=An(ce.length,G),O[F]=!c&&(a||M>=120&&ce.length>=120)?new Os(F&&ce):n}ce=r[0];var he=-1,Ae=O[0];e:for(;++he<M&&ue.length<G;){var Ie=ce[he],Ve=a?a(Ie):Ie;if(Ie=c||Ie!==0?Ie:0,!(Ae?ja(Ae,Ve):m(ue,Ve,c))){for(F=R;--F;){var rt=O[F];if(!(rt?ja(rt,Ve):m(r[F],Ve,c)))continue e}Ae&&Ae.push(Ve),ue.push(Ie)}}return ue}function H1(r,a,c,m){return ir(r,function(M,R,F){a(m,c(M),R,F)}),m}function tl(r,a,c){a=ns(a,r),r=H_(r,a);var m=r==null?r:r[sr(Ci(a))];return m==null?n:ni(m,r,c)}function t_(r){return Yt(r)&&In(r)==Me}function G1(r){return Yt(r)&&In(r)==ge}function V1(r){return Yt(r)&&In(r)==mt}function nl(r,a,c,m,M){return r===a?!0:r==null||a==null||!Yt(r)&&!Yt(a)?r!==r&&a!==a:W1(r,a,c,m,nl,M)}function W1(r,a,c,m,M,R){var F=Qe(r),O=Qe(a),G=F?De:Rn(r),ue=O?De:Rn(a);G=G==Me?vt:G,ue=ue==Me?vt:ue;var ce=G==vt,he=ue==vt,Ae=G==ue;if(Ae&&rs(r)){if(!rs(a))return!1;F=!0,ce=!1}if(Ae&&!ce)return R||(R=new ki),F||zo(r)?I_(r,a,c,m,M,R):_T(r,a,G,c,m,M,R);if(!(c&E)){var Ie=ce&&Tt.call(r,"__wrapped__"),Ve=he&&Tt.call(a,"__wrapped__");if(Ie||Ve){var rt=Ie?r.value():r,We=Ve?a.value():a;return R||(R=new ki),M(rt,We,c,m,R)}}return Ae?(R||(R=new ki),vT(r,a,c,m,M,R)):!1}function X1(r){return Yt(r)&&Rn(r)==Ne}function xd(r,a,c,m){var M=c.length,R=M,F=!m;if(r==null)return!R;for(r=Rt(r);M--;){var O=c[M];if(F&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++M<R;){O=c[M];var G=O[0],ue=r[G],ce=O[1];if(F&&O[2]){if(ue===n&&!(G in r))return!1}else{var he=new ki;if(m)var Ae=m(ue,ce,G,r,a,he);if(!(Ae===n?nl(ce,ue,E|T,m,he):Ae))return!1}}return!0}function n_(r){if(!Vt(r)||RT(r))return!1;var a=Mr(r)?XE:ae;return a.test(Hs(r))}function q1(r){return Yt(r)&&In(r)==xt}function j1(r){return Yt(r)&&Rn(r)==Et}function Y1(r){return Yt(r)&&$u(r.length)&&!!It[In(r)]}function i_(r){return typeof r=="function"?r:r==null?jn:typeof r=="object"?Qe(r)?o_(r[0],r[1]):s_(r):wv(r)}function Sd(r){if(!sl(r))return ZE(r);var a=[];for(var c in Rt(r))Tt.call(r,c)&&c!="constructor"&&a.push(c);return a}function $1(r){if(!Vt(r))return bT(r);var a=sl(r),c=[];for(var m in r)m=="constructor"&&(a||!Tt.call(r,m))||c.push(m);return c}function yd(r,a){return r<a}function r_(r,a){var c=-1,m=Xn(r)?K(r.length):[];return es(r,function(M,R,F){m[++c]=a(M,R,F)}),m}function s_(r){var a=Fd(r);return a.length==1&&a[0][2]?B_(a[0][0],a[0][1]):function(c){return c===r||xd(c,r,a)}}function o_(r,a){return zd(r)&&z_(a)?B_(sr(r),a):function(c){var m=Yd(c,r);return m===n&&m===a?$d(c,r):nl(a,m,E|T)}}function Du(r,a,c,m,M){r!==a&&md(a,function(R,F){if(M||(M=new ki),Vt(R))K1(r,a,F,c,Du,m,M);else{var O=m?m(kd(r,F),R,F+"",r,a,M):n;O===n&&(O=R),hd(r,F,O)}},qn)}function K1(r,a,c,m,M,R,F){var O=kd(r,c),G=kd(a,c),ue=F.get(G);if(ue){hd(r,c,ue);return}var ce=R?R(O,G,c+"",r,a,F):n,he=ce===n;if(he){var Ae=Qe(G),Ie=!Ae&&rs(G),Ve=!Ae&&!Ie&&zo(G);ce=G,Ae||Ie||Ve?Qe(O)?ce=O:Kt(O)?ce=Wn(O):Ie?(he=!1,ce=v_(G,!0)):Ve?(he=!1,ce=x_(G,!0)):ce=[]:al(G)||Gs(G)?(ce=O,Gs(O)?ce=mv(O):(!Vt(O)||Mr(O))&&(ce=O_(G))):he=!1}he&&(F.set(G,ce),M(ce,G,m,R,F),F.delete(G)),hd(r,c,ce)}function a_(r,a){var c=r.length;if(c)return a+=a<0?c:0,yr(a,c)?r[a]:n}function l_(r,a,c){a.length?a=Bt(a,function(R){return Qe(R)?function(F){return Bs(F,R.length===1?R[0]:R)}:R}):a=[jn];var m=-1;a=Bt(a,ii(Ge()));var M=r_(r,function(R,F,O){var G=Bt(a,function(ue){return ue(R)});return{criteria:G,index:++m,value:R}});return EE(M,function(R,F){return uT(R,F,c)})}function Z1(r,a){return u_(r,a,function(c,m){return $d(r,m)})}function u_(r,a,c){for(var m=-1,M=a.length,R={};++m<M;){var F=a[m],O=Bs(r,F);c(O,F)&&il(R,ns(F,r),O)}return R}function Q1(r){return function(a){return Bs(a,r)}}function Md(r,a,c,m){var M=m?ME:Ro,R=-1,F=a.length,O=r;for(r===a&&(a=Wn(a)),c&&(O=Bt(r,ii(c)));++R<F;)for(var G=0,ue=a[R],ce=c?c(ue):ue;(G=M(O,ce,G,m))>-1;)O!==r&&Eu.call(O,G,1),Eu.call(r,G,1);return r}function c_(r,a){for(var c=r?a.length:0,m=c-1;c--;){var M=a[c];if(c==m||M!==R){var R=M;yr(M)?Eu.call(r,M,1):Ad(r,M)}}return r}function Ed(r,a){return r+Au(Wg()*(a-r+1))}function J1(r,a,c,m){for(var M=-1,R=an(wu((a-r)/(c||1)),0),F=K(R);R--;)F[m?R:++M]=r,r+=c;return F}function Td(r,a){var c="";if(!r||a<1||a>B)return c;do a%2&&(c+=r),a=Au(a/2),a&&(r+=r);while(a);return c}function lt(r,a){return Hd(k_(r,a,jn),r+"")}function eT(r){return jg(Bo(r))}function tT(r,a){var c=Bo(r);return Vu(c,zs(a,0,c.length))}function il(r,a,c,m){if(!Vt(r))return r;a=ns(a,r);for(var M=-1,R=a.length,F=R-1,O=r;O!=null&&++M<R;){var G=sr(a[M]),ue=c;if(G==="__proto__"||G==="constructor"||G==="prototype")return r;if(M!=F){var ce=O[G];ue=m?m(ce,G,O):n,ue===n&&(ue=Vt(ce)?ce:yr(a[M+1])?[]:{})}Ja(O,G,ue),O=O[G]}return r}var f_=Ru?function(r,a){return Ru.set(r,a),r}:jn,nT=Tu?function(r,a){return Tu(r,"toString",{configurable:!0,enumerable:!1,value:Zd(a),writable:!0})}:jn;function iT(r){return Vu(Bo(r))}function Ri(r,a,c){var m=-1,M=r.length;a<0&&(a=-a>M?0:M+a),c=c>M?M:c,c<0&&(c+=M),M=a>c?0:c-a>>>0,a>>>=0;for(var R=K(M);++m<M;)R[m]=r[m+a];return R}function rT(r,a){var c;return es(r,function(m,M,R){return c=a(m,M,R),!c}),!!c}function Iu(r,a,c){var m=0,M=r==null?m:r.length;if(typeof a=="number"&&a===a&&M<=ye){for(;m<M;){var R=m+M>>>1,F=r[R];F!==null&&!si(F)&&(c?F<=a:F<a)?m=R+1:M=R}return M}return wd(r,a,jn,c)}function wd(r,a,c,m){var M=0,R=r==null?0:r.length;if(R===0)return 0;a=c(a);for(var F=a!==a,O=a===null,G=si(a),ue=a===n;M<R;){var ce=Au((M+R)/2),he=c(r[ce]),Ae=he!==n,Ie=he===null,Ve=he===he,rt=si(he);if(F)var We=m||Ve;else ue?We=Ve&&(m||Ae):O?We=Ve&&Ae&&(m||!Ie):G?We=Ve&&Ae&&!Ie&&(m||!rt):Ie||rt?We=!1:We=m?he<=a:he<a;We?M=ce+1:R=ce}return An(R,$)}function d_(r,a){for(var c=-1,m=r.length,M=0,R=[];++c<m;){var F=r[c],O=a?a(F):F;if(!c||!Hi(O,G)){var G=O;R[M++]=F===0?0:F}}return R}function h_(r){return typeof r=="number"?r:si(r)?Y:+r}function ri(r){if(typeof r=="string")return r;if(Qe(r))return Bt(r,ri)+"";if(si(r))return Xg?Xg.call(r):"";var a=r+"";return a=="0"&&1/r==-ee?"-0":a}function ts(r,a,c){var m=-1,M=hu,R=r.length,F=!0,O=[],G=O;if(c)F=!1,M=ed;else if(R>=s){var ue=a?null:mT(r);if(ue)return mu(ue);F=!1,M=ja,G=new Os}else G=a?[]:O;e:for(;++m<R;){var ce=r[m],he=a?a(ce):ce;if(ce=c||ce!==0?ce:0,F&&he===he){for(var Ae=G.length;Ae--;)if(G[Ae]===he)continue e;a&&G.push(he),O.push(ce)}else M(G,he,c)||(G!==O&&G.push(he),O.push(ce))}return O}function Ad(r,a){return a=ns(a,r),r=H_(r,a),r==null||delete r[sr(Ci(a))]}function p_(r,a,c,m){return il(r,a,c(Bs(r,a)),m)}function Nu(r,a,c,m){for(var M=r.length,R=m?M:-1;(m?R--:++R<M)&&a(r[R],R,r););return c?Ri(r,m?0:R,m?R+1:M):Ri(r,m?R+1:0,m?M:R)}function m_(r,a){var c=r;return c instanceof ht&&(c=c.value()),td(a,function(m,M){return M.func.apply(M.thisArg,Zr([m],M.args))},c)}function Rd(r,a,c){var m=r.length;if(m<2)return m?ts(r[0]):[];for(var M=-1,R=K(m);++M<m;)for(var F=r[M],O=-1;++O<m;)O!=M&&(R[M]=el(R[M]||F,r[O],a,c));return ts(xn(R,1),a,c)}function g_(r,a,c){for(var m=-1,M=r.length,R=a.length,F={};++m<M;){var O=m<R?a[m]:n;c(F,r[m],O)}return F}function Cd(r){return Kt(r)?r:[]}function Ld(r){return typeof r=="function"?r:jn}function ns(r,a){return Qe(r)?r:zd(r,a)?[r]:X_(Mt(r))}var sT=lt;function is(r,a,c){var m=r.length;return c=c===n?m:c,!a&&c>=m?r:Ri(r,a,c)}var __=qE||function(r){return vn.clearTimeout(r)};function v_(r,a){if(a)return r.slice();var c=r.length,m=Bg?Bg(c):new r.constructor(c);return r.copy(m),m}function Pd(r){var a=new r.constructor(r.byteLength);return new yu(a).set(new yu(r)),a}function oT(r,a){var c=a?Pd(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function aT(r){var a=new r.constructor(r.source,q.exec(r));return a.lastIndex=r.lastIndex,a}function lT(r){return Qa?Rt(Qa.call(r)):{}}function x_(r,a){var c=a?Pd(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function S_(r,a){if(r!==a){var c=r!==n,m=r===null,M=r===r,R=si(r),F=a!==n,O=a===null,G=a===a,ue=si(a);if(!O&&!ue&&!R&&r>a||R&&F&&G&&!O&&!ue||m&&F&&G||!c&&G||!M)return 1;if(!m&&!R&&!ue&&r<a||ue&&c&&M&&!m&&!R||O&&c&&M||!F&&M||!G)return-1}return 0}function uT(r,a,c){for(var m=-1,M=r.criteria,R=a.criteria,F=M.length,O=c.length;++m<F;){var G=S_(M[m],R[m]);if(G){if(m>=O)return G;var ue=c[m];return G*(ue=="desc"?-1:1)}}return r.index-a.index}function y_(r,a,c,m){for(var M=-1,R=r.length,F=c.length,O=-1,G=a.length,ue=an(R-F,0),ce=K(G+ue),he=!m;++O<G;)ce[O]=a[O];for(;++M<F;)(he||M<R)&&(ce[c[M]]=r[M]);for(;ue--;)ce[O++]=r[M++];return ce}function M_(r,a,c,m){for(var M=-1,R=r.length,F=-1,O=c.length,G=-1,ue=a.length,ce=an(R-O,0),he=K(ce+ue),Ae=!m;++M<ce;)he[M]=r[M];for(var Ie=M;++G<ue;)he[Ie+G]=a[G];for(;++F<O;)(Ae||M<R)&&(he[Ie+c[F]]=r[M++]);return he}function Wn(r,a){var c=-1,m=r.length;for(a||(a=K(m));++c<m;)a[c]=r[c];return a}function rr(r,a,c,m){var M=!c;c||(c={});for(var R=-1,F=a.length;++R<F;){var O=a[R],G=m?m(c[O],r[O],O,c,r):n;G===n&&(G=r[O]),M?vr(c,O,G):Ja(c,O,G)}return c}function cT(r,a){return rr(r,Od(r),a)}function fT(r,a){return rr(r,N_(r),a)}function Fu(r,a){return function(c,m){var M=Qe(c)?gE:D1,R=a?a():{};return M(c,r,Ge(m,2),R)}}function No(r){return lt(function(a,c){var m=-1,M=c.length,R=M>1?c[M-1]:n,F=M>2?c[2]:n;for(R=r.length>3&&typeof R=="function"?(M--,R):n,F&&Nn(c[0],c[1],F)&&(R=M<3?n:R,M=1),a=Rt(a);++m<M;){var O=c[m];O&&r(a,O,m,R)}return a})}function E_(r,a){return function(c,m){if(c==null)return c;if(!Xn(c))return r(c,m);for(var M=c.length,R=a?M:-1,F=Rt(c);(a?R--:++R<M)&&m(F[R],R,F)!==!1;);return c}}function T_(r){return function(a,c,m){for(var M=-1,R=Rt(a),F=m(a),O=F.length;O--;){var G=F[r?O:++M];if(c(R[G],G,R)===!1)break}return a}}function dT(r,a,c){var m=a&v,M=rl(r);function R(){var F=this&&this!==vn&&this instanceof R?M:r;return F.apply(m?c:this,arguments)}return R}function w_(r){return function(a){a=Mt(a);var c=Co(a)?Bi(a):n,m=c?c[0]:a.charAt(0),M=c?is(c,1).join(""):a.slice(1);return m[r]()+M}}function Fo(r){return function(a){return td(Ev(Mv(a).replace(nE,"")),r,"")}}function rl(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Io(r.prototype),m=r.apply(c,a);return Vt(m)?m:c}}function hT(r,a,c){var m=rl(r);function M(){for(var R=arguments.length,F=K(R),O=R,G=Oo(M);O--;)F[O]=arguments[O];var ue=R<3&&F[0]!==G&&F[R-1]!==G?[]:Qr(F,G);if(R-=ue.length,R<c)return P_(r,a,Ou,M.placeholder,n,F,ue,n,n,c-R);var ce=this&&this!==vn&&this instanceof M?m:r;return ni(ce,this,F)}return M}function A_(r){return function(a,c,m){var M=Rt(a);if(!Xn(a)){var R=Ge(c,3);a=hn(a),c=function(O){return R(M[O],O,M)}}var F=r(a,c,m);return F>-1?M[R?a[F]:F]:n}}function R_(r){return Sr(function(a){var c=a.length,m=c,M=wi.prototype.thru;for(r&&a.reverse();m--;){var R=a[m];if(typeof R!="function")throw new Ti(l);if(M&&!F&&Hu(R)=="wrapper")var F=new wi([],!0)}for(m=F?m:c;++m<c;){R=a[m];var O=Hu(R),G=O=="wrapper"?Nd(R):n;G&&Bd(G[0])&&G[1]==(D|S|P|H)&&!G[4].length&&G[9]==1?F=F[Hu(G[0])].apply(F,G[3]):F=R.length==1&&Bd(R)?F[O]():F.thru(R)}return function(){var ue=arguments,ce=ue[0];if(F&&ue.length==1&&Qe(ce))return F.plant(ce).value();for(var he=0,Ae=c?a[he].apply(this,ue):ce;++he<c;)Ae=a[he].call(this,Ae);return Ae}})}function Ou(r,a,c,m,M,R,F,O,G,ue){var ce=a&D,he=a&v,Ae=a&h,Ie=a&(S|w),Ve=a&C,rt=Ae?n:rl(r);function We(){for(var ft=arguments.length,gt=K(ft),oi=ft;oi--;)gt[oi]=arguments[oi];if(Ie)var Fn=Oo(We),ai=wE(gt,Fn);if(m&&(gt=y_(gt,m,M,Ie)),R&&(gt=M_(gt,R,F,Ie)),ft-=ai,Ie&&ft<ue){var Zt=Qr(gt,Fn);return P_(r,a,Ou,We.placeholder,c,gt,Zt,O,G,ue-ft)}var Gi=he?c:this,Tr=Ae?Gi[r]:r;return ft=gt.length,O?gt=DT(gt,O):Ve&&ft>1&&gt.reverse(),ce&&G<ft&&(gt.length=G),this&&this!==vn&&this instanceof We&&(Tr=rt||rl(Tr)),Tr.apply(Gi,gt)}return We}function C_(r,a){return function(c,m){return H1(c,r,a(m),{})}}function zu(r,a){return function(c,m){var M;if(c===n&&m===n)return a;if(c!==n&&(M=c),m!==n){if(M===n)return m;typeof c=="string"||typeof m=="string"?(c=ri(c),m=ri(m)):(c=h_(c),m=h_(m)),M=r(c,m)}return M}}function bd(r){return Sr(function(a){return a=Bt(a,ii(Ge())),lt(function(c){var m=this;return r(a,function(M){return ni(M,m,c)})})})}function Bu(r,a){a=a===n?" ":ri(a);var c=a.length;if(c<2)return c?Td(a,r):a;var m=Td(a,wu(r/Lo(a)));return Co(a)?is(Bi(m),0,r).join(""):m.slice(0,r)}function pT(r,a,c,m){var M=a&v,R=rl(r);function F(){for(var O=-1,G=arguments.length,ue=-1,ce=m.length,he=K(ce+G),Ae=this&&this!==vn&&this instanceof F?R:r;++ue<ce;)he[ue]=m[ue];for(;G--;)he[ue++]=arguments[++O];return ni(Ae,M?c:this,he)}return F}function L_(r){return function(a,c,m){return m&&typeof m!="number"&&Nn(a,c,m)&&(c=m=n),a=Er(a),c===n?(c=a,a=0):c=Er(c),m=m===n?a<c?1:-1:Er(m),J1(a,c,m,r)}}function ku(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=Li(a),c=Li(c)),r(a,c)}}function P_(r,a,c,m,M,R,F,O,G,ue){var ce=a&S,he=ce?F:n,Ae=ce?n:F,Ie=ce?R:n,Ve=ce?n:R;a|=ce?P:I,a&=~(ce?I:P),a&y||(a&=~(v|h));var rt=[r,a,M,Ie,he,Ve,Ae,O,G,ue],We=c.apply(n,rt);return Bd(r)&&G_(We,rt),We.placeholder=m,V_(We,r,a)}function Ud(r){var a=on[r];return function(c,m){if(c=Li(c),m=m==null?0:An(nt(m),292),m&&Vg(c)){var M=(Mt(c)+"e").split("e"),R=a(M[0]+"e"+(+M[1]+m));return M=(Mt(R)+"e").split("e"),+(M[0]+"e"+(+M[1]-m))}return a(c)}}var mT=Uo&&1/mu(new Uo([,-0]))[1]==ee?function(r){return new Uo(r)}:eh;function b_(r){return function(a){var c=Rn(a);return c==Ne?ld(a):c==Et?UE(a):TE(a,r(a))}}function xr(r,a,c,m,M,R,F,O){var G=a&h;if(!G&&typeof r!="function")throw new Ti(l);var ue=m?m.length:0;if(ue||(a&=~(P|I),m=M=n),F=F===n?F:an(nt(F),0),O=O===n?O:nt(O),ue-=M?M.length:0,a&I){var ce=m,he=M;m=M=n}var Ae=G?n:Nd(r),Ie=[r,a,c,m,M,ce,he,R,F,O];if(Ae&&PT(Ie,Ae),r=Ie[0],a=Ie[1],c=Ie[2],m=Ie[3],M=Ie[4],O=Ie[9]=Ie[9]===n?G?0:r.length:an(Ie[9]-ue,0),!O&&a&(S|w)&&(a&=~(S|w)),!a||a==v)var Ve=dT(r,a,c);else a==S||a==w?Ve=hT(r,a,O):(a==P||a==(v|P))&&!M.length?Ve=pT(r,a,c,m):Ve=Ou.apply(n,Ie);var rt=Ae?f_:G_;return V_(rt(Ve,Ie),r,a)}function U_(r,a,c,m){return r===n||Hi(r,bo[c])&&!Tt.call(m,c)?a:r}function D_(r,a,c,m,M,R){return Vt(r)&&Vt(a)&&(R.set(a,r),Du(r,a,n,D_,R),R.delete(a)),r}function gT(r){return al(r)?n:r}function I_(r,a,c,m,M,R){var F=c&E,O=r.length,G=a.length;if(O!=G&&!(F&&G>O))return!1;var ue=R.get(r),ce=R.get(a);if(ue&&ce)return ue==a&&ce==r;var he=-1,Ae=!0,Ie=c&T?new Os:n;for(R.set(r,a),R.set(a,r);++he<O;){var Ve=r[he],rt=a[he];if(m)var We=F?m(rt,Ve,he,a,r,R):m(Ve,rt,he,r,a,R);if(We!==n){if(We)continue;Ae=!1;break}if(Ie){if(!nd(a,function(ft,gt){if(!ja(Ie,gt)&&(Ve===ft||M(Ve,ft,c,m,R)))return Ie.push(gt)})){Ae=!1;break}}else if(!(Ve===rt||M(Ve,rt,c,m,R))){Ae=!1;break}}return R.delete(r),R.delete(a),Ae}function _T(r,a,c,m,M,R,F){switch(c){case Se:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case ge:return!(r.byteLength!=a.byteLength||!R(new yu(r),new yu(a)));case Be:case mt:case $e:return Hi(+r,+a);case et:return r.name==a.name&&r.message==a.message;case xt:case jt:return r==a+"";case Ne:var O=ld;case Et:var G=m&E;if(O||(O=mu),r.size!=a.size&&!G)return!1;var ue=F.get(r);if(ue)return ue==a;m|=T,F.set(r,a);var ce=I_(O(r),O(a),m,M,R,F);return F.delete(r),ce;case N:if(Qa)return Qa.call(r)==Qa.call(a)}return!1}function vT(r,a,c,m,M,R){var F=c&E,O=Dd(r),G=O.length,ue=Dd(a),ce=ue.length;if(G!=ce&&!F)return!1;for(var he=G;he--;){var Ae=O[he];if(!(F?Ae in a:Tt.call(a,Ae)))return!1}var Ie=R.get(r),Ve=R.get(a);if(Ie&&Ve)return Ie==a&&Ve==r;var rt=!0;R.set(r,a),R.set(a,r);for(var We=F;++he<G;){Ae=O[he];var ft=r[Ae],gt=a[Ae];if(m)var oi=F?m(gt,ft,Ae,a,r,R):m(ft,gt,Ae,r,a,R);if(!(oi===n?ft===gt||M(ft,gt,c,m,R):oi)){rt=!1;break}We||(We=Ae=="constructor")}if(rt&&!We){var Fn=r.constructor,ai=a.constructor;Fn!=ai&&"constructor"in r&&"constructor"in a&&!(typeof Fn=="function"&&Fn instanceof Fn&&typeof ai=="function"&&ai instanceof ai)&&(rt=!1)}return R.delete(r),R.delete(a),rt}function Sr(r){return Hd(k_(r,n,$_),r+"")}function Dd(r){return e_(r,hn,Od)}function Id(r){return e_(r,qn,N_)}var Nd=Ru?function(r){return Ru.get(r)}:eh;function Hu(r){for(var a=r.name+"",c=Do[a],m=Tt.call(Do,a)?c.length:0;m--;){var M=c[m],R=M.func;if(R==null||R==r)return M.name}return a}function Oo(r){var a=Tt.call(A,"placeholder")?A:r;return a.placeholder}function Ge(){var r=A.iteratee||Qd;return r=r===Qd?i_:r,arguments.length?r(arguments[0],arguments[1]):r}function Gu(r,a){var c=r.__data__;return AT(a)?c[typeof a=="string"?"string":"hash"]:c.map}function Fd(r){for(var a=hn(r),c=a.length;c--;){var m=a[c],M=r[m];a[c]=[m,M,z_(M)]}return a}function ks(r,a){var c=LE(r,a);return n_(c)?c:n}function xT(r){var a=Tt.call(r,Ns),c=r[Ns];try{r[Ns]=n;var m=!0}catch{}var M=xu.call(r);return m&&(a?r[Ns]=c:delete r[Ns]),M}var Od=cd?function(r){return r==null?[]:(r=Rt(r),Kr(cd(r),function(a){return Hg.call(r,a)}))}:th,N_=cd?function(r){for(var a=[];r;)Zr(a,Od(r)),r=Mu(r);return a}:th,Rn=In;(fd&&Rn(new fd(new ArrayBuffer(1)))!=Se||$a&&Rn(new $a)!=Ne||dd&&Rn(dd.resolve())!=ut||Uo&&Rn(new Uo)!=Et||Ka&&Rn(new Ka)!=ne)&&(Rn=function(r){var a=In(r),c=a==vt?r.constructor:n,m=c?Hs(c):"";if(m)switch(m){case t1:return Se;case n1:return Ne;case i1:return ut;case r1:return Et;case s1:return ne}return a});function ST(r,a,c){for(var m=-1,M=c.length;++m<M;){var R=c[m],F=R.size;switch(R.type){case"drop":r+=F;break;case"dropRight":a-=F;break;case"take":a=An(a,r+F);break;case"takeRight":r=an(r,a-F);break}}return{start:r,end:a}}function yT(r){var a=r.match(Mo);return a?a[1].split(du):[]}function F_(r,a,c){a=ns(a,r);for(var m=-1,M=a.length,R=!1;++m<M;){var F=sr(a[m]);if(!(R=r!=null&&c(r,F)))break;r=r[F]}return R||++m!=M?R:(M=r==null?0:r.length,!!M&&$u(M)&&yr(F,M)&&(Qe(r)||Gs(r)))}function MT(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&Tt.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function O_(r){return typeof r.constructor=="function"&&!sl(r)?Io(Mu(r)):{}}function ET(r,a,c){var m=r.constructor;switch(a){case ge:return Pd(r);case Be:case mt:return new m(+r);case Se:return oT(r,c);case Fe:case Te:case le:case Oe:case ze:case ke:case be:case Ue:case tt:return x_(r,c);case Ne:return new m;case $e:case jt:return new m(r);case xt:return aT(r);case Et:return new m;case N:return lT(r)}}function TT(r,a){var c=a.length;if(!c)return r;var m=c-1;return a[m]=(c>1?"& ":"")+a[m],a=a.join(c>2?", ":" "),r.replace(fu,`{
/* [wrapped with `+a+`] */
`)}function wT(r){return Qe(r)||Gs(r)||!!(Gg&&r&&r[Gg])}function yr(r,a){var c=typeof r;return a=a??B,!!a&&(c=="number"||c!="symbol"&&He.test(r))&&r>-1&&r%1==0&&r<a}function Nn(r,a,c){if(!Vt(c))return!1;var m=typeof a;return(m=="number"?Xn(c)&&yr(a,c.length):m=="string"&&a in c)?Hi(c[a],r):!1}function zd(r,a){if(Qe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||si(r)?!0:Si.test(r)||!Ot.test(r)||a!=null&&r in Rt(a)}function AT(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function Bd(r){var a=Hu(r),c=A[a];if(typeof c!="function"||!(a in ht.prototype))return!1;if(r===c)return!0;var m=Nd(c);return!!m&&r===m[0]}function RT(r){return!!zg&&zg in r}var CT=_u?Mr:nh;function sl(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||bo;return r===c}function z_(r){return r===r&&!Vt(r)}function B_(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==n||r in Rt(c))}}function LT(r){var a=ju(r,function(m){return c.size===d&&c.clear(),m}),c=a.cache;return a}function PT(r,a){var c=r[1],m=a[1],M=c|m,R=M<(v|h|D),F=m==D&&c==S||m==D&&c==H&&r[7].length<=a[8]||m==(D|H)&&a[7].length<=a[8]&&c==S;if(!(R||F))return r;m&v&&(r[2]=a[2],M|=c&v?0:y);var O=a[3];if(O){var G=r[3];r[3]=G?y_(G,O,a[4]):O,r[4]=G?Qr(r[3],p):a[4]}return O=a[5],O&&(G=r[5],r[5]=G?M_(G,O,a[6]):O,r[6]=G?Qr(r[5],p):a[6]),O=a[7],O&&(r[7]=O),m&D&&(r[8]=r[8]==null?a[8]:An(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=M,r}function bT(r){var a=[];if(r!=null)for(var c in Rt(r))a.push(c);return a}function UT(r){return xu.call(r)}function k_(r,a,c){return a=an(a===n?r.length-1:a,0),function(){for(var m=arguments,M=-1,R=an(m.length-a,0),F=K(R);++M<R;)F[M]=m[a+M];M=-1;for(var O=K(a+1);++M<a;)O[M]=m[M];return O[a]=c(F),ni(r,this,O)}}function H_(r,a){return a.length<2?r:Bs(r,Ri(a,0,-1))}function DT(r,a){for(var c=r.length,m=An(a.length,c),M=Wn(r);m--;){var R=a[m];r[m]=yr(R,c)?M[R]:n}return r}function kd(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var G_=W_(f_),ol=YE||function(r,a){return vn.setTimeout(r,a)},Hd=W_(nT);function V_(r,a,c){var m=a+"";return Hd(r,TT(m,IT(yT(m),c)))}function W_(r){var a=0,c=0;return function(){var m=QE(),M=j-(m-c);if(c=m,M>0){if(++a>=de)return arguments[0]}else a=0;return r.apply(n,arguments)}}function Vu(r,a){var c=-1,m=r.length,M=m-1;for(a=a===n?m:a;++c<a;){var R=Ed(c,M),F=r[R];r[R]=r[c],r[c]=F}return r.length=a,r}var X_=LT(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(_n,function(c,m,M,R){a.push(M?R.replace(qf,"$1"):m||c)}),a});function sr(r){if(typeof r=="string"||si(r))return r;var a=r+"";return a=="0"&&1/r==-ee?"-0":a}function Hs(r){if(r!=null){try{return vu.call(r)}catch{}try{return r+""}catch{}}return""}function IT(r,a){return Ei(xe,function(c){var m="_."+c[0];a&c[1]&&!hu(r,m)&&r.push(m)}),r.sort()}function q_(r){if(r instanceof ht)return r.clone();var a=new wi(r.__wrapped__,r.__chain__);return a.__actions__=Wn(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function NT(r,a,c){(c?Nn(r,a,c):a===n)?a=1:a=an(nt(a),0);var m=r==null?0:r.length;if(!m||a<1)return[];for(var M=0,R=0,F=K(wu(m/a));M<m;)F[R++]=Ri(r,M,M+=a);return F}function FT(r){for(var a=-1,c=r==null?0:r.length,m=0,M=[];++a<c;){var R=r[a];R&&(M[m++]=R)}return M}function OT(){var r=arguments.length;if(!r)return[];for(var a=K(r-1),c=arguments[0],m=r;m--;)a[m-1]=arguments[m];return Zr(Qe(c)?Wn(c):[c],xn(a,1))}var zT=lt(function(r,a){return Kt(r)?el(r,xn(a,1,Kt,!0)):[]}),BT=lt(function(r,a){var c=Ci(a);return Kt(c)&&(c=n),Kt(r)?el(r,xn(a,1,Kt,!0),Ge(c,2)):[]}),kT=lt(function(r,a){var c=Ci(a);return Kt(c)&&(c=n),Kt(r)?el(r,xn(a,1,Kt,!0),n,c):[]});function HT(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),Ri(r,a<0?0:a,m)):[]}function GT(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),a=m-a,Ri(r,0,a<0?0:a)):[]}function VT(r,a){return r&&r.length?Nu(r,Ge(a,3),!0,!0):[]}function WT(r,a){return r&&r.length?Nu(r,Ge(a,3),!0):[]}function XT(r,a,c,m){var M=r==null?0:r.length;return M?(c&&typeof c!="number"&&Nn(r,a,c)&&(c=0,m=M),O1(r,a,c,m)):[]}function j_(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=c==null?0:nt(c);return M<0&&(M=an(m+M,0)),pu(r,Ge(a,3),M)}function Y_(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=m-1;return c!==n&&(M=nt(c),M=c<0?an(m+M,0):An(M,m-1)),pu(r,Ge(a,3),M,!0)}function $_(r){var a=r==null?0:r.length;return a?xn(r,1):[]}function qT(r){var a=r==null?0:r.length;return a?xn(r,ee):[]}function jT(r,a){var c=r==null?0:r.length;return c?(a=a===n?1:nt(a),xn(r,a)):[]}function YT(r){for(var a=-1,c=r==null?0:r.length,m={};++a<c;){var M=r[a];m[M[0]]=M[1]}return m}function K_(r){return r&&r.length?r[0]:n}function $T(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=c==null?0:nt(c);return M<0&&(M=an(m+M,0)),Ro(r,a,M)}function KT(r){var a=r==null?0:r.length;return a?Ri(r,0,-1):[]}var ZT=lt(function(r){var a=Bt(r,Cd);return a.length&&a[0]===r[0]?vd(a):[]}),QT=lt(function(r){var a=Ci(r),c=Bt(r,Cd);return a===Ci(c)?a=n:c.pop(),c.length&&c[0]===r[0]?vd(c,Ge(a,2)):[]}),JT=lt(function(r){var a=Ci(r),c=Bt(r,Cd);return a=typeof a=="function"?a:n,a&&c.pop(),c.length&&c[0]===r[0]?vd(c,n,a):[]});function ew(r,a){return r==null?"":KE.call(r,a)}function Ci(r){var a=r==null?0:r.length;return a?r[a-1]:n}function tw(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=m;return c!==n&&(M=nt(c),M=M<0?an(m+M,0):An(M,m-1)),a===a?IE(r,a,M):pu(r,Pg,M,!0)}function nw(r,a){return r&&r.length?a_(r,nt(a)):n}var iw=lt(Z_);function Z_(r,a){return r&&r.length&&a&&a.length?Md(r,a):r}function rw(r,a,c){return r&&r.length&&a&&a.length?Md(r,a,Ge(c,2)):r}function sw(r,a,c){return r&&r.length&&a&&a.length?Md(r,a,n,c):r}var ow=Sr(function(r,a){var c=r==null?0:r.length,m=pd(r,a);return c_(r,Bt(a,function(M){return yr(M,c)?+M:M}).sort(S_)),m});function aw(r,a){var c=[];if(!(r&&r.length))return c;var m=-1,M=[],R=r.length;for(a=Ge(a,3);++m<R;){var F=r[m];a(F,m,r)&&(c.push(F),M.push(m))}return c_(r,M),c}function Gd(r){return r==null?r:e1.call(r)}function lw(r,a,c){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Nn(r,a,c)?(a=0,c=m):(a=a==null?0:nt(a),c=c===n?m:nt(c)),Ri(r,a,c)):[]}function uw(r,a){return Iu(r,a)}function cw(r,a,c){return wd(r,a,Ge(c,2))}function fw(r,a){var c=r==null?0:r.length;if(c){var m=Iu(r,a);if(m<c&&Hi(r[m],a))return m}return-1}function dw(r,a){return Iu(r,a,!0)}function hw(r,a,c){return wd(r,a,Ge(c,2),!0)}function pw(r,a){var c=r==null?0:r.length;if(c){var m=Iu(r,a,!0)-1;if(Hi(r[m],a))return m}return-1}function mw(r){return r&&r.length?d_(r):[]}function gw(r,a){return r&&r.length?d_(r,Ge(a,2)):[]}function _w(r){var a=r==null?0:r.length;return a?Ri(r,1,a):[]}function vw(r,a,c){return r&&r.length?(a=c||a===n?1:nt(a),Ri(r,0,a<0?0:a)):[]}function xw(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),a=m-a,Ri(r,a<0?0:a,m)):[]}function Sw(r,a){return r&&r.length?Nu(r,Ge(a,3),!1,!0):[]}function yw(r,a){return r&&r.length?Nu(r,Ge(a,3)):[]}var Mw=lt(function(r){return ts(xn(r,1,Kt,!0))}),Ew=lt(function(r){var a=Ci(r);return Kt(a)&&(a=n),ts(xn(r,1,Kt,!0),Ge(a,2))}),Tw=lt(function(r){var a=Ci(r);return a=typeof a=="function"?a:n,ts(xn(r,1,Kt,!0),n,a)});function ww(r){return r&&r.length?ts(r):[]}function Aw(r,a){return r&&r.length?ts(r,Ge(a,2)):[]}function Rw(r,a){return a=typeof a=="function"?a:n,r&&r.length?ts(r,n,a):[]}function Vd(r){if(!(r&&r.length))return[];var a=0;return r=Kr(r,function(c){if(Kt(c))return a=an(c.length,a),!0}),od(a,function(c){return Bt(r,id(c))})}function Q_(r,a){if(!(r&&r.length))return[];var c=Vd(r);return a==null?c:Bt(c,function(m){return ni(a,n,m)})}var Cw=lt(function(r,a){return Kt(r)?el(r,a):[]}),Lw=lt(function(r){return Rd(Kr(r,Kt))}),Pw=lt(function(r){var a=Ci(r);return Kt(a)&&(a=n),Rd(Kr(r,Kt),Ge(a,2))}),bw=lt(function(r){var a=Ci(r);return a=typeof a=="function"?a:n,Rd(Kr(r,Kt),n,a)}),Uw=lt(Vd);function Dw(r,a){return g_(r||[],a||[],Ja)}function Iw(r,a){return g_(r||[],a||[],il)}var Nw=lt(function(r){var a=r.length,c=a>1?r[a-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Q_(r,c)});function J_(r){var a=A(r);return a.__chain__=!0,a}function Fw(r,a){return a(r),r}function Wu(r,a){return a(r)}var Ow=Sr(function(r){var a=r.length,c=a?r[0]:0,m=this.__wrapped__,M=function(R){return pd(R,r)};return a>1||this.__actions__.length||!(m instanceof ht)||!yr(c)?this.thru(M):(m=m.slice(c,+c+(a?1:0)),m.__actions__.push({func:Wu,args:[M],thisArg:n}),new wi(m,this.__chain__).thru(function(R){return a&&!R.length&&R.push(n),R}))});function zw(){return J_(this)}function Bw(){return new wi(this.value(),this.__chain__)}function kw(){this.__values__===n&&(this.__values__=hv(this.value()));var r=this.__index__>=this.__values__.length,a=r?n:this.__values__[this.__index__++];return{done:r,value:a}}function Hw(){return this}function Gw(r){for(var a,c=this;c instanceof Lu;){var m=q_(c);m.__index__=0,m.__values__=n,a?M.__wrapped__=m:a=m;var M=m;c=c.__wrapped__}return M.__wrapped__=r,a}function Vw(){var r=this.__wrapped__;if(r instanceof ht){var a=r;return this.__actions__.length&&(a=new ht(this)),a=a.reverse(),a.__actions__.push({func:Wu,args:[Gd],thisArg:n}),new wi(a,this.__chain__)}return this.thru(Gd)}function Ww(){return m_(this.__wrapped__,this.__actions__)}var Xw=Fu(function(r,a,c){Tt.call(r,c)?++r[c]:vr(r,c,1)});function qw(r,a,c){var m=Qe(r)?Cg:F1;return c&&Nn(r,a,c)&&(a=n),m(r,Ge(a,3))}function jw(r,a){var c=Qe(r)?Kr:Qg;return c(r,Ge(a,3))}var Yw=A_(j_),$w=A_(Y_);function Kw(r,a){return xn(Xu(r,a),1)}function Zw(r,a){return xn(Xu(r,a),ee)}function Qw(r,a,c){return c=c===n?1:nt(c),xn(Xu(r,a),c)}function ev(r,a){var c=Qe(r)?Ei:es;return c(r,Ge(a,3))}function tv(r,a){var c=Qe(r)?_E:Zg;return c(r,Ge(a,3))}var Jw=Fu(function(r,a,c){Tt.call(r,c)?r[c].push(a):vr(r,c,[a])});function eA(r,a,c,m){r=Xn(r)?r:Bo(r),c=c&&!m?nt(c):0;var M=r.length;return c<0&&(c=an(M+c,0)),Ku(r)?c<=M&&r.indexOf(a,c)>-1:!!M&&Ro(r,a,c)>-1}var tA=lt(function(r,a,c){var m=-1,M=typeof a=="function",R=Xn(r)?K(r.length):[];return es(r,function(F){R[++m]=M?ni(a,F,c):tl(F,a,c)}),R}),nA=Fu(function(r,a,c){vr(r,c,a)});function Xu(r,a){var c=Qe(r)?Bt:r_;return c(r,Ge(a,3))}function iA(r,a,c,m){return r==null?[]:(Qe(a)||(a=a==null?[]:[a]),c=m?n:c,Qe(c)||(c=c==null?[]:[c]),l_(r,a,c))}var rA=Fu(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function sA(r,a,c){var m=Qe(r)?td:Ug,M=arguments.length<3;return m(r,Ge(a,4),c,M,es)}function oA(r,a,c){var m=Qe(r)?vE:Ug,M=arguments.length<3;return m(r,Ge(a,4),c,M,Zg)}function aA(r,a){var c=Qe(r)?Kr:Qg;return c(r,Yu(Ge(a,3)))}function lA(r){var a=Qe(r)?jg:eT;return a(r)}function uA(r,a,c){(c?Nn(r,a,c):a===n)?a=1:a=nt(a);var m=Qe(r)?b1:tT;return m(r,a)}function cA(r){var a=Qe(r)?U1:iT;return a(r)}function fA(r){if(r==null)return 0;if(Xn(r))return Ku(r)?Lo(r):r.length;var a=Rn(r);return a==Ne||a==Et?r.size:Sd(r).length}function dA(r,a,c){var m=Qe(r)?nd:rT;return c&&Nn(r,a,c)&&(a=n),m(r,Ge(a,3))}var hA=lt(function(r,a){if(r==null)return[];var c=a.length;return c>1&&Nn(r,a[0],a[1])?a=[]:c>2&&Nn(a[0],a[1],a[2])&&(a=[a[0]]),l_(r,xn(a,1),[])}),qu=jE||function(){return vn.Date.now()};function pA(r,a){if(typeof a!="function")throw new Ti(l);return r=nt(r),function(){if(--r<1)return a.apply(this,arguments)}}function nv(r,a,c){return a=c?n:a,a=r&&a==null?r.length:a,xr(r,D,n,n,n,n,a)}function iv(r,a){var c;if(typeof a!="function")throw new Ti(l);return r=nt(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=n),c}}var Wd=lt(function(r,a,c){var m=v;if(c.length){var M=Qr(c,Oo(Wd));m|=P}return xr(r,m,a,c,M)}),rv=lt(function(r,a,c){var m=v|h;if(c.length){var M=Qr(c,Oo(rv));m|=P}return xr(a,m,r,c,M)});function sv(r,a,c){a=c?n:a;var m=xr(r,S,n,n,n,n,n,a);return m.placeholder=sv.placeholder,m}function ov(r,a,c){a=c?n:a;var m=xr(r,w,n,n,n,n,n,a);return m.placeholder=ov.placeholder,m}function av(r,a,c){var m,M,R,F,O,G,ue=0,ce=!1,he=!1,Ae=!0;if(typeof r!="function")throw new Ti(l);a=Li(a)||0,Vt(c)&&(ce=!!c.leading,he="maxWait"in c,R=he?an(Li(c.maxWait)||0,a):R,Ae="trailing"in c?!!c.trailing:Ae);function Ie(Zt){var Gi=m,Tr=M;return m=M=n,ue=Zt,F=r.apply(Tr,Gi),F}function Ve(Zt){return ue=Zt,O=ol(ft,a),ce?Ie(Zt):F}function rt(Zt){var Gi=Zt-G,Tr=Zt-ue,Av=a-Gi;return he?An(Av,R-Tr):Av}function We(Zt){var Gi=Zt-G,Tr=Zt-ue;return G===n||Gi>=a||Gi<0||he&&Tr>=R}function ft(){var Zt=qu();if(We(Zt))return gt(Zt);O=ol(ft,rt(Zt))}function gt(Zt){return O=n,Ae&&m?Ie(Zt):(m=M=n,F)}function oi(){O!==n&&__(O),ue=0,m=G=M=O=n}function Fn(){return O===n?F:gt(qu())}function ai(){var Zt=qu(),Gi=We(Zt);if(m=arguments,M=this,G=Zt,Gi){if(O===n)return Ve(G);if(he)return __(O),O=ol(ft,a),Ie(G)}return O===n&&(O=ol(ft,a)),F}return ai.cancel=oi,ai.flush=Fn,ai}var mA=lt(function(r,a){return Kg(r,1,a)}),gA=lt(function(r,a,c){return Kg(r,Li(a)||0,c)});function _A(r){return xr(r,C)}function ju(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new Ti(l);var c=function(){var m=arguments,M=a?a.apply(this,m):m[0],R=c.cache;if(R.has(M))return R.get(M);var F=r.apply(this,m);return c.cache=R.set(M,F)||R,F};return c.cache=new(ju.Cache||_r),c}ju.Cache=_r;function Yu(r){if(typeof r!="function")throw new Ti(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function vA(r){return iv(2,r)}var xA=sT(function(r,a){a=a.length==1&&Qe(a[0])?Bt(a[0],ii(Ge())):Bt(xn(a,1),ii(Ge()));var c=a.length;return lt(function(m){for(var M=-1,R=An(m.length,c);++M<R;)m[M]=a[M].call(this,m[M]);return ni(r,this,m)})}),Xd=lt(function(r,a){var c=Qr(a,Oo(Xd));return xr(r,P,n,a,c)}),lv=lt(function(r,a){var c=Qr(a,Oo(lv));return xr(r,I,n,a,c)}),SA=Sr(function(r,a){return xr(r,H,n,n,n,a)});function yA(r,a){if(typeof r!="function")throw new Ti(l);return a=a===n?a:nt(a),lt(r,a)}function MA(r,a){if(typeof r!="function")throw new Ti(l);return a=a==null?0:an(nt(a),0),lt(function(c){var m=c[a],M=is(c,0,a);return m&&Zr(M,m),ni(r,this,M)})}function EA(r,a,c){var m=!0,M=!0;if(typeof r!="function")throw new Ti(l);return Vt(c)&&(m="leading"in c?!!c.leading:m,M="trailing"in c?!!c.trailing:M),av(r,a,{leading:m,maxWait:a,trailing:M})}function TA(r){return nv(r,1)}function wA(r,a){return Xd(Ld(a),r)}function AA(){if(!arguments.length)return[];var r=arguments[0];return Qe(r)?r:[r]}function RA(r){return Ai(r,x)}function CA(r,a){return a=typeof a=="function"?a:n,Ai(r,x,a)}function LA(r){return Ai(r,g|x)}function PA(r,a){return a=typeof a=="function"?a:n,Ai(r,g|x,a)}function bA(r,a){return a==null||$g(r,a,hn(a))}function Hi(r,a){return r===a||r!==r&&a!==a}var UA=ku(_d),DA=ku(function(r,a){return r>=a}),Gs=t_(function(){return arguments}())?t_:function(r){return Yt(r)&&Tt.call(r,"callee")&&!Hg.call(r,"callee")},Qe=K.isArray,IA=Mg?ii(Mg):G1;function Xn(r){return r!=null&&$u(r.length)&&!Mr(r)}function Kt(r){return Yt(r)&&Xn(r)}function NA(r){return r===!0||r===!1||Yt(r)&&In(r)==Be}var rs=$E||nh,FA=Eg?ii(Eg):V1;function OA(r){return Yt(r)&&r.nodeType===1&&!al(r)}function zA(r){if(r==null)return!0;if(Xn(r)&&(Qe(r)||typeof r=="string"||typeof r.splice=="function"||rs(r)||zo(r)||Gs(r)))return!r.length;var a=Rn(r);if(a==Ne||a==Et)return!r.size;if(sl(r))return!Sd(r).length;for(var c in r)if(Tt.call(r,c))return!1;return!0}function BA(r,a){return nl(r,a)}function kA(r,a,c){c=typeof c=="function"?c:n;var m=c?c(r,a):n;return m===n?nl(r,a,n,c):!!m}function qd(r){if(!Yt(r))return!1;var a=In(r);return a==et||a==wn||typeof r.message=="string"&&typeof r.name=="string"&&!al(r)}function HA(r){return typeof r=="number"&&Vg(r)}function Mr(r){if(!Vt(r))return!1;var a=In(r);return a==X||a==rn||a==qe||a==it}function uv(r){return typeof r=="number"&&r==nt(r)}function $u(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=B}function Vt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function Yt(r){return r!=null&&typeof r=="object"}var cv=Tg?ii(Tg):X1;function GA(r,a){return r===a||xd(r,a,Fd(a))}function VA(r,a,c){return c=typeof c=="function"?c:n,xd(r,a,Fd(a),c)}function WA(r){return fv(r)&&r!=+r}function XA(r){if(CT(r))throw new Ze(o);return n_(r)}function qA(r){return r===null}function jA(r){return r==null}function fv(r){return typeof r=="number"||Yt(r)&&In(r)==$e}function al(r){if(!Yt(r)||In(r)!=vt)return!1;var a=Mu(r);if(a===null)return!0;var c=Tt.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&vu.call(c)==VE}var jd=wg?ii(wg):q1;function YA(r){return uv(r)&&r>=-B&&r<=B}var dv=Ag?ii(Ag):j1;function Ku(r){return typeof r=="string"||!Qe(r)&&Yt(r)&&In(r)==jt}function si(r){return typeof r=="symbol"||Yt(r)&&In(r)==N}var zo=Rg?ii(Rg):Y1;function $A(r){return r===n}function KA(r){return Yt(r)&&Rn(r)==ne}function ZA(r){return Yt(r)&&In(r)==_e}var QA=ku(yd),JA=ku(function(r,a){return r<=a});function hv(r){if(!r)return[];if(Xn(r))return Ku(r)?Bi(r):Wn(r);if(Ya&&r[Ya])return bE(r[Ya]());var a=Rn(r),c=a==Ne?ld:a==Et?mu:Bo;return c(r)}function Er(r){if(!r)return r===0?r:0;if(r=Li(r),r===ee||r===-ee){var a=r<0?-1:1;return a*te}return r===r?r:0}function nt(r){var a=Er(r),c=a%1;return a===a?c?a-c:a:0}function pv(r){return r?zs(nt(r),0,V):0}function Li(r){if(typeof r=="number")return r;if(si(r))return Y;if(Vt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Vt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=Dg(r);var c=W.test(r);return c||Pe.test(r)?pE(r.slice(2),c?2:8):re.test(r)?Y:+r}function mv(r){return rr(r,qn(r))}function eR(r){return r?zs(nt(r),-B,B):r===0?r:0}function Mt(r){return r==null?"":ri(r)}var tR=No(function(r,a){if(sl(a)||Xn(a)){rr(a,hn(a),r);return}for(var c in a)Tt.call(a,c)&&Ja(r,c,a[c])}),gv=No(function(r,a){rr(a,qn(a),r)}),Zu=No(function(r,a,c,m){rr(a,qn(a),r,m)}),nR=No(function(r,a,c,m){rr(a,hn(a),r,m)}),iR=Sr(pd);function rR(r,a){var c=Io(r);return a==null?c:Yg(c,a)}var sR=lt(function(r,a){r=Rt(r);var c=-1,m=a.length,M=m>2?a[2]:n;for(M&&Nn(a[0],a[1],M)&&(m=1);++c<m;)for(var R=a[c],F=qn(R),O=-1,G=F.length;++O<G;){var ue=F[O],ce=r[ue];(ce===n||Hi(ce,bo[ue])&&!Tt.call(r,ue))&&(r[ue]=R[ue])}return r}),oR=lt(function(r){return r.push(n,D_),ni(_v,n,r)});function aR(r,a){return Lg(r,Ge(a,3),ir)}function lR(r,a){return Lg(r,Ge(a,3),gd)}function uR(r,a){return r==null?r:md(r,Ge(a,3),qn)}function cR(r,a){return r==null?r:Jg(r,Ge(a,3),qn)}function fR(r,a){return r&&ir(r,Ge(a,3))}function dR(r,a){return r&&gd(r,Ge(a,3))}function hR(r){return r==null?[]:Uu(r,hn(r))}function pR(r){return r==null?[]:Uu(r,qn(r))}function Yd(r,a,c){var m=r==null?n:Bs(r,a);return m===n?c:m}function mR(r,a){return r!=null&&F_(r,a,z1)}function $d(r,a){return r!=null&&F_(r,a,B1)}var gR=C_(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=xu.call(a)),r[a]=c},Zd(jn)),_R=C_(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=xu.call(a)),Tt.call(r,a)?r[a].push(c):r[a]=[c]},Ge),vR=lt(tl);function hn(r){return Xn(r)?qg(r):Sd(r)}function qn(r){return Xn(r)?qg(r,!0):$1(r)}function xR(r,a){var c={};return a=Ge(a,3),ir(r,function(m,M,R){vr(c,a(m,M,R),m)}),c}function SR(r,a){var c={};return a=Ge(a,3),ir(r,function(m,M,R){vr(c,M,a(m,M,R))}),c}var yR=No(function(r,a,c){Du(r,a,c)}),_v=No(function(r,a,c,m){Du(r,a,c,m)}),MR=Sr(function(r,a){var c={};if(r==null)return c;var m=!1;a=Bt(a,function(R){return R=ns(R,r),m||(m=R.length>1),R}),rr(r,Id(r),c),m&&(c=Ai(c,g|_|x,gT));for(var M=a.length;M--;)Ad(c,a[M]);return c});function ER(r,a){return vv(r,Yu(Ge(a)))}var TR=Sr(function(r,a){return r==null?{}:Z1(r,a)});function vv(r,a){if(r==null)return{};var c=Bt(Id(r),function(m){return[m]});return a=Ge(a),u_(r,c,function(m,M){return a(m,M[0])})}function wR(r,a,c){a=ns(a,r);var m=-1,M=a.length;for(M||(M=1,r=n);++m<M;){var R=r==null?n:r[sr(a[m])];R===n&&(m=M,R=c),r=Mr(R)?R.call(r):R}return r}function AR(r,a,c){return r==null?r:il(r,a,c)}function RR(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:il(r,a,c,m)}var xv=b_(hn),Sv=b_(qn);function CR(r,a,c){var m=Qe(r),M=m||rs(r)||zo(r);if(a=Ge(a,4),c==null){var R=r&&r.constructor;M?c=m?new R:[]:Vt(r)?c=Mr(R)?Io(Mu(r)):{}:c={}}return(M?Ei:ir)(r,function(F,O,G){return a(c,F,O,G)}),c}function LR(r,a){return r==null?!0:Ad(r,a)}function PR(r,a,c){return r==null?r:p_(r,a,Ld(c))}function bR(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:p_(r,a,Ld(c),m)}function Bo(r){return r==null?[]:ad(r,hn(r))}function UR(r){return r==null?[]:ad(r,qn(r))}function DR(r,a,c){return c===n&&(c=a,a=n),c!==n&&(c=Li(c),c=c===c?c:0),a!==n&&(a=Li(a),a=a===a?a:0),zs(Li(r),a,c)}function IR(r,a,c){return a=Er(a),c===n?(c=a,a=0):c=Er(c),r=Li(r),k1(r,a,c)}function NR(r,a,c){if(c&&typeof c!="boolean"&&Nn(r,a,c)&&(a=c=n),c===n&&(typeof a=="boolean"?(c=a,a=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&a===n?(r=0,a=1):(r=Er(r),a===n?(a=r,r=0):a=Er(a)),r>a){var m=r;r=a,a=m}if(c||r%1||a%1){var M=Wg();return An(r+M*(a-r+hE("1e-"+((M+"").length-1))),a)}return Ed(r,a)}var FR=Fo(function(r,a,c){return a=a.toLowerCase(),r+(c?yv(a):a)});function yv(r){return Kd(Mt(r).toLowerCase())}function Mv(r){return r=Mt(r),r&&r.replace(je,AE).replace(iE,"")}function OR(r,a,c){r=Mt(r),a=ri(a);var m=r.length;c=c===n?m:zs(nt(c),0,m);var M=c;return c-=a.length,c>=0&&r.slice(c,M)==a}function zR(r){return r=Mt(r),r&&_t.test(r)?r.replace(ve,RE):r}function BR(r){return r=Mt(r),r&&cu.test(r)?r.replace(So,"\\$&"):r}var kR=Fo(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),HR=Fo(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),GR=w_("toLowerCase");function VR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;if(!a||m>=a)return r;var M=(a-m)/2;return Bu(Au(M),c)+r+Bu(wu(M),c)}function WR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;return a&&m<a?r+Bu(a-m,c):r}function XR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;return a&&m<a?Bu(a-m,c)+r:r}function qR(r,a,c){return c||a==null?a=0:a&&(a=+a),JE(Mt(r).replace(Va,""),a||0)}function jR(r,a,c){return(c?Nn(r,a,c):a===n)?a=1:a=nt(a),Td(Mt(r),a)}function YR(){var r=arguments,a=Mt(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var $R=Fo(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function KR(r,a,c){return c&&typeof c!="number"&&Nn(r,a,c)&&(a=c=n),c=c===n?V:c>>>0,c?(r=Mt(r),r&&(typeof a=="string"||a!=null&&!jd(a))&&(a=ri(a),!a&&Co(r))?is(Bi(r),0,c):r.split(a,c)):[]}var ZR=Fo(function(r,a,c){return r+(c?" ":"")+Kd(a)});function QR(r,a,c){return r=Mt(r),c=c==null?0:zs(nt(c),0,r.length),a=ri(a),r.slice(c,c+a.length)==a}function JR(r,a,c){var m=A.templateSettings;c&&Nn(r,a,c)&&(a=n),r=Mt(r),a=Zu({},a,m,U_);var M=Zu({},a.imports,m.imports,U_),R=hn(M),F=ad(M,R),O,G,ue=0,ce=a.interpolate||Xe,he="__p += '",Ae=ud((a.escape||Xe).source+"|"+ce.source+"|"+(ce===ti?b:Xe).source+"|"+(a.evaluate||Xe).source+"|$","g"),Ie="//# sourceURL="+(Tt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++lE+"]")+`
`;r.replace(Ae,function(We,ft,gt,oi,Fn,ai){return gt||(gt=oi),he+=r.slice(ue,ai).replace(at,CE),ft&&(O=!0,he+=`' +
__e(`+ft+`) +
'`),Fn&&(G=!0,he+=`';
`+Fn+`;
__p += '`),gt&&(he+=`' +
((__t = (`+gt+`)) == null ? '' : __t) +
'`),ue=ai+We.length,We}),he+=`';
`;var Ve=Tt.call(a,"variable")&&a.variable;if(!Ve)he=`with (obj) {
`+he+`
}
`;else if(Xf.test(Ve))throw new Ze(u);he=(G?he.replace(At,""):he).replace(z,"$1").replace(we,"$1;"),he="function("+(Ve||"obj")+`) {
`+(Ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(G?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var rt=Tv(function(){return yt(R,Ie+"return "+he).apply(n,F)});if(rt.source=he,qd(rt))throw rt;return rt}function eC(r){return Mt(r).toLowerCase()}function tC(r){return Mt(r).toUpperCase()}function nC(r,a,c){if(r=Mt(r),r&&(c||a===n))return Dg(r);if(!r||!(a=ri(a)))return r;var m=Bi(r),M=Bi(a),R=Ig(m,M),F=Ng(m,M)+1;return is(m,R,F).join("")}function iC(r,a,c){if(r=Mt(r),r&&(c||a===n))return r.slice(0,Og(r)+1);if(!r||!(a=ri(a)))return r;var m=Bi(r),M=Ng(m,Bi(a))+1;return is(m,0,M).join("")}function rC(r,a,c){if(r=Mt(r),r&&(c||a===n))return r.replace(Va,"");if(!r||!(a=ri(a)))return r;var m=Bi(r),M=Ig(m,Bi(a));return is(m,M).join("")}function sC(r,a){var c=U,m=oe;if(Vt(a)){var M="separator"in a?a.separator:M;c="length"in a?nt(a.length):c,m="omission"in a?ri(a.omission):m}r=Mt(r);var R=r.length;if(Co(r)){var F=Bi(r);R=F.length}if(c>=R)return r;var O=c-Lo(m);if(O<1)return m;var G=F?is(F,0,O).join(""):r.slice(0,O);if(M===n)return G+m;if(F&&(O+=G.length-O),jd(M)){if(r.slice(O).search(M)){var ue,ce=G;for(M.global||(M=ud(M.source,Mt(q.exec(M))+"g")),M.lastIndex=0;ue=M.exec(ce);)var he=ue.index;G=G.slice(0,he===n?O:he)}}else if(r.indexOf(ri(M),O)!=O){var Ae=G.lastIndexOf(M);Ae>-1&&(G=G.slice(0,Ae))}return G+m}function oC(r){return r=Mt(r),r&&Re.test(r)?r.replace(Q,NE):r}var aC=Fo(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),Kd=w_("toUpperCase");function Ev(r,a,c){return r=Mt(r),a=c?n:a,a===n?PE(r)?zE(r):yE(r):r.match(a)||[]}var Tv=lt(function(r,a){try{return ni(r,n,a)}catch(c){return qd(c)?c:new Ze(c)}}),lC=Sr(function(r,a){return Ei(a,function(c){c=sr(c),vr(r,c,Wd(r[c],r))}),r});function uC(r){var a=r==null?0:r.length,c=Ge();return r=a?Bt(r,function(m){if(typeof m[1]!="function")throw new Ti(l);return[c(m[0]),m[1]]}):[],lt(function(m){for(var M=-1;++M<a;){var R=r[M];if(ni(R[0],this,m))return ni(R[1],this,m)}})}function cC(r){return N1(Ai(r,g))}function Zd(r){return function(){return r}}function fC(r,a){return r==null||r!==r?a:r}var dC=R_(),hC=R_(!0);function jn(r){return r}function Qd(r){return i_(typeof r=="function"?r:Ai(r,g))}function pC(r){return s_(Ai(r,g))}function mC(r,a){return o_(r,Ai(a,g))}var gC=lt(function(r,a){return function(c){return tl(c,r,a)}}),_C=lt(function(r,a){return function(c){return tl(r,c,a)}});function Jd(r,a,c){var m=hn(a),M=Uu(a,m);c==null&&!(Vt(a)&&(M.length||!m.length))&&(c=a,a=r,r=this,M=Uu(a,hn(a)));var R=!(Vt(c)&&"chain"in c)||!!c.chain,F=Mr(r);return Ei(M,function(O){var G=a[O];r[O]=G,F&&(r.prototype[O]=function(){var ue=this.__chain__;if(R||ue){var ce=r(this.__wrapped__),he=ce.__actions__=Wn(this.__actions__);return he.push({func:G,args:arguments,thisArg:r}),ce.__chain__=ue,ce}return G.apply(r,Zr([this.value()],arguments))})}),r}function vC(){return vn._===this&&(vn._=WE),this}function eh(){}function xC(r){return r=nt(r),lt(function(a){return a_(a,r)})}var SC=bd(Bt),yC=bd(Cg),MC=bd(nd);function wv(r){return zd(r)?id(sr(r)):Q1(r)}function EC(r){return function(a){return r==null?n:Bs(r,a)}}var TC=L_(),wC=L_(!0);function th(){return[]}function nh(){return!1}function AC(){return{}}function RC(){return""}function CC(){return!0}function LC(r,a){if(r=nt(r),r<1||r>B)return[];var c=V,m=An(r,V);a=Ge(a),r-=V;for(var M=od(m,a);++c<r;)a(c);return M}function PC(r){return Qe(r)?Bt(r,sr):si(r)?[r]:Wn(X_(Mt(r)))}function bC(r){var a=++GE;return Mt(r)+a}var UC=zu(function(r,a){return r+a},0),DC=Ud("ceil"),IC=zu(function(r,a){return r/a},1),NC=Ud("floor");function FC(r){return r&&r.length?bu(r,jn,_d):n}function OC(r,a){return r&&r.length?bu(r,Ge(a,2),_d):n}function zC(r){return bg(r,jn)}function BC(r,a){return bg(r,Ge(a,2))}function kC(r){return r&&r.length?bu(r,jn,yd):n}function HC(r,a){return r&&r.length?bu(r,Ge(a,2),yd):n}var GC=zu(function(r,a){return r*a},1),VC=Ud("round"),WC=zu(function(r,a){return r-a},0);function XC(r){return r&&r.length?sd(r,jn):0}function qC(r,a){return r&&r.length?sd(r,Ge(a,2)):0}return A.after=pA,A.ary=nv,A.assign=tR,A.assignIn=gv,A.assignInWith=Zu,A.assignWith=nR,A.at=iR,A.before=iv,A.bind=Wd,A.bindAll=lC,A.bindKey=rv,A.castArray=AA,A.chain=J_,A.chunk=NT,A.compact=FT,A.concat=OT,A.cond=uC,A.conforms=cC,A.constant=Zd,A.countBy=Xw,A.create=rR,A.curry=sv,A.curryRight=ov,A.debounce=av,A.defaults=sR,A.defaultsDeep=oR,A.defer=mA,A.delay=gA,A.difference=zT,A.differenceBy=BT,A.differenceWith=kT,A.drop=HT,A.dropRight=GT,A.dropRightWhile=VT,A.dropWhile=WT,A.fill=XT,A.filter=jw,A.flatMap=Kw,A.flatMapDeep=Zw,A.flatMapDepth=Qw,A.flatten=$_,A.flattenDeep=qT,A.flattenDepth=jT,A.flip=_A,A.flow=dC,A.flowRight=hC,A.fromPairs=YT,A.functions=hR,A.functionsIn=pR,A.groupBy=Jw,A.initial=KT,A.intersection=ZT,A.intersectionBy=QT,A.intersectionWith=JT,A.invert=gR,A.invertBy=_R,A.invokeMap=tA,A.iteratee=Qd,A.keyBy=nA,A.keys=hn,A.keysIn=qn,A.map=Xu,A.mapKeys=xR,A.mapValues=SR,A.matches=pC,A.matchesProperty=mC,A.memoize=ju,A.merge=yR,A.mergeWith=_v,A.method=gC,A.methodOf=_C,A.mixin=Jd,A.negate=Yu,A.nthArg=xC,A.omit=MR,A.omitBy=ER,A.once=vA,A.orderBy=iA,A.over=SC,A.overArgs=xA,A.overEvery=yC,A.overSome=MC,A.partial=Xd,A.partialRight=lv,A.partition=rA,A.pick=TR,A.pickBy=vv,A.property=wv,A.propertyOf=EC,A.pull=iw,A.pullAll=Z_,A.pullAllBy=rw,A.pullAllWith=sw,A.pullAt=ow,A.range=TC,A.rangeRight=wC,A.rearg=SA,A.reject=aA,A.remove=aw,A.rest=yA,A.reverse=Gd,A.sampleSize=uA,A.set=AR,A.setWith=RR,A.shuffle=cA,A.slice=lw,A.sortBy=hA,A.sortedUniq=mw,A.sortedUniqBy=gw,A.split=KR,A.spread=MA,A.tail=_w,A.take=vw,A.takeRight=xw,A.takeRightWhile=Sw,A.takeWhile=yw,A.tap=Fw,A.throttle=EA,A.thru=Wu,A.toArray=hv,A.toPairs=xv,A.toPairsIn=Sv,A.toPath=PC,A.toPlainObject=mv,A.transform=CR,A.unary=TA,A.union=Mw,A.unionBy=Ew,A.unionWith=Tw,A.uniq=ww,A.uniqBy=Aw,A.uniqWith=Rw,A.unset=LR,A.unzip=Vd,A.unzipWith=Q_,A.update=PR,A.updateWith=bR,A.values=Bo,A.valuesIn=UR,A.without=Cw,A.words=Ev,A.wrap=wA,A.xor=Lw,A.xorBy=Pw,A.xorWith=bw,A.zip=Uw,A.zipObject=Dw,A.zipObjectDeep=Iw,A.zipWith=Nw,A.entries=xv,A.entriesIn=Sv,A.extend=gv,A.extendWith=Zu,Jd(A,A),A.add=UC,A.attempt=Tv,A.camelCase=FR,A.capitalize=yv,A.ceil=DC,A.clamp=DR,A.clone=RA,A.cloneDeep=LA,A.cloneDeepWith=PA,A.cloneWith=CA,A.conformsTo=bA,A.deburr=Mv,A.defaultTo=fC,A.divide=IC,A.endsWith=OR,A.eq=Hi,A.escape=zR,A.escapeRegExp=BR,A.every=qw,A.find=Yw,A.findIndex=j_,A.findKey=aR,A.findLast=$w,A.findLastIndex=Y_,A.findLastKey=lR,A.floor=NC,A.forEach=ev,A.forEachRight=tv,A.forIn=uR,A.forInRight=cR,A.forOwn=fR,A.forOwnRight=dR,A.get=Yd,A.gt=UA,A.gte=DA,A.has=mR,A.hasIn=$d,A.head=K_,A.identity=jn,A.includes=eA,A.indexOf=$T,A.inRange=IR,A.invoke=vR,A.isArguments=Gs,A.isArray=Qe,A.isArrayBuffer=IA,A.isArrayLike=Xn,A.isArrayLikeObject=Kt,A.isBoolean=NA,A.isBuffer=rs,A.isDate=FA,A.isElement=OA,A.isEmpty=zA,A.isEqual=BA,A.isEqualWith=kA,A.isError=qd,A.isFinite=HA,A.isFunction=Mr,A.isInteger=uv,A.isLength=$u,A.isMap=cv,A.isMatch=GA,A.isMatchWith=VA,A.isNaN=WA,A.isNative=XA,A.isNil=jA,A.isNull=qA,A.isNumber=fv,A.isObject=Vt,A.isObjectLike=Yt,A.isPlainObject=al,A.isRegExp=jd,A.isSafeInteger=YA,A.isSet=dv,A.isString=Ku,A.isSymbol=si,A.isTypedArray=zo,A.isUndefined=$A,A.isWeakMap=KA,A.isWeakSet=ZA,A.join=ew,A.kebabCase=kR,A.last=Ci,A.lastIndexOf=tw,A.lowerCase=HR,A.lowerFirst=GR,A.lt=QA,A.lte=JA,A.max=FC,A.maxBy=OC,A.mean=zC,A.meanBy=BC,A.min=kC,A.minBy=HC,A.stubArray=th,A.stubFalse=nh,A.stubObject=AC,A.stubString=RC,A.stubTrue=CC,A.multiply=GC,A.nth=nw,A.noConflict=vC,A.noop=eh,A.now=qu,A.pad=VR,A.padEnd=WR,A.padStart=XR,A.parseInt=qR,A.random=NR,A.reduce=sA,A.reduceRight=oA,A.repeat=jR,A.replace=YR,A.result=wR,A.round=VC,A.runInContext=k,A.sample=lA,A.size=fA,A.snakeCase=$R,A.some=dA,A.sortedIndex=uw,A.sortedIndexBy=cw,A.sortedIndexOf=fw,A.sortedLastIndex=dw,A.sortedLastIndexBy=hw,A.sortedLastIndexOf=pw,A.startCase=ZR,A.startsWith=QR,A.subtract=WC,A.sum=XC,A.sumBy=qC,A.template=JR,A.times=LC,A.toFinite=Er,A.toInteger=nt,A.toLength=pv,A.toLower=eC,A.toNumber=Li,A.toSafeInteger=eR,A.toString=Mt,A.toUpper=tC,A.trim=nC,A.trimEnd=iC,A.trimStart=rC,A.truncate=sC,A.unescape=oC,A.uniqueId=bC,A.upperCase=aC,A.upperFirst=Kd,A.each=ev,A.eachRight=tv,A.first=K_,Jd(A,function(){var r={};return ir(A,function(a,c){Tt.call(A.prototype,c)||(r[c]=a)}),r}(),{chain:!1}),A.VERSION=i,Ei(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),Ei(["drop","take"],function(r,a){ht.prototype[r]=function(c){c=c===n?1:an(nt(c),0);var m=this.__filtered__&&!a?new ht(this):this.clone();return m.__filtered__?m.__takeCount__=An(c,m.__takeCount__):m.__views__.push({size:An(c,V),type:r+(m.__dir__<0?"Right":"")}),m},ht.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),Ei(["filter","map","takeWhile"],function(r,a){var c=a+1,m=c==J||c==fe;ht.prototype[r]=function(M){var R=this.clone();return R.__iteratees__.push({iteratee:Ge(M,3),type:c}),R.__filtered__=R.__filtered__||m,R}}),Ei(["head","last"],function(r,a){var c="take"+(a?"Right":"");ht.prototype[r]=function(){return this[c](1).value()[0]}}),Ei(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");ht.prototype[r]=function(){return this.__filtered__?new ht(this):this[c](1)}}),ht.prototype.compact=function(){return this.filter(jn)},ht.prototype.find=function(r){return this.filter(r).head()},ht.prototype.findLast=function(r){return this.reverse().find(r)},ht.prototype.invokeMap=lt(function(r,a){return typeof r=="function"?new ht(this):this.map(function(c){return tl(c,r,a)})}),ht.prototype.reject=function(r){return this.filter(Yu(Ge(r)))},ht.prototype.slice=function(r,a){r=nt(r);var c=this;return c.__filtered__&&(r>0||a<0)?new ht(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==n&&(a=nt(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},ht.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},ht.prototype.toArray=function(){return this.take(V)},ir(ht.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),m=/^(?:head|last)$/.test(a),M=A[m?"take"+(a=="last"?"Right":""):a],R=m||/^find/.test(a);M&&(A.prototype[a]=function(){var F=this.__wrapped__,O=m?[1]:arguments,G=F instanceof ht,ue=O[0],ce=G||Qe(F),he=function(ft){var gt=M.apply(A,Zr([ft],O));return m&&Ae?gt[0]:gt};ce&&c&&typeof ue=="function"&&ue.length!=1&&(G=ce=!1);var Ae=this.__chain__,Ie=!!this.__actions__.length,Ve=R&&!Ae,rt=G&&!Ie;if(!R&&ce){F=rt?F:new ht(this);var We=r.apply(F,O);return We.__actions__.push({func:Wu,args:[he],thisArg:n}),new wi(We,Ae)}return Ve&&rt?r.apply(this,O):(We=this.thru(he),Ve?m?We.value()[0]:We.value():We)})}),Ei(["pop","push","shift","sort","splice","unshift"],function(r){var a=gu[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",m=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var M=arguments;if(m&&!this.__chain__){var R=this.value();return a.apply(Qe(R)?R:[],M)}return this[c](function(F){return a.apply(Qe(F)?F:[],M)})}}),ir(ht.prototype,function(r,a){var c=A[a];if(c){var m=c.name+"";Tt.call(Do,m)||(Do[m]=[]),Do[m].push({name:a,func:c})}}),Do[Ou(n,h).name]=[{name:"wrapper",func:n}],ht.prototype.clone=o1,ht.prototype.reverse=a1,ht.prototype.value=l1,A.prototype.at=Ow,A.prototype.chain=zw,A.prototype.commit=Bw,A.prototype.next=kw,A.prototype.plant=Gw,A.prototype.reverse=Vw,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=Ww,A.prototype.first=A.prototype.head,Ya&&(A.prototype[Ya]=Hw),A},Po=BE();Is?((Is.exports=Po)._=Po,Qf._=Po):vn._=Po}).call(ll)})(Ef,Ef.exports);var Jx=Ef.exports,Aa=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Aa.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Aa.Bounce.In(t*2)*.5:Aa.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),_a=function(){return performance.now()},YM=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=_a()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var o=this._tweens[i[s]],l=!n;o&&o.update(e,l)===!1&&!n&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),io={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),o=io.Utils.Linear;return e<0?o(t[0],t[1],i):e>1?o(t[n],t[n-1],n-i):o(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,o=io.Utils.Bernstein,l=0;l<=i;l++)n+=s(1-e,i-l)*s(e,l)*t[l]*o(i,l);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),o=io.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),o(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):o(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=io.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,s){var o=(n-t)*.5,l=(i-e)*.5,u=s*s,f=s*u;return(2*e-2*n+o+l)*f+(-3*e+3*n-2*o-l)*u+o*s+e}}},cg=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),am=new YM,IN=function(){function t(e,n){n===void 0&&(n=am),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Aa.Linear.None,this._interpolationFunction=io.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=cg.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=_a()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,s,o){for(var l in i){var u=e[l],f=Array.isArray(u),d=f?"array":typeof u,p=!f&&Array.isArray(i[l]);if(!(d==="undefined"||d==="function")){if(p){var g=i[l];if(g.length===0)continue;for(var _=[u],x=0,E=g.length;x<E;x+=1){var T=this._handleRelativeValue(u,g[x]);if(isNaN(T)){p=!1,console.warn("Found invalid interpolation list. Skipping.");break}_.push(T)}p&&(i[l]=_)}if((d==="object"||f)&&u&&!p){n[l]=f?[]:{};var v=u;for(var h in v)n[l][h]=v[h];s[l]=f?[]:{};var g=i[l];if(!this._isDynamic){var y={};for(var h in g)y[h]=g[h];i[l]=g=y}this._setupProperties(v,n[l],g,s[l],o)}else(typeof n[l]>"u"||o)&&(n[l]=u),f||(n[l]*=1),p?s[l]=i[l].slice().reverse():s[l]=n[l]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=_a()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=_a()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=am),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Aa.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=io.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=_a()),n===void 0&&(n=!0),this._isPaused)return!0;var i,s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var l=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,f=this._chainedTweens.length;u<f;u++)this._chainedTweens[u].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,s){for(var o in i)if(n[o]!==void 0){var l=n[o]||0,u=i[o],f=Array.isArray(e[o]),d=Array.isArray(u),p=!f&&d;p?e[o]=this._interpolationFunction(u,s):typeof u=="object"&&u?this._updateProperties(e[o],l,u,s):(u=this._handleRelativeValue(l,u),typeof u=="number"&&(e[o]=l+(u-l)*s))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),NN="21.0.0",FN=cg.nextId,hr=am,ON=hr.getAll.bind(hr),zN=hr.removeAll.bind(hr),BN=hr.add.bind(hr),kN=hr.remove.bind(hr),HN=hr.update.bind(hr),Qs={Easing:Aa,Group:YM,Interpolation:io,now:_a,Sequence:cg,nextId:FN,Tween:IN,VERSION:NN,getAll:ON,removeAll:zN,add:BN,remove:kN,update:HN};const GN=(t,e)=>{const n=[];for(let i=0;i<t.length-1;i++)for(let s=0;s<=e;s++){const o=s/e,l={x:t[i].position.x*(1-o)+t[i+1].position.x*o,y:t[i].position.y*(1-o)+t[i+1].position.y*o,z:t[i].position.z*(1-o)+t[i+1].position.z*o},u={x:t[i].rotation.x*(1-o)+t[i+1].rotation.x*o,y:t[i].rotation.y*(1-o)+t[i+1].rotation.y*o,z:t[i].rotation.z*(1-o)+t[i+1].rotation.z*o};n.push({position:l,rotation:u})}return n.push(t[t.length-1]),n},VN=c2.memo(()=>{const t=Pt.useRef(null),e=Pt.useRef(null),n=Pt.useRef(null),i=Pt.useRef(null),[s,o,l]=Pt.useMemo(()=>[0,.7,1.25],[]),u=Pt.useMemo(()=>[{position:{x:s,y:o,z:l},rotation:{x:0,y:0,z:0}},{position:{x:1,y:1,z:0},rotation:{x:0,y:2,z:0}},{position:{x:-1,y:1,z:0},rotation:{x:0,y:-2,z:0}},{position:{x:0,y:1,z:-2},rotation:{x:0,y:-3,z:0}}],[s,o,l]),f=10,d=Pt.useMemo(()=>GN(u,f),[u,f]),[p,g]=Pt.useState(0),_=60;let x=0;const E=Pt.useCallback((h=0)=>{const y=h-x,S=1e3/_;y>S&&(x=h-y%S,Qs.update(),i.current.render(e.current,n.current)),requestAnimationFrame(E)},[]),T=Pt.useCallback(Jx.debounce(()=>{n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight)},10),[]),v=Pt.useCallback(Jx.throttle(()=>{const h=window.pageYOffset||document.documentElement.scrollTop;let y=Math.floor(h/(document.body.offsetHeight/d.length));if(y=Math.max(0,y),y=Math.min(d.length-1,y),y!==p){const S={x:n.current.position.x,y:n.current.position.y,z:n.current.position.z},w={x:n.current.rotation.x,y:n.current.rotation.y,z:n.current.rotation.z};new Qs.Tween(S).to(d[y].position,1e3).easing(Qs.Easing.Quadratic.Out).onUpdate(()=>{n.current.position.set(S.x,S.y,S.z)}).start(),new Qs.Tween(w).to(d[y].rotation,1e3).easing(Qs.Easing.Quadratic.Out).onUpdate(()=>{n.current.rotation.set(w.x,w.y,w.z)}).start(),g(y)}},10),[p,d]);return Pt.useEffect(()=>{let h,y,S;h=new CN,y=new Ii(75,window.innerWidth/window.innerHeight,.1,1e3),S=new jM({antialias:!1,precision:"lowp",alpha:!1}),S.setSize(window.innerWidth,window.innerHeight),S.setClearColor(16777215,0),e.current=h,n.current=y,i.current=S,t.current&&t.current.appendChild(S.domElement);const w=new DN;return fetch("https://raw.githubusercontent.com/phbui/phbui.github.io/main/src/assets/gundam.stl").then(I=>I.arrayBuffer()).then(I=>{const D=w.parse(I),H=new og({color:16777215,wireframe:!0,wireframeLinewidth:10}),C=new Br(D,H);C.frustumCulled=!0,C.rotation.x=-Math.PI/2,C.scale.set(.01,.01,.01),e.current.add(C)}).catch(I=>console.error("Error loading STL file:",I)),y.position.x=s,y.position.y=o,y.position.z=l,E(),()=>{t.current&&t.current.removeChild(S.domElement)}},[E,s,o,l]),Pt.useEffect(()=>(window.addEventListener("resize",T),window.addEventListener("scroll",v),()=>{window.removeEventListener("resize",T),window.removeEventListener("scroll",v)}),[T,v]),pe.jsx("div",{ref:t})}),Js=({text:t})=>{const e=Pt.useRef(null),n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return Pt.useEffect(()=>{let i=null;const s=l=>{let u=0;clearInterval(i),i=setInterval(()=>{l.target.innerText=t.split("").map((f,d)=>d<u?f:n[Math.floor(Math.random()*26)]).join(""),u>=t.length&&clearInterval(i),u+=1/3},30)},o=e.current;return o.addEventListener("mouseover",s),()=>{clearInterval(i),o.removeEventListener("mouseover",s)}},[t,n]),pe.jsx("span",{className:"links",ref:e,children:t})},WN=({refs:t})=>{console.log(t);const e=Pt.useCallback(i=>s=>{s.preventDefault();const{current:o}=i;o?window.scrollTo({top:o.offsetTop-window.innerHeight/2+o.offsetHeight*3,behavior:"smooth"}):console.warn("Ref is not attached to an element:",i)},[]),n=[{label:"home",ref:t.homeRef},{label:"projects",ref:t.projectsRef},{label:"about",ref:t.aboutRef},{label:"contact",ref:t.contactRef}];return pe.jsx("div",{className:"accentLine",children:n.map((i,s)=>pe.jsx("pre",{className:"preText",children:pe.jsx("a",{onClick:e(i.ref),className:"navBar",children:pe.jsx(Js,{text:i.label})})},s))})},XN="/assets/Philip Bui - Resume-71fa6588.pdf",eS=({children:t})=>{const[e,n]=Pt.useState(0),i=l=>{l.stopPropagation(),n(u=>(u+1)%t.length)},s=l=>{l.stopPropagation(),n(u=>u===0?t.length-1:u-1)},o=(l,u)=>{l.stopPropagation(),n(u)};return pe.jsxs(pe.Fragment,{children:[pe.jsx("button",{className:"carousel-button prev",onClick:s,children:"❮"}),pe.jsx("div",{className:"carousel-content",children:t.map((l,u)=>pe.jsx("div",{className:`carousel-item ${u===e?"active":""}`,children:l},u))}),pe.jsx("button",{className:"carousel-button next",onClick:i,children:"❯"}),pe.jsx("div",{className:"carousel-indicators",children:t.map((l,u)=>pe.jsx("span",{className:`indicator ${u===e?"active":""}`,onClick:f=>o(f,u)},u))})]})},tS=({img:t,title:e,link:n,text:i,download:s})=>pe.jsxs("div",{className:"projectItem",children:[pe.jsx("a",{href:n,download:s,children:pe.jsx("img",{className:"projectIMG",src:t})}),pe.jsxs("div",{className:"projectTextHolder",children:[pe.jsx("pre",{className:"preText projectText",children:pe.jsx("a",{href:n,download:s,children:pe.jsx(Js,{text:e})})}),pe.jsx("pre",{className:"preText projectText",children:i})]})]}),nS="/assets/chatgpt-1d833fe7.jpg",iS="/assets/wpi-47d99374.jpg",qN="/assets/mgbwh-ab0eb310.jpg",jN="/assets/main-era-3b5e4cc4.jpg",YN="/assets/untitled-1a018dab.jpg",$N="/assets/tarot-b4411c73.jpg",lm="/assets/tufts-ab11cf4d.jpg",KN=[{img:nS,title:"AI Architecture for Storytelling",link:"https://www.are.na/block/33237601",text:"An AI-driven architecture for immersive storytelling, integrating procedural generation, large language models, and player behavior modeling."},{img:lm,title:"Sphero Swarm Framework",link:"https://www.are.na/block/33345533",text:"A framework for Sphero swarm navigation using probabilistic methods and computer vision, developed for Tufts' human-robot interaction research."},{img:iS,title:"Worcester PermitPro",link:"https://www.are.na/block/26865313",text:"A blockchain-based smart contract system that aims to streamline low-income housing development in Worcester for WPI's Major Qualifying Project Program."},{img:lm,title:"Robot System Controls Study",link:"https://www.are.na/block/33345530",text:"Explored human preferences in manual vs autonomous control of Sphero robots, emphasizing trust and adaptability in navigation systems."},{img:nS,title:"ChatGPT, How Do I Design?",link:"https://www.are.na/block/26865380",text:"This paper advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethics."},{img:iS,title:"NitroCycle",link:"https://github.com/IQP-NCPOGD/nitrocycle",text:"An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's Interactive Qualifying Project program."},{img:qN,title:"Medical Service Request System",link:"https://github.com/phbui/BWH-Medical-Service-Request-System",text:"A medical service request system (MSRS) made for Brigham and Women's Hospital (BWH) during WPI's Software Engineering course."}],ZN=[{img:YN,title:"Untitled",link:"https://untitled.boston/",text:"A website I made for a start-up entertainment consultancy, Untitled LLC in Boston, MA."},{img:$N,title:"Tarot Cards",link:"https://objectivephi.github.io/",text:"A little tarot card reader I made on my downtime at work."},{img:jN,title:"Main Era",link:"https://main-era.github.io/",text:"A website I made for a Boston-based, indie punk band."},{img:lm,title:"Haven",link:"https://www.are.na/block/26865372",text:"A live map for anonymous incident reporting and resource location designed for Tufts' Spring 2024 Producthon."}],QN=()=>pe.jsxs("div",{className:"projects-container",children:[pe.jsxs("div",{className:"section academic-section",children:[pe.jsx("pre",{className:"section-title",children:"Academic"}),pe.jsx("div",{className:"carousel-container",children:pe.jsx(eS,{children:KN.map((t,e)=>pe.jsx(tS,{img:t.img,title:t.title,link:t.link,text:t.text},e))})})]}),pe.jsxs("div",{className:"section miscellaneous-section",children:[pe.jsx("pre",{className:"section-title",children:"Miscellaneous"}),pe.jsx("div",{className:"carousel-container",children:pe.jsx(eS,{children:ZN.map((t,e)=>pe.jsx(tS,{img:t.img,title:t.title,link:t.link,text:t.text},e))})})]})]}),JN=()=>{const t=Pt.useRef(null),e=Pt.useRef(null),n=Pt.useRef(null),i=Pt.useRef(null),[s,o]=Pt.useState(!1);return Pt.useEffect(()=>{t.current&&e.current&&n.current&&i.current&&o(!0)},[t,e,n,i]),pe.jsxs("div",{className:"mainContainer",children:[pe.jsx("div",{className:"background"}),s&&pe.jsx(WN,{refs:{homeRef:t,projectsRef:e,aboutRef:n,contactRef:i}}),pe.jsx("div",{className:"canvasHolder",children:pe.jsx(VN,{})}),pe.jsxs("div",{className:"accentHolder",children:[pe.jsx("div",{className:"topLeft",children:pe.jsx("p",{className:"accentText verticalText",children:"+---|=============-"})}),pe.jsx("div",{className:"topLeft",children:pe.jsx("p",{className:"accentText",children:"+---|=============-"})}),pe.jsx("div",{className:"bottomRight rightSword",children:pe.jsx("p",{className:"accentText verticalText",children:"-=============|---+"})}),pe.jsx("div",{className:"bottomRight",children:pe.jsx("p",{className:"accentText",children:"-=============|---+"})})]}),pe.jsxs("div",{ref:t,className:"textBox",style:{margin:"0 25vw 10vh 0"},children:[pe.jsx("pre",{children:"Hello, my name is Phi (Φ),"}),pe.jsx("pre",{children:"I am interested in the intersection"}),pe.jsx("pre",{children:"between humans and technology."})]}),pe.jsx("div",{ref:e,className:"textBox",style:{margin:"0 15vw -25vh 0"},children:pe.jsx("pre",{children:"Check out some of my work:"})}),pe.jsx(QN,{}),pe.jsx("div",{ref:n,className:"textBox",style:{margin:"5vh 30vw 10vh 0"},children:pe.jsx("pre",{children:"Some stuff about me:"})}),pe.jsxs("div",{className:"textBox",style:{margin:"0 -12.5vw 10vh 0"},children:[pe.jsx("pre",{children:"const About = (phi_bui) => {"}),pe.jsxs("pre",{children:["  const resume = fetch('",pe.jsx("a",{href:XN,download:"Philip Bui - Resume.pdf",children:pe.jsx(Js,{text:"resume.pdf"})}),"');"]}),pe.jsx("pre",{children:"  let undergrad = 'B.S. in CS @ WPI';"}),pe.jsx("pre",{children:"  let grad = 'M.S. in HRI @ Tufts';"}),pe.jsx("br",{}),pe.jsxs("pre",{children:[" ","  const ",pe.jsx("span",{style:{textDecoration:"underline"},children:"industry_experience"})," = () => {"]}),pe.jsxs("pre",{children:[" ","    return ["]}),pe.jsxs("pre",{children:[" ","      {Amazon: 'Operations Intern'},"]}),pe.jsxs("pre",{children:[" ","      {ProsperOn: 'Website Developer'},"]}),pe.jsxs("pre",{children:[" ","      {enLabel: 'Full-Stack Software Engineer'}"]}),pe.jsxs("pre",{children:[" ","    ];"]}),pe.jsx("br",{}),pe.jsxs("pre",{children:[" ","  const ",pe.jsx("span",{style:{textDecoration:"underline"},children:"research_experience"})," = () => {"]}),pe.jsxs("pre",{children:[" ","    return ["]}),pe.jsxs("pre",{children:[" ","      {Tufts: 'Human Interaction Lab'},"]}),pe.jsxs("pre",{children:[" ","    ];"]}),pe.jsxs("pre",{children:[" ","  };"]}),pe.jsx("pre",{children:"}"})]}),pe.jsx("div",{ref:i,className:"textBox",style:{margin:"0 32.5vw 10vh 0"},children:pe.jsx("pre",{children:"Get in contact with me:"})}),pe.jsxs("div",{className:"textBox",children:[pe.jsxs("pre",{children:["const Contact = {            "," "]}),pe.jsxs("pre",{children:["  {email: ",pe.jsx("a",{href:"mailto:bilphui@gmail.com",children:pe.jsx(Js,{text:"bilphui@gmail.com"})}),"},"]}),pe.jsxs("pre",{children:["  {linkedin: ",pe.jsx("a",{href:"https://www.linkedin.com/in/phi-bui/",children:pe.jsx(Js,{text:"phi-bui"})}),"},"]}),pe.jsxs("pre",{children:["  {github: ",pe.jsx("a",{href:"https://github.com/phbui",children:pe.jsx(Js,{text:"phbui"})}),"},"]}),pe.jsxs("pre",{children:["  {instagram: ",pe.jsx("a",{href:"https://www.instagram.com/objectivephi/",children:pe.jsx(Js,{text:"@objectivephi"})}),"}"]}),pe.jsx("pre",{children:"}"})]})]})};sp.createRoot(document.getElementById("root")).render(pe.jsx(JN,{}))});export default eF();
