"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[2],{"./src/components/Heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomTag:()=>CustomTag,Default:()=>Default,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Heading_stories});var react=__webpack_require__("../../node_modules/react/index.js"),context=__webpack_require__("./src/theme/context.tsx"),getResponsiveValue=__webpack_require__("./src/utils/getResponsiveValue.ts");const Heading=(0,react.forwardRef)(((props,ref)=>{const{children,variant="title1",as="h1",...restProps}=props,{breakpoint}=(0,context.D)(),responsiveVariant=(0,getResponsiveValue.I)(variant,breakpoint);let Component=as;return"title2"===variant&&(Component="h2"),"title3"===variant&&(Component="h3"),"title4"===variant&&(Component="h4"),"title5"===variant&&(Component="h5"),as&&(Component=as),react.createElement(Component,{ref,...restProps,className:"text "+(responsiveVariant?`text-${responsiveVariant}`:"")},children)}));Heading.displayName="Heading",Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"| 'display'\n| 'title1'\n| 'title2'\n| 'title3'\n| 'title4'\n| 'title5'\n| Partial<\n    Record<\n      Breakpoint,\n      'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5'\n    >\n  >",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'title1'"},{name:"literal",value:"'title2'"},{name:"literal",value:"'title3'"},{name:"literal",value:"'title4'"},{name:"literal",value:"'title5'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'title1'"},{name:"literal",value:"'title2'"},{name:"literal",value:"'title3'"},{name:"literal",value:"'title4'"},{name:"literal",value:"'title5'"}]}],raw:"Record<\n  Breakpoint,\n  'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5'\n>"}],raw:"Partial<\n  Record<\n    Breakpoint,\n    'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5'\n  >\n>"}]},description:""},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:""}}};const Heading_stories={title:"Components/Heading",component:Heading},Default={args:{children:"Heading"}},Responsive={args:{...Default.args,variant:{sm:"display"}}},CustomTag={args:{...Default.args,variant:"title5",as:"h2"}},__namedExportsOrder=["Default","Responsive","CustomTag"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Heading'\n  }\n}",...Default.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: {\n      // xs: 'title4',\n      sm: 'display'\n    }\n  }\n}",...Responsive.parameters?.docs?.source}}},CustomTag.parameters={...CustomTag.parameters,docs:{...CustomTag.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'title5',\n    as: 'h2'\n  }\n}",...CustomTag.parameters?.docs?.source}}}},"./src/utils/getResponsiveValue.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>getResponsiveValue});const getResponsiveValue=(value,breakpoint)=>{if("object"==typeof value){const breakpointsOrder=["xs","sm","md","lg","xl","2xl"];for(let i=breakpointsOrder.indexOf(breakpoint);i>=0;i--)if(value[breakpointsOrder[i]])return value[breakpointsOrder[i]];return value.xs}return value}}}]);