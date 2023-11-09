import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const a=({isOpen:s,onClose:r,title:n,children:c})=>s?e.jsx("div",{className:"fixed inset-0  bg-opacity-50 flex justify-center items-center",children:e.jsxs("div",{className:"bg-neuralpulse-light-gray p-6 rounded-lg shadow-green-glow-md",children:[e.jsx("button",{className:"text-neuralpulse-dark",onClick:r,children:"X"}),e.jsx("h2",{className:"text-neuralpulse-accent font-bold text-lg",children:n}),e.jsx("div",{className:"text-neuralpulse-dark",children:c})]})}):null,d=a;try{a.displayName="Modal",a.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const g={title:"Components/Modal",component:d},u=s=>{const[r,n]=p.useState(!0);return e.jsx(d,{...s,isOpen:r,onClose:()=>n(!1)})},t=u.bind({});t.args={title:"Modal Title",children:e.jsx("p",{children:"This is a modal component using the custom Tailwind colors."})};var o,l,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(true);
  return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,g as default};
//# sourceMappingURL=Modal.stories-f5403663.js.map
