_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"20nU":function(e,n,t){"use strict";n.a={workTypes:[{name:"landschap",label:"Landschap"},{name:"portret",label:"Portret"}]}},"38rt":function(e,n,t){e.exports={navigation:"Navigation_navigation__FEssL",hamburger:"Navigation_hamburger__3TUyl",content:"Navigation_content__GPhES",item:"Navigation_item__sOIpr",active:"Navigation_active__19ktI",open:"Navigation_open__2nZ1O"}},"7pXE":function(e,n,t){"use strict";var r=t("nKUr"),c=t("nOHt"),a=t("YFqc"),o=t.n(a),i=t("q1tI"),s=t("20nU"),u=t("38rt"),l=t.n(u),f=function(e){var n=e.href,t=e.isActive,c=e.onClick,a=e.children;return Object(r.jsx)("li",{className:"".concat(l.a.item," ").concat(t?l.a.active:""),onClick:c,children:Object(r.jsx)(o.a,{href:n,children:a})})};n.a=function(){var e=Object(c.useRouter)(),n=Object(i.useState)(!1),t=n[0],a=n[1];return Object(r.jsxs)("div",{className:"".concat(l.a.navigation," ").concat(t?l.a.open:""),children:[Object(r.jsx)("h1",{children:Object(r.jsx)(o.a,{href:"/",children:"Anneke Labordus"})}),Object(r.jsxs)("div",{className:l.a.hamburger,onClick:function(){return a(!t)},children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("div",{className:l.a.content,children:[Object(r.jsx)("h2",{children:"Werk"}),Object(r.jsx)("ul",{children:s.a.workTypes.map((function(n){return Object(r.jsx)(f,{href:"/".concat(encodeURIComponent(n.name)),isActive:e.asPath==="/".concat(n.name),onClick:function(){return a(!1)},children:n.label},n.name)}))}),Object(r.jsx)("h2",{children:"Info"}),Object(r.jsx)("ul",{children:Object(r.jsx)(f,{href:"/over",isActive:"/over"===e.asPath,onClick:function(){return a(!1)},children:"Over"})})]})]})}},"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("w2l6")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var a=c(t("q1tI")),o=t("elyg"),i=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if((0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),c=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,o.resolveHref)(c,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):i||a}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,j=e.shallow,b=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),O=g&&"object"===typeof g&&g.ref,m=(0,s.useIntersection)({rootMargin:"200px"}),x=r(m,2),y=x[0],w=x[1],N=a.default.useCallback((function(e){y(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,y]);(0,a.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof _?_:t&&t.locale,c=u[d+"%"+p+(r?"%"+r:"")];e&&!c&&l(t,d,p,{locale:r})}),[p,d,w,_,n,t]);var E={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:a,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,j,b,_)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(E.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof _?_:t&&t.locale,t&&t.defaultLocale))),a.default.cloneElement(g,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),c=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){i||f||(0,o.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=t("q1tI"),o=c(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},w2l6:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),c=t("7pXE");n.default=function(){return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(c.a,{}),Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h3",{children:"Pagina niet gevonden"}),Object(r.jsx)("p",{children:"De opgevraagde pagina lijkt niet te bestaan."})]})]})}}},[["97Is",0,2,1]]]);