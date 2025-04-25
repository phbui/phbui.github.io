var sS=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Jw=sS(wl=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function t(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(u){if(u.ep)return;u.ep=!0;const f=t(u);fetch(u.href,f)}})();var Nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var am={exports:{}},td={},lm={exports:{}},Ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function oS(){if(Rg)return Ht;Rg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),M=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=M&&U[M]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,L={};function T(U,k,J){this.props=U,this.context=k,this.refs=L,this.updater=J||A}T.prototype.isReactComponent={},T.prototype.setState=function(U,k){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,k,"setState")},T.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=T.prototype;function H(U,k,J){this.props=U,this.context=k,this.refs=L,this.updater=J||A}var D=H.prototype=new y;D.constructor=H,P(D,T.prototype),D.isPureReactComponent=!0;var O=Array.isArray,W=Object.prototype.hasOwnProperty,q={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function fe(U,k,J){var Ce,Ae={},Ue=null,Be=null;if(k!=null)for(Ce in k.ref!==void 0&&(Be=k.ref),k.key!==void 0&&(Ue=""+k.key),k)W.call(k,Ce)&&!X.hasOwnProperty(Ce)&&(Ae[Ce]=k[Ce]);var Ye=arguments.length-2;if(Ye===1)Ae.children=J;else if(1<Ye){for(var ze=Array(Ye),pt=0;pt<Ye;pt++)ze[pt]=arguments[pt+2];Ae.children=ze}if(U&&U.defaultProps)for(Ce in Ye=U.defaultProps,Ye)Ae[Ce]===void 0&&(Ae[Ce]=Ye[Ce]);return{$$typeof:s,type:U,key:Ue,ref:Be,props:Ae,_owner:q.current}}function I(U,k){return{$$typeof:s,type:U.type,key:k,ref:U.ref,props:U.props,_owner:U._owner}}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function Me(U){var k={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(J){return k[J]})}var Re=/\/+/g;function se(U,k){return typeof U=="object"&&U!==null&&U.key!=null?Me(""+U.key):k.toString(36)}function de(U,k,J,Ce,Ae){var Ue=typeof U;(Ue==="undefined"||Ue==="boolean")&&(U=null);var Be=!1;if(U===null)Be=!0;else switch(Ue){case"string":case"number":Be=!0;break;case"object":switch(U.$$typeof){case s:case e:Be=!0}}if(Be)return Be=U,Ae=Ae(Be),U=Ce===""?"."+se(Be,0):Ce,O(Ae)?(J="",U!=null&&(J=U.replace(Re,"$&/")+"/"),de(Ae,k,J,"",function(pt){return pt})):Ae!=null&&(G(Ae)&&(Ae=I(Ae,J+(!Ae.key||Be&&Be.key===Ae.key?"":(""+Ae.key).replace(Re,"$&/")+"/")+U)),k.push(Ae)),1;if(Be=0,Ce=Ce===""?".":Ce+":",O(U))for(var Ye=0;Ye<U.length;Ye++){Ue=U[Ye];var ze=Ce+se(Ue,Ye);Be+=de(Ue,k,J,ze,Ae)}else if(ze=E(U),typeof ze=="function")for(U=ze.call(U),Ye=0;!(Ue=U.next()).done;)Ue=Ue.value,ze=Ce+se(Ue,Ye++),Be+=de(Ue,k,J,ze,Ae);else if(Ue==="object")throw k=String(U),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return Be}function me(U,k,J){if(U==null)return U;var Ce=[],Ae=0;return de(U,Ce,"","",function(Ue){return k.call(J,Ue,Ae++)}),Ce}function Ee(U){if(U._status===-1){var k=U._result;k=k(),k.then(function(J){(U._status===0||U._status===-1)&&(U._status=1,U._result=J)},function(J){(U._status===0||U._status===-1)&&(U._status=2,U._result=J)}),U._status===-1&&(U._status=0,U._result=k)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},Z={transition:null},pe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:q};return Ht.Children={map:me,forEach:function(U,k,J){me(U,function(){k.apply(this,arguments)},J)},count:function(U){var k=0;return me(U,function(){k++}),k},toArray:function(U){return me(U,function(k){return k})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ht.Component=T,Ht.Fragment=t,Ht.Profiler=u,Ht.PureComponent=H,Ht.StrictMode=a,Ht.Suspense=x,Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ht.cloneElement=function(U,k,J){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ce=P({},U.props),Ae=U.key,Ue=U.ref,Be=U._owner;if(k!=null){if(k.ref!==void 0&&(Ue=k.ref,Be=q.current),k.key!==void 0&&(Ae=""+k.key),U.type&&U.type.defaultProps)var Ye=U.type.defaultProps;for(ze in k)W.call(k,ze)&&!X.hasOwnProperty(ze)&&(Ce[ze]=k[ze]===void 0&&Ye!==void 0?Ye[ze]:k[ze])}var ze=arguments.length-2;if(ze===1)Ce.children=J;else if(1<ze){Ye=Array(ze);for(var pt=0;pt<ze;pt++)Ye[pt]=arguments[pt+2];Ce.children=Ye}return{$$typeof:s,type:U.type,key:Ae,ref:Ue,props:Ce,_owner:Be}},Ht.createContext=function(U){return U={$$typeof:p,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:f,_context:U},U.Consumer=U},Ht.createElement=fe,Ht.createFactory=function(U){var k=fe.bind(null,U);return k.type=U,k},Ht.createRef=function(){return{current:null}},Ht.forwardRef=function(U){return{$$typeof:h,render:U}},Ht.isValidElement=G,Ht.lazy=function(U){return{$$typeof:S,_payload:{_status:-1,_result:U},_init:Ee}},Ht.memo=function(U,k){return{$$typeof:v,type:U,compare:k===void 0?null:k}},Ht.startTransition=function(U){var k=Z.transition;Z.transition={};try{U()}finally{Z.transition=k}},Ht.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Ht.useCallback=function(U,k){return ue.current.useCallback(U,k)},Ht.useContext=function(U){return ue.current.useContext(U)},Ht.useDebugValue=function(){},Ht.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},Ht.useEffect=function(U,k){return ue.current.useEffect(U,k)},Ht.useId=function(){return ue.current.useId()},Ht.useImperativeHandle=function(U,k,J){return ue.current.useImperativeHandle(U,k,J)},Ht.useInsertionEffect=function(U,k){return ue.current.useInsertionEffect(U,k)},Ht.useLayoutEffect=function(U,k){return ue.current.useLayoutEffect(U,k)},Ht.useMemo=function(U,k){return ue.current.useMemo(U,k)},Ht.useReducer=function(U,k,J){return ue.current.useReducer(U,k,J)},Ht.useRef=function(U){return ue.current.useRef(U)},Ht.useState=function(U){return ue.current.useState(U)},Ht.useSyncExternalStore=function(U,k,J){return ue.current.useSyncExternalStore(U,k,J)},Ht.useTransition=function(){return ue.current.useTransition()},Ht.version="18.2.0",Ht}var Cg;function eg(){return Cg||(Cg=1,lm.exports=oS()),lm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function aS(){if(Lg)return td;Lg=1;var s=eg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(h,x,v){var S,M={},E=null,A=null;v!==void 0&&(E=""+v),x.key!==void 0&&(E=""+x.key),x.ref!==void 0&&(A=x.ref);for(S in x)a.call(x,S)&&!f.hasOwnProperty(S)&&(M[S]=x[S]);if(h&&h.defaultProps)for(S in x=h.defaultProps,x)M[S]===void 0&&(M[S]=x[S]);return{$$typeof:e,type:h,key:E,ref:A,props:M,_owner:u.current}}return td.Fragment=t,td.jsx=p,td.jsxs=p,td}var Pg;function lS(){return Pg||(Pg=1,am.exports=aS()),am.exports}var ye=lS(),En=eg();const uS=rv(En);var Fh={},um={exports:{}},sr={},cm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function cS(){return bg||(bg=1,function(s){function e(Z,pe){var U=Z.length;Z.push(pe);e:for(;0<U;){var k=U-1>>>1,J=Z[k];if(0<u(J,pe))Z[k]=pe,Z[U]=J,U=k;else break e}}function t(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var pe=Z[0],U=Z.pop();if(U!==pe){Z[0]=U;e:for(var k=0,J=Z.length,Ce=J>>>1;k<Ce;){var Ae=2*(k+1)-1,Ue=Z[Ae],Be=Ae+1,Ye=Z[Be];if(0>u(Ue,U))Be<J&&0>u(Ye,Ue)?(Z[k]=Ye,Z[Be]=U,k=Be):(Z[k]=Ue,Z[Ae]=U,k=Ae);else if(Be<J&&0>u(Ye,U))Z[k]=Ye,Z[Be]=U,k=Be;else break e}}return pe}function u(Z,pe){var U=Z.sortIndex-pe.sortIndex;return U!==0?U:Z.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var p=Date,h=p.now();s.unstable_now=function(){return p.now()-h}}var x=[],v=[],S=1,M=null,E=3,A=!1,P=!1,L=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(Z){for(var pe=t(v);pe!==null;){if(pe.callback===null)a(v);else if(pe.startTime<=Z)a(v),pe.sortIndex=pe.expirationTime,e(x,pe);else break;pe=t(v)}}function O(Z){if(L=!1,D(Z),!P)if(t(x)!==null)P=!0,Ee(W);else{var pe=t(v);pe!==null&&ue(O,pe.startTime-Z)}}function W(Z,pe){P=!1,L&&(L=!1,y(fe),fe=-1),A=!0;var U=E;try{for(D(pe),M=t(x);M!==null&&(!(M.expirationTime>pe)||Z&&!Me());){var k=M.callback;if(typeof k=="function"){M.callback=null,E=M.priorityLevel;var J=k(M.expirationTime<=pe);pe=s.unstable_now(),typeof J=="function"?M.callback=J:M===t(x)&&a(x),D(pe)}else a(x);M=t(x)}if(M!==null)var Ce=!0;else{var Ae=t(v);Ae!==null&&ue(O,Ae.startTime-pe),Ce=!1}return Ce}finally{M=null,E=U,A=!1}}var q=!1,X=null,fe=-1,I=5,G=-1;function Me(){return!(s.unstable_now()-G<I)}function Re(){if(X!==null){var Z=s.unstable_now();G=Z;var pe=!0;try{pe=X(!0,Z)}finally{pe?se():(q=!1,X=null)}}else q=!1}var se;if(typeof H=="function")se=function(){H(Re)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,me=de.port2;de.port1.onmessage=Re,se=function(){me.postMessage(null)}}else se=function(){T(Re,0)};function Ee(Z){X=Z,q||(q=!0,se())}function ue(Z,pe){fe=T(function(){Z(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){P||A||(P=!0,Ee(W))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_getFirstCallbackNode=function(){return t(x)},s.unstable_next=function(Z){switch(E){case 1:case 2:case 3:var pe=3;break;default:pe=E}var U=E;E=pe;try{return Z()}finally{E=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,pe){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var U=E;E=Z;try{return pe()}finally{E=U}},s.unstable_scheduleCallback=function(Z,pe,U){var k=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?k+U:k):U=k,Z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,Z={id:S++,callback:pe,priorityLevel:Z,startTime:U,expirationTime:J,sortIndex:-1},U>k?(Z.sortIndex=U,e(v,Z),t(x)===null&&Z===t(v)&&(L?(y(fe),fe=-1):L=!0,ue(O,U-k))):(Z.sortIndex=J,e(x,Z),P||A||(P=!0,Ee(W))),Z},s.unstable_shouldYield=Me,s.unstable_wrapCallback=function(Z){var pe=E;return function(){var U=E;E=pe;try{return Z.apply(this,arguments)}finally{E=U}}}}(fm)),fm}var Ug;function fS(){return Ug||(Ug=1,cm.exports=cS()),cm.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function dS(){if(Dg)return sr;Dg=1;var s=eg(),e=fS();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function f(n,i){p(n,i),p(n+"Capture",i)}function p(n,i){for(u[n]=i,n=0;n<i.length;n++)a.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},M={};function E(n){return x.call(M,n)?!0:x.call(S,n)?!1:v.test(n)?M[n]=!0:(S[n]=!0,!1)}function A(n,i,l,c){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function P(n,i,l,c){if(i===null||typeof i>"u"||A(n,i,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(n,i,l,c,m,g,R){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=R}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){T[n]=new L(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];T[i]=new L(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){T[n]=new L(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){T[n]=new L(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){T[n]=new L(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){T[n]=new L(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){T[n]=new L(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){T[n]=new L(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){T[n]=new L(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function H(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,H);T[i]=new L(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,H);T[i]=new L(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,H);T[i]=new L(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){T[n]=new L(n,1,!1,n.toLowerCase(),null,!1,!1)}),T.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){T[n]=new L(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,l,c){var m=T.hasOwnProperty(i)?T[i]:null;(m!==null?m.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(P(i,l,m,c)&&(l=null),c||m===null?E(i)&&(l===null?n.removeAttribute(i):n.setAttribute(i,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(i=m.attributeName,c=m.attributeNamespace,l===null?n.removeAttribute(i):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,c?n.setAttributeNS(c,i,l):n.setAttribute(i,l))))}var O=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),q=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Me=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,k;function J(n){if(k===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ce=!1;function Ae(n,i){if(!n||Ce)return"";Ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var m=le.stack.split(`
`),g=c.stack.split(`
`),R=m.length-1,z=g.length-1;1<=R&&0<=z&&m[R]!==g[z];)z--;for(;1<=R&&0<=z;R--,z--)if(m[R]!==g[z]){if(R!==1||z!==1)do if(R--,z--,0>z||m[R]!==g[z]){var j=`
`+m[R].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=R&&0<=z);break}}}finally{Ce=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function Ue(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case X:return"Fragment";case q:return"Portal";case I:return"Profiler";case fe:return"StrictMode";case se:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Me:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case Re:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return i=n.displayName||null,i!==null?i:Be(n.type)||"Memo";case Ee:i=n._payload,n=n._init;try{return Be(n(i))}catch{}}return null}function Ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(i);case 8:return i===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ze(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Zn(n){var i=pt(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,g=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return m.call(this)},set:function(R){c=""+R,g.call(this,R)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(R){c=""+R},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Mt(n){n._valueTracker||(n._valueTracker=Zn(n))}function re(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var l=i.getValue(),c="";return n&&(c=pt(n)?n.checked?"true":"false":n.value),n=c,n!==l?(i.setValue(n),!0):!1}function xn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function nt(n,i){var l=i.checked;return U({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function vt(n,i){var l=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;l=ze(i.value!=null?i.value:l),n._wrapperState={initialChecked:c,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function St(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Bt(n,i){St(n,i);var l=ze(i.value),c=i.type;if(l!=null)c==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,l):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,ze(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Lt(n,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,l||i===n.value||(n.value=i),n.defaultValue=i}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Tt(n,i,l){(i!=="number"||xn(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ft=Array.isArray;function Gt(n,i,l,c){if(n=n.options,i){i={};for(var m=0;m<l.length;m++)i["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=i.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&c&&(n[l].defaultSelected=!0)}else{for(l=""+ze(l),i=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,c&&(n[m].defaultSelected=!0);return}i!==null||n[m].disabled||(i=n[m])}i!==null&&(i.selected=!0)}}function dn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function B(n,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(Ft(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}n._wrapperState={initialValue:ze(l)}}function N(n,i){var l=ze(i.value),c=ze(i.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),i.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),c!=null&&(n.defaultValue=""+c)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Oe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Oe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ke,rt=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,c,m){MSApp.execUnsafeLocalFunction(function(){return n(i,l,c,m)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ke=ke||document.createElement("div"),ke.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ke.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function He(n,i){if(i){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=i;return}}n.textContent=i}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(ve).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ve[i]=ve[n]})});function ot(n,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||ve.hasOwnProperty(n)&&ve[n]?(""+i).trim():i+"px"}function lt(n,i){n=n.style;for(var l in i)if(i.hasOwnProperty(l)){var c=l.indexOf("--")===0,m=ot(l,i[l],c);l==="float"&&(l="cssFloat"),c?n.setProperty(l,m):n[l]=m}}var et=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(et[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Et(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $t=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ge=null,ce=null,Ne=null;function We(n){if(n=ei(n)){if(typeof Ge!="function")throw Error(t(280));var i=n.stateNode;i&&(i=iu(i),Ge(n.stateNode,n.type,i))}}function zt(n){ce?Ne?Ne.push(n):Ne=[n]:ce=n}function tn(){if(ce){var n=ce,i=Ne;if(Ne=ce=null,We(n),i)for(n=0;n<i.length;n++)We(i[n])}}function Tn(n,i){return n(i)}function Mi(){}var nn=!1;function Ui(n,i,l){if(nn)return n(i,l);nn=!0;try{return Tn(n,i,l)}finally{nn=!1,(ce!==null||Ne!==null)&&(Mi(),tn())}}function wn(n,i){var l=n.stateNode;if(l===null)return null;var c=iu(l);if(c===null)return null;l=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var ds=!1;if(h)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){ds=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{ds=!1}function Ca(n,i,l,c,m,g,R,z,j){var le=Array.prototype.slice.call(arguments,3);try{i.apply(l,le)}catch(Pe){this.onError(Pe)}}var Ar=!1,Ys=null,Wr=!1,Io=null,Pc={onError:function(n){Ar=!0,Ys=n}};function bc(n,i,l,c,m,g,R,z,j){Ar=!1,Ys=null,Ca.apply(Pc,arguments)}function Uc(n,i,l,c,m,g,R,z,j){if(bc.apply(this,arguments),Ar){if(Ar){var le=Ys;Ar=!1,Ys=null}else throw Error(t(198));Wr||(Wr=!0,Io=le)}}function F(n){var i=n,l=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(l=i.return),n=i.return;while(n)}return i.tag===3?l:null}function oe(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function _e(n){if(F(n)!==n)throw Error(t(188))}function ne(n){var i=n.alternate;if(!i){if(i=F(n),i===null)throw Error(t(188));return i!==n?null:n}for(var l=n,c=i;;){var m=l.return;if(m===null)break;var g=m.alternate;if(g===null){if(c=m.return,c!==null){l=c;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===l)return _e(m),n;if(g===c)return _e(m),i;g=g.sibling}throw Error(t(188))}if(l.return!==c.return)l=m,c=g;else{for(var R=!1,z=m.child;z;){if(z===l){R=!0,l=m,c=g;break}if(z===c){R=!0,c=m,l=g;break}z=z.sibling}if(!R){for(z=g.child;z;){if(z===l){R=!0,l=g,c=m;break}if(z===c){R=!0,c=g,l=m;break}z=z.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:i}function Se(n){return n=ne(n),n!==null?Ze(n):null}function Ze(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ze(n);if(i!==null)return i;n=n.sibling}return null}var ft=e.unstable_scheduleCallback,mt=e.unstable_cancelCallback,ht=e.unstable_shouldYield,Pt=e.unstable_requestPaint,$e=e.unstable_now,wt=e.unstable_getCurrentPriorityLevel,rn=e.unstable_ImmediatePriority,hn=e.unstable_UserBlockingPriority,jn=e.unstable_NormalPriority,Xi=e.unstable_LowPriority,pn=e.unstable_IdlePriority,bt=null,Ei=null;function Ln(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:No,La=Math.log,ps=Math.LN2;function No(n){return n>>>=0,n===0?32:31-(La(n)/ps|0)|0}var Sn=64,ji=4194304;function Rr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function An(n,i){var l=n.pendingLanes;if(l===0)return 0;var c=0,m=n.suspendedLanes,g=n.pingedLanes,R=l&268435455;if(R!==0){var z=R&~m;z!==0?c=Rr(z):(g&=R,g!==0&&(c=Rr(g)))}else R=l&~m,R!==0?c=Rr(R):g!==0&&(c=Rr(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&m)===0&&(m=c&-c,g=i&-i,m>=g||m===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=l&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)l=31-In(i),m=1<<l,c|=n[l],i&=~m;return c}function Fo(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dc(n,i){for(var l=n.suspendedLanes,c=n.pingedLanes,m=n.expirationTimes,g=n.pendingLanes;0<g;){var R=31-In(g),z=1<<R,j=m[R];j===-1?((z&l)===0||(z&c)!==0)&&(m[R]=Fo(z,i)):j<=i&&(n.expiredLanes|=z),g&=~z}}function $s(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ic(){var n=Sn;return Sn<<=1,(Sn&4194240)===0&&(Sn=64),n}function Pa(n){for(var i=[],l=0;31>l;l++)i.push(n);return i}function ba(n,i,l){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-In(i),n[i]=l}function md(n,i){var l=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-In(l),g=1<<m;i[m]=0,c[m]=-1,n[m]=-1,l&=~g}}function Ua(n,i){var l=n.entangledLanes|=i;for(n=n.entanglements;l;){var c=31-In(l),m=1<<c;m&i|n[c]&i&&(n[c]|=i),l&=~m}}var Yt=0;function Ks(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nc,Dl,gd,Fc,Oc,Il=!1,Da=[],ms=null,gs=null,_s=null,Oo=new Map,Ia=new Map,vs=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(n,i){switch(n){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":Oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(i.pointerId)}}function Zs(n,i,l,c,m,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[m]},i!==null&&(i=ei(i),i!==null&&Dl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),n)}function hp(n,i,l,c,m){switch(i){case"focusin":return ms=Zs(ms,n,i,l,c,m),!0;case"dragenter":return gs=Zs(gs,n,i,l,c,m),!0;case"mouseover":return _s=Zs(_s,n,i,l,c,m),!0;case"pointerover":var g=m.pointerId;return Oo.set(g,Zs(Oo.get(g)||null,n,i,l,c,m)),!0;case"gotpointercapture":return g=m.pointerId,Ia.set(g,Zs(Ia.get(g)||null,n,i,l,c,m)),!0}return!1}function vd(n){var i=br(n.target);if(i!==null){var l=F(i);if(l!==null){if(i=l.tag,i===13){if(i=oe(l),i!==null){n.blockedOn=i,Oc(n.priority,function(){gd(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Nl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var l=Bl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);$t=c,l.target.dispatchEvent(c),$t=null}else return i=ei(l),i!==null&&Dl(i),n.blockedOn=l,!1;i.shift()}return!0}function xd(n,i,l){Nl(n)&&l.delete(i)}function pp(){Il=!1,ms!==null&&Nl(ms)&&(ms=null),gs!==null&&Nl(gs)&&(gs=null),_s!==null&&Nl(_s)&&(_s=null),Oo.forEach(xd),Ia.forEach(xd)}function Qt(n,i){n.blockedOn===i&&(n.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pp)))}function Kt(n){function i(m){return Qt(m,n)}if(0<Da.length){Qt(Da[0],n);for(var l=1;l<Da.length;l++){var c=Da[l];c.blockedOn===n&&(c.blockedOn=null)}}for(ms!==null&&Qt(ms,n),gs!==null&&Qt(gs,n),_s!==null&&Qt(_s,n),Oo.forEach(i),Ia.forEach(i),l=0;l<vs.length;l++)c=vs[l],c.blockedOn===n&&(c.blockedOn=null);for(;0<vs.length&&(l=vs[0],l.blockedOn===null);)vd(l),l.blockedOn===null&&vs.shift()}var Bo=O.ReactCurrentBatchConfig,Fl=!0;function mp(n,i,l,c){var m=Yt,g=Bo.transition;Bo.transition=null;try{Yt=1,Bc(n,i,l,c)}finally{Yt=m,Bo.transition=g}}function gp(n,i,l,c){var m=Yt,g=Bo.transition;Bo.transition=null;try{Yt=4,Bc(n,i,l,c)}finally{Yt=m,Bo.transition=g}}function Bc(n,i,l,c){if(Fl){var m=Bl(n,i,l,c);if(m===null)tf(n,i,c,Ol,l),_d(n,c);else if(hp(m,n,i,l,c))c.stopPropagation();else if(_d(n,c),i&4&&-1<dp.indexOf(n)){for(;m!==null;){var g=ei(m);if(g!==null&&Nc(g),g=Bl(n,i,l,c),g===null&&tf(n,i,c,Ol,l),g===m)break;m=g}m!==null&&c.stopPropagation()}else tf(n,i,c,null,l)}}var Ol=null;function Bl(n,i,l,c){if(Ol=null,n=$(c),n=br(n),n!==null)if(i=F(n),i===null)n=null;else if(l=i.tag,l===13){if(n=oe(i),n!==null)return n;n=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ol=n,null}function Sd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wt()){case rn:return 1;case hn:return 4;case jn:case Xi:return 16;case pn:return 536870912;default:return 16}default:return 16}}var mn=null,Na=null,Cr=null;function zc(){if(Cr)return Cr;var n,i=Na,l=i.length,c,m="value"in mn?mn.value:mn.textContent,g=m.length;for(n=0;n<l&&i[n]===m[n];n++);var R=l-n;for(c=1;c<=R&&i[l-c]===m[g-c];c++);return Cr=m.slice(n,1<c?1-c:void 0)}function zo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function hi(){return!0}function kc(){return!1}function Ti(n){function i(l,c,m,g,R){this._reactName=l,this._targetInst=m,this.type=c,this.nativeEvent=g,this.target=R,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?hi:kc,this.isPropagationStopped=kc,this}return U(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),i}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Ti(Qs),ko=U({},Qs,{view:0,detail:0}),yd=Ti(ko),pi,Hc,Qn,kl=U({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qn&&(Qn&&n.type==="mousemove"?(pi=n.screenX-Qn.screenX,Hc=n.screenY-Qn.screenY):Hc=pi=0,Qn=n),pi)},movementY:function(n){return"movementY"in n?n.movementY:Hc}}),Gc=Ti(kl),xs=U({},kl,{dataTransfer:0}),Hl=Ti(xs),Vc=U({},ko,{relatedTarget:0}),sn=Ti(Vc),Ss=U({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wc=Ti(Ss),_p=U({},Qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xc=Ti(_p),vp=U({},Qs,{data:0}),Md=Ti(vp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ho(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Gl[n])?!!i[n]:!1}function jc(){return Ho}var Td=U({},ko,{key:function(n){if(n.key){var i=xp[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=zo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ed[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?zo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wd=Ti(Td),qc=U({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=Ti(qc),Ad=U({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Sp=Ti(Ad),Yc=U({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$c=Ti(Yc),yp=U({},kl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Ti(yp),Di=[9,13,27,32],Fa=h&&"CompositionEvent"in window,Xr=null;h&&"documentMode"in document&&(Xr=document.documentMode);var Cd=h&&"TextEvent"in window&&!Xr,Kc=h&&(!Fa||Xr&&8<Xr&&11>=Xr),Ld=" ",Pd=!1;function bd(n,i){switch(n){case"keyup":return Di.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Go=!1;function Vo(n,i){switch(n){case"compositionend":return Ud(i);case"keypress":return i.which!==32?null:(Pd=!0,Ld);case"textInput":return n=i.data,n===Ld&&Pd?null:n;default:return null}}function Mp(n,i){if(Go)return n==="compositionend"||!Fa&&bd(n,i)?(n=zc(),Cr=Na=mn=null,Go=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kc&&i.locale!=="ko"?null:i.data;default:return null}}var Ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wl(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ep[n.type]:i==="textarea"}function Zc(n,i,l,c){zt(c),i=Jl(i,"onChange"),0<i.length&&(l=new zl("onChange","change",null,l,c),n.push({event:l,listeners:i}))}var qi=null,ys=null;function Tp(n){zd(n,0)}function Xl(n){var i=At(n);if(re(i))return n}function wp(n,i){if(n==="change")return i}var Js=!1;if(h){var Ii;if(h){var jl="oninput"in document;if(!jl){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),jl=typeof Dd.oninput=="function"}Ii=jl}else Ii=!1;Js=Ii&&(!document.documentMode||9<document.documentMode)}function Id(){qi&&(qi.detachEvent("onpropertychange",Nd),ys=qi=null)}function Nd(n){if(n.propertyName==="value"&&Xl(ys)){var i=[];Zc(i,ys,n,$(n)),Ui(Tp,i)}}function Ap(n,i,l){n==="focusin"?(Id(),qi=i,ys=l,qi.attachEvent("onpropertychange",Nd)):n==="focusout"&&Id()}function Rp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(ys)}function Wo(n,i){if(n==="click")return Xl(i)}function Q(n,i){if(n==="input"||n==="change")return Xl(i)}function xe(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ae=typeof Object.is=="function"?Object.is:xe;function je(n,i){if(ae(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var l=Object.keys(n),c=Object.keys(i);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var m=l[c];if(!x.call(i,m)||!ae(n[m],i[m]))return!1}return!0}function yt(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xt(n,i){var l=yt(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=i&&c>=i)return{node:l,offset:i-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yt(l)}}function Pn(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Pn(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Jt(){for(var n=window,i=xn();i instanceof n.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)n=i.contentWindow;else break;i=xn(n.document)}return i}function Oa(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Cp(n){var i=Jt(),l=n.focusedElem,c=n.selectionRange;if(i!==l&&l&&l.ownerDocument&&Pn(l.ownerDocument.documentElement,l)){if(c!==null&&Oa(l)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(n,l.value.length);else if(n=(i=l.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,g=Math.min(c.start,m);c=c.end===void 0?g:Math.min(c.end,m),!n.extend&&g>c&&(m=c,c=g,g=m),m=Xt(l,g);var R=Xt(l,c);m&&R&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(R.node,R.offset)):(i.setEnd(R.node,R.offset),n.addRange(i)))}}for(i=[],n=l;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)n=i[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yi=h&&"documentMode"in document&&11>=document.documentMode,jr=null,Qc=null,Lr=null,Xo=!1;function Ba(n,i,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Xo||jr==null||jr!==xn(c)||(c=jr,"selectionStart"in c&&Oa(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Lr&&je(Lr,c)||(Lr=c,c=Jl(Qc,"onSelect"),0<c.length&&(i=new zl("onSelect","select",null,i,l),n.push({event:i,listeners:c}),i.target=jr)))}function jt(n,i){var l={};return l[n.toLowerCase()]=i.toLowerCase(),l["Webkit"+n]="webkit"+i,l["Moz"+n]="moz"+i,l}var jo={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionend:jt("Transition","TransitionEnd")},ql={},za={};h&&(za=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Yl(n){if(ql[n])return ql[n];if(!jo[n])return n;var i=jo[n],l;for(l in i)if(i.hasOwnProperty(l)&&l in za)return ql[n]=i[l];return n}var Fd=Yl("animationend"),Od=Yl("animationiteration"),ka=Yl("animationstart"),qr=Yl("transitionend"),Ha=new Map,Jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,i){Ha.set(n,i),f(i,[n])}for(var $l=0;$l<Jc.length;$l++){var Kl=Jc[$l],Zl=Kl.toLowerCase(),Bd=Kl[0].toUpperCase()+Kl.slice(1);lr(Zl,"on"+Bd)}lr(Fd,"onAnimationEnd"),lr(Od,"onAnimationIteration"),lr(ka,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(qr,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eo=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Ga(n,i,l){var c=n.type||"unknown-event";n.currentTarget=l,Uc(c,i,void 0,n),n.currentTarget=null}function zd(n,i){i=(i&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],m=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var R=c.length-1;0<=R;R--){var z=c[R],j=z.instance,le=z.currentTarget;if(z=z.listener,j!==g&&m.isPropagationStopped())break e;Ga(m,z,le),g=j}else for(R=0;R<c.length;R++){if(z=c[R],j=z.instance,le=z.currentTarget,z=z.listener,j!==g&&m.isPropagationStopped())break e;Ga(m,z,le),g=j}}}if(Wr)throw n=Io,Wr=!1,Io=null,n}function an(n,i){var l=i[nu];l===void 0&&(l=i[nu]=new Set);var c=n+"__bubble";l.has(c)||(Ql(i,n,2,!1),l.add(c))}function ef(n,i,l){var c=0;i&&(c|=4),Ql(l,n,c,i)}var to="_reactListening"+Math.random().toString(36).slice(2);function Ms(n){if(!n[to]){n[to]=!0,a.forEach(function(l){l!=="selectionchange"&&(eo.has(l)||ef(l,!1,n),ef(l,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[to]||(i[to]=!0,ef("selectionchange",!1,i))}}function Ql(n,i,l,c){switch(Sd(i)){case 1:var m=mp;break;case 4:m=gp;break;default:m=Bc}l=m.bind(null,i,l,n),m=void 0,!ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),c?m!==void 0?n.addEventListener(i,l,{capture:!0,passive:m}):n.addEventListener(i,l,!0):m!==void 0?n.addEventListener(i,l,{passive:m}):n.addEventListener(i,l,!1)}function tf(n,i,l,c,m){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var R=c.tag;if(R===3||R===4){var z=c.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(R===4)for(R=c.return;R!==null;){var j=R.tag;if((j===3||j===4)&&(j=R.stateNode.containerInfo,j===m||j.nodeType===8&&j.parentNode===m))return;R=R.return}for(;z!==null;){if(R=br(z),R===null)return;if(j=R.tag,j===5||j===6){c=g=R;continue e}z=z.parentNode}}c=c.return}Ui(function(){var le=g,Pe=$(l),De=[];e:{var Le=Ha.get(n);if(Le!==void 0){var qe=zl,Je=n;switch(n){case"keypress":if(zo(l)===0)break e;case"keydown":case"keyup":qe=wd;break;case"focusin":Je="focus",qe=sn;break;case"focusout":Je="blur",qe=sn;break;case"beforeblur":case"afterblur":qe=sn;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=Hl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Sp;break;case Fd:case Od:case ka:qe=Wc;break;case qr:qe=$c;break;case"scroll":qe=yd;break;case"wheel":qe=Rd;break;case"copy":case"cut":case"paste":qe=Xc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Vl}var tt=(i&4)!==0,Rn=!tt&&n==="scroll",te=tt?Le!==null?Le+"Capture":null:Le;tt=[];for(var K=le,ie;K!==null;){ie=K;var Fe=ie.stateNode;if(ie.tag===5&&Fe!==null&&(ie=Fe,te!==null&&(Fe=wn(K,te),Fe!=null&&tt.push(qo(K,Fe,ie)))),Rn)break;K=K.return}0<tt.length&&(Le=new qe(Le,Je,null,l,Pe),De.push({event:Le,listeners:tt}))}}if((i&7)===0){e:{if(Le=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",Le&&l!==$t&&(Je=l.relatedTarget||l.fromElement)&&(br(Je)||Je[Ni]))break e;if((qe||Le)&&(Le=Pe.window===Pe?Pe:(Le=Pe.ownerDocument)?Le.defaultView||Le.parentWindow:window,qe?(Je=l.relatedTarget||l.toElement,qe=le,Je=Je?br(Je):null,Je!==null&&(Rn=F(Je),Je!==Rn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(qe=null,Je=le),qe!==Je)){if(tt=Gc,Fe="onMouseLeave",te="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(tt=Vl,Fe="onPointerLeave",te="onPointerEnter",K="pointer"),Rn=qe==null?Le:At(qe),ie=Je==null?Le:At(Je),Le=new tt(Fe,K+"leave",qe,l,Pe),Le.target=Rn,Le.relatedTarget=ie,Fe=null,br(Pe)===le&&(tt=new tt(te,K+"enter",Je,l,Pe),tt.target=ie,tt.relatedTarget=Rn,Fe=tt),Rn=Fe,qe&&Je)t:{for(tt=qe,te=Je,K=0,ie=tt;ie;ie=Yo(ie))K++;for(ie=0,Fe=te;Fe;Fe=Yo(Fe))ie++;for(;0<K-ie;)tt=Yo(tt),K--;for(;0<ie-K;)te=Yo(te),ie--;for(;K--;){if(tt===te||te!==null&&tt===te.alternate)break t;tt=Yo(tt),te=Yo(te)}tt=null}else tt=null;qe!==null&&bn(De,Le,qe,tt,!1),Je!==null&&Rn!==null&&bn(De,Rn,Je,tt,!0)}}e:{if(Le=le?At(le):window,qe=Le.nodeName&&Le.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Le.type==="file")var it=wp;else if(Wl(Le))if(Js)it=Q;else{it=Rp;var ct=Ap}else(qe=Le.nodeName)&&qe.toLowerCase()==="input"&&(Le.type==="checkbox"||Le.type==="radio")&&(it=Wo);if(it&&(it=it(n,le))){Zc(De,it,l,Pe);break e}ct&&ct(n,Le,le),n==="focusout"&&(ct=Le._wrapperState)&&ct.controlled&&Le.type==="number"&&Tt(Le,"number",Le.value)}switch(ct=le?At(le):window,n){case"focusin":(Wl(ct)||ct.contentEditable==="true")&&(jr=ct,Qc=le,Lr=null);break;case"focusout":Lr=Qc=jr=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,Ba(De,l,Pe);break;case"selectionchange":if(Yi)break;case"keydown":case"keyup":Ba(De,l,Pe)}var dt;if(Fa)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Go?bd(n,l)&&(xt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(Kc&&l.locale!=="ko"&&(Go||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Go&&(dt=zc()):(mn=Pe,Na="value"in mn?mn.value:mn.textContent,Go=!0)),ct=Jl(le,xt),0<ct.length&&(xt=new Md(xt,n,null,l,Pe),De.push({event:xt,listeners:ct}),dt?xt.data=dt:(dt=Ud(l),dt!==null&&(xt.data=dt)))),(dt=Cd?Vo(n,l):Mp(n,l))&&(le=Jl(le,"onBeforeInput"),0<le.length&&(Pe=new Md("onBeforeInput","beforeinput",null,l,Pe),De.push({event:Pe,listeners:le}),Pe.data=dt))}zd(De,i)})}function qo(n,i,l){return{instance:n,listener:i,currentTarget:l}}function Jl(n,i){for(var l=i+"Capture",c=[];n!==null;){var m=n,g=m.stateNode;m.tag===5&&g!==null&&(m=g,g=wn(n,l),g!=null&&c.unshift(qo(n,g,m)),g=wn(n,i),g!=null&&c.push(qo(n,g,m))),n=n.return}return c}function Yo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bn(n,i,l,c,m){for(var g=i._reactName,R=[];l!==null&&l!==c;){var z=l,j=z.alternate,le=z.stateNode;if(j!==null&&j===c)break;z.tag===5&&le!==null&&(z=le,m?(j=wn(l,g),j!=null&&R.unshift(qo(l,j,z))):m||(j=wn(l,g),j!=null&&R.push(qo(l,j,z)))),l=l.return}R.length!==0&&n.push({event:i,listeners:R})}var Jn=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function kd(n){return(typeof n=="string"?n:""+n).replace(Jn,`
`).replace(Lp,"")}function Va(n,i,l){if(i=kd(i),kd(n)!==i&&l)throw Error(t(425))}function eu(){}var Wa=null,no=null;function Xa(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Es=typeof setTimeout=="function"?setTimeout:void 0,ja=typeof clearTimeout=="function"?clearTimeout:void 0,$o=typeof Promise=="function"?Promise:void 0,tu=typeof queueMicrotask=="function"?queueMicrotask:typeof $o<"u"?function(n){return $o.resolve(null).then(n).catch(Ko)}:Es;function Ko(n){setTimeout(function(){throw n})}function nf(n,i){var l=i,c=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(c===0){n.removeChild(m),Kt(i);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=m}while(l);Kt(i)}function Ts(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Hd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return n;i--}else l==="/$"&&i++}n=n.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),Pr="__reactFiber$"+Zo,ws="__reactProps$"+Zo,Ni="__reactContainer$"+Zo,nu="__reactEvents$"+Zo,C="__reactListeners$"+Zo,Qo="__reactHandles$"+Zo;function br(n){var i=n[Pr];if(i)return i;for(var l=n.parentNode;l;){if(i=l[Ni]||l[Pr]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(n=Hd(n);n!==null;){if(l=n[Pr])return l;n=Hd(n)}return i}n=l,l=n.parentNode}return null}function ei(n){return n=n[Pr]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function At(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function iu(n){return n[ws]||null}var rf=[],Jo=-1;function wi(n){return{current:n}}function ln(n){0>Jo||(n.current=rf[Jo],rf[Jo]=null,Jo--)}function on(n,i){Jo++,rf[Jo]=n.current,n.current=i}var As={},ti=wi(As),Ai=wi(!1),mi=As;function ea(n,i){var l=n.type.contextTypes;if(!l)return As;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var m={},g;for(g in l)m[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=m),m}function Ri(n){return n=n.childContextTypes,n!=null}function ru(){ln(Ai),ln(ti)}function Gd(n,i,l){if(ti.current!==As)throw Error(t(168));on(ti,i),on(Ai,l)}function Vd(n,i,l){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var m in c)if(!(m in i))throw Error(t(108,Ye(n)||"Unknown",m));return U({},l,c)}function $i(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||As,mi=ti.current,on(ti,n),on(Ai,Ai.current),!0}function Wd(n,i,l){var c=n.stateNode;if(!c)throw Error(t(169));l?(n=Vd(n,i,mi),c.__reactInternalMemoizedMergedChildContext=n,ln(Ai),ln(ti),on(ti,n)):ln(Ai),on(Ai,l)}var $r=null,su=!1,sf=!1;function Xd(n){$r===null?$r=[n]:$r.push(n)}function io(n){su=!0,Xd(n)}function Rs(){if(!sf&&$r!==null){sf=!0;var n=0,i=Yt;try{var l=$r;for(Yt=1;n<l.length;n++){var c=l[n];do c=c(!0);while(c!==null)}$r=null,su=!1}catch(m){throw $r!==null&&($r=$r.slice(n+1)),ft(rn,Rs),m}finally{Yt=i,sf=!1}}return null}var ta=[],ni=0,ou=null,au=0,Ki=[],Zi=0,ro=null,Ur=1,Dr="";function so(n,i){ta[ni++]=au,ta[ni++]=ou,ou=n,au=i}function jd(n,i,l){Ki[Zi++]=Ur,Ki[Zi++]=Dr,Ki[Zi++]=ro,ro=n;var c=Ur;n=Dr;var m=32-In(c)-1;c&=~(1<<m),l+=1;var g=32-In(i)+m;if(30<g){var R=m-m%5;g=(c&(1<<R)-1).toString(32),c>>=R,m-=R,Ur=1<<32-In(i)+m|l<<m|c,Dr=g+n}else Ur=1<<g|l<<m|c,Dr=n}function qa(n){n.return!==null&&(so(n,1),jd(n,1,0))}function oo(n){for(;n===ou;)ou=ta[--ni],ta[ni]=null,au=ta[--ni],ta[ni]=null;for(;n===ro;)ro=Ki[--Zi],Ki[Zi]=null,Dr=Ki[--Zi],Ki[Zi]=null,Ur=Ki[--Zi],Ki[Zi]=null}var ii=null,Fi=null,un=!1,ur=null;function Ir(n,i){var l=Hi(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=n,i=n.deletions,i===null?(n.deletions=[l],n.flags|=16):i.push(l)}function lu(n,i){switch(n.tag){case 5:var l=n.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ii=n,Fi=Ts(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ii=n,Fi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=ro!==null?{id:Ur,overflow:Dr}:null,n.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=Hi(18,null,null,0),l.stateNode=i,l.return=n,n.child=l,ii=n,Fi=null,!0):!1;default:return!1}}function Kr(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ci(n){if(un){var i=Fi;if(i){var l=i;if(!lu(n,i)){if(Kr(n))throw Error(t(418));i=Ts(l.nextSibling);var c=ii;i&&lu(n,i)?Ir(c,l):(n.flags=n.flags&-4097|2,un=!1,ii=n)}}else{if(Kr(n))throw Error(t(418));n.flags=n.flags&-4097|2,un=!1,ii=n}}}function qd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function Ya(n){if(n!==ii)return!1;if(!un)return qd(n),un=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Xa(n.type,n.memoizedProps)),i&&(i=Fi)){if(Kr(n))throw of(),Error(t(418));for(;i;)Ir(n,i),i=Ts(i.nextSibling)}if(qd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(i===0){Fi=Ts(n.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}n=n.nextSibling}Fi=null}}else Fi=ii?Ts(n.stateNode.nextSibling):null;return!0}function of(){for(var n=Fi;n;)n=Ts(n.nextSibling)}function Nr(){Fi=ii=null,un=!1}function Fr(n){ur===null?ur=[n]:ur.push(n)}var Yd=O.ReactCurrentBatchConfig;function cr(n,i){if(n&&n.defaultProps){i=U({},i),n=n.defaultProps;for(var l in n)i[l]===void 0&&(i[l]=n[l]);return i}return i}var ao=wi(null),uu=null,lo=null,Nn=null;function $a(){Nn=lo=uu=null}function cu(n){var i=ao.current;ln(ao),n._currentValue=i}function Qi(n,i,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===l)break;n=n.return}}function Cs(n,i){uu=n,Nn=lo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(oi=!0),n.firstContext=null)}function gi(n){var i=n._currentValue;if(Nn!==n)if(n={context:n,memoizedValue:i,next:null},lo===null){if(uu===null)throw Error(t(308));lo=n,uu.dependencies={lanes:0,firstContext:n}}else lo=lo.next=n;return i}var Oi=null;function fu(n){Oi===null?Oi=[n]:Oi.push(n)}function ri(n,i,l,c){var m=i.interleaved;return m===null?(l.next=l,fu(i)):(l.next=m.next,m.next=l),i.interleaved=l,fr(n,c)}function fr(n,i){n.lanes|=i;var l=n.alternate;for(l!==null&&(l.lanes|=i),l=n,n=n.return;n!==null;)n.childLanes|=i,l=n.alternate,l!==null&&(l.childLanes|=i),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ls=!1;function af(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ps(n,i,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Vt&2)!==0){var m=c.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),c.pending=i,fr(n,l)}return m=c.interleaved,m===null?(i.next=i,fu(c)):(i.next=m.next,m.next=i),c.interleaved=i,fr(n,l)}function bs(n,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,l|=c,i.lanes=l,Ua(n,l)}}function lf(n,i){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var m=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?m=g=R:g=g.next=R,l=l.next}while(l!==null);g===null?m=g=i:g=g.next=i}else m=g=i;l={baseState:c.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=i:n.next=i,l.lastBaseUpdate=i}function du(n,i,l,c){var m=n.updateQueue;Ls=!1;var g=m.firstBaseUpdate,R=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var j=z,le=j.next;j.next=null,R===null?g=le:R.next=le,R=j;var Pe=n.alternate;Pe!==null&&(Pe=Pe.updateQueue,z=Pe.lastBaseUpdate,z!==R&&(z===null?Pe.firstBaseUpdate=le:z.next=le,Pe.lastBaseUpdate=j))}if(g!==null){var De=m.baseState;R=0,Pe=le=j=null,z=g;do{var Le=z.lane,qe=z.eventTime;if((c&Le)===Le){Pe!==null&&(Pe=Pe.next={eventTime:qe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Je=n,tt=z;switch(Le=i,qe=l,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){De=Je.call(qe,De,Le);break e}De=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,Le=typeof Je=="function"?Je.call(qe,De,Le):Je,Le==null)break e;De=U({},De,Le);break e;case 2:Ls=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Le=m.effects,Le===null?m.effects=[z]:Le.push(z))}else qe={eventTime:qe,lane:Le,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Pe===null?(le=Pe=qe,j=De):Pe=Pe.next=qe,R|=Le;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;Le=z,z=Le.next,Le.next=null,m.lastBaseUpdate=Le,m.shared.pending=null}}while(!0);if(Pe===null&&(j=De),m.baseState=j,m.firstBaseUpdate=le,m.lastBaseUpdate=Pe,i=m.shared.interleaved,i!==null){m=i;do R|=m.lane,m=m.next;while(m!==i)}else g===null&&(m.shared.lanes=0);Bs|=R,n.lanes=R,n.memoizedState=De}}function Kd(n,i,l){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],m=c.callback;if(m!==null){if(c.callback=null,c=l,typeof m!="function")throw Error(t(191,m));m.call(c)}}}var na=new s.Component().refs;function uf(n,i,l,c){i=n.memoizedState,l=l(c,i),l=l==null?i:U({},i,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var hu={isMounted:function(n){return(n=n._reactInternals)?F(n)===n:!1},enqueueSetState:function(n,i,l){n=n._reactInternals;var c=xi(),m=ks(n),g=dr(c,m);g.payload=i,l!=null&&(g.callback=l),i=Ps(n,g,m),i!==null&&(gr(i,n,m,c),bs(i,n,m))},enqueueReplaceState:function(n,i,l){n=n._reactInternals;var c=xi(),m=ks(n),g=dr(c,m);g.tag=1,g.payload=i,l!=null&&(g.callback=l),i=Ps(n,g,m),i!==null&&(gr(i,n,m,c),bs(i,n,m))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var l=xi(),c=ks(n),m=dr(l,c);m.tag=2,i!=null&&(m.callback=i),i=Ps(n,m,c),i!==null&&(gr(i,n,c,l),bs(i,n,c))}};function pu(n,i,l,c,m,g,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,R):i.prototype&&i.prototype.isPureReactComponent?!je(l,c)||!je(m,g):!0}function cf(n,i,l){var c=!1,m=As,g=i.contextType;return typeof g=="object"&&g!==null?g=gi(g):(m=Ri(i)?mi:ti.current,c=i.contextTypes,g=(c=c!=null)?ea(n,m):As),i=new i(l,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=g),i}function Zd(n,i,l,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,c),i.state!==n&&hu.enqueueReplaceState(i,i.state,null)}function ff(n,i,l,c){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs=na,af(n);var g=i.contextType;typeof g=="object"&&g!==null?m.context=gi(g):(g=Ri(i)?mi:ti.current,m.context=ea(n,g)),m.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(uf(n,i,g,l),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(i=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),i!==m.state&&hu.enqueueReplaceState(m,m.state,null),du(n,l,m,c),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ka(n,i,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,n));var m=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(R){var z=m.refs;z===na&&(z=m.refs={}),R===null?delete z[g]:z[g]=R},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mu(n){var i=n._init;return i(n._payload)}function Qd(n){function i(te,K){if(n){var ie=te.deletions;ie===null?(te.deletions=[K],te.flags|=16):ie.push(K)}}function l(te,K){if(!n)return null;for(;K!==null;)i(te,K),K=K.sibling;return null}function c(te,K){for(te=new Map;K!==null;)K.key!==null?te.set(K.key,K):te.set(K.index,K),K=K.sibling;return te}function m(te,K){return te=Vs(te,K),te.index=0,te.sibling=null,te}function g(te,K,ie){return te.index=ie,n?(ie=te.alternate,ie!==null?(ie=ie.index,ie<K?(te.flags|=2,K):ie):(te.flags|=2,K)):(te.flags|=1048576,K)}function R(te){return n&&te.alternate===null&&(te.flags|=2),te}function z(te,K,ie,Fe){return K===null||K.tag!==6?(K=Yf(ie,te.mode,Fe),K.return=te,K):(K=m(K,ie),K.return=te,K)}function j(te,K,ie,Fe){var it=ie.type;return it===X?Pe(te,K,ie.props.children,Fe,ie.key):K!==null&&(K.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Ee&&mu(it)===K.type)?(Fe=m(K,ie.props),Fe.ref=Ka(te,K,ie),Fe.return=te,Fe):(Fe=Wu(ie.type,ie.key,ie.props,null,te.mode,Fe),Fe.ref=Ka(te,K,ie),Fe.return=te,Fe)}function le(te,K,ie,Fe){return K===null||K.tag!==4||K.stateNode.containerInfo!==ie.containerInfo||K.stateNode.implementation!==ie.implementation?(K=$f(ie,te.mode,Fe),K.return=te,K):(K=m(K,ie.children||[]),K.return=te,K)}function Pe(te,K,ie,Fe,it){return K===null||K.tag!==7?(K=go(ie,te.mode,Fe,it),K.return=te,K):(K=m(K,ie),K.return=te,K)}function De(te,K,ie){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Yf(""+K,te.mode,ie),K.return=te,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return ie=Wu(K.type,K.key,K.props,null,te.mode,ie),ie.ref=Ka(te,null,K),ie.return=te,ie;case q:return K=$f(K,te.mode,ie),K.return=te,K;case Ee:var Fe=K._init;return De(te,Fe(K._payload),ie)}if(Ft(K)||pe(K))return K=go(K,te.mode,ie,null),K.return=te,K;Za(te,K)}return null}function Le(te,K,ie,Fe){var it=K!==null?K.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return it!==null?null:z(te,K,""+ie,Fe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case W:return ie.key===it?j(te,K,ie,Fe):null;case q:return ie.key===it?le(te,K,ie,Fe):null;case Ee:return it=ie._init,Le(te,K,it(ie._payload),Fe)}if(Ft(ie)||pe(ie))return it!==null?null:Pe(te,K,ie,Fe,null);Za(te,ie)}return null}function qe(te,K,ie,Fe,it){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return te=te.get(ie)||null,z(K,te,""+Fe,it);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case W:return te=te.get(Fe.key===null?ie:Fe.key)||null,j(K,te,Fe,it);case q:return te=te.get(Fe.key===null?ie:Fe.key)||null,le(K,te,Fe,it);case Ee:var ct=Fe._init;return qe(te,K,ie,ct(Fe._payload),it)}if(Ft(Fe)||pe(Fe))return te=te.get(ie)||null,Pe(K,te,Fe,it,null);Za(K,Fe)}return null}function Je(te,K,ie,Fe){for(var it=null,ct=null,dt=K,xt=K=0,Wn=null;dt!==null&&xt<ie.length;xt++){dt.index>xt?(Wn=dt,dt=null):Wn=dt.sibling;var qt=Le(te,dt,ie[xt],Fe);if(qt===null){dt===null&&(dt=Wn);break}n&&dt&&qt.alternate===null&&i(te,dt),K=g(qt,K,xt),ct===null?it=qt:ct.sibling=qt,ct=qt,dt=Wn}if(xt===ie.length)return l(te,dt),un&&so(te,xt),it;if(dt===null){for(;xt<ie.length;xt++)dt=De(te,ie[xt],Fe),dt!==null&&(K=g(dt,K,xt),ct===null?it=dt:ct.sibling=dt,ct=dt);return un&&so(te,xt),it}for(dt=c(te,dt);xt<ie.length;xt++)Wn=qe(dt,te,xt,ie[xt],Fe),Wn!==null&&(n&&Wn.alternate!==null&&dt.delete(Wn.key===null?xt:Wn.key),K=g(Wn,K,xt),ct===null?it=Wn:ct.sibling=Wn,ct=Wn);return n&&dt.forEach(function(Ws){return i(te,Ws)}),un&&so(te,xt),it}function tt(te,K,ie,Fe){var it=pe(ie);if(typeof it!="function")throw Error(t(150));if(ie=it.call(ie),ie==null)throw Error(t(151));for(var ct=it=null,dt=K,xt=K=0,Wn=null,qt=ie.next();dt!==null&&!qt.done;xt++,qt=ie.next()){dt.index>xt?(Wn=dt,dt=null):Wn=dt.sibling;var Ws=Le(te,dt,qt.value,Fe);if(Ws===null){dt===null&&(dt=Wn);break}n&&dt&&Ws.alternate===null&&i(te,dt),K=g(Ws,K,xt),ct===null?it=Ws:ct.sibling=Ws,ct=Ws,dt=Wn}if(qt.done)return l(te,dt),un&&so(te,xt),it;if(dt===null){for(;!qt.done;xt++,qt=ie.next())qt=De(te,qt.value,Fe),qt!==null&&(K=g(qt,K,xt),ct===null?it=qt:ct.sibling=qt,ct=qt);return un&&so(te,xt),it}for(dt=c(te,dt);!qt.done;xt++,qt=ie.next())qt=qe(dt,te,xt,qt.value,Fe),qt!==null&&(n&&qt.alternate!==null&&dt.delete(qt.key===null?xt:qt.key),K=g(qt,K,xt),ct===null?it=qt:ct.sibling=qt,ct=qt);return n&&dt.forEach(function($p){return i(te,$p)}),un&&so(te,xt),it}function Rn(te,K,ie,Fe){if(typeof ie=="object"&&ie!==null&&ie.type===X&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case W:e:{for(var it=ie.key,ct=K;ct!==null;){if(ct.key===it){if(it=ie.type,it===X){if(ct.tag===7){l(te,ct.sibling),K=m(ct,ie.props.children),K.return=te,te=K;break e}}else if(ct.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Ee&&mu(it)===ct.type){l(te,ct.sibling),K=m(ct,ie.props),K.ref=Ka(te,ct,ie),K.return=te,te=K;break e}l(te,ct);break}else i(te,ct);ct=ct.sibling}ie.type===X?(K=go(ie.props.children,te.mode,Fe,ie.key),K.return=te,te=K):(Fe=Wu(ie.type,ie.key,ie.props,null,te.mode,Fe),Fe.ref=Ka(te,K,ie),Fe.return=te,te=Fe)}return R(te);case q:e:{for(ct=ie.key;K!==null;){if(K.key===ct)if(K.tag===4&&K.stateNode.containerInfo===ie.containerInfo&&K.stateNode.implementation===ie.implementation){l(te,K.sibling),K=m(K,ie.children||[]),K.return=te,te=K;break e}else{l(te,K);break}else i(te,K);K=K.sibling}K=$f(ie,te.mode,Fe),K.return=te,te=K}return R(te);case Ee:return ct=ie._init,Rn(te,K,ct(ie._payload),Fe)}if(Ft(ie))return Je(te,K,ie,Fe);if(pe(ie))return tt(te,K,ie,Fe);Za(te,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,K!==null&&K.tag===6?(l(te,K.sibling),K=m(K,ie),K.return=te,te=K):(l(te,K),K=Yf(ie,te.mode,Fe),K.return=te,te=K),R(te)):l(te,K)}return Rn}var Us=Qd(!0),df=Qd(!1),ia={},hr=wi(ia),Ds=wi(ia),Qa=wi(ia);function Is(n){if(n===ia)throw Error(t(174));return n}function gu(n,i){switch(on(Qa,i),on(Ds,n),on(hr,ia),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ie(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ie(i,n)}ln(hr),on(hr,i)}function ra(){ln(hr),ln(Ds),ln(Qa)}function hf(n){Is(Qa.current);var i=Is(hr.current),l=Ie(i,n.type);i!==l&&(on(Ds,n),on(hr,l))}function pf(n){Ds.current===n&&(ln(hr),ln(Ds))}var cn=wi(0);function Ja(n){for(var i=n;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var el=[];function mf(){for(var n=0;n<el.length;n++)el[n]._workInProgressVersionPrimary=null;el.length=0}var sa=O.ReactCurrentDispatcher,Rt=O.ReactCurrentBatchConfig,uo=0,_n=null,vn=null,Fn=null,_u=!1,tl=!1,si=0,Pp=0;function On(){throw Error(t(321))}function nl(n,i){if(i===null)return!1;for(var l=0;l<i.length&&l<n.length;l++)if(!ae(n[l],i[l]))return!1;return!0}function vu(n,i,l,c,m,g){if(uo=g,_n=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,sa.current=n===null||n.memoizedState===null?rl:Up,n=l(c,m),tl){g=0;do{if(tl=!1,si=0,25<=g)throw Error(t(301));g+=1,Fn=vn=null,i.updateQueue=null,sa.current=sh,n=l(c,m)}while(tl)}if(sa.current=Jr,i=vn!==null&&vn.next!==null,uo=0,Fn=vn=_n=null,_u=!1,i)throw Error(t(300));return n}function xu(){var n=si!==0;return si=0,n}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?_n.memoizedState=Fn=n:Fn=Fn.next=n,Fn}function Bn(){if(vn===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=Fn===null?_n.memoizedState:Fn.next;if(i!==null)Fn=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Fn===null?_n.memoizedState=Fn=n:Fn=Fn.next=n}return Fn}function co(n,i){return typeof i=="function"?i(n):i}function Su(n){var i=Bn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=vn,m=c.baseQueue,g=l.pending;if(g!==null){if(m!==null){var R=m.next;m.next=g.next,g.next=R}c.baseQueue=m=g,l.pending=null}if(m!==null){g=m.next,c=c.baseState;var z=R=null,j=null,le=g;do{var Pe=le.lane;if((uo&Pe)===Pe)j!==null&&(j=j.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var De={lane:Pe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};j===null?(z=j=De,R=c):j=j.next=De,_n.lanes|=Pe,Bs|=Pe}le=le.next}while(le!==null&&le!==g);j===null?R=c:j.next=z,ae(c,i.memoizedState)||(oi=!0),i.memoizedState=c,i.baseState=R,i.baseQueue=j,l.lastRenderedState=c}if(n=l.interleaved,n!==null){m=n;do g=m.lane,_n.lanes|=g,Bs|=g,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function oa(n){var i=Bn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=l.dispatch,m=l.pending,g=i.memoizedState;if(m!==null){l.pending=null;var R=m=m.next;do g=n(g,R.action),R=R.next;while(R!==m);ae(g,i.memoizedState)||(oi=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),l.lastRenderedState=g}return[g,c]}function gf(){}function yu(n,i){var l=_n,c=Bn(),m=i(),g=!ae(c.memoizedState,m);if(g&&(c.memoizedState=m,oi=!0),c=c.queue,xf(Eu.bind(null,l,c,n),[n]),c.getSnapshot!==i||g||Fn!==null&&Fn.memoizedState.tag&1){if(l.flags|=2048,aa(9,Mu.bind(null,l,c,m,i),void 0,null),Vn===null)throw Error(t(349));(uo&30)!==0||_f(l,i,m)}return m}function _f(n,i,l){n.flags|=16384,n={getSnapshot:i,value:l},i=_n.updateQueue,i===null?(i={lastEffect:null,stores:null},_n.updateQueue=i,i.stores=[n]):(l=i.stores,l===null?i.stores=[n]:l.push(n))}function Mu(n,i,l,c){i.value=l,i.getSnapshot=c,Zr(i)&&Jd(n)}function Eu(n,i,l){return l(function(){Zr(i)&&Jd(n)})}function Zr(n){var i=n.getSnapshot;n=n.value;try{var l=i();return!ae(n,l)}catch{return!0}}function Jd(n){var i=fr(n,1);i!==null&&gr(i,n,1,-1)}function Qr(n){var i=yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:n},i.queue=n,n=n.dispatch=ih.bind(null,_n,n),[i.memoizedState,n]}function aa(n,i,l,c){return n={tag:n,create:i,destroy:l,deps:c,next:null},i=_n.updateQueue,i===null?(i={lastEffect:null,stores:null},_n.updateQueue=i,i.lastEffect=n.next=n):(l=i.lastEffect,l===null?i.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,i.lastEffect=n)),n}function vf(){return Bn().memoizedState}function la(n,i,l,c){var m=yn();_n.flags|=n,m.memoizedState=aa(1|i,l,void 0,c===void 0?null:c)}function Tu(n,i,l,c){var m=Bn();c=c===void 0?null:c;var g=void 0;if(vn!==null){var R=vn.memoizedState;if(g=R.destroy,c!==null&&nl(c,R.deps)){m.memoizedState=aa(i,l,g,c);return}}_n.flags|=n,m.memoizedState=aa(1|i,l,g,c)}function eh(n,i){return la(8390656,8,n,i)}function xf(n,i){return Tu(2048,8,n,i)}function Sf(n,i){return Tu(4,2,n,i)}function yf(n,i){return Tu(4,4,n,i)}function th(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Mf(n,i,l){return l=l!=null?l.concat([n]):null,Tu(4,4,th.bind(null,i,n),l)}function wu(){}function _i(n,i){var l=Bn();i=i===void 0?null:i;var c=l.memoizedState;return c!==null&&i!==null&&nl(i,c[1])?c[0]:(l.memoizedState=[n,i],n)}function pr(n,i){var l=Bn();i=i===void 0?null:i;var c=l.memoizedState;return c!==null&&i!==null&&nl(i,c[1])?c[0]:(n=n(),l.memoizedState=[n,i],n)}function nh(n,i,l){return(uo&21)===0?(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=l):(ae(l,i)||(l=Ic(),_n.lanes|=l,Bs|=l,n.baseState=!0),i)}function bp(n,i){var l=Yt;Yt=l!==0&&4>l?l:4,n(!0);var c=Rt.transition;Rt.transition={};try{n(!1),i()}finally{Yt=l,Rt.transition=c}}function il(){return Bn().memoizedState}function ua(n,i,l){var c=ks(n);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Ef(n))rh(i,l);else if(l=ri(n,i,l,c),l!==null){var m=xi();gr(l,n,c,m),Tf(l,i,c)}}function ih(n,i,l){var c=ks(n),m={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ef(n))rh(i,m);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var R=i.lastRenderedState,z=g(R,l);if(m.hasEagerState=!0,m.eagerState=z,ae(z,R)){var j=i.interleaved;j===null?(m.next=m,fu(i)):(m.next=j.next,j.next=m),i.interleaved=m;return}}catch{}finally{}l=ri(n,i,m,c),l!==null&&(m=xi(),gr(l,n,c,m),Tf(l,i,c))}}function Ef(n){var i=n.alternate;return n===_n||i!==null&&i===_n}function rh(n,i){tl=_u=!0;var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}function Tf(n,i,l){if((l&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,l|=c,i.lanes=l,Ua(n,l)}}var Jr={readContext:gi,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},rl={readContext:gi,useCallback:function(n,i){return yn().memoizedState=[n,i===void 0?null:i],n},useContext:gi,useEffect:eh,useImperativeHandle:function(n,i,l){return l=l!=null?l.concat([n]):null,la(4194308,4,th.bind(null,i,n),l)},useLayoutEffect:function(n,i){return la(4194308,4,n,i)},useInsertionEffect:function(n,i){return la(4,2,n,i)},useMemo:function(n,i){var l=yn();return i=i===void 0?null:i,n=n(),l.memoizedState=[n,i],n},useReducer:function(n,i,l){var c=yn();return i=l!==void 0?l(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ua.bind(null,_n,n),[c.memoizedState,n]},useRef:function(n){var i=yn();return n={current:n},i.memoizedState=n},useState:Qr,useDebugValue:wu,useDeferredValue:function(n){return yn().memoizedState=n},useTransition:function(){var n=Qr(!1),i=n[0];return n=bp.bind(null,n[1]),yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,l){var c=_n,m=yn();if(un){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),Vn===null)throw Error(t(349));(uo&30)!==0||_f(c,i,l)}m.memoizedState=l;var g={value:l,getSnapshot:i};return m.queue=g,eh(Eu.bind(null,c,g,n),[n]),c.flags|=2048,aa(9,Mu.bind(null,c,g,l,i),void 0,null),l},useId:function(){var n=yn(),i=Vn.identifierPrefix;if(un){var l=Dr,c=Ur;l=(c&~(1<<32-In(c)-1)).toString(32)+l,i=":"+i+"R"+l,l=si++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=Pp++,i=":"+i+"r"+l.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Up={readContext:gi,useCallback:_i,useContext:gi,useEffect:xf,useImperativeHandle:Mf,useInsertionEffect:Sf,useLayoutEffect:yf,useMemo:pr,useReducer:Su,useRef:vf,useState:function(){return Su(co)},useDebugValue:wu,useDeferredValue:function(n){var i=Bn();return nh(i,vn.memoizedState,n)},useTransition:function(){var n=Su(co)[0],i=Bn().memoizedState;return[n,i]},useMutableSource:gf,useSyncExternalStore:yu,useId:il,unstable_isNewReconciler:!1},sh={readContext:gi,useCallback:_i,useContext:gi,useEffect:xf,useImperativeHandle:Mf,useInsertionEffect:Sf,useLayoutEffect:yf,useMemo:pr,useReducer:oa,useRef:vf,useState:function(){return oa(co)},useDebugValue:wu,useDeferredValue:function(n){var i=Bn();return vn===null?i.memoizedState=n:nh(i,vn.memoizedState,n)},useTransition:function(){var n=oa(co)[0],i=Bn().memoizedState;return[n,i]},useMutableSource:gf,useSyncExternalStore:yu,useId:il,unstable_isNewReconciler:!1};function fo(n,i){try{var l="",c=i;do l+=Ue(c),c=c.return;while(c);var m=l}catch(g){m=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:m,digest:null}}function ca(n,i,l){return{value:n,source:null,stack:l??null,digest:i??null}}function Au(n,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var Ru=typeof WeakMap=="function"?WeakMap:Map;function Cu(n,i,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var c=i.value;return l.callback=function(){Bu||(Bu=!0,zf=c),Au(n,i)},l}function sl(n,i,l){l=dr(-1,l),l.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var m=i.value;l.payload=function(){return c(m)},l.callback=function(){Au(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Au(n,i),typeof c!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var R=i.stack;this.componentDidCatch(i.value,{componentStack:R!==null?R:""})}),l}function oh(n,i,l){var c=n.pingCache;if(c===null){c=n.pingCache=new Ru;var m=new Set;c.set(i,m)}else m=c.get(i),m===void 0&&(m=new Set,c.set(i,m));m.has(l)||(m.add(l),n=kp.bind(null,n,i,l),i.then(n,n))}function wf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ol(n,i,l,c,m){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=dr(-1,1),i.tag=2,Ps(l,i,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var ah=O.ReactCurrentOwner,oi=!1;function vi(n,i,l,c){i.child=n===null?df(i,null,l,c):Us(i,n.child,l,c)}function Af(n,i,l,c,m){l=l.render;var g=i.ref;return Cs(i,m),c=vu(n,i,l,c,g,m),l=xu(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,zr(n,i,m)):(un&&l&&qa(i),i.flags|=1,vi(n,i,c,m),i.child)}function Or(n,i,l,c,m){if(n===null){var g=l.type;return typeof g=="function"&&!qf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=g,Rf(n,i,g,c,m)):(n=Wu(l.type,null,c,i,i.mode,m),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&m)===0){var R=g.memoizedProps;if(l=l.compare,l=l!==null?l:je,l(R,c)&&n.ref===i.ref)return zr(n,i,m)}return i.flags|=1,n=Vs(g,c),n.ref=i.ref,n.return=i,i.child=n}function Rf(n,i,l,c,m){if(n!==null){var g=n.memoizedProps;if(je(g,c)&&n.ref===i.ref)if(oi=!1,i.pendingProps=c=g,(n.lanes&m)!==0)(n.flags&131072)!==0&&(oi=!0);else return i.lanes=n.lanes,zr(n,i,m)}return Lu(n,i,l,c,m)}function Cf(n,i,l){var c=i.pendingProps,m=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},on(ma,ki),ki|=l;else{if((l&1073741824)===0)return n=g!==null?g.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,on(ma,ki),ki|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:l,on(ma,ki),ki|=c}else g!==null?(c=g.baseLanes|l,i.memoizedState=null):c=l,on(ma,ki),ki|=c;return vi(n,i,m,l),i.child}function lh(n,i){var l=i.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function Lu(n,i,l,c,m){var g=Ri(l)?mi:ti.current;return g=ea(i,g),Cs(i,m),l=vu(n,i,l,c,g,m),c=xu(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,zr(n,i,m)):(un&&c&&qa(i),i.flags|=1,vi(n,i,l,m),i.child)}function uh(n,i,l,c,m){if(Ri(l)){var g=!0;$i(i)}else g=!1;if(Cs(i,m),i.stateNode===null)fa(n,i),cf(i,l,c),ff(i,l,c,m),c=!0;else if(n===null){var R=i.stateNode,z=i.memoizedProps;R.props=z;var j=R.context,le=l.contextType;typeof le=="object"&&le!==null?le=gi(le):(le=Ri(l)?mi:ti.current,le=ea(i,le));var Pe=l.getDerivedStateFromProps,De=typeof Pe=="function"||typeof R.getSnapshotBeforeUpdate=="function";De||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==c||j!==le)&&Zd(i,R,c,le),Ls=!1;var Le=i.memoizedState;R.state=Le,du(i,c,R,m),j=i.memoizedState,z!==c||Le!==j||Ai.current||Ls?(typeof Pe=="function"&&(uf(i,l,Pe,c),j=i.memoizedState),(z=Ls||pu(i,l,z,c,Le,j,le))?(De||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(i.flags|=4194308)):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),R.props=c,R.state=j,R.context=le,c=z):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{R=i.stateNode,$d(n,i),z=i.memoizedProps,le=i.type===i.elementType?z:cr(i.type,z),R.props=le,De=i.pendingProps,Le=R.context,j=l.contextType,typeof j=="object"&&j!==null?j=gi(j):(j=Ri(l)?mi:ti.current,j=ea(i,j));var qe=l.getDerivedStateFromProps;(Pe=typeof qe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==De||Le!==j)&&Zd(i,R,c,j),Ls=!1,Le=i.memoizedState,R.state=Le,du(i,c,R,m);var Je=i.memoizedState;z!==De||Le!==Je||Ai.current||Ls?(typeof qe=="function"&&(uf(i,l,qe,c),Je=i.memoizedState),(le=Ls||pu(i,l,le,c,Le,Je,j)||!1)?(Pe||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(c,Je,j),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(c,Je,j)),typeof R.componentDidUpdate=="function"&&(i.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof R.componentDidUpdate!="function"||z===n.memoizedProps&&Le===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Le===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),R.props=c,R.state=Je,R.context=j,c=le):(typeof R.componentDidUpdate!="function"||z===n.memoizedProps&&Le===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Le===n.memoizedState||(i.flags|=1024),c=!1)}return Lf(n,i,l,c,g,m)}function Lf(n,i,l,c,m,g){lh(n,i);var R=(i.flags&128)!==0;if(!c&&!R)return m&&Wd(i,l,!1),zr(n,i,g);c=i.stateNode,ah.current=i;var z=R&&typeof l.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&R?(i.child=Us(i,n.child,null,g),i.child=Us(i,null,z,g)):vi(n,i,z,g),i.memoizedState=c.state,m&&Wd(i,l,!0),i.child}function Br(n){var i=n.stateNode;i.pendingContext?Gd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(n,i.context,!1),gu(n,i.containerInfo)}function Pu(n,i,l,c,m){return Nr(),Fr(m),i.flags|=256,vi(n,i,l,c),i.child}var al={dehydrated:null,treeContext:null,retryLane:0};function ll(n){return{baseLanes:n,cachePool:null,transitions:null}}function ul(n,i,l){var c=i.pendingProps,m=cn.current,g=!1,R=(i.flags&128)!==0,z;if((z=R)||(z=n!==null&&n.memoizedState===null?!1:(m&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),on(cn,m&1),n===null)return Ci(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(R=c.children,n=c.fallback,g?(c=i.mode,g=i.child,R={mode:"hidden",children:R},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=R):g=Xu(R,c,0,null),n=go(n,c,l,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=ll(l),i.memoizedState=al,n):Ns(i,R));if(m=n.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return bu(n,i,R,c,z,m,l);if(g){g=c.fallback,R=i.mode,m=n.child,z=m.sibling;var j={mode:"hidden",children:c.children};return(R&1)===0&&i.child!==m?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Vs(m,j),c.subtreeFlags=m.subtreeFlags&14680064),z!==null?g=Vs(z,g):(g=go(g,R,l,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,R=n.child.memoizedState,R=R===null?ll(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},g.memoizedState=R,g.childLanes=n.childLanes&~l,i.memoizedState=al,c}return g=n.child,n=g.sibling,c=Vs(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=l),c.return=i,c.sibling=null,n!==null&&(l=i.deletions,l===null?(i.deletions=[n],i.flags|=16):l.push(n)),i.child=c,i.memoizedState=null,c}function Ns(n,i){return i=Xu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ut(n,i,l,c){return c!==null&&Fr(c),Us(i,n.child,null,l),n=Ns(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function bu(n,i,l,c,m,g,R){if(l)return i.flags&256?(i.flags&=-257,c=ca(Error(t(422))),ut(n,i,R,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,m=i.mode,c=Xu({mode:"visible",children:c.children},m,0,null),g=go(g,m,R,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Us(i,n.child,null,R),i.child.memoizedState=ll(R),i.memoizedState=al,g);if((i.mode&1)===0)return ut(n,i,R,null);if(m.data==="$!"){if(c=m.nextSibling&&m.nextSibling.dataset,c)var z=c.dgst;return c=z,g=Error(t(419)),c=ca(g,c,void 0),ut(n,i,R,c)}if(z=(R&n.childLanes)!==0,oi||z){if(c=Vn,c!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(c.suspendedLanes|R))!==0?0:m,m!==0&&m!==g.retryLane&&(g.retryLane=m,fr(n,m),gr(c,n,m,-1))}return Xf(),c=ca(Error(t(421))),ut(n,i,R,c)}return m.data==="$?"?(i.flags|=128,i.child=n.child,i=Hp.bind(null,n),m._reactRetry=i,null):(n=g.treeContext,Fi=Ts(m.nextSibling),ii=i,un=!0,ur=null,n!==null&&(Ki[Zi++]=Ur,Ki[Zi++]=Dr,Ki[Zi++]=ro,Ur=n.id,Dr=n.overflow,ro=i),i=Ns(i,c.children),i.flags|=4096,i)}function Uu(n,i,l){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Qi(n.return,i,l)}function es(n,i,l,c,m){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:m}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=m)}function ch(n,i,l){var c=i.pendingProps,m=c.revealOrder,g=c.tail;if(vi(n,i,c.children,l),c=cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Uu(n,l,i);else if(n.tag===19)Uu(n,l,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(on(cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(m){case"forwards":for(l=i.child,m=null;l!==null;)n=l.alternate,n!==null&&Ja(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=i.child,i.child=null):(m=l.sibling,l.sibling=null),es(i,!1,m,l,g);break;case"backwards":for(l=null,m=i.child,i.child=null;m!==null;){if(n=m.alternate,n!==null&&Ja(n)===null){i.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}es(i,!0,l,null,g);break;case"together":es(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zr(n,i,l){if(n!==null&&(i.dependencies=n.dependencies),Bs|=i.lanes,(l&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,l=Vs(n,n.pendingProps),i.child=l,l.return=i;n.sibling!==null;)n=n.sibling,l=l.sibling=Vs(n,n.pendingProps),l.return=i;l.sibling=null}return i.child}function ai(n,i,l){switch(i.tag){case 3:Br(i),Nr();break;case 5:hf(i);break;case 1:Ri(i.type)&&$i(i);break;case 4:gu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,m=i.memoizedProps.value;on(ao,c._currentValue),c._currentValue=m;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(on(cn,cn.current&1),i.flags|=128,null):(l&i.child.childLanes)!==0?ul(n,i,l):(on(cn,cn.current&1),n=zr(n,i,l),n!==null?n.sibling:null);on(cn,cn.current&1);break;case 19:if(c=(l&i.childLanes)!==0,(n.flags&128)!==0){if(c)return ch(n,i,l);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),on(cn,cn.current),c)break;return null;case 22:case 23:return i.lanes=0,Cf(n,i,l)}return zr(n,i,l)}var fh,Pf,bf,dh;fh=function(n,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Pf=function(){},bf=function(n,i,l,c){var m=n.memoizedProps;if(m!==c){n=i.stateNode,Is(hr.current);var g=null;switch(l){case"input":m=nt(n,m),c=nt(n,c),g=[];break;case"select":m=U({},m,{value:void 0}),c=U({},c,{value:void 0}),g=[];break;case"textarea":m=dn(n,m),c=dn(n,c),g=[];break;default:typeof m.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=eu)}Ke(l,c);var R;l=null;for(le in m)if(!c.hasOwnProperty(le)&&m.hasOwnProperty(le)&&m[le]!=null)if(le==="style"){var z=m[le];for(R in z)z.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(u.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in c){var j=c[le];if(z=m!=null?m[le]:void 0,c.hasOwnProperty(le)&&j!==z&&(j!=null||z!=null))if(le==="style")if(z){for(R in z)!z.hasOwnProperty(R)||j&&j.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in j)j.hasOwnProperty(R)&&z[R]!==j[R]&&(l||(l={}),l[R]=j[R])}else l||(g||(g=[]),g.push(le,l)),l=j;else le==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,z=z?z.__html:void 0,j!=null&&z!==j&&(g=g||[]).push(le,j)):le==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(le,""+j):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(u.hasOwnProperty(le)?(j!=null&&le==="onScroll"&&an("scroll",n),g||z===j||(g=[])):(g=g||[]).push(le,j))}l&&(g=g||[]).push("style",l);var le=g;(i.updateQueue=le)&&(i.flags|=4)}},dh=function(n,i,l,c){l!==c&&(i.flags|=4)};function da(n,i){if(!un)switch(n.tailMode){case"hidden":i=n.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function li(n){var i=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(i)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,c|=m.subtreeFlags&14680064,c|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,c|=m.subtreeFlags,c|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=c,n.childLanes=l,i}function Dp(n,i,l){var c=i.pendingProps;switch(oo(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return li(i),null;case 1:return Ri(i.type)&&ru(),li(i),null;case 3:return c=i.stateNode,ra(),ln(Ai),ln(ti),mf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ya(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ur!==null&&(Gf(ur),ur=null))),Pf(n,i),li(i),null;case 5:pf(i);var m=Is(Qa.current);if(l=i.type,n!==null&&i.stateNode!=null)bf(n,i,l,c,m),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return li(i),null}if(n=Is(hr.current),Ya(i)){c=i.stateNode,l=i.type;var g=i.memoizedProps;switch(c[Pr]=i,c[ws]=g,n=(i.mode&1)!==0,l){case"dialog":an("cancel",c),an("close",c);break;case"iframe":case"object":case"embed":an("load",c);break;case"video":case"audio":for(m=0;m<Yr.length;m++)an(Yr[m],c);break;case"source":an("error",c);break;case"img":case"image":case"link":an("error",c),an("load",c);break;case"details":an("toggle",c);break;case"input":vt(c,g),an("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},an("invalid",c);break;case"textarea":B(c,g),an("invalid",c)}Ke(l,g),m=null;for(var R in g)if(g.hasOwnProperty(R)){var z=g[R];R==="children"?typeof z=="string"?c.textContent!==z&&(g.suppressHydrationWarning!==!0&&Va(c.textContent,z,n),m=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&Va(c.textContent,z,n),m=["children",""+z]):u.hasOwnProperty(R)&&z!=null&&R==="onScroll"&&an("scroll",c)}switch(l){case"input":Mt(c),Lt(c,g,!0);break;case"textarea":Mt(c),ge(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=eu)}c=m,i.updateQueue=c,c!==null&&(i.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=R.createElement(l,{is:c.is}):(n=R.createElement(l),l==="select"&&(R=n,c.multiple?R.multiple=!0:c.size&&(R.size=c.size))):n=R.createElementNS(n,l),n[Pr]=i,n[ws]=c,fh(n,i,!1,!1),i.stateNode=n;e:{switch(R=Et(l,c),l){case"dialog":an("cancel",n),an("close",n),m=c;break;case"iframe":case"object":case"embed":an("load",n),m=c;break;case"video":case"audio":for(m=0;m<Yr.length;m++)an(Yr[m],n);m=c;break;case"source":an("error",n),m=c;break;case"img":case"image":case"link":an("error",n),an("load",n),m=c;break;case"details":an("toggle",n),m=c;break;case"input":vt(n,c),m=nt(n,c),an("invalid",n);break;case"option":m=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},m=U({},c,{value:void 0}),an("invalid",n);break;case"textarea":B(n,c),m=dn(n,c),an("invalid",n);break;default:m=c}Ke(l,m),z=m;for(g in z)if(z.hasOwnProperty(g)){var j=z[g];g==="style"?lt(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&rt(n,j)):g==="children"?typeof j=="string"?(l!=="textarea"||j!=="")&&He(n,j):typeof j=="number"&&He(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(u.hasOwnProperty(g)?j!=null&&g==="onScroll"&&an("scroll",n):j!=null&&D(n,g,j,R))}switch(l){case"input":Mt(n),Lt(n,c,!1);break;case"textarea":Mt(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ze(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Gt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Gt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=eu)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return li(i),null;case 6:if(n&&i.stateNode!=null)dh(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(l=Is(Qa.current),Is(hr.current),Ya(i)){if(c=i.stateNode,l=i.memoizedProps,c[Pr]=i,(g=c.nodeValue!==l)&&(n=ii,n!==null))switch(n.tag){case 3:Va(c.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(c.nodeValue,l,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Pr]=i,i.stateNode=c}return li(i),null;case 13:if(ln(cn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&Fi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)of(),Nr(),i.flags|=98560,g=!1;else if(g=Ya(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Pr]=i}else Nr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;li(i),g=!1}else ur!==null&&(Gf(ur),ur=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=l,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(cn.current&1)!==0?zn===0&&(zn=3):Xf())),i.updateQueue!==null&&(i.flags|=4),li(i),null);case 4:return ra(),Pf(n,i),n===null&&Ms(i.stateNode.containerInfo),li(i),null;case 10:return cu(i.type._context),li(i),null;case 17:return Ri(i.type)&&ru(),li(i),null;case 19:if(ln(cn),g=i.memoizedState,g===null)return li(i),null;if(c=(i.flags&128)!==0,R=g.rendering,R===null)if(c)da(g,!1);else{if(zn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(R=Ja(n),R!==null){for(i.flags|=128,da(g,!1),c=R.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=l,l=i.child;l!==null;)g=l,n=c,g.flags&=14680066,R=g.alternate,R===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=R.childLanes,g.lanes=R.lanes,g.child=R.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=R.memoizedProps,g.memoizedState=R.memoizedState,g.updateQueue=R.updateQueue,g.type=R.type,n=R.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return on(cn,cn.current&1|2),i.child}n=n.sibling}g.tail!==null&&$e()>_a&&(i.flags|=128,c=!0,da(g,!1),i.lanes=4194304)}else{if(!c)if(n=Ja(R),n!==null){if(i.flags|=128,c=!0,l=n.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),da(g,!0),g.tail===null&&g.tailMode==="hidden"&&!R.alternate&&!un)return li(i),null}else 2*$e()-g.renderingStartTime>_a&&l!==1073741824&&(i.flags|=128,c=!0,da(g,!1),i.lanes=4194304);g.isBackwards?(R.sibling=i.child,i.child=R):(l=g.last,l!==null?l.sibling=R:i.child=R,g.last=R)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=$e(),i.sibling=null,l=cn.current,on(cn,c?l&1|2:l&1),i):(li(i),null);case 22:case 23:return Wf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ki&1073741824)!==0&&(li(i),i.subtreeFlags&6&&(i.flags|=8192)):li(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ip(n,i){switch(oo(i),i.tag){case 1:return Ri(i.type)&&ru(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ra(),ln(Ai),ln(ti),mf(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return pf(i),null;case 13:if(ln(cn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Nr()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ln(cn),null;case 4:return ra(),null;case 10:return cu(i.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var Ji=!1,Zt=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Fs(n,i){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){Mn(n,i,c)}else l.current=null}function Df(n,i,l){try{l()}catch(c){Mn(n,i,c)}}var hh=!1;function cl(n,i){if(Wa=Fl,n=Jt(),Oa(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var m=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var R=0,z=-1,j=-1,le=0,Pe=0,De=n,Le=null;t:for(;;){for(var qe;De!==l||m!==0&&De.nodeType!==3||(z=R+m),De!==g||c!==0&&De.nodeType!==3||(j=R+c),De.nodeType===3&&(R+=De.nodeValue.length),(qe=De.firstChild)!==null;)Le=De,De=qe;for(;;){if(De===n)break t;if(Le===l&&++le===m&&(z=R),Le===g&&++Pe===c&&(j=R),(qe=De.nextSibling)!==null)break;De=Le,Le=De.parentNode}De=qe}l=z===-1||j===-1?null:{start:z,end:j}}else l=null}l=l||{start:0,end:0}}else l=null;for(no={focusedElem:n,selectionRange:l},Fl=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,Rn=Je.memoizedState,te=i.stateNode,K=te.getSnapshotBeforeUpdate(i.elementType===i.type?tt:cr(i.type,tt),Rn);te.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){Mn(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return Je=hh,hh=!1,Je}function ha(n,i,l){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var m=c=c.next;do{if((m.tag&n)===n){var g=m.destroy;m.destroy=void 0,g!==void 0&&Df(i,l,g)}m=m.next}while(m!==c)}}function fl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&n)===n){var c=l.create;l.destroy=c()}l=l.next}while(l!==i)}}function If(n){var i=n.ref;if(i!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof i=="function"?i(n):i.current=n}}function ph(n){var i=n.alternate;i!==null&&(n.alternate=null,ph(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Pr],delete i[ws],delete i[nu],delete i[C],delete i[Qo])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mh(n){return n.tag===5||n.tag===3||n.tag===4}function gh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Du(n,i,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(n,i):l.insertBefore(n,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(n,l)):(i=l,i.appendChild(n)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=eu));else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,l),n=n.sibling;n!==null;)Du(n,i,l),n=n.sibling}function Iu(n,i,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?l.insertBefore(n,i):l.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Iu(n,i,l),n=n.sibling;n!==null;)Iu(n,i,l),n=n.sibling}var qn=null,Bi=!1;function ts(n,i,l){for(l=l.child;l!==null;)pa(n,i,l),l=l.sibling}function pa(n,i,l){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(bt,l)}catch{}switch(l.tag){case 5:Zt||Fs(l,i);case 6:var c=qn,m=Bi;qn=null,ts(n,i,l),qn=c,Bi=m,qn!==null&&(Bi?(n=qn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):qn.removeChild(l.stateNode));break;case 18:qn!==null&&(Bi?(n=qn,l=l.stateNode,n.nodeType===8?nf(n.parentNode,l):n.nodeType===1&&nf(n,l),Kt(n)):nf(qn,l.stateNode));break;case 4:c=qn,m=Bi,qn=l.stateNode.containerInfo,Bi=!0,ts(n,i,l),qn=c,Bi=m;break;case 0:case 11:case 14:case 15:if(!Zt&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){m=c=c.next;do{var g=m,R=g.destroy;g=g.tag,R!==void 0&&((g&2)!==0||(g&4)!==0)&&Df(l,i,R),m=m.next}while(m!==c)}ts(n,i,l);break;case 1:if(!Zt&&(Fs(l,i),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(z){Mn(l,i,z)}ts(n,i,l);break;case 21:ts(n,i,l);break;case 22:l.mode&1?(Zt=(c=Zt)||l.memoizedState!==null,ts(n,i,l),Zt=c):ts(n,i,l);break;default:ts(n,i,l)}}function Nu(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Uf),i.forEach(function(c){var m=Gp.bind(null,n,c);l.has(c)||(l.add(c),c.then(m,m))})}}function er(n,i){var l=i.deletions;if(l!==null)for(var c=0;c<l.length;c++){var m=l[c];try{var g=n,R=i,z=R;e:for(;z!==null;){switch(z.tag){case 5:qn=z.stateNode,Bi=!1;break e;case 3:qn=z.stateNode.containerInfo,Bi=!0;break e;case 4:qn=z.stateNode.containerInfo,Bi=!0;break e}z=z.return}if(qn===null)throw Error(t(160));pa(g,R,m),qn=null,Bi=!1;var j=m.alternate;j!==null&&(j.return=null),m.return=null}catch(le){Mn(m,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Nf(i,n),i=i.sibling}function Nf(n,i){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(i,n),zi(n),c&4){try{ha(3,n,n.return),fl(3,n)}catch(tt){Mn(n,n.return,tt)}try{ha(5,n,n.return)}catch(tt){Mn(n,n.return,tt)}}break;case 1:er(i,n),zi(n),c&512&&l!==null&&Fs(l,l.return);break;case 5:if(er(i,n),zi(n),c&512&&l!==null&&Fs(l,l.return),n.flags&32){var m=n.stateNode;try{He(m,"")}catch(tt){Mn(n,n.return,tt)}}if(c&4&&(m=n.stateNode,m!=null)){var g=n.memoizedProps,R=l!==null?l.memoizedProps:g,z=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&St(m,g),Et(z,R);var le=Et(z,g);for(R=0;R<j.length;R+=2){var Pe=j[R],De=j[R+1];Pe==="style"?lt(m,De):Pe==="dangerouslySetInnerHTML"?rt(m,De):Pe==="children"?He(m,De):D(m,Pe,De,le)}switch(z){case"input":Bt(m,g);break;case"textarea":N(m,g);break;case"select":var Le=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!g.multiple;var qe=g.value;qe!=null?Gt(m,!!g.multiple,qe,!1):Le!==!!g.multiple&&(g.defaultValue!=null?Gt(m,!!g.multiple,g.defaultValue,!0):Gt(m,!!g.multiple,g.multiple?[]:"",!1))}m[ws]=g}catch(tt){Mn(n,n.return,tt)}}break;case 6:if(er(i,n),zi(n),c&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,g=n.memoizedProps;try{m.nodeValue=g}catch(tt){Mn(n,n.return,tt)}}break;case 3:if(er(i,n),zi(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Kt(i.containerInfo)}catch(tt){Mn(n,n.return,tt)}break;case 4:er(i,n),zi(n);break;case 13:er(i,n),zi(n),m=n.child,m.flags&8192&&(g=m.memoizedState!==null,m.stateNode.isHidden=g,!g||m.alternate!==null&&m.alternate.memoizedState!==null||(Ou=$e())),c&4&&Nu(n);break;case 22:if(Pe=l!==null&&l.memoizedState!==null,n.mode&1?(Zt=(le=Zt)||Pe,er(i,n),Zt=le):er(i,n),zi(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!Pe&&(n.mode&1)!==0)for(Qe=n,Pe=n.child;Pe!==null;){for(De=Qe=Pe;Qe!==null;){switch(Le=Qe,qe=Le.child,Le.tag){case 0:case 11:case 14:case 15:ha(4,Le,Le.return);break;case 1:Fs(Le,Le.return);var Je=Le.stateNode;if(typeof Je.componentWillUnmount=="function"){c=Le,l=Le.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(tt){Mn(c,l,tt)}}break;case 5:Fs(Le,Le.return);break;case 22:if(Le.memoizedState!==null){vh(De);continue}}qe!==null?(qe.return=Le,Qe=qe):vh(De)}Pe=Pe.sibling}e:for(Pe=null,De=n;;){if(De.tag===5){if(Pe===null){Pe=De;try{m=De.stateNode,le?(g=m.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=De.stateNode,j=De.memoizedProps.style,R=j!=null&&j.hasOwnProperty("display")?j.display:null,z.style.display=ot("display",R))}catch(tt){Mn(n,n.return,tt)}}}else if(De.tag===6){if(Pe===null)try{De.stateNode.nodeValue=le?"":De.memoizedProps}catch(tt){Mn(n,n.return,tt)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;Pe===De&&(Pe=null),De=De.return}Pe===De&&(Pe=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:er(i,n),zi(n),c&4&&Nu(n);break;case 21:break;default:er(i,n),zi(n)}}function zi(n){var i=n.flags;if(i&2){try{e:{for(var l=n.return;l!==null;){if(mh(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var m=c.stateNode;c.flags&32&&(He(m,""),c.flags&=-33);var g=gh(n);Iu(n,g,m);break;case 3:case 4:var R=c.stateNode.containerInfo,z=gh(n);Du(n,z,R);break;default:throw Error(t(161))}}catch(j){Mn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function _h(n,i,l){Qe=n,mr(n)}function mr(n,i,l){for(var c=(n.mode&1)!==0;Qe!==null;){var m=Qe,g=m.child;if(m.tag===22&&c){var R=m.memoizedState!==null||Ji;if(!R){var z=m.alternate,j=z!==null&&z.memoizedState!==null||Zt;z=Ji;var le=Zt;if(Ji=R,(Zt=j)&&!le)for(Qe=m;Qe!==null;)R=Qe,j=R.child,R.tag===22&&R.memoizedState!==null?Ff(m):j!==null?(j.return=R,Qe=j):Ff(m);for(;g!==null;)Qe=g,mr(g),g=g.sibling;Qe=m,Ji=z,Zt=le}Os(n)}else(m.subtreeFlags&8772)!==0&&g!==null?(g.return=m,Qe=g):Os(n)}}function Os(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var l=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Zt||fl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Zt)if(l===null)c.componentDidMount();else{var m=i.elementType===i.type?l.memoizedProps:cr(i.type,l.memoizedProps);c.componentDidUpdate(m,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Kd(i,g,c);break;case 3:var R=i.updateQueue;if(R!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}Kd(i,R,l)}break;case 5:var z=i.stateNode;if(l===null&&i.flags&4){l=z;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&l.focus();break;case"img":j.src&&(l.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Pe=le.memoizedState;if(Pe!==null){var De=Pe.dehydrated;De!==null&&Kt(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Zt||i.flags&512&&If(i)}catch(Le){Mn(i,i.return,Le)}}if(i===n){Qe=null;break}if(l=i.sibling,l!==null){l.return=i.return,Qe=l;break}Qe=i.return}}function vh(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var l=i.sibling;if(l!==null){l.return=i.return,Qe=l;break}Qe=i.return}}function Ff(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{fl(4,i)}catch(j){Mn(i,l,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var m=i.return;try{c.componentDidMount()}catch(j){Mn(i,m,j)}}var g=i.return;try{If(i)}catch(j){Mn(i,g,j)}break;case 5:var R=i.return;try{If(i)}catch(j){Mn(i,R,j)}}}catch(j){Mn(i,i.return,j)}if(i===n){Qe=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Qe=z;break}Qe=i.return}}var Np=Math.ceil,Fu=O.ReactCurrentDispatcher,Of=O.ReactCurrentOwner,tr=O.ReactCurrentBatchConfig,Vt=0,Vn=null,Un=null,Yn=0,ki=0,ma=wi(0),zn=0,ga=null,Bs=0,dl=0,Bf=0,hl=null,Li=null,Ou=0,_a=1/0,ns=null,Bu=!1,zf=null,zs=null,zu=!1,kn=null,ku=0,pl=0,kf=null,ml=-1,Hu=0;function xi(){return(Vt&6)!==0?$e():ml!==-1?ml:ml=$e()}function ks(n){return(n.mode&1)===0?1:(Vt&2)!==0&&Yn!==0?Yn&-Yn:Yd.transition!==null?(Hu===0&&(Hu=Ic()),Hu):(n=Yt,n!==0||(n=window.event,n=n===void 0?16:Sd(n.type)),n)}function gr(n,i,l,c){if(50<pl)throw pl=0,kf=null,Error(t(185));ba(n,l,c),((Vt&2)===0||n!==Vn)&&(n===Vn&&((Vt&2)===0&&(dl|=l),zn===4&&Hs(n,Yn)),ui(n,c),l===1&&Vt===0&&(i.mode&1)===0&&(_a=$e()+500,su&&Rs()))}function ui(n,i){var l=n.callbackNode;Dc(n,i);var c=An(n,n===Vn?Yn:0);if(c===0)l!==null&&mt(l),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(l!=null&&mt(l),i===1)n.tag===0?io(Sh.bind(null,n)):Xd(Sh.bind(null,n)),tu(function(){(Vt&6)===0&&Rs()}),l=null;else{switch(Ks(c)){case 1:l=rn;break;case 4:l=hn;break;case 16:l=jn;break;case 536870912:l=pn;break;default:l=jn}l=Rh(l,xh.bind(null,n))}n.callbackPriority=i,n.callbackNode=l}}function xh(n,i){if(ml=-1,Hu=0,(Vt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Gs()&&n.callbackNode!==l)return null;var c=An(n,n===Vn?Yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Gu(n,c);else{i=c;var m=Vt;Vt|=2;var g=Mh();(Vn!==n||Yn!==i)&&(ns=null,_a=$e()+500,po(n,i));do try{Bp();break}catch(z){yh(n,z)}while(!0);$a(),Fu.current=g,Vt=m,Un!==null?i=0:(Vn=null,Yn=0,i=zn)}if(i!==0){if(i===2&&(m=$s(n),m!==0&&(c=m,i=Hf(n,m))),i===1)throw l=ga,po(n,0),Hs(n,c),ui(n,$e()),l;if(i===6)Hs(n,c);else{if(m=n.current.alternate,(c&30)===0&&!Fp(m)&&(i=Gu(n,c),i===2&&(g=$s(n),g!==0&&(c=g,i=Hf(n,g))),i===1))throw l=ga,po(n,0),Hs(n,c),ui(n,$e()),l;switch(n.finishedWork=m,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:mo(n,Li,ns);break;case 3:if(Hs(n,c),(c&130023424)===c&&(i=Ou+500-$e(),10<i)){if(An(n,0)!==0)break;if(m=n.suspendedLanes,(m&c)!==c){xi(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Es(mo.bind(null,n,Li,ns),i);break}mo(n,Li,ns);break;case 4:if(Hs(n,c),(c&4194240)===c)break;for(i=n.eventTimes,m=-1;0<c;){var R=31-In(c);g=1<<R,R=i[R],R>m&&(m=R),c&=~g}if(c=m,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Np(c/1960))-c,10<c){n.timeoutHandle=Es(mo.bind(null,n,Li,ns),c);break}mo(n,Li,ns);break;case 5:mo(n,Li,ns);break;default:throw Error(t(329))}}}return ui(n,$e()),n.callbackNode===l?xh.bind(null,n):null}function Hf(n,i){var l=hl;return n.current.memoizedState.isDehydrated&&(po(n,i).flags|=256),n=Gu(n,i),n!==2&&(i=Li,Li=l,i!==null&&Gf(i)),n}function Gf(n){Li===null?Li=n:Li.push.apply(Li,n)}function Fp(n){for(var i=n;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var m=l[c],g=m.getSnapshot;m=m.value;try{if(!ae(g(),m))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hs(n,i){for(i&=~Bf,i&=~dl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var l=31-In(i),c=1<<l;n[l]=-1,i&=~c}}function Sh(n){if((Vt&6)!==0)throw Error(t(327));Gs();var i=An(n,0);if((i&1)===0)return ui(n,$e()),null;var l=Gu(n,i);if(n.tag!==0&&l===2){var c=$s(n);c!==0&&(i=c,l=Hf(n,c))}if(l===1)throw l=ga,po(n,0),Hs(n,i),ui(n,$e()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,mo(n,Li,ns),ui(n,$e()),null}function Vf(n,i){var l=Vt;Vt|=1;try{return n(i)}finally{Vt=l,Vt===0&&(_a=$e()+500,su&&Rs())}}function ho(n){kn!==null&&kn.tag===0&&(Vt&6)===0&&Gs();var i=Vt;Vt|=1;var l=tr.transition,c=Yt;try{if(tr.transition=null,Yt=1,n)return n()}finally{Yt=c,tr.transition=l,Vt=i,(Vt&6)===0&&Rs()}}function Wf(){ki=ma.current,ln(ma)}function po(n,i){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,ja(l)),Un!==null)for(l=Un.return;l!==null;){var c=l;switch(oo(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:ra(),ln(Ai),ln(ti),mf();break;case 5:pf(c);break;case 4:ra();break;case 13:ln(cn);break;case 19:ln(cn);break;case 10:cu(c.type._context);break;case 22:case 23:Wf()}l=l.return}if(Vn=n,Un=n=Vs(n.current,null),Yn=ki=i,zn=0,ga=null,Bf=dl=Bs=0,Li=hl=null,Oi!==null){for(i=0;i<Oi.length;i++)if(l=Oi[i],c=l.interleaved,c!==null){l.interleaved=null;var m=c.next,g=l.pending;if(g!==null){var R=g.next;g.next=m,c.next=R}l.pending=c}Oi=null}return n}function yh(n,i){do{var l=Un;try{if($a(),sa.current=Jr,_u){for(var c=_n.memoizedState;c!==null;){var m=c.queue;m!==null&&(m.pending=null),c=c.next}_u=!1}if(uo=0,Fn=vn=_n=null,tl=!1,si=0,Of.current=null,l===null||l.return===null){zn=1,ga=i,Un=null;break}e:{var g=n,R=l.return,z=l,j=i;if(i=Yn,z.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var le=j,Pe=z,De=Pe.tag;if((Pe.mode&1)===0&&(De===0||De===11||De===15)){var Le=Pe.alternate;Le?(Pe.updateQueue=Le.updateQueue,Pe.memoizedState=Le.memoizedState,Pe.lanes=Le.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var qe=wf(R);if(qe!==null){qe.flags&=-257,ol(qe,R,z,g,i),qe.mode&1&&oh(g,le,i),i=qe,j=le;var Je=i.updateQueue;if(Je===null){var tt=new Set;tt.add(j),i.updateQueue=tt}else Je.add(j);break e}else{if((i&1)===0){oh(g,le,i),Xf();break e}j=Error(t(426))}}else if(un&&z.mode&1){var Rn=wf(R);if(Rn!==null){(Rn.flags&65536)===0&&(Rn.flags|=256),ol(Rn,R,z,g,i),Fr(fo(j,z));break e}}g=j=fo(j,z),zn!==4&&(zn=2),hl===null?hl=[g]:hl.push(g),g=R;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var te=Cu(g,j,i);lf(g,te);break e;case 1:z=j;var K=g.type,ie=g.stateNode;if((g.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(zs===null||!zs.has(ie)))){g.flags|=65536,i&=-i,g.lanes|=i;var Fe=sl(g,z,i);lf(g,Fe);break e}}g=g.return}while(g!==null)}Th(l)}catch(it){i=it,Un===l&&l!==null&&(Un=l=l.return);continue}break}while(!0)}function Mh(){var n=Fu.current;return Fu.current=Jr,n===null?Jr:n}function Xf(){(zn===0||zn===3||zn===2)&&(zn=4),Vn===null||(Bs&268435455)===0&&(dl&268435455)===0||Hs(Vn,Yn)}function Gu(n,i){var l=Vt;Vt|=2;var c=Mh();(Vn!==n||Yn!==i)&&(ns=null,po(n,i));do try{Op();break}catch(m){yh(n,m)}while(!0);if($a(),Vt=l,Fu.current=c,Un!==null)throw Error(t(261));return Vn=null,Yn=0,zn}function Op(){for(;Un!==null;)Eh(Un)}function Bp(){for(;Un!==null&&!ht();)Eh(Un)}function Eh(n){var i=Ah(n.alternate,n,ki);n.memoizedProps=n.pendingProps,i===null?Th(n):Un=i,Of.current=null}function Th(n){var i=n;do{var l=i.alternate;if(n=i.return,(i.flags&32768)===0){if(l=Dp(l,i,ki),l!==null){Un=l;return}}else{if(l=Ip(l,i),l!==null){l.flags&=32767,Un=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{zn=6,Un=null;return}}if(i=i.sibling,i!==null){Un=i;return}Un=i=n}while(i!==null);zn===0&&(zn=5)}function mo(n,i,l){var c=Yt,m=tr.transition;try{tr.transition=null,Yt=1,zp(n,i,l,c)}finally{tr.transition=m,Yt=c}return null}function zp(n,i,l,c){do Gs();while(kn!==null);if((Vt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=l.lanes|l.childLanes;if(md(n,g),n===Vn&&(Un=Vn=null,Yn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||zu||(zu=!0,Rh(jn,function(){return Gs(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=tr.transition,tr.transition=null;var R=Yt;Yt=1;var z=Vt;Vt|=4,Of.current=null,cl(n,l),Nf(l,n),Cp(no),Fl=!!Wa,no=Wa=null,n.current=l,_h(l),Pt(),Vt=z,Yt=R,tr.transition=g}else n.current=l;if(zu&&(zu=!1,kn=n,ku=m),g=n.pendingLanes,g===0&&(zs=null),Ln(l.stateNode),ui(n,$e()),i!==null)for(c=n.onRecoverableError,l=0;l<i.length;l++)m=i[l],c(m.value,{componentStack:m.stack,digest:m.digest});if(Bu)throw Bu=!1,n=zf,zf=null,n;return(ku&1)!==0&&n.tag!==0&&Gs(),g=n.pendingLanes,(g&1)!==0?n===kf?pl++:(pl=0,kf=n):pl=0,Rs(),null}function Gs(){if(kn!==null){var n=Ks(ku),i=tr.transition,l=Yt;try{if(tr.transition=null,Yt=16>n?16:n,kn===null)var c=!1;else{if(n=kn,kn=null,ku=0,(Vt&6)!==0)throw Error(t(331));var m=Vt;for(Vt|=4,Qe=n.current;Qe!==null;){var g=Qe,R=g.child;if((Qe.flags&16)!==0){var z=g.deletions;if(z!==null){for(var j=0;j<z.length;j++){var le=z[j];for(Qe=le;Qe!==null;){var Pe=Qe;switch(Pe.tag){case 0:case 11:case 15:ha(8,Pe,g)}var De=Pe.child;if(De!==null)De.return=Pe,Qe=De;else for(;Qe!==null;){Pe=Qe;var Le=Pe.sibling,qe=Pe.return;if(ph(Pe),Pe===le){Qe=null;break}if(Le!==null){Le.return=qe,Qe=Le;break}Qe=qe}}}var Je=g.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var Rn=tt.sibling;tt.sibling=null,tt=Rn}while(tt!==null)}}Qe=g}}if((g.subtreeFlags&2064)!==0&&R!==null)R.return=g,Qe=R;else e:for(;Qe!==null;){if(g=Qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ha(9,g,g.return)}var te=g.sibling;if(te!==null){te.return=g.return,Qe=te;break e}Qe=g.return}}var K=n.current;for(Qe=K;Qe!==null;){R=Qe;var ie=R.child;if((R.subtreeFlags&2064)!==0&&ie!==null)ie.return=R,Qe=ie;else e:for(R=K;Qe!==null;){if(z=Qe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:fl(9,z)}}catch(it){Mn(z,z.return,it)}if(z===R){Qe=null;break e}var Fe=z.sibling;if(Fe!==null){Fe.return=z.return,Qe=Fe;break e}Qe=z.return}}if(Vt=m,Rs(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(bt,n)}catch{}c=!0}return c}finally{Yt=l,tr.transition=i}}return!1}function jf(n,i,l){i=fo(l,i),i=Cu(n,i,1),n=Ps(n,i,1),i=xi(),n!==null&&(ba(n,1,i),ui(n,i))}function Mn(n,i,l){if(n.tag===3)jf(n,n,l);else for(;i!==null;){if(i.tag===3){jf(i,n,l);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zs===null||!zs.has(c))){n=fo(l,n),n=sl(i,n,1),i=Ps(i,n,1),n=xi(),i!==null&&(ba(i,1,n),ui(i,n));break}}i=i.return}}function kp(n,i,l){var c=n.pingCache;c!==null&&c.delete(i),i=xi(),n.pingedLanes|=n.suspendedLanes&l,Vn===n&&(Yn&l)===l&&(zn===4||zn===3&&(Yn&130023424)===Yn&&500>$e()-Ou?po(n,0):Bf|=l),ui(n,i)}function wh(n,i){i===0&&((n.mode&1)===0?i=1:(i=ji,ji<<=1,(ji&130023424)===0&&(ji=4194304)));var l=xi();n=fr(n,i),n!==null&&(ba(n,i,l),ui(n,l))}function Hp(n){var i=n.memoizedState,l=0;i!==null&&(l=i.retryLane),wh(n,l)}function Gp(n,i){var l=0;switch(n.tag){case 13:var c=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),wh(n,l)}var Ah;Ah=function(n,i,l){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ai.current)oi=!0;else{if((n.lanes&l)===0&&(i.flags&128)===0)return oi=!1,ai(n,i,l);oi=(n.flags&131072)!==0}else oi=!1,un&&(i.flags&1048576)!==0&&jd(i,au,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;fa(n,i),n=i.pendingProps;var m=ea(i,ti.current);Cs(i,l),m=vu(null,i,c,n,m,l);var g=xu();return i.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ri(c)?(g=!0,$i(i)):g=!1,i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,af(i),m.updater=hu,i.stateNode=m,m._reactInternals=i,ff(i,c,n,l),i=Lf(null,i,c,!0,g,l)):(i.tag=0,un&&g&&qa(i),vi(null,i,m,l),i=i.child),i;case 16:c=i.elementType;e:{switch(fa(n,i),n=i.pendingProps,m=c._init,c=m(c._payload),i.type=c,m=i.tag=Vu(c),n=cr(c,n),m){case 0:i=Lu(null,i,c,n,l);break e;case 1:i=uh(null,i,c,n,l);break e;case 11:i=Af(null,i,c,n,l);break e;case 14:i=Or(null,i,c,cr(c.type,n),l);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:cr(c,m),Lu(n,i,c,m,l);case 1:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:cr(c,m),uh(n,i,c,m,l);case 3:e:{if(Br(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,m=g.element,$d(n,i),du(i,c,null,l);var R=i.memoizedState;if(c=R.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){m=fo(Error(t(423)),i),i=Pu(n,i,c,l,m);break e}else if(c!==m){m=fo(Error(t(424)),i),i=Pu(n,i,c,l,m);break e}else for(Fi=Ts(i.stateNode.containerInfo.firstChild),ii=i,un=!0,ur=null,l=df(i,null,c,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Nr(),c===m){i=zr(n,i,l);break e}vi(n,i,c,l)}i=i.child}return i;case 5:return hf(i),n===null&&Ci(i),c=i.type,m=i.pendingProps,g=n!==null?n.memoizedProps:null,R=m.children,Xa(c,m)?R=null:g!==null&&Xa(c,g)&&(i.flags|=32),lh(n,i),vi(n,i,R,l),i.child;case 6:return n===null&&Ci(i),null;case 13:return ul(n,i,l);case 4:return gu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Us(i,null,c,l):vi(n,i,c,l),i.child;case 11:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:cr(c,m),Af(n,i,c,m,l);case 7:return vi(n,i,i.pendingProps,l),i.child;case 8:return vi(n,i,i.pendingProps.children,l),i.child;case 12:return vi(n,i,i.pendingProps.children,l),i.child;case 10:e:{if(c=i.type._context,m=i.pendingProps,g=i.memoizedProps,R=m.value,on(ao,c._currentValue),c._currentValue=R,g!==null)if(ae(g.value,R)){if(g.children===m.children&&!Ai.current){i=zr(n,i,l);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){R=g.child;for(var j=z.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=dr(-1,l&-l),j.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var Pe=le.pending;Pe===null?j.next=j:(j.next=Pe.next,Pe.next=j),le.pending=j}}g.lanes|=l,j=g.alternate,j!==null&&(j.lanes|=l),Qi(g.return,l,i),z.lanes|=l;break}j=j.next}}else if(g.tag===10)R=g.type===i.type?null:g.child;else if(g.tag===18){if(R=g.return,R===null)throw Error(t(341));R.lanes|=l,z=R.alternate,z!==null&&(z.lanes|=l),Qi(R,l,i),R=g.sibling}else R=g.child;if(R!==null)R.return=g;else for(R=g;R!==null;){if(R===i){R=null;break}if(g=R.sibling,g!==null){g.return=R.return,R=g;break}R=R.return}g=R}vi(n,i,m.children,l),i=i.child}return i;case 9:return m=i.type,c=i.pendingProps.children,Cs(i,l),m=gi(m),c=c(m),i.flags|=1,vi(n,i,c,l),i.child;case 14:return c=i.type,m=cr(c,i.pendingProps),m=cr(c.type,m),Or(n,i,c,m,l);case 15:return Rf(n,i,i.type,i.pendingProps,l);case 17:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:cr(c,m),fa(n,i),i.tag=1,Ri(c)?(n=!0,$i(i)):n=!1,Cs(i,l),cf(i,c,m),ff(i,c,m,l),Lf(null,i,c,!0,n,l);case 19:return ch(n,i,l);case 22:return Cf(n,i,l)}throw Error(t(156,i.tag))};function Rh(n,i){return ft(n,i)}function Vp(n,i,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(n,i,l,c){return new Vp(n,i,l,c)}function qf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Vu(n){if(typeof n=="function")return qf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Re)return 11;if(n===me)return 14}return 2}function Vs(n,i){var l=n.alternate;return l===null?(l=Hi(n.tag,i,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=i,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,i=n.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Wu(n,i,l,c,m,g){var R=2;if(c=n,typeof n=="function")qf(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case X:return go(l.children,m,g,i);case fe:R=8,m|=8;break;case I:return n=Hi(12,l,i,m|2),n.elementType=I,n.lanes=g,n;case se:return n=Hi(13,l,i,m),n.elementType=se,n.lanes=g,n;case de:return n=Hi(19,l,i,m),n.elementType=de,n.lanes=g,n;case ue:return Xu(l,m,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:R=10;break e;case Me:R=9;break e;case Re:R=11;break e;case me:R=14;break e;case Ee:R=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Hi(R,l,i,m),i.elementType=n,i.type=c,i.lanes=g,i}function go(n,i,l,c){return n=Hi(7,n,c,i),n.lanes=l,n}function Xu(n,i,l,c){return n=Hi(22,n,c,i),n.elementType=ue,n.lanes=l,n.stateNode={isHidden:!1},n}function Yf(n,i,l){return n=Hi(6,n,null,i),n.lanes=l,n}function $f(n,i,l){return i=Hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=l,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Wp(n,i,l,c,m){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=c,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Kf(n,i,l,c,m,g,R,z,j){return n=new Wp(n,i,l,z,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Hi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(g),n}function Xp(n,i,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:c==null?null:""+c,children:n,containerInfo:i,implementation:l}}function Ch(n){if(!n)return As;n=n._reactInternals;e:{if(F(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ri(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Ri(l))return Vd(n,l,i)}return i}function Lh(n,i,l,c,m,g,R,z,j){return n=Kf(l,c,!0,n,m,g,R,z,j),n.context=Ch(null),l=n.current,c=xi(),m=ks(l),g=dr(c,m),g.callback=i??null,Ps(l,g,m),n.current.lanes=m,ba(n,m,c),ui(n,c),n}function ju(n,i,l,c){var m=i.current,g=xi(),R=ks(m);return l=Ch(l),i.context===null?i.context=l:i.pendingContext=l,i=dr(g,R),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ps(m,i,R),n!==null&&(gr(n,m,R,g),bs(n,m,R)),R}function qu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ph(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<i?l:i}}function Zf(n,i){Ph(n,i),(n=n.alternate)&&Ph(n,i)}function jp(){return null}var Qf=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yu(n){this._internalRoot=n}$u.prototype.render=Yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ju(n,i,null,null)},$u.prototype.unmount=Yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ho(function(){ju(null,n,null,null)}),i[Ni]=null}};function $u(n){this._internalRoot=n}$u.prototype.unstable_scheduleHydration=function(n){if(n){var i=Fc();n={blockedOn:null,target:n,priority:i};for(var l=0;l<vs.length&&i!==0&&i<vs[l].priority;l++);vs.splice(l,0,n),l===0&&vd(n)}};function Jf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bh(){}function Zu(n,i,l,c,m){if(m){if(typeof c=="function"){var g=c;c=function(){var le=qu(R);g.call(le)}}var R=Lh(i,c,n,0,null,!1,!1,"",bh);return n._reactRootContainer=R,n[Ni]=R.current,Ms(n.nodeType===8?n.parentNode:n),ho(),R}for(;m=n.lastChild;)n.removeChild(m);if(typeof c=="function"){var z=c;c=function(){var le=qu(j);z.call(le)}}var j=Kf(n,0,!1,null,null,!1,!1,"",bh);return n._reactRootContainer=j,n[Ni]=j.current,Ms(n.nodeType===8?n.parentNode:n),ho(function(){ju(i,j,l,c)}),j}function Qu(n,i,l,c,m){var g=l._reactRootContainer;if(g){var R=g;if(typeof m=="function"){var z=m;m=function(){var j=qu(R);z.call(j)}}ju(i,R,n,m)}else R=Zu(l,i,n,m,c);return qu(R)}Nc=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var l=Rr(i.pendingLanes);l!==0&&(Ua(i,l|1),ui(i,$e()),(Vt&6)===0&&(_a=$e()+500,Rs()))}break;case 13:ho(function(){var c=fr(n,1);if(c!==null){var m=xi();gr(c,n,1,m)}}),Zf(n,1)}},Dl=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var l=xi();gr(i,n,134217728,l)}Zf(n,134217728)}},gd=function(n){if(n.tag===13){var i=ks(n),l=fr(n,i);if(l!==null){var c=xi();gr(l,n,i,c)}Zf(n,i)}},Fc=function(){return Yt},Oc=function(n,i){var l=Yt;try{return Yt=n,i()}finally{Yt=l}},Ge=function(n,i,l){switch(i){case"input":if(Bt(n,l),i=l.name,l.type==="radio"&&i!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var c=l[i];if(c!==n&&c.form===n.form){var m=iu(c);if(!m)throw Error(t(90));re(c),Bt(c,m)}}}break;case"textarea":N(n,l);break;case"select":i=l.value,i!=null&&Gt(n,!!l.multiple,i,!1)}},Tn=Vf,Mi=ho;var qp={usingClientEntryPoint:!1,Events:[ei,At,iu,zt,tn,Vf]},gl={findFiberByHostInstance:br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yp={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Se(n),n===null?null:n.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{bt=Ju.inject(Yp),Ei=Ju}catch{}}return sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp,sr.createPortal=function(n,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(i))throw Error(t(200));return Xp(n,i,null,l)},sr.createRoot=function(n,i){if(!Jf(n))throw Error(t(299));var l=!1,c="",m=Qf;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),i=Kf(n,1,!1,null,null,l,!1,c,m),n[Ni]=i.current,Ms(n.nodeType===8?n.parentNode:n),new Yu(i)},sr.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Se(i),n=n===null?null:n.stateNode,n},sr.flushSync=function(n){return ho(n)},sr.hydrate=function(n,i,l){if(!Ku(i))throw Error(t(200));return Qu(null,n,i,!0,l)},sr.hydrateRoot=function(n,i,l){if(!Jf(n))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,m=!1,g="",R=Qf;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),i=Lh(i,null,n,1,l??null,m,!1,g,R),n[Ni]=i.current,Ms(n),c)for(n=0;n<c.length;n++)l=c[n],m=l._getVersion,m=m(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,m]:i.mutableSourceEagerHydrationData.push(l,m);return new $u(i)},sr.render=function(n,i,l){if(!Ku(i))throw Error(t(200));return Qu(null,n,i,!1,l)},sr.unmountComponentAtNode=function(n){if(!Ku(n))throw Error(t(40));return n._reactRootContainer?(ho(function(){Qu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},sr.unstable_batchedUpdates=Vf,sr.unstable_renderSubtreeIntoContainer=function(n,i,l,c){if(!Ku(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Qu(n,i,l,!1,c)},sr.version="18.2.0-next-9e3b772b8-20220608",sr}var Ig;function hS(){if(Ig)return um.exports;Ig=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),um.exports=dS(),um.exports}var Ng;function pS(){if(Ng)return Fh;Ng=1;var s=hS();return Fh.createRoot=s.createRoot,Fh.hydrateRoot=s.hydrateRoot,Fh}var mS=pS();const gS=rv(mS);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tg="154",_S=0,Fg=1,vS=2,sv=1,xS=2,Ro=3,Ra=0,ar=1,Co=2,wa=0,yc=1,Og=2,Bg=3,zg=4,SS=5,vc=100,yS=101,MS=102,kg=103,Hg=104,ES=200,TS=201,wS=202,AS=203,ov=204,av=205,RS=206,CS=207,LS=208,PS=209,bS=210,US=0,DS=1,IS=2,Gm=3,NS=4,FS=5,OS=6,BS=7,lv=0,zS=1,kS=2,bo=0,HS=1,GS=2,VS=3,WS=4,XS=5,uv=300,Tc=301,wc=302,Vm=303,Wm=304,lp=306,Xm=1e3,cs=1001,jm=1002,Wi=1003,Gg=1004,dm=1005,Gr=1006,jS=1007,ud=1008,Aa=1009,qS=1010,YS=1011,ng=1012,cv=1013,Ea=1014,Ta=1015,cd=1016,fv=1017,dv=1018,Rl=1020,$S=1021,fs=1023,KS=1024,ZS=1025,Cl=1026,Ac=1027,QS=1028,hv=1029,JS=1030,pv=1031,mv=1033,hm=33776,pm=33777,mm=33778,gm=33779,Vg=35840,Wg=35841,Xg=35842,jg=35843,ey=36196,qg=37492,Yg=37496,$g=37808,Kg=37809,Zg=37810,Qg=37811,Jg=37812,e_=37813,t_=37814,n_=37815,i_=37816,r_=37817,s_=37818,o_=37819,a_=37820,l_=37821,_m=36492,ty=36283,u_=36284,c_=36285,f_=36286,gv=3e3,Ll=3001,ny=3200,iy=3201,ry=0,sy=1,Pl="",Nt="srgb",js="srgb-linear",_v="display-p3",vm=7680,oy=519,ay=512,ly=513,uy=514,cy=515,fy=516,dy=517,hy=518,py=519,d_=35044,h_="300 es",qm=1035,Lo=2e3,op=2001;class Cc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const a=this._listeners;return a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const u=this._listeners[e];if(u!==void 0){const f=u.indexOf(t);f!==-1&&u.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const a=this._listeners[e.type];if(a!==void 0){e.target=this;const u=a.slice(0);for(let f=0,p=u.length;f<p;f++)u[f].call(this,e);e.target=null}}}const Pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=Math.PI/180,Ym=180/Math.PI;function fd(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pi[s&255]+Pi[s>>8&255]+Pi[s>>16&255]+Pi[s>>24&255]+"-"+Pi[e&255]+Pi[e>>8&255]+"-"+Pi[e>>16&15|64]+Pi[e>>24&255]+"-"+Pi[t&63|128]+Pi[t>>8&255]+"-"+Pi[t>>16&255]+Pi[t>>24&255]+Pi[a&255]+Pi[a>>8&255]+Pi[a>>16&255]+Pi[a>>24&255]).toLowerCase()}function or(s,e,t){return Math.max(e,Math.min(t,s))}function my(s,e){return(s%e+e)%e}function Sm(s,e,t){return(1-t)*s+t*e}function p_(s){return(s&s-1)===0&&s!==0}function $m(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oh(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Sr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class fn{constructor(e=0,t=0){fn.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,u=e.elements;return this.x=u[0]*t+u[3]*a+u[6],this.y=u[1]*t+u[4]*a+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(t,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(or(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),u=Math.sin(t),f=this.x-e.x,p=this.y-e.y;return this.x=f*a-p*u+e.x,this.y=f*u+p*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(e,t,a,u,f,p,h,x,v){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,u,f,p,h,x,v)}set(e,t,a,u,f,p,h,x,v){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=t,S[4]=f,S[5]=x,S[6]=a,S[7]=p,S[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,u=t.elements,f=this.elements,p=a[0],h=a[3],x=a[6],v=a[1],S=a[4],M=a[7],E=a[2],A=a[5],P=a[8],L=u[0],T=u[3],y=u[6],H=u[1],D=u[4],O=u[7],W=u[2],q=u[5],X=u[8];return f[0]=p*L+h*H+x*W,f[3]=p*T+h*D+x*q,f[6]=p*y+h*O+x*X,f[1]=v*L+S*H+M*W,f[4]=v*T+S*D+M*q,f[7]=v*y+S*O+M*X,f[2]=E*L+A*H+P*W,f[5]=E*T+A*D+P*q,f[8]=E*y+A*O+P*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],u=e[2],f=e[3],p=e[4],h=e[5],x=e[6],v=e[7],S=e[8];return t*p*S-t*h*v-a*f*S+a*h*x+u*f*v-u*p*x}invert(){const e=this.elements,t=e[0],a=e[1],u=e[2],f=e[3],p=e[4],h=e[5],x=e[6],v=e[7],S=e[8],M=S*p-h*v,E=h*x-S*f,A=v*f-p*x,P=t*M+a*E+u*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=M*L,e[1]=(u*v-S*a)*L,e[2]=(h*a-u*p)*L,e[3]=E*L,e[4]=(S*t-u*x)*L,e[5]=(u*f-h*t)*L,e[6]=A*L,e[7]=(a*x-v*t)*L,e[8]=(p*t-a*f)*L,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,u,f,p,h){const x=Math.cos(f),v=Math.sin(f);return this.set(a*x,a*v,-a*(x*p+v*h)+p+e,-u*v,u*x,-u*(-v*p+x*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(ym.makeScale(e,t)),this}rotate(e){return this.premultiply(ym.makeRotation(-e)),this}translate(e,t){return this.premultiply(ym.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let u=0;u<9;u++)if(t[u]!==a[u])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ym=new Ot;function vv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ap(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const m_={};function ld(s){s in m_||(m_[s]=!0,console.warn(s))}function Mc(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mm(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const gy=new Ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_y=new Ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vy(s){return s.convertSRGBToLinear().applyMatrix3(_y)}function xy(s){return s.applyMatrix3(gy).convertLinearToSRGB()}const Sy={[js]:s=>s,[Nt]:s=>s.convertSRGBToLinear(),[_v]:vy},yy={[js]:s=>s,[Nt]:s=>s.convertLinearToSRGB(),[_v]:xy},ss={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return js},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const a=Sy[e],u=yy[t];if(a===void 0||u===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return u(a(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let nc;class xv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nc===void 0&&(nc=ap("canvas")),nc.width=e.width,nc.height=e.height;const a=nc.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),t=nc}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ap("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const u=a.getImageData(0,0,e.width,e.height),f=u.data;for(let p=0;p<f.length;p++)f[p]=Mc(f[p]/255)*255;return a.putImageData(u,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Mc(t[a]/255)*255):t[a]=Mc(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class Sv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=fd(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let p=0,h=u.length;p<h;p++)u[p].isDataTexture?f.push(Em(u[p].image)):f.push(Em(u[p]))}else f=Em(u);a.url=f}return t||(e.images[this.uuid]=a),a}}function Em(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ey=0;class Er extends Cc{constructor(e=Er.DEFAULT_IMAGE,t=Er.DEFAULT_MAPPING,a=cs,u=cs,f=Gr,p=ud,h=fs,x=Aa,v=Er.DEFAULT_ANISOTROPY,S=Pl){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=fd(),this.name="",this.source=new Sv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=u,this.magFilter=f,this.minFilter=p,this.anisotropy=v,this.format=h,this.internalFormat=null,this.type=x,this.offset=new fn(0,0),this.repeat=new fn(1,1),this.center=new fn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof S=="string"?this.colorSpace=S:(ld("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=S===Ll?Nt:Pl),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xm:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case jm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xm:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case jm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ld("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Ll:gv}set encoding(e){ld("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ll?Nt:Pl}}Er.DEFAULT_IMAGE=null;Er.DEFAULT_MAPPING=uv;Er.DEFAULT_ANISOTROPY=1;class Si{constructor(e=0,t=0,a=0,u=1){Si.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,u){return this.x=e,this.y=t,this.z=a,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,u=this.z,f=this.w,p=e.elements;return this.x=p[0]*t+p[4]*a+p[8]*u+p[12]*f,this.y=p[1]*t+p[5]*a+p[9]*u+p[13]*f,this.z=p[2]*t+p[6]*a+p[10]*u+p[14]*f,this.w=p[3]*t+p[7]*a+p[11]*u+p[15]*f,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,u,f;const x=e.elements,v=x[0],S=x[4],M=x[8],E=x[1],A=x[5],P=x[9],L=x[2],T=x[6],y=x[10];if(Math.abs(S-E)<.01&&Math.abs(M-L)<.01&&Math.abs(P-T)<.01){if(Math.abs(S+E)<.1&&Math.abs(M+L)<.1&&Math.abs(P+T)<.1&&Math.abs(v+A+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(v+1)/2,O=(A+1)/2,W=(y+1)/2,q=(S+E)/4,X=(M+L)/4,fe=(P+T)/4;return D>O&&D>W?D<.01?(a=0,u=.707106781,f=.707106781):(a=Math.sqrt(D),u=q/a,f=X/a):O>W?O<.01?(a=.707106781,u=0,f=.707106781):(u=Math.sqrt(O),a=q/u,f=fe/u):W<.01?(a=.707106781,u=.707106781,f=0):(f=Math.sqrt(W),a=X/f,u=fe/f),this.set(a,u,f,t),this}let H=Math.sqrt((T-P)*(T-P)+(M-L)*(M-L)+(E-S)*(E-S));return Math.abs(H)<.001&&(H=1),this.x=(T-P)/H,this.y=(M-L)/H,this.z=(E-S)/H,this.w=Math.acos((v+A+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(t,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bl extends Cc{constructor(e=1,t=1,a={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Si(0,0,e,t),this.scissorTest=!1,this.viewport=new Si(0,0,e,t);const u={width:e,height:t,depth:1};a.encoding!==void 0&&(ld("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),a.colorSpace=a.encoding===Ll?Nt:Pl),this.texture=new Er(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.internalFormat=a.internalFormat!==void 0?a.internalFormat:null,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Gr,this.depthBuffer=a.depthBuffer!==void 0?a.depthBuffer:!0,this.stencilBuffer=a.stencilBuffer!==void 0?a.stencilBuffer:!1,this.depthTexture=a.depthTexture!==void 0?a.depthTexture:null,this.samples=a.samples!==void 0?a.samples:0}setSize(e,t,a=1){(this.width!==e||this.height!==t||this.depth!==a)&&(this.width=e,this.height=t,this.depth=a,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yv extends Er{constructor(e=null,t=1,a=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:u},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ty extends Er{constructor(e=null,t=1,a=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:u},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dd{constructor(e=0,t=0,a=0,u=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=u}static slerpFlat(e,t,a,u,f,p,h){let x=a[u+0],v=a[u+1],S=a[u+2],M=a[u+3];const E=f[p+0],A=f[p+1],P=f[p+2],L=f[p+3];if(h===0){e[t+0]=x,e[t+1]=v,e[t+2]=S,e[t+3]=M;return}if(h===1){e[t+0]=E,e[t+1]=A,e[t+2]=P,e[t+3]=L;return}if(M!==L||x!==E||v!==A||S!==P){let T=1-h;const y=x*E+v*A+S*P+M*L,H=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const W=Math.sqrt(D),q=Math.atan2(W,y*H);T=Math.sin(T*q)/W,h=Math.sin(h*q)/W}const O=h*H;if(x=x*T+E*O,v=v*T+A*O,S=S*T+P*O,M=M*T+L*O,T===1-h){const W=1/Math.sqrt(x*x+v*v+S*S+M*M);x*=W,v*=W,S*=W,M*=W}}e[t]=x,e[t+1]=v,e[t+2]=S,e[t+3]=M}static multiplyQuaternionsFlat(e,t,a,u,f,p){const h=a[u],x=a[u+1],v=a[u+2],S=a[u+3],M=f[p],E=f[p+1],A=f[p+2],P=f[p+3];return e[t]=h*P+S*M+x*A-v*E,e[t+1]=x*P+S*E+v*M-h*A,e[t+2]=v*P+S*A+h*E-x*M,e[t+3]=S*P-h*M-x*E-v*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,u){return this._x=e,this._y=t,this._z=a,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const a=e._x,u=e._y,f=e._z,p=e._order,h=Math.cos,x=Math.sin,v=h(a/2),S=h(u/2),M=h(f/2),E=x(a/2),A=x(u/2),P=x(f/2);switch(p){case"XYZ":this._x=E*S*M+v*A*P,this._y=v*A*M-E*S*P,this._z=v*S*P+E*A*M,this._w=v*S*M-E*A*P;break;case"YXZ":this._x=E*S*M+v*A*P,this._y=v*A*M-E*S*P,this._z=v*S*P-E*A*M,this._w=v*S*M+E*A*P;break;case"ZXY":this._x=E*S*M-v*A*P,this._y=v*A*M+E*S*P,this._z=v*S*P+E*A*M,this._w=v*S*M-E*A*P;break;case"ZYX":this._x=E*S*M-v*A*P,this._y=v*A*M+E*S*P,this._z=v*S*P-E*A*M,this._w=v*S*M+E*A*P;break;case"YZX":this._x=E*S*M+v*A*P,this._y=v*A*M+E*S*P,this._z=v*S*P-E*A*M,this._w=v*S*M-E*A*P;break;case"XZY":this._x=E*S*M-v*A*P,this._y=v*A*M-E*S*P,this._z=v*S*P+E*A*M,this._w=v*S*M+E*A*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,u=Math.sin(a);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],u=t[4],f=t[8],p=t[1],h=t[5],x=t[9],v=t[2],S=t[6],M=t[10],E=a+h+M;if(E>0){const A=.5/Math.sqrt(E+1);this._w=.25/A,this._x=(S-x)*A,this._y=(f-v)*A,this._z=(p-u)*A}else if(a>h&&a>M){const A=2*Math.sqrt(1+a-h-M);this._w=(S-x)/A,this._x=.25*A,this._y=(u+p)/A,this._z=(f+v)/A}else if(h>M){const A=2*Math.sqrt(1+h-a-M);this._w=(f-v)/A,this._x=(u+p)/A,this._y=.25*A,this._z=(x+S)/A}else{const A=2*Math.sqrt(1+M-a-h);this._w=(p-u)/A,this._x=(f+v)/A,this._y=(x+S)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(or(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const u=Math.min(1,t/a);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,u=e._y,f=e._z,p=e._w,h=t._x,x=t._y,v=t._z,S=t._w;return this._x=a*S+p*h+u*v-f*x,this._y=u*S+p*x+f*h-a*v,this._z=f*S+p*v+a*x-u*h,this._w=p*S-a*h-u*x-f*v,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,u=this._y,f=this._z,p=this._w;let h=p*e._w+a*e._x+u*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=p,this._x=a,this._y=u,this._z=f,this;const x=1-h*h;if(x<=Number.EPSILON){const A=1-t;return this._w=A*p+t*this._w,this._x=A*a+t*this._x,this._y=A*u+t*this._y,this._z=A*f+t*this._z,this.normalize(),this._onChangeCallback(),this}const v=Math.sqrt(x),S=Math.atan2(v,h),M=Math.sin((1-t)*S)/v,E=Math.sin(t*S)/v;return this._w=p*M+this._w*E,this._x=a*M+this._x*E,this._y=u*M+this._y*E,this._z=f*M+this._z*E,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=Math.random(),t=Math.sqrt(1-e),a=Math.sqrt(e),u=2*Math.PI*Math.random(),f=2*Math.PI*Math.random();return this.set(t*Math.cos(u),a*Math.sin(f),a*Math.cos(f),t*Math.sin(u))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,t=0,a=0){he.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,u=this.z,f=e.elements;return this.x=f[0]*t+f[3]*a+f[6]*u,this.y=f[1]*t+f[4]*a+f[7]*u,this.z=f[2]*t+f[5]*a+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,u=this.z,f=e.elements,p=1/(f[3]*t+f[7]*a+f[11]*u+f[15]);return this.x=(f[0]*t+f[4]*a+f[8]*u+f[12])*p,this.y=(f[1]*t+f[5]*a+f[9]*u+f[13])*p,this.z=(f[2]*t+f[6]*a+f[10]*u+f[14])*p,this}applyQuaternion(e){const t=this.x,a=this.y,u=this.z,f=e.x,p=e.y,h=e.z,x=e.w,v=x*t+p*u-h*a,S=x*a+h*t-f*u,M=x*u+f*a-p*t,E=-f*t-p*a-h*u;return this.x=v*x+E*-f+S*-h-M*-p,this.y=S*x+E*-p+M*-f-v*-h,this.z=M*x+E*-h+v*-p-S*-f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,u=this.z,f=e.elements;return this.x=f[0]*t+f[4]*a+f[8]*u,this.y=f[1]*t+f[5]*a+f[9]*u,this.z=f[2]*t+f[6]*a+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(t,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,u=e.y,f=e.z,p=t.x,h=t.y,x=t.z;return this.x=u*x-f*h,this.y=f*p-a*x,this.z=a*h-u*p,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Tm.copy(this).projectOnVector(e),this.sub(Tm)}reflect(e){return this.sub(Tm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(or(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,u=this.z-e.z;return t*t+a*a+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const u=Math.sin(t)*e;return this.x=u*Math.sin(a),this.y=Math.cos(t)*e,this.z=u*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=u,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,a=Math.sqrt(1-e**2);return this.x=a*Math.cos(t),this.y=a*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tm=new he,g_=new dd;class hd{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(yo.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(yo.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=yo.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox),ic.applyMatrix4(e.matrixWorld),this.union(ic);else{const u=e.geometry;if(u!==void 0)if(t&&u.attributes!==void 0&&u.attributes.position!==void 0){const f=u.attributes.position;for(let p=0,h=f.count;p<h;p++)yo.fromBufferAttribute(f,p).applyMatrix4(e.matrixWorld),this.expandByPoint(yo)}else u.boundingBox===null&&u.computeBoundingBox(),ic.copy(u.boundingBox),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yo),yo.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nd),Bh.subVectors(this.max,nd),rc.subVectors(e.a,nd),sc.subVectors(e.b,nd),oc.subVectors(e.c,nd),xa.subVectors(sc,rc),Sa.subVectors(oc,sc),vl.subVectors(rc,oc);let t=[0,-xa.z,xa.y,0,-Sa.z,Sa.y,0,-vl.z,vl.y,xa.z,0,-xa.x,Sa.z,0,-Sa.x,vl.z,0,-vl.x,-xa.y,xa.x,0,-Sa.y,Sa.x,0,-vl.y,vl.x,0];return!wm(t,rc,sc,oc,Bh)||(t=[1,0,0,0,1,0,0,0,1],!wm(t,rc,sc,oc,Bh))?!1:(zh.crossVectors(xa,Sa),t=[zh.x,zh.y,zh.z],wm(t,rc,sc,oc,Bh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yo).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yo).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(So[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),So[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),So[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),So[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),So[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),So[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),So[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),So[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(So),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const So=[new he,new he,new he,new he,new he,new he,new he,new he],yo=new he,ic=new hd,rc=new he,sc=new he,oc=new he,xa=new he,Sa=new he,vl=new he,nd=new he,Bh=new he,zh=new he,xl=new he;function wm(s,e,t,a,u){for(let f=0,p=s.length-3;f<=p;f+=3){xl.fromArray(s,f);const h=u.x*Math.abs(xl.x)+u.y*Math.abs(xl.y)+u.z*Math.abs(xl.z),x=e.dot(xl),v=t.dot(xl),S=a.dot(xl);if(Math.max(-Math.max(x,v,S),Math.min(x,v,S))>h)return!1}return!0}const wy=new hd,id=new he,Am=new he;class ig{constructor(e=new he,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):wy.setFromPoints(e).getCenter(a);let u=0;for(let f=0,p=e.length;f<p;f++)u=Math.max(u,a.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;id.subVectors(e,this.center);const t=id.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),u=(a-this.radius)*.5;this.center.addScaledVector(id,u/a),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Am.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(id.copy(e.center).add(Am)),this.expandByPoint(id.copy(e.center).sub(Am))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mo=new he,Rm=new he,kh=new he,ya=new he,Cm=new he,Hh=new he,Lm=new he;class Ay{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mo)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mo.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mo.copy(this.origin).addScaledVector(this.direction,t),Mo.distanceToSquared(e))}distanceSqToSegment(e,t,a,u){Rm.copy(e).add(t).multiplyScalar(.5),kh.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(Rm);const f=e.distanceTo(t)*.5,p=-this.direction.dot(kh),h=ya.dot(this.direction),x=-ya.dot(kh),v=ya.lengthSq(),S=Math.abs(1-p*p);let M,E,A,P;if(S>0)if(M=p*x-h,E=p*h-x,P=f*S,M>=0)if(E>=-P)if(E<=P){const L=1/S;M*=L,E*=L,A=M*(M+p*E+2*h)+E*(p*M+E+2*x)+v}else E=f,M=Math.max(0,-(p*E+h)),A=-M*M+E*(E+2*x)+v;else E=-f,M=Math.max(0,-(p*E+h)),A=-M*M+E*(E+2*x)+v;else E<=-P?(M=Math.max(0,-(-p*f+h)),E=M>0?-f:Math.min(Math.max(-f,-x),f),A=-M*M+E*(E+2*x)+v):E<=P?(M=0,E=Math.min(Math.max(-f,-x),f),A=E*(E+2*x)+v):(M=Math.max(0,-(p*f+h)),E=M>0?f:Math.min(Math.max(-f,-x),f),A=-M*M+E*(E+2*x)+v);else E=p>0?-f:f,M=Math.max(0,-(p*E+h)),A=-M*M+E*(E+2*x)+v;return a&&a.copy(this.origin).addScaledVector(this.direction,M),u&&u.copy(Rm).addScaledVector(kh,E),A}intersectSphere(e,t){Mo.subVectors(e.center,this.origin);const a=Mo.dot(this.direction),u=Mo.dot(Mo)-a*a,f=e.radius*e.radius;if(u>f)return null;const p=Math.sqrt(f-u),h=a-p,x=a+p;return x<0?null:h<0?this.at(x,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,u,f,p,h,x;const v=1/this.direction.x,S=1/this.direction.y,M=1/this.direction.z,E=this.origin;return v>=0?(a=(e.min.x-E.x)*v,u=(e.max.x-E.x)*v):(a=(e.max.x-E.x)*v,u=(e.min.x-E.x)*v),S>=0?(f=(e.min.y-E.y)*S,p=(e.max.y-E.y)*S):(f=(e.max.y-E.y)*S,p=(e.min.y-E.y)*S),a>p||f>u||((f>a||isNaN(a))&&(a=f),(p<u||isNaN(u))&&(u=p),M>=0?(h=(e.min.z-E.z)*M,x=(e.max.z-E.z)*M):(h=(e.max.z-E.z)*M,x=(e.min.z-E.z)*M),a>x||h>u)||((h>a||a!==a)&&(a=h),(x<u||u!==u)&&(u=x),u<0)?null:this.at(a>=0?a:u,t)}intersectsBox(e){return this.intersectBox(e,Mo)!==null}intersectTriangle(e,t,a,u,f){Cm.subVectors(t,e),Hh.subVectors(a,e),Lm.crossVectors(Cm,Hh);let p=this.direction.dot(Lm),h;if(p>0){if(u)return null;h=1}else if(p<0)h=-1,p=-p;else return null;ya.subVectors(this.origin,e);const x=h*this.direction.dot(Hh.crossVectors(ya,Hh));if(x<0)return null;const v=h*this.direction.dot(Cm.cross(ya));if(v<0||x+v>p)return null;const S=-h*ya.dot(Lm);return S<0?null:this.at(S/p,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yi{constructor(e,t,a,u,f,p,h,x,v,S,M,E,A,P,L,T){yi.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,u,f,p,h,x,v,S,M,E,A,P,L,T)}set(e,t,a,u,f,p,h,x,v,S,M,E,A,P,L,T){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=u,y[1]=f,y[5]=p,y[9]=h,y[13]=x,y[2]=v,y[6]=S,y[10]=M,y[14]=E,y[3]=A,y[7]=P,y[11]=L,y[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yi().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,u=1/ac.setFromMatrixColumn(e,0).length(),f=1/ac.setFromMatrixColumn(e,1).length(),p=1/ac.setFromMatrixColumn(e,2).length();return t[0]=a[0]*u,t[1]=a[1]*u,t[2]=a[2]*u,t[3]=0,t[4]=a[4]*f,t[5]=a[5]*f,t[6]=a[6]*f,t[7]=0,t[8]=a[8]*p,t[9]=a[9]*p,t[10]=a[10]*p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,u=e.y,f=e.z,p=Math.cos(a),h=Math.sin(a),x=Math.cos(u),v=Math.sin(u),S=Math.cos(f),M=Math.sin(f);if(e.order==="XYZ"){const E=p*S,A=p*M,P=h*S,L=h*M;t[0]=x*S,t[4]=-x*M,t[8]=v,t[1]=A+P*v,t[5]=E-L*v,t[9]=-h*x,t[2]=L-E*v,t[6]=P+A*v,t[10]=p*x}else if(e.order==="YXZ"){const E=x*S,A=x*M,P=v*S,L=v*M;t[0]=E+L*h,t[4]=P*h-A,t[8]=p*v,t[1]=p*M,t[5]=p*S,t[9]=-h,t[2]=A*h-P,t[6]=L+E*h,t[10]=p*x}else if(e.order==="ZXY"){const E=x*S,A=x*M,P=v*S,L=v*M;t[0]=E-L*h,t[4]=-p*M,t[8]=P+A*h,t[1]=A+P*h,t[5]=p*S,t[9]=L-E*h,t[2]=-p*v,t[6]=h,t[10]=p*x}else if(e.order==="ZYX"){const E=p*S,A=p*M,P=h*S,L=h*M;t[0]=x*S,t[4]=P*v-A,t[8]=E*v+L,t[1]=x*M,t[5]=L*v+E,t[9]=A*v-P,t[2]=-v,t[6]=h*x,t[10]=p*x}else if(e.order==="YZX"){const E=p*x,A=p*v,P=h*x,L=h*v;t[0]=x*S,t[4]=L-E*M,t[8]=P*M+A,t[1]=M,t[5]=p*S,t[9]=-h*S,t[2]=-v*S,t[6]=A*M+P,t[10]=E-L*M}else if(e.order==="XZY"){const E=p*x,A=p*v,P=h*x,L=h*v;t[0]=x*S,t[4]=-M,t[8]=v*S,t[1]=E*M+L,t[5]=p*S,t[9]=A*M-P,t[2]=P*M-A,t[6]=h*S,t[10]=L*M+E}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Cy)}lookAt(e,t,a){const u=this.elements;return yr.subVectors(e,t),yr.lengthSq()===0&&(yr.z=1),yr.normalize(),Ma.crossVectors(a,yr),Ma.lengthSq()===0&&(Math.abs(a.z)===1?yr.x+=1e-4:yr.z+=1e-4,yr.normalize(),Ma.crossVectors(a,yr)),Ma.normalize(),Gh.crossVectors(yr,Ma),u[0]=Ma.x,u[4]=Gh.x,u[8]=yr.x,u[1]=Ma.y,u[5]=Gh.y,u[9]=yr.y,u[2]=Ma.z,u[6]=Gh.z,u[10]=yr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,u=t.elements,f=this.elements,p=a[0],h=a[4],x=a[8],v=a[12],S=a[1],M=a[5],E=a[9],A=a[13],P=a[2],L=a[6],T=a[10],y=a[14],H=a[3],D=a[7],O=a[11],W=a[15],q=u[0],X=u[4],fe=u[8],I=u[12],G=u[1],Me=u[5],Re=u[9],se=u[13],de=u[2],me=u[6],Ee=u[10],ue=u[14],Z=u[3],pe=u[7],U=u[11],k=u[15];return f[0]=p*q+h*G+x*de+v*Z,f[4]=p*X+h*Me+x*me+v*pe,f[8]=p*fe+h*Re+x*Ee+v*U,f[12]=p*I+h*se+x*ue+v*k,f[1]=S*q+M*G+E*de+A*Z,f[5]=S*X+M*Me+E*me+A*pe,f[9]=S*fe+M*Re+E*Ee+A*U,f[13]=S*I+M*se+E*ue+A*k,f[2]=P*q+L*G+T*de+y*Z,f[6]=P*X+L*Me+T*me+y*pe,f[10]=P*fe+L*Re+T*Ee+y*U,f[14]=P*I+L*se+T*ue+y*k,f[3]=H*q+D*G+O*de+W*Z,f[7]=H*X+D*Me+O*me+W*pe,f[11]=H*fe+D*Re+O*Ee+W*U,f[15]=H*I+D*se+O*ue+W*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],u=e[8],f=e[12],p=e[1],h=e[5],x=e[9],v=e[13],S=e[2],M=e[6],E=e[10],A=e[14],P=e[3],L=e[7],T=e[11],y=e[15];return P*(+f*x*M-u*v*M-f*h*E+a*v*E+u*h*A-a*x*A)+L*(+t*x*A-t*v*E+f*p*E-u*p*A+u*v*S-f*x*S)+T*(+t*v*M-t*h*A-f*p*M+a*p*A+f*h*S-a*v*S)+y*(-u*h*S-t*x*M+t*h*E+u*p*M-a*p*E+a*x*S)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=t,u[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],u=e[2],f=e[3],p=e[4],h=e[5],x=e[6],v=e[7],S=e[8],M=e[9],E=e[10],A=e[11],P=e[12],L=e[13],T=e[14],y=e[15],H=M*T*v-L*E*v+L*x*A-h*T*A-M*x*y+h*E*y,D=P*E*v-S*T*v-P*x*A+p*T*A+S*x*y-p*E*y,O=S*L*v-P*M*v+P*h*A-p*L*A-S*h*y+p*M*y,W=P*M*x-S*L*x-P*h*E+p*L*E+S*h*T-p*M*T,q=t*H+a*D+u*O+f*W;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/q;return e[0]=H*X,e[1]=(L*E*f-M*T*f-L*u*A+a*T*A+M*u*y-a*E*y)*X,e[2]=(h*T*f-L*x*f+L*u*v-a*T*v-h*u*y+a*x*y)*X,e[3]=(M*x*f-h*E*f-M*u*v+a*E*v+h*u*A-a*x*A)*X,e[4]=D*X,e[5]=(S*T*f-P*E*f+P*u*A-t*T*A-S*u*y+t*E*y)*X,e[6]=(P*x*f-p*T*f-P*u*v+t*T*v+p*u*y-t*x*y)*X,e[7]=(p*E*f-S*x*f+S*u*v-t*E*v-p*u*A+t*x*A)*X,e[8]=O*X,e[9]=(P*M*f-S*L*f-P*a*A+t*L*A+S*a*y-t*M*y)*X,e[10]=(p*L*f-P*h*f+P*a*v-t*L*v-p*a*y+t*h*y)*X,e[11]=(S*h*f-p*M*f-S*a*v+t*M*v+p*a*A-t*h*A)*X,e[12]=W*X,e[13]=(S*L*u-P*M*u+P*a*E-t*L*E-S*a*T+t*M*T)*X,e[14]=(P*h*u-p*L*u-P*a*x+t*L*x+p*a*T-t*h*T)*X,e[15]=(p*M*u-S*h*u+S*a*x-t*M*x-p*a*E+t*h*E)*X,this}scale(e){const t=this.elements,a=e.x,u=e.y,f=e.z;return t[0]*=a,t[4]*=u,t[8]*=f,t[1]*=a,t[5]*=u,t[9]*=f,t[2]*=a,t[6]*=u,t[10]*=f,t[3]*=a,t[7]*=u,t[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,u))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),u=Math.sin(t),f=1-a,p=e.x,h=e.y,x=e.z,v=f*p,S=f*h;return this.set(v*p+a,v*h-u*x,v*x+u*h,0,v*h+u*x,S*h+a,S*x-u*p,0,v*x-u*h,S*x+u*p,f*x*x+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,u,f,p){return this.set(1,a,f,0,e,1,p,0,t,u,1,0,0,0,0,1),this}compose(e,t,a){const u=this.elements,f=t._x,p=t._y,h=t._z,x=t._w,v=f+f,S=p+p,M=h+h,E=f*v,A=f*S,P=f*M,L=p*S,T=p*M,y=h*M,H=x*v,D=x*S,O=x*M,W=a.x,q=a.y,X=a.z;return u[0]=(1-(L+y))*W,u[1]=(A+O)*W,u[2]=(P-D)*W,u[3]=0,u[4]=(A-O)*q,u[5]=(1-(E+y))*q,u[6]=(T+H)*q,u[7]=0,u[8]=(P+D)*X,u[9]=(T-H)*X,u[10]=(1-(E+L))*X,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,t,a){const u=this.elements;let f=ac.set(u[0],u[1],u[2]).length();const p=ac.set(u[4],u[5],u[6]).length(),h=ac.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],os.copy(this);const v=1/f,S=1/p,M=1/h;return os.elements[0]*=v,os.elements[1]*=v,os.elements[2]*=v,os.elements[4]*=S,os.elements[5]*=S,os.elements[6]*=S,os.elements[8]*=M,os.elements[9]*=M,os.elements[10]*=M,t.setFromRotationMatrix(os),a.x=f,a.y=p,a.z=h,this}makePerspective(e,t,a,u,f,p,h=Lo){const x=this.elements,v=2*f/(t-e),S=2*f/(a-u),M=(t+e)/(t-e),E=(a+u)/(a-u);let A,P;if(h===Lo)A=-(p+f)/(p-f),P=-2*p*f/(p-f);else if(h===op)A=-p/(p-f),P=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return x[0]=v,x[4]=0,x[8]=M,x[12]=0,x[1]=0,x[5]=S,x[9]=E,x[13]=0,x[2]=0,x[6]=0,x[10]=A,x[14]=P,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(e,t,a,u,f,p,h=Lo){const x=this.elements,v=1/(t-e),S=1/(a-u),M=1/(p-f),E=(t+e)*v,A=(a+u)*S;let P,L;if(h===Lo)P=(p+f)*M,L=-2*M;else if(h===op)P=f*M,L=-1*M;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return x[0]=2*v,x[4]=0,x[8]=0,x[12]=-E,x[1]=0,x[5]=2*S,x[9]=0,x[13]=-A,x[2]=0,x[6]=0,x[10]=L,x[14]=-P,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let u=0;u<16;u++)if(t[u]!==a[u])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const ac=new he,os=new yi,Ry=new he(0,0,0),Cy=new he(1,1,1),Ma=new he,Gh=new he,yr=new he,__=new yi,v_=new dd;class up{constructor(e=0,t=0,a=0,u=up.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,u=this._order){return this._x=e,this._y=t,this._z=a,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const u=e.elements,f=u[0],p=u[4],h=u[8],x=u[1],v=u[5],S=u[9],M=u[2],E=u[6],A=u[10];switch(t){case"XYZ":this._y=Math.asin(or(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,A),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(E,v),this._z=0);break;case"YXZ":this._x=Math.asin(-or(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,A),this._z=Math.atan2(x,v)):(this._y=Math.atan2(-M,f),this._z=0);break;case"ZXY":this._x=Math.asin(or(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-M,A),this._z=Math.atan2(-p,v)):(this._y=0,this._z=Math.atan2(x,f));break;case"ZYX":this._y=Math.asin(-or(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(E,A),this._z=Math.atan2(x,f)):(this._x=0,this._z=Math.atan2(-p,v));break;case"YZX":this._z=Math.asin(or(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-S,v),this._y=Math.atan2(-M,f)):(this._x=0,this._y=Math.atan2(h,A));break;case"XZY":this._z=Math.asin(-or(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,v),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return __.makeRotationFromQuaternion(e),this.setFromRotationMatrix(__,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return v_.setFromEuler(this),this.setFromQuaternion(v_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}up.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ly=0;const x_=new he,lc=new dd,Eo=new yi,Vh=new he,rd=new he,Py=new he,by=new dd,S_=new he(1,0,0),y_=new he(0,1,0),M_=new he(0,0,1),Uy={type:"added"},E_={type:"removed"};class Tr extends Cc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=fd(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tr.DEFAULT_UP.clone();const e=new he,t=new up,a=new dd,u=new he(1,1,1);function f(){a.setFromEuler(t,!1)}function p(){t.setFromQuaternion(a,void 0,!1)}t._onChange(f),a._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new yi},normalMatrix:{value:new Ot}}),this.matrix=new yi,this.matrixWorld=new yi,this.matrixAutoUpdate=Tr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lc.setFromAxisAngle(e,t),this.quaternion.multiply(lc),this}rotateOnWorldAxis(e,t){return lc.setFromAxisAngle(e,t),this.quaternion.premultiply(lc),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(M_,e)}translateOnAxis(e,t){return x_.copy(e).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(M_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Eo.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Vh.copy(e):Vh.set(e,t,a);const u=this.parent;this.updateWorldMatrix(!0,!1),rd.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Eo.lookAt(rd,Vh,this.up):Eo.lookAt(Vh,rd,this.up),this.quaternion.setFromRotationMatrix(Eo),u&&(Eo.extractRotation(u.matrixWorld),lc.setFromRotationMatrix(Eo),this.quaternion.premultiply(lc.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(E_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Eo.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Eo.multiply(e.parent.matrixWorld)),e.applyMatrix4(Eo),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,u=this.children.length;a<u;a++){const p=this.children[a].getObjectByProperty(e,t);if(p!==void 0)return p}}getObjectsByProperty(e,t){let a=[];this[e]===t&&a.push(this);for(let u=0,f=this.children.length;u<f;u++){const p=this.children[u].getObjectsByProperty(e,t);p.length>0&&(a=a.concat(p))}return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rd,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rd,by,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,u=t.length;a<u;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,u=t.length;a<u;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,u=t.length;a<u;a++){const f=t[a];(f.matrixWorldAutoUpdate===!0||e===!0)&&f.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const u=this.children;for(let f=0,p=u.length;f<p;f++){const h=u[f];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON()));function f(h,x){return h[x.uuid]===void 0&&(h[x.uuid]=x.toJSON(e)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const x=h.shapes;if(Array.isArray(x))for(let v=0,S=x.length;v<S;v++){const M=x[v];f(e.shapes,M)}else f(e.shapes,x)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let x=0,v=this.material.length;x<v;x++)h.push(f(e.materials,this.material[x]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const x=this.animations[h];u.animations.push(f(e.animations,x))}}if(t){const h=p(e.geometries),x=p(e.materials),v=p(e.textures),S=p(e.images),M=p(e.shapes),E=p(e.skeletons),A=p(e.animations),P=p(e.nodes);h.length>0&&(a.geometries=h),x.length>0&&(a.materials=x),v.length>0&&(a.textures=v),S.length>0&&(a.images=S),M.length>0&&(a.shapes=M),E.length>0&&(a.skeletons=E),A.length>0&&(a.animations=A),P.length>0&&(a.nodes=P)}return a.object=u,a;function p(h){const x=[];for(const v in h){const S=h[v];delete S.metadata,x.push(S)}return x}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const u=e.children[a];this.add(u.clone())}return this}}Tr.DEFAULT_UP=new he(0,1,0);Tr.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const as=new he,To=new he,Pm=new he,wo=new he,uc=new he,cc=new he,T_=new he,bm=new he,Um=new he,Dm=new he;let Wh=!1;class us{constructor(e=new he,t=new he,a=new he){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,u){u.subVectors(a,t),as.subVectors(e,t),u.cross(as);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,t,a,u,f){as.subVectors(u,t),To.subVectors(a,t),Pm.subVectors(e,t);const p=as.dot(as),h=as.dot(To),x=as.dot(Pm),v=To.dot(To),S=To.dot(Pm),M=p*v-h*h;if(M===0)return f.set(-2,-1,-1);const E=1/M,A=(v*x-h*S)*E,P=(p*S-h*x)*E;return f.set(1-A-P,P,A)}static containsPoint(e,t,a,u){return this.getBarycoord(e,t,a,u,wo),wo.x>=0&&wo.y>=0&&wo.x+wo.y<=1}static getUV(e,t,a,u,f,p,h,x){return Wh===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wh=!0),this.getInterpolation(e,t,a,u,f,p,h,x)}static getInterpolation(e,t,a,u,f,p,h,x){return this.getBarycoord(e,t,a,u,wo),x.setScalar(0),x.addScaledVector(f,wo.x),x.addScaledVector(p,wo.y),x.addScaledVector(h,wo.z),x}static isFrontFacing(e,t,a,u){return as.subVectors(a,t),To.subVectors(e,t),as.cross(To).dot(u)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,u){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,t,a,u){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return as.subVectors(this.c,this.b),To.subVectors(this.a,this.b),as.cross(To).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return us.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return us.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,a,u,f){return Wh===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wh=!0),us.getInterpolation(e,this.a,this.b,this.c,t,a,u,f)}getInterpolation(e,t,a,u,f){return us.getInterpolation(e,this.a,this.b,this.c,t,a,u,f)}containsPoint(e){return us.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return us.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,u=this.b,f=this.c;let p,h;uc.subVectors(u,a),cc.subVectors(f,a),bm.subVectors(e,a);const x=uc.dot(bm),v=cc.dot(bm);if(x<=0&&v<=0)return t.copy(a);Um.subVectors(e,u);const S=uc.dot(Um),M=cc.dot(Um);if(S>=0&&M<=S)return t.copy(u);const E=x*M-S*v;if(E<=0&&x>=0&&S<=0)return p=x/(x-S),t.copy(a).addScaledVector(uc,p);Dm.subVectors(e,f);const A=uc.dot(Dm),P=cc.dot(Dm);if(P>=0&&A<=P)return t.copy(f);const L=A*v-x*P;if(L<=0&&v>=0&&P<=0)return h=v/(v-P),t.copy(a).addScaledVector(cc,h);const T=S*P-A*M;if(T<=0&&M-S>=0&&A-P>=0)return T_.subVectors(f,u),h=(M-S)/(M-S+(A-P)),t.copy(u).addScaledVector(T_,h);const y=1/(T+L+E);return p=L*y,h=E*y,t.copy(a).addScaledVector(uc,p).addScaledVector(cc,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dy=0;class cp extends Cc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=fd(),this.name="",this.type="Material",this.blending=yc,this.side=Ra,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ov,this.blendDst=av,this.blendEquation=vc,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gm,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vm,this.stencilZFail=vm,this.stencilZPass=vm,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const u=this[t];if(u===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(a):u&&u.isVector3&&a&&a.isVector3?u.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==yc&&(a.blending=this.blending),this.side!==Ra&&(a.side=this.side),this.vertexColors&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=this.transparent),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(a.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(a.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(a.wireframe=this.wireframe),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=this.flatShading),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function u(f){const p=[];for(const h in f){const x=f[h];delete x.metadata,p.push(x)}return p}if(t){const f=u(e.textures),p=u(e.images);f.length>0&&(a.textures=f),p.length>0&&(a.images=p)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const u=t.length;a=new Array(u);for(let f=0;f!==u;++f)a[f]=t[f].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Xh={h:0,s:0,l:0};function Im(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gn{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ss.toWorkingColorSpace(this,t),this}setRGB(e,t,a,u=ss.workingColorSpace){return this.r=e,this.g=t,this.b=a,ss.toWorkingColorSpace(this,u),this}setHSL(e,t,a,u=ss.workingColorSpace){if(e=my(e,1),t=or(t,0,1),a=or(a,0,1),t===0)this.r=this.g=this.b=a;else{const f=a<=.5?a*(1+t):a+t-a*t,p=2*a-f;this.r=Im(p,f,e+1/3),this.g=Im(p,f,e),this.b=Im(p,f,e-1/3)}return ss.toWorkingColorSpace(this,u),this}setStyle(e,t=Nt){function a(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const p=u[1],h=u[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,t);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,t);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,t);if(p===6)return this.setHex(parseInt(f,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const a=Ev[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mc(e.r),this.g=Mc(e.g),this.b=Mc(e.b),this}copyLinearToSRGB(e){return this.r=Mm(e.r),this.g=Mm(e.g),this.b=Mm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ss.fromWorkingColorSpace(bi.copy(this),e),Math.round(or(bi.r*255,0,255))*65536+Math.round(or(bi.g*255,0,255))*256+Math.round(or(bi.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ss.workingColorSpace){ss.fromWorkingColorSpace(bi.copy(this),t);const a=bi.r,u=bi.g,f=bi.b,p=Math.max(a,u,f),h=Math.min(a,u,f);let x,v;const S=(h+p)/2;if(h===p)x=0,v=0;else{const M=p-h;switch(v=S<=.5?M/(p+h):M/(2-p-h),p){case a:x=(u-f)/M+(u<f?6:0);break;case u:x=(f-a)/M+2;break;case f:x=(a-u)/M+4;break}x/=6}return e.h=x,e.s=v,e.l=S,e}getRGB(e,t=ss.workingColorSpace){return ss.fromWorkingColorSpace(bi.copy(this),t),e.r=bi.r,e.g=bi.g,e.b=bi.b,e}getStyle(e=Nt){ss.fromWorkingColorSpace(bi.copy(this),e);const t=bi.r,a=bi.g,u=bi.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(u*255)})`}offsetHSL(e,t,a){return this.getHSL(ls),ls.h+=e,ls.s+=t,ls.l+=a,this.setHSL(ls.h,ls.s,ls.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Xh);const a=Sm(ls.h,Xh.h,t),u=Sm(ls.s,Xh.s,t),f=Sm(ls.l,Xh.l,t);return this.setHSL(a,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,u=this.b,f=e.elements;return this.r=f[0]*t+f[3]*a+f[6]*u,this.g=f[1]*t+f[4]*a+f[7]*u,this.b=f[2]*t+f[5]*a+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bi=new gn;gn.NAMES=Ev;class rg extends cp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xn=new he,jh=new fn;class wr{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=d_,this.updateRange={offset:0,count:-1},this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=t.array[a+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)jh.fromBufferAttribute(this,t),jh.applyMatrix3(e),this.setXY(t,jh.x,jh.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oh(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oh(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oh(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oh(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Sr(t,this.array),a=Sr(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,u){return e*=this.itemSize,this.normalized&&(t=Sr(t,this.array),a=Sr(a,this.array),u=Sr(u,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=u,this}setXYZW(e,t,a,u,f){return e*=this.itemSize,this.normalized&&(t=Sr(t,this.array),a=Sr(a,this.array),u=Sr(u,this.array),f=Sr(f,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Tv extends wr{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class wv extends wr{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Uo extends wr{constructor(e,t,a){super(new Float32Array(e),t,a)}}let Iy=0;const Hr=new yi,Nm=new Tr,fc=new he,Mr=new hd,sd=new hd,fi=new he;class Do extends Cc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=fd(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?wv:Tv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const f=new Ot().getNormalMatrix(e);a.applyNormalMatrix(f),a.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,t,a){return Hr.makeTranslation(e,t,a),this.applyMatrix4(Hr),this}scale(e,t,a){return Hr.makeScale(e,t,a),this.applyMatrix4(Hr),this}lookAt(e){return Nm.lookAt(e),Nm.updateMatrix(),this.applyMatrix4(Nm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fc).negate(),this.translate(fc.x,fc.y,fc.z),this}setFromPoints(e){const t=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];t.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new Uo(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const f=t[a];Mr.setFromBufferAttribute(f),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,Mr.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,Mr.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(Mr.min),this.boundingBox.expandByPoint(Mr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ig);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new he,1/0);return}if(e){const a=this.boundingSphere.center;if(Mr.setFromBufferAttribute(e),t)for(let f=0,p=t.length;f<p;f++){const h=t[f];sd.setFromBufferAttribute(h),this.morphTargetsRelative?(fi.addVectors(Mr.min,sd.min),Mr.expandByPoint(fi),fi.addVectors(Mr.max,sd.max),Mr.expandByPoint(fi)):(Mr.expandByPoint(sd.min),Mr.expandByPoint(sd.max))}Mr.getCenter(a);let u=0;for(let f=0,p=e.count;f<p;f++)fi.fromBufferAttribute(e,f),u=Math.max(u,a.distanceToSquared(fi));if(t)for(let f=0,p=t.length;f<p;f++){const h=t[f],x=this.morphTargetsRelative;for(let v=0,S=h.count;v<S;v++)fi.fromBufferAttribute(h,v),x&&(fc.fromBufferAttribute(e,v),fi.add(fc)),u=Math.max(u,a.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.array,u=t.position.array,f=t.normal.array,p=t.uv.array,h=u.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wr(new Float32Array(4*h),4));const x=this.getAttribute("tangent").array,v=[],S=[];for(let G=0;G<h;G++)v[G]=new he,S[G]=new he;const M=new he,E=new he,A=new he,P=new fn,L=new fn,T=new fn,y=new he,H=new he;function D(G,Me,Re){M.fromArray(u,G*3),E.fromArray(u,Me*3),A.fromArray(u,Re*3),P.fromArray(p,G*2),L.fromArray(p,Me*2),T.fromArray(p,Re*2),E.sub(M),A.sub(M),L.sub(P),T.sub(P);const se=1/(L.x*T.y-T.x*L.y);isFinite(se)&&(y.copy(E).multiplyScalar(T.y).addScaledVector(A,-L.y).multiplyScalar(se),H.copy(A).multiplyScalar(L.x).addScaledVector(E,-T.x).multiplyScalar(se),v[G].add(y),v[Me].add(y),v[Re].add(y),S[G].add(H),S[Me].add(H),S[Re].add(H))}let O=this.groups;O.length===0&&(O=[{start:0,count:a.length}]);for(let G=0,Me=O.length;G<Me;++G){const Re=O[G],se=Re.start,de=Re.count;for(let me=se,Ee=se+de;me<Ee;me+=3)D(a[me+0],a[me+1],a[me+2])}const W=new he,q=new he,X=new he,fe=new he;function I(G){X.fromArray(f,G*3),fe.copy(X);const Me=v[G];W.copy(Me),W.sub(X.multiplyScalar(X.dot(Me))).normalize(),q.crossVectors(fe,Me);const se=q.dot(S[G])<0?-1:1;x[G*4]=W.x,x[G*4+1]=W.y,x[G*4+2]=W.z,x[G*4+3]=se}for(let G=0,Me=O.length;G<Me;++G){const Re=O[G],se=Re.start,de=Re.count;for(let me=se,Ee=se+de;me<Ee;me+=3)I(a[me+0]),I(a[me+1]),I(a[me+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new wr(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let E=0,A=a.count;E<A;E++)a.setXYZ(E,0,0,0);const u=new he,f=new he,p=new he,h=new he,x=new he,v=new he,S=new he,M=new he;if(e)for(let E=0,A=e.count;E<A;E+=3){const P=e.getX(E+0),L=e.getX(E+1),T=e.getX(E+2);u.fromBufferAttribute(t,P),f.fromBufferAttribute(t,L),p.fromBufferAttribute(t,T),S.subVectors(p,f),M.subVectors(u,f),S.cross(M),h.fromBufferAttribute(a,P),x.fromBufferAttribute(a,L),v.fromBufferAttribute(a,T),h.add(S),x.add(S),v.add(S),a.setXYZ(P,h.x,h.y,h.z),a.setXYZ(L,x.x,x.y,x.z),a.setXYZ(T,v.x,v.y,v.z)}else for(let E=0,A=t.count;E<A;E+=3)u.fromBufferAttribute(t,E+0),f.fromBufferAttribute(t,E+1),p.fromBufferAttribute(t,E+2),S.subVectors(p,f),M.subVectors(u,f),S.cross(M),a.setXYZ(E+0,S.x,S.y,S.z),a.setXYZ(E+1,S.x,S.y,S.z),a.setXYZ(E+2,S.x,S.y,S.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)fi.fromBufferAttribute(e,t),fi.normalize(),e.setXYZ(t,fi.x,fi.y,fi.z)}toNonIndexed(){function e(h,x){const v=h.array,S=h.itemSize,M=h.normalized,E=new v.constructor(x.length*S);let A=0,P=0;for(let L=0,T=x.length;L<T;L++){h.isInterleavedBufferAttribute?A=x[L]*h.data.stride+h.offset:A=x[L]*S;for(let y=0;y<S;y++)E[P++]=v[A++]}return new wr(E,S,M)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Do,a=this.index.array,u=this.attributes;for(const h in u){const x=u[h],v=e(x,a);t.setAttribute(h,v)}const f=this.morphAttributes;for(const h in f){const x=[],v=f[h];for(let S=0,M=v.length;S<M;S++){const E=v[S],A=e(E,a);x.push(A)}t.morphAttributes[h]=x}t.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let h=0,x=p.length;h<x;h++){const v=p[h];t.addGroup(v.start,v.count,v.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const x=this.parameters;for(const v in x)x[v]!==void 0&&(e[v]=x[v]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const x in a){const v=a[x];e.data.attributes[x]=v.toJSON(e.data)}const u={};let f=!1;for(const x in this.morphAttributes){const v=this.morphAttributes[x],S=[];for(let M=0,E=v.length;M<E;M++){const A=v[M];S.push(A.toJSON(e.data))}S.length>0&&(u[x]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone(t));const u=e.attributes;for(const v in u){const S=u[v];this.setAttribute(v,S.clone(t))}const f=e.morphAttributes;for(const v in f){const S=[],M=f[v];for(let E=0,A=M.length;E<A;E++)S.push(M[E].clone(t));this.morphAttributes[v]=S}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let v=0,S=p.length;v<S;v++){const M=p[v];this.addGroup(M.start,M.count,M.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const x=e.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w_=new yi,Sl=new Ay,qh=new ig,A_=new he,dc=new he,hc=new he,pc=new he,Fm=new he,Yh=new he,$h=new fn,Kh=new fn,Zh=new fn,R_=new he,C_=new he,L_=new he,Qh=new he,Jh=new he;class Po extends Tr{constructor(e=new Do,t=new rg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const u=t[a[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=u.length;f<p;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,t){const a=this.geometry,u=a.attributes.position,f=a.morphAttributes.position,p=a.morphTargetsRelative;t.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){Yh.set(0,0,0);for(let x=0,v=f.length;x<v;x++){const S=h[x],M=f[x];S!==0&&(Fm.fromBufferAttribute(M,e),p?Yh.addScaledVector(Fm,S):Yh.addScaledVector(Fm.sub(t),S))}t.add(Yh)}return t}raycast(e,t){const a=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qh.copy(a.boundingSphere),qh.applyMatrix4(f),Sl.copy(e.ray).recast(e.near),!(qh.containsPoint(Sl.origin)===!1&&(Sl.intersectSphere(qh,A_)===null||Sl.origin.distanceToSquared(A_)>(e.far-e.near)**2))&&(w_.copy(f).invert(),Sl.copy(e.ray).applyMatrix4(w_),!(a.boundingBox!==null&&Sl.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Sl)))}_computeIntersections(e,t,a){let u;const f=this.geometry,p=this.material,h=f.index,x=f.attributes.position,v=f.attributes.uv,S=f.attributes.uv1,M=f.attributes.normal,E=f.groups,A=f.drawRange;if(h!==null)if(Array.isArray(p))for(let P=0,L=E.length;P<L;P++){const T=E[P],y=p[T.materialIndex],H=Math.max(T.start,A.start),D=Math.min(h.count,Math.min(T.start+T.count,A.start+A.count));for(let O=H,W=D;O<W;O+=3){const q=h.getX(O),X=h.getX(O+1),fe=h.getX(O+2);u=ep(this,y,e,a,v,S,M,q,X,fe),u&&(u.faceIndex=Math.floor(O/3),u.face.materialIndex=T.materialIndex,t.push(u))}}else{const P=Math.max(0,A.start),L=Math.min(h.count,A.start+A.count);for(let T=P,y=L;T<y;T+=3){const H=h.getX(T),D=h.getX(T+1),O=h.getX(T+2);u=ep(this,p,e,a,v,S,M,H,D,O),u&&(u.faceIndex=Math.floor(T/3),t.push(u))}}else if(x!==void 0)if(Array.isArray(p))for(let P=0,L=E.length;P<L;P++){const T=E[P],y=p[T.materialIndex],H=Math.max(T.start,A.start),D=Math.min(x.count,Math.min(T.start+T.count,A.start+A.count));for(let O=H,W=D;O<W;O+=3){const q=O,X=O+1,fe=O+2;u=ep(this,y,e,a,v,S,M,q,X,fe),u&&(u.faceIndex=Math.floor(O/3),u.face.materialIndex=T.materialIndex,t.push(u))}}else{const P=Math.max(0,A.start),L=Math.min(x.count,A.start+A.count);for(let T=P,y=L;T<y;T+=3){const H=T,D=T+1,O=T+2;u=ep(this,p,e,a,v,S,M,H,D,O),u&&(u.faceIndex=Math.floor(T/3),t.push(u))}}}}function Ny(s,e,t,a,u,f,p,h){let x;if(e.side===ar?x=a.intersectTriangle(p,f,u,!0,h):x=a.intersectTriangle(u,f,p,e.side===Ra,h),x===null)return null;Jh.copy(h),Jh.applyMatrix4(s.matrixWorld);const v=t.ray.origin.distanceTo(Jh);return v<t.near||v>t.far?null:{distance:v,point:Jh.clone(),object:s}}function ep(s,e,t,a,u,f,p,h,x,v){s.getVertexPosition(h,dc),s.getVertexPosition(x,hc),s.getVertexPosition(v,pc);const S=Ny(s,e,t,a,dc,hc,pc,Qh);if(S){u&&($h.fromBufferAttribute(u,h),Kh.fromBufferAttribute(u,x),Zh.fromBufferAttribute(u,v),S.uv=us.getInterpolation(Qh,dc,hc,pc,$h,Kh,Zh,new fn)),f&&($h.fromBufferAttribute(f,h),Kh.fromBufferAttribute(f,x),Zh.fromBufferAttribute(f,v),S.uv1=us.getInterpolation(Qh,dc,hc,pc,$h,Kh,Zh,new fn),S.uv2=S.uv1),p&&(R_.fromBufferAttribute(p,h),C_.fromBufferAttribute(p,x),L_.fromBufferAttribute(p,v),S.normal=us.getInterpolation(Qh,dc,hc,pc,R_,C_,L_,new he),S.normal.dot(a.direction)>0&&S.normal.multiplyScalar(-1));const M={a:h,b:x,c:v,normal:new he,materialIndex:0};us.getNormal(dc,hc,pc,M.normal),S.face=M}return S}class pd extends Do{constructor(e=1,t=1,a=1,u=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:u,heightSegments:f,depthSegments:p};const h=this;u=Math.floor(u),f=Math.floor(f),p=Math.floor(p);const x=[],v=[],S=[],M=[];let E=0,A=0;P("z","y","x",-1,-1,a,t,e,p,f,0),P("z","y","x",1,-1,a,t,-e,p,f,1),P("x","z","y",1,1,e,a,t,u,p,2),P("x","z","y",1,-1,e,a,-t,u,p,3),P("x","y","z",1,-1,e,t,a,u,f,4),P("x","y","z",-1,-1,e,t,-a,u,f,5),this.setIndex(x),this.setAttribute("position",new Uo(v,3)),this.setAttribute("normal",new Uo(S,3)),this.setAttribute("uv",new Uo(M,2));function P(L,T,y,H,D,O,W,q,X,fe,I){const G=O/X,Me=W/fe,Re=O/2,se=W/2,de=q/2,me=X+1,Ee=fe+1;let ue=0,Z=0;const pe=new he;for(let U=0;U<Ee;U++){const k=U*Me-se;for(let J=0;J<me;J++){const Ce=J*G-Re;pe[L]=Ce*H,pe[T]=k*D,pe[y]=de,v.push(pe.x,pe.y,pe.z),pe[L]=0,pe[T]=0,pe[y]=q>0?1:-1,S.push(pe.x,pe.y,pe.z),M.push(J/X),M.push(1-U/fe),ue+=1}}for(let U=0;U<fe;U++)for(let k=0;k<X;k++){const J=E+k+me*U,Ce=E+k+me*(U+1),Ae=E+(k+1)+me*(U+1),Ue=E+(k+1)+me*U;x.push(J,Ce,Ue),x.push(Ce,Ae,Ue),Z+=6}h.addGroup(A,Z,I),A+=Z,E+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rc(s){const e={};for(const t in s){e[t]={};for(const a in s[t]){const u=s[t][a];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=u.clone():Array.isArray(u)?e[t][a]=u.slice():e[t][a]=u}}return e}function Vi(s){const e={};for(let t=0;t<s.length;t++){const a=Rc(s[t]);for(const u in a)e[u]=a[u]}return e}function Fy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Av(s){return s.getRenderTarget()===null?s.outputColorSpace:js}const Oy={clone:Rc,merge:Vi};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ul extends cp{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rc(e.uniforms),this.uniformsGroups=Fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const u in this.uniforms){const p=this.uniforms[u].value;p&&p.isTexture?t.uniforms[u]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?t.uniforms[u]={type:"c",value:p.getHex()}:p&&p.isVector2?t.uniforms[u]={type:"v2",value:p.toArray()}:p&&p.isVector3?t.uniforms[u]={type:"v3",value:p.toArray()}:p&&p.isVector4?t.uniforms[u]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?t.uniforms[u]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?t.uniforms[u]={type:"m4",value:p.toArray()}:t.uniforms[u]={value:p}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const u in this.extensions)this.extensions[u]===!0&&(a[u]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class Rv extends Tr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yi,this.projectionMatrix=new yi,this.projectionMatrixInverse=new yi,this.coordinateSystem=Lo}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vr extends Rv{constructor(e=50,t=1,a=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=u,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ym*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ym*2*Math.atan(Math.tan(xm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,a,u,f,p){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=u,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xm*.5*this.fov)/this.zoom,a=2*t,u=this.aspect*a,f=-.5*u;const p=this.view;if(this.view!==null&&this.view.enabled){const x=p.fullWidth,v=p.fullHeight;f+=p.offsetX*u/x,t-=p.offsetY*a/v,u*=p.width/x,a*=p.height/v}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mc=-90,gc=1;class ky extends Tr{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null;const u=new Vr(mc,gc,e,t);u.layers=this.layers,this.add(u);const f=new Vr(mc,gc,e,t);f.layers=this.layers,this.add(f);const p=new Vr(mc,gc,e,t);p.layers=this.layers,this.add(p);const h=new Vr(mc,gc,e,t);h.layers=this.layers,this.add(h);const x=new Vr(mc,gc,e,t);x.layers=this.layers,this.add(x);const v=new Vr(mc,gc,e,t);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,u,f,p,h,x]=t;for(const v of t)this.remove(v);if(e===Lo)a.up.set(0,1,0),a.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(e===op)a.up.set(0,-1,0),a.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const v of t)this.add(v),v.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const a=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,p,h,x,v]=this.children,S=e.getRenderTarget(),M=e.toneMapping,E=e.xr.enabled;e.toneMapping=bo,e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0),e.render(t,u),e.setRenderTarget(a,1),e.render(t,f),e.setRenderTarget(a,2),e.render(t,p),e.setRenderTarget(a,3),e.render(t,h),e.setRenderTarget(a,4),e.render(t,x),a.texture.generateMipmaps=A,e.setRenderTarget(a,5),e.render(t,v),e.setRenderTarget(S),e.toneMapping=M,e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Cv extends Er{constructor(e,t,a,u,f,p,h,x,v,S){e=e!==void 0?e:[],t=t!==void 0?t:Tc,super(e,t,a,u,f,p,h,x,v,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hy extends bl{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},u=[a,a,a,a,a,a];t.encoding!==void 0&&(ld("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ll?Nt:Pl),this.texture=new Cv(u,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new pd(5,5,5),f=new Ul({name:"CubemapFromEquirect",uniforms:Rc(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ar,blending:wa});f.uniforms.tEquirect.value=t;const p=new Po(u,f),h=t.minFilter;return t.minFilter===ud&&(t.minFilter=Gr),new ky(1,10,this).update(e,p),t.minFilter=h,p.geometry.dispose(),p.material.dispose(),this}clear(e,t,a,u){const f=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(t,a,u);e.setRenderTarget(f)}}const Om=new he,Gy=new he,Vy=new Ot;class Ml{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,u){return this.normal.set(e,t,a),this.constant=u,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const u=Om.subVectors(a,t).cross(Gy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(Om),u=this.normal.dot(a);if(u===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:t.copy(e.start).addScaledVector(a,f)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||Vy.getNormalMatrix(e),u=this.coplanarPoint(Om).applyMatrix4(e),f=this.normal.applyMatrix3(a).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yl=new ig,tp=new he;class Lv{constructor(e=new Ml,t=new Ml,a=new Ml,u=new Ml,f=new Ml,p=new Ml){this.planes=[e,t,a,u,f,p]}set(e,t,a,u,f,p){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(a),h[3].copy(u),h[4].copy(f),h[5].copy(p),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Lo){const a=this.planes,u=e.elements,f=u[0],p=u[1],h=u[2],x=u[3],v=u[4],S=u[5],M=u[6],E=u[7],A=u[8],P=u[9],L=u[10],T=u[11],y=u[12],H=u[13],D=u[14],O=u[15];if(a[0].setComponents(x-f,E-v,T-A,O-y).normalize(),a[1].setComponents(x+f,E+v,T+A,O+y).normalize(),a[2].setComponents(x+p,E+S,T+P,O+H).normalize(),a[3].setComponents(x-p,E-S,T-P,O-H).normalize(),a[4].setComponents(x-h,E-M,T-L,O-D).normalize(),t===Lo)a[5].setComponents(x+h,E+M,T+L,O+D).normalize();else if(t===op)a[5].setComponents(h,M,L,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yl.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yl)}intersectsSprite(e){return yl.center.set(0,0,0),yl.radius=.7071067811865476,yl.applyMatrix4(e.matrixWorld),this.intersectsSphere(yl)}intersectsSphere(e){const t=this.planes,a=e.center,u=-e.radius;for(let f=0;f<6;f++)if(t[f].distanceToPoint(a)<u)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const u=t[a];if(tp.x=u.normal.x>0?e.max.x:e.min.x,tp.y=u.normal.y>0?e.max.y:e.min.y,tp.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(tp)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pv(){let s=null,e=!1,t=null,a=null;function u(f,p){t(f,p),a=s.requestAnimationFrame(u)}return{start:function(){e!==!0&&t!==null&&(a=s.requestAnimationFrame(u),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(f){t=f},setContext:function(f){s=f}}}function Wy(s,e){const t=e.isWebGL2,a=new WeakMap;function u(v,S){const M=v.array,E=v.usage,A=s.createBuffer();s.bindBuffer(S,A),s.bufferData(S,M,E),v.onUploadCallback();let P;if(M instanceof Float32Array)P=s.FLOAT;else if(M instanceof Uint16Array)if(v.isFloat16BufferAttribute)if(t)P=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else P=s.UNSIGNED_SHORT;else if(M instanceof Int16Array)P=s.SHORT;else if(M instanceof Uint32Array)P=s.UNSIGNED_INT;else if(M instanceof Int32Array)P=s.INT;else if(M instanceof Int8Array)P=s.BYTE;else if(M instanceof Uint8Array)P=s.UNSIGNED_BYTE;else if(M instanceof Uint8ClampedArray)P=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+M);return{buffer:A,type:P,bytesPerElement:M.BYTES_PER_ELEMENT,version:v.version}}function f(v,S,M){const E=S.array,A=S.updateRange;s.bindBuffer(M,v),A.count===-1?s.bufferSubData(M,0,E):(t?s.bufferSubData(M,A.offset*E.BYTES_PER_ELEMENT,E,A.offset,A.count):s.bufferSubData(M,A.offset*E.BYTES_PER_ELEMENT,E.subarray(A.offset,A.offset+A.count)),A.count=-1),S.onUploadCallback()}function p(v){return v.isInterleavedBufferAttribute&&(v=v.data),a.get(v)}function h(v){v.isInterleavedBufferAttribute&&(v=v.data);const S=a.get(v);S&&(s.deleteBuffer(S.buffer),a.delete(v))}function x(v,S){if(v.isGLBufferAttribute){const E=a.get(v);(!E||E.version<v.version)&&a.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}v.isInterleavedBufferAttribute&&(v=v.data);const M=a.get(v);M===void 0?a.set(v,u(v,S)):M.version<v.version&&(f(M.buffer,v,S),M.version=v.version)}return{get:p,remove:h,update:x}}class sg extends Do{constructor(e=1,t=1,a=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:u};const f=e/2,p=t/2,h=Math.floor(a),x=Math.floor(u),v=h+1,S=x+1,M=e/h,E=t/x,A=[],P=[],L=[],T=[];for(let y=0;y<S;y++){const H=y*E-p;for(let D=0;D<v;D++){const O=D*M-f;P.push(O,-H,0),L.push(0,0,1),T.push(D/h),T.push(1-y/x)}}for(let y=0;y<x;y++)for(let H=0;H<h;H++){const D=H+v*y,O=H+v*(y+1),W=H+1+v*(y+1),q=H+1+v*y;A.push(D,O,q),A.push(O,W,q)}this.setIndex(A),this.setAttribute("position",new Uo(P,3)),this.setAttribute("normal",new Uo(L,3)),this.setAttribute("uv",new Uo(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sg(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jy=`#ifdef USE_ALPHAHASH
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
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,bM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
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
#endif`,GM=`struct PhysicalMaterial {
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
}`,VM=`
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JM=`#if defined( USE_POINTS_UV )
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
#endif`,eE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`#ifdef USE_MORPHTARGETS
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
#endif`,oE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
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
}`,$E=`#if DEPTH_PACKING == 3200
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
}`,KE=`#define DISTANCE
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
}`,ZE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
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
}`,o1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,u1=`#define NORMAL
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
}`,c1=`#define PHONG
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
}`,f1=`#define PHONG
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
}`,d1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,S1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:Xy,alphahash_pars_fragment:jy,alphamap_fragment:qy,alphamap_pars_fragment:Yy,alphatest_fragment:$y,alphatest_pars_fragment:Ky,aomap_fragment:Zy,aomap_pars_fragment:Qy,begin_vertex:Jy,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:aM,color_fragment:lM,color_pars_fragment:uM,color_pars_vertex:cM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:_M,emissivemap_pars_fragment:vM,colorspace_fragment:xM,colorspace_pars_fragment:SM,envmap_fragment:yM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:FM,envmap_vertex:wM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:LM,gradientmap_pars_fragment:PM,lightmap_fragment:bM,lightmap_pars_fragment:UM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:IM,lights_pars_begin:NM,lights_toon_fragment:OM,lights_toon_pars_fragment:BM,lights_phong_fragment:zM,lights_phong_pars_fragment:kM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:VM,lights_fragment_maps:WM,lights_fragment_end:XM,logdepthbuf_fragment:jM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:$M,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:eE,metalnessmap_pars_fragment:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:rE,morphtarget_vertex:sE,normal_fragment_begin:oE,normal_fragment_maps:aE,normal_pars_fragment:lE,normal_pars_vertex:uE,normal_vertex:cE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:_E,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:SE,dithering_pars_fragment:yE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:TE,shadowmap_pars_vertex:wE,shadowmap_vertex:AE,shadowmask_pars_fragment:RE,skinbase_vertex:CE,skinning_pars_vertex:LE,skinning_vertex:PE,skinnormal_vertex:bE,specularmap_fragment:UE,specularmap_pars_fragment:DE,tonemapping_fragment:IE,tonemapping_pars_fragment:NE,transmission_fragment:FE,transmission_pars_fragment:OE,uv_pars_fragment:BE,uv_pars_vertex:zE,uv_vertex:kE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:WE,backgroundCube_frag:XE,cube_vert:jE,cube_frag:qE,depth_vert:YE,depth_frag:$E,distanceRGBA_vert:KE,distanceRGBA_frag:ZE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:o1,meshmatcap_frag:a1,meshnormal_vert:l1,meshnormal_frag:u1,meshphong_vert:c1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:_1,shadow_vert:v1,shadow_frag:x1,sprite_vert:S1,sprite_frag:y1},Ve={common:{diffuse:{value:new gn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new fn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new gn(16777215)},opacity:{value:1},center:{value:new fn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Xs={basic:{uniforms:Vi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Vi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new gn(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Vi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new gn(0)},specular:{value:new gn(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Vi([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new gn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Vi([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new gn(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Vi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Vi([Ve.points,Ve.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Vi([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Vi([Ve.common,Ve.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Vi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Vi([Ve.sprite,Ve.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Vi([Ve.common,Ve.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Vi([Ve.lights,Ve.fog,{color:{value:new gn(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Xs.physical={uniforms:Vi([Xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new fn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new gn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new fn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new gn(0)},specularColor:{value:new gn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new fn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const np={r:0,b:0,g:0};function M1(s,e,t,a,u,f,p){const h=new gn(0);let x=f===!0?0:1,v,S,M=null,E=0,A=null;function P(T,y){let H=!1,D=y.isScene===!0?y.background:null;switch(D&&D.isTexture&&(D=(y.backgroundBlurriness>0?t:e).get(D)),D===null?L(h,x):D&&D.isColor&&(L(D,1),H=!0),s.xr.getEnvironmentBlendMode()){case"opaque":H=!0;break;case"additive":a.buffers.color.setClear(0,0,0,1,p),H=!0;break;case"alpha-blend":a.buffers.color.setClear(0,0,0,0,p),H=!0;break}(s.autoClear||H)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),D&&(D.isCubeTexture||D.mapping===lp)?(S===void 0&&(S=new Po(new pd(1,1,1),new Ul({name:"BackgroundCubeMaterial",uniforms:Rc(Xs.backgroundCube.uniforms),vertexShader:Xs.backgroundCube.vertexShader,fragmentShader:Xs.backgroundCube.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(q,X,fe){this.matrixWorld.copyPosition(fe.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(S)),S.material.uniforms.envMap.value=D,S.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,S.material.toneMapped=D.colorSpace!==Nt,(M!==D||E!==D.version||A!==s.toneMapping)&&(S.material.needsUpdate=!0,M=D,E=D.version,A=s.toneMapping),S.layers.enableAll(),T.unshift(S,S.geometry,S.material,0,0,null)):D&&D.isTexture&&(v===void 0&&(v=new Po(new sg(2,2),new Ul({name:"BackgroundMaterial",uniforms:Rc(Xs.background.uniforms),vertexShader:Xs.background.vertexShader,fragmentShader:Xs.background.fragmentShader,side:Ra,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(v)),v.material.uniforms.t2D.value=D,v.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,v.material.toneMapped=D.colorSpace!==Nt,D.matrixAutoUpdate===!0&&D.updateMatrix(),v.material.uniforms.uvTransform.value.copy(D.matrix),(M!==D||E!==D.version||A!==s.toneMapping)&&(v.material.needsUpdate=!0,M=D,E=D.version,A=s.toneMapping),v.layers.enableAll(),T.unshift(v,v.geometry,v.material,0,0,null))}function L(T,y){T.getRGB(np,Av(s)),a.buffers.color.setClear(np.r,np.g,np.b,y,p)}return{getClearColor:function(){return h},setClearColor:function(T,y=1){h.set(T),x=y,L(h,x)},getClearAlpha:function(){return x},setClearAlpha:function(T){x=T,L(h,x)},render:P}}function E1(s,e,t,a){const u=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=a.isWebGL2?null:e.get("OES_vertex_array_object"),p=a.isWebGL2||f!==null,h={},x=T(null);let v=x,S=!1;function M(de,me,Ee,ue,Z){let pe=!1;if(p){const U=L(ue,Ee,me);v!==U&&(v=U,A(v.object)),pe=y(de,ue,Ee,Z),pe&&H(de,ue,Ee,Z)}else{const U=me.wireframe===!0;(v.geometry!==ue.id||v.program!==Ee.id||v.wireframe!==U)&&(v.geometry=ue.id,v.program=Ee.id,v.wireframe=U,pe=!0)}Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(pe||S)&&(S=!1,fe(de,me,Ee,ue),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function E(){return a.isWebGL2?s.createVertexArray():f.createVertexArrayOES()}function A(de){return a.isWebGL2?s.bindVertexArray(de):f.bindVertexArrayOES(de)}function P(de){return a.isWebGL2?s.deleteVertexArray(de):f.deleteVertexArrayOES(de)}function L(de,me,Ee){const ue=Ee.wireframe===!0;let Z=h[de.id];Z===void 0&&(Z={},h[de.id]=Z);let pe=Z[me.id];pe===void 0&&(pe={},Z[me.id]=pe);let U=pe[ue];return U===void 0&&(U=T(E()),pe[ue]=U),U}function T(de){const me=[],Ee=[],ue=[];for(let Z=0;Z<u;Z++)me[Z]=0,Ee[Z]=0,ue[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:me,enabledAttributes:Ee,attributeDivisors:ue,object:de,attributes:{},index:null}}function y(de,me,Ee,ue){const Z=v.attributes,pe=me.attributes;let U=0;const k=Ee.getAttributes();for(const J in k)if(k[J].location>=0){const Ae=Z[J];let Ue=pe[J];if(Ue===void 0&&(J==="instanceMatrix"&&de.instanceMatrix&&(Ue=de.instanceMatrix),J==="instanceColor"&&de.instanceColor&&(Ue=de.instanceColor)),Ae===void 0||Ae.attribute!==Ue||Ue&&Ae.data!==Ue.data)return!0;U++}return v.attributesNum!==U||v.index!==ue}function H(de,me,Ee,ue){const Z={},pe=me.attributes;let U=0;const k=Ee.getAttributes();for(const J in k)if(k[J].location>=0){let Ae=pe[J];Ae===void 0&&(J==="instanceMatrix"&&de.instanceMatrix&&(Ae=de.instanceMatrix),J==="instanceColor"&&de.instanceColor&&(Ae=de.instanceColor));const Ue={};Ue.attribute=Ae,Ae&&Ae.data&&(Ue.data=Ae.data),Z[J]=Ue,U++}v.attributes=Z,v.attributesNum=U,v.index=ue}function D(){const de=v.newAttributes;for(let me=0,Ee=de.length;me<Ee;me++)de[me]=0}function O(de){W(de,0)}function W(de,me){const Ee=v.newAttributes,ue=v.enabledAttributes,Z=v.attributeDivisors;Ee[de]=1,ue[de]===0&&(s.enableVertexAttribArray(de),ue[de]=1),Z[de]!==me&&((a.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](de,me),Z[de]=me)}function q(){const de=v.newAttributes,me=v.enabledAttributes;for(let Ee=0,ue=me.length;Ee<ue;Ee++)me[Ee]!==de[Ee]&&(s.disableVertexAttribArray(Ee),me[Ee]=0)}function X(de,me,Ee,ue,Z,pe,U){U===!0?s.vertexAttribIPointer(de,me,Ee,Z,pe):s.vertexAttribPointer(de,me,Ee,ue,Z,pe)}function fe(de,me,Ee,ue){if(a.isWebGL2===!1&&(de.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const Z=ue.attributes,pe=Ee.getAttributes(),U=me.defaultAttributeValues;for(const k in pe){const J=pe[k];if(J.location>=0){let Ce=Z[k];if(Ce===void 0&&(k==="instanceMatrix"&&de.instanceMatrix&&(Ce=de.instanceMatrix),k==="instanceColor"&&de.instanceColor&&(Ce=de.instanceColor)),Ce!==void 0){const Ae=Ce.normalized,Ue=Ce.itemSize,Be=t.get(Ce);if(Be===void 0)continue;const Ye=Be.buffer,ze=Be.type,pt=Be.bytesPerElement,Zn=a.isWebGL2===!0&&(ze===s.INT||ze===s.UNSIGNED_INT||Ce.gpuType===cv);if(Ce.isInterleavedBufferAttribute){const Mt=Ce.data,re=Mt.stride,xn=Ce.offset;if(Mt.isInstancedInterleavedBuffer){for(let nt=0;nt<J.locationSize;nt++)W(J.location+nt,Mt.meshPerAttribute);de.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let nt=0;nt<J.locationSize;nt++)O(J.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let nt=0;nt<J.locationSize;nt++)X(J.location+nt,Ue/J.locationSize,ze,Ae,re*pt,(xn+Ue/J.locationSize*nt)*pt,Zn)}else{if(Ce.isInstancedBufferAttribute){for(let Mt=0;Mt<J.locationSize;Mt++)W(J.location+Mt,Ce.meshPerAttribute);de.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Mt=0;Mt<J.locationSize;Mt++)O(J.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Mt=0;Mt<J.locationSize;Mt++)X(J.location+Mt,Ue/J.locationSize,ze,Ae,Ue*pt,Ue/J.locationSize*Mt*pt,Zn)}}else if(U!==void 0){const Ae=U[k];if(Ae!==void 0)switch(Ae.length){case 2:s.vertexAttrib2fv(J.location,Ae);break;case 3:s.vertexAttrib3fv(J.location,Ae);break;case 4:s.vertexAttrib4fv(J.location,Ae);break;default:s.vertexAttrib1fv(J.location,Ae)}}}}q()}function I(){Re();for(const de in h){const me=h[de];for(const Ee in me){const ue=me[Ee];for(const Z in ue)P(ue[Z].object),delete ue[Z];delete me[Ee]}delete h[de]}}function G(de){if(h[de.id]===void 0)return;const me=h[de.id];for(const Ee in me){const ue=me[Ee];for(const Z in ue)P(ue[Z].object),delete ue[Z];delete me[Ee]}delete h[de.id]}function Me(de){for(const me in h){const Ee=h[me];if(Ee[de.id]===void 0)continue;const ue=Ee[de.id];for(const Z in ue)P(ue[Z].object),delete ue[Z];delete Ee[de.id]}}function Re(){se(),S=!0,v!==x&&(v=x,A(v.object))}function se(){x.geometry=null,x.program=null,x.wireframe=!1}return{setup:M,reset:Re,resetDefaultState:se,dispose:I,releaseStatesOfGeometry:G,releaseStatesOfProgram:Me,initAttributes:D,enableAttribute:O,disableUnusedAttributes:q}}function T1(s,e,t,a){const u=a.isWebGL2;let f;function p(v){f=v}function h(v,S){s.drawArrays(f,v,S),t.update(S,f,1)}function x(v,S,M){if(M===0)return;let E,A;if(u)E=s,A="drawArraysInstanced";else if(E=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[A](f,v,S,M),t.update(S,f,M)}this.setMode=p,this.render=h,this.renderInstances=x}function w1(s,e,t){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(X){if(X==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const p=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let h=t.precision!==void 0?t.precision:"highp";const x=f(h);x!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=p||e.has("WEBGL_draw_buffers"),S=t.logarithmicDepthBuffer===!0,M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),P=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),L=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),H=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=E>0,O=p||e.has("OES_texture_float"),W=D&&O,q=p?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:p,drawBuffers:v,getMaxAnisotropy:u,getMaxPrecision:f,precision:h,logarithmicDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:P,maxAttributes:L,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:H,vertexTextures:D,floatFragmentTextures:O,floatVertexTextures:W,maxSamples:q}}function A1(s){const e=this;let t=null,a=0,u=!1,f=!1;const p=new Ml,h=new Ot,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(M,E){const A=M.length!==0||E||a!==0||u;return u=E,a=M.length,A},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(M,E){t=S(M,E,0)},this.setState=function(M,E,A){const P=M.clippingPlanes,L=M.clipIntersection,T=M.clipShadows,y=s.get(M);if(!u||P===null||P.length===0||f&&!T)f?S(null):v();else{const H=f?0:a,D=H*4;let O=y.clippingState||null;x.value=O,O=S(P,E,D,A);for(let W=0;W!==D;++W)O[W]=t[W];y.clippingState=O,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=H}};function v(){x.value!==t&&(x.value=t,x.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function S(M,E,A,P){const L=M!==null?M.length:0;let T=null;if(L!==0){if(T=x.value,P!==!0||T===null){const y=A+L*4,H=E.matrixWorldInverse;h.getNormalMatrix(H),(T===null||T.length<y)&&(T=new Float32Array(y));for(let D=0,O=A;D!==L;++D,O+=4)p.copy(M[D]).applyMatrix4(H,h),p.normal.toArray(T,O),T[O+3]=p.constant}x.value=T,x.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,T}}function R1(s){let e=new WeakMap;function t(p,h){return h===Vm?p.mapping=Tc:h===Wm&&(p.mapping=wc),p}function a(p){if(p&&p.isTexture&&p.isRenderTargetTexture===!1){const h=p.mapping;if(h===Vm||h===Wm)if(e.has(p)){const x=e.get(p).texture;return t(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const v=new Hy(x.height/2);return v.fromEquirectangularTexture(s,p),e.set(p,v),p.addEventListener("dispose",u),t(v.texture,p.mapping)}else return null}}return p}function u(p){const h=p.target;h.removeEventListener("dispose",u);const x=e.get(h);x!==void 0&&(e.delete(h),x.dispose())}function f(){e=new WeakMap}return{get:a,dispose:f}}class C1 extends Rv{constructor(e=-1,t=1,a=1,u=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=u,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,u,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=u,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=a-e,p=a+e,h=u+t,x=u-t;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,p=f+v*this.view.width,h-=S*this.view.offsetY,x=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,p,h,x,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xc=4,P_=[.125,.215,.35,.446,.526,.582],Tl=20,Bm=new C1,b_=new gn;let zm=null;const El=(1+Math.sqrt(5))/2,_c=1/El,U_=[new he(1,1,1),new he(-1,1,1),new he(1,1,-1),new he(-1,1,-1),new he(0,El,_c),new he(0,El,-_c),new he(_c,0,El),new he(-_c,0,El),new he(El,_c,0),new he(-El,_c,0)];class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,u=100){zm=this._renderer.getRenderTarget(),this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,a,u,f),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zm),e.scissorTest=!1,ip(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tc||e.mapping===wc?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zm=this._renderer.getRenderTarget();const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Gr,minFilter:Gr,generateMipmaps:!1,type:cd,format:fs,colorSpace:js,depthBuffer:!1},u=I_(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(e,t,a);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L1(f)),this._blurMaterial=P1(f,e,t)}return u}_compileMaterial(e){const t=new Po(this._lodPlanes[0],e);this._renderer.compile(t,Bm)}_sceneToCubeUV(e,t,a,u){const h=new Vr(90,1,t,a),x=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,M=S.autoClear,E=S.toneMapping;S.getClearColor(b_),S.toneMapping=bo,S.autoClear=!1;const A=new rg({name:"PMREM.Background",side:ar,depthWrite:!1,depthTest:!1}),P=new Po(new pd,A);let L=!1;const T=e.background;T?T.isColor&&(A.color.copy(T),e.background=null,L=!0):(A.color.copy(b_),L=!0);for(let y=0;y<6;y++){const H=y%3;H===0?(h.up.set(0,x[y],0),h.lookAt(v[y],0,0)):H===1?(h.up.set(0,0,x[y]),h.lookAt(0,v[y],0)):(h.up.set(0,x[y],0),h.lookAt(0,0,v[y]));const D=this._cubeSize;ip(u,H*D,y>2?D:0,D,D),S.setRenderTarget(u),L&&S.render(P,h),S.render(e,h)}P.geometry.dispose(),P.material.dispose(),S.toneMapping=E,S.autoClear=M,e.background=T}_textureToCubeUV(e,t){const a=this._renderer,u=e.mapping===Tc||e.mapping===wc;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const f=u?this._cubemapMaterial:this._equirectMaterial,p=new Po(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const x=this._cubeSize;ip(t,0,0,3*x,2*x),a.setRenderTarget(t),a.render(p,Bm)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;for(let u=1;u<this._lodPlanes.length;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),p=U_[(u-1)%U_.length];this._blur(e,u-1,u,f,p)}t.autoClear=a}_blur(e,t,a,u,f){const p=this._pingPongRenderTarget;this._halfBlur(e,p,t,a,u,"latitudinal",f),this._halfBlur(p,e,a,a,u,"longitudinal",f)}_halfBlur(e,t,a,u,f,p,h){const x=this._renderer,v=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,M=new Po(this._lodPlanes[u],v),E=v.uniforms,A=this._sizeLods[a]-1,P=isFinite(f)?Math.PI/(2*A):2*Math.PI/(2*Tl-1),L=f/P,T=isFinite(f)?1+Math.floor(S*L):Tl;T>Tl&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${Tl}`);const y=[];let H=0;for(let X=0;X<Tl;++X){const fe=X/L,I=Math.exp(-fe*fe/2);y.push(I),X===0?H+=I:X<T&&(H+=2*I)}for(let X=0;X<y.length;X++)y[X]=y[X]/H;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=y,E.latitudinal.value=p==="latitudinal",h&&(E.poleAxis.value=h);const{_lodMax:D}=this;E.dTheta.value=P,E.mipInt.value=D-a;const O=this._sizeLods[u],W=3*O*(u>D-xc?u-D+xc:0),q=4*(this._cubeSize-O);ip(t,W,q,3*O,2*O),x.setRenderTarget(t),x.render(M,Bm)}}function L1(s){const e=[],t=[],a=[];let u=s;const f=s-xc+1+P_.length;for(let p=0;p<f;p++){const h=Math.pow(2,u);t.push(h);let x=1/h;p>s-xc?x=P_[p-s+xc-1]:p===0&&(x=0),a.push(x);const v=1/(h-2),S=-v,M=1+v,E=[S,S,M,S,M,M,S,S,M,M,S,M],A=6,P=6,L=3,T=2,y=1,H=new Float32Array(L*P*A),D=new Float32Array(T*P*A),O=new Float32Array(y*P*A);for(let q=0;q<A;q++){const X=q%3*2/3-1,fe=q>2?0:-1,I=[X,fe,0,X+2/3,fe,0,X+2/3,fe+1,0,X,fe,0,X+2/3,fe+1,0,X,fe+1,0];H.set(I,L*P*q),D.set(E,T*P*q);const G=[q,q,q,q,q,q];O.set(G,y*P*q)}const W=new Do;W.setAttribute("position",new wr(H,L)),W.setAttribute("uv",new wr(D,T)),W.setAttribute("faceIndex",new wr(O,y)),e.push(W),u>xc&&u--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function I_(s,e,t){const a=new bl(s,e,t);return a.texture.mapping=lp,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function ip(s,e,t,a,u){s.viewport.set(e,t,a,u),s.scissor.set(e,t,a,u)}function P1(s,e,t){const a=new Float32Array(Tl),u=new he(0,1,0);return new Ul({name:"SphericalGaussianBlur",defines:{n:Tl,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:og(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function N_(){return new Ul({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:og(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function F_(){return new Ul({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function og(){return`

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
	`}function b1(s){let e=new WeakMap,t=null;function a(h){if(h&&h.isTexture){const x=h.mapping,v=x===Vm||x===Wm,S=x===Tc||x===wc;if(v||S)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let M=e.get(h);return t===null&&(t=new D_(s)),M=v?t.fromEquirectangular(h,M):t.fromCubemap(h,M),e.set(h,M),M.texture}else{if(e.has(h))return e.get(h).texture;{const M=h.image;if(v&&M&&M.height>0||S&&M&&u(M)){t===null&&(t=new D_(s));const E=v?t.fromEquirectangular(h):t.fromCubemap(h);return e.set(h,E),h.addEventListener("dispose",f),E.texture}else return null}}}return h}function u(h){let x=0;const v=6;for(let S=0;S<v;S++)h[S]!==void 0&&x++;return x===v}function f(h){const x=h.target;x.removeEventListener("dispose",f);const v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function p(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:p}}function U1(s){const e={};function t(a){if(e[a]!==void 0)return e[a];let u;switch(a){case"WEBGL_depth_texture":u=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=s.getExtension(a)}return e[a]=u,u}return{has:function(a){return t(a)!==null},init:function(a){a.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(a){const u=t(a);return u===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),u}}}function D1(s,e,t,a){const u={},f=new WeakMap;function p(M){const E=M.target;E.index!==null&&e.remove(E.index);for(const P in E.attributes)e.remove(E.attributes[P]);for(const P in E.morphAttributes){const L=E.morphAttributes[P];for(let T=0,y=L.length;T<y;T++)e.remove(L[T])}E.removeEventListener("dispose",p),delete u[E.id];const A=f.get(E);A&&(e.remove(A),f.delete(E)),a.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(M,E){return u[E.id]===!0||(E.addEventListener("dispose",p),u[E.id]=!0,t.memory.geometries++),E}function x(M){const E=M.attributes;for(const P in E)e.update(E[P],s.ARRAY_BUFFER);const A=M.morphAttributes;for(const P in A){const L=A[P];for(let T=0,y=L.length;T<y;T++)e.update(L[T],s.ARRAY_BUFFER)}}function v(M){const E=[],A=M.index,P=M.attributes.position;let L=0;if(A!==null){const H=A.array;L=A.version;for(let D=0,O=H.length;D<O;D+=3){const W=H[D+0],q=H[D+1],X=H[D+2];E.push(W,q,q,X,X,W)}}else{const H=P.array;L=P.version;for(let D=0,O=H.length/3-1;D<O;D+=3){const W=D+0,q=D+1,X=D+2;E.push(W,q,q,X,X,W)}}const T=new(vv(E)?wv:Tv)(E,1);T.version=L;const y=f.get(M);y&&e.remove(y),f.set(M,T)}function S(M){const E=f.get(M);if(E){const A=M.index;A!==null&&E.version<A.version&&v(M)}else v(M);return f.get(M)}return{get:h,update:x,getWireframeAttribute:S}}function I1(s,e,t,a){const u=a.isWebGL2;let f;function p(E){f=E}let h,x;function v(E){h=E.type,x=E.bytesPerElement}function S(E,A){s.drawElements(f,A,h,E*x),t.update(A,f,1)}function M(E,A,P){if(P===0)return;let L,T;if(u)L=s,T="drawElementsInstanced";else if(L=e.get("ANGLE_instanced_arrays"),T="drawElementsInstancedANGLE",L===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}L[T](f,A,h,E*x,P),t.update(A,f,P)}this.setMode=p,this.setIndex=v,this.render=S,this.renderInstances=M}function N1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(f,p,h){switch(t.calls++,p){case s.TRIANGLES:t.triangles+=h*(f/3);break;case s.LINES:t.lines+=h*(f/2);break;case s.LINE_STRIP:t.lines+=h*(f-1);break;case s.LINE_LOOP:t.lines+=h*f;break;case s.POINTS:t.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function u(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:u,update:a}}function F1(s,e){return s[0]-e[0]}function O1(s,e){return Math.abs(e[1])-Math.abs(s[1])}function B1(s,e,t){const a={},u=new Float32Array(8),f=new WeakMap,p=new Si,h=[];for(let v=0;v<8;v++)h[v]=[v,0];function x(v,S,M){const E=v.morphTargetInfluences;if(e.isWebGL2===!0){const P=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,L=P!==void 0?P.length:0;let T=f.get(S);if(T===void 0||T.count!==L){let me=function(){se.dispose(),f.delete(S),S.removeEventListener("dispose",me)};var A=me;T!==void 0&&T.texture.dispose();const D=S.morphAttributes.position!==void 0,O=S.morphAttributes.normal!==void 0,W=S.morphAttributes.color!==void 0,q=S.morphAttributes.position||[],X=S.morphAttributes.normal||[],fe=S.morphAttributes.color||[];let I=0;D===!0&&(I=1),O===!0&&(I=2),W===!0&&(I=3);let G=S.attributes.position.count*I,Me=1;G>e.maxTextureSize&&(Me=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const Re=new Float32Array(G*Me*4*L),se=new yv(Re,G,Me,L);se.type=Ta,se.needsUpdate=!0;const de=I*4;for(let Ee=0;Ee<L;Ee++){const ue=q[Ee],Z=X[Ee],pe=fe[Ee],U=G*Me*4*Ee;for(let k=0;k<ue.count;k++){const J=k*de;D===!0&&(p.fromBufferAttribute(ue,k),Re[U+J+0]=p.x,Re[U+J+1]=p.y,Re[U+J+2]=p.z,Re[U+J+3]=0),O===!0&&(p.fromBufferAttribute(Z,k),Re[U+J+4]=p.x,Re[U+J+5]=p.y,Re[U+J+6]=p.z,Re[U+J+7]=0),W===!0&&(p.fromBufferAttribute(pe,k),Re[U+J+8]=p.x,Re[U+J+9]=p.y,Re[U+J+10]=p.z,Re[U+J+11]=pe.itemSize===4?p.w:1)}}T={count:L,texture:se,size:new fn(G,Me)},f.set(S,T),S.addEventListener("dispose",me)}let y=0;for(let D=0;D<E.length;D++)y+=E[D];const H=S.morphTargetsRelative?1:1-y;M.getUniforms().setValue(s,"morphTargetBaseInfluence",H),M.getUniforms().setValue(s,"morphTargetInfluences",E),M.getUniforms().setValue(s,"morphTargetsTexture",T.texture,t),M.getUniforms().setValue(s,"morphTargetsTextureSize",T.size)}else{const P=E===void 0?0:E.length;let L=a[S.id];if(L===void 0||L.length!==P){L=[];for(let O=0;O<P;O++)L[O]=[O,0];a[S.id]=L}for(let O=0;O<P;O++){const W=L[O];W[0]=O,W[1]=E[O]}L.sort(O1);for(let O=0;O<8;O++)O<P&&L[O][1]?(h[O][0]=L[O][0],h[O][1]=L[O][1]):(h[O][0]=Number.MAX_SAFE_INTEGER,h[O][1]=0);h.sort(F1);const T=S.morphAttributes.position,y=S.morphAttributes.normal;let H=0;for(let O=0;O<8;O++){const W=h[O],q=W[0],X=W[1];q!==Number.MAX_SAFE_INTEGER&&X?(T&&S.getAttribute("morphTarget"+O)!==T[q]&&S.setAttribute("morphTarget"+O,T[q]),y&&S.getAttribute("morphNormal"+O)!==y[q]&&S.setAttribute("morphNormal"+O,y[q]),u[O]=X,H+=X):(T&&S.hasAttribute("morphTarget"+O)===!0&&S.deleteAttribute("morphTarget"+O),y&&S.hasAttribute("morphNormal"+O)===!0&&S.deleteAttribute("morphNormal"+O),u[O]=0)}const D=S.morphTargetsRelative?1:1-H;M.getUniforms().setValue(s,"morphTargetBaseInfluence",D),M.getUniforms().setValue(s,"morphTargetInfluences",u)}}return{update:x}}function z1(s,e,t,a){let u=new WeakMap;function f(x){const v=a.render.frame,S=x.geometry,M=e.get(x,S);if(u.get(M)!==v&&(e.update(M),u.set(M,v)),x.isInstancedMesh&&(x.hasEventListener("dispose",h)===!1&&x.addEventListener("dispose",h),u.get(x)!==v&&(t.update(x.instanceMatrix,s.ARRAY_BUFFER),x.instanceColor!==null&&t.update(x.instanceColor,s.ARRAY_BUFFER),u.set(x,v))),x.isSkinnedMesh){const E=x.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return M}function p(){u=new WeakMap}function h(x){const v=x.target;v.removeEventListener("dispose",h),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:f,dispose:p}}const bv=new Er,Uv=new yv,Dv=new Ty,Iv=new Cv,O_=[],B_=[],z_=new Float32Array(16),k_=new Float32Array(9),H_=new Float32Array(4);function Lc(s,e,t){const a=s[0];if(a<=0||a>0)return s;const u=e*t;let f=O_[u];if(f===void 0&&(f=new Float32Array(u),O_[u]=f),e!==0){a.toArray(f,0);for(let p=1,h=0;p!==e;++p)h+=t,s[p].toArray(f,h)}return f}function $n(s,e){if(s.length!==e.length)return!1;for(let t=0,a=s.length;t<a;t++)if(s[t]!==e[t])return!1;return!0}function Kn(s,e){for(let t=0,a=e.length;t<a;t++)s[t]=e[t]}function fp(s,e){let t=B_[e];t===void 0&&(t=new Int32Array(e),B_[e]=t);for(let a=0;a!==e;++a)t[a]=s.allocateTextureUnit();return t}function k1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function H1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;s.uniform2fv(this.addr,e),Kn(t,e)}}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($n(t,e))return;s.uniform3fv(this.addr,e),Kn(t,e)}}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;s.uniform4fv(this.addr,e),Kn(t,e)}}function W1(s,e){const t=this.cache,a=e.elements;if(a===void 0){if($n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if($n(t,a))return;H_.set(a),s.uniformMatrix2fv(this.addr,!1,H_),Kn(t,a)}}function X1(s,e){const t=this.cache,a=e.elements;if(a===void 0){if($n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if($n(t,a))return;k_.set(a),s.uniformMatrix3fv(this.addr,!1,k_),Kn(t,a)}}function j1(s,e){const t=this.cache,a=e.elements;if(a===void 0){if($n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if($n(t,a))return;z_.set(a),s.uniformMatrix4fv(this.addr,!1,z_),Kn(t,a)}}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;s.uniform2iv(this.addr,e),Kn(t,e)}}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($n(t,e))return;s.uniform3iv(this.addr,e),Kn(t,e)}}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;s.uniform4iv(this.addr,e),Kn(t,e)}}function Z1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;s.uniform2uiv(this.addr,e),Kn(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($n(t,e))return;s.uniform3uiv(this.addr,e),Kn(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;s.uniform4uiv(this.addr,e),Kn(t,e)}}function tT(s,e,t){const a=this.cache,u=t.allocateTextureUnit();a[0]!==u&&(s.uniform1i(this.addr,u),a[0]=u),t.setTexture2D(e||bv,u)}function nT(s,e,t){const a=this.cache,u=t.allocateTextureUnit();a[0]!==u&&(s.uniform1i(this.addr,u),a[0]=u),t.setTexture3D(e||Dv,u)}function iT(s,e,t){const a=this.cache,u=t.allocateTextureUnit();a[0]!==u&&(s.uniform1i(this.addr,u),a[0]=u),t.setTextureCube(e||Iv,u)}function rT(s,e,t){const a=this.cache,u=t.allocateTextureUnit();a[0]!==u&&(s.uniform1i(this.addr,u),a[0]=u),t.setTexture2DArray(e||Uv,u)}function sT(s){switch(s){case 5126:return k1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return X1;case 35676:return j1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return $1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return Q1;case 36295:return J1;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(s,e){s.uniform1fv(this.addr,e)}function aT(s,e){const t=Lc(e,this.size,2);s.uniform2fv(this.addr,t)}function lT(s,e){const t=Lc(e,this.size,3);s.uniform3fv(this.addr,t)}function uT(s,e){const t=Lc(e,this.size,4);s.uniform4fv(this.addr,t)}function cT(s,e){const t=Lc(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fT(s,e){const t=Lc(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dT(s,e){const t=Lc(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hT(s,e){s.uniform1iv(this.addr,e)}function pT(s,e){s.uniform2iv(this.addr,e)}function mT(s,e){s.uniform3iv(this.addr,e)}function gT(s,e){s.uniform4iv(this.addr,e)}function _T(s,e){s.uniform1uiv(this.addr,e)}function vT(s,e){s.uniform2uiv(this.addr,e)}function xT(s,e){s.uniform3uiv(this.addr,e)}function ST(s,e){s.uniform4uiv(this.addr,e)}function yT(s,e,t){const a=this.cache,u=e.length,f=fp(t,u);$n(a,f)||(s.uniform1iv(this.addr,f),Kn(a,f));for(let p=0;p!==u;++p)t.setTexture2D(e[p]||bv,f[p])}function MT(s,e,t){const a=this.cache,u=e.length,f=fp(t,u);$n(a,f)||(s.uniform1iv(this.addr,f),Kn(a,f));for(let p=0;p!==u;++p)t.setTexture3D(e[p]||Dv,f[p])}function ET(s,e,t){const a=this.cache,u=e.length,f=fp(t,u);$n(a,f)||(s.uniform1iv(this.addr,f),Kn(a,f));for(let p=0;p!==u;++p)t.setTextureCube(e[p]||Iv,f[p])}function TT(s,e,t){const a=this.cache,u=e.length,f=fp(t,u);$n(a,f)||(s.uniform1iv(this.addr,f),Kn(a,f));for(let p=0;p!==u;++p)t.setTexture2DArray(e[p]||Uv,f[p])}function wT(s){switch(s){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return uT;case 35674:return cT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}class AT{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.setValue=sT(t.type)}}class RT{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.size=t.size,this.setValue=wT(t.type)}}class CT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const u=this.seq;for(let f=0,p=u.length;f!==p;++f){const h=u[f];h.setValue(e,t[h.id],a)}}}const km=/(\w+)(\])?(\[|\.)?/g;function G_(s,e){s.seq.push(e),s.map[e.id]=e}function LT(s,e,t){const a=s.name,u=a.length;for(km.lastIndex=0;;){const f=km.exec(a),p=km.lastIndex;let h=f[1];const x=f[2]==="]",v=f[3];if(x&&(h=h|0),v===void 0||v==="["&&p+2===u){G_(t,v===void 0?new AT(h,s,e):new RT(h,s,e));break}else{let M=t.map[h];M===void 0&&(M=new CT(h),G_(t,M)),t=M}}}class sp{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);LT(f,p,this)}}setValue(e,t,a,u){const f=this.map[t];f!==void 0&&f.setValue(e,a,u)}setOptional(e,t,a){const u=t[a];u!==void 0&&this.setValue(e,a,u)}static upload(e,t,a,u){for(let f=0,p=t.length;f!==p;++f){const h=t[f],x=a[h.id];x.needsUpdate!==!1&&h.setValue(e,x.value,u)}}static seqWithValue(e,t){const a=[];for(let u=0,f=e.length;u!==f;++u){const p=e[u];p.id in t&&a.push(p)}return a}}function V_(s,e,t){const a=s.createShader(e);return s.shaderSource(a,t),s.compileShader(a),a}let PT=0;function bT(s,e){const t=s.split(`
`),a=[],u=Math.max(e-6,0),f=Math.min(e+6,t.length);for(let p=u;p<f;p++){const h=p+1;a.push(`${h===e?">":" "} ${h}: ${t[p]}`)}return a.join(`
`)}function UT(s){switch(s){case js:return["Linear","( value )"];case Nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function W_(s,e,t){const a=s.getShaderParameter(e,s.COMPILE_STATUS),u=s.getShaderInfoLog(e).trim();if(a&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const p=parseInt(f[1]);return t.toUpperCase()+`

`+u+`

`+bT(s.getShaderSource(e),p)}else return u}function DT(s,e){const t=UT(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function IT(s,e){let t;switch(e){case HS:t="Linear";break;case GS:t="Reinhard";break;case VS:t="OptimizedCineon";break;case WS:t="ACESFilmic";break;case XS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NT(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(od).join(`
`)}function FT(s){const e=[];for(const t in s){const a=s[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function OT(s,e){const t={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let u=0;u<a;u++){const f=s.getActiveAttrib(e,u),p=f.name;let h=1;f.type===s.FLOAT_MAT2&&(h=2),f.type===s.FLOAT_MAT3&&(h=3),f.type===s.FLOAT_MAT4&&(h=4),t[p]={type:f.type,location:s.getAttribLocation(e,p),locationSize:h}}return t}function od(s){return s!==""}function X_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Km(s){return s.replace(BT,kT)}const zT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kT(s,e){let t=It[e];if(t===void 0){const a=zT.get(e);if(a!==void 0)t=It[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Km(t)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(s){return s.replace(HT,GT)}function GT(s,e,t,a){let u="";for(let f=parseInt(e);f<parseInt(t);f++)u+=a.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Y_(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ro&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Tc:case wc:e="ENVMAP_TYPE_CUBE";break;case lp:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wc:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lv:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case kS:e="ENVMAP_BLENDING_ADD";break}return e}function qT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:a,maxMip:t}}function YT(s,e,t,a){const u=s.getContext(),f=t.defines;let p=t.vertexShader,h=t.fragmentShader;const x=VT(t),v=WT(t),S=XT(t),M=jT(t),E=qT(t),A=t.isWebGL2?"":NT(t),P=FT(f),L=u.createProgram();let T,y,H=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(od).join(`
`),T.length>0&&(T+=`
`),y=[A,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(od).join(`
`),y.length>0&&(y+=`
`)):(T=[Y_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(od).join(`
`),y=[A,Y_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",t.envMap?"#define "+M:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bo?"#define TONE_MAPPING":"",t.toneMapping!==bo?It.tonemapping_pars_fragment:"",t.toneMapping!==bo?IT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,DT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(od).join(`
`)),p=Km(p),p=X_(p,t),p=j_(p,t),h=Km(h),h=X_(h,t),h=j_(h,t),p=q_(p),h=q_(h),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,T=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",t.glslVersion===h_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===h_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=H+T+p,O=H+y+h,W=V_(u,u.VERTEX_SHADER,D),q=V_(u,u.FRAGMENT_SHADER,O);if(u.attachShader(L,W),u.attachShader(L,q),t.index0AttributeName!==void 0?u.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&u.bindAttribLocation(L,0,"position"),u.linkProgram(L),s.debug.checkShaderErrors){const I=u.getProgramInfoLog(L).trim(),G=u.getShaderInfoLog(W).trim(),Me=u.getShaderInfoLog(q).trim();let Re=!0,se=!0;if(u.getProgramParameter(L,u.LINK_STATUS)===!1)if(Re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(u,L,W,q);else{const de=W_(u,W,"vertex"),me=W_(u,q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(L,u.VALIDATE_STATUS)+`

Program Info Log: `+I+`
`+de+`
`+me)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(G===""||Me==="")&&(se=!1);se&&(this.diagnostics={runnable:Re,programLog:I,vertexShader:{log:G,prefix:T},fragmentShader:{log:Me,prefix:y}})}u.deleteShader(W),u.deleteShader(q);let X;this.getUniforms=function(){return X===void 0&&(X=new sp(u,L)),X};let fe;return this.getAttributes=function(){return fe===void 0&&(fe=OT(u,L)),fe},this.destroy=function(){a.releaseStatesOfProgram(this),u.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PT++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=W,this.fragmentShader=q,this}let $T=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,u=this._getShaderStage(t),f=this._getShaderStage(a),p=this._getShaderCacheForMaterial(e);return p.has(u)===!1&&(p.add(u),u.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new ZT(e),t.set(e,a)),a}}class ZT{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}}function QT(s,e,t,a,u,f,p){const h=new Mv,x=new KT,v=[],S=u.isWebGL2,M=u.logarithmicDepthBuffer,E=u.vertexTextures;let A=u.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(I){return I===0?"uv":`uv${I}`}function T(I,G,Me,Re,se){const de=Re.fog,me=se.geometry,Ee=I.isMeshStandardMaterial?Re.environment:null,ue=(I.isMeshStandardMaterial?t:e).get(I.envMap||Ee),Z=ue&&ue.mapping===lp?ue.image.height:null,pe=P[I.type];I.precision!==null&&(A=u.getMaxPrecision(I.precision),A!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",A,"instead."));const U=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,k=U!==void 0?U.length:0;let J=0;me.morphAttributes.position!==void 0&&(J=1),me.morphAttributes.normal!==void 0&&(J=2),me.morphAttributes.color!==void 0&&(J=3);let Ce,Ae,Ue,Be;if(pe){const Mi=Xs[pe];Ce=Mi.vertexShader,Ae=Mi.fragmentShader}else Ce=I.vertexShader,Ae=I.fragmentShader,x.update(I),Ue=x.getVertexShaderID(I),Be=x.getFragmentShaderID(I);const Ye=s.getRenderTarget(),ze=se.isInstancedMesh===!0,pt=!!I.map,Zn=!!I.matcap,Mt=!!ue,re=!!I.aoMap,xn=!!I.lightMap,nt=!!I.bumpMap,vt=!!I.normalMap,St=!!I.displacementMap,Bt=!!I.emissiveMap,Lt=!!I.metalnessMap,Tt=!!I.roughnessMap,Ft=I.anisotropy>0,Gt=I.clearcoat>0,dn=I.iridescence>0,B=I.sheen>0,N=I.transmission>0,ge=Ft&&!!I.anisotropyMap,Oe=Gt&&!!I.clearcoatMap,Ie=Gt&&!!I.clearcoatNormalMap,ke=Gt&&!!I.clearcoatRoughnessMap,rt=dn&&!!I.iridescenceMap,He=dn&&!!I.iridescenceThicknessMap,ve=B&&!!I.sheenColorMap,at=B&&!!I.sheenRoughnessMap,ot=!!I.specularMap,lt=!!I.specularColorMap,et=!!I.specularIntensityMap,Ke=N&&!!I.transmissionMap,Et=N&&!!I.thicknessMap,$t=!!I.gradientMap,$=!!I.alphaMap,Ge=I.alphaTest>0,ce=!!I.alphaHash,Ne=!!I.extensions,We=!!me.attributes.uv1,zt=!!me.attributes.uv2,tn=!!me.attributes.uv3;return{isWebGL2:S,shaderID:pe,shaderType:I.type,shaderName:I.name,vertexShader:Ce,fragmentShader:Ae,defines:I.defines,customVertexShaderID:Ue,customFragmentShaderID:Be,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:A,instancing:ze,instancingColor:ze&&se.instanceColor!==null,supportsVertexTextures:E,outputColorSpace:Ye===null?s.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:js,map:pt,matcap:Zn,envMap:Mt,envMapMode:Mt&&ue.mapping,envMapCubeUVHeight:Z,aoMap:re,lightMap:xn,bumpMap:nt,normalMap:vt,displacementMap:E&&St,emissiveMap:Bt,normalMapObjectSpace:vt&&I.normalMapType===sy,normalMapTangentSpace:vt&&I.normalMapType===ry,metalnessMap:Lt,roughnessMap:Tt,anisotropy:Ft,anisotropyMap:ge,clearcoat:Gt,clearcoatMap:Oe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ke,iridescence:dn,iridescenceMap:rt,iridescenceThicknessMap:He,sheen:B,sheenColorMap:ve,sheenRoughnessMap:at,specularMap:ot,specularColorMap:lt,specularIntensityMap:et,transmission:N,transmissionMap:Ke,thicknessMap:Et,gradientMap:$t,opaque:I.transparent===!1&&I.blending===yc,alphaMap:$,alphaTest:Ge,alphaHash:ce,combine:I.combine,mapUv:pt&&L(I.map.channel),aoMapUv:re&&L(I.aoMap.channel),lightMapUv:xn&&L(I.lightMap.channel),bumpMapUv:nt&&L(I.bumpMap.channel),normalMapUv:vt&&L(I.normalMap.channel),displacementMapUv:St&&L(I.displacementMap.channel),emissiveMapUv:Bt&&L(I.emissiveMap.channel),metalnessMapUv:Lt&&L(I.metalnessMap.channel),roughnessMapUv:Tt&&L(I.roughnessMap.channel),anisotropyMapUv:ge&&L(I.anisotropyMap.channel),clearcoatMapUv:Oe&&L(I.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&L(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&L(I.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&L(I.iridescenceMap.channel),iridescenceThicknessMapUv:He&&L(I.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&L(I.sheenColorMap.channel),sheenRoughnessMapUv:at&&L(I.sheenRoughnessMap.channel),specularMapUv:ot&&L(I.specularMap.channel),specularColorMapUv:lt&&L(I.specularColorMap.channel),specularIntensityMapUv:et&&L(I.specularIntensityMap.channel),transmissionMapUv:Ke&&L(I.transmissionMap.channel),thicknessMapUv:Et&&L(I.thicknessMap.channel),alphaMapUv:$&&L(I.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(vt||Ft),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,vertexUv1s:We,vertexUv2s:zt,vertexUv3s:tn,pointsUvs:se.isPoints===!0&&!!me.attributes.uv&&(pt||$),fog:!!de,useFog:I.fog===!0,fogExp2:de&&de.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:M,skinning:se.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:J,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&Me.length>0,shadowMapType:s.shadowMap.type,toneMapping:I.toneMapped?s.toneMapping:bo,useLegacyLights:s.useLegacyLights,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Co,flipSided:I.side===ar,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionDerivatives:Ne&&I.extensions.derivatives===!0,extensionFragDepth:Ne&&I.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&I.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&I.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:S||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:S||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:S||a.has("EXT_shader_texture_lod"),customProgramCacheKey:I.customProgramCacheKey()}}function y(I){const G=[];if(I.shaderID?G.push(I.shaderID):(G.push(I.customVertexShaderID),G.push(I.customFragmentShaderID)),I.defines!==void 0)for(const Me in I.defines)G.push(Me),G.push(I.defines[Me]);return I.isRawShaderMaterial===!1&&(H(G,I),D(G,I),G.push(s.outputColorSpace)),G.push(I.customProgramCacheKey),G.join()}function H(I,G){I.push(G.precision),I.push(G.outputColorSpace),I.push(G.envMapMode),I.push(G.envMapCubeUVHeight),I.push(G.mapUv),I.push(G.alphaMapUv),I.push(G.lightMapUv),I.push(G.aoMapUv),I.push(G.bumpMapUv),I.push(G.normalMapUv),I.push(G.displacementMapUv),I.push(G.emissiveMapUv),I.push(G.metalnessMapUv),I.push(G.roughnessMapUv),I.push(G.anisotropyMapUv),I.push(G.clearcoatMapUv),I.push(G.clearcoatNormalMapUv),I.push(G.clearcoatRoughnessMapUv),I.push(G.iridescenceMapUv),I.push(G.iridescenceThicknessMapUv),I.push(G.sheenColorMapUv),I.push(G.sheenRoughnessMapUv),I.push(G.specularMapUv),I.push(G.specularColorMapUv),I.push(G.specularIntensityMapUv),I.push(G.transmissionMapUv),I.push(G.thicknessMapUv),I.push(G.combine),I.push(G.fogExp2),I.push(G.sizeAttenuation),I.push(G.morphTargetsCount),I.push(G.morphAttributeCount),I.push(G.numDirLights),I.push(G.numPointLights),I.push(G.numSpotLights),I.push(G.numSpotLightMaps),I.push(G.numHemiLights),I.push(G.numRectAreaLights),I.push(G.numDirLightShadows),I.push(G.numPointLightShadows),I.push(G.numSpotLightShadows),I.push(G.numSpotLightShadowsWithMaps),I.push(G.shadowMapType),I.push(G.toneMapping),I.push(G.numClippingPlanes),I.push(G.numClipIntersection),I.push(G.depthPacking)}function D(I,G){h.disableAll(),G.isWebGL2&&h.enable(0),G.supportsVertexTextures&&h.enable(1),G.instancing&&h.enable(2),G.instancingColor&&h.enable(3),G.matcap&&h.enable(4),G.envMap&&h.enable(5),G.normalMapObjectSpace&&h.enable(6),G.normalMapTangentSpace&&h.enable(7),G.clearcoat&&h.enable(8),G.iridescence&&h.enable(9),G.alphaTest&&h.enable(10),G.vertexColors&&h.enable(11),G.vertexAlphas&&h.enable(12),G.vertexUv1s&&h.enable(13),G.vertexUv2s&&h.enable(14),G.vertexUv3s&&h.enable(15),G.vertexTangents&&h.enable(16),G.anisotropy&&h.enable(17),I.push(h.mask),h.disableAll(),G.fog&&h.enable(0),G.useFog&&h.enable(1),G.flatShading&&h.enable(2),G.logarithmicDepthBuffer&&h.enable(3),G.skinning&&h.enable(4),G.morphTargets&&h.enable(5),G.morphNormals&&h.enable(6),G.morphColors&&h.enable(7),G.premultipliedAlpha&&h.enable(8),G.shadowMapEnabled&&h.enable(9),G.useLegacyLights&&h.enable(10),G.doubleSided&&h.enable(11),G.flipSided&&h.enable(12),G.useDepthPacking&&h.enable(13),G.dithering&&h.enable(14),G.transmission&&h.enable(15),G.sheen&&h.enable(16),G.opaque&&h.enable(17),G.pointsUvs&&h.enable(18),I.push(h.mask)}function O(I){const G=P[I.type];let Me;if(G){const Re=Xs[G];Me=Oy.clone(Re.uniforms)}else Me=I.uniforms;return Me}function W(I,G){let Me;for(let Re=0,se=v.length;Re<se;Re++){const de=v[Re];if(de.cacheKey===G){Me=de,++Me.usedTimes;break}}return Me===void 0&&(Me=new YT(s,G,I,f),v.push(Me)),Me}function q(I){if(--I.usedTimes===0){const G=v.indexOf(I);v[G]=v[v.length-1],v.pop(),I.destroy()}}function X(I){x.remove(I)}function fe(){x.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:O,acquireProgram:W,releaseProgram:q,releaseShaderCache:X,programs:v,dispose:fe}}function JT(){let s=new WeakMap;function e(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function t(f){s.delete(f)}function a(f,p,h){s.get(f)[p]=h}function u(){s=new WeakMap}return{get:e,remove:t,update:a,dispose:u}}function ew(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function K_(){const s=[];let e=0;const t=[],a=[],u=[];function f(){e=0,t.length=0,a.length=0,u.length=0}function p(M,E,A,P,L,T){let y=s[e];return y===void 0?(y={id:M.id,object:M,geometry:E,material:A,groupOrder:P,renderOrder:M.renderOrder,z:L,group:T},s[e]=y):(y.id=M.id,y.object=M,y.geometry=E,y.material=A,y.groupOrder=P,y.renderOrder=M.renderOrder,y.z=L,y.group=T),e++,y}function h(M,E,A,P,L,T){const y=p(M,E,A,P,L,T);A.transmission>0?a.push(y):A.transparent===!0?u.push(y):t.push(y)}function x(M,E,A,P,L,T){const y=p(M,E,A,P,L,T);A.transmission>0?a.unshift(y):A.transparent===!0?u.unshift(y):t.unshift(y)}function v(M,E){t.length>1&&t.sort(M||ew),a.length>1&&a.sort(E||$_),u.length>1&&u.sort(E||$_)}function S(){for(let M=e,E=s.length;M<E;M++){const A=s[M];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:a,transparent:u,init:f,push:h,unshift:x,finish:S,sort:v}}function tw(){let s=new WeakMap;function e(a,u){const f=s.get(a);let p;return f===void 0?(p=new K_,s.set(a,[p])):u>=f.length?(p=new K_,f.push(p)):p=f[u],p}function t(){s=new WeakMap}return{get:e,dispose:t}}function nw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new gn};break;case"SpotLight":t={position:new he,direction:new he,color:new gn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new gn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new gn,groundColor:new gn};break;case"RectAreaLight":t={color:new gn,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function iw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fn};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fn};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fn,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rw=0;function sw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ow(s,e){const t=new nw,a=iw(),u={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let S=0;S<9;S++)u.probe.push(new he);const f=new he,p=new yi,h=new yi;function x(S,M){let E=0,A=0,P=0;for(let Me=0;Me<9;Me++)u.probe[Me].set(0,0,0);let L=0,T=0,y=0,H=0,D=0,O=0,W=0,q=0,X=0,fe=0;S.sort(sw);const I=M===!0?Math.PI:1;for(let Me=0,Re=S.length;Me<Re;Me++){const se=S[Me],de=se.color,me=se.intensity,Ee=se.distance,ue=se.shadow&&se.shadow.map?se.shadow.map.texture:null;if(se.isAmbientLight)E+=de.r*me*I,A+=de.g*me*I,P+=de.b*me*I;else if(se.isLightProbe)for(let Z=0;Z<9;Z++)u.probe[Z].addScaledVector(se.sh.coefficients[Z],me);else if(se.isDirectionalLight){const Z=t.get(se);if(Z.color.copy(se.color).multiplyScalar(se.intensity*I),se.castShadow){const pe=se.shadow,U=a.get(se);U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize=pe.mapSize,u.directionalShadow[L]=U,u.directionalShadowMap[L]=ue,u.directionalShadowMatrix[L]=se.shadow.matrix,O++}u.directional[L]=Z,L++}else if(se.isSpotLight){const Z=t.get(se);Z.position.setFromMatrixPosition(se.matrixWorld),Z.color.copy(de).multiplyScalar(me*I),Z.distance=Ee,Z.coneCos=Math.cos(se.angle),Z.penumbraCos=Math.cos(se.angle*(1-se.penumbra)),Z.decay=se.decay,u.spot[y]=Z;const pe=se.shadow;if(se.map&&(u.spotLightMap[X]=se.map,X++,pe.updateMatrices(se),se.castShadow&&fe++),u.spotLightMatrix[y]=pe.matrix,se.castShadow){const U=a.get(se);U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize=pe.mapSize,u.spotShadow[y]=U,u.spotShadowMap[y]=ue,q++}y++}else if(se.isRectAreaLight){const Z=t.get(se);Z.color.copy(de).multiplyScalar(me),Z.halfWidth.set(se.width*.5,0,0),Z.halfHeight.set(0,se.height*.5,0),u.rectArea[H]=Z,H++}else if(se.isPointLight){const Z=t.get(se);if(Z.color.copy(se.color).multiplyScalar(se.intensity*I),Z.distance=se.distance,Z.decay=se.decay,se.castShadow){const pe=se.shadow,U=a.get(se);U.shadowBias=pe.bias,U.shadowNormalBias=pe.normalBias,U.shadowRadius=pe.radius,U.shadowMapSize=pe.mapSize,U.shadowCameraNear=pe.camera.near,U.shadowCameraFar=pe.camera.far,u.pointShadow[T]=U,u.pointShadowMap[T]=ue,u.pointShadowMatrix[T]=se.shadow.matrix,W++}u.point[T]=Z,T++}else if(se.isHemisphereLight){const Z=t.get(se);Z.skyColor.copy(se.color).multiplyScalar(me*I),Z.groundColor.copy(se.groundColor).multiplyScalar(me*I),u.hemi[D]=Z,D++}}H>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(u.rectAreaLTC1=Ve.LTC_FLOAT_1,u.rectAreaLTC2=Ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(u.rectAreaLTC1=Ve.LTC_HALF_1,u.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),u.ambient[0]=E,u.ambient[1]=A,u.ambient[2]=P;const G=u.hash;(G.directionalLength!==L||G.pointLength!==T||G.spotLength!==y||G.rectAreaLength!==H||G.hemiLength!==D||G.numDirectionalShadows!==O||G.numPointShadows!==W||G.numSpotShadows!==q||G.numSpotMaps!==X)&&(u.directional.length=L,u.spot.length=y,u.rectArea.length=H,u.point.length=T,u.hemi.length=D,u.directionalShadow.length=O,u.directionalShadowMap.length=O,u.pointShadow.length=W,u.pointShadowMap.length=W,u.spotShadow.length=q,u.spotShadowMap.length=q,u.directionalShadowMatrix.length=O,u.pointShadowMatrix.length=W,u.spotLightMatrix.length=q+X-fe,u.spotLightMap.length=X,u.numSpotLightShadowsWithMaps=fe,G.directionalLength=L,G.pointLength=T,G.spotLength=y,G.rectAreaLength=H,G.hemiLength=D,G.numDirectionalShadows=O,G.numPointShadows=W,G.numSpotShadows=q,G.numSpotMaps=X,u.version=rw++)}function v(S,M){let E=0,A=0,P=0,L=0,T=0;const y=M.matrixWorldInverse;for(let H=0,D=S.length;H<D;H++){const O=S[H];if(O.isDirectionalLight){const W=u.directional[E];W.direction.setFromMatrixPosition(O.matrixWorld),f.setFromMatrixPosition(O.target.matrixWorld),W.direction.sub(f),W.direction.transformDirection(y),E++}else if(O.isSpotLight){const W=u.spot[P];W.position.setFromMatrixPosition(O.matrixWorld),W.position.applyMatrix4(y),W.direction.setFromMatrixPosition(O.matrixWorld),f.setFromMatrixPosition(O.target.matrixWorld),W.direction.sub(f),W.direction.transformDirection(y),P++}else if(O.isRectAreaLight){const W=u.rectArea[L];W.position.setFromMatrixPosition(O.matrixWorld),W.position.applyMatrix4(y),h.identity(),p.copy(O.matrixWorld),p.premultiply(y),h.extractRotation(p),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),W.halfWidth.applyMatrix4(h),W.halfHeight.applyMatrix4(h),L++}else if(O.isPointLight){const W=u.point[A];W.position.setFromMatrixPosition(O.matrixWorld),W.position.applyMatrix4(y),A++}else if(O.isHemisphereLight){const W=u.hemi[T];W.direction.setFromMatrixPosition(O.matrixWorld),W.direction.transformDirection(y),T++}}}return{setup:x,setupView:v,state:u}}function Z_(s,e){const t=new ow(s,e),a=[],u=[];function f(){a.length=0,u.length=0}function p(M){a.push(M)}function h(M){u.push(M)}function x(M){t.setup(a,M)}function v(M){t.setupView(a,M)}return{init:f,state:{lightsArray:a,shadowsArray:u,lights:t},setupLights:x,setupLightsView:v,pushLight:p,pushShadow:h}}function aw(s,e){let t=new WeakMap;function a(f,p=0){const h=t.get(f);let x;return h===void 0?(x=new Z_(s,e),t.set(f,[x])):p>=h.length?(x=new Z_(s,e),h.push(x)):x=h[p],x}function u(){t=new WeakMap}return{get:a,dispose:u}}class lw extends cp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uw extends cp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
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
}`;function dw(s,e,t){let a=new Lv;const u=new fn,f=new fn,p=new Si,h=new lw({depthPacking:iy}),x=new uw,v={},S=t.maxTextureSize,M={[Ra]:ar,[ar]:Ra,[Co]:Co},E=new Ul({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fn},radius:{value:4}},vertexShader:cw,fragmentShader:fw}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const P=new Do;P.setAttribute("position",new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Po(P,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sv;let y=this.type;this.render=function(W,q,X){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||W.length===0)return;const fe=s.getRenderTarget(),I=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Me=s.state;Me.setBlending(wa),Me.buffers.color.setClear(1,1,1,1),Me.buffers.depth.setTest(!0),Me.setScissorTest(!1);const Re=y!==Ro&&this.type===Ro,se=y===Ro&&this.type!==Ro;for(let de=0,me=W.length;de<me;de++){const Ee=W[de],ue=Ee.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",Ee,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;u.copy(ue.mapSize);const Z=ue.getFrameExtents();if(u.multiply(Z),f.copy(ue.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/Z.x),u.x=f.x*Z.x,ue.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/Z.y),u.y=f.y*Z.y,ue.mapSize.y=f.y)),ue.map===null||Re===!0||se===!0){const U=this.type!==Ro?{minFilter:Wi,magFilter:Wi}:{};ue.map!==null&&ue.map.dispose(),ue.map=new bl(u.x,u.y,U),ue.map.texture.name=Ee.name+".shadowMap",ue.camera.updateProjectionMatrix()}s.setRenderTarget(ue.map),s.clear();const pe=ue.getViewportCount();for(let U=0;U<pe;U++){const k=ue.getViewport(U);p.set(f.x*k.x,f.y*k.y,f.x*k.z,f.y*k.w),Me.viewport(p),ue.updateMatrices(Ee,U),a=ue.getFrustum(),O(q,X,ue.camera,Ee,this.type)}ue.isPointLightShadow!==!0&&this.type===Ro&&H(ue,X),ue.needsUpdate=!1}y=this.type,T.needsUpdate=!1,s.setRenderTarget(fe,I,G)};function H(W,q){const X=e.update(L);E.defines.VSM_SAMPLES!==W.blurSamples&&(E.defines.VSM_SAMPLES=W.blurSamples,A.defines.VSM_SAMPLES=W.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),W.mapPass===null&&(W.mapPass=new bl(u.x,u.y)),E.uniforms.shadow_pass.value=W.map.texture,E.uniforms.resolution.value=W.mapSize,E.uniforms.radius.value=W.radius,s.setRenderTarget(W.mapPass),s.clear(),s.renderBufferDirect(q,null,X,E,L,null),A.uniforms.shadow_pass.value=W.mapPass.texture,A.uniforms.resolution.value=W.mapSize,A.uniforms.radius.value=W.radius,s.setRenderTarget(W.map),s.clear(),s.renderBufferDirect(q,null,X,A,L,null)}function D(W,q,X,fe){let I=null;const G=X.isPointLight===!0?W.customDistanceMaterial:W.customDepthMaterial;if(G!==void 0)I=G;else if(I=X.isPointLight===!0?x:h,s.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0){const Me=I.uuid,Re=q.uuid;let se=v[Me];se===void 0&&(se={},v[Me]=se);let de=se[Re];de===void 0&&(de=I.clone(),se[Re]=de),I=de}if(I.visible=q.visible,I.wireframe=q.wireframe,fe===Ro?I.side=q.shadowSide!==null?q.shadowSide:q.side:I.side=q.shadowSide!==null?q.shadowSide:M[q.side],I.alphaMap=q.alphaMap,I.alphaTest=q.alphaTest,I.map=q.map,I.clipShadows=q.clipShadows,I.clippingPlanes=q.clippingPlanes,I.clipIntersection=q.clipIntersection,I.displacementMap=q.displacementMap,I.displacementScale=q.displacementScale,I.displacementBias=q.displacementBias,I.wireframeLinewidth=q.wireframeLinewidth,I.linewidth=q.linewidth,X.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const Me=s.properties.get(I);Me.light=X}return I}function O(W,q,X,fe,I){if(W.visible===!1)return;if(W.layers.test(q.layers)&&(W.isMesh||W.isLine||W.isPoints)&&(W.castShadow||W.receiveShadow&&I===Ro)&&(!W.frustumCulled||a.intersectsObject(W))){W.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,W.matrixWorld);const Re=e.update(W),se=W.material;if(Array.isArray(se)){const de=Re.groups;for(let me=0,Ee=de.length;me<Ee;me++){const ue=de[me],Z=se[ue.materialIndex];if(Z&&Z.visible){const pe=D(W,Z,fe,I);s.renderBufferDirect(X,null,Re,pe,W,ue)}}}else if(se.visible){const de=D(W,se,fe,I);s.renderBufferDirect(X,null,Re,de,W,null)}}const Me=W.children;for(let Re=0,se=Me.length;Re<se;Re++)O(Me[Re],q,X,fe,I)}}function hw(s,e,t){const a=t.isWebGL2;function u(){let $=!1;const Ge=new Si;let ce=null;const Ne=new Si(0,0,0,0);return{setMask:function(We){ce!==We&&!$&&(s.colorMask(We,We,We,We),ce=We)},setLocked:function(We){$=We},setClear:function(We,zt,tn,Tn,Mi){Mi===!0&&(We*=Tn,zt*=Tn,tn*=Tn),Ge.set(We,zt,tn,Tn),Ne.equals(Ge)===!1&&(s.clearColor(We,zt,tn,Tn),Ne.copy(Ge))},reset:function(){$=!1,ce=null,Ne.set(-1,0,0,0)}}}function f(){let $=!1,Ge=null,ce=null,Ne=null;return{setTest:function(We){We?Ye(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(We){Ge!==We&&!$&&(s.depthMask(We),Ge=We)},setFunc:function(We){if(ce!==We){switch(We){case US:s.depthFunc(s.NEVER);break;case DS:s.depthFunc(s.ALWAYS);break;case IS:s.depthFunc(s.LESS);break;case Gm:s.depthFunc(s.LEQUAL);break;case NS:s.depthFunc(s.EQUAL);break;case FS:s.depthFunc(s.GEQUAL);break;case OS:s.depthFunc(s.GREATER);break;case BS:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=We}},setLocked:function(We){$=We},setClear:function(We){Ne!==We&&(s.clearDepth(We),Ne=We)},reset:function(){$=!1,Ge=null,ce=null,Ne=null}}}function p(){let $=!1,Ge=null,ce=null,Ne=null,We=null,zt=null,tn=null,Tn=null,Mi=null;return{setTest:function(nn){$||(nn?Ye(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(nn){Ge!==nn&&!$&&(s.stencilMask(nn),Ge=nn)},setFunc:function(nn,Ui,wn){(ce!==nn||Ne!==Ui||We!==wn)&&(s.stencilFunc(nn,Ui,wn),ce=nn,Ne=Ui,We=wn)},setOp:function(nn,Ui,wn){(zt!==nn||tn!==Ui||Tn!==wn)&&(s.stencilOp(nn,Ui,wn),zt=nn,tn=Ui,Tn=wn)},setLocked:function(nn){$=nn},setClear:function(nn){Mi!==nn&&(s.clearStencil(nn),Mi=nn)},reset:function(){$=!1,Ge=null,ce=null,Ne=null,We=null,zt=null,tn=null,Tn=null,Mi=null}}}const h=new u,x=new f,v=new p,S=new WeakMap,M=new WeakMap;let E={},A={},P=new WeakMap,L=[],T=null,y=!1,H=null,D=null,O=null,W=null,q=null,X=null,fe=null,I=!1,G=null,Me=null,Re=null,se=null,de=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Ee=!1,ue=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Ee=ue>=1):Z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Ee=ue>=2);let pe=null,U={};const k=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),Ce=new Si().fromArray(k),Ae=new Si().fromArray(J);function Ue($,Ge,ce,Ne){const We=new Uint8Array(4),zt=s.createTexture();s.bindTexture($,zt),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tn=0;tn<ce;tn++)a&&($===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ge,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,We):s.texImage2D(Ge+tn,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,We);return zt}const Be={};Be[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Be[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),a&&(Be[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Be[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),x.setClear(1),v.setClear(0),Ye(s.DEPTH_TEST),x.setFunc(Gm),St(!1),Bt(Fg),Ye(s.CULL_FACE),nt(wa);function Ye($){E[$]!==!0&&(s.enable($),E[$]=!0)}function ze($){E[$]!==!1&&(s.disable($),E[$]=!1)}function pt($,Ge){return A[$]!==Ge?(s.bindFramebuffer($,Ge),A[$]=Ge,a&&($===s.DRAW_FRAMEBUFFER&&(A[s.FRAMEBUFFER]=Ge),$===s.FRAMEBUFFER&&(A[s.DRAW_FRAMEBUFFER]=Ge)),!0):!1}function Zn($,Ge){let ce=L,Ne=!1;if($)if(ce=P.get(Ge),ce===void 0&&(ce=[],P.set(Ge,ce)),$.isWebGLMultipleRenderTargets){const We=$.texture;if(ce.length!==We.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let zt=0,tn=We.length;zt<tn;zt++)ce[zt]=s.COLOR_ATTACHMENT0+zt;ce.length=We.length,Ne=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Ne=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ne=!0);Ne&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Mt($){return T!==$?(s.useProgram($),T=$,!0):!1}const re={[vc]:s.FUNC_ADD,[yS]:s.FUNC_SUBTRACT,[MS]:s.FUNC_REVERSE_SUBTRACT};if(a)re[kg]=s.MIN,re[Hg]=s.MAX;else{const $=e.get("EXT_blend_minmax");$!==null&&(re[kg]=$.MIN_EXT,re[Hg]=$.MAX_EXT)}const xn={[ES]:s.ZERO,[TS]:s.ONE,[wS]:s.SRC_COLOR,[ov]:s.SRC_ALPHA,[bS]:s.SRC_ALPHA_SATURATE,[LS]:s.DST_COLOR,[RS]:s.DST_ALPHA,[AS]:s.ONE_MINUS_SRC_COLOR,[av]:s.ONE_MINUS_SRC_ALPHA,[PS]:s.ONE_MINUS_DST_COLOR,[CS]:s.ONE_MINUS_DST_ALPHA};function nt($,Ge,ce,Ne,We,zt,tn,Tn){if($===wa){y===!0&&(ze(s.BLEND),y=!1);return}if(y===!1&&(Ye(s.BLEND),y=!0),$!==SS){if($!==H||Tn!==I){if((D!==vc||q!==vc)&&(s.blendEquation(s.FUNC_ADD),D=vc,q=vc),Tn)switch($){case yc:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Og:s.blendFunc(s.ONE,s.ONE);break;case Bg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case yc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Og:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}O=null,W=null,X=null,fe=null,H=$,I=Tn}return}We=We||Ge,zt=zt||ce,tn=tn||Ne,(Ge!==D||We!==q)&&(s.blendEquationSeparate(re[Ge],re[We]),D=Ge,q=We),(ce!==O||Ne!==W||zt!==X||tn!==fe)&&(s.blendFuncSeparate(xn[ce],xn[Ne],xn[zt],xn[tn]),O=ce,W=Ne,X=zt,fe=tn),H=$,I=!1}function vt($,Ge){$.side===Co?ze(s.CULL_FACE):Ye(s.CULL_FACE);let ce=$.side===ar;Ge&&(ce=!ce),St(ce),$.blending===yc&&$.transparent===!1?nt(wa):nt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),x.setFunc($.depthFunc),x.setTest($.depthTest),x.setMask($.depthWrite),h.setMask($.colorWrite);const Ne=$.stencilWrite;v.setTest(Ne),Ne&&(v.setMask($.stencilWriteMask),v.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),v.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Tt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Ye(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function St($){G!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),G=$)}function Bt($){$!==_S?(Ye(s.CULL_FACE),$!==Me&&($===Fg?s.cullFace(s.BACK):$===vS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),Me=$}function Lt($){$!==Re&&(Ee&&s.lineWidth($),Re=$)}function Tt($,Ge,ce){$?(Ye(s.POLYGON_OFFSET_FILL),(se!==Ge||de!==ce)&&(s.polygonOffset(Ge,ce),se=Ge,de=ce)):ze(s.POLYGON_OFFSET_FILL)}function Ft($){$?Ye(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Gt($){$===void 0&&($=s.TEXTURE0+me-1),pe!==$&&(s.activeTexture($),pe=$)}function dn($,Ge,ce){ce===void 0&&(pe===null?ce=s.TEXTURE0+me-1:ce=pe);let Ne=U[ce];Ne===void 0&&(Ne={type:void 0,texture:void 0},U[ce]=Ne),(Ne.type!==$||Ne.texture!==Ge)&&(pe!==ce&&(s.activeTexture(ce),pe=ce),s.bindTexture($,Ge||Be[$]),Ne.type=$,Ne.texture=Ge)}function B(){const $=U[pe];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function N(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Oe(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ie(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ot(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function lt($){Ce.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Ce.copy($))}function et($){Ae.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Ae.copy($))}function Ke($,Ge){let ce=M.get(Ge);ce===void 0&&(ce=new WeakMap,M.set(Ge,ce));let Ne=ce.get($);Ne===void 0&&(Ne=s.getUniformBlockIndex(Ge,$.name),ce.set($,Ne))}function Et($,Ge){const Ne=M.get(Ge).get($);S.get(Ge)!==Ne&&(s.uniformBlockBinding(Ge,Ne,$.__bindingPointIndex),S.set(Ge,Ne))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),a===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),E={},pe=null,U={},A={},P=new WeakMap,L=[],T=null,y=!1,H=null,D=null,O=null,W=null,q=null,X=null,fe=null,I=!1,G=null,Me=null,Re=null,se=null,de=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),h.reset(),x.reset(),v.reset()}return{buffers:{color:h,depth:x,stencil:v},enable:Ye,disable:ze,bindFramebuffer:pt,drawBuffers:Zn,useProgram:Mt,setBlending:nt,setMaterial:vt,setFlipSided:St,setCullFace:Bt,setLineWidth:Lt,setPolygonOffset:Tt,setScissorTest:Ft,activeTexture:Gt,bindTexture:dn,unbindTexture:B,compressedTexImage2D:N,compressedTexImage3D:ge,texImage2D:at,texImage3D:ot,updateUBOMapping:Ke,uniformBlockBinding:Et,texStorage2D:He,texStorage3D:ve,texSubImage2D:Oe,texSubImage3D:Ie,compressedTexSubImage2D:ke,compressedTexSubImage3D:rt,scissor:lt,viewport:et,reset:$t}}function pw(s,e,t,a,u,f,p){const h=u.isWebGL2,x=u.maxTextures,v=u.maxCubemapSize,S=u.maxTextureSize,M=u.maxSamples,E=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),P=new WeakMap;let L;const T=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function H(B,N){return y?new OffscreenCanvas(B,N):ap("canvas")}function D(B,N,ge,Oe){let Ie=1;if((B.width>Oe||B.height>Oe)&&(Ie=Oe/Math.max(B.width,B.height)),Ie<1||N===!0)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap){const ke=N?$m:Math.floor,rt=ke(Ie*B.width),He=ke(Ie*B.height);L===void 0&&(L=H(rt,He));const ve=ge?H(rt,He):L;return ve.width=rt,ve.height=He,ve.getContext("2d").drawImage(B,0,0,rt,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+rt+"x"+He+")."),ve}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function O(B){return p_(B.width)&&p_(B.height)}function W(B){return h?!1:B.wrapS!==cs||B.wrapT!==cs||B.minFilter!==Wi&&B.minFilter!==Gr}function q(B,N){return B.generateMipmaps&&N&&B.minFilter!==Wi&&B.minFilter!==Gr}function X(B){s.generateMipmap(B)}function fe(B,N,ge,Oe,Ie=!1){if(h===!1)return N;if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ke=N;return N===s.RED&&(ge===s.FLOAT&&(ke=s.R32F),ge===s.HALF_FLOAT&&(ke=s.R16F),ge===s.UNSIGNED_BYTE&&(ke=s.R8)),N===s.RG&&(ge===s.FLOAT&&(ke=s.RG32F),ge===s.HALF_FLOAT&&(ke=s.RG16F),ge===s.UNSIGNED_BYTE&&(ke=s.RG8)),N===s.RGBA&&(ge===s.FLOAT&&(ke=s.RGBA32F),ge===s.HALF_FLOAT&&(ke=s.RGBA16F),ge===s.UNSIGNED_BYTE&&(ke=Oe===Nt&&Ie===!1?s.SRGB8_ALPHA8:s.RGBA8),ge===s.UNSIGNED_SHORT_4_4_4_4&&(ke=s.RGBA4),ge===s.UNSIGNED_SHORT_5_5_5_1&&(ke=s.RGB5_A1)),(ke===s.R16F||ke===s.R32F||ke===s.RG16F||ke===s.RG32F||ke===s.RGBA16F||ke===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ke}function I(B,N,ge){return q(B,ge)===!0||B.isFramebufferTexture&&B.minFilter!==Wi&&B.minFilter!==Gr?Math.log2(Math.max(N.width,N.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?N.mipmaps.length:1}function G(B){return B===Wi||B===Gg||B===dm?s.NEAREST:s.LINEAR}function Me(B){const N=B.target;N.removeEventListener("dispose",Me),se(N),N.isVideoTexture&&P.delete(N)}function Re(B){const N=B.target;N.removeEventListener("dispose",Re),me(N)}function se(B){const N=a.get(B);if(N.__webglInit===void 0)return;const ge=B.source,Oe=T.get(ge);if(Oe){const Ie=Oe[N.__cacheKey];Ie.usedTimes--,Ie.usedTimes===0&&de(B),Object.keys(Oe).length===0&&T.delete(ge)}a.remove(B)}function de(B){const N=a.get(B);s.deleteTexture(N.__webglTexture);const ge=B.source,Oe=T.get(ge);delete Oe[N.__cacheKey],p.memory.textures--}function me(B){const N=B.texture,ge=a.get(B),Oe=a.get(N);if(Oe.__webglTexture!==void 0&&(s.deleteTexture(Oe.__webglTexture),p.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let Ie=0;Ie<6;Ie++)s.deleteFramebuffer(ge.__webglFramebuffer[Ie]),ge.__webglDepthbuffer&&s.deleteRenderbuffer(ge.__webglDepthbuffer[Ie]);else{if(s.deleteFramebuffer(ge.__webglFramebuffer),ge.__webglDepthbuffer&&s.deleteRenderbuffer(ge.__webglDepthbuffer),ge.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ge.__webglMultisampledFramebuffer),ge.__webglColorRenderbuffer)for(let Ie=0;Ie<ge.__webglColorRenderbuffer.length;Ie++)ge.__webglColorRenderbuffer[Ie]&&s.deleteRenderbuffer(ge.__webglColorRenderbuffer[Ie]);ge.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ge.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let Ie=0,ke=N.length;Ie<ke;Ie++){const rt=a.get(N[Ie]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),p.memory.textures--),a.remove(N[Ie])}a.remove(N),a.remove(B)}let Ee=0;function ue(){Ee=0}function Z(){const B=Ee;return B>=x&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+x),Ee+=1,B}function pe(B){const N=[];return N.push(B.wrapS),N.push(B.wrapT),N.push(B.wrapR||0),N.push(B.magFilter),N.push(B.minFilter),N.push(B.anisotropy),N.push(B.internalFormat),N.push(B.format),N.push(B.type),N.push(B.generateMipmaps),N.push(B.premultiplyAlpha),N.push(B.flipY),N.push(B.unpackAlignment),N.push(B.colorSpace),N.join()}function U(B,N){const ge=a.get(B);if(B.isVideoTexture&&Gt(B),B.isRenderTargetTexture===!1&&B.version>0&&ge.__version!==B.version){const Oe=B.image;if(Oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(ge,B,N);return}}t.bindTexture(s.TEXTURE_2D,ge.__webglTexture,s.TEXTURE0+N)}function k(B,N){const ge=a.get(B);if(B.version>0&&ge.__version!==B.version){pt(ge,B,N);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ge.__webglTexture,s.TEXTURE0+N)}function J(B,N){const ge=a.get(B);if(B.version>0&&ge.__version!==B.version){pt(ge,B,N);return}t.bindTexture(s.TEXTURE_3D,ge.__webglTexture,s.TEXTURE0+N)}function Ce(B,N){const ge=a.get(B);if(B.version>0&&ge.__version!==B.version){Zn(ge,B,N);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture,s.TEXTURE0+N)}const Ae={[Xm]:s.REPEAT,[cs]:s.CLAMP_TO_EDGE,[jm]:s.MIRRORED_REPEAT},Ue={[Wi]:s.NEAREST,[Gg]:s.NEAREST_MIPMAP_NEAREST,[dm]:s.NEAREST_MIPMAP_LINEAR,[Gr]:s.LINEAR,[jS]:s.LINEAR_MIPMAP_NEAREST,[ud]:s.LINEAR_MIPMAP_LINEAR},Be={[ay]:s.NEVER,[py]:s.ALWAYS,[ly]:s.LESS,[cy]:s.LEQUAL,[uy]:s.EQUAL,[hy]:s.GEQUAL,[fy]:s.GREATER,[dy]:s.NOTEQUAL};function Ye(B,N,ge){if(ge?(s.texParameteri(B,s.TEXTURE_WRAP_S,Ae[N.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,Ae[N.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,Ae[N.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,Ue[N.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,Ue[N.minFilter])):(s.texParameteri(B,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(B,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(N.wrapS!==cs||N.wrapT!==cs)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(B,s.TEXTURE_MAG_FILTER,G(N.magFilter)),s.texParameteri(B,s.TEXTURE_MIN_FILTER,G(N.minFilter)),N.minFilter!==Wi&&N.minFilter!==Gr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),N.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Be[N.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Oe=e.get("EXT_texture_filter_anisotropic");if(N.magFilter===Wi||N.minFilter!==dm&&N.minFilter!==ud||N.type===Ta&&e.has("OES_texture_float_linear")===!1||h===!1&&N.type===cd&&e.has("OES_texture_half_float_linear")===!1)return;(N.anisotropy>1||a.get(N).__currentAnisotropy)&&(s.texParameterf(B,Oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,u.getMaxAnisotropy())),a.get(N).__currentAnisotropy=N.anisotropy)}}function ze(B,N){let ge=!1;B.__webglInit===void 0&&(B.__webglInit=!0,N.addEventListener("dispose",Me));const Oe=N.source;let Ie=T.get(Oe);Ie===void 0&&(Ie={},T.set(Oe,Ie));const ke=pe(N);if(ke!==B.__cacheKey){Ie[ke]===void 0&&(Ie[ke]={texture:s.createTexture(),usedTimes:0},p.memory.textures++,ge=!0),Ie[ke].usedTimes++;const rt=Ie[B.__cacheKey];rt!==void 0&&(Ie[B.__cacheKey].usedTimes--,rt.usedTimes===0&&de(N)),B.__cacheKey=ke,B.__webglTexture=Ie[ke].texture}return ge}function pt(B,N,ge){let Oe=s.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(Oe=s.TEXTURE_2D_ARRAY),N.isData3DTexture&&(Oe=s.TEXTURE_3D);const Ie=ze(B,N),ke=N.source;t.bindTexture(Oe,B.__webglTexture,s.TEXTURE0+ge);const rt=a.get(ke);if(ke.version!==rt.__version||Ie===!0){t.activeTexture(s.TEXTURE0+ge),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,N.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,N.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const He=W(N)&&O(N.image)===!1;let ve=D(N.image,He,!1,S);ve=dn(N,ve);const at=O(ve)||h,ot=f.convert(N.format,N.colorSpace);let lt=f.convert(N.type),et=fe(N.internalFormat,ot,lt,N.colorSpace);Ye(Oe,N,at);let Ke;const Et=N.mipmaps,$t=h&&N.isVideoTexture!==!0,$=rt.__version===void 0||Ie===!0,Ge=I(N,ve,at);if(N.isDepthTexture)et=s.DEPTH_COMPONENT,h?N.type===Ta?et=s.DEPTH_COMPONENT32F:N.type===Ea?et=s.DEPTH_COMPONENT24:N.type===Rl?et=s.DEPTH24_STENCIL8:et=s.DEPTH_COMPONENT16:N.type===Ta&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),N.format===Cl&&et===s.DEPTH_COMPONENT&&N.type!==ng&&N.type!==Ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),N.type=Ea,lt=f.convert(N.type)),N.format===Ac&&et===s.DEPTH_COMPONENT&&(et=s.DEPTH_STENCIL,N.type!==Rl&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),N.type=Rl,lt=f.convert(N.type))),$&&($t?t.texStorage2D(s.TEXTURE_2D,1,et,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,et,ve.width,ve.height,0,ot,lt,null));else if(N.isDataTexture)if(Et.length>0&&at){$t&&$&&t.texStorage2D(s.TEXTURE_2D,Ge,et,Et[0].width,Et[0].height);for(let ce=0,Ne=Et.length;ce<Ne;ce++)Ke=Et[ce],$t?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ke.width,Ke.height,ot,lt,Ke.data):t.texImage2D(s.TEXTURE_2D,ce,et,Ke.width,Ke.height,0,ot,lt,Ke.data);N.generateMipmaps=!1}else $t?($&&t.texStorage2D(s.TEXTURE_2D,Ge,et,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,ot,lt,ve.data)):t.texImage2D(s.TEXTURE_2D,0,et,ve.width,ve.height,0,ot,lt,ve.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){$t&&$&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,et,Et[0].width,Et[0].height,ve.depth);for(let ce=0,Ne=Et.length;ce<Ne;ce++)Ke=Et[ce],N.format!==fs?ot!==null?$t?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Ke.width,Ke.height,ve.depth,ot,Ke.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,et,Ke.width,Ke.height,ve.depth,0,Ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Ke.width,Ke.height,ve.depth,ot,lt,Ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,et,Ke.width,Ke.height,ve.depth,0,ot,lt,Ke.data)}else{$t&&$&&t.texStorage2D(s.TEXTURE_2D,Ge,et,Et[0].width,Et[0].height);for(let ce=0,Ne=Et.length;ce<Ne;ce++)Ke=Et[ce],N.format!==fs?ot!==null?$t?t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Ke.width,Ke.height,ot,Ke.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,et,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ke.width,Ke.height,ot,lt,Ke.data):t.texImage2D(s.TEXTURE_2D,ce,et,Ke.width,Ke.height,0,ot,lt,Ke.data)}else if(N.isDataArrayTexture)$t?($&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,et,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ot,lt,ve.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,ve.width,ve.height,ve.depth,0,ot,lt,ve.data);else if(N.isData3DTexture)$t?($&&t.texStorage3D(s.TEXTURE_3D,Ge,et,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ot,lt,ve.data)):t.texImage3D(s.TEXTURE_3D,0,et,ve.width,ve.height,ve.depth,0,ot,lt,ve.data);else if(N.isFramebufferTexture){if($)if($t)t.texStorage2D(s.TEXTURE_2D,Ge,et,ve.width,ve.height);else{let ce=ve.width,Ne=ve.height;for(let We=0;We<Ge;We++)t.texImage2D(s.TEXTURE_2D,We,et,ce,Ne,0,ot,lt,null),ce>>=1,Ne>>=1}}else if(Et.length>0&&at){$t&&$&&t.texStorage2D(s.TEXTURE_2D,Ge,et,Et[0].width,Et[0].height);for(let ce=0,Ne=Et.length;ce<Ne;ce++)Ke=Et[ce],$t?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ot,lt,Ke):t.texImage2D(s.TEXTURE_2D,ce,et,ot,lt,Ke);N.generateMipmaps=!1}else $t?($&&t.texStorage2D(s.TEXTURE_2D,Ge,et,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,lt,ve)):t.texImage2D(s.TEXTURE_2D,0,et,ot,lt,ve);q(N,at)&&X(Oe),rt.__version=ke.version,N.onUpdate&&N.onUpdate(N)}B.__version=N.version}function Zn(B,N,ge){if(N.image.length!==6)return;const Oe=ze(B,N),Ie=N.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+ge);const ke=a.get(Ie);if(Ie.version!==ke.__version||Oe===!0){t.activeTexture(s.TEXTURE0+ge),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,N.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,N.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const rt=N.isCompressedTexture||N.image[0].isCompressedTexture,He=N.image[0]&&N.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!rt&&!He?ve[ce]=D(N.image[ce],!1,!0,v):ve[ce]=He?N.image[ce].image:N.image[ce],ve[ce]=dn(N,ve[ce]);const at=ve[0],ot=O(at)||h,lt=f.convert(N.format,N.colorSpace),et=f.convert(N.type),Ke=fe(N.internalFormat,lt,et,N.colorSpace),Et=h&&N.isVideoTexture!==!0,$t=ke.__version===void 0||Oe===!0;let $=I(N,at,ot);Ye(s.TEXTURE_CUBE_MAP,N,ot);let Ge;if(rt){Et&&$t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,$,Ke,at.width,at.height);for(let ce=0;ce<6;ce++){Ge=ve[ce].mipmaps;for(let Ne=0;Ne<Ge.length;Ne++){const We=Ge[Ne];N.format!==fs?lt!==null?Et?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,0,0,We.width,We.height,lt,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,Ke,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,0,0,We.width,We.height,lt,et,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,Ke,We.width,We.height,0,lt,et,We.data)}}}else{Ge=N.mipmaps,Et&&$t&&(Ge.length>0&&$++,t.texStorage2D(s.TEXTURE_CUBE_MAP,$,Ke,ve[0].width,ve[0].height));for(let ce=0;ce<6;ce++)if(He){Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,lt,et,ve[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,ve[ce].width,ve[ce].height,0,lt,et,ve[ce].data);for(let Ne=0;Ne<Ge.length;Ne++){const zt=Ge[Ne].image[ce].image;Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,0,0,zt.width,zt.height,lt,et,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,Ke,zt.width,zt.height,0,lt,et,zt.data)}}else{Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,lt,et,ve[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,lt,et,ve[ce]);for(let Ne=0;Ne<Ge.length;Ne++){const We=Ge[Ne];Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,0,0,lt,et,We.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,Ke,lt,et,We.image[ce])}}}q(N,ot)&&X(s.TEXTURE_CUBE_MAP),ke.__version=Ie.version,N.onUpdate&&N.onUpdate(N)}B.__version=N.version}function Mt(B,N,ge,Oe,Ie){const ke=f.convert(ge.format,ge.colorSpace),rt=f.convert(ge.type),He=fe(ge.internalFormat,ke,rt,ge.colorSpace);a.get(N).__hasExternalTextures||(Ie===s.TEXTURE_3D||Ie===s.TEXTURE_2D_ARRAY?t.texImage3D(Ie,0,He,N.width,N.height,N.depth,0,ke,rt,null):t.texImage2D(Ie,0,He,N.width,N.height,0,ke,rt,null)),t.bindFramebuffer(s.FRAMEBUFFER,B),Ft(N)?E.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,Ie,a.get(ge).__webglTexture,0,Tt(N)):(Ie===s.TEXTURE_2D||Ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Oe,Ie,a.get(ge).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(B,N,ge){if(s.bindRenderbuffer(s.RENDERBUFFER,B),N.depthBuffer&&!N.stencilBuffer){let Oe=s.DEPTH_COMPONENT16;if(ge||Ft(N)){const Ie=N.depthTexture;Ie&&Ie.isDepthTexture&&(Ie.type===Ta?Oe=s.DEPTH_COMPONENT32F:Ie.type===Ea&&(Oe=s.DEPTH_COMPONENT24));const ke=Tt(N);Ft(N)?E.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,Oe,N.width,N.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Oe,N.width,N.height)}else s.renderbufferStorage(s.RENDERBUFFER,Oe,N.width,N.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,B)}else if(N.depthBuffer&&N.stencilBuffer){const Oe=Tt(N);ge&&Ft(N)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,s.DEPTH24_STENCIL8,N.width,N.height):Ft(N)?E.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,s.DEPTH24_STENCIL8,N.width,N.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,B)}else{const Oe=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let Ie=0;Ie<Oe.length;Ie++){const ke=Oe[Ie],rt=f.convert(ke.format,ke.colorSpace),He=f.convert(ke.type),ve=fe(ke.internalFormat,rt,He,ke.colorSpace),at=Tt(N);ge&&Ft(N)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,ve,N.width,N.height):Ft(N)?E.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,ve,N.width,N.height):s.renderbufferStorage(s.RENDERBUFFER,ve,N.width,N.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xn(B,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),U(N.depthTexture,0);const Oe=a.get(N.depthTexture).__webglTexture,Ie=Tt(N);if(N.depthTexture.format===Cl)Ft(N)?E.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Oe,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Oe,0);else if(N.depthTexture.format===Ac)Ft(N)?E.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Oe,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Oe,0);else throw new Error("Unknown depthTexture format")}function nt(B){const N=a.get(B),ge=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!N.__autoAllocateDepthBuffer){if(ge)throw new Error("target.depthTexture not supported in Cube render targets");xn(N.__webglFramebuffer,B)}else if(ge){N.__webglDepthbuffer=[];for(let Oe=0;Oe<6;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,N.__webglFramebuffer[Oe]),N.__webglDepthbuffer[Oe]=s.createRenderbuffer(),re(N.__webglDepthbuffer[Oe],B,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer=s.createRenderbuffer(),re(N.__webglDepthbuffer,B,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(B,N,ge){const Oe=a.get(B);N!==void 0&&Mt(Oe.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),ge!==void 0&&nt(B)}function St(B){const N=B.texture,ge=a.get(B),Oe=a.get(N);B.addEventListener("dispose",Re),B.isWebGLMultipleRenderTargets!==!0&&(Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture()),Oe.__version=N.version,p.memory.textures++);const Ie=B.isWebGLCubeRenderTarget===!0,ke=B.isWebGLMultipleRenderTargets===!0,rt=O(B)||h;if(Ie){ge.__webglFramebuffer=[];for(let He=0;He<6;He++)ge.__webglFramebuffer[He]=s.createFramebuffer()}else{if(ge.__webglFramebuffer=s.createFramebuffer(),ke)if(u.drawBuffers){const He=B.texture;for(let ve=0,at=He.length;ve<at;ve++){const ot=a.get(He[ve]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),p.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&B.samples>0&&Ft(B)===!1){const He=ke?N:[N];ge.__webglMultisampledFramebuffer=s.createFramebuffer(),ge.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer);for(let ve=0;ve<He.length;ve++){const at=He[ve];ge.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const ot=f.convert(at.format,at.colorSpace),lt=f.convert(at.type),et=fe(at.internalFormat,ot,lt,at.colorSpace,B.isXRRenderTarget===!0),Ke=Tt(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,et,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ge.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(ge.__webglDepthRenderbuffer=s.createRenderbuffer(),re(ge.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(s.TEXTURE_CUBE_MAP,Oe.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,N,rt);for(let He=0;He<6;He++)Mt(ge.__webglFramebuffer[He],B,N,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+He);q(N,rt)&&X(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){const He=B.texture;for(let ve=0,at=He.length;ve<at;ve++){const ot=He[ve],lt=a.get(ot);t.bindTexture(s.TEXTURE_2D,lt.__webglTexture),Ye(s.TEXTURE_2D,ot,rt),Mt(ge.__webglFramebuffer,B,ot,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D),q(ot,rt)&&X(s.TEXTURE_2D)}t.unbindTexture()}else{let He=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(h?He=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(He,Oe.__webglTexture),Ye(He,N,rt),Mt(ge.__webglFramebuffer,B,N,s.COLOR_ATTACHMENT0,He),q(N,rt)&&X(He),t.unbindTexture()}B.depthBuffer&&nt(B)}function Bt(B){const N=O(B)||h,ge=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let Oe=0,Ie=ge.length;Oe<Ie;Oe++){const ke=ge[Oe];if(q(ke,N)){const rt=B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,He=a.get(ke).__webglTexture;t.bindTexture(rt,He),X(rt),t.unbindTexture()}}}function Lt(B){if(h&&B.samples>0&&Ft(B)===!1){const N=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],ge=B.width,Oe=B.height;let Ie=s.COLOR_BUFFER_BIT;const ke=[],rt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=a.get(B),ve=B.isWebGLMultipleRenderTargets===!0;if(ve)for(let at=0;at<N.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let at=0;at<N.length;at++){ke.push(s.COLOR_ATTACHMENT0+at),B.depthBuffer&&ke.push(rt);const ot=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(ot===!1&&(B.depthBuffer&&(Ie|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&(Ie|=s.STENCIL_BUFFER_BIT)),ve&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[at]),ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[rt])),ve){const lt=a.get(N[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,ge,Oe,0,0,ge,Oe,Ie,s.NEAREST),A&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let at=0;at<N.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,He.__webglColorRenderbuffer[at]);const ot=a.get(N[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Tt(B){return Math.min(M,B.samples)}function Ft(B){const N=a.get(B);return h&&B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function Gt(B){const N=p.render.frame;P.get(B)!==N&&(P.set(B,N),B.update())}function dn(B,N){const ge=B.colorSpace,Oe=B.format,Ie=B.type;return B.isCompressedTexture===!0||B.format===qm||ge!==js&&ge!==Pl&&(ge===Nt?h===!1?e.has("EXT_sRGB")===!0&&Oe===fs?(B.format=qm,B.minFilter=Gr,B.generateMipmaps=!1):N=xv.sRGBToLinear(N):(Oe!==fs||Ie!==Aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ge)),N}this.allocateTextureUnit=Z,this.resetTextureUnits=ue,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=Ce,this.rebindTextures=vt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ft}function mw(s,e,t){const a=t.isWebGL2;function u(f,p=Pl){let h;if(f===Aa)return s.UNSIGNED_BYTE;if(f===fv)return s.UNSIGNED_SHORT_4_4_4_4;if(f===dv)return s.UNSIGNED_SHORT_5_5_5_1;if(f===qS)return s.BYTE;if(f===YS)return s.SHORT;if(f===ng)return s.UNSIGNED_SHORT;if(f===cv)return s.INT;if(f===Ea)return s.UNSIGNED_INT;if(f===Ta)return s.FLOAT;if(f===cd)return a?s.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(f===$S)return s.ALPHA;if(f===fs)return s.RGBA;if(f===KS)return s.LUMINANCE;if(f===ZS)return s.LUMINANCE_ALPHA;if(f===Cl)return s.DEPTH_COMPONENT;if(f===Ac)return s.DEPTH_STENCIL;if(f===qm)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(f===QS)return s.RED;if(f===hv)return s.RED_INTEGER;if(f===JS)return s.RG;if(f===pv)return s.RG_INTEGER;if(f===mv)return s.RGBA_INTEGER;if(f===hm||f===pm||f===mm||f===gm)if(p===Nt)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(f===hm)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(f===pm)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(f===mm)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(f===gm)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(f===hm)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(f===pm)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(f===mm)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(f===gm)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(f===Vg||f===Wg||f===Xg||f===jg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(f===Vg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(f===Wg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(f===Xg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(f===jg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(f===ey)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(f===qg||f===Yg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(f===qg)return p===Nt?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(f===Yg)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(f===$g||f===Kg||f===Zg||f===Qg||f===Jg||f===e_||f===t_||f===n_||f===i_||f===r_||f===s_||f===o_||f===a_||f===l_)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(f===$g)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(f===Kg)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(f===Zg)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(f===Qg)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(f===Jg)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(f===e_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(f===t_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(f===n_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(f===i_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(f===r_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(f===s_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(f===o_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(f===a_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(f===l_)return p===Nt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(f===_m)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(f===_m)return p===Nt?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(f===ty||f===u_||f===c_||f===f_)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(f===_m)return h.COMPRESSED_RED_RGTC1_EXT;if(f===u_)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(f===c_)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(f===f_)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return f===Rl?a?s.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):s[f]!==void 0?s[f]:null}return{convert:u}}class gw extends Vr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let rp=class extends Tr{constructor(){super(),this.isGroup=!0,this.type="Group"}};const _w={type:"move"};class Hm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rp,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rp,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rp,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let u=null,f=null,p=null;const h=this._targetRay,x=this._grip,v=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(v&&e.hand){p=!0;for(const L of e.hand.values()){const T=t.getJointPose(L,a),y=this._getHandJoint(v,L);T!==null&&(y.matrix.fromArray(T.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=T.radius),y.visible=T!==null}const S=v.joints["index-finger-tip"],M=v.joints["thumb-tip"],E=S.position.distanceTo(M.position),A=.02,P=.005;v.inputState.pinching&&E>A+P?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!v.inputState.pinching&&E<=A-P&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else x!==null&&e.gripSpace&&(f=t.getPose(e.gripSpace,a),f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,f.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(f.linearVelocity)):x.hasLinearVelocity=!1,f.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(f.angularVelocity)):x.hasAngularVelocity=!1));h!==null&&(u=t.getPose(e.targetRaySpace,a),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_w)))}return h!==null&&(h.visible=u!==null),x!==null&&(x.visible=f!==null),v!==null&&(v.visible=p!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new rp;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class vw extends Er{constructor(e,t,a,u,f,p,h,x,v,S){if(S=S!==void 0?S:Cl,S!==Cl&&S!==Ac)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&S===Cl&&(a=Ea),a===void 0&&S===Ac&&(a=Rl),super(null,u,f,p,h,x,S,a,v),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:Wi,this.minFilter=x!==void 0?x:Wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xw extends Cc{constructor(e,t){super();const a=this;let u=null,f=1,p=null,h="local-floor",x=1,v=null,S=null,M=null,E=null,A=null,P=null;const L=t.getContextAttributes();let T=null,y=null;const H=[],D=[],O=new Vr;O.layers.enable(1),O.viewport=new Si;const W=new Vr;W.layers.enable(2),W.viewport=new Si;const q=[O,W],X=new gw;X.layers.enable(1),X.layers.enable(2);let fe=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=H[k];return J===void 0&&(J=new Hm,H[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=H[k];return J===void 0&&(J=new Hm,H[k]=J),J.getGripSpace()},this.getHand=function(k){let J=H[k];return J===void 0&&(J=new Hm,H[k]=J),J.getHandSpace()};function G(k){const J=D.indexOf(k.inputSource);if(J===-1)return;const Ce=H[J];Ce!==void 0&&(Ce.update(k.inputSource,k.frame,v||p),Ce.dispatchEvent({type:k.type,data:k.inputSource}))}function Me(){u.removeEventListener("select",G),u.removeEventListener("selectstart",G),u.removeEventListener("selectend",G),u.removeEventListener("squeeze",G),u.removeEventListener("squeezestart",G),u.removeEventListener("squeezeend",G),u.removeEventListener("end",Me),u.removeEventListener("inputsourceschange",Re);for(let k=0;k<H.length;k++){const J=D[k];J!==null&&(D[k]=null,H[k].disconnect(J))}fe=null,I=null,e.setRenderTarget(T),A=null,E=null,M=null,u=null,y=null,U.stop(),a.isPresenting=!1,a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){f=k,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||p},this.setReferenceSpace=function(k){v=k},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return M},this.getFrame=function(){return P},this.getSession=function(){return u},this.setSession=async function(k){if(u=k,u!==null){if(T=e.getRenderTarget(),u.addEventListener("select",G),u.addEventListener("selectstart",G),u.addEventListener("selectend",G),u.addEventListener("squeeze",G),u.addEventListener("squeezestart",G),u.addEventListener("squeezeend",G),u.addEventListener("end",Me),u.addEventListener("inputsourceschange",Re),L.xrCompatible!==!0&&await t.makeXRCompatible(),u.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:u.renderState.layers===void 0?L.antialias:!0,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};A=new XRWebGLLayer(u,t,J),u.updateRenderState({baseLayer:A}),y=new bl(A.framebufferWidth,A.framebufferHeight,{format:fs,type:Aa,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil})}else{let J=null,Ce=null,Ae=null;L.depth&&(Ae=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=L.stencil?Ac:Cl,Ce=L.stencil?Rl:Ea);const Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:f};M=new XRWebGLBinding(u,t),E=M.createProjectionLayer(Ue),u.updateRenderState({layers:[E]}),y=new bl(E.textureWidth,E.textureHeight,{format:fs,type:Aa,depthTexture:new vw(E.textureWidth,E.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0});const Be=e.properties.get(y);Be.__ignoreDepthValues=E.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(x),v=null,p=await u.requestReferenceSpace(h),U.setContext(u),U.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode};function Re(k){for(let J=0;J<k.removed.length;J++){const Ce=k.removed[J],Ae=D.indexOf(Ce);Ae>=0&&(D[Ae]=null,H[Ae].disconnect(Ce))}for(let J=0;J<k.added.length;J++){const Ce=k.added[J];let Ae=D.indexOf(Ce);if(Ae===-1){for(let Be=0;Be<H.length;Be++)if(Be>=D.length){D.push(Ce),Ae=Be;break}else if(D[Be]===null){D[Be]=Ce,Ae=Be;break}if(Ae===-1)break}const Ue=H[Ae];Ue&&Ue.connect(Ce)}}const se=new he,de=new he;function me(k,J,Ce){se.setFromMatrixPosition(J.matrixWorld),de.setFromMatrixPosition(Ce.matrixWorld);const Ae=se.distanceTo(de),Ue=J.projectionMatrix.elements,Be=Ce.projectionMatrix.elements,Ye=Ue[14]/(Ue[10]-1),ze=Ue[14]/(Ue[10]+1),pt=(Ue[9]+1)/Ue[5],Zn=(Ue[9]-1)/Ue[5],Mt=(Ue[8]-1)/Ue[0],re=(Be[8]+1)/Be[0],xn=Ye*Mt,nt=Ye*re,vt=Ae/(-Mt+re),St=vt*-Mt;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(St),k.translateZ(vt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Bt=Ye+vt,Lt=ze+vt,Tt=xn-St,Ft=nt+(Ae-St),Gt=pt*ze/Lt*Bt,dn=Zn*ze/Lt*Bt;k.projectionMatrix.makePerspective(Tt,Ft,Gt,dn,Bt,Lt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Ee(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(u===null)return;X.near=W.near=O.near=k.near,X.far=W.far=O.far=k.far,(fe!==X.near||I!==X.far)&&(u.updateRenderState({depthNear:X.near,depthFar:X.far}),fe=X.near,I=X.far);const J=k.parent,Ce=X.cameras;Ee(X,J);for(let Ae=0;Ae<Ce.length;Ae++)Ee(Ce[Ae],J);Ce.length===2?me(X,O,W):X.projectionMatrix.copy(O.projectionMatrix),ue(k,X,J)};function ue(k,J,Ce){Ce===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(Ce.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const Ae=k.children;for(let Ue=0,Be=Ae.length;Ue<Be;Ue++)Ae[Ue].updateMatrixWorld(!0);k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ym*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(E===null&&A===null))return x},this.setFoveation=function(k){x=k,E!==null&&(E.fixedFoveation=k),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=k)};let Z=null;function pe(k,J){if(S=J.getViewerPose(v||p),P=J,S!==null){const Ce=S.views;A!==null&&(e.setRenderTargetFramebuffer(y,A.framebuffer),e.setRenderTarget(y));let Ae=!1;Ce.length!==X.cameras.length&&(X.cameras.length=0,Ae=!0);for(let Ue=0;Ue<Ce.length;Ue++){const Be=Ce[Ue];let Ye=null;if(A!==null)Ye=A.getViewport(Be);else{const pt=M.getViewSubImage(E,Be);Ye=pt.viewport,Ue===0&&(e.setRenderTargetTextures(y,pt.colorTexture,E.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(y))}let ze=q[Ue];ze===void 0&&(ze=new Vr,ze.layers.enable(Ue),ze.viewport=new Si,q[Ue]=ze),ze.matrix.fromArray(Be.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Be.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ue===0&&(X.matrix.copy(ze.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ae===!0&&X.cameras.push(ze)}}for(let Ce=0;Ce<H.length;Ce++){const Ae=D[Ce],Ue=H[Ce];Ae!==null&&Ue!==void 0&&Ue.update(Ae,J,v||p)}Z&&Z(k,J),J.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:J}),P=null}const U=new Pv;U.setAnimationLoop(pe),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}}function Sw(s,e){function t(T,y){T.matrixAutoUpdate===!0&&T.updateMatrix(),y.value.copy(T.matrix)}function a(T,y){y.color.getRGB(T.fogColor.value,Av(s)),y.isFog?(T.fogNear.value=y.near,T.fogFar.value=y.far):y.isFogExp2&&(T.fogDensity.value=y.density)}function u(T,y,H,D,O){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(T,y):y.isMeshToonMaterial?(f(T,y),M(T,y)):y.isMeshPhongMaterial?(f(T,y),S(T,y)):y.isMeshStandardMaterial?(f(T,y),E(T,y),y.isMeshPhysicalMaterial&&A(T,y,O)):y.isMeshMatcapMaterial?(f(T,y),P(T,y)):y.isMeshDepthMaterial?f(T,y):y.isMeshDistanceMaterial?(f(T,y),L(T,y)):y.isMeshNormalMaterial?f(T,y):y.isLineBasicMaterial?(p(T,y),y.isLineDashedMaterial&&h(T,y)):y.isPointsMaterial?x(T,y,H,D):y.isSpriteMaterial?v(T,y):y.isShadowMaterial?(T.color.value.copy(y.color),T.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(T,y){T.opacity.value=y.opacity,y.color&&T.diffuse.value.copy(y.color),y.emissive&&T.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(T.map.value=y.map,t(y.map,T.mapTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,t(y.alphaMap,T.alphaMapTransform)),y.bumpMap&&(T.bumpMap.value=y.bumpMap,t(y.bumpMap,T.bumpMapTransform),T.bumpScale.value=y.bumpScale,y.side===ar&&(T.bumpScale.value*=-1)),y.normalMap&&(T.normalMap.value=y.normalMap,t(y.normalMap,T.normalMapTransform),T.normalScale.value.copy(y.normalScale),y.side===ar&&T.normalScale.value.negate()),y.displacementMap&&(T.displacementMap.value=y.displacementMap,t(y.displacementMap,T.displacementMapTransform),T.displacementScale.value=y.displacementScale,T.displacementBias.value=y.displacementBias),y.emissiveMap&&(T.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,T.emissiveMapTransform)),y.specularMap&&(T.specularMap.value=y.specularMap,t(y.specularMap,T.specularMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest);const H=e.get(y).envMap;if(H&&(T.envMap.value=H,T.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=y.reflectivity,T.ior.value=y.ior,T.refractionRatio.value=y.refractionRatio),y.lightMap){T.lightMap.value=y.lightMap;const D=s.useLegacyLights===!0?Math.PI:1;T.lightMapIntensity.value=y.lightMapIntensity*D,t(y.lightMap,T.lightMapTransform)}y.aoMap&&(T.aoMap.value=y.aoMap,T.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,T.aoMapTransform))}function p(T,y){T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,y.map&&(T.map.value=y.map,t(y.map,T.mapTransform))}function h(T,y){T.dashSize.value=y.dashSize,T.totalSize.value=y.dashSize+y.gapSize,T.scale.value=y.scale}function x(T,y,H,D){T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,T.size.value=y.size*H,T.scale.value=D*.5,y.map&&(T.map.value=y.map,t(y.map,T.uvTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,t(y.alphaMap,T.alphaMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest)}function v(T,y){T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,T.rotation.value=y.rotation,y.map&&(T.map.value=y.map,t(y.map,T.mapTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,t(y.alphaMap,T.alphaMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest)}function S(T,y){T.specular.value.copy(y.specular),T.shininess.value=Math.max(y.shininess,1e-4)}function M(T,y){y.gradientMap&&(T.gradientMap.value=y.gradientMap)}function E(T,y){T.metalness.value=y.metalness,y.metalnessMap&&(T.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,T.metalnessMapTransform)),T.roughness.value=y.roughness,y.roughnessMap&&(T.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,T.roughnessMapTransform)),e.get(y).envMap&&(T.envMapIntensity.value=y.envMapIntensity)}function A(T,y,H){T.ior.value=y.ior,y.sheen>0&&(T.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),T.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(T.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,T.sheenColorMapTransform)),y.sheenRoughnessMap&&(T.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,T.sheenRoughnessMapTransform))),y.clearcoat>0&&(T.clearcoat.value=y.clearcoat,T.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(T.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,T.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(T.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ar&&T.clearcoatNormalScale.value.negate())),y.iridescence>0&&(T.iridescence.value=y.iridescence,T.iridescenceIOR.value=y.iridescenceIOR,T.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(T.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,T.iridescenceMapTransform)),y.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),y.transmission>0&&(T.transmission.value=y.transmission,T.transmissionSamplerMap.value=H.texture,T.transmissionSamplerSize.value.set(H.width,H.height),y.transmissionMap&&(T.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,T.transmissionMapTransform)),T.thickness.value=y.thickness,y.thicknessMap&&(T.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=y.attenuationDistance,T.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(T.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(T.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=y.specularIntensity,T.specularColor.value.copy(y.specularColor),y.specularColorMap&&(T.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,T.specularColorMapTransform)),y.specularIntensityMap&&(T.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,T.specularIntensityMapTransform))}function P(T,y){y.matcap&&(T.matcap.value=y.matcap)}function L(T,y){const H=e.get(y).light;T.referencePosition.value.setFromMatrixPosition(H.matrixWorld),T.nearDistance.value=H.shadow.camera.near,T.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:u}}function yw(s,e,t,a){let u={},f={},p=[];const h=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function x(H,D){const O=D.program;a.uniformBlockBinding(H,O)}function v(H,D){let O=u[H.id];O===void 0&&(P(H),O=S(H),u[H.id]=O,H.addEventListener("dispose",T));const W=D.program;a.updateUBOMapping(H,W);const q=e.render.frame;f[H.id]!==q&&(E(H),f[H.id]=q)}function S(H){const D=M();H.__bindingPointIndex=D;const O=s.createBuffer(),W=H.__size,q=H.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,W,q),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,O),O}function M(){for(let H=0;H<h;H++)if(p.indexOf(H)===-1)return p.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(H){const D=u[H.id],O=H.uniforms,W=H.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let q=0,X=O.length;q<X;q++){const fe=O[q];if(A(fe,q,W)===!0){const I=fe.__offset,G=Array.isArray(fe.value)?fe.value:[fe.value];let Me=0;for(let Re=0;Re<G.length;Re++){const se=G[Re],de=L(se);typeof se=="number"?(fe.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,I+Me,fe.__data)):se.isMatrix3?(fe.__data[0]=se.elements[0],fe.__data[1]=se.elements[1],fe.__data[2]=se.elements[2],fe.__data[3]=se.elements[0],fe.__data[4]=se.elements[3],fe.__data[5]=se.elements[4],fe.__data[6]=se.elements[5],fe.__data[7]=se.elements[0],fe.__data[8]=se.elements[6],fe.__data[9]=se.elements[7],fe.__data[10]=se.elements[8],fe.__data[11]=se.elements[0]):(se.toArray(fe.__data,Me),Me+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,fe.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function A(H,D,O){const W=H.value;if(O[D]===void 0){if(typeof W=="number")O[D]=W;else{const q=Array.isArray(W)?W:[W],X=[];for(let fe=0;fe<q.length;fe++)X.push(q[fe].clone());O[D]=X}return!0}else if(typeof W=="number"){if(O[D]!==W)return O[D]=W,!0}else{const q=Array.isArray(O[D])?O[D]:[O[D]],X=Array.isArray(W)?W:[W];for(let fe=0;fe<q.length;fe++){const I=q[fe];if(I.equals(X[fe])===!1)return I.copy(X[fe]),!0}}return!1}function P(H){const D=H.uniforms;let O=0;const W=16;let q=0;for(let X=0,fe=D.length;X<fe;X++){const I=D[X],G={boundary:0,storage:0},Me=Array.isArray(I.value)?I.value:[I.value];for(let Re=0,se=Me.length;Re<se;Re++){const de=Me[Re],me=L(de);G.boundary+=me.boundary,G.storage+=me.storage}if(I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=O,X>0){q=O%W;const Re=W-q;q!==0&&Re-G.boundary<0&&(O+=W-q,I.__offset=O)}O+=G.storage}return q=O%W,q>0&&(O+=W-q),H.__size=O,H.__cache={},this}function L(H){const D={boundary:0,storage:0};return typeof H=="number"?(D.boundary=4,D.storage=4):H.isVector2?(D.boundary=8,D.storage=8):H.isVector3||H.isColor?(D.boundary=16,D.storage=12):H.isVector4?(D.boundary=16,D.storage=16):H.isMatrix3?(D.boundary=48,D.storage=48):H.isMatrix4?(D.boundary=64,D.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),D}function T(H){const D=H.target;D.removeEventListener("dispose",T);const O=p.indexOf(D.__bindingPointIndex);p.splice(O,1),s.deleteBuffer(u[D.id]),delete u[D.id],delete f[D.id]}function y(){for(const H in u)s.deleteBuffer(u[H]);p=[],u={},f={}}return{bind:x,update:v,dispose:y}}function Mw(){const s=ap("canvas");return s.style.display="block",s}class Nv{constructor(e={}){const{canvas:t=Mw(),context:a=null,depth:u=!0,stencil:f=!0,alpha:p=!1,antialias:h=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:v=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:M=!1}=e;this.isWebGLRenderer=!0;let E;a!==null?E=a.getContextAttributes().alpha:E=p;const A=new Uint32Array(4),P=new Int32Array(4);let L=null,T=null;const y=[],H=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Nt,this.useLegacyLights=!0,this.toneMapping=bo,this.toneMappingExposure=1;const D=this;let O=!1,W=0,q=0,X=null,fe=-1,I=null;const G=new Si,Me=new Si;let Re=null;const se=new gn(0);let de=0,me=t.width,Ee=t.height,ue=1,Z=null,pe=null;const U=new Si(0,0,me,Ee),k=new Si(0,0,me,Ee);let J=!1;const Ce=new Lv;let Ae=!1,Ue=!1,Be=null;const Ye=new yi,ze=new fn,pt=new he,Zn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return X===null?ue:1}let re=a;function xn(F,oe){for(let _e=0;_e<F.length;_e++){const ne=F[_e],Se=t.getContext(ne,oe);if(Se!==null)return Se}return null}try{const F={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:x,preserveDrawingBuffer:v,powerPreference:S,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tg}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),re===null){const oe=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&oe.shift(),re=xn(oe,F),re===null)throw xn(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&re instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),re.getShaderPrecisionFormat===void 0&&(re.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let nt,vt,St,Bt,Lt,Tt,Ft,Gt,dn,B,N,ge,Oe,Ie,ke,rt,He,ve,at,ot,lt,et,Ke,Et;function $t(){nt=new U1(re),vt=new w1(re,nt,e),nt.init(vt),et=new mw(re,nt,vt),St=new hw(re,nt,vt),Bt=new N1(re),Lt=new JT,Tt=new pw(re,nt,St,Lt,vt,et,Bt),Ft=new R1(D),Gt=new b1(D),dn=new Wy(re,vt),Ke=new E1(re,nt,dn,vt),B=new D1(re,dn,Bt,Ke),N=new z1(re,B,dn,Bt),at=new B1(re,vt,Tt),rt=new A1(Lt),ge=new QT(D,Ft,Gt,nt,vt,Ke,rt),Oe=new Sw(D,Lt),Ie=new tw,ke=new aw(nt,vt),ve=new M1(D,Ft,Gt,St,N,E,x),He=new dw(D,N,vt),Et=new yw(re,Bt,vt,St),ot=new T1(re,nt,Bt,vt),lt=new I1(re,nt,Bt,vt),Bt.programs=ge.programs,D.capabilities=vt,D.extensions=nt,D.properties=Lt,D.renderLists=Ie,D.shadowMap=He,D.state=St,D.info=Bt}$t();const $=new xw(D,re);this.xr=$,this.getContext=function(){return re},this.getContextAttributes=function(){return re.getContextAttributes()},this.forceContextLoss=function(){const F=nt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=nt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(F){F!==void 0&&(ue=F,this.setSize(me,Ee,!1))},this.getSize=function(F){return F.set(me,Ee)},this.setSize=function(F,oe,_e=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=F,Ee=oe,t.width=Math.floor(F*ue),t.height=Math.floor(oe*ue),_e===!0&&(t.style.width=F+"px",t.style.height=oe+"px"),this.setViewport(0,0,F,oe)},this.getDrawingBufferSize=function(F){return F.set(me*ue,Ee*ue).floor()},this.setDrawingBufferSize=function(F,oe,_e){me=F,Ee=oe,ue=_e,t.width=Math.floor(F*_e),t.height=Math.floor(oe*_e),this.setViewport(0,0,F,oe)},this.getCurrentViewport=function(F){return F.copy(G)},this.getViewport=function(F){return F.copy(U)},this.setViewport=function(F,oe,_e,ne){F.isVector4?U.set(F.x,F.y,F.z,F.w):U.set(F,oe,_e,ne),St.viewport(G.copy(U).multiplyScalar(ue).floor())},this.getScissor=function(F){return F.copy(k)},this.setScissor=function(F,oe,_e,ne){F.isVector4?k.set(F.x,F.y,F.z,F.w):k.set(F,oe,_e,ne),St.scissor(Me.copy(k).multiplyScalar(ue).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(F){St.setScissorTest(J=F)},this.setOpaqueSort=function(F){Z=F},this.setTransparentSort=function(F){pe=F},this.getClearColor=function(F){return F.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(F=!0,oe=!0,_e=!0){let ne=0;if(F){let Se=!1;if(X!==null){const Ze=X.texture.format;Se=Ze===mv||Ze===pv||Ze===hv}if(Se){const Ze=X.texture.type,ft=Ze===Aa||Ze===Ea||Ze===ng||Ze===Rl||Ze===fv||Ze===dv,mt=ve.getClearColor(),ht=ve.getClearAlpha(),Pt=mt.r,$e=mt.g,wt=mt.b;ft?(A[0]=Pt,A[1]=$e,A[2]=wt,A[3]=ht,re.clearBufferuiv(re.COLOR,0,A)):(P[0]=Pt,P[1]=$e,P[2]=wt,P[3]=ht,re.clearBufferiv(re.COLOR,0,P))}else ne|=re.COLOR_BUFFER_BIT}oe&&(ne|=re.DEPTH_BUFFER_BIT),_e&&(ne|=re.STENCIL_BUFFER_BIT),re.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ie.dispose(),ke.dispose(),Lt.dispose(),Ft.dispose(),Gt.dispose(),N.dispose(),Ke.dispose(),Et.dispose(),ge.dispose(),$.dispose(),$.removeEventListener("sessionstart",nn),$.removeEventListener("sessionend",Ui),Be&&(Be.dispose(),Be=null),wn.stop()};function Ge(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const F=Bt.autoReset,oe=He.enabled,_e=He.autoUpdate,ne=He.needsUpdate,Se=He.type;$t(),Bt.autoReset=F,He.enabled=oe,He.autoUpdate=_e,He.needsUpdate=ne,He.type=Se}function Ne(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function We(F){const oe=F.target;oe.removeEventListener("dispose",We),zt(oe)}function zt(F){tn(F),Lt.remove(F)}function tn(F){const oe=Lt.get(F).programs;oe!==void 0&&(oe.forEach(function(_e){ge.releaseProgram(_e)}),F.isShaderMaterial&&ge.releaseShaderCache(F))}this.renderBufferDirect=function(F,oe,_e,ne,Se,Ze){oe===null&&(oe=Zn);const ft=Se.isMesh&&Se.matrixWorld.determinant()<0,mt=Pc(F,oe,_e,ne,Se);St.setMaterial(ne,ft);let ht=_e.index,Pt=1;ne.wireframe===!0&&(ht=B.getWireframeAttribute(_e),Pt=2);const $e=_e.drawRange,wt=_e.attributes.position;let rn=$e.start*Pt,hn=($e.start+$e.count)*Pt;Ze!==null&&(rn=Math.max(rn,Ze.start*Pt),hn=Math.min(hn,(Ze.start+Ze.count)*Pt)),ht!==null?(rn=Math.max(rn,0),hn=Math.min(hn,ht.count)):wt!=null&&(rn=Math.max(rn,0),hn=Math.min(hn,wt.count));const jn=hn-rn;if(jn<0||jn===1/0)return;Ke.setup(Se,ne,mt,_e,ht);let Xi,pn=ot;if(ht!==null&&(Xi=dn.get(ht),pn=lt,pn.setIndex(Xi)),Se.isMesh)ne.wireframe===!0?(St.setLineWidth(ne.wireframeLinewidth*Mt()),pn.setMode(re.LINES)):pn.setMode(re.TRIANGLES);else if(Se.isLine){let bt=ne.linewidth;bt===void 0&&(bt=1),St.setLineWidth(bt*Mt()),Se.isLineSegments?pn.setMode(re.LINES):Se.isLineLoop?pn.setMode(re.LINE_LOOP):pn.setMode(re.LINE_STRIP)}else Se.isPoints?pn.setMode(re.POINTS):Se.isSprite&&pn.setMode(re.TRIANGLES);if(Se.isInstancedMesh)pn.renderInstances(rn,jn,Se.count);else if(_e.isInstancedBufferGeometry){const bt=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Ei=Math.min(_e.instanceCount,bt);pn.renderInstances(rn,jn,Ei)}else pn.render(rn,jn)},this.compile=function(F,oe){function _e(ne,Se,Ze){ne.transparent===!0&&ne.side===Co&&ne.forceSinglePass===!1?(ne.side=ar,ne.needsUpdate=!0,Wr(ne,Se,Ze),ne.side=Ra,ne.needsUpdate=!0,Wr(ne,Se,Ze),ne.side=Co):Wr(ne,Se,Ze)}T=ke.get(F),T.init(),H.push(T),F.traverseVisible(function(ne){ne.isLight&&ne.layers.test(oe.layers)&&(T.pushLight(ne),ne.castShadow&&T.pushShadow(ne))}),T.setupLights(D.useLegacyLights),F.traverse(function(ne){const Se=ne.material;if(Se)if(Array.isArray(Se))for(let Ze=0;Ze<Se.length;Ze++){const ft=Se[Ze];_e(ft,F,ne)}else _e(Se,F,ne)}),H.pop(),T=null};let Tn=null;function Mi(F){Tn&&Tn(F)}function nn(){wn.stop()}function Ui(){wn.start()}const wn=new Pv;wn.setAnimationLoop(Mi),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(F){Tn=F,$.setAnimationLoop(F),F===null?wn.stop():wn.start()},$.addEventListener("sessionstart",nn),$.addEventListener("sessionend",Ui),this.render=function(F,oe){if(oe!==void 0&&oe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(oe),oe=$.getCamera()),F.isScene===!0&&F.onBeforeRender(D,F,oe,X),T=ke.get(F,H.length),T.init(),H.push(T),Ye.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),Ce.setFromProjectionMatrix(Ye),Ue=this.localClippingEnabled,Ae=rt.init(this.clippingPlanes,Ue),L=Ie.get(F,y.length),L.init(),y.push(L),ds(F,oe,0,D.sortObjects),L.finish(),D.sortObjects===!0&&L.sort(Z,pe),this.info.render.frame++,Ae===!0&&rt.beginShadows();const _e=T.state.shadowsArray;if(He.render(_e,F,oe),Ae===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(L,F),T.setupLights(D.useLegacyLights),oe.isArrayCamera){const ne=oe.cameras;for(let Se=0,Ze=ne.length;Se<Ze;Se++){const ft=ne[Se];hs(L,F,ft,ft.viewport)}}else hs(L,F,oe);X!==null&&(Tt.updateMultisampleRenderTarget(X),Tt.updateRenderTargetMipmap(X)),F.isScene===!0&&F.onAfterRender(D,F,oe),Ke.resetDefaultState(),fe=-1,I=null,H.pop(),H.length>0?T=H[H.length-1]:T=null,y.pop(),y.length>0?L=y[y.length-1]:L=null};function ds(F,oe,_e,ne){if(F.visible===!1)return;if(F.layers.test(oe.layers)){if(F.isGroup)_e=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(oe);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Ce.intersectsSprite(F)){ne&&pt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ye);const ft=N.update(F),mt=F.material;mt.visible&&L.push(F,ft,mt,_e,pt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Ce.intersectsObject(F))){const ft=N.update(F),mt=F.material;if(ne&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),pt.copy(F.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),pt.copy(ft.boundingSphere.center)),pt.applyMatrix4(F.matrixWorld).applyMatrix4(Ye)),Array.isArray(mt)){const ht=ft.groups;for(let Pt=0,$e=ht.length;Pt<$e;Pt++){const wt=ht[Pt],rn=mt[wt.materialIndex];rn&&rn.visible&&L.push(F,ft,rn,_e,pt.z,wt)}}else mt.visible&&L.push(F,ft,mt,_e,pt.z,null)}}const Ze=F.children;for(let ft=0,mt=Ze.length;ft<mt;ft++)ds(Ze[ft],oe,_e,ne)}function hs(F,oe,_e,ne){const Se=F.opaque,Ze=F.transmissive,ft=F.transparent;T.setupLightsView(_e),Ae===!0&&rt.setGlobalState(D.clippingPlanes,_e),Ze.length>0&&Ca(Se,Ze,oe,_e),ne&&St.viewport(G.copy(ne)),Se.length>0&&Ar(Se,oe,_e),Ze.length>0&&Ar(Ze,oe,_e),ft.length>0&&Ar(ft,oe,_e),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ca(F,oe,_e,ne){const Se=vt.isWebGL2;Be===null&&(Be=new bl(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?cd:Aa,minFilter:ud,samples:Se?4:0})),D.getDrawingBufferSize(ze),Se?Be.setSize(ze.x,ze.y):Be.setSize($m(ze.x),$m(ze.y));const Ze=D.getRenderTarget();D.setRenderTarget(Be),D.getClearColor(se),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear();const ft=D.toneMapping;D.toneMapping=bo,Ar(F,_e,ne),Tt.updateMultisampleRenderTarget(Be),Tt.updateRenderTargetMipmap(Be);let mt=!1;for(let ht=0,Pt=oe.length;ht<Pt;ht++){const $e=oe[ht],wt=$e.object,rn=$e.geometry,hn=$e.material,jn=$e.group;if(hn.side===Co&&wt.layers.test(ne.layers)){const Xi=hn.side;hn.side=ar,hn.needsUpdate=!0,Ys(wt,_e,ne,rn,hn,jn),hn.side=Xi,hn.needsUpdate=!0,mt=!0}}mt===!0&&(Tt.updateMultisampleRenderTarget(Be),Tt.updateRenderTargetMipmap(Be)),D.setRenderTarget(Ze),D.setClearColor(se,de),D.toneMapping=ft}function Ar(F,oe,_e){const ne=oe.isScene===!0?oe.overrideMaterial:null;for(let Se=0,Ze=F.length;Se<Ze;Se++){const ft=F[Se],mt=ft.object,ht=ft.geometry,Pt=ne===null?ft.material:ne,$e=ft.group;mt.layers.test(_e.layers)&&Ys(mt,oe,_e,ht,Pt,$e)}}function Ys(F,oe,_e,ne,Se,Ze){F.onBeforeRender(D,oe,_e,ne,Se,Ze),F.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),Se.onBeforeRender(D,oe,_e,ne,F,Ze),Se.transparent===!0&&Se.side===Co&&Se.forceSinglePass===!1?(Se.side=ar,Se.needsUpdate=!0,D.renderBufferDirect(_e,oe,ne,Se,F,Ze),Se.side=Ra,Se.needsUpdate=!0,D.renderBufferDirect(_e,oe,ne,Se,F,Ze),Se.side=Co):D.renderBufferDirect(_e,oe,ne,Se,F,Ze),F.onAfterRender(D,oe,_e,ne,Se,Ze)}function Wr(F,oe,_e){oe.isScene!==!0&&(oe=Zn);const ne=Lt.get(F),Se=T.state.lights,Ze=T.state.shadowsArray,ft=Se.state.version,mt=ge.getParameters(F,Se.state,Ze,oe,_e),ht=ge.getProgramCacheKey(mt);let Pt=ne.programs;ne.environment=F.isMeshStandardMaterial?oe.environment:null,ne.fog=oe.fog,ne.envMap=(F.isMeshStandardMaterial?Gt:Ft).get(F.envMap||ne.environment),Pt===void 0&&(F.addEventListener("dispose",We),Pt=new Map,ne.programs=Pt);let $e=Pt.get(ht);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===ft)return Io(F,mt),$e}else mt.uniforms=ge.getUniforms(F),F.onBuild(_e,mt,D),F.onBeforeCompile(mt,D),$e=ge.acquireProgram(mt,ht),Pt.set(ht,$e),ne.uniforms=mt.uniforms;const wt=ne.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(wt.clippingPlanes=rt.uniform),Io(F,mt),ne.needsLights=Uc(F),ne.lightsStateVersion=ft,ne.needsLights&&(wt.ambientLightColor.value=Se.state.ambient,wt.lightProbe.value=Se.state.probe,wt.directionalLights.value=Se.state.directional,wt.directionalLightShadows.value=Se.state.directionalShadow,wt.spotLights.value=Se.state.spot,wt.spotLightShadows.value=Se.state.spotShadow,wt.rectAreaLights.value=Se.state.rectArea,wt.ltc_1.value=Se.state.rectAreaLTC1,wt.ltc_2.value=Se.state.rectAreaLTC2,wt.pointLights.value=Se.state.point,wt.pointLightShadows.value=Se.state.pointShadow,wt.hemisphereLights.value=Se.state.hemi,wt.directionalShadowMap.value=Se.state.directionalShadowMap,wt.directionalShadowMatrix.value=Se.state.directionalShadowMatrix,wt.spotShadowMap.value=Se.state.spotShadowMap,wt.spotLightMatrix.value=Se.state.spotLightMatrix,wt.spotLightMap.value=Se.state.spotLightMap,wt.pointShadowMap.value=Se.state.pointShadowMap,wt.pointShadowMatrix.value=Se.state.pointShadowMatrix);const rn=$e.getUniforms(),hn=sp.seqWithValue(rn.seq,wt);return ne.currentProgram=$e,ne.uniformsList=hn,$e}function Io(F,oe){const _e=Lt.get(F);_e.outputColorSpace=oe.outputColorSpace,_e.instancing=oe.instancing,_e.skinning=oe.skinning,_e.morphTargets=oe.morphTargets,_e.morphNormals=oe.morphNormals,_e.morphColors=oe.morphColors,_e.morphTargetsCount=oe.morphTargetsCount,_e.numClippingPlanes=oe.numClippingPlanes,_e.numIntersection=oe.numClipIntersection,_e.vertexAlphas=oe.vertexAlphas,_e.vertexTangents=oe.vertexTangents,_e.toneMapping=oe.toneMapping}function Pc(F,oe,_e,ne,Se){oe.isScene!==!0&&(oe=Zn),Tt.resetTextureUnits();const Ze=oe.fog,ft=ne.isMeshStandardMaterial?oe.environment:null,mt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:js,ht=(ne.isMeshStandardMaterial?Gt:Ft).get(ne.envMap||ft),Pt=ne.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,$e=!!_e.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),wt=!!_e.morphAttributes.position,rn=!!_e.morphAttributes.normal,hn=!!_e.morphAttributes.color,jn=ne.toneMapped?D.toneMapping:bo,Xi=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,pn=Xi!==void 0?Xi.length:0,bt=Lt.get(ne),Ei=T.state.lights;if(Ae===!0&&(Ue===!0||F!==I)){const An=F===I&&ne.id===fe;rt.setState(ne,F,An)}let Ln=!1;ne.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ei.state.version||bt.outputColorSpace!==mt||Se.isInstancedMesh&&bt.instancing===!1||!Se.isInstancedMesh&&bt.instancing===!0||Se.isSkinnedMesh&&bt.skinning===!1||!Se.isSkinnedMesh&&bt.skinning===!0||bt.envMap!==ht||ne.fog===!0&&bt.fog!==Ze||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==rt.numPlanes||bt.numIntersection!==rt.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==$e||bt.morphTargets!==wt||bt.morphNormals!==rn||bt.morphColors!==hn||bt.toneMapping!==jn||vt.isWebGL2===!0&&bt.morphTargetsCount!==pn)&&(Ln=!0):(Ln=!0,bt.__version=ne.version);let In=bt.currentProgram;Ln===!0&&(In=Wr(ne,oe,Se));let La=!1,ps=!1,No=!1;const Sn=In.getUniforms(),ji=bt.uniforms;if(St.useProgram(In.program)&&(La=!0,ps=!0,No=!0),ne.id!==fe&&(fe=ne.id,ps=!0),La||I!==F){if(Sn.setValue(re,"projectionMatrix",F.projectionMatrix),vt.logarithmicDepthBuffer&&Sn.setValue(re,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),I!==F&&(I=F,ps=!0,No=!0),ne.isShaderMaterial||ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshStandardMaterial||ne.envMap){const An=Sn.map.cameraPosition;An!==void 0&&An.setValue(re,pt.setFromMatrixPosition(F.matrixWorld))}(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Sn.setValue(re,"isOrthographic",F.isOrthographicCamera===!0),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial||ne.isShadowMaterial||Se.isSkinnedMesh)&&Sn.setValue(re,"viewMatrix",F.matrixWorldInverse)}if(Se.isSkinnedMesh){Sn.setOptional(re,Se,"bindMatrix"),Sn.setOptional(re,Se,"bindMatrixInverse");const An=Se.skeleton;An&&(vt.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Sn.setValue(re,"boneTexture",An.boneTexture,Tt),Sn.setValue(re,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rr=_e.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0&&vt.isWebGL2===!0)&&at.update(Se,_e,In),(ps||bt.receiveShadow!==Se.receiveShadow)&&(bt.receiveShadow=Se.receiveShadow,Sn.setValue(re,"receiveShadow",Se.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ji.envMap.value=ht,ji.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),ps&&(Sn.setValue(re,"toneMappingExposure",D.toneMappingExposure),bt.needsLights&&bc(ji,No),Ze&&ne.fog===!0&&Oe.refreshFogUniforms(ji,Ze),Oe.refreshMaterialUniforms(ji,ne,ue,Ee,Be),sp.upload(re,bt.uniformsList,ji,Tt)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(sp.upload(re,bt.uniformsList,ji,Tt),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Sn.setValue(re,"center",Se.center),Sn.setValue(re,"modelViewMatrix",Se.modelViewMatrix),Sn.setValue(re,"normalMatrix",Se.normalMatrix),Sn.setValue(re,"modelMatrix",Se.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const An=ne.uniformsGroups;for(let Fo=0,Dc=An.length;Fo<Dc;Fo++)if(vt.isWebGL2){const $s=An[Fo];Et.update($s,In),Et.bind($s,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function bc(F,oe){F.ambientLightColor.needsUpdate=oe,F.lightProbe.needsUpdate=oe,F.directionalLights.needsUpdate=oe,F.directionalLightShadows.needsUpdate=oe,F.pointLights.needsUpdate=oe,F.pointLightShadows.needsUpdate=oe,F.spotLights.needsUpdate=oe,F.spotLightShadows.needsUpdate=oe,F.rectAreaLights.needsUpdate=oe,F.hemisphereLights.needsUpdate=oe}function Uc(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(F,oe,_e){Lt.get(F.texture).__webglTexture=oe,Lt.get(F.depthTexture).__webglTexture=_e;const ne=Lt.get(F);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=_e===void 0,ne.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,oe){const _e=Lt.get(F);_e.__webglFramebuffer=oe,_e.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(F,oe=0,_e=0){X=F,W=oe,q=_e;let ne=!0,Se=null,Ze=!1,ft=!1;if(F){const ht=Lt.get(F);ht.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(re.FRAMEBUFFER,null),ne=!1):ht.__webglFramebuffer===void 0?Tt.setupRenderTarget(F):ht.__hasExternalTextures&&Tt.rebindTextures(F,Lt.get(F.texture).__webglTexture,Lt.get(F.depthTexture).__webglTexture);const Pt=F.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ft=!0);const $e=Lt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Se=$e[oe],Ze=!0):vt.isWebGL2&&F.samples>0&&Tt.useMultisampledRTT(F)===!1?Se=Lt.get(F).__webglMultisampledFramebuffer:Se=$e,G.copy(F.viewport),Me.copy(F.scissor),Re=F.scissorTest}else G.copy(U).multiplyScalar(ue).floor(),Me.copy(k).multiplyScalar(ue).floor(),Re=J;if(St.bindFramebuffer(re.FRAMEBUFFER,Se)&&vt.drawBuffers&&ne&&St.drawBuffers(F,Se),St.viewport(G),St.scissor(Me),St.setScissorTest(Re),Ze){const ht=Lt.get(F.texture);re.framebufferTexture2D(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,re.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ht.__webglTexture,_e)}else if(ft){const ht=Lt.get(F.texture),Pt=oe||0;re.framebufferTextureLayer(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,ht.__webglTexture,_e||0,Pt)}fe=-1},this.readRenderTargetPixels=function(F,oe,_e,ne,Se,Ze,ft){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Lt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){St.bindFramebuffer(re.FRAMEBUFFER,mt);try{const ht=F.texture,Pt=ht.format,$e=ht.type;if(Pt!==fs&&et.convert(Pt)!==re.getParameter(re.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=$e===cd&&(nt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&nt.has("EXT_color_buffer_float"));if($e!==Aa&&et.convert($e)!==re.getParameter(re.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Ta&&(vt.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}oe>=0&&oe<=F.width-ne&&_e>=0&&_e<=F.height-Se&&re.readPixels(oe,_e,ne,Se,et.convert(Pt),et.convert($e),Ze)}finally{const ht=X!==null?Lt.get(X).__webglFramebuffer:null;St.bindFramebuffer(re.FRAMEBUFFER,ht)}}},this.copyFramebufferToTexture=function(F,oe,_e=0){const ne=Math.pow(2,-_e),Se=Math.floor(oe.image.width*ne),Ze=Math.floor(oe.image.height*ne);Tt.setTexture2D(oe,0),re.copyTexSubImage2D(re.TEXTURE_2D,_e,0,0,F.x,F.y,Se,Ze),St.unbindTexture()},this.copyTextureToTexture=function(F,oe,_e,ne=0){const Se=oe.image.width,Ze=oe.image.height,ft=et.convert(_e.format),mt=et.convert(_e.type);Tt.setTexture2D(_e,0),re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,_e.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,_e.unpackAlignment),oe.isDataTexture?re.texSubImage2D(re.TEXTURE_2D,ne,F.x,F.y,Se,Ze,ft,mt,oe.image.data):oe.isCompressedTexture?re.compressedTexSubImage2D(re.TEXTURE_2D,ne,F.x,F.y,oe.mipmaps[0].width,oe.mipmaps[0].height,ft,oe.mipmaps[0].data):re.texSubImage2D(re.TEXTURE_2D,ne,F.x,F.y,ft,mt,oe.image),ne===0&&_e.generateMipmaps&&re.generateMipmap(re.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(F,oe,_e,ne,Se=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ze=F.max.x-F.min.x+1,ft=F.max.y-F.min.y+1,mt=F.max.z-F.min.z+1,ht=et.convert(ne.format),Pt=et.convert(ne.type);let $e;if(ne.isData3DTexture)Tt.setTexture3D(ne,0),$e=re.TEXTURE_3D;else if(ne.isDataArrayTexture)Tt.setTexture2DArray(ne,0),$e=re.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,ne.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,ne.unpackAlignment);const wt=re.getParameter(re.UNPACK_ROW_LENGTH),rn=re.getParameter(re.UNPACK_IMAGE_HEIGHT),hn=re.getParameter(re.UNPACK_SKIP_PIXELS),jn=re.getParameter(re.UNPACK_SKIP_ROWS),Xi=re.getParameter(re.UNPACK_SKIP_IMAGES),pn=_e.isCompressedTexture?_e.mipmaps[0]:_e.image;re.pixelStorei(re.UNPACK_ROW_LENGTH,pn.width),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,pn.height),re.pixelStorei(re.UNPACK_SKIP_PIXELS,F.min.x),re.pixelStorei(re.UNPACK_SKIP_ROWS,F.min.y),re.pixelStorei(re.UNPACK_SKIP_IMAGES,F.min.z),_e.isDataTexture||_e.isData3DTexture?re.texSubImage3D($e,Se,oe.x,oe.y,oe.z,Ze,ft,mt,ht,Pt,pn.data):_e.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),re.compressedTexSubImage3D($e,Se,oe.x,oe.y,oe.z,Ze,ft,mt,ht,pn.data)):re.texSubImage3D($e,Se,oe.x,oe.y,oe.z,Ze,ft,mt,ht,Pt,pn),re.pixelStorei(re.UNPACK_ROW_LENGTH,wt),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,rn),re.pixelStorei(re.UNPACK_SKIP_PIXELS,hn),re.pixelStorei(re.UNPACK_SKIP_ROWS,jn),re.pixelStorei(re.UNPACK_SKIP_IMAGES,Xi),Se===0&&ne.generateMipmaps&&re.generateMipmap($e),St.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?Tt.setTextureCube(F,0):F.isData3DTexture?Tt.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Tt.setTexture2DArray(F,0):Tt.setTexture2D(F,0),St.unbindTexture()},this.resetState=function(){W=0,q=0,X=null,St.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Lo}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Ll:gv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ll?Nt:js}}class Ew extends Nv{}Ew.prototype.isWebGL1Renderer=!0;class Tw extends Tr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Q_={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ww{constructor(e,t,a){const u=this;let f=!1,p=0,h=0,x;const v=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this.itemStart=function(S){h++,f===!1&&u.onStart!==void 0&&u.onStart(S,p,h),f=!0},this.itemEnd=function(S){p++,u.onProgress!==void 0&&u.onProgress(S,p,h),p===h&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(S){u.onError!==void 0&&u.onError(S)},this.resolveURL=function(S){return x?x(S):S},this.setURLModifier=function(S){return x=S,this},this.addHandler=function(S,M){return v.push(S,M),this},this.removeHandler=function(S){const M=v.indexOf(S);return M!==-1&&v.splice(M,2),this},this.getHandler=function(S){for(let M=0,E=v.length;M<E;M+=2){const A=v[M],P=v[M+1];if(A.global&&(A.lastIndex=0),A.test(S))return P}return null}}}const Aw=new ww;class ag{constructor(e){this.manager=e!==void 0?e:Aw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(u,f){a.load(e,u,t,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ag.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ao={};class Rw extends Error{constructor(e,t){super(e),this.response=t}}class Cw extends ag{constructor(e){super(e)}load(e,t,a,u){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=Q_.get(e);if(f!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(f),this.manager.itemEnd(e)},0),f;if(Ao[e]!==void 0){Ao[e].push({onLoad:t,onProgress:a,onError:u});return}Ao[e]=[],Ao[e].push({onLoad:t,onProgress:a,onError:u});const p=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,x=this.responseType;fetch(p).then(v=>{if(v.status===200||v.status===0){if(v.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||v.body===void 0||v.body.getReader===void 0)return v;const S=Ao[e],M=v.body.getReader(),E=v.headers.get("Content-Length")||v.headers.get("X-File-Size"),A=E?parseInt(E):0,P=A!==0;let L=0;const T=new ReadableStream({start(y){H();function H(){M.read().then(({done:D,value:O})=>{if(D)y.close();else{L+=O.byteLength;const W=new ProgressEvent("progress",{lengthComputable:P,loaded:L,total:A});for(let q=0,X=S.length;q<X;q++){const fe=S[q];fe.onProgress&&fe.onProgress(W)}y.enqueue(O),H()}})}}});return new Response(T)}else throw new Rw(`fetch for "${v.url}" responded with ${v.status}: ${v.statusText}`,v)}).then(v=>{switch(x){case"arraybuffer":return v.arrayBuffer();case"blob":return v.blob();case"document":return v.text().then(S=>new DOMParser().parseFromString(S,h));case"json":return v.json();default:if(h===void 0)return v.text();{const M=/charset="?([^;"\s]*)"?/i.exec(h),E=M&&M[1]?M[1].toLowerCase():void 0,A=new TextDecoder(E);return v.arrayBuffer().then(P=>A.decode(P))}}}).then(v=>{Q_.add(e,v);const S=Ao[e];delete Ao[e];for(let M=0,E=S.length;M<E;M++){const A=S[M];A.onLoad&&A.onLoad(v)}}).catch(v=>{const S=Ao[e];if(S===void 0)throw this.manager.itemError(e),v;delete Ao[e];for(let M=0,E=S.length;M<E;M++){const A=S[M];A.onError&&A.onError(v)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tg);class Lw extends ag{constructor(e){super(e)}load(e,t,a,u){const f=this,p=new Cw(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(h){try{t(f.parse(h))}catch(x){u?u(x):console.error(x),f.manager.itemError(e)}},a,u)}parse(e){function t(v){const S=new DataView(v),M=32/8*3+32/8*3*3+16/8,E=S.getUint32(80,!0);if(80+32/8+E*M===S.byteLength)return!0;const P=[115,111,108,105,100];for(let L=0;L<5;L++)if(a(P,S,L))return!1;return!0}function a(v,S,M){for(let E=0,A=v.length;E<A;E++)if(v[E]!==S.getUint8(M+E))return!1;return!0}function u(v){const S=new DataView(v),M=S.getUint32(80,!0);let E,A,P,L=!1,T,y,H,D,O;for(let Me=0;Me<70;Me++)S.getUint32(Me,!1)==1129270351&&S.getUint8(Me+4)==82&&S.getUint8(Me+5)==61&&(L=!0,T=new Float32Array(M*3*3),y=S.getUint8(Me+6)/255,H=S.getUint8(Me+7)/255,D=S.getUint8(Me+8)/255,O=S.getUint8(Me+9)/255);const W=84,q=12*4+2,X=new Do,fe=new Float32Array(M*3*3),I=new Float32Array(M*3*3),G=new gn;for(let Me=0;Me<M;Me++){const Re=W+Me*q,se=S.getFloat32(Re,!0),de=S.getFloat32(Re+4,!0),me=S.getFloat32(Re+8,!0);if(L){const Ee=S.getUint16(Re+48,!0);(Ee&32768)===0?(E=(Ee&31)/31,A=(Ee>>5&31)/31,P=(Ee>>10&31)/31):(E=y,A=H,P=D)}for(let Ee=1;Ee<=3;Ee++){const ue=Re+Ee*12,Z=Me*3*3+(Ee-1)*3;fe[Z]=S.getFloat32(ue,!0),fe[Z+1]=S.getFloat32(ue+4,!0),fe[Z+2]=S.getFloat32(ue+8,!0),I[Z]=se,I[Z+1]=de,I[Z+2]=me,L&&(G.set(E,A,P).convertSRGBToLinear(),T[Z]=G.r,T[Z+1]=G.g,T[Z+2]=G.b)}}return X.setAttribute("position",new wr(fe,3)),X.setAttribute("normal",new wr(I,3)),L&&(X.setAttribute("color",new wr(T,3)),X.hasColors=!0,X.alpha=O),X}function f(v){const S=new Do,M=/solid([\s\S]*?)endsolid/g,E=/facet([\s\S]*?)endfacet/g;let A=0;const P=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,L=new RegExp("vertex"+P+P+P,"g"),T=new RegExp("normal"+P+P+P,"g"),y=[],H=[],D=new he;let O,W=0,q=0,X=0;for(;(O=M.exec(v))!==null;){q=X;const fe=O[0];for(;(O=E.exec(fe))!==null;){let Me=0,Re=0;const se=O[0];for(;(O=T.exec(se))!==null;)D.x=parseFloat(O[1]),D.y=parseFloat(O[2]),D.z=parseFloat(O[3]),Re++;for(;(O=L.exec(se))!==null;)y.push(parseFloat(O[1]),parseFloat(O[2]),parseFloat(O[3])),H.push(D.x,D.y,D.z),Me++,X++;Re!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+A),Me!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+A),A++}const I=q,G=X-q;S.addGroup(I,G,W),W++}return S.setAttribute("position",new Uo(y,3)),S.setAttribute("normal",new Uo(H,3)),S}function p(v){return typeof v!="string"?new TextDecoder().decode(v):v}function h(v){if(typeof v=="string"){const S=new Uint8Array(v.length);for(let M=0;M<v.length;M++)S[M]=v.charCodeAt(M)&255;return S.buffer||S}else return v}const x=h(e);return t(x)?u(x):f(p(e))}}var ad={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Pw=ad.exports,J_;function bw(){return J_||(J_=1,function(s,e){(function(){var t,a="4.17.21",u=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",p="Expected a function",h="Invalid `variable` option passed into `_.template`",x="__lodash_hash_undefined__",v=500,S="__lodash_placeholder__",M=1,E=2,A=4,P=1,L=2,T=1,y=2,H=4,D=8,O=16,W=32,q=64,X=128,fe=256,I=512,G=30,Me="...",Re=800,se=16,de=1,me=2,Ee=3,ue=1/0,Z=9007199254740991,pe=17976931348623157e292,U=NaN,k=4294967295,J=k-1,Ce=k>>>1,Ae=[["ary",X],["bind",T],["bindKey",y],["curry",D],["curryRight",O],["flip",I],["partial",W],["partialRight",q],["rearg",fe]],Ue="[object Arguments]",Be="[object Array]",Ye="[object AsyncFunction]",ze="[object Boolean]",pt="[object Date]",Zn="[object DOMException]",Mt="[object Error]",re="[object Function]",xn="[object GeneratorFunction]",nt="[object Map]",vt="[object Number]",St="[object Null]",Bt="[object Object]",Lt="[object Promise]",Tt="[object Proxy]",Ft="[object RegExp]",Gt="[object Set]",dn="[object String]",B="[object Symbol]",N="[object Undefined]",ge="[object WeakMap]",Oe="[object WeakSet]",Ie="[object ArrayBuffer]",ke="[object DataView]",rt="[object Float32Array]",He="[object Float64Array]",ve="[object Int8Array]",at="[object Int16Array]",ot="[object Int32Array]",lt="[object Uint8Array]",et="[object Uint8ClampedArray]",Ke="[object Uint16Array]",Et="[object Uint32Array]",$t=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,Ge=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ce=/&(?:amp|lt|gt|quot|#39);/g,Ne=/[&<>"']/g,We=RegExp(ce.source),zt=RegExp(Ne.source),tn=/<%-([\s\S]+?)%>/g,Tn=/<%([\s\S]+?)%>/g,Mi=/<%=([\s\S]+?)%>/g,nn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ui=/^\w*$/,wn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ds=/[\\^$.*+?()[\]{}|]/g,hs=RegExp(ds.source),Ca=/^\s+/,Ar=/\s/,Ys=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Wr=/\{\n\/\* \[wrapped with (.+)\] \*/,Io=/,? & /,Pc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,bc=/[()=,{}\[\]\/\s]/,Uc=/\\(\\)?/g,F=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,oe=/\w*$/,_e=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,Se=/^\[object .+?Constructor\]$/,Ze=/^0o[0-7]+$/i,ft=/^(?:0|[1-9]\d*)$/,mt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ht=/($^)/,Pt=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",wt="\\u0300-\\u036f",rn="\\ufe20-\\ufe2f",hn="\\u20d0-\\u20ff",jn=wt+rn+hn,Xi="\\u2700-\\u27bf",pn="a-z\\xdf-\\xf6\\xf8-\\xff",bt="\\xac\\xb1\\xd7\\xf7",Ei="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ln="\\u2000-\\u206f",In=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",La="A-Z\\xc0-\\xd6\\xd8-\\xde",ps="\\ufe0e\\ufe0f",No=bt+Ei+Ln+In,Sn="['’]",ji="["+$e+"]",Rr="["+No+"]",An="["+jn+"]",Fo="\\d+",Dc="["+Xi+"]",$s="["+pn+"]",Ic="[^"+$e+No+Fo+Xi+pn+La+"]",Pa="\\ud83c[\\udffb-\\udfff]",ba="(?:"+An+"|"+Pa+")",md="[^"+$e+"]",Ua="(?:\\ud83c[\\udde6-\\uddff]){2}",Yt="[\\ud800-\\udbff][\\udc00-\\udfff]",Ks="["+La+"]",Nc="\\u200d",Dl="(?:"+$s+"|"+Ic+")",gd="(?:"+Ks+"|"+Ic+")",Fc="(?:"+Sn+"(?:d|ll|m|re|s|t|ve))?",Oc="(?:"+Sn+"(?:D|LL|M|RE|S|T|VE))?",Il=ba+"?",Da="["+ps+"]?",ms="(?:"+Nc+"(?:"+[md,Ua,Yt].join("|")+")"+Da+Il+")*",gs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_s="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Oo=Da+Il+ms,Ia="(?:"+[Dc,Ua,Yt].join("|")+")"+Oo,vs="(?:"+[md+An+"?",An,Ua,Yt,ji].join("|")+")",dp=RegExp(Sn,"g"),_d=RegExp(An,"g"),Zs=RegExp(Pa+"(?="+Pa+")|"+vs+Oo,"g"),hp=RegExp([Ks+"?"+$s+"+"+Fc+"(?="+[Rr,Ks,"$"].join("|")+")",gd+"+"+Oc+"(?="+[Rr,Ks+Dl,"$"].join("|")+")",Ks+"?"+Dl+"+"+Fc,Ks+"+"+Oc,_s,gs,Fo,Ia].join("|"),"g"),vd=RegExp("["+Nc+$e+jn+ps+"]"),Nl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,xd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],pp=-1,Qt={};Qt[rt]=Qt[He]=Qt[ve]=Qt[at]=Qt[ot]=Qt[lt]=Qt[et]=Qt[Ke]=Qt[Et]=!0,Qt[Ue]=Qt[Be]=Qt[Ie]=Qt[ze]=Qt[ke]=Qt[pt]=Qt[Mt]=Qt[re]=Qt[nt]=Qt[vt]=Qt[Bt]=Qt[Ft]=Qt[Gt]=Qt[dn]=Qt[ge]=!1;var Kt={};Kt[Ue]=Kt[Be]=Kt[Ie]=Kt[ke]=Kt[ze]=Kt[pt]=Kt[rt]=Kt[He]=Kt[ve]=Kt[at]=Kt[ot]=Kt[nt]=Kt[vt]=Kt[Bt]=Kt[Ft]=Kt[Gt]=Kt[dn]=Kt[B]=Kt[lt]=Kt[et]=Kt[Ke]=Kt[Et]=!0,Kt[Mt]=Kt[re]=Kt[ge]=!1;var Bo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Fl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Bc=parseFloat,Ol=parseInt,Bl=typeof Nh=="object"&&Nh&&Nh.Object===Object&&Nh,Sd=typeof self=="object"&&self&&self.Object===Object&&self,mn=Bl||Sd||Function("return this")(),Na=e&&!e.nodeType&&e,Cr=Na&&!0&&s&&!s.nodeType&&s,zc=Cr&&Cr.exports===Na,zo=zc&&Bl.process,hi=function(){try{var Q=Cr&&Cr.require&&Cr.require("util").types;return Q||zo&&zo.binding&&zo.binding("util")}catch{}}(),kc=hi&&hi.isArrayBuffer,Ti=hi&&hi.isDate,Qs=hi&&hi.isMap,zl=hi&&hi.isRegExp,ko=hi&&hi.isSet,yd=hi&&hi.isTypedArray;function pi(Q,xe,ae){switch(ae.length){case 0:return Q.call(xe);case 1:return Q.call(xe,ae[0]);case 2:return Q.call(xe,ae[0],ae[1]);case 3:return Q.call(xe,ae[0],ae[1],ae[2])}return Q.apply(xe,ae)}function Hc(Q,xe,ae,je){for(var yt=-1,Xt=Q==null?0:Q.length;++yt<Xt;){var Pn=Q[yt];xe(je,Pn,ae(Pn),Q)}return je}function Qn(Q,xe){for(var ae=-1,je=Q==null?0:Q.length;++ae<je&&xe(Q[ae],ae,Q)!==!1;);return Q}function kl(Q,xe){for(var ae=Q==null?0:Q.length;ae--&&xe(Q[ae],ae,Q)!==!1;);return Q}function Gc(Q,xe){for(var ae=-1,je=Q==null?0:Q.length;++ae<je;)if(!xe(Q[ae],ae,Q))return!1;return!0}function xs(Q,xe){for(var ae=-1,je=Q==null?0:Q.length,yt=0,Xt=[];++ae<je;){var Pn=Q[ae];xe(Pn,ae,Q)&&(Xt[yt++]=Pn)}return Xt}function Hl(Q,xe){var ae=Q==null?0:Q.length;return!!ae&&Ho(Q,xe,0)>-1}function Vc(Q,xe,ae){for(var je=-1,yt=Q==null?0:Q.length;++je<yt;)if(ae(xe,Q[je]))return!0;return!1}function sn(Q,xe){for(var ae=-1,je=Q==null?0:Q.length,yt=Array(je);++ae<je;)yt[ae]=xe(Q[ae],ae,Q);return yt}function Ss(Q,xe){for(var ae=-1,je=xe.length,yt=Q.length;++ae<je;)Q[yt+ae]=xe[ae];return Q}function Wc(Q,xe,ae,je){var yt=-1,Xt=Q==null?0:Q.length;for(je&&Xt&&(ae=Q[++yt]);++yt<Xt;)ae=xe(ae,Q[yt],yt,Q);return ae}function _p(Q,xe,ae,je){var yt=Q==null?0:Q.length;for(je&&yt&&(ae=Q[--yt]);yt--;)ae=xe(ae,Q[yt],yt,Q);return ae}function Xc(Q,xe){for(var ae=-1,je=Q==null?0:Q.length;++ae<je;)if(xe(Q[ae],ae,Q))return!0;return!1}var vp=qc("length");function Md(Q){return Q.split("")}function xp(Q){return Q.match(Pc)||[]}function Ed(Q,xe,ae){var je;return ae(Q,function(yt,Xt,Pn){if(xe(yt,Xt,Pn))return je=Xt,!1}),je}function Gl(Q,xe,ae,je){for(var yt=Q.length,Xt=ae+(je?1:-1);je?Xt--:++Xt<yt;)if(xe(Q[Xt],Xt,Q))return Xt;return-1}function Ho(Q,xe,ae){return xe===xe?Xl(Q,xe,ae):Gl(Q,Td,ae)}function jc(Q,xe,ae,je){for(var yt=ae-1,Xt=Q.length;++yt<Xt;)if(je(Q[yt],xe))return yt;return-1}function Td(Q){return Q!==Q}function wd(Q,xe){var ae=Q==null?0:Q.length;return ae?Yc(Q,xe)/ae:U}function qc(Q){return function(xe){return xe==null?t:xe[Q]}}function Vl(Q){return function(xe){return Q==null?t:Q[xe]}}function Ad(Q,xe,ae,je,yt){return yt(Q,function(Xt,Pn,Jt){ae=je?(je=!1,Xt):xe(ae,Xt,Pn,Jt)}),ae}function Sp(Q,xe){var ae=Q.length;for(Q.sort(xe);ae--;)Q[ae]=Q[ae].value;return Q}function Yc(Q,xe){for(var ae,je=-1,yt=Q.length;++je<yt;){var Xt=xe(Q[je]);Xt!==t&&(ae=ae===t?Xt:ae+Xt)}return ae}function $c(Q,xe){for(var ae=-1,je=Array(Q);++ae<Q;)je[ae]=xe(ae);return je}function yp(Q,xe){return sn(xe,function(ae){return[ae,Q[ae]]})}function Rd(Q){return Q&&Q.slice(0,jl(Q)+1).replace(Ca,"")}function Di(Q){return function(xe){return Q(xe)}}function Fa(Q,xe){return sn(xe,function(ae){return Q[ae]})}function Xr(Q,xe){return Q.has(xe)}function Cd(Q,xe){for(var ae=-1,je=Q.length;++ae<je&&Ho(xe,Q[ae],0)>-1;);return ae}function Kc(Q,xe){for(var ae=Q.length;ae--&&Ho(xe,Q[ae],0)>-1;);return ae}function Ld(Q,xe){for(var ae=Q.length,je=0;ae--;)Q[ae]===xe&&++je;return je}var Pd=Vl(Bo),bd=Vl(Fl);function Ud(Q){return"\\"+gp[Q]}function Go(Q,xe){return Q==null?t:Q[xe]}function Vo(Q){return vd.test(Q)}function Mp(Q){return Nl.test(Q)}function Ep(Q){for(var xe,ae=[];!(xe=Q.next()).done;)ae.push(xe.value);return ae}function Wl(Q){var xe=-1,ae=Array(Q.size);return Q.forEach(function(je,yt){ae[++xe]=[yt,je]}),ae}function Zc(Q,xe){return function(ae){return Q(xe(ae))}}function qi(Q,xe){for(var ae=-1,je=Q.length,yt=0,Xt=[];++ae<je;){var Pn=Q[ae];(Pn===xe||Pn===S)&&(Q[ae]=S,Xt[yt++]=ae)}return Xt}function ys(Q){var xe=-1,ae=Array(Q.size);return Q.forEach(function(je){ae[++xe]=je}),ae}function Tp(Q){var xe=-1,ae=Array(Q.size);return Q.forEach(function(je){ae[++xe]=[je,je]}),ae}function Xl(Q,xe,ae){for(var je=ae-1,yt=Q.length;++je<yt;)if(Q[je]===xe)return je;return-1}function wp(Q,xe,ae){for(var je=ae+1;je--;)if(Q[je]===xe)return je;return je}function Js(Q){return Vo(Q)?Id(Q):vp(Q)}function Ii(Q){return Vo(Q)?Nd(Q):Md(Q)}function jl(Q){for(var xe=Q.length;xe--&&Ar.test(Q.charAt(xe)););return xe}var Dd=Vl(mp);function Id(Q){for(var xe=Zs.lastIndex=0;Zs.test(Q);)++xe;return xe}function Nd(Q){return Q.match(Zs)||[]}function Ap(Q){return Q.match(hp)||[]}var Rp=function Q(xe){xe=xe==null?mn:Wo.defaults(mn.Object(),xe,Wo.pick(mn,xd));var ae=xe.Array,je=xe.Date,yt=xe.Error,Xt=xe.Function,Pn=xe.Math,Jt=xe.Object,Oa=xe.RegExp,Cp=xe.String,Yi=xe.TypeError,jr=ae.prototype,Qc=Xt.prototype,Lr=Jt.prototype,Xo=xe["__core-js_shared__"],Ba=Qc.toString,jt=Lr.hasOwnProperty,jo=0,ql=function(){var r=/[^.]+$/.exec(Xo&&Xo.keys&&Xo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),za=Lr.toString,Yl=Ba.call(Jt),Fd=mn._,Od=Oa("^"+Ba.call(jt).replace(ds,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ka=zc?xe.Buffer:t,qr=xe.Symbol,Ha=xe.Uint8Array,Jc=ka?ka.allocUnsafe:t,lr=Zc(Jt.getPrototypeOf,Jt),$l=Jt.create,Kl=Lr.propertyIsEnumerable,Zl=jr.splice,Bd=qr?qr.isConcatSpreadable:t,Yr=qr?qr.iterator:t,eo=qr?qr.toStringTag:t,Ga=function(){try{var r=es(Jt,"defineProperty");return r({},"",{}),r}catch{}}(),zd=xe.clearTimeout!==mn.clearTimeout&&xe.clearTimeout,an=je&&je.now!==mn.Date.now&&je.now,ef=xe.setTimeout!==mn.setTimeout&&xe.setTimeout,to=Pn.ceil,Ms=Pn.floor,Ql=Jt.getOwnPropertySymbols,tf=ka?ka.isBuffer:t,qo=xe.isFinite,Jl=jr.join,Yo=Zc(Jt.keys,Jt),bn=Pn.max,Jn=Pn.min,Lp=je.now,kd=xe.parseInt,Va=Pn.random,eu=jr.reverse,Wa=es(xe,"DataView"),no=es(xe,"Map"),Xa=es(xe,"Promise"),Es=es(xe,"Set"),ja=es(xe,"WeakMap"),$o=es(Jt,"create"),tu=ja&&new ja,Ko={},nf=Os(Wa),Ts=Os(no),Hd=Os(Xa),Zo=Os(Es),Pr=Os(ja),ws=qr?qr.prototype:t,Ni=ws?ws.valueOf:t,nu=ws?ws.toString:t;function C(r){if(Dn(r)&&!Ct(r)&&!(r instanceof At)){if(r instanceof ei)return r;if(jt.call(r,"__wrapped__"))return Ff(r)}return new ei(r)}var Qo=function(){function r(){}return function(o){if(!Cn(o))return{};if($l)return $l(o);r.prototype=o;var d=new r;return r.prototype=t,d}}();function br(){}function ei(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}C.templateSettings={escape:tn,evaluate:Tn,interpolate:Mi,variable:"",imports:{_:C}},C.prototype=br.prototype,C.prototype.constructor=C,ei.prototype=Qo(br.prototype),ei.prototype.constructor=ei;function At(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=k,this.__views__=[]}function iu(){var r=new At(this.__wrapped__);return r.__actions__=_i(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=_i(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=_i(this.__views__),r}function rf(){if(this.__filtered__){var r=new At(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Jo(){var r=this.__wrapped__.value(),o=this.__dir__,d=Ct(r),_=o<0,w=d?r.length:0,b=fh(0,w,this.__views__),V=b.start,Y=b.end,ee=Y-V,Te=_?Y:V-1,we=this.__iteratees__,be=we.length,Xe=0,st=Jn(ee,this.__takeCount__);if(!d||!_&&w==ee&&st==ee)return gf(r,this.__actions__);var gt=[];e:for(;ee--&&Xe<st;){Te+=o;for(var Dt=-1,_t=r[Te];++Dt<be;){var kt=we[Dt],Wt=kt.iteratee,vr=kt.type,Gi=Wt(_t);if(vr==me)_t=Gi;else if(!Gi){if(vr==de)continue e;break e}}gt[Xe++]=_t}return gt}At.prototype=Qo(br.prototype),At.prototype.constructor=At;function wi(r){var o=-1,d=r==null?0:r.length;for(this.clear();++o<d;){var _=r[o];this.set(_[0],_[1])}}function ln(){this.__data__=$o?$o(null):{},this.size=0}function on(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function As(r){var o=this.__data__;if($o){var d=o[r];return d===x?t:d}return jt.call(o,r)?o[r]:t}function ti(r){var o=this.__data__;return $o?o[r]!==t:jt.call(o,r)}function Ai(r,o){var d=this.__data__;return this.size+=this.has(r)?0:1,d[r]=$o&&o===t?x:o,this}wi.prototype.clear=ln,wi.prototype.delete=on,wi.prototype.get=As,wi.prototype.has=ti,wi.prototype.set=Ai;function mi(r){var o=-1,d=r==null?0:r.length;for(this.clear();++o<d;){var _=r[o];this.set(_[0],_[1])}}function ea(){this.__data__=[],this.size=0}function Ri(r){var o=this.__data__,d=ii(o,r);if(d<0)return!1;var _=o.length-1;return d==_?o.pop():Zl.call(o,d,1),--this.size,!0}function ru(r){var o=this.__data__,d=ii(o,r);return d<0?t:o[d][1]}function Gd(r){return ii(this.__data__,r)>-1}function Vd(r,o){var d=this.__data__,_=ii(d,r);return _<0?(++this.size,d.push([r,o])):d[_][1]=o,this}mi.prototype.clear=ea,mi.prototype.delete=Ri,mi.prototype.get=ru,mi.prototype.has=Gd,mi.prototype.set=Vd;function $i(r){var o=-1,d=r==null?0:r.length;for(this.clear();++o<d;){var _=r[o];this.set(_[0],_[1])}}function Wd(){this.size=0,this.__data__={hash:new wi,map:new(no||mi),string:new wi}}function $r(r){var o=bu(this,r).delete(r);return this.size-=o?1:0,o}function su(r){return bu(this,r).get(r)}function sf(r){return bu(this,r).has(r)}function Xd(r,o){var d=bu(this,r),_=d.size;return d.set(r,o),this.size+=d.size==_?0:1,this}$i.prototype.clear=Wd,$i.prototype.delete=$r,$i.prototype.get=su,$i.prototype.has=sf,$i.prototype.set=Xd;function io(r){var o=-1,d=r==null?0:r.length;for(this.__data__=new $i;++o<d;)this.add(r[o])}function Rs(r){return this.__data__.set(r,x),this}function ta(r){return this.__data__.has(r)}io.prototype.add=io.prototype.push=Rs,io.prototype.has=ta;function ni(r){var o=this.__data__=new mi(r);this.size=o.size}function ou(){this.__data__=new mi,this.size=0}function au(r){var o=this.__data__,d=o.delete(r);return this.size=o.size,d}function Ki(r){return this.__data__.get(r)}function Zi(r){return this.__data__.has(r)}function ro(r,o){var d=this.__data__;if(d instanceof mi){var _=d.__data__;if(!no||_.length<u-1)return _.push([r,o]),this.size=++d.size,this;d=this.__data__=new $i(_)}return d.set(r,o),this.size=d.size,this}ni.prototype.clear=ou,ni.prototype.delete=au,ni.prototype.get=Ki,ni.prototype.has=Zi,ni.prototype.set=ro;function Ur(r,o){var d=Ct(r),_=!d&&_l(r),w=!d&&!_&&va(r),b=!d&&!_&&!w&&ec(r),V=d||_||w||b,Y=V?$c(r.length,Cp):[],ee=Y.length;for(var Te in r)(o||jt.call(r,Te))&&!(V&&(Te=="length"||w&&(Te=="offset"||Te=="parent")||b&&(Te=="buffer"||Te=="byteLength"||Te=="byteOffset")||Ji(Te,ee)))&&Y.push(Te);return Y}function Dr(r){var o=r.length;return o?r[el(0,o-1)]:t}function so(r,o){return zi(_i(r),Kr(o,0,r.length))}function jd(r){return zi(_i(r))}function qa(r,o,d){(d!==t&&!is(r[o],d)||d===t&&!(o in r))&&Ir(r,o,d)}function oo(r,o,d){var _=r[o];(!(jt.call(r,o)&&is(_,d))||d===t&&!(o in r))&&Ir(r,o,d)}function ii(r,o){for(var d=r.length;d--;)if(is(r[d][0],o))return d;return-1}function Fi(r,o,d,_){return Fr(r,function(w,b,V){o(_,w,d(w),V)}),_}function un(r,o){return r&&pr(o,ci(o),r)}function ur(r,o){return r&&pr(o,ir(o),r)}function Ir(r,o,d){o=="__proto__"&&Ga?Ga(r,o,{configurable:!0,enumerable:!0,value:d,writable:!0}):r[o]=d}function lu(r,o){for(var d=-1,_=o.length,w=ae(_),b=r==null;++d<_;)w[d]=b?t:Qp(r,o[d]);return w}function Kr(r,o,d){return r===r&&(d!==t&&(r=r<=d?r:d),o!==t&&(r=r>=o?r:o)),r}function Ci(r,o,d,_,w,b){var V,Y=o&M,ee=o&E,Te=o&A;if(d&&(V=w?d(r,_,w,b):d(r)),V!==t)return V;if(!Cn(r))return r;var we=Ct(r);if(we){if(V=dh(r),!Y)return _i(r,V)}else{var be=ai(r),Xe=be==re||be==xn;if(va(r))return vf(r,Y);if(be==Bt||be==Ue||Xe&&!w){if(V=ee||Xe?{}:da(r),!Y)return ee?bp(r,ur(V,r)):nh(r,un(V,r))}else{if(!Kt[be])return w?r:{};V=li(r,be,Y)}}b||(b=new ni);var st=b.get(r);if(st)return st;b.set(r,V),dg(r)?r.forEach(function(_t){V.add(Ci(_t,o,d,_t,r,b))}):cg(r)&&r.forEach(function(_t,kt){V.set(kt,Ci(_t,o,d,kt,r,b))});var gt=Te?ee?al:Pu:ee?ir:ci,Dt=we?t:gt(r);return Qn(Dt||r,function(_t,kt){Dt&&(kt=_t,_t=r[kt]),oo(V,kt,Ci(_t,o,d,kt,r,b))}),V}function qd(r){var o=ci(r);return function(d){return Ya(d,r,o)}}function Ya(r,o,d){var _=d.length;if(r==null)return!_;for(r=Jt(r);_--;){var w=d[_],b=o[w],V=r[w];if(V===t&&!(w in r)||!b(V))return!1}return!0}function of(r,o,d){if(typeof r!="function")throw new Yi(p);return pa(function(){r.apply(t,d)},o)}function Nr(r,o,d,_){var w=-1,b=Hl,V=!0,Y=r.length,ee=[],Te=o.length;if(!Y)return ee;d&&(o=sn(o,Di(d))),_?(b=Vc,V=!1):o.length>=u&&(b=Xr,V=!1,o=new io(o));e:for(;++w<Y;){var we=r[w],be=d==null?we:d(we);if(we=_||we!==0?we:0,V&&be===be){for(var Xe=Te;Xe--;)if(o[Xe]===be)continue e;ee.push(we)}else b(o,be,_)||ee.push(we)}return ee}var Fr=ih(Qi),Yd=ih(Cs,!0);function cr(r,o){var d=!0;return Fr(r,function(_,w,b){return d=!!o(_,w,b),d}),d}function ao(r,o,d){for(var _=-1,w=r.length;++_<w;){var b=r[_],V=o(b);if(V!=null&&(Y===t?V===V&&!_r(V):d(V,Y)))var Y=V,ee=b}return ee}function uu(r,o,d,_){var w=r.length;for(d=Ut(d),d<0&&(d=-d>w?0:w+d),_=_===t||_>w?w:Ut(_),_<0&&(_+=w),_=d>_?0:pg(_);d<_;)r[d++]=o;return r}function lo(r,o){var d=[];return Fr(r,function(_,w,b){o(_,w,b)&&d.push(_)}),d}function Nn(r,o,d,_,w){var b=-1,V=r.length;for(d||(d=Ip),w||(w=[]);++b<V;){var Y=r[b];o>0&&d(Y)?o>1?Nn(Y,o-1,d,_,w):Ss(w,Y):_||(w[w.length]=Y)}return w}var $a=Ef(),cu=Ef(!0);function Qi(r,o){return r&&$a(r,o,ci)}function Cs(r,o){return r&&cu(r,o,ci)}function gi(r,o){return xs(o,function(d){return _o(r[d])})}function Oi(r,o){o=Zr(o,r);for(var d=0,_=o.length;r!=null&&d<_;)r=r[mr(o[d++])];return d&&d==_?r:t}function fu(r,o,d){var _=o(r);return Ct(r)?_:Ss(_,d(r))}function ri(r){return r==null?r===t?N:St:eo&&eo in Jt(r)?ch(r):gh(r)}function fr(r,o){return r>o}function Ls(r,o){return r!=null&&jt.call(r,o)}function af(r,o){return r!=null&&o in Jt(r)}function $d(r,o,d){return r>=Jn(o,d)&&r<bn(o,d)}function dr(r,o,d){for(var _=d?Vc:Hl,w=r[0].length,b=r.length,V=b,Y=ae(b),ee=1/0,Te=[];V--;){var we=r[V];V&&o&&(we=sn(we,Di(o))),ee=Jn(we.length,ee),Y[V]=!d&&(o||w>=120&&we.length>=120)?new io(V&&we):t}we=r[0];var be=-1,Xe=Y[0];e:for(;++be<w&&Te.length<ee;){var st=we[be],gt=o?o(st):st;if(st=d||st!==0?st:0,!(Xe?Xr(Xe,gt):_(Te,gt,d))){for(V=b;--V;){var Dt=Y[V];if(!(Dt?Xr(Dt,gt):_(r[V],gt,d)))continue e}Xe&&Xe.push(gt),Te.push(st)}}return Te}function Ps(r,o,d,_){return Qi(r,function(w,b,V){o(_,d(w),b,V)}),_}function bs(r,o,d){o=Zr(o,r),r=Iu(r,o);var _=r==null?r:r[mr(kn(o))];return _==null?t:pi(_,r,d)}function lf(r){return Dn(r)&&ri(r)==Ue}function du(r){return Dn(r)&&ri(r)==Ie}function Kd(r){return Dn(r)&&ri(r)==pt}function na(r,o,d,_,w){return r===o?!0:r==null||o==null||!Dn(r)&&!Dn(o)?r!==r&&o!==o:uf(r,o,d,_,na,w)}function uf(r,o,d,_,w,b){var V=Ct(r),Y=Ct(o),ee=V?Be:ai(r),Te=Y?Be:ai(o);ee=ee==Ue?Bt:ee,Te=Te==Ue?Bt:Te;var we=ee==Bt,be=Te==Bt,Xe=ee==Te;if(Xe&&va(r)){if(!va(o))return!1;V=!0,we=!1}if(Xe&&!we)return b||(b=new ni),V||ec(r)?Lu(r,o,d,_,w,b):uh(r,o,ee,d,_,w,b);if(!(d&P)){var st=we&&jt.call(r,"__wrapped__"),gt=be&&jt.call(o,"__wrapped__");if(st||gt){var Dt=st?r.value():r,_t=gt?o.value():o;return b||(b=new ni),w(Dt,_t,d,_,b)}}return Xe?(b||(b=new ni),Lf(r,o,d,_,w,b)):!1}function hu(r){return Dn(r)&&ai(r)==nt}function pu(r,o,d,_){var w=d.length,b=w,V=!_;if(r==null)return!b;for(r=Jt(r);w--;){var Y=d[w];if(V&&Y[2]?Y[1]!==r[Y[0]]:!(Y[0]in r))return!1}for(;++w<b;){Y=d[w];var ee=Y[0],Te=r[ee],we=Y[1];if(V&&Y[2]){if(Te===t&&!(ee in r))return!1}else{var be=new ni;if(_)var Xe=_(Te,we,ee,r,o,be);if(!(Xe===t?na(we,Te,P|L,_,be):Xe))return!1}}return!0}function cf(r){if(!Cn(r)||Df(r))return!1;var o=_o(r)?Od:Se;return o.test(Os(r))}function Zd(r){return Dn(r)&&ri(r)==Ft}function ff(r){return Dn(r)&&ai(r)==Gt}function Ka(r){return Dn(r)&&Uh(r.length)&&!!Qt[ri(r)]}function Za(r){return typeof r=="function"?r:r==null?rr:typeof r=="object"?Ct(r)?hr(r[0],r[1]):ia(r):wg(r)}function mu(r){if(!cl(r))return Yo(r);var o=[];for(var d in Jt(r))jt.call(r,d)&&d!="constructor"&&o.push(d);return o}function Qd(r){if(!Cn(r))return mh(r);var o=cl(r),d=[];for(var _ in r)_=="constructor"&&(o||!jt.call(r,_))||d.push(_);return d}function Us(r,o){return r<o}function df(r,o){var d=-1,_=nr(r)?ae(r.length):[];return Fr(r,function(w,b,V){_[++d]=o(w,b,V)}),_}function ia(r){var o=Uu(r);return o.length==1&&o[0][2]?fl(o[0][0],o[0][1]):function(d){return d===r||pu(d,r,o)}}function hr(r,o){return Uf(r)&&ha(o)?fl(mr(r),o):function(d){var _=Qp(d,r);return _===t&&_===o?Jp(d,r):na(o,_,P|L)}}function Ds(r,o,d,_,w){r!==o&&$a(o,function(b,V){if(w||(w=new ni),Cn(b))Qa(r,o,V,d,Ds,_,w);else{var Y=_?_(Bi(r,V),b,V+"",r,o,w):t;Y===t&&(Y=b),qa(r,V,Y)}},ir)}function Qa(r,o,d,_,w,b,V){var Y=Bi(r,d),ee=Bi(o,d),Te=V.get(ee);if(Te){qa(r,d,Te);return}var we=b?b(Y,ee,d+"",r,o,V):t,be=we===t;if(be){var Xe=Ct(ee),st=!Xe&&va(ee),gt=!Xe&&!st&&ec(ee);we=ee,Xe||st||gt?Ct(Y)?we=Y:Hn(Y)?we=_i(Y):st?(be=!1,we=vf(ee,!0)):gt?(be=!1,we=Sf(ee,!0)):we=[]:ed(ee)||_l(ee)?(we=Y,_l(Y)?we=mg(Y):(!Cn(Y)||_o(Y))&&(we=da(ee))):be=!1}be&&(V.set(ee,we),w(we,ee,_,b,V),V.delete(ee)),qa(r,d,we)}function Is(r,o){var d=r.length;if(d)return o+=o<0?d:0,Ji(o,d)?r[o]:t}function gu(r,o,d){o.length?o=sn(o,function(b){return Ct(b)?function(V){return Oi(V,b.length===1?b[0]:b)}:b}):o=[rr];var _=-1;o=sn(o,Di(ut()));var w=df(r,function(b,V,Y){var ee=sn(o,function(Te){return Te(b)});return{criteria:ee,index:++_,value:b}});return Sp(w,function(b,V){return th(b,V,d)})}function ra(r,o){return hf(r,o,function(d,_){return Jp(r,_)})}function hf(r,o,d){for(var _=-1,w=o.length,b={};++_<w;){var V=o[_],Y=Oi(r,V);d(Y,V)&&vn(b,Zr(V,r),Y)}return b}function pf(r){return function(o){return Oi(o,r)}}function cn(r,o,d,_){var w=_?jc:Ho,b=-1,V=o.length,Y=r;for(r===o&&(o=_i(o)),d&&(Y=sn(r,Di(d)));++b<V;)for(var ee=0,Te=o[b],we=d?d(Te):Te;(ee=w(Y,we,ee,_))>-1;)Y!==r&&Zl.call(Y,ee,1),Zl.call(r,ee,1);return r}function Ja(r,o){for(var d=r?o.length:0,_=d-1;d--;){var w=o[d];if(d==_||w!==b){var b=w;Ji(w)?Zl.call(r,w,1):co(r,w)}}return r}function el(r,o){return r+Ms(Va()*(o-r+1))}function mf(r,o,d,_){for(var w=-1,b=bn(to((o-r)/(d||1)),0),V=ae(b);b--;)V[_?b:++w]=r,r+=d;return V}function sa(r,o){var d="";if(!r||o<1||o>Z)return d;do o%2&&(d+=r),o=Ms(o/2),o&&(r+=r);while(o);return d}function Rt(r,o){return Nu(Du(r,o,rr),r+"")}function uo(r){return Dr(tc(r))}function _n(r,o){var d=tc(r);return zi(d,Kr(o,0,d.length))}function vn(r,o,d,_){if(!Cn(r))return r;o=Zr(o,r);for(var w=-1,b=o.length,V=b-1,Y=r;Y!=null&&++w<b;){var ee=mr(o[w]),Te=d;if(ee==="__proto__"||ee==="constructor"||ee==="prototype")return r;if(w!=V){var we=Y[ee];Te=_?_(we,ee,Y):t,Te===t&&(Te=Cn(we)?we:Ji(o[w+1])?[]:{})}oo(Y,ee,Te),Y=Y[ee]}return r}var Fn=tu?function(r,o){return tu.set(r,o),r}:rr,_u=Ga?function(r,o){return Ga(r,"toString",{configurable:!0,enumerable:!1,value:tm(o),writable:!0})}:rr;function tl(r){return zi(tc(r))}function si(r,o,d){var _=-1,w=r.length;o<0&&(o=-o>w?0:w+o),d=d>w?w:d,d<0&&(d+=w),w=o>d?0:d-o>>>0,o>>>=0;for(var b=ae(w);++_<w;)b[_]=r[_+o];return b}function Pp(r,o){var d;return Fr(r,function(_,w,b){return d=o(_,w,b),!d}),!!d}function On(r,o,d){var _=0,w=r==null?_:r.length;if(typeof o=="number"&&o===o&&w<=Ce){for(;_<w;){var b=_+w>>>1,V=r[b];V!==null&&!_r(V)&&(d?V<=o:V<o)?_=b+1:w=b}return w}return nl(r,o,rr,d)}function nl(r,o,d,_){var w=0,b=r==null?0:r.length;if(b===0)return 0;o=d(o);for(var V=o!==o,Y=o===null,ee=_r(o),Te=o===t;w<b;){var we=Ms((w+b)/2),be=d(r[we]),Xe=be!==t,st=be===null,gt=be===be,Dt=_r(be);if(V)var _t=_||gt;else Te?_t=gt&&(_||Xe):Y?_t=gt&&Xe&&(_||!st):ee?_t=gt&&Xe&&!st&&(_||!Dt):st||Dt?_t=!1:_t=_?be<=o:be<o;_t?w=we+1:b=we}return Jn(b,J)}function vu(r,o){for(var d=-1,_=r.length,w=0,b=[];++d<_;){var V=r[d],Y=o?o(V):V;if(!d||!is(Y,ee)){var ee=Y;b[w++]=V===0?0:V}}return b}function xu(r){return typeof r=="number"?r:_r(r)?U:+r}function yn(r){if(typeof r=="string")return r;if(Ct(r))return sn(r,yn)+"";if(_r(r))return nu?nu.call(r):"";var o=r+"";return o=="0"&&1/r==-1/0?"-0":o}function Bn(r,o,d){var _=-1,w=Hl,b=r.length,V=!0,Y=[],ee=Y;if(d)V=!1,w=Vc;else if(b>=u){var Te=o?null:vi(r);if(Te)return ys(Te);V=!1,w=Xr,ee=new io}else ee=o?[]:Y;e:for(;++_<b;){var we=r[_],be=o?o(we):we;if(we=d||we!==0?we:0,V&&be===be){for(var Xe=ee.length;Xe--;)if(ee[Xe]===be)continue e;o&&ee.push(be),Y.push(we)}else w(ee,be,d)||(ee!==Y&&ee.push(be),Y.push(we))}return Y}function co(r,o){return o=Zr(o,r),r=Iu(r,o),r==null||delete r[mr(kn(o))]}function Su(r,o,d,_){return vn(r,o,d(Oi(r,o)),_)}function oa(r,o,d,_){for(var w=r.length,b=_?w:-1;(_?b--:++b<w)&&o(r[b],b,r););return d?si(r,_?0:b,_?b+1:w):si(r,_?b+1:0,_?w:b)}function gf(r,o){var d=r;return d instanceof At&&(d=d.value()),Wc(o,function(_,w){return w.func.apply(w.thisArg,Ss([_],w.args))},d)}function yu(r,o,d){var _=r.length;if(_<2)return _?Bn(r[0]):[];for(var w=-1,b=ae(_);++w<_;)for(var V=r[w],Y=-1;++Y<_;)Y!=w&&(b[w]=Nr(b[w]||V,r[Y],o,d));return Bn(Nn(b,1),o,d)}function _f(r,o,d){for(var _=-1,w=r.length,b=o.length,V={};++_<w;){var Y=_<b?o[_]:t;d(V,r[_],Y)}return V}function Mu(r){return Hn(r)?r:[]}function Eu(r){return typeof r=="function"?r:rr}function Zr(r,o){return Ct(r)?r:Uf(r,o)?[r]:_h(en(r))}var Jd=Rt;function Qr(r,o,d){var _=r.length;return d=d===t?_:d,!o&&d>=_?r:si(r,o,d)}var aa=zd||function(r){return mn.clearTimeout(r)};function vf(r,o){if(o)return r.slice();var d=r.length,_=Jc?Jc(d):new r.constructor(d);return r.copy(_),_}function la(r){var o=new r.constructor(r.byteLength);return new Ha(o).set(new Ha(r)),o}function Tu(r,o){var d=o?la(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.byteLength)}function eh(r){var o=new r.constructor(r.source,oe.exec(r));return o.lastIndex=r.lastIndex,o}function xf(r){return Ni?Jt(Ni.call(r)):{}}function Sf(r,o){var d=o?la(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.length)}function yf(r,o){if(r!==o){var d=r!==t,_=r===null,w=r===r,b=_r(r),V=o!==t,Y=o===null,ee=o===o,Te=_r(o);if(!Y&&!Te&&!b&&r>o||b&&V&&ee&&!Y&&!Te||_&&V&&ee||!d&&ee||!w)return 1;if(!_&&!b&&!Te&&r<o||Te&&d&&w&&!_&&!b||Y&&d&&w||!V&&w||!ee)return-1}return 0}function th(r,o,d){for(var _=-1,w=r.criteria,b=o.criteria,V=w.length,Y=d.length;++_<V;){var ee=yf(w[_],b[_]);if(ee){if(_>=Y)return ee;var Te=d[_];return ee*(Te=="desc"?-1:1)}}return r.index-o.index}function Mf(r,o,d,_){for(var w=-1,b=r.length,V=d.length,Y=-1,ee=o.length,Te=bn(b-V,0),we=ae(ee+Te),be=!_;++Y<ee;)we[Y]=o[Y];for(;++w<V;)(be||w<b)&&(we[d[w]]=r[w]);for(;Te--;)we[Y++]=r[w++];return we}function wu(r,o,d,_){for(var w=-1,b=r.length,V=-1,Y=d.length,ee=-1,Te=o.length,we=bn(b-Y,0),be=ae(we+Te),Xe=!_;++w<we;)be[w]=r[w];for(var st=w;++ee<Te;)be[st+ee]=o[ee];for(;++V<Y;)(Xe||w<b)&&(be[st+d[V]]=r[w++]);return be}function _i(r,o){var d=-1,_=r.length;for(o||(o=ae(_));++d<_;)o[d]=r[d];return o}function pr(r,o,d,_){var w=!d;d||(d={});for(var b=-1,V=o.length;++b<V;){var Y=o[b],ee=_?_(d[Y],r[Y],Y,d,r):t;ee===t&&(ee=r[Y]),w?Ir(d,Y,ee):oo(d,Y,ee)}return d}function nh(r,o){return pr(r,fa(r),o)}function bp(r,o){return pr(r,zr(r),o)}function il(r,o){return function(d,_){var w=Ct(d)?Hc:Fi,b=o?o():{};return w(d,r,ut(_,2),b)}}function ua(r){return Rt(function(o,d){var _=-1,w=d.length,b=w>1?d[w-1]:t,V=w>2?d[2]:t;for(b=r.length>3&&typeof b=="function"?(w--,b):t,V&&Zt(d[0],d[1],V)&&(b=w<3?t:b,w=1),o=Jt(o);++_<w;){var Y=d[_];Y&&r(o,Y,_,b)}return o})}function ih(r,o){return function(d,_){if(d==null)return d;if(!nr(d))return r(d,_);for(var w=d.length,b=o?w:-1,V=Jt(d);(o?b--:++b<w)&&_(V[b],b,V)!==!1;);return d}}function Ef(r){return function(o,d,_){for(var w=-1,b=Jt(o),V=_(o),Y=V.length;Y--;){var ee=V[r?Y:++w];if(d(b[ee],ee,b)===!1)break}return o}}function rh(r,o,d){var _=o&T,w=rl(r);function b(){var V=this&&this!==mn&&this instanceof b?w:r;return V.apply(_?d:this,arguments)}return b}function Tf(r){return function(o){o=en(o);var d=Vo(o)?Ii(o):t,_=d?d[0]:o.charAt(0),w=d?Qr(d,1).join(""):o.slice(1);return _[r]()+w}}function Jr(r){return function(o){return Wc(Eg(Mg(o).replace(dp,"")),r,"")}}function rl(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var d=Qo(r.prototype),_=r.apply(d,o);return Cn(_)?_:d}}function Up(r,o,d){var _=rl(r);function w(){for(var b=arguments.length,V=ae(b),Y=b,ee=Ns(w);Y--;)V[Y]=arguments[Y];var Te=b<3&&V[0]!==ee&&V[b-1]!==ee?[]:qi(V,ee);if(b-=Te.length,b<d)return ah(r,o,ca,w.placeholder,t,V,Te,t,t,d-b);var we=this&&this!==mn&&this instanceof w?_:r;return pi(we,this,V)}return w}function sh(r){return function(o,d,_){var w=Jt(o);if(!nr(o)){var b=ut(d,3);o=ci(o),d=function(Y){return b(w[Y],Y,w)}}var V=r(o,d,_);return V>-1?w[b?o[V]:V]:t}}function fo(r){return Br(function(o){var d=o.length,_=d,w=ei.prototype.thru;for(r&&o.reverse();_--;){var b=o[_];if(typeof b!="function")throw new Yi(p);if(w&&!V&&ul(b)=="wrapper")var V=new ei([],!0)}for(_=V?_:d;++_<d;){b=o[_];var Y=ul(b),ee=Y=="wrapper"?ll(b):t;ee&&Fs(ee[0])&&ee[1]==(X|D|W|fe)&&!ee[4].length&&ee[9]==1?V=V[ul(ee[0])].apply(V,ee[3]):V=b.length==1&&Fs(b)?V[Y]():V.thru(b)}return function(){var Te=arguments,we=Te[0];if(V&&Te.length==1&&Ct(we))return V.plant(we).value();for(var be=0,Xe=d?o[be].apply(this,Te):we;++be<d;)Xe=o[be].call(this,Xe);return Xe}})}function ca(r,o,d,_,w,b,V,Y,ee,Te){var we=o&X,be=o&T,Xe=o&y,st=o&(D|O),gt=o&I,Dt=Xe?t:rl(r);function _t(){for(var kt=arguments.length,Wt=ae(kt),vr=kt;vr--;)Wt[vr]=arguments[vr];if(st)var Gi=Ns(_t),xr=Ld(Wt,Gi);if(_&&(Wt=Mf(Wt,_,w,st)),b&&(Wt=wu(Wt,b,V,st)),kt-=xr,st&&kt<Te){var Gn=qi(Wt,Gi);return ah(r,o,ca,_t.placeholder,d,Wt,Gn,Y,ee,Te-kt)}var rs=be?d:this,xo=Xe?rs[r]:r;return kt=Wt.length,Y?Wt=qn(Wt,Y):gt&&kt>1&&Wt.reverse(),we&&ee<kt&&(Wt.length=ee),this&&this!==mn&&this instanceof _t&&(xo=Dt||rl(xo)),xo.apply(rs,Wt)}return _t}function Au(r,o){return function(d,_){return Ps(d,r,o(_),{})}}function Ru(r,o){return function(d,_){var w;if(d===t&&_===t)return o;if(d!==t&&(w=d),_!==t){if(w===t)return _;typeof d=="string"||typeof _=="string"?(d=yn(d),_=yn(_)):(d=xu(d),_=xu(_)),w=r(d,_)}return w}}function Cu(r){return Br(function(o){return o=sn(o,Di(ut())),Rt(function(d){var _=this;return r(o,function(w){return pi(w,_,d)})})})}function sl(r,o){o=o===t?" ":yn(o);var d=o.length;if(d<2)return d?sa(o,r):o;var _=sa(o,to(r/Js(o)));return Vo(o)?Qr(Ii(_),0,r).join(""):_.slice(0,r)}function oh(r,o,d,_){var w=o&T,b=rl(r);function V(){for(var Y=-1,ee=arguments.length,Te=-1,we=_.length,be=ae(we+ee),Xe=this&&this!==mn&&this instanceof V?b:r;++Te<we;)be[Te]=_[Te];for(;ee--;)be[Te++]=arguments[++Y];return pi(Xe,w?d:this,be)}return V}function wf(r){return function(o,d,_){return _&&typeof _!="number"&&Zt(o,d,_)&&(d=_=t),o=vo(o),d===t?(d=o,o=0):d=vo(d),_=_===t?o<d?1:-1:vo(_),mf(o,d,_,r)}}function ol(r){return function(o,d){return typeof o=="string"&&typeof d=="string"||(o=kr(o),d=kr(d)),r(o,d)}}function ah(r,o,d,_,w,b,V,Y,ee,Te){var we=o&D,be=we?V:t,Xe=we?t:V,st=we?b:t,gt=we?t:b;o|=we?W:q,o&=~(we?q:W),o&H||(o&=-4);var Dt=[r,o,w,st,be,gt,Xe,Y,ee,Te],_t=d.apply(t,Dt);return Fs(r)&&ts(_t,Dt),_t.placeholder=_,er(_t,r,o)}function oi(r){var o=Pn[r];return function(d,_){if(d=kr(d),_=_==null?0:Jn(Ut(_),292),_&&qo(d)){var w=(en(d)+"e").split("e"),b=o(w[0]+"e"+(+w[1]+_));return w=(en(b)+"e").split("e"),+(w[0]+"e"+(+w[1]-_))}return o(d)}}var vi=Es&&1/ys(new Es([,-0]))[1]==ue?function(r){return new Es(r)}:rm;function Af(r){return function(o){var d=ai(o);return d==nt?Wl(o):d==Gt?Tp(o):yp(o,r(o))}}function Or(r,o,d,_,w,b,V,Y){var ee=o&y;if(!ee&&typeof r!="function")throw new Yi(p);var Te=_?_.length:0;if(Te||(o&=-97,_=w=t),V=V===t?V:bn(Ut(V),0),Y=Y===t?Y:Ut(Y),Te-=w?w.length:0,o&q){var we=_,be=w;_=w=t}var Xe=ee?t:ll(r),st=[r,o,d,_,w,we,be,b,V,Y];if(Xe&&ph(st,Xe),r=st[0],o=st[1],d=st[2],_=st[3],w=st[4],Y=st[9]=st[9]===t?ee?0:r.length:bn(st[9]-Te,0),!Y&&o&(D|O)&&(o&=-25),!o||o==T)var gt=rh(r,o,d);else o==D||o==O?gt=Up(r,o,Y):(o==W||o==(T|W))&&!w.length?gt=oh(r,o,d,_):gt=ca.apply(t,st);var Dt=Xe?Fn:ts;return er(Dt(gt,st),r,o)}function Rf(r,o,d,_){return r===t||is(r,Lr[d])&&!jt.call(_,d)?o:r}function Cf(r,o,d,_,w,b){return Cn(r)&&Cn(o)&&(b.set(o,r),Ds(r,o,t,Cf,b),b.delete(o)),r}function lh(r){return ed(r)?t:r}function Lu(r,o,d,_,w,b){var V=d&P,Y=r.length,ee=o.length;if(Y!=ee&&!(V&&ee>Y))return!1;var Te=b.get(r),we=b.get(o);if(Te&&we)return Te==o&&we==r;var be=-1,Xe=!0,st=d&L?new io:t;for(b.set(r,o),b.set(o,r);++be<Y;){var gt=r[be],Dt=o[be];if(_)var _t=V?_(Dt,gt,be,o,r,b):_(gt,Dt,be,r,o,b);if(_t!==t){if(_t)continue;Xe=!1;break}if(st){if(!Xc(o,function(kt,Wt){if(!Xr(st,Wt)&&(gt===kt||w(gt,kt,d,_,b)))return st.push(Wt)})){Xe=!1;break}}else if(!(gt===Dt||w(gt,Dt,d,_,b))){Xe=!1;break}}return b.delete(r),b.delete(o),Xe}function uh(r,o,d,_,w,b,V){switch(d){case ke:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case Ie:return!(r.byteLength!=o.byteLength||!b(new Ha(r),new Ha(o)));case ze:case pt:case vt:return is(+r,+o);case Mt:return r.name==o.name&&r.message==o.message;case Ft:case dn:return r==o+"";case nt:var Y=Wl;case Gt:var ee=_&P;if(Y||(Y=ys),r.size!=o.size&&!ee)return!1;var Te=V.get(r);if(Te)return Te==o;_|=L,V.set(r,o);var we=Lu(Y(r),Y(o),_,w,b,V);return V.delete(r),we;case B:if(Ni)return Ni.call(r)==Ni.call(o)}return!1}function Lf(r,o,d,_,w,b){var V=d&P,Y=Pu(r),ee=Y.length,Te=Pu(o),we=Te.length;if(ee!=we&&!V)return!1;for(var be=ee;be--;){var Xe=Y[be];if(!(V?Xe in o:jt.call(o,Xe)))return!1}var st=b.get(r),gt=b.get(o);if(st&&gt)return st==o&&gt==r;var Dt=!0;b.set(r,o),b.set(o,r);for(var _t=V;++be<ee;){Xe=Y[be];var kt=r[Xe],Wt=o[Xe];if(_)var vr=V?_(Wt,kt,Xe,o,r,b):_(kt,Wt,Xe,r,o,b);if(!(vr===t?kt===Wt||w(kt,Wt,d,_,b):vr)){Dt=!1;break}_t||(_t=Xe=="constructor")}if(Dt&&!_t){var Gi=r.constructor,xr=o.constructor;Gi!=xr&&"constructor"in r&&"constructor"in o&&!(typeof Gi=="function"&&Gi instanceof Gi&&typeof xr=="function"&&xr instanceof xr)&&(Dt=!1)}return b.delete(r),b.delete(o),Dt}function Br(r){return Nu(Du(r,t,dl),r+"")}function Pu(r){return fu(r,ci,fa)}function al(r){return fu(r,ir,zr)}var ll=tu?function(r){return tu.get(r)}:rm;function ul(r){for(var o=r.name+"",d=Ko[o],_=jt.call(Ko,o)?d.length:0;_--;){var w=d[_],b=w.func;if(b==null||b==r)return w.name}return o}function Ns(r){var o=jt.call(C,"placeholder")?C:r;return o.placeholder}function ut(){var r=C.iteratee||nm;return r=r===nm?Za:r,arguments.length?r(arguments[0],arguments[1]):r}function bu(r,o){var d=r.__data__;return Qe(o)?d[typeof o=="string"?"string":"hash"]:d.map}function Uu(r){for(var o=ci(r),d=o.length;d--;){var _=o[d],w=r[_];o[d]=[_,w,ha(w)]}return o}function es(r,o){var d=Go(r,o);return cf(d)?d:t}function ch(r){var o=jt.call(r,eo),d=r[eo];try{r[eo]=t;var _=!0}catch{}var w=za.call(r);return _&&(o?r[eo]=d:delete r[eo]),w}var fa=Ql?function(r){return r==null?[]:(r=Jt(r),xs(Ql(r),function(o){return Kl.call(r,o)}))}:sm,zr=Ql?function(r){for(var o=[];r;)Ss(o,fa(r)),r=lr(r);return o}:sm,ai=ri;(Wa&&ai(new Wa(new ArrayBuffer(1)))!=ke||no&&ai(new no)!=nt||Xa&&ai(Xa.resolve())!=Lt||Es&&ai(new Es)!=Gt||ja&&ai(new ja)!=ge)&&(ai=function(r){var o=ri(r),d=o==Bt?r.constructor:t,_=d?Os(d):"";if(_)switch(_){case nf:return ke;case Ts:return nt;case Hd:return Lt;case Zo:return Gt;case Pr:return ge}return o});function fh(r,o,d){for(var _=-1,w=d.length;++_<w;){var b=d[_],V=b.size;switch(b.type){case"drop":r+=V;break;case"dropRight":o-=V;break;case"take":o=Jn(o,r+V);break;case"takeRight":r=bn(r,o-V);break}}return{start:r,end:o}}function Pf(r){var o=r.match(Wr);return o?o[1].split(Io):[]}function bf(r,o,d){o=Zr(o,r);for(var _=-1,w=o.length,b=!1;++_<w;){var V=mr(o[_]);if(!(b=r!=null&&d(r,V)))break;r=r[V]}return b||++_!=w?b:(w=r==null?0:r.length,!!w&&Uh(w)&&Ji(V,w)&&(Ct(r)||_l(r)))}function dh(r){var o=r.length,d=new r.constructor(o);return o&&typeof r[0]=="string"&&jt.call(r,"index")&&(d.index=r.index,d.input=r.input),d}function da(r){return typeof r.constructor=="function"&&!cl(r)?Qo(lr(r)):{}}function li(r,o,d){var _=r.constructor;switch(o){case Ie:return la(r);case ze:case pt:return new _(+r);case ke:return Tu(r,d);case rt:case He:case ve:case at:case ot:case lt:case et:case Ke:case Et:return Sf(r,d);case nt:return new _;case vt:case dn:return new _(r);case Ft:return eh(r);case Gt:return new _;case B:return xf(r)}}function Dp(r,o){var d=o.length;if(!d)return r;var _=d-1;return o[_]=(d>1?"& ":"")+o[_],o=o.join(d>2?", ":" "),r.replace(Ys,`{
/* [wrapped with `+o+`] */
`)}function Ip(r){return Ct(r)||_l(r)||!!(Bd&&r&&r[Bd])}function Ji(r,o){var d=typeof r;return o=o??Z,!!o&&(d=="number"||d!="symbol"&&ft.test(r))&&r>-1&&r%1==0&&r<o}function Zt(r,o,d){if(!Cn(d))return!1;var _=typeof o;return(_=="number"?nr(d)&&Ji(o,d.length):_=="string"&&o in d)?is(d[o],r):!1}function Uf(r,o){if(Ct(r))return!1;var d=typeof r;return d=="number"||d=="symbol"||d=="boolean"||r==null||_r(r)?!0:Ui.test(r)||!nn.test(r)||o!=null&&r in Jt(o)}function Qe(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function Fs(r){var o=ul(r),d=C[o];if(typeof d!="function"||!(o in At.prototype))return!1;if(r===d)return!0;var _=ll(d);return!!_&&r===_[0]}function Df(r){return!!ql&&ql in r}var hh=Xo?_o:om;function cl(r){var o=r&&r.constructor,d=typeof o=="function"&&o.prototype||Lr;return r===d}function ha(r){return r===r&&!Cn(r)}function fl(r,o){return function(d){return d==null?!1:d[r]===o&&(o!==t||r in Jt(d))}}function If(r){var o=K(r,function(_){return d.size===v&&d.clear(),_}),d=o.cache;return o}function ph(r,o){var d=r[1],_=o[1],w=d|_,b=w<(T|y|X),V=_==X&&d==D||_==X&&d==fe&&r[7].length<=o[8]||_==(X|fe)&&o[7].length<=o[8]&&d==D;if(!(b||V))return r;_&T&&(r[2]=o[2],w|=d&T?0:H);var Y=o[3];if(Y){var ee=r[3];r[3]=ee?Mf(ee,Y,o[4]):Y,r[4]=ee?qi(r[3],S):o[4]}return Y=o[5],Y&&(ee=r[5],r[5]=ee?wu(ee,Y,o[6]):Y,r[6]=ee?qi(r[5],S):o[6]),Y=o[7],Y&&(r[7]=Y),_&X&&(r[8]=r[8]==null?o[8]:Jn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=w,r}function mh(r){var o=[];if(r!=null)for(var d in Jt(r))o.push(d);return o}function gh(r){return za.call(r)}function Du(r,o,d){return o=bn(o===t?r.length-1:o,0),function(){for(var _=arguments,w=-1,b=bn(_.length-o,0),V=ae(b);++w<b;)V[w]=_[o+w];w=-1;for(var Y=ae(o+1);++w<o;)Y[w]=_[w];return Y[o]=d(V),pi(r,this,Y)}}function Iu(r,o){return o.length<2?r:Oi(r,si(o,0,-1))}function qn(r,o){for(var d=r.length,_=Jn(o.length,d),w=_i(r);_--;){var b=o[_];r[_]=Ji(b,d)?w[b]:t}return r}function Bi(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var ts=Nf(Fn),pa=ef||function(r,o){return mn.setTimeout(r,o)},Nu=Nf(_u);function er(r,o,d){var _=o+"";return Nu(r,Dp(_,vh(Pf(_),d)))}function Nf(r){var o=0,d=0;return function(){var _=Lp(),w=se-(_-d);if(d=_,w>0){if(++o>=Re)return arguments[0]}else o=0;return r.apply(t,arguments)}}function zi(r,o){var d=-1,_=r.length,w=_-1;for(o=o===t?_:o;++d<o;){var b=el(d,w),V=r[b];r[b]=r[d],r[d]=V}return r.length=o,r}var _h=If(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(wn,function(d,_,w,b){o.push(w?b.replace(Uc,"$1"):_||d)}),o});function mr(r){if(typeof r=="string"||_r(r))return r;var o=r+"";return o=="0"&&1/r==-1/0?"-0":o}function Os(r){if(r!=null){try{return Ba.call(r)}catch{}try{return r+""}catch{}}return""}function vh(r,o){return Qn(Ae,function(d){var _="_."+d[0];o&d[1]&&!Hl(r,_)&&r.push(_)}),r.sort()}function Ff(r){if(r instanceof At)return r.clone();var o=new ei(r.__wrapped__,r.__chain__);return o.__actions__=_i(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function Np(r,o,d){(d?Zt(r,o,d):o===t)?o=1:o=bn(Ut(o),0);var _=r==null?0:r.length;if(!_||o<1)return[];for(var w=0,b=0,V=ae(to(_/o));w<_;)V[b++]=si(r,w,w+=o);return V}function Fu(r){for(var o=-1,d=r==null?0:r.length,_=0,w=[];++o<d;){var b=r[o];b&&(w[_++]=b)}return w}function Of(){var r=arguments.length;if(!r)return[];for(var o=ae(r-1),d=arguments[0],_=r;_--;)o[_-1]=arguments[_];return Ss(Ct(d)?_i(d):[d],Nn(o,1))}var tr=Rt(function(r,o){return Hn(r)?Nr(r,Nn(o,1,Hn,!0)):[]}),Vt=Rt(function(r,o){var d=kn(o);return Hn(d)&&(d=t),Hn(r)?Nr(r,Nn(o,1,Hn,!0),ut(d,2)):[]}),Vn=Rt(function(r,o){var d=kn(o);return Hn(d)&&(d=t),Hn(r)?Nr(r,Nn(o,1,Hn,!0),t,d):[]});function Un(r,o,d){var _=r==null?0:r.length;return _?(o=d||o===t?1:Ut(o),si(r,o<0?0:o,_)):[]}function Yn(r,o,d){var _=r==null?0:r.length;return _?(o=d||o===t?1:Ut(o),o=_-o,si(r,0,o<0?0:o)):[]}function ki(r,o){return r&&r.length?oa(r,ut(o,3),!0,!0):[]}function ma(r,o){return r&&r.length?oa(r,ut(o,3),!0):[]}function zn(r,o,d,_){var w=r==null?0:r.length;return w?(d&&typeof d!="number"&&Zt(r,o,d)&&(d=0,_=w),uu(r,o,d,_)):[]}function ga(r,o,d){var _=r==null?0:r.length;if(!_)return-1;var w=d==null?0:Ut(d);return w<0&&(w=bn(_+w,0)),Gl(r,ut(o,3),w)}function Bs(r,o,d){var _=r==null?0:r.length;if(!_)return-1;var w=_-1;return d!==t&&(w=Ut(d),w=d<0?bn(_+w,0):Jn(w,_-1)),Gl(r,ut(o,3),w,!0)}function dl(r){var o=r==null?0:r.length;return o?Nn(r,1):[]}function Bf(r){var o=r==null?0:r.length;return o?Nn(r,ue):[]}function hl(r,o){var d=r==null?0:r.length;return d?(o=o===t?1:Ut(o),Nn(r,o)):[]}function Li(r){for(var o=-1,d=r==null?0:r.length,_={};++o<d;){var w=r[o];_[w[0]]=w[1]}return _}function Ou(r){return r&&r.length?r[0]:t}function _a(r,o,d){var _=r==null?0:r.length;if(!_)return-1;var w=d==null?0:Ut(d);return w<0&&(w=bn(_+w,0)),Ho(r,o,w)}function ns(r){var o=r==null?0:r.length;return o?si(r,0,-1):[]}var Bu=Rt(function(r){var o=sn(r,Mu);return o.length&&o[0]===r[0]?dr(o):[]}),zf=Rt(function(r){var o=kn(r),d=sn(r,Mu);return o===kn(d)?o=t:d.pop(),d.length&&d[0]===r[0]?dr(d,ut(o,2)):[]}),zs=Rt(function(r){var o=kn(r),d=sn(r,Mu);return o=typeof o=="function"?o:t,o&&d.pop(),d.length&&d[0]===r[0]?dr(d,t,o):[]});function zu(r,o){return r==null?"":Jl.call(r,o)}function kn(r){var o=r==null?0:r.length;return o?r[o-1]:t}function ku(r,o,d){var _=r==null?0:r.length;if(!_)return-1;var w=_;return d!==t&&(w=Ut(d),w=w<0?bn(_+w,0):Jn(w,_-1)),o===o?wp(r,o,w):Gl(r,Td,w,!0)}function pl(r,o){return r&&r.length?Is(r,Ut(o)):t}var kf=Rt(ml);function ml(r,o){return r&&r.length&&o&&o.length?cn(r,o):r}function Hu(r,o,d){return r&&r.length&&o&&o.length?cn(r,o,ut(d,2)):r}function xi(r,o,d){return r&&r.length&&o&&o.length?cn(r,o,t,d):r}var ks=Br(function(r,o){var d=r==null?0:r.length,_=lu(r,o);return Ja(r,sn(o,function(w){return Ji(w,d)?+w:w}).sort(yf)),_});function gr(r,o){var d=[];if(!(r&&r.length))return d;var _=-1,w=[],b=r.length;for(o=ut(o,3);++_<b;){var V=r[_];o(V,_,r)&&(d.push(V),w.push(_))}return Ja(r,w),d}function ui(r){return r==null?r:eu.call(r)}function xh(r,o,d){var _=r==null?0:r.length;return _?(d&&typeof d!="number"&&Zt(r,o,d)?(o=0,d=_):(o=o==null?0:Ut(o),d=d===t?_:Ut(d)),si(r,o,d)):[]}function Hf(r,o){return On(r,o)}function Gf(r,o,d){return nl(r,o,ut(d,2))}function Fp(r,o){var d=r==null?0:r.length;if(d){var _=On(r,o);if(_<d&&is(r[_],o))return _}return-1}function Hs(r,o){return On(r,o,!0)}function Sh(r,o,d){return nl(r,o,ut(d,2),!0)}function Vf(r,o){var d=r==null?0:r.length;if(d){var _=On(r,o,!0)-1;if(is(r[_],o))return _}return-1}function ho(r){return r&&r.length?vu(r):[]}function Wf(r,o){return r&&r.length?vu(r,ut(o,2)):[]}function po(r){var o=r==null?0:r.length;return o?si(r,1,o):[]}function yh(r,o,d){return r&&r.length?(o=d||o===t?1:Ut(o),si(r,0,o<0?0:o)):[]}function Mh(r,o,d){var _=r==null?0:r.length;return _?(o=d||o===t?1:Ut(o),o=_-o,si(r,o<0?0:o,_)):[]}function Xf(r,o){return r&&r.length?oa(r,ut(o,3),!1,!0):[]}function Gu(r,o){return r&&r.length?oa(r,ut(o,3)):[]}var Op=Rt(function(r){return Bn(Nn(r,1,Hn,!0))}),Bp=Rt(function(r){var o=kn(r);return Hn(o)&&(o=t),Bn(Nn(r,1,Hn,!0),ut(o,2))}),Eh=Rt(function(r){var o=kn(r);return o=typeof o=="function"?o:t,Bn(Nn(r,1,Hn,!0),t,o)});function Th(r){return r&&r.length?Bn(r):[]}function mo(r,o){return r&&r.length?Bn(r,ut(o,2)):[]}function zp(r,o){return o=typeof o=="function"?o:t,r&&r.length?Bn(r,t,o):[]}function Gs(r){if(!(r&&r.length))return[];var o=0;return r=xs(r,function(d){if(Hn(d))return o=bn(d.length,o),!0}),$c(o,function(d){return sn(r,qc(d))})}function jf(r,o){if(!(r&&r.length))return[];var d=Gs(r);return o==null?d:sn(d,function(_){return pi(o,t,_)})}var Mn=Rt(function(r,o){return Hn(r)?Nr(r,o):[]}),kp=Rt(function(r){return yu(xs(r,Hn))}),wh=Rt(function(r){var o=kn(r);return Hn(o)&&(o=t),yu(xs(r,Hn),ut(o,2))}),Hp=Rt(function(r){var o=kn(r);return o=typeof o=="function"?o:t,yu(xs(r,Hn),t,o)}),Gp=Rt(Gs);function Ah(r,o){return _f(r||[],o||[],oo)}function Rh(r,o){return _f(r||[],o||[],vn)}var Vp=Rt(function(r){var o=r.length,d=o>1?r[o-1]:t;return d=typeof d=="function"?(r.pop(),d):t,jf(r,d)});function Hi(r){var o=C(r);return o.__chain__=!0,o}function qf(r,o){return o(r),r}function Vu(r,o){return o(r)}var Vs=Br(function(r){var o=r.length,d=o?r[0]:0,_=this.__wrapped__,w=function(b){return lu(b,r)};return o>1||this.__actions__.length||!(_ instanceof At)||!Ji(d)?this.thru(w):(_=_.slice(d,+d+(o?1:0)),_.__actions__.push({func:Vu,args:[w],thisArg:t}),new ei(_,this.__chain__).thru(function(b){return o&&!b.length&&b.push(t),b}))});function Wu(){return Hi(this)}function go(){return new ei(this.value(),this.__chain__)}function Xu(){this.__values__===t&&(this.__values__=hg(this.value()));var r=this.__index__>=this.__values__.length,o=r?t:this.__values__[this.__index__++];return{done:r,value:o}}function Yf(){return this}function $f(r){for(var o,d=this;d instanceof br;){var _=Ff(d);_.__index__=0,_.__values__=t,o?w.__wrapped__=_:o=_;var w=_;d=d.__wrapped__}return w.__wrapped__=r,o}function Wp(){var r=this.__wrapped__;if(r instanceof At){var o=r;return this.__actions__.length&&(o=new At(this)),o=o.reverse(),o.__actions__.push({func:Vu,args:[ui],thisArg:t}),new ei(o,this.__chain__)}return this.thru(ui)}function Kf(){return gf(this.__wrapped__,this.__actions__)}var Xp=il(function(r,o,d){jt.call(r,d)?++r[d]:Ir(r,d,1)});function Ch(r,o,d){var _=Ct(r)?Gc:cr;return d&&Zt(r,o,d)&&(o=t),_(r,ut(o,3))}function Lh(r,o){var d=Ct(r)?xs:lo;return d(r,ut(o,3))}var ju=sh(ga),qu=sh(Bs);function Ph(r,o){return Nn(Zu(r,o),1)}function Zf(r,o){return Nn(Zu(r,o),ue)}function jp(r,o,d){return d=d===t?1:Ut(d),Nn(Zu(r,o),d)}function Qf(r,o){var d=Ct(r)?Qn:Fr;return d(r,ut(o,3))}function Yu(r,o){var d=Ct(r)?kl:Yd;return d(r,ut(o,3))}var $u=il(function(r,o,d){jt.call(r,d)?r[d].push(o):Ir(r,d,[o])});function Jf(r,o,d,_){r=nr(r)?r:tc(r),d=d&&!_?Ut(d):0;var w=r.length;return d<0&&(d=bn(w+d,0)),Dh(r)?d<=w&&r.indexOf(o,d)>-1:!!w&&Ho(r,o,d)>-1}var Ku=Rt(function(r,o,d){var _=-1,w=typeof o=="function",b=nr(r)?ae(r.length):[];return Fr(r,function(V){b[++_]=w?pi(o,V,d):bs(V,o,d)}),b}),bh=il(function(r,o,d){Ir(r,d,o)});function Zu(r,o){var d=Ct(r)?sn:df;return d(r,ut(o,3))}function Qu(r,o,d,_){return r==null?[]:(Ct(o)||(o=o==null?[]:[o]),d=_?t:d,Ct(d)||(d=d==null?[]:[d]),gu(r,o,d))}var qp=il(function(r,o,d){r[d?0:1].push(o)},function(){return[[],[]]});function gl(r,o,d){var _=Ct(r)?Wc:Ad,w=arguments.length<3;return _(r,ut(o,4),d,w,Fr)}function Yp(r,o,d){var _=Ct(r)?_p:Ad,w=arguments.length<3;return _(r,ut(o,4),d,w,Yd)}function Ju(r,o){var d=Ct(r)?xs:lo;return d(r,ie(ut(o,3)))}function n(r){var o=Ct(r)?Dr:uo;return o(r)}function i(r,o,d){(d?Zt(r,o,d):o===t)?o=1:o=Ut(o);var _=Ct(r)?so:_n;return _(r,o)}function l(r){var o=Ct(r)?jd:tl;return o(r)}function c(r){if(r==null)return 0;if(nr(r))return Dh(r)?Js(r):r.length;var o=ai(r);return o==nt||o==Gt?r.size:mu(r).length}function m(r,o,d){var _=Ct(r)?Xc:Pp;return d&&Zt(r,o,d)&&(o=t),_(r,ut(o,3))}var g=Rt(function(r,o){if(r==null)return[];var d=o.length;return d>1&&Zt(r,o[0],o[1])?o=[]:d>2&&Zt(o[0],o[1],o[2])&&(o=[o[0]]),gu(r,Nn(o,1),[])}),R=an||function(){return mn.Date.now()};function z(r,o){if(typeof o!="function")throw new Yi(p);return r=Ut(r),function(){if(--r<1)return o.apply(this,arguments)}}function j(r,o,d){return o=d?t:o,o=r&&o==null?r.length:o,Or(r,X,t,t,t,t,o)}function le(r,o){var d;if(typeof o!="function")throw new Yi(p);return r=Ut(r),function(){return--r>0&&(d=o.apply(this,arguments)),r<=1&&(o=t),d}}var Pe=Rt(function(r,o,d){var _=T;if(d.length){var w=qi(d,Ns(Pe));_|=W}return Or(r,_,o,d,w)}),De=Rt(function(r,o,d){var _=T|y;if(d.length){var w=qi(d,Ns(De));_|=W}return Or(o,_,r,d,w)});function Le(r,o,d){o=d?t:o;var _=Or(r,D,t,t,t,t,t,o);return _.placeholder=Le.placeholder,_}function qe(r,o,d){o=d?t:o;var _=Or(r,O,t,t,t,t,t,o);return _.placeholder=qe.placeholder,_}function Je(r,o,d){var _,w,b,V,Y,ee,Te=0,we=!1,be=!1,Xe=!0;if(typeof r!="function")throw new Yi(p);o=kr(o)||0,Cn(d)&&(we=!!d.leading,be="maxWait"in d,b=be?bn(kr(d.maxWait)||0,o):b,Xe="trailing"in d?!!d.trailing:Xe);function st(Gn){var rs=_,xo=w;return _=w=t,Te=Gn,V=r.apply(xo,rs),V}function gt(Gn){return Te=Gn,Y=pa(kt,o),we?st(Gn):V}function Dt(Gn){var rs=Gn-ee,xo=Gn-Te,Ag=o-rs;return be?Jn(Ag,b-xo):Ag}function _t(Gn){var rs=Gn-ee,xo=Gn-Te;return ee===t||rs>=o||rs<0||be&&xo>=b}function kt(){var Gn=R();if(_t(Gn))return Wt(Gn);Y=pa(kt,Dt(Gn))}function Wt(Gn){return Y=t,Xe&&_?st(Gn):(_=w=t,V)}function vr(){Y!==t&&aa(Y),Te=0,_=ee=w=Y=t}function Gi(){return Y===t?V:Wt(R())}function xr(){var Gn=R(),rs=_t(Gn);if(_=arguments,w=this,ee=Gn,rs){if(Y===t)return gt(ee);if(be)return aa(Y),Y=pa(kt,o),st(ee)}return Y===t&&(Y=pa(kt,o)),V}return xr.cancel=vr,xr.flush=Gi,xr}var tt=Rt(function(r,o){return of(r,1,o)}),Rn=Rt(function(r,o,d){return of(r,kr(o)||0,d)});function te(r){return Or(r,I)}function K(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new Yi(p);var d=function(){var _=arguments,w=o?o.apply(this,_):_[0],b=d.cache;if(b.has(w))return b.get(w);var V=r.apply(this,_);return d.cache=b.set(w,V)||b,V};return d.cache=new(K.Cache||$i),d}K.Cache=$i;function ie(r){if(typeof r!="function")throw new Yi(p);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function Fe(r){return le(2,r)}var it=Jd(function(r,o){o=o.length==1&&Ct(o[0])?sn(o[0],Di(ut())):sn(Nn(o,1),Di(ut()));var d=o.length;return Rt(function(_){for(var w=-1,b=Jn(_.length,d);++w<b;)_[w]=o[w].call(this,_[w]);return pi(r,this,_)})}),ct=Rt(function(r,o){var d=qi(o,Ns(ct));return Or(r,W,t,o,d)}),dt=Rt(function(r,o){var d=qi(o,Ns(dt));return Or(r,q,t,o,d)}),xt=Br(function(r,o){return Or(r,fe,t,t,t,o)});function Wn(r,o){if(typeof r!="function")throw new Yi(p);return o=o===t?o:Ut(o),Rt(r,o)}function qt(r,o){if(typeof r!="function")throw new Yi(p);return o=o==null?0:bn(Ut(o),0),Rt(function(d){var _=d[o],w=Qr(d,0,o);return _&&Ss(w,_),pi(r,this,w)})}function Ws(r,o,d){var _=!0,w=!0;if(typeof r!="function")throw new Yi(p);return Cn(d)&&(_="leading"in d?!!d.leading:_,w="trailing"in d?!!d.trailing:w),Je(r,o,{leading:_,maxWait:o,trailing:w})}function $p(r){return j(r,1)}function Ov(r,o){return ct(Eu(o),r)}function Bv(){if(!arguments.length)return[];var r=arguments[0];return Ct(r)?r:[r]}function zv(r){return Ci(r,A)}function kv(r,o){return o=typeof o=="function"?o:t,Ci(r,A,o)}function Hv(r){return Ci(r,M|A)}function Gv(r,o){return o=typeof o=="function"?o:t,Ci(r,M|A,o)}function Vv(r,o){return o==null||Ya(r,o,ci(o))}function is(r,o){return r===o||r!==r&&o!==o}var Wv=ol(fr),Xv=ol(function(r,o){return r>=o}),_l=lf(function(){return arguments}())?lf:function(r){return Dn(r)&&jt.call(r,"callee")&&!Kl.call(r,"callee")},Ct=ae.isArray,jv=kc?Di(kc):du;function nr(r){return r!=null&&Uh(r.length)&&!_o(r)}function Hn(r){return Dn(r)&&nr(r)}function qv(r){return r===!0||r===!1||Dn(r)&&ri(r)==ze}var va=tf||om,Yv=Ti?Di(Ti):Kd;function $v(r){return Dn(r)&&r.nodeType===1&&!ed(r)}function Kv(r){if(r==null)return!0;if(nr(r)&&(Ct(r)||typeof r=="string"||typeof r.splice=="function"||va(r)||ec(r)||_l(r)))return!r.length;var o=ai(r);if(o==nt||o==Gt)return!r.size;if(cl(r))return!mu(r).length;for(var d in r)if(jt.call(r,d))return!1;return!0}function Zv(r,o){return na(r,o)}function Qv(r,o,d){d=typeof d=="function"?d:t;var _=d?d(r,o):t;return _===t?na(r,o,t,d):!!_}function Kp(r){if(!Dn(r))return!1;var o=ri(r);return o==Mt||o==Zn||typeof r.message=="string"&&typeof r.name=="string"&&!ed(r)}function Jv(r){return typeof r=="number"&&qo(r)}function _o(r){if(!Cn(r))return!1;var o=ri(r);return o==re||o==xn||o==Ye||o==Tt}function ug(r){return typeof r=="number"&&r==Ut(r)}function Uh(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Z}function Cn(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function Dn(r){return r!=null&&typeof r=="object"}var cg=Qs?Di(Qs):hu;function e0(r,o){return r===o||pu(r,o,Uu(o))}function t0(r,o,d){return d=typeof d=="function"?d:t,pu(r,o,Uu(o),d)}function n0(r){return fg(r)&&r!=+r}function i0(r){if(hh(r))throw new yt(f);return cf(r)}function r0(r){return r===null}function s0(r){return r==null}function fg(r){return typeof r=="number"||Dn(r)&&ri(r)==vt}function ed(r){if(!Dn(r)||ri(r)!=Bt)return!1;var o=lr(r);if(o===null)return!0;var d=jt.call(o,"constructor")&&o.constructor;return typeof d=="function"&&d instanceof d&&Ba.call(d)==Yl}var Zp=zl?Di(zl):Zd;function o0(r){return ug(r)&&r>=-9007199254740991&&r<=Z}var dg=ko?Di(ko):ff;function Dh(r){return typeof r=="string"||!Ct(r)&&Dn(r)&&ri(r)==dn}function _r(r){return typeof r=="symbol"||Dn(r)&&ri(r)==B}var ec=yd?Di(yd):Ka;function a0(r){return r===t}function l0(r){return Dn(r)&&ai(r)==ge}function u0(r){return Dn(r)&&ri(r)==Oe}var c0=ol(Us),f0=ol(function(r,o){return r<=o});function hg(r){if(!r)return[];if(nr(r))return Dh(r)?Ii(r):_i(r);if(Yr&&r[Yr])return Ep(r[Yr]());var o=ai(r),d=o==nt?Wl:o==Gt?ys:tc;return d(r)}function vo(r){if(!r)return r===0?r:0;if(r=kr(r),r===ue||r===-1/0){var o=r<0?-1:1;return o*pe}return r===r?r:0}function Ut(r){var o=vo(r),d=o%1;return o===o?d?o-d:o:0}function pg(r){return r?Kr(Ut(r),0,k):0}function kr(r){if(typeof r=="number")return r;if(_r(r))return U;if(Cn(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Cn(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=Rd(r);var d=ne.test(r);return d||Ze.test(r)?Ol(r.slice(2),d?2:8):_e.test(r)?U:+r}function mg(r){return pr(r,ir(r))}function d0(r){return r?Kr(Ut(r),-9007199254740991,Z):r===0?r:0}function en(r){return r==null?"":yn(r)}var h0=ua(function(r,o){if(cl(o)||nr(o)){pr(o,ci(o),r);return}for(var d in o)jt.call(o,d)&&oo(r,d,o[d])}),gg=ua(function(r,o){pr(o,ir(o),r)}),Ih=ua(function(r,o,d,_){pr(o,ir(o),r,_)}),p0=ua(function(r,o,d,_){pr(o,ci(o),r,_)}),m0=Br(lu);function g0(r,o){var d=Qo(r);return o==null?d:un(d,o)}var _0=Rt(function(r,o){r=Jt(r);var d=-1,_=o.length,w=_>2?o[2]:t;for(w&&Zt(o[0],o[1],w)&&(_=1);++d<_;)for(var b=o[d],V=ir(b),Y=-1,ee=V.length;++Y<ee;){var Te=V[Y],we=r[Te];(we===t||is(we,Lr[Te])&&!jt.call(r,Te))&&(r[Te]=b[Te])}return r}),v0=Rt(function(r){return r.push(t,Cf),pi(_g,t,r)});function x0(r,o){return Ed(r,ut(o,3),Qi)}function S0(r,o){return Ed(r,ut(o,3),Cs)}function y0(r,o){return r==null?r:$a(r,ut(o,3),ir)}function M0(r,o){return r==null?r:cu(r,ut(o,3),ir)}function E0(r,o){return r&&Qi(r,ut(o,3))}function T0(r,o){return r&&Cs(r,ut(o,3))}function w0(r){return r==null?[]:gi(r,ci(r))}function A0(r){return r==null?[]:gi(r,ir(r))}function Qp(r,o,d){var _=r==null?t:Oi(r,o);return _===t?d:_}function R0(r,o){return r!=null&&bf(r,o,Ls)}function Jp(r,o){return r!=null&&bf(r,o,af)}var C0=Au(function(r,o,d){o!=null&&typeof o.toString!="function"&&(o=za.call(o)),r[o]=d},tm(rr)),L0=Au(function(r,o,d){o!=null&&typeof o.toString!="function"&&(o=za.call(o)),jt.call(r,o)?r[o].push(d):r[o]=[d]},ut),P0=Rt(bs);function ci(r){return nr(r)?Ur(r):mu(r)}function ir(r){return nr(r)?Ur(r,!0):Qd(r)}function b0(r,o){var d={};return o=ut(o,3),Qi(r,function(_,w,b){Ir(d,o(_,w,b),_)}),d}function U0(r,o){var d={};return o=ut(o,3),Qi(r,function(_,w,b){Ir(d,w,o(_,w,b))}),d}var D0=ua(function(r,o,d){Ds(r,o,d)}),_g=ua(function(r,o,d,_){Ds(r,o,d,_)}),I0=Br(function(r,o){var d={};if(r==null)return d;var _=!1;o=sn(o,function(b){return b=Zr(b,r),_||(_=b.length>1),b}),pr(r,al(r),d),_&&(d=Ci(d,M|E|A,lh));for(var w=o.length;w--;)co(d,o[w]);return d});function N0(r,o){return vg(r,ie(ut(o)))}var F0=Br(function(r,o){return r==null?{}:ra(r,o)});function vg(r,o){if(r==null)return{};var d=sn(al(r),function(_){return[_]});return o=ut(o),hf(r,d,function(_,w){return o(_,w[0])})}function O0(r,o,d){o=Zr(o,r);var _=-1,w=o.length;for(w||(w=1,r=t);++_<w;){var b=r==null?t:r[mr(o[_])];b===t&&(_=w,b=d),r=_o(b)?b.call(r):b}return r}function B0(r,o,d){return r==null?r:vn(r,o,d)}function z0(r,o,d,_){return _=typeof _=="function"?_:t,r==null?r:vn(r,o,d,_)}var xg=Af(ci),Sg=Af(ir);function k0(r,o,d){var _=Ct(r),w=_||va(r)||ec(r);if(o=ut(o,4),d==null){var b=r&&r.constructor;w?d=_?new b:[]:Cn(r)?d=_o(b)?Qo(lr(r)):{}:d={}}return(w?Qn:Qi)(r,function(V,Y,ee){return o(d,V,Y,ee)}),d}function H0(r,o){return r==null?!0:co(r,o)}function G0(r,o,d){return r==null?r:Su(r,o,Eu(d))}function V0(r,o,d,_){return _=typeof _=="function"?_:t,r==null?r:Su(r,o,Eu(d),_)}function tc(r){return r==null?[]:Fa(r,ci(r))}function W0(r){return r==null?[]:Fa(r,ir(r))}function X0(r,o,d){return d===t&&(d=o,o=t),d!==t&&(d=kr(d),d=d===d?d:0),o!==t&&(o=kr(o),o=o===o?o:0),Kr(kr(r),o,d)}function j0(r,o,d){return o=vo(o),d===t?(d=o,o=0):d=vo(d),r=kr(r),$d(r,o,d)}function q0(r,o,d){if(d&&typeof d!="boolean"&&Zt(r,o,d)&&(o=d=t),d===t&&(typeof o=="boolean"?(d=o,o=t):typeof r=="boolean"&&(d=r,r=t)),r===t&&o===t?(r=0,o=1):(r=vo(r),o===t?(o=r,r=0):o=vo(o)),r>o){var _=r;r=o,o=_}if(d||r%1||o%1){var w=Va();return Jn(r+w*(o-r+Bc("1e-"+((w+"").length-1))),o)}return el(r,o)}var Y0=Jr(function(r,o,d){return o=o.toLowerCase(),r+(d?yg(o):o)});function yg(r){return em(en(r).toLowerCase())}function Mg(r){return r=en(r),r&&r.replace(mt,Pd).replace(_d,"")}function $0(r,o,d){r=en(r),o=yn(o);var _=r.length;d=d===t?_:Kr(Ut(d),0,_);var w=d;return d-=o.length,d>=0&&r.slice(d,w)==o}function K0(r){return r=en(r),r&&zt.test(r)?r.replace(Ne,bd):r}function Z0(r){return r=en(r),r&&hs.test(r)?r.replace(ds,"\\$&"):r}var Q0=Jr(function(r,o,d){return r+(d?"-":"")+o.toLowerCase()}),J0=Jr(function(r,o,d){return r+(d?" ":"")+o.toLowerCase()}),ex=Tf("toLowerCase");function tx(r,o,d){r=en(r),o=Ut(o);var _=o?Js(r):0;if(!o||_>=o)return r;var w=(o-_)/2;return sl(Ms(w),d)+r+sl(to(w),d)}function nx(r,o,d){r=en(r),o=Ut(o);var _=o?Js(r):0;return o&&_<o?r+sl(o-_,d):r}function ix(r,o,d){r=en(r),o=Ut(o);var _=o?Js(r):0;return o&&_<o?sl(o-_,d)+r:r}function rx(r,o,d){return d||o==null?o=0:o&&(o=+o),kd(en(r).replace(Ca,""),o||0)}function sx(r,o,d){return(d?Zt(r,o,d):o===t)?o=1:o=Ut(o),sa(en(r),o)}function ox(){var r=arguments,o=en(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var ax=Jr(function(r,o,d){return r+(d?"_":"")+o.toLowerCase()});function lx(r,o,d){return d&&typeof d!="number"&&Zt(r,o,d)&&(o=d=t),d=d===t?k:d>>>0,d?(r=en(r),r&&(typeof o=="string"||o!=null&&!Zp(o))&&(o=yn(o),!o&&Vo(r))?Qr(Ii(r),0,d):r.split(o,d)):[]}var ux=Jr(function(r,o,d){return r+(d?" ":"")+em(o)});function cx(r,o,d){return r=en(r),d=d==null?0:Kr(Ut(d),0,r.length),o=yn(o),r.slice(d,d+o.length)==o}function fx(r,o,d){var _=C.templateSettings;d&&Zt(r,o,d)&&(o=t),r=en(r),o=Ih({},o,_,Rf);var w=Ih({},o.imports,_.imports,Rf),b=ci(w),V=Fa(w,b),Y,ee,Te=0,we=o.interpolate||ht,be="__p += '",Xe=Oa((o.escape||ht).source+"|"+we.source+"|"+(we===Mi?F:ht).source+"|"+(o.evaluate||ht).source+"|$","g"),st="//# sourceURL="+(jt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++pp+"]")+`
`;r.replace(Xe,function(_t,kt,Wt,vr,Gi,xr){return Wt||(Wt=vr),be+=r.slice(Te,xr).replace(Pt,Ud),kt&&(Y=!0,be+=`' +
__e(`+kt+`) +
'`),Gi&&(ee=!0,be+=`';
`+Gi+`;
__p += '`),Wt&&(be+=`' +
((__t = (`+Wt+`)) == null ? '' : __t) +
'`),Te=xr+_t.length,_t}),be+=`';
`;var gt=jt.call(o,"variable")&&o.variable;if(!gt)be=`with (obj) {
`+be+`
}
`;else if(bc.test(gt))throw new yt(h);be=(ee?be.replace($t,""):be).replace($,"$1").replace(Ge,"$1;"),be="function("+(gt||"obj")+`) {
`+(gt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(Y?", __e = _.escape":"")+(ee?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+be+`return __p
}`;var Dt=Tg(function(){return Xt(b,st+"return "+be).apply(t,V)});if(Dt.source=be,Kp(Dt))throw Dt;return Dt}function dx(r){return en(r).toLowerCase()}function hx(r){return en(r).toUpperCase()}function px(r,o,d){if(r=en(r),r&&(d||o===t))return Rd(r);if(!r||!(o=yn(o)))return r;var _=Ii(r),w=Ii(o),b=Cd(_,w),V=Kc(_,w)+1;return Qr(_,b,V).join("")}function mx(r,o,d){if(r=en(r),r&&(d||o===t))return r.slice(0,jl(r)+1);if(!r||!(o=yn(o)))return r;var _=Ii(r),w=Kc(_,Ii(o))+1;return Qr(_,0,w).join("")}function gx(r,o,d){if(r=en(r),r&&(d||o===t))return r.replace(Ca,"");if(!r||!(o=yn(o)))return r;var _=Ii(r),w=Cd(_,Ii(o));return Qr(_,w).join("")}function _x(r,o){var d=G,_=Me;if(Cn(o)){var w="separator"in o?o.separator:w;d="length"in o?Ut(o.length):d,_="omission"in o?yn(o.omission):_}r=en(r);var b=r.length;if(Vo(r)){var V=Ii(r);b=V.length}if(d>=b)return r;var Y=d-Js(_);if(Y<1)return _;var ee=V?Qr(V,0,Y).join(""):r.slice(0,Y);if(w===t)return ee+_;if(V&&(Y+=ee.length-Y),Zp(w)){if(r.slice(Y).search(w)){var Te,we=ee;for(w.global||(w=Oa(w.source,en(oe.exec(w))+"g")),w.lastIndex=0;Te=w.exec(we);)var be=Te.index;ee=ee.slice(0,be===t?Y:be)}}else if(r.indexOf(yn(w),Y)!=Y){var Xe=ee.lastIndexOf(w);Xe>-1&&(ee=ee.slice(0,Xe))}return ee+_}function vx(r){return r=en(r),r&&We.test(r)?r.replace(ce,Dd):r}var xx=Jr(function(r,o,d){return r+(d?" ":"")+o.toUpperCase()}),em=Tf("toUpperCase");function Eg(r,o,d){return r=en(r),o=d?t:o,o===t?Mp(r)?Ap(r):xp(r):r.match(o)||[]}var Tg=Rt(function(r,o){try{return pi(r,t,o)}catch(d){return Kp(d)?d:new yt(d)}}),Sx=Br(function(r,o){return Qn(o,function(d){d=mr(d),Ir(r,d,Pe(r[d],r))}),r});function yx(r){var o=r==null?0:r.length,d=ut();return r=o?sn(r,function(_){if(typeof _[1]!="function")throw new Yi(p);return[d(_[0]),_[1]]}):[],Rt(function(_){for(var w=-1;++w<o;){var b=r[w];if(pi(b[0],this,_))return pi(b[1],this,_)}})}function Mx(r){return qd(Ci(r,M))}function tm(r){return function(){return r}}function Ex(r,o){return r==null||r!==r?o:r}var Tx=fo(),wx=fo(!0);function rr(r){return r}function nm(r){return Za(typeof r=="function"?r:Ci(r,M))}function Ax(r){return ia(Ci(r,M))}function Rx(r,o){return hr(r,Ci(o,M))}var Cx=Rt(function(r,o){return function(d){return bs(d,r,o)}}),Lx=Rt(function(r,o){return function(d){return bs(r,d,o)}});function im(r,o,d){var _=ci(o),w=gi(o,_);d==null&&!(Cn(o)&&(w.length||!_.length))&&(d=o,o=r,r=this,w=gi(o,ci(o)));var b=!(Cn(d)&&"chain"in d)||!!d.chain,V=_o(r);return Qn(w,function(Y){var ee=o[Y];r[Y]=ee,V&&(r.prototype[Y]=function(){var Te=this.__chain__;if(b||Te){var we=r(this.__wrapped__),be=we.__actions__=_i(this.__actions__);return be.push({func:ee,args:arguments,thisArg:r}),we.__chain__=Te,we}return ee.apply(r,Ss([this.value()],arguments))})}),r}function Px(){return mn._===this&&(mn._=Fd),this}function rm(){}function bx(r){return r=Ut(r),Rt(function(o){return Is(o,r)})}var Ux=Cu(sn),Dx=Cu(Gc),Ix=Cu(Xc);function wg(r){return Uf(r)?qc(mr(r)):pf(r)}function Nx(r){return function(o){return r==null?t:Oi(r,o)}}var Fx=wf(),Ox=wf(!0);function sm(){return[]}function om(){return!1}function Bx(){return{}}function zx(){return""}function kx(){return!0}function Hx(r,o){if(r=Ut(r),r<1||r>Z)return[];var d=k,_=Jn(r,k);o=ut(o),r-=k;for(var w=$c(_,o);++d<r;)o(d);return w}function Gx(r){return Ct(r)?sn(r,mr):_r(r)?[r]:_i(_h(en(r)))}function Vx(r){var o=++jo;return en(r)+o}var Wx=Ru(function(r,o){return r+o},0),Xx=oi("ceil"),jx=Ru(function(r,o){return r/o},1),qx=oi("floor");function Yx(r){return r&&r.length?ao(r,rr,fr):t}function $x(r,o){return r&&r.length?ao(r,ut(o,2),fr):t}function Kx(r){return wd(r,rr)}function Zx(r,o){return wd(r,ut(o,2))}function Qx(r){return r&&r.length?ao(r,rr,Us):t}function Jx(r,o){return r&&r.length?ao(r,ut(o,2),Us):t}var eS=Ru(function(r,o){return r*o},1),tS=oi("round"),nS=Ru(function(r,o){return r-o},0);function iS(r){return r&&r.length?Yc(r,rr):0}function rS(r,o){return r&&r.length?Yc(r,ut(o,2)):0}return C.after=z,C.ary=j,C.assign=h0,C.assignIn=gg,C.assignInWith=Ih,C.assignWith=p0,C.at=m0,C.before=le,C.bind=Pe,C.bindAll=Sx,C.bindKey=De,C.castArray=Bv,C.chain=Hi,C.chunk=Np,C.compact=Fu,C.concat=Of,C.cond=yx,C.conforms=Mx,C.constant=tm,C.countBy=Xp,C.create=g0,C.curry=Le,C.curryRight=qe,C.debounce=Je,C.defaults=_0,C.defaultsDeep=v0,C.defer=tt,C.delay=Rn,C.difference=tr,C.differenceBy=Vt,C.differenceWith=Vn,C.drop=Un,C.dropRight=Yn,C.dropRightWhile=ki,C.dropWhile=ma,C.fill=zn,C.filter=Lh,C.flatMap=Ph,C.flatMapDeep=Zf,C.flatMapDepth=jp,C.flatten=dl,C.flattenDeep=Bf,C.flattenDepth=hl,C.flip=te,C.flow=Tx,C.flowRight=wx,C.fromPairs=Li,C.functions=w0,C.functionsIn=A0,C.groupBy=$u,C.initial=ns,C.intersection=Bu,C.intersectionBy=zf,C.intersectionWith=zs,C.invert=C0,C.invertBy=L0,C.invokeMap=Ku,C.iteratee=nm,C.keyBy=bh,C.keys=ci,C.keysIn=ir,C.map=Zu,C.mapKeys=b0,C.mapValues=U0,C.matches=Ax,C.matchesProperty=Rx,C.memoize=K,C.merge=D0,C.mergeWith=_g,C.method=Cx,C.methodOf=Lx,C.mixin=im,C.negate=ie,C.nthArg=bx,C.omit=I0,C.omitBy=N0,C.once=Fe,C.orderBy=Qu,C.over=Ux,C.overArgs=it,C.overEvery=Dx,C.overSome=Ix,C.partial=ct,C.partialRight=dt,C.partition=qp,C.pick=F0,C.pickBy=vg,C.property=wg,C.propertyOf=Nx,C.pull=kf,C.pullAll=ml,C.pullAllBy=Hu,C.pullAllWith=xi,C.pullAt=ks,C.range=Fx,C.rangeRight=Ox,C.rearg=xt,C.reject=Ju,C.remove=gr,C.rest=Wn,C.reverse=ui,C.sampleSize=i,C.set=B0,C.setWith=z0,C.shuffle=l,C.slice=xh,C.sortBy=g,C.sortedUniq=ho,C.sortedUniqBy=Wf,C.split=lx,C.spread=qt,C.tail=po,C.take=yh,C.takeRight=Mh,C.takeRightWhile=Xf,C.takeWhile=Gu,C.tap=qf,C.throttle=Ws,C.thru=Vu,C.toArray=hg,C.toPairs=xg,C.toPairsIn=Sg,C.toPath=Gx,C.toPlainObject=mg,C.transform=k0,C.unary=$p,C.union=Op,C.unionBy=Bp,C.unionWith=Eh,C.uniq=Th,C.uniqBy=mo,C.uniqWith=zp,C.unset=H0,C.unzip=Gs,C.unzipWith=jf,C.update=G0,C.updateWith=V0,C.values=tc,C.valuesIn=W0,C.without=Mn,C.words=Eg,C.wrap=Ov,C.xor=kp,C.xorBy=wh,C.xorWith=Hp,C.zip=Gp,C.zipObject=Ah,C.zipObjectDeep=Rh,C.zipWith=Vp,C.entries=xg,C.entriesIn=Sg,C.extend=gg,C.extendWith=Ih,im(C,C),C.add=Wx,C.attempt=Tg,C.camelCase=Y0,C.capitalize=yg,C.ceil=Xx,C.clamp=X0,C.clone=zv,C.cloneDeep=Hv,C.cloneDeepWith=Gv,C.cloneWith=kv,C.conformsTo=Vv,C.deburr=Mg,C.defaultTo=Ex,C.divide=jx,C.endsWith=$0,C.eq=is,C.escape=K0,C.escapeRegExp=Z0,C.every=Ch,C.find=ju,C.findIndex=ga,C.findKey=x0,C.findLast=qu,C.findLastIndex=Bs,C.findLastKey=S0,C.floor=qx,C.forEach=Qf,C.forEachRight=Yu,C.forIn=y0,C.forInRight=M0,C.forOwn=E0,C.forOwnRight=T0,C.get=Qp,C.gt=Wv,C.gte=Xv,C.has=R0,C.hasIn=Jp,C.head=Ou,C.identity=rr,C.includes=Jf,C.indexOf=_a,C.inRange=j0,C.invoke=P0,C.isArguments=_l,C.isArray=Ct,C.isArrayBuffer=jv,C.isArrayLike=nr,C.isArrayLikeObject=Hn,C.isBoolean=qv,C.isBuffer=va,C.isDate=Yv,C.isElement=$v,C.isEmpty=Kv,C.isEqual=Zv,C.isEqualWith=Qv,C.isError=Kp,C.isFinite=Jv,C.isFunction=_o,C.isInteger=ug,C.isLength=Uh,C.isMap=cg,C.isMatch=e0,C.isMatchWith=t0,C.isNaN=n0,C.isNative=i0,C.isNil=s0,C.isNull=r0,C.isNumber=fg,C.isObject=Cn,C.isObjectLike=Dn,C.isPlainObject=ed,C.isRegExp=Zp,C.isSafeInteger=o0,C.isSet=dg,C.isString=Dh,C.isSymbol=_r,C.isTypedArray=ec,C.isUndefined=a0,C.isWeakMap=l0,C.isWeakSet=u0,C.join=zu,C.kebabCase=Q0,C.last=kn,C.lastIndexOf=ku,C.lowerCase=J0,C.lowerFirst=ex,C.lt=c0,C.lte=f0,C.max=Yx,C.maxBy=$x,C.mean=Kx,C.meanBy=Zx,C.min=Qx,C.minBy=Jx,C.stubArray=sm,C.stubFalse=om,C.stubObject=Bx,C.stubString=zx,C.stubTrue=kx,C.multiply=eS,C.nth=pl,C.noConflict=Px,C.noop=rm,C.now=R,C.pad=tx,C.padEnd=nx,C.padStart=ix,C.parseInt=rx,C.random=q0,C.reduce=gl,C.reduceRight=Yp,C.repeat=sx,C.replace=ox,C.result=O0,C.round=tS,C.runInContext=Q,C.sample=n,C.size=c,C.snakeCase=ax,C.some=m,C.sortedIndex=Hf,C.sortedIndexBy=Gf,C.sortedIndexOf=Fp,C.sortedLastIndex=Hs,C.sortedLastIndexBy=Sh,C.sortedLastIndexOf=Vf,C.startCase=ux,C.startsWith=cx,C.subtract=nS,C.sum=iS,C.sumBy=rS,C.template=fx,C.times=Hx,C.toFinite=vo,C.toInteger=Ut,C.toLength=pg,C.toLower=dx,C.toNumber=kr,C.toSafeInteger=d0,C.toString=en,C.toUpper=hx,C.trim=px,C.trimEnd=mx,C.trimStart=gx,C.truncate=_x,C.unescape=vx,C.uniqueId=Vx,C.upperCase=xx,C.upperFirst=em,C.each=Qf,C.eachRight=Yu,C.first=Ou,im(C,function(){var r={};return Qi(C,function(o,d){jt.call(C.prototype,d)||(r[d]=o)}),r}(),{chain:!1}),C.VERSION=a,Qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){C[r].placeholder=C}),Qn(["drop","take"],function(r,o){At.prototype[r]=function(d){d=d===t?1:bn(Ut(d),0);var _=this.__filtered__&&!o?new At(this):this.clone();return _.__filtered__?_.__takeCount__=Jn(d,_.__takeCount__):_.__views__.push({size:Jn(d,k),type:r+(_.__dir__<0?"Right":"")}),_},At.prototype[r+"Right"]=function(d){return this.reverse()[r](d).reverse()}}),Qn(["filter","map","takeWhile"],function(r,o){var d=o+1,_=d==de||d==Ee;At.prototype[r]=function(w){var b=this.clone();return b.__iteratees__.push({iteratee:ut(w,3),type:d}),b.__filtered__=b.__filtered__||_,b}}),Qn(["head","last"],function(r,o){var d="take"+(o?"Right":"");At.prototype[r]=function(){return this[d](1).value()[0]}}),Qn(["initial","tail"],function(r,o){var d="drop"+(o?"":"Right");At.prototype[r]=function(){return this.__filtered__?new At(this):this[d](1)}}),At.prototype.compact=function(){return this.filter(rr)},At.prototype.find=function(r){return this.filter(r).head()},At.prototype.findLast=function(r){return this.reverse().find(r)},At.prototype.invokeMap=Rt(function(r,o){return typeof r=="function"?new At(this):this.map(function(d){return bs(d,r,o)})}),At.prototype.reject=function(r){return this.filter(ie(ut(r)))},At.prototype.slice=function(r,o){r=Ut(r);var d=this;return d.__filtered__&&(r>0||o<0)?new At(d):(r<0?d=d.takeRight(-r):r&&(d=d.drop(r)),o!==t&&(o=Ut(o),d=o<0?d.dropRight(-o):d.take(o-r)),d)},At.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},At.prototype.toArray=function(){return this.take(k)},Qi(At.prototype,function(r,o){var d=/^(?:filter|find|map|reject)|While$/.test(o),_=/^(?:head|last)$/.test(o),w=C[_?"take"+(o=="last"?"Right":""):o],b=_||/^find/.test(o);w&&(C.prototype[o]=function(){var V=this.__wrapped__,Y=_?[1]:arguments,ee=V instanceof At,Te=Y[0],we=ee||Ct(V),be=function(kt){var Wt=w.apply(C,Ss([kt],Y));return _&&Xe?Wt[0]:Wt};we&&d&&typeof Te=="function"&&Te.length!=1&&(ee=we=!1);var Xe=this.__chain__,st=!!this.__actions__.length,gt=b&&!Xe,Dt=ee&&!st;if(!b&&we){V=Dt?V:new At(this);var _t=r.apply(V,Y);return _t.__actions__.push({func:Vu,args:[be],thisArg:t}),new ei(_t,Xe)}return gt&&Dt?r.apply(this,Y):(_t=this.thru(be),gt?_?_t.value()[0]:_t.value():_t)})}),Qn(["pop","push","shift","sort","splice","unshift"],function(r){var o=jr[r],d=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",_=/^(?:pop|shift)$/.test(r);C.prototype[r]=function(){var w=arguments;if(_&&!this.__chain__){var b=this.value();return o.apply(Ct(b)?b:[],w)}return this[d](function(V){return o.apply(Ct(V)?V:[],w)})}}),Qi(At.prototype,function(r,o){var d=C[o];if(d){var _=d.name+"";jt.call(Ko,_)||(Ko[_]=[]),Ko[_].push({name:o,func:d})}}),Ko[ca(t,y).name]=[{name:"wrapper",func:t}],At.prototype.clone=iu,At.prototype.reverse=rf,At.prototype.value=Jo,C.prototype.at=Vs,C.prototype.chain=Wu,C.prototype.commit=go,C.prototype.next=Xu,C.prototype.plant=$f,C.prototype.reverse=Wp,C.prototype.toJSON=C.prototype.valueOf=C.prototype.value=Kf,C.prototype.first=C.prototype.head,Yr&&(C.prototype[Yr]=Yf),C},Wo=Rp();Cr?((Cr.exports=Wo)._=Wo,Na._=Wo):mn._=Wo}).call(Pw)}(ad,ad.exports)),ad.exports}var ev=bw(),Ec=Object.freeze({Linear:Object.freeze({None:function(s){return s},In:function(s){return this.None(s)},Out:function(s){return this.None(s)},InOut:function(s){return this.None(s)}}),Quadratic:Object.freeze({In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}}),Cubic:Object.freeze({In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}}),Quartic:Object.freeze({In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}}),Quintic:Object.freeze({In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}}),Sinusoidal:Object.freeze({In:function(s){return 1-Math.sin((1-s)*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))}}),Exponential:Object.freeze({In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}}),Circular:Object.freeze({In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}}),Elastic:Object.freeze({In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}}),Bounce:Object.freeze({In:function(s){return 1-Ec.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?Ec.Bounce.In(s*2)*.5:Ec.Bounce.Out(s*2-1)*.5+.5}}),generatePow:function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:function(e){return Math.pow(e,s)},Out:function(e){return 1-Math.pow(1-e,s)},InOut:function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5}}}}),Sc=function(){return performance.now()},Fv=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},s.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},s.prototype.update=function(e,t){e===void 0&&(e=Sc()),t===void 0&&(t=!1);var a=Object.keys(this._tweens);if(a.length===0)return!1;for(;a.length>0;){this._tweensAddedDuringUpdate={};for(var u=0;u<a.length;u++){var f=this._tweens[a[u]],p=!t;f&&f.update(e,p)===!1&&!t&&delete this._tweens[a[u]]}a=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),Al={Linear:function(s,e){var t=s.length-1,a=t*e,u=Math.floor(a),f=Al.Utils.Linear;return e<0?f(s[0],s[1],a):e>1?f(s[t],s[t-1],t-a):f(s[u],s[u+1>t?t:u+1],a-u)},Bezier:function(s,e){for(var t=0,a=s.length-1,u=Math.pow,f=Al.Utils.Bernstein,p=0;p<=a;p++)t+=u(1-e,a-p)*u(e,p)*s[p]*f(a,p);return t},CatmullRom:function(s,e){var t=s.length-1,a=t*e,u=Math.floor(a),f=Al.Utils.CatmullRom;return s[0]===s[t]?(e<0&&(u=Math.floor(a=t*(1+e))),f(s[(u-1+t)%t],s[u],s[(u+1)%t],s[(u+2)%t],a-u)):e<0?s[0]-(f(s[0],s[0],s[1],s[1],-a)-s[0]):e>1?s[t]-(f(s[t],s[t],s[t-1],s[t-1],a-t)-s[t]):f(s[u?u-1:0],s[u],s[t<u+1?t:u+1],s[t<u+2?t:u+2],a-u)},Utils:{Linear:function(s,e,t){return(e-s)*t+s},Bernstein:function(s,e){var t=Al.Utils.Factorial;return t(s)/t(e)/t(s-e)},Factorial:function(){var s=[1];return function(e){var t=1;if(s[e])return s[e];for(var a=e;a>1;a--)t*=a;return s[e]=t,t}}(),CatmullRom:function(s,e,t,a,u){var f=(t-s)*.5,p=(a-e)*.5,h=u*u,x=u*h;return(2*e-2*t+f+p)*x+(-3*e+3*t-2*f-p)*h+f*u+e}}},lg=function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Zm=new Fv,Uw=function(){function s(e,t){t===void 0&&(t=Zm),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ec.Linear.None,this._interpolationFunction=Al.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=lg.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=Sc()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var a in this._valuesStartRepeat)this._swapEndStartRepeatValues(a),this._valuesStart[a]=this._valuesStartRepeat[a]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var u={};for(var f in this._valuesEnd)u[f]=this._valuesEnd[f];this._valuesEnd=u}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,a,u,f){for(var p in a){var h=e[p],x=Array.isArray(h),v=x?"array":typeof h,S=!x&&Array.isArray(a[p]);if(!(v==="undefined"||v==="function")){if(S){var M=a[p];if(M.length===0)continue;for(var E=[h],A=0,P=M.length;A<P;A+=1){var L=this._handleRelativeValue(h,M[A]);if(isNaN(L)){S=!1,console.warn("Found invalid interpolation list. Skipping.");break}E.push(L)}S&&(a[p]=E)}if((v==="object"||x)&&h&&!S){t[p]=x?[]:{};var T=h;for(var y in T)t[p][y]=T[y];u[p]=x?[]:{};var M=a[p];if(!this._isDynamic){var H={};for(var y in M)H[y]=M[y];a[p]=M=H}this._setupProperties(T,t[p],M,u[p],f)}else(typeof t[p]>"u"||f)&&(t[p]=h),x||(t[p]*=1),S?u[p]=a[p].slice().reverse():u[p]=t[p]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(e){return e===void 0&&(e=Sc()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},s.prototype.resume=function(e){return e===void 0&&(e=Sc()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e===void 0&&(e=Zm),this._group=e,this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=Ec.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=Al.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){if(e===void 0&&(e=Sc()),t===void 0&&(t=!0),this._isPaused)return!0;var a,u,f=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>f)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),u=(e-this._startTime)/this._duration,u=this._duration===0||u>1?1:u;var p=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,p),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),u===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(a in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[a]=="string"&&(this._valuesStartRepeat[a]=this._valuesStartRepeat[a]+parseFloat(this._valuesEnd[a])),this._yoyo&&this._swapEndStartRepeatValues(a),this._valuesStart[a]=this._valuesStartRepeat[a];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var h=0,x=this._chainedTweens.length;h<x;h++)this._chainedTweens[h].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,a,u){for(var f in a)if(t[f]!==void 0){var p=t[f]||0,h=a[f],x=Array.isArray(e[f]),v=Array.isArray(h),S=!x&&v;S?e[f]=this._interpolationFunction(h,u):typeof h=="object"&&h?this._updateProperties(e[f],p,h,u):(h=this._handleRelativeValue(p,h),typeof h=="number"&&(e[f]=p+(h-p)*u))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],a=this._valuesEnd[e];typeof a=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(a):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s}(),Dw="21.0.0",Iw=lg.nextId,qs=Zm,Nw=qs.getAll.bind(qs),Fw=qs.removeAll.bind(qs),Ow=qs.add.bind(qs),Bw=qs.remove.bind(qs),zw=qs.update.bind(qs),wl={Easing:Ec,Group:Fv,Interpolation:Al,now:Sc,Sequence:lg,nextId:Iw,Tween:Uw,VERSION:Dw,getAll:Nw,removeAll:Fw,add:Ow,remove:Bw,update:zw};const kw=(s,e)=>{const t=[];for(let a=0;a<s.length-1;a++)for(let u=0;u<=e;u++){const f=u/e,p={x:s[a].position.x*(1-f)+s[a+1].position.x*f,y:s[a].position.y*(1-f)+s[a+1].position.y*f,z:s[a].position.z*(1-f)+s[a+1].position.z*f},h={x:s[a].rotation.x*(1-f)+s[a+1].rotation.x*f,y:s[a].rotation.y*(1-f)+s[a+1].rotation.y*f,z:s[a].rotation.z*(1-f)+s[a+1].rotation.z*f};t.push({position:p,rotation:h})}return t.push(s[s.length-1]),t},Hw=uS.memo(()=>{const s=En.useRef(null),e=En.useRef(null),t=En.useRef(null),a=En.useRef(null),[u,f,p]=En.useMemo(()=>[0,.7,1.25],[]),h=En.useMemo(()=>[{position:{x:u,y:f,z:p},rotation:{x:0,y:0,z:0}},{position:{x:1,y:1,z:0},rotation:{x:0,y:2,z:0}},{position:{x:-1,y:1,z:0},rotation:{x:0,y:-2,z:0}},{position:{x:0,y:1,z:-2},rotation:{x:0,y:-3,z:0}}],[u,f,p]),x=10,v=En.useMemo(()=>kw(h,x),[h,x]),[S,M]=En.useState(0),E=60;let A=0;const P=En.useCallback((y=0)=>{const H=y-A,D=1e3/E;H>D&&(A=y-H%D,wl.update(),a.current.render(e.current,t.current)),requestAnimationFrame(P)},[]),L=En.useCallback(ev.debounce(()=>{t.current.aspect=window.innerWidth/window.innerHeight,t.current.updateProjectionMatrix(),a.current.setSize(window.innerWidth,window.innerHeight)},10),[]),T=En.useCallback(ev.throttle(()=>{const y=window.pageYOffset||document.documentElement.scrollTop;let H=Math.floor(y/(document.body.offsetHeight/v.length));if(H=Math.max(0,H),H=Math.min(v.length-1,H),H!==S){const D={x:t.current.position.x,y:t.current.position.y,z:t.current.position.z},O={x:t.current.rotation.x,y:t.current.rotation.y,z:t.current.rotation.z};new wl.Tween(D).to(v[H].position,1e3).easing(wl.Easing.Quadratic.Out).onUpdate(()=>{t.current.position.set(D.x,D.y,D.z)}).start(),new wl.Tween(O).to(v[H].rotation,1e3).easing(wl.Easing.Quadratic.Out).onUpdate(()=>{t.current.rotation.set(O.x,O.y,O.z)}).start(),M(H)}},10),[S,v]);return En.useEffect(()=>{let y,H,D;y=new Tw,H=new Vr(75,window.innerWidth/window.innerHeight,.1,1e3),D=new Nv({antialias:!1,precision:"lowp",alpha:!1}),D.setSize(window.innerWidth,window.innerHeight),D.setClearColor(16777215,0),e.current=y,t.current=H,a.current=D,s.current&&s.current.appendChild(D.domElement);const O=new Lw;return fetch("https://raw.githubusercontent.com/phbui/phbui.github.io/main/src/assets/gundam.stl").then(q=>q.arrayBuffer()).then(q=>{const X=O.parse(q),fe=new rg({color:16777215,wireframe:!0,wireframeLinewidth:10}),I=new Po(X,fe);I.frustumCulled=!0,I.rotation.x=-Math.PI/2,I.scale.set(.01,.01,.01),e.current.add(I)}).catch(q=>console.error("Error loading STL file:",q)),H.position.x=u,H.position.y=f,H.position.z=p,P(),()=>{s.current&&s.current.removeChild(D.domElement)}},[P,u,f,p]),En.useEffect(()=>(window.addEventListener("resize",L),window.addEventListener("scroll",T),()=>{window.removeEventListener("resize",L),window.removeEventListener("scroll",T)}),[L,T]),ye.jsx("div",{ref:s})}),di=({text:s})=>{const e=En.useRef(null),t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return En.useEffect(()=>{let a=null;const u=p=>{let h=0;clearInterval(a),a=setInterval(()=>{p.target.innerText=s.split("").map((x,v)=>v<h?x:t[Math.floor(Math.random()*26)]).join(""),h>=s.length&&clearInterval(a),h+=1/3},30)},f=e.current;return f.addEventListener("mouseover",u),()=>{clearInterval(a),f.removeEventListener("mouseover",u)}},[s,t]),ye.jsx("span",{className:"links",ref:e,children:s})},Gw=({refs:s})=>{console.log(s);const e=En.useCallback(a=>u=>{u.preventDefault();const{current:f}=a;f?window.scrollTo({top:f.offsetTop-window.innerHeight/2+f.offsetHeight*3,behavior:"smooth"}):console.warn("Ref is not attached to an element:",a)},[]),t=[{label:"home",ref:s.homeRef},{label:"projects",ref:s.projectsRef},{label:"about",ref:s.aboutRef},{label:"contact",ref:s.contactRef}];return ye.jsx("div",{className:"accentLine",children:t.map((a,u)=>ye.jsx("pre",{className:"preText",children:ye.jsx("a",{onClick:e(a.ref),className:"navBar",children:ye.jsx(di,{text:a.label})})},u))})},Vw="/assets/Philip%20Bui%20-%20Resume-CplDljmC.pdf",tv=({children:s})=>{const[e,t]=En.useState(0),a=p=>{p.stopPropagation(),t(h=>(h+1)%s.length)},u=p=>{p.stopPropagation(),t(h=>h===0?s.length-1:h-1)},f=(p,h)=>{p.stopPropagation(),t(h)};return ye.jsxs(ye.Fragment,{children:[ye.jsx("button",{className:"carousel-button prev",onClick:u,children:"❮"}),ye.jsx("div",{className:"carousel-content",children:s.map((p,h)=>ye.jsx("div",{className:`carousel-item ${h===e?"active":""}`,children:p},h))}),ye.jsx("button",{className:"carousel-button next",onClick:a,children:"❯"}),ye.jsx("div",{className:"carousel-indicators",children:s.map((p,h)=>ye.jsx("span",{className:`indicator ${h===e?"active":""}`,onClick:x=>f(x,h)},h))})]})},nv=({img:s,title:e,link:t,text:a,download:u})=>ye.jsxs("div",{className:"projectItem",children:[ye.jsx("a",{href:t,download:u,children:ye.jsx("img",{className:"projectIMG",src:s})}),ye.jsxs("div",{className:"projectTextHolder",children:[ye.jsx("pre",{className:"preText projectText",children:ye.jsx("a",{href:t,download:u,children:ye.jsx(di,{text:e})})}),ye.jsx("pre",{className:"preText projectText",children:a})]})]}),Qm="/assets/chatgpt-oT1QLtnR.jpg",iv="/assets/wpi-DVbrRB4v.jpg",Ww="/assets/mgbwh-CSX1VXj4.jpg",Xw="/assets/main-era-CLGdNX68.jpg",jw="/assets/untitled-CIVNQ3L_.jpg",qw="/assets/tarot-CUvB3Tmr.jpg",Jm="/assets/tufts-Cy396Adh.jpg",Yw="/assets/hilab-DA8gS6yu.jpg",$w=[{img:Yw,title:"Human Interaction Lab: GailBot",link:"https://sites.tufts.edu/hilab/gailbot",text:"Automated transcription system for conversation analysis."},{img:Qm,title:"AI Architecture for Storytelling",link:"https://www.are.na/block/33237601",text:"An AI-driven architecture for immersive storytelling, integrating procedural generation, large language models, and player behavior modeling."},{img:Jm,title:"Sphero Swarm Framework",link:"https://www.are.na/block/33345533",text:"A framework for Sphero swarm navigation using probabilistic methods and computer vision, developed for Tufts' human-robot interaction research."},{img:iv,title:"Worcester PermitPro",link:"https://www.are.na/block/26865313",text:"A blockchain-based smart contract system that aims to streamline low-income housing development in Worcester for WPI's Major Qualifying Project Program."},{img:Jm,title:"Robot System Controls Study",link:"https://www.are.na/block/33345530",text:"Explored human preferences in manual vs autonomous control of Sphero robots, emphasizing trust and adaptability in navigation systems."},{img:Qm,title:"ChatGPT, How Do I Design?",link:"https://www.are.na/block/26865380",text:"This paper advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethics."},{img:iv,title:"NitroCycle",link:"https://github.com/IQP-NCPOGD/nitrocycle",text:"An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's Interactive Qualifying Project program."},{img:Ww,title:"Medical Service Request System",link:"https://github.com/phbui/BWH-Medical-Service-Request-System",text:"A medical service request system (MSRS) made for Brigham and Women's Hospital (BWH) during WPI's Software Engineering course."}],Kw=[{img:Qm,title:"Real-Time Captioning Extension",link:"https://github.com/phbui/real-time-captioning-extension",text:"A real-time captioning browser extension using OpenAI's Whisper."},{img:jw,title:"Untitled",link:"https://untitled.boston/",text:"A website I made for a start-up entertainment consultancy, Untitled LLC in Boston, MA."},{img:qw,title:"Tarot Cards",link:"https://objectivephi.github.io/",text:"A little tarot card reader I made on my downtime at work."},{img:Xw,title:"Main Era",link:"https://main-era.github.io/",text:"A website I made for a Boston-based, indie punk band."},{img:Jm,title:"Haven",link:"https://www.are.na/block/26865372",text:"A live map for anonymous incident reporting and resource location designed for Tufts' Spring 2024 Producthon."}],Zw=()=>ye.jsxs("div",{className:"projects-container",children:[ye.jsxs("div",{className:"section academic-section",children:[ye.jsx("pre",{className:"section-title",children:"Academic"}),ye.jsx("div",{className:"carousel-container",children:ye.jsx(tv,{children:$w.map((s,e)=>ye.jsx(nv,{img:s.img,title:s.title,link:s.link,text:s.text},e))})})]}),ye.jsxs("div",{className:"section miscellaneous-section",children:[ye.jsx("pre",{className:"section-title",children:"Miscellaneous"}),ye.jsx("div",{className:"carousel-container",children:ye.jsx(tv,{children:Kw.map((s,e)=>ye.jsx(nv,{img:s.img,title:s.title,link:s.link,text:s.text},e))})})]})]}),Qw=()=>{const s=En.useRef(null),e=En.useRef(null),t=En.useRef(null),a=En.useRef(null),[u,f]=En.useState(!1);return En.useEffect(()=>{s.current&&e.current&&t.current&&a.current&&f(!0)},[s,e,t,a]),ye.jsxs("div",{className:"mainContainer",children:[ye.jsx("div",{className:"background"}),u&&ye.jsx(Gw,{refs:{homeRef:s,projectsRef:e,aboutRef:t,contactRef:a}}),ye.jsx("div",{className:"canvasHolder",children:ye.jsx(Hw,{})}),ye.jsxs("div",{className:"accentHolder",children:[ye.jsx("div",{className:"topLeft",children:ye.jsx("p",{className:"accentText verticalText",children:"+---|=============-"})}),ye.jsx("div",{className:"topLeft",children:ye.jsx("p",{className:"accentText",children:"+---|=============-"})}),ye.jsx("div",{className:"bottomRight rightSword",children:ye.jsx("p",{className:"accentText verticalText",children:"-=============|---+"})}),ye.jsx("div",{className:"bottomRight",children:ye.jsx("p",{className:"accentText",children:"-=============|---+"})})]}),ye.jsxs("div",{ref:s,className:"textBox",style:{margin:"0 25vw 10vh 0"},children:[ye.jsx("pre",{children:"Hello, my name is Phi (Φ),"}),ye.jsx("pre",{children:"I am interested in the intersection"}),ye.jsx("pre",{children:"between humans, art, and technology."})]}),ye.jsx("div",{ref:e,className:"textBox",style:{margin:"0 15vw -25vh 0"},children:ye.jsx("pre",{children:"Check out some of my work:"})}),ye.jsx(Zw,{}),ye.jsx("div",{ref:t,className:"textBox",style:{margin:"10vh 30vw 5vh 0"},children:ye.jsx("pre",{children:"Some stuff about me:"})}),ye.jsxs("div",{className:"textBox",style:{margin:"0 -12.5vw 10vh 0"},children:[ye.jsx("pre",{children:"const About = (phi_bui) => {"}),ye.jsxs("pre",{children:["  const resume = fetch('",ye.jsx("a",{href:Vw,download:"Philip Bui - Resume.pdf",children:ye.jsx(di,{text:"resume.pdf"})}),"');"]}),ye.jsxs("pre",{children:["  let undergrad = '",ye.jsx("a",{href:"https://www.wpi.edu/academics/study/computer-science-bs",children:ye.jsx(di,{text:"B.S. in CS"})})," @ ",ye.jsx("a",{href:"https://www.wpi.edu/",children:ye.jsx(di,{text:"WPI"})}),"';"]}),ye.jsxs("pre",{children:["  let grad = '",ye.jsx("a",{href:"https://engineering.tufts.edu/cs/current-students/graduate/ms-human-robot-interaction",children:ye.jsx(di,{text:"M.S. in CS:HRI"})})," @ ",ye.jsx("a",{href:"https://www.tufts.edu/",children:ye.jsx(di,{text:"Tufts"})}),"';"]}),ye.jsx("br",{}),ye.jsxs("pre",{children:[" ","  const ",ye.jsx("span",{style:{textDecoration:"underline"},children:"industry_experience"})," = () => {          "]}),ye.jsxs("pre",{children:[" ","    return ["]}),ye.jsxs("pre",{children:[" ","      {",ye.jsx("a",{href:"https://www.amazon.com/",children:ye.jsx(di,{text:"Amazon"})}),": 'Operations Intern'},"]}),ye.jsxs("pre",{children:[" ","      {",ye.jsx("a",{href:"https://www.prosperon.io/",children:ye.jsx(di,{text:"ProsperOn"})}),": 'Website Developer'},"]}),ye.jsxs("pre",{children:[" ","      {",ye.jsx("a",{href:"https://www.enlabel.com/",children:ye.jsx(di,{text:"enLabel"})}),": 'Software Engineer'}"]}),ye.jsxs("pre",{children:[" ","    ];"]}),ye.jsx("br",{}),ye.jsxs("pre",{children:[" ","  const ",ye.jsx("span",{style:{textDecoration:"underline"},children:"research_experience"})," = () => {"]}),ye.jsxs("pre",{children:[" ","    return ["]}),ye.jsxs("pre",{children:[" ","      {",ye.jsx("a",{href:"https://www.tufts.edu/",children:ye.jsx(di,{text:"Tufts"})}),": '",ye.jsx("a",{href:"https://sites.tufts.edu/hilab/",children:ye.jsx(di,{text:"Human Interaction Laboratory"})}),"'},"]}),ye.jsxs("pre",{children:[" ","      {",ye.jsx("a",{href:"https://www.usra.edu/",children:ye.jsx(di,{text:"USRA"})}),": '",ye.jsx("a",{href:"https://www.afrl.af.mil/",children:ye.jsx(di,{text:"Air Force Research Laboratory"})}),"'},"]}),ye.jsxs("pre",{children:[" ","    ];"]}),ye.jsxs("pre",{children:[" ","  };"]}),ye.jsx("pre",{children:"}"})]}),ye.jsx("div",{ref:a,className:"textBox",style:{margin:"0 32.5vw 10vh 0"},children:ye.jsx("pre",{children:"Get in contact with me:"})}),ye.jsxs("div",{className:"textBox",children:[ye.jsxs("pre",{children:["const Contact = {            "," "]}),ye.jsxs("pre",{children:["  {email: ",ye.jsx("a",{href:"mailto:bilphui@gmail.com",children:ye.jsx(di,{text:"bilphui@gmail.com"})}),"},"]}),ye.jsxs("pre",{children:["  {linkedin: ",ye.jsx("a",{href:"https://www.linkedin.com/in/phi-bui/",children:ye.jsx(di,{text:"phi-bui"})}),"},"]}),ye.jsxs("pre",{children:["  {github: ",ye.jsx("a",{href:"https://github.com/phbui",children:ye.jsx(di,{text:"phbui"})}),"},"]}),ye.jsxs("pre",{children:["  {instagram: ",ye.jsx("a",{href:"https://www.instagram.com/objectivephi/",children:ye.jsx(di,{text:"@objectivephi"})}),"}"]}),ye.jsx("pre",{children:"}"})]})]})};gS.createRoot(document.getElementById("root")).render(ye.jsx(Qw,{}))});export default Jw();
