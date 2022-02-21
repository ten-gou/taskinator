// connects the button element to the javascript
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// creates a function to add a new task
var createTaskHandler = function() {

  // stops the webpage from completing default behaviors- in this case, reloading the page with every form submission
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;

  // creates the variable li 
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = taskNameInput;

  // adds the variable li to the ul
  tasksToDoEl.appendChild(listItemEl);
}

  
// creates the event when the click occurs
formEl.addEventListener("submit", createTaskHandler);
