const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        task.remove();
        updateTaskCount();
    });

    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = "";

    updateTaskCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});