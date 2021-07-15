(()=>{"use strict";const e=e=>{e.style.visibility="hidden"},t=()=>{const e=document.querySelector(".popup-menu");let t=document.createElement("style");t.classList.add("openMenuStyles"),t.textContent="\n        .popup-dialog-menu {\n                -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n            }","visible"===e.style.visibility?document.head.append(t):document.head.querySelector(".openMenuStyles").remove()},o=()=>{const e=document.querySelector(".popup-repair-types");let t=[],o=new Set;const l=()=>{document.querySelector(".nav-list-popup-repair").textContent="",document.querySelector(".popup-repair-types-content-table").textContent=""},r=e=>{document.querySelector("#switch-inner").textContent=e};"visible"!==e.style.visibility?l():fetch("../../crm-backend/db.json").then((e=>{if(200!==e.status)throw new Error("status network not 200");return e.json()})).then((e=>{t=e,e.forEach((e=>{o.add(e.type)})),l(),(()=>{const e=document.querySelector(".nav-list-popup-repair");[...o].forEach(((o,l)=>{let n=document.createElement("button");n.classList.add("button_o","popup-repair-types-nav__item"),0===l&&(n.classList.add("active"),r(o)),n.textContent=o,e.append(n),((e,o)=>{const l=document.querySelector(".popup-repair-types-content-table");let r=document.createElement("table");r.classList.add("popup-repair-types-content-table__list");let n=document.createElement("tbody");t.forEach(((t,l)=>{if(e===t.type){let e=document.createElement("tr");e.classList.add("mobile-row"),0===o&&0===l&&e.classList.add("showHide"),e.innerHTML=`\n                        <td class="repair-types-name">${t.name}</td>\n                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n                        <td class="repair-types-value">м<sup>2</sup></td>\n                        <td class="repair-types-value">${t.cost} руб.</td>\n                    `,n.append(e)}r.append(n)})),l.append(r)})(o,l)})),(()=>{const e=document.querySelector(".nav-list-popup-repair").children,t=document.querySelector(".popup-repair-types-content-table").children,o=o=>{[...t].forEach(((t,l)=>{o===l?(e[l].classList.add("active"),t.style.display=""):(e[l].classList.remove("active"),t.style.display="none")}))};document.body.addEventListener("click",(t=>{let l=t.target;l.matches(".popup-repair-types-nav__item")&&[...e].forEach(((e,t)=>{l===e&&(o(t),r(e.textContent))}))})),o(0)})(),window.innerWidth<=1024&&(()=>{const e=document.querySelector("#nav-arrow-popup-repair_left"),t=document.querySelector("#nav-arrow-popup-repair_right"),o=document.querySelectorAll(".popup-repair-types-nav__item");let l=0;o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},n=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(o,l),l--,l<0&&(l=o.length-1),n(o,l)})),t.addEventListener("click",(()=>{r(o,l),l++,l>=o.length&&(l=0),n(o,l)}))})()})()})).catch((e=>console.log(e)))},l=e=>{e.style.visibility="visible"},r=e=>{document.querySelector(`${e.getAttribute("href")}`).scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{const e=document.querySelector(".slider-counter-content__current"),t=document.querySelector(".slider-counter-content__total");let o=0;e.textContent=1,(()=>{const t=document.querySelectorAll(".repair-types-nav__item"),l=document.querySelectorAll(".types-repair");document.body.addEventListener("click",(r=>{let n=r.target;n.matches(".repair-types-nav__item")&&(e.textContent=1,o=0,t.forEach(((e,o)=>{n===e&&(e=>{l.forEach(((o,l)=>{e===l?(t[l].classList.add("active"),o.style.display=""):(t[l].classList.remove("active"),o.style.display="none")}))})(o)})))}))})(),(()=>{const l=document.querySelector("#repair-types-arrow_left"),r=document.querySelector("#repair-types-arrow_right"),n=document.querySelectorAll(".types-repair");t.textContent=n.length,e.textContent=1,n.forEach(((e,t)=>{t!==o&&(e.style.display="none")}));const s=(t,l)=>{t[l].style.display="none",e.textContent=o+1},c=(t,l)=>{t[l].style.display="",e.textContent=o+1};l.addEventListener("click",(()=>{s(n,o),o--,o<0&&(o=n.length-1),c(n,o)})),r.addEventListener("click",(()=>{s(n,o),o++,o>=n.length&&(o=0),c(n,o)}))})(),window.innerWidth<=1024&&(()=>{const e=document.querySelector("#nav-arrow-repair-left_base"),t=document.querySelector("#nav-arrow-repair-right_base"),o=document.querySelector(".repair-types-nav"),l=document.querySelectorAll(".repair-types-nav__item"),r=document.querySelector(".nav-list-repair");let n=0,s=+getComputedStyle(r).width.slice(0,-2)-+getComputedStyle(o).width.slice(0,-2),c=s/l.length;const a=()=>{Math.abs(n)===s?e.style.display="none":0===n?t.style.display="none":(e.style.display="",t.style.display="")};a(),e.addEventListener("click",(()=>{Math.abs(n)<s&&(n-=c,Math.abs(n)>s&&(n=-1*s),r.style.transform=`translateX(${n}px)`,a())})),t.addEventListener("click",(()=>{n<0&&(n+=c,n>0&&(n=0),r.style.transform=`translateX(${n}px)`,a())}))})()},s=()=>{window.innerWidth>575?(()=>{const e=document.querySelector("#portfolio-arrow_left"),t=document.querySelector("#portfolio-arrow_right"),o=document.querySelector(".portfolio-slider"),l=o.querySelectorAll(".portfolio-slider__slide-frame");l.forEach((e=>e.style.transition="all 0.7s ease 0s"));let r=0,n=+getComputedStyle(l[0]).width.slice(0,-2)*l.length/2-+getComputedStyle(o).width.slice(0,-2),s=n/l.length;window.innerWidth<900&&(s=n/l.length/2);const c=()=>{Math.abs(r)===n?t.style.display="none":0===r?e.style.display="none":(t.style.display="",e.style.display="")};c(),t.addEventListener("click",(()=>{Math.abs(r)<n&&(r-=s,Math.abs(r)>n&&(r=-1*n),[...l].every((e=>e.style.transform=`translateX(${r}px)`)),c())})),e.addEventListener("click",(()=>{r<0&&(r+=s,r>0&&(r=0),[...l].every((e=>e.style.transform=`translateX(${r}px)`)),c())}))})():(()=>{const e=document.querySelector("#portfolio-arrow-mobile_left"),t=document.querySelector("#portfolio-arrow-mobile_right"),o=document.querySelector(".portfolio-slider-mobile").querySelectorAll(".portfolio-slider__slide-frame"),l=document.querySelector("#portfolio-counter");let r=l.querySelector(".slider-counter-content__total"),n=l.querySelector(".slider-counter-content__current"),s=0;r.textContent=o.length,n.textContent=s+1;const c=()=>{s===o.length-1?t.style.display="none":0===s?e.style.display="none":(t.style.display="",e.style.display="")};c(),o.forEach(((e,t)=>{t!==s&&(e.style.display="none")}));const a=(e,t)=>{e[t].style.display="none"},i=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{a(o,s),s--,n.textContent=s+1,i(o,s),c()})),t.addEventListener("click",(()=>{a(o,s),s++,n.textContent=s+1,i(o,s),c()}))})()},c=e=>{e.querySelectorAll("input").forEach((e=>{e.value=""})),e.querySelector('input[type="checkbox"]')&&e.querySelectorAll('input[type="checkbox"]').forEach((e=>e.checked=!1))},a=()=>{const e=document.querySelector("#transparency-arrow_left"),t=document.querySelector("#transparency-arrow_right"),o=document.querySelectorAll(".transparency-item");if(window.innerWidth<=1090){let l=0;o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},n=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(o,l),l--,l<0&&(l=o.length-1),n(o,l)})),t.addEventListener("click",(()=>{r(o,l),l++,l>=o.length&&(l=0),n(o,l)}))}else o.forEach((e=>{e.style.display=""}))};(()=>{const e=document.querySelector("#formula-arrow_left"),t=document.querySelector("#formula-arrow_right"),o=document.querySelectorAll(".formula-slider__slide");let l=0;o[l].style.opacity="1";let r=document.createElement("style");r.classList.add("formula-before-element-styles"),r.innerHTML="\n        .formula-slider__slide::before {\n            z-index: 0;\n        }\n    ",document.head.append(r),o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const n=(e,t)=>{e[t].style.display="none",e[t].style.opacity=""},s=(e,t)=>{e[t].style.display="",e[t].style.opacity="1"};e.addEventListener("click",(()=>{n(o,l),l--,l<0&&(l=o.length-1),s(o,l)})),t.addEventListener("click",(()=>{n(o,l),l++,l>=o.length&&(l=0),s(o,l)}))})(),(()=>{const e=document.querySelectorAll(".wrapper_small");let t,o,l=document.createElement("style");l.innerHTML="\n        .formula-item-popup::before {\n            transform: rotate(180deg);\n        }\n        .formula-item-popup {\n            padding-top: 40px;\n        }\n    ";const r=e=>{window.pageYOffset+e.getBoundingClientRect().top<window.pageYOffset?(document.head.append(l),e.style.top="160px"):(l.remove(),e.style.top="")};document.querySelector("#formula").addEventListener("mouseover",(l=>{let n=l.target;n.closest(".formula-item__icon")&&(n.closest(".formula-slider__slide")?(n=n.parentElement,t=e[1].querySelectorAll(".formula-item__icon"),o=e[1].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(o[t].style.visibility="visible",o[t].style.opacity="1")}))):(n=n.parentElement,t=e[0].querySelectorAll(".formula-item__icon"),o=e[0].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(r(o[t]),o[t].style.visibility="visible",o[t].style.opacity="1")}))))})),document.querySelector("#formula").addEventListener("mouseout",(l=>{let n=l.target;n.closest(".formula-item__icon")&&(n.closest(".formula-slider__slide")?(n=n.parentElement,t=e[1].querySelectorAll(".formula-item__icon"),o=e[1].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(r(o[t]),o[t].style.visibility="",o[t].style.opacity="")}))):(n=n.parentElement,t=e[0].querySelectorAll(".formula-item__icon"),o=e[0].querySelectorAll(".formula-item-popup"),t.forEach(((e,t)=>{e===n&&(r(o[t]),o[t].style.visibility="",o[t].style.opacity="")}))))}))})(),(()=>{const t=document.querySelector(".popup-portfolio"),o=document.querySelector(".portfolio-slider"),r=document.querySelector(".portfolio-slider-mobile"),n=document.querySelector("#popup-portfolio-counter"),s=n.querySelector(".slider-counter-content__current"),c=n.querySelector(".slider-counter-content__total");let a;a=window.innerWidth>575?o.querySelectorAll(".portfolio-slider__slide-frame"):r.querySelectorAll(".portfolio-slider__slide-frame");const i=document.querySelectorAll(".popup-portfolio-text"),p=document.querySelectorAll(".popup-portfolio-slider__slide"),d=e=>{p.forEach(((t,o)=>{o===e?(s.textContent=e+1,t.style.display="",i.forEach(((t,o)=>{t.style.display=e===o?"block":"none"}))):t.style.display="none"}))};a.forEach(((e,o)=>{e.addEventListener("click",(e=>{var r;e.target.matches(".portfolio-slider__slide-frame")&&(l(t),r=o,c.textContent=a.length,d(r),(e=>{const t=document.querySelector("#popup_portfolio_left"),o=document.querySelector("#popup_portfolio_right");let l=e;const r=()=>{0===l?t.style.display="none":l===p.length-1?o.style.display="none":(t.style.display="",o.style.display="")};r(),t.addEventListener("click",(()=>{t.style.display="",l--,r(),s.textContent=l+1,d(l)})),o.addEventListener("click",(()=>{o.style.display="",l++,r(),s.textContent=l+1,d(l)}))})(r))}))})),document.addEventListener("click",(o=>{let l=o.target;"visible"===t.style.visibility&&(l.matches(".popup-portfolio")||l.matches(".close")&&l.closest(".popup-portfolio"))&&e(t)}))})(),s(),(()=>{const t=document.createElement("section"),o=document.createElement("section");t.insertAdjacentHTML("beforeend",'\n        <div class="preloader-wrapper">\n            <span class="preloader"></span>\n        </div>       \n    '),o.insertAdjacentHTML("beforeend",'\n        <div class="error-wrapper">\n            <div class="close">\n                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">\n                    <path fill-rule="evenodd" clip-rule="evenodd"\n                    d="M21.673.327a1.118 1.118 0 0 0-1.581 0L11 9.42 1.909.327A1.118 1.118 0 0 0 .327 1.91L9.42 11 .327 20.091a1.118 1.118 0 1 0 1.582 1.581L11 12.582l9.091 9.09a1.118 1.118 0 1 0 1.581-1.58L12.582 11l9.09-9.091a1.118 1.118 0 0 0 0-1.582z"\n                    fill="rgba(255, 255, 255)" fill-opacity=".5"></path>\n                </svg>\n            </div>\n            <span class="error-message">Упс...Что-то пошло не так</span>\n        </div>   \n    ');let r=document.createElement("div");r.classList.add("popup","popup-loader"),document.querySelectorAll("form").forEach((n=>{n.addEventListener("submit",(s=>{s.preventDefault();let a=n.querySelector("button"),i=n.querySelectorAll("input"),p=n.querySelector('input[type="checkbox"]');const d=new FormData(n);let u={};d.forEach(((e,t)=>{u[t]=e})),i.forEach((e=>{e.addEventListener("change",(()=>a.disabled=!1))})),p.addEventListener("change",(()=>p.nextElementSibling.style.border="")),(e=>{for(let t in e)return!!e[t];return!1})(u)?p.checked?(r.textContent="",r.append(t),document.body.append(r),l(r),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(u).then((t=>{if(200!==t.status)throw new Error("status network not 200");e(r),c(n),"visible"===document.querySelector(".popup-consultation").style.visibility&&e(document.querySelector(".popup-consultation"))})).catch((t=>{r.textContent="",r.append(o),(()=>{const t=document.querySelector(".popup-loader");document.body.addEventListener("click",(o=>{let l=o.target;"visible"===t.style.visibility&&(l.matches(".popup-loader")||l.matches(".close")&&l.closest(".popup-loader"))&&e(t)}))})(),c(n),console.log(t)}))):(a.disabled=!0,p.nextElementSibling.style.border="1px solid #ff0000"):a.disabled=!0}))}))})(),document.querySelectorAll(".msg-active").forEach((e=>e.classList.remove("msg-active"))),(()=>{const e=document.querySelector("#reviews-arrow_left"),t=document.querySelector("#reviews-arrow_right"),o=document.querySelectorAll(".reviews-slider__slide");let l=0;o.forEach(((e,t)=>{t!==l&&(e.style.display="none")}));const r=(e,t)=>{e[t].style.display="none"},n=(e,t)=>{e[t].style.display=""};e.addEventListener("click",(()=>{r(o,l),l--,l<0&&(l=o.length-1),n(o,l)})),t.addEventListener("click",(()=>{r(o,l),l++,l>=o.length&&(l=0),n(o,l)}))})(),document.querySelectorAll("input[required]").forEach((e=>e.removeAttribute("required"))),(()=>{const e=document.querySelectorAll('input[name="phone"]');new class{constructor({selector:e,masked:t="+7 (___) ___-__-__"}){this.elems=document.querySelectorAll(e),this.masked=t}mask(e,t){const o=e.keyCode,l=this.masked,r=l.replace(/\D/g,""),n=t.value.replace(/\D/g,"");let s=0,c=l.replace(/[_\d]/g,(e=>s<n.length?n.charAt(s++)||r.charAt(s):e));s=c.indexOf("_"),-1!=s&&(c=c.slice(0,s));let a=l.substr(0,t.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(t.value)||t.value.length<5||o>47&&o<58)&&(t.value=c),"blur"==e.type&&t.value.length<5&&(t.value="")}start(){for(const e of this.elems)e.addEventListener("input",(()=>this.mask("input",e))),e.addEventListener("focus",(()=>this.mask("focus",e))),e.addEventListener("blur",(()=>this.mask("blur",e)))}}({selector:'input[name="phone"]',masked:"+7 (___)___-__-__"}).start(),e.forEach((e=>{e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^0-9\(\)\+\- ]/,""),/^\+7\ \(\d{3}\)\d{3}\-\d{2}\-\d{2}$/.test(e.value)||(e.value=e.value.replace(e.value,"")))}))}))})(),document.querySelectorAll('input[name="name"]').forEach((e=>{e.addEventListener("focus",(()=>e.style.border="")),e.addEventListener("input",(()=>((e,t)=>{let o=/[^а-яё]/i;o.test(e)&&(e.value=e.value.replace(o,""))})(e))),e.addEventListener("blur",(t=>{t.target===e&&(e.value=e.value.replace(/[^а-яё]+/i,""),e.value?e.value=`${e.value.slice(0,1).toUpperCase()}${e.value.slice(1).toLowerCase()}`:e.value=e.value.replace(e.value,""))}))})),n(),a(),(()=>{const t=document.querySelector(".popup-transparency");document.querySelectorAll(".transparency-item__img").forEach(((e,o)=>{e.addEventListener("click",(e=>{e.target.matches(".transparency-item__img")&&(l(t),(e=>{const t=document.querySelector("#transparency_left"),o=document.querySelector("#transparency_right"),l=document.querySelectorAll(".popup-transparency-slider__slide"),r=document.querySelector("#transparency-popup-counter"),n=r.querySelector(".slider-counter-content__current"),s=r.querySelector(".slider-counter-content__total");l.forEach((e=>{e.style.display=""}));let c=e;n.textContent=c+1,s.textContent=l.length,l.forEach(((e,t)=>{t!==c&&(e.style.display="none")}));const a=(e,t)=>{e[t].style.display="none"},i=(e,t)=>{e[t].style.display=""};t.addEventListener("click",(()=>{a(l,c),c--,c<0&&(c=l.length-1),n.textContent=c+1,i(l,c)})),o.addEventListener("click",(()=>{a(l,c),c++,c>=l.length&&(c=0),n.textContent=c+1,i(l,c)}))})(o))}))})),document.addEventListener("click",(o=>{let l=o.target;"visible"===t.style.visibility&&(l.matches(".popup-transparency")||l.matches(".close")&&l.closest(".popup-transparency"))&&e(t)}))})(),(()=>{const t=document.querySelector(".popup-privacy");document.body.addEventListener("click",(o=>{let r=o.target;!r.matches(".link-privacy")||"политикой конфиденциальности"!==r.textContent.trim()&&"Политика конфиденциальности"!==r.textContent.trim()||l(t),"visible"===t.style.visibility&&(r.matches(".popup-privacy")||r.matches(".close")&&r.closest(".popup-privacy"))&&e(t)}))})(),document.body.addEventListener("click",(n=>{let s=n.target;s.matches(".menu__icon")?(l(document.querySelector(".popup-menu")),t()):s.matches(".close-menu")||s.matches(".row")&&s.closest(".popup-dialog-menu")||s.matches(".popup-menu")?(e(document.querySelector(".popup-menu")),t()):s.matches(".menu-link")?s.closest(".popup-menu-nav__item")?(n.preventDefault(),r(s),e(document.querySelector(".popup-menu")),t()):s.closest(".link-list-menu")&&(n.preventDefault(),e(document.querySelector(".popup-menu")),t(),l(document.querySelector(".popup-repair-types")),o()):"a"===s.tagName.toLowerCase()&&"Полный список услуг и цен"===s.textContent.trim()?(l(document.querySelector(".popup-repair-types")),o()):s.matches(".popup-repair-types")||s.matches(".close")&&s.closest(".popup-repair-types")?(e(document.querySelector(".popup-repair-types")),o()):s.matches(".button_wide")?l(document.querySelector(".popup-consultation")):s.matches(".popup-consultation")||s.matches(".close")&&s.closest(".popup-consultation")?e(document.querySelector(".popup-consultation")):s.matches(".title_block")?s.classList.toggle("msg-active"):s.matches(".header-contacts__arrow")||s.closest(".header-contacts__arrow")?(document.querySelector(".header-contacts__arrow").classList.toggle("active"),document.querySelector(".header-contacts__phone-number-accord").classList.toggle("active"),document.querySelectorAll(".header-contacts__phone-number")[1].classList.toggle("active")):s.matches(".popup-thank")||s.matches(".close")&&s.closest(".popup-thank")?e(document.querySelector(".popup-thank")):s.matches(".button-footer")||s.closest(".button-footer")?(n.preventDefault(),r(document.querySelector(".button-footer").firstElementChild)):console.log(s)})),window.addEventListener("resize",(()=>{a(),n(),s()}))})();