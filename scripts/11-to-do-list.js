
const todoList = ['levis', 'peter'];

renderToDoList ();

//below function take our to do from array and display it on the web page.
  
function renderToDoList (){

let todoHTML = '';

for (let i = 0; i < todoList.length; i++){
   const todo = todoList[i];
   let html = `<p>${todo}</p>` // this technique is called generating html
   todoHTML += html;
}
console.log(todoHTML);

document.querySelector('.js-todo-list').innerHTML = todoHTML;
}

function addToDo () {
const nameInputElement = document.querySelector('.js-name-input');

const name = nameInputElement.value;

todoList.push(name);

console.log(todoList);

nameInputElement.value = '';

renderToDoList ();

}



