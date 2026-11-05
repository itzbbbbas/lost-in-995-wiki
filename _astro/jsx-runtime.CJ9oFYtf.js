import{g as R}from"./index.CuJDCyoJ.js";function c(o,u){for(var n=0;n<u.length;n++){const t=u[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in o)){const e=Object.getOwnPropertyDescriptor(t,r);e&&Object.defineProperty(o,r,e.get?e:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function d(){if(l)return s;l=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function n(t,r,e){var i=null;if(e!==void 0&&(i=""+e),r.key!==void 0&&(i=""+r.key),"key"in r){e={};for(var a in r)a!=="key"&&(e[a]=r[a])}else e=r;return r=e.ref,{$$typeof:o,type:t,key:i,ref:r!==void 0?r:null,props:e}}return s.Fragment=u,s.jsx=n,s.jsxs=n,s}var x;function v(){return x||(x=1,f.exports=d()),f.exports}var p=v();const j=R(p),_=c({__proto__:null,default:j},[p]);export{_ as J,p as j};
