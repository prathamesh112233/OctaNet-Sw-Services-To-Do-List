document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });
});


function addTask() {
   

    const taskInput = document.getElementById('taskInput').value;
    const deadlineInput = document.getElementById('deadlineInput').value;
    const priorityInput = document.getElementById('priorityInput').value;

   
    if (!taskInput || !deadlineInput || !priorityInput) {
        alert('Please fill in all fields');
        return;
    }

   
    const task = {
        task: taskInput,
        deadline: deadlineInput,
        priority: priorityInput,
    };


    
    document.getElementById('taskInput').value = '';
    document.getElementById('deadlineInput').value = '';
    document.getElementById('priorityInput').value = 'high';
}