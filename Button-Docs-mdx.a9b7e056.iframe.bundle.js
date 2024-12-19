(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[747],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Button/Docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Button_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/Button.stories.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./docs/components/Title/Title.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./docs/components/Text/Text.tsx"),_docs_components_PropsTable_PropsTable__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./docs/components/PropsTable/PropsTable.tsx");function _createMdxContent(props){const _components={p:"p",...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.di,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h1",children:"Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"A button component that can be used to trigger actions."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.Primary}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'import { Button } from "@backstage/canon";\n\n<Button>Click me</Button>\n',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",style:{marginBottom:"16px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"API reference"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components_PropsTable_PropsTable__WEBPACK_IMPORTED_MODULE_7__.X,{data:{size:{type:["small","medium"],responsive:!0},variant:{type:["primary","secondary","tertiary"],responsive:!0},disabled:{type:"boolean",responsive:!1},children:{type:"ReactNode",responsive:!1},className:{type:"string",responsive:!1},style:{type:"CSSProperties",responsive:!1}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Examples"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Variants"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here's a view when buttons have different variants."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.Variants}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Inline alignY="center">\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="tertiary">Tertiary</Button>\n</Inline>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Sizes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here's a view when buttons have different sizes."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.Sizes}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Inline alignY="center">\n  <Button size="medium">Medium</Button>\n  <Button size="small">Small</Button>\n</Inline>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"With Icons"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here's a view when buttons have icons."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.WithIcons}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Inline alignY="center">\n  <Button iconStart="cloud">Button</Button>\n  <Button iconEnd="chevronRight">Button</Button>\n  <Button iconStart="cloud" iconEnd="chevronRight">Button</Button>\n</Inline>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Full width"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here's a view when buttons are full width."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.FullWidth}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Stack style={{ width: \'300px\' }}>\n  <Button iconStart="cloud">Button</Button>\n  <Button iconEnd="chevronRight">Button</Button>\n  <Button iconStart="cloud" iconEnd="chevronRight">Button</Button>\n</Stack>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here's a view when buttons are disabled."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.Disabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:"<Button disabled>Button</Button>",language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Responsive"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here's a view when buttons are responsive."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_4__.Responsive}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:"<Button variant={{ xs: 'primary', sm: 'secondary', md: 'tertiary' }} size={{ xs: 'small', sm: 'medium' }}>\n  Button\n</Button>",language:"tsx",dark:!0})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./docs/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Chip=({children,head=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"chip "+(head?"head":"")},children);Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},head:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./docs/components/PropsTable/PropsTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>PropsTable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./docs/components/Table/Table.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs/components/Chip/Chip.tsx");const PropsTable=({data})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.bL,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Y9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Sy,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Prop"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Type"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Responsive"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.nB,null,Object.keys(data).map((n=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fI,{key:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,{head:!0},n)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,Array.isArray(data[n].type)?data[n].type.map((t=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,{key:t},t))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,null,data[n].type)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,null,data[n].responsive?"Yes":"No")))))));PropsTable.__docgenInfo={description:"",methods:[],displayName:"PropsTable",props:{data:{required:!0,tsType:{name:"T"},description:""}}}},"./docs/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A3:()=>HeaderCell,Sy:()=>HeaderRow,Y9:()=>Header,bL:()=>Root,fI:()=>Row,fh:()=>Cell,nB:()=>Body});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Root=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-table-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"sb-table"},children)),Header=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",null,children),Body=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,children),HeaderRow=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,children),HeaderCell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{className:"sb-table-cell sb-table-header-cell"},children),Row=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{className:"sb-table-row"},children),Cell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{className:"sb-table-cell"},children);Root.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Body.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderRow.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderCell.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Row.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Cell.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./docs/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Text=({children,style})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-text",style},children);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./docs/components/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Title=({children,style,type="h1"})=>{let Component="h1";return"h1"===type&&(Component="h1"),"h2"===type&&(Component="h2"),"h3"===type&&(Component="h3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{className:`sb-title ${type}`,style,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}}}}]);