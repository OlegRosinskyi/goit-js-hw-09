const e=document.querySelector(".form"),t=(document.querySelector("button"),[]);function o(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}e.addEventListener("submit",(e=>{e.preventDefault(),console.log(e.type);const{elements:{delay:n,step:r,amount:l}}=e.currentTarget;if(""===n.value||""===r.value||""===l.value)return alert("Заповнить всі поля форми>");const s=n.valueAsNumber,u=r.valueAsNumber,a=l.valueAsNumber;for(let e=1;e<a+1;e+=1)t.push({}),o(e,s+u*(e-1)).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}));e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.b132da65.js.map