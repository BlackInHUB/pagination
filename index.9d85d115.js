!function(){var i=document.querySelector(".pag-container");!function(t,e){if(!(t<=1)){var s='<div class="left-controls-container">\n      <div id="1" class="to-start"></div>\n      <div id="1" class="move-left">...</div>\n  </div>\n  <div class="pag-btns-container">\n  </div>\n  <div class="right-controls-container">\n      <div id='.concat(e+1,' class="move-right">...</div>\n      <div id="" class="to-end"></div>\n  </div>');i.innerHTML=s;var n=document.querySelector(".pag-btns-container"),a=document.querySelector(".move-right"),c=document.querySelector(".move-left"),d=document.querySelector(".to-start"),l=document.querySelector(".to-end");c.classList.add("unvisible"),d.classList.add("unvisible"),n.addEventListener("click",(function(i){var t=document.querySelector(".pag-btn-active");if(i.target.classList.contains("pag-btn-active"))return;i.target.classList.add("pag-btn-active"),t.classList.remove("pag-btn-active")})),a.addEventListener("click",(function(){d.classList.remove("unvisible"),(v+=e)>=2*e&&c.classList.remove("unvisible");v+2*e>r.length&&a.classList.add("unvisible");v+e>r.length&&l.classList.add("unvisible");a.id=parseInt(a.id)+e,c.id=a.id-e,o(r,e,v)})),c.addEventListener("click",(function(){v-=e,a.classList.remove("unvisible"),l.classList.remove("unvisible"),v<=e&&c.classList.add("unvisible");v<=0&&d.classList.add("unvisible");c.id=parseInt(c.id)-e,a.id=parseInt(a.id)-e,o(r,e,v)})),d.addEventListener("click",(function(){v=0,d.classList.add("unvisible"),c.classList.add("unvisible"),l.classList.remove("unvisible"),a.classList.remove("unvisible"),o(r,e,v),a.id=1,c.id=1})),l.addEventListener("click",(function(){v=r.length-e,d.classList.remove("unvisible"),c.classList.remove("unvisible"),l.classList.add("unvisible"),a.classList.add("unvisible"),c.id=parseInt(r.length)-e+1,a.id=parseInt(c.id)+e,o(r,e,v)}));var r=function(i){for(var t=[],e=1;e<=i;e+=1)t.push(e);return t}(t);r.length<=e&&(a.classList.add("unvisible"),l.classList.add("unvisible")),l.id=r.length-e+1,l.textContent="".concat(r.length+1-e,"-").concat(r.length),d.textContent="".concat(r[0],"-").concat(r[e-1]);var v=0;o(r,e,v)}function o(i,t,e){n.innerHTML="";var s=e+t,a=i.slice(e,s).map((function(i){return'<div id="'.concat(i,'" class="pag-btn">').concat(i,"</div>")})).join("");n.innerHTML=a,document.querySelectorAll(".pag-btn")[0].classList.add("pag-btn-active")}}(100,5)}();
//# sourceMappingURL=index.9d85d115.js.map
