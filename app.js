// MyOS Notepad — plain text, autosaved to localStorage.
const KEY = 'myos.notepad.text';
const ta = document.getElementById('np-text');
const count = document.getElementById('np-count');
const saved = document.getElementById('np-saved');

if (ta) {
  try { ta.value = localStorage.getItem(KEY) || ''; } catch (e) {}
  const update = () => { count.textContent = ta.value.length + ' characters'; };
  let t;
  ta.addEventListener('input', () => {
    update();
    saved.textContent = 'saving…';
    clearTimeout(t);
    t = setTimeout(() => {
      try { localStorage.setItem(KEY, ta.value); } catch (e) {}
      saved.textContent = 'saved';
    }, 300);
  });
  update();
}
