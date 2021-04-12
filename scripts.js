const p = document.querySelector('p');

document
  .querySelector('input[type="range"]')
  .addEventListener('change', (event) => {
    p.innerText = event.target.value;
  });
