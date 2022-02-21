// connects the button element to the javascript
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// creates a function to add a new task
var createTaskHandler = function() {

    // creates the variable li 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";

    // adds the variable li to the ul
    tasksToDoEl.appendChild(listItemEl);
  }

  
// creates the event when the click occurs
buttonEl.addEventListener("click", createTaskHandler);
