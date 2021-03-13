const form = document.getElementById('it');
const input = document.getElementById('listitem');
const todos = document.getElementById('to-do');
const todo = JSON.parse(localStorage.getItem('todo'));

form.addEventListener("submit", (e)=>{

  e.preventDefault();
   
   addTodo()

});

function addTodo() {
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
             
           });
        
           todos.appendChild(todoE1);
            input.value ="";

            }
            updateLS();        
}


function updateLS() {

 const todosEL = document.queryselectorAll("li")

 const todos = [];

 todosEL.foreach(todo=>{

  todos.push({
    text:todo.innerText,
    completed:todo.classlist.contains("completed"),
  });
 });
localStorage.setItem("todos",JSON.stringify(todos));
}