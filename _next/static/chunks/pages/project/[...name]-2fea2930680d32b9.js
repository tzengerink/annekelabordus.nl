(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{7891:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[...name]",function(){return t(4596)}])},3578:function(n,e,t){"use strict";var i=t(5893),r=t(1163),s=t.n(r),o=t(7294),c=t(5697),l=t.n(c),u=t(5320),a=t(8107),d=t.n(a),h=function(n){var e,t=n.folder,r=n.works,c=n.title,l=n.statement,a="statement",h=(0,o.useState)(null),f=h[0],v=h[1],_=function(n){return n===a&&(null===l||void 0===l?void 0:l.length)?[null,a].includes(f):(null===l||void 0===l?void 0:l.length)||null!==f?f===n:0===n},w=function(){return null===f?v((null===l||void 0===l?void 0:l.length)?a:0):f===a?v(r.length-1):0===f&&(null===l||void 0===l?void 0:l.length)?v(a):0===f?v(r.length-1):void v(f-1)},p=function(){return null===f?v((null===l||void 0===l?void 0:l.length)?0:1):f===a?v(0):f===r.length-1&&(null===l||void 0===l?void 0:l.length)?v(a):f===r.length-1?v(0):void v(f+1)};return(0,o.useEffect)((function(){var n=function(n){switch(n.key){case"ArrowLeft":w();break;case"ArrowRight":p()}};return window.addEventListener("keyup",n),function(){return window.removeEventListener("keyup",n)}})),(0,o.useEffect)((function(){var n=function(){return v(null)};return s().events.on("routeChangeComplete",n),function(){return s().events.off("routeChangeComplete",n)}})),(0,i.jsxs)("div",{className:d().slideshow,onTouchStart:function(n){return function(n){var t=n.touches;e=t[0].clientX}(n)},onTouchMove:function(n){return function(n){var t=n.touches;if(e){var i=e-t[0].clientX;i<0&&w(),i>0&&p(),e=null}}(n)},children:[(null===l||void 0===l?void 0:l.length)?(0,i.jsxs)("div",{className:"".concat(d().slide," ").concat(_(a)?d().show:""),children:[(0,i.jsx)("h2",{children:c}),l.map((function(n,e){return(0,i.jsx)("p",{children:n},e)})),(0,i.jsxs)("a",{className:d().continue,onClick:function(){return p()},children:[(0,i.jsx)("span",{children:"Bekijk"}),(0,i.jsx)("img",{src:"/assets/arrow-right.svg"})]})]}):"",r.map((function(n,e){return(0,i.jsxs)("div",{className:"".concat(d().slide," ").concat(_(e)?d().show:""),children:[r.length>1?(0,i.jsxs)("div",{className:d().navigation,children:[(0,i.jsx)("div",{className:d().previous,onClick:function(){return w()}}),(0,i.jsx)("div",{className:d().next,onClick:function(){return p()}})]}):"",(0,i.jsx)(u.Z,{src:"/img/".concat(t,"/").concat(n.filename),title:n.title,size:n.size})]},n.filename)}))]})};h.propTypes={folder:l().string.isRequired,works:l().arrayOf(l().object),title:l().string,statement:l().arrayOf(l().string)},e.Z=h},5320:function(n,e,t){"use strict";var i=t(5893),r=(t(7294),t(5697)),s=t.n(r),o=t(1664),c=t.n(o),l=t(6095),u=t.n(l),a=function(n){var e=n.src,t=n.title,r=n.size,s=n.href,o=(0,i.jsxs)("div",{className:u().work,children:[(0,i.jsx)("img",{src:e,alt:t}),t?(0,i.jsx)("h3",{children:t}):"",r?(0,i.jsx)("span",{children:"".concat(r.height,"x").concat(r.width," cm")}):""]});return s&&(o=(0,i.jsx)(c(),{href:s,children:(0,i.jsx)("a",{children:o})})),o};a.propTypes={src:s().string.isRequired,title:s().string,size:s().object,href:s().string},e.Z=a},4596:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return d}});var i=t(5893),r=t(9008),s=(t(7294),t(5697)),o=t.n(s),c=t(1163),l=t(1944),u=t(3578),a=function(n){var e=n.projects,t=(0,c.useRouter)().query.name[0],s=e.find((function(n){return n.name===t})),o=s.title?s.title:s.label;return(0,i.jsxs)("div",{className:"layout",children:[(0,i.jsx)(r.default,{children:(0,i.jsxs)("title",{children:["Anneke Labordus - ",o]})}),(0,i.jsx)(l.Z,{}),(0,i.jsx)("div",{className:"page",children:(0,i.jsx)(u.Z,{folder:"project/".concat(s.name),works:s.works,title:o,statement:s.statement})})]})};a.propTypes={projects:o().array};var d=!0;e.default=a},8107:function(n){n.exports={slideshow:"Slideshow_slideshow__Ekt23",slide:"Slideshow_slide__tPpaU",continue:"Slideshow_continue__RezjC",navigation:"Slideshow_navigation__YyYzM",previous:"Slideshow_previous__WDRKY",next:"Slideshow_next__5csKq",show:"Slideshow_show__krFY5"}},6095:function(n){n.exports={work:"Work_work__UJMJU"}}},function(n){n.O(0,[944,774,888,179],(function(){return e=7891,n(n.s=e);var e}));var e=n.O();_N_E=e}]);