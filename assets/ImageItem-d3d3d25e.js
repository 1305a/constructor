import{H as I,r as L,a as u,o as i,c as V,f as d,w as o,g as v,b as g,d as c,x as f,z as w,F as R,s as U}from"./index-59d51a1e.js";const F={__name:"ImageItem",props:["image","hideLabel","uploadType","folder"],setup(a){const p=a,b=I().params.testId,s=L(null),y=async()=>{var l,t;if(((l=s.value)==null?void 0:l.files.length)===0)return;const r=(t=s.value)==null?void 0:t.files[0];let e=new FormData;e.append("file",r);try{const n=await U.uploadFile(b,e);p.image.imageURL=n.data.data.url}catch(n){console.error(n)}},k=()=>{p.image.imageURL=""};return(r,e)=>{const l=u("el-button"),t=u("el-form-item"),n=u("el-input");return i(),V(R,null,[a.image.imageURL?f("",!0):(i(),d(t,{key:0,label:"Название картинки:"},{default:o(()=>[v("input",{type:"file",accept:".png, .jpg, .jpeg, .gif, .svg, .webp",ref_key:"fileInput",ref:s},null,512),g(l,{onClick:e[0]||(e[0]=m=>y())},{default:o(()=>[c("Загрузить")]),_:1})]),_:1})),a.image.imageURL?(i(),d(t,{key:1,label:"Название картинки:"},{default:o(()=>[c(w(a.image.imageURL),1),g(l,{type:"warning",onClick:e[1]||(e[1]=m=>k(r.index))},{default:o(()=>[c("Очистить")]),_:1})]),_:1})):f("",!0),a.hideLabel?f("",!0):(i(),d(t,{key:2,label:"Подпись картинки:"},{default:o(()=>[g(n,{modelValue:a.image.label,"onUpdate:modelValue":e[2]||(e[2]=m=>a.image.label=m)},null,8,["modelValue"])]),_:1}))],64)}}};export{F as default};
