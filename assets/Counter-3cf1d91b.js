import{g as i,h as u,s as l,o as d,a as p,b as e,t as m,u as n}from"./index-7556af46.js";const f="counterStore",x=i({id:f,state:()=>({count:0}),actions:{increment(){this.count++},decrement(){this.count--}}}),_={class:"flex flex-col items-center space-y-2"},b={class:"btn-group flex gap-5"},S=u({__name:"Counter",setup(g){const o=x(),{count:s}=l(o),{decrement:r,increment:a}=o;return(h,t)=>(d(),p("div",_,[e("h1",null,m(n(s)),1),e("div",b,[e("button",{onClick:t[0]||(t[0]=c=>n(a)()),class:"rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600"}," Increment "),e("button",{onClick:t[1]||(t[1]=c=>n(r)()),class:"rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600"}," Decrement ")])]))}});export{S as default};
