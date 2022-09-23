// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", (event) => {
  // Prevent form from submitting
  event.preventDefault();
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement("li");
  newTodo.textContent = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.append(newTodo);
  // CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.append(completedButton);
  // CHECK TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.append(trashButton);
  // Attach the div to the UL
  todoList.append(todoDiv);
  // Clear todo input value
  todoInput.value = "";
});

todoList.addEventListener("click", (event) => {
  // Delete Todo
  if (event.target.classList[0] === "trash-btn") {
    event.target.parentElement.remove();
  }
  // Check Mark Todo
  if (event.target.classList[0] === "complete-btn") {
    event.target.parentElement.classList.toggle("completed");
  }
});
