let _addTask = document.getElementById("addTask");

let _entertask_background = document.getElementById("entertask_background");
function entertaskFunction() {
  _entertask_background.style.display = "block";
  _entertask_background.style.display = "flex";
  _entertask_background.style.flexDirection = "column";
  _entertask_background.style.justifyContent = "center";
  _entertask_background.style.alignItems = "center";
}

_addTask.onclick = entertaskFunction;

function editTaskFunction() {
  _edittask_background.style.display = "block";
  _edittask_background.style.display = "flex";
  _edittask_background.style.justifyContent = "center";
  _edittask_background.style.alignItems = "center";
}

let _input_submit = document.getElementById("input_submit");
let _addtask_todo = document.getElementsByClassName("addtask_todo")[0];
let _addtask_done = document.getElementsByClassName("addtask_done")[0];
let _addtask_inprogress =
  document.getElementsByClassName("addtask_inprogress")[0];
let _addtask_blocked = document.getElementsByClassName("addtask_blocked")[0];
let _itemid = 10;

function AddTaskFunction() {
  let _entertask_button = document.getElementById("entertask_button").value;
  let _StatusSelect = document.getElementById("StatusSelect").value;
  let taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "itemid");

  taskContainer.id = _itemid;

  let elementString = `<div class="tasks">
      <i
        class="fa-regular fa-circle-check"
        style="color: #ffffff; background-color: #1a1a1a; border-radius: 100%"
      ></i>
      <p class="tasks-text">${_entertask_button}</p>

      <i id="edit_icon" class="fa-solid fa-pen" onclick=editTaskFunction()></i>

      <i onclick="removeTask(${_itemid})" id="delete_icon" class="fa-solid fa-trash"></i>
    </div>`;
  _itemid += 1;

  taskContainer.innerHTML = elementString;
  if (_StatusSelect === "todo") {
    _addtask_todo.appendChild(taskContainer);
  }
  if (_StatusSelect === "inprogress") {
    _addtask_inprogress.appendChild(taskContainer);
  }
  if (_StatusSelect === "done") {
    _addtask_done.appendChild(taskContainer);
  }
  if (_StatusSelect === "blocked") {
    _addtask_blocked.appendChild(taskContainer);
  }
  _entertask_background.style.display = "none";
}

const removeTask = (_itemid) => {
  let removeTaskId = document.getElementById(_itemid);
  removeTaskId.remove();
};

_input_submit.onclick = AddTaskFunction;

// let boards = document.getElementsByClassName("boarder");
// for (let i = 0; i < boards.length; i++) {
//   let board = boards[i];
//   let boardClasslist = board.classList;
//   let istodoboard = boardClasslist.contains("todo");
//   console.log(istodoboard);
//   if (istodoboard) {
//     console.log(i);
//     console.log(boards[i]);
//   }
// }

// let boards = document.getElementsByClassName("boarder");

// let _reset = document.getElementById("reset");

// function clearboards() {
//   for (let i = 0; i < boards.length; i++) {
//     boards[i].innerHTML = "";
//   }
// }
// _reset.onclick = clearboards;

// let _tasks = document.getElementsByClassName("tasks");

// let _reset_tasks = document.getElementById("reset_tasks");

// function clearboards_function() {
//   for (let i = 0; i < _tasks.length; i++) {
//     _tasks[i].innerHTML = "";
//   }
// }
// _reset_tasks.onclick = clearboards_function;

// _edit_icon barij awaagui bgaa
let _edittask_background = document.getElementById("edittask_background");

let _edit_submit = document.getElementById("edit_submit");

function editAddTaskfunction() {
  let _edittask_button = document.getElementById("edittask_button");
  let _editStatusSelect = document.getElementById("editStatusSelect");
  console.log(_edittask_button, _editStatusSelect);
}
_edit_submit.onclick = editAddTaskfunction;
