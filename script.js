const tasks = [];
const root = document.getElementById("root");

function updateDocumentTitle() {
  document.title = `You have ${tasks.length} pending task(s)`;
}

function addTask(title) {
  const newTask = { title };
  tasks.push(newTask);
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  root.innerHTML = "";

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const header = document.createElement("div");
  header.classList.add("header");
  header.innerText = "TODO APP";

  const addTaskDiv = document.createElement("div");
  addTaskDiv.classList.add("add-task");
  addTaskDiv.appendChild(createAddTaskInput());

  const tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  tasks.forEach((task, index) => {
    tasksDiv.appendChild(createListTasksDiv(task, index));
  });

  todoContainer.appendChild(header);
  todoContainer.appendChild(addTaskDiv);
  todoContainer.appendChild(tasksDiv);
  root.appendChild(todoContainer);

  updateDocumentTitle();
}

function createAddTaskInput() {
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const input = document.createElement("input");
  input.classList.add("input");
  input.type = "text";
  input.placeholder = "Add a new Task";

  const addBtn = document.createElement("button");
  addBtn.classList.add("add-btn");
  addBtn.innerText = "Add";
  addBtn.addEventListener("click", () => {
    const title = input.value.trim();
    if (title !== "") {
      addTask(title);
      input.value = "";
    }
  });

  inputContainer.appendChild(input);
  inputContainer.appendChild(addBtn);

  return inputContainer;
}

function createListTasksDiv(task, index) {
  const listTasksDiv = document.createElement("div");
  listTasksDiv.classList.add("list-tasks");
  listTasksDiv.innerText = task.title;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => removeTask(index));

  listTasksDiv.appendChild(deleteBtn);

  return listTasksDiv;
}

renderTasks();


function createListTasksDiv(task, index) {
    const listTasksDiv = document.createElement("div");
    listTasksDiv.classList.add("list-tasks");
  
    // Create a checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.checked = task.completed; // Set checkbox state based on 'completed' property
    checkbox.addEventListener("change", () => toggleCompleted(index, checkbox)); // Add event listener to the checkbox
    listTasksDiv.appendChild(checkbox);
  
    // Create a span for the task title
    const taskTitle = document.createElement("span");
    taskTitle.innerText = task.title;
    listTasksDiv.appendChild(taskTitle);
  
    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => removeTask(index));
    listTasksDiv.appendChild(deleteBtn);
  
    // Apply line-through style if task is completed
    if (task.completed) {
      taskTitle.classList.add("completed");
    }
  
    return listTasksDiv;
  }
  
  function toggleCompleted(index, checkbox) {
    tasks[index].completed = checkbox.checked; // Update the 'completed' property based on checkbox state
    renderTasks();
  }
  
  
  