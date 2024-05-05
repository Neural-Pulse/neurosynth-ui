import"./chunk-HLWAVYOI-5dd9370e.js";import{M as p}from"./index-563b6734.js";import"./index-1ebacc3f.js";import"./index-d61f4390.js";import"./index-3c477f6d.js";import"./index-a780890c.js";import"./index-1d9022fa.js";import"./index-35d6879c.js";import"./index-91d7aaf1.js";import"./index-2f6646d2.js";import"./index-f78b3814.js";import"./index-ef88ab0a.js";import"./index-0ab004cc.js";import"./index-e983a1dc.js";import"./index-fb80f10a.js";import"./index-75fa3147.js";import"./index-956c34de.js";import"./index-ec717621.js";import"./index-f0f12a53.js";import"./index-979ab710.js";import"./index-19362eac.js";import"./index-9a2a29ee.js";import{P as s}from"./index-4531af7a.js";/* empty css              */import{j as o}from"./jsx-runtime-ffb262ed.js";import{u as a}from"./index-a1cf9e47.js";import"./iframe-d1ce1ee0.js";import"../sb-preview/runtime.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./iconBase-1d38e9b4.js";import"./index.esm-c6caf806.js";function n(r){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},a(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Components/PasswordField",component:s}),`
`,o.jsx(e.h1,{id:"passwordfield",children:"PasswordField"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"PasswordField"})," is a component for inputting passwords with an option to toggle visibility."]}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`<PasswordField id="user-password" name="password" placeholder="Enter your password" onChange={event => console.log(event.target.value)} />
Props
<ArgsTable of={PasswordField} />
Example
jsx
Copy code
import React, { useState } from 'react';

<Canvas>
  <Story name="Default">
    {() => {
      const [password, setPassword] = useState('');

      const handleChange = event => {
        setPassword(event.target.value);
      };

      return (
        <PasswordField
          id="user-password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
      );
    }}
  </Story>
</Canvas>
`})})]})}function i(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"Components/PasswordField",component:s,tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:i};const K=["__page"];export{K as __namedExportsOrder,m as __page,t as default};
