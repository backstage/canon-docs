(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{4206:function(e,t,n){"use strict";n.d(t,{CodeBlockClient:function(){return i}});var r=n(7437),s=n(5832),l=n(2260),a=n.n(l);let i=e=>{let{out:t,title:n}=e;return(0,r.jsxs)("div",{className:a().codeBlock,children:[n&&(0,r.jsx)("div",{className:a().title,children:(0,r.jsx)(s.x,{variant:"body",children:n})}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:a().code})]})}},9488:function(e,t,n){"use strict";n.d(t,{BaseUI:function(){return c}});var r=n(7437),s=n(5832),l=n(6361),a=n(7811),i=n.n(a);let c=e=>{let{href:t}=e;return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsxs)("svg",{width:"17",height:"30",viewBox:"0 0 17 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i().icon,children:[(0,r.jsx)("path",{d:"M8 12.8V15V26C3.58172 26 0 22.0601 0 17.2V15V4C4.41828 4 8 7.93989 8 12.8Z"}),(0,r.jsx)("path",{d:"M9.5001 10.0154C9.2245 9.99843 9 10.2239 9 10.5V26.0001C13.4183 26.0001 17 22.4184 17 18.0001C17 13.7498 13.6854 10.2736 9.5001 10.0154Z"})]}),(0,r.jsxs)("div",{className:i().content,children:[(0,r.jsx)(s.x,{variant:"subtitle",weight:"bold",children:"Base UI"}),(0,r.jsx)("div",{className:i().description,children:(0,r.jsx)(s.x,{variant:"subtitle",children:"This component is using Base UI under the hood. While most of the original props are available, we have made some changes to the API to fit our needs."})}),t&&(0,r.jsxs)("a",{className:i().button,href:t,target:"_blank",children:["Discover more",(0,r.jsx)(l.J,{name:"externalLink"})]})]})]})}},6667:function(e,t,n){"use strict";n.d(t,{PropsTable:function(){return f}});var r=n(7437);n(2265);var s=n(8295),l=n.n(s);let a=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:l().wrapper,children:(0,r.jsx)("table",{className:l().table,children:t})})},i=e=>{let{children:t}=e;return(0,r.jsx)("thead",{children:t})},c=e=>{let{children:t}=e;return(0,r.jsx)("tbody",{children:t})},o=e=>{let{children:t}=e;return(0,r.jsx)("tr",{children:t})},d=e=>{let{children:t}=e;return(0,r.jsx)("th",{className:"".concat(l().tableCell," ").concat(l().tableHeaderCell),children:t})},u=e=>{let{children:t}=e;return(0,r.jsx)("tr",{className:l().tableRow,children:t})},h=e=>{let{children:t}=e;return(0,r.jsx)("td",{className:l().tableCell,children:t})};var _=n(4952),x=n.n(_);let p=e=>{let{children:t,head:n=!1}=e;return(0,r.jsx)("span",{className:"".concat(x().chip," ").concat(n?x().head:""),children:t})};var v=n(1975);let f=e=>{let{data:t}=e;return(0,r.jsxs)(a,{children:[(0,r.jsx)(i,{children:(0,r.jsxs)(o,{children:[(0,r.jsx)(d,{children:"Prop"}),(0,r.jsx)(d,{children:"Type"}),(0,r.jsx)(d,{children:"Responsive"})]})}),(0,r.jsx)(c,{children:Object.keys(t).map(e=>(0,r.jsxs)(u,{children:[(0,r.jsx)(h,{children:(0,r.jsx)(p,{head:!0,children:e})}),(0,r.jsx)(h,{children:(0,r.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.375rem"},children:"icon"===t[e].type?Object.keys(v.c).map(e=>(0,r.jsx)(p,{children:e},e)):Array.isArray(t[e].type)?t[e].type.map(e=>(0,r.jsx)(p,{children:e},e)):(0,r.jsx)(p,{children:t[e].type})})}),(0,r.jsx)(h,{children:(0,r.jsx)(p,{children:t[e].responsive?"Yes":"No"})})]},e))})]})}},7127:function(e,t,n){"use strict";n.r(t),n.d(t,{List:function(){return o},Panel:function(){return u},Root:function(){return c},Tab:function(){return d}});var r=n(7437),s=n(1333),l=n(5832),a=n(6825),i=n.n(a);let c=e=>{let{className:t,...n}=e;return(0,r.jsx)(s.m.fC,{className:"".concat(i().root," ").concat(t),...n})},o=e=>{let{className:t,children:n,...l}=e;return(0,r.jsxs)(s.m.aV,{className:"".concat(i().list," ").concat(t),...l,children:[n,(0,r.jsx)(s.m.z$,{className:i().indicator})]})},d=e=>(0,r.jsx)(s.m.OK,{...e,render:(e,t)=>{let{children:n,...s}=e;return(0,r.jsx)("button",{className:i().tab,...s,children:(0,r.jsx)(l.x,{variant:"subtitle",weight:"bold",...s,style:{color:t.selected?"var(--canon-fg-text-primary)":"var(--canon-fg-text-secondary)"},children:n})})}}),u=e=>{let{className:t,...n}=e;return(0,r.jsx)(s.m.s_,{className:"".concat(i().panel," ").concat(t),...n})}},6361:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(7437);n(2265);var s=n(8719),l=n(6532);let a=e=>{let{name:t,size:n=16,className:a,style:i,...c}=e,{icons:o}=(0,s.z)(),d=o[t];return d?(0,r.jsx)(d,{className:(0,l.Z)("canon-Icon",a),style:{width:n,height:n,...i},...c}):(console.error('Icon "'.concat(t,'" not found or is not a valid component.')),(0,r.jsx)("svg",{}))}},1975:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(7865);let s={arrowDown:r.ZMw,arrowLeft:r.RHc,arrowRight:r.wKp,arrowUp:r.tN7,arrowDownCircle:r.iOO,arrowLeftCircle:r.zNb,arrowRightCircle:r.FU_,arrowUpCircle:r.vNF,check:r.ffJ,chevronDown:r.ZXJ,chevronUp:r.gcy,chevronLeft:r.jW7,chevronRight:r.jfD,cloud:r.Pa1,externalLink:r.uXP,heart:r.iB2,moon:r.S6R,plus:r.p22,sun:r.sEY,trash:r.GnT}},5832:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(7437),s=n(2265),l=n(8205),a=n(6532);let i=(0,s.forwardRef)((e,t)=>{let{children:n,variant:s="body",weight:i="regular",style:c,className:o,...d}=e,u=(0,l.V)(s),h=(0,l.V)(i);return(0,r.jsx)("p",{ref:t,className:(0,a.Z)("canon-Text",u&&"canon-Text--variant-".concat(u),h&&"canon-Text--weight-".concat(h),o),style:c,...d,children:n})});i.displayName="Text"},8719:function(e,t,n){"use strict";n.d(t,{O:function(){return i},z:function(){return c}});var r=n(7437),s=n(2265),l=n(1975);let a=(0,s.createContext)({icons:l.c}),i=e=>{let{children:t,overrides:n}=e,s={...l.c,...n};return(0,r.jsx)(a.Provider,{value:{icons:s},children:t})},c=()=>(0,s.useContext)(a)},8205:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(2265);let s=r.useLayoutEffect,l=[{name:"Initial",id:"initial",value:0},{name:"Extra Small",id:"xs",value:640},{name:"Small",id:"sm",value:768},{name:"Medium",id:"md",value:1024},{name:"Large",id:"lg",value:1280},{name:"Extra Large",id:"xl",value:1536}],a=()=>{let e=l.map(e=>(function(e){let{defaultValue:t=!1,initializeWithValue:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=e=>window.matchMedia(e).matches,[a,i]=(0,r.useState)(()=>n?l(e):t);function c(){i(l(e))}return s(()=>{let t=window.matchMedia(e);return c(),t.addListener?t.addListener(c):t.addEventListener("change",c),()=>{t.removeListener?t.removeListener(c):t.removeEventListener("change",c)}},[e]),a})("(min-width: ".concat(e.value,"px)")));for(let t=e.length-1;t>=0;t--)if(e[t])return l[t].id;return l[0].id},i=e=>{let t=a();if("object"==typeof e){let n=l.findIndex(e=>e.id===t);for(let t=n;t>=0;t--)if(e[l[t].id])return e[l[t].id];for(let t=0;t<l.length;t++)if(e[l[t].id])return e[l[t].id]}return e}},4952:function(e){e.exports={chip:"styles_chip__XPG78",head:"styles_head__L8DiE"}},2260:function(e){e.exports={codeBlock:"styles_codeBlock__cJkhk",title:"styles_title__LVFiR",code:"styles_code__W0N63"}},7811:function(e){e.exports={container:"styles_container__QRSI3",icon:"styles_icon__fXERG",content:"styles_content__j0Wt_",description:"styles_description__vnxpI",button:"styles_button__kV03v"}},9986:function(e){e.exports={container:"styles_container__T5X7T",preview:"styles_preview__tlnTq",previewContent:"styles_previewContent__ZqyBx",center:"styles_center__xU0vc",trigger:"styles_trigger__oILEp",panel:"styles_panel__rSJk7"}},8295:function(e){e.exports={wrapper:"styles_wrapper__sBS6b",table:"styles_table__ij6HO",tableCell:"styles_tableCell__kaS_H",tableHeaderCell:"styles_tableHeaderCell__bWDvx",tableRow:"styles_tableRow__LiOYk",tableChip:"styles_tableChip__K9ssW",tableType:"styles_tableType__Nq22z"}},6825:function(e){e.exports={root:"styles_root__sy2wE",list:"styles_list___Mh8g",tab:"styles_tab__IQ_KB",indicator:"styles_indicator__iUzBj"}}}]);