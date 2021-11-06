import { renderTodo } from "./render";
import './styles.css';

const todo = (() => {

  const openNewTodoForm = () => {
    _newTodoForm.setAttribute('style', 'display: flex');
  }

  const closeTodoForm = () => {
    _newTodoForm.setAttribute('style', 'display: none');
  }

  

  const captureFormData = () => {
    return new FormData(_todoForm)
  };

  const getList = () => {
    return _todoList
  };


  const startTodoApp = function(e) {
    console.log("Yay");
        
        
  };   

  const _newTodoForm = document.querySelector('.todo-form-popup');


  const _addTodoButton = document.querySelector('.add-new-todo-button')
  _addTodoButton.addEventListener('click', openNewTodoForm);
  

  const _closeTodoFormButtons = document.querySelectorAll('.close-form');
  _closeTodoFormButtons.forEach(button => {
    button.addEventListener('click', closeTodoForm)
  });






  return { getList }


})();


export { todo }







