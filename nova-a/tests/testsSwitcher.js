const testsList = {
  stocks: {
    title: 'Акційні пропозиції',
    list: [
      {
        testsNumber: 9802,
        name: 'Комплекс №127 "Повна діагностика здоров`я" (ЗАК, глюкоза, АЛТ, АСТ, альбумін, білок загальний, ГГТ, ЛФ, амілаза панкреатична, креатинін, сечовина, сечова кислота, СРБ, ліпідограма, ТТГ, АТПО, вітамін D, залізо сироваткове, кальцій, магній)',
        label:
          'Маркер оцінки загального стану організму та діагностіка захворювань',
        sale: 51,
        price: 4090,
        salePrice: 1999.2,
        duration: 0,
      },
    ],
  },
  regularBloodTests: {
    title: 'Загальноклінічні дослідження крові',
    list: [
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
      {
        testsNumber: 3041,
        name: 'Тромбоцити крові',
        label:
          'Маркер згортаючої системи крові, входить в клінічний (загальний аналіз крові)',
        price: 80,
        duration: 0,
      },
    ],
  },
};

function activeCategorySwitcher(event) {
  const targetLi = event.target.closest('li'); // Ищем ближайший элемент <li>
  if (targetLi) {
    // Убедимся, что <li> является прямым потомком меню
    if (!targetLi.classList.contains('active')) {
      targetLi.classList.add('active');
    } else if (targetLi.classList.contains('with_submenu')) {
      targetLi.classList.remove('active');
    }
  }
}

const menu = document.getElementsByClassName('tests_menu')[0];
menu.addEventListener('click', activeCategorySwitcher);


const tableHeader = document.getElementById('tests_wrapper-results-header');
const tableBody = document.getElementById('tests_wrapper-results-body');
function switchTable(tableName) {
  const header = testsList[tableName].title;
  const list = testsList[tableName].list;

  // Обновляем заголовок таблицы
  tableHeader.textContent = header;

  // Очищаем тело таблицы
  tableBody.innerHTML = '';

  // Создаём строки для каждого объекта в списке
  list.forEach((test) => {
    // Создаём строку таблицы
    const row = document.createElement('tr');

    // Первая ячейка с описанием теста
    const descCell = document.createElement('td');
    const testNumberP = document.createElement('p');
    const testNumberSpan = document.createElement('span');
    testNumberSpan.className = 'dark_text';
    testNumberSpan.textContent = test.testsNumber;
    testNumberP.appendChild(testNumberSpan);
    testNumberP.append(` ${test.name} `);

    const infoLink = document.createElement('a');
    const infoIcon = document.createElement('i');
    infoIcon.className = 'fa-solid fa-circle-info';
    infoLink.appendChild(infoIcon);
    testNumberP.appendChild(infoLink);
    descCell.appendChild(testNumberP);

    const descriptionP = document.createElement('p');
    const descriptionSpan = document.createElement('span');
    descriptionSpan.className = 'dark_text';
    descriptionSpan.textContent = 'Опис:';
    descriptionP.appendChild(descriptionSpan);
    descriptionP.append(` ${test.label}`);
    descCell.appendChild(descriptionP);

    row.appendChild(descCell);

    // Вторая ячейка с ценами
    const priceCell = document.createElement('td');

    if (test.sale) {
      const discountP = document.createElement('p');
      discountP.textContent = `Знижка: `;
      const discountSpan = document.createElement('span');
      discountSpan.className = 'dark_text';
      discountSpan.textContent = `${test.sale}%`;
      discountP.appendChild(discountSpan);
      priceCell.appendChild(discountP);
    }

    const priceP = document.createElement('p');
    priceP.style.display = 'flex';
    priceP.style.alignItems = 'center';
    priceP.style.justifyContent = 'space-between';
    priceP.textContent = 'Ціна: ';
    const priceValueSpan = document.createElement('span');
    const priceLightSpan = document.createElement('span');
    priceLightSpan.className = 'light_text';
    priceLightSpan.textContent = test.salePrice || test.price;
    priceValueSpan.appendChild(priceLightSpan);
    priceValueSpan.append('грн');
    priceP.appendChild(priceValueSpan);
    priceCell.appendChild(priceP);

    if (test.sale) {
      const oldPriceP = document.createElement('p');
      oldPriceP.className = 'tests_wrapper-results-old_price';
      const oldPriceSpan = document.createElement('span');
      oldPriceSpan.className = 'dark_text';
      oldPriceSpan.textContent = test.price;
      oldPriceP.appendChild(oldPriceSpan);
      oldPriceP.append('грн');
      priceCell.appendChild(oldPriceP);
    }

    const buyButton = document.createElement('button');
    buyButton.className = 'tests_wrapper-results-bay_btn';
    buyButton.textContent = 'в кошик';
    priceCell.appendChild(buyButton);

    row.appendChild(priceCell);

    // Третья ячейка с продолжительностью
    const durationCell = document.createElement('td');
    const durationP = document.createElement('p');
    const durationSpan = document.createElement('span');
    durationSpan.className = 'dark_text';
    durationSpan.textContent = test.duration;
    durationP.appendChild(durationSpan);
    durationP.append(' днів');
    durationCell.appendChild(durationP);

    row.appendChild(durationCell);

    // Добавляем строку в таблицу
    tableBody.appendChild(row);
  });
}


const stocks = document.getElementById('stocks');
stocks.addEventListener('click', () => switchTable('stocks'));
const regularBloodTests = document.getElementById('regularBloodTests');
regularBloodTests.addEventListener('click', () =>
  switchTable('regularBloodTests')
);

// default page
switchTable('stocks');
