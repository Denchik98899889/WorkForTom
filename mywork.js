const input = document.getElementById('inputtt');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const comp = document.getElementById('comp');
const delt = document.getElementById('delt');

// Функция для создания нового элемента списка с кнопкой "Delete"
function createListItem(text) {
    const listItem = document.createElement('li');
    
    // Создаем чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Создаем текстовый узел с содержимым из поля ввода
    const textNode = document.createTextNode(text);
    
    // Создаем кнопку "Delete"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (den3) => {
        listItem.remove();
    });
    
    // Добавляем чекбокс, текстовый узел и кнопку "Delete" в элемент списка
    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    
    return listItem;
}

// Обработчик события для кнопки "Add"
btn.addEventListener('click', (den) => {
    const listItem = createListItem(input.value);
    result.appendChild(listItem);
    input.value = '';
});

// Обработчик для кнопки "Completed"
comp.addEventListener('click', (den2) => {
    const listItems = result.querySelectorAll('li');
    listItems.forEach((item) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            result2.appendChild(item);
        }
    });
});

// Обработчик для кнопки "Delete"
delt.addEventListener('click', (den4) => {
    const listItems = result.querySelectorAll('li');
    listItems.forEach((item) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.remove();
        }
    });
});

