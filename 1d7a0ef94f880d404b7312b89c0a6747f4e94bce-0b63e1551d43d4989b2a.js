(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/9aa":function(e,t,a){var n=a("NykK"),o=a("ExA7");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a("91GP");var n=a("IoIP"),o=a("q1tI"),r=a.n(o),i=a("Wbzz"),u=(a("f3/d"),a("iSRb")),c=a.n(u),l=function(e){var t=e.author,a=e.isIndex;return r.a.createElement("div",{className:c.a.author},r.a.createElement(i.Link,{to:"/"},r.a.createElement("img",{src:Object(i.withPrefix)(t.photo),className:c.a.author__photo,width:"75",height:"75",alt:t.name})),a?r.a.createElement("h1",{className:c.a.author__title},r.a.createElement(i.Link,{className:c.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:c.a.author__title},r.a.createElement(i.Link,{className:c.a["author__title-link"],to:"/"},t.name)),r.a.createElement("p",{className:c.a.author__subtitle},t.bio))},s=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("7Qib")),f=a("euHg"),m=a.n(f),d=function(e){var t=e.icon;return r.a.createElement("svg",{className:m.a.icon,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))},p=a("aU/I"),_=a.n(p),h=function(e){var t=e.contacts;return r.a.createElement("div",{className:_.a.contacts},r.a.createElement("ul",{className:_.a.contacts__list},Object.keys(t).map((function(e){return r.a.createElement("li",{className:_.a["contacts__list-item"],key:e},r.a.createElement("a",{className:_.a["contacts__list-item-link"],href:Object(s.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d,{icon:Object(s.b)(e)})))}))))},x=a("Nrk+"),b=a.n(x),g=function(e){var t=e.copyright;return r.a.createElement("div",{className:b.a.copyright},t)},v=(a("Z2Ku"),a("L9s1"),a("je8k")),k=a.n(v),y=function(e){var t=e.menu;return r.a.createElement("nav",{className:k.a.menu},r.a.createElement("ul",{className:k.a.menu__list},t.map((function(e){return r.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},e.path.includes("https://")?r.a.createElement("a",{href:e.path,title:e.label,target:"_blank"},e.label):r.a.createElement(i.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))}))))},E=a("SySy"),N=a.n(E),A=function(e){var t=e.data,a=e.isIndex,n=t.site.siteMetadata,o=n.author,i=n.copyright,u=n.menu;return r.a.createElement("div",{className:N.a.sidebar},r.a.createElement("div",{className:N.a.sidebar__inner},r.a.createElement(l,{author:o,isIndex:a}),r.a.createElement(y,{menu:u}),r.a.createElement(h,{contacts:o.contacts}),r.a.createElement(g,{copyright:i})))},j=function(e){return r.a.createElement(i.StaticQuery,{query:"3680468979",render:function(t){return r.a.createElement(A,Object.assign({},e,{data:t}))},data:n})}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,a){a("SRfc");var n=a("dVn5"),o=a("fo6e"),r=a("dt0z"),i=a("9NmV");e.exports=function(e,t,a){return e=r(e),void 0===(t=a?void 0:t)?o(e)?i(e):n(e):e.match(t)||[]}},"9NmV":function(e,t,a){a("SRfc"),a("Oyvg");var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",r="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+u+"|"+c+")",d="(?:"+f+"|"+c+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",_="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[i,l,s].join("|")+")"+_,x=RegExp([f+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,f,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,f+m,"$"].join("|")+")",f+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,h].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},AP2z:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),o=Object.prototype,r=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;e.exports=function(e){var t=r.call(e,u),a=e[u];try{e[u]=void 0;var n=!0}catch(c){}var o=i.call(e);return n&&(t?e[u]=a:delete e[u]),o}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},IoIP:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"AKAI","subtitle":"Akademickie Koło Aplikacji Internetowych Politechniki Poznańskiej","copyright":"© All rights reserved.","menu":[{"label":"Artykuły","path":"/"},{"label":"Projekty","path":"https://apps.akai.org.pl"},{"label":"Hackathony","path":"https://hackathons.akai.org.pl"},{"label":"Fanpage","path":"https://www.facebook.com/akai.pp/"},{"label":"Kontakt","path":"/pages/contacts"}],"author":{"name":"AKAI","photo":"/logo.png","bio":"Akademickie Koło Aplikacji Internetowych Politechniki Poznańskiej","contacts":{"twitter":"akai_pp","github":"akai-org","email":"kontakt@akai.org.pl"}}}}}}')},KfNM:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,a){var n=a("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,r=n||o||Function("return this")();e.exports=r},N1om:function(e,t,a){var n=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=n},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},NykK:function(e,t,a){var n=a("nmnc"),o=a("AP2z"),r=a("KfNM"),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):r(e)}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),o=a.n(n),r=a("RBgx"),i=a.n(r),u=function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current.scrollIntoView()})),o.a.createElement("div",{ref:r,className:i.a.page},o.a.createElement("div",{className:i.a.page__inner},t&&o.a.createElement("h1",{className:i.a.page__title},t),o.a.createElement("div",{className:i.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},TKrE:function(e,t,a){a("pIFo"),a("Oyvg");var n=a("qRkn"),o=a("dt0z"),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(r,n).replace(i,"")}},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},Z0cm:function(e,t,a){a("LK8F");var n=Array.isArray;e.exports=n},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},asDA:function(e,t){e.exports=function(e,t,a,n){var o=-1,r=null==e?0:e.length;for(n&&r&&(a=e[++o]);++o<r;)a=t(a,e[o],o,e);return a}},dVn5:function(e,t,a){a("SRfc");var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,a){var n=a("zoYe");e.exports=function(e){return null==e?"":n(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},fo6e:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},nmnc:function(e,t,a){var n=a("Kz5y").Symbol;e.exports=n},qRkn:function(e,t,a){var n=a("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},sgoq:function(e,t,a){a("pIFo"),a("Oyvg");var n=a("asDA"),o=a("TKrE"),r=a("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(t){return n(r(o(t).replace(i,"")),e,"")}}},zoYe:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),o=a("eUgh"),r=a("Z0cm"),i=a("/9aa"),u=n?n.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(r(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var a=t+"";return"0"==a&&1/t==-1/0?"-0":a}}}]);
//# sourceMappingURL=1d7a0ef94f880d404b7312b89c0a6747f4e94bce-0b63e1551d43d4989b2a.js.map