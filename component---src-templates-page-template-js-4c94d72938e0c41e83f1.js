(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));a("91GP");var n=a("IoIP"),i=a("q1tI"),l=a.n(i),r=a("Wbzz"),c=(a("f3/d"),a("iSRb")),o=a.n(c),s=function(e){var t=e.author,a=e.isIndex;return l.a.createElement("div",{className:o.a.author},l.a.createElement(r.Link,{to:"/"},l.a.createElement("img",{src:Object(r.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),a?l.a.createElement("h1",{className:o.a.author__title},l.a.createElement(r.Link,{className:o.a["author__title-link"],to:"/"},t.name)):l.a.createElement("h2",{className:o.a.author__title},l.a.createElement(r.Link,{className:o.a["author__title-link"],to:"/"},t.name)),l.a.createElement("p",{className:o.a.author__subtitle},t.bio))},m=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("7Qib")),u=a("euHg"),_=a.n(u),d=function(e){var t=e.icon;return l.a.createElement("svg",{className:_.a.icon,viewBox:t.viewBox},l.a.createElement("path",{d:t.path}))},p=a("aU/I"),h=a.n(p),k=function(e){var t=e.contacts;return l.a.createElement("div",{className:h.a.contacts},l.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return l.a.createElement("li",{className:h.a["contacts__list-item"],key:e},l.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(m.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},l.a.createElement(d,{icon:Object(m.b)(e)})))}))))},b=a("Nrk+"),g=a.n(b),f=function(e){var t=e.copyright;return l.a.createElement("div",{className:g.a.copyright},t)},E=(a("Z2Ku"),a("L9s1"),a("je8k")),v=a.n(E),y=function(e){var t=e.menu;return l.a.createElement("nav",{className:v.a.menu},l.a.createElement("ul",{className:v.a.menu__list},t.map((function(e){return l.a.createElement("li",{className:v.a["menu__list-item"],key:e.path},e.path.includes("https://")?l.a.createElement("a",{href:e.path,title:e.label,target:"_blank"},e.label):l.a.createElement(r.Link,{to:e.path,className:v.a["menu__list-item-link"],activeClassName:v.a["menu__list-item-link--active"]},e.label))}))))},N=a("SySy"),I=a.n(N),w=function(e){var t=e.data,a=e.isIndex,n=t.site.siteMetadata,i=n.author,r=n.copyright,c=n.menu;return l.a.createElement("div",{className:I.a.sidebar},l.a.createElement("div",{className:I.a.sidebar__inner},l.a.createElement(s,{author:i,isIndex:a}),l.a.createElement(y,{menu:c}),l.a.createElement(k,{contacts:i.contacts}),l.a.createElement(f,{copyright:r})))},x=function(e){return l.a.createElement(r.StaticQuery,{query:"3680468979",render:function(t){return l.a.createElement(w,Object.assign({},e,{data:t}))},data:n})}},"8vKr":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));var n=a("q1tI"),i=a.n(n),l=a("Zttt"),r=a("/d1K"),c=a("RXmK"),o="4092021430";t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,o=a.subtitle,s=t.markdownRemark.frontmatter,m=s.title,u=s.description,_=t.markdownRemark.html,d=null!==u?u:o;return i.a.createElement(l.a,{title:m+" - "+n,description:d},i.a.createElement(r.a,null),i.a.createElement(c.a,{title:m},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:_}})))}},IoIP:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"AKAI","subtitle":"Akademickie Koło Aplikacji Internetowych Politechniki Poznańskiej","copyright":"© All rights reserved.","menu":[{"label":"Artykuły","path":"/"},{"label":"Projekty","path":"https://apps.akai.org.pl"},{"label":"Hackathony","path":"https://hackathons.akai.org.pl"},{"label":"Fanpage","path":"https://www.facebook.com/akai.pp/"},{"label":"Kontakt","path":"/pages/contacts"}],"author":{"name":"AKAI","photo":"/logo.png","bio":"Akademickie Koło Aplikacji Internetowych Politechniki Poznańskiej","contacts":{"twitter":"akai_pp","github":"akai-org","email":"kontakt@akai.org.pl"}}}}}}')},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),r=a.n(l),c=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.scrollIntoView()})),i.a.createElement("div",{ref:l,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},t&&i.a.createElement("h1",{className:r.a.page__title},t),i.a.createElement("div",{className:r.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-4c94d72938e0c41e83f1.js.map