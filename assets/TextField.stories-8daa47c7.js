import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as y}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o=({id:e,name:l,placeholder:s,value:r,onChange:f,type:h="text",label:u})=>n.jsxs("div",{className:"mb-4",children:[u&&n.jsx("label",{htmlFor:e,className:"block text-neuralpulse-dark text-sm font-bold mb-2",children:u}),n.jsx("input",{id:e,name:l,type:h,placeholder:s,value:r,onChange:f,className:"shadow-green-glow-md appearance-none border rounded-sm w-full py-2 px-3 text-neuralpulse-dark leading-tight focus:outline-none focus:ring-2 focus:ring-neuralpulse-accent focus:border-transparent"})]}),x=o;try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Components/TextField",component:x,argTypes:{onChange:{action:"changed"}}},v=e=>{const[l,s]=y.useState(e.value||"");return n.jsx(x,{...e,value:l,onChange:r=>{e.onChange(r),s(r.target.value)}})},a=v.bind({});a.args={id:"default",name:"default",placeholder:"Digite algo...",label:"Campo de Texto Padrão",value:""};const t=v.bind({});t.args={...a.args,id:"error",label:"Campo de Texto com Erro"};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextField {...args} value={value} onChange={e => {
    args.onChange(e);
    setValue(e.target.value);
  }} />;
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextField {...args} value={value} onChange={e => {
    args.onChange(e);
    setValue(e.target.value);
  }} />;
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const _=["Default","WithError"];export{a as Default,t as WithError,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=TextField.stories-8daa47c7.js.map
