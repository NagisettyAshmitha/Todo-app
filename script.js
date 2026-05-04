let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        // Mark complete
        li.onclick = function() {
            li.style.textDecoration = "line-through";
        };

        // Delete button
        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.onclick = function() {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    showTasks();
}


showTasks();