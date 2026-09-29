document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('nav')?.classList.toggle('open'));
document.addEventListener('click',event=>{const button=event.target.closest('[data-copy]');if(!button)return;navigator.clipboard.writeText(button.dataset.copy);button.textContent='COPIED!';setTimeout(()=>button.textContent='COPY',1300)});
