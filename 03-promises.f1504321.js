const e=document.querySelector(".form"),t=(document.querySelector("button"),{delayF:delayF=0,stepF:stepF=0,amountF:amountF=0}),o=[];function n(e,t){setTimeout((()=>{Math.random();new Promise(((o,n)=>{o({position:e,delay:t})})).then((t=>{o[e-1]=t,console.log(o)}),(t=>{o[e-1]=t,console.log(o)}))}),t)}e.addEventListener("submit",(e=>{e.preventDefault(),console.log(e.type);const{elements:{delay:u,step:l,amount:a}}=e.currentTarget;if(""===u.value||""===l.value||""===a.value)return alert("Заповнить всі поля форми>");t.delayF=u.valueAsNumber,t.stepF=l.valueAsNumber,t.amountF=a.valueAsNumber,console.log(t);for(let e=1;e<t.amountF+1;e+=1)o.push({}),n(e,t.delayF+t.stepF*(e-1));e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.f1504321.js.map
