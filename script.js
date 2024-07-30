document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    console.log('The DOM is fully loaded and parsed');
    
    // Example: Selecting an element and adding an event listener
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });

    
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecting the "Add Task" button
    const addButton = document.getElementById('add-task');

    // Selecting the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Selecting the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Example: Logging the elements to the console
    console.log(addButton, taskInput, taskList);

    
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecting the "Add Task" button
    const addButton = document.getElementById('add-task');

    // Selecting the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Selecting the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Defining the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item and add the task text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Adding an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecting the "Add Task" button
    const addButton = document.getElementById('add-task');

    // Selecting the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Selecting the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Defining the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item and add the task text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Adding an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecting the "Add Task" button
    const addButton = document.getElementById('add-task');

    // Selecting the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Selecting the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Defining the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item and add the task text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Adding an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Adding an event listener to the task input field for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke the addTask function on DOMContentLoaded
    addTask();
});

