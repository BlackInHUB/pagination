const t=document.querySelector(".pag-container");!function(a,s){const i=`<div id="${s}" class="pag-btn move-left">...</div>`,n=`<div id="${s}" class="pag-btn move-right">...</div>`;let e=[];!function(t){for(let a=2;a<=t;a+=1)e.push(a)}(a);const c='<div class="pag-btn to-start">На початок</div>'+i+'<div class="pag-btn unvisible pag-btn-active" data-action="listPage">1</div>'+e.map((t=>`<div class="pag-btn unvisible" data-action="listPage">${t}</div>`)).join("")+n+'<div class="pag-btn to-end">В кінець</div>';t.innerHTML=c;const o=document.querySelectorAll('[data-action="listPage"]');for(let t=0;t<s;t+=1)o[t].classList.remove("unvisible");t.addEventListener("click",(function(t){if(console.log(o),!t.target.classList.contains("pag-btn"))return;if(t.target.classList.contains("pag-btn-active"))return;const a=document.querySelector(".pag-btn-active");if(t.target.classList.contains("to-start")||t.target.classList.contains("move-left")||t.target.classList.contains("move-right")||t.target.classList.contains("to-end"))return;a.classList.remove("pag-btn-active"),t.target.classList.add("pag-btn-active")}));const l=a/s;console.log(l)}(20,5);
//# sourceMappingURL=index.104828d7.js.map
