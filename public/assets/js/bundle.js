/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;
/*!
  * Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.originalHandler===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=L(e,i,n),l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return s.delegateTarget=r,n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.originalHandler,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void S(t,l,r,o,s?i:null)}if(c)for(const i of Object.keys(l))I(t,l,i,e.slice(1));const h=l[r]||{};for(const i of Object.keys(h)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=h[i];S(t,l,r,e.originalHandler,e.delegationSelector)}}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=new Event(e,{bubbles:o,cancelable:!0});if(void 0!==i)for(const t of Object.keys(i))Object.defineProperty(l,t,{get:()=>i[t]});return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}},M=new Map,j={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function H(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function $(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const W={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${$(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${$(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=H(t.dataset[n])}return e},getDataAttribute:(t,e)=>H(t.getAttribute(`data-bs-${$(e)}`))};class B{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?W.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?W.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class F extends B{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),j.set(this._element,this.constructor.DATA_KEY,this))}dispose(){j.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return j.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.0-beta1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const z=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class R extends F{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=R.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}z(R,"close"),g(R);const q='[data-bs-toggle="button"]';class V extends F{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=V.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",q,(t=>{t.preventDefault();const e=t.target.closest(q);V.getOrCreateInstance(e).toggle()})),g(V);const K={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},Q={leftCallback:null,rightCallback:null,endCallback:null},X={leftCallback:"(function|null)",rightCallback:"(function|null)",endCallback:"(function|null)"};class Y extends B{constructor(t,e){super(),this._element=t,t&&Y.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Q}static get DefaultType(){return X}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const U="next",G="prev",J="left",Z="right",tt="slid.bs.carousel",et="carousel",it="active",nt={ArrowLeft:Z,ArrowRight:J},st={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ot={interval:"(number|boolean)",keyboard:"boolean",ride:"(boolean|string)",pause:"(string|boolean)",touch:"boolean",wrap:"boolean"};class rt extends F{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=K.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===et&&this.cycle()}static get Default(){return st}static get DefaultType(){return ot}static get NAME(){return"carousel"}next(){this._slide(U)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(G)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,tt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,tt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?U:G;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&Y.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of K.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(J)),rightCallback:()=>this._slide(this._directionToOrder(Z)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Y(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=nt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=K.findOne(".active",this._indicatorsElement);e.classList.remove(it),e.removeAttribute("aria-current");const i=K.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(it),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===U,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(it),i.classList.remove(it,c,l),this._isSliding=!1,r(tt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return K.findOne(".active.carousel-item",this._element)}_getItems(){return K.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===J?G:U:t===J?U:G}_orderToDirection(t){return p()?t===G?J:Z:t===G?Z:J}static jQueryInterface(t){return this.each((function(){const e=rt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(et))return;t.preventDefault();const i=rt.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===W.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=K.find('[data-bs-ride="carousel"]');for(const e of t)rt.getOrCreateInstance(e)})),g(rt);const at="show",lt="collapse",ct="collapsing",ht='[data-bs-toggle="collapse"]',dt={toggle:!0,parent:null},ut={toggle:"boolean",parent:"(null|element)"};class ft extends F{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=K.find(ht);for(const t of n){const e=i(t),n=K.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return dt}static get DefaultType(){return ut}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>ft.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(lt),this._element.classList.add(ct),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ct),this._element.classList.add(lt,at),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ct),this._element.classList.remove(lt,at);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ct),this._element.classList.add(lt),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(at)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ht);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=K.find(":scope .collapse .collapse",this._config.parent);return K.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=ft.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",ht,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=K.find(e);for(const t of n)ft.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(ft);var pt="top",gt="bottom",mt="right",_t="left",bt="auto",vt=[pt,gt,mt,_t],yt="start",wt="end",At="clippingParents",Et="viewport",Tt="popper",Ct="reference",Ot=vt.reduce((function(t,e){return t.concat([e+"-"+yt,e+"-"+wt])}),[]),xt=[].concat(vt,[bt]).reduce((function(t,e){return t.concat([e,e+"-"+yt,e+"-"+wt])}),[]),kt="beforeRead",Lt="read",Dt="afterRead",St="beforeMain",It="main",Nt="afterMain",Pt="beforeWrite",Mt="write",jt="afterWrite",Ht=[kt,Lt,Dt,St,It,Nt,Pt,Mt,jt];function $t(t){return t?(t.nodeName||"").toLowerCase():null}function Wt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Bt(t){return t instanceof Wt(t).Element||t instanceof Element}function Ft(t){return t instanceof Wt(t).HTMLElement||t instanceof HTMLElement}function zt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Wt(t).ShadowRoot||t instanceof ShadowRoot)}const Rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];Ft(s)&&$t(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});Ft(n)&&$t(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function qt(t){return t.split("-")[0]}var Vt=Math.max,Kt=Math.min,Qt=Math.round;function Xt(t,e){void 0===e&&(e=!1);var i=t.getBoundingClientRect(),n=1,s=1;if(Ft(t)&&e){var o=t.offsetHeight,r=t.offsetWidth;r>0&&(n=Qt(i.width)/r||1),o>0&&(s=Qt(i.height)/o||1)}return{width:i.width/n,height:i.height/s,top:i.top/s,right:i.right/n,bottom:i.bottom/s,left:i.left/n,x:i.left/n,y:i.top/s}}function Yt(t){var e=Xt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Ut(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&zt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Gt(t){return Wt(t).getComputedStyle(t)}function Jt(t){return["table","td","th"].indexOf($t(t))>=0}function Zt(t){return((Bt(t)?t.ownerDocument:t.document)||window.document).documentElement}function te(t){return"html"===$t(t)?t:t.assignedSlot||t.parentNode||(zt(t)?t.host:null)||Zt(t)}function ee(t){return Ft(t)&&"fixed"!==Gt(t).position?t.offsetParent:null}function ie(t){for(var e=Wt(t),i=ee(t);i&&Jt(i)&&"static"===Gt(i).position;)i=ee(i);return i&&("html"===$t(i)||"body"===$t(i)&&"static"===Gt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ft(t)&&"fixed"===Gt(t).position)return null;var i=te(t);for(zt(i)&&(i=i.host);Ft(i)&&["html","body"].indexOf($t(i))<0;){var n=Gt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function ne(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function se(t,e,i){return Vt(t,Kt(e,i))}function oe(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function re(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const ae={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=qt(i.placement),l=ne(a),c=[_t,mt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return oe("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:re(t,vt))}(s.padding,i),d=Yt(o),u="y"===l?pt:_t,f="y"===l?gt:mt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=ie(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=se(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Ut(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function le(t){return t.split("-")[1]}var ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function he(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=_t,y=pt,w=window;if(c){var A=ie(i),E="clientHeight",T="clientWidth";A===Wt(i)&&"static"!==Gt(A=Zt(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===pt||(s===_t||s===mt)&&o===wt)&&(y=gt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==_t&&(s!==pt&&s!==gt||o!==wt)||(v=mt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&ce),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Qt(e*n)/n||0,y:Qt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const de={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:qt(e.placement),variation:le(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,he(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,he(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ue={passive:!0};const fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Wt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ue)})),a&&l.addEventListener("resize",i.update,ue),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ue)})),a&&l.removeEventListener("resize",i.update,ue)}},data:{}};var pe={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(t){return t.replace(/left|right|bottom|top/g,(function(t){return pe[t]}))}var me={start:"end",end:"start"};function _e(t){return t.replace(/start|end/g,(function(t){return me[t]}))}function be(t){var e=Wt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ve(t){return Xt(Zt(t)).left+be(t).scrollLeft}function ye(t){var e=Gt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function we(t){return["html","body","#document"].indexOf($t(t))>=0?t.ownerDocument.body:Ft(t)&&ye(t)?t:we(te(t))}function Ae(t,e){var i;void 0===e&&(e=[]);var n=we(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Wt(n),r=s?[o].concat(o.visualViewport||[],ye(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ae(te(r)))}function Ee(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Te(t,e){return e===Et?Ee(function(t){var e=Wt(t),i=Zt(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+ve(t),y:a}}(t)):Bt(e)?function(t){var e=Xt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ee(function(t){var e,i=Zt(t),n=be(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Vt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Vt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ve(t),l=-n.scrollTop;return"rtl"===Gt(s||i).direction&&(a+=Vt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Zt(t)))}function Ce(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?qt(s):null,r=s?le(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case pt:e={x:a,y:i.y-n.height};break;case gt:e={x:a,y:i.y+i.height};break;case mt:e={x:i.x+i.width,y:l};break;case _t:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?ne(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case yt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case wt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Oe(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?At:o,a=i.rootBoundary,l=void 0===a?Et:a,c=i.elementContext,h=void 0===c?Tt:c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,g=oe("number"!=typeof p?p:re(p,vt)),m=h===Tt?Ct:Tt,_=t.rects.popper,b=t.elements[u?m:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Ae(te(t)),i=["absolute","fixed"].indexOf(Gt(t).position)>=0&&Ft(t)?ie(t):t;return Bt(i)?e.filter((function(t){return Bt(t)&&Ut(t,i)&&"body"!==$t(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Te(t,i);return e.top=Vt(n.top,e.top),e.right=Kt(n.right,e.right),e.bottom=Kt(n.bottom,e.bottom),e.left=Vt(n.left,e.left),e}),Te(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(Bt(b)?b:b.contextElement||Zt(t.elements.popper),r,l),y=Xt(t.elements.reference),w=Ce({reference:y,element:_,strategy:"absolute",placement:s}),A=Ee(Object.assign({},_,w)),E=h===Tt?A:y,T={top:v.top-E.top+g.top,bottom:E.bottom-v.bottom+g.bottom,left:v.left-E.left+g.left,right:E.right-v.right+g.right},C=t.modifiersData.offset;if(h===Tt&&C){var O=C[s];Object.keys(T).forEach((function(t){var e=[mt,gt].indexOf(t)>=0?1:-1,i=[pt,gt].indexOf(t)>=0?"y":"x";T[t]+=O[i]*e}))}return T}function xe(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?xt:l,h=le(n),d=h?a?Ot:Ot.filter((function(t){return le(t)===h})):vt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Oe(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[qt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const ke={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=qt(m),b=l||(_!==m&&p?function(t){if(qt(t)===bt)return[];var e=ge(t);return[_e(t),e,_e(e)]}(m):[ge(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(qt(i)===bt?xe(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=qt(O),k=le(O)===yt,L=[pt,gt].indexOf(x)>=0,D=L?"width":"height",S=Oe(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?mt:_t:k?gt:pt;y[D]>w[D]&&(I=ge(I));var N=ge(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var M=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},j=p?3:1;j>0&&"break"!==M(j);j--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Le(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function De(t){return[pt,mt,gt,_t].some((function(e){return t[e]>=0}))}const Se={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Oe(e,{elementContext:"reference"}),a=Oe(e,{altBoundary:!0}),l=Le(r,n),c=Le(a,s,o),h=De(l),d=De(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=xt.reduce((function(t,i){return t[i]=function(t,e,i){var n=qt(t),s=[_t,pt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[_t,mt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Ne={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Ce({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Pe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=Oe(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=qt(e.placement),b=le(e.placement),v=!b,y=ne(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?pt:_t,S="y"===y?gt:mt,I="y"===y?"height":"width",N=A[y],P=N+m[D],M=N-m[S],j=f?-T[I]/2:0,H=b===yt?E[I]:T[I],$=b===yt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Yt(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],R=F[S],q=se(0,E[I],B[I]),V=v?E[I]/2-j-q-z-O.mainAxis:H-q-z-O.mainAxis,K=v?-E[I]/2+j+q+R+O.mainAxis:$+q+R+O.mainAxis,Q=e.elements.arrow&&ie(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=se(f?Kt(P,N+V-Y-X):P,N,f?Vt(M,U):M);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?pt:_t,tt="x"===y?gt:mt,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[pt,_t].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=se(t,e,i);return n>i?i:n}(at,et,lt):se(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function Me(t,e,i){void 0===i&&(i=!1);var n,s,o=Ft(e),r=Ft(e)&&function(t){var e=t.getBoundingClientRect(),i=Qt(e.width)/t.offsetWidth||1,n=Qt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Zt(e),l=Xt(t,r),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==$t(e)||ye(a))&&(c=(n=e)!==Wt(n)&&Ft(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:be(n)),Ft(e)?((h=Xt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=ve(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function je(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var He={placement:"bottom",modifiers:[],strategy:"absolute"};function $e(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function We(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?He:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},He,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Bt(t)?Ae(t):t.contextElement?Ae(t.contextElement):[],popper:Ae(e)};var r,c,u=function(t){var e=je(t);return Ht.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if($e(e,i)){a.rects={reference:Me(e,ie(i),"fixed"===a.options.strategy),popper:Yt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!$e(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var Be=We(),Fe=We({defaultModifiers:[fe,Ne,de,Rt]}),ze=We({defaultModifiers:[fe,Ne,de,Rt,Ie,ke,Pe,ae,Se]});const Re=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:We,detectOverflow:Oe,createPopperBase:Be,createPopper:ze,createPopperLite:Fe,top:pt,bottom:gt,right:mt,left:_t,auto:bt,basePlacements:vt,start:yt,end:wt,clippingParents:At,viewport:Et,popper:Tt,reference:Ct,variationPlacements:Ot,placements:xt,beforeRead:kt,read:Lt,afterRead:Dt,beforeMain:St,main:It,afterMain:Nt,beforeWrite:Pt,write:Mt,afterWrite:jt,modifierPhases:Ht,applyStyles:Rt,arrow:ae,computeStyles:de,eventListeners:fe,flip:ke,hide:Se,offset:Ie,popperOffsets:Ne,preventOverflow:Pe},Symbol.toStringTag,{value:"Module"})),qe="dropdown",Ve="ArrowUp",Ke="ArrowDown",Qe="click.bs.dropdown.data-api",Xe="keydown.bs.dropdown.data-api",Ye="show",Ue='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ge=`${Ue}.show`,Je=".dropdown-menu",Ze=p()?"top-end":"top-start",ti=p()?"top-start":"top-end",ei=p()?"bottom-end":"bottom-start",ii=p()?"bottom-start":"bottom-end",ni=p()?"left-start":"right-start",si=p()?"right-start":"left-start",oi={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ri={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class ai extends F{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=K.findOne(Je,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return oi}static get DefaultType(){return ri}static get NAME(){return qe}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ye),this._element.classList.add(Ye),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ye),this._element.classList.remove(Ye),this._element.setAttribute("aria-expanded","false"),W.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===Re)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=ze(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ye)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return ni;if(t.classList.contains("dropstart"))return si;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ti:Ze:e?ii:ei}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(W.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ke,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=ai.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=K.find(Ge);for(const i of e){const e=ai.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ve,Ke].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=K.findOne(Ue,t.delegateTarget.parentNode),o=ai.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Xe,Ue,ai.dataApiKeydownHandler),P.on(document,Xe,Je,ai.dataApiKeydownHandler),P.on(document,Qe,ai.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",ai.clearMenus),P.on(document,Qe,Ue,(function(t){t.preventDefault(),ai.getOrCreateInstance(this).toggle()})),g(ai);const li=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ci=".sticky-top",hi="padding-right",di="margin-right";class ui{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,hi,(e=>e+t)),this._setElementAttributes(li,hi,(e=>e+t)),this._setElementAttributes(ci,di,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,hi),this._resetElementAttributes(li,hi),this._resetElementAttributes(ci,di)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&W.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=W.getDataAttribute(t,e);null!==i?(W.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of K.find(t,this._element))e(i)}}const fi="show",pi="mousedown.bs.backdrop",gi={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},mi={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class _i extends B{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return gi}static get DefaultType(){return mi}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(fi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(fi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,pi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,pi,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const bi=".bs.focustrap",vi="backward",yi={trapElement:null,autofocus:!0},wi={trapElement:"element",autofocus:"boolean"};class Ai extends B{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return yi}static get DefaultType(){return wi}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,bi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,bi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=K.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===vi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?vi:"forward")}}const Ei="hidden.bs.modal",Ti="show.bs.modal",Ci="modal-open",Oi="show",xi="modal-static",ki={backdrop:!0,keyboard:!0,focus:!0},Li={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class Di extends F{constructor(t,e){super(t,e),this._dialog=K.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ui,this._addEventListeners()}static get Default(){return ki}static get DefaultType(){return Li}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,Ti,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ci),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Oi),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _i({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ai({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=K.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(Oi),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"click.dismiss.bs.modal",(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Ci),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Ei)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(xi)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(xi),this._queueCallback((()=>{this._element.classList.remove(xi),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Di.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,Ti,(t=>{t.defaultPrevented||P.one(e,Ei,(()=>{a(this)&&this.focus()}))}));const i=K.findOne(".modal.show");i&&Di.getInstance(i).hide(),Di.getOrCreateInstance(e).toggle(this)})),z(Di),g(Di);const Si="show",Ii="showing",Ni="hiding",Pi=".offcanvas.show",Mi="hidePrevented.bs.offcanvas",ji="hidden.bs.offcanvas",Hi={backdrop:!0,keyboard:!0,scroll:!1},$i={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Wi extends F{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Hi}static get DefaultType(){return $i}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ui).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ii),this._queueCallback((()=>{this._config.scroll||this._focustrap.activate(),this._element.classList.add(Si),this._element.classList.remove(Ii),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ni),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Si,Ni),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ui).reset(),P.trigger(this._element,ji)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new _i({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,Mi)}:null})}_initializeFocusTrap(){return new Ai({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,Mi))}))}static jQueryInterface(t){return this.each((function(){const e=Wi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,ji,(()=>{a(this)&&this.focus()}));const i=K.findOne(Pi);i&&i!==e&&Wi.getInstance(i).hide(),Wi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of K.find(Pi))Wi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Wi.getOrCreateInstance(t).hide()})),z(Wi),g(Wi);const Bi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Fi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,zi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ri=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Bi.has(i)||Boolean(Fi.test(t.nodeValue)||zi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},qi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Vi={extraClass:"",template:"<div></div>",content:{},html:!1,sanitize:!0,sanitizeFn:null,allowList:qi},Ki={extraClass:"(string|function)",template:"string",content:"object",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object"},Qi={selector:"(string|element)",entry:"(string|element|function|null)"};class Xi extends B{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Vi}static get DefaultType(){return Ki}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Qi)}_setContent(t,e,i){const n=K.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Ri(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Yi=new Set(["sanitize","allowList","sanitizeFn"]),Ui="fade",Gi="show",Ji=".modal",Zi="hide.bs.modal",tn="hover",en="focus",nn={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},sn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:qi,popperConfig:null},on={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"};class rn extends F{constructor(t,e){if(void 0===Re)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this.tip=null,this._setListeners()}static get Default(){return sn}static get DefaultType(){return on}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(Ji),Zi,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._createPopper(i),i.classList.add(Gi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{const t=this._isHovered;this._isHovered=!1,P.trigger(this._element,this.constructor.eventName("shown")),t&&this._leave()}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Gi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=!1,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ui,Gi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ui),e}setContent(t){let e=!1;this.tip&&(e=this._isShown(),this.tip.remove(),this.tip=null),this._disposePopper(),this.tip=this._createTipElement(t),e&&this.show()}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Xi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._config.title}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ui)}_isShown(){return this.tip&&this.tip.classList.contains(Gi)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=nn[e.toUpperCase()];this._popper=ze(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>this.toggle(t)));else if("manual"!==e){const t=e===tn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===tn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?en:tn]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?en:tn]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(Ji),Zi,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=W.getDataAttributes(this._element);for(const t of Object.keys(e))Yi.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"",t.title=this._resolvePossibleFunction(t.title)||t.originalTitle,"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=rn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(rn);const an={...rn.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},ln={...rn.DefaultType,content:"(null|string|element|function)"};class cn extends rn{static get Default(){return an}static get DefaultType(){return ln}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=cn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(cn);const hn="click.bs.scrollspy",dn="active",un="[href]",fn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},pn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class gn extends F{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return fn}static get DefaultType(){return pn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,hn),P.on(this._config.target,hn,un,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=K.find(un,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=K.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(dn),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))K.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(dn);else for(const e of K.parents(t,".nav, .list-group"))for(const t of K.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(dn)}_clearActiveClass(t){t.classList.remove(dn);const e=K.find("[href].active",t);for(const t of e)t.classList.remove(dn)}static jQueryInterface(t){return this.each((function(){const e=gn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of K.find('[data-bs-spy="scroll"]'))gn.getOrCreateInstance(t)})),g(gn);const mn="ArrowLeft",_n="ArrowRight",bn="ArrowUp",vn="ArrowDown",yn="active",wn="fade",An="show",En='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Tn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${En}`;class Cn extends F{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(yn),this._activate(n(t));const i=t.classList.contains(wn);this._queueCallback((()=>{i&&t.classList.add(An),"tab"===t.getAttribute("role")&&(t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e}))}),t,i)}_deactivate(t,e){if(!t)return;t.classList.remove(yn),t.blur(),this._deactivate(n(t));const i=t.classList.contains(wn);this._queueCallback((()=>{i&&t.classList.remove(An),"tab"===t.getAttribute("role")&&(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e}))}),t,i)}_keydown(t){if(![mn,_n,bn,vn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[_n,vn].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&Cn.getOrCreateInstance(i).show()}_getChildren(){return K.find(Tn,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=K.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",yn),n(".dropdown-menu",An),n(".dropdown-item",yn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(yn)}_getInnerElement(t){return t.matches(Tn)?t:K.findOne(Tn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Cn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",En,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Cn.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of K.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Cn.getOrCreateInstance(t)})),g(Cn);const On="hide",xn="show",kn="showing",Ln={animation:"boolean",autohide:"boolean",delay:"number"},Dn={animation:!0,autohide:!0,delay:5e3};class Sn extends F{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Dn}static get DefaultType(){return Ln}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(On),d(this._element),this._element.classList.add(xn,kn),this._queueCallback((()=>{this._element.classList.remove(kn),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(kn),this._queueCallback((()=>{this._element.classList.add(On),this._element.classList.remove(kn,xn),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(xn),super.dispose()}isShown(){return this._element.classList.contains(xn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Sn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return z(Sn),g(Sn),{Alert:R,Button:V,Carousel:rt,Collapse:ft,Dropdown:ai,Modal:Di,Offcanvas:Wi,Popover:cn,ScrollSpy:gn,Tab:Cn,Toast:Sn,Tooltip:rn}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
;
/**
 * Swiper 8.2.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 1, 2022
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const v=-o[g];if(r.updateProgress(v),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function O(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&p.target&&p.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(m,h[0]):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function L(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=O.bind(e),e.onTouchMove=L.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function j(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const _={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},q={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:j(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,q,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(q,e)}static get extendedDefaults(){return q}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(_).forEach((e=>{Object.keys(_[e]).forEach((t=>{V.prototype[t]=_[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&t.slidePrev()}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&t.slideNext()}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function O(){l&&(l=!1,k("off"))}function L(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&L()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:L,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("l.html")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}});let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=e=>{const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||t.slideTo(t.slides.indexOf(s),0)},b=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},x=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),b(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",w,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&x()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&b()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",w,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e.html):t.location;const a=s.pathname.slice(1).split("https://wealcoder.com/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.html):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=t.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(t.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();n=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,l=t.activeIndex>t.previousIndex?"next":"prev"}else n=t.realIndex,l=n>t.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,e?0:void 0))}let n=1;const l=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(n=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<n;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(l);else for(let e=0;e<n;e+=1)s.slides.eq(t.realIndex+e).addClass(l)}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map
;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.counterUp=t():e.counterUp=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n,divideNumbers:()=>r});const n=(e,t={})=>{const{action:n="start",duration:i=1e3,delay:u=16}=t;if("stop"===n)return void o(e);if(o(e),!/[0-9]/.test(e.innerHTML))return;const l=r(e.innerHTML,{duration:i||e.getAttribute("data-duration"),delay:u||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=l[0]||"&nbsp;",e.style.visibility="visible";const c=function(){e.innerHTML=l.shift()||"&nbsp;",l.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(c,u)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(c,u)},o=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},r=(e,t={})=>{const{duration:n=1e3,delay:o=16}=t,r=n/o,i=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),u=[];for(let e=0;e<r;e++)u.push("");for(let e=0;e<i.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(i[e])&&!/<[^>]+>/.test(i[e])){let t=i[e];const n=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let o=u.length-1;for(let e=r;e>=1;e--){let i=parseInt(t/r*e,10);i=n.reduce(((e,{char:t,i:n})=>e.length<=n?e:e.slice(0,-n)+t+e.slice(-n)),i.toString()),u[o--]+=i}}else for(let t=0;t<r;t++)u[t]+=i[e];return u[u.length]=e.toString(),u};return t})()}));
;
/*!
 * GSAP 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Ce}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new jt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Ot(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&!B&&ma(),t.render(e,r,i||B&&e<0&&(t._initted||t._startAt)),ct.length&&!B&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||L,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}($(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(B?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||V)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=Ga(t.rawTime(),e),(!e._dur||kt(0,e.totalDuration(),r)-e._tTime>V)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-V}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==L?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Ht(t,e,n),t._initted?!r&&t._pt&&!B&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Et.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Ut?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Gt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=Yt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Lt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=$(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa($(t)?!e:!0===r?!!(r=0):!i,function(){return $(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!B),t.progress()<1&&Ct(t,"onInterrupt"),t}function yb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*At+.5|0}function zb(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&At,e&At]:0:St.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),St[e])p=St[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&At,p&At,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&At,e&At]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=yb(o+1/3,n,a),p[1]=yb(o,n,a),p[2]=yb(o-1/3,n,a);else p=e.match(tt)||St.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/At,a=p[1]/At,s=p[2]/At,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Ab(t){var r=[],i=[],n=-1;return t.split(Rt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Bb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Rt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=zb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Ab(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Rt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Rt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Eb(t){var e,r=t.join(" ");if(Rt.lastIndex=0,Rt.test(r))return e=Dt.test(r),t[1]=Bb(t[1],e),t[0]=Bb(t[0],e,Ab(t[1])),!0}function Nb(t){var e=(t+"").split("("),r=Ft[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Ft._CE&&It.test(t)?Ft._CE("",t):r}function Pb(t,e){for(var r,i=t._first;i;)i instanceof Ut?Pb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Pb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Rb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Ft[t]=ot[t]=a,Ft[n=t.toLowerCase()]=r,a)Ft[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Ft[t+"."+e]=a[e]}),a}function Sb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Tb(r,t,e){function Hm(t){return 1===t?1:i*Math.pow(2,-10*t)*G((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/W*(Math.asin(1/i)||0),s="out"===r?Hm:"in"===r?function(t){return 1-Hm(1-t)}:Sb(Hm);return n=W/n,s.config=function(t,e){return Tb(r,t,e)},s}function Ub(e,r){function Pm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Pm:"in"===e?function(t){return 1-Pm(1-t)}:Sb(Pm);return t.config=function(t){return Ub(e,t)},t}var I,B,l,L,h,n,a,i,o,f,c,d,p,_,m,g,b,k,M,O,C,A,D,E,z,F,Y,N,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},q={duration:.5,overwrite:!1,delay:0},U=1e8,V=1/U,W=2*Math.PI,X=W/4,H=0,K=Math.sqrt,Z=Math.cos,G=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},$=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*($(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},kt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Mt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&zt()?$(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):_a(t)?Mt.call(t,0):t?[t]:[]:Mt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=255,St={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Rt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in St)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,Et=(M=Date.now,O=500,C=33,A=M(),D=A,z=E=1e3/240,g={time:0,frame:0,tick:function tick(){wl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Ce,(h.gsapVersions||(h.gsapVersions=[])).push(Ce.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,wl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){O=t||1/0,C=Math.min(e||33,O)},fps:function fps(t){E=1e3/(t||240),z=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),zt(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=k&&k--},_listeners:F=[]}),zt=function _wake(){return!d&&Et.wake()},Ft={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,Lt=function _invertEase(e){return function(t){return 1-e(1-t)}},Yt=function _parseEase(t,e){return t&&(s(t)?t:Ft[t]||Nb(t))||e};function wl(t){var e,r,i,n,a=M()-D,s=!0===t;if(O<a&&(A+=a-C),(0<(e=(i=(D+=a)-A)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(E<=e?4:E-e),r=1),s||(p=_(wl)),r)for(k=0;k<F.length;k++)F[k](i,b,n,t)}function en(t){return t<N?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Rb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn,Rb("Elastic",Tb("in"),Tb("out"),Tb()),Y=7.5625,N=1/2.75,Rb("Bounce",function(t){return 1-en(1-t)},en),Rb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Rb("Circ",function(t){return-(K(1-t*t)-1)}),Rb("Sine",function(t){return 1===t?1:1-Z(t*X)}),Rb("Back",Ub("in"),Ub("out"),Ub()),Ft.SteppedEase=Ft.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*kt(0,.99999999,t)|0)+n)*r}}},q.ease=Ft["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var Nt,jt=function GSCache(t,e){this.id=H++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:re},qt=((Nt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Nt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Nt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Nt.totalTime=function totalTime(t,e){if(zt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===V||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},Nt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Nt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Nt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Nt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},Nt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-V?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-V?0:this._rts,this.totalTime(kt(-this._delay,this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Nt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==V&&(this._tTime-=V)))),this):this._ps},Nt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},Nt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Nt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},Nt.revert=function revert(t){void 0===t&&(t=lt);var e=B;return B=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),B=e,this},Nt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(t):r},Nt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},Nt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},Nt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Nt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},Nt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},Nt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Nt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Nt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Nt.resume=function resume(){return this.paused(!1)},Nt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-V:0)),this):this._rts<0},Nt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-V,this},Nt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-V))},Nt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Nt.then=function then(t){var i=this;return new Promise(function(e){function zo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?zo():i._prom=zo})},Nt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Et.wake()}qa(qt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-V,_prom:0,_ps:!1,_rts:1});var Ut=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),L&&Ka(t.parent||L,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Gt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==L&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Pb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-V);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||B&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-V:V);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-V)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof qt)){if($(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Gt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Et.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Vt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof Gt?la(s._targets,a)&&(o?(!Vt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Gt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||V,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+V)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===L&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(L._ts&&(na(L,Ga(t,L)),f=Et.frame),Et.frame>=mt){mt+=j.autoSleep||120;var e=L._first;if((!e||!e._ts)&&j.autoSleep&&Et._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Et.sleep()}}},Timeline}(qt);qa(Ut.prototype,{_lock:0,_hasPause:0,_forcing:0});function _b(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Qt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||$(t)||J(t))return r(t)?Qt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Qt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new pe(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function fc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if($(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Vt,Wt,Xt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?ee:$t:Jt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new pe(this._pt,t,e,0,1,se,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||j.stringFilter,l)):(c=new pe(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?ae:ne,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Ht=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,k=m.callbackScope,M=m.runBackwards,O=m.yoyoEase,P=m.keyframes,C=m.autoRevert,A=t._dur,S=t._startAt,R=t._targets,D=t.parent,E=D&&"nested"===D.data?D.vars.targets:R,z="auto"===t._overwrite&&!I,F=t.timeline;if(!F||P&&g||(g="none"),t._ease=Yt(g,q.ease),t._yEase=O?Lt(Yt(!0===O?g:O,q.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!F&&!!m.runBackwards,!F||P&&!m.stagger){if(p=(l=R[0]?fa(R[0]).harness:0)&&m[l.prop],i=ua(m,ft),S&&(S._zTime<0&&S.progress(1),e<0&&M&&y&&!C?S.render(-1,!0):S.revert(M&&A?ht:ut),S._lazy=0),v){if(za(t._startAt=Gt.set(R,qa({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!S&&w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:k,stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(B||!y&&!C)&&t._startAt.revert(ht),y&&A&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(M&&A&&!S)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!S&&w(T),immediateRender:y,stagger:0,parent:D},i),p&&(a[l.prop]=p),za(t._startAt=Gt.set(R,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(B?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,V,V);for(t._pt=t._ptCache=0,T=A&&w(T)||T&&!A,n=0;n<R.length;n++){if(h=(o=R[n])._gsap||ea(R)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=E===R?n:E.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,E)&&(t._pt=s=new pe(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=_b(a,i,t,d,o,E))?f.priority&&(u=1):c[a]=s=Xt.call(t,o,a,"get",i[a],d,E,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),z&&t._pt&&(Vt=t,L.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Vt=0),t._pt&&T&&(dt[h.id]=1)}u&&de(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,P&&e<=0&&F.render(U,!0,!0)},Qt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Kt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zt={};ha(Kt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Zt[t]=1});var Gt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,k=p.defaults,M=p.scrollTrigger,O=p.yoyoEase,P=r.parent||L,C=($(e)||J(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://greensock.com",!j.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Ut({data:"nested",defaults:k||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,c=T&&eb(T),v(T))for(l in T)~Kt.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Zt)).stagger=0,O&&(u.yoyoEase=O),d&&yt(u,d),f=C[o],u.duration=+Qt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Qt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,C):0),s._ease=Ft.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=Yt(x.ease||r.ease||"none");var A,S,D,E=0;if($(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||fc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(D={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,D,E),E+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||I||(Vt=_assertThisInitialized(a),L.killTweensOf(C),Vt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-V,a.render(Math.max(0,-m)||0)),M&&La(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-V<t&&!_?d:t<V?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Pb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-V:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(Ct(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=kt(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||B||i||t._zTime===V||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?V:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||B||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Et.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Ht(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Ht(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Vt&&!0!==Vt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Ot(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return L.killTweensOf(t,e,r)},Tween}(qt);qa(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Ut,e=Mt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function nc(t,e,r){return t.setAttribute(e,r)}function vc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Jt=function _setterPlain(t,e,r){return t[e]=r},$t=function _setterFunc(t,e,r){return t[e](r)},ee=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},re=function _getSetter(t,e){return s(t[e])?$t:u(t[e])&&t.setAttribute?nc:Jt},ne=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},ae=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},se=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},oe=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},le=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},fe=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},de=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},pe=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=vc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ne,this.d=s||this,this.set=o||Jt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Gt,ot.TimelineLite=ot.TimelineMax=Ut,L=new Ut({sortChildren:!1,defaults:q,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),j.stringFilter=Eb;function Cc(t){return(Te[t]||we).map(function(t){return t()})}function Dc(){var t=Date.now(),o=[];2<t-xe&&(Cc("matchMediaInit"),ye.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Cc("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),xe=t,Cc("matchMedia"))}var _e,ye=[],Te={},we=[],xe=0,ke=((_e=Context.prototype).add=function add(t,i,n){function Cw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Cw,t===s?Cw(a):t?a[t]=Cw:Cw},_e.ignore=function ignore(t){var e=l;l=null,t(this),l=e},_e.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Gt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},_e.clear=function clear(){this._r.length=this.data.length=0},_e.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof qt)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t){var n=ye.indexOf(this);~n&&ye.splice(n,1)}},_e.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var Me,Oe=((Me=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new ke(0,r||this.scope),o=s.conditions={};for(n in this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ye.indexOf(s)<0&&ye.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Dc):i.addEventListener("change",Dc));return a&&e(s),this},Me.revert=function revert(t){this.kill(t||{})},Me.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Pe={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:oe,add:Xt,kill:fe,modifier:le,rawVars:0},a={targetTest:0,get:0,getSetter:re,aliases:{},register:0};if(zt(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Ce,i,pe)}(t)})},timeline:function timeline(t){return new Ut(t)},getTweensOf:function getTweensOf(t,e){return L.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return Ce.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&oe(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Ux(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Ce.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Ux.tween=n,Ux},isTweening:function isTweening(t){return 0<L.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Yt(t.ease,q.ease)),ta(q,t||{})},config:function config(t){return ta(j,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Ot(t),qa(e||{},a),r)},r&&(Ut.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Ft[t]=Yt(e)},parseEase:function parseEase(t,e){return arguments.length?Yt(t,e):Ft},getById:function getById(t){return L.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Ut(t);for(n.smoothChildTiming=w(t.smoothChildTiming),L.remove(n),n._dp=0,n._time=n._tTime=L._time,r=L._first;r;)i=r._next,!e&&!r._dur&&r instanceof Gt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(L,n,0),n},context:function context(t,e){return t?new ke(t,e):l},matchMedia:function matchMedia(t){return new Oe(t)},matchMediaRefresh:function matchMediaRefresh(){return ye.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Dc()},addEventListener:function addEventListener(t,e){var r=Te[t]||(Te[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=Te[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return $(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return $(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return kt(e,r,t)})},splitColor:zb,toArray:Ot,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if($(e)&&!$(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt($(e)?[]:{},e));if(!u){for(s in i)Xt.call(c,e,s,"get",i[s]);a=function func(t){return oe(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Et,updateRoot:Ut.updateRoot,plugins:pt,globalTimeline:L,core:{PropTween:pe,globals:S,Tween:Gt,Timeline:Ut,Animation:qt,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return B},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return I=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Pe[t]=Gt[t]}),Et.add(Ut.updateRoot),c=Pe.to({},{duration:0});function Hc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Jc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Hc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Ce=Pe.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)B?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Jc("roundProps",fb),Jc("modifiers"),Jc("snap",gb))||Pe;Gt.version=Ut.version=Ce.version="3.11.4",o=1,x()&&zt();function td(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ud(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function vd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function wd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function yd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function zd(t,e,r){return t.style[e]=r}function Ad(t,e,r){return t.style.setProperty(e,r)}function Bd(t,e,r){return t._gsap[e]=r}function Cd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Dd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Ed(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Hd(t,e){var r=this,i=this.target,n=i.style;if(t in rr){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=hr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=mr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:mr(i,t)),0<=this.props.indexOf(lr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fr,e,"")),t=lr}(n||e)&&this.props.push(t,e,n[t])}function Id(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Jd(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty(r[t].replace(sr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),!(t=Fe())||t.isStart||n[lr]||(Id(n),a.uncache=1)}}function Kd(t,e){var r={target:t,props:[],revert:Jd,save:Hd};return e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Md(t,e){var r=Se.createElementNS?Se.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Se.createElement(t);return r.style?r:Se.createElement(t)}function Nd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(sr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Nd(t,dr(e)||e,1)||""}function Qd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ae=window,Se=Ae.document,Re=Se.documentElement,Ee=Md("div")||{style:{}},Md("div"),lr=dr(lr),fr=lr+"Origin",Ee.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ie=!!dr("perspective"),Fe=Ce.core.reverting,De=1)}function Rd(t){var e,r=Md("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Rd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Sd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Td(e){var r;try{r=e.getBBox()}catch(t){r=Rd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Rd||(r=Rd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Sd(e,["x","cx","x1"])||0,y:+Sd(e,["y","cy","y1"])||0,width:0,height:0}}function Ud(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Td(t))}function Vd(t,e){if(e){var r=t.style;e in rr&&e!==fr&&(e=lr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(sr,"-$1").toLowerCase())):r.removeAttribute(e)}}function Wd(t,e,r,i,n,a){var s=new pe(t._pt,e,r,0,1,a?yd:xd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Zd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Ee.style,f=or.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||pr[i]||pr[h]?u:("px"===h||p||(u=Zd(t,e,r,"px")),o=t.getCTM&&Ud(t),!_&&"%"!==h||!rr[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Se&&a.appendChild||(a=Se.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Et.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||_r[Nd(a,"display")]||(l.position=Nd(t,"position")),a===t&&(l.position="static"),a.appendChild(Ee),n=Ee[d],a.removeChild(Ee),l.position="absolute",f&&_&&((s=fa(a)).time=Et.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function _d(t,e,r,i){if(!r||"none"===r){var n=dr(e,t,1),a=n&&Nd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Nd(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new pe(this._pt,t.style,e,0,1,se),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Nd(t,e)||i,t.style[e]=r),Eb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||j.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=Zd(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?yd:xd;return nt.test(i)&&(g.e=0),this._pt=g}function be(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=gr[r]||r,e[1]=gr[i]||i,e.join(" ")}function ce(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],rr[r]&&(i=1,r="transformOrigin"===r?fr:lr),Vd(a,r);i&&(Vd(a,lr),u&&(u.svg&&a.removeAttribute("transform"),br(a,1),u.uncache=1,Id(s)))}}function ge(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function he(t){var e=Nd(t,lr);return ge(e)?yr:e.substr(7).match(et).map(ia)}function ie(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=he(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?yr:u:(u!==yr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=he(t),n?o.display=n:Vd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function je(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ie(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==yr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Td(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[fr]="0px 0px",a&&(Wd(a,h,"xOrigin",f,w),Wd(a,h,"yOrigin",c,x),Wd(a,h,"xOffset",d,h.xOffset),Wd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function me(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(Zd(t,"x",r+"px",i)))+i}function te(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?ir:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new pe(t._pt,e,i,n,l,ud),o.e=f,o.u="deg",t._props.push(i),o}function ue(t,e){for(var r in e)t[r]=e[r];return t}function ve(t,e,r){var i,n,a,s,o,u,h,l=ue({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[lr]=e,i=br(r,1),Vd(r,lr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[lr],f[lr]=e,i=br(r,1),f[lr]=a),rr)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?Zd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new pe(t._pt,i,n,o,u-o,td),t._pt.u=h||0,t._props.push(n));ue(i,l)}var Ae,Se,Re,De,Ee,ze,Fe,Ie,Be=Ft.Power0,Le=Ft.Power1,Ye=Ft.Power2,Ne=Ft.Power3,qe=Ft.Power4,Ue=Ft.Linear,Ve=Ft.Quad,We=Ft.Cubic,Xe=Ft.Quart,He=Ft.Quint,Qe=Ft.Strong,Ke=Ft.Elastic,Ze=Ft.Back,Ge=Ft.SteppedEase,Je=Ft.Bounce,$e=Ft.Sine,tr=Ft.Expo,er=Ft.Circ,rr={},ir=180/Math.PI,nr=Math.PI/180,ar=Math.atan2,sr=/([A-Z])/g,or=/(left|right|width|margin|padding|x)/i,ur=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lr="transform",fr=lr+"Origin",cr="O,Moz,ms,Ms,Webkit".split(","),dr=function _checkPropPrefix(t,e,r){var i=(e||Ee).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(cr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?cr[n]:"")+t},pr={deg:1,rad:1,turn:1},_r={grid:1,flex:1},mr=function _get(t,e,r,i){var n;return De||Qd(),e in hr&&"transform"!==e&&~(e=hr[e]).indexOf(",")&&(e=e.split(",")[0]),rr[e]&&"transform"!==e?(n=br(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:wr(Nd(t,fr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=vr[e]&&vr[e](t,e,r)||Nd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Zd(t,e,n,r)+r:n},gr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new pe(t._pt,e,r,0,0,ce);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},yr=[1,0,0,1,0,0],Tr={},br=function _parseTransform(t,e){var r=t._gsap||new jt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,k,M,O,P,C,A,S,R,D,E,z,F=t.style,I=r.scaleX<0,B="deg",L=getComputedStyle(t),Y=Nd(t,fr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Ud(t)),L.translate&&("none"===L.translate&&"none"===L.scale&&"none"===L.rotate||(F[lr]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+("none"!==L[lr]?L[lr]:"")),F.scale=F.rotate=F.translate="none"),m=ie(t,r.svg),r.svg&&(O=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),je(t,O||Y,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==yr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ar(b,T)*ir:0,(f=w||x?ar(w,x)*ir+u:0)&&(o*=Math.abs(Math.cos(f*nr))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(z=m[6],D=m[7],A=m[8],S=m[9],R=m[10],E=m[11],i=m[12],n=m[13],a=m[14],h=(g=ar(z,R))*ir,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=M*v+S*y,C=z*v+R*y,A=k*-y+A*v,S=M*-y+S*v,R=z*-y+R*v,E=D*-y+E*v,k=O,M=P,z=C),l=(g=ar(-w,R))*ir,g&&(v=Math.cos(-g),E=x*(y=Math.sin(-g))+E*v,T=O=T*v-A*y,b=P=b*v-S*y,w=C=w*v-R*y),u=(g=ar(b,T))*ir,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(M*M+z*z)),g=ar(k,M),f=2e-4<Math.abs(g)?g*ir:0,d=E?1/(E<0?-E:E):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ge(Nd(t,lr)),O&&t.setAttribute("transform",O))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+B,r.rotationX=ia(h)+B,r.rotationY=ia(l)+B,r.skewX=f+B,r.skewY=c+B,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[fr]=wr(Y)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?Cr:Ie?Pr:xr,r.uncache=0,r},wr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},xr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pr(t,e)},kr="0deg",Mr="0px",Or=") ",Pr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==kr||h!==kr)){var b,w=parseFloat(h)*nr,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*nr,b=Math.cos(w),a=me(g,a,x*b*-v),s=me(g,s,-Math.sin(w)*-v),o=me(g,o,k*b*-v+v)}_!==Mr&&(y+="perspective("+_+Or),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Mr&&s===Mr&&o===Mr||(y+=o!==Mr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Or),u!==kr&&(y+="rotate("+u+Or),h!==kr&&(y+="rotateY("+h+Or),l!==kr&&(y+="rotateX("+l+Or),f===kr&&c===kr||(y+="skew("+f+", "+c+Or),1===d&&1===p||(y+="scale("+d+", "+p+Or),g.style[lr]=y||"translate(0, 0)"},Cr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=nr,d*=nr,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=nr,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=Zd(g,"x",l,"px"),k=Zd(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),k=ia(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),k=ia(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[lr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});vr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return mr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Ar,Sr,Rr,Dr={name:"css",register:Qd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,k=i.vars.startAt;for(c in De||Qd(),this.styles=this.styles||Kd(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!_b(c,e,i,n,t,a)))if(l=typeof o,f=vr[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Rt.lastIndex=0,Rt.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=Zd(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(k&&c in k?(s="function"==typeof k[c]?k[c].call(i,n,t,a):k[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=j.units[c]||Ya(mr(t,c))||""),"="===(s+"").charAt(1)&&(s=mr(t,c))):s=mr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in hr&&("autoAlpha"===c&&(1===h&&"hidden"===mr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Wd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=hr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in rr)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||br(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new pe(this._pt,x,lr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new pe(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,td),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(fr,0,x[fr]),o=be(o),v.svg?je(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Wd(this,v,"zOrigin",v.zOrigin,p),Wd(this,x,c,wr(s),wr(o)));continue}if("svgOrigin"===c){je(t,o,1,y,0,this);continue}if(c in Tr){te(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Wd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){ve(this,o,t);continue}}else c in x||(c=dr(c)||c);if(m||(u||0===u)&&(h||0===h)&&!ur.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in j.units?j.units[c]:d))&&(h=Zd(t,c,s,p)),this._pt=new pe(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?td:wd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=vd);else if(c in x)_d.call(this,t,c,s,_?_+o:o);else if(c in t)this.add(t,c,s||t[c],_?_+o:o,n,a);else if("parseTransform"!==c){Q(c,o);continue}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&de(this)},render:function render(t,e){if(e.tween._time||!Fe())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:mr,aliases:hr,getSetter:function getSetter(t,e,r){var i=hr[e];return i&&i.indexOf(",")<0&&(e=i),e in rr&&e!==fr&&(t._gsap.x||mr(t,"x"))?r&&ze===r?"scale"===e?Cd:Bd:(ze=r||{})&&("scale"===e?Dd:Ed):t.style&&!u(t.style[e])?zd:~e.indexOf("-")?Ad:re(t,e)},core:{_removeProperty:Vd,_getMatrix:ie}};Ce.utils.checkPrefix=dr,Ce.core.getStyleSaver=Kd,Rr=ha((Ar="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Sr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){rr[t]=1}),ha(Sr,function(t){j.units[t]="deg",Tr[t]=1}),hr[Rr[13]]=Ar+","+Sr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");hr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),Ce.registerPlugin(Dr);var Er=Ce.registerPlugin(Dr)||Ce,zr=Er.core.Tween;e.Back=Ze,e.Bounce=Je,e.CSSPlugin=Dr,e.Circ=er,e.Cubic=We,e.Elastic=Ke,e.Expo=tr,e.Linear=Ue,e.Power0=Be,e.Power1=Le,e.Power2=Ye,e.Power3=Ne,e.Power4=qe,e.Quad=Ve,e.Quart=Xe,e.Quint=He,e.Sine=$e,e.SteppedEase=Ge,e.Strong=Qe,e.TimelineLite=Ut,e.TimelineMax=Ut,e.TweenLite=Gt,e.TweenMax=zr,e.default=Er,e.gsap=Er;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


;
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return we||"undefined"!=typeof window&&(we=window.gsap)&&we.registerPlugin&&we}function z(e,t){return~Fe.indexOf(e)&&Fe[Fe.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return Be&&Be.isPressed||ze.cache++}function G(r,n){function Tc(e){if(e||0===e){o&&(Ce.history.scrollRestoration="manual");var t=Be&&Be.isPressed;e=Tc.v=Math.round(e)||(Be&&Be.iOS?1:0),r(e),Tc.cacheID=ze.cache,t&&i("ss",e)}else(n||ze.cache!==Tc.cacheID||i("ref"))&&(Tc.cacheID=ze.cache,Tc.v=r());return Tc.v+Tc.offset}return Tc.offset=0,r&&Tc}function J(e){return we.utils.toArray(e)[0]||("string"==typeof e&&!1!==we.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=Ee.scrollingElement||ke);var o=ze.indexOf(t),i=n===Ke.sc?1:2;~o||(o=ze.push(t)-1),ze[o+i]||t.addEventListener("scroll",F);var a=ze[o+i],s=a||(ze[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===we.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function pd(e,t){var r=Ne();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=Ne(),l=s,n=t||50,c=Math.max(500,3*n);return{update:pd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=Ne();return!e&&0!==e||e===i||pd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(Ae=we.core.globals().ScrollTrigger)&&Ae.core&&function _integrate(){var e=Ae.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,ze),n.push.apply(n,Fe),ze=t,Fe=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return(we=e||r())&&"undefined"!=typeof document&&document.body&&(Ce=window,ke=(Ee=document).documentElement,Me=Ee.body,t=[Ce,Ee,ke,Me],we.utils.clamp,Ie=we.core.context||function(){},Oe="onpointerenter"in Me?"pointer":"mouse",Pe=E.isTouch=Ce.matchMedia&&Ce.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ce||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,De=E.eventTypes=("ontouchstart"in ke?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ke?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Se=1),Se}var we,Se,Ce,Ee,ke,Me,Pe,Oe,Ae,t,Be,De,Ie,o=1,Le=[],ze=[],Fe=[],Ne=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",Xe={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?Ce.scrollTo(e,Ke.sc()):Ce.pageXOffset||Ee[n]||ke[n]||Me[n]||0})},Ke={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xe,sc:G(function(e){return arguments.length?Ce.scrollTo(Xe.sc(),e):Ce.pageYOffset||Ee[a]||ke[a]||Me[a]||0})};Xe.op=Ke,ze.cache=0;var E=(Observer.prototype.init=function init(e){Se||P(we)||console.warn("Please gsap.registerPlugin(Observer)"),Ae||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,p=e.event,d=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,T=e.onChangeY,S=e.onChange,E=e.onToggleX,k=e.onToggleY,D=e.onHover,I=e.onHoverEnd,R=e.onMove,Y=e.ignoreCheck,z=e.isNormalizer,X=e.onGestureStart,W=e.onGestureEnd,H=e.onWheel,U=e.onEnable,j=e.onDisable,q=e.onClick,V=e.scrollSpeed,G=e.capture,Z=e.allowClicks,$=e.lockAxis,Q=e.onLockAxis;function Qe(){return ye=Ne()}function Re(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||Y&&Y(e,t)}function Te(){var e=se.deltaX=N(be),t=se.deltaY=N(me),r=Math.abs(e)>=o,n=Math.abs(t)>=o;S&&(r||n)&&S(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),E&&se.deltaX<0!=le<0&&E(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),T&&T(se),k&&se.deltaY<0!=ce<0&&k(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(R&&R(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&Q&&Q(se),oe&&(H(se),oe=!1),ee=0}function Ue(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(Te):Te()}function Ve(e,t){$&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(Te):Te()}function We(e){if(!Re(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),Ve(n,o),i||d&&d(se))}}function Ye(t){if(!Re(t,1)){C(z?i:ve,De[1],We,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),n=M(t);!r&&e&&(se._vx.reset(),se._vy.reset(),s&&Z&&we.delayedCall(.08,function(){if(300<Ne()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Ce,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!z&&te.restart(!0),g&&r&&g(se),b&&b(se,r)}}function Ze(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&X(e,se.isDragging)}function $e(){return(se.isGesturing=!1)||W(se)}function _e(e){if(!Re(e)){var t=ue(),r=fe();Ue((t-pe)*V,(r-de)*V,1),pe=t,de=r,l&&te.restart(!0)}}function af(e){if(!Re(e)){e=M(e,s),H&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Ce.innerHeight:1)*f;Ue(e.deltaX*t,e.deltaY*t,0),l&&!z&&te.restart(!0)}}function bf(e){if(!Re(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,(n||o)&&Ve(n,o)}}function cf(e){se.event=e,D(se)}function df(e){se.event=e,I(se)}function ef(e){return Re(e)||M(e,s)&&q(se)}this.target=i=J(i)||ke,this.vars=e,u=u&&we.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,V=V||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(Ce.getComputedStyle(Me).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=K(i,Xe),fe=K(i,Ke),pe=ue(),de=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===De[0],he=A(i),ve=i.ownerDocument||Ee,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){Re(e,1)||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(z?i:ve,De[1],We,s,!0),se.deltaX=se.deltaY=0,v&&v(se))};te=se._dc=we.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,Ie(this),se.enable=function(e){return se.isEnabled||(B(he?ve:i,"scroll",F),0<=t.indexOf("scroll")&&B(he?ve:i,"scroll",_e,s,G),0<=t.indexOf("wheel")&&B(i,"wheel",af,s,G),(0<=t.indexOf("touch")&&Pe||0<=t.indexOf("pointer"))&&(B(i,De[0],xe,s,G),B(ve,De[2],Ye),B(ve,De[3],Ye),Z&&B(i,"click",Qe,!1,!0),q&&B(i,"click",ef),X&&B(ve,"gesturestart",Ze),W&&B(ve,"gestureend",$e),D&&B(i,Oe+"enter",cf),I&&B(i,Oe+"leave",df),R&&B(i,Oe+"move",bf)),se.isEnabled=!0,e&&e.type&&xe(e),U&&U(se)),se},se.disable=function(){se.isEnabled&&(Le.filter(function(e){return e!==se&&A(e.target)}).length||C(he?ve:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(z?i:ve,De[1],We,!0)),C(he?ve:i,"scroll",_e,G),C(i,"wheel",af,G),C(i,De[0],xe,G),C(ve,De[2],Ye),C(ve,De[3],Ye),C(i,"click",Qe,!0),C(i,"click",ef),C(ve,"gesturestart",Ze),C(ve,"gestureend",$e),C(i,Oe+"enter",cf),C(i,Oe+"leave",df),C(i,Oe+"move",bf),se.isEnabled=se.isPressed=se.isDragging=!1,j&&j(se))},se.kill=se.revert=function(){se.disable();var e=Le.indexOf(se);0<=e&&Le.splice(e,1),Be===se&&(Be=0)},Le.push(se),z&&A(i)&&(Be=se),se.enable(p)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}E.version="3.11.4",E.create=function(e){return new E(e)},E.register=P,E.getAll=function(){return Le.slice()},E.getById=function(t){return Le.filter(function(e){return e.vars.id===t})[0]},r()&&we.registerPlugin(E);function ya(){return ot=1}function za(){return ot=0}function Aa(e){return e}function Ba(e){return Math.round(1e5*e)/1e5||0}function Ca(){return"undefined"!=typeof window}function Da(){return He||Ca()&&(He=window.gsap)&&He.registerPlugin&&He}function Ea(e){return!!~l.indexOf(e)}function Fa(e){return z(e,"getBoundingClientRect")||(Ea(e)?function(){return Yt.width=Je.innerWidth,Yt.height=Je.innerHeight,Yt}:function(){return Mt(e)})}function Ia(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=z(e,r))?i()-Fa(e)()[o]:Ea(e)?(qe[r]||Ge[r])-(Je["inner"+n]||qe["client"+n]||Ge["client"+n]):e[r]-e["offset"+n]}function Ja(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function Ka(e){return"string"==typeof e}function La(e){return"function"==typeof e}function Ma(e){return"number"==typeof e}function Na(e){return"object"==typeof e}function Oa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Pa(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function eb(e){return Je.getComputedStyle(e)}function gb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ib(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function jb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function lb(o){var i=He.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function nb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function ob(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function pb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function qb(e,t,r){return r&&r.wheelHandler&&e(t,"wheel",r)}function ub(e,t){if(Ka(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in I?I[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function vb(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,p=o.fontWeight,d=je.createElement("div"),g=Ea(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?Ge:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===Ke?T:S)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),d._isStart=b,d.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),d.style.cssText=y,d.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(d,v.children[0]):v.appendChild(d),d._offset=d["offset"+n.op.d2],R(d,0,n,b),d}function Ab(){return 34<gt()-ht&&(w=w||requestAnimationFrame(j))}function Bb(){v&&v.isPressed&&!(v.startX>Ge.clientWidth)||(ze.cache++,v?w=w||requestAnimationFrame(j):j(),ht||W("scrollStart"),ht=gt())}function Cb(){y=Je.innerWidth,m=Je.innerHeight}function Db(){ze.cache++,nt||h||je.fullscreenElement||je.webkitFullscreenElement||b&&y===Je.innerWidth&&!(Math.abs(Je.innerHeight-m)>.25*Je.innerHeight)||c.restart(!0)}function Gb(){return pb(Q,"scrollEnd",Gb)||It(!0)}function Jb(e){for(var t=0;t<H.length;t+=5)(!e||H[t+4]&&H[t+4].query===e)&&(H[t].style.cssText=H[t+1],H[t].getBBox&&H[t].setAttribute("transform",H[t+2]||""),H[t+3].uncache=1)}function Kb(e,t){var r;for(it=0;it<At.length;it++)!(r=At[it])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));t&&Jb(t),t||W("revert")}function Lb(e,t){ze.cache++,!t&&ut||ze.forEach(function(e){return La(e)&&e.cacheID++&&(e.rec=0)}),Ka(e)&&(Je.history.scrollRestoration=x=e)}function Yb(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=q.length,a=t.style,s=e.style;i--;)a[o=q[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[S]=s[T]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[mt]=ib(e,Xe)+kt,a[yt]=ib(e,Ke)+kt,a[St]=s[Ct]=s.top=s.left="0",Rt(n),s[mt]=s.maxWidth=r[mt],s[yt]=s.maxHeight=r[yt],s[St]=r[St],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function _b(e){for(var t=V.length,r=e.style,n=[],o=0;o<t;o++)n.push(V[o],r[V[o]]);return n.t=e,n}function cc(e,t,r,n,o,i,a,s,l,c,u,f,p){La(e)&&(e=e(s)),Ka(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?ub("0"+e.substr(3),r):0));var d,g,h,v=p?p.time():0;if(p&&p.seek(0),Ma(e))a&&R(a,r,n,!0);else{La(t)&&(t=t(s));var b,m,y,x,w=(e||"0").split(" ");h=J(t)||Ge,(b=Mt(h)||{})&&(b.left||b.top)||"none"!==eb(h).display||(x=h.style.display,h.style.display="block",b=Mt(h),x?h.style.display=x:h.style.removeProperty("display")),m=ub(w[0],b[n.d]),y=ub(w[1]||"0",r),e=b[n.p]-l[n.p]-c+m+o-y,a&&R(a,y,n,r-y<20||a._isStart&&20<y),r-=r-y}if(i){var _=e+r,T=i._isStart;d="scroll"+n.d2,R(i,_,n,T&&20<_||!T&&(u?Math.max(Ge[d],qe[d]):i.parentNode[d])<=_+1),u&&(l=Mt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+kt))}return p&&h&&(d=Mt(h),p.seek(f),g=Mt(h),p._caScrollDist=d[n.p]-g[n.p],e=e/p._caScrollDist*f),p&&p.seek(v),p?e:Math.round(e)}function ec(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Ge){for(o in e._stOrig=a.cssText,i=eb(e))+o||$.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}}function fc(l,e){function Uj(e,t,r,n,o){var i=Uj.tween,a=t.onComplete,s={};return r=r||f(),o=n&&o||0,n=n||e-r,i&&i.kill(),c=Math.round(r),t[p]=e,(t.modifiers=s)[p]=function(e){return(e=Math.round(f()))!==c&&e!==u&&3<Math.abs(e-c)&&3<Math.abs(e-u)?(i.kill(),Uj.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=Math.round(e)},t.onUpdate=function(){ze.cache++,j()},t.onComplete=function(){Uj.tween=0,a&&a.call(i)},i=Uj.tween=He.to(l,t)}var c,u,f=K(l,e),p="_scroll"+e.p2;return(l[p]=f).wheelHandler=function(){return Uj.tween&&Uj.tween.kill()&&(Uj.tween=0)},ob(l,"wheel",f.wheelHandler),Uj}var He,s,Je,je,qe,Ge,l,c,et,tt,rt,u,nt,ot,f,it,p,d,g,at,st,h,v,b,m,y,k,lt,x,ct,w,ut,ft,pt,dt=1,gt=Date.now,_=gt(),ht=0,vt=0,bt=Math.abs,T="right",S="bottom",mt="width",yt="height",xt="Right",wt="Left",_t="Top",Tt="Bottom",St="padding",Ct="margin",Et="Width",D="Height",kt="px",Mt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==eb(e)[f]&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},Pt={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ot={toggleActions:"play",anticipatePin:0},I={top:0,left:0,center:.5,bottom:1,right:1},R=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+Et]=1,o["border"+a+Et]=0,o[r.p]=t+"px",He.set(e,o)},At=[],Bt={},Y={},X=[],W=function _dispatch(e){return Y[e]&&Y[e].map(function(e){return e()})||X},H=[],Dt=0,It=function _refreshAll(e,t){if(!ht||e){ut=Q.isRefreshing=!0,ze.forEach(function(e){return La(e)&&e.cacheID++&&(e.rec=e())});var r=W("refreshInit");at&&Q.sort(),t||Kb(),ze.forEach(function(e){La(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),At.slice(0).forEach(function(e){return e.refresh()}),At.forEach(function(e,t){if(e._subPinOffset&&e.pin){var r=e.vars.horizontal?"offsetWidth":"offsetHeight",n=e.pin[r];e.revert(!0,1),e.adjustPinSpacing(e.pin[r]-n),e.revert(!1,1)}}),At.forEach(function(e){return"max"===e.vars.end&&e.setPositions(e.start,Math.max(e.start+1,Ia(e.scroller,e._dir)))}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze.forEach(function(e){La(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Lb(x,1),c.pause(),Dt++,j(2),At.forEach(function(e){return La(e.vars.onRefresh)&&e.vars.onRefresh(e)}),ut=Q.isRefreshing=!1,W("refresh")}else ob(Q,"scrollEnd",Gb)},U=0,Lt=1,j=function _updateAll(e){if(!ut||2===e){Q.isUpdating=!0,pt&&pt.update(0);var t=At.length,r=gt(),n=50<=r-_,o=t&&At[0].scroll();if(Lt=o<U?-1:1,U=o,n&&(ht&&!ot&&200<r-ht&&(ht=0,W("scrollEnd")),rt=_,_=r),Lt<0){for(it=t;0<it--;)At[it]&&At[it].update(0,n);Lt=1}else for(it=0;it<t;it++)At[it]&&At[it].update(0,n);Q.isUpdating=!1}w=0},q=["left","top",S,T,Ct+Tt,Ct+xt,Ct+_t,Ct+wt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],V=q.concat([mt,yt,"boxSizing","max"+Et,"max"+D,"position",Ct,St,St+_t,St+xt,St+Tt,St+wt]),Z=/([A-Z])/g,Rt=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(Z,"-$1").toLowerCase())}},Yt={left:0,top:0},$=/(webkit|moz|length|cssText|inset)/i,Q=(ScrollTrigger.prototype.init=function init(S,C){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),vt){var E,n,d,k,M,P,O,A,B,D,I,e,L,R,Y,F,N,t,X,b,W,H,m,U,y,j,x,r,w,_,q,o,g,V,G,Z,$,T,i,Q=(S=gb(Ka(S)||Ma(S)||S.nodeType?{trigger:S}:S,Ot)).onUpdate,ee=S.toggleClass,a=S.id,te=S.onToggle,re=S.onRefresh,ne=S.scrub,oe=S.trigger,ie=S.pin,ae=S.pinSpacing,se=S.invalidateOnRefresh,le=S.anticipatePin,s=S.onScrubComplete,h=S.onSnapComplete,ce=S.once,ue=S.snap,fe=S.pinReparent,l=S.pinSpacer,pe=S.containerAnimation,de=S.fastScrollEnd,ge=S.preventOverlaps,he=S.horizontal||S.containerAnimation&&!1!==S.horizontal?Xe:Ke,ve=!ne&&0!==ne,be=J(S.scroller||Je),c=He.core.getCache(be),me=Ea(be),ye="fixed"===("pinType"in S?S.pinType:z(be,"pinType")||me&&"fixed"),xe=[S.onEnter,S.onLeave,S.onEnterBack,S.onLeaveBack],we=ve&&S.toggleActions.split(" "),u="markers"in S?S.markers:Ot.markers,_e=me?0:parseFloat(eb(be)["border"+he.p2+Et])||0,Te=this,Se=S.onRefreshInit&&function(){return S.onRefreshInit(Te)},Ce=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Je["inner"+o]:e["client"+o])||0}}(be,me,he),Ee=function _getOffsetsFunc(e,t){return!t||~Fe.indexOf(e)?Fa(e):function(){return Yt}}(be,me),ke=0,Me=0,Pe=K(be,he);if(lt(Te),Te._dir=he,le*=45,Te.scroller=be,Te.scroll=pe?pe.time.bind(pe):Pe,k=Pe(),Te.vars=S,C=C||S.animation,"refreshPriority"in S&&(at=1,-9999===S.refreshPriority&&(pt=Te)),c.tweenScroll=c.tweenScroll||{top:fc(be,Ke),left:fc(be,Xe)},Te.tweenTo=E=c.tweenScroll[he.p],Te.scrubDuration=function(e){(o=Ma(e)&&e)?q?q.duration(e):q=He.to(C,{ease:"expo",totalProgress:"+=0.001",duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Te)}}):(q&&q.progress(1).kill(),q=0)},C&&(C.vars.lazy=!1,C._initted||!1!==C.vars.immediateRender&&!1!==S.immediateRender&&C.duration()&&C.render(0,!0,!0),Te.animation=C.pause(),(C.scrollTrigger=Te).scrubDuration(ne),w=0,a=a||C.vars.id),At.push(Te),ue&&(Na(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in Ge.style&&He.set(me?[Ge,qe]:be,{scrollBehavior:"auto"}),ze.forEach(function(e){return La(e)&&e.target===(me?je.scrollingElement||qe:be)&&(e.smooth=!1)}),d=La(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return He.utils.snap(jb(t),e)}}(C):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return lb(jb(r))(e,t.direction)}}(C):!1!==ue.directional?function(e,t){return lb(ue.snapTo)(e,gt()-Me<500?0:t.direction)}:He.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Na(g)?tt(g.min,g.max):tt(g,g),V=He.delayedCall(ue.delay||o/2||.1,function(){var e=Pe(),t=gt()-Me<500,r=E.tween;if(!(t||Math.abs(Te.getVelocity())<10)||r||ot||ke===e)Te.isActive&&ke!==e&&V.restart(!0);else{var n=(e-P)/L,o=C&&!ve?C.totalProgress():n,i=t?0:(o-_)/(gt()-rt)*1e3||0,a=He.utils.clamp(-n,1-n,bt(i/2)*i/.185),s=n+(!1===ue.inertia?0:a),l=tt(0,1,d(s,Te)),c=Math.round(P+l*L),u=ue.onStart,f=ue.onInterrupt,p=ue.onComplete;if(e<=O&&P<=e&&c!==e){if(r&&!r._initted&&r.data<=bt(c-e))return;!1===ue.inertia&&(a=l-n),E(c,{duration:g(bt(.185*Math.max(bt(s-o),bt(l-o))/i/.05||0)),ease:ue.ease||"power3",data:bt(c-e),onInterrupt:function onInterrupt(){return V.restart(!0)&&f&&f(Te)},onComplete:function onComplete(){Te.update(),ke=Pe(),w=_=C&&!ve?C.totalProgress():Te.progress,h&&h(Te),p&&p(Te)}},e,a*L,c-e-a*L),u&&u(Te,E.tween)}}}).pause()),a&&(Bt[a]=Te),i=(i=(oe=Te.trigger=J(oe||ie))&&oe._gsap&&oe._gsap.stRevert)&&i(Te),ie=!0===ie?oe:J(ie),Ka(ee)&&(ee={targets:oe,className:ee}),ie&&(!1===ae||ae===Ct||(ae=!(!ae&&ie.parentNode&&ie.parentNode.style&&"flex"===eb(ie.parentNode).display)&&St),Te.pin=ie,(n=He.core.getCache(ie)).spacer?R=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=_b(l))),n.spacer=N=l||je.createElement("div"),N.classList.add("pin-spacer"),a&&N.classList.add("pin-spacer-"+a),n.pinState=R=_b(ie)),!1!==S.force3D&&He.set(ie,{force3D:!0}),Te.spacer=N=n.spacer,r=eb(ie),m=r[ae+he.os2],X=He.getProperty(ie),b=He.quickSetter(ie,he.a,kt),Yb(ie,N,r),F=_b(ie)),u){e=Na(u)?gb(u,Pt):Pt,D=vb("scroller-start",a,be,he,e,0),I=vb("scroller-end",a,be,he,e,0,D),t=D["offset"+he.op.d2];var f=J(z(be,"content")||be);A=this.markerStart=vb("start",a,f,he,e,t,0,pe),B=this.markerEnd=vb("end",a,f,he,e,t,0,pe),pe&&(T=He.quickSetter([A,B],he.a,kt)),ye||Fe.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=eb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?Ge:be),He.set([D,I],{force3D:!0}),y=He.quickSetter(D,he.a,kt),x=He.quickSetter(I,he.a,kt))}if(pe){var p=pe.vars.onUpdate,v=pe.vars.onUpdateParams;pe.eventCallback("onUpdate",function(){Te.update(0,0,1),p&&p.apply(v||[])})}Te.previous=function(){return At[At.indexOf(Te)-1]},Te.next=function(){return At[At.indexOf(Te)+1]},Te.revert=function(e,t){if(!t)return Te.kill(!0);var r=!1!==e||!Te.enabled,n=nt;r!==Te.isReverted&&(r&&(Z=Math.max(Pe(),Te.scroll.rec||0),G=Te.progress,$=C&&C.progress()),A&&[A,B,D,I].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(nt=1,Te.update(r)),!ie||fe&&Te.isActive||(r?function _swapPinOut(e,t,r){Rt(r);var n=e._gsap;if(n.spacerIsNative)Rt(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ie,N,R):Yb(ie,N,eb(ie),U)),r||Te.update(r),nt=n,Te.isReverted=r)},Te.refresh=function(e,t){if(!nt&&Te.enabled||t)if(ie&&e&&ht)ob(ScrollTrigger,"scrollEnd",Gb);else{!ut&&Se&&Se(Te),nt=1,Me=gt(),E.tween&&(E.tween.kill(),E.tween=0),q&&q.pause(),se&&C&&C.revert({kill:!1}).invalidate(),Te.isReverted||Te.revert(!0,!0),Te._subPinOffset=!1;for(var r,n,o,i,a,s,l,c,u,f,p,d=Ce(),g=Ee(),h=pe?pe.duration():Ia(be,he),v=0,b=0,m=S.end,y=S.endTrigger||oe,x=S.start||(0!==S.start&&oe?ie?"0 0":"0 100%":0),w=Te.pinnedContainer=S.pinnedContainer&&J(S.pinnedContainer),_=oe&&Math.max(0,At.indexOf(Te))||0,T=_;T--;)(s=At[T]).end||s.refresh(0,1)||(nt=1),!(l=s.pin)||l!==oe&&l!==ie||s.isReverted||((f=f||[]).unshift(s),s.revert(!0,!0)),s!==At[T]&&(_--,T--);for(La(x)&&(x=x(Te)),P=cc(x,oe,d,he,Pe(),A,D,Te,g,_e,ye,h,pe)||(ie?-.001:0),La(m)&&(m=m(Te)),Ka(m)&&!m.indexOf("+=")&&(~m.indexOf(" ")?m=(Ka(x)?x.split(" ")[0]:"")+m:(v=ub(m.substr(2),d),m=Ka(x)?x:P+v,y=oe)),O=Math.max(P,cc(m||(y?"100% 0":h),y,d,he,Pe()+v,B,I,Te,g,_e,ye,h,pe))||-.001,L=O-P||(P-=.01)&&.001,v=0,T=_;T--;)(l=(s=At[T]).pin)&&s.start-s._pinPush<=P&&!pe&&0<s.end&&(r=s.end-s.start,(l===oe&&s.start-s._pinPush<P||l===w)&&!Ma(x)&&(v+=r*(1-s.progress)),l===ie&&(b+=r));if(P+=v,O+=v,Te._pinPush=b,A&&v&&((r={})[he.a]="+="+v,w&&(r[he.p]="-="+Pe()),He.set([A,B],r)),ie)r=eb(ie),i=he===Ke,o=Pe(),W=parseFloat(X(he.a))+b,!h&&1<O&&((p={style:p=(me?je.scrollingElement||qe:be).style,value:p["overflow"+he.a.toUpperCase()]})["overflow"+he.a.toUpperCase()]="scroll"),Yb(ie,N,r),F=_b(ie),n=Mt(ie,!0),c=ye&&K(be,i?Xe:Ke)(),ae&&((U=[ae+he.os2,L+b+kt]).t=N,(T=ae===St?ib(ie,he)+L+b:0)&&U.push(he.d,T+kt),Rt(U),w&&At.forEach(function(e){e.pin===w&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Pe(Z)),ye&&((a={top:n.top+(i?o-P:c)+kt,left:n.left+(i?c:o-P)+kt,boxSizing:"border-box",position:"fixed"})[mt]=a.maxWidth=Math.ceil(n.width)+kt,a[yt]=a.maxHeight=Math.ceil(n.height)+kt,a[Ct]=a[Ct+_t]=a[Ct+xt]=a[Ct+Tt]=a[Ct+wt]="0",a[St]=r[St],a[St+_t]=r[St+_t],a[St+xt]=r[St+xt],a[St+Tt]=r[St+Tt],a[St+wt]=r[St+wt],Y=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(R,a,fe),ut&&Pe(0)),C?(u=C._initted,st(1),C.render(C.duration(),!0,!0),H=X(he.a)-W+L+b,j=1<Math.abs(L-H),ye&&j&&Y.splice(Y.length-2,2),C.render(0,!0,!0),u||C.invalidate(!0),C.parent||C.totalTime(C.totalTime()),st(0)):H=L,p&&(p.value?p.style["overflow"+he.a.toUpperCase()]=p.value:p.style.removeProperty("overflow-"+he.a));else if(oe&&Pe()&&!pe)for(n=oe.parentNode;n&&n!==Ge;)n._pinOffset&&(P-=n._pinOffset,O-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1,!0)}),Te.start=P,Te.end=O,k=M=ut?Z:Pe(),pe||ut||(k<Z&&Pe(Z),Te.scroll.rec=0),Te.revert(!1,!0),V&&(ke=-1,Te.isActive&&Pe(P+L*G),V.restart(!0)),nt=0,C&&ve&&(C._initted||$)&&C.progress()!==$&&C.progress($,!0).render(C.time(),!0,!0),G===Te.progress&&!pe||(C&&!ve&&C.totalProgress(G,!0),Te.progress=(k-P)/L===G?0:G),ie&&ae&&(N._pinOffset=Math.round(Te.progress*H)),re&&!ut&&re(Te)}},Te.getVelocity=function(){return(Pe()-M)/(gt()-rt)*1e3||0},Te.endAnimation=function(){Oa(Te.callbackAnimation),C&&(q?q.progress(1):C.paused()?ve||Oa(C,Te.direction<0,1):Oa(C,C.reversed()))},Te.labelToScroll=function(e){return C&&C.labels&&(P||Te.refresh()||P)+C.labels[e]/C.duration()*L||0},Te.getTrailing=function(t){var e=At.indexOf(Te),r=0<Te.direction?At.slice(0,e).reverse():At.slice(e+1);return(Ka(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Te.direction?e.end<=P:e.start>=O})},Te.update=function(e,t,r){if(!pe||r||e){var n,o,i,a,s,l,c,u=ut?Z:Te.scroll(),f=e?0:(u-P)/L,p=f<0?0:1<f?1:f||0,d=Te.progress;if(t&&(M=k,k=pe?Pe():u,ue&&(_=w,w=C&&!ve?C.totalProgress():p)),le&&!p&&ie&&!nt&&!dt&&ht&&P<u+(u-M)/(gt()-rt)*le&&(p=1e-4),p!==d&&Te.enabled){if(a=(s=(n=Te.isActive=!!p&&p<1)!=(!!d&&d<1))||!!p!=!!d,Te.direction=d<p?1:-1,Te.progress=p,a&&!nt&&(o=p&&!d?0:1===p?1:1===d?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=C&&("complete"===i||"reset"===i||i in C))),ge&&(s||c)&&(c||ne||!C)&&(La(ge)?ge(Te):Te.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!q||nt||dt?C&&C.totalProgress(p,!!nt):(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",p,C._tTime/C._tDur):(q.vars.totalProgress=p,q.invalidate().restart()))),ie)if(e&&ae&&(N.style[ae+he.os2]=m),ye){if(a){if(l=!e&&d<p&&u<O+1&&u+1>=Ia(be,he),fe)if(e||!n&&!l)ec(ie,N);else{var g=Mt(ie,!0),h=u-P;ec(ie,Ge,g.top+(he===Ke?h:0)+kt,g.left+(he===Ke?0:h)+kt)}Rt(n||l?Y:F),j&&p<1&&n||b(W+(1!==p||l?0:H))}}else b(Ba(W+H*p));!ue||E.tween||nt||dt||V.restart(!0),ee&&(s||ce&&p&&(p<1||!ct))&&et(ee.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](ee.className)}),!Q||ve||e||Q(Te),a&&!nt?(ve&&(c&&("complete"===i?C.pause().totalProgress(1):"reset"===i?C.restart(!0).pause():"restart"===i?C.restart(!0):C[i]()),Q&&Q(Te)),!s&&ct||(te&&s&&Pa(Te,te),xe[o]&&Pa(Te,xe[o]),ce&&(1===p?Te.kill(!1,1):xe[o]=0),s||xe[o=1===p?1:3]&&Pa(Te,xe[o])),de&&!n&&Math.abs(Te.getVelocity())>(Ma(de)?de:2500)&&(Oa(Te.callbackAnimation),q?q.progress(1):Oa(C,"reverse"===i?1:!p,1))):ve&&Q&&!nt&&Q(Te)}if(x){var v=pe?u/pe.duration()*(pe._caScrollDist||0):u;y(v+(D._isFlipped?1:0)),x(v)}T&&T(-u/pe.duration()*(pe._caScrollDist||0))}},Te.enable=function(e,t){Te.enabled||(Te.enabled=!0,ob(be,"resize",Db),ob(me?je:be,"scroll",Bb),Se&&ob(ScrollTrigger,"refreshInit",Se),!1!==e&&(Te.progress=G=0,k=M=ke=Pe()),!1!==t&&Te.refresh())},Te.getTween=function(e){return e&&E?E.tween:q},Te.setPositions=function(e,t){ie&&(W+=e-P,H+=t-e-L,ae===St&&Te.adjustPinSpacing(t-e-L)),Te.start=P=e,Te.end=O=t,L=t-e,Te.update()},Te.adjustPinSpacing=function(e){if(U){var t=U.indexOf(he.d)+1;U[t]=parseFloat(U[t])+e+kt,U[1]=parseFloat(U[1])+e+kt,Rt(U)}},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(!0,!0),Te.enabled=Te.isActive=!1,t||q&&q.pause(),Z=0,n&&(n.uncache=1),Se&&pb(ScrollTrigger,"refreshInit",Se),V&&(V.pause(),E.tween&&E.tween.kill()&&(E.tween=0)),!me)){for(var r=At.length;r--;)if(At[r].scroller===be&&At[r]!==Te)return;pb(be,"resize",Db),pb(be,"scroll",Bb)}},Te.kill=function(e,t){Te.disable(e,t),q&&!t&&q.kill(),a&&delete Bt[a];var r=At.indexOf(Te);0<=r&&At.splice(r,1),r===it&&0<Lt&&it--,r=0,At.forEach(function(e){return e.scroller===Te.scroller&&(r=1)}),r||ut||(Te.scroll.rec=0),C&&(C.scrollTrigger=null,e&&C.revert({kill:!1}),t||C.kill()),A&&[A,B,D,I].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),pt===Te&&(pt=0),ie&&(n&&(n.uncache=1),r=0,At.forEach(function(e){return e.pin===ie&&r++}),r||(n.spacer=0)),S.onKill&&S.onKill(Te)},Te.enable(!1,!1),i&&i(Te),C&&C.add&&!L?He.delayedCall(.01,function(){return P||O||Te.refresh()})&&(L=.01)&&(P=O=0):Te.refresh(),ie&&function _queueRefreshAll(){if(ft!==Dt){var e=ft=Dt;requestAnimationFrame(function(){return e===Dt&&It(!0)})}}()}else this.update=this.refresh=this.kill=Aa},ScrollTrigger.register=function register(e){return s||(He=e||Da(),Ca()&&window.document&&ScrollTrigger.enable(),s=vt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ot[t]=e[t];return Ot},ScrollTrigger.disable=function disable(t,r){vt=0,At.forEach(function(e){return e[r?"kill":"disable"](t)}),pb(Je,"wheel",Bb),pb(je,"scroll",Bb),clearInterval(u),pb(je,"touchcancel",Aa),pb(Ge,"touchstart",Aa),nb(pb,je,"pointerdown,touchstart,mousedown",ya),nb(pb,je,"pointerup,touchend,mouseup",za),c.kill(),Ja(pb);for(var e=0;e<ze.length;e+=3)qb(pb,ze[e],ze[e+1]),qb(pb,ze[e],ze[e+2])},ScrollTrigger.enable=function enable(){if(Je=window,je=document,qe=je.documentElement,Ge=je.body,He&&(et=He.utils.toArray,tt=He.utils.clamp,lt=He.core.context||Aa,st=He.core.suppressOverwrites||Aa,x=Je.history.scrollRestoration||"auto",He.core.globals("ScrollTrigger",ScrollTrigger),Ge)){vt=1,E.register(He),ScrollTrigger.isTouch=E.isTouch,k=E.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ob(Je,"wheel",Bb),l=[Je,je,qe,Ge],He.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=He.matchMedia();for(t in e)r.add(t,e[t]);return r},He.addEventListener("matchMediaInit",function(){return Kb()}),He.addEventListener("matchMediaRevert",function(){return Jb()}),He.addEventListener("matchMedia",function(){It(0,1),W("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Cb(),Cb})):console.warn("Requires GSAP 3.11.0 or later"),Cb(),ob(je,"scroll",Bb);var e,t,r=Ge.style,n=r.borderTopStyle,o=He.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=Mt(Ge),Ke.m=Math.round(e.top+Ke.sc())||0,Xe.m=Math.round(e.left+Xe.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Ab,250),He.delayedCall(.5,function(){return dt=0}),ob(je,"touchcancel",Aa),ob(Ge,"touchstart",Aa),nb(ob,je,"pointerdown,touchstart,mousedown",ya),nb(ob,je,"pointerup,touchend,mouseup",za),f=He.utils.checkPrefix("transform"),V.push(f),s=gt(),c=He.delayedCall(.2,It).pause(),g=[je,"visibilitychange",function(){var e=Je.innerWidth,t=Je.innerHeight;je.hidden?(p=e,d=t):p===e&&d===t||Db()},je,"DOMContentLoaded",It,Je,"load",It,Je,"resize",Db],Ja(ob),At.forEach(function(e){return e.enable(0,1)}),t=0;t<ze.length;t+=3)qb(pb,ze[t],ze[t+1]),qb(pb,ze[t],ze[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(ct=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Ab,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ja(pb)||Ja(ob,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=ze.indexOf(r),o=Ea(r);~n&&ze.splice(n,o?6:2),t&&(o?Fe.unshift(Je,t,Ge,t,qe,t):Fe.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){At.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(Ka(e)?J(e):e).getBoundingClientRect(),o=n[r?mt:yt]*t||0;return r?0<n.right-o&&n.left+o<Je.innerWidth:0<n.bottom-o&&n.top+o<Je.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){Ka(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?mt:yt],i=null==t?o/2:t in I?I[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Je.innerWidth:(n.top+i)/Je.innerHeight},ScrollTrigger.killAll=function killAll(e){if(At.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=Y.killAll||[];Y={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}Q.version="3.11.4",Q.saveStyles=function(e){return e?et(e).forEach(function(e){if(e&&e.style){var t=H.indexOf(e);0<=t&&H.splice(t,5),H.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),lt())}}):H},Q.revert=function(e,t){return Kb(!e,t)},Q.create=function(e,t){return new Q(e,t)},Q.refresh=function(e){return e?Db():(s||Q.register())&&It(!0)},Q.update=function(e){return++ze.cache&&j(!0===e?2:0)},Q.clearScrollMemory=Lb,Q.maxScroll=function(e,t){return Ia(e,t?Xe:Ke)},Q.getScrollFunc=function(e,t){return K(J(e),t?Xe:Ke)},Q.getById=function(e){return Bt[e]},Q.getAll=function(){return At.filter(function(e){return"ScrollSmoother"!==e.vars.id})},Q.isScrolling=function(){return!!ht},Q.snapDirectional=lb,Q.addEventListener=function(e,t){var r=Y[e]||(Y[e]=[]);~r.indexOf(t)||r.push(t)},Q.removeEventListener=function(e,t){var r=Y[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},Q.batch=function(e,t){function Io(e,t){var r=[],n=[],o=He.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&La(t[r])&&"onRefreshInit"!==r?Io(0,t[r]):t[r];return La(a)&&(a=a(),ob(Q,"refresh",function(){return a=t.batchMax()})),et(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(Q.create(t))}),n};function hc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function ic(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(E.isTouch?" pinch-zoom":""):"none",e===qe&&ic(Ge,t)}function kc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||He.core.getCache(i),s=gt();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==Ge&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!te[(t=eb(i)).overflowY]&&!te[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!Ea(i)&&(te[(t=eb(i)).overflowY]||te[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function lc(e,t,r,n){return E.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&kc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&ob(je,E.eventTypes[0],ne,!1,!0)},onDisable:function onDisable(){return pb(je,E.eventTypes[0],ne,!0)}})}function pc(e){function Ep(){return o=!1}function Hp(){i=Ia(p,Ke),S=tt(k?1:0,i),f&&(T=tt(0,Ia(p,Xe))),l=Dt}function Ip(){h._gsap.y=Ba(parseFloat(h._gsap.y)+v.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",v.offset=v.cacheID=0}function Op(){Hp(),a.isActive()&&a.vars.scrollY>i&&(v()>i?a.progress(1)&&v(i):a.resetTo("scrollY",i))}Na(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,p=J(e.target)||qe,d=He.core.globals().ScrollSmoother,g=d&&d.get(),h=k&&(e.content&&J(e.content)||g&&!1!==e.content&&!g.smooth()&&g.content()),v=K(p,Ke),b=K(p,Xe),m=1,y=(E.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,x=0,w=La(t)?function(){return t(n)}:function(){return t||2.8},_=lc(p,e.type,!0,r),T=Aa,S=Aa;return h&&He.set(h,{y:"+=0"}),e.ignoreCheck=function(e){return k&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(Ep);var e=Ba(n.deltaY/2),t=S(v.v-e);if(h&&t!==v.v+v.offset){v.offset=t-v.v;var r=Ba((parseFloat(h&&h._gsap.y)||0)-v.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",h._gsap.y=r+"px",v.cacheID=ze.cache,j()}return!0}v.offset&&Ip(),o=!0}()||1.05<m&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){var e=m;m=Ba((Je.visualViewport&&Je.visualViewport.scale||1)/y),a.pause(),e!==m&&ic(p,1.01<m||!f&&"x"),c=b(),u=v(),Hp(),l=Dt},e.onRelease=e.onGestureStart=function(e,t){if(v.offset&&Ip(),t){ze.cache++;var r,n,o=w();f&&(n=(r=b())+.05*o*-e.velocityX/.227,o*=hc(b,r,n,Ia(p,Xe)),a.vars.scrollX=T(n)),n=(r=v())+.05*o*-e.velocityY/.227,o*=hc(v,r,n,Ia(p,Ke)),a.vars.scrollY=S(n),a.invalidate().duration(o).play(.01),(k&&a.vars.scrollY>=i||i-1<=r)&&He.to({},{onUpdate:Op,duration:o})}else s.restart(!0)},e.onWheel=function(){a._ts&&a.pause(),1e3<gt()-x&&(l=0,x=gt())},e.onChange=function(e,t,r,n,o){if(Dt!==l&&Hp(),t&&f&&b(T(n[2]===t?c+(e.startX-e.x):b()+t-n[1])),r){v.offset&&Ip();var i=o[2]===r,a=i?u+e.startY-e.y:v()+r-o[1],s=S(a);i&&a!==s&&(u+=s-a),v(s)}(r||t)&&j()},e.onEnable=function(){ic(p,!f&&"x"),Q.addEventListener("refresh",Op),ob(Je,"resize",Op),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=b.smooth=!1),_.enable()},e.onDisable=function(){ic(p,!0),pb(Je,"resize",Op),Q.removeEventListener("refresh",Op),_.kill()},e.lockAxis=!1!==e.lockAxis,((n=new E(e)).iOS=k)&&!v()&&v(1),k&&He.ticker.add(Aa),s=n._dc,a=He.to(n,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:s.vars.onComplete}),n}var ee,te={auto:1,scroll:1},re=/(input|label|select|textarea)/i,ne=function _captureInputs(e){var t=re.test(e.target.tagName);(t||ee)&&(e._gsapAllow=!0,ee=t)};Q.sort=function(e){return At.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},Q.observe=function(e){return new E(e)},Q.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill();var t=e instanceof E?e:pc(e);return v&&v.target===t.target&&v.kill(),Ea(t.target)&&(v=t),t},Q.core={_getVelocityProp:L,_inputObserver:lc,_scrollers:ze,_proxies:Fe,bridge:{ss:function ss(){ht||W("scrollStart"),ht=gt()},ref:function ref(){return nt}}},Da()&&He.registerPlugin(Q),e.ScrollTrigger=Q,e.default=Q;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


;
/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function l(){return"undefined"!=typeof window}function m(){return f||l()&&(f=window.gsap)&&f.registerPlugin&&f}function n(e){return"string"==typeof e}function o(e){return"function"==typeof e}function p(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,l="client"+o;return e===T||e===i||e===c?Math.max(i[n],c[n])-(T["inner"+o]||i[l]||c[l]):e[n]-e["offset"+o]}function q(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===T&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=i[o]?i:c),function(){return e[o]}}function s(e,t){if(!(e=y(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),n=!t||t===T||t===c,l=n?{top:i.clientTop-(T.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(T.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:t.getBoundingClientRect(),r={x:o.left-l.left,y:o.top-l.top};return!n&&t&&(r.x+=q(t,"x")(),r.y+=q(t,"y")()),r}function t(e,t,o,l,r){return isNaN(e)||"object"==typeof e?n(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+l-r:"max"===e?p(t,o)-r:Math.min(p(t,o),s(e,t)[o]-r):parseFloat(e)-r}function u(){f=m(),l()&&f&&"undefined"!=typeof document&&document.body&&(T=window,c=document.body,i=document.documentElement,y=f.utils.toArray,f.config({autoKillThreshold:7}),v=f.config(),a=1)}var f,a,T,i,c,y,v,h,r={version:"3.11.4",name:"scrollTo",rawVars:1,register:function register(e){f=e,u()},init:function init(e,l,r,s,i){a||u();var p=this,c=f.getProperty(e,"scrollSnapType");p.isWin=e===T,p.target=e,p.tween=r,l=function _clean(e,t,l,r){if(o(e)&&(e=e(t,l,r)),"object"!=typeof e)return n(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s,i={};for(s in e)i[s]="onAutoKill"!==s&&o(e[s])?e[s](t,l,r):e[s];return i}(l,s,e,i),p.vars=l,p.autoKill=!!l.autoKill,p.getX=q(e,"x"),p.getY=q(e,"y"),p.x=p.xPrev=p.getX(),p.y=p.yPrev=p.getY(),h=h||f.core.globals().ScrollTrigger,"smooth"===f.getProperty(e,"scrollBehavior")&&f.set(e,{scrollBehavior:"auto"}),c&&"none"!==c&&(p.snap=1,p.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=l.x?(p.add(p,"x",p.x,t(l.x,e,"x",p.x,l.offsetX||0),s,i),p._props.push("scrollTo_x")):p.skipX=1,null!=l.y?(p.add(p,"y",p.y,t(l.y,e,"y",p.y,l.offsetY||0),s,i),p._props.push("scrollTo_y")):p.skipY=1},render:function render(e,t){for(var o,n,l,r,s,i=t._pt,c=t.target,u=t.tween,f=t.autoKill,a=t.xPrev,y=t.yPrev,d=t.isWin,g=t.snap,x=t.snapInline;i;)i.r(e,i.d),i=i._next;o=d||!t.skipX?t.getX():a,l=(n=d||!t.skipY?t.getY():y)-y,r=o-a,s=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),f&&(!t.skipX&&(s<r||r<-s)&&o<p(c,"x")&&(t.skipX=1),!t.skipY&&(s<l||l<-s)&&n<p(c,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(u.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(u,t.vars.onAutoKillParams||[]))),d?T.scrollTo(t.skipX?o:t.x,t.skipY?n:t.y):(t.skipY||(c.scrollTop=t.y),t.skipX||(c.scrollLeft=t.x)),!g||1!==e&&0!==e||(n=c.scrollTop,o=c.scrollLeft,x?c.style.scrollSnapType=x:c.style.removeProperty("scroll-snap-type"),c.scrollTop=n+1,c.scrollLeft=o+1,c.scrollTop=n,c.scrollLeft=o),t.xPrev=t.x,t.yPrev=t.y,h&&h.update()},kill:function kill(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};r.max=p,r.getOffset=s,r.buildGetter=q,m()&&f.registerPlugin(r),e.ScrollToPlugin=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


;
/*!
 * ScrollSmoother 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return"undefined"!=typeof window}function t(){return D||s()&&(D=window.gsap)&&D.registerPlugin&&D}var D,L,O,N,U,K,q,V,j,J,Y,W,G,Q,X,r=(ScrollSmoother.register=function register(e){return L||(D=e||t(),s()&&window.document&&(O=window,N=document,U=N.documentElement,K=N.body),D&&(q=D.utils.toArray,V=D.utils.clamp,Y=D.parseEase("expo"),Q=D.core.context||function(){},X=D.delayedCall(.2,function(){return j.isRefreshing||J&&J.refresh()}).pause(),j=D.core.globals().ScrollTrigger,D.core.globals("ScrollSmoother",ScrollSmoother),K&&j&&(W=j.core._getVelocityProp,G=j.core._inputObserver,ScrollSmoother.refresh=j.refresh,L=1))),L},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(t){var o=this;L||ScrollSmoother.register(D)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},J&&J.kill(),Q(J=this);function za(){return z.update(-A)}function Ba(){return n.style.overflow="visible"}function Da(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),d=!1,e.animation.progress(e.progress,!0)}function Ea(e,t){(e!==A&&!u||t)&&(x&&(e=Math.round(e)),C&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),F=e-A,A=e,j.isUpdating||j.update())}function Fa(e){return arguments.length?(e<0&&(e=0),M.y=-e,d=!0,u?A=-e:Ea(-e),j.isRefreshing?i.update():_(e),this):-A}function Ha(e){b.scrollTop=0,e.target.contains&&e.target.contains(b)||E&&!1===E(o,e)||(j.isInViewport(e.target)||e.target===g||o.scrollTo(e.target,!1,"center center"),g=e.target)}function Ia(e){var r,n,o,i;S.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e){t.trigger&&e.trigger&&t!==e&&(e.trigger===t.trigger||e.pinnedContainer===t.trigger||t.trigger.contains(e.trigger))&&(n=e.start,o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),e.setPositions(n+o,e.end+o),e.markerStart&&i.push(D.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function Ja(){Ba(),requestAnimationFrame(Ba),S&&(S.forEach(function(e){var t=e.start,r=e.auto?Math.min(j.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),Ia(j.sort())),z.reset()}function Ka(){return j.addEventListener("refresh",Ja)}function La(){return S&&S.forEach(function(e){return e.vars.onRefresh(e)})}function Ma(){return S&&S.forEach(function(e){return e.vars.onRefreshInit(e)}),La}function Na(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+k+t)||("speed"===t?1:0)),o.setAttribute("data-"+k+t,e),"auto"===e?e:parseFloat(e)}}function Oa(r,e,t,n,o){function Db(){e=f(),t=h(),i=parseFloat(e)||1,c=(a="auto"===e)?0:.5,l&&l.kill(),l=t&&D.to(r,{ease:Y,overwrite:!1,y:"+=0",duration:t}),s&&(s.ratio=i,s.autoSpeed=a)}function Eb(){g.y=d+"px",g.renderTransform(1),Db()}function Ib(e){if(a){Eb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||U,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),u=-c*t;return 0<c&&(n=.5==(r=s.height/(O.innerHeight+s.height))?2*s.height:2*Math.min(s.height,-c*r/(2*r-1))*(t||1),u+=t?-n*t:-n/2,c+=n),{change:c,offset:u}}(r,V(0,1,-e.start/(e.end-e.start)));m=t.change,u=t.offset}else m=(e.end-e.start)*(1-i),u=0;p.forEach(function(e){return m-=e.distance*(1-i)}),e.vars.onUpdate(e),l&&l.progress(1)}o=("function"==typeof o?o(n,r):o)||0;var i,s,a,l,c,u,f=Na("speed",e,n,r),h=Na("lag",t,n,r),d=D.getProperty(r,"y"),g=r._gsap,p=[],v=[],m=0;return Db(),(1!==i||a||l)&&(Ib(s=j.create({trigger:a?r.parentNode:r,start:"top bottom+="+o,end:"bottom top-="+o,scroller:b,scrub:!0,refreshPriority:-999,onRefreshInit:Eb,onRefresh:Ib,onKill:function onKill(e){var t=S.indexOf(e);0<=t&&S.splice(t,1),Eb()},onUpdate:function onUpdate(e){var t,r,n,o=d+m*(e.progress-c),i=p.length,s=0;if(e.offset){if(i){for(r=-A,n=e.end;i--;){if((t=p[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-F,!0),I&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=d+s+m*((D.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),v.length&&!a&&v.forEach(function(e){return e(o-s)}),l?(l.resetTo("y",o,-F,!0),I&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),D.core.getCache(s.trigger).stRevert=Ma,s.startY=d,s.pins=p,s.markers=v,s.ratio=i,s.autoSpeed=a,r.style.willChange="transform"),s}var n,b,e,i,S,s,a,l,c,u,r,f,h,d,g,p=t.smoothTouch,v=t.onUpdate,m=t.onStop,w=t.smooth,E=t.onFocusIn,T=t.normalizeScroll,x=t.wholePixels,P=this,R="undefined"!=typeof ResizeObserver&&!1!==t.autoResize&&new ResizeObserver(function(){return j.isRefreshing||X.restart(!0)}),k=t.effectsPrefix||"",_=j.getScrollFunc(O),C=1===j.isTouch?!0===p?.8:parseFloat(p)||0:0===w||!1===w?0:parseFloat(w)||.8,H=C&&+t.speed||1,A=0,F=0,I=1,z=W(0),M={y:0};function refreshHeight(){return e=n.clientHeight,n.style.overflow="visible",K.style.height=O.innerHeight+(e-O.innerHeight)/H+"px",e-O.innerHeight}Ka(),j.addEventListener("killAll",Ka),D.delayedCall(.5,function(){return I=0}),this.scrollTop=Fa,this.scrollTo=function(e,t,r){var n=D.utils.clamp(0,j.maxScroll(O),isNaN(e)?o.offset(e,r):+e);t?u?D.to(o,{duration:C,scrollTop:n,overwrite:"auto",ease:Y}):_(n):Fa(n)},this.offset=function(e,t){var r,n=(e=q(e)[0]).style.cssText,o=j.create({trigger:e,start:t||"top top"});return S&&Ia([o]),r=o.start,o.kill(!1),e.style.cssText=n,D.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=q(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||K.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",R&&R.observe(n),D.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),C||D.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(b=q(e||"#smooth-wrapper")[0]||function _wrap(e){var t=N.querySelector(".ScrollSmoother-wrapper");return t||((t=N.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=b.getAttribute("style")||"",refreshHeight(),D.set(b,C?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):b},this.effects=function(e,t){if(S=S||[],!e)return S.slice(0);(e=q(e)).forEach(function(e){for(var t=S.length;t--;)S[t].trigger===e&&S[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=Oa(e[r],o,i,r,s))&&a.push(n);return S.push.apply(S,a),a},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=q(e).map(function(t){return j.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return Ea(e||0===e?e:A)},this.getVelocity=function(){return z.getVelocity(-A)},j.scrollerProxy(b,{scrollTop:Fa,scrollHeight:function scrollHeight(){return refreshHeight()&&K.scrollHeight},fixedMarkers:!1!==t.fixedMarkers&&!!C,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:O.innerWidth,height:O.innerHeight}}}),j.defaults({scroller:b});var B=j.getAll().filter(function(e){return e.scroller===O||e.scroller===b});B.forEach(function(e){return e.revert(!0,!0)}),i=j.create({animation:D.fromTo(M,{y:0},{y:function y(){return-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(this._dur){var e=d;e&&(Da(i),M.y=A),Ea(M.y,e),za(),v&&!u&&v(P)}}}),onRefreshInit:function onRefreshInit(e){if(S){var t=j.getAll().filter(function(e){return!!e.pin});S.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();h=r&&r._end>r._dp._time,f=A,M.y=0,C&&(b.style.pointerEvents="none",b.scrollTop=0,setTimeout(function(){return b.style.removeProperty("pointer-events")},50))},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()/H),h||Da(e),M.y=-_(),Ea(M.y),I||e.animation.progress(D.utils.clamp(0,1,f/-e.end)),h&&(e.progress-=.001,e.update())},id:"ScrollSmoother",scroller:O,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function end(){return refreshHeight()/H},onScrubComplete:function onScrubComplete(){z.reset(),m&&m(o)},scrub:C||!0}),this.smooth=function(e){return arguments.length&&(H=(C=e||0)&&+t.speed||1,i.scrubDuration(e)),i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=t.ease||Y),this.scrollTrigger=i,t.effects&&this.effects(!0===t.effects?"[data-"+k+"speed], [data-"+k+"lag]":t.effects,{effectsPadding:t.effectsPadding}),t.sections&&this.sections(!0===t.sections?"[data-section]":t.sections),B.forEach(function(e){e.vars.scroller=b,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!u!==e&&(e?(i.getTween()&&i.getTween().pause(),_(-A),z.reset(),(r=j.normalizeScroll())&&r.disable(),(u=j.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Fa(-A)}})).nested=G(U,"wheel,touch,scroll",!0,!1!==t)):(u.nested.kill(),u.kill(),u=0,r&&r.enable(),i.progress=(-A-i.start)/(i.end-i.start),Da(i))),this):!!u},this.kill=this.revert=function(){o.paused(!1),Da(i),i.kill();for(var e=(S||[]).concat(s||[]),t=e.length;t--;)e[t].kill();j.scrollerProxy(b),j.removeEventListener("killAll",Ka),j.removeEventListener("refresh",Ja),b.style.cssText=l,n.style.cssText=c;var r=j.defaults({});r&&r.scroller===b&&j.defaults({scroller:O}),o.normalizer&&j.normalizeScroll(!1),clearInterval(a),J=null,R&&R.disconnect(),K.style.removeProperty("height"),O.removeEventListener("focusin",Ha)},this.refresh=function(e,t){return i.refresh(e,t)},T&&(this.normalizer=j.normalizeScroll(!0===T?{debounce:!0,content:!C&&n}:T)),j.config(t),"overscrollBehavior"in O.getComputedStyle(K)&&D.set([K,U],{overscrollBehavior:"none"}),"scrollBehavior"in O.getComputedStyle(K)&&D.set([K,U],{scrollBehavior:"auto"}),O.addEventListener("focusin",Ha),a=setInterval(za,250),"loading"===N.readyState||requestAnimationFrame(function(){return j.refresh()})}r.version="3.11.4",r.create=function(e){return J&&e&&J.content()===q(e.content)[0]?J:new r(e)},r.get=function(){return J},t()&&D.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


;
/*!
 * SplitText 3.11.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(D){"use strict";var _=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function k(D){return e.getComputedStyle(D)}function n(D,u){var e;return i(D)?D:"string"==(e=typeof D)&&!u&&D?E.call(X.querySelectorAll(D),0):D&&"object"==e&&"length"in D?E.call(D,0):D?[D]:[]}function o(D){return"absolute"===D.position||!0===D.absolute}function p(D,u){for(var e,t=u.length;-1<--t;)if(e=u[t],D.substr(0,e.length)===e)return e.length}function r(D,u){void 0===D&&(D="");var e=~D.indexOf("++"),t=1;return e&&(D=D.split("++").join("")),function(){return"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(e?t++:"")+"'>":">")}}function s(D,u,e){var t=D.nodeType;if(1===t||9===t||11===t)for(D=D.firstChild;D;D=D.nextSibling)s(D,u,e);else 3!==t&&4!==t||(D.nodeValue=D.nodeValue.split(u).join(e))}function t(D,u){for(var e=u.length;-1<--e;)D.push(u[e])}function u(D,u,e){for(var t;D&&D!==u;){if(t=D._next||D.nextSibling)return t.textContent.charAt(0)===e;D=D.parentNode||D._parent}}function v(D){var u,e,t=n(D.childNodes),F=t.length;for(u=0;u<F;u++)(e=t[u])._isSplit?v(e):u&&e.previousSibling&&3===e.previousSibling.nodeType?(e.previousSibling.nodeValue+=3===e.nodeType?e.nodeValue:e.firstChild.nodeValue,D.removeChild(e)):3!==e.nodeType&&(D.insertBefore(e.firstChild,e),D.removeChild(e))}function w(D,u){return parseFloat(u[D])||0}function x(D,e,F,C,i,n,E){var r,l,p,d,a,h,B,f,A,c,x,g,y=k(D),_=w("paddingLeft",y),b=-999,S=w("borderBottomWidth",y)+w("borderTopWidth",y),T=w("borderLeftWidth",y)+w("borderRightWidth",y),m=w("paddingTop",y)+w("paddingBottom",y),N=w("paddingLeft",y)+w("paddingRight",y),L=w("fontSize",y)*(e.lineThreshold||.2),W=y.textAlign,H=[],O=[],V=[],j=e.wordDelimiter||" ",M=e.tag?e.tag:e.span?"span":"div",R=e.type||e.split||"chars,words,lines",z=i&&~R.indexOf("lines")?[]:null,P=~R.indexOf("words"),q=~R.indexOf("chars"),G=o(e),I=e.linesClass,J=~(I||"").indexOf("++"),K=[],Q="flex"===y.display,U=D.style.display;for(J&&(I=I.split("++").join("")),Q&&(D.style.display="block"),p=(l=D.getElementsByTagName("*")).length,a=[],r=0;r<p;r++)a[r]=l[r];if(z||G)for(r=0;r<p;r++)((h=(d=a[r]).parentNode===D)||G||q&&!P)&&(g=d.offsetTop,z&&h&&Math.abs(g-b)>L&&("BR"!==d.nodeName||0===r)&&(B=[],z.push(B),b=g),G&&(d._x=d.offsetLeft,d._y=g,d._w=d.offsetWidth,d._h=d.offsetHeight),z&&((d._isSplit&&h||!q&&h||P&&h||!P&&d.parentNode.parentNode===D&&!d.parentNode._isSplit)&&(B.push(d),d._x-=_,u(d,D,j)&&(d._wordEnd=!0)),"BR"===d.nodeName&&(d.nextSibling&&"BR"===d.nextSibling.nodeName||0===r)&&z.push([])));for(r=0;r<p;r++)if(h=(d=a[r]).parentNode===D,"BR"!==d.nodeName)if(G&&(A=d.style,P||h||(d._x+=d.parentNode._x,d._y+=d.parentNode._y),A.left=d._x+"px",A.top=d._y+"px",A.position="absolute",A.display="block",A.width=d._w+1+"px",A.height=d._h+"px"),!P&&q)if(d._isSplit)for(d._next=l=d.nextSibling,d.parentNode.appendChild(d);l&&3===l.nodeType&&" "===l.textContent;)d._next=l.nextSibling,d.parentNode.appendChild(l),l=l.nextSibling;else d.parentNode._isSplit?(d._parent=d.parentNode,!d.previousSibling&&d.firstChild&&(d.firstChild._isFirst=!0),d.nextSibling&&" "===d.nextSibling.textContent&&!d.nextSibling.nextSibling&&K.push(d.nextSibling),d._next=d.nextSibling&&d.nextSibling._isFirst?null:d.nextSibling,d.parentNode.removeChild(d),a.splice(r--,1),p--):h||(g=!d.nextSibling&&u(d.parentNode,D,j),d.parentNode._parent&&d.parentNode._parent.appendChild(d),g&&d.parentNode.appendChild(X.createTextNode(" ")),"span"===M&&(d.style.display="inline"),H.push(d));else d.parentNode._isSplit&&!d._isSplit&&""!==d.innerHTML?O.push(d):q&&!d._isSplit&&("span"===M&&(d.style.display="inline"),H.push(d));else z||G?(d.parentNode&&d.parentNode.removeChild(d),a.splice(r--,1),p--):P||D.appendChild(d);for(r=K.length;-1<--r;)K[r].parentNode.removeChild(K[r]);if(z){for(G&&(c=X.createElement(M),D.appendChild(c),x=c.offsetWidth+"px",g=c.offsetParent===D?0:D.offsetLeft,D.removeChild(c)),A=D.style.cssText,D.style.cssText="display:none;";D.firstChild;)D.removeChild(D.firstChild);for(f=" "===j&&(!G||!P&&!q),r=0;r<z.length;r++){for(B=z[r],(c=X.createElement(M)).style.cssText="display:block;text-align:"+W+";position:"+(G?"absolute;":"relative;"),I&&(c.className=I+(J?r+1:"")),V.push(c),p=B.length,l=0;l<p;l++)"BR"!==B[l].nodeName&&(d=B[l],c.appendChild(d),f&&d._wordEnd&&c.appendChild(X.createTextNode(" ")),G&&(0===l&&(c.style.top=d._y+"px",c.style.left=_+g+"px"),d.style.top="0px",g&&(d.style.left=d._x-g+"px")));0===p?c.innerHTML="&nbsp;":P||q||(v(c),s(c,String.fromCharCode(160)," ")),G&&(c.style.width=x,c.style.height=d._h+"px"),D.appendChild(c)}D.style.cssText=A}G&&(E>D.clientHeight&&(D.style.height=E-m+"px",D.clientHeight<E&&(D.style.height=E+S+"px")),n>D.clientWidth&&(D.style.width=n-N+"px",D.clientWidth<n&&(D.style.width=n+T+"px"))),Q&&(U?D.style.display=U:D.style.removeProperty("display")),t(F,H),P&&t(C,O),t(i,V)}function y(D,u,e,t){var F,C,i,n,E,r,l,d,a=u.tag?u.tag:u.span?"span":"div",h=~(u.type||u.split||"chars,words,lines").indexOf("chars"),B=o(u),f=u.wordDelimiter||" ",A=" "!==f?"":B?"&#173; ":" ",c="</"+a+">",x=1,g=u.specialChars?"function"==typeof u.specialChars?u.specialChars:p:null,y=X.createElement("div"),v=D.parentNode;for(v.insertBefore(y,D),y.textContent=D.nodeValue,v.removeChild(D),l=-1!==(F=function getText(D){var u=D.nodeType,e="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)e+=getText(D)}else if(3===u||4===u)return D.nodeValue;return e}(D=y)).indexOf("<"),!1!==u.reduceWhiteSpace&&(F=F.replace(S," ").replace(b,"")),l&&(F=F.split("<").join("{{LT}}")),E=F.length,C=(" "===F.charAt(0)?A:"")+e(),i=0;i<E;i++)if(r=F.charAt(i),g&&(d=g(F.substr(i),u.specialChars)))r=F.substr(i,d||1),C+=h&&" "!==r?t()+r+"</"+a+">":r,i+=d-1;else if(r===f&&F.charAt(i-1)!==f&&i){for(C+=x?c:"",x=0;F.charAt(i+1)===f;)C+=A,i++;i===E-1?C+=A:")"!==F.charAt(i+1)&&(C+=A+e(),x=1)}else"{"===r&&"{{LT}}"===F.substr(i,6)?(C+=h?t()+"{{LT}}</"+a+">":"{{LT}}",i+=5):55296<=r.charCodeAt(0)&&r.charCodeAt(0)<=56319||65024<=F.charCodeAt(i+1)&&F.charCodeAt(i+1)<=65039?(n=((F.substr(i,12).split(_)||[])[1]||"").length||2,C+=h&&" "!==r?t()+F.substr(i,n)+"</"+a+">":F.substr(i,n),i+=n-1):C+=h&&" "!==r?t()+r+"</"+a+">":r;D.outerHTML=C+(x?c:""),l&&s(v,"{{LT}}","<")}function z(D,u,e,t){var F,C,i=n(D.childNodes),E=i.length,s=o(u);if(3!==D.nodeType||1<E){for(u.absolute=!1,F=0;F<E;F++)(C=i[F])._next=C._isFirst=C._parent=C._wordEnd=null,3===C.nodeType&&!/\S+/.test(C.nodeValue)||(s&&3!==C.nodeType&&"inline"===k(C).display&&(C.style.display="inline-block",C.style.position="relative"),C._isSplit=!0,z(C,u,e,t));return u.absolute=s,void(D._isSplit=!0)}y(D,u,e,t)}var X,e,F,C,b=/(?:\r|\n|\t\t)/g,S=/(?:\s\s+)/g,i=Array.isArray,E=[].slice,l=((C=SplitText.prototype).split=function split(D){this.isSplit&&this.revert(),this.vars=D=D||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var u,e,t,F=this.elements.length,C=D.tag?D.tag:D.span?"span":"div",i=r(D.wordsClass,C),n=r(D.charsClass,C);-1<--F;)t=this.elements[F],this._originals[F]=t.innerHTML,u=t.clientHeight,e=t.clientWidth,z(t,D,i,n),x(t,D,this.chars,this.words,this.lines,e,u);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},C.revert=function revert(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(D,u){return D.innerHTML=e[u]}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},SplitText.create=function create(D,u){return new SplitText(D,u)},SplitText);function SplitText(D,u){F||function _initCore(){X=document,e=window,F=1}(),this.elements=n(D),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=u||{},this.split(u)}l.version="3.11.2",D.SplitText=l,D.default=l;if (typeof(window)==="undefined"||window!==D){Object.defineProperty(D,"__esModule",{value:!0})} else {delete D.default}});


;
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).chroma=e()}(this,(function(){"use strict";for(var r=function(r,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),r<e?e:r>n?n:r},e=r,n={},t=0,a=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];t<a.length;t+=1){var f=a[t];n["[object "+f+"]"]=f.toLowerCase()}var o=function(r){return n[Object.prototype.toString.call(r)]||"object"},u=o,c=o,i=Math.PI,l={clip_rgb:function(r){r._clipped=!1,r._unclipped=r.slice(0);for(var n=0;n<=3;n++)n<3?((r[n]<0||r[n]>255)&&(r._clipped=!0),r[n]=e(r[n],0,255)):3===n&&(r[n]=e(r[n],0,1));return r},limit:r,type:o,unpack:function(r,e){return void 0===e&&(e=null),r.length>=3?Array.prototype.slice.call(r):"object"==u(r[0])&&e?e.split("").filter((function(e){return void 0!==r[0][e]})).map((function(e){return r[0][e]})):r[0]},last:function(r){if(r.length<2)return null;var e=r.length-1;return"string"==c(r[e])?r[e].toLowerCase():null},PI:i,TWOPI:2*i,PITHIRD:i/3,DEG2RAD:i/180,RAD2DEG:180/i},h={format:{},autodetect:[]},s=l.last,d=l.clip_rgb,b=l.type,p=h,g=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=this;if("object"===b(r[0])&&r[0].constructor&&r[0].constructor===this.constructor)return r[0];var t=s(r),a=!1;if(!t){a=!0,p.sorted||(p.autodetect=p.autodetect.sort((function(r,e){return e.p-r.p})),p.sorted=!0);for(var f=0,o=p.autodetect;f<o.length;f+=1){var u=o[f];if(t=u.test.apply(u,r))break}}if(!p.format[t])throw new Error("unknown format: "+r);var c=p.format[t].apply(null,a?r:r.slice(0,-1));n._rgb=d(c),3===n._rgb.length&&n._rgb.push(1)};g.prototype.toString=function(){return"function"==b(this.hex)?this.hex():"["+this._rgb.join(",")+"]"};var v=g,m=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(m.Color,[null].concat(r)))};m.Color=v,m.version="2.4.2";var y=m,k=l.unpack,w=Math.max,M=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=k(r,"rgb"),t=n[0],a=n[1],f=n[2],o=1-w(t/=255,w(a/=255,f/=255)),u=o<1?1/(1-o):0,c=(1-t-o)*u,i=(1-a-o)*u,l=(1-f-o)*u;return[c,i,l,o]},N=l.unpack,_=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=N(r,"cmyk"))[0],t=r[1],a=r[2],f=r[3],o=r.length>4?r[4]:1;return 1===f?[0,0,0,o]:[n>=1?0:255*(1-n)*(1-f),t>=1?0:255*(1-t)*(1-f),a>=1?0:255*(1-a)*(1-f),o]},x=y,A=v,E=h,F=l.unpack,P=l.type,O=M;A.prototype.cmyk=function(){return O(this._rgb)},x.cmyk=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(A,[null].concat(r,["cmyk"])))},E.format.cmyk=_,E.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=F(r,"cmyk"),"array"===P(r)&&4===r.length)return"cmyk"}});var j=l.unpack,G=l.last,R=function(r){return Math.round(100*r)/100},q=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=j(r,"hsla"),t=G(r)||"lsa";return n[0]=R(n[0]||0),n[1]=R(100*n[1])+"%",n[2]=R(100*n[2])+"%","hsla"===t||n.length>3&&n[3]<1?(n[3]=n.length>3?n[3]:1,t="hsla"):n.length=3,t+"("+n.join(",")+")"},L=l.unpack,I=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=L(r,"rgba"))[0],t=r[1],a=r[2];n/=255,t/=255,a/=255;var f,o,u=Math.min(n,t,a),c=Math.max(n,t,a),i=(c+u)/2;return c===u?(f=0,o=Number.NaN):f=i<.5?(c-u)/(c+u):(c-u)/(2-c-u),n==c?o=(t-a)/(c-u):t==c?o=2+(a-n)/(c-u):a==c&&(o=4+(n-t)/(c-u)),(o*=60)<0&&(o+=360),r.length>3&&void 0!==r[3]?[o,f,i,r[3]]:[o,f,i]},B=l.unpack,C=l.last,D=q,Y=I,S=Math.round,T=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=B(r,"rgba"),t=C(r)||"rgb";return"hsl"==t.substr(0,3)?D(Y(n),t):(n[0]=S(n[0]),n[1]=S(n[1]),n[2]=S(n[2]),("rgba"===t||n.length>3&&n[3]<1)&&(n[3]=n.length>3?n[3]:1,t="rgba"),t+"("+n.slice(0,"rgb"===t?3:4).join(",")+")")},$=l.unpack,z=Math.round,X=function(){for(var r,e=[],n=arguments.length;n--;)e[n]=arguments[n];var t,a,f,o=(e=$(e,"hsl"))[0],u=e[1],c=e[2];if(0===u)t=a=f=255*c;else{var i=[0,0,0],l=[0,0,0],h=c<.5?c*(1+u):c+u-c*u,s=2*c-h,d=o/360;i[0]=d+1/3,i[1]=d,i[2]=d-1/3;for(var b=0;b<3;b++)i[b]<0&&(i[b]+=1),i[b]>1&&(i[b]-=1),6*i[b]<1?l[b]=s+6*(h-s)*i[b]:2*i[b]<1?l[b]=h:3*i[b]<2?l[b]=s+(h-s)*(2/3-i[b])*6:l[b]=s;t=(r=[z(255*l[0]),z(255*l[1]),z(255*l[2])])[0],a=r[1],f=r[2]}return e.length>3?[t,a,f,e[3]]:[t,a,f,1]},U=X,V=h,W=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,K=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Z=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,H=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,J=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Q=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,rr=Math.round,er=function(r){var e;if(r=r.toLowerCase().trim(),V.format.named)try{return V.format.named(r)}catch(r){}if(e=r.match(W)){for(var n=e.slice(1,4),t=0;t<3;t++)n[t]=+n[t];return n[3]=1,n}if(e=r.match(K)){for(var a=e.slice(1,5),f=0;f<4;f++)a[f]=+a[f];return a}if(e=r.match(Z)){for(var o=e.slice(1,4),u=0;u<3;u++)o[u]=rr(2.55*o[u]);return o[3]=1,o}if(e=r.match(H)){for(var c=e.slice(1,5),i=0;i<3;i++)c[i]=rr(2.55*c[i]);return c[3]=+c[3],c}if(e=r.match(J)){var l=e.slice(1,4);l[1]*=.01,l[2]*=.01;var h=U(l);return h[3]=1,h}if(e=r.match(Q)){var s=e.slice(1,4);s[1]*=.01,s[2]*=.01;var d=U(s);return d[3]=+e[4],d}};er.test=function(r){return W.test(r)||K.test(r)||Z.test(r)||H.test(r)||J.test(r)||Q.test(r)};var nr=y,tr=v,ar=h,fr=l.type,or=T,ur=er;tr.prototype.css=function(r){return or(this._rgb,r)},nr.css=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(tr,[null].concat(r,["css"])))},ar.format.css=ur,ar.autodetect.push({p:5,test:function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!e.length&&"string"===fr(r)&&ur.test(r))return"css"}});var cr=v,ir=y,lr=l.unpack;h.format.gl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=lr(r,"rgba");return n[0]*=255,n[1]*=255,n[2]*=255,n},ir.gl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(cr,[null].concat(r,["gl"])))},cr.prototype.gl=function(){var r=this._rgb;return[r[0]/255,r[1]/255,r[2]/255,r[3]]};var hr=l.unpack,sr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t=hr(r,"rgb"),a=t[0],f=t[1],o=t[2],u=Math.min(a,f,o),c=Math.max(a,f,o),i=c-u,l=100*i/255,h=u/(255-i)*100;return 0===i?n=Number.NaN:(a===c&&(n=(f-o)/i),f===c&&(n=2+(o-a)/i),o===c&&(n=4+(a-f)/i),(n*=60)<0&&(n+=360)),[n,l,h]},dr=l.unpack,br=Math.floor,pr=function(){for(var r,e,n,t,a,f,o=[],u=arguments.length;u--;)o[u]=arguments[u];var c,i,l,h=(o=dr(o,"hcg"))[0],s=o[1],d=o[2];d*=255;var b=255*s;if(0===s)c=i=l=d;else{360===h&&(h=0),h>360&&(h-=360),h<0&&(h+=360);var p=br(h/=60),g=h-p,v=d*(1-s),m=v+b*(1-g),y=v+b*g,k=v+b;switch(p){case 0:c=(r=[k,y,v])[0],i=r[1],l=r[2];break;case 1:c=(e=[m,k,v])[0],i=e[1],l=e[2];break;case 2:c=(n=[v,k,y])[0],i=n[1],l=n[2];break;case 3:c=(t=[v,m,k])[0],i=t[1],l=t[2];break;case 4:c=(a=[y,v,k])[0],i=a[1],l=a[2];break;case 5:c=(f=[k,v,m])[0],i=f[1],l=f[2]}}return[c,i,l,o.length>3?o[3]:1]},gr=l.unpack,vr=l.type,mr=y,yr=v,kr=h,wr=sr;yr.prototype.hcg=function(){return wr(this._rgb)},mr.hcg=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(yr,[null].concat(r,["hcg"])))},kr.format.hcg=pr,kr.autodetect.push({p:1,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=gr(r,"hcg"),"array"===vr(r)&&3===r.length)return"hcg"}});var Mr=l.unpack,Nr=l.last,_r=Math.round,xr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=Mr(r,"rgba"),t=n[0],a=n[1],f=n[2],o=n[3],u=Nr(r)||"auto";void 0===o&&(o=1),"auto"===u&&(u=o<1?"rgba":"rgb");var c=(t=_r(t))<<16|(a=_r(a))<<8|(f=_r(f)),i="000000"+c.toString(16);i=i.substr(i.length-6);var l="0"+_r(255*o).toString(16);switch(l=l.substr(l.length-2),u.toLowerCase()){case"rgba":return"#"+i+l;case"argb":return"#"+l+i;default:return"#"+i}},Ar=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Er=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Fr=function(r){if(r.match(Ar)){4!==r.length&&7!==r.length||(r=r.substr(1)),3===r.length&&(r=(r=r.split(""))[0]+r[0]+r[1]+r[1]+r[2]+r[2]);var e=parseInt(r,16);return[e>>16,e>>8&255,255&e,1]}if(r.match(Er)){5!==r.length&&9!==r.length||(r=r.substr(1)),4===r.length&&(r=(r=r.split(""))[0]+r[0]+r[1]+r[1]+r[2]+r[2]+r[3]+r[3]);var n=parseInt(r,16);return[n>>24&255,n>>16&255,n>>8&255,Math.round((255&n)/255*100)/100]}throw new Error("unknown hex color: "+r)},Pr=y,Or=v,jr=l.type,Gr=h,Rr=xr;Or.prototype.hex=function(r){return Rr(this._rgb,r)},Pr.hex=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(Or,[null].concat(r,["hex"])))},Gr.format.hex=Fr,Gr.autodetect.push({p:4,test:function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!e.length&&"string"===jr(r)&&[3,4,5,6,7,8,9].indexOf(r.length)>=0)return"hex"}});var qr=l.unpack,Lr=l.TWOPI,Ir=Math.min,Br=Math.sqrt,Cr=Math.acos,Dr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t=qr(r,"rgb"),a=t[0],f=t[1],o=t[2],u=Ir(a/=255,f/=255,o/=255),c=(a+f+o)/3,i=c>0?1-u/c:0;return 0===i?n=NaN:(n=(a-f+(a-o))/2,n/=Br((a-f)*(a-f)+(a-o)*(f-o)),n=Cr(n),o>f&&(n=Lr-n),n/=Lr),[360*n,i,c]},Yr=l.unpack,Sr=l.limit,Tr=l.TWOPI,$r=l.PITHIRD,zr=Math.cos,Xr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t,a,f=(r=Yr(r,"hsi"))[0],o=r[1],u=r[2];return isNaN(f)&&(f=0),isNaN(o)&&(o=0),f>360&&(f-=360),f<0&&(f+=360),(f/=360)<1/3?t=1-((a=(1-o)/3)+(n=(1+o*zr(Tr*f)/zr($r-Tr*f))/3)):f<2/3?a=1-((n=(1-o)/3)+(t=(1+o*zr(Tr*(f-=1/3))/zr($r-Tr*f))/3)):n=1-((t=(1-o)/3)+(a=(1+o*zr(Tr*(f-=2/3))/zr($r-Tr*f))/3)),[255*(n=Sr(u*n*3)),255*(t=Sr(u*t*3)),255*(a=Sr(u*a*3)),r.length>3?r[3]:1]},Ur=l.unpack,Vr=l.type,Wr=y,Kr=v,Zr=h,Hr=Dr;Kr.prototype.hsi=function(){return Hr(this._rgb)},Wr.hsi=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(Kr,[null].concat(r,["hsi"])))},Zr.format.hsi=Xr,Zr.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=Ur(r,"hsi"),"array"===Vr(r)&&3===r.length)return"hsi"}});var Jr=l.unpack,Qr=l.type,re=y,ee=v,ne=h,te=I;ee.prototype.hsl=function(){return te(this._rgb)},re.hsl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(ee,[null].concat(r,["hsl"])))},ne.format.hsl=X,ne.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=Jr(r,"hsl"),"array"===Qr(r)&&3===r.length)return"hsl"}});var ae=l.unpack,fe=Math.min,oe=Math.max,ue=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t,a,f=(r=ae(r,"rgb"))[0],o=r[1],u=r[2],c=fe(f,o,u),i=oe(f,o,u),l=i-c;return a=i/255,0===i?(n=Number.NaN,t=0):(t=l/i,f===i&&(n=(o-u)/l),o===i&&(n=2+(u-f)/l),u===i&&(n=4+(f-o)/l),(n*=60)<0&&(n+=360)),[n,t,a]},ce=l.unpack,ie=Math.floor,le=function(){for(var r,e,n,t,a,f,o=[],u=arguments.length;u--;)o[u]=arguments[u];var c,i,l,h=(o=ce(o,"hsv"))[0],s=o[1],d=o[2];if(d*=255,0===s)c=i=l=d;else{360===h&&(h=0),h>360&&(h-=360),h<0&&(h+=360);var b=ie(h/=60),p=h-b,g=d*(1-s),v=d*(1-s*p),m=d*(1-s*(1-p));switch(b){case 0:c=(r=[d,m,g])[0],i=r[1],l=r[2];break;case 1:c=(e=[v,d,g])[0],i=e[1],l=e[2];break;case 2:c=(n=[g,d,m])[0],i=n[1],l=n[2];break;case 3:c=(t=[g,v,d])[0],i=t[1],l=t[2];break;case 4:c=(a=[m,g,d])[0],i=a[1],l=a[2];break;case 5:c=(f=[d,g,v])[0],i=f[1],l=f[2]}}return[c,i,l,o.length>3?o[3]:1]},he=l.unpack,se=l.type,de=y,be=v,pe=h,ge=ue;be.prototype.hsv=function(){return ge(this._rgb)},de.hsv=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(be,[null].concat(r,["hsv"])))},pe.format.hsv=le,pe.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=he(r,"hsv"),"array"===se(r)&&3===r.length)return"hsv"}});var ve={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},me=ve,ye=l.unpack,ke=Math.pow,we=function(r){return(r/=255)<=.04045?r/12.92:ke((r+.055)/1.055,2.4)},Me=function(r){return r>me.t3?ke(r,1/3):r/me.t2+me.t0},Ne=function(r,e,n){return r=we(r),e=we(e),n=we(n),[Me((.4124564*r+.3575761*e+.1804375*n)/me.Xn),Me((.2126729*r+.7151522*e+.072175*n)/me.Yn),Me((.0193339*r+.119192*e+.9503041*n)/me.Zn)]},_e=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=ye(r,"rgb"),t=n[0],a=n[1],f=n[2],o=Ne(t,a,f),u=o[0],c=o[1],i=o[2],l=116*c-16;return[l<0?0:l,500*(u-c),200*(c-i)]},xe=ve,Ae=l.unpack,Ee=Math.pow,Fe=function(r){return 255*(r<=.00304?12.92*r:1.055*Ee(r,1/2.4)-.055)},Pe=function(r){return r>xe.t1?r*r*r:xe.t2*(r-xe.t0)},Oe=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t,a,f=(r=Ae(r,"lab"))[0],o=r[1],u=r[2];return t=(f+16)/116,n=isNaN(o)?t:t+o/500,a=isNaN(u)?t:t-u/200,t=xe.Yn*Pe(t),n=xe.Xn*Pe(n),a=xe.Zn*Pe(a),[Fe(3.2404542*n-1.5371385*t-.4985314*a),Fe(-.969266*n+1.8760108*t+.041556*a),Fe(.0556434*n-.2040259*t+1.0572252*a),r.length>3?r[3]:1]},je=l.unpack,Ge=l.type,Re=y,qe=v,Le=h,Ie=_e;qe.prototype.lab=function(){return Ie(this._rgb)},Re.lab=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(qe,[null].concat(r,["lab"])))},Le.format.lab=Oe,Le.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=je(r,"lab"),"array"===Ge(r)&&3===r.length)return"lab"}});var Be=l.unpack,Ce=l.RAD2DEG,De=Math.sqrt,Ye=Math.atan2,Se=Math.round,Te=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=Be(r,"lab"),t=n[0],a=n[1],f=n[2],o=De(a*a+f*f),u=(Ye(f,a)*Ce+360)%360;return 0===Se(1e4*o)&&(u=Number.NaN),[t,o,u]},$e=l.unpack,ze=_e,Xe=Te,Ue=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=$e(r,"rgb"),t=n[0],a=n[1],f=n[2],o=ze(t,a,f),u=o[0],c=o[1],i=o[2];return Xe(u,c,i)},Ve=l.unpack,We=l.DEG2RAD,Ke=Math.sin,Ze=Math.cos,He=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=Ve(r,"lch"),t=n[0],a=n[1],f=n[2];return isNaN(f)&&(f=0),[t,Ze(f*=We)*a,Ke(f)*a]},Je=l.unpack,Qe=He,rn=Oe,en=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=Je(r,"lch"))[0],t=r[1],a=r[2],f=Qe(n,t,a),o=f[0],u=f[1],c=f[2],i=rn(o,u,c),l=i[0],h=i[1],s=i[2];return[l,h,s,r.length>3?r[3]:1]},nn=l.unpack,tn=en,an=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=nn(r,"hcl").reverse();return tn.apply(void 0,n)},fn=l.unpack,on=l.type,un=y,cn=v,ln=h,hn=Ue;cn.prototype.lch=function(){return hn(this._rgb)},cn.prototype.hcl=function(){return hn(this._rgb).reverse()},un.lch=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(cn,[null].concat(r,["lch"])))},un.hcl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(cn,[null].concat(r,["hcl"])))},ln.format.lch=en,ln.format.hcl=an,["lch","hcl"].forEach((function(r){return ln.autodetect.push({p:2,test:function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(e=fn(e,r),"array"===on(e)&&3===e.length)return r}})}));var sn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},dn=h,bn=l.type,pn=sn,gn=Fr,vn=xr;v.prototype.name=function(){for(var r=vn(this._rgb,"rgb"),e=0,n=Object.keys(pn);e<n.length;e+=1){var t=n[e];if(pn[t]===r)return t.toLowerCase()}return r},dn.format.named=function(r){if(r=r.toLowerCase(),pn[r])return gn(pn[r]);throw new Error("unknown color name: "+r)},dn.autodetect.push({p:5,test:function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!e.length&&"string"===bn(r)&&pn[r.toLowerCase()])return"named"}});var mn=l.unpack,yn=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=mn(r,"rgb"),t=n[0],a=n[1],f=n[2];return(t<<16)+(a<<8)+f},kn=l.type,wn=function(r){if("number"==kn(r)&&r>=0&&r<=16777215)return[r>>16,r>>8&255,255&r,1];throw new Error("unknown num color: "+r)},Mn=y,Nn=v,_n=h,xn=l.type,An=yn;Nn.prototype.num=function(){return An(this._rgb)},Mn.num=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(Nn,[null].concat(r,["num"])))},_n.format.num=wn,_n.autodetect.push({p:5,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(1===r.length&&"number"===xn(r[0])&&r[0]>=0&&r[0]<=16777215)return"num"}});var En=y,Fn=v,Pn=h,On=l.unpack,jn=l.type,Gn=Math.round;Fn.prototype.rgb=function(r){return void 0===r&&(r=!0),!1===r?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Gn)},Fn.prototype.rgba=function(r){return void 0===r&&(r=!0),this._rgb.slice(0,4).map((function(e,n){return n<3?!1===r?e:Gn(e):e}))},En.rgb=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(Fn,[null].concat(r,["rgb"])))},Pn.format.rgb=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=On(r,"rgba");return void 0===n[3]&&(n[3]=1),n},Pn.autodetect.push({p:3,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=On(r,"rgba"),"array"===jn(r)&&(3===r.length||4===r.length&&"number"==jn(r[3])&&r[3]>=0&&r[3]<=1))return"rgb"}});var Rn=Math.log,qn=function(r){var e,n,t,a=r/100;return a<66?(e=255,n=a<6?0:-155.25485562709179-.44596950469579133*(n=a-2)+104.49216199393888*Rn(n),t=a<20?0:.8274096064007395*(t=a-10)-254.76935184120902+115.67994401066147*Rn(t)):(e=351.97690566805693+.114206453784165*(e=a-55)-40.25366309332127*Rn(e),n=325.4494125711974+.07943456536662342*(n=a-50)-28.0852963507957*Rn(n),t=255),[e,n,t,1]},Ln=qn,In=l.unpack,Bn=Math.round,Cn=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];for(var n,t=In(r,"rgb"),a=t[0],f=t[2],o=1e3,u=4e4,c=.4;u-o>c;){var i=Ln(n=.5*(u+o));i[2]/i[0]>=f/a?u=n:o=n}return Bn(n)},Dn=y,Yn=v,Sn=h,Tn=Cn;Yn.prototype.temp=Yn.prototype.kelvin=Yn.prototype.temperature=function(){return Tn(this._rgb)},Dn.temp=Dn.kelvin=Dn.temperature=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(Yn,[null].concat(r,["temp"])))},Sn.format.temp=Sn.format.kelvin=Sn.format.temperature=qn;var $n=l.unpack,zn=Math.cbrt,Xn=Math.pow,Un=Math.sign,Vn=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=$n(r,"rgb"),t=n[0],a=n[1],f=n[2],o=[Wn(t/255),Wn(a/255),Wn(f/255)],u=o[0],c=o[1],i=o[2],l=zn(.4122214708*u+.5363325363*c+.0514459929*i),h=zn(.2119034982*u+.6806995451*c+.1073969566*i),s=zn(.0883024619*u+.2817188376*c+.6299787005*i);return[.2104542553*l+.793617785*h-.0040720468*s,1.9779984951*l-2.428592205*h+.4505937099*s,.0259040371*l+.7827717662*h-.808675766*s]};function Wn(r){var e=Math.abs(r);return e<.04045?r/12.92:(Un(r)||1)*Xn((e+.055)/1.055,2.4)}var Kn=l.unpack,Zn=Math.pow,Hn=Math.sign,Jn=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=Kn(r,"lab"))[0],t=r[1],a=r[2],f=Zn(n+.3963377774*t+.2158037573*a,3),o=Zn(n-.1055613458*t-.0638541728*a,3),u=Zn(n-.0894841775*t-1.291485548*a,3);return[255*Qn(4.0767416621*f-3.3077115913*o+.2309699292*u),255*Qn(-1.2684380046*f+2.6097574011*o-.3413193965*u),255*Qn(-.0041960863*f-.7034186147*o+1.707614701*u),r.length>3?r[3]:1]};function Qn(r){var e=Math.abs(r);return e>.0031308?(Hn(r)||1)*(1.055*Zn(e,1/2.4)-.055):12.92*r}var rt=l.unpack,et=l.type,nt=y,tt=v,at=h,ft=Vn;tt.prototype.oklab=function(){return ft(this._rgb)},nt.oklab=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(tt,[null].concat(r,["oklab"])))},at.format.oklab=Jn,at.autodetect.push({p:3,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=rt(r,"oklab"),"array"===et(r)&&3===r.length)return"oklab"}});var ot=l.unpack,ut=Vn,ct=Te,it=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=ot(r,"rgb"),t=n[0],a=n[1],f=n[2],o=ut(t,a,f),u=o[0],c=o[1],i=o[2];return ct(u,c,i)},lt=l.unpack,ht=He,st=Jn,dt=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=lt(r,"lch"))[0],t=r[1],a=r[2],f=ht(n,t,a),o=f[0],u=f[1],c=f[2],i=st(o,u,c),l=i[0],h=i[1],s=i[2];return[l,h,s,r.length>3?r[3]:1]},bt=l.unpack,pt=l.type,gt=y,vt=v,mt=h,yt=it;vt.prototype.oklch=function(){return yt(this._rgb)},gt.oklch=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(vt,[null].concat(r,["oklch"])))},mt.format.oklch=dt,mt.autodetect.push({p:3,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=bt(r,"oklch"),"array"===pt(r)&&3===r.length)return"oklch"}});var kt=v,wt=l.type;kt.prototype.alpha=function(r,e){return void 0===e&&(e=!1),void 0!==r&&"number"===wt(r)?e?(this._rgb[3]=r,this):new kt([this._rgb[0],this._rgb[1],this._rgb[2],r],"rgb"):this._rgb[3]},v.prototype.clipped=function(){return this._rgb._clipped||!1};var Mt=v,Nt=ve;Mt.prototype.darken=function(r){void 0===r&&(r=1);var e=this.lab();return e[0]-=Nt.Kn*r,new Mt(e,"lab").alpha(this.alpha(),!0)},Mt.prototype.brighten=function(r){return void 0===r&&(r=1),this.darken(-r)},Mt.prototype.darker=Mt.prototype.darken,Mt.prototype.brighter=Mt.prototype.brighten,v.prototype.get=function(r){var e=r.split("."),n=e[0],t=e[1],a=this[n]();if(t){var f=n.indexOf(t)-("ok"===n.substr(0,2)?2:0);if(f>-1)return a[f];throw new Error("unknown channel "+t+" in mode "+n)}return a};var _t=v,xt=l.type,At=Math.pow;_t.prototype.luminance=function(r){if(void 0!==r&&"number"===xt(r)){if(0===r)return new _t([0,0,0,this._rgb[3]],"rgb");if(1===r)return new _t([255,255,255,this._rgb[3]],"rgb");var e=this.luminance(),n=20,t=function(e,a){var f=e.interpolate(a,.5,"rgb"),o=f.luminance();return Math.abs(r-o)<1e-7||!n--?f:o>r?t(e,f):t(f,a)},a=(e>r?t(new _t([0,0,0]),this):t(this,new _t([255,255,255]))).rgb();return new _t(a.concat([this._rgb[3]]))}return Et.apply(void 0,this._rgb.slice(0,3))};var Et=function(r,e,n){return.2126*(r=Ft(r))+.7152*(e=Ft(e))+.0722*(n=Ft(n))},Ft=function(r){return(r/=255)<=.03928?r/12.92:At((r+.055)/1.055,2.4)},Pt={},Ot=v,jt=l.type,Gt=Pt,Rt=function(r,e,n){void 0===n&&(n=.5);for(var t=[],a=arguments.length-3;a-- >0;)t[a]=arguments[a+3];var f=t[0]||"lrgb";if(Gt[f]||t.length||(f=Object.keys(Gt)[0]),!Gt[f])throw new Error("interpolation mode "+f+" is not defined");return"object"!==jt(r)&&(r=new Ot(r)),"object"!==jt(e)&&(e=new Ot(e)),Gt[f](r,e,n).alpha(r.alpha()+n*(e.alpha()-r.alpha()))},qt=v,Lt=Rt;qt.prototype.mix=qt.prototype.interpolate=function(r,e){void 0===e&&(e=.5);for(var n=[],t=arguments.length-2;t-- >0;)n[t]=arguments[t+2];return Lt.apply(void 0,[this,r,e].concat(n))};var It=v;It.prototype.premultiply=function(r){void 0===r&&(r=!1);var e=this._rgb,n=e[3];return r?(this._rgb=[e[0]*n,e[1]*n,e[2]*n,n],this):new It([e[0]*n,e[1]*n,e[2]*n,n],"rgb")};var Bt=v,Ct=ve;Bt.prototype.saturate=function(r){void 0===r&&(r=1);var e=this.lch();return e[1]+=Ct.Kn*r,e[1]<0&&(e[1]=0),new Bt(e,"lch").alpha(this.alpha(),!0)},Bt.prototype.desaturate=function(r){return void 0===r&&(r=1),this.saturate(-r)};var Dt=v,Yt=l.type;Dt.prototype.set=function(r,e,n){void 0===n&&(n=!1);var t=r.split("."),a=t[0],f=t[1],o=this[a]();if(f){var u=a.indexOf(f)-("ok"===a.substr(0,2)?2:0);if(u>-1){if("string"==Yt(e))switch(e.charAt(0)){case"+":case"-":o[u]+=+e;break;case"*":o[u]*=+e.substr(1);break;case"/":o[u]/=+e.substr(1);break;default:o[u]=+e}else{if("number"!==Yt(e))throw new Error("unsupported%20value%20for%20Color.html");o[u]=e}var c=new Dt(o,a);return n?(this._rgb=c._rgb,this):c}throw new Error("unknown channel "+f+" in mode "+a)}return o};var St=v;Pt.rgb=function(r,e,n){var t=r._rgb,a=e._rgb;return new St(t[0]+n*(a[0]-t[0]),t[1]+n*(a[1]-t[1]),t[2]+n*(a[2]-t[2]),"rgb")};var Tt=v,$t=Math.sqrt,zt=Math.pow;Pt.lrgb=function(r,e,n){var t=r._rgb,a=t[0],f=t[1],o=t[2],u=e._rgb,c=u[0],i=u[1],l=u[2];return new Tt($t(zt(a,2)*(1-n)+zt(c,2)*n),$t(zt(f,2)*(1-n)+zt(i,2)*n),$t(zt(o,2)*(1-n)+zt(l,2)*n),"rgb")};var Xt=v;Pt.lab=function(r,e,n){var t=r.lab(),a=e.lab();return new Xt(t[0]+n*(a[0]-t[0]),t[1]+n*(a[1]-t[1]),t[2]+n*(a[2]-t[2]),"lab")};var Ut=v,Vt=function(r,e,n,t){var a,f,o,u,c,i,l,h,s,d,b,p,g;return"hsl"===t?(o=r.hsl(),u=e.hsl()):"hsv"===t?(o=r.hsv(),u=e.hsv()):"hcg"===t?(o=r.hcg(),u=e.hcg()):"hsi"===t?(o=r.hsi(),u=e.hsi()):"lch"===t||"hcl"===t?(t="hcl",o=r.hcl(),u=e.hcl()):"oklch"===t&&(o=r.oklch().reverse(),u=e.oklch().reverse()),"h"!==t.substr(0,1)&&"oklch"!==t||(c=(a=o)[0],l=a[1],s=a[2],i=(f=u)[0],h=f[1],d=f[2]),isNaN(c)||isNaN(i)?isNaN(c)?isNaN(i)?p=Number.NaN:(p=i,1!=s&&0!=s||"hsv"==t||(b=h)):(p=c,1!=d&&0!=d||"hsv"==t||(b=l)):p=c+n*(i>c&&i-c>180?i-(c+360):i<c&&c-i>180?i+360-c:i-c),void 0===b&&(b=l+n*(h-l)),g=s+n*(d-s),new Ut("oklch"===t?[g,b,p]:[p,b,g],t)},Wt=Vt,Kt=function(r,e,n){return Wt(r,e,n,"lch")};Pt.lch=Kt,Pt.hcl=Kt;var Zt=v;Pt.num=function(r,e,n){var t=r.num(),a=e.num();return new Zt(t+n*(a-t),"num")};var Ht=Vt;Pt.hcg=function(r,e,n){return Ht(r,e,n,"hcg")};var Jt=Vt;Pt.hsi=function(r,e,n){return Jt(r,e,n,"hsi")};var Qt=Vt;Pt.hsl=function(r,e,n){return Qt(r,e,n,"hsl")};var ra=Vt;Pt.hsv=function(r,e,n){return ra(r,e,n,"hsv")};var ea=v;Pt.oklab=function(r,e,n){var t=r.oklab(),a=e.oklab();return new ea(t[0]+n*(a[0]-t[0]),t[1]+n*(a[1]-t[1]),t[2]+n*(a[2]-t[2]),"oklab")};var na=Vt;Pt.oklch=function(r,e,n){return na(r,e,n,"oklch")};var ta=v,aa=l.clip_rgb,fa=Math.pow,oa=Math.sqrt,ua=Math.PI,ca=Math.cos,ia=Math.sin,la=Math.atan2,ha=function(r,e){for(var n=r.length,t=[0,0,0,0],a=0;a<r.length;a++){var f=r[a],o=e[a]/n,u=f._rgb;t[0]+=fa(u[0],2)*o,t[1]+=fa(u[1],2)*o,t[2]+=fa(u[2],2)*o,t[3]+=u[3]*o}return t[0]=oa(t[0]),t[1]=oa(t[1]),t[2]=oa(t[2]),t[3]>.9999999&&(t[3]=1),new ta(aa(t))},sa=y,da=l.type,ba=Math.pow,pa=function(r){var e="rgb",n=sa("#ccc"),t=0,a=[0,1],f=[],o=[0,0],u=!1,c=[],i=!1,l=0,h=1,s=!1,d={},b=!0,p=1,g=function(r){if((r=r||["#fff","#000"])&&"string"===da(r)&&sa.brewer&&sa.brewer[r.toLowerCase()]&&(r=sa.brewer[r.toLowerCase()]),"array"===da(r)){1===r.length&&(r=[r[0],r[0]]),r=r.slice(0);for(var e=0;e<r.length;e++)r[e]=sa(r[e]);f.length=0;for(var n=0;n<r.length;n++)f.push(n/(r.length-1))}return k(),c=r},v=function(r){return r},m=function(r){return r},y=function(r,t){var a,i;if(null==t&&(t=!1),isNaN(r)||null===r)return n;if(t)i=r;else if(u&&u.length>2){var s=function(r){if(null!=u){for(var e=u.length-1,n=0;n<e&&r>=u[n];)n++;return n-1}return 0}(r);i=s/(u.length-2)}else i=h!==l?(r-l)/(h-l):1;i=m(i),t||(i=v(i)),1!==p&&(i=ba(i,p)),i=o[0]+i*(1-o[0]-o[1]),i=Math.min(1,Math.max(0,i));var g=Math.floor(1e4*i);if(b&&d[g])a=d[g];else{if("array"===da(c))for(var y=0;y<f.length;y++){var k=f[y];if(i<=k){a=c[y];break}if(i>=k&&y===f.length-1){a=c[y];break}if(i>k&&i<f[y+1]){i=(i-k)/(f[y+1]-k),a=sa.interpolate(c[y],c[y+1],i,e);break}}else"function"===da(c)&&(a=c(i));b&&(d[g]=a)}return a},k=function(){return d={}};g(r);var w=function(r){var e=sa(y(r));return i&&e[i]?e[i]():e};return w.classes=function(r){if(null!=r){if("array"===da(r))u=r,a=[r[0],r[r.length-1]];else{var e=sa.analyze(a);u=0===r?[e.min,e.max]:sa.limits(e,"e",r)}return w}return u},w.domain=function(r){if(!arguments.length)return a;l=r[0],h=r[r.length-1],f=[];var e=c.length;if(r.length===e&&l!==h)for(var n=0,t=Array.from(r);n<t.length;n+=1){var o=t[n];f.push((o-l)/(h-l))}else{for(var u=0;u<e;u++)f.push(u/(e-1));if(r.length>2){var i=r.map((function(e,n){return n/(r.length-1)})),s=r.map((function(r){return(r-l)/(h-l)}));s.every((function(r,e){return i[e]===r}))||(m=function(r){if(r<=0||r>=1)return r;for(var e=0;r>=s[e+1];)e++;var n=(r-s[e])/(s[e+1]-s[e]);return i[e]+n*(i[e+1]-i[e])})}}return a=[l,h],w},w.mode=function(r){return arguments.length?(e=r,k(),w):e},w.range=function(r,e){return g(r),w},w.out=function(r){return i=r,w},w.spread=function(r){return arguments.length?(t=r,w):t},w.correctLightness=function(r){return null==r&&(r=!0),s=r,k(),v=s?function(r){for(var e=y(0,!0).lab()[0],n=y(1,!0).lab()[0],t=e>n,a=y(r,!0).lab()[0],f=e+(n-e)*r,o=a-f,u=0,c=1,i=20;Math.abs(o)>.01&&i-- >0;)t&&(o*=-1),o<0?(u=r,r+=.5*(c-r)):(c=r,r+=.5*(u-r)),a=y(r,!0).lab()[0],o=a-f;return r}:function(r){return r},w},w.padding=function(r){return null!=r?("number"===da(r)&&(r=[r,r]),o=r,w):o},w.colors=function(e,n){arguments.length<2&&(n="hex");var t=[];if(0===arguments.length)t=c.slice(0);else if(1===e)t=[w(.5)];else if(e>1){var f=a[0],o=a[1]-f;t=ga(0,e,!1).map((function(r){return w(f+r/(e-1)*o)}))}else{r=[];var i=[];if(u&&u.length>2)for(var l=1,h=u.length,s=1<=h;s?l<h:l>h;s?l++:l--)i.push(.5*(u[l-1]+u[l]));else i=a;t=i.map((function(r){return w(r)}))}return sa[n]&&(t=t.map((function(r){return r[n]()}))),t},w.cache=function(r){return null!=r?(b=r,w):b},w.gamma=function(r){return null!=r?(p=r,w):p},w.nodata=function(r){return null!=r?(n=sa(r),w):n},w};function ga(r,e,n){for(var t=[],a=r<e,f=n?a?e+1:e-1:e,o=r;a?o<f:o>f;a?o++:o--)t.push(o);return t}var va=v,ma=pa,ya=y,ka=function(r,e,n){if(!ka[n])throw new Error("unknown blend mode "+n);return ka[n](r,e)},wa=function(r){return function(e,n){var t=ya(n).rgb(),a=ya(e).rgb();return ya.rgb(r(t,a))}},Ma=function(r){return function(e,n){var t=[];return t[0]=r(e[0],n[0]),t[1]=r(e[1],n[1]),t[2]=r(e[2],n[2]),t}};ka.normal=wa(Ma((function(r){return r}))),ka.multiply=wa(Ma((function(r,e){return r*e/255}))),ka.screen=wa(Ma((function(r,e){return 255*(1-(1-r/255)*(1-e/255))}))),ka.overlay=wa(Ma((function(r,e){return e<128?2*r*e/255:255*(1-2*(1-r/255)*(1-e/255))}))),ka.darken=wa(Ma((function(r,e){return r>e?e:r}))),ka.lighten=wa(Ma((function(r,e){return r>e?r:e}))),ka.dodge=wa(Ma((function(r,e){return 255===r||(r=e/255*255/(1-r/255))>255?255:r}))),ka.burn=wa(Ma((function(r,e){return 255*(1-(1-e/255)/(r/255))})));for(var Na=ka,_a=l.type,xa=l.clip_rgb,Aa=l.TWOPI,Ea=Math.pow,Fa=Math.sin,Pa=Math.cos,Oa=y,ja=v,Ga=Math.floor,Ra=Math.random,qa=o,La=Math.log,Ia=Math.pow,Ba=Math.floor,Ca=Math.abs,Da=function(r,e){void 0===e&&(e=null);var n={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return"object"===qa(r)&&(r=Object.values(r)),r.forEach((function(r){e&&"object"===qa(r)&&(r=r[e]),null==r||isNaN(r)||(n.values.push(r),n.sum+=r,r<n.min&&(n.min=r),r>n.max&&(n.max=r),n.count+=1)})),n.domain=[n.min,n.max],n.limits=function(r,e){return Ya(n,r,e)},n},Ya=function(r,e,n){void 0===e&&(e="equal"),void 0===n&&(n=7),"array"==qa(r)&&(r=Da(r));var t=r.min,a=r.max,f=r.values.sort((function(r,e){return r-e}));if(1===n)return[t,a];var o=[];if("c"===e.substr(0,1)&&(o.push(t),o.push(a)),"e"===e.substr(0,1)){o.push(t);for(var u=1;u<n;u++)o.push(t+u/n*(a-t));o.push(a)}else if("l"===e.substr(0,1)){if(t<=0)throw new Error("Logarithmic scales are only possible for values > 0");var c=Math.LOG10E*La(t),i=Math.LOG10E*La(a);o.push(t);for(var l=1;l<n;l++)o.push(Ia(10,c+l/n*(i-c)));o.push(a)}else if("q"===e.substr(0,1)){o.push(t);for(var h=1;h<n;h++){var s=(f.length-1)*h/n,d=Ba(s);if(d===s)o.push(f[d]);else{var b=s-d;o.push(f[d]*(1-b)+f[d+1]*b)}}o.push(a)}else if("k"===e.substr(0,1)){var p,g=f.length,v=new Array(g),m=new Array(n),y=!0,k=0,w=null;(w=[]).push(t);for(var M=1;M<n;M++)w.push(t+M/n*(a-t));for(w.push(a);y;){for(var N=0;N<n;N++)m[N]=0;for(var _=0;_<g;_++)for(var x=f[_],A=Number.MAX_VALUE,E=void 0,F=0;F<n;F++){var P=Ca(w[F]-x);P<A&&(A=P,E=F),m[E]++,v[_]=E}for(var O=new Array(n),j=0;j<n;j++)O[j]=null;for(var G=0;G<g;G++)null===O[p=v[G]]?O[p]=f[G]:O[p]+=f[G];for(var R=0;R<n;R++)O[R]*=1/m[R];y=!1;for(var q=0;q<n;q++)if(O[q]!==w[q]){y=!0;break}w=O,++k>200&&(y=!1)}for(var L={},I=0;I<n;I++)L[I]=[];for(var B=0;B<g;B++)L[p=v[B]].push(f[B]);for(var C=[],D=0;D<n;D++)C.push(L[D][0]),C.push(L[D][L[D].length-1]);C=C.sort((function(r,e){return r-e})),o.push(C[0]);for(var Y=1;Y<C.length;Y+=2){var S=C[Y];isNaN(S)||-1!==o.indexOf(S)||o.push(S)}}return o},Sa={analyze:Da,limits:Ya},Ta=v,$a=v,za=Math.sqrt,Xa=Math.pow,Ua=Math.min,Va=Math.max,Wa=Math.atan2,Ka=Math.abs,Za=Math.cos,Ha=Math.sin,Ja=Math.exp,Qa=Math.PI,rf=v,ef=v,nf=y,tf=pa,af={cool:function(){return tf([nf.hsl(180,1,.9),nf.hsl(250,.7,.4)])},hot:function(){return tf(["#000","#f00","#ff0","#fff"]).mode("rgb")}},ff={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},of=0,uf=Object.keys(ff);of<uf.length;of+=1){var cf=uf[of];ff[cf.toLowerCase()]=ff[cf]}var lf=ff,hf=y;return hf.average=function(r,e,n){void 0===e&&(e="lrgb"),void 0===n&&(n=null);var t=r.length;n||(n=Array.from(new Array(t)).map((function(){return 1})));var a=t/n.reduce((function(r,e){return r+e}));if(n.forEach((function(r,e){n[e]*=a})),r=r.map((function(r){return new ta(r)})),"lrgb"===e)return ha(r,n);for(var f=r.shift(),o=f.get(e),u=[],c=0,i=0,l=0;l<o.length;l++)if(o[l]=(o[l]||0)*n[0],u.push(isNaN(o[l])?0:n[0]),"h"===e.charAt(l)&&!isNaN(o[l])){var h=o[l]/180*ua;c+=ca(h)*n[0],i+=ia(h)*n[0]}var s=f.alpha()*n[0];r.forEach((function(r,t){var a=r.get(e);s+=r.alpha()*n[t+1];for(var f=0;f<o.length;f++)if(!isNaN(a[f]))if(u[f]+=n[t+1],"h"===e.charAt(f)){var l=a[f]/180*ua;c+=ca(l)*n[t+1],i+=ia(l)*n[t+1]}else o[f]+=a[f]*n[t+1]}));for(var d=0;d<o.length;d++)if("h"===e.charAt(d)){for(var b=la(i/u[d],c/u[d])/ua*180;b<0;)b+=360;for(;b>=360;)b-=360;o[d]=b}else o[d]=o[d]/u[d];return s/=t,new ta(o,e).alpha(s>.99999?1:s,!0)},hf.bezier=function(r){var e=function(r){var e,n,t,a,f,o,u;if(2===(r=r.map((function(r){return new va(r)}))).length)e=r.map((function(r){return r.lab()})),f=e[0],o=e[1],a=function(r){var e=[0,1,2].map((function(e){return f[e]+r*(o[e]-f[e])}));return new va(e,"lab")};else if(3===r.length)n=r.map((function(r){return r.lab()})),f=n[0],o=n[1],u=n[2],a=function(r){var e=[0,1,2].map((function(e){return(1-r)*(1-r)*f[e]+2*(1-r)*r*o[e]+r*r*u[e]}));return new va(e,"lab")};else if(4===r.length){var c;t=r.map((function(r){return r.lab()})),f=t[0],o=t[1],u=t[2],c=t[3],a=function(r){var e=[0,1,2].map((function(e){return(1-r)*(1-r)*(1-r)*f[e]+3*(1-r)*(1-r)*r*o[e]+3*(1-r)*r*r*u[e]+r*r*r*c[e]}));return new va(e,"lab")}}else{if(!(r.length>=5))throw new RangeError("No point in running bezier with only one color.");var i,l,h;i=r.map((function(r){return r.lab()})),h=r.length-1,l=function(r){for(var e=[1,1],n=1;n<r;n++){for(var t=[1],a=1;a<=e.length;a++)t[a]=(e[a]||0)+e[a-1];e=t}return e}(h),a=function(r){var e=1-r,n=[0,1,2].map((function(n){return i.reduce((function(t,a,f){return t+l[f]*Math.pow(e,h-f)*Math.pow(r,f)*a[n]}),0)}));return new va(n,"lab")}}return a}(r);return e.scale=function(){return ma(e)},e},hf.blend=Na,hf.cubehelix=function(r,e,n,t,a){void 0===r&&(r=300),void 0===e&&(e=-1.5),void 0===n&&(n=1),void 0===t&&(t=1),void 0===a&&(a=[0,1]);var f,o=0;"array"===_a(a)?f=a[1]-a[0]:(f=0,a=[a,a]);var u=function(u){var c=Aa*((r+120)/360+e*u),i=Ea(a[0]+f*u,t),l=(0!==o?n[0]+u*o:n)*i*(1-i)/2,h=Pa(c),s=Fa(c);return Oa(xa([255*(i+l*(-.14861*h+1.78277*s)),255*(i+l*(-.29227*h-.90649*s)),255*(i+l*(1.97294*h)),1]))};return u.start=function(e){return null==e?r:(r=e,u)},u.rotations=function(r){return null==r?e:(e=r,u)},u.gamma=function(r){return null==r?t:(t=r,u)},u.hue=function(r){return null==r?n:("array"===_a(n=r)?0===(o=n[1]-n[0])&&(n=n[1]):o=0,u)},u.lightness=function(r){return null==r?a:("array"===_a(r)?(a=r,f=r[1]-r[0]):(a=[r,r],f=0),u)},u.scale=function(){return Oa.scale(u)},u.hue(n),u},hf.mix=hf.interpolate=Rt,hf.random=function(){for(var r="#",e=0;e<6;e++)r+="0123456789abcdef".charAt(Ga(16*Ra()));return new ja(r,"hex")},hf.scale=pa,hf.analyze=Sa.analyze,hf.contrast=function(r,e){r=new Ta(r),e=new Ta(e);var n=r.luminance(),t=e.luminance();return n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)},hf.deltaE=function(r,e,n,t,a){void 0===n&&(n=1),void 0===t&&(t=1),void 0===a&&(a=1);var f=function(r){return 360*r/(2*Qa)},o=function(r){return 2*Qa*r/360};r=new $a(r),e=new $a(e);var u=Array.from(r.lab()),c=u[0],i=u[1],l=u[2],h=Array.from(e.lab()),s=h[0],d=h[1],b=h[2],p=(c+s)/2,g=(za(Xa(i,2)+Xa(l,2))+za(Xa(d,2)+Xa(b,2)))/2,v=.5*(1-za(Xa(g,7)/(Xa(g,7)+Xa(25,7)))),m=i*(1+v),y=d*(1+v),k=za(Xa(m,2)+Xa(l,2)),w=za(Xa(y,2)+Xa(b,2)),M=(k+w)/2,N=f(Wa(l,m)),_=f(Wa(b,y)),x=N>=0?N:N+360,A=_>=0?_:_+360,E=Ka(x-A)>180?(x+A+360)/2:(x+A)/2,F=1-.17*Za(o(E-30))+.24*Za(o(2*E))+.32*Za(o(3*E+6))-.2*Za(o(4*E-63)),P=A-x;P=Ka(P)<=180?P:A<=x?P+360:P-360,P=2*za(k*w)*Ha(o(P)/2);var O=s-c,j=w-k,G=1+.015*Xa(p-50,2)/za(20+Xa(p-50,2)),R=1+.045*M,q=1+.015*M*F,L=30*Ja(-Xa((E-275)/25,2)),I=-(2*za(Xa(M,7)/(Xa(M,7)+Xa(25,7))))*Ha(2*o(L)),B=za(Xa(O/(n*G),2)+Xa(j/(t*R),2)+Xa(P/(a*q),2)+I*(j/(t*R))*(P/(a*q)));return Va(0,Ua(100,B))},hf.distance=function(r,e,n){void 0===n&&(n="lab"),r=new rf(r),e=new rf(e);var t=r.get(n),a=e.get(n),f=0;for(var o in t){var u=(t[o]||0)-(a[o]||0);f+=u*u}return Math.sqrt(f)},hf.limits=Sa.limits,hf.valid=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];try{return new(Function.prototype.bind.apply(ef,[null].concat(r))),!0}catch(r){return!1}},hf.scales=af,hf.colors=sn,hf.brewer=lf,hf}));

;
/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(t){"use strict";var e=null,n=null;!function(){var e=["webkit","moz","o","ms"],n=t.document.createElement("div"),a=-1;for(a=0;a<e.length&&!t.requestAnimationFrame;a++)t.requestAnimationFrame=t[e[a]+"RequestAnimationFrame"];"undefined"==typeof n.nextElementSibling&&Object.defineProperty(t.Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t;){if(1===t.nodeType)return t;t=t.nextSibling}return null}}),function(t){t.matches=t.matches||t.machesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector||function(t){return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t),this)>-1}}(t.Element.prototype),Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,e=!1,n=[],a=-1;return e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=n.length,function(i){var o=[],r="",s=-1;if("object"!=typeof i&&("function"!=typeof i||null===i))throw new TypeError("Object.keys called on non-object");for(r in i)t.call(i,r)&&o.push(r);if(e)for(s=0;s<a;s++)t.call(i,n[s])&&o.push(n[s]);return o}}()),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),"function"!=typeof Object.create&&(Object.create=function(t){var e=function(){};return function(n,a){if(n!==Object(n)&&null!==n)throw TypeError("Argument must be an object, or null");e.prototype=n||{};var i=new e;return e.prototype=null,a!==t&&Object.defineProperties(i,a),null===n&&(i.__proto__=null),i}}()),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e,n,a,i;if(null===this)throw new TypeError;if(a=Object(this),i=a.length>>>0,0===i)return-1;if(e=0,arguments.length>1&&(e=Number(arguments[1]),e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e)))),e>=i)return-1;for(n=e>=0?e:Math.max(i-Math.abs(e),0);n<i;n++)if(n in a&&a[n]===t)return n;return-1}),Function.prototype.bind||(Function.prototype.bind=function(t){var e,n,a,i;if("function"!=typeof this)throw new TypeError;return e=Array.prototype.slice.call(arguments,1),n=this,a=function(){},i=function(){return n.apply(this instanceof a?this:t,e.concat(Array.prototype.slice.call(arguments)))},this.prototype&&(a.prototype=this.prototype),i.prototype=new a,i}),t.Element.prototype.dispatchEvent||(t.Element.prototype.dispatchEvent=function(t){try{return this.fireEvent("on"+t.type,t)}catch(e){}})}(),e=function(a,i,o){var r=null,s=!1,l=null,c=null,u=null,f=null,h=[],d="",m=[],g=-1;if(u=o||t.document,(s=arguments[3])&&(s="boolean"==typeof s),"string"==typeof a)m=u.querySelectorAll(a);else if(a&&"object"==typeof a&&n.isElement(a,u))m=[a];else{if(!a||"object"!=typeof a||!a.length)throw new Error(e.messages.errorFactoryInvalidContainer());m=a}if(m.length<1)throw new Error(e.messages.errorFactoryContainerNotFound());for(g=0;(r=m[g])&&(!(g>0)||s);g++)r.id?d=r.id:(d="MixItUp"+n.randomHex(),r.id=d),e.instances[d]instanceof e.Mixer?(l=e.instances[d],(!i||i&&i.debug&&i.debug.showWarnings!==!1)&&console.warn(e.messages.warningFactoryPreexistingInstance())):(l=new e.Mixer,l.attach(r,u,d,i),e.instances[d]=l),c=new e.Facade(l),i&&i.debug&&i.debug.enable?h.push(l):h.push(c);return f=s?new e.Collection(h):h[0]},e.use=function(t){e.Base.prototype.callActions.call(e,"beforeUse",arguments),"function"==typeof t&&"mixitup-extension"===t.TYPE?"undefined"==typeof e.extensions[t.NAME]&&(t(e),e.extensions[t.NAME]=t):t.fn&&t.fn.jquery&&(e.libraries.$=t),e.Base.prototype.callActions.call(e,"afterUse",arguments)},e.instances={},e.extensions={},e.libraries={},n={hasClass:function(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},addClass:function(t,e){this.hasClass(t,e)||(t.className+=t.className?" "+e:e)},removeClass:function(t,e){if(this.hasClass(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ").trim()}},extend:function(t,e,n,a){var i=[],o="",r=-1;n=n||!1,a=a||!1;try{if(Array.isArray(e))for(r=0;r<e.length;r++)i.push(r);else e&&(i=Object.keys(e));for(r=0;r<i.length;r++)o=i[r],!n||"object"!=typeof e[o]||this.isElement(e[o])?t[o]=e[o]:Array.isArray(e[o])?(t[o]||(t[o]=[]),this.extend(t[o],e[o],n,a)):(t[o]||(t[o]={}),this.extend(t[o],e[o],n,a))}catch(s){if(!a)throw s;this.handleExtendError(s,t)}return t},handleExtendError:function(t,n){var a=/property "?(\w*)"?[,:] object/i,i=null,o="",r="",s="",l="",c="",u=-1,f=-1;if(t instanceof TypeError&&(i=a.exec(t.message))){o=i[1];for(c in n){for(f=0;f<o.length&&o.charAt(f)===c.charAt(f);)f++;f>u&&(u=f,l=c)}throw u>1&&(s=e.messages.errorConfigInvalidPropertySuggestion({probableMatch:l})),r=e.messages.errorConfigInvalidProperty({erroneous:o,suggestion:s}),new TypeError(r)}throw t},template:function(t){for(var e=/\${([\w]*)}/g,n={},a=null;a=e.exec(t);)n[a[1]]=new RegExp("\\${"+a[1]+"}","g");return function(e){var a="",i=t;e=e||{};for(a in n)i=i.replace(n[a],"undefined"!=typeof e[a]?e[a]:"");return i}},on:function(e,n,a,i){e&&(e.addEventListener?e.addEventListener(n,a,i):e.attachEvent&&(e["e"+n+a]=a,e[n+a]=function(){e["e"+n+a](t.event)},e.attachEvent("on"+n,e[n+a])))},off:function(t,e,n){t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+n]),t[e+n]=null))},getCustomEvent:function(e,n,a){var i=null;return a=a||t.document,"function"==typeof t.CustomEvent?i=new t.CustomEvent(e,{detail:n,bubbles:!0,cancelable:!0}):"function"==typeof a.createEvent?(i=a.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,n)):(i=a.createEventObject(),i.type=e,i.returnValue=!1,i.cancelBubble=!1,i.detail=n),i},getOriginalEvent:function(t){return t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t},index:function(t,e){for(var n=0;null!==(t=t.previousElementSibling);)e&&!t.matches(e)||++n;return n},camelCase:function(t){return t.toLowerCase().replace(/([_-][a-z])/g,function(t){return t.toUpperCase().replace(/[_-]/,"")})},pascalCase:function(t){return(t=this.camelCase(t)).charAt(0).toUpperCase()+t.slice(1)},dashCase:function(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()},isElement:function(e,n){return n=n||t.document,!!(t.HTMLElement&&e instanceof t.HTMLElement)||(!!(n.defaultView&&n.defaultView.HTMLElement&&e instanceof n.defaultView.HTMLElement)||null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)},createElement:function(e,n){var a=null,i=null;for(n=n||t.document,a=n.createDocumentFragment(),i=n.createElement("div"),i.innerHTML=e.trim();i.firstChild;)a.appendChild(i.firstChild);return a},removeWhitespace:function(t){for(var e;t&&"#text"===t.nodeName;)e=t,t=t.previousSibling,e.parentElement&&e.parentElement.removeChild(e)},isEqualArray:function(t,e){var n=t.length;if(n!==e.length)return!1;for(;n--;)if(t[n]!==e[n])return!1;return!0},deepEquals:function(t,e){var n;if("object"==typeof t&&t&&"object"==typeof e&&e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(n in t)if(!e.hasOwnProperty(n)||!this.deepEquals(t[n],e[n]))return!1}else if(t!==e)return!1;return!0},arrayShuffle:function(t){for(var e=t.slice(),n=e.length,a=n,i=-1,o=[];a--;)i=~~(Math.random()*n),o=e[a],e[a]=e[i],e[i]=o;return e},arrayFromList:function(t){var e,n;try{return Array.prototype.slice.call(t)}catch(a){for(e=[],n=0;n<t.length;n++)e.push(t[n]);return e}},debounce:function(t,e,n){var a;return function(){var i=this,o=arguments,r=n&&!a,s=null;s=function(){a=null,n||t.apply(i,o)},clearTimeout(a),a=setTimeout(s,e),r&&t.apply(i,o)}},position:function(t){for(var e=0,n=0,a=t;t;)e-=t.scrollLeft,n-=t.scrollTop,t===a&&(e+=t.offsetLeft,n+=t.offsetTop,a=t.offsetParent),t=t.parentElement;return{x:e,y:n}},getHypotenuse:function(t,e){var n=t.x-e.x,a=t.y-e.y;return n=n<0?n*-1:n,a=a<0?a*-1:a,Math.sqrt(Math.pow(n,2)+Math.pow(a,2))},getIntersectionRatio:function(t,e){var n=t.width*t.height,a=-1,i=-1,o=-1,r=-1;return a=Math.max(0,Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left)),i=Math.max(0,Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top)),o=i*a,r=o/n},closestParent:function(e,n,a,i){var o=e.parentNode;if(i=i||t.document,a&&e.matches(n))return e;for(;o&&o!=i.body;){if(o.matches&&o.matches(n))return o;if(!o.parentNode)return null;o=o.parentNode}return null},children:function(e,n,a){var i=[],o="";return a=a||t.doc,e&&(e.id||(o="Temp"+this.randomHexKey(),e.id=o),i=a.querySelectorAll("#"+e.id+" > "+n),o&&e.removeAttribute("id")),i},clean:function(t){var e=[],n=-1;for(n=0;n<t.length;n++)""!==t[n]&&e.push(t[n]);return e},defer:function(n){var a=null,i=null,o=null;return i=new this.Deferred,e.features.has.promises?i.promise=new Promise(function(t,e){i.resolve=t,i.reject=e}):(o=t.jQuery||n.$)&&"function"==typeof o.Deferred?(a=o.Deferred(),i.promise=a.promise(),i.resolve=a.resolve,i.reject=a.reject):t.console&&console.warn(e.messages.warningNoPromiseImplementation()),i},all:function(n,a){var i=null;return e.features.has.promises?Promise.all(n):(i=t.jQuery||a.$)&&"function"==typeof i.when?i.when.apply(i,n).done(function(){return arguments}):(t.console&&console.warn(e.messages.warningNoPromiseImplementation()),[])},getPrefix:function(t,e,a){var i=-1,o="";if(n.dashCase(e)in t.style)return"";for(i=0;o=a[i];i++)if(o+e in t.style)return o.toLowerCase();return"unsupported"},randomHex:function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()},getDocumentState:function(e){return e="object"==typeof e.body?e:t.document,{scrollTop:t.pageYOffset,scrollLeft:t.pageXOffset,docHeight:e.documentElement.scrollHeight,docWidth:e.documentElement.scrollWidth,viewportHeight:e.documentElement.clientHeight,viewportWidth:e.documentElement.clientWidth}},bind:function(t,e){return function(){return e.apply(t,arguments)}},isVisible:function(e){var n=null;return!!e.offsetParent||(n=t.getComputedStyle(e),"fixed"===n.position&&"hidden"!==n.visibility&&"0"!==n.opacity)},seal:function(t){"function"==typeof Object.seal&&Object.seal(t)},freeze:function(t){"function"==typeof Object.freeze&&Object.freeze(t)},compareVersions:function(t,e){var n=t.split("."),a=e.split("."),i=-1,o=-1,r=-1;for(r=0;r<n.length;r++){if(i=parseInt(n[r].replace(/[^\d.]/g,"")),o=parseInt(a[r].replace(/[^\d.]/g,"")||0),o<i)return!1;if(o>i)return!0}return!0},Deferred:function(){this.promise=null,this.resolve=null,this.reject=null,this.id=n.randomHex()},isEmptyObject:function(t){var e="";if("function"==typeof Object.keys)return 0===Object.keys(t).length;for(e in t)if(t.hasOwnProperty(e))return!1;return!0},getClassname:function(t,e,n){var a="";return a+=t.block,a.length&&(a+=t.delineatorElement),a+=t["element"+this.pascalCase(e)],n?(a.length&&(a+=t.delineatorModifier),a+=n):a},getProperty:function(t,e){var n=e.split("."),a=null,i="",o=0;if(!e)return t;for(a=function(t){return t?t[i]:null};o<n.length;)i=n[o],t=a(t),o++;return"undefined"!=typeof t?t:null}},e.h=n,e.Base=function(){},e.Base.prototype={constructor:e.Base,callActions:function(t,e){var a=this,i=a.constructor.actions[t],o="";if(i&&!n.isEmptyObject(i))for(o in i)i[o].apply(a,e)},callFilters:function(t,e,a){var i=this,o=i.constructor.filters[t],r=e,s="";if(!o||n.isEmptyObject(o))return r;a=a||[];for(s in o)a=n.arrayFromList(a),a.unshift(r),r=o[s].apply(i,a);return r}},e.BaseStatic=function(){this.actions={},this.filters={},this.extend=function(t){n.extend(this.prototype,t)},this.registerAction=function(t,e,n){(this.actions[t]=this.actions[t]||{})[e]=n},this.registerFilter=function(t,e,n){(this.filters[t]=this.filters[t]||{})[e]=n}},e.Features=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.boxSizingPrefix="",this.transformPrefix="",this.transitionPrefix="",this.boxSizingPrefix="",this.transformProp="",this.transformRule="",this.transitionProp="",this.perspectiveProp="",this.perspectiveOriginProp="",this.has=new e.Has,this.canary=null,this.BOX_SIZING_PROP="boxSizing",this.TRANSITION_PROP="transition",this.TRANSFORM_PROP="transform",this.PERSPECTIVE_PROP="perspective",this.PERSPECTIVE_ORIGIN_PROP="perspectiveOrigin",this.VENDORS=["Webkit","moz","O","ms"],this.TWEENABLE=["opacity","width","height","marginRight","marginBottom","x","y","scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],this.callActions("afterConstruct")},e.BaseStatic.call(e.Features),e.Features.prototype=Object.create(e.Base.prototype),n.extend(e.Features.prototype,{constructor:e.Features,init:function(){var t=this;t.callActions("beforeInit",arguments),t.canary=document.createElement("div"),t.setPrefixes(),t.runTests(),t.callActions("beforeInit",arguments)},runTests:function(){var e=this;e.callActions("beforeRunTests",arguments),e.has.promises="function"==typeof t.Promise,e.has.transitions="unsupported"!==e.transitionPrefix,e.callActions("afterRunTests",arguments),n.freeze(e.has)},setPrefixes:function(){var t=this;t.callActions("beforeSetPrefixes",arguments),t.transitionPrefix=n.getPrefix(t.canary,"Transition",t.VENDORS),t.transformPrefix=n.getPrefix(t.canary,"Transform",t.VENDORS),t.boxSizingPrefix=n.getPrefix(t.canary,"BoxSizing",t.VENDORS),t.boxSizingProp=t.boxSizingPrefix?t.boxSizingPrefix+n.pascalCase(t.BOX_SIZING_PROP):t.BOX_SIZING_PROP,t.transitionProp=t.transitionPrefix?t.transitionPrefix+n.pascalCase(t.TRANSITION_PROP):t.TRANSITION_PROP,t.transformProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.TRANSFORM_PROP):t.TRANSFORM_PROP,t.transformRule=t.transformPrefix?"-"+t.transformPrefix+"-"+t.TRANSFORM_PROP:t.TRANSFORM_PROP,t.perspectiveProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.PERSPECTIVE_PROP):t.PERSPECTIVE_PROP,t.perspectiveOriginProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP):t.PERSPECTIVE_ORIGIN_PROP,t.callActions("afterSetPrefixes",arguments)}}),e.Has=function(){this.transitions=!1,this.promises=!1,n.seal(this)},e.features=new e.Features,e.features.init(),e.ConfigAnimation=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!0,this.effects="fade scale",this.effectsIn="",this.effectsOut="",this.duration=600,this.easing="ease",this.applyPerspective=!0,this.perspectiveDistance="3000px",this.perspectiveOrigin="50% 50%",this.queue=!0,this.queueLimit=3,this.animateResizeContainer=!0,this.animateResizeTargets=!1,this.staggerSequence=null,this.reverseOut=!1,this.nudge=!0,this.clampHeight=!0,this.clampWidth=!0,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigAnimation),e.ConfigAnimation.prototype=Object.create(e.Base.prototype),e.ConfigAnimation.prototype.constructor=e.ConfigAnimation,e.ConfigBehavior=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.liveSort=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigBehavior),e.ConfigBehavior.prototype=Object.create(e.Base.prototype),e.ConfigBehavior.prototype.constructor=e.ConfigBehavior,e.ConfigCallbacks=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.onMixStart=null,this.onMixBusy=null,this.onMixEnd=null,this.onMixFail=null,this.onMixClick=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigCallbacks),e.ConfigCallbacks.prototype=Object.create(e.Base.prototype),e.ConfigCallbacks.prototype.constructor=e.ConfigCallbacks,e.ConfigControls=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!0,this.live=!1,this.scope="global",this.toggleLogic="or",this.toggleDefault="all",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigControls),e.ConfigControls.prototype=Object.create(e.Base.prototype),e.ConfigControls.prototype.constructor=e.ConfigControls,e.ConfigClassNames=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.block="mixitup",this.elementContainer="container",this.elementFilter="control",this.elementSort="control",this.elementMultimix="control",this.elementToggle="control",this.modifierActive="active",this.modifierDisabled="disabled",this.modifierFailed="failed",this.delineatorElement="-",this.delineatorModifier="-",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigClassNames),e.ConfigClassNames.prototype=Object.create(e.Base.prototype),e.ConfigClassNames.prototype.constructor=e.ConfigClassNames,e.ConfigData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.uidKey="",this.dirtyCheck=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigData),e.ConfigData.prototype=Object.create(e.Base.prototype),e.ConfigData.prototype.constructor=e.ConfigData,e.ConfigDebug=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!1,this.showWarnings=!0,this.fauxAsync=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigDebug),e.ConfigDebug.prototype=Object.create(e.Base.prototype),e.ConfigDebug.prototype.constructor=e.ConfigDebug,e.ConfigLayout=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.allowNestedTargets=!0,this.containerClassName="",this.siblingBefore=null,this.siblingAfter=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigLayout),e.ConfigLayout.prototype=Object.create(e.Base.prototype),e.ConfigLayout.prototype.constructor=e.ConfigLayout,e.ConfigLoad=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.filter="all",this.sort="default:asc",this.dataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigLoad),e.ConfigLoad.prototype=Object.create(e.Base.prototype),e.ConfigLoad.prototype.constructor=e.ConfigLoad,e.ConfigSelectors=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.target=".mix",this.control="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigSelectors),e.ConfigSelectors.prototype=Object.create(e.Base.prototype),e.ConfigSelectors.prototype.constructor=e.ConfigSelectors,e.ConfigRender=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.target=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigRender),e.ConfigRender.prototype=Object.create(e.Base.prototype),e.ConfigRender.prototype.constructor=e.ConfigRender,e.ConfigTemplates=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigTemplates),e.ConfigTemplates.prototype=Object.create(e.Base.prototype),e.ConfigTemplates.prototype.constructor=e.ConfigTemplates,e.Config=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.animation=new e.ConfigAnimation,this.behavior=new e.ConfigBehavior,this.callbacks=new e.ConfigCallbacks,this.controls=new e.ConfigControls,this.classNames=new e.ConfigClassNames,this.data=new e.ConfigData,this.debug=new e.ConfigDebug,this.layout=new e.ConfigLayout,this.load=new e.ConfigLoad,this.selectors=new e.ConfigSelectors,this.render=new e.ConfigRender,this.templates=new e.ConfigTemplates,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Config),e.Config.prototype=Object.create(e.Base.prototype),e.Config.prototype.constructor=e.Config,e.MixerDom=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.document=null,this.body=null,this.container=null,this.parent=null,this.targets=[],this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.MixerDom),e.MixerDom.prototype=Object.create(e.Base.prototype),e.MixerDom.prototype.constructor=e.MixerDom,e.UiClassNames=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.base="",this.active="",this.disabled="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.UiClassNames),e.UiClassNames.prototype=Object.create(e.Base.prototype),e.UiClassNames.prototype.constructor=e.UiClassNames,e.CommandDataset=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.dataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandDataset),e.CommandDataset.prototype=Object.create(e.Base.prototype),e.CommandDataset.prototype.constructor=e.CommandDataset,e.CommandMultimix=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.filter=null,this.sort=null,this.insert=null,this.remove=null,this.changeLayout=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandMultimix),e.CommandMultimix.prototype=Object.create(e.Base.prototype),e.CommandMultimix.prototype.constructor=e.CommandMultimix,e.CommandFilter=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.selector="",this.collection=null,this.action="show",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandFilter),e.CommandFilter.prototype=Object.create(e.Base.prototype),e.CommandFilter.prototype.constructor=e.CommandFilter,e.CommandSort=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.sortString="",this.attribute="",this.order="asc",this.collection=null,this.next=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandSort),e.CommandSort.prototype=Object.create(e.Base.prototype),e.CommandSort.prototype.constructor=e.CommandSort,e.CommandInsert=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.index=0,this.collection=[],this.position="before",this.sibling=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandInsert),e.CommandInsert.prototype=Object.create(e.Base.prototype),e.CommandInsert.prototype.constructor=e.CommandInsert,e.CommandRemove=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.targets=[],this.collection=[],this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandRemove),e.CommandRemove.prototype=Object.create(e.Base.prototype),e.CommandRemove.prototype.constructor=e.CommandRemove,e.CommandChangeLayout=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.containerClassName="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandChangeLayout),e.CommandChangeLayout.prototype=Object.create(e.Base.prototype),e.CommandChangeLayout.prototype.constructor=e.CommandChangeLayout,e.ControlDefinition=function(t,a,i,o){e.Base.call(this),this.callActions("beforeConstruct"),this.type=t,this.selector=a,this.live=i||!1,this.parent=o||"",this.callActions("afterConstruct"),n.freeze(this),n.seal(this)},e.BaseStatic.call(e.ControlDefinition),e.ControlDefinition.prototype=Object.create(e.Base.prototype),e.ControlDefinition.prototype.constructor=e.ControlDefinition,e.controlDefinitions=[],e.controlDefinitions.push(new e.ControlDefinition("multimix","[data-filter][data-sort]")),e.controlDefinitions.push(new e.ControlDefinition("filter","[data-filter]")),e.controlDefinitions.push(new e.ControlDefinition("sort","[data-sort]")),e.controlDefinitions.push(new e.ControlDefinition("toggle","[data-toggle]")),e.Control=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.selector="",this.bound=[],this.pending=-1,this.type="",this.status="inactive",this.filter="",this.sort="",this.canDisable=!1,this.handler=null,this.classNames=new e.UiClassNames,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Control),e.Control.prototype=Object.create(e.Base.prototype),n.extend(e.Control.prototype,{constructor:e.Control,init:function(t,n,a){var i=this;if(this.callActions("beforeInit",arguments),i.el=t,i.type=n,i.selector=a,i.selector)i.status="live";else switch(i.canDisable="boolean"==typeof i.el.disable,i.type){case"filter":i.filter=i.el.getAttribute("data-filter");break;case"toggle":i.filter=i.el.getAttribute("data-toggle");break;case"sort":i.sort=i.el.getAttribute("data-sort");break;case"multimix":i.filter=i.el.getAttribute("data-filter"),i.sort=i.el.getAttribute("data-sort")}i.bindClick(),e.controls.push(i),this.callActions("afterInit",arguments)},isBound:function(t){var e=this,n=!1;return this.callActions("beforeIsBound",arguments),n=e.bound.indexOf(t)>-1,e.callFilters("afterIsBound",n,arguments)},addBinding:function(t){var e=this;this.callActions("beforeAddBinding",arguments),e.isBound()||e.bound.push(t),this.callActions("afterAddBinding",arguments)},removeBinding:function(t){var n=this,a=-1;this.callActions("beforeRemoveBinding",arguments),(a=n.bound.indexOf(t))>-1&&n.bound.splice(a,1),n.bound.length<1&&(n.unbindClick(),a=e.controls.indexOf(n),e.controls.splice(a,1),"active"===n.status&&n.renderStatus(n.el,"inactive")),this.callActions("afterRemoveBinding",arguments)},bindClick:function(){var t=this;this.callActions("beforeBindClick",arguments),t.handler=function(e){t.handleClick(e)},n.on(t.el,"click",t.handler),this.callActions("afterBindClick",arguments)},unbindClick:function(){var t=this;this.callActions("beforeUnbindClick",arguments),n.off(t.el,"click",t.handler),t.handler=null,this.callActions("afterUnbindClick",arguments)},handleClick:function(t){var a=this,i=null,o=null,r=!1,s=void 0,l={},c=null,u=[],f=-1;if(this.callActions("beforeHandleClick",arguments),this.pending=0,o=a.bound[0],i=a.selector?n.closestParent(t.target,o.config.selectors.control+a.selector,!0,o.dom.document):a.el,!i)return void a.callActions("afterHandleClick",arguments);switch(a.type){case"filter":l.filter=a.filter||i.getAttribute("data-filter");break;case"sort":l.sort=a.sort||i.getAttribute("data-sort");break;case"multimix":l.filter=a.filter||i.getAttribute("data-filter"),l.sort=a.sort||i.getAttribute("data-sort");break;case"toggle":l.filter=a.filter||i.getAttribute("data-toggle"),r="live"===a.status?n.hasClass(i,a.classNames.active):"active"===a.status}for(f=0;f<a.bound.length;f++)c=new e.CommandMultimix,n.extend(c,l),u.push(c);for(u=a.callFilters("commandsHandleClick",u,arguments),a.pending=a.bound.length,f=0;o=a.bound[f];f++)l=u[f],l&&(o.lastClicked||(o.lastClicked=i),e.events.fire("mixClick",o.dom.container,{state:o.state,instance:o,originalEvent:t,control:o.lastClicked},o.dom.document),"function"==typeof o.config.callbacks.onMixClick&&(s=o.config.callbacks.onMixClick.call(o.lastClicked,o.state,t,o),s===!1)||("toggle"===a.type?r?o.toggleOff(l.filter):o.toggleOn(l.filter):o.multimix(l)));this.callActions("afterHandleClick",arguments)},update:function(t,n){var a=this,i=new e.CommandMultimix;a.callActions("beforeUpdate",arguments),a.pending--,a.pending=Math.max(0,a.pending),a.pending>0||("live"===a.status?a.updateLive(t,n):(i.sort=a.sort,i.filter=a.filter,a.callFilters("actionsUpdate",i,arguments),a.parseStatusChange(a.el,t,i,n)),a.callActions("afterUpdate",arguments))},updateLive:function(t,n){var a=this,i=null,o=null,r=null,s=-1;if(a.callActions("beforeUpdateLive",arguments),a.el){for(i=a.el.querySelectorAll(a.selector),s=0;r=i[s];s++){switch(o=new e.CommandMultimix,a.type){case"filter":o.filter=r.getAttribute("data-filter");break;case"sort":o.sort=r.getAttribute("data-sort");break;case"multimix":o.filter=r.getAttribute("data-filter"),o.sort=r.getAttribute("data-sort");break;case"toggle":o.filter=r.getAttribute("data-toggle")}o=a.callFilters("actionsUpdateLive",o,arguments),a.parseStatusChange(r,t,o,n)}a.callActions("afterUpdateLive",arguments)}},parseStatusChange:function(t,e,n,a){var i=this,o="",r="",s=-1;switch(i.callActions("beforeParseStatusChange",arguments),i.type){case"filter":e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"multimix":e.sort===n.sort&&e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"sort":e.sort.match(/:asc/g)&&(o=e.sort.replace(/:asc/g,"")),e.sort===n.sort||o===n.sort?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"toggle":for(a.length<1&&i.renderStatus(t,"inactive"),e.filter===n.filter&&i.renderStatus(t,"active"),s=0;s<a.length;s++){if(r=a[s],r===n.filter){i.renderStatus(t,"active");break}i.renderStatus(t,"inactive")}}i.callActions("afterParseStatusChange",arguments)},renderStatus:function(t,e){var a=this;switch(a.callActions("beforeRenderStatus",arguments),e){case"active":n.addClass(t,a.classNames.active),n.removeClass(t,a.classNames.disabled),a.canDisable&&(a.el.disabled=!1);break;case"inactive":n.removeClass(t,a.classNames.active),n.removeClass(t,a.classNames.disabled),a.canDisable&&(a.el.disabled=!1);break;case"disabled":a.canDisable&&(a.el.disabled=!0),n.addClass(t,a.classNames.disabled),n.removeClass(t,a.classNames.active)}"live"!==a.status&&(a.status=e),a.callActions("afterRenderStatus",arguments)}}),e.controls=[],e.StyleData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.x=0,this.y=0,this.top=0,this.right=0,this.bottom=0,this.left=0,this.width=0,this.height=0,this.marginRight=0,this.marginBottom=0,this.opacity=0,this.scale=new e.TransformData,this.translateX=new e.TransformData,this.translateY=new e.TransformData,this.translateZ=new e.TransformData,this.rotateX=new e.TransformData,this.rotateY=new e.TransformData,this.rotateZ=new e.TransformData,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.StyleData),e.StyleData.prototype=Object.create(e.Base.prototype),e.StyleData.prototype.constructor=e.StyleData,e.TransformData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.value=0,this.unit="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TransformData),e.TransformData.prototype=Object.create(e.Base.prototype),e.TransformData.prototype.constructor=e.TransformData,e.TransformDefaults=function(){e.StyleData.apply(this),this.callActions("beforeConstruct"),this.scale.value=.01,this.scale.unit="",this.translateX.value=20,this.translateX.unit="px",this.translateY.value=20,this.translateY.unit="px",this.translateZ.value=20,this.translateZ.unit="px",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateY.value=90,this.rotateY.unit="deg",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateZ.value=180,this.rotateZ.unit="deg",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TransformDefaults),e.TransformDefaults.prototype=Object.create(e.StyleData.prototype),e.TransformDefaults.prototype.constructor=e.TransformDefaults,e.transformDefaults=new e.TransformDefaults,e.EventDetail=function(){this.state=null,this.futureState=null,this.instance=null,this.originalEvent=null},e.Events=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.mixStart=null,this.mixBusy=null,this.mixEnd=null,this.mixFail=null,this.mixClick=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Events),e.Events.prototype=Object.create(e.Base.prototype),e.Events.prototype.constructor=e.Events,e.Events.prototype.fire=function(t,a,i,o){var r=this,s=null,l=new e.EventDetail;if(r.callActions("beforeFire",arguments),"undefined"==typeof r[t])throw new Error('Event type "'+t+'" not found.');l.state=new e.State,n.extend(l.state,i.state),i.futureState&&(l.futureState=new e.State,n.extend(l.futureState,i.futureState)),l.instance=i.instance,i.originalEvent&&(l.originalEvent=i.originalEvent),s=n.getCustomEvent(t,l,o),r.callFilters("eventFire",s,arguments),a.dispatchEvent(s)},e.events=new e.Events,e.QueueItem=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.args=[],this.instruction=null,this.triggerElement=null,this.deferred=null,this.isToggling=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.QueueItem),e.QueueItem.prototype=Object.create(e.Base.prototype),e.QueueItem.prototype.constructor=e.QueueItem,e.Mixer=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.config=new e.Config,this.id="",this.isBusy=!1,this.isToggling=!1,this.incPadding=!0,this.controls=[],this.targets=[],this.origOrder=[],this.cache={},this.toggleArray=[],this.targetsMoved=0,this.targetsImmovable=0,this.targetsBound=0,this.targetsDone=0,this.staggerDuration=0,this.effectsIn=null,this.effectsOut=null,this.transformIn=[],this.transformOut=[],this.queue=[],this.state=null,this.lastOperation=null,
this.lastClicked=null,this.userCallback=null,this.userDeferred=null,this.dom=new e.MixerDom,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Mixer),e.Mixer.prototype=Object.create(e.Base.prototype),n.extend(e.Mixer.prototype,{constructor:e.Mixer,attach:function(a,i,o,r){var s=this,l=null,c=-1;for(s.callActions("beforeAttach",arguments),s.id=o,r&&n.extend(s.config,r,!0,!0),s.sanitizeConfig(),s.cacheDom(a,i),s.config.layout.containerClassName&&n.addClass(s.dom.container,s.config.layout.containerClassName),e.features.has.transitions||(s.config.animation.enable=!1),"undefined"==typeof t.console&&(s.config.debug.showWarnings=!1),s.config.data.uidKey&&(s.config.controls.enable=!1),s.indexTargets(),s.state=s.getInitialState(),c=0;l=s.lastOperation.toHide[c];c++)l.hide();s.config.controls.enable&&(s.initControls(),s.buildToggleArray(null,s.state),s.updateControls({filter:s.state.activeFilter,sort:s.state.activeSort})),s.parseEffects(),s.callActions("afterAttach",arguments)},sanitizeConfig:function(){var t=this;t.callActions("beforeSanitizeConfig",arguments),t.config.controls.scope=t.config.controls.scope.toLowerCase().trim(),t.config.controls.toggleLogic=t.config.controls.toggleLogic.toLowerCase().trim(),t.config.controls.toggleDefault=t.config.controls.toggleDefault.toLowerCase().trim(),t.config.animation.effects=t.config.animation.effects.trim(),t.callActions("afterSanitizeConfig",arguments)},getInitialState:function(){var t=this,n=new e.State,a=new e.Operation;if(t.callActions("beforeGetInitialState",arguments),n.activeContainerClassName=t.config.layout.containerClassName,t.config.load.dataset){if(!t.config.data.uidKey||"string"!=typeof t.config.data.uidKey)throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());a.startDataset=a.newDataset=n.activeDataset=t.config.load.dataset.slice(),a.startContainerClassName=a.newContainerClassName=n.activeContainerClassName,a.show=t.targets.slice(),n=t.callFilters("stateGetInitialState",n,arguments)}else n.activeFilter=t.parseFilterArgs([t.config.load.filter]).command,n.activeSort=t.parseSortArgs([t.config.load.sort]).command,n.totalTargets=t.targets.length,n=t.callFilters("stateGetInitialState",n,arguments),n.activeSort.collection||n.activeSort.attribute||"random"===n.activeSort.order||"desc"===n.activeSort.order?(a.newSort=n.activeSort,t.sortOperation(a),t.printSort(!1,a),t.targets=a.newOrder):a.startOrder=a.newOrder=t.targets,a.startFilter=a.newFilter=n.activeFilter,a.startSort=a.newSort=n.activeSort,a.startContainerClassName=a.newContainerClassName=n.activeContainerClassName,"all"===a.newFilter.selector?a.newFilter.selector=t.config.selectors.target:"none"===a.newFilter.selector&&(a.newFilter.selector="");return a=t.callFilters("operationGetInitialState",a,[n]),t.lastOperation=a,a.newFilter&&t.filterOperation(a),n=t.buildState(a)},cacheDom:function(t,e){var n=this;n.callActions("beforeCacheDom",arguments),n.dom.document=e,n.dom.body=n.dom.document.querySelector("body"),n.dom.container=t,n.dom.parent=t,n.callActions("afterCacheDom",arguments)},indexTargets:function(){var t=this,a=null,i=null,o=null,r=-1;if(t.callActions("beforeIndexTargets",arguments),t.dom.targets=t.config.layout.allowNestedTargets?t.dom.container.querySelectorAll(t.config.selectors.target):n.children(t.dom.container,t.config.selectors.target,t.dom.document),t.dom.targets=n.arrayFromList(t.dom.targets),t.targets=[],(o=t.config.load.dataset)&&o.length!==t.dom.targets.length)throw new Error(e.messages.errorDatasetPrerenderedMismatch());if(t.dom.targets.length){for(r=0;i=t.dom.targets[r];r++)a=new e.Target,a.init(i,t,o?o[r]:void 0),a.isInDom=!0,t.targets.push(a);t.dom.parent=t.dom.targets[0].parentElement===t.dom.container?t.dom.container:t.dom.targets[0].parentElement}t.origOrder=t.targets,t.callActions("afterIndexTargets",arguments)},initControls:function(){var t=this,n="",a=null,i=null,o=null,r=null,s=null,l=-1,c=-1;switch(t.callActions("beforeInitControls",arguments),t.config.controls.scope){case"local":o=t.dom.container;break;case"global":o=t.dom.document;break;default:throw new Error(e.messages.errorConfigInvalidControlsScope())}for(l=0;n=e.controlDefinitions[l];l++)if(t.config.controls.live||n.live){if(n.parent){if(r=t.dom[n.parent],!r||r.length<0)continue;"number"!=typeof r.length&&(r=[r])}else r=[o];for(c=0;i=r[c];c++)s=t.getControl(i,n.type,n.selector),t.controls.push(s)}else for(a=o.querySelectorAll(t.config.selectors.control+n.selector),c=0;i=a[c];c++)s=t.getControl(i,n.type,""),s&&t.controls.push(s);t.callActions("afterInitControls",arguments)},getControl:function(t,a,i){var o=this,r=null,s=-1;if(o.callActions("beforeGetControl",arguments),!i)for(s=0;r=e.controls[s];s++){if(r.el===t&&r.isBound(o))return o.callFilters("controlGetControl",null,arguments);if(r.el===t&&r.type===a&&r.selector===i)return r.addBinding(o),o.callFilters("controlGetControl",r,arguments)}return r=new e.Control,r.init(t,a,i),r.classNames.base=n.getClassname(o.config.classNames,a),r.classNames.active=n.getClassname(o.config.classNames,a,o.config.classNames.modifierActive),r.classNames.disabled=n.getClassname(o.config.classNames,a,o.config.classNames.modifierDisabled),r.addBinding(o),o.callFilters("controlGetControl",r,arguments)},getToggleSelector:function(){var t=this,e="or"===t.config.controls.toggleLogic?", ":"",a="";return t.callActions("beforeGetToggleSelector",arguments),t.toggleArray=n.clean(t.toggleArray),a=t.toggleArray.join(e),""===a&&(a=t.config.controls.toggleDefault),t.callFilters("selectorGetToggleSelector",a,arguments)},buildToggleArray:function(t,e){var a=this,i="";if(a.callActions("beforeBuildToggleArray",arguments),t&&t.filter)i=t.filter.selector.replace(/\s/g,"");else{if(!e)return;i=e.activeFilter.selector.replace(/\s/g,"")}i!==a.config.selectors.target&&"all"!==i||(i=""),"or"===a.config.controls.toggleLogic?a.toggleArray=i.split(","):a.toggleArray=a.splitCompoundSelector(i),a.toggleArray=n.clean(a.toggleArray),a.callActions("afterBuildToggleArray",arguments)},splitCompoundSelector:function(t){var e=t.split(/([\.\[])/g),n=[],a="",i=-1;for(""===e[0]&&e.shift(),i=0;i<e.length;i++)i%2===0&&(a=""),a+=e[i],i%2!==0&&n.push(a);return n},updateControls:function(t){var a=this,i=null,o=new e.CommandMultimix,r=-1;for(a.callActions("beforeUpdateControls",arguments),t.filter?o.filter=t.filter.selector:o.filter=a.state.activeFilter.selector,t.sort?o.sort=a.buildSortString(t.sort):o.sort=a.buildSortString(a.state.activeSort),o.filter===a.config.selectors.target&&(o.filter="all"),""===o.filter&&(o.filter="none"),n.freeze(o),r=0;i=a.controls[r];r++)i.update(o,a.toggleArray);a.callActions("afterUpdateControls",arguments)},buildSortString:function(t){var e=this,n="";return n+=t.sortString,t.next&&(n+=" "+e.buildSortString(t.next)),n},insertTargets:function(t,a){var i=this,o=null,r=-1,s=null,l=null,c=null,u=-1;if(i.callActions("beforeInsertTargets",arguments),"undefined"==typeof t.index&&(t.index=0),o=i.getNextSibling(t.index,t.sibling,t.position),s=i.dom.document.createDocumentFragment(),r=o?n.index(o,i.config.selectors.target):i.targets.length,t.collection){for(u=0;c=t.collection[u];u++){if(i.dom.targets.indexOf(c)>-1)throw new Error(e.messages.errorInsertPreexistingElement());c.style.display="none",s.appendChild(c),s.appendChild(i.dom.document.createTextNode(" ")),n.isElement(c,i.dom.document)&&c.matches(i.config.selectors.target)&&(l=new e.Target,l.init(c,i),l.isInDom=!0,i.targets.splice(r,0,l),r++)}i.dom.parent.insertBefore(s,o)}a.startOrder=i.origOrder=i.targets,i.callActions("afterInsertTargets",arguments)},getNextSibling:function(t,e,n){var a=this,i=null;return t=Math.max(t,0),e&&"before"===n?i=e:e&&"after"===n?i=e.nextElementSibling||null:a.targets.length>0&&"undefined"!=typeof t?i=t<a.targets.length||!a.targets.length?a.targets[t].dom.el:a.targets[a.targets.length-1].dom.el.nextElementSibling:0===a.targets.length&&a.dom.parent.children.length>0&&(a.config.layout.siblingAfter?i=a.config.layout.siblingAfter:a.config.layout.siblingBefore?i=a.config.layout.siblingBefore.nextElementSibling:a.dom.parent.children[0]),a.callFilters("elementGetNextSibling",i,arguments)},filterOperation:function(t){var e=this,n=!1,a=-1,i="",o=null,r=-1;for(e.callActions("beforeFilterOperation",arguments),i=t.newFilter.action,r=0;o=t.newOrder[r];r++)n=t.newFilter.collection?t.newFilter.collection.indexOf(o.dom.el)>-1:""!==t.newFilter.selector&&o.dom.el.matches(t.newFilter.selector),e.evaluateHideShow(n,o,i,t);if(t.toRemove.length)for(r=0;o=t.show[r];r++)t.toRemove.indexOf(o)>-1&&(t.show.splice(r,1),(a=t.toShow.indexOf(o))>-1&&t.toShow.splice(a,1),t.toHide.push(o),t.hide.push(o),r--);t.matching=t.show.slice(),0===t.show.length&&""!==t.newFilter.selector&&0!==e.targets.length&&(t.hasFailed=!0),e.callActions("afterFilterOperation",arguments)},evaluateHideShow:function(t,e,n,a){var i=this,o=!1,r=Array.prototype.slice.call(arguments,1);o=i.callFilters("testResultEvaluateHideShow",t,r),i.callActions("beforeEvaluateHideShow",arguments),o===!0&&"show"===n||o===!1&&"hide"===n?(a.show.push(e),!e.isShown&&a.toShow.push(e)):(a.hide.push(e),e.isShown&&a.toHide.push(e)),i.callActions("afterEvaluateHideShow",arguments)},sortOperation:function(t){var a=this,i=[],o=null,r=null,s=-1;if(a.callActions("beforeSortOperation",arguments),t.startOrder=a.targets,t.newSort.collection){for(i=[],s=0;r=t.newSort.collection[s];s++){if(a.dom.targets.indexOf(r)<0)throw new Error(e.messages.errorSortNonExistentElement());o=new e.Target,o.init(r,a),o.isInDom=!0,i.push(o)}t.newOrder=i}else"random"===t.newSort.order?t.newOrder=n.arrayShuffle(t.startOrder):""===t.newSort.attribute?(t.newOrder=a.origOrder.slice(),"desc"===t.newSort.order&&t.newOrder.reverse()):(t.newOrder=t.startOrder.slice(),t.newOrder.sort(function(e,n){return a.compare(e,n,t.newSort)}));n.isEqualArray(t.newOrder,t.startOrder)&&(t.willSort=!1),a.callActions("afterSortOperation",arguments)},compare:function(t,e,n){var a=this,i=n.order,o=a.getAttributeValue(t,n.attribute),r=a.getAttributeValue(e,n.attribute);return isNaN(1*o)||isNaN(1*r)?(o=o.toLowerCase(),r=r.toLowerCase()):(o=1*o,r=1*r),o<r?"asc"===i?-1:1:o>r?"asc"===i?1:-1:o===r&&n.next?a.compare(t,e,n.next):0},getAttributeValue:function(t,n){var a=this,i="";return i=t.dom.el.getAttribute("data-"+n),null===i&&a.config.debug.showWarnings&&console.warn(e.messages.warningInconsistentSortingAttributes({attribute:"data-"+n})),a.callFilters("valueGetAttributeValue",i||0,arguments)},printSort:function(e,a){var i=this,o=e?a.newOrder:a.startOrder,r=e?a.startOrder:a.newOrder,s=o.length?o[o.length-1].dom.el.nextElementSibling:null,l=t.document.createDocumentFragment(),c=null,u=null,f=null,h=-1;for(i.callActions("beforePrintSort",arguments),h=0;u=o[h];h++)f=u.dom.el,"absolute"!==f.style.position&&(n.removeWhitespace(f.previousSibling),f.parentElement.removeChild(f));for(c=s?s.previousSibling:i.dom.parent.lastChild,c&&"#text"===c.nodeName&&n.removeWhitespace(c),h=0;u=r[h];h++)f=u.dom.el,n.isElement(l.lastChild)&&l.appendChild(t.document.createTextNode(" ")),l.appendChild(f);i.dom.parent.firstChild&&i.dom.parent.firstChild!==s&&l.insertBefore(t.document.createTextNode(" "),l.childNodes[0]),s?(l.appendChild(t.document.createTextNode(" ")),i.dom.parent.insertBefore(l,s)):i.dom.parent.appendChild(l),i.callActions("afterPrintSort",arguments)},parseSortString:function(t,a){var i=this,o=t.split(" "),r=a,s=[],l=-1;for(l=0;l<o.length;l++){switch(s=o[l].split(":"),r.sortString=o[l],r.attribute=n.dashCase(s[0]),r.order=s[1]||"asc",r.attribute){case"default":r.attribute="";break;case"random":r.attribute="",r.order="random"}if(!r.attribute||"random"===r.order)break;l<o.length-1&&(r.next=new e.CommandSort,n.freeze(r),r=r.next)}return i.callFilters("commandsParseSort",a,arguments)},parseEffects:function(){var t=this,n="",a=t.config.animation.effectsIn||t.config.animation.effects,i=t.config.animation.effectsOut||t.config.animation.effects;t.callActions("beforeParseEffects",arguments),t.effectsIn=new e.StyleData,t.effectsOut=new e.StyleData,t.transformIn=[],t.transformOut=[],t.effectsIn.opacity=t.effectsOut.opacity=1,t.parseEffect("fade",a,t.effectsIn,t.transformIn),t.parseEffect("fade",i,t.effectsOut,t.transformOut,!0);for(n in e.transformDefaults)e.transformDefaults[n]instanceof e.TransformData&&(t.parseEffect(n,a,t.effectsIn,t.transformIn),t.parseEffect(n,i,t.effectsOut,t.transformOut,!0));t.parseEffect("stagger",a,t.effectsIn,t.transformIn),t.parseEffect("stagger",i,t.effectsOut,t.transformOut,!0),t.callActions("afterParseEffects",arguments)},parseEffect:function(t,n,a,i,o){var r=this,s=/\(([^)]+)\)/,l=-1,c="",u=[],f="",h=["%","px","em","rem","vh","vw","deg"],d="",m=-1;if(r.callActions("beforeParseEffect",arguments),"string"!=typeof n)throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());if(n.indexOf(t)<0)return void("stagger"===t&&(r.staggerDuration=0));switch(l=n.indexOf(t+"("),l>-1&&(c=n.substring(l),u=s.exec(c),f=u[1]),t){case"fade":a.opacity=f?parseFloat(f):0;break;case"stagger":r.staggerDuration=f?parseFloat(f):100;break;default:if(o&&r.config.animation.reverseOut&&"scale"!==t?a[t].value=(f?parseFloat(f):e.transformDefaults[t].value)*-1:a[t].value=f?parseFloat(f):e.transformDefaults[t].value,f){for(m=0;d=h[m];m++)if(f.indexOf(d)>-1){a[t].unit=d;break}}else a[t].unit=e.transformDefaults[t].unit;i.push(t+"("+a[t].value+a[t].unit+")")}r.callActions("afterParseEffect",arguments)},buildState:function(t){var n=this,a=new e.State,i=null,o=-1;for(n.callActions("beforeBuildState",arguments),o=0;i=n.targets[o];o++)(!t.toRemove.length||t.toRemove.indexOf(i)<0)&&a.targets.push(i.dom.el);for(o=0;i=t.matching[o];o++)a.matching.push(i.dom.el);for(o=0;i=t.show[o];o++)a.show.push(i.dom.el);for(o=0;i=t.hide[o];o++)(!t.toRemove.length||t.toRemove.indexOf(i)<0)&&a.hide.push(i.dom.el);return a.id=n.id,a.container=n.dom.container,a.activeFilter=t.newFilter,a.activeSort=t.newSort,a.activeDataset=t.newDataset,a.activeContainerClassName=t.newContainerClassName,a.hasFailed=t.hasFailed,a.totalTargets=n.targets.length,a.totalShow=t.show.length,a.totalHide=t.hide.length,a.totalMatching=t.matching.length,a.triggerElement=t.triggerElement,n.callFilters("stateBuildState",a,arguments)},goMix:function(a,i){var o=this,r=null;return o.callActions("beforeGoMix",arguments),o.config.animation.duration&&o.config.animation.effects&&n.isVisible(o.dom.container)||(a=!1),i.toShow.length||i.toHide.length||i.willSort||i.willChangeLayout||(a=!1),i.startState.show.length||i.show.length||(a=!1),e.events.fire("mixStart",o.dom.container,{state:i.startState,futureState:i.newState,instance:o},o.dom.document),"function"==typeof o.config.callbacks.onMixStart&&o.config.callbacks.onMixStart.call(o.dom.container,i.startState,i.newState,o),n.removeClass(o.dom.container,n.getClassname(o.config.classNames,"container",o.config.classNames.modifierFailed)),r=o.userDeferred?o.userDeferred:o.userDeferred=n.defer(e.libraries),o.isBusy=!0,a&&e.features.has.transitions?(t.pageYOffset!==i.docState.scrollTop&&t.scrollTo(i.docState.scrollLeft,i.docState.scrollTop),o.config.animation.applyPerspective&&(o.dom.parent.style[e.features.perspectiveProp]=o.config.animation.perspectiveDistance,o.dom.parent.style[e.features.perspectiveOriginProp]=o.config.animation.perspectiveOrigin),o.config.animation.animateResizeContainer&&i.startHeight!==i.newHeight&&i.viewportDeltaY!==i.startHeight-i.newHeight&&(o.dom.parent.style.height=i.startHeight+"px"),o.config.animation.animateResizeContainer&&i.startWidth!==i.newWidth&&i.viewportDeltaX!==i.startWidth-i.newWidth&&(o.dom.parent.style.width=i.startWidth+"px"),i.startHeight===i.newHeight&&(o.dom.parent.style.height=i.startHeight+"px"),i.startWidth===i.newWidth&&(o.dom.parent.style.width=i.startWidth+"px"),i.startHeight===i.newHeight&&i.startWidth===i.newWidth&&(o.dom.parent.style.overflow="hidden"),requestAnimationFrame(function(){o.moveTargets(i)}),o.callFilters("promiseGoMix",r.promise,arguments)):(o.config.debug.fauxAsync?setTimeout(function(){o.cleanUp(i)},o.config.animation.duration):o.cleanUp(i),o.callFilters("promiseGoMix",r.promise,arguments))},getStartMixData:function(n){var a=this,i=t.getComputedStyle(a.dom.parent),o=a.dom.parent.getBoundingClientRect(),r=null,s={},l=-1,c=i[e.features.boxSizingProp];for(a.incPadding="border-box"===c,a.callActions("beforeGetStartMixData",arguments),l=0;r=n.show[l];l++)s=r.getPosData(),n.showPosData[l]={startPosData:s};for(l=0;r=n.toHide[l];l++)s=r.getPosData(),n.toHidePosData[l]={startPosData:s};n.startX=o.left,n.startY=o.top,n.startHeight=a.incPadding?o.height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTop)-parseFloat(i.borderBottom),n.startWidth=a.incPadding?o.width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeft)-parseFloat(i.borderRight),a.callActions("afterGetStartMixData",arguments)},setInter:function(t){var e=this,a=null,i=-1;for(e.callActions("beforeSetInter",arguments),e.config.animation.clampHeight&&(e.dom.parent.style.height=t.startHeight+"px",e.dom.parent.style.overflow="hidden"),e.config.animation.clampWidth&&(e.dom.parent.style.width=t.startWidth+"px",e.dom.parent.style.overflow="hidden"),i=0;a=t.toShow[i];i++)a.show();t.willChangeLayout&&(n.removeClass(e.dom.container,t.startContainerClassName),n.addClass(e.dom.container,t.newContainerClassName)),e.callActions("afterSetInter",arguments)},getInterMixData:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeGetInterMixData",arguments),a=0;n=t.show[a];a++)t.showPosData[a].interPosData=n.getPosData();for(a=0;n=t.toHide[a];a++)t.toHidePosData[a].interPosData=n.getPosData();e.callActions("afterGetInterMixData",arguments)},setFinal:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeSetFinal",arguments),t.willSort&&e.printSort(!1,t),a=0;n=t.toHide[a];a++)n.hide();e.callActions("afterSetFinal",arguments)},getFinalMixData:function(e){var a=this,i=null,o=null,r=null,s=-1;for(a.callActions("beforeGetFinalMixData",arguments),s=0;r=e.show[s];s++)e.showPosData[s].finalPosData=r.getPosData();for(s=0;r=e.toHide[s];s++)e.toHidePosData[s].finalPosData=r.getPosData();for((a.config.animation.clampHeight||a.config.animation.clampWidth)&&(a.dom.parent.style.height=a.dom.parent.style.width=a.dom.parent.style.overflow=""),a.incPadding||(i=t.getComputedStyle(a.dom.parent)),o=a.dom.parent.getBoundingClientRect(),e.newX=o.left,e.newY=o.top,e.newHeight=a.incPadding?o.height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTop)-parseFloat(i.borderBottom),e.newWidth=a.incPadding?o.width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeft)-parseFloat(i.borderRight),e.viewportDeltaX=e.docState.viewportWidth-this.dom.document.documentElement.clientWidth,e.viewportDeltaY=e.docState.viewportHeight-this.dom.document.documentElement.clientHeight,e.willSort&&a.printSort(!0,e),s=0;r=e.toShow[s];s++)r.hide();for(s=0;r=e.toHide[s];s++)r.show();e.willChangeLayout&&(n.removeClass(a.dom.container,e.newContainerClassName),n.addClass(a.dom.container,a.config.layout.containerClassName)),a.callActions("afterGetFinalMixData",arguments)},getTweenData:function(t){var n=this,a=null,i=null,o=Object.getOwnPropertyNames(n.effectsIn),r="",s=null,l=-1,c=-1,u=-1,f=-1;for(n.callActions("beforeGetTweenData",arguments),u=0;a=t.show[u];u++)for(i=t.showPosData[u],i.posIn=new e.StyleData,i.posOut=new e.StyleData,i.tweenData=new e.StyleData,a.isShown?(i.posIn.x=i.startPosData.x-i.interPosData.x,i.posIn.y=i.startPosData.y-i.interPosData.y):i.posIn.x=i.posIn.y=0,i.posOut.x=i.finalPosData.x-i.interPosData.x,i.posOut.y=i.finalPosData.y-i.interPosData.y,i.posIn.opacity=a.isShown?1:n.effectsIn.opacity,i.posOut.opacity=1,i.tweenData.opacity=i.posOut.opacity-i.posIn.opacity,a.isShown||n.config.animation.nudge||(i.posIn.x=i.posOut.x,i.posIn.y=i.posOut.y),i.tweenData.x=i.posOut.x-i.posIn.x,i.tweenData.y=i.posOut.y-i.posIn.y,n.config.animation.animateResizeTargets&&(i.posIn.width=i.startPosData.width,i.posIn.height=i.startPosData.height,l=(i.startPosData.width||i.finalPosData.width)-i.interPosData.width,i.posIn.marginRight=i.startPosData.marginRight-l,c=(i.startPosData.height||i.finalPosData.height)-i.interPosData.height,i.posIn.marginBottom=i.startPosData.marginBottom-c,i.posOut.width=i.finalPosData.width,i.posOut.height=i.finalPosData.height,l=(i.finalPosData.width||i.startPosData.width)-i.interPosData.width,i.posOut.marginRight=i.finalPosData.marginRight-l,c=(i.finalPosData.height||i.startPosData.height)-i.interPosData.height,i.posOut.marginBottom=i.finalPosData.marginBottom-c,i.tweenData.width=i.posOut.width-i.posIn.width,i.tweenData.height=i.posOut.height-i.posIn.height,i.tweenData.marginRight=i.posOut.marginRight-i.posIn.marginRight,i.tweenData.marginBottom=i.posOut.marginBottom-i.posIn.marginBottom),f=0;r=o[f];f++)s=n.effectsIn[r],s instanceof e.TransformData&&s.value&&(i.posIn[r].value=s.value,i.posOut[r].value=0,i.tweenData[r].value=i.posOut[r].value-i.posIn[r].value,i.posIn[r].unit=i.posOut[r].unit=i.tweenData[r].unit=s.unit);for(u=0;a=t.toHide[u];u++)for(i=t.toHidePosData[u],i.posIn=new e.StyleData,i.posOut=new e.StyleData,i.tweenData=new e.StyleData,i.posIn.x=a.isShown?i.startPosData.x-i.interPosData.x:0,i.posIn.y=a.isShown?i.startPosData.y-i.interPosData.y:0,i.posOut.x=n.config.animation.nudge?0:i.posIn.x,i.posOut.y=n.config.animation.nudge?0:i.posIn.y,i.tweenData.x=i.posOut.x-i.posIn.x,i.tweenData.y=i.posOut.y-i.posIn.y,n.config.animation.animateResizeTargets&&(i.posIn.width=i.startPosData.width,i.posIn.height=i.startPosData.height,l=i.startPosData.width-i.interPosData.width,i.posIn.marginRight=i.startPosData.marginRight-l,c=i.startPosData.height-i.interPosData.height,i.posIn.marginBottom=i.startPosData.marginBottom-c),i.posIn.opacity=1,i.posOut.opacity=n.effectsOut.opacity,i.tweenData.opacity=i.posOut.opacity-i.posIn.opacity,f=0;r=o[f];f++)s=n.effectsOut[r],s instanceof e.TransformData&&s.value&&(i.posIn[r].value=0,i.posOut[r].value=s.value,i.tweenData[r].value=i.posOut[r].value-i.posIn[r].value,i.posIn[r].unit=i.posOut[r].unit=i.tweenData[r].unit=s.unit);n.callActions("afterGetTweenData",arguments)},moveTargets:function(t){var a=this,i=null,o=null,r=null,s="",l=!1,c=-1,u=-1,f=a.checkProgress.bind(a);for(a.callActions("beforeMoveTargets",arguments),u=0;i=t.show[u];u++)o=new e.IMoveData,r=t.showPosData[u],s=i.isShown?"none":"show",l=a.willTransition(s,t.hasEffect,r.posIn,r.posOut),l&&c++,i.show(),o.posIn=r.posIn,o.posOut=r.posOut,o.statusChange=s,o.staggerIndex=c,o.operation=t,o.callback=l?f:null,i.move(o);for(u=0;i=t.toHide[u];u++)r=t.toHidePosData[u],o=new e.IMoveData,s="hide",l=a.willTransition(s,r.posIn,r.posOut),o.posIn=r.posIn,o.posOut=r.posOut,o.statusChange=s,o.staggerIndex=u,o.operation=t,o.callback=l?f:null,i.move(o);a.config.animation.animateResizeContainer&&(a.dom.parent.style[e.features.transitionProp]="height "+a.config.animation.duration+"ms ease, width "+a.config.animation.duration+"ms ease ",requestAnimationFrame(function(){t.startHeight!==t.newHeight&&t.viewportDeltaY!==t.startHeight-t.newHeight&&(a.dom.parent.style.height=t.newHeight+"px"),t.startWidth!==t.newWidth&&t.viewportDeltaX!==t.startWidth-t.newWidth&&(a.dom.parent.style.width=t.newWidth+"px")})),t.willChangeLayout&&(n.removeClass(a.dom.container,a.config.layout.ContainerClassName),n.addClass(a.dom.container,t.newContainerClassName)),a.callActions("afterMoveTargets",arguments)},hasEffect:function(){var t=this,e=["scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],n="",a=null,i=!1,o=-1,r=-1;if(1!==t.effectsIn.opacity)return t.callFilters("resultHasEffect",!0,arguments);for(r=0;n=e[r];r++)if(a=t.effectsIn[n],o="undefined"!==a.value?a.value:a,0!==o){i=!0;break}return t.callFilters("resultHasEffect",i,arguments)},willTransition:function(t,e,a,i){var o=this,r=!1;return r=!!n.isVisible(o.dom.container)&&(!!("none"!==t&&e||a.x!==i.x||a.y!==i.y)||!!o.config.animation.animateResizeTargets&&(a.width!==i.width||a.height!==i.height||a.marginRight!==i.marginRight||a.marginTop!==i.marginTop)),o.callFilters("resultWillTransition",r,arguments)},checkProgress:function(t){var e=this;e.targetsDone++,e.targetsBound===e.targetsDone&&e.cleanUp(t)},cleanUp:function(t){var a=this,i=null,o=null,r=null,s=null,l=-1;for(a.callActions("beforeCleanUp",arguments),a.targetsMoved=a.targetsImmovable=a.targetsBound=a.targetsDone=0,l=0;i=t.show[l];l++)i.cleanUp(),i.show();for(l=0;i=t.toHide[l];l++)i.cleanUp(),i.hide();if(t.willSort&&a.printSort(!1,t),a.dom.parent.style[e.features.transitionProp]=a.dom.parent.style.height=a.dom.parent.style.width=a.dom.parent.style.overflow=a.dom.parent.style[e.features.perspectiveProp]=a.dom.parent.style[e.features.perspectiveOriginProp]="",t.willChangeLayout&&(n.removeClass(a.dom.container,t.startContainerClassName),n.addClass(a.dom.container,t.newContainerClassName)),t.toRemove.length){for(l=0;i=a.targets[l];l++)t.toRemove.indexOf(i)>-1&&((o=i.dom.el.previousSibling)&&"#text"===o.nodeName&&(r=i.dom.el.nextSibling)&&"#text"===r.nodeName&&n.removeWhitespace(o),t.willSort||a.dom.parent.removeChild(i.dom.el),a.targets.splice(l,1),i.isInDom=!1,l--);a.origOrder=a.targets}t.willSort&&(a.targets=t.newOrder),a.state=t.newState,a.lastOperation=t,a.dom.targets=a.state.targets,e.events.fire("mixEnd",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixEnd&&a.config.callbacks.onMixEnd.call(a.dom.container,a.state,a),t.hasFailed&&(e.events.fire("mixFail",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixFail&&a.config.callbacks.onMixFail.call(a.dom.container,a.state,a),n.addClass(a.dom.container,n.getClassname(a.config.classNames,"container",a.config.classNames.modifierFailed))),"function"==typeof a.userCallback&&a.userCallback.call(a.dom.container,a.state,a),"function"==typeof a.userDeferred.resolve&&a.userDeferred.resolve(a.state),a.userCallback=null,a.userDeferred=null,a.lastClicked=null,a.isToggling=!1,a.isBusy=!1,a.queue.length&&(a.callActions("beforeReadQueueCleanUp",arguments),s=a.queue.shift(),a.userDeferred=s.deferred,a.isToggling=s.isToggling,a.lastClicked=s.triggerElement,s.instruction.command instanceof e.CommandMultimix?a.multimix.apply(a,s.args):a.dataset.apply(a,s.args)),a.callActions("afterCleanUp",arguments)},parseMultimixArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandMultimix,r=0;r<t.length;r++)o=t[r],null!==o&&("object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o));return!i.command.insert||i.command.insert instanceof e.CommandInsert||(i.command.insert=a.parseInsertArgs([i.command.insert]).command),!i.command.remove||i.command.remove instanceof e.CommandRemove||(i.command.remove=a.parseRemoveArgs([i.command.remove]).command),!i.command.filter||i.command.filter instanceof e.CommandFilter||(i.command.filter=a.parseFilterArgs([i.command.filter]).command),!i.command.sort||i.command.sort instanceof e.CommandSort||(i.command.sort=a.parseSortArgs([i.command.sort]).command),!i.command.changeLayout||i.command.changeLayout instanceof e.CommandChangeLayout||(i.command.changeLayout=a.parseChangeLayoutArgs([i.command.changeLayout]).command),i=a.callFilters("instructionParseMultimixArgs",i,arguments),n.freeze(i),i},parseFilterArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandFilter,r=0;r<t.length;r++)o=t[r],"string"==typeof o?i.command.selector=o:null===o?i.command.collection=[]:"object"==typeof o&&n.isElement(o,a.dom.document)?i.command.collection=[o]:"object"==typeof o&&"undefined"!=typeof o.length?i.command.collection=n.arrayFromList(o):"object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o);if(i.command.selector&&i.command.collection)throw new Error(e.messages.errorFilterInvalidArguments());return i=a.callFilters("instructionParseFilterArgs",i,arguments),n.freeze(i),i},parseSortArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r="",s=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandSort,s=0;s<t.length;s++)if(o=t[s],null!==o)switch(typeof o){case"string":r=o;break;case"object":o.length&&(i.command.collection=n.arrayFromList(o));break;case"boolean":i.animate=o;break;case"function":i.callback=o}return r&&(i.command=a.parseSortString(r,i.command)),i=a.callFilters("instructionParseSortArgs",i,arguments),n.freeze(i),i},parseInsertArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandInsert,r=0;r<t.length;r++)o=t[r],null!==o&&("number"==typeof o?i.command.index=o:"string"==typeof o&&["before","after"].indexOf(o)>-1?i.command.position=o:"string"==typeof o?i.command.collection=n.arrayFromList(n.createElement(o).childNodes):"object"==typeof o&&n.isElement(o,a.dom.document)?i.command.collection.length?i.command.sibling=o:i.command.collection=[o]:"object"==typeof o&&o.length?i.command.collection.length?i.command.sibling=o[0]:i.command.collection=o:"object"==typeof o&&o.childNodes&&o.childNodes.length?i.command.collection.length?i.command.sibling=o.childNodes[0]:i.command.collection=n.arrayFromList(o.childNodes):"object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o));if(i.command.index&&i.command.sibling)throw new Error(e.messages.errorInsertInvalidArguments());return!i.command.collection.length&&a.config.debug.showWarnings&&console.warn(e.messages.warningInsertNoElements()),i=a.callFilters("instructionParseInsertArgs",i,arguments),n.freeze(i),i},parseRemoveArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=null,s=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandRemove,s=0;s<t.length;s++)if(r=t[s],null!==r)switch(typeof r){case"number":a.targets[r]&&(i.command.targets[0]=a.targets[r]);break;case"string":i.command.collection=n.arrayFromList(a.dom.parent.querySelectorAll(r));break;case"object":r&&r.length?i.command.collection=r:n.isElement(r,a.dom.document)?i.command.collection=[r]:n.extend(i.command,r);break;case"boolean":i.animate=r;break;case"function":i.callback=r}if(i.command.collection.length)for(s=0;o=a.targets[s];s++)i.command.collection.indexOf(o.dom.el)>-1&&i.command.targets.push(o);return!i.command.targets.length&&a.config.debug.showWarnings&&console.warn(e.messages.warningRemoveNoElements()),n.freeze(i),i},parseDatasetArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandDataset,r=0;r<t.length;r++)if(o=t[r],null!==o)switch(typeof o){case"object":Array.isArray(o)||"number"==typeof o.length?i.command.dataset=o:n.extend(i.command,o);break;case"boolean":i.animate=o;break;case"function":i.callback=o}return n.freeze(i),i},parseChangeLayoutArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandChangeLayout,r=0;r<t.length;r++)if(o=t[r],null!==o)switch(typeof o){case"string":i.command.containerClassName=o;break;case"object":n.extend(i.command,o);break;case"boolean":i.animate=o;break;case"function":i.callback=o}return n.freeze(i),i},queueMix:function(t){var a=this,i=null,o="";return a.callActions("beforeQueueMix",arguments),i=n.defer(e.libraries),a.config.animation.queue&&a.queue.length<a.config.animation.queueLimit?(t.deferred=i,a.queue.push(t),a.config.controls.enable&&(a.isToggling?(a.buildToggleArray(t.instruction.command),o=a.getToggleSelector(),a.updateControls({filter:{selector:o}})):a.updateControls(t.instruction.command))):(a.config.debug.showWarnings&&console.warn(e.messages.warningMultimixInstanceQueueFull()),i.resolve(a.state),e.events.fire("mixBusy",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixBusy&&a.config.callbacks.onMixBusy.call(a.dom.container,a.state,a)),
a.callFilters("promiseQueueMix",i.promise,arguments)},getDataOperation:function(t){var a=this,i=new e.Operation,o=[];if(i=a.callFilters("operationUnmappedGetDataOperation",i,arguments),a.dom.targets.length&&!(o=a.state.activeDataset||[]).length)throw new Error(e.messages.errorDatasetNotSet());return i.id=n.randomHex(),i.startState=a.state,i.startDataset=o,i.newDataset=t.slice(),a.diffDatasets(i),i.startOrder=a.targets,i.newOrder=i.show,a.config.animation.enable&&(a.getStartMixData(i),a.setInter(i),i.docState=n.getDocumentState(a.dom.document),a.getInterMixData(i),a.setFinal(i),a.getFinalMixData(i),a.parseEffects(),i.hasEffect=a.hasEffect(),a.getTweenData(i)),a.targets=i.show.slice(),i.newState=a.buildState(i),Array.prototype.push.apply(a.targets,i.toRemove),i=a.callFilters("operationMappedGetDataOperation",i,arguments)},diffDatasets:function(t){var a=this,i=[],o=[],r=[],s=null,l=null,c=null,u=null,f=null,h={},d="",m=-1;for(a.callActions("beforeDiffDatasets",arguments),m=0;s=t.newDataset[m];m++){if("undefined"==typeof(d=s[a.config.data.uidKey])||d.toString().length<1)throw new TypeError(e.messages.errorDatasetInvalidUidKey({uidKey:a.config.data.uidKey}));if(h[d])throw new Error(e.messages.errorDatasetDuplicateUid({uid:d}));h[d]=!0,(l=a.cache[d])instanceof e.Target?(a.config.data.dirtyCheck&&!n.deepEquals(s,l.data)&&(c=l.render(s),l.data=s,c!==l.dom.el&&(l.isInDom&&(l.unbindEvents(),a.dom.parent.replaceChild(c,l.dom.el)),l.isShown||(c.style.display="none"),l.dom.el=c,l.isInDom&&l.bindEvents())),c=l.dom.el):(l=new e.Target,l.init(null,a,s),l.hide()),l.isInDom?(f=l.dom.el.nextElementSibling,o.push(d),u&&(u.lastElementChild&&u.appendChild(a.dom.document.createTextNode(" ")),a.insertDatasetFrag(u,l.dom.el,r),u=null)):(u||(u=a.dom.document.createDocumentFragment()),u.lastElementChild&&u.appendChild(a.dom.document.createTextNode(" ")),u.appendChild(l.dom.el),l.isInDom=!0,l.unbindEvents(),l.bindEvents(),l.hide(),t.toShow.push(l),r.push(l)),t.show.push(l)}for(u&&(f=f||a.config.layout.siblingAfter,f&&u.appendChild(a.dom.document.createTextNode(" ")),a.insertDatasetFrag(u,f,r)),m=0;s=t.startDataset[m];m++)d=s[a.config.data.uidKey],l=a.cache[d],t.show.indexOf(l)<0?(t.hide.push(l),t.toHide.push(l),t.toRemove.push(l)):i.push(d);n.isEqualArray(i,o)||(t.willSort=!0),a.callActions("afterDiffDatasets",arguments)},insertDatasetFrag:function(t,e,a){var i=this,o=e?n.arrayFromList(i.dom.parent.children).indexOf(e):i.targets.length;for(i.dom.parent.insertBefore(t,e);a.length;)i.targets.splice(o,0,a.shift()),o++},willSort:function(t,e){var n=this,a=!1;return a=!!(n.config.behavior.liveSort||"random"===t.order||t.attribute!==e.attribute||t.order!==e.order||t.collection!==e.collection||null===t.next&&e.next||t.next&&null===e.next)||!(!t.next||!e.next)&&n.willSort(t.next,e.next),n.callFilters("resultWillSort",a,arguments)},show:function(){var t=this;return t.filter("all")},hide:function(){var t=this;return t.filter("none")},isMixing:function(){var t=this;return t.isBusy},filter:function(){var t=this,e=t.parseFilterArgs(arguments);return t.multimix({filter:e.command},e.animate,e.callback)},toggleOn:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a="";return t.isToggling=!0,t.toggleArray.indexOf(n)<0&&t.toggleArray.push(n),a=t.getToggleSelector(),t.multimix({filter:a},e.animate,e.callback)},toggleOff:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a=t.toggleArray.indexOf(n),i="";return t.isToggling=!0,a>-1&&t.toggleArray.splice(a,1),i=t.getToggleSelector(),t.multimix({filter:i},e.animate,e.callback)},sort:function(){var t=this,e=t.parseSortArgs(arguments);return t.multimix({sort:e.command},e.animate,e.callback)},changeLayout:function(){var t=this,e=t.parseChangeLayoutArgs(arguments);return t.multimix({changeLayout:e.command},e.animate,e.callback)},dataset:function(){var t=this,n=t.parseDatasetArgs(arguments),a=null,i=null,o=!1;return t.callActions("beforeDataset",arguments),t.isBusy?(i=new e.QueueItem,i.args=arguments,i.instruction=n,t.queueMix(i)):(n.callback&&(t.userCallback=n.callback),o=n.animate^t.config.animation.enable?n.animate:t.config.animation.enable,a=t.getDataOperation(n.command.dataset),t.goMix(o,a))},multimix:function(){var t=this,n=null,a=!1,i=null,o=t.parseMultimixArgs(arguments);return t.callActions("beforeMultimix",arguments),t.isBusy?(i=new e.QueueItem,i.args=arguments,i.instruction=o,i.triggerElement=t.lastClicked,i.isToggling=t.isToggling,t.queueMix(i)):(n=t.getOperation(o.command),t.config.controls.enable&&(o.command.filter&&!t.isToggling&&(t.toggleArray.length=0,t.buildToggleArray(n.command)),t.queue.length<1&&t.updateControls(n.command)),o.callback&&(t.userCallback=o.callback),a=o.animate^t.config.animation.enable?o.animate:t.config.animation.enable,t.callFilters("operationMultimix",n,arguments),t.goMix(a,n))},getOperation:function(t){var a=this,i=t.sort,o=t.filter,r=t.changeLayout,s=t.remove,l=t.insert,c=new e.Operation;return c=a.callFilters("operationUnmappedGetOperation",c,arguments),c.id=n.randomHex(),c.command=t,c.startState=a.state,c.triggerElement=a.lastClicked,a.isBusy?(a.config.debug.showWarnings&&console.warn(e.messages.warningGetOperationInstanceBusy()),null):(l&&a.insertTargets(l,c),s&&(c.toRemove=s.targets),c.startSort=c.newSort=c.startState.activeSort,c.startOrder=c.newOrder=a.targets,i&&(c.startSort=c.startState.activeSort,c.newSort=i,c.willSort=a.willSort(i,c.startState.activeSort),c.willSort&&a.sortOperation(c)),c.startFilter=c.startState.activeFilter,o?c.newFilter=o:c.newFilter=n.extend(new e.CommandFilter,c.startFilter),"all"===c.newFilter.selector?c.newFilter.selector=a.config.selectors.target:"none"===c.newFilter.selector&&(c.newFilter.selector=""),a.filterOperation(c),c.startContainerClassName=c.startState.activeContainerClassName,r?(c.newContainerClassName=r.containerClassName,c.newContainerClassName!==c.startContainerClassName&&(c.willChangeLayout=!0)):c.newContainerClassName=c.startContainerClassName,a.config.animation.enable&&(a.getStartMixData(c),a.setInter(c),c.docState=n.getDocumentState(a.dom.document),a.getInterMixData(c),a.setFinal(c),a.getFinalMixData(c),a.parseEffects(),c.hasEffect=a.hasEffect(),a.getTweenData(c)),c.willSort&&(a.targets=c.newOrder),c.newState=a.buildState(c),a.callFilters("operationMappedGetOperation",c,arguments))},tween:function(t,e){var n=null,a=null,i=-1,o=-1;for(e=Math.min(e,1),e=Math.max(e,0),o=0;n=t.show[o];o++)a=t.showPosData[o],n.applyTween(a,e);for(o=0;n=t.hide[o];o++)n.isShown&&n.hide(),(i=t.toHide.indexOf(n))>-1&&(a=t.toHidePosData[i],n.isShown||n.show(),n.applyTween(a,e))},insert:function(){var t=this,e=t.parseInsertArgs(arguments);return t.multimix({insert:e.command},e.animate,e.callback)},insertBefore:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"before",e.command.sibling,e.animate,e.callback)},insertAfter:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"after",e.command.sibling,e.animate,e.callback)},prepend:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(0,e.command.collection,e.animate,e.callback)},append:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(t.state.totalTargets,e.command.collection,e.animate,e.callback)},remove:function(){var t=this,e=t.parseRemoveArgs(arguments);return t.multimix({remove:e.command},e.animate,e.callback)},getConfig:function(t){var e=this,a=null;return a=t?n.getProperty(e.config,t):e.config,e.callFilters("valueGetConfig",a,arguments)},configure:function(t){var e=this;e.callActions("beforeConfigure",arguments),n.extend(e.config,t,!0,!0),e.callActions("afterConfigure",arguments)},getState:function(){var t=this,a=null;return a=new e.State,n.extend(a,t.state),n.freeze(a),t.callFilters("stateGetState",a,arguments)},forceRefresh:function(){var t=this;t.indexTargets()},forceRender:function(){var t=this,e=null,n=null,a="";for(a in t.cache)e=t.cache[a],n=e.render(e.data),n!==e.dom.el&&(e.isInDom&&(e.unbindEvents(),t.dom.parent.replaceChild(n,e.dom.el)),e.isShown||(n.style.display="none"),e.dom.el=n,e.isInDom&&e.bindEvents());t.state=t.buildState(t.lastOperation)},destroy:function(t){var n=this,a=null,i=null,o=0;for(n.callActions("beforeDestroy",arguments),o=0;a=n.controls[o];o++)a.removeBinding(n);for(o=0;i=n.targets[o];o++)t&&i.show(),i.unbindEvents();n.dom.container.id.match(/^MixItUp/)&&n.dom.container.removeAttribute("id"),delete e.instances[n.id],n.callActions("afterDestroy",arguments)}}),e.IMoveData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.posIn=null,this.posOut=null,this.operation=null,this.callback=null,this.statusChange="",this.duration=-1,this.staggerIndex=-1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.IMoveData),e.IMoveData.prototype=Object.create(e.Base.prototype),e.IMoveData.prototype.constructor=e.IMoveData,e.TargetDom=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TargetDom),e.TargetDom.prototype=Object.create(e.Base.prototype),e.TargetDom.prototype.constructor=e.TargetDom,e.Target=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.sortString="",this.mixer=null,this.callback=null,this.isShown=!1,this.isBound=!1,this.isExcluded=!1,this.isInDom=!1,this.handler=null,this.operation=null,this.data=null,this.dom=new e.TargetDom,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Target),e.Target.prototype=Object.create(e.Base.prototype),n.extend(e.Target.prototype,{constructor:e.Target,init:function(t,n,a){var i=this,o="";if(i.callActions("beforeInit",arguments),i.mixer=n,t||(t=i.render(a)),i.cacheDom(t),i.bindEvents(),"none"!==i.dom.el.style.display&&(i.isShown=!0),a&&n.config.data.uidKey){if("undefined"==typeof(o=a[n.config.data.uidKey])||o.toString().length<1)throw new TypeError(e.messages.errorDatasetInvalidUidKey({uidKey:n.config.data.uidKey}));i.id=o,i.data=a,n.cache[o]=i}i.callActions("afterInit",arguments)},render:function(t){var a=this,i=null,o=null,r=null,s="";if(a.callActions("beforeRender",arguments),i=a.callFilters("renderRender",a.mixer.config.render.target,arguments),"function"!=typeof i)throw new TypeError(e.messages.errorDatasetRendererNotSet());return s=i(t),s&&"object"==typeof s&&n.isElement(s)?o=s:"string"==typeof s&&(r=document.createElement("div"),r.innerHTML=s,o=r.firstElementChild),a.callFilters("elRender",o,arguments)},cacheDom:function(t){var e=this;e.callActions("beforeCacheDom",arguments),e.dom.el=t,e.callActions("afterCacheDom",arguments)},getSortString:function(t){var e=this,n=e.dom.el.getAttribute("data-"+t)||"";e.callActions("beforeGetSortString",arguments),n=isNaN(1*n)?n.toLowerCase():1*n,e.sortString=n,e.callActions("afterGetSortString",arguments)},show:function(){var t=this;t.callActions("beforeShow",arguments),t.isShown||(t.dom.el.style.display="",t.isShown=!0),t.callActions("afterShow",arguments)},hide:function(){var t=this;t.callActions("beforeHide",arguments),t.isShown&&(t.dom.el.style.display="none",t.isShown=!1),t.callActions("afterHide",arguments)},move:function(t){var e=this;e.callActions("beforeMove",arguments),e.isExcluded||e.mixer.targetsMoved++,e.applyStylesIn(t),requestAnimationFrame(function(){e.applyStylesOut(t)}),e.callActions("afterMove",arguments)},applyTween:function(t,n){var a=this,i="",o=null,r=t.posIn,s=[],l=new e.StyleData,c=-1;for(a.callActions("beforeApplyTween",arguments),l.x=r.x,l.y=r.y,0===n?a.hide():a.isShown||a.show(),c=0;i=e.features.TWEENABLE[c];c++)if(o=t.tweenData[i],"x"===i){if(!o)continue;l.x=r.x+o*n}else if("y"===i){if(!o)continue;l.y=r.y+o*n}else if(o instanceof e.TransformData){if(!o.value)continue;l[i].value=r[i].value+o.value*n,l[i].unit=o.unit,s.push(i+"("+l[i].value+o.unit+")")}else{if(!o)continue;l[i]=r[i]+o*n,a.dom.el.style[i]=l[i]}(l.x||l.y)&&s.unshift("translate("+l.x+"px, "+l.y+"px)"),s.length&&(a.dom.el.style[e.features.transformProp]=s.join(" ")),a.callActions("afterApplyTween",arguments)},applyStylesIn:function(t){var n=this,a=t.posIn,i=1!==n.mixer.effectsIn.opacity,o=[];n.callActions("beforeApplyStylesIn",arguments),o.push("translate("+a.x+"px, "+a.y+"px)"),n.mixer.config.animation.animateResizeTargets&&("show"!==t.statusChange&&(n.dom.el.style.width=a.width+"px",n.dom.el.style.height=a.height+"px"),n.dom.el.style.marginRight=a.marginRight+"px",n.dom.el.style.marginBottom=a.marginBottom+"px"),i&&(n.dom.el.style.opacity=a.opacity),"show"===t.statusChange&&(o=o.concat(n.mixer.transformIn)),n.dom.el.style[e.features.transformProp]=o.join(" "),n.callActions("afterApplyStylesIn",arguments)},applyStylesOut:function(t){var n=this,a=[],i=[],o=n.mixer.config.animation.animateResizeTargets,r="undefined"!=typeof n.mixer.effectsIn.opacity;if(n.callActions("beforeApplyStylesOut",arguments),a.push(n.writeTransitionRule(e.features.transformRule,t.staggerIndex)),"none"!==t.statusChange&&a.push(n.writeTransitionRule("opacity",t.staggerIndex,t.duration)),o&&(a.push(n.writeTransitionRule("width",t.staggerIndex,t.duration)),a.push(n.writeTransitionRule("height",t.staggerIndex,t.duration)),a.push(n.writeTransitionRule("margin",t.staggerIndex,t.duration))),!t.callback)return n.mixer.targetsImmovable++,void(n.mixer.targetsMoved===n.mixer.targetsImmovable&&n.mixer.cleanUp(t.operation));switch(n.operation=t.operation,n.callback=t.callback,!n.isExcluded&&n.mixer.targetsBound++,n.isBound=!0,n.applyTransition(a),o&&t.posOut.width>0&&t.posOut.height>0&&(n.dom.el.style.width=t.posOut.width+"px",n.dom.el.style.height=t.posOut.height+"px",n.dom.el.style.marginRight=t.posOut.marginRight+"px",n.dom.el.style.marginBottom=t.posOut.marginBottom+"px"),n.mixer.config.animation.nudge||"hide"!==t.statusChange||i.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),t.statusChange){case"hide":r&&(n.dom.el.style.opacity=n.mixer.effectsOut.opacity),i=i.concat(n.mixer.transformOut);break;case"show":r&&(n.dom.el.style.opacity=1)}(n.mixer.config.animation.nudge||!n.mixer.config.animation.nudge&&"hide"!==t.statusChange)&&i.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),n.dom.el.style[e.features.transformProp]=i.join(" "),n.callActions("afterApplyStylesOut",arguments)},writeTransitionRule:function(t,e,n){var a=this,i=a.getDelay(e),o="";return o=t+" "+(n>0?n:a.mixer.config.animation.duration)+"ms "+i+"ms "+("opacity"===t?"linear":a.mixer.config.animation.easing),a.callFilters("ruleWriteTransitionRule",o,arguments)},getDelay:function(t){var e=this,n=-1;return"function"==typeof e.mixer.config.animation.staggerSequence&&(t=e.mixer.config.animation.staggerSequence.call(e,t,e.state)),n=e.mixer.staggerDuration?t*e.mixer.staggerDuration:0,e.callFilters("delayGetDelay",n,arguments)},applyTransition:function(t){var n=this,a=t.join(", ");n.callActions("beforeApplyTransition",arguments),n.dom.el.style[e.features.transitionProp]=a,n.callActions("afterApplyTransition",arguments)},handleTransitionEnd:function(t){var e=this,n=t.propertyName,a=e.mixer.config.animation.animateResizeTargets;e.callActions("beforeHandleTransitionEnd",arguments),e.isBound&&t.target.matches(e.mixer.config.selectors.target)&&(n.indexOf("transform")>-1||n.indexOf("opacity")>-1||a&&n.indexOf("height")>-1||a&&n.indexOf("width")>-1||a&&n.indexOf("margin")>-1)&&(e.callback.call(e,e.operation),e.isBound=!1,e.callback=null,e.operation=null),e.callActions("afterHandleTransitionEnd",arguments)},eventBus:function(t){var e=this;switch(e.callActions("beforeEventBus",arguments),t.type){case"webkitTransitionEnd":case"transitionend":e.handleTransitionEnd(t)}e.callActions("afterEventBus",arguments)},unbindEvents:function(){var t=this;t.callActions("beforeUnbindEvents",arguments),n.off(t.dom.el,"webkitTransitionEnd",t.handler),n.off(t.dom.el,"transitionend",t.handler),t.callActions("afterUnbindEvents",arguments)},bindEvents:function(){var t=this,a="";t.callActions("beforeBindEvents",arguments),a="webkit"===e.features.transitionPrefix?"webkitTransitionEnd":"transitionend",t.handler=function(e){return t.eventBus(e)},n.on(t.dom.el,a,t.handler),t.callActions("afterBindEvents",arguments)},getPosData:function(n){var a=this,i={},o=null,r=new e.StyleData;return a.callActions("beforeGetPosData",arguments),r.x=a.dom.el.offsetLeft,r.y=a.dom.el.offsetTop,(a.mixer.config.animation.animateResizeTargets||n)&&(o=a.dom.el.getBoundingClientRect(),r.top=o.top,r.right=o.right,r.bottom=o.bottom,r.left=o.left,r.width=o.width,r.height=o.height),a.mixer.config.animation.animateResizeTargets&&(i=t.getComputedStyle(a.dom.el),r.marginBottom=parseFloat(i.marginBottom),r.marginRight=parseFloat(i.marginRight)),a.callFilters("posDataGetPosData",r,arguments)},cleanUp:function(){var t=this;t.callActions("beforeCleanUp",arguments),t.dom.el.style[e.features.transformProp]="",t.dom.el.style[e.features.transitionProp]="",t.dom.el.style.opacity="",t.mixer.config.animation.animateResizeTargets&&(t.dom.el.style.width="",t.dom.el.style.height="",t.dom.el.style.marginRight="",t.dom.el.style.marginBottom=""),t.callActions("afterCleanUp",arguments)}}),e.Collection=function(t){var e=null,a=-1;for(this.callActions("beforeConstruct"),a=0;e=t[a];a++)this[a]=e;this.length=t.length,this.callActions("afterConstruct"),n.freeze(this)},e.BaseStatic.call(e.Collection),e.Collection.prototype=Object.create(e.Base.prototype),n.extend(e.Collection.prototype,{constructor:e.Collection,mixitup:function(t){var a=this,i=null,o=Array.prototype.slice.call(arguments),r=[],s=-1;for(this.callActions("beforeMixitup"),o.shift(),s=0;i=a[s];s++)r.push(i[t].apply(i,o));return a.callFilters("promiseMixitup",n.all(r,e.libraries),arguments)}}),e.Operation=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.args=[],this.command=null,this.showPosData=[],this.toHidePosData=[],this.startState=null,this.newState=null,this.docState=null,this.willSort=!1,this.willChangeLayout=!1,this.hasEffect=!1,this.hasFailed=!1,this.triggerElement=null,this.show=[],this.hide=[],this.matching=[],this.toShow=[],this.toHide=[],this.toMove=[],this.toRemove=[],this.startOrder=[],this.newOrder=[],this.startSort=null,this.newSort=null,this.startFilter=null,this.newFilter=null,this.startDataset=null,this.newDataset=null,this.viewportDeltaX=0,this.viewportDeltaY=0,this.startX=0,this.startY=0,this.startHeight=0,this.startWidth=0,this.newX=0,this.newY=0,this.newHeight=0,this.newWidth=0,this.startContainerClassName="",this.startDisplay="",this.newContainerClassName="",this.newDisplay="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Operation),e.Operation.prototype=Object.create(e.Base.prototype),e.Operation.prototype.constructor=e.Operation,e.State=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.activeFilter=null,this.activeSort=null,this.activeContainerClassName="",this.container=null,this.targets=[],this.hide=[],this.show=[],this.matching=[],this.totalTargets=-1,this.totalShow=-1,this.totalHide=-1,this.totalMatching=-1,this.hasFailed=!1,this.triggerElement=null,this.activeDataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.State),e.State.prototype=Object.create(e.Base.prototype),e.State.prototype.constructor=e.State,e.UserInstruction=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.command={},this.animate=!1,this.callback=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.UserInstruction),e.UserInstruction.prototype=Object.create(e.Base.prototype),e.UserInstruction.prototype.constructor=e.UserInstruction,e.Messages=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.ERROR_FACTORY_INVALID_CONTAINER="[MixItUp] An invalid selector or element reference was passed to the mixitup factory function",this.ERROR_FACTORY_CONTAINER_NOT_FOUND="[MixItUp] The provided selector yielded no container element",this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS="[MixItUp] Invalid value for `animation.effects`",this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE="[MixItUp] Invalid value for `controls.scope`",this.ERROR_CONFIG_INVALID_PROPERTY='[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}',this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION='. Did you mean "${probableMatch}"?',this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET="[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`",this.ERROR_DATASET_INVALID_UID_KEY='[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items',this.ERROR_DATASET_DUPLICATE_UID='[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.',this.ERROR_INSERT_INVALID_ARGUMENTS="[MixItUp] Please provider either an index or a sibling and position to insert, not both",this.ERROR_INSERT_PREEXISTING_ELEMENT="[MixItUp] An element to be inserted already exists in the container",this.ERROR_FILTER_INVALID_ARGUMENTS="[MixItUp] Please provide either a selector or collection `.filter()`, not both",this.ERROR_DATASET_NOT_SET="[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`",this.ERROR_DATASET_PRERENDERED_MISMATCH="[MixItUp] `load.dataset` does not match pre-rendered targets",this.ERROR_DATASET_RENDERER_NOT_SET="[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`",this.ERROR_SORT_NON_EXISTENT_ELEMENT="[MixItUp] An element to be sorted does not already exist in the container",this.WARNING_FACTORY_PREEXISTING_INSTANCE="[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.",this.WARNING_INSERT_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.insert()`",this.WARNING_REMOVE_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.remove()`",this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL="[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.",this.WARNING_GET_OPERATION_INSTANCE_BUSY="[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.",this.WARNING_NO_PROMISE_IMPLEMENTATION="[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.",this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES='[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output',this.callActions("afterConstruct"),this.compileTemplates(),n.seal(this)},e.BaseStatic.call(e.Messages),e.Messages.prototype=Object.create(e.Base.prototype),e.Messages.prototype.constructor=e.Messages,e.Messages.prototype.compileTemplates=function(){var t="",e="";for(t in this)"string"==typeof(e=this[t])&&(this[n.camelCase(t)]=n.template(e))},e.messages=new e.Messages,e.Facade=function(t){e.Base.call(this),this.callActions("beforeConstruct",arguments),this.configure=t.configure.bind(t),this.show=t.show.bind(t),this.hide=t.hide.bind(t),this.filter=t.filter.bind(t),this.toggleOn=t.toggleOn.bind(t),this.toggleOff=t.toggleOff.bind(t),this.sort=t.sort.bind(t),this.changeLayout=t.changeLayout.bind(t),this.multimix=t.multimix.bind(t),this.dataset=t.dataset.bind(t),this.tween=t.tween.bind(t),this.insert=t.insert.bind(t),this.insertBefore=t.insertBefore.bind(t),this.insertAfter=t.insertAfter.bind(t),this.prepend=t.prepend.bind(t),this.append=t.append.bind(t),this.remove=t.remove.bind(t),this.destroy=t.destroy.bind(t),this.forceRefresh=t.forceRefresh.bind(t),this.forceRender=t.forceRender.bind(t),this.isMixing=t.isMixing.bind(t),this.getOperation=t.getOperation.bind(t),this.getConfig=t.getConfig.bind(t),this.getState=t.getState.bind(t),this.callActions("afterConstruct",arguments),n.freeze(this),n.seal(this)},e.BaseStatic.call(e.Facade),e.Facade.prototype=Object.create(e.Base.prototype),e.Facade.prototype.constructor=e.Facade,"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof t.mixitup&&"function"==typeof t.mixitup||(t.mixitup=e),e.BaseStatic.call(e.constructor),e.NAME="mixitup",e.CORE_VERSION="3.3.1"}(window);
;
var VanillaTilt = (function () {
'use strict';

/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.8.0
 */

class VanillaTilt {
  constructor(element, settings = {}) {
    if (!(element instanceof Node)) {
      throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
    }

    this.width = null;
    this.height = null;
    this.clientWidth = null;
    this.clientHeight = null;
    this.left = null;
    this.top = null;

    // for Gyroscope sampling
    this.gammazero = null;
    this.betazero = null;
    this.lastgammazero = null;
    this.lastbetazero = null;

    this.transitionTimeout = null;
    this.updateCall = null;
    this.event = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);

    this.reverse = this.settings.reverse ? -1 : 1;
    this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
    this.gyroscopeSamples = this.settings.gyroscopeSamples;

    this.elementListener = this.getElementListener();

    if (this.glare) {
      this.prepareGlare();
    }

    if (this.fullPageListening) {
      this.updateClientSize();
    }

    this.addEventListeners();
    this.reset();

    if (this.resetToStart === false) {
      this.settings.startX = 0;
      this.settings.startY = 0;
    }
  }

  static isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  }

  /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */
  getElementListener() {
    if (this.fullPageListening) {
      return window.document;
    }

    if (typeof this.settings["mouse-event-element"] === "string") {
      const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

      if (mouseEventElement) {
        return mouseEventElement;
      }
    }

    if (this.settings["mouse-event-element"] instanceof Node) {
      return this.settings["mouse-event-element"];
    }

    return this.element;
  }

  /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */
  addEventListeners() {
    this.onMouseEnterBind = this.onMouseEnter.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseLeaveBind = this.onMouseLeave.bind(this);
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

    this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

    if (this.glare || this.fullPageListening) {
      window.addEventListener("resize", this.onWindowResizeBind);
    }

    if (this.gyroscope) {
      window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    }
  }

  /**
   * Method remove event listeners from current this.elementListener
   */
  removeEventListeners() {
    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

    if (this.gyroscope) {
      window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
    }

    if (this.glare || this.fullPageListening) {
      window.removeEventListener("resize", this.onWindowResizeBind);
    }
  }

  destroy() {
    clearTimeout(this.transitionTimeout);
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.reset();

    this.removeEventListeners();
    this.element.vanillaTilt = null;
    delete this.element.vanillaTilt;

    this.element = null;
  }

  onDeviceOrientation(event) {
    if (event.gamma === null || event.beta === null) {
      return;
    }

    this.updateElementPosition();

    if (this.gyroscopeSamples > 0) {
      this.lastgammazero = this.gammazero;
      this.lastbetazero = this.betazero;

      if (this.gammazero === null) {
        this.gammazero = event.gamma;
        this.betazero = event.beta;
      } else {
        this.gammazero = (event.gamma + this.lastgammazero) / 2;
        this.betazero = (event.beta + this.lastbetazero) / 2;
      }

      this.gyroscopeSamples -= 1;
    }

    const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
    const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

    const degreesPerPixelX = totalAngleX / this.width;
    const degreesPerPixelY = totalAngleY / this.height;

    const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
    const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

    const posX = angleX / degreesPerPixelX;
    const posY = angleY / degreesPerPixelY;

    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = {
      clientX: posX + this.left,
      clientY: posY + this.top,
    };

    this.updateCall = requestAnimationFrame(this.updateBind);
  }

  onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  }

  onMouseMove(event) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = event;
    this.updateCall = requestAnimationFrame(this.updateBind);
  }

  onMouseLeave() {
    this.setTransition();

    if (this.settings.reset) {
      requestAnimationFrame(this.resetBind);
    }
  }

  reset() {
    this.onMouseEnter();

    if (this.fullPageListening) {
      this.event = {
        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
      };
    } else {
      this.event = {
        clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width),
        clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height)
      };
    }

    let backupScale = this.settings.scale;
    this.settings.scale = 1;
    this.update();
    this.settings.scale = backupScale;
    this.resetGlare();
  }

  resetGlare() {
    if (this.glare) {
      this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "0";
    }
  }

  getValues() {
    let x, y;

    if (this.fullPageListening) {
      x = this.event.clientX / this.clientWidth;
      y = this.event.clientY / this.clientHeight;
    } else {
      x = (this.event.clientX - this.left) / this.width;
      y = (this.event.clientY - this.top) / this.height;
    }

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    let tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
    let tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
    let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: x * 100,
      percentageY: y * 100,
      angle: angle
    };
  }

  updateElementPosition() {
    let rect = this.element.getBoundingClientRect();

    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  update() {
    let values = this.getValues();

    this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
      "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
      "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
      "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    if (this.glare) {
      this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
      this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
    }

    this.element.dispatchEvent(new CustomEvent("tiltChange", {
      "detail": values
    }));

    this.updateCall = null;
  }

  /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */
  prepareGlare() {
    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
    if (!this.glarePrerender) {
      // Create glare element
      const jsTiltGlare = document.createElement("div");
      jsTiltGlare.classList.add("js-tilt-glare");

      const jsTiltGlareInner = document.createElement("div");
      jsTiltGlareInner.classList.add("js-tilt-glare-inner");

      jsTiltGlare.appendChild(jsTiltGlareInner);
      this.element.appendChild(jsTiltGlare);
    }

    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
    this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

    if (this.glarePrerender) {
      return;
    }

    Object.assign(this.glareElementWrapper.style, {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden",
      "pointer-events": "none",
      "border-radius": "inherit"
    });

    Object.assign(this.glareElement.style, {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "pointer-events": "none",
      "background-image": `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
      "transform": "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      "opacity": "0"
    });

    this.updateGlareSize();
  }

  updateGlareSize() {
    if (this.glare) {
      const glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;

      Object.assign(this.glareElement.style, {
        "width": `${glareSize}px`,
        "height": `${glareSize}px`,
      });
    }
  }

  updateClientSize() {
    this.clientWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    this.clientHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  }

  onWindowResize() {
    this.updateGlareSize();
    this.updateClientSize();
  }

  setTransition() {
    clearTimeout(this.transitionTimeout);
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;

    this.transitionTimeout = setTimeout(() => {
      this.element.style.transition = "";
      if (this.glare) {
        this.glareElement.style.transition = "";
      }
    }, this.settings.speed);

  }

  /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
   * @param {boolean} settings.glare - if it should have a "glare" effect
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */
  extendSettings(settings) {
    let defaultSettings = {
      reverse: false,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "full-page-listening": false,
      "mouse-event-element": null,
      reset: true,
      "reset-to-start": true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    };

    let newSettings = {};
    for (var property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        let attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (e) {
          newSettings[property] = attribute;
        }

      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  }

  static init(elements, settings) {
    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [].slice.call(elements);
    }

    if (!(elements instanceof Array)) {
      return;
    }

    elements.forEach((element) => {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  }
}

if (typeof document !== "undefined") {
  /* expose the class to window */
  window.VanillaTilt = VanillaTilt;

  /**
   * Auto load
   */
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}

return VanillaTilt;

}());

;
!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,s=e.meanMenuOpen,u=e.meanRevealPosition,m=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,v=".meanmenu-reveal",h=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.meanDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===u){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var M="",P=function(){M.html(jQuery(M).is(".meanmenu-reveal.meanclose")?r:s)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mean-remove"),E=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mean-nav ul").hide(),h?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(s)})}else W()};C||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);
;
/***************************************************
==================== JS INDEX ======================
****************************************************
00. Preloader
01. Cursor Animations
02. Offcanvas
03. Scroll Top
04. Modals
05. Header 1
06. Header 2
07. Header 3
08. Header 5
09. Header Search
10. Roll Slider
11. Workflow Slider
12. Team Slider
13. Testimonial Slider
14. Testimonial Slider 3
15. Portfolio Slider
16. Service 1
17. Counter
18. Button Hover Animation
19. Button Move Animation
20. Register GSAP
21. Config GSAP
22. Service 6
23. Choose Section
24. Portfolio 5 Animation 
25. Title Animation
26. Title Animation Top
27. Text Animation
28. Text Animation Top
29. Offcanvas Menu
30. Service 3
31. Folks animation
32. Menu Text Animation
33. Main Portfolio Sticky
34. Hero 3 Animation
35. Home Page 2 Animations
36. Award Animation
37. Portfolio Main Slider
38. Portfolio Animation
39. Portfolio Slider 2
40. Portfolio Slider 3
41. Image Moving Animations
42. Counter Animation
43. Workflow Slider Animation | animation__fade
44. Workflow Slider Animation 2 |  fade_bottom
45. Blog animation 
46. Blog animation 2
47. Blog Animation 3
48. Zoom In Animation
49. Service 3 Animation
50. Testimonial 2 Animation
51. Testimonial 3 Image Animation
52. Pricing Table Animation 
53. Service 2 Animation 
54. Hero 1 Animation
55. Service 1 Animation
56. Features 2 Animation 
57. Portfolio 6 Animation 
58. Portfolio 5 Border
59. Portfolio Main Slider
60. Portfolio Slider 6
61. Testimonial Slider 4
62. Team 7
63.Portfolio Slider 7
64. Header 7
65. Service 7 Animation
****************************************************/

(function ($) {
  "use strict";

  // Get Device width
  let device_width = window.innerWidth;

  /////////////////////////////////////////////////////
  // 00. Preloader
  $(document).ready(function () {
    $('.preloader').hide();
  });
  /////////////////////////////////////////////////////

  // 07. Data backgrond
  $("[data-background").each(function () {
    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

  /////////////////////////////////////////////////////
  // HERO - 9

  var testimonial_4 = new Swiper(".hero-9", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });



  /////////////////////////////////////////////////////
  // 01. Cursor Animations

  // Home Page Client Cursor
  var client_cursor = document.getElementById("client_cursor");

  // Team Page Team Cursor
  var team_cursor = document.getElementById("team_cursor");

  // Portfolio  Cursor
  var portf_cursor_6 = document.getElementById("portf_cursor_6");

  // Featured  Cursor
  var featured_cursor = document.getElementById("featured_cursor");

  var portfolio4_cursor = document.getElementById("portfolio4_cursor");

  function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })

      // Home Page Client Cursor
      if (target.closest(".testimonial__img")) {
        tl.to(client_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(client_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(team_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(team_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Portfolio Cursor
      if (target.closest(".portfolio__item-6")) {
        tl.to(portf_cursor_6, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portf_cursor_6, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }
      // Portfolio Cursor
      if (target.closest(".portfolio__item-6")) {
        tl.to(portf_cursor_6, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portf_cursor_6, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // featured  Cursor
      if (target.closest(".portfolio__slider-3")) {
        tl.to(featured_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(featured_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // featured  Cursor
      if (target.closest(".portfolio__area-5")) {
        tl.to(portfolio4_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portfolio4_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Main Cursor Moving 
      tl.to(".cursor1", {
        ease: "power2.out"
      })
        .to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4")

    } catch (error) {
      console.log(error)
    }

  }
  document.addEventListener("mousemove", mousemoveHandler);
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 02. Offcanvas 
  $("#open_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '1');
    $('.offcanvas__area').css('visibility', 'visible');
  });
  $("#close_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '0');
    $('.offcanvas__area').css('visibility', 'hidden');
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 03. Scroll Top
  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
    window.onscroll = function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scroll_top.style.display = "block";
      } else {
        scroll_top.style.display = "none";
      }
    };

    scroll_top.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  ////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 04. Modals
  var testimonial = document.querySelector(".testimonial__area");
  if (testimonial) {

    // Testimonial Modal 1
    var modal_testimonial = document.querySelector("#modal_testimonial");
    var modal_trigger = document.querySelector(".modal-trigger");
    var modal_close = document.querySelector("#modal_close");

    if (modal_trigger && modal_testimonial) {
      modal_trigger.addEventListener("click", function () {
        modal_testimonial.classList.add("modal-show");
      });
    }
    if (modal_close && modal_testimonial) {
      modal_close.addEventListener("click", function () {
        modal_testimonial.classList.remove("modal-show");
      });
    }

    // Testimonial Modal 2
    var modal_testimonial_2 = document.querySelector("#modal_testimonial2");
    var modal_trigger_2 = document.querySelector(".modal-trigger-2");
    var modal_close_2 = document.querySelector("#modal_close2");

    if (modal_trigger_2 && modal_testimonial_2) {
      modal_trigger_2.addEventListener("click", function () {
        modal_testimonial_2.classList.add("modal-show");
      });
    }
    if (modal_close_2 && modal_testimonial_2) {
      modal_close_2.addEventListener("click", function () {
        modal_testimonial_2.classList.remove("modal-show");
      });
    }

    // Testimonial Modal 3
    var modal_testimonial_3 = document.querySelector("#modal_testimonial3");
    var modal_trigger_3 = document.querySelector(".modal-trigger-3");
    var modal_close_3 = document.querySelector("#modal_close3");

    if (modal_trigger_3 && modal_testimonial_3) {
      modal_trigger_3.addEventListener("click", function () {
        modal_testimonial_3.classList.add("modal-show");
      });
    }
    if (modal_close_3 && modal_testimonial_3) {
      modal_close_3.addEventListener("click", function () {
        modal_testimonial_3.classList.remove("modal-show");
      });
    }
  }

  var job_apply = document.querySelector(".job__apply");
  if (job_apply) {

    // application Modal 1
    var modal_application = document.querySelector("#application_form");
    var apply_trigger = document.querySelector(".job__apply");
    var apply_close = document.querySelector("#apply_close");

    if (apply_trigger && modal_application) {
      apply_trigger.addEventListener("click", function () {
        modal_application.classList.add("modal-show");
      });
    }
    if (apply_close && modal_application) {
      apply_close.addEventListener("click", function () {
        modal_application.classList.remove("modal-show");
      });
    }

    // application Modal 2
    var modal_application_2 = document.querySelector("#application_form2");
    var apply_trigger_2 = document.querySelector(".apply-trigger");
    var apply_close_2 = document.querySelector("#apply_close2");
    var back_form1 = document.querySelector("#back_form1");

    if (apply_trigger_2 && modal_application_2) {
      apply_trigger_2.addEventListener("click", function () {
        modal_application_2.classList.add("modal-show");
      });
    }
    if (apply_close_2 && modal_application_2 && modal_application) {
      apply_close_2.addEventListener("click", function () {
        modal_application_2.classList.remove("modal-show");
        modal_application.classList.remove("modal-show");
      });
    }
    if (back_form1 && modal_application_2) {
      back_form1.addEventListener("click", function () {
        modal_application_2.classList.remove("modal-show");
      });
    }
  }
  /////////////////////////////////////////////////////
  return;

  /////////////////////////////////////////////////////
  // 05. Header 1
  if (device_width < 1365) {
    let header_bg = document.querySelector(".header__area");

    if (header_bg) {
      window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          header_bg.style.background = "#121212";
          header_bg.style.setProperty('mix-blend-mode', 'unset');
          if (scroll_top) {
            scroll_top.style.display = "block";
          }
        } else {
          header_bg.style.background = "transparent";
          header_bg.style.setProperty('mix-blend-mode', 'exclusion');
          if (scroll_top) {
            scroll_top.style.display = "none";
          }
        }
      };
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 06. Header 2
  let header_bg_2 = document.querySelector(".header__area-2");
  if (header_bg_2) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_2.style.background = "#121212";
        header_bg_2.classList.add("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 07. Header 3
  let header_bg_3 = document.querySelector(".header__area-3");
  if (header_bg_3) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_3.classList.add("sticky-3");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_3.classList.remove("sticky-3");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 08. Header 5
  let header_bg_5 = document.querySelector(".header__area-5");
  if (header_bg_5) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_5.classList.add("sticky-5");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_5.classList.remove("sticky-5");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Header Search
  let header_search = document.querySelector(".header__search");
  let search_icon = document.querySelector("#search_icon");
  let search_close = document.querySelector("#search_close");
  if (header_search) {
    search_icon.addEventListener("click", function () {
      header_search.classList.add('open-search');
      search_icon.style.display = 'none';
      search_close.style.display = 'block';
    });

    search_close.addEventListener("click", function () {
      header_search.classList.remove('open-search');
      search_icon.style.display = 'block';
      search_close.style.display = 'none';
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 10. Roll Slider
  var roll_slider = new Swiper(".roll__slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
      1900: {
        slidesPerView: 8,
      },
    },
  });
  // 10. Roll Slider
  var roll_slider = new Swiper(".roll__slider2", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: false,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 11. Workflow Slider
  var workflow_slider = new Swiper(".workflow__slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 12. Team Slider
  var team_slider = new Swiper(".team__slider", {
    spaceBetween: 30,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 13. Testimonial Slider
  var testimonial_slider = new Swiper(".testimonial__slider", {
    spaceBetween: 0,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,

    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 14. Testimonial Slider 3
  var testimonial_slider_3 = new Swiper(".testimonial__slider-3", {
    spaceBetween: 0,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,

    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 15. Portfolio Slider 
  var total_portfolio_item = $('.portfolio__item-6').length;
  if (total_portfolio_item) {
    $('.portfolio__total').html(total_portfolio_item);
  }

  $(document).on('scroll', function () {
    $('.portfolio__item-6').each(function () {
      if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {

        var item_num = $(this).data('portfitem');
        $('.portfolio__current').html(item_num);
        $(this).addClass('active').siblings().removeClass('active');
      }
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 16. Service 1
  $('.service__list a:nth-child(1)').addClass('active').siblings().removeClass('acitve');

  $('.service__item').on('mousemove', function (e) {
    var service_id = $(this).data("service");

    $('.service__img.img-' + service_id).addClass('active').siblings().removeClass('active');
    $('.shape-box-' + service_id).addClass('current').siblings().removeClass('current');

    if (service_id != 1) {
      $('.service__list a:nth-child(1)').removeClass('active');
    }
  });


  $('.service__item').on('mouseout', function (e) {
    var service_id = $(this).data("service");

    $('.service__list a:nth-child(' + service_id + ')').addClass('active').siblings().removeClass('active');
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 17. Counter
  const about_counter = window.counterUp.default
  const about_cb = entries => {

    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        about_counter(el, {
          duration: 1000,
          delay: 16,
        })
        el.classList.add('is-visible')
      }
    })
  }

  const IO = new IntersectionObserver(about_cb, {
    threshold: 1
  })

  const els = document.querySelectorAll('.counter__number');
  els.forEach((el) => {
    IO.observe(el)
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 18. Button Hover Animation
  $('.btn-hover').on('mouseenter', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
      top: y,
      left: x
    });
  });

  $('.btn-hover').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
      top: y,
      left: x
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 19. Button Move Animation
  const all_btns = gsap.utils.toArray(".btn_wrapper");
  if (all_btns.length > 0) {
    var all_btn = gsap.utils.toArray(".btn_wrapper");
  }
  else {
    var all_btn = gsap.utils.toArray("#btn_wrapper");
  }
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");
  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 20. Register GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 21. Config GSAP
  gsap.config({
    nullTargetWarn: false,
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 22. Service 6
  if (device_width > 1200) {
    gsap.to(".service__list-6", {
      scrollTrigger: {
        trigger: ".service__area-6",
        pin: ".service__list-6",
        pinSpacing: true,
        start: "top top",
        end: "bottom bottom"
      }
    })

    gsap.to(".service__image-wrap", {
      scrollTrigger: {
        trigger: ".service__area-6",
        pin: ".mid-content",
        pinSpacing: true,
        start: "top top",
        end: "bottom bottom",
        markers: false
      }
    })

    let service_images = gsap.utils.toArray(".service__image")
    let service_imagess = gsap.utils.toArray(".service__image img")
    let service_items = gsap.utils.toArray(".service__item-6")

    if (service_items) {
      service_items.forEach((image, i) => {
        console.log(service_images[i].img)
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            scrub: 1,
            start: "top top-=600",
            markers: false,
          }
        });
        tl.to(service_images[i], {
          zIndex: "1",
        })
        tl.to(service_imagess[i], {
          opacity: 0,
          duration: 1,
          scale: 1.2,
          ease: "power4.out"
        }, "-=1")
      })
    }

    let navItems = gsap.utils.toArray(".service__list-6 li a")
    if (navItems) {
      navItems.forEach((nav) => {
        nav.addEventListener("click", (e) => {
          e.preventDefault();
          const ids = nav.getAttribute("href")
          gsap.to(window, { duration: 0.5, scrollTo: ids, ease: "power4.out" });
        })
      })
    }

    // Active Nav
    $(document).on('scroll', function () {
      $('.service__item-6').each(function () {
        if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
          var sec_id = $(this).data('secid');

          $('.service__list-6 li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
        }
      });
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 23. Choose Section
  if (device_width > 1200) {

    var workflow_section_3 = document.querySelector('.workflow__wrapper-3');
    if (workflow_section_3) {

      let duration = 1,
        sections = gsap.utils.toArray(".wf_panel"),
        sectionIncrement = duration / (sections.length - 1),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".workflow__wrapper-3",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=5000"
          }
        });

      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: duration,
        ease: "none"
      });

      sections.forEach((section, index) => {
        let tween = gsap.from(section, {
          opacity: 0,
          scale: 0.6,
          duration: 0.5,
          force3D: true,
          paused: true
        });
        addSectionCallbacks(tl, {
          start: sectionIncrement * (index - 0.99),
          end: sectionIncrement * (index + 0.99),
          onEnter: () => tween.play(),
          onLeave: () => tween.reverse(),
          onEnterBack: () => tween.play(),
          onLeaveBack: () => tween.reverse()
        });
        index || tween.progress(1);
      });

      function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
        let trackDirection = animation => {
          let onUpdate = animation.eventCallback("onUpdate"),
            prevTime = animation.time();
          animation.direction = animation.reversed() ? -1 : 1;
          animation.eventCallback("onUpdate", () => {
            let time = animation.time();
            if (prevTime !== time) {
              animation.direction = time < prevTime ? -1 : 1;
              prevTime = time;
            }
            onUpdate && onUpdate.call(animation);
          });
        },
          empty = v => v;
        timeline.direction || trackDirection(timeline);
        start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
        end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
      }
    }
  }
  /////////////////////////////////////////////////////


  if (device_width > 100) {

    /////////////////////////////////////////////////////
    // 24. Portfolio 5 Animation 
    let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
      clamp = gsap.utils.clamp(-15, 15);
    /* 
    const smoother = ScrollSmoother.create({
      smooth: 1.35,
      effects: device_width < 1025 ? false : true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
      onUpdate: self => skewSetter(clamp(self.getVelocity() / -80)),
      onStop: () => skewSetter(0)
    });
    */

    /////////////////////////////////////////////////////


    ///////////////////////////////////////////////////// 
    // 25. Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 26. Title Animation Top

    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 27. Text Animation
    let splitTextLines = gsap.utils.toArray(".text-anim p");

    splitTextLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          duration: 2,
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 28. Text Animation Top
    let text_anim_top = gsap.utils.toArray(".text-anim-top");

    text_anim_top.forEach(splitTextLine2 => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine2,
          start: 'top 100%',
          toggleActions: 'play none play reset'
        }
      });

      const itemSplitted = new SplitText(splitTextLine2, { type: 'words' }),
        textNumWords = itemSplitted.words.length;

      gsap.delayedCall(0.05, function () {
        for (var i = 0; i < textNumWords; i++) {
          tl.from(itemSplitted.words[i], 1, { force3D: true, scale: Math.random() > 0.5 ? 0 : 2, opacity: 0 }, Math.random());
        }
      });
    });
    /////////////////////////////////////////////////////
  }



  jQuery(document).ready(function () {
    /////////////////////////////////////////////////////
    // 29. Offcanvas Menu
    $('.offcanvas__menu').meanmenu({
      meanScreenWidth: "5000",
      meanMenuContainer: '.offcanvas__menu-wrapper',
      meanMenuCloseSize: '36px',
    });
    /////////////////////////////////////////////////////
  });


  /////////////////////////////////////////////////////
  // 30. Service 3
  const serviceImgItem = document.querySelectorAll(".service__item-3");

  function followImageCursor(event, serviceImgItem) {
    const contentBox = serviceImgItem.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  serviceImgItem.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(followImageCursor(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 31. Folks animation
  let endTl = gsap.timeline({
    repeat: -1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px'
    }
  });
  gsap.set('.end', {
    opacity: 0
  });
  gsap.to('.end', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px',
      once: true
    }
  });
  let mySplitText = new SplitText(".end", { type: "words,chars" });
  let chars = mySplitText.chars;
  let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
  endTl.to(chars, {
    duration: 0.5,
    scaleY: 0.6,
    ease: "power3.out",
    stagger: 0.04,
    transformOrigin: 'center bottom'
  });
  endTl.to(chars, {
    yPercent: -20,
    ease: "elastic",
    stagger: 0.03,
    duration: 0.8
  }, 0.5);
  endTl.to(chars, {
    scaleY: 1,
    ease: "elastic.out(2.5, 0.2)",
    stagger: 0.03,
    duration: 1.5
  }, 0.5);
  endTl.to(chars, {
    color: (i, el, arr) => {
      return endGradient(i / arr.length).hex();
    },
    ease: "power2.out",
    stagger: 0.03,
    duration: 0.3
  }, 0.5);
  endTl.to(chars, {
    yPercent: 0,
    ease: "back",
    stagger: 0.03,
    duration: 0.8
  }, 0.7);
  endTl.to(chars, {
    color: '#c9f31d',
    duration: 1.4,
    stagger: 0.05
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 32. Menu Text Animation
  document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

  setTimeout(() => {
    var menu_text = document.querySelectorAll(".menu-text span")
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""));
      let new_size = parseInt(size_in_number / 3)
      new_size = new_size + "px"
      if (item.innerHTML == " ") {
        item.style.width = new_size
      }
    })
  }, 1000)
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 33. Main Portfolio Sticky
  ScrollTrigger.create({
    trigger: ".portfolio__wrapper-6",
    start: "top top",
    end: "bottom bottom",
    pin: ".portfolio__title-wrap-6",
    pinSpacing: false,
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 34. Hero 3 Animation
  const radio_buttons = document.querySelector("#video_check");
  const video_start = document.querySelector(".hero__area-3");

  if (radio_buttons) {
    radio_buttons.addEventListener('click', function () {
      let video = document.querySelector(".video-title")
      let videoClose = document.querySelector(".video-title.close-video-title")
      if (radio_buttons.checked) {
        document.querySelector(".wrapper").style.zIndex = "1";
        video.style.display = "none";
        videoClose.style.display = "block";
        video_start.classList.add('start-video');
        document.querySelector('.header__area-3').classList.add('bg-white');

      }
      else {
        document.querySelector(".wrapper").style.zIndex = "999";
        video.style.display = "block";
        videoClose.style.display = "none";
        video_start.classList.remove('start-video');
        document.querySelector('.header__area-3').classList.remove('bg-white');
      }
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 35. Home Page 2 Animations
  let tHero = gsap.timeline()

  let heading_title = new SplitText(".sec-title-3", { type: "chars" })
  let heading_char = heading_title.chars

  tHero.from(heading_char, {
    rotate: 20,
    ease: "back.out",
    opacity: 0,
    duration: 2,
    stagger: 0.1
  })

  tHero.from(".hero2-shape img", {
    xPercent: -100,
    duration: 1,
  }, '-=6.5')

  tHero.from(".hero__text-2 p", {
    opacity: 0,
    x: -30,
    duration: 1.5
  }, '-=5')

  var hero_bts = document.querySelector(".hero__text-2 .btn_wrapper")
  if (hero_bts) {
    var hero_btn = document.querySelector(".hero__text-2 .btn_wrapper")
  }
  else {
    var hero_btn = document.querySelector(".hero__text-2 #btn_wrapper")
  }
  tHero.from(hero_btn, {
    opacity: 0,
    y: -70,
    ease: "bounce",
    duration: 1.5
  }, '-=5')

  // All Buttons 
  let arr1 = gsap.utils.toArray("#btn_wrapper")
  let arr2 = gsap.utils.toArray(".btn_wrapper")
  const all_buttons = arr1.concat(arr2);

  all_buttons.forEach((btn) => {
    if (!(btn.classList.contains("hero__button"))) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      })
    }
  })

  let imageTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about__img-2",
      start: "top bottom",
      markers: false,
      scrub: 1,
      end: "bottom center"
    }
  })

  // Image pin 
  imageTl.to(".about__img-2 img", {
    scale: 1.15,
    duration: 1,
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 36. Award Animation
  let award_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".award__text",
      start: "top center+=150",
    }
  })

  gsap.set(".award__text", {
    opacity: 0,
    y: -500,
  })
  award_timeline.to(".award__text", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "bounce",
  })

  gsap.set(".award__text-2", { opacity: 0, y: -500 })

  award_timeline.to(".award__text-2", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "bounce"
  }, "-=1.5")

  award_timeline.to(".award__text", {
    x: -100,
    duration: 2,
  }, "-=1")
  award_timeline.to(".award__text-2", {
    x: -100,
    duration: 2,
  }, "-=1")
  award_timeline.to(".award__text", {
    x: 0,
    duration: 2,
  }, "-=1")
  award_timeline.to(".award__text-2", {
    x: 0,
    duration: 2,
  }, "-=1")
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 38. Portfolio Animation
  if (device_width > 767) {
    let portfolioline = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio__area",
        start: "top center-=200",
        pin: ".portfolio__text",
        end: "bottom bottom+=80",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      }
    })

    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1
    })
    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1
    })
    portfolioline.to(".portfolio__text", {
      scale: 1,
      duration: 1
    }, "+=2")
  }


  let portfolio_lists = gsap.utils.toArray(".portfolio__item")
  portfolio_lists.forEach((portfolio, i) => {
    gsap.set(portfolio, { opacity: 0.7 })
    let t1 = gsap.timeline()

    t1.set(portfolio, {
      position: "relative",
    })
    t1.to(portfolio, {
      scrollTrigger: {
        trigger: portfolio,
        scrub: 2,
        duration: 1.5,
        start: "top bottom+=100",
        end: "bottom center",
        markers: false
      },
      scale: 1,
      opacity: 1,
      rotateX: 0,
    })
  });

  gsap.to(".bg_image img", {
    xPercent: -18,
    scrollTrigger: {
      trigger: ".portfolio__area",
      start: "top top",
      end: "bottom center",
      pin: ".bg_image",
      scrub: 3
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 39. Portfolio Slider 2
  var portfolio_slider = new Swiper(".portfolio__slider-2", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (i, className) {
        return `
        <button class="${className}">
          <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
        </button>
      `;
      }
    }
  });

  var portfolio_project_thumbs = new Swiper(".portfolio__project-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
  });
  var portfolio_project = new Swiper(".portfolio__project-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pp-next",
      prevEl: ".pp-prev",
    },
    thumbs: {
      swiper: portfolio_project_thumbs,
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 40. Portfolio Slider 3
  var portfolio_slider_3 = new Swiper(".portfolio__slider-3", {
    speed: 1500,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".pp-next",
      prevEl: ".pp-prev",
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 41. Image Moving Animations

  // Service Page 
  let image_list = [".solution__wrapper img"]
  imageMoving(".solution__area", image_list)

  // Home Page Client
  imageMoving(".testimonial__area", ".testimonial__img img")

  // Testimonial 3
  imageMoving(".testimonial__area-3", ".testimonial__area-3 img")

  // Image Moving with Cursor Function
  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = innerHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              y: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              y: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  /////////////////////////////////////////////////////




  imageMovingPortfolio(".portfolio-section", ".portfolio__hero img")

  // Image Moving with Cursor Function
  function imageMovingPortfolio(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = innerHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 60,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -60,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              scale: 1.15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              scale: 1,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }



  /////////////////////////////////////////////////////
  // 42. Counter Animation
  gsap.set(".counter_animation .counter__anim", { y: -100, opacity: 0, })
  if (device_width < 1023) {
    const counterArray = gsap.utils.toArray(".counter_animation .counter__anim")
    counterArray.forEach((item, i) => {
      let counterTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      counterTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "bounce",
        duration: 1.5,
      })
    })
  }
  else {

    gsap.to(".counter_animation .counter__anim", {
      scrollTrigger: {
        trigger: ".counter_animation",
        start: "top center+=300",
      },
      y: 0,
      opacity: 1,
      ease: "bounce",
      duration: 1.5,
      stagger: {
        each: 0.3,
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 43. Workflow Slider Animation | animation__fade
  gsap.set(".fade_left", { x: -20, opacity: 0, })
  gsap.to(".fade_left", {
    scrollTrigger: {
      trigger: ".fade_left",
      start: "top center+=300",
    },
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1,
    stagger: {
      each: 0.2,
    }
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 44. Workflow Slider Animation 2 |  fade_bottom
  gsap.set(".fade_bottom", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom", {
      scrollTrigger: {
        trigger: ".fade_bottom",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 45. Blog animation 
  gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 46. Blog animation 2
  gsap.set(".blog__animation .blog__item-2", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item-2")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item-2", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item-2",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 47. Blog Animation 3
  gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item-3")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item-3", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item-3",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 48. Zoom In Animation
  gsap.set(".zoom_in", { opacity: 0, y: 30, scale: 0.5, });
  gsap.to(".zoom_in", {
    scrollTrigger: {
      trigger: ".zoom_in",
      start: "top center+=200",
      markers: false
    },
    y: 0,
    opacity: 1,
    scale: 1,
    ease: "power2.out",
    duration: 1,
    stagger: {
      each: 0.2
    }
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 49. Service 3 Animation 
  let service__items_3 = gsap.utils.toArray(".service_animation")
  let service__items_heading = gsap.utils.toArray(".service_animation h3")
  let service__items_content = gsap.utils.toArray(".service_animation .service__content-3")

  service__items_3.forEach((service_item, i) => {
    gsap.set([service__items_heading[i], service__items_content[i]], {
      x: -30,
      opacity: 0,
    })

    let service3_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: service_item,
        start: "top center+=200",
        markers: false
      }
    })

    service3_timeline.to(service__items_heading[i], {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.2
      }
    })
    service3_timeline.to(service__items_content[i], {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.2
      }
    }, "-=1")
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////  
  // 50. Testimonial 2 Animation 
  gsap.set(".testimonial__inner-2", {
    opacity: 0,
    x: -100
  });

  gsap.to(".testimonial__inner-2", {
    scrollTrigger: {
      trigger: ".testimonial__slider-wrapper-2",
      start: "top center+=100",
      end: "bottom bottom",
    },
    opacity: 1,
    x: 0,
    duration: 1
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 51. Testimonial 3 Image Animation
  gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

  gsap.to(".animation_image_zoom img", {
    scrollTrigger: {
      trigger: ".testimonial__area-3",
      start: "top center+=200",
      markers: false
    },
    opacity: 1,
    scale: 1,
    x: 20,
    ease: "power2.out",
    duration: 2.5,
    stagger: {
      each: 0.3
    }
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 52. Pricing Table Animation 
  let pricing_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".price__table",
      start: "top center",
    }
  })

  gsap.set(".animation_from_bottom", { yPercent: 50 })

  pricing_timeline.to(".animation_from_bottom", {
    yPercent: 0,
    duration: 2,
    ease: "power4.out",
  })

  gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 })
  pricing_timeline.to(".animation_from_top", {
    yPercent: 0,
    duration: 2,
    opacity: 1,
    ease: "power4.out",
  }, "-=2")
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 53. Service 2 Animation 
  let animation__services2 = gsap.utils.toArray(".animation__service-2 .service__item-2")
  gsap.set(animation__services2, {
    opacity: 0,
    x: -30,
  })

  if (animation__services2) {
    if (device_width < 1023) {
      animation__services2.forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false
          },
          opacity: 1,
          x: 0,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4
          }
        })
      })
    }
    else {
      gsap.to(".animation__service-2 .service__item-2", {
        scrollTrigger: {
          trigger: ".animation__service-2",
          start: "top center+=200",
          markers: false
        },
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4
        }
      })
    }
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 54. Hero 1 Animation
  // if (document.querySelector(".animation__hero_one")) {
  //   let heroOnetl = gsap.timeline()
  //   gsap.set(".animation__hero_one .experience", {
  //     y: 50,
  //     opacity: 0,
  //   })

  //   // animation__hero_one a
  //   let split_char_btn = new SplitText(".animation__hero_one a", { type: "chars, words" })
  //   heroOnetl.from(split_char_btn.words, { duration: 1, x: -50, opacity: 0, autoAlpha: 0, stagger: 0.1 });

  //   //hero__title
  //   let split_char_hero = new SplitText(".hero__title", { type: "chars, words" })
  //   heroOnetl.from(split_char_hero.chars, { duration: 1, x: 70, opacity: 0, autoAlpha: 0, stagger: 0.1 }, '-=1');

  //   //hero__Sub_title
  //   let split_char_hero_subtitle = new SplitText(".animation__hero_one .hero__sub-title", { type: "words" })
  //   heroOnetl.from(split_char_hero_subtitle.words, { duration: 1, x: 50, opacity: 0, autoAlpha: 0, stagger: 0.07 }, '-=1.5');

  //   // heroOnetl.to(".animation__hero_one .hero__sub-title", {
  //   //   y: 0,
  //   //   opacity: 1,
  //   //   duration: 2,
  //   //   ease: "power2.out"
  //   // }, '-=1.5')

  //   heroOnetl.to(".animation__hero_one .experience", {
  //     y: 0,
  //     opacity: 1,
  //     duration: 2,
  //     ease: "power2.out"
  //   }, '-=1.5')
  // }












  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 55. Service 1 Animation
  let home1_services = gsap.utils.toArray(".animation_home1_service")
  let service__number = gsap.utils.toArray(".animation_home1_service .service__number span")
  let service__title = gsap.utils.toArray(".animation_home1_service .service__title")
  let service__text = gsap.utils.toArray(".animation_home1_service .service__text p")
  let service__link = gsap.utils.toArray(".animation_home1_service .service__link p")

  home1_services.forEach((service, i) => {
    gsap.set([service__number[i], service__title[i], service__text[i], service__link[i]], { opacity: 0, x: -50 })

    let home1ServiceTl = gsap.timeline({
      scrollTrigger: {
        trigger: service,
        start: "top center+=300",
        end: "bottom bottom",
        markers: false
      },
    })

    home1ServiceTl.to(service__number[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    })
    home1ServiceTl.to(service__title[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    }, "-=1")
    home1ServiceTl.to(service__text[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    }, "-=1")
    home1ServiceTl.to(service__link[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    }, "-=1")
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////  
  // 56. Features 2 Animation 
  let animation__feature2 = gsap.utils.toArray(".animation__feature2 .feature__item")
  if (device_width < 1023) {
    animation__feature2.forEach((item, i) => {
      gsap.set(item, { opacity: 0, y: 60 })
      let featured2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200"
        }
      })
      featured2Timeline.to(item, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out"
      })
    })
  }
  else {
    gsap.set(".animation__feature2 .feature__item", { opacity: 0, y: 40 })
    gsap.to(".animation__feature2 .feature__item", {
      scrollTrigger: {
        trigger: ".animation__feature2",
        start: "top center+=200"
      },
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      stagger: 0.3
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 57. Portfolio 6 Animation 
  const portfolio_listss = gsap.utils.toArray(".portfolio__item-6 img")
  if (portfolio_listss) {
    portfolio_listss.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center",
          scrub: 1.5,
        },
        scale: 2.5,
        duration: 1,
      })
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 58. Portfolio 5 Border
  let total_portfolio_items = document.querySelectorAll(".portfolio__item-5")
  let total_row = Math.ceil(total_portfolio_items.length / 3)

  let border_row = document.getElementById("items__border")
  for (let i = 0; i < total_row; i++) {
    border_row.innerHTML += '<span class="sec-line"></span> '
  }

  let row_height = 100 / total_row
  var total_lines = document.querySelectorAll("#items__border .sec-line")

  total_lines.forEach((item, i) => {
    let counter = i + 1
    item.style.top = `${row_height * counter}%`;
    item.style.opacity = 1;
  })
  /////////////////////////////////////////////////////



  // Charchater Come Animation 
  let char_come = document.querySelectorAll(".animation__char_come")

  char_come.forEach((char_come) => {
    let split_char = new SplitText(char_come, { type: "chars, words" })
    gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.05 });
  })


  // Charchater Come long Animation 
  let char_come_long = document.querySelectorAll(".animation__char_come_long")

  char_come_long.forEach((char_come) => {
    let split_char = new SplitText(char_come, { type: "chars, words" })
    gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.15 });
  })


  // Charchater Up Animation 
  let char_up = document.querySelector(".animation__char_up")
  let split_char_up = new SplitText(char_up, { type: "chars, words" })
  gsap.from(split_char_up.chars, { duration: 1, y: 15, autoAlpha: 0, stagger: 0.05 });



  // Service Page hero Animation 
  let word_up = document.querySelector(".animation__word_up")
  let split_word_up = new SplitText(word_up, { type: "words", position: "absolute" })
  gsap.from(split_word_up.words, { duration: 1, y: 50, autoAlpha: 0, stagger: 0.05 });

  // Service Page hero Animation   
  let word_come = document.querySelectorAll(".animation__word_come")
  word_come.forEach((word_come) => {
    let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
    gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
  })

  // Service Page hero Animation   
  let word_come_long = document.querySelectorAll(".animation__word_come_long")
  word_come_long.forEach((word_come_long) => {
    let split_word_come_long = new SplitText(word_come_long, { type: "chars words", position: "absolute" })
    gsap.from(split_word_come_long.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.5 });
  })


  // Home page Hero Animation 

  /////////////////////////////////////////////////////
  //  Service Page Animation 
  let animation__service_page = gsap.utils.toArray(".animation__service_page")
  if (animation__service_page) {
    animation__service_page.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center+=20%",
          markers: false,
        },
        opacity: 0,
        x: -50,
        ease: "power2.out",
        duration: 2,
      })
    })

  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 59. Portfolio Main Slider
  var breakpoint = window.matchMedia('( max-width: 1300px )');
  var pp_main_wrap = document.querySelector('.portfolio__main-slider');

  if (pp_main_wrap) {
    var enableSwiper = function () {
      var pp_main = new Swiper(".portfolio__main-slider", {
        allowTouchMove: false,
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    };

    var breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (pp_main !== undefined) pp_main.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 60. Portfolio Slider 6
  var portfolio_slider_6 = new Swiper(".portfolio__slider-4", {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 90,
      },
      1400: {
        slidesPerView: 2,
        spaceBetween: 120,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 61. Testimonial Slider 4

  var testimonial_slider_4 = new Swiper(".testimonial__slider-4", {
    spaceBetween: 20,
    loop: true,
    freemode: true,
    slidesPerView: 3,
    speed: 2000,
    pagination: {
      el: ".pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
  /////////////////////////////////////////////////////


  // Switcher JS
  $('#switcher_open').on('click', function () {
    $(this).hide();
    $('#switcher_close').show();
    $('.switcher__icon').css('right', '280px');
    $('.switcher__items').css({
      'right': '0',
    });
  });

  $('#switcher_close').on('click', function () {
    $(this).hide();
    $('#switcher_open').show();
    $('.switcher__icon').css('right', '0');
    $('.switcher__items').css({
      'right': '-280px',
    });
  });

  // Mode JS
  $('.mode-type button').on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active');

    var mode_val = $('.mode-type button.active').attr('data-mode');
    if (mode_val == 'dark') {
      $('body').addClass('dark');
    } else {
      $('body').removeClass('dark');
    }
  });

  // Language JS
  $('.lang_dir button').on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active');

    var dir_val = $('.lang_dir button.active').attr('data-mode');
    if (dir_val == 'rtl') {
      $('body').addClass('dir-rtl');
    } else {
      $('body').removeClass('dir-rtl');
    }
  });

  // Cursor JS
  $('#cursor_style').on('change', function () {
    var cursor_val = $(this).val();

    if (cursor_val == '1') {
      $('.cursor1').hide();
      $('.cursor2').hide();
    } else {
      $('.cursor1').show();
      $('.cursor2').show();
    }
  });


  /////////////////////////////////////////////////////
  // 62. Team 7
  const team_item_7 = document.querySelectorAll(".team__item-7");

  function teamImageAnimation(event, team_item_7) {
    const contentBox = team_item_7.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    team_item_7.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  team_item_7.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(teamImageAnimation(event, item), 1000);
    });
  });
  ///////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 63. Portfolio Slider 7
  var portfolio_slider_7 = new Swiper(".portfolio__slider-7", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 64. Header 7
  let header_bg_7 = document.querySelector(".header__area-7");
  if (header_bg_7) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_7.classList.add("sticky-7");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_7.classList.remove("sticky-7");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 65. Service 7 Animation 
  let animation_services_7 = gsap.utils.toArray(".animation_service_7 .service__item-7")
  gsap.set(animation_services_7, {
    opacity: 0,
    x: -30,
  })

  if (animation_services_7) {
    if (device_width < 1023) {
      animation_services_7.forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false
          },
          opacity: 1,
          x: -0,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4
          }
        })
      })
    }
    else {
      gsap.to(".animation_service_7 .service__item-7", {
        scrollTrigger: {
          trigger: ".animation_service_7",
          start: "top center+=200",
          markers: false
        },
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4
        }
      })
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 65. Service 7 Animation 
  let animation_workflow_6 = gsap.utils.toArray(".animation_workflow_6 .workflow__item-4")
  if (animation_workflow_6) {
    if (device_width < 1023) {
      animation_workflow_6.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false
          },
          opacity: 0,
          x: -30,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4
          }
        })
      })
    }
    else {
      gsap.from(".animation_workflow_6 .workflow__item-4", {
        scrollTrigger: {
          trigger: ".animation_workflow_6",
          start: "top center+=200",
          markers: false
        },
        opacity: 0,
        x: -30,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4
        }
      })
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 66. Blog Animation 3
  gsap.set(".blog__animation .blog__item-4", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item-4")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item-4", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item-4",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////

  // Home One Hero Animation 
  let HomeDigital = gsap.timeline()
  let HomeDigitalImage = gsap.timeline()

  let hero7_thum_anim = document.querySelector(".hero7__thum-anim")
  if (hero7_thum_anim) {
    let hero7_thumb_1 = document.querySelector(".image-1")
    let hero7_thumb_2 = document.querySelector(".image-2")
    let hero7_thumb_3 = document.querySelector(".image-3")
    let hero7_thumb_4 = document.querySelector(".image-4")

    gsap.from(".image-1", {
      x: 65,
      yPercent: 100,
      opacity: 0,
      duration: 2,
      delay: 1
    })

    gsap.from(".image-2", {
      delay: 1.5,
      scale: 0,
      duration: 1.5
    })

    gsap.from(".image-3", {
      x: 65,
      yPercent: -100,
      duration: 2,
      opacity: 0,
      delay: 1
    })
    gsap.from(".image-4", {
      xPercent: -100,
      yPercent: -100,
      duration: 2,
      opacity: 0,
      delay: 1
    })

  }


  // Charchater Come long Animation 
  let mark = document.querySelector(".hero__area-3 .title-left")
  let eting = document.querySelector(".hero__area-3 .title-right")
  let hero__text_animation = document.querySelector(".hero__text-animation")


  let split_creatives = new SplitText(mark, { type: "chars" })
  let split_solutions = new SplitText(eting, { type: "chars" })
  let split_text_animation = new SplitText(hero__text_animation, { type: "chars words" })

  HomeDigital.from(split_creatives.chars, { duration: 2, x: 100, autoAlpha: 0, stagger: 0.2 });
  HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 }, "-=1");
  HomeDigital.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");



  // Home page Hero Animation 
  let homeCreative = gsap.timeline()

  // Charchater Come long Animation 
  let creative = document.querySelector(".service__hero-right-2 .creative")
  let solution = document.querySelector(".service__hero-right-2 .solution")
  let heroContent = document.querySelector(".service__hero-right-2 .animate_content")


  let split_creative = new SplitText(creative, { type: "chars" })
  let split_solution = new SplitText(solution, { type: "chars" })
  let split_herocontent = new SplitText(heroContent, { type: "chars words" })

  homeCreative.from(split_creative.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
  homeCreative.from(split_solution.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }, "-=1.5");
  homeCreative.from(split_herocontent.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");


  // Home page Hero Animation 
  gsap.set(".experience", {
    y: 50,
    opacity: 0,
  })
  let homeAgency = gsap.timeline()

  // Charchater Come long Animation 
  let hero__title = document.querySelector(".hero__title")
  let hero__subtitle = document.querySelector(".hero__sub-title")


  let split_hero__title = new SplitText(hero__title, { type: "chars" })
  let split_hero__subtitle = new SplitText(hero__subtitle, { type: "chars words" })

  homeAgency.from(split_hero__title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
  homeAgency.from(split_hero__subtitle.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");

  homeAgency.to(".experience", {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out"
  }, '-=1.5')



  // Home 6 Hero Animation 
  let homeStratup = gsap.timeline()

  // Charchater Come long Animation 
  let hero6_title = document.querySelector(".hero__six_anim .hero__title-6")
  let hero6_desc = document.querySelector(".hero__six_anim p")

  let hero6_button = document.querySelector(".hero__six_anim a")
  let hero6_image = document.querySelector(".hero__right-6 img")

  gsap.set(hero6_image, {
    opacity: 0,
    y: 50
  })
  gsap.set(hero6_button, {
    opacity: 0,
    y: 50
  })


  let split_hero6_title = new SplitText(hero6_title, { type: "chars" })
  let split_hero6_desc = new SplitText(hero6_desc, { type: "chars words" })

  homeStratup.from(split_hero6_title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
  homeStratup.from(split_hero6_desc.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
  homeStratup.to(hero6_button, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5")
  homeStratup.to(hero6_image, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1")



  /////////////////////////////////////////////////////
  // 67. Workflow Slider Animation |  fade_bottom 2
  gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_2")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_2", {
      scrollTrigger: {
        trigger: ".fade_bottom_2",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 68. Workflow Slider Animation 2 |  fade_bottom
  gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_3")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_3", {
      scrollTrigger: {
        trigger: ".fade_bottom_3",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 69. Workflow Slider Animation 2 |  fade_bottom
  gsap.set(".fade_bottom_4", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_4")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_4", {
      scrollTrigger: {
        trigger: ".fade_bottom_4",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 69. Workflow Slider Animation 2 |  fade_bottom_5
  gsap.set(".fade_bottom_5", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_5")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_5", {
      scrollTrigger: {
        trigger: ".fade_bottom_5",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  // HERO - 10
  var hero10 = new Swiper(".hero10_activition", {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 30,
    mousewheel: true,
    mousewheelControl: true,
    keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });


  // =========================================================
  // Image Hover
  const hover_title = document.querySelectorAll(".hover_wrap");

  if (hover_title) {
    function hoverImgFunc(event, hover_title) {
      const contentBox = hover_title.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    hover_title.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(hoverImgFunc(event, item), 1000);
      });
    });
  }
  // =========================================================


  // =====================================================================
  //  showcase 8 hover
  const hover_8_wrap = document.querySelectorAll(".hover_8_wrap a");
  const h8_wrap_len = hover_8_wrap.length;

  if (h8_wrap_len == 1) {
    function showCase8Func(event, hover_8_wrap) {
      const contentBox = hover_8_wrap[0].getBoundingClientRect();
      const dx = event.pageX;
      const dy = event.clientY - contentBox.y;
      document.querySelector('.hover_8_img').style.transform = `translate(${dx}px, ${dy}px)`;
    }
    hover_8_wrap[0].addEventListener("mousemove", (event) => {
      setInterval(showCase8Func(event, hover_8_wrap), 1000);
      document.querySelector('.hover_8_img').classList.add('active');
    });
    hover_8_wrap[0].addEventListener("mouseout", (event) => {
      document.querySelector('.hover_8_img').classList.remove('active');
    });
  }

  if (h8_wrap_len == 2) {
    function showCase8Func(event, hover_8_wrap) {
      const contentBox = hover_8_wrap[0].getBoundingClientRect();
      const dx = event.pageX;
      const dy = event.clientY - contentBox.y;
      document.querySelector('.hover_8_img').style.transform = `translate(${dx}px, ${dy}px)`;

      console.log(event.pageX);
    }
    hover_8_wrap[0].addEventListener("mousemove", (event) => {
      setInterval(showCase8Func(event, hover_8_wrap), 1000);
      document.querySelector('.hover_8_img').classList.add('active');
    });
    hover_8_wrap[0].addEventListener("mouseout", (event) => {
      document.querySelector('.hover_8_img').classList.remove('active');
    });

    function showCase8Func2(event, hover_8_wrap) {
      const contentBox = hover_8_wrap[1].getBoundingClientRect();
      const dx = event.pageX;
      const dy = event.clientY - contentBox.y;
      document.querySelector('.hover_8_img_2').style.transform = `translate(${dx}px, ${dy}px)`;
    }
    hover_8_wrap[1].addEventListener("mousemove", (event) => {
      setInterval(showCase8Func2(event, hover_8_wrap), 1000);
      document.querySelector('.hover_8_img_2').classList.add('active');
    });
    hover_8_wrap[1].addEventListener("mouseout", (event) => {
      document.querySelector('.hover_8_img_2').classList.remove('active');
    });
  }
  // =================================================================


  // Home 9
  let slider_9_image = document.querySelector(".slider9_images");

  if (slider_9_image) {
    document.querySelector(".slider9_images").style.display = 'none';
    var cols = 1;
    if (device_width > 767) {
      cols = 3;
    } else {
      cols = 1;
    }

    const main = document.getElementById("main");
    let parts = [];

    var content_list = document.querySelectorAll('.slide9_content');
    var title_list = document.querySelectorAll('.slide9_content h2');


    var content_list = document.querySelectorAll('.slide9_content p');

    var images_listss = document.querySelectorAll('.slider9_image img');
    var images = []
    var titles = []
    var contents = []

    images_listss.forEach((item) => {
      let srcs = item.getAttribute("src")
      images.push(srcs)
    })
    title_list.forEach((item) => {
      let title = item.innerHTML
      titles.push(title)
    })
    content_list.forEach((item) => {
      let content = item.innerHTML
      contents.push(content)
    })


    let current = 0;
    let playing = false;


    for (let col = 0; col < cols; col++) {
      let part = document.createElement("div");
      part.className = "part";
      let el = document.createElement("a");
      el.className = "section";
      el.href = "http://127.0.0.1:5500/service-details.html"

      let img = document.createElement("img");
      img.src = images[current];
      el.appendChild(img);

      let h2 = document.createElement("h2");
      h2.innerHTML = titles[current];
      el.appendChild(h2);

      let p = document.createElement("p");
      p.innerHTML = contents[current];
      el.appendChild(p);


      part.style.setProperty("--x", (-100 / cols) * col + "vw");
      part.appendChild(el);
      main.appendChild(part);
      parts.push(part);
    }

    // Cursor Pointer and Circle event
    function lerp(start, end, amount) {
      return (1 - amount) * start + amount * end;
    }

    const cursor = document.createElement("div");
    cursor.className = "cursor";

    const cursorF = document.createElement("div");
    cursorF.className = "cursor-f";
    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;
    let size = 8;
    let sizeF = 36;
    let followSpeed = 0.16;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorF);

    if ("ontouchstart" in window) {
      cursor.style.display = "none";
      cursorF.style.display = "none";
    }

    cursor.style.setProperty("--size", size + "px");
    cursorF.style.setProperty("--size", sizeF + "px");

    window.addEventListener("mousemove", function (e) {
      pageX = e.clientX;
      pageY = e.clientY;
      cursor.style.left = e.clientX - size / 2 + "px";
      cursor.style.top = e.clientY - size / 2 + "px";
    });

    function loop() {
      cursorX = lerp(cursorX, pageX, followSpeed);
      cursorY = lerp(cursorY, pageY, followSpeed);
      cursorF.style.top = cursorY - sizeF / 2 + "px";
      cursorF.style.left = cursorX - sizeF / 2 + "px";
      requestAnimationFrame(loop);
    }
    loop();

    // Rollover UP & Down Mouse Wheel Navigation
    let animOptions = {
      duration: 2.3,
      ease: Power4.easeInOut
    };

    function go(dir) {
      if (!playing) {
        playing = true;
        if (current + dir < 0) current = images.length - 1;
        else if (current + dir >= images.length) current = 0;
        else current += dir;

        function up(part, next) {
          part.appendChild(next);
          gsap
            .to(part, { ...animOptions, y: -window.innerHeight })
            .then(function () {
              part.children[0].remove();
              gsap.to(part, { duration: 0, y: 0 });
            });
        }

        function down(part, next) {
          part.prepend(next);
          gsap.to(part, { duration: 0, y: -window.innerHeight });
          gsap.to(part, { ...animOptions, y: 0 }).then(function () {
            part.children[1].remove();
            playing = false;
          });
        }

        for (let p in parts) {
          let part = parts[p];
          let next = document.createElement("a");
          next.href = "http://127.0.0.1:5500/service-details.html"
          next.className = "section";
          let img = document.createElement("img");
          img.src = images[current];
          next.appendChild(img);

          let h2 = document.createElement("h2");
          h2.innerHTML = titles[current];
          next.appendChild(h2);

          let pa = document.createElement("p");
          pa.innerHTML = contents[current];
          next.appendChild(pa);



          if ((p - Math.max(0, dir)) % 2) {
            down(part, next);
          } else {
            up(part, next);
          }
        }
      }
    }

    //Press Up & Down Keyboard Arrow Event
    window.addEventListener("keydown", function (e) {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        go(1);
      } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        go(-1);
      }
    });

    // Cursor Invent Target Touches
    let startY;
    let endY;
    let clicked = false;

    function mousedown(e) {
      gsap.to(cursor, { scale: 4.5 });
      gsap.to(cursorF, { scale: 0.4 });

      clicked = true;
      startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
    }

    function mouseup(e) {
      gsap.to(cursor, { scale: 1 });
      gsap.to(cursorF, { scale: 1 });

      endY = e.clientY || endY;
      if (clicked && startY && Math.abs(startY - endY) >= 40) {
        go(!Math.min(0, startY - endY) ? 1 : -1);
        clicked = false;
        startY = null;
        endY = null;
      }
    }

    window.addEventListener("mousedown", mousedown, false);
    window.addEventListener("touchstart", mousedown, false);
    window.addEventListener(
      "touchmove",
      function (e) {
        if (clicked) {
          endY = e.touches[0].clientY || e.targetTouches[0].clientY;
        }
      },
      false
    );
    window.addEventListener("touchend", mouseup, false);
    window.addEventListener("mouseup", mouseup, false);

    //Mouse Wheel Scroll Transition
    let scrollTimeout;
    function wheel(e) {
      clearTimeout(scrollTimeout);
      setTimeout(function () {
        if (e.deltaY < -40) {
          go(-1);
        } else if (e.deltaY >= 40) {
          go(1);
        }
      });
    }
    window.addEventListener("mousewheel", wheel, false);
    window.addEventListener("wheel", wheel, false);

    let alls = document.querySelectorAll('#main .part');
    alls[0].classList.add('showed');
  }


  // Tilt JS
  let tilt = document.querySelectorAll(".wc-tilt");
  let tilt_2 = document.querySelectorAll(".wc-tilt-2");

  if (tilt) {
    VanillaTilt.init(document.querySelectorAll(".wc-tilt"), {
      max: 15,
      speed: 3000,
    });
  }

  if (tilt_2) {
    VanillaTilt.init(document.querySelectorAll(".wc-tilt-2"), {
      max: 10,
      speed: 3000,
    });
  }



  // Home 16
  var shocase_list_16 = document.querySelectorAll(".showcase__content-16");

  shocase_list_16.forEach((shocase16) => {
    gsap.to(shocase16, {
      scrollTrigger: {
        trigger: shocase16,
        pin: shocase16,
        pinSpacing: false,
        start: "top top",
        delay: 1
      }
    });
  });


  ////////////////////////////////////////////////
  // Home 8
  let imageTl_8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio__big",
      start: "top top+=90",
      pin: true,
      markers: false,
      scrub: 1,
      pinSpacing: false,
      end: "bottom bottom+=150",
    }
  });
  imageTl_8.to(".portfolio__big-inner", {
    width: "100%",
  });
  ///////////////////////////////////////////////////


  //////////////////////////////////////////////////
  // Home 12
  const portfImgItem12 = document.querySelectorAll(".portfolio__item-12");

  function portfImageCursor(event, portfImgItem12) {
    const contentBox = portfImgItem12.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    portfImgItem12.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  portfImgItem12.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(portfImageCursor(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // Activate MixitUp
  let mixitup_17 = document.querySelector('.showcase-mixitup');
  if (mixitup_17) {
    var mixer = mixitup('.showcase-mixitup');
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // Home 17
  gsap.to(".showcase__menu-4", {
    scrollTrigger: {
      trigger: ".showcase__area-4",
      pin: ".showcase__menu-4",
      pinSpacing: false,
      start: "top top",
      end: "bottom center",
      markers: false,
      delay: 1
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  //
  let mainSliderSelector = '.main-slider',
    thumbSliderSelector = '.thumb-slider';

  // Main Slider
  let mainSliderOptions = {
    loop: true,
    speed: 1500,
    parallax: true,
    mousewheel: true,
    loopAdditionalSlides: 6,
    grabCursor: true,
    effect: "fade",
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

  // thumb Slider
  let thumbSliderOptions = {
    loop: true,
    loopAdditionalSlides: 5,
    speed: 1500,
    spaceBetween: 15,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    breakpoints: {
      200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  };
  let thumbSlider = new Swiper(thumbSliderSelector, thumbSliderOptions);

  mainSlider.controller.control = thumbSlider;
  thumbSlider.controller.control = mainSlider;

  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // Home 11
  let mainSliderSelector11 = '.main-slider11',
    thumbSliderSelector11 = '.thumb-slider11';

  // Main Slider
  let mainSliderOptions11 = {
    loop: true,
    speed: 1500,
    parallax: true,
    mousewheel: true,
    loopAdditionalSlides: 6,
    grabCursor: true,
    effect: "fade",
    watchSlidesProgress: true,
    direction: 'vertical',
  };
  let mainSlider11 = new Swiper(mainSliderSelector11, mainSliderOptions11);

  // thumb Slider
  let thumbSliderOptions11 = {
    loop: true,
    loopAdditionalSlides: 5,
    speed: 1500,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    breakpoints: {
      200: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  let thumbSlider11 = new Swiper(thumbSliderSelector11, thumbSliderOptions11);

  mainSlider11.controller.control = thumbSlider11;
  thumbSlider11.controller.control = mainSlider11;
  /////////////////////////////////////////////////////


  // Job Details
  if (device_width > 767) {
    gsap.to(".job__detail-sidebar", {
      scrollTrigger: {
        trigger: ".job__detail",
        pin: ".job__detail-sidebar",
        pinSpacing: false,
        start: "top top",
        end: "bottom center",
        markers: false,
        delay: 1
      }
    });
  }


  //////////////////////////////////////////////////
  // Woocommerce Hero Slider
  const woocommerce_hero = new Swiper('.woocomerce-active', {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.woocomerce__hero-next',
      prevEl: '.woocomerce__hero-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  //////////////////////////////////////////////////
  // Woocommerce Feature Slider
  const woocommerce_feature = new Swiper('.feature1-active', {
    speed: 2000,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-parrow',
      prevEl: '.swiper-button-narrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Feature Slider 2
  const woocommerce_feature_2 = new Swiper('.feature2-active', {
    speed: 2000,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-parrow',
      prevEl: '.swiper-button-narrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Category Slider
  const woocommerce_category = new Swiper('.category-active', {
    speed: 2000,
    slidesPerView: 9,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-parrow',
      prevEl: '.swiper-button-narrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 20
      },
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Brand Slider
  const woocommerce_brand = new Swiper('.woocomerce-brand-active', {
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    allowTouchMove: false,
    slidesPerView: 9,
    spaceBetween: 5,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Testimonial Slider
  const woocommerce_testimonial = new Swiper('.woocomerce-testimonial', {
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });


  /////////////////////////////////////////////////
  // Featured Products Animation
  gsap.set(".wc_feature_products .woocomerce__feature-product", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_feature_products .woocomerce__feature-product")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_feature_products .woocomerce__feature-product", {
      scrollTrigger: {
        trigger: ".wc_feature_products .woocomerce__feature-product",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // New Arrival Products Animation
  gsap.set(".new_arrival_products .woocomerce__feature-product", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".new_arrival_products .woocomerce__feature-product")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".new_arrival_products .woocomerce__feature-product", {
      scrollTrigger: {
        trigger: ".new_arrival_products .woocomerce__feature-product",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // You Missed Products Animation
  gsap.set(".missed_products .woocomerce__feature-product", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".missed_products .woocomerce__feature-product")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".missed_products .woocomerce__feature-product", {
      scrollTrigger: {
        trigger: ".missed_products .woocomerce__feature-product",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  // Category Products Animation
  gsap.set(".wc_category_products .woocomerce__category-item", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_category_products .woocomerce__category-item")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_category_products .woocomerce__category-item", {
      scrollTrigger: {
        trigger: ".wc_category_products .woocomerce__category-item",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Instagram Images Animation
  gsap.set(".wc_instagram_img .woocomerce__instagram-item", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_instagram_img .woocomerce__instagram-item")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_instagram_img .woocomerce__instagram-item", {
      scrollTrigger: {
        trigger: ".wc_instagram_img .woocomerce__instagram-item",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Single Product Images Animation
  gsap.set(".product_imgs img", { y: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".product_imgs img")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".product_imgs img", {
      scrollTrigger: {
        trigger: ".product_imgs img",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Single Product Content Animation
  gsap.set(".wc_slide_btm", { y: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_slide_btm")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_slide_btm", {
      scrollTrigger: {
        trigger: ".wc_slide_btm",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  //  Buttons 
  let all_buttons_wc = gsap.utils.toArray(".wc_btn_wrapper");

  all_buttons_wc.forEach((btn) => {
    if (!(btn.classList.contains("hero__button"))) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      })
    }
  })
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Shop color buttons 
  $("#color").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-colors").slideToggle("slow");
  });
  $("#price").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-price").slideToggle("slow");
  });
  $("#brand").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-brand").slideToggle("slow");
  });

  $("#sort").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-sort").slideToggle("slow");
  });

  $("#rating").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-rate").slideToggle("slow");
  });
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  let wc_width = screen.width;
  if (wc_width < 992) {
    $(".woocomerce__filtering-filtericon").click(function () {
      $(".woocomerce__shopsidebar").toggleClass("showed");
    });
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  var range_slider = $("#slider-range");

  if (range_slider.length > 0 && typeof $.fn.slider !== 'undefined') {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 6000,
      values: [0, 6000],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val(
      "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
    );
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  //
  if ($("#slider_range_2").length > 0 && typeof $.fn.slider !== 'undefined') {
    $("#slider_range_2").slider({
      range: true,
      min: 0,
      max: 6000,
      values: [0, 6000],
      slide: function (event, ui) {
        $("#amount_2").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount_2").val(
      "$" +
      $("#slider_range_2").slider("values", 0) +
      " - $" +
      $("#slider_range_2").slider("values", 1)
    );
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // increment / decrement 
  $(".counter__increment, .counter__decrement").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var $counter__input = $(this).parent().find(".counter__input");
    var $currentVal = parseInt($(this).parent().find(".counter__input").val());

    //Increment
    if ($currentVal != NaN && $this.hasClass("counter__increment")) {
      $counter__input.val($currentVal + 1);
    }
    //Decrement
    else if ($currentVal != NaN && $this.hasClass("counter__decrement")) {
      if ($currentVal >= 1) {
        $counter__input.val($currentVal - 1);
      }
    }
  });
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Shop Category
  let items = document.querySelectorAll('.cateitem');
  let categorys = document.querySelectorAll('.cat1');
  let minuses = document.querySelectorAll('.minus')
  items.forEach((item) => {
    item.addEventListener('click', () => {
      minuses.forEach((m) => {
        removefunc()
        m.classList.add('show')
      })
    })
  })


  function removefunc() {
    minuses.forEach((e) => {
      e.classList.remove('show');
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Category Products Animation

  if (device_width > 1300) {
    const blogList = gsap.utils.toArray(".woocomerce__instagram-item:nth-child(odd)");
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
          scrub: true,
        }
      });
      blogTl.to(item, {
        y: -50,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    });

    const blogList2 = gsap.utils.toArray(".woocomerce__instagram-item:nth-child(even)");
    blogList2.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
          scrub: true,
        }
      });
      blogTl.to(item, {
        y: 50,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    });
  }
  /////////////////////////////////////////////////






})(jQuery);


;
