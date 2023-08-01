// Функція для додавання нового завдання
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <input type="checkbox" onchange="toggleTask(this)">
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Видалити</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
  
  // Функція для відмітки завдання як виконаного або невиконаного
  function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle('completed', checkbox.checked);
  }
  
  // Функція для видалення завдання
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
