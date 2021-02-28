const form = document.getElementById('it');
const input = document.getElementById('listitem');
const todos = document.getElementById('to-do');
const todo = JSON.parse(localStorage.getItem('todo'));
form.addEventListener("submit", (e)=>{

  e.preventDefault();
   updateLS();
  const todoText = input.value;
   
  if(todoText){
    const todoE1 = document.createElement('li');
    todoE1.innerHTML = todoText;
    todoE1.addEventListener("click", ()=>{
      todoE1.classList.toggle("completed");
   updateLS();

    });
    todoE1.addEventListener("contextmenu", (e) =>{
      e.preventDefault();
      todoE1.remove();
      updateLS();
    });

    todos.appendChild(todoE1);
     input.value ="";

   }
});
function updateLS() {
    const list =  document.querySelectorAll('li');
    const todo = [];

    list.forEach(todoText=>{
      todo.push(todos.value);

    });
    localStorage.setItem("todoText",JSON.stringify(todo));
  }