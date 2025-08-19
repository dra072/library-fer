// Function to add a new task
function addTask() {
    // var taskInput = document.getElementById("new-task");
    var taskText = document.getElementById("new-task").value;

    // if (taskText.trim() === "") {
    //     alert("Please enter a task!");
    //     return;
    // }

    var taskList = document.getElementById("task-list");

    // Create a new task element
    var taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = '<button onclick="removeTask(this)">Remove</button>'+ " "+ taskText;

    // Append the task element to the task list
    taskList.appendChild(taskElement);

    // Clear the input field
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    var taskToRemove = button.parentNode;
    taskToRemove.parentNode.removeChild(taskToRemove);
}
