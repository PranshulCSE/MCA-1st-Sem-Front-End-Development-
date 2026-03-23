const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerText = taskInput.value;

    // Mark completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
