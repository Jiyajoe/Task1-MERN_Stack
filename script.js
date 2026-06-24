const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.textContent = task;

    // Complete button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});