(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296,479,408],{4722:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.t.bind(n,2260,23)),Promise.resolve().then(n.bind(n,105)),Promise.resolve().then(n.bind(n,5832))},105:function(e,t,n){"use strict";n.d(t,{Heading:function(){return c}});var r=n(7437),i=n(2265),o=n(6581);let c=(0,i.forwardRef)((e,t)=>{let{children:n,variant:i="title1",as:c="h1",...s}=e,{getResponsiveValue:a}=(0,o.useCanon)(),l=a(i),u=c;return"title2"===i&&(u="h2"),"title3"===i&&(u="h3"),"title4"===i&&(u="h4"),"title5"===i&&(u="h5"),c&&(u=c),(0,r.jsx)(u,{ref:t,...s,className:"text ".concat(l?"text-".concat(l):""),children:n})});c.displayName="Heading"},5832:function(e,t,n){"use strict";n.d(t,{Text:function(){return c}});var r=n(7437),i=n(2265),o=n(6581);let c=(0,i.forwardRef)((e,t)=>{let{children:n,variant:i="body",weight:c="regular",style:s,...a}=e,{getResponsiveValue:l}=(0,o.useCanon)(),u=l(i),d=l(c);return(0,r.jsx)("p",{ref:t,className:"text ".concat(u?"text-".concat(u):""," ").concat(d?"text-".concat(d):""),style:s,...a,children:n})});c.displayName="Text"},6581:function(e,t,n){"use strict";n.r(t),n.d(t,{CanonProvider:function(){return u},useCanon:function(){return d}});var r=n(7437),i=n(2265),o=n(7865);let c={arrowDown:o.ZMw,arrowLeft:o.RHc,arrowRight:o.wKp,arrowUp:o.tN7,arrowDownCircle:o.iOO,arrowLeftCircle:o.zNb,arrowRightCircle:o.FU_,arrowUpCircle:o.vNF,check:o.ffJ,chevronDown:o.ZXJ,chevronUp:o.gcy,chevronLeft:o.jW7,chevronRight:o.jfD,cloud:o.Pa1,externalLink:o.uXP,heart:o.iB2,moon:o.S6R,plus:o.p22,sun:o.sEY,trash:o.GnT},s=i.useLayoutEffect;function a(e){let{defaultValue:t=!1,initializeWithValue:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e=>window.matchMedia(e).matches,[o,c]=(0,i.useState)(()=>n?r(e):t);function a(){c(r(e))}return s(()=>{let t=window.matchMedia(e);return a(),t.addListener?t.addListener(a):t.addEventListener("change",a),()=>{t.removeListener?t.removeListener(a):t.removeEventListener("change",a)}},[e]),o}let l=(0,i.createContext)({icons:c,breakpoint:"md",getResponsiveValue:()=>""}),u=e=>{let{children:t,overrides:n}=e,i={...c,...n},o=a("(min-width: 640px)"),s=a("(min-width: 768px)"),u=a("(min-width: 1024px)"),d=a("(min-width: 1280px)"),h=a("(min-width: 1536px)")?"2xl":d?"xl":u?"lg":s?"md":o?"sm":"xs";return(0,r.jsx)(l.Provider,{value:{icons:i,breakpoint:h,getResponsiveValue:e=>{if("object"==typeof e){let t=["xs","sm","md","lg","xl","2xl"],n=t.indexOf(h);for(let r=n;r>=0;r--)if(e[t[r]])return e[t[r]];return e.xs}return e}},children:t})},d=()=>(0,i.useContext)(l)},2260:function(e){e.exports={codeBlock:"styles_codeBlock__cJkhk",title:"styles_title__LVFiR",code:"styles_code__W0N63"}}},function(e){e.O(0,[733,738,878,478,117,744],function(){return e(e.s=4722)}),_N_E=e.O()}]);