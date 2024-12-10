(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[656],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./docs/Home.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});var react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Text=__webpack_require__("./docs/components/Text/Text.tsx");const Banner=({children,variant="info"})=>react.createElement("div",{className:`banner ${variant}`},react.createElement("div",{className:"icon"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},react.createElement("path",{d:"M4.00001 20V14C4.00001 9.58172 7.58173 6 12 6C16.4183 6 20 9.58172 20 14V20H21V22H3.00001V20H4.00001ZM6.00001 20H18V14C18 10.6863 15.3137 8 12 8C8.6863 8 6.00001 10.6863 6.00001 14V20ZM11 2H13V5H11V2ZM19.7782 4.80761L21.1924 6.22183L19.0711 8.34315L17.6569 6.92893L19.7782 4.80761ZM2.80762 6.22183L4.22183 4.80761L6.34315 6.92893L4.92894 8.34315L2.80762 6.22183ZM7.00001 14C7.00001 11.2386 9.23858 9 12 9V11C10.3432 11 9.00001 12.3431 9.00001 14H7.00001Z"}))),children);Banner.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}}}};var Title=__webpack_require__("./docs/components/Title/Title.tsx");const Columns=({children,style})=>react.createElement("div",{className:"columns",style},children);Columns.__docgenInfo={description:"",methods:[],displayName:"Columns",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const ComponentStatus=({name,status="notStarted",style,link})=>react.createElement("div",{className:"component-status",style},link?react.createElement("a",{href:link,className:"title"},name):react.createElement("span",{className:"title"},name),react.createElement("span",{className:`pill ${status}`},"notStarted"===status&&"Not Started","inProgress"===status&&"In Progress","alpha"===status&&"Alpha","beta"===status&&"Beta","stable"===status&&"Stable"));ComponentStatus.__docgenInfo={description:"",methods:[],displayName:"ComponentStatus",props:{name:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'notStarted' | 'inProgress' | 'alpha' | 'beta' | 'stable'",elements:[{name:"literal",value:"'notStarted'"},{name:"literal",value:"'inProgress'"},{name:"literal",value:"'alpha'"},{name:"literal",value:"'beta'"},{name:"literal",value:"'stable'"}]},description:"",defaultValue:{value:"'notStarted'",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},link:{required:!1,tsType:{name:"string"},description:""}}};const Roadmap=({list})=>{const orderList=["inProgress","notStarted","completed"];return react.createElement("div",{className:"roadmap"},list.sort(((a,b)=>orderList.indexOf(a.status)-orderList.indexOf(b.status))).map(Item))},Item=({title,status="notStarted"})=>react.createElement("div",{className:["roadmap-item",status].join(" ")},react.createElement("div",{className:"left"},react.createElement("div",{className:"dot"}),react.createElement("div",{className:"title"},title)),react.createElement("span",{className:"pill"},"notStarted"===status&&"Not Started","inProgress"===status&&"In Progress","inReview"===status&&"Ready for Review","completed"===status&&"Completed"));Roadmap.__docgenInfo={description:"",methods:[],displayName:"Roadmap",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  title: string;\n  status: 'notStarted' | 'inProgress' | 'inReview' | 'completed';\n}",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'notStarted' | 'inProgress' | 'inReview' | 'completed'",elements:[{name:"literal",value:"'notStarted'"},{name:"literal",value:"'inProgress'"},{name:"literal",value:"'inReview'"},{name:"literal",value:"'completed'"}],required:!0}}]}}],raw:"RoadmapItem[]"},description:""}}};const list=[{title:"Remove Vanilla Extract and use pure CSS instead",status:"inProgress"},{title:"Add collapsing across breakpoints for the Inline component",status:"notStarted"},{title:"Add reversing the order for the Inline component",status:"notStarted"},{title:"Set up Storybook",status:"completed"},{title:"Set up iconography",status:"completed"},{title:"Set up global tokens",status:"inProgress"},{title:"Set up theming system",status:"inProgress"},{title:"Create first pass at box component",status:"completed"},{title:"Create first pass at stack component",status:"completed"},{title:"Create first pass at inline component",status:"completed"}];function _createMdxContent(props){const _components={p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(dist.di,{children:[(0,jsx_runtime.jsx)("img",{src:"header.png",style:{width:"100%",marginTop:"-16px"}}),(0,jsx_runtime.jsx)(Text.E,{style:{marginTop:"64px",marginBottom:"24px"},children:(0,jsx_runtime.jsx)(_components.p,{children:"Welcome to the Canon, the new design library for Backstage plugins. This\nproject is still under active development but we will make sure to document\nthe API as we go. We are aiming to improve the general UI of Backstage and\nplugins across Backstage. This new library will take time to build but we are\nbuilding it incrementally with not conflict with the existing theming system."})}),(0,jsx_runtime.jsx)(Banner,{variant:"warning",children:(0,jsx_runtime.jsx)(_components.p,{children:"This library is still under heavy construction. Please be aware that the API\nwill change until we reach a stable release."})}),(0,jsx_runtime.jsx)(Title.h,{style:{marginTop:"48px"},type:"h2",children:(0,jsx_runtime.jsx)(_components.p,{children:"Component Status"})}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsx)(_components.p,{children:"We are still in the process of documenting the API and building the\ncomponents. You can use the statuses below to see what is ready and what is\ncoming soon. If there is a component missing that you need, please let us know\nby opening an issue on GitHub."})}),(0,jsx_runtime.jsxs)(Columns,{style:{marginTop:"32px"},children:[(0,jsx_runtime.jsx)(ComponentStatus,{name:"Box",status:"alpha",link:"/?path=/docs/components-box--docs"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Button",status:"inProgress",link:"/?path=/docs/components-button--docs"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Checkbox",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Container",status:"alpha",link:"/?path=/docs/components-container--docs"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Grid",status:"alpha",link:"/?path=/story/components-grid--docs"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Header",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Icon",status:"alpha",link:"/?path=/docs/components-icon--docs"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Inline",status:"alpha",link:"/?path=/story/components-inline--default"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Input",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Radio",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Select",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Stack",status:"alpha",link:"/?path=/docs/components-stack--default"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Switch",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Tabs",status:"notStarted"}),(0,jsx_runtime.jsx)(ComponentStatus,{name:"Tooltip",status:"notStarted"})]}),(0,jsx_runtime.jsx)(Title.h,{style:{marginTop:"48px"},type:"h2",children:(0,jsx_runtime.jsx)(_components.p,{children:"Roadmap"})}),(0,jsx_runtime.jsx)(Roadmap,{list})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./docs/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Text=({children,style})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text",style},children);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./docs/components/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Title=({children,style,type="h1"})=>{let Component="h1";return"h1"===type&&(Component="h1"),"h2"===type&&(Component="h2"),"h3"===type&&(Component="h3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{className:`title ${type}`,style,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}}}}]);