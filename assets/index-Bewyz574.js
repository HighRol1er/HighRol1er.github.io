(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var pp={exports:{}},fu={};var Lx;function M1(){if(Lx)return fu;Lx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:r,type:a,key:c,ref:s!==void 0?s:null,props:l}}return fu.Fragment=e,fu.jsx=t,fu.jsxs=t,fu}var Ox;function E1(){return Ox||(Ox=1,pp.exports=M1()),pp.exports}var oe=E1(),mp={exports:{}},ut={};var Px;function b1(){if(Px)return ut;Px=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function S(B,te,pe){this.props=B,this.context=te,this.refs=y,this.updater=pe||E}S.prototype.isReactComponent={},S.prototype.setState=function(B,te){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,te,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function R(){}R.prototype=S.prototype;function C(B,te,pe){this.props=B,this.context=te,this.refs=y,this.updater=pe||E}var D=C.prototype=new R;D.constructor=C,M(D,S.prototype),D.isPureReactComponent=!0;var w=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function T(B,te,pe){var be=pe.ref;return{$$typeof:r,type:B,key:te,ref:be!==void 0?be:null,props:pe}}function L(B,te){return T(B.type,te,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function Y(B){var te={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(pe){return te[pe]})}var q=/\/+/g;function le(B,te){return typeof B=="object"&&B!==null&&B.key!=null?Y(""+B.key):te.toString(36)}function ee(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(te){B.status==="pending"&&(B.status="fulfilled",B.value=te)},function(te){B.status==="pending"&&(B.status="rejected",B.reason=te)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,te,pe,be,Ne){var ae=typeof B;(ae==="undefined"||ae==="boolean")&&(B=null);var de=!1;if(B===null)de=!0;else switch(ae){case"bigint":case"string":case"number":de=!0;break;case"object":switch(B.$$typeof){case r:case e:de=!0;break;case m:return de=B._init,I(de(B._payload),te,pe,be,Ne)}}if(de)return Ne=Ne(B),de=be===""?"."+le(B,0):be,w(Ne)?(pe="",de!=null&&(pe=de.replace(q,"$&/")+"/"),I(Ne,te,pe,"",function(ke){return ke})):Ne!=null&&(G(Ne)&&(Ne=L(Ne,pe+(Ne.key==null||B&&B.key===Ne.key?"":(""+Ne.key).replace(q,"$&/")+"/")+de)),te.push(Ne)),1;de=0;var we=be===""?".":be+":";if(w(B))for(var Xe=0;Xe<B.length;Xe++)be=B[Xe],ae=we+le(be,Xe),de+=I(be,te,pe,ae,Ne);else if(Xe=x(B),typeof Xe=="function")for(B=Xe.call(B),Xe=0;!(be=B.next()).done;)be=be.value,ae=we+le(be,Xe++),de+=I(be,te,pe,ae,Ne);else if(ae==="object"){if(typeof B.then=="function")return I(ee(B),te,pe,be,Ne);throw te=String(B),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(B,te,pe){if(B==null)return B;var be=[],Ne=0;return I(B,be,"","",function(ae){return te.call(pe,ae,Ne++)}),be}function J(B){if(B._status===-1){var te=B._result;te=te(),te.then(function(pe){(B._status===0||B._status===-1)&&(B._status=1,B._result=pe)},function(pe){(B._status===0||B._status===-1)&&(B._status=2,B._result=pe)}),B._status===-1&&(B._status=0,B._result=te)}if(B._status===1)return B._result.default;throw B._result}var _e=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},xe={map:H,forEach:function(B,te,pe){H(B,function(){te.apply(this,arguments)},pe)},count:function(B){var te=0;return H(B,function(){te++}),te},toArray:function(B){return H(B,function(te){return te})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ut.Activity=_,ut.Children=xe,ut.Component=S,ut.Fragment=t,ut.Profiler=s,ut.PureComponent=C,ut.StrictMode=a,ut.Suspense=h,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ut.__COMPILER_RUNTIME={__proto__:null,c:function(B){return O.H.useMemoCache(B)}},ut.cache=function(B){return function(){return B.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(B,te,pe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var be=M({},B.props),Ne=B.key;if(te!=null)for(ae in te.key!==void 0&&(Ne=""+te.key),te)!F.call(te,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&te.ref===void 0||(be[ae]=te[ae]);var ae=arguments.length-2;if(ae===1)be.children=pe;else if(1<ae){for(var de=Array(ae),we=0;we<ae;we++)de[we]=arguments[we+2];be.children=de}return T(B.type,Ne,be)},ut.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},ut.createElement=function(B,te,pe){var be,Ne={},ae=null;if(te!=null)for(be in te.key!==void 0&&(ae=""+te.key),te)F.call(te,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ne[be]=te[be]);var de=arguments.length-2;if(de===1)Ne.children=pe;else if(1<de){for(var we=Array(de),Xe=0;Xe<de;Xe++)we[Xe]=arguments[Xe+2];Ne.children=we}if(B&&B.defaultProps)for(be in de=B.defaultProps,de)Ne[be]===void 0&&(Ne[be]=de[be]);return T(B,ae,Ne)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(B){return{$$typeof:f,render:B}},ut.isValidElement=G,ut.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:J}},ut.memo=function(B,te){return{$$typeof:d,type:B,compare:te===void 0?null:te}},ut.startTransition=function(B){var te=O.T,pe={};O.T=pe;try{var be=B(),Ne=O.S;Ne!==null&&Ne(pe,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(P,_e)}catch(ae){_e(ae)}finally{te!==null&&pe.types!==null&&(te.types=pe.types),O.T=te}},ut.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ut.use=function(B){return O.H.use(B)},ut.useActionState=function(B,te,pe){return O.H.useActionState(B,te,pe)},ut.useCallback=function(B,te){return O.H.useCallback(B,te)},ut.useContext=function(B){return O.H.useContext(B)},ut.useDebugValue=function(){},ut.useDeferredValue=function(B,te){return O.H.useDeferredValue(B,te)},ut.useEffect=function(B,te){return O.H.useEffect(B,te)},ut.useEffectEvent=function(B){return O.H.useEffectEvent(B)},ut.useId=function(){return O.H.useId()},ut.useImperativeHandle=function(B,te,pe){return O.H.useImperativeHandle(B,te,pe)},ut.useInsertionEffect=function(B,te){return O.H.useInsertionEffect(B,te)},ut.useLayoutEffect=function(B,te){return O.H.useLayoutEffect(B,te)},ut.useMemo=function(B,te){return O.H.useMemo(B,te)},ut.useOptimistic=function(B,te){return O.H.useOptimistic(B,te)},ut.useReducer=function(B,te,pe){return O.H.useReducer(B,te,pe)},ut.useRef=function(B){return O.H.useRef(B)},ut.useState=function(B){return O.H.useState(B)},ut.useSyncExternalStore=function(B,te,pe){return O.H.useSyncExternalStore(B,te,pe)},ut.useTransition=function(){return O.H.useTransition()},ut.version="19.2.3",ut}var Bx;function xg(){return Bx||(Bx=1,mp.exports=b1()),mp.exports}var Q=xg(),gp={exports:{}},hu={},_p={exports:{}},vp={};var Ix;function T1(){return Ix||(Ix=1,(function(r){function e(I,H){var J=I.length;I.push(H);e:for(;0<J;){var _e=J-1>>>1,xe=I[_e];if(0<s(xe,H))I[_e]=H,I[J]=xe,J=_e;else break e}}function t(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var H=I[0],J=I.pop();if(J!==H){I[0]=J;e:for(var _e=0,xe=I.length,B=xe>>>1;_e<B;){var te=2*(_e+1)-1,pe=I[te],be=te+1,Ne=I[be];if(0>s(pe,J))be<xe&&0>s(Ne,pe)?(I[_e]=Ne,I[be]=J,_e=be):(I[_e]=pe,I[te]=J,_e=te);else if(be<xe&&0>s(Ne,J))I[_e]=Ne,I[be]=J,_e=be;else break e}}return H}function s(I,H){var J=I.sortIndex-H.sortIndex;return J!==0?J:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],d=[],m=1,_=null,v=3,x=!1,E=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var H=t(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=I)a(d),H.sortIndex=H.expirationTime,e(h,H);else break;H=t(d)}}function w(I){if(M=!1,D(I),!E)if(t(h)!==null)E=!0,P||(P=!0,Y());else{var H=t(d);H!==null&&ee(w,H.startTime-I)}}var P=!1,O=-1,F=5,T=-1;function L(){return y?!0:!(r.unstable_now()-T<F)}function G(){if(y=!1,P){var I=r.unstable_now();T=I;var H=!0;try{e:{E=!1,M&&(M=!1,R(O),O=-1),x=!0;var J=v;try{t:{for(D(I),_=t(h);_!==null&&!(_.expirationTime>I&&L());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,v=_.priorityLevel;var xe=_e(_.expirationTime<=I);if(I=r.unstable_now(),typeof xe=="function"){_.callback=xe,D(I),H=!0;break t}_===t(h)&&a(h),D(I)}else a(h);_=t(h)}if(_!==null)H=!0;else{var B=t(d);B!==null&&ee(w,B.startTime-I),H=!1}}break e}finally{_=null,v=J,x=!1}H=void 0}}finally{H?Y():P=!1}}}var Y;if(typeof C=="function")Y=function(){C(G)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,le=q.port2;q.port1.onmessage=G,Y=function(){le.postMessage(null)}}else Y=function(){S(G,0)};function ee(I,H){O=S(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return I()}finally{v=J}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=v;v=I;try{return H()}finally{v=J}},r.unstable_scheduleCallback=function(I,H,J){var _e=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,I={id:m++,callback:H,priorityLevel:I,startTime:J,expirationTime:xe,sortIndex:-1},J>_e?(I.sortIndex=J,e(d,I),t(h)===null&&I===t(d)&&(M?(R(O),O=-1):M=!0,ee(w,J-_e))):(I.sortIndex=xe,e(h,I),E||x||(E=!0,P||(P=!0,Y()))),I},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(I){var H=v;return function(){var J=v;v=H;try{return I.apply(this,arguments)}finally{v=J}}}})(vp)),vp}var zx;function A1(){return zx||(zx=1,_p.exports=T1()),_p.exports}var xp={exports:{}},$n={};var Fx;function R1(){if(Fx)return $n;Fx=1;var r=xg();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)d+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,d,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:h,containerInfo:d,implementation:m}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$n.createPortal=function(h,d){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,m)},$n.flushSync=function(h){var d=c.T,m=a.p;try{if(c.T=null,a.p=2,h)return h()}finally{c.T=d,a.p=m,a.d.f()}},$n.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(h,d))},$n.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},$n.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var m=d.as,_=f(m,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;m==="style"?a.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):m==="script"&&a.d.X(h,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},$n.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var m=f(d.as,d.crossOrigin);a.d.M(h,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(h)},$n.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var m=d.as,_=f(m,d.crossOrigin);a.d.L(h,m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},$n.preloadModule=function(h,d){if(typeof h=="string")if(d){var m=f(d.as,d.crossOrigin);a.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(h)},$n.requestFormReset=function(h){a.d.r(h)},$n.unstable_batchedUpdates=function(h,d){return h(d)},$n.useFormState=function(h,d,m){return c.H.useFormState(h,d,m)},$n.useFormStatus=function(){return c.H.useHostTransitionStatus()},$n.version="19.2.3",$n}var Hx;function C1(){if(Hx)return xp.exports;Hx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xp.exports=R1(),xp.exports}var Gx;function w1(){if(Gx)return hu;Gx=1;var r=A1(),e=xg(),t=C1();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function c(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var o=n,u=i;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return h(p),n;if(g===u)return h(p),i;g=g.sibling}throw Error(a(188))}if(o.return!==u.return)o=p,u=g;else{for(var b=!1,U=p.child;U;){if(U===o){b=!0,o=p,u=g;break}if(U===u){b=!0,u=p,o=g;break}U=U.sibling}if(!b){for(U=g.child;U;){if(U===o){b=!0,o=g,u=p;break}if(U===u){b=!0,u=g,o=p;break}U=U.sibling}if(!b)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?n:i}function m(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=m(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var q=Symbol.for("react.client.reference");function le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===q?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case w:return"Suspense";case P:return"SuspenseList";case T:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case E:return"Portal";case C:return n.displayName||"Context";case R:return(n._context.displayName||"Context")+".Consumer";case D:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return i=n.displayName||null,i!==null?i:le(n.type)||"Memo";case F:i=n._payload,n=n._init;try{return le(n(i))}catch{}}return null}var ee=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},_e=[],xe=-1;function B(n){return{current:n}}function te(n){0>xe||(n.current=_e[xe],_e[xe]=null,xe--)}function pe(n,i){xe++,_e[xe]=n.current,n.current=i}var be=B(null),Ne=B(null),ae=B(null),de=B(null);function we(n,i){switch(pe(ae,i),pe(Ne,n),pe(be,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?nx(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=nx(i),n=ix(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}te(be),pe(be,n)}function Xe(){te(be),te(Ne),te(ae)}function ke(n){n.memoizedState!==null&&pe(de,n);var i=be.current,o=ix(i,n.type);i!==o&&(pe(Ne,n),pe(be,o))}function _t(n){Ne.current===n&&(te(be),te(Ne)),de.current===n&&(te(de),ou._currentValue=J)}var en,mt;function vt(n){if(en===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);en=i&&i[1]||"",mt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+n+mt}var je=!1;function Te(n,i){if(!n||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(fe){var se=fe}Reflect.construct(n,[],ye)}else{try{ye.call()}catch(fe){se=fe}n.call(ye.prototype)}}else{try{throw Error()}catch(fe){se=fe}(ye=n())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(fe){if(fe&&se&&typeof fe.stack=="string")return[fe.stack,se.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),b=g[0],U=g[1];if(b&&U){var V=b.split(`
`),ie=U.split(`
`);for(p=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;p<ie.length&&!ie[p].includes("DetermineComponentFrameRoot");)p++;if(u===V.length||p===ie.length)for(u=V.length-1,p=ie.length-1;1<=u&&0<=p&&V[u]!==ie[p];)p--;for(;1<=u&&0<=p;u--,p--)if(V[u]!==ie[p]){if(u!==1||p!==1)do if(u--,p--,0>p||V[u]!==ie[p]){var ge=`
`+V[u].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=u&&0<=p);break}}}finally{je=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?vt(o):""}function wt(n,i){switch(n.tag){case 26:case 27:case 5:return vt(n.type);case 16:return vt("Lazy");case 13:return n.child!==i&&i!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return Te(n.type,!1);case 11:return Te(n.type.render,!1);case 1:return Te(n.type,!0);case 31:return vt("Activity");default:return""}}function k(n){try{var i="",o=null;do i+=wt(n,o),o=n,n=n.return;while(n);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var xt=Object.prototype.hasOwnProperty,ct=r.unstable_scheduleCallback,St=r.unstable_cancelCallback,He=r.unstable_shouldYield,z=r.unstable_requestPaint,A=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,me=r.unstable_ImmediatePriority,Se=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,We=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,Ze=r.log,at=r.unstable_setDisableYieldValue,Ae=null,Re=null;function Ge(n){if(typeof Ze=="function"&&at(n),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ae,n)}catch{}}var ze=Math.clz32?Math.clz32:W,Le=Math.log,ht=Math.LN2;function W(n){return n>>>=0,n===0?32:31-(Le(n)/ht|0)|0}var Pe=256,Ce=262144,Fe=4194304;function Ee(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Me(n,i,o){var u=n.pendingLanes;if(u===0)return 0;var p=0,g=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var U=u&134217727;return U!==0?(u=U&~g,u!==0?p=Ee(u):(b&=U,b!==0?p=Ee(b):o||(o=U&~n,o!==0&&(p=Ee(o))))):(U=u&~g,U!==0?p=Ee(U):b!==0?p=Ee(b):o||(o=u&~n,o!==0&&(p=Ee(o)))),p===0?0:i!==0&&i!==p&&(i&g)===0&&(g=p&-p,o=i&-i,g>=o||g===32&&(o&4194048)!==0)?i:p}function De(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function st(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var n=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),n}function Dt(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Jn(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function na(n,i,o,u,p,g){var b=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var U=n.entanglements,V=n.expirationTimes,ie=n.hiddenUpdates;for(o=b&~o;0<o;){var ge=31-ze(o),ye=1<<ge;U[ge]=0,V[ge]=-1;var se=ie[ge];if(se!==null)for(ie[ge]=null,ge=0;ge<se.length;ge++){var fe=se[ge];fe!==null&&(fe.lane&=-536870913)}o&=~ye}u!==0&&Qu(n,u,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(b&~i))}function Qu(n,i,o){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-ze(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function xl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ze(o),p=1<<u;p&i|n[u]&i&&(n[u]|=i),o&=~p}}function Ks(n,i){var o=i&-i;return o=(o&42)!==0?1:Sl(o),(o&(n.suspendedLanes|i))!==0?0:o}function Sl(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Qs(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function yl(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:Ax(n.type))}function va(n,i){var o=H.p;try{return H.p=n,i()}finally{H.p=o}}var Fi=Math.random().toString(36).slice(2),xn="__reactFiber$"+Fi,Fn="__reactProps$"+Fi,ia="__reactContainer$"+Fi,Js="__reactEvents$"+Fi,$s="__reactListeners$"+Fi,Ju="__reactHandles$"+Fi,Ml="__reactResources$"+Fi,fs="__reactMarker$"+Fi;function El(n){delete n[xn],delete n[Fn],delete n[Js],delete n[$s],delete n[Ju]}function xr(n){var i=n[xn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ia]||o[xn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=cx(n);n!==null;){if(o=n[xn])return o;n=cx(n)}return i}n=o,o=n.parentNode}return null}function Sr(n){if(n=n[xn]||n[ia]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function hs(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function yr(n){var i=n[Ml];return i||(i=n[Ml]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function N(n){n[fs]=!0}var Z=new Set,ce={};function re(n,i){$(n,i),$(n+"Capture",i)}function $(n,i){for(ce[n]=i,n=0;n<i.length;n++)Z.add(i[n])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},Be={};function Ye(n){return xt.call(Be,n)?!0:xt.call(Ve,n)?!1:Oe.test(n)?Be[n]=!0:(Ve[n]=!0,!1)}function Ke(n,i,o){if(Ye(i))if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+o)}}function tt(n,i,o){if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+o)}}function Qe(n,i,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(i,o,""+u)}}function nt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function It(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rn(n,i,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,g=u.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){o=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tn(n){if(!n._valueTracker){var i=It(n)?"checked":"value";n._valueTracker=rn(n,i,""+n[i])}}function Ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=It(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function $e(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var zt=/[\n"\\]/g;function ot(n){return n.replace(zt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Hn(n,i,o,u,p,g,b,U){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+nt(i)):n.value!==""+nt(i)&&(n.value=""+nt(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?Gn(n,b,nt(i)):o!=null?Gn(n,b,nt(o)):u!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?n.name=""+nt(U):n.removeAttribute("name")}function Pa(n,i,o,u,p,g,b,U){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),i!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||i!=null)){tn(n);return}o=o!=null?""+nt(o):"",i=i!=null?""+nt(i):o,U||i===n.value||(n.value=i),n.defaultValue=i}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=U?n.checked:!!u,n.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),tn(n)}function Gn(n,i,o){i==="number"&&$e(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Hi(n,i,o,u){if(n=n.options,i){i={};for(var p=0;p<o.length;p++)i["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=i.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+nt(o),i=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function kt(n,i,o){if(i!=null&&(i=""+nt(i),i!==n.value&&(n.value=i),o==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=o!=null?""+nt(o):""}function Vn(n,i,o,u){if(i==null){if(u!=null){if(o!=null)throw Error(a(92));if(ee(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),i=o}o=nt(i),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),tn(n)}function Cn(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var kn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xn(n,i,o){var u=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":u?n.setProperty(i,o):typeof o!="number"||o===0||kn.has(i)?i==="float"?n.cssFloat=o:n[i]=(""+o).trim():n[i]=o+"px"}function eo(n,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var p in i)u=i[p],i.hasOwnProperty(p)&&o[p]!==u&&Xn(n,p,u)}else for(var g in i)i.hasOwnProperty(g)&&Xn(n,g,i[g])}function aa(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $u(n){return xE.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ba(){}var fh=null;function hh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var to=null,no=null;function t0(n){var i=Sr(n);if(i&&(n=i.stateNode)){var o=n[Fn]||null;e:switch(n=i.stateNode,i.type){case"input":if(Hn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var p=u[Fn]||null;if(!p)throw Error(a(90));Hn(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<o.length;i++)u=o[i],u.form===n.form&&Ht(u)}break e;case"textarea":kt(n,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&Hi(n,!!o.multiple,i,!1)}}}var dh=!1;function n0(n,i,o){if(dh)return n(i,o);dh=!0;try{var u=n(i);return u}finally{if(dh=!1,(to!==null||no!==null)&&(Hc(),to&&(i=to,n=no,no=to=null,t0(i),n)))for(i=0;i<n.length;i++)t0(n[i])}}function bl(n,i){var o=n.stateNode;if(o===null)return null;var u=o[Fn]||null;if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var Ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=!1;if(Ia)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){ph=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{ph=!1}var Mr=null,mh=null,ec=null;function i0(){if(ec)return ec;var n,i=mh,o=i.length,u,p="value"in Mr?Mr.value:Mr.textContent,g=p.length;for(n=0;n<o&&i[n]===p[n];n++);var b=o-n;for(u=1;u<=b&&i[o-u]===p[g-u];u++);return ec=p.slice(n,1<u?1-u:void 0)}function tc(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function nc(){return!0}function a0(){return!1}function ui(n){function i(o,u,p,g,b){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?nc:a0,this.isPropagationStopped=a0,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=ui(ds),Al=_({},ds,{view:0,detail:0}),SE=ui(Al),gh,_h,Rl,ac=_({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Rl&&(Rl&&n.type==="mousemove"?(gh=n.screenX-Rl.screenX,_h=n.screenY-Rl.screenY):_h=gh=0,Rl=n),gh)},movementY:function(n){return"movementY"in n?n.movementY:_h}}),r0=ui(ac),yE=_({},ac,{dataTransfer:0}),ME=ui(yE),EE=_({},Al,{relatedTarget:0}),vh=ui(EE),bE=_({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=ui(bE),AE=_({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),RE=ui(AE),CE=_({},ds,{data:0}),s0=ui(CE),wE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NE(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=UE[n])?!!i[n]:!1}function xh(){return NE}var LE=_({},Al,{key:function(n){if(n.key){var i=wE[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=tc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?DE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xh,charCode:function(n){return n.type==="keypress"?tc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),OE=ui(LE),PE=_({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o0=ui(PE),BE=_({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xh}),IE=ui(BE),zE=_({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),FE=ui(zE),HE=_({},ac,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),GE=ui(HE),VE=_({},ds,{newState:0,oldState:0}),kE=ui(VE),XE=[9,13,27,32],Sh=Ia&&"CompositionEvent"in window,Cl=null;Ia&&"documentMode"in document&&(Cl=document.documentMode);var WE=Ia&&"TextEvent"in window&&!Cl,l0=Ia&&(!Sh||Cl&&8<Cl&&11>=Cl),u0=" ",c0=!1;function f0(n,i){switch(n){case"keyup":return XE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var io=!1;function YE(n,i){switch(n){case"compositionend":return h0(i);case"keypress":return i.which!==32?null:(c0=!0,u0);case"textInput":return n=i.data,n===u0&&c0?null:n;default:return null}}function qE(n,i){if(io)return n==="compositionend"||!Sh&&f0(n,i)?(n=i0(),ec=mh=Mr=null,io=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return l0&&i.locale!=="ko"?null:i.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!jE[n.type]:i==="textarea"}function p0(n,i,o,u){to?no?no.push(u):no=[u]:to=u,i=qc(i,"onChange"),0<i.length&&(o=new ic("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var wl=null,Dl=null;function ZE(n){Kv(n,0)}function rc(n){var i=hs(n);if(Ht(i))return n}function m0(n,i){if(n==="change")return i}var g0=!1;if(Ia){var yh;if(Ia){var Mh="oninput"in document;if(!Mh){var _0=document.createElement("div");_0.setAttribute("oninput","return;"),Mh=typeof _0.oninput=="function"}yh=Mh}else yh=!1;g0=yh&&(!document.documentMode||9<document.documentMode)}function v0(){wl&&(wl.detachEvent("onpropertychange",x0),Dl=wl=null)}function x0(n){if(n.propertyName==="value"&&rc(Dl)){var i=[];p0(i,Dl,n,hh(n)),n0(ZE,i)}}function KE(n,i,o){n==="focusin"?(v0(),wl=i,Dl=o,wl.attachEvent("onpropertychange",x0)):n==="focusout"&&v0()}function QE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rc(Dl)}function JE(n,i){if(n==="click")return rc(i)}function $E(n,i){if(n==="input"||n==="change")return rc(i)}function eb(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Si=typeof Object.is=="function"?Object.is:eb;function Ul(n,i){if(Si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!xt.call(i,p)||!Si(n[p],i[p]))return!1}return!0}function S0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function y0(n,i){var o=S0(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=S0(o)}}function M0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?M0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function E0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=$e(n.document);i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=$e(n.document)}return i}function Eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var tb=Ia&&"documentMode"in document&&11>=document.documentMode,ao=null,bh=null,Nl=null,Th=!1;function b0(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Th||ao==null||ao!==$e(u)||(u=ao,"selectionStart"in u&&Eh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Nl&&Ul(Nl,u)||(Nl=u,u=qc(bh,"onSelect"),0<u.length&&(i=new ic("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ao)))}function ps(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ro={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Ah={},T0={};Ia&&(T0=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function ms(n){if(Ah[n])return Ah[n];if(!ro[n])return n;var i=ro[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in T0)return Ah[n]=i[o];return n}var A0=ms("animationend"),R0=ms("animationiteration"),C0=ms("animationstart"),nb=ms("transitionrun"),ib=ms("transitionstart"),ab=ms("transitioncancel"),w0=ms("transitionend"),D0=new Map,Rh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rh.push("scrollEnd");function ra(n,i){D0.set(n,i),re(i,[n])}var sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Gi=[],so=0,Ch=0;function oc(){for(var n=so,i=Ch=so=0;i<n;){var o=Gi[i];Gi[i++]=null;var u=Gi[i];Gi[i++]=null;var p=Gi[i];Gi[i++]=null;var g=Gi[i];if(Gi[i++]=null,u!==null&&p!==null){var b=u.pending;b===null?p.next=p:(p.next=b.next,b.next=p),u.pending=p}g!==0&&U0(o,p,g)}}function lc(n,i,o,u){Gi[so++]=n,Gi[so++]=i,Gi[so++]=o,Gi[so++]=u,Ch|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function wh(n,i,o,u){return lc(n,i,o,u),uc(n)}function gs(n,i){return lc(n,null,null,i),uc(n)}function U0(n,i,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&i!==null&&(p=31-ze(o),n=g.hiddenUpdates,u=n[p],u===null?n[p]=[i]:u.push(i),i.lane=o|536870912),g):null}function uc(n){if(50<eu)throw eu=0,zd=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var oo={};function rb(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(n,i,o,u){return new rb(n,i,o,u)}function Dh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function za(n,i){var o=n.alternate;return o===null?(o=yi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function N0(n,i){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function cc(n,i,o,u,p,g){var b=0;if(u=n,typeof n=="function")Dh(n)&&(b=1);else if(typeof n=="string")b=c1(n,o,be.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case T:return n=yi(31,o,i,p),n.elementType=T,n.lanes=g,n;case M:return _s(o.children,p,g,i);case y:b=8,p|=24;break;case S:return n=yi(12,o,i,p|2),n.elementType=S,n.lanes=g,n;case w:return n=yi(13,o,i,p),n.elementType=w,n.lanes=g,n;case P:return n=yi(19,o,i,p),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:b=10;break e;case R:b=9;break e;case D:b=11;break e;case O:b=14;break e;case F:b=16,u=null;break e}b=29,o=Error(a(130,n===null?"null":typeof n,"")),u=null}return i=yi(b,o,i,p),i.elementType=n,i.type=u,i.lanes=g,i}function _s(n,i,o,u){return n=yi(7,n,u,i),n.lanes=o,n}function Uh(n,i,o){return n=yi(6,n,null,i),n.lanes=o,n}function L0(n){var i=yi(18,null,null,0);return i.stateNode=n,i}function Nh(n,i,o){return i=yi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var O0=new WeakMap;function Vi(n,i){if(typeof n=="object"&&n!==null){var o=O0.get(n);return o!==void 0?o:(i={value:n,source:i,stack:k(i)},O0.set(n,i),i)}return{value:n,source:i,stack:k(i)}}var lo=[],uo=0,fc=null,Ll=0,ki=[],Xi=0,Er=null,xa=1,Sa="";function Fa(n,i){lo[uo++]=Ll,lo[uo++]=fc,fc=n,Ll=i}function P0(n,i,o){ki[Xi++]=xa,ki[Xi++]=Sa,ki[Xi++]=Er,Er=n;var u=xa;n=Sa;var p=32-ze(u)-1;u&=~(1<<p),o+=1;var g=32-ze(i)+p;if(30<g){var b=p-p%5;g=(u&(1<<b)-1).toString(32),u>>=b,p-=b,xa=1<<32-ze(i)+p|o<<p|u,Sa=g+n}else xa=1<<g|o<<p|u,Sa=n}function Lh(n){n.return!==null&&(Fa(n,1),P0(n,1,0))}function Oh(n){for(;n===fc;)fc=lo[--uo],lo[uo]=null,Ll=lo[--uo],lo[uo]=null;for(;n===Er;)Er=ki[--Xi],ki[Xi]=null,Sa=ki[--Xi],ki[Xi]=null,xa=ki[--Xi],ki[Xi]=null}function B0(n,i){ki[Xi++]=xa,ki[Xi++]=Sa,ki[Xi++]=Er,xa=i.id,Sa=i.overflow,Er=n}var Wn=null,nn=null,Rt=!1,br=null,Wi=!1,Ph=Error(a(519));function Tr(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Vi(i,n)),Ph}function I0(n){var i=n.stateNode,o=n.type,u=n.memoizedProps;switch(i[xn]=n,i[Fn]=u,o){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(o=0;o<nu.length;o++)Mt(nu[o],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),Pa(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Vn(i,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||u.suppressHydrationWarning===!0||ex(i.textContent,o)?(u.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),u.onScroll!=null&&Mt("scroll",i),u.onScrollEnd!=null&&Mt("scrollend",i),u.onClick!=null&&(i.onclick=Ba),i=!0):i=!1,i||Tr(n,!0)}function z0(n){for(Wn=n.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Wn=Wn.return}}function co(n){if(n!==Wn)return!1;if(!Rt)return z0(n),Rt=!0,!1;var i=n.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||$d(n.type,n.memoizedProps)),o=!o),o&&nn&&Tr(n),z0(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));nn=ux(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));nn=ux(n)}else i===27?(i=nn,Fr(n.type)?(n=ap,ap=null,nn=n):nn=i):nn=Wn?qi(n.stateNode.nextSibling):null;return!0}function vs(){nn=Wn=null,Rt=!1}function Bh(){var n=br;return n!==null&&(di===null?di=n:di.push.apply(di,n),br=null),n}function Ol(n){br===null?br=[n]:br.push(n)}var Ih=B(null),xs=null,Ha=null;function Ar(n,i,o){pe(Ih,i._currentValue),i._currentValue=o}function Ga(n){n._currentValue=Ih.current,te(Ih)}function zh(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Fh(n,i,o,u){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var b=p.child;g=g.firstContext;e:for(;g!==null;){var U=g;g=p;for(var V=0;V<i.length;V++)if(U.context===i[V]){g.lanes|=o,U=g.alternate,U!==null&&(U.lanes|=o),zh(g.return,o,n),u||(b=null);break e}g=U.next}}else if(p.tag===18){if(b=p.return,b===null)throw Error(a(341));b.lanes|=o,g=b.alternate,g!==null&&(g.lanes|=o),zh(b,o,n),b=null}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}}function fo(n,i,o,u){n=null;for(var p=i,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var b=p.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var U=p.type;Si(p.pendingProps.value,b.value)||(n!==null?n.push(U):n=[U])}}else if(p===de.current){if(b=p.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(ou):n=[ou])}p=p.return}n!==null&&Fh(i,n,o,u),i.flags|=262144}function hc(n){for(n=n.firstContext;n!==null;){if(!Si(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ss(n){xs=n,Ha=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Yn(n){return F0(xs,n)}function dc(n,i){return xs===null&&Ss(n),F0(n,i)}function F0(n,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},Ha===null){if(n===null)throw Error(a(308));Ha=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Ha=Ha.next=i;return o}var sb=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(o){return o()})}},ob=r.unstable_scheduleCallback,lb=r.unstable_NormalPriority,Sn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hh(){return{controller:new sb,data:new Map,refCount:0}}function Pl(n){n.refCount--,n.refCount===0&&ob(lb,function(){n.controller.abort()})}var Bl=null,Gh=0,ho=0,po=null;function ub(n,i){if(Bl===null){var o=Bl=[];Gh=0,ho=Xd(),po={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Gh++,i.then(H0,H0),i}function H0(){if(--Gh===0&&Bl!==null){po!==null&&(po.status="fulfilled");var n=Bl;Bl=null,ho=0,po=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function cb(n,i){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var p=0;p<o.length;p++)(0,o[p])(i)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var G0=I.S;I.S=function(n,i){bv=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ub(n,i),G0!==null&&G0(n,i)};var ys=B(null);function Vh(){var n=ys.current;return n!==null?n:Qt.pooledCache}function pc(n,i){i===null?pe(ys,ys.current):pe(ys,i.pool)}function V0(){var n=Vh();return n===null?null:{parent:Sn._currentValue,pool:n}}var mo=Error(a(460)),kh=Error(a(474)),mc=Error(a(542)),gc={then:function(){}};function k0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function X0(n,i,o){switch(o=n[o],o===void 0?n.push(i):o!==i&&(i.then(Ba,Ba),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Y0(n),n;default:if(typeof i.status=="string")i.then(Ba,Ba);else{if(n=Qt,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=u}},function(u){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Y0(n),n}throw Es=i,mo}}function Ms(n){try{var i=n._init;return i(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Es=o,mo):o}}var Es=null;function W0(){if(Es===null)throw Error(a(459));var n=Es;return Es=null,n}function Y0(n){if(n===mo||n===mc)throw Error(a(483))}var go=null,Il=0;function _c(n){var i=Il;return Il+=1,go===null&&(go=[]),X0(go,n,i)}function zl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function vc(n,i){throw i.$$typeof===v?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function q0(n){function i(K,X){if(n){var ne=K.deletions;ne===null?(K.deletions=[X],K.flags|=16):ne.push(X)}}function o(K,X){if(!n)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function u(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function p(K,X){return K=za(K,X),K.index=0,K.sibling=null,K}function g(K,X,ne){return K.index=ne,n?(ne=K.alternate,ne!==null?(ne=ne.index,ne<X?(K.flags|=67108866,X):ne):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function b(K){return n&&K.alternate===null&&(K.flags|=67108866),K}function U(K,X,ne,ve){return X===null||X.tag!==6?(X=Uh(ne,K.mode,ve),X.return=K,X):(X=p(X,ne),X.return=K,X)}function V(K,X,ne,ve){var et=ne.type;return et===M?ge(K,X,ne.props.children,ve,ne.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===F&&Ms(et)===X.type)?(X=p(X,ne.props),zl(X,ne),X.return=K,X):(X=cc(ne.type,ne.key,ne.props,null,K.mode,ve),zl(X,ne),X.return=K,X)}function ie(K,X,ne,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Nh(ne,K.mode,ve),X.return=K,X):(X=p(X,ne.children||[]),X.return=K,X)}function ge(K,X,ne,ve,et){return X===null||X.tag!==7?(X=_s(ne,K.mode,ve,et),X.return=K,X):(X=p(X,ne),X.return=K,X)}function ye(K,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uh(""+X,K.mode,ne),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return ne=cc(X.type,X.key,X.props,null,K.mode,ne),zl(ne,X),ne.return=K,ne;case E:return X=Nh(X,K.mode,ne),X.return=K,X;case F:return X=Ms(X),ye(K,X,ne)}if(ee(X)||Y(X))return X=_s(X,K.mode,ne,null),X.return=K,X;if(typeof X.then=="function")return ye(K,_c(X),ne);if(X.$$typeof===C)return ye(K,dc(K,X),ne);vc(K,X)}return null}function se(K,X,ne,ve){var et=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return et!==null?null:U(K,X,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:return ne.key===et?V(K,X,ne,ve):null;case E:return ne.key===et?ie(K,X,ne,ve):null;case F:return ne=Ms(ne),se(K,X,ne,ve)}if(ee(ne)||Y(ne))return et!==null?null:ge(K,X,ne,ve,null);if(typeof ne.then=="function")return se(K,X,_c(ne),ve);if(ne.$$typeof===C)return se(K,X,dc(K,ne),ve);vc(K,ne)}return null}function fe(K,X,ne,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(ne)||null,U(X,K,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case x:return K=K.get(ve.key===null?ne:ve.key)||null,V(X,K,ve,et);case E:return K=K.get(ve.key===null?ne:ve.key)||null,ie(X,K,ve,et);case F:return ve=Ms(ve),fe(K,X,ne,ve,et)}if(ee(ve)||Y(ve))return K=K.get(ne)||null,ge(X,K,ve,et,null);if(typeof ve.then=="function")return fe(K,X,ne,_c(ve),et);if(ve.$$typeof===C)return fe(K,X,ne,dc(X,ve),et);vc(X,ve)}return null}function qe(K,X,ne,ve){for(var et=null,Lt=null,Je=X,dt=X=0,bt=null;Je!==null&&dt<ne.length;dt++){Je.index>dt?(bt=Je,Je=null):bt=Je.sibling;var Ot=se(K,Je,ne[dt],ve);if(Ot===null){Je===null&&(Je=bt);break}n&&Je&&Ot.alternate===null&&i(K,Je),X=g(Ot,X,dt),Lt===null?et=Ot:Lt.sibling=Ot,Lt=Ot,Je=bt}if(dt===ne.length)return o(K,Je),Rt&&Fa(K,dt),et;if(Je===null){for(;dt<ne.length;dt++)Je=ye(K,ne[dt],ve),Je!==null&&(X=g(Je,X,dt),Lt===null?et=Je:Lt.sibling=Je,Lt=Je);return Rt&&Fa(K,dt),et}for(Je=u(Je);dt<ne.length;dt++)bt=fe(Je,K,dt,ne[dt],ve),bt!==null&&(n&&bt.alternate!==null&&Je.delete(bt.key===null?dt:bt.key),X=g(bt,X,dt),Lt===null?et=bt:Lt.sibling=bt,Lt=bt);return n&&Je.forEach(function(Xr){return i(K,Xr)}),Rt&&Fa(K,dt),et}function it(K,X,ne,ve){if(ne==null)throw Error(a(151));for(var et=null,Lt=null,Je=X,dt=X=0,bt=null,Ot=ne.next();Je!==null&&!Ot.done;dt++,Ot=ne.next()){Je.index>dt?(bt=Je,Je=null):bt=Je.sibling;var Xr=se(K,Je,Ot.value,ve);if(Xr===null){Je===null&&(Je=bt);break}n&&Je&&Xr.alternate===null&&i(K,Je),X=g(Xr,X,dt),Lt===null?et=Xr:Lt.sibling=Xr,Lt=Xr,Je=bt}if(Ot.done)return o(K,Je),Rt&&Fa(K,dt),et;if(Je===null){for(;!Ot.done;dt++,Ot=ne.next())Ot=ye(K,Ot.value,ve),Ot!==null&&(X=g(Ot,X,dt),Lt===null?et=Ot:Lt.sibling=Ot,Lt=Ot);return Rt&&Fa(K,dt),et}for(Je=u(Je);!Ot.done;dt++,Ot=ne.next())Ot=fe(Je,K,dt,Ot.value,ve),Ot!==null&&(n&&Ot.alternate!==null&&Je.delete(Ot.key===null?dt:Ot.key),X=g(Ot,X,dt),Lt===null?et=Ot:Lt.sibling=Ot,Lt=Ot);return n&&Je.forEach(function(y1){return i(K,y1)}),Rt&&Fa(K,dt),et}function Kt(K,X,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===M&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:e:{for(var et=ne.key;X!==null;){if(X.key===et){if(et=ne.type,et===M){if(X.tag===7){o(K,X.sibling),ve=p(X,ne.props.children),ve.return=K,K=ve;break e}}else if(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===F&&Ms(et)===X.type){o(K,X.sibling),ve=p(X,ne.props),zl(ve,ne),ve.return=K,K=ve;break e}o(K,X);break}else i(K,X);X=X.sibling}ne.type===M?(ve=_s(ne.props.children,K.mode,ve,ne.key),ve.return=K,K=ve):(ve=cc(ne.type,ne.key,ne.props,null,K.mode,ve),zl(ve,ne),ve.return=K,K=ve)}return b(K);case E:e:{for(et=ne.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){o(K,X.sibling),ve=p(X,ne.children||[]),ve.return=K,K=ve;break e}else{o(K,X);break}else i(K,X);X=X.sibling}ve=Nh(ne,K.mode,ve),ve.return=K,K=ve}return b(K);case F:return ne=Ms(ne),Kt(K,X,ne,ve)}if(ee(ne))return qe(K,X,ne,ve);if(Y(ne)){if(et=Y(ne),typeof et!="function")throw Error(a(150));return ne=et.call(ne),it(K,X,ne,ve)}if(typeof ne.then=="function")return Kt(K,X,_c(ne),ve);if(ne.$$typeof===C)return Kt(K,X,dc(K,ne),ve);vc(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(o(K,X.sibling),ve=p(X,ne),ve.return=K,K=ve):(o(K,X),ve=Uh(ne,K.mode,ve),ve.return=K,K=ve),b(K)):o(K,X)}return function(K,X,ne,ve){try{Il=0;var et=Kt(K,X,ne,ve);return go=null,et}catch(Je){if(Je===mo||Je===mc)throw Je;var Lt=yi(29,Je,null,K.mode);return Lt.lanes=ve,Lt.return=K,Lt}}}var bs=q0(!0),j0=q0(!1),Rr=!1;function Xh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Cr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function wr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,i=uc(n),U0(n,null,o),i}return lc(n,u,i,o),uc(n)}function Fl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,xl(n,o)}}function Yh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?p=g=i:g=g.next=i}else p=g=i;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}var qh=!1;function Hl(){if(qh){var n=po;if(n!==null)throw n}}function Gl(n,i,o,u){qh=!1;var p=n.updateQueue;Rr=!1;var g=p.firstBaseUpdate,b=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var V=U,ie=V.next;V.next=null,b===null?g=ie:b.next=ie,b=V;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,U=ge.lastBaseUpdate,U!==b&&(U===null?ge.firstBaseUpdate=ie:U.next=ie,ge.lastBaseUpdate=V))}if(g!==null){var ye=p.baseState;b=0,ge=ie=V=null,U=g;do{var se=U.lane&-536870913,fe=se!==U.lane;if(fe?(Et&se)===se:(u&se)===se){se!==0&&se===ho&&(qh=!0),ge!==null&&(ge=ge.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var qe=n,it=U;se=i;var Kt=o;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){ye=qe.call(Kt,ye,se);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,se=typeof qe=="function"?qe.call(Kt,ye,se):qe,se==null)break e;ye=_({},ye,se);break e;case 2:Rr=!0}}se=U.callback,se!==null&&(n.flags|=64,fe&&(n.flags|=8192),fe=p.callbacks,fe===null?p.callbacks=[se]:fe.push(se))}else fe={lane:se,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ge===null?(ie=ge=fe,V=ye):ge=ge.next=fe,b|=se;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;fe=U,U=fe.next,fe.next=null,p.lastBaseUpdate=fe,p.shared.pending=null}}while(!0);ge===null&&(V=ye),p.baseState=V,p.firstBaseUpdate=ie,p.lastBaseUpdate=ge,g===null&&(p.shared.lanes=0),Or|=b,n.lanes=b,n.memoizedState=ye}}function Z0(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function K0(n,i){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Z0(o[n],i)}var _o=B(null),xc=B(0);function Q0(n,i){n=Ka,pe(xc,n),pe(_o,i),Ka=n|i.baseLanes}function jh(){pe(xc,Ka),pe(_o,_o.current)}function Zh(){Ka=xc.current,te(_o),te(xc)}var Mi=B(null),Yi=null;function Dr(n){var i=n.alternate;pe(gn,gn.current&1),pe(Mi,n),Yi===null&&(i===null||_o.current!==null||i.memoizedState!==null)&&(Yi=n)}function Kh(n){pe(gn,gn.current),pe(Mi,n),Yi===null&&(Yi=n)}function J0(n){n.tag===22?(pe(gn,gn.current),pe(Mi,n),Yi===null&&(Yi=n)):Ur()}function Ur(){pe(gn,gn.current),pe(Mi,Mi.current)}function Ei(n){te(Mi),Yi===n&&(Yi=null),te(gn)}var gn=B(0);function Sc(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||np(o)||ip(o)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Va=0,ft=null,jt=null,yn=null,yc=!1,vo=!1,Ts=!1,Mc=0,Vl=0,xo=null,fb=0;function dn(){throw Error(a(321))}function Qh(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Si(n[o],i[o]))return!1;return!0}function Jh(n,i,o,u,p,g){return Va=g,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=n===null||n.memoizedState===null?P_:dd,Ts=!1,g=o(u,p),Ts=!1,vo&&(g=e_(i,o,u,p)),$0(n),g}function $0(n){I.H=Wl;var i=jt!==null&&jt.next!==null;if(Va=0,yn=jt=ft=null,yc=!1,Vl=0,xo=null,i)throw Error(a(300));n===null||Mn||(n=n.dependencies,n!==null&&hc(n)&&(Mn=!0))}function e_(n,i,o,u){ft=n;var p=0;do{if(vo&&(xo=null),Vl=0,vo=!1,25<=p)throw Error(a(301));if(p+=1,yn=jt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}I.H=B_,g=i(o,u)}while(vo);return g}function hb(){var n=I.H,i=n.useState()[0];return i=typeof i.then=="function"?kl(i):i,n=n.useState()[0],(jt!==null?jt.memoizedState:null)!==n&&(ft.flags|=1024),i}function $h(){var n=Mc!==0;return Mc=0,n}function ed(n,i,o){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~o}function td(n){if(yc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}yc=!1}Va=0,yn=jt=ft=null,vo=!1,Vl=Mc=0,xo=null}function ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?ft.memoizedState=yn=n:yn=yn.next=n,yn}function _n(){if(jt===null){var n=ft.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var i=yn===null?ft.memoizedState:yn.next;if(i!==null)yn=i,jt=n;else{if(n===null)throw ft.alternate===null?Error(a(467)):Error(a(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},yn===null?ft.memoizedState=yn=n:yn=yn.next=n}return yn}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(n){var i=Vl;return Vl+=1,xo===null&&(xo=[]),n=X0(xo,n,i),i=ft,(yn===null?i.memoizedState:yn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?P_:dd),n}function bc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return kl(n);if(n.$$typeof===C)return Yn(n)}throw Error(a(438,String(n)))}function nd(n){var i=null,o=ft.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var u=ft.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=Ec(),ft.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(n),u=0;u<n;u++)o[u]=L;return i.index++,o}function ka(n,i){return typeof i=="function"?i(n):i}function Tc(n){var i=_n();return id(i,jt,n)}function id(n,i,o){var u=n.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var p=n.baseQueue,g=u.pending;if(g!==null){if(p!==null){var b=p.next;p.next=g.next,g.next=b}i.baseQueue=p=g,u.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{i=p.next;var U=b=null,V=null,ie=i,ge=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(Et&ye)===ye:(Va&ye)===ye){var se=ie.revertLane;if(se===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===ho&&(ge=!0);else if((Va&se)===se){ie=ie.next,se===ho&&(ge=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(U=V=ye,b=g):V=V.next=ye,ft.lanes|=se,Or|=se;ye=ie.action,Ts&&o(g,ye),g=ie.hasEagerState?ie.eagerState:o(g,ye)}else se={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(U=V=se,b=g):V=V.next=se,ft.lanes|=ye,Or|=ye;ie=ie.next}while(ie!==null&&ie!==i);if(V===null?b=g:V.next=U,!Si(g,n.memoizedState)&&(Mn=!0,ge&&(o=po,o!==null)))throw o;n.memoizedState=g,n.baseState=b,n.baseQueue=V,u.lastRenderedState=g}return p===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function ad(n){var i=_n(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,g=i.memoizedState;if(p!==null){o.pending=null;var b=p=p.next;do g=n(g,b.action),b=b.next;while(b!==p);Si(g,i.memoizedState)||(Mn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function t_(n,i,o){var u=ft,p=_n(),g=Rt;if(g){if(o===void 0)throw Error(a(407));o=o()}else o=i();var b=!Si((jt||p).memoizedState,o);if(b&&(p.memoizedState=o,Mn=!0),p=p.queue,od(a_.bind(null,u,p,n),[n]),p.getSnapshot!==i||b||yn!==null&&yn.memoizedState.tag&1){if(u.flags|=2048,So(9,{destroy:void 0},i_.bind(null,u,p,o,i),null),Qt===null)throw Error(a(349));g||(Va&127)!==0||n_(u,i,o)}return o}function n_(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=ft.updateQueue,i===null?(i=Ec(),ft.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function i_(n,i,o,u){i.value=o,i.getSnapshot=u,r_(i)&&s_(n)}function a_(n,i,o){return o(function(){r_(i)&&s_(n)})}function r_(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Si(n,o)}catch{return!0}}function s_(n){var i=gs(n,2);i!==null&&pi(i,n,2)}function rd(n){var i=ai();if(typeof n=="function"){var o=n;if(n=o(),Ts){Ge(!0);try{o()}finally{Ge(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i}function o_(n,i,o,u){return n.baseState=o,id(n,jt,typeof u=="function"?u:ka)}function db(n,i,o,u,p){if(Cc(n))throw Error(a(485));if(n=i.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){g.listeners.push(b)}};I.T!==null?o(!0):g.isTransition=!1,u(g),o=i.pending,o===null?(g.next=i.pending=g,l_(i,g)):(g.next=o.next,i.pending=o.next=g)}}function l_(n,i){var o=i.action,u=i.payload,p=n.state;if(i.isTransition){var g=I.T,b={};I.T=b;try{var U=o(p,u),V=I.S;V!==null&&V(b,U),u_(n,i,U)}catch(ie){sd(n,i,ie)}finally{g!==null&&b.types!==null&&(g.types=b.types),I.T=g}}else try{g=o(p,u),u_(n,i,g)}catch(ie){sd(n,i,ie)}}function u_(n,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){c_(n,i,u)},function(u){return sd(n,i,u)}):c_(n,i,o)}function c_(n,i,o){i.status="fulfilled",i.value=o,f_(i),n.state=o,i=n.pending,i!==null&&(o=i.next,o===i?n.pending=null:(o=o.next,i.next=o,l_(n,o)))}function sd(n,i,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=o,f_(i),i=i.next;while(i!==u)}n.action=null}function f_(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function h_(n,i){return i}function d_(n,i){if(Rt){var o=Qt.formState;if(o!==null){e:{var u=ft;if(Rt){if(nn){t:{for(var p=nn,g=Wi;p.nodeType!==8;){if(!g){p=null;break t}if(p=qi(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){nn=qi(p.nextSibling),u=p.data==="F!";break e}}Tr(u)}u=!1}u&&(i=o[0])}}return o=ai(),o.memoizedState=o.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h_,lastRenderedState:i},o.queue=u,o=N_.bind(null,ft,u),u.dispatch=o,u=rd(!1),g=hd.bind(null,ft,!1,u.queue),u=ai(),p={state:i,dispatch:null,action:n,pending:null},u.queue=p,o=db.bind(null,ft,p,g,o),p.dispatch=o,u.memoizedState=n,[i,o,!1]}function p_(n){var i=_n();return m_(i,jt,n)}function m_(n,i,o){if(i=id(n,i,h_)[0],n=Tc(ka)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=kl(i)}catch(b){throw b===mo?mc:b}else u=i;i=_n();var p=i.queue,g=p.dispatch;return o!==i.memoizedState&&(ft.flags|=2048,So(9,{destroy:void 0},pb.bind(null,p,o),null)),[u,g,n]}function pb(n,i){n.action=i}function g_(n){var i=_n(),o=jt;if(o!==null)return m_(i,o,n);_n(),i=i.memoizedState,o=_n();var u=o.queue.dispatch;return o.memoizedState=n,[i,u,!1]}function So(n,i,o,u){return n={tag:n,create:o,deps:u,inst:i,next:null},i=ft.updateQueue,i===null&&(i=Ec(),ft.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n),n}function __(){return _n().memoizedState}function Ac(n,i,o,u){var p=ai();ft.flags|=n,p.memoizedState=So(1|i,{destroy:void 0},o,u===void 0?null:u)}function Rc(n,i,o,u){var p=_n();u=u===void 0?null:u;var g=p.memoizedState.inst;jt!==null&&u!==null&&Qh(u,jt.memoizedState.deps)?p.memoizedState=So(i,g,o,u):(ft.flags|=n,p.memoizedState=So(1|i,g,o,u))}function v_(n,i){Ac(8390656,8,n,i)}function od(n,i){Rc(2048,8,n,i)}function mb(n){ft.flags|=4;var i=ft.updateQueue;if(i===null)i=Ec(),ft.updateQueue=i,i.events=[n];else{var o=i.events;o===null?i.events=[n]:o.push(n)}}function x_(n){var i=_n().memoizedState;return mb({ref:i,nextImpl:n}),function(){if((Ft&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function S_(n,i){return Rc(4,2,n,i)}function y_(n,i){return Rc(4,4,n,i)}function M_(n,i){if(typeof i=="function"){n=n();var o=i(n);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function E_(n,i,o){o=o!=null?o.concat([n]):null,Rc(4,4,M_.bind(null,i,n),o)}function ld(){}function b_(n,i){var o=_n();i=i===void 0?null:i;var u=o.memoizedState;return i!==null&&Qh(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function T_(n,i){var o=_n();i=i===void 0?null:i;var u=o.memoizedState;if(i!==null&&Qh(i,u[1]))return u[0];if(u=n(),Ts){Ge(!0);try{n()}finally{Ge(!1)}}return o.memoizedState=[u,i],u}function ud(n,i,o){return o===void 0||(Va&1073741824)!==0&&(Et&261930)===0?n.memoizedState=i:(n.memoizedState=o,n=Av(),ft.lanes|=n,Or|=n,o)}function A_(n,i,o,u){return Si(o,i)?o:_o.current!==null?(n=ud(n,o,u),Si(n,i)||(Mn=!0),n):(Va&42)===0||(Va&1073741824)!==0&&(Et&261930)===0?(Mn=!0,n.memoizedState=o):(n=Av(),ft.lanes|=n,Or|=n,i)}function R_(n,i,o,u,p){var g=H.p;H.p=g!==0&&8>g?g:8;var b=I.T,U={};I.T=U,hd(n,!1,i,o);try{var V=p(),ie=I.S;if(ie!==null&&ie(U,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ge=cb(V,u);Xl(n,i,ge,Ai(n))}else Xl(n,i,u,Ai(n))}catch(ye){Xl(n,i,{then:function(){},status:"rejected",reason:ye},Ai())}finally{H.p=g,b!==null&&U.types!==null&&(b.types=U.types),I.T=b}}function gb(){}function cd(n,i,o,u){if(n.tag!==5)throw Error(a(476));var p=C_(n).queue;R_(n,p,i,J,o===null?gb:function(){return w_(n),o(u)})}function C_(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:J},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:o},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function w_(n){var i=C_(n);i.next===null&&(i=n.alternate.memoizedState),Xl(n,i.next.queue,{},Ai())}function fd(){return Yn(ou)}function D_(){return _n().memoizedState}function U_(){return _n().memoizedState}function _b(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var o=Ai();n=Cr(o);var u=wr(i,n,o);u!==null&&(pi(u,i,o),Fl(u,i,o)),i={cache:Hh()},n.payload=i;return}i=i.return}}function vb(n,i,o){var u=Ai();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Cc(n)?L_(i,o):(o=wh(n,i,o,u),o!==null&&(pi(o,n,u),O_(o,i,u)))}function N_(n,i,o){var u=Ai();Xl(n,i,o,u)}function Xl(n,i,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Cc(n))L_(i,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,U=g(b,o);if(p.hasEagerState=!0,p.eagerState=U,Si(U,b))return lc(n,i,p,0),Qt===null&&oc(),!1}catch{}if(o=wh(n,i,p,u),o!==null)return pi(o,n,u),O_(o,i,u),!0}return!1}function hd(n,i,o,u){if(u={lane:2,revertLane:Xd(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Cc(n)){if(i)throw Error(a(479))}else i=wh(n,o,u,2),i!==null&&pi(i,n,2)}function Cc(n){var i=n.alternate;return n===ft||i!==null&&i===ft}function L_(n,i){vo=yc=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function O_(n,i,o){if((o&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,xl(n,o)}}var Wl={readContext:Yn,use:bc,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};Wl.useEffectEvent=dn;var P_={readContext:Yn,use:bc,useCallback:function(n,i){return ai().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:v_,useImperativeHandle:function(n,i,o){o=o!=null?o.concat([n]):null,Ac(4194308,4,M_.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ac(4194308,4,n,i)},useInsertionEffect:function(n,i){Ac(4,2,n,i)},useMemo:function(n,i){var o=ai();i=i===void 0?null:i;var u=n();if(Ts){Ge(!0);try{n()}finally{Ge(!1)}}return o.memoizedState=[u,i],u},useReducer:function(n,i,o){var u=ai();if(o!==void 0){var p=o(i);if(Ts){Ge(!0);try{o(i)}finally{Ge(!1)}}}else p=i;return u.memoizedState=u.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},u.queue=n,n=n.dispatch=vb.bind(null,ft,n),[u.memoizedState,n]},useRef:function(n){var i=ai();return n={current:n},i.memoizedState=n},useState:function(n){n=rd(n);var i=n.queue,o=N_.bind(null,ft,i);return i.dispatch=o,[n.memoizedState,o]},useDebugValue:ld,useDeferredValue:function(n,i){var o=ai();return ud(o,n,i)},useTransition:function(){var n=rd(!1);return n=R_.bind(null,ft,n.queue,!0,!1),ai().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,o){var u=ft,p=ai();if(Rt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),Qt===null)throw Error(a(349));(Et&127)!==0||n_(u,i,o)}p.memoizedState=o;var g={value:o,getSnapshot:i};return p.queue=g,v_(a_.bind(null,u,g,n),[n]),u.flags|=2048,So(9,{destroy:void 0},i_.bind(null,u,g,o,i),null),o},useId:function(){var n=ai(),i=Qt.identifierPrefix;if(Rt){var o=Sa,u=xa;o=(u&~(1<<32-ze(u)-1)).toString(32)+o,i="_"+i+"R_"+o,o=Mc++,0<o&&(i+="H"+o.toString(32)),i+="_"}else o=fb++,i="_"+i+"r_"+o.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:fd,useFormState:d_,useActionState:d_,useOptimistic:function(n){var i=ai();i.memoizedState=i.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=hd.bind(null,ft,!0,o),o.dispatch=i,[n,i]},useMemoCache:nd,useCacheRefresh:function(){return ai().memoizedState=_b.bind(null,ft)},useEffectEvent:function(n){var i=ai(),o={impl:n};return i.memoizedState=o,function(){if((Ft&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},dd={readContext:Yn,use:bc,useCallback:b_,useContext:Yn,useEffect:od,useImperativeHandle:E_,useInsertionEffect:S_,useLayoutEffect:y_,useMemo:T_,useReducer:Tc,useRef:__,useState:function(){return Tc(ka)},useDebugValue:ld,useDeferredValue:function(n,i){var o=_n();return A_(o,jt.memoizedState,n,i)},useTransition:function(){var n=Tc(ka)[0],i=_n().memoizedState;return[typeof n=="boolean"?n:kl(n),i]},useSyncExternalStore:t_,useId:D_,useHostTransitionStatus:fd,useFormState:p_,useActionState:p_,useOptimistic:function(n,i){var o=_n();return o_(o,jt,n,i)},useMemoCache:nd,useCacheRefresh:U_};dd.useEffectEvent=x_;var B_={readContext:Yn,use:bc,useCallback:b_,useContext:Yn,useEffect:od,useImperativeHandle:E_,useInsertionEffect:S_,useLayoutEffect:y_,useMemo:T_,useReducer:ad,useRef:__,useState:function(){return ad(ka)},useDebugValue:ld,useDeferredValue:function(n,i){var o=_n();return jt===null?ud(o,n,i):A_(o,jt.memoizedState,n,i)},useTransition:function(){var n=ad(ka)[0],i=_n().memoizedState;return[typeof n=="boolean"?n:kl(n),i]},useSyncExternalStore:t_,useId:D_,useHostTransitionStatus:fd,useFormState:g_,useActionState:g_,useOptimistic:function(n,i){var o=_n();return jt!==null?o_(o,jt,n,i):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:nd,useCacheRefresh:U_};B_.useEffectEvent=x_;function pd(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:_({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var md={enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Ai(),p=Cr(u);p.payload=i,o!=null&&(p.callback=o),i=wr(n,p,u),i!==null&&(pi(i,n,u),Fl(i,n,u))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Ai(),p=Cr(u);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=wr(n,p,u),i!==null&&(pi(i,n,u),Fl(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ai(),u=Cr(o);u.tag=2,i!=null&&(u.callback=i),i=wr(n,u,o),i!==null&&(pi(i,n,o),Fl(i,n,o))}};function I_(n,i,o,u,p,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,b):i.prototype&&i.prototype.isPureReactComponent?!Ul(o,u)||!Ul(p,g):!0}function z_(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&md.enqueueReplaceState(i,i.state,null)}function As(n,i){var o=i;if("ref"in i){o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}if(n=n.defaultProps){o===i&&(o=_({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function F_(n){sc(n)}function H_(n){console.error(n)}function G_(n){sc(n)}function wc(n,i){try{var o=n.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function V_(n,i,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function gd(n,i,o){return o=Cr(o),o.tag=3,o.payload={element:null},o.callback=function(){wc(n,i)},o}function k_(n){return n=Cr(n),n.tag=3,n}function X_(n,i,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;n.payload=function(){return p(g)},n.callback=function(){V_(i,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){V_(i,o,u),typeof p!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var U=u.stack;this.componentDidCatch(u.value,{componentStack:U!==null?U:""})})}function xb(n,i,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=o.alternate,i!==null&&fo(i,o,p,!0),o=Mi.current,o!==null){switch(o.tag){case 31:case 13:return Yi===null?Gc():o.alternate===null&&pn===0&&(pn=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===gc?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([u]):i.add(u),Gd(n,u,p)),!1;case 22:return o.flags|=65536,u===gc?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([u]):o.add(u)),Gd(n,u,p)),!1}throw Error(a(435,o.tag))}return Gd(n,u,p),Gc(),!1}if(Rt)return i=Mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,u!==Ph&&(n=Error(a(422),{cause:u}),Ol(Vi(n,o)))):(u!==Ph&&(i=Error(a(423),{cause:u}),Ol(Vi(i,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,u=Vi(u,o),p=gd(n.stateNode,u,p),Yh(n,p),pn!==4&&(pn=2)),!1;var g=Error(a(520),{cause:u});if(g=Vi(g,o),$l===null?$l=[g]:$l.push(g),pn!==4&&(pn=2),i===null)return!0;u=Vi(u,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=gd(o.stateNode,u,n),Yh(o,n),!1;case 1:if(i=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pr===null||!Pr.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=k_(p),X_(p,n,o,u),Yh(o,p),!1}o=o.return}while(o!==null);return!1}var _d=Error(a(461)),Mn=!1;function qn(n,i,o,u){i.child=n===null?j0(i,null,o,u):bs(i,n.child,o,u)}function W_(n,i,o,u,p){o=o.render;var g=i.ref;if("ref"in u){var b={};for(var U in u)U!=="ref"&&(b[U]=u[U])}else b=u;return Ss(i),u=Jh(n,i,o,b,g,p),U=$h(),n!==null&&!Mn?(ed(n,i,p),Xa(n,i,p)):(Rt&&U&&Lh(i),i.flags|=1,qn(n,i,u,p),i.child)}function Y_(n,i,o,u,p){if(n===null){var g=o.type;return typeof g=="function"&&!Dh(g)&&g.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=g,q_(n,i,g,u,p)):(n=cc(o.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!Td(n,p)){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ul,o(b,u)&&n.ref===i.ref)return Xa(n,i,p)}return i.flags|=1,n=za(g,u),n.ref=i.ref,n.return=i,i.child=n}function q_(n,i,o,u,p){if(n!==null){var g=n.memoizedProps;if(Ul(g,u)&&n.ref===i.ref)if(Mn=!1,i.pendingProps=u=g,Td(n,p))(n.flags&131072)!==0&&(Mn=!0);else return i.lanes=n.lanes,Xa(n,i,p)}return vd(n,i,o,u,p)}function j_(n,i,o,u){var p=u.children,g=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,n!==null){for(u=i.child=n.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~g}else u=0,i.child=null;return Z_(n,i,g,o,u)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&pc(i,g!==null?g.cachePool:null),g!==null?Q0(i,g):jh(),J0(i);else return u=i.lanes=536870912,Z_(n,i,g!==null?g.baseLanes|o:o,o,u)}else g!==null?(pc(i,g.cachePool),Q0(i,g),Ur(),i.memoizedState=null):(n!==null&&pc(i,null),jh(),Ur());return qn(n,i,p,o),i.child}function Yl(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Z_(n,i,o,u,p){var g=Vh();return g=g===null?null:{parent:Sn._currentValue,pool:g},i.memoizedState={baseLanes:o,cachePool:g},n!==null&&pc(i,null),jh(),J0(i),n!==null&&fo(n,i,u,!0),i.childLanes=p,null}function Dc(n,i){return i=Nc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function K_(n,i,o){return bs(i,n.child,null,o),n=Dc(i,i.pendingProps),n.flags|=2,Ei(i),i.memoizedState=null,n}function Sb(n,i,o){var u=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Rt){if(u.mode==="hidden")return n=Dc(i,u),i.lanes=536870912,Yl(null,n);if(Kh(i),(n=nn)?(n=lx(n,Wi),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Er!==null?{id:xa,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},o=L0(n),o.return=i,i.child=o,Wn=i,nn=null)):n=null,n===null)throw Tr(i);return i.lanes=536870912,null}return Dc(i,u)}var g=n.memoizedState;if(g!==null){var b=g.dehydrated;if(Kh(i),p)if(i.flags&256)i.flags&=-257,i=K_(n,i,o);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(Mn||fo(n,i,o,!1),p=(o&n.childLanes)!==0,Mn||p){if(u=Qt,u!==null&&(b=Ks(u,o),b!==0&&b!==g.retryLane))throw g.retryLane=b,gs(n,b),pi(u,n,b),_d;Gc(),i=K_(n,i,o)}else n=g.treeContext,nn=qi(b.nextSibling),Wn=i,Rt=!0,br=null,Wi=!1,n!==null&&B0(i,n),i=Dc(i,u),i.flags|=4096;return i}return n=za(n.child,{mode:u.mode,children:u.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Uc(n,i){var o=i.ref;if(o===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(n===null||n.ref!==o)&&(i.flags|=4194816)}}function vd(n,i,o,u,p){return Ss(i),o=Jh(n,i,o,u,void 0,p),u=$h(),n!==null&&!Mn?(ed(n,i,p),Xa(n,i,p)):(Rt&&u&&Lh(i),i.flags|=1,qn(n,i,o,p),i.child)}function Q_(n,i,o,u,p,g){return Ss(i),i.updateQueue=null,o=e_(i,u,o,p),$0(n),u=$h(),n!==null&&!Mn?(ed(n,i,g),Xa(n,i,g)):(Rt&&u&&Lh(i),i.flags|=1,qn(n,i,o,g),i.child)}function J_(n,i,o,u,p){if(Ss(i),i.stateNode===null){var g=oo,b=o.contextType;typeof b=="object"&&b!==null&&(g=Yn(b)),g=new o(u,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=md,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=u,g.state=i.memoizedState,g.refs={},Xh(i),b=o.contextType,g.context=typeof b=="object"&&b!==null?Yn(b):oo,g.state=i.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(pd(i,o,b,u),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(b=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),b!==g.state&&md.enqueueReplaceState(g,g.state,null),Gl(i,u,g,p),Hl(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){g=i.stateNode;var U=i.memoizedProps,V=As(o,U);g.props=V;var ie=g.context,ge=o.contextType;b=oo,typeof ge=="object"&&ge!==null&&(b=Yn(ge));var ye=o.getDerivedStateFromProps;ge=typeof ye=="function"||typeof g.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,ge||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(U||ie!==b)&&z_(i,g,u,b),Rr=!1;var se=i.memoizedState;g.state=se,Gl(i,u,g,p),Hl(),ie=i.memoizedState,U||se!==ie||Rr?(typeof ye=="function"&&(pd(i,o,ye,u),ie=i.memoizedState),(V=Rr||I_(i,o,V,u,se,ie,b))?(ge||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=ie),g.props=u,g.state=ie,g.context=b,u=V):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,Wh(n,i),b=i.memoizedProps,ge=As(o,b),g.props=ge,ye=i.pendingProps,se=g.context,ie=o.contextType,V=oo,typeof ie=="object"&&ie!==null&&(V=Yn(ie)),U=o.getDerivedStateFromProps,(ie=typeof U=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==ye||se!==V)&&z_(i,g,u,V),Rr=!1,se=i.memoizedState,g.state=se,Gl(i,u,g,p),Hl();var fe=i.memoizedState;b!==ye||se!==fe||Rr||n!==null&&n.dependencies!==null&&hc(n.dependencies)?(typeof U=="function"&&(pd(i,o,U,u),fe=i.memoizedState),(ge=Rr||I_(i,o,ge,u,se,fe,V)||n!==null&&n.dependencies!==null&&hc(n.dependencies))?(ie||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,fe,V),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,fe,V)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&se===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&se===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=fe),g.props=u,g.state=fe,g.context=V,u=ge):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&se===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&se===n.memoizedState||(i.flags|=1024),u=!1)}return g=u,Uc(n,i),u=(i.flags&128)!==0,g||u?(g=i.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,n!==null&&u?(i.child=bs(i,n.child,null,p),i.child=bs(i,null,o,p)):qn(n,i,o,p),i.memoizedState=g.state,n=i.child):n=Xa(n,i,p),n}function $_(n,i,o,u){return vs(),i.flags|=256,qn(n,i,o,u),i.child}var xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(n){return{baseLanes:n,cachePool:V0()}}function yd(n,i,o){return n=n!==null?n.childLanes&~o:0,i&&(n|=Ti),n}function ev(n,i,o){var u=i.pendingProps,p=!1,g=(i.flags&128)!==0,b;if((b=g)||(b=n!==null&&n.memoizedState===null?!1:(gn.current&2)!==0),b&&(p=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(Rt){if(p?Dr(i):Ur(),(n=nn)?(n=lx(n,Wi),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Er!==null?{id:xa,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},o=L0(n),o.return=i,i.child=o,Wn=i,nn=null)):n=null,n===null)throw Tr(i);return ip(n)?i.lanes=32:i.lanes=536870912,null}var U=u.children;return u=u.fallback,p?(Ur(),p=i.mode,U=Nc({mode:"hidden",children:U},p),u=_s(u,p,o,null),U.return=i,u.return=i,U.sibling=u,i.child=U,u=i.child,u.memoizedState=Sd(o),u.childLanes=yd(n,b,o),i.memoizedState=xd,Yl(null,u)):(Dr(i),Md(i,U))}var V=n.memoizedState;if(V!==null&&(U=V.dehydrated,U!==null)){if(g)i.flags&256?(Dr(i),i.flags&=-257,i=Ed(n,i,o)):i.memoizedState!==null?(Ur(),i.child=n.child,i.flags|=128,i=null):(Ur(),U=u.fallback,p=i.mode,u=Nc({mode:"visible",children:u.children},p),U=_s(U,p,o,null),U.flags|=2,u.return=i,U.return=i,u.sibling=U,i.child=u,bs(i,n.child,null,o),u=i.child,u.memoizedState=Sd(o),u.childLanes=yd(n,b,o),i.memoizedState=xd,i=Yl(null,u));else if(Dr(i),ip(U)){if(b=U.nextSibling&&U.nextSibling.dataset,b)var ie=b.dgst;b=ie,u=Error(a(419)),u.stack="",u.digest=b,Ol({value:u,source:null,stack:null}),i=Ed(n,i,o)}else if(Mn||fo(n,i,o,!1),b=(o&n.childLanes)!==0,Mn||b){if(b=Qt,b!==null&&(u=Ks(b,o),u!==0&&u!==V.retryLane))throw V.retryLane=u,gs(n,u),pi(b,n,u),_d;np(U)||Gc(),i=Ed(n,i,o)}else np(U)?(i.flags|=192,i.child=n.child,i=null):(n=V.treeContext,nn=qi(U.nextSibling),Wn=i,Rt=!0,br=null,Wi=!1,n!==null&&B0(i,n),i=Md(i,u.children),i.flags|=4096);return i}return p?(Ur(),U=u.fallback,p=i.mode,V=n.child,ie=V.sibling,u=za(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,ie!==null?U=za(ie,U):(U=_s(U,p,o,null),U.flags|=2),U.return=i,u.return=i,u.sibling=U,i.child=u,Yl(null,u),u=i.child,U=n.child.memoizedState,U===null?U=Sd(o):(p=U.cachePool,p!==null?(V=Sn._currentValue,p=p.parent!==V?{parent:V,pool:V}:p):p=V0(),U={baseLanes:U.baseLanes|o,cachePool:p}),u.memoizedState=U,u.childLanes=yd(n,b,o),i.memoizedState=xd,Yl(n.child,u)):(Dr(i),o=n.child,n=o.sibling,o=za(o,{mode:"visible",children:u.children}),o.return=i,o.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=o,i.memoizedState=null,o)}function Md(n,i){return i=Nc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Nc(n,i){return n=yi(22,n,null,i),n.lanes=0,n}function Ed(n,i,o){return bs(i,n.child,null,o),n=Md(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function tv(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),zh(n.return,i,o)}function bd(n,i,o,u,p,g){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:g}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=o,b.tailMode=p,b.treeForkCount=g)}function nv(n,i,o){var u=i.pendingProps,p=u.revealOrder,g=u.tail;u=u.children;var b=gn.current,U=(b&2)!==0;if(U?(b=b&1|2,i.flags|=128):b&=1,pe(gn,b),qn(n,i,u,o),u=Rt?Ll:0,!U&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tv(n,o,i);else if(n.tag===19)tv(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=i.child,p=null;o!==null;)n=o.alternate,n!==null&&Sc(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=i.child,i.child=null):(p=o.sibling,o.sibling=null),bd(i,!1,p,o,g,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Sc(n)===null){i.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}bd(i,!0,o,null,g,u);break;case"together":bd(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Xa(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,(o&i.childLanes)===0)if(n!==null){if(fo(n,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,o=za(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=za(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Td(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&hc(n)))}function yb(n,i,o){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Ar(i,Sn,n.memoizedState.cache),vs();break;case 27:case 5:ke(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Ar(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Kh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Dr(i),i.flags|=128,null):(o&i.child.childLanes)!==0?ev(n,i,o):(Dr(i),n=Xa(n,i,o),n!==null?n.sibling:null);Dr(i);break;case 19:var p=(n.flags&128)!==0;if(u=(o&i.childLanes)!==0,u||(fo(n,i,o,!1),u=(o&i.childLanes)!==0),p){if(u)return nv(n,i,o);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),pe(gn,gn.current),u)break;return null;case 22:return i.lanes=0,j_(n,i,o,i.pendingProps);case 24:Ar(i,Sn,n.memoizedState.cache)}return Xa(n,i,o)}function iv(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps)Mn=!0;else{if(!Td(n,o)&&(i.flags&128)===0)return Mn=!1,yb(n,i,o);Mn=(n.flags&131072)!==0}else Mn=!1,Rt&&(i.flags&1048576)!==0&&P0(i,Ll,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(n=Ms(i.elementType),i.type=n,typeof n=="function")Dh(n)?(u=As(n,u),i.tag=1,i=J_(null,i,n,u,o)):(i.tag=0,i=vd(null,i,n,u,o));else{if(n!=null){var p=n.$$typeof;if(p===D){i.tag=11,i=W_(null,i,n,u,o);break e}else if(p===O){i.tag=14,i=Y_(null,i,n,u,o);break e}}throw i=le(n)||n,Error(a(306,i,""))}}return i;case 0:return vd(n,i,i.type,i.pendingProps,o);case 1:return u=i.type,p=As(u,i.pendingProps),J_(n,i,u,p,o);case 3:e:{if(we(i,i.stateNode.containerInfo),n===null)throw Error(a(387));u=i.pendingProps;var g=i.memoizedState;p=g.element,Wh(n,i),Gl(i,u,null,o);var b=i.memoizedState;if(u=b.cache,Ar(i,Sn,u),u!==g.cache&&Fh(i,[Sn],o,!0),Hl(),u=b.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=$_(n,i,u,o);break e}else if(u!==p){p=Vi(Error(a(424)),i),Ol(p),i=$_(n,i,u,o);break e}else for(n=i.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,nn=qi(n.firstChild),Wn=i,Rt=!0,br=null,Wi=!0,o=j0(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vs(),u===p){i=Xa(n,i,o);break e}qn(n,i,u,o)}i=i.child}return i;case 26:return Uc(n,i),n===null?(o=px(i.type,null,i.pendingProps,null))?i.memoizedState=o:Rt||(o=i.type,n=i.pendingProps,u=jc(ae.current).createElement(o),u[xn]=i,u[Fn]=n,jn(u,o,n),N(u),i.stateNode=u):i.memoizedState=px(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return ke(i),n===null&&Rt&&(u=i.stateNode=fx(i.type,i.pendingProps,ae.current),Wn=i,Wi=!0,p=nn,Fr(i.type)?(ap=p,nn=qi(u.firstChild)):nn=p),qn(n,i,i.pendingProps.children,o),Uc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Rt&&((p=u=nn)&&(u=Qb(u,i.type,i.pendingProps,Wi),u!==null?(i.stateNode=u,Wn=i,nn=qi(u.firstChild),Wi=!1,p=!0):p=!1),p||Tr(i)),ke(i),p=i.type,g=i.pendingProps,b=n!==null?n.memoizedProps:null,u=g.children,$d(p,g)?u=null:b!==null&&$d(p,b)&&(i.flags|=32),i.memoizedState!==null&&(p=Jh(n,i,hb,null,null,o),ou._currentValue=p),Uc(n,i),qn(n,i,u,o),i.child;case 6:return n===null&&Rt&&((n=o=nn)&&(o=Jb(o,i.pendingProps,Wi),o!==null?(i.stateNode=o,Wn=i,nn=null,n=!0):n=!1),n||Tr(i)),null;case 13:return ev(n,i,o);case 4:return we(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=bs(i,null,u,o):qn(n,i,u,o),i.child;case 11:return W_(n,i,i.type,i.pendingProps,o);case 7:return qn(n,i,i.pendingProps,o),i.child;case 8:return qn(n,i,i.pendingProps.children,o),i.child;case 12:return qn(n,i,i.pendingProps.children,o),i.child;case 10:return u=i.pendingProps,Ar(i,i.type,u.value),qn(n,i,u.children,o),i.child;case 9:return p=i.type._context,u=i.pendingProps.children,Ss(i),p=Yn(p),u=u(p),i.flags|=1,qn(n,i,u,o),i.child;case 14:return Y_(n,i,i.type,i.pendingProps,o);case 15:return q_(n,i,i.type,i.pendingProps,o);case 19:return nv(n,i,o);case 31:return Sb(n,i,o);case 22:return j_(n,i,o,i.pendingProps);case 24:return Ss(i),u=Yn(Sn),n===null?(p=Vh(),p===null&&(p=Qt,g=Hh(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),i.memoizedState={parent:u,cache:p},Xh(i),Ar(i,Sn,p)):((n.lanes&o)!==0&&(Wh(n,i),Gl(i,null,null,o),Hl()),p=n.memoizedState,g=i.memoizedState,p.parent!==u?(p={parent:u,cache:u},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),Ar(i,Sn,u)):(u=g.cache,Ar(i,Sn,u),u!==p.cache&&Fh(i,[Sn],o,!0))),qn(n,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Wa(n){n.flags|=4}function Ad(n,i,o,u,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(Dv())n.flags|=8192;else throw Es=gc,kh}else n.flags&=-16777217}function av(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!xx(i))if(Dv())n.flags|=8192;else throw Es=gc,kh}function Lc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Vt():536870912,n.lanes|=i,bo|=i)}function ql(n,i){if(!Rt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function an(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Mb(n,i,o){var u=i.pendingProps;switch(Oh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return o=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ga(Sn),Xe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(co(i)?Wa(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bh())),an(i),null;case 26:var p=i.type,g=i.memoizedState;return n===null?(Wa(i),g!==null?(an(i),av(i,g)):(an(i),Ad(i,p,null,u,o))):g?g!==n.memoizedState?(Wa(i),an(i),av(i,g)):(an(i),i.flags&=-16777217):(n=n.memoizedProps,n!==u&&Wa(i),an(i),Ad(i,p,n,u,o)),null;case 27:if(_t(i),o=ae.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&Wa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return an(i),null}n=be.current,co(i)?I0(i):(n=fx(p,u,o),i.stateNode=n,Wa(i))}return an(i),null;case 5:if(_t(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&Wa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(g=be.current,co(i))I0(i);else{var b=jc(ae.current);switch(g){case 1:g=b.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=b.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=b.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?g.multiple=!0:u.size&&(g.size=u.size);break;default:g=typeof u.is=="string"?b.createElement(p,{is:u.is}):b.createElement(p)}}g[xn]=i,g[Fn]=u;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)g.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=g;e:switch(jn(g,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Wa(i)}}return an(i),Ad(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,o),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==u&&Wa(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(n=ae.current,co(i)){if(n=i.stateNode,o=i.memoizedProps,u=null,p=Wn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}n[xn]=i,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||ex(n.nodeValue,o)),n||Tr(i,!0)}else n=jc(n).createTextNode(u),n[xn]=i,i.stateNode=n}return an(i),null;case 31:if(o=i.memoizedState,n===null||n.memoizedState!==null){if(u=co(i),o!==null){if(n===null){if(!u)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[xn]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),n=!1}else o=Bh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return i.flags&256?(Ei(i),i):(Ei(i),null);if((i.flags&128)!==0)throw Error(a(558))}return an(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=co(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[xn]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),p=!1}else p=Bh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(Ei(i),i):(Ei(i),null)}return Ei(i),(i.flags&128)!==0?(i.lanes=o,i):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=i.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),g=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)),o!==n&&o&&(i.child.flags|=8192),Lc(i,i.updateQueue),an(i),null);case 4:return Xe(),n===null&&jd(i.stateNode.containerInfo),an(i),null;case 10:return Ga(i.type),an(i),null;case 19:if(te(gn),u=i.memoizedState,u===null)return an(i),null;if(p=(i.flags&128)!==0,g=u.rendering,g===null)if(p)ql(u,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(g=Sc(n),g!==null){for(i.flags|=128,ql(u,!1),n=g.updateQueue,i.updateQueue=n,Lc(i,n),i.subtreeFlags=0,n=o,o=i.child;o!==null;)N0(o,n),o=o.sibling;return pe(gn,gn.current&1|2),Rt&&Fa(i,u.treeForkCount),i.child}n=n.sibling}u.tail!==null&&A()>zc&&(i.flags|=128,p=!0,ql(u,!1),i.lanes=4194304)}else{if(!p)if(n=Sc(g),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,Lc(i,n),ql(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Rt)return an(i),null}else 2*A()-u.renderingStartTime>zc&&o!==536870912&&(i.flags|=128,p=!0,ql(u,!1),i.lanes=4194304);u.isBackwards?(g.sibling=i.child,i.child=g):(n=u.last,n!==null?n.sibling=g:i.child=g,u.last=g)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=A(),n.sibling=null,o=gn.current,pe(gn,p?o&1|2:o&1),Rt&&Fa(i,u.treeForkCount),n):(an(i),null);case 22:case 23:return Ei(i),Zh(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(o&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),o=i.updateQueue,o!==null&&Lc(i,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048),n!==null&&te(ys),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ga(Sn),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Eb(n,i){switch(Oh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ga(Sn),Xe(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return _t(i),null;case 31:if(i.memoizedState!==null){if(Ei(i),i.alternate===null)throw Error(a(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Ei(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return te(gn),null;case 4:return Xe(),null;case 10:return Ga(i.type),null;case 22:case 23:return Ei(i),Zh(),n!==null&&te(ys),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ga(Sn),null;case 25:return null;default:return null}}function rv(n,i){switch(Oh(i),i.tag){case 3:Ga(Sn),Xe();break;case 26:case 27:case 5:_t(i);break;case 4:Xe();break;case 31:i.memoizedState!==null&&Ei(i);break;case 13:Ei(i);break;case 19:te(gn);break;case 10:Ga(i.type);break;case 22:case 23:Ei(i),Zh(),n!==null&&te(ys);break;case 24:Ga(Sn)}}function jl(n,i){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&n)===n){u=void 0;var g=o.create,b=o.inst;u=g(),b.destroy=u}o=o.next}while(o!==p)}}catch(U){Wt(i,i.return,U)}}function Nr(n,i,o){try{var u=i.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&n)===n){var b=u.inst,U=b.destroy;if(U!==void 0){b.destroy=void 0,p=i;var V=o,ie=U;try{ie()}catch(ge){Wt(p,V,ge)}}}u=u.next}while(u!==g)}}catch(ge){Wt(i,i.return,ge)}}function sv(n){var i=n.updateQueue;if(i!==null){var o=n.stateNode;try{K0(i,o)}catch(u){Wt(n,n.return,u)}}}function ov(n,i,o){o.props=As(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Wt(n,i,u)}}function Zl(n,i){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(p){Wt(n,i,p)}}function ya(n,i){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){Wt(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){Wt(n,i,p)}else o.current=null}function lv(n){var i=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){Wt(n,n.return,p)}}function Rd(n,i,o){try{var u=n.stateNode;Wb(u,n.type,o,i),u[Fn]=i}catch(p){Wt(n,n.return,p)}}function uv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Fr(n.type)||n.tag===4}function Cd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Fr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wd(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(n),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ba));else if(u!==4&&(u===27&&Fr(n.type)&&(o=n.stateNode,i=null),n=n.child,n!==null))for(wd(n,i,o),n=n.sibling;n!==null;)wd(n,i,o),n=n.sibling}function Oc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(u===27&&Fr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Oc(n,i,o),n=n.sibling;n!==null;)Oc(n,i,o),n=n.sibling}function cv(n){var i=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);jn(i,u,o),i[xn]=n,i[Fn]=o}catch(g){Wt(n,n.return,g)}}var Ya=!1,En=!1,Dd=!1,fv=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function bb(n,i){if(n=n.containerInfo,Qd=tf,n=E0(n),Eh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,U=-1,V=-1,ie=0,ge=0,ye=n,se=null;t:for(;;){for(var fe;ye!==o||p!==0&&ye.nodeType!==3||(U=b+p),ye!==g||u!==0&&ye.nodeType!==3||(V=b+u),ye.nodeType===3&&(b+=ye.nodeValue.length),(fe=ye.firstChild)!==null;)se=ye,ye=fe;for(;;){if(ye===n)break t;if(se===o&&++ie===p&&(U=b),se===g&&++ge===u&&(V=b),(fe=ye.nextSibling)!==null)break;ye=se,se=ye.parentNode}ye=fe}o=U===-1||V===-1?null:{start:U,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jd={focusedElem:n,selectionRange:o},tf=!1,Ln=i;Ln!==null;)if(i=Ln,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ln=n;else for(;Ln!==null;){switch(i=Ln,g=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=i,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var qe=As(o.type,p);n=u.getSnapshotBeforeUpdate(qe,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(it){Wt(o,o.return,it)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,o=n.nodeType,o===9)tp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":tp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Ln=n;break}Ln=i.return}}function hv(n,i,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ja(n,o),u&4&&jl(5,o);break;case 1:if(ja(n,o),u&4)if(n=o.stateNode,i===null)try{n.componentDidMount()}catch(b){Wt(o,o.return,b)}else{var p=As(o.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Wt(o,o.return,b)}}u&64&&sv(o),u&512&&Zl(o,o.return);break;case 3:if(ja(n,o),u&64&&(n=o.updateQueue,n!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{K0(n,i)}catch(b){Wt(o,o.return,b)}}break;case 27:i===null&&u&4&&cv(o);case 26:case 5:ja(n,o),i===null&&u&4&&lv(o),u&512&&Zl(o,o.return);break;case 12:ja(n,o);break;case 31:ja(n,o),u&4&&mv(n,o);break;case 13:ja(n,o),u&4&&gv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=Lb.bind(null,o),$b(n,o))));break;case 22:if(u=o.memoizedState!==null||Ya,!u){i=i!==null&&i.memoizedState!==null||En,p=Ya;var g=En;Ya=u,(En=i)&&!g?Za(n,o,(o.subtreeFlags&8772)!==0):ja(n,o),Ya=p,En=g}break;case 30:break;default:ja(n,o)}}function dv(n){var i=n.alternate;i!==null&&(n.alternate=null,dv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&El(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var sn=null,ci=!1;function qa(n,i,o){for(o=o.child;o!==null;)pv(n,i,o),o=o.sibling}function pv(n,i,o){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ae,o)}catch{}switch(o.tag){case 26:En||ya(o,i),qa(n,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:En||ya(o,i);var u=sn,p=ci;Fr(o.type)&&(sn=o.stateNode,ci=!1),qa(n,i,o),au(o.stateNode),sn=u,ci=p;break;case 5:En||ya(o,i);case 6:if(u=sn,p=ci,sn=null,qa(n,i,o),sn=u,ci=p,sn!==null)if(ci)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(o.stateNode)}catch(g){Wt(o,i,g)}else try{sn.removeChild(o.stateNode)}catch(g){Wt(o,i,g)}break;case 18:sn!==null&&(ci?(n=sn,sx(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),No(n)):sx(sn,o.stateNode));break;case 4:u=sn,p=ci,sn=o.stateNode.containerInfo,ci=!0,qa(n,i,o),sn=u,ci=p;break;case 0:case 11:case 14:case 15:Nr(2,o,i),En||Nr(4,o,i),qa(n,i,o);break;case 1:En||(ya(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"&&ov(o,i,u)),qa(n,i,o);break;case 21:qa(n,i,o);break;case 22:En=(u=En)||o.memoizedState!==null,qa(n,i,o),En=u;break;default:qa(n,i,o)}}function mv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{No(n)}catch(o){Wt(i,i.return,o)}}}function gv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{No(n)}catch(o){Wt(i,i.return,o)}}function Tb(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new fv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new fv),i;default:throw Error(a(435,n.tag))}}function Pc(n,i){var o=Tb(n);i.forEach(function(u){if(!o.has(u)){o.add(u);var p=Ob.bind(null,n,u);u.then(p,p)}})}function fi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=n,b=i,U=b;e:for(;U!==null;){switch(U.tag){case 27:if(Fr(U.type)){sn=U.stateNode,ci=!1;break e}break;case 5:sn=U.stateNode,ci=!1;break e;case 3:case 4:sn=U.stateNode.containerInfo,ci=!0;break e}U=U.return}if(sn===null)throw Error(a(160));pv(g,b,p),sn=null,ci=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)_v(i,n),i=i.sibling}var sa=null;function _v(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:fi(i,n),hi(n),u&4&&(Nr(3,n,n.return),jl(3,n),Nr(5,n,n.return));break;case 1:fi(i,n),hi(n),u&512&&(En||o===null||ya(o,o.return)),u&64&&Ya&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=sa;if(fi(i,n),hi(n),u&512&&(En||o===null||ya(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[fs]||g[xn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),jn(g,u,o),g[xn]=n,N(g),u=g;break e;case"link":var b=_x("link","href",p).get(u+(o.href||""));if(b){for(var U=0;U<b.length;U++)if(g=b[U],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(U,1);break t}}g=p.createElement(u),jn(g,u,o),p.head.appendChild(g);break;case"meta":if(b=_x("meta","content",p).get(u+(o.content||""))){for(U=0;U<b.length;U++)if(g=b[U],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(U,1);break t}}g=p.createElement(u),jn(g,u,o),p.head.appendChild(g);break;default:throw Error(a(468,u))}g[xn]=n,N(g),u=g}n.stateNode=u}else vx(p,n.type,n.stateNode);else n.stateNode=gx(p,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?vx(p,n.type,n.stateNode):gx(p,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Rd(n,n.memoizedProps,o.memoizedProps)}break;case 27:fi(i,n),hi(n),u&512&&(En||o===null||ya(o,o.return)),o!==null&&u&4&&Rd(n,n.memoizedProps,o.memoizedProps);break;case 5:if(fi(i,n),hi(n),u&512&&(En||o===null||ya(o,o.return)),n.flags&32){p=n.stateNode;try{Cn(p,"")}catch(qe){Wt(n,n.return,qe)}}u&4&&n.stateNode!=null&&(p=n.memoizedProps,Rd(n,p,o!==null?o.memoizedProps:p)),u&1024&&(Dd=!0);break;case 6:if(fi(i,n),hi(n),u&4){if(n.stateNode===null)throw Error(a(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(qe){Wt(n,n.return,qe)}}break;case 3:if(Qc=null,p=sa,sa=Zc(i.containerInfo),fi(i,n),sa=p,hi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(qe){Wt(n,n.return,qe)}Dd&&(Dd=!1,vv(n));break;case 4:u=sa,sa=Zc(n.stateNode.containerInfo),fi(i,n),hi(n),sa=u;break;case 12:fi(i,n),hi(n);break;case 31:fi(i,n),hi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Pc(n,u)));break;case 13:fi(i,n),hi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ic=A()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Pc(n,u)));break;case 22:p=n.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,ie=Ya,ge=En;if(Ya=ie||p,En=ge||V,fi(i,n),En=ge,Ya=ie,hi(n),u&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(o===null||V||Ya||En||Rs(n)),o=null,i=n;;){if(i.tag===5||i.tag===26){if(o===null){V=o=i;try{if(g=V.stateNode,p)b=g.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{U=V.stateNode;var ye=V.memoizedProps.style,se=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;U.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(qe){Wt(V,V.return,qe)}}}else if(i.tag===6){if(o===null){V=i;try{V.stateNode.nodeValue=p?"":V.memoizedProps}catch(qe){Wt(V,V.return,qe)}}}else if(i.tag===18){if(o===null){V=i;try{var fe=V.stateNode;p?ox(fe,!0):ox(V.stateNode,!1)}catch(qe){Wt(V,V.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Pc(n,o))));break;case 19:fi(i,n),hi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Pc(n,u)));break;case 30:break;case 21:break;default:fi(i,n),hi(n)}}function hi(n){var i=n.flags;if(i&2){try{for(var o,u=n.return;u!==null;){if(uv(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,g=Cd(n);Oc(n,g,p);break;case 5:var b=o.stateNode;o.flags&32&&(Cn(b,""),o.flags&=-33);var U=Cd(n);Oc(n,U,b);break;case 3:case 4:var V=o.stateNode.containerInfo,ie=Cd(n);wd(n,ie,V);break;default:throw Error(a(161))}}catch(ge){Wt(n,n.return,ge)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function vv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;vv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ja(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)hv(n,i.alternate,i),i=i.sibling}function Rs(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Nr(4,i,i.return),Rs(i);break;case 1:ya(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&ov(i,i.return,o),Rs(i);break;case 27:au(i.stateNode);case 26:case 5:ya(i,i.return),Rs(i);break;case 22:i.memoizedState===null&&Rs(i);break;case 30:Rs(i);break;default:Rs(i)}n=n.sibling}}function Za(n,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,p=n,g=i,b=g.flags;switch(g.tag){case 0:case 11:case 15:Za(p,g,o),jl(4,g);break;case 1:if(Za(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(ie){Wt(u,u.return,ie)}if(u=g,p=u.updateQueue,p!==null){var U=u.stateNode;try{var V=p.shared.hiddenCallbacks;if(V!==null)for(p.shared.hiddenCallbacks=null,p=0;p<V.length;p++)Z0(V[p],U)}catch(ie){Wt(u,u.return,ie)}}o&&b&64&&sv(g),Zl(g,g.return);break;case 27:cv(g);case 26:case 5:Za(p,g,o),o&&u===null&&b&4&&lv(g),Zl(g,g.return);break;case 12:Za(p,g,o);break;case 31:Za(p,g,o),o&&b&4&&mv(p,g);break;case 13:Za(p,g,o),o&&b&4&&gv(p,g);break;case 22:g.memoizedState===null&&Za(p,g,o),Zl(g,g.return);break;case 30:break;default:Za(p,g,o)}i=i.sibling}}function Ud(n,i){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Pl(o))}function Nd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Pl(n))}function oa(n,i,o,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)xv(n,i,o,u),i=i.sibling}function xv(n,i,o,u){var p=i.flags;switch(i.tag){case 0:case 11:case 15:oa(n,i,o,u),p&2048&&jl(9,i);break;case 1:oa(n,i,o,u);break;case 3:oa(n,i,o,u),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Pl(n)));break;case 12:if(p&2048){oa(n,i,o,u),n=i.stateNode;try{var g=i.memoizedProps,b=g.id,U=g.onPostCommit;typeof U=="function"&&U(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(V){Wt(i,i.return,V)}}else oa(n,i,o,u);break;case 31:oa(n,i,o,u);break;case 13:oa(n,i,o,u);break;case 23:break;case 22:g=i.stateNode,b=i.alternate,i.memoizedState!==null?g._visibility&2?oa(n,i,o,u):Kl(n,i):g._visibility&2?oa(n,i,o,u):(g._visibility|=2,yo(n,i,o,u,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Ud(b,i);break;case 24:oa(n,i,o,u),p&2048&&Nd(i.alternate,i);break;default:oa(n,i,o,u)}}function yo(n,i,o,u,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var g=n,b=i,U=o,V=u,ie=b.flags;switch(b.tag){case 0:case 11:case 15:yo(g,b,U,V,p),jl(8,b);break;case 23:break;case 22:var ge=b.stateNode;b.memoizedState!==null?ge._visibility&2?yo(g,b,U,V,p):Kl(g,b):(ge._visibility|=2,yo(g,b,U,V,p)),p&&ie&2048&&Ud(b.alternate,b);break;case 24:yo(g,b,U,V,p),p&&ie&2048&&Nd(b.alternate,b);break;default:yo(g,b,U,V,p)}i=i.sibling}}function Kl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=n,u=i,p=u.flags;switch(u.tag){case 22:Kl(o,u),p&2048&&Ud(u.alternate,u);break;case 24:Kl(o,u),p&2048&&Nd(u.alternate,u);break;default:Kl(o,u)}i=i.sibling}}var Ql=8192;function Mo(n,i,o){if(n.subtreeFlags&Ql)for(n=n.child;n!==null;)Sv(n,i,o),n=n.sibling}function Sv(n,i,o){switch(n.tag){case 26:Mo(n,i,o),n.flags&Ql&&n.memoizedState!==null&&f1(o,sa,n.memoizedState,n.memoizedProps);break;case 5:Mo(n,i,o);break;case 3:case 4:var u=sa;sa=Zc(n.stateNode.containerInfo),Mo(n,i,o),sa=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=Ql,Ql=16777216,Mo(n,i,o),Ql=u):Mo(n,i,o));break;default:Mo(n,i,o)}}function yv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Jl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Ln=u,Ev(u,n)}yv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mv(n),n=n.sibling}function Mv(n){switch(n.tag){case 0:case 11:case 15:Jl(n),n.flags&2048&&Nr(9,n,n.return);break;case 3:Jl(n);break;case 12:Jl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Bc(n)):Jl(n);break;default:Jl(n)}}function Bc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Ln=u,Ev(u,n)}yv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Nr(8,i,i.return),Bc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,Bc(i));break;default:Bc(i)}n=n.sibling}}function Ev(n,i){for(;Ln!==null;){var o=Ln;switch(o.tag){case 0:case 11:case 15:Nr(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Pl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ln=u;else e:for(o=n;Ln!==null;){u=Ln;var p=u.sibling,g=u.return;if(dv(u),u===o){Ln=null;break e}if(p!==null){p.return=g,Ln=p;break e}Ln=g}}}var Ab={getCacheForType:function(n){var i=Yn(Sn),o=i.data.get(n);return o===void 0&&(o=n(),i.data.set(n,o)),o},cacheSignal:function(){return Yn(Sn).controller.signal}},Rb=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Qt=null,yt=null,Et=0,Xt=0,bi=null,Lr=!1,Eo=!1,Ld=!1,Ka=0,pn=0,Or=0,Cs=0,Od=0,Ti=0,bo=0,$l=null,di=null,Pd=!1,Ic=0,bv=0,zc=1/0,Fc=null,Pr=null,wn=0,Br=null,To=null,Qa=0,Bd=0,Id=null,Tv=null,eu=0,zd=null;function Ai(){return(Ft&2)!==0&&Et!==0?Et&-Et:I.T!==null?Xd():yl()}function Av(){if(Ti===0)if((Et&536870912)===0||Rt){var n=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),Ti=n}else Ti=536870912;return n=Mi.current,n!==null&&(n.flags|=32),Ti}function pi(n,i,o){(n===Qt&&(Xt===2||Xt===9)||n.cancelPendingCommit!==null)&&(Ao(n,0),Ir(n,Et,Ti,!1)),Jn(n,o),((Ft&2)===0||n!==Qt)&&(n===Qt&&((Ft&2)===0&&(Cs|=o),pn===4&&Ir(n,Et,Ti,!1)),Ma(n))}function Rv(n,i,o){if((Ft&6)!==0)throw Error(a(327));var u=!o&&(i&127)===0&&(i&n.expiredLanes)===0||De(n,i),p=u?Db(n,i):Hd(n,i,!0),g=u;do{if(p===0){Eo&&!u&&Ir(n,i,0,!1);break}else{if(o=n.current.alternate,g&&!Cb(o)){p=Hd(n,i,!1),g=!1;continue}if(p===2){if(g=i,n.errorRecoveryDisabledLanes&g)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var U=n;p=$l;var V=U.current.memoizedState.isDehydrated;if(V&&(Ao(U,b).flags|=256),b=Hd(U,b,!1),b!==2){if(Ld&&!V){U.errorRecoveryDisabledLanes|=g,Cs|=g,p=4;break e}g=di,di=p,g!==null&&(di===null?di=g:di.push.apply(di,g))}p=b}if(g=!1,p!==2)continue}}if(p===1){Ao(n,0),Ir(n,i,0,!0);break}e:{switch(u=n,g=p,g){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ir(u,i,Ti,!Lr);break e;case 2:di=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Ic+300-A(),10<p)){if(Ir(u,i,Ti,!Lr),Me(u,0,!0)!==0)break e;Qa=i,u.timeoutHandle=ax(Cv.bind(null,u,o,di,Fc,Pd,i,Ti,Cs,bo,Lr,g,"Throttled",-0,0),p);break e}Cv(u,o,di,Fc,Pd,i,Ti,Cs,bo,Lr,g,null,-0,0)}}break}while(!0);Ma(n)}function Cv(n,i,o,u,p,g,b,U,V,ie,ge,ye,se,fe){if(n.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ba},Sv(i,g,ye);var qe=(g&62914560)===g?Ic-A():(g&4194048)===g?bv-A():0;if(qe=h1(ye,qe),qe!==null){Qa=g,n.cancelPendingCommit=qe(Bv.bind(null,n,i,g,o,u,p,b,U,V,ge,ye,null,se,fe)),Ir(n,g,b,!ie);return}}Bv(n,i,g,o,u,p,b,U,V)}function Cb(n){for(var i=n;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!Si(g(),p))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ir(n,i,o,u){i&=~Od,i&=~Cs,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var p=i;0<p;){var g=31-ze(p),b=1<<g;u[g]=-1,p&=~b}o!==0&&Qu(n,o,i)}function Hc(){return(Ft&6)===0?(tu(0),!1):!0}function Fd(){if(yt!==null){if(Xt===0)var n=yt.return;else n=yt,Ha=xs=null,td(n),go=null,Il=0,n=yt;for(;n!==null;)rv(n.alternate,n),n=n.return;yt=null}}function Ao(n,i){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,jb(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Qa=0,Fd(),Qt=n,yt=o=za(n.current,null),Et=i,Xt=0,bi=null,Lr=!1,Eo=De(n,i),Ld=!1,bo=Ti=Od=Cs=Or=pn=0,di=$l=null,Pd=!1,(i&8)!==0&&(i|=i&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=i;0<u;){var p=31-ze(u),g=1<<p;i|=n[p],u&=~g}return Ka=i,oc(),o}function wv(n,i){ft=null,I.H=Wl,i===mo||i===mc?(i=W0(),Xt=3):i===kh?(i=W0(),Xt=4):Xt=i===_d?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bi=i,yt===null&&(pn=1,wc(n,Vi(i,n.current)))}function Dv(){var n=Mi.current;return n===null?!0:(Et&4194048)===Et?Yi===null:(Et&62914560)===Et||(Et&536870912)!==0?n===Yi:!1}function Uv(){var n=I.H;return I.H=Wl,n===null?Wl:n}function Nv(){var n=I.A;return I.A=Ab,n}function Gc(){pn=4,Lr||(Et&4194048)!==Et&&Mi.current!==null||(Eo=!0),(Or&134217727)===0&&(Cs&134217727)===0||Qt===null||Ir(Qt,Et,Ti,!1)}function Hd(n,i,o){var u=Ft;Ft|=2;var p=Uv(),g=Nv();(Qt!==n||Et!==i)&&(Fc=null,Ao(n,i)),i=!1;var b=pn;e:do try{if(Xt!==0&&yt!==null){var U=yt,V=bi;switch(Xt){case 8:Fd(),b=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(i=!0);var ie=Xt;if(Xt=0,bi=null,Ro(n,U,V,ie),o&&Eo){b=0;break e}break;default:ie=Xt,Xt=0,bi=null,Ro(n,U,V,ie)}}wb(),b=pn;break}catch(ge){wv(n,ge)}while(!0);return i&&n.shellSuspendCounter++,Ha=xs=null,Ft=u,I.H=p,I.A=g,yt===null&&(Qt=null,Et=0,oc()),b}function wb(){for(;yt!==null;)Lv(yt)}function Db(n,i){var o=Ft;Ft|=2;var u=Uv(),p=Nv();Qt!==n||Et!==i?(Fc=null,zc=A()+500,Ao(n,i)):Eo=De(n,i);e:do try{if(Xt!==0&&yt!==null){i=yt;var g=bi;t:switch(Xt){case 1:Xt=0,bi=null,Ro(n,i,g,1);break;case 2:case 9:if(k0(g)){Xt=0,bi=null,Ov(i);break}i=function(){Xt!==2&&Xt!==9||Qt!==n||(Xt=7),Ma(n)},g.then(i,i);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:k0(g)?(Xt=0,bi=null,Ov(i)):(Xt=0,bi=null,Ro(n,i,g,7));break;case 5:var b=null;switch(yt.tag){case 26:b=yt.memoizedState;case 5:case 27:var U=yt;if(b?xx(b):U.stateNode.complete){Xt=0,bi=null;var V=U.sibling;if(V!==null)yt=V;else{var ie=U.return;ie!==null?(yt=ie,Vc(ie)):yt=null}break t}}Xt=0,bi=null,Ro(n,i,g,5);break;case 6:Xt=0,bi=null,Ro(n,i,g,6);break;case 8:Fd(),pn=6;break e;default:throw Error(a(462))}}Ub();break}catch(ge){wv(n,ge)}while(!0);return Ha=xs=null,I.H=u,I.A=p,Ft=o,yt!==null?0:(Qt=null,Et=0,oc(),pn)}function Ub(){for(;yt!==null&&!He();)Lv(yt)}function Lv(n){var i=iv(n.alternate,n,Ka);n.memoizedProps=n.pendingProps,i===null?Vc(n):yt=i}function Ov(n){var i=n,o=i.alternate;switch(i.tag){case 15:case 0:i=Q_(o,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=Q_(o,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:td(i);default:rv(o,i),i=yt=N0(i,Ka),i=iv(o,i,Ka)}n.memoizedProps=n.pendingProps,i===null?Vc(n):yt=i}function Ro(n,i,o,u){Ha=xs=null,td(i),go=null,Il=0;var p=i.return;try{if(xb(n,p,i,o,Et)){pn=1,wc(n,Vi(o,n.current)),yt=null;return}}catch(g){if(p!==null)throw yt=p,g;pn=1,wc(n,Vi(o,n.current)),yt=null;return}i.flags&32768?(Rt||u===1?n=!0:Eo||(Et&536870912)!==0?n=!1:(Lr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Mi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Pv(i,n)):Vc(i)}function Vc(n){var i=n;do{if((i.flags&32768)!==0){Pv(i,Lr);return}n=i.return;var o=Mb(i.alternate,i,Ka);if(o!==null){yt=o;return}if(i=i.sibling,i!==null){yt=i;return}yt=i=n}while(i!==null);pn===0&&(pn=5)}function Pv(n,i){do{var o=Eb(n.alternate,n);if(o!==null){o.flags&=32767,yt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(n=n.sibling,n!==null)){yt=n;return}yt=n=o}while(n!==null);pn=6,yt=null}function Bv(n,i,o,u,p,g,b,U,V){n.cancelPendingCommit=null;do kc();while(wn!==0);if((Ft&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(g=i.lanes|i.childLanes,g|=Ch,na(n,o,g,b,U,V),n===Qt&&(yt=Qt=null,Et=0),To=i,Br=n,Qa=o,Bd=g,Id=p,Tv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Pb(he,function(){return Gv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,p=H.p,H.p=2,b=Ft,Ft|=4;try{bb(n,i,o)}finally{Ft=b,H.p=p,I.T=u}}wn=1,Iv(),zv(),Fv()}}function Iv(){if(wn===1){wn=0;var n=Br,i=To,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var u=H.p;H.p=2;var p=Ft;Ft|=4;try{_v(i,n);var g=Jd,b=E0(n.containerInfo),U=g.focusedElem,V=g.selectionRange;if(b!==U&&U&&U.ownerDocument&&M0(U.ownerDocument.documentElement,U)){if(V!==null&&Eh(U)){var ie=V.start,ge=V.end;if(ge===void 0&&(ge=ie),"selectionStart"in U)U.selectionStart=ie,U.selectionEnd=Math.min(ge,U.value.length);else{var ye=U.ownerDocument||document,se=ye&&ye.defaultView||window;if(se.getSelection){var fe=se.getSelection(),qe=U.textContent.length,it=Math.min(V.start,qe),Kt=V.end===void 0?it:Math.min(V.end,qe);!fe.extend&&it>Kt&&(b=Kt,Kt=it,it=b);var K=y0(U,it),X=y0(U,Kt);if(K&&X&&(fe.rangeCount!==1||fe.anchorNode!==K.node||fe.anchorOffset!==K.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var ne=ye.createRange();ne.setStart(K.node,K.offset),fe.removeAllRanges(),it>Kt?(fe.addRange(ne),fe.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),fe.addRange(ne))}}}}for(ye=[],fe=U;fe=fe.parentNode;)fe.nodeType===1&&ye.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<ye.length;U++){var ve=ye[U];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}tf=!!Qd,Jd=Qd=null}finally{Ft=p,H.p=u,I.T=o}}n.current=i,wn=2}}function zv(){if(wn===2){wn=0;var n=Br,i=To,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var u=H.p;H.p=2;var p=Ft;Ft|=4;try{hv(n,i.alternate,i)}finally{Ft=p,H.p=u,I.T=o}}wn=3}}function Fv(){if(wn===4||wn===3){wn=0,z();var n=Br,i=To,o=Qa,u=Tv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,To=Br=null,Hv(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Pr=null),Qs(o),i=i.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ae,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,p=H.p,H.p=2,I.T=null;try{for(var g=n.onRecoverableError,b=0;b<u.length;b++){var U=u[b];g(U.value,{componentStack:U.stack})}}finally{I.T=i,H.p=p}}(Qa&3)!==0&&kc(),Ma(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===zd?eu++:(eu=0,zd=n):eu=0,tu(0)}}function Hv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Pl(i)))}function kc(){return Iv(),zv(),Fv(),Gv()}function Gv(){if(wn!==5)return!1;var n=Br,i=Bd;Bd=0;var o=Qs(Qa),u=I.T,p=H.p;try{H.p=32>o?32:o,I.T=null,o=Id,Id=null;var g=Br,b=Qa;if(wn=0,To=Br=null,Qa=0,(Ft&6)!==0)throw Error(a(331));var U=Ft;if(Ft|=4,Mv(g.current),xv(g,g.current,b,o),Ft=U,tu(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ae,g)}catch{}return!0}finally{H.p=p,I.T=u,Hv(n,i)}}function Vv(n,i,o){i=Vi(o,i),i=gd(n.stateNode,i,2),n=wr(n,i,2),n!==null&&(Jn(n,2),Ma(n))}function Wt(n,i,o){if(n.tag===3)Vv(n,n,o);else for(;i!==null;){if(i.tag===3){Vv(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Pr===null||!Pr.has(u))){n=Vi(o,n),o=k_(2),u=wr(i,o,2),u!==null&&(X_(o,u,i,n),Jn(u,2),Ma(u));break}}i=i.return}}function Gd(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Rb;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(o)||(Ld=!0,p.add(o),n=Nb.bind(null,n,i,o),i.then(n,n))}function Nb(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Qt===n&&(Et&o)===o&&(pn===4||pn===3&&(Et&62914560)===Et&&300>A()-Ic?(Ft&2)===0&&Ao(n,0):Od|=o,bo===Et&&(bo=0)),Ma(n)}function kv(n,i){i===0&&(i=Vt()),n=gs(n,i),n!==null&&(Jn(n,i),Ma(n))}function Lb(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),kv(n,o)}function Ob(n,i){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),kv(n,o)}function Pb(n,i){return ct(n,i)}var Xc=null,Co=null,Vd=!1,Wc=!1,kd=!1,zr=0;function Ma(n){n!==Co&&n.next===null&&(Co===null?Xc=Co=n:Co=Co.next=n),Wc=!0,Vd||(Vd=!0,Ib())}function tu(n,i){if(!kd&&Wc){kd=!0;do for(var o=!1,u=Xc;u!==null;){if(n!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var b=u.suspendedLanes,U=u.pingedLanes;g=(1<<31-ze(42|n)+1)-1,g&=p&~(b&~U),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,qv(u,g))}else g=Et,g=Me(u,u===Qt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||De(u,g)||(o=!0,qv(u,g));u=u.next}while(o);kd=!1}}function Bb(){Xv()}function Xv(){Wc=Vd=!1;var n=0;zr!==0&&qb()&&(n=zr);for(var i=A(),o=null,u=Xc;u!==null;){var p=u.next,g=Wv(u,i);g===0?(u.next=null,o===null?Xc=p:o.next=p,p===null&&(Co=o)):(o=u,(n!==0||(g&3)!==0)&&(Wc=!0)),u=p}wn!==0&&wn!==5||tu(n),zr!==0&&(zr=0)}function Wv(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var b=31-ze(g),U=1<<b,V=p[b];V===-1?((U&o)===0||(U&u)!==0)&&(p[b]=st(U,i)):V<=i&&(n.expiredLanes|=U),g&=~U}if(i=Qt,o=Et,o=Me(n,n===i?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===i&&(Xt===2||Xt===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&St(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||De(n,o)){if(i=o&-o,i===n.callbackPriority)return i;switch(u!==null&&St(u),Qs(o)){case 2:case 8:o=Se;break;case 32:o=he;break;case 268435456:o=Ue;break;default:o=he}return u=Yv.bind(null,n),o=ct(o,u),n.callbackPriority=i,n.callbackNode=o,i}return u!==null&&u!==null&&St(u),n.callbackPriority=2,n.callbackNode=null,2}function Yv(n,i){if(wn!==0&&wn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(kc()&&n.callbackNode!==o)return null;var u=Et;return u=Me(n,n===Qt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Rv(n,u,i),Wv(n,A()),n.callbackNode!=null&&n.callbackNode===o?Yv.bind(null,n):null)}function qv(n,i){if(kc())return null;Rv(n,i,!0)}function Ib(){Zb(function(){(Ft&6)!==0?ct(me,Bb):Xv()})}function Xd(){if(zr===0){var n=ho;n===0&&(n=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),zr=n}return zr}function jv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:$u(""+n)}function Zv(n,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,n.id&&o.setAttribute("form",n.id),i.parentNode.insertBefore(o,i),n=new FormData(n),o.parentNode.removeChild(o),n}function zb(n,i,o,u,p){if(i==="submit"&&o&&o.stateNode===p){var g=jv((p[Fn]||null).action),b=u.submitter;b&&(i=(i=b[Fn]||null)?jv(i.formAction):b.getAttribute("formAction"),i!==null&&(g=i,b=null));var U=new ic("action","action",null,u,p);n.push({event:U,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(zr!==0){var V=b?Zv(p,b):new FormData(p);cd(o,{pending:!0,data:V,method:p.method,action:g},null,V)}}else typeof g=="function"&&(U.preventDefault(),V=b?Zv(p,b):new FormData(p),cd(o,{pending:!0,data:V,method:p.method,action:g},g,V))},currentTarget:p}]})}}for(var Wd=0;Wd<Rh.length;Wd++){var Yd=Rh[Wd],Fb=Yd.toLowerCase(),Hb=Yd[0].toUpperCase()+Yd.slice(1);ra(Fb,"on"+Hb)}ra(A0,"onAnimationEnd"),ra(R0,"onAnimationIteration"),ra(C0,"onAnimationStart"),ra("dblclick","onDoubleClick"),ra("focusin","onFocus"),ra("focusout","onBlur"),ra(nb,"onTransitionRun"),ra(ib,"onTransitionStart"),ra(ab,"onTransitionCancel"),ra(w0,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu));function Kv(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var b=u.length-1;0<=b;b--){var U=u[b],V=U.instance,ie=U.currentTarget;if(U=U.listener,V!==g&&p.isPropagationStopped())break e;g=U,p.currentTarget=ie;try{g(p)}catch(ge){sc(ge)}p.currentTarget=null,g=V}else for(b=0;b<u.length;b++){if(U=u[b],V=U.instance,ie=U.currentTarget,U=U.listener,V!==g&&p.isPropagationStopped())break e;g=U,p.currentTarget=ie;try{g(p)}catch(ge){sc(ge)}p.currentTarget=null,g=V}}}}function Mt(n,i){var o=i[Js];o===void 0&&(o=i[Js]=new Set);var u=n+"__bubble";o.has(u)||(Qv(i,n,2,!1),o.add(u))}function qd(n,i,o){var u=0;i&&(u|=4),Qv(o,n,u,i)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function jd(n){if(!n[Yc]){n[Yc]=!0,Z.forEach(function(o){o!=="selectionchange"&&(Gb.has(o)||qd(o,!1,n),qd(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Yc]||(i[Yc]=!0,qd("selectionchange",!1,i))}}function Qv(n,i,o,u){switch(Ax(i)){case 2:var p=m1;break;case 8:p=g1;break;default:p=up}o=p.bind(null,i,o,n),p=void 0,!ph||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,o,{capture:!0,passive:p}):n.addEventListener(i,o,!0):p!==void 0?n.addEventListener(i,o,{passive:p}):n.addEventListener(i,o,!1)}function Zd(n,i,o,u,p){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var U=u.stateNode.containerInfo;if(U===p)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===p)return;b=b.return}for(;U!==null;){if(b=xr(U),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){u=g=b;continue e}U=U.parentNode}}u=u.return}n0(function(){var ie=g,ge=hh(o),ye=[];e:{var se=D0.get(n);if(se!==void 0){var fe=ic,qe=n;switch(n){case"keypress":if(tc(o)===0)break e;case"keydown":case"keyup":fe=OE;break;case"focusin":qe="focus",fe=vh;break;case"focusout":qe="blur",fe=vh;break;case"beforeblur":case"afterblur":fe=vh;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=r0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=IE;break;case A0:case R0:case C0:fe=TE;break;case w0:fe=FE;break;case"scroll":case"scrollend":fe=SE;break;case"wheel":fe=GE;break;case"copy":case"cut":case"paste":fe=RE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=o0;break;case"toggle":case"beforetoggle":fe=kE}var it=(i&4)!==0,Kt=!it&&(n==="scroll"||n==="scrollend"),K=it?se!==null?se+"Capture":null:se;it=[];for(var X=ie,ne;X!==null;){var ve=X;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||K===null||(ve=bl(X,K),ve!=null&&it.push(iu(X,ve,ne))),Kt)break;X=X.return}0<it.length&&(se=new fe(se,qe,null,o,ge),ye.push({event:se,listeners:it}))}}if((i&7)===0){e:{if(se=n==="mouseover"||n==="pointerover",fe=n==="mouseout"||n==="pointerout",se&&o!==fh&&(qe=o.relatedTarget||o.fromElement)&&(xr(qe)||qe[ia]))break e;if((fe||se)&&(se=ge.window===ge?ge:(se=ge.ownerDocument)?se.defaultView||se.parentWindow:window,fe?(qe=o.relatedTarget||o.toElement,fe=ie,qe=qe?xr(qe):null,qe!==null&&(Kt=l(qe),it=qe.tag,qe!==Kt||it!==5&&it!==27&&it!==6)&&(qe=null)):(fe=null,qe=ie),fe!==qe)){if(it=r0,ve="onMouseLeave",K="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(it=o0,ve="onPointerLeave",K="onPointerEnter",X="pointer"),Kt=fe==null?se:hs(fe),ne=qe==null?se:hs(qe),se=new it(ve,X+"leave",fe,o,ge),se.target=Kt,se.relatedTarget=ne,ve=null,xr(ge)===ie&&(it=new it(K,X+"enter",qe,o,ge),it.target=ne,it.relatedTarget=Kt,ve=it),Kt=ve,fe&&qe)t:{for(it=Vb,K=fe,X=qe,ne=0,ve=K;ve;ve=it(ve))ne++;ve=0;for(var et=X;et;et=it(et))ve++;for(;0<ne-ve;)K=it(K),ne--;for(;0<ve-ne;)X=it(X),ve--;for(;ne--;){if(K===X||X!==null&&K===X.alternate){it=K;break t}K=it(K),X=it(X)}it=null}else it=null;fe!==null&&Jv(ye,se,fe,it,!1),qe!==null&&Kt!==null&&Jv(ye,Kt,qe,it,!0)}}e:{if(se=ie?hs(ie):window,fe=se.nodeName&&se.nodeName.toLowerCase(),fe==="select"||fe==="input"&&se.type==="file")var Lt=m0;else if(d0(se))if(g0)Lt=$E;else{Lt=QE;var Je=KE}else fe=se.nodeName,!fe||fe.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&aa(ie.elementType)&&(Lt=m0):Lt=JE;if(Lt&&(Lt=Lt(n,ie))){p0(ye,Lt,o,ge);break e}Je&&Je(n,se,ie),n==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&Gn(se,"number",se.value)}switch(Je=ie?hs(ie):window,n){case"focusin":(d0(Je)||Je.contentEditable==="true")&&(ao=Je,bh=ie,Nl=null);break;case"focusout":Nl=bh=ao=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,b0(ye,o,ge);break;case"selectionchange":if(tb)break;case"keydown":case"keyup":b0(ye,o,ge)}var dt;if(Sh)e:{switch(n){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else io?f0(n,o)&&(bt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(bt="onCompositionStart");bt&&(l0&&o.locale!=="ko"&&(io||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&io&&(dt=i0()):(Mr=ge,mh="value"in Mr?Mr.value:Mr.textContent,io=!0)),Je=qc(ie,bt),0<Je.length&&(bt=new s0(bt,n,null,o,ge),ye.push({event:bt,listeners:Je}),dt?bt.data=dt:(dt=h0(o),dt!==null&&(bt.data=dt)))),(dt=WE?YE(n,o):qE(n,o))&&(bt=qc(ie,"onBeforeInput"),0<bt.length&&(Je=new s0("onBeforeInput","beforeinput",null,o,ge),ye.push({event:Je,listeners:bt}),Je.data=dt)),zb(ye,n,ie,o,ge)}Kv(ye,i)})}function iu(n,i,o){return{instance:n,listener:i,currentTarget:o}}function qc(n,i){for(var o=i+"Capture",u=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=bl(n,o),p!=null&&u.unshift(iu(n,p,g)),p=bl(n,i),p!=null&&u.push(iu(n,p,g))),n.tag===3)return u;n=n.return}return[]}function Vb(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Jv(n,i,o,u,p){for(var g=i._reactName,b=[];o!==null&&o!==u;){var U=o,V=U.alternate,ie=U.stateNode;if(U=U.tag,V!==null&&V===u)break;U!==5&&U!==26&&U!==27||ie===null||(V=ie,p?(ie=bl(o,g),ie!=null&&b.unshift(iu(o,ie,V))):p||(ie=bl(o,g),ie!=null&&b.push(iu(o,ie,V)))),o=o.return}b.length!==0&&n.push({event:i,listeners:b})}var kb=/\r\n?/g,Xb=/\u0000|\uFFFD/g;function $v(n){return(typeof n=="string"?n:""+n).replace(kb,`
`).replace(Xb,"")}function ex(n,i){return i=$v(i),$v(n)===i}function Zt(n,i,o,u,p,g){switch(o){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Cn(n,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Cn(n,""+u);break;case"className":tt(n,"class",u);break;case"tabIndex":tt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":tt(n,o,u);break;case"style":eo(n,u,g);break;case"data":if(i!=="object"){tt(n,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=$u(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(i!=="input"&&Zt(n,i,"name",p.name,p,null),Zt(n,i,"formEncType",p.formEncType,p,null),Zt(n,i,"formMethod",p.formMethod,p,null),Zt(n,i,"formTarget",p.formTarget,p,null)):(Zt(n,i,"encType",p.encType,p,null),Zt(n,i,"method",p.method,p,null),Zt(n,i,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=$u(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ba);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=$u(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Mt("beforetoggle",n),Mt("toggle",n),Ke(n,"popover",u);break;case"xlinkActuate":Qe(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qe(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qe(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qe(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qe(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qe(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qe(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qe(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qe(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ke(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=vE.get(o)||o,Ke(n,o,u))}}function Kd(n,i,o,u,p,g){switch(o){case"style":eo(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Cn(n,u):(typeof u=="number"||typeof u=="bigint")&&Cn(n,""+u);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ce.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),i=o.slice(2,p?o.length-7:void 0),g=n[Fn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(i,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(i,u,p);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ke(n,o,u)}}}function jn(n,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",n),Mt("load",n);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var b=o[g];if(b!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(n,i,g,b,o,null)}}p&&Zt(n,i,"srcSet",o.srcSet,o,null),u&&Zt(n,i,"src",o.src,o,null);return;case"input":Mt("invalid",n);var U=g=b=p=null,V=null,ie=null;for(u in o)if(o.hasOwnProperty(u)){var ge=o[u];if(ge!=null)switch(u){case"name":p=ge;break;case"type":b=ge;break;case"checked":V=ge;break;case"defaultChecked":ie=ge;break;case"value":g=ge;break;case"defaultValue":U=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:Zt(n,i,u,ge,o,null)}}Pa(n,g,U,V,ie,b,p,!1);return;case"select":Mt("invalid",n),u=b=g=null;for(p in o)if(o.hasOwnProperty(p)&&(U=o[p],U!=null))switch(p){case"value":g=U;break;case"defaultValue":b=U;break;case"multiple":u=U;default:Zt(n,i,p,U,o,null)}i=g,o=b,n.multiple=!!u,i!=null?Hi(n,!!u,i,!1):o!=null&&Hi(n,!!u,o,!0);return;case"textarea":Mt("invalid",n),g=p=u=null;for(b in o)if(o.hasOwnProperty(b)&&(U=o[b],U!=null))switch(b){case"value":u=U;break;case"defaultValue":p=U;break;case"children":g=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:Zt(n,i,b,U,o,null)}Vn(n,u,p,g);return;case"option":for(V in o)o.hasOwnProperty(V)&&(u=o[V],u!=null)&&(V==="selected"?n.selected=u&&typeof u!="function"&&typeof u!="symbol":Zt(n,i,V,u,o,null));return;case"dialog":Mt("beforetoggle",n),Mt("toggle",n),Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":Mt("load",n);break;case"video":case"audio":for(u=0;u<nu.length;u++)Mt(nu[u],n);break;case"image":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"embed":case"source":case"link":Mt("error",n),Mt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in o)if(o.hasOwnProperty(ie)&&(u=o[ie],u!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(n,i,ie,u,o,null)}return;default:if(aa(i)){for(ge in o)o.hasOwnProperty(ge)&&(u=o[ge],u!==void 0&&Kd(n,i,ge,u,o,void 0));return}}for(U in o)o.hasOwnProperty(U)&&(u=o[U],u!=null&&Zt(n,i,U,u,o,null))}function Wb(n,i,o,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,b=null,U=null,V=null,ie=null,ge=null;for(fe in o){var ye=o[fe];if(o.hasOwnProperty(fe)&&ye!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=ye;default:u.hasOwnProperty(fe)||Zt(n,i,fe,null,u,ye)}}for(var se in u){var fe=u[se];if(ye=o[se],u.hasOwnProperty(se)&&(fe!=null||ye!=null))switch(se){case"type":g=fe;break;case"name":p=fe;break;case"checked":ie=fe;break;case"defaultChecked":ge=fe;break;case"value":b=fe;break;case"defaultValue":U=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:fe!==ye&&Zt(n,i,se,fe,u,ye)}}Hn(n,b,U,V,ie,ge,g,p);return;case"select":fe=b=U=se=null;for(g in o)if(V=o[g],o.hasOwnProperty(g)&&V!=null)switch(g){case"value":break;case"multiple":fe=V;default:u.hasOwnProperty(g)||Zt(n,i,g,null,u,V)}for(p in u)if(g=u[p],V=o[p],u.hasOwnProperty(p)&&(g!=null||V!=null))switch(p){case"value":se=g;break;case"defaultValue":U=g;break;case"multiple":b=g;default:g!==V&&Zt(n,i,p,g,u,V)}i=U,o=b,u=fe,se!=null?Hi(n,!!o,se,!1):!!u!=!!o&&(i!=null?Hi(n,!!o,i,!0):Hi(n,!!o,o?[]:"",!1));return;case"textarea":fe=se=null;for(U in o)if(p=o[U],o.hasOwnProperty(U)&&p!=null&&!u.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Zt(n,i,U,null,u,p)}for(b in u)if(p=u[b],g=o[b],u.hasOwnProperty(b)&&(p!=null||g!=null))switch(b){case"value":se=p;break;case"defaultValue":fe=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==g&&Zt(n,i,b,p,u,g)}kt(n,se,fe);return;case"option":for(var qe in o)se=o[qe],o.hasOwnProperty(qe)&&se!=null&&!u.hasOwnProperty(qe)&&(qe==="selected"?n.selected=!1:Zt(n,i,qe,null,u,se));for(V in u)se=u[V],fe=o[V],u.hasOwnProperty(V)&&se!==fe&&(se!=null||fe!=null)&&(V==="selected"?n.selected=se&&typeof se!="function"&&typeof se!="symbol":Zt(n,i,V,se,u,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in o)se=o[it],o.hasOwnProperty(it)&&se!=null&&!u.hasOwnProperty(it)&&Zt(n,i,it,null,u,se);for(ie in u)if(se=u[ie],fe=o[ie],u.hasOwnProperty(ie)&&se!==fe&&(se!=null||fe!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:Zt(n,i,ie,se,u,fe)}return;default:if(aa(i)){for(var Kt in o)se=o[Kt],o.hasOwnProperty(Kt)&&se!==void 0&&!u.hasOwnProperty(Kt)&&Kd(n,i,Kt,void 0,u,se);for(ge in u)se=u[ge],fe=o[ge],!u.hasOwnProperty(ge)||se===fe||se===void 0&&fe===void 0||Kd(n,i,ge,se,u,fe);return}}for(var K in o)se=o[K],o.hasOwnProperty(K)&&se!=null&&!u.hasOwnProperty(K)&&Zt(n,i,K,null,u,se);for(ye in u)se=u[ye],fe=o[ye],!u.hasOwnProperty(ye)||se===fe||se==null&&fe==null||Zt(n,i,ye,se,u,fe)}function tx(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yb(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],g=p.transferSize,b=p.initiatorType,U=p.duration;if(g&&U&&tx(b)){for(b=0,U=p.responseEnd,u+=1;u<o.length;u++){var V=o[u],ie=V.startTime;if(ie>U)break;var ge=V.transferSize,ye=V.initiatorType;ge&&tx(ye)&&(V=V.responseEnd,b+=ge*(V<U?1:(U-ie)/(V-ie)))}if(--u,i+=8*(g+b)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Qd=null,Jd=null;function jc(n){return n.nodeType===9?n:n.ownerDocument}function nx(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ix(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function $d(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ep=null;function qb(){var n=window.event;return n&&n.type==="popstate"?n===ep?!1:(ep=n,!0):(ep=null,!1)}var ax=typeof setTimeout=="function"?setTimeout:void 0,jb=typeof clearTimeout=="function"?clearTimeout:void 0,rx=typeof Promise=="function"?Promise:void 0,Zb=typeof queueMicrotask=="function"?queueMicrotask:typeof rx<"u"?function(n){return rx.resolve(null).then(n).catch(Kb)}:ax;function Kb(n){setTimeout(function(){throw n})}function Fr(n){return n==="head"}function sx(n,i){var o=i,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(p),No(i);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")au(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,au(o);for(var g=o.firstChild;g;){var b=g.nextSibling,U=g.nodeName;g[fs]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=b}}else o==="body"&&au(n.ownerDocument.body);o=p}while(o);No(i)}function ox(n,i){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?i?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(i?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function tp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":tp(o),El(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function Qb(n,i,o,u){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[fs])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=qi(n.nextSibling),n===null)break}return null}function Jb(n,i,o){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=qi(n.nextSibling),n===null))return null;return n}function lx(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=qi(n.nextSibling),n===null))return null;return n}function np(n){return n.data==="$?"||n.data==="$~"}function ip(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function $b(n,i){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||o.readyState!=="loading")i();else{var u=function(){i(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var ap=null;function ux(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(i===0)return qi(n.nextSibling);i--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||i++}n=n.nextSibling}return null}function cx(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(i===0)return n;i--}else o!=="/$"&&o!=="/&"||i++}n=n.previousSibling}return null}function fx(n,i,o){switch(i=jc(o),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function au(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);El(n)}var ji=new Map,hx=new Set;function Zc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ja=H.d;H.d={f:e1,r:t1,D:n1,C:i1,L:a1,m:r1,X:o1,S:s1,M:l1};function e1(){var n=Ja.f(),i=Hc();return n||i}function t1(n){var i=Sr(n);i!==null&&i.tag===5&&i.type==="form"?w_(i):Ja.r(n)}var wo=typeof document>"u"?null:document;function dx(n,i,o){var u=wo;if(u&&typeof i=="string"&&i){var p=ot(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),hx.has(p)||(hx.add(p),n={rel:n,crossOrigin:o,href:i},u.querySelector(p)===null&&(i=u.createElement("link"),jn(i,"link",n),N(i),u.head.appendChild(i)))}}function n1(n){Ja.D(n),dx("dns-prefetch",n,null)}function i1(n,i){Ja.C(n,i),dx("preconnect",n,i)}function a1(n,i,o){Ja.L(n,i,o);var u=wo;if(u&&n&&i){var p='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+ot(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+ot(o.imageSizes)+'"]')):p+='[href="'+ot(n)+'"]';var g=p;switch(i){case"style":g=Do(n);break;case"script":g=Uo(n)}ji.has(g)||(n=_({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:n,as:i},o),ji.set(g,n),u.querySelector(p)!==null||i==="style"&&u.querySelector(ru(g))||i==="script"&&u.querySelector(su(g))||(i=u.createElement("link"),jn(i,"link",n),N(i),u.head.appendChild(i)))}}function r1(n,i){Ja.m(n,i);var o=wo;if(o&&n){var u=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+ot(u)+'"][href="'+ot(n)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Uo(n)}if(!ji.has(g)&&(n=_({rel:"modulepreload",href:n},i),ji.set(g,n),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(su(g)))return}u=o.createElement("link"),jn(u,"link",n),N(u),o.head.appendChild(u)}}}function s1(n,i,o){Ja.S(n,i,o);var u=wo;if(u&&n){var p=yr(u).hoistableStyles,g=Do(n);i=i||"default";var b=p.get(g);if(!b){var U={loading:0,preload:null};if(b=u.querySelector(ru(g)))U.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},o),(o=ji.get(g))&&rp(n,o);var V=b=u.createElement("link");N(V),jn(V,"link",n),V._p=new Promise(function(ie,ge){V.onload=ie,V.onerror=ge}),V.addEventListener("load",function(){U.loading|=1}),V.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Kc(b,i,u)}b={type:"stylesheet",instance:b,count:1,state:U},p.set(g,b)}}}function o1(n,i){Ja.X(n,i);var o=wo;if(o&&n){var u=yr(o).hoistableScripts,p=Uo(n),g=u.get(p);g||(g=o.querySelector(su(p)),g||(n=_({src:n,async:!0},i),(i=ji.get(p))&&sp(n,i),g=o.createElement("script"),N(g),jn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function l1(n,i){Ja.M(n,i);var o=wo;if(o&&n){var u=yr(o).hoistableScripts,p=Uo(n),g=u.get(p);g||(g=o.querySelector(su(p)),g||(n=_({src:n,async:!0,type:"module"},i),(i=ji.get(p))&&sp(n,i),g=o.createElement("script"),N(g),jn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function px(n,i,o,u){var p=(p=ae.current)?Zc(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Do(o.href),o=yr(p).hoistableStyles,u=o.get(i),u||(u={type:"style",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Do(o.href);var g=yr(p).hoistableStyles,b=g.get(n);if(b||(p=p.ownerDocument||p,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,b),(g=p.querySelector(ru(n)))&&!g._p&&(b.instance=g,b.state.loading=5),ji.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ji.set(n,o),g||u1(p,n,o,b.state))),i&&u===null)throw Error(a(528,""));return b}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Uo(o),o=yr(p).hoistableScripts,u=o.get(i),u||(u={type:"script",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Do(n){return'href="'+ot(n)+'"'}function ru(n){return'link[rel="stylesheet"]['+n+"]"}function mx(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function u1(n,i,o,u){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=n.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),jn(i,"link",o),N(i),n.head.appendChild(i))}function Uo(n){return'[src="'+ot(n)+'"]'}function su(n){return"script[async]"+n}function gx(n,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var u=n.querySelector('style[data-href~="'+ot(o.href)+'"]');if(u)return i.instance=u,N(u),u;var p=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),N(u),jn(u,"style",p),Kc(u,o.precedence,n),i.instance=u;case"stylesheet":p=Do(o.href);var g=n.querySelector(ru(p));if(g)return i.state.loading|=4,i.instance=g,N(g),g;u=mx(o),(p=ji.get(p))&&rp(u,p),g=(n.ownerDocument||n).createElement("link"),N(g);var b=g;return b._p=new Promise(function(U,V){b.onload=U,b.onerror=V}),jn(g,"link",u),i.state.loading|=4,Kc(g,o.precedence,n),i.instance=g;case"script":return g=Uo(o.src),(p=n.querySelector(su(g)))?(i.instance=p,N(p),p):(u=o,(p=ji.get(g))&&(u=_({},o),sp(u,p)),n=n.ownerDocument||n,p=n.createElement("script"),N(p),jn(p,"link",u),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Kc(u,o.precedence,n));return i.instance}function Kc(n,i,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,b=0;b<u.length;b++){var U=u[b];if(U.dataset.precedence===i)g=U;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(n,i.firstChild))}function rp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function sp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Qc=null;function _x(n,i,o){if(Qc===null){var u=new Map,p=Qc=new Map;p.set(o,u)}else p=Qc,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[fs]||g[xn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var b=g.getAttribute(i)||"";b=n+b;var U=u.get(b);U?U.push(g):u.set(b,[g])}}return u}function vx(n,i,o){n=n.ownerDocument||n,n.head.insertBefore(o,i==="title"?n.querySelector("head > title"):null)}function c1(n,i,o){if(o===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(n=i.disabled,typeof i.precedence=="string"&&n==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function xx(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function f1(n,i,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=Do(u.href),g=i.querySelector(ru(p));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=Jc.bind(n),i.then(n,n)),o.state.loading|=4,o.instance=g,N(g);return}g=i.ownerDocument||i,u=mx(u),(p=ji.get(p))&&rp(u,p),g=g.createElement("link"),N(g);var b=g;b._p=new Promise(function(U,V){b.onload=U,b.onerror=V}),jn(g,"link",u),o.instance=g}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,i),(i=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=Jc.bind(n),i.addEventListener("load",o),i.addEventListener("error",o))}}var op=0;function h1(n,i){return n.stylesheets&&n.count===0&&ef(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&ef(n,n.stylesheets),n.unsuspend){var g=n.unsuspend;n.unsuspend=null,g()}},6e4+i);0<n.imgBytes&&op===0&&(op=62500*Yb());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ef(n,n.stylesheets),n.unsuspend)){var g=n.unsuspend;n.unsuspend=null,g()}},(n.imgBytes>op?50:800)+i);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function Jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ef(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $c=null;function ef(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$c=new Map,i.forEach(d1,n),$c=null,Jc.call(n))}function d1(n,i){if(!(i.state.loading&4)){var o=$c.get(n);if(o)var u=o.get(null);else{o=new Map,$c.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var b=p[g];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}p=i.instance,b=p.getAttribute("data-precedence"),g=o.get(b)||u,g===u&&o.set(null,p),o.set(b,p),this.count++,u=Jc.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var ou={$$typeof:C,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function p1(n,i,o,u,p,g,b,U,V){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Sx(n,i,o,u,p,g,b,U,V,ie,ge,ye){return n=new p1(n,i,o,b,V,ie,ge,ye,U),i=1,g===!0&&(i|=24),g=yi(3,null,null,i),n.current=g,g.stateNode=n,i=Hh(),i.refCount++,n.pooledCache=i,i.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:i},Xh(g),n}function yx(n){return n?(n=oo,n):oo}function Mx(n,i,o,u,p,g){p=yx(p),u.context===null?u.context=p:u.pendingContext=p,u=Cr(i),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=wr(n,u,i),o!==null&&(pi(o,n,i),Fl(o,n,i))}function Ex(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function lp(n,i){Ex(n,i),(n=n.alternate)&&Ex(n,i)}function bx(n){if(n.tag===13||n.tag===31){var i=gs(n,67108864);i!==null&&pi(i,n,67108864),lp(n,67108864)}}function Tx(n){if(n.tag===13||n.tag===31){var i=Ai();i=Sl(i);var o=gs(n,i);o!==null&&pi(o,n,i),lp(n,i)}}var tf=!0;function m1(n,i,o,u){var p=I.T;I.T=null;var g=H.p;try{H.p=2,up(n,i,o,u)}finally{H.p=g,I.T=p}}function g1(n,i,o,u){var p=I.T;I.T=null;var g=H.p;try{H.p=8,up(n,i,o,u)}finally{H.p=g,I.T=p}}function up(n,i,o,u){if(tf){var p=cp(u);if(p===null)Zd(n,i,u,nf,o),Rx(n,u);else if(v1(p,n,i,o,u))u.stopPropagation();else if(Rx(n,u),i&4&&-1<_1.indexOf(n)){for(;p!==null;){var g=Sr(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var b=Ee(g.pendingLanes);if(b!==0){var U=g;for(U.pendingLanes|=2,U.entangledLanes|=2;b;){var V=1<<31-ze(b);U.entanglements[1]|=V,b&=~V}Ma(g),(Ft&6)===0&&(zc=A()+500,tu(0))}}break;case 31:case 13:U=gs(g,2),U!==null&&pi(U,g,2),Hc(),lp(g,2)}if(g=cp(u),g===null&&Zd(n,i,u,nf,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else Zd(n,i,u,null,o)}}function cp(n){return n=hh(n),fp(n)}var nf=null;function fp(n){if(nf=null,n=xr(n),n!==null){var i=l(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=c(i),n!==null)return n;n=null}else if(o===31){if(n=f(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return nf=n,null}function Ax(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case me:return 2;case Se:return 8;case he:case We:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var hp=!1,Hr=null,Gr=null,Vr=null,lu=new Map,uu=new Map,kr=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rx(n,i){switch(n){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":lu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(i.pointerId)}}function cu(n,i,o,u,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},i!==null&&(i=Sr(i),i!==null&&bx(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function v1(n,i,o,u,p){switch(i){case"focusin":return Hr=cu(Hr,n,i,o,u,p),!0;case"dragenter":return Gr=cu(Gr,n,i,o,u,p),!0;case"mouseover":return Vr=cu(Vr,n,i,o,u,p),!0;case"pointerover":var g=p.pointerId;return lu.set(g,cu(lu.get(g)||null,n,i,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,uu.set(g,cu(uu.get(g)||null,n,i,o,u,p)),!0}return!1}function Cx(n){var i=xr(n.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){n.blockedOn=i,va(n.priority,function(){Tx(o)});return}}else if(i===31){if(i=f(o),i!==null){n.blockedOn=i,va(n.priority,function(){Tx(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function af(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=cp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);fh=u,o.target.dispatchEvent(u),fh=null}else return i=Sr(o),i!==null&&bx(i),n.blockedOn=o,!1;i.shift()}return!0}function wx(n,i,o){af(n)&&o.delete(i)}function x1(){hp=!1,Hr!==null&&af(Hr)&&(Hr=null),Gr!==null&&af(Gr)&&(Gr=null),Vr!==null&&af(Vr)&&(Vr=null),lu.forEach(wx),uu.forEach(wx)}function rf(n,i){n.blockedOn===i&&(n.blockedOn=null,hp||(hp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,x1)))}var sf=null;function Dx(n){sf!==n&&(sf=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){sf===n&&(sf=null);for(var i=0;i<n.length;i+=3){var o=n[i],u=n[i+1],p=n[i+2];if(typeof u!="function"){if(fp(u||o)===null)continue;break}var g=Sr(o);g!==null&&(n.splice(i,3),i-=3,cd(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function No(n){function i(V){return rf(V,n)}Hr!==null&&rf(Hr,n),Gr!==null&&rf(Gr,n),Vr!==null&&rf(Vr,n),lu.forEach(i),uu.forEach(i);for(var o=0;o<kr.length;o++){var u=kr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<kr.length&&(o=kr[0],o.blockedOn===null);)Cx(o),o.blockedOn===null&&kr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],b=p[Fn]||null;if(typeof g=="function")b||Dx(o);else if(b){var U=null;if(g&&g.hasAttribute("formAction")){if(p=g,b=g[Fn]||null)U=b.formAction;else if(fp(p)!==null)continue}else U=b.action;typeof U=="function"?o[u+1]=U:(o.splice(u,3),u-=3),Dx(o)}}}function Ux(){function n(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(b){return p=b})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function dp(n){this._internalRoot=n}of.prototype.render=dp.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,u=Ai();Mx(o,u,n,i,null,null)},of.prototype.unmount=dp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Mx(n.current,2,null,n,null,null),Hc(),i[ia]=null}};function of(n){this._internalRoot=n}of.prototype.unstable_scheduleHydration=function(n){if(n){var i=yl();n={blockedOn:null,target:n,priority:i};for(var o=0;o<kr.length&&i!==0&&i<kr[o].priority;o++);kr.splice(o,0,n),o===0&&Cx(n)}};var Nx=e.version;if(Nx!=="19.2.3")throw Error(a(527,Nx,"19.2.3"));H.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var S1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lf.isDisabled&&lf.supportsFiber)try{Ae=lf.inject(S1),Re=lf}catch{}}return hu.createRoot=function(n,i){if(!s(n))throw Error(a(299));var o=!1,u="",p=F_,g=H_,b=G_;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Sx(n,1,!1,null,null,o,u,null,p,g,b,Ux),n[ia]=i.current,jd(n),new dp(i)},hu.hydrateRoot=function(n,i,o){if(!s(n))throw Error(a(299));var u=!1,p="",g=F_,b=H_,U=G_,V=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(U=o.onRecoverableError),o.formState!==void 0&&(V=o.formState)),i=Sx(n,1,!0,i,o??null,u,p,V,g,b,U,Ux),i.context=yx(null),o=i.current,u=Ai(),u=Sl(u),p=Cr(u),p.callback=null,wr(o,p,u),o=u,i.current.lanes=o,Jn(i,o),Ma(i),n[ia]=i.current,jd(n),new of(i)},hu.version="19.2.3",hu}var Vx;function D1(){if(Vx)return gp.exports;Vx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gp.exports=w1(),gp.exports}var U1=D1();var kx="popstate";function N1(r={}){function e(a,s){let{pathname:l,search:c,hash:f}=a.location;return um("",{pathname:l,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(a,s){return typeof s=="string"?s:Du(s)}return O1(e,t,null,r)}function hn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function pa(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function L1(){return Math.random().toString(36).substring(2,10)}function Xx(r,e){return{usr:r.state,key:r.key,idx:e}}function um(r,e,t=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?pl(e):e,state:t,key:e&&e.key||a||L1()}}function Du({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function pl(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function O1(r,e,t,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,c=s.history,f="POP",h=null,d=m();d==null&&(d=0,c.replaceState({...c.state,idx:d},""));function m(){return(c.state||{idx:null}).idx}function _(){f="POP";let y=m(),S=y==null?null:y-d;d=y,h&&h({action:f,location:M.location,delta:S})}function v(y,S){f="PUSH";let R=um(M.location,y,S);d=m()+1;let C=Xx(R,d),D=M.createHref(R);try{c.pushState(C,"",D)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;s.location.assign(D)}l&&h&&h({action:f,location:M.location,delta:1})}function x(y,S){f="REPLACE";let R=um(M.location,y,S);d=m();let C=Xx(R,d),D=M.createHref(R);c.replaceState(C,"",D),l&&h&&h({action:f,location:M.location,delta:0})}function E(y){return P1(y)}let M={get action(){return f},get location(){return r(s,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(kx,_),h=y,()=>{s.removeEventListener(kx,_),h=null}},createHref(y){return e(s,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:x,go(y){return c.go(y)}};return M}function P1(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),hn(t,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:Du(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=t+a),new URL(a,t)}function dy(r,e,t="/"){return B1(r,e,t,!1)}function B1(r,e,t,a){let s=typeof e=="string"?pl(e):e,l=cr(s.pathname||"/",t);if(l==null)return null;let c=py(r);I1(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let d=j1(l);f=Y1(c[h],d,a)}return f}function py(r,e=[],t=[],a="",s=!1){let l=(c,f,h=s,d)=>{let m={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&h)return;hn(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let _=or([a,m.relativePath]),v=t.concat(m);c.children&&c.children.length>0&&(hn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),py(c.children,e,v,_,h)),!(c.path==null&&!c.index)&&e.push({path:_,score:X1(_,c.index),routesMeta:v})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let h of my(c.path))l(c,f,!0,h)}),e}function my(r){let e=r.split("/");if(e.length===0)return[];let[t,...a]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let c=my(a.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),s&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function I1(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:W1(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}var z1=/^:[\w-]+$/,F1=3,H1=2,G1=1,V1=10,k1=-2,Wx=r=>r==="*";function X1(r,e){let t=r.split("/"),a=t.length;return t.some(Wx)&&(a+=k1),e&&(a+=H1),t.filter(s=>!Wx(s)).reduce((s,l)=>s+(z1.test(l)?F1:l===""?G1:V1),a)}function W1(r,e){return r.length===e.length&&r.slice(0,-1).every((a,s)=>a===e[s])?r[r.length-1]-e[e.length-1]:0}function Y1(r,e,t=!1){let{routesMeta:a}=r,s={},l="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],d=f===a.length-1,m=l==="/"?e:e.slice(l.length)||"/",_=Xf({path:h.relativePath,caseSensitive:h.caseSensitive,end:d},m),v=h.route;if(!_&&d&&t&&!a[a.length-1].route.index&&(_=Xf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!_)return null;Object.assign(s,_.params),c.push({params:s,pathname:or([l,_.pathname]),pathnameBase:J1(or([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=or([l,_.pathnameBase]))}return c}function Xf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,a]=q1(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((d,{paramName:m,isOptional:_},v)=>{if(m==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const x=f[v];return _&&!x?d[m]=void 0:d[m]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:c,pattern:r}}function q1(r,e=!1,t=!0){pa(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function j1(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pa(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function cr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=r.charAt(t);return a&&a!=="/"?null:r.slice(t)||"/"}var gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z1=r=>gy.test(r);function K1(r,e="/"){let{pathname:t,search:a="",hash:s=""}=typeof r=="string"?pl(r):r,l;if(t)if(Z1(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),pa(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${t}`)}t.startsWith("/")?l=Yx(t.substring(1),"/"):l=Yx(t,e)}else l=e;return{pathname:l,search:$1(a),hash:eT(s)}}function Yx(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Sp(r,e,t,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q1(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _y(r){let e=Q1(r);return e.map((t,a)=>a===e.length-1?t.pathname:t.pathnameBase)}function vy(r,e,t,a=!1){let s;typeof r=="string"?s=pl(r):(s={...r},hn(!s.pathname||!s.pathname.includes("?"),Sp("?","pathname","search",s)),hn(!s.pathname||!s.pathname.includes("#"),Sp("#","pathname","hash",s)),hn(!s.search||!s.search.includes("#"),Sp("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=t;else{let _=e.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;s.pathname=v.join("/")}f=_>=0?e[_]:"/"}let h=K1(s,f),d=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(d||m)&&(h.pathname+="/"),h}var or=r=>r.join("/").replace(/\/\/+/g,"/"),J1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),$1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,eT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,tT=class{constructor(r,e,t,a=!1){this.status=r,this.statusText=e||"",this.internal=a,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function nT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function iT(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sy(r,e){let t=r;if(typeof t!="string"||!gy.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let a=t,s=!1;if(xy)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),f=cr(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:s=!0}catch{pa(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yy=["POST","PUT","PATCH","DELETE"];new Set(yy);var aT=["GET",...yy];new Set(aT);var ml=Q.createContext(null);ml.displayName="DataRouter";var nh=Q.createContext(null);nh.displayName="DataRouterState";var rT=Q.createContext(!1),My=Q.createContext({isTransitioning:!1});My.displayName="ViewTransition";var sT=Q.createContext(new Map);sT.displayName="Fetchers";var oT=Q.createContext(null);oT.displayName="Await";var ta=Q.createContext(null);ta.displayName="Navigation";var Gu=Q.createContext(null);Gu.displayName="Location";var _r=Q.createContext({outlet:null,matches:[],isDataRoute:!1});_r.displayName="Route";var Sg=Q.createContext(null);Sg.displayName="RouteError";var Ey="REACT_ROUTER_ERROR",lT="REDIRECT",uT="ROUTE_ERROR_RESPONSE";function cT(r){if(r.startsWith(`${Ey}:${lT}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function fT(r){if(r.startsWith(`${Ey}:${uT}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new tT(e.status,e.statusText,e.data)}catch{}}function hT(r,{relative:e}={}){hn(Vu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:a}=Q.useContext(ta),{hash:s,pathname:l,search:c}=ku(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:or([t,l])),a.createHref({pathname:f,search:c,hash:s})}function Vu(){return Q.useContext(Gu)!=null}function js(){return hn(Vu(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(Gu).location}var by="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ty(r){Q.useContext(ta).static||Q.useLayoutEffect(r)}function dT(){let{isDataRoute:r}=Q.useContext(_r);return r?AT():pT()}function pT(){hn(Vu(),"useNavigate() may be used only in the context of a <Router> component.");let r=Q.useContext(ml),{basename:e,navigator:t}=Q.useContext(ta),{matches:a}=Q.useContext(_r),{pathname:s}=js(),l=JSON.stringify(_y(a)),c=Q.useRef(!1);return Ty(()=>{c.current=!0}),Q.useCallback((h,d={})=>{if(pa(c.current,by),!c.current)return;if(typeof h=="number"){t.go(h);return}let m=vy(h,JSON.parse(l),s,d.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:or([e,m.pathname])),(d.replace?t.replace:t.push)(m,d.state,d)},[e,t,l,s,r])}Q.createContext(null);function ku(r,{relative:e}={}){let{matches:t}=Q.useContext(_r),{pathname:a}=js(),s=JSON.stringify(_y(t));return Q.useMemo(()=>vy(r,JSON.parse(s),a,e==="path"),[r,s,a,e])}function mT(r,e){return Ay(r,e)}function Ay(r,e,t,a,s){hn(Vu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=Q.useContext(ta),{matches:c}=Q.useContext(_r),f=c[c.length-1],h=f?f.params:{},d=f?f.pathname:"/",m=f?f.pathnameBase:"/",_=f&&f.route;{let R=_&&_.path||"";Cy(d,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=js(),x;if(e){let R=typeof e=="string"?pl(e):e;hn(m==="/"||R.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${R.pathname}" was given in the \`location\` prop.`),x=R}else x=v;let E=x.pathname||"/",M=E;if(m!=="/"){let R=m.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=dy(r,{pathname:M});pa(_||y!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),pa(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=ST(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:or([m,l.encodeLocation?l.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?m:or([m,l.encodeLocation?l.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),c,t,a,s);return e&&S?Q.createElement(Gu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},S):S}function gT(){let r=TT(),e=nT(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:l},"ErrorBoundary")," or"," ",Q.createElement("code",{style:l},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:s},t):null,c)}var _T=Q.createElement(gT,null),Ry=class extends Q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=fT(r.digest);t&&(r=t)}let e=r!==void 0?Q.createElement(_r.Provider,{value:this.props.routeContext},Q.createElement(Sg.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?Q.createElement(vT,{error:r},e):e}};Ry.contextType=rT;var yp=new WeakMap;function vT({children:r,error:e}){let{basename:t}=Q.useContext(ta);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=cT(e.digest);if(a){let s=yp.get(e);if(s)throw s;let l=Sy(a.location,t);if(xy&&!yp.get(e))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw yp.set(e,c),c}return Q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function xT({routeContext:r,match:e,children:t}){let a=Q.useContext(ml);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(_r.Provider,{value:r},t)}function ST(r,e=[],t=null,a=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,c=t?.errors;if(c!=null){let m=l.findIndex(_=>_.route.id&&c?.[_.route.id]!==void 0);hn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,h=-1;if(t)for(let m=0;m<l.length;m++){let _=l[m];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=m),_.route.id){let{loaderData:v,errors:x}=t,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!x||x[_.route.id]===void 0);if(_.route.lazy||E){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}let d=t&&a?(m,_)=>{a(m,{location:t.location,params:t.matches?.[0]?.params??{},unstable_pattern:iT(t.matches),errorInfo:_})}:void 0;return l.reduceRight((m,_,v)=>{let x,E=!1,M=null,y=null;t&&(x=c&&_.route.id?c[_.route.id]:void 0,M=_.route.errorElement||_T,f&&(h<0&&v===0?(Cy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):h===v&&(E=!0,y=_.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,v+1)),R=()=>{let C;return x?C=M:E?C=y:_.route.Component?C=Q.createElement(_.route.Component,null):_.route.element?C=_.route.element:C=m,Q.createElement(xT,{match:_,routeContext:{outlet:m,matches:S,isDataRoute:t!=null},children:C})};return t&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?Q.createElement(Ry,{location:t.location,revalidation:t.revalidation,component:M,error:x,children:R(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:d}):R()},null)}function yg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yT(r){let e=Q.useContext(ml);return hn(e,yg(r)),e}function MT(r){let e=Q.useContext(nh);return hn(e,yg(r)),e}function ET(r){let e=Q.useContext(_r);return hn(e,yg(r)),e}function Mg(r){let e=ET(r),t=e.matches[e.matches.length-1];return hn(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function bT(){return Mg("useRouteId")}function TT(){let r=Q.useContext(Sg),e=MT("useRouteError"),t=Mg("useRouteError");return r!==void 0?r:e.errors?.[t]}function AT(){let{router:r}=yT("useNavigate"),e=Mg("useNavigate"),t=Q.useRef(!1);return Ty(()=>{t.current=!0}),Q.useCallback(async(s,l={})=>{pa(t.current,by),t.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var qx={};function Cy(r,e,t){!e&&!qx[r]&&(qx[r]=!0,pa(!1,t))}Q.memo(RT);function RT({routes:r,future:e,state:t,onError:a}){return Ay(r,void 0,t,a,e)}function wy(r){hn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CT({basename:r="/",children:e=null,location:t,navigationType:a="POP",navigator:s,static:l=!1,unstable_useTransitions:c}){hn(!Vu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=Q.useMemo(()=>({basename:f,navigator:s,static:l,unstable_useTransitions:c,future:{}}),[f,s,l,c]);typeof t=="string"&&(t=pl(t));let{pathname:d="/",search:m="",hash:_="",state:v=null,key:x="default"}=t,E=Q.useMemo(()=>{let M=cr(d,f);return M==null?null:{location:{pathname:M,search:m,hash:_,state:v,key:x},navigationType:a}},[f,d,m,_,v,x,a]);return pa(E!=null,`<Router basename="${f}"> is not able to match the URL "${d}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:Q.createElement(ta.Provider,{value:h},Q.createElement(Gu.Provider,{children:e,value:E}))}function wT({children:r,location:e}){return mT(cm(r),e)}function cm(r,e=[]){let t=[];return Q.Children.forEach(r,(a,s)=>{if(!Q.isValidElement(a))return;let l=[...e,s];if(a.type===Q.Fragment){t.push.apply(t,cm(a.props.children,l));return}hn(a.type===wy,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),hn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=cm(a.props.children,l)),t.push(c)}),t}var Lf="get",Of="application/x-www-form-urlencoded";function ih(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function DT(r){return ih(r)&&r.tagName.toLowerCase()==="button"}function UT(r){return ih(r)&&r.tagName.toLowerCase()==="form"}function NT(r){return ih(r)&&r.tagName.toLowerCase()==="input"}function LT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function OT(r,e){return r.button===0&&(!e||e==="_self")&&!LT(r)}var uf=null;function PT(){if(uf===null)try{new FormData(document.createElement("form"),0),uf=!1}catch{uf=!0}return uf}var BT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mp(r){return r!=null&&!BT.has(r)?(pa(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Of}"`),null):r}function IT(r,e){let t,a,s,l,c;if(UT(r)){let f=r.getAttribute("action");a=f?cr(f,e):null,t=r.getAttribute("method")||Lf,s=Mp(r.getAttribute("enctype"))||Of,l=new FormData(r)}else if(DT(r)||NT(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(a=h?cr(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Lf,s=Mp(r.getAttribute("formenctype"))||Mp(f.getAttribute("enctype"))||Of,l=new FormData(f,r),!PT()){let{name:d,type:m,value:_}=r;if(m==="image"){let v=d?`${d}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else d&&l.append(d,_)}}else{if(ih(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Lf,a=null,s=Of,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:a,method:t.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Eg(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function zT(r,e,t){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname=`_root.${t}`:e&&cr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${t}`,a}async function FT(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HT(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function GT(r,e,t){let a=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await FT(l,t);return c.links?c.links():[]}return[]}));return WT(a.flat(1).filter(HT).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function jx(r,e,t,a,s,l){let c=(h,d)=>t[d]?h.route.id!==t[d].route.id:!0,f=(h,d)=>t[d].pathname!==h.pathname||t[d].route.path?.endsWith("*")&&t[d].params["*"]!==h.params["*"];return l==="assets"?e.filter((h,d)=>c(h,d)||f(h,d)):l==="data"?e.filter((h,d)=>{let m=a.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(c(h,d)||f(h,d))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function VT(r,e,{includeHydrateFallback:t}={}){return kT(r.map(a=>{let s=e.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function kT(r){return[...new Set(r)]}function XT(r){let e={},t=Object.keys(r).sort();for(let a of t)e[a]=r[a];return e}function WT(r,e){let t=new Set;return new Set(e),r.reduce((a,s)=>{let l=JSON.stringify(XT(s));return t.has(l)||(t.add(l),a.push({key:l,link:s})),a},[])}function Dy(){let r=Q.useContext(ml);return Eg(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function YT(){let r=Q.useContext(nh);return Eg(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bg=Q.createContext(void 0);bg.displayName="FrameworkContext";function Uy(){let r=Q.useContext(bg);return Eg(r,"You must render this element inside a <HydratedRouter> element"),r}function qT(r,e){let t=Q.useContext(bg),[a,s]=Q.useState(!1),[l,c]=Q.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:d,onMouseLeave:m,onTouchStart:_}=e,v=Q.useRef(null);Q.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=S=>{S.forEach(R=>{c(R.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),Q.useEffect(()=>{if(a){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[a]);let x=()=>{s(!0)},E=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:du(f,x),onBlur:du(h,E),onMouseEnter:du(d,x),onMouseLeave:du(m,E),onTouchStart:du(_,x)}]:[!1,v,{}]}function du(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function jT({page:r,...e}){let{router:t}=Dy(),a=Q.useMemo(()=>dy(t.routes,r,t.basename),[t.routes,r,t.basename]);return a?Q.createElement(KT,{page:r,matches:a,...e}):null}function ZT(r){let{manifest:e,routeModules:t}=Uy(),[a,s]=Q.useState([]);return Q.useEffect(()=>{let l=!1;return GT(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),a}function KT({page:r,matches:e,...t}){let a=js(),{manifest:s,routeModules:l}=Uy(),{basename:c}=Dy(),{loaderData:f,matches:h}=YT(),d=Q.useMemo(()=>jx(r,e,h,s,a,"data"),[r,e,h,s,a]),m=Q.useMemo(()=>jx(r,e,h,s,a,"assets"),[r,e,h,s,a]),_=Q.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let E=new Set,M=!1;if(e.forEach(S=>{let R=s.routes[S.route.id];!R||!R.hasLoader||(!d.some(C=>C.route.id===S.route.id)&&S.route.id in f&&l[S.route.id]?.shouldRevalidate||R.hasClientLoader?M=!0:E.add(S.route.id))}),E.size===0)return[];let y=zT(r,c,"data");return M&&E.size>0&&y.searchParams.set("_routes",e.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[y.pathname+y.search]},[c,f,a,s,d,e,r,l]),v=Q.useMemo(()=>VT(m,s),[m,s]),x=ZT(m);return Q.createElement(Q.Fragment,null,_.map(E=>Q.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>Q.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),x.map(({key:E,link:M})=>Q.createElement("link",{key:E,nonce:t.nonce,...M})))}function QT(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var JT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{JT&&(window.__reactRouterVersion="7.11.0")}catch{}function $T({basename:r,children:e,unstable_useTransitions:t,window:a}){let s=Q.useRef();s.current==null&&(s.current=N1({window:a,v5Compat:!0}));let l=s.current,[c,f]=Q.useState({action:l.action,location:l.location}),h=Q.useCallback(d=>{t===!1?f(d):Q.startTransition(()=>f(d))},[t]);return Q.useLayoutEffect(()=>l.listen(h),[l,h]),Q.createElement(CT,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ly=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,state:f,target:h,to:d,preventScrollReset:m,viewTransition:_,unstable_defaultShouldRevalidate:v,...x},E){let{basename:M,unstable_useTransitions:y}=Q.useContext(ta),S=typeof d=="string"&&Ny.test(d),R=Sy(d,M);d=R.to;let C=hT(d,{relative:s}),[D,w,P]=qT(a,x),O=iA(d,{replace:c,state:f,target:h,preventScrollReset:m,relative:s,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function F(L){e&&e(L),L.defaultPrevented||O(L)}let T=Q.createElement("a",{...x,...P,href:R.absoluteURL||C,onClick:R.isExternal||l?e:F,ref:QT(E,w),target:h,"data-discover":!S&&t==="render"?"true":void 0});return D&&!S?Q.createElement(Q.Fragment,null,T,Q.createElement(jT,{page:C})):T});Ly.displayName="Link";var eA=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:f,children:h,...d},m){let _=ku(c,{relative:d.relative}),v=js(),x=Q.useContext(nh),{navigator:E,basename:M}=Q.useContext(ta),y=x!=null&&lA(_)&&f===!0,S=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,R=v.pathname,C=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(R=R.toLowerCase(),C=C?C.toLowerCase():null,S=S.toLowerCase()),C&&M&&(C=cr(C,M)||C);const D=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let w=R===S||!s&&R.startsWith(S)&&R.charAt(D)==="/",P=C!=null&&(C===S||!s&&C.startsWith(S)&&C.charAt(S.length)==="/"),O={isActive:w,isPending:P,isTransitioning:y},F=w?e:void 0,T;typeof a=="function"?T=a(O):T=[a,w?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof l=="function"?l(O):l;return Q.createElement(Ly,{...d,"aria-current":F,className:T,ref:m,style:L,to:c,viewTransition:f},typeof h=="function"?h(O):h)});eA.displayName="NavLink";var tA=Q.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:a,replace:s,state:l,method:c=Lf,action:f,onSubmit:h,relative:d,preventScrollReset:m,viewTransition:_,unstable_defaultShouldRevalidate:v,...x},E)=>{let{unstable_useTransitions:M}=Q.useContext(ta),y=sA(),S=oA(f,{relative:d}),R=c.toLowerCase()==="get"?"get":"post",C=typeof f=="string"&&Ny.test(f),D=w=>{if(h&&h(w),w.defaultPrevented)return;w.preventDefault();let P=w.nativeEvent.submitter,O=P?.getAttribute("formmethod")||c,F=()=>y(P||w.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:s,state:l,relative:d,preventScrollReset:m,viewTransition:_,unstable_defaultShouldRevalidate:v});M&&t!==!1?Q.startTransition(()=>F()):F()};return Q.createElement("form",{ref:E,method:R,action:S,onSubmit:a?h:D,...x,"data-discover":!C&&r==="render"?"true":void 0})});tA.displayName="Form";function nA(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Oy(r){let e=Q.useContext(ml);return hn(e,nA(r)),e}function iA(r,{target:e,replace:t,state:a,preventScrollReset:s,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f,unstable_useTransitions:h}={}){let d=dT(),m=js(),_=ku(r,{relative:l});return Q.useCallback(v=>{if(OT(v,e)){v.preventDefault();let x=t!==void 0?t:Du(m)===Du(_),E=()=>d(r,{replace:x,state:a,preventScrollReset:s,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f});h?Q.startTransition(()=>E()):E()}},[m,d,_,t,a,e,r,s,l,c,f,h])}var aA=0,rA=()=>`__${String(++aA)}__`;function sA(){let{router:r}=Oy("useSubmit"),{basename:e}=Q.useContext(ta),t=bT(),a=r.fetch,s=r.navigate;return Q.useCallback(async(l,c={})=>{let{action:f,method:h,encType:d,formData:m,body:_}=IT(l,e);if(c.navigate===!1){let v=c.fetcherKey||rA();await a(v,t,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:_,formMethod:c.method||h,formEncType:c.encType||d,flushSync:c.flushSync})}else await s(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:_,formMethod:c.method||h,formEncType:c.encType||d,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,s,e,t])}function oA(r,{relative:e}={}){let{basename:t}=Q.useContext(ta),a=Q.useContext(_r);hn(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...ku(r||".",{relative:e})},c=js();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(m=>m==="")){f.delete("index"),h.filter(_=>_).forEach(_=>f.append("index",_));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:or([t,l.pathname])),Du(l)}function lA(r,{relative:e}={}){let t=Q.useContext(My);hn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Oy("useViewTransitionState"),s=ku(r,{relative:e});if(!t.isTransitioning)return!1;let l=cr(t.currentLocation.pathname,a)||t.currentLocation.pathname,c=cr(t.nextLocation.pathname,a)||t.nextLocation.pathname;return Xf(s.pathname,c)!=null||Xf(s.pathname,l)!=null}function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Py(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},Tg,Kn,on,Ji=1e8,$t=1/Ji,fm=Math.PI*2,uA=fm/4,cA=0,By=Math.sqrt,fA=Math.cos,hA=Math.sin,In=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},Ag=function(e){return typeof e>"u"},La=function(e){return typeof e=="object"},mi=function(e){return e!==!1},Rg=function(){return typeof window<"u"},cf=function(e){return mn(e)||In(e)},Iy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ii=Array.isArray,dA=/random\([^)]+\)/g,pA=/,\s*/g,Zx=/(?:-?\.?\d|\.)+/gi,zy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ep=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fy=/[+-]=-?[.\d]+/,mA=/[^,'"\[\]\s]+/gi,gA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,un,Ta,hm,Cg,Ii={},Wf={},Hy,Gy=function(e){return(Wf=il(e,Ii))&&xi},wg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uu=function(e,t){return!t&&console.warn(e)},Vy=function(e,t){return e&&(Ii[e]=t)&&Wf&&(Wf[e]=t)||Ii},Nu=function(){return 0},_A={suppressEvents:!0,isStart:!0,kill:!1},Pf={suppressEvents:!0,kill:!1},vA={suppressEvents:!0},Dg={},is=[],dm={},ky,Di={},bp={},Kx=30,Bf=[],Ug="",Ng=function(e){var t=e[0],a,s;if(La(t)||mn(t)||(e=[e]),!(a=(t._gsap||{}).harness)){for(s=Bf.length;s--&&!Bf[s].targetTest(t););a=Bf[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new dM(e[s],a)))||e.splice(s,1);return e},ks=function(e){return e._gsap||Ng($i(e))[0]._gsap},Xy=function(e,t,a){return(a=e[t])&&mn(a)?e[t]():Ag(a)&&e.getAttribute&&e.getAttribute(t)||a},gi=function(e,t){return(e=e.split(",")).forEach(t)||e},vn=function(e){return Math.round(e*1e5)/1e5||0},ln=function(e){return Math.round(e*1e7)/1e7||0},Qo=function(e,t){var a=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),a==="+"?e+s:a==="-"?e-s:a==="*"?e*s:e/s},xA=function(e,t){for(var a=t.length,s=0;e.indexOf(t[s])<0&&++s<a;);return s<a},Yf=function(){var e=is.length,t=is.slice(0),a,s;for(dm={},is.length=0,a=0;a<e;a++)s=t[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Lg=function(e){return!!(e._initted||e._startAt||e.add)},Wy=function(e,t,a,s){is.length&&!Kn&&Yf(),e.render(t,a,!!(Kn&&t<0&&Lg(e))),is.length&&!Kn&&Yf()},Yy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mA).length<2?t:In(e)?e.trim():e},qy=function(e){return e},zi=function(e,t){for(var a in t)a in e||(e[a]=t[a]);return e},SA=function(e){return function(t,a){for(var s in a)s in t||s==="duration"&&e||s==="ease"||(t[s]=a[s])}},il=function(e,t){for(var a in t)e[a]=t[a];return e},Qx=function r(e,t){for(var a in t)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=La(t[a])?r(e[a]||(e[a]={}),t[a]):t[a]);return e},qf=function(e,t){var a={},s;for(s in e)s in t||(a[s]=e[s]);return a},Tu=function(e){var t=e.parent||un,a=e.keyframes?SA(ii(e.keyframes)):zi;if(mi(e.inherit))for(;t;)a(e,t.vars.defaults),t=t.parent||t._dp;return e},yA=function(e,t){for(var a=e.length,s=a===t.length;s&&a--&&e[a]===t[a];);return a<0},jy=function(e,t,a,s,l){var c=e[s],f;if(l)for(f=t[l];c&&c[l]>f;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[a],e[a]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},ah=function(e,t,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=t._prev,c=t._next;l?l._next=c:e[a]===t&&(e[a]=c),c?c._prev=l:e[s]===t&&(e[s]=l),t._next=t._prev=t.parent=null},ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},MA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pm=function(e,t,a,s){return e._startAt&&(Kn?e._startAt.revert(Pf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},EA=function r(e){return!e||e._ts&&r(e.parent)},Jx=function(e){return e._repeat?al(e._tTime,e=e.duration()+e._rDelay)*e:0},al=function(e,t){var a=Math.floor(e=ln(e/t));return e&&a===e?a-1:a},jf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rh=function(e){return e._end=ln(e._start+(e._tDur/Math.abs(e._ts||e._rts||$t)||0))},sh=function(e,t){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=ln(a._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rh(e),a._dirty||Xs(a,e)),e},Zy=function(e,t){var a;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(a=jf(e.rawTime(),t),(!t._dur||Xu(0,t.totalDuration(),a)-t._tTime>$t)&&t.render(a,!0)),Xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-$t}},Ra=function(e,t,a,s){return t.parent&&ss(t),t._start=ln((fr(a)?a:a||e!==un?Ki(e,a,t):e._time)+t._delay),t._end=ln(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jy(e,t,"_first","_last",e._sort?"_start":0),mm(t)||(e._recent=t),s||Zy(e,t),e._ts<0&&sh(e,e._tTime),e},Ky=function(e,t){return(Ii.ScrollTrigger||wg("scrollTrigger",t))&&Ii.ScrollTrigger.create(t,e)},Qy=function(e,t,a,s,l){if(Pg(e,t,l),!e._initted)return 1;if(!a&&e._pt&&!Kn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ky!==Ui.frame)return is.push(e),e._lazy=[l,s],1},bA=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},mm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TA=function(e,t,a,s){var l=e.ratio,c=t<0||!t&&(!e._start&&bA(e)&&!(!e._initted&&mm(e))||(e._ts<0||e._dp._ts<0)&&!mm(e))?0:1,f=e._rDelay,h=0,d,m,_;if(f&&e._repeat&&(h=Xu(0,e._tDur,t),m=al(h,f),e._yoyo&&m&1&&(c=1-c),m!==al(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Kn||s||e._zTime===$t||!t&&e._zTime){if(!e._initted&&Qy(e,t,s,a,h))return;for(_=e._zTime,e._zTime=t||(a?$t:0),a||(a=t&&!_),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=h,d=e._pt;d;)d.r(c,d.d),d=d._next;t<0&&pm(e,t,a,!0),e._onUpdate&&!a&&Li(e,"onUpdate"),h&&e._repeat&&!a&&e.parent&&Li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&ss(e,1),!a&&!Kn&&(Li(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},AA=function(e,t,a){var s;if(a>t)for(s=e._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},rl=function(e,t,a,s){var l=e._repeat,c=ln(t)||0,f=e._tTime/e._tDur;return f&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:ln(c*(l+1)+e._rDelay*l):c,f>0&&!s&&sh(e,e._tTime=e._tDur*f),e.parent&&rh(e),a||Xs(e.parent,e),e},$x=function(e){return e instanceof oi?Xs(e):rl(e,e._dur)},RA={_start:0,endTime:Nu,totalDuration:Nu},Ki=function r(e,t,a){var s=e.labels,l=e._recent||RA,c=e.duration()>=Ji?l.endTime(!1):e._dur,f,h,d;return In(t)&&(isNaN(t)||t in s)?(h=t.charAt(0),d=t.substr(-1)==="%",f=t.indexOf("="),h==="<"||h===">"?(f>=0&&(t=t.replace(/=/,"")),(h==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(t in s||(s[t]=c),s[t]):(h=parseFloat(t.charAt(f-1)+t.substr(f+1)),d&&a&&(h=h/100*(ii(a)?a[0]:a).totalDuration()),f>1?r(e,t.substr(0,f-1),a)+h:c+h)):t==null?c:+t},Au=function(e,t,a){var s=fr(t[1]),l=(s?2:1)+(e<2?0:1),c=t[l],f,h;if(s&&(c.duration=t[1]),c.parent=a,e){for(f=c,h=a;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=mi(h.vars.inherit)&&h.parent;c.immediateRender=mi(f.immediateRender),e<2?c.runBackwards=1:c.startAt=t[l-1]}return new Tn(t[0],c,t[l+1])},cs=function(e,t){return e||e===0?t(e):t},Xu=function(e,t,a){return a<e?e:a>t?t:a},ni=function(e,t){return!In(e)||!(t=gA.exec(e))?"":t[1]},CA=function(e,t,a){return cs(a,function(s){return Xu(e,t,s)})},gm=[].slice,Jy=function(e,t){return e&&La(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&La(e[0]))&&!e.nodeType&&e!==Ta},wA=function(e,t,a){return a===void 0&&(a=[]),e.forEach(function(s){var l;return In(s)&&!t||Jy(s,1)?(l=a).push.apply(l,$i(s)):a.push(s)})||a},$i=function(e,t,a){return on&&!t&&on.selector?on.selector(e):In(e)&&!a&&(hm||!sl())?gm.call((t||Cg).querySelectorAll(e),0):ii(e)?wA(e,a):Jy(e)?gm.call(e,0):e?[e]:[]},_m=function(e){return e=$i(e)[0]||Uu("Invalid scope")||{},function(t){var a=e.current||e.nativeElement||e;return $i(t,a.querySelectorAll?a:a===e?Uu("Invalid scope")||Cg.createElement("div"):e)}},$y=function(e){return e.sort(function(){return .5-Math.random()})},eM=function(e){if(mn(e))return e;var t=La(e)?e:{each:e},a=Ws(t.ease),s=t.from||0,l=parseFloat(t.base)||0,c={},f=s>0&&s<1,h=isNaN(s)||f,d=t.axis,m=s,_=s;return In(s)?m=_={center:.5,edges:.5,end:1}[s]||0:!f&&h&&(m=s[0],_=s[1]),function(v,x,E){var M=(E||t).length,y=c[M],S,R,C,D,w,P,O,F,T;if(!y){if(T=t.grid==="auto"?0:(t.grid||[1,Ji])[1],!T){for(O=-Ji;O<(O=E[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(y=c[M]=[],S=h?Math.min(T,M)*m-.5:s%T,R=T===Ji?0:h?M*_/T-.5:s/T|0,O=0,F=Ji,P=0;P<M;P++)C=P%T-S,D=R-(P/T|0),y[P]=w=d?Math.abs(d==="y"?D:C):By(C*C+D*D),w>O&&(O=w),w<F&&(F=w);s==="random"&&$y(y),y.max=O-F,y.min=F,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(T>M?M-1:d?d==="y"?M/T:T:Math.max(T,M/T))||0)*(s==="edges"?-1:1),y.b=M<0?l-M:l,y.u=ni(t.amount||t.each)||0,a=a&&M<0?cM(a):a}return M=(y[v]-y.min)/y.max||0,ln(y.b+(a?a(M):M)*y.v)+y.u}},vm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var s=ln(Math.round(parseFloat(a)/e)*e*t);return(s-s%1)/t+(fr(a)?0:ni(a))}},tM=function(e,t){var a=ii(e),s,l;return!a&&La(e)&&(s=a=e.radius||Ji,e.values?(e=$i(e.values),(l=!fr(e[0]))&&(s*=s)):e=vm(e.increment)),cs(t,a?mn(e)?function(c){return l=e(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),h=parseFloat(l?c.y:0),d=Ji,m=0,_=e.length,v,x;_--;)l?(v=e[_].x-f,x=e[_].y-h,v=v*v+x*x):v=Math.abs(e[_]-f),v<d&&(d=v,m=_);return m=!s||d<=s?e[m]:c,l||m===c||fr(c)?m:m+ni(c)}:vm(e))},nM=function(e,t,a,s){return cs(ii(e)?!t:a===!0?!!(a=0):!s,function(){return ii(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(t-e+a*.99))/a)*a*s)/s})},DA=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(s){return t.reduce(function(l,c){return c(l)},s)}},UA=function(e,t){return function(a){return e(parseFloat(a))+(t||ni(a))}},NA=function(e,t,a){return aM(e,t,0,1,a)},iM=function(e,t,a){return cs(a,function(s){return e[~~t(s)]})},LA=function r(e,t,a){var s=t-e;return ii(e)?iM(e,r(0,e.length),t):cs(a,function(l){return(s+(l-e)%s)%s+e})},OA=function r(e,t,a){var s=t-e,l=s*2;return ii(e)?iM(e,r(0,e.length-1),t):cs(a,function(c){return c=(l+(c-e)%l)%l||0,e+(c>s?l-c:c)})},Lu=function(e){return e.replace(dA,function(t){var a=t.indexOf("[")+1,s=t.substring(a||7,a?t.indexOf("]"):t.length-1).split(pA);return nM(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},aM=function(e,t,a,s,l){var c=t-e,f=s-a;return cs(l,function(h){return a+((h-e)/c*f||0)})},PA=function r(e,t,a,s){var l=isNaN(e+t)?0:function(x){return(1-x)*e+x*t};if(!l){var c=In(e),f={},h,d,m,_,v;if(a===!0&&(s=1)&&(a=null),c)e={p:e},t={p:t};else if(ii(e)&&!ii(t)){for(m=[],_=e.length,v=_-2,d=1;d<_;d++)m.push(r(e[d-1],e[d]));_--,l=function(E){E*=_;var M=Math.min(v,~~E);return m[M](E-M)},a=t}else s||(e=il(ii(e)?[]:{},e));if(!m){for(h in t)Og.call(f,e,h,"get",t[h]);l=function(E){return zg(E,f)||(c?e.p:e)}}}return cs(a,l)},eS=function(e,t,a){var s=e.labels,l=Ji,c,f,h;for(c in s)f=s[c]-t,f<0==!!a&&f&&l>(f=Math.abs(f))&&(h=c,l=f);return h},Li=function(e,t,a){var s=e.vars,l=s[t],c=on,f=e._ctx,h,d,m;if(l)return h=s[t+"Params"],d=s.callbackScope||e,a&&is.length&&Yf(),f&&(on=f),m=h?l.apply(d,h):l.call(d),on=c,m},yu=function(e){return ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kn),e.progress()<1&&Li(e,"onInterrupt"),e},Ko,rM=[],sM=function(e){if(e)if(e=!e.name&&e.default||e,Rg()||e.headless){var t=e.name,a=mn(e),s=t&&!a&&e.init?function(){this._props=[]}:e,l={init:Nu,render:zg,add:Og,kill:QA,modifier:KA,rawVars:0},c={targetTest:0,get:0,getSetter:Ig,aliases:{},register:0};if(sl(),e!==s){if(Di[t])return;zi(s,zi(qf(e,l),c)),il(s.prototype,il(l,qf(e,c))),Di[s.prop=t]=s,e.targetTest&&(Bf.push(s),Dg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vy(t,s),e.register&&e.register(xi,s,_i)}else rM.push(e)},Jt=255,Mu={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},Tp=function(e,t,a){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(a-t)*e*6:e<.5?a:e*3<2?t+(a-t)*(2/3-e)*6:t)*Jt+.5|0},oM=function(e,t,a){var s=e?fr(e)?[e>>16,e>>8&Jt,e&Jt]:0:Mu.black,l,c,f,h,d,m,_,v,x,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mu[e])s=Mu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Jt,s&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(Zx),!t)h=+s[0]%360/360,d=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(d+1):m+d-m*d,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=Tp(h+1/3,l,c),s[1]=Tp(h,l,c),s[2]=Tp(h-1/3,l,c);else if(~e.indexOf("="))return s=e.match(zy),a&&s.length<4&&(s[3]=1),s}else s=e.match(Zx)||Mu.transparent;s=s.map(Number)}return t&&!E&&(l=s[0]/Jt,c=s[1]/Jt,f=s[2]/Jt,_=Math.max(l,c,f),v=Math.min(l,c,f),m=(_+v)/2,_===v?h=d=0:(x=_-v,d=m>.5?x/(2-_-v):x/(_+v),h=_===l?(c-f)/x+(c<f?6:0):_===c?(f-l)/x+2:(l-c)/x+4,h*=60),s[0]=~~(h+.5),s[1]=~~(d*100+.5),s[2]=~~(m*100+.5)),a&&s.length<4&&(s[3]=1),s},lM=function(e){var t=[],a=[],s=-1;return e.split(as).forEach(function(l){var c=l.match(Zo)||[];t.push.apply(t,c),a.push(s+=c.length+1)}),t.c=a,t},tS=function(e,t,a){var s="",l=(e+s).match(as),c=t?"hsla(":"rgba(",f=0,h,d,m,_;if(!l)return e;if(l=l.map(function(v){return(v=oM(v,t,1))&&c+(t?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(m=lM(e),h=a.c,h.join(s)!==m.c.join(s)))for(d=e.replace(as,"1").split(Zo),_=d.length-1;f<_;f++)s+=d[f]+(~h.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:a).shift());if(!d)for(d=e.split(as),_=d.length-1;f<_;f++)s+=d[f]+l[f];return s+d[_]},as=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mu)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),BA=/hsl[a]?\(/,uM=function(e){var t=e.join(" "),a;if(as.lastIndex=0,as.test(t))return a=BA.test(t),e[1]=tS(e[1],a),e[0]=tS(e[0],a,lM(e[1])),!0},Ou,Ui=(function(){var r=Date.now,e=500,t=33,a=r(),s=a,l=1e3/240,c=l,f=[],h,d,m,_,v,x,E=function M(y){var S=r()-s,R=y===!0,C,D,w,P;if((S>e||S<0)&&(a+=S-t),s+=S,w=s-a,C=w-c,(C>0||R)&&(P=++_.frame,v=w-_.time*1e3,_.time=w=w/1e3,c+=C+(C>=l?4:l-C),D=1),R||(h=d(M)),D)for(x=0;x<f.length;x++)f[x](w,v,P,y)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){Hy&&(!hm&&Rg()&&(Ta=hm=window,Cg=Ta.document||{},Ii.gsap=xi,(Ta.gsapVersions||(Ta.gsapVersions=[])).push(xi.version),Gy(Wf||Ta.GreenSockGlobals||!Ta.gsap&&Ta||{}),rM.forEach(sM)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&_.sleep(),d=m||function(y){return setTimeout(y,c-_.time*1e3+1|0)},Ou=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(h),Ou=0,d=Nu},lagSmoothing:function(y,S){e=y||1/0,t=Math.min(S||33,e)},fps:function(y){l=1e3/(y||240),c=_.time*1e3+l},add:function(y,S,R){var C=S?function(D,w,P,O){y(D,w,P,O),_.remove(C)}:y;return _.remove(y),f[R?"unshift":"push"](C),sl(),C},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},_})(),sl=function(){return!Ou&&Ui.wake()},Ct={},IA=/^[\d.\-M][\d.\-,\s]/,zA=/["']/g,FA=function(e){for(var t={},a=e.substr(1,e.length-3).split(":"),s=a[0],l=1,c=a.length,f,h,d;l<c;l++)h=a[l],f=l!==c-1?h.lastIndexOf(","):h.length,d=h.substr(0,f),t[s]=isNaN(d)?d.replace(zA,"").trim():+d,s=h.substr(f+1).trim();return t},HA=function(e){var t=e.indexOf("(")+1,a=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<a?e.indexOf(")",a+1):a)},GA=function(e){var t=(e+"").split("("),a=Ct[t[0]];return a&&t.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[FA(t[1])]:HA(e).split(",").map(Yy)):Ct._CE&&IA.test(e)?Ct._CE("",e):a},cM=function(e){return function(t){return 1-e(1-t)}},fM=function r(e,t){for(var a=e._first,s;a;)a instanceof oi?r(a,t):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==t&&(a.timeline?r(a.timeline,t):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=t)),a=a._next},Ws=function(e,t){return e&&(mn(e)?e:Ct[e]||GA(e))||t},Zs=function(e,t,a,s){a===void 0&&(a=function(h){return 1-t(1-h)}),s===void 0&&(s=function(h){return h<.5?t(h*2)/2:1-t((1-h)*2)/2});var l={easeIn:t,easeOut:a,easeInOut:s},c;return gi(e,function(f){Ct[f]=Ii[f]=l,Ct[c=f.toLowerCase()]=a;for(var h in l)Ct[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Ct[f+"."+h]=l[h]}),l},hM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ap=function r(e,t,a){var s=t>=1?t:1,l=(a||(e?.3:.45))/(t<1?t:1),c=l/fm*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*hA((m-c)*l)+1},h=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:hM(f);return l=fm/l,h.config=function(d,m){return r(e,d,m)},h},Rp=function r(e,t){t===void 0&&(t=1.70158);var a=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:hM(a);return s.config=function(l){return r(e,l)},s};gi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Zs(r+",Power"+(t-1),e?function(a){return Math.pow(a,t)}:function(a){return a},function(a){return 1-Math.pow(1-a,t)},function(a){return a<.5?Math.pow(a*2,t)/2:1-Math.pow((1-a)*2,t)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;Zs("Elastic",Ap("in"),Ap("out"),Ap());(function(r,e){var t=1/e,a=2*t,s=2.5*t,l=function(f){return f<t?r*f*f:f<a?r*Math.pow(f-1.5/e,2)+.75:f<s?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};Zs("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Zs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Zs("Circ",function(r){return-(By(1-r*r)-1)});Zs("Sine",function(r){return r===1?1:-fA(r*uA)+1});Zs("Back",Rp("in"),Rp("out"),Rp());Ct.SteppedEase=Ct.steps=Ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var a=1/e,s=e+(t?0:1),l=t?1:0,c=1-$t;return function(f){return((s*Xu(0,c,f)|0)+l)*a}}};nl.ease=Ct["quad.out"];gi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ug+=r+","+r+"Params,"});var dM=function(e,t){this.id=cA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xy,this.set=t?t.getSetter:Ig},Pu=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rl(this,+t.duration,1,1),this.data=t.data,on&&(this._ctx=on,on.data.push(this)),Ou||Ui.wake()}var e=r.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,rl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,s){if(sl(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(sh(this,a),!l._dp||l.parent||Zy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&Ra(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===$t||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Wy(this,a,s)),this},e.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Jx(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},e.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Jx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?al(this._tTime,l)+1:1},e.timeScale=function(a,s){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?jf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-$t?0:this._rts,this.totalTime(Xu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),rh(this),MA(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=ln(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Ra(s,this,this._start-this._delay),this}return this._start},e.endTime=function(a){return this._start+(mi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jf(s.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=vA);var s=Kn;return Kn=a,Lg(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Kn=s,this},e.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,$x(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,$x(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,s){return this.totalTime(Ki(this,a),mi(s))},e.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,mi(s)),this._dur||(this._zTime=-$t),this},e.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},e.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-$t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},e.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-$t)},e.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},e.then=function(a){var s=this,l=s._prom;return new Promise(function(c){var f=mn(a)?a:qy,h=function(){var m=s.then;s.then=null,l&&l(),mn(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=m),c(f),s.then=m};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},e.kill=function(){yu(this)},r})();zi(Pu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var oi=(function(r){Py(e,r);function e(a,s){var l;return a===void 0&&(a={}),l=r.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=mi(a.sortChildren),un&&Ra(a.parent||un,ar(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&Ky(ar(l),a.scrollTrigger),l}var t=e.prototype;return t.to=function(s,l,c){return Au(0,arguments,this),this},t.from=function(s,l,c){return Au(1,arguments,this),this},t.fromTo=function(s,l,c,f){return Au(2,arguments,this),this},t.set=function(s,l,c){return l.duration=0,l.parent=this,Tu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Tn(s,l,Ki(this,c),1),this},t.call=function(s,l,c){return Ra(this,Tn.delayedCall(0,s,l),c)},t.staggerTo=function(s,l,c,f,h,d,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=m,c.parent=this,new Tn(s,c,Ki(this,h)),this},t.staggerFrom=function(s,l,c,f,h,d,m){return c.runBackwards=1,Tu(c).immediateRender=mi(c.immediateRender),this.staggerTo(s,l,c,f,h,d,m)},t.staggerFromTo=function(s,l,c,f,h,d,m,_){return f.startAt=c,Tu(f).immediateRender=mi(f.immediateRender),this.staggerTo(s,l,f,h,d,m,_)},t.render=function(s,l,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,m=s<=0?0:ln(s),_=this._zTime<0!=s<0&&(this._initted||!d),v,x,E,M,y,S,R,C,D,w,P,O;if(this!==un&&m>h&&s>=0&&(m=h),m!==this._tTime||c||_){if(f!==this._time&&d&&(m+=this._time-f,s+=this._time-f),v=m,D=this._start,C=this._ts,S=!C,_&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,l,c);if(v=ln(m%y),m===h?(M=this._repeat,v=d):(w=ln(m/y),M=~~w,M&&M===w&&(v=d,M--),v>d&&(v=d)),w=al(this._tTime,y),!f&&this._tTime&&w!==M&&this._tTime-w*y-this._dur<=0&&(w=M),P&&M&1&&(v=d-v,O=1),M!==w&&!this._lock){var F=P&&w&1,T=F===(P&&M&1);if(M<w&&(F=!F),f=F?0:m%d?d:m,this._lock=1,this.render(f||(O?0:ln(M*y)),l,!d)._lock=0,this._tTime=m,!l&&this.parent&&Li(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,w=M),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,T&&(this._lock=2,f=F?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;fM(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=AA(this,ln(f),ln(v)),R&&(m-=v-(v=R._start))),this._tTime=m,this._time=v,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&d&&!l&&!w&&(Li(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,l,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,c),v!==this._time||!this._ts&&!S){R=0,E&&(m+=this._zTime=-$t);break}}x=E}else{x=this._last;for(var L=s<0?s:v;x;){if(E=x._prev,(x._act||L<=x._end)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,l,c);if(x.render(x._ts>0?(L-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(L-x._start)*x._ts,l,c||Kn&&Lg(x)),v!==this._time||!this._ts&&!S){R=0,E&&(m+=this._zTime=L?-$t:$t);break}}x=E}}if(R&&!l&&(this.pause(),R.render(v>=f?0:-$t)._zTime=v>=f?1:-1,this._ts))return this._start=D,rh(this),this.render(s,l,c);this._onUpdate&&!l&&Li(this,"onUpdate",!0),(m===h&&this._tTime>=this.totalDuration()||!m&&f)&&(D===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(m===h&&this._ts>0||!m&&this._ts<0)&&ss(this,1),!l&&!(s<0&&!f)&&(m||f||!h)&&(Li(this,m===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<h&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,l){var c=this;if(fr(l)||(l=Ki(this,l,s)),!(s instanceof Pu)){if(ii(s))return s.forEach(function(f){return c.add(f,l)}),this;if(In(s))return this.addLabel(s,l);if(mn(s))s=Tn.delayedCall(0,s);else return this}return this!==s?Ra(this,s,l):this},t.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ji);for(var h=[],d=this._first;d;)d._start>=f&&(d instanceof Tn?l&&h.push(d):(c&&h.push(d),s&&h.push.apply(h,d.getChildren(!0,l,c)))),d=d._next;return h},t.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},t.remove=function(s){return In(s)?this.removeLabel(s):mn(s)?this.killTweensOf(s):(s.parent===this&&ah(this,s),s===this._recent&&(this._recent=this._last),Xs(this))},t.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ln(Ui.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},t.addLabel=function(s,l){return this.labels[s]=Ki(this,l),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,l,c){var f=Tn.delayedCall(0,l||Nu,c);return f.data="isPause",this._hasPause=1,Ra(this,f,Ki(this,s))},t.removePause=function(s){var l=this._first;for(s=Ki(this,s);l;)l._start===s&&l.data==="isPause"&&ss(l),l=l._next},t.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),h=f.length;h--;)Jr!==f[h]&&f[h].kill(s,l);return this},t.getTweensOf=function(s,l){for(var c=[],f=$i(s),h=this._first,d=fr(l),m;h;)h instanceof Tn?xA(h._targets,f)&&(d?(!Jr||h._initted&&h._ts)&&h.globalTime(0)<=l&&h.globalTime(h.totalDuration())>l:!l||h.isActive())&&c.push(h):(m=h.getTweensOf(f,l)).length&&c.push.apply(c,m),h=h._next;return c},t.tweenTo=function(s,l){l=l||{};var c=this,f=Ki(c,s),h=l,d=h.startAt,m=h.onStart,_=h.onStartParams,v=h.immediateRender,x,E=Tn.to(c,zi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||$t,onStart:function(){if(c.pause(),!x){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==y&&rl(E,y,0,1).render(E._time,!0,!0),x=1}m&&m.apply(E,_||[])}},l));return v?E.render(0):E},t.tweenFromTo=function(s,l,c){return this.tweenTo(l,zi({startAt:{time:Ki(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),eS(this,Ki(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),eS(this,Ki(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+$t)},t.shiftChildren=function(s,l,c){c===void 0&&(c=0);var f=this._first,h=this.labels,d;for(s=ln(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in h)h[d]>=c&&(h[d]+=s);return Xs(this)},t.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Xs(this)},t.totalDuration=function(s){var l=0,c=this,f=c._last,h=Ji,d,m,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(_=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,Ra(c,f,m-f._delay,1)._lock=0):h=m,m<0&&f._ts&&(l-=m,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=ln(m/c._ts),c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),h=0),f._end>l&&f._ts&&(l=f._end),f=d;rl(c,c===un&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(un._ts&&(Wy(un,jf(s,un)),ky=Ui.frame),Ui.frame>=Kx){Kx+=Pi.autoSleep||120;var l=un._first;if((!l||!l._ts)&&Pi.autoSleep&&Ui._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ui.sleep()}}},e})(Pu);zi(oi.prototype,{_lock:0,_hasPause:0,_forcing:0});var VA=function(e,t,a,s,l,c,f){var h=new _i(this._pt,e,t,0,1,xM,null,l),d=0,m=0,_,v,x,E,M,y,S,R;for(h.b=a,h.e=s,a+="",s+="",(S=~s.indexOf("random("))&&(s=Lu(s)),c&&(R=[a,s],c(R,e,t),a=R[0],s=R[1]),v=a.match(Ep)||[];_=Ep.exec(s);)E=_[0],M=s.substring(d,_.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==v[m++]&&(y=parseFloat(v[m-1])||0,h._pt={_next:h._pt,p:M||m===1?M:",",s:y,c:E.charAt(1)==="="?Qo(y,E)-y:parseFloat(E)-y,m:x&&x<4?Math.round:0},d=Ep.lastIndex);return h.c=d<s.length?s.substring(d,s.length):"",h.fp=f,(Fy.test(s)||S)&&(h.e=0),this._pt=h,h},Og=function(e,t,a,s,l,c,f,h,d,m){mn(s)&&(s=s(l||0,e,c));var _=e[t],v=a!=="get"?a:mn(_)?d?e[t.indexOf("set")||!mn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():_,x=mn(_)?d?qA:_M:Bg,E;if(In(s)&&(~s.indexOf("random(")&&(s=Lu(s)),s.charAt(1)==="="&&(E=Qo(v,s)+(ni(v)||0),(E||E===0)&&(s=E))),!m||v!==s||xm)return!isNaN(v*s)&&s!==""?(E=new _i(this._pt,e,t,+v||0,s-(v||0),typeof _=="boolean"?ZA:vM,0,x),d&&(E.fp=d),f&&E.modifier(f,this,e),this._pt=E):(!_&&!(t in e)&&wg(t,s),VA.call(this,e,t,v,s,x,h||Pi.stringFilter,d))},kA=function(e,t,a,s,l){if(mn(e)&&(e=Ru(e,l,t,a,s)),!La(e)||e.style&&e.nodeType||ii(e)||Iy(e))return In(e)?Ru(e,l,t,a,s):e;var c={},f;for(f in e)c[f]=Ru(e[f],l,t,a,s);return c},pM=function(e,t,a,s,l,c){var f,h,d,m;if(Di[e]&&(f=new Di[e]).init(l,f.rawVars?t[e]:kA(t[e],s,l,c,a),a,s,c)!==!1&&(a._pt=h=new _i(a._pt,l,e,0,1,f.render,f,0,f.priority),a!==Ko))for(d=a._ptLookup[a._targets.indexOf(l)],m=f._props.length;m--;)d[f._props[m]]=h;return f},Jr,xm,Pg=function r(e,t,a){var s=e.vars,l=s.ease,c=s.startAt,f=s.immediateRender,h=s.lazy,d=s.onUpdate,m=s.runBackwards,_=s.yoyoEase,v=s.keyframes,x=s.autoRevert,E=e._dur,M=e._startAt,y=e._targets,S=e.parent,R=S&&S.data==="nested"?S.vars.targets:y,C=e._overwrite==="auto"&&!Tg,D=e.timeline,w,P,O,F,T,L,G,Y,q,le,ee,I,H;if(D&&(!v||!l)&&(l="none"),e._ease=Ws(l,nl.ease),e._yEase=_?cM(Ws(_===!0?l:_,nl.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!D&&!!s.runBackwards,!D||v&&!s.stagger){if(Y=y[0]?ks(y[0]).harness:0,I=Y&&s[Y.prop],w=qf(s,Dg),M&&(M._zTime<0&&M.progress(1),t<0&&m&&f&&!x?M.render(-1,!0):M.revert(m&&E?Pf:_A),M._lazy=0),c){if(ss(e._startAt=Tn.set(y,zi({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&mi(h),startAt:null,delay:0,onUpdate:d&&function(){return Li(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kn||!f&&!x)&&e._startAt.revert(Pf),f&&E&&t<=0&&a<=0){t&&(e._zTime=t);return}}else if(m&&E&&!M){if(t&&(f=!1),O=zi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&mi(h),immediateRender:f,stagger:0,parent:S},w),I&&(O[Y.prop]=I),ss(e._startAt=Tn.set(y,O)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kn?e._startAt.revert(Pf):e._startAt.render(-1,!0)),e._zTime=t,!f)r(e._startAt,$t,$t);else if(!t)return}for(e._pt=e._ptCache=0,h=E&&mi(h)||h&&!E,P=0;P<y.length;P++){if(T=y[P],G=T._gsap||Ng(y)[P]._gsap,e._ptLookup[P]=le={},dm[G.id]&&is.length&&Yf(),ee=R===y?P:R.indexOf(T),Y&&(q=new Y).init(T,I||w,e,ee,R)!==!1&&(e._pt=F=new _i(e._pt,T,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(J){le[J]=F}),q.priority&&(L=1)),!Y||I)for(O in w)Di[O]&&(q=pM(O,w,e,ee,T,R))?q.priority&&(L=1):le[O]=F=Og.call(e,T,O,"get",w[O],ee,R,0,s.stringFilter);e._op&&e._op[P]&&e.kill(T,e._op[P]),C&&e._pt&&(Jr=e,un.killTweensOf(T,le,e.globalTime(t)),H=!e.parent,Jr=0),e._pt&&h&&(dm[G.id]=1)}L&&SM(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!H,v&&t<=0&&D.render(Ji,!0,!0)},XA=function(e,t,a,s,l,c,f,h){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],m,_,v,x;if(!d)for(d=e._ptCache[t]=[],v=e._ptLookup,x=e._targets.length;x--;){if(m=v[x][t],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==t&&m.fp!==t;)m=m._next;if(!m)return xm=1,e.vars[t]="+=0",Pg(e,f),xm=0,h?Uu(t+" not eligible for reset"):1;d.push(m)}for(x=d.length;x--;)_=d[x],m=_._pt||_,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=a-m.s,_.e&&(_.e=vn(a)+ni(_.e)),_.b&&(_.b=m.s+ni(_.b))},WA=function(e,t){var a=e[0]?ks(e[0]).harness:0,s=a&&a.aliases,l,c,f,h;if(!s)return t;l=il({},t);for(c in s)if(c in l)for(h=s[c].split(","),f=h.length;f--;)l[h[f]]=l[c];return l},YA=function(e,t,a,s){var l=t.ease||s||"power1.inOut",c,f;if(ii(t))f=a[e]||(a[e]=[]),t.forEach(function(h,d){return f.push({t:d/(t.length-1)*100,v:h,e:l})});else for(c in t)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:t[c],e:l})},Ru=function(e,t,a,s,l){return mn(e)?e.call(t,a,s,l):In(e)&&~e.indexOf("random(")?Lu(e):e},mM=Ug+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gM={};gi(mM+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gM[r]=1});var Tn=(function(r){Py(e,r);function e(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=r.call(this,c?s:Tu(s))||this;var h=f.vars,d=h.duration,m=h.delay,_=h.immediateRender,v=h.stagger,x=h.overwrite,E=h.keyframes,M=h.defaults,y=h.scrollTrigger,S=h.yoyoEase,R=s.parent||un,C=(ii(a)||Iy(a)?fr(a[0]):"length"in s)?[a]:$i(a),D,w,P,O,F,T,L,G;if(f._targets=C.length?Ng(C):Uu("GSAP target "+a+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||v||cf(d)||cf(m)){if(s=f.vars,D=f.timeline=new oi({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:C}),D.kill(),D.parent=D._dp=ar(f),D._start=0,v||cf(d)||cf(m)){if(O=C.length,L=v&&eM(v),La(v))for(F in v)~mM.indexOf(F)&&(G||(G={}),G[F]=v[F]);for(w=0;w<O;w++)P=qf(s,gM),P.stagger=0,S&&(P.yoyoEase=S),G&&il(P,G),T=C[w],P.duration=+Ru(d,ar(f),w,T,C),P.delay=(+Ru(m,ar(f),w,T,C)||0)-f._delay,!v&&O===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),D.to(T,P,L?L(w,T,C):0),D._ease=Ct.none;D.duration()?d=m=0:f.timeline=0}else if(E){Tu(zi(D.vars.defaults,{ease:"none"})),D._ease=Ws(E.ease||s.ease||"none");var Y=0,q,le,ee;if(ii(E))E.forEach(function(I){return D.to(C,I,">")}),D.duration();else{P={};for(F in E)F==="ease"||F==="easeEach"||YA(F,E[F],P,E.easeEach);for(F in P)for(q=P[F].sort(function(I,H){return I.t-H.t}),Y=0,w=0;w<q.length;w++)le=q[w],ee={ease:le.e,duration:(le.t-(w?q[w-1].t:0))/100*d},ee[F]=le.v,D.to(C,ee,Y),Y+=ee.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||f.duration(d=D.duration())}else f.timeline=0;return x===!0&&!Tg&&(Jr=ar(f),un.killTweensOf(C),Jr=0),Ra(R,ar(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(_||!d&&!E&&f._start===ln(R._time)&&mi(_)&&EA(ar(f))&&R.data!=="nested")&&(f._tTime=-$t,f.render(Math.max(0,-m)||0)),y&&Ky(ar(f),y),f}var t=e.prototype;return t.render=function(s,l,c){var f=this._time,h=this._tDur,d=this._dur,m=s<0,_=s>h-$t&&!m?h:s<$t?0:s,v,x,E,M,y,S,R,C,D;if(!d)TA(this,s,l,c);else if(_!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=_,C=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(v=ln(_%M),_===h?(E=this._repeat,v=d):(y=ln(_/M),E=~~y,E&&E===y?(v=d,E--):v>d&&(v=d)),S=this._yoyo&&E&1,S&&(D=this._yEase,v=d-v),y=al(this._tTime,M),v===f&&!c&&this._initted&&E===y)return this._tTime=_,this;E!==y&&(C&&this._yEase&&fM(C,S),this.vars.repeatRefresh&&!S&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(ln(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Qy(this,m?s:v,c,l,_))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._tTime=_,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(D||this._ease)(v/d),this._from&&(this.ratio=R=1-R),!f&&_&&!l&&!y&&(Li(this,"onStart"),this._tTime!==_))return this;for(x=this._pt;x;)x.r(R,x.d),x=x._next;C&&C.render(s<0?s:C._dur*C._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&pm(this,s,l,c),Li(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!l&&this.parent&&Li(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(m&&!this._onUpdate&&pm(this,s,!0,!0),(s||!d)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&ss(this,1),!l&&!(m&&!f)&&(_||f||S)&&(Li(this,_===h?"onComplete":"onReverseComplete",!0),this._prom&&!(_<h&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,l,c,f,h){Ou||Ui.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Pg(this,d),m=this._ease(d/this._dur),XA(this,s,l,c,f,m,d,h)?this.resetTo(s,l,c,f,1):(sh(this,0),this.parent||jy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?yu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Jr&&Jr.vars.overwrite!==!0)._first||yu(this),this.parent&&c!==this.timeline.totalDuration()&&rl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=s?$i(s):f,d=this._ptLookup,m=this._pt,_,v,x,E,M,y,S;if((!l||l==="all")&&yA(f,h))return l==="all"&&(this._pt=0),yu(this);for(_=this._op=this._op||[],l!=="all"&&(In(l)&&(M={},gi(l,function(R){return M[R]=1}),l=M),l=WA(f,l)),S=f.length;S--;)if(~h.indexOf(f[S])){v=d[S],l==="all"?(_[S]=l,E=v,x={}):(x=_[S]=_[S]||{},E=l);for(M in E)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&ah(this,y,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&m&&yu(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return Au(1,arguments)},e.delayedCall=function(s,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(s,l,c){return Au(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,c){return un.killTweensOf(s,l,c)},e})(Pu);zi(Tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gi("staggerTo,staggerFrom,staggerFromTo",function(r){Tn[r]=function(){var e=new oi,t=gm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bg=function(e,t,a){return e[t]=a},_M=function(e,t,a){return e[t](a)},qA=function(e,t,a,s){return e[t](s.fp,a)},jA=function(e,t,a){return e.setAttribute(t,a)},Ig=function(e,t){return mn(e[t])?_M:Ag(e[t])&&e.setAttribute?jA:Bg},vM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ZA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xM=function(e,t){var a=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+s,a=a._next;s+=t.c}t.set(t.t,t.p,s,t)},zg=function(e,t){for(var a=t._pt;a;)a.r(e,a.d),a=a._next},KA=function(e,t,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(e,t,a),l=c},QA=function(e){for(var t=this._pt,a,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?ah(this,t,"_pt"):t.dep||(a=1),t=s;return!a},JA=function(e,t,a,s){s.mSet(e,t,s.m.call(s.tween,a,s.mt),s)},SM=function(e){for(var t=e._pt,a,s,l,c;t;){for(a=t._next,s=l;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:l=t,(t._next=s)?s._prev=t:c=t,t=a}e._pt=l},_i=(function(){function r(t,a,s,l,c,f,h,d,m){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||vM,this.d=h||this,this.set=d||Bg,this.pr=m||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=JA,this.m=a,this.mt=l,this.tween=s},r})();gi(Ug+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Dg[r]=1});Ii.TweenMax=Ii.TweenLite=Tn;Ii.TimelineLite=Ii.TimelineMax=oi;un=new oi({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=uM;var Ys=[],If={},$A=[],nS=0,eR=0,Cp=function(e){return(If[e]||$A).map(function(t){return t()})},Sm=function(){var e=Date.now(),t=[];e-nS>2&&(Cp("matchMediaInit"),Ys.forEach(function(a){var s=a.queries,l=a.conditions,c,f,h,d;for(f in s)c=Ta.matchMedia(s[f]).matches,c&&(h=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),h&&t.push(a))}),Cp("matchMediaRevert"),t.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),nS=e,Cp("matchMedia"))},yM=(function(){function r(t,a){this.selector=a&&_m(a),this.data=[],this._r=[],this.isReverted=!1,this.id=eR++,t&&this.add(t)}var e=r.prototype;return e.add=function(a,s,l){mn(a)&&(l=s,s=a,a=mn);var c=this,f=function(){var d=on,m=c.selector,_;return d&&d!==c&&d.data.push(c),l&&(c.selector=_m(l)),on=c,_=s.apply(c,arguments),mn(_)&&c._r.push(_),on=d,c.selector=m,c.isReverted=!1,_};return c.last=f,a===mn?f(c,function(h){return c.add(null,h)}):a?c[a]=f:f},e.ignore=function(a){var s=on;on=null,a(this),on=s},e.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof r?a.push.apply(a,s.getTweens()):s instanceof Tn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),h=l.data.length,d;h--;)d=l.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,_){return _.g-m.g||-1/0}).forEach(function(m){return m.t.revert(a)}),h=l.data.length;h--;)d=l.data[h],d instanceof oi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Tn)&&d.revert&&d.revert(a);l._r.forEach(function(m){return m(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ys.length;c--;)Ys[c].id===this.id&&Ys.splice(c,1)},e.revert=function(a){this.kill(a||{})},r})(),tR=(function(){function r(t){this.contexts=[],this.scope=t,on&&on.data.push(this)}var e=r.prototype;return e.add=function(a,s,l){La(a)||(a={matches:a});var c=new yM(0,l||this.scope),f=c.conditions={},h,d,m;on&&!c.selector&&(c.selector=on.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?m=1:(h=Ta.matchMedia(a[d]),h&&(Ys.indexOf(c)<0&&Ys.push(c),(f[d]=h.matches)&&(m=1),h.addListener?h.addListener(Sm):h.addEventListener("change",Sm)));return m&&s(c,function(_){return c.add(null,_)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},r})(),Zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach(function(s){return sM(s)})},timeline:function(e){return new oi(e)},getTweensOf:function(e,t){return un.getTweensOf(e,t)},getProperty:function(e,t,a,s){In(e)&&(e=$i(e)[0]);var l=ks(e||{}).get,c=a?qy:Yy;return a==="native"&&(a=""),e&&(t?c((Di[t]&&Di[t].get||l)(e,t,a,s)):function(f,h,d){return c((Di[f]&&Di[f].get||l)(e,f,h,d))})},quickSetter:function(e,t,a){if(e=$i(e),e.length>1){var s=e.map(function(m){return xi.quickSetter(m,t,a)}),l=s.length;return function(m){for(var _=l;_--;)s[_](m)}}e=e[0]||{};var c=Di[t],f=ks(e),h=f.harness&&(f.harness.aliases||{})[t]||t,d=c?function(m){var _=new c;Ko._pt=0,_.init(e,a?m+a:m,Ko,0,[e]),_.render(1,_),Ko._pt&&zg(1,Ko)}:f.set(e,h);return c?d:function(m){return d(e,h,a?m+a:m,f,1)}},quickTo:function(e,t,a){var s,l=xi.to(e,zi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(h,d,m){return l.resetTo(t,h,d,m)};return c.tween=l,c},isTweening:function(e){return un.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ws(e.ease,nl.ease)),Qx(nl,e||{})},config:function(e){return Qx(Pi,e||{})},registerEffect:function(e){var t=e.name,a=e.effect,s=e.plugins,l=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Di[f]&&!Ii[f]&&Uu(t+" effect requires "+f+" plugin.")}),bp[t]=function(f,h,d){return a($i(f),zi(h||{},l),d)},c&&(oi.prototype[t]=function(f,h,d){return this.add(bp[t](f,La(h)?h:(d=h)&&{},this),d)})},registerEase:function(e,t){Ct[e]=Ws(t)},parseEase:function(e,t){return arguments.length?Ws(e,t):Ct},getById:function(e){return un.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var a=new oi(e),s,l;for(a.smoothChildTiming=mi(e.smoothChildTiming),un.remove(a),a._dp=0,a._time=a._tTime=un._time,s=un._first;s;)l=s._next,(t||!(!s._dur&&s instanceof Tn&&s.vars.onComplete===s._targets[0]))&&Ra(a,s,s._start-s._delay),s=l;return Ra(un,a,0),a},context:function(e,t){return e?new yM(e,t):on},matchMedia:function(e){return new tR(e)},matchMediaRefresh:function(){return Ys.forEach(function(e){var t=e.conditions,a,s;for(s in t)t[s]&&(t[s]=!1,a=1);a&&e.revert()})||Sm()},addEventListener:function(e,t){var a=If[e]||(If[e]=[]);~a.indexOf(t)||a.push(t)},removeEventListener:function(e,t){var a=If[e],s=a&&a.indexOf(t);s>=0&&a.splice(s,1)},utils:{wrap:LA,wrapYoyo:OA,distribute:eM,random:nM,snap:tM,normalize:NA,getUnit:ni,clamp:CA,splitColor:oM,toArray:$i,selector:_m,mapRange:aM,pipe:DA,unitize:UA,interpolate:PA,shuffle:$y},install:Gy,effects:bp,ticker:Ui,updateRoot:oi.updateRoot,plugins:Di,globalTimeline:un,core:{PropTween:_i,globals:Vy,Tween:Tn,Timeline:oi,Animation:Pu,getCache:ks,_removeLinkedListItem:ah,reverting:function(){return Kn},context:function(e){return e&&on&&(on.data.push(e),e._ctx=on),on},suppressOverwrites:function(e){return Tg=e}}};gi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Zf[r]=Tn[r]});Ui.add(oi.updateRoot);Ko=Zf.to({},{duration:0});var nR=function(e,t){for(var a=e._pt;a&&a.p!==t&&a.op!==t&&a.fp!==t;)a=a._next;return a},iR=function(e,t){var a=e._targets,s,l,c;for(s in t)for(l=a.length;l--;)c=e._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=nR(c,s)),c&&c.modifier&&c.modifier(t[s],e,a[l],s))},wp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var h,d;if(In(l)&&(h={},gi(l,function(m){return h[m]=1}),l=h),t){h={};for(d in l)h[d]=t(l[d]);l=h}iR(f,l)}}}},xi=Zf.registerPlugin({name:"attr",init:function(e,t,a,s,l){var c,f,h;this.tween=a;for(c in t)h=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(h||0)+"",t[c],s,l,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(e,t){for(var a=t._pt;a;)Kn?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,t){for(var a=t.length;a--;)this.add(e,a,e[a]||0,t[a],0,0,0,0,0,1)}},wp("roundProps",vm),wp("modifiers"),wp("snap",tM))||Zf;Tn.version=oi.version=xi.version="3.14.2";Hy=1;Rg()&&sl();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;var iS,$r,Jo,Fg,Gs,aS,Hg,aR=function(){return typeof window<"u"},hr={},Is=180/Math.PI,$o=Math.PI/180,Lo=Math.atan2,rS=1e8,Gg=/([A-Z])/g,rR=/(left|right|width|margin|padding|x)/i,sR=/[\s,\(]\S/,wa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cR=function(e,t){var a=t.s+t.c*e;t.set(t.t,t.p,~~(a+(a<0?-.5:.5))+t.u,t)},MM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},EM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fR=function(e,t,a){return e.style[t]=a},hR=function(e,t,a){return e.style.setProperty(t,a)},dR=function(e,t,a){return e._gsap[t]=a},pR=function(e,t,a){return e._gsap.scaleX=e._gsap.scaleY=a},mR=function(e,t,a,s,l){var c=e._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},gR=function(e,t,a,s,l){var c=e._gsap;c[t]=a,c.renderTransform(l,c)},cn="transform",vi=cn+"Origin",_R=function r(e,t){var a=this,s=this.target,l=s.style,c=s._gsap;if(e in hr&&l){if(this.tfm=this.tfm||{},e!=="transform")e=wa[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=rr(s,f)}):this.tfm[e]=c.x?c[e]:rr(s,e),e===vi&&(this.tfm.zOrigin=c.zOrigin);else return wa.transform.split(",").forEach(function(f){return r.call(a,f,t)});if(this.props.indexOf(cn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(vi,t,"")),e=cn}(l||t)&&this.props.push(e,t,l[e])},bM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vR=function(){var e=this.props,t=this.target,a=t.style,s=t._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?a[e[l]]=e[l+2]:a.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(Gg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=Hg(),(!l||!l.isStart)&&!a[cn]&&(bM(a),s.zOrigin&&a[vi]&&(a[vi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},TM=function(e,t){var a={target:e,props:[],revert:vR,save:_R};return e._gsap||xi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return a.save(s)}),a},AM,Mm=function(e,t){var a=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return a&&a.style?a:$r.createElement(e)},Oi=function r(e,t,a){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Gg,"-$1").toLowerCase())||s.getPropertyValue(t)||!a&&r(e,ol(t)||t,1)||""},sS="O,Moz,ms,Ms,Webkit".split(","),ol=function(e,t,a){var s=t||Gs,l=s.style,c=5;if(e in l&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(sS[c]+e in l););return c<0?null:(c===3?"ms":c>=0?sS[c]:"")+e},Em=function(){aR()&&window.document&&(iS=window,$r=iS.document,Jo=$r.documentElement,Gs=Mm("div")||{style:{}},Mm("div"),cn=ol(cn),vi=cn+"Origin",Gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",AM=!!ol("perspective"),Hg=xi.core.reverting,Fg=1)},oS=function(e){var t=e.ownerSVGElement,a=Mm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",a.appendChild(s),Jo.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),Jo.removeChild(a),l},lS=function(e,t){for(var a=t.length;a--;)if(e.hasAttribute(t[a]))return e.getAttribute(t[a])},RM=function(e){var t,a;try{t=e.getBBox()}catch{t=oS(e),a=1}return t&&(t.width||t.height)||a||(t=oS(e)),t&&!t.width&&!t.x&&!t.y?{x:+lS(e,["x","cx","x1"])||0,y:+lS(e,["y","cy","y1"])||0,width:0,height:0}:t},CM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&RM(e))},os=function(e,t){if(t){var a=e.style,s;t in hr&&t!==vi&&(t=cn),a.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),a.removeProperty(s==="--"?t:t.replace(Gg,"-$1").toLowerCase())):a.removeAttribute(t)}},es=function(e,t,a,s,l,c){var f=new _i(e._pt,t,a,0,1,c?EM:MM);return e._pt=f,f.b=s,f.e=l,e._props.push(a),f},uS={deg:1,rad:1,turn:1},xR={grid:1,flex:1},ls=function r(e,t,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Gs.style,h=rR.test(t),d=e.tagName.toLowerCase()==="svg",m=(d?"client":"offset")+(h?"Width":"Height"),_=100,v=s==="px",x=s==="%",E,M,y,S;if(s===c||!l||uS[s]||uS[c])return l;if(c!=="px"&&!v&&(l=r(e,t,a,"px")),S=e.getCTM&&CM(e),(x||c==="%")&&(hr[t]||~t.indexOf("adius")))return E=S?e.getBBox()[h?"width":"height"]:e[m],vn(x?l/E*_:l/100*E);if(f[h?"width":"height"]=_+(v?c:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===$r||!M.appendChild)&&(M=$r.body),y=M._gsap,y&&x&&y.width&&h&&y.time===Ui.time&&!y.uncache)return vn(l/y.width*_);if(x&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=_+s,E=e[m],R?e.style[t]=R:os(e,t)}else(x||c==="%")&&!xR[Oi(M,"display")]&&(f.position=Oi(e,"position")),M===e&&(f.position="static"),M.appendChild(Gs),E=Gs[m],M.removeChild(Gs),f.position="absolute";return h&&x&&(y=ks(M),y.time=Ui.time,y.width=M[m]),vn(v?E*l/_:E&&l?_/E*l:0)},rr=function(e,t,a,s){var l;return Fg||Em(),t in wa&&t!=="transform"&&(t=wa[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(l=Iu(e,s),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:Qf(Oi(e,vi))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Kf[t]&&Kf[t](e,t,a)||Oi(e,t)||Xy(e,t)||(t==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?ls(e,t,l,a)+a:l},SR=function(e,t,a,s){if(!a||a==="none"){var l=ol(t,e,1),c=l&&Oi(e,l,1);c&&c!==a?(t=l,a=c):t==="borderColor"&&(a=Oi(e,"borderTopColor"))}var f=new _i(this._pt,e.style,t,0,1,xM),h=0,d=0,m,_,v,x,E,M,y,S,R,C,D,w;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Oi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=Oi(e,t)||s,M?e.style[t]=M:os(e,t)),m=[a,s],uM(m),a=m[0],s=m[1],v=a.match(Zo)||[],w=s.match(Zo)||[],w.length){for(;_=Zo.exec(s);)y=_[0],R=s.substring(h,_.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),y!==(M=v[d++]||"")&&(x=parseFloat(M)||0,D=M.substr((x+"").length),y.charAt(1)==="="&&(y=Qo(x,y)+D),S=parseFloat(y),C=y.substr((S+"").length),h=Zo.lastIndex-C.length,C||(C=C||Pi.units[t]||D,h===s.length&&(s+=C,f.e+=C)),D!==C&&(x=ls(e,t,M,C)||0),f._pt={_next:f._pt,p:R||d===1?R:",",s:x,c:S-x,m:E&&E<4||t==="zIndex"?Math.round:0});f.c=h<s.length?s.substring(h,s.length):""}else f.r=t==="display"&&s==="none"?EM:MM;return Fy.test(s)&&(f.e=0),this._pt=f,f},cS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yR=function(e){var t=e.split(" "),a=t[0],s=t[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(e=a,a=s,s=e),t[0]=cS[a]||a,t[1]=cS[s]||s,t.join(" ")},MR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var a=t.t,s=a.style,l=t.u,c=a._gsap,f,h,d;if(l==="all"||l===!0)s.cssText="",h=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],hr[f]&&(h=1,f=f==="transformOrigin"?vi:cn),os(a,f);h&&(os(a,cn),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Iu(a,1),c.uncache=1,bM(s)))}},Kf={clearProps:function(e,t,a,s,l){if(l.data!=="isFromStart"){var c=e._pt=new _i(e._pt,t,a,0,0,MR);return c.u=s,c.pr=-10,c.tween=l,e._props.push(a),1}}},Bu=[1,0,0,1,0,0],wM={},DM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fS=function(e){var t=Oi(e,cn);return DM(t)?Bu:t.substr(7).match(zy).map(vn)},Vg=function(e,t){var a=e._gsap||ks(e),s=e.style,l=fS(e),c,f,h,d;return a.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,l=[h.a,h.b,h.c,h.d,h.e,h.f],l.join(",")==="1,0,0,1,0,0"?Bu:l):(l===Bu&&!e.offsetParent&&e!==Jo&&!a.svg&&(h=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,Jo.appendChild(e)),l=fS(e),h?s.display=h:os(e,"display"),d&&(f?c.insertBefore(e,f):c?c.appendChild(e):Jo.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},bm=function(e,t,a,s,l,c){var f=e._gsap,h=l||Vg(e,!0),d=f.xOrigin||0,m=f.yOrigin||0,_=f.xOffset||0,v=f.yOffset||0,x=h[0],E=h[1],M=h[2],y=h[3],S=h[4],R=h[5],C=t.split(" "),D=parseFloat(C[0])||0,w=parseFloat(C[1])||0,P,O,F,T;a?h!==Bu&&(O=x*y-E*M)&&(F=D*(y/O)+w*(-M/O)+(M*R-y*S)/O,T=D*(-E/O)+w*(x/O)-(x*R-E*S)/O,D=F,w=T):(P=RM(e),D=P.x+(~C[0].indexOf("%")?D/100*P.width:D),w=P.y+(~(C[1]||C[0]).indexOf("%")?w/100*P.height:w)),s||s!==!1&&f.smooth?(S=D-d,R=w-m,f.xOffset=_+(S*x+R*M)-S,f.yOffset=v+(S*E+R*y)-R):f.xOffset=f.yOffset=0,f.xOrigin=D,f.yOrigin=w,f.smooth=!!s,f.origin=t,f.originIsAbsolute=!!a,e.style[vi]="0px 0px",c&&(es(c,f,"xOrigin",d,D),es(c,f,"yOrigin",m,w),es(c,f,"xOffset",_,f.xOffset),es(c,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",D+" "+w)},Iu=function(e,t){var a=e._gsap||new dM(e);if("x"in a&&!t&&!a.uncache)return a;var s=e.style,l=a.scaleX<0,c="px",f="deg",h=getComputedStyle(e),d=Oi(e,vi)||"0",m,_,v,x,E,M,y,S,R,C,D,w,P,O,F,T,L,G,Y,q,le,ee,I,H,J,_e,xe,B,te,pe,be,Ne;return m=_=v=M=y=S=R=C=D=0,x=E=1,a.svg=!!(e.getCTM&&CM(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[cn]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[cn]!=="none"?h[cn]:"")),s.scale=s.rotate=s.translate="none"),O=Vg(e,a.svg),a.svg&&(a.uncache?(J=e.getBBox(),d=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),bm(e,H||d,!!H||a.originIsAbsolute,a.smooth!==!1,O)),w=a.xOrigin||0,P=a.yOrigin||0,O!==Bu&&(G=O[0],Y=O[1],q=O[2],le=O[3],m=ee=O[4],_=I=O[5],O.length===6?(x=Math.sqrt(G*G+Y*Y),E=Math.sqrt(le*le+q*q),M=G||Y?Lo(Y,G)*Is:0,R=q||le?Lo(q,le)*Is+M:0,R&&(E*=Math.abs(Math.cos(R*$o))),a.svg&&(m-=w-(w*G+P*q),_-=P-(w*Y+P*le))):(Ne=O[6],pe=O[7],xe=O[8],B=O[9],te=O[10],be=O[11],m=O[12],_=O[13],v=O[14],F=Lo(Ne,te),y=F*Is,F&&(T=Math.cos(-F),L=Math.sin(-F),H=ee*T+xe*L,J=I*T+B*L,_e=Ne*T+te*L,xe=ee*-L+xe*T,B=I*-L+B*T,te=Ne*-L+te*T,be=pe*-L+be*T,ee=H,I=J,Ne=_e),F=Lo(-q,te),S=F*Is,F&&(T=Math.cos(-F),L=Math.sin(-F),H=G*T-xe*L,J=Y*T-B*L,_e=q*T-te*L,be=le*L+be*T,G=H,Y=J,q=_e),F=Lo(Y,G),M=F*Is,F&&(T=Math.cos(F),L=Math.sin(F),H=G*T+Y*L,J=ee*T+I*L,Y=Y*T-G*L,I=I*T-ee*L,G=H,ee=J),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),x=vn(Math.sqrt(G*G+Y*Y+q*q)),E=vn(Math.sqrt(I*I+Ne*Ne)),F=Lo(ee,I),R=Math.abs(F)>2e-4?F*Is:0,D=be?1/(be<0?-be:be):0),a.svg&&(H=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!DM(Oi(e,cn)),H&&e.setAttribute("transform",H))),Math.abs(R)>90&&Math.abs(R)<270&&(l?(x*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||a.uncache,a.x=m-((a.xPercent=m&&(!t&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+c,a.y=_-((a.yPercent=_&&(!t&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=vn(x),a.scaleY=vn(E),a.rotation=vn(M)+f,a.rotationX=vn(y)+f,a.rotationY=vn(S)+f,a.skewX=R+f,a.skewY=C+f,a.transformPerspective=D+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!t&&a.zOrigin||0)&&(s[vi]=Qf(d)),a.xOffset=a.yOffset=0,a.force3D=Pi.force3D,a.renderTransform=a.svg?bR:AM?UM:ER,a.uncache=0,a},Qf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Dp=function(e,t,a){var s=ni(t);return vn(parseFloat(t)+parseFloat(ls(e,"x",a+"px",s)))+s},ER=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,UM(e,t)},ws="0deg",pu="0px",Ds=") ",UM=function(e,t){var a=t||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,h=a.z,d=a.rotation,m=a.rotationY,_=a.rotationX,v=a.skewX,x=a.skewY,E=a.scaleX,M=a.scaleY,y=a.transformPerspective,S=a.force3D,R=a.target,C=a.zOrigin,D="",w=S==="auto"&&e&&e!==1||S===!0;if(C&&(_!==ws||m!==ws)){var P=parseFloat(m)*$o,O=Math.sin(P),F=Math.cos(P),T;P=parseFloat(_)*$o,T=Math.cos(P),c=Dp(R,c,O*T*-C),f=Dp(R,f,-Math.sin(P)*-C),h=Dp(R,h,F*T*-C+C)}y!==pu&&(D+="perspective("+y+Ds),(s||l)&&(D+="translate("+s+"%, "+l+"%) "),(w||c!==pu||f!==pu||h!==pu)&&(D+=h!==pu||w?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+Ds),d!==ws&&(D+="rotate("+d+Ds),m!==ws&&(D+="rotateY("+m+Ds),_!==ws&&(D+="rotateX("+_+Ds),(v!==ws||x!==ws)&&(D+="skew("+v+", "+x+Ds),(E!==1||M!==1)&&(D+="scale("+E+", "+M+Ds),R.style[cn]=D||"translate(0, 0)"},bR=function(e,t){var a=t||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,h=a.rotation,d=a.skewX,m=a.skewY,_=a.scaleX,v=a.scaleY,x=a.target,E=a.xOrigin,M=a.yOrigin,y=a.xOffset,S=a.yOffset,R=a.forceCSS,C=parseFloat(c),D=parseFloat(f),w,P,O,F,T;h=parseFloat(h),d=parseFloat(d),m=parseFloat(m),m&&(m=parseFloat(m),d+=m,h+=m),h||d?(h*=$o,d*=$o,w=Math.cos(h)*_,P=Math.sin(h)*_,O=Math.sin(h-d)*-v,F=Math.cos(h-d)*v,d&&(m*=$o,T=Math.tan(d-m),T=Math.sqrt(1+T*T),O*=T,F*=T,m&&(T=Math.tan(m),T=Math.sqrt(1+T*T),w*=T,P*=T)),w=vn(w),P=vn(P),O=vn(O),F=vn(F)):(w=_,F=v,P=O=0),(C&&!~(c+"").indexOf("px")||D&&!~(f+"").indexOf("px"))&&(C=ls(x,"x",c,"px"),D=ls(x,"y",f,"px")),(E||M||y||S)&&(C=vn(C+E-(E*w+M*O)+y),D=vn(D+M-(E*P+M*F)+S)),(s||l)&&(T=x.getBBox(),C=vn(C+s/100*T.width),D=vn(D+l/100*T.height)),T="matrix("+w+","+P+","+O+","+F+","+C+","+D+")",x.setAttribute("transform",T),R&&(x.style[cn]=T)},TR=function(e,t,a,s,l){var c=360,f=In(l),h=parseFloat(l)*(f&&~l.indexOf("rad")?Is:1),d=h-s,m=s+d+"deg",_,v;return f&&(_=l.split("_")[1],_==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),_==="cw"&&d<0?d=(d+c*rS)%c-~~(d/c)*c:_==="ccw"&&d>0&&(d=(d-c*rS)%c-~~(d/c)*c)),e._pt=v=new _i(e._pt,t,a,s,d,oR),v.e=m,v.u="deg",e._props.push(a),v},hS=function(e,t){for(var a in t)e[a]=t[a];return e},AR=function(e,t,a){var s=hS({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,h,d,m,_,v,x,E;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[cn]=t,f=Iu(a,1),os(a,cn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[cn],c[cn]=t,f=Iu(a,1),c[cn]=d);for(h in hr)d=s[h],m=f[h],d!==m&&l.indexOf(h)<0&&(x=ni(d),E=ni(m),_=x!==E?ls(a,h,d,E):parseFloat(d),v=parseFloat(m),e._pt=new _i(e._pt,f,h,_,v-_,ym),e._pt.u=E||0,e._props.push(h));hS(f,s)};gi("padding,margin,Width,Radius",function(r,e){var t="Top",a="Right",s="Bottom",l="Left",c=(e<3?[t,a,s,l]:[t+l,t+a,s+a,s+l]).map(function(f){return e<2?r+f:"border"+f+r});Kf[e>1?"border"+r:r]=function(f,h,d,m,_){var v,x;if(arguments.length<4)return v=c.map(function(E){return rr(f,E,d)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(m+"").split(" "),x={},c.forEach(function(E,M){return x[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(h,x,_)}});var NM={name:"css",register:Em,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,a,s,l){var c=this._props,f=e.style,h=a.vars.startAt,d,m,_,v,x,E,M,y,S,R,C,D,w,P,O,F,T;Fg||Em(),this.styles=this.styles||TM(e),F=this.styles.props,this.tween=a;for(M in t)if(M!=="autoRound"&&(m=t[M],!(Di[M]&&pM(M,t,a,s,e,l)))){if(x=typeof m,E=Kf[M],x==="function"&&(m=m.call(a,s,e,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=Lu(m)),E)E(this,e,M,m,a)&&(O=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),m+="",as.lastIndex=0,as.test(d)||(y=ni(d),S=ni(m),S?y!==S&&(d=ls(e,M,d,S)+S):y&&(m+=y)),this.add(f,"setProperty",d,m,s,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(x!=="undefined"){if(h&&M in h?(d=typeof h[M]=="function"?h[M].call(a,s,e,l):h[M],In(d)&&~d.indexOf("random(")&&(d=Lu(d)),ni(d+"")||d==="auto"||(d+=Pi.units[M]||ni(rr(e,M))||""),(d+"").charAt(1)==="="&&(d=rr(e,M))):d=rr(e,M),v=parseFloat(d),R=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),R&&(m=m.substr(2)),_=parseFloat(m),M in wa&&(M==="autoAlpha"&&(v===1&&rr(e,"visibility")==="hidden"&&_&&(v=0),F.push("visibility",0,f.visibility),es(this,f,"visibility",v?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=wa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in hr,C){if(this.styles.save(M),T=m,x==="string"&&m.substring(0,6)==="var(--"){if(m=Oi(e,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=m,m=Oi(e,"perspective"),L?e.style.perspective=L:os(e,"perspective")}_=parseFloat(m)}if(D||(w=e._gsap,w.renderTransform&&!t.parseTransform||Iu(e,t.parseTransform),P=t.smoothOrigin!==!1&&w.smooth,D=this._pt=new _i(this._pt,f,cn,0,1,w.renderTransform,w,0,-1),D.dep=1),M==="scale")this._pt=new _i(this._pt,w,"scaleY",w.scaleY,(R?Qo(w.scaleY,R+_):_)-w.scaleY||0,ym),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(vi,0,f[vi]),m=yR(m),w.svg?bm(e,m,0,P,0,this):(S=parseFloat(m.split(" ")[2])||0,S!==w.zOrigin&&es(this,w,"zOrigin",w.zOrigin,S),es(this,f,M,Qf(d),Qf(m)));continue}else if(M==="svgOrigin"){bm(e,m,1,P,0,this);continue}else if(M in wM){TR(this,w,M,v,R?Qo(v,R+m):m);continue}else if(M==="smoothOrigin"){es(this,w,"smooth",w.smooth,m);continue}else if(M==="force3D"){w[M]=m;continue}else if(M==="transform"){AR(this,m,e);continue}}else M in f||(M=ol(M)||M);if(C||(_||_===0)&&(v||v===0)&&!sR.test(m)&&M in f)y=(d+"").substr((v+"").length),_||(_=0),S=ni(m)||(M in Pi.units?Pi.units[M]:y),y!==S&&(v=ls(e,M,d,S)),this._pt=new _i(this._pt,C?w:f,M,v,(R?Qo(v,R+_):_)-v,!C&&(S==="px"||M==="zIndex")&&t.autoRound!==!1?cR:ym),this._pt.u=S||0,C&&T!==m?(this._pt.b=d,this._pt.e=T,this._pt.r=uR):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=lR);else if(M in f)SR.call(this,e,M,d,R?R+m:m);else if(M in e)this.add(e,M,d||e[M],R?R+m:m,s,l);else if(M!=="parseTransform"){wg(M,m);continue}C||(M in f?F.push(M,0,f[M]):typeof e[M]=="function"?F.push(M,2,e[M]()):F.push(M,1,d||e[M])),c.push(M)}}O&&SM(this)},render:function(e,t){if(t.tween._time||!Hg())for(var a=t._pt;a;)a.r(e,a.d),a=a._next;else t.styles.revert()},get:rr,aliases:wa,getSetter:function(e,t,a){var s=wa[t];return s&&s.indexOf(",")<0&&(t=s),t in hr&&t!==vi&&(e._gsap.x||rr(e,"x"))?a&&aS===a?t==="scale"?pR:dR:(aS=a||{})&&(t==="scale"?mR:gR):e.style&&!Ag(e.style[t])?fR:~t.indexOf("-")?hR:Ig(e,t)},core:{_removeProperty:os,_getMatrix:Vg}};xi.utils.checkPrefix=ol;xi.core.getStyleSaver=TM;(function(r,e,t,a){var s=gi(r+","+e+","+t,function(l){hr[l]=1});gi(e,function(l){Pi.units[l]="deg",wM[l]=1}),wa[s[13]]=r+","+e,gi(a,function(l){var c=l.split(":");wa[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Pi.units[r]="px"});xi.registerPlugin(NM);var wi=xi.registerPlugin(NM)||xi;wi.core.Tween;const LM=({text:r,as:e="div",typingSpeed:t=50,initialDelay:a=0,pauseDuration:s=2e3,deletingSpeed:l=30,loop:c=!0,className:f="",showCursor:h=!0,hideCursorWhileTyping:d=!1,cursorCharacter:m="|",cursorClassName:_="",cursorBlinkDuration:v=.5,textColors:x=[],variableSpeed:E,onSentenceComplete:M,startOnVisible:y=!1,reverseMode:S=!1,...R})=>{const[C,D]=Q.useState(""),[w,P]=Q.useState(0),[O,F]=Q.useState(!1),[T,L]=Q.useState(0),[G,Y]=Q.useState(!y),q=Q.useRef(null),le=Q.useRef(null),ee=Q.useMemo(()=>Array.isArray(r)?r:[r],[r]),I=Q.useCallback(()=>{if(!E)return t;const{min:_e,max:xe}=E;return Math.random()*(xe-_e)+_e},[E,t]),H=()=>{if(x.length!==0)return x[T%x.length]};Q.useEffect(()=>{if(!y||!le.current)return;const _e=new IntersectionObserver(xe=>{xe.forEach(B=>{B.isIntersecting&&Y(!0)})},{threshold:.1});return _e.observe(le.current),()=>_e.disconnect()},[y]),Q.useEffect(()=>{h&&q.current&&(wi.set(q.current,{opacity:1}),wi.to(q.current,{opacity:0,duration:v,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[h,v]),Q.useEffect(()=>{if(!G)return;let _e;const xe=ee[T],B=S?xe.split("").reverse().join(""):xe,te=()=>{if(O)if(C===""){if(F(!1),T===ee.length-1&&!c)return;M&&M(ee[T],T),L(pe=>(pe+1)%ee.length),P(0),_e=setTimeout(()=>{},s)}else _e=setTimeout(()=>{D(pe=>pe.slice(0,-1))},l);else if(w<B.length)_e=setTimeout(()=>{D(pe=>pe+B[w]),P(pe=>pe+1)},E?I():t);else if(ee.length>=1){if(!c&&T===ee.length-1)return;_e=setTimeout(()=>{F(!0)},s)}};return w===0&&!O&&C===""?_e=setTimeout(te,a):te(),()=>clearTimeout(_e)},[w,C,O,t,l,s,ee,T,c,a,G,S,E,M]);const J=d&&(w<ee[T].length||O);return Q.createElement(e,{ref:le,className:`text-type ${f}`,...R},oe.jsx("span",{className:"text-type__content",style:{color:H()||"inherit"},children:C}),h&&oe.jsx("span",{ref:q,className:`text-type__cursor ${_} ${J?"text-type__cursor--hidden":""}`,children:m}))},Up=(r,e)=>{let t=r.startsWith("#")?r.slice(1):r;t.length===3&&(t=t.split("").map(f=>f+f).join(""));const a=parseInt(t,16);let s=a>>16&255,l=a>>8&255,c=a&255;return s=Math.max(0,Math.min(255,Math.floor(s*(1-e)))),l=Math.max(0,Math.min(255,Math.floor(l*(1-e)))),c=Math.max(0,Math.min(255,Math.floor(c*(1-e)))),"#"+((1<<24)+(s<<16)+(l<<8)+c).toString(16).slice(1).toUpperCase()},RR=({color:r="#5227FF",size:e=1,items:t=[],className:a=""})=>{const l=t.slice(0,3);for(;l.length<3;)l.push(null);const[c,f]=Q.useState(!1),[h,d]=Q.useState(Array.from({length:3},()=>({x:0,y:0}))),m=Up(r,.08),_=Up("#ffffff",.1),v=Up("#ffffff",.05),x="#ffffff",E=()=>{f(D=>!D),c&&d(Array.from({length:3},()=>({x:0,y:0})))},M=(D,w)=>{if(!c)return;const P=D.currentTarget.getBoundingClientRect(),O=P.left+P.width/2,F=P.top+P.height/2,T=(D.clientX-O)*.15,L=(D.clientY-F)*.15;d(G=>{const Y=[...G];return Y[w]={x:T,y:L},Y})},y=(D,w)=>{d(P=>{const O=[...P];return O[w]={x:0,y:0},O})},S={"--folder-color":r,"--folder-back-color":m,"--paper-1":_,"--paper-2":v,"--paper-3":x},R=`folder ${c?"open":""}`.trim(),C={transform:`scale(${e})`};return oe.jsx("div",{style:C,className:a,children:oe.jsx("div",{className:R,style:S,onClick:E,children:oe.jsxs("div",{className:"folder__back",children:[l.map((D,w)=>oe.jsx("div",{className:`paper paper-${w+1}`,onMouseMove:P=>M(P,w),onMouseLeave:P=>y(P,w),style:c?{"--magnet-x":`${h[w]?.x||0}px`,"--magnet-y":`${h[w]?.y||0}px`}:{},children:D},w)),oe.jsx("div",{className:"folder__front"}),oe.jsx("div",{className:"folder__front right"})]})})})};function CR(){const[r,e]=Q.useState(!1);return oe.jsx(oe.Fragment,{children:oe.jsx("div",{className:"h-screen flex items-center justify-center",children:oe.jsxs("div",{className:"absolute top-70 flex flex-col items-center justify-center gap-4",children:[oe.jsx(LM,{text:["안녕하세요 찾아주셔서 감사합니다!","먼저 제가 좋아하는 3가지에 대해 알려드릴게요"],loop:!1,startOnVisible:!0,className:"text-4xl font-bold"}),oe.jsx("div",{className:"relative flex items-center justify-center",children:oe.jsxs("div",{className:"absolute top-50",onClick:()=>e(!0),children:[!r&&oe.jsxs(oe.Fragment,{children:[oe.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-2 border-violet-400/50 animate-ping pointer-events-none"}),oe.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-2 border-emerald-400/50 animate-ping pointer-events-none",style:{animationDelay:"0.3s"}}),oe.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-violet-400/30 animate-ping pointer-events-none",style:{animationDelay:"0.6s"}})]}),oe.jsx(RR,{size:2,color:"#5227FF",className:"custom-folder relative z-10",items:[oe.jsx("div",{className:"w-full h-full flex items-center justify-center p-2",children:oe.jsx("span",{className:"text-black text-sm font-bold",children:"분석---"})}),oe.jsx("div",{className:"w-full h-full flex items-center justify-center p-2",children:oe.jsx("span",{className:"text-black text-sm font-bold",children:"--도전"})}),oe.jsx("div",{className:"w-full h-full flex items-center justify-center p-2",children:oe.jsx("span",{className:"text-black text-sm font-bold",children:"코드"})})]})]})})]})})})}const Wu="182",wR=0,dS=1,DR=2,zf=1,UR=2,Eu=3,dr=0,Pn=1,Ni=2,li=0,el=1,pS=2,mS=3,gS=4,NR=5,Fs=100,LR=101,OR=102,PR=103,BR=104,IR=200,zR=201,FR=202,HR=203,Tm=204,Am=205,GR=206,VR=207,kR=208,XR=209,WR=210,YR=211,qR=212,jR=213,ZR=214,Rm=0,Jf=1,Cm=2,ll=3,wm=4,Dm=5,Um=6,Nm=7,OM=0,KR=1,QR=2,da=0,PM=1,BM=2,IM=3,zM=4,FM=5,HM=6,GM=7,VM=300,qs=301,ul=302,Lm=303,Om=304,oh=306,Pm=1e3,sr=1001,Bm=1002,Zn=1003,JR=1004,ff=1005,An=1006,Np=1007,Vs=1008,Dn=1009,kM=1010,XM=1011,zu=1012,kg=1013,ma=1014,Da=1015,pr=1016,Xg=1017,Wg=1018,cl=1020,WM=35902,YM=35899,qM=1021,jM=1022,ha=1023,mr=1026,ts=1027,ZM=1028,Yg=1029,fl=1030,qg=1031,jg=1033,Ff=33776,Hf=33777,Gf=33778,Vf=33779,Im=35840,zm=35841,Fm=35842,Hm=35843,Gm=36196,Vm=37492,km=37496,Xm=37488,Wm=37489,Ym=37490,qm=37491,jm=37808,Zm=37809,Km=37810,Qm=37811,Jm=37812,$m=37813,eg=37814,tg=37815,ng=37816,ig=37817,ag=37818,rg=37819,sg=37820,og=37821,lg=36492,ug=36494,cg=36495,fg=36283,hg=36284,dg=36285,pg=36286,Yu=3200,$R=0,e2=1,Ca="",qt="srgb",us="srgb-linear",$f="linear",Yt="srgb",Oo=7680,_S=519,t2=512,n2=513,i2=514,Zg=515,a2=516,r2=517,Kg=518,s2=519,vS=35044,xS="300 es",Ua=2e3,eh=2001;function KM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function th(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function o2(){const r=th("canvas");return r.style.display="block",r}const SS={};function yS(...r){const e="THREE."+r.shift();console.log(e,...r)}function lt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Pt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Fu(...r){const e=r.join(" ");e in SS||(SS[e]=!0,lt(...r))}function l2(r,e,t){return new Promise(function(a,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let MS=1234567;const Cu=Math.PI/180,Hu=180/Math.PI;function gl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[a&255]+ei[a>>8&255]+ei[a>>16&255]+ei[a>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function Qg(r,e){return(r%e+e)%e}function u2(r,e,t,a,s){return a+(r-e)*(s-a)/(t-e)}function c2(r,e,t){return r!==e?(t-r)/(e-r):0}function wu(r,e,t){return(1-t)*r+t*e}function f2(r,e,t,a){return wu(r,e,1-Math.exp(-t*a))}function h2(r,e=1){return e-Math.abs(Qg(r,e*2)-e)}function d2(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function p2(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function m2(r,e){return r+Math.floor(Math.random()*(e-r+1))}function g2(r,e){return r+Math.random()*(e-r)}function _2(r){return r*(.5-Math.random())}function v2(r){r!==void 0&&(MS=r);let e=MS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x2(r){return r*Cu}function S2(r){return r*Hu}function y2(r){return(r&r-1)===0&&r!==0}function M2(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function E2(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function b2(r,e,t,a,s){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),d=l((e+a)/2),m=c((e+a)/2),_=l((e-a)/2),v=c((e-a)/2),x=l((a-e)/2),E=c((a-e)/2);switch(s){case"XYX":r.set(f*m,h*_,h*v,f*d);break;case"YZY":r.set(h*v,f*m,h*_,f*d);break;case"ZXZ":r.set(h*_,h*v,f*m,f*d);break;case"XZX":r.set(f*m,h*E,h*x,f*d);break;case"YXY":r.set(h*x,f*m,h*E,f*d);break;case"ZYZ":r.set(h*E,h*x,f*m,f*d);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ea={DEG2RAD:Cu,RAD2DEG:Hu,generateUUID:gl,clamp:At,euclideanModulo:Qg,mapLinear:u2,inverseLerp:c2,lerp:wu,damp:f2,pingpong:h2,smoothstep:d2,smootherstep:p2,randInt:m2,randFloat:g2,randFloatSpread:_2,seededRandom:v2,degToRad:x2,radToDeg:S2,isPowerOfTwo:y2,ceilPowerOfTwo:M2,floorPowerOfTwo:E2,setQuaternionFromProperEuler:b2,normalize:ri,denormalize:jo};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*s+e.x,this.y=l*s+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qu{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,c,f){let h=a[s+0],d=a[s+1],m=a[s+2],_=a[s+3],v=l[c+0],x=l[c+1],E=l[c+2],M=l[c+3];if(f<=0){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(f>=1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(_!==M||h!==v||d!==x||m!==E){let y=h*v+d*x+m*E+_*M;y<0&&(v=-v,x=-x,E=-E,M=-M,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),C=Math.sin(R);S=Math.sin(S*R)/C,f=Math.sin(f*R)/C,h=h*S+v*f,d=d*S+x*f,m=m*S+E*f,_=_*S+M*f}else{h=h*S+v*f,d=d*S+x*f,m=m*S+E*f,_=_*S+M*f;const R=1/Math.sqrt(h*h+d*d+m*m+_*_);h*=R,d*=R,m*=R,_*=R}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,a,s,l,c){const f=a[s],h=a[s+1],d=a[s+2],m=a[s+3],_=l[c],v=l[c+1],x=l[c+2],E=l[c+3];return e[t]=f*E+m*_+h*x-d*v,e[t+1]=h*E+m*v+d*_-f*x,e[t+2]=d*E+m*x+f*v-h*_,e[t+3]=m*E-f*_-h*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(a/2),m=f(s/2),_=f(l/2),v=h(a/2),x=h(s/2),E=h(l/2);switch(c){case"XYZ":this._x=v*m*_+d*x*E,this._y=d*x*_-v*m*E,this._z=d*m*E+v*x*_,this._w=d*m*_-v*x*E;break;case"YXZ":this._x=v*m*_+d*x*E,this._y=d*x*_-v*m*E,this._z=d*m*E-v*x*_,this._w=d*m*_+v*x*E;break;case"ZXY":this._x=v*m*_-d*x*E,this._y=d*x*_+v*m*E,this._z=d*m*E+v*x*_,this._w=d*m*_-v*x*E;break;case"ZYX":this._x=v*m*_-d*x*E,this._y=d*x*_+v*m*E,this._z=d*m*E-v*x*_,this._w=d*m*_+v*x*E;break;case"YZX":this._x=v*m*_+d*x*E,this._y=d*x*_+v*m*E,this._z=d*m*E-v*x*_,this._w=d*m*_-v*x*E;break;case"XZY":this._x=v*m*_-d*x*E,this._y=d*x*_-v*m*E,this._z=d*m*E+v*x*_,this._w=d*m*_+v*x*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],c=t[1],f=t[5],h=t[9],d=t[2],m=t[6],_=t[10],v=a+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(l-d)*x,this._z=(c-s)*x}else if(a>f&&a>_){const x=2*Math.sqrt(1+a-f-_);this._w=(m-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(l+d)/x}else if(f>_){const x=2*Math.sqrt(1+f-a-_);this._w=(l-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+_-a-f);this._w=(c-s)/x,this._x=(l+d)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,c=e._w,f=t._x,h=t._y,d=t._z,m=t._w;return this._x=a*m+c*f+s*d-l*h,this._y=s*m+c*h+l*f-a*d,this._z=l*m+c*d+a*h-s*f,this._w=c*m-a*f-s*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let a=e._x,s=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(a=-a,s=-s,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ES.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ES.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*s-f*a),m=2*(f*t-l*s),_=2*(l*a-c*t);return this.x=t+h*d+c*_-f*m,this.y=a+h*m+f*d-l*_,this.z=s+h*_+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=s*h-l*f,this.y=l*c-a*h,this.z=a*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Lp.copy(this).projectOnVector(e),this.sub(Lp)}reflect(e){return this.sub(Lp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lp=new ue,ES=new qu;class pt{constructor(e,t,a,s,l,c,f,h,d){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,c,f,h,d)}set(e,t,a,s,l,c,f,h,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=h,m[6]=a,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,c=a[0],f=a[3],h=a[6],d=a[1],m=a[4],_=a[7],v=a[2],x=a[5],E=a[8],M=s[0],y=s[3],S=s[6],R=s[1],C=s[4],D=s[7],w=s[2],P=s[5],O=s[8];return l[0]=c*M+f*R+h*w,l[3]=c*y+f*C+h*P,l[6]=c*S+f*D+h*O,l[1]=d*M+m*R+_*w,l[4]=d*y+m*C+_*P,l[7]=d*S+m*D+_*O,l[2]=v*M+x*R+E*w,l[5]=v*y+x*C+E*P,l[8]=v*S+x*D+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*f*d-a*l*m+a*f*h+s*l*d-s*c*h}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],_=m*c-f*d,v=f*h-m*l,x=d*l-c*h,E=t*_+a*v+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*d-m*a)*M,e[2]=(f*a-s*c)*M,e[3]=v*M,e[4]=(m*t-s*h)*M,e[5]=(s*l-f*t)*M,e[6]=x*M,e[7]=(a*h-d*t)*M,e[8]=(c*t-a*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(a*h,a*d,-a*(h*c+d*f)+c+e,-s*d,s*h,-s*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Op.makeScale(e,t)),this}rotate(e){return this.premultiply(Op.makeRotation(-e)),this}translate(e,t){return this.premultiply(Op.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Op=new pt,bS=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),TS=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T2(){const r={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Yt&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(s.r=tl(s.r),s.g=tl(s.g),s.b=tl(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ca?$f:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Fu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Fu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[us]:{primaries:e,whitePoint:a,transfer:$f,toXYZ:bS,fromXYZ:TS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:bS,fromXYZ:TS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),r}const Ut=T2();function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Po;class A2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Po===void 0&&(Po=th("canvas")),Po.width=e.width,Po.height=e.height;const s=Po.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Po}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=th("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=lr(l[c]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(lr(t[a]/255)*255):t[a]=lr(t[a]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R2=0;class Jg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(Pp(s[c].image)):l.push(Pp(s[c]))}else l=Pp(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Pp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A2.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let C2=0;const Bp=new ue;class Qn extends vr{constructor(e=Qn.DEFAULT_IMAGE,t=Qn.DEFAULT_MAPPING,a=sr,s=sr,l=An,c=Vs,f=ha,h=Dn,d=Qn.DEFAULT_ANISOTROPY,m=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=gl(),this.name="",this.source=new Jg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bp).x}get height(){return this.source.getSize(Bp).y}get depth(){return this.source.getSize(Bp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==VM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pm:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Bm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pm:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Bm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=VM;Qn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,a=0,s=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*a+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const h=e.elements,d=h[0],m=h[4],_=h[8],v=h[1],x=h[5],E=h[9],M=h[2],y=h[6],S=h[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,D=(x+1)/2,w=(S+1)/2,P=(m+v)/4,O=(_+M)/4,F=(E+y)/4;return C>D&&C>w?C<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(C),s=P/a,l=O/a):D>w?D<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(D),a=P/s,l=F/s):w<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(w),a=O/l,s=F/l),this.set(a,s,l,t),this}let R=Math.sqrt((y-E)*(y-E)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(_-M)/R,this.z=(v-m)/R,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w2 extends vr{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const s={width:e,height:t,depth:a.depth},l=new Qn(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jg(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends w2{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class QM extends Qn{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D2 extends Qn{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(la.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(la.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=la.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,la):la.fromBufferAttribute(l,c),la.applyMatrix4(e.matrixWorld),this.expandByPoint(la);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hf.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),hf.copy(a.boundingBox)),hf.applyMatrix4(e.matrixWorld),this.union(hf)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,la),la.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mu),df.subVectors(this.max,mu),Bo.subVectors(e.a,mu),Io.subVectors(e.b,mu),zo.subVectors(e.c,mu),Wr.subVectors(Io,Bo),Yr.subVectors(zo,Io),Us.subVectors(Bo,zo);let t=[0,-Wr.z,Wr.y,0,-Yr.z,Yr.y,0,-Us.z,Us.y,Wr.z,0,-Wr.x,Yr.z,0,-Yr.x,Us.z,0,-Us.x,-Wr.y,Wr.x,0,-Yr.y,Yr.x,0,-Us.y,Us.x,0];return!Ip(t,Bo,Io,zo,df)||(t=[1,0,0,0,1,0,0,0,1],!Ip(t,Bo,Io,zo,df))?!1:(pf.crossVectors(Wr,Yr),t=[pf.x,pf.y,pf.z],Ip(t,Bo,Io,zo,df))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,la).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(la).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $a=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],la=new ue,hf=new ju,Bo=new ue,Io=new ue,zo=new ue,Wr=new ue,Yr=new ue,Us=new ue,mu=new ue,df=new ue,pf=new ue,Ns=new ue;function Ip(r,e,t,a,s){for(let l=0,c=r.length-3;l<=c;l+=3){Ns.fromArray(r,l);const f=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),h=e.dot(Ns),d=t.dot(Ns),m=a.dot(Ns);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>f)return!1}return!0}const U2=new ju,gu=new ue,zp=new ue;class $g{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):U2.setFromPoints(e).getCenter(a);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gu.subVectors(e,this.center);const t=gu.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(gu,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gu.copy(e.center).add(zp)),this.expandByPoint(gu.copy(e.center).sub(zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new ue,Fp=new ue,mf=new ue,qr=new ue,Hp=new ue,gf=new ue,Gp=new ue;class N2{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){Fp.copy(e).add(t).multiplyScalar(.5),mf.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Fp);const l=e.distanceTo(t)*.5,c=-this.direction.dot(mf),f=qr.dot(this.direction),h=-qr.dot(mf),d=qr.lengthSq(),m=Math.abs(1-c*c);let _,v,x,E;if(m>0)if(_=c*h-f,v=c*f-h,E=l*m,_>=0)if(v>=-E)if(v<=E){const M=1/m;_*=M,v*=M,x=_*(_+c*v+2*f)+v*(c*_+v+2*h)+d}else v=l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*h)+d;else v=-l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*h)+d;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-h),l),x=-_*_+v*(v+2*h)+d):v<=E?(_=0,v=Math.min(Math.max(-l,-h),l),x=v*(v+2*h)+d):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-h),l),x=-_*_+v*(v+2*h)+d);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*h)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Fp).addScaledVector(mf,v),x}intersectSphere(e,t){er.subVectors(e.center,this.origin);const a=er.dot(this.direction),s=er.dot(er)-a*a,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,h=a+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,c,f,h;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),_>=0?(f=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),a>h||f>s)||((f>a||a!==a)&&(a=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,a,s,l){Hp.subVectors(t,e),gf.subVectors(a,e),Gp.crossVectors(Hp,gf);let c=this.direction.dot(Gp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;qr.subVectors(this.origin,e);const h=f*this.direction.dot(gf.crossVectors(qr,gf));if(h<0)return null;const d=f*this.direction.dot(Hp.cross(qr));if(d<0||h+d>c)return null;const m=-f*qr.dot(Gp);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn{constructor(e,t,a,s,l,c,f,h,d,m,_,v,x,E,M,y){Rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,c,f,h,d,m,_,v,x,E,M,y)}set(e,t,a,s,l,c,f,h,d,m,_,v,x,E,M,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=a,S[12]=s,S[1]=l,S[5]=c,S[9]=f,S[13]=h,S[2]=d,S[6]=m,S[10]=_,S[14]=v,S[3]=x,S[7]=E,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rn().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,a=e.elements,s=1/Fo.setFromMatrixColumn(e,0).length(),l=1/Fo.setFromMatrixColumn(e,1).length(),c=1/Fo.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*c,t[9]=a[9]*c,t[10]=a[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,x=c*_,E=f*m,M=f*_;t[0]=h*m,t[4]=-h*_,t[8]=d,t[1]=x+E*d,t[5]=v-M*d,t[9]=-f*h,t[2]=M-v*d,t[6]=E+x*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,x=h*_,E=d*m,M=d*_;t[0]=v+M*f,t[4]=E*f-x,t[8]=c*d,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=x*f-E,t[6]=M+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,x=h*_,E=d*m,M=d*_;t[0]=v-M*f,t[4]=-c*_,t[8]=E+x*f,t[1]=x+E*f,t[5]=c*m,t[9]=M-v*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,x=c*_,E=f*m,M=f*_;t[0]=h*m,t[4]=E*d-x,t[8]=v*d+M,t[1]=h*_,t[5]=M*d+v,t[9]=x*d-E,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,x=c*d,E=f*h,M=f*d;t[0]=h*m,t[4]=M-v*_,t[8]=E*_+x,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-d*m,t[6]=x*_+E,t[10]=v-M*_}else if(e.order==="XZY"){const v=c*h,x=c*d,E=f*h,M=f*d;t[0]=h*m,t[4]=-_,t[8]=d*m,t[1]=v*_+M,t[5]=c*m,t[9]=x*_-E,t[2]=E*_-x,t[6]=f*m,t[10]=M*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L2,e,O2)}lookAt(e,t,a){const s=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),jr.crossVectors(a,Ri),jr.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),jr.crossVectors(a,Ri)),jr.normalize(),_f.crossVectors(Ri,jr),s[0]=jr.x,s[4]=_f.x,s[8]=Ri.x,s[1]=jr.y,s[5]=_f.y,s[9]=Ri.y,s[2]=jr.z,s[6]=_f.z,s[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,c=a[0],f=a[4],h=a[8],d=a[12],m=a[1],_=a[5],v=a[9],x=a[13],E=a[2],M=a[6],y=a[10],S=a[14],R=a[3],C=a[7],D=a[11],w=a[15],P=s[0],O=s[4],F=s[8],T=s[12],L=s[1],G=s[5],Y=s[9],q=s[13],le=s[2],ee=s[6],I=s[10],H=s[14],J=s[3],_e=s[7],xe=s[11],B=s[15];return l[0]=c*P+f*L+h*le+d*J,l[4]=c*O+f*G+h*ee+d*_e,l[8]=c*F+f*Y+h*I+d*xe,l[12]=c*T+f*q+h*H+d*B,l[1]=m*P+_*L+v*le+x*J,l[5]=m*O+_*G+v*ee+x*_e,l[9]=m*F+_*Y+v*I+x*xe,l[13]=m*T+_*q+v*H+x*B,l[2]=E*P+M*L+y*le+S*J,l[6]=E*O+M*G+y*ee+S*_e,l[10]=E*F+M*Y+y*I+S*xe,l[14]=E*T+M*q+y*H+S*B,l[3]=R*P+C*L+D*le+w*J,l[7]=R*O+C*G+D*ee+w*_e,l[11]=R*F+C*Y+D*I+w*xe,l[15]=R*T+C*q+D*H+w*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],c=e[1],f=e[5],h=e[9],d=e[13],m=e[2],_=e[6],v=e[10],x=e[14],E=e[3],M=e[7],y=e[11],S=e[15],R=h*x-d*v,C=f*x-d*_,D=f*v-h*_,w=c*x-d*m,P=c*v-h*m,O=c*_-f*m;return t*(M*R-y*C+S*D)-a*(E*R-y*w+S*P)+s*(E*C-M*w+S*O)-l*(E*D-M*P+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],_=e[9],v=e[10],x=e[11],E=e[12],M=e[13],y=e[14],S=e[15],R=_*y*d-M*v*d+M*h*x-f*y*x-_*h*S+f*v*S,C=E*v*d-m*y*d-E*h*x+c*y*x+m*h*S-c*v*S,D=m*M*d-E*_*d+E*f*x-c*M*x-m*f*S+c*_*S,w=E*_*h-m*M*h-E*f*v+c*M*v+m*f*y-c*_*y,P=t*R+a*C+s*D+l*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=R*O,e[1]=(M*v*l-_*y*l-M*s*x+a*y*x+_*s*S-a*v*S)*O,e[2]=(f*y*l-M*h*l+M*s*d-a*y*d-f*s*S+a*h*S)*O,e[3]=(_*h*l-f*v*l-_*s*d+a*v*d+f*s*x-a*h*x)*O,e[4]=C*O,e[5]=(m*y*l-E*v*l+E*s*x-t*y*x-m*s*S+t*v*S)*O,e[6]=(E*h*l-c*y*l-E*s*d+t*y*d+c*s*S-t*h*S)*O,e[7]=(c*v*l-m*h*l+m*s*d-t*v*d-c*s*x+t*h*x)*O,e[8]=D*O,e[9]=(E*_*l-m*M*l-E*a*x+t*M*x+m*a*S-t*_*S)*O,e[10]=(c*M*l-E*f*l+E*a*d-t*M*d-c*a*S+t*f*S)*O,e[11]=(m*f*l-c*_*l-m*a*d+t*_*d+c*a*x-t*f*x)*O,e[12]=w*O,e[13]=(m*M*s-E*_*s+E*a*v-t*M*v-m*a*y+t*_*y)*O,e[14]=(E*f*s-c*M*s-E*a*h+t*M*h+c*a*y-t*f*y)*O,e[15]=(c*_*s-m*f*s+m*a*h-t*_*h-c*a*v+t*f*v)*O,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,c=e.x,f=e.y,h=e.z,d=l*c,m=l*f;return this.set(d*c+a,d*f-s*h,d*h+s*f,0,d*f+s*h,m*f+a,m*h-s*c,0,d*h-s*f,m*h+s*c,l*h*h+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,c){return this.set(1,a,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,d=l+l,m=c+c,_=f+f,v=l*d,x=l*m,E=l*_,M=c*m,y=c*_,S=f*_,R=h*d,C=h*m,D=h*_,w=a.x,P=a.y,O=a.z;return s[0]=(1-(M+S))*w,s[1]=(x+D)*w,s[2]=(E-C)*w,s[3]=0,s[4]=(x-D)*P,s[5]=(1-(v+S))*P,s[6]=(y+R)*P,s[7]=0,s[8]=(E+C)*O,s[9]=(y-R)*O,s[10]=(1-(v+M))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return a.set(1,1,1),t.identity(),this;let l=Fo.set(s[0],s[1],s[2]).length();const c=Fo.set(s[4],s[5],s[6]).length(),f=Fo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),ua.copy(this);const d=1/l,m=1/c,_=1/f;return ua.elements[0]*=d,ua.elements[1]*=d,ua.elements[2]*=d,ua.elements[4]*=m,ua.elements[5]*=m,ua.elements[6]*=m,ua.elements[8]*=_,ua.elements[9]*=_,ua.elements[10]*=_,t.setFromRotationMatrix(ua),a.x=l,a.y=c,a.z=f,this}makePerspective(e,t,a,s,l,c,f=Ua,h=!1){const d=this.elements,m=2*l/(t-e),_=2*l/(a-s),v=(t+e)/(t-e),x=(a+s)/(a-s);let E,M;if(h)E=l/(c-l),M=c*l/(c-l);else if(f===Ua)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===eh)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,s,l,c,f=Ua,h=!1){const d=this.elements,m=2/(t-e),_=2/(a-s),v=-(t+e)/(t-e),x=-(a+s)/(a-s);let E,M;if(h)E=1/(c-l),M=c/(c-l);else if(f===Ua)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===eh)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const Fo=new ue,ua=new Rn,L2=new ue(0,0,0),O2=new ue(1,1,1),jr=new ue,_f=new ue,Ri=new ue,AS=new Rn,RS=new qu;class gr{constructor(e=0,t=0,a=0,s=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],h=s[1],d=s[5],m=s[9],_=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return AS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(AS,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return RS.setFromEuler(this),this.setFromQuaternion(RS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class JM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P2=0;const CS=new ue,Ho=new qu,tr=new Rn,vf=new ue,_u=new ue,B2=new ue,I2=new qu,wS=new ue(1,0,0),DS=new ue(0,1,0),US=new ue(0,0,1),NS={type:"added"},z2={type:"removed"},Go={type:"childadded",child:null},Vp={type:"childremoved",child:null};class Bi extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bi.DEFAULT_UP.clone();const e=new ue,t=new gr,a=new qu,s=new ue(1,1,1);function l(){a.setFromEuler(t,!1)}function c(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rn},normalMatrix:{value:new pt}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=Bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new JM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.premultiply(Ho),this}rotateX(e){return this.rotateOnAxis(wS,e)}rotateY(e){return this.rotateOnAxis(DS,e)}rotateZ(e){return this.rotateOnAxis(US,e)}translateOnAxis(e,t){return CS.copy(e).applyQuaternion(this.quaternion),this.position.add(CS.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wS,e)}translateY(e){return this.translateOnAxis(DS,e)}translateZ(e){return this.translateOnAxis(US,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?vf.copy(e):vf.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),_u.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(_u,vf,this.up):tr.lookAt(vf,_u,this.up),this.quaternion.setFromRotationMatrix(tr),s&&(tr.extractRotation(s.matrixWorld),Ho.setFromRotationMatrix(tr),this.quaternion.premultiply(Ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(NS),Go.child=e,this.dispatchEvent(Go),Go.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z2),Vp.child=e,this.dispatchEvent(Vp),Vp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(NS),Go.child=e,this.dispatchEvent(Go),Go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_u,e,B2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_u,I2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),x=c(e.animations),E=c(e.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),d.length>0&&(a.textures=d),m.length>0&&(a.images=m),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=s,a;function c(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}Bi.DEFAULT_UP=new ue(0,1,0);Bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ca=new ue,nr=new ue,kp=new ue,ir=new ue,Vo=new ue,ko=new ue,LS=new ue,Xp=new ue,Wp=new ue,Yp=new ue,qp=new fn,jp=new fn,Zp=new fn;class fa{constructor(e=new ue,t=new ue,a=new ue){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),ca.subVectors(e,t),s.cross(ca);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){ca.subVectors(s,t),nr.subVectors(a,t),kp.subVectors(e,t);const c=ca.dot(ca),f=ca.dot(nr),h=ca.dot(kp),d=nr.dot(nr),m=nr.dot(kp),_=c*d-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(d*h-f*m)*v,E=(c*m-f*h)*v;return l.set(1-x-E,E,x)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,a,s,l,c,f,h){return this.getBarycoord(e,t,a,s,ir)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ir.x),h.addScaledVector(c,ir.y),h.addScaledVector(f,ir.z),h)}static getInterpolatedAttribute(e,t,a,s,l,c){return qp.setScalar(0),jp.setScalar(0),Zp.setScalar(0),qp.fromBufferAttribute(e,t),jp.fromBufferAttribute(e,a),Zp.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(qp,l.x),c.addScaledVector(jp,l.y),c.addScaledVector(Zp,l.z),c}static isFrontFacing(e,t,a,s){return ca.subVectors(a,t),nr.subVectors(e,t),ca.cross(nr).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ca.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),ca.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fa.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return fa.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return fa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let c,f;Vo.subVectors(s,a),ko.subVectors(l,a),Xp.subVectors(e,a);const h=Vo.dot(Xp),d=ko.dot(Xp);if(h<=0&&d<=0)return t.copy(a);Wp.subVectors(e,s);const m=Vo.dot(Wp),_=ko.dot(Wp);if(m>=0&&_<=m)return t.copy(s);const v=h*_-m*d;if(v<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(a).addScaledVector(Vo,c);Yp.subVectors(e,l);const x=Vo.dot(Yp),E=ko.dot(Yp);if(E>=0&&x<=E)return t.copy(l);const M=x*d-h*E;if(M<=0&&d>=0&&E<=0)return f=d/(d-E),t.copy(a).addScaledVector(ko,f);const y=m*E-x*_;if(y<=0&&_-m>=0&&x-E>=0)return LS.subVectors(l,s),f=(_-m)/(_-m+(x-E)),t.copy(s).addScaledVector(LS,f);const S=1/(y+M+v);return c=M*S,f=v*S,t.copy(a).addScaledVector(Vo,c).addScaledVector(ko,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $M={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},xf={h:0,s:0,l:0};function Kp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Gt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=a,Ut.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Ut.workingColorSpace){if(e=Qg(e,1),t=At(t,0,1),a=At(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,c=2*a-l;this.r=Kp(c,l,e+1/3),this.g=Kp(c,l,e),this.b=Kp(c,l,e-1/3)}return Ut.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function a(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const a=$M[e.toLowerCase()];return a!==void 0?this.setHex(a,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ut.workingToColorSpace(ti.copy(this),e),Math.round(At(ti.r*255,0,255))*65536+Math.round(At(ti.g*255,0,255))*256+Math.round(At(ti.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(ti.copy(this),t);const a=ti.r,s=ti.g,l=ti.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let h,d;const m=(f+c)/2;if(f===c)h=0,d=0;else{const _=c-f;switch(d=m<=.5?_/(c+f):_/(2-c-f),c){case a:h=(s-l)/_+(s<l?6:0);break;case s:h=(l-a)/_+2;break;case l:h=(a-s)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=qt){Ut.workingToColorSpace(ti.copy(this),e);const t=ti.r,a=ti.g,s=ti.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(xf);const a=wu(Zr.h,xf.h,t),s=wu(Zr.s,xf.s,t),l=wu(Zr.l,xf.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Gt;Gt.NAMES=$M;let F2=0;class _l extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=el,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tm,this.blendDst=Am,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_S,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==el&&(a.blending=this.blending),this.side!==dr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Tm&&(a.blendSrc=this.blendSrc),this.blendDst!==Am&&(a.blendDst=this.blendDst),this.blendEquation!==Fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ll&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_S&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Oo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Oo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eE extends _l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=OM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bn=new ue,Sf=new rt;let H2=0;class ea{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=vS,this.updateRanges=[],this.gpuType=Da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Sf.fromBufferAttribute(this,t),Sf.applyMatrix3(e),this.setXY(t,Sf.x,Sf.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=jo(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=ri(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),a=ri(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),a=ri(a,this.array),s=ri(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),a=ri(a,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vS&&(e.usage=this.usage),e}}class tE extends ea{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class nE extends ea{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class ur extends ea{constructor(e,t,a){super(new Float32Array(e),t,a)}}let G2=0;const Zi=new Rn,Qp=new Bi,Xo=new ue,Ci=new ju,vu=new ju,On=new ue;class Oa extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KM(e)?nE:tE)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new pt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zi.makeRotationFromQuaternion(e),this.applyMatrix4(Zi),this}rotateX(e){return Zi.makeRotationX(e),this.applyMatrix4(Zi),this}rotateY(e){return Zi.makeRotationY(e),this.applyMatrix4(Zi),this}rotateZ(e){return Zi.makeRotationZ(e),this.applyMatrix4(Zi),this}translate(e,t,a){return Zi.makeTranslation(e,t,a),this.applyMatrix4(Zi),this}scale(e,t,a){return Zi.makeScale(e,t,a),this.applyMatrix4(Zi),this}lookAt(e){return Qp.lookAt(e),Qp.updateMatrix(),this.applyMatrix4(Qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ur(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ju);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];Ci.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $g);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];vu.setFromBufferAttribute(f),this.morphTargetsRelative?(On.addVectors(Ci.min,vu.min),Ci.expandByPoint(On),On.addVectors(Ci.max,vu.max),Ci.expandByPoint(On)):(Ci.expandByPoint(vu.min),Ci.expandByPoint(vu.max))}Ci.getCenter(a);let s=0;for(let l=0,c=e.count;l<c;l++)On.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(On));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)On.fromBufferAttribute(f,d),h&&(Xo.fromBufferAttribute(e,d),On.add(Xo)),s=Math.max(s,a.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ea(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let F=0;F<a.count;F++)f[F]=new ue,h[F]=new ue;const d=new ue,m=new ue,_=new ue,v=new rt,x=new rt,E=new rt,M=new ue,y=new ue;function S(F,T,L){d.fromBufferAttribute(a,F),m.fromBufferAttribute(a,T),_.fromBufferAttribute(a,L),v.fromBufferAttribute(l,F),x.fromBufferAttribute(l,T),E.fromBufferAttribute(l,L),m.sub(d),_.sub(d),x.sub(v),E.sub(v);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),y.copy(_).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(G),f[F].add(M),f[T].add(M),f[L].add(M),h[F].add(y),h[T].add(y),h[L].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,T=R.length;F<T;++F){const L=R[F],G=L.start,Y=L.count;for(let q=G,le=G+Y;q<le;q+=3)S(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new ue,D=new ue,w=new ue,P=new ue;function O(F){w.fromBufferAttribute(s,F),P.copy(w);const T=f[F];C.copy(T),C.sub(w.multiplyScalar(w.dot(T))).normalize(),D.crossVectors(P,T);const G=D.dot(h[F])<0?-1:1;c.setXYZW(F,C.x,C.y,C.z,G)}for(let F=0,T=R.length;F<T;++F){const L=R[F],G=L.start,Y=L.count;for(let q=G,le=G+Y;q<le;q+=3)O(e.getX(q+0)),O(e.getX(q+1)),O(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ea(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const s=new ue,l=new ue,c=new ue,f=new ue,h=new ue,d=new ue,m=new ue,_=new ue;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),m.subVectors(c,l),_.subVectors(s,l),m.cross(_),f.fromBufferAttribute(a,E),h.fromBufferAttribute(a,M),d.fromBufferAttribute(a,y),f.add(m),h.add(m),d.add(m),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(s,l),m.cross(_),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(f,h){const d=f.array,m=f.itemSize,_=f.normalized,v=new d.constructor(h.length*m);let x=0,E=0;for(let M=0,y=h.length;M<y;M++){f.isInterleavedBufferAttribute?x=h[M]*f.data.stride+f.offset:x=h[M]*m;for(let S=0;S<m;S++)v[E++]=d[x++]}return new ea(v,m,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oa,a=this.index.array,s=this.attributes;for(const f in s){const h=s[f],d=e(h,a);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let m=0,_=d.length;m<_;m++){const v=d[m],x=e(v,a);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const h in a){const d=a[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];m.push(x.toJSON(e.data))}m.length>0&&(s[h]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let v=0,x=_.length;v<x;v++)m.push(_[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const OS=new Rn,Ls=new N2,yf=new $g,PS=new ue,Mf=new ue,Ef=new ue,bf=new ue,Jp=new ue,Tf=new ue,BS=new ue,Af=new ue;class ga extends Bi{constructor(e=new Oa,t=new eE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){Tf.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const m=f[h],_=l[h];m!==0&&(Jp.fromBufferAttribute(_,e),c?Tf.addScaledVector(Jp,m):Tf.addScaledVector(Jp.sub(t),m))}t.add(Tf)}return t}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),yf.copy(a.boundingSphere),yf.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(yf.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(yf,PS)===null||Ls.origin.distanceToSquared(PS)>(e.far-e.near)**2))&&(OS.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(OS),!(a.boundingBox!==null&&Ls.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,a){let s;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],S=c[y.materialIndex],R=Math.max(y.start,x.start),C=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let D=R,w=C;D<w;D+=3){const P=f.getX(D),O=f.getX(D+1),F=f.getX(D+2);s=Rf(this,S,e,a,d,m,_,P,O,F),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let y=E,S=M;y<S;y+=3){const R=f.getX(y),C=f.getX(y+1),D=f.getX(y+2);s=Rf(this,c,e,a,d,m,_,R,C,D),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],S=c[y.materialIndex],R=Math.max(y.start,x.start),C=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let D=R,w=C;D<w;D+=3){const P=D,O=D+1,F=D+2;s=Rf(this,S,e,a,d,m,_,P,O,F),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let y=E,S=M;y<S;y+=3){const R=y,C=y+1,D=y+2;s=Rf(this,c,e,a,d,m,_,R,C,D),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function V2(r,e,t,a,s,l,c,f){let h;if(e.side===Pn?h=a.intersectTriangle(c,l,s,!0,f):h=a.intersectTriangle(s,l,c,e.side===dr,f),h===null)return null;Af.copy(f),Af.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Af);return d<t.near||d>t.far?null:{distance:d,point:Af.clone(),object:r}}function Rf(r,e,t,a,s,l,c,f,h,d){r.getVertexPosition(f,Mf),r.getVertexPosition(h,Ef),r.getVertexPosition(d,bf);const m=V2(r,e,t,a,Mf,Ef,bf,BS);if(m){const _=new ue;fa.getBarycoord(BS,Mf,Ef,bf,_),s&&(m.uv=fa.getInterpolatedAttribute(s,f,h,d,_,new rt)),l&&(m.uv1=fa.getInterpolatedAttribute(l,f,h,d,_,new rt)),c&&(m.normal=fa.getInterpolatedAttribute(c,f,h,d,_,new ue),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:h,c:d,normal:new ue,materialIndex:0};fa.getNormal(Mf,Ef,bf,v.normal),m.face=v,m.barycoord=_}return m}class Zu extends Oa{constructor(e=1,t=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],m=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,a,t,e,c,l,0),E("z","y","x",1,-1,a,t,-e,c,l,1),E("x","z","y",1,1,e,a,t,s,c,2),E("x","z","y",1,-1,e,a,-t,s,c,3),E("x","y","z",1,-1,e,t,a,s,l,4),E("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(h),this.setAttribute("position",new ur(d,3)),this.setAttribute("normal",new ur(m,3)),this.setAttribute("uv",new ur(_,2));function E(M,y,S,R,C,D,w,P,O,F,T){const L=D/O,G=w/F,Y=D/2,q=w/2,le=P/2,ee=O+1,I=F+1;let H=0,J=0;const _e=new ue;for(let xe=0;xe<I;xe++){const B=xe*G-q;for(let te=0;te<ee;te++){const pe=te*L-Y;_e[M]=pe*R,_e[y]=B*C,_e[S]=le,d.push(_e.x,_e.y,_e.z),_e[M]=0,_e[y]=0,_e[S]=P>0?1:-1,m.push(_e.x,_e.y,_e.z),_.push(te/O),_.push(1-xe/F),H+=1}}for(let xe=0;xe<F;xe++)for(let B=0;B<O;B++){const te=v+B+ee*xe,pe=v+B+ee*(xe+1),be=v+(B+1)+ee*(xe+1),Ne=v+(B+1)+ee*xe;h.push(te,pe,Ne),h.push(pe,be,Ne),J+=6}f.addGroup(x,J,T),x+=J,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hl(r){const e={};for(const t in r){e[t]={};for(const a in r[t]){const s=r[t][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone():Array.isArray(s)?e[t][a]=s.slice():e[t][a]=s}}return e}function si(r){const e={};for(let t=0;t<r.length;t++){const a=hl(r[t]);for(const s in a)e[s]=a[s]}return e}function k2(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function iE(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const X2={clone:hl,merge:si};var W2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends _l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W2,this.fragmentShader=Y2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hl(e.uniforms),this.uniformsGroups=k2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class aE extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new ue,IS=new rt,zS=new rt;class Qi extends aE{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,IS,zS),t.subVectors(zS,IS)}setViewOffset(e,t,a,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cu*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/h,t-=c.offsetY*a/d,s*=c.width/h,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wo=-90,Yo=1;class q2 extends Bi{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qi(Wo,Yo,e,t);s.layers=this.layers,this.add(s);const l=new Qi(Wo,Yo,e,t);l.layers=this.layers,this.add(l);const c=new Qi(Wo,Yo,e,t);c.layers=this.layers,this.add(c);const f=new Qi(Wo,Yo,e,t);f.layers=this.layers,this.add(f);const h=new Qi(Wo,Yo,e,t);h.layers=this.layers,this.add(h);const d=new Qi(Wo,Yo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,c,f,h]=t;for(const d of t)this.remove(d);if(e===Ua)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===eh)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(t,l),e.setRenderTarget(a,1,s),e.render(t,c),e.setRenderTarget(a,2,s),e.render(t,f),e.setRenderTarget(a,3,s),e.render(t,h),e.setRenderTarget(a,4,s),e.render(t,d),a.texture.generateMipmaps=M,e.setRenderTarget(a,5,s),e.render(t,m),e.setRenderTarget(_,v,x),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class rE extends Qn{constructor(e=[],t=qs,a,s,l,c,f,h,d,m){super(e,t,a,s,l,c,f,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sE extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new rE(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zu(5,5,5),l=new zn({name:"CubemapFromEquirect",uniforms:hl(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Pn,blending:li});l.uniforms.tEquirect.value=t;const c=new ga(s,l),f=t.minFilter;return t.minFilter===Vs&&(t.minFilter=An),new q2(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,a,s);e.setRenderTarget(l)}}class Cf extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j2={type:"move"};class $p{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,a),S=this._getHandJoint(d,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=m.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(j2)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Cf;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class mg extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Z2 extends Qn{constructor(e=null,t=1,a=1,s,l,c,f,h,d=Zn,m=Zn,_,v){super(null,c,f,h,d,m,s,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const em=new ue,K2=new ue,Q2=new pt;class zs{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=em.subVectors(a,t).cross(K2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(em),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||Q2.getNormalMatrix(e),s=this.coplanarPoint(em).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new $g,J2=new rt(.5,.5),wf=new ue;class oE{constructor(e=new zs,t=new zs,a=new zs,s=new zs,l=new zs,c=new zs){this.planes=[e,t,a,s,l,c]}set(e,t,a,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Ua,a=!1){const s=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],d=l[3],m=l[4],_=l[5],v=l[6],x=l[7],E=l[8],M=l[9],y=l[10],S=l[11],R=l[12],C=l[13],D=l[14],w=l[15];if(s[0].setComponents(d-c,x-m,S-E,w-R).normalize(),s[1].setComponents(d+c,x+m,S+E,w+R).normalize(),s[2].setComponents(d+f,x+_,S+M,w+C).normalize(),s[3].setComponents(d-f,x-_,S-M,w-C).normalize(),a)s[4].setComponents(h,v,y,D).normalize(),s[5].setComponents(d-h,x-v,S-y,w-D).normalize();else if(s[4].setComponents(d-h,x-v,S-y,w-D).normalize(),t===Ua)s[5].setComponents(d+h,x+v,S+y,w+D).normalize();else if(t===eh)s[5].setComponents(h,v,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const t=J2.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(wf.x=s.normal.x>0?e.max.x:e.min.x,wf.y=s.normal.y>0?e.max.y:e.min.y,wf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dl extends Qn{constructor(e,t,a=ma,s,l,c,f=Zn,h=Zn,d,m=mr,_=1){if(m!==mr&&m!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,s,l,c,f,h,m,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $2 extends dl{constructor(e,t=ma,a=qs,s,l,c=Zn,f=Zn,h,d=mr){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,a,s,l,c,f,h,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lE extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ku extends Oa{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,c=t/2,f=Math.floor(a),h=Math.floor(s),d=f+1,m=h+1,_=e/f,v=t/h,x=[],E=[],M=[],y=[];for(let S=0;S<m;S++){const R=S*v-c;for(let C=0;C<d;C++){const D=C*_-l;E.push(D,-R,0),M.push(0,0,1),y.push(C/f),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<f;R++){const C=R+d*S,D=R+d*(S+1),w=R+1+d*(S+1),P=R+1+d*S;x.push(C,D,P),x.push(D,w,P)}this.setIndex(x),this.setAttribute("position",new ur(E,3)),this.setAttribute("normal",new ur(M,3)),this.setAttribute("uv",new ur(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.widthSegments,e.heightSegments)}}class eC extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tC extends _l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nC extends _l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lh extends aE{constructor(e=-1,t=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iC extends Qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nt{constructor(e){this.value=e}clone(){return new Nt(this.value.clone===void 0?this.value:this.value.clone())}}function FS(r,e,t,a){const s=aC(a);switch(t){case qM:return r*e;case ZM:return r*e/s.components*s.byteLength;case Yg:return r*e/s.components*s.byteLength;case fl:return r*e*2/s.components*s.byteLength;case qg:return r*e*2/s.components*s.byteLength;case jM:return r*e*3/s.components*s.byteLength;case ha:return r*e*4/s.components*s.byteLength;case jg:return r*e*4/s.components*s.byteLength;case Ff:case Hf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gf:case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zm:case Hm:return Math.max(r,16)*Math.max(e,8)/4;case Im:case Fm:return Math.max(r,8)*Math.max(e,8)/2;case Gm:case Vm:case Xm:case Wm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case km:case Ym:case qm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zm:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Km:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qm:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jm:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $m:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eg:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tg:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ng:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ig:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ag:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rg:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sg:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case og:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lg:case ug:case cg:return Math.ceil(r/4)*Math.ceil(e/4)*16;case fg:case hg:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dg:case pg:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aC(r){switch(r){case Dn:case kM:return{byteLength:1,components:1};case zu:case XM:case pr:return{byteLength:2,components:1};case Xg:case Wg:return{byteLength:2,components:4};case ma:case kg:case Da:return{byteLength:4,components:1};case WM:case YM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);function uE(){let r=null,e=!1,t=null,a=null;function s(l,c){t(l,c),a=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(a=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function rC(r){const e=new WeakMap;function t(f,h){const d=f.array,m=f.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,d,m),f.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,h,d){const m=h.array,_=h.updateRanges;if(r.bindBuffer(d,f),_.length===0)r.bufferSubData(d,0,m);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],M=_[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,_[v]=M)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const M=_[x];r.bufferSubData(d,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,h),d.version=f.version}}return{get:s,remove:l,update:c}}var sC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oC=`#ifdef USE_ALPHAHASH
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
#endif`,lC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_C=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xC=`#ifdef USE_IRIDESCENCE
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
#endif`,SC=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,MC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wC=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,DC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,UC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BC="gl_FragColor = linearToOutputTexel( gl_FragColor );",IC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,FC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HC=`#ifdef USE_ENVMAP
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
#endif`,GC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VC=`#ifdef USE_ENVMAP
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
#endif`,kC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qC=`#ifdef USE_GRADIENTMAP
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
}`,jC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,JC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,$C=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ew=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mw=`#if defined( USE_POINTS_UV )
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
#endif`,gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cw=`#ifdef USE_NORMALMAP
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
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ow=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jw=`#ifdef USE_SKINNING
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
#endif`,Zw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$w=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e3=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,h3=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,p3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x3=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,S3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,y3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,M3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,E3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,b3=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,T3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,A3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,C3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,w3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,D3=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,N3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,L3=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,O3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,P3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,B3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,I3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,z3=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,gt={alphahash_fragment:sC,alphahash_pars_fragment:oC,alphamap_fragment:lC,alphamap_pars_fragment:uC,alphatest_fragment:cC,alphatest_pars_fragment:fC,aomap_fragment:hC,aomap_pars_fragment:dC,batching_pars_vertex:pC,batching_vertex:mC,begin_vertex:gC,beginnormal_vertex:_C,bsdfs:vC,iridescence_fragment:xC,bumpmap_pars_fragment:SC,clipping_planes_fragment:yC,clipping_planes_pars_fragment:MC,clipping_planes_pars_vertex:EC,clipping_planes_vertex:bC,color_fragment:TC,color_pars_fragment:AC,color_pars_vertex:RC,color_vertex:CC,common:wC,cube_uv_reflection_fragment:DC,defaultnormal_vertex:UC,displacementmap_pars_vertex:NC,displacementmap_vertex:LC,emissivemap_fragment:OC,emissivemap_pars_fragment:PC,colorspace_fragment:BC,colorspace_pars_fragment:IC,envmap_fragment:zC,envmap_common_pars_fragment:FC,envmap_pars_fragment:HC,envmap_pars_vertex:GC,envmap_physical_pars_fragment:JC,envmap_vertex:VC,fog_vertex:kC,fog_pars_vertex:XC,fog_fragment:WC,fog_pars_fragment:YC,gradientmap_pars_fragment:qC,lightmap_pars_fragment:jC,lights_lambert_fragment:ZC,lights_lambert_pars_fragment:KC,lights_pars_begin:QC,lights_toon_fragment:$C,lights_toon_pars_fragment:ew,lights_phong_fragment:tw,lights_phong_pars_fragment:nw,lights_physical_fragment:iw,lights_physical_pars_fragment:aw,lights_fragment_begin:rw,lights_fragment_maps:sw,lights_fragment_end:ow,logdepthbuf_fragment:lw,logdepthbuf_pars_fragment:uw,logdepthbuf_pars_vertex:cw,logdepthbuf_vertex:fw,map_fragment:hw,map_pars_fragment:dw,map_particle_fragment:pw,map_particle_pars_fragment:mw,metalnessmap_fragment:gw,metalnessmap_pars_fragment:_w,morphinstance_vertex:vw,morphcolor_vertex:xw,morphnormal_vertex:Sw,morphtarget_pars_vertex:yw,morphtarget_vertex:Mw,normal_fragment_begin:Ew,normal_fragment_maps:bw,normal_pars_fragment:Tw,normal_pars_vertex:Aw,normal_vertex:Rw,normalmap_pars_fragment:Cw,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:Dw,clearcoat_pars_fragment:Uw,iridescence_pars_fragment:Nw,opaque_fragment:Lw,packing:Ow,premultiplied_alpha_fragment:Pw,project_vertex:Bw,dithering_fragment:Iw,dithering_pars_fragment:zw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Vw,shadowmap_vertex:kw,shadowmask_pars_fragment:Xw,skinbase_vertex:Ww,skinning_pars_vertex:Yw,skinning_vertex:qw,skinnormal_vertex:jw,specularmap_fragment:Zw,specularmap_pars_fragment:Kw,tonemapping_fragment:Qw,tonemapping_pars_fragment:Jw,transmission_fragment:$w,transmission_pars_fragment:e3,uv_pars_fragment:t3,uv_pars_vertex:n3,uv_vertex:i3,worldpos_vertex:a3,background_vert:r3,background_frag:s3,backgroundCube_vert:o3,backgroundCube_frag:l3,cube_vert:u3,cube_frag:c3,depth_vert:f3,depth_frag:h3,distance_vert:d3,distance_frag:p3,equirect_vert:m3,equirect_frag:g3,linedashed_vert:_3,linedashed_frag:v3,meshbasic_vert:x3,meshbasic_frag:S3,meshlambert_vert:y3,meshlambert_frag:M3,meshmatcap_vert:E3,meshmatcap_frag:b3,meshnormal_vert:T3,meshnormal_frag:A3,meshphong_vert:R3,meshphong_frag:C3,meshphysical_vert:w3,meshphysical_frag:D3,meshtoon_vert:U3,meshtoon_frag:N3,points_vert:L3,points_frag:O3,shadow_vert:P3,shadow_frag:B3,sprite_vert:I3,sprite_frag:z3},Ie={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Aa={basic:{uniforms:si([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:si([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:si([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:si([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:si([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Gt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:si([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:si([Ie.points,Ie.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:si([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:si([Ie.common,Ie.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:si([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:si([Ie.sprite,Ie.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:si([Ie.common,Ie.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:si([Ie.lights,Ie.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Aa.physical={uniforms:si([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Df={r:0,b:0,g:0},Ps=new gr,F3=new Rn;function H3(r,e,t,a,s,l,c){const f=new Gt(0);let h=l===!0?0:1,d,m,_=null,v=0,x=null;function E(C){let D=C.isScene===!0?C.background:null;return D&&D.isTexture&&(D=(C.backgroundBlurriness>0?t:e).get(D)),D}function M(C){let D=!1;const w=E(C);w===null?S(f,h):w&&w.isColor&&(S(w,1),D=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(C,D){const w=E(D);w&&(w.isCubeTexture||w.mapping===oh)?(m===void 0&&(m=new ga(new Zu(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:hl(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Ps.copy(D.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(F3.makeRotationFromEuler(Ps)),m.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,(_!==w||v!==w.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,x=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new ga(new Ku(2,2),new zn({name:"BackgroundMaterial",uniforms:hl(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=w,v=w.version,x=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function S(C,D){C.getRGB(Df,iE(r)),a.buffers.color.setClear(Df.r,Df.g,Df.b,D,c)}function R(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,D=1){f.set(C),h=D,S(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,S(f,h)},render:M,addToRenderList:y,dispose:R}}function G3(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(L,G,Y,q,le){let ee=!1;const I=_(q,Y,G);l!==I&&(l=I,d(l.object)),ee=x(L,q,Y,le),ee&&E(L,q,Y,le),le!==null&&e.update(le,r.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,D(L,G,Y,q),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return r.createVertexArray()}function d(L){return r.bindVertexArray(L)}function m(L){return r.deleteVertexArray(L)}function _(L,G,Y){const q=Y.wireframe===!0;let le=a[L.id];le===void 0&&(le={},a[L.id]=le);let ee=le[G.id];ee===void 0&&(ee={},le[G.id]=ee);let I=ee[q];return I===void 0&&(I=v(h()),ee[q]=I),I}function v(L){const G=[],Y=[],q=[];for(let le=0;le<t;le++)G[le]=0,Y[le]=0,q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:q,object:L,attributes:{},index:null}}function x(L,G,Y,q){const le=l.attributes,ee=G.attributes;let I=0;const H=Y.getAttributes();for(const J in H)if(H[J].location>=0){const xe=le[J];let B=ee[J];if(B===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),xe===void 0||xe.attribute!==B||B&&xe.data!==B.data)return!0;I++}return l.attributesNum!==I||l.index!==q}function E(L,G,Y,q){const le={},ee=G.attributes;let I=0;const H=Y.getAttributes();for(const J in H)if(H[J].location>=0){let xe=ee[J];xe===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor));const B={};B.attribute=xe,xe&&xe.data&&(B.data=xe.data),le[J]=B,I++}l.attributes=le,l.attributesNum=I,l.index=q}function M(){const L=l.newAttributes;for(let G=0,Y=L.length;G<Y;G++)L[G]=0}function y(L){S(L,0)}function S(L,G){const Y=l.newAttributes,q=l.enabledAttributes,le=l.attributeDivisors;Y[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),le[L]!==G&&(r.vertexAttribDivisor(L,G),le[L]=G)}function R(){const L=l.newAttributes,G=l.enabledAttributes;for(let Y=0,q=G.length;Y<q;Y++)G[Y]!==L[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function C(L,G,Y,q,le,ee,I){I===!0?r.vertexAttribIPointer(L,G,Y,le,ee):r.vertexAttribPointer(L,G,Y,q,le,ee)}function D(L,G,Y,q){M();const le=q.attributes,ee=Y.getAttributes(),I=G.defaultAttributeValues;for(const H in ee){const J=ee[H];if(J.location>=0){let _e=le[H];if(_e===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),_e!==void 0){const xe=_e.normalized,B=_e.itemSize,te=e.get(_e);if(te===void 0)continue;const pe=te.buffer,be=te.type,Ne=te.bytesPerElement,ae=be===r.INT||be===r.UNSIGNED_INT||_e.gpuType===kg;if(_e.isInterleavedBufferAttribute){const de=_e.data,we=de.stride,Xe=_e.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<J.locationSize;ke++)S(J.location+ke,de.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<J.locationSize;ke++)y(J.location+ke);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let ke=0;ke<J.locationSize;ke++)C(J.location+ke,B/J.locationSize,be,xe,we*Ne,(Xe+B/J.locationSize*ke)*Ne,ae)}else{if(_e.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)S(J.location+de,_e.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let de=0;de<J.locationSize;de++)y(J.location+de);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let de=0;de<J.locationSize;de++)C(J.location+de,B/J.locationSize,be,xe,B*Ne,B/J.locationSize*de*Ne,ae)}}else if(I!==void 0){const xe=I[H];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(J.location,xe);break;case 3:r.vertexAttrib3fv(J.location,xe);break;case 4:r.vertexAttrib4fv(J.location,xe);break;default:r.vertexAttrib1fv(J.location,xe)}}}}R()}function w(){F();for(const L in a){const G=a[L];for(const Y in G){const q=G[Y];for(const le in q)m(q[le].object),delete q[le];delete G[Y]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const G=a[L.id];for(const Y in G){const q=G[Y];for(const le in q)m(q[le].object),delete q[le];delete G[Y]}delete a[L.id]}function O(L){for(const G in a){const Y=a[G];if(Y[L.id]===void 0)continue;const q=Y[L.id];for(const le in q)m(q[le].object),delete q[le];delete Y[L.id]}}function F(){T(),c=!0,l!==s&&(l=s,d(l.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:F,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:y,disableUnusedAttributes:R}}function V3(r,e,t){let a;function s(d){a=d}function l(d,m){r.drawArrays(a,d,m),t.update(m,a,1)}function c(d,m,_){_!==0&&(r.drawArraysInstanced(a,d,m,_),t.update(m,a,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,m,0,_);let x=0;for(let E=0;E<_;E++)x+=m[E];t.update(x,a,1)}function h(d,m,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)c(d[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,m,0,v,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M]*v[M];t.update(E,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function k3(r,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==ha&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const F=O===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Dn&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Da&&!F)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(lt("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:D,maxSamples:w,samples:P}}function X3(r){const e=this;let t=null,a=0,s=!1,l=!1;const c=new zs,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||s;return s=v,a=_.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,S=r.get(_);if(!s||E===null||E.length===0||l&&!y)l?m(null):d();else{const R=l?0:a,C=R*4;let D=S.clippingState||null;h.value=D,D=m(E,v,C,x);for(let w=0;w!==C;++w)D[w]=t[w];S.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(_,v,x,E){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=h.value,E!==!0||y===null){const S=x+M*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,D=x;C!==M;++C,D+=4)c.copy(_[C]).applyMatrix4(R,f),c.normal.toArray(y,D),y[D+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function W3(r){let e=new WeakMap;function t(c,f){return f===Lm?c.mapping=qs:f===Om&&(c.mapping=ul),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Lm||f===Om)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new sE(h.height);return d.fromEquirectangularTexture(r,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const ns=4,HS=[.125,.215,.35,.446,.526,.582],Hs=20,Y3=256,xu=new lh,GS=new Gt;let tm=null,nm=0,im=0,am=!1;const q3=new ue;class VS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:c=256,position:f=q3}=l;tm=this._renderer.getRenderTarget(),nm=this._renderer.getActiveCubeFace(),im=this._renderer.getActiveMipmapLevel(),am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,a,s,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=WS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=XS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tm,nm,im),this._renderer.xr.enabled=am,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===ul?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tm=this._renderer.getRenderTarget(),nm=this._renderer.getActiveCubeFace(),im=this._renderer.getActiveMipmapLevel(),am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:An,minFilter:An,generateMipmaps:!1,type:pr,format:ha,colorSpace:us,depthBuffer:!1},s=kS(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kS(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j3(l)),this._blurMaterial=K3(l,e,t),this._ggxMaterial=Z3(l,e,t)}return s}_compileMaterial(e){const t=new ga(new Oa,e);this._renderer.compile(t,xu)}_sceneToCubeUV(e,t,a,s,l){const h=new Qi(90,1,t,a),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(GS),_.toneMapping=da,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ga(new Zu,new eE({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(GS),S=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(h.up.set(0,d[C],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+m[C],l.y,l.z)):D===1?(h.up.set(0,0,d[C]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+m[C],l.z)):(h.up.set(0,d[C],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+m[C]));const w=this._cubeSize;qo(s,D*w,C>2?w:0,w,w),_.setRenderTarget(s),S&&_.render(M,h),_.render(e,h)}_.toneMapping=x,_.autoClear=v,e.background=R}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===qs||e.mapping===ul;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=WS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=XS());const l=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;qo(t,0,0,3*h,2*h),a.setRenderTarget(t),a.render(c,xu)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const h=c.uniforms,d=a/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-m*m),v=0+d*1.25,x=_*v,{_lodMax:E}=this,M=this._sizeLods[a],y=3*M*(a>E-ns?a-E+ns:0),S=4*(this._cubeSize-M);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=E-t,qo(l,y,S,3*M,2*M),s.setRenderTarget(l),s.render(f,xu),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-a,qo(e,y,S,3*M,2*M),s.setRenderTarget(e),s.render(f,xu)}_blur(e,t,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,a,s,"latitudinal",l),this._halfBlur(c,e,a,a,s,"longitudinal",l)}_halfBlur(e,t,a,s,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[s];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Hs-1),M=l/E,y=isFinite(l)?1+Math.floor(m*M):Hs;y>Hs&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Hs}`);const S=[];let R=0;for(let O=0;O<Hs;++O){const F=O/M,T=Math.exp(-F*F/2);S.push(T),O===0?R+=T:O<y&&(R+=2*T)}for(let O=0;O<S.length;O++)S[O]=S[O]/R;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-a;const D=this._sizeLods[s],w=3*D*(s>C-ns?s-C+ns:0),P=4*(this._cubeSize-D);qo(t,w,P,3*D,2*D),h.setRenderTarget(t),h.render(_,xu)}}function j3(r){const e=[],t=[],a=[];let s=r;const l=r-ns+1+HS.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);e.push(f);let h=1/f;c>r-ns?h=HS[c-r+ns-1]:c===0&&(h=0),t.push(h);const d=1/(f-2),m=-d,_=1+d,v=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,E=6,M=3,y=2,S=1,R=new Float32Array(M*E*x),C=new Float32Array(y*E*x),D=new Float32Array(S*E*x);for(let P=0;P<x;P++){const O=P%3*2/3-1,F=P>2?0:-1,T=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];R.set(T,M*E*P),C.set(v,y*E*P);const L=[P,P,P,P,P,P];D.set(L,S*E*P)}const w=new Oa;w.setAttribute("position",new ea(R,M)),w.setAttribute("uv",new ea(C,y)),w.setAttribute("faceIndex",new ea(D,S)),a.push(new ga(w,null)),s>ns&&s--}return{lodMeshes:a,sizeLods:e,sigmas:t}}function kS(r,e,t){const a=new Bn(r,e,t);return a.texture.mapping=oh,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function qo(r,e,t,a,s){r.viewport.set(e,t,a,s),r.scissor.set(e,t,a,s)}function Z3(r,e,t){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function K3(r,e,t){const a=new Float32Array(Hs),s=new ue(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function XS(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function WS(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Q3(r){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const h=f.mapping,d=h===Lm||h===Om,m=h===qs||h===ul;if(d||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new VS(r)),_=d?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const x=f.image;return d&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new VS(r)),_=d?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function s(f){let h=0;const d=6;for(let m=0;m<d;m++)f[m]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:c}}function J3(r){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=r.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&Fu("WebGLRenderer: "+a+" extension not supported."),s}}}function $3(r,e,t,a){const s={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,E=_.attributes.position;let M=0;if(x!==null){const R=x.array;M=x.version;for(let C=0,D=R.length;C<D;C+=3){const w=R[C+0],P=R[C+1],O=R[C+2];v.push(w,P,P,O,O,w)}}else if(E!==void 0){const R=E.array;M=E.version;for(let C=0,D=R.length/3-1;C<D;C+=3){const w=C+0,P=C+1,O=C+2;v.push(w,P,P,O,O,w)}}else return;const y=new(KM(v)?nE:tE)(v,1);y.version=M;const S=l.get(_);S&&e.remove(S),l.set(_,y)}function m(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:m}}function eD(r,e,t){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,x){r.drawElements(a,x,l,v*c),t.update(x,a,1)}function d(v,x,E){E!==0&&(r.drawElementsInstanced(a,x,l,v*c,E),t.update(x,a,E))}function m(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,E);let y=0;for(let S=0;S<E;S++)y+=x[S];t.update(y,a,1)}function _(v,x,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)d(v[S]/c,x[S],M[S]);else{y.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,M,0,E);let S=0;for(let R=0;R<E;R++)S+=x[R]*M[R];t.update(S,a,1)}}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function tD(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function nD(r,e,t){const a=new WeakMap,s=new fn;function l(c,f,h){const d=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let L=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",L)};var x=L;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let D=0;E===!0&&(D=1),M===!0&&(D=2),y===!0&&(D=3);let w=f.attributes.position.count*D,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const O=new Float32Array(w*P*4*_),F=new QM(O,w,P,_);F.type=Da,F.needsUpdate=!0;const T=D*4;for(let G=0;G<_;G++){const Y=S[G],q=R[G],le=C[G],ee=w*P*4*G;for(let I=0;I<Y.count;I++){const H=I*T;E===!0&&(s.fromBufferAttribute(Y,I),O[ee+H+0]=s.x,O[ee+H+1]=s.y,O[ee+H+2]=s.z,O[ee+H+3]=0),M===!0&&(s.fromBufferAttribute(q,I),O[ee+H+4]=s.x,O[ee+H+5]=s.y,O[ee+H+6]=s.z,O[ee+H+7]=0),y===!0&&(s.fromBufferAttribute(le,I),O[ee+H+8]=s.x,O[ee+H+9]=s.y,O[ee+H+10]=s.z,O[ee+H+11]=le.itemSize===4?s.w:1)}}v={count:_,texture:F,size:new rt(w,P)},a.set(f,v),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const M=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function iD(r,e,t,a){let s=new WeakMap;function l(h){const d=a.render.frame,m=h.geometry,_=e.get(h,m);if(s.get(_)!==d&&(e.update(_),s.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),s.get(h)!==d&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return _}function c(){s=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const aD={[PM]:"LINEAR_TONE_MAPPING",[BM]:"REINHARD_TONE_MAPPING",[IM]:"CINEON_TONE_MAPPING",[zM]:"ACES_FILMIC_TONE_MAPPING",[HM]:"AGX_TONE_MAPPING",[GM]:"NEUTRAL_TONE_MAPPING",[FM]:"CUSTOM_TONE_MAPPING"};function rD(r,e,t,a,s){const l=new Bn(e,t,{type:r,depthBuffer:a,stencilBuffer:s}),c=new Bn(e,t,{type:pr,depthBuffer:!1,stencilBuffer:!1}),f=new Oa;f.setAttribute("position",new ur([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ur([0,2,0,0,2,0],2));const h=new eC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ga(f,h),m=new lh(-1,1,1,-1,0,1);let _=null,v=null,x=!1,E,M=null,y=[],S=!1;this.setSize=function(R,C){l.setSize(R,C),c.setSize(R,C);for(let D=0;D<y.length;D++){const w=y[D];w.setSize&&w.setSize(R,C)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const C=l.width,D=l.height;for(let w=0;w<y.length;w++){const P=y[w];P.setSize&&P.setSize(C,D)}},this.begin=function(R,C){if(x||R.toneMapping===da&&y.length===0)return!1;if(M=C,C!==null){const D=C.width,w=C.height;(l.width!==D||l.height!==w)&&this.setSize(D,w)}return S===!1&&R.setRenderTarget(l),E=R.toneMapping,R.toneMapping=da,!0},this.hasRenderPass=function(){return S},this.end=function(R,C){R.toneMapping=E,x=!0;let D=l,w=c;for(let P=0;P<y.length;P++){const O=y[P];if(O.enabled!==!1&&(O.render(R,w,D,C),O.needsSwap!==!1)){const F=D;D=w,w=F}}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,h.defines={},Ut.getTransfer(_)===Yt&&(h.defines.SRGB_TRANSFER="");const P=aD[v];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(M),R.render(d,m),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const cE=new Qn,gg=new dl(1,1),fE=new QM,hE=new D2,dE=new rE,YS=[],qS=[],jS=new Float32Array(16),ZS=new Float32Array(9),KS=new Float32Array(4);function vl(r,e,t){const a=r[0];if(a<=0||a>0)return r;const s=e*t;let l=YS[s];if(l===void 0&&(l=new Float32Array(s),YS[s]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Un(r,e){if(r.length!==e.length)return!1;for(let t=0,a=r.length;t<a;t++)if(r[t]!==e[t])return!1;return!0}function Nn(r,e){for(let t=0,a=e.length;t<a;t++)r[t]=e[t]}function ch(r,e){let t=qS[e];t===void 0&&(t=new Int32Array(e),qS[e]=t);for(let a=0;a!==e;++a)t[a]=r.allocateTextureUnit();return t}function sD(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function oD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;r.uniform2fv(this.addr,e),Nn(t,e)}}function lD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;r.uniform3fv(this.addr,e),Nn(t,e)}}function uD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;r.uniform4fv(this.addr,e),Nn(t,e)}}function cD(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(Un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Un(t,a))return;KS.set(a),r.uniformMatrix2fv(this.addr,!1,KS),Nn(t,a)}}function fD(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(Un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Un(t,a))return;ZS.set(a),r.uniformMatrix3fv(this.addr,!1,ZS),Nn(t,a)}}function hD(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(Un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Un(t,a))return;jS.set(a),r.uniformMatrix4fv(this.addr,!1,jS),Nn(t,a)}}function dD(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;r.uniform2iv(this.addr,e),Nn(t,e)}}function mD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;r.uniform3iv(this.addr,e),Nn(t,e)}}function gD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;r.uniform4iv(this.addr,e),Nn(t,e)}}function _D(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;r.uniform2uiv(this.addr,e),Nn(t,e)}}function xD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;r.uniform3uiv(this.addr,e),Nn(t,e)}}function SD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;r.uniform4uiv(this.addr,e),Nn(t,e)}}function yD(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(gg.compareFunction=t.isReversedDepthBuffer()?Kg:Zg,l=gg):l=cE,t.setTexture2D(e||l,s)}function MD(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||hE,s)}function ED(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||dE,s)}function bD(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||fE,s)}function TD(r){switch(r){case 5126:return sD;case 35664:return oD;case 35665:return lD;case 35666:return uD;case 35674:return cD;case 35675:return fD;case 35676:return hD;case 5124:case 35670:return dD;case 35667:case 35671:return pD;case 35668:case 35672:return mD;case 35669:case 35673:return gD;case 5125:return _D;case 36294:return vD;case 36295:return xD;case 36296:return SD;case 35678:case 36198:case 36298:case 36306:case 35682:return yD;case 35679:case 36299:case 36307:return MD;case 35680:case 36300:case 36308:case 36293:return ED;case 36289:case 36303:case 36311:case 36292:return bD}}function AD(r,e){r.uniform1fv(this.addr,e)}function RD(r,e){const t=vl(e,this.size,2);r.uniform2fv(this.addr,t)}function CD(r,e){const t=vl(e,this.size,3);r.uniform3fv(this.addr,t)}function wD(r,e){const t=vl(e,this.size,4);r.uniform4fv(this.addr,t)}function DD(r,e){const t=vl(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function UD(r,e){const t=vl(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ND(r,e){const t=vl(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function LD(r,e){r.uniform1iv(this.addr,e)}function OD(r,e){r.uniform2iv(this.addr,e)}function PD(r,e){r.uniform3iv(this.addr,e)}function BD(r,e){r.uniform4iv(this.addr,e)}function ID(r,e){r.uniform1uiv(this.addr,e)}function zD(r,e){r.uniform2uiv(this.addr,e)}function FD(r,e){r.uniform3uiv(this.addr,e)}function HD(r,e){r.uniform4uiv(this.addr,e)}function GD(r,e,t){const a=this.cache,s=e.length,l=ch(t,s);Un(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=gg:c=cE;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||c,l[f])}function VD(r,e,t){const a=this.cache,s=e.length,l=ch(t,s);Un(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||hE,l[c])}function kD(r,e,t){const a=this.cache,s=e.length,l=ch(t,s);Un(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||dE,l[c])}function XD(r,e,t){const a=this.cache,s=e.length,l=ch(t,s);Un(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||fE,l[c])}function WD(r){switch(r){case 5126:return AD;case 35664:return RD;case 35665:return CD;case 35666:return wD;case 35674:return DD;case 35675:return UD;case 35676:return ND;case 5124:case 35670:return LD;case 35667:case 35671:return OD;case 35668:case 35672:return PD;case 35669:case 35673:return BD;case 5125:return ID;case 36294:return zD;case 36295:return FD;case 36296:return HD;case 35678:case 36198:case 36298:case 36306:case 35682:return GD;case 35679:case 36299:case 36307:return VD;case 35680:case 36300:case 36308:case 36293:return kD;case 36289:case 36303:case 36311:case 36292:return XD}}class YD{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=TD(t.type)}}class qD{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WD(t.type)}}class jD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,t[f.id],a)}}}const rm=/(\w+)(\])?(\[|\.)?/g;function QS(r,e){r.seq.push(e),r.map[e.id]=e}function ZD(r,e,t){const a=r.name,s=a.length;for(rm.lastIndex=0;;){const l=rm.exec(a),c=rm.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===s){QS(t,d===void 0?new YD(f,r,e):new qD(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new jD(f),QS(t,_)),t=_}}}class kf{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);ZD(f,h,this)}const s=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):l.push(c);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&a.push(c)}return a}}function JS(r,e,t){const a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),a}const KD=37297;let QD=0;function JD(r,e){const t=r.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return a.join(`
`)}const $S=new pt;function $D(r){Ut._getMatrix($S,Ut.workingColorSpace,r);const e=`mat3( ${$S.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(r)){case $f:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ey(r,e,t){const a=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+JD(r.getShaderSource(e),f)}else return l}function eU(r,e){const t=$D(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tU={[PM]:"Linear",[BM]:"Reinhard",[IM]:"Cineon",[zM]:"ACESFilmic",[HM]:"AgX",[GM]:"Neutral",[FM]:"Custom"};function nU(r,e){const t=tU[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uf=new ue;function iU(){Ut.getLuminanceCoefficients(Uf);const r=Uf.x.toFixed(4),e=Uf.y.toFixed(4),t=Uf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aU(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bu).join(`
`)}function rU(r){const e=[];for(const t in r){const a=r[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function sU(r,e){const t={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=r.getActiveAttrib(e,s),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function bu(r){return r!==""}function ty(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ny(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oU=/^[ \t]*#include +<([\w\d./]+)>/gm;function _g(r){return r.replace(oU,uU)}const lU=new Map;function uU(r,e){let t=gt[e];if(t===void 0){const a=lU.get(e);if(a!==void 0)t=gt[a],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return _g(t)}const cU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iy(r){return r.replace(cU,fU)}function fU(r,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function ay(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hU={[zf]:"SHADOWMAP_TYPE_PCF",[Eu]:"SHADOWMAP_TYPE_VSM"};function dU(r){return hU[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pU={[qs]:"ENVMAP_TYPE_CUBE",[ul]:"ENVMAP_TYPE_CUBE",[oh]:"ENVMAP_TYPE_CUBE_UV"};function mU(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pU[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gU={[ul]:"ENVMAP_MODE_REFRACTION"};function _U(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gU[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vU={[OM]:"ENVMAP_BLENDING_MULTIPLY",[KR]:"ENVMAP_BLENDING_MIX",[QR]:"ENVMAP_BLENDING_ADD"};function xU(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vU[r.combine]||"ENVMAP_BLENDING_NONE"}function SU(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function yU(r,e,t,a){const s=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=dU(t),d=mU(t),m=_U(t),_=xU(t),v=SU(t),x=aU(t),E=rU(l),M=s.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(bu).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(bu).join(`
`),S.length>0&&(S+=`
`)):(y=[ay(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bu).join(`
`),S=[ay(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==da?"#define TONE_MAPPING":"",t.toneMapping!==da?gt.tonemapping_pars_fragment:"",t.toneMapping!==da?nU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,eU("linearToOutputTexel",t.outputColorSpace),iU(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bu).join(`
`)),c=_g(c),c=ty(c,t),c=ny(c,t),f=_g(f),f=ty(f,t),f=ny(f,t),c=iy(c),f=iy(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===xS?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=R+y+c,D=R+S+f,w=JS(s,s.VERTEX_SHADER,C),P=JS(s,s.FRAGMENT_SHADER,D);s.attachShader(M,w),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(G){if(r.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M)||"",q=s.getShaderInfoLog(w)||"",le=s.getShaderInfoLog(P)||"",ee=Y.trim(),I=q.trim(),H=le.trim();let J=!0,_e=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,w,P);else{const xe=ey(s,w,"vertex"),B=ey(s,P,"fragment");Pt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+xe+`
`+B)}else ee!==""?lt("WebGLProgram: Program Info Log:",ee):(I===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:J,programLog:ee,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:S}})}s.deleteShader(w),s.deleteShader(P),F=new kf(s,M),T=sU(s,M)}let F;this.getUniforms=function(){return F===void 0&&O(this),F};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,KD)),L},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QD++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=P,this}let MU=0;class EU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new bU(e),t.set(e,a)),a}}class bU{constructor(e){this.id=MU++,this.code=e,this.usedTimes=0}}function TU(r,e,t,a,s,l,c){const f=new JM,h=new EU,d=new Set,m=[],_=new Map,v=s.logarithmicDepthBuffer;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function y(T,L,G,Y,q){const le=Y.fog,ee=q.geometry,I=T.isMeshStandardMaterial?Y.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||I),J=H&&H.mapping===oh?H.image.height:null,_e=E[T.type];T.precision!==null&&(x=s.getMaxPrecision(T.precision),x!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const xe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,B=xe!==void 0?xe.length:0;let te=0;ee.morphAttributes.position!==void 0&&(te=1),ee.morphAttributes.normal!==void 0&&(te=2),ee.morphAttributes.color!==void 0&&(te=3);let pe,be,Ne,ae;if(_e){const Dt=Aa[_e];pe=Dt.vertexShader,be=Dt.fragmentShader}else pe=T.vertexShader,be=T.fragmentShader,h.update(T),Ne=h.getVertexShaderID(T),ae=h.getFragmentShaderID(T);const de=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Xe=q.isInstancedMesh===!0,ke=q.isBatchedMesh===!0,_t=!!T.map,en=!!T.matcap,mt=!!H,vt=!!T.aoMap,je=!!T.lightMap,Te=!!T.bumpMap,wt=!!T.normalMap,k=!!T.displacementMap,xt=!!T.emissiveMap,ct=!!T.metalnessMap,St=!!T.roughnessMap,He=T.anisotropy>0,z=T.clearcoat>0,A=T.dispersion>0,j=T.iridescence>0,me=T.sheen>0,Se=T.transmission>0,he=He&&!!T.anisotropyMap,We=z&&!!T.clearcoatMap,Ue=z&&!!T.clearcoatNormalMap,Ze=z&&!!T.clearcoatRoughnessMap,at=j&&!!T.iridescenceMap,Ae=j&&!!T.iridescenceThicknessMap,Re=me&&!!T.sheenColorMap,Ge=me&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Le=!!T.specularColorMap,ht=!!T.specularIntensityMap,W=Se&&!!T.transmissionMap,Pe=Se&&!!T.thicknessMap,Ce=!!T.gradientMap,Fe=!!T.alphaMap,Ee=T.alphaTest>0,Me=!!T.alphaHash,De=!!T.extensions;let st=da;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(st=r.toneMapping);const Vt={shaderID:_e,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:be,defines:T.defines,customVertexShaderID:Ne,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:ke,batchingColor:ke&&q._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&q.instanceColor!==null,instancingMorph:Xe&&q.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:us,alphaToCoverage:!!T.alphaToCoverage,map:_t,matcap:en,envMap:mt,envMapMode:mt&&H.mapping,envMapCubeUVHeight:J,aoMap:vt,lightMap:je,bumpMap:Te,normalMap:wt,displacementMap:k,emissiveMap:xt,normalMapObjectSpace:wt&&T.normalMapType===e2,normalMapTangentSpace:wt&&T.normalMapType===$R,metalnessMap:ct,roughnessMap:St,anisotropy:He,anisotropyMap:he,clearcoat:z,clearcoatMap:We,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ze,dispersion:A,iridescence:j,iridescenceMap:at,iridescenceThicknessMap:Ae,sheen:me,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Le,specularIntensityMap:ht,transmission:Se,transmissionMap:W,thicknessMap:Pe,gradientMap:Ce,opaque:T.transparent===!1&&T.blending===el&&T.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ee,alphaHash:Me,combine:T.combine,mapUv:_t&&M(T.map.channel),aoMapUv:vt&&M(T.aoMap.channel),lightMapUv:je&&M(T.lightMap.channel),bumpMapUv:Te&&M(T.bumpMap.channel),normalMapUv:wt&&M(T.normalMap.channel),displacementMapUv:k&&M(T.displacementMap.channel),emissiveMapUv:xt&&M(T.emissiveMap.channel),metalnessMapUv:ct&&M(T.metalnessMap.channel),roughnessMapUv:St&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:We&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(T.sheenRoughnessMap.channel),specularMapUv:ze&&M(T.specularMap.channel),specularColorMapUv:Le&&M(T.specularColorMap.channel),specularIntensityMapUv:ht&&M(T.specularIntensityMap.channel),transmissionMapUv:W&&M(T.transmissionMap.channel),thicknessMapUv:Pe&&M(T.thicknessMap.channel),alphaMapUv:Fe&&M(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(wt||He),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(_t||Fe),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:te,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:_t&&T.map.isVideoTexture===!0&&Ut.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ni,flipSided:T.side===Pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||ke)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=d.has(1),Vt.vertexUv2s=d.has(2),Vt.vertexUv3s=d.has(3),d.clear(),Vt}function S(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)L.push(G),L.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(R(L,T),C(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function R(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function D(T){const L=E[T.type];let G;if(L){const Y=Aa[L];G=X2.clone(Y.uniforms)}else G=T.uniforms;return G}function w(T,L){let G=_.get(L);return G!==void 0?++G.usedTimes:(G=new yU(r,L,T,l),m.push(G),_.set(L,G)),G}function P(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){h.remove(T)}function F(){h.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:D,acquireProgram:w,releaseProgram:P,releaseShaderCache:O,programs:m,dispose:F}}function AU(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function a(c){r.delete(c)}function s(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function RU(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ry(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sy(){const r=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function c(_,v,x,E,M,y){let S=r[e];return S===void 0?(S={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},r[e]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=x,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=M,S.group=y),e++,S}function f(_,v,x,E,M,y){const S=c(_,v,x,E,M,y);x.transmission>0?a.push(S):x.transparent===!0?s.push(S):t.push(S)}function h(_,v,x,E,M,y){const S=c(_,v,x,E,M,y);x.transmission>0?a.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}function d(_,v){t.length>1&&t.sort(_||RU),a.length>1&&a.sort(v||ry),s.length>1&&s.sort(v||ry)}function m(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:f,unshift:h,finish:m,sort:d}}function CU(){let r=new WeakMap;function e(a,s){const l=r.get(a);let c;return l===void 0?(c=new sy,r.set(a,[c])):s>=l.length?(c=new sy,l.push(c)):c=l[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function wU(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Gt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":t={color:new Gt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return r[e.id]=t,t}}}function DU(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let UU=0;function NU(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function LU(r){const e=new wU,t=DU(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ue);const s=new ue,l=new Rn,c=new Rn;function f(d){let m=0,_=0,v=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let x=0,E=0,M=0,y=0,S=0,R=0,C=0,D=0,w=0,P=0,O=0;d.sort(NU);for(let T=0,L=d.length;T<L;T++){const G=d[T],Y=G.color,q=G.intensity,le=G.distance;let ee=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===fl?ee=G.shadow.map.texture:ee=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)m+=Y.r*q,_+=Y.g*q,v+=Y.b*q;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],q);O++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,J=t.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[x]=J,a.directionalShadowMap[x]=ee,a.directionalShadowMatrix[x]=G.shadow.matrix,R++}a.directional[x]=I,x++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Y).multiplyScalar(q),I.distance=le,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[M]=I;const H=G.shadow;if(G.map&&(a.spotLightMap[w]=G.map,w++,H.updateMatrices(G),G.castShadow&&P++),a.spotLightMatrix[M]=H.matrix,G.castShadow){const J=t.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[M]=J,a.spotShadowMap[M]=ee,D++}M++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(Y).multiplyScalar(q),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=I,y++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,J=t.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[E]=J,a.pointShadowMap[E]=ee,a.pointShadowMatrix[E]=G.shadow.matrix,C++}a.point[E]=I,E++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(q),I.groundColor.copy(G.groundColor).multiplyScalar(q),a.hemi[S]=I,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=_,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==x||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==S||F.numDirectionalShadows!==R||F.numPointShadows!==C||F.numSpotShadows!==D||F.numSpotMaps!==w||F.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=M,a.rectArea.length=y,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=D+w-P,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=O,F.directionalLength=x,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=S,F.numDirectionalShadows=R,F.numPointShadows=C,F.numSpotShadows=D,F.numSpotMaps=w,F.numLightProbes=O,a.version=UU++)}function h(d,m){let _=0,v=0,x=0,E=0,M=0;const y=m.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const C=d[S];if(C.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),_++}else if(C.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),x++}else if(C.isRectAreaLight){const D=a.rectArea[E];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),E++}else if(C.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){const D=a.hemi[M];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(y),M++}}}return{setup:f,setupView:h,state:a}}function oy(r){const e=new LU(r),t=[],a=[];function s(m){d.camera=m,t.length=0,a.length=0}function l(m){t.push(m)}function c(m){a.push(m)}function f(){e.setup(t)}function h(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function OU(r){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new oy(r),e.set(s,[f])):l>=c.length?(f=new oy(r),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const PU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IU=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],zU=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],ly=new Rn,Su=new ue,sm=new ue;function FU(r,e,t){let a=new oE;const s=new rt,l=new rt,c=new fn,f=new tC,h=new nC,d={},m=t.maxTextureSize,_={[dr]:Pn,[Pn]:dr,[Ni]:Ni},v=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:PU,fragmentShader:BU}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Oa;E.setAttribute("position",new ea(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ga(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zf;let S=this.type;this.render=function(P,O,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;P.type===UR&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=zf);const T=r.getRenderTarget(),L=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(li),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=S!==this.type;q&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(ee=>ee.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,ee=P.length;le<ee;le++){const I=P[le],H=I.shadow;if(H===void 0){lt("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),l.copy(H.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/J.x),s.x=l.x*J.x,H.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/J.y),s.y=l.y*J.y,H.mapSize.y=l.y)),H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Eu){if(I.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bn(s.x,s.y,{format:fl,type:pr,minFilter:An,magFilter:An,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new dl(s.x,s.y,Da),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=mr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zn,H.map.depthTexture.magFilter=Zn}else{I.isPointLight?(H.map=new sE(s.x),H.map.depthTexture=new $2(s.x,ma)):(H.map=new Bn(s.x,s.y),H.map.depthTexture=new dl(s.x,s.y,ma)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=mr;const xe=r.state.buffers.depth.getReversed();this.type===zf?(H.map.depthTexture.compareFunction=xe?Kg:Zg,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zn,H.map.depthTexture.magFilter=Zn)}H.camera.updateProjectionMatrix()}const _e=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<_e;xe++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(H.map),r.clear());const B=H.getViewport(xe);c.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),Y.viewport(c)}if(I.isPointLight){const B=H.camera,te=H.matrix,pe=I.distance||B.far;pe!==B.far&&(B.far=pe,B.updateProjectionMatrix()),Su.setFromMatrixPosition(I.matrixWorld),B.position.copy(Su),sm.copy(B.position),sm.add(IU[xe]),B.up.copy(zU[xe]),B.lookAt(sm),B.updateMatrixWorld(),te.makeTranslation(-Su.x,-Su.y,-Su.z),ly.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ly,B.coordinateSystem,B.reversedDepth)}else H.updateMatrices(I);a=H.getFrustum(),D(O,F,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Eu&&R(H,F),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(T,L,G)};function R(P,O){const F=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bn(s.x,s.y,{format:fl,type:pr})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(O,null,F,v,M,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(O,null,F,x,M,null)}function C(P,O,F,T){let L=null;const G=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)L=G;else if(L=F.isPointLight===!0?h:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=L.uuid,q=O.uuid;let le=d[Y];le===void 0&&(le={},d[Y]=le);let ee=le[q];ee===void 0&&(ee=L.clone(),le[q]=ee,O.addEventListener("dispose",w)),L=ee}if(L.visible=O.visible,L.wireframe=O.wireframe,T===Eu?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:_[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,F.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Y=r.properties.get(L);Y.light=F}return L}function D(P,O,F,T,L){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===Eu)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const q=e.update(P),le=P.material;if(Array.isArray(le)){const ee=q.groups;for(let I=0,H=ee.length;I<H;I++){const J=ee[I],_e=le[J.materialIndex];if(_e&&_e.visible){const xe=C(P,_e,T,L);P.onBeforeShadow(r,P,O,F,q,xe,J),r.renderBufferDirect(F,null,q,xe,P,J),P.onAfterShadow(r,P,O,F,q,xe,J)}}}else if(le.visible){const ee=C(P,le,T,L);P.onBeforeShadow(r,P,O,F,q,ee,null),r.renderBufferDirect(F,null,q,ee,P,null),P.onAfterShadow(r,P,O,F,q,ee,null)}}const Y=P.children;for(let q=0,le=Y.length;q<le;q++)D(Y[q],O,F,T,L)}function w(P){P.target.removeEventListener("dispose",w);for(const F in d){const T=d[F],L=P.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}const HU={[Rm]:Jf,[Cm]:Um,[wm]:Nm,[ll]:Dm,[Jf]:Rm,[Um]:Cm,[Nm]:wm,[Dm]:ll};function GU(r,e){function t(){let W=!1;const Pe=new fn;let Ce=null;const Fe=new fn(0,0,0,0);return{setMask:function(Ee){Ce!==Ee&&!W&&(r.colorMask(Ee,Ee,Ee,Ee),Ce=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,Me,De,st,Vt){Vt===!0&&(Ee*=st,Me*=st,De*=st),Pe.set(Ee,Me,De,st),Fe.equals(Pe)===!1&&(r.clearColor(Ee,Me,De,st),Fe.copy(Pe))},reset:function(){W=!1,Ce=null,Fe.set(-1,0,0,0)}}}function a(){let W=!1,Pe=!1,Ce=null,Fe=null,Ee=null;return{setReversed:function(Me){if(Pe!==Me){const De=e.get("EXT_clip_control");Me?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Pe=Me;const st=Ee;Ee=null,this.setClear(st)}},getReversed:function(){return Pe},setTest:function(Me){Me?de(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Me){Ce!==Me&&!W&&(r.depthMask(Me),Ce=Me)},setFunc:function(Me){if(Pe&&(Me=HU[Me]),Fe!==Me){switch(Me){case Rm:r.depthFunc(r.NEVER);break;case Jf:r.depthFunc(r.ALWAYS);break;case Cm:r.depthFunc(r.LESS);break;case ll:r.depthFunc(r.LEQUAL);break;case wm:r.depthFunc(r.EQUAL);break;case Dm:r.depthFunc(r.GEQUAL);break;case Um:r.depthFunc(r.GREATER);break;case Nm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Me}},setLocked:function(Me){W=Me},setClear:function(Me){Ee!==Me&&(Pe&&(Me=1-Me),r.clearDepth(Me),Ee=Me)},reset:function(){W=!1,Ce=null,Fe=null,Ee=null,Pe=!1}}}function s(){let W=!1,Pe=null,Ce=null,Fe=null,Ee=null,Me=null,De=null,st=null,Vt=null;return{setTest:function(Dt){W||(Dt?de(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Dt){Pe!==Dt&&!W&&(r.stencilMask(Dt),Pe=Dt)},setFunc:function(Dt,Jn,na){(Ce!==Dt||Fe!==Jn||Ee!==na)&&(r.stencilFunc(Dt,Jn,na),Ce=Dt,Fe=Jn,Ee=na)},setOp:function(Dt,Jn,na){(Me!==Dt||De!==Jn||st!==na)&&(r.stencilOp(Dt,Jn,na),Me=Dt,De=Jn,st=na)},setLocked:function(Dt){W=Dt},setClear:function(Dt){Vt!==Dt&&(r.clearStencil(Dt),Vt=Dt)},reset:function(){W=!1,Pe=null,Ce=null,Fe=null,Ee=null,Me=null,De=null,st=null,Vt=null}}}const l=new t,c=new a,f=new s,h=new WeakMap,d=new WeakMap;let m={},_={},v=new WeakMap,x=[],E=null,M=!1,y=null,S=null,R=null,C=null,D=null,w=null,P=null,O=new Gt(0,0,0),F=0,T=!1,L=null,G=null,Y=null,q=null,le=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),I=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),I=H>=2);let _e=null,xe={};const B=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),pe=new fn().fromArray(B),be=new fn().fromArray(te);function Ne(W,Pe,Ce,Fe){const Ee=new Uint8Array(4),Me=r.createTexture();r.bindTexture(W,Me),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<Ce;De++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Pe+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Me}const ae={};ae[r.TEXTURE_2D]=Ne(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),de(r.DEPTH_TEST),c.setFunc(ll),Te(!1),wt(dS),de(r.CULL_FACE),vt(li);function de(W){m[W]!==!0&&(r.enable(W),m[W]=!0)}function we(W){m[W]!==!1&&(r.disable(W),m[W]=!1)}function Xe(W,Pe){return _[W]!==Pe?(r.bindFramebuffer(W,Pe),_[W]=Pe,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pe),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ke(W,Pe){let Ce=x,Fe=!1;if(W){Ce=v.get(Pe),Ce===void 0&&(Ce=[],v.set(Pe,Ce));const Ee=W.textures;if(Ce.length!==Ee.length||Ce[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,De=Ee.length;Me<De;Me++)Ce[Me]=r.COLOR_ATTACHMENT0+Me;Ce.length=Ee.length,Fe=!0}}else Ce[0]!==r.BACK&&(Ce[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Ce)}function _t(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const en={[Fs]:r.FUNC_ADD,[LR]:r.FUNC_SUBTRACT,[OR]:r.FUNC_REVERSE_SUBTRACT};en[PR]=r.MIN,en[BR]=r.MAX;const mt={[IR]:r.ZERO,[zR]:r.ONE,[FR]:r.SRC_COLOR,[Tm]:r.SRC_ALPHA,[WR]:r.SRC_ALPHA_SATURATE,[kR]:r.DST_COLOR,[GR]:r.DST_ALPHA,[HR]:r.ONE_MINUS_SRC_COLOR,[Am]:r.ONE_MINUS_SRC_ALPHA,[XR]:r.ONE_MINUS_DST_COLOR,[VR]:r.ONE_MINUS_DST_ALPHA,[YR]:r.CONSTANT_COLOR,[qR]:r.ONE_MINUS_CONSTANT_COLOR,[jR]:r.CONSTANT_ALPHA,[ZR]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(W,Pe,Ce,Fe,Ee,Me,De,st,Vt,Dt){if(W===li){M===!0&&(we(r.BLEND),M=!1);return}if(M===!1&&(de(r.BLEND),M=!0),W!==NR){if(W!==y||Dt!==T){if((S!==Fs||D!==Fs)&&(r.blendEquation(r.FUNC_ADD),S=Fs,D=Fs),Dt)switch(W){case el:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pS:r.blendFunc(r.ONE,r.ONE);break;case mS:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gS:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",W);break}else switch(W){case el:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pS:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mS:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gS:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",W);break}R=null,C=null,w=null,P=null,O.set(0,0,0),F=0,y=W,T=Dt}return}Ee=Ee||Pe,Me=Me||Ce,De=De||Fe,(Pe!==S||Ee!==D)&&(r.blendEquationSeparate(en[Pe],en[Ee]),S=Pe,D=Ee),(Ce!==R||Fe!==C||Me!==w||De!==P)&&(r.blendFuncSeparate(mt[Ce],mt[Fe],mt[Me],mt[De]),R=Ce,C=Fe,w=Me,P=De),(st.equals(O)===!1||Vt!==F)&&(r.blendColor(st.r,st.g,st.b,Vt),O.copy(st),F=Vt),y=W,T=!1}function je(W,Pe){W.side===Ni?we(r.CULL_FACE):de(r.CULL_FACE);let Ce=W.side===Pn;Pe&&(Ce=!Ce),Te(Ce),W.blending===el&&W.transparent===!1?vt(li):vt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Fe=W.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),xt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(W){L!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),L=W)}function wt(W){W!==wR?(de(r.CULL_FACE),W!==G&&(W===dS?r.cullFace(r.BACK):W===DR?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),G=W}function k(W){W!==Y&&(I&&r.lineWidth(W),Y=W)}function xt(W,Pe,Ce){W?(de(r.POLYGON_OFFSET_FILL),(q!==Pe||le!==Ce)&&(r.polygonOffset(Pe,Ce),q=Pe,le=Ce)):we(r.POLYGON_OFFSET_FILL)}function ct(W){W?de(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function St(W){W===void 0&&(W=r.TEXTURE0+ee-1),_e!==W&&(r.activeTexture(W),_e=W)}function He(W,Pe,Ce){Ce===void 0&&(_e===null?Ce=r.TEXTURE0+ee-1:Ce=_e);let Fe=xe[Ce];Fe===void 0&&(Fe={type:void 0,texture:void 0},xe[Ce]=Fe),(Fe.type!==W||Fe.texture!==Pe)&&(_e!==Ce&&(r.activeTexture(Ce),_e=Ce),r.bindTexture(W,Pe||ae[W]),Fe.type=W,Fe.texture=Pe)}function z(){const W=xe[_e];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function me(){try{r.texSubImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Se(){try{r.texSubImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function We(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Ue(){try{r.texStorage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Ze(){try{r.texStorage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function at(){try{r.texImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Ae(){try{r.texImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Re(W){pe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),pe.copy(W))}function Ge(W){be.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),be.copy(W))}function ze(W,Pe){let Ce=d.get(Pe);Ce===void 0&&(Ce=new WeakMap,d.set(Pe,Ce));let Fe=Ce.get(W);Fe===void 0&&(Fe=r.getUniformBlockIndex(Pe,W.name),Ce.set(W,Fe))}function Le(W,Pe){const Fe=d.get(Pe).get(W);h.get(Pe)!==Fe&&(r.uniformBlockBinding(Pe,Fe,W.__bindingPointIndex),h.set(Pe,Fe))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},_e=null,xe={},_={},v=new WeakMap,x=[],E=null,M=!1,y=null,S=null,R=null,C=null,D=null,w=null,P=null,O=new Gt(0,0,0),F=0,T=!1,L=null,G=null,Y=null,q=null,le=null,pe.set(0,0,r.canvas.width,r.canvas.height),be.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:de,disable:we,bindFramebuffer:Xe,drawBuffers:ke,useProgram:_t,setBlending:vt,setMaterial:je,setFlipSided:Te,setCullFace:wt,setLineWidth:k,setPolygonOffset:xt,setScissorTest:ct,activeTexture:St,bindTexture:He,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:j,texImage2D:at,texImage3D:Ae,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:Se,compressedTexSubImage2D:he,compressedTexSubImage3D:We,scissor:Re,viewport:Ge,reset:ht}}function VU(r,e,t,a,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new rt,m=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,A){return x?new OffscreenCanvas(z,A):th("canvas")}function M(z,A,j){let me=1;const Se=He(z);if((Se.width>j||Se.height>j)&&(me=j/Math.max(Se.width,Se.height)),me<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const he=Math.floor(me*Se.width),We=Math.floor(me*Se.height);_===void 0&&(_=E(he,We));const Ue=A?E(he,We):_;return Ue.width=he,Ue.height=We,Ue.getContext("2d").drawImage(z,0,0,he,We),lt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+he+"x"+We+")."),Ue}else return"data"in z&&lt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),z;return z}function y(z){return z.generateMipmaps}function S(z){r.generateMipmap(z)}function R(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(z,A,j,me,Se=!1){if(z!==null){if(r[z]!==void 0)return r[z];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let he=A;if(A===r.RED&&(j===r.FLOAT&&(he=r.R32F),j===r.HALF_FLOAT&&(he=r.R16F),j===r.UNSIGNED_BYTE&&(he=r.R8)),A===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(he=r.R8UI),j===r.UNSIGNED_SHORT&&(he=r.R16UI),j===r.UNSIGNED_INT&&(he=r.R32UI),j===r.BYTE&&(he=r.R8I),j===r.SHORT&&(he=r.R16I),j===r.INT&&(he=r.R32I)),A===r.RG&&(j===r.FLOAT&&(he=r.RG32F),j===r.HALF_FLOAT&&(he=r.RG16F),j===r.UNSIGNED_BYTE&&(he=r.RG8)),A===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(he=r.RG8UI),j===r.UNSIGNED_SHORT&&(he=r.RG16UI),j===r.UNSIGNED_INT&&(he=r.RG32UI),j===r.BYTE&&(he=r.RG8I),j===r.SHORT&&(he=r.RG16I),j===r.INT&&(he=r.RG32I)),A===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(he=r.RGB8UI),j===r.UNSIGNED_SHORT&&(he=r.RGB16UI),j===r.UNSIGNED_INT&&(he=r.RGB32UI),j===r.BYTE&&(he=r.RGB8I),j===r.SHORT&&(he=r.RGB16I),j===r.INT&&(he=r.RGB32I)),A===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),j===r.UNSIGNED_INT&&(he=r.RGBA32UI),j===r.BYTE&&(he=r.RGBA8I),j===r.SHORT&&(he=r.RGBA16I),j===r.INT&&(he=r.RGBA32I)),A===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),A===r.RGBA){const We=Se?$f:Ut.getTransfer(me);j===r.FLOAT&&(he=r.RGBA32F),j===r.HALF_FLOAT&&(he=r.RGBA16F),j===r.UNSIGNED_BYTE&&(he=We===Yt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function D(z,A){let j;return z?A===null||A===ma||A===cl?j=r.DEPTH24_STENCIL8:A===Da?j=r.DEPTH32F_STENCIL8:A===zu&&(j=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ma||A===cl?j=r.DEPTH_COMPONENT24:A===Da?j=r.DEPTH_COMPONENT32F:A===zu&&(j=r.DEPTH_COMPONENT16),j}function w(z,A){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Zn&&z.minFilter!==An?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function P(z){const A=z.target;A.removeEventListener("dispose",P),F(A),A.isVideoTexture&&m.delete(A)}function O(z){const A=z.target;A.removeEventListener("dispose",O),L(A)}function F(z){const A=a.get(z);if(A.__webglInit===void 0)return;const j=z.source,me=v.get(j);if(me){const Se=me[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&T(z),Object.keys(me).length===0&&v.delete(j)}a.remove(z)}function T(z){const A=a.get(z);r.deleteTexture(A.__webglTexture);const j=z.source,me=v.get(j);delete me[A.__cacheKey],c.memory.textures--}function L(z){const A=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let Se=0;Se<A.__webglFramebuffer[me].length;Se++)r.deleteFramebuffer(A.__webglFramebuffer[me][Se]);else r.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)r.deleteFramebuffer(A.__webglFramebuffer[me]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=z.textures;for(let me=0,Se=j.length;me<Se;me++){const he=a.get(j[me]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),a.remove(j[me])}a.remove(z)}let G=0;function Y(){G=0}function q(){const z=G;return z>=s.maxTextures&&lt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),G+=1,z}function le(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function ee(z,A){const j=a.get(z);if(z.isVideoTexture&&ct(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&j.__version!==z.version){const me=z.image;if(me===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(j,z,A);return}}else z.isExternalTexture&&(j.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+A)}function I(z,A){const j=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){ae(j,z,A);return}else z.isExternalTexture&&(j.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+A)}function H(z,A){const j=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){ae(j,z,A);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+A)}function J(z,A){const j=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&j.__version!==z.version){de(j,z,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+A)}const _e={[Pm]:r.REPEAT,[sr]:r.CLAMP_TO_EDGE,[Bm]:r.MIRRORED_REPEAT},xe={[Zn]:r.NEAREST,[JR]:r.NEAREST_MIPMAP_NEAREST,[ff]:r.NEAREST_MIPMAP_LINEAR,[An]:r.LINEAR,[Np]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},B={[t2]:r.NEVER,[s2]:r.ALWAYS,[n2]:r.LESS,[Zg]:r.LEQUAL,[i2]:r.EQUAL,[Kg]:r.GEQUAL,[a2]:r.GREATER,[r2]:r.NOTEQUAL};function te(z,A){if(A.type===Da&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===An||A.magFilter===Np||A.magFilter===ff||A.magFilter===Vs||A.minFilter===An||A.minFilter===Np||A.minFilter===ff||A.minFilter===Vs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,_e[A.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,_e[A.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,_e[A.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,xe[A.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,xe[A.minFilter]),A.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Zn||A.minFilter!==ff&&A.minFilter!==Vs||A.type===Da&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function pe(z,A){let j=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",P));const me=A.source;let Se=v.get(me);Se===void 0&&(Se={},v.set(me,Se));const he=le(A);if(he!==z.__cacheKey){Se[he]===void 0&&(Se[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,j=!0),Se[he].usedTimes++;const We=Se[z.__cacheKey];We!==void 0&&(Se[z.__cacheKey].usedTimes--,We.usedTimes===0&&T(A)),z.__cacheKey=he,z.__webglTexture=Se[he].texture}return j}function be(z,A,j){return Math.floor(Math.floor(z/j)/A)}function Ne(z,A,j,me){const he=z.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,j,me,A.data);else{he.sort((Ae,Re)=>Ae.start-Re.start);let We=0;for(let Ae=1;Ae<he.length;Ae++){const Re=he[We],Ge=he[Ae],ze=Re.start+Re.count,Le=be(Ge.start,A.width,4),ht=be(Re.start,A.width,4);Ge.start<=ze+1&&Le===ht&&be(Ge.start+Ge.count-1,A.width,4)===Le?Re.count=Math.max(Re.count,Ge.start+Ge.count-Re.start):(++We,he[We]=Ge)}he.length=We+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),at=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Ae=0,Re=he.length;Ae<Re;Ae++){const Ge=he[Ae],ze=Math.floor(Ge.start/4),Le=Math.ceil(Ge.count/4),ht=ze%A.width,W=Math.floor(ze/A.width),Pe=Le,Ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,ht,W,Pe,Ce,j,me,A.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function ae(z,A,j){let me=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=r.TEXTURE_3D);const Se=pe(z,A),he=A.source;t.bindTexture(me,z.__webglTexture,r.TEXTURE0+j);const We=a.get(he);if(he.version!==We.__version||Se===!0){t.activeTexture(r.TEXTURE0+j);const Ue=Ut.getPrimaries(Ut.workingColorSpace),Ze=A.colorSpace===Ca?null:Ut.getPrimaries(A.colorSpace),at=A.colorSpace===Ca||Ue===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Ae=M(A.image,!1,s.maxTextureSize);Ae=St(A,Ae);const Re=l.convert(A.format,A.colorSpace),Ge=l.convert(A.type);let ze=C(A.internalFormat,Re,Ge,A.colorSpace,A.isVideoTexture);te(me,A);let Le;const ht=A.mipmaps,W=A.isVideoTexture!==!0,Pe=We.__version===void 0||Se===!0,Ce=he.dataReady,Fe=w(A,Ae);if(A.isDepthTexture)ze=D(A.format===ts,A.type),Pe&&(W?t.texStorage2D(r.TEXTURE_2D,1,ze,Ae.width,Ae.height):t.texImage2D(r.TEXTURE_2D,0,ze,Ae.width,Ae.height,0,Re,Ge,null));else if(A.isDataTexture)if(ht.length>0){W&&Pe&&t.texStorage2D(r.TEXTURE_2D,Fe,ze,ht[0].width,ht[0].height);for(let Ee=0,Me=ht.length;Ee<Me;Ee++)Le=ht[Ee],W?Ce&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Re,Ge,Le.data):t.texImage2D(r.TEXTURE_2D,Ee,ze,Le.width,Le.height,0,Re,Ge,Le.data);A.generateMipmaps=!1}else W?(Pe&&t.texStorage2D(r.TEXTURE_2D,Fe,ze,Ae.width,Ae.height),Ce&&Ne(A,Ae,Re,Ge)):t.texImage2D(r.TEXTURE_2D,0,ze,Ae.width,Ae.height,0,Re,Ge,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ze,ht[0].width,ht[0].height,Ae.depth);for(let Ee=0,Me=ht.length;Ee<Me;Ee++)if(Le=ht[Ee],A.format!==ha)if(Re!==null)if(W){if(Ce)if(A.layerUpdates.size>0){const De=FS(Le.width,Le.height,A.format,A.type);for(const st of A.layerUpdates){const Vt=Le.data.subarray(st*De/Le.data.BYTES_PER_ELEMENT,(st+1)*De/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,st,Le.width,Le.height,1,Re,Vt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Ae.depth,Re,Le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,ze,Le.width,Le.height,Ae.depth,0,Le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Ae.depth,Re,Ge,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,ze,Le.width,Le.height,Ae.depth,0,Re,Ge,Le.data)}else{W&&Pe&&t.texStorage2D(r.TEXTURE_2D,Fe,ze,ht[0].width,ht[0].height);for(let Ee=0,Me=ht.length;Ee<Me;Ee++)Le=ht[Ee],A.format!==ha?Re!==null?W?Ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,ze,Le.width,Le.height,0,Le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ce&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Re,Ge,Le.data):t.texImage2D(r.TEXTURE_2D,Ee,ze,Le.width,Le.height,0,Re,Ge,Le.data)}else if(A.isDataArrayTexture)if(W){if(Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ze,Ae.width,Ae.height,Ae.depth),Ce)if(A.layerUpdates.size>0){const Ee=FS(Ae.width,Ae.height,A.format,A.type);for(const Me of A.layerUpdates){const De=Ae.data.subarray(Me*Ee/Ae.data.BYTES_PER_ELEMENT,(Me+1)*Ee/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,Ae.width,Ae.height,1,Re,Ge,De)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(A.isData3DTexture)W?(Pe&&t.texStorage3D(r.TEXTURE_3D,Fe,ze,Ae.width,Ae.height,Ae.depth),Ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Ge,Ae.data)):t.texImage3D(r.TEXTURE_3D,0,ze,Ae.width,Ae.height,Ae.depth,0,Re,Ge,Ae.data);else if(A.isFramebufferTexture){if(Pe)if(W)t.texStorage2D(r.TEXTURE_2D,Fe,ze,Ae.width,Ae.height);else{let Ee=Ae.width,Me=Ae.height;for(let De=0;De<Fe;De++)t.texImage2D(r.TEXTURE_2D,De,ze,Ee,Me,0,Re,Ge,null),Ee>>=1,Me>>=1}}else if(ht.length>0){if(W&&Pe){const Ee=He(ht[0]);t.texStorage2D(r.TEXTURE_2D,Fe,ze,Ee.width,Ee.height)}for(let Ee=0,Me=ht.length;Ee<Me;Ee++)Le=ht[Ee],W?Ce&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Re,Ge,Le):t.texImage2D(r.TEXTURE_2D,Ee,ze,Re,Ge,Le);A.generateMipmaps=!1}else if(W){if(Pe){const Ee=He(Ae);t.texStorage2D(r.TEXTURE_2D,Fe,ze,Ee.width,Ee.height)}Ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Ge,Ae)}else t.texImage2D(r.TEXTURE_2D,0,ze,Re,Ge,Ae);y(A)&&S(me),We.__version=he.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function de(z,A,j){if(A.image.length!==6)return;const me=pe(z,A),Se=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+j);const he=a.get(Se);if(Se.version!==he.__version||me===!0){t.activeTexture(r.TEXTURE0+j);const We=Ut.getPrimaries(Ut.workingColorSpace),Ue=A.colorSpace===Ca?null:Ut.getPrimaries(A.colorSpace),Ze=A.colorSpace===Ca||We===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const at=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let Me=0;Me<6;Me++)!at&&!Ae?Re[Me]=M(A.image[Me],!0,s.maxCubemapSize):Re[Me]=Ae?A.image[Me].image:A.image[Me],Re[Me]=St(A,Re[Me]);const Ge=Re[0],ze=l.convert(A.format,A.colorSpace),Le=l.convert(A.type),ht=C(A.internalFormat,ze,Le,A.colorSpace),W=A.isVideoTexture!==!0,Pe=he.__version===void 0||me===!0,Ce=Se.dataReady;let Fe=w(A,Ge);te(r.TEXTURE_CUBE_MAP,A);let Ee;if(at){W&&Pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ht,Ge.width,Ge.height);for(let Me=0;Me<6;Me++){Ee=Re[Me].mipmaps;for(let De=0;De<Ee.length;De++){const st=Ee[De];A.format!==ha?ze!==null?W?Ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,0,0,st.width,st.height,ze,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,ht,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,0,0,st.width,st.height,ze,Le,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,ht,st.width,st.height,0,ze,Le,st.data)}}}else{if(Ee=A.mipmaps,W&&Pe){Ee.length>0&&Fe++;const Me=He(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ht,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ae){W?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Re[Me].width,Re[Me].height,ze,Le,Re[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,Re[Me].width,Re[Me].height,0,ze,Le,Re[Me].data);for(let De=0;De<Ee.length;De++){const Vt=Ee[De].image[Me].image;W?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,0,0,Vt.width,Vt.height,ze,Le,Vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,ht,Vt.width,Vt.height,0,ze,Le,Vt.data)}}else{W?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ze,Le,Re[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,ze,Le,Re[Me]);for(let De=0;De<Ee.length;De++){const st=Ee[De];W?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,0,0,ze,Le,st.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,ht,ze,Le,st.image[Me])}}}y(A)&&S(r.TEXTURE_CUBE_MAP),he.__version=Se.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function we(z,A,j,me,Se,he){const We=l.convert(j.format,j.colorSpace),Ue=l.convert(j.type),Ze=C(j.internalFormat,We,Ue,j.colorSpace),at=a.get(A),Ae=a.get(j);if(Ae.__renderTarget=A,!at.__hasExternalTextures){const Re=Math.max(1,A.width>>he),Ge=Math.max(1,A.height>>he);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?t.texImage3D(Se,he,Ze,Re,Ge,A.depth,0,We,Ue,null):t.texImage2D(Se,he,Ze,Re,Ge,0,We,Ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,z),xt(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,Se,Ae.__webglTexture,0,k(A)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,Se,Ae.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(z,A,j){if(r.bindRenderbuffer(r.RENDERBUFFER,z),A.depthBuffer){const me=A.depthTexture,Se=me&&me.isDepthTexture?me.type:null,he=D(A.stencilBuffer,Se),We=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),he,A.width,A.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),he,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,he,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,z)}else{const me=A.textures;for(let Se=0;Se<me.length;Se++){const he=me[Se],We=l.convert(he.format,he.colorSpace),Ue=l.convert(he.type),Ze=C(he.internalFormat,We,Ue,he.colorSpace);xt(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),Ze,A.width,A.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),Ze,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(z,A,j){const me=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=a.get(A.depthTexture);if(Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),te(r.TEXTURE_CUBE_MAP,A.depthTexture);const at=l.convert(A.depthTexture.format),Ae=l.convert(A.depthTexture.type);let Re;A.depthTexture.format===mr?Re=r.DEPTH_COMPONENT24:A.depthTexture.format===ts&&(Re=r.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Re,A.width,A.height,0,at,Ae,null)}}else ee(A.depthTexture,0);const he=Se.__webglTexture,We=k(A),Ue=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Ze=A.depthTexture.format===ts?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===mr)xt(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ue,he,0,We):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ue,he,0);else if(A.depthTexture.format===ts)xt(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ue,he,0,We):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ue,he,0);else throw new Error("Unknown depthTexture format")}function _t(z){const A=a.get(z),j=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const me=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const Se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",Se)};me.addEventListener("dispose",Se),A.__depthDisposeCallback=Se}A.__boundDepthTexture=me}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let me=0;me<6;me++)ke(A.__webglFramebuffer[me],z,me);else{const me=z.texture.mipmaps;me&&me.length>0?ke(A.__webglFramebuffer[0],z,0):ke(A.__webglFramebuffer,z,0)}else if(j){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=r.createRenderbuffer(),Xe(A.__webglDepthbuffer[me],z,!1);else{const Se=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,he)}}else{const me=z.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Xe(A.__webglDepthbuffer,z,!1);else{const Se=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function en(z,A,j){const me=a.get(z);A!==void 0&&we(me.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&_t(z)}function mt(z){const A=z.texture,j=a.get(z),me=a.get(A);z.addEventListener("dispose",O);const Se=z.textures,he=z.isWebGLCubeRenderTarget===!0,We=Se.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=A.version,c.memory.textures++),he){j.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Ue]=[];for(let Ze=0;Ze<A.mipmaps.length;Ze++)j.__webglFramebuffer[Ue][Ze]=r.createFramebuffer()}else j.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)j.__webglFramebuffer[Ue]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ue=0,Ze=Se.length;Ue<Ze;Ue++){const at=a.get(Se[Ue]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),c.memory.textures++)}if(z.samples>0&&xt(z)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Se.length;Ue++){const Ze=Se[Ue];j.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);const at=l.convert(Ze.format,Ze.colorSpace),Ae=l.convert(Ze.type),Re=C(Ze.internalFormat,at,Ae,Ze.colorSpace,z.isXRRenderTarget===!0),Ge=k(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Re,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,j.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(j.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),te(r.TEXTURE_CUBE_MAP,A);for(let Ue=0;Ue<6;Ue++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ze=0;Ze<A.mipmaps.length;Ze++)we(j.__webglFramebuffer[Ue][Ze],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ze);else we(j.__webglFramebuffer[Ue],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(A)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ue=0,Ze=Se.length;Ue<Ze;Ue++){const at=Se[Ue],Ae=a.get(at);let Re=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Re=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ae.__webglTexture),te(Re,at),we(j.__webglFramebuffer,z,at,r.COLOR_ATTACHMENT0+Ue,Re,0),y(at)&&S(Re)}t.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ue=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ue,me.__webglTexture),te(Ue,A),A.mipmaps&&A.mipmaps.length>0)for(let Ze=0;Ze<A.mipmaps.length;Ze++)we(j.__webglFramebuffer[Ze],z,A,r.COLOR_ATTACHMENT0,Ue,Ze);else we(j.__webglFramebuffer,z,A,r.COLOR_ATTACHMENT0,Ue,0);y(A)&&S(Ue),t.unbindTexture()}z.depthBuffer&&_t(z)}function vt(z){const A=z.textures;for(let j=0,me=A.length;j<me;j++){const Se=A[j];if(y(Se)){const he=R(z),We=a.get(Se).__webglTexture;t.bindTexture(he,We),S(he),t.unbindTexture()}}}const je=[],Te=[];function wt(z){if(z.samples>0){if(xt(z)===!1){const A=z.textures,j=z.width,me=z.height;let Se=r.COLOR_BUFFER_BIT;const he=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=a.get(z),Ue=A.length>1;if(Ue)for(let at=0;at<A.length;at++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ze=z.texture.mipmaps;Ze&&Ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let at=0;at<A.length;at++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[at]);const Ae=a.get(A[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,j,me,0,0,j,me,Se,r.NEAREST),h===!0&&(je.length=0,Te.length=0,je.push(r.COLOR_ATTACHMENT0+at),z.depthBuffer&&z.resolveDepthBuffer===!1&&(je.push(he),Te.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let at=0;at<A.length;at++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,We.__webglColorRenderbuffer[at]);const Ae=a.get(A[at]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&h){const A=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function k(z){return Math.min(s.maxSamples,z.samples)}function xt(z){const A=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(z){const A=c.render.frame;m.get(z)!==A&&(m.set(z,A),z.update())}function St(z,A){const j=z.colorSpace,me=z.format,Se=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||j!==us&&j!==Ca&&(Ut.getTransfer(j)===Yt?(me!==ha||Se!==Dn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",j)),A}function He(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=en,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=we,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kU(r,e){function t(a,s=Ca){let l;const c=Ut.getTransfer(s);if(a===Dn)return r.UNSIGNED_BYTE;if(a===Xg)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Wg)return r.UNSIGNED_SHORT_5_5_5_1;if(a===WM)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===YM)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===kM)return r.BYTE;if(a===XM)return r.SHORT;if(a===zu)return r.UNSIGNED_SHORT;if(a===kg)return r.INT;if(a===ma)return r.UNSIGNED_INT;if(a===Da)return r.FLOAT;if(a===pr)return r.HALF_FLOAT;if(a===qM)return r.ALPHA;if(a===jM)return r.RGB;if(a===ha)return r.RGBA;if(a===mr)return r.DEPTH_COMPONENT;if(a===ts)return r.DEPTH_STENCIL;if(a===ZM)return r.RED;if(a===Yg)return r.RED_INTEGER;if(a===fl)return r.RG;if(a===qg)return r.RG_INTEGER;if(a===jg)return r.RGBA_INTEGER;if(a===Ff||a===Hf||a===Gf||a===Vf)if(c===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Ff)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Gf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ff)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Hf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Gf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Im||a===zm||a===Fm||a===Hm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Im)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===zm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gm||a===Vm||a===km||a===Xm||a===Wm||a===Ym||a===qm)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Gm||a===Vm)return c===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===km)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Xm)return l.COMPRESSED_R11_EAC;if(a===Wm)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Ym)return l.COMPRESSED_RG11_EAC;if(a===qm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===jm||a===Zm||a===Km||a===Qm||a===Jm||a===$m||a===eg||a===tg||a===ng||a===ig||a===ag||a===rg||a===sg||a===og)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===jm)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Zm)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Km)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qm)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jm)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===$m)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===eg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===tg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ng)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ig)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ag)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===og)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===lg||a===ug||a===cg)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===lg)return c===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ug)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===cg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===fg||a===hg||a===dg||a===pg)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===fg)return l.COMPRESSED_RED_RGTC1_EXT;if(a===hg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===dg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===pg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===cl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:t}}const XU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new lE(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new zn({vertexShader:XU,fragmentShader:WU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ga(new Ku(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qU extends vr{constructor(e,t){super();const a=this;let s=null,l=1,c=null,f="local-floor",h=1,d=null,m=null,_=null,v=null,x=null,E=null;const M=typeof XRWebGLBinding<"u",y=new YU,S={},R=t.getContextAttributes();let C=null,D=null;const w=[],P=[],O=new rt;let F=null;const T=new Qi;T.viewport=new fn;const L=new Qi;L.viewport=new fn;const G=[T,L],Y=new iC;let q=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let de=w[ae];return de===void 0&&(de=new $p,w[ae]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ae){let de=w[ae];return de===void 0&&(de=new $p,w[ae]=de),de.getGripSpace()},this.getHand=function(ae){let de=w[ae];return de===void 0&&(de=new $p,w[ae]=de),de.getHandSpace()};function ee(ae){const de=P.indexOf(ae.inputSource);if(de===-1)return;const we=w[de];we!==void 0&&(we.update(ae.inputSource,ae.frame,d||c),we.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",H);for(let ae=0;ae<w.length;ae++){const de=P[ae];de!==null&&(P[ae]=null,w[ae].disconnect(de))}q=null,le=null,y.reset();for(const ae in S)delete S[ae];e.setRenderTarget(C),x=null,v=null,_=null,s=null,D=null,Ne.stop(),a.isPresenting=!1,e.setPixelRatio(F),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,a.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,a.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",I),s.addEventListener("inputsourceschange",H),R.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(O),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Xe=null,ke=null;R.depth&&(ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=R.stencil?ts:mr,Xe=R.stencil?cl:ma);const _t={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(_t),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Bn(v.textureWidth,v.textureHeight,{format:ha,type:Dn,depthTexture:new dl(v.textureWidth,v.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new Bn(x.framebufferWidth,x.framebufferHeight,{format:ha,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(f),Ne.setContext(s),Ne.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ae){for(let de=0;de<ae.removed.length;de++){const we=ae.removed[de],Xe=P.indexOf(we);Xe>=0&&(P[Xe]=null,w[Xe].disconnect(we))}for(let de=0;de<ae.added.length;de++){const we=ae.added[de];let Xe=P.indexOf(we);if(Xe===-1){for(let _t=0;_t<w.length;_t++)if(_t>=P.length){P.push(we),Xe=_t;break}else if(P[_t]===null){P[_t]=we,Xe=_t;break}if(Xe===-1)break}const ke=w[Xe];ke&&ke.connect(we)}}const J=new ue,_e=new ue;function xe(ae,de,we){J.setFromMatrixPosition(de.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const Xe=J.distanceTo(_e),ke=de.projectionMatrix.elements,_t=we.projectionMatrix.elements,en=ke[14]/(ke[10]-1),mt=ke[14]/(ke[10]+1),vt=(ke[9]+1)/ke[5],je=(ke[9]-1)/ke[5],Te=(ke[8]-1)/ke[0],wt=(_t[8]+1)/_t[0],k=en*Te,xt=en*wt,ct=Xe/(-Te+wt),St=ct*-Te;if(de.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(St),ae.translateZ(ct),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ke[10]===-1)ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const He=en+ct,z=mt+ct,A=k-St,j=xt+(Xe-St),me=vt*mt/z*He,Se=je*mt/z*He;ae.projectionMatrix.makePerspective(A,j,me,Se,He,z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function B(ae,de){de===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(de.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let de=ae.near,we=ae.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(we=y.depthFar)),Y.near=L.near=T.near=de,Y.far=L.far=T.far=we,(q!==Y.near||le!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),q=Y.near,le=Y.far),Y.layers.mask=ae.layers.mask|6,T.layers.mask=Y.layers.mask&3,L.layers.mask=Y.layers.mask&5;const Xe=ae.parent,ke=Y.cameras;B(Y,Xe);for(let _t=0;_t<ke.length;_t++)B(ke[_t],Xe);ke.length===2?xe(Y,T,L):Y.projectionMatrix.copy(T.projectionMatrix),te(ae,Y,Xe)};function te(ae,de,we){we===null?ae.matrix.copy(de.matrixWorld):(ae.matrix.copy(we.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(de.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Hu*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(ae){h=ae,v!==null&&(v.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ae){return S[ae]};let pe=null;function be(ae,de){if(m=de.getViewerPose(d||c),E=de,m!==null){const we=m.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Xe=!1;we.length!==Y.cameras.length&&(Y.cameras.length=0,Xe=!0);for(let mt=0;mt<we.length;mt++){const vt=we[mt];let je=null;if(x!==null)je=x.getViewport(vt);else{const wt=_.getViewSubImage(v,vt);je=wt.viewport,mt===0&&(e.setRenderTargetTextures(D,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(D))}let Te=G[mt];Te===void 0&&(Te=new Qi,Te.layers.enable(mt),Te.viewport=new fn,G[mt]=Te),Te.matrix.fromArray(vt.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(vt.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(je.x,je.y,je.width,je.height),mt===0&&(Y.matrix.copy(Te.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Xe===!0&&Y.cameras.push(Te)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=a.getBinding();const mt=_.getDepthInformation(we[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,s.renderState)}if(ke&&ke.includes("camera-access")&&M){e.state.unbindTexture(),_=a.getBinding();for(let mt=0;mt<we.length;mt++){const vt=we[mt].camera;if(vt){let je=S[vt];je||(je=new lE,S[vt]=je);const Te=_.getCameraImage(vt);je.sourceTexture=Te}}}}for(let we=0;we<w.length;we++){const Xe=P[we],ke=w[we];Xe!==null&&ke!==void 0&&ke.update(Xe,de,d||c)}pe&&pe(ae,de),de.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ne=new uE;Ne.setAnimationLoop(be),this.setAnimationLoop=function(ae){pe=ae},this.dispose=function(){}}}const Bs=new gr,jU=new Rn;function ZU(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,iE(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,R,C,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(y,S):S.isMeshToonMaterial?(l(y,S),_(y,S)):S.isMeshPhongMaterial?(l(y,S),m(y,S)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,D)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?h(y,S,R,C):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Pn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Pn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),C=R.envMap,D=R.envMapRotation;C&&(y.envMap.value=C,Bs.copy(D),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),y.envMapRotation.value.setFromMatrix4(jU.makeRotationFromEuler(Bs)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,R,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=C*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Pn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function KU(r,e,t,a){let s={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,C){const D=C.program;a.uniformBlockBinding(R,D)}function d(R,C){let D=s[R.id];D===void 0&&(E(R),D=m(R),s[R.id]=D,R.addEventListener("dispose",y));const w=C.program;a.updateUBOMapping(R,w);const P=e.render.frame;l[R.id]!==P&&(v(R),l[R.id]=P)}function m(R){const C=_();R.__bindingPointIndex=C;const D=r.createBuffer(),w=R.__size,P=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,w,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,D),D}function _(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const C=s[R.id],D=R.uniforms,w=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let P=0,O=D.length;P<O;P++){const F=Array.isArray(D[P])?D[P]:[D[P]];for(let T=0,L=F.length;T<L;T++){const G=F[T];if(x(G,P,T,w)===!0){const Y=G.__offset,q=Array.isArray(G.value)?G.value:[G.value];let le=0;for(let ee=0;ee<q.length;ee++){const I=q[ee],H=M(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Y+le,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,le),le+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(R,C,D,w){const P=R.value,O=C+"_"+D;if(w[O]===void 0)return typeof P=="number"||typeof P=="boolean"?w[O]=P:w[O]=P.clone(),!0;{const F=w[O];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return w[O]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function E(R){const C=R.uniforms;let D=0;const w=16;for(let O=0,F=C.length;O<F;O++){const T=Array.isArray(C[O])?C[O]:[C[O]];for(let L=0,G=T.length;L<G;L++){const Y=T[L],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let le=0,ee=q.length;le<ee;le++){const I=q[le],H=M(I),J=D%w,_e=J%H.boundary,xe=J+_e;D+=_e,xe!==0&&w-xe<H.storage&&(D+=w-xe),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=H.storage}}}const P=D%w;return P>0&&(D+=w-P),R.__size=D,R.__cache={},this}function M(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",R),C}function y(R){const C=R.target;C.removeEventListener("dispose",y);const D=c.indexOf(C.__bindingPointIndex);c.splice(D,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete l[C.id]}function S(){for(const R in s)r.deleteBuffer(s[R]);c=[],s={},l={}}return{bind:h,update:d,dispose:S}}const QU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ba=null;function JU(){return ba===null&&(ba=new Z2(QU,16,16,fl,pr),ba.name="DFG_LUT",ba.minFilter=An,ba.magFilter=An,ba.wrapS=sr,ba.wrapT=sr,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class $U{constructor(e={}){const{canvas:t=o2(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Dn}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const M=x,y=new Set([jg,qg,Yg]),S=new Set([Dn,ma,zu,cl,Xg,Wg]),R=new Uint32Array(4),C=new Int32Array(4);let D=null,w=null;const P=[],O=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=qt;let G=0,Y=0,q=null,le=-1,ee=null;const I=new fn,H=new fn;let J=null;const _e=new Gt(0);let xe=0,B=t.width,te=t.height,pe=1,be=null,Ne=null;const ae=new fn(0,0,B,te),de=new fn(0,0,B,te);let we=!1;const Xe=new oE;let ke=!1,_t=!1;const en=new Rn,mt=new ue,vt=new fn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function wt(){return q===null?pe:1}let k=a;function xt(N,Z){return t.getContext(N,Z)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wu}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",Vt,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),k===null){const Z="webgl2";if(k=xt(Z,N),k===null)throw xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Pt("WebGLRenderer: "+N.message),N}let ct,St,He,z,A,j,me,Se,he,We,Ue,Ze,at,Ae,Re,Ge,ze,Le,ht,W,Pe,Ce,Fe,Ee;function Me(){ct=new J3(k),ct.init(),Ce=new kU(k,ct),St=new k3(k,ct,e,Ce),He=new GU(k,ct),St.reversedDepthBuffer&&v&&He.buffers.depth.setReversed(!0),z=new tD(k),A=new AU,j=new VU(k,ct,He,A,St,Ce,z),me=new W3(T),Se=new Q3(T),he=new rC(k),Fe=new G3(k,he),We=new $3(k,he,z,Fe),Ue=new iD(k,We,he,z),ht=new nD(k,St,j),Ge=new X3(A),Ze=new TU(T,me,Se,ct,St,Fe,Ge),at=new ZU(T,A),Ae=new CU,Re=new OU(ct),Le=new H3(T,me,Se,He,Ue,E,h),ze=new FU(T,Ue,St),Ee=new KU(k,z,St,He),W=new V3(k,ct,z),Pe=new eD(k,ct,z),z.programs=Ze.programs,T.capabilities=St,T.extensions=ct,T.properties=A,T.renderLists=Ae,T.shadowMap=ze,T.state=He,T.info=z}Me(),M!==Dn&&(F=new rD(M,t.width,t.height,s,l));const De=new qU(T,k);this.xr=De,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=ct.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ct.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(N){N!==void 0&&(pe=N,this.setSize(B,te,!1))},this.getSize=function(N){return N.set(B,te)},this.setSize=function(N,Z,ce=!0){if(De.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=N,te=Z,t.width=Math.floor(N*pe),t.height=Math.floor(Z*pe),ce===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(B*pe,te*pe).floor()},this.setDrawingBufferSize=function(N,Z,ce){B=N,te=Z,pe=ce,t.width=Math.floor(N*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,N,Z)},this.setEffects=function(N){if(M===Dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Z=0;Z<N.length;Z++)if(N[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(I)},this.getViewport=function(N){return N.copy(ae)},this.setViewport=function(N,Z,ce,re){N.isVector4?ae.set(N.x,N.y,N.z,N.w):ae.set(N,Z,ce,re),He.viewport(I.copy(ae).multiplyScalar(pe).round())},this.getScissor=function(N){return N.copy(de)},this.setScissor=function(N,Z,ce,re){N.isVector4?de.set(N.x,N.y,N.z,N.w):de.set(N,Z,ce,re),He.scissor(H.copy(de).multiplyScalar(pe).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(N){He.setScissorTest(we=N)},this.setOpaqueSort=function(N){be=N},this.setTransparentSort=function(N){Ne=N},this.getClearColor=function(N){return N.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(N=!0,Z=!0,ce=!0){let re=0;if(N){let $=!1;if(q!==null){const Oe=q.texture.format;$=y.has(Oe)}if($){const Oe=q.texture.type,Ve=S.has(Oe),Be=Le.getClearColor(),Ye=Le.getClearAlpha(),Ke=Be.r,tt=Be.g,Qe=Be.b;Ve?(R[0]=Ke,R[1]=tt,R[2]=Qe,R[3]=Ye,k.clearBufferuiv(k.COLOR,0,R)):(C[0]=Ke,C[1]=tt,C[2]=Qe,C[3]=Ye,k.clearBufferiv(k.COLOR,0,C))}else re|=k.COLOR_BUFFER_BIT}Z&&(re|=k.DEPTH_BUFFER_BIT),ce&&(re|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",Vt,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),Le.dispose(),Ae.dispose(),Re.dispose(),A.dispose(),me.dispose(),Se.dispose(),Ue.dispose(),Fe.dispose(),Ee.dispose(),Ze.dispose(),De.dispose(),De.removeEventListener("sessionstart",Qs),De.removeEventListener("sessionend",yl),va.stop()};function st(N){N.preventDefault(),yS("WebGLRenderer: Context Lost."),L=!0}function Vt(){yS("WebGLRenderer: Context Restored."),L=!1;const N=z.autoReset,Z=ze.enabled,ce=ze.autoUpdate,re=ze.needsUpdate,$=ze.type;Me(),z.autoReset=N,ze.enabled=Z,ze.autoUpdate=ce,ze.needsUpdate=re,ze.type=$}function Dt(N){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Jn(N){const Z=N.target;Z.removeEventListener("dispose",Jn),na(Z)}function na(N){Qu(N),A.remove(N)}function Qu(N){const Z=A.get(N).programs;Z!==void 0&&(Z.forEach(function(ce){Ze.releaseProgram(ce)}),N.isShaderMaterial&&Ze.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,ce,re,$,Oe){Z===null&&(Z=je);const Ve=$.isMesh&&$.matrixWorld.determinant()<0,Be=fs(N,Z,ce,re,$);He.setMaterial(re,Ve);let Ye=ce.index,Ke=1;if(re.wireframe===!0){if(Ye=We.getWireframeAttribute(ce),Ye===void 0)return;Ke=2}const tt=ce.drawRange,Qe=ce.attributes.position;let nt=tt.start*Ke,It=(tt.start+tt.count)*Ke;Oe!==null&&(nt=Math.max(nt,Oe.start*Ke),It=Math.min(It,(Oe.start+Oe.count)*Ke)),Ye!==null?(nt=Math.max(nt,0),It=Math.min(It,Ye.count)):Qe!=null&&(nt=Math.max(nt,0),It=Math.min(It,Qe.count));const rn=It-nt;if(rn<0||rn===1/0)return;Fe.setup($,re,Be,ce,Ye);let tn,Ht=W;if(Ye!==null&&(tn=he.get(Ye),Ht=Pe,Ht.setIndex(tn)),$.isMesh)re.wireframe===!0?(He.setLineWidth(re.wireframeLinewidth*wt()),Ht.setMode(k.LINES)):Ht.setMode(k.TRIANGLES);else if($.isLine){let $e=re.linewidth;$e===void 0&&($e=1),He.setLineWidth($e*wt()),$.isLineSegments?Ht.setMode(k.LINES):$.isLineLoop?Ht.setMode(k.LINE_LOOP):Ht.setMode(k.LINE_STRIP)}else $.isPoints?Ht.setMode(k.POINTS):$.isSprite&&Ht.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Fu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ht.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $e=$._multiDrawStarts,zt=$._multiDrawCounts,ot=$._multiDrawCount,Hn=Ye?he.get(Ye).bytesPerElement:1,Pa=A.get(re).currentProgram.getUniforms();for(let Gn=0;Gn<ot;Gn++)Pa.setValue(k,"_gl_DrawID",Gn),Ht.render($e[Gn]/Hn,zt[Gn])}else if($.isInstancedMesh)Ht.renderInstances(nt,rn,$.count);else if(ce.isInstancedBufferGeometry){const $e=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,zt=Math.min(ce.instanceCount,$e);Ht.renderInstances(nt,rn,zt)}else Ht.render(nt,rn)};function xl(N,Z,ce){N.transparent===!0&&N.side===Ni&&N.forceSinglePass===!1?(N.side=Pn,N.needsUpdate=!0,$s(N,Z,ce),N.side=dr,N.needsUpdate=!0,$s(N,Z,ce),N.side=Ni):$s(N,Z,ce)}this.compile=function(N,Z,ce=null){ce===null&&(ce=N),w=Re.get(ce),w.init(Z),O.push(w),ce.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),N!==ce&&N.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights();const re=new Set;return N.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Oe=$.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const Be=Oe[Ve];xl(Be,ce,$),re.add(Be)}else xl(Oe,ce,$),re.add(Oe)}),w=O.pop(),re},this.compileAsync=function(N,Z,ce=null){const re=this.compile(N,Z,ce);return new Promise($=>{function Oe(){if(re.forEach(function(Ve){A.get(Ve).currentProgram.isReady()&&re.delete(Ve)}),re.size===0){$(N);return}setTimeout(Oe,10)}ct.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ks=null;function Sl(N){Ks&&Ks(N)}function Qs(){va.stop()}function yl(){va.start()}const va=new uE;va.setAnimationLoop(Sl),typeof self<"u"&&va.setContext(self),this.setAnimationLoop=function(N){Ks=N,De.setAnimationLoop(N),N===null?va.stop():va.start()},De.addEventListener("sessionstart",Qs),De.addEventListener("sessionend",yl),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ce=De.enabled===!0&&De.isPresenting===!0,re=F!==null&&(q===null||ce)&&F.begin(T,q);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Z),Z=De.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,Z,q),w=Re.get(N,O.length),w.init(Z),O.push(w),en.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Xe.setFromProjectionMatrix(en,Ua,Z.reversedDepth),_t=this.localClippingEnabled,ke=Ge.init(this.clippingPlanes,_t),D=Ae.get(N,P.length),D.init(),P.push(D),De.enabled===!0&&De.isPresenting===!0){const Ve=T.xr.getDepthSensingMesh();Ve!==null&&Fi(Ve,Z,-1/0,T.sortObjects)}Fi(N,Z,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(be,Ne),Te=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Te&&Le.addToRenderList(D,N),this.info.render.frame++,ke===!0&&Ge.beginShadows();const $=w.state.shadowsArray;if(ze.render($,N,Z),ke===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&F.hasRenderPass())===!1){const Ve=D.opaque,Be=D.transmissive;if(w.setupLights(),Z.isArrayCamera){const Ye=Z.cameras;if(Be.length>0)for(let Ke=0,tt=Ye.length;Ke<tt;Ke++){const Qe=Ye[Ke];Fn(Ve,Be,N,Qe)}Te&&Le.render(N);for(let Ke=0,tt=Ye.length;Ke<tt;Ke++){const Qe=Ye[Ke];xn(D,N,Qe,Qe.viewport)}}else Be.length>0&&Fn(Ve,Be,N,Z),Te&&Le.render(N),xn(D,N,Z)}q!==null&&Y===0&&(j.updateMultisampleRenderTarget(q),j.updateRenderTargetMipmap(q)),re&&F.end(T),N.isScene===!0&&N.onAfterRender(T,N,Z),Fe.resetDefaultState(),le=-1,ee=null,O.pop(),O.length>0?(w=O[O.length-1],ke===!0&&Ge.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function Fi(N,Z,ce,re){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)w.pushLight(N),N.castShadow&&w.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Xe.intersectsSprite(N)){re&&vt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(en);const Ve=Ue.update(N),Be=N.material;Be.visible&&D.push(N,Ve,Be,ce,vt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Xe.intersectsObject(N))){const Ve=Ue.update(N),Be=N.material;if(re&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),vt.copy(N.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),vt.copy(Ve.boundingSphere.center)),vt.applyMatrix4(N.matrixWorld).applyMatrix4(en)),Array.isArray(Be)){const Ye=Ve.groups;for(let Ke=0,tt=Ye.length;Ke<tt;Ke++){const Qe=Ye[Ke],nt=Be[Qe.materialIndex];nt&&nt.visible&&D.push(N,Ve,nt,ce,vt.z,Qe)}}else Be.visible&&D.push(N,Ve,Be,ce,vt.z,null)}}const Oe=N.children;for(let Ve=0,Be=Oe.length;Ve<Be;Ve++)Fi(Oe[Ve],Z,ce,re)}function xn(N,Z,ce,re){const{opaque:$,transmissive:Oe,transparent:Ve}=N;w.setupLightsView(ce),ke===!0&&Ge.setGlobalState(T.clippingPlanes,ce),re&&He.viewport(I.copy(re)),$.length>0&&ia($,Z,ce),Oe.length>0&&ia(Oe,Z,ce),Ve.length>0&&ia(Ve,Z,ce),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Fn(N,Z,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[re.id]===void 0){const nt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[re.id]=new Bn(1,1,{generateMipmaps:!0,type:nt?pr:Dn,minFilter:Vs,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Oe=w.state.transmissionRenderTarget[re.id],Ve=re.viewport||I;Oe.setSize(Ve.z*T.transmissionResolutionScale,Ve.w*T.transmissionResolutionScale);const Be=T.getRenderTarget(),Ye=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(_e),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),Te&&Le.render(ce);const tt=T.toneMapping;T.toneMapping=da;const Qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),w.setupLightsView(re),ke===!0&&Ge.setGlobalState(T.clippingPlanes,re),ia(N,ce,re),j.updateMultisampleRenderTarget(Oe),j.updateRenderTargetMipmap(Oe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let It=0,rn=Z.length;It<rn;It++){const tn=Z[It],{object:Ht,geometry:$e,material:zt,group:ot}=tn;if(zt.side===Ni&&Ht.layers.test(re.layers)){const Hn=zt.side;zt.side=Pn,zt.needsUpdate=!0,Js(Ht,ce,re,$e,zt,ot),zt.side=Hn,zt.needsUpdate=!0,nt=!0}}nt===!0&&(j.updateMultisampleRenderTarget(Oe),j.updateRenderTargetMipmap(Oe))}T.setRenderTarget(Be,Ye,Ke),T.setClearColor(_e,xe),Qe!==void 0&&(re.viewport=Qe),T.toneMapping=tt}function ia(N,Z,ce){const re=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Oe=N.length;$<Oe;$++){const Ve=N[$],{object:Be,geometry:Ye,group:Ke}=Ve;let tt=Ve.material;tt.allowOverride===!0&&re!==null&&(tt=re),Be.layers.test(ce.layers)&&Js(Be,Z,ce,Ye,tt,Ke)}}function Js(N,Z,ce,re,$,Oe){N.onBeforeRender(T,Z,ce,re,$,Oe),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(T,Z,ce,re,N,Oe),$.transparent===!0&&$.side===Ni&&$.forceSinglePass===!1?($.side=Pn,$.needsUpdate=!0,T.renderBufferDirect(ce,Z,re,$,N,Oe),$.side=dr,$.needsUpdate=!0,T.renderBufferDirect(ce,Z,re,$,N,Oe),$.side=Ni):T.renderBufferDirect(ce,Z,re,$,N,Oe),N.onAfterRender(T,Z,ce,re,$,Oe)}function $s(N,Z,ce){Z.isScene!==!0&&(Z=je);const re=A.get(N),$=w.state.lights,Oe=w.state.shadowsArray,Ve=$.state.version,Be=Ze.getParameters(N,$.state,Oe,Z,ce),Ye=Ze.getProgramCacheKey(Be);let Ke=re.programs;re.environment=N.isMeshStandardMaterial?Z.environment:null,re.fog=Z.fog,re.envMap=(N.isMeshStandardMaterial?Se:me).get(N.envMap||re.environment),re.envMapRotation=re.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,Ke===void 0&&(N.addEventListener("dispose",Jn),Ke=new Map,re.programs=Ke);let tt=Ke.get(Ye);if(tt!==void 0){if(re.currentProgram===tt&&re.lightsStateVersion===Ve)return Ml(N,Be),tt}else Be.uniforms=Ze.getUniforms(N),N.onBeforeCompile(Be,T),tt=Ze.acquireProgram(Be,Ye),Ke.set(Ye,tt),re.uniforms=Be.uniforms;const Qe=re.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),Ml(N,Be),re.needsLights=xr(N),re.lightsStateVersion=Ve,re.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=tt,re.uniformsList=null,tt}function Ju(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=kf.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function Ml(N,Z){const ce=A.get(N);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function fs(N,Z,ce,re,$){Z.isScene!==!0&&(Z=je),j.resetTextureUnits();const Oe=Z.fog,Ve=re.isMeshStandardMaterial?Z.environment:null,Be=q===null?T.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:us,Ye=(re.isMeshStandardMaterial?Se:me).get(re.envMap||Ve),Ke=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,tt=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Qe=!!ce.morphAttributes.position,nt=!!ce.morphAttributes.normal,It=!!ce.morphAttributes.color;let rn=da;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(rn=T.toneMapping);const tn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ht=tn!==void 0?tn.length:0,$e=A.get(re),zt=w.state.lights;if(ke===!0&&(_t===!0||N!==ee)){const kn=N===ee&&re.id===le;Ge.setState(re,N,kn)}let ot=!1;re.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==zt.state.version||$e.outputColorSpace!==Be||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==Ye||re.fog===!0&&$e.fog!==Oe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ge.numPlanes||$e.numIntersection!==Ge.numIntersection)||$e.vertexAlphas!==Ke||$e.vertexTangents!==tt||$e.morphTargets!==Qe||$e.morphNormals!==nt||$e.morphColors!==It||$e.toneMapping!==rn||$e.morphTargetsCount!==Ht)&&(ot=!0):(ot=!0,$e.__version=re.version);let Hn=$e.currentProgram;ot===!0&&(Hn=$s(re,Z,$));let Pa=!1,Gn=!1,Hi=!1;const kt=Hn.getUniforms(),Vn=$e.uniforms;if(He.useProgram(Hn.program)&&(Pa=!0,Gn=!0,Hi=!0),re.id!==le&&(le=re.id,Gn=!0),Pa||ee!==N){He.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),kt.setValue(k,"projectionMatrix",N.projectionMatrix),kt.setValue(k,"viewMatrix",N.matrixWorldInverse);const Xn=kt.map.cameraPosition;Xn!==void 0&&Xn.setValue(k,mt.setFromMatrixPosition(N.matrixWorld)),St.logarithmicDepthBuffer&&kt.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&kt.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),ee!==N&&(ee=N,Gn=!0,Hi=!0)}if($e.needsLights&&(zt.state.directionalShadowMap.length>0&&kt.setValue(k,"directionalShadowMap",zt.state.directionalShadowMap,j),zt.state.spotShadowMap.length>0&&kt.setValue(k,"spotShadowMap",zt.state.spotShadowMap,j),zt.state.pointShadowMap.length>0&&kt.setValue(k,"pointShadowMap",zt.state.pointShadowMap,j)),$.isSkinnedMesh){kt.setOptional(k,$,"bindMatrix"),kt.setOptional(k,$,"bindMatrixInverse");const kn=$.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),kt.setValue(k,"boneTexture",kn.boneTexture,j))}$.isBatchedMesh&&(kt.setOptional(k,$,"batchingTexture"),kt.setValue(k,"batchingTexture",$._matricesTexture,j),kt.setOptional(k,$,"batchingIdTexture"),kt.setValue(k,"batchingIdTexture",$._indirectTexture,j),kt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&kt.setValue(k,"batchingColorTexture",$._colorsTexture,j));const Cn=ce.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ht.update($,ce,Hn),(Gn||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,kt.setValue(k,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Vn.envMap.value=Ye,Vn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Z.environment!==null&&(Vn.envMapIntensity.value=Z.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=JU()),Gn&&(kt.setValue(k,"toneMappingExposure",T.toneMappingExposure),$e.needsLights&&El(Vn,Hi),Oe&&re.fog===!0&&at.refreshFogUniforms(Vn,Oe),at.refreshMaterialUniforms(Vn,re,pe,te,w.state.transmissionRenderTarget[N.id]),kf.upload(k,Ju($e),Vn,j)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(kf.upload(k,Ju($e),Vn,j),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&kt.setValue(k,"center",$.center),kt.setValue(k,"modelViewMatrix",$.modelViewMatrix),kt.setValue(k,"normalMatrix",$.normalMatrix),kt.setValue(k,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const kn=re.uniformsGroups;for(let Xn=0,eo=kn.length;Xn<eo;Xn++){const aa=kn[Xn];Ee.update(aa,Hn),Ee.bind(aa,Hn)}}return Hn}function El(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function xr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(N,Z,ce){const re=A.get(N);re.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),A.get(N.texture).__webglTexture=Z,A.get(N.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Z){const ce=A.get(N);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const Sr=k.createFramebuffer();this.setRenderTarget=function(N,Z=0,ce=0){q=N,G=Z,Y=ce;let re=null,$=!1,Oe=!1;if(N){const Be=A.get(N);if(Be.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(k.FRAMEBUFFER,Be.__webglFramebuffer),I.copy(N.viewport),H.copy(N.scissor),J=N.scissorTest,He.viewport(I),He.scissor(H),He.setScissorTest(J),le=-1;return}else if(Be.__webglFramebuffer===void 0)j.setupRenderTarget(N);else if(Be.__hasExternalTextures)j.rebindTextures(N,A.get(N.texture).__webglTexture,A.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const tt=N.depthTexture;if(Be.__boundDepthTexture!==tt){if(tt!==null&&A.has(tt)&&(N.width!==tt.image.width||N.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(N)}}const Ye=N.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Oe=!0);const Ke=A.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?re=Ke[Z][ce]:re=Ke[Z],$=!0):N.samples>0&&j.useMultisampledRTT(N)===!1?re=A.get(N).__webglMultisampledFramebuffer:Array.isArray(Ke)?re=Ke[ce]:re=Ke,I.copy(N.viewport),H.copy(N.scissor),J=N.scissorTest}else I.copy(ae).multiplyScalar(pe).floor(),H.copy(de).multiplyScalar(pe).floor(),J=we;if(ce!==0&&(re=Sr),He.bindFramebuffer(k.FRAMEBUFFER,re)&&He.drawBuffers(N,re),He.viewport(I),He.scissor(H),He.setScissorTest(J),$){const Be=A.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,ce)}else if(Oe){const Be=Z;for(let Ye=0;Ye<N.textures.length;Ye++){const Ke=A.get(N.textures[Ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,ce,Be)}}else if(N!==null&&ce!==0){const Be=A.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,ce)}le=-1},this.readRenderTargetPixels=function(N,Z,ce,re,$,Oe,Ve,Be=0){if(!(N&&N.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){He.bindFramebuffer(k.FRAMEBUFFER,Ye);try{const Ke=N.textures[Be],tt=Ke.format,Qe=Ke.type;if(!St.textureFormatReadable(tt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Qe)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-re&&ce>=0&&ce<=N.height-$&&(N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels(Z,ce,re,$,Ce.convert(tt),Ce.convert(Qe),Oe))}finally{const Ke=q!==null?A.get(q).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(N,Z,ce,re,$,Oe,Ve,Be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(Z>=0&&Z<=N.width-re&&ce>=0&&ce<=N.height-$){He.bindFramebuffer(k.FRAMEBUFFER,Ye);const Ke=N.textures[Be],tt=Ke.format,Qe=Ke.type;if(!St.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.bufferData(k.PIXEL_PACK_BUFFER,Oe.byteLength,k.STREAM_READ),N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels(Z,ce,re,$,Ce.convert(tt),Ce.convert(Qe),0);const It=q!==null?A.get(q).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,It);const rn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await l2(k,rn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Oe),k.deleteBuffer(nt),k.deleteSync(rn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Z=null,ce=0){const re=Math.pow(2,-ce),$=Math.floor(N.image.width*re),Oe=Math.floor(N.image.height*re),Ve=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;j.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,Ve,Be,$,Oe),He.unbindTexture()};const hs=k.createFramebuffer(),yr=k.createFramebuffer();this.copyTextureToTexture=function(N,Z,ce=null,re=null,$=0,Oe=null){Oe===null&&($!==0?(Fu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=$,$=0):Oe=0);let Ve,Be,Ye,Ke,tt,Qe,nt,It,rn;const tn=N.isCompressedTexture?N.mipmaps[Oe]:N.image;if(ce!==null)Ve=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Ye=ce.isBox3?ce.max.z-ce.min.z:1,Ke=ce.min.x,tt=ce.min.y,Qe=ce.isBox3?ce.min.z:0;else{const Cn=Math.pow(2,-$);Ve=Math.floor(tn.width*Cn),Be=Math.floor(tn.height*Cn),N.isDataArrayTexture?Ye=tn.depth:N.isData3DTexture?Ye=Math.floor(tn.depth*Cn):Ye=1,Ke=0,tt=0,Qe=0}re!==null?(nt=re.x,It=re.y,rn=re.z):(nt=0,It=0,rn=0);const Ht=Ce.convert(Z.format),$e=Ce.convert(Z.type);let zt;Z.isData3DTexture?(j.setTexture3D(Z,0),zt=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),zt=k.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),Hn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pa=k.getParameter(k.UNPACK_SKIP_PIXELS),Gn=k.getParameter(k.UNPACK_SKIP_ROWS),Hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,tn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const kt=N.isDataArrayTexture||N.isData3DTexture,Vn=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isDepthTexture){const Cn=A.get(N),kn=A.get(Z),Xn=A.get(Cn.__renderTarget),eo=A.get(kn.__renderTarget);He.bindFramebuffer(k.READ_FRAMEBUFFER,Xn.__webglFramebuffer),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let aa=0;aa<Ye;aa++)kt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(N).__webglTexture,$,Qe+aa),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(Z).__webglTexture,Oe,rn+aa)),k.blitFramebuffer(Ke,tt,Ve,Be,nt,It,Ve,Be,k.DEPTH_BUFFER_BIT,k.NEAREST);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||N.isRenderTargetTexture||A.has(N)){const Cn=A.get(N),kn=A.get(Z);He.bindFramebuffer(k.READ_FRAMEBUFFER,hs),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,yr);for(let Xn=0;Xn<Ye;Xn++)kt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Cn.__webglTexture,$,Qe+Xn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Cn.__webglTexture,$),Vn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,kn.__webglTexture,Oe,rn+Xn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,kn.__webglTexture,Oe),$!==0?k.blitFramebuffer(Ke,tt,Ve,Be,nt,It,Ve,Be,k.COLOR_BUFFER_BIT,k.NEAREST):Vn?k.copyTexSubImage3D(zt,Oe,nt,It,rn+Xn,Ke,tt,Ve,Be):k.copyTexSubImage2D(zt,Oe,nt,It,Ke,tt,Ve,Be);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Vn?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(zt,Oe,nt,It,rn,Ve,Be,Ye,Ht,$e,tn.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(zt,Oe,nt,It,rn,Ve,Be,Ye,Ht,tn.data):k.texSubImage3D(zt,Oe,nt,It,rn,Ve,Be,Ye,Ht,$e,tn):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Oe,nt,It,Ve,Be,Ht,$e,tn.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Oe,nt,It,tn.width,tn.height,Ht,tn.data):k.texSubImage2D(k.TEXTURE_2D,Oe,nt,It,Ve,Be,Ht,$e,tn);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Hn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pa),k.pixelStorei(k.UNPACK_SKIP_ROWS,Gn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hi),Oe===0&&Z.generateMipmaps&&k.generateMipmap(zt),He.unbindTexture()},this.initRenderTarget=function(N){A.get(N).__webglFramebuffer===void 0&&j.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?j.setTextureCube(N,0):N.isData3DTexture?j.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?j.setTexture2DArray(N,0):j.setTexture2D(N,0),He.unbindTexture()},this.resetState=function(){G=0,Y=0,q=null,He.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}var om=1/1e3,eN=1e3,tN=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*om}get fixedDelta(){return this._fixedDelta*om}set fixedDelta(r){this._fixedDelta=r*eN}get elapsed(){return this._elapsed*om}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},nN=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Oa;return t.setAttribute("position",new ea(r,3)),t.setAttribute("uv",new ea(e,2)),t})(),_a=class vg{static get fullscreenGeometry(){return nN}constructor(e="Pass",t=new mg,a=new lh){this.name=e,this.renderer=null,this.scene=t,this.camera=a,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new ga(vg.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new mg),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Yu){}render(e,t,a,s,l){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,a){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Bn||t instanceof _l||t instanceof Qn||t instanceof vg)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},iN=class extends _a{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,a,s){const l=r.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},aN=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,pE="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",mE=class extends zn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Nt(null),depthBuffer:new Nt(null),channelWeights:new Nt(null),opacity:new Nt(1)},blending:li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:aN,vertexShader:pE}),this.depthFunc=Jf}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(r){const e=r!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){const e=r!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=r}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(r){this.colorSpaceConversion!==r&&(r?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(r){r!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=r):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},rN=class extends _a{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new mE,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new Bn(1,1,{minFilter:An,magFilter:An,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,a,s){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Dn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===qt&&(this.renderTarget.texture.colorSpace=qt))}},uy=new Gt,gE=class extends _a{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,a,s){const l=this.overrideClearColor,c=this.overrideClearAlpha,f=r.getClearAlpha(),h=l!==null,d=c>=0;h?(r.getClearColor(uy),r.setClearColor(l,d?c:f)):d&&r.setClearAlpha(c),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),h?r.setClearColor(uy,f):d&&r.setClearAlpha(f)}},sN=class extends _a{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new gE(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,a,s){const l=r.getContext(),c=r.state.buffers,f=this.scene,h=this.camera,d=this.clearPass,m=this.inverted?0:1,_=1-m;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.stencil.setFunc(l.ALWAYS,m,4294967295),c.stencil.setClear(_),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?d.render(r,null):(d.render(r,e),d.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(f,h)):(r.setRenderTarget(e),r.render(f,h),r.setRenderTarget(t),r.render(f,h)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(l.EQUAL,1,4294967295),c.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.stencil.setLocked(!0)}},oN=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:a=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,a),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new rN,this.depthTexture=null,this.passes=[],this.timer=new tN,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new rt),t=r.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;a===Dn&&r.outputColorSpace===qt&&(this.inputBuffer.texture.colorSpace=qt,this.outputBuffer.texture.colorSpace=qt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(r,t,a)}}replaceRenderer(r,e=!0){const t=this.renderer,a=t.domElement.parentNode;return this.setRenderer(r),e&&a!==null&&(a.removeChild(t.domElement),a.appendChild(r.domElement)),t}createDepthTexture(){const r=this.depthTexture=new dl;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=ts,r.type=cl):r.type=ma,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,a){const s=this.renderer,l=s===null?new rt:s.getDrawingBufferSize(new rt),c={minFilter:An,magFilter:An,stencilBuffer:e,depthBuffer:r,type:t},f=new Bn(l.width,l.height,c);return a>0&&(f.samples=a),t===Dn&&s!==null&&s.outputColorSpace===qt&&(f.texture.colorSpace=qt),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,a=this.renderer,s=a.getDrawingBufferSize(new rt),l=a.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(r.setRenderer(a),r.setSize(s.width,s.height),r.initialize(a,l,c),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(r of t)r.setDepthTexture(f)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const l=(f,h)=>f||h.needsDepthTexture;e.reduce(l,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let a=this.inputBuffer,s=this.outputBuffer,l=!1,c,f,h;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const d of this.passes)d.enabled&&(d.render(e,a,s,r,l),d.needsSwap&&(l&&(t.renderToScreen=d.renderToScreen,c=e.getContext(),f=e.state.buffers.stencil,f.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,a,s,r,l),f.setFunc(c.EQUAL,1,4294967295)),h=a,a=s,s=h),d instanceof sN?l=!0:d instanceof iN&&(l=!1))}setSize(r,e,t){const a=this.renderer,s=a.getSize(new rt);(r===void 0||e===void 0)&&(r=s.width,e=s.height),(s.width!==r||s.height!==e)&&a.setSize(r,e,t);const l=a.getDrawingBufferSize(new rt);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const c of this.passes)c.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),_a.fullscreenGeometry.dispose()}},rs={NONE:0,DEPTH:1,CONVOLUTION:2},Bt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},lN=class{constructor(){this.shaderParts=new Map([[Bt.FRAGMENT_HEAD,null],[Bt.FRAGMENT_MAIN_UV,null],[Bt.FRAGMENT_MAIN_IMAGE,null],[Bt.VERTEX_HEAD,null],[Bt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=rs.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=us}},lm=!1,cy=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ni:t=this.materialsFlatShadedDoubleSide;break;case Pn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ni:t=this.materialsDoubleSide;break;case Pn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof zn))return r.clone();const e=r.uniforms,t=new Map;for(const s in e){const l=e[s].value;l.isRenderTargetTexture&&(e[s].value=null,t.set(s,l))}const a=r.clone();for(const s of t)e[s[0]].value=s[1],a.uniforms[s[0]].value=s[1];return a}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=dr;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const a=this.cloneMaterial(t);return a.uniforms=Object.assign({},r.uniforms),a.side=Pn,a}),this.materialsDoubleSide=e.map(t=>{const a=this.cloneMaterial(t);return a.uniforms=Object.assign({},r.uniforms),a.side=Ni,a}),this.materialsFlatShaded=e.map(t=>{const a=this.cloneMaterial(t);return a.uniforms=Object.assign({},r.uniforms),a.flatShading=!0,a}),this.materialsFlatShadedBackSide=e.map(t=>{const a=this.cloneMaterial(t);return a.uniforms=Object.assign({},r.uniforms),a.flatShading=!0,a.side=Pn,a}),this.materialsFlatShadedDoubleSide=e.map(t=>{const a=this.cloneMaterial(t);return a.uniforms=Object.assign({},r.uniforms),a.flatShading=!0,a.side=Ni,a})}}render(r,e,t){const a=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,lm){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const l of s)l[0].material=l[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=s}r.shadowMap.enabled=a}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return lm}static set workaroundEnabled(r){lm=r}},Qr=-1,Na=class extends vr{constructor(r,e=Qr,t=Qr,a=1){super(),this.resizable=r,this.baseSize=new rt(1,1),this.preferredSize=new rt(e,t),this.target=this.preferredSize,this.s=a,this.effectiveSize=new rt,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const r=this.baseSize,e=this.preferredSize,t=this.effectiveSize,a=this.scale;e.width!==Qr?t.width=e.width:e.height!==Qr?t.width=Math.round(e.height*(r.width/Math.max(r.height,1))):t.width=Math.round(r.width*a),e.height!==Qr?t.height=e.height:e.width!==Qr?t.height=Math.round(e.width/Math.max(r.width/Math.max(r.height,1),1)):t.height=Math.round(r.height*a)}get width(){return this.effectiveSize.width}set width(r){this.preferredWidth=r}get height(){return this.effectiveSize.height}set height(r){this.preferredHeight=r}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(r){this.s!==r&&(this.s=r,this.preferredSize.setScalar(Qr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(r){this.scale=r}get baseWidth(){return this.baseSize.width}set baseWidth(r){this.baseSize.width!==r&&(this.baseSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(r){this.baseWidth=r}get baseHeight(){return this.baseSize.height}set baseHeight(r){this.baseSize.height!==r&&(this.baseSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(r){this.baseHeight=r}setBaseSize(r,e){(this.baseSize.width!==r||this.baseSize.height!==e)&&(this.baseSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(r){this.preferredSize.width!==r&&(this.preferredSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(r){this.preferredWidth=r}get preferredHeight(){return this.preferredSize.height}set preferredHeight(r){this.preferredSize.height!==r&&(this.preferredSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(r){this.preferredHeight=r}setPreferredSize(r,e){(this.preferredSize.width!==r||this.preferredSize.height!==e)&&(this.preferredSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(r){this.s=r.scale,this.baseSize.set(r.baseWidth,r.baseHeight),this.preferredSize.set(r.preferredWidth,r.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Qr}},Tt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},uN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",fN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_N="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",NN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ON="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",FN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GN=new Map([[Tt.ADD,uN],[Tt.ALPHA,cN],[Tt.AVERAGE,fN],[Tt.COLOR,hN],[Tt.COLOR_BURN,dN],[Tt.COLOR_DODGE,pN],[Tt.DARKEN,mN],[Tt.DIFFERENCE,gN],[Tt.DIVIDE,_N],[Tt.DST,null],[Tt.EXCLUSION,vN],[Tt.HARD_LIGHT,xN],[Tt.HARD_MIX,SN],[Tt.HUE,yN],[Tt.INVERT,MN],[Tt.INVERT_RGB,EN],[Tt.LIGHTEN,bN],[Tt.LINEAR_BURN,TN],[Tt.LINEAR_DODGE,AN],[Tt.LINEAR_LIGHT,RN],[Tt.LUMINOSITY,CN],[Tt.MULTIPLY,wN],[Tt.NEGATION,DN],[Tt.NORMAL,UN],[Tt.OVERLAY,NN],[Tt.PIN_LIGHT,LN],[Tt.REFLECT,ON],[Tt.SATURATION,PN],[Tt.SCREEN,BN],[Tt.SOFT_LIGHT,IN],[Tt.SRC,zN],[Tt.SUBTRACT,FN],[Tt.VIVID_LIGHT,HN]]),VN=class extends vr{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new Nt(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return GN.get(this.blendFunction)}},_E=class extends vr{constructor(r,e,{attributes:t=rs.NONE,blendFunction:a=Tt.NORMAL,defines:s=new Map,uniforms:l=new Map,extensions:c=null,vertexShader:f=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=f,this.defines=s,this.uniforms=l,this.extensions=c,this.blendMode=new VN(a),this.blendMode.addEventListener("change",h=>this.setChanged()),this._inputColorSpace=us,this._outputColorSpace=Ca}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=Yu){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof Bn||e instanceof _l||e instanceof Qn||e instanceof _a)&&this[r].dispose()}}},e0={MEDIUM:2,LARGE:3},kN=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,XN="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",WN=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],YN=class extends zn{constructor(r=new fn){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Nt(null),texelSize:new Nt(new fn),scale:new Nt(1),kernel:new Nt(0)},blending:li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:kN,vertexShader:XN}),this.setTexelSize(r.x,r.y),this.kernelSize=e0.MEDIUM}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.inputBuffer=r}get kernelSequence(){return WN[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(r){this.uniforms.scale.value=r}getScale(){return this.uniforms.scale.value}setScale(r){this.uniforms.scale.value=r}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(r){this.uniforms.kernel.value=r}setKernel(r){this.kernel=r}setTexelSize(r,e){this.uniforms.texelSize.value.set(r,e,r*.5,e*.5)}setSize(r,e){const t=1/r,a=1/e;this.uniforms.texelSize.value.set(t,a,t*.5,a*.5)}},qN=class extends _a{constructor({kernelSize:r=e0.MEDIUM,resolutionScale:e=.5,width:t=Na.AUTO_SIZE,height:a=Na.AUTO_SIZE,resolutionX:s=t,resolutionY:l=a}={}){super("KawaseBlurPass"),this.renderTargetA=new Bn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const c=this.resolution=new Na(this,s,l,e);c.addEventListener("change",f=>this.setSize(c.baseWidth,c.baseHeight)),this._blurMaterial=new YN,this._blurMaterial.kernelSize=r,this.copyMaterial=new mE}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(r){this._blurMaterial=r}get dithering(){return this.copyMaterial.dithering}set dithering(r){this.copyMaterial.dithering=r}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(r){this.blurMaterial.kernelSize=r}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get scale(){return this.blurMaterial.scale}set scale(r){this.blurMaterial.scale=r}getScale(){return this.blurMaterial.scale}setScale(r){this.blurMaterial.scale=r}getKernelSize(){return this.kernelSize}setKernelSize(r){this.kernelSize=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}render(r,e,t,a,s){const l=this.scene,c=this.camera,f=this.renderTargetA,h=this.renderTargetB,d=this.blurMaterial,m=d.kernelSequence;let _=e;this.fullscreenMaterial=d;for(let v=0,x=m.length;v<x;++v){const E=(v&1)===0?f:h;d.kernel=m[v],d.inputBuffer=_.texture,r.setRenderTarget(E),r.render(l,c),_=E}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=_.texture,r.setRenderTarget(this.renderToScreen?null:t),r.render(l,c)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e);const a=t.width,s=t.height;this.renderTargetA.setSize(a,s),this.renderTargetB.setSize(a,s),this.blurMaterial.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Dn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):r!==null&&r.outputColorSpace===qt&&(this.renderTargetA.texture.colorSpace=qt,this.renderTargetB.texture.colorSpace=qt))}static get AUTO_SIZE(){return Na.AUTO_SIZE}},jN=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,ZN=class extends zn{constructor(r=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Wu.replace(/\D+/g,"")},uniforms:{inputBuffer:new Nt(null),threshold:new Nt(0),smoothing:new Nt(1),range:new Nt(null)},blending:li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jN,vertexShader:pE}),this.colorOutput=r,this.luminanceRange=e}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get threshold(){return this.uniforms.threshold.value}set threshold(r){this.smoothing>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=r}getThreshold(){return this.threshold}setThreshold(r){this.threshold=r}get smoothing(){return this.uniforms.smoothing.value}set smoothing(r){this.threshold>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=r}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(r){this.smoothing=r}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(r){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(r){r?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(r){return this.colorOutput}setColorOutputEnabled(r){this.colorOutput=r}get useRange(){return this.luminanceRange!==null}set useRange(r){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(r){r!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=r,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(r){this.luminanceRange=r}},KN=class extends _a{constructor({renderTarget:r,luminanceRange:e,colorOutput:t,resolutionScale:a=1,width:s=Na.AUTO_SIZE,height:l=Na.AUTO_SIZE,resolutionX:c=s,resolutionY:f=l}={}){super("LuminancePass"),this.fullscreenMaterial=new ZN(t,e),this.needsSwap=!1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new Bn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const h=this.resolution=new Na(this,c,f,a);h.addEventListener("change",d=>this.setSize(h.baseWidth,h.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(r,e,t,a,s){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height)}initialize(r,e,t){t!==void 0&&t!==Dn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},QN=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,JN="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",$N=class extends zn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Nt(null),texelSize:new Nt(new rt)},blending:li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:QN,vertexShader:JN})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},eL=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,tL="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",nL=class extends zn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Nt(null),supportBuffer:new Nt(null),texelSize:new Nt(new rt),radius:new Nt(.85)},blending:li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eL,vertexShader:tL})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}set supportBuffer(r){this.uniforms.supportBuffer.value=r}get radius(){return this.uniforms.radius.value}set radius(r){this.uniforms.radius.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},iL=class extends _a{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Bn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new $N,this.upsamplingMaterial=new nL,this.resolution=new rt}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(r){if(this.levels!==r){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<r;++t){const a=e.clone();a.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(a)}this.upsamplingMipmaps.push(e);for(let t=1,a=r-1;t<a;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(r){this.upsamplingMaterial.radius=r}render(r,e,t,a,s){const{scene:l,camera:c}=this,{downsamplingMaterial:f,upsamplingMaterial:h}=this,{downsamplingMipmaps:d,upsamplingMipmaps:m}=this;let _=e;this.fullscreenMaterial=f;for(let v=0,x=d.length;v<x;++v){const E=d[v];f.setSize(_.width,_.height),f.inputBuffer=_.texture,r.setRenderTarget(E),r.render(l,c),_=E}this.fullscreenMaterial=h;for(let v=m.length-1;v>=0;--v){const x=m[v];h.setSize(_.width,_.height),h.inputBuffer=_.texture,h.supportBuffer=d[v].texture,r.setRenderTarget(x),r.render(l,c),_=x}}setSize(r,e){const t=this.resolution;t.set(r,e);let a=t.width,s=t.height;for(let l=0,c=this.downsamplingMipmaps.length;l<c;++l)a=Math.round(a*.5),s=Math.round(s*.5),this.downsamplingMipmaps[l].setSize(a,s),l<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[l].setSize(a,s)}initialize(r,e,t){if(t!==void 0){const a=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of a)s.texture.type=t;if(t!==Dn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(r!==null&&r.outputColorSpace===qt)for(const s of a)s.texture.colorSpace=qt}}dispose(){super.dispose();for(const r of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))r.dispose()}},aL=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,rL=class extends _E{constructor({blendFunction:r=Tt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:a=!0,intensity:s=1,radius:l=.85,levels:c=8,kernelSize:f=e0.LARGE,resolutionScale:h=.5,width:d=Na.AUTO_SIZE,height:m=Na.AUTO_SIZE,resolutionX:_=d,resolutionY:v=m}={}){super("BloomEffect",aL,{blendFunction:r,uniforms:new Map([["map",new Nt(null)],["intensity",new Nt(s)]])}),this.renderTarget=new Bn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new qN({kernelSize:f}),this.luminancePass=new KN({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new iL,this.mipmapBlurPass.enabled=a,this.mipmapBlurPass.radius=l,this.mipmapBlurPass.levels=c,this.uniforms.get("map").value=a?this.mipmapBlurPass.texture:this.renderTarget.texture;const x=this.resolution=new Na(this,_,v,h);x.addEventListener("change",E=>this.setSize(x.baseWidth,x.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get dithering(){return this.blurPass.dithering}set dithering(r){this.blurPass.dithering=r}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(r){this.blurPass.kernelSize=r}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(r){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(r){this.uniforms.get("intensity").value=r}getIntensity(){return this.intensity}setIntensity(r){this.intensity=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}update(r,e,t){const a=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(r,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,s.renderTarget):this.blurPass.render(r,s.renderTarget,a)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,e):this.blurPass.render(r,e,a)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(r,e),this.mipmapBlurPass.setSize(r,e)}initialize(r,e,t){this.blurPass.initialize(r,e,t),this.luminancePass.initialize(r,e,t),this.mipmapBlurPass.initialize(r,e,t),t!==void 0&&(this.renderTarget.texture.type=t,r!==null&&r.outputColorSpace===qt&&(this.renderTarget.texture.colorSpace=qt))}},sL=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,oL="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",lL=class extends _E{constructor({offset:r=new rt(.001,5e-4),radialModulation:e=!1,modulationOffset:t=.15}={}){super("ChromaticAberrationEffect",sL,{vertexShader:oL,attributes:rs.CONVOLUTION,uniforms:new Map([["offset",new Nt(r)],["modulationOffset",new Nt(t)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(r){this.uniforms.get("offset").value=r}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(r){r?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(r){this.uniforms.get("modulationOffset").value=r}getOffset(){return this.offset}setOffset(r){this.offset=r}},uL=class extends _a{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new gE,this.overrideMaterialManager=t===null?null:new cy(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new cy(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,a,s){const l=this.scene,c=this.camera,f=this.selection,h=c.layers.mask,d=l.background,m=r.shadowMap.autoUpdate,_=this.renderToScreen?null:e;f!==null&&c.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,l,c):r.render(l,c),c.layers.mask=h,l.background=d,r.shadowMap.autoUpdate=m}},cL=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,fL="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",hL=class extends zn{constructor(r,e,t,a,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Wu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Nt(null),depthBuffer:new Nt(null),resolution:new Nt(new rt),texelSize:new Nt(new rt),cameraNear:new Nt(.3),cameraFar:new Nt(1e3),aspect:new Nt(1),time:new Nt(0)},blending:li,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(a)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=Yu){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=cL.replace(Bt.FRAGMENT_HEAD,r.get(Bt.FRAGMENT_HEAD)||"").replace(Bt.FRAGMENT_MAIN_UV,r.get(Bt.FRAGMENT_MAIN_UV)||"").replace(Bt.FRAGMENT_MAIN_IMAGE,r.get(Bt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=fL.replace(Bt.VERTEX_HEAD,r.get(Bt.VERTEX_HEAD)||"").replace(Bt.VERTEX_MAIN_SUPPORT,r.get(Bt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof Qi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return Bt}};function fy(r,e,t){for(const a of e){const s="$1"+r+a.charAt(0).toUpperCase()+a.slice(1),l=new RegExp("([^\\.])(\\b"+a+"\\b)","g");for(const c of t.entries())c[1]!==null&&t.set(c[0],c[1].replace(l,s))}}function dL(r,e,t){let a=e.getFragmentShader(),s=e.getVertexShader();const l=a!==void 0&&/mainImage/.test(a),c=a!==void 0&&/mainUv/.test(a);if(t.attributes|=e.getAttributes(),a===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(t.attributes&rs.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,h=t.shaderParts;let d=h.get(Bt.FRAGMENT_HEAD)||"",m=h.get(Bt.FRAGMENT_MAIN_UV)||"",_=h.get(Bt.FRAGMENT_MAIN_IMAGE)||"",v=h.get(Bt.VERTEX_HEAD)||"",x=h.get(Bt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,M=new Set;if(c&&(m+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const R=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);x+=`	${r}MainSupport(`,x+=R?`vUv);
`:`);
`;for(const C of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const D of C[1].split(/\s*,\s*/))t.varyings.add(D),E.add(D),M.add(D);for(const C of s.matchAll(f))M.add(C[1])}for(const R of a.matchAll(f))M.add(R[1]);for(const R of e.defines.keys())M.add(R.replace(/\([\w\s,]*\)/g,""));for(const R of e.uniforms.keys())M.add(R);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((R,C)=>t.uniforms.set(r+C.charAt(0).toUpperCase()+C.slice(1),R)),e.defines.forEach((R,C)=>t.defines.set(r+C.charAt(0).toUpperCase()+C.slice(1),R));const y=new Map([["fragment",a],["vertex",s]]);fy(r,M,t.defines),fy(r,M,y),a=y.get("fragment"),s=y.get("vertex");const S=e.blendMode;if(t.blendModes.set(S.blendFunction,S),l){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(_+=e.inputColorSpace===qt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ca?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const R=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${r}MainImage(color0, UV, `,(t.attributes&rs.DEPTH)!==0&&R.test(a)&&(_+="depth, ",t.readDepth=!0),_+=`color1);
	`;const C=r+"BlendOpacity";t.uniforms.set(C,S.opacity),_+=`color0 = blend${S.blendFunction}(color0, color1, ${C});

	`,d+=`uniform float ${C};

`}if(d+=a+`
`,s!==null&&(v+=s+`
`),h.set(Bt.FRAGMENT_HEAD,d),h.set(Bt.FRAGMENT_MAIN_UV,m),h.set(Bt.FRAGMENT_MAIN_IMAGE,_),h.set(Bt.VERTEX_HEAD,v),h.set(Bt.VERTEX_MAIN_SUPPORT,x),e.extensions!==null)for(const R of e.extensions)t.extensions.add(R)}}var pL=class extends _a{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new hL(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new lN;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===Tt.DST)r.attributes|=c.getAttributes()&rs.DEPTH;else{if((r.attributes&c.getAttributes()&rs.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);dL("e"+e++,c,r)}let t=r.shaderParts.get(Bt.FRAGMENT_HEAD),a=r.shaderParts.get(Bt.FRAGMENT_MAIN_IMAGE),s=r.shaderParts.get(Bt.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const c of r.blendModes.values())t+=c.getShaderCode().replace(l,`blend${c.blendFunction}`)+`
`;(r.attributes&rs.DEPTH)!==0?(r.readDepth&&(a=`float depth = readDepth(UV);

	`+a),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===qt&&(a+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Bt.FRAGMENT_HEAD,t),r.shaderParts.set(Bt.FRAGMENT_MAIN_IMAGE,a),r.shaderParts.set(Bt.FRAGMENT_MAIN_UV,s);for(const[c,f]of r.shaderParts)f!==null&&r.shaderParts.set(c,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=Yu){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,a,s){for(const l of this.effects)l.update(r,e,a);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=a*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const a of this.effects)a.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==Dn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){r.type==="change"&&this.recompile()}};const mL=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,gL=`
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec2 uSkew;
uniform float uTilt;
uniform float uYaw;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uLineStyle;
uniform float uLineJitter;
uniform float uScanOpacity;
uniform float uScanDirection;
uniform float uNoise;
uniform float uBloomOpacity;
uniform float uScanGlow;
uniform float uScanSoftness;
uniform float uPhaseTaper;
uniform float uScanDuration;
uniform float uScanDelay;
varying vec2 vUv;

uniform float uScanStarts[8];
uniform float uScanCount;

const int MAX_SCANS = 8;

float smoother01(float a, float b, float x){
  float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3(p, 2.0));

    float cR = cos(uTilt), sR = sin(uTilt);
    rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;

    float cY = cos(uYaw), sY = sin(uYaw);
    rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;

    vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
    rd.xy += skew * rd.z;

    vec3 color = vec3(0.0);
  float minT = 1e20;
  float gridScale = max(1e-5, uGridScale);
    float fadeStrength = 2.0;
    vec2 gridUV = vec2(0.0);

  float hitIsY = 1.0;
    for (int i = 0; i < 4; i++)
    {
        float isY = float(i < 2);
        float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
        float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
        float den = isY * rd.y + (1.0 - isY) * rd.x;
        float t = num / den;
        vec3 h = ro + rd * t;

        float depthBoost = smoothstep(0.0, 3.0, h.z);
        h.xy += skew * 0.15 * depthBoost;

    bool use = t > 0.0 && t < minT;
    gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
    minT = use ? t : minT;
    hitIsY = use ? isY : hitIsY;
    }

    vec3 hit = ro + rd * minT;
    float dist = length(hit - ro);

  float jitterAmt = clamp(uLineJitter, 0.0, 1.0);
  if (jitterAmt > 0.0) {
    vec2 j = vec2(
      sin(gridUV.y * 2.7 + iTime * 1.8),
      cos(gridUV.x * 2.3 - iTime * 1.6)
    ) * (0.15 * jitterAmt);
    gridUV += j;
  }
  float fx = fract(gridUV.x);
  float fy = fract(gridUV.y);
  float ax = min(fx, 1.0 - fx);
  float ay = min(fy, 1.0 - fy);
  float wx = fwidth(gridUV.x);
  float wy = fwidth(gridUV.y);
  float halfPx = max(0.0, uLineThickness) * 0.5;

  float tx = halfPx * wx;
  float ty = halfPx * wy;

  float aax = wx;
  float aay = wy;

  float lineX = 1.0 - smoothstep(tx, tx + aax, ax);
  float lineY = 1.0 - smoothstep(ty, ty + aay, ay);
  if (uLineStyle > 0.5) {
    float dashRepeat = 4.0;
    float dashDuty = 0.5;
    float vy = fract(gridUV.y * dashRepeat);
    float vx = fract(gridUV.x * dashRepeat);
    float dashMaskY = step(vy, dashDuty);
    float dashMaskX = step(vx, dashDuty);
    if (uLineStyle < 1.5) {
      lineX *= dashMaskY;
      lineY *= dashMaskX;
    } else {
      float dotRepeat = 6.0;
      float dotWidth = 0.18;
      float cy = abs(fract(gridUV.y * dotRepeat) - 0.5);
      float cx = abs(fract(gridUV.x * dotRepeat) - 0.5);
      float dotMaskY = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.y * dotRepeat), cy);
      float dotMaskX = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.x * dotRepeat), cx);
      lineX *= dotMaskY;
      lineY *= dotMaskX;
    }
  }
  float primaryMask = max(lineX, lineY);

  vec2 gridUV2 = (hitIsY > 0.5 ? hit.xz : hit.zy) / gridScale;
  if (jitterAmt > 0.0) {
    vec2 j2 = vec2(
      cos(gridUV2.y * 2.1 - iTime * 1.4),
      sin(gridUV2.x * 2.5 + iTime * 1.7)
    ) * (0.15 * jitterAmt);
    gridUV2 += j2;
  }
  float fx2 = fract(gridUV2.x);
  float fy2 = fract(gridUV2.y);
  float ax2 = min(fx2, 1.0 - fx2);
  float ay2 = min(fy2, 1.0 - fy2);
  float wx2 = fwidth(gridUV2.x);
  float wy2 = fwidth(gridUV2.y);
  float tx2 = halfPx * wx2;
  float ty2 = halfPx * wy2;
  float aax2 = wx2;
  float aay2 = wy2;
  float lineX2 = 1.0 - smoothstep(tx2, tx2 + aax2, ax2);
  float lineY2 = 1.0 - smoothstep(ty2, ty2 + aay2, ay2);
  if (uLineStyle > 0.5) {
    float dashRepeat2 = 4.0;
    float dashDuty2 = 0.5;
    float vy2m = fract(gridUV2.y * dashRepeat2);
    float vx2m = fract(gridUV2.x * dashRepeat2);
    float dashMaskY2 = step(vy2m, dashDuty2);
    float dashMaskX2 = step(vx2m, dashDuty2);
    if (uLineStyle < 1.5) {
      lineX2 *= dashMaskY2;
      lineY2 *= dashMaskX2;
    } else {
      float dotRepeat2 = 6.0;
      float dotWidth2 = 0.18;
      float cy2 = abs(fract(gridUV2.y * dotRepeat2) - 0.5);
      float cx2 = abs(fract(gridUV2.x * dotRepeat2) - 0.5);
      float dotMaskY2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.y * dotRepeat2), cy2);
      float dotMaskX2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.x * dotRepeat2), cx2);
      lineX2 *= dotMaskY2;
      lineY2 *= dotMaskX2;
    }
  }
    float altMask = max(lineX2, lineY2);

    float edgeDistX = min(abs(hit.x - (-0.5)), abs(hit.x - 0.5));
    float edgeDistY = min(abs(hit.y - (-0.2)), abs(hit.y - 0.2));
    float edgeDist = mix(edgeDistY, edgeDistX, hitIsY);
    float edgeGate = 1.0 - smoothstep(gridScale * 0.5, gridScale * 2.0, edgeDist);
    altMask *= edgeGate;

  float lineMask = max(primaryMask, altMask);

    float fade = exp(-dist * fadeStrength);

    float dur = max(0.05, uScanDuration);
    float del = max(0.0, uScanDelay);
    float scanZMax = 2.0;
    float widthScale = max(0.1, uScanGlow);
    float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);
    float sigmaA = sigma * 2.0;

    float combinedPulse = 0.0;
    float combinedAura = 0.0;

    float cycle = dur + del;
    float tCycle = mod(iTime, cycle);
    float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);
    float phase = scanPhase;
    if (uScanDirection > 0.5 && uScanDirection < 1.5) {
      phase = 1.0 - phase;
    } else if (uScanDirection > 1.5) {
      float t2 = mod(max(0.0, iTime - del), 2.0 * dur);
      phase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);
    }
    float scanZ = phase * scanZMax;
    float dz = abs(hit.z - scanZ);
    float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));
    float taper = clamp(uPhaseTaper, 0.0, 0.49);
    float headW = taper;
    float tailW = taper;
    float headFade = smoother01(0.0, headW, phase);
    float tailFade = 1.0 - smoother01(1.0 - tailW, 1.0, phase);
    float phaseWindow = headFade * tailFade;
    float pulseBase = lineBand * phaseWindow;
    combinedPulse += pulseBase * clamp(uScanOpacity, 0.0, 1.0);
    float auraBand = exp(-0.5 * (dz * dz) / (sigmaA * sigmaA));
    combinedAura += (auraBand * 0.25) * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);

    for (int i = 0; i < MAX_SCANS; i++) {
      if (float(i) >= uScanCount) break;
      float tActiveI = iTime - uScanStarts[i];
      float phaseI = clamp(tActiveI / dur, 0.0, 1.0);
      if (uScanDirection > 0.5 && uScanDirection < 1.5) {
        phaseI = 1.0 - phaseI;
      } else if (uScanDirection > 1.5) {
        phaseI = (phaseI < 0.5) ? (phaseI * 2.0) : (1.0 - (phaseI - 0.5) * 2.0);
      }
      float scanZI = phaseI * scanZMax;
      float dzI = abs(hit.z - scanZI);
      float lineBandI = exp(-0.5 * (dzI * dzI) / (sigma * sigma));
      float headFadeI = smoother01(0.0, headW, phaseI);
      float tailFadeI = 1.0 - smoother01(1.0 - tailW, 1.0, phaseI);
      float phaseWindowI = headFadeI * tailFadeI;
      combinedPulse += lineBandI * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
      float auraBandI = exp(-0.5 * (dzI * dzI) / (sigmaA * sigmaA));
      combinedAura += (auraBandI * 0.25) * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
    }

  float lineVis = lineMask;
  vec3 gridCol = uLinesColor * lineVis * fade;
  vec3 scanCol = uScanColor * combinedPulse;
  vec3 scanAura = uScanColor * combinedAura;

    color = gridCol + scanCol + scanAura;

  float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898,78.233))) * 43758.5453123);
  color += (n - 0.5) * uNoise;
  color = clamp(color, 0.0, 1.0);
  float alpha = clamp(max(lineVis, combinedPulse), 0.0, 1.0);
  float gx = 1.0 - smoothstep(tx * 2.0, tx * 2.0 + aax * 2.0, ax);
  float gy = 1.0 - smoothstep(ty * 2.0, ty * 2.0 + aay * 2.0, ay);
  float halo = max(gx, gy) * fade;
  alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));
  fragColor = vec4(color, alpha);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`,_L=({sensitivity:r=.55,lineThickness:e=1,linesColor:t="#392e4e",scanColor:a="#FF9FFC",scanOpacity:s=.4,gridScale:l=.1,lineStyle:c="solid",lineJitter:f=.1,scanDirection:h="pingpong",enablePost:d=!0,bloomIntensity:m=0,bloomThreshold:_=0,bloomSmoothing:v=0,chromaticAberration:x=.002,noiseIntensity:E=.01,scanGlow:M=.5,scanSoftness:y=2,scanPhaseTaper:S=.9,scanDuration:R=2,scanDelay:C=2,enableGyro:D=!1,scanOnClick:w=!1,snapBackDelay:P=250,className:O,style:F})=>{const T=Q.useRef(null),L=Q.useRef(null),G=Q.useRef(null),Y=Q.useRef(null),q=Q.useRef(null),le=Q.useRef(null),ee=Q.useRef(null),I=Q.useRef(new rt(0,0)),H=Q.useRef(0),J=Q.useRef(0),_e=Q.useRef(new rt(0,0)),xe=Q.useRef(new rt(0,0)),B=Q.useRef(0),te=Q.useRef(0),pe=Q.useRef(0),be=Q.useRef(0),Ne=8,ae=Q.useRef([]),de=je=>{const Te=ae.current.slice();if(Te.length>=Ne&&Te.shift(),Te.push(je),ae.current=Te,G.current){const wt=G.current.uniforms,k=new Array(Ne).fill(0);for(let xt=0;xt<Te.length&&xt<Ne;xt++)k[xt]=Te[xt];wt.uScanStarts.value=k,wt.uScanCount.value=Te.length}},we=Ea.clamp(r,0,1),Xe=Ea.lerp(.06,.2,we),ke=Ea.lerp(.12,.3,we),_t=Ea.lerp(.1,.28,we),en=Ea.lerp(.45,.12,we),mt=1/0,vt=Ea.lerp(1.2,1.6,we);return Q.useEffect(()=>{const je=T.current;if(!je)return;let Te=null;const wt=St=>{Te&&(clearTimeout(Te),Te=null);const He=je.getBoundingClientRect(),z=(St.clientX-He.left)/He.width*2-1,A=-((St.clientY-He.top)/He.height*2-1);I.current.set(z,A)},k=async()=>{const St=performance.now()/1e3;if(w&&de(St),D&&typeof window<"u"&&window.DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission)try{await DeviceOrientationEvent.requestPermission()}catch{}},xt=()=>{Te&&(clearTimeout(Te),Te=null)},ct=()=>{Te&&clearTimeout(Te),Te=window.setTimeout(()=>{I.current.set(0,0),H.current=0,J.current=0},Math.max(0,P||0))};return je.addEventListener("mousemove",wt),je.addEventListener("mouseenter",xt),w&&je.addEventListener("click",k),je.addEventListener("mouseleave",ct),()=>{je.removeEventListener("mousemove",wt),je.removeEventListener("mouseenter",xt),je.removeEventListener("mouseleave",ct),w&&je.removeEventListener("click",k),Te&&clearTimeout(Te)}},[P,w,D]),Q.useEffect(()=>{const je=T.current;if(!je)return;const Te=new $U({antialias:!0,alpha:!0});L.current=Te,Te.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Te.setSize(je.clientWidth,je.clientHeight),Te.outputColorSpace=qt,Te.toneMapping=da,Te.autoClear=!1,Te.setClearColor(0,0),je.appendChild(Te.domElement);const wt={iResolution:{value:new ue(je.clientWidth,je.clientHeight,Te.getPixelRatio())},iTime:{value:0},uSkew:{value:new rt(0,0)},uTilt:{value:0},uYaw:{value:0},uLineThickness:{value:e},uLinesColor:{value:Nf(t)},uScanColor:{value:Nf(a)},uGridScale:{value:l},uLineStyle:{value:c==="dashed"?1:c==="dotted"?2:0},uLineJitter:{value:Math.max(0,Math.min(1,f||0))},uScanOpacity:{value:s},uNoise:{value:E},uBloomOpacity:{value:m},uScanGlow:{value:M},uScanSoftness:{value:y},uPhaseTaper:{value:S},uScanDuration:{value:R},uScanDelay:{value:C},uScanDirection:{value:h==="backward"?1:h==="pingpong"?2:0},uScanStarts:{value:new Array(Ne).fill(0)},uScanCount:{value:0}},k=new zn({uniforms:wt,vertexShader:mL,fragmentShader:gL,transparent:!0,depthWrite:!1,depthTest:!1});G.current=k;const xt=new mg,ct=new lh(-1,1,1,-1,0,1),St=new ga(new Ku(2,2),k);xt.add(St);let He=null;if(d){He=new oN(Te),Y.current=He;const me=new uL(xt,ct);He.addPass(me);const Se=new rL({intensity:1,luminanceThreshold:_,luminanceSmoothing:v});Se.blendMode.opacity.value=Math.max(0,m),q.current=Se;const he=new lL({offset:new rt(x,x),radialModulation:!0,modulationOffset:0});le.current=he;const We=new pL(ct,Se,he);We.renderToScreen=!0,He.addPass(We)}const z=()=>{Te.setSize(je.clientWidth,je.clientHeight),k.uniforms.iResolution.value.set(je.clientWidth,je.clientHeight,Te.getPixelRatio()),Y.current&&Y.current.setSize(je.clientWidth,je.clientHeight)};window.addEventListener("resize",z);let A=performance.now();const j=()=>{const me=performance.now(),Se=Math.max(0,Math.min(.1,(me-A)/1e3));A=me,_e.current.copy(vL(_e.current,I.current,xe.current,en,mt,Se));const he=hy(B.current,H.current,{v:te.current},en,mt,Se);B.current=he.value,te.current=he.v;const We=hy(pe.current,J.current,{v:be.current},en,mt,Se);pe.current=We.value,be.current=We.v;const Ue=new rt(_e.current.x*Xe,-_e.current.y*vt*Xe);k.uniforms.uSkew.value.set(Ue.x,Ue.y),k.uniforms.uTilt.value=B.current*ke,k.uniforms.uYaw.value=Ea.clamp(pe.current*_t,-.6,.6),k.uniforms.iTime.value=me/1e3,Te.clear(!0,!0,!0),Y.current?Y.current.render(Se):Te.render(xt,ct),ee.current=requestAnimationFrame(j)};return ee.current=requestAnimationFrame(j),()=>{ee.current&&cancelAnimationFrame(ee.current),window.removeEventListener("resize",z),k.dispose(),St.geometry.dispose(),Y.current&&(Y.current.dispose(),Y.current=null),Te.dispose(),je.removeChild(Te.domElement)}},[r,e,t,a,s,l,c,f,h,d]),Q.useEffect(()=>{const je=G.current;if(je){const Te=je.uniforms;Te.uLineThickness.value=e,Te.uLinesColor.value.copy(Nf(t)),Te.uScanColor.value.copy(Nf(a)),Te.uGridScale.value=l,Te.uLineStyle.value=c==="dashed"?1:c==="dotted"?2:0,Te.uLineJitter.value=Math.max(0,Math.min(1,f||0)),Te.uBloomOpacity.value=Math.max(0,m),Te.uNoise.value=Math.max(0,E),Te.uScanGlow.value=M,Te.uScanOpacity.value=Math.max(0,Math.min(1,s)),Te.uScanDirection.value=h==="backward"?1:h==="pingpong"?2:0,Te.uScanSoftness.value=y,Te.uPhaseTaper.value=S,Te.uScanDuration.value=Math.max(.05,R),Te.uScanDelay.value=Math.max(0,C)}q.current&&(q.current.blendMode.opacity.value=Math.max(0,m),q.current.luminanceMaterial.threshold=_,q.current.luminanceMaterial.smoothing=v),le.current&&le.current.offset.set(x,x)},[e,t,a,l,c,f,m,_,v,x,E,M,s,h,y,S,R,C]),Q.useEffect(()=>{if(!D)return;const je=Te=>{const wt=Te.gamma??0,k=Te.beta??0,xt=Ea.clamp(wt/45,-1,1),ct=Ea.clamp(-k/30,-1,1);I.current.set(xt,ct),H.current=Ea.degToRad(wt)*.4};return window.addEventListener("deviceorientation",je),()=>{window.removeEventListener("deviceorientation",je)}},[D]),oe.jsx("div",{ref:T,className:`gridscan${O?` ${O}`:""}`,style:F})};function Nf(r){return new Gt(r).convertSRGBToLinear()}function vL(r,e,t,a,s,l){const c=r.clone();a=Math.max(1e-4,a);const f=2/a,h=f*l,d=1/(1+h+.48*h*h+.235*h*h*h);let m=r.clone().sub(e);const _=e.clone(),v=s*a;m.length()>v&&m.setLength(v),e=r.clone().sub(m);const x=t.clone().addScaledVector(m,f).multiplyScalar(l);t.sub(x.clone().multiplyScalar(f)),t.multiplyScalar(d),c.copy(e.clone().add(m.add(x).multiplyScalar(d)));const E=_.clone().sub(r),M=c.clone().sub(_);return E.dot(M)>0&&(c.copy(_),t.set(0,0)),c}function hy(r,e,t,a,s,l){a=Math.max(1e-4,a);const c=2/a,f=c*l,h=1/(1+f+.48*f*f+.235*f*f*f);let d=r-e;const m=e,_=s*a;d=Math.sign(d)*Math.min(Math.abs(d),_),e=r-d;const v=(t.v+c*d)*l;t.v=(t.v-c*v)*h;let x=e+(d+v)*h;const E=m-r,M=x-m;return E*M>0&&(x=m,t.v=0),{value:x,v:t.v}}function xL(){return oe.jsx("div",{className:"absolute inset-0 w-full h-full overflow-hidden",children:oe.jsx(_L,{sensitivity:.55,lineThickness:1,linesColor:"#55AA66",gridScale:.1,scanColor:"#8C52C7",scanOpacity:.4,enablePost:!0,bloomIntensity:.6,chromaticAberration:.002,noiseIntensity:.01,lineJitter:0,scanGlow:.5})})}function SL(){const r=()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})};return oe.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity z-50",onClick:r,children:oe.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})}function yL(){const r=[{number:"01",title:"복습하기",description:"배운 스택을 다시 써야 할 때, 제 블로그를 먼저 참고한 뒤 공식문서를 읽습니다. 이전에 이해한 내용을 바탕으로 다시 한번 더 명확하게 이해하려 노력합니다."},{number:"02",title:"깊은 이해",description:"듣고 본 내용과 직접 작성한 내용은 다릅니다. 지식을 습득했다면 반드시 글로 작성하며 한 번 더 깊이 이해하려 노력합니다."},{number:"03",title:"공유하기",description:"제가 쓴 글을 다른 사람들과 공유해서 누군가에게 도움이 되는 글을 만들어가는 것이 목표입니다."}];return oe.jsxs("div",{className:"flex flex-col gap-8 max-w-5xl w-full mx-auto itemx-center, justify-center",children:[oe.jsxs("div",{className:"flex flex-col gap-2",children:[oe.jsx("span",{className:"text-emerald-400 text-sm font-medium tracking-wider uppercase",children:"First Value"}),oe.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-white",children:[oe.jsx("span",{className:"text-blue-500",children:"기록"}),"하기",oe.jsx("span",{className:"text-gray-500 text-2xl ml-3",children:"Feat. 복습"})]}),oe.jsx("p",{className:"text-gray-400 text-lg mt-2",children:"저에게 기록은 크게 3가지의 이유로 나뉩니다."})]}),oe.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:r.map(e=>oe.jsxs("div",{className:"group relative bg-[#13131a] border border-white/10 rounded-2xl p-8 min-h-[300px] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 overflow-hidden",children:[oe.jsx("span",{className:"absolute top-4 right-4 text-8xl font-bold text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none select-none",children:e.number}),oe.jsxs("div",{className:"relative z-10 flex flex-col h-full",children:[oe.jsx("h3",{className:"absolute top-10 left-6 text-2xl font-bold text-white group-hover:text-blue-300 transition-colors",children:e.title}),oe.jsx("p",{className:"absolute top-30 left-6 right-6 text-gray-300 text-lg leading-relaxed text-semibold",children:e.description})]})]},e.number))})]})}const ML=()=>{const r=[{number:"01",description:"1번의 해커톤 참여"},{number:"02",description:"2번의 부트캠프 참여"},{number:"03",description:"7번의 클론 코딩 완료"},{number:"04",description:"9번의 팀 및 개인 사이드 프로젝트 완료"}],[e,t]=Q.useState(0),[a,s]=Q.useState(!0),l=()=>{t(f=>(f+1)%r.length),s(!1),setTimeout(()=>s(!0),5e3)},c=()=>{t(f=>f===0?r.length-1:f-1),s(!1),setTimeout(()=>s(!0),5e3)};return Q.useEffect(()=>{if(!a)return;const f=setInterval(()=>{t(h=>(h+1)%r.length)},3e3);return()=>clearInterval(f)},[a,r.length]),oe.jsxs("div",{className:"flex flex-col gap-12 max-w-5xl w-full mx-auto items-center justify-center p-8",children:[oe.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[oe.jsx("span",{className:"text-yellow-400 text-sm font-medium tracking-wider uppercase",children:"Second Value"}),oe.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-white",children:[oe.jsx("span",{className:"text-red-400",children:"도전"}),"하기",oe.jsx("span",{className:"text-gray-500 text-2xl ml-3 font-normal",children:"Feat. 끈기"})]}),oe.jsxs("p",{className:"text-gray-400 text-lg mt-2",children:['"아무것도 하지 않으면'," ",oe.jsx("span",{className:"text-red-400 font-semibold",children:"아무일도"}),' 일어나지 않는다."']})]}),oe.jsxs("div",{className:"relative w-full max-w-4xl h-[400px] overflow-hidden",children:[oe.jsx("button",{onClick:c,className:"absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110","aria-label":"Previous slide",children:oe.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),oe.jsx("button",{onClick:l,className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110","aria-label":"Next slide",children:oe.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),oe.jsx("div",{className:"flex transition-transform duration-700 ease-in-out h-full",style:{transform:`translateX(-${e*100}%)`},children:r.map(f=>oe.jsx("div",{className:"min-w-full flex items-center justify-center px-6",children:oe.jsxs("div",{className:"group relative bg-[#13131a] border border-white/10 rounded-2xl p-12 w-full max-w-2xl hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 overflow-hidden",children:[oe.jsx("span",{className:"absolute top-4 right-4 text-9xl font-bold text-white/5 group-hover:text-red-500/10 transition-colors pointer-events-none select-none",children:f.number}),oe.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center h-full text-center",children:[oe.jsx("div",{className:"mb-6",children:oe.jsx("span",{className:"text-red-400 text-5xl font-bold",children:f.number})}),oe.jsx("p",{className:"text-gray-300 text-3xl md:text-4xl leading-relaxed font-semibold group-hover:text-white transition-colors",children:f.description}),oe.jsx("div",{className:"mt-8 w-20 h-1 bg-linear-to-r from-red-500 to-red-400 rounded-full group-hover:w-32 transition-all duration-300"})]}),oe.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",children:oe.jsx("div",{className:"absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent rounded-2xl"})})]})},f.number))}),oe.jsx("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20",children:r.map((f,h)=>oe.jsx("button",{onClick:()=>{t(h),s(!1),setTimeout(()=>s(!0),5e3)},className:`h-2 rounded-full transition-all duration-300 cursor-pointer ${h===e?"w-8 bg-red-400":"w-2 bg-white/30 hover:bg-white/50"}`,"aria-label":`Go to slide ${h+1}`},h))})]})]})};function EL(){const r=Q.useRef(null);return Q.useEffect(()=>{const e=r.current;if(!e)return;wi.set(e,{y:-50,opacity:0});const t=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(wi.to(e,{y:0,opacity:1,duration:.8,ease:"power2.out"}),t.unobserve(e))})},{threshold:.2,rootMargin:"0px"});return t.observe(e),()=>{t.disconnect()}},[]),oe.jsx("div",{className:"flex flex-col gap-12 max-w-5xl w-full mx-auto items-center justify-center p-8",children:oe.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[oe.jsx("span",{className:"text-pink-400 text-sm font-medium tracking-wider uppercase",children:"Third Value"}),oe.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-white",children:[oe.jsx("span",{className:"text-green-400",children:"팀워크"}),oe.jsx("span",{className:"text-gray-500 text-2xl ml-3 font-normal",children:"Feat. 소통"})]}),oe.jsx("p",{className:"text-gray-400 text-lg mt-2",children:"소통할때 내가 더 좋아진다."}),oe.jsxs("div",{ref:r,className:"text-lg",children:["부트캠프 수료후에도 좋은 분들과 지속적으로 공부하고 싶어서 디스코드 모임을 만들고",oe.jsx("br",{})," 서로 스터디 파트너로서 협력하며 새로운 최신 개발 트렌드, 코드리뷰, 개발 관련 스터디 등 다양한 주제를 공유하며 의견을 나누기도 합니다.",oe.jsx("br",{})," 이렇게 소통하면서 실무에서 활용할 수 있는 개발 역량과 협업 능력을 키워나가고 있습니다."]})]})})}function bL(){const r=Q.useRef(null),e=Q.useRef(null),t=Q.useRef(null),a=Q.useRef(null),s=Q.useRef(null),l=Q.useRef(null),c=Q.useRef(null),f=Q.useRef(null),[h,d]=Q.useState(!1),[m,_]=Q.useState(!1),[v,x]=Q.useState(.5),[E,M]=Q.useState(!1),[y,S]=Q.useState(!1),[R,C]=Q.useState(!0),D=()=>{if(h)return;d(!0);const T=r.current?.getBoundingClientRect();if(!T)return;const L=T.left+T.width/2,G=T.top+T.height/2,Y=(q,le)=>{if(!q)return;const ee=q.getBoundingClientRect(),I=ee.left+ee.width/2,H=ee.top+ee.height/2,J=L-I,_e=G-H;wi.to(q,{x:J,y:_e,scale:.1,opacity:0,rotation:360,duration:.8,delay:le,ease:"power2.in"})};Y(e.current,0),Y(t.current,.1),Y(a.current,.2),wi.to(s.current,{opacity:0,duration:.3,delay:.8}),setTimeout(()=>{_(!0)},1200)};Q.useEffect(()=>{if(h)return;const T=[];return e.current&&T.push(wi.to(e.current,{y:-15,rotation:3,duration:2.5,ease:"sine.inOut",repeat:-1,yoyo:!0})),t.current&&T.push(wi.to(t.current,{y:-12,rotation:-2,duration:3,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:.5})),a.current&&T.push(wi.to(a.current,{y:-18,rotation:-4,duration:2.8,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:.3})),()=>{T.forEach(L=>L.kill())}},[h]),Q.useEffect(()=>{if(r.current&&!h){const T=wi.timeline({repeat:-1,repeatDelay:1});return T.to(r.current,{rotation:8,duration:.15,ease:"sine.inOut"}).to(r.current,{rotation:-6,duration:.15,ease:"sine.inOut"}).to(r.current,{rotation:5,duration:.12,ease:"sine.inOut"}).to(r.current,{rotation:-3,duration:.12,ease:"sine.inOut"}).to(r.current,{rotation:2,duration:.1,ease:"sine.inOut"}).to(r.current,{rotation:0,duration:.15,ease:"sine.out"}),()=>{T.kill()}}},[h]),Q.useEffect(()=>{if(m&&l.current){const T=l.current,L=T.querySelector("img"),G=T.querySelector(".glow-ring"),Y=T.querySelectorAll(".sparkle");wi.timeline().fromTo(G,{scale:0,opacity:0},{scale:1.5,opacity:1,duration:.4,ease:"power2.out"}).to(G,{scale:1,duration:.2,ease:"power2.in"}).fromTo(L,{scale:0,rotation:-180,opacity:0},{scale:1,rotation:0,opacity:1,duration:.8,ease:"elastic.out(1, 0.5)"},"-=0.1").fromTo(Y,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,stagger:.05,ease:"back.out(2)"},"-=0.3").to(Y,{scale:0,opacity:0,duration:.4,stagger:.03},"+=0.2").to(G,{scale:1.2,opacity:.8,duration:1.5,ease:"sine.inOut",repeat:-1,yoyo:!0})}},[m]);const w=()=>{c.current&&(c.current.volume=v,c.current.play().then(()=>{S(!0)}).catch(()=>{S(!1)})),f.current&&wi.to(f.current,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{C(!1)}})};Q.useEffect(()=>{c.current&&(c.current.volume=E?0:v)},[v,E]);const P=T=>{const L=parseFloat(T.target.value);x(L),L>0&&E&&M(!1)},O=()=>{M(!E)},F=()=>{c.current&&(y?c.current.pause():c.current.play(),S(!y))};return oe.jsxs("main",{className:"h-screen w-full scroll-smooth",children:[oe.jsx("audio",{ref:c,src:"/audio/JackpotStrings.mp3",loop:!0}),oe.jsxs("section",{className:"relative h-screen flex flex-col items-center justify-center overflow-hidden",children:[oe.jsx(xL,{}),R&&oe.jsxs("div",{ref:f,onClick:w,className:"fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer",children:[oe.jsx("div",{className:"absolute w-40 h-40 rounded-full border-2 border-emerald-400/50 animate-ping"}),oe.jsx("div",{className:"absolute w-32 h-32 rounded-full border-2 border-violet-400/50 animate-ping",style:{animationDelay:"0.3s"}}),oe.jsx("div",{className:"relative w-24 h-24 rounded-full bg-linear-to-br from-emerald-500 to-violet-500 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-110 transition-transform",children:oe.jsx("svg",{className:"w-10 h-10 text-white ml-1",fill:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{d:"M8 5v14l11-7z"})})})]}),oe.jsxs("div",{className:"fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10",children:[oe.jsx("button",{onClick:F,className:"w-8 h-8 flex items-center justify-center text-white hover:text-emerald-400 transition-colors",children:y?oe.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{d:"M6 4h4v16H6V4zm8 0h4v16h-4V4z"})}):oe.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{d:"M8 5v14l11-7z"})})}),oe.jsx("button",{onClick:O,className:"w-8 h-8 flex items-center justify-center text-white hover:text-emerald-400 transition-colors",children:E||v===0?oe.jsxs("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):v<.5?oe.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})}):oe.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),oe.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:E?0:v,onChange:P,className:`w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-emerald-400
              [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(52,211,153,0.5)]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-3
              [&::-moz-range-thumb]:h-3
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-emerald-400
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer`}),oe.jsx("span",{children:" "})]}),oe.jsxs("div",{className:"flex flex-col items-center justify-center absolute top-[50px]",children:[oe.jsxs("div",{ref:s,className:"flex items-center gap-4",children:[oe.jsx("img",{ref:e,src:"/static/chip.png",alt:"Chip",className:"w-60"}),oe.jsx("img",{ref:t,src:"/static/highroller.png",alt:"HighRoller",className:"w-72 h-auto object-contain"}),oe.jsx("img",{ref:a,src:"/static/card.png",alt:"Card",className:"w-60"})]}),m?oe.jsxs("div",{ref:l,className:"relative flex items-center justify-center",children:[oe.jsx("div",{className:"glow-ring absolute w-96 h-96 rounded-full bg-gradient-radial from-emerald-500/60 via-violet-500/40 to-transparent blur-xl"}),[...Array(8)].map((T,L)=>oe.jsx("div",{className:"sparkle absolute w-4 h-4",style:{top:`${50+45*Math.sin(L*Math.PI*2/8)}%`,left:`${50+45*Math.cos(L*Math.PI*2/8)}%`,transform:"translate(-50%, -50%)"},children:oe.jsx("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-full h-full",children:oe.jsx("path",{d:"M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z",fill:L%2===0?"#8B5CF6":"#10B981"})})},L)),oe.jsx("img",{src:"/logo/highroller.png",alt:"HighRoller Result",className:"w-96 h-96 relative z-10"})]}):oe.jsxs("div",{className:"relative flex flex-col items-center",children:[!h&&oe.jsx("div",{className:"absolute -top-16 flex flex-col items-center animate-bounce",children:oe.jsx("svg",{className:"w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})}),!h&&oe.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:oe.jsx("div",{className:"w-80 h-80 rounded-full bg-linear-to-r from-violet-500/20 to-emerald-500/20 animate-ping"})}),oe.jsx("button",{ref:r,className:"cursor-pointer relative z-10 transition-transform hover:scale-105",onClick:D,children:h?oe.jsx("img",{src:"/static/openbox.png",alt:"OpenBox",className:"w-72 h-72"}):oe.jsx("img",{src:"/static/closebox.png",alt:"CloseBox",className:"w-72 h-72"})})]})]}),oe.jsx("div",{className:"absolute top-[620px] flex items-center justify-center",children:m&&oe.jsx(LM,{text:["Ready to Roll!","Winner Winner Chicken Dinner!"],textColors:["#52A077","#8B5CF6"],typingSpeed:75,pauseDuration:1500,showCursor:!0,cursorCharacter:"$",className:"text-4xl font-bold",style:{fontFamily:"'Pacifico', cursive"}})})]}),oe.jsx(SL,{}),oe.jsx("section",{className:"relative h-screen w-full flex items-center justify-center bg-[#0a0a0f]",children:oe.jsx(CR,{})}),oe.jsx("section",{className:"h-screen flex items-center justify-center bg-[#0a0a0f]  mx-auto w-full px-6",children:oe.jsx(yL,{})}),oe.jsx("section",{className:"h-screen flex items-center justify-center bg-[#0a0a0f] mx-auto w-full px-6",children:oe.jsx(ML,{})}),oe.jsx("section",{className:"h-screen flex items-center justify-center bg-[#0a0a0f] mx-auto w-full px-6",children:oe.jsx(EL,{})})]})}function TL(){return oe.jsx("div",{className:"",children:oe.jsx(wT,{children:oe.jsx(wy,{path:"/",element:oe.jsx(bL,{})})})})}U1.createRoot(document.getElementById("root")).render(oe.jsx(Q.StrictMode,{children:oe.jsx($T,{children:oe.jsx(TL,{})})}));
