import{E as c}from"./Editor-7bf7b2d0.js";import{r as a,o as x,b as f,w as _,f as u,g}from"./index-782ed727.js";const y={__name:"ContentText",props:["componentData"],emits:["update:componentData"],setup(s,{emit:l}){const n=s,i={menubar:!1,plugins:"lists ",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | degButton | supButton | subButton | fontselect fontsizeselect forecolor",entity_encoding:"named",fontsize_formats:"8px 10px 12px 14px 18px 24px 36px",entities:"deg, sup, sub",setup:function(e){e.ui.registry.addButton("degButton",{text:"&deg",onAction:function(t){e.insertContent("&deg")}}),e.ui.registry.addButton("supButton",{text:"Верх",onAction:function(t){e.insertContent("<sup>2</sup> ")}}),e.ui.registry.addButton("subButton",{text:"Низ",onAction:function(t){e.insertContent("<sub>2</sub> ")}})}},p=e=>{const t=r(e);l("update:componentData",{text:t})};function r(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}return(e,t)=>{const d=a("el-input"),m=a("el-form-item");return x(),f(m,{label:"Текст:"},{default:_(()=>[u(d,{modelValue:n.componentData.text,"onUpdate:modelValue":t[0]||(t[0]=o=>n.componentData.text=o),autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"]),u(g(c),{width:"100%",onInput:t[1]||(t[1]=o=>p()),init:i,"output-format":"html",modelValue:n.componentData.text,"onUpdate:modelValue":t[2]||(t[2]=o=>n.componentData.text=o),autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"])]),_:1})}}};export{y as default};
