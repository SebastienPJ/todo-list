import { renderTodo } from "./render";
import { editTodo } from "./edit";
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
    let isTodoDone = 'no'


    return { title, description, dueDate, priority, isTodoDone }

  };



  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  };



  const startTodoApp = function(e) {
    e.preventDefault();


    let _formData = captureFormData();

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    // renderTodo.updateSideBar(_newTodo);

    _todoForm.reset();
    closeTodoForm(); 
  };   




  const _todoList = [
    {
      title: "Complete Presentation",
      description: "Must complete and sell pitch to board",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no"
    },

    {
      title: "Do groceries",
      description: "Need foood",
      dueDate: "2021-11-18",
      priority: "high",
      isTodoDone: "no"
    }
  ];

  const _TodoFormPopup = document.querySelector('.todo-form-popup');
  const _todoForm = document.querySelector('.todo-form')


  const _addTodoButton = document.querySelector('.add-new-todo-button')
  _addTodoButton.addEventListener('click', openNewTodoForm);


  const _closeTodoFormButtons = document.querySelectorAll('.close-form');
  _closeTodoFormButtons.forEach(button => {
    button.addEventListener('click', closeTodoForm);
  });



  const _submitTodoForm = document.querySelector('.submit-form');
  _submitTodoForm.addEventListener('click', startTodoApp);



  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {
    button.addEventListener('click', renderTodo.displayMenuItems);
  })



  const _closeEditFormButtons = document.querySelectorAll('.close-edit-form');
  _closeEditFormButtons.forEach(button => {
    button.addEventListener('click', editTodo.closeEditForm);
  })






  return { getTodoList, openNewTodoForm, findIndexOf }


})();


export { todo }







