(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2793],{8325:function(t,e,n){Promise.resolve().then(n.bind(n,3638))},3638:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=n(7437),r=n(5832),l=n(5240),s=n(2521),a=n(4470),c=n(2265),o=n(2394);let u=t=>{let{children:e}=t,[n,r]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{r(!0)},[]),n)?(0,i.jsx)(o.ZP,{loading:"lazy",style:{width:"100%",height:"100%"},initialContent:'<!DOCTYPE html><html data-theme="light"><head></head><body><div class="frame-root"></div></body></html>',mountTarget:".frame-root",head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"stylesheet",href:"/core.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/components.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/backstage.css"})]}),children:e}):null};var d=n(4953),h=n(5380),x=n(5276),f=n(8525),g=n(3734),j=n(3366),m=n.n(j);function p(){let{selectedScreenSizes:t}=(0,d.D)(),e=a.fl.filter(e=>t.includes(e.slug));return 0===e.length?(0,i.jsx)("div",{className:m().containerEmpty,children:(0,i.jsx)(v,{})}):(0,i.jsx)("div",{className:m().container,children:e.map(t=>(0,i.jsxs)("div",{className:m().breakpointContainer,style:{width:t.width},children:[(0,i.jsxs)(r.Text,{children:[t.title," - ",t.width,"px"]}),(0,i.jsx)("div",{className:m().breakpointContent,children:(0,i.jsx)(u,{children:(0,i.jsx)(v,{})})})]},t.slug))})}let v=()=>{let{selectedComponents:t}=(0,d.D)();return(0,i.jsxs)(l.K,{gap:"xl",children:[t.find(t=>"button"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(h.q,{}),title:"Button"}),t.find(t=>"checkbox"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(x.F,{}),title:"Checkbox"}),t.find(t=>"heading"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(f.Y,{}),title:"Heading"}),t.find(t=>"text"===t)&&(0,i.jsx)(b,{content:(0,i.jsx)(g.C,{}),title:"Text"})]})},b=t=>{let{content:e,title:n}=t;return(0,i.jsxs)(s.r,{gap:{xs:"xs",md:"xl"},children:[(0,i.jsx)(s.r.Item,{colSpan:2,children:(0,i.jsx)(r.Text,{children:n})}),(0,i.jsx)(s.r.Item,{colSpan:10,children:e})]})}},5380:function(t,e,n){"use strict";n.d(e,{ButtonDisabled:function(){return h},ButtonFullWidth:function(){return d},ButtonPreview:function(){return c},ButtonResponsive:function(){return x},ButtonSizes:function(){return o},ButtonWithIcons:function(){return u},q:function(){return f}});var i=n(7437),r=n(1408),l=n(2430),s=n(5240),a=n(5832);let c=()=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(l.Button,{iconStart:"cloud",variant:"primary",children:"Button"}),(0,i.jsx)(l.Button,{iconStart:"cloud",variant:"secondary",children:"Button"}),(0,i.jsx)(l.Button,{iconStart:"cloud",variant:"tertiary",children:"Button"})]}),o=()=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(l.Button,{size:"medium",children:"Medium"}),(0,i.jsx)(l.Button,{size:"small",children:"Small"})]}),u=()=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(l.Button,{iconStart:"cloud",children:"Button"}),(0,i.jsx)(l.Button,{iconEnd:"chevronRight",children:"Button"}),(0,i.jsx)(l.Button,{iconStart:"cloud",iconEnd:"chevronRight",children:"Button"})]}),d=()=>(0,i.jsxs)(s.K,{style:{width:"300px"},children:[(0,i.jsx)(l.Button,{iconStart:"cloud",children:"Button"}),(0,i.jsx)(l.Button,{iconEnd:"chevronRight",children:"Button"}),(0,i.jsx)(l.Button,{iconStart:"cloud",iconEnd:"chevronRight",children:"Button"})]}),h=()=>(0,i.jsx)(l.Button,{disabled:!0,children:"Button"}),x=()=>null,f=()=>(0,i.jsx)(s.K,{children:["primary","secondary","tertiary"].map(t=>(0,i.jsxs)(s.K,{children:[(0,i.jsx)(a.Text,{children:t}),["small","medium"].map(e=>(0,i.jsxs)(r.g,{alignY:"center",children:[(0,i.jsx)(l.Button,{iconStart:"cloud",variant:t,size:e,children:"Button"}),(0,i.jsx)(l.Button,{iconEnd:"chevronRight",variant:t,size:e,children:"Button"}),(0,i.jsx)(l.Button,{iconStart:"cloud",iconEnd:"chevronRight",style:{width:"200px"},variant:t,size:e,children:"Button"})]},e))]},t))})},5276:function(t,e,n){"use strict";n.d(e,{CheckboxAllVariants:function(){return o},CheckboxPreview:function(){return c},F:function(){return u}});var i=n(7437),r=n(2164),l=n(1408),s=n(5240),a=n(5832);let c=()=>(0,i.jsx)(r.X,{label:"Accept terms and conditions"}),o=()=>(0,i.jsxs)(l.g,{alignY:"center",children:[(0,i.jsx)(r.X,{}),(0,i.jsx)(r.X,{checked:!0}),(0,i.jsx)(r.X,{label:"Checkbox"}),(0,i.jsx)(r.X,{label:"Checkbox",checked:!0})]}),u=()=>(0,i.jsxs)(s.K,{children:[(0,i.jsx)(a.Text,{children:"All variants"}),(0,i.jsxs)(l.g,{alignY:"center",children:[(0,i.jsx)(r.X,{}),(0,i.jsx)(r.X,{checked:!0}),(0,i.jsx)(r.X,{label:"Checkbox"}),(0,i.jsx)(r.X,{label:"Checkbox",checked:!0})]})]})},8525:function(t,e,n){"use strict";n.d(e,{HeadingAllVariants:function(){return c},HeadingPreview:function(){return a},HeadingResponsive:function(){return o},Y:function(){return u}});var i=n(7437),r=n(105),l=n(5240),s=n(5832);let a=()=>(0,i.jsx)(r.Heading,{children:"Look mum, no hands!"}),c=()=>(0,i.jsxs)(l.K,{children:[(0,i.jsx)(r.Heading,{variant:"display",children:"Display"}),(0,i.jsx)(r.Heading,{variant:"title1",children:"Title 1"}),(0,i.jsx)(r.Heading,{variant:"title2",children:"Title 2"}),(0,i.jsx)(r.Heading,{variant:"title3",children:"Title 3"}),(0,i.jsx)(r.Heading,{variant:"title4",children:"Title 4"})]}),o=()=>null,u=()=>(0,i.jsxs)(l.K,{children:[(0,i.jsx)(s.Text,{children:"All variants"}),(0,i.jsx)(r.Heading,{variant:"display",children:"Display"}),(0,i.jsx)(r.Heading,{variant:"title1",children:"Title 1"}),(0,i.jsx)(r.Heading,{variant:"title2",children:"Title 2"}),(0,i.jsx)(r.Heading,{variant:"title3",children:"Title 3"}),(0,i.jsx)(r.Heading,{variant:"title4",children:"Title 4"})]})},4470:function(t,e,n){"use strict";n.d(e,{G_:function(){return i},ZT:function(){return l},fl:function(){return a},rS:function(){return r},wx:function(){return s}});let i=[{title:"Getting Started",slug:""},{title:"About",slug:"about"}],r=[{title:"Iconography",slug:"iconography"},{title:"Layout",slug:"layout"},{title:"Responsive",slug:"responsive"},{title:"Theming",slug:"theming"},{title:"Typography",slug:"typography"}],l=[{title:"Box",slug:"box",status:"alpha"},{title:"Container",slug:"container",status:"alpha"},{title:"Grid",slug:"grid",status:"alpha"},{title:"Inline",slug:"inline",status:"alpha"},{title:"Stack",slug:"stack",status:"alpha"}],s=[{title:"Button",slug:"button",status:"alpha"},{title:"Checkbox",slug:"checkbox",status:"alpha"},{title:"Field",slug:"field",status:"alpha"},{title:"Heading",slug:"heading",status:"alpha"},{title:"Icon",slug:"icon",status:"alpha"},{title:"Input",slug:"input",status:"alpha"},{title:"Table",slug:"table",status:"inProgress"},{title:"Text",slug:"text",status:"alpha"}],a=[{title:"Mobile",slug:"mobile",width:390},{title:"Tablet",slug:"tablet",width:768},{title:"Desktop",slug:"desktop",width:1280},{title:"Wide",slug:"wide",width:1600}]},4953:function(t,e,n){"use strict";n.d(e,{$:function(){return a},D:function(){return c}});var i=n(7437),r=n(2265),l=n(4470);let s=(0,r.createContext)({selectedScreenSizes:[],setSelectedScreenSizes:()=>{},selectedComponents:[],setSelectedComponents:()=>{},selectedTheme:"light",setSelectedTheme:()=>{},selectedThemeName:"default",setSelectedThemeName:()=>{}}),a=t=>{let{children:e}=t,[n,a]=(0,r.useState)([]),[c,o]=(0,r.useState)(l.wx.map(t=>t.slug)),[u,d]=(0,r.useState)(()=>localStorage.getItem("theme")||"light"),[h,x]=(0,r.useState)(()=>localStorage.getItem("theme-name")||"default");return(0,r.useEffect)(()=>{document.documentElement.setAttribute("data-theme",u||"light"),localStorage.setItem("theme",u||"light")},[u,!0]),(0,r.useEffect)(()=>{document.documentElement.setAttribute("data-theme-name",h||"default"),localStorage.setItem("theme-name",h||"default")},[h,!0]),(0,i.jsx)(s.Provider,{value:{selectedScreenSizes:n,setSelectedScreenSizes:a,selectedComponents:c,setSelectedComponents:o,selectedTheme:u,setSelectedTheme:d,selectedThemeName:h,setSelectedThemeName:x},children:e})},c=()=>(0,r.useContext)(s)},2430:function(t,e,n){"use strict";n.d(e,{Button:function(){return c}});var i=n(7437),r=n(2265),l=n(6361),s=n(6581),a=n(6532);let c=(0,r.forwardRef)((t,e)=>{let{size:n="medium",variant:r="primary",disabled:c,iconStart:o,iconEnd:u,children:d,className:h,style:x,...f}=t,{getResponsiveValue:g}=(0,s.useCanon)(),j=g(n),m=g(r);return(0,i.jsxs)("button",{...f,ref:e,disabled:c,className:(0,a.Z)("canon-Button","canon-Button--size-".concat(j),"canon-Button--variant-".concat(m),h),style:x,children:[(0,i.jsxs)("span",{className:["canon-Button--content",o&&u?"canon-Button--icon-start-end":""].filter(Boolean).join(" "),children:[o&&(0,i.jsx)(l.Icon,{name:o}),d]}),u&&(0,i.jsx)(l.Icon,{name:u})]})})},2164:function(t,e,n){"use strict";n.d(e,{X:function(){return c}});var i=n(7437),r=n(2265),l=n(4816),s=n(6361),a=n(6532);let c=r.forwardRef((t,e)=>{let{label:n,checked:r,onChange:c,disabled:o,required:u,className:d,name:h,value:x,style:f}=t,g=(0,i.jsx)(l.X.f,{ref:e,className:(0,a.Z)("canon-CheckboxRoot",d),checked:r,onCheckedChange:c,disabled:o,required:u,name:h,value:x,style:f,children:(0,i.jsx)(l.X.z,{className:"canon-CheckboxIndicator",children:(0,i.jsx)(s.Icon,{name:"check",size:12})})});return n?(0,i.jsxs)("label",{className:"canon-CheckboxLabel",children:[g,n]}):g})},2521:function(t,e,n){"use strict";n.d(e,{r:function(){return s}});var i=n(2265),r=n(7110),l=n(6532);let s=Object.assign((0,i.forwardRef)((t,e)=>{let{children:n,gap:s="xs",columns:a="auto",className:c,style:o,...u}=t,d=(0,r.f)({gap:s,columns:a,...u});return(0,i.createElement)("div",{ref:e,className:(0,l.Z)("canon-Grid",d,c),style:o,children:n})}),{Item:(0,i.forwardRef)((t,e)=>{let{children:n,className:s,style:a,...c}=t,o=(0,r.f)(c);return(0,i.createElement)("div",{ref:e,className:(0,l.Z)("canon-GridItem",o,s),style:a,children:n})})})},105:function(t,e,n){"use strict";n.d(e,{Heading:function(){return a}});var i=n(7437),r=n(2265),l=n(6581),s=n(6532);let a=(0,r.forwardRef)((t,e)=>{let{children:n,variant:r="title1",as:a="h1",className:c,...o}=t,{getResponsiveValue:u}=(0,l.useCanon)(),d=u(r),h=a;return"title2"===r&&(h="h2"),"title3"===r&&(h="h3"),"title4"===r&&(h="h4"),"title5"===r&&(h="h5"),a&&(h=a),(0,i.jsx)(h,{ref:e,className:(0,s.Z)("canon-Heading",d&&"canon-Heading--variant-".concat(d),c),...o,children:n})});a.displayName="Heading"},6361:function(t,e,n){"use strict";n.r(e),n.d(e,{Icon:function(){return s}});var i=n(7437);n(2265);var r=n(6581),l=n(6532);let s=t=>{let{name:e,size:n=16,className:s,style:a,...c}=t,{icons:o}=(0,r.useCanon)(),u=o[e];return u?(0,i.jsx)(u,{className:(0,l.Z)("canon-Icon",s),style:{width:n,height:n,...a},...c}):(console.error('Icon "'.concat(e,'" not found or is not a valid component.')),(0,i.jsx)("svg",{}))}},1408:function(t,e,n){"use strict";n.d(e,{g:function(){return c}});var i=n(2265),r=n(7110),l=n(6532);let s=t=>{if("string"==typeof t){let e="stretch";return"left"===t&&(e="start"),"center"===t&&(e="center"),"right"===t&&(e="end"),e}if("object"==typeof t){let e={};for(let[n,i]of Object.entries(t))e[n]=s(i);return e}return"stretch"},a=t=>{if("string"==typeof t){let e="stretch";return"top"===t&&(e="start"),"center"===t&&(e="center"),"bottom"===t&&(e="end"),e}if("object"==typeof t){let e={};for(let[n,i]of Object.entries(t))e[n]=a(i);return e}return"stretch"},c=(0,i.forwardRef)((t,e)=>{let{as:n="div",children:c,align:o="left",alignY:u="top",gap:d="xs",className:h,style:x,...f}=t,g=(0,r.f)({gap:d,alignItems:a(u),justifyContent:s(o),...f});return(0,i.createElement)(n,{ref:e,className:(0,l.Z)("canon-Inline",g,h),style:x,children:c})})},3366:function(t){t.exports={container:"styles_container__AT8Hf",containerEmpty:"styles_containerEmpty__Bclxm",breakpointContainer:"styles_breakpointContainer__T3qxS",breakpointContent:"styles_breakpointContent__fFuPb"}}},function(t){t.O(0,[4325,3738,5266,6224,3734,2971,2117,1744],function(){return t(t.s=8325)}),_N_E=t.O()}]);