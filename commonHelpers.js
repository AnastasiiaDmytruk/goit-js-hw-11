import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="33291155-7539ac0bf1c0d1be65bb6c22f";function p(s){const t=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function h(s){return s.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:a,downloads:d})=>`<div class="photo-card">
     <a class="photo-card__link" href="${o}"> <img src="${t}" alt="${n}" loading="lazy" /></a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>${e}
        </p>
        <p class="info-item">
          <b>Views</b>${r}
        </p>
        <p class="info-item">
          <b>Comments</b>${a}
        </p>
        <p class="info-item">
          <b>Downloads</b>${d}
        </p>
      </div>
    </div>`).join("")}function y(s,t){t.insertAdjacentHTML("beforeend",h(s))}const i={searchForm:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-container")},l="hidden",g=new u(".photo-card a",{captionsData:"alt",captionDelay:250});i.searchForm.addEventListener("submit",b);function b(s){s.preventDefault();const t=s.currentTarget,o=t.elements.searchQuery.value.trim();if(!o){c.error({position:"topRight",message:"Empty query!"});return}i.loader.classList.remove(l),p(o).then(({hits:n,totalHits:e})=>{if(e===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");i.gallery.innerHTML="",y(n,i.gallery),g.refresh()}).catch(n=>c.error({position:"topRight",message:n.message})).finally(()=>{t.reset(),i.loader.classList.add(l)})}
//# sourceMappingURL=commonHelpers.js.map
