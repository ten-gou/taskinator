// connects the button element to the javascript
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// creates a function to add a new task
var createTaskHandler = function() {

  // stops the webpage from completing default behaviors- in this case, reloading the page with every form submission
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // creates the variable li 
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // adds the variable li to the ul
  tasksToDoEl.appendChild(listItemEl);
}

  
// creates the event when the click occurs
formEl.addEventListener("submit", createTaskHandler);
