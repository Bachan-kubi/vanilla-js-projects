const addBtn = document.getElementById("add-task");
const newTask = document.getElementById("new-task");
const listContainer = document.querySelector("ol");

addBtn.addEventListener("click", addTask);

function  addTask() {
    const taskAdded = newTask.value;
    const list = document.createElement('li');
    list.innerHTML = taskAdded;
    listContainer.appendChild(list);
}