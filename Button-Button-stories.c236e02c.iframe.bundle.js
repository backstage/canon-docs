"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[96],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,FullWidth:()=>FullWidth,Primary:()=>Primary,Responsive:()=>Responsive,Sizes:()=>Sizes,Variants:()=>Variants,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),canon=__webpack_require__("./src/contexts/canon.tsx");const Button=(0,react.forwardRef)(((props,ref)=>{const{size="medium",variant="primary",disabled,iconStart,iconEnd,children}=props,{getResponsiveValue}=(0,canon.T)(),responsiveSize=getResponsiveValue(size),responsiveVariant=getResponsiveValue(variant);return react.createElement("button",{...props,ref,disabled,className:["cn-button",`cn-button-${responsiveSize}`,`cn-button-${responsiveVariant}`].join(" ")},react.createElement("span",{className:["cn-button-content",iconStart&&iconEnd?"cn-button-content-icon-both":""].filter(Boolean).join(" ")},iconStart&&react.createElement(Icon.I,{name:iconStart}),children),iconEnd&&react.createElement(Icon.I,{name:iconEnd}))}));Button.__docgenInfo={description:"@public",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | Partial<Record<Breakpoint, 'small' | 'medium'>>",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Record<Breakpoint, 'small' | 'medium'>"}],raw:"Partial<Record<Breakpoint, 'small' | 'medium'>>"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"| 'primary'\n| 'secondary'\n| 'tertiary'\n| Partial<Record<Breakpoint, 'primary' | 'secondary' | 'tertiary'>>",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]}],raw:"Record<Breakpoint, 'primary' | 'secondary' | 'tertiary'>"}],raw:"Partial<Record<Breakpoint, 'primary' | 'secondary' | 'tertiary'>>"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},iconStart:{required:!1,tsType:{name:"union",raw:"| 'arrowDown'\n| 'arrowLeft'\n| 'arrowRight'\n| 'arrowUp'\n| 'arrowDownCircle'\n| 'arrowLeftCircle'\n| 'arrowRightCircle'\n| 'arrowUpCircle'\n| 'check'\n| 'chevronDown'\n| 'chevronLeft'\n| 'chevronRight'\n| 'chevronUp'\n| 'cloud'\n| 'heart'\n| 'plus'\n| 'trash'",elements:[{name:"literal",value:"'arrowDown'"},{name:"literal",value:"'arrowLeft'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'arrowUp'"},{name:"literal",value:"'arrowDownCircle'"},{name:"literal",value:"'arrowLeftCircle'"},{name:"literal",value:"'arrowRightCircle'"},{name:"literal",value:"'arrowUpCircle'"},{name:"literal",value:"'check'"},{name:"literal",value:"'chevronDown'"},{name:"literal",value:"'chevronLeft'"},{name:"literal",value:"'chevronRight'"},{name:"literal",value:"'chevronUp'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'trash'"}]},description:""},iconEnd:{required:!1,tsType:{name:"union",raw:"| 'arrowDown'\n| 'arrowLeft'\n| 'arrowRight'\n| 'arrowUp'\n| 'arrowDownCircle'\n| 'arrowLeftCircle'\n| 'arrowRightCircle'\n| 'arrowUpCircle'\n| 'check'\n| 'chevronDown'\n| 'chevronLeft'\n| 'chevronRight'\n| 'chevronUp'\n| 'cloud'\n| 'heart'\n| 'plus'\n| 'trash'",elements:[{name:"literal",value:"'arrowDown'"},{name:"literal",value:"'arrowLeft'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'arrowUp'"},{name:"literal",value:"'arrowDownCircle'"},{name:"literal",value:"'arrowLeftCircle'"},{name:"literal",value:"'arrowRightCircle'"},{name:"literal",value:"'arrowUpCircle'"},{name:"literal",value:"'check'"},{name:"literal",value:"'chevronDown'"},{name:"literal",value:"'chevronLeft'"},{name:"literal",value:"'chevronRight'"},{name:"literal",value:"'chevronUp'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'trash'"}]},description:""}}};var Inline=__webpack_require__("./src/components/Inline/Inline.tsx"),Stack=__webpack_require__("./src/components/Stack/Stack.tsx");const Button_stories={title:"Components/Button",component:Button,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium"]}},args:{size:"medium"}},Primary={args:{children:"Primary button"}},Variants={args:{children:"Button"},parameters:{argTypes:{variant:{control:!1}}},render:()=>react.createElement(Inline.c,{alignY:"center"},react.createElement(Button,{variant:"primary"},"Primary"),react.createElement(Button,{variant:"secondary"},"Secondary"),react.createElement(Button,{variant:"tertiary"},"Tertiary"))},Sizes={args:{children:"Button"},render:()=>react.createElement(Inline.c,{alignY:"center"},react.createElement(Button,{size:"medium"},"Medium"),react.createElement(Button,{size:"small"},"Small"))},WithIcons={args:{children:"Button"},render:args=>react.createElement(Inline.c,{alignY:"center"},react.createElement(Button,{...args,iconStart:"cloud"}),react.createElement(Button,{...args,iconEnd:"chevronRight"}),react.createElement(Button,{...args,iconStart:"cloud",iconEnd:"chevronRight"}))},FullWidth={args:{children:"Button"},render:args=>react.createElement(Stack.B,{style:{width:"300px"}},react.createElement(Button,{...args,iconStart:"cloud"}),react.createElement(Button,{...args,iconEnd:"chevronRight"}),react.createElement(Button,{...args,iconStart:"cloud",iconEnd:"chevronRight"}))},Disabled={args:{children:"Button",disabled:!0}},Responsive={args:{children:"Button",variant:{xs:"primary",sm:"secondary",md:"tertiary"},size:{xs:"small",sm:"medium"}}},__namedExportsOrder=["Primary","Variants","Sizes","WithIcons","FullWidth","Disabled","Responsive"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Primary button'\n  }\n}",...Primary.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'Button\'\n  },\n  parameters: {\n    argTypes: {\n      variant: {\n        control: false\n      }\n    }\n  },\n  render: () => <Inline alignY="center">\n      <Button variant="primary">Primary</Button>\n      <Button variant="secondary">Secondary</Button>\n      <Button variant="tertiary">Tertiary</Button>\n    </Inline>\n}',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <Inline alignY="center">\n      <Button size="medium">Medium</Button>\n      <Button size="small">Small</Button>\n    </Inline>\n}',...Sizes.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'Button\'\n  },\n  render: args => <Inline alignY="center">\n      <Button {...args} iconStart="cloud" />\n      <Button {...args} iconEnd="chevronRight" />\n      <Button {...args} iconStart="cloud" iconEnd="chevronRight" />\n    </Inline>\n}',...WithIcons.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'Button\'\n  },\n  render: args => <Stack style={{\n    width: \'300px\'\n  }}>\n      <Button {...args} iconStart="cloud" />\n      <Button {...args} iconEnd="chevronRight" />\n      <Button {...args} iconStart="cloud" iconEnd="chevronRight" />\n    </Stack>\n}',...FullWidth.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: {\n      xs: 'primary',\n      sm: 'secondary',\n      md: 'tertiary'\n    },\n    size: {\n      xs: 'small',\n      sm: 'medium'\n    }\n  }\n}",...Responsive.parameters?.docs?.source}}}},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_contexts_canon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/canon.tsx");const Icon=props=>{const{name,size=16}=props,{icons}=(0,_contexts_canon__WEBPACK_IMPORTED_MODULE_1__.T)(),RemixIcon=icons[name];return RemixIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixIcon,{className:`icon-${size}`}):(console.error(`Icon "${name}" not found or is not a valid component.`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",null))};Icon.__docgenInfo={description:"@public",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"| 'arrowDown'\n| 'arrowLeft'\n| 'arrowRight'\n| 'arrowUp'\n| 'arrowDownCircle'\n| 'arrowLeftCircle'\n| 'arrowRightCircle'\n| 'arrowUpCircle'\n| 'check'\n| 'chevronDown'\n| 'chevronLeft'\n| 'chevronRight'\n| 'chevronUp'\n| 'cloud'\n| 'heart'\n| 'plus'\n| 'trash'",elements:[{name:"literal",value:"'arrowDown'"},{name:"literal",value:"'arrowLeft'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'arrowUp'"},{name:"literal",value:"'arrowDownCircle'"},{name:"literal",value:"'arrowLeftCircle'"},{name:"literal",value:"'arrowRightCircle'"},{name:"literal",value:"'arrowUpCircle'"},{name:"literal",value:"'check'"},{name:"literal",value:"'chevronDown'"},{name:"literal",value:"'chevronLeft'"},{name:"literal",value:"'chevronRight'"},{name:"literal",value:"'chevronUp'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'trash'"}]},description:""},size:{required:!1,tsType:{name:"number"},description:""}}}}}]);