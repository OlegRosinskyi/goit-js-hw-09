!function(){var e=document.querySelector(".form"),o=(document.querySelector("button"),{delay:delay=0,step:step=0,amount:amount=0}),t=[];function n(e,o){setTimeout((function(){Math.random();new Promise((function(t,n){t({position:e,delay:o})})).then((function(o){console.log(o),t[e-1]=o,console.log(t)}),(function(o){console.log(o),t[e-1]=o,console.log(t)}))}),o)}e.addEventListener("submit",(function(e){e.preventDefault(),console.log(e.type);var u=e.currentTarget.elements,l=u.delay,a=u.step,r=u.amount;if(""===l.value||""===a.value||""===r.value)return alert("Заповнить всі поля форми>");o.delay=l.valueAsNumber,o.step=a.valueAsNumber,o.amount=r.valueAsNumber,console.log(o);for(var s=1;s<o.amount+1;s+=1)t.push({}),n(s,o.delay+o.step*s);e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.c729e819.js.map
