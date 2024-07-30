document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('The DOM is fully loaded and parsed');
    
    // Example: Adding a click event listener to a button
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button was clicked!');
    });

    // Example: Fetching data from an API
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process the data here
        })
        .catch(error => console.error('Error fetching data:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Example: Adding a click event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        alert('Add Task button was clicked!');
    });

    // Your other code can go here
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Example: Adding a click event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        alert('Add Task button was clicked!');
    });

    // Your other code can go here
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Get the value of the task input field
        const taskText = taskInput.value;

        // Check if the input field is not empty
        if (taskText.trim() !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if the input field is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add a keypress event listener to the task input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button and store it in a constant
    const addButton = document.getElementById('addTaskButton');

    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list that will display the tasks
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Set the text of the list item to the task text
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add a keypress event listener to the task input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded
    addTask();
});