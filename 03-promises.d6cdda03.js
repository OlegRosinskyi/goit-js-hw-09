document.querySelector(".form"),delay=2e3;const o=step=1e3,e=amount=3,l=[];function n(o,e){setTimeout((()=>{const n=Math.random()>.3;console.log(n),console.log(o);new Promise(((l,n)=>{l(e,o)})).then((e=>{console.log(e),l[o-1].position=e,l[o-1].delay=e,console.log(l)}),(e=>{console.log(e),l[o-1].position=e,l[o-1].delay=e,console.log(l)}))}),e)}for(let s=1;s<e+1;s+=1)l.push({}),n(s,2e3+o*s);
//# sourceMappingURL=03-promises.d6cdda03.js.map
