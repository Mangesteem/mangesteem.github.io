document.addEventListener("DOMContentLoaded", function() {
    // Reference to the container element
    var container = document.querySelector(".container");

    // Function to handle mouse down event
    function handleMouseDown(event) {
        // If the user clicks and holds the mouse button on the container's edge, enable resizing
        if (event.target.classList.contains("resize-handle")) {
            // Calculate the initial mouse position
            var initialX = event.clientX;
            var initialY = event.clientY;
            var initialWidth = parseFloat(getComputedStyle(container, null).getPropertyValue("width"));
            var initialHeight = parseFloat(getComputedStyle(container, null).getPropertyValue("height"));

            // Function to handle mouse move event
            function handleMouseMove(event) {
                // Calculate the new width and height based on mouse movement
                var newWidth = initialWidth + event.clientX - initialX;
                var newHeight = initialHeight + event.clientY - initialY;

                // Apply the new width and height to the container
                container.style.width = newWidth + "px";
                container.style.height = newHeight + "px";
            }

            // Function to handle mouse up event
            function handleMouseUp(event) {
                // Remove event listeners for mouse move and mouse up
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }

            // Add event listeners for mouse move and mouse up
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
    }

    // Add event listener for mouse down event on the container
    container.addEventListener("mousedown", handleMouseDown);
});

// Function to add task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Function to delete task
function deleteTask(element) {
    var li = element.parentElement;
    li.remove();
}
