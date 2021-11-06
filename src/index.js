import { renderTodo } from "./render";
import './styles.css';

const todo = (() => {

  const openNewTodoForm = () => {
    _TodoFormPopup.setAttribute('style', 'display: flex');
  };

  const closeTodoForm = () => {
    _TodoFormPopup.setAttribute('style', 'display: none');
  };

  const captureFormData = () => {
    return new FormData(_todoForm)
  };



  const getTodoList = () => {
    return _todoList
  };




  const todoFactory = (data) => {
    let title = data.get('title');
    let description = data.get('description');
    let dueDate = data.get('due-date');
    let priority = data.get('priority');


    return { title, description, dueDate, priority  }

  };







  const startTodoApp = function(e) {
    e.preventDefault();


    let _formData = captureFormData();

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);

    console.log(getTodoList());

    _todoForm.reset();
    closeTodoForm(); 
  };   




  const _todoList = [];

  const _TodoFormPopup = document.querySelector('.todo-form-popup');
  const _todoForm = document.querySelector('.todo-form')


  const _addTodoButton = document.querySelector('.add-new-todo-button')
  _addTodoButton.addEventListener('click', openNewTodoForm);


  const _closeTodoFormButtons = document.querySelectorAll('.close-form');
  _closeTodoFormButtons.forEach(button => {
    button.addEventListener('click', closeTodoForm)
  });



  const _submitTodoForm = document.querySelector('.submit-form')
  _submitTodoForm.addEventListener('click', startTodoApp)





  return { getTodoList }


})();


export { todo }







