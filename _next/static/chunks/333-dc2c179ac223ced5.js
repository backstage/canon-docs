(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{2056:function(e,t,n){"use strict";var r=n(8287);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},8060:function(e,t,n){e.exports=n(2056)()},8287:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},914:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(2265);let o=Object.is;var i=n(3804),u=n(1456),l=n(7437);function a(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0}function c(e){let{children:t,elementsRef:n,labelsRef:c,onMapChange:s}=e,[d,f]=r.useState(()=>new Map),v=r.useCallback((e,t)=>{f(n=>new Map(n).set(e,null!=t?t:null))},[]),p=r.useCallback(e=>{f(t=>{let n=new Map(t);return n.delete(e),n})},[]);(0,i.P)(()=>{let e=new Map(d);Array.from(e.keys()).sort(a).forEach((t,n)=>{var r;let o=null!==(r=d.get(t))&&void 0!==r?r:{};e.set(t,{...o,index:n})}),!function(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries()){let e=t.get(n);if((null==r?void 0:r.index)!==(null==e?void 0:e.index)||void 0!==e&&!function(e,t){if(e===t)return!0;if(!(e instanceof Object)||!(t instanceof Object))return!1;let n=0,r=0;for(let r in e)if(n+=1,!o(e[r],t[r])||!(r in t))return!1;for(let e in t)r+=1;return n===r}(r,e))return!1}return!0}(d,e)&&(f(e),null==s||s(e))},[d,s]);let h=r.useMemo(()=>({register:v,unregister:p,map:d,elementsRef:n,labelsRef:c}),[v,p,d,n,c]);return(0,l.jsx)(u.t.Provider,{value:h,children:t})}},1456:function(e,t,n){"use strict";n.d(t,{M:function(){return i},t:function(){return o}});var r=n(2265);let o=r.createContext({register:()=>{},unregister:()=>{},map:new Map,elementsRef:{current:[]}});function i(){return r.useContext(o)}},2290:function(e,t,n){"use strict";n.d(t,{R:function(){return u}});var r=n(2265),o=n(3804),i=n(1456);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{label:t,metadata:n}=e,{register:u,unregister:l,map:a,elementsRef:c,labelsRef:s}=(0,i.M)(),[d,f]=r.useState(null),v=r.useRef(null),p=r.useCallback(e=>{if(v.current=e,null!==d&&(c.current[d]=e,s)){var n;let r=void 0!==t;s.current[d]=r?t:null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:null}},[d,c,s,t]);return(0,o.P)(()=>{let e=v.current;if(e)return u(e,n),()=>{l(e)}},[u,l,n]),(0,o.P)(()=>{var e;let t=v.current?null===(e=a.get(v.current))||void 0===e?void 0:e.index:null;null!=t&&f(t)},[a]),r.useMemo(()=>({ref:p,index:null==d?-1:d}),[d,p])}},4567:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(2265);let o=r.createContext(void 0);function i(){var e;let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0],n=r.useContext(o);if(void 0===n&&!t)throw Error("Base UI: DirectionContext is missing.");return null!==(e=null==n?void 0:n.direction)&&void 0!==e?e:"ltr"}},1333:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var r,o={};n.r(o),n.d(o,{z$:function(){return E},aV:function(){return Z},s_:function(){return S},fC:function(){return p},OK:function(){return M}});var i=n(2265),u=n(7488),l=n(914),a=n(4567),c=n(2529);let s=i.createContext(void 0);function d(){let e=i.useContext(s);if(void 0===e)throw Error("Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>.");return e}let f={tabActivationDirection:e=>({"data-activation-direction":e})};var v=n(7437);let p=i.forwardRef(function(e,t){let{className:n,defaultValue:r=0,onValueChange:o,orientation:d="horizontal",render:p,value:h,...g}=e,b=(0,a.g)(),{getTabElementBySelectedValue:m,getTabIdByPanelValueOrIndex:x,getTabPanelIdByTabValueOrIndex:C,onValueChange:R,setTabMap:y,setTabPanelMap:I,tabActivationDirection:T,tabPanelRefs:M,value:k}=function(e){let{value:t,defaultValue:n,onValueChange:r}=e,o=i.useRef([]),[u,l]=(0,c.u)({controlled:t,default:n,name:"Tabs",state:"value"}),[a,s]=i.useState(()=>new Map),[d,f]=i.useState(()=>new Map),[v,p]=i.useState("none"),h=i.useCallback((e,t,n)=>{l(e),p(t),null==r||r(e,n)},[r,l]),g=i.useCallback((e,t)=>{if(void 0!==e||!(t<0)){for(let n of a.values())if(void 0!==e&&n&&e===(null==n?void 0:n.value)||void 0===e&&(null==n?void 0:n.index)&&(null==n?void 0:n.index)===t)return n.id}},[a]),b=i.useCallback((e,t)=>{if(void 0!==e||!(t<0))for(let u of d.values()){var n,r,o,i;if(void 0!==e&&t>-1&&e===(null!==(r=null!==(n=null==u?void 0:u.value)&&void 0!==n?n:null==u?void 0:u.index)&&void 0!==r?r:void 0)||void 0===e&&t>-1&&t===(null!==(i=null!==(o=null==u?void 0:u.value)&&void 0!==o?o:null==u?void 0:u.index)&&void 0!==i?i:void 0))return null==u?void 0:u.id}},[d]);return{getTabElementBySelectedValue:i.useCallback(e=>{if(void 0===e)return null;for(let[n,r]of d.entries()){var t;if(null!=r&&e===(null!==(t=r.value)&&void 0!==t?t:r.index))return n}return null},[d]),getTabIdByPanelValueOrIndex:b,getTabPanelIdByTabValueOrIndex:g,onValueChange:h,setTabMap:f,setTabPanelMap:s,tabActivationDirection:v,tabMap:d,tabPanelRefs:o,value:u}}({value:h,defaultValue:r,onValueChange:o}),w=i.useMemo(()=>({direction:b,getTabElementBySelectedValue:m,getTabIdByPanelValueOrIndex:x,getTabPanelIdByTabValueOrIndex:C,onValueChange:R,orientation:d,setTabMap:y,tabActivationDirection:T,value:k}),[b,m,x,C,R,d,y,T,k]),{renderElement:P}=(0,u.F)({render:null!=p?p:"div",className:n,state:{orientation:d,tabActivationDirection:T},extraProps:g,ref:t,customStyleHookMapping:f});return(0,v.jsx)(s.Provider,{value:w,children:(0,v.jsx)(l.h,{elementsRef:M,onMapChange:I,children:P()})})});var h=n(628),g=n(1862),b=n(3804),m=n(7105),x=n(7630),C=n(8996);let R=i.createContext(void 0);var y=n(2290);let I=i.createContext(void 0);function T(){let e=i.useContext(I);if(void 0===e)throw Error("Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>.");return e}let M=i.forwardRef(function(e,t){let{className:n,disabled:r=!1,render:o,value:l,id:a,...c}=e,{value:s,getTabPanelIdByTabValueOrIndex:f,orientation:v}=d(),{activateOnFocus:p,highlightedTabIndex:I,onTabActivation:M,setHighlightedTabIndex:k}=T(),{getRootProps:w,index:P,selected:O}=function(e){let{activateOnFocus:t,disabled:n=!1,getTabPanelIdByTabValueOrIndex:r,highlightedTabIndex:o,id:u,onTabActivation:l,rootRef:a,selectedTabValue:c,setHighlightedTabIndex:s,value:d}=e,f=(0,x.L)(u),{getItemProps:v,ref:p,index:I}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{highlightedIndex:t,onHighlightedIndexChange:n}=function(){let e=i.useContext(R);if(void 0===e)throw Error("Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");return e}(),{ref:r,index:o}=(0,y.R)(e),u=t===o,l=i.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(e,{tabIndex:u?0:-1,onFocus(){n(o)}})},[u,o,n]);return i.useMemo(()=>({getItemProps:l,ref:r,index:o}),[l,r,o])}({metadata:i.useMemo(()=>({disabled:n,id:f,value:d}),[n,f,d])}),T=null!=d?d:I,M=i.useMemo(()=>void 0===d?!(I<0)&&I===c:d===c,[I,c,d]);(0,b.P)(()=>{t&&M&&I>-1&&o!==I&&s(I)},[t,o,I,M,s]);let{getButtonProps:k,buttonRef:w}=(0,C.U)({disabled:n,focusableWhenDisabled:!0,type:"button"}),P=(0,m.c)(p,w,a),O=I>-1?r(d,I):void 0,E=i.useRef(!1),S=i.useRef(!1);return{getRootProps:i.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(e,{role:"tab","aria-controls":O,"aria-selected":M,id:f,ref:P,onClick(e){M||n||l(T,e.nativeEvent)},onFocus(e){t&&!M&&!n&&(!E.current||E.current&&S.current)&&l(T,e.nativeEvent)},onPointerDown(e){M||n||(E.current=!0,e.button&&0!==e.button||(S.current=!0,(0,g.P)(e.currentTarget).addEventListener("pointerup",function(){E.current=!1,S.current=!1},{once:!0})))}},(0,h.p)(v(),k()))},[t,k,v,P,f,l,M,O,T,n]),index:I,rootRef:P,selected:M}}({activateOnFocus:p,disabled:r,getTabPanelIdByTabValueOrIndex:f,highlightedTabIndex:I,id:a,onTabActivation:M,rootRef:t,setHighlightedTabIndex:k,selectedTabValue:s,value:l}),E=P>-1&&P===I,S=i.useMemo(()=>({disabled:r,highlighted:E,selected:O,orientation:v}),[r,E,O,v]),{renderElement:_}=(0,u.F)({propGetter:w,render:null!=o?o:"button",className:n,state:S,extraProps:c});return _()});var k=n(6659);let w=((r={}).activeTabLeft="--active-tab-left",r.activeTabRight="--active-tab-right",r.activeTabTop="--active-tab-top",r.activeTabBottom="--active-tab-bottom",r.activeTabWidth="--active-tab-width",r.activeTabHeight="--active-tab-height",r);function P(e){return .01*Math.round(100*e)}let O=()=>null,E=i.forwardRef(function(e,t){let{className:n,render:r,renderBeforeHydration:o=!1,...l}=e,{getTabElementBySelectedValue:a,orientation:c,tabActivationDirection:s,value:p}=d(),{tabsListRef:g}=T(),[b]=i.useState(()=>Math.random().toString(36).slice(2)),[m,x]=i.useState(!1),{value:C}=d();(0,k.F)(()=>x(!0));let{getRootProps:R,activeTabPosition:y,activeTabSize:I}=function(e){let{value:t,tabsListRef:n,getTabElementBySelectedValue:r}=e,o=function(){let[,e]=i.useState({});return i.useCallback(()=>{e({})},[])}();i.useEffect(()=>{if(null!=t&&null!=n.current&&"undefined"!=typeof ResizeObserver){let e=new ResizeObserver(()=>{o()});return e.observe(n.current),()=>{e.disconnect()}}},[t,n,o]);let u=0,l=0,a=0,c=0,s=0,d=0,f=!1;if(null!=t&&null!=n.current){let e=r(t);if(f=!0,null!=e){let{left:t,right:r,bottom:o,top:i}=e.getBoundingClientRect(),{left:f,right:v,top:p,bottom:h}=n.current.getBoundingClientRect();u=P(t-f),l=P(v-r),a=P(i-p),c=P(h-o),s=P(r-t),d=P(o-i)}}let v=i.useMemo(()=>f?{left:u,right:l,top:a,bottom:c}:null,[u,l,a,c,f]),p=i.useMemo(()=>f?{width:s,height:d}:null,[s,d,f]),g=i.useMemo(()=>{if(f)return{[w.activeTabLeft]:"".concat(u,"px"),[w.activeTabRight]:"".concat(l,"px"),[w.activeTabTop]:"".concat(a,"px"),[w.activeTabBottom]:"".concat(c,"px"),[w.activeTabWidth]:"".concat(s,"px"),[w.activeTabHeight]:"".concat(d,"px")}},[u,l,a,c,s,d,f]),b=f&&s>0&&d>0;return{getRootProps:i.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(e,{role:"presentation",style:g,hidden:!b})},[g,b]),activeTabPosition:v,activeTabSize:p}}({getTabElementBySelectedValue:a,tabsListRef:g,value:p}),M=i.useMemo(()=>({orientation:c,selectedTabPosition:y,selectedTabSize:I,tabActivationDirection:s}),[c,y,I,s]),{renderElement:E}=(0,u.F)({propGetter:R,render:null!=r?r:"span",className:n,state:M,extraProps:{...l,"data-instance-id":m&&o?void 0:b,suppressHydrationWarning:!0},customStyleHookMapping:{...f,selectedTabPosition:O,selectedTabSize:O},ref:t});return null==C?null:(0,v.jsxs)(i.Fragment,{children:[E(),!m&&o&&(0,v.jsx)("script",{dangerouslySetInnerHTML:{__html:'!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-selected]");if(!i)return;const{left:o,right:n,top:r,bottom:c,width:l}=i.getBoundingClientRect(),{left:u,right:s,top:d,bottom:f,width:g}=e.getBoundingClientRect();if(0===l||0===g)return;const h=s-n,b=r-d,p=f-c,m=n-o,a=c-r;function v(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}v("left",o-u),v("right",h),v("top",b),v("bottom",p),v("width",m),v("height",a),m>0&&a>0&&t.removeAttribute("hidden")}();'},suppressHydrationWarning:!0})]})}),S=i.forwardRef(function(e,t){let{children:n,className:r,value:o,render:l,keepMounted:a=!1,...c}=e,{value:s,getTabIdByPanelValueOrIndex:v,orientation:p,tabActivationDirection:g}=d(),{hidden:b,getRootProps:C}=function(e){let{getTabIdByPanelValueOrIndex:t,rootRef:n,selectedValue:r,value:o}=e,u=(0,x.L)(),l=i.useMemo(()=>({id:u,value:o}),[u,o]),{ref:a,index:c}=(0,y.R)({metadata:l}),s=null!=o?o:c,d=i.useRef(null),f=(0,m.c)(d,a,n),v=s!==r,p=i.useMemo(()=>t(o,c),[t,c,o]),g=i.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(e,{"aria-labelledby":p,hidden:v,id:null!=u?u:void 0,role:"tabpanel",tabIndex:v?-1:0,ref:f,"data-index":c})},[p,f,v,u,c]);return{hidden:v,getRootProps:g,rootRef:f}}({getTabIdByPanelValueOrIndex:v,rootRef:t,selectedValue:s,value:o}),R=i.useMemo(()=>({hidden:b,orientation:p,tabActivationDirection:g}),[b,p,g]),{renderElement:I}=(0,u.F)({propGetter:C,render:null!=l?l:"div",className:r,state:R,extraProps:{...c,children:b&&!a?void 0:n},customStyleHookMapping:f});return I()});var _=n(36),N=n(1530);let D="ArrowUp",H="ArrowDown",j="ArrowLeft",B="ArrowRight",z="Home",A=[j,B],L=[j,B,z,"End"],F=[D,H],U=[D,H,z,"End"],W=[...A,...F],G=[...W,z,"End"];function V(e){e.preventDefault(),e.stopPropagation()}function $(e,t,n){return Math.floor(e/t)!==n}function q(e,t){return t<0||t>=e.current.length}function K(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:o=1}={}){let i=e.current,u=t;do u+=n?-o:o;while(u>=0&&u<=i.length-1&&Y(i,u,r));return u}function Y(e,t,n){if(n)return n.includes(t);let r=e[t];return null==r||r.hasAttribute("disabled")||"true"===r.getAttribute("aria-disabled")}let J=void 0;function Q(e){let{render:t,className:n,highlightedIndex:r,onHighlightedIndexChange:o,orientation:a,dense:c,itemSizes:s,loop:d,cols:f,direction:p,enableHomeAndEndKeys:b,onMapChange:x,stopEventPropagation:C,rootRef:y,...I}=e,{getRootProps:T,highlightedIndex:M,onHighlightedIndexChange:k,elementsRef:w}=function(e){let{itemSizes:t,cols:n=1,loop:r=!0,dense:o=!1,orientation:u="both",direction:l,highlightedIndex:a,onHighlightedIndexChange:c,rootRef:s,enableHomeAndEndKeys:d=!1,stopEventPropagation:f=!1}=e,[v,p]=i.useState(0),b=n>1,x=null!=a?a:v,C=(0,_.$)(null!=c?c:p),R=i.useRef(null!=l?l:null),y=i.useRef(null),I=(0,m.c)(y,s),T=i.useRef([]),M=i.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(e,{"aria-orientation":"both"===u?void 0:u,ref:I,onKeyDown(e){var i;let l=d?G:W;if(!l.includes(e.key))return;let a=y.current;if(!a)return;(null==R?void 0:R.current)==null&&(R.current=function(e){if((0,N.a)()){let t=e.computedStyleMap().get("direction");return t?.value}return(0,g.k)(e).getComputedStyle(e).direction}(a));let c="rtl"===R.current,s=x,v=K(T,{disabledIndices:J}),p=K(T,{decrement:!0,startingIndex:T.current.length,disabledIndices:J});if(b){let l=t||Array.from({length:T.current.length},()=>({width:1,height:1})),a=function(e,t,n){let r=[],o=0;return e.forEach(({width:e,height:i},u)=>{let l=!1;for(n&&(o=0);!l;){let n=[];for(let r=0;r<e;r+=1)for(let e=0;e<i;e+=1)n.push(o+r+e*t);o%t+e<=t&&n.every(e=>null==r[e])?(n.forEach(e=>{r[e]=u}),l=!0):o+=1}}),[...r]}(l,n,o),d=a.findIndex(e=>null!=e&&!Y(T.current,e,J)),f=a.reduce((e,t,n)=>null==t||Y(T.current,t,J)?e:n,-1);s=a[function(e,{event:t,orientation:n,loop:r,cols:o,disabledIndices:i,minIndex:u,maxIndex:l,prevIndex:a,rtl:c,stopEvent:s=!1}){let d=a;if(t.key===D){if(s&&V(t),-1===a)d=l;else if(d=K(e,{startingIndex:d,amount:o,decrement:!0,disabledIndices:i}),r&&(a-o<u||d<0)){let e=a%o,t=l%o,n=l-(t-e);d=t===e?l:t>e?n:n-o}q(e,d)&&(d=a)}if(t.key===H&&(s&&V(t),-1===a?d=u:(d=K(e,{startingIndex:a,amount:o,disabledIndices:i}),r&&a+o>l&&(d=K(e,{startingIndex:a%o-o,amount:o,disabledIndices:i}))),q(e,d)&&(d=a)),"both"===n){let n=c?j:B,u=c?B:j,f=Math.floor(a/o);t.key===n&&(s&&V(t),a%o!=o-1?(d=K(e,{startingIndex:a,disabledIndices:i}),r&&$(d,o,f)&&(d=K(e,{startingIndex:a-a%o-1,disabledIndices:i}))):r&&(d=K(e,{startingIndex:a-a%o-1,disabledIndices:i})),$(d,o,f)&&(d=a)),t.key===u&&(s&&V(t),a%o!=0?(d=K(e,{startingIndex:a,decrement:!0,disabledIndices:i}),r&&$(d,o,f)&&(d=K(e,{startingIndex:a+(o-a%o),decrement:!0,disabledIndices:i}))):r&&(d=K(e,{startingIndex:a+(o-a%o),decrement:!0,disabledIndices:i})),$(d,o,f)&&(d=a));let v=Math.floor(l/o)===f;q(e,d)&&(d=r&&v?t.key===u?l:K(e,{startingIndex:a-a%o-1,disabledIndices:i}):a)}return d}({current:a.map(e=>e?T.current[e]:null)},{event:e,orientation:u,loop:r,cols:n,disabledIndices:(i=[...J||T.current.map((e,t)=>Y(T.current,t)?t:void 0),void 0],a.flatMap((e,t)=>i.includes(e)?[t]:[])),minIndex:d,maxIndex:f,prevIndex:function(e,t,n,r,o){if(-1===e)return -1;let i=n.indexOf(e),u=t[e];switch(o){case"tl":return i;case"tr":if(!u)return i;return i+u.width-1;case"bl":if(!u)return i;return i+(u.height-1)*r;case"br":return n.lastIndexOf(e);default:return -1}}(x>p?v:x,l,a,n,e.key===H?"bl":e.key===B?"tr":"tl"),rtl:c})]}let h=c?j:B,m={horizontal:[h],vertical:[H],both:[h,H]}[u],I=c?B:j,M={horizontal:[I],vertical:[D],both:[I,D]}[u],k=b?l:({horizontal:d?L:A,vertical:d?U:F,both:l})[u];d&&(e.key===z?s=v:"End"===e.key&&(s=p)),s===x&&[...m,...M].includes(e.key)&&(s=r&&s===p&&m.includes(e.key)?v:r&&s===v&&M.includes(e.key)?p:K(T,{startingIndex:s,decrement:M.includes(e.key),disabledIndices:J})),s===x||q(T,s)||(f&&e.stopPropagation(),k.includes(e.key)&&e.preventDefault(),C(s),queueMicrotask(()=>{var e;null===(e=T.current[s])||void 0===e||e.focus()}))}})},[x,f,n,o,T,b,t,r,I,C,u,d]);return i.useMemo(()=>({getRootProps:M,highlightedIndex:x,onHighlightedIndexChange:C,elementsRef:T}),[M,x,C,T])}({itemSizes:s,cols:f,loop:d,dense:c,orientation:a,highlightedIndex:r,onHighlightedIndexChange:o,rootRef:y,stopEventPropagation:C,enableHomeAndEndKeys:b,direction:p}),{renderElement:P}=(0,u.F)({propGetter:T,render:null!=t?t:"div",state:{},className:n,extraProps:I}),O=i.useMemo(()=>({highlightedIndex:M,onHighlightedIndexChange:k}),[M,k]);return(0,v.jsx)(R.Provider,{value:O,children:(0,v.jsx)(l.h,{elementsRef:w,onMapChange:x,children:P()})})}function X(e,t){let{left:n,top:r}=e.getBoundingClientRect(),{left:o,top:i}=t.getBoundingClientRect();return{left:n-o,top:r-i}}n(5892);let Z=i.forwardRef(function(e,t){let{activateOnFocus:n=!0,className:r,loop:o=!0,render:l,...a}=e,{direction:c,getTabElementBySelectedValue:s,onValueChange:p,orientation:g,value:x,setTabMap:C,tabActivationDirection:R}=d(),[y,T]=i.useState(0),M=i.useRef(null),{getRootProps:k,onTabActivation:w}=function(e){let{getTabElementBySelectedValue:t,onValueChange:n,orientation:r,rootRef:o,tabsListRef:u,value:l}=e,a=function(e,t,n,r){let o=i.useRef(null);return(0,b.P)(()=>{if(null==e||null==n.current){o.current=null;return}let i=r(e);if(null==i){o.current=null;return}let{left:u,top:l}=X(i,n.current);o.current="horizontal"===t?u:l},[t,r,n,e]),i.useCallback(i=>{if(i===e)return"none";if(null==i)return o.current=null,"none";if(null!=i&&null!=n.current){let e=r(i);if(null!=e){let{left:r,top:i}=X(e,n.current);if(null==o.current)return o.current="horizontal"===t?r:i,"none";if("horizontal"===t){if(r<o.current)return o.current=r,"left";if(r>o.current)return o.current=r,"right"}else if(i<o.current)return o.current=i,"up";else if(i>o.current)return o.current=i,"down"}}return"none"},[r,t,o,n,e])}(l,r,u,t),c=(0,_.$)((e,t)=>{if(e!==l){let r=a(e);n(e,r,t)}}),s=(0,m.c)(u,o);return{getRootProps:i.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.p)(e,{"aria-orientation":"vertical"===r?"vertical":void 0,ref:s,role:"tablist"})},[s,r]),onTabActivation:c,rootRef:s,tabsListRef:u}}({getTabElementBySelectedValue:s,onValueChange:p,orientation:g,rootRef:t,setTabMap:C,tabsListRef:M,value:x}),P=i.useMemo(()=>({orientation:g,tabActivationDirection:R}),[g,R]),{renderElement:O}=(0,u.F)({propGetter:k,render:null!=l?l:"div",className:r,state:P,extraProps:a,customStyleHookMapping:f}),E=i.useMemo(()=>({activateOnFocus:n,highlightedTabIndex:y,onTabActivation:w,setHighlightedTabIndex:T,tabsListRef:M,value:x}),[n,y,w,T,M,x]);return(0,v.jsx)(I.Provider,{value:E,children:(0,v.jsx)(Q,{highlightedIndex:y,enableHomeAndEndKeys:!0,loop:o,direction:c,orientation:g,onHighlightedIndexChange:T,onMapChange:C,render:O()})})})},5892:function(e,t,n){"use strict";var r=n(8060);r.oneOfType([r.func,r.object])}}]);