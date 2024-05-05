import{j as p}from"./jsx-runtime-ffb262ed.js";import{r as v}from"./index-76fb7be0.js";import{T as d}from"./index-35d6879c.js";import"./_commonjsHelpers-de833af9.js";const f={title:"Components/TextField",component:d,argTypes:{onChange:{action:"changed"}}},g=r=>{const[i,m]=v.useState(r.value||"");return p.jsx(d,{...r,value:i,onChange:t=>{r.onChange(t),m(t.target.value)}})},e=g.bind({});e.args={id:"default",name:"default",placeholder:"Digite algo...",label:"Campo de Texto Padrão",value:""};const a=g.bind({});a.args={...e.args,id:"error",label:"Campo de Texto com Erro"};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextField {...args} value={value} onChange={e => {
    args.onChange(e);
    setValue(e.target.value);
  }} />;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextField {...args} value={value} onChange={e => {
    args.onChange(e);
    setValue(e.target.value);
  }} />;
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const E=["Default","WithError"];export{e as Default,a as WithError,E as __namedExportsOrder,f as default};
