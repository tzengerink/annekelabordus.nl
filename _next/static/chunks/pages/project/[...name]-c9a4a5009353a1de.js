(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{4476:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[...name]",function(){return t(6068)}])},9877:function(e,n,t){"use strict";var s=t(5893),i=t(1163),l=t.n(i),r=t(7294),o=t(5697),c=t.n(o),a=t(677),d=t(2854),u=t.n(d);let h=e=>{let n,{folder:t,works:i,title:o,statement:c}=e,d="statement",[h,_]=(0,r.useState)(null),v=e=>e===d&&(null==c?void 0:c.length)?[null,d].includes(h):(null==c?void 0:c.length)||null!==h?h===e:0===e,w=()=>null===h?_((null==c?void 0:c.length)?d:0):h===d?_(i.length-1):0===h&&(null==c?void 0:c.length)?_(d):0===h?_(i.length-1):void _(h-1),p=()=>null===h?_((null==c?void 0:c.length)?0:1):h===d?_(0):h===i.length-1&&(null==c?void 0:c.length)?_(d):h===i.length-1?_(0):void _(h+1),g=e=>{let{touches:t}=e;n=t[0].clientX},f=e=>{let{touches:t}=e;if(!n)return;let s=n-t[0].clientX;s<0&&w(),s>0&&p(),n=null};return(0,r.useEffect)(()=>{let e=e=>{let{key:n}=e;switch(n){case"ArrowLeft":w();break;case"ArrowRight":p()}};return window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)}),(0,r.useEffect)(()=>{let e=()=>_(null);return l().events.on("routeChangeComplete",e),()=>l().events.off("routeChangeComplete",e)}),(0,s.jsxs)("div",{className:u().slideshow,onTouchStart:e=>g(e),onTouchMove:e=>f(e),children:[(null==c?void 0:c.length)?(0,s.jsxs)("div",{className:"".concat(u().slide," ").concat(v(d)?u().show:""),children:[(0,s.jsx)("h2",{children:o}),c.map((e,n)=>(0,s.jsx)("p",{children:e},n)),(0,s.jsxs)("a",{className:u().continue,onClick:()=>p(),children:[(0,s.jsx)("span",{children:"Bekijk"}),(0,s.jsx)("img",{src:"/assets/arrow-right.svg"})]})]}):"",i.map((e,n)=>(0,s.jsxs)("div",{className:"".concat(u().slide," ").concat(v(n)?u().show:""),children:[i.length>1?(0,s.jsxs)("div",{className:u().navigation,children:[(0,s.jsx)("div",{className:u().previous,onClick:()=>w()}),(0,s.jsx)("div",{className:u().next,onClick:()=>p()})]}):"",(0,s.jsx)(a.Z,{src:"/img/".concat(t,"/").concat(e.filename),title:e.title,size:e.size})]},e.filename))]})};h.propTypes={folder:c().string.isRequired,works:c().arrayOf(c().object),title:c().string,statement:c().arrayOf(c().string)},n.Z=h},677:function(e,n,t){"use strict";var s=t(5893);t(7294);var i=t(5697),l=t.n(i),r=t(1664),o=t.n(r),c=t(3557),a=t.n(c);let d=e=>{let{src:n,title:t,size:i,href:l}=e,r=(0,s.jsxs)("div",{className:a().work,children:[(0,s.jsx)("img",{src:n,alt:t}),t?(0,s.jsx)("h3",{children:t}):"",i?(0,s.jsx)("span",{children:"".concat(i.height,"x").concat(i.width," cm")}):""]});return l&&(r=(0,s.jsx)(o(),{href:l,children:r})),r};d.propTypes={src:l().string.isRequired,title:l().string,size:l().object,href:l().string},n.Z=d},6068:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return h}});var s=t(5893),i=t(9008),l=t.n(i);t(7294);var r=t(5697),o=t.n(r),c=t(1163),a=t(2433),d=t(9877);let u=e=>{let{projects:n}=e,t=(0,c.useRouter)(),i=t.query.name[0],r=n.find(e=>e.name===i),o="Anneke Labordus - ".concat(r.title?r.title:r.label);return(0,s.jsxs)("div",{className:"layout",children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:o})}),(0,s.jsx)(a.Z,{}),(0,s.jsx)("div",{className:"page",children:(0,s.jsx)(d.Z,{folder:"project/".concat(r.name),works:r.works,title:o,statement:r.statement})})]})};u.propTypes={projects:o().array};var h=!0;n.default=u},2854:function(e){e.exports={slideshow:"Slideshow_slideshow__Ekt23",slide:"Slideshow_slide__tPpaU",continue:"Slideshow_continue__RezjC",navigation:"Slideshow_navigation__YyYzM",previous:"Slideshow_previous__WDRKY",next:"Slideshow_next__5csKq",show:"Slideshow_show__krFY5"}},3557:function(e){e.exports={work:"Work_work__UJMJU"}}},function(e){e.O(0,[424,433,774,888,179],function(){return e(e.s=4476)}),_N_E=e.O()}]);