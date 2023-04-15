import{_ as L,C as _,r as b,a as U,b as A,d as q,e as M,F as V,i as R,g as F,w as $,o as B,s as j,G as H,f as G}from"./index.esm2017.a234c0f0.js";/**
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
 */const J="type.googleapis.com/google.protobuf.Int64Value",W="type.googleapis.com/google.protobuf.UInt64Value";function N(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function y(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>y(t));if(typeof e=="function"||typeof e=="object")return N(e,t=>y(t));throw new Error("Data cannot be encoded in JSON: "+e)}function m(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case J:case W:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>m(t)):typeof e=="function"||typeof e=="object"?N(e,t=>m(t)):e}/**
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
 */const v="functions";/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends V{constructor(t,n,r){super(`${v}/${t}`,n||""),this.details=r}}function K(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function z(e,t){let n=K(e),r=n,i;try{const o=t&&t.error;if(o){const s=o.status;if(typeof s=="string"){if(!k[s])return new g("internal","internal");n=k[s],r=s}const c=o.message;typeof c=="string"&&(r=c),i=o.details,i!==void 0&&(i=m(i))}}catch{}return n==="ok"?null:new g(n,r,i)}/**
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
 */class Y{constructor(t,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:r}}}/**
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
 */const w="us-central1";function Q(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new g("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class X{constructor(t,n,r,i,o=w,s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new Y(n,r,i),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(o);this.customDomain=c.origin,this.region=w}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function Z(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function ee(e,t,n){return r=>ne(e,t,r,n||{})}async function te(e,t,n,r){n["Content-Type"]="application/json";let i;try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}function ne(e,t,n,r){const i=e._url(t);return re(e,i,n,r)}async function re(e,t,n,r){n=y(n);const i={data:n},o={},s=await e.contextProvider.getContext();s.authToken&&(o.Authorization="Bearer "+s.authToken),s.messagingToken&&(o["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=s.appCheckToken);const c=r.timeout||7e4,u=Q(c),d=await Promise.race([te(t,i,o,e.fetchImpl),u.promise,e.cancelAllRequests]);if(u.cancel(),!d)throw new g("cancelled","Firebase Functions instance was deleted.");const l=z(d.status,d.json);if(l)throw l;if(!d.json)throw new g("internal","Response is not valid JSON object.");let h=d.json.data;if(typeof h>"u"&&(h=d.json.result),typeof h>"u")throw new g("internal","Response is missing data field.");return{data:m(h)}}const P="@firebase/functions",S="0.9.4";/**
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
 */const ie="auth-internal",oe="app-check-internal",ae="messaging-internal";function se(e,t){const n=(r,{instanceIdentifier:i})=>{const o=r.getProvider("app").getImmediate(),s=r.getProvider(ie),c=r.getProvider(ae),u=r.getProvider(oe);return new X(o,s,c,u,i,e)};L(new _(v,n,"PUBLIC").setMultipleInstances(!0)),b(P,S,t),b(P,S,"esm2017")}/**
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
 */function ce(e=M(),t=w){const r=U(A(e),v).getImmediate({identifier:t}),i=q("functions");return i&&ue(r,...i),r}function ue(e,t,n){Z(A(e),t,n)}function E(e,t,n){return ee(A(e),t,n)}se(fetch.bind(self));/*!
 * paypal-js v5.1.6 (2023-03-27T20:51:02.623Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(n===null)return null;var r=O(e,t),i=n.cloneNode();if(delete i.dataset.uidAuto,Object.keys(i.dataset).length!==Object.keys(r.dataset).length)return null;var o=!0;return Object.keys(i.dataset).forEach(function(s){i.dataset[s]!==r.dataset[s]&&(o=!1)}),o?n:null}function de(e){var t=e.url,n=e.attributes,r=e.onSuccess,i=e.onError,o=O(t,n);o.onerror=i,o.onload=r,document.head.insertBefore(o,document.head.firstElementChild)}function fe(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),ge(e);var n=Object.keys(e).filter(function(o){return typeof e[o]<"u"&&e[o]!==null&&e[o]!==""}).reduce(function(o,s){var c=e[s].toString();return s.substring(0,5)==="data-"?o.dataAttributes[s]=c:o.queryParams[s]=c,o},{queryParams:{},dataAttributes:{}}),r=n.queryParams,i=n.dataAttributes;return{url:"".concat(t,"?").concat(he(r)),dataAttributes:i}}function he(e){var t="";return Object.keys(e).forEach(function(n){t.length!==0&&(t+="&"),t+=n+"="+e[n]}),t}function pe(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}function O(e,t){t===void 0&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach(function(r){n.setAttribute(r,t[r]),r==="data-csp-nonce"&&n.setAttribute("nonce",t["data-csp-nonce"])}),n}function ge(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",i="";return Array.isArray(t)?t.length>1?(r="*",i=t.toString()):r=t.toString():typeof t=="string"&&t.length>0?r=t:typeof n=="string"&&n.length>0&&(r="*",i=n),e["merchant-id"]=r,e["data-merchant-id"]=i,e}function me(e,t){if(t===void 0&&(t=D()),C(e,t),typeof document>"u")return t.resolve(null);var n=fe(e),r=n.url,i=n.dataAttributes,o=i["data-namespace"]||"paypal",s=T(o);return le(r,i)&&s?t.resolve(s):Ee({url:r,attributes:i},t).then(function(){var c=T(o);if(c)return c;throw new Error("The window.".concat(o," global variable is not available."))})}function Ee(e,t){t===void 0&&(t=D()),C(e,t);var n=e.url,r=e.attributes;if(typeof n!="string"||n.length===0)throw new Error("Invalid url.");if(typeof r<"u"&&typeof r!="object")throw new Error("Expected attributes to be an object.");return new t(function(i,o){if(typeof document>"u")return i();de({url:n,attributes:r,onSuccess:function(){return i()},onError:function(){var s=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then(function(c){return c.status===200&&o(s),c.text()}).then(function(c){var u=pe(c);o(new Error(u))}).catch(function(c){o(c)}):o(s)}})})}function D(){if(typeof Promise>"u")throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function T(e){return window[e]}function C(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}const a={app:void 0,auth:void 0,db:void 0,functions:void 0,loginAndPurchaseEl:void 0,use:{firebaseEmulator:!1,payPalSandbox:!1}};a.app=R({apiKey:"AIzaSyDKi6IOpooOPne-UnDaYBHCZqNrYznWCck",authDomain:"marekknows-74e3e.firebaseapp.com",projectId:"marekknows-74e3e",storageBucket:"marekknows-74e3e.appspot.com",messagingSenderId:"898037646323",appId:"1:898037646323:web:a8ae378668514efb584886"});a.auth=F(a.app);a.db=$(a.app);a.functions=ce(a.app);const ye=E(a.functions,"getPurchasedVideosAsync"),we=E(a.functions,"getVmkPriceAsync"),Ae=E(a.functions,"purchaseVmkAsync"),ve=E(a.functions,"handleOrderAsync"),I="marek.krzeminski@gmail.com";function be(){a.loginAndPurchaseEl=p({query:"#loginAndPurchase"}),B(a.auth,async n=>{const r=n!==null,i=await ke();f({root:a.loginAndPurchaseEl,query:"#loading",isVisible:!1}),f({root:a.loginAndPurchaseEl,query:"#loading2",isVisible:!1}),f({root:a.loginAndPurchaseEl,query:"button.signIn",isVisible:!r}),f({root:a.loginAndPurchaseEl,query:"button.signOut",isVisible:r}),f({root:a.loginAndPurchaseEl,query:"img.signIn",isVisible:!r}),f({root:a.loginAndPurchaseEl,query:"p.thanks",isVisible:r&&i});const o=r&&!i;if(f({root:a.loginAndPurchaseEl,query:"#loadingPayPal",isVisible:o}),f({root:a.loginAndPurchaseEl,query:"div.purchase",isVisible:o}),o)try{const s=await me({"client-id":a.use.payPalSandbox?"AUppZUwsxJGxzQZNQux6hKOOvkWU5a0wtAHSjN5-PdlDOFwjCHOMuG7IU3NWGyMzJEi-NVgQizMv5JN8":"ASBD3p3NO5SqJQR4hTYlWJkFnL1bD9Rv6t5FKu1aWUt9MOrICTGn8WwsdTm39F8JgBJERpW_fDglPrjx",currency:"USD"});if(s===null)throw new Error("paypal = null");const c=a.loginAndPurchaseEl.dataset.vmkSection;if(c===void 0)throw new Error("vmkSection = undefined");const u=await we({vmkSection:c});if(u.data.price){const l=p({root:a.loginAndPurchaseEl,query:"div.price .normal"});if(l.innerHTML=`$${u.data.price.toFixed(2)}`,u.data.salePrice&&u.data.salePrice>0&&u.data.salePrice<u.data.price){l.classList.add("onSale");const h=p({root:a.loginAndPurchaseEl,query:"div.price .sale"});h.innerHTML=`$${u.data.salePrice.toFixed(2)}`,h.style.display="inline"}}const d=s.Buttons&&s.Buttons({onInit:()=>{f({root:a.loginAndPurchaseEl,query:"#loadingPayPal",isVisible:!1})},createOrder:async()=>{const l=await Ae({isSandbox:a.use.payPalSandbox,vmkSection:c});return(l===void 0||l.data===void 0)&&alert(`Error creating order.  Please contact ${I} for help`),l.data.id},onApprove:async(l,h)=>{(await ve({isSandbox:a.use.payPalSandbox,orderId:l.orderID,vmkSection:c})).data.isPurchased&&setTimeout(()=>window.location.reload(),2e3)},onError:l=>{alert(`Error processing order. Try again, or please contact ${I} for help`),console.error(l)}});if(d===void 0)throw new Error("paypal.Buttons is undefined?");d.render("#payPalButton")}catch(s){console.error("failed to load the PayPal JS SDK script",s)}Pe(r&&i)}),p({root:a.loginAndPurchaseEl,query:"button.signIn"}).addEventListener("click",()=>j(a.auth,new H)),p({root:a.loginAndPurchaseEl,query:"button.signOut"}).addEventListener("click",()=>G(a.auth)),window.unlockVideo=Se}function p(e){const{root:t,query:n}=e,r=(t??document).querySelector(n);if(!(r instanceof HTMLElement))throw new TypeError(`Cannot find ${n}`);return r}async function ke(){const e=a.loginAndPurchaseEl.dataset.vmkSection;if(e===void 0||a.auth.currentUser===null)return!1;try{const t=await ye({vmkSection:e}),n=t.data.vmk!==void 0&&Object.keys(t.data.vmk).length>0;return n&&(a.vmk=t.data.vmk),n}catch(t){return console.error(t),!1}}function f(e){const{root:t,query:n,isVisible:r}=e,i=p({root:t,query:n});if(i===void 0)return;const o=n.startsWith("button")||i.classList.contains("purchase")?"flex":"block";i.style.display=r?o:"none"}function Pe(e){const t=document.querySelectorAll("div.card img.locked");for(const n of t)n instanceof HTMLImageElement&&(n.src=`/images/marekKnows/${e?"watch":"locked"}.png`)}function Se(e){if(a.auth.currentUser===null||a.vmk===void 0||a.vmk[e]===void 0){a.loginAndPurchaseEl.scrollIntoView({behavior:"smooth"});return}window.playYouTubeVideo(a.vmk[e])}const Te=document.querySelectorAll("div.card img.locked");Te.length>0&&be();
