document.querySelectorAll(".tree li").forEach(function(e){var t=e.firstChild,n=document.createElement("span");n.textContent=t.textContent.trim(),e.replaceChild(n,t),n.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden"))})});
//# sourceMappingURL=index.386edf7d.js.map
