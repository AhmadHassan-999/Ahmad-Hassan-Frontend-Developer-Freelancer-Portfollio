// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Add task on button click
  addBtn.addEventListener("click", () => {
    addTask();
  });

  // Add task on Enter key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
      alert("Please enter a task!");
      return;
    }

    let li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
      <span class="task-text">${taskValue}</span>
      <div>
        <button class="btn btn-sm btn-success me-2 complete-btn">✔</button>
        <button class="btn btn-sm btn-danger delete-btn">✖</button>
      </div>
    `;

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Mark complete
    li.querySelector(".complete-btn").addEventListener("click", () => {
      li.querySelector(".task-text").classList.toggle("completed");
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  }
});
