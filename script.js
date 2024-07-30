document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    console.log('The DOM is fully loaded and parsed');
    
    // Example: Adding an event listener to a button
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button was clicked!');
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    
    // Example: Adding an event listener to the button
    addButton.addEventListener('click', function() {
        alert('Add Task button was clicked!');
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    
    // Example: Adding an event listener to the button
    addButton.addEventListener('click', function() {
        alert('Add Task button was clicked!');
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const task = taskInput.value;
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            taskList.appendChild(listItem);
            taskInput.value = ''; // Clear the input field
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = ''; // Clear the input field
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText
            taskList.appendChild(listItem);
            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);

    // Adding an event listener to the input field to allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the value
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the textContent to taskText

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the textContent to "Remove"
            removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton); // Append the remove button to the list item
            taskList.appendChild(listItem); // Append the list item to the task list

            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    }

    // Adding an event listener to the button to call addTask function
    addButton.addEventListener('click', addTask);

    // Adding an event listener to the input field to allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded
    addTask();
});
