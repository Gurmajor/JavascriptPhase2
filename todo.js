// getting input field
var inputField=document.getElementById('todo');
// getting buttn
var addButton=document.getElementById('add');
// getting ul list
var tasksList=document.getElementById('list');

// adding event listener to add button
addButton.onclick=addTask;

// adding task to list
function addTask() 
{
	// getting input field value
	var taskName=inputField.value;
	// creating li element
	var task=document.createElement('li');
	// creating input element with type checkbox
	var cb=document.createElement('input');
	cb.type='checkbox';
	// adding class cbBox to checkbox
	cb.setAttribute('class','cbBox')
	
	// creating p elements
	var taskNameE = document.createElement('p');
	// ading taskname to p element and updating its class
	taskNameE.textContent = taskName;
	taskNameE.setAttribute('class','text');
	
	// creating button adding it's name as delete
	var delButton = document.createElement('button');
	delButton.textContent = 'Delete';
	// adding class to 
	delButton.setAttribute('class','delButton');
	// adding event listener to checkbox and delete button
	cb.onclick=checkBoxCheck;
	delButton.onclick=deleteCheck;

	// adding checkbox, pargraph and delete button to task
	task.appendChild(cb);
	task.appendChild(taskNameE);
	task.appendChild(delButton);
	
	// adding task to task list
	tasksList.prepend(task)
}

function checkBoxCheck(event) {
	
	// checking if the target is input (checkbox)
	if(event.target.tagName=='INPUT')
	{
	// getting paragraph element from selected checkbox
	pElement = event.target.parentNode.querySelector('p');
	// if checkbox is checked
	if(event.target.checked == true)
	{
	// adding line-through in paragraph
    pElement.style.textDecoration = 'line-through';
	// changing color of the list
    event.target.parentNode.style.backgroundColor = 'lightgreen';
	// adding element to last of the list
    list.appendChild(event.target.parentNode);
	}
	else{	
	// if uncompleting the task none is set to paragraph that is no line-through
    pElement.style.textDecoration = 'none';
	// change background of list to gray
    event.target.parentNode.style.backgroundColor = 'gray';
	// add task on top of the list
    list.prepend(event.target.parentNode);
	}
	}
	
}

function deleteCheck(event) {
	// set background to re
    event.target.parentNode.style.backgroundColor = 'red';
	// removing list element 
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}


function success(position) {
	// get latitude
    const latitude  = position.coords.latitude;
	// get longitude
    const longitude = position.coords.longitude;
	// set value on html page
	document.getElementById('coordinates').textContent = "Latitude = "+latitude + ", Longitude = "+longitude;
	// link for open map
	var mapLink = document.createElement('a');
	// added link details on third-party api openstreetmap
	mapLink.href = "https://www.openstreetmap.org/#map=18/"+latitude+"/"+longitude;
    mapLink.textContent = " Open on Open Street API";
	// added link to coordinates
	document.getElementById('coordinates').appendChild(mapLink);
}

function error() {
	// show error
    document.getElementById('coordinates').textContent = 'Unable to retrieve your location';
}

if(!navigator.geolocation) {
	// show if the browser doesn't support for geolocation
    document.getElementById('coordinates').textContent = 'Geolocation is not supported by your browser';
} else {
	// call getCurrentPosition to get coordinates
    document.getElementById('coordinates').textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }