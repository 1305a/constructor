import i from"./ActionItem-3bbfbc0c.js";import r from"./ImageItem-ee573089.js";import{a as o,o as s,c as _,b as t,w as a,F as f}from"./index-f4451ba3.js";const V={__name:"ActionButton",props:["button"],setup(e){return(b,n)=>{const l=o("el-input"),m=o("el-form-item"),u=o("el-col");return s(),_(f,null,[t(u,{span:8},{default:a(()=>[t(m,{label:"Текст кнопки:"},{default:a(()=>[t(l,{modelValue:e.button.buttonName,"onUpdate:modelValue":n[0]||(n[0]=c=>e.button.buttonName=c)},null,8,["modelValue"])]),_:1})]),_:1}),t(i,{action:e.button.action},null,8,["action"]),t(r,{image:e.button.image,hideLabel:!0},null,8,["image"])],64)}}};export{V as default};
