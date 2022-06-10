const qSelector = (param) => document.querySelector(param);
const elementDefineStyle = qSelector('.define-style');
const SIDES = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const squareElement = qSelector('.square');

let select = 'all';

const defineType = () => {
  select = qSelector('#type').value;
  setDisplay();
};

const setRadiusAll = () => {
  const exportElement = qSelector('.export-code');

  squareElement.style.borderRadius = `${qSelector('#radius').value}%`;
  qSelector('.current-value').innerHTML = `${qSelector('#radius').value}%`;

  exportElement.innerHTML = `<span>border-radius: ${
    qSelector('#radius').value
  }%</span>`;
};

const setDisplay = () => {
  if (select === 'all') {
    elementDefineStyle.innerHTML = `
      <div class="range-radius">
        <label for="radius">Radius<span class="two-dots">:</span></label>
        <input
          type="range"
          id="radius"
          class="input-range"
          min="0"
          max="100"
          value="0"
          onchange="setRadiusAll()"
        />
        <span class="current-value">0%</span>
      </div>
    `;
  } else {
    let newHtml = '';
    SIDES.forEach((side) => {
      newHtml += `
        <div class="range-radius multiples-range">
          <label for="radius"> ${side}</label>
          <input
            type="range"
            id="radius"
            class="input-range "
            min="0"
            max="100"
            value="0"
          />
          <span class="current-value">0%</span>
        </div>
      `;
    });

    elementDefineStyle.innerHTML = newHtml;
  }
};

document.addEventListener('DOMContentLoaded', setDisplay);
