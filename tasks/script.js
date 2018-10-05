// TASKS APP

// assign main variables
var add = document.getElementById('add');
var input = document.getElementById('input');
var taskList = document.getElementById('tasks');

// add a new task to the list
function addTask() {
    // create a variable to hold the new li
    var li = document.createElement('li');
    // fill it with whatever the user entered
    li.appendChild(document.createTextNode(input.value));
    // append it to our list
    taskList.appendChild(li);
    // delete - create delete button
    var deleteButton = document.createElement('button');
    // delete - add text to button
    deleteButton.appendChild(document.createTextNode('Delete Task'));
    // delete - add a class
    deleteButton.classList.add('delete');
    // delete - add to the task
    li.appendChild(deleteButton);
    // listen for a click
    deleteButton.addEventListener('click', deleteTask);
    // clear the input field
    input.value = '';
}

// add task on button click, but only if input isn't empty
function addOnClick() {
    if (input.value !== '') {
        addTask();
    }
}

// add task on pressing enter key, but only if input isn't empty
function addOnKeyPress(event) {
    if (input.value !== '' && event.keyCode === 13) {
        addTask();
    }
}

// mark a task as 'done'
function toggleStatus(event) {
    event.target.classList.toggle('done');
}

// delete a task
function deleteTask(event) {
    this.parentNode.remove();
}


// actions
add.addEventListener('click', addOnClick);
input.addEventListener('keypress', addOnKeyPress);
taskList.addEventListener('click', toggleStatus);