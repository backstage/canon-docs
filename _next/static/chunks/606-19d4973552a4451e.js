"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{2606:function(e,a,r){r.d(a,{xu:function(){return y},zx:function(){return z},XZ:function(){return G},W2:function(){return Z},gN:function(){return W},kC:function(){return R},rj:function(){return j},X6:function(){return E},JO:function(){return M},hU:function(){return S},II:function(){return _},xv:function(){return T},ci:function(){return n}});var s=r(2265),t=r(7865);let n={"account-circle":t.eNb,alert:t.L8_,"arrow-down":t.dtO,"arrow-down-circle":t.iOO,"caret-down":t.kc8,"caret-left":t.wbu,"caret-right":t.Cs$,"caret-up":t.OvG,"arrow-left":t.YG0,"arrow-left-circle":t.zNb,"arrow-left-down":t.jKb,"arrow-left-up":t.Hhs,"arrow-right":t.nzV,"arrow-right-circle":t.FU_,"arrow-right-down":t.Ivt,"arrow-right-up":t.wpV,"arrow-up":t.e_Z,"arrow-up-circle":t.vNF,braces:t.x43,brackets:t.nIR,bug:t.dvu,check:t.ffJ,"check-double":t.r3L,"chevron-down":t.ZXJ,"chevron-left":t.jW7,"chevron-right":t.jfD,"chevron-up":t.gcy,cloud:t.lvZ,code:t.bx6,discord:t.ESF,download:t.gJg,"external-link":t.uXP,eye:t.VhL,"eye-off":t.ezZ,filter:t.KcA,flower:t.sSB,github:t.ioR,"git-repository":t.Ghl,group:t.DR0,heart:t.unI,moon:t.S6R,plus:t.p22,"sidebar-fold":t.$eL,"sidebar-unfold":t.iyS,sparkling:t.F1g,star:t.u20,sun:t.sEY,terminal:t.bge,trash:t.GnT,upload:t.nIw,user:t.s60,youtube:t.pzF,"zoom-in":t.pnK,"zoom-out":t.$56},l=(0,s.createContext)({icons:n}),o=()=>(0,s.useContext)(l);var i=r(6532);function c(e,a){let r=(e.className||"").split(" "),s={...e.style},t=a=>e.hasOwnProperty(a);for(let n in a){if(!t(n)&&!a[n].hasOwnProperty("default"))continue;let l=t(n)?e[n]:a[n].default,o=a[n].values,i=a[n].customProperties,c=a[n].className,u=a[n].responsive,m=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";"as"!==n&&(o.includes(e)?r.push("".concat(a).concat(c,"-").concat(e)):(s[u&&a?"".concat(i,"-").concat(a.slice(0,-1)):i]=e,r.push("".concat(a).concat(c))))};if(u&&"object"==typeof l)for(let e in l){let a="initial"===e?"":"".concat(e,":");m(l[e],a)}else m(l)}let n=Object.keys(e).reduce((r,s)=>(a.hasOwnProperty(s)||(r[s]=e[s]),r),{}),l=r.filter(e=>e&&""!==e.trim()).join(" ");return{...n,className:l,style:s}}let u=["0.5","1","1.5","2","3","4","5","6","7","8","9","10","11","12","13","14"],m={p:{type:"enum | string",className:"cu-p",customProperties:["--p"],values:u,responsive:!0},px:{type:"enum | string",className:"cu-px",customProperties:["--px"],values:u,responsive:!0},py:{type:"enum | string",className:"cu-py",customProperties:["--py"],values:u,responsive:!0},pt:{type:"enum | string",className:"cu-pt",customProperties:["--pt"],values:u,responsive:!0},pr:{type:"enum | string",className:"cu-pr",customProperties:["--pr"],values:u,responsive:!0},pb:{type:"enum | string",className:"cu-pb",customProperties:["--pb"],values:u,responsive:!0},pl:{type:"enum | string",className:"cu-pl",customProperties:["--pl"],values:u,responsive:!0},m:{type:"enum | string",values:u,className:"cu-m",customProperties:["--m"],responsive:!0},mx:{type:"enum | string",values:u,className:"cu-mx",customProperties:["--mx"],responsive:!0},my:{type:"enum | string",values:u,className:"cu-my",customProperties:["--my"],responsive:!0},mt:{type:"enum | string",values:u,className:"cu-mt",customProperties:["--mt"],responsive:!0},mr:{type:"enum | string",values:u,className:"cu-mr",customProperties:["--mr"],responsive:!0},mb:{type:"enum | string",values:u,className:"cu-mb",customProperties:["--mb"],responsive:!0},ml:{type:"enum | string",values:u,className:"cu-ml",customProperties:["--ml"],responsive:!0}},d={as:{type:"enum",values:["div","span"],default:"div"}},p={width:{type:"string",className:"cu-w",customProperties:["--width"],responsive:!0},minWidth:{type:"string",className:"cu-min-w",customProperties:["--min-width"],responsive:!0},maxWidth:{type:"string",className:"cu-max-w",customProperties:["--max-width"],responsive:!0}},f={height:{type:"string",className:"cu-h",customProperties:["--height"],responsive:!0},minHeight:{type:"string",className:"cu-min-h",customProperties:["--min-height"],responsive:!0},maxHeight:{type:"string",className:"cu-max-h",customProperties:["--max-height"],responsive:!0}},N={position:{type:"enum",className:"cu-position",values:["static","relative","absolute","fixed","sticky"],responsive:!0}},v={display:{type:"enum",className:"cu-display",values:["none","inline","inline-block","block"],responsive:!0}},y=(0,s.forwardRef)((e,a)=>{let{children:r}=e,{className:t,style:n}=c(e,{...m,...p,...f,...N,...v,...d});return(0,s.createElement)(e.as||"div",{ref:a,className:(0,i.Z)("canon-Box",t),style:n,children:r})});y.displayName="Box";let h={gap:{type:"enum | string",className:"cu-gap",customProperties:["--gap"],values:u,responsive:!0,default:"4"}},x=["1","2","3","4","5","6","7","8","9","10","11","12","auto"],w={columns:{type:"enum | string",className:"cu-columns",customProperties:["--columns"],values:x,responsive:!0,default:"auto"}},g={colSpan:{type:"enum | string",className:"cu-col-span",customProperties:["--col-span"],values:x,responsive:!0},colEnd:{type:"enum | string",className:"cu-col-end",customProperties:["--col-end"],values:x,responsive:!0},colStart:{type:"enum | string",className:"cu-col-start",customProperties:["--col-start"],values:x,responsive:!0},rowSpan:{type:"enum | string",className:"cu-row-span",customProperties:["--row-span"],values:x,responsive:!0}},j=Object.assign((0,s.forwardRef)((e,a)=>{let{className:r,style:t}=c(e,{...h,...w});return(0,s.createElement)("div",{ref:a,className:(0,i.Z)("canon-Grid",r),style:t,children:e.children})}),{Item:(0,s.forwardRef)((e,a)=>{let{className:r,style:t}=c(e,{...g});return(0,s.createElement)("div",{ref:a,className:(0,i.Z)("canon-GridItem",r),style:t,children:e.children})})}),b={align:{type:"enum",className:"cu-align",values:["start","center","end","baseline","stretch"],responsive:!0},direction:{type:"enum",className:"cu-fd",values:["row","column","row-reverse","column-reverse"],responsive:!0},justify:{type:"enum",className:"cu-jc",values:["start","center","end","between"],responsive:!0}},R=(0,s.forwardRef)((e,a)=>{let{className:r,style:t}=c(e,{...h,...b});return(0,s.createElement)("div",{ref:a,className:(0,i.Z)("canon-Flex",r),style:t,children:e.children})}),Z=(0,s.forwardRef)((e,a)=>{let{children:r}=e,{className:t,style:n}=c(e,{...v});return(0,s.createElement)("div",{ref:a,className:(0,i.Z)("canon-Container",t),style:n,children:r})});var C=r(7437);let P=s.useLayoutEffect,I=[{name:"Initial",id:"initial",value:0},{name:"Extra Small",id:"xs",value:640},{name:"Small",id:"sm",value:768},{name:"Medium",id:"md",value:1024},{name:"Large",id:"lg",value:1280},{name:"Extra Large",id:"xl",value:1536}],k=()=>{let e=I.map(e=>(function(e){let{defaultValue:a=!1,initializeWithValue:r=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e=>window.matchMedia(e).matches,[n,l]=(0,s.useState)(()=>r?t(e):a);function o(){l(t(e))}return P(()=>{let a=window.matchMedia(e);return o(),a.addListener?a.addListener(o):a.addEventListener("change",o),()=>{a.removeListener?a.removeListener(o):a.removeEventListener("change",o)}},[e]),n})("(min-width: ".concat(e.value,"px)")));for(let a=e.length-1;a>=0;a--)if(e[a])return I[a].id;return I[0].id},L=e=>{let a=k();if("object"==typeof e){let r=I.findIndex(e=>e.id===a);for(let a=r;a>=0;a--)if(e[I[a].id])return e[I[a].id];for(let a=0;a<I.length;a++)if(e[I[a].id])return e[I[a].id]}return e},T=(0,s.forwardRef)((e,a)=>{let{children:r,variant:s="body",weight:t="regular",color:n="primary",style:l,className:o,...c}=e,u=L(s),m=L(t),d=L(n);return(0,C.jsx)("p",{ref:a,className:(0,i.Z)("canon-Text",u&&"canon-Text--variant-".concat(u),m&&"canon-Text--weight-".concat(m),d&&"canon-Text--color-".concat(d),o),style:l,...c,children:r})});T.displayName="Text";let E=(0,s.forwardRef)((e,a)=>{let{children:r,variant:s="title1",as:t="h1",className:n,...l}=e,o=L(s),c=t;return"title2"===s&&(c="h2"),"title3"===s&&(c="h3"),"title4"===s&&(c="h4"),"title5"===s&&(c="h5"),t&&(c=t),(0,C.jsx)(c,{ref:a,className:(0,i.Z)("canon-Heading",o&&"canon-Heading--variant-".concat(o),n),...l,children:r})});E.displayName="Heading";let M=e=>{let{name:a,size:r,className:s,style:t,...n}=e,{icons:l}=o(),c=l[a];return c?(0,C.jsx)(c,{className:(0,i.Z)("canon-Icon",s),style:{...r?{width:r,height:r}:{},...t},...n}):(console.error('Icon "'.concat(a,'" not found or is not a valid component.')),null)},z=(0,s.forwardRef)((e,a)=>{let{size:r="medium",variant:s="primary",disabled:t,iconStart:n,iconEnd:l,children:o,className:c,style:u,...m}=e,d=L(r),p=L(s);return(0,C.jsxs)("button",{ref:a,disabled:t,className:(0,i.Z)("canon-Button","canon-Button--size-".concat(d),"canon-Button--variant-".concat(p),c),style:u,...m,children:[n&&(0,C.jsx)(M,{name:n,className:"canon-Button--icon"}),o,l&&(0,C.jsx)(M,{name:l,className:"canon-Button--icon"})]})}),S=(0,s.forwardRef)((e,a)=>{let{size:r="medium",variant:s="primary",icon:t,className:n,style:l,...o}=e,c=L(r),u=L(s);return(0,C.jsx)("button",{ref:a,className:(0,i.Z)("canon-IconButton","canon-IconButton--size-".concat(c),"canon-IconButton--variant-".concat(u),n),style:l,...o,children:(0,C.jsx)(M,{name:t,className:"canon-IconButton--icon"})})});var B=r(6686);let G=s.forwardRef((e,a)=>{let{label:r,checked:s,onChange:t,disabled:n,required:l,className:o,name:c,value:u,style:m}=e,d=(0,C.jsx)(B.X.f,{ref:a,className:(0,i.Z)("canon-CheckboxRoot",o),checked:s,onCheckedChange:t,disabled:n,required:l,name:c,value:u,style:m,children:(0,C.jsx)(B.X.z,{className:"canon-CheckboxIndicator",children:(0,C.jsx)(M,{name:"check",size:12})})});return r?(0,C.jsxs)("label",{className:"canon-CheckboxLabel",children:[d,r]}):d});s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("div",{className:"table",children:(0,C.jsx)("table",{ref:a,className:r,...s})})}).displayName="Table",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("thead",{ref:a,className:["table-header",r].join(" "),...s})}).displayName="TableHeader",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("tbody",{ref:a,className:["table-body",r].join(" "),...s})}).displayName="TableBody",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("tfoot",{ref:a,className:["table-footer",r].join(" "),...s})}).displayName="TableFooter",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("tr",{ref:a,className:["table-row",r].join(" "),...s,children:s.children})}).displayName="TableRow",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("th",{ref:a,className:["table-head",r].join(" "),...s})}).displayName="TableHead",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("td",{ref:a,className:["table-cell",r].join(" "),...s})}).displayName="TableCell",s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)("caption",{ref:a,className:["table-caption",r].join(" "),...s})}).displayName="TableCaption";var H=r(2211);let _=(0,s.forwardRef)((e,a)=>{let{size:r="md",className:s,...t}=e;return(0,C.jsx)(H.I,{ref:a,className:(0,i.Z)("canon-Input","sm"===r?"canon-Input--size-sm":"canon-Input--size-md",s),...t})});_.displayName=H.I.displayName;var A=r(5243);let F=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(A.g.fC,{ref:a,className:(0,i.Z)("canon-FieldRoot",r),...s})});F.displayName=A.g.fC.displayName;let V=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(A.g.__,{ref:a,className:(0,i.Z)("canon-FieldLabel",r),...s})});V.displayName=A.g.__.displayName;let O=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(A.g.dk,{ref:a,className:(0,i.Z)("canon-FieldDescription",r),...s})});O.displayName=A.g.dk.displayName;let X=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(A.g.jj,{ref:a,className:(0,i.Z)("canon-FieldError",r),...s})});X.displayName=A.g.jj.displayName;let W={Root:F,Label:V,Description:O,Error:X,Validity:e=>{let{children:a,className:r,...s}=e;return(0,C.jsx)(A.g.a8,{...s,children:e=>(0,C.jsx)("div",{className:(0,i.Z)("canon-FieldValidity",r),children:a(e)})})}};var K=r(9929);s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(K.u.xz,{ref:a,className:(0,i.Z)("canon-TooltipTrigger",r),...s})}).displayName=K.u.xz.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(K.u.sX,{ref:a,className:(0,i.Z)("canon-TooltipPositioner",r),...s})}).displayName=K.u.sX.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(K.u.GI,{ref:a,className:(0,i.Z)("canon-TooltipPopup",r),...s})}).displayName=K.u.GI.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(K.u.Eh,{ref:a,className:(0,i.Z)("canon-TooltipArrow",r),...s,children:(0,C.jsxs)("svg",{width:"20",height:"10",viewBox:"0 0 20 10",fill:"none",children:[(0,C.jsx)("path",{d:"M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z",className:"canon-TooltipArrow-fill"}),(0,C.jsx)("path",{d:"M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z",className:"canon-TooltipArrow-outer-stroke"}),(0,C.jsx)("path",{d:"M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z",className:"canon-TooltipArrow-inner-stroke"})]})})}).displayName=K.u.Eh.displayName,K.u.zt,K.u.fC,K.u.h_;var D=r(6140);s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.xz,{ref:a,className:(0,i.Z)("canon-MenuTrigger",r),...s})}).displayName=D.v.xz.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.YM,{ref:a,className:(0,i.Z)("canon-MenuBackdrop",r),...s})}).displayName=D.v.YM.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.sX,{ref:a,className:(0,i.Z)("canon-MenuPositioner",r),...s})}).displayName=D.v.sX.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.GI,{ref:a,className:(0,i.Z)("canon-MenuPopup",r),...s})}).displayName=D.v.GI.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.Eh,{ref:a,className:(0,i.Z)("canon-MenuArrow",r),...s})}).displayName=D.v.Eh.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.ck,{ref:a,className:(0,i.Z)("canon-MenuItem",r),...s})}).displayName=D.v.ck.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.ZA,{ref:a,className:(0,i.Z)("canon-MenuGroup",r),...s})}).displayName=D.v.ZA.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.iG,{ref:a,className:(0,i.Z)("canon-MenuGroupLabel",r),...s})}).displayName=D.v.iG.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.Ee,{ref:a,className:(0,i.Z)("canon-MenuRadioGroup",r),...s})}).displayName=D.v.Ee.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.Rk,{ref:a,className:(0,i.Z)("canon-MenuRadioItem",r),...s})}).displayName=D.v.Rk.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.V8,{ref:a,className:(0,i.Z)("canon-MenuRadioItemIndicator",r),...s})}).displayName=D.v.V8.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.oC,{ref:a,className:(0,i.Z)("canon-MenuCheckboxItem",r),...s})}).displayName=D.v.oC.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.dx,{ref:a,className:(0,i.Z)("canon-MenuCheckboxItemIndicator",r),...s})}).displayName=D.v.dx.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.Kp,{ref:a,className:(0,i.Z)("canon-MenuSubmenuTrigger",r),...s})}).displayName=D.v.Kp.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(D.v.Z0,{ref:a,className:(0,i.Z)("canon-MenuSeparator",r),...s})}).displayName=D.v.Z0.displayName,D.v.fC,D.v.h_;var J=r(4798);s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(J.xr.fC,{ref:a,className:(0,i.Z)("canon-ScrollAreaRoot",r),...s})}).displayName=J.xr.fC.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(J.xr.l_,{ref:a,className:(0,i.Z)("canon-ScrollAreaViewport",r),...s})}).displayName=J.xr.l_.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(J.xr.LW,{ref:a,className:(0,i.Z)("canon-ScrollAreaScrollbar",r),...s})}).displayName=J.xr.LW.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,C.jsx)(J.xr.bU,{ref:a,className:(0,i.Z)("canon-ScrollAreaThumb",r),...s})}).displayName=J.xr.bU.displayName}}]);