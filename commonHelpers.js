import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";let u=new Date;const o=document.querySelector("[data-start]"),f=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),w=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");o.disabled=!0;l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(D("Please choose date in the future"),t[0]=new Date,o.disabled=!0):(u=e,o.disabled=!1)}});o.addEventListener("click",C);function C(){o.disabled=!0,f.disabled=!0;const t=setInterval(e,1e3);function e(){const n=u-new Date;if(n<=0){clearInterval(t),S();return}const{days:r,hours:a,minutes:c,seconds:i}=b(n);d(r,a,c,i)}}function d(t,e,n,r){y.textContent=s(t),h.textContent=s(e),w.textContent=s(n),p.textContent=s(r)}function S(){d(0,0,0,0)}function b(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}const s=t=>t.toString().padStart(2,"0");function D(t){m.error({message:t})}
//# sourceMappingURL=commonHelpers.js.map