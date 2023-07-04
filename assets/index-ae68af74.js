var VC=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var HN=VC(Js=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jx={exports:{}},Tf={},eS={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),WC=Symbol.for("react.portal"),XC=Symbol.for("react.fragment"),qC=Symbol.for("react.strict_mode"),YC=Symbol.for("react.profiler"),jC=Symbol.for("react.provider"),$C=Symbol.for("react.context"),KC=Symbol.for("react.forward_ref"),ZC=Symbol.for("react.suspense"),QC=Symbol.for("react.memo"),JC=Symbol.for("react.lazy"),Av=Symbol.iterator;function e2(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var tS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nS=Object.assign,iS={};function za(t,e,n){this.props=t,this.context=e,this.refs=iS,this.updater=n||tS}za.prototype.isReactComponent={};za.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rS(){}rS.prototype=za.prototype;function lm(t,e,n){this.props=t,this.context=e,this.refs=iS,this.updater=n||tS}var um=lm.prototype=new rS;um.constructor=lm;nS(um,za.prototype);um.isPureReactComponent=!0;var Rv=Array.isArray,sS=Object.prototype.hasOwnProperty,cm={current:null},oS={key:!0,ref:!0,__self:!0,__source:!0};function aS(t,e,n){var i,s={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)sS.call(e,i)&&!oS.hasOwnProperty(i)&&(s[i]=e[i]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];s.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)s[i]===void 0&&(s[i]=u[i]);return{$$typeof:tu,type:t,key:o,ref:l,props:s,_owner:cm.current}}function t2(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fm(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function n2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cv=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n2(""+t.key):e.toString(36)}function Oc(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case tu:case WC:l=!0}}if(l)return l=t,s=s(l),t=i===""?"."+ih(l,0):i,Rv(s)?(n="",t!=null&&(n=t.replace(Cv,"$&/")+"/"),Oc(s,e,n,"",function(d){return d})):s!=null&&(fm(s)&&(s=t2(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Cv,"$&/")+"/")+t)),e.push(s)),1;if(l=0,i=i===""?".":i+":",Rv(t))for(var u=0;u<t.length;u++){o=t[u];var f=i+ih(o,u);l+=Oc(o,e,n,f,s)}else if(f=e2(t),typeof f=="function")for(t=f.call(t),u=0;!(o=t.next()).done;)o=o.value,f=i+ih(o,u++),l+=Oc(o,e,n,f,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Qu(t,e,n){if(t==null)return t;var i=[],s=0;return Oc(t,i,"","",function(o){return e.call(n,o,s++)}),i}function i2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Hn={current:null},zc={transition:null},r2={ReactCurrentDispatcher:Hn,ReactCurrentBatchConfig:zc,ReactCurrentOwner:cm};pt.Children={map:Qu,forEach:function(t,e,n){Qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qu(t,function(){e++}),e},toArray:function(t){return Qu(t,function(e){return e})||[]},only:function(t){if(!fm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=za;pt.Fragment=XC;pt.Profiler=YC;pt.PureComponent=lm;pt.StrictMode=qC;pt.Suspense=ZC;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r2;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=nS({},t.props),s=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=cm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)sS.call(e,f)&&!oS.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:tu,type:t.type,key:s,ref:o,props:i,_owner:l}};pt.createContext=function(t){return t={$$typeof:$C,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jC,_context:t},t.Consumer=t};pt.createElement=aS;pt.createFactory=function(t){var e=aS.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:KC,render:t}};pt.isValidElement=fm;pt.lazy=function(t){return{$$typeof:JC,_payload:{_status:-1,_result:t},_init:i2}};pt.memo=function(t,e){return{$$typeof:QC,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=zc.transition;zc.transition={};try{t()}finally{zc.transition=e}};pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pt.useCallback=function(t,e){return Hn.current.useCallback(t,e)};pt.useContext=function(t){return Hn.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return Hn.current.useDeferredValue(t)};pt.useEffect=function(t,e){return Hn.current.useEffect(t,e)};pt.useId=function(){return Hn.current.useId()};pt.useImperativeHandle=function(t,e,n){return Hn.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return Hn.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return Hn.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return Hn.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return Hn.current.useReducer(t,e,n)};pt.useRef=function(t){return Hn.current.useRef(t)};pt.useState=function(t){return Hn.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return Hn.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return Hn.current.useTransition()};pt.version="18.2.0";eS.exports=pt;var Vt=eS.exports;const lS=Qx(Vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s2=Vt,o2=Symbol.for("react.element"),a2=Symbol.for("react.fragment"),l2=Object.prototype.hasOwnProperty,u2=s2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c2={key:!0,ref:!0,__self:!0,__source:!0};function uS(t,e,n){var i,s={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)l2.call(e,i)&&!c2.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:o2,type:t,key:o,ref:l,props:s,_owner:u2.current}}Tf.Fragment=a2;Tf.jsx=uS;Tf.jsxs=uS;Jx.exports=Tf;var Ae=Jx.exports,cS={exports:{}},vi={},fS={exports:{}},dS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,te){var j=B.length;B.push(te);e:for(;0<j;){var V=j-1>>>1,$=B[V];if(0<s($,te))B[V]=te,B[j]=$,j=V;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var te=B[0],j=B.pop();if(j!==te){B[0]=j;e:for(var V=0,$=B.length,Se=$>>>1;V<Se;){var ve=2*(V+1)-1,ye=B[ve],De=ve+1,qe=B[De];if(0>s(ye,j))De<$&&0>s(qe,ye)?(B[V]=qe,B[De]=j,V=De):(B[V]=ye,B[ve]=j,V=ve);else if(De<$&&0>s(qe,j))B[V]=qe,B[De]=j,V=De;else break e}}return te}function s(B,te){var j=B.sortIndex-te.sortIndex;return j!==0?j:B.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],p=1,g=null,_=3,x=!1,E=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var te=n(d);te!==null;){if(te.callback===null)i(d);else if(te.startTime<=B)i(d),te.sortIndex=te.expirationTime,e(f,te);else break;te=n(d)}}function w(B){if(T=!1,S(B),!E)if(n(f)!==null)E=!0,fe(P);else{var te=n(d);te!==null&&ee(w,te.startTime-B)}}function P(B,te){E=!1,T&&(T=!1,h(H),H=-1),x=!0;var j=_;try{for(S(te),g=n(f);g!==null&&(!(g.expirationTime>te)||B&&!oe());){var V=g.callback;if(typeof V=="function"){g.callback=null,_=g.priorityLevel;var $=V(g.expirationTime<=te);te=t.unstable_now(),typeof $=="function"?g.callback=$:g===n(f)&&i(f),S(te)}else i(f);g=n(f)}if(g!==null)var Se=!0;else{var ve=n(d);ve!==null&&ee(w,ve.startTime-te),Se=!1}return Se}finally{g=null,_=j,x=!1}}var N=!1,D=null,H=-1,C=5,U=-1;function oe(){return!(t.unstable_now()-U<C)}function de(){if(D!==null){var B=t.unstable_now();U=B;var te=!0;try{te=D(!0,B)}finally{te?Y():(N=!1,D=null)}}else N=!1}var Y;if(typeof y=="function")Y=function(){y(de)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ie=J.port2;J.port1.onmessage=de,Y=function(){ie.postMessage(null)}}else Y=function(){v(de,0)};function fe(B){D=B,N||(N=!0,Y())}function ee(B,te){H=v(function(){B(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){E||x||(E=!0,fe(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var j=_;_=te;try{return B()}finally{_=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,te){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=_;_=B;try{return te()}finally{_=j}},t.unstable_scheduleCallback=function(B,te,j){var V=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?V+j:V):j=V,B){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=j+$,B={id:p++,callback:te,priorityLevel:B,startTime:j,expirationTime:$,sortIndex:-1},j>V?(B.sortIndex=j,e(d,B),n(f)===null&&B===n(d)&&(T?(h(H),H=-1):T=!0,ee(w,j-V))):(B.sortIndex=$,e(f,B),E||x||(E=!0,fe(P))),B},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(B){var te=_;return function(){var j=_;_=te;try{return B.apply(this,arguments)}finally{_=j}}}})(dS);fS.exports=dS;var f2=fS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hS=Vt,_i=f2;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pS=new Set,Fl={};function vo(t,e){Ra(t,e),Ra(t+"Capture",e)}function Ra(t,e){for(Fl[t]=e,t=0;t<e.length;t++)pS.add(e[t])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=Object.prototype.hasOwnProperty,d2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lv={},Pv={};function h2(t){return op.call(Pv,t)?!0:op.call(Lv,t)?!1:d2.test(t)?Pv[t]=!0:(Lv[t]=!0,!1)}function p2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m2(t,e,n,i){if(e===null||typeof e>"u"||p2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gn(t,e,n,i,s,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new Gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new Gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new Gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new Gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new Gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new Gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new Gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new Gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new Gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dm=/[\-:]([a-z])/g;function hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dm,hm);Tn[e]=new Gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dm,hm);Tn[e]=new Gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dm,hm);Tn[e]=new Gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pm(t,e,n,i){var s=Tn.hasOwnProperty(e)?Tn[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m2(e,n,s,i)&&(n=null),i||s===null?h2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $r=hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),ra=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),mS=Symbol.for("react.provider"),gS=Symbol.for("react.context"),gm=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),_m=Symbol.for("react.memo"),fs=Symbol.for("react.lazy"),_S=Symbol.for("react.offscreen"),bv=Symbol.iterator;function ul(t){return t===null||typeof t!="object"?null:(t=bv&&t[bv]||t["@@iterator"],typeof t=="function"?t:null)}var qt=Object.assign,rh;function yl(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var sh=!1;function oh(t,e){if(!t||sh)return"";sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),l=s.length-1,u=o.length-1;1<=l&&0<=u&&s[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==o[u]){var f=`
`+s[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yl(t):""}function g2(t){switch(t.tag){case 5:return yl(t.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return t=oh(t.type,!1),t;case 11:return t=oh(t.type.render,!1),t;case 1:return t=oh(t.type,!0),t;default:return""}}function cp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sa:return"Fragment";case ra:return"Portal";case ap:return"Profiler";case mm:return"StrictMode";case lp:return"Suspense";case up:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gS:return(t.displayName||"Context")+".Consumer";case mS:return(t._context.displayName||"Context")+".Provider";case gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _m:return e=t.displayName||null,e!==null?e:cp(t.type)||"Memo";case fs:e=t._payload,t=t._init;try{return cp(t(e))}catch{}}return null}function _2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cp(e);case 8:return e===mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ls(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v2(t){var e=vS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=v2(t))}function xS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fp(t,e){var n=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ls(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function SS(t,e){e=e.checked,e!=null&&pm(t,"checked",e,!1)}function dp(t,e){SS(t,e);var n=Ls(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hp(t,e.type,n):e.hasOwnProperty("defaultValue")&&hp(t,e.type,Ls(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hp(t,e,n){(e!=="number"||Kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ml=Array.isArray;function va(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ls(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function pp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Iv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Ml(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ls(n)}}function yS(t,e){var n=Ls(e.value),i=Ls(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function MS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?MS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,ES=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x2=["Webkit","ms","Moz","O"];Object.keys(Al).forEach(function(t){x2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Al[e]=Al[t]})});function TS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Al.hasOwnProperty(t)&&Al[t]?(""+e).trim():e+"px"}function wS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=TS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var S2=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gp(t,e){if(e){if(S2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function _p(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=null;function vm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xp=null,xa=null,Sa=null;function Fv(t){if(t=ru(t)){if(typeof xp!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=Lf(e),xp(t.stateNode,t.type,e))}}function AS(t){xa?Sa?Sa.push(t):Sa=[t]:xa=t}function RS(){if(xa){var t=xa,e=Sa;if(Sa=xa=null,Fv(t),e)for(t=0;t<e.length;t++)Fv(e[t])}}function CS(t,e){return t(e)}function LS(){}var ah=!1;function PS(t,e,n){if(ah)return t(e,n);ah=!0;try{return CS(t,e,n)}finally{ah=!1,(xa!==null||Sa!==null)&&(LS(),RS())}}function zl(t,e){var n=t.stateNode;if(n===null)return null;var i=Lf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Sp=!1;if(Wr)try{var cl={};Object.defineProperty(cl,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{Sp=!1}function y2(t,e,n,i,s,o,l,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Rl=!1,Zc=null,Qc=!1,yp=null,M2={onError:function(t){Rl=!0,Zc=t}};function E2(t,e,n,i,s,o,l,u,f){Rl=!1,Zc=null,y2.apply(M2,arguments)}function T2(t,e,n,i,s,o,l,u,f){if(E2.apply(this,arguments),Rl){if(Rl){var d=Zc;Rl=!1,Zc=null}else throw Error(pe(198));Qc||(Qc=!0,yp=d)}}function xo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ov(t){if(xo(t)!==t)throw Error(pe(188))}function w2(t){var e=t.alternate;if(!e){if(e=xo(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Ov(s),t;if(o===i)return Ov(s),e;o=o.sibling}throw Error(pe(188))}if(n.return!==i.return)n=s,i=o;else{for(var l=!1,u=s.child;u;){if(u===n){l=!0,n=s,i=o;break}if(u===i){l=!0,i=s,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,i=s;break}if(u===i){l=!0,i=o,n=s;break}u=u.sibling}if(!l)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function US(t){return t=w2(t),t!==null?DS(t):null}function DS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=DS(t);if(e!==null)return e;t=t.sibling}return null}var IS=_i.unstable_scheduleCallback,zv=_i.unstable_cancelCallback,A2=_i.unstable_shouldYield,R2=_i.unstable_requestPaint,Qt=_i.unstable_now,C2=_i.unstable_getCurrentPriorityLevel,xm=_i.unstable_ImmediatePriority,NS=_i.unstable_UserBlockingPriority,Jc=_i.unstable_NormalPriority,L2=_i.unstable_LowPriority,FS=_i.unstable_IdlePriority,wf=null,cr=null;function P2(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(wf,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:D2,b2=Math.log,U2=Math.LN2;function D2(t){return t>>>=0,t===0?32:31-(b2(t)/U2|0)|0}var nc=64,ic=4194304;function El(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ef(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~s;u!==0?i=El(u):(o&=l,o!==0&&(i=El(o)))}else l=n&~s,l!==0?i=El(l):o!==0&&(i=El(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-er(e),s=1<<n,i|=t[n],e&=~s;return i}function I2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-er(o),u=1<<l,f=s[l];f===-1?(!(u&n)||u&i)&&(s[l]=I2(u,e)):f<=e&&(t.expiredLanes|=u),o&=~u}}function Mp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function OS(){var t=nc;return nc<<=1,!(nc&4194240)&&(nc=64),t}function lh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function F2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-er(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function Sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-er(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var wt=0;function zS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var BS,ym,kS,HS,GS,Ep=!1,rc=[],xs=null,Ss=null,ys=null,Bl=new Map,kl=new Map,hs=[],O2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bv(t,e){switch(t){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function fl(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=ru(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function z2(t,e,n,i,s){switch(e){case"focusin":return xs=fl(xs,t,e,n,i,s),!0;case"dragenter":return Ss=fl(Ss,t,e,n,i,s),!0;case"mouseover":return ys=fl(ys,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return Bl.set(o,fl(Bl.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,kl.set(o,fl(kl.get(o)||null,t,e,n,i,s)),!0}return!1}function VS(t){var e=eo(t.target);if(e!==null){var n=xo(e);if(n!==null){if(e=n.tag,e===13){if(e=bS(n),e!==null){t.blockedOn=e,GS(t.priority,function(){kS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vp=i,n.target.dispatchEvent(i),vp=null}else return e=ru(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function kv(t,e,n){Bc(t)&&n.delete(e)}function B2(){Ep=!1,xs!==null&&Bc(xs)&&(xs=null),Ss!==null&&Bc(Ss)&&(Ss=null),ys!==null&&Bc(ys)&&(ys=null),Bl.forEach(kv),kl.forEach(kv)}function dl(t,e){t.blockedOn===e&&(t.blockedOn=null,Ep||(Ep=!0,_i.unstable_scheduleCallback(_i.unstable_NormalPriority,B2)))}function Hl(t){function e(s){return dl(s,t)}if(0<rc.length){dl(rc[0],t);for(var n=1;n<rc.length;n++){var i=rc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xs!==null&&dl(xs,t),Ss!==null&&dl(Ss,t),ys!==null&&dl(ys,t),Bl.forEach(e),kl.forEach(e),n=0;n<hs.length;n++)i=hs[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hs.length&&(n=hs[0],n.blockedOn===null);)VS(n),n.blockedOn===null&&hs.shift()}var ya=$r.ReactCurrentBatchConfig,tf=!0;function k2(t,e,n,i){var s=wt,o=ya.transition;ya.transition=null;try{wt=1,Mm(t,e,n,i)}finally{wt=s,ya.transition=o}}function H2(t,e,n,i){var s=wt,o=ya.transition;ya.transition=null;try{wt=4,Mm(t,e,n,i)}finally{wt=s,ya.transition=o}}function Mm(t,e,n,i){if(tf){var s=Tp(t,e,n,i);if(s===null)vh(t,e,i,nf,n),Bv(t,i);else if(z2(s,t,e,n,i))i.stopPropagation();else if(Bv(t,i),e&4&&-1<O2.indexOf(t)){for(;s!==null;){var o=ru(s);if(o!==null&&BS(o),o=Tp(t,e,n,i),o===null&&vh(t,e,i,nf,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else vh(t,e,i,null,n)}}var nf=null;function Tp(t,e,n,i){if(nf=null,t=vm(i),t=eo(t),t!==null)if(e=xo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nf=t,null}function WS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C2()){case xm:return 1;case NS:return 4;case Jc:case L2:return 16;case FS:return 536870912;default:return 16}default:return 16}}var ms=null,Em=null,kc=null;function XS(){if(kc)return kc;var t,e=Em,n=e.length,i,s="value"in ms?ms.value:ms.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===s[o-i];i++);return kc=s.slice(t,1<i?1-i:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function Hv(){return!1}function xi(t){function e(n,i,s,o,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sc:Hv,this.isPropagationStopped=Hv,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tm=xi(Ba),iu=qt({},Ba,{view:0,detail:0}),G2=xi(iu),uh,ch,hl,Af=qt({},iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?(uh=t.screenX-hl.screenX,ch=t.screenY-hl.screenY):ch=uh=0,hl=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:ch}}),Gv=xi(Af),V2=qt({},Af,{dataTransfer:0}),W2=xi(V2),X2=qt({},iu,{relatedTarget:0}),fh=xi(X2),q2=qt({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Y2=xi(q2),j2=qt({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$2=xi(j2),K2=qt({},Ba,{data:0}),Vv=xi(K2),Z2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eL(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J2[t])?!!e[t]:!1}function wm(){return eL}var tL=qt({},iu,{key:function(t){if(t.key){var e=Z2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wm,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nL=xi(tL),iL=qt({},Af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wv=xi(iL),rL=qt({},iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wm}),sL=xi(rL),oL=qt({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),aL=xi(oL),lL=qt({},Af,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uL=xi(lL),cL=[9,13,27,32],Am=Wr&&"CompositionEvent"in window,Cl=null;Wr&&"documentMode"in document&&(Cl=document.documentMode);var fL=Wr&&"TextEvent"in window&&!Cl,qS=Wr&&(!Am||Cl&&8<Cl&&11>=Cl),Xv=String.fromCharCode(32),qv=!1;function YS(t,e){switch(t){case"keyup":return cL.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oa=!1;function dL(t,e){switch(t){case"compositionend":return jS(e);case"keypress":return e.which!==32?null:(qv=!0,Xv);case"textInput":return t=e.data,t===Xv&&qv?null:t;default:return null}}function hL(t,e){if(oa)return t==="compositionend"||!Am&&YS(t,e)?(t=XS(),kc=Em=ms=null,oa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qS&&e.locale!=="ko"?null:e.data;default:return null}}var pL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pL[t.type]:e==="textarea"}function $S(t,e,n,i){AS(i),e=rf(e,"onChange"),0<e.length&&(n=new Tm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ll=null,Gl=null;function mL(t){oy(t,0)}function Rf(t){var e=ua(t);if(xS(e))return t}function gL(t,e){if(t==="change")return e}var KS=!1;if(Wr){var dh;if(Wr){var hh="oninput"in document;if(!hh){var jv=document.createElement("div");jv.setAttribute("oninput","return;"),hh=typeof jv.oninput=="function"}dh=hh}else dh=!1;KS=dh&&(!document.documentMode||9<document.documentMode)}function $v(){Ll&&(Ll.detachEvent("onpropertychange",ZS),Gl=Ll=null)}function ZS(t){if(t.propertyName==="value"&&Rf(Gl)){var e=[];$S(e,Gl,t,vm(t)),PS(mL,e)}}function _L(t,e,n){t==="focusin"?($v(),Ll=e,Gl=n,Ll.attachEvent("onpropertychange",ZS)):t==="focusout"&&$v()}function vL(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rf(Gl)}function xL(t,e){if(t==="click")return Rf(e)}function SL(t,e){if(t==="input"||t==="change")return Rf(e)}function yL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:yL;function Vl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!op.call(e,s)||!nr(t[s],e[s]))return!1}return!0}function Kv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zv(t,e){var n=Kv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kv(n)}}function QS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?QS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function JS(){for(var t=window,e=Kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kc(t.document)}return e}function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ML(t){var e=JS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&QS(n.ownerDocument.documentElement,n)){if(i!==null&&Rm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=Zv(n,o);var l=Zv(n,i);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EL=Wr&&"documentMode"in document&&11>=document.documentMode,aa=null,wp=null,Pl=null,Ap=!1;function Qv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ap||aa==null||aa!==Kc(i)||(i=aa,"selectionStart"in i&&Rm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pl&&Vl(Pl,i)||(Pl=i,i=rf(wp,"onSelect"),0<i.length&&(e=new Tm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=aa)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var la={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},ph={},ey={};Wr&&(ey=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Cf(t){if(ph[t])return ph[t];if(!la[t])return t;var e=la[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ey)return ph[t]=e[n];return t}var ty=Cf("animationend"),ny=Cf("animationiteration"),iy=Cf("animationstart"),ry=Cf("transitionend"),sy=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Us(t,e){sy.set(t,e),vo(e,[t])}for(var mh=0;mh<Jv.length;mh++){var gh=Jv[mh],TL=gh.toLowerCase(),wL=gh[0].toUpperCase()+gh.slice(1);Us(TL,"on"+wL)}Us(ty,"onAnimationEnd");Us(ny,"onAnimationIteration");Us(iy,"onAnimationStart");Us("dblclick","onDoubleClick");Us("focusin","onFocus");Us("focusout","onBlur");Us(ry,"onTransitionEnd");Ra("onMouseEnter",["mouseout","mouseover"]);Ra("onMouseLeave",["mouseout","mouseover"]);Ra("onPointerEnter",["pointerout","pointerover"]);Ra("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AL=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tl));function e0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,T2(i,e,void 0,t),t.currentTarget=null}function oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==o&&s.isPropagationStopped())break e;e0(s,u,d),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==o&&s.isPropagationStopped())break e;e0(s,u,d),o=f}}}if(Qc)throw t=yp,Qc=!1,yp=null,t}function It(t,e){var n=e[bp];n===void 0&&(n=e[bp]=new Set);var i=t+"__bubble";n.has(i)||(ay(e,t,2,!1),n.add(i))}function _h(t,e,n){var i=0;e&&(i|=4),ay(n,t,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Wl(t){if(!t[ac]){t[ac]=!0,pS.forEach(function(n){n!=="selectionchange"&&(AL.has(n)||_h(n,!1,t),_h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,_h("selectionchange",!1,e))}}function ay(t,e,n,i){switch(WS(e)){case 1:var s=k2;break;case 4:s=H2;break;default:s=Mm}n=s.bind(null,e,n,t),s=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function vh(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;l=l.return}for(;u!==null;){if(l=eo(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}PS(function(){var d=o,p=vm(n),g=[];e:{var _=sy.get(t);if(_!==void 0){var x=Tm,E=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":x=nL;break;case"focusin":E="focus",x=fh;break;case"focusout":E="blur",x=fh;break;case"beforeblur":case"afterblur":x=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=sL;break;case ty:case ny:case iy:x=Y2;break;case ry:x=aL;break;case"scroll":x=G2;break;case"wheel":x=uL;break;case"copy":case"cut":case"paste":x=$2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wv}var T=(e&4)!==0,v=!T&&t==="scroll",h=T?_!==null?_+"Capture":null:_;T=[];for(var y=d,S;y!==null;){S=y;var w=S.stateNode;if(S.tag===5&&w!==null&&(S=w,h!==null&&(w=zl(y,h),w!=null&&T.push(Xl(y,w,S)))),v)break;y=y.return}0<T.length&&(_=new x(_,E,null,n,p),g.push({event:_,listeners:T}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==vp&&(E=n.relatedTarget||n.fromElement)&&(eo(E)||E[Xr]))break e;if((x||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=d,E=E?eo(E):null,E!==null&&(v=xo(E),E!==v||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=d),x!==E)){if(T=Gv,w="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(T=Wv,w="onPointerLeave",h="onPointerEnter",y="pointer"),v=x==null?_:ua(x),S=E==null?_:ua(E),_=new T(w,y+"leave",x,n,p),_.target=v,_.relatedTarget=S,w=null,eo(p)===d&&(T=new T(h,y+"enter",E,n,p),T.target=S,T.relatedTarget=v,w=T),v=w,x&&E)t:{for(T=x,h=E,y=0,S=T;S;S=ko(S))y++;for(S=0,w=h;w;w=ko(w))S++;for(;0<y-S;)T=ko(T),y--;for(;0<S-y;)h=ko(h),S--;for(;y--;){if(T===h||h!==null&&T===h.alternate)break t;T=ko(T),h=ko(h)}T=null}else T=null;x!==null&&t0(g,_,x,T,!1),E!==null&&v!==null&&t0(g,v,E,T,!0)}}e:{if(_=d?ua(d):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var P=gL;else if(Yv(_))if(KS)P=SL;else{P=vL;var N=_L}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(P=xL);if(P&&(P=P(t,d))){$S(g,P,n,p);break e}N&&N(t,_,d),t==="focusout"&&(N=_._wrapperState)&&N.controlled&&_.type==="number"&&hp(_,"number",_.value)}switch(N=d?ua(d):window,t){case"focusin":(Yv(N)||N.contentEditable==="true")&&(aa=N,wp=d,Pl=null);break;case"focusout":Pl=wp=aa=null;break;case"mousedown":Ap=!0;break;case"contextmenu":case"mouseup":case"dragend":Ap=!1,Qv(g,n,p);break;case"selectionchange":if(EL)break;case"keydown":case"keyup":Qv(g,n,p)}var D;if(Am)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else oa?YS(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(qS&&n.locale!=="ko"&&(oa||H!=="onCompositionStart"?H==="onCompositionEnd"&&oa&&(D=XS()):(ms=p,Em="value"in ms?ms.value:ms.textContent,oa=!0)),N=rf(d,H),0<N.length&&(H=new Vv(H,t,null,n,p),g.push({event:H,listeners:N}),D?H.data=D:(D=jS(n),D!==null&&(H.data=D)))),(D=fL?dL(t,n):hL(t,n))&&(d=rf(d,"onBeforeInput"),0<d.length&&(p=new Vv("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=D))}oy(g,e)})}function Xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rf(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=zl(t,n),o!=null&&i.unshift(Xl(t,o,s)),o=zl(t,e),o!=null&&i.push(Xl(t,o,s))),t=t.return}return i}function ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t0(t,e,n,i,s){for(var o=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&d!==null&&(u=d,s?(f=zl(n,o),f!=null&&l.unshift(Xl(n,f,u))):s||(f=zl(n,o),f!=null&&l.push(Xl(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var RL=/\r\n?/g,CL=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(RL,`
`).replace(CL,"")}function lc(t,e,n){if(e=n0(e),n0(t)!==e&&n)throw Error(pe(425))}function sf(){}var Rp=null,Cp=null;function Lp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,LL=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,PL=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(bL)}:Pp;function bL(t){setTimeout(function(){throw t})}function xh(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Hl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Hl(e)}function Ms(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),ur="__reactFiber$"+ka,ql="__reactProps$"+ka,Xr="__reactContainer$"+ka,bp="__reactEvents$"+ka,UL="__reactListeners$"+ka,DL="__reactHandles$"+ka;function eo(t){var e=t[ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xr]||n[ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r0(t);t!==null;){if(n=t[ur])return n;t=r0(t)}return e}t=n,n=t.parentNode}return null}function ru(t){return t=t[ur]||t[Xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ua(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function Lf(t){return t[ql]||null}var Up=[],ca=-1;function Ds(t){return{current:t}}function Nt(t){0>ca||(t.current=Up[ca],Up[ca]=null,ca--)}function bt(t,e){ca++,Up[ca]=t.current,t.current=e}var Ps={},Dn=Ds(Ps),Zn=Ds(!1),co=Ps;function Ca(t,e){var n=t.type.contextTypes;if(!n)return Ps;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qn(t){return t=t.childContextTypes,t!=null}function of(){Nt(Zn),Nt(Dn)}function s0(t,e,n){if(Dn.current!==Ps)throw Error(pe(168));bt(Dn,e),bt(Zn,n)}function ly(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(pe(108,_2(t)||"Unknown",s));return qt({},n,i)}function af(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ps,co=Dn.current,bt(Dn,t),bt(Zn,Zn.current),!0}function o0(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=ly(t,e,co),i.__reactInternalMemoizedMergedChildContext=t,Nt(Zn),Nt(Dn),bt(Dn,t)):Nt(Zn),bt(Zn,n)}var Ir=null,Pf=!1,Sh=!1;function uy(t){Ir===null?Ir=[t]:Ir.push(t)}function IL(t){Pf=!0,uy(t)}function Is(){if(!Sh&&Ir!==null){Sh=!0;var t=0,e=wt;try{var n=Ir;for(wt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ir=null,Pf=!1}catch(s){throw Ir!==null&&(Ir=Ir.slice(t+1)),IS(xm,Is),s}finally{wt=e,Sh=!1}}return null}var fa=[],da=0,lf=null,uf=0,bi=[],Ui=0,fo=null,Fr=1,Or="";function js(t,e){fa[da++]=uf,fa[da++]=lf,lf=t,uf=e}function cy(t,e,n){bi[Ui++]=Fr,bi[Ui++]=Or,bi[Ui++]=fo,fo=t;var i=Fr;t=Or;var s=32-er(i)-1;i&=~(1<<s),n+=1;var o=32-er(e)+s;if(30<o){var l=s-s%5;o=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Fr=1<<32-er(e)+s|n<<s|i,Or=o+t}else Fr=1<<o|n<<s|i,Or=t}function Cm(t){t.return!==null&&(js(t,1),cy(t,1,0))}function Lm(t){for(;t===lf;)lf=fa[--da],fa[da]=null,uf=fa[--da],fa[da]=null;for(;t===fo;)fo=bi[--Ui],bi[Ui]=null,Or=bi[--Ui],bi[Ui]=null,Fr=bi[--Ui],bi[Ui]=null}var hi=null,di=null,Bt=!1,Ki=null;function fy(t,e){var n=Ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hi=t,di=Ms(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hi=t,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fo!==null?{id:Fr,overflow:Or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hi=t,di=null,!0):!1;default:return!1}}function Dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(Bt){var e=di;if(e){var n=e;if(!a0(t,e)){if(Dp(t))throw Error(pe(418));e=Ms(n.nextSibling);var i=hi;e&&a0(t,e)?fy(i,n):(t.flags=t.flags&-4097|2,Bt=!1,hi=t)}}else{if(Dp(t))throw Error(pe(418));t.flags=t.flags&-4097|2,Bt=!1,hi=t}}}function l0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hi=t}function uc(t){if(t!==hi)return!1;if(!Bt)return l0(t),Bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lp(t.type,t.memoizedProps)),e&&(e=di)){if(Dp(t))throw dy(),Error(pe(418));for(;e;)fy(t,e),e=Ms(e.nextSibling)}if(l0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){di=Ms(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}di=null}}else di=hi?Ms(t.stateNode.nextSibling):null;return!0}function dy(){for(var t=di;t;)t=Ms(t.nextSibling)}function La(){di=hi=null,Bt=!1}function Pm(t){Ki===null?Ki=[t]:Ki.push(t)}var NL=$r.ReactCurrentBatchConfig;function ji(t,e){if(t&&t.defaultProps){e=qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cf=Ds(null),ff=null,ha=null,bm=null;function Um(){bm=ha=ff=null}function Dm(t){var e=cf.current;Nt(cf),t._currentValue=e}function Np(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ma(t,e){ff=t,bm=ha=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kn=!0),t.firstContext=null)}function Oi(t){var e=t._currentValue;if(bm!==t)if(t={context:t,memoizedValue:e,next:null},ha===null){if(ff===null)throw Error(pe(308));ha=t,ff.dependencies={lanes:0,firstContext:t}}else ha=ha.next=t;return e}var to=null;function Im(t){to===null?to=[t]:to.push(t)}function hy(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Im(e)):(n.next=s.next,s.next=n),e.interleaved=n,qr(t,i)}function qr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ds=!1;function Nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function py(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,St&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,qr(t,n)}return s=i.interleaved,s===null?(e.next=e,Im(i)):(e.next=s.next,s.next=e),i.interleaved=e,qr(t,n)}function Gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sm(t,n)}}function u0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function df(t,e,n,i){var s=t.updateQueue;ds=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?o=d:l.next=d,l=f;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=f))}if(o!==null){var g=s.baseState;l=0,p=d=f=null,u=o;do{var _=u.lane,x=u.eventTime;if((i&_)===_){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var E=t,T=u;switch(_=e,x=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){g=E.call(x,g,_);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,_=typeof E=="function"?E.call(x,g,_):E,_==null)break e;g=qt({},g,_);break e;case 2:ds=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[u]:_.push(u))}else x={eventTime:x,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=x,f=g):p=p.next=x,l|=_;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;_=u,u=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(1);if(p===null&&(f=g),s.baseState=f,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);po|=l,t.lanes=l,t.memoizedState=g}}function c0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(pe(191,s));s.call(i)}}}var my=new hS.Component().refs;function Fp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bf={isMounted:function(t){return(t=t._reactInternals)?xo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kn(),s=ws(t),o=Hr(i,s);o.payload=e,n!=null&&(o.callback=n),e=Es(t,o,s),e!==null&&(tr(e,t,s,i),Gc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kn(),s=ws(t),o=Hr(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Es(t,o,s),e!==null&&(tr(e,t,s,i),Gc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kn(),i=ws(t),s=Hr(n,i);s.tag=2,e!=null&&(s.callback=e),e=Es(t,s,i),e!==null&&(tr(e,t,i,n),Gc(e,t,i))}};function f0(t,e,n,i,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Vl(n,i)||!Vl(s,o):!0}function gy(t,e,n){var i=!1,s=Ps,o=e.contextType;return typeof o=="object"&&o!==null?o=Oi(o):(s=Qn(e)?co:Dn.current,i=e.contextTypes,o=(i=i!=null)?Ca(t,s):Ps),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function d0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bf.enqueueReplaceState(e,e.state,null)}function Op(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=my,Nm(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=Oi(o):(o=Qn(e)?co:Dn.current,s.context=Ca(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Fp(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&bf.enqueueReplaceState(s,s.state,null),df(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function pl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=s.refs;u===my&&(u=s.refs={}),l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function cc(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h0(t){var e=t._init;return e(t._payload)}function _y(t){function e(h,y){if(t){var S=h.deletions;S===null?(h.deletions=[y],h.flags|=16):S.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function s(h,y){return h=As(h,y),h.index=0,h.sibling=null,h}function o(h,y,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<y?(h.flags|=2,y):S):(h.flags|=2,y)):(h.flags|=1048576,y)}function l(h){return t&&h.alternate===null&&(h.flags|=2),h}function u(h,y,S,w){return y===null||y.tag!==6?(y=Rh(S,h.mode,w),y.return=h,y):(y=s(y,S),y.return=h,y)}function f(h,y,S,w){var P=S.type;return P===sa?p(h,y,S.props.children,w,S.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fs&&h0(P)===y.type)?(w=s(y,S.props),w.ref=pl(h,y,S),w.return=h,w):(w=jc(S.type,S.key,S.props,null,h.mode,w),w.ref=pl(h,y,S),w.return=h,w)}function d(h,y,S,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Ch(S,h.mode,w),y.return=h,y):(y=s(y,S.children||[]),y.return=h,y)}function p(h,y,S,w,P){return y===null||y.tag!==7?(y=so(S,h.mode,w,P),y.return=h,y):(y=s(y,S),y.return=h,y)}function g(h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Rh(""+y,h.mode,S),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return S=jc(y.type,y.key,y.props,null,h.mode,S),S.ref=pl(h,null,y),S.return=h,S;case ra:return y=Ch(y,h.mode,S),y.return=h,y;case fs:var w=y._init;return g(h,w(y._payload),S)}if(Ml(y)||ul(y))return y=so(y,h.mode,S,null),y.return=h,y;cc(h,y)}return null}function _(h,y,S,w){var P=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return P!==null?null:u(h,y,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:return S.key===P?f(h,y,S,w):null;case ra:return S.key===P?d(h,y,S,w):null;case fs:return P=S._init,_(h,y,P(S._payload),w)}if(Ml(S)||ul(S))return P!==null?null:p(h,y,S,w,null);cc(h,S)}return null}function x(h,y,S,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(S)||null,u(y,h,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ju:return h=h.get(w.key===null?S:w.key)||null,f(y,h,w,P);case ra:return h=h.get(w.key===null?S:w.key)||null,d(y,h,w,P);case fs:var N=w._init;return x(h,y,S,N(w._payload),P)}if(Ml(w)||ul(w))return h=h.get(S)||null,p(y,h,w,P,null);cc(y,w)}return null}function E(h,y,S,w){for(var P=null,N=null,D=y,H=y=0,C=null;D!==null&&H<S.length;H++){D.index>H?(C=D,D=null):C=D.sibling;var U=_(h,D,S[H],w);if(U===null){D===null&&(D=C);break}t&&D&&U.alternate===null&&e(h,D),y=o(U,y,H),N===null?P=U:N.sibling=U,N=U,D=C}if(H===S.length)return n(h,D),Bt&&js(h,H),P;if(D===null){for(;H<S.length;H++)D=g(h,S[H],w),D!==null&&(y=o(D,y,H),N===null?P=D:N.sibling=D,N=D);return Bt&&js(h,H),P}for(D=i(h,D);H<S.length;H++)C=x(D,h,H,S[H],w),C!==null&&(t&&C.alternate!==null&&D.delete(C.key===null?H:C.key),y=o(C,y,H),N===null?P=C:N.sibling=C,N=C);return t&&D.forEach(function(oe){return e(h,oe)}),Bt&&js(h,H),P}function T(h,y,S,w){var P=ul(S);if(typeof P!="function")throw Error(pe(150));if(S=P.call(S),S==null)throw Error(pe(151));for(var N=P=null,D=y,H=y=0,C=null,U=S.next();D!==null&&!U.done;H++,U=S.next()){D.index>H?(C=D,D=null):C=D.sibling;var oe=_(h,D,U.value,w);if(oe===null){D===null&&(D=C);break}t&&D&&oe.alternate===null&&e(h,D),y=o(oe,y,H),N===null?P=oe:N.sibling=oe,N=oe,D=C}if(U.done)return n(h,D),Bt&&js(h,H),P;if(D===null){for(;!U.done;H++,U=S.next())U=g(h,U.value,w),U!==null&&(y=o(U,y,H),N===null?P=U:N.sibling=U,N=U);return Bt&&js(h,H),P}for(D=i(h,D);!U.done;H++,U=S.next())U=x(D,h,H,U.value,w),U!==null&&(t&&U.alternate!==null&&D.delete(U.key===null?H:U.key),y=o(U,y,H),N===null?P=U:N.sibling=U,N=U);return t&&D.forEach(function(de){return e(h,de)}),Bt&&js(h,H),P}function v(h,y,S,w){if(typeof S=="object"&&S!==null&&S.type===sa&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:e:{for(var P=S.key,N=y;N!==null;){if(N.key===P){if(P=S.type,P===sa){if(N.tag===7){n(h,N.sibling),y=s(N,S.props.children),y.return=h,h=y;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fs&&h0(P)===N.type){n(h,N.sibling),y=s(N,S.props),y.ref=pl(h,N,S),y.return=h,h=y;break e}n(h,N);break}else e(h,N);N=N.sibling}S.type===sa?(y=so(S.props.children,h.mode,w,S.key),y.return=h,h=y):(w=jc(S.type,S.key,S.props,null,h.mode,w),w.ref=pl(h,y,S),w.return=h,h=w)}return l(h);case ra:e:{for(N=S.key;y!==null;){if(y.key===N)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(h,y.sibling),y=s(y,S.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=Ch(S,h.mode,w),y.return=h,h=y}return l(h);case fs:return N=S._init,v(h,y,N(S._payload),w)}if(Ml(S))return E(h,y,S,w);if(ul(S))return T(h,y,S,w);cc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(h,y.sibling),y=s(y,S),y.return=h,h=y):(n(h,y),y=Rh(S,h.mode,w),y.return=h,h=y),l(h)):n(h,y)}return v}var Pa=_y(!0),vy=_y(!1),su={},fr=Ds(su),Yl=Ds(su),jl=Ds(su);function no(t){if(t===su)throw Error(pe(174));return t}function Fm(t,e){switch(bt(jl,e),bt(Yl,t),bt(fr,su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mp(e,t)}Nt(fr),bt(fr,e)}function ba(){Nt(fr),Nt(Yl),Nt(jl)}function xy(t){no(jl.current);var e=no(fr.current),n=mp(e,t.type);e!==n&&(bt(Yl,t),bt(fr,n))}function Om(t){Yl.current===t&&(Nt(fr),Nt(Yl))}var Wt=Ds(0);function hf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function zm(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var Vc=$r.ReactCurrentDispatcher,Mh=$r.ReactCurrentBatchConfig,ho=0,Xt=null,ln=null,mn=null,pf=!1,bl=!1,$l=0,FL=0;function Cn(){throw Error(pe(321))}function Bm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function km(t,e,n,i,s,o){if(ho=o,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vc.current=t===null||t.memoizedState===null?kL:HL,t=n(i,s),bl){o=0;do{if(bl=!1,$l=0,25<=o)throw Error(pe(301));o+=1,mn=ln=null,e.updateQueue=null,Vc.current=GL,t=n(i,s)}while(bl)}if(Vc.current=mf,e=ln!==null&&ln.next!==null,ho=0,mn=ln=Xt=null,pf=!1,e)throw Error(pe(300));return t}function Hm(){var t=$l!==0;return $l=0,t}function ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Xt.memoizedState=mn=t:mn=mn.next=t,mn}function zi(){if(ln===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var e=mn===null?Xt.memoizedState:mn.next;if(e!==null)mn=e,ln=t;else{if(t===null)throw Error(pe(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},mn===null?Xt.memoizedState=mn=t:mn=mn.next=t}return mn}function Kl(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=zi(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=ln,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=l=null,f=null,d=o;do{var p=d.lane;if((ho&p)===p)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=g,l=i):f=f.next=g,Xt.lanes|=p,po|=p}d=d.next}while(d!==null&&d!==o);f===null?l=i:f.next=u,nr(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,Xt.lanes|=o,po|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Th(t){var e=zi(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);nr(o,e.memoizedState)||(Kn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Sy(){}function yy(t,e){var n=Xt,i=zi(),s=e(),o=!nr(i.memoizedState,s);if(o&&(i.memoizedState=s,Kn=!0),i=i.queue,Gm(Ty.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||mn!==null&&mn.memoizedState.tag&1){if(n.flags|=2048,Zl(9,Ey.bind(null,n,i,s,e),void 0,null),gn===null)throw Error(pe(349));ho&30||My(n,e,s)}return s}function My(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ey(t,e,n,i){e.value=n,e.getSnapshot=i,wy(e)&&Ay(t)}function Ty(t,e,n){return n(function(){wy(e)&&Ay(t)})}function wy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function Ay(t){var e=qr(t,1);e!==null&&tr(e,t,1,-1)}function p0(t){var e=ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:t},e.queue=t,t=t.dispatch=BL.bind(null,Xt,t),[e.memoizedState,t]}function Zl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ry(){return zi().memoizedState}function Wc(t,e,n,i){var s=ar();Xt.flags|=t,s.memoizedState=Zl(1|e,n,void 0,i===void 0?null:i)}function Uf(t,e,n,i){var s=zi();i=i===void 0?null:i;var o=void 0;if(ln!==null){var l=ln.memoizedState;if(o=l.destroy,i!==null&&Bm(i,l.deps)){s.memoizedState=Zl(e,n,o,i);return}}Xt.flags|=t,s.memoizedState=Zl(1|e,n,o,i)}function m0(t,e){return Wc(8390656,8,t,e)}function Gm(t,e){return Uf(2048,8,t,e)}function Cy(t,e){return Uf(4,2,t,e)}function Ly(t,e){return Uf(4,4,t,e)}function Py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function by(t,e,n){return n=n!=null?n.concat([t]):null,Uf(4,4,Py.bind(null,e,t),n)}function Vm(){}function Uy(t,e){var n=zi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dy(t,e){var n=zi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Iy(t,e,n){return ho&21?(nr(n,e)||(n=OS(),Xt.lanes|=n,po|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kn=!0),t.memoizedState=n)}function OL(t,e){var n=wt;wt=n!==0&&4>n?n:4,t(!0);var i=Mh.transition;Mh.transition={};try{t(!1),e()}finally{wt=n,Mh.transition=i}}function Ny(){return zi().memoizedState}function zL(t,e,n){var i=ws(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Fy(t))Oy(e,n);else if(n=hy(t,e,n,i),n!==null){var s=kn();tr(n,t,i,s),zy(n,e,i)}}function BL(t,e,n){var i=ws(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fy(t))Oy(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(s.hasEagerState=!0,s.eagerState=u,nr(u,l)){var f=e.interleaved;f===null?(s.next=s,Im(e)):(s.next=f.next,f.next=s),e.interleaved=s;return}}catch{}finally{}n=hy(t,e,s,i),n!==null&&(s=kn(),tr(n,t,i,s),zy(n,e,i))}}function Fy(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function Oy(t,e){bl=pf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sm(t,n)}}var mf={readContext:Oi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},kL={readContext:Oi,useCallback:function(t,e){return ar().memoizedState=[t,e===void 0?null:e],t},useContext:Oi,useEffect:m0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4194308,4,Py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wc(4,2,t,e)},useMemo:function(t,e){var n=ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ar();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zL.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=ar();return t={current:t},e.memoizedState=t},useState:p0,useDebugValue:Vm,useDeferredValue:function(t){return ar().memoizedState=t},useTransition:function(){var t=p0(!1),e=t[0];return t=OL.bind(null,t[1]),ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,s=ar();if(Bt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),gn===null)throw Error(pe(349));ho&30||My(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,m0(Ty.bind(null,i,o,t),[t]),i.flags|=2048,Zl(9,Ey.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ar(),e=gn.identifierPrefix;if(Bt){var n=Or,i=Fr;n=(i&~(1<<32-er(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FL++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HL={readContext:Oi,useCallback:Uy,useContext:Oi,useEffect:Gm,useImperativeHandle:by,useInsertionEffect:Cy,useLayoutEffect:Ly,useMemo:Dy,useReducer:Eh,useRef:Ry,useState:function(){return Eh(Kl)},useDebugValue:Vm,useDeferredValue:function(t){var e=zi();return Iy(e,ln.memoizedState,t)},useTransition:function(){var t=Eh(Kl)[0],e=zi().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:yy,useId:Ny,unstable_isNewReconciler:!1},GL={readContext:Oi,useCallback:Uy,useContext:Oi,useEffect:Gm,useImperativeHandle:by,useInsertionEffect:Cy,useLayoutEffect:Ly,useMemo:Dy,useReducer:Th,useRef:Ry,useState:function(){return Th(Kl)},useDebugValue:Vm,useDeferredValue:function(t){var e=zi();return ln===null?e.memoizedState=t:Iy(e,ln.memoizedState,t)},useTransition:function(){var t=Th(Kl)[0],e=zi().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:yy,useId:Ny,unstable_isNewReconciler:!1};function Ua(t,e){try{var n="",i=e;do n+=g2(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function wh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VL=typeof WeakMap=="function"?WeakMap:Map;function By(t,e,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_f||(_f=!0,jp=i),zp(t,e)},n}function ky(t,e,n){n=Hr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){zp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zp(t,e),typeof i!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function g0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VL;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=iP.bind(null,t,e,n),e.then(t,t))}function _0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hr(-1,1),e.tag=2,Es(n,e,1))),n.lanes|=1),t)}var WL=$r.ReactCurrentOwner,Kn=!1;function zn(t,e,n,i){e.child=t===null?vy(e,null,n,i):Pa(e,t.child,n,i)}function x0(t,e,n,i,s){n=n.render;var o=e.ref;return Ma(e,s),i=km(t,e,n,i,o,s),n=Hm(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yr(t,e,s)):(Bt&&n&&Cm(e),e.flags|=1,zn(t,e,i,s),e.child)}function S0(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Zm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Hy(t,e,o,i,s)):(t=jc(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vl,n(l,i)&&t.ref===e.ref)return Yr(t,e,s)}return e.flags|=1,t=As(o,i),t.ref=e.ref,t.return=e,e.child=t}function Hy(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(Vl(o,i)&&t.ref===e.ref)if(Kn=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(Kn=!0);else return e.lanes=t.lanes,Yr(t,e,s)}return Bp(t,e,n,i,s)}function Gy(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(ma,fi),fi|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,bt(ma,fi),fi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,bt(ma,fi),fi|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,bt(ma,fi),fi|=i;return zn(t,e,s,n),e.child}function Vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bp(t,e,n,i,s){var o=Qn(n)?co:Dn.current;return o=Ca(e,o),Ma(e,s),n=km(t,e,n,i,o,s),i=Hm(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yr(t,e,s)):(Bt&&i&&Cm(e),e.flags|=1,zn(t,e,n,s),e.child)}function y0(t,e,n,i,s){if(Qn(n)){var o=!0;af(e)}else o=!1;if(Ma(e,s),e.stateNode===null)Xc(t,e),gy(e,n,i),Op(e,n,i,s),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Oi(d):(d=Qn(n)?co:Dn.current,d=Ca(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==d)&&d0(e,l,i,d),ds=!1;var _=e.memoizedState;l.state=_,df(e,i,l,s),f=e.memoizedState,u!==i||_!==f||Zn.current||ds?(typeof p=="function"&&(Fp(e,n,p,i),f=e.memoizedState),(u=ds||f0(e,n,u,i,_,f,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=d,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,py(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:ji(e.type,u),l.props=d,g=e.pendingProps,_=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Oi(f):(f=Qn(n)?co:Dn.current,f=Ca(e,f));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==g||_!==f)&&d0(e,l,i,f),ds=!1,_=e.memoizedState,l.state=_,df(e,i,l,s);var E=e.memoizedState;u!==g||_!==E||Zn.current||ds?(typeof x=="function"&&(Fp(e,n,x,i),E=e.memoizedState),(d=ds||f0(e,n,d,i,_,E,f)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,E,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,E,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),l.props=i,l.state=E,l.context=f,i=d):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return kp(t,e,n,i,o,s)}function kp(t,e,n,i,s,o){Vy(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&o0(e,n,!1),Yr(t,e,o);i=e.stateNode,WL.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=Pa(e,t.child,null,o),e.child=Pa(e,null,u,o)):zn(t,e,u,o),e.memoizedState=i.state,s&&o0(e,n,!0),e.child}function Wy(t){var e=t.stateNode;e.pendingContext?s0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(t,e.context,!1),Fm(t,e.containerInfo)}function M0(t,e,n,i,s){return La(),Pm(s),e.flags|=256,zn(t,e,n,i),e.child}var Hp={dehydrated:null,treeContext:null,retryLane:0};function Gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xy(t,e,n){var i=e.pendingProps,s=Wt.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),bt(Wt,s&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Nf(l,i,0,null),t=so(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gp(n),e.memoizedState=Hp,t):Wm(e,l));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return XL(t,e,l,i,u,s,n);if(o){o=i.fallback,l=e.mode,s=t.child,u=s.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=As(s,f),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=As(u,o):(o=so(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?Gp(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=Hp,i}return o=t.child,t=o.sibling,i=As(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wm(t,e){return e=Nf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,i){return i!==null&&Pm(i),Pa(e,t.child,null,n),t=Wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XL(t,e,n,i,s,o,l){if(n)return e.flags&256?(e.flags&=-257,i=wh(Error(pe(422))),fc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=Nf({mode:"visible",children:i.children},s,0,null),o=so(o,s,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Pa(e,t.child,null,l),e.child.memoizedState=Gp(l),e.memoizedState=Hp,o);if(!(e.mode&1))return fc(t,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(pe(419)),i=wh(o,i,void 0),fc(t,e,l,i)}if(u=(l&t.childLanes)!==0,Kn||u){if(i=gn,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,qr(t,s),tr(i,t,s,-1))}return Km(),i=wh(Error(pe(421))),fc(t,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=rP.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,di=Ms(s.nextSibling),hi=e,Bt=!0,Ki=null,t!==null&&(bi[Ui++]=Fr,bi[Ui++]=Or,bi[Ui++]=fo,Fr=t.id,Or=t.overflow,fo=e),e=Wm(e,i.children),e.flags|=4096,e)}function E0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Np(t.return,e,n)}function Ah(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function qy(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(zn(t,e,i.children,n),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,n,e);else if(t.tag===19)E0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(bt(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hf(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ah(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hf(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ah(e,!0,n,null,o);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),po|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=As(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=As(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qL(t,e,n){switch(e.tag){case 3:Wy(e),La();break;case 5:xy(e);break;case 1:Qn(e.type)&&af(e);break;case 4:Fm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;bt(cf,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Wt,Wt.current&1),e.flags|=128,null):n&e.child.childLanes?Xy(t,e,n):(bt(Wt,Wt.current&1),t=Yr(t,e,n),t!==null?t.sibling:null);bt(Wt,Wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qy(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),bt(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Gy(t,e,n)}return Yr(t,e,n)}var Yy,Vp,jy,$y;Yy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vp=function(){};jy=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,no(fr.current);var o=null;switch(n){case"input":s=fp(t,s),i=fp(t,i),o=[];break;case"select":s=qt({},s,{value:void 0}),i=qt({},i,{value:void 0}),o=[];break;case"textarea":s=pp(t,s),i=pp(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sf)}gp(n,i);var l;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var f=i[d];if(u=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fl.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&It("scroll",t),o||u===f||(o=[])):(o=o||[]).push(d,f))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};$y=function(t,e,n,i){n!==i&&(e.flags|=4)};function ml(t,e){if(!Bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function YL(t,e,n){var i=e.pendingProps;switch(Lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(e),null;case 1:return Qn(e.type)&&of(),Ln(e),null;case 3:return i=e.stateNode,ba(),Nt(Zn),Nt(Dn),zm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ki!==null&&(Zp(Ki),Ki=null))),Vp(t,e),Ln(e),null;case 5:Om(e);var s=no(jl.current);if(n=e.type,t!==null&&e.stateNode!=null)jy(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Ln(e),null}if(t=no(fr.current),uc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ur]=e,i[ql]=o,t=(e.mode&1)!==0,n){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(s=0;s<Tl.length;s++)It(Tl[s],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":Uv(i,o),It("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},It("invalid",i);break;case"textarea":Iv(i,o),It("invalid",i)}gp(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,u,t),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,u,t),s=["children",""+u]):Fl.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&It("scroll",i)}switch(n){case"input":ec(i),Dv(i,o,!0);break;case"textarea":ec(i),Nv(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=sf)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=MS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[ur]=e,t[ql]=i,Yy(t,e,!1,!1),e.stateNode=t;e:{switch(l=_p(n,i),n){case"dialog":It("cancel",t),It("close",t),s=i;break;case"iframe":case"object":case"embed":It("load",t),s=i;break;case"video":case"audio":for(s=0;s<Tl.length;s++)It(Tl[s],t);s=i;break;case"source":It("error",t),s=i;break;case"img":case"image":case"link":It("error",t),It("load",t),s=i;break;case"details":It("toggle",t),s=i;break;case"input":Uv(t,i),s=fp(t,i),It("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=qt({},i,{value:void 0}),It("invalid",t);break;case"textarea":Iv(t,i),s=pp(t,i),It("invalid",t);break;default:s=i}gp(n,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?wS(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ES(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ol(t,f):typeof f=="number"&&Ol(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fl.hasOwnProperty(o)?f!=null&&o==="onScroll"&&It("scroll",t):f!=null&&pm(t,o,f,l))}switch(n){case"input":ec(t),Dv(t,i,!1);break;case"textarea":ec(t),Nv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ls(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?va(t,!!i.multiple,o,!1):i.defaultValue!=null&&va(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=sf)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ln(e),null;case 6:if(t&&e.stateNode!=null)$y(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=no(jl.current),no(fr.current),uc(e)){if(i=e.stateNode,n=e.memoizedProps,i[ur]=e,(o=i.nodeValue!==n)&&(t=hi,t!==null))switch(t.tag){case 3:lc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ur]=e,e.stateNode=i}return Ln(e),null;case 13:if(Nt(Wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&di!==null&&e.mode&1&&!(e.flags&128))dy(),La(),e.flags|=98560,o=!1;else if(o=uc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(pe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(pe(317));o[ur]=e}else La(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ln(e),o=!1}else Ki!==null&&(Zp(Ki),Ki=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?un===0&&(un=3):Km())),e.updateQueue!==null&&(e.flags|=4),Ln(e),null);case 4:return ba(),Vp(t,e),t===null&&Wl(e.stateNode.containerInfo),Ln(e),null;case 10:return Dm(e.type._context),Ln(e),null;case 17:return Qn(e.type)&&of(),Ln(e),null;case 19:if(Nt(Wt),o=e.memoizedState,o===null)return Ln(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)ml(o,!1);else{if(un!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=hf(t),l!==null){for(e.flags|=128,ml(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return bt(Wt,Wt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qt()>Da&&(e.flags|=128,i=!0,ml(o,!1),e.lanes=4194304)}else{if(!i)if(t=hf(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ml(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Bt)return Ln(e),null}else 2*Qt()-o.renderingStartTime>Da&&n!==1073741824&&(e.flags|=128,i=!0,ml(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qt(),e.sibling=null,n=Wt.current,bt(Wt,i?n&1|2:n&1),e):(Ln(e),null);case 22:case 23:return $m(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fi&1073741824&&(Ln(e),e.subtreeFlags&6&&(e.flags|=8192)):Ln(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function jL(t,e){switch(Lm(e),e.tag){case 1:return Qn(e.type)&&of(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ba(),Nt(Zn),Nt(Dn),zm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Om(e),null;case 13:if(Nt(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));La()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Nt(Wt),null;case 4:return ba(),null;case 10:return Dm(e.type._context),null;case 22:case 23:return $m(),null;case 24:return null;default:return null}}var dc=!1,Un=!1,$L=typeof WeakSet=="function"?WeakSet:Set,Le=null;function pa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$t(t,e,i)}else n.current=null}function Wp(t,e,n){try{n()}catch(i){$t(t,e,i)}}var T0=!1;function KL(t,e){if(Rp=tf,t=JS(),Rm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,d=0,p=0,g=t,_=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(u=l+s),g!==o||i!==0&&g.nodeType!==3||(f=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)_=g,g=x;for(;;){if(g===t)break t;if(_===n&&++d===s&&(u=l),_===o&&++p===i&&(f=l),(x=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=x}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cp={focusedElem:t,selectionRange:n},tf=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,v=E.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?T:ji(e.type,T),v);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(w){$t(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return E=T0,T0=!1,E}function Ul(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&Wp(e,n,o)}s=s.next}while(s!==i)}}function Df(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ky(t){var e=t.alternate;e!==null&&(t.alternate=null,Ky(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ur],delete e[ql],delete e[bp],delete e[UL],delete e[DL])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zy(t){return t.tag===5||t.tag===3||t.tag===4}function w0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sf));else if(i!==4&&(t=t.child,t!==null))for(qp(t,e,n),t=t.sibling;t!==null;)qp(t,e,n),t=t.sibling}function Yp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yp(t,e,n),t=t.sibling;t!==null;)Yp(t,e,n),t=t.sibling}var Sn=null,$i=!1;function os(t,e,n){for(n=n.child;n!==null;)Qy(t,e,n),n=n.sibling}function Qy(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(wf,n)}catch{}switch(n.tag){case 5:Un||pa(n,e);case 6:var i=Sn,s=$i;Sn=null,os(t,e,n),Sn=i,$i=s,Sn!==null&&($i?(t=Sn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Sn.removeChild(n.stateNode));break;case 18:Sn!==null&&($i?(t=Sn,n=n.stateNode,t.nodeType===8?xh(t.parentNode,n):t.nodeType===1&&xh(t,n),Hl(t)):xh(Sn,n.stateNode));break;case 4:i=Sn,s=$i,Sn=n.stateNode.containerInfo,$i=!0,os(t,e,n),Sn=i,$i=s;break;case 0:case 11:case 14:case 15:if(!Un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Wp(n,e,l),s=s.next}while(s!==i)}os(t,e,n);break;case 1:if(!Un&&(pa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){$t(n,e,u)}os(t,e,n);break;case 21:os(t,e,n);break;case 22:n.mode&1?(Un=(i=Un)||n.memoizedState!==null,os(t,e,n),Un=i):os(t,e,n);break;default:os(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $L),e.forEach(function(i){var s=sP.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:Sn=u.stateNode,$i=!1;break e;case 3:Sn=u.stateNode.containerInfo,$i=!0;break e;case 4:Sn=u.stateNode.containerInfo,$i=!0;break e}u=u.return}if(Sn===null)throw Error(pe(160));Qy(o,l,s),Sn=null,$i=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(d){$t(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jy(e,t),e=e.sibling}function Jy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vi(e,t),or(t),i&4){try{Ul(3,t,t.return),Df(3,t)}catch(T){$t(t,t.return,T)}try{Ul(5,t,t.return)}catch(T){$t(t,t.return,T)}}break;case 1:Vi(e,t),or(t),i&512&&n!==null&&pa(n,n.return);break;case 5:if(Vi(e,t),or(t),i&512&&n!==null&&pa(n,n.return),t.flags&32){var s=t.stateNode;try{Ol(s,"")}catch(T){$t(t,t.return,T)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&SS(s,o),_p(u,l);var d=_p(u,o);for(l=0;l<f.length;l+=2){var p=f[l],g=f[l+1];p==="style"?wS(s,g):p==="dangerouslySetInnerHTML"?ES(s,g):p==="children"?Ol(s,g):pm(s,p,g,d)}switch(u){case"input":dp(s,o);break;case"textarea":yS(s,o);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?va(s,!!o.multiple,x,!1):_!==!!o.multiple&&(o.defaultValue!=null?va(s,!!o.multiple,o.defaultValue,!0):va(s,!!o.multiple,o.multiple?[]:"",!1))}s[ql]=o}catch(T){$t(t,t.return,T)}}break;case 6:if(Vi(e,t),or(t),i&4){if(t.stateNode===null)throw Error(pe(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(T){$t(t,t.return,T)}}break;case 3:if(Vi(e,t),or(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(T){$t(t,t.return,T)}break;case 4:Vi(e,t),or(t);break;case 13:Vi(e,t),or(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Ym=Qt())),i&4&&A0(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Un=(d=Un)||p,Vi(e,t),Un=d):Vi(e,t),or(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(Le=t,p=t.child;p!==null;){for(g=Le=p;Le!==null;){switch(_=Le,x=_.child,_.tag){case 0:case 11:case 14:case 15:Ul(4,_,_.return);break;case 1:pa(_,_.return);var E=_.stateNode;if(typeof E.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){$t(i,n,T)}}break;case 5:pa(_,_.return);break;case 22:if(_.memoizedState!==null){C0(g);continue}}x!==null?(x.return=_,Le=x):C0(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=g.stateNode,f=g.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=TS("display",l))}catch(T){$t(t,t.return,T)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(T){$t(t,t.return,T)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Vi(e,t),or(t),i&4&&A0(t);break;case 21:break;default:Vi(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zy(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ol(s,""),i.flags&=-33);var o=w0(t);Yp(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,u=w0(t);qp(t,u,l);break;default:throw Error(pe(161))}}catch(f){$t(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZL(t,e,n){Le=t,eM(t)}function eM(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var s=Le,o=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||dc;if(!l){var u=s.alternate,f=u!==null&&u.memoizedState!==null||Un;u=dc;var d=Un;if(dc=l,(Un=f)&&!d)for(Le=s;Le!==null;)l=Le,f=l.child,l.tag===22&&l.memoizedState!==null?L0(s):f!==null?(f.return=l,Le=f):L0(s);for(;o!==null;)Le=o,eM(o),o=o.sibling;Le=s,dc=u,Un=d}R0(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,Le=o):R0(t)}}function R0(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Un||Df(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Un)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ji(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&c0(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c0(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Hl(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}Un||e.flags&512&&Xp(e)}catch(_){$t(e,e.return,_)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function C0(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function L0(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Df(4,e)}catch(f){$t(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(f){$t(e,s,f)}}var o=e.return;try{Xp(e)}catch(f){$t(e,o,f)}break;case 5:var l=e.return;try{Xp(e)}catch(f){$t(e,l,f)}}}catch(f){$t(e,e.return,f)}if(e===t){Le=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Le=u;break}Le=e.return}}var QL=Math.ceil,gf=$r.ReactCurrentDispatcher,Xm=$r.ReactCurrentOwner,Fi=$r.ReactCurrentBatchConfig,St=0,gn=null,nn=null,Mn=0,fi=0,ma=Ds(0),un=0,Ql=null,po=0,If=0,qm=0,Dl=null,jn=null,Ym=0,Da=1/0,Dr=null,_f=!1,jp=null,Ts=null,hc=!1,gs=null,vf=0,Il=0,$p=null,qc=-1,Yc=0;function kn(){return St&6?Qt():qc!==-1?qc:qc=Qt()}function ws(t){return t.mode&1?St&2&&Mn!==0?Mn&-Mn:NL.transition!==null?(Yc===0&&(Yc=OS()),Yc):(t=wt,t!==0||(t=window.event,t=t===void 0?16:WS(t.type)),t):1}function tr(t,e,n,i){if(50<Il)throw Il=0,$p=null,Error(pe(185));nu(t,n,i),(!(St&2)||t!==gn)&&(t===gn&&(!(St&2)&&(If|=n),un===4&&ps(t,Mn)),Jn(t,i),n===1&&St===0&&!(e.mode&1)&&(Da=Qt()+500,Pf&&Is()))}function Jn(t,e){var n=t.callbackNode;N2(t,e);var i=ef(t,t===gn?Mn:0);if(i===0)n!==null&&zv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zv(n),e===1)t.tag===0?IL(P0.bind(null,t)):uy(P0.bind(null,t)),PL(function(){!(St&6)&&Is()}),n=null;else{switch(zS(i)){case 1:n=xm;break;case 4:n=NS;break;case 16:n=Jc;break;case 536870912:n=FS;break;default:n=Jc}n=lM(n,tM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tM(t,e){if(qc=-1,Yc=0,St&6)throw Error(pe(327));var n=t.callbackNode;if(Ea()&&t.callbackNode!==n)return null;var i=ef(t,t===gn?Mn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xf(t,i);else{e=i;var s=St;St|=2;var o=iM();(gn!==t||Mn!==e)&&(Dr=null,Da=Qt()+500,ro(t,e));do try{tP();break}catch(u){nM(t,u)}while(1);Um(),gf.current=o,St=s,nn!==null?e=0:(gn=null,Mn=0,e=un)}if(e!==0){if(e===2&&(s=Mp(t),s!==0&&(i=s,e=Kp(t,s))),e===1)throw n=Ql,ro(t,0),ps(t,i),Jn(t,Qt()),n;if(e===6)ps(t,i);else{if(s=t.current.alternate,!(i&30)&&!JL(s)&&(e=xf(t,i),e===2&&(o=Mp(t),o!==0&&(i=o,e=Kp(t,o))),e===1))throw n=Ql,ro(t,0),ps(t,i),Jn(t,Qt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:$s(t,jn,Dr);break;case 3:if(ps(t,i),(i&130023424)===i&&(e=Ym+500-Qt(),10<e)){if(ef(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){kn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Pp($s.bind(null,t,jn,Dr),e);break}$s(t,jn,Dr);break;case 4:if(ps(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var l=31-er(i);o=1<<l,l=e[l],l>s&&(s=l),i&=~o}if(i=s,i=Qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QL(i/1960))-i,10<i){t.timeoutHandle=Pp($s.bind(null,t,jn,Dr),i);break}$s(t,jn,Dr);break;case 5:$s(t,jn,Dr);break;default:throw Error(pe(329))}}}return Jn(t,Qt()),t.callbackNode===n?tM.bind(null,t):null}function Kp(t,e){var n=Dl;return t.current.memoizedState.isDehydrated&&(ro(t,e).flags|=256),t=xf(t,e),t!==2&&(e=jn,jn=n,e!==null&&Zp(e)),t}function Zp(t){jn===null?jn=t:jn.push.apply(jn,t)}function JL(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!nr(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ps(t,e){for(e&=~qm,e&=~If,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),i=1<<n;t[n]=-1,e&=~i}}function P0(t){if(St&6)throw Error(pe(327));Ea();var e=ef(t,0);if(!(e&1))return Jn(t,Qt()),null;var n=xf(t,e);if(t.tag!==0&&n===2){var i=Mp(t);i!==0&&(e=i,n=Kp(t,i))}if(n===1)throw n=Ql,ro(t,0),ps(t,e),Jn(t,Qt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$s(t,jn,Dr),Jn(t,Qt()),null}function jm(t,e){var n=St;St|=1;try{return t(e)}finally{St=n,St===0&&(Da=Qt()+500,Pf&&Is())}}function mo(t){gs!==null&&gs.tag===0&&!(St&6)&&Ea();var e=St;St|=1;var n=Fi.transition,i=wt;try{if(Fi.transition=null,wt=1,t)return t()}finally{wt=i,Fi.transition=n,St=e,!(St&6)&&Is()}}function $m(){fi=ma.current,Nt(ma)}function ro(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LL(n)),nn!==null)for(n=nn.return;n!==null;){var i=n;switch(Lm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&of();break;case 3:ba(),Nt(Zn),Nt(Dn),zm();break;case 5:Om(i);break;case 4:ba();break;case 13:Nt(Wt);break;case 19:Nt(Wt);break;case 10:Dm(i.type._context);break;case 22:case 23:$m()}n=n.return}if(gn=t,nn=t=As(t.current,null),Mn=fi=e,un=0,Ql=null,qm=If=po=0,jn=Dl=null,to!==null){for(e=0;e<to.length;e++)if(n=to[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,i.next=l}n.pending=i}to=null}return t}function nM(t,e){do{var n=nn;try{if(Um(),Vc.current=mf,pf){for(var i=Xt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}pf=!1}if(ho=0,mn=ln=Xt=null,bl=!1,$l=0,Xm.current=null,n===null||n.return===null){un=1,Ql=e,nn=null;break}e:{var o=t,l=n.return,u=n,f=e;if(e=Mn,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,p=u,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=_0(l);if(x!==null){x.flags&=-257,v0(x,l,u,o,e),x.mode&1&&g0(o,d,e),e=x,f=d;var E=e.updateQueue;if(E===null){var T=new Set;T.add(f),e.updateQueue=T}else E.add(f);break e}else{if(!(e&1)){g0(o,d,e),Km();break e}f=Error(pe(426))}}else if(Bt&&u.mode&1){var v=_0(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),v0(v,l,u,o,e),Pm(Ua(f,u));break e}}o=f=Ua(f,u),un!==4&&(un=2),Dl===null?Dl=[o]:Dl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=By(o,f,e);u0(o,h);break e;case 1:u=f;var y=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ts===null||!Ts.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=ky(o,u,e);u0(o,w);break e}}o=o.return}while(o!==null)}sM(n)}catch(P){e=P,nn===n&&n!==null&&(nn=n=n.return);continue}break}while(1)}function iM(){var t=gf.current;return gf.current=mf,t===null?mf:t}function Km(){(un===0||un===3||un===2)&&(un=4),gn===null||!(po&268435455)&&!(If&268435455)||ps(gn,Mn)}function xf(t,e){var n=St;St|=2;var i=iM();(gn!==t||Mn!==e)&&(Dr=null,ro(t,e));do try{eP();break}catch(s){nM(t,s)}while(1);if(Um(),St=n,gf.current=i,nn!==null)throw Error(pe(261));return gn=null,Mn=0,un}function eP(){for(;nn!==null;)rM(nn)}function tP(){for(;nn!==null&&!A2();)rM(nn)}function rM(t){var e=aM(t.alternate,t,fi);t.memoizedProps=t.pendingProps,e===null?sM(t):nn=e,Xm.current=null}function sM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jL(n,e),n!==null){n.flags&=32767,nn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,nn=null;return}}else if(n=YL(n,e,fi),n!==null){nn=n;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=t}while(e!==null);un===0&&(un=5)}function $s(t,e,n){var i=wt,s=Fi.transition;try{Fi.transition=null,wt=1,nP(t,e,n,i)}finally{Fi.transition=s,wt=i}return null}function nP(t,e,n,i){do Ea();while(gs!==null);if(St&6)throw Error(pe(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(F2(t,o),t===gn&&(nn=gn=null,Mn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,lM(Jc,function(){return Ea(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fi.transition,Fi.transition=null;var l=wt;wt=1;var u=St;St|=4,Xm.current=null,KL(t,n),Jy(n,t),ML(Cp),tf=!!Rp,Cp=Rp=null,t.current=n,ZL(n),R2(),St=u,wt=l,Fi.transition=o}else t.current=n;if(hc&&(hc=!1,gs=t,vf=s),o=t.pendingLanes,o===0&&(Ts=null),P2(n.stateNode),Jn(t,Qt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(_f)throw _f=!1,t=jp,jp=null,t;return vf&1&&t.tag!==0&&Ea(),o=t.pendingLanes,o&1?t===$p?Il++:(Il=0,$p=t):Il=0,Is(),null}function Ea(){if(gs!==null){var t=zS(vf),e=Fi.transition,n=wt;try{if(Fi.transition=null,wt=16>t?16:t,gs===null)var i=!1;else{if(t=gs,gs=null,vf=0,St&6)throw Error(pe(331));var s=St;for(St|=4,Le=t.current;Le!==null;){var o=Le,l=o.child;if(Le.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Le=d;Le!==null;){var p=Le;switch(p.tag){case 0:case 11:case 15:Ul(8,p,o)}var g=p.child;if(g!==null)g.return=p,Le=g;else for(;Le!==null;){p=Le;var _=p.sibling,x=p.return;if(Ky(p),p===d){Le=null;break}if(_!==null){_.return=x,Le=_;break}Le=x}}}var E=o.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}Le=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Le=l;else e:for(;Le!==null;){if(o=Le,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ul(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Le=h;break e}Le=o.return}}var y=t.current;for(Le=y;Le!==null;){l=Le;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,Le=S;else e:for(l=y;Le!==null;){if(u=Le,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Df(9,u)}}catch(P){$t(u,u.return,P)}if(u===l){Le=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,Le=w;break e}Le=u.return}}if(St=s,Is(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(wf,t)}catch{}i=!0}return i}finally{wt=n,Fi.transition=e}}return!1}function b0(t,e,n){e=Ua(n,e),e=By(t,e,1),t=Es(t,e,1),e=kn(),t!==null&&(nu(t,1,e),Jn(t,e))}function $t(t,e,n){if(t.tag===3)b0(t,t,n);else for(;e!==null;){if(e.tag===3){b0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))){t=Ua(n,t),t=ky(e,t,1),e=Es(e,t,1),t=kn(),e!==null&&(nu(e,1,t),Jn(e,t));break}}e=e.return}}function iP(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=kn(),t.pingedLanes|=t.suspendedLanes&n,gn===t&&(Mn&n)===n&&(un===4||un===3&&(Mn&130023424)===Mn&&500>Qt()-Ym?ro(t,0):qm|=n),Jn(t,e)}function oM(t,e){e===0&&(t.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var n=kn();t=qr(t,e),t!==null&&(nu(t,e,n),Jn(t,n))}function rP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),oM(t,n)}function sP(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),oM(t,n)}var aM;aM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kn=!1,qL(t,e,n);Kn=!!(t.flags&131072)}else Kn=!1,Bt&&e.flags&1048576&&cy(e,uf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xc(t,e),t=e.pendingProps;var s=Ca(e,Dn.current);Ma(e,n),s=km(null,e,i,t,s,n);var o=Hm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(o=!0,af(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Nm(e),s.updater=bf,e.stateNode=s,s._reactInternals=e,Op(e,i,t,n),e=kp(null,e,i,!0,o,n)):(e.tag=0,Bt&&o&&Cm(e),zn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xc(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=aP(i),t=ji(i,t),s){case 0:e=Bp(null,e,i,t,n);break e;case 1:e=y0(null,e,i,t,n);break e;case 11:e=x0(null,e,i,t,n);break e;case 14:e=S0(null,e,i,ji(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ji(i,s),Bp(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ji(i,s),y0(t,e,i,s,n);case 3:e:{if(Wy(e),t===null)throw Error(pe(387));i=e.pendingProps,o=e.memoizedState,s=o.element,py(t,e),df(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Ua(Error(pe(423)),e),e=M0(t,e,i,n,s);break e}else if(i!==s){s=Ua(Error(pe(424)),e),e=M0(t,e,i,n,s);break e}else for(di=Ms(e.stateNode.containerInfo.firstChild),hi=e,Bt=!0,Ki=null,n=vy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(La(),i===s){e=Yr(t,e,n);break e}zn(t,e,i,n)}e=e.child}return e;case 5:return xy(e),t===null&&Ip(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,Lp(i,s)?l=null:o!==null&&Lp(i,o)&&(e.flags|=32),Vy(t,e),zn(t,e,l,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return Xy(t,e,n);case 4:return Fm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Pa(e,null,i,n):zn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ji(i,s),x0(t,e,i,s,n);case 7:return zn(t,e,e.pendingProps,n),e.child;case 8:return zn(t,e,e.pendingProps.children,n),e.child;case 12:return zn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,l=s.value,bt(cf,i._currentValue),i._currentValue=l,o!==null)if(nr(o.value,l)){if(o.children===s.children&&!Zn.current){e=Yr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=Hr(-1,n&-n),f.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?f.next=f:(f.next=p.next,p.next=f),d.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),Np(o.return,n,e),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(pe(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Np(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}zn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,Ma(e,n),s=Oi(s),i=i(s),e.flags|=1,zn(t,e,i,n),e.child;case 14:return i=e.type,s=ji(i,e.pendingProps),s=ji(i.type,s),S0(t,e,i,s,n);case 15:return Hy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ji(i,s),Xc(t,e),e.tag=1,Qn(i)?(t=!0,af(e)):t=!1,Ma(e,n),gy(e,i,s),Op(e,i,s,n),kp(null,e,i,!0,t,n);case 19:return qy(t,e,n);case 22:return Gy(t,e,n)}throw Error(pe(156,e.tag))};function lM(t,e){return IS(t,e)}function oP(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(t,e,n,i){return new oP(t,e,n,i)}function Zm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aP(t){if(typeof t=="function")return Zm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gm)return 11;if(t===_m)return 14}return 2}function As(t,e){var n=t.alternate;return n===null?(n=Ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jc(t,e,n,i,s,o){var l=2;if(i=t,typeof t=="function")Zm(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case sa:return so(n.children,s,o,e);case mm:l=8,s|=8;break;case ap:return t=Ni(12,n,e,s|2),t.elementType=ap,t.lanes=o,t;case lp:return t=Ni(13,n,e,s),t.elementType=lp,t.lanes=o,t;case up:return t=Ni(19,n,e,s),t.elementType=up,t.lanes=o,t;case _S:return Nf(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mS:l=10;break e;case gS:l=9;break e;case gm:l=11;break e;case _m:l=14;break e;case fs:l=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Ni(l,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function so(t,e,n,i){return t=Ni(7,t,i,e),t.lanes=n,t}function Nf(t,e,n,i){return t=Ni(22,t,i,e),t.elementType=_S,t.lanes=n,t.stateNode={isHidden:!1},t}function Rh(t,e,n){return t=Ni(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lP(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lh(0),this.expirationTimes=lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lh(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qm(t,e,n,i,s,o,l,u,f){return t=new lP(t,e,n,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ni(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nm(o),t}function uP(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ra,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function uM(t){if(!t)return Ps;t=t._reactInternals;e:{if(xo(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(Qn(n))return ly(t,n,e)}return e}function cM(t,e,n,i,s,o,l,u,f){return t=Qm(n,i,!0,t,s,o,l,u,f),t.context=uM(null),n=t.current,i=kn(),s=ws(n),o=Hr(i,s),o.callback=e??null,Es(n,o,s),t.current.lanes=s,nu(t,s,i),Jn(t,i),t}function Ff(t,e,n,i){var s=e.current,o=kn(),l=ws(s);return n=uM(n),e.context===null?e.context=n:e.pendingContext=n,e=Hr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Es(s,e,l),t!==null&&(tr(t,s,l,o),Gc(t,s,l)),l}function Sf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jm(t,e){U0(t,e),(t=t.alternate)&&U0(t,e)}function cP(){return null}var fM=typeof reportError=="function"?reportError:function(t){console.error(t)};function eg(t){this._internalRoot=t}Of.prototype.render=eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Ff(t,e,null,null)};Of.prototype.unmount=eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mo(function(){Ff(null,t,null,null)}),e[Xr]=null}};function Of(t){this._internalRoot=t}Of.prototype.unstable_scheduleHydration=function(t){if(t){var e=HS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hs.length&&e!==0&&e<hs[n].priority;n++);hs.splice(n,0,t),n===0&&VS(t)}};function tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function fP(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=Sf(l);o.call(d)}}var l=cM(e,i,t,0,null,!1,!1,"",D0);return t._reactRootContainer=l,t[Xr]=l.current,Wl(t.nodeType===8?t.parentNode:t),mo(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var d=Sf(f);u.call(d)}}var f=Qm(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=f,t[Xr]=f.current,Wl(t.nodeType===8?t.parentNode:t),mo(function(){Ff(e,f,n,i)}),f}function Bf(t,e,n,i,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var u=s;s=function(){var f=Sf(l);u.call(f)}}Ff(e,l,t,s)}else l=fP(n,e,t,s,i);return Sf(l)}BS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=El(e.pendingLanes);n!==0&&(Sm(e,n|1),Jn(e,Qt()),!(St&6)&&(Da=Qt()+500,Is()))}break;case 13:mo(function(){var i=qr(t,1);if(i!==null){var s=kn();tr(i,t,1,s)}}),Jm(t,1)}};ym=function(t){if(t.tag===13){var e=qr(t,134217728);if(e!==null){var n=kn();tr(e,t,134217728,n)}Jm(t,134217728)}};kS=function(t){if(t.tag===13){var e=ws(t),n=qr(t,e);if(n!==null){var i=kn();tr(n,t,e,i)}Jm(t,e)}};HS=function(){return wt};GS=function(t,e){var n=wt;try{return wt=t,e()}finally{wt=n}};xp=function(t,e,n){switch(e){case"input":if(dp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Lf(i);if(!s)throw Error(pe(90));xS(i),dp(i,s)}}}break;case"textarea":yS(t,n);break;case"select":e=n.value,e!=null&&va(t,!!n.multiple,e,!1)}};CS=jm;LS=mo;var dP={usingClientEntryPoint:!1,Events:[ru,ua,Lf,AS,RS,jm]},gl={findFiberByHostInstance:eo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hP={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=US(t),t===null?null:t.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||cP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{wf=pc.inject(hP),cr=pc}catch{}}vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dP;vi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(pe(200));return uP(t,e,null,n)};vi.createRoot=function(t,e){if(!tg(t))throw Error(pe(299));var n=!1,i="",s=fM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qm(t,1,!1,null,null,n,!1,i,s),t[Xr]=e.current,Wl(t.nodeType===8?t.parentNode:t),new eg(e)};vi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=US(e),t=t===null?null:t.stateNode,t};vi.flushSync=function(t){return mo(t)};vi.hydrate=function(t,e,n){if(!zf(e))throw Error(pe(200));return Bf(null,t,e,!0,n)};vi.hydrateRoot=function(t,e,n){if(!tg(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",l=fM;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=cM(e,null,t,1,n??null,s,!1,o,l),t[Xr]=e.current,Wl(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Of(e)};vi.render=function(t,e,n){if(!zf(e))throw Error(pe(200));return Bf(null,t,e,!1,n)};vi.unmountComponentAtNode=function(t){if(!zf(t))throw Error(pe(40));return t._reactRootContainer?(mo(function(){Bf(null,null,t,!1,function(){t._reactRootContainer=null,t[Xr]=null})}),!0):!1};vi.unstable_batchedUpdates=jm;vi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zf(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Bf(t,e,n,!1,i)};vi.version="18.2.0-next-9e3b772b8-20220608";function dM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dM)}catch(t){console.error(t)}}dM(),cS.exports=vi;var pP=cS.exports;const mP=Qx(pP);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ng="154",gP=0,I0=1,_P=2,hM=1,vP=2,Ur=3,bs=0,ei=1,Nr=2,Rs=0,Ta=1,N0=2,F0=3,O0=4,xP=5,ia=100,SP=101,yP=102,z0=103,B0=104,MP=200,EP=201,TP=202,wP=203,pM=204,mM=205,AP=206,RP=207,CP=208,LP=209,PP=210,bP=0,UP=1,DP=2,Qp=3,IP=4,NP=5,FP=6,OP=7,gM=0,zP=1,BP=2,Gr=0,kP=1,HP=2,GP=3,VP=4,WP=5,_M=300,Ia=301,Na=302,Jp=303,em=304,kf=306,tm=1e3,Qi=1001,nm=1002,Bn=1003,k0=1004,Lh=1005,Di=1006,XP=1007,Jl=1008,Cs=1009,qP=1010,YP=1011,ig=1012,vM=1013,_s=1014,vs=1015,eu=1016,xM=1017,SM=1018,oo=1020,jP=1021,Ji=1023,$P=1024,KP=1025,ao=1026,Fa=1027,ZP=1028,yM=1029,QP=1030,MM=1031,EM=1033,Ph=33776,bh=33777,Uh=33778,Dh=33779,H0=35840,G0=35841,V0=35842,W0=35843,JP=36196,X0=37492,q0=37496,Y0=37808,j0=37809,$0=37810,K0=37811,Z0=37812,Q0=37813,J0=37814,ex=37815,tx=37816,nx=37817,ix=37818,rx=37819,sx=37820,ox=37821,Ih=36492,eb=36283,ax=36284,lx=36285,ux=36286,TM=3e3,lo=3001,tb=3200,nb=3201,ib=0,rb=1,uo="",ot="srgb",dr="srgb-linear",wM="display-p3",Nh=7680,sb=519,ob=512,ab=513,lb=514,ub=515,cb=516,fb=517,db=518,hb=519,cx=35044,fx="300 es",im=1035,zr=2e3,yf=2001;class Ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,rm=180/Math.PI;function ou(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function $n(t,e,n){return Math.max(e,Math.min(n,t))}function pb(t,e){return(t%e+e)%e}function Oh(t,e,n){return(1-n)*t+n*e}function dx(t){return(t&t-1)===0&&t!==0}function sm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*s+e.x,this.y=o*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,i,s,o,l,u,f,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d)}set(e,n,i,s,o,l,u,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=n,p[4]=o,p[5]=f,p[6]=i,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],p=i[4],g=i[7],_=i[2],x=i[5],E=i[8],T=s[0],v=s[3],h=s[6],y=s[1],S=s[4],w=s[7],P=s[2],N=s[5],D=s[8];return o[0]=l*T+u*y+f*P,o[3]=l*v+u*S+f*N,o[6]=l*h+u*w+f*D,o[1]=d*T+p*y+g*P,o[4]=d*v+p*S+g*N,o[7]=d*h+p*w+g*D,o[2]=_*T+x*y+E*P,o[5]=_*v+x*S+E*N,o[8]=_*h+x*w+E*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return n*l*p-n*u*d-i*o*p+i*u*f+s*o*d-s*l*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=p*l-u*d,_=u*f-p*o,x=d*o-l*f,E=n*g+i*_+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(s*d-p*i)*T,e[2]=(u*i-s*l)*T,e[3]=_*T,e[4]=(p*n-s*f)*T,e[5]=(s*o-u*n)*T,e[6]=x*T,e[7]=(i*f-d*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,o,l,u){const f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(zh.makeScale(e,n)),this}rotate(e){return this.premultiply(zh.makeRotation(-e)),this}translate(e,n){return this.premultiply(zh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new ct;function AM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const hx={};function Nl(t){t in hx||(hx[t]=!0,console.warn(t))}function wa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const mb=new ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gb=new ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function _b(t){return t.convertSRGBToLinear().applyMatrix3(gb)}function vb(t){return t.applyMatrix3(mb).convertLinearToSRGB()}const xb={[dr]:t=>t,[ot]:t=>t.convertSRGBToLinear(),[wM]:_b},Sb={[dr]:t=>t,[ot]:t=>t.convertLinearToSRGB(),[wM]:vb},Wi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return dr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xb[e],s=Sb[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ho;class RM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=Mf("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=wa(o[l]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wa(n[i]/255)*255):n[i]=wa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yb=0;class CM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=ou(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(kh(s[l].image)):o.push(kh(s[l]))}else o=kh(s);i.url=o}return n||(e.images[this.uuid]=i),i}}function kh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mb=0;class pi extends Ha{constructor(e=pi.DEFAULT_IMAGE,n=pi.DEFAULT_MAPPING,i=Qi,s=Qi,o=Di,l=Jl,u=Ji,f=Cs,d=pi.DEFAULT_ANISOTROPY,p=uo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ou(),this.name="",this.source=new CM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===lo?ot:uo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_M)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tm:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tm:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?lo:TM}set encoding(e){Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lo?ot:uo}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=_M;pi.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,n=0,i=0,s=1){yn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*s+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,o;const f=e.elements,d=f[0],p=f[4],g=f[8],_=f[1],x=f[5],E=f[9],T=f[2],v=f[6],h=f[10];if(Math.abs(p-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+v)<.1&&Math.abs(d+x+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,w=(x+1)/2,P=(h+1)/2,N=(p+_)/4,D=(g+T)/4,H=(E+v)/4;return S>w&&S>P?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=N/i,o=D/i):w>P?w<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),i=N/s,o=H/s):P<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(P),i=D/o,s=H/o),this.set(i,s,o,n),this}let y=Math.sqrt((v-E)*(v-E)+(g-T)*(g-T)+(_-p)*(_-p));return Math.abs(y)<.001&&(y=1),this.x=(v-E)/y,this.y=(g-T)/y,this.z=(_-p)/y,this.w=Math.acos((d+x+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class go extends Ha{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yn(0,0,e,n),this.scissorTest=!1,this.viewport=new yn(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Nl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lo?ot:uo),this.texture=new pi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new CM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class LM extends pi{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eb extends pi{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,o,l,u){let f=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3];const _=o[l+0],x=o[l+1],E=o[l+2],T=o[l+3];if(u===0){e[n+0]=f,e[n+1]=d,e[n+2]=p,e[n+3]=g;return}if(u===1){e[n+0]=_,e[n+1]=x,e[n+2]=E,e[n+3]=T;return}if(g!==T||f!==_||d!==x||p!==E){let v=1-u;const h=f*_+d*x+p*E+g*T,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const P=Math.sqrt(S),N=Math.atan2(P,h*y);v=Math.sin(v*N)/P,u=Math.sin(u*N)/P}const w=u*y;if(f=f*v+_*w,d=d*v+x*w,p=p*v+E*w,g=g*v+T*w,v===1-u){const P=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=P,d*=P,p*=P,g*=P}}e[n]=f,e[n+1]=d,e[n+2]=p,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,s,o,l){const u=i[s],f=i[s+1],d=i[s+2],p=i[s+3],g=o[l],_=o[l+1],x=o[l+2],E=o[l+3];return e[n]=u*E+p*g+f*x-d*_,e[n+1]=f*E+p*_+d*g-u*x,e[n+2]=d*E+p*x+u*_-f*g,e[n+3]=p*E-u*g-f*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(s/2),g=u(o/2),_=f(i/2),x=f(s/2),E=f(o/2);switch(l){case"XYZ":this._x=_*p*g+d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g-_*x*E;break;case"YXZ":this._x=_*p*g+d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g+_*x*E;break;case"ZXY":this._x=_*p*g-d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g-_*x*E;break;case"ZYX":this._x=_*p*g-d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g+_*x*E;break;case"YZX":this._x=_*p*g+d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g-_*x*E;break;case"XZY":this._x=_*p*g-d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],u=n[5],f=n[9],d=n[2],p=n[6],g=n[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-f)*x,this._y=(o-d)*x,this._z=(l-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(p-f)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(o-d)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(l-s)/x,this._x=(o+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,o=e._z,l=e._w,u=n._x,f=n._y,d=n._z,p=n._w;return this._x=i*p+l*u+s*d-o*f,this._y=s*p+l*f+o*u-i*d,this._z=o*p+l*d+i*f-s*u,this._w=l*p-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-n;return this._w=x*l+n*this._w,this._x=x*i+n*this._x,this._y=x*s+n*this._y,this._z=x*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),g=Math.sin((1-n)*p)/d,_=Math.sin(n*p)/d;return this._w=l*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(o),i*Math.cos(o),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(px.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(px.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*s,this.y=o[1]*n+o[4]*i+o[7]*s,this.z=o[2]*n+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,o=e.x,l=e.y,u=e.z,f=e.w,d=f*n+l*s-u*i,p=f*i+u*n-o*s,g=f*s+o*i-l*n,_=-o*n-l*i-u*s;return this.x=d*f+_*-o+p*-u-g*-l,this.y=p*f+_*-l+g*-o-d*-u,this.z=g*f+_*-u+d*-l-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s,this.y=o[1]*n+o[5]*i+o[9]*s,this.z=o[2]*n+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,o=e.z,l=n.x,u=n.y,f=n.z;return this.x=s*f-o*u,this.y=o*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new Z,px=new au;class lu{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ar.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ar.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ar.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const o=s.attributes.position;for(let l=0,u=o.count;l<u;l++)Ar.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Ar)}else s.boundingBox===null&&s.computeBoundingBox(),Go.copy(s.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),gc.subVectors(this.max,_l),Vo.subVectors(e.a,_l),Wo.subVectors(e.b,_l),Xo.subVectors(e.c,_l),as.subVectors(Wo,Vo),ls.subVectors(Xo,Wo),Ws.subVectors(Vo,Xo);let n=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ws.z,Ws.y,as.z,0,-as.x,ls.z,0,-ls.x,Ws.z,0,-Ws.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ws.y,Ws.x,0];return!Gh(n,Vo,Wo,Xo,gc)||(n=[1,0,0,0,1,0,0,0,1],!Gh(n,Vo,Wo,Xo,gc))?!1:(_c.crossVectors(as,ls),n=[_c.x,_c.y,_c.z],Gh(n,Vo,Wo,Xo,gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ar=new Z,Go=new lu,Vo=new Z,Wo=new Z,Xo=new Z,as=new Z,ls=new Z,Ws=new Z,_l=new Z,gc=new Z,_c=new Z,Xs=new Z;function Gh(t,e,n,i,s){for(let o=0,l=t.length-3;o<=l;o+=3){Xs.fromArray(t,o);const u=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),f=e.dot(Xs),d=n.dot(Xs),p=i.dot(Xs);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const Tb=new lu,vl=new Z,Vh=new Z;class rg{constructor(e=new Z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Tb.setFromPoints(e).getCenter(i);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Vh)),this.expandByPoint(vl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rr=new Z,Wh=new Z,vc=new Z,us=new Z,Xh=new Z,xc=new Z,qh=new Z;class wb{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,n),Rr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Wh.copy(e).add(n).multiplyScalar(.5),vc.copy(n).sub(e).normalize(),us.copy(this.origin).sub(Wh);const o=e.distanceTo(n)*.5,l=-this.direction.dot(vc),u=us.dot(this.direction),f=-us.dot(vc),d=us.lengthSq(),p=Math.abs(1-l*l);let g,_,x,E;if(p>0)if(g=l*f-u,_=l*u-f,E=o*p,g>=0)if(_>=-E)if(_<=E){const T=1/p;g*=T,_*=T,x=g*(g+l*_+2*u)+_*(l*g+_+2*f)+d}else _=o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;else _=-o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;else _<=-E?(g=Math.max(0,-(-l*o+u)),_=g>0?-o:Math.min(Math.max(-o,-f),o),x=-g*g+_*(_+2*f)+d):_<=E?(g=0,_=Math.min(Math.max(-o,-f),o),x=_*(_+2*f)+d):(g=Math.max(0,-(l*o+u)),_=g>0?o:Math.min(Math.max(-o,-f),o),x=-g*g+_*(_+2*f)+d);else _=l>0?-o:o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Wh).addScaledVector(vc,_),x}intersectSphere(e,n){Rr.subVectors(e.center,this.origin);const i=Rr.dot(this.direction),s=Rr.dot(Rr)-i*i,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,o,l,u,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,l=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,l=(e.min.y-_.y)*p),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,n,i,s,o){Xh.subVectors(n,e),xc.subVectors(i,e),qh.crossVectors(Xh,xc);let l=this.direction.dot(qh),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;us.subVectors(this.origin,e);const f=u*this.direction.dot(xc.crossVectors(us,xc));if(f<0)return null;const d=u*this.direction.dot(Xh.cross(us));if(d<0||f+d>l)return null;const p=-u*us.dot(qh);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v)}set(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=o,h[5]=l,h[9]=u,h[13]=f,h[2]=d,h[6]=p,h[10]=g,h[14]=_,h[3]=x,h[7]=E,h[11]=T,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/qo.setFromMatrixColumn(e,0).length(),o=1/qo.setFromMatrixColumn(e,1).length(),l=1/qo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*p,x=l*g,E=u*p,T=u*g;n[0]=f*p,n[4]=-f*g,n[8]=d,n[1]=x+E*d,n[5]=_-T*d,n[9]=-u*f,n[2]=T-_*d,n[6]=E+x*d,n[10]=l*f}else if(e.order==="YXZ"){const _=f*p,x=f*g,E=d*p,T=d*g;n[0]=_+T*u,n[4]=E*u-x,n[8]=l*d,n[1]=l*g,n[5]=l*p,n[9]=-u,n[2]=x*u-E,n[6]=T+_*u,n[10]=l*f}else if(e.order==="ZXY"){const _=f*p,x=f*g,E=d*p,T=d*g;n[0]=_-T*u,n[4]=-l*g,n[8]=E+x*u,n[1]=x+E*u,n[5]=l*p,n[9]=T-_*u,n[2]=-l*d,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const _=l*p,x=l*g,E=u*p,T=u*g;n[0]=f*p,n[4]=E*d-x,n[8]=_*d+T,n[1]=f*g,n[5]=T*d+_,n[9]=x*d-E,n[2]=-d,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const _=l*f,x=l*d,E=u*f,T=u*d;n[0]=f*p,n[4]=T-_*g,n[8]=E*g+x,n[1]=g,n[5]=l*p,n[9]=-u*p,n[2]=-d*p,n[6]=x*g+E,n[10]=_-T*g}else if(e.order==="XZY"){const _=l*f,x=l*d,E=u*f,T=u*d;n[0]=f*p,n[4]=-g,n[8]=d*p,n[1]=_*g+T,n[5]=l*p,n[9]=x*g-E,n[2]=E*g-x,n[6]=u*p,n[10]=T*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ab,e,Rb)}lookAt(e,n,i){const s=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),cs.crossVectors(i,ui),cs.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),cs.crossVectors(i,ui)),cs.normalize(),Sc.crossVectors(ui,cs),s[0]=cs.x,s[4]=Sc.x,s[8]=ui.x,s[1]=cs.y,s[5]=Sc.y,s[9]=ui.y,s[2]=cs.z,s[6]=Sc.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],p=i[1],g=i[5],_=i[9],x=i[13],E=i[2],T=i[6],v=i[10],h=i[14],y=i[3],S=i[7],w=i[11],P=i[15],N=s[0],D=s[4],H=s[8],C=s[12],U=s[1],oe=s[5],de=s[9],Y=s[13],J=s[2],ie=s[6],fe=s[10],ee=s[14],B=s[3],te=s[7],j=s[11],V=s[15];return o[0]=l*N+u*U+f*J+d*B,o[4]=l*D+u*oe+f*ie+d*te,o[8]=l*H+u*de+f*fe+d*j,o[12]=l*C+u*Y+f*ee+d*V,o[1]=p*N+g*U+_*J+x*B,o[5]=p*D+g*oe+_*ie+x*te,o[9]=p*H+g*de+_*fe+x*j,o[13]=p*C+g*Y+_*ee+x*V,o[2]=E*N+T*U+v*J+h*B,o[6]=E*D+T*oe+v*ie+h*te,o[10]=E*H+T*de+v*fe+h*j,o[14]=E*C+T*Y+v*ee+h*V,o[3]=y*N+S*U+w*J+P*B,o[7]=y*D+S*oe+w*ie+P*te,o[11]=y*H+S*de+w*fe+P*j,o[15]=y*C+S*Y+w*ee+P*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],o=e[12],l=e[1],u=e[5],f=e[9],d=e[13],p=e[2],g=e[6],_=e[10],x=e[14],E=e[3],T=e[7],v=e[11],h=e[15];return E*(+o*f*g-s*d*g-o*u*_+i*d*_+s*u*x-i*f*x)+T*(+n*f*x-n*d*_+o*l*_-s*l*x+s*d*p-o*f*p)+v*(+n*d*g-n*u*x-o*l*g+i*l*x+o*u*p-i*d*p)+h*(-s*u*p-n*f*g+n*u*_+s*l*g-i*l*_+i*f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=e[9],_=e[10],x=e[11],E=e[12],T=e[13],v=e[14],h=e[15],y=g*v*d-T*_*d+T*f*x-u*v*x-g*f*h+u*_*h,S=E*_*d-p*v*d-E*f*x+l*v*x+p*f*h-l*_*h,w=p*T*d-E*g*d+E*u*x-l*T*x-p*u*h+l*g*h,P=E*g*f-p*T*f-E*u*_+l*T*_+p*u*v-l*g*v,N=n*y+i*S+s*w+o*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=y*D,e[1]=(T*_*o-g*v*o-T*s*x+i*v*x+g*s*h-i*_*h)*D,e[2]=(u*v*o-T*f*o+T*s*d-i*v*d-u*s*h+i*f*h)*D,e[3]=(g*f*o-u*_*o-g*s*d+i*_*d+u*s*x-i*f*x)*D,e[4]=S*D,e[5]=(p*v*o-E*_*o+E*s*x-n*v*x-p*s*h+n*_*h)*D,e[6]=(E*f*o-l*v*o-E*s*d+n*v*d+l*s*h-n*f*h)*D,e[7]=(l*_*o-p*f*o+p*s*d-n*_*d-l*s*x+n*f*x)*D,e[8]=w*D,e[9]=(E*g*o-p*T*o-E*i*x+n*T*x+p*i*h-n*g*h)*D,e[10]=(l*T*o-E*u*o+E*i*d-n*T*d-l*i*h+n*u*h)*D,e[11]=(p*u*o-l*g*o-p*i*d+n*g*d+l*i*x-n*u*x)*D,e[12]=P*D,e[13]=(p*T*s-E*g*s+E*i*_-n*T*_-p*i*v+n*g*v)*D,e[14]=(E*u*s-l*T*s-E*i*f+n*T*f+l*i*v-n*u*v)*D,e[15]=(l*g*s-p*u*s+p*i*f-n*g*f-l*i*_+n*u*_)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,o=e.z;return n[0]*=i,n[4]*=s,n[8]*=o,n[1]*=i,n[5]*=s,n[9]*=o,n[2]*=i,n[6]*=s,n[10]*=o,n[3]*=i,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),o=1-i,l=e.x,u=e.y,f=e.z,d=o*l,p=o*u;return this.set(d*l+i,d*u-s*f,d*f+s*u,0,d*u+s*f,p*u+i,p*f-s*l,0,d*f-s*u,p*f+s*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,o,l){return this.set(1,i,o,0,e,1,l,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,o=n._x,l=n._y,u=n._z,f=n._w,d=o+o,p=l+l,g=u+u,_=o*d,x=o*p,E=o*g,T=l*p,v=l*g,h=u*g,y=f*d,S=f*p,w=f*g,P=i.x,N=i.y,D=i.z;return s[0]=(1-(T+h))*P,s[1]=(x+w)*P,s[2]=(E-S)*P,s[3]=0,s[4]=(x-w)*N,s[5]=(1-(_+h))*N,s[6]=(v+y)*N,s[7]=0,s[8]=(E+S)*D,s[9]=(v-y)*D,s[10]=(1-(_+T))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let o=qo.set(s[0],s[1],s[2]).length();const l=qo.set(s[4],s[5],s[6]).length(),u=qo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Xi.copy(this);const d=1/o,p=1/l,g=1/u;return Xi.elements[0]*=d,Xi.elements[1]*=d,Xi.elements[2]*=d,Xi.elements[4]*=p,Xi.elements[5]*=p,Xi.elements[6]*=p,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),i.x=o,i.y=l,i.z=u,this}makePerspective(e,n,i,s,o,l,u=zr){const f=this.elements,d=2*o/(n-e),p=2*o/(i-s),g=(n+e)/(n-e),_=(i+s)/(i-s);let x,E;if(u===zr)x=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(u===yf)x=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,o,l,u=zr){const f=this.elements,d=1/(n-e),p=1/(i-s),g=1/(l-o),_=(n+e)*d,x=(i+s)*p;let E,T;if(u===zr)E=(l+o)*g,T=-2*g;else if(u===yf)E=o*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=T,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qo=new Z,Xi=new En,Ab=new Z(0,0,0),Rb=new Z(1,1,1),cs=new Z,Sc=new Z,ui=new Z,mx=new En,gx=new au;class Hf{constructor(e=0,n=0,i=0,s=Hf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],f=s[1],d=s[5],p=s[9],g=s[2],_=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin($n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin($n(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-$n(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-$n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gx.setFromEuler(this),this.setFromQuaternion(gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hf.DEFAULT_ORDER="XYZ";class PM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cb=0;const _x=new Z,Yo=new au,Cr=new En,yc=new Z,xl=new Z,Lb=new Z,Pb=new au,vx=new Z(1,0,0),xx=new Z(0,1,0),Sx=new Z(0,0,1),bb={type:"added"},yx={type:"removed"};class mi extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new Z,n=new Hf,i=new au,s=new Z(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new En},normalMatrix:{value:new ct}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new PM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yo.setFromAxisAngle(e,n),this.quaternion.multiply(Yo),this}rotateOnWorldAxis(e,n){return Yo.setFromAxisAngle(e,n),this.quaternion.premultiply(Yo),this}rotateX(e){return this.rotateOnAxis(vx,e)}rotateY(e){return this.rotateOnAxis(xx,e)}rotateZ(e){return this.rotateOnAxis(Sx,e)}translateOnAxis(e,n){return _x.copy(e).applyQuaternion(this.quaternion),this.position.add(_x.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vx,e)}translateY(e){return this.translateOnAxis(xx,e)}translateZ(e){return this.translateOnAxis(Sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yc.copy(e):yc.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(xl,yc,this.up):Cr.lookAt(yc,xl,this.up),this.quaternion.setFromRotationMatrix(Cr),s&&(Cr.extractRotation(s.matrixWorld),Yo.setFromRotationMatrix(Cr),this.quaternion.premultiply(Yo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(yx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,o=this.children.length;s<o;s++){const l=this.children[s].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,Lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,Pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++){const u=s[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];o(e.shapes,g)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(e.materials,this.material[f]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),g=l(e.shapes),_=l(e.skeletons),x=l(e.animations),E=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=s,i;function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mi.DEFAULT_UP=new Z(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new Z,Lr=new Z,Yh=new Z,Pr=new Z,jo=new Z,$o=new Z,Mx=new Z,jh=new Z,$h=new Z,Kh=new Z;let Mc=!1;class Zi{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),qi.subVectors(e,n),s.cross(qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,n,i,s,o){qi.subVectors(s,n),Lr.subVectors(i,n),Yh.subVectors(e,n);const l=qi.dot(qi),u=qi.dot(Lr),f=qi.dot(Yh),d=Lr.dot(Lr),p=Lr.dot(Yh),g=l*d-u*u;if(g===0)return o.set(-2,-1,-1);const _=1/g,x=(d*f-u*p)*_,E=(l*p-u*f)*_;return o.set(1-x-E,E,x)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Pr),Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getUV(e,n,i,s,o,l,u,f){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),this.getInterpolation(e,n,i,s,o,l,u,f)}static getInterpolation(e,n,i,s,o,l,u,f){return this.getBarycoord(e,n,i,s,Pr),f.setScalar(0),f.addScaledVector(o,Pr.x),f.addScaledVector(l,Pr.y),f.addScaledVector(u,Pr.z),f}static isFrontFacing(e,n,i,s){return qi.subVectors(i,n),Lr.subVectors(e,n),qi.cross(Lr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),qi.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,o){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),Zi.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}getInterpolation(e,n,i,s,o){return Zi.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,o=this.c;let l,u;jo.subVectors(s,i),$o.subVectors(o,i),jh.subVectors(e,i);const f=jo.dot(jh),d=$o.dot(jh);if(f<=0&&d<=0)return n.copy(i);$h.subVectors(e,s);const p=jo.dot($h),g=$o.dot($h);if(p>=0&&g<=p)return n.copy(s);const _=f*g-p*d;if(_<=0&&f>=0&&p<=0)return l=f/(f-p),n.copy(i).addScaledVector(jo,l);Kh.subVectors(e,o);const x=jo.dot(Kh),E=$o.dot(Kh);if(E>=0&&x<=E)return n.copy(o);const T=x*d-f*E;if(T<=0&&d>=0&&E<=0)return u=d/(d-E),n.copy(i).addScaledVector($o,u);const v=p*E-x*g;if(v<=0&&g-p>=0&&x-E>=0)return Mx.subVectors(o,s),u=(g-p)/(g-p+(x-E)),n.copy(s).addScaledVector(Mx,u);const h=1/(v+T+_);return l=T*h,u=_*h,n.copy(i).addScaledVector(jo,l).addScaledVector($o,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ub=0;class Gf extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=ou(),this.name="",this.type="Material",this.blending=Ta,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pM,this.blendDst=mM,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nh,this.stencilZFail=Nh,this.stencilZPass=Nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==bs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(n){const o=s(e.textures),l=s(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Zh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Wi.workingColorSpace){return this.r=e,this.g=n,this.b=i,Wi.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Wi.workingColorSpace){if(e=pb(e,1),n=$n(n,0,1),i=$n(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Zh(l,o,e+1/3),this.g=Zh(l,o,e),this.b=Zh(l,o,e-1/3)}return Wi.toWorkingColorSpace(this,s),this}setStyle(e,n=ot){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ot){const i=bM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Bh(e.r),this.g=Bh(e.g),this.b=Bh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Wi.fromWorkingColorSpace(bn.copy(this),e),Math.round($n(bn.r*255,0,255))*65536+Math.round($n(bn.g*255,0,255))*256+Math.round($n(bn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Wi.workingColorSpace){Wi.fromWorkingColorSpace(bn.copy(this),n);const i=bn.r,s=bn.g,o=bn.b,l=Math.max(i,s,o),u=Math.min(i,s,o);let f,d;const p=(u+l)/2;if(u===l)f=0,d=0;else{const g=l-u;switch(d=p<=.5?g/(l+u):g/(2-l-u),l){case i:f=(s-o)/g+(s<o?6:0);break;case s:f=(o-i)/g+2;break;case o:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,n=Wi.workingColorSpace){return Wi.fromWorkingColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ot){Wi.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,i=bn.g,s=bn.b;return e!==ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),Yi.h+=e,Yi.s+=n,Yi.l+=i,this.setHSL(Yi.h,Yi.s,Yi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Ec);const i=Oh(Yi.h,Ec.h,n),s=Oh(Yi.s,Ec.s,n),o=Oh(Yi.l,Ec.l,n);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*s,this.g=o[1]*n+o[4]*i+o[7]*s,this.b=o[2]*n+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Pt;Pt.NAMES=bM;class sg extends Gf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new Z,Tc=new Ct;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cx,this.updateRange={offset:0,count:-1},this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tc.fromBufferAttribute(this,n),Tc.applyMatrix3(e),this.setXY(n,Tc.x,Tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mc(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mc(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mc(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,o){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array),o=li(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class UM extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class DM extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vr extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Db=0;const Pi=new En,Qh=new mi,Ko=new Z,ci=new lu,Sl=new lu,pn=new Z;class jr extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=ou(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AM(e)?DM:UM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Vr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const o=n[i];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const u=n[o];Sl.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(ci.min,Sl.min),ci.expandByPoint(pn),pn.addVectors(ci.max,Sl.max),ci.expandByPoint(pn)):(ci.expandByPoint(Sl.min),ci.expandByPoint(Sl.max))}ci.getCenter(i);let s=0;for(let o=0,l=e.count;o<l;o++)pn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(pn));if(n)for(let o=0,l=n.length;o<l;o++){const u=n[o],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)pn.fromBufferAttribute(u,d),f&&(Ko.fromBufferAttribute(e,d),pn.add(Ko)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,o=n.normal.array,l=n.uv.array,u=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,d=[],p=[];for(let U=0;U<u;U++)d[U]=new Z,p[U]=new Z;const g=new Z,_=new Z,x=new Z,E=new Ct,T=new Ct,v=new Ct,h=new Z,y=new Z;function S(U,oe,de){g.fromArray(s,U*3),_.fromArray(s,oe*3),x.fromArray(s,de*3),E.fromArray(l,U*2),T.fromArray(l,oe*2),v.fromArray(l,de*2),_.sub(g),x.sub(g),T.sub(E),v.sub(E);const Y=1/(T.x*v.y-v.x*T.y);isFinite(Y)&&(h.copy(_).multiplyScalar(v.y).addScaledVector(x,-T.y).multiplyScalar(Y),y.copy(x).multiplyScalar(T.x).addScaledVector(_,-v.x).multiplyScalar(Y),d[U].add(h),d[oe].add(h),d[de].add(h),p[U].add(y),p[oe].add(y),p[de].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let U=0,oe=w.length;U<oe;++U){const de=w[U],Y=de.start,J=de.count;for(let ie=Y,fe=Y+J;ie<fe;ie+=3)S(i[ie+0],i[ie+1],i[ie+2])}const P=new Z,N=new Z,D=new Z,H=new Z;function C(U){D.fromArray(o,U*3),H.copy(D);const oe=d[U];P.copy(oe),P.sub(D.multiplyScalar(D.dot(oe))).normalize(),N.crossVectors(H,oe);const Y=N.dot(p[U])<0?-1:1;f[U*4]=P.x,f[U*4+1]=P.y,f[U*4+2]=P.z,f[U*4+3]=Y}for(let U=0,oe=w.length;U<oe;++U){const de=w[U],Y=de.start,J=de.count;for(let ie=Y,fe=Y+J;ie<fe;ie+=3)C(i[ie+0]),C(i[ie+1]),C(i[ie+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new Z,o=new Z,l=new Z,u=new Z,f=new Z,d=new Z,p=new Z,g=new Z;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),T=e.getX(_+1),v=e.getX(_+2);s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,v),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,v),u.add(p),f.add(p),d.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)s.fromBufferAttribute(n,_+0),o.fromBufferAttribute(n,_+1),l.fromBufferAttribute(n,_+2),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,g=u.normalized,_=new d.constructor(f.length*p);let x=0,E=0;for(let T=0,v=f.length;T<v;T++){u.isInterleavedBufferAttribute?x=f[T]*u.data.stride+u.offset:x=f[T]*p;for(let h=0;h<p;h++)_[E++]=d[x++]}return new gi(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jr,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);n.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const _=d[p],x=e(_,i);f.push(x)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];p.push(x.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(n))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let _=0,x=g.length;_<x;_++)p.push(g[_].clone(n));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ex=new En,qs=new wb,wc=new rg,Tx=new Z,Zo=new Z,Qo=new Z,Jo=new Z,Jh=new Z,Ac=new Z,Rc=new Ct,Cc=new Ct,Lc=new Ct,wx=new Z,Ax=new Z,Rx=new Z,Pc=new Z,bc=new Z;class Br extends mi{constructor(e=new jr,n=new sg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Ac.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=u[f],g=o[f];p!==0&&(Jh.fromBufferAttribute(g,e),l?Ac.addScaledVector(Jh,p):Ac.addScaledVector(Jh.sub(n),p))}n.add(Ac)}return n}raycast(e,n){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(o),qs.copy(e.ray).recast(e.near),!(wc.containsPoint(qs.origin)===!1&&(qs.intersectSphere(wc,Tx)===null||qs.origin.distanceToSquared(Tx)>(e.far-e.near)**2))&&(Ex.copy(o).invert(),qs.copy(e.ray).applyMatrix4(Ex),!(i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qs)))}_computeIntersections(e,n,i){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const v=_[E],h=l[v.materialIndex],y=Math.max(v.start,x.start),S=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let w=y,P=S;w<P;w+=3){const N=u.getX(w),D=u.getX(w+1),H=u.getX(w+2);s=Uc(this,h,e,i,d,p,g,N,D,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let v=E,h=T;v<h;v+=3){const y=u.getX(v),S=u.getX(v+1),w=u.getX(v+2);s=Uc(this,l,e,i,d,p,g,y,S,w),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const v=_[E],h=l[v.materialIndex],y=Math.max(v.start,x.start),S=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let w=y,P=S;w<P;w+=3){const N=w,D=w+1,H=w+2;s=Uc(this,h,e,i,d,p,g,N,D,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let v=E,h=T;v<h;v+=3){const y=v,S=v+1,w=v+2;s=Uc(this,l,e,i,d,p,g,y,S,w),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}}}function Ib(t,e,n,i,s,o,l,u){let f;if(e.side===ei?f=i.intersectTriangle(l,o,s,!0,u):f=i.intersectTriangle(s,o,l,e.side===bs,u),f===null)return null;bc.copy(u),bc.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(bc);return d<n.near||d>n.far?null:{distance:d,point:bc.clone(),object:t}}function Uc(t,e,n,i,s,o,l,u,f,d){t.getVertexPosition(u,Zo),t.getVertexPosition(f,Qo),t.getVertexPosition(d,Jo);const p=Ib(t,e,n,i,Zo,Qo,Jo,Pc);if(p){s&&(Rc.fromBufferAttribute(s,u),Cc.fromBufferAttribute(s,f),Lc.fromBufferAttribute(s,d),p.uv=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rc,Cc,Lc,new Ct)),o&&(Rc.fromBufferAttribute(o,u),Cc.fromBufferAttribute(o,f),Lc.fromBufferAttribute(o,d),p.uv1=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rc,Cc,Lc,new Ct),p.uv2=p.uv1),l&&(wx.fromBufferAttribute(l,u),Ax.fromBufferAttribute(l,f),Rx.fromBufferAttribute(l,d),p.normal=Zi.getInterpolation(Pc,Zo,Qo,Jo,wx,Ax,Rx,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new Z,materialIndex:0};Zi.getNormal(Zo,Qo,Jo,g.normal),p.face=g}return p}class uu extends jr{constructor(e=1,n=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],p=[],g=[];let _=0,x=0;E("z","y","x",-1,-1,i,n,e,l,o,0),E("z","y","x",1,-1,i,n,-e,l,o,1),E("x","z","y",1,1,e,i,n,s,l,2),E("x","z","y",1,-1,e,i,-n,s,l,3),E("x","y","z",1,-1,e,n,i,s,o,4),E("x","y","z",-1,-1,e,n,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Vr(d,3)),this.setAttribute("normal",new Vr(p,3)),this.setAttribute("uv",new Vr(g,2));function E(T,v,h,y,S,w,P,N,D,H,C){const U=w/D,oe=P/H,de=w/2,Y=P/2,J=N/2,ie=D+1,fe=H+1;let ee=0,B=0;const te=new Z;for(let j=0;j<fe;j++){const V=j*oe-Y;for(let $=0;$<ie;$++){const Se=$*U-de;te[T]=Se*y,te[v]=V*S,te[h]=J,d.push(te.x,te.y,te.z),te[T]=0,te[v]=0,te[h]=N>0?1:-1,p.push(te.x,te.y,te.z),g.push($/D),g.push(1-j/H),ee+=1}}for(let j=0;j<H;j++)for(let V=0;V<D;V++){const $=_+V+ie*j,Se=_+V+ie*(j+1),ve=_+(V+1)+ie*(j+1),ye=_+(V+1)+ie*j;f.push($,Se,ye),f.push(Se,ve,ye),B+=6}u.addGroup(x,B,C),x+=B,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function On(t){const e={};for(let n=0;n<t.length;n++){const i=Oa(t[n]);for(const s in i)e[s]=i[s]}return e}function Nb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function IM(t){return t.getRenderTarget()===null?t.outputColorSpace:dr}const Fb={clone:Oa,merge:On};var Ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _o extends Gf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ob,this.fragmentShader=zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=Nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class NM extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=zr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ii extends NM{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fh*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/f,n-=l.offsetY*i/d,s*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ea=-90,ta=1;class Bb extends mi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new Ii(ea,ta,e,n);s.layers=this.layers,this.add(s);const o=new Ii(ea,ta,e,n);o.layers=this.layers,this.add(o);const l=new Ii(ea,ta,e,n);l.layers=this.layers,this.add(l);const u=new Ii(ea,ta,e,n);u.layers=this.layers,this.add(u);const f=new Ii(ea,ta,e,n);f.layers=this.layers,this.add(f);const d=new Ii(ea,ta,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,o,l,u,f]=n;for(const d of n)this.remove(d);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===yf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,d]=this.children,p=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=Gr,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,u),e.setRenderTarget(i,4),e.render(n,f),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(n,d),e.setRenderTarget(p),e.toneMapping=g,e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class FM extends pi{constructor(e,n,i,s,o,l,u,f,d,p){e=e!==void 0?e:[],n=n!==void 0?n:Ia,super(e,n,i,s,o,l,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kb extends go{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Nl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lo?ot:uo),this.texture=new FM(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Di}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new uu(5,5,5),o=new _o({name:"CubemapFromEquirect",uniforms:Oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Rs});o.uniforms.tEquirect.value=n;const l=new Br(s,o),u=n.minFilter;return n.minFilter===Jl&&(n.minFilter=Di),new Bb(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,s);e.setRenderTarget(o)}}const ep=new Z,Hb=new Z,Gb=new ct;class Ks{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ep.subVectors(i,n).cross(Hb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ep),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Gb.getNormalMatrix(e),s=this.coplanarPoint(ep).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new rg,Dc=new Z;class OM{constructor(e=new Ks,n=new Ks,i=new Ks,s=new Ks,o=new Ks,l=new Ks){this.planes=[e,n,i,s,o,l]}set(e,n,i,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zr){const i=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],f=s[3],d=s[4],p=s[5],g=s[6],_=s[7],x=s[8],E=s[9],T=s[10],v=s[11],h=s[12],y=s[13],S=s[14],w=s[15];if(i[0].setComponents(f-o,_-d,v-x,w-h).normalize(),i[1].setComponents(f+o,_+d,v+x,w+h).normalize(),i[2].setComponents(f+l,_+p,v+E,w+y).normalize(),i[3].setComponents(f-l,_-p,v-E,w-y).normalize(),i[4].setComponents(f-u,_-g,v-T,w-S).normalize(),n===zr)i[5].setComponents(f+u,_+g,v+T,w+S).normalize();else if(n===yf)i[5].setComponents(u,g,T,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){return Ys.center.set(0,0,0),Ys.radius=.7071067811865476,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zM(){let t=null,e=!1,n=null,i=null;function s(o,l){n(o,l),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Vb(t,e){const n=e.isWebGL2,i=new WeakMap;function s(d,p){const g=d.array,_=d.usage,x=t.createBuffer();t.bindBuffer(p,x),t.bufferData(p,g,_),d.onUploadCallback();let E;if(g instanceof Float32Array)E=t.FLOAT;else if(g instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=t.SHORT;else if(g instanceof Uint32Array)E=t.UNSIGNED_INT;else if(g instanceof Int32Array)E=t.INT;else if(g instanceof Int8Array)E=t.BYTE;else if(g instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version}}function o(d,p,g){const _=p.array,x=p.updateRange;t.bindBuffer(g,d),x.count===-1?t.bufferSubData(g,0,_):(n?t.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):t.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(t.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const _=i.get(d);(!_||_.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const g=i.get(d);g===void 0?i.set(d,s(d,p)):g.version<d.version&&(o(g.buffer,d,p),g.version=d.version)}return{get:l,remove:u,update:f}}class og extends jr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const o=e/2,l=n/2,u=Math.floor(i),f=Math.floor(s),d=u+1,p=f+1,g=e/u,_=n/f,x=[],E=[],T=[],v=[];for(let h=0;h<p;h++){const y=h*_-l;for(let S=0;S<d;S++){const w=S*g-o;E.push(w,-y,0),T.push(0,0,1),v.push(S/u),v.push(1-h/f)}}for(let h=0;h<f;h++)for(let y=0;y<u;y++){const S=y+d*h,w=y+d*(h+1),P=y+1+d*(h+1),N=y+1+d*h;x.push(S,w,N),x.push(w,P,N)}this.setIndex(x),this.setAttribute("position",new Vr(E,3)),this.setAttribute("normal",new Vr(T,3)),this.setAttribute("uv",new Vr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new og(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xb=`#ifdef USE_ALPHAHASH
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
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tU=`#ifdef USE_IRIDESCENCE
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
#endif`,nU=`#ifdef USE_BUMPMAP
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
#endif`,iU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fU=`#define PI 3.141592653589793
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
} // validated`,dU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hU=`vec3 transformedNormal = objectNormal;
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
#endif`,pU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_U=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vU="gl_FragColor = linearToOutputTexel( gl_FragColor );",xU=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SU=`#ifdef USE_ENVMAP
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
#endif`,yU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MU=`#ifdef USE_ENVMAP
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
#endif`,EU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TU=`#ifdef USE_ENVMAP
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
#endif`,wU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LU=`#ifdef USE_GRADIENTMAP
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
}`,PU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IU=`uniform bool receiveShadow;
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
#endif`,NU=`#ifdef USE_ENVMAP
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
#endif`,FU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kU=`PhysicalMaterial material;
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
#endif`,HU=`struct PhysicalMaterial {
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
}`,GU=`
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
#endif`,VU=`#if defined( RE_IndirectDiffuse )
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
#endif`,WU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,XU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$U=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,KU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QU=`#if defined( USE_POINTS_UV )
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
#endif`,JU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tD=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nD=`#ifdef USE_MORPHNORMALS
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
#endif`,iD=`#ifdef USE_MORPHTARGETS
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
#endif`,rD=`#ifdef USE_MORPHTARGETS
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
#endif`,sD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,oD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cD=`#ifdef USE_NORMALMAP
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
#endif`,fD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_D=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AD=`float getShadowMask() {
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
}`,RD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CD=`#ifdef USE_SKINNING
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
#endif`,LD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PD=`#ifdef USE_SKINNING
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
#endif`,bD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ID=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ND=`#ifdef USE_TRANSMISSION
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
#endif`,FD=`#ifdef USE_TRANSMISSION
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
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YD=`#include <common>
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
}`,jD=`#if DEPTH_PACKING == 3200
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
}`,$D=`#define DISTANCE
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
}`,KD=`#define DISTANCE
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
}`,ZD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JD=`uniform float scale;
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
}`,eI=`uniform vec3 diffuse;
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
}`,tI=`#include <common>
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
}`,nI=`uniform vec3 diffuse;
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
}`,iI=`#define LAMBERT
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
}`,rI=`#define LAMBERT
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
}`,sI=`#define MATCAP
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
}`,oI=`#define MATCAP
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
}`,aI=`#define NORMAL
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
}`,lI=`#define NORMAL
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
}`,uI=`#define PHONG
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
}`,cI=`#define PHONG
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
}`,fI=`#define STANDARD
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
}`,dI=`#define STANDARD
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
}`,hI=`#define TOON
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
}`,pI=`#define TOON
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
}`,mI=`uniform float size;
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
}`,gI=`uniform vec3 diffuse;
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
}`,_I=`#include <common>
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
}`,vI=`uniform vec3 color;
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
}`,xI=`uniform float rotation;
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
}`,SI=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Wb,alphahash_pars_fragment:Xb,alphamap_fragment:qb,alphamap_pars_fragment:Yb,alphatest_fragment:jb,alphatest_pars_fragment:$b,aomap_fragment:Kb,aomap_pars_fragment:Zb,begin_vertex:Qb,beginnormal_vertex:Jb,bsdfs:eU,iridescence_fragment:tU,bumpmap_pars_fragment:nU,clipping_planes_fragment:iU,clipping_planes_pars_fragment:rU,clipping_planes_pars_vertex:sU,clipping_planes_vertex:oU,color_fragment:aU,color_pars_fragment:lU,color_pars_vertex:uU,color_vertex:cU,common:fU,cube_uv_reflection_fragment:dU,defaultnormal_vertex:hU,displacementmap_pars_vertex:pU,displacementmap_vertex:mU,emissivemap_fragment:gU,emissivemap_pars_fragment:_U,colorspace_fragment:vU,colorspace_pars_fragment:xU,envmap_fragment:SU,envmap_common_pars_fragment:yU,envmap_pars_fragment:MU,envmap_pars_vertex:EU,envmap_physical_pars_fragment:NU,envmap_vertex:TU,fog_vertex:wU,fog_pars_vertex:AU,fog_fragment:RU,fog_pars_fragment:CU,gradientmap_pars_fragment:LU,lightmap_fragment:PU,lightmap_pars_fragment:bU,lights_lambert_fragment:UU,lights_lambert_pars_fragment:DU,lights_pars_begin:IU,lights_toon_fragment:FU,lights_toon_pars_fragment:OU,lights_phong_fragment:zU,lights_phong_pars_fragment:BU,lights_physical_fragment:kU,lights_physical_pars_fragment:HU,lights_fragment_begin:GU,lights_fragment_maps:VU,lights_fragment_end:WU,logdepthbuf_fragment:XU,logdepthbuf_pars_fragment:qU,logdepthbuf_pars_vertex:YU,logdepthbuf_vertex:jU,map_fragment:$U,map_pars_fragment:KU,map_particle_fragment:ZU,map_particle_pars_fragment:QU,metalnessmap_fragment:JU,metalnessmap_pars_fragment:eD,morphcolor_vertex:tD,morphnormal_vertex:nD,morphtarget_pars_vertex:iD,morphtarget_vertex:rD,normal_fragment_begin:sD,normal_fragment_maps:oD,normal_pars_fragment:aD,normal_pars_vertex:lD,normal_vertex:uD,normalmap_pars_fragment:cD,clearcoat_normal_fragment_begin:fD,clearcoat_normal_fragment_maps:dD,clearcoat_pars_fragment:hD,iridescence_pars_fragment:pD,opaque_fragment:mD,packing:gD,premultiplied_alpha_fragment:_D,project_vertex:vD,dithering_fragment:xD,dithering_pars_fragment:SD,roughnessmap_fragment:yD,roughnessmap_pars_fragment:MD,shadowmap_pars_fragment:ED,shadowmap_pars_vertex:TD,shadowmap_vertex:wD,shadowmask_pars_fragment:AD,skinbase_vertex:RD,skinning_pars_vertex:CD,skinning_vertex:LD,skinnormal_vertex:PD,specularmap_fragment:bD,specularmap_pars_fragment:UD,tonemapping_fragment:DD,tonemapping_pars_fragment:ID,transmission_fragment:ND,transmission_pars_fragment:FD,uv_pars_fragment:OD,uv_pars_vertex:zD,uv_vertex:BD,worldpos_vertex:kD,background_vert:HD,background_frag:GD,backgroundCube_vert:VD,backgroundCube_frag:WD,cube_vert:XD,cube_frag:qD,depth_vert:YD,depth_frag:jD,distanceRGBA_vert:$D,distanceRGBA_frag:KD,equirect_vert:ZD,equirect_frag:QD,linedashed_vert:JD,linedashed_frag:eI,meshbasic_vert:tI,meshbasic_frag:nI,meshlambert_vert:iI,meshlambert_frag:rI,meshmatcap_vert:sI,meshmatcap_frag:oI,meshnormal_vert:aI,meshnormal_frag:lI,meshphong_vert:uI,meshphong_frag:cI,meshphysical_vert:fI,meshphysical_frag:dI,meshtoon_vert:hI,meshtoon_frag:pI,points_vert:mI,points_frag:gI,shadow_vert:_I,shadow_frag:vI,sprite_vert:xI,sprite_frag:SI},Me={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},lr={basic:{uniforms:On([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:On([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Pt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:On([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:On([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:On([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Pt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:On([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:On([Me.points,Me.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:On([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:On([Me.common,Me.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:On([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:On([Me.sprite,Me.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:On([Me.common,Me.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:On([Me.lights,Me.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};lr.physical={uniforms:On([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ic={r:0,b:0,g:0};function yI(t,e,n,i,s,o,l){const u=new Pt(0);let f=o===!0?0:1,d,p,g=null,_=0,x=null;function E(v,h){let y=!1,S=h.isScene===!0?h.background:null;switch(S&&S.isTexture&&(S=(h.backgroundBlurriness>0?n:e).get(S)),S===null?T(u,f):S&&S.isColor&&(T(S,1),y=!0),t.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),y=!0;break}(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),S&&(S.isCubeTexture||S.mapping===kf)?(p===void 0&&(p=new Br(new uu(1,1,1),new _o({name:"BackgroundCubeMaterial",uniforms:Oa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=S,p.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,p.material.toneMapped=S.colorSpace!==ot,(g!==S||_!==S.version||x!==t.toneMapping)&&(p.material.needsUpdate=!0,g=S,_=S.version,x=t.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):S&&S.isTexture&&(d===void 0&&(d=new Br(new og(2,2),new _o({name:"BackgroundMaterial",uniforms:Oa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=S,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=S.colorSpace!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),d.material.uniforms.uvTransform.value.copy(S.matrix),(g!==S||_!==S.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,g=S,_=S.version,x=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function T(v,h){v.getRGB(Ic,IM(t)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,h,l)}return{getClearColor:function(){return u},setClearColor:function(v,h=1){u.set(v),f=h,T(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(v){f=v,T(u,f)},render:E}}function MI(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,u={},f=v(null);let d=f,p=!1;function g(J,ie,fe,ee,B){let te=!1;if(l){const j=T(ee,fe,ie);d!==j&&(d=j,x(d.object)),te=h(J,ee,fe,B),te&&y(J,ee,fe,B)}else{const j=ie.wireframe===!0;(d.geometry!==ee.id||d.program!==fe.id||d.wireframe!==j)&&(d.geometry=ee.id,d.program=fe.id,d.wireframe=j,te=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(te||p)&&(p=!1,H(J,ie,fe,ee),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function _(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function x(J){return i.isWebGL2?t.bindVertexArray(J):o.bindVertexArrayOES(J)}function E(J){return i.isWebGL2?t.deleteVertexArray(J):o.deleteVertexArrayOES(J)}function T(J,ie,fe){const ee=fe.wireframe===!0;let B=u[J.id];B===void 0&&(B={},u[J.id]=B);let te=B[ie.id];te===void 0&&(te={},B[ie.id]=te);let j=te[ee];return j===void 0&&(j=v(_()),te[ee]=j),j}function v(J){const ie=[],fe=[],ee=[];for(let B=0;B<s;B++)ie[B]=0,fe[B]=0,ee[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:fe,attributeDivisors:ee,object:J,attributes:{},index:null}}function h(J,ie,fe,ee){const B=d.attributes,te=ie.attributes;let j=0;const V=fe.getAttributes();for(const $ in V)if(V[$].location>=0){const ve=B[$];let ye=te[$];if(ye===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(ye=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(ye=J.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;j++}return d.attributesNum!==j||d.index!==ee}function y(J,ie,fe,ee){const B={},te=ie.attributes;let j=0;const V=fe.getAttributes();for(const $ in V)if(V[$].location>=0){let ve=te[$];ve===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(ve=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(ve=J.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),B[$]=ye,j++}d.attributes=B,d.attributesNum=j,d.index=ee}function S(){const J=d.newAttributes;for(let ie=0,fe=J.length;ie<fe;ie++)J[ie]=0}function w(J){P(J,0)}function P(J,ie){const fe=d.newAttributes,ee=d.enabledAttributes,B=d.attributeDivisors;fe[J]=1,ee[J]===0&&(t.enableVertexAttribArray(J),ee[J]=1),B[J]!==ie&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,ie),B[J]=ie)}function N(){const J=d.newAttributes,ie=d.enabledAttributes;for(let fe=0,ee=ie.length;fe<ee;fe++)ie[fe]!==J[fe]&&(t.disableVertexAttribArray(fe),ie[fe]=0)}function D(J,ie,fe,ee,B,te,j){j===!0?t.vertexAttribIPointer(J,ie,fe,B,te):t.vertexAttribPointer(J,ie,fe,ee,B,te)}function H(J,ie,fe,ee){if(i.isWebGL2===!1&&(J.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const B=ee.attributes,te=fe.getAttributes(),j=ie.defaultAttributeValues;for(const V in te){const $=te[V];if($.location>=0){let Se=B[V];if(Se===void 0&&(V==="instanceMatrix"&&J.instanceMatrix&&(Se=J.instanceMatrix),V==="instanceColor"&&J.instanceColor&&(Se=J.instanceColor)),Se!==void 0){const ve=Se.normalized,ye=Se.itemSize,De=n.get(Se);if(De===void 0)continue;const qe=De.buffer,Be=De.type,mt=De.bytesPerElement,wn=i.isWebGL2===!0&&(Be===t.INT||Be===t.UNSIGNED_INT||Se.gpuType===vM);if(Se.isInterleavedBufferAttribute){const et=Se.data,X=et.stride,rn=Se.offset;if(et.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)P($.location+Ne,et.meshPerAttribute);J.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)w($.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ne=0;Ne<$.locationSize;Ne++)D($.location+Ne,ye/$.locationSize,Be,ve,X*mt,(rn+ye/$.locationSize*Ne)*mt,wn)}else{if(Se.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)P($.location+et,Se.meshPerAttribute);J.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let et=0;et<$.locationSize;et++)w($.location+et);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let et=0;et<$.locationSize;et++)D($.location+et,ye/$.locationSize,Be,ve,ye*mt,ye/$.locationSize*et*mt,wn)}}else if(j!==void 0){const ve=j[V];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv($.location,ve);break;case 3:t.vertexAttrib3fv($.location,ve);break;case 4:t.vertexAttrib4fv($.location,ve);break;default:t.vertexAttrib1fv($.location,ve)}}}}N()}function C(){de();for(const J in u){const ie=u[J];for(const fe in ie){const ee=ie[fe];for(const B in ee)E(ee[B].object),delete ee[B];delete ie[fe]}delete u[J]}}function U(J){if(u[J.id]===void 0)return;const ie=u[J.id];for(const fe in ie){const ee=ie[fe];for(const B in ee)E(ee[B].object),delete ee[B];delete ie[fe]}delete u[J.id]}function oe(J){for(const ie in u){const fe=u[ie];if(fe[J.id]===void 0)continue;const ee=fe[J.id];for(const B in ee)E(ee[B].object),delete ee[B];delete fe[J.id]}}function de(){Y(),p=!0,d!==f&&(d=f,x(d.object))}function Y(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:g,reset:de,resetDefaultState:Y,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:oe,initAttributes:S,enableAttribute:w,disableUnusedAttributes:N}}function EI(t,e,n,i){const s=i.isWebGL2;let o;function l(d){o=d}function u(d,p){t.drawArrays(o,d,p),n.update(p,o,1)}function f(d,p,g){if(g===0)return;let _,x;if(s)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](o,d,p,g),n.update(p,o,g)}this.setMode=l,this.render=u,this.renderInstances=f}function TI(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const f=o(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=l||e.has("WEBGL_draw_buffers"),p=n.logarithmicDepthBuffer===!0,g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),T=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,w=l||e.has("OES_texture_float"),P=S&&w,N=l?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:E,maxAttributes:T,maxVertexUniforms:v,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:N}}function wI(t){const e=this;let n=null,i=0,s=!1,o=!1;const l=new Ks,u=new ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){n=p(g,_,0)},this.setState=function(g,_,x){const E=g.clippingPlanes,T=g.clipIntersection,v=g.clipShadows,h=t.get(g);if(!s||E===null||E.length===0||o&&!v)o?p(null):d();else{const y=o?0:i,S=y*4;let w=h.clippingState||null;f.value=w,w=p(E,_,S,x);for(let P=0;P!==S;++P)w[P]=n[P];h.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=y}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,x,E){const T=g!==null?g.length:0;let v=null;if(T!==0){if(v=f.value,E!==!0||v===null){const h=x+T*4,y=_.matrixWorldInverse;u.getNormalMatrix(y),(v===null||v.length<h)&&(v=new Float32Array(h));for(let S=0,w=x;S!==T;++S,w+=4)l.copy(g[S]).applyMatrix4(y,u),l.normal.toArray(v,w),v[w+3]=l.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function AI(t){let e=new WeakMap;function n(l,u){return u===Jp?l.mapping=Ia:u===em&&(l.mapping=Na),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping;if(u===Jp||u===em)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new kb(f.height/2);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",s),n(d.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class RI extends NM{constructor(e=-1,n=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ga=4,Cx=[.125,.215,.35,.446,.526,.582],Qs=20,tp=new RI,Lx=new Pt;let np=null;const Zs=(1+Math.sqrt(5))/2,na=1/Zs,Px=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Zs,na),new Z(0,Zs,-na),new Z(na,0,Zs),new Z(-na,0,Zs),new Z(Zs,na,0),new Z(-Zs,na,0)];class bx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){np=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(np),e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ia||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:eu,format:Ji,colorSpace:dr,depthBuffer:!1},s=Ux(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CI(o)),this._blurMaterial=LI(o,e,n)}return s}_compileMaterial(e){const n=new Br(this._lodPlanes[0],e);this._renderer.compile(n,tp)}_sceneToCubeUV(e,n,i,s){const u=new Ii(90,1,n,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(Lx),p.toneMapping=Gr,p.autoClear=!1;const x=new sg({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),E=new Br(new uu,x);let T=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,T=!0):(x.color.copy(Lx),T=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(u.up.set(0,f[h],0),u.lookAt(d[h],0,0)):y===1?(u.up.set(0,0,f[h]),u.lookAt(0,d[h],0)):(u.up.set(0,f[h],0),u.lookAt(0,0,d[h]));const S=this._cubeSize;Nc(s,y*S,h>2?S:0,S,S),p.setRenderTarget(s),T&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ia||e.mapping===Na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dx());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Br(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Nc(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,tp)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Px[(s-1)%Px.length];this._blur(e,s-1,s,o,l)}n.autoClear=i}_blur(e,n,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,s,"latitudinal",o),this._halfBlur(l,e,i,i,s,"longitudinal",o)}_halfBlur(e,n,i,s,o,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Br(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Qs-1),T=o/E,v=isFinite(o)?1+Math.floor(p*T):Qs;v>Qs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Qs}`);const h=[];let y=0;for(let D=0;D<Qs;++D){const H=D/T,C=Math.exp(-H*H/2);h.push(C),D===0?y+=C:D<v&&(y+=2*C)}for(let D=0;D<h.length;D++)h[D]=h[D]/y;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=h,_.latitudinal.value=l==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:S}=this;_.dTheta.value=E,_.mipInt.value=S-i;const w=this._sizeLods[s],P=3*w*(s>S-ga?s-S+ga:0),N=4*(this._cubeSize-w);Nc(n,P,N,3*w,2*w),f.setRenderTarget(n),f.render(g,tp)}}function CI(t){const e=[],n=[],i=[];let s=t;const o=t-ga+1+Cx.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);n.push(u);let f=1/u;l>t-ga?f=Cx[l-t+ga-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),p=-d,g=1+d,_=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,E=6,T=3,v=2,h=1,y=new Float32Array(T*E*x),S=new Float32Array(v*E*x),w=new Float32Array(h*E*x);for(let N=0;N<x;N++){const D=N%3*2/3-1,H=N>2?0:-1,C=[D,H,0,D+2/3,H,0,D+2/3,H+1,0,D,H,0,D+2/3,H+1,0,D,H+1,0];y.set(C,T*E*N),S.set(_,v*E*N);const U=[N,N,N,N,N,N];w.set(U,h*E*N)}const P=new jr;P.setAttribute("position",new gi(y,T)),P.setAttribute("uv",new gi(S,v)),P.setAttribute("faceIndex",new gi(w,h)),e.push(P),s>ga&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ux(t,e,n){const i=new go(t,e,n);return i.texture.mapping=kf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nc(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function LI(t,e,n){const i=new Float32Array(Qs),s=new Z(0,1,0);return new _o({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ag(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Dx(){return new _o({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ag(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Ix(){return new _o({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function ag(){return`

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
	`}function PI(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===Jp||f===em,p=f===Ia||f===Na;if(d||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return n===null&&(n=new bx(t)),g=d?n.fromEquirectangular(u,g):n.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(d&&g&&g.height>0||p&&g&&s(g)){n===null&&(n=new bx(t));const _=d?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",o),_.texture}else return null}}}return u}function s(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function bI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function UI(t,e,n,i){const s={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let v=0,h=T.length;v<h;v++)e.remove(T[v])}_.removeEventListener("dispose",l),delete s[_.id];const x=o.get(_);x&&(e.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,n.memory.geometries++),_}function f(g){const _=g.attributes;for(const E in _)e.update(_[E],t.ARRAY_BUFFER);const x=g.morphAttributes;for(const E in x){const T=x[E];for(let v=0,h=T.length;v<h;v++)e.update(T[v],t.ARRAY_BUFFER)}}function d(g){const _=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const y=x.array;T=x.version;for(let S=0,w=y.length;S<w;S+=3){const P=y[S+0],N=y[S+1],D=y[S+2];_.push(P,N,N,D,D,P)}}else{const y=E.array;T=E.version;for(let S=0,w=y.length/3-1;S<w;S+=3){const P=S+0,N=S+1,D=S+2;_.push(P,N,N,D,D,P)}}const v=new(AM(_)?DM:UM)(_,1);v.version=T;const h=o.get(g);h&&e.remove(h),o.set(g,v)}function p(g){const _=o.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function DI(t,e,n,i){const s=i.isWebGL2;let o;function l(_){o=_}let u,f;function d(_){u=_.type,f=_.bytesPerElement}function p(_,x){t.drawElements(o,x,u,_*f),n.update(x,o,1)}function g(_,x,E){if(E===0)return;let T,v;if(s)T=t,v="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[v](o,x,u,_*f,E),n.update(x,o,E)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g}function II(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(o/3);break;case t.LINES:n.lines+=u*(o/2);break;case t.LINE_STRIP:n.lines+=u*(o-1);break;case t.LINE_LOOP:n.lines+=u*o;break;case t.POINTS:n.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function NI(t,e){return t[0]-e[0]}function FI(t,e){return Math.abs(e[1])-Math.abs(t[1])}function OI(t,e,n){const i={},s=new Float32Array(8),o=new WeakMap,l=new yn,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function f(d,p,g){const _=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,T=E!==void 0?E.length:0;let v=o.get(p);if(v===void 0||v.count!==T){let ie=function(){Y.dispose(),o.delete(p),p.removeEventListener("dispose",ie)};var x=ie;v!==void 0&&v.texture.dispose();const S=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,N=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let C=0;S===!0&&(C=1),w===!0&&(C=2),P===!0&&(C=3);let U=p.attributes.position.count*C,oe=1;U>e.maxTextureSize&&(oe=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const de=new Float32Array(U*oe*4*T),Y=new LM(de,U,oe,T);Y.type=vs,Y.needsUpdate=!0;const J=C*4;for(let fe=0;fe<T;fe++){const ee=N[fe],B=D[fe],te=H[fe],j=U*oe*4*fe;for(let V=0;V<ee.count;V++){const $=V*J;S===!0&&(l.fromBufferAttribute(ee,V),de[j+$+0]=l.x,de[j+$+1]=l.y,de[j+$+2]=l.z,de[j+$+3]=0),w===!0&&(l.fromBufferAttribute(B,V),de[j+$+4]=l.x,de[j+$+5]=l.y,de[j+$+6]=l.z,de[j+$+7]=0),P===!0&&(l.fromBufferAttribute(te,V),de[j+$+8]=l.x,de[j+$+9]=l.y,de[j+$+10]=l.z,de[j+$+11]=te.itemSize===4?l.w:1)}}v={count:T,texture:Y,size:new Ct(U,oe)},o.set(p,v),p.addEventListener("dispose",ie)}let h=0;for(let S=0;S<_.length;S++)h+=_[S];const y=p.morphTargetsRelative?1:1-h;g.getUniforms().setValue(t,"morphTargetBaseInfluence",y),g.getUniforms().setValue(t,"morphTargetInfluences",_),g.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),g.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const E=_===void 0?0:_.length;let T=i[p.id];if(T===void 0||T.length!==E){T=[];for(let w=0;w<E;w++)T[w]=[w,0];i[p.id]=T}for(let w=0;w<E;w++){const P=T[w];P[0]=w,P[1]=_[w]}T.sort(FI);for(let w=0;w<8;w++)w<E&&T[w][1]?(u[w][0]=T[w][0],u[w][1]=T[w][1]):(u[w][0]=Number.MAX_SAFE_INTEGER,u[w][1]=0);u.sort(NI);const v=p.morphAttributes.position,h=p.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const P=u[w],N=P[0],D=P[1];N!==Number.MAX_SAFE_INTEGER&&D?(v&&p.getAttribute("morphTarget"+w)!==v[N]&&p.setAttribute("morphTarget"+w,v[N]),h&&p.getAttribute("morphNormal"+w)!==h[N]&&p.setAttribute("morphNormal"+w,h[N]),s[w]=D,y+=D):(v&&p.hasAttribute("morphTarget"+w)===!0&&p.deleteAttribute("morphTarget"+w),h&&p.hasAttribute("morphNormal"+w)===!0&&p.deleteAttribute("morphNormal"+w),s[w]=0)}const S=p.morphTargetsRelative?1:1-y;g.getUniforms().setValue(t,"morphTargetBaseInfluence",S),g.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:f}}function zI(t,e,n,i){let s=new WeakMap;function o(f){const d=i.render.frame,p=f.geometry,g=e.get(f,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function l(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:l}}const BM=new pi,kM=new LM,HM=new Eb,GM=new FM,Nx=[],Fx=[],Ox=new Float32Array(16),zx=new Float32Array(9),Bx=new Float32Array(4);function Ga(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let o=Nx[s];if(o===void 0&&(o=new Float32Array(s),Nx[s]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(o,u)}return o}function cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function fn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vf(t,e){let n=Fx[e];n===void 0&&(n=new Int32Array(e),Fx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2fv(this.addr,e),fn(n,e)}}function HI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;t.uniform3fv(this.addr,e),fn(n,e)}}function GI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4fv(this.addr,e),fn(n,e)}}function VI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;Bx.set(i),t.uniformMatrix2fv(this.addr,!1,Bx),fn(n,i)}}function WI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;zx.set(i),t.uniformMatrix3fv(this.addr,!1,zx),fn(n,i)}}function XI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;Ox.set(i),t.uniformMatrix4fv(this.addr,!1,Ox),fn(n,i)}}function qI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2iv(this.addr,e),fn(n,e)}}function jI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3iv(this.addr,e),fn(n,e)}}function $I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4iv(this.addr,e),fn(n,e)}}function KI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2uiv(this.addr,e),fn(n,e)}}function QI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3uiv(this.addr,e),fn(n,e)}}function JI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4uiv(this.addr,e),fn(n,e)}}function e3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||BM,s)}function t3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||HM,s)}function n3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||GM,s)}function i3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||kM,s)}function r3(t){switch(t){case 5126:return BI;case 35664:return kI;case 35665:return HI;case 35666:return GI;case 35674:return VI;case 35675:return WI;case 35676:return XI;case 5124:case 35670:return qI;case 35667:case 35671:return YI;case 35668:case 35672:return jI;case 35669:case 35673:return $I;case 5125:return KI;case 36294:return ZI;case 36295:return QI;case 36296:return JI;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function s3(t,e){t.uniform1fv(this.addr,e)}function o3(t,e){const n=Ga(e,this.size,2);t.uniform2fv(this.addr,n)}function a3(t,e){const n=Ga(e,this.size,3);t.uniform3fv(this.addr,n)}function l3(t,e){const n=Ga(e,this.size,4);t.uniform4fv(this.addr,n)}function u3(t,e){const n=Ga(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function c3(t,e){const n=Ga(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function f3(t,e){const n=Ga(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function d3(t,e){t.uniform1iv(this.addr,e)}function h3(t,e){t.uniform2iv(this.addr,e)}function p3(t,e){t.uniform3iv(this.addr,e)}function m3(t,e){t.uniform4iv(this.addr,e)}function g3(t,e){t.uniform1uiv(this.addr,e)}function _3(t,e){t.uniform2uiv(this.addr,e)}function v3(t,e){t.uniform3uiv(this.addr,e)}function x3(t,e){t.uniform4uiv(this.addr,e)}function S3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture2D(e[l]||BM,o[l])}function y3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture3D(e[l]||HM,o[l])}function M3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTextureCube(e[l]||GM,o[l])}function E3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture2DArray(e[l]||kM,o[l])}function T3(t){switch(t){case 5126:return s3;case 35664:return o3;case 35665:return a3;case 35666:return l3;case 35674:return u3;case 35675:return c3;case 35676:return f3;case 5124:case 35670:return d3;case 35667:case 35671:return h3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return _3;case 36295:return v3;case 36296:return x3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return E3}}class w3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=r3(n.type)}}class A3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=T3(n.type)}}class R3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,n[u.id],i)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function kx(t,e){t.seq.push(e),t.map[e.id]=e}function C3(t,e,n){const i=t.name,s=i.length;for(ip.lastIndex=0;;){const o=ip.exec(i),l=ip.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){kx(n,d===void 0?new w3(u,t,e):new A3(u,t,e));break}else{let g=n.map[u];g===void 0&&(g=new R3(u),kx(n,g)),n=g}}}class $c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);C3(o,l,this)}}setValue(e,n,i,s){const o=this.map[n];o!==void 0&&o.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let o=0,l=n.length;o!==l;++o){const u=n[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in n&&i.push(l)}return i}}function Hx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let L3=0;function P3(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=s;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}function b3(t){switch(t){case dr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Gx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+P3(t.getShaderSource(e),l)}else return s}function U3(t,e){const n=b3(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function D3(t,e){let n;switch(e){case kP:n="Linear";break;case HP:n="Reinhard";break;case GP:n="OptimizedCineon";break;case VP:n="ACESFilmic";break;case WP:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function I3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wl).join(`
`)}function N3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function F3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=t.getActiveAttrib(e,s),l=o.name;let u=1;o.type===t.FLOAT_MAT2&&(u=2),o.type===t.FLOAT_MAT3&&(u=3),o.type===t.FLOAT_MAT4&&(u=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function wl(t){return t!==""}function Vx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O3=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(t){return t.replace(O3,B3)}const z3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B3(t,e){let n=st[e];if(n===void 0){const i=z3.get(e);if(i!==void 0)n=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return om(n)}const k3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(t){return t.replace(k3,H3)}function H3(t,e,n,i){let s="";for(let o=parseInt(e);o<parseInt(n);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function qx(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ur&&(e="SHADOWMAP_TYPE_VSM"),e}function V3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ia:case Na:e="ENVMAP_TYPE_CUBE";break;case kf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Na:e="ENVMAP_MODE_REFRACTION";break}return e}function X3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gM:e="ENVMAP_BLENDING_MULTIPLY";break;case zP:e="ENVMAP_BLENDING_MIX";break;case BP:e="ENVMAP_BLENDING_ADD";break}return e}function q3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Y3(t,e,n,i){const s=t.getContext(),o=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=G3(n),d=V3(n),p=W3(n),g=X3(n),_=q3(n),x=n.isWebGL2?"":I3(n),E=N3(o),T=s.createProgram();let v,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),v.length>0&&(v+=`
`),h=[x,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),h.length>0&&(h+=`
`)):(v=[qx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),h=[x,qx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gr?"#define TONE_MAPPING":"",n.toneMapping!==Gr?st.tonemapping_pars_fragment:"",n.toneMapping!==Gr?D3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,U3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),l=om(l),l=Vx(l,n),l=Wx(l,n),u=om(u),u=Vx(u,n),u=Wx(u,n),l=Xx(l),u=Xx(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+v+l,w=y+h+u,P=Hx(s,s.VERTEX_SHADER,S),N=Hx(s,s.FRAGMENT_SHADER,w);if(s.attachShader(T,P),s.attachShader(T,N),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T),t.debug.checkShaderErrors){const C=s.getProgramInfoLog(T).trim(),U=s.getShaderInfoLog(P).trim(),oe=s.getShaderInfoLog(N).trim();let de=!0,Y=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(de=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,T,P,N);else{const J=Gx(s,P,"vertex"),ie=Gx(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+J+`
`+ie)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(U===""||oe==="")&&(Y=!1);Y&&(this.diagnostics={runnable:de,programLog:C,vertexShader:{log:U,prefix:v},fragmentShader:{log:oe,prefix:h}})}s.deleteShader(P),s.deleteShader(N);let D;this.getUniforms=function(){return D===void 0&&(D=new $c(s,T)),D};let H;return this.getAttributes=function(){return H===void 0&&(H=F3(s,T)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=L3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=N,this}let j3=0;class $3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new K3(e),n.set(e,i)),i}}class K3{constructor(e){this.id=j3++,this.code=e,this.usedTimes=0}}function Z3(t,e,n,i,s,o,l){const u=new PM,f=new $3,d=[],p=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return C===0?"uv":`uv${C}`}function v(C,U,oe,de,Y){const J=de.fog,ie=Y.geometry,fe=C.isMeshStandardMaterial?de.environment:null,ee=(C.isMeshStandardMaterial?n:e).get(C.envMap||fe),B=ee&&ee.mapping===kf?ee.image.height:null,te=E[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const j=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,V=j!==void 0?j.length:0;let $=0;ie.morphAttributes.position!==void 0&&($=1),ie.morphAttributes.normal!==void 0&&($=2),ie.morphAttributes.color!==void 0&&($=3);let Se,ve,ye,De;if(te){const ti=lr[te];Se=ti.vertexShader,ve=ti.fragmentShader}else Se=C.vertexShader,ve=C.fragmentShader,f.update(C),ye=f.getVertexShaderID(C),De=f.getFragmentShaderID(C);const qe=t.getRenderTarget(),Be=Y.isInstancedMesh===!0,mt=!!C.map,wn=!!C.matcap,et=!!ee,X=!!C.aoMap,rn=!!C.lightMap,Ne=!!C.bumpMap,$e=!!C.normalMap,Ke=!!C.displacementMap,vt=!!C.emissiveMap,ut=!!C.metalnessMap,it=!!C.roughnessMap,xt=C.anisotropy>0,Et=C.clearcoat>0,Yt=C.iridescence>0,I=C.sheen>0,L=C.transmission>0,ne=xt&&!!C.anisotropyMap,ge=Et&&!!C.clearcoatMap,me=Et&&!!C.clearcoatNormalMap,xe=Et&&!!C.clearcoatRoughnessMap,Fe=Yt&&!!C.iridescenceMap,Ee=Yt&&!!C.iridescenceThicknessMap,le=I&&!!C.sheenColorMap,Oe=I&&!!C.sheenRoughnessMap,ze=!!C.specularMap,ke=!!C.specularColorMap,be=!!C.specularIntensityMap,Ue=L&&!!C.transmissionMap,tt=L&&!!C.thicknessMap,At=!!C.gradientMap,z=!!C.alphaMap,Te=C.alphaTest>0,Q=!!C.alphaHash,_e=!!C.extensions,Re=!!ie.attributes.uv1,_t=!!ie.attributes.uv2,Ut=!!ie.attributes.uv3;return{isWebGL2:p,shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:ve,defines:C.defines,customVertexShaderID:ye,customFragmentShaderID:De,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,instancing:Be,instancingColor:Be&&Y.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:qe===null?t.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:dr,map:mt,matcap:wn,envMap:et,envMapMode:et&&ee.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:rn,bumpMap:Ne,normalMap:$e,displacementMap:_&&Ke,emissiveMap:vt,normalMapObjectSpace:$e&&C.normalMapType===rb,normalMapTangentSpace:$e&&C.normalMapType===ib,metalnessMap:ut,roughnessMap:it,anisotropy:xt,anisotropyMap:ne,clearcoat:Et,clearcoatMap:ge,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:Yt,iridescenceMap:Fe,iridescenceThicknessMap:Ee,sheen:I,sheenColorMap:le,sheenRoughnessMap:Oe,specularMap:ze,specularColorMap:ke,specularIntensityMap:be,transmission:L,transmissionMap:Ue,thicknessMap:tt,gradientMap:At,opaque:C.transparent===!1&&C.blending===Ta,alphaMap:z,alphaTest:Te,alphaHash:Q,combine:C.combine,mapUv:mt&&T(C.map.channel),aoMapUv:X&&T(C.aoMap.channel),lightMapUv:rn&&T(C.lightMap.channel),bumpMapUv:Ne&&T(C.bumpMap.channel),normalMapUv:$e&&T(C.normalMap.channel),displacementMapUv:Ke&&T(C.displacementMap.channel),emissiveMapUv:vt&&T(C.emissiveMap.channel),metalnessMapUv:ut&&T(C.metalnessMap.channel),roughnessMapUv:it&&T(C.roughnessMap.channel),anisotropyMapUv:ne&&T(C.anisotropyMap.channel),clearcoatMapUv:ge&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:le&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(C.sheenRoughnessMap.channel),specularMapUv:ze&&T(C.specularMap.channel),specularColorMapUv:ke&&T(C.specularColorMap.channel),specularIntensityMapUv:be&&T(C.specularIntensityMap.channel),transmissionMapUv:Ue&&T(C.transmissionMap.channel),thicknessMapUv:tt&&T(C.thicknessMap.channel),alphaMapUv:z&&T(C.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&($e||xt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:_t,vertexUv3s:Ut,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(mt||z),fog:!!J,useFog:C.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&oe.length>0,shadowMapType:t.shadowMap.type,toneMapping:C.toneMapped?t.toneMapping:Gr,useLegacyLights:t.useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Nr,flipSided:C.side===ei,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:_e&&C.extensions.derivatives===!0,extensionFragDepth:_e&&C.extensions.fragDepth===!0,extensionDrawBuffers:_e&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function h(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const oe in C.defines)U.push(oe),U.push(C.defines[oe]);return C.isRawShaderMaterial===!1&&(y(U,C),S(U,C),U.push(t.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function y(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function S(C,U){u.disableAll(),U.isWebGL2&&u.enable(0),U.supportsVertexTextures&&u.enable(1),U.instancing&&u.enable(2),U.instancingColor&&u.enable(3),U.matcap&&u.enable(4),U.envMap&&u.enable(5),U.normalMapObjectSpace&&u.enable(6),U.normalMapTangentSpace&&u.enable(7),U.clearcoat&&u.enable(8),U.iridescence&&u.enable(9),U.alphaTest&&u.enable(10),U.vertexColors&&u.enable(11),U.vertexAlphas&&u.enable(12),U.vertexUv1s&&u.enable(13),U.vertexUv2s&&u.enable(14),U.vertexUv3s&&u.enable(15),U.vertexTangents&&u.enable(16),U.anisotropy&&u.enable(17),C.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.skinning&&u.enable(4),U.morphTargets&&u.enable(5),U.morphNormals&&u.enable(6),U.morphColors&&u.enable(7),U.premultipliedAlpha&&u.enable(8),U.shadowMapEnabled&&u.enable(9),U.useLegacyLights&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),C.push(u.mask)}function w(C){const U=E[C.type];let oe;if(U){const de=lr[U];oe=Fb.clone(de.uniforms)}else oe=C.uniforms;return oe}function P(C,U){let oe;for(let de=0,Y=d.length;de<Y;de++){const J=d[de];if(J.cacheKey===U){oe=J,++oe.usedTimes;break}}return oe===void 0&&(oe=new Y3(t,U,C,o),d.push(oe)),oe}function N(C){if(--C.usedTimes===0){const U=d.indexOf(C);d[U]=d[d.length-1],d.pop(),C.destroy()}}function D(C){f.remove(C)}function H(){f.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:w,acquireProgram:P,releaseProgram:N,releaseShaderCache:D,programs:d,dispose:H}}function Q3(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,u){t.get(o)[l]=u}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function J3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jx(){const t=[];let e=0;const n=[],i=[],s=[];function o(){e=0,n.length=0,i.length=0,s.length=0}function l(g,_,x,E,T,v){let h=t[e];return h===void 0?(h={id:g.id,object:g,geometry:_,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:v},t[e]=h):(h.id=g.id,h.object=g,h.geometry=_,h.material=x,h.groupOrder=E,h.renderOrder=g.renderOrder,h.z=T,h.group=v),e++,h}function u(g,_,x,E,T,v){const h=l(g,_,x,E,T,v);x.transmission>0?i.push(h):x.transparent===!0?s.push(h):n.push(h)}function f(g,_,x,E,T,v){const h=l(g,_,x,E,T,v);x.transmission>0?i.unshift(h):x.transparent===!0?s.unshift(h):n.unshift(h)}function d(g,_){n.length>1&&n.sort(g||J3),i.length>1&&i.sort(_||Yx),s.length>1&&s.sort(_||Yx)}function p(){for(let g=e,_=t.length;g<_;g++){const x=t[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:p,sort:d}}function eN(){let t=new WeakMap;function e(i,s){const o=t.get(i);let l;return o===void 0?(l=new jx,t.set(i,[l])):s>=o.length?(l=new jx,o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function tN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Pt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function nN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iN=0;function rN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sN(t,e){const n=new tN,i=nN(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)s.probe.push(new Z);const o=new Z,l=new En,u=new En;function f(p,g){let _=0,x=0,E=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let T=0,v=0,h=0,y=0,S=0,w=0,P=0,N=0,D=0,H=0;p.sort(rN);const C=g===!0?Math.PI:1;for(let oe=0,de=p.length;oe<de;oe++){const Y=p[oe],J=Y.color,ie=Y.intensity,fe=Y.distance,ee=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)_+=J.r*ie*C,x+=J.g*ie*C,E+=J.b*ie*C;else if(Y.isLightProbe)for(let B=0;B<9;B++)s.probe[B].addScaledVector(Y.sh.coefficients[B],ie);else if(Y.isDirectionalLight){const B=n.get(Y);if(B.color.copy(Y.color).multiplyScalar(Y.intensity*C),Y.castShadow){const te=Y.shadow,j=i.get(Y);j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,s.directionalShadow[T]=j,s.directionalShadowMap[T]=ee,s.directionalShadowMatrix[T]=Y.shadow.matrix,w++}s.directional[T]=B,T++}else if(Y.isSpotLight){const B=n.get(Y);B.position.setFromMatrixPosition(Y.matrixWorld),B.color.copy(J).multiplyScalar(ie*C),B.distance=fe,B.coneCos=Math.cos(Y.angle),B.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),B.decay=Y.decay,s.spot[h]=B;const te=Y.shadow;if(Y.map&&(s.spotLightMap[D]=Y.map,D++,te.updateMatrices(Y),Y.castShadow&&H++),s.spotLightMatrix[h]=te.matrix,Y.castShadow){const j=i.get(Y);j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,s.spotShadow[h]=j,s.spotShadowMap[h]=ee,N++}h++}else if(Y.isRectAreaLight){const B=n.get(Y);B.color.copy(J).multiplyScalar(ie),B.halfWidth.set(Y.width*.5,0,0),B.halfHeight.set(0,Y.height*.5,0),s.rectArea[y]=B,y++}else if(Y.isPointLight){const B=n.get(Y);if(B.color.copy(Y.color).multiplyScalar(Y.intensity*C),B.distance=Y.distance,B.decay=Y.decay,Y.castShadow){const te=Y.shadow,j=i.get(Y);j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,s.pointShadow[v]=j,s.pointShadowMap[v]=ee,s.pointShadowMatrix[v]=Y.shadow.matrix,P++}s.point[v]=B,v++}else if(Y.isHemisphereLight){const B=n.get(Y);B.skyColor.copy(Y.color).multiplyScalar(ie*C),B.groundColor.copy(Y.groundColor).multiplyScalar(ie*C),s.hemi[S]=B,S++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=E;const U=s.hash;(U.directionalLength!==T||U.pointLength!==v||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==S||U.numDirectionalShadows!==w||U.numPointShadows!==P||U.numSpotShadows!==N||U.numSpotMaps!==D)&&(s.directional.length=T,s.spot.length=h,s.rectArea.length=y,s.point.length=v,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+D-H,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=H,U.directionalLength=T,U.pointLength=v,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=S,U.numDirectionalShadows=w,U.numPointShadows=P,U.numSpotShadows=N,U.numSpotMaps=D,s.version=iN++)}function d(p,g){let _=0,x=0,E=0,T=0,v=0;const h=g.matrixWorldInverse;for(let y=0,S=p.length;y<S;y++){const w=p[y];if(w.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(h),_++}else if(w.isSpotLight){const P=s.spot[E];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(h),E++}else if(w.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),u.identity(),l.copy(w.matrixWorld),l.premultiply(h),u.extractRotation(l),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(w.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),x++}else if(w.isHemisphereLight){const P=s.hemi[v];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(h),v++}}}return{setup:f,setupView:d,state:s}}function $x(t,e){const n=new sN(t,e),i=[],s=[];function o(){i.length=0,s.length=0}function l(g){i.push(g)}function u(g){s.push(g)}function f(g){n.setup(i,g)}function d(g){n.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function oN(t,e){let n=new WeakMap;function i(o,l=0){const u=n.get(o);let f;return u===void 0?(f=new $x(t,e),n.set(o,[f])):l>=u.length?(f=new $x(t,e),u.push(f)):f=u[l],f}function s(){n=new WeakMap}return{get:i,dispose:s}}class aN extends Gf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lN extends Gf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cN=`uniform sampler2D shadow_pass;
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
}`;function fN(t,e,n){let i=new OM;const s=new Ct,o=new Ct,l=new yn,u=new aN({depthPacking:nb}),f=new lN,d={},p=n.maxTextureSize,g={[bs]:ei,[ei]:bs,[Nr]:Nr},_=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:uN,fragmentShader:cN}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new jr;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Br(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hM;let h=this.type;this.render=function(P,N,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const H=t.getRenderTarget(),C=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),oe=t.state;oe.setBlending(Rs),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const de=h!==Ur&&this.type===Ur,Y=h===Ur&&this.type!==Ur;for(let J=0,ie=P.length;J<ie;J++){const fe=P[J],ee=fe.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const B=ee.getFrameExtents();if(s.multiply(B),o.copy(ee.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/B.x),s.x=o.x*B.x,ee.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/B.y),s.y=o.y*B.y,ee.mapSize.y=o.y)),ee.map===null||de===!0||Y===!0){const j=this.type!==Ur?{minFilter:Bn,magFilter:Bn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new go(s.x,s.y,j),ee.map.texture.name=fe.name+".shadowMap",ee.camera.updateProjectionMatrix()}t.setRenderTarget(ee.map),t.clear();const te=ee.getViewportCount();for(let j=0;j<te;j++){const V=ee.getViewport(j);l.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),oe.viewport(l),ee.updateMatrices(fe,j),i=ee.getFrustum(),w(N,D,ee.camera,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===Ur&&y(ee,D),ee.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(H,C,U)};function y(P,N){const D=e.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new go(s.x,s.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(N,null,D,_,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(N,null,D,x,T,null)}function S(P,N,D,H){let C=null;const U=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)C=U;else if(C=D.isPointLight===!0?f:u,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=C.uuid,de=N.uuid;let Y=d[oe];Y===void 0&&(Y={},d[oe]=Y);let J=Y[de];J===void 0&&(J=C.clone(),Y[de]=J),C=J}if(C.visible=N.visible,C.wireframe=N.wireframe,H===Ur?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:g[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,D.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=t.properties.get(C);oe.light=D}return C}function w(P,N,D,H,C){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===Ur)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const de=e.update(P),Y=P.material;if(Array.isArray(Y)){const J=de.groups;for(let ie=0,fe=J.length;ie<fe;ie++){const ee=J[ie],B=Y[ee.materialIndex];if(B&&B.visible){const te=S(P,B,H,C);t.renderBufferDirect(D,null,de,te,P,ee)}}}else if(Y.visible){const J=S(P,Y,H,C);t.renderBufferDirect(D,null,de,J,P,null)}}const oe=P.children;for(let de=0,Y=oe.length;de<Y;de++)w(oe[de],N,D,H,C)}}function dN(t,e,n){const i=n.isWebGL2;function s(){let z=!1;const Te=new yn;let Q=null;const _e=new yn(0,0,0,0);return{setMask:function(Re){Q!==Re&&!z&&(t.colorMask(Re,Re,Re,Re),Q=Re)},setLocked:function(Re){z=Re},setClear:function(Re,_t,Ut,Jt,ti){ti===!0&&(Re*=Jt,_t*=Jt,Ut*=Jt),Te.set(Re,_t,Ut,Jt),_e.equals(Te)===!1&&(t.clearColor(Re,_t,Ut,Jt),_e.copy(Te))},reset:function(){z=!1,Q=null,_e.set(-1,0,0,0)}}}function o(){let z=!1,Te=null,Q=null,_e=null;return{setTest:function(Re){Re?qe(t.DEPTH_TEST):Be(t.DEPTH_TEST)},setMask:function(Re){Te!==Re&&!z&&(t.depthMask(Re),Te=Re)},setFunc:function(Re){if(Q!==Re){switch(Re){case bP:t.depthFunc(t.NEVER);break;case UP:t.depthFunc(t.ALWAYS);break;case DP:t.depthFunc(t.LESS);break;case Qp:t.depthFunc(t.LEQUAL);break;case IP:t.depthFunc(t.EQUAL);break;case NP:t.depthFunc(t.GEQUAL);break;case FP:t.depthFunc(t.GREATER);break;case OP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=Re}},setLocked:function(Re){z=Re},setClear:function(Re){_e!==Re&&(t.clearDepth(Re),_e=Re)},reset:function(){z=!1,Te=null,Q=null,_e=null}}}function l(){let z=!1,Te=null,Q=null,_e=null,Re=null,_t=null,Ut=null,Jt=null,ti=null;return{setTest:function(Ft){z||(Ft?qe(t.STENCIL_TEST):Be(t.STENCIL_TEST))},setMask:function(Ft){Te!==Ft&&!z&&(t.stencilMask(Ft),Te=Ft)},setFunc:function(Ft,Si,_n){(Q!==Ft||_e!==Si||Re!==_n)&&(t.stencilFunc(Ft,Si,_n),Q=Ft,_e=Si,Re=_n)},setOp:function(Ft,Si,_n){(_t!==Ft||Ut!==Si||Jt!==_n)&&(t.stencilOp(Ft,Si,_n),_t=Ft,Ut=Si,Jt=_n)},setLocked:function(Ft){z=Ft},setClear:function(Ft){ti!==Ft&&(t.clearStencil(Ft),ti=Ft)},reset:function(){z=!1,Te=null,Q=null,_e=null,Re=null,_t=null,Ut=null,Jt=null,ti=null}}}const u=new s,f=new o,d=new l,p=new WeakMap,g=new WeakMap;let _={},x={},E=new WeakMap,T=[],v=null,h=!1,y=null,S=null,w=null,P=null,N=null,D=null,H=null,C=!1,U=null,oe=null,de=null,Y=null,J=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,ee=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(B)[1]),fe=ee>=1):B.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),fe=ee>=2);let te=null,j={};const V=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),Se=new yn().fromArray(V),ve=new yn().fromArray($);function ye(z,Te,Q,_e){const Re=new Uint8Array(4),_t=t.createTexture();t.bindTexture(z,_t),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ut=0;Ut<Q;Ut++)i&&(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)?t.texImage3D(Te,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(Te+Ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return _t}const De={};De[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),De[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),De[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),qe(t.DEPTH_TEST),f.setFunc(Qp),Ke(!1),vt(I0),qe(t.CULL_FACE),Ne(Rs);function qe(z){_[z]!==!0&&(t.enable(z),_[z]=!0)}function Be(z){_[z]!==!1&&(t.disable(z),_[z]=!1)}function mt(z,Te){return x[z]!==Te?(t.bindFramebuffer(z,Te),x[z]=Te,i&&(z===t.DRAW_FRAMEBUFFER&&(x[t.FRAMEBUFFER]=Te),z===t.FRAMEBUFFER&&(x[t.DRAW_FRAMEBUFFER]=Te)),!0):!1}function wn(z,Te){let Q=T,_e=!1;if(z)if(Q=E.get(Te),Q===void 0&&(Q=[],E.set(Te,Q)),z.isWebGLMultipleRenderTargets){const Re=z.texture;if(Q.length!==Re.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let _t=0,Ut=Re.length;_t<Ut;_t++)Q[_t]=t.COLOR_ATTACHMENT0+_t;Q.length=Re.length,_e=!0}}else Q[0]!==t.COLOR_ATTACHMENT0&&(Q[0]=t.COLOR_ATTACHMENT0,_e=!0);else Q[0]!==t.BACK&&(Q[0]=t.BACK,_e=!0);_e&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function et(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const X={[ia]:t.FUNC_ADD,[SP]:t.FUNC_SUBTRACT,[yP]:t.FUNC_REVERSE_SUBTRACT};if(i)X[z0]=t.MIN,X[B0]=t.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(X[z0]=z.MIN_EXT,X[B0]=z.MAX_EXT)}const rn={[MP]:t.ZERO,[EP]:t.ONE,[TP]:t.SRC_COLOR,[pM]:t.SRC_ALPHA,[PP]:t.SRC_ALPHA_SATURATE,[CP]:t.DST_COLOR,[AP]:t.DST_ALPHA,[wP]:t.ONE_MINUS_SRC_COLOR,[mM]:t.ONE_MINUS_SRC_ALPHA,[LP]:t.ONE_MINUS_DST_COLOR,[RP]:t.ONE_MINUS_DST_ALPHA};function Ne(z,Te,Q,_e,Re,_t,Ut,Jt){if(z===Rs){h===!0&&(Be(t.BLEND),h=!1);return}if(h===!1&&(qe(t.BLEND),h=!0),z!==xP){if(z!==y||Jt!==C){if((S!==ia||N!==ia)&&(t.blendEquation(t.FUNC_ADD),S=ia,N=ia),Jt)switch(z){case Ta:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.ONE,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case O0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ta:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case O0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,P=null,D=null,H=null,y=z,C=Jt}return}Re=Re||Te,_t=_t||Q,Ut=Ut||_e,(Te!==S||Re!==N)&&(t.blendEquationSeparate(X[Te],X[Re]),S=Te,N=Re),(Q!==w||_e!==P||_t!==D||Ut!==H)&&(t.blendFuncSeparate(rn[Q],rn[_e],rn[_t],rn[Ut]),w=Q,P=_e,D=_t,H=Ut),y=z,C=!1}function $e(z,Te){z.side===Nr?Be(t.CULL_FACE):qe(t.CULL_FACE);let Q=z.side===ei;Te&&(Q=!Q),Ke(Q),z.blending===Ta&&z.transparent===!1?Ne(Rs):Ne(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),f.setFunc(z.depthFunc),f.setTest(z.depthTest),f.setMask(z.depthWrite),u.setMask(z.colorWrite);const _e=z.stencilWrite;d.setTest(_e),_e&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?qe(t.SAMPLE_ALPHA_TO_COVERAGE):Be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){U!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),U=z)}function vt(z){z!==gP?(qe(t.CULL_FACE),z!==oe&&(z===I0?t.cullFace(t.BACK):z===_P?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Be(t.CULL_FACE),oe=z}function ut(z){z!==de&&(fe&&t.lineWidth(z),de=z)}function it(z,Te,Q){z?(qe(t.POLYGON_OFFSET_FILL),(Y!==Te||J!==Q)&&(t.polygonOffset(Te,Q),Y=Te,J=Q)):Be(t.POLYGON_OFFSET_FILL)}function xt(z){z?qe(t.SCISSOR_TEST):Be(t.SCISSOR_TEST)}function Et(z){z===void 0&&(z=t.TEXTURE0+ie-1),te!==z&&(t.activeTexture(z),te=z)}function Yt(z,Te,Q){Q===void 0&&(te===null?Q=t.TEXTURE0+ie-1:Q=te);let _e=j[Q];_e===void 0&&(_e={type:void 0,texture:void 0},j[Q]=_e),(_e.type!==z||_e.texture!==Te)&&(te!==Q&&(t.activeTexture(Q),te=Q),t.bindTexture(z,Te||De[z]),_e.type=z,_e.texture=Te)}function I(){const z=j[te];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function L(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(z){Se.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Se.copy(z))}function be(z){ve.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function Ue(z,Te){let Q=g.get(Te);Q===void 0&&(Q=new WeakMap,g.set(Te,Q));let _e=Q.get(z);_e===void 0&&(_e=t.getUniformBlockIndex(Te,z.name),Q.set(z,_e))}function tt(z,Te){const _e=g.get(Te).get(z);p.get(Te)!==_e&&(t.uniformBlockBinding(Te,_e,z.__bindingPointIndex),p.set(Te,_e))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),_={},te=null,j={},x={},E=new WeakMap,T=[],v=null,h=!1,y=null,S=null,w=null,P=null,N=null,D=null,H=null,C=!1,U=null,oe=null,de=null,Y=null,J=null,Se.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:qe,disable:Be,bindFramebuffer:mt,drawBuffers:wn,useProgram:et,setBlending:Ne,setMaterial:$e,setFlipSided:Ke,setCullFace:vt,setLineWidth:ut,setPolygonOffset:it,setScissorTest:xt,activeTexture:Et,bindTexture:Yt,unbindTexture:I,compressedTexImage2D:L,compressedTexImage3D:ne,texImage2D:Oe,texImage3D:ze,updateUBOMapping:Ue,uniformBlockBinding:tt,texStorage2D:Ee,texStorage3D:le,texSubImage2D:ge,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:Fe,scissor:ke,viewport:be,reset:At}}function hN(t,e,n,i,s,o,l){const u=s.isWebGL2,f=s.maxTextures,d=s.maxCubemapSize,p=s.maxTextureSize,g=s.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let T;const v=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,L){return h?new OffscreenCanvas(I,L):Mf("canvas")}function S(I,L,ne,ge){let me=1;if((I.width>ge||I.height>ge)&&(me=ge/Math.max(I.width,I.height)),me<1||L===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const xe=L?sm:Math.floor,Fe=xe(me*I.width),Ee=xe(me*I.height);T===void 0&&(T=y(Fe,Ee));const le=ne?y(Fe,Ee):T;return le.width=Fe,le.height=Ee,le.getContext("2d").drawImage(I,0,0,Fe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Fe+"x"+Ee+")."),le}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function w(I){return dx(I.width)&&dx(I.height)}function P(I){return u?!1:I.wrapS!==Qi||I.wrapT!==Qi||I.minFilter!==Bn&&I.minFilter!==Di}function N(I,L){return I.generateMipmaps&&L&&I.minFilter!==Bn&&I.minFilter!==Di}function D(I){t.generateMipmap(I)}function H(I,L,ne,ge,me=!1){if(u===!1)return L;if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe=L;return L===t.RED&&(ne===t.FLOAT&&(xe=t.R32F),ne===t.HALF_FLOAT&&(xe=t.R16F),ne===t.UNSIGNED_BYTE&&(xe=t.R8)),L===t.RG&&(ne===t.FLOAT&&(xe=t.RG32F),ne===t.HALF_FLOAT&&(xe=t.RG16F),ne===t.UNSIGNED_BYTE&&(xe=t.RG8)),L===t.RGBA&&(ne===t.FLOAT&&(xe=t.RGBA32F),ne===t.HALF_FLOAT&&(xe=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(xe=ge===ot&&me===!1?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(xe=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(xe=t.RGB5_A1)),(xe===t.R16F||xe===t.R32F||xe===t.RG16F||xe===t.RG32F||xe===t.RGBA16F||xe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function C(I,L,ne){return N(I,ne)===!0||I.isFramebufferTexture&&I.minFilter!==Bn&&I.minFilter!==Di?Math.log2(Math.max(L.width,L.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?L.mipmaps.length:1}function U(I){return I===Bn||I===k0||I===Lh?t.NEAREST:t.LINEAR}function oe(I){const L=I.target;L.removeEventListener("dispose",oe),Y(L),L.isVideoTexture&&E.delete(L)}function de(I){const L=I.target;L.removeEventListener("dispose",de),ie(L)}function Y(I){const L=i.get(I);if(L.__webglInit===void 0)return;const ne=I.source,ge=v.get(ne);if(ge){const me=ge[L.__cacheKey];me.usedTimes--,me.usedTimes===0&&J(I),Object.keys(ge).length===0&&v.delete(ne)}i.remove(I)}function J(I){const L=i.get(I);t.deleteTexture(L.__webglTexture);const ne=I.source,ge=v.get(ne);delete ge[L.__cacheKey],l.memory.textures--}function ie(I){const L=I.texture,ne=i.get(I),ge=i.get(L);if(ge.__webglTexture!==void 0&&(t.deleteTexture(ge.__webglTexture),l.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)t.deleteFramebuffer(ne.__webglFramebuffer[me]),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer[me]);else{if(t.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let me=0;me<ne.__webglColorRenderbuffer.length;me++)ne.__webglColorRenderbuffer[me]&&t.deleteRenderbuffer(ne.__webglColorRenderbuffer[me]);ne.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let me=0,xe=L.length;me<xe;me++){const Fe=i.get(L[me]);Fe.__webglTexture&&(t.deleteTexture(Fe.__webglTexture),l.memory.textures--),i.remove(L[me])}i.remove(L),i.remove(I)}let fe=0;function ee(){fe=0}function B(){const I=fe;return I>=f&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+f),fe+=1,I}function te(I){const L=[];return L.push(I.wrapS),L.push(I.wrapT),L.push(I.wrapR||0),L.push(I.magFilter),L.push(I.minFilter),L.push(I.anisotropy),L.push(I.internalFormat),L.push(I.format),L.push(I.type),L.push(I.generateMipmaps),L.push(I.premultiplyAlpha),L.push(I.flipY),L.push(I.unpackAlignment),L.push(I.colorSpace),L.join()}function j(I,L){const ne=i.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){const ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(ne,I,L);return}}n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+L)}function V(I,L){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){mt(ne,I,L);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+L)}function $(I,L){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){mt(ne,I,L);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+L)}function Se(I,L){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){wn(ne,I,L);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+L)}const ve={[tm]:t.REPEAT,[Qi]:t.CLAMP_TO_EDGE,[nm]:t.MIRRORED_REPEAT},ye={[Bn]:t.NEAREST,[k0]:t.NEAREST_MIPMAP_NEAREST,[Lh]:t.NEAREST_MIPMAP_LINEAR,[Di]:t.LINEAR,[XP]:t.LINEAR_MIPMAP_NEAREST,[Jl]:t.LINEAR_MIPMAP_LINEAR},De={[ob]:t.NEVER,[hb]:t.ALWAYS,[ab]:t.LESS,[ub]:t.LEQUAL,[lb]:t.EQUAL,[db]:t.GEQUAL,[cb]:t.GREATER,[fb]:t.NOTEQUAL};function qe(I,L,ne){if(ne?(t.texParameteri(I,t.TEXTURE_WRAP_S,ve[L.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,ve[L.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,ve[L.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,ye[L.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,ye[L.minFilter])):(t.texParameteri(I,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(I,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(L.wrapS!==Qi||L.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(I,t.TEXTURE_MAG_FILTER,U(L.magFilter)),t.texParameteri(I,t.TEXTURE_MIN_FILTER,U(L.minFilter)),L.minFilter!==Bn&&L.minFilter!==Di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,De[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Bn||L.minFilter!==Lh&&L.minFilter!==Jl||L.type===vs&&e.has("OES_texture_float_linear")===!1||u===!1&&L.type===eu&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(t.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function Be(I,L){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,L.addEventListener("dispose",oe));const ge=L.source;let me=v.get(ge);me===void 0&&(me={},v.set(ge,me));const xe=te(L);if(xe!==I.__cacheKey){me[xe]===void 0&&(me[xe]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),me[xe].usedTimes++;const Fe=me[I.__cacheKey];Fe!==void 0&&(me[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&J(L)),I.__cacheKey=xe,I.__webglTexture=me[xe].texture}return ne}function mt(I,L,ne){let ge=t.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ge=t.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ge=t.TEXTURE_3D);const me=Be(I,L),xe=L.source;n.bindTexture(ge,I.__webglTexture,t.TEXTURE0+ne);const Fe=i.get(xe);if(xe.version!==Fe.__version||me===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ee=P(L)&&w(L.image)===!1;let le=S(L.image,Ee,!1,p);le=Yt(L,le);const Oe=w(le)||u,ze=o.convert(L.format,L.colorSpace);let ke=o.convert(L.type),be=H(L.internalFormat,ze,ke,L.colorSpace);qe(ge,L,Oe);let Ue;const tt=L.mipmaps,At=u&&L.isVideoTexture!==!0,z=Fe.__version===void 0||me===!0,Te=C(L,le,Oe);if(L.isDepthTexture)be=t.DEPTH_COMPONENT,u?L.type===vs?be=t.DEPTH_COMPONENT32F:L.type===_s?be=t.DEPTH_COMPONENT24:L.type===oo?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:L.type===vs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ao&&be===t.DEPTH_COMPONENT&&L.type!==ig&&L.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=_s,ke=o.convert(L.type)),L.format===Fa&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,L.type!==oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=oo,ke=o.convert(L.type))),z&&(At?n.texStorage2D(t.TEXTURE_2D,1,be,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,be,le.width,le.height,0,ze,ke,null));else if(L.isDataTexture)if(tt.length>0&&Oe){At&&z&&n.texStorage2D(t.TEXTURE_2D,Te,be,tt[0].width,tt[0].height);for(let Q=0,_e=tt.length;Q<_e;Q++)Ue=tt[Q],At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,ze,ke,Ue.data):n.texImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,ze,ke,Ue.data);L.generateMipmaps=!1}else At?(z&&n.texStorage2D(t.TEXTURE_2D,Te,be,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ze,ke,le.data)):n.texImage2D(t.TEXTURE_2D,0,be,le.width,le.height,0,ze,ke,le.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){At&&z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,be,tt[0].width,tt[0].height,le.depth);for(let Q=0,_e=tt.length;Q<_e;Q++)Ue=tt[Q],L.format!==Ji?ze!==null?At?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ue.width,Ue.height,le.depth,ze,Ue.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,be,Ue.width,Ue.height,le.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ue.width,Ue.height,le.depth,ze,ke,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,be,Ue.width,Ue.height,le.depth,0,ze,ke,Ue.data)}else{At&&z&&n.texStorage2D(t.TEXTURE_2D,Te,be,tt[0].width,tt[0].height);for(let Q=0,_e=tt.length;Q<_e;Q++)Ue=tt[Q],L.format!==Ji?ze!==null?At?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,ze,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,ze,ke,Ue.data):n.texImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,ze,ke,Ue.data)}else if(L.isDataArrayTexture)At?(z&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,be,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,ke,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,le.width,le.height,le.depth,0,ze,ke,le.data);else if(L.isData3DTexture)At?(z&&n.texStorage3D(t.TEXTURE_3D,Te,be,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,ke,le.data)):n.texImage3D(t.TEXTURE_3D,0,be,le.width,le.height,le.depth,0,ze,ke,le.data);else if(L.isFramebufferTexture){if(z)if(At)n.texStorage2D(t.TEXTURE_2D,Te,be,le.width,le.height);else{let Q=le.width,_e=le.height;for(let Re=0;Re<Te;Re++)n.texImage2D(t.TEXTURE_2D,Re,be,Q,_e,0,ze,ke,null),Q>>=1,_e>>=1}}else if(tt.length>0&&Oe){At&&z&&n.texStorage2D(t.TEXTURE_2D,Te,be,tt[0].width,tt[0].height);for(let Q=0,_e=tt.length;Q<_e;Q++)Ue=tt[Q],At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ze,ke,Ue):n.texImage2D(t.TEXTURE_2D,Q,be,ze,ke,Ue);L.generateMipmaps=!1}else At?(z&&n.texStorage2D(t.TEXTURE_2D,Te,be,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ze,ke,le)):n.texImage2D(t.TEXTURE_2D,0,be,ze,ke,le);N(L,Oe)&&D(ge),Fe.__version=xe.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function wn(I,L,ne){if(L.image.length!==6)return;const ge=Be(I,L),me=L.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+ne);const xe=i.get(me);if(me.version!==xe.__version||ge===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Fe=L.isCompressedTexture||L.image[0].isCompressedTexture,Ee=L.image[0]&&L.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Fe&&!Ee?le[Q]=S(L.image[Q],!1,!0,d):le[Q]=Ee?L.image[Q].image:L.image[Q],le[Q]=Yt(L,le[Q]);const Oe=le[0],ze=w(Oe)||u,ke=o.convert(L.format,L.colorSpace),be=o.convert(L.type),Ue=H(L.internalFormat,ke,be,L.colorSpace),tt=u&&L.isVideoTexture!==!0,At=xe.__version===void 0||ge===!0;let z=C(L,Oe,ze);qe(t.TEXTURE_CUBE_MAP,L,ze);let Te;if(Fe){tt&&At&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Ue,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){Te=le[Q].mipmaps;for(let _e=0;_e<Te.length;_e++){const Re=Te[_e];L.format!==Ji?ke!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Re.width,Re.height,ke,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Re.width,Re.height,ke,be,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ue,Re.width,Re.height,0,ke,be,Re.data)}}}else{Te=L.mipmaps,tt&&At&&(Te.length>0&&z++,n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Ue,le[0].width,le[0].height));for(let Q=0;Q<6;Q++)if(Ee){tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,ke,be,le[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,le[Q].width,le[Q].height,0,ke,be,le[Q].data);for(let _e=0;_e<Te.length;_e++){const _t=Te[_e].image[Q].image;tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,_t.width,_t.height,ke,be,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ue,_t.width,_t.height,0,ke,be,_t.data)}}else{tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,be,le[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,ke,be,le[Q]);for(let _e=0;_e<Te.length;_e++){const Re=Te[_e];tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,ke,be,Re.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ue,ke,be,Re.image[Q])}}}N(L,ze)&&D(t.TEXTURE_CUBE_MAP),xe.__version=me.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function et(I,L,ne,ge,me){const xe=o.convert(ne.format,ne.colorSpace),Fe=o.convert(ne.type),Ee=H(ne.internalFormat,xe,Fe,ne.colorSpace);i.get(L).__hasExternalTextures||(me===t.TEXTURE_3D||me===t.TEXTURE_2D_ARRAY?n.texImage3D(me,0,Ee,L.width,L.height,L.depth,0,xe,Fe,null):n.texImage2D(me,0,Ee,L.width,L.height,0,xe,Fe,null)),n.bindFramebuffer(t.FRAMEBUFFER,I),xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,me,i.get(ne).__webglTexture,0,it(L)):(me===t.TEXTURE_2D||me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ge,me,i.get(ne).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(I,L,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,I),L.depthBuffer&&!L.stencilBuffer){let ge=t.DEPTH_COMPONENT16;if(ne||xt(L)){const me=L.depthTexture;me&&me.isDepthTexture&&(me.type===vs?ge=t.DEPTH_COMPONENT32F:me.type===_s&&(ge=t.DEPTH_COMPONENT24));const xe=it(L);xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,ge,L.width,L.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ge,L.width,L.height)}else t.renderbufferStorage(t.RENDERBUFFER,ge,L.width,L.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,I)}else if(L.depthBuffer&&L.stencilBuffer){const ge=it(L);ne&&xt(L)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,t.DEPTH24_STENCIL8,L.width,L.height):xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,t.DEPTH24_STENCIL8,L.width,L.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,I)}else{const ge=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let me=0;me<ge.length;me++){const xe=ge[me],Fe=o.convert(xe.format,xe.colorSpace),Ee=o.convert(xe.type),le=H(xe.internalFormat,Fe,Ee,xe.colorSpace),Oe=it(L);ne&&xt(L)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,le,L.width,L.height):xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,le,L.width,L.height):t.renderbufferStorage(t.RENDERBUFFER,le,L.width,L.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rn(I,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),j(L.depthTexture,0);const ge=i.get(L.depthTexture).__webglTexture,me=it(L);if(L.depthTexture.format===ao)xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(L.depthTexture.format===Fa)xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ne(I){const L=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!L.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");rn(L.__webglFramebuffer,I)}else if(ne){L.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer[ge]),L.__webglDepthbuffer[ge]=t.createRenderbuffer(),X(L.__webglDepthbuffer[ge],I,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=t.createRenderbuffer(),X(L.__webglDepthbuffer,I,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(I,L,ne){const ge=i.get(I);L!==void 0&&et(ge.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),ne!==void 0&&Ne(I)}function Ke(I){const L=I.texture,ne=i.get(I),ge=i.get(L);I.addEventListener("dispose",de),I.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture()),ge.__version=L.version,l.memory.textures++);const me=I.isWebGLCubeRenderTarget===!0,xe=I.isWebGLMultipleRenderTargets===!0,Fe=w(I)||u;if(me){ne.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)ne.__webglFramebuffer[Ee]=t.createFramebuffer()}else{if(ne.__webglFramebuffer=t.createFramebuffer(),xe)if(s.drawBuffers){const Ee=I.texture;for(let le=0,Oe=Ee.length;le<Oe;le++){const ze=i.get(Ee[le]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&I.samples>0&&xt(I)===!1){const Ee=xe?L:[L];ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let le=0;le<Ee.length;le++){const Oe=Ee[le];ne.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[le]);const ze=o.convert(Oe.format,Oe.colorSpace),ke=o.convert(Oe.type),be=H(Oe.internalFormat,ze,ke,Oe.colorSpace,I.isXRRenderTarget===!0),Ue=it(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,be,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ne.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),X(ne.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,ge.__webglTexture),qe(t.TEXTURE_CUBE_MAP,L,Fe);for(let Ee=0;Ee<6;Ee++)et(ne.__webglFramebuffer[Ee],I,L,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee);N(L,Fe)&&D(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){const Ee=I.texture;for(let le=0,Oe=Ee.length;le<Oe;le++){const ze=Ee[le],ke=i.get(ze);n.bindTexture(t.TEXTURE_2D,ke.__webglTexture),qe(t.TEXTURE_2D,ze,Fe),et(ne.__webglFramebuffer,I,ze,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D),N(ze,Fe)&&D(t.TEXTURE_2D)}n.unbindTexture()}else{let Ee=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(u?Ee=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ee,ge.__webglTexture),qe(Ee,L,Fe),et(ne.__webglFramebuffer,I,L,t.COLOR_ATTACHMENT0,Ee),N(L,Fe)&&D(Ee),n.unbindTexture()}I.depthBuffer&&Ne(I)}function vt(I){const L=w(I)||u,ne=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ge=0,me=ne.length;ge<me;ge++){const xe=ne[ge];if(N(xe,L)){const Fe=I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(xe).__webglTexture;n.bindTexture(Fe,Ee),D(Fe),n.unbindTexture()}}}function ut(I){if(u&&I.samples>0&&xt(I)===!1){const L=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ne=I.width,ge=I.height;let me=t.COLOR_BUFFER_BIT;const xe=[],Fe=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(I),le=I.isWebGLMultipleRenderTargets===!0;if(le)for(let Oe=0;Oe<L.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){xe.push(t.COLOR_ATTACHMENT0+Oe),I.depthBuffer&&xe.push(Fe);const ze=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(ze===!1&&(I.depthBuffer&&(me|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&(me|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Oe]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),le){const ke=i.get(L[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,me,t.NEAREST),x&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Oe=0;Oe<L.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Oe]);const ze=i.get(L[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function it(I){return Math.min(g,I.samples)}function xt(I){const L=i.get(I);return u&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Et(I){const L=l.render.frame;E.get(I)!==L&&(E.set(I,L),I.update())}function Yt(I,L){const ne=I.colorSpace,ge=I.format,me=I.type;return I.isCompressedTexture===!0||I.format===im||ne!==dr&&ne!==uo&&(ne===ot?u===!1?e.has("EXT_sRGB")===!0&&ge===Ji?(I.format=im,I.minFilter=Di,I.generateMipmaps=!1):L=RM.sRGBToLinear(L):(ge!==Ji||me!==Cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),L}this.allocateTextureUnit=B,this.resetTextureUnits=ee,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=Se,this.rebindTextures=$e,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=et,this.useMultisampledRTT=xt}function pN(t,e,n){const i=n.isWebGL2;function s(o,l=uo){let u;if(o===Cs)return t.UNSIGNED_BYTE;if(o===xM)return t.UNSIGNED_SHORT_4_4_4_4;if(o===SM)return t.UNSIGNED_SHORT_5_5_5_1;if(o===qP)return t.BYTE;if(o===YP)return t.SHORT;if(o===ig)return t.UNSIGNED_SHORT;if(o===vM)return t.INT;if(o===_s)return t.UNSIGNED_INT;if(o===vs)return t.FLOAT;if(o===eu)return i?t.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(o===jP)return t.ALPHA;if(o===Ji)return t.RGBA;if(o===$P)return t.LUMINANCE;if(o===KP)return t.LUMINANCE_ALPHA;if(o===ao)return t.DEPTH_COMPONENT;if(o===Fa)return t.DEPTH_STENCIL;if(o===im)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(o===ZP)return t.RED;if(o===yM)return t.RED_INTEGER;if(o===QP)return t.RG;if(o===MM)return t.RG_INTEGER;if(o===EM)return t.RGBA_INTEGER;if(o===Ph||o===bh||o===Uh||o===Dh)if(l===ot)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(o===Ph)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===bh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Uh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Dh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(o===Ph)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===bh)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Uh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Dh)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===H0||o===G0||o===V0||o===W0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(o===H0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===G0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===V0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===W0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===JP)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===X0||o===q0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(o===X0)return l===ot?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(o===q0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Y0||o===j0||o===$0||o===K0||o===Z0||o===Q0||o===J0||o===ex||o===tx||o===nx||o===ix||o===rx||o===sx||o===ox)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(o===Y0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===j0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===$0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===K0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Z0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Q0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===J0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ex)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===tx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===nx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ix)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===rx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===sx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ox)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ih)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(o===Ih)return l===ot?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===eb||o===ax||o===lx||o===ux)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(o===Ih)return u.COMPRESSED_RED_RGTC1_EXT;if(o===ax)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===lx)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ux)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===oo?i?t.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:s}}class mN extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Fc=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}};const gN={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,i),h=this._getHandJoint(d,T);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=p.position.distanceTo(g.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(gN)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class _N extends pi{constructor(e,n,i,s,o,l,u,f,d,p){if(p=p!==void 0?p:ao,p!==ao&&p!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ao&&(i=_s),i===void 0&&p===Fa&&(i=oo),super(null,s,o,l,u,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:Bn,this.minFilter=f!==void 0?f:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vN extends Ha{constructor(e,n){super();const i=this;let s=null,o=1,l=null,u="local-floor",f=1,d=null,p=null,g=null,_=null,x=null,E=null;const T=n.getContextAttributes();let v=null,h=null;const y=[],S=[],w=new Ii;w.layers.enable(1),w.viewport=new yn;const P=new Ii;P.layers.enable(2),P.viewport=new yn;const N=[w,P],D=new mN;D.layers.enable(1),D.layers.enable(2);let H=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getGripSpace()},this.getHand=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getHandSpace()};function U(V){const $=S.indexOf(V.inputSource);if($===-1)return;const Se=y[$];Se!==void 0&&(Se.update(V.inputSource,V.frame,d||l),Se.dispatchEvent({type:V.type,data:V.inputSource}))}function oe(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",de);for(let V=0;V<y.length;V++){const $=S[V];$!==null&&(S[V]=null,y[V].disconnect($))}H=null,C=null,e.setRenderTarget(v),x=null,_=null,g=null,s=null,h=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(V){d=V},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",de),T.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,n,$),s.updateRenderState({baseLayer:x}),h=new go(x.framebufferWidth,x.framebufferHeight,{format:Ji,type:Cs,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let $=null,Se=null,ve=null;T.depth&&(ve=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=T.stencil?Fa:ao,Se=T.stencil?oo:_s);const ye={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:o};g=new XRWebGLBinding(s,n),_=g.createProjectionLayer(ye),s.updateRenderState({layers:[_]}),h=new go(_.textureWidth,_.textureHeight,{format:Ji,type:Cs,depthTexture:new _N(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=_.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function de(V){for(let $=0;$<V.removed.length;$++){const Se=V.removed[$],ve=S.indexOf(Se);ve>=0&&(S[ve]=null,y[ve].disconnect(Se))}for(let $=0;$<V.added.length;$++){const Se=V.added[$];let ve=S.indexOf(Se);if(ve===-1){for(let De=0;De<y.length;De++)if(De>=S.length){S.push(Se),ve=De;break}else if(S[De]===null){S[De]=Se,ve=De;break}if(ve===-1)break}const ye=y[ve];ye&&ye.connect(Se)}}const Y=new Z,J=new Z;function ie(V,$,Se){Y.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const ve=Y.distanceTo(J),ye=$.projectionMatrix.elements,De=Se.projectionMatrix.elements,qe=ye[14]/(ye[10]-1),Be=ye[14]/(ye[10]+1),mt=(ye[9]+1)/ye[5],wn=(ye[9]-1)/ye[5],et=(ye[8]-1)/ye[0],X=(De[8]+1)/De[0],rn=qe*et,Ne=qe*X,$e=ve/(-et+X),Ke=$e*-et;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ($e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const vt=qe+$e,ut=Be+$e,it=rn-Ke,xt=Ne+(ve-Ke),Et=mt*Be/ut*vt,Yt=wn*Be/ut*vt;V.projectionMatrix.makePerspective(it,xt,Et,Yt,vt,ut),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function fe(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;D.near=P.near=w.near=V.near,D.far=P.far=w.far=V.far,(H!==D.near||C!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,C=D.far);const $=V.parent,Se=D.cameras;fe(D,$);for(let ve=0;ve<Se.length;ve++)fe(Se[ve],$);Se.length===2?ie(D,w,P):D.projectionMatrix.copy(w.projectionMatrix),ee(V,D,$)};function ee(V,$,Se){Se===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(Se.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ve=V.children;for(let ye=0,De=ve.length;ye<De;ye++)ve[ye].updateMatrixWorld(!0);V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=rm*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(V){f=V,_!==null&&(_.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)};let B=null;function te(V,$){if(p=$.getViewerPose(d||l),E=$,p!==null){const Se=p.views;x!==null&&(e.setRenderTargetFramebuffer(h,x.framebuffer),e.setRenderTarget(h));let ve=!1;Se.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let ye=0;ye<Se.length;ye++){const De=Se[ye];let qe=null;if(x!==null)qe=x.getViewport(De);else{const mt=g.getViewSubImage(_,De);qe=mt.viewport,ye===0&&(e.setRenderTargetTextures(h,mt.colorTexture,_.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(h))}let Be=N[ye];Be===void 0&&(Be=new Ii,Be.layers.enable(ye),Be.viewport=new yn,N[ye]=Be),Be.matrix.fromArray(De.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(De.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),ye===0&&(D.matrix.copy(Be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push(Be)}}for(let Se=0;Se<y.length;Se++){const ve=S[Se],ye=y[Se];ve!==null&&ye!==void 0&&ye.update(ve,$,d||l)}B&&B(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),E=null}const j=new zM;j.setAnimationLoop(te),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}function xN(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,IM(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function s(v,h,y,S,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(v,h):h.isMeshToonMaterial?(o(v,h),g(v,h)):h.isMeshPhongMaterial?(o(v,h),p(v,h)):h.isMeshStandardMaterial?(o(v,h),_(v,h),h.isMeshPhysicalMaterial&&x(v,h,w)):h.isMeshMatcapMaterial?(o(v,h),E(v,h)):h.isMeshDepthMaterial?o(v,h):h.isMeshDistanceMaterial?(o(v,h),T(v,h)):h.isMeshNormalMaterial?o(v,h):h.isLineBasicMaterial?(l(v,h),h.isLineDashedMaterial&&u(v,h)):h.isPointsMaterial?f(v,h,y,S):h.isSpriteMaterial?d(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===ei&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===ei&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(v.envMap.value=y,v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap){v.lightMap.value=h.lightMap;const S=t.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=h.lightMapIntensity*S,n(h.lightMap,v.lightMapTransform)}h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function l(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function u(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function f(v,h,y,S){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*y,v.scale.value=S*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function d(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function p(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function g(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function _(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),e.get(h).envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function x(v,h,y){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&v.clearcoatNormalScale.value.negate())),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,h){h.matcap&&(v.matcap.value=h.matcap)}function T(v,h){const y=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SN(t,e,n,i){let s={},o={},l=[];const u=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(y,S){const w=S.program;i.uniformBlockBinding(y,w)}function d(y,S){let w=s[y.id];w===void 0&&(E(y),w=p(y),s[y.id]=w,y.addEventListener("dispose",v));const P=S.program;i.updateUBOMapping(y,P);const N=e.render.frame;o[y.id]!==N&&(_(y),o[y.id]=N)}function p(y){const S=g();y.__bindingPointIndex=S;const w=t.createBuffer(),P=y.__size,N=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,P,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,w),w}function g(){for(let y=0;y<u;y++)if(l.indexOf(y)===-1)return l.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(y){const S=s[y.id],w=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let N=0,D=w.length;N<D;N++){const H=w[N];if(x(H,N,P)===!0){const C=H.__offset,U=Array.isArray(H.value)?H.value:[H.value];let oe=0;for(let de=0;de<U.length;de++){const Y=U[de],J=T(Y);typeof Y=="number"?(H.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,C+oe,H.__data)):Y.isMatrix3?(H.__data[0]=Y.elements[0],H.__data[1]=Y.elements[1],H.__data[2]=Y.elements[2],H.__data[3]=Y.elements[0],H.__data[4]=Y.elements[3],H.__data[5]=Y.elements[4],H.__data[6]=Y.elements[5],H.__data[7]=Y.elements[0],H.__data[8]=Y.elements[6],H.__data[9]=Y.elements[7],H.__data[10]=Y.elements[8],H.__data[11]=Y.elements[0]):(Y.toArray(H.__data,oe),oe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,H.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(y,S,w){const P=y.value;if(w[S]===void 0){if(typeof P=="number")w[S]=P;else{const N=Array.isArray(P)?P:[P],D=[];for(let H=0;H<N.length;H++)D.push(N[H].clone());w[S]=D}return!0}else if(typeof P=="number"){if(w[S]!==P)return w[S]=P,!0}else{const N=Array.isArray(w[S])?w[S]:[w[S]],D=Array.isArray(P)?P:[P];for(let H=0;H<N.length;H++){const C=N[H];if(C.equals(D[H])===!1)return C.copy(D[H]),!0}}return!1}function E(y){const S=y.uniforms;let w=0;const P=16;let N=0;for(let D=0,H=S.length;D<H;D++){const C=S[D],U={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let de=0,Y=oe.length;de<Y;de++){const J=oe[de],ie=T(J);U.boundary+=ie.boundary,U.storage+=ie.storage}if(C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,D>0){N=w%P;const de=P-N;N!==0&&de-U.boundary<0&&(w+=P-N,C.__offset=w)}w+=U.storage}return N=w%P,N>0&&(w+=P-N),y.__size=w,y.__cache={},this}function T(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){const S=y.target;S.removeEventListener("dispose",v);const w=l.indexOf(S.__bindingPointIndex);l.splice(w,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function h(){for(const y in s)t.deleteBuffer(s[y]);l=[],s={},o={}}return{bind:f,update:d,dispose:h}}function yN(){const t=Mf("canvas");return t.style.display="block",t}class VM{constructor(e={}){const{canvas:n=yN(),context:i=null,depth:s=!0,stencil:o=!0,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=l;const x=new Uint32Array(4),E=new Int32Array(4);let T=null,v=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ot,this.useLegacyLights=!0,this.toneMapping=Gr,this.toneMappingExposure=1;const S=this;let w=!1,P=0,N=0,D=null,H=-1,C=null;const U=new yn,oe=new yn;let de=null;const Y=new Pt(0);let J=0,ie=n.width,fe=n.height,ee=1,B=null,te=null;const j=new yn(0,0,ie,fe),V=new yn(0,0,ie,fe);let $=!1;const Se=new OM;let ve=!1,ye=!1,De=null;const qe=new En,Be=new Ct,mt=new Z,wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return D===null?ee:1}let X=i;function rn(b,q){for(let re=0;re<b.length;re++){const W=b[re],ae=n.getContext(W,q);if(ae!==null)return ae}return null}try{const b={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ng}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",_e,!1),X===null){const q=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&q.shift(),X=rn(q,b),X===null)throw rn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,$e,Ke,vt,ut,it,xt,Et,Yt,I,L,ne,ge,me,xe,Fe,Ee,le,Oe,ze,ke,be,Ue,tt;function At(){Ne=new bI(X),$e=new TI(X,Ne,e),Ne.init($e),be=new pN(X,Ne,$e),Ke=new dN(X,Ne,$e),vt=new II(X),ut=new Q3,it=new hN(X,Ne,Ke,ut,$e,be,vt),xt=new AI(S),Et=new PI(S),Yt=new Vb(X,$e),Ue=new MI(X,Ne,Yt,$e),I=new UI(X,Yt,vt,Ue),L=new zI(X,I,Yt,vt),Oe=new OI(X,$e,it),Fe=new wI(ut),ne=new Z3(S,xt,Et,Ne,$e,Ue,Fe),ge=new xN(S,ut),me=new eN,xe=new oN(Ne,$e),le=new yI(S,xt,Et,Ke,L,_,f),Ee=new fN(S,L,$e),tt=new SN(X,vt,$e,Ke),ze=new EI(X,Ne,vt,$e),ke=new DI(X,Ne,vt,$e),vt.programs=ne.programs,S.capabilities=$e,S.extensions=Ne,S.properties=ut,S.renderLists=me,S.shadowMap=Ee,S.state=Ke,S.info=vt}At();const z=new vN(S,X);this.xr=z,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(ie,fe,!1))},this.getSize=function(b){return b.set(ie,fe)},this.setSize=function(b,q,re=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,fe=q,n.width=Math.floor(b*ee),n.height=Math.floor(q*ee),re===!0&&(n.style.width=b+"px",n.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(ie*ee,fe*ee).floor()},this.setDrawingBufferSize=function(b,q,re){ie=b,fe=q,ee=re,n.width=Math.floor(b*re),n.height=Math.floor(q*re),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,q,re,W){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,q,re,W),Ke.viewport(U.copy(j).multiplyScalar(ee).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,q,re,W){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,q,re,W),Ke.scissor(oe.copy(V).multiplyScalar(ee).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){Ke.setScissorTest($=b)},this.setOpaqueSort=function(b){B=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(b=!0,q=!0,re=!0){let W=0;if(b){let ae=!1;if(D!==null){const Pe=D.texture.format;ae=Pe===EM||Pe===MM||Pe===yM}if(ae){const Pe=D.texture.type,He=Pe===Cs||Pe===_s||Pe===ig||Pe===oo||Pe===xM||Pe===SM,Ye=le.getClearColor(),Xe=le.getClearAlpha(),at=Ye.r,je=Ye.g,Je=Ye.b;He?(x[0]=at,x[1]=je,x[2]=Je,x[3]=Xe,X.clearBufferuiv(X.COLOR,0,x)):(E[0]=at,E[1]=je,E[2]=Je,E[3]=Xe,X.clearBufferiv(X.COLOR,0,E))}else W|=X.COLOR_BUFFER_BIT}q&&(W|=X.DEPTH_BUFFER_BIT),re&&(W|=X.STENCIL_BUFFER_BIT),X.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),me.dispose(),xe.dispose(),ut.dispose(),xt.dispose(),Et.dispose(),L.dispose(),Ue.dispose(),tt.dispose(),ne.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ft),z.removeEventListener("sessionend",Si),De&&(De.dispose(),De=null),_n.stop()};function Te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=vt.autoReset,q=Ee.enabled,re=Ee.autoUpdate,W=Ee.needsUpdate,ae=Ee.type;At(),vt.autoReset=b,Ee.enabled=q,Ee.autoUpdate=re,Ee.needsUpdate=W,Ee.type=ae}function _e(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const q=b.target;q.removeEventListener("dispose",Re),_t(q)}function _t(b){Ut(b),ut.remove(b)}function Ut(b){const q=ut.get(b).programs;q!==void 0&&(q.forEach(function(re){ne.releaseProgram(re)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,re,W,ae,Pe){q===null&&(q=wn);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,Ye=Wf(b,q,re,W,ae);Ke.setMaterial(W,He);let Xe=re.index,at=1;W.wireframe===!0&&(Xe=I.getWireframeAttribute(re),at=2);const je=re.drawRange,Je=re.attributes.position;let Ot=je.start*at,kt=(je.start+je.count)*at;Pe!==null&&(Ot=Math.max(Ot,Pe.start*at),kt=Math.min(kt,(Pe.start+Pe.count)*at)),Xe!==null?(Ot=Math.max(Ot,0),kt=Math.min(kt,Xe.count)):Je!=null&&(Ot=Math.max(Ot,0),kt=Math.min(kt,Je.count));const Vn=kt-Ot;if(Vn<0||Vn===1/0)return;Ue.setup(ae,W,Ye,re,Xe);let yi,Ht=ze;if(Xe!==null&&(yi=Yt.get(Xe),Ht=ke,Ht.setIndex(yi)),ae.isMesh)W.wireframe===!0?(Ke.setLineWidth(W.wireframeLinewidth*et()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if(ae.isLine){let dt=W.linewidth;dt===void 0&&(dt=1),Ke.setLineWidth(dt*et()),ae.isLineSegments?Ht.setMode(X.LINES):ae.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else ae.isPoints?Ht.setMode(X.POINTS):ae.isSprite&&Ht.setMode(X.TRIANGLES);if(ae.isInstancedMesh)Ht.renderInstances(Ot,Vn,ae.count);else if(re.isInstancedBufferGeometry){const dt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wa=Math.min(re.instanceCount,dt);Ht.renderInstances(Ot,Vn,Wa)}else Ht.render(Ot,Vn)},this.compile=function(b,q){function re(W,ae,Pe){W.transparent===!0&&W.side===Nr&&W.forceSinglePass===!1?(W.side=ei,W.needsUpdate=!0,Mo(W,ae,Pe),W.side=bs,W.needsUpdate=!0,Mo(W,ae,Pe),W.side=Nr):Mo(W,ae,Pe)}v=xe.get(b),v.init(),y.push(v),b.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights(S.useLegacyLights),b.traverse(function(W){const ae=W.material;if(ae)if(Array.isArray(ae))for(let Pe=0;Pe<ae.length;Pe++){const He=ae[Pe];re(He,b,W)}else re(ae,b,W)}),y.pop(),v=null};let Jt=null;function ti(b){Jt&&Jt(b)}function Ft(){_n.stop()}function Si(){_n.start()}const _n=new zM;_n.setAnimationLoop(ti),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(b){Jt=b,z.setAnimationLoop(b),b===null?_n.stop():_n.start()},z.addEventListener("sessionstart",Ft),z.addEventListener("sessionend",Si),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(q),q=z.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,q,D),v=xe.get(b,y.length),v.init(),y.push(v),qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Se.setFromProjectionMatrix(qe),ye=this.localClippingEnabled,ve=Fe.init(this.clippingPlanes,ye),T=me.get(b,h.length),T.init(),h.push(T),So(b,q,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(B,te),this.info.render.frame++,ve===!0&&Fe.beginShadows();const re=v.state.shadowsArray;if(Ee.render(re,b,q),ve===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(T,b),v.setupLights(S.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let ae=0,Pe=W.length;ae<Pe;ae++){const He=W[ae];cu(T,b,He,He.viewport)}}else cu(T,b,q);D!==null&&(it.updateMultisampleRenderTarget(D),it.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(S,b,q),Ue.resetDefaultState(),H=-1,C=null,y.pop(),y.length>0?v=y[y.length-1]:v=null,h.pop(),h.length>0?T=h[h.length-1]:T=null};function So(b,q,re,W){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Se.intersectsSprite(b)){W&&mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qe);const He=L.update(b),Ye=b.material;Ye.visible&&T.push(b,He,Ye,re,mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Se.intersectsObject(b))){const He=L.update(b),Ye=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),mt.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),mt.copy(He.boundingSphere.center)),mt.applyMatrix4(b.matrixWorld).applyMatrix4(qe)),Array.isArray(Ye)){const Xe=He.groups;for(let at=0,je=Xe.length;at<je;at++){const Je=Xe[at],Ot=Ye[Je.materialIndex];Ot&&Ot.visible&&T.push(b,He,Ot,re,mt.z,Je)}}else Ye.visible&&T.push(b,He,Ye,re,mt.z,null)}}const Pe=b.children;for(let He=0,Ye=Pe.length;He<Ye;He++)So(Pe[He],q,re,W)}function cu(b,q,re,W){const ae=b.opaque,Pe=b.transmissive,He=b.transparent;v.setupLightsView(re),ve===!0&&Fe.setGlobalState(S.clippingPlanes,re),Pe.length>0&&Va(ae,Pe,q,re),W&&Ke.viewport(U.copy(W)),ae.length>0&&yo(ae,q,re),Pe.length>0&&yo(Pe,q,re),He.length>0&&yo(He,q,re),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Va(b,q,re,W){const ae=$e.isWebGL2;De===null&&(De=new go(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?eu:Cs,minFilter:Jl,samples:ae?4:0})),S.getDrawingBufferSize(Be),ae?De.setSize(Be.x,Be.y):De.setSize(sm(Be.x),sm(Be.y));const Pe=S.getRenderTarget();S.setRenderTarget(De),S.getClearColor(Y),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear();const He=S.toneMapping;S.toneMapping=Gr,yo(b,re,W),it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De);let Ye=!1;for(let Xe=0,at=q.length;Xe<at;Xe++){const je=q[Xe],Je=je.object,Ot=je.geometry,kt=je.material,Vn=je.group;if(kt.side===Nr&&Je.layers.test(W.layers)){const yi=kt.side;kt.side=ei,kt.needsUpdate=!0,fu(Je,re,W,Ot,kt,Vn),kt.side=yi,kt.needsUpdate=!0,Ye=!0}}Ye===!0&&(it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De)),S.setRenderTarget(Pe),S.setClearColor(Y,J),S.toneMapping=He}function yo(b,q,re){const W=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Pe=b.length;ae<Pe;ae++){const He=b[ae],Ye=He.object,Xe=He.geometry,at=W===null?He.material:W,je=He.group;Ye.layers.test(re.layers)&&fu(Ye,q,re,Xe,at,je)}}function fu(b,q,re,W,ae,Pe){b.onBeforeRender(S,q,re,W,ae,Pe),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ae.onBeforeRender(S,q,re,W,b,Pe),ae.transparent===!0&&ae.side===Nr&&ae.forceSinglePass===!1?(ae.side=ei,ae.needsUpdate=!0,S.renderBufferDirect(re,q,W,ae,b,Pe),ae.side=bs,ae.needsUpdate=!0,S.renderBufferDirect(re,q,W,ae,b,Pe),ae.side=Nr):S.renderBufferDirect(re,q,W,ae,b,Pe),b.onAfterRender(S,q,re,W,ae,Pe)}function Mo(b,q,re){q.isScene!==!0&&(q=wn);const W=ut.get(b),ae=v.state.lights,Pe=v.state.shadowsArray,He=ae.state.version,Ye=ne.getParameters(b,ae.state,Pe,q,re),Xe=ne.getProgramCacheKey(Ye);let at=W.programs;W.environment=b.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(b.isMeshStandardMaterial?Et:xt).get(b.envMap||W.environment),at===void 0&&(b.addEventListener("dispose",Re),at=new Map,W.programs=at);let je=at.get(Xe);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===He)return du(b,Ye),je}else Ye.uniforms=ne.getUniforms(b),b.onBuild(re,Ye,S),b.onBeforeCompile(Ye,S),je=ne.acquireProgram(Ye,Xe),at.set(Xe,je),W.uniforms=Ye.uniforms;const Je=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Fe.uniform),du(b,Ye),W.needsLights=qf(b),W.lightsStateVersion=He,W.needsLights&&(Je.ambientLightColor.value=ae.state.ambient,Je.lightProbe.value=ae.state.probe,Je.directionalLights.value=ae.state.directional,Je.directionalLightShadows.value=ae.state.directionalShadow,Je.spotLights.value=ae.state.spot,Je.spotLightShadows.value=ae.state.spotShadow,Je.rectAreaLights.value=ae.state.rectArea,Je.ltc_1.value=ae.state.rectAreaLTC1,Je.ltc_2.value=ae.state.rectAreaLTC2,Je.pointLights.value=ae.state.point,Je.pointLightShadows.value=ae.state.pointShadow,Je.hemisphereLights.value=ae.state.hemi,Je.directionalShadowMap.value=ae.state.directionalShadowMap,Je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Je.spotShadowMap.value=ae.state.spotShadowMap,Je.spotLightMatrix.value=ae.state.spotLightMatrix,Je.spotLightMap.value=ae.state.spotLightMap,Je.pointShadowMap.value=ae.state.pointShadowMap,Je.pointShadowMatrix.value=ae.state.pointShadowMatrix);const Ot=je.getUniforms(),kt=$c.seqWithValue(Ot.seq,Je);return W.currentProgram=je,W.uniformsList=kt,je}function du(b,q){const re=ut.get(b);re.outputColorSpace=q.outputColorSpace,re.instancing=q.instancing,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function Wf(b,q,re,W,ae){q.isScene!==!0&&(q=wn),it.resetTextureUnits();const Pe=q.fog,He=W.isMeshStandardMaterial?q.environment:null,Ye=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:dr,Xe=(W.isMeshStandardMaterial?Et:xt).get(W.envMap||He),at=W.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,je=!!re.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!re.morphAttributes.position,Ot=!!re.morphAttributes.normal,kt=!!re.morphAttributes.color,Vn=W.toneMapped?S.toneMapping:Gr,yi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ht=yi!==void 0?yi.length:0,dt=ut.get(W),Wa=v.state.lights;if(ve===!0&&(ye===!0||b!==C)){const dn=b===C&&W.id===H;Fe.setState(W,b,dn)}let en=!1;W.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Wa.state.version||dt.outputColorSpace!==Ye||ae.isInstancedMesh&&dt.instancing===!1||!ae.isInstancedMesh&&dt.instancing===!0||ae.isSkinnedMesh&&dt.skinning===!1||!ae.isSkinnedMesh&&dt.skinning===!0||dt.envMap!==Xe||W.fog===!0&&dt.fog!==Pe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Fe.numPlanes||dt.numIntersection!==Fe.numIntersection)||dt.vertexAlphas!==at||dt.vertexTangents!==je||dt.morphTargets!==Je||dt.morphNormals!==Ot||dt.morphColors!==kt||dt.toneMapping!==Vn||$e.isWebGL2===!0&&dt.morphTargetsCount!==Ht)&&(en=!0):(en=!0,dt.__version=W.version);let pr=dt.currentProgram;en===!0&&(pr=Mo(W,q,ae));let Xa=!1,Kr=!1,Eo=!1;const sn=pr.getUniforms(),mr=dt.uniforms;if(Ke.useProgram(pr.program)&&(Xa=!0,Kr=!0,Eo=!0),W.id!==H&&(H=W.id,Kr=!0),Xa||C!==b){if(sn.setValue(X,"projectionMatrix",b.projectionMatrix),$e.logarithmicDepthBuffer&&sn.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,Kr=!0,Eo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const dn=sn.map.cameraPosition;dn!==void 0&&dn.setValue(X,mt.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&sn.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ae.isSkinnedMesh)&&sn.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(ae.isSkinnedMesh){sn.setOptional(X,ae,"bindMatrix"),sn.setOptional(X,ae,"bindMatrixInverse");const dn=ae.skeleton;dn&&($e.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),sn.setValue(X,"boneTexture",dn.boneTexture,it),sn.setValue(X,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=re.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&$e.isWebGL2===!0)&&Oe.update(ae,re,pr),(Kr||dt.receiveShadow!==ae.receiveShadow)&&(dt.receiveShadow=ae.receiveShadow,sn.setValue(X,"receiveShadow",ae.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mr.envMap.value=Xe,mr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Kr&&(sn.setValue(X,"toneMappingExposure",S.toneMappingExposure),dt.needsLights&&Xf(mr,Eo),Pe&&W.fog===!0&&ge.refreshFogUniforms(mr,Pe),ge.refreshMaterialUniforms(mr,W,ee,fe,De),$c.upload(X,dt.uniformsList,mr,it)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($c.upload(X,dt.uniformsList,mr,it),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&sn.setValue(X,"center",ae.center),sn.setValue(X,"modelViewMatrix",ae.modelViewMatrix),sn.setValue(X,"normalMatrix",ae.normalMatrix),sn.setValue(X,"modelMatrix",ae.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let wo=0,Yf=dn.length;wo<Yf;wo++)if($e.isWebGL2){const qa=dn[wo];tt.update(qa,pr),tt.bind(qa,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function Xf(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function qf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,q,re){ut.get(b.texture).__webglTexture=q,ut.get(b.depthTexture).__webglTexture=re;const W=ut.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=re===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,q){const re=ut.get(b);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,re=0){D=b,P=q,N=re;let W=!0,ae=null,Pe=!1,He=!1;if(b){const Xe=ut.get(b);Xe.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(X.FRAMEBUFFER,null),W=!1):Xe.__webglFramebuffer===void 0?it.setupRenderTarget(b):Xe.__hasExternalTextures&&it.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(He=!0);const je=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ae=je[q],Pe=!0):$e.isWebGL2&&b.samples>0&&it.useMultisampledRTT(b)===!1?ae=ut.get(b).__webglMultisampledFramebuffer:ae=je,U.copy(b.viewport),oe.copy(b.scissor),de=b.scissorTest}else U.copy(j).multiplyScalar(ee).floor(),oe.copy(V).multiplyScalar(ee).floor(),de=$;if(Ke.bindFramebuffer(X.FRAMEBUFFER,ae)&&$e.drawBuffers&&W&&Ke.drawBuffers(b,ae),Ke.viewport(U),Ke.scissor(oe),Ke.setScissorTest(de),Pe){const Xe=ut.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,re)}else if(He){const Xe=ut.get(b.texture),at=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,re||0,at)}H=-1},this.readRenderTargetPixels=function(b,q,re,W,ae,Pe,He){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){Ke.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const Xe=b.texture,at=Xe.format,je=Xe.type;if(at!==Ji&&be.convert(at)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=je===eu&&(Ne.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(je!==Cs&&be.convert(je)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===vs&&($e.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-W&&re>=0&&re<=b.height-ae&&X.readPixels(q,re,W,ae,be.convert(at),be.convert(je),Pe)}finally{const Xe=D!==null?ut.get(D).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(b,q,re=0){const W=Math.pow(2,-re),ae=Math.floor(q.image.width*W),Pe=Math.floor(q.image.height*W);it.setTexture2D(q,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,b.x,b.y,ae,Pe),Ke.unbindTexture()},this.copyTextureToTexture=function(b,q,re,W=0){const ae=q.image.width,Pe=q.image.height,He=be.convert(re.format),Ye=be.convert(re.type);it.setTexture2D(re,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment),q.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,b.x,b.y,ae,Pe,He,Ye,q.image.data):q.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,b.x,b.y,q.mipmaps[0].width,q.mipmaps[0].height,He,q.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,W,b.x,b.y,He,Ye,q.image),W===0&&re.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(b,q,re,W,ae=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,He=b.max.y-b.min.y+1,Ye=b.max.z-b.min.z+1,Xe=be.convert(W.format),at=be.convert(W.type);let je;if(W.isData3DTexture)it.setTexture3D(W,0),je=X.TEXTURE_3D;else if(W.isDataArrayTexture)it.setTexture2DArray(W,0),je=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Je=X.getParameter(X.UNPACK_ROW_LENGTH),Ot=X.getParameter(X.UNPACK_IMAGE_HEIGHT),kt=X.getParameter(X.UNPACK_SKIP_PIXELS),Vn=X.getParameter(X.UNPACK_SKIP_ROWS),yi=X.getParameter(X.UNPACK_SKIP_IMAGES),Ht=re.isCompressedTexture?re.mipmaps[0]:re.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ht.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ht.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,b.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,b.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,b.min.z),re.isDataTexture||re.isData3DTexture?X.texSubImage3D(je,ae,q.x,q.y,q.z,Pe,He,Ye,Xe,at,Ht.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(je,ae,q.x,q.y,q.z,Pe,He,Ye,Xe,Ht.data)):X.texSubImage3D(je,ae,q.x,q.y,q.z,Pe,He,Ye,Xe,at,Ht),X.pixelStorei(X.UNPACK_ROW_LENGTH,Je),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot),X.pixelStorei(X.UNPACK_SKIP_PIXELS,kt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Vn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),ae===0&&W.generateMipmaps&&X.generateMipmap(je),Ke.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?it.setTextureCube(b,0):b.isData3DTexture?it.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?it.setTexture2DArray(b,0):it.setTexture2D(b,0),Ke.unbindTexture()},this.resetState=function(){P=0,N=0,D=null,Ke.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?lo:TM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lo?ot:dr}}class MN extends VM{}MN.prototype.isWebGL1Renderer=!0;class EN extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}const Kx={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class TN{constructor(e,n,i){const s=this;let o=!1,l=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=d.length;g<_;g+=2){const x=d[g],E=d[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const wN=new TN;class lg{constructor(e){this.manager=e!==void 0?e:wN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,o){i.load(e,s,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lg.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class AN extends Error{constructor(e,n){super(e),this.response=n}}class RN extends lg{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Kx.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(o),this.manager.itemEnd(e)},0),o;if(br[e]!==void 0){br[e].push({onLoad:n,onProgress:i,onError:s});return}br[e]=[],br[e].push({onLoad:n,onProgress:i,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=br[e],g=d.body.getReader(),_=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),x=_?parseInt(_):0,E=x!==0;let T=0;const v=new ReadableStream({start(h){y();function y(){g.read().then(({done:S,value:w})=>{if(S)h.close();else{T+=w.byteLength;const P=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:x});for(let N=0,D=p.length;N<D;N++){const H=p[N];H.onProgress&&H.onProgress(P)}h.enqueue(w),y()}})}}});return new Response(v)}else throw new AN(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Kx.add(e,d);const p=br[e];delete br[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=br[e];if(p===void 0)throw this.manager.itemError(e),d;delete br[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ng}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ng);class CN extends lg{constructor(e){super(e)}load(e,n,i,s){const o=this,l=new RN(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{n(o.parse(u))}catch(f){s?s(f):console.error(f),o.manager.itemError(e)}},i,s)}parse(e){function n(d){const p=new DataView(d),g=32/8*3+32/8*3*3+16/8,_=p.getUint32(80,!0);if(80+32/8+_*g===p.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(i(E,p,T))return!1;return!0}function i(d,p,g){for(let _=0,x=d.length;_<x;_++)if(d[_]!==p.getUint8(g+_))return!1;return!0}function s(d){const p=new DataView(d),g=p.getUint32(80,!0);let _,x,E,T=!1,v,h,y,S,w;for(let oe=0;oe<80-10;oe++)p.getUint32(oe,!1)==1129270351&&p.getUint8(oe+4)==82&&p.getUint8(oe+5)==61&&(T=!0,v=new Float32Array(g*3*3),h=p.getUint8(oe+6)/255,y=p.getUint8(oe+7)/255,S=p.getUint8(oe+8)/255,w=p.getUint8(oe+9)/255);const P=84,N=12*4+2,D=new jr,H=new Float32Array(g*3*3),C=new Float32Array(g*3*3),U=new Pt;for(let oe=0;oe<g;oe++){const de=P+oe*N,Y=p.getFloat32(de,!0),J=p.getFloat32(de+4,!0),ie=p.getFloat32(de+8,!0);if(T){const fe=p.getUint16(de+48,!0);fe&32768?(_=h,x=y,E=S):(_=(fe&31)/31,x=(fe>>5&31)/31,E=(fe>>10&31)/31)}for(let fe=1;fe<=3;fe++){const ee=de+fe*12,B=oe*3*3+(fe-1)*3;H[B]=p.getFloat32(ee,!0),H[B+1]=p.getFloat32(ee+4,!0),H[B+2]=p.getFloat32(ee+8,!0),C[B]=Y,C[B+1]=J,C[B+2]=ie,T&&(U.set(_,x,E).convertSRGBToLinear(),v[B]=U.r,v[B+1]=U.g,v[B+2]=U.b)}}return D.setAttribute("position",new gi(H,3)),D.setAttribute("normal",new gi(C,3)),T&&(D.setAttribute("color",new gi(v,3)),D.hasColors=!0,D.alpha=w),D}function o(d){const p=new jr,g=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,T=new RegExp("vertex"+E+E+E,"g"),v=new RegExp("normal"+E+E+E,"g"),h=[],y=[],S=new Z;let w,P=0,N=0,D=0;for(;(w=g.exec(d))!==null;){N=D;const H=w[0];for(;(w=_.exec(H))!==null;){let oe=0,de=0;const Y=w[0];for(;(w=v.exec(Y))!==null;)S.x=parseFloat(w[1]),S.y=parseFloat(w[2]),S.z=parseFloat(w[3]),de++;for(;(w=T.exec(Y))!==null;)h.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),y.push(S.x,S.y,S.z),oe++,D++;de!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),oe!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const C=N,U=D-N;p.addGroup(C,U,P),P++}return p.setAttribute("position",new Vr(h,3)),p.setAttribute("normal",new Vr(y,3)),p}function l(d){return typeof d!="string"?new TextDecoder().decode(d):d}function u(d){if(typeof d=="string"){const p=new Uint8Array(d.length);for(let g=0;g<d.length;g++)p[g]=d.charCodeAt(g)&255;return p.buffer||p}else return d}const f=u(e);return n(f)?s(f):o(l(e))}}var Ef={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ef.exports;(function(t,e){(function(){var n,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",g=1,_=2,x=4,E=1,T=2,v=1,h=2,y=4,S=8,w=16,P=32,N=64,D=128,H=256,C=512,U=30,oe="...",de=800,Y=16,J=1,ie=2,fe=3,ee=1/0,B=9007199254740991,te=17976931348623157e292,j=0/0,V=4294967295,$=V-1,Se=V>>>1,ve=[["ary",D],["bind",v],["bindKey",h],["curry",S],["curryRight",w],["flip",C],["partial",P],["partialRight",N],["rearg",H]],ye="[object Arguments]",De="[object Array]",qe="[object AsyncFunction]",Be="[object Boolean]",mt="[object Date]",wn="[object DOMException]",et="[object Error]",X="[object Function]",rn="[object GeneratorFunction]",Ne="[object Map]",$e="[object Number]",Ke="[object Null]",vt="[object Object]",ut="[object Promise]",it="[object Proxy]",xt="[object RegExp]",Et="[object Set]",Yt="[object String]",I="[object Symbol]",L="[object Undefined]",ne="[object WeakMap]",ge="[object WeakSet]",me="[object ArrayBuffer]",xe="[object DataView]",Fe="[object Float32Array]",Ee="[object Float64Array]",le="[object Int8Array]",Oe="[object Int16Array]",ze="[object Int32Array]",ke="[object Uint8Array]",be="[object Uint8ClampedArray]",Ue="[object Uint16Array]",tt="[object Uint32Array]",At=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,Te=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,_e=/[&<>"']/g,Re=RegExp(Q.source),_t=RegExp(_e.source),Ut=/<%-([\s\S]+?)%>/g,Jt=/<%([\s\S]+?)%>/g,ti=/<%=([\s\S]+?)%>/g,Ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Si=/^\w*$/,_n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,So=/[\\^$.*+?()[\]{}|]/g,cu=RegExp(So.source),Va=/^\s+/,yo=/\s/,fu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Mo=/\{\n\/\* \[wrapped with (.+)\] \*/,du=/,? & /,Wf=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xf=/[()=,{}\[\]\/\s]/,qf=/\\(\\)?/g,b=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,q=/\w*$/,re=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,ae=/^\[object .+?Constructor\]$/,Pe=/^0o[0-7]+$/i,He=/^(?:0|[1-9]\d*)$/,Ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xe=/($^)/,at=/['\n\r\u2028\u2029\\]/g,je="\\ud800-\\udfff",Je="\\u0300-\\u036f",Ot="\\ufe20-\\ufe2f",kt="\\u20d0-\\u20ff",Vn=Je+Ot+kt,yi="\\u2700-\\u27bf",Ht="a-z\\xdf-\\xf6\\xf8-\\xff",dt="\\xac\\xb1\\xd7\\xf7",Wa="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",en="\\u2000-\\u206f",pr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xa="A-Z\\xc0-\\xd6\\xd8-\\xde",Kr="\\ufe0e\\ufe0f",Eo=dt+Wa+en+pr,sn="['’]",mr="["+je+"]",To="["+Eo+"]",dn="["+Vn+"]",wo="\\d+",Yf="["+yi+"]",qa="["+Ht+"]",cg="[^"+je+Eo+wo+yi+Ht+Xa+"]",jf="\\ud83c[\\udffb-\\udfff]",XM="(?:"+dn+"|"+jf+")",fg="[^"+je+"]",$f="(?:\\ud83c[\\udde6-\\uddff]){2}",Kf="[\\ud800-\\udbff][\\udc00-\\udfff]",Ao="["+Xa+"]",dg="\\u200d",hg="(?:"+qa+"|"+cg+")",qM="(?:"+Ao+"|"+cg+")",pg="(?:"+sn+"(?:d|ll|m|re|s|t|ve))?",mg="(?:"+sn+"(?:D|LL|M|RE|S|T|VE))?",gg=XM+"?",_g="["+Kr+"]?",YM="(?:"+dg+"(?:"+[fg,$f,Kf].join("|")+")"+_g+gg+")*",jM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$M="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vg=_g+gg+YM,KM="(?:"+[Yf,$f,Kf].join("|")+")"+vg,ZM="(?:"+[fg+dn+"?",dn,$f,Kf,mr].join("|")+")",QM=RegExp(sn,"g"),JM=RegExp(dn,"g"),Zf=RegExp(jf+"(?="+jf+")|"+ZM+vg,"g"),eE=RegExp([Ao+"?"+qa+"+"+pg+"(?="+[To,Ao,"$"].join("|")+")",qM+"+"+mg+"(?="+[To,Ao+hg,"$"].join("|")+")",Ao+"?"+hg+"+"+pg,Ao+"+"+mg,$M,jM,wo,KM].join("|"),"g"),tE=RegExp("["+dg+je+Vn+Kr+"]"),nE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,iE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rE=-1,Dt={};Dt[Fe]=Dt[Ee]=Dt[le]=Dt[Oe]=Dt[ze]=Dt[ke]=Dt[be]=Dt[Ue]=Dt[tt]=!0,Dt[ye]=Dt[De]=Dt[me]=Dt[Be]=Dt[xe]=Dt[mt]=Dt[et]=Dt[X]=Dt[Ne]=Dt[$e]=Dt[vt]=Dt[xt]=Dt[Et]=Dt[Yt]=Dt[ne]=!1;var Lt={};Lt[ye]=Lt[De]=Lt[me]=Lt[xe]=Lt[Be]=Lt[mt]=Lt[Fe]=Lt[Ee]=Lt[le]=Lt[Oe]=Lt[ze]=Lt[Ne]=Lt[$e]=Lt[vt]=Lt[xt]=Lt[Et]=Lt[Yt]=Lt[I]=Lt[ke]=Lt[be]=Lt[Ue]=Lt[tt]=!0,Lt[et]=Lt[X]=Lt[ne]=!1;var sE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},oE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},aE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},lE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},uE=parseFloat,cE=parseInt,xg=typeof ll=="object"&&ll&&ll.Object===Object&&ll,fE=typeof self=="object"&&self&&self.Object===Object&&self,vn=xg||fE||Function("return this")(),Qf=e&&!e.nodeType&&e,Ns=Qf&&!0&&t&&!t.nodeType&&t,Sg=Ns&&Ns.exports===Qf,Jf=Sg&&xg.process,Mi=function(){try{var k=Ns&&Ns.require&&Ns.require("util").types;return k||Jf&&Jf.binding&&Jf.binding("util")}catch{}}(),yg=Mi&&Mi.isArrayBuffer,Mg=Mi&&Mi.isDate,Eg=Mi&&Mi.isMap,Tg=Mi&&Mi.isRegExp,wg=Mi&&Mi.isSet,Ag=Mi&&Mi.isTypedArray;function ni(k,se,K){switch(K.length){case 0:return k.call(se);case 1:return k.call(se,K[0]);case 2:return k.call(se,K[0],K[1]);case 3:return k.call(se,K[0],K[1],K[2])}return k.apply(se,K)}function dE(k,se,K,Ce){for(var Ze=-1,yt=k==null?0:k.length;++Ze<yt;){var on=k[Ze];se(Ce,on,K(on),k)}return Ce}function Ei(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce&&se(k[K],K,k)!==!1;);return k}function hE(k,se){for(var K=k==null?0:k.length;K--&&se(k[K],K,k)!==!1;);return k}function Rg(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce;)if(!se(k[K],K,k))return!1;return!0}function Zr(k,se){for(var K=-1,Ce=k==null?0:k.length,Ze=0,yt=[];++K<Ce;){var on=k[K];se(on,K,k)&&(yt[Ze++]=on)}return yt}function hu(k,se){var K=k==null?0:k.length;return!!K&&Ro(k,se,0)>-1}function ed(k,se,K){for(var Ce=-1,Ze=k==null?0:k.length;++Ce<Ze;)if(K(se,k[Ce]))return!0;return!1}function zt(k,se){for(var K=-1,Ce=k==null?0:k.length,Ze=Array(Ce);++K<Ce;)Ze[K]=se(k[K],K,k);return Ze}function Qr(k,se){for(var K=-1,Ce=se.length,Ze=k.length;++K<Ce;)k[Ze+K]=se[K];return k}function td(k,se,K,Ce){var Ze=-1,yt=k==null?0:k.length;for(Ce&&yt&&(K=k[++Ze]);++Ze<yt;)K=se(K,k[Ze],Ze,k);return K}function pE(k,se,K,Ce){var Ze=k==null?0:k.length;for(Ce&&Ze&&(K=k[--Ze]);Ze--;)K=se(K,k[Ze],Ze,k);return K}function nd(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce;)if(se(k[K],K,k))return!0;return!1}var mE=id("length");function gE(k){return k.split("")}function _E(k){return k.match(Wf)||[]}function Cg(k,se,K){var Ce;return K(k,function(Ze,yt,on){if(se(Ze,yt,on))return Ce=yt,!1}),Ce}function pu(k,se,K,Ce){for(var Ze=k.length,yt=K+(Ce?1:-1);Ce?yt--:++yt<Ze;)if(se(k[yt],yt,k))return yt;return-1}function Ro(k,se,K){return se===se?LE(k,se,K):pu(k,Lg,K)}function vE(k,se,K,Ce){for(var Ze=K-1,yt=k.length;++Ze<yt;)if(Ce(k[Ze],se))return Ze;return-1}function Lg(k){return k!==k}function Pg(k,se){var K=k==null?0:k.length;return K?sd(k,se)/K:j}function id(k){return function(se){return se==null?n:se[k]}}function rd(k){return function(se){return k==null?n:k[se]}}function bg(k,se,K,Ce,Ze){return Ze(k,function(yt,on,Rt){K=Ce?(Ce=!1,yt):se(K,yt,on,Rt)}),K}function xE(k,se){var K=k.length;for(k.sort(se);K--;)k[K]=k[K].value;return k}function sd(k,se){for(var K,Ce=-1,Ze=k.length;++Ce<Ze;){var yt=se(k[Ce]);yt!==n&&(K=K===n?yt:K+yt)}return K}function od(k,se){for(var K=-1,Ce=Array(k);++K<k;)Ce[K]=se(K);return Ce}function SE(k,se){return zt(se,function(K){return[K,k[K]]})}function Ug(k){return k&&k.slice(0,Fg(k)+1).replace(Va,"")}function ii(k){return function(se){return k(se)}}function ad(k,se){return zt(se,function(K){return k[K]})}function Ya(k,se){return k.has(se)}function Dg(k,se){for(var K=-1,Ce=k.length;++K<Ce&&Ro(se,k[K],0)>-1;);return K}function Ig(k,se){for(var K=k.length;K--&&Ro(se,k[K],0)>-1;);return K}function yE(k,se){for(var K=k.length,Ce=0;K--;)k[K]===se&&++Ce;return Ce}var ME=rd(sE),EE=rd(oE);function TE(k){return"\\"+lE[k]}function wE(k,se){return k==null?n:k[se]}function Co(k){return tE.test(k)}function AE(k){return nE.test(k)}function RE(k){for(var se,K=[];!(se=k.next()).done;)K.push(se.value);return K}function ld(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce,Ze){K[++se]=[Ze,Ce]}),K}function Ng(k,se){return function(K){return k(se(K))}}function Jr(k,se){for(var K=-1,Ce=k.length,Ze=0,yt=[];++K<Ce;){var on=k[K];(on===se||on===p)&&(k[K]=p,yt[Ze++]=K)}return yt}function mu(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce){K[++se]=Ce}),K}function CE(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce){K[++se]=[Ce,Ce]}),K}function LE(k,se,K){for(var Ce=K-1,Ze=k.length;++Ce<Ze;)if(k[Ce]===se)return Ce;return-1}function PE(k,se,K){for(var Ce=K+1;Ce--;)if(k[Ce]===se)return Ce;return Ce}function Lo(k){return Co(k)?UE(k):mE(k)}function Bi(k){return Co(k)?DE(k):gE(k)}function Fg(k){for(var se=k.length;se--&&yo.test(k.charAt(se)););return se}var bE=rd(aE);function UE(k){for(var se=Zf.lastIndex=0;Zf.test(k);)++se;return se}function DE(k){return k.match(Zf)||[]}function IE(k){return k.match(eE)||[]}var NE=function k(se){se=se==null?vn:Po.defaults(vn.Object(),se,Po.pick(vn,iE));var K=se.Array,Ce=se.Date,Ze=se.Error,yt=se.Function,on=se.Math,Rt=se.Object,ud=se.RegExp,FE=se.String,Ti=se.TypeError,gu=K.prototype,OE=yt.prototype,bo=Rt.prototype,_u=se["__core-js_shared__"],vu=OE.toString,Tt=bo.hasOwnProperty,zE=0,Og=function(){var r=/[^.]+$/.exec(_u&&_u.keys&&_u.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),xu=bo.toString,BE=vu.call(Rt),kE=vn._,HE=ud("^"+vu.call(Tt).replace(So,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Su=Sg?se.Buffer:n,es=se.Symbol,yu=se.Uint8Array,zg=Su?Su.allocUnsafe:n,Mu=Ng(Rt.getPrototypeOf,Rt),Bg=Rt.create,kg=bo.propertyIsEnumerable,Eu=gu.splice,Hg=es?es.isConcatSpreadable:n,ja=es?es.iterator:n,Fs=es?es.toStringTag:n,Tu=function(){try{var r=Hs(Rt,"defineProperty");return r({},"",{}),r}catch{}}(),GE=se.clearTimeout!==vn.clearTimeout&&se.clearTimeout,VE=Ce&&Ce.now!==vn.Date.now&&Ce.now,WE=se.setTimeout!==vn.setTimeout&&se.setTimeout,wu=on.ceil,Au=on.floor,cd=Rt.getOwnPropertySymbols,XE=Su?Su.isBuffer:n,Gg=se.isFinite,qE=gu.join,YE=Ng(Rt.keys,Rt),an=on.max,An=on.min,jE=Ce.now,$E=se.parseInt,Vg=on.random,KE=gu.reverse,fd=Hs(se,"DataView"),$a=Hs(se,"Map"),dd=Hs(se,"Promise"),Uo=Hs(se,"Set"),Ka=Hs(se,"WeakMap"),Za=Hs(Rt,"create"),Ru=Ka&&new Ka,Do={},ZE=Gs(fd),QE=Gs($a),JE=Gs(dd),e1=Gs(Uo),t1=Gs(Ka),Cu=es?es.prototype:n,Qa=Cu?Cu.valueOf:n,Wg=Cu?Cu.toString:n;function A(r){if(jt(r)&&!Qe(r)&&!(r instanceof ht)){if(r instanceof wi)return r;if(Tt.call(r,"__wrapped__"))return X_(r)}return new wi(r)}var Io=function(){function r(){}return function(a){if(!Gt(a))return{};if(Bg)return Bg(a);r.prototype=a;var c=new r;return r.prototype=n,c}}();function Lu(){}function wi(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}A.templateSettings={escape:Ut,evaluate:Jt,interpolate:ti,variable:"",imports:{_:A}},A.prototype=Lu.prototype,A.prototype.constructor=A,wi.prototype=Io(Lu.prototype),wi.prototype.constructor=wi;function ht(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function n1(){var r=new ht(this.__wrapped__);return r.__actions__=Wn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Wn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Wn(this.__views__),r}function i1(){if(this.__filtered__){var r=new ht(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function r1(){var r=this.__wrapped__.value(),a=this.__dir__,c=Qe(r),m=a<0,M=c?r.length:0,R=gT(0,M,this.__views__),F=R.start,O=R.end,G=O-F,ue=m?O:F-1,ce=this.__iteratees__,he=ce.length,we=0,Ie=An(G,this.__takeCount__);if(!c||!m&&M==G&&Ie==G)return p_(r,this.__actions__);var Ve=[];e:for(;G--&&we<Ie;){ue+=a;for(var rt=-1,We=r[ue];++rt<he;){var ft=ce[rt],gt=ft.iteratee,oi=ft.type,Fn=gt(We);if(oi==ie)We=Fn;else if(!Fn){if(oi==J)continue e;break e}}Ve[we++]=We}return Ve}ht.prototype=Io(Lu.prototype),ht.prototype.constructor=ht;function Os(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function s1(){this.__data__=Za?Za(null):{},this.size=0}function o1(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function a1(r){var a=this.__data__;if(Za){var c=a[r];return c===f?n:c}return Tt.call(a,r)?a[r]:n}function l1(r){var a=this.__data__;return Za?a[r]!==n:Tt.call(a,r)}function u1(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Za&&a===n?f:a,this}Os.prototype.clear=s1,Os.prototype.delete=o1,Os.prototype.get=a1,Os.prototype.has=l1,Os.prototype.set=u1;function gr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function c1(){this.__data__=[],this.size=0}function f1(r){var a=this.__data__,c=Pu(a,r);if(c<0)return!1;var m=a.length-1;return c==m?a.pop():Eu.call(a,c,1),--this.size,!0}function d1(r){var a=this.__data__,c=Pu(a,r);return c<0?n:a[c][1]}function h1(r){return Pu(this.__data__,r)>-1}function p1(r,a){var c=this.__data__,m=Pu(c,r);return m<0?(++this.size,c.push([r,a])):c[m][1]=a,this}gr.prototype.clear=c1,gr.prototype.delete=f1,gr.prototype.get=d1,gr.prototype.has=h1,gr.prototype.set=p1;function _r(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function m1(){this.size=0,this.__data__={hash:new Os,map:new($a||gr),string:new Os}}function g1(r){var a=Gu(this,r).delete(r);return this.size-=a?1:0,a}function _1(r){return Gu(this,r).get(r)}function v1(r){return Gu(this,r).has(r)}function x1(r,a){var c=Gu(this,r),m=c.size;return c.set(r,a),this.size+=c.size==m?0:1,this}_r.prototype.clear=m1,_r.prototype.delete=g1,_r.prototype.get=_1,_r.prototype.has=v1,_r.prototype.set=x1;function zs(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new _r;++a<c;)this.add(r[a])}function S1(r){return this.__data__.set(r,f),this}function y1(r){return this.__data__.has(r)}zs.prototype.add=zs.prototype.push=S1,zs.prototype.has=y1;function ki(r){var a=this.__data__=new gr(r);this.size=a.size}function M1(){this.__data__=new gr,this.size=0}function E1(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function T1(r){return this.__data__.get(r)}function w1(r){return this.__data__.has(r)}function A1(r,a){var c=this.__data__;if(c instanceof gr){var m=c.__data__;if(!$a||m.length<s-1)return m.push([r,a]),this.size=++c.size,this;c=this.__data__=new _r(m)}return c.set(r,a),this.size=c.size,this}ki.prototype.clear=M1,ki.prototype.delete=E1,ki.prototype.get=T1,ki.prototype.has=w1,ki.prototype.set=A1;function Xg(r,a){var c=Qe(r),m=!c&&Vs(r),M=!c&&!m&&ss(r),R=!c&&!m&&!M&&zo(r),F=c||m||M||R,O=F?od(r.length,FE):[],G=O.length;for(var ue in r)(a||Tt.call(r,ue))&&!(F&&(ue=="length"||M&&(ue=="offset"||ue=="parent")||R&&(ue=="buffer"||ue=="byteLength"||ue=="byteOffset")||yr(ue,G)))&&O.push(ue);return O}function qg(r){var a=r.length;return a?r[Ed(0,a-1)]:n}function R1(r,a){return Vu(Wn(r),Bs(a,0,r.length))}function C1(r){return Vu(Wn(r))}function hd(r,a,c){(c!==n&&!Hi(r[a],c)||c===n&&!(a in r))&&vr(r,a,c)}function Ja(r,a,c){var m=r[a];(!(Tt.call(r,a)&&Hi(m,c))||c===n&&!(a in r))&&vr(r,a,c)}function Pu(r,a){for(var c=r.length;c--;)if(Hi(r[c][0],a))return c;return-1}function L1(r,a,c,m){return ts(r,function(M,R,F){a(m,M,c(M),F)}),m}function Yg(r,a){return r&&rr(a,hn(a),r)}function P1(r,a){return r&&rr(a,qn(a),r)}function vr(r,a,c){a=="__proto__"&&Tu?Tu(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function pd(r,a){for(var c=-1,m=a.length,M=K(m),R=r==null;++c<m;)M[c]=R?n:jd(r,a[c]);return M}function Bs(r,a,c){return r===r&&(c!==n&&(r=r<=c?r:c),a!==n&&(r=r>=a?r:a)),r}function Ai(r,a,c,m,M,R){var F,O=a&g,G=a&_,ue=a&x;if(c&&(F=M?c(r,m,M,R):c(r)),F!==n)return F;if(!Gt(r))return r;var ce=Qe(r);if(ce){if(F=vT(r),!O)return Wn(r,F)}else{var he=Rn(r),we=he==X||he==rn;if(ss(r))return __(r,O);if(he==vt||he==ye||we&&!M){if(F=G||we?{}:F_(r),!O)return G?aT(r,P1(F,r)):oT(r,Yg(F,r))}else{if(!Lt[he])return M?r:{};F=xT(r,he,O)}}R||(R=new ki);var Ie=R.get(r);if(Ie)return Ie;R.set(r,F),fv(r)?r.forEach(function(We){F.add(Ai(We,a,c,We,r,R))}):uv(r)&&r.forEach(function(We,ft){F.set(ft,Ai(We,a,c,ft,r,R))});var Ve=ue?G?Id:Dd:G?qn:hn,rt=ce?n:Ve(r);return Ei(rt||r,function(We,ft){rt&&(ft=We,We=r[ft]),Ja(F,ft,Ai(We,a,c,ft,r,R))}),F}function b1(r){var a=hn(r);return function(c){return jg(c,r,a)}}function jg(r,a,c){var m=c.length;if(r==null)return!m;for(r=Rt(r);m--;){var M=c[m],R=a[M],F=r[M];if(F===n&&!(M in r)||!R(F))return!1}return!0}function $g(r,a,c){if(typeof r!="function")throw new Ti(l);return ol(function(){r.apply(n,c)},a)}function el(r,a,c,m){var M=-1,R=hu,F=!0,O=r.length,G=[],ue=a.length;if(!O)return G;c&&(a=zt(a,ii(c))),m?(R=ed,F=!1):a.length>=s&&(R=Ya,F=!1,a=new zs(a));e:for(;++M<O;){var ce=r[M],he=c==null?ce:c(ce);if(ce=m||ce!==0?ce:0,F&&he===he){for(var we=ue;we--;)if(a[we]===he)continue e;G.push(ce)}else R(a,he,m)||G.push(ce)}return G}var ts=M_(ir),Kg=M_(gd,!0);function U1(r,a){var c=!0;return ts(r,function(m,M,R){return c=!!a(m,M,R),c}),c}function bu(r,a,c){for(var m=-1,M=r.length;++m<M;){var R=r[m],F=a(R);if(F!=null&&(O===n?F===F&&!si(F):c(F,O)))var O=F,G=R}return G}function D1(r,a,c,m){var M=r.length;for(c=nt(c),c<0&&(c=-c>M?0:M+c),m=m===n||m>M?M:nt(m),m<0&&(m+=M),m=c>m?0:hv(m);c<m;)r[c++]=a;return r}function Zg(r,a){var c=[];return ts(r,function(m,M,R){a(m,M,R)&&c.push(m)}),c}function xn(r,a,c,m,M){var R=-1,F=r.length;for(c||(c=yT),M||(M=[]);++R<F;){var O=r[R];a>0&&c(O)?a>1?xn(O,a-1,c,m,M):Qr(M,O):m||(M[M.length]=O)}return M}var md=E_(),Qg=E_(!0);function ir(r,a){return r&&md(r,a,hn)}function gd(r,a){return r&&Qg(r,a,hn)}function Uu(r,a){return Zr(a,function(c){return Mr(r[c])})}function ks(r,a){a=is(a,r);for(var c=0,m=a.length;r!=null&&c<m;)r=r[sr(a[c++])];return c&&c==m?r:n}function Jg(r,a,c){var m=a(r);return Qe(r)?m:Qr(m,c(r))}function In(r){return r==null?r===n?L:Ke:Fs&&Fs in Rt(r)?mT(r):CT(r)}function _d(r,a){return r>a}function I1(r,a){return r!=null&&Tt.call(r,a)}function N1(r,a){return r!=null&&a in Rt(r)}function F1(r,a,c){return r>=An(a,c)&&r<an(a,c)}function vd(r,a,c){for(var m=c?ed:hu,M=r[0].length,R=r.length,F=R,O=K(R),G=1/0,ue=[];F--;){var ce=r[F];F&&a&&(ce=zt(ce,ii(a))),G=An(ce.length,G),O[F]=!c&&(a||M>=120&&ce.length>=120)?new zs(F&&ce):n}ce=r[0];var he=-1,we=O[0];e:for(;++he<M&&ue.length<G;){var Ie=ce[he],Ve=a?a(Ie):Ie;if(Ie=c||Ie!==0?Ie:0,!(we?Ya(we,Ve):m(ue,Ve,c))){for(F=R;--F;){var rt=O[F];if(!(rt?Ya(rt,Ve):m(r[F],Ve,c)))continue e}we&&we.push(Ve),ue.push(Ie)}}return ue}function O1(r,a,c,m){return ir(r,function(M,R,F){a(m,c(M),R,F)}),m}function tl(r,a,c){a=is(a,r),r=k_(r,a);var m=r==null?r:r[sr(Ci(a))];return m==null?n:ni(m,r,c)}function e_(r){return jt(r)&&In(r)==ye}function z1(r){return jt(r)&&In(r)==me}function B1(r){return jt(r)&&In(r)==mt}function nl(r,a,c,m,M){return r===a?!0:r==null||a==null||!jt(r)&&!jt(a)?r!==r&&a!==a:k1(r,a,c,m,nl,M)}function k1(r,a,c,m,M,R){var F=Qe(r),O=Qe(a),G=F?De:Rn(r),ue=O?De:Rn(a);G=G==ye?vt:G,ue=ue==ye?vt:ue;var ce=G==vt,he=ue==vt,we=G==ue;if(we&&ss(r)){if(!ss(a))return!1;F=!0,ce=!1}if(we&&!ce)return R||(R=new ki),F||zo(r)?D_(r,a,c,m,M,R):hT(r,a,G,c,m,M,R);if(!(c&E)){var Ie=ce&&Tt.call(r,"__wrapped__"),Ve=he&&Tt.call(a,"__wrapped__");if(Ie||Ve){var rt=Ie?r.value():r,We=Ve?a.value():a;return R||(R=new ki),M(rt,We,c,m,R)}}return we?(R||(R=new ki),pT(r,a,c,m,M,R)):!1}function H1(r){return jt(r)&&Rn(r)==Ne}function xd(r,a,c,m){var M=c.length,R=M,F=!m;if(r==null)return!R;for(r=Rt(r);M--;){var O=c[M];if(F&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++M<R;){O=c[M];var G=O[0],ue=r[G],ce=O[1];if(F&&O[2]){if(ue===n&&!(G in r))return!1}else{var he=new ki;if(m)var we=m(ue,ce,G,r,a,he);if(!(we===n?nl(ce,ue,E|T,m,he):we))return!1}}return!0}function t_(r){if(!Gt(r)||ET(r))return!1;var a=Mr(r)?HE:ae;return a.test(Gs(r))}function G1(r){return jt(r)&&In(r)==xt}function V1(r){return jt(r)&&Rn(r)==Et}function W1(r){return jt(r)&&$u(r.length)&&!!Dt[In(r)]}function n_(r){return typeof r=="function"?r:r==null?Yn:typeof r=="object"?Qe(r)?s_(r[0],r[1]):r_(r):Tv(r)}function Sd(r){if(!sl(r))return YE(r);var a=[];for(var c in Rt(r))Tt.call(r,c)&&c!="constructor"&&a.push(c);return a}function X1(r){if(!Gt(r))return RT(r);var a=sl(r),c=[];for(var m in r)m=="constructor"&&(a||!Tt.call(r,m))||c.push(m);return c}function yd(r,a){return r<a}function i_(r,a){var c=-1,m=Xn(r)?K(r.length):[];return ts(r,function(M,R,F){m[++c]=a(M,R,F)}),m}function r_(r){var a=Fd(r);return a.length==1&&a[0][2]?z_(a[0][0],a[0][1]):function(c){return c===r||xd(c,r,a)}}function s_(r,a){return zd(r)&&O_(a)?z_(sr(r),a):function(c){var m=jd(c,r);return m===n&&m===a?$d(c,r):nl(a,m,E|T)}}function Du(r,a,c,m,M){r!==a&&md(a,function(R,F){if(M||(M=new ki),Gt(R))q1(r,a,F,c,Du,m,M);else{var O=m?m(kd(r,F),R,F+"",r,a,M):n;O===n&&(O=R),hd(r,F,O)}},qn)}function q1(r,a,c,m,M,R,F){var O=kd(r,c),G=kd(a,c),ue=F.get(G);if(ue){hd(r,c,ue);return}var ce=R?R(O,G,c+"",r,a,F):n,he=ce===n;if(he){var we=Qe(G),Ie=!we&&ss(G),Ve=!we&&!Ie&&zo(G);ce=G,we||Ie||Ve?Qe(O)?ce=O:Kt(O)?ce=Wn(O):Ie?(he=!1,ce=__(G,!0)):Ve?(he=!1,ce=v_(G,!0)):ce=[]:al(G)||Vs(G)?(ce=O,Vs(O)?ce=pv(O):(!Gt(O)||Mr(O))&&(ce=F_(G))):he=!1}he&&(F.set(G,ce),M(ce,G,m,R,F),F.delete(G)),hd(r,c,ce)}function o_(r,a){var c=r.length;if(c)return a+=a<0?c:0,yr(a,c)?r[a]:n}function a_(r,a,c){a.length?a=zt(a,function(R){return Qe(R)?function(F){return ks(F,R.length===1?R[0]:R)}:R}):a=[Yn];var m=-1;a=zt(a,ii(Ge()));var M=i_(r,function(R,F,O){var G=zt(a,function(ue){return ue(R)});return{criteria:G,index:++m,value:R}});return xE(M,function(R,F){return sT(R,F,c)})}function Y1(r,a){return l_(r,a,function(c,m){return $d(r,m)})}function l_(r,a,c){for(var m=-1,M=a.length,R={};++m<M;){var F=a[m],O=ks(r,F);c(O,F)&&il(R,is(F,r),O)}return R}function j1(r){return function(a){return ks(a,r)}}function Md(r,a,c,m){var M=m?vE:Ro,R=-1,F=a.length,O=r;for(r===a&&(a=Wn(a)),c&&(O=zt(r,ii(c)));++R<F;)for(var G=0,ue=a[R],ce=c?c(ue):ue;(G=M(O,ce,G,m))>-1;)O!==r&&Eu.call(O,G,1),Eu.call(r,G,1);return r}function u_(r,a){for(var c=r?a.length:0,m=c-1;c--;){var M=a[c];if(c==m||M!==R){var R=M;yr(M)?Eu.call(r,M,1):Ad(r,M)}}return r}function Ed(r,a){return r+Au(Vg()*(a-r+1))}function $1(r,a,c,m){for(var M=-1,R=an(wu((a-r)/(c||1)),0),F=K(R);R--;)F[m?R:++M]=r,r+=c;return F}function Td(r,a){var c="";if(!r||a<1||a>B)return c;do a%2&&(c+=r),a=Au(a/2),a&&(r+=r);while(a);return c}function lt(r,a){return Hd(B_(r,a,Yn),r+"")}function K1(r){return qg(Bo(r))}function Z1(r,a){var c=Bo(r);return Vu(c,Bs(a,0,c.length))}function il(r,a,c,m){if(!Gt(r))return r;a=is(a,r);for(var M=-1,R=a.length,F=R-1,O=r;O!=null&&++M<R;){var G=sr(a[M]),ue=c;if(G==="__proto__"||G==="constructor"||G==="prototype")return r;if(M!=F){var ce=O[G];ue=m?m(ce,G,O):n,ue===n&&(ue=Gt(ce)?ce:yr(a[M+1])?[]:{})}Ja(O,G,ue),O=O[G]}return r}var c_=Ru?function(r,a){return Ru.set(r,a),r}:Yn,Q1=Tu?function(r,a){return Tu(r,"toString",{configurable:!0,enumerable:!1,value:Zd(a),writable:!0})}:Yn;function J1(r){return Vu(Bo(r))}function Ri(r,a,c){var m=-1,M=r.length;a<0&&(a=-a>M?0:M+a),c=c>M?M:c,c<0&&(c+=M),M=a>c?0:c-a>>>0,a>>>=0;for(var R=K(M);++m<M;)R[m]=r[m+a];return R}function eT(r,a){var c;return ts(r,function(m,M,R){return c=a(m,M,R),!c}),!!c}function Iu(r,a,c){var m=0,M=r==null?m:r.length;if(typeof a=="number"&&a===a&&M<=Se){for(;m<M;){var R=m+M>>>1,F=r[R];F!==null&&!si(F)&&(c?F<=a:F<a)?m=R+1:M=R}return M}return wd(r,a,Yn,c)}function wd(r,a,c,m){var M=0,R=r==null?0:r.length;if(R===0)return 0;a=c(a);for(var F=a!==a,O=a===null,G=si(a),ue=a===n;M<R;){var ce=Au((M+R)/2),he=c(r[ce]),we=he!==n,Ie=he===null,Ve=he===he,rt=si(he);if(F)var We=m||Ve;else ue?We=Ve&&(m||we):O?We=Ve&&we&&(m||!Ie):G?We=Ve&&we&&!Ie&&(m||!rt):Ie||rt?We=!1:We=m?he<=a:he<a;We?M=ce+1:R=ce}return An(R,$)}function f_(r,a){for(var c=-1,m=r.length,M=0,R=[];++c<m;){var F=r[c],O=a?a(F):F;if(!c||!Hi(O,G)){var G=O;R[M++]=F===0?0:F}}return R}function d_(r){return typeof r=="number"?r:si(r)?j:+r}function ri(r){if(typeof r=="string")return r;if(Qe(r))return zt(r,ri)+"";if(si(r))return Wg?Wg.call(r):"";var a=r+"";return a=="0"&&1/r==-ee?"-0":a}function ns(r,a,c){var m=-1,M=hu,R=r.length,F=!0,O=[],G=O;if(c)F=!1,M=ed;else if(R>=s){var ue=a?null:fT(r);if(ue)return mu(ue);F=!1,M=Ya,G=new zs}else G=a?[]:O;e:for(;++m<R;){var ce=r[m],he=a?a(ce):ce;if(ce=c||ce!==0?ce:0,F&&he===he){for(var we=G.length;we--;)if(G[we]===he)continue e;a&&G.push(he),O.push(ce)}else M(G,he,c)||(G!==O&&G.push(he),O.push(ce))}return O}function Ad(r,a){return a=is(a,r),r=k_(r,a),r==null||delete r[sr(Ci(a))]}function h_(r,a,c,m){return il(r,a,c(ks(r,a)),m)}function Nu(r,a,c,m){for(var M=r.length,R=m?M:-1;(m?R--:++R<M)&&a(r[R],R,r););return c?Ri(r,m?0:R,m?R+1:M):Ri(r,m?R+1:0,m?M:R)}function p_(r,a){var c=r;return c instanceof ht&&(c=c.value()),td(a,function(m,M){return M.func.apply(M.thisArg,Qr([m],M.args))},c)}function Rd(r,a,c){var m=r.length;if(m<2)return m?ns(r[0]):[];for(var M=-1,R=K(m);++M<m;)for(var F=r[M],O=-1;++O<m;)O!=M&&(R[M]=el(R[M]||F,r[O],a,c));return ns(xn(R,1),a,c)}function m_(r,a,c){for(var m=-1,M=r.length,R=a.length,F={};++m<M;){var O=m<R?a[m]:n;c(F,r[m],O)}return F}function Cd(r){return Kt(r)?r:[]}function Ld(r){return typeof r=="function"?r:Yn}function is(r,a){return Qe(r)?r:zd(r,a)?[r]:W_(Mt(r))}var tT=lt;function rs(r,a,c){var m=r.length;return c=c===n?m:c,!a&&c>=m?r:Ri(r,a,c)}var g_=GE||function(r){return vn.clearTimeout(r)};function __(r,a){if(a)return r.slice();var c=r.length,m=zg?zg(c):new r.constructor(c);return r.copy(m),m}function Pd(r){var a=new r.constructor(r.byteLength);return new yu(a).set(new yu(r)),a}function nT(r,a){var c=a?Pd(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function iT(r){var a=new r.constructor(r.source,q.exec(r));return a.lastIndex=r.lastIndex,a}function rT(r){return Qa?Rt(Qa.call(r)):{}}function v_(r,a){var c=a?Pd(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function x_(r,a){if(r!==a){var c=r!==n,m=r===null,M=r===r,R=si(r),F=a!==n,O=a===null,G=a===a,ue=si(a);if(!O&&!ue&&!R&&r>a||R&&F&&G&&!O&&!ue||m&&F&&G||!c&&G||!M)return 1;if(!m&&!R&&!ue&&r<a||ue&&c&&M&&!m&&!R||O&&c&&M||!F&&M||!G)return-1}return 0}function sT(r,a,c){for(var m=-1,M=r.criteria,R=a.criteria,F=M.length,O=c.length;++m<F;){var G=x_(M[m],R[m]);if(G){if(m>=O)return G;var ue=c[m];return G*(ue=="desc"?-1:1)}}return r.index-a.index}function S_(r,a,c,m){for(var M=-1,R=r.length,F=c.length,O=-1,G=a.length,ue=an(R-F,0),ce=K(G+ue),he=!m;++O<G;)ce[O]=a[O];for(;++M<F;)(he||M<R)&&(ce[c[M]]=r[M]);for(;ue--;)ce[O++]=r[M++];return ce}function y_(r,a,c,m){for(var M=-1,R=r.length,F=-1,O=c.length,G=-1,ue=a.length,ce=an(R-O,0),he=K(ce+ue),we=!m;++M<ce;)he[M]=r[M];for(var Ie=M;++G<ue;)he[Ie+G]=a[G];for(;++F<O;)(we||M<R)&&(he[Ie+c[F]]=r[M++]);return he}function Wn(r,a){var c=-1,m=r.length;for(a||(a=K(m));++c<m;)a[c]=r[c];return a}function rr(r,a,c,m){var M=!c;c||(c={});for(var R=-1,F=a.length;++R<F;){var O=a[R],G=m?m(c[O],r[O],O,c,r):n;G===n&&(G=r[O]),M?vr(c,O,G):Ja(c,O,G)}return c}function oT(r,a){return rr(r,Od(r),a)}function aT(r,a){return rr(r,I_(r),a)}function Fu(r,a){return function(c,m){var M=Qe(c)?dE:L1,R=a?a():{};return M(c,r,Ge(m,2),R)}}function No(r){return lt(function(a,c){var m=-1,M=c.length,R=M>1?c[M-1]:n,F=M>2?c[2]:n;for(R=r.length>3&&typeof R=="function"?(M--,R):n,F&&Nn(c[0],c[1],F)&&(R=M<3?n:R,M=1),a=Rt(a);++m<M;){var O=c[m];O&&r(a,O,m,R)}return a})}function M_(r,a){return function(c,m){if(c==null)return c;if(!Xn(c))return r(c,m);for(var M=c.length,R=a?M:-1,F=Rt(c);(a?R--:++R<M)&&m(F[R],R,F)!==!1;);return c}}function E_(r){return function(a,c,m){for(var M=-1,R=Rt(a),F=m(a),O=F.length;O--;){var G=F[r?O:++M];if(c(R[G],G,R)===!1)break}return a}}function lT(r,a,c){var m=a&v,M=rl(r);function R(){var F=this&&this!==vn&&this instanceof R?M:r;return F.apply(m?c:this,arguments)}return R}function T_(r){return function(a){a=Mt(a);var c=Co(a)?Bi(a):n,m=c?c[0]:a.charAt(0),M=c?rs(c,1).join(""):a.slice(1);return m[r]()+M}}function Fo(r){return function(a){return td(Mv(yv(a).replace(QM,"")),r,"")}}function rl(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Io(r.prototype),m=r.apply(c,a);return Gt(m)?m:c}}function uT(r,a,c){var m=rl(r);function M(){for(var R=arguments.length,F=K(R),O=R,G=Oo(M);O--;)F[O]=arguments[O];var ue=R<3&&F[0]!==G&&F[R-1]!==G?[]:Jr(F,G);if(R-=ue.length,R<c)return L_(r,a,Ou,M.placeholder,n,F,ue,n,n,c-R);var ce=this&&this!==vn&&this instanceof M?m:r;return ni(ce,this,F)}return M}function w_(r){return function(a,c,m){var M=Rt(a);if(!Xn(a)){var R=Ge(c,3);a=hn(a),c=function(O){return R(M[O],O,M)}}var F=r(a,c,m);return F>-1?M[R?a[F]:F]:n}}function A_(r){return Sr(function(a){var c=a.length,m=c,M=wi.prototype.thru;for(r&&a.reverse();m--;){var R=a[m];if(typeof R!="function")throw new Ti(l);if(M&&!F&&Hu(R)=="wrapper")var F=new wi([],!0)}for(m=F?m:c;++m<c;){R=a[m];var O=Hu(R),G=O=="wrapper"?Nd(R):n;G&&Bd(G[0])&&G[1]==(D|S|P|H)&&!G[4].length&&G[9]==1?F=F[Hu(G[0])].apply(F,G[3]):F=R.length==1&&Bd(R)?F[O]():F.thru(R)}return function(){var ue=arguments,ce=ue[0];if(F&&ue.length==1&&Qe(ce))return F.plant(ce).value();for(var he=0,we=c?a[he].apply(this,ue):ce;++he<c;)we=a[he].call(this,we);return we}})}function Ou(r,a,c,m,M,R,F,O,G,ue){var ce=a&D,he=a&v,we=a&h,Ie=a&(S|w),Ve=a&C,rt=we?n:rl(r);function We(){for(var ft=arguments.length,gt=K(ft),oi=ft;oi--;)gt[oi]=arguments[oi];if(Ie)var Fn=Oo(We),ai=yE(gt,Fn);if(m&&(gt=S_(gt,m,M,Ie)),R&&(gt=y_(gt,R,F,Ie)),ft-=ai,Ie&&ft<ue){var Zt=Jr(gt,Fn);return L_(r,a,Ou,We.placeholder,c,gt,Zt,O,G,ue-ft)}var Gi=he?c:this,Tr=we?Gi[r]:r;return ft=gt.length,O?gt=LT(gt,O):Ve&&ft>1&&gt.reverse(),ce&&G<ft&&(gt.length=G),this&&this!==vn&&this instanceof We&&(Tr=rt||rl(Tr)),Tr.apply(Gi,gt)}return We}function R_(r,a){return function(c,m){return O1(c,r,a(m),{})}}function zu(r,a){return function(c,m){var M;if(c===n&&m===n)return a;if(c!==n&&(M=c),m!==n){if(M===n)return m;typeof c=="string"||typeof m=="string"?(c=ri(c),m=ri(m)):(c=d_(c),m=d_(m)),M=r(c,m)}return M}}function bd(r){return Sr(function(a){return a=zt(a,ii(Ge())),lt(function(c){var m=this;return r(a,function(M){return ni(M,m,c)})})})}function Bu(r,a){a=a===n?" ":ri(a);var c=a.length;if(c<2)return c?Td(a,r):a;var m=Td(a,wu(r/Lo(a)));return Co(a)?rs(Bi(m),0,r).join(""):m.slice(0,r)}function cT(r,a,c,m){var M=a&v,R=rl(r);function F(){for(var O=-1,G=arguments.length,ue=-1,ce=m.length,he=K(ce+G),we=this&&this!==vn&&this instanceof F?R:r;++ue<ce;)he[ue]=m[ue];for(;G--;)he[ue++]=arguments[++O];return ni(we,M?c:this,he)}return F}function C_(r){return function(a,c,m){return m&&typeof m!="number"&&Nn(a,c,m)&&(c=m=n),a=Er(a),c===n?(c=a,a=0):c=Er(c),m=m===n?a<c?1:-1:Er(m),$1(a,c,m,r)}}function ku(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=Li(a),c=Li(c)),r(a,c)}}function L_(r,a,c,m,M,R,F,O,G,ue){var ce=a&S,he=ce?F:n,we=ce?n:F,Ie=ce?R:n,Ve=ce?n:R;a|=ce?P:N,a&=~(ce?N:P),a&y||(a&=~(v|h));var rt=[r,a,M,Ie,he,Ve,we,O,G,ue],We=c.apply(n,rt);return Bd(r)&&H_(We,rt),We.placeholder=m,G_(We,r,a)}function Ud(r){var a=on[r];return function(c,m){if(c=Li(c),m=m==null?0:An(nt(m),292),m&&Gg(c)){var M=(Mt(c)+"e").split("e"),R=a(M[0]+"e"+(+M[1]+m));return M=(Mt(R)+"e").split("e"),+(M[0]+"e"+(+M[1]-m))}return a(c)}}var fT=Uo&&1/mu(new Uo([,-0]))[1]==ee?function(r){return new Uo(r)}:eh;function P_(r){return function(a){var c=Rn(a);return c==Ne?ld(a):c==Et?CE(a):SE(a,r(a))}}function xr(r,a,c,m,M,R,F,O){var G=a&h;if(!G&&typeof r!="function")throw new Ti(l);var ue=m?m.length:0;if(ue||(a&=~(P|N),m=M=n),F=F===n?F:an(nt(F),0),O=O===n?O:nt(O),ue-=M?M.length:0,a&N){var ce=m,he=M;m=M=n}var we=G?n:Nd(r),Ie=[r,a,c,m,M,ce,he,R,F,O];if(we&&AT(Ie,we),r=Ie[0],a=Ie[1],c=Ie[2],m=Ie[3],M=Ie[4],O=Ie[9]=Ie[9]===n?G?0:r.length:an(Ie[9]-ue,0),!O&&a&(S|w)&&(a&=~(S|w)),!a||a==v)var Ve=lT(r,a,c);else a==S||a==w?Ve=uT(r,a,O):(a==P||a==(v|P))&&!M.length?Ve=cT(r,a,c,m):Ve=Ou.apply(n,Ie);var rt=we?c_:H_;return G_(rt(Ve,Ie),r,a)}function b_(r,a,c,m){return r===n||Hi(r,bo[c])&&!Tt.call(m,c)?a:r}function U_(r,a,c,m,M,R){return Gt(r)&&Gt(a)&&(R.set(a,r),Du(r,a,n,U_,R),R.delete(a)),r}function dT(r){return al(r)?n:r}function D_(r,a,c,m,M,R){var F=c&E,O=r.length,G=a.length;if(O!=G&&!(F&&G>O))return!1;var ue=R.get(r),ce=R.get(a);if(ue&&ce)return ue==a&&ce==r;var he=-1,we=!0,Ie=c&T?new zs:n;for(R.set(r,a),R.set(a,r);++he<O;){var Ve=r[he],rt=a[he];if(m)var We=F?m(rt,Ve,he,a,r,R):m(Ve,rt,he,r,a,R);if(We!==n){if(We)continue;we=!1;break}if(Ie){if(!nd(a,function(ft,gt){if(!Ya(Ie,gt)&&(Ve===ft||M(Ve,ft,c,m,R)))return Ie.push(gt)})){we=!1;break}}else if(!(Ve===rt||M(Ve,rt,c,m,R))){we=!1;break}}return R.delete(r),R.delete(a),we}function hT(r,a,c,m,M,R,F){switch(c){case xe:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case me:return!(r.byteLength!=a.byteLength||!R(new yu(r),new yu(a)));case Be:case mt:case $e:return Hi(+r,+a);case et:return r.name==a.name&&r.message==a.message;case xt:case Yt:return r==a+"";case Ne:var O=ld;case Et:var G=m&E;if(O||(O=mu),r.size!=a.size&&!G)return!1;var ue=F.get(r);if(ue)return ue==a;m|=T,F.set(r,a);var ce=D_(O(r),O(a),m,M,R,F);return F.delete(r),ce;case I:if(Qa)return Qa.call(r)==Qa.call(a)}return!1}function pT(r,a,c,m,M,R){var F=c&E,O=Dd(r),G=O.length,ue=Dd(a),ce=ue.length;if(G!=ce&&!F)return!1;for(var he=G;he--;){var we=O[he];if(!(F?we in a:Tt.call(a,we)))return!1}var Ie=R.get(r),Ve=R.get(a);if(Ie&&Ve)return Ie==a&&Ve==r;var rt=!0;R.set(r,a),R.set(a,r);for(var We=F;++he<G;){we=O[he];var ft=r[we],gt=a[we];if(m)var oi=F?m(gt,ft,we,a,r,R):m(ft,gt,we,r,a,R);if(!(oi===n?ft===gt||M(ft,gt,c,m,R):oi)){rt=!1;break}We||(We=we=="constructor")}if(rt&&!We){var Fn=r.constructor,ai=a.constructor;Fn!=ai&&"constructor"in r&&"constructor"in a&&!(typeof Fn=="function"&&Fn instanceof Fn&&typeof ai=="function"&&ai instanceof ai)&&(rt=!1)}return R.delete(r),R.delete(a),rt}function Sr(r){return Hd(B_(r,n,j_),r+"")}function Dd(r){return Jg(r,hn,Od)}function Id(r){return Jg(r,qn,I_)}var Nd=Ru?function(r){return Ru.get(r)}:eh;function Hu(r){for(var a=r.name+"",c=Do[a],m=Tt.call(Do,a)?c.length:0;m--;){var M=c[m],R=M.func;if(R==null||R==r)return M.name}return a}function Oo(r){var a=Tt.call(A,"placeholder")?A:r;return a.placeholder}function Ge(){var r=A.iteratee||Qd;return r=r===Qd?n_:r,arguments.length?r(arguments[0],arguments[1]):r}function Gu(r,a){var c=r.__data__;return MT(a)?c[typeof a=="string"?"string":"hash"]:c.map}function Fd(r){for(var a=hn(r),c=a.length;c--;){var m=a[c],M=r[m];a[c]=[m,M,O_(M)]}return a}function Hs(r,a){var c=wE(r,a);return t_(c)?c:n}function mT(r){var a=Tt.call(r,Fs),c=r[Fs];try{r[Fs]=n;var m=!0}catch{}var M=xu.call(r);return m&&(a?r[Fs]=c:delete r[Fs]),M}var Od=cd?function(r){return r==null?[]:(r=Rt(r),Zr(cd(r),function(a){return kg.call(r,a)}))}:th,I_=cd?function(r){for(var a=[];r;)Qr(a,Od(r)),r=Mu(r);return a}:th,Rn=In;(fd&&Rn(new fd(new ArrayBuffer(1)))!=xe||$a&&Rn(new $a)!=Ne||dd&&Rn(dd.resolve())!=ut||Uo&&Rn(new Uo)!=Et||Ka&&Rn(new Ka)!=ne)&&(Rn=function(r){var a=In(r),c=a==vt?r.constructor:n,m=c?Gs(c):"";if(m)switch(m){case ZE:return xe;case QE:return Ne;case JE:return ut;case e1:return Et;case t1:return ne}return a});function gT(r,a,c){for(var m=-1,M=c.length;++m<M;){var R=c[m],F=R.size;switch(R.type){case"drop":r+=F;break;case"dropRight":a-=F;break;case"take":a=An(a,r+F);break;case"takeRight":r=an(r,a-F);break}}return{start:r,end:a}}function _T(r){var a=r.match(Mo);return a?a[1].split(du):[]}function N_(r,a,c){a=is(a,r);for(var m=-1,M=a.length,R=!1;++m<M;){var F=sr(a[m]);if(!(R=r!=null&&c(r,F)))break;r=r[F]}return R||++m!=M?R:(M=r==null?0:r.length,!!M&&$u(M)&&yr(F,M)&&(Qe(r)||Vs(r)))}function vT(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&Tt.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function F_(r){return typeof r.constructor=="function"&&!sl(r)?Io(Mu(r)):{}}function xT(r,a,c){var m=r.constructor;switch(a){case me:return Pd(r);case Be:case mt:return new m(+r);case xe:return nT(r,c);case Fe:case Ee:case le:case Oe:case ze:case ke:case be:case Ue:case tt:return v_(r,c);case Ne:return new m;case $e:case Yt:return new m(r);case xt:return iT(r);case Et:return new m;case I:return rT(r)}}function ST(r,a){var c=a.length;if(!c)return r;var m=c-1;return a[m]=(c>1?"& ":"")+a[m],a=a.join(c>2?", ":" "),r.replace(fu,`{
/* [wrapped with `+a+`] */
`)}function yT(r){return Qe(r)||Vs(r)||!!(Hg&&r&&r[Hg])}function yr(r,a){var c=typeof r;return a=a??B,!!a&&(c=="number"||c!="symbol"&&He.test(r))&&r>-1&&r%1==0&&r<a}function Nn(r,a,c){if(!Gt(c))return!1;var m=typeof a;return(m=="number"?Xn(c)&&yr(a,c.length):m=="string"&&a in c)?Hi(c[a],r):!1}function zd(r,a){if(Qe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||si(r)?!0:Si.test(r)||!Ft.test(r)||a!=null&&r in Rt(a)}function MT(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function Bd(r){var a=Hu(r),c=A[a];if(typeof c!="function"||!(a in ht.prototype))return!1;if(r===c)return!0;var m=Nd(c);return!!m&&r===m[0]}function ET(r){return!!Og&&Og in r}var TT=_u?Mr:nh;function sl(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||bo;return r===c}function O_(r){return r===r&&!Gt(r)}function z_(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==n||r in Rt(c))}}function wT(r){var a=Yu(r,function(m){return c.size===d&&c.clear(),m}),c=a.cache;return a}function AT(r,a){var c=r[1],m=a[1],M=c|m,R=M<(v|h|D),F=m==D&&c==S||m==D&&c==H&&r[7].length<=a[8]||m==(D|H)&&a[7].length<=a[8]&&c==S;if(!(R||F))return r;m&v&&(r[2]=a[2],M|=c&v?0:y);var O=a[3];if(O){var G=r[3];r[3]=G?S_(G,O,a[4]):O,r[4]=G?Jr(r[3],p):a[4]}return O=a[5],O&&(G=r[5],r[5]=G?y_(G,O,a[6]):O,r[6]=G?Jr(r[5],p):a[6]),O=a[7],O&&(r[7]=O),m&D&&(r[8]=r[8]==null?a[8]:An(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=M,r}function RT(r){var a=[];if(r!=null)for(var c in Rt(r))a.push(c);return a}function CT(r){return xu.call(r)}function B_(r,a,c){return a=an(a===n?r.length-1:a,0),function(){for(var m=arguments,M=-1,R=an(m.length-a,0),F=K(R);++M<R;)F[M]=m[a+M];M=-1;for(var O=K(a+1);++M<a;)O[M]=m[M];return O[a]=c(F),ni(r,this,O)}}function k_(r,a){return a.length<2?r:ks(r,Ri(a,0,-1))}function LT(r,a){for(var c=r.length,m=An(a.length,c),M=Wn(r);m--;){var R=a[m];r[m]=yr(R,c)?M[R]:n}return r}function kd(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var H_=V_(c_),ol=WE||function(r,a){return vn.setTimeout(r,a)},Hd=V_(Q1);function G_(r,a,c){var m=a+"";return Hd(r,ST(m,PT(_T(m),c)))}function V_(r){var a=0,c=0;return function(){var m=jE(),M=Y-(m-c);if(c=m,M>0){if(++a>=de)return arguments[0]}else a=0;return r.apply(n,arguments)}}function Vu(r,a){var c=-1,m=r.length,M=m-1;for(a=a===n?m:a;++c<a;){var R=Ed(c,M),F=r[R];r[R]=r[c],r[c]=F}return r.length=a,r}var W_=wT(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(_n,function(c,m,M,R){a.push(M?R.replace(qf,"$1"):m||c)}),a});function sr(r){if(typeof r=="string"||si(r))return r;var a=r+"";return a=="0"&&1/r==-ee?"-0":a}function Gs(r){if(r!=null){try{return vu.call(r)}catch{}try{return r+""}catch{}}return""}function PT(r,a){return Ei(ve,function(c){var m="_."+c[0];a&c[1]&&!hu(r,m)&&r.push(m)}),r.sort()}function X_(r){if(r instanceof ht)return r.clone();var a=new wi(r.__wrapped__,r.__chain__);return a.__actions__=Wn(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function bT(r,a,c){(c?Nn(r,a,c):a===n)?a=1:a=an(nt(a),0);var m=r==null?0:r.length;if(!m||a<1)return[];for(var M=0,R=0,F=K(wu(m/a));M<m;)F[R++]=Ri(r,M,M+=a);return F}function UT(r){for(var a=-1,c=r==null?0:r.length,m=0,M=[];++a<c;){var R=r[a];R&&(M[m++]=R)}return M}function DT(){var r=arguments.length;if(!r)return[];for(var a=K(r-1),c=arguments[0],m=r;m--;)a[m-1]=arguments[m];return Qr(Qe(c)?Wn(c):[c],xn(a,1))}var IT=lt(function(r,a){return Kt(r)?el(r,xn(a,1,Kt,!0)):[]}),NT=lt(function(r,a){var c=Ci(a);return Kt(c)&&(c=n),Kt(r)?el(r,xn(a,1,Kt,!0),Ge(c,2)):[]}),FT=lt(function(r,a){var c=Ci(a);return Kt(c)&&(c=n),Kt(r)?el(r,xn(a,1,Kt,!0),n,c):[]});function OT(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),Ri(r,a<0?0:a,m)):[]}function zT(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),a=m-a,Ri(r,0,a<0?0:a)):[]}function BT(r,a){return r&&r.length?Nu(r,Ge(a,3),!0,!0):[]}function kT(r,a){return r&&r.length?Nu(r,Ge(a,3),!0):[]}function HT(r,a,c,m){var M=r==null?0:r.length;return M?(c&&typeof c!="number"&&Nn(r,a,c)&&(c=0,m=M),D1(r,a,c,m)):[]}function q_(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=c==null?0:nt(c);return M<0&&(M=an(m+M,0)),pu(r,Ge(a,3),M)}function Y_(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=m-1;return c!==n&&(M=nt(c),M=c<0?an(m+M,0):An(M,m-1)),pu(r,Ge(a,3),M,!0)}function j_(r){var a=r==null?0:r.length;return a?xn(r,1):[]}function GT(r){var a=r==null?0:r.length;return a?xn(r,ee):[]}function VT(r,a){var c=r==null?0:r.length;return c?(a=a===n?1:nt(a),xn(r,a)):[]}function WT(r){for(var a=-1,c=r==null?0:r.length,m={};++a<c;){var M=r[a];m[M[0]]=M[1]}return m}function $_(r){return r&&r.length?r[0]:n}function XT(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=c==null?0:nt(c);return M<0&&(M=an(m+M,0)),Ro(r,a,M)}function qT(r){var a=r==null?0:r.length;return a?Ri(r,0,-1):[]}var YT=lt(function(r){var a=zt(r,Cd);return a.length&&a[0]===r[0]?vd(a):[]}),jT=lt(function(r){var a=Ci(r),c=zt(r,Cd);return a===Ci(c)?a=n:c.pop(),c.length&&c[0]===r[0]?vd(c,Ge(a,2)):[]}),$T=lt(function(r){var a=Ci(r),c=zt(r,Cd);return a=typeof a=="function"?a:n,a&&c.pop(),c.length&&c[0]===r[0]?vd(c,n,a):[]});function KT(r,a){return r==null?"":qE.call(r,a)}function Ci(r){var a=r==null?0:r.length;return a?r[a-1]:n}function ZT(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=m;return c!==n&&(M=nt(c),M=M<0?an(m+M,0):An(M,m-1)),a===a?PE(r,a,M):pu(r,Lg,M,!0)}function QT(r,a){return r&&r.length?o_(r,nt(a)):n}var JT=lt(K_);function K_(r,a){return r&&r.length&&a&&a.length?Md(r,a):r}function ew(r,a,c){return r&&r.length&&a&&a.length?Md(r,a,Ge(c,2)):r}function tw(r,a,c){return r&&r.length&&a&&a.length?Md(r,a,n,c):r}var nw=Sr(function(r,a){var c=r==null?0:r.length,m=pd(r,a);return u_(r,zt(a,function(M){return yr(M,c)?+M:M}).sort(x_)),m});function iw(r,a){var c=[];if(!(r&&r.length))return c;var m=-1,M=[],R=r.length;for(a=Ge(a,3);++m<R;){var F=r[m];a(F,m,r)&&(c.push(F),M.push(m))}return u_(r,M),c}function Gd(r){return r==null?r:KE.call(r)}function rw(r,a,c){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Nn(r,a,c)?(a=0,c=m):(a=a==null?0:nt(a),c=c===n?m:nt(c)),Ri(r,a,c)):[]}function sw(r,a){return Iu(r,a)}function ow(r,a,c){return wd(r,a,Ge(c,2))}function aw(r,a){var c=r==null?0:r.length;if(c){var m=Iu(r,a);if(m<c&&Hi(r[m],a))return m}return-1}function lw(r,a){return Iu(r,a,!0)}function uw(r,a,c){return wd(r,a,Ge(c,2),!0)}function cw(r,a){var c=r==null?0:r.length;if(c){var m=Iu(r,a,!0)-1;if(Hi(r[m],a))return m}return-1}function fw(r){return r&&r.length?f_(r):[]}function dw(r,a){return r&&r.length?f_(r,Ge(a,2)):[]}function hw(r){var a=r==null?0:r.length;return a?Ri(r,1,a):[]}function pw(r,a,c){return r&&r.length?(a=c||a===n?1:nt(a),Ri(r,0,a<0?0:a)):[]}function mw(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),a=m-a,Ri(r,a<0?0:a,m)):[]}function gw(r,a){return r&&r.length?Nu(r,Ge(a,3),!1,!0):[]}function _w(r,a){return r&&r.length?Nu(r,Ge(a,3)):[]}var vw=lt(function(r){return ns(xn(r,1,Kt,!0))}),xw=lt(function(r){var a=Ci(r);return Kt(a)&&(a=n),ns(xn(r,1,Kt,!0),Ge(a,2))}),Sw=lt(function(r){var a=Ci(r);return a=typeof a=="function"?a:n,ns(xn(r,1,Kt,!0),n,a)});function yw(r){return r&&r.length?ns(r):[]}function Mw(r,a){return r&&r.length?ns(r,Ge(a,2)):[]}function Ew(r,a){return a=typeof a=="function"?a:n,r&&r.length?ns(r,n,a):[]}function Vd(r){if(!(r&&r.length))return[];var a=0;return r=Zr(r,function(c){if(Kt(c))return a=an(c.length,a),!0}),od(a,function(c){return zt(r,id(c))})}function Z_(r,a){if(!(r&&r.length))return[];var c=Vd(r);return a==null?c:zt(c,function(m){return ni(a,n,m)})}var Tw=lt(function(r,a){return Kt(r)?el(r,a):[]}),ww=lt(function(r){return Rd(Zr(r,Kt))}),Aw=lt(function(r){var a=Ci(r);return Kt(a)&&(a=n),Rd(Zr(r,Kt),Ge(a,2))}),Rw=lt(function(r){var a=Ci(r);return a=typeof a=="function"?a:n,Rd(Zr(r,Kt),n,a)}),Cw=lt(Vd);function Lw(r,a){return m_(r||[],a||[],Ja)}function Pw(r,a){return m_(r||[],a||[],il)}var bw=lt(function(r){var a=r.length,c=a>1?r[a-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Z_(r,c)});function Q_(r){var a=A(r);return a.__chain__=!0,a}function Uw(r,a){return a(r),r}function Wu(r,a){return a(r)}var Dw=Sr(function(r){var a=r.length,c=a?r[0]:0,m=this.__wrapped__,M=function(R){return pd(R,r)};return a>1||this.__actions__.length||!(m instanceof ht)||!yr(c)?this.thru(M):(m=m.slice(c,+c+(a?1:0)),m.__actions__.push({func:Wu,args:[M],thisArg:n}),new wi(m,this.__chain__).thru(function(R){return a&&!R.length&&R.push(n),R}))});function Iw(){return Q_(this)}function Nw(){return new wi(this.value(),this.__chain__)}function Fw(){this.__values__===n&&(this.__values__=dv(this.value()));var r=this.__index__>=this.__values__.length,a=r?n:this.__values__[this.__index__++];return{done:r,value:a}}function Ow(){return this}function zw(r){for(var a,c=this;c instanceof Lu;){var m=X_(c);m.__index__=0,m.__values__=n,a?M.__wrapped__=m:a=m;var M=m;c=c.__wrapped__}return M.__wrapped__=r,a}function Bw(){var r=this.__wrapped__;if(r instanceof ht){var a=r;return this.__actions__.length&&(a=new ht(this)),a=a.reverse(),a.__actions__.push({func:Wu,args:[Gd],thisArg:n}),new wi(a,this.__chain__)}return this.thru(Gd)}function kw(){return p_(this.__wrapped__,this.__actions__)}var Hw=Fu(function(r,a,c){Tt.call(r,c)?++r[c]:vr(r,c,1)});function Gw(r,a,c){var m=Qe(r)?Rg:U1;return c&&Nn(r,a,c)&&(a=n),m(r,Ge(a,3))}function Vw(r,a){var c=Qe(r)?Zr:Zg;return c(r,Ge(a,3))}var Ww=w_(q_),Xw=w_(Y_);function qw(r,a){return xn(Xu(r,a),1)}function Yw(r,a){return xn(Xu(r,a),ee)}function jw(r,a,c){return c=c===n?1:nt(c),xn(Xu(r,a),c)}function J_(r,a){var c=Qe(r)?Ei:ts;return c(r,Ge(a,3))}function ev(r,a){var c=Qe(r)?hE:Kg;return c(r,Ge(a,3))}var $w=Fu(function(r,a,c){Tt.call(r,c)?r[c].push(a):vr(r,c,[a])});function Kw(r,a,c,m){r=Xn(r)?r:Bo(r),c=c&&!m?nt(c):0;var M=r.length;return c<0&&(c=an(M+c,0)),Ku(r)?c<=M&&r.indexOf(a,c)>-1:!!M&&Ro(r,a,c)>-1}var Zw=lt(function(r,a,c){var m=-1,M=typeof a=="function",R=Xn(r)?K(r.length):[];return ts(r,function(F){R[++m]=M?ni(a,F,c):tl(F,a,c)}),R}),Qw=Fu(function(r,a,c){vr(r,c,a)});function Xu(r,a){var c=Qe(r)?zt:i_;return c(r,Ge(a,3))}function Jw(r,a,c,m){return r==null?[]:(Qe(a)||(a=a==null?[]:[a]),c=m?n:c,Qe(c)||(c=c==null?[]:[c]),a_(r,a,c))}var eA=Fu(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function tA(r,a,c){var m=Qe(r)?td:bg,M=arguments.length<3;return m(r,Ge(a,4),c,M,ts)}function nA(r,a,c){var m=Qe(r)?pE:bg,M=arguments.length<3;return m(r,Ge(a,4),c,M,Kg)}function iA(r,a){var c=Qe(r)?Zr:Zg;return c(r,ju(Ge(a,3)))}function rA(r){var a=Qe(r)?qg:K1;return a(r)}function sA(r,a,c){(c?Nn(r,a,c):a===n)?a=1:a=nt(a);var m=Qe(r)?R1:Z1;return m(r,a)}function oA(r){var a=Qe(r)?C1:J1;return a(r)}function aA(r){if(r==null)return 0;if(Xn(r))return Ku(r)?Lo(r):r.length;var a=Rn(r);return a==Ne||a==Et?r.size:Sd(r).length}function lA(r,a,c){var m=Qe(r)?nd:eT;return c&&Nn(r,a,c)&&(a=n),m(r,Ge(a,3))}var uA=lt(function(r,a){if(r==null)return[];var c=a.length;return c>1&&Nn(r,a[0],a[1])?a=[]:c>2&&Nn(a[0],a[1],a[2])&&(a=[a[0]]),a_(r,xn(a,1),[])}),qu=VE||function(){return vn.Date.now()};function cA(r,a){if(typeof a!="function")throw new Ti(l);return r=nt(r),function(){if(--r<1)return a.apply(this,arguments)}}function tv(r,a,c){return a=c?n:a,a=r&&a==null?r.length:a,xr(r,D,n,n,n,n,a)}function nv(r,a){var c;if(typeof a!="function")throw new Ti(l);return r=nt(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=n),c}}var Wd=lt(function(r,a,c){var m=v;if(c.length){var M=Jr(c,Oo(Wd));m|=P}return xr(r,m,a,c,M)}),iv=lt(function(r,a,c){var m=v|h;if(c.length){var M=Jr(c,Oo(iv));m|=P}return xr(a,m,r,c,M)});function rv(r,a,c){a=c?n:a;var m=xr(r,S,n,n,n,n,n,a);return m.placeholder=rv.placeholder,m}function sv(r,a,c){a=c?n:a;var m=xr(r,w,n,n,n,n,n,a);return m.placeholder=sv.placeholder,m}function ov(r,a,c){var m,M,R,F,O,G,ue=0,ce=!1,he=!1,we=!0;if(typeof r!="function")throw new Ti(l);a=Li(a)||0,Gt(c)&&(ce=!!c.leading,he="maxWait"in c,R=he?an(Li(c.maxWait)||0,a):R,we="trailing"in c?!!c.trailing:we);function Ie(Zt){var Gi=m,Tr=M;return m=M=n,ue=Zt,F=r.apply(Tr,Gi),F}function Ve(Zt){return ue=Zt,O=ol(ft,a),ce?Ie(Zt):F}function rt(Zt){var Gi=Zt-G,Tr=Zt-ue,wv=a-Gi;return he?An(wv,R-Tr):wv}function We(Zt){var Gi=Zt-G,Tr=Zt-ue;return G===n||Gi>=a||Gi<0||he&&Tr>=R}function ft(){var Zt=qu();if(We(Zt))return gt(Zt);O=ol(ft,rt(Zt))}function gt(Zt){return O=n,we&&m?Ie(Zt):(m=M=n,F)}function oi(){O!==n&&g_(O),ue=0,m=G=M=O=n}function Fn(){return O===n?F:gt(qu())}function ai(){var Zt=qu(),Gi=We(Zt);if(m=arguments,M=this,G=Zt,Gi){if(O===n)return Ve(G);if(he)return g_(O),O=ol(ft,a),Ie(G)}return O===n&&(O=ol(ft,a)),F}return ai.cancel=oi,ai.flush=Fn,ai}var fA=lt(function(r,a){return $g(r,1,a)}),dA=lt(function(r,a,c){return $g(r,Li(a)||0,c)});function hA(r){return xr(r,C)}function Yu(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new Ti(l);var c=function(){var m=arguments,M=a?a.apply(this,m):m[0],R=c.cache;if(R.has(M))return R.get(M);var F=r.apply(this,m);return c.cache=R.set(M,F)||R,F};return c.cache=new(Yu.Cache||_r),c}Yu.Cache=_r;function ju(r){if(typeof r!="function")throw new Ti(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function pA(r){return nv(2,r)}var mA=tT(function(r,a){a=a.length==1&&Qe(a[0])?zt(a[0],ii(Ge())):zt(xn(a,1),ii(Ge()));var c=a.length;return lt(function(m){for(var M=-1,R=An(m.length,c);++M<R;)m[M]=a[M].call(this,m[M]);return ni(r,this,m)})}),Xd=lt(function(r,a){var c=Jr(a,Oo(Xd));return xr(r,P,n,a,c)}),av=lt(function(r,a){var c=Jr(a,Oo(av));return xr(r,N,n,a,c)}),gA=Sr(function(r,a){return xr(r,H,n,n,n,a)});function _A(r,a){if(typeof r!="function")throw new Ti(l);return a=a===n?a:nt(a),lt(r,a)}function vA(r,a){if(typeof r!="function")throw new Ti(l);return a=a==null?0:an(nt(a),0),lt(function(c){var m=c[a],M=rs(c,0,a);return m&&Qr(M,m),ni(r,this,M)})}function xA(r,a,c){var m=!0,M=!0;if(typeof r!="function")throw new Ti(l);return Gt(c)&&(m="leading"in c?!!c.leading:m,M="trailing"in c?!!c.trailing:M),ov(r,a,{leading:m,maxWait:a,trailing:M})}function SA(r){return tv(r,1)}function yA(r,a){return Xd(Ld(a),r)}function MA(){if(!arguments.length)return[];var r=arguments[0];return Qe(r)?r:[r]}function EA(r){return Ai(r,x)}function TA(r,a){return a=typeof a=="function"?a:n,Ai(r,x,a)}function wA(r){return Ai(r,g|x)}function AA(r,a){return a=typeof a=="function"?a:n,Ai(r,g|x,a)}function RA(r,a){return a==null||jg(r,a,hn(a))}function Hi(r,a){return r===a||r!==r&&a!==a}var CA=ku(_d),LA=ku(function(r,a){return r>=a}),Vs=e_(function(){return arguments}())?e_:function(r){return jt(r)&&Tt.call(r,"callee")&&!kg.call(r,"callee")},Qe=K.isArray,PA=yg?ii(yg):z1;function Xn(r){return r!=null&&$u(r.length)&&!Mr(r)}function Kt(r){return jt(r)&&Xn(r)}function bA(r){return r===!0||r===!1||jt(r)&&In(r)==Be}var ss=XE||nh,UA=Mg?ii(Mg):B1;function DA(r){return jt(r)&&r.nodeType===1&&!al(r)}function IA(r){if(r==null)return!0;if(Xn(r)&&(Qe(r)||typeof r=="string"||typeof r.splice=="function"||ss(r)||zo(r)||Vs(r)))return!r.length;var a=Rn(r);if(a==Ne||a==Et)return!r.size;if(sl(r))return!Sd(r).length;for(var c in r)if(Tt.call(r,c))return!1;return!0}function NA(r,a){return nl(r,a)}function FA(r,a,c){c=typeof c=="function"?c:n;var m=c?c(r,a):n;return m===n?nl(r,a,n,c):!!m}function qd(r){if(!jt(r))return!1;var a=In(r);return a==et||a==wn||typeof r.message=="string"&&typeof r.name=="string"&&!al(r)}function OA(r){return typeof r=="number"&&Gg(r)}function Mr(r){if(!Gt(r))return!1;var a=In(r);return a==X||a==rn||a==qe||a==it}function lv(r){return typeof r=="number"&&r==nt(r)}function $u(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=B}function Gt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function jt(r){return r!=null&&typeof r=="object"}var uv=Eg?ii(Eg):H1;function zA(r,a){return r===a||xd(r,a,Fd(a))}function BA(r,a,c){return c=typeof c=="function"?c:n,xd(r,a,Fd(a),c)}function kA(r){return cv(r)&&r!=+r}function HA(r){if(TT(r))throw new Ze(o);return t_(r)}function GA(r){return r===null}function VA(r){return r==null}function cv(r){return typeof r=="number"||jt(r)&&In(r)==$e}function al(r){if(!jt(r)||In(r)!=vt)return!1;var a=Mu(r);if(a===null)return!0;var c=Tt.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&vu.call(c)==BE}var Yd=Tg?ii(Tg):G1;function WA(r){return lv(r)&&r>=-B&&r<=B}var fv=wg?ii(wg):V1;function Ku(r){return typeof r=="string"||!Qe(r)&&jt(r)&&In(r)==Yt}function si(r){return typeof r=="symbol"||jt(r)&&In(r)==I}var zo=Ag?ii(Ag):W1;function XA(r){return r===n}function qA(r){return jt(r)&&Rn(r)==ne}function YA(r){return jt(r)&&In(r)==ge}var jA=ku(yd),$A=ku(function(r,a){return r<=a});function dv(r){if(!r)return[];if(Xn(r))return Ku(r)?Bi(r):Wn(r);if(ja&&r[ja])return RE(r[ja]());var a=Rn(r),c=a==Ne?ld:a==Et?mu:Bo;return c(r)}function Er(r){if(!r)return r===0?r:0;if(r=Li(r),r===ee||r===-ee){var a=r<0?-1:1;return a*te}return r===r?r:0}function nt(r){var a=Er(r),c=a%1;return a===a?c?a-c:a:0}function hv(r){return r?Bs(nt(r),0,V):0}function Li(r){if(typeof r=="number")return r;if(si(r))return j;if(Gt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Gt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=Ug(r);var c=W.test(r);return c||Pe.test(r)?cE(r.slice(2),c?2:8):re.test(r)?j:+r}function pv(r){return rr(r,qn(r))}function KA(r){return r?Bs(nt(r),-B,B):r===0?r:0}function Mt(r){return r==null?"":ri(r)}var ZA=No(function(r,a){if(sl(a)||Xn(a)){rr(a,hn(a),r);return}for(var c in a)Tt.call(a,c)&&Ja(r,c,a[c])}),mv=No(function(r,a){rr(a,qn(a),r)}),Zu=No(function(r,a,c,m){rr(a,qn(a),r,m)}),QA=No(function(r,a,c,m){rr(a,hn(a),r,m)}),JA=Sr(pd);function eR(r,a){var c=Io(r);return a==null?c:Yg(c,a)}var tR=lt(function(r,a){r=Rt(r);var c=-1,m=a.length,M=m>2?a[2]:n;for(M&&Nn(a[0],a[1],M)&&(m=1);++c<m;)for(var R=a[c],F=qn(R),O=-1,G=F.length;++O<G;){var ue=F[O],ce=r[ue];(ce===n||Hi(ce,bo[ue])&&!Tt.call(r,ue))&&(r[ue]=R[ue])}return r}),nR=lt(function(r){return r.push(n,U_),ni(gv,n,r)});function iR(r,a){return Cg(r,Ge(a,3),ir)}function rR(r,a){return Cg(r,Ge(a,3),gd)}function sR(r,a){return r==null?r:md(r,Ge(a,3),qn)}function oR(r,a){return r==null?r:Qg(r,Ge(a,3),qn)}function aR(r,a){return r&&ir(r,Ge(a,3))}function lR(r,a){return r&&gd(r,Ge(a,3))}function uR(r){return r==null?[]:Uu(r,hn(r))}function cR(r){return r==null?[]:Uu(r,qn(r))}function jd(r,a,c){var m=r==null?n:ks(r,a);return m===n?c:m}function fR(r,a){return r!=null&&N_(r,a,I1)}function $d(r,a){return r!=null&&N_(r,a,N1)}var dR=R_(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=xu.call(a)),r[a]=c},Zd(Yn)),hR=R_(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=xu.call(a)),Tt.call(r,a)?r[a].push(c):r[a]=[c]},Ge),pR=lt(tl);function hn(r){return Xn(r)?Xg(r):Sd(r)}function qn(r){return Xn(r)?Xg(r,!0):X1(r)}function mR(r,a){var c={};return a=Ge(a,3),ir(r,function(m,M,R){vr(c,a(m,M,R),m)}),c}function gR(r,a){var c={};return a=Ge(a,3),ir(r,function(m,M,R){vr(c,M,a(m,M,R))}),c}var _R=No(function(r,a,c){Du(r,a,c)}),gv=No(function(r,a,c,m){Du(r,a,c,m)}),vR=Sr(function(r,a){var c={};if(r==null)return c;var m=!1;a=zt(a,function(R){return R=is(R,r),m||(m=R.length>1),R}),rr(r,Id(r),c),m&&(c=Ai(c,g|_|x,dT));for(var M=a.length;M--;)Ad(c,a[M]);return c});function xR(r,a){return _v(r,ju(Ge(a)))}var SR=Sr(function(r,a){return r==null?{}:Y1(r,a)});function _v(r,a){if(r==null)return{};var c=zt(Id(r),function(m){return[m]});return a=Ge(a),l_(r,c,function(m,M){return a(m,M[0])})}function yR(r,a,c){a=is(a,r);var m=-1,M=a.length;for(M||(M=1,r=n);++m<M;){var R=r==null?n:r[sr(a[m])];R===n&&(m=M,R=c),r=Mr(R)?R.call(r):R}return r}function MR(r,a,c){return r==null?r:il(r,a,c)}function ER(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:il(r,a,c,m)}var vv=P_(hn),xv=P_(qn);function TR(r,a,c){var m=Qe(r),M=m||ss(r)||zo(r);if(a=Ge(a,4),c==null){var R=r&&r.constructor;M?c=m?new R:[]:Gt(r)?c=Mr(R)?Io(Mu(r)):{}:c={}}return(M?Ei:ir)(r,function(F,O,G){return a(c,F,O,G)}),c}function wR(r,a){return r==null?!0:Ad(r,a)}function AR(r,a,c){return r==null?r:h_(r,a,Ld(c))}function RR(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:h_(r,a,Ld(c),m)}function Bo(r){return r==null?[]:ad(r,hn(r))}function CR(r){return r==null?[]:ad(r,qn(r))}function LR(r,a,c){return c===n&&(c=a,a=n),c!==n&&(c=Li(c),c=c===c?c:0),a!==n&&(a=Li(a),a=a===a?a:0),Bs(Li(r),a,c)}function PR(r,a,c){return a=Er(a),c===n?(c=a,a=0):c=Er(c),r=Li(r),F1(r,a,c)}function bR(r,a,c){if(c&&typeof c!="boolean"&&Nn(r,a,c)&&(a=c=n),c===n&&(typeof a=="boolean"?(c=a,a=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&a===n?(r=0,a=1):(r=Er(r),a===n?(a=r,r=0):a=Er(a)),r>a){var m=r;r=a,a=m}if(c||r%1||a%1){var M=Vg();return An(r+M*(a-r+uE("1e-"+((M+"").length-1))),a)}return Ed(r,a)}var UR=Fo(function(r,a,c){return a=a.toLowerCase(),r+(c?Sv(a):a)});function Sv(r){return Kd(Mt(r).toLowerCase())}function yv(r){return r=Mt(r),r&&r.replace(Ye,ME).replace(JM,"")}function DR(r,a,c){r=Mt(r),a=ri(a);var m=r.length;c=c===n?m:Bs(nt(c),0,m);var M=c;return c-=a.length,c>=0&&r.slice(c,M)==a}function IR(r){return r=Mt(r),r&&_t.test(r)?r.replace(_e,EE):r}function NR(r){return r=Mt(r),r&&cu.test(r)?r.replace(So,"\\$&"):r}var FR=Fo(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),OR=Fo(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),zR=T_("toLowerCase");function BR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;if(!a||m>=a)return r;var M=(a-m)/2;return Bu(Au(M),c)+r+Bu(wu(M),c)}function kR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;return a&&m<a?r+Bu(a-m,c):r}function HR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;return a&&m<a?Bu(a-m,c)+r:r}function GR(r,a,c){return c||a==null?a=0:a&&(a=+a),$E(Mt(r).replace(Va,""),a||0)}function VR(r,a,c){return(c?Nn(r,a,c):a===n)?a=1:a=nt(a),Td(Mt(r),a)}function WR(){var r=arguments,a=Mt(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var XR=Fo(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function qR(r,a,c){return c&&typeof c!="number"&&Nn(r,a,c)&&(a=c=n),c=c===n?V:c>>>0,c?(r=Mt(r),r&&(typeof a=="string"||a!=null&&!Yd(a))&&(a=ri(a),!a&&Co(r))?rs(Bi(r),0,c):r.split(a,c)):[]}var YR=Fo(function(r,a,c){return r+(c?" ":"")+Kd(a)});function jR(r,a,c){return r=Mt(r),c=c==null?0:Bs(nt(c),0,r.length),a=ri(a),r.slice(c,c+a.length)==a}function $R(r,a,c){var m=A.templateSettings;c&&Nn(r,a,c)&&(a=n),r=Mt(r),a=Zu({},a,m,b_);var M=Zu({},a.imports,m.imports,b_),R=hn(M),F=ad(M,R),O,G,ue=0,ce=a.interpolate||Xe,he="__p += '",we=ud((a.escape||Xe).source+"|"+ce.source+"|"+(ce===ti?b:Xe).source+"|"+(a.evaluate||Xe).source+"|$","g"),Ie="//# sourceURL="+(Tt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rE+"]")+`
`;r.replace(we,function(We,ft,gt,oi,Fn,ai){return gt||(gt=oi),he+=r.slice(ue,ai).replace(at,TE),ft&&(O=!0,he+=`' +
__e(`+ft+`) +
'`),Fn&&(G=!0,he+=`';
`+Fn+`;
__p += '`),gt&&(he+=`' +
((__t = (`+gt+`)) == null ? '' : __t) +
'`),ue=ai+We.length,We}),he+=`';
`;var Ve=Tt.call(a,"variable")&&a.variable;if(!Ve)he=`with (obj) {
`+he+`
}
`;else if(Xf.test(Ve))throw new Ze(u);he=(G?he.replace(At,""):he).replace(z,"$1").replace(Te,"$1;"),he="function("+(Ve||"obj")+`) {
`+(Ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(G?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var rt=Ev(function(){return yt(R,Ie+"return "+he).apply(n,F)});if(rt.source=he,qd(rt))throw rt;return rt}function KR(r){return Mt(r).toLowerCase()}function ZR(r){return Mt(r).toUpperCase()}function QR(r,a,c){if(r=Mt(r),r&&(c||a===n))return Ug(r);if(!r||!(a=ri(a)))return r;var m=Bi(r),M=Bi(a),R=Dg(m,M),F=Ig(m,M)+1;return rs(m,R,F).join("")}function JR(r,a,c){if(r=Mt(r),r&&(c||a===n))return r.slice(0,Fg(r)+1);if(!r||!(a=ri(a)))return r;var m=Bi(r),M=Ig(m,Bi(a))+1;return rs(m,0,M).join("")}function eC(r,a,c){if(r=Mt(r),r&&(c||a===n))return r.replace(Va,"");if(!r||!(a=ri(a)))return r;var m=Bi(r),M=Dg(m,Bi(a));return rs(m,M).join("")}function tC(r,a){var c=U,m=oe;if(Gt(a)){var M="separator"in a?a.separator:M;c="length"in a?nt(a.length):c,m="omission"in a?ri(a.omission):m}r=Mt(r);var R=r.length;if(Co(r)){var F=Bi(r);R=F.length}if(c>=R)return r;var O=c-Lo(m);if(O<1)return m;var G=F?rs(F,0,O).join(""):r.slice(0,O);if(M===n)return G+m;if(F&&(O+=G.length-O),Yd(M)){if(r.slice(O).search(M)){var ue,ce=G;for(M.global||(M=ud(M.source,Mt(q.exec(M))+"g")),M.lastIndex=0;ue=M.exec(ce);)var he=ue.index;G=G.slice(0,he===n?O:he)}}else if(r.indexOf(ri(M),O)!=O){var we=G.lastIndexOf(M);we>-1&&(G=G.slice(0,we))}return G+m}function nC(r){return r=Mt(r),r&&Re.test(r)?r.replace(Q,bE):r}var iC=Fo(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),Kd=T_("toUpperCase");function Mv(r,a,c){return r=Mt(r),a=c?n:a,a===n?AE(r)?IE(r):_E(r):r.match(a)||[]}var Ev=lt(function(r,a){try{return ni(r,n,a)}catch(c){return qd(c)?c:new Ze(c)}}),rC=Sr(function(r,a){return Ei(a,function(c){c=sr(c),vr(r,c,Wd(r[c],r))}),r});function sC(r){var a=r==null?0:r.length,c=Ge();return r=a?zt(r,function(m){if(typeof m[1]!="function")throw new Ti(l);return[c(m[0]),m[1]]}):[],lt(function(m){for(var M=-1;++M<a;){var R=r[M];if(ni(R[0],this,m))return ni(R[1],this,m)}})}function oC(r){return b1(Ai(r,g))}function Zd(r){return function(){return r}}function aC(r,a){return r==null||r!==r?a:r}var lC=A_(),uC=A_(!0);function Yn(r){return r}function Qd(r){return n_(typeof r=="function"?r:Ai(r,g))}function cC(r){return r_(Ai(r,g))}function fC(r,a){return s_(r,Ai(a,g))}var dC=lt(function(r,a){return function(c){return tl(c,r,a)}}),hC=lt(function(r,a){return function(c){return tl(r,c,a)}});function Jd(r,a,c){var m=hn(a),M=Uu(a,m);c==null&&!(Gt(a)&&(M.length||!m.length))&&(c=a,a=r,r=this,M=Uu(a,hn(a)));var R=!(Gt(c)&&"chain"in c)||!!c.chain,F=Mr(r);return Ei(M,function(O){var G=a[O];r[O]=G,F&&(r.prototype[O]=function(){var ue=this.__chain__;if(R||ue){var ce=r(this.__wrapped__),he=ce.__actions__=Wn(this.__actions__);return he.push({func:G,args:arguments,thisArg:r}),ce.__chain__=ue,ce}return G.apply(r,Qr([this.value()],arguments))})}),r}function pC(){return vn._===this&&(vn._=kE),this}function eh(){}function mC(r){return r=nt(r),lt(function(a){return o_(a,r)})}var gC=bd(zt),_C=bd(Rg),vC=bd(nd);function Tv(r){return zd(r)?id(sr(r)):j1(r)}function xC(r){return function(a){return r==null?n:ks(r,a)}}var SC=C_(),yC=C_(!0);function th(){return[]}function nh(){return!1}function MC(){return{}}function EC(){return""}function TC(){return!0}function wC(r,a){if(r=nt(r),r<1||r>B)return[];var c=V,m=An(r,V);a=Ge(a),r-=V;for(var M=od(m,a);++c<r;)a(c);return M}function AC(r){return Qe(r)?zt(r,sr):si(r)?[r]:Wn(W_(Mt(r)))}function RC(r){var a=++zE;return Mt(r)+a}var CC=zu(function(r,a){return r+a},0),LC=Ud("ceil"),PC=zu(function(r,a){return r/a},1),bC=Ud("floor");function UC(r){return r&&r.length?bu(r,Yn,_d):n}function DC(r,a){return r&&r.length?bu(r,Ge(a,2),_d):n}function IC(r){return Pg(r,Yn)}function NC(r,a){return Pg(r,Ge(a,2))}function FC(r){return r&&r.length?bu(r,Yn,yd):n}function OC(r,a){return r&&r.length?bu(r,Ge(a,2),yd):n}var zC=zu(function(r,a){return r*a},1),BC=Ud("round"),kC=zu(function(r,a){return r-a},0);function HC(r){return r&&r.length?sd(r,Yn):0}function GC(r,a){return r&&r.length?sd(r,Ge(a,2)):0}return A.after=cA,A.ary=tv,A.assign=ZA,A.assignIn=mv,A.assignInWith=Zu,A.assignWith=QA,A.at=JA,A.before=nv,A.bind=Wd,A.bindAll=rC,A.bindKey=iv,A.castArray=MA,A.chain=Q_,A.chunk=bT,A.compact=UT,A.concat=DT,A.cond=sC,A.conforms=oC,A.constant=Zd,A.countBy=Hw,A.create=eR,A.curry=rv,A.curryRight=sv,A.debounce=ov,A.defaults=tR,A.defaultsDeep=nR,A.defer=fA,A.delay=dA,A.difference=IT,A.differenceBy=NT,A.differenceWith=FT,A.drop=OT,A.dropRight=zT,A.dropRightWhile=BT,A.dropWhile=kT,A.fill=HT,A.filter=Vw,A.flatMap=qw,A.flatMapDeep=Yw,A.flatMapDepth=jw,A.flatten=j_,A.flattenDeep=GT,A.flattenDepth=VT,A.flip=hA,A.flow=lC,A.flowRight=uC,A.fromPairs=WT,A.functions=uR,A.functionsIn=cR,A.groupBy=$w,A.initial=qT,A.intersection=YT,A.intersectionBy=jT,A.intersectionWith=$T,A.invert=dR,A.invertBy=hR,A.invokeMap=Zw,A.iteratee=Qd,A.keyBy=Qw,A.keys=hn,A.keysIn=qn,A.map=Xu,A.mapKeys=mR,A.mapValues=gR,A.matches=cC,A.matchesProperty=fC,A.memoize=Yu,A.merge=_R,A.mergeWith=gv,A.method=dC,A.methodOf=hC,A.mixin=Jd,A.negate=ju,A.nthArg=mC,A.omit=vR,A.omitBy=xR,A.once=pA,A.orderBy=Jw,A.over=gC,A.overArgs=mA,A.overEvery=_C,A.overSome=vC,A.partial=Xd,A.partialRight=av,A.partition=eA,A.pick=SR,A.pickBy=_v,A.property=Tv,A.propertyOf=xC,A.pull=JT,A.pullAll=K_,A.pullAllBy=ew,A.pullAllWith=tw,A.pullAt=nw,A.range=SC,A.rangeRight=yC,A.rearg=gA,A.reject=iA,A.remove=iw,A.rest=_A,A.reverse=Gd,A.sampleSize=sA,A.set=MR,A.setWith=ER,A.shuffle=oA,A.slice=rw,A.sortBy=uA,A.sortedUniq=fw,A.sortedUniqBy=dw,A.split=qR,A.spread=vA,A.tail=hw,A.take=pw,A.takeRight=mw,A.takeRightWhile=gw,A.takeWhile=_w,A.tap=Uw,A.throttle=xA,A.thru=Wu,A.toArray=dv,A.toPairs=vv,A.toPairsIn=xv,A.toPath=AC,A.toPlainObject=pv,A.transform=TR,A.unary=SA,A.union=vw,A.unionBy=xw,A.unionWith=Sw,A.uniq=yw,A.uniqBy=Mw,A.uniqWith=Ew,A.unset=wR,A.unzip=Vd,A.unzipWith=Z_,A.update=AR,A.updateWith=RR,A.values=Bo,A.valuesIn=CR,A.without=Tw,A.words=Mv,A.wrap=yA,A.xor=ww,A.xorBy=Aw,A.xorWith=Rw,A.zip=Cw,A.zipObject=Lw,A.zipObjectDeep=Pw,A.zipWith=bw,A.entries=vv,A.entriesIn=xv,A.extend=mv,A.extendWith=Zu,Jd(A,A),A.add=CC,A.attempt=Ev,A.camelCase=UR,A.capitalize=Sv,A.ceil=LC,A.clamp=LR,A.clone=EA,A.cloneDeep=wA,A.cloneDeepWith=AA,A.cloneWith=TA,A.conformsTo=RA,A.deburr=yv,A.defaultTo=aC,A.divide=PC,A.endsWith=DR,A.eq=Hi,A.escape=IR,A.escapeRegExp=NR,A.every=Gw,A.find=Ww,A.findIndex=q_,A.findKey=iR,A.findLast=Xw,A.findLastIndex=Y_,A.findLastKey=rR,A.floor=bC,A.forEach=J_,A.forEachRight=ev,A.forIn=sR,A.forInRight=oR,A.forOwn=aR,A.forOwnRight=lR,A.get=jd,A.gt=CA,A.gte=LA,A.has=fR,A.hasIn=$d,A.head=$_,A.identity=Yn,A.includes=Kw,A.indexOf=XT,A.inRange=PR,A.invoke=pR,A.isArguments=Vs,A.isArray=Qe,A.isArrayBuffer=PA,A.isArrayLike=Xn,A.isArrayLikeObject=Kt,A.isBoolean=bA,A.isBuffer=ss,A.isDate=UA,A.isElement=DA,A.isEmpty=IA,A.isEqual=NA,A.isEqualWith=FA,A.isError=qd,A.isFinite=OA,A.isFunction=Mr,A.isInteger=lv,A.isLength=$u,A.isMap=uv,A.isMatch=zA,A.isMatchWith=BA,A.isNaN=kA,A.isNative=HA,A.isNil=VA,A.isNull=GA,A.isNumber=cv,A.isObject=Gt,A.isObjectLike=jt,A.isPlainObject=al,A.isRegExp=Yd,A.isSafeInteger=WA,A.isSet=fv,A.isString=Ku,A.isSymbol=si,A.isTypedArray=zo,A.isUndefined=XA,A.isWeakMap=qA,A.isWeakSet=YA,A.join=KT,A.kebabCase=FR,A.last=Ci,A.lastIndexOf=ZT,A.lowerCase=OR,A.lowerFirst=zR,A.lt=jA,A.lte=$A,A.max=UC,A.maxBy=DC,A.mean=IC,A.meanBy=NC,A.min=FC,A.minBy=OC,A.stubArray=th,A.stubFalse=nh,A.stubObject=MC,A.stubString=EC,A.stubTrue=TC,A.multiply=zC,A.nth=QT,A.noConflict=pC,A.noop=eh,A.now=qu,A.pad=BR,A.padEnd=kR,A.padStart=HR,A.parseInt=GR,A.random=bR,A.reduce=tA,A.reduceRight=nA,A.repeat=VR,A.replace=WR,A.result=yR,A.round=BC,A.runInContext=k,A.sample=rA,A.size=aA,A.snakeCase=XR,A.some=lA,A.sortedIndex=sw,A.sortedIndexBy=ow,A.sortedIndexOf=aw,A.sortedLastIndex=lw,A.sortedLastIndexBy=uw,A.sortedLastIndexOf=cw,A.startCase=YR,A.startsWith=jR,A.subtract=kC,A.sum=HC,A.sumBy=GC,A.template=$R,A.times=wC,A.toFinite=Er,A.toInteger=nt,A.toLength=hv,A.toLower=KR,A.toNumber=Li,A.toSafeInteger=KA,A.toString=Mt,A.toUpper=ZR,A.trim=QR,A.trimEnd=JR,A.trimStart=eC,A.truncate=tC,A.unescape=nC,A.uniqueId=RC,A.upperCase=iC,A.upperFirst=Kd,A.each=J_,A.eachRight=ev,A.first=$_,Jd(A,function(){var r={};return ir(A,function(a,c){Tt.call(A.prototype,c)||(r[c]=a)}),r}(),{chain:!1}),A.VERSION=i,Ei(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),Ei(["drop","take"],function(r,a){ht.prototype[r]=function(c){c=c===n?1:an(nt(c),0);var m=this.__filtered__&&!a?new ht(this):this.clone();return m.__filtered__?m.__takeCount__=An(c,m.__takeCount__):m.__views__.push({size:An(c,V),type:r+(m.__dir__<0?"Right":"")}),m},ht.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),Ei(["filter","map","takeWhile"],function(r,a){var c=a+1,m=c==J||c==fe;ht.prototype[r]=function(M){var R=this.clone();return R.__iteratees__.push({iteratee:Ge(M,3),type:c}),R.__filtered__=R.__filtered__||m,R}}),Ei(["head","last"],function(r,a){var c="take"+(a?"Right":"");ht.prototype[r]=function(){return this[c](1).value()[0]}}),Ei(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");ht.prototype[r]=function(){return this.__filtered__?new ht(this):this[c](1)}}),ht.prototype.compact=function(){return this.filter(Yn)},ht.prototype.find=function(r){return this.filter(r).head()},ht.prototype.findLast=function(r){return this.reverse().find(r)},ht.prototype.invokeMap=lt(function(r,a){return typeof r=="function"?new ht(this):this.map(function(c){return tl(c,r,a)})}),ht.prototype.reject=function(r){return this.filter(ju(Ge(r)))},ht.prototype.slice=function(r,a){r=nt(r);var c=this;return c.__filtered__&&(r>0||a<0)?new ht(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==n&&(a=nt(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},ht.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},ht.prototype.toArray=function(){return this.take(V)},ir(ht.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),m=/^(?:head|last)$/.test(a),M=A[m?"take"+(a=="last"?"Right":""):a],R=m||/^find/.test(a);M&&(A.prototype[a]=function(){var F=this.__wrapped__,O=m?[1]:arguments,G=F instanceof ht,ue=O[0],ce=G||Qe(F),he=function(ft){var gt=M.apply(A,Qr([ft],O));return m&&we?gt[0]:gt};ce&&c&&typeof ue=="function"&&ue.length!=1&&(G=ce=!1);var we=this.__chain__,Ie=!!this.__actions__.length,Ve=R&&!we,rt=G&&!Ie;if(!R&&ce){F=rt?F:new ht(this);var We=r.apply(F,O);return We.__actions__.push({func:Wu,args:[he],thisArg:n}),new wi(We,we)}return Ve&&rt?r.apply(this,O):(We=this.thru(he),Ve?m?We.value()[0]:We.value():We)})}),Ei(["pop","push","shift","sort","splice","unshift"],function(r){var a=gu[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",m=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var M=arguments;if(m&&!this.__chain__){var R=this.value();return a.apply(Qe(R)?R:[],M)}return this[c](function(F){return a.apply(Qe(F)?F:[],M)})}}),ir(ht.prototype,function(r,a){var c=A[a];if(c){var m=c.name+"";Tt.call(Do,m)||(Do[m]=[]),Do[m].push({name:a,func:c})}}),Do[Ou(n,h).name]=[{name:"wrapper",func:n}],ht.prototype.clone=n1,ht.prototype.reverse=i1,ht.prototype.value=r1,A.prototype.at=Dw,A.prototype.chain=Iw,A.prototype.commit=Nw,A.prototype.next=Fw,A.prototype.plant=zw,A.prototype.reverse=Bw,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=kw,A.prototype.first=A.prototype.head,ja&&(A.prototype[ja]=Ow),A},Po=NE();Ns?((Ns.exports=Po)._=Po,Qf._=Po):vn._=Po}).call(ll)})(Ef,Ef.exports);var Zx=Ef.exports,Aa=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Aa.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Aa.Bounce.In(t*2)*.5:Aa.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),_a=function(){return performance.now()},WM=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=_a()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var o=this._tweens[i[s]],l=!n;o&&o.update(e,l)===!1&&!n&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),io={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),o=io.Utils.Linear;return e<0?o(t[0],t[1],i):e>1?o(t[n],t[n-1],n-i):o(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,o=io.Utils.Bernstein,l=0;l<=i;l++)n+=s(1-e,i-l)*s(e,l)*t[l]*o(i,l);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),o=io.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),o(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):o(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=io.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,s){var o=(n-t)*.5,l=(i-e)*.5,u=s*s,f=s*u;return(2*e-2*n+o+l)*f+(-3*e+3*n-2*o-l)*u+o*s+e}}},ug=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),am=new WM,LN=function(){function t(e,n){n===void 0&&(n=am),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Aa.Linear.None,this._interpolationFunction=io.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=ug.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=_a()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,s,o){for(var l in i){var u=e[l],f=Array.isArray(u),d=f?"array":typeof u,p=!f&&Array.isArray(i[l]);if(!(d==="undefined"||d==="function")){if(p){var g=i[l];if(g.length===0)continue;for(var _=[u],x=0,E=g.length;x<E;x+=1){var T=this._handleRelativeValue(u,g[x]);if(isNaN(T)){p=!1,console.warn("Found invalid interpolation list. Skipping.");break}_.push(T)}p&&(i[l]=_)}if((d==="object"||f)&&u&&!p){n[l]=f?[]:{};var v=u;for(var h in v)n[l][h]=v[h];s[l]=f?[]:{};var g=i[l];if(!this._isDynamic){var y={};for(var h in g)y[h]=g[h];i[l]=g=y}this._setupProperties(v,n[l],g,s[l],o)}else(typeof n[l]>"u"||o)&&(n[l]=u),f||(n[l]*=1),p?s[l]=i[l].slice().reverse():s[l]=n[l]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=_a()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=_a()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=am),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Aa.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=io.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=_a()),n===void 0&&(n=!0),this._isPaused)return!0;var i,s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var l=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,f=this._chainedTweens.length;u<f;u++)this._chainedTweens[u].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,s){for(var o in i)if(n[o]!==void 0){var l=n[o]||0,u=i[o],f=Array.isArray(e[o]),d=Array.isArray(u),p=!f&&d;p?e[o]=this._interpolationFunction(u,s):typeof u=="object"&&u?this._updateProperties(e[o],l,u,s):(u=this._handleRelativeValue(l,u),typeof u=="number"&&(e[o]=l+(u-l)*s))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),PN="21.0.0",bN=ug.nextId,hr=am,UN=hr.getAll.bind(hr),DN=hr.removeAll.bind(hr),IN=hr.add.bind(hr),NN=hr.remove.bind(hr),FN=hr.update.bind(hr),Js={Easing:Aa,Group:WM,Interpolation:io,now:_a,Sequence:ug,nextId:bN,Tween:LN,VERSION:PN,getAll:UN,removeAll:DN,add:IN,remove:NN,update:FN};const ON=(t,e)=>{const n=[];for(let i=0;i<t.length-1;i++)for(let s=0;s<=e;s++){const o=s/e,l={x:t[i].position.x*(1-o)+t[i+1].position.x*o,y:t[i].position.y*(1-o)+t[i+1].position.y*o,z:t[i].position.z*(1-o)+t[i+1].position.z*o},u={x:t[i].rotation.x*(1-o)+t[i+1].rotation.x*o,y:t[i].rotation.y*(1-o)+t[i+1].rotation.y*o,z:t[i].rotation.z*(1-o)+t[i+1].rotation.z*o};n.push({position:l,rotation:u})}return n.push(t[t.length-1]),n},zN=lS.memo(()=>{const t=Vt.useRef(null),e=Vt.useRef(null),n=Vt.useRef(null),i=Vt.useRef(null),[s,o,l]=Vt.useMemo(()=>[0,.7,1.25],[]),u=Vt.useMemo(()=>[{position:{x:s,y:o,z:l},rotation:{x:0,y:0,z:0}},{position:{x:1,y:1,z:0},rotation:{x:0,y:2,z:0}},{position:{x:-1,y:1,z:0},rotation:{x:0,y:-2,z:0}},{position:{x:0,y:1,z:-2},rotation:{x:0,y:-3,z:0}}],[s,o,l]),f=10,d=Vt.useMemo(()=>ON(u,f),[u,f]),[p,g]=Vt.useState(0),_=30;let x=0;const E=Vt.useCallback((h=0)=>{const y=h-x,S=1e3/_;y>S&&(x=h-y%S,Js.update(),i.current.render(e.current,n.current)),requestAnimationFrame(E)},[]),T=Vt.useCallback(Zx.debounce(()=>{n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight)},200),[]),v=Vt.useCallback(Zx.throttle(()=>{const h=window.pageYOffset||document.documentElement.scrollTop;let y=Math.floor(h/(document.body.offsetHeight/d.length));if(y=Math.max(0,y),y=Math.min(d.length-1,y),y!==p){const S={x:n.current.position.x,y:n.current.position.y,z:n.current.position.z},w={x:n.current.rotation.x,y:n.current.rotation.y,z:n.current.rotation.z};new Js.Tween(S).to(d[y].position,1e3).easing(Js.Easing.Quadratic.Out).onUpdate(()=>{n.current.position.set(S.x,S.y,S.z)}).start(),new Js.Tween(w).to(d[y].rotation,1e3).easing(Js.Easing.Quadratic.Out).onUpdate(()=>{n.current.rotation.set(w.x,w.y,w.z)}).start(),g(y)}},200),[p,d]);return Vt.useEffect(()=>{let h,y,S;return h=new EN,y=new Ii(75,window.innerWidth/window.innerHeight,.1,1e3),S=new VM({antialias:!1,precision:"lowp",alpha:!1}),S.setSize(window.innerWidth,window.innerHeight),S.setClearColor(16777215,0),e.current=h,n.current=y,i.current=S,t.current&&t.current.appendChild(S.domElement),new CN().load("src/assets/gundam.stl",P=>{const N=new sg({color:16777215,wireframe:!0,wireframeLinewidth:10}),D=new Br(P,N);D.frustumCulled=!0,D.rotation.x=-Math.PI/2,D.scale.set(.01,.01,.01),h.add(D)}),y.position.x=s,y.position.y=o,y.position.z=l,E(),()=>{t.current&&t.current.removeChild(S.domElement)}},[E,s,o,l]),Vt.useEffect(()=>(window.addEventListener("resize",T),window.addEventListener("scroll",v),()=>{window.removeEventListener("resize",T),window.removeEventListener("scroll",v)}),[T,v]),Ae.jsx("div",{ref:t})}),kr=({text:t})=>{const e=Vt.useRef(null);return Vt.useEffect(()=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let i=null;const s=l=>{let u=0;clearInterval(i),i=setInterval(()=>{l.target.innerText=l.target.innerText.split("").map((f,d)=>d<u?t[d]:n[Math.floor(Math.random()*26)]).join(""),u>=t.length&&clearInterval(i),u+=1/3},30)},o=e.current;return o.addEventListener("mouseover",s),()=>{clearInterval(i),o.removeEventListener("mouseover",s)}},[t]),Ae.jsx("span",{className:"links",ref:e,children:t})},BN=({homeRef:t,projectsRef:e,aboutRef:n,contactRef:i})=>{const s=Vt.useCallback(o=>()=>{const{current:l}=o;window.scrollTo({top:l.offsetTop-window.innerHeight/2+l.offsetHeight/2,behavior:"smooth"})},[]);return Ae.jsxs("div",{className:"accentLine",children:[Ae.jsx("pre",{className:"preText",children:Ae.jsx("a",{onClick:s(t),className:"navBar",children:Ae.jsx(kr,{text:"home"})})}),Ae.jsx("pre",{className:"preText",children:Ae.jsx("a",{onClick:s(e),className:"navBar",children:Ae.jsx(kr,{text:"projects"})})}),Ae.jsx("pre",{className:"preText",children:Ae.jsx("a",{onClick:s(n),className:"navBar",children:Ae.jsx(kr,{text:"about"})})}),Ae.jsx("pre",{className:"preText",children:Ae.jsx("a",{onClick:s(i),className:"navBar",children:Ae.jsx(kr,{text:"contact"})})})]})},sp=({img:t,title:e,link:n,text:i})=>Ae.jsxs("div",{className:"projectItem",children:[Ae.jsx("img",{className:"projectIMG",src:t}),Ae.jsx("pre",{className:"preText projectText",children:Ae.jsx("a",{href:n,children:Ae.jsx(kr,{text:e})})}),Ae.jsx("pre",{className:"preText projectText",children:i})]}),kN=()=>{const t=Vt.useRef(null),e=Vt.useRef(null),n=Vt.useRef(null),i=Vt.useRef(null);return Ae.jsxs("div",{className:"mainContainer",children:[Ae.jsx("div",{className:"background"}),Ae.jsx(BN,{homeRef:t,projectsRef:e,aboutRef:n,contactRef:i}),Ae.jsx("div",{className:"canvasHolder",children:Ae.jsx(zN,{})}),Ae.jsxs("div",{className:"accentHolder",children:[Ae.jsx("div",{className:"topLeft",children:Ae.jsx("p",{className:"accentText verticalText",children:"+---|=============-"})}),Ae.jsx("div",{className:"topLeft",children:Ae.jsx("p",{className:"accentText",children:"+---|=============-"})}),Ae.jsx("div",{className:"bottomRight",style:{right:"50px"},children:Ae.jsx("p",{className:"accentText verticalText",children:"-=============|---+"})}),Ae.jsx("div",{className:"bottomRight",children:Ae.jsx("p",{className:"accentText",children:"-=============|---+"})})]}),Ae.jsxs("div",{ref:t,className:"textBox",style:{marginRight:"25vw"},children:[Ae.jsx("pre",{children:"Hello, my name is Phi (Φ),"}),Ae.jsx("pre",{children:"I make websites for cool people."})]}),Ae.jsxs("div",{ref:e,className:"projects",children:[Ae.jsx("div",{className:"textBox",style:{margin:"15vh 0 0 0"},children:Ae.jsx(sp,{img:"",title:"Amazon Pathfinder",link:"",text:"Created an intern tool projected to achieve a 95% cost reduction, saving Amazon over $10k per Amazonian trained in drop zones."})}),Ae.jsx("div",{className:"textBox",style:{margin:"5vh 2.5vw 0 2.5vw"},children:Ae.jsx(sp,{img:"",title:"BGC NitroCycle",link:"https://github.com/IQP-NCPOGD/nitrocycle",text:"An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's IQP program."})}),Ae.jsx("div",{className:"textBox",style:{margin:"0vh 0 0 0"},children:Ae.jsx(sp,{img:"",title:"BWH MSRS",link:"https://github.com/phbui/BWH-Medical-Service-Request-System",text:"A medical service request system made for Brigham and Women's Hospital for WPI's Software Engineering course."})})]}),Ae.jsxs("div",{ref:n,className:"textBox",style:{marginLeft:"14vw"},children:[Ae.jsx("pre",{children:"const About = (phi_bui) => {"}),Ae.jsxs("pre",{children:["   ","const resume = fetch('",Ae.jsx("a",{href:"src/assets/Philip Bui Resume.pdf",download:"Philip Bui - Resume.pdf",children:Ae.jsx(kr,{text:"resume.pdf"})}),"');"]}),Ae.jsxs("pre",{children:["   ","let undergrad = 'B.S. in CS @ WPI';"]}),Ae.jsxs("pre",{children:["   ","let grad = null; ",Ae.jsx("span",{className:"grad",children:"//TBD"})]}),Ae.jsx("br",{}),Ae.jsxs("pre",{children:["   ","const experience = () => {"]}),Ae.jsxs("pre",{children:["       ","return ["]}),Ae.jsxs("pre",{children:["           ","{Amazon: 'Area Manager Intern'},"]}),Ae.jsxs("pre",{children:["           ","{ProsperOn: Website Developer Intern}"]}),Ae.jsxs("pre",{children:["       ","];"]}),Ae.jsxs("pre",{children:["   ","};"]}),Ae.jsx("pre",{children:"}"})]}),Ae.jsxs("div",{ref:i,className:"textBox",children:[Ae.jsxs("pre",{children:["const Contact = {","              "]}),Ae.jsxs("pre",{children:["  ","{email: ",Ae.jsx("a",{href:"mailto:bilphui@gmail.com",children:Ae.jsx(kr,{text:"bilphui@gmail.com"})}),"},"]}),Ae.jsxs("pre",{children:["  ","{linkedin: ",Ae.jsx("a",{href:"https://www.linkedin.com/in/phi-bui/",children:Ae.jsx(kr,{text:"phi-bui"})}),"},"]}),Ae.jsxs("pre",{children:["  ","{github: ",Ae.jsx("a",{href:"https://github.com/phbui",children:Ae.jsx(kr,{text:"phbui"})}),"}"]}),Ae.jsx("pre",{children:"}"})]})]})};mP.render(Ae.jsx(lS.StrictMode,{children:Ae.jsx(kN,{})}),document.getElementById("root"))});export default HN();
