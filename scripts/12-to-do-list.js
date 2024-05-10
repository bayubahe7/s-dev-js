
const todoList = [{name: 'levis', dueDate: '2022-12-29'}, {name: 'peter', dueDate: '2022-12-30'}];

renderToDoList ();

//below function take our to do from array and display it on the web page.
  
function renderToDoList (){

let todoHTML = '';

todoList.forEach((todoObject, index) => {
   const {name , dueDate} = todoObject;

   let html = `
               <div>${name}</div>
               <div>${dueDate}</div>
               <button class="delete-todo-button js-delete-button">Delete</button>
               `;
               // the above technique is called generating html

   todoHTML += html;

});

document.querySelector('.js-todo-list').innerHTML = todoHTML;

document.querySelectorAll('.js-delete-button')
 .forEach((deleteButton, index) => {
   deleteButton.addEventListener('click',() => {
      todoList.splice(index,1);
               renderToDoList ();
   });
 });

}


document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
   addToDo();
});

   function addToDo () {
   const nameInputElement = document.querySelector('.js-name-input');
   const name = nameInputElement.value;

   const dateInput = document.querySelector('.js-due-date-input');

   //const dateInput = document.getElementById('date');
   const dueDate = dateInput.value;

   todoList.push({
      name: name, 
      dueDate: dueDate
      //object have shorthand property synthax for variable name which is similar to variable property name so allow as to type name once as follows:
      //name,
      //dueDate
   });

   nameInputElement.value = '';

   renderToDoList ();

}



