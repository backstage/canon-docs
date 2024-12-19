(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[78,544],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Text/Docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Text_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Text/Text.stories.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./docs/components/Title/Title.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./docs/components/Text/Text.tsx"),_docs_components_PropsTable_PropsTable__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./docs/components/PropsTable/PropsTable.tsx");function _createMdxContent(props){const _components={code:"code",p:"p",...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.di,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h1",children:"Text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Text"})," component is used to display content on your page."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'import { Text } from "@backstage/canon";\n\n<Text>Hello World!</Text>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",style:{marginBottom:"16px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"API reference"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components_PropsTable_PropsTable__WEBPACK_IMPORTED_MODULE_7__.X,{data:{variant:{type:["display","title1","title2","title3","title4","title5"],responsive:!0},weight:{type:["regular","bold"],responsive:!0},children:{type:"ReactNode",responsive:!1},className:{type:"string",responsive:!1},style:{type:"CSSProperties",responsive:!1}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Examples"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Here are some examples of how you can use the Text component."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"All variants"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Text"})," component has a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," prop that can be used to change the\nappearance of the text."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_4__.AllVariants}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Stack gap="md">\n  <Text variant="subtitle">Subtitle Lorem ipsum dolor sit amet consectetur...</Text>\n  <Text variant="body">Body Lorem ipsum dolor sit amet consectetur...</Text>\n  <Text variant="caption">Caption Lorem ipsum dolor sit amet consectetur...</Text>\n  <Text variant="label">Label Lorem ipsum dolor sit amet consectetur...</Text>\n</Stack>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"All weights"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Text"})," component has a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"weight"})," prop that can be used to change the\nappearance of the text."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_4__.AllWeights}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Stack gap="md">\n  <Text weight="regular">Regular Lorem ipsum dolor sit amet consectetur...</Text>\n  <Text weight="bold">Bold Lorem ipsum dolor sit amet consectetur...</Text>\n</Stack>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Responsive"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can also use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," prop to change the appearance of the text based\non the screen size."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:"<Text variant={{ xs: 'label', md: 'body' }}>Responsive Lorem ipsum dolor sit amet consectetur...</Text>",language:"tsx",dark:!0})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/Text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllVariants:()=>AllVariants,AllWeights:()=>AllWeights,Default:()=>Default,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Text_stories});var react=__webpack_require__("../../node_modules/react/index.js"),canon=__webpack_require__("./src/contexts/canon.tsx");const Text=(0,react.forwardRef)(((props,ref)=>{const{children,variant="body",weight="regular",...restProps}=props,{getResponsiveValue}=(0,canon.T)(),responsiveVariant=getResponsiveValue(variant),responsiveWeight=getResponsiveValue(weight);return react.createElement("p",{ref,...restProps,className:`text ${responsiveVariant?`text-${responsiveVariant}`:""} ${responsiveWeight?`text-${responsiveWeight}`:""}`},children)}));Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"| 'subtitle'\n| 'body'\n| 'caption'\n| 'label'\n| Partial<Record<Breakpoint, 'subtitle' | 'body' | 'caption' | 'label'>>",elements:[{name:"literal",value:"'subtitle'"},{name:"literal",value:"'body'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'label'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'subtitle' | 'body' | 'caption' | 'label'",elements:[{name:"literal",value:"'subtitle'"},{name:"literal",value:"'body'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'label'"}]}],raw:"Record<Breakpoint, 'subtitle' | 'body' | 'caption' | 'label'>"}],raw:"Partial<Record<Breakpoint, 'subtitle' | 'body' | 'caption' | 'label'>>"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'bold' | Partial<Record<Breakpoint, 'regular' | 'bold'>>",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'regular' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"}]}],raw:"Record<Breakpoint, 'regular' | 'bold'>"}],raw:"Partial<Record<Breakpoint, 'regular' | 'bold'>>"}]},description:""}}};var Stack=__webpack_require__("./src/components/Stack/Stack.tsx");const Text_stories={title:"Components/Text",component:Text},Default={args:{children:"Lorem ipsum dolor sit amet consectetur. Nec arcu vel lacus magna adipiscing nisi mauris tortor viverra. Enim rhoncus quisque consectetur ligula diam ac lacus massa. Id interdum id pellentesque justo ut massa nibh amet. Odio massa in scelerisque tortor massa integer purus amet enim. Eros sit neque nullam facilisis. Purus massa dignissim aliquet purus eu in. Urna consequat ullamcorper arcu amet dictumst. Commodo praesent turpis fringilla tristique congue volutpat in. Nulla in nulla ultrices lacus. In ultrices id tellus ut."}},AllVariants={args:{children:"Text"},render:()=>react.createElement(Stack.B,{gap:"md"},react.createElement(Text,{variant:"subtitle"},"Subtitle ",Default.args?.children),react.createElement(Text,{variant:"body"},"Body ",Default.args?.children),react.createElement(Text,{variant:"caption"},"Caption ",Default.args?.children),react.createElement(Text,{variant:"label"},"Label ",Default.args?.children))},AllWeights={args:{children:"Text"},render:()=>react.createElement(Stack.B,{gap:"md"},react.createElement(Text,{weight:"regular"},"Regular ",Default.args?.children),react.createElement(Text,{weight:"bold"},"Bold ",Default.args?.children))},Responsive={args:{...Default.args,variant:{xs:"label",md:"body"}}},__namedExportsOrder=["Default","AllVariants","AllWeights","Responsive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Lorem ipsum dolor sit amet consectetur. Nec arcu vel lacus magna adipiscing nisi mauris tortor viverra. Enim rhoncus quisque consectetur ligula diam ac lacus massa. Id interdum id pellentesque justo ut massa nibh amet. Odio massa in scelerisque tortor massa integer purus amet enim. Eros sit neque nullam facilisis. Purus massa dignissim aliquet purus eu in. Urna consequat ullamcorper arcu amet dictumst. Commodo praesent turpis fringilla tristique congue volutpat in. Nulla in nulla ultrices lacus. In ultrices id tellus ut.'\n  }\n}",...Default.parameters?.docs?.source}}},AllVariants.parameters={...AllVariants.parameters,docs:{...AllVariants.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'Text\'\n  },\n  render: () => <Stack gap="md">\n      <Text variant="subtitle">Subtitle {Default.args?.children}</Text>\n      <Text variant="body">Body {Default.args?.children}</Text>\n      <Text variant="caption">Caption {Default.args?.children}</Text>\n      <Text variant="label">Label {Default.args?.children}</Text>\n    </Stack>\n}',...AllVariants.parameters?.docs?.source}}},AllWeights.parameters={...AllWeights.parameters,docs:{...AllWeights.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'Text\'\n  },\n  render: () => <Stack gap="md">\n      <Text weight="regular">Regular {Default.args?.children}</Text>\n      <Text weight="bold">Bold {Default.args?.children}</Text>\n    </Stack>\n}',...AllWeights.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: {\n      xs: 'label',\n      md: 'body'\n    }\n  }\n}",...Responsive.parameters?.docs?.source}}}},"./docs/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Chip=({children,head=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"chip "+(head?"head":"")},children);Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},head:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./docs/components/PropsTable/PropsTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>PropsTable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./docs/components/Table/Table.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs/components/Chip/Chip.tsx");const PropsTable=({data})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.bL,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Y9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Sy,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Prop"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Type"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Responsive"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.nB,null,Object.keys(data).map((n=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fI,{key:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,{head:!0},n)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,Array.isArray(data[n].type)?data[n].type.map((t=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,{key:t},t))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,null,data[n].type)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,null,data[n].responsive?"Yes":"No")))))));PropsTable.__docgenInfo={description:"",methods:[],displayName:"PropsTable",props:{data:{required:!0,tsType:{name:"T"},description:""}}}},"./docs/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A3:()=>HeaderCell,Sy:()=>HeaderRow,Y9:()=>Header,bL:()=>Root,fI:()=>Row,fh:()=>Cell,nB:()=>Body});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Root=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-table-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"sb-table"},children)),Header=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",null,children),Body=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,children),HeaderRow=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,children),HeaderCell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{className:"sb-table-cell sb-table-header-cell"},children),Row=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{className:"sb-table-row"},children),Cell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{className:"sb-table-cell"},children);Root.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Body.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderRow.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderCell.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Row.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Cell.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./docs/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Text=({children,style})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-text",style},children);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./docs/components/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Title=({children,style,type="h1"})=>{let Component="h1";return"h1"===type&&(Component="h1"),"h2"===type&&(Component="h2"),"h3"===type&&(Component="h3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{className:`sb-title ${type}`,style,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}}}}]);