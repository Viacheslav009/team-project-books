!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.83a2140c.js","410VS":"icons.9f596ecc.svg","kpcbM":"not_fond_img@1x.4be6f1d7.png","j7IyJ":"not_fond_img@2x.005b4450.png","5UbS1":"index.70b8cf09.css","cIs3N":"index.d62e6e2d.js"}')),i("i8Q71");var s=i("dIxxU");function a(e,t){return e.length+3<=t?e:e.slice(0,t-3)+"..."}function c({book_image:e,_id:t,title:n,author:r}){let o=30;window.matchMedia("(min-width: 768px)").matches&&(o=20),window.matchMedia("(min-width: 1280px)").matches&&(o=15);const i=a(n,o);let s=55;window.matchMedia("(min-width: 768px)").matches&&(s=37),window.matchMedia("(min-width: 1280px)").matches&&(s=25);return`\n    <li class="books-list__item book">\n      <div class="book__img-wrapper">\n        <img class="book__img" src="${e}" alt="book's image" data-book="${t}" />\n        <div class="book__overlay" data-book="${t}">\n          <p class="book__quick-view" data-book="${t}">Quick view</p>\n        </div>\n      </div>\n      <div class="book__text" data-book="${t}">\n        <h3 class="book__title" data-book="${t}">${i}</h3>\n        <p class="book__author" data-book="${t}">${a(r,s)}</p>\n      </div>\n    </li>\n  `}var l={};l=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("kpcbM");var d={};function h(e,n){const r=e.split(" "),o=r.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${r.join(" ")} <span class="accent">${o}</span></h1>\n                <div class="message">\n                  <div class="message__inner">\n                    <p class="message__text">${n}</p>\n                    <div class="message__img">\n                    <img\n                      class="shopping-list--not-found"\n                      srcset=${t(l)} 1x, ${t(d)} 2x\n                      src=${t(l)}\n                      alt="books"\n                      width="322"\n                      height="241"\n                      />\n                    </div>\n                  </div>\n                </div>\n            </div>\n      `}d=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("j7IyJ");const u=document.querySelector(".js-page-loader");function p(){u.classList.toggle("backdrop__is-hidden")}s=i("dIxxU");function f(e){const t=`https://books-backend.p.goit.global/books/category?category=${e}`;return s.default.get(t)}const m=document.querySelector(".books-section");function b(){window.scroll({top:770,behavior:"smooth"}),window.matchMedia("(min-width: 768px)").matches&&window.scroll({top:680,behavior:"smooth"}),window.matchMedia("(min-width: 1280px)").matches&&window.scroll({top:0,behavior:"smooth"})}document.querySelector("main").addEventListener("click",(async function(e){if(!e.target.dataset.value)return;const t=e.target.dataset.value;if(function(e){document.querySelectorAll(".js-click-link").forEach((t=>{t.classList.contains("current-category")&&t.classList.remove("current-category"),t.dataset.value===e&&t.classList.add("current-category")}))}(t),"all-categories"===t)return;p();try{const e=await f(t);if(0===e.data.length){const e=h(t,"There are no books");return void(m.innerHTML=e)}const n=function(e,t){const n=e.split(" "),r=n.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${n.join(" ")} <span class="accent">${r}</span></h1>\n              <ul class="category-books-list">\n                ${t}\n              </ul>\n            </div>\n      `}(t,e.data.map((e=>c(e))).join(" "));m.innerHTML=n,b()}catch(e){console.log(e)}p()}));const g=document.querySelector(".books-section"),_=document.querySelector('[data-value="all-categories"]'),v=window.matchMedia("(min-width: 768px) and (max-width: 1279.98px)");async function w(){p();try{const e=await s.default.get("https://books-backend.p.goit.global/books/top-books");if(0===e.data.length){const e=h(selectedCategory,"There are no books");return void(g.innerHTML=e)}const t=e.data,n=function(e){return`\n    <div>\n      <h1 class="books-section__title">Best Sellers <span class="accent">Books</span></h1>\n      <ul class="books-section__list">\n        ${e}\n      </ul>\n    </div>\n  `}(t.map((e=>{const t=e.books;let n;if(n=c(t[0]),v.matches){const e=[],r=3;t.forEach(((t,n)=>{n<r&&e.push(c(t))})),n=e.join(" ")}window.matchMedia("(min-width: 1280px)").matches&&(n=t.map((e=>c(e))).join(" "));const r=function(e,t){return`\n  <li class="books-section__list-item">\n    <h2 class="books-section__list-item-title">${e.list_name}</h2>\n    <ul class="books-list">\n      ${t}\n    </ul>\n    <button type="button" class="btn-see-more" data-value="${e.list_name}">See more</button>\n  </li>\n`}(e,n);return r})).join(" "));g.innerHTML=n}catch(e){console.log(e)}p()}w(),v.addEventListener("change",w),_.addEventListener("click",w),_.addEventListener("click",b);s=i("dIxxU");const y=document.querySelector(".categories__list");!async function(){try{const e=await s.default.get("https://books-backend.p.goit.global/books/category-list"),t=e.data.map((e=>function(e){return`\n    <li class="categories__item">\n      <a class="categories__link js-click-link" data-value="${e}">\n        ${e}\n       </a>\n    </li>\n  `}(e.list_name))).join(" ");y.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}(),i("a2NHF");s=i("dIxxU");function E(e){const t=`https://books-backend.p.goit.global/books/${e}`;return s.default.get(t)}var k={};k=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("410VS");const S=document.querySelector("body"),I=document.querySelector(".books-section"),L=document.querySelector(".modal-book__backdrop"),D="books";let C=[];function A(){L.classList.remove("show-modal-book"),S.classList.remove("noScroll"),L.removeEventListener("click",T),window.removeEventListener("keydown",O)}function O(e){"Escape"===e.code&&(L.classList.remove("show-modal-book"),S.classList.remove("noScroll"),window.removeEventListener("keydown",O))}function T(e){e.currentTarget===e.target&&(e.target.classList.remove("show-modal-book"),S.classList.remove("noScroll"),window.removeEventListener("keydown",O))}I.addEventListener("click",(async function(e){let n=localStorage.getItem(D);if(C=JSON.parse(n),!e.target.dataset.book)return;p();try{const n=e.target.dataset.book,r=(await E(n)).data,o=function({book_image:e,title:n,author:r,description:o,amazon_product_url:i,buy_links:s}){return`\n  <div class="modal-book">\n    <button class="modal__btn-close" type="button" data-modal-close>\n      <svg class="modal__button-icon " width="28" height="28">\n        <use href=${t(k)}#icon-close></use>\n      </svg>\n    </button>\n    <div class="modal__inner">\n      <div class="modal__img-wrapper">\n        <img class="modal__img" src="${e}" alt="book's image" />\n      </div>\n      <div class="modal__information">\n        <p class="modal__book-title">${n}</p>\n        <p class="modal__book-author">${r}</p>\n        <p class="modal__book-description">${o}</p>\n        <ul class="modal__book-links">\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__amazon" href="${i}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to amazon"></a>\n          </li>\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__apple-book" href="${s[1].url}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to apple books"></a>\n          </li>\n          <li>\n          <a class="modal__book-link shopping-list__link shopping-list__bookshop" href="${s[4].url}" target="_blank"\n          rel="noopener noreferrer nofollow" aria-label="link to Bookshop"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class="modal__button js-btn-add" type="button" >Add to shopping list</button>\n    <div class="remove-block hidden-btn">\n      <button class="modal__button modal__button--remote js-btn-remove" type="button">\n        Remove from the shopping list\n      </button>\n      <p class="modal__message">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    </div>\n  </div>\n  `}(r);L.innerHTML=o,L.classList.add("show-modal-book"),S.classList.add("noScroll");const i=document.querySelector(".js-btn-add");i.addEventListener("click",(function(){null===C?(C=[],C.push(r),localStorage.setItem(D,JSON.stringify(C)),s.classList.remove("hidden-btn"),i.classList.add("hidden-btn")):C.find((e=>e._id===r._id))||(C.push(r),localStorage.setItem(D,JSON.stringify(C)),s.classList.remove("hidden-btn"),i.classList.add("hidden-btn"))}));const s=document.querySelector(".remove-block");null===localStorage.getItem("Name")&&(i.style.display="none",s.style.display="none"),null!==C&&C.find((e=>e._id===r._id))&&(s.classList.remove("hidden-btn"),i.classList.add("hidden-btn"));document.querySelector(".js-btn-remove").addEventListener("click",(function(){if(C.find((e=>e._id===r._id))){const e=C.find((e=>e._id===r._id)),t=C.indexOf(e);C.splice(t,1),localStorage.setItem(D,JSON.stringify(C)),s.classList.add("hidden-btn"),i.classList.remove("hidden-btn")}})),L.addEventListener("click",T);document.querySelector("[data-modal-close]").addEventListener("click",A),window.addEventListener("keydown",O)}catch(e){console.log(e)}p()}));const B=document.querySelector(".up-btn");window.addEventListener("scroll",(function(){window.scrollY>500?B.style.display="block":B.style.display="none"})),B.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));var $,N,M,x=$={};function H(){throw new Error("setTimeout has not been defined")}function j(){throw new Error("clearTimeout has not been defined")}function R(e){if(N===setTimeout)return setTimeout(e,0);if((N===H||!N)&&setTimeout)return N=setTimeout,setTimeout(e,0);try{return N(e,0)}catch(t){try{return N.call(null,e,0)}catch(t){return N.call(this,e,0)}}}!function(){try{N="function"==typeof setTimeout?setTimeout:H}catch(e){N=H}try{M="function"==typeof clearTimeout?clearTimeout:j}catch(e){M=j}}();var P,F=[],V=!1,U=-1;function z(){V&&P&&(V=!1,P.length?F=P.concat(F):U=-1,F.length&&q())}function q(){if(!V){var e=R(z);V=!0;for(var t=F.length;t;){for(P=F,F=[];++U<t;)P&&P[U].run();U=-1,t=F.length}P=null,V=!1,function(e){if(M===clearTimeout)return clearTimeout(e);if((M===j||!M)&&clearTimeout)return M=clearTimeout,clearTimeout(e);try{return M(e)}catch(t){try{return M.call(null,e)}catch(t){return M.call(this,e)}}}(e)}}function W(e,t){this.fun=e,this.array=t}function J(){}x.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];F.push(new W(e,t)),1!==F.length||V||R(q)},W.prototype.run=function(){this.fun.apply(null,this.array)},x.title="browser",x.browser=!0,x.env={},x.argv=[],x.version="",x.versions={},x.on=J,x.addListener=J,x.once=J,x.off=J,x.removeListener=J,x.removeAllListeners=J,x.emit=J,x.prependListener=J,x.prependOnceListener=J,x.listeners=function(e){return[]},x.binding=function(e){throw new Error("process.binding is not supported")},x.cwd=function(){return"/"},x.chdir=function(e){throw new Error("process.chdir is not supported")},x.umask=function(){return 0};
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
 */
const G=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},K={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,s=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=o>>2,d=(3&o)<<4|s>>4;let h=(15&s)<<2|c>>6,u=63&c;a||(u=64,i||(h=64)),r.push(n[l],n[d],n[h],n[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(G(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==s||null==a)throw new Y;const c=o<<2|i>>4;if(r.push(c),64!==s){const e=i<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q=function(e){return function(e){const t=G(e);return K.encodeByteArray(t,!0)}(e).replace(/\./g,"")},X=function(e){try{return K.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
const Z=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ee=()=>{try{return Z()||(()=>{if(void 0===$||void 0===$.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&X(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},te=()=>{var e;return null===(e=ee())||void 0===e?void 0:e.config};
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
 */
class ne{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function re(){try{return"object"==typeof indexedDB}catch(e){return!1}}class oe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ie.prototype.create)}}class ie{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(se,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new oe(r,s,n)}}const se=/\{\$([^}]+)}/g;
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
 */function ae(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(ce(n)&&ce(i)){if(!ae(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ce(e){return null!==e&&"object"==typeof e}
/**
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
 */class le{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const de="[DEFAULT]";
/**
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
 */class he{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ne;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:de})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=de){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=de){return this.instances.has(e)}getOptions(e=de){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===de?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=de){return this.component?this.component.multipleInstances?e:de:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ue{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new he(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const pe=[];var fe,me;(me=fe||(fe={}))[me.DEBUG=0]="DEBUG",me[me.VERBOSE=1]="VERBOSE",me[me.INFO=2]="INFO",me[me.WARN=3]="WARN",me[me.ERROR=4]="ERROR",me[me.SILENT=5]="SILENT";const be={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ge=fe.INFO,_e={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ve=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=_e[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};const we=(e,t)=>t.some((t=>e instanceof t));let ye,Ee;const ke=new WeakMap,Se=new WeakMap,Ie=new WeakMap,Le=new WeakMap,De=new WeakMap;let Ce={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Se.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ie.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ae(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ee||(Ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Be(this),t),Te(ke.get(this))}:function(...t){return Te(e.apply(Be(this),t))}:function(t,...n){const r=e.call(Be(this),t,...n);return Ie.set(r,t.sort?t.sort():[t]),Te(r)}}function Oe(e){return"function"==typeof e?Ae(e):(e instanceof IDBTransaction&&function(e){if(Se.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));Se.set(e,t)}(e),we(e,ye||(ye=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ce):e)}function Te(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(Te(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&ke.set(t,e)})).catch((()=>{})),De.set(t,e),t}(e);if(Le.has(e))return Le.get(e);const t=Oe(e);return t!==e&&(Le.set(e,t),De.set(t,e)),t}const Be=e=>De.get(e);function $e(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=Te(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(Te(s.result),e.oldVersion,e.newVersion,Te(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ne=["get","getKey","getAll","getAllKeys","count"],Me=["put","add","delete","clear"],xe=new Map;function He(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(xe.get(t))return xe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Me.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Ne.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return xe.set(t,i),i}Ce=(e=>({...e,get:(t,n,r)=>He(t,n)||e.get(t,n,r),has:(t,n)=>!!He(t,n)||e.has(t,n)}))(Ce);
/**
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
 */
class je{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Re="@firebase/app",Pe="0.9.17",Fe=new class{constructor(e){this.name=e,this._logLevel=ge,this._logHandler=ve,this._userLogHandler=null,pe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?be[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}("@firebase/app"),Ve="[DEFAULT]",Ue={[Re]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ze=new Map,qe=new Map;function We(e,t){try{e.container.addComponent(t)}catch(n){Fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Je(e){const t=e.name;if(qe.has(t))return Fe.debug(`There were multiple attempts to register component ${t}.`),!1;qe.set(t,e);for(const t of ze.values())We(t,e);return!0}
/**
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
 */
const Ge=new ie("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Ke{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new le("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}
/**
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
 */function Ye(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Ve,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw Ge.create("bad-app-name",{appName:String(o)});if(n||(n=te()),!n)throw Ge.create("no-options");const i=ze.get(o);if(i){if(ae(n,i.options)&&ae(r,i.config))return i;throw Ge.create("duplicate-app",{appName:o})}const s=new ue(o);for(const e of qe.values())s.addComponent(e);const a=new Ke(n,r,s);return ze.set(o,a),a}function Qe(e,t,n){var r;let o=null!==(r=Ue[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${o}" with version "${t}":`];return i&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fe.warn(e.join(" "))}Je(new le(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
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
 */
const Xe="firebase-heartbeat-database",Ze=1,et="firebase-heartbeat-store";let tt=null;function nt(){return tt||(tt=$e(Xe,Ze,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(et)}}).catch((e=>{throw Ge.create("idb-open",{originalErrorMessage:e.message})}))),tt}async function rt(e,t){try{const n=(await nt()).transaction(et,"readwrite"),r=n.objectStore(et);await r.put(t,ot(e)),await n.done}catch(e){if(e instanceof oe)Fe.warn(e.message);else{const t=Ge.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Fe.warn(t.message)}}}function ot(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class it{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new at(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=st(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),ct(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ct(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Q(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function st(){return(new Date).toISOString().substring(0,10)}class at{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!re()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await nt();return await t.transaction(et).objectStore(et).get(ot(e))}catch(e){if(e instanceof oe)Fe.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Fe.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ct(e){return Q(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var lt;lt="",Je(new le("platform-logger",(e=>new je(e)),"PRIVATE")),Je(new le("heartbeat",(e=>new it(e)),"PRIVATE")),Qe(Re,Pe,lt),Qe(Re,Pe,"esm2017"),Qe("fire-js","");
/**
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
 */
Qe("firebase","10.3.0","app");Ye({apiKey:"AIzaSyAgzxMxAoiph8ATmsqc1LmxJqycbI4-drA",authDomain:"team-project-books-b039a.firebaseapp.com",databaseURL:"https://team-project-books-b039a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"team-project-books-b039a",storageBucket:"team-project-books-b039a.appspot.com",messagingSenderId:"512231620356",appId:"1:512231620356:web:e1a401795113a0a48b9a51"});i("hDvYX"),i("32ZrB"),i("1Wl1N")}();
//# sourceMappingURL=index.83a2140c.js.map
