let _addTask = document.getElementById("addTask");
let _entertask_background = document.getElementById("entertask_background");

let tasks = [];

let _addtask_todo = document.getElementsByClassName("addtask_todo")[0];
let _addtask_done = document.getElementsByClassName("addtask_done")[0];
let _addtask_inprogress =
  document.getElementsByClassName("addtask_inprogress")[0];
let _addtask_blocked = document.getElementsByClassName("addtask_blocked")[0];

let _entertask_button = document.getElementById("entertask_button");
let _edittask_background = document.getElementById("edittask_background");

let _input_submit = document.getElementById("input_submit");
let _statusSelect = document.getElementById("StatusSelect");
let _edittask_input = document.getElementById("edittask_input");
let _editStatusSelect = document.getElementById("editStatusSelect");
let _edit_input_submit = document.getElementById("edit_input_submit");

function _entertaskFunction() {
  _entertask_background.style.display = "block";
  _entertask_background.style.display = "flex";
  _entertask_background.style.flexDirection = "column";
  _entertask_background.style.justifyContent = "center";
  _entertask_background.style.alignItems = "center";
}
_addTask.onclick = _entertaskFunction;

function submitFunction() {
  let taskText = _entertask_button.value;
  let taskStatus = _statusSelect.value;

  let taskId = Math.random();

  let task = {
    id: taskId,
    text: taskText,
    isDone: false,
    status: taskStatus,
  };
  tasks.push(task);

  renderTasks();
}
function createTaskElement(text, id) {
  let elementString = `<div class="itemid">
  <div class="tasks">
        <i
          class="fa-regular fa-circle-check"
          style="color: #ffffff; background-color: #1a1a1a; border-radius: 100%"
        ></i>
        <p class="tasks-text">${text}</p>

        <i
          id="edit_icon"
          class="fa-solid fa-pen"
        ></i>
        <button onclick="editTask(${id})">edit</button
  
        <i
          id="delete_icon"
          class="fa-solid fa-trash"
        ></i>
        <button onclick="deleteTask(${id})">delete</button>
      </div></div>`;

  return elementString;
}

function deleteTask(id) {
  let taskIndex = tasks.findIndex((task) => {
    if (task.id == id) {
      return true;
    } else {
      false;
    }
  });

  tasks.splice(taskIndex, taskIndex + 1);
  renderTasks();
}

function editTask(id) {
  _edittask_background.style.display = "block";
  _edittask_background.style.display = "flex";
  _edittask_background.style.flexDirection = "column";
  _edittask_background.style.justifyContent = "center";
  _edittask_background.style.alignItems = "center";

  let taskIndex = tasks.findIndex((task) => {
    if (task.id === id) {
      return true;
    }
  });
  let task = tasks[taskIndex];
  _edittask_input.value = task.text;
  _editStatusSelect.value = task.status;

  _edit_input_submit.onclick = () => editTaskSubmit(id, task);
}

function editTaskSubmit(id, task) {
  let text = _edittask_input.value;
  let status = _editStatusSelect.value;

  task.text = text;
  task.status = status;
  renderTasks();
  _edittask_background.style.display = "none";
}

function renderTasks() {
  let todoHTML = "";
  let inprogressHTML = "";
  let doneHTML = "";
  let blockedHTML = "";

  tasks.forEach((task) => {
    let text = task.text;
    let taskId = task.id;
    let _taskHTML = createTaskElement(text, taskId);
    if (task.status === "todo") {
      todoHTML = todoHTML + _taskHTML;
    }

    if (task.status === "inprogress") {
      inprogressHTML = inprogressHTML + _taskHTML;
    }
    if (task.status === "done") {
      doneHTML = doneHTML + _taskHTML;
    }
    if (task.status === "blocked") {
      blockedHTML = blockedHTML + _taskHTML;
    }
  });

  _addtask_todo.innerHTML = todoHTML;
  _addtask_done.innerHTML = doneHTML;
  _addtask_inprogress.innerHTML = inprogressHTML;

  _addtask_blocked.innerHTML = blockedHTML;
  _entertask_background.style.display = "none";
}

_input_submit.onclick = submitFunction;
