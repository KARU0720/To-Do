document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const removedTaskList = document.getElementById('removedTaskList');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskItem = createTaskItem(taskText);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    });

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        taskItem.appendChild(checkbox);

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskTextSpan.classList.add('task-text');
        taskItem.appendChild(taskTextSpan);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Task';
        removeBtn.classList.add('remove-btn');
        removeBtn.style.display = 'none'; 
        removeBtn.addEventListener('click', function () {
            
            taskList.removeChild(taskItem);
            const removedTaskItem = createRemovedTaskItem(taskText);
            removedTaskList.appendChild(removedTaskItem);
        });
        taskItem.appendChild(removeBtn);

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskTextSpan.classList.add('completed-task');
                removeBtn.style.display = 'inline-block';
            } else {
                taskTextSpan.classList.remove('completed-task');
                removeBtn.style.display = 'none';
            }
        });

        return taskItem;
    }

    function createRemovedTaskItem(taskText) {
        const removedTaskItem = document.createElement('li');
        removedTaskItem.classList.add('removed-task-item');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        removedTaskItem.appendChild(taskTextSpan);

        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = 'Restore';
        restoreBtn.classList.add('restore-btn');
        restoreBtn.addEventListener('click', function () {
            removedTaskList.removeChild(removedTaskItem);
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
        });
        removedTaskItem.appendChild(restoreBtn);

        return removedTaskItem;
    }
});
