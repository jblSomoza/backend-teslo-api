import{d as c,X as w,j as x,e as i,G as g,f as v,c as y,a as o,Z as l,ac as u,ad as k,ae as M,h as I,k as S,F as V,l as C,W as L,o as F,m as R}from"./index-BUWZTRv7.js";const U={class:"mb-4"},B={class:"mb-4"},N={class:"mb-4 flex items-center"},T={class:"mt-6 text-blue-500 text-center"},A=c({__name:"LoginView",setup(E){const d=L(),p=w(),f=x(),n=i(null),m=i(null),t=g({email:"",password:"",rememberMe:!1}),b=async()=>{var e,a;if(t.email==="")return(e=n.value)==null?void 0:e.focus();if(t.password==="")return(a=m.value)==null?void 0:a.focus();if(t.rememberMe?localStorage.setItem("email",t.email):localStorage.removeItem("email"),await f.login(t.email,t.password))return d.push({name:"home"});p.error("Usuario o contraseña incorrectos")};return v(()=>{const r=localStorage.getItem("email");r&&(t.email=r,t.rememberMe=!0)}),(r,e)=>{const a=C("RouterLink");return F(),y(V,null,[e[10]||(e[10]=o("h1",{class:"text-2xl font-semibold mb-4"},"Login",-1)),o("form",{onSubmit:e[3]||(e[3]=M(s=>b(),["prevent"]))},[o("div",U,[e[4]||(e[4]=o("label",{for:"username",class:"block text-gray-600"},"Correo",-1)),l(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.email=s),ref_key:"emailInput",ref:n,type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.email]])]),o("div",B,[e[5]||(e[5]=o("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1)),l(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.password=s),ref_key:"passwordInput",ref:m,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.password]])]),o("div",N,[l(o("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=s=>t.rememberMe=s),id:"remember",name:"remember",class:"text-blue-500"},null,512),[[k,t.rememberMe]]),e[6]||(e[6]=o("label",{for:"remember",class:"text-gray-600 ml-2"},"Recorda usuario",-1))]),e[7]||(e[7]=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"Forgot Password?")],-1)),e[8]||(e[8]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Login ",-1))],32),o("div",T,[I(a,{to:{name:"register"},class:"hover:underline"},{default:S(()=>e[9]||(e[9]=[R("Sign up Here")])),_:1})])],64)}}});export{A as default};
