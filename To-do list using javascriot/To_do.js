document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const taskList = document.getElementById("taskList");

    // Function to add a new task to the list
    function addTask() {
        const taskValue = taskInput.value.trim();
        const taskDate = dateInput.value;

        if (taskValue !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<input type="checkbox"> ${taskValue} (${taskDate})`;
            taskList.appendChild(listItem);

            // Event listener to remove task when checkbox is clicked
            listItem.querySelector('input[type="checkbox"]').addEventListener('click', function() {
                taskList.removeChild(listItem);
            });

            // Clear input fields after adding task
            taskInput.value = '';
            dateInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    }

    // Event listener for the Add Task button
    addTaskButton.addEventListener('click', addTask);
});
