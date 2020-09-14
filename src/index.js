
import {crearTodoHtml} from './js/componentes';
import './styles.css';
import {Todo, TodoList} from './classes';



 export const todoList = new TodoList();

 todoList.todos.forEach(crearTodoHtml);
 console.log('todos', todoList.todos);

// const tarea = new Todo('Aprender javascript');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);


// localStorage.setItem('mi-key','ABC123');
// setTimeout(()=>{
//     localStorage.removeItem('mi-key');
// },1500);

