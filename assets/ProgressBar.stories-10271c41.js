import{j as c}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const n=({progress:e,color:S="neuralpulse-green",label:g,height:q="20px"})=>{const E={width:`${e}%`,backgroundColor:S,height:q};return c.jsxs("div",{children:[g&&c.jsx("span",{children:g})," ",c.jsx("div",{"data-testid":"progress-bar",role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,style:E})]})},C=n;try{n.displayName="ProgressBar",n.__docgenInfo={description:"",displayName:"ProgressBar",props:{progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},color:{defaultValue:{value:"neuralpulse-green"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},height:{defaultValue:{value:"20px"},description:"",name:"height",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Components/ProgressBar",component:C,argTypes:{progress:{control:{type:"range",min:0,max:100}},color:{control:"color"},label:{control:"text"}}},l=e=>c.jsx(C,{...e}),r=l.bind({});r.args={progress:50,label:"Progress",color:"#16a085"};const s=l.bind({});s.args={...r.args,color:"#204a87"};const a=l.bind({});a.args={...r.args,label:"Loading...",color:"#16a085"};const o=l.bind({});o.args={...r.args,progress:100,color:"#16a085"};const t=l.bind({});t.args={...r.args,progress:0,color:"#16a085"};var p,i,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,P;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(P=(m=s.parameters)==null?void 0:m.docs)==null?void 0:P.source}}};var b,y,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,B,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(_=(B=o.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var h,v,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const F=["Default","CustomColor","WithLabel","FullProgress","EmptyProgress"];export{s as CustomColor,r as Default,t as EmptyProgress,o as FullProgress,a as WithLabel,F as __namedExportsOrder,D as default};
