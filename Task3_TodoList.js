//JavaScript To Do List

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-do List Assignment</title>
    <style>
    /* To-do List styling */

.list-header {
  font-family: sans-serif;
  font-size: 40px;
  text-align: center;
}

.new-item-input {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}

.new-item-option {
  font-family: sans-serif;
  font-weight: 600;
  margin-right: 10px;
  font-size: 20px;
}

.new-item-text {
  border: 2px solid #000;
  border-radius: 8px;
  height: auto;
  font-family: sans-serif;
  font-size: 16px;
  margin-right: 10px
}

.new-item-submit {
  width: 100px;
  height: 35px;
  border: 2px solid #3da4dd;
  border-radius: 5px;
  background-color: #3da4dd;
  font-family: sans-serif;
  font-size: 16px;
  transition: ease 0.3s;
  color: #fff
}

.new-item-submit:hover {
  border: 2px solid #3da4dd;
  background: #fff;
  color: #3da4dd;  
  transition: ease 0.3s;
}

li {
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 18px;
}

li button {
  font-family: sans-serif;
  font-size: 18px;
  margin-left: 25px;
  border: 2px solid #3da4dd;
  border-radius: 8px;
  background: #3da4dd;
  color: #fff;
  width: 100px;
  height: 35px;
  transition: ease 0.3s;
}

li button:hover {
  border: 2px solid #3da4dd;
  background: #fff;
  color: #3da4dd;
  transition: ease 0.3s;
}

/* End of To-do List Styling */
    </style>
</head>

<body>

<h1 class="list-header">To-do List</h1>

<div class="new-item-input">
  <label for="item" class="new-item-option">Enter a new item:</label>
  <input type="text" name="item" id="item" class="new-item-text">
  <button class="new-item-submit">Add item</button>
</div>

<ul class="list-content">
  <li>Walk the Dog</li>
  <li>Go Shopping</li>
  <li>Cook Tea</li>
</ul>

<script>
const list = document.querySelector('ul');
const item = document.querySelector('li');
const input = document.querySelector('input');
const button = document.querySelector('button');

//Function to add list item
button.addEventListener('click', ()=>  {
  const listItem = input.value;
  input.value = '';

//Variables created enabling elements to be held as references to be called upon.  
const toDoItem = document.createElement('li');
const toDoName = document.createElement('span');
const toDoButton = document.createElement('button');
  
//Changing order of items to be child of the list
toDoItem.appendChild(toDoName);
toDoName.textContent = listItem;
toDoItem.appendChild(toDoButton);
toDoButton.textContent = 'Delete';
list.appendChild(toDoItem);
  
//Function to delete items from the list
 toDoButton.addEventListener('click', ()=> {
 list.removeChild(toDoItem);
});
  
input.focus();
})
</script>
</body>