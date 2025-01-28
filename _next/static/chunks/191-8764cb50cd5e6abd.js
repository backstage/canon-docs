"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{3663:function(e,t,r){r.d(t,{A:function(){return s}});var n=r(2265),l=r(36),a=r(9218),i=r(628),u=r(7481),o=r(6314),d=r(2335);let c=Object.keys(u.W);function s(){let{setValidityData:e,validate:t,messageIds:r,validityData:u,validationMode:s,validationDebounceTime:f,invalid:v,markedDirtyRef:p,controlId:g,state:m}=(0,a.T)(),{formRef:y}=(0,o.G)(),h=n.useRef(-1),b=n.useRef(null);n.useEffect(()=>()=>{window.clearTimeout(h.current)},[]);let w=(0,l.$)(async r=>{let n=b.current;if(!n)return;window.clearTimeout(h.current);let l=t(r),a=null;a="object"==typeof l&&null!==l&&"then"in l?await l:l;let i="";null!==a&&(i=Array.isArray(a)?a.join("\n"):a),n.setCustomValidity(i);let o=c.reduce((e,t)=>(e[t]=n.validity[t],n.validity.customError||p.current||(e[t]="valid"===t),e),{}),s=[];Array.isArray(a)?s=a:a?s=[a]:n.validationMessage&&(s=[n.validationMessage]);let f={value:r,state:o,error:Array.isArray(a)?a[0]:null!=a?a:n.validationMessage,errors:s,initialValue:u.initialValue};if(g){let e=y.current.fields.get(g);e&&y.current.fields.set(g,{...e,...(0,d.c)(f,v)})}e(f)}),T=n.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.p)(e,{...r.length&&{"aria-describedby":r.join(" ")},...!1===m.valid&&{"aria-invalid":!0}})},[r,m.valid]),C=n.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.p)(T(e),{onChange(e){if(e.nativeEvent.defaultPrevented||v||"onChange"!==s)return;let t=e.currentTarget;if(""===t.value){w(t.value);return}window.clearTimeout(h.current),f?h.current=window.setTimeout(()=>{w(t.value)},f):w(t.value)}})},[T,v,s,f,w]);return n.useMemo(()=>({getValidationProps:T,getInputValidationProps:C,inputRef:b,commitValidation:w}),[T,C,w])}},5243:function(e,t,r){r.d(t,{g:function(){return n}});var n={};r.r(n),r.d(n,{oT:function(){return C},dk:function(){return h},jj:function(){return y},__:function(){return m},fC:function(){return f},a8:function(){return k}});var l=r(2265),a=r(7488),i=r(9218),u=r(7481);let o=l.createContext({legendId:void 0,setLegendId:()=>{},disabled:void 0});var d=r(36),c=r(6314),s=r(7437);let f=l.forwardRef(function(e,t){let{render:r,className:n,validate:f,validationDebounceTime:v=0,validationMode:p="onBlur",name:g,disabled:m=!1,invalid:y,...h}=e,{disabled:b}=l.useContext(o),{errors:w}=(0,c.G)(),T=(0,d.$)(f||(()=>null)),C=b||m,[M,k]=l.useState(void 0),[P,x]=l.useState(void 0),[I,R]=l.useState([]),[A,S]=l.useState(!1),[V,E]=l.useState(!1),F=l.useRef(!1),G=l.useCallback(e=>{e&&(F.current=!0),E(e)},[]),j=!!(y||g&&({}).hasOwnProperty.call(w,g)),[D,L]=l.useState({state:u.W,error:"",errors:[],value:null,initialValue:null}),N=!j&&D.state.valid,_=l.useMemo(()=>({disabled:C,touched:A,dirty:V,valid:N}),[C,A,V,N]),H=l.useMemo(()=>({invalid:j,controlId:M,setControlId:k,labelId:P,setLabelId:x,messageIds:I,setMessageIds:R,name:g,validityData:D,setValidityData:L,disabled:C,touched:A,setTouched:S,dirty:V,setDirty:G,validate:T,validationMode:p,validationDebounceTime:v,state:_,markedDirtyRef:F}),[j,M,P,I,g,D,C,A,V,G,T,p,v,_]),{renderElement:U}=(0,a.F)({render:null!=r?r:"div",ref:t,className:n,state:_,extraProps:h,customStyleHookMapping:u.A});return(0,s.jsx)(i.q.Provider,{value:H,children:U()})});var v=r(628),p=r(7630),g=r(3804);let m=l.forwardRef(function(e,t){let{render:r,className:n,id:o,...d}=e,{setLabelId:c,state:s}=(0,i.T)(!1),f=(0,p.L)(o);(0,g.P)(()=>(c(f),()=>{c(void 0)}),[f,c]);let{getLabelProps:m}=function(){let{controlId:e,labelId:t}=(0,i.T)(),r=l.useCallback(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(r,{id:t,htmlFor:e,onMouseDown(e){var t;let r=window.getSelection();!r||(null===(t=r.anchorNode)||void 0===t?void 0:t.contains(e.currentTarget))||r.empty(),e.preventDefault()}})},[e,t]);return l.useMemo(()=>({getLabelProps:r}),[r])}(),{renderElement:y}=(0,a.F)({propGetter:m,render:null!=r?r:"label",ref:t,className:n,state:s,extraProps:d,customStyleHookMapping:u.A});return y()}),y=l.forwardRef(function(e,t){let{render:r,id:n,className:o,match:d,forceShow:s,...f}=e,{validityData:m,state:y,name:h}=(0,i.T)(!1),{errors:b}=(0,c.G)(),w=h?b[h]:null,T=!1;w||s?T=!0:d?T=!!m.state[d]:null==s&&(T=!1===m.state.valid);let{getErrorProps:C}=function(e){let{id:t,rendered:r,formError:n}=e,{setMessageIds:a,validityData:u}=(0,i.T)(),o=(0,p.L)(t);(0,g.P)(()=>{if(r&&o)return a(e=>e.concat(o)),()=>{a(e=>e.filter(e=>e!==o))}},[r,o,a]);let d=l.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(e,{id:o,children:n||(u.errors.length>1?l.createElement("ul",{},u.errors.map(e=>l.createElement("li",{key:e},e))):u.error)})},[o,n,u]);return l.useMemo(()=>({getErrorProps:d}),[d])}({id:n,rendered:T,formError:w}),{renderElement:M}=(0,a.F)({propGetter:C,render:null!=r?r:"div",ref:t,className:o,state:y,extraProps:f,customStyleHookMapping:u.A});return T?M():null}),h=l.forwardRef(function(e,t){let{render:r,id:n,className:o,...d}=e,{state:c}=(0,i.T)(!1),{getDescriptionProps:s}=function(e){let{id:t}=e,{setMessageIds:r}=(0,i.T)(),n=(0,p.L)(t);(0,g.P)(()=>{if(n)return r(e=>e.concat(n)),()=>{r(e=>e.filter(e=>e!==n))}},[n,r]);let a=l.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(e,{id:n})},[n]);return l.useMemo(()=>({getDescriptionProps:a}),[a])}({id:n}),{renderElement:f}=(0,a.F)({propGetter:s,render:null!=r?r:"p",ref:t,className:o,state:c,extraProps:d,customStyleHookMapping:u.A});return f()});var b=r(3663),w=r(1361),T=r(2529);let C=l.forwardRef(function(e,t){let{render:r,className:n,id:o,name:s,value:f,disabled:m=!1,onValueChange:y,defaultValue:h,...C}=e,{state:M,name:k,disabled:P}=(0,i.T)(),x=P||m,I=l.useMemo(()=>({...M,disabled:x}),[M,x]),{getControlProps:R}=function(e){let{id:t,name:r,value:n,defaultValue:a,onValueChange:u,disabled:o}=e,{setControlId:s,labelId:f,setTouched:m,setDirty:y,validityData:h}=(0,i.T)(),{errors:C,onClearErrors:M}=(0,c.G)(),{getValidationProps:k,getInputValidationProps:P,commitValidation:x,inputRef:I}=(0,b.A)(),R=(0,p.L)(t);(0,g.P)(()=>(s(R),()=>{s(void 0)}),[R,s]);let[A,S]=(0,T.u)({controlled:n,default:a,name:"FieldControl",state:"value"}),V=(0,d.$)((e,t)=>{S(e),null==u||u(e,t)});(0,w.U)({id:R,commitValidation:x,value:A,getValue:()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.value},controlRef:I});let E=l.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(k(P(e)),{id:R,disabled:o,name:r,ref:I,"aria-labelledby":f,value:A,onChange(e){if(null!=A&&V(e.currentTarget.value,e.nativeEvent),y(e.currentTarget.value!==h.initialValue),r&&({}).hasOwnProperty.call(C,r)){let e={...C};delete e[r],M(e)}},onBlur(e){m(!0),x(e.currentTarget.value)},onKeyDown(e){"INPUT"===e.currentTarget.tagName&&"Enter"===e.key&&(m(!0),x(e.currentTarget.value))}})},[k,P,R,o,r,I,f,A,V,y,h.initialValue,C,M,m,x]);return l.useMemo(()=>({getControlProps:E}),[E])}({id:o,name:null!=k?k:s,disabled:x,value:f,defaultValue:h,onValueChange:y}),{renderElement:A}=(0,a.F)({propGetter:R,render:null!=r?r:"input",ref:t,className:n,state:I,extraProps:C,customStyleHookMapping:u.A});return A()});var M=r(2335);let k=function(e){let{children:t}=e,{validityData:r,invalid:n}=(0,i.T)(!1),a=l.useMemo(()=>{let e=(0,M.c)(r,n);return{...e,validity:e.state}},[r,n]);return(0,s.jsx)(l.Fragment,{children:t(a)})}},9218:function(e,t,r){r.d(t,{T:function(){return u},q:function(){return i}});var n=r(2265),l=r(7481);let a=()=>{},i=n.createContext({invalid:void 0,controlId:void 0,setControlId:a,labelId:void 0,setLabelId:a,messageIds:[],setMessageIds:a,name:void 0,validityData:{state:l.W,errors:[],error:"",value:"",initialValue:null},setValidityData:a,disabled:void 0,touched:!1,setTouched:a,dirty:!1,setDirty:a,validate:()=>null,validationMode:"onBlur",validationDebounceTime:0,state:{disabled:!1,valid:null,touched:!1,dirty:!1},markedDirtyRef:{current:!1}});function u(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=n.useContext(i);if(t.setControlId===a&&!e)throw Error("Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");return t}},1361:function(e,t,r){r.d(t,{U:function(){return d}});var n=r(4887),l=r(3804),a=r(2335),i=r(6314),u=r(9218),o=r(3576);function d(e){let{formRef:t}=(0,i.G)(),{invalid:r,markedDirtyRef:d,validityData:c,setValidityData:s}=(0,u.T)(),{value:f,id:v,controlRef:p,commitValidation:g}=e,m=(0,o.I)(e.getValue);(0,l.P)(()=>{let e=f;void 0===e&&(e=m.current?.()),null===c.initialValue&&e!==c.initialValue&&s(t=>({...t,initialValue:e}))},[s,f,c.initialValue,m]),(0,l.P)(()=>{v&&t.current.fields.set(v,{controlRef:p,validityData:(0,a.c)(c,r),validate(){let e=f;void 0===e&&(e=m.current?.()),d.current=!0,n.flushSync(()=>g(e))}})},[g,p,t,m,v,r,d,c,f])}},7481:function(e,t,r){var n;r.d(t,{W:function(){return a},A:function(){return i}});let l=((n={}).disabled="data-disabled",n.valid="data-valid",n.invalid="data-invalid",n.touched="data-touched",n.dirty="data-dirty",n),a={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},i={valid:e=>null===e?null:e?{[l.valid]:""}:{[l.invalid]:""}}},2335:function(e,t,r){r.d(t,{c:function(){return n}});function n(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}},6314:function(e,t,r){r.d(t,{G:function(){return a}});var n=r(2265);let l=n.createContext({formRef:{current:{fields:new Map}},errors:{},onClearErrors:()=>{}});function a(){return n.useContext(l)}},2211:function(e,t,r){r.d(t,{I:function(){return i}});var n=r(2265),l=r(5243),a=r(7437);let i=n.forwardRef(function(e,t){let{render:r,className:n,...i}=e;return(0,a.jsx)(l.g.oT,{ref:t,render:r,className:n,...i})})},3576:function(e,t,r){r.d(t,{I:function(){return a}});var n=r(2265),l=r(3804);function a(e){let t=n.useRef(e);return(0,l.P)(()=>{t.current=e}),t}}}]);