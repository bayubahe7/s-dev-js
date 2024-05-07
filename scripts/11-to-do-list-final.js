
const todoList = [{name: 'levis', dueDate: '2022-12-29'}, {name: 'peter', dueDate: '2022-12-30'}];

renderToDoList ();

//below function take our to do from array and display it on the web page.
  
function renderToDoList (){

let todoHTML = '';

for (let i = 0; i < todoList.length; i++){
   const todoObject = todoList[i];

  // const name = todoObject.name;

  // const dueDate = todoObject.dueDate;

  //above line work the same way as below code and below code is shortcut for above code

  //this form is called destructuring and is adopted when the variable name and property are same.

   const {name , dueDate} = todoObject;

   let html = `
               <div>${name}</div>
               <div>${dueDate}</div>
               <button onclick="
               todoList.splice(${i},1);
               renderToDoList ();
               " class="delete-todo-button">Delete</button>
               `;
               // the above technique is called generating html

   todoHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoHTML;

}

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



