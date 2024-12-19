"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[300],{"./src/components/Grid/Grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColumnSizes:()=>ColumnSizes,Default:()=>Default,LargeGap:()=>LargeGap,RowAndColumns:()=>RowAndColumns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Grid_stories});var react=__webpack_require__("../../node_modules/react/index.js"),getClassNames=__webpack_require__("./src/utils/getClassNames.ts");const GridBase=(0,react.forwardRef)(((props,ref)=>{const{children,gap="xs",columns="auto",className,style,...restProps}=props,classNames=["canon-grid",(0,getClassNames.Z)({gap,columns,...restProps}),className].filter(Boolean).join(" ");return(0,react.createElement)("div",{ref,className:classNames,style,children})})),GridItem=(0,react.forwardRef)(((props,ref)=>{const{children,className,style,...restProps}=props,classNames=["grid-item",(0,getClassNames.Z)(restProps),className].filter(Boolean).join(" ");return(0,react.createElement)("div",{ref,className:classNames,style,children})})),Grid=Object.assign(GridBase,{Item:GridItem});GridBase.__docgenInfo={description:"",methods:[],displayName:"GridBase",props:{margin:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginBottom:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginLeft:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginRight:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginTop:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginX:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginY:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},padding:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingBottom:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingLeft:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingRight:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingTop:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingX:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingY:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"UtilityProps['columns']",raw:"UtilityProps['columns']"},description:""},gap:{required:!1,tsType:{name:"UtilityProps['gap']",raw:"UtilityProps['gap']"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};var Box=__webpack_require__("./src/components/Box/Box.tsx"),Stack=__webpack_require__("./src/components/Stack/Stack.tsx");const Grid_stories={title:"Components/Grid",component:Grid,argTypes:{children:{control:!1},className:{control:"text"}},args:{gap:"xs"}},FakeBox=()=>react.createElement(Box.a,{borderRadius:"xs",style:{background:"#1f47ff",color:"white",height:"64px"}}),Default={args:{},render:args=>react.createElement(Grid,args,react.createElement(FakeBox,null),react.createElement(FakeBox,null),react.createElement(FakeBox,null))},LargeGap={args:{gap:"lg"},render:args=>react.createElement(Grid,args,react.createElement(FakeBox,null),react.createElement(FakeBox,null),react.createElement(FakeBox,null))},ColumnSizes={args:{columns:12,gap:"md"},render:args=>react.createElement(Stack.B,{gap:"md"},Array.from({length:11},((_,i)=>react.createElement(Grid,{...args,key:i},react.createElement(Grid.Item,{colSpan:i+1},react.createElement(FakeBox,null)),react.createElement(Grid.Item,{colSpan:11-i},react.createElement(FakeBox,null))))))},RowAndColumns={args:{columns:12,gap:"md"},render:args=>react.createElement(Stack.B,{gap:"md"},react.createElement(Grid,{...args,columns:3},react.createElement(Grid.Item,{colSpan:1,rowSpan:2},react.createElement(Box.a,{borderRadius:"xs",style:{background:"#1f47ff",color:"white",height:"100%"}})),react.createElement(Grid.Item,{colSpan:2},react.createElement(FakeBox,null)),react.createElement(Grid.Item,{colSpan:2},react.createElement(FakeBox,null))))},__namedExportsOrder=["Default","LargeGap","ColumnSizes","RowAndColumns"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <Grid {...args}>\n      <FakeBox />\n      <FakeBox />\n      <FakeBox />\n    </Grid>\n}",...Default.parameters?.docs?.source}}},LargeGap.parameters={...LargeGap.parameters,docs:{...LargeGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    gap: 'lg'\n  },\n  render: args => <Grid {...args}>\n      <FakeBox />\n      <FakeBox />\n      <FakeBox />\n    </Grid>\n}",...LargeGap.parameters?.docs?.source}}},ColumnSizes.parameters={...ColumnSizes.parameters,docs:{...ColumnSizes.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns: 12,\n    gap: 'md'\n  },\n  render: args => <Stack gap=\"md\">\n      {Array.from({\n      length: 11\n    }, (_, i) => <Grid {...args} key={i}>\n          <Grid.Item colSpan={i + 1 as GridItemProps['colSpan']}>\n            <FakeBox />\n          </Grid.Item>\n          <Grid.Item colSpan={11 - i as GridItemProps['colSpan']}>\n            <FakeBox />\n          </Grid.Item>\n        </Grid>)}\n    </Stack>\n}",...ColumnSizes.parameters?.docs?.source}}},RowAndColumns.parameters={...RowAndColumns.parameters,docs:{...RowAndColumns.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns: 12,\n    gap: 'md'\n  },\n  render: args => <Stack gap=\"md\">\n      <Grid {...args} columns={3}>\n        <Grid.Item colSpan={1} rowSpan={2}>\n          <Box borderRadius=\"xs\" style={{\n          background: '#1f47ff',\n          color: 'white',\n          height: '100%'\n        }} />\n        </Grid.Item>\n        <Grid.Item colSpan={2}>\n          <FakeBox />\n        </Grid.Item>\n        <Grid.Item colSpan={2}>\n          <FakeBox />\n        </Grid.Item>\n      </Grid>\n    </Stack>\n}",...RowAndColumns.parameters?.docs?.source}}}}}]);