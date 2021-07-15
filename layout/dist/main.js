(()=>{"use strict";const e=e=>{e.style.visibility="hidden"},t=()=>{const e=document.querySelector(".popup-menu");let t=document.createElement("style");t.classList.add("openMenuStyles"),t.textContent="\n        .popup-dialog-menu {\n                -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n            }","visible"===e.style.visibility?document.head.append(t):document.head.querySelector(".openMenuStyles").remove()},o=()=>{const e=document.querySelector(".popup-repair-types");let t=[],o=new Set;const l=()=>{document.querySelector(".nav-list-popup-repair").textContent="",document.querySelector(".popup-repair-types-content-table").textContent=""},r=e=>{document.querySelector("#switch-inner").textContent=e};"visible"!==e.style.visibility?l():fetch("../../crm-backend/db.json").then((e=>{if(200!==e.status)throw new Error("status network not 200");return e.json()})).then((e=>{t=e,e.forEach((e=>{o.add(e.type)})),l(),(()=>{const e=document.querySelector(".nav-list-popup-repair");[...o].forEach(((o,l)=>{let n=document.createElement("button");n.classList.add("button_o","popup-repair-types-nav__item"),0===l&&(n.classList.add("active"),r(o)),n.textContent=o,e.append(n),((e,o)=>{const l=document.querySelector(".popup-repair-types-content-table");let r=document.createElement("table");r.classList.add("popup-repair-types-content-table__list");let n=document.createElement("tbody");t.forEach(((t,l)=>{if(e===t.type){let e=document.createElement("tr");e.classList.add("mobile-row"),0===o&&0===l&&e.classList.add("showHide"),e.innerHTML=`\n                        <td class="repair-types-name">${t.name}</td>\n                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n                        <td class="repair-types-value">м<sup>2</sup></td>\n                        <td class="repair-types-value">${t.cost} руб.</td>\n                    `,n.append(e)}r.append(n)})),l.append(r)})(o,l)})),(()=>{const e=document.querySelector(".nav-list-popup-repair").children,t=document.querySelector(".popup-repair-types-content-table").children,o=o=>{[...t].forEach(((t,l)=>{o===l?(e[l].classList.add("active"),t.style.display=""):(e[l].classList.remove("active"),t.style.display="none")}))};document.body.addEventListener("click",(t=>{let l=t.target;l.matches(".popup-repair-types-nav__item")&&[...e].forEach(((e,t)=>{l===e&&(o(t),r(e.textContent))}))})),o(0)})(),window.innerWidth<=1024&&(()=>{const e=document.querySelector("#nav-arrow-popup-repair_left"),t=document.querySelector("#nav-arrow-popup-repair_right"),o=document.querySelectorAll(".popup-repair-types-nav__item");let l=0;o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},n=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(o,l),l--,l<0&&(l=o.length-1),n(o,l)})),t.addEventListener("click",(()=>{r(o,l),l++,l>=o.length&&(l=0),n(o,l)}))})()})()})).catch((e=>console.log(e)))},l=e=>{e.style.visibility="visible"},r=e=>{document.querySelector(`${e.getAttribute("href")}`).scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{const e=document.querySelector(".slider-counter-content__current"),t=document.querySelector(".slider-counter-content__total");let o=0;e.textContent=1,(()=>{const t=document.querySelectorAll(".repair-types-nav__item"),l=document.querySelectorAll(".types-repair");document.body.addEventListener("click",(r=>{let n=r.target;n.matches(".repair-types-nav__item")&&(e.textContent=1,o=0,t.forEach(((e,o)=>{n===e&&(e=>{l.forEach(((o,l)=>{e===l?(t[l].classList.add("active"),o.style.display=""):(t[l].classList.remove("active"),o.style.display="none")}))})(o)})))}))})(),(()=>{const l=document.querySelector("#repair-types-arrow_left"),r=document.querySelector("#repair-types-arrow_right"),n=document.querySelectorAll(".types-repair");t.textContent=n.length,e.textContent=1,n.forEach(((e,t)=>{t!==o&&(e.style.display="none")}));const c=(t,l)=>{t[l].style.display="none",e.textContent=o+1},s=(t,l)=>{t[l].style.display="",e.textContent=o+1};l.addEventListener("click",(()=>{c(n,o),o--,o<0&&(o=n.length-1),s(n,o)})),r.addEventListener("click",(()=>{c(n,o),o++,o>=n.length&&(o=0),s(n,o)}))})(),window.innerWidth<=1024&&(()=>{const e=document.querySelector("#nav-arrow-repair-left_base"),t=document.querySelector("#nav-arrow-repair-right_base"),o=document.querySelector(".repair-types-nav"),l=document.querySelectorAll(".repair-types-nav__item"),r=document.querySelector(".nav-list-repair");let n=0,c=+getComputedStyle(r).width.slice(0,-2)-+getComputedStyle(o).width.slice(0,-2),s=c/l.length;const a=()=>{Math.abs(n)===c?e.style.display="none":0===n?t.style.display="none":(e.style.display="",t.style.display="")};a(),e.addEventListener("click",(()=>{Math.abs(n)<c&&(n-=s,Math.abs(n)>c&&(n=-1*c),r.style.transform=`translateX(${n}px)`,a())})),t.addEventListener("click",(()=>{n<0&&(n+=s,n>0&&(n=0),r.style.transform=`translateX(${n}px)`,a())}))})()},c=()=>{window.innerWidth>575?(()=>{const e=document.querySelector("#portfolio-arrow_left"),t=document.querySelector("#portfolio-arrow_right"),o=document.querySelector(".portfolio-slider"),l=o.querySelectorAll(".portfolio-slider__slide-frame");l.forEach((e=>e.style.transition="all 0.7s ease 0s"));let r=0,n=+getComputedStyle(l[0]).width.slice(0,-2)*l.length/2-+getComputedStyle(o).width.slice(0,-2),c=n/l.length;window.innerWidth<900&&(c=n/l.length/2);const s=()=>{Math.abs(r)===n?t.style.display="none":0===r?e.style.display="none":(t.style.display="",e.style.display="")};s(),t.addEventListener("click",(()=>{Math.abs(r)<n&&(r-=c,Math.abs(r)>n&&(r=-1*n),[...l].every((e=>e.style.transform=`translateX(${r}px)`)),s())})),e.addEventListener("click",(()=>{r<0&&(r+=c,r>0&&(r=0),[...l].every((e=>e.style.transform=`translateX(${r}px)`)),s())}))})():(()=>{const e=document.querySelector("#portfolio-arrow-mobile_left"),t=document.querySelector("#portfolio-arrow-mobile_right"),o=document.querySelector(".portfolio-slider-mobile").querySelectorAll(".portfolio-slider__slide-frame"),l=document.querySelector("#portfolio-counter");let r=l.querySelector(".slider-counter-content__total"),n=l.querySelector(".slider-counter-content__current"),c=0;r.textContent=o.length,n.textContent=c+1;const s=()=>{c===o.length-1?t.style.display="none":0===c?e.style.display="none":(t.style.display="",e.style.display="")};s(),o.forEach(((e,t)=>{t!==c&&(e.style.display="none")}));const a=(e,t)=>{e[t].style.display="none"},i=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{a(o,c),c--,n.textContent=c+1,i(o,c),s()})),t.addEventListener("click",(()=>{a(o,c),c++,n.textContent=c+1,i(o,c),s()}))})()},s=e=>{e.querySelectorAll("input").forEach((e=>{e.value=""})),e.querySelector('input[type="checkbox"]')&&e.querySelectorAll('input[type="checkbox"]').forEach((e=>e.checked=!1))},a=()=>{const e=document.querySelector("#transparency-arrow_left"),t=document.querySelector("#transparency-arrow_right"),o=document.querySelectorAll(".transparency-item");if(window.innerWidth<=1090){let l=0;o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},n=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(o,l),l--,l<0&&(l=o.length-1),n(o,l)})),t.addEventListener("click",(()=>{r(o,l),l++,l>=o.length&&(l=0),n(o,l)}))}else o.forEach((e=>{e.style.display=""}))};(()=>{const e=document.querySelector("#formula-arrow_left"),t=document.querySelector("#formula-arrow_right"),o=document.querySelectorAll(".formula-slider__slide");let l=0;o[l].style.opacity="1";let r=document.createElement("style");r.classList.add("formula-before-element-styles"),r.innerHTML="\n        .formula-slider__slide::before {\n            z-index: 0;\n        }\n    ",document.head.append(r),o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const n=(e,t)=>{e[t].style.display="none",e[t].style.opacity=""},c=(e,t)=>{e[t].style.display="",e[t].style.opacity="1"};e.addEventListener("click",(()=>{n(o,l),l--,l<0&&(l=o.length-1),c(o,l)})),t.addEventListener("click",(()=>{n(o,l),l++,l>=o.length&&(l=0),c(o,l)}))})(),(()=>{const e=document.querySelectorAll(".wrapper_small");let t,o,l=document.createElement("style");l.innerHTML="\n        .formula-item-popup::before {\n            transform: rotate(180deg);\n        }\n        .formula-item-popup {\n            padding-top: 40px;\n        }\n    ";const r=e=>{window.pageYOffset+e.getBoundingClientRect().top<window.pageYOffset?(document.head.append(l),e.style.top="160px"):(l.remove(),e.style.top="")};document.querySelector("#formula").addEventListener("mouseover",(l=>{let n=l.target;n.closest(".formula-item__icon")&&(n.closest(".formula-slider__slide")?(n=n.parentElement,t=e[1].querySelectorAll(".formula-item__icon"),o=e[1].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(o[t].style.visibility="visible",o[t].style.opacity="1")}))):(n=n.parentElement,t=e[0].querySelectorAll(".formula-item__icon"),o=e[0].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(r(o[t]),o[t].style.visibility="visible",o[t].style.opacity="1")}))))})),document.querySelector("#formula").addEventListener("mouseout",(l=>{let n=l.target;n.closest(".formula-item__icon")&&(n.closest(".formula-slider__slide")?(n=n.parentElement,t=e[1].querySelectorAll(".formula-item__icon"),o=e[1].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(r(o[t]),o[t].style.visibility="",o[t].style.opacity="")}))):(n=n.parentElement,t=e[0].querySelectorAll(".formula-item__icon"),o=e[0].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(r(o[t]),o[t].style.visibility="",o[t].style.opacity="")}))))}))})(),(()=>{const e=document.querySelector(".popup-portfolio"),t=document.querySelector(".portfolio-slider"),o=document.querySelector(".portfolio-slider-mobile"),r=document.querySelector("#popup-portfolio-counter"),n=r.querySelector(".slider-counter-content__current"),c=r.querySelector(".slider-counter-content__total");let s;s=window.innerWidth>575?t.querySelectorAll(".portfolio-slider__slide-frame"):o.querySelectorAll(".portfolio-slider__slide-frame");const a=document.querySelectorAll(".popup-portfolio-text"),i=document.querySelectorAll(".popup-portfolio-slider__slide"),p=e=>{i.forEach(((t,o)=>{o===e?(n.textContent=e+1,t.style.display="",a.forEach(((t,o)=>{t.style.display=e===o?"block":"none"}))):t.style.display="none"}))};s.forEach(((t,o)=>{t.addEventListener("click",(t=>{var r;t.target.matches(".portfolio-slider__slide-frame")&&(l(e),r=o,c.textContent=s.length,p(r),(e=>{const t=document.querySelector("#popup_portfolio_left"),o=document.querySelector("#popup_portfolio_right");let l=e;const r=()=>{0===l?t.style.display="none":l===i.length-1?o.style.display="none":(t.style.display="",o.style.display="")};r(),t.addEventListener("click",(()=>{t.style.display="",l--,r(),n.textContent=l+1,p(l)})),o.addEventListener("click",(()=>{o.style.display="",l++,r(),n.textContent=l+1,p(l)}))})(r))}))}))})(),c(),(()=>{const t=document.createElement("section"),o=document.createElement("section");t.insertAdjacentHTML("beforeend",'\n        <div class="preloader-wrapper">\n            <span class="preloader"></span>\n        </div>       \n    '),o.insertAdjacentHTML("beforeend",'\n        <div class="error-wrapper">\n            <div class="close">\n                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">\n                    <path fill-rule="evenodd" clip-rule="evenodd"\n                    d="M21.673.327a1.118 1.118 0 0 0-1.581 0L11 9.42 1.909.327A1.118 1.118 0 0 0 .327 1.91L9.42 11 .327 20.091a1.118 1.118 0 1 0 1.582 1.581L11 12.582l9.091 9.09a1.118 1.118 0 1 0 1.581-1.58L12.582 11l9.09-9.091a1.118 1.118 0 0 0 0-1.582z"\n                    fill="rgba(255, 255, 255)" fill-opacity=".5"></path>\n                </svg>\n            </div>\n            <span class="error-message">Упс...Что-то пошло не так</span>\n        </div>   \n    ');let r=document.createElement("div");r.classList.add("popup","popup-loader"),document.querySelectorAll("form").forEach((n=>{n.addEventListener("submit",(c=>{c.preventDefault();let a=n.querySelector("button"),i=n.querySelectorAll("input"),p=n.querySelector('input[type="checkbox"]');const u=new FormData(n);let d={};u.forEach(((e,t)=>{d[t]=e})),i.forEach((e=>{e.addEventListener("change",(()=>a.disabled=!1))})),p.addEventListener("change",(()=>p.nextElementSibling.style.border="")),(e=>{for(let t in e)return!!e[t];return!1})(d)?p.checked?(r.textContent="",r.append(t),document.body.append(r),l(r),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(d).then((t=>{if(200!==t.status)throw new Error("status network not 200");e(r),s(n),"visible"===document.querySelector(".popup-consultation").style.visibility&&e(document.querySelector(".popup-consultation"))})).catch((e=>{r.textContent="",r.append(o),s(n),console.log(e)}))):(a.disabled=!0,p.nextElementSibling.style.border="1px solid #ff0000"):a.disabled=!0}))}))})(),document.querySelectorAll(".msg-active").forEach((e=>e.classList.remove("msg-active"))),(()=>{const e=document.querySelector("#reviews-arrow_left"),t=document.querySelector("#reviews-arrow_right"),o=document.querySelectorAll(".reviews-slider__slide");let l=0;o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},n=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(o,l),l--,l<0&&(l=o.length-1),n(o,l)})),t.addEventListener("click",(()=>{r(o,l),l++,l>=o.length&&(l=0),n(o,l)}))})(),document.querySelectorAll("input[required]").forEach((e=>e.removeAttribute("required"))),(()=>{const e=document.querySelectorAll('input[name="phone"]');new class{constructor({selector:e,masked:t="+7 (___) ___-__-__"}){this.elems=document.querySelectorAll(e),this.masked=t}mask(e,t){const o=e.keyCode,l=this.masked,r=l.replace(/\D/g,""),n=t.value.replace(/\D/g,"");let c=0,s=l.replace(/[_\d]/g,(e=>c<n.length?n.charAt(c++)||r.charAt(c):e));c=s.indexOf("_"),-1!=c&&(s=s.slice(0,c));let a=l.substr(0,t.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(t.value)||t.value.length<5||o>47&&o<58)&&(t.value=s),"blur"==e.type&&t.value.length<5&&(t.value="")}start(){for(const e of this.elems)e.addEventListener("input",(()=>this.mask("input",e))),e.addEventListener("focus",(()=>this.mask("focus",e))),e.addEventListener("blur",(()=>this.mask("blur",e)))}}({selector:'input[name="phone"]',masked:"+7 (___)___-__-__"}).start(),e.forEach((e=>{e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^0-9\(\)\+\- ]/,""),/^\+7\ \(\d{3}\)\d{3}\-\d{2}\-\d{2}$/.test(e.value)||(e.value=e.value.replace(e.value,"")))}))}))})(),document.querySelectorAll('input[name="name"]').forEach((e=>{e.addEventListener("focus",(()=>e.style.border="")),e.addEventListener("input",(()=>((e,t)=>{let o=/[^а-яё]/i;o.test(e)&&(e.value=e.value.replace(o,""))})(e))),e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^а-яё]+/i,""),e.value?e.value=`${e.value.slice(0,1).toUpperCase()}${e.value.slice(1).toLowerCase()}`:e.value=e.value.replace(e.value,""))}))})),n(),a(),(()=>{const e=document.querySelector(".popup-transparency");document.querySelectorAll(".transparency-item__img").forEach(((t,o)=>{t.addEventListener("click",(t=>{t.target.matches(".transparency-item__img")&&(l(e),(e=>{const t=document.querySelector("#transparency_left"),o=document.querySelector("#transparency_right"),l=document.querySelectorAll(".popup-transparency-slider__slide"),r=document.querySelector("#transparency-popup-counter"),n=r.querySelector(".slider-counter-content__current"),c=r.querySelector(".slider-counter-content__total");l.forEach((e=>{e.style.display=""}));let s=e;n.textContent=s+1,c.textContent=l.length,l.forEach(((e,t)=>{t!==s&&(e.style.display="none")}));const a=(e,t)=>{e[t].style.display="none"},i=(e,t)=>{e[t].style.display=""};t.addEventListener("click",(()=>{a(l,s),s--,s<0&&(s=l.length-1),n.textContent=s+1,i(l,s)})),o.addEventListener("click",(()=>{a(l,s),s++,s>=l.length&&(s=0),n.textContent=s+1,i(l,s)}))})(o))}))}))})(),document.body.addEventListener("click",(n=>{let c=n.target;c.matches(".menu__icon")?(l(document.querySelector(".popup-menu")),t()):c.matches(".close-menu")||c.matches(".row")&&c.closest(".popup-dialog-menu")||c.matches(".popup-menu")?(e(document.querySelector(".popup-menu")),t()):c.matches(".menu-link")?c.closest(".popup-menu-nav__item")?(n.preventDefault(),r(c),e(document.querySelector(".popup-menu")),t()):c.closest(".link-list-menu")&&(n.preventDefault(),e(document.querySelector(".popup-menu")),t(),l(document.querySelector(".popup-repair-types")),o()):"a"===c.tagName.toLowerCase()&&"Полный список услуг и цен"===c.textContent.trim()?(l(document.querySelector(".popup-repair-types")),o()):c.matches(".popup-repair-types")||c.matches(".close")&&c.closest(".popup-repair-types")?(e(document.querySelector(".popup-repair-types")),o()):c.matches(".button_wide")?l(document.querySelector(".popup-consultation")):c.matches(".popup-consultation")||c.matches(".close")&&c.closest(".popup-consultation")?e(document.querySelector(".popup-consultation")):c.matches(".title_block")?c.classList.toggle("msg-active"):c.matches(".header-contacts__arrow")||c.closest(".header-contacts__arrow")?(document.querySelector(".header-contacts__arrow").classList.toggle("active"),document.querySelector(".header-contacts__phone-number-accord").classList.toggle("active"),document.querySelectorAll(".header-contacts__phone-number")[1].classList.toggle("active")):c.matches(".popup-thank")||c.matches(".close")&&c.closest(".popup-thank")?e(document.querySelector(".popup-thank")):c.matches(".popup-loader")||c.matches(".close")&&c.closest(".popup-loader")?e(document.querySelector(".popup-loader")):!c.matches(".link-privacy")||"политикой конфиденциальности"!==c.textContent.trim()&&"Политика конфиденциальности"!==c.textContent.trim()?c.matches(".popup-privacy")||c.matches(".close")&&c.closest(".popup-privacy")?e(document.querySelector(".popup-privacy")):c.matches(".popup-transparency")||c.matches(".close")&&c.closest(".popup-transparency")?e(document.querySelector(".popup-transparency")):c.matches(".popup-portfolio")||c.matches(".close")&&c.closest(".popup-portfolio")?e(document.querySelector(".popup-portfolio")):c.matches(".button-footer")||c.closest(".button-footer")?(n.preventDefault(),r(document.querySelector(".button-footer").firstElementChild)):console.log(c):l(document.querySelector(".popup-privacy"))})),window.addEventListener("resize",(()=>{a(),n(),c()}))})();