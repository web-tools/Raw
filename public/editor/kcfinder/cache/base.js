/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
;!((d, c) => {"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):b => {if(!b.document){throw new Error("jQuery requires a window with a document")}return c(b)}:c(d)})("undefined"!=typeof window?window:this,(a, b) => {
  var c=[];
  var d=c.slice;
  var e=c.concat;
  var f=c.push;
  var g=c.indexOf;
  var h={};
  var i=h.toString;
  var j=h.hasOwnProperty;
  var k="".trim;
  var l={};
  var m="1.11.0";
  var n=(a, b) => new n.fn.init(a,b);
  var o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var p=/^-ms-/;
  var q=/-([\da-z])/gi;
  var r=(a, b) => b.toUpperCase();
  n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray() {return d.call(this)},get(a) {return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack(a) {var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each(a, b) {return n.each(this,a,b)},map(a) {return this.pushStack(n.map(this,(b, c) => a.call(b,c,b)));},slice(...args) {return this.pushStack(d.apply(this,args));},first() {return this.eq(0)},last() {return this.eq(-1)},eq(a) {
    var b=this.length;
    var c=+a+(0>a?b:0);
    return this.pushStack(c>=0&&b>c?[this[c]]:[])
  },end() {return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(...args) {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g=args[0]||{};
    var h=1;
    var i=args.length;
    var j=!1;
    for("boolean"==typeof g&&(j=g,g=args[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++){if(null!=(e=args[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c))}}}return g
  },n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error(a) {throw new Error(a)},noop() {},isFunction(a) {return"function"===n.type(a)},isArray:Array.isArray||(a => "array"===n.type(a)),isWindow(a) {return null!=a&&a==a.window},isNumeric(a) {return a-parseFloat(a)>=0},isEmptyObject(a) {var b;for(b in a){return !1}return !0},isPlainObject(a) {var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a)){return !1}try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1}}catch(c){return !1}if(l.ownLast){for(b in a){return j.call(a,b)}}for(b in a){}return void 0===b||j.call(a,b)},type(a) {return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval(b) {b&&n.trim(b)&&(a.execScript||(b => {a.eval.call(a,b)}))(b)},camelCase(a) {return a.replace(p,"ms-").replace(q,r)},nodeName(a, b) {return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each(a, b, c) {
    var d;
    var e=0;
    var f=a.length;
    var g=s(a);
    if(c){if(g){for(;f>e;e++){if(d=b.apply(a[e],c),d===!1){break}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break}}}}else{if(g){for(;f>e;e++){if(d=b.call(a[e],e,a[e]),d===!1){break}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break}}}}return a
  },trim:k&&!k.call("\ufeff\xa0")?a => null==a?"":k.call(a):a => null==a?"":(a+"").replace(o,""),makeArray(a, b) {var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray(a, b, c) {var d;if(b){if(g){return g.call(b,a,c)}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++){if(c in b&&b[c]===a){return c}}}return -1},merge(a, b) {
    var c=+b.length;
    var d=0;
    var e=a.length;
    while(c>d){a[e++]=b[d++]}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]}}return a.length=e,a
  },grep(a, b, c) {for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++){d=!b(a[f],f),d!==h&&e.push(a[f])}return e},map(a, b, c) {
    var d;
    var f=0;
    var g=a.length;
    var h=s(a);
    var i=[];
    if(h){for(;g>f;f++){d=b(a[f],f,c),null!=d&&i.push(d)}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)}}return e.apply([],i)
  },guid:1,proxy(a, b) {
    var c;
    var e;
    var f;
    return "string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(...args) {return a.apply(b||this,c.concat(d.call(args)));},e.guid=a.guid=a.guid||n.guid++,e):void 0;
  },now() {return +new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(a, b) => {h["[object "+b+"]"]=b.toLowerCase()});function s(a){
    var b=a.length;
    var c=n.type(a);
    return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
  }var t=(a => {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var p;
    var q;
    var r;
    var s="sizzle"+-new Date;
    var t=a.document;
    var u=0;
    var v=0;
    var w=eb();
    var x=eb();
    var y=eb();
    var z=(a, b) => (a===b&&(j=!0), 0);
    var A="undefined";
    var B=1<<31;
    var C={}.hasOwnProperty;
    var D=[];
    var E=D.pop;
    var F=D.push;
    var G=D.push;
    var H=D.slice;
    var I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++){if(this[b]===a){return b}}return -1};
    var J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var K="[\\x20\\t\\r\\n\\f]";
    var L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
    var M=L.replace("w","w#");
    var N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]";
    var O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)";
    var P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g");
    var Q=new RegExp("^"+K+"*,"+K+"*");
    var R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*");
    var S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g");
    var T=new RegExp(O);
    var U=new RegExp("^"+M+"$");
    var V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")};
    var W=/^(?:input|select|textarea|button)$/i;
    var X=/^h\d$/i;
    var Y=/^[^{]+\{\s*\[native \w/;
    var Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var $=/[+~]/;
    var _=/'|\\/g;
    var ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig");
    var bb=(a, b, c) => {var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};
    try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?(a, b) => {F.apply(a,H.call(b))}:(a, b) => {
      var c=a.length;
      var d=0;
      while(a[c++]=b[d++]){}a.length=c-1
    }}}function db(a,b,d,e){
      var f;
      var g;
      var h;
      var i;
      var j;
      var m;
      var p;
      var q;
      var u;
      var v;
      if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a){return d}if(1!==(i=b.nodeType)&&9!==i){return[]}if(n&&!e){if(f=Z.exec(a)){if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode){return d}if(g.id===h){return d.push(g),d}}else{if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h){return d.push(g),d}}}else{if(f[2]){return G.apply(d,b.getElementsByTagName(a)),d}if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName){return G.apply(d,b.getElementsByClassName(h)),d}}}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--){m[j]=q+pb(m[j])}u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v){try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}}return xb(a.replace(P,"$1"),b,d,e)
    }function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return !!a(b)}catch(c){return !1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){
      var c=a.split("|");
      var e=a.length;
      while(e--){d.attrHandle[c[e]]=b}
    }function ib(a,b){
      var c=b&&a;
      var d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);
      if(d){return d}if(c){while(c=c.nextSibling){if(c===b){return -1}}}return a?1:-1
    }function jb(a){return b => {var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a};}function kb(a){return b => {var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a};}function lb(a){return fb(b => (b=+b, fb((c, d) => {
      var e;
      var f=a([],c.length,b);
      var g=f.length;
      while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))}
    })));}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=a => {var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=a => {
      var b;
      var e=a?a.ownerDocument||a:t;
      var g=e.defaultView;
      return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",() => {k()},!1):g.attachEvent&&g.attachEvent("onunload",() => {k()})),c.attributes=gb(a => (a.className="i", !a.getAttribute("className"))),c.getElementsByTagName=gb(a => (a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length)),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(a => (a.innerHTML="<div class='a'></div><div class='a i'></div>", a.firstChild.className="i", 2===a.getElementsByClassName("i").length)),c.getById=gb(a => (m.appendChild(a).id=s, !e.getElementsByName||!e.getElementsByName(s).length)),c.getById?(d.find.ID=(a, b) => {if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=a => {var b=a.replace(ab,bb);return a => a.getAttribute("id")===b;}):(delete d.find.ID,d.filter.ID=a => {var b=a.replace(ab,bb);return a => {var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b};}),d.find.TAG=c.getElementsByTagName?(a, b) => typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0:(a, b) => {
        var c;
        var d=[];
        var e=0;
        var f=b.getElementsByTagName(a);
        if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)}return d}return f
      },d.find.CLASS=c.getElementsByClassName&&((a, b) => typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0),p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(a => {a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(a => {var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(a => {c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?(a, b) => {
        var c=9===a.nodeType?a.documentElement:a;
        var d=b&&b.parentNode;
        return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
      }:(a, b) => {if(b){while(b=b.parentNode){if(b===a){return !0}}}return !1},z=b?(a, b) => {if(a===b){return j=!0,0}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:(a, b) => {
        if(a===b){return j=!0,0}
        var c;
        var d=0;
        var f=a.parentNode;
        var g=b.parentNode;
        var h=[a];
        var k=[b];
        if(!f||!g){return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0}if(f===g){return ib(a,b)}c=a;while(c=c.parentNode){h.unshift(c)}c=b;while(c=c.parentNode){k.unshift(c)}while(h[d]===k[d]){d++}return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0
      },e):l;
    },db.matches=(a, b) => db(a,null,null,b),db.matchesSelector=(a, b) => {if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b))){try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d}}catch(e){}}return db(b,l,null,[a]).length>0},db.contains=(a, b) => ((a.ownerDocument||a)!==l&&k(a), r(a,b)),db.attr=(a, b) => {
      (a.ownerDocument||a)!==l&&k(a);
      var e=d.attrHandle[b.toLowerCase()];
      var f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;
      return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
    },db.error=a => {throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=a => {
      var b;
      var d=[];
      var e=0;
      var f=0;
      if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++]){b===a[f]&&(e=d.push(f))}while(e--){a.splice(d[e],1)}}return i=null,a
    },e=db.getText=a => {
      var b;
      var c="";
      var d=0;
      var f=a.nodeType;
      if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent}for(a=a.firstChild;a;a=a.nextSibling){c+=e(a)}}else{if(3===f||4===f){return a.nodeValue}}}else{while(b=a[d++]){c+=e(b)}}return c
    },d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR(a) {return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD(a) {return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO(a) {
      var b;
      var c=!a[5]&&a[2];
      return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
    }},filter:{TAG(a) {var b=a.replace(ab,bb).toLowerCase();return "*"===a?() => !0:a => a.nodeName&&a.nodeName.toLowerCase()===b;},CLASS(a) {var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,a => b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||""));},ATTR(a, b, c) {return d => {var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0};},CHILD(a, b, c, d, e) {
      var f="nth"!==a.slice(0,3);
      var g="last"!==a.slice(-4);
      var h="of-type"===b;
      return 1===d&&0===e?a => !!a.parentNode:(b, c, i) => {
        var j;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p=f!==g?"nextSibling":"previousSibling";
        var q=b.parentNode;
        var r=h&&b.nodeName.toLowerCase();
        var t=!i&&!h;
        if(q){if(f){while(p){l=b;while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1}}o=p="only"===a&&!o&&"nextSibling"}return !0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}}else{if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u){m=j[1]}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b)){break}}}}return m-=e,m===d||m%d===0&&m/d>=0}
      };
    },PSEUDO(a, b) {
      var c;
      var e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);
      return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb((a, c) => {
        var d;
        var f=e(a,b);
        var g=f.length;
        while(g--){d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}
      }):a => e(a,0,c)):e;
    }},pseudos:{not:fb(a => {
      var b=[];
      var c=[];
      var d=g(a.replace(P,"$1"));
      return d[s]?fb((a, b, c, e) => {
        var f;
        var g=d(a,null,e,[]);
        var h=a.length;
        while(h--){(f=g[h])&&(a[h]=!(b[h]=f))}
      }):(a, e, f) => (b[0]=a, d(b,null,f,c), !c.pop());
    }),has:fb(a => b => db(a,b).length>0),contains:fb(a => b => (b.textContent||b.innerText||e(b)).indexOf(a)>-1),lang:fb(a => (U.test(a||"")||db.error("unsupported lang: "+a), a=a.replace(ab,bb).toLowerCase(), b => {var c;do{if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")}}while((b=b.parentNode)&&1===b.nodeType);return !1})),target(b) {var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root(a) {return a===m},focus(a) {return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled(a) {return a.disabled===!1},disabled(a) {return a.disabled===!0},checked(a) {var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected(a) {return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty(a) {for(a=a.firstChild;a;a=a.nextSibling){if(a.nodeType<6){return !1}}return !0},parent(a) {return !d.pseudos.empty(a)},header(a) {return X.test(a.nodeName)},input(a) {return W.test(a.nodeName)},button(a) {var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text(a) {var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(() => [0]),last:lb((a, b) => [b-1]),eq:lb((a, b, c) => [0>c?c+b:c]),even:lb((a, b) => {for(var c=0;b>c;c+=2){a.push(c)}return a}),odd:lb((a, b) => {for(var c=1;b>c;c+=2){a.push(c)}return a}),lt:lb((a, b, c) => {for(var d=0>c?c+b:c;--d>=0;){a.push(d)}return a}),gt:lb((a, b, c) => {for(var d=0>c?c+b:c;++d<b;){a.push(d)}return a})}},d.pseudos.nth=d.pseudos.eq;for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=jb(b)}for(b in {submit:!0,reset:!0}){d.pseudos[b]=kb(b)}function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){
      var c;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k=x[a+" "];
      if(k){return b?0:k.slice(0)}h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter){!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))}if(!c){break}}return b?h.length:h?db.error(a):x(a,i).slice(0)
    }function pb(a){for(var b=0,c=a.length,d="";c>b;b++){d+=a[b].value}return d}function qb(a,b,c){
      var d=b.dir;
      var e=c&&"parentNode"===d;
      var f=v++;
      return b.first?(b, c, f) => {while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)}}}:(b, c, g) => {
        var h;
        var i;
        var j=[u,f];
        if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f){return j[2]=h[2]}if(i[d]=j,j[2]=a(b,c,g)){return !0}}}}
      };
    }function rb(a){return a.length>1?(b, c, d) => {var e=a.length;while(e--){if(!a[e](b,c,d)){return !1}}return !0}:a[0];}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))}return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb((f, g, h, i) => {
      var j;
      var k;
      var l;
      var m=[];
      var n=[];
      var o=g.length;
      var p=f||wb(b||"*",h.nodeType?[h]:h,[]);
      var q=!a||!f&&b?p:sb(p,m,a,h,i);
      var r=c?e||(f?a:o||d)?[]:g:q;
      if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}}if(f){if(e||a){if(e){j=[],k=r.length;while(k--){(l=r[k])&&j.push(q[k]=l)}e(null,r=[],j,i)}k=r.length;while(k--){(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}}else{r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)}
    });}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(a => a===b,i,!0),l=qb(a => I.call(b,a)>-1,i,!0),m=[(a, c, d) => !g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))];f>j;j++){if(c=d.relative[a[j].type]){m=[qb(rb(m),c)]}else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++){if(d.relative[a[e].type]){break}}return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}}return rb(m)}function vb(a,b){
      var c=b.length>0;
      var e=a.length>0;
      var f=(f, g, i, j, k) => {var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||0.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++]){if(o(m,g,i)){j.push(m);break}}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++]){o(r,s,g,i)}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=E.call(j))}}s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};
      return c?fb(f):f
    }g=db.compile=(a, b) => {
      var c;
      var d=[];
      var e=[];
      var f=y[a+" "];
      if(!f){b||(b=ob(a)),c=b.length;while(c--){f=ub(b[c]),f[s]?d.push(f):e.push(f)}f=y(a,vb(e,d))}return f
    };function wb(a,b,c){for(var d=0,e=b.length;e>d;d++){db(a,b[d],c)}return c}function xb(a,b,e,f){
      var h;
      var i;
      var j;
      var k;
      var l;
      var m=ob(a);
      if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b){return e}a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type]){break}if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a){return G.apply(e,f),e}break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e
    }return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(a => 1&a.compareDocumentPosition(l.createElement("div"))),gb(a => (a.innerHTML="<a href='#'></a>", "#"===a.firstChild.getAttribute("href")))||hb("type|href|height|width",(a, b, c) => c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)),c.attributes&&gb(a => (a.innerHTML="<input/>", a.firstChild.setAttribute("value",""), ""===a.firstChild.getAttribute("value")))||hb("value",(a, b, c) => c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue),gb(a => null==a.getAttribute("disabled"))||hb(J,(a, b, c) => {var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db;
  })(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;
  var u=n.expr.match.needsContext;
  var v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var w=/^.[^:#\[\.,]*$/;
  function x(a,b,c){if(n.isFunction(b)){return n.grep(a,(a, d) => !!b.call(a,d,a)!==c);}if(b.nodeType){return n.grep(a,a => a===b!==c);}if("string"==typeof b){if(w.test(b)){return n.filter(b,a,c)}b=n.filter(b,a)}return n.grep(a,a => n.inArray(a,b)>=0!==c);}n.filter=(a, b, c) => {var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,a => 1===a.nodeType));},n.fn.extend({find(a) {
    var b;
    var c=[];
    var d=this;
    var e=d.length;
    if("string"!=typeof a){return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++){if(n.contains(d[b],this)){return !0}}}))}for(b=0;e>b;b++){n.find(a,d[b],c)}return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
  },filter(a) {return this.pushStack(x(this,a||[],!1))},not(a) {return this.pushStack(x(this,a||[],!0))},is(a) {return !!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});
  var y;
  var z=a.document;
  var A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  var B=n.fn.init=function(a,b){var c,d;if(!a){return this}if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||y).find(a):this.constructor(b).find(a)}if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b)){for(c in b){n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])}}return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2]){return y.find(a)}this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};
  B.prototype=n.fn,y=n(z);
  var C=/^(?:parents|prev(?:Until|All))/;
  var D={children:!0,contents:!0,next:!0,prev:!0};
  n.extend({dir(a, b, c) {
    var d=[];
    var e=a[b];
    while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c))){1===e.nodeType&&d.push(e),e=e[b]}return d
  },sibling(a, b) {for(var c=[];a;a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)}return c}}),n.fn.extend({has(a) {
    var b;
    var c=n(a,this);
    var d=c.length;
    return this.filter(function(){for(b=0;d>b;b++){if(n.contains(this,c[b])){return !0}}})
  },closest(a, b) {for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++){for(c=this[d];c&&c!==b;c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}}}return this.pushStack(f.length>1?n.unique(f):f)},index(a) {return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add(a, b) {return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack(a) {return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}n.each({parent(a) {var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents(a) {return n.dir(a,"parentNode")},parentsUntil(a, b, c) {return n.dir(a,"parentNode",c)},next(a) {return E(a,"nextSibling")},prev(a) {return E(a,"previousSibling")},nextAll(a) {return n.dir(a,"nextSibling")},prevAll(a) {return n.dir(a,"previousSibling")},nextUntil(a, b, c) {return n.dir(a,"nextSibling",c)},prevUntil(a, b, c) {return n.dir(a,"previousSibling",c)},siblings(a) {return n.sibling((a.parentNode||{}).firstChild,a)},children(a) {return n.sibling(a.firstChild)},contents(a) {return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},(a, b) => {n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});
  var F=/\S+/g;
  var G={};
  function H(a){var b=G[a]={};return n.each(a.match(F)||[],(a, c) => {b[c]=!0}),b;}n.Callbacks=a => {
    a="string"==typeof a?G[a]||H(a):n.extend({},a);
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=[];
    var i=!a.once&&[];
    var j=l => {for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++){if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())};
    var k={add(...args) {if(h){var d=h.length;!function f(b){n.each(b,(b, c) => {var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(args),b?e=h.length:c&&(g=d,j(c))}return this},remove(...args) {return h&&n.each(args,(a, c) => {var d;while((d=n.inArray(c,h,d))>-1){h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}}),this;},has(a) {return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty() {return h=[],e=0,this},disable() {return h=i=c=void 0,this},disabled() {return !h},lock() {return i=void 0,c||k.disable(),this},locked() {return !i},fireWith(a, c) {return !h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire(...args) {return k.fireWith(this,args),this;},fired() {return !!d}};
    return k
  },n.extend({Deferred(a) {
    var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]];
    var c="pending";
    var d={state() {return c},always(...args) {return e.done(args).fail(args),this;},then(...args) {var a=args;return n.Deferred(c => {n.each(b,(b, f) => {var g=n.isFunction(a[b])&&a[b];e[f[1]](function(...args) {var a=g&&g.apply(this,args);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:args)})}),a=null}).promise();},promise(a) {return null!=a?n.extend(a,d):d}};
    var e={};
    return d.pipe=d.then,n.each(b,(a, f) => {
      var g=f[2];
      var h=f[3];
      d[f[1]]=g.add,h&&g.add(() => {c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(...args) {return e[f[0]+"With"](this===e?d:this,args),this;},e[f[0]+"With"]=g.fireWith
    }),d.promise(e),a&&a.call(e,e),e;
  },when(a) {
    var b=0;
    var c=d.call(arguments);
    var e=c.length;
    var f=1!==e||a&&n.isFunction(a.promise)?e:0;
    var g=1===f?a:n.Deferred();
    var h=(a, b, c) => function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)};
    var i;
    var j;
    var k;
    if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++){c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f}}return f||g.resolveWith(k,c),g.promise()
  }});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady(a) {a?n.readyWait++:n.ready(!0)},ready(a) {if(a===!0?!--n.readyWait:!n.isReady){if(!z.body){return setTimeout(n.ready)}n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=b => {if(!I){if(I=n.Deferred(),"complete"===z.readyState){setTimeout(n.ready)}else{if(z.addEventListener){z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1)}else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}}}return I.promise(b)};
  var L="undefined";
  var M;
  for(M in n(l)){break}l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(() => {
    var a;
    var b;
    var c=z.getElementsByTagName("body")[0];
    c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)
  }),(() => {var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null})(),n.acceptData=a => {
    var b=n.noData[(a.nodeName+" ").toLowerCase()];
    var c=+a.nodeType||1;
    return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
  };
  var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var O=/([A-Z])/g;
  function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else{c=void 0}}return c}function Q(a){var b;for(b in a){if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b){return !1}}return !0}function R(a,b,d,e){if(n.acceptData(a)){
    var f;
    var g;
    var h=n.expando;
    var i=a.nodeType;
    var j=i?n.cache:a;
    var k=i?a[h]:a[h]&&h;
    if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}
  }}function S(a,b,c){if(n.acceptData(a)){
    var d;
    var e;
    var f=a.nodeType;
    var g=f?n.cache:a;
    var h=f?a[n.expando]:n.expando;
    if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--){delete d[b[e]]}if(c?!Q(d):!n.isEmptyObject(d)){return}}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}
  }}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData(a) {return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data(a, b, c) {return R(a,b,c)},removeData(a, b) {return S(a,b)},_data(a, b, c) {return R(a,b,c,!0)},_removeData(a, b) {return S(a,b,!0)}}),n.fn.extend({data(a, b) {
    var c;
    var d;
    var e;
    var f=this[0];
    var g=f&&f.attributes;
    if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--){d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]))}n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0
  },removeData(a) {return this.each(function(){n.removeData(this,a)})}}),n.extend({queue(a, b, c) {var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue(a, b) {
    b=b||"fx";
    var c=n.queue(a,b);
    var d=c.length;
    var e=c.shift();
    var f=n._queueHooks(a,b);
    var g=() => {n.dequeue(a,b)};
    "inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
  },_queueHooks(a, b) {var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(() => {n._removeData(a,b+"queue"),n._removeData(a,c)})});}}),n.fn.extend({queue(a, b) {var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue(a) {return this.each(function(){n.dequeue(this,a)})},clearQueue(a) {return this.queue(a||"fx",[])},promise(a, b) {
    var c;
    var d=1;
    var e=n.Deferred();
    var f=this;
    var g=this.length;
    var h=() => {--d||e.resolveWith(f,[f])};
    "string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--){c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))}return h(),e.promise(b)
  }});
  var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var U=["Top","Right","Bottom","Left"];
  var V=(a, b) => (a=b||a, "none"===n.css(a,"display")||!n.contains(a.ownerDocument,a));
  var W=n.access=(a, b, c, d, e, f, g) => {var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c){n.access(a,b,h,c[h],!0,f,g)}}else{if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=(a, b, c) => j.call(n(a),c))),b)){for(;i>h;h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))}}}return e?a:j?b.call(a):i?b(a[0],c):f};
  var X=/^(?:checkbox|radio)$/i;
  !(() => {
    var a=z.createDocumentFragment();
    var b=z.createElement("div");
    var c=z.createElement("input");
    if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",() => {l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null
  })(),(() => {
    var b;
    var c;
    var d=z.createElement("div");
    for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1)}d=null
  })();
  var Y=/^(?:input|select|textarea)$/i;
  var Z=/^key/;
  var $=/^(?:mouse|contextmenu)|click/;
  var _=/^(?:focusinfocus|focusoutblur)$/;
  var ab=/^([^.]*)(?:\.(.+)|)$/;
  function bb(){return !0}function cb(){return !1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add(a, b, c, d, e) {
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var o;
    var p;
    var q;
    var r=n._data(a);
    if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--){f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0)}a=null}
  },remove(a, b, c, d, e) {
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var o;
    var p;
    var q;
    var r=n.hasData(a)&&n._data(a);
    if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--){if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--){g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g))}i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else{for(o in k){n.event.remove(a,o+b[j],c,d,!0)}}}n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}
  },trigger(b, c, d, e) {
    var f;
    var g;
    var h;
    var i;
    var k;
    var l;
    var m;
    var o=[d||z];
    var p=j.call(b,"type")?b.type:b;
    var q=j.call(b,"namespace")?b.namespace.split("."):[];
    if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode){o.push(h),l=h}l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped()){b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault())}if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}
  },dispatch(a) {
    a=n.event.fix(a);
    var b;
    var c;
    var e;
    var f;
    var g;
    var h=[];
    var i=d.call(arguments);
    var j=(n._data(this,"events")||{})[a.type]||[];
    var k=n.event.special[a.type]||{};
    if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}}return k.postDispatch&&k.postDispatch.call(this,a),a.result}
  },handlers(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g=[];
    var h=b.delegateCount;
    var i=a.target;
    if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;i!=this;i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++){d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d)}e.length&&g.push({elem:i,handlers:e})}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
  },fix(a) {
    if(a[n.expando]){return a}
    var b;
    var c;
    var d;
    var e=a.type;
    var f=a;
    var g=this.fixHooks[e];
    g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--){c=d[b],a[c]=f[c]}return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
  },props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter(a, b) {return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter(a, b) {
    var c;
    var d;
    var e;
    var f=b.button;
    var g=b.fromElement;
    return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
  }},special:{load:{noBubble:!0},focus:{trigger() {if(this!==db()&&this.focus){try{return this.focus(),!1}catch(a){}}},delegateType:"focusin"},blur:{trigger() {return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger() {return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default(a) {return n.nodeName(a.target,"a")}},beforeunload:{postDispatch(a) {void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate(a, b, c, d) {var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?(a, b, c) => {a.removeEventListener&&a.removeEventListener(b,c,!1)}:(a, b, c) => {var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void (this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault() {var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation() {var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation() {this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},(a, b) => {n.event.special[a]={delegateType:b,bindType:b,handle(a) {
    var c;
    var d=this;
    var e=a.relatedTarget;
    var f=a.handleObj;
    return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
  }}}),l.submitBubbles||(n.event.special.submit={setup() {return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",a => {
    var b=a.target;
    var c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;
    c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",a => {a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))
  });},postDispatch(a) {a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown() {return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup() {return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",a => {var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))});},handle(a) {var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown() {return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},(a, b) => {var c=a => {n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup() {
    var d=this.ownerDocument||this;
    var e=n._data(d,b);
    e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)
  },teardown() {
    var d=this.ownerDocument||this;
    var e=n._data(d,b)-1;
    e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))
  }}}),n.fn.extend({on(a, b, c, d, e) {
    var f;
    var g;
    if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a){this.on(f,b,c,a[f],e)}return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=cb}else{if(!d){return this}}return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})
  },one(a, b, c, d) {return this.on(a,b,c,d,1)},off(a, b, c) {
    var d;
    var e;
    if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this}if("object"==typeof a){for(e in a){this.off(e,b,a[e])}return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})
  },trigger(a, b) {return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler(a, b) {var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){
    var b=fb.split("|");
    var c=a.createDocumentFragment();
    if(c.createElement){while(b.length){c.createElement(b.pop())}}return c
  }
  var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";
  var gb=/ jQuery\d+="(?:null|\d+)"/g;
  var hb=new RegExp("<(?:"+fb+")[\\s/>]","i");
  var ib=/^\s+/;
  var jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  var kb=/<([\w:]+)/;
  var lb=/<tbody/i;
  var mb=/<|&#?\w+;/;
  var nb=/<(?:script|style|link)/i;
  var ob=/checked\s*(?:[^=]|=\s*.checked.)/i;
  var pb=/^$|\/(?:java|ecma)script/i;
  var qb=/^true\/(.*)/;
  var rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  var sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
  var tb=eb(z);
  var ub=tb.appendChild(z.createElement("div"));
  sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){
    var c;
    var d;
    var e=0;
    var f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;
    if(!f){for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++){!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b))}}return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f
  }function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++){n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){
    var c;
    var d;
    var e;
    var f=n._data(a);
    var g=n._data(b,f);
    var h=f.events;
    if(h){delete g.handle,g.events={};for(c in h){for(d=0,e=h[c].length;e>d;d++){n.event.add(b,c,h[c][d])}}}g.data&&(g.data=n.extend({},g.data))
  }}function Cb(a,b){
    var c;
    var d;
    var e;
    if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events){n.removeEvent(b,d,e.handle)}b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}
  }n.extend({clone(a, b, c) {
    var d;
    var e;
    var f;
    var g;
    var h;
    var i=n.contains(a.ownerDocument,a);
    if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a))){for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g){d[g]&&Cb(e,d[g])}}if(b){if(c){for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++){Bb(e,d[g])}}else{Bb(a,f)}}return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f
  },buildFragment(a, b, c, d) {for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++){if(f=a[q],f||0===f){if("object"===n.type(f)){n.merge(p,f.nodeType?[f]:f)}else{if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--){h=h.lastChild}if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--){n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild){h.removeChild(h.firstChild)}h=o.lastChild}else{p.push(b.createTextNode(f))}}}}h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++]){if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++]){pb.test(f.type||"")&&c.push(f)}}}return h=null,o},cleanData(a, b) {for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++){if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle)}}j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}}),n.fn.extend({text(a) {return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append(...args) {return this.domManip(args,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}});},prepend(...args) {return this.domManip(args,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}});},before(...args) {return this.domManip(args,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)});},after(...args) {return this.domManip(args,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)});},remove(a, b) {for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++){b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c))}return this},empty() {for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild){a.removeChild(a.firstChild)}a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone(a, b) {return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html(a) {return W(this,function(a){
    var b=this[0]||{};
    var c=0;
    var d=this.length;
    if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0}if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++){b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a)}b=0}catch(e){}}b&&this.empty().append(a)
  },null,a,arguments.length);},replaceWith(...args) {var a=args[0];return this.domManip(args,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove();},detach(a) {return this.remove(a,!0)},domManip(a, b) {
    a=e.apply([],a);
    var c;
    var d;
    var f;
    var g;
    var h;
    var i;
    var j=0;
    var k=this.length;
    var m=this;
    var o=k-1;
    var p=a[0];
    var q=n.isFunction(p);
    if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p)){return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)})}if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++){d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j)}if(f){for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++){d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")))}}i=c=null}return this
  }}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(a, b) => {n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++){c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get())}return this.pushStack(e)}});
  var Db;
  var Eb={};
  function Fb(b,c){
    var d=n(c.createElement(b)).appendTo(c.body);
    var e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");
    return d.detach(),e
  }function Gb(a){
    var b=z;
    var c=Eb[a];
    return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c
  }!(() => {
    var a;
    var b;
    var c=z.createElement("div");
    var d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=() => {
      var a;
      var c;
      var e;
      var f;
      if(null==b){if(a=z.getElementsByTagName("body")[0],!a){return}f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b
    }
  })();
  var Hb=/^margin/;
  var Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i");
  var Jb;
  var Kb;
  var Lb=/^(top|right|bottom|left)$/;
  a.getComputedStyle?(Jb=a => a.ownerDocument.defaultView.getComputedStyle(a,null),Kb=(a, b, c) => {
    var d;
    var e;
    var f;
    var g;
    var h=a.style;
    return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
  }):z.documentElement.currentStyle&&(Jb=a => a.currentStyle,Kb=(a, b, c) => {
    var d;
    var e;
    var f;
    var g;
    var h=a.style;
    return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
  });function Mb(a,b){return {get(...args) {var c=a();if(null!=c){return c?void delete this.get:(this.get=b).apply(this,args);}}};}!(() => {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=z.createElement("div");
    var i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
    var j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets() {
      if(null!=c){return c}
      var a;
      var b;
      var d;
      var e=z.createElement("div");
      var f=z.getElementsByTagName("body")[0];
      if(f){return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c}
    },boxSizing() {return null==d&&k(),d},boxSizingReliable() {return null==e&&k(),e},pixelPosition() {return null==f&&k(),f},reliableMarginRight() {
      var b;
      var c;
      var d;
      var e;
      if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b){return}c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g
    }});function k(){
      var b;
      var c;
      var h=z.getElementsByTagName("body")[0];
      h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},() => {d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)
    }
  })(),n.swap=(a, b, c, d) => {
    var e;
    var f;
    var g={};
    for(f in b){g[f]=a.style[f],a.style[f]=b[f]}e=c.apply(a,d||[]);for(f in b){a.style[f]=g[f]}return e
  };
  var Nb=/alpha\([^)]*\)/i;
  var Ob=/opacity\s*=\s*([^)]*)/;
  var Pb=/^(none|table(?!-c[ea]).+)/;
  var Qb=new RegExp("^("+T+")(.*)$","i");
  var Rb=new RegExp("^([+-])=("+T+")","i");
  var Sb={position:"absolute",visibility:"hidden",display:"block"};
  var Tb={letterSpacing:0,fontWeight:400};
  var Ub=["Webkit","O","Moz","ms"];
  function Vb(a,b){
    if(b in a){return b}
    var c=b.charAt(0).toUpperCase()+b.slice(1);
    var d=b;
    var e=Ub.length;
    while(e--){if(b=Ub[e]+c,b in a){return b}}return d
  }function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++){d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))))}for(g=0;h>g;g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))}return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2){"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)))}return g}function Zb(a,b,c){
    var d=!0;
    var e="width"===b?a.offsetWidth:a.offsetHeight;
    var f=Jb(a);
    var g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);
    if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e)){return e}d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"
  }n.extend({cssHooks:{opacity:{get(a, b) {if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style(a, b, c, d) {if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
    var e;
    var f;
    var g;
    var h=n.camelCase(b);
    var i=a.style;
    if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]}if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]="",i[b]=c}catch(j){}}
  }},css(a, b, c, d) {
    var e;
    var f;
    var g;
    var h=n.camelCase(b);
    return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f
  }}),n.each(["height","width"],(a, b) => {n.cssHooks[b]={get(a, c, d) {return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,() => Zb(a,b,d)):Zb(a,b,d):void 0;},set(a, c, d) {var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get(a, b) {return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""},set(a, b) {
    var c=a.style;
    var d=a.currentStyle;
    var e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"";
    var f=d&&d.filter||c.filter||"";
    c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)
  }}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,(a, b) => b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0),n.each({margin:"",padding:"",border:"Width"},(a, b) => {n.cssHooks[a+b]={expand(c) {for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++){e[a+U[d]+b]=f[d]||f[d-2]||f[0]}return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css(a, b) {return W(this,(a, b, c) => {
    var d;
    var e;
    var f={};
    var g=0;
    if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++){f[b[g]]=n.css(a,b[g],!1,d)}return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
  },a,b,arguments.length>1);},show() {return Wb(this,!0)},hide() {return Wb(this)},toggle(a) {return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init(a, b, c, d, e, f) {this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur() {var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run(a) {
    var b;
    var c=$b.propHooks[this.prop];
    return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this
  }},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get(a) {var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set(a) {n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set(a) {a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear(a) {return a},swing(a) {return 0.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};
  var _b;
  var ac;
  var bc=/^(?:toggle|show|hide)$/;
  var cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i");
  var dc=/queueHooks$/;
  var ec=[jc];
  var fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do{h=h||".5",g/=h,n.style(c.elem,a,g+f)}while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};
  function gc(){return setTimeout(() => {_b=void 0}),_b=n.now();}function hc(a,b){
    var c;
    var d={height:a};
    var e=0;
    for(b=b?1:0;4>e;e+=2-b){c=U[e],d["margin"+c]=d["padding"+c]=a}return b&&(d.opacity=d.width=a),d
  }function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++){if(d=e[f].call(c,b,a)){return d}}}function jc(a,b,c){
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var m=this;
    var o={};
    var p=a.style;
    var q=a.nodeType&&V(a);
    var r=n._data(a,"fxshow");
    c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=() => {h.unqueued||i()}),h.unqueued++,m.always(() => {m.always(() => {h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(() => {p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b){if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue}q=!0}o[d]=r&&r[d]||n.style(a,d)}}if(!n.isEmptyObject(o)){r?"hidden" in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(() => {n(a).hide()}),m.done(() => {var b;n._removeData(a,"fxshow");for(b in o){n.style(a,b,o[b])}});for(d in o){g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}
  }function kc(a,b){
    var c;
    var d;
    var e;
    var f;
    var g;
    for(c in a){if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];for(c in f){c in a||(a[c]=f[c],b[c]=e)}}else{b[d]=e}}
  }function lc(a,b,c){
    var d;
    var e;
    var f=0;
    var g=ec.length;
    var h=n.Deferred().always(() => {delete i.elem});
    var i=() => {if(e){return !1}for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++){j.tweens[g].run(f)}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)};
    var j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween(b, c) {var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop(b) {var c=0,d=b?j.tweens.length:0;if(e){return this}for(e=!0;d>c;c++){j.tweens[c].run(1)}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}});
    var k=j.props;
    for(kc(k,j.opts.specialEasing);g>f;f++){if(d=ec[f].call(j,a,k,j.opts)){return d}}return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }n.Animation=n.extend(lc,{tweener(a, b) {n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++){c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)}},prefilter(a, b) {b?ec.unshift(a):ec.push(a)}}),n.speed=(a, b, c) => {var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo(a, b, c, d) {return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate(a, b, c, d) {
    var e=n.isEmptyObject(a);
    var f=n.speed(b,c,d);
    var g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};
    return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
  },stop(a, b, c) {var d=a => {var b=a.stop;delete a.stop,b(c)};return "string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){
    var b=!0;
    var e=null!=a&&a+"queueHooks";
    var f=n.timers;
    var g=n._data(this);
    if(e){g[e]&&g[e].stop&&d(g[e])}else{for(e in g){g[e]&&g[e].stop&&dc.test(e)&&d(g[e])}}for(e=f.length;e--;){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))}(b||!c)&&n.dequeue(this,a)
  });},finish(a) {return a!==!1&&(a=a||"fx"),this.each(function(){
    var b;
    var c=n._data(this);
    var d=c[a+"queue"];
    var e=c[a+"queueHooks"];
    var f=n.timers;
    var g=d?d.length:0;
    for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))}for(b=0;g>b;b++){d[b]&&d[b].finish&&d[b].finish.call(this)}delete c.finish
  });}}),n.each(["toggle","show","hide"],(a, b) => {var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(a, b) => {n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=() => {
    var a;
    var b=n.timers;
    var c=0;
    for(_b=n.now();c<b.length;c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)}b.length||n.fx.stop(),_b=void 0
  },n.fx.timer=a => {n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=() => {ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=() => {clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,(b, c) => {var d=setTimeout(b,a);c.stop=() => {clearTimeout(d)}});},(() => {
    var a;
    var b;
    var c;
    var d;
    var e=z.createElement("div");
    e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null
  })();var mc=/\r/g;n.fn.extend({val(a) {
    var b;
    var c;
    var d;
    var e=this[0];
    if(arguments.length){return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,a => null==a?"":a+"")),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))});}if(e){return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}
  }}),n.extend({valHooks:{option:{get(a) {var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get(a) {for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++){if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f){return b}g.push(b)}}return g},set(a, b) {
    var c;
    var d;
    var e=a.options;
    var f=n.makeArray(b);
    var g=e.length;
    while(g--){if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0){try{d.selected=c=!0}catch(h){d.scrollHeight}}else{d.selected=!1}}return c||(a.selectedIndex=-1),e
  }}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set(a, b) {return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=a => null===a.getAttribute("value")?"on":a.value)});
  var nc;
  var oc;
  var pc=n.expr.attrHandle;
  var qc=/^(?:checked|selected)$/i;
  var rc=l.getSetAttribute;
  var sc=l.input;
  n.fn.extend({attr(a, b) {return W(this,n.attr,a,b,arguments.length>1)},removeAttr(a) {return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr(a, b, c) {
    var d;
    var e;
    var f=a.nodeType;
    if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))}
  },removeAttr(a, b) {
    var c;
    var d;
    var e=0;
    var f=b&&b.match(F);
    if(f&&1===a.nodeType){while(c=f[e++]){d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)}}
  },attrHooks:{type:{set(a, b) {if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set(a, b, c) {return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),(a, b) => {var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?(a, b, d) => {
    var e;
    var f;
    return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e
  }:(a, b, c) => c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}),sc&&rc||(n.attrHooks.value={set(a, b, c) {return n.nodeName(a,"input")?void (a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set(a, b, c) {var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=(a, b, c) => {var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get(a, b) {var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set(a, b, c) {nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],(a, b) => {n.attrHooks[b]={set(a, c) {return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get(a) {return a.style.cssText||void 0},set(a, b) {return a.style.cssText=b+""}});
  var tc=/^(?:input|select|textarea|button|object)$/i;
  var uc=/^(?:a|area)$/i;
  n.fn.extend({prop(a, b) {return W(this,n.prop,a,b,arguments.length>1)},removeProp(a) {return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop(a, b, c) {
    var d;
    var e;
    var f;
    var g=a.nodeType;
    if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]}
  },propHooks:{tabIndex:{get(a) {var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],(a, b) => {n.propHooks[b]={get(a) {return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get(a) {var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass(a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=0;
    var i=this.length;
    var j="string"==typeof a&&a;
    if(n.isFunction(a)){return this.each(function(b){n(this).addClass(a.call(this,b,this.className))})}if(j){for(b=(a||"").match(F)||[];i>h;h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")}g=n.trim(d),c.className!==g&&(c.className=g)}}}return this
  },removeClass(a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=0;
    var i=this.length;
    var j=0===arguments.length||"string"==typeof a&&a;
    if(n.isFunction(a)){return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))})}if(j){for(b=(a||"").match(F)||[];i>h;h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")}}g=a?n.trim(d):"",c.className!==g&&(c.className=g)}}}return this
  },toggleClass(a, b) {var c=typeof a;return "boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){
    var b;
    var d=0;
    var e=n(this);
    var f=a.match(F)||[];
    while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)}
  }else{(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")}});},hasClass(a) {for(var b=" "+a+" ",c=0,d=this.length;d>c;c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0){return !0}}return !1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(a, b) => {n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover(a, b) {return this.mouseenter(a).mouseleave(b||a)},bind(a, b, c) {return this.on(a,null,b,c)},unbind(a, b) {return this.off(a,null,b)},delegate(a, b, c, d) {return this.on(b,a,c,d)},undelegate(a, b, c) {return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});
  var wc=n.now();
  var xc=/\?/;
  var yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON=b => {
    if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")}
    var c;
    var d=null;
    var e=n.trim(b+"");
    return e&&!n.trim(e.replace(yc,(a, b, e, f) => (c&&b&&(d=0), 0===d?a:(c=e||b,d+=!f-!e,""))))?Function("return "+e)():n.error("Invalid JSON: "+b);
  },n.parseXML=b => {
    var c;
    var d;
    if(!b||"string"!=typeof b){return null}try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c
  };
  var zc;
  var Ac;
  var Bc=/#.*$/;
  var Cc=/([?&])_=[^&]*/;
  var Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm;
  var Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
  var Fc=/^(?:GET|HEAD)$/;
  var Gc=/^\/\//;
  var Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
  var Ic={};
  var Jc={};
  var Kc="*/".concat("*");
  try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return (b, c) => {
    "string"!=typeof b&&(c=b,b="*");
    var d;
    var e=0;
    var f=b.toLowerCase().match(F)||[];
    if(n.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
  };}function Nc(a,b,c,d){
    var e={};
    var f=a===Jc;
    function g(h){var i;return e[h]=!0,n.each(a[h]||[],(a, h) => {var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i;}return g(b.dataTypes[0])||!e["*"]&&g("*")
  }function Oc(a,b){
    var c;
    var d;
    var e=n.ajaxSettings.flatOptions||{};
    for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])}return c&&n.extend(!0,a,c),a
  }function Pc(a,b,c){
    var d;
    var e;
    var f;
    var g;
    var h=a.contents;
    var i=a.dataTypes;
    while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);break}}}if(i[0] in c){f=i[0]}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
  }function Qc(a,b,c,d){
    var e;
    var f;
    var g;
    var h;
    var i;
    var j={};
    var k=a.dataTypes.slice();
    if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]}}f=k.shift();while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}}}if(g!==!0){if(g&&a["throws"]){b=g(b)}else{try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}}}}}}return{state:"success",data:b}
  }n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup(a, b) {return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax(a, b) {
    "object"==typeof a&&(b=a,a=void 0),b=b||{};
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k=n.ajaxSetup({},b);
    var l=k.context||k;
    var m=k.context&&(l.nodeType||l.jquery)?n(l):n.event;
    var o=n.Deferred();
    var p=n.Callbacks("once memory");
    var q=k.statusCode||{};
    var r={};
    var s={};
    var t=0;
    var u="canceled";
    var v={readyState:0,getResponseHeader(a) {var b;if(2===t){if(!j){j={};while(b=Dc.exec(f)){j[b[1].toLowerCase()]=b[2]}}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders() {return 2===t?f:null},setRequestHeader(a, b) {var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType(a) {return t||(k.mimeType=a),this},statusCode(a) {var b;if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]}}else{v.always(a[v.status])}}return this},abort(a) {var b=a||u;return i&&i.abort(b),x(0,b),this}};
    if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t){return v}h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers){v.setRequestHeader(d,k.headers[d])}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()}u="abort";for(d in {success:1,error:1,complete:1}){v[d](k[d])}if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(() => {v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t)){throw w}x(-1,w)}}else{x(-1,"No Transport")}function x(a,b,c,d){
      var j;
      var r;
      var s;
      var u;
      var w;
      var x=b;
      2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))
    }return v
  },getJSON(a, b, c) {return n.get(a,b,c,"json")},getScript(a, b) {return n.get(a,void 0,b,"script")}}),n.each(["get","post"],(a, b) => {n[b]=(a, c, d, e) => (n.isFunction(c)&&(e=e||d,d=c,c=void 0), n.ajax({url:a,type:b,dataType:e,data:c,success:d}))}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(a, b) => {n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=a => n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}),n.fn.extend({wrapAll(a) {if(n.isFunction(a)){return this.each(function(b){n(this).wrapAll(a.call(this,b))})}if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild}return a}).append(this)}return this},wrapInner(a) {return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){
    var b=n(this);
    var c=b.contents();
    c.length?c.wrapAll(a):b.append(a)
  });},wrap(a) {var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap() {return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=a => a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display")),n.expr.filters.visible=a => !n.expr.filters.hidden(a);
  var Rc=/%20/g;
  var Sc=/\[\]$/;
  var Tc=/\r?\n/g;
  var Uc=/^(?:submit|button|image|reset|file)$/i;
  var Vc=/^(?:input|select|textarea|keygen)/i;
  function Wc(a,b,c,d){var e;if(n.isArray(b)){n.each(b,(b, e) => {c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)})}else{if(c||"object"!==n.type(b)){d(a,b)}else{for(e in b){Wc(a+"["+e+"]",b[e],c,d)}}}}n.param=(a, b) => {
    var c;
    var d=[];
    var e=(a, b) => {b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
    if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a)){n.each(a,function(){e(this.name,this.value)})}else{for(c in a){Wc(c,a[c],b,e)}}return d.join("&").replace(Rc,"+")
  },n.fn.extend({serialize() {return n.param(this.serializeArray())},serializeArray() {return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,a => ({
    name:b.name,
    value:a.replace(Tc,"\r\n")
  })):{name:b.name,value:c.replace(Tc,"\r\n")};}).get();}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;
  var Xc=0;
  var Yc={};
  var Zc=n.ajaxSettings.xhr();
  a.ActiveXObject&&n(a).on("unload",() => {for(var a in Yc){Yc[a](void 0,!0)}}),l.cors=!!Zc&&"withCredentials" in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(a => {if(!a.crossDomain||l.cors){var b;return {send(c, d) {
    var e;
    var f=a.xhr();
    var g=++Xc;
    if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c){void 0!==c[e]&&f.setRequestHeader(e,c[e]+"")}f.send(a.hasContent&&a.data||null),b=(c, e) => {
      var h;
      var i;
      var j;
      if(b&&(e||4===f.readyState)){if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e){4!==f.readyState&&f.abort()}else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}}j&&d(h,i,j,f.getAllResponseHeaders())
    },a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()
  },abort() {b&&b(void 0,!0)}};}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",a => {void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",a => {if(a.crossDomain){
    var b;
    var c=z.head||n("head")[0]||z.documentElement;
    return {send(d, e) {b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=(a, c) => {(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort() {b&&b.onload(void 0,!0)}};
  }});
  var ad=[];
  var bd=/(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({jsonp:"callback",jsonpCallback() {var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",(b, c, d) => {
    var e;
    var f;
    var g;
    var h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");
    return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=() => (g||n.error(e+" was not called"), g[0]),b.dataTypes[0]="json",f=a[e],a[e]=function(...args) {g=args},d.always(() => {a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0;
  }),n.parseHTML=(a, b, c) => {
    if(!a||"string"!=typeof a){return null}"boolean"==typeof b&&(c=b,b=!1),b=b||z;
    var d=v.exec(a);
    var e=!c&&[];
    return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))
  };var cd=n.fn.load;n.fn.load=function(a,b,c){
    if("string"!=typeof a&&cd){return cd.apply(this,arguments)}
    var d;
    var e;
    var f;
    var g=this;
    var h=a.indexOf(" ");
    return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&((a, b) => {g.each(c,e||[a.responseText,b,a])})),this;
  },n.expr.filters.animated=a => n.grep(n.timers,b => a===b.elem).length;var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset(a, b, c) {
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k=n.css(a,"position");
    var l=n(a);
    var m={};
    "static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m)
  }},n.fn.extend({offset(a) {
    if(arguments.length){return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)})}
    var b;
    var c;
    var d={top:0,left:0};
    var e=this[0];
    var f=e&&e.ownerDocument;
    if(f){return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d}
  },position() {if(this[0]){
    var a;
    var b;
    var c={top:0,left:0};
    var d=this[0];
    return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}
  }},offsetParent() {return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position")){a=a.offsetParent}return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(a, b) => {var c=/Y/.test(b);n.fn[a]=function(d){return W(this,(a, d, e) => {var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null);}}),n.each(["top","left"],(a, b) => {n.cssHooks[b]=Mb(l.pixelPosition,(a, c) => c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0)}),n.each({Height:"height",Width:"width"},(a, b) => {n.each({padding:"inner"+a,content:b,"":"outer"+a},(c, d) => {n.fn[d]=function(d,e){
    var f=arguments.length&&(c||"boolean"!=typeof d);
    var g=c||(d===!0||e===!0?"margin":"border");
    return W(this,(b, c, d) => {var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null);
  }})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],() => n);
  var fd=a.jQuery;
  var gd=a.$;
  return n.noConflict=b => (a.$===n&&(a.$=gd), b&&a.jQuery===n&&(a.jQuery=fd), n),typeof b===L&&(a.jQuery=a.$=n),n;
});/*! jQuery UI - v1.10.4 - 2014-02-09
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(((g, d) => {
  function c(k,j){
    var l;
    var e;
    var n;
    var m=k.nodeName.toLowerCase();
    return"area"===m?(l=k.parentNode,e=l.name,k.href&&e&&"map"===l.nodeName.toLowerCase()?(n=g("img[usemap=#"+e+"]")[0],!!n&&h(n)):!1):(/input|select|textarea|button|object/.test(m)?!k.disabled:"a"===m?k.href||j:j)&&h(k)
  }function h(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return"hidden"===g.css(this,"visibility")}).length}
  var f=0;
  var b=/^ui-id-\d+$/;
  g.ui=g.ui||{},g.extend(g.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),g.fn.extend({focus:(a => function(e,j){return "number"==typeof e?this.each(function(){var i=this;setTimeout(() => {g(i).focus(),j&&j.call(i)},e)}):a.apply(this,arguments);})(g.fn.focus),scrollParent() {var a;return a=g.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(g.css(this,"position"))&&/(auto|scroll)/.test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!a.length?g(document):a},zIndex(j) {if(j!==d){return this.css("zIndex",j)}if(this.length){for(var l,k,e=g(this[0]);e.length&&e[0]!==document;){if(l=e.css("position"),("absolute"===l||"relative"===l||"fixed"===l)&&(k=parseInt(e.css("zIndex"),10),!isNaN(k)&&0!==k)){return k}e=e.parent()}}return 0},uniqueId() {return this.each(function(){this.id||(this.id="ui-id-"+ ++f)})},removeUniqueId() {return this.each(function(){b.test(this.id)&&g(this).removeAttr("id")})}}),g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(a => e => !!g.data(e,a)):(e, a, j) => !!g.data(e,j[3]),focusable(a) {return c(a,!isNaN(g.attr(a,"tabindex")))},tabbable(a) {
    var i=g.attr(a,"tabindex");
    var e=isNaN(i);
    return(e||i>=0)&&c(a,!e)
  }}),g("<a>").outerWidth(1).jquery||g.each(["Width","Height"],(j, p) => {
    function k(o,a,r,q){return g.each(e,function(){a-=parseFloat(g.css(o,"padding"+this))||0,r&&(a-=parseFloat(g.css(o,"border"+this+"Width"))||0),q&&(a-=parseFloat(g.css(o,"margin"+this))||0)}),a}
    var e="Width"===p?["Left","Right"]:["Top","Bottom"];
    var m=p.toLowerCase();
    var l={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
    g.fn["inner"+p]=function(a){return a===d?l["inner"+p].call(this):this.each(function(){g(this).css(m,k(this,a)+"px")})},g.fn["outer"+p]=function(n,a){return"number"!=typeof n?l["outer"+p].call(this,n):this.each(function(){g(this).css(m,k(this,n,!0,a)+"px")})}
  }),g.fn.addBack||(g.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),g("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(g.fn.removeData=(a => function(e){return arguments.length?a.call(this,g.camelCase(e)):a.call(this)})(g.fn.removeData)),g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),g.support.selectstart="onselectstart" in document.createElement("div"),g.fn.extend({disableSelection() {return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",a => {a.preventDefault()});},enableSelection() {return this.unbind(".ui-disableSelection")}}),g.extend(g.ui,{plugin:{add(k, j, m) {
    var l;
    var e=g.ui[k].prototype;
    for(l in m){e.plugins[l]=e.plugins[l]||[],e.plugins[l].push([j,m[l]])}
  },call(l, j, a) {
    var m;
    var k=l.plugins[j];
    if(k&&l.element[0].parentNode&&11!==l.element[0].parentNode.nodeType){for(m=0;k.length>m;m++){l.options[k[m][0]]&&k[m][1].apply(l.element,a)}}
  }},hasScroll(e, a) {
    if("hidden"===g(e).css("overflow")){return !1}
    var k=a&&"left"===a?"scrollLeft":"scrollTop";
    var j=!1;
    return e[k]>0?!0:(e[k]=1,j=e[k]>0,e[k]=0,j)
  }})
}))(jQuery);(((b, d) => {
  var a=0;
  var c=Array.prototype.slice;
  var f=b.cleanData;
  b.cleanData=j => {for(var g,h=0;null!=(g=j[h]);h++){try{b(g).triggerHandler("remove")}catch(k){}}f(j)},b.widget=(m, u, j) => {
    var g;
    var t;
    var e;
    var p;
    var k={};
    var q=m.split(".")[0];
    m=m.split(".")[1],g=q+"-"+m,j||(j=u,u=b.Widget),b.expr[":"][g.toLowerCase()]=h => !!b.data(h,g),b[q]=b[q]||{},t=b[q][m],e=b[q][m]=function(l,h){return this._createWidget?(arguments.length&&this._createWidget(l,h),d):new e(l,h)},b.extend(e,t,{version:j.version,_proto:b.extend({},j),_childConstructors:[]}),p=new u,p.options=b.widget.extend({},p.options),b.each(j,(h, l) => b.isFunction(l)?(k[h]=(() => {
      var i=function(...args) {return u.prototype[h].apply(this,args);};
      var n=function(o){return u.prototype[h].apply(this,o)};
      return function(...args) {
        var r;
        var v=this._super;
        var w=this._superApply;
        return this._super=i,this._superApply=n,r=l.apply(this,args),this._super=v,this._superApply=w,r;
      };
    })(),d):(k[h]=l,d)),e.prototype=b.widget.extend(p,{widgetEventPrefix:t?p.widgetEventPrefix||m:m},k,{constructor:e,namespace:q,widgetName:m,widgetFullName:g}),t?(b.each(t._childConstructors,(n, h) => {var l=h.prototype;b.widget(l.namespace+"."+l.widgetName,e,h._proto)}),delete t._childConstructors):u._childConstructors.push(e),b.widget.bridge(m,e)
  },b.widget.extend=function(g){for(var m,l,e=c.call(arguments,1),k=0,j=e.length;j>k;k++){for(m in e[k]){l=e[k][m],e[k].hasOwnProperty(m)&&l!==d&&(g[m]=b.isPlainObject(l)?b.isPlainObject(g[m])?b.widget.extend({},g[m],l):b.widget.extend({},l):l)}}return g},b.widget.bridge=(e, h) => {var g=h.prototype.widgetFullName||e;b.fn[e]=function(j){
    var m="string"==typeof j;
    var k=c.call(arguments,1);
    var i=this;
    return j=!m&&k.length?b.widget.extend.apply(null,[j].concat(k)):j,m?this.each(function(){
      var l;
      var o=b.data(this,g);
      return o?b.isFunction(o[j])&&"_"!==j.charAt(0)?(l=o[j](...k),l!==o&&l!==d?(i=l&&l.jquery?i.pushStack(l.get()):l,!1):d):b.error("no such method '"+j+"' for "+e+" widget instance"):b.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+j+"'");
    }):this.each(function(){var l=b.data(this,g);l?l.option(j||{})._init():b.data(this,g,new h(j,this))}),i;
  }},b.Widget=() => {},b.Widget._childConstructors=[],b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget(h, g) {g=b(g||this.defaultElement||this)[0],this.element=b(g),this.uuid=a++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=b.widget.extend({},this.options,this._getCreateOptions(),h),this.bindings=b(),this.hoverable=b(),this.focusable=b(),g!==this&&(b.data(g,this.widgetFullName,this),this._on(!0,this.element,{remove(e) {e.target===g&&this.destroy()}}),this.document=b(g.style?g.ownerDocument:g.document||g),this.window=b(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy() {this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget() {return this.element},option(g, h) {
    var l;
    var k;
    var e;
    var j=g;
    if(0===arguments.length){return b.widget.extend({},this.options)}if("string"==typeof g){if(j={},l=g.split("."),g=l.shift(),l.length){for(k=j[g]=b.widget.extend({},this.options[g]),e=0;l.length-1>e;e++){k[l[e]]=k[l[e]]||{},k=k[l[e]]}if(g=l.pop(),1===arguments.length){return k[g]===d?null:k[g]}k[g]=h}else{if(1===arguments.length){return this.options[g]===d?null:this.options[g]}j[g]=h}}return this._setOptions(j),this
  },_setOptions(g) {var h;for(h in g){this._setOption(h,g[h])}return this},_setOption(g, h) {return this.options[g]=h,"disabled"===g&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!h).attr("aria-disabled",h),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable() {return this._setOption("disabled",!1)},disable() {return this._setOption("disabled",!0)},_on(g, h, k) {
    var j;
    var e=this;
    "boolean"!=typeof g&&(k=h,h=g,g=!1),k?(h=j=b(h),this.bindings=this.bindings.add(h)):(k=h,h=this.element,j=this.widget()),b.each(k,(s, p) => {
      function o(...args) {return g||e.options.disabled!==!0&&!b(this).hasClass("ui-state-disabled")?("string"==typeof p?e[p]:p).apply(e,args):d;}"string"!=typeof p&&(o.guid=p.guid=p.guid||o.guid||b.guid++);
      var i=s.match(/^(\w+)\s*(.*)$/);
      var q=i[1]+e.eventNamespace;
      var m=i[2];
      m?j.delegate(m,q,o):h.bind(q,o)
    })
  },_off(g, h) {h=(h||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,g.unbind(h).undelegate(h)},_delay(h, k) {function g(...args) {return ("string"==typeof h?j[h]:h).apply(j,args);}var j=this;return setTimeout(g,k||0)},_hoverable(g) {this.hoverable=this.hoverable.add(g),this._on(g,{mouseenter(h) {b(h.currentTarget).addClass("ui-state-hover")},mouseleave(h) {b(h.currentTarget).removeClass("ui-state-hover")}})},_focusable(g) {this.focusable=this.focusable.add(g),this._on(g,{focusin(h) {b(h.currentTarget).addClass("ui-state-focus")},focusout(h) {b(h.currentTarget).removeClass("ui-state-focus")}})},_trigger(k, h, j) {
    var m;
    var l;
    var g=this.options[k];
    if(j=j||{},h=b.Event(h),h.type=(k===this.widgetEventPrefix?k:this.widgetEventPrefix+k).toLowerCase(),h.target=this.element[0],l=h.originalEvent){for(m in l){m in h||(h[m]=l[m])}}return this.element.trigger(h,j),!(b.isFunction(g)&&g.apply(this.element[0],[h].concat(j))===!1||h.isDefaultPrevented())
  }},b.each({show:"fadeIn",hide:"fadeOut"},(h, g) => {b.Widget.prototype["_"+h]=(i, l, k) => {
    "string"==typeof l&&(l={effect:l});
    var e;
    var j=l?l===!0||"number"==typeof l?g:l.effect||g:h;
    l=l||{},"number"==typeof l&&(l={duration:l}),e=!b.isEmptyObject(l),l.complete=k,l.delay&&i.delay(l.delay),e&&b.effects&&b.effects.effect[j]?i[h](l):j!==h&&i[j]?i[j](l.duration,l.easing,k):i.queue(function(m){b(this)[h](),k&&k.call(i[0]),m()})
  }})
}))(jQuery);((a => {var b=!1;a(document).mouseup(() => {b=!1}),a.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit() {var c=this;this.element.bind("mousedown."+this.widgetName,d => c._mouseDown(d)).bind("click."+this.widgetName,d => !0===a.data(d.target,c.widgetName+".preventClickEvent")?(a.removeData(d.target,c.widgetName+".preventClickEvent"),d.stopImmediatePropagation(),!1):undefined),this.started=!1},_mouseDestroy() {this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown(d) {if(!b){
  this._mouseStarted&&this._mouseUp(d),this._mouseDownEvent=d;
  var e=this;
  var f=1===d.which;
  var c="string"==typeof this.options.cancel&&d.target.nodeName?a(d.target).closest(this.options.cancel).length:!1;
  return f&&!c&&this._mouseCapture(d)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(() => {e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(d)!==!1,!this._mouseStarted)?(d.preventDefault(),!0):(!0===a.data(d.target,this.widgetName+".preventClickEvent")&&a.removeData(d.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=g => e._mouseMove(g),this._mouseUpDelegate=g => e._mouseUp(g),a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),d.preventDefault(),b=!0,!0)):!0;
}},_mouseMove(c) {return a.ui.ie&&(!document.documentMode||9>document.documentMode)&&!c.button?this._mouseUp(c):this._mouseStarted?(this._mouseDrag(c),c.preventDefault()):(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==!1,this._mouseStarted?this._mouseDrag(c):this._mouseUp(c)),!this._mouseStarted)},_mouseUp(c) {return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),!1},_mouseDistanceMet(c) {return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance},_mouseDelayMet() {return this.mouseDelayMet},_mouseStart() {},_mouseDrag() {},_mouseStop() {},_mouseCapture() {return !0}})}))(jQuery);(((C, x) => {
  function q(c,d,a){return[parseFloat(c[0])*(g.test(c[0])?d/100:1),parseFloat(c[1])*(g.test(c[1])?a/100:1)]}function D(c,a){return parseInt(C.css(c,a),10)||0}function k(c){var a=c[0];return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:C.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}}C.ui=C.ui||{};
  var A;
  var j=Math.max;
  var b=Math.abs;
  var m=Math.round;
  var v=/left|center|right/;
  var z=/top|center|bottom/;
  var B=/[\+\-]\d+(\.[\d]+)?%?/;
  var y=/^\w+/;
  var g=/%$/;
  var w=C.fn.position;
  C.position={scrollbarWidth() {
    if(A!==x){return A}
    var a;
    var c;
    var e=C("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
    var d=e.children()[0];
    return C("body").append(e),a=d.offsetWidth,e.css("overflow","scroll"),c=d.offsetWidth,a===c&&(c=e[0].clientWidth),e.remove(),A=a-c
  },getScrollInfo(h) {
    var d=h.isWindow||h.isDocument?"":h.element.css("overflow-x");
    var f=h.isWindow||h.isDocument?"":h.element.css("overflow-y");
    var l="scroll"===d||"auto"===d&&h.width<h.element[0].scrollWidth;
    var c="scroll"===f||"auto"===f&&h.height<h.element[0].scrollHeight;
    return{width:c?C.position.scrollbarWidth():0,height:l?C.position.scrollbarWidth():0}
  },getWithinInfo(d) {
    var a=C(d||window);
    var c=C.isWindow(a[0]);
    var f=!!a[0]&&9===a[0].nodeType;
    return{element:a,isWindow:c,isDocument:f,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:c?a.width():a.outerWidth(),height:c?a.height():a.outerHeight()}
  }},C.fn.position=function(l){
    if(!l||!l.of){return w.apply(this,arguments)}l=C.extend({},l);
    var r;
    var d;
    var i;
    var f;
    var u;
    var t;
    var o=C(l.of);
    var n=C.position.getWithinInfo(l.within);
    var h=C.position.getScrollInfo(n);
    var s=(l.collision||"flip").split(" ");
    var c={};
    return t=k(o),o[0].preventDefault&&(l.at="left top"),d=t.width,i=t.height,f=t.offset,u=C.extend({},f),C.each(["my","at"],function(){
      var e;
      var a;
      var p=(l[this]||"").split(" ");
      1===p.length&&(p=v.test(p[0])?p.concat(["center"]):z.test(p[0])?["center"].concat(p):["center","center"]),p[0]=v.test(p[0])?p[0]:"center",p[1]=z.test(p[1])?p[1]:"center",e=B.exec(p[0]),a=B.exec(p[1]),c[this]=[e?e[0]:0,a?a[0]:0],l[this]=[y.exec(p[0])[0],y.exec(p[1])[0]]
    }),1===s.length&&(s[1]=s[0]),"right"===l.at[0]?u.left+=d:"center"===l.at[0]&&(u.left+=d/2),"bottom"===l.at[1]?u.top+=i:"center"===l.at[1]&&(u.top+=i/2),r=q(c.at,d,i),u.left+=r[0],u.top+=r[1],this.each(function(){
      var e;
      var E;
      var I=C(this);
      var L=I.outerWidth();
      var H=I.outerHeight();
      var F=D(this,"marginLeft");
      var K=D(this,"marginTop");
      var J=L+F+D(this,"marginRight")+h.width;
      var a=H+K+D(this,"marginBottom")+h.height;
      var G=C.extend({},u);
      var p=q(c.my,I.outerWidth(),I.outerHeight());
      "right"===l.my[0]?G.left-=L:"center"===l.my[0]&&(G.left-=L/2),"bottom"===l.my[1]?G.top-=H:"center"===l.my[1]&&(G.top-=H/2),G.left+=p[0],G.top+=p[1],C.support.offsetFractions||(G.left=m(G.left),G.top=m(G.top)),e={marginLeft:F,marginTop:K},C.each(["left","top"],(M, N) => {C.ui.position[s[M]]&&C.ui.position[s[M]][N](G,{targetWidth:d,targetHeight:i,elemWidth:L,elemHeight:H,collisionPosition:e,collisionWidth:J,collisionHeight:a,offset:[r[0]+p[0],r[1]+p[1]],my:l.my,at:l.at,within:n,elem:I})}),l.using&&(E=function(P){
        var O=f.left-G.left;
        var Q=O+d-L;
        var R=f.top-G.top;
        var N=R+i-H;
        var M={target:{element:o,left:f.left,top:f.top,width:d,height:i},element:{element:I,left:G.left,top:G.top,width:L,height:H},horizontal:0>Q?"left":O>0?"right":"center",vertical:0>N?"top":R>0?"bottom":"middle"};
        L>d&&d>b(O+Q)&&(M.horizontal="center"),H>i&&i>b(R+N)&&(M.vertical="middle"),M.important=j(b(O),b(Q))>j(b(R),b(N))?"horizontal":"vertical",l.using.call(this,P,M)
      }),I.offset(C.extend(G,{using:E}))
    });
  },C.ui.position={fit:{left(F, u) {
    var o;
    var G=u.within;
    var d=G.isWindow?G.scrollLeft:G.offset.left;
    var E=G.width;
    var c=F.left-u.collisionPosition.marginLeft;
    var f=d-c;
    var p=c+u.collisionWidth-E-d;
    u.collisionWidth>E?f>0&&0>=p?(o=F.left+f+u.collisionWidth-E-d,F.left+=f-o):F.left=p>0&&0>=f?d:f>p?d+E-u.collisionWidth:d:f>0?F.left+=f:p>0?F.left-=p:F.left=j(F.left-c,F.left)
  },top(F, u) {
    var o;
    var G=u.within;
    var d=G.isWindow?G.scrollTop:G.offset.top;
    var E=u.within.height;
    var c=F.top-u.collisionPosition.marginTop;
    var f=d-c;
    var p=c+u.collisionHeight-E-d;
    u.collisionHeight>E?f>0&&0>=p?(o=F.top+f+u.collisionHeight-E-d,F.top+=f-o):F.top=p>0&&0>=f?d:f>p?d+E-u.collisionHeight:d:f>0?F.top+=f:p>0?F.top-=p:F.top=j(F.top-c,F.top)
  }},flip:{left(P, K) {
    var H;
    var Q;
    var F=K.within;
    var N=F.offset.left+F.scrollLeft;
    var E=F.width;
    var G=F.isWindow?F.scrollLeft:F.offset.left;
    var I=P.left-K.collisionPosition.marginLeft;
    var M=I-G;
    var O=I+K.collisionWidth-E-G;
    var L="left"===K.my[0]?-K.elemWidth:"right"===K.my[0]?K.elemWidth:0;
    var r="left"===K.at[0]?K.targetWidth:"right"===K.at[0]?-K.targetWidth:0;
    var J=-2*K.offset[0];
    0>M?(H=P.left+L+r+J+K.collisionWidth-E-N,(0>H||b(M)>H)&&(P.left+=L+r+J)):O>0&&(Q=P.left-K.collisionPosition.marginLeft+L+r+J-G,(Q>0||O>b(Q))&&(P.left+=L+r+J))
  },top(Q, L) {
    var H;
    var R;
    var F=L.within;
    var O=F.offset.top+F.scrollTop;
    var E=F.height;
    var G=F.isWindow?F.scrollTop:F.offset.top;
    var I=Q.top-L.collisionPosition.marginTop;
    var N=I-G;
    var P=I+L.collisionHeight-E-G;
    var M="top"===L.my[1];
    var r=M?-L.elemHeight:"bottom"===L.my[1]?L.elemHeight:0;
    var K="top"===L.at[1]?L.targetHeight:"bottom"===L.at[1]?-L.targetHeight:0;
    var J=-2*L.offset[1];
    0>N?(R=Q.top+r+K+J+L.collisionHeight-E-O,Q.top+r+K+J>N&&(0>R||b(N)>R)&&(Q.top+=r+K+J)):P>0&&(H=Q.top-L.collisionPosition.marginTop+r+K+J-G,Q.top+r+K+J>P&&(H>0||P>b(H))&&(Q.top+=r+K+J))
  }},flipfit:{left(...args) {C.ui.position.flip.left.apply(this,args),C.ui.position.fit.left.apply(this,args)},top(...args) {C.ui.position.flip.top.apply(this,args),C.ui.position.fit.top.apply(this,args)}}},(() => {
    var l;
    var d;
    var f;
    var t;
    var c;
    var p=document.getElementsByTagName("body")[0];
    var h=document.createElement("div");
    l=document.createElement(p?"div":"body"),f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},p&&C.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"});for(c in f){l.style[c]=f[c]}l.appendChild(h),d=p||document.documentElement,d.insertBefore(l,d.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",t=C(h).offset().left,C.support.offsetFractions=t>10&&11>t,l.innerHTML="",d.removeChild(l)
  })()
}))(jQuery);((a => {a.widget("ui.draggable",a.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create() {"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy() {this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture(c) {var b=this.options;return this.helper||b.disabled||a(c.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(c),this.handle?(a(b.iframeFix===!0?"iframe":b.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart(c) {var b=this.options;return this.helper=this._createHelper(c),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(c),this.originalPageX=c.pageX,this.originalPageY=c.pageY,b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt),this._setContainment(),this._trigger("start",c)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!b.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,c),this._mouseDrag(c,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,c),!0)},_mouseDrag(d, b) {if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(d),this.positionAbs=this._convertPositionTo("absolute"),!b){var c=this._uiHash();if(this._trigger("drag",d,c)===!1){return this._mouseUp({}),!1}this.position=c.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,d),!1},_mouseStop(d) {
  var b=this;
  var c=!1;
  return a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,d)),this.dropped&&(c=this.dropped,this.dropped=!1),"original"!==this.options.helper||a.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!c||"valid"===this.options.revert&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),() => {b._trigger("stop",d)!==!1&&b._clear()}):this._trigger("stop",d)!==!1&&this._clear(),!1):!1;
},_mouseUp(b) {return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel() {return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle(b) {return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper(d) {
  var b=this.options;
  var c=a.isFunction(b.helper)?a(b.helper.apply(this.element[0],[d])):"clone"===b.helper?this.element.clone().removeAttr("id"):this.element;
  return c.parents("body").length||c.appendTo("parent"===b.appendTo?this.element[0].parentNode:b.appendTo),c[0]===this.element[0]||/(fixed|absolute)/.test(c.css("position"))||c.css("position","absolute"),c
},_adjustOffsetFromHelper(b) {"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left" in b&&(this.offset.click.left=b.left+this.margins.left),"right" in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top" in b&&(this.offset.click.top=b.top+this.margins.top),"bottom" in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset() {var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset() {if("relative"===this.cssPosition){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins() {this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions() {this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment() {
  var d;
  var b;
  var c;
  var f=this.options;
  return f.containment?"window"===f.containment?(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===f.containment?(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):f.containment.constructor===Array?(this.containment=f.containment,undefined):("parent"===f.containment&&(f.containment=this.helper[0].parentNode),b=a(f.containment),c=b[0],c&&(d="hidden"!==b.css("overflow"),this.containment=[(parseInt(b.css("borderLeftWidth"),10)||0)+(parseInt(b.css("paddingLeft"),10)||0),(parseInt(b.css("borderTopWidth"),10)||0)+(parseInt(b.css("paddingTop"),10)||0),(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(b.css("borderRightWidth"),10)||0)-(parseInt(b.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(b.css("borderBottomWidth"),10)||0)-(parseInt(b.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=b),undefined):(this.containment=null,undefined)
},_convertPositionTo(d, b) {
  b||(b=this.position);
  var c="absolute"===d?1:-1;
  var f="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  return this.offset.scroll||(this.offset.scroll={top:f.scrollTop(),left:f.scrollLeft()}),{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*c}
},_generatePosition(k) {
  var g;
  var p;
  var d;
  var m;
  var c=this.options;
  var b="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var f=k.pageX;
  var j=k.pageY;
  return this.offset.scroll||(this.offset.scroll={top:b.scrollTop(),left:b.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(p=this.relative_container.offset(),g=[this.containment[0]+p.left,this.containment[1]+p.top,this.containment[2]+p.left,this.containment[3]+p.top]):g=this.containment,k.pageX-this.offset.click.left<g[0]&&(f=g[0]+this.offset.click.left),k.pageY-this.offset.click.top<g[1]&&(j=g[1]+this.offset.click.top),k.pageX-this.offset.click.left>g[2]&&(f=g[2]+this.offset.click.left),k.pageY-this.offset.click.top>g[3]&&(j=g[3]+this.offset.click.top)),c.grid&&(d=c.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY,j=g?d-this.offset.click.top>=g[1]||d-this.offset.click.top>g[3]?d:d-this.offset.click.top>=g[1]?d-c.grid[1]:d+c.grid[1]:d,m=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX,f=g?m-this.offset.click.left>=g[0]||m-this.offset.click.left>g[2]?m:m-this.offset.click.left>=g[0]?m-c.grid[0]:m+c.grid[0]:m)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}
},_clear() {this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger(d, b, c) {return c=c||this._uiHash(),a.ui.plugin.call(this,d,[b,c]),"drag"===d&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,d,b,c)},plugins:{},_uiHash() {return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start(f, c) {
  var d=a(this).data("ui-draggable");
  var g=d.options;
  var b=a.extend({},c,{item:d.element});
  d.sortables=[],a(g.connectToSortable).each(function(){var e=a.data(this,"ui-sortable");e&&!e.options.disabled&&(d.sortables.push({instance:e,shouldRevert:e.options.revert}),e.refreshPositions(),e._trigger("activate",f,b))})
},stop(d, b) {
  var c=a(this).data("ui-draggable");
  var f=a.extend({},b,{item:c.element});
  a.each(c.sortables,function(){this.instance.isOver?(this.instance.isOver=0,c.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(d),this.instance.options.helper=this.instance.options._helper,"original"===c.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",d,f))})
},drag(d, b) {
  var c=a(this).data("ui-draggable");
  var f=this;
  a.each(c.sortables,function(){
    var e=!1;
    var g=this;
    this.instance.positionAbs=c.positionAbs,this.instance.helperProportions=c.helperProportions,this.instance.offset.click=c.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(e=!0,a.each(c.sortables,function(){return this.instance.positionAbs=c.positionAbs,this.instance.helperProportions=c.helperProportions,this.instance.offset.click=c.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(e=!1),e})),e?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(f).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=() => b.helper[0],d.target=this.instance.currentItem[0],this.instance._mouseCapture(d,!0),this.instance._mouseStart(d,!0,!0),this.instance.offset.click.top=c.offset.click.top,this.instance.offset.click.left=c.offset.click.left,this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top,c._trigger("toSortable",d),c.dropped=this.instance.element,c.currentItem=c.element,this.instance.fromOutside=c),this.instance.currentItem&&this.instance._mouseDrag(d)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",d,this.instance._uiHash(this.instance)),this.instance._mouseStop(d,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),c._trigger("fromSortable",d),c.dropped=!1)
  })
}}),a.ui.plugin.add("draggable","cursor",{start() {
  var c=a("body");
  var b=a(this).data("ui-draggable").options;
  c.css("cursor")&&(b._cursor=c.css("cursor")),c.css("cursor",b.cursor)
},stop() {var b=a(this).data("ui-draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}}),a.ui.plugin.add("draggable","opacity",{start(d, b) {
  var c=a(b.helper);
  var f=a(this).data("ui-draggable").options;
  c.css("opacity")&&(f._opacity=c.css("opacity")),c.css("opacity",f.opacity)
},stop(d, b) {var c=a(this).data("ui-draggable").options;c._opacity&&a(b.helper).css("opacity",c._opacity)}}),a.ui.plugin.add("draggable","scroll",{start() {var b=a(this).data("ui-draggable");b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())},drag(d) {
  var b=a(this).data("ui-draggable");
  var c=b.options;
  var f=!1;
  b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName?(c.axis&&"x"===c.axis||(b.overflowOffset.top+b.scrollParent[0].offsetHeight-d.pageY<c.scrollSensitivity?b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed:d.pageY-b.overflowOffset.top<c.scrollSensitivity&&(b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed)),c.axis&&"y"===c.axis||(b.overflowOffset.left+b.scrollParent[0].offsetWidth-d.pageX<c.scrollSensitivity?b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed:d.pageX-b.overflowOffset.left<c.scrollSensitivity&&(b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed))):(c.axis&&"x"===c.axis||(d.pageY-a(document).scrollTop()<c.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(d.pageY-a(document).scrollTop())<c.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed))),c.axis&&"y"===c.axis||(d.pageX-a(document).scrollLeft()<c.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(d.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(b,d)
}}),a.ui.plugin.add("draggable","snap",{start() {
  var c=a(this).data("ui-draggable");
  var b=c.options;
  c.snapElements=[],a(b.snap.constructor!==String?b.snap.items||":data(ui-draggable)":b.snap).each(function(){
    var d=a(this);
    var e=d.offset();
    this!==c.element[0]&&c.snapElements.push({item:this,width:d.outerWidth(),height:d.outerHeight(),top:e.top,left:e.left})
  })
},drag(F, B) {
  var q;
  var y;
  var J;
  var x;
  var t;
  var A;
  var C;
  var H;
  var k;
  var G;
  var w=a(this).data("ui-draggable");
  var D=w.options;
  var E=D.snapTolerance;
  var z=B.offset.left;
  var K=z+w.helperProportions.width;
  var j=B.offset.top;
  var I=j+w.helperProportions.height;
  for(k=w.snapElements.length-1;k>=0;k--){t=w.snapElements[k].left,A=t+w.snapElements[k].width,C=w.snapElements[k].top,H=C+w.snapElements[k].height,t-E>K||z>A+E||C-E>I||j>H+E||!a.contains(w.snapElements[k].item.ownerDocument,w.snapElements[k].item)?(w.snapElements[k].snapping&&w.options.snap.release&&w.options.snap.release.call(w.element,F,a.extend(w._uiHash(),{snapItem:w.snapElements[k].item})),w.snapElements[k].snapping=!1):("inner"!==D.snapMode&&(q=E>=Math.abs(C-I),y=E>=Math.abs(H-j),J=E>=Math.abs(t-K),x=E>=Math.abs(A-z),q&&(B.position.top=w._convertPositionTo("relative",{top:C-w.helperProportions.height,left:0}).top-w.margins.top),y&&(B.position.top=w._convertPositionTo("relative",{top:H,left:0}).top-w.margins.top),J&&(B.position.left=w._convertPositionTo("relative",{top:0,left:t-w.helperProportions.width}).left-w.margins.left),x&&(B.position.left=w._convertPositionTo("relative",{top:0,left:A}).left-w.margins.left)),G=q||y||J||x,"outer"!==D.snapMode&&(q=E>=Math.abs(C-j),y=E>=Math.abs(H-I),J=E>=Math.abs(t-z),x=E>=Math.abs(A-K),q&&(B.position.top=w._convertPositionTo("relative",{top:C,left:0}).top-w.margins.top),y&&(B.position.top=w._convertPositionTo("relative",{top:H-w.helperProportions.height,left:0}).top-w.margins.top),J&&(B.position.left=w._convertPositionTo("relative",{top:0,left:t}).left-w.margins.left),x&&(B.position.left=w._convertPositionTo("relative",{top:0,left:A-w.helperProportions.width}).left-w.margins.left)),!w.snapElements[k].snapping&&(q||y||J||x||G)&&w.options.snap.snap&&w.options.snap.snap.call(w.element,F,a.extend(w._uiHash(),{snapItem:w.snapElements[k].item})),w.snapElements[k].snapping=q||y||J||x||G)}
}}),a.ui.plugin.add("draggable","stack",{start() {
  var d;
  var b=this.data("ui-draggable").options;
  var c=a.makeArray(a(b.stack)).sort((g, f) => (parseInt(a(g).css("zIndex"),10)||0)-(parseInt(a(f).css("zIndex"),10)||0));
  c.length&&(d=parseInt(a(c[0]).css("zIndex"),10)||0,a(c).each(function(e){a(this).css("zIndex",d+e)}),this.css("zIndex",d+c.length))
}}),a.ui.plugin.add("draggable","zIndex",{start(d, b) {
  var c=a(b.helper);
  var f=a(this).data("ui-draggable").options;
  c.css("zIndex")&&(f._zIndex=c.css("zIndex")),c.css("zIndex",f.zIndex)
},stop(d, b) {var c=a(this).data("ui-draggable").options;c._zIndex&&a(b.helper).css("zIndex",c._zIndex)}})}))(jQuery);((a => {function b(d,f,c){return d>f&&f+c>d}a.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create() {
  var f;
  var c=this.options;
  var d=c.accept;
  this.isover=!1,this.isout=!0,this.accept=a.isFunction(d)?d:e => e.is(d),this.proportions=function(...args) {return args.length?(f=args[0],undefined):f?f:f={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};},a.ui.ddmanager.droppables[c.scope]=a.ui.ddmanager.droppables[c.scope]||[],a.ui.ddmanager.droppables[c.scope].push(this),c.addClasses&&this.element.addClass("ui-droppable")
},_destroy() {for(var d=0,c=a.ui.ddmanager.droppables[this.options.scope];c.length>d;d++){c[d]===this&&c.splice(d,1)}this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption(d, c) {"accept"===d&&(this.accept=a.isFunction(c)?c:e => e.is(c)),a.Widget.prototype._setOption.apply(this,arguments)},_activate(d) {var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",d,this.ui(c))},_deactivate(d) {var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",d,this.ui(c))},_over(d) {var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",d,this.ui(c)))},_out(d) {var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",d,this.ui(c)))},_drop(f, c) {
  var d=c||a.ui.ddmanager.current;
  var g=!1;
  return d&&(d.currentItem||d.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var h=a.data(this,"ui-droppable");return h.options.greedy&&!h.options.disabled&&h.options.scope===d.options.scope&&h.accept.call(h.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(h,{offset:h.element.offset()}),h.options.tolerance)?(g=!0,!1):undefined}),g?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",f,this.ui(d)),this.element):!1):!1
},ui(c) {return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs}}}),a.ui.intersect=(z, m, A) => {
  if(!m.offset){return !1}
  var j;
  var x;
  var g=(z.positionAbs||z.position.absolute).left;
  var e=(z.positionAbs||z.position.absolute).top;
  var k=g+z.helperProportions.width;
  var q=e+z.helperProportions.height;
  var w=m.offset.left;
  var y=m.offset.top;
  var v=w+m.proportions().width;
  var f=y+m.proportions().height;
  switch(A){case"fit":return g>=w&&v>=k&&e>=y&&f>=q;case"intersect":return g+z.helperProportions.width/2>w&&v>k-z.helperProportions.width/2&&e+z.helperProportions.height/2>y&&f>q-z.helperProportions.height/2;case"pointer":return j=(z.positionAbs||z.position.absolute).left+(z.clickOffset||z.offset.click).left,x=(z.positionAbs||z.position.absolute).top+(z.clickOffset||z.offset.click).top,b(x,y,m.proportions().height)&&b(j,w,m.proportions().width);case"touch":return(e>=y&&f>=e||q>=y&&f>=q||y>e&&q>f)&&(g>=w&&v>=g||k>=w&&v>=k||w>g&&k>v);default:return !1}
},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets(h, d) {
  var f;
  var k;
  var c=a.ui.ddmanager.droppables[h.options.scope]||[];
  var j=d?d.type:null;
  var g=(h.currentItem||h.element).find(":data(ui-droppable)").addBack();
  a:for(f=0;c.length>f;f++){if(!(c[f].options.disabled||h&&!c[f].accept.call(c[f].element[0],h.currentItem||h.element))){for(k=0;g.length>k;k++){if(g[k]===c[f].element[0]){c[f].proportions().height=0;continue a}}c[f].visible="none"!==c[f].element.css("display"),c[f].visible&&("mousedown"===j&&c[f]._activate.call(c[f],d),c[f].offset=c[f].element.offset(),c[f].proportions({width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}))}}
},drop(f, c) {var d=!1;return a.each((a.ui.ddmanager.droppables[f.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(f,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],f.currentItem||f.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart(d, c) {d.element.parentsUntil("body").bind("scroll.droppable",() => {d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)})},drag(d, c) {d.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(d,c),a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){
  var f;
  var i;
  var e;
  var h=a.ui.intersect(d,this,this.options.tolerance);
  var g=!h&&this.isover?"isout":h&&!this.isover?"isover":null;
  g&&(this.options.greedy&&(i=this.options.scope,e=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===i}),e.length&&(f=a.data(e[0],"ui-droppable"),f.greedyChild="isover"===g)),f&&"isover"===g&&(f.isover=!1,f.isout=!0,f._out.call(f,c)),this[g]=!0,this["isout"===g?"isover":"isout"]=!1,this["isover"===g?"_over":"_out"].call(this,c),f&&"isout"===g&&(f.isout=!1,f.isover=!0,f._over.call(f,c)))
}})},dragStop(d, c) {d.element.parentsUntil("body").unbind("scroll.droppable"),d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)}}}))(jQuery);((b => {function c(d){return parseInt(d,10)||0}function a(d){return !isNaN(parseInt(d,10))}b.widget("ui.resizable",b.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create() {
  var j;
  var f;
  var g;
  var l;
  var d;
  var k=this;
  var h=this.options;
  if(this.element.addClass("ui-resizable"),b.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(b("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(b(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),j=this.handles.split(","),this.handles={},f=0;j.length>f;f++){g=b.trim(j[f]),d="ui-resizable-"+g,l=b("<div class='ui-resizable-handle "+d+"'></div>"),l.css({zIndex:h.zIndex}),"se"===g&&l.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[g]=".ui-resizable-"+g,this.element.append(l)}}this._renderAxis=function(q){
    var o;
    var p;
    var r;
    var m;
    q=q||this.element;for(o in this.handles){this.handles[o].constructor===String&&(this.handles[o]=b(this.handles[o],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(p=b(this.handles[o],this.element),m=/sw|ne|nw|se|n|s/.test(o)?p.outerHeight():p.outerWidth(),r=["padding",/ne|nw|n/.test(o)?"Top":/se|sw|s/.test(o)?"Bottom":/^e$/.test(o)?"Right":"Left"].join(""),q.css(r,m),this._proportionallyResize()),b(this.handles[o]).length}
  },this._renderAxis(this.element),this._handles=b(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){k.resizing||(this.className&&(l=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),k.axis=l&&l[1]?l[1]:"se")}),h.autoHide&&(this._handles.hide(),b(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(b(this).removeClass("ui-resizable-autohide"),k._handles.show())}).mouseleave(function(){h.disabled||k.resizing||(b(this).addClass("ui-resizable-autohide"),k._handles.hide())})),this._mouseInit()
},_destroy() {
  this._mouseDestroy();
  var f;
  var d=g => {b(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
  return this.elementIsWrapper&&(d(this.element),f=this.element,this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f),f.remove()),this.originalElement.css("resize",this.originalResizeStyle),d(this.originalElement),this
},_mouseCapture(g) {
  var d;
  var f;
  var h=!1;
  for(d in this.handles){f=b(this.handles[d])[0],(f===g.target||b.contains(f,g.target))&&(h=!0)}return !this.options.disabled&&h
},_mouseStart(e) {
  var g;
  var l;
  var d;
  var k=this.options;
  var j=this.element.position();
  var f=this.element;
  return this.resizing=!0,/absolute/.test(f.css("position"))?f.css({position:"absolute",top:f.css("top"),left:f.css("left")}):f.is(".ui-draggable")&&f.css({position:"absolute",top:j.top,left:j.left}),this._renderProxy(),g=c(this.helper.css("left")),l=c(this.helper.css("top")),k.containment&&(g+=b(k.containment).scrollLeft()||0,l+=b(k.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:l},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:l},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof k.aspectRatio?k.aspectRatio:this.originalSize.width/this.originalSize.height||1,d=b(".ui-resizable-"+this.axis).css("cursor"),b("body").css("cursor","auto"===d?this.axis+"-resize":d),f.addClass("ui-resizable-resizing"),this._propagate("start",e),!0
},_mouseDrag(v) {
  var q;
  var A=this.helper;
  var k={};
  var y=this.originalMousePosition;
  var j=this.axis;
  var f=this.position.top;
  var t=this.position.left;
  var m=this.size.width;
  var x=this.size.height;
  var z=v.pageX-y.left||0;
  var w=v.pageY-y.top||0;
  var g=this._change[j];
  return g?(q=g.apply(this,[v,z,w]),this._updateVirtualBoundaries(v.shiftKey),(this._aspectRatio||v.shiftKey)&&(q=this._updateRatio(q,v)),q=this._respectSize(q,v),this._updateCache(q),this._propagate("resize",v),this.position.top!==f&&(k.top=this.position.top+"px"),this.position.left!==t&&(k.left=this.position.left+"px"),this.size.width!==m&&(k.width=this.size.width+"px"),this.size.height!==x&&(k.height=this.size.height+"px"),A.css(k),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),b.isEmptyObject(k)||this._trigger("resize",v,this.ui()),!1):!1
},_mouseStop(p) {
  this.resizing=!1;
  var k;
  var u;
  var g;
  var t;
  var f;
  var d;
  var m;
  var j=this.options;
  var q=this;
  return this._helper&&(k=this._proportionallyResizeElements,u=k.length&&/textarea/i.test(k[0].nodeName),g=u&&b.ui.hasScroll(k[0],"left")?0:q.sizeDiff.height,t=u?0:q.sizeDiff.width,f={width:q.helper.width()-t,height:q.helper.height()-g},d=parseInt(q.element.css("left"),10)+(q.position.left-q.originalPosition.left)||null,m=parseInt(q.element.css("top"),10)+(q.position.top-q.originalPosition.top)||null,j.animate||this.element.css(b.extend(f,{top:m,left:d})),q.helper.height(q.size.height),q.helper.width(q.size.width),this._helper&&!j.animate&&this._proportionallyResize()),b("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",p),this._helper&&this.helper.remove(),!1
},_updateVirtualBoundaries(f) {
  var i;
  var g;
  var k;
  var d;
  var j;
  var h=this.options;
  j={minWidth:a(h.minWidth)?h.minWidth:0,maxWidth:a(h.maxWidth)?h.maxWidth:1/0,minHeight:a(h.minHeight)?h.minHeight:0,maxHeight:a(h.maxHeight)?h.maxHeight:1/0},(this._aspectRatio||f)&&(i=j.minHeight*this.aspectRatio,k=j.minWidth/this.aspectRatio,g=j.maxHeight*this.aspectRatio,d=j.maxWidth/this.aspectRatio,i>j.minWidth&&(j.minWidth=i),k>j.minHeight&&(j.minHeight=k),j.maxWidth>g&&(j.maxWidth=g),j.maxHeight>d&&(j.maxHeight=d)),this._vBoundaries=j
},_updateCache(d) {this.offset=this.helper.offset(),a(d.left)&&(this.position.left=d.left),a(d.top)&&(this.position.top=d.top),a(d.height)&&(this.size.height=d.height),a(d.width)&&(this.size.width=d.width)},_updateRatio(d) {
  var g=this.position;
  var f=this.size;
  var h=this.axis;
  return a(d.height)?d.width=d.height*this.aspectRatio:a(d.width)&&(d.height=d.width/this.aspectRatio),"sw"===h&&(d.left=g.left+(f.width-d.width),d.top=null),"nw"===h&&(d.top=g.top+(f.height-d.height),d.left=g.left+(f.width-d.width)),d
},_respectSize(v) {
  var k=this._vBoundaries;
  var w=this.axis;
  var g=a(v.width)&&k.maxWidth&&k.maxWidth<v.width;
  var p=a(v.height)&&k.maxHeight&&k.maxHeight<v.height;
  var f=a(v.width)&&k.minWidth&&k.minWidth>v.width;
  var d=a(v.height)&&k.minHeight&&k.minHeight>v.height;
  var j=this.originalPosition.left+this.originalSize.width;
  var i=this.position.top+this.size.height;
  var m=/sw|nw|w/.test(w);
  var q=/nw|ne|n/.test(w);
  return f&&(v.width=k.minWidth),d&&(v.height=k.minHeight),g&&(v.width=k.maxWidth),p&&(v.height=k.maxHeight),f&&m&&(v.left=j-k.minWidth),g&&m&&(v.left=j-k.maxWidth),d&&q&&(v.top=i-k.minHeight),p&&q&&(v.top=i-k.maxHeight),v.width||v.height||v.left||!v.top?v.width||v.height||v.top||!v.left||(v.left=null):v.top=null,v
},_proportionallyResize() {if(this._proportionallyResizeElements.length){
  var g;
  var j;
  var f;
  var h;
  var k;
  var d=this.helper||this.element;
  for(g=0;this._proportionallyResizeElements.length>g;g++){if(k=this._proportionallyResizeElements[g],!this.borderDif){for(this.borderDif=[],f=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")],h=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")],j=0;f.length>j;j++){this.borderDif[j]=(parseInt(f[j],10)||0)+(parseInt(h[j],10)||0)}}k.css({height:d.height()-this.borderDif[0]-this.borderDif[2]||0,width:d.width()-this.borderDif[1]-this.borderDif[3]||0})}
}},_renderProxy() {
  var f=this.element;
  var d=this.options;
  this.elementOffset=f.offset(),this._helper?(this.helper=this.helper||b("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++d.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e(d, f) {return{width:this.originalSize.width+f}},w(f, h) {
  var d=this.originalSize;
  var g=this.originalPosition;
  return{left:g.left+h,width:d.width-h}
},n(f, h, d) {
  var g=this.originalSize;
  var j=this.originalPosition;
  return{top:j.top+d,height:g.height-d}
},s(f, g, d) {return{height:this.originalSize.height+d}},se(g, d, f) {return b.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,d,f]))},sw(g, d, f) {return b.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,d,f]))},ne(g, d, f) {return b.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,d,f]))},nw(g, d, f) {return b.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,d,f]))}},_propagate(f, d) {b.ui.plugin.call(this,f,[d,this.ui()]),"resize"!==f&&this._trigger(f,d,this.ui())},plugins:{},ui() {return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),b.ui.plugin.add("resizable","animate",{stop(p) {
  var k=b(this).data("ui-resizable");
  var u=k.options;
  var g=k._proportionallyResizeElements;
  var t=g.length&&/textarea/i.test(g[0].nodeName);
  var f=t&&b.ui.hasScroll(g[0],"left")?0:k.sizeDiff.height;
  var d=t?0:k.sizeDiff.width;
  var m={width:k.size.width-d,height:k.size.height-f};
  var j=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null;
  var q=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null;
  k.element.animate(b.extend(m,q&&j?{top:q,left:j}:{}),{duration:u.animateDuration,easing:u.animateEasing,step() {var e={width:parseInt(k.element.css("width"),10),height:parseInt(k.element.css("height"),10),top:parseInt(k.element.css("top"),10),left:parseInt(k.element.css("left"),10)};g&&g.length&&b(g[0]).css({width:e.width,height:e.height}),k._updateCache(e),k._propagate("resize",p)}})
}}),b.ui.plugin.add("resizable","containment",{start() {
  var m;
  var y;
  var j;
  var w;
  var g;
  var e;
  var q;
  var k=b(this).data("ui-resizable");
  var v=k.options;
  var x=k.element;
  var t=v.containment;
  var f=t instanceof b?t.get(0):/parent/.test(t)?x.parent().get(0):t;
  f&&(k.containerElement=b(f),/document/.test(t)||t===document?(k.containerOffset={left:0,top:0},k.containerPosition={left:0,top:0},k.parentData={element:b(document),left:0,top:0,width:b(document).width(),height:b(document).height()||document.body.parentNode.scrollHeight}):(m=b(f),y=[],b(["Top","Right","Left","Bottom"]).each((d, h) => {y[d]=c(m.css("padding"+h))}),k.containerOffset=m.offset(),k.containerPosition=m.position(),k.containerSize={height:m.innerHeight()-y[3],width:m.innerWidth()-y[1]},j=k.containerOffset,w=k.containerSize.height,g=k.containerSize.width,e=b.ui.hasScroll(f,"left")?f.scrollWidth:g,q=b.ui.hasScroll(f)?f.scrollHeight:w,k.parentData={element:f,left:j.left,top:j.top,width:e,height:q}))
},resize(q) {
  var m;
  var y;
  var j;
  var w;
  var g=b(this).data("ui-resizable");
  var f=g.options;
  var p=g.containerOffset;
  var k=g.position;
  var v=g._aspectRatio||q.shiftKey;
  var x={top:0,left:0};
  var t=g.containerElement;
  t[0]!==document&&/static/.test(t.css("position"))&&(x=p),k.left<(g._helper?p.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-p.left:g.position.left-x.left),v&&(g.size.height=g.size.width/g.aspectRatio),g.position.left=f.helper?p.left:0),k.top<(g._helper?p.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-p.top:g.position.top),v&&(g.size.width=g.size.height*g.aspectRatio),g.position.top=g._helper?p.top:0),g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top,m=Math.abs((g._helper?g.offset.left-x.left:g.offset.left-x.left)+g.sizeDiff.width),y=Math.abs((g._helper?g.offset.top-x.top:g.offset.top-p.top)+g.sizeDiff.height),j=g.containerElement.get(0)===g.element.parent().get(0),w=/relative|absolute/.test(g.containerElement.css("position")),j&&w&&(m-=Math.abs(g.parentData.left)),m+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-m,v&&(g.size.height=g.size.width/g.aspectRatio)),y+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-y,v&&(g.size.width=g.size.height*g.aspectRatio))
},stop() {
  var p=b(this).data("ui-resizable");
  var k=p.options;
  var t=p.containerOffset;
  var g=p.containerPosition;
  var q=p.containerElement;
  var f=b(p.helper);
  var d=f.offset();
  var m=f.outerWidth()-p.sizeDiff.width;
  var j=f.outerHeight()-p.sizeDiff.height;
  p._helper&&!k.animate&&/relative/.test(q.css("position"))&&b(this).css({left:d.left-g.left-t.left,width:m,height:j}),p._helper&&!k.animate&&/static/.test(q.css("position"))&&b(this).css({left:d.left-g.left-t.left,width:m,height:j})
}}),b.ui.plugin.add("resizable","alsoResize",{start() {
  var g=b(this).data("ui-resizable");
  var d=g.options;
  var f=h => {b(h).each(function(){var i=b(this);i.data("ui-resizable-alsoresize",{width:parseInt(i.width(),10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10)})})};
  "object"!=typeof d.alsoResize||d.alsoResize.parentNode?f(d.alsoResize):d.alsoResize.length?(d.alsoResize=d.alsoResize[0],f(d.alsoResize)):b.each(d.alsoResize,e => {f(e)})
},resize(l, f) {
  var j=b(this).data("ui-resizable");
  var p=j.options;
  var d=j.originalSize;
  var m=j.originalPosition;
  var k={height:j.size.height-d.height||0,width:j.size.width-d.width||0,top:j.position.top-m.top||0,left:j.position.left-m.left||0};
  var g=(i, h) => {b(i).each(function(){var r=b(this),t=b(this).data("ui-resizable-alsoresize"),q={},s=h&&h.length?h:r.parents(f.originalElement[0]).length?["width","height"]:["width","height","top","left"];b.each(s,(o, u) => {var n=(t[u]||0)+(k[u]||0);n&&n>=0&&(q[u]=n||null)}),r.css(q)})};
  "object"!=typeof p.alsoResize||p.alsoResize.nodeType?g(p.alsoResize):b.each(p.alsoResize,(h, i) => {g(h,i)})
},stop() {b(this).removeData("resizable-alsoresize")}}),b.ui.plugin.add("resizable","ghost",{start() {
  var g=b(this).data("ui-resizable");
  var d=g.options;
  var f=g.size;
  g.ghost=g.originalElement.clone(),g.ghost.css({opacity:0.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof d.ghost?d.ghost:""),g.ghost.appendTo(g.helper)
},resize() {var d=b(this).data("ui-resizable");d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop() {var d=b(this).data("ui-resizable");d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),b.ui.plugin.add("resizable","grid",{resize() {
  var C=b(this).data("ui-resizable");
  var y=C.options;
  var I=C.size;
  var t=C.originalSize;
  var F=C.originalPosition;
  var q=C.axis;
  var j="number"==typeof y.grid?[y.grid,y.grid]:y.grid;
  var z=j[0]||1;
  var x=j[1]||1;
  var E=Math.round((I.width-t.width)/z)*z;
  var H=Math.round((I.height-t.height)/x)*x;
  var D=t.width+E;
  var k=t.height+H;
  var B=y.maxWidth&&D>y.maxWidth;
  var A=y.maxHeight&&k>y.maxHeight;
  var w=y.minWidth&&y.minWidth>D;
  var G=y.minHeight&&y.minHeight>k;
  y.grid=j,w&&(D+=z),G&&(k+=x),B&&(D-=z),A&&(k-=x),/^(se|s|e)$/.test(q)?(C.size.width=D,C.size.height=k):/^(ne)$/.test(q)?(C.size.width=D,C.size.height=k,C.position.top=F.top-H):/^(sw)$/.test(q)?(C.size.width=D,C.size.height=k,C.position.left=F.left-E):(k-x>0?(C.size.height=k,C.position.top=F.top-H):(C.size.height=x,C.position.top=F.top+t.height-x),D-z>0?(C.size.width=D,C.position.left=F.left-E):(C.size.width=z,C.position.left=F.left+t.width-z))
}})}))(jQuery);((a => {a.widget("ui.selectable",a.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create() {
  var c;
  var b=this;
  this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=() => {c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){
    var f=a(this);
    var d=f.offset();
    a.data(this,"selectable-item",{element:this,$element:f,left:d.left,top:d.top,right:d.left+f.outerWidth(),bottom:d.top+f.outerHeight(),startselected:!1,selected:f.hasClass("ui-selected"),selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})
  })},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")
},_destroy() {this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart(d) {
  var b=this;
  var c=this.options;
  this.opos=[d.pageX,d.pageY],this.options.disabled||(this.selectees=a(c.filter,this.element[0]),this._trigger("start",d),a(c.appendTo).append(this.helper),this.helper.css({left:d.pageX,top:d.pageY,width:0,height:0}),c.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var e=a.data(this,"selectable-item");e.startselected=!0,d.metaKey||d.ctrlKey||(e.$element.removeClass("ui-selected"),e.selected=!1,e.$element.addClass("ui-unselecting"),e.unselecting=!0,b._trigger("unselecting",d,{unselecting:e.element}))}),a(d.target).parents().addBack().each(function(){
    var e;
    var f=a.data(this,"selectable-item");
    return f?(e=!d.metaKey&&!d.ctrlKey||!f.$element.hasClass("ui-selected"),f.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),f.unselecting=!e,f.selecting=e,f.selected=e,e?b._trigger("selecting",d,{selecting:f.element}):b._trigger("unselecting",d,{unselecting:f.element}),!1):undefined
  }))
},_mouseDrag(h) {if(this.dragged=!0,!this.options.disabled){
  var d;
  var f=this;
  var k=this.options;
  var c=this.opos[0];
  var j=this.opos[1];
  var g=h.pageX;
  var b=h.pageY;
  return c>g&&(d=g,g=c,c=d),j>b&&(d=b,b=j,j=d),this.helper.css({left:c,top:j,width:g-c,height:b-j}),this.selectees.each(function(){
    var e=a.data(this,"selectable-item");
    var l=!1;
    e&&e.element!==f.element[0]&&("touch"===k.tolerance?l=!(e.left>g||c>e.right||e.top>b||j>e.bottom):"fit"===k.tolerance&&(l=e.left>c&&g>e.right&&e.top>j&&b>e.bottom),l?(e.selected&&(e.$element.removeClass("ui-selected"),e.selected=!1),e.unselecting&&(e.$element.removeClass("ui-unselecting"),e.unselecting=!1),e.selecting||(e.$element.addClass("ui-selecting"),e.selecting=!0,f._trigger("selecting",h,{selecting:e.element}))):(e.selecting&&((h.metaKey||h.ctrlKey)&&e.startselected?(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.$element.addClass("ui-selected"),e.selected=!0):(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.startselected&&(e.$element.addClass("ui-unselecting"),e.unselecting=!0),f._trigger("unselecting",h,{unselecting:e.element}))),e.selected&&(h.metaKey||h.ctrlKey||e.startselected||(e.$element.removeClass("ui-selected"),e.selected=!1,e.$element.addClass("ui-unselecting"),e.unselecting=!0,f._trigger("unselecting",h,{unselecting:e.element})))))
  }),!1;
}},_mouseStop(c) {var b=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,b._trigger("unselected",c,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,b._trigger("selected",c,{selected:d.element})}),this._trigger("stop",c),this.helper.remove(),!1}})}))(jQuery);((b => {function c(f,g,d){return f>g&&g+d>f}function a(d){return/left|right/.test(d.css("float"))||/inline|table-cell/.test(d.css("display"))}b.widget("ui.sortable",b.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create() {var d=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===d.axis||a(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy() {this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--){this.items[d].item.removeData(this.widgetName+"-item")}return this},_setOption(f, d) {"disabled"===f?(this.options[f]=d,this.widget().toggleClass("ui-sortable-disabled",!!d)):b.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture(g, d) {
  var f=null;
  var j=!1;
  var h=this;
  return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(g),b(g.target).parents().each(function(){return b.data(this,h.widgetName+"-item")===h?(f=b(this),!1):undefined}),b.data(g.target,h.widgetName+"-item")===h&&(f=b(g.target)),f?!this.options.handle||d||(b(this.options.handle,f).find("*").addBack().each(function(){this===g.target&&(j=!0)}),j)?(this.currentItem=f,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart(h, f, g) {
  var k;
  var j;
  var d=this.options;
  if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(h),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},b.extend(this.offset,{click:{left:h.pageX-this.offset.left,top:h.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(h),this.originalPageX=h.pageX,this.originalPageY=h.pageY,d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),d.containment&&this._setContainment(),d.cursor&&"auto"!==d.cursor&&(j=this.document.find("body"),this.storedCursor=j.css("cursor"),j.css("cursor",d.cursor),this.storedStylesheet=b("<style>*{ cursor: "+d.cursor+" !important; }</style>").appendTo(j)),d.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",d.opacity)),d.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",d.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",h,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!g){for(k=this.containers.length-1;k>=0;k--){this.containers[k]._trigger("activate",h,this._uiHash(this))}}return b.ui.ddmanager&&(b.ui.ddmanager.current=this),b.ui.ddmanager&&!d.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,h),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(h),!0
},_mouseDrag(j) {
  var f;
  var g;
  var l;
  var k;
  var d=this.options;
  var h=!1;
  for(this.position=this._generatePosition(j),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-j.pageY<d.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+d.scrollSpeed:j.pageY-this.overflowOffset.top<d.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-d.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-j.pageX<d.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+d.scrollSpeed:j.pageX-this.overflowOffset.left<d.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-d.scrollSpeed)):(j.pageY-b(document).scrollTop()<d.scrollSensitivity?h=b(document).scrollTop(b(document).scrollTop()-d.scrollSpeed):b(window).height()-(j.pageY-b(document).scrollTop())<d.scrollSensitivity&&(h=b(document).scrollTop(b(document).scrollTop()+d.scrollSpeed)),j.pageX-b(document).scrollLeft()<d.scrollSensitivity?h=b(document).scrollLeft(b(document).scrollLeft()-d.scrollSpeed):b(window).width()-(j.pageX-b(document).scrollLeft())<d.scrollSensitivity&&(h=b(document).scrollLeft(b(document).scrollLeft()+d.scrollSpeed))),h!==!1&&b.ui.ddmanager&&!d.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,j)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),f=this.items.length-1;f>=0;f--){if(g=this.items[f],l=g.item[0],k=this._intersectsWithPointer(g),k&&g.instance===this.currentContainer&&l!==this.currentItem[0]&&this.placeholder[1===k?"next":"prev"]()[0]!==l&&!b.contains(this.placeholder[0],l)&&("semi-dynamic"===this.options.type?!b.contains(this.element[0],l):!0)){if(this.direction=1===k?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(g)){break}this._rearrange(j,g),this._trigger("change",j,this._uiHash());break}}return this._contactContainers(j),b.ui.ddmanager&&b.ui.ddmanager.drag(this,j),this._trigger("sort",j,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop(h, f) {if(h){if(b.ui.ddmanager&&!this.options.dropBehaviour&&b.ui.ddmanager.drop(this,h),this.options.revert){
  var g=this;
  var k=this.placeholder.offset();
  var j=this.options.axis;
  var d={};
  j&&"x"!==j||(d.left=k.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),j&&"y"!==j||(d.top=k.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,b(this.helper).animate(d,parseInt(this.options.revert,10)||500,() => {g._clear(h)})
}else{this._clear(h,f)}return !1}},cancel() {if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("deactivate",null,this._uiHash(this)),this.containers[d].containerCache.over&&(this.containers[d]._trigger("out",null,this._uiHash(this)),this.containers[d].containerCache.over=0)}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),b.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?b(this.domPosition.prev).after(this.currentItem):b(this.domPosition.parent).prepend(this.currentItem)),this},serialize(g) {
  var d=this._getItemsAsjQuery(g&&g.connected);
  var f=[];
  return g=g||{},b(d).each(function(){var e=(b(g.item||this).attr(g.attribute||"id")||"").match(g.expression||/(.+)[\-=_](.+)/);e&&f.push((g.key||e[1]+"[]")+"="+(g.key&&g.expression?e[1]:e[2]))}),!f.length&&g.key&&f.push(g.key+"="),f.join("&")
},toArray(g) {
  var d=this._getItemsAsjQuery(g&&g.connected);
  var f=[];
  return g=g||{},d.each(function(){f.push(b(g.item||this).attr(g.attribute||"id")||"")}),f
},_intersectsWith(B) {
  var w=this.positionAbs.left;
  var q=w+this.helperProportions.width;
  var C=this.positionAbs.top;
  var k=C+this.helperProportions.height;
  var j=B.left;
  var z=j+B.width;
  var f=B.top;
  var v=f+B.height;
  var m=this.offset.click.top;
  var y=this.offset.click.left;
  var A="x"===this.options.axis||C+m>f&&v>C+m;
  var x="y"===this.options.axis||w+y>j&&z>w+y;
  var g=A&&x;
  return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>B[this.floating?"width":"height"]?g:w+this.helperProportions.width/2>j&&z>q-this.helperProportions.width/2&&C+this.helperProportions.height/2>f&&v>k-this.helperProportions.height/2
},_intersectsWithPointer(f) {
  var e="x"===this.options.axis||c(this.positionAbs.top+this.offset.click.top,f.top,f.height);
  var g="y"===this.options.axis||c(this.positionAbs.left+this.offset.click.left,f.left,f.width);
  var j=e&&g;
  var h=this._getDragVerticalDirection();
  var d=this._getDragHorizontalDirection();
  return j?this.floating?d&&"right"===d||"down"===h?2:1:h&&("down"===h?2:1):!1
},_intersectsWithSides(e) {
  var d=c(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height);
  var f=c(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width);
  var h=this._getDragVerticalDirection();
  var g=this._getDragHorizontalDirection();
  return this.floating&&g?"right"===g&&f||"left"===g&&!f:h&&("down"===h&&d||"up"===h&&!d)
},_getDragVerticalDirection() {var d=this.positionAbs.top-this.lastPositionAbs.top;return 0!==d&&(d>0?"down":"up")},_getDragHorizontalDirection() {var d=this.positionAbs.left-this.lastPositionAbs.left;return 0!==d&&(d>0?"right":"left")},refresh(d) {return this._refreshItems(d),this.refreshPositions(),this},_connectWith() {var d=this.options;return d.connectWith.constructor===String?[d.connectWith]:d.connectWith},_getItemsAsjQuery(p) {
  function k(){d.push(this)}
  var t;
  var g;
  var f;
  var q;
  var d=[];
  var m=[];
  var j=this._connectWith();
  if(j&&p){for(t=j.length-1;t>=0;t--){for(f=b(j[t]),g=f.length-1;g>=0;g--){q=b.data(f[g],this.widgetFullName),q&&q!==this&&!q.options.disabled&&m.push([b.isFunction(q.options.items)?q.options.items.call(q.element):b(q.options.items,q.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),q])}}}for(m.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),t=m.length-1;t>=0;t--){m[t][0].each(k)}return b(d)
},_removeCurrentsFromItems() {var d=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=b.grep(this.items,f => {for(var e=0;d.length>e;e++){if(d[e]===f.item[0]){return !1}}return !0})},_refreshItems(q) {
  this.items=[],this.containers=[this];
  var m;
  var y;
  var j;
  var g;
  var w;
  var f;
  var p;
  var k;
  var v=this.items;
  var x=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],q,{item:this.currentItem}):b(this.options.items,this.element),this]];
  var t=this._connectWith();
  if(t&&this.ready){for(m=t.length-1;m>=0;m--){for(j=b(t[m]),y=j.length-1;y>=0;y--){g=b.data(j[y],this.widgetFullName),g&&g!==this&&!g.options.disabled&&(x.push([b.isFunction(g.options.items)?g.options.items.call(g.element[0],q,{item:this.currentItem}):b(g.options.items,g.element),g]),this.containers.push(g))}}}for(m=x.length-1;m>=0;m--){for(w=x[m][1],f=x[m][0],y=0,k=f.length;k>y;y++){p=b(f[y]),p.data(this.widgetName+"-item",w),v.push({item:p,instance:w,width:0,height:0,left:0,top:0})}}
},refreshPositions(g) {
  this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
  var d;
  var f;
  var j;
  var h;
  for(d=this.items.length-1;d>=0;d--){f=this.items[d],f.instance!==this.currentContainer&&this.currentContainer&&f.item[0]!==this.currentItem[0]||(j=this.options.toleranceElement?b(this.options.toleranceElement,f.item):f.item,g||(f.width=j.outerWidth(),f.height=j.outerHeight()),h=j.offset(),f.left=h.left,f.top=h.top)}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(d=this.containers.length-1;d>=0;d--){h=this.containers[d].element.offset(),this.containers[d].containerCache.left=h.left,this.containers[d].containerCache.top=h.top,this.containers[d].containerCache.width=this.containers[d].element.outerWidth(),this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}return this
},_createPlaceholder(g) {
  g=g||this;
  var d;
  var f=g.options;
  f.placeholder&&f.placeholder.constructor!==String||(d=f.placeholder,f.placeholder={element() {
    var e=g.currentItem[0].nodeName.toLowerCase();
    var h=b("<"+e+">",g.document[0]).addClass(d||g.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
    return"tr"===e?g.currentItem.children().each(function(){b("<td>&#160;</td>",g.document[0]).attr("colspan",b(this).attr("colspan")||1).appendTo(h)}):"img"===e&&h.attr("src",g.currentItem.attr("src")),d||h.css("visibility","hidden"),h
  },update(e, h) {(!d||f.forcePlaceholderSize)&&(h.height()||h.height(g.currentItem.innerHeight()-parseInt(g.currentItem.css("paddingTop")||0,10)-parseInt(g.currentItem.css("paddingBottom")||0,10)),h.width()||h.width(g.currentItem.innerWidth()-parseInt(g.currentItem.css("paddingLeft")||0,10)-parseInt(g.currentItem.css("paddingRight")||0,10)))}}),g.placeholder=b(f.placeholder.element.call(g.element,g.currentItem)),g.currentItem.after(g.placeholder),f.placeholder.update(g,g.placeholder)
},_contactContainers(A) {
  var k;
  var j;
  var y;
  var e;
  var q;
  var m;
  var x;
  var z;
  var w;
  var i;
  var v=null;
  var t=null;
  for(k=this.containers.length-1;k>=0;k--){if(!b.contains(this.currentItem[0],this.containers[k].element[0])){if(this._intersectsWith(this.containers[k].containerCache)){if(v&&b.contains(this.containers[k].element[0],v.element[0])){continue}v=this.containers[k],t=k}else{this.containers[k].containerCache.over&&(this.containers[k]._trigger("out",A,this._uiHash(this)),this.containers[k].containerCache.over=0)}}}if(v){if(1===this.containers.length){this.containers[t].containerCache.over||(this.containers[t]._trigger("over",A,this._uiHash(this)),this.containers[t].containerCache.over=1)}else{for(y=10000,e=null,i=v.floating||a(this.currentItem),q=i?"left":"top",m=i?"width":"height",x=this.positionAbs[q]+this.offset.click[q],j=this.items.length-1;j>=0;j--){b.contains(this.containers[t].element[0],this.items[j].item[0])&&this.items[j].item[0]!==this.currentItem[0]&&(!i||c(this.positionAbs.top+this.offset.click.top,this.items[j].top,this.items[j].height))&&(z=this.items[j].item.offset()[q],w=!1,Math.abs(z-x)>Math.abs(z+this.items[j][m]-x)&&(w=!0,z+=this.items[j][m]),y>Math.abs(z-x)&&(y=Math.abs(z-x),e=this.items[j],this.direction=w?"up":"down"))}if(!e&&!this.options.dropOnEmpty){return}if(this.currentContainer===this.containers[t]){return}e?this._rearrange(A,e,null,!0):this._rearrange(A,null,this.containers[t].element,!0),this._trigger("change",A,this._uiHash()),this.containers[t]._trigger("change",A,this._uiHash(this)),this.currentContainer=this.containers[t],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[t]._trigger("over",A,this._uiHash(this)),this.containers[t].containerCache.over=1}}
},_createHelper(g) {
  var d=this.options;
  var f=b.isFunction(d.helper)?b(d.helper.apply(this.element[0],[g,this.currentItem])):"clone"===d.helper?this.currentItem.clone():this.currentItem;
  return f.parents("body").length||b("parent"!==d.appendTo?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(f[0]),f[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!f[0].style.width||d.forceHelperSize)&&f.width(this.currentItem.width()),(!f[0].style.height||d.forceHelperSize)&&f.height(this.currentItem.height()),f
},_adjustOffsetFromHelper(d) {"string"==typeof d&&(d=d.split(" ")),b.isArray(d)&&(d={left:+d[0],top:+d[1]||0}),"left" in d&&(this.offset.click.left=d.left+this.margins.left),"right" in d&&(this.offset.click.left=this.helperProportions.width-d.right+this.margins.left),"top" in d&&(this.offset.click.top=d.top+this.margins.top),"bottom" in d&&(this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top)},_getParentOffset() {this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])&&(d.left+=this.scrollParent.scrollLeft(),d.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&b.ui.ie)&&(d={top:0,left:0}),{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset() {if("relative"===this.cssPosition){var d=this.currentItem.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins() {this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions() {this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment() {
  var g;
  var d;
  var f;
  var h=this.options;
  "parent"===h.containment&&(h.containment=this.helper[0].parentNode),("document"===h.containment||"window"===h.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b("document"===h.containment?document:window).width()-this.helperProportions.width-this.margins.left,(b("document"===h.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(h.containment)||(g=b(h.containment)[0],d=b(h.containment).offset(),f="hidden"!==b(g).css("overflow"),this.containment=[d.left+(parseInt(b(g).css("borderLeftWidth"),10)||0)+(parseInt(b(g).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(b(g).css("borderTopWidth"),10)||0)+(parseInt(b(g).css("paddingTop"),10)||0)-this.margins.top,d.left+(f?Math.max(g.scrollWidth,g.offsetWidth):g.offsetWidth)-(parseInt(b(g).css("borderLeftWidth"),10)||0)-(parseInt(b(g).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(f?Math.max(g.scrollHeight,g.offsetHeight):g.offsetHeight)-(parseInt(b(g).css("borderTopWidth"),10)||0)-(parseInt(b(g).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo(g, d) {
  d||(d=this.position);
  var f="absolute"===g?1:-1;
  var j="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var h=/(html|body)/i.test(j[0].tagName);
  return{top:d.top+this.offset.relative.top*f+this.offset.parent.top*f-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:j.scrollTop())*f,left:d.left+this.offset.relative.left*f+this.offset.parent.left*f-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:j.scrollLeft())*f}
},_generatePosition(l) {
  var f;
  var j;
  var p=this.options;
  var m=l.pageX;
  var d=l.pageY;
  var k="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var g=/(html|body)/i.test(k[0].tagName);
  return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(l.pageX-this.offset.click.left<this.containment[0]&&(m=this.containment[0]+this.offset.click.left),l.pageY-this.offset.click.top<this.containment[1]&&(d=this.containment[1]+this.offset.click.top),l.pageX-this.offset.click.left>this.containment[2]&&(m=this.containment[2]+this.offset.click.left),l.pageY-this.offset.click.top>this.containment[3]&&(d=this.containment[3]+this.offset.click.top)),p.grid&&(f=this.originalPageY+Math.round((d-this.originalPageY)/p.grid[1])*p.grid[1],d=this.containment?f-this.offset.click.top>=this.containment[1]&&f-this.offset.click.top<=this.containment[3]?f:f-this.offset.click.top>=this.containment[1]?f-p.grid[1]:f+p.grid[1]:f,j=this.originalPageX+Math.round((m-this.originalPageX)/p.grid[0])*p.grid[0],m=this.containment?j-this.offset.click.left>=this.containment[0]&&j-this.offset.click.left<=this.containment[2]?j:j-this.offset.click.left>=this.containment[0]?j-p.grid[0]:j+p.grid[0]:j)),{top:d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():g?0:k.scrollTop()),left:m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():g?0:k.scrollLeft())}
},_rearrange(f, h, d, g) {d?d[0].appendChild(this.placeholder[0]):h.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?h.item[0]:h.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var j=this.counter;this._delay(function(){j===this.counter&&this.refreshPositions(!g)})},_clear(f, h) {
  function d(l,m,k){return e => {k._trigger(l,e,m._uiHash(m))};}this.reverting=!1;
  var g;
  var j=[];
  if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(g in this._storedCSS){("auto"===this._storedCSS[g]||"static"===this._storedCSS[g])&&(this._storedCSS[g]="")}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(this.fromOutside&&!h&&j.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||h||j.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(h||(j.push(function(e){this._trigger("remove",e,this._uiHash())}),j.push((e => function(i){e._trigger("receive",i,this._uiHash(this))}).call(this,this.currentContainer)),j.push((e => function(i){e._trigger("update",i,this._uiHash(this))}).call(this,this.currentContainer)))),g=this.containers.length-1;g>=0;g--){h||j.push(d("deactivate",this,this.containers[g])),this.containers[g].containerCache.over&&(j.push(d("out",this,this.containers[g])),this.containers[g].containerCache.over=0)}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!h){for(this._trigger("beforeStop",f,this._uiHash()),g=0;j.length>g;g++){j[g].call(this,f)}this._trigger("stop",f,this._uiHash())}return this.fromOutside=!1,!1}if(h||this._trigger("beforeStop",f,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!h){for(g=0;j.length>g;g++){j[g].call(this,f)}this._trigger("stop",f,this._uiHash())}return this.fromOutside=!1,!0
},_trigger(...args) {b.Widget.prototype._trigger.apply(this,args)===!1&&this.cancel()},_uiHash(f) {var d=f||this;return{helper:d.helper,placeholder:d.placeholder||b([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:f?f.element:null}}})}))(jQuery);((f => {
  var d=0;
  var c={};
  var b={};
  c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide",b.height=b.paddingTop=b.paddingBottom=b.borderTopWidth=b.borderBottomWidth="show",f.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create() {var a=this.options;this.prevShow=this.prevHide=f(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),a.collapsible||a.active!==!1&&null!=a.active||(a.active=0),this._processPanels(),0>a.active&&(a.active+=this.headers.length),this._refresh()},_getCreateEventData() {return{header:this.active,panel:this.active.length?this.active.next():f(),content:this.active.length?this.active.next():f()}},_createIcons() {var a=this.options.icons;a&&(f("<span>").addClass("ui-accordion-header-icon ui-icon "+a.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons() {this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy() {var a;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&a.css("height","")},_setOption(g, a) {return"active"===g?(this._activate(a),undefined):("event"===g&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(a)),this._super(g,a),"collapsible"!==g||a||this.options.active!==!1||this._activate(0),"icons"===g&&(this._destroyIcons(),a&&this._createIcons()),"disabled"===g&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!a),undefined)},_keydown(h) {if(!h.altKey&&!h.ctrlKey){
    var g=f.ui.keyCode;
    var e=this.headers.length;
    var j=this.headers.index(h.target);
    var k=!1;
    switch(h.keyCode){case g.RIGHT:case g.DOWN:k=this.headers[(j+1)%e];break;case g.LEFT:case g.UP:k=this.headers[(j-1+e)%e];break;case g.SPACE:case g.ENTER:this._eventHandler(h);break;case g.HOME:k=this.headers[0];break;case g.END:k=this.headers[e-1]}k&&(f(h.target).attr("tabIndex",-1),f(k).attr("tabIndex",0),k.focus(),h.preventDefault())
  }},_panelKeyDown(a) {a.keyCode===f.ui.keyCode.UP&&a.ctrlKey&&f(a.currentTarget).prev().focus()},refresh() {var a=this.options;this._processPanels(),a.active===!1&&a.collapsible===!0||!this.headers.length?(a.active=!1,this.active=f()):a.active===!1?this._activate(0):this.active.length&&!f.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=f()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels() {this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh() {
    var g;
    var e=this.options;
    var h=e.heightStyle;
    var k=this.element.parent();
    var j=this.accordionId="ui-accordion-"+(this.element.attr("id")||++d);
    this.active=this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(o){
      var m=f(this);
      var l=m.attr("id");
      var p=m.next();
      var q=p.attr("id");
      l||(l=j+"-header-"+o,m.attr("id",l)),q||(q=j+"-panel-"+o,p.attr("id",q)),m.attr("aria-controls",q),p.attr("aria-labelledby",l)
    }).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(e.event),"fill"===h?(g=k.height(),this.element.siblings(":visible").each(function(){
      var l=f(this);
      var i=l.css("position");
      "absolute"!==i&&"fixed"!==i&&(g-=l.outerHeight(!0))
    }),this.headers.each(function(){g-=f(this).outerHeight(!0)}),this.headers.next().each(function(){f(this).height(Math.max(0,g-f(this).innerHeight()+f(this).height()))}).css("overflow","auto")):"auto"===h&&(g=0,this.headers.next().each(function(){g=Math.max(g,f(this).css("height","").height())}).height(g))
  },_activate(e) {var a=this._findActive(e)[0];a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:f.noop}))},_findActive(a) {return"number"==typeof a?this.headers.eq(a):f()},_setupEvents(e) {var a={keydown:"_keydown"};e&&f.each(e.split(" "),(h, g) => {a[g]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,a),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler(q) {
    var k=this.options;
    var p=this.active;
    var u=f(q.currentTarget);
    var j=u[0]===p[0];
    var e=j&&k.collapsible;
    var g=e?f():u.next();
    var l=p.next();
    var m={oldHeader:p,oldPanel:l,newHeader:e?f():u,newPanel:g};
    q.preventDefault(),j&&!k.collapsible||this._trigger("beforeActivate",q,m)===!1||(k.active=e?!1:this.headers.index(u),this.active=j?f():u,this._toggle(m),p.removeClass("ui-accordion-header-active ui-state-active"),k.icons&&p.children(".ui-accordion-header-icon").removeClass(k.icons.activeHeader).addClass(k.icons.header),j||(u.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),k.icons&&u.children(".ui-accordion-header-icon").removeClass(k.icons.header).addClass(k.icons.activeHeader),u.next().addClass("ui-accordion-content-active")))
  },_toggle(h) {
    var g=h.newPanel;
    var e=this.prevShow.length?this.prevShow:h.oldPanel;
    this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=g,this.prevHide=e,this.options.animate?this._animate(g,e,h):(e.hide(),g.show(),this._toggleComplete(h)),e.attr({"aria-hidden":"true"}),e.prev().attr("aria-selected","false"),g.length&&e.length?e.prev().attr({tabIndex:-1,"aria-expanded":"false"}):g.length&&this.headers.filter(function(){return 0===f(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})
  },_animate(m, y, z) {
    var i;
    var a;
    var g;
    var k=this;
    var p=0;
    var q=m.length&&(!y.length||m.index()<y.index());
    var j=this.options.animate||{};
    var x=q&&j.down||j;
    var w=() => {k._toggleComplete(z)};
    return "number"==typeof x&&(g=x),"string"==typeof x&&(a=x),a=a||x.easing||j.easing,g=g||x.duration||j.duration,y.length?m.length?(i=m.show().outerHeight(),y.animate(c,{duration:g,easing:a,step(l, h) {h.now=Math.round(l)}}),m.hide().animate(b,{duration:g,easing:a,complete:w,step(l, h) {h.now=Math.round(l),"height"!==h.prop?p+=h.now:"content"!==k.options.heightStyle&&(h.now=Math.round(i-y.outerHeight()-p),p=0)}}),undefined):y.animate(c,g,a,w):m.animate(b,g,a,w);
  },_toggleComplete(g) {var a=g.oldPanel;a.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),a.length&&(a.parent()[0].className=a.parent()[0].className),this._trigger("activate",null,g)}})
}))(jQuery);((a => {a.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create() {
  var d;
  var c;
  var e;
  var g=this.element[0].nodeName.toLowerCase();
  var b="textarea"===g;
  var f="input"===g;
  this.isMultiLine=b?!0:f?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[b||f?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown(i) {if(this.element.prop("readOnly")){return d=!0,e=!0,c=!0,undefined}d=!1,e=!1,c=!1;var h=a.ui.keyCode;switch(i.keyCode){case h.PAGE_UP:d=!0,this._move("previousPage",i);break;case h.PAGE_DOWN:d=!0,this._move("nextPage",i);break;case h.UP:d=!0,this._keyEvent("previous",i);break;case h.DOWN:d=!0,this._keyEvent("next",i);break;case h.ENTER:case h.NUMPAD_ENTER:this.menu.active&&(d=!0,i.preventDefault(),this.menu.select(i));break;case h.TAB:this.menu.active&&this.menu.select(i);break;case h.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:c=!0,this._searchTimeout(i)}},keypress(h) {if(d){return d=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&h.preventDefault(),undefined}if(!c){var i=a.ui.keyCode;switch(h.keyCode){case i.PAGE_UP:this._move("previousPage",h);break;case i.PAGE_DOWN:this._move("nextPage",h);break;case i.UP:this._keyEvent("previous",h);break;case i.DOWN:this._keyEvent("next",h)}}},input(h) {return e?(e=!1,h.preventDefault(),undefined):(this._searchTimeout(h),undefined)},focus() {this.selectedItem=null,this.previous=this._value()},blur(h) {return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(h),this._change(h),undefined)}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown(j) {j.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var h=this.menu.element[0];a(j.target).closest(".ui-menu-item").length||this._delay(function(){var i=this;this.document.one("mousedown",k => {k.target===i.element[0]||k.target===h||a.contains(h,k.target)||i.close()})})},menufocus(j, h) {if(this.isNewMenu&&(this.isNewMenu=!1,j.originalEvent&&/^mouse/.test(j.originalEvent.type))){return this.menu.blur(),this.document.one("mousemove",() => {a(j.target).trigger(j.originalEvent)}),undefined;}var k=h.item.data("ui-autocomplete-item");!1!==this._trigger("focus",j,{item:k})?j.originalEvent&&/^key/.test(j.originalEvent.type)&&this._value(k.value):this.liveRegion.text(k.value)},menuselect(l, j) {
    var h=j.item.data("ui-autocomplete-item");
    var k=this.previous;
    this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=k,this._delay(function(){this.previous=k,this.selectedItem=h})),!1!==this._trigger("select",l,{item:h})&&this._value(h.value),this.term=this._value(),this.close(l),this.selectedItem=h
  }}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload() {this.element.removeAttr("autocomplete")}})
},_destroy() {clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption(c, b) {this._super(c,b),"source"===c&&this._initSource(),"appendTo"===c&&this.menu.element.appendTo(this._appendTo()),"disabled"===c&&b&&this.xhr&&this.xhr.abort()},_appendTo() {var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b},_initSource() {
  var c;
  var b;
  var d=this;
  a.isArray(this.options.source)?(c=this.options.source,this.source=(e, f) => {f(a.ui.autocomplete.filter(c,e.term))}):"string"==typeof this.options.source?(b=this.options.source,this.source=(e, f) => {d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:b,data:e,dataType:"json",success(g) {f(g)},error() {f([])}})}):this.source=this.options.source
},_searchTimeout(b) {clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,b))},this.options.delay)},search(c, b) {return c=null!=c?c:this._value(),this.term=this._value(),c.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(c):undefined},_search(b) {this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:b},this._response())},_response() {var b=++this.requestIndex;return a.proxy(function(c){b===this.requestIndex&&this.__response(c),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response(b) {b&&(b=this._normalize(b)),this._trigger("response",null,{content:b}),!this.options.disabled&&b&&b.length&&!this.cancelSearch?(this._suggest(b),this._trigger("open")):this._close()},close(b) {this.cancelSearch=!0,this._close(b)},_close(b) {this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",b))},_change(b) {this.previous!==this._value()&&this._trigger("change",b,{item:this.selectedItem})},_normalize(b) {return b.length&&b[0].label&&b[0].value?b:a.map(b,c => "string"==typeof c?{label:c,value:c}:a.extend({label:c.label||c.value,value:c.value||c.label},c));},_suggest(c) {var b=this.menu.element.empty();this._renderMenu(b,c),this.isNewMenu=!0,this.menu.refresh(),b.show(),this._resizeMenu(),b.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu() {var b=this.menu.element;b.outerWidth(Math.max(b.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu(c, b) {var d=this;a.each(b,(g, f) => {d._renderItemData(c,f)})},_renderItemData(c, b) {return this._renderItem(c,b).data("ui-autocomplete-item",b)},_renderItem(c, b) {return a("<li>").append(a("<a>").text(b.label)).appendTo(c)},_move(c, b) {return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(c)||this.menu.isLastItem()&&/^next/.test(c)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[c](b),undefined):(this.search(null,b),undefined)},widget() {return this.menu.element},_value(...args) {return this.valueMethod.apply(this.element,args);},_keyEvent(c, b) {(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(c,b),b.preventDefault())}}),a.extend(a.ui.autocomplete,{escapeRegex(b) {return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter(c, b) {var d=RegExp(a.ui.autocomplete.escapeRegex(b),"i");return a.grep(c,f => d.test(f.label||f.value||f));}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results(b) {return b+(b>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response(c) {var b;this._superApply(arguments),this.options.disabled||this.cancelSearch||(b=c&&c.length?this.options.messages.results(c.length):this.options.messages.noResults,this.liveRegion.text(b))}})}))(jQuery);((g => {
  var d;
  var c="ui-button ui-widget ui-state-default ui-corner-all";
  var h="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only";
  var f=function(){var a=g(this);setTimeout(() => {a.find(":ui-button").button("refresh")},1)};
  var b=e => {var a=e.name,k=e.form,j=g([]);return a&&(a=a.replace(/'/g,"\\'"),j=k?g(k).find("[name='"+a+"']"):g("[name='"+a+"']",e.ownerDocument).filter(function(){return !this.form})),j};
  g.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create() {
    this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");
    var j=this;
    var i=this.options;
    var e="checkbox"===this.type||"radio"===this.type;
    var a=e?"":"ui-state-active";
    null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(c).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===d&&g(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||g(this).removeClass(a)}).bind("click"+this.eventNamespace,k => {i.disabled&&(k.preventDefault(),k.stopImmediatePropagation())}),this._on({focus() {this.buttonElement.addClass("ui-state-focus")},blur() {this.buttonElement.removeClass("ui-state-focus")}}),e&&this.element.bind("change"+this.eventNamespace,() => {j.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,() => i.disabled?!1:undefined):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled){return !1}g(this).addClass("ui-state-active"),j.buttonElement.attr("aria-pressed","true");var k=j.element[0];b(k).not(k).map(function(){return g(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(g(this).addClass("ui-state-active"),d=this,j.document.one("mouseup",() => {d=null}),undefined);}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(g(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(k){return i.disabled?!1:((k.keyCode===g.ui.keyCode.SPACE||k.keyCode===g.ui.keyCode.ENTER)&&g(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){g(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(k){k.keyCode===g.ui.keyCode.SPACE&&g(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()
  },_determineButtonType() {
    var k;
    var j;
    var a;
    this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(k=this.element.parents().last(),j="label[for='"+this.element.attr("id")+"']",this.buttonElement=k.find(j),this.buttonElement.length||(k=k.length?k.siblings():this.element.siblings(),this.buttonElement=k.filter(j),this.buttonElement.length||(this.buttonElement=k.find(j))),this.element.addClass("ui-helper-hidden-accessible"),a=this.element.is(":checked"),a&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",a)):this.buttonElement=this.element
  },widget() {return this.buttonElement},_destroy() {this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(c+" ui-state-active "+h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption(i, a) {return this._super(i,a),"disabled"===i?(this.element.prop("disabled",!!a),a&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh() {var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOption("disabled",a),"radio"===this.type?b(this.element[0]).each(function(){g(this).is(":checked")?g(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):g(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton() {
    if("input"===this.type){return this.options.label&&this.element.val(this.options.label),undefined}
    var k=this.buttonElement.removeClass(h);
    var j=g("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(k.empty()).text();
    var l=this.options.icons;
    var e=l.primary&&l.secondary;
    var m=[];
    l.primary||l.secondary?(this.options.text&&m.push("ui-button-text-icon"+(e?"s":l.primary?"-primary":"-secondary")),l.primary&&k.prepend("<span class='ui-button-icon-primary ui-icon "+l.primary+"'></span>"),l.secondary&&k.append("<span class='ui-button-icon-secondary ui-icon "+l.secondary+"'></span>"),this.options.text||(m.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||k.attr("title",g.trim(j)))):m.push("ui-button-text-only"),k.addClass(m.join(" "))
  }}),g.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create() {this.element.addClass("ui-buttonset")},_init() {this.refresh()},_setOption(i, a) {"disabled"===i&&this.buttons.button("option",i,a),this._super(i,a)},refresh() {var a="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return g(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()},_destroy() {this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return g(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})
}))(jQuery);(((h, d) => {
  function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},h.extend(this._defaults,this.regional[""]),this.dpDiv=b(h("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function b(e){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(a,"mouseout",function(){h(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&h(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&h(this).removeClass("ui-datepicker-next-hover")}).delegate(a,"mouseover",function(){h.datepicker._isDisabledDatepicker(j.inline?e.parent()[0]:j.input[0])||(h(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),h(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&h(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&h(this).addClass("ui-datepicker-next-hover"))})}function f(l,k){h.extend(l,k);for(var e in k){null==k[e]&&(l[e]=k[e])}return l}h.extend(h.ui,{datepicker:{version:"1.10.4"}});
  var j;
  var g="datepicker";
  h.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker() {return this.dpDiv},setDefaults(a) {return f(this._defaults,a||{}),this},_attachDatepicker(l, k) {
    var e;
    var m;
    var o;
    e=l.nodeName.toLowerCase(),m="div"===e||"span"===e,l.id||(this.uuid+=1,l.id="dp"+this.uuid),o=this._newInst(h(l),m),o.settings=h.extend({},k||{}),"input"===e?this._connectDatepicker(l,o):m&&this._inlineDatepicker(l,o)
  },_newInst(e, a) {var k=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:k,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?b(h("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker(l, k) {var e=h(l);k.append=h([]),k.trigger=h([]),e.hasClass(this.markerClassName)||(this._attachments(e,k),e.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(k),h.data(l,g,k),k.settings.disabled&&this._disableDatepicker(l))},_attachments(l, k) {
    var e;
    var m;
    var u;
    var p=this._get(k,"appendText");
    var q=this._get(k,"isRTL");
    k.append&&k.append.remove(),p&&(k.append=h("<span class='"+this._appendClass+"'>"+p+"</span>"),l[q?"before":"after"](k.append)),l.unbind("focus",this._showDatepicker),k.trigger&&k.trigger.remove(),e=this._get(k,"showOn"),("focus"===e||"both"===e)&&l.focus(this._showDatepicker),("button"===e||"both"===e)&&(m=this._get(k,"buttonText"),u=this._get(k,"buttonImage"),k.trigger=h(this._get(k,"buttonImageOnly")?h("<img/>").addClass(this._triggerClass).attr({src:u,alt:m,title:m}):h("<button type='button'></button>").addClass(this._triggerClass).html(u?h("<img/>").attr({src:u,alt:m,title:m}):m)),l[q?"before":"after"](k.trigger),k.trigger.click(() => (h.datepicker._datepickerShowing&&h.datepicker._lastInput===l[0]?h.datepicker._hideDatepicker():h.datepicker._datepickerShowing&&h.datepicker._lastInput!==l[0]?(h.datepicker._hideDatepicker(),h.datepicker._showDatepicker(l[0])):h.datepicker._showDatepicker(l[0]), !1)))
  },_autoSize(q) {if(this._get(q,"autoSize")&&!q.inline){
    var m;
    var l;
    var k;
    var o;
    var u=new Date(2009,11,20);
    var p=this._get(q,"dateFormat");
    p.match(/[DM]/)&&(m=a => {for(l=0,k=0,o=0;a.length>o;o++){a[o].length>l&&(l=a[o].length,k=o)}return k},u.setMonth(m(this._get(q,p.match(/MM/)?"monthNames":"monthNamesShort"))),u.setDate(m(this._get(q,p.match(/DD/)?"dayNames":"dayNamesShort"))+20-u.getDay())),q.input.attr("size",this._formatDate(q,u).length)
  }},_inlineDatepicker(l, k) {var e=h(l);e.hasClass(this.markerClassName)||(e.addClass(this.markerClassName).append(k.dpDiv),h.data(l,g,k),this._setDate(k,this._getDefaultDate(k),!0),this._updateDatepicker(k),this._updateAlternate(k),k.settings.disabled&&this._disableDatepicker(l),k.dpDiv.css("display","block"))},_dialogDatepicker(z, r, x, m, k) {
    var y;
    var w;
    var s;
    var q;
    var v;
    var e=this._dialogInst;
    return e||(this.uuid+=1,y="dp"+this.uuid,this._dialogInput=h("<input type='text' id='"+y+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),h("body").append(this._dialogInput),e=this._dialogInst=this._newInst(this._dialogInput,!1),e.settings={},h.data(this._dialogInput[0],g,e)),f(e.settings,m||{}),r=r&&r.constructor===Date?this._formatDate(e,r):r,this._dialogInput.val(r),this._pos=k?k.length?k:[k.pageX,k.pageY]:null,this._pos||(w=document.documentElement.clientWidth,s=document.documentElement.clientHeight,q=document.documentElement.scrollLeft||document.body.scrollLeft,v=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[w/2-100+q,s/2-150+v]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),e.settings.onSelect=x,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),h.blockUI&&h.blockUI(this.dpDiv),h.data(this._dialogInput[0],g,e),this
  },_destroyDatepicker(l) {
    var k;
    var e=h(l);
    var m=h.data(l,g);
    e.hasClass(this.markerClassName)&&(k=l.nodeName.toLowerCase(),h.removeData(l,g),"input"===k?(m.append.remove(),m.trigger.remove(),e.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===k||"span"===k)&&e.removeClass(this.markerClassName).empty())
  },_enableDatepicker(l) {
    var k;
    var e;
    var m=h(l);
    var o=h.data(l,g);
    m.hasClass(this.markerClassName)&&(k=l.nodeName.toLowerCase(),"input"===k?(l.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===k||"span"===k)&&(e=m.children("."+this._inlineClass),e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=h.map(this._disabledInputs,a => a===l?null:a))
  },_disableDatepicker(l) {
    var k;
    var e;
    var m=h(l);
    var o=h.data(l,g);
    m.hasClass(this.markerClassName)&&(k=l.nodeName.toLowerCase(),"input"===k?(l.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===k||"span"===k)&&(e=m.children("."+this._inlineClass),e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=h.map(this._disabledInputs,a => a===l?null:a),this._disabledInputs[this._disabledInputs.length]=l)
  },_isDisabledDatepicker(i) {if(!i){return !1}for(var a=0;this._disabledInputs.length>a;a++){if(this._disabledInputs[a]===i){return !0}}return !1},_getInst(e) {try{return h.data(e,g)}catch(a){throw"Missing instance data for this datepicker"}},_optionDatepicker(l, e, t) {
    var p;
    var q;
    var k;
    var s;
    var m=this._getInst(l);
    return 2===arguments.length&&"string"==typeof e?"defaults"===e?h.extend({},h.datepicker._defaults):m?"all"===e?h.extend({},m.settings):this._get(m,e):null:(p=e||{},"string"==typeof e&&(p={},p[e]=t),m&&(this._curInst===m&&this._hideDatepicker(),q=this._getDateDatepicker(l,!0),k=this._getMinMaxDate(m,"min"),s=this._getMinMaxDate(m,"max"),f(m.settings,p),null!==k&&p.dateFormat!==d&&p.minDate===d&&(m.settings.minDate=this._formatDate(m,k)),null!==s&&p.dateFormat!==d&&p.maxDate===d&&(m.settings.maxDate=this._formatDate(m,s)),"disabled" in p&&(p.disabled?this._disableDatepicker(l):this._enableDatepicker(l)),this._attachments(h(l),m),this._autoSize(m),this._setDate(m,q),this._updateAlternate(m),this._updateDatepicker(m)),d)
  },_changeDatepicker(l, k, a) {this._optionDatepicker(l,k,a)},_refreshDatepicker(i) {var a=this._getInst(i);a&&this._updateDatepicker(a)},_setDateDatepicker(l, k) {var a=this._getInst(l);a&&(this._setDate(a,k),this._updateDatepicker(a),this._updateAlternate(a))},_getDateDatepicker(l, k) {var a=this._getInst(l);return a&&!a.inline&&this._setDateFromField(a,k),a?this._getDate(a):null},_doKeyDown(l) {
    var k;
    var e;
    var m;
    var u=h.datepicker._getInst(l.target);
    var p=!0;
    var q=u.dpDiv.is(".ui-datepicker-rtl");
    if(u._keyEvent=!0,h.datepicker._datepickerShowing){switch(l.keyCode){case 9:h.datepicker._hideDatepicker(),p=!1;break;case 13:return m=h("td."+h.datepicker._dayOverClass+":not(."+h.datepicker._currentClass+")",u.dpDiv),m[0]&&h.datepicker._selectDay(l.target,u.selectedMonth,u.selectedYear,m[0]),k=h.datepicker._get(u,"onSelect"),k?(e=h.datepicker._formatDate(u),k.apply(u.input?u.input[0]:null,[e,u])):h.datepicker._hideDatepicker(),!1;case 27:h.datepicker._hideDatepicker();break;case 33:h.datepicker._adjustDate(l.target,l.ctrlKey?-h.datepicker._get(u,"stepBigMonths"):-h.datepicker._get(u,"stepMonths"),"M");break;case 34:h.datepicker._adjustDate(l.target,l.ctrlKey?+h.datepicker._get(u,"stepBigMonths"):+h.datepicker._get(u,"stepMonths"),"M");break;case 35:(l.ctrlKey||l.metaKey)&&h.datepicker._clearDate(l.target),p=l.ctrlKey||l.metaKey;break;case 36:(l.ctrlKey||l.metaKey)&&h.datepicker._gotoToday(l.target),p=l.ctrlKey||l.metaKey;break;case 37:(l.ctrlKey||l.metaKey)&&h.datepicker._adjustDate(l.target,q?1:-1,"D"),p=l.ctrlKey||l.metaKey,l.originalEvent.altKey&&h.datepicker._adjustDate(l.target,l.ctrlKey?-h.datepicker._get(u,"stepBigMonths"):-h.datepicker._get(u,"stepMonths"),"M");break;case 38:(l.ctrlKey||l.metaKey)&&h.datepicker._adjustDate(l.target,-7,"D"),p=l.ctrlKey||l.metaKey;break;case 39:(l.ctrlKey||l.metaKey)&&h.datepicker._adjustDate(l.target,q?-1:1,"D"),p=l.ctrlKey||l.metaKey,l.originalEvent.altKey&&h.datepicker._adjustDate(l.target,l.ctrlKey?+h.datepicker._get(u,"stepBigMonths"):+h.datepicker._get(u,"stepMonths"),"M");break;case 40:(l.ctrlKey||l.metaKey)&&h.datepicker._adjustDate(l.target,7,"D"),p=l.ctrlKey||l.metaKey;break;default:p=!1}}else{36===l.keyCode&&l.ctrlKey?h.datepicker._showDatepicker(this):p=!1}p&&(l.preventDefault(),l.stopPropagation())
  },_doKeyPress(k) {
    var e;
    var l;
    var m=h.datepicker._getInst(k.target);
    return h.datepicker._get(m,"constrainInput")?(e=h.datepicker._possibleChars(h.datepicker._get(m,"dateFormat")),l=String.fromCharCode(null==k.charCode?k.keyCode:k.charCode),k.ctrlKey||k.metaKey||" ">l||!e||e.indexOf(l)>-1):d
  },_doKeyUp(l) {
    var k;
    var e=h.datepicker._getInst(l.target);
    if(e.input.val()!==e.lastVal){try{k=h.datepicker.parseDate(h.datepicker._get(e,"dateFormat"),e.input?e.input.val():null,h.datepicker._getFormatConfig(e)),k&&(h.datepicker._setDateFromField(e),h.datepicker._updateAlternate(e),h.datepicker._updateDatepicker(e))}catch(m){}}return !0
  },_showDatepicker(m) {if(m=m.target||m,"input"!==m.nodeName.toLowerCase()&&(m=h("input",m.parentNode)[0]),!h.datepicker._isDisabledDatepicker(m)&&h.datepicker._lastInput!==m){
    var l;
    var e;
    var v;
    var p;
    var q;
    var k;
    var s;
    l=h.datepicker._getInst(m),h.datepicker._curInst&&h.datepicker._curInst!==l&&(h.datepicker._curInst.dpDiv.stop(!0,!0),l&&h.datepicker._datepickerShowing&&h.datepicker._hideDatepicker(h.datepicker._curInst.input[0])),e=h.datepicker._get(l,"beforeShow"),v=e?e.apply(m,[m,l]):{},v!==!1&&(f(l.settings,v),l.lastVal=null,h.datepicker._lastInput=m,h.datepicker._setDateFromField(l),h.datepicker._inDialog&&(m.value=""),h.datepicker._pos||(h.datepicker._pos=h.datepicker._findPos(m),h.datepicker._pos[1]+=m.offsetHeight),p=!1,h(m).parents().each(function(){return p|="fixed"===h(this).css("position"),!p}),q={left:h.datepicker._pos[0],top:h.datepicker._pos[1]},h.datepicker._pos=null,l.dpDiv.empty(),l.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),h.datepicker._updateDatepicker(l),q=h.datepicker._checkOffset(l,q,p),l.dpDiv.css({position:h.datepicker._inDialog&&h.blockUI?"static":p?"fixed":"absolute",display:"none",left:q.left+"px",top:q.top+"px"}),l.inline||(k=h.datepicker._get(l,"showAnim"),s=h.datepicker._get(l,"duration"),l.dpDiv.zIndex(h(m).zIndex()+1),h.datepicker._datepickerShowing=!0,h.effects&&h.effects.effect[k]?l.dpDiv.show(k,h.datepicker._get(l,"showOptions"),s):l.dpDiv[k||"show"](k?s:null),h.datepicker._shouldFocusInput(l)&&l.input.focus(),h.datepicker._curInst=l))
  }},_updateDatepicker(l) {
    this.maxRows=4,j=l,l.dpDiv.empty().append(this._generateHTML(l)),this._attachHandlers(l),l.dpDiv.find("."+this._dayOverClass+" a").mouseover();
    var k;
    var e=this._getNumberOfMonths(l);
    var m=e[1];
    var n=17;
    l.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),m>1&&l.dpDiv.addClass("ui-datepicker-multi-"+m).css("width",n*m+"em"),l.dpDiv[(1!==e[0]||1!==e[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),l.dpDiv[(this._get(l,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),l===h.datepicker._curInst&&h.datepicker._datepickerShowing&&h.datepicker._shouldFocusInput(l)&&l.input.focus(),l.yearshtml&&(k=l.yearshtml,setTimeout(() => {k===l.yearshtml&&l.yearshtml&&l.dpDiv.find("select.ui-datepicker-year:first").replaceWith(l.yearshtml),k=l.yearshtml=null},0))
  },_shouldFocusInput(a) {return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset(w, m, q) {
    var x=w.dpDiv.outerWidth();
    var l=w.dpDiv.outerHeight();
    var e=w.input?w.input.outerWidth():0;
    var k=w.input?w.input.outerHeight():0;
    var v=document.documentElement.clientWidth+(q?0:h(document).scrollLeft());
    var p=document.documentElement.clientHeight+(q?0:h(document).scrollTop());
    return m.left-=this._get(w,"isRTL")?x-e:0,m.left-=q&&m.left===w.input.offset().left?h(document).scrollLeft():0,m.top-=q&&m.top===w.input.offset().top+k?h(document).scrollTop():0,m.left-=Math.min(m.left,m.left+x>v&&v>x?Math.abs(m.left+x-v):0),m.top-=Math.min(m.top,m.top+l>p&&p>l?Math.abs(l+k):0),m
  },_findPos(l) {for(var k,e=this._getInst(l),m=this._get(e,"isRTL");l&&("hidden"===l.type||1!==l.nodeType||h.expr.filters.hidden(l));){l=l[m?"previousSibling":"nextSibling"]}return k=h(l).offset(),[k.left,k.top]},_hideDatepicker(l) {
    var k;
    var e;
    var m;
    var q;
    var p=this._curInst;
    !p||l&&p!==h.data(l,g)||this._datepickerShowing&&(k=this._get(p,"showAnim"),e=this._get(p,"duration"),m=() => {h.datepicker._tidyDialog(p)},h.effects&&(h.effects.effect[k]||h.effects[k])?p.dpDiv.hide(k,h.datepicker._get(p,"showOptions"),e,m):p.dpDiv["slideDown"===k?"slideUp":"fadeIn"===k?"fadeOut":"hide"](k?e:null,m),k||m(),this._datepickerShowing=!1,q=this._get(p,"onClose"),q&&q.apply(p.input?p.input[0]:null,[p.input?p.input.val():"",p]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),h.blockUI&&(h.unblockUI(),h("body").append(this.dpDiv))),this._inDialog=!1)
  },_tidyDialog(a) {a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick(l) {if(h.datepicker._curInst){
    var k=h(l.target);
    var e=h.datepicker._getInst(k[0]);
    (k[0].id!==h.datepicker._mainDivId&&0===k.parents("#"+h.datepicker._mainDivId).length&&!k.hasClass(h.datepicker.markerClassName)&&!k.closest("."+h.datepicker._triggerClass).length&&h.datepicker._datepickerShowing&&(!h.datepicker._inDialog||!h.blockUI)||k.hasClass(h.datepicker.markerClassName)&&h.datepicker._curInst!==e)&&h.datepicker._hideDatepicker()
  }},_adjustDate(l, k, e) {
    var m=h(l);
    var o=this._getInst(m[0]);
    this._isDisabledDatepicker(m[0])||(this._adjustInstDate(o,k+("M"===e?this._get(o,"showCurrentAtPos"):0),e),this._updateDatepicker(o))
  },_gotoToday(l) {
    var k;
    var e=h(l);
    var m=this._getInst(e[0]);
    this._get(m,"gotoCurrent")&&m.currentDay?(m.selectedDay=m.currentDay,m.drawMonth=m.selectedMonth=m.currentMonth,m.drawYear=m.selectedYear=m.currentYear):(k=new Date,m.selectedDay=k.getDate(),m.drawMonth=m.selectedMonth=k.getMonth(),m.drawYear=m.selectedYear=k.getFullYear()),this._notifyChange(m),this._adjustDate(e)
  },_selectMonthYear(l, k, e) {
    var m=h(l);
    var o=this._getInst(m[0]);
    o["selected"+("M"===e?"Month":"Year")]=o["draw"+("M"===e?"Month":"Year")]=parseInt(k.options[k.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(m)
  },_selectDay(l, k, e, m) {
    var p;
    var o=h(l);
    h(m).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(p=this._getInst(o[0]),p.selectedDay=p.currentDay=h("a",m).html(),p.selectedMonth=p.currentMonth=k,p.selectedYear=p.currentYear=e,this._selectDate(l,this._formatDate(p,p.currentDay,p.currentMonth,p.currentYear)))
  },_clearDate(e) {var a=h(e);this._selectDate(a,"")},_selectDate(l, k) {
    var e;
    var m=h(l);
    var o=this._getInst(m[0]);
    k=null!=k?k:this._formatDate(o),o.input&&o.input.val(k),this._updateAlternate(o),e=this._get(o,"onSelect"),e?e.apply(o.input?o.input[0]:null,[k,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)
  },_updateAlternate(l) {
    var k;
    var e;
    var m;
    var o=this._get(l,"altField");
    o&&(k=this._get(l,"altFormat")||this._get(l,"dateFormat"),e=this._getDate(l),m=this.formatDate(k,e,this._getFormatConfig(l)),h(o).each(function(){h(this).val(m)}))
  },noWeekends(i) {var a=i.getDay();return[a>0&&6>a,""]},iso8601Week(l) {
    var k;
    var a=new Date(l.getTime());
    return a.setDate(a.getDate()+4-(a.getDay()||7)),k=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((k-a)/86400000)/7)+1
  },parseDate(K, S, B) {
    if(null==K||null==S){throw"Invalid arguments"}if(S="object"==typeof S?""+S:S+"",""===S){return null}
    var G;
    var C;
    var F;
    var z;
    var Q=0;
    var L=(B?B.shortYearCutoff:null)||this._defaults.shortYearCutoff;
    var I="string"!=typeof L?L:(new Date).getFullYear()%100+parseInt(L,10);
    var P=(B?B.dayNamesShort:null)||this._defaults.dayNamesShort;
    var E=(B?B.dayNames:null)||this._defaults.dayNames;
    var N=(B?B.monthNamesShort:null)||this._defaults.monthNamesShort;
    var H=(B?B.monthNames:null)||this._defaults.monthNames;
    var O=-1;
    var T=-1;
    var x=-1;
    var J=-1;
    var q=!1;
    var R=i => {var a=K.length>G+1&&K.charAt(G+1)===i;return a&&G++,a};
    var A=m => {var k=R(m),a="@"===m?14:"!"===m?20:"y"===m&&k?4:"o"===m?3:2,l=RegExp("^\\d{1,"+a+"}"),o=S.substring(Q).match(l);if(!o){throw"Missing number at position "+Q}return Q+=o[0].length,parseInt(o[0],10)};
    var t=(a, k, p) => {var l=-1,m=h.map(R(a)?p:k,(n, i) => [[i,n]]).sort((n, i) => -(n[1].length-i[1].length));if(h.each(m,(r, n) => {var o=n[1];return S.substr(Q,o.length).toLowerCase()===o.toLowerCase()?(l=n[0],Q+=o.length,!1):d}),-1!==l){return l+1}throw"Unknown name at position "+Q};
    var e=() => {if(S.charAt(Q)!==K.charAt(G)){throw"Unexpected literal at position "+Q}Q++};
    for(G=0;K.length>G;G++){if(q){"'"!==K.charAt(G)||R("'")?e():q=!1}else{switch(K.charAt(G)){case"d":x=A("d");break;case"D":t("D",P,E);break;case"o":J=A("o");break;case"m":T=A("m");break;case"M":T=t("M",N,H);break;case"y":O=A("y");break;case"@":z=new Date(A("@")),O=z.getFullYear(),T=z.getMonth()+1,x=z.getDate();break;case"!":z=new Date((A("!")-this._ticksTo1970)/10000),O=z.getFullYear(),T=z.getMonth()+1,x=z.getDate();break;case"'":R("'")?e():q=!0;break;default:e()}}}if(S.length>Q&&(F=S.substr(Q),!/^\s+/.test(F))){throw"Extra/unparsed characters found in date: "+F}if(-1===O?O=(new Date).getFullYear():100>O&&(O+=(new Date).getFullYear()-(new Date).getFullYear()%100+(I>=O?0:-100)),J>-1){for(T=1,x=J;;){if(C=this._getDaysInMonth(O,T-1),C>=x){break}T++,x-=C}}if(z=this._daylightSavingAdjust(new Date(O,T-1,x)),z.getFullYear()!==O||z.getMonth()+1!==T||z.getDate()!==x){throw"Invalid date"}return z
  },ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate(x, C, v) {
    if(!C){return""}
    var A;
    var D=(v?v.dayNamesShort:null)||this._defaults.dayNamesShort;
    var p=(v?v.dayNames:null)||this._defaults.dayNames;
    var k=(v?v.monthNamesShort:null)||this._defaults.monthNamesShort;
    var m=(v?v.monthNames:null)||this._defaults.monthNames;
    var B=e => {var a=x.length>A+1&&x.charAt(A+1)===e;return a&&A++,a};
    var z=(r, o, n) => {var l=""+o;if(B(r)){for(;n>l.length;){l="0"+l}}return l};
    var w=(r, o, n, l) => B(r)?l[o]:n[o];
    var q="";
    var y=!1;
    if(C){for(A=0;x.length>A;A++){if(y){"'"!==x.charAt(A)||B("'")?q+=x.charAt(A):y=!1}else{switch(x.charAt(A)){case"d":q+=z("d",C.getDate(),2);break;case"D":q+=w("D",C.getDay(),D,p);break;case"o":q+=z("o",Math.round((new Date(C.getFullYear(),C.getMonth(),C.getDate()).getTime()-new Date(C.getFullYear(),0,0).getTime())/86400000),3);break;case"m":q+=z("m",C.getMonth()+1,2);break;case"M":q+=w("M",C.getMonth(),k,m);break;case"y":q+=B("y")?C.getFullYear():(10>C.getYear()%100?"0":"")+C.getYear()%100;break;case"@":q+=C.getTime();break;case"!":q+=10000*C.getTime()+this._ticksTo1970;break;case"'":B("'")?q+="'":y=!0;break;default:q+=x.charAt(A)}}}}return q
  },_possibleChars(o) {
    var m;
    var l="";
    var k=!1;
    var n=p => {var e=o.length>m+1&&o.charAt(m+1)===p;return e&&m++,e};
    for(m=0;o.length>m;m++){if(k){"'"!==o.charAt(m)||n("'")?l+=o.charAt(m):k=!1}else{switch(o.charAt(m)){case"d":case"m":case"y":case"@":l+="0123456789";break;case"D":case"M":return null;case"'":n("'")?l+="'":k=!0;break;default:l+=o.charAt(m)}}}return l
  },_get(k, a) {return k.settings[a]!==d?k.settings[a]:this._defaults[a]},_setDateFromField(u, m) {if(u.input.val()!==u.lastVal){
    var l=this._get(u,"dateFormat");
    var k=u.lastVal=u.input?u.input.val():null;
    var p=this._getDefaultDate(u);
    var w=p;
    var q=this._getFormatConfig(u);
    try{w=this.parseDate(l,k,q)||p}catch(v){k=m?"":k}u.selectedDay=w.getDate(),u.drawMonth=u.selectedMonth=w.getMonth(),u.drawYear=u.selectedYear=w.getFullYear(),u.currentDay=k?w.getDate():0,u.currentMonth=k?w.getMonth():0,u.currentYear=k?w.getFullYear():0,this._adjustInstDate(u)
  }},_getDefaultDate(a) {return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate(l, k, e) {
    var m=i => {var a=new Date;return a.setDate(a.getDate()+i),a};
    var p=v => {try{return h.datepicker.parseDate(h.datepicker._get(l,"dateFormat"),v,h.datepicker._getFormatConfig(l))}catch(q){}for(var w=(v.toLowerCase().match(/^c/)?h.datepicker._getDate(l):null)||new Date,A=w.getFullYear(),x=w.getMonth(),y=w.getDate(),t=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,z=t.exec(v);z;){switch(z[2]||"d"){case"d":case"D":y+=parseInt(z[1],10);break;case"w":case"W":y+=7*parseInt(z[1],10);break;case"m":case"M":x+=parseInt(z[1],10),y=Math.min(y,h.datepicker._getDaysInMonth(A,x));break;case"y":case"Y":A+=parseInt(z[1],10),y=Math.min(y,h.datepicker._getDaysInMonth(A,x))}z=t.exec(v)}return new Date(A,x,y)};
    var o=null==k||""===k?e:"string"==typeof k?p(k):"number"==typeof k?isNaN(k)?e:m(k):new Date(k.getTime());
    return o=o&&"Invalid Date"==""+o?e:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)
  },_daylightSavingAdjust(a) {return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate(q, m, l) {
    var k=!m;
    var o=q.selectedMonth;
    var u=q.selectedYear;
    var p=this._restrictMinMax(q,this._determineDate(q,m,new Date));
    q.selectedDay=q.currentDay=p.getDate(),q.drawMonth=q.selectedMonth=q.currentMonth=p.getMonth(),q.drawYear=q.selectedYear=q.currentYear=p.getFullYear(),o===q.selectedMonth&&u===q.selectedYear||l||this._notifyChange(q),this._adjustInstDate(q),q.input&&q.input.val(k?"":this._formatDate(q))
  },_getDate(i) {var a=!i.currentYear||i.input&&""===i.input.val()?null:this._daylightSavingAdjust(new Date(i.currentYear,i.currentMonth,i.currentDay));return a},_attachHandlers(l) {
    var k=this._get(l,"stepMonths");
    var e="#"+l.id.replace(/\\\\/g,"\\");
    l.dpDiv.find("[data-handler]").map(function(){var a={prev() {h.datepicker._adjustDate(e,-k,"M")},next() {h.datepicker._adjustDate(e,+k,"M")},hide() {h.datepicker._hideDatepicker()},today() {h.datepicker._gotoToday(e)},selectDay() {return h.datepicker._selectDay(e,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth() {return h.datepicker._selectMonthYear(e,this,"M"),!1},selectYear() {return h.datepicker._selectMonthYear(e,this,"Y"),!1}};h(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})
  },_generateHTML(aY) {
    var aI;
    var aU;
    var a2;
    var aJ;
    var aP;
    var aK;
    var aO;
    var aH;
    var a0;
    var aV;
    var aR;
    var aZ;
    var aN;
    var aW;
    var aQ;
    var aX;
    var a3;
    var aG;
    var aS;
    var aD;
    var a1;
    var ax;
    var aF;
    var an;
    var ay;
    var aE;
    var ar;
    var am;
    var ag;
    var aA;
    var aw;
    var ah;
    var ab;
    var av;
    var ak;
    var al;
    var aT;
    var ap;
    var ai;
    var at=new Date;
    var ad=this._daylightSavingAdjust(new Date(at.getFullYear(),at.getMonth(),at.getDate()));
    var ao=this._get(aY,"isRTL");
    var af=this._get(aY,"showButtonPanel");
    var az=this._get(aY,"hideIfNoPrevNext");
    var aC=this._get(aY,"navigationAsDateFormat");
    var aL=this._getNumberOfMonths(aY);
    var au=this._get(aY,"showCurrentAtPos");
    var aq=this._get(aY,"stepMonths");
    var aj=1!==aL[0]||1!==aL[1];
    var ae=this._daylightSavingAdjust(aY.currentDay?new Date(aY.currentYear,aY.currentMonth,aY.currentDay):new Date(9999,9,9));
    var aB=this._getMinMaxDate(aY,"min");
    var ac=this._getMinMaxDate(aY,"max");
    var aa=aY.drawMonth-au;
    var aM=aY.drawYear;
    if(0>aa&&(aa+=12,aM--),ac){for(aI=this._daylightSavingAdjust(new Date(ac.getFullYear(),ac.getMonth()-aL[0]*aL[1]+1,ac.getDate())),aI=aB&&aB>aI?aB:aI;this._daylightSavingAdjust(new Date(aM,aa,1))>aI;){aa--,0>aa&&(aa=11,aM--)}}for(aY.drawMonth=aa,aY.drawYear=aM,aU=this._get(aY,"prevText"),aU=aC?this.formatDate(aU,this._daylightSavingAdjust(new Date(aM,aa-aq,1)),this._getFormatConfig(aY)):aU,a2=this._canAdjustMonth(aY,-1,aM,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ao?"e":"w")+"'>"+aU+"</span></a>":az?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ao?"e":"w")+"'>"+aU+"</span></a>",aJ=this._get(aY,"nextText"),aJ=aC?this.formatDate(aJ,this._daylightSavingAdjust(new Date(aM,aa+aq,1)),this._getFormatConfig(aY)):aJ,aP=this._canAdjustMonth(aY,1,aM,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aJ+"'><span class='ui-icon ui-icon-circle-triangle-"+(ao?"w":"e")+"'>"+aJ+"</span></a>":az?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aJ+"'><span class='ui-icon ui-icon-circle-triangle-"+(ao?"w":"e")+"'>"+aJ+"</span></a>",aK=this._get(aY,"currentText"),aO=this._get(aY,"gotoCurrent")&&aY.currentDay?ae:ad,aK=aC?this.formatDate(aK,aO,this._getFormatConfig(aY)):aK,aH=aY.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aY,"closeText")+"</button>",a0=af?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ao?aH:"")+(this._isInRange(aY,aO)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aK+"</button>":"")+(ao?"":aH)+"</div>":"",aV=parseInt(this._get(aY,"firstDay"),10),aV=isNaN(aV)?0:aV,aR=this._get(aY,"showWeek"),aZ=this._get(aY,"dayNames"),aN=this._get(aY,"dayNamesMin"),aW=this._get(aY,"monthNames"),aQ=this._get(aY,"monthNamesShort"),aX=this._get(aY,"beforeShowDay"),a3=this._get(aY,"showOtherMonths"),aG=this._get(aY,"selectOtherMonths"),aS=this._getDefaultDate(aY),aD="",ax=0;aL[0]>ax;ax++){for(aF="",this.maxRows=4,an=0;aL[1]>an;an++){if(ay=this._daylightSavingAdjust(new Date(aM,aa,aY.selectedDay)),aE=" ui-corner-all",ar="",aj){if(ar+="<div class='ui-datepicker-group",aL[1]>1){switch(an){case 0:ar+=" ui-datepicker-group-first",aE=" ui-corner-"+(ao?"right":"left");break;case aL[1]-1:ar+=" ui-datepicker-group-last",aE=" ui-corner-"+(ao?"left":"right");break;default:ar+=" ui-datepicker-group-middle",aE=""}}ar+="'>"}for(ar+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+aE+"'>"+(/all|left/.test(aE)&&0===ax?ao?aP:a2:"")+(/all|right/.test(aE)&&0===ax?ao?a2:aP:"")+this._generateMonthYearHeader(aY,aa,aM,aB,ac,ax>0||an>0,aW,aQ)+"</div><table class='ui-datepicker-calendar'><thead><tr>",am=aR?"<th class='ui-datepicker-week-col'>"+this._get(aY,"weekHeader")+"</th>":"",a1=0;7>a1;a1++){ag=(a1+aV)%7,am+="<th"+((a1+aV+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aZ[ag]+"'>"+aN[ag]+"</span></th>"}for(ar+=am+"</tr></thead><tbody>",aA=this._getDaysInMonth(aM,aa),aM===aY.selectedYear&&aa===aY.selectedMonth&&(aY.selectedDay=Math.min(aY.selectedDay,aA)),aw=(this._getFirstDayOfMonth(aM,aa)-aV+7)%7,ah=Math.ceil((aw+aA)/7),ab=aj?this.maxRows>ah?this.maxRows:ah:ah,this.maxRows=ab,av=this._daylightSavingAdjust(new Date(aM,aa,1-aw)),ak=0;ab>ak;ak++){for(ar+="<tr>",al=aR?"<td class='ui-datepicker-week-col'>"+this._get(aY,"calculateWeek")(av)+"</td>":"",a1=0;7>a1;a1++){aT=aX?aX.apply(aY.input?aY.input[0]:null,[av]):[!0,""],ap=av.getMonth()!==aa,ai=ap&&!aG||!aT[0]||aB&&aB>av||ac&&av>ac,al+="<td class='"+((a1+aV+6)%7>=5?" ui-datepicker-week-end":"")+(ap?" ui-datepicker-other-month":"")+(av.getTime()===ay.getTime()&&aa===aY.selectedMonth&&aY._keyEvent||aS.getTime()===av.getTime()&&aS.getTime()===ay.getTime()?" "+this._dayOverClass:"")+(ai?" "+this._unselectableClass+" ui-state-disabled":"")+(ap&&!a3?"":" "+aT[1]+(av.getTime()===ae.getTime()?" "+this._currentClass:"")+(av.getTime()===ad.getTime()?" ui-datepicker-today":""))+"'"+(ap&&!a3||!aT[2]?"":" title='"+aT[2].replace(/'/g,"&#39;")+"'")+(ai?"":" data-handler='selectDay' data-event='click' data-month='"+av.getMonth()+"' data-year='"+av.getFullYear()+"'")+">"+(ap&&!a3?"&#xa0;":ai?"<span class='ui-state-default'>"+av.getDate()+"</span>":"<a class='ui-state-default"+(av.getTime()===ad.getTime()?" ui-state-highlight":"")+(av.getTime()===ae.getTime()?" ui-state-active":"")+(ap?" ui-priority-secondary":"")+"' href='#'>"+av.getDate()+"</a>")+"</td>",av.setDate(av.getDate()+1),av=this._daylightSavingAdjust(av)}ar+=al+"</tr>"}aa++,aa>11&&(aa=0,aM++),ar+="</tbody></table>"+(aj?"</div>"+(aL[0]>0&&an===aL[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aF+=ar}aD+=aF}return aD+=a0,aY._keyEvent=!1,aD
  },_generateMonthYearHeader(M, z, I, P, A, E, B, D) {
    var x;
    var O;
    var J;
    var G;
    var N;
    var C;
    var K;
    var F;
    var L=this._get(M,"changeMonth");
    var Q=this._get(M,"changeYear");
    var w=this._get(M,"showMonthAfterYear");
    var H="<div class='ui-datepicker-title'>";
    var q="";
    if(E||!L){q+="<span class='ui-datepicker-month'>"+B[z]+"</span>"}else{for(x=P&&P.getFullYear()===I,O=A&&A.getFullYear()===I,q+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",J=0;12>J;J++){(!x||J>=P.getMonth())&&(!O||A.getMonth()>=J)&&(q+="<option value='"+J+"'"+(J===z?" selected='selected'":"")+">"+D[J]+"</option>")}q+="</select>"}if(w||(H+=q+(!E&&L&&Q?"":"&#xa0;")),!M.yearshtml){if(M.yearshtml="",E||!Q){H+="<span class='ui-datepicker-year'>"+I+"</span>"}else{for(G=this._get(M,"yearRange").split(":"),N=(new Date).getFullYear(),C=i => {var a=i.match(/c[+\-].*/)?I+parseInt(i.substring(1),10):i.match(/[+\-].*/)?N+parseInt(i,10):parseInt(i,10);return isNaN(a)?N:a},K=C(G[0]),F=Math.max(K,C(G[1]||"")),K=P?Math.max(K,P.getFullYear()):K,F=A?Math.min(F,A.getFullYear()):F,M.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";F>=K;K++){M.yearshtml+="<option value='"+K+"'"+(K===I?" selected='selected'":"")+">"+K+"</option>"}M.yearshtml+="</select>",H+=M.yearshtml,M.yearshtml=null}}return H+=this._get(M,"yearSuffix"),w&&(H+=(!E&&L&&Q?"":"&#xa0;")+q),H+="</div>"
  },_adjustInstDate(q, m, l) {
    var k=q.drawYear+("Y"===l?m:0);
    var o=q.drawMonth+("M"===l?m:0);
    var u=Math.min(q.selectedDay,this._getDaysInMonth(k,o))+("D"===l?m:0);
    var p=this._restrictMinMax(q,this._daylightSavingAdjust(new Date(k,o,u)));
    q.selectedDay=p.getDate(),q.drawMonth=q.selectedMonth=p.getMonth(),q.drawYear=q.selectedYear=p.getFullYear(),("M"===l||"Y"===l)&&this._notifyChange(q)
  },_restrictMinMax(o, m) {
    var l=this._getMinMaxDate(o,"min");
    var k=this._getMinMaxDate(o,"max");
    var n=l&&l>m?l:m;
    return k&&n>k?k:n
  },_notifyChange(i) {var a=this._get(i,"onChangeMonthYear");a&&a.apply(i.input?i.input[0]:null,[i.selectedYear,i.selectedMonth+1,i])},_getNumberOfMonths(i) {var a=this._get(i,"numberOfMonths");return null==a?[1,1]:"number"==typeof a?[1,a]:a},_getMinMaxDate(i, a) {return this._determineDate(i,this._get(i,a+"Date"),null)},_getDaysInMonth(i, a) {return 32-this._daylightSavingAdjust(new Date(i,a,32)).getDate()},_getFirstDayOfMonth(i, a) {return new Date(i,a,1).getDay()},_canAdjustMonth(p, m, l, k) {
    var o=this._getNumberOfMonths(p);
    var q=this._daylightSavingAdjust(new Date(l,k+(0>m?m:o[0]*o[1]),1));
    return 0>m&&q.setDate(this._getDaysInMonth(q.getFullYear(),q.getMonth())),this._isInRange(p,q)
  },_isInRange(q, x) {
    var p;
    var v;
    var y=this._getMinMaxDate(q,"min");
    var m=this._getMinMaxDate(q,"max");
    var k=null;
    var l=null;
    var w=this._get(q,"yearRange");
    return w&&(p=w.split(":"),v=(new Date).getFullYear(),k=parseInt(p[0],10),l=parseInt(p[1],10),p[0].match(/[+\-].*/)&&(k+=v),p[1].match(/[+\-].*/)&&(l+=v)),(!y||x.getTime()>=y.getTime())&&(!m||x.getTime()<=m.getTime())&&(!k||x.getFullYear()>=k)&&(!l||l>=x.getFullYear())
  },_getFormatConfig(i) {var a=this._get(i,"shortYearCutoff");return a="string"!=typeof a?a:(new Date).getFullYear()%100+parseInt(a,10),{shortYearCutoff:a,dayNamesShort:this._get(i,"dayNamesShort"),dayNames:this._get(i,"dayNames"),monthNamesShort:this._get(i,"monthNamesShort"),monthNames:this._get(i,"monthNames")}},_formatDate(o, m, l, k) {m||(o.currentDay=o.selectedDay,o.currentMonth=o.selectedMonth,o.currentYear=o.selectedYear);var n=m?"object"==typeof m?m:this._daylightSavingAdjust(new Date(k,l,m)):this._daylightSavingAdjust(new Date(o.currentYear,o.currentMonth,o.currentDay));return this.formatDate(this._get(o,"dateFormat"),n,this._getFormatConfig(o))}}),h.fn.datepicker=function(e){if(!this.length){return this}h.datepicker.initialized||(h(document).mousedown(h.datepicker._checkExternalClick),h.datepicker.initialized=!0),0===h("#"+h.datepicker._mainDivId).length&&h("body").append(h.datepicker.dpDiv);var a=Array.prototype.slice.call(arguments,1);return "string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?h.datepicker["_"+e+"Datepicker"](...[this[0]].concat(a)):this.each(function(){"string"==typeof e?h.datepicker["_"+e+"Datepicker"](...[this].concat(a)):h.datepicker._attachDatepicker(this,e)}):h.datepicker["_"+e+"Datepicker"](...[this[0]].concat(a));},h.datepicker=new c,h.datepicker.initialized=!1,h.datepicker.uuid=(new Date).getTime(),h.datepicker.version="1.10.4"
}))(jQuery);((c => {
  var b={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0};
  var a={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};
  c.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using(e) {var d=c(this).css(e).offset().top;0>d&&c(this).css("top",e.top-d)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create() {this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&c.fn.draggable&&this._makeDraggable(),this.options.resizable&&c.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init() {this.options.autoOpen&&this.open()},_appendTo() {var d=this.options.appendTo;return d&&(d.jquery||d.nodeType)?c(d):this.document.find(d||"body").eq(0)},_destroy() {
    var f;
    var d=this.originalPosition;
    this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),f=d.parent.children().eq(d.index),f.length&&f[0]!==this.element[0]?f.before(this.element):d.parent.append(this.element)
  },widget() {return this.uiDialog},disable:c.noop,enable:c.noop,close(f) {
    var e;
    var d=this;
    if(this._isOpen&&this._trigger("beforeClose",f)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length){try{e=this.document[0].activeElement,e&&"body"!==e.nodeName.toLowerCase()&&c(e).blur()}catch(g){}}this._hide(this.uiDialog,this.options.hide,() => {d._trigger("close",f)})}
  },isOpen() {return this._isOpen},moveToTop() {this._moveToTop()},_moveToTop(g, f) {var d=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return d&&!f&&this._trigger("focus",g),d},open() {var d=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=c(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,() => {d._focusTabbable(),d._trigger("focus")}),this._trigger("open"),undefined);},_focusTabbable() {var d=this.element.find("[autofocus]");d.length||(d=this.element.find(":tabbable")),d.length||(d=this.uiDialogButtonPane.find(":tabbable")),d.length||(d=this.uiDialogTitlebarClose.filter(":tabbable")),d.length||(d=this.uiDialog),d.eq(0).focus()},_keepFocus(e) {function d(){
    var g=this.document[0].activeElement;
    var f=this.uiDialog[0]===g||c.contains(this.uiDialog[0],g);
    f||this._focusTabbable()
  }e.preventDefault(),d.call(this),this._delay(d)},_createWrapper() {this.uiDialog=c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown(f) {if(this.options.closeOnEscape&&!f.isDefaultPrevented()&&f.keyCode&&f.keyCode===c.ui.keyCode.ESCAPE){return f.preventDefault(),this.close(f),undefined}if(f.keyCode===c.ui.keyCode.TAB){
    var e=this.uiDialog.find(":tabbable");
    var d=e.filter(":first");
    var g=e.filter(":last");
    f.target!==g[0]&&f.target!==this.uiDialog[0]||f.shiftKey?f.target!==d[0]&&f.target!==this.uiDialog[0]||!f.shiftKey||(g.focus(1),f.preventDefault()):(d.focus(1),f.preventDefault())
  }},mousedown(d) {this._moveToTop(d)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar() {var d;this.uiDialogTitlebar=c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown(e) {c(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=c("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click(f) {f.preventDefault(),this.close(f)}}),d=c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(d),this.uiDialog.attr({"aria-labelledby":d.attr("id")})},_title(d) {this.options.title||d.html("&#160;"),d.text(this.options.title)},_createButtonPane() {this.uiDialogButtonPane=c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons() {
    var e=this;
    var d=this.options.buttons;
    return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),c.isEmptyObject(d)||c.isArray(d)&&!d.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(c.each(d,(g, f) => {
      var h;
      var j;
      f=c.isFunction(f)?{click:f,text:g}:f,f=c.extend({type:"button"},f),h=f.click,f.click=function(...args) {h.apply(e.element[0],args)},j={icons:f.icons,text:f.showText},delete f.icons,delete f.showText,c("<button></button>",f).button(j).appendTo(e.uiButtonSet)
    }),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined);
  },_makeDraggable() {
    function f(g){return{position:g.position,offset:g.offset}}
    var e=this;
    var d=this.options;
    this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start(g, h) {c(this).addClass("ui-dialog-dragging"),e._blockFrames(),e._trigger("dragStart",g,f(h))},drag(h, g) {e._trigger("drag",h,f(g))},stop(g, h) {d.position=[h.position.left-e.document.scrollLeft(),h.position.top-e.document.scrollTop()],c(this).removeClass("ui-dialog-dragging"),e._unblockFrames(),e._trigger("dragStop",g,f(h))}})
  },_makeResizable() {
    function f(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}
    var e=this;
    var d=this.options;
    var g=d.resizable;
    var j=this.uiDialog.css("position");
    var h="string"==typeof g?g:"n,e,s,w,se,sw,ne,nw";
    this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:h,start(i, k) {c(this).addClass("ui-dialog-resizing"),e._blockFrames(),e._trigger("resizeStart",i,f(k))},resize(k, i) {e._trigger("resize",k,f(i))},stop(i, k) {d.height=c(this).height(),d.width=c(this).width(),c(this).removeClass("ui-dialog-resizing"),e._unblockFrames(),e._trigger("resizeStop",i,f(k))}}).css("position",j)
  },_minHeight() {var d=this.options;return"auto"===d.height?d.minHeight:Math.min(d.minHeight,d.height)},_position() {var d=this.uiDialog.is(":visible");d||this.uiDialog.show(),this.uiDialog.position(this.options.position),d||this.uiDialog.hide()},_setOptions(d) {
    var e=this;
    var g=!1;
    var f={};
    c.each(d,(i, h) => {e._setOption(i,h),i in b&&(g=!0),i in a&&(f[i]=h)}),g&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",f)
  },_setOption(j, g) {
    var f;
    var d;
    var h=this.uiDialog;
    "dialogClass"===j&&h.removeClass(this.options.dialogClass).addClass(g),"disabled"!==j&&(this._super(j,g),"appendTo"===j&&this.uiDialog.appendTo(this._appendTo()),"buttons"===j&&this._createButtons(),"closeText"===j&&this.uiDialogTitlebarClose.button({label:""+g}),"draggable"===j&&(f=h.is(":data(ui-draggable)"),f&&!g&&h.draggable("destroy"),!f&&g&&this._makeDraggable()),"position"===j&&this._position(),"resizable"===j&&(d=h.is(":data(ui-resizable)"),d&&!g&&h.resizable("destroy"),d&&"string"==typeof g&&h.resizable("option","handles",g),d||g===!1||this._makeResizable()),"title"===j&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
  },_size() {
    var h;
    var g;
    var f;
    var d=this.options;
    this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),h=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),g=Math.max(0,d.minHeight-h),f="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-h):"none","auto"===d.height?this.element.css({minHeight:g,maxHeight:f,height:"auto"}):this.element.height(Math.max(0,d.height-h)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
  },_blockFrames() {this.iframeBlocks=this.document.find("iframe").map(function(){var d=c(this);return c("<div>").css({position:"absolute",width:d.outerWidth(),height:d.outerHeight()}).appendTo(d.parent()).offset(d.offset())[0]})},_unblockFrames() {this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction(d) {return c(d.target).closest(".ui-dialog").length?!0:!!c(d.target).closest(".ui-datepicker").length},_createOverlay() {if(this.options.modal){
    var e=this;
    var d=this.widgetFullName;
    c.ui.dialog.overlayInstances||this._delay(function(){c.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",f => {e._allowInteraction(f)||(f.preventDefault(),c(".ui-dialog:visible:last .ui-dialog-content").data(d)._focusTabbable())})}),this.overlay=c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),c.ui.dialog.overlayInstances++
  }},_destroyOverlay() {this.options.modal&&this.overlay&&(c.ui.dialog.overlayInstances--,c.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),c.ui.dialog.overlayInstances=0,c.uiBackCompat!==!1&&c.widget("ui.dialog",c.ui.dialog,{_position() {
    var f;
    var e=this.options.position;
    var d=[];
    var g=[0,0];
    e?(("string"==typeof e||"object"==typeof e&&"0" in e)&&(d=e.split?e.split(" "):[e[0],e[1]],1===d.length&&(d[1]=d[0]),c.each(["left","top"],(i, h) => {+d[i]===d[i]&&(g[i]=d[i],d[i]=h)}),e={my:d[0]+(0>g[0]?g[0]:"+"+g[0])+" "+d[1]+(0>g[1]?g[1]:"+"+g[1]),at:d.join(" ")}),e=c.extend({},c.ui.dialog.prototype.options.position,e)):e=c.ui.dialog.prototype.options.position,f=this.uiDialog.is(":visible"),f||this.uiDialog.show(),this.uiDialog.position(e),f||this.uiDialog.hide()
  }})
}))(jQuery);((a => {a.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create() {this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(b){this.options.disabled&&b.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(b){b.preventDefault()},"click .ui-state-disabled > a":function(b){b.preventDefault()},"click .ui-menu-item:has(a)":function(c){var b=a(c.target).closest(".ui-menu-item");!this.mouseHandled&&b.not(".ui-state-disabled").length&&(this.select(c),c.isPropagationStopped()||(this.mouseHandled=!0),b.has(".ui-menu").length?this.expand(c):!this.element.is(":focus")&&a(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(c){var b=a(c.currentTarget);b.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(c,b)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus(c, d) {var b=this.active||this.element.children(".ui-menu-item").eq(0);d||this.focus(c,b)},blur(b) {this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click(b) {a(b.target).closest(".ui-menu").length||this.collapseAll(b),this.mouseHandled=!1}})},_destroy() {this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown(h) {
  function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}
  var f;
  var k;
  var c;
  var j;
  var g;
  var b=!0;
  switch(h.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(h);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(h);break;case a.ui.keyCode.HOME:this._move("first","first",h);break;case a.ui.keyCode.END:this._move("last","last",h);break;case a.ui.keyCode.UP:this.previous(h);break;case a.ui.keyCode.DOWN:this.next(h);break;case a.ui.keyCode.LEFT:this.collapse(h);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(h);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(h);break;case a.ui.keyCode.ESCAPE:this.collapse(h);break;default:b=!1,k=this.previousFilter||"",c=String.fromCharCode(h.keyCode),j=!1,clearTimeout(this.filterTimer),c===k?j=!0:c=k+c,g=RegExp("^"+d(c),"i"),f=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())}),f=j&&-1!==f.index(this.active.next())?this.active.nextAll(".ui-menu-item"):f,f.length||(c=String.fromCharCode(h.keyCode),g=RegExp("^"+d(c),"i"),f=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())})),f.length?(this.focus(h,f),f.length>1?(this.previousFilter=c,this.filterTimer=this._delay(function(){delete this.previousFilter},1000)):delete this.previousFilter):delete this.previousFilter}b&&h.preventDefault()
},_activate(b) {this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(b):this.select(b))},refresh() {
  var d;
  var b=this.options.icons.submenu;
  var c=this.element.find(this.options.menus);
  this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){
    var g=a(this);
    var f=g.prev("a");
    var h=a("<span>").addClass("ui-menu-icon ui-icon "+b).data("ui-menu-submenu-carat",!0);
    f.attr("aria-haspopup","true").prepend(h),g.attr("aria-labelledby",f.attr("id"))
  }),d=c.add(this.element),d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),d.children(":not(.ui-menu-item)").each(function(){var f=a(this);/[^\-\u2014\u2013\s]/.test(f.text())||f.addClass("ui-widget-content ui-menu-divider")}),d.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole() {return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption(b, c) {"icons"===b&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu),this._super(b,c)},focus(c, f) {
  var b;
  var d;
  this.blur(c,c&&"focus"===c.type),this._scrollIntoView(f),this.active=f.first(),d=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),c&&"keydown"===c.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),b=f.children(".ui-menu"),b.length&&c&&/^mouse/.test(c.type)&&this._startOpening(b),this.activeMenu=f.parent(),this._trigger("focus",c,{item:f})
},_scrollIntoView(g) {
  var c;
  var d;
  var j;
  var b;
  var h;
  var f;
  this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,j=g.offset().top-this.activeMenu.offset().top-c-d,b=this.activeMenu.scrollTop(),h=this.activeMenu.height(),f=g.height(),0>j?this.activeMenu.scrollTop(b+j):j+f>h&&this.activeMenu.scrollTop(b+j-h+f))
},blur(b, c) {c||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",b,{item:this.active}))},_startOpening(b) {clearTimeout(this.timer),"true"===b.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(b)},this.delay))},_open(c) {var b=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden","true"),c.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)},collapseAll(c, b) {clearTimeout(this.timer),this.timer=this._delay(function(){var d=b?this.element:a(c&&c.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(c),this.activeMenu=d},this.delay)},_close(b) {b||(b=this.active?this.active.parent():this.element),b.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse(b) {var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);c&&c.length&&(this._close(),this.focus(b,c))},expand(b) {var c=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();c&&c.length&&(this._open(c.parent()),this._delay(function(){this.focus(b,c)}))},next(b) {this._move("next","first",b)},previous(b) {this._move("prev","last",b)},isFirstItem() {return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem() {return this.active&&!this.active.nextAll(".ui-menu-item").length},_move(c, f, b) {var d;this.active&&(d="first"===c||"last"===c?this.active["first"===c?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[c+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.children(".ui-menu-item")[f]()),this.focus(b,d)},nextPage(d) {
  var b;
  var c;
  var f;
  return this.active?(this.isLastItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return b=a(this),0>b.offset().top-c-f}),this.focus(d,b)):this.focus(d,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(d),undefined)
},previousPage(d) {
  var b;
  var c;
  var f;
  return this.active?(this.isFirstItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return b=a(this),b.offset().top-c+f>0}),this.focus(d,b)):this.focus(d,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(d),undefined)
},_hasScroll() {return this.element.outerHeight()<this.element.prop("scrollHeight")},select(c) {this.active=this.active||a(c.target).closest(".ui-menu-item");var b={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(c,!0),this._trigger("select",c,b)}})}))(jQuery);(((a, b) => {a.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create() {this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy() {this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value(c) {return c===b?this.options.value:(this.options.value=this._constrainedValue(c),this._refreshValue(),b)},_constrainedValue(c) {return c===b&&(c=this.options.value),this.indeterminate=c===!1,"number"!=typeof c&&(c=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,c))},_setOptions(c) {var d=c.value;delete c.value,this._super(c),this.options.value=this._constrainedValue(d),this._refreshValue()},_setOption(c, d) {"max"===c&&(d=Math.max(this.min,d)),this._super(c,d)},_percentage() {return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue() {
  var d=this.options.value;
  var c=this._percentage();
  this.valueDiv.toggle(this.indeterminate||d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":d}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==d&&(this.oldValue=d,this._trigger("change")),d===this.options.max&&this._trigger("complete")
}})}))(jQuery);((a => {var b=5;a.widget("ui.slider",a.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create() {this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh() {this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles() {
  var g;
  var d;
  var f=this.options;
  var j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all");
  var c="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
  var h=[];
  for(d=f.values&&f.values.length||1,j.length>d&&(j.slice(d).remove(),j=j.slice(0,d)),g=j.length;d>g;g++){h.push(c)}this.handles=j.add(a(h.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(i){a(this).data("ui-slider-handle-index",i)})
},_createRange() {
  var d=this.options;
  var c="";
  d.range?(d.range===!0&&(d.values?d.values.length&&2!==d.values.length?d.values=[d.values[0],d.values[0]]:a.isArray(d.values)&&(d.values=d.values.slice(0)):d.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===d.range||"max"===d.range?" ui-slider-range-"+d.range:""))):(this.range&&this.range.remove(),this.range=null)
},_setupEvents() {var c=this.handles.add(this.range).filter("a");this._off(c),this._on(c,this._handleEvents),this._hoverable(c),this._focusable(c)},_destroy() {this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture(p) {
  var k;
  var w;
  var g;
  var t;
  var f;
  var d;
  var j;
  var m;
  var v=this;
  var q=this.options;
  return q.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),k={x:p.pageX,y:p.pageY},w=this._normValueFromMouse(k),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(h){var c=Math.abs(w-v.values(h));(g>c||g===c&&(h===v._lastChangedValue||v.values(h)===q.min))&&(g=c,t=a(this),f=h)}),d=this._start(p,f),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=f,t.addClass("ui-state-active").focus(),j=t.offset(),m=!a(p.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=m?{left:0,top:0}:{left:p.pageX-j.left-t.width()/2,top:p.pageY-j.top-t.height()/2-(parseInt(t.css("borderTopWidth"),10)||0)-(parseInt(t.css("borderBottomWidth"),10)||0)+(parseInt(t.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(p,f,w),this._animateOff=!0,!0))
},_mouseStart() {return !0},_mouseDrag(d) {
  var f={x:d.pageX,y:d.pageY};
  var c=this._normValueFromMouse(f);
  return this._slide(d,this._handleIndex,c),!1
},_mouseStop(c) {return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(c,this._handleIndex),this._change(c,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation() {this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse(f) {
  var h;
  var d;
  var g;
  var j;
  var c;
  return"horizontal"===this.orientation?(h=this.elementSize.width,d=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(h=this.elementSize.height,d=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),g=d/h,g>1&&(g=1),0>g&&(g=0),"vertical"===this.orientation&&(g=1-g),j=this._valueMax()-this._valueMin(),c=this._valueMin()+g*j,this._trimAlignValue(c)
},_start(d, f) {var c={handle:this.handles[f],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._trigger("start",d,c)},_slide(f, h, d) {
  var g;
  var j;
  var c;
  this.options.values&&this.options.values.length?(g=this.values(h?0:1),2===this.options.values.length&&this.options.range===!0&&(0===h&&d>g||1===h&&g>d)&&(d=g),d!==this.values(h)&&(j=this.values(),j[h]=d,c=this._trigger("slide",f,{handle:this.handles[h],value:d,values:j}),g=this.values(h?0:1),c!==!1&&this.values(h,d))):d!==this.value()&&(c=this._trigger("slide",f,{handle:this.handles[h],value:d}),c!==!1&&this.value(d))
},_stop(d, f) {var c={handle:this.handles[f],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._trigger("stop",d,c)},_change(d, f) {if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[f],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._lastChangedValue=f,this._trigger("change",d,c)}},value(c) {return arguments.length?(this.options.value=this._trimAlignValue(c),this._refreshValue(),this._change(null,0),undefined):this._value()},values(g, d) {
  var f;
  var h;
  var c;
  if(arguments.length>1){return this.options.values[g]=this._trimAlignValue(d),this._refreshValue(),this._change(null,g),undefined}if(!arguments.length){return this._values()}if(!a.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(g):this.value()}for(f=this.options.values,h=arguments[0],c=0;f.length>c;c+=1){f[c]=this._trimAlignValue(h[c]),this._change(null,c)}this._refreshValue()
},_setOption(f, c) {
  var d;
  var g=0;
  switch("range"===f&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(g=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),f){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;g>d;d+=1){this._change(null,d)}this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}
},_value() {var c=this.options.value;return c=this._trimAlignValue(c)},_values(d) {
  var g;
  var c;
  var f;
  if(arguments.length){return g=this.options.values[d],g=this._trimAlignValue(g)}if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),f=0;c.length>f;f+=1){c[f]=this._trimAlignValue(c[f])}return c}return[]
},_trimAlignValue(d) {
  if(this._valueMin()>=d){return this._valueMin()}if(d>=this._valueMax()){return this._valueMax()}
  var g=this.options.step>0?this.options.step:1;
  var c=(d-this._valueMin())%g;
  var f=d-c;
  return 2*Math.abs(c)>=g&&(f+=c>0?g:-g),parseFloat(f.toFixed(5))
},_valueMin() {return this.options.min},_valueMax() {return this.options.max},_refreshValue() {
  var m;
  var j;
  var t;
  var f;
  var p;
  var d=this.options.range;
  var c=this.options;
  var g=this;
  var k=this._animateOff?!1:c.animate;
  var q={};
  this.options.values&&this.options.values.length?this.handles.each(function(e){j=100*((g.values(e)-g._valueMin())/(g._valueMax()-g._valueMin())),q["horizontal"===g.orientation?"left":"bottom"]=j+"%",a(this).stop(1,1)[k?"animate":"css"](q,c.animate),g.options.range===!0&&("horizontal"===g.orientation?(0===e&&g.range.stop(1,1)[k?"animate":"css"]({left:j+"%"},c.animate),1===e&&g.range[k?"animate":"css"]({width:j-m+"%"},{queue:!1,duration:c.animate})):(0===e&&g.range.stop(1,1)[k?"animate":"css"]({bottom:j+"%"},c.animate),1===e&&g.range[k?"animate":"css"]({height:j-m+"%"},{queue:!1,duration:c.animate}))),m=j}):(t=this.value(),f=this._valueMin(),p=this._valueMax(),j=p!==f?100*((t-f)/(p-f)):0,q["horizontal"===this.orientation?"left":"bottom"]=j+"%",this.handle.stop(1,1)[k?"animate":"css"](q,c.animate),"min"===d&&"horizontal"===this.orientation&&this.range.stop(1,1)[k?"animate":"css"]({width:j+"%"},c.animate),"max"===d&&"horizontal"===this.orientation&&this.range[k?"animate":"css"]({width:100-j+"%"},{queue:!1,duration:c.animate}),"min"===d&&"vertical"===this.orientation&&this.range.stop(1,1)[k?"animate":"css"]({height:j+"%"},c.animate),"max"===d&&"vertical"===this.orientation&&this.range[k?"animate":"css"]({height:100-j+"%"},{queue:!1,duration:c.animate}))
},_handleEvents:{keydown(d) {
  var e;
  var h;
  var c;
  var g;
  var f=a(d.target).data("ui-slider-handle-index");
  switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(d.target).addClass("ui-state-active"),e=this._start(d,f),e===!1)){return}}switch(g=this.options.step,h=c=this.options.values&&this.options.values.length?this.values(f):this.value(),d.keyCode){case a.ui.keyCode.HOME:c=this._valueMin();break;case a.ui.keyCode.END:c=this._valueMax();break;case a.ui.keyCode.PAGE_UP:c=this._trimAlignValue(h+(this._valueMax()-this._valueMin())/b);break;case a.ui.keyCode.PAGE_DOWN:c=this._trimAlignValue(h-(this._valueMax()-this._valueMin())/b);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===this._valueMax()){return}c=this._trimAlignValue(h+g);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===this._valueMin()){return}c=this._trimAlignValue(h-g)}this._slide(d,f,c)
},click(c) {c.preventDefault()},keyup(d) {var c=a(d.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(d,c),this._change(d,c),a(d.target).removeClass("ui-state-active"))}}})}))(jQuery);((a => {function b(c){return function(...args) {var d=this.element.val();c.apply(this,args),this._refresh(),d!==this.element.val()&&this._trigger("change")};}a.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create() {this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload() {this.element.removeAttr("autocomplete")}})},_getCreateOptions() {
  var d={};
  var c=this.element;
  return a.each(["min","max","step"],(e, f) => {var g=c.attr(f);void 0!==g&&g.length&&(d[f]=g)}),d;
},_events:{keydown(c) {this._start(c)&&this._keydown(c)&&c.preventDefault()},keyup:"_stop",focus() {this.previous=this.element.val()},blur(c) {return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",c),void 0)},mousewheel(c, d) {if(d){if(!this.spinning&&!this._start(c)){return !1}this._spin((d>0?1:-1)*this.options.step,c),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(c)},100),c.preventDefault()}},"mousedown .ui-spinner-button":function(f){function c(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=d,this._delay(function(){this.previous=d}))}var d;d=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),f.preventDefault(),c.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,c.call(this)}),this._start(f)!==!1&&this._repeat(null,a(f.currentTarget).hasClass("ui-spinner-up")?1:-1,f)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){return a(c.currentTarget).hasClass("ui-state-active")?this._start(c)===!1?!1:(this._repeat(null,a(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw() {var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(0.5*c.height())&&c.height()>0&&c.height(c.height()),this.options.disabled&&this.disable()},_keydown(f) {
  var c=this.options;
  var d=a.ui.keyCode;
  switch(f.keyCode){case d.UP:return this._repeat(null,1,f),!0;case d.DOWN:return this._repeat(null,-1,f),!0;case d.PAGE_UP:return this._repeat(null,c.page,f),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,f),!0}return !1
},_uiSpinnerHtml() {return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml() {return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start(c) {return this.spinning||this._trigger("start",c)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat(d, f, c) {d=d||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,f,c)},d),this._spin(f*this.options.step,c)},_spin(d, f) {var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+d*this._increment(this.counter)),this.spinning&&this._trigger("spin",f,{value:c})===!1||(this._value(c),this.counter++)},_increment(d) {var c=this.options.incremental;return c?a.isFunction(c)?c(d):Math.floor(d*d*d/50000-d*d/500+17*d/200+1):1},_precision() {var c=this._precisionOf(this.options.step);return null!==this.options.min&&(c=Math.max(c,this._precisionOf(this.options.min))),c},_precisionOf(d) {
  var f=""+d;
  var c=f.indexOf(".");
  return -1===c?0:f.length-c-1
},_adjustValue(d) {
  var g;
  var c;
  var f=this.options;
  return g=null!==f.min?f.min:0,c=d-g,c=Math.round(c/f.step)*f.step,d=g+c,d=parseFloat(d.toFixed(this._precision())),null!==f.max&&d>f.max?f.max:null!==f.min&&f.min>d?f.min:d
},_stop(c) {this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",c))},_setOption(d, f) {if("culture"===d||"numberFormat"===d){var c=this._parse(this.element.val());return this.options[d]=f,this.element.val(this._format(c)),void 0}("max"===d||"min"===d||"step"===d)&&"string"==typeof f&&(f=this._parse(f)),"icons"===d&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(f.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(f.down)),this._super(d,f),"disabled"===d&&(f?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:b(function(c){this._super(c),this._value(this.element.val())}),_parse(c) {return"string"==typeof c&&""!==c&&(c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c),""===c||isNaN(c)?null:c},_format(c) {return""===c?"":window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c},_refresh() {this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value(d, f) {var c;""!==d&&(c=this._parse(d),null!==c&&(f||(c=this._adjustValue(c)),d=this._format(c))),this.element.val(d),this._refresh()},_destroy() {this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:b(function(c){this._stepUp(c)}),_stepUp(c) {this._start()&&(this._spin((c||1)*this.options.step),this._stop())},stepDown:b(function(c){this._stepDown(c)}),_stepDown(c) {this._start()&&(this._spin((c||1)*-this.options.step),this._stop())},pageUp:b(function(c){this._stepUp((c||1)*this.options.page)}),pageDown:b(function(c){this._stepDown((c||1)*this.options.page)}),value(c) {return arguments.length?(b(this._value).call(this,c),void 0):this._parse(this.element.val())},widget() {return this.uiSpinner}})}))(jQuery);(((d, g) => {
  function c(){return ++h}function f(a){return a=a.cloneNode(!1),a.hash.length>1&&decodeURIComponent(a.href.replace(b,""))===decodeURIComponent(location.href.replace(b,""))}
  var h=0;
  var b=/#.*$/;
  d.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create() {
    var j=this;
    var a=this.options;
    this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",a.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){d(this).is(".ui-state-disabled")&&i.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){d(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),a.active=this._initialActive(),d.isArray(a.disabled)&&(a.disabled=d.unique(a.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"),e => j.tabs.index(e)))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):d(),this._refresh(),this.active.length&&this.load(a.active)
  },_initialActive() {
    var a=this.options.active;
    var e=this.options.collapsible;
    var j=location.hash.substring(1);
    return null===a&&(j&&this.tabs.each((k, i) => d(i).attr("aria-controls")===j?(a=k,!1):g),null===a&&(a=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===a||-1===a)&&(a=this.tabs.length?0:!1)),a!==!1&&(a=this.tabs.index(this.tabs.eq(a)),-1===a&&(a=e?!1:0)),!e&&a===!1&&this.anchors.length&&(a=0),a;
  },_getCreateEventData() {return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):d()}},_tabKeydown(j) {
    var k=d(this.document[0].activeElement).closest("li");
    var l=this.tabs.index(k);
    var e=!0;
    if(!this._handlePageNav(j)){switch(j.keyCode){case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:l++;break;case d.ui.keyCode.UP:case d.ui.keyCode.LEFT:e=!1,l--;break;case d.ui.keyCode.END:l=this.anchors.length-1;break;case d.ui.keyCode.HOME:l=0;break;case d.ui.keyCode.SPACE:return j.preventDefault(),clearTimeout(this.activating),this._activate(l),g;case d.ui.keyCode.ENTER:return j.preventDefault(),clearTimeout(this.activating),this._activate(l===this.options.active?!1:l),g;default:return}j.preventDefault(),clearTimeout(this.activating),l=this._focusNextTab(l,e),j.ctrlKey||(k.attr("aria-selected","false"),this.tabs.eq(l).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",l)},this.delay))}
  },_panelKeydown(a) {this._handlePageNav(a)||a.ctrlKey&&a.keyCode===d.ui.keyCode.UP&&(a.preventDefault(),this.active.focus())},_handlePageNav(a) {return a.altKey&&a.keyCode===d.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===d.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):g},_findNextTab(k, a) {function j(){return k>l&&(k=0),0>k&&(k=l),k}for(var l=this.tabs.length-1;-1!==d.inArray(j(),this.options.disabled);){k=a?k+1:k-1}return k},_focusNextTab(a, i) {return a=this._findNextTab(a,i),this.tabs.eq(a).focus(),a},_setOption(e, a) {return"active"===e?(this._activate(a),g):"disabled"===e?(this._setupDisabled(a),g):(this._super(e,a),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",a),a||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(a),"heightStyle"===e&&this._setupHeightStyle(a),g)},_tabId(a) {return a.attr("aria-controls")||"ui-tabs-"+c()},_sanitizeSelector(a) {return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh() {
    var j=this.options;
    var a=this.tablist.children(":has(a[href])");
    j.disabled=d.map(a.filter(".ui-state-disabled"),e => a.index(e)),this._processTabs(),j.active!==!1&&this.anchors.length?this.active.length&&!d.contains(this.tablist[0],this.active[0])?this.tabs.length===j.disabled.length?(j.active=!1,this.active=d()):this._activate(this._findNextTab(Math.max(0,j.active-1),!1)):j.active=this.tabs.index(this.active):(j.active=!1,this.active=d()),this._refresh()
  },_refresh() {this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs() {var a=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return d("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=d(),this.anchors.each((k, t) => {
    var j;
    var q;
    var p;
    var m=d(t).uniqueId().attr("id");
    var e=d(t).closest("li");
    var s=e.attr("aria-controls");
    f(t)?(j=t.hash,q=a.element.find(a._sanitizeSelector(j))):(p=a._tabId(e),j="#"+p,q=a.element.find(j),q.length||(q=a._createPanel(p),q.insertAfter(a.panels[k-1]||a.tablist)),q.attr("aria-live","polite")),q.length&&(a.panels=a.panels.add(q)),s&&e.data("ui-tabs-aria-controls",s),e.attr({"aria-controls":j.substring(1),"aria-labelledby":m}),q.attr("aria-labelledby",m)
  }),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList() {return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel(a) {return d("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled(k) {d.isArray(k)&&(k.length?k.length===this.anchors.length&&(k=!0):k=!1);for(var a,j=0;a=this.tabs[j];j++){k===!0||-1!==d.inArray(j,k)?d(a).addClass("ui-state-disabled").attr("aria-disabled","true"):d(a).removeClass("ui-state-disabled").removeAttr("aria-disabled")}this.options.disabled=k},_setupEvents(j) {var a={click(e) {e.preventDefault()}};j&&d.each(j.split(" "),(i, k) => {a[k]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle(k) {
    var a;
    var j=this.element.parent();
    "fill"===k?(a=j.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){
      var l=d(this);
      var i=l.css("position");
      "absolute"!==i&&"fixed"!==i&&(a-=l.outerHeight(!0))
    }),this.element.children().not(this.panels).each(function(){a-=d(this).outerHeight(!0)}),this.panels.each(function(){d(this).height(Math.max(0,a-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")):"auto"===k&&(a=0,this.panels.each(function(){a=Math.max(a,d(this).height("").height())}).height(a))
  },_eventHandler(u) {
    var q=this.options;
    var x=this.active;
    var m=d(u.currentTarget);
    var w=m.closest("li");
    var k=w[0]===x[0];
    var j=k&&q.collapsible;
    var t=j?d():this._getPanelForTab(w);
    var p=x.length?this._getPanelForTab(x):d();
    var v={oldTab:x,oldPanel:p,newTab:j?d():w,newPanel:t};
    u.preventDefault(),w.hasClass("ui-state-disabled")||w.hasClass("ui-tabs-loading")||this.running||k&&!q.collapsible||this._trigger("beforeActivate",u,v)===!1||(q.active=j?!1:this.tabs.index(w),this.active=k?d():w,this.xhr&&this.xhr.abort(),p.length||t.length||d.error("jQuery UI Tabs: Mismatching fragment identifier."),t.length&&this.load(this.tabs.index(w),u),this._toggle(u,v))
  },_toggle(p, k) {
    function l(){j.running=!1,j._trigger("activate",p,k)}function t(){k.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),q.length&&j.options.show?j._show(q,j.options.show,l):(q.show(),l())}
    var j=this;
    var q=k.newPanel;
    var m=k.oldPanel;
    this.running=!0,m.length&&this.options.hide?this._hide(m,this.options.hide,() => {k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),t()}):(k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),m.hide(),t()),m.attr({"aria-expanded":"false","aria-hidden":"true"}),k.oldTab.attr("aria-selected","false"),q.length&&m.length?k.oldTab.attr("tabIndex",-1):q.length&&this.tabs.filter(function(){return 0===d(this).attr("tabIndex")}).attr("tabIndex",-1),q.attr({"aria-expanded":"true","aria-hidden":"false"}),k.newTab.attr({"aria-selected":"true",tabIndex:0})
  },_activate(k) {
    var a;
    var j=this._findActive(k);
    j[0]!==this.active[0]&&(j.length||(j=this.active),a=j.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:d.noop}))
  },_findActive(a) {return a===!1?d():this.tabs.eq(a)},_getIndex(a) {return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy() {this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){d.data(this,"ui-tabs-destroy")?d(this).remove():d(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){
    var j=d(this);
    var a=j.data("ui-tabs-aria-controls");
    a?j.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):j.removeAttr("aria-controls")
  }),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable(a) {var e=this.options.disabled;e!==!1&&(a===g?e=!1:(a=this._getIndex(a),e=d.isArray(e)?d.map(e,i => i!==a?i:null):d.map(this.tabs,(i, j) => j!==a?j:null)),this._setupDisabled(e))},disable(a) {var e=this.options.disabled;if(e!==!0){if(a===g){e=!0}else{if(a=this._getIndex(a),-1!==d.inArray(a,e)){return}e=d.isArray(e)?d.merge([a],e).sort():[a]}this._setupDisabled(e)}},load(p, k) {
    p=this._getIndex(p);
    var s=this;
    var j=this.tabs.eq(p);
    var q=j.find(".ui-tabs-anchor");
    var m=this._getPanelForTab(j);
    var l={tab:j,panel:m};
    f(q[0])||(this.xhr=d.ajax(this._ajaxSettings(q,k,l)),this.xhr&&"canceled"!==this.xhr.statusText&&(j.addClass("ui-tabs-loading"),m.attr("aria-busy","true"),this.xhr.success(a => {setTimeout(() => {m.html(a),s._trigger("load",k,l)},1)}).complete((a, i) => {setTimeout(() => {"abort"===i&&s.panels.stop(!1,!0),j.removeClass("ui-tabs-loading"),m.removeAttr("aria-busy"),a===s.xhr&&delete s.xhr},1)})))
  },_ajaxSettings(k, a, j) {var l=this;return {url:k.attr("href"),beforeSend(m, i) {return l._trigger("beforeLoad",a,d.extend({jqXHR:m,ajaxSettings:i},j))}};},_getPanelForTab(j) {var a=d(j).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+a))}})
}))(jQuery);((b => {function d(h,f){var g=(h.attr("aria-describedby")||"").split(/\s+/);g.push(f),h.data("ui-tooltip-id",f).attr("aria-describedby",b.trim(g.join(" ")))}function a(h){
  var f=h.data("ui-tooltip-id");
  var g=(h.attr("aria-describedby")||"").split(/\s+/);
  var j=b.inArray(f,g);
  -1!==j&&g.splice(j,1),h.removeData("ui-tooltip-id"),g=b.trim(g.join(" ")),g?h.attr("aria-describedby",g):h.removeAttr("aria-describedby")
}var c=0;b.widget("ui.tooltip",{version:"1.10.4",options:{content() {var f=b(this).attr("title")||"";return b("<a>").text(f).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create() {this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption(h, f) {var g=this;return "disabled"===h?(this[f?"_disable":"_enable"](),this.options[h]=f,void 0):(this._super(h,f),"content"===h&&b.each(this.tooltips,(i, j) => {g._updateContent(j)}),void 0);},_disable() {var f=this;b.each(this.tooltips,(e, g) => {var h=b.Event("blur");h.target=h.currentTarget=g[0],f.close(h,!0)}),this.element.find(this.options.items).addBack().each(function(){var g=b(this);g.is("[title]")&&g.data("ui-tooltip-title",g.attr("title")).attr("title","")})},_enable() {this.element.find(this.options.items).addBack().each(function(){var f=b(this);f.data("ui-tooltip-title")&&f.attr("title",f.data("ui-tooltip-title"))})},open(h) {
  var f=this;
  var g=b(h?h.target:this.element).closest(this.options.items);
  g.length&&!g.data("ui-tooltip-id")&&(g.attr("title")&&g.data("ui-tooltip-title",g.attr("title")),g.data("ui-tooltip-open",!0),h&&"mouseover"===h.type&&g.parents().each(function(){
    var j;
    var i=b(this);
    i.data("ui-tooltip-open")&&(j=b.Event("blur"),j.target=j.currentTarget=this,f.close(j,!0)),i.attr("title")&&(i.uniqueId(),f.parents[this.id]={element:this,title:i.attr("title")},i.attr("title",""))
  }),this._updateContent(g,h))
},_updateContent(g, j) {
  var f;
  var h=this.options.content;
  var l=this;
  var k=j?j.type:null;
  return "string"==typeof h?this._open(j,g,h):(f=h.call(g[0],e => {g.data("ui-tooltip-open")&&l._delay(function(){j&&(j.type=k),this._open(j,g,e)})}),f&&this._open(j,g,f),void 0);
},_open(g, k, q) {
  function p(h){e.of=h,f.is(":hidden")||f.position(e)}
  var f;
  var m;
  var j;
  var e=b.extend({},this.options.position);
  if(q){if(f=this._find(k),f.length){return f.find(".ui-tooltip-content").html(q),void 0}k.is("[title]")&&(g&&"mouseover"===g.type?k.attr("title",""):k.removeAttr("title")),f=this._tooltip(k),d(k,f.attr("id")),f.find(".ui-tooltip-content").html(q),this.options.track&&g&&/^mouse/.test(g.type)?(this._on(this.document,{mousemove:p}),p(g)):f.position(b.extend({of:k},this.options.position)),f.hide(),this._show(f,this.options.show),this.options.show&&this.options.show.delay&&(j=this.delayedShow=setInterval(() => {f.is(":visible")&&(p(e.of),clearInterval(j))},b.fx.interval)),this._trigger("open",g,{tooltip:f}),m={keyup(l) {if(l.keyCode===b.ui.keyCode.ESCAPE){var h=b.Event(l);h.currentTarget=k[0],this.close(h,!0)}},remove() {this._removeTooltip(f)}},g&&"mouseover"!==g.type||(m.mouseleave="close"),g&&"focusin"!==g.type||(m.focusout="close"),this._on(!0,k,m)}
},close(g) {
  var f=this;
  var i=b(g?g.currentTarget:this.element);
  var h=this._find(i);
  this.closing||(clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),a(i),h.stop(!0),this._hide(h,this.options.hide,function(){f._removeTooltip(b(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),g&&"mouseleave"===g.type&&b.each(this.parents,(k, j) => {b(j.element).attr("title",j.title),delete f.parents[k]}),this.closing=!0,this._trigger("close",g,{tooltip:h}),this.closing=!1)
},_tooltip(g) {
  var f="ui-tooltip-"+c++;
  var h=b("<div>").attr({id:f,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
  return b("<div>").addClass("ui-tooltip-content").appendTo(h),h.appendTo(this.document[0].body),this.tooltips[f]=g,h
},_find(g) {var f=g.data("ui-tooltip-id");return f?b("#"+f):b()},_removeTooltip(e) {e.remove(),delete this.tooltips[e.attr("id")]},_destroy() {var f=this;b.each(this.tooltips,(e, g) => {var h=b.Event("blur");h.target=h.currentTarget=g[0],f.close(h,!0),b("#"+e).remove(),g.data("ui-tooltip-title")&&(g.attr("title",g.data("ui-tooltip-title")),g.removeData("ui-tooltip-title"))})}})}))(jQuery);(((b, c) => {var a="ui-effects-";b.effects={effect:{}},((D, y) => {
  function v(f,l,d){var h=C[l.type]||{};return null==f?d||!l.def?null:l.def:(f=h.floor?~~f:parseFloat(f),isNaN(f)?l.def:h.mod?(f+h.mod)%h.mod:0>f?0:f>h.max?h.max:f)}function E(d){
    var e=w();
    var f=e._rgba=[];
    return d=d.toLowerCase(),x(q,(p, n) => {
      var F;
      var u=n.re.exec(d);
      var i=u&&n.parse(u);
      var s=n.space||"rgba";
      return i?(F=e[s](i),e[A[s].cache]=F[A[s].cache],f=e._rgba=F._rgba,!1):y
    }),f.length?("0,0,0,0"===f.join()&&D.extend(f,B.transparent),e):B[d];
  }function m(f,h,d){return d=(d+1)%1,1>6*d?f+6*(h-f)*d:1>2*d?h:2>3*d?f+6*(h-f)*(2/3-d):f}
  var B;
  var k="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor";
  var g=/^([\-+])=\s*(\d+\.?\d*)/;
  var q=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse(d) {return[d[1],d[2],d[3],d[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse(d) {return[2.55*d[1],2.55*d[2],2.55*d[3],d[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse(d) {return[parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse(d) {return[parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse(d) {return[d[1],d[2]/100,d[3]/100,d[4]]}}];
  var w=D.Color=(h, d, f, l) => new D.Color.fn.parse(h,d,f,l);
  var A={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}};
  var C={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}};
  var z=w.support={};
  var j=D("<p>")[0];
  var x=D.each;
  j.style.cssText="background-color:rgba(1,1,1,.5)",z.rgba=j.style.backgroundColor.indexOf("rgba")>-1,x(A,(d, f) => {f.cache="_"+d,f.props.alpha={idx:3,type:"percent",def:1}}),w.fn=D.extend(w.prototype,{parse(F, t, h, e) {
    if(F===y){return this._rgba=[null,null,null,null],this}(F.jquery||F.nodeType)&&(F=D(F).css(t),t=y);
    var f=this;
    var s=D.type(F);
    var i=this._rgba=[];
    return t!==y&&(F=[F,t,h,e],s="array"),"string"===s?this.parse(E(F)||B._default):"array"===s?(x(A.rgba.props,(d, l) => {i[l.idx]=v(F[l.idx],l)}),this):"object"===s?(F instanceof w?x(A,(d, l) => {F[l.cache]&&(f[l.cache]=F[l.cache].slice())}):x(A,(n, l) => {var d=l.cache;x(l.props,(o, p) => {if(!f[d]&&l.to){if("alpha"===o||null==F[o]){return}f[d]=l.to(f._rgba)}f[d][p.idx]=v(F[o],p,!0)}),f[d]&&0>D.inArray(null,f[d].slice(0,3))&&(f[d][3]=1,l.from&&(f._rgba=l.from(f[d])))}),this):y;
  },is(e) {
    var d=w(e);
    var f=!0;
    var h=this;
    return x(A,(l, i) => {
      var p;
      var n=d[i.cache];
      return n&&(p=h[i.cache]||i.to&&i.to(h._rgba)||[],x(i.props,(r, o) => null!=n[o.idx]?f=n[o.idx]===p[o.idx]:y)),f;
    }),f;
  },_space() {
    var d=[];
    var f=this;
    return x(A,(e, h) => {f[h.cache]&&d.push(e)}),d.pop();
  },transition(h, u) {
    var i=w(h);
    var G=i._space();
    var f=A[G];
    var F=0===this.alpha()?w("transparent"):this;
    var p=F[f.cache]||f.to(F._rgba);
    var d=p.slice();
    return i=i[f.cache],x(f.props,(l, I) => {
      var e=I.idx;
      var s=p[e];
      var r=i[e];
      var H=C[I.type]||{};
      null!==r&&(null===s?d[e]=r:(H.mod&&(r-s>H.mod/2?s+=H.mod:s-r>H.mod/2&&(s-=H.mod)),d[e]=v((r-s)*u+s,I)))
    }),this[G](d);
  },blend(h) {
    if(1===this._rgba[3]){return this}
    var d=this._rgba.slice();
    var f=d.pop();
    var l=w(h)._rgba;
    return w(D.map(d,(i, n) => (1-f)*l[n]+f*i));
  },toRgbaString() {
    var f="rgba(";
    var d=D.map(this._rgba,(h, i) => null==h?i>2?1:0:h);
    return 1===d[3]&&(d.pop(),f="rgb("),f+d.join()+")"
  },toHslaString() {
    var f="hsla(";
    var d=D.map(this.hsla(),(h, i) => (null==h&&(h=i>2?1:0), i&&3>i&&(h=Math.round(100*h)+"%"), h));
    return 1===d[3]&&(d.pop(),f="hsl("),f+d.join()+")"
  },toHexString(h) {
    var d=this._rgba.slice();
    var f=d.pop();
    return h&&d.push(~~(255*f)),"#"+D.map(d,e => (e=(e||0).toString(16), 1===e.length?"0"+e:e)).join("");
  },toString() {return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),w.fn.parse.prototype=w.fn,A.hsla.to=M => {
    if(null==M[0]||null==M[1]||null==M[2]){return[null,null,null,M[3]]}
    var I;
    var G;
    var N=M[0]/255;
    var p=M[1]/255;
    var K=M[2]/255;
    var f=M[3];
    var d=Math.max(N,p,K);
    var F=Math.min(N,p,K);
    var H=d-F;
    var J=d+F;
    var L=0.5*J;
    return I=F===d?0:N===d?60*(p-K)/H+360:p===d?60*(K-N)/H+120:60*(N-p)/H+240,G=0===H?0:0.5>=L?H/J:H/(2-J),[Math.round(I)%360,G,L,null==f?1:f]
  },A.hsla.from=h => {
    if(null==h[0]||null==h[1]||null==h[2]){return[null,null,null,h[3]]}
    var p=h[0]/360;
    var f=h[1];
    var l=h[2];
    var d=h[3];
    var u=0.5>=l?l*(1+f):l+f-l*f;
    var n=2*l-u;
    return[Math.round(255*m(n,u,p+1/3)),Math.round(255*m(n,u,p)),Math.round(255*m(n,u,p-1/3)),d]
  },x(A,(f, p) => {
    var e=p.props;
    var h=p.cache;
    var d=p.to;
    var i=p.from;
    w.fn[f]=function(o){
      if(d&&!this[h]&&(this[h]=d(this._rgba)),o===y){return this[h].slice()}
      var G;
      var t=D.type(o);
      var l="array"===t||"object"===t?o:arguments;
      var F=this[h].slice();
      return x(e,(n, u) => {var r=l["object"===t?n:u.idx];null==r&&(r=F[u.idx]),F[u.idx]=v(r,u)}),i?(G=w(i(F)),G[h]=F,G):w(F);
    },x(e,(n, l) => {w.fn[n]||(w.fn[n]=function(G){
      var s;
      var u=D.type(G);
      var r="alpha"===n?this._hsla?"hsla":"rgba":f;
      var t=this[r]();
      var F=t[l.idx];
      return"undefined"===u?F:("function"===u&&(G=G.call(this,F),u=D.type(G)),null==G&&l.empty?this:("string"===u&&(s=g.exec(G),s&&(G=F+parseFloat(s[2])*("+"===s[1]?1:-1))),t[l.idx]=G,this[r](t)))
    })})
  }),w.hook=f => {var d=f.split(" ");x(d,(l, h) => {D.cssHooks[h]={set(t, F) {
    var p;
    var u;
    var s="";
    if("transparent"!==F&&("string"!==D.type(F)||(p=E(F)))){if(F=w(p||F),!z.rgba&&1!==F._rgba[3]){for(u="backgroundColor"===h?t.parentNode:t;(""===s||"transparent"===s)&&u&&u.style;){try{s=D.css(u,"backgroundColor"),u=u.parentNode}catch(i){}}F=F.blend(s&&"transparent"!==s?s:"_default")}F=F.toRgbaString()}try{t.style[h]=F}catch(i){}
  }},D.fx.step[h]=i => {i.colorInit||(i.start=w(i.elem,h),i.end=w(i.end),i.colorInit=!0),D.cssHooks[h].set(i.elem,i.start.transition(i.end,i.pos))}})},w.hook(k),D.cssHooks.borderColor={expand(d) {var f={};return x(["Top","Right","Bottom","Left"],(e, h) => {f["border"+h+"Color"]=d}),f;}},B=D.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery),(() => {
  function e(l){
    var j;
    var k;
    var m=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle;
    var h={};
    if(m&&m.length&&m[0]&&m[m[0]]){for(k=m.length;k--;){j=m[k],"string"==typeof m[j]&&(h[b.camelCase(j)]=m[j])}}else{for(j in m){"string"==typeof m[j]&&(h[j]=m[j])}}return h
  }function f(k,h){
    var j;
    var m;
    var l={};
    for(j in h){m=h[j],k[j]!==m&&(d[j]||(b.fx.step[j]||!isNaN(parseFloat(m)))&&(l[j]=m))}return l
  }
  var g=["add","remove","toggle"];
  var d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
  b.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(j, h) => {b.fx.step[h]=i => {("none"!==i.end&&!i.setAttr||1===i.pos&&!i.setAttr)&&(jQuery.style(i.elem,h,i.end),i.setAttr=!0)}}),b.fn.addBack||(b.fn.addBack=function(h){return this.add(null==h?this.prevObject:this.prevObject.filter(h))}),b.effects.animateClass=function(k,i,m,j){var h=b.speed(i,m,j);return this.queue(function(){
    var l;
    var q=b(this);
    var p=q.attr("class")||"";
    var n=h.children?q.find("*").addBack():q;
    n=n.map(function(){var o=b(this);return{el:o,start:e(this)}}),l=() => {b.each(g,(r, o) => {k[o]&&q[o+"Class"](k[o])})},l(),n=n.map(function(){return this.end=e(this.el[0]),this.diff=f(this.start,this.end),this}),q.attr("class",p),n=n.map(function(){
      var t=this;
      var o=b.Deferred();
      var r=b.extend({},h,{queue:!1,complete() {o.resolve(t)}});
      return this.el.animate(this.diff,r),o.promise()
    }),b.when(...n.get()).done(function(...args) {l(),b.each(args,function(){var o=this.el;b.each(this.diff,r => {o.css(r,"")})}),h.complete.call(q[0])})
  });},b.fn.extend({addClass:(h => function(k,l,m,j){return l?b.effects.animateClass.call(this,{add:k},l,m,j):h.apply(this,arguments)})(b.fn.addClass),removeClass:(h => function(k,l,m,j){return arguments.length>1?b.effects.animateClass.call(this,{remove:k},l,m,j):h.apply(this,arguments)})(b.fn.removeClass),toggleClass:(h => function(j,m,i,l,k){return"boolean"==typeof m||m===c?i?b.effects.animateClass.call(this,m?{add:j}:{remove:j},i,l,k):h.apply(this,arguments):b.effects.animateClass.call(this,{toggle:j},m,i,l)})(b.fn.toggleClass),switchClass(l, j, k, m, h) {return b.effects.animateClass.call(this,{add:j,remove:l},k,m,h)}})
})(),(() => {function d(h,f,g,j){return b.isPlainObject(h)&&(f=h,h=h.effect),h={effect:h},null==f&&(f={}),b.isFunction(f)&&(j=f,g=null,f={}),("number"==typeof f||b.fx.speeds[f])&&(j=g,g=f,f={}),b.isFunction(g)&&(j=g,g=null),f&&b.extend(h,f),g=g||f.duration,h.duration=b.fx.off?0:"number"==typeof g?g:g in b.fx.speeds?b.fx.speeds[g]:b.fx.speeds._default,h.complete=j||f.complete,h}function e(f){return !f||"number"==typeof f||b.fx.speeds[f]?!0:"string"!=typeof f||b.effects.effect[f]?b.isFunction(f)?!0:"object"!=typeof f||f.effect?!1:!0:!0}b.extend(b.effects,{version:"1.10.4",save(f, h) {for(var g=0;h.length>g;g++){null!==h[g]&&f.data(a+h[g],f[0].style[h[g]])}},restore(g, h) {
  var i;
  var f;
  for(f=0;h.length>f;f++){null!==h[f]&&(i=g.data(a+h[f]),i===c&&(i=""),g.css(h[f],i))}
},setMode(f, g) {return"toggle"===g&&(g=f.is(":hidden")?"show":"hide"),g},getBaseline(g, j) {
  var f;
  var h;
  switch(g[0]){case"top":f=0;break;case"middle":f=0.5;break;case"bottom":f=1;break;default:f=g[0]/j.height}switch(g[1]){case"left":h=0;break;case"center":h=0.5;break;case"right":h=1;break;default:h=g[1]/j.width}return{x:h,y:f}
},createWrapper(j) {
  if(j.parent().is(".ui-effects-wrapper")){return j.parent()}
  var g={width:j.outerWidth(!0),height:j.outerHeight(!0),"float":j.css("float")};
  var h=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
  var l={width:j.width(),height:j.height()};
  var f=document.activeElement;
  try{f.id}catch(k){f=document.body}return j.wrap(h),(j[0]===f||b.contains(j[0],f))&&b(f).focus(),h=j.parent(),"static"===j.css("position")?(h.css({position:"relative"}),j.css({position:"relative"})):(b.extend(g,{position:j.css("position"),zIndex:j.css("z-index")}),b.each(["top","left","bottom","right"],(i, m) => {g[m]=j.css(m),isNaN(parseInt(g[m],10))&&(g[m]="auto")}),j.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),j.css(l),h.css(g).show();
},removeWrapper(g) {var f=document.activeElement;return g.parent().is(".ui-effects-wrapper")&&(g.parent().replaceWith(g),(g[0]===f||b.contains(g[0],f))&&b(f).focus()),g},setTransition(h, f, g, j) {return j=j||{},b.each(f,(m, l) => {var k=h.cssUnit(l);k[0]>0&&(j[l]=k[0]*g+k[1])}),j;}}),b.fn.extend({effect(...args) {
  function h(o){
    function l(){b.isFunction(i)&&i.call(p[0]),b.isFunction(o)&&o()}
    var p=b(this);
    var i=g.complete;
    var m=g.mode;
    (p.is(":hidden")?"hide"===m:"show"===m)?(p[m](),l()):j.call(p[0],g,l)
  }
  var g=d.apply(this,args);
  var k=g.mode;
  var f=g.queue;
  var j=b.effects.effect[g.effect];
  return b.fx.off||!j?k?this[k](g.duration,g.complete):this.each(function(){g.complete&&g.complete.call(this)}):f===!1?this.each(h):this.queue(f||"fx",h)
},show:(f => function(h){if(e(h)){return f.apply(this,arguments)}var g=d.apply(this,arguments);return g.mode="show",this.effect.call(this,g)})(b.fn.show),hide:(f => function(h){if(e(h)){return f.apply(this,arguments)}var g=d.apply(this,arguments);return g.mode="hide",this.effect.call(this,g)})(b.fn.hide),toggle:(f => function(h){if(e(h)||"boolean"==typeof h){return f.apply(this,arguments)}var g=d.apply(this,arguments);return g.mode="toggle",this.effect.call(this,g)})(b.fn.toggle),cssUnit(h) {
  var f=this.css(h);
  var g=[];
  return b.each(["em","px","%","pt"],(i, j) => {f.indexOf(j)>0&&(g=[parseFloat(f),j])}),g;
}})})(),(() => {var d={};b.each(["Quad","Cubic","Quart","Quint","Expo"],(f, e) => {d[e]=g => g ** (f + 2)}),b.extend(d,{Sine(e) {return 1-Math.cos(e*Math.PI/2)},Circ(e) {return 1-Math.sqrt(1-e*e)},Elastic(e) {return 0===e||1===e?e:-(2 ** (8 * (e - 1)))*Math.sin((80*(e-1)-7.5)*Math.PI/15);},Back(e) {return e*e*(3*e-2)},Bounce(g) {for(var h,f=4;((h=2 ** --f)-1)/11>g;){}return 1/(4 ** (3 - f))-7.5625*(((3*h-2)/22 - g) ** 2);}}),b.each(d,(g, f) => {b.easing["easeIn"+g]=f,b.easing["easeOut"+g]=e => 1-f(1-e),b.easing["easeInOut"+g]=e => 0.5>e?f(2*e)/2:1-f(-2*e+2)/2})})()}))(jQuery);((b => {
  var c=/up|down|vertical/;
  var a=/up|left|vertical|horizontal/;
  b.effects.effect.blind=function(E,k){
    var B;
    var j;
    var e;
    var t=b(this);
    var w=["position","top","bottom","left","right","height","width"];
    var A=b.effects.setMode(t,E.mode||"hide");
    var D=E.direction||"up";
    var z=c.test(D);
    var i=z?"height":"width";
    var y=z?"top":"left";
    var x=a.test(D);
    var q={};
    var C="show"===A;
    t.parent().is(".ui-effects-wrapper")?b.effects.save(t.parent(),w):b.effects.save(t,w),t.show(),B=b.effects.createWrapper(t).css({overflow:"hidden"}),j=B[i](),e=parseFloat(B.css(y))||0,q[i]=C?j:0,x||(t.css(z?"bottom":"right",0).css(z?"top":"left","auto").css({position:"absolute"}),q[y]=C?e:j+e),C&&(B.css(i,0),x||B.css(y,e+j)),B.animate(q,{duration:E.duration,easing:E.easing,queue:!1,complete() {"hide"===A&&t.hide(),b.effects.restore(t,w),b.effects.removeWrapper(t),k()}})
  }
}))(jQuery);((a => {a.effects.effect.bounce=function(H,D){
  var t;
  var A;
  var L;
  var z=a(this);
  var w=["position","top","bottom","left","right","height","width"];
  var C=a.effects.setMode(z,H.mode||"effect");
  var E="hide"===C;
  var J="show"===C;
  var q=H.direction||"up";
  var I=H.distance;
  var x=H.times||5;
  var G=2*x+(J||E?1:0);
  var F=H.duration/G;
  var B=H.easing;
  var k="up"===q||"down"===q?"top":"left";
  var M="up"===q||"left"===q;
  var K=z.queue();
  var j=K.length;
  for((J||E)&&w.push("opacity"),a.effects.save(z,w),z.show(),a.effects.createWrapper(z),I||(I=z["top"===k?"outerHeight":"outerWidth"]()/3),J&&(L={opacity:1},L[k]=0,z.css("opacity",0).css(k,M?2*-I:2*I).animate(L,F,B)),E&&(I/=2 ** (x - 1)),L={},L[k]=0,t=0;x>t;t++){A={},A[k]=(M?"-=":"+=")+I,z.animate(A,F,B).animate(L,F,B),I=E?2*I:I/2}E&&(A={opacity:0},A[k]=(M?"-=":"+=")+I,z.animate(A,F,B)),z.queue(() => {E&&z.hide(),a.effects.restore(z,w),a.effects.removeWrapper(z),D()}),j>1&&K.splice(...[1,0].concat(K.splice(j,G+1))),z.dequeue()
}}))(jQuery);((a => {a.effects.effect.clip=function(w,q){
  var B;
  var k;
  var z;
  var j=a(this);
  var b=["position","top","bottom","left","right","height","width"];
  var m=a.effects.setMode(j,w.mode||"hide");
  var t="show"===m;
  var y=w.direction||"vertical";
  var A="vertical"===y;
  var x=A?"height":"width";
  var g=A?"top":"left";
  var v={};
  a.effects.save(j,b),j.show(),B=a.effects.createWrapper(j).css({overflow:"hidden"}),k="IMG"===j[0].tagName?B:j,z=k[x](),t&&(k.css(x,0),k.css(g,z/2)),v[x]=t?z:0,v[g]=t?0:z/2,k.animate(v,{queue:!1,duration:w.duration,easing:w.easing,complete() {t||j.hide(),a.effects.restore(j,b),a.effects.removeWrapper(j),q()}})
}}))(jQuery);((a => {a.effects.effect.drop=function(m,j){
  var v;
  var f=a(this);
  var q=["position","top","bottom","left","right","opacity","height","width"];
  var d=a.effects.setMode(f,m.mode||"hide");
  var b="show"===d;
  var g=m.direction||"left";
  var k="up"===g||"down"===g?"top":"left";
  var p="up"===g||"left"===g?"pos":"neg";
  var t={opacity:b?1:0};
  a.effects.save(f,q),f.show(),a.effects.createWrapper(f),v=m.distance||f["top"===k?"outerHeight":"outerWidth"](!0)/2,b&&f.css("opacity",0).css(k,"pos"===p?-v:v),t[k]=(b?"pos"===p?"+=":"-=":"pos"===p?"-=":"+=")+v,f.animate(t,{queue:!1,duration:m.duration,easing:m.easing,complete() {"hide"===d&&f.hide(),a.effects.restore(f,q),a.effects.removeWrapper(f),j()}})
}}))(jQuery);((a => {a.effects.effect.explode=function(F,B){
  function q(){I.push(this),I.length===k*G&&y()}function y(){w.css({visibility:"visible"}),a(I).remove(),D||w.hide(),B()}
  var J;
  var x;
  var t;
  var A;
  var C;
  var H;
  var k=F.pieces?Math.round(Math.sqrt(F.pieces)):3;
  var G=k;
  var w=a(this);
  var E=a.effects.setMode(w,F.mode||"hide");
  var D="show"===E;
  var z=w.show().css("visibility","hidden").offset();
  var j=Math.ceil(w.outerWidth()/G);
  var K=Math.ceil(w.outerHeight()/k);
  var I=[];
  for(J=0;k>J;J++){for(A=z.top+J*K,H=J-(k-1)/2,x=0;G>x;x++){t=z.left+x*j,C=x-(G-1)/2,w.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-x*j,top:-J*K}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:j,height:K,left:t+(D?C*j:0),top:A+(D?H*K:0),opacity:D?0:1}).animate({left:t+(D?0:C*j),top:A+(D?0:H*K),opacity:D?1:0},F.duration||500,F.easing,q)}}
}}))(jQuery);((a => {a.effects.effect.fade=function(d,b){
  var c=a(this);
  var f=a.effects.setMode(c,d.mode||"toggle");
  c.animate({opacity:f},{queue:!1,duration:d.duration,easing:d.easing,complete:b})
}}))(jQuery);((a => {a.effects.effect.fold=function(B,x){
  var H;
  var q;
  var E=a(this);
  var k=["position","top","bottom","left","right","height","width"];
  var b=a.effects.setMode(E,B.mode||"hide");
  var w="show"===b;
  var y="hide"===b;
  var D=B.size||15;
  var G=/([0-9]+)%/.exec(D);
  var C=!!B.horizFirst;
  var j=w!==C;
  var A=j?["width","height"]:["height","width"];
  var z=B.duration/2;
  var t={};
  var F={};
  a.effects.save(E,k),E.show(),H=a.effects.createWrapper(E).css({overflow:"hidden"}),q=j?[H.width(),H.height()]:[H.height(),H.width()],G&&(D=parseInt(G[1],10)/100*q[y?0:1]),w&&H.css(C?{height:0,width:D}:{height:D,width:0}),t[A[0]]=w?q[0]:D,F[A[1]]=w?q[1]:0,H.animate(t,z,B.easing).animate(F,z,B.easing,() => {y&&E.hide(),a.effects.restore(E,k),a.effects.removeWrapper(E),x()})
}}))(jQuery);((a => {a.effects.effect.highlight=function(f,c){
  var d=a(this);
  var h=["backgroundImage","backgroundColor","opacity"];
  var b=a.effects.setMode(d,f.mode||"show");
  var g={backgroundColor:d.css("backgroundColor")};
  "hide"===b&&(g.opacity=0),a.effects.save(d,h),d.show().css({backgroundImage:"none",backgroundColor:f.color||"#ffff99"}).animate(g,{queue:!1,duration:f.duration,easing:f.easing,complete() {"hide"===b&&d.hide(),a.effects.restore(d,h),c()}})
}}))(jQuery);((a => {a.effects.effect.pulsate=function(t,m){
  var z;
  var j=a(this);
  var x=a.effects.setMode(j,t.mode||"show");
  var g="show"===x;
  var b="hide"===x;
  var k=g||"hide"===x;
  var q=2*(t.times||5)+(k?1:0);
  var w=t.duration/q;
  var y=0;
  var v=j.queue();
  var f=v.length;
  for((g||!j.is(":visible"))&&(j.css("opacity",0).show(),y=1),z=1;q>z;z++){j.animate({opacity:y},w,t.easing),y=1-y}j.animate({opacity:y},w,t.easing),j.queue(() => {b&&j.hide(),m()}),f>1&&v.splice(...[1,0].concat(v.splice(f,q+1))),j.dequeue()
}}))(jQuery);((a => {a.effects.effect.puff=function(h,d){
  var f=a(this);
  var k=a.effects.setMode(f,h.mode||"hide");
  var c="hide"===k;
  var j=parseInt(h.percent,10)||150;
  var g=j/100;
  var b={height:f.height(),width:f.width(),outerHeight:f.outerHeight(),outerWidth:f.outerWidth()};
  a.extend(h,{effect:"scale",queue:!1,fade:!0,mode:k,complete:d,percent:c?j:100,from:c?b:{height:b.height*g,width:b.width*g,outerHeight:b.outerHeight*g,outerWidth:b.outerWidth*g}}),f.effect(h)
},a.effects.effect.scale=function(m,j){
  var t=a(this);
  var f=a.extend(!0,{},m);
  var q=a.effects.setMode(t,m.mode||"effect");
  var d=parseInt(m.percent,10)||(0===parseInt(m.percent,10)?0:"hide"===q?0:100);
  var b=m.direction||"both";
  var g=m.origin;
  var k={height:t.height(),width:t.width(),outerHeight:t.outerHeight(),outerWidth:t.outerWidth()};
  var p={y:"horizontal"!==b?d/100:1,x:"vertical"!==b?d/100:1};
  f.effect="size",f.queue=!1,f.complete=j,"effect"!==q&&(f.origin=g||["middle","center"],f.restore=!0),f.from=m.from||("show"===q?{height:0,width:0,outerHeight:0,outerWidth:0}:k),f.to={height:k.height*p.y,width:k.width*p.x,outerHeight:k.outerHeight*p.y,outerWidth:k.outerWidth*p.x},f.fade&&("show"===q&&(f.from.opacity=0,f.to.opacity=1),"hide"===q&&(f.from.opacity=1,f.to.opacity=0)),t.effect(f)
},a.effects.effect.size=function(F,B){
  var q;
  var y;
  var J;
  var x=a(this);
  var t=["position","top","bottom","left","right","width","height","overflow","opacity"];
  var A=["position","top","bottom","left","right","overflow","opacity"];
  var C=["width","height","overflow"];
  var H=["fontSize"];
  var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];
  var G=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];
  var w=a.effects.setMode(x,F.mode||"effect");
  var E=F.restore||"effect"!==w;
  var D=F.scale||"both";
  var z=F.origin||["middle","center"];
  var j=x.css("position");
  var K=E?t:A;
  var I={height:0,width:0,outerHeight:0,outerWidth:0};
  "show"===w&&x.show(),q={height:x.height(),width:x.width(),outerHeight:x.outerHeight(),outerWidth:x.outerWidth()},"toggle"===F.mode&&"show"===w?(x.from=F.to||I,x.to=F.from||q):(x.from=F.from||("show"===w?I:q),x.to=F.to||("hide"===w?I:q)),J={from:{y:x.from.height/q.height,x:x.from.width/q.width},to:{y:x.to.height/q.height,x:x.to.width/q.width}},("box"===D||"both"===D)&&(J.from.y!==J.to.y&&(K=K.concat(k),x.from=a.effects.setTransition(x,k,J.from.y,x.from),x.to=a.effects.setTransition(x,k,J.to.y,x.to)),J.from.x!==J.to.x&&(K=K.concat(G),x.from=a.effects.setTransition(x,G,J.from.x,x.from),x.to=a.effects.setTransition(x,G,J.to.x,x.to))),("content"===D||"both"===D)&&J.from.y!==J.to.y&&(K=K.concat(H).concat(C),x.from=a.effects.setTransition(x,H,J.from.y,x.from),x.to=a.effects.setTransition(x,H,J.to.y,x.to)),a.effects.save(x,K),x.show(),a.effects.createWrapper(x),x.css("overflow","hidden").css(x.from),z&&(y=a.effects.getBaseline(z,q),x.from.top=(q.outerHeight-x.outerHeight())*y.y,x.from.left=(q.outerWidth-x.outerWidth())*y.x,x.to.top=(q.outerHeight-x.to.outerHeight)*y.y,x.to.left=(q.outerWidth-x.to.outerWidth)*y.x),x.css(x.from),("content"===D||"both"===D)&&(k=k.concat(["marginTop","marginBottom"]).concat(H),G=G.concat(["marginLeft","marginRight"]),C=t.concat(k).concat(G),x.find("*[width]").each(function(){
    var b=a(this);
    var c={height:b.height(),width:b.width(),outerHeight:b.outerHeight(),outerWidth:b.outerWidth()};
    E&&a.effects.save(b,C),b.from={height:c.height*J.from.y,width:c.width*J.from.x,outerHeight:c.outerHeight*J.from.y,outerWidth:c.outerWidth*J.from.x},b.to={height:c.height*J.to.y,width:c.width*J.to.x,outerHeight:c.height*J.to.y,outerWidth:c.width*J.to.x},J.from.y!==J.to.y&&(b.from=a.effects.setTransition(b,k,J.from.y,b.from),b.to=a.effects.setTransition(b,k,J.to.y,b.to)),J.from.x!==J.to.x&&(b.from=a.effects.setTransition(b,G,J.from.x,b.from),b.to=a.effects.setTransition(b,G,J.to.x,b.to)),b.css(b.from),b.animate(b.to,F.duration,F.easing,() => {E&&a.effects.restore(b,C)})
  })),x.animate(x.to,{queue:!1,duration:F.duration,easing:F.easing,complete() {0===x.to.opacity&&x.css("opacity",x.from.opacity),"hide"===w&&x.hide(),a.effects.restore(x,K),E||("static"===j?x.css({position:"relative",top:x.to.top,left:x.to.left}):a.each(["top","left"],(b, c) => {x.css(c,(g, d) => {
    var f=parseInt(d,10);
    var h=b?x.to.left:x.to.top;
    return"auto"===d?h+"px":f+h+"px"
  })})),a.effects.removeWrapper(x),B()}})
}}))(jQuery);((a => {a.effects.effect.shake=function(E,A){
  var k;
  var x=a(this);
  var H=["position","top","bottom","left","right","height","width"];
  var w=a.effects.setMode(x,E.mode||"effect");
  var q=E.direction||"left";
  var z=E.distance||20;
  var B=E.times||3;
  var G=2*B+1;
  var j=Math.round(E.duration/G);
  var F="up"===q||"down"===q?"top":"left";
  var t="up"===q||"left"===q;
  var D={};
  var C={};
  var y={};
  var b=x.queue();
  var I=b.length;
  for(a.effects.save(x,H),x.show(),a.effects.createWrapper(x),D[F]=(t?"-=":"+=")+z,C[F]=(t?"+=":"-=")+2*z,y[F]=(t?"-=":"+=")+2*z,x.animate(D,j,E.easing),k=1;B>k;k++){x.animate(C,j,E.easing).animate(y,j,E.easing)}x.animate(C,j,E.easing).animate(D,j/2,E.easing).queue(() => {"hide"===w&&x.hide(),a.effects.restore(x,H),a.effects.removeWrapper(x),A()}),I>1&&b.splice(...[1,0].concat(b.splice(I,G+1))),x.dequeue()
}}))(jQuery);((a => {a.effects.effect.slide=function(m,j){
  var v;
  var f=a(this);
  var q=["position","top","bottom","left","right","width","height"];
  var d=a.effects.setMode(f,m.mode||"show");
  var b="show"===d;
  var g=m.direction||"left";
  var k="up"===g||"down"===g?"top":"left";
  var p="up"===g||"left"===g;
  var t={};
  a.effects.save(f,q),f.show(),v=m.distance||f["top"===k?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(f).css({overflow:"hidden"}),b&&f.css(k,p?isNaN(v)?"-"+v:-v:v),t[k]=(b?p?"+=":"-=":p?"-=":"+=")+v,f.animate(t,{queue:!1,duration:m.duration,easing:m.easing,complete() {"hide"===d&&f.hide(),a.effects.restore(f,q),a.effects.removeWrapper(f),j()}})
}}))(jQuery);((a => {a.effects.effect.transfer=function(p,k){
  var x=a(this);
  var g=a(p.to);
  var v="fixed"===g.css("position");
  var f=a("body");
  var b=v?f.scrollTop():0;
  var j=v?f.scrollLeft():0;
  var m=g.offset();
  var t={top:m.top-b,left:m.left-j,height:g.innerHeight(),width:g.innerWidth()};
  var w=x.offset();
  var q=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(p.className).css({top:w.top-b,left:w.left-j,height:x.innerHeight(),width:x.innerWidth(),position:v?"fixed":"absolute"}).animate(t,p.duration,p.easing,() => {q.remove(),k()});
}}))(jQuery);(((d, f, c) => {
  function g(C){var B=Array.prototype.slice.call(arguments,1);if(C.prop){return C.prop(...B);}return C.attr(...B);}function x(F,D,E){
    var C;
    var B;
    for(C in E){if(E.hasOwnProperty(C)){B=C.replace(/ |$/g,D.eventNamespace);F.bind(B,E[C])}}
  }function e(D,B,C){x(D,C,{focus() {B.addClass(C.focusClass)},blur() {B.removeClass(C.focusClass);B.removeClass(C.activeClass)},mouseenter() {B.addClass(C.hoverClass)},mouseleave() {B.removeClass(C.hoverClass);B.removeClass(C.activeClass)},"mousedown touchbegin":function(){if(!D.is(":disabled")){B.addClass(C.activeClass)}},"mouseup touchend":function(){B.removeClass(C.activeClass)}})}function w(C,B){C.removeClass(B.hoverClass+" "+B.focusClass+" "+B.activeClass)}function u(C,D,B){if(B){C.addClass(D)}else{C.removeClass(D)}}function z(B,D,C){setTimeout(() => {
    var F="checked";
    var E=D.is(":"+F);
    if(D.prop){D.prop(F,E)}else{if(E){D.attr(F,F)}else{D.removeAttr(F)}}u(B,C.checkedClass,E)
  },1)}function o(B,D,C){u(B,C.disabledClass,D.is(":disabled"))}function m(B,C,D){switch(D){case"after":B.after(C);return B.next();case"before":B.before(C);return B.prev();case"wrap":B.wrap(C);return B.parent()}return null}function r(E,D,F){
    var C;
    var B;
    var G;
    if(!F){F={}}F=f.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},F);C=f("<div />");B=f("<span />");if(D.autoHide&&E.is(":hidden")&&E.css("display")==="none"){C.hide()}if(F.divClass){C.addClass(F.divClass)}if(D.wrapperClass){C.addClass(D.wrapperClass)}if(F.spanClass){B.addClass(F.spanClass)}G=g(E,"id");if(D.useID&&G){g(C,"id",D.idPrefix+"-"+G)}if(F.spanHtml){B.html(F.spanHtml)}C=m(E,C,F.divWrap);B=m(E,B,F.spanWrap);o(C,E,D);return{div:C,span:B}
  }function q(D,C){var B;if(!C.wrapperClass){return null}B=f("<span />").addClass(C.wrapperClass);B=m(D,B,"wrap");return B}function i(){
    var E;
    var B;
    var D;
    var C;
    C="rgb(120,2,153)";B=f('<div style="width:0;height:0;color:'+C+'">');f("body").append(B);D=B.get(0);if(d.getComputedStyle){E=d.getComputedStyle(D,"").color}else{E=(D.currentStyle||D.style||{}).color}B.remove();return E.replace(/ /g,"")!==C
  }function p(B){if(!B){return""}return f("<span />").text(B).html()}function k(){return navigator.cpuClass&&!navigator.product}function l(){if(d.XMLHttpRequest!==undefined){return true}return false}function a(C){var B;if(C[0].multiple){return true}B=g(C,"size");if(!B||B<=1){return false}return true}function h(){return false}function v(B,C){var D="none";x(B,C,{"selectstart dragstart mousedown":h});B.css({MozUserSelect:D,msUserSelect:D,webkitUserSelect:D,userSelect:D})}function y(E,C,D){var B=E.val();if(B===""){B=D.fileDefaultHtml}else{B=B.split(/[\/\\]+/);B=B[(B.length-1)]}C.text(B)}function n(C,E,F){
    var B;
    var D;
    B=[];C.each(function(){var G;for(G in E){if(Object.prototype.hasOwnProperty.call(E,G)){B.push({el:this,name:G,old:this.style[G]});this.style[G]=E[G]}}});F();while(B.length){D=B.pop();D.el.style[D.name]=D.old}
  }function b(C,D){var B;B=C.parents();B.push(C[0]);B=B.not(":visible");n(B,{visibility:"hidden",display:"block",position:"absolute"},D)}function A(C,B){return () => {C.unwrap().unwrap().unbind(B.eventNamespace)};}
  var j=true;
  var t=false;
  var s=[{match(B) {return B.is("a, button, :submit, :reset, input[type='button']")},apply(E, D) {var B,C,F,H,G;C=D.submitDefaultHtml;if(E.is(":reset")){C=D.resetDefaultHtml}if(E.is("a, button")){H=() => E.html()||C}else{H=() => p(g(E,"value"))||C}F=r(E,D,{divClass:D.buttonClass,spanHtml:H()});B=F.div;e(E,B,D);G=false;x(B,D,{"click touchend":function(){var K,J,L,I;if(G){return}if(E.is(":disabled")){return}G=true;if(E[0].dispatchEvent){K=document.createEvent("MouseEvents");K.initEvent("click",true,true);J=E[0].dispatchEvent(K);if(E.is("a")&&J){L=g(E,"target");I=g(E,"href");if(!L||L==="_self"){document.location.href=I}else{d.open(I,L)}}}else{E.click()}G=false}});v(B,D);return {remove() {B.after(E);B.remove();E.unbind(D.eventNamespace);return E},update() {w(B,D);o(B,E,D);E.detach();F.span.html(H()).append(E)}};}},{match(B) {return B.is(":checkbox")},apply(E, D) {var F,C,B;F=r(E,D,{divClass:D.checkboxClass});C=F.div;B=F.span;e(E,C,D);x(E,D,{"click touchend":function(){z(B,E,D)}});z(B,E,D);return {remove:A(E,D),update() {w(C,D);B.removeClass(D.checkedClass);z(B,E,D);o(C,E,D)}};}},{match(B) {return B.is(":file")},apply(F, E) {var H,D,C,G;H=r(F,E,{divClass:E.fileClass,spanClass:E.fileButtonClass,spanHtml:E.fileButtonHtml,spanWrap:"after"});D=H.div;G=H.span;C=f("<span />").html(E.fileDefaultHtml);C.addClass(E.filenameClass);C=m(F,C,"after");if(!g(F,"size")){g(F,"size",D.width()/10)}function B(){y(F,C,E)}e(F,D,E);B();if(k()){x(F,E,{click() {F.trigger("change");setTimeout(B,0)}})}else{x(F,E,{change:B})}v(C,E);v(G,E);return {remove() {C.remove();G.remove();return F.unwrap().unbind(E.eventNamespace)},update() {w(D,E);y(F,C,E);o(D,F,E)}};}},{match(C) {if(C.is("input")){var B=(" "+g(C,"type")+" ").toLowerCase(),D=" color date datetime datetime-local email month number password search tel text time url week ";return D.indexOf(B)>=0}return false},apply(D, C) {var B,E;B=g(D,"type");D.addClass(C.inputClass);E=q(D,C);e(D,D,C);if(C.inputAddTypeAsClass){D.addClass(B)}return {remove() {D.removeClass(C.inputClass);if(C.inputAddTypeAsClass){D.removeClass(B)}if(E){D.unwrap()}},update:h};}},{match(B) {return B.is(":radio")},apply(E, D) {var F,C,B;F=r(E,D,{divClass:D.radioClass});C=F.div;B=F.span;e(E,C,D);x(E,D,{"click touchend":function(){f.uniform.update(f(':radio[name="'+g(E,"name")+'"]'))}});z(B,E,D);return {remove:A(E,D),update() {w(C,D);z(B,E,D);o(C,E,D)}};}},{match(B) {if(B.is("select")&&!a(B)){return true}return false},apply(F, E) {var G,C,B,D;if(E.selectAutoWidth){b(F,() => {D=F.width()})}G=r(F,E,{divClass:E.selectClass,spanHtml:(F.find(":selected:first")||F.find("option:first")).html(),spanWrap:"before"});C=G.div;B=G.span;if(E.selectAutoWidth){b(F,() => {n(f([B[0],C[0]]),{display:"block"},() => {var H;H=B.outerWidth()-B.width();C.width(D+H);B.width(D)})})}else{C.addClass("fixedWidth")}e(F,C,E);x(F,E,{change() {B.html(F.find(":selected").html());C.removeClass(E.activeClass)},"click touchend":function(){var H=F.find(":selected").html();if(B.html()!==H){F.trigger("change")}},keyup() {B.html(F.find(":selected").html())}});v(B,E);return {remove() {B.remove();F.unwrap().unbind(E.eventNamespace);return F},update() {if(E.selectAutoWidth){f.uniform.restore(F);F.uniform(E)}else{w(C,E);B.html(F.find(":selected").html());o(C,F,E)}}};}},{match(B) {if(B.is("select")&&a(B)){return true}return false},apply(C, B) {var D;C.addClass(B.selectMultiClass);D=q(C,B);e(C,C,B);return {remove() {C.removeClass(B.selectMultiClass);if(D){C.unwrap()}},update:h};}},{match(B) {return B.is("textarea")},apply(C, B) {var D;C.addClass(B.textareaClass);D=q(C,B);e(C,C,B);return {remove() {C.removeClass(B.textareaClass);if(D){C.unwrap()}},update:h};}}];
  if(k()&&!l()){j=false}f.uniform={defaults:{activeClass:"active",autoHide:true,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:true,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:false,selectAutoWidth:true,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:true,wrapperClass:null},elements:[]};f.fn.uniform=function(B){var C=this;B=f.extend({},f.uniform.defaults,B);if(!t){t=true;if(i()){j=false}}if(!j){return this}if(B.resetSelector){f(B.resetSelector).mouseup(() => {d.setTimeout(() => {f.uniform.update(C)},10)})}return this.each(function(){
    var E=f(this);
    var D;
    var F;
    var G;
    if(E.data("uniformed")){f.uniform.update(E);return}for(D=0;D<s.length;D=D+1){F=s[D];if(F.match(E,B)){G=F.apply(E,B);E.data("uniformed",G);f.uniform.elements.push(E.get(0));return}}
  });};f.uniform.restore=f.fn.uniform.restore=B => {if(B===c){B=f.uniform.elements}f(B).each(function(){
    var E=f(this);
    var C;
    var D;
    D=E.data("uniformed");if(!D){return}D.remove();C=f.inArray(this,f.uniform.elements);if(C>=0){f.uniform.elements.splice(C,1)}E.removeData("uniformed")
  })};f.uniform.update=f.fn.uniform.update=B => {if(B===c){B=f.uniform.elements}f(B).each(function(){
    var D=f(this);
    var C;
    C=D.data("uniformed");if(!C){return}C.update(D,C.options)
  })}
})(this,jQuery));((a => {a.fn.oldMenu=a.fn.menu;a.fn.menu=function(e,d,c){var b=a(this).oldMenu(e,d,c);a(this).each(function(){if(!a(this).hasClass("sh-menu")){a(this).addClass("sh-menu").children().first().addClass("ui-menu-item-first");a(this).children().last().addClass("ui-menu-item-last");a(this).find(".ui-menu").addClass("sh-menu").each(function(){a(this).children().first().addClass("ui-menu-item-first");a(this).children().last().addClass("ui-menu-item-last")})}});return b};a.fn.oldUniform=a.fn.uniform;a.fn.uniform=function(l,k,j,i,h,g,f,e,c,b){var d=a(this).oldUniform(l,k,j,i,h,g,f,e,c,b);a(this).each(function(){var n=a(this);if(!n.hasClass("sh-uniform")){n.addClass("sh-uniform");if(n.is('input[type="file"]')){var r=n.parent().find(".filename");r.css("width",r.innerWidth())}if(n.is("select")&&!n.attr("multiple")){
  var s=n.parent();
  var m=s.height();
  var q=s.outerWidth();
  var o=s.find("span").outerWidth();
  a("<div></div>").addClass("ui-icon").css({"float":"right",marginTop:-parseInt((m/2)+8),marginRight:-parseInt((q-o)/2)-7}).appendTo(s)
}}});return d}}))(jQuery);((a => {a.fn.rightClick=function(c){var b="contextmenu rightclick";a(this).each(function(){a(this).unbind(b).bind(b,function(d){d.preventDefault();if(a.isFunction(c)){c(this,d)}})});return a(this)}}))(jQuery);((c => {
  c.agent={};
  var b=" "+navigator.userAgent;
  var a=[{expr:/ [a-z]+\/[0-9a-z\.]+/ig,delim:"/"},{expr:/ [a-z]+\s+[0-9a-z\.]+/ig,delim:/\s+/,keys:["opera","msie","firefox","android"]},{expr:/[ \/\(]([a-z0-9_]+)[ \;\)\/]/ig,keys:"i386|i486|i586|i686|x86|x64|x86_64|intel|ppc|powerpc|windows|macintosh|darwin|unix|linux|sunos|android|iphone|ipad|ipod|amiga|amigaos|beos|wii|playstation|gentoo|fedora|slackware|ubuntu|archlinux|debian|mint|mageia|mandriva|freebsd|openbsd|netbsd|solaris|opensolaris|x11|mobile".split("|"),sub:"platform"}];
  c.each(a,(d, f) => {var e=b.match(f.expr);if(e===null){return}c.each(e,(h, g) => {
    g=g.replace(/^\s+/,"").toLowerCase();
    var i=g.replace(f.expr,"$1");
    var m=true;
    if(typeof f.delim!="undefined"){g=g.split(f.delim);i=g[0];m=g[1]}if(typeof f.keys!="undefined"){var l=false;for(k=0;k<f.keys.length;k++){if(f.keys[k]==i){l=true;break}}if(!l){return}}if(typeof f.sub!="undefined"){if(typeof c.agent[f.sub]!="object"){c.agent[f.sub]={}}if(typeof c.agent[f.sub][i]=="undefined"){c.agent[f.sub][i]=m}}else{if(typeof c.agent[i]=="undefined"){c.agent[i]=m}}
  })})
}))(jQuery);((a => {a.fn.selection=function(e,c){var d=this.get(0);if(d.createTextRange){var b=d.createTextRange();b.collapse(true);b.moveStart("character",e);b.moveEnd("character",c-e);b.select()}else{if(d.setSelectionRange){d.setSelectionRange(e,c)}else{if(d.selectionStart){d.selectionStart=e;d.selectionEnd=c}}}d.focus()};a.fn.outerSpace=function(d,f){
  var c=this.get(0);
  var e=0;
  var b;
  if(!f){f="mbp"}if(/m/i.test(f)){b=parseInt(a(c).css("margin-"+d));if(b){e+=b}}if(/b/i.test(f)){b=parseInt(a(c).css("border-"+d+"-width"));if(b){e+=b}}if(/p/i.test(f)){b=parseInt(a(c).css("padding-"+d));if(b){e+=b}}return e
};a.fn.outerLeftSpace=function(b){return this.outerSpace("left",b)};a.fn.outerTopSpace=function(b){return this.outerSpace("top",b)};a.fn.outerRightSpace=function(b){return this.outerSpace("right",b)};a.fn.outerBottomSpace=function(b){return this.outerSpace("bottom",b)};a.fn.outerHSpace=function(b){return(this.outerLeftSpace(b)+this.outerRightSpace(b))};a.fn.outerVSpace=function(b){return(this.outerTopSpace(b)+this.outerBottomSpace(b))};a.$={unselect() {if(document.selection&&document.selection.empty){document.selection.empty()}else{if(window.getSelection){var b=window.getSelection();if(b&&b.removeAllRanges){b.removeAllRanges()}}}},htmlValue(b) {return b.replace(/\&/g,"&amp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")},htmlData(b) {return b.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\ /g,"&nbsp;")},jsValue(b) {return b.replace(/\\/g,"\\\\").replace(/\r?\n/,"\\\n").replace(/\"/g,'\\"').replace(/\'/g,"\\'")},basename(b) {return/^.*\/([^\/]+)\/?$/g.test(b)?b.replace(expr,"$1"):b},dirname(b) {return/^(.*)\/[^\/]+\/?$/g.test(b)?b.replace(expr,"$1"):""},inArray(d, b) {if((typeof b=="undefined")||!b.length||!b.push){return false}for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false},getFileExtension(b, d) {if(typeof d=="undefined"){d=true}if(/^.*\.[^\.]*$/.test(b)){var c=b.replace(/^.*\.([^\.]*)$/,"$1");return d?c.toLowerCase(c):c}else{return""}},escapeDirs(g) {
  var h=/^([a-z]+)\:\/\/([^\/^\:]+)(\:(\d+))?\/(.+)$/;
  var e="";
  if(h.test(g)){var b=g.replace(h,"$4");e=g.replace(h,"$1://$2");if(b.length){e+=":"+b}e+="/";g=g.replace(h,"$5")}
  var f=g.split("/");
  var d="";
  var c=0;
  for(;c<f.length;c++){d+=encodeURIComponent(f[c])+"/"}return e+d.substr(0,d.length-1)
},kuki:{prefix:"",duration:356,domain:"",path:"",secure:false,set(c, i, f, g, j, b) {c=this.prefix+c;if(f==null){f=this.duration}if(b==null){b=this.secure}if((g==null)&&this.domain){g=this.domain}if((j==null)&&this.path){j=this.path}b=b?true:false;var e=new Date();e.setTime(e.getTime()+(f*86400000));var d=e.toGMTString();var h=c+"="+i+"; expires="+d;if(g!=null){h+="; domain="+g}if(j!=null){h+="; path="+j}if(b){h+="; secure"}return(document.cookie=h)?true:false},get(d) {d=this.prefix+d;var f=d+"=";var c=document.cookie.split(";");var b;for(var e=0;e<c.length;e++){b=c[e];while(b.charAt(0)==" "){b=b.substring(1,b.length)}if(b.indexOf(f)==0){return b.substring(f.length,b.length)}}return null},del(b) {return this.set(b,"",-1)},isSet(b) {return(this.get(b)!=null)}}}}))(jQuery);((a => {a.$.utf8encode=d => {d=d.replace(/\r\n/g,"\n");var b="";for(var f=0;f<d.length;f++){var e=d.charCodeAt(f);if(e<128){b+=String.fromCharCode(e)}else{if((e>127)&&(e<2048)){b+=String.fromCharCode((e>>6)|192);b+=String.fromCharCode((e&63)|128)}else{b+=String.fromCharCode((e>>12)|224);b+=String.fromCharCode(((e>>6)&63)|128);b+=String.fromCharCode((e&63)|128)}}}return b};a.$.md5=r => {
  r=a.$.utf8encode(r);
  var J=(c, b) => (c<<b)|(c>>>(32-b));
  var E=(x, c) => {var k=(x&2147483648),F=(c&2147483648),G=(x&1073741824),b=(c&1073741824),d=(x&1073741823)+(c&1073741823);if(G&b){return(d^2147483648^k^F)}if(G|b){return(d&1073741824)?(d^3221225472^k^F):(d^1073741824^k^F)}else{return(d^k^F)}};
  var q=(b, d, c) => (b&d)|((~b)&c);
  var p=(b, d, c) => (b&c)|(d&(~c));
  var o=(b, d, c) => b^d^c;
  var m=(b, d, c) => d^(b|(~c));
  var t=(G, F, Y, X, k, H, I) => {G=E(G,E(E(q(F,Y,X),k),I));return E(J(G,H),F)};
  var f=(G, F, Y, X, k, H, I) => {G=E(G,E(E(p(F,Y,X),k),I));return E(J(G,H),F)};
  var C=(G, F, Y, X, k, H, I) => {G=E(G,E(E(o(F,Y,X),k),I));return E(J(G,H),F)};
  var s=(G, F, Y, X, k, H, I) => {G=E(G,E(E(m(F,Y,X),k),I));return E(J(G,H),F)};
  var e=x => {var H,k=x.length,d=k+8,c=(d-(d%64))/64,G=(c+1)*16,I=[G-1],b=0,F=0;while(F<k){H=(F-(F%4))/4;b=(F%4)*8;I[H]=(I[H]|(x.charCodeAt(F)<<b));F++}H=(F-(F%4))/4;b=(F%4)*8;I[H]=I[H]|(128<<b);I[G-2]=k<<3;I[G-1]=k>>>29;return I};
  var A=d => {var x,c=0,b="",k="";for(;c<=3;c++){x=(d>>>(c*8))&255;k="0"+x.toString(16);b=b+k.substr(k.length-2,2)}return b};
  var h;
  var D;
  var u;
  var g;
  var N=0;
  var B=e(r);
  var W=1732584193;
  var V=4023233417;
  var U=2562383102;
  var T=271733878;
  var Q=7;
  var O=12;
  var L=17;
  var K=22;
  var z=5;
  var y=9;
  var w=14;
  var v=20;
  var n=4;
  var l=11;
  var j=16;
  var i=23;
  var S=6;
  var R=10;
  var P=15;
  var M=21;
  for(;N<B.length;N+=16){h=W;D=V;u=U;g=T;W=t(W,V,U,T,B[N+0],Q,3614090360);T=t(T,W,V,U,B[N+1],O,3905402710);U=t(U,T,W,V,B[N+2],L,606105819);V=t(V,U,T,W,B[N+3],K,3250441966);W=t(W,V,U,T,B[N+4],Q,4118548399);T=t(T,W,V,U,B[N+5],O,1200080426);U=t(U,T,W,V,B[N+6],L,2821735955);V=t(V,U,T,W,B[N+7],K,4249261313);W=t(W,V,U,T,B[N+8],Q,1770035416);T=t(T,W,V,U,B[N+9],O,2336552879);U=t(U,T,W,V,B[N+10],L,4294925233);V=t(V,U,T,W,B[N+11],K,2304563134);W=t(W,V,U,T,B[N+12],Q,1804603682);T=t(T,W,V,U,B[N+13],O,4254626195);U=t(U,T,W,V,B[N+14],L,2792965006);V=t(V,U,T,W,B[N+15],K,1236535329);W=f(W,V,U,T,B[N+1],z,4129170786);T=f(T,W,V,U,B[N+6],y,3225465664);U=f(U,T,W,V,B[N+11],w,643717713);V=f(V,U,T,W,B[N+0],v,3921069994);W=f(W,V,U,T,B[N+5],z,3593408605);T=f(T,W,V,U,B[N+10],y,38016083);U=f(U,T,W,V,B[N+15],w,3634488961);V=f(V,U,T,W,B[N+4],v,3889429448);W=f(W,V,U,T,B[N+9],z,568446438);T=f(T,W,V,U,B[N+14],y,3275163606);U=f(U,T,W,V,B[N+3],w,4107603335);V=f(V,U,T,W,B[N+8],v,1163531501);W=f(W,V,U,T,B[N+13],z,2850285829);T=f(T,W,V,U,B[N+2],y,4243563512);U=f(U,T,W,V,B[N+7],w,1735328473);V=f(V,U,T,W,B[N+12],v,2368359562);W=C(W,V,U,T,B[N+5],n,4294588738);T=C(T,W,V,U,B[N+8],l,2272392833);U=C(U,T,W,V,B[N+11],j,1839030562);V=C(V,U,T,W,B[N+14],i,4259657740);W=C(W,V,U,T,B[N+1],n,2763975236);T=C(T,W,V,U,B[N+4],l,1272893353);U=C(U,T,W,V,B[N+7],j,4139469664);V=C(V,U,T,W,B[N+10],i,3200236656);W=C(W,V,U,T,B[N+13],n,681279174);T=C(T,W,V,U,B[N+0],l,3936430074);U=C(U,T,W,V,B[N+3],j,3572445317);V=C(V,U,T,W,B[N+6],i,76029189);W=C(W,V,U,T,B[N+9],n,3654602809);T=C(T,W,V,U,B[N+12],l,3873151461);U=C(U,T,W,V,B[N+15],j,530742520);V=C(V,U,T,W,B[N+2],i,3299628645);W=s(W,V,U,T,B[N+0],S,4096336452);T=s(T,W,V,U,B[N+7],R,1126891415);U=s(U,T,W,V,B[N+14],P,2878612391);V=s(V,U,T,W,B[N+5],M,4237533241);W=s(W,V,U,T,B[N+12],S,1700485571);T=s(T,W,V,U,B[N+3],R,2399980690);U=s(U,T,W,V,B[N+10],P,4293915773);V=s(V,U,T,W,B[N+1],M,2240044497);W=s(W,V,U,T,B[N+8],S,1873313359);T=s(T,W,V,U,B[N+15],R,4264355552);U=s(U,T,W,V,B[N+6],P,2734768916);V=s(V,U,T,W,B[N+13],M,1309151649);W=s(W,V,U,T,B[N+4],S,4149444226);T=s(T,W,V,U,B[N+11],R,3174756917);U=s(U,T,W,V,B[N+2],P,718787259);V=s(V,U,T,W,B[N+9],M,3951481745);W=E(W,h);V=E(V,D);U=E(U,u);T=E(T,g)}return(A(W)+A(V)+A(U)+A(T)).toLowerCase()
}}))(jQuery);var _={opener:{},support:{},files:[],clipboard:[],labels:[],shows:[],orders:[],cms:""};_.alert=(c, a) => {var b=!a?() => {}:($.isFunction(a)?a:() => {setTimeout(() => {a.focus()},1)});return _.dialog(_.label("Warning"),c.replace("\n","<br />\n"),{close() {b();if($(this).hasClass("ui-dialog-content")){$(this).dialog("destroy").detach()}}});};_.confirm=(c, d, a) => {var b={buttons:[{text:_.label("Yes"),click() {d();$(this).dialog("destroy").detach()}},{text:_.label("No"),click() {$(this).dialog("destroy").detach()}}]};if(a){$.each(b,(e, f) => {if(typeof a[e]=="undefined"){a[e]=f}})}else{a=b}return _.dialog(_.label("Question"),c,a)};_.dialog=(f, c, b) => {if(!b){b={}}var e=$("<div></div>");e.css("display","none").attr("title",f).html(c).appendTo("body");if(e.find("form").get(0)&&!e.find('form [type="submit"]').get(0)){e.find("form").append('<button type="submit" style="width:0;height:0;padding:0;margin:0;border:0;visibility:hidden">Submit</button>')}var a={resizable:false,minHeight:false,modal:true,width:351,show:"fade",buttons:[{text:_.label("OK"),click() {if(typeof b.close!="undefined"){b.close()}if($(this).hasClass("ui-dialog-content")){$(this).dialog("destroy").detach()}}}],close() {if($(this).hasClass("ui-dialog-content")){$(this).dialog("destroy").detach()}},closeText:false,zindex:1000000,alone:false,legend:false};var d=b.nopadding?false:true;$.each(a,(g, h) => {if(typeof b[g]=="undefined"){b[g]=h}});if(b.alone){$(".ui-dialog .ui-dialog-content").dialog("destroy").detach()}e.dialog(b);if(!d){$(".ui-dialog").last().find(".ui-dialog-content").css({padding:0,overflow:"hidden"})}if(b.legend){e.parent().find(".ui-dialog-buttonpane").prepend('<div style="float:left;padding:10px 0 0 10px">'+b.legend+"</div>")}if($.agent&&$.agent.mozilla){e.css("overflow","hidden")}return e};_.init=() => {if(!_.checkAgent()){return}$("body").click(() => {_.hideDialog()}).rightClick();$("#shadow").click(() => false);$("#dialog").unbind().click(() => false);_.initOpeners();_.initSettings();_.initContent();_.initToolbar();_.initResizer();_.initDropUpload()};_.checkAgent=() => {if(($.agent.msie&&!$.agent.opera&&!$.agent.chromeframe&&(parseInt($.agent.msie)<9))||($.agent.opera&&(parseInt($.agent.version)<10))||($.agent.firefox&&(parseFloat($.agent.firefox)<1.8))){var a='<div style="padding:10px">Your browser is not capable to display KCFinder. Please update your browser or install another one: <a href="http://www.mozilla.com/firefox/" target="_blank">Mozilla Firefox</a>, <a href="http://www.apple.com/safari" target="_blank">Apple Safari</a>, <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://www.opera.com/browser" target="_blank">Opera</a>.';if($.agent.msie&&!$.agent.opera){a+=' You may also install <a href="http://www.google.com/chromeframe" target="_blank">Google Chrome Frame ActiveX plugin</a> to get Internet Explorer 6, 7, 8 working.'}a+="</div>";$("body").html(a);return false}return true};_.initOpeners=() => {try{if(_.opener.name=="tinymce"){if(typeof tinyMCEPopup=="undefined"){_.opener.name=null}else{_.opener.callBack=true}}else{if(_.opener.name=="tinymce4"){_.opener.callBack=true}else{if(_.opener.name=="ckeditor"){if(window.parent&&window.parent.CKEDITOR){_.opener.CKEditor.object=window.parent.CKEDITOR}else{if(window.opener&&window.opener.CKEDITOR){_.opener.CKEditor.object=window.opener.CKEDITOR;_.opener.callBack=true}else{_.opener.CKEditor=null}}}else{if((!_.opener.name||(_.opener.name=="fckeditor"))&&window.opener&&window.opener.SetUrl){_.opener.name="fckeditor";_.opener.callBack=true}}}}if(!_.opener.callBack){if((window.opener&&window.opener.KCFinder&&window.opener.KCFinder.callBack)||(window.parent&&window.parent.KCFinder&&window.parent.KCFinder.callBack)){_.opener.callBack=window.opener?window.opener.KCFinder.callBack:window.parent.KCFinder.callBack}if((window.opener&&window.opener.KCFinder&&window.opener.KCFinder.callBackMultiple)||(window.parent&&window.parent.KCFinder&&window.parent.KCFinder.callBackMultiple)){_.opener.callBackMultiple=window.opener?window.opener.KCFinder.callBackMultiple:window.parent.KCFinder.callBackMultiple}}}catch(a){}};_.initContent=() => {$("div#folders").html(_.label("Loading folders..."));$("div#files").html(_.label("Loading files..."));$.ajax({type:"get",dataType:"json",url:_.baseGetData("init"),async:false,success(a) {if(_.check4errors(a)){return}_.dirWritable=a.dirWritable;$("#folders").html(_.buildTree(a.tree));_.setTreeData(a.tree);_.initFolders();_.files=a.files?a.files:[];_.orderFiles()},error() {$("div#folders").html(_.label("Unknown error."));$("div#files").html(_.label("Unknown error."))}})};_.initResizer=() => {var a=($.agent.opera)?"move":"col-resize";$("#resizer").css("cursor",a).draggable({axis:"x",start() {$(this).css({opacity:"0.4",filter:"alpha(opacity=40)"});$("#all").css("cursor",a)},drag(c) {var b=c.pageX-parseInt(parseInt($(this).css("width"))/2);b=(b>=0)?b:0;b=(b+parseInt($(this).css("width"))<$(window).width())?b:$(window).width()-parseInt($(this).css("width"));$(this).css("left",b)},stop() {$(this).css({opacity:"0",filter:"alpha(opacity=0)"});$("#all").css("cursor","");var c=parseInt($(this).css("left"))+parseInt($(this).css("width"));var b=$(window).width()-c;$("#left").css("width",c);$("#right").css("width",b);$("#files").css("width",$("#right").innerWidth()-$("#files").outerHSpace());$("#resizer").css({left:$("#left").outerWidth()-$("#folders").outerRightSpace("m"),width:$("#folders").outerRightSpace("m")+$("#files").outerLeftSpace("m")});_.fixFilesHeight()}})};_.resize=() => {$("#left").css({width:"25%",height:$(window).height()-$("#status").outerHeight()});$("#right").css({width:"75%",height:$(window).height()-$("#status").outerHeight()});$("#toolbar").css("height",$("#toolbar a").outerHeight());$("#shadow").css({width:$(window).width()});$("#shadow").css("height",$(window).height());$("#resizer").css("height",$(window).height());$("#folders").css("height",$("#left").outerHeight()-$("#folders").outerVSpace());_.fixFilesHeight();var a=$("#left").outerWidth()+$("#right").outerWidth();$("#status").css("width",a);while($("#status").outerWidth()>a){$("#status").css("width",parseInt($("#status").css("width"))-1)}while($("#status").outerWidth()<a){$("#status").css("width",parseInt($("#status").css("width"))+1)}$("#files").css("width",$("#right").innerWidth()-$("#files").outerHSpace());$("#resizer").css({left:$("#left").outerWidth()-$("#folders").outerRightSpace("m"),width:$("#folders").outerRightSpace("m")+$("files").outerLeftSpace("m")})};_.fixFilesHeight=() => {$("#files").css("height",$("#left").outerHeight()-$("#toolbar").outerHeight()-$("#files").outerVSpace()-(($("#settings").css("display")!="none")?$("#settings").outerHeight():0))};_.initToolbar=() => {$("#toolbar a").click(() => {_.hideDialog()});if(!$.$.kuki.isSet("displaySettings")){$.$.kuki.set("displaySettings","off")}if($.$.kuki.get("displaySettings")=="on"){$('#toolbar a[href="kcact:settings"]').addClass("selected");$("#settings").css("display","block");_.resize()}$('#toolbar a[href="kcact:settings"]').click(function(){if($("#settings").css("display")=="none"){$(this).addClass("selected");$.$.kuki.set("displaySettings","on");$("#settings").css("display","block");_.fixFilesHeight()}else{$(this).removeClass("selected");$.$.kuki.set("displaySettings","off");$("#settings").css("display","none");_.fixFilesHeight()}return false});$('#toolbar a[href="kcact:refresh"]').click(() => {_.refresh();return false});if(window.opener||(_.opener.name=="tinymce")||$("iframe[name]",window.parent.document).get(0)){$('#toolbar a[href="kcact:maximize"]').click(function(){_.maximize(this);return false})}else{$('#toolbar a[href="kcact:maximize"]').css("display","none")}$('#toolbar a[href="kcact:about"]').click(() => {var a='<div class="box about"><div class="head"><a href="http://kcfinder.sunhater.com" target="_blank">KCFinder</a> '+_.version+"</div>";if(_.support.check4Update){a+='<div id="checkver"><span class="loading"><span>'+_.label("Checking for new version...")+"</span></span></div>"}a+="<div>"+_.label("Licenses:")+' <a href="http://opensource.org/licenses/GPL-3.0" target="_blank">GPLv3</a> & <a href="http://opensource.org/licenses/LGPL-3.0" target="_blank">LGPLv3</a></div><div>Copyright &copy;2010-2014 Pavel Tzonkov</div></div>';var b=_.dialog(_.label("About"),a,{width:301});setTimeout(() => {$.ajax({dataType:"json",url:_.baseGetData("check4Update"),async:true,success(d) {if(!b.html().length){return}var c=$("#checkver");c.removeClass("loading");if(!d.version){c.html(_.label("Unable to connect!"));return}if(_.version<d.version){c.html('<a href="http://kcfinder.sunhater.com/download" target="_blank">'+_.label("Download version {version} now!",{version:d.version})+"</a>")}else{c.html(_.label("KCFinder is up to date!"))}},error() {if(!b.html().length){return}$("#checkver").removeClass("loading").html(_.label("Unable to connect!"))}})},1000);return false});_.initUploadButton()};_.initUploadButton=() => {var b=$('#toolbar a[href="kcact:upload"]');if(!_.access.files.upload){b.css("display","none");return}var d=b.get(0).offsetTop;var c=b.outerWidth();var a=b.outerHeight();$("#toolbar").prepend('<div id="upload" style="top:'+d+"px;width:"+c+"px;height:"+a+'px"><form enctype="multipart/form-data" method="post" target="uploadResponse" action="'+_.baseGetData("upload")+'"><input type="file" name="upload[]" onchange="_.uploadFile(this.form)" style="height:'+a+'px" multiple="multiple" /><input type="hidden" name="dir" value="" /></form></div>');$("#upload input").css("margin-left","-"+($("#upload input").outerWidth()-c));$("#upload").mouseover(() => {$('#toolbar a[href="kcact:upload"]').addClass("hover")}).mouseout(() => {$('#toolbar a[href="kcact:upload"]').removeClass("hover")})};_.uploadFile=a => {if(!_.dirWritable){_.alert(_.label("Cannot write to upload folder."));$("#upload").detach();_.initUploadButton();return}a.elements[1].value=_.dir;$('<iframe id="uploadResponse" name="uploadResponse" src="javascript:;"></iframe>').prependTo(document.body);$("#loading").html(_.label("Uploading file...")).css("display","inline");a.submit();$("#uploadResponse").load(function(){
  var b=$(this).contents().find("body").html();$("#loading").css("display","none");b=b.split("\n");
  var c=[];
  var d=[];
  $.each(b,(e, f) => {if(f.substr(0,1)=="/"){c[c.length]=f.substr(1,f.length-1)}else{d[d.length]=f}});if(d.length){_.alert(d.join("\n"))}if(!c.length){c=null}_.refresh(c);$("#upload").detach();setTimeout(() => {$("#uploadResponse").detach()},1);_.initUploadButton()
})};_.maximize=d => {if(window.opener){window.moveTo(0,0);e=screen.availWidth;b=screen.availHeight;if($.agent.opera){b-=50}window.resizeTo(e,b)}else{if(_.opener.name=="tinymce"){
  var f;
  var h;
  var g;
  $("iframe",window.parent.document).each(function(){if(/^mce_\d+_ifr$/.test($(this).attr("id"))){g=parseInt($(this).attr("id").replace(/^mce_(\d+)_ifr$/,"$1"));f=$("#mce_"+g,window.parent.document);h=$("#mce_"+g+"_ifr",window.parent.document)}});if(typeof g=="undefined"){return}if($(d).hasClass("selected")){$(d).removeClass("selected");f.css({left:_.maximizeMCE.left,top:_.maximizeMCE.top,width:_.maximizeMCE.width,height:_.maximizeMCE.height});h.css({width:_.maximizeMCE.width-_.maximizeMCE.Hspace,height:_.maximizeMCE.height-_.maximizeMCE.Vspace})}else{
    $(d).addClass("selected");_.maximizeMCE={width:parseInt(f.css("width")),height:parseInt(f.css("height")),left:f.position().left,top:f.position().top,Hspace:parseInt(f.css("width"))-parseInt(h.css("width")),Vspace:parseInt(f.css("height"))-parseInt(h.css("height"))};
    var e=$(window.parent).width();
    var b=$(window.parent).height();
    f.css({left:$(window.parent).scrollLeft(),top:$(window.parent).scrollTop(),width:e,height:b});h.css({width:e-_.maximizeMCE.Hspace,height:b-_.maximizeMCE.Vspace})
  }
}else{if($("iframe",window.parent.document).get(0)){
  var e;
  var b;
  var a=$('iframe[name="'+window.name+'"]',window.parent.document);
  if($(d).hasClass("selected")){$(d).removeClass("selected");if(_.maximizeThread){clearInterval(_.maximizeThread);_.maximizeThread=null}if(_.maximizeW){_.maximizeW=null}if(_.maximizeH){_.maximizeH=null}$.each($("*",window.parent.document).get(),(j, k) => {k.style.display=_.maximizeDisplay[j]});a.css({display:_.maximizeCSS.display,position:_.maximizeCSS.position,left:_.maximizeCSS.left,top:_.maximizeCSS.top,width:_.maximizeCSS.width,height:_.maximizeCSS.height});$(window.parent).scrollLeft(_.maximizeLeft);$(window.parent).scrollTop(_.maximizeTop)}else{$(d).addClass("selected");_.maximizeCSS={display:a.css("display"),position:a.css("position"),left:a.css("left"),top:a.css("top"),width:a.outerWidth(),height:a.outerHeight()};_.maximizeTop=$(window.parent).scrollTop();_.maximizeLeft=$(window.parent).scrollLeft();_.maximizeDisplay=[];$.each($("*",window.parent.document).get(),(j, k) => {_.maximizeDisplay[j]=$(k).css("display");$(k).css("display","none")});a.css({display:"block",position:"absolute"}).parents().css("display","block");var c=() => {e=$(window.parent).width();b=$(window.parent).height();if(!_.maximizeW||(_.maximizeW!=e)||!_.maximizeH||(_.maximizeH!=b)){_.maximizeW=e;_.maximizeH=b;a.css({width:e,height:b});_.resize()}};if((a.offset().left==a.position().left)&&(a.offset().top==a.position().top)){a.css({left:0,top:0})}else{a.css({left:-a.offset().left,top:-a.offset().top})}c();_.maximizeThread=setInterval(c,250)}
}}}};_.refresh=a => {_.fadeFiles();$.ajax({type:"post",dataType:"json",url:_.baseGetData("chDir"),data:{dir:_.dir},async:false,success(b) {if(_.check4errors(b)){return}_.dirWritable=b.dirWritable;_.files=b.files?b.files:[];_.orderFiles(null,a);_.statusDir()},error() {$("#files > div").css({opacity:"",filter:""});$("#files").html(_.label("Unknown error."))}})};_.initSettings=() => {$("#settings fieldset, #settings input, #settings label").uniform();if(!_.shows.length){var d=$('#show input[type="checkbox"]').toArray();$.each(d,(f, e) => {_.shows[f]=e.name})}var a=_.shows;if(!$.$.kuki.isSet("showname")){$.$.kuki.set("showname","on");$.each(a,(e, f) => {if(f!="name"){$.$.kuki.set("show"+f,"off")}})}$('#show input[type="checkbox"]').click(function(){var e=$(this).get(0).checked?"on":"off";$.$.kuki.set("show"+$(this).get(0).name,e);if($(this).get(0).checked){$("#files .file div."+$(this).get(0).name).css("display","block")}else{$("#files .file div."+$(this).get(0).name).css("display","none")}});$.each(a,(e, g) => {var f=($.$.kuki.get("show"+g)=="on")?"checked":"";$('#show input[name="'+g+'"]').get(0).checked=f});if(!_.orders.length){var c=$('#order input[type="radio"]').toArray();$.each(c,(f, e) => {_.orders[f]=e.value})}var b=_.orders;if(!$.$.kuki.isSet("order")){$.$.kuki.set("order","name")}if(!$.$.kuki.isSet("orderDesc")){$.$.kuki.set("orderDesc","off")}$('#order input[value="'+$.$.kuki.get("order")+'"]').get(0).checked=true;$('#order input[name="desc"]').get(0).checked=($.$.kuki.get("orderDesc")=="on");$('#order input[type="radio"]').click(function(){$.$.kuki.set("order",$(this).get(0).value);_.orderFiles()});$('#order input[name="desc"]').click(function(){$.$.kuki.set("orderDesc",$(this).get(0).checked?"on":"off");_.orderFiles()});if(!$.$.kuki.isSet("view")){$.$.kuki.set("view","thumbs")}if($.$.kuki.get("view")=="list"){$("#show input").each(function(){this.checked=this.disabled=true;$(this).parent().addClass("checked").parent().addClass("disabled")})}$('#view input[value="'+$.$.kuki.get("view")+'"]').get(0).checked=true;$("#view input").click(function(){var e=$(this).attr("value");if($.$.kuki.get("view")!=e){$.$.kuki.set("view",e);if(e=="list"){$("#show input").each(function(){this.checked=this.disabled=true;$(this).parent().addClass("checked").parent().addClass("disabled")})}else{$.each(_.shows,(g, h) => {var f=$('#show input[name="'+h+'"]');f.get(0).checked=($.$.kuki.get("show"+h)=="on");if(!f.get(0).checked){f.parent().removeClass("checked")}});$("#show input").each(function(){this.disabled=false;$(this).parent().parent().removeClass("disabled")})}}_.refresh()})};_.initFiles=() => {$(document).unbind("keydown").keydown(a => !_.selectAll(a));$("#files").unbind().scroll(() => {_.hideDialog()});$(".file").unbind().click(function(a){$.$.unselect();_.selectFile($(this),a)}).rightClick((a, b) => {$.$.unselect();_.menuFile($(a),b)}).dblclick(function(){$.$.unselect();_.returnFile($(this))}).mouseup(() => {$.$.unselect()}).mouseout(() => {$.$.unselect()});$.each(_.shows,(a, c) => {var b=($.$.kuki.get("show"+c)=="off")?"none":"block";$("#files .file div."+c).css("display",b)});_.statusDir()};_.showFiles=(b, a) => {_.fadeFiles();setTimeout(() => {var c="";$.each(_.files,(f, e) => {
  var g;
  var d=[];
  $.each(e,(h, j) => {d[d.length]=h+"|"+j});d=encodeURIComponent(d.join("|"));if($.$.kuki.get("view")=="list"){if(!f){c+="<table>"}g=$.$.getFileExtension(e.name);if(e.thumb){g=".image"}else{if(!g.length||!e.smallIcon){g="."}}g="themes/"+_.theme+"/img/files/small/"+g+".png";c+='<tr class="file"><td class="name" style="background-image:url('+g+')">'+$.$.htmlData(e.name)+'</td><td class="time">'+e.date+'</td><td class="size">'+_.humanSize(e.size)+"</td></tr>";if(f==_.files.length-1){c+="</table>"}}else{if(e.thumb){g=_.baseGetData("thumb")+"&file="+encodeURIComponent(e.name)+"&dir="+encodeURIComponent(_.dir)+"&stamp="+d}else{if(e.smallThumb){g=_.uploadURL+"/"+_.dir+"/"+e.name;g=$.$.escapeDirs(g).replace(/\'/g,"%27")}else{g=e.bigIcon?$.$.getFileExtension(e.name):".";if(!g.length){g="."}g="themes/"+_.theme+"/img/files/big/"+g+".png"}}c+='<div class="file"><div class="thumb" style="background-image:url(\''+g+'\')" ></div><div class="name">'+$.$.htmlData(e.name)+'</div><div class="time">'+e.date+'</div><div class="size">'+_.humanSize(e.size)+"</div></div>"}
});$("#files").html("<div>"+c+"<div>");$.each(_.files,(e, d) => {var f=$("#files .file").get(e);$(f).data(d);if($.$.inArray(d.name,a)||((typeof a!="undefined")&&!a.push&&(d.name==a))){$(f).addClass("selected")}});$("#files > div").css({opacity:"",filter:""});if(b){b()}_.initFiles()},200)};_.selectFile=(b, f) => {if(f.ctrlKey||f.metaKey){
  if(b.hasClass("selected")){b.removeClass("selected")}else{b.addClass("selected")}
  var c=$(".file.selected").get();
  var a=0;
  var d;
  if(!c.length){_.statusDir()}else{$.each(c,(g, e) => {a+=parseInt($(e).data("size"))});a=_.humanSize(a);if(c.length>1){$("#fileinfo").html(c.length+" "+_.label("selected files")+" ("+a+")")}else{d=$(c[0]).data();$("#fileinfo").html(d.name+" ("+_.humanSize(d.size)+", "+d.date+")")}}
}else{d=b.data();$(".file").removeClass("selected");b.addClass("selected");$("#fileinfo").html(d.name+" ("+_.humanSize(d.size)+", "+d.date+")")}};_.selectAll=c => {if((!c.ctrlKey&&!c.metaKey)||((c.keyCode!=65)&&(c.keyCode!=97))){return false}var b=$(".file").get();if(b.length){var a=0;$.each(b,(e, d) => {if(!$(d).hasClass("selected")){$(d).addClass("selected")}a+=parseInt($(d).data("size"))});a=_.humanSize(a);$("#fileinfo").html(b.length+" "+_.label("selected files")+" ("+a+")")}return true};_.returnFile=c => {
  var b;
  var d;
  var a=c.substr?c:_.uploadURL+"/"+_.dir+"/"+c.data("name");
  a=$.$.escapeDirs(a);if(_.opener.name=="ckeditor"){_.opener.CKEditor.object.tools.callFunction(_.opener.CKEditor.funcNum,a,"");window.close()}else{if(_.opener.name=="fckeditor"){window.opener.SetUrl(a);window.close()}else{if(_.opener.name=="tinymce"){d=tinyMCEPopup.getWindowArg("window");d.document.getElementById(tinyMCEPopup.getWindowArg("input")).value=a;if(d.getImageData){d.getImageData()}if(typeof(d.ImageDialog)!="undefined"){if(d.ImageDialog.getImageData){d.ImageDialog.getImageData()}if(d.ImageDialog.showPreviewImage){d.ImageDialog.showPreviewImage(a)}}tinyMCEPopup.close()}else{if(_.opener.name=="tinymce4"){d=(window.opener?window.opener:window.parent);$(d.document).find("#"+_.opener.TinyMCE.field).val(a);d.tinyMCE.activeEditor.windowManager.close()}else{if(_.opener.callBack){if(window.opener&&window.opener.KCFinder){_.opener.callBack(a);window.close()}if(window.parent&&window.parent.KCFinder){b=$('#toolbar a[href="kcact:maximize"]');if(b.hasClass("selected")){_.maximize(b)}_.opener.callBack(a)}}else{if(_.opener.callBackMultiple){if(window.opener&&window.opener.KCFinder){_.opener.callBackMultiple([a]);window.close()}if(window.parent&&window.parent.KCFinder){b=$('#toolbar a[href="kcact:maximize"]');if(b.hasClass("selected")){_.maximize(b)}_.opener.callBackMultiple([a])}}}}}}}
};_.returnFiles=b => {if(_.opener.callBackMultiple&&b.length){var a=[];$.each(b,(d, c) => {a[d]=_.uploadURL+"/"+_.dir+"/"+$(c).data("name");a[d]=$.$.escapeDirs(a[d])});_.opener.callBackMultiple(a);if(window.opener){window.close()}}};_.returnThumbnails=c => {if(_.opener.callBackMultiple){
  var b=[];
  var a=0;
  $.each(c,(e, d) => {if($(d).data("thumb")){b[a]=_.thumbsURL+"/"+_.dir+"/"+$(d).data("name");b[a]=$.$.escapeDirs(b[a++])}});_.opener.callBackMultiple(b);if(window.opener){window.close()}
}};_.menuFile=(c, h) => {
  var g=c.data();
  var d=$(".file.selected").get();
  var b="";
  if(c.hasClass("selected")&&d.length&&(d.length>1)){
    var a=false;
    var j=0;
    var f;
    $.each(d,(k, e) => {f=$(e).data();if(f.thumb){a=true}if(!g.writable){j++}});if(_.opener.callBackMultiple){b+='<li><a href="kcact:pick"><span>'+_.label("Select")+"</span></a></li>";if(a){b+='<li><a href="kcact:pick_thumb"><span>'+_.label("Select Thumbnails")+"</span></a></li>"}}if(g.thumb||g.smallThumb||_.support.zip){b+=(b.length?"<li>-</li>":"");if(g.thumb||g.smallThumb){b+='<li><a href="kcact:view"><span>'+_.label("View")+"</span></a></li>"}if(_.support.zip){b+=(b.length?"<li>-</li>":"")+'<li><a href="kcact:download"><span>'+_.label("Download")+"</span></a></li>"}}if(_.access.files.copy||_.access.files.move){b+=(b.length?"<li>-</li>":"")+'<li><a href="kcact:clpbrdadd"><span>'+_.label("Add to Clipboard")+"</span></a></li>"}if(_.access.files["delete"]){b+=(b.length?"<li>-</li>":"")+'<li><a href="kcact:rm"'+((j==d.length)?' class="denied"':"")+"><span>"+_.label("Delete")+"</span></a></li>"}if(b.length){b="<ul>"+b+"</ul>";$("#dialog").html(b).find("ul").first().menu();_.showMenu(h)}else{return}$('#dialog a[href="kcact:pick"]').click(() => {_.returnFiles(d);_.hideDialog();return false});$('#dialog a[href="kcact:pick_thumb"]').click(() => {_.returnThumbnails(d);_.hideDialog();return false});$('#dialog a[href="kcact:download"]').click(() => {_.hideDialog();var e=[];$.each(d,(l, k) => {e[l]=$(k).data("name")});_.post(_.baseGetData("downloadSelected"),{dir:_.dir,files:e});return false});$('#dialog a[href="kcact:clpbrdadd"]').click(() => {_.hideDialog();var e="";$.each(d,(m, l) => {
      var n=$(l).data();
      var k=false;
      for(m=0;m<_.clipboard.length;m++){if((_.clipboard[m].name==n.name)&&(_.clipboard[m].dir==_.dir)){k=true;e+=n.name+": "+_.label("This file is already added to the Clipboard.")+"\n";break}}if(!k){n.dir=_.dir;_.clipboard[_.clipboard.length]=n}
    });_.initClipboard();if(e.length){_.alert(e.substr(0,e.length-1))}return false});$('#dialog a[href="kcact:rm"]').click(function(){
      if($(this).hasClass("denied")){return false}_.hideDialog();
      var e=0;
      var l=[];
      $.each(d,(n, m) => {var o=$(m).data();if(!o.writable){e++}else{l[l.length]=_.dir+"/"+o.name}});if(e==d.length){_.alert(_.label("The selected files are not removable."));return false}var k=m => {_.fadeFiles();$.ajax({type:"post",dataType:"json",url:_.baseGetData("rm_cbd"),data:{files:l},async:false,success(n) {if(m){m()}_.check4errors(n);_.refresh()},error() {if(m){m()}$("#files > div").css({opacity:"",filter:""});_.alert(_.label("Unknown error."))}})};if(e){_.confirm(_.label("{count} selected files are not removable. Do you want to delete the rest?",{count:e}),k)}else{_.confirm(_.label("Are you sure you want to delete all selected files?"),k)}return false
    })
  }else{b+="<ul>";$(".file").removeClass("selected");c.addClass("selected");$("#fileinfo").html(g.name+" ("+_.humanSize(g.size)+", "+g.date+")");if(_.opener.callBack||_.opener.callBackMultiple){b+='<li><a href="kcact:pick"><span>'+_.label("Select")+"</span></a></li>";if(g.thumb){b+='<li><a href="kcact:pick_thumb"><span>'+_.label("Select Thumbnail")+"</span></a></li>"}b+="<li>-</li>"}if(g.thumb||g.smallThumb){b+='<li><a href="kcact:view"><span>'+_.label("View")+"</span></a></li>"}b+='<li><a href="kcact:download"><span>'+_.label("Download")+"</span></a></li>";if(_.access.files.copy||_.access.files.move){b+='<li>-</li><li><a href="kcact:clpbrdadd"><span>'+_.label("Add to Clipboard")+"</span></a></li>"}if(_.access.files.rename||_.access.files["delete"]){b+="<li>-</li>"}if(_.access.files.rename){b+='<li><a href="kcact:mv"'+(!g.writable?' class="denied"':"")+"><span>"+_.label("Rename...")+"</span></a></li>"}if(_.access.files["delete"]){b+='<li><a href="kcact:rm"'+(!g.writable?' class="denied"':"")+"><span>"+_.label("Delete")+"</span></a></li>"}b+="</ul>";$("#dialog").html(b).find("ul").menu();_.showMenu(h);$('#dialog a[href="kcact:pick"]').click(() => {_.returnFile(c);_.hideDialog();return false});$('#dialog a[href="kcact:pick_thumb"]').click(() => {var e=_.thumbsURL+"/"+_.dir+"/"+g.name;_.returnFile(e);_.hideDialog();return false});$('#dialog a[href="kcact:download"]').click(() => {var e='<form id="downloadForm" method="post" action="'+_.baseGetData("download")+'"><input type="hidden" name="dir" /><input type="hidden" name="file" /></form>';$("#dialog").html(e);$("#downloadForm input").get(0).value=_.dir;$("#downloadForm input").get(1).value=g.name;$("#downloadForm").submit();return false});$('#dialog a[href="kcact:clpbrdadd"]').click(() => {for(i=0;i<_.clipboard.length;i++){if((_.clipboard[i].name==g.name)&&(_.clipboard[i].dir==_.dir)){_.hideDialog();_.alert(_.label("This file is already added to the Clipboard."));return false}}var e=g;e.dir=_.dir;_.clipboard[_.clipboard.length]=e;_.initClipboard();_.hideDialog();return false});$('#dialog a[href="kcact:mv"]').click(k => {if(!g.writable){return false}_.fileNameDialog(k,{dir:_.dir,file:g.name},"newName",g.name,_.baseGetData("rename"),{title:"New file name:",errEmpty:"Please enter new file name.",errSlash:"Unallowable characters in file name.",errDot:"File name shouldn't begins with '.'"},() => {_.refresh()});return false});$('#dialog a[href="kcact:rm"]').click(() => {if(!g.writable){return false}_.hideDialog();_.confirm(_.label("Are you sure you want to delete this file?"),e => {$.ajax({type:"post",dataType:"json",url:_.baseGetData("delete"),data:{dir:_.dir,file:g.name},async:false,success(k) {if(e){e()}_.clearClipboard();if(_.check4errors(k)){return}_.refresh()},error() {if(e){e()}_.alert(_.label("Unknown error."))}})});return false})}$('#dialog a[href="kcact:view"]').click(() => {_.hideDialog();var k=new Date().getTime();var e=n => {
    var m=$.$.escapeDirs(_.uploadURL+"/"+_.dir+"/"+n.name)+"?ts="+k;
    var l=new Image();
    $("#loading").html(_.label("Loading image...")).css("display","inline");l.src=m;l.onerror=() => {_.lock=false;$("#loading").css("display","none");_.alert(_.label("Unknown error."));$(document).unbind("keydown").keydown(p => !_.selectAll(p));_.refresh()};var o=() => {_.lock=false;$("#files .file").each(function(){if($(this).data("name")==n.name){_.ssImage=this}});$("#loading").css("display","none");$("#dialog").html('<div class="slideshow"><img /></div>');$("#dialog img").attr({src:m,title:n.name}).fadeIn("fast",() => {var q=$("#dialog").outerWidth();var s=$("#dialog").outerHeight();var r=$(window).width()-30;var t=$(window).height()-30;if((q>r)||(s>t)){if((r/t)>(q/s)){r=parseInt((q*t)/s)}else{if((r/t)<(q/s)){t=parseInt((s*r)/q)}}$("#dialog img").attr({width:r,height:t})}$("#dialog").unbind("click").click(u => {_.hideDialog();$(document).unbind("keydown");$(document).keydown(v => !_.selectAll(v));if(_.ssImage){_.selectFile($(_.ssImage),u)}});_.showDialog();var p=[];$.each(_.files,(v, u) => {if(u.thumb||u.smallThumb){p[p.length]=u}});if(p.length){$.each(p,(u, v) => {if(v.name==n.name){$(document).unbind("keydown").keydown(x => {if(p.length>1){if(!_.lock&&(x.keyCode==37)){var w=u?p[u-1]:p[p.length-1];_.lock=true;e(w)}if(!_.lock&&(x.keyCode==39)){var w=(u>=p.length-1)?p[0]:p[u+1];_.lock=true;e(w)}}if(x.keyCode==27){_.hideDialog();$(document).unbind("keydown").keydown(y => !_.selectAll(y))}})}})}})};if(l.complete){o()}else{l.onload=o}
  };e(g);return false})
};_.initFolders=() => {$("#folders").scroll(() => {_.hideDialog()});$("div.folder > a").unbind().click(() => {_.hideDialog();return false});$("div.folder > a > span.brace").unbind().click(function(){if($(this).hasClass("opened")||$(this).hasClass("closed")){_.expandDir($(this).parent())}});$("div.folder > a > span.folder").unbind().click(function(){_.changeDir($(this).parent())}).rightClick((a, b) => {$.$.unselect();_.menuDir($(a).parent(),b)})};_.setTreeData=(b, c) => {if(!c){c=""}else{if(c.length&&(c.substr(c.length-1,1)!="/")){c+="/"}}c+=b.name;var a='#folders a[href="kcdir:/'+$.$.escapeDirs(c)+'"]';$(a).data({name:b.name,path:c,readable:b.readable,writable:b.writable,removable:b.removable,hasDirs:b.hasDirs});$(a+" span.folder").addClass(b.current?"current":"regular");if(b.dirs&&b.dirs.length){$(a+" span.brace").addClass("opened");$.each(b.dirs,(e, d) => {_.setTreeData(d,c+"/")})}else{if(b.hasDirs){$(a+" span.brace").addClass("closed")}}};_.buildTree=(a, e) => {
  if(!e){e=""}e+=a.name;
  var b;
  var d='<div class="folder"><a href="kcdir:/'+$.$.escapeDirs(e)+'"><span class="brace">&nbsp;</span><span class="folder">'+$.$.htmlData(a.name)+"</span></a>";
  if(a.dirs){d+='<div class="folders">';for(var c=0;c<a.dirs.length;c++){b=a.dirs[c];d+=_.buildTree(b,e+"/")}d+="</div>"}d+="</div>";return d
};_.expandDir=a => {var b=a.data("path");if(a.children(".brace").hasClass("opened")){a.parent().children(".folders").hide(500,() => {if(b==_.dir.substr(0,b.length)){_.changeDir(a)}});a.children(".brace").removeClass("opened").addClass("closed")}else{if(a.parent().children(".folders").get(0)){a.parent().children(".folders").show(500);a.children(".brace").removeClass("closed").addClass("opened")}else{if(!$("#loadingDirs").get(0)){a.parent().append('<div id="loadingDirs">'+_.label("Loading folders...")+"</div>");$("#loadingDirs").css("display","none").show(200,() => {$.ajax({type:"post",dataType:"json",url:_.baseGetData("expand"),data:{dir:b},async:false,success(e) {$("#loadingDirs").hide(200,() => {$("#loadingDirs").detach()});if(_.check4errors(e)){return}var d="";$.each(e.dirs,(g, f) => {d+='<div class="folder"><a href="kcdir:/'+$.$.escapeDirs(b+"/"+f.name)+'"><span class="brace">&nbsp;</span><span class="folder">'+$.$.htmlData(f.name)+"</span></a></div>"});if(d.length){a.parent().append('<div class="folders">'+d+"</div>");var c=$(a.parent().children(".folders").first());c.css("display","none");$(c).show(500);$.each(e.dirs,(g, f) => {_.setTreeData(f,b)})}if(e.dirs.length){a.children(".brace").removeClass("closed").addClass("opened")}else{a.children(".brace").removeClass("opened closed")}_.initFolders();_.initDropUpload()},error() {$("#loadingDirs").detach();_.alert(_.label("Unknown error."))}})})}}}};_.changeDir=a => {if(a.children("span.folder").hasClass("regular")){$("div.folder > a > span.folder").removeClass("current regular").addClass("regular");a.children("span.folder").removeClass("regular");a.children("span.folder").addClass("current");$("#files").html(_.label("Loading files..."));$.ajax({type:"post",dataType:"json",url:_.baseGetData("chDir"),data:{dir:a.data("path")},async:false,success(b) {if(_.check4errors(b)){return}_.files=b.files;_.orderFiles();_.dir=a.data("path");_.dirWritable=b.dirWritable;var c="KCFinder: /"+_.dir;document.title=c;if(_.opener.name=="tinymce"){tinyMCEPopup.editor.windowManager.setTitle(window,c)}_.statusDir()},error() {$("#files").html(_.label("Unknown error."))}})}};_.statusDir=() => {for(var b=0,a=0;b<_.files.length;b++){a+=parseInt(_.files[b].size)}a=_.humanSize(a);$("#fileinfo").html(_.files.length+" "+_.label("files")+" ("+a+")")};_.menuDir=(a, d) => {var c=a.data();var b="<ul>";if(_.clipboard&&_.clipboard.length){if(_.access.files.copy){b+='<li><a href="kcact:cpcbd"'+(!c.writable?' class="denied"':"")+"><span>"+_.label("Copy {count} files",{count:_.clipboard.length})+"</span></a></li>"}if(_.access.files.move){b+='<li><a href="kcact:mvcbd"'+(!c.writable?' class="denied"':"")+"><span>"+_.label("Move {count} files",{count:_.clipboard.length})+"</span></a></li>"}if(_.access.files.copy||_.access.files.move){b+="<li>-</li>"}}b+='<li><a href="kcact:refresh"><span>'+_.label("Refresh")+"</span></a></li>";if(_.support.zip){b+='<li>-</li><li><a href="kcact:download"><span>'+_.label("Download")+"</span></a></li>"}if(_.access.dirs.create||_.access.dirs.rename||_.access.dirs["delete"]){b+="<li>-</li>"}if(_.access.dirs.create){b+='<li><a href="kcact:mkdir"'+(!c.writable?' class="denied"':"")+"><span>"+_.label("New Subfolder...")+"</span></a></li>"}if(_.access.dirs.rename){b+='<li><a href="kcact:mvdir"'+(!c.removable?' class="denied"':"")+"><span>"+_.label("Rename...")+"</span></a></li>"}if(_.access.dirs["delete"]){b+='<li><a href="kcact:rmdir"'+(!c.removable?' class="denied"':"")+"><span>"+_.label("Delete")+"</span></a></li>"}b+="</ul>";$("#dialog").html(b).find("ul").menu();_.showMenu(d);$("div.folder > a > span.folder").removeClass("context");if(a.children("span.folder").hasClass("regular")){a.children("span.folder").addClass("context")}if(_.clipboard&&_.clipboard.length&&c.writable){$('#dialog a[href="kcact:cpcbd"]').click(() => {_.hideDialog();_.copyClipboard(c.path);return false});$('#dialog a[href="kcact:mvcbd"]').click(() => {_.hideDialog();_.moveClipboard(c.path);return false})}$('#dialog a[href="kcact:refresh"]').click(() => {_.hideDialog();_.refreshDir(a);return false});$('#dialog a[href="kcact:download"]').click(() => {_.hideDialog();_.post(_.baseGetData("downloadDir"),{dir:c.path});return false});$('#dialog a[href="kcact:mkdir"]').click(f => {if(!c.writable){return false}_.hideDialog();_.fileNameDialog(f,{dir:c.path},"newDir","",_.baseGetData("newDir"),{title:"New folder name:",errEmpty:"Please enter new folder name.",errSlash:"Unallowable characters in folder name.",errDot:"Folder name shouldn't begins with '.'"},() => {_.refreshDir(a);_.initDropUpload();if(!c.hasDirs){a.data("hasDirs",true);a.children("span.brace").addClass("closed")}});return false});$('#dialog a[href="kcact:mvdir"]').click(f => {if(!c.removable){return false}_.hideDialog();_.fileNameDialog(f,{dir:c.path},"newName",c.name,_.baseGetData("renameDir"),{title:"New folder name:",errEmpty:"Please enter new folder name.",errSlash:"Unallowable characters in folder name.",errDot:"Folder name shouldn't begins with '.'"},e => {if(!e.name){_.alert(_.label("Unknown error."));return}var g=(c.path==_.dir);a.children("span.folder").html($.$.htmlData(e.name));a.data("name",e.name);a.data("path",$.$.dirname(c.path)+"/"+e.name);if(g){_.dir=a.data("path")}_.initDropUpload()},true);return false});$('#dialog a[href="kcact:rmdir"]').click(() => {if(!c.removable){return false}_.hideDialog();_.confirm(_.label("Are you sure you want to delete this folder and all its content?"),e => {$.ajax({type:"post",dataType:"json",url:_.baseGetData("deleteDir"),data:{dir:c.path},async:false,success(f) {if(e){e()}if(_.check4errors(f)){return}a.parent().hide(500,() => {var h=a.parent().parent();var g=h.parent().children("a").first();a.parent().detach();if(!h.children("div.folder").get(0)){g.children("span.brace").first().removeClass("opened closed");g.parent().children(".folders").detach();g.data("hasDirs",false)}if(g.data("path")==_.dir.substr(0,g.data("path").length)){_.changeDir(g)}_.initDropUpload()})},error() {if(e){e()}_.alert(_.label("Unknown error."))}})});return false})};_.refreshDir=a => {var b=a.data("path");if(a.children(".brace").hasClass("opened")||a.children(".brace").hasClass("closed")){a.children(".brace").removeClass("opened").addClass("closed")}a.parent().children(".folders").first().detach();if(b==_.dir.substr(0,b.length)){_.changeDir(a)}_.expandDir(a);return true};_.initClipboard=() => {if(!_.clipboard||!_.clipboard.length){return}var b=0;$.each(_.clipboard,(c, d) => {b+=parseInt(d.size)});b=_.humanSize(b);$("#clipboard").html('<div title="'+_.label("Clipboard")+" ("+_.clipboard.length+" "+_.label("files")+", "+b+')" onclick="_.openClipboard()"></div>');var a=() => {$("#clipboard").css({left:$(window).width()-$("#clipboard").outerWidth(),top:$(window).height()-$("#clipboard").outerHeight()})};a();$("#clipboard").css("display","block");$(window).unbind();$(window).resize(() => {_.resize();a()})};_.openClipboard=() => {if(!_.clipboard||!_.clipboard.length){return}if($('#dialog a[href="kcact:cpcbd"]').html()){$("#clipboard").removeClass("selected");_.hideDialog();return}var a='<ul><li class="list">';$.each(_.clipboard,(b, d) => {var c=$.$.getFileExtension(d.name);if(d.thumb){c=".image"}else{if(!d.smallIcon||!c.length){c="."}}c="themes/"+_.theme+"/img/files/small/"+c+".png";a+='<a title="'+_.label("Click to remove from the Clipboard")+'" onclick="_.removeFromClipboard('+b+')"'+((b==0)?' class="first"':"")+'><span style="background-image:url('+$.$.escapeDirs(c)+')">'+$.$.htmlData($.$.basename(d.name))+"</span></a>"});a+='</li><li class="div-files">-</li>';if(_.support.zip){a+='<li><a href="kcact:download"><span>'+_.label("Download files")+"</span></a></li>"}if(_.access.files.copy||_.access.files.move||_.access.files["delete"]){a+="<li>-</li>"}if(_.access.files.copy){a+='<li><a href="kcact:cpcbd"'+(!_.dirWritable?' class="denied"':"")+"><span>"+_.label("Copy files here")+"</span></a></li>"}if(_.access.files.move){a+='<li><a href="kcact:mvcbd"'+(!_.dirWritable?' class="denied"':"")+"><span>"+_.label("Move files here")+"</span></a></li>"}if(_.access.files["delete"]){a+='<li><a href="kcact:rmcbd"><span>'+_.label("Delete files")+"</span></a></li>"}a+='<li>-</li><li><a href="kcact:clrcbd"><span>'+_.label("Clear the Clipboard")+"</span></a></li></ul>";setTimeout(() => {$("#clipboard").addClass("selected");$("#dialog").html(a).find("ul").first().menu();$('#dialog a[href="kcact:download"]').click(() => {_.hideDialog();_.downloadClipboard();return false});$('#dialog a[href="kcact:cpcbd"]').click(() => {if(!_.dirWritable){return false}_.hideDialog();_.copyClipboard(_.dir);return false});$('#dialog a[href="kcact:mvcbd"]').click(() => {if(!_.dirWritable){return false}_.hideDialog();_.moveClipboard(_.dir);return false});$('#dialog a[href="kcact:rmcbd"]').click(() => {_.hideDialog();_.confirm(_.label("Are you sure you want to delete all files in the Clipboard?"),e => {if(e){e()}_.deleteClipboard()});return false});$('#dialog a[href="kcact:clrcbd"]').click(() => {_.hideDialog();_.clearClipboard();return false});var c=$(window).width()-$("#dialog").outerWidth();var b=$(window).height()-$("#dialog").outerHeight()-$("#status").outerHeight();var d=b+$("#dialog").outerTopSpace();$("#dialog .list").css({"max-height":d,"overflow-y":"auto","overflow-x":"hidden"});b=$(window).height()-$("#dialog").outerHeight(true)-$("#status").outerHeight(true);$("#dialog").css({left:c-5,top:b}).fadeIn("fast")},1)};_.removeFromClipboard=a => {if(!_.clipboard||!_.clipboard[a]){return false}if(_.clipboard.length==1){_.clearClipboard();_.hideDialog();return}if(a<_.clipboard.length-1){var b=_.clipboard.slice(a+1);_.clipboard=_.clipboard.slice(0,a);_.clipboard=_.clipboard.concat(b)}else{_.clipboard.pop()}_.initClipboard();_.hideDialog();_.openClipboard();return true};_.copyClipboard=b => {
  if(!_.clipboard||!_.clipboard.length){return}
  var d=[];
  var a=0;
  for(i=0;i<_.clipboard.length;i++){if(_.clipboard[i].readable){d[i]=_.clipboard[i].dir+"/"+_.clipboard[i].name}else{a++}}if(_.clipboard.length==a){_.alert(_.label("The files in the Clipboard are not readable."));return}var c=e => {if(b==_.dir){_.fadeFiles()}$.ajax({type:"post",dataType:"json",url:_.baseGetData("cp_cbd"),data:{dir:b,files:d},async:false,success(f) {if(e){e()}_.check4errors(f);_.clearClipboard();if(b==_.dir){_.refresh()}},error() {if(e){e()}$("#files > div").css({opacity:"",filter:""});_.alert(_.label("Unknown error."))}})};if(a){_.confirm(_.label("{count} files in the Clipboard are not readable. Do you want to copy the rest?",{count:a}),c)}else{c()}
};_.moveClipboard=b => {
  if(!_.clipboard||!_.clipboard.length){return}
  var d=[];
  var a=0;
  for(i=0;i<_.clipboard.length;i++){if(_.clipboard[i].readable&&_.clipboard[i].writable){d[i]=_.clipboard[i].dir+"/"+_.clipboard[i].name}else{a++}}if(_.clipboard.length==a){_.alert(_.label("The files in the Clipboard are not movable."));return}var c=e => {_.fadeFiles();$.ajax({type:"post",dataType:"json",url:_.baseGetData("mv_cbd"),data:{dir:b,files:d},async:false,success(f) {if(e){e()}_.check4errors(f);_.clearClipboard();_.refresh()},error() {if(e){e()}$("#files > div").css({opacity:"",filter:""});_.alert(_.label("Unknown error."))}})};if(a){_.confirm(_.label("{count} files in the Clipboard are not movable. Do you want to move the rest?",{count:a}),c)}else{c()}
};_.deleteClipboard=() => {
  if(!_.clipboard||!_.clipboard.length){return}
  var c=[];
  var a=0;
  for(i=0;i<_.clipboard.length;i++){if(_.clipboard[i].readable&&_.clipboard[i].writable){c[i]=_.clipboard[i].dir+"/"+_.clipboard[i].name}else{a++}}if(_.clipboard.length==a){_.alert(_.label("The files in the Clipboard are not removable."));return}var b=d => {_.fadeFiles();$.ajax({type:"post",dataType:"json",url:_.baseGetData("rm_cbd"),data:{files:c},async:false,success(e) {if(d){d()}_.check4errors(e);_.clearClipboard();_.refresh()},error() {if(d){d()}$("#files > div").css({opacity:"",filter:""});_.alert(_.label("Unknown error."))}})};if(a){_.confirm(_.label("{count} files in the Clipboard are not removable. Do you want to delete the rest?",{count:a}),b)}else{b()}
};_.downloadClipboard=() => {if(!_.clipboard||!_.clipboard.length){return}var a=[];for(i=0;i<_.clipboard.length;i++){if(_.clipboard[i].readable){a[i]=_.clipboard[i].dir+"/"+_.clipboard[i].name}}if(a.length){_.post(_.baseGetData("downloadClipboard"),{files:a})}};_.clearClipboard=() => {$("#clipboard").html("");_.clipboard=[]};_.initDropUpload=() => {
  if((typeof(XMLHttpRequest)=="undefined")||(typeof(document.addEventListener)=="undefined")||(typeof(File)=="undefined")||(typeof(FileReader)=="undefined")){return}if(!XMLHttpRequest.prototype.sendAsBinary){XMLHttpRequest.prototype.sendAsBinary=function(r){
    var s=Array.prototype.map.call(r,t => t.charCodeAt(0)&255);
    var q=new Uint8Array(s);
    this.send(q.buffer)
  }}
  var n=[];
  var a=false;
  var l=0;
  var o=[];
  var b=$("#files");
  var f=$("div.folder > a");
  var e="------multipartdropuploadboundary"+(new Date).getTime();
  var d;
  var k=q => {if(q.preventDefault){q.preventDefault()}$("#files").addClass("drag");return false};
  var p=q => {if(q.preventDefault){q.preventDefault()}return false};
  var h=q => {if(q.preventDefault){q.preventDefault()}$("#files").removeClass("drag");return false};
  var j=s => {if(s.preventDefault){s.preventDefault()}if(s.stopPropagation){s.stopPropagation()}$("#files").removeClass("drag");if(!$("#folders span.current").first().parent().data("writable")){_.alert("Cannot write to upload folder.");return false}l+=s.dataTransfer.files.length;for(var r=0;r<s.dataTransfer.files.length;r++){var q=s.dataTransfer.files[r];q.thisTargetDir=_.dir;n.push(q)}g();return false};
  var m=q => {if(q.preventDefault){q.preventDefault()}return false};
  var i=(t, q) => {if(t.preventDefault){t.preventDefault()}if(t.stopPropagation){t.stopPropagation()}if(!$(q).data("writable")){_.alert(_.label("Cannot write to upload folder."));return false}l+=t.dataTransfer.files.length;for(var s=0;s<t.dataTransfer.files.length;s++){var r=t.dataTransfer.files[s];r.thisTargetDir=$(q).data("path");n.push(r)}g();return false};
  b.get(0).removeEventListener("dragover",k,false);b.get(0).removeEventListener("dragenter",p,false);b.get(0).removeEventListener("dragleave",h,false);b.get(0).removeEventListener("drop",j,false);b.get(0).addEventListener("dragover",k,false);b.get(0).addEventListener("dragenter",p,false);b.get(0).addEventListener("dragleave",h,false);b.get(0).addEventListener("drop",j,false);f.each(function(){
    var s=this;
    var t=u => {$(s).children("span.folder").addClass("context");return m(u)};
    var r=u => {$(s).children("span.folder").removeClass("context");return m(u)};
    var q=u => {$(s).children("span.folder").removeClass("context");return i(u,s)};
    this.removeEventListener("dragover",t,false);this.removeEventListener("dragenter",m,false);this.removeEventListener("dragleave",r,false);this.removeEventListener("drop",q,false);this.addEventListener("dragover",t,false);this.addEventListener("dragenter",m,false);this.addEventListener("dragleave",r,false);this.addEventListener("drop",q,false)
  });function c(q){var r=q.lengthComputable?Math.round((q.loaded*100)/q.total)+"%":Math.round(q.loaded/1024)+" KB";$("#loading").html(_.label("Uploading file {number} of {count}... {progress}",{number:l-n.length,count:l,progress:r}))}function g(){if(a){return false}if(n&&n.length){var s=n.shift();d=s;$("#loading").html(_.label("Uploading file {number} of {count}... {progress}",{number:l-n.length,count:l,progress:""}));$("#loading").css("display","inline");var q=new FileReader();q.thisFileName=s.name;q.thisFileType=s.type;q.thisFileSize=s.size;q.thisTargetDir=s.thisTargetDir;q.onload=t => {a=true;var u="--"+e+'\r\nContent-Disposition: form-data; name="upload[]"';if(t.target.thisFileName){u+='; filename="'+$.$.utf8encode(t.target.thisFileName)+'"'}u+="\r\n";if(t.target.thisFileSize){u+="Content-Length: "+t.target.thisFileSize+"\r\n"}u+="Content-Type: "+t.target.thisFileType+"\r\n\r\n"+t.target.result+"\r\n--"+e+'\r\nContent-Disposition: form-data; name="dir"\r\n\r\n'+$.$.utf8encode(t.target.thisTargetDir)+"\r\n--"+e+"\r\n--"+e+"--\r\n";var v=new XMLHttpRequest();v.thisFileName=t.target.thisFileName;if(v.upload){v.upload.thisFileName=t.target.thisFileName;v.upload.addEventListener("progress",c,false)}v.open("post",_.baseGetData("upload"),true);v.setRequestHeader("Content-Type","multipart/form-data; boundary="+e);v.setRequestHeader("Content-Length",u.length);v.onload=w => {$("#loading").css("display","none");if(_.dir==q.thisTargetDir){_.fadeFiles()}a=false;g();if(v.responseText.substr(0,1)!="/"){o[o.length]=v.responseText}};v.sendAsBinary(u)};q.onerror=t => {$("#loading").css("display","none");a=false;g();o[o.length]=_.label("Failed to upload {filename}!",{filename:t.target.thisFileName})};q.readAsBinaryString(s)}else{l=0;var r=setInterval(() => {if(a){return}e="------multipartdropuploadboundary"+(new Date).getTime();n=[];clearInterval(r);if(d.thisTargetDir==_.dir){_.refresh()}if(o.length){_.alert(o.join("\n"));o=[]}},333)}}
};_.drag=function(b,a){
  var d=a.offsetY;
  var c=a.offsetX;
  if(d<0){d=0}if(c<0){c=0}if(d+$(this).outerHeight()>$(window).height()){d=$(window).height()-$(this).outerHeight()}if(c+$(this).outerWidth()>$(window).width()){c=$(window).width()-$(this).outerWidth()}$(this).css({top:d,left:c})
};_.showDialog=c => {$("#dialog").css({left:0,top:0});_.shadow();$("#dialog").css("display","block");if(c){var b=c.pageX-parseInt($("#dialog").outerWidth()/2);var a=c.pageY-parseInt($("#dialog").outerHeight()/2);if(b<0){b=0}if(a<0){a=0}if(($("#dialog").outerWidth()+b)>$(window).width()){b=$(window).width()-$("#dialog").outerWidth()}if(($("#dialog").outerHeight()+a)>$(window).height()){a=$(window).height()-$("#dialog").outerHeight()}$("#dialog").css({left:b,top:a})}else{$("#dialog").css({left:parseInt(($(window).width()-$("#dialog").outerWidth())/2),top:parseInt(($(window).height()-$("#dialog").outerHeight())/2)})}$(document).unbind("keydown").keydown(d => {if(d.keyCode==27){_.hideDialog()}})};_.hideDialog=() => {_.unshadow();if($("#clipboard").hasClass("selected")){$("#clipboard").removeClass("selected")}$("div.folder > a > span.folder").removeClass("context");$("#dialog").css("display","none").html("").data("title",null).unbind().click(() => false);$(document).unbind("keydown").keydown(a => !_.selectAll(a))};_.shadow=() => {$("#shadow").css("display","block")};_.unshadow=() => {$("#shadow").css("display","none")};_.showMenu=c => {var b=c.pageX;var a=c.pageY;if(($("#dialog").outerWidth()+b)>$(window).width()){b=$(window).width()-$("#dialog").outerWidth()}if(($("#dialog").outerHeight()+a)>$(window).height()){a=$(window).height()-$("#dialog").outerHeight()}$("#dialog").css({left:b,top:a,display:"none"}).fadeIn("fast")};_.fileNameDialog=(h, m, i, d, a, g, b, c) => {
  _.hideDialog();
  var f='<form method="post" action="javascript:;"><input name="'+i+'" type="text" /></form>';
  var j=() => {var e=k.find('[type="text"]').get(0);e.value=$.trim(e.value);if(e.value==""){_.alert(_.label(g.errEmpty),() => {e.focus()});return false}else{if(/[\/\\]/g.test(e.value)){_.alert(_.label(g.errSlash),() => {e.focus()});return false}else{if(e.value.substr(0,1)=="."){_.alert(_.label(g.errDot),() => {e.focus()});return false}}}m[i]=e.value;$.ajax({type:"post",dataType:"json",url:a,data:m,async:false,success(n) {if(_.check4errors(n,false)){return}if(b){b(n)}k.dialog("destroy").detach()},error() {_.alert(_.label("Unknown error."))}});return false};
  var k=_.dialog(_.label(g.title),f,{width:351,buttons:[{text:_.label("OK"),click() {j()}},{text:_.label("Cancel"),click() {$(this).dialog("destroy").detach()}}]});
  var l=k.find('[type="text"]');
  l.uniform().attr("value",d).css("width",310);k.find("form").submit(j);if(!c&&/^(.+)\.[^\.]+$/.test(d)){l.selection(0,d.replace(/^(.+)\.[^\.]+$/,"$1").length)}else{l.get(0).focus();l.get(0).select()}
};_.orderFiles=(c, b) => {var a=$.$.kuki.get("order");var d=($.$.kuki.get("orderDesc")=="on");if(!_.files||!_.files.sort){_.files=[]}_.files=_.files.sort((h, f) => {
  var g;
  var i;
  var e;
  if(!a){a="name"}if(a=="date"){g=h.mtime;i=f.mtime}else{if(a=="type"){g=$.$.getFileExtension(h.name);i=$.$.getFileExtension(f.name)}else{if(a=="size"){g=h.size;i=f.size}else{g=h[a].toLowerCase();i=f[a].toLowerCase()}}}if((a=="size")||(a=="date")){if(g<i){return d?1:-1}if(g>i){return d?-1:1}}if(g==i){g=h.name.toLowerCase();i=f.name.toLowerCase();e=[g,i];e=e.sort();return(e[0]==g)?-1:1}e=[g,i];e=e.sort();if(e[0]==g){return d?1:-1}return d?-1:1
});_.showFiles(c,b);_.initFiles()};_.humanSize=a => {if(a<1024){a=a.toString()+" B"}else{if(a<1048576){a/=1024;a=parseInt(a).toString()+" KB"}else{if(a<1073741824){a/=1048576;a=parseInt(a).toString()+" MB"}else{if(a<1099511627776){a/=1073741824;a=parseInt(a).toString()+" GB"}else{a/=1099511627776;a=parseInt(a).toString()+" TB"}}}}return a};_.baseGetData=a => {var b="browse.php?type="+encodeURIComponent(_.type)+"&lng="+_.lang;if(a){b+="&act="+a}if(_.cms){b+="&cms="+_.cms}return b};_.label=(b, c) => {var a=_.labels[b]?_.labels[b]:b;if(c){$.each(c,(d, e) => {a=a.replace("{"+d+"}",e)})}return a};_.check4errors=(a, c) => {if(!a.error){return false}var b;if(a.error.join){b=a.error.join("\n")}else{b=a.error}_.alert(b);return true};_.post=(a, c) => {var b='<form id="postForm" method="post" action="'+a+'">';$.each(c,(d, e) => {if($.isArray(e)){$.each(e,(g, f) => {b+='<input type="hidden" name="'+$.$.htmlValue(d)+'[]" value="'+$.$.htmlValue(f)+'" />'})}else{b+='<input type="hidden" name="'+$.$.htmlValue(d)+'" value="'+$.$.htmlValue(e)+'" />'}});b+="</form>";$("#dialog").html(b).css("display","block");$("#postForm").get(0).submit()};_.fadeFiles=() => {$("#files > div").css({opacity:"0.4",filter:"alpha(opacity=40)"})};