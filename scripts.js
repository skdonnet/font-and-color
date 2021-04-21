const p = document.querySelector('p');
const root = document.querySelector(':root');
const txt = document.getElementById('txt');
const form = document.querySelectorAll('form');

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
    root.style.setProperty('--color', `${event.target.value}`);
  });

document
  .querySelector('#min-font-size-form')
  .addEventListener('keyup', event => {
    event.preventDefault();
    document.querySelector('#font-size').min = event.target.value;
  });

document
  .querySelector('#max-font-size-form')
  .addEventListener('keyup', event => {
    event.preventDefault();
    document.querySelector('#font-size').max = event.target.value;
  });
