(()=>{"use strict";const e=e=>{document.querySelector(`${e.getAttribute("href")}`).scrollIntoView({behavior:"smooth",block:"start"})},t=e=>{e.style.visibility="hidden"},n=e=>{e.style.visibility="visible"},r=()=>{const e=document.querySelector(".slider-counter-content__current"),t=document.querySelector(".slider-counter-content__total");let n=0;e.textContent=1,(()=>{const t=document.querySelectorAll(".repair-types-nav__item"),r=document.querySelectorAll(".types-repair");document.body.addEventListener("click",(l=>{let o=l.target;o.matches(".repair-types-nav__item")&&(e.textContent=1,n=0,t.forEach(((e,n)=>{o===e&&(e=>{r.forEach(((n,r)=>{e===r?(t[r].classList.add("active"),n.style.display=""):(t[r].classList.remove("active"),n.style.display="none")}))})(n)})))}))})(),(()=>{const r=document.querySelector("#repair-types-arrow_left"),l=document.querySelector("#repair-types-arrow_right"),o=document.querySelectorAll(".types-repair");t.textContent=o.length,e.textContent=1,o.forEach(((e,t)=>{t!==n&&(e.style.display="none")}));const c=(t,r)=>{t[r].style.display="none",e.textContent=n+1},s=(t,r)=>{t[r].style.display="",e.textContent=n+1};r.addEventListener("click",(()=>{c(o,n),n--,n<0&&(n=o.length-1),s(o,n)})),l.addEventListener("click",(()=>{c(o,n),n++,n>=o.length&&(n=0),s(o,n)}))})(),window.innerWidth<=1024&&(()=>{document.querySelector("#nav-arrow-repair-left_base"),document.querySelector("#nav-arrow-repair-right_base");const e=document.querySelectorAll(".repair-types-nav__item");let t=+getComputedStyle(e[0]).width.slice(0,-2)*e.length;console.dir(t)})()},l=e=>{e.querySelectorAll("input").forEach((e=>{e.value=""})),e.querySelector('input[type="checkbox"]')&&e.querySelectorAll('input[type="checkbox"]').forEach((e=>e.checked=!1))},o=()=>{const e=document.querySelector("#transparency-arrow_left"),t=document.querySelector("#transparency-arrow_right"),n=document.querySelectorAll(".transparency-item");if(window.innerWidth<=1090){let r=0;n.forEach(((e,t)=>{t!==r&&(e.style.display="none")}));const l=(e,t)=>{e[t].style.display="none"},o=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{l(n,r),r--,r<0&&(r=n.length-1),o(n,r)})),t.addEventListener("click",(()=>{l(n,r),r++,r>=n.length&&(r=0),o(n,r)}))}else n.forEach((e=>{e.style.display=""}))};(()=>{const e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number");e.addEventListener("click",(()=>{e.classList.toggle("active"),n.classList.toggle("active"),t.classList.toggle("active")}))})(),(()=>{const e=document.createElement("section"),r=document.createElement("section");e.insertAdjacentHTML("beforeend",'\n        <div class="preloader-wrapper">\n            <span class="preloader"></span>\n        </div>       \n    '),r.insertAdjacentHTML("beforeend",'\n        <div class="error-wrapper">\n            <div class="close">\n                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">\n                    <path fill-rule="evenodd" clip-rule="evenodd"\n                    d="M21.673.327a1.118 1.118 0 0 0-1.581 0L11 9.42 1.909.327A1.118 1.118 0 0 0 .327 1.91L9.42 11 .327 20.091a1.118 1.118 0 1 0 1.582 1.581L11 12.582l9.091 9.09a1.118 1.118 0 1 0 1.581-1.58L12.582 11l9.09-9.091a1.118 1.118 0 0 0 0-1.582z"\n                    fill="rgba(255, 255, 255)" fill-opacity=".5"></path>\n                </svg>\n            </div>\n            <span class="error-message">Упс...Что-то пошло не так</span>\n        </div>   \n    ');let o=document.createElement("div");o.classList.add("popup","popup-loader"),document.querySelectorAll("form").forEach((c=>{c.addEventListener("submit",(s=>{s.preventDefault();let a=c.querySelector("button"),i=c.querySelectorAll("input"),d=c.querySelector('input[type="checkbox"]');const p=new FormData(c);let u={};p.forEach(((e,t)=>{u[t]=e})),i.forEach((e=>{e.addEventListener("change",(()=>a.disabled=!1))})),d.addEventListener("change",(()=>d.nextElementSibling.style.border="")),(e=>{for(let t in e)return!!e[t];return!1})(u)?d.checked?(o.textContent="",o.append(e),document.body.append(o),n(o),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(u).then((e=>{if(200!==e.status)throw new Error("status network not 200");t(o),(()=>{const e=document.querySelector(".popup-thank");n(e),document.body.addEventListener("click",(n=>{let r=n.target;"visible"===e.style.visibility&&(r.matches(".popup-thank")||r.matches(".close")&&r.closest(".popup-thank"))&&t(e)}))})(),l(c),"visible"===document.querySelector(".popup-consultation").style.visibility&&t(document.querySelector(".popup-consultation"))})).catch((e=>{o.textContent="",o.append(r),(()=>{const e=document.querySelector(".popup-loader");document.body.addEventListener("click",(n=>{let r=n.target;"visible"===e.style.visibility&&(r.matches(".popup-loader")||r.matches(".close")&&r.closest(".popup-loader"))&&t(e)}))})(),l(c),console.log(e)}))):(a.disabled=!0,d.nextElementSibling.style.border="1px solid #ff0000"):a.disabled=!0}))}))})(),(()=>{const e=document.querySelector(".accordion");e.querySelectorAll(".msg-active").forEach((e=>e.classList.remove("msg-active"))),e.addEventListener("click",(e=>{let t=e.target;t.matches(".title_block")&&t.classList.toggle("msg-active")}))})(),(()=>{const e=document.querySelector("#reviews-arrow_left"),t=document.querySelector("#reviews-arrow_right"),n=document.querySelectorAll(".reviews-slider__slide");let r=0;n.forEach(((e,t)=>{t!==r&&(e.style.display="none")}));const l=(e,t)=>{e[t].style.display="none"},o=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{l(n,r),r--,r<0&&(r=n.length-1),o(n,r)})),t.addEventListener("click",(()=>{l(n,r),r++,r>=n.length&&(r=0),o(n,r)}))})(),document.querySelectorAll("input[required]").forEach((e=>e.removeAttribute("required"))),(()=>{const e=document.querySelectorAll('input[name="phone"]');new class{constructor({selector:e,masked:t="+7 (___) ___-__-__"}){this.elems=document.querySelectorAll(e),this.masked=t}mask(e,t){const n=e.keyCode,r=this.masked,l=r.replace(/\D/g,""),o=t.value.replace(/\D/g,"");let c=0,s=r.replace(/[_\d]/g,(e=>c<o.length?o.charAt(c++)||l.charAt(c):e));c=s.indexOf("_"),-1!=c&&(s=s.slice(0,c));let a=r.substr(0,t.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(t.value)||t.value.length<5||n>47&&n<58)&&(t.value=s),"blur"==e.type&&t.value.length<5&&(t.value="")}start(){for(const e of this.elems)e.addEventListener("input",(()=>this.mask("input",e))),e.addEventListener("focus",(()=>this.mask("focus",e))),e.addEventListener("blur",(()=>this.mask("blur",e)))}}({selector:'input[name="phone"]',masked:"+7 (___)___-__-__"}).start(),e.forEach((e=>{e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^0-9\(\)\+\- ]/,""),/^\+7\ \(\d{3}\)\d{3}\-\d{2}\-\d{2}$/.test(e.value)||(e.value=e.value.replace(e.value,"")))}))}))})(),document.querySelectorAll('input[name="name"]').forEach((e=>{e.addEventListener("focus",(()=>e.style.border="")),e.addEventListener("input",(()=>((e,t)=>{let n=/[^а-яё]/i;n.test(e)&&(e.value=e.value.replace(n,""))})(e))),e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^а-яё]+/i,""),e.value?e.value=`${e.value.slice(0,1).toUpperCase()}${e.value.slice(1).toLowerCase()}`:e.value=e.value.replace(e.value,""))}))})),r(),(()=>{const e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(r=>{let l=r.target;l.matches(".button_wide")&&n(e),"visible"===e.style.visibility&&(l.matches(".popup-consultation")||l.matches(".close")&&l.closest(".popup-consultation"))&&t(e)}))})(),o(),(()=>{const e=document.querySelector(".popup-transparency");document.querySelectorAll(".transparency-item__img").forEach(((t,r)=>{t.addEventListener("click",(t=>{t.target.matches(".transparency-item__img")&&(n(e),(e=>{const t=document.querySelector("#transparency_left"),n=document.querySelector("#transparency_right"),r=document.querySelectorAll(".popup-transparency-slider__slide");document.querySelector(".slider-counter-content__current"),document.querySelector(".slider-counter-content__total"),r.forEach((e=>{e.style.display=""}));let l=e;r.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const o=(e,t)=>{e[t].style.display="none"},c=(e,t)=>{e[t].style.display=""};t.addEventListener("click",(()=>{o(r,l),l--,l<0&&(l=r.length-1),c(r,l)})),n.addEventListener("click",(()=>{o(r,l),l++,l>=r.length&&(l=0),c(r,l)}))})(r))}))})),document.addEventListener("click",(n=>{let r=n.target;"visible"===e.style.visibility&&(r.matches(".popup-transparency")||r.matches(".close")&&r.closest(".popup-transparency"))&&t(e)}))})(),(()=>{const e=document.querySelector(".popup-privacy");document.body.addEventListener("click",(r=>{let l=r.target;!l.matches(".link-privacy")||"политикой конфиденциальности"!==l.textContent.trim()&&"Политика конфиденциальности"!==l.textContent.trim()||n(e),"visible"===e.style.visibility&&(l.matches(".popup-privacy")||l.matches(".close")&&l.closest(".popup-privacy"))&&t(e)}))})(),(()=>{const e=document.querySelector(".popup-repair-types");let r=[],l=new Set;const o=e=>{document.querySelector("#switch-inner").textContent=e},c=()=>{(()=>{const e=document.querySelector(".nav-list-popup-repair");[...l].forEach(((t,n)=>{let l=document.createElement("button");l.classList.add("button_o","popup-repair-types-nav__item"),0===n&&(l.classList.add("active"),o(t)),l.textContent=t,e.append(l),((e,t)=>{const n=document.querySelector(".popup-repair-types-content-table");let l=document.createElement("table");l.classList.add("popup-repair-types-content-table__list");let o=document.createElement("tbody");r.forEach(((n,r)=>{if(e===n.type){let e=document.createElement("tr");e.classList.add("mobile-row"),0===t&&0===r&&e.classList.add("showHide"),e.innerHTML=`\n                        <td class="repair-types-name">${n.name}</td>\n                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n                        <td class="repair-types-value">м<sup>2</sup></td>\n                        <td class="repair-types-value">${n.cost} руб.</td>\n                    `,o.append(e)}l.append(o)})),n.append(l)})(t,n)})),(()=>{const e=document.querySelector(".nav-list-popup-repair").children,t=document.querySelector(".popup-repair-types-content-table").children,n=n=>{[...t].forEach(((t,r)=>{n===r?(e[r].classList.add("active"),t.style.display=""):(e[r].classList.remove("active"),t.style.display="none")}))};document.body.addEventListener("click",(t=>{let r=t.target;r.matches(".popup-repair-types-nav__item")&&[...e].forEach(((e,t)=>{r===e&&(n(t),o(e.textContent))}))})),n(0)})()})()};document.body.addEventListener("click",(o=>{let s=o.target;var a;"a"===s.tagName.toLowerCase()&&"Полный список услуг и цен"===s.textContent.trim()&&(a=c,fetch("../../crm-backend/db.json").then((e=>{if(200!==e.status)throw new Error("status network not 200");return e.json()})).then((e=>{r=e,e.forEach((e=>{l.add(e.type)})),a()})).catch((e=>console.log(e))),n(e)),"visible"===e.style.visibility&&(s.matches(".popup-repair-types")||s.matches(".close")&&s.closest(".popup-repair-types"))&&(t(e),document.querySelector(".nav-list-popup-repair").textContent="",document.querySelector(".popup-repair-types-content-table").textContent="")}))})(),(()=>{const t=document.querySelector(".popup-menu"),n=()=>{t.style.visibility="",document.head.querySelector(".openMenuStyles").remove()};document.body.addEventListener("click",(r=>{let l=r.target;l.matches(".menu__icon")&&(()=>{t.style.visibility="visible";let e=document.createElement("style");e.classList.add("openMenuStyles"),e.textContent="\n            .popup-dialog-menu {\n                    -webkit-transform: translate3d(0, 0, 0);\n                    transform: translate3d(0, 0, 0);\n                }",document.head.append(e)})(),"visible"===t.style.visibility&&(l.matches(".close-menu")?n():l.matches(".menu-link")?l.closest(".popup-menu-nav__item")?(r.preventDefault(),e(l),n()):l.closest(".link-list-menu")&&(r.preventDefault(),n()):l.matches(".menu__icon")||n())}))})(),(()=>{const t=document.querySelector(".button-footer");t.addEventListener("click",(n=>{n.preventDefault(),e(t.querySelector("a"))}))})(),window.addEventListener("resize",(()=>{o(),r()}))})();