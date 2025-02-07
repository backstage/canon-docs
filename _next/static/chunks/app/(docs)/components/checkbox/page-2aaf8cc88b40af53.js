(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{4298:function(e,s,t){Promise.resolve().then(t.t.bind(t,5878,23)),Promise.resolve().then(t.bind(t,4206)),Promise.resolve().then(t.bind(t,9488)),Promise.resolve().then(t.bind(t,6667)),Promise.resolve().then(t.bind(t,7127)),Promise.resolve().then(t.t.bind(t,7700,23)),Promise.resolve().then(t.t.bind(t,9986,23)),Promise.resolve().then(t.bind(t,5276)),Promise.resolve().then(t.bind(t,3786)),Promise.resolve().then(t.bind(t,8810)),Promise.resolve().then(t.bind(t,1311))},9488:function(e,s,t){"use strict";t.d(s,{BaseUI:function(){return a}});var n=t(7437),r=t(5832),c=t(6361),o=t(7811),i=t.n(o);let a=e=>{let{href:s}=e;return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)("svg",{width:"17",height:"30",viewBox:"0 0 17 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i().icon,children:[(0,n.jsx)("path",{d:"M8 12.8V15V26C3.58172 26 0 22.0601 0 17.2V15V4C4.41828 4 8 7.93989 8 12.8Z"}),(0,n.jsx)("path",{d:"M9.5001 10.0154C9.2245 9.99843 9 10.2239 9 10.5V26.0001C13.4183 26.0001 17 22.4184 17 18.0001C17 13.7498 13.6854 10.2736 9.5001 10.0154Z"})]}),(0,n.jsxs)("div",{className:i().content,children:[(0,n.jsx)(r.x,{variant:"subtitle",weight:"bold",children:"Base UI"}),(0,n.jsx)("div",{className:i().description,children:(0,n.jsx)(r.x,{variant:"subtitle",children:"This component is using Base UI under the hood. While most of the original props are available, we have made some changes to the API to fit our needs."})}),s&&(0,n.jsxs)("a",{className:i().button,href:s,target:"_blank",children:["Discover more",(0,n.jsx)(c.J,{name:"externalLink"})]})]})]})}},5276:function(e,s,t){"use strict";t.d(s,{CheckboxAllVariants:function(){return a},CheckboxPreview:function(){return i},F:function(){return l}});var n=t(7437),r=t(2164),c=t(7940),o=t(5832);let i=()=>(0,n.jsx)(r.X,{label:"Accept terms and conditions"}),a=()=>(0,n.jsxs)(c.k,{align:"center",children:[(0,n.jsx)(r.X,{}),(0,n.jsx)(r.X,{checked:!0}),(0,n.jsx)(r.X,{label:"Checkbox"}),(0,n.jsx)(r.X,{label:"Checkbox",checked:!0})]}),l=()=>(0,n.jsxs)(c.k,{direction:"column",children:[(0,n.jsx)(o.x,{children:"All variants"}),(0,n.jsxs)(c.k,{align:"center",children:[(0,n.jsx)(r.X,{}),(0,n.jsx)(r.X,{checked:!0}),(0,n.jsx)(r.X,{label:"Checkbox"}),(0,n.jsx)(r.X,{label:"Checkbox",checked:!0})]})]})},2164:function(e,s,t){"use strict";t.d(s,{X:function(){return a}});var n=t(7437),r=t(2265),c=t(6686),o=t(6361),i=t(6532);let a=r.forwardRef((e,s)=>{let{label:t,checked:r,onChange:a,disabled:l,required:u,className:m,name:p,value:d,style:v}=e,h=(0,n.jsx)(c.X.f,{ref:s,className:(0,i.Z)("canon-CheckboxRoot",m),checked:r,onCheckedChange:a,disabled:l,required:u,name:p,value:d,style:v,children:(0,n.jsx)(c.X.z,{className:"canon-CheckboxIndicator",children:(0,n.jsx)(o.J,{name:"check",size:12})})});return t?(0,n.jsxs)("label",{className:"canon-CheckboxLabel",children:[h,t]}):h})},7940:function(e,s,t){"use strict";t.d(s,{k:function(){return a}});var n=t(2265),r=t(6532);let c={align:{type:"enum",className:"cu-align",values:["start","center","end","baseline","stretch"],responsive:!0},direction:{type:"enum",className:"cu-fd",values:["row","column","row-reverse","column-reverse"],responsive:!0},justify:{type:"enum",className:"cu-jc",values:["start","center","end","between"],responsive:!0}};var o=t(5915),i=t(4984);let a=(0,n.forwardRef)((e,s)=>{let t={...i.c,...c},{className:a,style:l}=(0,o.y)(e,t);return(0,n.createElement)("div",{ref:s,className:(0,r.Z)("canon-Flex",a),style:l,children:e.children})})},6361:function(e,s,t){"use strict";t.d(s,{J:function(){return o}});var n=t(7437);t(2265);var r=t(8719),c=t(6532);let o=e=>{let{name:s,size:t=16,className:o,style:i,...a}=e,{icons:l}=(0,r.z)(),u=l[s];return u?(0,n.jsx)(u,{className:(0,c.Z)("canon-Icon",o),style:{width:t,height:t,...i},...a}):(console.error('Icon "'.concat(s,'" not found or is not a valid component.')),(0,n.jsx)("svg",{}))}},8719:function(e,s,t){"use strict";t.d(s,{O:function(){return i},z:function(){return a}});var n=t(7437),r=t(2265),c=t(1975);let o=(0,r.createContext)({icons:c.c}),i=e=>{let{children:s,overrides:t}=e,r={...c.c,...t};return(0,n.jsx)(o.Provider,{value:{icons:r},children:s})},a=()=>(0,r.useContext)(o)},4984:function(e,s,t){"use strict";t.d(s,{c:function(){return n}});let n={gap:{type:"enum | string",className:"cu-gap",customProperties:["--gap"],values:t(5390).X,responsive:!0,default:"4"}}},5390:function(e,s,t){"use strict";t.d(s,{c:function(){return r},X:function(){return n}});let n=["0.5","1","1.5","2","3","4","5","6","7","8","9","10","11","12","13","14"],r={p:{type:"enum | string",className:"cu-p",customProperties:["--p"],values:n,responsive:!0},px:{type:"enum | string",className:"cu-px",customProperties:["--pl","--pr"],values:n,responsive:!0},py:{type:"enum | string",className:"cu-py",customProperties:["--pt","--pb"],values:n,responsive:!0},pt:{type:"enum | string",className:"cu-pt",customProperties:["--pt"],values:n,responsive:!0},pr:{type:"enum | string",className:"cu-pr",customProperties:["--pr"],values:n,responsive:!0},pb:{type:"enum | string",className:"cu-pb",customProperties:["--pb"],values:n,responsive:!0},pl:{type:"enum | string",className:"cu-pl",customProperties:["--pl"],values:n,responsive:!0},m:{type:"enum | string",values:n,className:"cu-m",customProperties:["--m"],responsive:!0},mx:{type:"enum | string",values:n,className:"cu-mx",customProperties:["--ml","--mr"],responsive:!0},my:{type:"enum | string",values:n,className:"cu-my",customProperties:["--mt","--mb"],responsive:!0},mt:{type:"enum | string",values:n,className:"cu-mt",customProperties:["--mt"],responsive:!0},mr:{type:"enum | string",values:n,className:"cu-mr",customProperties:["--mr"],responsive:!0},mb:{type:"enum | string",values:n,className:"cu-mb",customProperties:["--mb"],responsive:!0},ml:{type:"enum | string",values:n,className:"cu-ml",customProperties:["--ml"],responsive:!0}}},5915:function(e,s,t){"use strict";function n(e,s){let t=e.className||"",n=e.style||{};for(let r in s){if(!e.hasOwnProperty(r)&&!s[r].hasOwnProperty("default"))continue;let c=e.hasOwnProperty(r)?e[r]:s[r].default,o=s[r].values,i=s[r].customProperties,a=s[r].className,l=s[r].responsive,u=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";o.includes(e)?t+=" ".concat(s).concat(a,"-").concat(e):(n[l&&s?"".concat(i,"-").concat(s.slice(0,-1)):i]=e,t+=" ".concat(s).concat(a))};if(l&&"object"==typeof c)for(let e in c){let s="initial"===e?"":"".concat(e,":");u(c[e],s)}else u(c)}return{...Object.keys(e).reduce((t,n)=>(s.hasOwnProperty(n)||(t[n]=e[n]),t),{}),className:t,style:n}}t.d(s,{y:function(){return n}})},7811:function(e){e.exports={container:"styles_container__QRSI3",icon:"styles_icon__fXERG",content:"styles_content__j0Wt_",description:"styles_description__vnxpI",button:"styles_button__kV03v"}}},function(e){e.O(0,[312,738,211,975,333,174,686,109,478,117,744],function(){return e(e.s=4298)}),_N_E=e.O()}]);