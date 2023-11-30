
document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    let taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTaskFromForm();
    });

    restoreTasksFromLocalStorage(); // Відновлення стану з Local Storage
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Додайте обробник подій для відмітки завдань як виконаних
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
        saveTasksToLocalStorage(); // Збереження стану в Local Storage
    });

    taskList.appendChild(taskItem);
    saveTasksToLocalStorage(); // Збереження стану в Local Storage
}

function deleteTask(taskItem) {
    taskItem.remove();
    saveTasksToLocalStorage(); // Збереження стану в Local Storage
}

function toggleTaskStatus(taskItem) {
    taskItem.classList.toggle('completed');
    saveTasksToLocalStorage(); // Збереження стану в Local Storage
}

function saveTasksToLocalStorage() {
    const tasks = [];
    const taskItems = document.querySelectorAll('#taskList li');

    taskItems.forEach(function(taskItem) {
        tasks.push({
            text: taskItem.textContent,
            completed: taskItem.classList.contains('completed')
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task) {
        addTaskFromStorage(task.text, task.completed);
    });
}

function addTaskFromStorage(text, completed) {
    const taskItem = document.createElement('li');
    taskItem.textContent = text;

    if (completed) {
        taskItem.classList.add('completed');
    }

    // Додайте обробник подій для відмітки завдань як виконаних
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
        saveTasksToLocalStorage(); // Збереження стану в Local Storage
    });

    taskList.appendChild(taskItem);
}

function addTaskFromForm() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        addTask(taskInput);
        taskForm.reset(); // Очищення полів форми
    }
}

function restoreTasksFromLocalStorage() {
    loadTasksFromLocalStorage();
}

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // ... інші події та функції

    // Додайте ці дві функції
    window.deleteCompletedTasks = deleteCompletedTasks;
    window.deleteAllTasks = deleteAllTasks;
});

function deleteCompletedTasks() {
    const completedTasks = document.querySelectorAll('#taskList li.completed');

    completedTasks.forEach(function(task) {
        deleteTask(task);
    });
}

function deleteAllTasks() {
    const allTasks = document.querySelectorAll('#taskList li');

    allTasks.forEach(function(task) {
        deleteTask(task);
    });
}

const url = 'https://jsonplaceholder.typicode.com/todos';
const limit = 10;

fetch(`${url}?_limit=${limit}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(task => {
      addTask(task.title);
    });
  })
  .catch(error => {
    console.error('Error during fetch operation:', error);
  });ch('https://jsonplaceholder.typicode.com/todos?_limit=10')
