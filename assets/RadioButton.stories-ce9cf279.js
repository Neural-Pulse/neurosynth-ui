import{j as d}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{R as s}from"./index-9a2a29ee.js";import"./_commonjsHelpers-de833af9.js";const l={title:"Components/RadioButton",component:s},m=n=>{const[t,c]=i.useState(!1);return d.jsx(s,{...n,checked:t,onChange:()=>c(!t)})},e=m.bind({});e.args={id:"radio1",name:"radioGroup",label:"Option 1"};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <RadioButton {...args} checked={checked} onChange={() => setChecked(!checked)} />;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,l as default};
