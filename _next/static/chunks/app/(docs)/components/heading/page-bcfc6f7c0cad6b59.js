(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{2582:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.bind(n,4206)),Promise.resolve().then(n.bind(n,6667)),Promise.resolve().then(n.t.bind(n,9986,23)),Promise.resolve().then(n.bind(n,7127)),Promise.resolve().then(n.bind(n,1786)),Promise.resolve().then(n.bind(n,3786)),Promise.resolve().then(n.bind(n,8810)),Promise.resolve().then(n.bind(n,1311))},4206:function(e,t,n){"use strict";n.d(t,{CodeBlockClient:function(){return i}});var r=n(7437),l=n(5832),s=n(2260),a=n.n(s);let i=e=>{let{out:t,title:n}=e;return(0,r.jsxs)("div",{className:a().codeBlock,children:[n&&(0,r.jsx)("div",{className:a().title,children:(0,r.jsx)(l.x,{variant:"body",children:n})}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:a().code})]})}},6667:function(e,t,n){"use strict";n.d(t,{PropsTable:function(){return v}});var r=n(7437);n(2265);var l=n(8295),s=n.n(l);let a=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:s().wrapper,children:(0,r.jsx)("table",{className:s().table,children:t})})},i=e=>{let{children:t}=e;return(0,r.jsx)("thead",{children:t})},o=e=>{let{children:t}=e;return(0,r.jsx)("tbody",{children:t})},c=e=>{let{children:t}=e;return(0,r.jsx)("tr",{children:t})},d=e=>{let{children:t}=e;return(0,r.jsx)("th",{className:"".concat(s().tableCell," ").concat(s().tableHeaderCell),children:t})},u=e=>{let{children:t}=e;return(0,r.jsx)("tr",{className:s().tableRow,children:t})},p=e=>{let{children:t}=e;return(0,r.jsx)("td",{className:s().tableCell,children:t})};var h=n(4952),x=n.n(h);let f=e=>{let{children:t,head:n=!1}=e;return(0,r.jsx)("span",{className:"".concat(x().chip," ").concat(n?x().head:""),children:t})};var m=n(1975);let v=e=>{let{data:t}=e;return(0,r.jsxs)(a,{children:[(0,r.jsx)(i,{children:(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{children:"Prop"}),(0,r.jsx)(d,{children:"Type"}),(0,r.jsx)(d,{children:"Responsive"})]})}),(0,r.jsx)(o,{children:Object.keys(t).map(e=>(0,r.jsxs)(u,{children:[(0,r.jsx)(p,{children:(0,r.jsx)(f,{head:!0,children:e})}),(0,r.jsx)(p,{children:(0,r.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.375rem"},children:"icon"===t[e].type?Object.keys(m.c).map(e=>(0,r.jsx)(f,{children:e},e)):Array.isArray(t[e].type)?t[e].type.map(e=>(0,r.jsx)(f,{children:e},e)):(0,r.jsx)(f,{children:t[e].type})})}),(0,r.jsx)(p,{children:(0,r.jsx)(f,{children:t[e].responsive?"Yes":"No"})})]},e))})]})}},7127:function(e,t,n){"use strict";n.r(t),n.d(t,{List:function(){return c},Panel:function(){return u},Root:function(){return o},Tab:function(){return d}});var r=n(7437),l=n(1333),s=n(5832),a=n(6825),i=n.n(a);let o=e=>{let{className:t,...n}=e;return(0,r.jsx)(l.m.fC,{className:"".concat(i().root," ").concat(t),...n})},c=e=>{let{className:t,children:n,...s}=e;return(0,r.jsxs)(l.m.aV,{className:"".concat(i().list," ").concat(t),...s,children:[n,(0,r.jsx)(l.m.z$,{className:i().indicator})]})},d=e=>(0,r.jsx)(l.m.OK,{...e,render:(e,t)=>{let{children:n,...l}=e;return(0,r.jsx)("button",{className:i().tab,...l,children:(0,r.jsx)(s.x,{variant:"subtitle",weight:"bold",...l,style:{color:t.selected?"var(--canon-fg-text-primary)":"var(--canon-fg-text-secondary)"},children:n})})}}),u=e=>{let{className:t,...n}=e;return(0,r.jsx)(l.m.s_,{className:"".concat(i().panel," ").concat(t),...n})}},1786:function(e,t,n){"use strict";n.d(t,{HeadingAllVariants:function(){return u},Y:function(){return h},HeadingPreview:function(){return d},HeadingResponsive:function(){return p}});var r=n(7437),l=n(2265),s=n(6532),a=n(8205);let i=(0,l.forwardRef)((e,t)=>{let{children:n,variant:l="title1",as:i="h1",className:o,...c}=e,d=(0,a.V)(l),u=i;return"title2"===l&&(u="h2"),"title3"===l&&(u="h3"),"title4"===l&&(u="h4"),"title5"===l&&(u="h5"),i&&(u=i),(0,r.jsx)(u,{ref:t,className:(0,s.Z)("canon-Heading",d&&"canon-Heading--variant-".concat(d),o),...c,children:n})});i.displayName="Heading";var o=n(5240),c=n(5832);let d=()=>(0,r.jsx)(i,{children:"Look mum, no hands!"}),u=()=>(0,r.jsxs)(o.K,{children:[(0,r.jsx)(i,{variant:"display",children:"Display"}),(0,r.jsx)(i,{variant:"title1",children:"Title 1"}),(0,r.jsx)(i,{variant:"title2",children:"Title 2"}),(0,r.jsx)(i,{variant:"title3",children:"Title 3"}),(0,r.jsx)(i,{variant:"title4",children:"Title 4"})]}),p=()=>(0,r.jsx)(o.K,{children:(0,r.jsx)(i,{variant:{initial:"title2",lg:"title1"},children:"Responsive heading"})}),h=()=>(0,r.jsxs)(o.K,{children:[(0,r.jsx)(c.x,{children:"All variants"}),(0,r.jsx)(i,{variant:"display",children:"Display"}),(0,r.jsx)(i,{variant:"title1",children:"Title 1"}),(0,r.jsx)(i,{variant:"title2",children:"Title 2"}),(0,r.jsx)(i,{variant:"title3",children:"Title 3"}),(0,r.jsx)(i,{variant:"title4",children:"Title 4"})]})},1975:function(e,t,n){"use strict";n.d(t,{c:function(){return l}});var r=n(7865);let l={arrowDown:r.ZMw,arrowLeft:r.RHc,arrowRight:r.wKp,arrowUp:r.tN7,arrowDownCircle:r.iOO,arrowLeftCircle:r.zNb,arrowRightCircle:r.FU_,arrowUpCircle:r.vNF,check:r.ffJ,chevronDown:r.ZXJ,chevronUp:r.gcy,chevronLeft:r.jW7,chevronRight:r.jfD,cloud:r.Pa1,externalLink:r.uXP,heart:r.iB2,moon:r.S6R,plus:r.p22,sun:r.sEY,trash:r.GnT}},5240:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(2265),l=n(7110),s=n(6532);let a=e=>{if("string"==typeof e){let t="stretch";return"left"===e&&(t="stretch"),"center"===e&&(t="center"),"right"===e&&(t="end"),t}if("object"==typeof e){let t={};for(let[n,r]of Object.entries(e))t[n]=a(r);return t}return"stretch"},i=(0,r.forwardRef)((e,t)=>{let{as:n="div",children:i,align:o="left",gap:c="xs",className:d,style:u,...p}=e,h=(0,l.f)({gap:c,alignItems:a(o),...p});return(0,r.createElement)(n,{ref:t,className:(0,s.Z)("canon-Stack",h,d),style:u,children:i})})},5832:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(7437),l=n(2265),s=n(8205),a=n(6532);let i=(0,l.forwardRef)((e,t)=>{let{children:n,variant:l="body",weight:i="regular",style:o,className:c,...d}=e,u=(0,s.V)(l),p=(0,s.V)(i);return(0,r.jsx)("p",{ref:t,className:(0,a.Z)("canon-Text",u&&"canon-Text--variant-".concat(u),p&&"canon-Text--weight-".concat(p),c),style:o,...d,children:n})});i.displayName="Text"},8205:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(2265);let l=r.useLayoutEffect,s=[{name:"Initial",id:"initial",value:0},{name:"Extra Small",id:"xs",value:640},{name:"Small",id:"sm",value:768},{name:"Medium",id:"md",value:1024},{name:"Large",id:"lg",value:1280},{name:"Extra Large",id:"xl",value:1536}],a=()=>{let e=s.map(e=>(function(e){let{defaultValue:t=!1,initializeWithValue:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e=>window.matchMedia(e).matches,[a,i]=(0,r.useState)(()=>n?s(e):t);function o(){i(s(e))}return l(()=>{let t=window.matchMedia(e);return o(),t.addListener?t.addListener(o):t.addEventListener("change",o),()=>{t.removeListener?t.removeListener(o):t.removeEventListener("change",o)}},[e]),a})("(min-width: ".concat(e.value,"px)")));for(let t=e.length-1;t>=0;t--)if(e[t])return s[t].id;return s[0].id},i=e=>{let t=a();if("object"==typeof e){let n=s.findIndex(e=>e.id===t);for(let t=n;t>=0;t--)if(e[s[t].id])return e[s[t].id];for(let t=0;t<s.length;t++)if(e[s[t].id])return e[s[t].id]}return e}},7110:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});let r=e=>({none:"".concat(e,"-none"),"2xs":"".concat(e,"-2xs"),xs:"".concat(e,"-xs"),sm:"".concat(e,"-sm"),md:"".concat(e,"-md"),lg:"".concat(e,"-lg"),xl:"".concat(e,"-xl"),"2xl":"".concat(e,"-2xl")}),l={alignItems:{stretch:"items-stretch",start:"items-start",center:"items-center",end:"items-end"},border:{none:"border-none",base:"border-base",error:"border-error",warning:"border-warning",selected:"border-selected"},borderRadius:{none:"rounded-none","2xs":"rounded-2xs",xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl"},colEnd:{1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",auto:"col-end-auto"},colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",auto:"col-span-auto"},colStart:{1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",auto:"col-start-auto"},columns:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",auto:"grid-cols-auto"},display:{none:"hidden",flex:"flex",block:"block",inline:"inline"},flexDirection:{row:"flex-row",column:"flex-col"},flexWrap:{wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"},gap:r("gap"),justifyContent:{stretch:"justify-stretch",start:"justify-start",center:"justify-center",end:"justify-end",around:"justify-around",between:"justify-between"},margin:r("m"),marginBottom:r("mb"),marginLeft:r("ml"),marginRight:r("mr"),marginTop:r("mt"),marginX:r("mx"),marginY:r("my"),padding:r("p"),paddingBottom:r("pb"),paddingLeft:r("pl"),paddingRight:r("pr"),paddingTop:r("pt"),paddingX:r("px"),paddingY:r("py"),rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",7:"row-span-7",8:"row-span-8",9:"row-span-9",10:"row-span-10",11:"row-span-11",12:"row-span-12",full:"row-span-full"}},s=(e,t)=>{let n=[];if(!l.hasOwnProperty(e))return n;if("string"==typeof t||"number"==typeof t){var r;let s=(null===(r=l[e])||void 0===r?void 0:r[t])||t;n.push("cu-".concat(s))}else"object"==typeof t&&Object.entries(t).forEach(t=>{var r;let[s,a]=t,i=(null===(r=l[e])||void 0===r?void 0:r[a])||a;"xs"===s?n.push("cu-".concat(i)):n.push("cu-".concat(s,"-").concat(i))});return n},a=e=>{let t=[];return Object.entries(e).forEach(e=>{let[n,r]=e;t.push(...s(n,r))}),t.filter(Boolean).join(" ")}},4952:function(e){e.exports={chip:"styles_chip__XPG78",head:"styles_head__L8DiE"}},2260:function(e){e.exports={codeBlock:"styles_codeBlock__cJkhk",title:"styles_title__LVFiR",code:"styles_code__W0N63"}},9986:function(e){e.exports={container:"styles_container__T5X7T",preview:"styles_preview__tlnTq",previewContent:"styles_previewContent__ZqyBx",center:"styles_center__xU0vc",trigger:"styles_trigger__oILEp",panel:"styles_panel__rSJk7"}},8295:function(e){e.exports={wrapper:"styles_wrapper__sBS6b",table:"styles_table__ij6HO",tableCell:"styles_tableCell__kaS_H",tableHeaderCell:"styles_tableHeaderCell__bWDvx",tableRow:"styles_tableRow__LiOYk",tableChip:"styles_tableChip__K9ssW",tableType:"styles_tableType__Nq22z"}},6825:function(e){e.exports={root:"styles_root__sy2wE",list:"styles_list___Mh8g",tab:"styles_tab__IQ_KB",indicator:"styles_indicator__iUzBj"}}},function(e){e.O(0,[666,738,211,975,333,174,478,117,744],function(){return e(e.s=2582)}),_N_E=e.O()}]);