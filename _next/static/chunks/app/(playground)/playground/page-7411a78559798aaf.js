(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{8325:function(t,e,n){Promise.resolve().then(n.bind(n,3638))},3638:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=n(7437),r=n(5832),l=n(5240),s=n(2521),a=n(4470),c=n(2265),o=n(2394);let u=t=>{let{children:e}=t,[n,r]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{r(!0)},[]),n)?(0,i.jsx)(o.ZP,{loading:"lazy",style:{width:"100%",height:"100%"},initialContent:'<!DOCTYPE html><html data-theme="light"><head></head><body><div class="frame-root"></div></body></html>',mountTarget:".frame-root",head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"stylesheet",href:"/core.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/components.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/backstage.css"})]}),children:e}):null};var d=n(4953),h=n(3408),x=n(5276),f=n(1786),j=n(3734),g=n(3366),m=n.n(g);function p(){let{selectedScreenSizes:t}=(0,d.D)(),e=a.fl.filter(e=>t.includes(e.slug));return 0===e.length?(0,i.jsx)("div",{className:m().containerEmpty,children:(0,i.jsx)(v,{})}):(0,i.jsx)("div",{className:m().container,children:e.map(t=>(0,i.jsxs)("div",{className:m().breakpointContainer,style:{width:t.width},children:[(0,i.jsxs)(r.x,{children:[t.title," - ",t.width,"px"]}),(0,i.jsx)("div",{className:m().breakpointContent,children:(0,i.jsx)(u,{children:(0,i.jsx)(v,{})})})]},t.slug))})}let v=()=>{let{selectedComponents:t}=(0,d.D)();return(0,i.jsxs)(l.K,{gap:"xl",children:[t.find(t=>"button"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(h.q,{}),title:"Button"}),t.find(t=>"checkbox"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(x.F,{}),title:"Checkbox"}),t.find(t=>"heading"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(f.Y,{}),title:"Heading"}),t.find(t=>"text"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(j.C,{}),title:"Text"})]})},b=t=>{let{content:e,title:n}=t;return(0,i.jsxs)(s.r,{gap:{xs:"xs",md:"xl"},children:[(0,i.jsx)(s.r.Item,{colSpan:2,children:(0,i.jsx)(r.x,{children:n})}),(0,i.jsx)(s.r.Item,{colSpan:10,children:e})]})}},3408:function(t,e,n){"use strict";n.d(e,{ButtonDisabled:function(){return g},ButtonFullWidth:function(){return j},q:function(){return p},ButtonPreview:function(){return h},ButtonResponsive:function(){return m},ButtonSizes:function(){return x},ButtonWithIcons:function(){return f}});var i=n(7437),r=n(1408),l=n(2265),s=n(6361),a=n(6532),c=n(8205);let o=(0,l.forwardRef)((t,e)=>{let{size:n="medium",variant:r="primary",disabled:l,iconStart:o,iconEnd:u,children:d,className:h,style:x,...f}=t,j=(0,c.V)(n),g=(0,c.V)(r);return(0,i.jsxs)("button",{...f,ref:e,disabled:l,className:(0,a.Z)("canon-Button","canon-Button--size-".concat(j),"canon-Button--variant-".concat(g),h),style:x,children:[(0,i.jsxs)("span",{className:["canon-Button--content",o&&u?"canon-Button--icon-start-end":""].filter(Boolean).join(" "),children:[o&&(0,i.jsx)(s.J,{name:o}),d]}),u&&(0,i.jsx)(s.J,{name:u})]})});var u=n(5240),d=n(5832);let h=()=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(o,{iconStart:"cloud",variant:"primary",children:"Button"}),(0,i.jsx)(o,{iconStart:"cloud",variant:"secondary",children:"Button"}),(0,i.jsx)(o,{iconStart:"cloud",variant:"tertiary",children:"Button"})]}),x=()=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(o,{size:"medium",children:"Medium"}),(0,i.jsx)(o,{size:"small",children:"Small"})]}),f=()=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(o,{iconStart:"cloud",children:"Button"}),(0,i.jsx)(o,{iconEnd:"chevronRight",children:"Button"}),(0,i.jsx)(o,{iconStart:"cloud",iconEnd:"chevronRight",children:"Button"})]}),j=()=>(0,i.jsxs)(u.K,{style:{width:"300px"},children:[(0,i.jsx)(o,{iconStart:"cloud",children:"Button"}),(0,i.jsx)(o,{iconEnd:"chevronRight",children:"Button"}),(0,i.jsx)(o,{iconStart:"cloud",iconEnd:"chevronRight",children:"Button"})]}),g=()=>(0,i.jsx)(o,{disabled:!0,children:"Button"}),m=()=>(0,i.jsx)(o,{variant:{initial:"primary",lg:"secondary"},children:"Responsive Button"}),p=()=>(0,i.jsx)(u.K,{children:["primary","secondary","tertiary"].map(t=>(0,i.jsxs)(u.K,{children:[(0,i.jsx)(d.x,{children:t}),["small","medium"].map(e=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(o,{iconStart:"cloud",variant:t,size:e,children:"Button"}),(0,i.jsx)(o,{iconEnd:"chevronRight",variant:t,size:e,children:"Button"}),(0,i.jsx)(o,{iconStart:"cloud",iconEnd:"chevronRight",style:{width:"200px"},variant:t,size:e,children:"Button"})]},e))]},t))})},5276:function(t,e,n){"use strict";n.d(e,{CheckboxAllVariants:function(){return o},CheckboxPreview:function(){return c},F:function(){return u}});var i=n(7437),r=n(2164),l=n(1408),s=n(5240),a=n(5832);let c=()=>(0,i.jsx)(r.X,{label:"Accept terms and conditions"}),o=()=>(0,i.jsxs)(l.g,{alignY:"center",children:[(0,i.jsx)(r.X,{}),(0,i.jsx)(r.X,{checked:!0}),(0,i.jsx)(r.X,{label:"Checkbox"}),(0,i.jsx)(r.X,{label:"Checkbox",checked:!0})]}),u=()=>(0,i.jsxs)(s.K,{children:[(0,i.jsx)(a.x,{children:"All variants"}),(0,i.jsxs)(l.g,{alignY:"center",children:[(0,i.jsx)(r.X,{}),(0,i.jsx)(r.X,{checked:!0}),(0,i.jsx)(r.X,{label:"Checkbox"}),(0,i.jsx)(r.X,{label:"Checkbox",checked:!0})]})]})},1786:function(t,e,n){"use strict";n.d(e,{HeadingAllVariants:function(){return d},Y:function(){return x},HeadingPreview:function(){return u},HeadingResponsive:function(){return h}});var i=n(7437),r=n(2265),l=n(6532),s=n(8205);let a=(0,r.forwardRef)((t,e)=>{let{children:n,variant:r="title1",as:a="h1",className:c,...o}=t,u=(0,s.V)(r),d=a;return"title2"===r&&(d="h2"),"title3"===r&&(d="h3"),"title4"===r&&(d="h4"),"title5"===r&&(d="h5"),a&&(d=a),(0,i.jsx)(d,{ref:e,className:(0,l.Z)("canon-Heading",u&&"canon-Heading--variant-".concat(u),c),...o,children:n})});a.displayName="Heading";var c=n(5240),o=n(5832);let u=()=>(0,i.jsx)(a,{children:"Look mum, no hands!"}),d=()=>(0,i.jsxs)(c.K,{children:[(0,i.jsx)(a,{variant:"display",children:"Display"}),(0,i.jsx)(a,{variant:"title1",children:"Title 1"}),(0,i.jsx)(a,{variant:"title2",children:"Title 2"}),(0,i.jsx)(a,{variant:"title3",children:"Title 3"}),(0,i.jsx)(a,{variant:"title4",children:"Title 4"})]}),h=()=>(0,i.jsx)(c.K,{children:(0,i.jsx)(a,{variant:{initial:"title2",lg:"title1"},children:"Responsive heading"})}),x=()=>(0,i.jsxs)(c.K,{children:[(0,i.jsx)(o.x,{children:"All variants"}),(0,i.jsx)(a,{variant:"display",children:"Display"}),(0,i.jsx)(a,{variant:"title1",children:"Title 1"}),(0,i.jsx)(a,{variant:"title2",children:"Title 2"}),(0,i.jsx)(a,{variant:"title3",children:"Title 3"}),(0,i.jsx)(a,{variant:"title4",children:"Title 4"})]})},4470:function(t,e,n){"use strict";n.d(e,{G_:function(){return i},ZT:function(){return l},fl:function(){return a},rS:function(){return r},wx:function(){return s}});let i=[{title:"Getting Started",slug:""},{title:"About",slug:"about"}],r=[{title:"Iconography",slug:"iconography"},{title:"Layout",slug:"layout"},{title:"Responsive",slug:"responsive"},{title:"Theming",slug:"theming"},{title:"Typography",slug:"typography"}],l=[{title:"Box",slug:"box",status:"alpha"},{title:"Container",slug:"container",status:"alpha"},{title:"Grid",slug:"grid",status:"alpha"},{title:"Inline",slug:"inline",status:"alpha"},{title:"Stack",slug:"stack",status:"alpha"}],s=[{title:"Button",slug:"button",status:"alpha"},{title:"Checkbox",slug:"checkbox",status:"alpha"},{title:"Field",slug:"field",status:"alpha"},{title:"Heading",slug:"heading",status:"alpha"},{title:"Icon",slug:"icon",status:"alpha"},{title:"Input",slug:"input",status:"alpha"},{title:"Table",slug:"table",status:"inProgress"},{title:"Text",slug:"text",status:"alpha"}],a=[{title:"Mobile",slug:"mobile",width:390},{title:"Tablet",slug:"tablet",width:768},{title:"Desktop",slug:"desktop",width:1280},{title:"Wide",slug:"wide",width:1600}]},4953:function(t,e,n){"use strict";n.d(e,{$:function(){return a},D:function(){return c}});var i=n(7437),r=n(2265),l=n(4470);let s=(0,r.createContext)({selectedScreenSizes:[],setSelectedScreenSizes:()=>{},selectedComponents:[],setSelectedComponents:()=>{},selectedTheme:"light",setSelectedTheme:()=>{},selectedThemeName:"default",setSelectedThemeName:()=>{}}),a=t=>{let{children:e}=t,[n,a]=(0,r.useState)([]),[c,o]=(0,r.useState)(l.wx.map(t=>t.slug)),[u,d]=(0,r.useState)(()=>localStorage.getItem("theme")||"light"),[h,x]=(0,r.useState)(()=>localStorage.getItem("theme-name")||"default");return(0,r.useEffect)(()=>{document.documentElement.setAttribute("data-theme",u||"light"),localStorage.setItem("theme",u||"light")},[u,!0]),(0,r.useEffect)(()=>{document.documentElement.setAttribute("data-theme-name",h||"default"),localStorage.setItem("theme-name",h||"default")},[h,!0]),(0,i.jsx)(s.Provider,{value:{selectedScreenSizes:n,setSelectedScreenSizes:a,selectedComponents:c,setSelectedComponents:o,selectedTheme:u,setSelectedTheme:d,selectedThemeName:h,setSelectedThemeName:x},children:e})},c=()=>(0,r.useContext)(s)},2164:function(t,e,n){"use strict";n.d(e,{X:function(){return c}});var i=n(7437),r=n(2265),l=n(6686),s=n(6361),a=n(6532);let c=r.forwardRef((t,e)=>{let{label:n,checked:r,onChange:c,disabled:o,required:u,className:d,name:h,value:x,style:f}=t,j=(0,i.jsx)(l.X.f,{ref:e,className:(0,a.Z)("canon-CheckboxRoot",d),checked:r,onCheckedChange:c,disabled:o,required:u,name:h,value:x,style:f,children:(0,i.jsx)(l.X.z,{className:"canon-CheckboxIndicator",children:(0,i.jsx)(s.J,{name:"check",size:12})})});return n?(0,i.jsxs)("label",{className:"canon-CheckboxLabel",children:[j,n]}):j})},2521:function(t,e,n){"use strict";n.d(e,{r:function(){return s}});var i=n(2265),r=n(7110),l=n(6532);let s=Object.assign((0,i.forwardRef)((t,e)=>{let{children:n,gap:s="xs",columns:a="auto",className:c,style:o,...u}=t,d=(0,r.f)({gap:s,columns:a,...u});return(0,i.createElement)("div",{ref:e,className:(0,l.Z)("canon-Grid",d,c),style:o,children:n})}),{Item:(0,i.forwardRef)((t,e)=>{let{children:n,className:s,style:a,...c}=t,o=(0,r.f)(c);return(0,i.createElement)("div",{ref:e,className:(0,l.Z)("canon-GridItem",o,s),style:a,children:n})})})},6361:function(t,e,n){"use strict";n.d(e,{J:function(){return s}});var i=n(7437);n(2265);var r=n(8719),l=n(6532);let s=t=>{let{name:e,size:n=16,className:s,style:a,...c}=t,{icons:o}=(0,r.z)(),u=o[e];return u?(0,i.jsx)(u,{className:(0,l.Z)("canon-Icon",s),style:{width:n,height:n,...a},...c}):(console.error('Icon "'.concat(e,'" not found or is not a valid component.')),(0,i.jsx)("svg",{}))}},1975:function(t,e,n){"use strict";n.d(e,{c:function(){return r}});var i=n(7865);let r={arrowDown:i.ZMw,arrowLeft:i.RHc,arrowRight:i.wKp,arrowUp:i.tN7,arrowDownCircle:i.iOO,arrowLeftCircle:i.zNb,arrowRightCircle:i.FU_,arrowUpCircle:i.vNF,check:i.ffJ,chevronDown:i.ZXJ,chevronUp:i.gcy,chevronLeft:i.jW7,chevronRight:i.jfD,cloud:i.Pa1,externalLink:i.uXP,heart:i.iB2,moon:i.S6R,plus:i.p22,sun:i.sEY,trash:i.GnT}},1408:function(t,e,n){"use strict";n.d(e,{g:function(){return c}});var i=n(2265),r=n(7110),l=n(6532);let s=t=>{if("string"==typeof t){let e="stretch";return"left"===t&&(e="start"),"center"===t&&(e="center"),"right"===t&&(e="end"),e}if("object"==typeof t){let e={};for(let[n,i]of Object.entries(t))e[n]=s(i);return e}return"stretch"},a=t=>{if("string"==typeof t){let e="stretch";return"top"===t&&(e="start"),"center"===t&&(e="center"),"bottom"===t&&(e="end"),e}if("object"==typeof t){let e={};for(let[n,i]of Object.entries(t))e[n]=a(i);return e}return"stretch"},c=(0,i.forwardRef)((t,e)=>{let{as:n="div",children:c,align:o="left",alignY:u="top",gap:d="xs",className:h,style:x,...f}=t,j=(0,r.f)({gap:d,alignItems:a(u),justifyContent:s(o),...f});return(0,i.createElement)(n,{ref:e,className:(0,l.Z)("canon-Inline",j,h),style:x,children:c})})},8719:function(t,e,n){"use strict";n.d(e,{O:function(){return a},z:function(){return c}});var i=n(7437),r=n(2265),l=n(1975);let s=(0,r.createContext)({icons:l.c}),a=t=>{let{children:e,overrides:n}=t,r={...l.c,...n};return(0,i.jsx)(s.Provider,{value:{icons:r},children:e})},c=()=>(0,r.useContext)(s)},3366:function(t){t.exports={container:"styles_container__AT8Hf",containerEmpty:"styles_containerEmpty__Bclxm",breakpointContainer:"styles_breakpointContainer__T3qxS",breakpointContent:"styles_breakpointContent__fFuPb"}}},function(t){t.O(0,[543,738,686,861,734,478,117,744],function(){return t(t.s=8325)}),_N_E=t.O()}]);