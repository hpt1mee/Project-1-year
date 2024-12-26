const addTaskButton  = document.querySelector('button')
const taskInput = document.querySelector('input')
const taskList= document.querySelector('.display');

document.addEventListener('DOMContentLoaded', () => {
	addTaskButton.addEventListener('click', () => {
			const taskValue = taskInput.value.trim(); 
			if (taskValue) {
					console.log(taskValue);
					createElem(taskValue);
			} else {
					console.log('Please enter a task!');
			}
	});

	function createElem(value) {
			let li = document.createElement('li');
			li.className = 'li';
			li.textContent = value;
			taskInput.value = '';
			taskList.appendChild(li);
	}
});
