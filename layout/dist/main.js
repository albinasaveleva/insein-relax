(()=>{"use strict";const e=e=>{document.querySelector(`${e.getAttribute("href")}`).scrollIntoView({behavior:"smooth",block:"start"})},t=e=>{e.style.visibility="hidden"},n=e=>{e.style.visibility="visible"},l=()=>{const e=document.querySelector(".slider-counter-content__current"),t=document.querySelector(".slider-counter-content__total");let n=0;e.textContent=1,(()=>{const t=document.querySelectorAll(".repair-types-nav__item"),l=document.querySelectorAll(".types-repair");document.body.addEventListener("click",(r=>{let c=r.target;c.matches(".repair-types-nav__item")&&(e.textContent=1,n=0,t.forEach(((e,n)=>{c===e&&(e=>{l.forEach(((n,l)=>{e===l?(t[l].classList.add("active"),n.style.display=""):(t[l].classList.remove("active"),n.style.display="none")}))})(n)})))}))})(),(()=>{const l=document.querySelector("#repair-types-arrow_left"),r=document.querySelector("#repair-types-arrow_right"),c=document.querySelectorAll(".types-repair");t.textContent=c.length,e.textContent=1,c.forEach(((e,t)=>{t!==n&&(e.style.display="none")}));const s=(t,l)=>{t[l].style.display="none",e.textContent=n+1},o=(t,l)=>{t[l].style.display="",e.textContent=n+1};l.addEventListener("click",(()=>{s(c,n),n--,n<0&&(n=c.length-1),o(c,n)})),r.addEventListener("click",(()=>{s(c,n),n++,n>=c.length&&(n=0),o(c,n)}))})(),window.innerWidth<=1024&&(()=>{document.querySelector("#nav-arrow-repair-left_base"),document.querySelector("#nav-arrow-repair-right_base");const e=document.querySelectorAll(".repair-types-nav__item");let t=+getComputedStyle(e[0]).width.slice(0,-2)*e.length;console.dir(t)})()},r=()=>{const e=document.querySelector("#transparency-arrow_left"),t=document.querySelector("#transparency-arrow_right"),n=document.querySelectorAll(".transparency-item");if(window.innerWidth<=1090){let l=0;n.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},c=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(n,l),l--,l<0&&(l=n.length-1),c(n,l)})),t.addEventListener("click",(()=>{r(n,l),l++,l>=n.length&&(l=0),c(n,l)}))}else n.forEach((e=>{e.style.display=""}))};(()=>{const e=document.querySelector(".accordion");e.querySelectorAll(".msg-active").forEach((e=>e.classList.remove("msg-active"))),e.addEventListener("click",(e=>{let t=e.target;t.matches(".title_block")&&t.classList.toggle("msg-active")}))})(),(()=>{const e=document.querySelector("#reviews-arrow_left"),t=document.querySelector("#reviews-arrow_right"),n=document.querySelectorAll(".reviews-slider__slide");let l=0;n.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},c=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(n,l),l--,l<0&&(l=n.length-1),c(n,l)})),t.addEventListener("click",(()=>{r(n,l),l++,l>=n.length&&(l=0),c(n,l)}))})(),document.querySelectorAll("input[required]").forEach((e=>e.removeAttribute("required"))),(()=>{const e=document.querySelectorAll('input[name="phone"]');new class{constructor({selector:e,masked:t="+7 (___) ___-__-__"}){this.elems=document.querySelectorAll(e),this.masked=t}mask(e,t){const n=e.keyCode,l=this.masked,r=l.replace(/\D/g,""),c=t.value.replace(/\D/g,"");let s=0,o=l.replace(/[_\d]/g,(e=>s<c.length?c.charAt(s++)||r.charAt(s):e));s=o.indexOf("_"),-1!=s&&(o=o.slice(0,s));let a=l.substr(0,t.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(t.value)||t.value.length<5||n>47&&n<58)&&(t.value=o),"blur"==e.type&&t.value.length<5&&(t.value="")}start(){for(const e of this.elems)e.addEventListener("input",(()=>this.mask("input",e))),e.addEventListener("focus",(()=>this.mask("focus",e))),e.addEventListener("blur",(()=>this.mask("blur",e)))}}({selector:'input[name="phone"]',masked:"+7 (___)___-__-__"}).start(),e.forEach((e=>{e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^0-9\(\)\+\- ]/,""),/^\+7\ \(\d{3}\)\d{3}\-\d{2}\-\d{2}$/.test(e.value)||(e.value=e.value.replace(e.value,"")))}))}))})(),document.querySelectorAll('input[name="name"]').forEach((e=>{e.addEventListener("focus",(()=>e.style.border="")),e.addEventListener("input",(()=>((e,t)=>{let n=/[^а-яё]/i;n.test(e)&&(e.value=e.value.replace(n,""))})(e))),e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^а-яё]+/i,""),e.value?e.value=`${e.value.slice(0,1).toUpperCase()}${e.value.slice(1).toLowerCase()}`:e.value=e.value.replace(e.value,""))}))})),l(),(()=>{const e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(l=>{let r=l.target;r.matches(".button_wide")&&n(e),"visible"===e.style.visibility&&(r.matches(".popup-consultation")||r.matches(".close")&&r.closest(".popup-consultation"))&&t(e)}))})(),r(),(()=>{const e=document.querySelector(".popup-transparency");document.querySelectorAll(".transparency-item__img").forEach(((t,l)=>{t.addEventListener("click",(t=>{t.target.matches(".transparency-item__img")&&(n(e),(e=>{const t=document.querySelector("#transparency_left"),n=document.querySelector("#transparency_right"),l=document.querySelectorAll(".popup-transparency-slider__slide");document.querySelector(".slider-counter-content__current"),document.querySelector(".slider-counter-content__total"),l.forEach((e=>{e.style.display=""}));let r=e;l.forEach(((e,t)=>{t!==r&&(e.style.display="none")}));const c=(e,t)=>{e[t].style.display="none"},s=(e,t)=>{e[t].style.display=""};t.addEventListener("click",(()=>{c(l,r),r--,r<0&&(r=l.length-1),s(l,r)})),n.addEventListener("click",(()=>{c(l,r),r++,r>=l.length&&(r=0),s(l,r)}))})(l))}))})),document.addEventListener("click",(n=>{let l=n.target;"visible"===e.style.visibility&&(l.matches(".popup-transparency")||l.matches(".close")&&l.closest(".popup-transparency"))&&t(e)}))})(),(()=>{const e=document.querySelector(".popup-privacy");document.body.addEventListener("click",(l=>{let r=l.target;!r.matches(".link-privacy")||"политикой конфиденциальности"!==r.textContent.trim()&&"Политика конфиденциальности"!==r.textContent.trim()||n(e),"visible"===e.style.visibility&&(r.matches(".popup-privacy")||r.matches(".close")&&r.closest(".popup-privacy"))&&t(e)}))})(),(()=>{const e=document.querySelector(".popup-repair-types");document.body.addEventListener("click",(l=>{let r=l.target;"a"===r.tagName.toLowerCase()&&"Полный список услуг и цен"===r.textContent.trim()&&n(e),"visible"===e.style.visibility&&(r.matches(".popup-repair-types")||r.matches(".close")&&r.closest(".popup-repair-types"))&&t(e)}))})(),(()=>{const t=document.querySelector(".popup-menu"),n=()=>{t.style.visibility="",document.head.querySelector(".openMenuStyles").remove()};document.body.addEventListener("click",(l=>{let r=l.target;r.matches(".menu__icon")&&(()=>{t.style.visibility="visible";let e=document.createElement("style");e.classList.add("openMenuStyles"),e.textContent="\n            .popup-dialog-menu {\n                    -webkit-transform: translate3d(0, 0, 0);\n                    transform: translate3d(0, 0, 0);\n                }",document.head.append(e)})(),"visible"===t.style.visibility&&(r.matches(".close-menu")?n():r.matches(".menu-link")?r.closest(".popup-menu-nav__item")?(l.preventDefault(),e(r),n()):r.closest(".link-list-menu")&&(l.preventDefault(),n()):r.matches(".menu__icon")||n())}))})(),(()=>{const t=document.querySelector(".button-footer");t.addEventListener("click",(n=>{n.preventDefault(),e(t.querySelector("a"))}))})(),window.addEventListener("resize",(()=>{r(),l()}))})();