(()=>{"use strict";const e=e=>{document.querySelector(`${e.getAttribute("href")}`).scrollIntoView({behavior:"smooth",block:"start"})},t=e=>{e.style.visibility="hidden"},n=e=>{e.style.visibility="visible"},r=()=>{const e=document.querySelector(".slider-counter-content__current"),t=document.querySelector(".slider-counter-content__total");let n=0;e.textContent=1,(()=>{const t=document.querySelectorAll(".repair-types-nav__item"),r=document.querySelectorAll(".types-repair");document.body.addEventListener("click",(l=>{let s=l.target;s.matches(".repair-types-nav__item")&&(e.textContent=1,n=0,t.forEach(((e,n)=>{s===e&&(e=>{r.forEach(((n,r)=>{e===r?(t[r].classList.add("active"),n.style.display=""):(t[r].classList.remove("active"),n.style.display="none")}))})(n)})))}))})(),(()=>{const r=document.querySelector("#repair-types-arrow_left"),l=document.querySelector("#repair-types-arrow_right"),s=document.querySelectorAll(".types-repair");t.textContent=s.length,e.textContent=1,s.forEach(((e,t)=>{t!==n&&(e.style.display="none")}));const c=(t,r)=>{t[r].style.display="none",e.textContent=n+1},o=(t,r)=>{t[r].style.display="",e.textContent=n+1};r.addEventListener("click",(()=>{c(s,n),n--,n<0&&(n=s.length-1),o(s,n)})),l.addEventListener("click",(()=>{c(s,n),n++,n>=s.length&&(n=0),o(s,n)}))})(),window.innerWidth<=1024&&(()=>{document.querySelector("#nav-arrow-repair-left_base"),document.querySelector("#nav-arrow-repair-right_base");const e=document.querySelectorAll(".repair-types-nav__item");let t=+getComputedStyle(e[0]).width.slice(0,-2)*e.length;console.dir(t)})()},l=()=>{const e=document.querySelector("#transparency-arrow_left"),t=document.querySelector("#transparency-arrow_right"),n=document.querySelectorAll(".transparency-item");if(window.innerWidth<=1090){let r=0;n.forEach(((e,t)=>{t!==r&&(e.style.display="none")}));const l=(e,t)=>{e[t].style.display="none"},s=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{l(n,r),r--,r<0&&(r=n.length-1),s(n,r)})),t.addEventListener("click",(()=>{l(n,r),r++,r>=n.length&&(r=0),s(n,r)}))}else n.forEach((e=>{e.style.display=""}))};(()=>{const e=document.querySelectorAll('input[name="phone"]');console.log(e),new class{constructor({selector:e,masked:t="+7 (___) ___-__-__"}){this.elems=document.querySelectorAll(e),this.masked=t}mask(e,t){const n=e.keyCode,r=this.masked,l=r.replace(/\D/g,""),s=t.value.replace(/\D/g,"");let c=0,o=r.replace(/[_\d]/g,(e=>c<s.length?s.charAt(c++)||l.charAt(c):e));c=o.indexOf("_"),-1!=c&&(o=o.slice(0,c));let i=r.substr(0,t.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");i=new RegExp("^"+i+"$"),(!i.test(t.value)||t.value.length<5||n>47&&n<58)&&(t.value=o),"blur"==e.type&&t.value.length<5&&(t.value="")}start(){for(const e of this.elems)e.addEventListener("input",(()=>this.mask("input",e))),e.addEventListener("focus",(()=>this.mask("focus",e))),e.addEventListener("blur",(()=>this.mask("blur",e)))}}({selector:'input[name="phone"]',masked:"+7 (___)___-__-__"}).start()})(),r(),(()=>{const e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(r=>{let l=r.target;l.matches(".button_wide")&&n(e),"visible"===e.style.visibility&&(l.matches(".popup-consultation")||l.matches(".close")&&l.closest(".popup-consultation"))&&t(e)}))})(),l(),(()=>{const e=document.querySelector(".popup-transparency");document.querySelectorAll(".transparency-item__img").forEach(((t,r)=>{t.addEventListener("click",(t=>{t.target.matches(".transparency-item__img")&&(n(e),(e=>{const t=document.querySelector("#transparency_left"),n=document.querySelector("#transparency_right"),r=document.querySelectorAll(".popup-transparency-slider__slide");document.querySelector(".slider-counter-content__current"),document.querySelector(".slider-counter-content__total"),r.forEach((e=>{e.style.display=""}));let l=e;r.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const s=(e,t)=>{e[t].style.display="none"},c=(e,t)=>{e[t].style.display=""};t.addEventListener("click",(()=>{s(r,l),l--,l<0&&(l=r.length-1),c(r,l)})),n.addEventListener("click",(()=>{s(r,l),l++,l>=r.length&&(l=0),c(r,l)}))})(r))}))})),document.addEventListener("click",(n=>{let r=n.target;"visible"===e.style.visibility&&(r.matches(".popup-transparency")||r.matches(".close")&&r.closest(".popup-transparency"))&&t(e)}))})(),(()=>{const e=document.querySelector(".popup-privacy");document.body.addEventListener("click",(r=>{let l=r.target;!l.matches(".link-privacy")||"политикой конфиденциальности"!==l.textContent.trim()&&"Политика конфиденциальности"!==l.textContent.trim()||n(e),"visible"===e.style.visibility&&(l.matches(".popup-privacy")||l.matches(".close")&&l.closest(".popup-privacy"))&&t(e)}))})(),(()=>{const e=document.querySelector(".popup-repair-types");document.body.addEventListener("click",(r=>{let l=r.target;"a"===l.tagName.toLowerCase()&&"Полный список услуг и цен"===l.textContent.trim()&&n(e),"visible"===e.style.visibility&&(l.matches(".popup-repair-types")||l.matches(".close")&&l.closest(".popup-repair-types"))&&t(e)}))})(),(()=>{const t=document.querySelector(".popup-menu"),n=()=>{t.style.visibility="",document.head.querySelector(".openMenuStyles").remove()};document.body.addEventListener("click",(r=>{let l=r.target;l.matches(".menu__icon")&&(()=>{t.style.visibility="visible";let e=document.createElement("style");e.classList.add("openMenuStyles"),e.textContent="\n            .popup-dialog-menu {\n                    -webkit-transform: translate3d(0, 0, 0);\n                    transform: translate3d(0, 0, 0);\n                }",document.head.append(e)})(),"visible"===t.style.visibility&&(l.matches(".close-menu")?n():l.matches(".menu-link")?l.closest(".popup-menu-nav__item")?(r.preventDefault(),e(l),n()):l.closest(".link-list-menu")&&(r.preventDefault(),n()):l.matches(".menu__icon")||n())}))})(),(()=>{const t=document.querySelector(".button-footer");t.addEventListener("click",(n=>{n.preventDefault(),e(t.querySelector("a"))}))})(),window.addEventListener("resize",(()=>{l(),r()}))})();