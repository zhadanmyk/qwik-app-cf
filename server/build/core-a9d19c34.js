"use strict";function t(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})),e.default=t,Object.freeze(e)}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function e(t,n){n||(n=[]);for(const r of t)Array.isArray(r)?e(r,n):n.push(r);return n}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */const n=!1!==globalThis.qDev,r=void 0!==globalThis.describe,o=globalThis,i=[],s={};n&&(Object.freeze(i),Object.freeze(s));class u{constructor(t,e,n){this.type=t,this.props=e,this.key=n,e&&void 0!==e.children?Array.isArray(e.children)?this.children=e.children:this.children=[e.children]:this.children=i}}const c={};function l(t,n,...r){const o={children:arguments.length>2?e(r):i};let s,c;for(c in n)"key"==c?s=n[c]:o[c]=n[c];return new u(t,o,s)}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function a(t,e){if(n){if(null!=t)return;throw y(e||"Expected defined value.")}}function f(t,e,r){if(n){if(t!==e)return;throw y(r||`Expected '${t}' !== '${e}'.`)}}function d(t,e,r){if(n){if(t===e)return;throw y(r||`Expected '${t}' === '${e}'.`)}}function p(t,e,r){if(n){if(t>=e)return;throw y(r||`Expected '${t}' >= '${e}'.`)}}function h(t,e,r){if(n){if(t>e)return;throw y(r||`Expected '${t}' > '${e}'.`)}}function y(t){const e=new Error(t);return console.error(e),e}function g(t,e){return w(t)&&t.tagName.toUpperCase()==e.toUpperCase()}function m(t){return function(t){return g(t,"template")}(t)&&t.hasAttribute("q:slot")}function b(t){return w(t)&&t.hasAttribute("on:q-render")}function w(t){return!!t&&1===t.nodeType}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function _(t){return t&&9==t.nodeType}function E(t){return function(t){return t&&"number"==typeof t.nodeType}(t)&&8==t.nodeType}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function q(t,e){if(e instanceof Jt&&(a(e._serialized),e=Array.isArray(e._serialized)?e._serialized[0]:e._serialized),r){const t=function(t){if(!r)throw new Error("This should run in tests only!!!");if("string"==typeof t||t instanceof String){const e=t.split("?")[0];if(Gt){const t=Gt.get(e);if(t)return t}}return}(e);if(t)return Promise.resolve(t)}const n=t.ownerDocument;return x(n).importSymbol(t,e)}const A=e=>{let n,r;const o=new Map;return{importSymbol(e,n){const r=S(e.ownerDocument,e,n).toString(),i=function(t){const e=t.match(/#([^?]*).*$/);return(null==e?void 0:e[1])||"default"}(r),s=new URL(r);s.hash="",s.search="";const u=s.href+".js",c=o.get(u);return c?c[i]:(l=u,Promise.resolve().then((function(){return t(require(l))}))).then((t=>(o.set(u,t),t[i])));var l},queueRender:t=>(n||(n=new Promise(((r,o)=>e.defaultView.requestAnimationFrame((()=>{n=null,t(e).then(r,o)}))))),n),queueStoreFlush:t=>(r||(r=new Promise(((n,o)=>e.defaultView.requestAnimationFrame((()=>{r=null,t(e).then(n,o)}))))),r)}};function S(t,e,n){let r,o;if(void 0===n)e?(r=e.getAttribute("q:base"),o=S(t,e.parentNode&&e.parentNode.closest("[q\\:base]"))):r=t.baseURI;else{if(!n)throw new Error("INTERNAL ERROR");r=n,o=S(t,e.closest("[q\\:base]"))}return new URL(String(r),o)}const x=t=>{const e=_(t)?t:t.ownerDocument;return e[v]||(e[v]=A(e))},v=Symbol(),R=new Map;function C(t,e=!1){if("string"!=typeof t)return t;const n=R.get(t);if(null!=n)return n;let r="";for(let n=0;n<t.length;n++){const o=t.charAt(n);j(o)?r+=(0!=n||e?"-":"")+o.toLowerCase():r+=o}return R.set(t,r),r}function j(t){return"A"<=t&&t<="Z"}function O(t){const e=t.querySelector('script[type="qwik/json"]');let n=null;return e&&(e.parentElement.removeChild(e),n=JSON.parse(e.textContent||"{}"),function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const n=t[e];t[e]=Ct(n,e)}}(n),P(n,n)),n}function M(t){const e={};t.querySelectorAll("[q\\:obj]").forEach((t=>{const n=X(t).__qRefs__;t.qProps=void 0,a(n),n.forEach(((t,n)=>{e[n]=t.obj,N(t,new Set,((t,n)=>e[t]=n))}))}));const r=t.createElement("script");r.setAttribute("type","qwik/json"),r.textContent=JSON.stringify(e,(function(t,n){if(this===e)return n;if(t.startsWith("__"))return;const r=Mt(n);return r?Ut+r:n}),n?"  ":void 0),t.body.appendChild(r),function(t){t.__isHydrated__=void 0}(t)}function P(t,e){if(t&&"object"==typeof t)if(Array.isArray(t))for(let n=0;n<t.length;n++){const r=t[n];"string"==typeof r&&r.startsWith(Ut)?t[n]=e[r.substring(Ut.length)]:P(r,e)}else for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const r=t[n];"string"==typeof r&&r.startsWith(Ut)?t[n]=e[r.substring(Ut.length)]:P(r,e)}}function N(t,e,n){if(t&&"object"==typeof t){if(e.has(t))return;if(e.add(t),Array.isArray(t))for(let r=0;r<t.length;r++)N(t[r],e,n);else for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const o=t[r],i=Mt(o);i&&n(i,o),N(o,e,n)}}}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function k(t){let e="<"+t.tagName.toLowerCase();const n=t.attributes,r=[];for(let t=0;t<n.length;t++)r.push(n[t].name);r.sort();for(let n=0;n<r.length;n++){const o=r[n];let i=t.getAttribute(o);(null==i?void 0:i.startsWith("file:/"))&&(i=i.replace(/(file:\/\/).*(\/.*)$/,((t,e,n)=>e+"..."+n))),e+=" "+o+(null==i||""==i?"":"='"+i.replace("'","&apos;")+"'")}return e+">"}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function T(t,...e){if(n){const n=function(t){const e={0:"ERROR",1:"QRL-ERROR",2:"INJECTOR-ERROR",3:"SERVICE-ERROR",4:"COMPONENT-ERROR",5:"PROVIDER-ERROR",6:"RENDER-ERROR",7:"EVENT-ERROR"}[Math.floor(t/100)],n={1:"QConfig not found in path '{}'.",2:"Unrecognized stack format '{}'",3:"Could not find entity state '{}' at '{}' or any of it's parents.",4:"Could not find entity state '{}' ( or entity provider '{}') at '{}' or any of it's parents.",5:"Missing property '{}' in props '{}'.",6:"Missing export '{}' from '{}'. Exported symbols are: {}",100:"QRL '${}' should point to function, was '{}'.",200:"Can't find host element above '{}'.",201:"Provider is expecting '{}' but got '{}'.",202:"Expected 'Element' was '{}'.",203:"Expected injection 'this' to be of type '{}', but was of type '{}'.",204:"Entity key '{}' is found on '{}' but does not contain state. Was 'serializeState()' not run during dehydration?",206:"No injector can be found starting at '{}'.",207:"EventInjector does not support serialization.",300:"Data key '{}' is not a valid key.\n  - Data key can only contain characters (preferably lowercase) or number\n  - Data key is prefixed with entity name\n  - Data key is made up from parts that are separated with ':'.",301:"A entity with key '{}' already exists.",303:"'{}' is not a valid attribute. Attributes can only contain 'a-z' (lowercase), '0-9', '-' and '_'.",304:"Found '{}' but expando did not have entity and attribute did not have state.",305:"Element '{}' is missing entity attribute definition '{}'.",306:"Unable to create state for entity '{}' with props '{}' because no state found and '$newState()' method was not defined on entity.",307:"'{}' is not an instance of 'Entity'.",308:"'{}' overrides 'constructor' property preventing 'EntityType' retrieval.",311:"Entity '{}' does not define '$keyProps'.",310:"Entity '{}' must have static '$type' property defining the name of the entity.",312:"Entity '{}' must have static '$qrl' property defining the import location of the entity.",313:"Name collision. Already have entity named '{}' with QRL '{}' but expected QRL '{}'.",309:"Entity key '{}' is missing values. Expecting '{}:someValue'.",314:"Entity '{}' defines '$keyProps' as  '{}'. Actual key '{}' has more parts than entity defines.",315:"Key '{}' belongs to entity named '{}', but expected entity '{}' with name '{}'.",316:"Entity state is missing '$key'. Are you sure you passed in state? Got '{}'.",400:"'bind:' must have an key. (Example: 'bind:key=\"propertyName\"').",401:"'bind:id' must have a property name. (Example: 'bind:key=\"propertyName\"').",402:"Can't find state on host element.",403:"Components must be instantiated inside an injection context. Use '{}.new(...)' for creation.",404:"Property '{}' not found in '{}' on component '{}'.",405:"Unable to find '{}' component.",406:"Requesting component type '{}' does not match existing component instance '{}'.",408:"Unable to create state for component '{}' with props '{}' because no state found and '$newState()' method was not defined on component.",500:"Unrecognized expression format '{}'.",600:"Unexpected JSXNode<{}> type.",601:"Value '{}' can't be written into '{}' attribute.",602:"Expecting entity object, got '{}'.",603:"Expecting array of entities, got '{}'.",604:"Expecting Entity or Component got '{}'.",699:"Render state machine did not advance.",700:"Missing '$type' attribute in the '{}' url.",701:"Re-emitting event '{}' but no listener found at '{}' or any of its parents."}[t];let r="000"+t;return r=r.substr(r.length-3),`${e}(Q-${r}): ${n}`}(t),r=n.split("{}"),o=r.map(((t,n)=>t+(n===r.length-1?"":function(t){return null==t?String(t):"function"==typeof t?t.name:w(t)?k(t):t instanceof URL?String(t):"object"==typeof t?JSON.stringify(t,(function(t,e){return w(e)?k(e):e})):String(t)}(e[n])))).join("");return new Error(o)}return new Error("QError "+t)}function D(t,e){const n=[];e.forEach(((t,e)=>{t.isSub&&(e="!"+e),1==t.count?n.push(e):n.push("#"+t.count,e)})),n.length?t.setAttribute("q:obj",n.join(" ")):t.removeAttribute("q:obj")}function $(t,e,n,r,o,i){a(e);let s=t.get(e);return n?(!function(t,e){f(Tt(t),t,"Expected Proxy"),t[kt]=e}(n,r.ownerDocument),s?(s.count+=i,s.isSub=s.isSub||o):t.set(e,s={obj:n,count:i,isSub:o})):s&&(s=L(s,t,e)),s}function L(t,e,n){if(t.count--,0!=t.count)return t;e.delete(n)}function z(t){const e=t.ownerDocument;if(!e.__isHydrated__){e.__isHydrated__=!0;const n=O(t.ownerDocument);n&&e.querySelectorAll(U).forEach((t=>{!function(t,e){const n=W(t),r=t.getAttribute("q:obj");if(r){const o=r.split(" "),i=n.__qRefs__;let s=1;o.forEach((n=>{if(n.startsWith("#"))s=Number(n.substr(1));else{let r=!1;n.startsWith("!")&&(n=n.substr(1),r=!0);const o=e[n];$(i,n,o,t,r,s)}}))}}(t,n)}))}}const U="[q\\:obj]";function W(t){const e=new Map,n=function(t,e){return{forEach:t=>e.forEach(((e,n)=>{t(e.obj,n)})),get(t){const n=e.get(t);return null==n?void 0:n.obj},set(n,r){$(e,n,r,t,!1,1),D(t,e)}}}(t,e),r={__element__:t,__qRefs__:e,__qMap__:n,__mutation__:!1};return t.qProps=new Proxy(r,{get:(e,o)=>{if("string"==typeof o){if("__mutation__"===o){const t=e.__mutation__;return e.__mutation__=!1,t}if("__parent__"==o){const e=t.parentElement;return e&&X(e)}return o.startsWith("on:")?function(t,e,n){const r=I(t,e,n);return 0===r.length?null:e=>Promise.all(r.map((async n=>{const r=await q(t.__element__,n),o=t.__element__,i=Array.isArray(n._serialized)?n._serialized[0]:n._serialized,s=new URL(i,o.ownerDocument.baseURI);return{state:n.getState(),value:await r(o,e,s)}})))}(r,n,o):o in r?e[o]:o.startsWith("state:")?r[o]=function(t,e){let n=null;return e+=Rt,t.forEach(((t,r)=>{r.startsWith(e)&&(n=t)})),n}(n,o.substr("state:".length)):r[o]=H(t,n,o)}},set:(o,i,s)=>{if("string"==typeof i){if("children"===i)return!0;if(i.startsWith("state:")){const t=Mt(s);a(t),d(t.startsWith(i.substr("state:".length)),!0),n.set(t,o[i]=s)}else if(i.startsWith("on:"))!function(t,e,n,r){if(!r)return;("string"==typeof r||r instanceof String)&&(r=Xt(r,void 0));if(!(r instanceof Jt))throw new Error(`Not QRL: prop: ${n}; value: `+r);{const o=I(t,e,n);let i=!1;for(let t=0;t<o.length;t++){if(Q(o[t],r)){i=!0,F(o,e,t,r);break}}i||F(o,e,o.length,r);const s="on:"+C(n.substr("on:".length));t.__element__.setAttribute(s,function(t){return t.map((t=>(a(t._serialized),t._serialized))).join("\n")}(o))}}(r,n,i,s);else if(":subscriptions"===i)!function(t,e,n){e.forEach(((r,o)=>{const i=r.obj;n.has(r.obj)?r.isSub||$(e,Mt(i),i,t,!0,1):r.isSub&&(r.isSub=!1,L(r,e,o)),n.delete(i)})),n.forEach((n=>$(e,Mt(n),n,t,!0,1))),D(t,e)}(t,e,s);else{s=Dt(s);const e=i in o?o[i]:o[i]=H(t,n,i);if(s!==e){const r=Mt(e);r&&n.set(r,null),function(t,e,n,r){const o=C(n);if("class"==n)t.setAttribute("class",V(r,!0));else if("style"==n)t.setAttribute("style",V(r,!1));else if("innerHTML"===n||"innerText"===n)t.setAttribute(o,""),t[n]=r;else{const n=Wt(r,e);void 0===r?t.removeAttribute(o):t.setAttribute(o,n)}"value"!=n&&"checked"!=n||"INPUT"!==t.tagName||(t[n]=r)}(t,n,i,o[i]=s),o.__mutation__=!0}}return!0}throw new Error("Only string keys are supported")}})}function H(t,e,n){if(n.startsWith("on:")){const r=C(n.substr(3)),o=t.getAttribute(r),i=[];return null==o||o.split("\n").forEach((t=>{i.push(Xt(t,e))})),i}{const r=C(n),o=t.getAttribute(r);return null===o?void 0:Ht(o,e)}}function I(t,e,n){if(n in t)return t[n];const r="on:"+C(n.substr("on:".length)),o=[];return(t.__element__.getAttribute(r)||"").split("\n").forEach((t=>{t&&o.push(Xt(t,e))})),t[n]=o}function Q(t,e){return t.url==e.url&&t.symbol==e.symbol&&t.getState()==e.getState()}function F(t,e,n,r){const o=n<t.length?t[n]:null;o&&Array.isArray(o._serialized)&&o._serialized.forEach(((t,n)=>{n&&e.set(t,null)})),Bt(r,e),t[n]=r}function J(t){return t.__mutation__}function V(t,e){if(null==t)return"";if("object"==typeof t){let n="",r="";if(Array.isArray(t)){if(!e)throw T(601,t,"style");for(let e=0;e<t.length;e++)n+=r+t[e],r=" "}else for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const i=t[o];n+=e?i?r+o:"":r+o+":"+i,r=e?" ":";"}return n}return String(t)}function X(t){z(t);let e=t.qProps;return e||(e=W(t)),e}function B(t,e,n){const r=function(t,e){return function(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}(t,e,1)}(t,e);if(r>=0)return t[1|r];if(n){const o=n();return function(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(1===o)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){const e=o-2;t[o]=t[e],o--}t[e]=n,t[e+1]=r}}(t,~r,e,o),o}}function G(t){return Array.isArray(t)}function K(t){const e=[],n=t.hostElement,r=n.firstElementChild;var o;g(o=r,"template")&&o.hasAttribute("q:slot")&&Z(e,r.content,null);const i=[];return n.querySelectorAll("Q\\:SLOT").forEach((t=>{for(const e of i)if(e.contains(t))return;i.push(t);const n=t.getAttribute("name")||"";Z(e,t,n)})),e}function Z(t,e,n){Y=e;let r=e.firstChild;for(null!==n&&B(t,n,tt);r;){B(t,null!==n?n:w(r)&&r.getAttribute("q:slot")||"",tt).push(r),r=r.nextSibling}Y=void 0}let Y;function tt(){return[-1,Y]}function et(t){let e=t.firstChild;return e&&10===e.nodeType&&(e=e.nextSibling),nt(t,e,null)}function nt(t,e,n){return{parent:t,node:e,end:n}}function rt(t){const e=t.node;return t.end==e?null:e}function ot(t,e){t.node=t.end==e?null:e}function it(t,e,n,r,o){let i=rt(t);return f(i,void 0,"Cursor already closed"),G(i)?(a(t.parent),function(t,e,n,r,o,i,s){const u=i["q:slot"]||"",c=B(e,u);let l;if(c){p(c.length,2);const t=c[1];let e=c[0];-1==e&&(e=2),l=c.length>e?c[e]:null;const u=st(t,l,n,r,o,i,s);l!==u&&(c[e]=u,l=u),c[0]=e+1}else{l=st(at(t).content,null,n,r,o,i,!0),a(l)}return ut(l,!!s)}(t.parent,i,t.end,e,n,r,o)):(f(i,void 0,"Cursor already closed"),i=st(t.parent,i,t.end,e,n,r,o),a(i),ot(t,i.nextSibling),ut(i,!!o))}function st(t,e,n,r,o,i,s){let u,c;if(g(e,o)){const t=X(e);Object.assign(t,i),u=J(t)&&!!s,c=e}else c=dt(t,e,(_(t)?t:t.ownerDocument).createElement(o),n),u=!!s,Object.assign(X(c),i);if(r&&r.styleClass&&c.classList.add(r.styleClass),u){const t=wt(c);t.styleHostClass&&c.classList.add(t.styleHostClass),Array.isArray(s)?s.push(t.render()):c.getAttribute("on:q-render")&&c.setAttribute("on:q-render-notify","")}return c}function ut(t,e){return a(t),e?nt(t,K(wt(t)),null):et(t)}function ct(t,e,n,r){return e&&3==e.nodeType?e.textContent!==r&&(e.textContent=r):e=dt(t,e,t.ownerDocument.createTextNode(r),n),e}function lt(t){let e=rt(t);if(G(e))for(let t=0;t<e.length;t+=2){const n=e[t+1];if(-1!==n[0]){h(n[0],1);for(let t=n[0];t<n.length;t++)n[1].removeChild(n[t])}}else for(;e;){const n=e.nextSibling;t.parent.removeChild(e),e=n}ot(t,void 0)}function at(t){d(b(t),!0,"Must be component element");let e=null==t?void 0:t.firstElementChild;return g(e,"template")&&e.hasAttribute("q:slot")||(e=t.insertBefore(t.ownerDocument.createElement("template"),e),e.setAttribute("q:slot","")),e}function ft(t){const e=rt(t);d(E(e)&&e.textContent.startsWith("<node:"),!0),ot(t,e&&e.nextSibling)}function dt(t,e,n,r){return t.insertBefore(n,e||r),e&&t.removeChild(e),n}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function pt(t){return Promise.all(t).then((t=>{const n=e(t);for(let t=0;t<n.length;t++)if(ht(n[t]))return pt(n);return n}))}function ht(t){return t instanceof Promise}
/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */const yt={__brand__:"host"},gt={__brand__:"slot"};function mt(t,e,r,o){if((t=>{if(n){if(t instanceof u)return!0;if(t&&"object"==typeof t&&t.constructor.name===u.name)throw new Error('Duplicate implementations of "JSXNodeImpl" found');return!1}return t instanceof u})(o)){const n=o.type;if(null==n)return;if("string"==typeof n)!function(t,e,n,r){const o=r.type,s="on:q-render"in r.props,u=it(n,t,o,r.props,s?e:null);if(function(t){return"innerHTML"in t.props||"innerText"in t.props}(r)){if(s)throw new Error("innerHTML/innerText bindings not supported on component content")}else{const n=r.children||i;for(const r of n)mt(t,e,u,r);lt(u)}}(t,e,r,o);else if(n===c||null==n){const n=o.children||i;for(const o of n)mt(t,e,r,o)}else if(o.type===yt){const n=X(r.parent);Object.assign(n,o.props);const s=o.children||i;for(const n of s)mt(t,e,r,n);J(n)}else if(o.type===gt)t&&function(t,e,n,r){const o=r.props.name||"",i=it(n,t,"Q:SLOT",Object.assign({name:o},r.props),null),s=B(K(t),o);if(s&&s.length>2){const t=i.parent;if(s[1]!==t){lt(i);for(let e=2;e<s.length;e++){const n=s[e];t.appendChild(n)}lt(i)}t.querySelectorAll("[on\\:q-render-notify]").forEach((t=>{e.push(wt(t).render())}))}else{const n=r.children;for(const r of n)mt(t,e,i,r);lt(i)}}(t,e,r,o);else{if("function"!=typeof o.type)throw T(600,n);mt(t,e,r,o.type(o.props))}}else if(ht(o)){const n=function(t){var e;let n=rt(t);if(G(n))throw new Error("Not expecting slot map here");if(E(n)&&(null===(e=n.textContent)||void 0===e?void 0:e.startsWith("<node:")))throw new Error("IMPLEMENT");{const e=Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),r=t.parent,o=r.ownerDocument,i=o.createComment("<node:"+e+">"),s=o.createComment("</node:"+e+">");return n=dt(t.parent,n,s,null),t.parent.insertBefore(i,s),ot(t,s.nextSibling),nt(r,i,s)}}(r),i=r=>{ft(n),mt(t,e,n,r),lt(n)};if(o.then(i,i),o.whilePending){const r=function(t){return nt(t.parent,t.node,t.end)}(n);ft(r),mt(t,e,r,o.whilePending),lt(r)}}else if(Array.isArray(o)){const n=o;for(const o of n)mt(t,e,r,o)}else"string"!=typeof o&&"number"!=typeof o||function(t,e){let n=rt(t);if(f(n,void 0,"Cursor already closed"),a(t.parent),G(n)){let r,o;const i=B(n,"");if(i){p(i.length,2),r=i[1];let s=i[0];-1==s&&(s=2),o=i.length>s?i[s]:null,n=ct(r,o,t.end,e),o!==n&&(i[s]=n),i[0]=s+1}else ct(at(t.parent).content,null,t.end,e)}else n=ct(t.parent,n,t.end,e),ot(t,n.nextSibling)}(r,String(o))}class bt{constructor(t){this.styleId=null,this.styleClass=null,this.styleHostClass=null,this.hostElement=t;const e=this.styleId=Yt(t.getAttribute("q:sstyle"));e&&(this.styleHostClass=te(e),this.styleClass=ee(e))}dehydrate(){throw new Error("Method not implemented.")}async render(){const t=X(this.hostElement);if(null==t["state:"])try{const e=t["q:sstyle"],n=t["q:ustyle"];_t(this,e),_t(this,n);const r=t["on:qMount"];if(r){(await r("qMount")).forEach((e=>{t["state:"+e.state]=function(t,e){const n=Mt(t);return n?(t[Nt]=e+Rt+n,t):Pt(t,e+Rt+zt())}(e.value,e.state)}))}}catch(t){console.log(t)}const e=t["on:qRender"];a(e),this.hostElement.removeAttribute("on:q-render-notify");const n=[];try{const t=await e("qRender");if(t.length){const e=t[0].value,r=function(t){d(b(t),!0);let e=t.firstChild;return m(e)&&(e=e.nextSibling),nt(t,e,null)}(this.hostElement);mt(this,n,r,e),lt(r)}}catch(t){console.log(t)}return[this.hostElement,...await pt(n)]}}function wt(t){const e=t;let n=e.__qComponent__;return n||(n=e.__qComponent__=new bt(t)),n}function _t(t,e){if(e){const n=Yt(e),r=t.hostElement,o=r.ownerDocument,i=o.querySelector("head");if(!i.querySelector(`style[q\\:style="${n}"]`)){Promise.resolve(q(r,e)).then((t=>{const e=o.createElement("style");e.setAttribute("q:style",n),e.textContent=t.replace(/�/g,n),i.appendChild(e)}))}}}function Et(t){return a(t.getAttribute("on:q-render")),t.setAttribute("on:q-render-notify",""),e=t.ownerDocument,x(e).queueRender(qt);var e}async function qt(t){const e=Array.from(t.querySelectorAll("[on\\:q-render-notify]"));return Promise.all(e.map((t=>{t.removeAttribute("on:q-render-notify");const e=wt(t);return e&&e.render()})))}let At,St,xt,vt;const Rt=":";function Ct(t,e){return Pt(t,e)}function jt(t,e){e&&e.querySelectorAll(function(t){return"[q\\:obj*="+(function(t){t&&"string"!=typeof t&&a(t=Mt(t));return-1!==t.indexOf(Rt)}(t=t.replace(/([^\w\d])/g,((t,e)=>"\\"+e)))?"":"\\!")+t+"]"}(t)).forEach(Et)}function Ot(t){const e=Lt.get(t);a(e),function(t){f(Tt(t),t,"Expecting Proxy"),vt&&t&&vt.add(t)}(e)}function Mt(t){return t&&"object"==typeof t&&t[Nt]||null}function Pt(t,e){if(!t||"object"!=typeof t)return t;let n=Lt.get(t);return n||(n=new Proxy(t,new $t(e)),Lt.set(t,n),n)}const Nt=":id:",kt=":doc:";function Tt(t){if(t&&"object"==typeof t){const e=t[":target:"];if(e)return e}return t}function Dt(t){if(t&&"object"==typeof t){if(Tt(t)!==t)return t;const e=Lt.get(t);return e||Pt(t,zt())}return t}class $t{constructor(t){this.doc=null,this.transients=null,this.id=t}get(t,e){if(":target:"===e)return t;if(e===Nt)return this.id;if(":transients:"===e)return this.transients||(this.transients=new WeakMap);const n=t[e];return Ot(t),Dt(n)}set(t,e,n){if(e===kt)this.doc=n;else if(e==Nt)this.id=n;else{const r=Tt(n);t[e]!==r&&(t[e]=r,jt(this.id,this.doc))}return!0}has(t,e){return":target:"===e||Object.prototype.hasOwnProperty.call(t,e)}ownKeys(t){return Object.getOwnPropertyNames(t)}}const Lt=new WeakMap;function zt(){return Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36)}const Ut="";function Wt(t,e){if(null==t)return String(t);if("number"==typeof t)return String(t);if("boolean"==typeof t)return String(t);const n=Mt(t);if(n)return e&&e.set(n,t),"*"+n;if("string"==typeof t){const e=t.charCodeAt(0);return It(e)||Ft(e)||Qt(e)||function(t){return"null"===t||"undefined"===t||"true"==t||"false"==t}(t)||function(t){return-1!=t.indexOf("'")||-1!=t.indexOf("\\")}(t)?"'"+t.replace(/'/g,"\\'").replace(/\//g,"\\")+"'":t}return JSON.stringify(t,(function(t,n){const r=Mt(n);return r?(a(e),e&&e.set(r,n),Ut+r):n}))}function Ht(t,e){if(""==t)return"";if("null"==t)return null;if("undefined"==t)return;if("false"==t)return!1;if("true"==t)return!0;const n=t.charCodeAt(0);if(Ft(n)||It(n))return Number(t);if(function(t){return t=="*".charCodeAt(0)}(n)){const n=t.substr(1);if(!e)throw new Error("Map needs to be present when parsing QObjects");const r=e.get(n);return a(r),r}return function(t){return t=="'".charCodeAt(0)}(n)?t.substring(1,t.length-1).replace(/\\(.)/,(t=>t)):Qt(n)?JSON.parse(t,(function(t,n){if("string"==typeof n&&function(t){return t==Ut.charCodeAt(0)}(n.charCodeAt(0))){if(!e)throw new Error("Map needs to be present when parsing QObjects");a(n=e.get(n.substr(1)))}return n})):t}function It(t){return t=="-".charCodeAt(0)}function Qt(t){return t=="[".charCodeAt(0)||t=="{".charCodeAt(0)}function Ft(t){return"0".charCodeAt(0)<=t&&t<="9".charCodeAt(0)}class Jt{constructor(t,e,n){this._serialized=null,this.args=null,this.url=t,this.symbol=e,this.args=n}get(t){return this.args&&this.args[t]||null}getState(){return this.args&&this.args[Vt]||""}with(t){const e=(n=this).args?Object.assign({},n.args):{};var n;return Object.assign(e,t),new Jt(this.url,this.symbol,e)}toString(){return Bt(this)}}const Vt=".";function Xt(t,e){a(t);const n=String(t);let r=n.indexOf("#");-1==r&&(r=n.length);const o=n.substring(0,r),i=new URL(n.substr(r+1),"http://q/"),s=i.pathname.substr(1),u={},c=e&&function(t){const e={items:null,get:n=>((e.items||(e.items=[])).push(n),t.get(n)),set(n,r){(e.items||(e.items=[])).push(n),t.set(n,r)}};return e}(e);i.searchParams.forEach(((t,e)=>{u[e]=Ht(t,c)}));const l=new Jt(o,s,u);return l._serialized=c&&c.items?[n,...c.items]:n,l}function Bt(t,e){const n=new URL(t.symbol,"http://q/");if(t.args)for(const r in t.args)if(Object.prototype.hasOwnProperty.call(t.args,r)){const o=Wt(t.args[r],e);n.searchParams.set(r,o)}const r=n.toString().substr("http://q/".length),o=t.url+(r?"#"+r:"");return t._serialized=o,o}let Gt,Kt;function Zt(t){return Bt(Xt(String(this)).with(t))}function Yt(t){return t&&String(function(t,e=0){if(0===t.length)return e;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return Number(Math.abs(e)).toString(36)}(String(t)))}function te(t){return t&&"📦"+t}function ee(t){return t&&"🏷️"+t}const ne=new Map;const re=/\(\s*(['"])([^\1]+)\1\s*\)/,oe=/Promise\s*\.\s*resolve/,ie=/[\\/(]([\w\d.\-_]+)\.(js|ts)x?:/;exports.Fragment=c,exports.Host=yt,exports.h=l,exports.jsx=function(t,e,n){return new u(t,e,n)},exports.qComponent=function({onRender:t,styles:e,unscopedStyles:n,tagName:r,props:o,onResume:i,onMount:s,onUnmount:u,onHydrate:c,onDehydrate:a}){const f=function(i){return l(r||"div",Object.assign(Object.assign({"on:q-mount":s,"on:q-render":t,"on:q-unmount":u,"on:q-hydrate":c,"on:q-dehydrate":a,"q:sstyle":e,"q:ustyle":n},o),i))};f.onRender=t||null,f.onResume=i||null,f.onMount=s||null,f.onUnmount=u||null,f.onHydrate=c||null,f.onDehydrate=a||null,f.styles=e||null;const d=Yt(e);return f.styleHostClass=te(d)||null,f.styleClass=ee(d)||null,f},exports.qDehydrate=function(t){M(t)},exports.qHook=function(t,e){if("string"==typeof e){let n;if(ne.set(e,t),(n=String(t).match(re))&&n[2])t=n[2];else{if(!(n=String(t).match(oe)))throw new Error("dynamic import not found: "+String(t));n=new Error("SELF").stack.split("\n")[2].match(ie),t=n?n[1]:"main"}t=(t.startsWith(".")?"":"./")+(t.endsWith(".js")?t.substr(0,t.length-3):t)+"#"+e}if("string"==typeof t)return Xt(t);const n=async(e,n,r)=>{const o=function(t){for(;t&&!t.getAttribute("on:q-render");)t=t.parentElement;return t}("string"==typeof n?e:e.parentElement),i=o&&X(o),s=i&&Xt(r.toString(),i.__qMap__),u=i&&s&&i["state:"+s.getState()],c=s&&s.args;return await function(t,e,n,r){const o="qRender"===n;try{return At=e,St=n,xt=r,o&&(vt=new Set),t()}finally{At=void 0,St=void 0,xt=void 0,vt&&(e&&(X(e)[":subscriptions"]=vt),vt=void 0)}}((()=>t(i,u,c)),o,n,r)};return r?function(t,e){if(!r)throw new Error("This should run in tests only!!!");Gt||(Gt=new Map,Kt=0);const n=e.stack.split("\n")[2];let i=Gt.get(n);if(!i){const e="symbol_"+Kt++;i="/qMockModule#"+e,Gt.set(i,t),Gt.set(n,i),(o["/qMockModule.js"]||(o["/qMockModule.js"]={}))[e]=t}return i=new String(i),i.with=Zt,i}(n,new Error):n},exports.qHookMap=ne,exports.qNotifyRender=Et,exports.qObject=function(t){return function(t){d(Tt(t),t,"Unexpected proxy at this location");const e=Pt(t,zt());return Object.assign(e,t),e}(t)},exports.qRender=async function(t,e){const n=[];let r=t.firstChild;for(;r&&r.nodeType>8;)r=r.nextSibling;return mt(null,n,et(t),e),pt(n)},exports.setPlatform=(t,e)=>t[v]=e,exports.useEvent=function(t){var e;return a(St,"Invoking of `useEvent()` outside of `use*()` context."),t&&d(St.type,"function"==typeof(e=t)&&"string"==typeof e.type?t.type:t),St},exports.useHostElement=function(){return a(At,"Invoking of `useHostElement()` outside of `use*()` context."),At};