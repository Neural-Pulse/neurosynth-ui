import{j as y}from"./jsx-runtime-ffb262ed.js";import{I as g}from"./index-ef88ab0a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const f={title:"Components/IssueCard",component:g,argTypes:{title:{control:"text"},description:{control:"text"},priority:{control:{type:"select",options:["Alta","Média","Baixa"]}},priorityColor:{control:{type:"select",options:["text-red-600","text-yellow-600","text-green-600"]}},dueDate:{control:"date"},status:{control:{type:"select",options:["Aberta","Em progresso","Fechada"]}},statusColor:{control:{type:"select",options:["bg-cyan-blue","bg-yellow-500","bg-dark-gray"]}},type:{control:{type:"select",options:["Bug","Feature","Task"]}}}},o=m=>y.jsx(g,{...m}),e=o.bind({});e.args={title:"Corrigir bug no login",description:"O botão de login não está funcionando em dispositivos móveis.",priority:"Baixa",priorityColor:"text-green-600",dueDate:"2023-04-30",status:"Aberta",statusColor:"bg-cyan-blue",type:"Bug"};const t=o.bind({});t.args={title:"Criar acesso para usuários",description:"Criar acesso para usuários",priority:"Baixa",priorityColor:"text-green-600",dueDate:"2023-04-30",status:"Aberta",statusColor:"bg-cyan-blue",type:"Feature"};const r=o.bind({});r.args={title:"Criar componente de Button",description:"Criar componente de button",priority:"Baixa",priorityColor:"text-green-600",dueDate:"2023-04-30",status:"Aberta",statusColor:"bg-cyan-blue",type:"Task"};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"args => <IssueCard {...args} />",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,p,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"args => <IssueCard {...args} />",...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"args => <IssueCard {...args} />",...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const D=["Default","Feature","Task"];export{e as Default,t as Feature,r as Task,D as __namedExportsOrder,f as default};
