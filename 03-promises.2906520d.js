const e=document.querySelector(".form"),t=(document.querySelector("button"),[]);function o(e,o){const n=Math.random()>.3;new Promise(((t,r)=>{setTimeout((()=>{n?t({position:e,delay:o}):r({position:e,delay:o})}),o)})).then((o=>{t[e-1]=o,console.log(t)})).catch((o=>{t[e-1]=o,console.log(t)}))}e.addEventListener("submit",(e=>{e.preventDefault(),console.log(e.type);const{elements:{delay:n,step:r,amount:u}}=e.currentTarget;if(""===n.value||""===r.value||""===u.value)return alert("Заповнить всі поля форми>");const l=n.valueAsNumber,s=r.valueAsNumber,a=u.valueAsNumber;for(let e=1;e<a+1;e+=1)t.push({}),o(e,l+s*(e-1));e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.2906520d.js.map