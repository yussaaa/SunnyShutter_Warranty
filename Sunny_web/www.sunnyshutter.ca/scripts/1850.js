!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand (f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
jQuery.noConflict();
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr(props, pass) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
"function"==typeof jQuery&&jQuery(document).ready(function(a){a("body").on("post-load",function(){window.a2a&&a2a.init_all()})});
(function($){
var NivoSlider=function(element, options){
var settings=$.extend({}, $.fn.nivoSlider.defaults, options);
var vars={
currentSlide: 0,
currentImage: '',
totalSlides: 0,
running: false,
paused: false,
stop: false,
controlNavEl: false
};
var slider=$(element);
slider.data('nivo:vars', vars).addClass('nivoSlider');
var kids=slider.children();
kids.each(function(){
var child=$(this);
var link='';
if(!child.is('img')){
if(child.is('a')){
child.addClass('nivo-imageLink');
link=child;
}
child=child.find('img:first');
}
var childWidth=(childWidth===0) ? child.attr('width'):child.width(),
childHeight=(childHeight===0) ? child.attr('height'):child.height();
if(link!==''){
link.css('display','none');
}
child.css('display','none');
vars.totalSlides++;
});
if(settings.randomStart){
settings.startSlide=Math.floor(Math.random() * vars.totalSlides);
}
if(settings.startSlide > 0){
if(settings.startSlide >=vars.totalSlides){ settings.startSlide=vars.totalSlides - 1; }
vars.currentSlide=settings.startSlide;
}
if($(kids[vars.currentSlide]).is('img')){
vars.currentImage=$(kids[vars.currentSlide]);
}else{
vars.currentImage=$(kids[vars.currentSlide]).find('img:first');
}
if($(kids[vars.currentSlide]).is('a')){
$(kids[vars.currentSlide]).css('display','block');
}
var sliderImg=$('<img/>').addClass('nivo-main-image');
sliderImg.attr('src', vars.currentImage.attr('src')).show();
slider.append(sliderImg);
$(window).resize(function(){
slider.children('img').width(slider.width());
sliderImg.attr('src', vars.currentImage.attr('src'));
sliderImg.stop().height('auto');
$('.nivo-slice').remove();
$('.nivo-box').remove();
});
slider.append($('<div class="nivo-caption"></div>'));
var processCaption=function(settings){
var nivoCaption=$('.nivo-caption', slider);
if(vars.currentImage.attr('title')!=''&&vars.currentImage.attr('title')!=undefined){
var title=vars.currentImage.attr('title');
if(title.substr(0,1)=='#') title=$(title).html();
if(nivoCaption.css('display')=='block'){
setTimeout(function(){
nivoCaption.html(title);
}, settings.animSpeed);
}else{
nivoCaption.html(title);
nivoCaption.stop().fadeIn(settings.animSpeed);
}}else{
nivoCaption.stop().fadeOut(settings.animSpeed);
}}
processCaption(settings);
var timer=0;
if(!settings.manualAdvance&&kids.length > 1){
timer=setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
}
if(settings.directionNav){
slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+ settings.prevText +'</a><a class="nivo-nextNav">'+ settings.nextText +'</a></div>');
$(slider).on('click', 'a.nivo-prevNav', function(){
if(vars.running){ return false; }
clearInterval(timer);
timer='';
vars.currentSlide -=2;
nivoRun(slider, kids, settings, 'prev');
});
$(slider).on('click', 'a.nivo-nextNav', function(){
if(vars.running){ return false; }
clearInterval(timer);
timer='';
nivoRun(slider, kids, settings, 'next');
});
}
if(settings.controlNav){
vars.controlNavEl=$('<div class="nivo-controlNav"></div>');
slider.after(vars.controlNavEl);
for(var i=0; i < kids.length; i++){
if(settings.controlNavThumbs){
vars.controlNavEl.addClass('nivo-thumbs-enabled');
var child=kids.eq(i);
if(!child.is('img')){
child=child.find('img:first');
}
if(child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'"><img src="'+ child.attr('data-thumb') +'" alt="" /></a>');
}else{
vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'">'+ (i + 1) +'</a>');
}}
$('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
$('a', vars.controlNavEl).bind('click', function(){
if(vars.running) return false;
if($(this).hasClass('active')) return false;
clearInterval(timer);
timer='';
sliderImg.attr('src', vars.currentImage.attr('src'));
vars.currentSlide=$(this).attr('rel') - 1;
nivoRun(slider, kids, settings, 'control');
});
}
if(settings.pauseOnHover){
slider.hover(function(){
vars.paused=true;
clearInterval(timer);
timer='';
}, function(){
vars.paused=false;
if(timer===''&&!settings.manualAdvance){
timer=setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
}});
}
slider.bind('nivo:animFinished', function(){
sliderImg.attr('src', vars.currentImage.attr('src'));
vars.running=false;
$(kids).each(function(){
if($(this).is('a')){
$(this).css('display','none');
}});
if($(kids[vars.currentSlide]).is('a')){
$(kids[vars.currentSlide]).css('display','block');
}
if(timer===''&&!vars.paused&&!settings.manualAdvance){
timer=setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
}
settings.afterChange.call(this);
});
var createSlices=function(slider, settings, vars){
if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
$('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
var sliceHeight=($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().height():$('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height();
for(var i=0; i < settings.slices; i++){
var sliceWidth=Math.round(slider.width()/settings.slices);
if(i===settings.slices-1){
slider.append($('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({
left:(sliceWidth*i)+'px',
width:(slider.width()-(sliceWidth*i))+'px',
height:sliceHeight+'px',
opacity:'0',
overflow:'hidden'
})
);
}else{
slider.append($('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({
left:(sliceWidth*i)+'px',
width:sliceWidth+'px',
height:sliceHeight+'px',
opacity:'0',
overflow:'hidden'
})
);
}}
$('.nivo-slice', slider).height(sliceHeight);
sliderImg.stop().animate({
height: $(vars.currentImage).height()
}, settings.animSpeed);
};
var createBoxes=function(slider, settings, vars){
if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
$('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
var boxWidth=Math.round(slider.width()/settings.boxCols),
boxHeight=Math.round($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);
for(var rows=0; rows < settings.boxRows; rows++){
for(var cols=0; cols < settings.boxCols; cols++){
if(cols===settings.boxCols-1){
slider.append($('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({
opacity:0,
left:(boxWidth*cols)+'px',
top:(boxHeight*rows)+'px',
width:(slider.width()-(boxWidth*cols))+'px'
})
);
$('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
}else{
slider.append($('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({
opacity:0,
left:(boxWidth*cols)+'px',
top:(boxHeight*rows)+'px',
width:boxWidth+'px'
})
);
$('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
}}
}
sliderImg.stop().animate({
height: $(vars.currentImage).height()
}, settings.animSpeed);
};
var nivoRun=function(slider, kids, settings, nudge){
var vars=slider.data('nivo:vars');
if(vars&&(vars.currentSlide===vars.totalSlides - 1)){
settings.lastSlide.call(this);
}
if((!vars||vars.stop)&&!nudge){ return false; }
settings.beforeChange.call(this);
if(!nudge){
sliderImg.attr('src', vars.currentImage.attr('src'));
}else{
if(nudge==='prev'){
sliderImg.attr('src', vars.currentImage.attr('src'));
}
if(nudge==='next'){
sliderImg.attr('src', vars.currentImage.attr('src'));
}}
vars.currentSlide++;
if(vars.currentSlide===vars.totalSlides){
vars.currentSlide=0;
settings.slideshowEnd.call(this);
}
if(vars.currentSlide < 0){ vars.currentSlide=(vars.totalSlides - 1); }
if($(kids[vars.currentSlide]).is('img')){
vars.currentImage=$(kids[vars.currentSlide]);
}else{
vars.currentImage=$(kids[vars.currentSlide]).find('img:first');
}
if(settings.controlNav){
$('a', vars.controlNavEl).removeClass('active');
$('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
}
processCaption(settings);
$('.nivo-slice', slider).remove();
$('.nivo-box', slider).remove();
var currentEffect=settings.effect,
anims='';
if(settings.effect==='random'){
anims=new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade',
'boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');
currentEffect=anims[Math.floor(Math.random()*(anims.length + 1))];
if(currentEffect===undefined){ currentEffect='fade'; }}
if(settings.effect.indexOf(',')!==-1){
anims=settings.effect.split(',');
currentEffect=anims[Math.floor(Math.random()*(anims.length))];
if(currentEffect===undefined){ currentEffect='fade'; }}
if(vars.currentImage.attr('data-transition')){
currentEffect=vars.currentImage.attr('data-transition');
}
vars.running=true;
var timeBuff=0,
i=0,
slices='',
firstSlice='',
totalBoxes='',
boxes='';
if(currentEffect==='sliceDown'||currentEffect==='sliceDownRight'||currentEffect==='sliceDownLeft'){
createSlices(slider, settings, vars);
timeBuff=0;
i=0;
slices=$('.nivo-slice', slider);
if(currentEffect==='sliceDownLeft'){ slices=$('.nivo-slice', slider)._reverse(); }
slices.each(function(){
var slice=$(this);
slice.css({ 'top': '0px' });
if(i===settings.slices-1){
setTimeout(function(){
slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
}, (100 + timeBuff));
}else{
setTimeout(function(){
slice.animate({opacity:'1.0' }, settings.animSpeed);
}, (100 + timeBuff));
}
timeBuff +=50;
i++;
});
}else if(currentEffect==='sliceUp'||currentEffect==='sliceUpRight'||currentEffect==='sliceUpLeft'){
createSlices(slider, settings, vars);
timeBuff=0;
i=0;
slices=$('.nivo-slice', slider);
if(currentEffect==='sliceUpLeft'){ slices=$('.nivo-slice', slider)._reverse(); }
slices.each(function(){
var slice=$(this);
slice.css({ 'bottom': '0px' });
if(i===settings.slices-1){
setTimeout(function(){
slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
}, (100 + timeBuff));
}else{
setTimeout(function(){
slice.animate({opacity:'1.0' }, settings.animSpeed);
}, (100 + timeBuff));
}
timeBuff +=50;
i++;
});
}else if(currentEffect==='sliceUpDown'||currentEffect==='sliceUpDownRight'||currentEffect==='sliceUpDownLeft'){
createSlices(slider, settings, vars);
timeBuff=0;
i=0;
var v=0;
slices=$('.nivo-slice', slider);
if(currentEffect==='sliceUpDownLeft'){ slices=$('.nivo-slice', slider)._reverse(); }
slices.each(function(){
var slice=$(this);
if(i===0){
slice.css('top','0px');
i++;
}else{
slice.css('bottom','0px');
i=0;
}
if(v===settings.slices-1){
setTimeout(function(){
slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
}, (100 + timeBuff));
}else{
setTimeout(function(){
slice.animate({opacity:'1.0' }, settings.animSpeed);
}, (100 + timeBuff));
}
timeBuff +=50;
v++;
});
}else if(currentEffect==='fold'){
createSlices(slider, settings, vars);
timeBuff=0;
i=0;
$('.nivo-slice', slider).each(function(){
var slice=$(this);
var origWidth=slice.width();
slice.css({ top:'0px', width:'0px' });
if(i===settings.slices-1){
setTimeout(function(){
slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
}, (100 + timeBuff));
}else{
setTimeout(function(){
slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed);
}, (100 + timeBuff));
}
timeBuff +=50;
i++;
});
}else if(currentEffect==='fade'){
createSlices(slider, settings, vars);
firstSlice=$('.nivo-slice:first', slider);
firstSlice.css({
'width': slider.width() + 'px'
});
firstSlice.animate({ opacity:'1.0' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
}else if(currentEffect==='slideInRight'){
createSlices(slider, settings, vars);
firstSlice=$('.nivo-slice:first', slider);
firstSlice.css({
'width': '0px',
'opacity': '1'
});
firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
}else if(currentEffect==='slideInLeft'){
createSlices(slider, settings, vars);
firstSlice=$('.nivo-slice:first', slider);
firstSlice.css({
'width': '0px',
'opacity': '1',
'left': '',
'right': '0px'
});
firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){
firstSlice.css({
'left': '0px',
'right': ''
});
slider.trigger('nivo:animFinished');
});
}else if(currentEffect==='boxRandom'){
createBoxes(slider, settings, vars);
totalBoxes=settings.boxCols * settings.boxRows;
i=0;
timeBuff=0;
boxes=shuffle($('.nivo-box', slider));
boxes.each(function(){
var box=$(this);
if(i===totalBoxes-1){
setTimeout(function(){
box.animate({ opacity:'1' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
}, (100 + timeBuff));
}else{
setTimeout(function(){
box.animate({ opacity:'1' }, settings.animSpeed);
}, (100 + timeBuff));
}
timeBuff +=20;
i++;
});
}else if(currentEffect==='boxRain'||currentEffect==='boxRainReverse'||currentEffect==='boxRainGrow'||currentEffect==='boxRainGrowReverse'){
createBoxes(slider, settings, vars);
totalBoxes=settings.boxCols * settings.boxRows;
i=0;
timeBuff=0;
var rowIndex=0;
var colIndex=0;
var box2Darr=[];
box2Darr[rowIndex]=[];
boxes=$('.nivo-box', slider);
if(currentEffect==='boxRainReverse'||currentEffect==='boxRainGrowReverse'){
boxes=$('.nivo-box', slider)._reverse();
}
boxes.each(function(){
box2Darr[rowIndex][colIndex]=$(this);
colIndex++;
if(colIndex===settings.boxCols){
rowIndex++;
colIndex=0;
box2Darr[rowIndex]=[];
}});
for(var cols=0; cols < (settings.boxCols * 2); cols++){
var prevCol=cols;
for(var rows=0; rows < settings.boxRows; rows++){
if(prevCol >=0&&prevCol < settings.boxCols){
(function(row, col, time, i, totalBoxes){
var box=$(box2Darr[row][col]);
var w=box.width();
var h=box.height();
if(currentEffect==='boxRainGrow'||currentEffect==='boxRainGrowReverse'){
box.width(0).height(0);
}
if(i===totalBoxes-1){
setTimeout(function(){
box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3, '', function(){ slider.trigger('nivo:animFinished'); });
}, (100 + time));
}else{
setTimeout(function(){
box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3);
}, (100 + time));
}})(rows, prevCol, timeBuff, i, totalBoxes);
i++;
}
prevCol--;
}
timeBuff +=100;
}}
};
var shuffle=function(arr){
for(var j, x, i=arr.length; i; j=parseInt(Math.random() * i, 10), x=arr[--i], arr[i]=arr[j], arr[j]=x);
return arr;
};
var trace=function(msg){
if(this.console&&typeof console.log!=='undefined'){ console.log(msg); }};
this.stop=function(){
if(!$(element).data('nivo:vars').stop){
$(element).data('nivo:vars').stop=true;
trace('Stop Slider');
}};
this.start=function(){
if($(element).data('nivo:vars').stop){
$(element).data('nivo:vars').stop=false;
trace('Start Slider');
}};
settings.afterLoad.call(this);
return this;
};
$.fn.nivoSlider=function(options){
return this.each(function(key, value){
var element=$(this);
if(element.data('nivoslider')){ return element.data('nivoslider'); }
var nivoslider=new NivoSlider(this, options);
element.data('nivoslider', nivoslider);
});
};
$.fn.nivoSlider.defaults={
effect: 'random',
slices: 15,
boxCols: 8,
boxRows: 4,
animSpeed: 500,
pauseTime: 3000,
startSlide: 0,
directionNav: true,
controlNav: true,
controlNavThumbs: false,
pauseOnHover: true,
manualAdvance: false,
prevText: 'Prev',
nextText: 'Next',
randomStart: false,
beforeChange: function(){},
afterChange: function(){},
slideshowEnd: function(){},
lastSlide: function(){},
afterLoad: function(){}};
$.fn._reverse=[].reverse;
})(jQuery);
jQuery(document).ready(function(){
jQuery('.accordion-box .acc-content').hide();
jQuery('.accordion-box h2:first').addClass('active').next().show();
jQuery('.accordion-box h2').click(function(){
if(jQuery(this).next().is(':hidden')){
jQuery('.accordion-box h2').removeClass('active').next().slideUp();
jQuery(this).toggleClass('active').next().slideDown();
}
return false;
});
jQuery('ul.tabs > br').remove();
jQuery('.tabs-wrapper').append(jQuery('.tabs li div'));
jQuery('.tabs li:first a').addClass('defaulttab selected');
jQuery('.tabs a').click(function(){
switch_tabs(jQuery(this));
});
switch_tabs(jQuery('.defaulttab'));
function switch_tabs(obj){
jQuery('.tab-content').hide();
jQuery('.tabs a').removeClass("selected");
var id=obj.attr("rel");
jQuery('#'+id).show();
obj.addClass("selected");
}
jQuery(".slide_toggle_content").hide();
jQuery("h3.slide_toggle").toggle(function(){
jQuery(this).addClass("clicked");
}, function (){
jQuery(this).removeClass("clicked");
});
jQuery("h3.slide_toggle").click(function(){
jQuery(this).next(".slide_toggle_content").slideToggle();
});
});
jQuery(document).ready(function(){
jQuery('#testimonials .quotes').quovolver({
children:'div',
transitionSpeed:600,
autoPlay:true,
autoPlaySpeed:6000,
equalHeight:false,
navPosition:'below',
navPrev:true,
navNext:true,
navNum:true,
navText:false,
navTextContent:'Quote @a of @b'
});
jQuery('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,
margin:20,
nav:false,
dots: true,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}}
})
});
var ww=jQuery(window).width();
jQuery(document).ready(function(){
jQuery(".sitenav li a").each(function(){
if(jQuery(this).next().length > 0){
jQuery(this).addClass("parent");
};})
jQuery(".toggleMenu").click(function(e){
e.preventDefault();
jQuery(this).toggleClass("active");
jQuery(".sitenav").slideToggle('fast');
});
adjustMenu();
})
jQuery(window).bind('resize orientationchange', function(){
ww=jQuery(window).width();
adjustMenu();
});
var adjustMenu=function(){
if(ww < 981){
jQuery(".toggleMenu").css("display", "block");
if(!jQuery(".toggleMenu").hasClass("active")){
jQuery(".sitenav").hide();
}else{
jQuery(".sitenav").show();
}
jQuery(".sitenav li").unbind('mouseenter mouseleave');
}else{
jQuery(".toggleMenu").css("display", "none");
jQuery(".sitenav").show();
jQuery(".sitenav li").removeClass("hover");
jQuery(".sitenav li a").unbind('click');
jQuery(".sitenav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function(){
jQuery(this).toggleClass('hover');
});
}}
jQuery(document).ready(function(){
jQuery('.srchicon').click(function(){
jQuery('.searchtop').toggle();
jQuery('.topsocial').toggle();
});
});
jQuery(document).ready(function(){
jQuery('.skillbar').each(function(){
jQuery(this).find('.skillbar-bar').animate({
width:jQuery(this).attr('data-percent')
},6000);
});
});
jQuery(document).ready(function(){
jQuery("#back-top").hide();
jQuery(function (){
jQuery(window).scroll(function (){
if(jQuery(this).scrollTop() > 50){
jQuery('#back-top').fadeIn();
}else{
jQuery('#back-top').fadeOut();
}});
jQuery('#back-top').click(function (){
jQuery('body,html').animate({
scrollTop: 00
}, 800);
return false;
});
});
});
jQuery(window).load(function(){
jQuery("#flexiselDemo3").flexisel({
visibleItems: 5,
animationSpeed: 1000,
autoPlay: true,
autoPlaySpeed: 3000,
pauseOnHover: true,
enableResponsiveBreakpoints: true,
responsiveBreakpoints: {
portrait: {
changePoint:480,
visibleItems: 1
},
landscape: {
changePoint:640,
visibleItems: 2
},
tablet: {
changePoint:768,
visibleItems: 3
}}
});
});
jQuery(window).load(function(){
jQuery("#SidebarRoator").flexisel({
visibleItems: 1,
animationSpeed: 1000,
autoPlay: true,
autoPlaySpeed: 3000,
pauseOnHover: true,
enableResponsiveBreakpoints: true,
responsiveBreakpoints: {
portrait: {
changePoint:480,
visibleItems: 1
},
landscape: {
changePoint:640,
visibleItems: 1
},
tablet: {
changePoint:768,
visibleItems: 1
}}
});
});
;(function($){$.fn.quovolver=function(options){var opts=$.extend({},$.fn.quovolver.defaults,options);return this.each(function(){function gotoItem(itemNumber){if($items.is(":animated")||$this.is(":animated")){return false}if($box.is(":hidden")){return false}if(itemNumber<1){itemNumber=$total}else{if(itemNumber>$total){itemNumber=1}}var gotoData={current:$($items[$active-1]),upcoming:$($items[itemNumber-1])};gotoData.currentHeight=getHiddenProperty(gotoData.current);gotoData.upcomingHeight=getHiddenProperty(gotoData.upcoming);gotoData.currentOuterHeight=getHiddenProperty(gotoData.current,"outerHeight");gotoData.upcomingOuterHeight=getHiddenProperty(gotoData.upcoming,"outerHeight");gotoData.currentWidth=getHiddenProperty(gotoData.current,"width");gotoData.upcomingWidth=getHiddenProperty(gotoData.upcoming,"width");gotoData.currentOuterWidth=getHiddenProperty(gotoData.current,"outerWidth");gotoData.upcomingOuterWidth=getHiddenProperty(gotoData.upcoming,"outerWidth");if(o.transition!=="basic"&&typeof o.transition==="string"&&eval("typeof "+o.transition)==="function"){eval(o.transition+"(gotoData)")}else{basic(gotoData)}$active=itemNumber;updateNavNum($nav);updateNavText($nav);return false}function buildNav(){var nav;if(o.navPosition==="above"||o.navPosition==="both"){$box.prepend('<div class="quovolve-nav quovolve-nav-above"></div>');nav=$box.find(".quovolve-nav")}if(o.navPosition==="below"||o.navPosition==="both"){$box.append('<div class="quovolve-nav quovolve-nav-below"></div>');nav=$box.find(".quovolve-nav")}if(o.navPosition==="custom"){if(o.navPositionCustom!==""&&$(o.navPositionCustom).length!==0){$(o.navPositionCustom).append('<div class="quovolve-nav quovolve-nav-custom"></div>');nav=$(o.navPositionCustom).find(".quovolve-nav")}else{}}if(o.navPrev){nav.append('<span class="nav-prev"><a href="#">'+o.navPrevText+"</a></span>")}if(o.navNext){nav.append('<span class="nav-next"><a href="#">'+o.navNextText+"</a></span>")}if(o.navNum){nav.append('<ol class="nav-numbers"></ol>');for(var i=1;i<($total+1);i++){nav.find(".nav-numbers").append('<li><a href="#item-'+i+'">'+i+"</a></li>")}updateNavNum(nav)}if(o.navText){nav.append('<span class="nav-text"></span>');updateNavText(nav)}return nav}function getHiddenProperty(item,property){if(!property){property="height"}if($(this).is(":hidden")){item.show().css({position:"absolute",visibility:"hidden",display:"block"})}var value=item[property]();if($(this).is(":hidden")){item.hide().css({position:"static",visibility:"visible",display:"none"})}return value}function equalHeight(group){var tallest=0;group.height("auto");group.each(function(){var thisHeight;if($(this).is(":visible")){thisHeight=$(this).height()}else{thisHeight=getHiddenProperty($(this))}if(thisHeight>tallest){tallest=thisHeight}});group.height(tallest)}function updateNavNum(nav){if(o.navEnabled){nav.find(".nav-numbers li").removeClass("active");nav.find('.nav-numbers a[href="#item-'+$active+'"]').parent().addClass("active")}}function updateNavText(nav){if(o.navEnabled){var content=o.navTextContent.replace("@a",$active).replace("@b",$total);nav.find(".nav-text").text(content)}}function autoPlay(){var intervalSpeed=(o.autoPlaySpeed=="auto"?$items[$active-1].textLength*20+3000:o.autoPlaySpeed);$box.addClass("play");clearTimeout($intervalID);$intervalID=setTimeout(function(){gotoItem($active+1);autoPlay()},intervalSpeed)}function pauseAutoPlay(){if(o.stopAutoPlay!==true){$box.hover(function(){$box.addClass("pause").removeClass("play");clearTimeout($intervalID)},function(){$box.removeClass("pause").addClass("play");clearTimeout($intervalID);autoPlay()})}}function stopAutoPlay(){$box.hover(function(){$box.addClass("stop").removeClass("play");clearTimeout($intervalID)},function(){})}function basic(data){$this.css("height",data.upcomingOuterHeight);data.current.hide();data.upcoming.show();if(o.equalHeight===false){$this.css("height","auto")}}function fade(data){$this.height(data.currentOuterHeight);data.current.fadeOut(o.transitionSpeed,function(){$this.animate({height:data.upcomingOuterHeight},o.transitionSpeed,function(){data.upcoming.fadeIn(o.transitionSpeed,function(){$this.height("auto")})})})}var $this=$(this);var o=$.meta?$.extend({},opts,$this.data()):opts;$this.addClass("quovolve").css({position:"relative"}).wrap('<div class="quovolve-box"></div>');var groupMethod;if(o.children){groupMethod="find"}else{groupMethod="children"}var $box=$this.parent(".quovolve-box"),$items=$this[groupMethod](o.children),$active=1,$total=$items.length;$items.hide().filter(":first").show();if(o.navPrev||o.navNext||o.navNum||o.navText){o.navEnabled=true;var $nav=buildNav()}else{o.navEnabled=false}if(o.equalHeight){equalHeight($items);$(window).resize(function(){equalHeight($items);$this.css("height",$($items[$active-1]).outerHeight())})}if(o.autoPlay){if(o.autoPlaySpeed=="auto"){$items.each(function(){this.textLength=$(this).text().length})}var $intervalID;autoPlay();if(o.stopOnHover){stopAutoPlay()}else{if(o.pauseOnHover){pauseAutoPlay()}}}$(".nav-prev a",$box).click(function(){return gotoItem($active-1)});$(".nav-next a",$box).click(function(){return gotoItem($active+1)});$(".nav-numbers a",$box).click(function(){return gotoItem($(this).text())});$(this).bind("goto",function(event,item){gotoItem(item)})})};$.fn.quovolver.defaults={children:"",transition:"fade",transitionSpeed:300,autoPlay:true,autoPlaySpeed:"auto",pauseOnHover:true,stopOnHover:false,equalHeight:true,navPosition:"above",navPositionCustom:"",navPrev:false,navNext:false,navNum:false,navText:false,navPrevText:"Prev",navNextText:"Next",navTextContent:"@a / @b"}})(jQuery);
var scripts=document.getElementsByTagName('script');
var lastScript=scripts[scripts.length-1];
var myScript=lastScript.src;
var myScriptSrc=myScript.replace(/bootstrap.js/, '');
document.write(unescape('%3Clink rel="stylesheet" media="all" href="' + myScriptSrc + 'bd.styles.css"%3E'));
!window.jQuery&&document.write(unescape('%3Cscript src="' + myScriptSrc + 'bd.jquery.min.js"%3E%3C/script%3E'));
document.write(unescape('%3Cmeta name="viewport" content="width=device-width, initial-scale=1.0"%3E'));
;(function($, window, document, undefined){
var drag, state, e;
drag={
start: 0,
startX: 0,
startY: 0,
current: 0,
currentX: 0,
currentY: 0,
offsetX: 0,
offsetY: 0,
distance: null,
startTime: 0,
endTime: 0,
updatedX: 0,
targetEl: null
};
state={
isTouch: false,
isScrolling: false,
isSwiping: false,
direction: false,
inMotion: false
};
e={
_onDragStart: null,
_onDragMove: null,
_onDragEnd: null,
_transitionEnd: null,
_resizer: null,
_responsiveCall: null,
_goToLoop: null,
_checkVisibile: null
};
function Owl(element, options){
this.settings=null;
this.options=$.extend({}, Owl.Defaults, options);
this.$element=$(element);
this.drag=$.extend({}, drag);
this.state=$.extend({}, state);
this.e=$.extend({}, e);
this._plugins={};
this._supress={};
this._current=null;
this._speed=null;
this._coordinates=[];
this._breakpoint=null;
this._width=null;
this._items=[];
this._clones=[];
this._mergers=[];
this._invalidated={};
this._pipe=[];
$.each(Owl.Plugins, $.proxy(function(key, plugin){
this._plugins[key[0].toLowerCase() + key.slice(1)]
= new plugin(this);
}, this));
$.each(Owl.Pipe, $.proxy(function(priority, worker){
this._pipe.push({
'filter': worker.filter,
'run': $.proxy(worker.run, this)
});
}, this));
this.setup();
this.initialize();
}
Owl.Defaults={
items: 3,
loop: false,
center: false,
mouseDrag: true,
touchDrag: true,
pullDrag: true,
freeDrag: false,
margin: 0,
stagePadding: 0,
merge: false,
mergeFit: true,
autoWidth: false,
startPosition: 0,
rtl: false,
smartSpeed: 250,
fluidSpeed: false,
dragEndSpeed: false,
responsive: {},
responsiveRefreshRate: 200,
responsiveBaseElement: window,
responsiveClass: false,
fallbackEasing: 'swing',
info: false,
nestedItemSelector: false,
itemElement: 'div',
stageElement: 'div',
themeClass: 'owl-theme',
baseClass: 'owl-carousel',
itemClass: 'owl-item',
centerClass: 'center',
activeClass: 'active'
};
Owl.Width={
Default: 'default',
Inner: 'inner',
Outer: 'outer'
};
Owl.Plugins={};
Owl.Pipe=[ {
filter: [ 'width', 'items', 'settings' ],
run: function(cache){
cache.current=this._items&&this._items[this.relative(this._current)];
}}, {
filter: [ 'items', 'settings' ],
run: function(){
var cached=this._clones,
clones=this.$stage.children('.cloned');
if(clones.length!==cached.length||(!this.settings.loop&&cached.length > 0)){
this.$stage.children('.cloned').remove();
this._clones=[];
}}
}, {
filter: [ 'items', 'settings' ],
run: function(){
var i, n,
clones=this._clones,
items=this._items,
delta=this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4):0;
for (i=0, n=Math.abs(delta / 2); i < n; i++){
if(delta > 0){
this.$stage.children().eq(items.length + clones.length - 1).remove();
clones.pop();
this.$stage.children().eq(0).remove();
clones.pop();
}else{
clones.push(clones.length / 2);
this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
clones.push(items.length - 1 - (clones.length - 1) / 2);
this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
}}
}}, {
filter: [ 'width', 'items', 'settings' ],
run: function(){
var rtl=(this.settings.rtl ? 1:-1),
width=(this.width() / this.settings.items).toFixed(3),
coordinate=0, merge, i, n;
this._coordinates=[];
for (i=0, n=this._clones.length + this._items.length; i < n; i++){
merge=this._mergers[this.relative(i)];
merge=(this.settings.mergeFit&&Math.min(merge, this.settings.items))||merge;
coordinate +=(this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin:width * merge) * rtl;
this._coordinates.push(coordinate);
}}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(){
var i, n, width=(this.width() / this.settings.items).toFixed(3), css={
'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
'padding-left': this.settings.stagePadding||'',
'padding-right': this.settings.stagePadding||''
};
this.$stage.css(css);
css={ 'width': this.settings.autoWidth ? 'auto':width - this.settings.margin };
css[this.settings.rtl ? 'margin-left':'margin-right']=this.settings.margin;
if(!this.settings.autoWidth&&$.grep(this._mergers, function(v){ return v > 1 }).length > 0){
for (i=0, n=this._coordinates.length; i < n; i++){
css.width=Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1]||0) - this.settings.margin;
this.$stage.children().eq(i).css(css);
}}else{
this.$stage.children().css(css);
}}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(cache){
cache.current&&this.reset(this.$stage.children().index(cache.current));
}}, {
filter: [ 'position' ],
run: function(){
this.animate(this.coordinates(this._current));
}}, {
filter: [ 'width', 'position', 'items', 'settings' ],
run: function(){
var rtl=this.settings.rtl ? 1:-1,
padding=this.settings.stagePadding * 2,
begin=this.coordinates(this.current()) + padding,
end=begin + this.width() * rtl,
inner, outer, matches=[], i, n;
for (i=0, n=this._coordinates.length; i < n; i++){
inner=this._coordinates[i - 1]||0;
outer=Math.abs(this._coordinates[i]) + padding * rtl;
if((this.op(inner, '<=', begin)&&(this.op(inner, '>', end)))
|| (this.op(outer, '<', begin)&&this.op(outer, '>', end))){
matches.push(i);
}}
this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);
if(this.settings.center){
this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
}}
} ];
Owl.prototype.initialize=function(){
this.trigger('initialize');
this.$element
.addClass(this.settings.baseClass)
.addClass(this.settings.themeClass)
.toggleClass('owl-rtl', this.settings.rtl);
this.browserSupport();
if(this.settings.autoWidth&&this.state.imagesLoaded!==true){
var imgs, nestedSelector, width;
imgs=this.$element.find('img');
nestedSelector=this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector:undefined;
width=this.$element.children(nestedSelector).width();
if(imgs.length&&width <=0){
this.preloadAutoWidthImages(imgs);
return false;
}}
this.$element.addClass('owl-loading');
this.$stage=$('<' + this.settings.stageElement + ' class="owl-stage"/>')
.wrap('<div class="owl-stage-outer">');
this.$element.append(this.$stage.parent());
this.replace(this.$element.children().not(this.$stage.parent()));
this._width=this.$element.width();
this.refresh();
this.$element.removeClass('owl-loading').addClass('owl-loaded');
this.eventsCall();
this.internalEvents();
this.addTriggerableEvents();
this.trigger('initialized');
};
Owl.prototype.setup=function(){
var viewport=this.viewport(),
overwrites=this.options.responsive,
match=-1,
settings=null;
if(!overwrites){
settings=$.extend({}, this.options);
}else{
$.each(overwrites, function(breakpoint){
if(breakpoint <=viewport&&breakpoint > match){
match=Number(breakpoint);
}});
settings=$.extend({}, this.options, overwrites[match]);
delete settings.responsive;
if(settings.responsiveClass){
this.$element.attr('class', function(i, c){
return c.replace(/\b owl-responsive-\S+/g, '');
}).addClass('owl-responsive-' + match);
}}
if(this.settings===null||this._breakpoint!==match){
this.trigger('change', { property: { name: 'settings', value: settings }});
this._breakpoint=match;
this.settings=settings;
this.invalidate('settings');
this.trigger('changed', { property: { name: 'settings', value: this.settings }});
}};
Owl.prototype.optionsLogic=function(){
this.$element.toggleClass('owl-center', this.settings.center);
if(this.settings.loop&&this._items.length < this.settings.items){
this.settings.loop=false;
}
if(this.settings.autoWidth){
this.settings.stagePadding=false;
this.settings.merge=false;
}};
Owl.prototype.prepare=function(item){
var event=this.trigger('prepare', { content: item });
if(!event.data){
event.data=$('<' + this.settings.itemElement + '/>')
.addClass(this.settings.itemClass).append(item)
}
this.trigger('prepared', { content: event.data });
return event.data;
};
Owl.prototype.update=function(){
var i=0,
n=this._pipe.length,
filter=$.proxy(function(p){ return this[p] }, this._invalidated),
cache={};
while (i < n){
if(this._invalidated.all||$.grep(this._pipe[i].filter, filter).length > 0){
this._pipe[i].run(cache);
}
i++;
}
this._invalidated={};};
Owl.prototype.width=function(dimension){
dimension=dimension||Owl.Width.Default;
switch (dimension){
case Owl.Width.Inner:
case Owl.Width.Outer:
return this._width;
default:
return this._width - this.settings.stagePadding * 2 + this.settings.margin;
}};
Owl.prototype.refresh=function(){
if(this._items.length===0){
return false;
}
var start=new Date().getTime();
this.trigger('refresh');
this.setup();
this.optionsLogic();
this.$stage.addClass('owl-refresh');
this.update();
this.$stage.removeClass('owl-refresh');
this.state.orientation=window.orientation;
this.watchVisibility();
this.trigger('refreshed');
};
Owl.prototype.eventsCall=function(){
this.e._onDragStart=$.proxy(function(e){
this.onDragStart(e);
}, this);
this.e._onDragMove=$.proxy(function(e){
this.onDragMove(e);
}, this);
this.e._onDragEnd=$.proxy(function(e){
this.onDragEnd(e);
}, this);
this.e._onResize=$.proxy(function(e){
this.onResize(e);
}, this);
this.e._transitionEnd=$.proxy(function(e){
this.transitionEnd(e);
}, this);
this.e._preventClick=$.proxy(function(e){
this.preventClick(e);
}, this);
};
Owl.prototype.onThrottledResize=function(){
window.clearTimeout(this.resizeTimer);
this.resizeTimer=window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
};
Owl.prototype.onResize=function(){
if(!this._items.length){
return false;
}
if(this._width===this.$element.width()){
return false;
}
if(this.trigger('resize').isDefaultPrevented()){
return false;
}
this._width=this.$element.width();
this.invalidate('width');
this.refresh();
this.trigger('resized');
};
Owl.prototype.eventsRouter=function(event){
var type=event.type;
if(type==="mousedown"||type==="touchstart"){
this.onDragStart(event);
}else if(type==="mousemove"||type==="touchmove"){
this.onDragMove(event);
}else if(type==="mouseup"||type==="touchend"){
this.onDragEnd(event);
}else if(type==="touchcancel"){
this.onDragEnd(event);
}};
Owl.prototype.internalEvents=function(){
var isTouch=isTouchSupport(),
isTouchIE=isTouchSupportIE();
if(this.settings.mouseDrag){
this.$stage.on('mousedown', $.proxy(function(event){ this.eventsRouter(event) }, this));
this.$stage.on('dragstart', function(){ return false });
this.$stage.get(0).onselectstart=function(){ return false };}else{
this.$element.addClass('owl-text-select-on');
}
if(this.settings.touchDrag&&!isTouchIE){
this.$stage.on('touchstart touchcancel', $.proxy(function(event){ this.eventsRouter(event) }, this));
}
if(this.transitionEndVendor){
this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
}
if(this.settings.responsive!==false){
this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
}};
Owl.prototype.onDragStart=function(event){
var ev, isTouchEvent, pageX, pageY, animatedPos;
ev=event.originalEvent||event||window.event;
if(ev.which===3||this.state.isTouch){
return false;
}
if(ev.type==='mousedown'){
this.$stage.addClass('owl-grab');
}
this.trigger('drag');
this.drag.startTime=new Date().getTime();
this.speed(0);
this.state.isTouch=true;
this.state.isScrolling=false;
this.state.isSwiping=false;
this.drag.distance=0;
pageX=getTouches(ev).x;
pageY=getTouches(ev).y;
this.drag.offsetX=this.$stage.position().left;
this.drag.offsetY=this.$stage.position().top;
if(this.settings.rtl){
this.drag.offsetX=this.$stage.position().left + this.$stage.width() - this.width()
+ this.settings.margin;
}
if(this.state.inMotion&&this.support3d){
animatedPos=this.getTransformProperty();
this.drag.offsetX=animatedPos;
this.animate(animatedPos);
this.state.inMotion=true;
}else if(this.state.inMotion&&!this.support3d){
this.state.inMotion=false;
return false;
}
this.drag.startX=pageX - this.drag.offsetX;
this.drag.startY=pageY - this.drag.offsetY;
this.drag.start=pageX - this.drag.startX;
this.drag.targetEl=ev.target||ev.srcElement;
this.drag.updatedX=this.drag.start;
if(this.drag.targetEl.tagName==="IMG"||this.drag.targetEl.tagName==="A"){
this.drag.targetEl.draggable=false;
}
$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event){this.eventsRouter(event)},this));
};
Owl.prototype.onDragMove=function(event){
var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
if(!this.state.isTouch){
return;
}
if(this.state.isScrolling){
return;
}
ev=event.originalEvent||event||window.event;
pageX=getTouches(ev).x;
pageY=getTouches(ev).y;
this.drag.currentX=pageX - this.drag.startX;
this.drag.currentY=pageY - this.drag.startY;
this.drag.distance=this.drag.currentX - this.drag.offsetX;
if(this.drag.distance < 0){
this.state.direction=this.settings.rtl ? 'right':'left';
}else if(this.drag.distance > 0){
this.state.direction=this.settings.rtl ? 'left':'right';
}
if(this.settings.loop){
if(this.op(this.drag.currentX, '>', this.coordinates(this.minimum()))&&this.state.direction==='right'){
this.drag.currentX -=(this.settings.center&&this.coordinates(0)) - this.coordinates(this._items.length);
}else if(this.op(this.drag.currentX, '<', this.coordinates(this.maximum()))&&this.state.direction==='left'){
this.drag.currentX +=(this.settings.center&&this.coordinates(0)) - this.coordinates(this._items.length);
}}else{
minValue=this.settings.rtl ? this.coordinates(this.maximum()):this.coordinates(this.minimum());
maxValue=this.settings.rtl ? this.coordinates(this.minimum()):this.coordinates(this.maximum());
pull=this.settings.pullDrag ? this.drag.distance / 5:0;
this.drag.currentX=Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
}
if((this.drag.distance > 8||this.drag.distance < -8)){
if(ev.preventDefault!==undefined){
ev.preventDefault();
}else{
ev.returnValue=false;
}
this.state.isSwiping=true;
}
this.drag.updatedX=this.drag.currentX;
if((this.drag.currentY > 16||this.drag.currentY < -16)&&this.state.isSwiping===false){
this.state.isScrolling=true;
this.drag.updatedX=this.drag.start;
}
this.animate(this.drag.updatedX);
};
Owl.prototype.onDragEnd=function(event){
var compareTimes, distanceAbs, closest;
if(!this.state.isTouch){
return;
}
if(event.type==='mouseup'){
this.$stage.removeClass('owl-grab');
}
this.trigger('dragged');
this.drag.targetEl.removeAttribute("draggable");
this.state.isTouch=false;
this.state.isScrolling=false;
this.state.isSwiping=false;
if(this.drag.distance===0&&this.state.inMotion!==true){
this.state.inMotion=false;
return false;
}
this.drag.endTime=new Date().getTime();
compareTimes=this.drag.endTime - this.drag.startTime;
distanceAbs=Math.abs(this.drag.distance);
if(distanceAbs > 3||compareTimes > 300){
this.removeClick(this.drag.targetEl);
}
closest=this.closest(this.drag.updatedX);
this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);
this.current(closest);
this.invalidate('position');
this.update();
if(!this.settings.pullDrag&&this.drag.updatedX===this.coordinates(closest)){
this.transitionEnd();
}
this.drag.distance=0;
$(document).off('.owl.dragEvents');
};
Owl.prototype.removeClick=function(target){
this.drag.targetEl=target;
$(target).on('click.preventClick', this.e._preventClick);
window.setTimeout(function(){
$(target).off('click.preventClick');
}, 300);
};
Owl.prototype.preventClick=function(ev){
if(ev.preventDefault){
ev.preventDefault();
}else{
ev.returnValue=false;
}
if(ev.stopPropagation){
ev.stopPropagation();
}
$(ev.target).off('click.preventClick');
};
Owl.prototype.getTransformProperty=function(){
var transform, matrix3d;
transform=window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
transform=transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
matrix3d=transform.length===16;
return matrix3d!==true ? transform[4]:transform[12];
};
Owl.prototype.closest=function(coordinate){
var position=-1, pull=30, width=this.width(), coordinates=this.coordinates();
if(!this.settings.freeDrag){
$.each(coordinates, $.proxy(function(index, value){
if(coordinate > value - pull&&coordinate < value + pull){
position=index;
}else if(this.op(coordinate, '<', value)
&& this.op(coordinate, '>', coordinates[index + 1]||value - width)){
position=this.state.direction==='left' ? index + 1:index;
}
return position===-1;
}, this));
}
if(!this.settings.loop){
if(this.op(coordinate, '>', coordinates[this.minimum()])){
position=coordinate=this.minimum();
}else if(this.op(coordinate, '<', coordinates[this.maximum()])){
position=coordinate=this.maximum();
}}
return position;
};
Owl.prototype.animate=function(coordinate){
this.trigger('translate');
this.state.inMotion=this.speed() > 0;
if(this.support3d){
this.$stage.css({
transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
transition: (this.speed() / 1000) + 's'
});
}else if(this.state.isTouch){
this.$stage.css({
left: coordinate + 'px'
});
}else{
this.$stage.animate({
left: coordinate
}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function(){
if(this.state.inMotion){
this.transitionEnd();
}}, this));
}};
Owl.prototype.current=function(position){
if(position===undefined){
return this._current;
}
if(this._items.length===0){
return undefined;
}
position=this.normalize(position);
if(this._current!==position){
var event=this.trigger('change', { property: { name: 'position', value: position }});
if(event.data!==undefined){
position=this.normalize(event.data);
}
this._current=position;
this.invalidate('position');
this.trigger('changed', { property: { name: 'position', value: this._current }});
}
return this._current;
};
Owl.prototype.invalidate=function(part){
this._invalidated[part]=true;
}
Owl.prototype.reset=function(position){
position=this.normalize(position);
if(position===undefined){
return;
}
this._speed=0;
this._current=position;
this.suppress([ 'translate', 'translated' ]);
this.animate(this.coordinates(position));
this.release([ 'translate', 'translated' ]);
};
Owl.prototype.normalize=function(position, relative){
var n=(relative ? this._items.length:this._items.length + this._clones.length);
if(!$.isNumeric(position)||n < 1){
return undefined;
}
if(this._clones.length){
position=((position % n) + n) % n;
}else{
position=Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
}
return position;
};
Owl.prototype.relative=function(position){
position=this.normalize(position);
position=position - this._clones.length / 2;
return this.normalize(position, true);
};
Owl.prototype.maximum=function(relative){
var maximum, width, i=0, coordinate,
settings=this.settings;
if(relative){
return this._items.length - 1;
}
if(!settings.loop&&settings.center){
maximum=this._items.length - 1;
}else if(!settings.loop&&!settings.center){
maximum=this._items.length - settings.items;
}else if(settings.loop||settings.center){
maximum=this._items.length + settings.items;
}else if(settings.autoWidth||settings.merge){
revert=settings.rtl ? 1:-1;
width=this.$stage.width() - this.$element.width();
while (coordinate=this.coordinates(i)){
if(coordinate * revert >=width){
break;
}
maximum=++i;
}}else{
throw 'Can not detect maximum absolute position.'
}
return maximum;
};
Owl.prototype.minimum=function(relative){
if(relative){
return 0;
}
return this._clones.length / 2;
};
Owl.prototype.items=function(position){
if(position===undefined){
return this._items.slice();
}
position=this.normalize(position, true);
return this._items[position];
};
Owl.prototype.mergers=function(position){
if(position===undefined){
return this._mergers.slice();
}
position=this.normalize(position, true);
return this._mergers[position];
};
Owl.prototype.clones=function(position){
var odd=this._clones.length / 2,
even=odd + this._items.length,
map=function(index){ return index % 2===0 ? even + index / 2:odd - (index + 1) / 2 };
if(position===undefined){
return $.map(this._clones, function(v, i){ return map(i) });
}
return $.map(this._clones, function(v, i){ return v===position ? map(i):null });
};
Owl.prototype.speed=function(speed){
if(speed!==undefined){
this._speed=speed;
}
return this._speed;
};
Owl.prototype.coordinates=function(position){
var coordinate=null;
if(position===undefined){
return $.map(this._coordinates, $.proxy(function(coordinate, index){
return this.coordinates(index);
}, this));
}
if(this.settings.center){
coordinate=this._coordinates[position];
coordinate +=(this.width() - coordinate + (this._coordinates[position - 1]||0)) / 2 * (this.settings.rtl ? -1:1);
}else{
coordinate=this._coordinates[position - 1]||0;
}
return coordinate;
};
Owl.prototype.duration=function(from, to, factor){
return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor||this.settings.smartSpeed));
};
Owl.prototype.to=function(position, speed){
if(this.settings.loop){
var distance=position - this.relative(this.current()),
revert=this.current(),
before=this.current(),
after=this.current() + distance,
direction=before - after < 0 ? true:false,
items=this._clones.length + this._items.length;
if(after < this.settings.items&&direction===false){
revert=before + this._items.length;
this.reset(revert);
}else if(after >=items - this.settings.items&&direction===true){
revert=before - this._items.length;
this.reset(revert);
}
window.clearTimeout(this.e._goToLoop);
this.e._goToLoop=window.setTimeout($.proxy(function(){
this.speed(this.duration(this.current(), revert + distance, speed));
this.current(revert + distance);
this.update();
}, this), 30);
}else{
this.speed(this.duration(this.current(), position, speed));
this.current(position);
this.update();
}};
Owl.prototype.next=function(speed){
speed=speed||false;
this.to(this.relative(this.current()) + 1, speed);
};
Owl.prototype.prev=function(speed){
speed=speed||false;
this.to(this.relative(this.current()) - 1, speed);
};
Owl.prototype.transitionEnd=function(event){
if(event!==undefined){
event.stopPropagation();
if((event.target||event.srcElement||event.originalTarget)!==this.$stage.get(0)){
return false;
}}
this.state.inMotion=false;
this.trigger('translated');
};
Owl.prototype.viewport=function(){
var width;
if(this.options.responsiveBaseElement!==window){
width=$(this.options.responsiveBaseElement).width();
}else if(window.innerWidth){
width=window.innerWidth;
}else if(document.documentElement&&document.documentElement.clientWidth){
width=document.documentElement.clientWidth;
}else{
throw 'Can not detect viewport width.';
}
return width;
};
Owl.prototype.replace=function(content){
this.$stage.empty();
this._items=[];
if(content){
content=(content instanceof jQuery) ? content:$(content);
}
if(this.settings.nestedItemSelector){
content=content.find('.' + this.settings.nestedItemSelector);
}
content.filter(function(){
return this.nodeType===1;
}).each($.proxy(function(index, item){
item=this.prepare(item);
this.$stage.append(item);
this._items.push(item);
this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1||1);
}, this));
this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition:0);
this.invalidate('items');
};
Owl.prototype.add=function(content, position){
position=position===undefined ? this._items.length:this.normalize(position, true);
this.trigger('add', { content: content, position: position });
if(this._items.length===0||position===this._items.length){
this.$stage.append(content);
this._items.push(content);
this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1||1);
}else{
this._items[position].before(content);
this._items.splice(position, 0, content);
this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1||1);
}
this.invalidate('items');
this.trigger('added', { content: content, position: position });
};
Owl.prototype.remove=function(position){
position=this.normalize(position, true);
if(position===undefined){
return;
}
this.trigger('remove', { content: this._items[position], position: position });
this._items[position].remove();
this._items.splice(position, 1);
this._mergers.splice(position, 1);
this.invalidate('items');
this.trigger('removed', { content: null, position: position });
};
Owl.prototype.addTriggerableEvents=function(){
var handler=$.proxy(function(callback, event){
return $.proxy(function(e){
if(e.relatedTarget!==this){
this.suppress([ event ]);
callback.apply(this, [].slice.call(arguments, 1));
this.release([ event ]);
}}, this);
}, this);
$.each({
'next': this.next,
'prev': this.prev,
'to': this.to,
'destroy': this.destroy,
'refresh': this.refresh,
'replace': this.replace,
'add': this.add,
'remove': this.remove
}, $.proxy(function(event, callback){
this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
}, this));
};
Owl.prototype.watchVisibility=function(){
if(!isElVisible(this.$element.get(0))){
this.$element.addClass('owl-hidden');
window.clearInterval(this.e._checkVisibile);
this.e._checkVisibile=window.setInterval($.proxy(checkVisible, this), 500);
}
function isElVisible(el){
return el.offsetWidth > 0&&el.offsetHeight > 0;
}
function checkVisible(){
if(isElVisible(this.$element.get(0))){
this.$element.removeClass('owl-hidden');
this.refresh();
window.clearInterval(this.e._checkVisibile);
}}
};
Owl.prototype.preloadAutoWidthImages=function(imgs){
var loaded, that, $el, img;
loaded=0;
that=this;
imgs.each(function(i, el){
$el=$(el);
img=new Image();
img.onload=function(){
loaded++;
$el.attr('src', img.src);
$el.css('opacity', 1);
if(loaded >=imgs.length){
that.state.imagesLoaded=true;
that.initialize();
}};
img.src=$el.attr('src')||$el.attr('data-src')||$el.attr('data-src-retina');
});
};
Owl.prototype.destroy=function(){
if(this.$element.hasClass(this.settings.themeClass)){
this.$element.removeClass(this.settings.themeClass);
}
if(this.settings.responsive!==false){
$(window).off('resize.owl.carousel');
}
if(this.transitionEndVendor){
this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
}
for(var i in this._plugins){
this._plugins[i].destroy();
}
if(this.settings.mouseDrag||this.settings.touchDrag){
this.$stage.off('mousedown touchstart touchcancel');
$(document).off('.owl.dragEvents');
this.$stage.get(0).onselectstart=function(){};
this.$stage.off('dragstart', function(){ return false });
}
this.$element.off('.owl');
this.$stage.children('.cloned').remove();
this.e=null;
this.$element.removeData('owlCarousel');
this.$stage.children().contents().unwrap();
this.$stage.children().unwrap();
this.$stage.unwrap();
};
Owl.prototype.op=function(a, o, b){
var rtl=this.settings.rtl;
switch (o){
case '<':
return rtl ? a > b:a < b;
case '>':
return rtl ? a < b:a > b;
case '>=':
return rtl ? a <=b:a >=b;
case '<=':
return rtl ? a >=b:a <=b;
default:
break;
}};
Owl.prototype.on=function(element, event, listener, capture){
if(element.addEventListener){
element.addEventListener(event, listener, capture);
}else if(element.attachEvent){
element.attachEvent('on' + event, listener);
}};
Owl.prototype.off=function(element, event, listener, capture){
if(element.removeEventListener){
element.removeEventListener(event, listener, capture);
}else if(element.detachEvent){
element.detachEvent('on' + event, listener);
}};
Owl.prototype.trigger=function(name, data, namespace){
var status={
item: { count: this._items.length, index: this.current() }}, handler=$.camelCase($.grep([ 'on', name, namespace ], function(v){ return v })
.join('-').toLowerCase()
), event=$.Event([ name, 'owl', namespace||'carousel' ].join('.').toLowerCase(),
$.extend({ relatedTarget: this }, status, data)
);
if(!this._supress[name]){
$.each(this._plugins, function(name, plugin){
if(plugin.onTrigger){
plugin.onTrigger(event);
}});
this.$element.trigger(event);
if(this.settings&&typeof this.settings[handler]==='function'){
this.settings[handler].apply(this, event);
}}
return event;
};
Owl.prototype.suppress=function(events){
$.each(events, $.proxy(function(index, event){
this._supress[event]=true;
}, this));
}
Owl.prototype.release=function(events){
$.each(events, $.proxy(function(index, event){
delete this._supress[event];
}, this));
}
Owl.prototype.browserSupport=function(){
this.support3d=isPerspective();
if(this.support3d){
this.transformVendor=isTransform();
var endVendors=[ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
this.transitionEndVendor=endVendors[isTransition()];
this.vendorName=this.transformVendor.replace(/Transform/i, '');
this.vendorName=this.vendorName!=='' ? '-' + this.vendorName.toLowerCase() + '-':'';
}
this.state.orientation=window.orientation;
};
function getTouches(event){
if(event.touches!==undefined){
return {
x: event.touches[0].pageX,
y: event.touches[0].pageY
};}
if(event.touches===undefined){
if(event.pageX!==undefined){
return {
x: event.pageX,
y: event.pageY
};}
if(event.pageX===undefined){
return {
x: event.clientX,
y: event.clientY
};}}
}
function isStyleSupported(array){
var p, s, fake=document.createElement('div'), list=array;
for (p in list){
s=list[p];
if(typeof fake.style[s]!=='undefined'){
fake=null;
return [ s, p ];
}}
return [ false ];
}
function isTransition(){
return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
}
function isTransform(){
return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
}
function isPerspective(){
return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
}
function isTouchSupport(){
return 'ontouchstart' in window||!!(navigator.msMaxTouchPoints);
}
function isTouchSupportIE(){
return window.navigator.msPointerEnabled;
}
$.fn.owlCarousel=function(options){
return this.each(function(){
if(!$(this).data('owlCarousel')){
$(this).data('owlCarousel', new Owl(this, options));
}});
};
$.fn.owlCarousel.Constructor=Owl;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
var Lazy=function(carousel){
this._core=carousel;
this._loaded=[];
this._handlers={
'initialized.owl.carousel change.owl.carousel': $.proxy(function(e){
if(!e.namespace){
return;
}
if(!this._core.settings||!this._core.settings.lazyLoad){
return;
}
if((e.property&&e.property.name=='position')||e.type=='initialized'){
var settings=this._core.settings,
n=(settings.center&&Math.ceil(settings.items / 2)||settings.items),
i=((settings.center&&n * -1)||0),
position=((e.property&&e.property.value)||this._core.current()) + i,
clones=this._core.clones().length,
load=$.proxy(function(i, v){ this.load(v) }, this);
while (i++ < n){
this.load(clones / 2 + this._core.relative(position));
clones&&$.each(this._core.clones(this._core.relative(position++)), load);
}}
}, this)
};
this._core.options=$.extend({}, Lazy.Defaults, this._core.options);
this._core.$element.on(this._handlers);
}
Lazy.Defaults={
lazyLoad: false
}
Lazy.prototype.load=function(position){
var $item=this._core.$stage.children().eq(position),
$elements=$item&&$item.find('.owl-lazy');
if(!$elements||$.inArray($item.get(0), this._loaded) > -1){
return;
}
$elements.each($.proxy(function(index, element){
var $element=$(element), image,
url=(window.devicePixelRatio > 1&&$element.attr('data-src-retina'))||$element.attr('data-src');
this._core.trigger('load', { element: $element, url: url }, 'lazy');
if($element.is('img')){
$element.one('load.owl.lazy', $.proxy(function(){
$element.css('opacity', 1);
this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
}, this)).attr('src', url);
}else{
image=new Image();
image.onload=$.proxy(function(){
$element.css({
'background-image': 'url(' + url + ')',
'opacity': '1'
});
this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
}, this);
image.src=url;
}}, this));
this._loaded.push($item.get(0));
}
Lazy.prototype.destroy=function(){
var handler, property;
for (handler in this.handlers){
this._core.$element.off(handler, this.handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}}
$.fn.owlCarousel.Constructor.Plugins.Lazy=Lazy;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
var AutoHeight=function(carousel){
this._core=carousel;
this._handlers={
'initialized.owl.carousel': $.proxy(function(){
if(this._core.settings.autoHeight){
this.update();
}}, this),
'changed.owl.carousel': $.proxy(function(e){
if(this._core.settings.autoHeight&&e.property.name=='position'){
this.update();
}}, this),
'loaded.owl.lazy': $.proxy(function(e){
if(this._core.settings.autoHeight&&e.element.closest('.' + this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())){
this.update();
}}, this)
};
this._core.options=$.extend({}, AutoHeight.Defaults, this._core.options);
this._core.$element.on(this._handlers);
};
AutoHeight.Defaults={
autoHeight: false,
autoHeightClass: 'owl-height'
};
AutoHeight.prototype.update=function(){
this._core.$stage.parent()
.height(this._core.$stage.children().eq(this._core.current()).height())
.addClass(this._core.settings.autoHeightClass);
};
AutoHeight.prototype.destroy=function(){
var handler, property;
for (handler in this._handlers){
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}};
$.fn.owlCarousel.Constructor.Plugins.AutoHeight=AutoHeight;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
var Video=function(carousel){
this._core=carousel;
this._videos={};
this._playing=null;
this._fullscreen=false;
this._handlers={
'resize.owl.carousel': $.proxy(function(e){
if(this._core.settings.video&&!this.isInFullScreen()){
e.preventDefault();
}}, this),
'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e){
if(this._playing){
this.stop();
}}, this),
'prepared.owl.carousel': $.proxy(function(e){
var $element=$(e.content).find('.owl-video');
if($element.length){
$element.css('display', 'none');
this.fetch($element, $(e.content));
}}, this)
};
this._core.options=$.extend({}, Video.Defaults, this._core.options);
this._core.$element.on(this._handlers);
this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e){
this.play(e);
}, this));
};
Video.Defaults={
video: false,
videoHeight: false,
videoWidth: false
};
Video.prototype.fetch=function(target, item){
var type=target.attr('data-vimeo-id') ? 'vimeo':'youtube',
id=target.attr('data-vimeo-id')||target.attr('data-youtube-id'),
width=target.attr('data-width')||this._core.settings.videoWidth,
height=target.attr('data-height')||this._core.settings.videoHeight,
url=target.attr('href');
if(url){
id=url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
if(id[3].indexOf('youtu') > -1){
type='youtube';
}else if(id[3].indexOf('vimeo') > -1){
type='vimeo';
}else{
throw new Error('Video URL not supported.');
}
id=id[6];
}else{
throw new Error('Missing video URL.');
}
this._videos[url]={
type: type,
id: id,
width: width,
height: height
};
item.attr('data-video', url);
this.thumbnail(target, this._videos[url]);
};
Video.prototype.thumbnail=function(target, video){
var tnLink,
icon,
path,
dimensions=video.width&&video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"':'',
customTn=target.find('img'),
srcType='src',
lazyClass='',
settings=this._core.settings,
create=function(path){
icon='<div class="owl-video-play-icon"></div>';
if(settings.lazyLoad){
tnLink='<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
}else{
tnLink='<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
}
target.after(tnLink);
target.after(icon);
};
target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
if(this._core.settings.lazyLoad){
srcType='data-src';
lazyClass='owl-lazy';
}
if(customTn.length){
create(customTn.attr(srcType));
customTn.remove();
return false;
}
if(video.type==='youtube'){
path="http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
create(path);
}else if(video.type==='vimeo'){
$.ajax({
type: 'GET',
url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
jsonp: 'callback',
dataType: 'jsonp',
success: function(data){
path=data[0].thumbnail_large;
create(path);
}});
}};
Video.prototype.stop=function(){
this._core.trigger('stop', null, 'video');
this._playing.find('.owl-video-frame').remove();
this._playing.removeClass('owl-video-playing');
this._playing=null;
};
Video.prototype.play=function(ev){
this._core.trigger('play', null, 'video');
if(this._playing){
this.stop();
}
var target=$(ev.target||ev.srcElement),
item=target.closest('.' + this._core.settings.itemClass),
video=this._videos[item.attr('data-video')],
width=video.width||'100%',
height=video.height||this._core.$stage.height(),
html, wrap;
if(video.type==='youtube'){
html='<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
}else if(video.type==='vimeo'){
html='<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
+ '" height="' + height
+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
}
item.addClass('owl-video-playing');
this._playing=item;
wrap=$('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
+ html + '</div>');
target.after(wrap);
};
Video.prototype.isInFullScreen=function(){
var element=document.fullscreenElement||document.mozFullScreenElement
|| document.webkitFullscreenElement;
if(element&&$(element).parent().hasClass('owl-video-frame')){
this._core.speed(0);
this._fullscreen=true;
}
if(element&&this._fullscreen&&this._playing){
return false;
}
if(this._fullscreen){
this._fullscreen=false;
return false;
}
if(this._playing){
if(this._core.state.orientation!==window.orientation){
this._core.state.orientation=window.orientation;
return false;
}}
return true;
};
Video.prototype.destroy=function(){
var handler, property;
this._core.$element.off('click.owl.video');
for (handler in this._handlers){
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}};
$.fn.owlCarousel.Constructor.Plugins.Video=Video;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
var Animate=function(scope){
this.core=scope;
this.core.options=$.extend({}, Animate.Defaults, this.core.options);
this.swapping=true;
this.previous=undefined;
this.next=undefined;
this.handlers={
'change.owl.carousel': $.proxy(function(e){
if(e.property.name=='position'){
this.previous=this.core.current();
this.next=e.property.value;
}}, this),
'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e){
this.swapping=e.type=='translated';
}, this),
'translate.owl.carousel': $.proxy(function(e){
if(this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){
this.swap();
}}, this)
};
this.core.$element.on(this.handlers);
};
Animate.Defaults={
animateOut: false,
animateIn: false
};
Animate.prototype.swap=function(){
if(this.core.settings.items!==1||!this.core.support3d){
return;
}
this.core.speed(0);
var left,
clear=$.proxy(this.clear, this),
previous=this.core.$stage.children().eq(this.previous),
next=this.core.$stage.children().eq(this.next),
incoming=this.core.settings.animateIn,
outgoing=this.core.settings.animateOut;
if(this.core.current()===this.previous){
return;
}
if(outgoing){
left=this.core.coordinates(this.previous) - this.core.coordinates(this.next);
previous.css({ 'left': left + 'px' })
.addClass('animated owl-animated-out')
.addClass(outgoing)
.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
}
if(incoming){
next.addClass('animated owl-animated-in')
.addClass(incoming)
.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
}};
Animate.prototype.clear=function(e){
$(e.target).css({ 'left': '' })
.removeClass('animated owl-animated-out owl-animated-in')
.removeClass(this.core.settings.animateIn)
.removeClass(this.core.settings.animateOut);
this.core.transitionEnd();
}
Animate.prototype.destroy=function(){
var handler, property;
for (handler in this.handlers){
this.core.$element.off(handler, this.handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}};
$.fn.owlCarousel.Constructor.Plugins.Animate=Animate;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
var Autoplay=function(scope){
this.core=scope;
this.core.options=$.extend({}, Autoplay.Defaults, this.core.options);
this.handlers={
'translated.owl.carousel refreshed.owl.carousel': $.proxy(function(){
this.autoplay();
}, this),
'play.owl.autoplay': $.proxy(function(e, t, s){
this.play(t, s);
}, this),
'stop.owl.autoplay': $.proxy(function(){
this.stop();
}, this),
'mouseover.owl.autoplay': $.proxy(function(){
if(this.core.settings.autoplayHoverPause){
this.pause();
}}, this),
'mouseleave.owl.autoplay': $.proxy(function(){
if(this.core.settings.autoplayHoverPause){
this.autoplay();
}}, this)
};
this.core.$element.on(this.handlers);
};
Autoplay.Defaults={
autoplay: false,
autoplayTimeout: 5000,
autoplayHoverPause: false,
autoplaySpeed: false
};
Autoplay.prototype.autoplay=function(){
if(this.core.settings.autoplay&&!this.core.state.videoPlay){
window.clearInterval(this.interval);
this.interval=window.setInterval($.proxy(function(){
this.play();
}, this), this.core.settings.autoplayTimeout);
}else{
window.clearInterval(this.interval);
}};
Autoplay.prototype.play=function(timeout, speed){
if(document.hidden===true){
return;
}
if(this.core.state.isTouch||this.core.state.isScrolling
|| this.core.state.isSwiping||this.core.state.inMotion){
return;
}
if(this.core.settings.autoplay===false){
window.clearInterval(this.interval);
return;
}
this.core.next(this.core.settings.autoplaySpeed);
};
Autoplay.prototype.stop=function(){
window.clearInterval(this.interval);
};
Autoplay.prototype.pause=function(){
window.clearInterval(this.interval);
};
Autoplay.prototype.destroy=function(){
var handler, property;
window.clearInterval(this.interval);
for (handler in this.handlers){
this.core.$element.off(handler, this.handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}};
$.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
'use strict';
var Navigation=function(carousel){
this._core=carousel;
this._initialized=false;
this._pages=[];
this._controls={};
this._templates=[];
this.$element=this._core.$element;
this._overrides={
next: this._core.next,
prev: this._core.prev,
to: this._core.to
};
this._handlers={
'prepared.owl.carousel': $.proxy(function(e){
if(this._core.settings.dotsData){
this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
}}, this),
'add.owl.carousel': $.proxy(function(e){
if(this._core.settings.dotsData){
this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
}}, this),
'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e){
if(this._core.settings.dotsData){
this._templates.splice(e.position, 1);
}}, this),
'change.owl.carousel': $.proxy(function(e){
if(e.property.name=='position'){
if(!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){
var current=this._core.current(),
maximum=this._core.maximum(),
minimum=this._core.minimum();
e.data=e.property.value > maximum
? current >=maximum ? minimum:maximum
: e.property.value < minimum ? maximum:e.property.value;
}}
}, this),
'changed.owl.carousel': $.proxy(function(e){
if(e.property.name=='position'){
this.draw();
}}, this),
'refreshed.owl.carousel': $.proxy(function(){
if(!this._initialized){
this.initialize();
this._initialized=true;
}
this._core.trigger('refresh', null, 'navigation');
this.update();
this.draw();
this._core.trigger('refreshed', null, 'navigation');
}, this)
};
this._core.options=$.extend({}, Navigation.Defaults, this._core.options);
this.$element.on(this._handlers);
}
Navigation.Defaults={
nav: false,
navRewind: true,
navText: [ 'prev', 'next' ],
navSpeed: false,
navElement: 'div',
navContainer: false,
navContainerClass: 'owl-nav',
navClass: [ 'owl-prev', 'owl-next' ],
slideBy: 1,
dotClass: 'owl-dot',
dotsClass: 'owl-dots',
dots: true,
dotsEach: true,
dotData: false,
dotsSpeed: false,
dotsContainer: false,
controlsClass: 'owl-controls'
}
Navigation.prototype.initialize=function(){
var $container, override,
options=this._core.settings;
if(!options.dotsData){
this._templates=[ $('<div>')
.addClass(options.dotClass)
.append($('<span>'))
.prop('outerHTML') ];
}
if(!options.navContainer||!options.dotsContainer){
this._controls.$container=$('<div>')
.addClass(options.controlsClass)
.appendTo(this.$element);
}
this._controls.$indicators=options.dotsContainer ? $(options.dotsContainer)
: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);
this._controls.$indicators.on('click', 'div', $.proxy(function(e){
var index=$(e.target).parent().is(this._controls.$indicators)
? $(e.target).index():$(e.target).parent().index();
e.preventDefault();
this.to(index, options.dotsSpeed);
}, this));
$container=options.navContainer ? $(options.navContainer)
: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);
this._controls.$next=$('<' + options.navElement + '>');
this._controls.$previous=this._controls.$next.clone();
this._controls.$previous
.addClass(options.navClass[0])
.html(options.navText[0])
.hide()
.prependTo($container)
.on('click', $.proxy(function(e){
this.prev(options.navSpeed);
}, this));
this._controls.$next
.addClass(options.navClass[1])
.html(options.navText[1])
.hide()
.appendTo($container)
.on('click', $.proxy(function(e){
this.next(options.navSpeed);
}, this));
for (override in this._overrides){
this._core[override]=$.proxy(this[override], this);
}}
Navigation.prototype.destroy=function(){
var handler, control, property, override;
for (handler in this._handlers){
this.$element.off(handler, this._handlers[handler]);
}
for (control in this._controls){
this._controls[control].remove();
}
for (override in this.overides){
this._core[override]=this._overrides[override];
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}}
Navigation.prototype.update=function(){
var i, j, k,
options=this._core.settings,
lower=this._core.clones().length / 2,
upper=lower + this._core.items().length,
size=options.center||options.autoWidth||options.dotData
? 1:options.dotsEach||options.items;
if(options.slideBy!=='page'){
options.slideBy=Math.min(options.slideBy, options.items);
}
if(options.dots||options.slideBy=='page'){
this._pages=[];
for (i=lower, j=0, k=0; i < upper; i++){
if(j >=size||j===0){
this._pages.push({
start: i - lower,
end: i - lower + size - 1
});
j=0, ++k;
}
j +=this._core.mergers(this._core.relative(i));
}}
}
Navigation.prototype.draw=function(){
var difference, i, html='',
options=this._core.settings,
$items=this._core.$stage.children(),
index=this._core.relative(this._core.current());
if(options.nav&&!options.loop&&!options.navRewind){
this._controls.$previous.toggleClass('disabled', index <=0);
this._controls.$next.toggleClass('disabled', index >=this._core.maximum());
}
this._controls.$previous.toggle(options.nav);
this._controls.$next.toggle(options.nav);
if(options.dots){
difference=this._pages.length - this._controls.$indicators.children().length;
if(options.dotData&&difference!==0){
for (i=0; i < this._controls.$indicators.children().length; i++){
html +=this._templates[this._core.relative(i)];
}
this._controls.$indicators.html(html);
}else if(difference > 0){
html=new Array(difference + 1).join(this._templates[0]);
this._controls.$indicators.append(html);
}else if(difference < 0){
this._controls.$indicators.children().slice(difference).remove();
}
this._controls.$indicators.find('.active').removeClass('active');
this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
}
this._controls.$indicators.toggle(options.dots);
}
Navigation.prototype.onTrigger=function(event){
var settings=this._core.settings;
event.page={
index: $.inArray(this.current(), this._pages),
count: this._pages.length,
size: settings&&(settings.center||settings.autoWidth||settings.dotData
? 1:settings.dotsEach||settings.items)
};}
Navigation.prototype.current=function(){
var index=this._core.relative(this._core.current());
return $.grep(this._pages, function(o){
return o.start <=index&&o.end >=index;
}).pop();
}
Navigation.prototype.getPosition=function(successor){
var position, length,
options=this._core.settings;
if(options.slideBy=='page'){
position=$.inArray(this.current(), this._pages);
length=this._pages.length;
successor ? ++position:--position;
position=this._pages[((position % length) + length) % length].start;
}else{
position=this._core.relative(this._core.current());
length=this._core.items().length;
successor ? position +=options.slideBy:position -=options.slideBy;
}
return position;
}
Navigation.prototype.next=function(speed){
$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
}
Navigation.prototype.prev=function(speed){
$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
}
Navigation.prototype.to=function(position, speed, standard){
var length;
if(!standard){
length=this._pages.length;
$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
}else{
$.proxy(this._overrides.to, this._core)(position, speed);
}}
$.fn.owlCarousel.Constructor.Plugins.Navigation=Navigation;
})(window.Zepto||window.jQuery, window, document);
;(function($, window, document, undefined){
'use strict';
var Hash=function(carousel){
this._core=carousel;
this._hashes={};
this.$element=this._core.$element;
this._handlers={
'initialized.owl.carousel': $.proxy(function(){
if(this._core.settings.startPosition=='URLHash'){
$(window).trigger('hashchange.owl.navigation');
}}, this),
'prepared.owl.carousel': $.proxy(function(e){
var hash=$(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
this._hashes[hash]=e.content;
}, this)
};
this._core.options=$.extend({}, Hash.Defaults, this._core.options);
this.$element.on(this._handlers);
$(window).on('hashchange.owl.navigation', $.proxy(function(){
var hash=window.location.hash.substring(1),
items=this._core.$stage.children(),
position=this._hashes[hash]&&items.index(this._hashes[hash])||0;
if(!hash){
return false;
}
this._core.to(position, false, true);
}, this));
}
Hash.Defaults={
URLhashListener: false
}
Hash.prototype.destroy=function(){
var handler, property;
$(window).off('hashchange.owl.navigation');
for (handler in this._handlers){
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)){
typeof this[property]!='function'&&(this[property]=null);
}}
$.fn.owlCarousel.Constructor.Plugins.Hash=Hash;
})(window.Zepto||window.jQuery, window, document);
(function(e){function m(d,b,h,c,a){function j(){k.unbind();b&&v(b,h,c,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];u.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||u.css({display:"none",opacity:"0"});k.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+(a.resizeContainer?"height":""));"list"==a.layoutMode?
(q.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(q.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){u.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;if("function"==typeof a.onMixStart){var f=a.onMixStart.call(this,a);a=f?f:a}for(var g=a.transitionSpeed,f=0;2>
f;f++){var n=0==f?n=a.prefix:"";a.transition[n+"transition"]="all "+g+"ms linear";a.transition[n+"transform"]=n+"translate3d(0,0,0)";a.perspective[n+"perspective"]=a.perspectiveDistance+"px";a.perspective[n+"perspective-origin"]=a.perspectiveOrigin}var r=a.targetSelector,u=c.find(r);u.each(function(){this.data={}});var k=u.parent();k.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");
"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");f="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<f.indexOf("fade")?"0":"",a.scale=-1<f.indexOf("scale")?"scale(.01)":"",a.rotateZ=-1<f.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<
f.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<f.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<f.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<f.indexOf("grayscale")?"grayscale(100%)":"");d=d.replace(/\s|\//g,".");var q=e(),s=e();if("or"==a.filterLogic){var m=d.split(".");!0==a.multiFilter&&""==m[0]&&m.shift();1>m.length?s=s.add(c.find(r+":visible")):u.each(function(){for(var a=0,b=e(this),c=0;c<m.length;c++)b.hasClass(m[c])&&(q=q.add(b),a++);0==a&&(s=s.add(b))})}else q=q.add(k.find(r+"."+
d)),s=s.add(k.find(r+":not(."+d+"):visible"));d=q.length;var t=e(),p=e(),l=e();s.each(function(){var a=e(this);"none"!=a.css("display")&&(t=t.add(a),l=l.add(a))});if(q.filter(":visible").length==d&&!t.length&&!b){if(a.origLayout==a.layoutMode)return j(),!1;if(1==q.length)return"list"==a.layoutMode?(c.addClass(a.listClass),c.removeClass(a.gridClass),l.css("display",a.targetDisplayList)):(c.addClass(a.gridClass),c.removeClass(a.listClass),l.css("display",a.targetDisplayGrid)),j(),!1}a.origHeight=k.height();
if(q.length){c.removeClass(a.failClass);q.each(function(){var a=e(this);"none"==a.css("display")?p=p.add(a):l=l.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(c.addClass(a.listClass),c.removeClass(a.gridClass),l.css("display",a.targetDisplayList)):(c.addClass(a.gridClass),c.removeClass(a.listClass),l.css("display",a.targetDisplayGrid)),j(),!1;if(!window.atob)return j(),!1;u.css(a.clean);l.each(function(){this.data.origPos=e(this).offset()});"list"==a.layoutMode?
(c.addClass(a.listClass),c.removeClass(a.gridClass),p.css("display",a.targetDisplayList)):(c.addClass(a.gridClass),c.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));p.each(function(){this.data.showInterPos=e(this).offset()});t.each(function(){this.data.hideInterPos=e(this).offset()});l.each(function(){this.data.preInterPos=e(this).offset()});"list"==a.layoutMode?l.css("display",a.targetDisplayList):l.css("display",a.targetDisplayGrid);b&&v(b,h,c,a);if(b&&a.origSort.compare(a.checkSort))return j(),
!1;t.hide();p.each(function(){this.data.finalPos=e(this).offset()});l.each(function(){this.data.finalPrePos=e(this).offset()});a.newHeight=k.height();b&&v("reset",null,c,a);p.hide();l.css("display",a.origDisplay);"block"==a.origDisplay?(c.addClass(a.listClass),p.css("display",a.targetDisplayList)):(c.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));a.resizeContainer&&k.css("height",a.origHeight+"px");d={};for(f=0;2>f;f++)n=0==f?n=a.prefix:"",d[n+"transform"]=a.scale+" "+a.rotateX+" "+
a.rotateY+" "+a.rotateZ,d[n+"filter"]=a.blur+" "+a.grayscale;p.css(d);l.each(function(){var b=this.data,c=e(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var d={},g=0;2>g;g++){var f=0==g?f=a.prefix:"";d[f+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(d)});"list"==a.layoutMode?(c.addClass(a.listClass),c.removeClass(a.gridClass)):
(c.addClass(a.gridClass),c.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var d=0==c?d=a.prefix:"";b[d+"transition"]="all "+g+"ms ease-in-out";b.height=a.newHeight+"px"}k.css(b)}t.css("opacity",a.fade);p.css("opacity",1);p.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition-property"]=f+"transform, "+f+"filter, opacity";c[f+
"transition-timing-function"]=a.easing+", linear, linear";c[f+"transition-duration"]=g+"ms";c[f+"transition-delay"]="0";c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[f+"filter"]="none"}e(this).css("-webkit-transition","all "+g+"ms "+a.easingFallback).css(c)});l.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition"]=
"all "+g+"ms "+a.easing;c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}e(this).css("-webkit-transition","all "+g+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)d=0==c?d=a.prefix:"",b[d+"transition"]="all "+g+"ms "+a.easing+", "+d+"filter "+g+"ms linear, opacity "+g+"ms linear",b[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[d+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;t.css(b);k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){if(-1<
a.originalEvent.propertyName.indexOf("transform")||-1<a.originalEvent.propertyName.indexOf("opacity"))-1<r.indexOf(".")?e(a.target).hasClass(r.replace(".",""))&&j():e(a.target).is(r)&&j()})},10);a.failsafe=setTimeout(function(){a.mixing&&j()},g+400)}else{a.resizeContainer&&k.css("height",a.origHeight+"px");if(!window.atob)return j(),!1;t=s;setTimeout(function(){k.css(a.perspective);if(a.resizeContainer){for(var b={},d=0;2>d;d++){var e=0==d?e=a.prefix:"";b[e+"transition"]="height "+g+"ms ease-in-out";
b.height=a.minHeight+"px"}k.css(b)}u.css(a.transition);if(s.length){b={};for(d=0;2>d;d++)e=0==d?e=a.prefix:"",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;t.css(b);k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))c.addClass(a.failClass),j()})}else a.mixing=!1},10)}}function v(d,b,
h,c){function a(a,b){return 1*a.attr(d).toLowerCase()<1*b.attr(d).toLowerCase()?-1:1*a.attr(d).toLowerCase()>1*b.attr(d).toLowerCase()?1:0}function j(a){"asc"==b?f.prepend(a).prepend(" \
"):f.append(a).append(" \
")}h.find(c.targetSelector).wrapAll('<div class="mix_sorter"/>');var f=h.find(".mix_sorter");c.origSort.length||f.find(c.targetSelector+":visible").each(function(){e(this).wrap("<s/>");c.origSort.push(e(this).parent().html().replace(/\s+/g,""));e(this).unwrap()});f.empty();if("reset"==d)e.each(c.startOrder,
function(){f.append(this).append(" \
")});else if("default"==d)e.each(c.origOrder,function(){j(this)});else if("random"==d){if(!c.newOrder.length){for(var g=c.startOrder.slice(),n=g.length,r=n;r--;){var m=parseInt(Math.random()*n),k=g[r];g[r]=g[m];g[m]=k}c.newOrder=g}e.each(c.newOrder,function(){f.append(this).append(" \
")})}else"custom"==d?e.each(b,function(){j(this)}):("undefined"===typeof c.origOrder[0].attr(d)&&console.log("No such attribute found. Terminating"),c.newOrder.length||(e.each(c.origOrder,
function(){c.newOrder.push(e(this))}),c.newOrder.sort(a)),e.each(c.newOrder,function(){j(this)}));c.checkSort=[];f.find(c.targetSelector+":visible").each(function(a){var b=e(this);0==a&&b.attr("data-checksum","1");b.wrap("<s/>");c.checkSort.push(b.parent().html().replace(/\s+/g,""));b.unwrap()});h.find(c.targetSelector).unwrap()}var w={init:function(d){return this.each(function(){var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],
listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,
newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};d&&e.extend(b,d);this.config=b;e.support.touch="ontouchend"in document;e.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=e(this);var h=b.container,c;a:{c=h[0];for(var a=["Webkit","Moz","O","ms"],j=0;j<a.length;j++)if(a[j]+"Transition"in c.style){c=a[j];break a}c="transition"in c.style?"":!1}b.prefix=
c;b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";h.find(b.targetSelector).each(function(){b.origOrder.push(e(this))});for(c=0;2>c;c++)a=0==c?a=b.prefix:"",b.transition[a+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[a+"perspective"]=b.perspectiveDistance+"px",b.perspective[a+"perspective-origin"]=b.perspectiveOrigin;for(c=0;2>c;c++)a=0==c?a=b.prefix:"",b.clean[a+"transition"]="none";"list"==b.layoutMode?(h.addClass(b.listClass),b.origDisplay=b.targetDisplayList):(h.addClass(b.gridClass),
b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;c=b.showOnLoad.split(" ");e.each(c,function(){e(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});h.find(b.targetSelector).addClass("mix_all");"all"==c[0]&&(c[0]="mix_all",b.showOnLoad="mix_all");var f=e();e.each(c,function(){f=f.add(e("."+this))});f.each(function(){var a=e(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);a.css(b.transition)});setTimeout(function(){b.mixing=
!0;f.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?f.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):f.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;e(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this),c=a.attr("data-sort"),d=a.attr("data-order");
if(a.hasClass("active")){if("random"!=c)return!1}else e(b.sortSelector).removeClass("active"),a.addClass("active");h.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});m(b.filter,c,d,h,b)}});e(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this);if(!1==b.multiFilter)e(b.filterSelector).removeClass("active"),a.addClass("active"),b.filter=a.attr("data-filter"),e(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active"),"all"==b.filter&&(b.filter="mix_all");
else{var c=a.attr("data-filter");"all"==c&&(c="mix_all");a.hasClass("active")?(a.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+c),"")):(a.addClass("active"),b.filter=b.filter+" "+c)}m(b.filter,null,null,h,b)}})})},toGrid:function(){return this.each(function(){var d=this.config;"grid"!=d.layoutMode&&(d.layoutMode="grid",m(d.filter,null,null,e(this),d))})},toList:function(){return this.each(function(){var d=this.config;"list"!=d.layoutMode&&(d.layoutMode="list",m(d.filter,null,null,
e(this),d))})},filter:function(d){return this.each(function(){var b=this.config;e(b.filterSelector).removeClass("active");e(b.filterSelector+'[data-filter="'+d+'"]').addClass("active");"all"==d&&(d="mix_all");b.mixing||(b.filter=d,m(d,null,null,e(this),b))})},sort:function(d){return this.each(function(){var b=this.config;if(e.isArray(d))var h=d[0],c=d[1];else h=d,c="desc";b.mixing||(e(this).find(b.targetSelector).each(function(){b.startOrder.push(e(this))}),m(b.filter,h,c,e(this),b))})}};e.fn.mixitup=
function(d,b){if(w[d])return w[d].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof d||!d)return w.init.apply(this,arguments)};e.fn.removeStyle=function(d){return this.each(function(){var b=e(this);d=d.replace(/\s+/g,"");var h=d.split(",");e.each(h,function(){var c=RegExp(this.toString()+"[^;]+;?","g");b.attr("style",function(a,b){if(b)return b.replace(c,"")})})})};Array.prototype.compare=function(d){if(this.length!=d.length)return!1;for(var b=0;b<d.length;b++)if(this[b].compare&&
!this[b].compare(d[b])||this[b]!==d[b])return!1;return!0}})(jQuery);
(function($){$.prettyPhoto={version:'3.1.4'};$.fn.prettyPhoto=function(pp_settings){pp_settings=jQuery.extend({hook:'data-rel',animation_speed:'fast',ajaxcallback:function(){},slideshow:5000,autoplay_slideshow:false,opacity:0.80,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:'/',theme:'pp_default',horizontal_padding:20,hideflash:false,wmode:'opaque',autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> \
<div class="ppt">&nbsp;</div> \
<div class="pp_top"> \
<div class="pp_left"></div> \
<div class="pp_middle"></div> \
<div class="pp_right"></div> \
</div> \
<div class="pp_content_container"> \
<div class="pp_left"> \
<div class="pp_right"> \
<div class="pp_content"> \
<div class="pp_loaderIcon"></div> \
<div class="pp_fade"> \
<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
<div class="pp_hoverContainer"> \
<a class="pp_next" href="#">next</a> \
<a class="pp_previous" href="#">previous</a> \
</div> \
<div id="pp_full_res"></div> \
<div class="pp_details"> \
<div class="pp_nav"> \
<a href="#" class="pp_arrow_previous">Previous</a> \
<p class="currentTextHolder">0/0</p> \
<a href="#" class="pp_arrow_next">Next</a> \
</div> \
<p class="pp_description"></p> \
<div class="pp_social">{pp_social}</div> \
<a class="pp_close" href="#">Close</a> \
</div> \
</div> \
</div> \
</div> \
</div> \
</div> \
<div class="pp_bottom"> \
<div class="pp_left"></div> \
<div class="pp_middle"></div> \
<div class="pp_right"></div> \
</div> \
</div> \
<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \
<a href="#" class="pp_arrow_previous">Previous</a> \
<div> \
<ul> \
{gallery} \
</ul> \
</div> \
<a href="#" class="pp_arrow_next">Next</a> \
</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:'',social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},pp_settings);var matchedObjects=this,percentBased=false,pp_dimensions,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=$(window).height(),windowWidth=$(window).width(),pp_slideshow;doresize=true,scroll_pos=_get_scroll();$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){_center_overlay();_resize_overlay();});if(pp_settings.keyboard_shortcuts){$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){if(typeof $pp_pic_holder!='undefined'){if($pp_pic_holder.is(':visible')){switch(e.keyCode){case 37:$.prettyPhoto.changePage('previous');e.preventDefault();break;case 39:$.prettyPhoto.changePage('next');e.preventDefault();break;case 27:if(!settings.modal)
$.prettyPhoto.close();e.preventDefault();break;};};};});};$.prettyPhoto.initialize=function(){settings=pp_settings;if(settings.theme=='pp_default')settings.horizontal_padding=16;if(settings.ie6_fallback&&$.browser.msie&&parseInt($.browser.version)==6)settings.theme="light_square";theRel=$(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return $(n).attr('href');}):$.makeArray($(this).attr('href'));pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).find('img').attr('alt'))?$(n).find('img').attr('alt'):"";}):$.makeArray($(this).find('img').attr('alt'));pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).attr('title'))?$(n).attr('title'):"";}):$.makeArray($(this).attr('title'));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray($(this).attr('href'),pp_images);rel_index=(isSet)?set_position:$("a["+settings.hook+"^='"+theRel+"']").index($(this));_build_overlay(this);if(settings.allow_resize)
$(window).bind('scroll.prettyphoto',function(){_center_overlay();});$.prettyPhoto.open();return false;}
$.prettyPhoto.open=function(event){if(typeof settings=="undefined"){settings=pp_settings;if($.browser.msie&&$.browser.version==6)settings.theme="light_square";pp_images=$.makeArray(arguments[0]);pp_titles=(arguments[1])?$.makeArray(arguments[1]):$.makeArray("");pp_descriptions=(arguments[2])?$.makeArray(arguments[2]):$.makeArray("");isSet=(pp_images.length>1)?true:false;set_position=(arguments[3])?arguments[3]:0;_build_overlay(event.target);}
if($.browser.msie&&$.browser.version==6)$('select').css('visibility','hidden');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden');_checkPosition($(pp_images).size());$('.pp_loaderIcon').show();if(settings.deeplinking)
setHashtag();if(settings.social_tools){facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));$pp_pic_holder.find('.pp_social').html(facebook_like_link);}
if($ppt.is(':hidden'))$ppt.css('opacity',0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+$(pp_images).size());if(typeof pp_descriptions[set_position]!='undefined'&&pp_descriptions[set_position]!=""){$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));}else{$pp_pic_holder.find('.pp_description').hide();}
movie_width=(parseFloat(getParam('width',pp_images[set_position])))?getParam('width',pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(getParam('height',pp_images[set_position])))?getParam('height',pp_images[set_position]):settings.default_height.toString();percentBased=false;if(movie_height.indexOf('%')!=-1){movie_height=parseFloat(($(window).height()*parseFloat(movie_height)/100)-150);percentBased=true;}
if(movie_width.indexOf('%')!=-1){movie_width=parseFloat(($(window).width()*parseFloat(movie_width)/100)-150);percentBased=true;}
$pp_pic_holder.fadeIn(function(){(settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html('&nbsp;');imgPreloader="";skipInjection=false;switch(_getFileType(pp_images[set_position])){case'image':imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position<$(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image();if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){pp_dimensions=_fitToViewport(imgPreloader.width,imgPreloader.height);_showContent();};imgPreloader.onerror=function(){alert('Image cannot be loaded. Make sure the path is correct and image exist.');$.prettyPhoto.close();};imgPreloader.src=pp_images[set_position];break;case'youtube':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=getParam('v',pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split('youtu.be/');movie_id=movie_id[1];if(movie_id.indexOf('?')>0)
movie_id=movie_id.substr(0,movie_id.indexOf('?'));if(movie_id.indexOf('&')>0)
movie_id=movie_id.substr(0,movie_id.indexOf('&'));}
movie='http://www.youtube.com/embed/'+movie_id;(getParam('data-rel',pp_images[set_position]))?movie+="?data-rel="+getParam('data-rel',pp_images[set_position]):movie+="?data-rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case'vimeo':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=pp_images[set_position];var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/;var match=movie_id.match(regExp);movie='http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0';if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=pp_dimensions['width']+'/embed/?moog_width='+pp_dimensions['width'];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);break;case'quicktime':pp_dimensions=_fitToViewport(movie_width,movie_height);pp_dimensions['height']+=15;pp_dimensions['contentHeight']+=15;pp_dimensions['containerHeight']+=15;toInject=settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case'flash':pp_dimensions=_fitToViewport(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf('?'));toInject=settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);break;case'iframe':pp_dimensions=_fitToViewport(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);break;case'ajax':doresize=false;pp_dimensions=_fitToViewport(movie_width,movie_height);doresize=true;skipInjection=true;$.get(pp_images[set_position],function(responseHTML){toInject=settings.inline_markup.replace(/{content}/g,responseHTML);$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();});break;case'custom':pp_dimensions=_fitToViewport(movie_width,movie_height);toInject=settings.custom_markup;break;case'inline':myClone=$(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();doresize=false;pp_dimensions=_fitToViewport($(myClone).width(),$(myClone).height());doresize=true;$(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());break;};if(!imgPreloader&&!skipInjection){$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();};});return false;};$.prettyPhoto.changePage=function(direction){currentGalleryPage=0;if(direction=='previous'){set_position--;if(set_position<0)set_position=$(pp_images).size()-1;}else if(direction=='next'){set_position++;if(set_position>$(pp_images).size()-1)set_position=0;}else{set_position=direction;};rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');}
_hideContent(function(){$.prettyPhoto.open();});};$.prettyPhoto.changeGalleryPage=function(direction){if(direction=='next'){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0;}else if(direction=='previous'){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage;}else{currentGalleryPage=direction;};slide_speed=(direction=='next'||direction=='previous')?settings.animation_speed:0;slide_to=currentGalleryPage*(itemsPerPage*itemWidth);$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);};$.prettyPhoto.startSlideshow=function(){if(typeof pp_slideshow=='undefined'){$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){$.prettyPhoto.stopSlideshow();return false;});pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow);}else{$.prettyPhoto.changePage('next');};}
$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});clearInterval(pp_slideshow);pp_slideshow=undefined;}
$.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;$.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){$(this).remove();});$pp_overlay.fadeOut(settings.animation_speed,function(){if($.browser.msie&&$.browser.version==6)$('select').css('visibility','visible');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible');$(this).remove();$(window).unbind('scroll.prettyphoto');clearHashtag();settings.callback();doresize=true;pp_open=false;delete settings;});};function _showContent(){$('.pp_loaderIcon').hide();projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(pp_dimensions['containerHeight']/2));if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find('.pp_content').animate({height:pp_dimensions['contentHeight'],width:pp_dimensions['contentWidth']},settings.animation_speed);$pp_pic_holder.animate({'top':projectedTop,'left':((windowWidth/2)-(pp_dimensions['containerWidth']/2)<0)?0:(windowWidth/2)-(pp_dimensions['containerWidth']/2),width:pp_dimensions['containerWidth']},settings.animation_speed,function(){$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);if(isSet&&_getFileType(pp_images[set_position])=="image"){$pp_pic_holder.find('.pp_hoverContainer').show();}else{$pp_pic_holder.find('.pp_hoverContainer').hide();}
if(settings.allow_expand){if(pp_dimensions['resized']){$('a.pp_expand,a.pp_contract').show();}else{$('a.pp_expand').hide();}}
if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)$.prettyPhoto.startSlideshow();settings.changepicturecallback();pp_open=true;});_insert_gallery();pp_settings.ajaxcallback();};function _hideContent(callback){$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){$('.pp_loaderIcon').show();callback();});};function _checkPosition(setCount){(setCount>1)?$('.pp_nav').show():$('.pp_nav').hide();};function _fitToViewport(width,height){resized=false;_getDimensions(width,height);imageWidth=width,imageHeight=height;if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){resized=true,fitting=false;while(!fitting){if((pp_containerWidth>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(height/width)*imageWidth;}else if((pp_containerHeight>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(width/height)*imageHeight;}else{fitting=true;};pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;};_getDimensions(imageWidth,imageHeight);if((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight)){_fitToViewport(pp_containerWidth,pp_containerHeight)};};return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+(settings.horizontal_padding*2),contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized};};function _getDimensions(width,height){width=parseFloat(width);height=parseFloat(height);$pp_details=$pp_pic_holder.find('.pp_details');$pp_details.width(width);detailsHeight=parseFloat($pp_details.css('marginTop'))+parseFloat($pp_details.css('marginBottom'));$pp_details=$pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({'position':'absolute','top':-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=34)?36:detailsHeight;if($.browser.msie&&$.browser.version==7)detailsHeight+=8;$pp_details.remove();$pp_title=$pp_pic_holder.find('.ppt');$pp_title.width(width);titleHeight=parseFloat($pp_title.css('marginTop'))+parseFloat($pp_title.css('marginBottom'));$pp_title=$pp_title.clone().appendTo($('body')).css({'position':'absolute','top':-10000});titleHeight+=$pp_title.height();$pp_title.remove();pp_contentHeight=height+detailsHeight;pp_contentWidth=width;pp_containerHeight=pp_contentHeight+titleHeight+$pp_pic_holder.find('.pp_top').height()+$pp_pic_holder.find('.pp_bottom').height();pp_containerWidth=width;}
function _getFileType(itemSrc){if(itemSrc.match(/youtube\.com\/watch/i)||itemSrc.match(/youtu\.be/i)){return'youtube';}else if(itemSrc.match(/vimeo\.com/i)){return'vimeo';}else if(itemSrc.match(/\b.mov\b/i)){return'quicktime';}else if(itemSrc.match(/\b.swf\b/i)){return'flash';}else if(itemSrc.match(/\biframe=true\b/i)){return'iframe';}else if(itemSrc.match(/\bajax=true\b/i)){return'ajax';}else if(itemSrc.match(/\bcustom=true\b/i)){return'custom';}else if(itemSrc.substr(0,1)=='#'){return'inline';}else{return'image';};};function _center_overlay(){if(doresize&&typeof $pp_pic_holder!='undefined'){scroll_pos=_get_scroll();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);if(projectedTop<0)projectedTop=0;if(contentHeight>windowHeight)
return;$pp_pic_holder.css({'top':projectedTop,'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)});};};function _get_scroll(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};};};function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height($(document).height()).width(windowWidth);};function _insert_gallery(){if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])=="image"&&(settings.ie6_fallback&&!($.browser.msie&&parseInt($.browser.version)==6))){itemWidth=52+5;navWidth=(settings.theme=="facebook"||settings.theme=="pp_default")?50:30;itemsPerPage=Math.floor((pp_dimensions['containerWidth']-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();}else{$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();};galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css('margin-left',-((galleryWidth/2)+(navWidth/2))).find('div:first').width(galleryWidth+5).find('ul').width(fullGalleryWidth).find('li.selected').removeClass('selected');goToPage=(Math.floor(set_position/itemsPerPage)<totalPage)?Math.floor(set_position/itemsPerPage):totalPage;$.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');}else{$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');}}
function _build_overlay(caller){if(settings.social_tools)
facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));settings.markup=settings.markup.replace('{pp_social}','');$('body').append(settings.markup);$pp_pic_holder=$('.pp_pic_holder'),$ppt=$('.ppt'),$pp_overlay=$('div.pp_overlay');if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var i=0;i<pp_images.length;i++){if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname='default';img_src='';}else{classname='';img_src=pp_images[i];}
toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";};toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find('#pp_full_res').after(toInject);$pp_gallery=$('.pp_pic_holder .pp_gallery'),$pp_gallery_li=$pp_gallery.find('li');$pp_gallery.find('.pp_arrow_next').click(function(){$.prettyPhoto.changeGalleryPage('next');$.prettyPhoto.stopSlideshow();return false;});$pp_gallery.find('.pp_arrow_previous').click(function(){$.prettyPhoto.changeGalleryPage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_content').hover(function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();},function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();});itemWidth=52+5;$pp_gallery_li.each(function(i){$(this).find('a').click(function(){$.prettyPhoto.changePage(i);$.prettyPhoto.stopSlideshow();return false;});});};if(settings.slideshow){$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
$pp_pic_holder.find('.pp_nav .pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});}
$pp_pic_holder.attr('class','pp_pic_holder '+settings.theme);$pp_overlay.css({'opacity':0,'height':$(document).height(),'width':$(window).width()}).bind('click',function(){if(!settings.modal)$.prettyPhoto.close();});$('a.pp_close').bind('click',function(){$.prettyPhoto.close();return false;});if(settings.allow_expand){$('a.pp_expand').bind('click',function(e){if($(this).hasClass('pp_expand')){$(this).removeClass('pp_expand').addClass('pp_contract');doresize=false;}else{$(this).removeClass('pp_contract').addClass('pp_expand');doresize=true;};_hideContent(function(){$.prettyPhoto.open();});return false;});}
$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){$.prettyPhoto.changePage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){$.prettyPhoto.changePage('next');$.prettyPhoto.stopSlideshow();return false;});_center_overlay();};if(!pp_alreadyInitialized&&getHashtag()){pp_alreadyInitialized=true;hashIndex=getHashtag();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf('/'));setTimeout(function(){$("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click');},50);}
return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize);};function getHashtag(){url=location.href;hashtag=(url.indexOf('#prettyPhoto')!==-1)?decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)):false;return hashtag;};function setHashtag(){if(typeof theRel=='undefined')return;location.hash=theRel+'/'+rel_index+'/';};function clearHashtag(){if(location.href.indexOf('#prettyPhoto')!==-1)location.hash="prettyPhoto";}
function getParam(name,url){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(url);return(results==null)?"":results[1];}})(jQuery);var pp_alreadyInitialized=false;
jQuery(document).ready(function(){
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
autoplay: false,
deeplinking: false,
animation_speed: 'fast', 
slideshow: 5000, 
autoplay_slideshow: false, 
opacity: 0.8, 
show_title: true, 
allow_resize: true, 
default_width: 500,
default_height: 344,
counter_separator_label: '/', 
theme: 'pp_default', 
horizontal_padding: 20, 
overlay_gallery: true, 
keyboard_shortcuts: true, 
social_tools: false
});
});
(function ($){
$.fn.flexisel=function(options){
var defaults=$.extend({
visibleItems:4,
animationSpeed:200,
autoPlay:false,
autoPlaySpeed:3000,
pauseOnHover:true,
setMaxWidthAndHeight:false,
enableResponsiveBreakpoints:true,
flipPage: false,
clone:true,
responsiveBreakpoints:{
portrait: {
changePoint:480,
visibleItems: 1
},
landscape: {
changePoint:640,
visibleItems: 2
},
tablet: {
changePoint:768,
visibleItems: 3
}}
}, options);
var object=$(this);
var settings=$.extend(defaults, options);
var itemsWidth;
var canNavigate=true;
var itemsVisible=settings.visibleItems;
var totalItems=object.children().length;
var responsivePoints=[];
var methods={
init:function(){
return this.each(function(){
methods.appendHTML();
methods.setEventHandlers();
methods.initializeItems();
});
},
initializeItems:function(){
var listParent=object.parent();
var innerHeight=listParent.height();
var childSet=object.children();
methods.sortResponsiveObject(settings.responsiveBreakpoints);
var innerWidth=listParent.width();
itemsWidth=(innerWidth) / itemsVisible;
childSet.width(itemsWidth);
if(settings.clone){
childSet.last().insertBefore(childSet.first());
childSet.last().insertBefore(childSet.first());
object.css({
'left':-itemsWidth
});
}
object.fadeIn();
$(window).trigger("resize");
},
appendHTML:function(){
object.addClass("nbs-flexisel-ul");
object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
object.find("li").addClass("nbs-flexisel-item");
var flexiselInner=object.parent();
if(settings.setMaxWidthAndHeight){
var baseWidth=$(".nbs-flexisel-item img").width();
var baseHeight=$(".nbs-flexisel-item img").height();
$(".nbs-flexisel-item img").css("max-width", baseWidth);
$(".nbs-flexisel-item img").css("max-height", baseHeight);
}
$("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(flexiselInner);
if(settings.clone){
var cloneContent=object.children().clone();
object.append(cloneContent);
}},
setEventHandlers:function(){
var listParent=object.parent();
var flexiselInner=listParent.parent();
var childSet=object.children();
var leftArrow=flexiselInner.find(".nbs-flexisel-nav-left");
var rightArrow=flexiselInner.find(".nbs-flexisel-nav-right");
$(window).on("resize", function(event){
methods.setResponsiveEvents();
var innerWidth=$(listParent).width();
var innerHeight=$(listParent).height();
itemsWidth=(innerWidth) / itemsVisible;
childSet.width(itemsWidth);
if(settings.clone){
object.css({
'left':-itemsWidth
});
}else{
object.css({
'left':0
});
}
if(!settings.clone&&totalItems <=itemsVisible){
leftArrow.add(rightArrow).css('visibility', 'hidden');
}else{
leftArrow.add(rightArrow).css('visibility', 'visible');
var halfArrowHeight=(leftArrow.height()) / 2;
var arrowMargin=(innerHeight / 2) - halfArrowHeight;
leftArrow.css("top", arrowMargin + "px");
rightArrow.css("top", arrowMargin + "px");
}});
$(leftArrow).on("click", function(event){
methods.scrollLeft();
});
$(rightArrow).on("click", function(event){
methods.scrollRight();
});
if(settings.pauseOnHover===true){
$(".nbs-flexisel-item").on({
mouseenter:function(){
canNavigate=false;
},
mouseleave:function(){
canNavigate=true;
}});
}
if(settings.autoPlay===true){
setInterval(function(){
if(canNavigate===true)
methods.scrollRight();
}, settings.autoPlaySpeed);
}
object[0].addEventListener('touchstart', methods.touchHandler.handleTouchStart, false);
object[0].addEventListener('touchmove', methods.touchHandler.handleTouchMove, false);
},
setResponsiveEvents: function(){
var contentWidth=$('html').width();
if(settings.enableResponsiveBreakpoints){
var largestCustom=responsivePoints[responsivePoints.length-1].changePoint;
for(var i in responsivePoints){
if(contentWidth >=largestCustom){
itemsVisible=settings.visibleItems;
break;
}else{
if(contentWidth < responsivePoints[i].changePoint){
itemsVisible=responsivePoints[i].visibleItems;
break;
}
else
continue;
}}
}},
sortResponsiveObject: function(obj){
var responsiveObjects=[];
for(var i in obj){
responsiveObjects.push(obj[i]);
}
responsiveObjects.sort(function(a, b){
return a.changePoint - b.changePoint;
});
responsivePoints=responsiveObjects;
},
scrollLeft:function(){
if(object.position().left < 0){
if(canNavigate===true){
canNavigate=false;
var listParent=object.parent();
var innerWidth=listParent.width();
itemsWidth=(innerWidth) / itemsVisible;
var childSet=object.children();
var increment=(settings.flipPage)? innerWidth: itemsWidth;
object.animate({
'left':"+=" + increment
}, {
queue:false,
duration:settings.animationSpeed,
easing:"linear",
complete:function(){
if(settings.clone){
childSet.last().insertBefore(childSet.first());
}
methods.adjustScroll();
canNavigate=true;
}});
}}
},
scrollRight:function(){
var listParent=object.parent();
var innerWidth=listParent.width();
itemsWidth=(innerWidth) / itemsVisible;
var difObject=(itemsWidth - innerWidth);
var objPosition=(object.position().left + ((totalItems-itemsVisible)*itemsWidth)-innerWidth);
var increment=(settings.flipPage)? innerWidth: itemsWidth;
if((difObject <=Math.ceil(objPosition))&&(!settings.clone)){
if(canNavigate===true){
canNavigate=false;
object.animate({
'left':"-=" + increment
}, {
queue:false,
duration:settings.animationSpeed,
easing:"linear",
complete:function(){
methods.adjustScroll();
canNavigate=true;
}});
}}else if(settings.clone){
if(canNavigate===true){
canNavigate=false;
var childSet=object.children();
object.animate({
'left':"-=" + increment
}, {
queue:false,
duration:settings.animationSpeed,
easing:"linear",
complete:function(){
childSet.first().insertAfter(childSet.last());
methods.adjustScroll();
canNavigate=true;
}});
}};},
adjustScroll:function(){
var listParent=object.parent();
var childSet=object.children();
var innerWidth=listParent.width();
itemsWidth=(innerWidth) / itemsVisible;
childSet.width(itemsWidth);
var increment=(settings.flipPage)? innerWidth: itemsWidth;
if(settings.clone){
object.css({
'left':-increment
});
}},
touchHandler: {
xDown: null,
yDown: null,
handleTouchStart: function(evt){
this.xDown=evt.touches[0].clientX;
this.yDown=evt.touches[0].clientY;
},
handleTouchMove: function (evt){
if(!this.xDown||!this.yDown){
return;
}
var xUp=evt.touches[0].clientX;
var yUp=evt.touches[0].clientY;
var xDiff=this.xDown - xUp;
var yDiff=this.yDown - yUp;
if(Math.abs(xDiff) > 0){
if(xDiff > 0){
methods.scrollRight();
}else{
methods.scrollLeft();
}}
this.xDown=null;
this.yDown=null;
canNavigate=true;
}}
};
if(methods[options]){
return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
}else if(typeof options==='object'||!options){
return methods.init.apply(this);
}else{
$.error('Method "' + method + '" does not exist in flexisel plugin!');
}};})(jQuery);