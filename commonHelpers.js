import{f as l,i as f}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();let a=0;const u=document.querySelector("[data-start]"),m=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");u.disabled=!0;l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=t[0];r<Date.now()?(S("Please choose date in the future"),t[0]=Date.now(),u.disabled=!0):(a=r,u.disabled=!1)}});u.addEventListener("click",w);function w(){u.disabled=!0,m.disabled=!0;const t=setInterval(r,1e3);function r(){const n=a-Date.now();if(n<=0){clearInterval(t),b();return}const{days:s,hours:e,minutes:o,seconds:i}=C(n);d(s,e,o,i)}}function d(t,r,n,s){y.textContent=c(t),p.textContent=c(r),h.textContent=c(n),g.textContent=c(s)}function b(){d(0,0,0,0)}function C(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}const c=t=>t.toString().padStart(2,"0");function S(t){f.error({message:t})}
//# sourceMappingURL=commonHelpers.js.map
