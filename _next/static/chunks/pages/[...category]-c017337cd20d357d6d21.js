_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"6N/J":function(e,t,n){e.exports={slideshow:"Slideshow_slideshow__1XfVS",slide:"Slideshow_slide__13FsI",continue:"Slideshow_continue__1EjTb",navigation:"Slideshow_navigation__3cL26",previous:"Slideshow_previous__d6rfj",next:"Slideshow_next__3WPdg",show:"Slideshow_show__1-1bj"}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;d.has(l)?a=!1:(d.add(l),r[s]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}p.rewind=function(){};var v=p;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},HEmS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...category]",function(){return n("iVyx")}])},I3RS:function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("YFqc")),a=n.n(o),i=n("wQzA"),c=n.n(i);t.a=function(e){var t=e.src,n=e.title,o=e.size,i=e.href,u=Object(r.jsxs)("div",{className:c.a.work,children:[Object(r.jsx)("img",{src:t,alt:n}),n?Object(r.jsx)("h3",{children:n}):"",o?Object(r.jsx)("span",{children:"".concat(o.height,"x").concat(o.width," cm")}):""]});return i&&(u=Object(r.jsx)(a.a,{href:i,children:Object(r.jsx)("a",{children:u})})),u}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},cjDM:function(e,t,n){"use strict";var r=n("nKUr"),o=n("nOHt"),a=n.n(o),i=n("q1tI"),c=n("I3RS"),u=n("6N/J"),s=n.n(u);t.a=function(e){var t,n=e.folder,o=e.works,u=e.title,l=e.statement,d="statement",f=Object(i.useState)(null),h=f[0],p=f[1],v=function(e){return e===d&&(null===l||void 0===l?void 0:l.length)?[null,d].includes(h):(null===l||void 0===l?void 0:l.length)||null!==h?h===e:0===e},m=function(){return null===h?p((null===l||void 0===l?void 0:l.length)?d:0):h===d?p(o.length-1):0===h&&(null===l||void 0===l?void 0:l.length)?p(d):0===h?p(o.length-1):void p(h-1)},j=function(){return null===h?p((null===l||void 0===l?void 0:l.length)?0:1):h===d?p(0):h===o.length-1&&(null===l||void 0===l?void 0:l.length)?p(d):h===o.length-1?p(0):void p(h+1)};return Object(i.useEffect)((function(){var e=function(e){switch(e.key){case"ArrowLeft":m();break;case"ArrowRight":j()}};return window.addEventListener("keyup",e),function(){return window.removeEventListener("keyup",e)}})),Object(i.useEffect)((function(){var e=function(){return p(null)};return a.a.events.on("routeChangeComplete",e),function(){return a.a.events.off("routeChangeComplete",e)}})),Object(r.jsxs)("div",{className:s.a.slideshow,onTouchStart:function(e){return function(e){var n=e.touches;t=n[0].clientX}(e)},onTouchMove:function(e){return function(e){var n=e.touches;if(t){var r=t-n[0].clientX;r<0&&m(),r>0&&j(),t=null}}(e)},children:[(null===l||void 0===l?void 0:l.length)?Object(r.jsxs)("div",{className:"".concat(s.a.slide," ").concat(v(d)?s.a.show:""),children:[Object(r.jsx)("h2",{children:u}),l.map((function(e,t){return Object(r.jsx)("p",{children:e},t)})),Object(r.jsxs)("a",{className:s.a.continue,onClick:function(){return j()},children:[Object(r.jsx)("span",{children:"Bekijk"}),Object(r.jsx)("img",{src:"/assets/arrow-right.svg"})]})]}):"",o.map((function(e,t){return Object(r.jsxs)("div",{className:"".concat(s.a.slide," ").concat(v(t)?s.a.show:""),children:[o.length>1?Object(r.jsxs)("div",{className:s.a.navigation,children:[Object(r.jsx)("div",{className:s.a.previous,onClick:function(){return m()}}),Object(r.jsx)("div",{className:s.a.next,onClick:function(){return j()}})]}):"",Object(r.jsx)(c.a,{src:"/img/".concat(n,"/").concat(e.filename),title:e.title,size:e.size})]},e.filename)}))]})}},iVyx:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s}));var r=n("nKUr"),o=n("8Kt/"),a=n.n(o),i=(n("q1tI"),n("nOHt")),c=n("7pXE"),u=n("cjDM"),s=!0;t.default=function(e){var t=e.works,n=Object(i.useRouter)().query.category[0],o=t.find((function(e){return e.name===n}));return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(a.a,{children:Object(r.jsxs)("title",{children:["Anneke Labordus - ",o.label]})}),Object(r.jsx)(c.a,{}),Object(r.jsx)("div",{className:"page",children:Object(r.jsx)(u.a,{folder:o.name,works:o.works})})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},wQzA:function(e,t,n){e.exports={work:"Work_work__1lXrk"}}},[["HEmS",0,2,1,3]]]);