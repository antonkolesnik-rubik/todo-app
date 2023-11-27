function addTask(taskText) {
    // Додавання завдання
}


function deleteTask(taskId) {
    // Видалення завдання
}


function toggleTaskStatus(taskId) {
    // Зміна статусу завдання
}


function saveTasksToLocalStorage(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}


function loadTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('tasks');
    return JSON.parse(tasksJSON) || [];
}


document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const taskInput = document.getElementById('taskInput').value;
        if (taskInput.trim() !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskInput;
            taskList.appendChild(taskItem);
        }
        // Додайте код для очищення полів форми чи інших необхідних дій.
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

});


function addTask() {

    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput;
        taskList.appendChild(taskItem);
        saveTasksToLocalStorage();
        taskForm.reset();
    }

}
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput;
        taskList.appendChild(taskItem);
        saveTasksToLocalStorage();
        taskForm.reset();
    }

function saveTasksToLocalStorage() {
    const tasks = [];
    const taskItems = document.querySelectorAll('#taskList li');
    
    taskItems.forEach(function(taskItem) {
        tasks.push(taskItem.textContent);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    restoreTasksFromLocalStorage(); // Відновлення стану з Local Storage
    // Інші події та функції, якщо потрібно
});

function restoreTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
    });
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
        task.remove();
    });

    saveTasksToLocalStorage(); // Збереження стану в Local Storage
}

function deleteAllTasks() {
    const allTasks = document.querySelectorAll('#taskList li');

    allTasks.forEach(function(task) {
        task.remove();
    });

    saveTasksToLocalStorage(); // Збереження стану в Local Storage
}


function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput;

        // Додайте обробник подій для відмітки завдань як виконаних
        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            saveTasksToLocalStorage(); // Збереження стану в Local Storage
        });

        taskList.appendChild(taskItem);
        saveTasksToLocalStorage(); // Збереження стану в Local Storage
        taskForm.reset(); // Очищення полів форми
    }
}


function restoreTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;

        // Додайте клас "completed", якщо завдання виконано
        if (isTaskCompleted(task)) {
            taskItem.classList.add('completed');
        }

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            saveTasksToLocalStorage(); // Збереження стану в Local Storage
        });

        taskList.appendChild(taskItem);
    });
}

function isTaskCompleted(taskText) {
    // Ваш код для визначення, чи завдання виконане
    // Наприклад, можна перевірити наявність спеціального маркера у тексті
    return taskText.includes('(completed)');
}