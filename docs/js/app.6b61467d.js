(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},o={app:0},r=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0be314":"2fcc5e40","chunk-2d0da3ed":"22fd8543","chunk-497a66d2":"26ed11d9","chunk-60f21e4f":"f0939b3f","chunk-7718d241":"7d904e35"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-497a66d2":1,"chunk-60f21e4f":1,"chunk-7718d241":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0be314":"31d6cfe0","chunk-2d0da3ed":"31d6cfe0","chunk-497a66d2":"abf6761f","chunk-60f21e4f":"e5c161ca","chunk-7718d241":"e23ef674"}[e]+".css",o=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[e],d.parentNode.removeChild(d),n(r)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",p.name="ChunkLoadError",p.type=a,p.request=s,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f7":function(e,t,n){},"1bb4":function(e,t,n){"use strict";var a=n("2fbd"),s=n.n(a);s.a},"1d26":function(e,t,n){e.exports=n.p+"img/pioneras.6d8893de.png"},"242f":function(e,t,n){e.exports=n.p+"img/huge.3f0702e4.jpg"},"248e":function(e,t,n){e.exports=n.p+"img/alexandra.2088be80.jpg"},"2e04":function(e,t,n){},"2e62":function(e,t){e.exports={platinum:{id:"platinum",title:"/Platinum",sponsors:[{name:"GitHub",image:"gitHub.png",url:"https://www.github.com"}]},gold:{id:"gold",title:"/Gold",sponsors:[{name:"Huge inc",image:"huge.jpg",url:"https://www.hugeinc.com"},{name:"Ruta N",image:"rutaN.png",url:"https://rutanmedellin.org"}]},community:{id:"community",title:"/Community _Partners",sponsors:[{name:"Pioneras Dev",image:"pioneras.png",url:"http://www.pionerasdev.co"},{name:"Angular Medellin",image:"angularmde.png",url:"https://www.meetup.com/es-ES/Angular-Medellin/"}]}}},"2e92":function(e,t,n){e.exports=n.p+"img/octogatos.be8b8ec8.jpeg"},"2fbd":function(e,t,n){},3290:function(e,t,n){e.exports=n.p+"img/luisa.16442e52.jpg"},"34e7":function(e,t,n){e.exports=n.p+"img/jhonatan.1cd36dc5.png"},3694:function(e,t,n){"use strict";var a=n("d86e"),s=n.n(a);s.a},"38f9":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-sponsors",attrs:{id:"home-sponsors"}},[n("div",{staticClass:"container"},[e._m(0),e._l(e.sponsors,(function(t){return n("div",{key:t.id,staticClass:"home-sponsors__category"},[n("h2",{staticClass:"home-sponsors__category-name wow fadeIn",attrs:{"aria-hidden":"true","data-heading":t.title}},[n("span",{staticClass:"sr-only"},[e._v(e._s(t.id))]),e._v(" "+e._s(t.title)+" ")]),n("div",{class:e.cssClasses(t.id)},e._l(t.sponsors,(function(a){return n("a",{key:a.name,staticClass:"home-sponsors__sponsor",attrs:{href:a.url}},[n("img",{staticClass:"home-sponsors__sponsor-image",attrs:{src:e.getImage("sponsors/"+t.id,a.image),alt:a.name}})])})),0)])}))],2)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"wow fadeIn"},[n("span",{staticClass:"sr-only"},[e._v("Conf sponsors")]),n("span",{staticClass:"home-sponsors__title",attrs:{"data-heading":"Conf","aria-hidden":"true"}},[e._v("Conf")]),n("br"),n("span",{staticClass:"home-sponsors__title",attrs:{"data-heading":"/Sponsors","aria-hidden":"true"}},[e._v("/Sponsors")])])}],o=n("541b"),r=n("2e62"),i=n.n(r),c=n("0d07"),l=n.n(c),u={name:"home-sponsors",data:function(){return{sponsors:i.a}},methods:{cssClasses:function(e){return"home-sponsors__category-list home-sponsors__category-list--".concat(e," wow fadeIn")},getImage:o["getImage"]},mounted:function(){(new l.a).init()}},p=u,d=(n("8ebf"),n("2877")),f=Object(d["a"])(p,a,s,!1,null,null,null);t["a"]=f.exports},"3c0a":function(e,t,n){e.exports=n.p+"img/sebas.643f4ebf.png"},"3d45":function(e,t,n){"use strict";var a=n("4575"),s=n.n(a);s.a},4076:function(e,t,n){e.exports=n.p+"img/about-fpo-back.f4981f48.jpeg"},"407f":function(e,t,n){e.exports=n.p+"img/julian.2a1ddf62.jpg"},"431f":function(e,t,n){"use strict";var a=n("ed62"),s=n.n(a);s.a},4575:function(e,t,n){},"4a46":function(e,t){e.exports="data:image/png;base64,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"},"50c47":function(e,t,n){"use strict";var a=n("a9b3"),s=n.n(a);s.a},"52e8":function(e,t,n){e.exports=n.p+"img/angularmde.76e87b96.png"},"53d7":function(e,t,n){"use strict";var a=n("01f7"),s=n.n(a);s.a},"541b":function(e,t,n){function a(e,t){return n("7584")("./".concat(e,"/").concat(t))}function s(e){return"fab fa-".concat(e,"-square")}n("99af"),e.exports={getIconClasses:s,getImage:a}},5452:function(e,t,n){"use strict";var a=n("af35"),s=n.n(a);s.a},5619:function(e,t,n){e.exports=n.p+"img/karo.09f769b9.jpeg"},"56ca":function(e,t,n){e.exports=n.p+"img/logo-horizontal.d6a406a7.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer__content wow fadeIn"},[a("div",{staticClass:"footer__brand"},[a("img",{staticClass:"footer__image",attrs:{src:n("56ca"),alt:"gitconfco logo"}}),a("p",{staticClass:"footer__brand-name"},[e._v(" Powered by "),a("i",{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("GitHub")])])]),a("div",{staticClass:"footer__details"},[a("div",{staticClass:"footer__detail-info"},[a("span",{staticClass:"footer__design-brand"},[e._v(" Designed by "),a("a",{attrs:{href:"https://www.hugeinc.com",target:"blank"}},[e._v("Huge")])]),a("br"),a("a",{staticClass:"footer__coc",attrs:{href:"https://github.com/GitConfCO/code-of-conduct"}},[e._v(" Code of Conduct ")]),a("br"),a("span",[e._v("GitConf CO 2020")])]),a("div",{staticClass:"footer__details-social"},[a("span",[e._v("Follow us:")]),a("br"),a("a",{attrs:{href:"http://www.twitter.com/gitconfco",target:"blank"}},[a("i",{staticClass:"fab fa-twitter",attrs:{"aria-hidden":"true"}})]),a("a",{attrs:{href:"http://www.instagram.com/gitconf_co",target:"blank"}},[a("i",{staticClass:"fab fa-instagram",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"footer__details-social"},[a("span",[e._v("Contact us:")]),a("br"),a("span",[e._v("gitconfco@gmail.com")]),a("br")])])])])])}],c=n("0d07"),l=n.n(c),u={mounted:function(){(new l.a).init()}},p=u,d=(n("53d7"),n("2877")),f=Object(d["a"])(p,r,i,!1,null,null,null),m=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header",class:{header__expanded:e.visibleNav}},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__wrapper"},[e._m(0),n("div",{staticClass:"header__content"},[e._m(1),n("i",{staticClass:"fas fa-bars header__menu",attrs:{"aria-label":"Menu"},on:{click:e.toggleNav}})])]),n("div",{staticClass:"header__navigation"},e._l(e.navigation,(function(t){return n("div",{key:t.title},["anchor"==t.type?n("a",{staticClass:"header__navigation-item",attrs:{href:t.url},on:{click:function(t){return e.toggleNav()}}},[e._v(" "+e._s(t.title)+" ")]):n("router-link",{staticClass:"header__navigation-item",attrs:{to:t.url},nativeOn:{click:function(t){return e.toggleNav()}}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"/"}},[a("img",{staticClass:"header__image",attrs:{src:n("ed29"),alt:"gitconfco logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"header__text"},[e._v("Powered by "),n("i",{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[e._v("GitHub")])])}],v={name:"about",data:function(){return{visibleNav:!1,navigation:[{title:"Home",url:"/"},{title:"Speakers",url:"/speakers/"},{title:"Team",url:"/team"},{title:"Schedule",url:"/coming-soon/"},{title:"Sponsors",url:"/sponsors"}]}},methods:{toggleNav:function(){this.visibleNav=!this.visibleNav,window.scrollTo(0,0),this.visibleNav?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="auto"}}},_=v,b=(n("5452"),Object(d["a"])(_,g,h,!1,null,null,null)),C=b.exports,w={components:{Footer:m,Header:C}},k=w,y=(n("5c0b"),Object(d["a"])(k,s,o,!1,null,null,null)),x=y.exports,j=(n("d3b7"),n("8c4f")),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("home-hero"),n("about"),n("separator"),n("home-speakers"),n("separator"),n("home-cfp"),n("separator"),n("home-venue"),n("sponsors")],1)},E=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"about"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"about__content wow fadeIn"},[n("h2",{staticClass:"about__title"},[e._v(e._s(e.title))]),n("div",{staticClass:"about__body"},[n("p",[e._v(" "+e._s(e.content)+" ")])])])])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about__media wow fadeIn"},[a("img",{staticClass:"about__image--back",attrs:{src:n("4076"),alt:"Terminal"}}),a("img",{staticClass:"about__image--front",attrs:{src:n("df09"),alt:"Git"}})])}],q={name:"about",data:function(){return{title:"About",content:"GitConf is the first Git conference ever in Latin America, an entire day dedicated to learning and sharing Git, GitHub, CI, CD and automation."}},mounted:function(){(new l.a).init()}},R=q,I=(n("50c47"),Object(d["a"])(R,S,O,!1,null,null,null)),F=I.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-cfp"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"home-cfp__content wow fadeIn"},[n("p",[e._v(e._s(e.description))]),n("p",[e._v(e._s(e.dates))]),n("Cta",{staticClass:"home-cfp__cta",attrs:{text:e.ctaText,icon:"plus-square",url:e.ctaUrl}})],1)])])},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"wow fadeIn"},[n("span",{staticClass:"sr-only"},[e._v("Call for speakers")]),n("span",{staticClass:"home-cfp__title",attrs:{"data-heading":"/Call for","aria-hidden":"true"}},[e._v("/Call for")]),n("br"),n("span",{staticClass:"home-cfp__title",attrs:{"data-heading":"Speakers","aria-hidden":"true"}},[e._v("Speakers")])])}],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"cta",attrs:{href:e.url}},[e._v(" "+e._s(e.text)+" "),n("i",{class:"fa fa-"+this.icon+" cta__icon"})])},T=[],V={name:"cta",props:{text:{type:String,required:!0},url:{type:String,required:!0},icon:{type:String,required:!0}}},H=V,X=(n("66d6"),Object(d["a"])(H,D,T,!1,null,null,null)),M=X.exports,U={name:"home-cfp",data:function(){return{description:"Do you have a talk idea? We'd like to see your talk in the first version of GitConf CO, we'd like to hear about Git, GitHub, CI, CD, and automation, but also no-technical talks that could be interesting for developers who use Git.",dates:"CFP will be open from March 17th to April 17th, speakers will be notified on April 24th",ctaText:"Submit your talk",ctaUrl:"https://www.papercall.io/gitconfco2020"}},components:{Cta:M}},G=U,P=(n("1bb4"),Object(d["a"])(G,N,Y,!1,null,null,null)),J=P.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-hero"},[n("div",{staticClass:"container"},[n("div",{staticClass:"home-hero__content"},[e._m(0),n("div",{staticClass:"home-hero__info wow fadeIn"},[n("ul",{staticClass:"home-hero__details"},[n("li",{staticClass:"home-hero__name"},[e._v(e._s(e.conferenceName))]),n("li",{staticClass:"home-hero__date"},[e._v("Date: "+e._s(e.date))]),n("li",{staticClass:"home-hero__venue"},[e._v("City: "+e._s(e.city))])])])])])])},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"wow fadeIn home-hero__heading"},[n("span",{staticClass:"home-hero__heading-box"}),n("span",{staticClass:"sr-only"},[e._v("GitConf CO 2020")]),n("span",{staticClass:"home-hero__title",attrs:{"data-heading":"GitConf","aria-hidden":"true"}},[e._v("GitConf")]),n("br"),n("span",{staticClass:"home-hero__title",attrs:{"data-heading":"/CO.2020","aria-hidden":"true"}},[e._v("/CO.2020")])])}],Q={name:"hero",data:function(){return{conferenceName:"GitConf Colombia",date:"27/06/2020",city:"Medellin"}},components:{},mounted:function(){(new l.a).init()}},B=Q,W=(n("3d45"),Object(d["a"])(B,z,K,!1,null,null,null)),Z=W.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-speakers"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"home-speakers__container"},[e._l(e.speakers,(function(t){return n("div",{key:t.name,staticClass:"home-speakers__item wow fadeIn"},[n("img",{staticClass:"home-speakers__picture",attrs:{src:e.getImage("speakers",t.image),alt:t.name}}),n("cta",{attrs:{text:t.name,url:t.url,icon:"plus-square"}})],1)})),n("div",{staticClass:"home-speakers__item wow fadeIn"},[n("img",{staticClass:"home-speakers__picture",attrs:{src:e.getImage("speakers","person.png"),alt:"You?"}}),n("cta",{attrs:{text:"You?",url:"https://www.papercall.io/gitconfco2020",icon:"plus-square"}})],1)],2)])])},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"wow fadeIn"},[n("span",{staticClass:"sr-only"},[e._v("Confirmed speakers")]),n("span",{staticClass:"home-speakers__title",attrs:{"data-heading":"Confirmed","aria-hidden":"true"}},[e._v("Confirmed")]),n("br"),n("span",{staticClass:"home-speakers__title",attrs:{"data-heading":"/Speakers","aria-hidden":"true"}},[e._v("/Speakers")])])}],ee=n("541b"),te=n("8e42"),ne=n.n(te),ae={name:"home-speakers",data:function(){return{speakers:ne.a}},components:{Cta:M},methods:{getImage:ee["getImage"]},mounted:function(){(new l.a).init()}},se=ae,oe=(n("acc1"),Object(d["a"])(se,L,$,!1,null,null,null)),re=oe.exports,ie=n("38f9"),ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-venue"},[n("div",{staticClass:"container"},[n("div",{staticClass:"home-venue__content wow fadeIn"},[e._m(0),n("div",{staticClass:"home-venue__details"},[n("h2",{staticClass:"home-venue__name"},[e._v(e._s(e.name))]),n("p",{staticClass:"home-venue__description"},[e._v(e._s(e.description))]),n("p",{staticClass:"home-venue__description"},[e._v(e._s(e.address))])])])])])},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-venue__title-container"},[n("h1",{staticClass:"home-venue__title",attrs:{"data-heading":"Venue"}},[e._v("Venue")])])}],ue={name:"home-venue",data:function(){return{name:"Ruta N",description:"Medellin's own business and innovation center. A strategic location close to Metro.",address:"Complejo Ruta N, Calle 67 N° 52-20, Medellín - Colombia."}},mounted:function(){(new l.a).init()}},pe=ue,de=(n("431f"),Object(d["a"])(pe,ce,le,!1,null,null,null)),fe=de.exports,me=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("hr",{staticClass:"separator"})])}],he={name:"separator"},ve=he,_e=(n("3694"),Object(d["a"])(ve,me,ge,!1,null,null,null)),be=_e.exports,Ce={name:"home",components:{About:F,HomeCfp:J,HomeHero:Z,HomeSpeakers:re,Sponsors:ie["a"],HomeVenue:fe,Separator:be}},we=Ce,ke=Object(d["a"])(we,A,E,!1,null,null,null),ye=ke.exports;a["a"].use(j["a"]);var xe=[{path:"/",name:"home",component:ye},{path:"/speakers",name:"speakers",component:function(){return n.e("chunk-7718d241").then(n.bind(null,"8f7d"))}},{path:"/schedule",name:"schedule",component:function(){return n.e("chunk-2d0da3ed").then(n.bind(null,"6b7b"))}},{path:"/team",name:"team",component:function(){return n.e("chunk-497a66d2").then(n.bind(null,"0767"))}},{path:"/sponsors",name:"sponsors",component:function(){return n.e("chunk-2d0be314").then(n.bind(null,"2ee0"))}},{path:"/coming-soon",name:"coming-soon",component:function(){return n.e("chunk-60f21e4f").then(n.bind(null,"9703"))}}],je=new j["a"]({base:"/",routes:xe}),Ae=je;n("fb98");a["a"].config.productionTip=!1,new a["a"]({router:Ae,render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"5f5e":function(e,t,n){e.exports=n.p+"img/person.78b9c41e.png"},"64d2":function(e,t,n){e.exports=n.p+"img/rutaN.8ab51d4b.png"},"66d6":function(e,t,n){"use strict";var a=n("af33"),s=n.n(a);s.a},7584:function(e,t,n){var a={"./logo/logo-1x.png":"86d3","./logo/logo-2x.png":"97d3","./logo/logo-3x.png":"b728","./logo/logo-horizontal.svg":"56ca","./logo/logo.svg":"ed29","./pictures/about-fpo-back.jpeg":"4076","./pictures/about-fpo.jpeg":"df09","./pictures/venue.jpg":"8a73","./speakers/andrea.png":"db26","./speakers/person.png":"8b70","./sponsors/community/angularmde.png":"52e8","./sponsors/community/pioneras.png":"1d26","./sponsors/gold/huge.jpg":"242f","./sponsors/gold/rutaN.png":"64d2","./sponsors/platinum/gitHub.png":"4a46","./team/creative/jhonatan.png":"34e7","./team/creative/julian.jpg":"407f","./team/creative/person.png":"5f5e","./team/organizers/cami.jpeg":"f352","./team/organizers/karo.jpeg":"5619","./team/organizers/luisa.jpg":"3290","./team/organizers/manu.png":"8b14","./team/organizers/sebas.png":"3c0a","./team/organizers/test.jpeg":"edfa","./team/thankYou/alexandra.jpg":"248e","./team/thankYou/andrea.png":"f9b5","./team/thankYou/octogatos.jpeg":"2e92","./team/thankYou/person.png":"78cf"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="7584"},"78cf":function(e,t,n){e.exports=n.p+"img/person.78b9c41e.png"},"86d3":function(e,t,n){e.exports=n.p+"img/logo-1x.76cfaec7.png"},"8a73":function(e,t,n){e.exports=n.p+"img/venue.9099ab16.jpg"},"8b14":function(e,t,n){e.exports=n.p+"img/manu.ff737a15.png"},"8b70":function(e,t,n){e.exports=n.p+"img/person.78b9c41e.png"},"8e42":function(e,t){e.exports={andrea:{name:"Andrea Griffiths",image:"andrea.png",url:"/#/speakers",bio:"Born in Cali, Colombia. Andrea is a Latin immigrant working in the United States in the technology industry. Mother of two children and wife of the Welshman of her dreams. When she isn’t spending time with her children, you can find her promoting open source code, latinx underrepresented groups in the industry, and sharing knowledge with young women regarding breast cancer.",social:[{name:"github",url:"https://github.com/AndreaGriffiths11"},{name:"twitter",url:"https://twitter.com/alacolombia"}]}}},"8ebf":function(e,t,n){"use strict";var a=n("2e04"),s=n.n(a);s.a},"97d3":function(e,t,n){e.exports=n.p+"img/logo-2x.0ab6e419.png"},"9c0c":function(e,t,n){},a9b3:function(e,t,n){},acc1:function(e,t,n){"use strict";var a=n("ce0d"),s=n.n(a);s.a},af33:function(e,t,n){},af35:function(e,t,n){},b728:function(e,t,n){e.exports=n.p+"img/logo-3x.6eafaf38.png"},ce0d:function(e,t,n){},d86e:function(e,t,n){},db26:function(e,t,n){e.exports=n.p+"img/andrea.83e9346b.png"},df09:function(e,t,n){e.exports=n.p+"img/about-fpo.32a35dd2.jpeg"},ed29:function(e,t,n){e.exports=n.p+"img/logo.a77bbdc6.svg"},ed62:function(e,t,n){},edfa:function(e,t,n){e.exports=n.p+"img/test.0d50f0f2.jpeg"},f352:function(e,t,n){e.exports=n.p+"img/cami.1a40df94.jpeg"},f9b5:function(e,t,n){e.exports=n.p+"img/andrea.83e9346b.png"},fb98:function(e,t,n){}});
//# sourceMappingURL=app.6b61467d.js.map