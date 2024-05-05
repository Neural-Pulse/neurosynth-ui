import"./chunk-HLWAVYOI-5dd9370e.js";import{M as p}from"./index-563b6734.js";import"./index-1ebacc3f.js";import"./index-d61f4390.js";import"./index-3c477f6d.js";import"./index-a780890c.js";import"./index-1d9022fa.js";import"./index-35d6879c.js";import"./index-91d7aaf1.js";import"./index-2f6646d2.js";import"./index-f78b3814.js";import"./index-ef88ab0a.js";import"./index-0ab004cc.js";import"./index-e983a1dc.js";import"./index-fb80f10a.js";import"./index-75fa3147.js";import"./index-956c34de.js";import"./index-ec717621.js";import"./index-f0f12a53.js";import"./index-979ab710.js";import"./index-19362eac.js";import{R as r}from"./index-9a2a29ee.js";import"./index-4531af7a.js";/* empty css              */import{j as n}from"./jsx-runtime-ffb262ed.js";import{u as a}from"./index-a1cf9e47.js";import"./iframe-d1ce1ee0.js";import"../sb-preview/runtime.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./iconBase-1d38e9b4.js";import"./index.esm-c6caf806.js";function i(t){const o=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},a(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Components/RadioButton",component:r}),`
`,n.jsx(o.h1,{id:"radiobutton",children:"RadioButton"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"RadioButton"})," is a component for selecting a single option from a list of options."]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<RadioButton
  id="option1"
  name="options"
  label="Option 1"
  checked={true}
  onChange={() => {}}
/>

Props
<ArgsTable of={RadioButton} />

import React, { useState } from 'react';

<Canvas>
  <Story name="Default">
    {() => {
      const [selectedOption, setSelectedOption] = useState('option1');

      const handleChange = event => {
        setSelectedOption(event.target.id);
      };

      return (
        <>
          <RadioButton
            id="option1"
            name="options"
            label="Option 1"
            checked={selectedOption === 'option1'}
            onChange={handleChange}
          />
          <RadioButton
            id="option2"
            name="options"
            label="Option 2"
            checked={selectedOption === 'option2'}
            onChange={handleChange}
          />
          <RadioButton
            id="option3"
            name="options"
            label="Option 3"
            checked={selectedOption === 'option3'}
            onChange={handleChange}
          />
        </>
      );
    }}
  </Story>
</Canvas>

This will render three radio buttons labeled "Option 1", "Option 2", and "Option 3". Only one can be selected at a time.


Este documento MDX inclui exemplos de uso do componente \`RadioButton\`, bem como uma tabela de argumentos listando suas props. O exemplo mostra como você pode usar o \`RadioButton\` em um componente React funcional.
`})})]})}function s(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?n.jsx(o,{...t,children:n.jsx(i,{...t})}):i(t)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const e={title:"Components/RadioButton",component:r,tags:["stories-mdx"],includeStories:["__page"]};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:s};const K=["__page"];export{K as __namedExportsOrder,m as __page,e as default};
