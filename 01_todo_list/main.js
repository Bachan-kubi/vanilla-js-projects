const addButton = document.getElementById("addBtn");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const statNumbers = document.getElementById("numbers");


let allTasks = [];

addButton.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  const newTask = inputTask.value.trim();
  if (newTask) {
    allTasks.push({ task: newTask, completed: false });
  }
  console.log(allTasks);
  inputTask.value = "";
  updateTask();
  updateStats();
}

function updateTask() {
    taskList.innerHTML = "";
  allTasks.forEach((task, index) => {
    console.log(task, index);
    const list = document.createElement("li");
    list.innerHTML = `
            <div class="task-item">
                <div class ="task ${task.completed ? "completed" : ""}">
                    <input type="checkbox" class="check-box" ${
                      task.completed ? "checked" : ""
                    }/>
                    <p>${task.task}</p>
                </div>
                <div class="icons">
                    <img src="./img/edit.png" onClick= "editTask(${index})"/>
                    <img src="./img/bin.png" onClick= "deleteTask(${index})"/>
                </div>
            </div>
        `;
    list.addEventListener("change", () => toggelTaskCompleted(index));
    taskList.append(list);
  });
}

const toggelTaskCompleted = (index)=>{
    allTasks[index].completed = !allTasks[index].completed;
    updateTask();
    updateStats();
}

const deleteTask = (index)=>{
    allTasks.splice(index,1);
    updateTask();
    updateStats();
}
const editTask = (index)=>{
    inputTask.value = allTasks[index].task;
    allTasks.splice(index, 1);
    updateTask();
    updateStats();
}
const updateStats=()=>{
  const completedTasks = allTasks.filter(task=>task.completed).length;
  const totalTask = allTasks.length;
  const progress = (completedTasks/totalTask)*100;
  const progressBar = document.getElementById("progress");
  // progressBar.style.width = `${progress}%`;
  // if i delete task progress bar should be reduce according to the deleted task in terms of percentage
  // if no task is present progress bar should be 0%
  if(totalTask===0){
    progressBar.style.width = `0%`;
  }else{
    progressBar.style.width = `${progress}%`;
  }
  statNumbers.innerText = `${completedTasks} / ${totalTask}`;
}