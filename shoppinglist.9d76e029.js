!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s("iE7OH").register(JSON.parse('{"7ttGv":"shoppinglist.9d76e029.js","410VS":"icons.9f596ecc.svg","kpcbM":"not_fond_img@1x.4be6f1d7.png","j7IyJ":"not_fond_img@2x.005b4450.png","5UbS1":"index.70b8cf09.css","cIs3N":"index.d62e6e2d.js"}')),s("i8Q71"),s("1Wl1N");var r,a={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,r=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,r,a=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),r=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):r(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,s=n;n>=0&&s<r;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){"use strict";var i=n(29),s=n(30),r=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=r(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),r=n(0),a=n(1),o=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=s({init:function(t,e){this._options=r({},l,e),this._currentPage=0,this._view=new o(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),r=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>s&&(e=Math.max(s-r+1,1),n=s)):(e=(a-1)*r+1,n=a*r,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),s=n(14),r=n(4),a=n(16),o=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(o(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,r=e===i.context,a=s&&r;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),s=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),r=n(21),a=n(22),o=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],d=["prev","next"],_=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(g,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(d,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==s||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,s=r(e);o(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),r=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=r(t,e),o=!1;s(a,(function(t){return t.handler!==n||(o=!0,!1)})),o||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,r){i(e)?s(e.split(/\s+/g),(function(e){a(t,e,n,r)})):s(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),r=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,c=[];o?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),r=n(2),a=n(4),o=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,d=/^-?\d+\.?\d*$/,_=2,v={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,a=0;return s(e,(function(t,s){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,s)),a=s+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,a="";return s(i.exps,(function(t,e){return(r=y(t,n))&&(a=P(i.sourcesInsideIf[e],n)),!r})),a},each:function(t,e,n){var i=y(t,n),a=r(i)?"@index":"@key",c={},l="";return s(i,(function(t,i){c[a]=i,c["@this"]=t,o(n,c),l+=P(e.slice(),n)})),l},with:function(t,e,n){var s=i("as",t),r=t[s+1],a=y(t.slice(0,s),n),c={};return c[r]=a,P(e,o(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return s.push(t.slice(r)),s};function x(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):l.test(t)?i=x((n=t.split(u))[0],e)[x(n[1],e)]:p.test(t)?i=x((n=t.split(f))[0],e)[n[1]]:d.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,s,r,o,c=v[t],l=1,u=0+_,p=e[u];l&&a(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=u),p=e[u+=_];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(s=0,r=i,(o=e.splice(s+1,r-s)).pop(),o),n),e}function y(t,e){var n=x(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(x(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function P(t,e){for(var n,i,s,r=1,o=t[r];a(o);)i=(n=o.split(" "))[0],v[i]?(s=b(i,t.splice(r,t.length-r),e),t=t.concat(s)):t[r]=y(n,e),o=t[r+=_];return t.join("")}t.exports=function(t,e){return P(m(t,c),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31),r=6048e5;t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>r}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},a=r();var o;o=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("kpcbM");var c;c=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("j7IyJ");var l;l=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("410VS");const u="books",p=document.querySelector(".shopping-list__books-list"),f=document.querySelector(".tui-pagination"),h=document.querySelector("#tui-pagination-container");document.querySelector(".put__btn");let g=1;const d=e=>e.map((e=>`\n      <li class="shopping-list__card">\n      <div class="shopping-list__wrapper">\n      <img\n        class="shopping-list__img"\n        src="${e.book_image}"\n        alt="book ${e.list_name}"\n      />\n      <div class="shopping-list__about-wrapper">\n      <div class="shopping-list__about-book">\n      <h2 class="shopping-list__title">${e.title}</h2>\n      <h3 class="shopping-list__category">${e.list_name}</h3>\n      <ul class="shopping-list__link-list">\n        <li>\n          <a\n            class="shopping-list__link shopping-list__amazon"\n            href="${e.buy_links.find((t=>"Amazon"===t.name)).url}"\n            aria-label="link to amazon"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n          </a>\n        </li>\n        <li>\n          <a\n            class="shopping-list__link shopping-list__apple-book"\n            href="${e.buy_links.find((t=>"Apple Books"===t.name)).url}"\n            aria-label="link to apple books"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n          </a>\n        </li>\n        <li>\n          <a\n            class="shopping-list__link shopping-list__bookshop"\n            href="${e.buy_links.find((t=>"Bookshop"===t.name)).url}"\n            aria-label="link to Bookshop"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n          </a>\n        </li>\n      </ul>\n      </div>\n      <p class="shopping-list__author">${e.author}</p>\n      <p class="shopping-list__description">${e.description}</p>\n      </div>\n      <button class="shopping-list__btn" aria-label ="btn-trash" data-id="${e._id}">\n        <svg class="shopping-list__icon" width="14" height="14">\n          <use href="${t(l)}#icon-trash"></use>\n        </svg>\n      </button>\n      </div>\n    </li>`)).join(" ");!async function(){const e=localStorage.getItem(u);if(e&&"[]"!==e){const n=JSON.parse(e);if(1===new(t(a))(f,{totalItems:Math.ceil(n.length),itemsPerPage:3,visiblePages:2}).getCurrentPage()){const t=n.splice(0,3);p.insertAdjacentHTML("afterbegin",d(t))}}else p.innerHTML=`<p class="shopping-list-not-found-text">This page is empty, add some books and proceed to order.<p>\n<img\n    class="shopping-list--not-found"\n    srcset=${t(o)} 1x, ${t(c)} 2x\n    src=${t(o)}\n    alt="books"\n    width="322"\n    height="241" loading="lazy"\n    />`}();p.addEventListener("click",(async e=>{const n=await localStorage.getItem(u);if("BUTTON"!==e.target.nodeName)return;const i=JSON.parse(n),s=e.target.dataset.id,r=i.findIndex((t=>t._id===s));i.splice(r,1);if(await localStorage.setItem(u,JSON.stringify(i)),"[]"!==localStorage.getItem(u)){new(t(a))(f,{totalItems:Math.ceil(i.length),itemsPerPage:3,page:`${g}`,currentPage:`${g}`,visiblePages:2,template:{page:'<a href="#" id=number_page_{{page}} class="tui-page-btn">{{page}}</a>'}});const e=document.getElementById(`number_page_${g}`);if("[]"!==localStorage.getItem(u)&&g<=Math.ceil(i.length/3)){const t=i.splice(3*(g-1),3);return p.innerHTML=await d(t),e.classList.add("tui-is-selected"),g}if(g>Math.ceil(i.length/3)){g=await(g-1);const t=i.splice(3*(g-1),3);p.innerHTML=await d(t);return document.getElementById(`number_page_${g}`).classList.add("tui-is-selected"),g}}else f.innerHTML="",f.classList.add("emptyPaginations"),p.innerHTML=await(`<p class="shopping-list-not-found-text">This page is empty, add some books and proceed to order.<p>\n<img\n    class="shopping-list--not-found"\n    srcset=${t(o)} 1x, ${t(c)} 2x\n    src=${t(o)}\n    alt="books"\n    width="322"\n    height="241" loading="lazy"\n    />`)})),h.addEventListener("click",(t=>{if("A"!==t.target.tagName&&"SPAN"!==t.target.tagName)return;const e=localStorage.getItem(u),n=JSON.parse(e);if(t.target.classList.contains("tui-next")&&g<Math.ceil(n.length/3)){g+=1;const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}if(t.target.classList.contains("tui-next-is-ellip")&&g<Math.ceil(n.length/3)){g+=2;const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}if(t.target.classList.contains("tui-next")&&Math.ceil(n.length/3))return g;if(t.target.classList.contains("tui-last")){g=Math.ceil(n.length/3);const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}if(t.target.classList.contains("tui-prev")&&g>1){g-=1;const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}if(t.target.classList.contains("tui-prev-is-ellip")&&3===g||t.target.classList.contains("tui-prev-is-ellip")&&g===Math.ceil(n.length/3)){g-=1;const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}if(t.target.classList.contains("tui-prev-is-ellip")&&g>1){g-=2;const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}if(t.target.classList.contains("tui-prev")&&1===g)return g;if(t.target.classList.contains("tui-first")){g=1;const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}{g=Number(t.target.textContent);const e=n.splice(3*(g-1),3);return p.innerHTML=d(e),t.target.classList.add("tui-is-selected"),g}})),s("32ZrB"),s("a2NHF"),s("hDvYX"),s("32ZrB")}();
//# sourceMappingURL=shoppinglist.9d76e029.js.map
