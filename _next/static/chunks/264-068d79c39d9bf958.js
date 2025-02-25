"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{6686:function(e,t,n){n.d(t,{X:function(){return u}});var r,u={};n.r(u),n.d(u,{z:function(){return R},f:function(){return w}});var l=n(2265);let i=l.createContext(void 0);function a(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=l.useContext(i);if(void 0===t&&!e)throw Error("Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.");return t}var o=n(9218),d=n(7488);let c=((r={}).checked="data-checked",r.unchecked="data-unchecked",r.disabled="data-disabled",r.readonly="data-readonly",r.required="data-required",r.valid="data-valid",r.invalid="data-invalid",r.touched="data-touched",r.dirty="data-dirty",r.filled="data-filled",r.focused="data-focused",r);function s(e){return l.useMemo(()=>({checked:t=>e.indeterminate?{}:t?{[c.checked]:""}:{[c.unchecked]:""}}),[e.indeterminate])}var f=n(2529),v=n(9953),p=n(7105),h=n(628),m=n(7630),g=n(36),y=n(3804),b=n(3663),C=n(1361);let k=l.createContext(void 0);var x=n(7437);let w=l.forwardRef(function(e,t){let{name:n,onCheckedChange:r,defaultChecked:u,parent:i=!1,readOnly:c=!1,indeterminate:w=!1,required:M=!1,disabled:P=!1,checked:T,render:j,className:R,inputRef:S,value:E,...I}=e,A=a(),F=null==A?void 0:A.parent,V=F&&A.allValues,G={};V&&(i?G=A.parent.getParentProps():n&&(G=A.parent.getChildProps(n)));let{checked:N=T,indeterminate:L=w,onCheckedChange:B=r,...D}=G,{state:U,disabled:$}=(0,o.T)(),_=$||(null==A?void 0:A.disabled)||P,{checked:O,getInputProps:Y,getButtonProps:q}=function(e){let{id:t,checked:n,inputRef:r,onCheckedChange:u,name:i,value:d,defaultChecked:c=!1,readOnly:s=!1,required:k=!1,autoFocus:x=!1,indeterminate:w=!1,disabled:M=!1}=e,P=a(),T=null==P?void 0:P.value,j=null==P?void 0:P.setValue,R=null==P?void 0:P.defaultValue,[S,E]=(0,f.u)({controlled:i&&T?T.includes(i):n,default:i&&R?R.includes(i):c,name:"Checkbox",state:"checked"}),{labelId:I,setControlId:A,setTouched:F,setDirty:V,validityData:G,setFilled:N,setFocused:L,validationMode:B}=(0,o.T)(),D=l.useRef(null),{getValidationProps:U,getInputValidationProps:$,inputRef:_,commitValidation:O}=(0,b.A)(),Y=(0,g.$)(u),q=(0,m.L)(t);(0,y.P)(()=>(A(q),()=>{A(void 0)}),[q,A]),(0,C.U)({id:q,commitValidation:O,value:S,controlRef:D});let H=l.useRef(null),W=(0,p.c)(r,H,_);(0,y.P)(()=>{H.current&&(H.current.indeterminate=w,S&&N(!0))},[S,w,N]);let z=l.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(U(e),{id:q,ref:D,type:"button",role:"checkbox",disabled:M,"aria-checked":w?"mixed":S,"aria-readonly":s||void 0,"aria-labelledby":I,onFocus(){L(!0)},onBlur(){let e=H.current;e&&(F(!0),L(!1),"onBlur"===B&&O(P?T:e.checked))},onClick(e){var t;e.defaultPrevented||s||(e.preventDefault(),null===(t=H.current)||void 0===t||t.click())}})},[U,q,M,w,S,s,I,L,F,B,O,P,T]),K=l.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)($(e),{checked:S,disabled:M,name:i,...void 0!==d?{value:d}:{},required:k,autoFocus:x,ref:W,style:v.j,tabIndex:-1,type:"checkbox","aria-hidden":!0,onChange(e){if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;if(V(t!==G.initialValue),E(t),null==Y||Y(t,e.nativeEvent),P||(N(t),"onChange"===B&&O(t)),i&&T&&j){let n=t?[...T,i]:T.filter(e=>e!==i);j(n,e.nativeEvent),N(n.length>0),"onChange"===B&&O(n)}}})},[$,S,M,i,d,k,x,W,P,V,G.initialValue,E,Y,B,T,j,O,N]);return l.useMemo(()=>({checked:S,getButtonProps:z,getInputProps:K}),[S,z,K])}({...e,disabled:_,inputRef:S,checked:N,indeterminate:L,onCheckedChange:B}),H=V?!!N:O,W=V?L:w;l.useEffect(()=>{F&&n&&F.disabledStatesRef.current.set(n,_)},[F,_,n]);let z=l.useMemo(()=>({...U,checked:H,disabled:_,readOnly:c,required:M,indeterminate:W}),[U,H,_,c,M,W]),K=s(z),{renderElement:X}=(0,d.F)({propGetter:q,render:null!=j?j:"button",ref:t,state:z,className:R,customStyleHookMapping:K,extraProps:{...I,...D}});return(0,x.jsxs)(k.Provider,{value:z,children:[X(),!O&&e.name&&(0,x.jsx)("input",{type:"hidden",name:e.name,value:"off"}),(0,x.jsx)("input",{...Y()})]})});var M=n(2919),P=n(6214),T=n(6669),j=n(7481);let R=l.forwardRef(function(e,t){let{render:n,className:r,keepMounted:u=!1,...i}=e,a=function(){let e=l.useContext(k);if(void 0===e)throw Error("Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>.");return e}(),o=a.checked||a.indeterminate,{transitionStatus:c,setMounted:f}=(0,P.h)(o),v=l.useRef(null),h=(0,p.c)(t,v),m=l.useMemo(()=>({...a,transitionStatus:c}),[a,c]);(0,M.s)({open:o,ref:v,onComplete(){o||f(!1)}});let g=s(a),y=l.useMemo(()=>({...g,...T.l,...j.Y}),[g]),{renderElement:b}=(0,d.F)({render:null!=n?n:"span",ref:h,state:m,className:r,customStyleHookMapping:y,extraProps:i});return u||o?b():null})},3663:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(2265),u=n(36),l=n(9218),i=n(628),a=n(7481),o=n(6314),d=n(2335);let c=Object.keys(a.W);function s(){let{setValidityData:e,validate:t,messageIds:n,validityData:a,validationMode:s,validationDebounceTime:f,invalid:v,markedDirtyRef:p,controlId:h,state:m}=(0,l.T)(),{formRef:g}=(0,o.G)(),y=r.useRef(-1),b=r.useRef(null);r.useEffect(()=>()=>{window.clearTimeout(y.current)},[]);let C=(0,u.$)(async n=>{let r=b.current;if(!r)return;window.clearTimeout(y.current);let u=t(n),l=null;l="object"==typeof u&&null!==u&&"then"in u?await u:u;let i="";null!==l&&(i=Array.isArray(l)?l.join("\n"):l),r.setCustomValidity(i);let o=c.reduce((e,t)=>(e[t]=r.validity[t],r.validity.customError||p.current||(e[t]="valid"===t),e),{}),s=[];Array.isArray(l)?s=l:l?s=[l]:r.validationMessage&&(s=[r.validationMessage]);let f={value:n,state:o,error:Array.isArray(l)?l[0]:null!=l?l:r.validationMessage,errors:s,initialValue:a.initialValue};if(h){let e=g.current.fields.get(h);e&&g.current.fields.set(h,{...e,...(0,d.c)(f,v)})}e(f)}),k=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.p)(e,{...n.length&&{"aria-describedby":n.join(" ")},...!1===m.valid&&{"aria-invalid":!0}})},[n,m.valid]),x=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.p)(k(e),{onChange(e){if(e.nativeEvent.defaultPrevented||v||"onChange"!==s)return;let t=e.currentTarget;if(""===t.value){C(t.value);return}window.clearTimeout(y.current),f?y.current=window.setTimeout(()=>{C(t.value)},f):C(t.value)}})},[k,v,s,f,C]);return r.useMemo(()=>({getValidationProps:k,getInputValidationProps:x,inputRef:b,commitValidation:C}),[k,x,C])}},5243:function(e,t,n){n.d(t,{g:function(){return r}});var r={};n.r(r),n.d(r,{oT:function(){return x},dk:function(){return y},jj:function(){return g},__:function(){return m},fC:function(){return f},a8:function(){return M}});var u=n(2265),l=n(7488),i=n(9218),a=n(7481);let o=u.createContext({legendId:void 0,setLegendId:()=>{},disabled:void 0});var d=n(36),c=n(6314),s=n(7437);let f=u.forwardRef(function(e,t){let{render:n,className:r,validate:f,validationDebounceTime:v=0,validationMode:p="onBlur",name:h,disabled:m=!1,invalid:g,...y}=e,{disabled:b}=u.useContext(o),{errors:C}=(0,c.G)(),k=(0,d.$)(f||(()=>null)),x=b||m,[w,M]=u.useState(void 0),[P,T]=u.useState(void 0),[j,R]=u.useState([]),[S,E]=u.useState(!1),[I,A]=u.useState(!1),[F,V]=u.useState(!1),[G,N]=u.useState(!1),L=u.useRef(!1),B=u.useCallback(e=>{e&&(L.current=!0),A(e)},[]),D=!!(g||h&&({}).hasOwnProperty.call(C,h)),[U,$]=u.useState({state:a.W,error:"",errors:[],value:null,initialValue:null}),_=!D&&U.state.valid,O=u.useMemo(()=>({disabled:x,touched:S,dirty:I,valid:_,filled:F,focused:G}),[x,S,I,_,F,G]),Y=u.useMemo(()=>({invalid:D,controlId:w,setControlId:M,labelId:P,setLabelId:T,messageIds:j,setMessageIds:R,name:h,validityData:U,setValidityData:$,disabled:x,touched:S,setTouched:E,dirty:I,setDirty:B,filled:F,setFilled:V,focused:G,setFocused:N,validate:k,validationMode:p,validationDebounceTime:v,state:O,markedDirtyRef:L}),[D,w,P,j,h,U,x,S,I,B,F,V,G,N,k,p,v,O]),{renderElement:q}=(0,l.F)({render:null!=n?n:"div",ref:t,className:r,state:O,extraProps:y,customStyleHookMapping:a.Y});return(0,s.jsx)(i.q.Provider,{value:Y,children:q()})});var v=n(628),p=n(7630),h=n(3804);let m=u.forwardRef(function(e,t){let{render:n,className:r,id:o,...d}=e,{setLabelId:c,state:s}=(0,i.T)(!1),f=(0,p.L)(o);(0,h.P)(()=>(c(f),()=>{c(void 0)}),[f,c]);let{getLabelProps:m}=function(){let{controlId:e,labelId:t}=(0,i.T)(),n=u.useCallback(function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(n,{id:t,htmlFor:e,onMouseDown(e){var t;let n=window.getSelection();!n||(null===(t=n.anchorNode)||void 0===t?void 0:t.contains(e.currentTarget))||n.empty(),e.preventDefault()}})},[e,t]);return u.useMemo(()=>({getLabelProps:n}),[n])}(),{renderElement:g}=(0,l.F)({propGetter:m,render:null!=n?n:"label",ref:t,className:r,state:s,extraProps:d,customStyleHookMapping:a.Y});return g()}),g=u.forwardRef(function(e,t){let{render:n,id:r,className:o,match:d,forceShow:s,...f}=e,{validityData:m,state:g,name:y}=(0,i.T)(!1),{errors:b}=(0,c.G)(),C=y?b[y]:null,k=!1;C||s?k=!0:d?k=!!m.state[d]:null==s&&(k=!1===m.state.valid);let{getErrorProps:x}=function(e){let{id:t,rendered:n,formError:r}=e,{setMessageIds:l,validityData:a}=(0,i.T)(),o=(0,p.L)(t);(0,h.P)(()=>{if(n&&o)return l(e=>e.concat(o)),()=>{l(e=>e.filter(e=>e!==o))}},[n,o,l]);let d=u.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(e,{id:o,children:r||(a.errors.length>1?u.createElement("ul",{},a.errors.map(e=>u.createElement("li",{key:e},e))):a.error)})},[o,r,a]);return u.useMemo(()=>({getErrorProps:d}),[d])}({id:r,rendered:k,formError:C}),{renderElement:w}=(0,l.F)({propGetter:x,render:null!=n?n:"div",ref:t,className:o,state:g,extraProps:f,customStyleHookMapping:a.Y});return k?w():null}),y=u.forwardRef(function(e,t){let{render:n,id:r,className:o,...d}=e,{state:c}=(0,i.T)(!1),{getDescriptionProps:s}=function(e){let{id:t}=e,{setMessageIds:n}=(0,i.T)(),r=(0,p.L)(t);(0,h.P)(()=>{if(r)return n(e=>e.concat(r)),()=>{n(e=>e.filter(e=>e!==r))}},[r,n]);let l=u.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(e,{id:r})},[r]);return u.useMemo(()=>({getDescriptionProps:l}),[l])}({id:r}),{renderElement:f}=(0,l.F)({propGetter:s,render:null!=n?n:"p",ref:t,className:o,state:c,extraProps:d,customStyleHookMapping:a.Y});return f()});var b=n(3663),C=n(1361),k=n(2529);let x=u.forwardRef(function(e,t){let{render:n,className:r,id:o,name:s,value:f,disabled:m=!1,onValueChange:g,defaultValue:y,...x}=e,{state:w,name:M,disabled:P}=(0,i.T)(),T=P||m,j=u.useMemo(()=>({...w,disabled:T}),[w,T]),{getControlProps:R}=function(e){let{id:t,name:n,value:r,defaultValue:l,onValueChange:a,disabled:o}=e,{setControlId:s,labelId:f,setTouched:m,setDirty:g,validityData:y,setFocused:x,setFilled:w,validationMode:M}=(0,i.T)(),{errors:P,onClearErrors:T}=(0,c.G)(),{getValidationProps:j,getInputValidationProps:R,commitValidation:S,inputRef:E}=(0,b.A)(),I=(0,p.L)(t);(0,h.P)(()=>(s(I),()=>{s(void 0)}),[I,s]),(0,h.P)(()=>{var e;(null===(e=E.current)||void 0===e?void 0:e.value)&&w(!0)},[E,w]);let[A,F]=(0,k.u)({controlled:r,default:l,name:"FieldControl",state:"value"}),V=(0,d.$)((e,t)=>{F(e),null==a||a(e,t)});(0,C.U)({id:I,commitValidation:S,value:A,getValue:()=>{var e;return null===(e=E.current)||void 0===e?void 0:e.value},controlRef:E});let G=u.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.p)(j(R(e)),{id:I,disabled:o,name:n,ref:E,"aria-labelledby":f,value:A,onChange(e){if(null!=A&&V(e.currentTarget.value,e.nativeEvent),g(e.currentTarget.value!==y.initialValue),w(""!==e.currentTarget.value),n&&({}).hasOwnProperty.call(P,n)){let e={...P};delete e[n],T(e)}},onFocus(){x(!0)},onBlur(e){m(!0),x(!1),"onBlur"===M&&S(e.currentTarget.value)},onKeyDown(e){"INPUT"===e.currentTarget.tagName&&"Enter"===e.key&&(m(!0),S(e.currentTarget.value))}})},[j,R,I,o,n,E,f,A,g,y.initialValue,w,P,V,T,x,m,M,S]);return u.useMemo(()=>({getControlProps:G}),[G])}({id:o,name:null!=M?M:s,disabled:T,value:f,defaultValue:y,onValueChange:g}),{renderElement:S}=(0,l.F)({propGetter:R,render:null!=n?n:"input",ref:t,className:r,state:j,extraProps:x,customStyleHookMapping:a.Y});return S()});var w=n(2335);let M=function(e){let{children:t}=e,{validityData:n,invalid:r}=(0,i.T)(!1),l=u.useMemo(()=>{let e=(0,w.c)(n,r);return{...e,validity:e.state}},[n,r]);return(0,s.jsx)(u.Fragment,{children:t(l)})}},9218:function(e,t,n){n.d(t,{T:function(){return a},q:function(){return i}});var r=n(2265),u=n(7481);let l=()=>{},i=r.createContext({invalid:void 0,controlId:void 0,setControlId:l,labelId:void 0,setLabelId:l,messageIds:[],setMessageIds:l,name:void 0,validityData:{state:u.W,errors:[],error:"",value:"",initialValue:null},setValidityData:l,disabled:void 0,touched:!1,setTouched:l,dirty:!1,setDirty:l,filled:!1,setFilled:l,focused:!1,setFocused:l,validate:()=>null,validationMode:"onBlur",validationDebounceTime:0,state:{disabled:!1,valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},markedDirtyRef:{current:!1}});function a(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=r.useContext(i);if(t.setControlId===l&&!e)throw Error("Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");return t}},1361:function(e,t,n){n.d(t,{U:function(){return d}});var r=n(4887),u=n(3804),l=n(2335),i=n(6314),a=n(9218),o=n(3576);function d(e){let{formRef:t}=(0,i.G)(),{invalid:n,markedDirtyRef:d,validityData:c,setValidityData:s}=(0,a.T)(),{value:f,id:v,controlRef:p,commitValidation:h}=e,m=(0,o.I)(e.getValue);(0,u.P)(()=>{let e=f;void 0===e&&(e=m.current?.()),null===c.initialValue&&e!==c.initialValue&&s(t=>({...t,initialValue:e}))},[s,f,c.initialValue,m]),(0,u.P)(()=>{v&&t.current.fields.set(v,{controlRef:p,validityData:(0,l.c)(c,n),validate(){let e=f;void 0===e&&(e=m.current?.()),d.current=!0,r.flushSync(()=>h(e))}})},[h,p,t,m,v,n,d,c,f])}},7481:function(e,t,n){var r;n.d(t,{W:function(){return l},Y:function(){return i}});let u=((r={}).disabled="data-disabled",r.valid="data-valid",r.invalid="data-invalid",r.touched="data-touched",r.dirty="data-dirty",r.filled="data-filled",r.focused="data-focused",r),l={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},i={valid:e=>null===e?null:e?{[u.valid]:""}:{[u.invalid]:""}}},2335:function(e,t,n){n.d(t,{c:function(){return r}});function r(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}},6314:function(e,t,n){n.d(t,{G:function(){return l}});var r=n(2265);let u=r.createContext({formRef:{current:{fields:new Map}},errors:{},onClearErrors:()=>{}});function l(){return r.useContext(u)}},2211:function(e,t,n){n.d(t,{I:function(){return i}});var r=n(2265),u=n(5243),l=n(7437);let i=r.forwardRef(function(e,t){let{render:n,className:r,...i}=e;return(0,l.jsx)(u.g.oT,{ref:t,render:n,className:r,...i})})},628:function(e,t,n){function r(e,...t){let n=t[0];for(let e=1;e<t.length;e+=1)n=u(n,t[e]);return u(e,n)}function u(e,t){return e?Object.entries(e).reduce((e,[n,r])=>("o"===n[0]&&"n"===n[1]&&n.charCodeAt(2)>=65&&90>=n.charCodeAt(2)&&"function"==typeof r?e[n]=e=>{let u=!1,l=t[n];e.preventBaseUIHandler=()=>{u=!0};let i=r(e);return u||l?.(e),i}:"style"===n?(r||t.style)&&(e[n]={...t.style,...r||{}}):"className"===n?r?t.className?e[n]=r+" "+t.className:e[n]=r:e[n]=t.className:e[n]=r,e),{...t}):t}n.d(t,{p:function(){return r}})},6669:function(e,t,n){n.d(t,{l:function(){return l}});let r={"data-starting-style":""},u={"data-ending-style":""},l={transitionStatus:e=>"starting"===e?r:"ending"===e?u:null}},3907:function(e,t,n){n.d(t,{P:function(){return i}});var r=n(2265),u=n(4887),l=n(36);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r.useRef(-1),i=r.useRef(-1),a=(0,l.$)(()=>{cancelAnimationFrame(n.current),clearTimeout(i.current)});return r.useEffect(()=>a,[a]),(0,l.$)(r=>{a();let l=e.current;l&&("function"!=typeof l.getAnimations||globalThis.BASE_UI_ANIMATIONS_DISABLED?r():n.current=requestAnimationFrame(()=>{function e(){l&&Promise.allSettled(l.getAnimations().map(e=>e.finished)).then(()=>{u.flushSync(r)})}t?i.current=window.setTimeout(e):e()}))})}},7630:function(e,t,n){n.d(t,{L:function(){return u}});var r=n(695);function u(e){return(0,r.M)(e,"base-ui")}},7488:function(e,t,n){n.d(t,{F:function(){return d}});var r=n(2265),u=n(628),l=n(7105);let i=parseInt(r.version,10);var a=n(7437);let o={button:e=>(0,a.jsx)("button",{type:"button",...e}),div:e=>(0,a.jsx)("div",{...e}),h2:e=>(0,a.jsx)("h2",{...e}),h3:e=>(0,a.jsx)("h3",{...e}),output:e=>(0,a.jsx)("output",{...e}),p:e=>(0,a.jsx)("p",{...e}),span:e=>(0,a.jsx)("span",{...e}),a:e=>(0,a.jsx)("a",{...e}),label:e=>(0,a.jsx)("label",{...e}),input:e=>(0,a.jsx)("input",{...e}),fieldset:e=>(0,a.jsx)("fieldset",{...e}),form:e=>(0,a.jsx)("form",{...e}),img:e=>(0,a.jsx)("img",{alt:"",...e})};function d(e){let t;let{render:n,className:a,state:d,ref:c,propGetter:s=e=>e,extraProps:f,customStyleHookMapping:v}=e,p="function"==typeof a?a(d):a,h={...r.useMemo(()=>{let e;return e={},Object.entries(d).forEach(([t,n])=>{if(v?.hasOwnProperty(t)){let r=v[t](n);null!=r&&(e={...e,...r});return}!0===n?e[`data-${t.toLowerCase()}`]="":n&&(e[`data-${t.toLowerCase()}`]=n.toString())}),e},[d,v]),...f};t="string"==typeof n?o[n]:n;let m=s(h),g={...m,ref:function(e,...t){let n;return n="function"!=typeof e?i>=19?e.props.ref:e.ref:null,(0,l.c)(n,...t)}(t,c,m.ref)};return void 0!==p&&(g.className=p),{renderElement:()=>"function"==typeof t?t(g,d):r.cloneElement(t,{...(0,u.p)(t.props,g),ref:g.ref})}}},2529:function(e,t,n){n.d(t,{u:function(){return u}});var r=n(2265);function u(e){let{controlled:t,default:n,name:u,state:l="value"}=e,{current:i}=r.useRef(void 0!==t),[a,o]=r.useState(n),d=r.useCallback(e=>{i||o(e)},[]);return[i?t:a,d]}},3804:function(e,t,n){n.d(t,{P:function(){return u}});var r=n(2265);let u="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},36:function(e,t,n){n.d(t,{$:function(){return l}});var r=n(2265),u=n(3804);function l(e){let t=r.useRef(e);return(0,u.P)(()=>{t.current=e}),r.useCallback(function(){for(var e,n=arguments.length,r=Array(n),u=0;u<n;u++)r[u]=arguments[u];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)},[])}},7105:function(e,t,n){n.d(t,{c:function(){return u}});var r=n(2265);function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{"function"==typeof t?t(e):t&&(t.current=e)})},t)}},695:function(e,t,n){n.d(t,{M:function(){return a}});var r,u=n(2265);let l=0,i={...r||(r=n.t(u,2))}.useId;function a(e,t){if(void 0!==i){let n=i();return null!=e?e:t?"".concat(t,"-").concat(n):n}return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mui",[n,r]=u.useState(e),i=e||n;return u.useEffect(()=>{null==n&&(l+=1,r("".concat(t,"-").concat(l)))},[n,t]),i}(e,t)}},3576:function(e,t,n){n.d(t,{I:function(){return l}});var r=n(2265),u=n(3804);function l(e){let t=r.useRef(e);return(0,u.P)(()=>{t.current=e}),t}},2919:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(3907),u=n(3804),l=n(36),i=n(3576);function a(e){let{open:t,ref:n,onComplete:a}=e,o=(0,i.I)(t),d=(0,l.$)(a),c=(0,r.P)(n,t);(0,u.P)(()=>{c(()=>{t===o.current&&d()})},[t,d,c,o])}},6214:function(e,t,n){n.d(t,{h:function(){return l}});var r=n(2265),u=n(3804);function l(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],[n,l]=r.useState(),[i,a]=r.useState(e);return!e||i||(a(!0),"starting"===n||t||l("starting")),!e&&i&&"ending"!==n&&l("ending"),e||i||"ending"!==n||l(void 0),(0,u.P)(()=>{if(!e)return;t&&l("starting");let n=requestAnimationFrame(()=>{l(void 0)});return()=>{cancelAnimationFrame(n)}},[e,t]),r.useMemo(()=>({mounted:i,setMounted:a,transitionStatus:n}),[i,n])}},9953:function(e,t,n){n.d(t,{j:function(){return r}});let r={clip:"rect(0 0 0 0)",overflow:"hidden",whiteSpace:"nowrap",position:"fixed",top:0,left:0,border:0,padding:0,width:1,height:1,margin:-1}},6532:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="",u=arguments.length;n<u;n++)(e=arguments[n])&&(t=function e(t){var n,r,u="";if("string"==typeof t||"number"==typeof t)u+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(n=0;n<l;n++)t[n]&&(r=e(t[n]))&&(u&&(u+=" "),u+=r)}else for(r in t)t[r]&&(u&&(u+=" "),u+=r)}return u}(e))&&(r&&(r+=" "),r+=t);return r}}}]);