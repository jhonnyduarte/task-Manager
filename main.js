const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;
    console.log(task);
    if (task) {
        createTaskElement(task);
        taskInput.value = '';
    }
});

function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.append(createButton('❌','delete-btn'),createButton('✏️','edit-btn'));
    taskList.append(li);
    return taskList;

}

function createButton(text,className) {
    const btn = document.createElement('span');
    btn.textContent = text;
    btn.className = className;
    return btn;
};

taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')) {
        deleteTask(e.target.parentElement);
    } else if(e.target.classList.contains('edit-btn')) {
        editTask(e.target.parentElement);
    } 
});

function deleteTask(taskItem) {
    if(confirm("Estas seguro(a) de eliminar la tarea?")){
        taskItem.remove();
    }
}

function editTask(taskItem) {
    const newTask = prompt('Edita la tarea', taskItem.firstChild.textContent);
    if(newTask !== null) {
        taskItem.firstChild.textContent = newTask;
    }
}