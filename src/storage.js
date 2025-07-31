export function initContentStorage(selector = '[contenteditable][data-key]') {
  document.querySelectorAll(selector).forEach(el => {
    const key = el.dataset.key;
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      el.textContent = saved;
    }
  });

  document.querySelectorAll(selector).forEach(el => {
    const key = el.dataset.key;
    el.addEventListener('input', () => {
      localStorage.setItem(key, el.textContent);
    });
    el.addEventListener('blur', () => {
      localStorage.setItem(key, el.textContent);
    });
  });
}
