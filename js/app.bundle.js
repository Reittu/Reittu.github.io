!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t){!function(){var e=document.getElementById("loader");function t(e){var t,n=e.getBoundingClientRect().top;(e.scrollIntoView(),Math.abs(n)<100)||(n>0?((t=document.getElementById("curve-r")).classList="curve enable-anim",n<250&&(t.classList+=" weak")):((t=document.getElementById("curve-l")).classList="curve enable-anim reverse-anim",n>-250&&(t.classList+=" weak")),setTimeout((function(){return t.classList="curve"}),500))}e.style.opacity="0",setTimeout((function(){return e.style.display="none"}),500),document.querySelectorAll(".nav a").forEach((function(e){return e.addEventListener("click",(function(n){n.preventDefault(),t(document.querySelector(e.hash))}))})),document.querySelector(".btn-cta").onclick=function(){return t(document.getElementById("projects"))},document.addEventListener("click",(function(e){var t=document.createElement("div");t.className="click-effect",t.style.top=e.clientY+"px",t.style.left=e.clientX+"px",document.body.appendChild(t),t.addEventListener("animationend",function(){t.parentElement.removeChild(t)}.bind(this))}))}()},function(e,t){!function(){var e=document.querySelector(".modal"),t=document.querySelector(".modal__close"),n=e.querySelector(".modal__title"),r=e.querySelector(".modal__body"),o=e.querySelector(".modal__footer"),c=document.querySelectorAll(".project"),l=!0,i=!1,a=void 0;try{for(var u,s=c[Symbol.iterator]();!(l=(u=s.next()).done);l=!0)project=u.value,project.addEventListener("click",(function(e){return d(e.target)}))}catch(e){i=!0,a=e}finally{try{l||null==s.return||s.return()}finally{if(i)throw a}}function d(t){var c=t.closest(".project"),l=c.getAttribute("data-keywords").split(" "),i="",a=!0,u=!1,s=void 0;try{for(var d,f=l[Symbol.iterator]();!(a=(d=f.next()).done);a=!0)keyword=d.value,i+='<span class="modal__keyword">'+keyword+"</span> "}catch(e){u=!0,s=e}finally{try{a||null==f.return||f.return()}finally{if(u)throw s}}o.innerHTML=i,n.innerText=c.getAttribute("data-title");for(var y=r.querySelector(".col--left"),m=r.querySelector(".col--right");y.firstChild;)y.removeChild(y.firstChild);for(;m.firstChild;)m.removeChild(m.firstChild);var p=c.getAttribute("data-href-demo"),v=c.getAttribute("data-href-github"),b='\n            <div class="project-links">\n                '.concat(p?'<a href="'+p+'" target="_blank" class="btn-contact project-link"><svg class="icon-mi"><use xlink:href="/svgs/sprite.svg#icon-code"></use></svg> Demo</a>':"","\n                ").concat(v?'<a href="'+v+'" target="_blank" class="btn-contact project-link"><svg class="icon-mi"><use xlink:href="/svgs/sprite.svg#icon-github"></use></svg> GitHub</a>':"","\n            </div>\n                ");y.innerHTML=b+c.querySelector(".project-modal-description").innerHTML;var g=c.querySelector(".project-img").cloneNode(!1);g.style.opacity=1,m.appendChild(g),e.style.display="block"}t.onclick=function(){return e.style.display="none"},e.onclick=function(t){t.target===e&&(e.style.display="none")}}()}]);