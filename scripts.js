const p = document.createElement('p');
const root = document.querySelector(':root');
const txt = document.getElementById('txt');
const form = document.querySelectorAll('form');
const fontV = document.querySelector('#font-size');

document.body.appendChild(p);

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
    const newMin = event.target.element[0].value;

    if (newMin > fontV.max) {
      fontV.min = newMin;
    } else {
      p.innerText = 'No good!';
    }
  });

document
  .querySelector('#max-font-size-form')
  .addEventListener('keyup', event => {
    const newMax = event.target.element[0].value;

    if (newMax < fontV.min) {
      fontV.max = newMax;
    } else {
      p.innerText = 'No good!';
    }
  });
