const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

const value = document.getElementById('value');
valueInt = parseInt(value.textContent);

increase.addEventListener('click', function () {
  valueInt += 1;
  if (valueInt >= 1) {
    value.style.color = 'green';
  }
  value.textContent = valueInt;
});

decrease.addEventListener('click', function () {
  valueInt -= 1;
  if (valueInt <= -1) {
    value.style.color = 'red';
  }
  value.textContent = valueInt;
});

reset.addEventListener('click', function () {
  valueInt = 0;
  if (valueInt === 0) {
    value.style.color = 'black';
  }
  value.textContent = valueInt;
});
