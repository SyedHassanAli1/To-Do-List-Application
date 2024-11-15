$(document).ready(function () {
    // 1. Add a new task (Selectors, Events, DOM Manipulation)
    $("#addTask").click(function () {
        let taskText = $("#newTask").val();
        if (taskText) {
            $("#taskList").append(
                `<div class="task-item">
            <span>${taskText}</span>
            <button class="completeTask">Complete</button>
            <button class="editTask">Edit</button>
            <button class="deleteTask">Delete</button>
          </div>`
            ).hide().fadeIn();
            $("#newTask").val(''); // Clear input
        }
    });

    // 2. Mark task as completed (CSS Manipulation, Traversing)
    $("#taskList").on("click", ".completeTask", function () {
        $(this).siblings("span").toggleClass("completed");
    });

    // 3. Edit a task (HTML Manipulation)
    $("#taskList").on("click", ".editTask", function () {
        let taskItem = $(this).siblings("span");
        let newText = prompt("Edit Task:", taskItem.text());
        if (newText) {
            taskItem.text(newText);
        }
    });

    // 4. Delete a task (Effects)
    $("#taskList").on("click", ".deleteTask", function () {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
    });

    // 5. Load sample tasks (AJAX)
    $("#loadTasks").click(function () {
        $.get("https://jsonplaceholder.typicode.com/todos?_limit=5", function (data) {
            data.forEach(function (item) {
                $("#taskList").append(
                    `<div class="task-item">
              <span>${item.title}</span>
              <button class="completeTask">Complete</button>
              <button class="editTask">Edit</button>
              <button class="deleteTask">Delete</button>
            </div>`
                ).hide().slideDown();
            });
        });
    });
});
