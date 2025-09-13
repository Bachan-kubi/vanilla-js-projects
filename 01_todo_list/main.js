const addButton = document.getElementById("addBtn");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");

let allTasks = [];

addButton.addEventListener("click", addTask);

function addTask(e) {
    e.preventDefault();
    const newTask = inputTask.value.trim();
    if(newTask){
        allTasks.push({task:newTask, completed: false})
    }
    console.log(allTasks);
    inputTask.value = "";
    updateTask();

}

function updateTask() {
    allTasks.forEach((task, index)=>{
        console.log(task, index);
        const list = document.createElement("li");
        list.innerHTML = "";
        list.innerHTML = `
            <div class="task-item">
                <div class ="task ${task.completed? "completed":""}">
                    <input type="checkbox" class="check-box" ${task.completed? "checked": ""}/>
                    <h2>${task.task}</h2>
                </div>
                <div class="icons">
                    <img src="./img/edit.png" onClick= editTask(${index})/>
                    <img src="./img/bin.png" onClick= deleteTask(${index})/>
                </div>
            </div>
        `
        list.addEventListener("change", ()=>toggelTaskCompleted(index));
        taskList.append(list);
    });
}


