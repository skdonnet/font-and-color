const p = document.querySelector('p');
const root = document.querySelector('#root');
const txt = document.getElementById('txt');

document.addEventListener('keyup', event => {
  p.innerText = txt.value;
});

document
  .querySelector('input[type="range"]')
  .addEventListener('input', event => {
    root.style.setProperty('--font-size', `${event.target.value}px`);
  });

document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    root.style.setProperty('--color');
  });
