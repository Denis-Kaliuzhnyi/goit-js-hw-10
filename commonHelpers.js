(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();flatpickr("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1});const l=document.getElementById("start-button"),d=document.getElementById("days"),a=document.getElementById("hours"),m=document.getElementById("minutes"),f=document.getElementById("seconds");let u;function p(){const o=new Date,n=new Date(document.getElementById("datetime-picker").value)-o;if(n<=0){clearInterval(u),iziToast.error({title:"Error",message:"Time is up!"});return}const c=Math.floor(n/1e3%60),e=Math.floor(n/1e3/60%60),t=Math.floor(n/1e3/60/60%24),r=Math.floor(n/1e3/60/60/24);d.textContent=i(r),a.textContent=i(t),m.textContent=i(e),f.textContent=i(c)}function i(o){return o<10?`0${o}`:o}l.addEventListener("click",function(){u=setInterval(p,1e3)});
//# sourceMappingURL=commonHelpers.js.map
