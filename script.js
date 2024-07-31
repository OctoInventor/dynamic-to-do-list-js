document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant named addButton
    const addButton = document.getElementById('addTaskButton');
    // Select the input field and store it in a constant named taskInput
    const taskInput = document.getElementById('task-input');
    // Select the unordered list and store it in a constant named taskList
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li to the taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add an event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});