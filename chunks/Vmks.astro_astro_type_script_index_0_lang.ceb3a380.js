/**
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
 */const fr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},uo=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=s>>2,g=(s&3)<<4|a>>4;let _=(a&15)<<2|l>>6,C=l&63;c||(C=64,o||(_=64)),i.push(n[u],n[g],n[_],n[C])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||g==null)throw Error();const _=s<<2|a>>4;if(i.push(_),l!==64){const C=a<<4&240|l>>2;if(i.push(C),g!==64){const L=l<<6&192|g;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fo=function(t){const e=fr(t);return pr.encodeByteArray(e,!0)},ct=function(t){return fo(t).replace(/\./g,"")},gr=function(t){try{return pr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function po(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function go(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yo(){const t=k();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vo(){try{return typeof indexedDB=="object"}catch{return!1}}function _o(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Io(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Eo=()=>Io().__FIREBASE_DEFAULTS__,wo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},To=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gr(t[1]);return e&&JSON.parse(e)},On=()=>{try{return Eo()||wo()||To()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mr=t=>{var e,n;return(n=(e=On())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yr=t=>{const e=mr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},bo=()=>{var t;return(t=On())===null||t===void 0?void 0:t.config},vr=t=>{var e;return(e=On())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function So(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ct(JSON.stringify(n)),ct(JSON.stringify(o)),a].join(".")}/**
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
 */const ko="FirebaseError";class $ extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ko,Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Be.prototype.create)}}class Be{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Co(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $(r,a,i)}}function Co(t,e){return t.replace(Ro,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Ro=/\{\$([^}]+)}/g;function Do(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(wi(s)&&wi(o)){if(!lt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function wi(t){return t!==null&&typeof t=="object"}/**
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
 */function je(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Oo(t,e){const n=new Po(t,e);return n.subscribe.bind(n)}class Po{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");No(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Jt),r.error===void 0&&(r.error=Jt),r.complete===void 0&&(r.complete=Jt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function No(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jt(){}/**
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
 */function M(t){return t&&t._delegate?t._delegate:t}class te{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const re="[DEFAULT]";/**
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
 */class Lo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ao;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uo(e))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=re){return this.instances.has(e)}getOptions(e=re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Mo(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=re){return this.component?this.component.multipleInstances?e:re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mo(t){return t===re?void 0:t}function Uo(t){return t.instantiationMode==="EAGER"}/**
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
 */class xo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(y||(y={}));const Fo={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},Bo=y.INFO,jo={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},$o=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=jo[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pn{constructor(e){this.name=e,this._logLevel=Bo,this._logHandler=$o,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...e),this._logHandler(this,y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...e),this._logHandler(this,y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,y.INFO,...e),this._logHandler(this,y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,y.WARN,...e),this._logHandler(this,y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...e),this._logHandler(this,y.ERROR,...e)}}const Ho=(t,e)=>e.some(n=>t instanceof n);let Ti,bi;function Vo(){return Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wo(){return bi||(bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _r=new WeakMap,un=new WeakMap,Ir=new WeakMap,Xt=new WeakMap,Nn=new WeakMap;function zo(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Z(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_r.set(n,t)}).catch(()=>{}),Nn.set(e,t),e}function qo(t){if(un.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});un.set(t,e)}let dn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return un.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ir.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Go(t){dn=t(dn)}function Ko(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Yt(this),e,...n);return Ir.set(i,e.sort?e.sort():[e]),Z(i)}:Wo().includes(t)?function(...e){return t.apply(Yt(this),e),Z(_r.get(this))}:function(...e){return Z(t.apply(Yt(this),e))}}function Jo(t){return typeof t=="function"?Ko(t):(t instanceof IDBTransaction&&qo(t),Ho(t,Vo())?new Proxy(t,dn):t)}function Z(t){if(t instanceof IDBRequest)return zo(t);if(Xt.has(t))return Xt.get(t);const e=Jo(t);return e!==t&&(Xt.set(t,e),Nn.set(e,t)),e}const Yt=t=>Nn.get(t);function Xo(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Z(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Z(o.result),c.oldVersion,c.newVersion,Z(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Yo=["get","getKey","getAll","getAllKeys","count"],Qo=["put","add","delete","clear"],Qt=new Map;function Ai(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qt.get(e))return Qt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Qo.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Yo.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Qt.set(e,s),s}Go(t=>({...t,get:(e,n,i)=>Ai(e,n)||t.get(e,n,i),has:(e,n)=>!!Ai(e,n)||t.has(e,n)}));/**
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
 */class Zo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ea(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ea(t){const e=t.getComponent();return e?.type==="VERSION"}const fn="@firebase/app",Si="0.9.0";/**
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
 */const le=new Pn("@firebase/app"),ta="@firebase/app-compat",na="@firebase/analytics-compat",ia="@firebase/analytics",ra="@firebase/app-check-compat",sa="@firebase/app-check",oa="@firebase/auth",aa="@firebase/auth-compat",ca="@firebase/database",la="@firebase/database-compat",ha="@firebase/functions",ua="@firebase/functions-compat",da="@firebase/installations",fa="@firebase/installations-compat",pa="@firebase/messaging",ga="@firebase/messaging-compat",ma="@firebase/performance",ya="@firebase/performance-compat",va="@firebase/remote-config",_a="@firebase/remote-config-compat",Ia="@firebase/storage",Ea="@firebase/storage-compat",wa="@firebase/firestore",Ta="@firebase/firestore-compat",ba="firebase",Aa="9.15.0";/**
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
 */const pn="[DEFAULT]",Sa={[fn]:"fire-core",[ta]:"fire-core-compat",[ia]:"fire-analytics",[na]:"fire-analytics-compat",[sa]:"fire-app-check",[ra]:"fire-app-check-compat",[oa]:"fire-auth",[aa]:"fire-auth-compat",[ca]:"fire-rtdb",[la]:"fire-rtdb-compat",[ha]:"fire-fn",[ua]:"fire-fn-compat",[da]:"fire-iid",[fa]:"fire-iid-compat",[pa]:"fire-fcm",[ga]:"fire-fcm-compat",[ma]:"fire-perf",[ya]:"fire-perf-compat",[va]:"fire-rc",[_a]:"fire-rc-compat",[Ia]:"fire-gcs",[Ea]:"fire-gcs-compat",[wa]:"fire-fst",[Ta]:"fire-fst-compat","fire-js":"fire-js",[ba]:"fire-js-all"};/**
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
 */const ht=new Map,gn=new Map;function ka(t,e){try{t.container.addComponent(e)}catch(n){le.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function he(t){const e=t.name;if(gn.has(e))return le.debug(`There were multiple attempts to register component ${e}.`),!1;gn.set(e,t);for(const n of ht.values())ka(n,t);return!0}function bt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ca={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ee=new Be("app","Firebase",Ca);/**
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
 */class Ra{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const $e=Aa;function Er(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ee.create("bad-app-name",{appName:String(r)});if(n||(n=bo()),!n)throw ee.create("no-options");const s=ht.get(r);if(s){if(lt(n,s.options)&&lt(i,s.config))return s;throw ee.create("duplicate-app",{appName:r})}const o=new xo(r);for(const c of gn.values())o.addComponent(c);const a=new Ra(n,i,o);return ht.set(r,a),a}function Ln(t=pn){const e=ht.get(t);if(!e&&t===pn)return Er();if(!e)throw ee.create("no-app",{appName:t});return e}function x(t,e,n){var i;let r=(i=Sa[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),le.warn(a.join(" "));return}he(new te(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Da="firebase-heartbeat-database",Oa=1,De="firebase-heartbeat-store";let Zt=null;function wr(){return Zt||(Zt=Xo(Da,Oa,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(De)}}}).catch(t=>{throw ee.create("idb-open",{originalErrorMessage:t.message})})),Zt}async function Pa(t){try{return(await wr()).transaction(De).objectStore(De).get(Tr(t))}catch(e){if(e instanceof $)le.warn(e.message);else{const n=ee.create("idb-get",{originalErrorMessage:e?.message});le.warn(n.message)}}}async function ki(t,e){try{const i=(await wr()).transaction(De,"readwrite");return await i.objectStore(De).put(e,Tr(t)),i.done}catch(n){if(n instanceof $)le.warn(n.message);else{const i=ee.create("idb-set",{originalErrorMessage:n?.message});le.warn(i.message)}}}function Tr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Na=1024,La=30*24*60*60*1e3;class Ma{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xa(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ci();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=La}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ci(),{heartbeatsToSend:n,unsentEntries:i}=Ua(this._heartbeatsCache.heartbeats),r=ct(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ci(){return new Date().toISOString().substring(0,10)}function Ua(t,e=Na){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Ri(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ri(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vo()?_o().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pa(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ri(t){return ct(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fa(t){he(new te("platform-logger",e=>new Zo(e),"PRIVATE")),he(new te("heartbeat",e=>new Ma(e),"PRIVATE")),x(fn,Si,t),x(fn,Si,"esm2017"),x("fire-js","")}Fa("");var Ba="firebase",ja="9.15.0";/**
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
 */x(Ba,ja,"app");function Mn(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function br(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $a=br,Ar=new Be("auth","Firebase",br());/**
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
 */const Di=new Pn("@firebase/auth");function rt(t,...e){Di.logLevel<=y.ERROR&&Di.error(`Auth (${$e}): ${t}`,...e)}/**
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
 */function j(t,...e){throw Un(t,...e)}function F(t,...e){return Un(t,...e)}function Sr(t,e,n){const i=Object.assign(Object.assign({},$a()),{[e]:n});return new Be("auth","Firebase",i).create(e,{appName:t.name})}function Ha(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&j(t,"argument-error"),Sr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Un(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ar.create(t,...e)}function d(t,e,...n){if(!t)throw Un(e,...n)}function W(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rt(e),new Error(e)}function G(t,e){t||W(e)}/**
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
 */const Oi=new Map;function z(t){G(t instanceof Function,"Expected a class definition");let e=Oi.get(t);return e?(G(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oi.set(t,e),e)}/**
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
 */function Va(t,e){const n=bt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(lt(s,e??{}))return r;j(r,"already-initialized")}return n.initialize({options:e})}function Wa(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(z);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}/**
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
 */function mn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function za(){return Pi()==="http:"||Pi()==="https:"}function Pi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function qa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(za()||go()||"connection"in navigator)?navigator.onLine:!0}function Ga(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class He{constructor(e,n){this.shortDelay=e,this.longDelay=n,G(n>e,"Short delay should be less than long delay!"),this.isMobile=po()||mo()}get(){return qa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xn(t,e){G(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kr{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;W("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;W("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;W("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ka={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ja=new He(3e4,6e4);function Xa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function At(t,e,n,i,r={}){return Cr(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=je(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kr.fetch()(Rr(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Cr(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ka),e);try{const r=new Qa(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw et(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw et(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw et(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw et(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sr(t,u,l);j(t,u)}}catch(r){if(r instanceof $)throw r;j(t,"network-request-failed")}}async function Ya(t,e,n,i,r={}){const s=await At(t,e,n,i,r);return"mfaPendingCredential"in s&&j(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Rr(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?xn(t.config,r):`${t.config.apiScheme}://${r}`}class Qa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(F(this.auth,"network-request-failed")),Ja.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function et(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=F(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Za(t,e){return At(t,"POST","/v1/accounts:delete",e)}async function ec(t,e){return At(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ce(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tc(t,e=!1){const n=M(t),i=await n.getIdToken(e),r=Fn(i);d(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:Ce(en(r.auth_time)),issuedAtTime:Ce(en(r.iat)),expirationTime:Ce(en(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function en(t){return Number(t)*1e3}function Fn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return rt("JWT malformed, contained fewer than 3 sections"),null;try{const r=gr(n);return r?JSON.parse(r):(rt("Failed to decode base64 JWT payload"),null)}catch(r){return rt("Caught error parsing JWT payload as JSON",r?.toString()),null}}function nc(t){const e=Fn(t);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oe(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof $&&ic(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ic({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ce(this.lastLoginAt),this.creationTime=Ce(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ut(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Oe(t,ec(n,{idToken:i}));d(r?.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ac(s.providerUserInfo):[],a=oc(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!a?.length,u=c?l:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dr(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,g)}async function sc(t){const e=M(t);await ut(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oc(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ac(t){return t.map(e=>{var{providerId:n}=e,i=Mn(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function cc(t,e){const n=await Cr(t,{},async()=>{const i=je({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Rr(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kr.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return d(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await cc(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Pe;return i&&(d(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(d(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(d(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pe,this.toJSON())}_performRefresh(){return W("not implemented")}}/**
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
 */function J(t,e){d(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ae{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Mn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oe(this,this.stsTokenManager.getToken(this.auth,e));return d(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tc(this,e)}reload(){return sc(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ut(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oe(this,Za(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,u;const g=(i=n.displayName)!==null&&i!==void 0?i:void 0,_=(r=n.email)!==null&&r!==void 0?r:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,L=(o=n.photoURL)!==null&&o!==void 0?o:void 0,de=(a=n.tenantId)!==null&&a!==void 0?a:void 0,zt=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,yi=(l=n.createdAt)!==null&&l!==void 0?l:void 0,vi=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:qt,emailVerified:_i,isAnonymous:Ii,providerData:Gt,stsTokenManager:Ei}=n;d(qt&&Ei,e,"internal-error");const lo=Pe.fromJSON(this.name,Ei);d(typeof qt=="string",e,"internal-error"),J(g,e.name),J(_,e.name),d(typeof _i=="boolean",e,"internal-error"),d(typeof Ii=="boolean",e,"internal-error"),J(C,e.name),J(L,e.name),J(de,e.name),J(zt,e.name),J(yi,e.name),J(vi,e.name);const Kt=new ae({uid:qt,auth:e,email:_,emailVerified:_i,displayName:g,isAnonymous:Ii,photoURL:L,phoneNumber:C,tenantId:de,stsTokenManager:lo,createdAt:yi,lastLoginAt:vi});return Gt&&Array.isArray(Gt)&&(Kt.providerData=Gt.map(ho=>Object.assign({},ho))),zt&&(Kt._redirectEventId=zt),Kt}static async _fromIdTokenResponse(e,n,i=!1){const r=new Pe;r.updateFromServerResponse(n);const s=new ae({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ut(s),s}}/**
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
 */class Or{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Or.type="NONE";const Ni=Or;/**
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
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class me{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,s),this.fullPersistenceKey=st("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new me(z(Ni),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||z(Ni);const o=st(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const g=ae._fromJSON(e,u);l!==s&&(a=g),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new me(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new me(s,e,i))}}/**
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
 */function Li(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ur(e))return"Blackberry";if(xr(e))return"Webos";if(Bn(e))return"Safari";if((e.includes("chrome/")||Nr(e))&&!e.includes("edge/"))return"Chrome";if(Mr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function Pr(t=k()){return/firefox\//i.test(t)}function Bn(t=k()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nr(t=k()){return/crios\//i.test(t)}function Lr(t=k()){return/iemobile/i.test(t)}function Mr(t=k()){return/android/i.test(t)}function Ur(t=k()){return/blackberry/i.test(t)}function xr(t=k()){return/webos/i.test(t)}function St(t=k()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lc(t=k()){var e;return St(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hc(){return yo()&&document.documentMode===10}function Fr(t=k()){return St(t)||Mr(t)||xr(t)||Ur(t)||/windows phone/i.test(t)||Lr(t)}function uc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Br(t,e=[]){let n;switch(t){case"Browser":n=Li(k());break;case"Worker":n=`${Li(k())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$e}/${i}`}/**
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
 */class dc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */class fc{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mi(this),this.idTokenSubscription=new Mi(this),this.beforeStateQueue=new dc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ar,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=z(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ut(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ga()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&d(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(z(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Be("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&z(e)||this._popupRedirectResolver;d(n,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[z(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return d(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Br(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function kt(t){return M(t)}class Mi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oo(n=>this.observer=n)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function pc(t,e,n){const i=kt(t);d(i._canInitEmulator,i,"emulator-config-failed"),d(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!n?.disableWarnings,s=jr(e),{host:o,port:a}=gc(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||mc()}function jr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gc(t){const e=jr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ui(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ui(o)}}}function Ui(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $r{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return W("not implemented")}_getIdTokenResponse(e){return W("not implemented")}_linkToIdToken(e,n){return W("not implemented")}_getReauthenticationResolver(e){return W("not implemented")}}/**
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
 */async function ye(t,e){return Ya(t,"POST","/v1/accounts:signInWithIdp",Xa(t,e))}/**
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
 */const yc="http://localhost";class ue extends $r{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):j("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Mn(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ue(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ye(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ye(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ye(e,n)}buildRequest(){const e={requestUri:yc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=je(n)}return e}}/**
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
 */class jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ve extends jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class X extends Ve{constructor(){super("facebook.com")}static credential(e){return ue._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.FACEBOOK_SIGN_IN_METHOD="facebook.com";X.PROVIDER_ID="facebook.com";/**
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
 */class V extends Ve{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ue._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return V.credential(n,i)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
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
 */class Y extends Ve{constructor(){super("github.com")}static credential(e){return ue._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Y.credential(e.oauthAccessToken)}catch{return null}}}Y.GITHUB_SIGN_IN_METHOD="github.com";Y.PROVIDER_ID="github.com";/**
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
 */class Q extends Ve{constructor(){super("twitter.com")}static credential(e,n){return ue._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Q.credential(n,i)}catch{return null}}}Q.TWITTER_SIGN_IN_METHOD="twitter.com";Q.PROVIDER_ID="twitter.com";/**
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
 */class Ie{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await ae._fromIdTokenResponse(e,i,r),o=xi(i);return new Ie({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=xi(i);return new Ie({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function xi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dt extends ${constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,dt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new dt(e,n,i,r)}}function Hr(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dt._fromErrorAndOperation(t,s,e,i):s})}async function vc(t,e,n=!1){const i=await Oe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ie._forOperation(t,"link",i)}/**
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
 */async function _c(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Oe(t,Hr(i,r,e,t),n);d(s.idToken,i,"internal-error");const o=Fn(s.idToken);d(o,i,"internal-error");const{sub:a}=o;return d(t.uid===a,i,"user-mismatch"),Ie._forOperation(t,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&j(i,"user-mismatch"),s}}/**
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
 */async function Ic(t,e,n=!1){const i="signIn",r=await Hr(t,i,e),s=await Ie._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function Ec(t,e,n,i){return M(t).onIdTokenChanged(e,n,i)}function wc(t,e,n){return M(t).beforeAuthStateChanged(e,n)}function Tc(t,e,n,i){return M(t).onAuthStateChanged(e,n,i)}function bc(t){return M(t).signOut()}const ft="__sak";/**
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
 */class Vr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ac(){const t=k();return Bn(t)||St(t)}const Sc=1e3,kc=10;class Wr extends Vr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ac()&&uc(),this.fallbackToPolling=Fr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);hc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kc):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Sc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wr.type="LOCAL";const Cc=Wr;/**
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
 */class zr extends Vr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zr.type="SESSION";const qr=zr;/**
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
 */function Rc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Ct(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Rc(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ct.receivers=[];/**
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
 */function $n(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=$n("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(g){const _=g;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(_.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function B(){return window}function Oc(t){B().location.href=t}/**
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
 */function Gr(){return typeof B().WorkerGlobalScope<"u"&&typeof B().importScripts=="function"}async function Pc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nc(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lc(){return Gr()?self:null}/**
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
 */const Kr="firebaseLocalStorageDb",Mc=1,pt="firebaseLocalStorage",Jr="fbase_key";class We{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rt(t,e){return t.transaction([pt],e?"readwrite":"readonly").objectStore(pt)}function Uc(){const t=indexedDB.deleteDatabase(Kr);return new We(t).toPromise()}function yn(){const t=indexedDB.open(Kr,Mc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(pt,{keyPath:Jr})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(pt)?e(i):(i.close(),await Uc(),e(await yn()))})})}async function Fi(t,e,n){const i=Rt(t,!0).put({[Jr]:e,value:n});return new We(i).toPromise()}async function xc(t,e){const n=Rt(t,!1).get(e),i=await new We(n).toPromise();return i===void 0?null:i.value}function Bi(t,e){const n=Rt(t,!0).delete(e);return new We(n).toPromise()}const Fc=800,Bc=3;class Xr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Bc)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Lc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pc(),!this.activeServiceWorker)return;this.sender=new Dc(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await Fi(e,ft,"1"),await Bi(e,ft),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fi(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>xc(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Rt(r,!1).getAll();return new We(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xr.type="LOCAL";const jc=Xr;/**
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
 */function $c(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hc(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=F("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",$c().appendChild(i)})}function Vc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new He(3e4,6e4);/**
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
 */function Yr(t,e){return e?z(e):(d(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hn extends $r{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ye(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ye(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wc(t){return Ic(t.auth,new Hn(t),t.bypassAuthState)}function zc(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),_c(n,new Hn(t),t.bypassAuthState)}async function qc(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),vc(n,new Hn(t),t.bypassAuthState)}/**
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
 */class Qr{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wc;case"linkViaPopup":case"linkViaRedirect":return qc;case"reauthViaPopup":case"reauthViaRedirect":return zc;default:j(this.auth,"internal-error")}}resolve(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gc=new He(2e3,1e4);class pe extends Qr{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,pe.currentPopupAction&&pe.currentPopupAction.cancel(),pe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){G(this.filter.length===1,"Popup operations only handle one event");const e=$n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(F(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(F(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(F(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Gc.get())};e()}}pe.currentPopupAction=null;/**
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
 */const Kc="pendingRedirect",ot=new Map;class Jc extends Qr{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ot.get(this.auth._key());if(!e){try{const i=await Xc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ot.set(this.auth._key(),e)}return this.bypassAuthState||ot.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xc(t,e){const n=es(e),i=Zr(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function Yc(t,e){return Zr(t)._set(es(e),"true")}function Qc(t,e){ot.set(t._key(),e)}function Zr(t){return z(t._redirectPersistence)}function es(t){return st(Kc,t.config.apiKey,t.name)}/**
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
 */function Zc(t,e,n){return el(t,e,n)}async function el(t,e,n){const i=kt(t);Ha(t,e,jn);const r=Yr(i,n);return await Yc(r,i),r._openRedirect(i,e,"signInViaRedirect")}async function tl(t,e,n=!1){const i=kt(t),r=Yr(i,e),o=await new Jc(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const nl=10*60*1e3;class il{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ts(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(F(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nl&&this.cachedEventUids.clear(),this.cachedEventUids.has(ji(e))}saveEventToCache(e){this.cachedEventUids.add(ji(e)),this.lastProcessedEventTime=Date.now()}}function ji(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ts({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function rl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ts(t);default:return!1}}/**
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
 */async function sl(t,e={}){return At(t,"GET","/v1/projects",e)}/**
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
 */const ol=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,al=/^https?/;async function cl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sl(t);for(const n of e)try{if(ll(n))return}catch{}j(t,"unauthorized-domain")}function ll(t){const e=mn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!al.test(n))return!1;if(ol.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const hl=new He(3e4,6e4);function $i(){const t=B().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ul(t){return new Promise((e,n)=>{var i,r,s;function o(){$i(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$i(),n(F(t,"network-request-failed"))},timeout:hl.get()})}if(!((r=(i=B().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=B().gapi)===null||s===void 0)&&s.load)o();else{const a=Vc("iframefcb");return B()[a]=()=>{gapi.load?o():n(F(t,"network-request-failed"))},Hc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw at=null,e})}let at=null;function dl(t){return at=at||ul(t),at}/**
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
 */const fl=new He(5e3,15e3),pl="__/auth/iframe",gl="emulator/auth/iframe",ml={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vl(t){const e=t.config;d(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xn(e,gl):`https://${t.config.authDomain}/${pl}`,i={apiKey:e.apiKey,appName:t.name,v:$e},r=yl.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${je(i).slice(1)}`}async function _l(t){const e=await dl(t),n=B().gapi;return d(n,t,"internal-error"),e.open({where:document.body,url:vl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ml,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=F(t,"network-request-failed"),a=B().setTimeout(()=>{s(o)},fl.get());function c(){B().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Il={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},El=500,wl=600,Tl="_blank",bl="http://localhost";class Hi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Al(t,e,n,i=El,r=wl){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Il),{width:i.toString(),height:r.toString(),top:s,left:o}),l=k().toLowerCase();n&&(a=Nr(l)?Tl:n),Pr(l)&&(e=e||bl,c.scrollbars="yes");const u=Object.entries(c).reduce((_,[C,L])=>`${_}${C}=${L},`,"");if(lc(l)&&a!=="_self")return Sl(e||"",a),new Hi(null);const g=window.open(e||"",a,u);d(g,t,"popup-blocked");try{g.focus()}catch{}return new Hi(g)}function Sl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const kl="__/auth/handler",Cl="emulator/auth/handler";function Vi(t,e,n,i,r,s){d(t.config.authDomain,t,"auth-domain-config-required"),d(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:$e,eventId:r};if(e instanceof jn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Do(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Ve){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Rl(t)}?${je(a).slice(1)}`}function Rl({config:t}){return t.emulator?xn(t,Cl):`https://${t.authDomain}/${kl}`}/**
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
 */const tn="webStorageSupport";class Dl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qr,this._completeRedirectFn=tl,this._overrideRedirectResult=Qc}async _openPopup(e,n,i,r){var s;G((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vi(e,n,i,mn(),r);return Al(e,o,$n())}async _openRedirect(e,n,i,r){return await this._originValidation(e),Oc(Vi(e,n,i,mn(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(G(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await _l(e),i=new il(e);return n.register("authEvent",r=>(d(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tn,{type:tn},r=>{var s;const o=(s=r?.[0])===null||s===void 0?void 0:s[tn];o!==void 0&&n(!!o),j(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fr()||Bn()||St()}}const Ol=Dl;var Wi="@firebase/auth",zi="0.21.0";/**
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
 */class Pl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ll(t){he(new te("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{d(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),d(!o?.includes(":"),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Br(t)},u=new fc(a,c,l);return Wa(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),he(new te("auth-internal",e=>{const n=kt(e.getProvider("auth").getImmediate());return(i=>new Pl(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),x(Wi,zi,Nl(t)),x(Wi,zi,"esm2017")}/**
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
 */const Ml=5*60,Ul=vr("authIdTokenMaxAge")||Ml;let qi=null;const xl=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ul)return;const r=n?.token;qi!==r&&(qi=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fl(t=Ln()){const e=bt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Va(t,{popupRedirectResolver:Ol,persistence:[jc,Cc,qr]}),i=vr("authTokenSyncURL");if(i){const s=xl(i);wc(n,s,()=>s(n.currentUser)),Ec(n,o=>s(o))}const r=mr("auth");return r&&pc(n,`http://${r}`),n}Ll("Browser");var Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h,Vn=Vn||{},f=Bl||self;function gt(){}function Dt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ze(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jl(t){return Object.prototype.hasOwnProperty.call(t,nn)&&t[nn]||(t[nn]=++$l)}var nn="closure_uid_"+(1e9*Math.random()>>>0),$l=0;function Hl(t,e,n){return t.call.apply(t.bind,arguments)}function Vl(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function A(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A=Hl:A=Vl,A.apply(null,arguments)}function tt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function T(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function ne(){this.s=this.s,this.o=this.o}var Wl=0;ne.prototype.s=!1;ne.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Wl!=0)&&jl(this)};ne.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ns=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Gi(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Dt(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var zl=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",gt,e),f.removeEventListener("test",gt,e)}catch{}return t}();function mt(t){return/^[\s\xa0]*$/.test(t)}var Ki=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rn(t,e){return t<e?-1:t>e?1:0}function Ot(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function U(t){return Ot().indexOf(t)!=-1}function zn(t){return zn[" "](t),t}zn[" "]=gt;function ql(t){var e=Jl;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Gl=U("Opera"),Ne=U("Trident")||U("MSIE"),is=U("Edge"),vn=is||Ne,rs=U("Gecko")&&!(Ot().toLowerCase().indexOf("webkit")!=-1&&!U("Edge"))&&!(U("Trident")||U("MSIE"))&&!U("Edge"),Kl=Ot().toLowerCase().indexOf("webkit")!=-1&&!U("Edge");function ss(){var t=f.document;return t?t.documentMode:void 0}var _n;e:{var sn="",on=function(){var t=Ot();if(rs)return/rv:([^\);]+)(\)|;)/.exec(t);if(is)return/Edge\/([\d\.]+)/.exec(t);if(Ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kl)return/WebKit\/(\S+)/.exec(t);if(Gl)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(on&&(sn=on?on[1]:""),Ne){var an=ss();if(an!=null&&an>parseFloat(sn)){_n=String(an);break e}}_n=sn}var Jl={};function Xl(){return ql(function(){let t=0;const e=Ki(String(_n)).split("."),n=Ki("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=rn(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||rn(r[2].length==0,s[2].length==0)||rn(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}f.document&&Ne&&ss();function Le(t,e){if(S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rs){e:{try{zn(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Yl[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Le.X.h.call(this)}}T(Le,S);var Yl={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),Ql=0;function Zl(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++Ql,this.ba=this.ea=!1}function Pt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function os(t){const e={};for(const n in t)e[n]=t[n];return e}const Ji="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function as(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Ji.length;s++)n=Ji[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Nt(t){this.src=t,this.g={},this.h=0}Nt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=En(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Zl(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function In(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=ns(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Pt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function En(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var Gn="closure_lm_"+(1e6*Math.random()|0),cn={};function cs(t,e,n,i,r){if(i&&i.once)return hs(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cs(t,e[s],n,i,r);return null}return n=Xn(n),t&&t[qe]?t.N(e,n,ze(i)?!!i.capture:!!i,r):ls(t,e,n,!1,i,r)}function ls(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=ze(r)?!!r.capture:!!r,a=Jn(t);if(a||(t[Gn]=a=new Nt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=eh(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)zl||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ds(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eh(){function t(n){return e.call(t.src,t.listener,n)}const e=th;return t}function hs(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hs(t,e[s],n,i,r);return null}return n=Xn(n),t&&t[qe]?t.O(e,n,ze(i)?!!i.capture:!!i,r):ls(t,e,n,!0,i,r)}function us(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)us(t,e[s],n,i,r);else i=ze(i)?!!i.capture:!!i,n=Xn(n),t&&t[qe]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=En(s,n,i,r),-1<n&&(Pt(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=En(e,n,i,r)),(n=-1<t?e[t]:null)&&Kn(n))}function Kn(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qe])In(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ds(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Jn(e))?(In(n,t),n.h==0&&(n.src=null,e[Gn]=null)):Pt(t)}}}function ds(t){return t in cn?cn[t]:cn[t]="on"+t}function th(t,e){if(t.ba)t=!0;else{e=new Le(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Kn(t),t=n.call(i,e)}return t}function Jn(t){return t=t[Gn],t instanceof Nt?t:null}var ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xn(t){return typeof t=="function"?t:(t[ln]||(t[ln]=function(e){return t.handleEvent(e)}),t[ln])}function E(){ne.call(this),this.i=new Nt(this),this.P=this,this.I=null}T(E,ne);E.prototype[qe]=!0;E.prototype.removeEventListener=function(t,e,n,i){us(this,t,e,n,i)};function w(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;e=new S(i,t),as(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=nt(o,i,!0,e)&&r}if(o=e.g=t,r=nt(o,i,!0,e)&&r,r=nt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=nt(o,i,!1,e)&&r}E.prototype.M=function(){if(E.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Pt(n[i]);delete t.g[e],t.h--}}this.I=null};E.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};E.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function nt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&In(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Yn=f.JSON.stringify;function nh(){var t=gs;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ih{constructor(){this.h=this.g=null}add(e,n){const i=fs.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var fs=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rh,t=>t.reset());class rh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sh(t){f.setTimeout(()=>{throw t},0)}function ps(t,e){wn||oh(),Tn||(wn(),Tn=!0),gs.add(t,e)}var wn;function oh(){var t=f.Promise.resolve(void 0);wn=function(){t.then(ah)}}var Tn=!1,gs=new ih;function ah(){for(var t;t=nh();){try{t.h.call(t.g)}catch(n){sh(n)}var e=fs;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tn=!1}function Lt(t,e){E.call(this),this.h=t||1,this.g=e||f,this.j=A(this.lb,this),this.l=Date.now()}T(Lt,E);h=Lt.prototype;h.ca=!1;h.R=null;h.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),w(this,"tick"),this.ca&&(Qn(this),this.start()))}};h.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}h.M=function(){Lt.X.M.call(this),Qn(this),delete this.g};function Zn(t,e,n){if(typeof t=="function")n&&(t=A(t,n));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function ms(t){t.g=Zn(()=>{t.g=null,t.i&&(t.i=!1,ms(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ch extends ne{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ms(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(t){ne.call(this),this.h=t,this.g={}}T(Me,ne);var Xi=[];function ys(t,e,n,i){Array.isArray(n)||(n&&(Xi[0]=n.toString()),n=Xi);for(var r=0;r<n.length;r++){var s=cs(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function vs(t){qn(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kn(e)},t),t.g={}}Me.prototype.M=function(){Me.X.M.call(this),vs(this)};Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mt(){this.g=!0}Mt.prototype.Aa=function(){this.g=!1};function lh(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var g=u.split("_");o=2<=g.length&&g[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function hh(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function ge(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dh(t,n)+(i?" "+i:"")})}function uh(t,e){t.info(function(){return"TIMEOUT: "+e})}Mt.prototype.info=function(){};function dh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Yn(n)}catch{return e}}var we={},Yi=null;function ei(){return Yi=Yi||new E}we.Pa="serverreachability";function _s(t){S.call(this,we.Pa,t)}T(_s,S);function Ue(t){const e=ei();w(e,new _s(e))}we.STAT_EVENT="statevent";function Is(t,e){S.call(this,we.STAT_EVENT,t),this.stat=e}T(Is,S);function R(t){const e=ei();w(e,new Is(e,t))}we.Qa="timingevent";function Es(t,e){S.call(this,we.Qa,t),this.size=e}T(Es,S);function Ge(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var ti={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ni(){}ni.prototype.h=null;function Qi(t){return t.h||(t.h=t.i())}function ph(){}var Ke={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ii(){S.call(this,"d")}T(ii,S);function ri(){S.call(this,"c")}T(ri,S);var bn;function Ut(){}T(Ut,ni);Ut.prototype.g=function(){return new XMLHttpRequest};Ut.prototype.i=function(){return{}};bn=new Ut;function Je(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Me(this),this.O=gh,t=vn?125:void 0,this.T=new Lt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ws}function ws(){this.i=null,this.g="",this.h=!1}var gh=45e3,An={},yt={};h=Je.prototype;h.setTimeout=function(t){this.O=t};function Sn(t,e,n){t.K=1,t.v=Ft(K(e)),t.s=n,t.P=!0,Ts(t,null)}function Ts(t,e){t.F=Date.now(),Xe(t),t.A=K(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Os(n.i,"t",i),t.C=0,n=t.l.H,t.h=new ws,t.g=Qs(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ch(A(t.La,t,t.g),t.N)),ys(t.S,t.g,"readystatechange",t.ib),e=t.H?os(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ue(),lh(t.j,t.u,t.A,t.m,t.U,t.s)}h.ib=function(t){t=t.target;const e=this.L;e&&q(t)==3?e.l():this.La(t)};h.La=function(t){try{if(t==this.g)e:{const u=q(this.g);var e=this.g.Ea();const g=this.g.aa();if(!(3>u)&&(u!=3||vn||this.g&&(this.h.h||this.g.fa()||nr(this.g)))){this.I||u!=4||e==7||(e==8||0>=g?Ue(3):Ue(2)),xt(this);var n=this.g.aa();this.Y=n;t:if(bs(this)){var i=nr(this.g);t="";var r=i.length,s=q(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),Re(this);var o="";break t}this.h.i=new f.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,hh(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mt(a)){var l=a;break t}}l=null}if(n=l)ge(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,kn(this,n);else{this.i=!1,this.o=3,R(12),se(this),Re(this);break e}}this.P?(As(this,u,o),vn&&this.i&&u==3&&(ys(this.S,this.T,"tick",this.hb),this.T.start())):(ge(this.j,this.m,o,null),kn(this,o)),u==4&&se(this),this.i&&!this.I&&(u==4?Ks(this.l,this):(this.i=!1,Xe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,R(12)):(this.o=0,R(13)),se(this),Re(this)}}}catch{}finally{}};function bs(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function As(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=mh(t,n),r==yt){e==4&&(t.o=4,R(14),i=!1),ge(t.j,t.m,null,"[Incomplete Response]");break}else if(r==An){t.o=4,R(15),ge(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ge(t.j,t.m,r,null),kn(t,r);bs(t)&&r!=yt&&r!=An&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,R(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ui(e),e.K=!0,R(11))):(ge(t.j,t.m,n,"[Invalid Chunked Response]"),se(t),Re(t))}h.hb=function(){if(this.g){var t=q(this.g),e=this.g.fa();this.C<e.length&&(xt(this),As(this,t,e),this.i&&t!=4&&Xe(this))}};function mh(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?yt:(n=Number(e.substring(n,i)),isNaN(n)?An:(i+=1,i+n>e.length?yt:(e=e.substr(i,n),t.C=i+n,e)))}h.cancel=function(){this.I=!0,se(this)};function Xe(t){t.V=Date.now()+t.O,Ss(t,t.O)}function Ss(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ge(A(t.gb,t),e)}function xt(t){t.B&&(f.clearTimeout(t.B),t.B=null)}h.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(uh(this.j,this.A),this.K!=2&&(Ue(),R(17)),se(this),this.o=2,Re(this)):Ss(this,this.V-t)};function Re(t){t.l.G==0||t.I||Ks(t.l,t)}function se(t){xt(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qn(t.T),vs(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function kn(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Cn(n.h,t))){if(!t.J&&Cn(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)It(n),Ht(n);else break e;hi(n),R(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ge(A(n.cb,n),6e3));if(1>=Ls(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else oe(n,11)}else if((t.J||n.g==t)&&It(n),!mt(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const g=l[4];g!=null&&(n.Ca=g,n.j.info("SVER="+n.Ca));const _=l[5];_!=null&&typeof _=="number"&&0<_&&(i=1.5*_,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const C=t.g;if(C){const L=C.g?C.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(L){var s=i.h;s.g||L.indexOf("spdy")==-1&&L.indexOf("quic")==-1&&L.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(si(s,s.h),s.h=null))}if(i.D){const de=C.g?C.g.getResponseHeader("X-HTTP-Session-Id"):null;de&&(i.za=de,v(i.F,i.D,de))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Ys(i,i.H?i.ka:null,i.V),o.J){Ms(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(xt(a),Xe(a)),i.g=o}else qs(i);0<n.i.length&&Vt(n)}else l[0]!="stop"&&l[0]!="close"||oe(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?oe(n,7):li(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ue(4)}catch{}}function yh(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Dt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function vh(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Dt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ks(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Dt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vh(t),i=yh(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _h(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ce(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ce){this.h=e!==void 0?e:t.h,vt(this,t.j),this.s=t.s,this.g=t.g,_t(this,t.m),this.l=t.l,e=t.i;var n=new xe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zi(this,n),this.o=t.o}else t&&(n=String(t).match(Cs))?(this.h=!!e,vt(this,n[1]||"",!0),this.s=Se(n[2]||""),this.g=Se(n[3]||"",!0),_t(this,n[4]),this.l=Se(n[5]||"",!0),Zi(this,n[6]||"",!0),this.o=Se(n[7]||"")):(this.h=!!e,this.i=new xe(null,this.h))}ce.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ke(e,er,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ke(e,er,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ke(n,n.charAt(0)=="/"?wh:Eh,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ke(n,bh)),t.join("")};function K(t){return new ce(t)}function vt(t,e,n){t.j=n?Se(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _t(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zi(t,e,n){e instanceof xe?(t.i=e,Ah(t.i,t.h)):(n||(e=ke(e,Th)),t.i=new xe(e,t.h))}function v(t,e,n){t.i.set(e,n)}function Ft(t){return v(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Se(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ke(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ih),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ih(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var er=/[#\/\?@]/g,Eh=/[#\?:]/g,wh=/[#\?]/g,Th=/[#\?@]/g,bh=/#/g;function xe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ie(t){t.g||(t.g=new Map,t.h=0,t.i&&_h(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}h=xe.prototype;h.add=function(t,e){ie(this),this.i=null,t=Te(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rs(t,e){ie(t),e=Te(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ds(t,e){return ie(t),e=Te(t,e),t.g.has(e)}h.forEach=function(t,e){ie(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};h.oa=function(){ie(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};h.W=function(t){ie(this);let e=[];if(typeof t=="string")Ds(this,t)&&(e=e.concat(this.g.get(Te(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};h.set=function(t,e){return ie(this),this.i=null,t=Te(this,t),Ds(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};h.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Os(t,e,n){Rs(t,e),0<n.length&&(t.i=null,t.g.set(Te(t,e),Wn(n)),t.h+=n.length)}h.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Te(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ah(t,e){e&&!t.j&&(ie(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Rs(this,i),Os(this,r,n))},t)),t.j=e}var Sh=class{constructor(t,e){this.h=t,this.g=e}};function Ps(t){this.l=t||kh,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kh=10;function Ns(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ls(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function si(t,e){t.g?t.g.add(e):t.h=e}function Ms(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ps.prototype.cancel=function(){if(this.i=Us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Us(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wn(t.i)}function oi(){}oi.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)};oi.prototype.parse=function(t){return f.JSON.parse(t,void 0)};function Ch(){this.g=new oi}function Rh(t,e,n){const i=n||"";try{ks(t,function(r,s){let o=r;ze(r)&&(o=Yn(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Dh(t,e){const n=new Mt;if(f.Image){const i=new Image;i.onload=tt(it,n,i,"TestLoadImage: loaded",!0,e),i.onerror=tt(it,n,i,"TestLoadImage: error",!1,e),i.onabort=tt(it,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=tt(it,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function it(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Bt(t){this.l=t.ac||null,this.j=t.jb||!1}T(Bt,ni);Bt.prototype.g=function(){return new jt(this.l,this.j)};Bt.prototype.i=function(t){return function(){return t}}({});function jt(t,e){E.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ai,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}T(jt,E);var ai=0;h=jt.prototype;h.open=function(t,e){if(this.readyState!=ai)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fe(this)};h.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};h.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=ai};h.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function xs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}h.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ye(this):Fe(this),this.readyState==3&&xs(this)}};h.Va=function(t){this.g&&(this.response=this.responseText=t,Ye(this))};h.Ua=function(t){this.g&&(this.response=t,Ye(this))};h.ga=function(){this.g&&Ye(this)};function Ye(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fe(t)}h.setRequestHeader=function(t,e){this.v.append(t,e)};h.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};h.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Oh=f.JSON.parse;function I(t){E.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fs,this.K=this.L=!1}T(I,E);var Fs="",Ph=/^https?$/i,Nh=["POST","PUT"];h=I.prototype;h.Ka=function(t){this.L=t};h.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bn.g(),this.C=this.u?Qi(this.u):Qi(bn),this.g.onreadystatechange=A(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){tr(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=f.FormData&&t instanceof f.FormData,!(0<=ns(Nh,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$s(this),0<this.B&&((this.K=Lh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=A(this.qa,this)):this.A=Zn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){tr(this,s)}};function Lh(t){return Ne&&Xl()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}h.qa=function(){typeof Vn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,w(this,"timeout"),this.abort(8))};function tr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bs(t),$t(t)}function Bs(t){t.D||(t.D=!0,w(t,"complete"),w(t,"error"))}h.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,w(this,"complete"),w(this,"abort"),$t(this))};h.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$t(this,!0)),I.X.M.call(this)};h.Ha=function(){this.s||(this.F||this.v||this.l?js(this):this.fb())};h.fb=function(){js(this)};function js(t){if(t.h&&typeof Vn<"u"&&(!t.C[1]||q(t)!=4||t.aa()!=2)){if(t.v&&q(t)==4)Zn(t.Ha,0,t);else if(w(t,"readystatechange"),q(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(Cs)[1]||null;if(!r&&f.self&&f.self.location){var s=f.self.location.protocol;r=s.substr(0,s.length-1)}i=!Ph.test(r?r.toLowerCase():"")}n=i}if(n)w(t,"complete"),w(t,"success");else{t.m=6;try{var o=2<q(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Bs(t)}}finally{$t(t)}}}}function $t(t,e){if(t.g){$s(t);const n=t.g,i=t.C[0]?gt:null;t.g=null,t.C=null,e||w(t,"ready");try{n.onreadystatechange=i}catch{}}}function $s(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function q(t){return t.g?t.g.readyState:0}h.aa=function(){try{return 2<q(this)?this.g.status:-1}catch{return-1}};h.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};h.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Oh(e)}};function nr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}h.Ea=function(){return this.m};h.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hs(t){let e="";return qn(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function ci(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Hs(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):v(t,e,n))}function Ae(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vs(t){this.Ca=0,this.i=[],this.j=new Mt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ae("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ae("baseRetryDelayMs",5e3,t),this.bb=Ae("retryDelaySeedMs",1e4,t),this.$a=Ae("forwardChannelMaxRetries",2,t),this.ta=Ae("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ps(t&&t.concurrentRequestLimit),this.Fa=new Ch,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}h=Vs.prototype;h.ma=8;h.G=1;function li(t){if(Ws(t),t.G==3){var e=t.U++,n=K(t.F);v(n,"SID",t.I),v(n,"RID",e),v(n,"TYPE","terminate"),Qe(t,n),e=new Je(t,t.j,e,void 0),e.K=2,e.v=Ft(K(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qs(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xe(e)}Xs(t)}function Ht(t){t.g&&(ui(t),t.g.cancel(),t.g=null)}function Ws(t){Ht(t),t.u&&(f.clearTimeout(t.u),t.u=null),It(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function Vt(t){Ns(t.h)||t.m||(t.m=!0,ps(t.Ja,t),t.C=0)}function Mh(t,e){return Ls(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ge(A(t.Ja,t,e),Js(t,t.C)),t.C++,!0)}h.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Je(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=os(s),as(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zs(this,r,e),n=K(this.F),v(n,"RID",t),v(n,"CVER",22),this.D&&v(n,"X-HTTP-Session-Id",this.D),Qe(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Hs(s)))+"&"+e:this.o&&ci(n,this.o,s)),si(this.h,r),this.Ya&&v(n,"TYPE","init"),this.O?(v(n,"$req",e),v(n,"SID","null"),r.Z=!0,Sn(r,n,null)):Sn(r,n,e),this.G=2}}else this.G==3&&(t?ir(this,t):this.i.length==0||Ns(this.h)||ir(this))};function ir(t,e){var n;e?n=e.m:n=t.U++;const i=K(t.F);v(i,"SID",t.I),v(i,"RID",n),v(i,"AID",t.T),Qe(t,i),t.o&&t.s&&ci(i,t.o,t.s),n=new Je(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zs(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),si(t.h,n),Sn(n,i,e)}function Qe(t,e){t.ia&&qn(t.ia,function(n,i){v(e,i,n)}),t.l&&ks({},function(n,i){v(e,i,n)})}function zs(t,e,n){n=Math.min(t.i.length,n);var i=t.l?A(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{Rh(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function qs(t){t.g||t.u||(t.Z=1,ps(t.Ia,t),t.A=0)}function hi(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ge(A(t.Ia,t),Js(t,t.A)),t.A++,!0)}h.Ia=function(){if(this.u=null,Gs(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ge(A(this.eb,this),t)}};h.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,R(10),Ht(this),Gs(this))};function ui(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function Gs(t){t.g=new Je(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=K(t.sa);v(e,"RID","rpc"),v(e,"SID",t.I),v(e,"CI",t.L?"0":"1"),v(e,"AID",t.T),v(e,"TYPE","xmlhttp"),Qe(t,e),t.o&&t.s&&ci(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ft(K(e)),n.s=null,n.P=!0,Ts(n,t)}h.cb=function(){this.v!=null&&(this.v=null,Ht(this),hi(this),R(19))};function It(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function Ks(t,e){var n=null;if(t.g==e){It(t),ui(t),t.g=null;var i=2}else if(Cn(t.h,e))n=e.D,Ms(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ei(),w(i,new Es(i,n)),Vt(t)}else qs(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&Mh(t,e)||i==2&&hi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:oe(t,5);break;case 4:oe(t,10);break;case 3:oe(t,6);break;default:oe(t,2)}}}function Js(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function oe(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=A(t.kb,t);n||(n=new ce("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||vt(n,"https"),Ft(n)),Dh(n.toString(),i)}else R(2);t.G=0,t.l&&t.l.va(e),Xs(t),Ws(t)}h.kb=function(t){t?(this.j.info("Successfully pinged google.com"),R(2)):(this.j.info("Failed to ping google.com"),R(1))};function Xs(t){if(t.G=0,t.la=[],t.l){const e=Us(t.h);(e.length!=0||t.i.length!=0)&&(Gi(t.la,e),Gi(t.la,t.i),t.h.i.length=0,Wn(t.i),t.i.length=0),t.l.ua()}}function Ys(t,e,n){var i=n instanceof ce?K(n):new ce(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),_t(i,i.m);else{var r=f.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new ce(null,void 0);i&&vt(s,i),e&&(s.g=e),r&&_t(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&v(i,n,e),v(i,"VER",t.ma),Qe(t,i),i}function Qs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new I(new Bt({jb:!0})):new I(t.ra),e.Ka(t.H),e}function Zs(){}h=Zs.prototype;h.xa=function(){};h.wa=function(){};h.va=function(){};h.ua=function(){};h.Ra=function(){};function N(t,e){E.call(this),this.g=new Vs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!mt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mt(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new be(this)}T(N,E);N.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;R(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ys(t,null,t.V),Vt(t)};N.prototype.close=function(){li(this.g)};N.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yn(t),t=n);e.i.push(new Sh(e.ab++,t)),e.G==3&&Vt(e)};N.prototype.M=function(){this.g.l=null,delete this.j,li(this.g),delete this.g,N.X.M.call(this)};function eo(t){ii.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}T(eo,ii);function to(){ri.call(this),this.status=1}T(to,ri);function be(t){this.g=t}T(be,Zs);be.prototype.xa=function(){w(this.g,"a")};be.prototype.wa=function(t){w(this.g,new eo(t))};be.prototype.va=function(t){w(this.g,new to)};be.prototype.ua=function(){w(this.g,"b")};N.prototype.send=N.prototype.u;N.prototype.open=N.prototype.m;N.prototype.close=N.prototype.close;ti.NO_ERROR=0;ti.TIMEOUT=8;ti.HTTP_ERROR=6;fh.COMPLETE="complete";ph.EventType=Ke;Ke.OPEN="a";Ke.CLOSE="b";Ke.ERROR="c";Ke.MESSAGE="d";E.prototype.listen=E.prototype.N;I.prototype.listenOnce=I.prototype.O;I.prototype.getLastError=I.prototype.Oa;I.prototype.getLastErrorCode=I.prototype.Ea;I.prototype.getStatus=I.prototype.aa;I.prototype.getResponseJson=I.prototype.Sa;I.prototype.getResponseText=I.prototype.fa;I.prototype.send=I.prototype.da;I.prototype.setWithCredentials=I.prototype.Ka;const rr="@firebase/firestore";/**
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
 */class b{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");/**
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
 */let Ze="9.15.0";/**
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
 */const Ee=new Pn("@firebase/firestore");function D(t,...e){if(Ee.logLevel<=y.DEBUG){const n=e.map(fi);Ee.debug(`Firestore (${Ze}): ${t}`,...n)}}function di(t,...e){if(Ee.logLevel<=y.ERROR){const n=e.map(fi);Ee.error(`Firestore (${Ze}): ${t}`,...n)}}function Uh(t,...e){if(Ee.logLevel<=y.WARN){const n=e.map(fi);Ee.warn(`Firestore (${Ze}): ${t}`,...n)}}function fi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function pi(t="Unexpected state"){const e=`FIRESTORE (${Ze}) INTERNAL ASSERTION FAILED: `+t;throw di(e),new Error(e)}function Et(t,e){t||pi()}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends ${constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ve{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class no{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(b.UNAUTHENTICATED))}shutdown(){}}class Fh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bh{constructor(e){this.t=e,this.currentUser=b.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new ve;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ve,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ve)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Et(typeof i.accessToken=="string"),new no(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string"),new b(e)}}class jh{constructor(e,n,i,r){this.h=e,this.l=n,this.m=i,this.g=r,this.type="FirstParty",this.user=b.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Et(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class $h{constructor(e,n,i,r){this.h=e,this.l=n,this.m=i,this.g=r}getToken(){return Promise.resolve(new jh(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(b.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vh{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?r(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Et(typeof n.token=="string"),this.A=n.token,new Hh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Wh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class zh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Wh(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qh{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var sr,m;(m=sr||(sr={}))[m.OK=0]="OK",m[m.CANCELLED=1]="CANCELLED",m[m.UNKNOWN=2]="UNKNOWN",m[m.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m[m.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m[m.NOT_FOUND=5]="NOT_FOUND",m[m.ALREADY_EXISTS=6]="ALREADY_EXISTS",m[m.PERMISSION_DENIED=7]="PERMISSION_DENIED",m[m.UNAUTHENTICATED=16]="UNAUTHENTICATED",m[m.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m[m.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m[m.ABORTED=10]="ABORTED",m[m.OUT_OF_RANGE=11]="OUT_OF_RANGE",m[m.UNIMPLEMENTED=12]="UNIMPLEMENTED",m[m.INTERNAL=13]="INTERNAL",m[m.UNAVAILABLE=14]="UNAVAILABLE",m[m.DATA_LOSS=15]="DATA_LOSS";function hn(){return typeof document<"u"?document:null}class Gh{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-i);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class gi{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new gi(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kh(t,e){if(di("AsyncQueue",`${e}: ${t}`),io(t))return new P(O.UNAVAILABLE,`${e}: ${t}`);throw t}function Jh(t,e,n,i){if(e===!0&&i===!0)throw new P(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pi()}function Yh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xh(t);throw new P(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const or=new Map;class ar{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Jh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ro{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ar({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ar(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xh;switch(n.type){case"gapi":const i=n.client;return new $h(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=or.get(e);n&&(D("ComponentProvider","Removing Datastore"),or.delete(e),n.terminate())}(this),Promise.resolve()}}function Qh(t,e,n,i={}){var r;const s=(t=Yh(t,ro))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Uh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=b.MOCK_USER;else{o=So(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new P(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new b(c)}t._authCredentials=new Fh(new no(o,a))}}/**
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
 */class Zh{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=b.UNAUTHENTICATED,this.clientId=zh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Kh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}class eu{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Gh(this,"async_queue_retry"),this.Wc=()=>{const n=hn();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=hn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=hn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ve;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!io(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw di("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=gi.createAndSchedule(this,e,n,i,s=>this.Yc(s));return this.Uc.push(r),r}zc(){this.Kc&&pi()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class tu extends ro{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new eu,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||iu(this),this._firestoreClient.terminate()}}function nu(t,e){const n=typeof t=="object"?t:Ln(),i=typeof t=="string"?t:e||"(default)",r=bt(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=yr("firestore");s&&Qh(r,...s)}return r}function iu(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new qh(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Zh(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){Ze=n})($e),he(new te("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new tu(new Bh(n.getProvider("auth-internal")),new Vh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),x(rr,"3.8.0",t),x(rr,"3.8.0","esm2017")})();/**
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
 */const ru="type.googleapis.com/google.protobuf.Int64Value",su="type.googleapis.com/google.protobuf.UInt64Value";function so(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function Rn(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Rn(e));if(typeof t=="function"||typeof t=="object")return so(t,e=>Rn(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Tt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case ru:case su:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Tt(e)):typeof t=="function"||typeof t=="object"?so(t,e=>Tt(e)):t}/**
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
 */const mi="functions";/**
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
 */const cr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends ${constructor(e,n,i){super(`${mi}/${e}`,n||""),this.details=i}}function ou(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function au(t,e){let n=ou(t),i=n,r;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!cr[o])return new _e("internal","internal");n=cr[o],i=o}const a=s.message;typeof a=="string"&&(i=a),r=s.details,r!==void 0&&(r=Tt(r))}}catch{}return n==="ok"?null:new _e(n,i,r)}/**
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
 */class cu{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
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
 */const Dn="us-central1";function lu(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new _e("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class hu{constructor(e,n,i,r,s=Dn,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new cu(n,i,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=Dn}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function uu(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function du(t,e,n){return i=>pu(t,e,i,n||{})}async function fu(t,e,n,i){n["Content-Type"]="application/json";let r;try{r=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await r.json()}catch{}return{status:r.status,json:s}}function pu(t,e,n,i){const r=t._url(e);return gu(t,r,n,i)}async function gu(t,e,n,i){n=Rn(n);const r={data:n},s={},o=await t.contextProvider.getContext();o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,c=lu(a),l=await Promise.race([fu(e,r,s,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!l)throw new _e("cancelled","Firebase Functions instance was deleted.");const u=au(l.status,l.json);if(u)throw u;if(!l.json)throw new _e("internal","Response is not valid JSON object.");let g=l.json.data;if(typeof g>"u"&&(g=l.json.result),typeof g>"u")throw new _e("internal","Response is missing data field.");return{data:Tt(g)}}const lr="@firebase/functions",hr="0.9.0";/**
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
 */const mu="auth-internal",yu="app-check-internal",vu="messaging-internal";function _u(t,e){const n=(i,{instanceIdentifier:r})=>{const s=i.getProvider("app").getImmediate(),o=i.getProvider(mu),a=i.getProvider(vu),c=i.getProvider(yu);return new hu(s,o,a,c,r,t)};he(new te(mi,n,"PUBLIC").setMultipleInstances(!0)),x(lr,hr,e),x(lr,hr,"esm2017")}/**
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
 */function Iu(t=Ln(),e=Dn){const i=bt(M(t),mi).getImmediate({identifier:e}),r=yr("functions");return r&&Eu(i,...r),i}function Eu(t,e,n){uu(M(t),e,n)}function Wt(t,e,n){return du(M(t),e,n)}_u(fetch.bind(self));/*!
 * paypal-js v5.1.4 (2022-11-29T23:08:21.847Z)
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
 */function wu(t,e){var n=document.querySelector('script[src="'.concat(t,'"]'));if(n===null)return null;var i=oo(t,e),r=n.cloneNode();if(delete r.dataset.uidAuto,Object.keys(r.dataset).length!==Object.keys(i.dataset).length)return null;var s=!0;return Object.keys(r.dataset).forEach(function(o){r.dataset[o]!==i.dataset[o]&&(s=!1)}),s?n:null}function Tu(t){var e=t.url,n=t.attributes,i=t.onSuccess,r=t.onError,s=oo(e,n);s.onerror=r,s.onload=i,document.head.insertBefore(s,document.head.firstElementChild)}function bu(t){var e="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(e=t.sdkBaseURL,delete t.sdkBaseURL),ku(t);var n=Object.keys(t).filter(function(s){return typeof t[s]<"u"&&t[s]!==null&&t[s]!==""}).reduce(function(s,o){var a=t[o].toString();return o.substring(0,5)==="data-"?s.dataAttributes[o]=a:s.queryParams[o]=a,s},{queryParams:{},dataAttributes:{}}),i=n.queryParams,r=n.dataAttributes;return{url:"".concat(e,"?").concat(Au(i)),dataAttributes:r}}function Au(t){var e="";return Object.keys(t).forEach(function(n){e.length!==0&&(e+="&"),e+=n+"="+t[n]}),e}function Su(t){var e=t.split("/* Original Error:")[1];return e?e.replace(/\n/g,"").replace("*/","").trim():t}function oo(t,e){e===void 0&&(e={});var n=document.createElement("script");return n.src=t,Object.keys(e).forEach(function(i){n.setAttribute(i,e[i]),i==="data-csp-nonce"&&n.setAttribute("nonce",e["data-csp-nonce"])}),n}function ku(t){var e=t["merchant-id"],n=t["data-merchant-id"],i="",r="";return Array.isArray(e)?e.length>1?(i="*",r=e.toString()):i=e.toString():typeof e=="string"&&e.length>0?i=e:typeof n=="string"&&n.length>0&&(i="*",r=n),t["merchant-id"]=i,t["data-merchant-id"]=r,t}function Cu(t,e){if(e===void 0&&(e=ao()),co(t,e),typeof window>"u")return e.resolve(null);var n=bu(t),i=n.url,r=n.dataAttributes,s=r["data-namespace"]||"paypal",o=ur(s);return wu(i,r)&&o?e.resolve(o):Ru({url:i,attributes:r},e).then(function(){var a=ur(s);if(a)return a;throw new Error("The window.".concat(s," global variable is not available."))})}function Ru(t,e){e===void 0&&(e=ao()),co(t,e);var n=t.url,i=t.attributes;if(typeof n!="string"||n.length===0)throw new Error("Invalid url.");if(typeof i<"u"&&typeof i!="object")throw new Error("Expected attributes to be an object.");return new e(function(r,s){if(typeof window>"u")return r();Tu({url:n,attributes:i,onSuccess:function(){return r()},onError:function(){var o=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then(function(a){return a.status===200&&s(o),a.text()}).then(function(a){var c=Su(a);s(new Error(c))}).catch(function(a){s(a)}):s(o)}})})}function ao(){if(typeof Promise>"u")throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function ur(t){return window[t]}function co(t,e){if(typeof t!="object"||t===null)throw new Error("Expected an options object.");if(typeof e<"u"&&typeof e!="function")throw new Error("Expected PromisePonyfill to be a function.")}const p={app:void 0,auth:void 0,db:void 0,functions:void 0,loginAndPurchaseEl:void 0,use:{firebaseEmulator:!1,payPalSandbox:!1}};p.app=Er({apiKey:"AIzaSyDKi6IOpooOPne-UnDaYBHCZqNrYznWCck",authDomain:"marekknows-74e3e.firebaseapp.com",projectId:"marekknows-74e3e",storageBucket:"marekknows-74e3e.appspot.com",messagingSenderId:"898037646323",appId:"1:898037646323:web:a8ae378668514efb584886"});p.auth=Fl(p.app);p.db=nu(p.app);p.functions=Iu(p.app);const Du=Wt(p.functions,"getPurchasedVideosAsync"),Ou=Wt(p.functions,"getVmkPriceAsync"),Pu=Wt(p.functions,"purchaseVmkAsync"),Nu=Wt(p.functions,"handleOrderAsync"),dr="marek.krzeminski@gmail.com";function Lu(){p.loginAndPurchaseEl=fe({query:"#loginAndPurchase"}),Tc(p.auth,async n=>{const i=n!==null,r=await Mu();H({root:p.loginAndPurchaseEl,query:"#loading",isVisible:!1}),H({root:p.loginAndPurchaseEl,query:"#loading2",isVisible:!1}),H({root:p.loginAndPurchaseEl,query:"button.signIn",isVisible:!i}),H({root:p.loginAndPurchaseEl,query:"button.signOut",isVisible:i}),H({root:p.loginAndPurchaseEl,query:"img.signIn",isVisible:!i}),H({root:p.loginAndPurchaseEl,query:"p.thanks",isVisible:i&&r});const s=i&&!r;if(H({root:p.loginAndPurchaseEl,query:"#loadingPayPal",isVisible:s}),H({root:p.loginAndPurchaseEl,query:"div.purchase",isVisible:s}),s)try{const o=await Cu({"client-id":p.use.payPalSandbox?"AUppZUwsxJGxzQZNQux6hKOOvkWU5a0wtAHSjN5-PdlDOFwjCHOMuG7IU3NWGyMzJEi-NVgQizMv5JN8":"ASBD3p3NO5SqJQR4hTYlWJkFnL1bD9Rv6t5FKu1aWUt9MOrICTGn8WwsdTm39F8JgBJERpW_fDglPrjx",currency:"USD"});if(o===null)throw new Error("paypal = null");const a=p.loginAndPurchaseEl.dataset.vmkSection;if(a===void 0)throw new Error("vmkSection = undefined");const c=await Ou({vmkSection:a});if(c.data.price){const u=fe({root:p.loginAndPurchaseEl,query:"div.price .normal"});if(u.innerHTML=`$${c.data.price.toFixed(2)}`,c.data.salePrice&&c.data.salePrice>0&&c.data.salePrice<c.data.price){u.classList.add("onSale");const g=fe({root:p.loginAndPurchaseEl,query:"div.price .sale"});g.innerHTML=`$${c.data.salePrice.toFixed(2)}`,g.style.display="inline"}}const l=o.Buttons&&o.Buttons({onInit:()=>{H({root:p.loginAndPurchaseEl,query:"#loadingPayPal",isVisible:!1})},createOrder:async()=>{const u=await Pu({isSandbox:p.use.payPalSandbox,vmkSection:a});return(u===void 0||u.data===void 0)&&alert(`Error creating order.  Please contact ${dr} for help`),u.data.id},onApprove:async(u,g)=>{(await Nu({isSandbox:p.use.payPalSandbox,orderId:u.orderID,vmkSection:a})).data.isPurchased&&setTimeout(()=>window.location.reload(),2e3)},onError:u=>{alert(`Error processing order. Try again, or please contact ${dr} for help`),console.error(u)}});if(l===void 0)throw new Error("paypal.Buttons is undefined?");l.render("#payPalButton")}catch(o){console.error("failed to load the PayPal JS SDK script",o)}Uu(i&&r)}),fe({root:p.loginAndPurchaseEl,query:"button.signIn"}).addEventListener("click",()=>Zc(p.auth,new V)),fe({root:p.loginAndPurchaseEl,query:"button.signOut"}).addEventListener("click",()=>bc(p.auth)),window.unlockVideo=xu}function fe(t){const{root:e,query:n}=t,i=(e??document).querySelector(n);if(!(i instanceof HTMLElement))throw new TypeError(`Cannot find ${n}`);return i}async function Mu(){const t=p.loginAndPurchaseEl.dataset.vmkSection;if(t===void 0||p.auth.currentUser===null)return!1;try{const e=await Du({vmkSection:t}),n=e.data.vmk!==void 0&&Object.keys(e.data.vmk).length>0;return n&&(p.vmk=e.data.vmk),n}catch(e){return console.error(e),!1}}function H(t){const{root:e,query:n,isVisible:i}=t,r=fe({root:e,query:n});if(r===void 0)return;const s=n.startsWith("button")||r.classList.contains("purchase")?"flex":"block";r.style.display=i?s:"none"}function Uu(t){const e=document.querySelectorAll("div.card img.locked");for(const n of e)n instanceof HTMLImageElement&&(n.src=`/images/marekKnows/${t?"watch":"locked"}.png`)}function xu(t){if(p.auth.currentUser===null||p.vmk===void 0||p.vmk[t]===void 0){p.loginAndPurchaseEl.scrollIntoView({behavior:"smooth"});return}window.playYouTubeVideo(p.vmk[t])}const Fu=document.querySelectorAll("div.card img.locked");Fu.length>0&&Lu();
