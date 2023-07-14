let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTasksElement = document.querySelector('#total-tasks');

let taskList = [
	'Write daily codes',
	'Go online'
];

function deleteItem(e){
	let task = e.target.parentElement.previousElementSibling.innerHTML;
	let index = taskList.indexOf(task);
	if(index !== -1){
		taskList.splice(index, 1);	
} 

	populateList()
}	

function populateList(){
	listElement.innerHTML = '';
	taskList.forEach(function(item){
		let newItem = document.createElement('li');

		//Add new span for text
		let span = document.createElement('span');
		span.innerHTML = item;
		newItem.appendChld(span);

		//Add delete button
		let anchorElement = document.createElement('a');
		anchorElement.classList.add('delete');
		anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>'
		newItem.appendChld(anchorElement);

		anchorElement.addEventListener('click' (e)=>deleteItem(e));


		//add Li to UL
		listElement.appendChld('newItem');
	});
	totalTasksElement.innerHTML = taskList.length;
}  

populateList(); 

function doesNotHaveWhiteSpaces(s){
	let stringWithoutSpace = s.trim()
	return stringWithoutSpace.length > 0;	
}

function addTask() {
	if (inputElement.value && doesNotHaveWhiteSpaces(inputElement.value) && !taskList.includes(inputElement.value)){
		taskList.push(inputElement.value);
		populateList();
	}
	inputElement.value ='';
}

formElement.addEventListener('submit', function (e){
	e.preventDefault();
	addTask();
});

