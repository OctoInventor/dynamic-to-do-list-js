document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('The DOM is fully loaded and parsed');

    // Example: Adding a new to-do item
    const addButton = document.getElementById('addButton');
    const inputField = document.getElementById('inputField');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = inputField.value;
        todoList.appendChild(newItem);
        inputField.value = ''; // Clear the input field
    });

    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
    
        // Your subsequent code can go here
        console.log('Add Task button selected:', addButton);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        // Your subsequent code can go here
        console.log('Add Task button selected:', addButton);
        console.log('Task input field selected:', taskInput);
        console.log('Task list selected:', taskList);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                const newTask = document.createElement('li');
                newTask.textContent = taskText;
                taskList.appendChild(newTask);
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText !== '') {
                const newTask = document.createElement('li');
                newTask.textContent = taskText;
                taskList.appendChild(newTask);
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li');
                newTask.textContent = taskText;
                taskList.appendChild(newTask);
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                removeButton.onclick = function() {
                    taskList.removeChild(newTask); // Remove the li element from taskList
                };
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                removeButton.onclick = function() {
                    taskList.removeChild(newTask); // Remove the li element from taskList
                };
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                removeButton.onclick = function() {
                    taskList.removeChild(newTask); // Remove the li element from taskList
                };
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                removeButton.onclick = function() {
                    taskList.removeChild(newTask); // Remove the li element from taskList
                };
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                removeButton.onclick = function() {
                    taskList.removeChild(newTask); // Remove the li element from taskList
                };
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    
        // Add event listener to the input field to call addTask when 'Enter' key is pressed
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim(); // Retrieve and trim the value
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                const newTask = document.createElement('li'); // Create a new li element
                newTask.textContent = taskText; // Set its textContent to taskText
    
                const removeButton = document.createElement('button'); // Create a new button element
                removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
                removeButton.className = 'remove-btn'; // Give it a class name of 'remove-btn'
    
                removeButton.onclick = function() {
                    taskList.removeChild(newTask); // Remove the li element from taskList
                };
    
                newTask.appendChild(removeButton); // Append the remove button to the new task
                taskList.appendChild(newTask); // Append the new task to the task list
                taskInput.value = ''; // Clear the input field after adding the task
            }
        }
    
        // Add event listener to the button to call addTask when clicked
        addButton.addEventListener('click', addTask);
    
        // Add event listener to the input field to call addTask when 'Enter' key is pressed
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    
        // Invoke addTask on DOMContentLoaded
        addTask();
    });
});


