import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {

  // const updateSideBar = (newItem) => {


  
  // }


  // const updatePage = () => {

  //   clearDisplay();


  // }

  

  const openNewTodoForm = () => {
    _TodoFormPopup.setAttribute('style', 'display: flex');
  };



  const closeTodoForm = () => {
    _TodoFormPopup.setAttribute('style', 'display: none');
  };



  const openProjectForm = () => {
    _projectFormPopup.setAttribute('style', 'display: flex')
  };



  const closeProjectForm = () => {
    _projectFormPopup.setAttribute('style', 'display: none')
  };



  const openEditForm= () => {
    _editFormPopup.setAttribute('style', 'display: flex');
  }



  const closeEditForm = () => {
    _editFormPopup.setAttribute('style', 'display: none')
  }






  const toggleTaskComplete = (e) => {
    let task = e.target.labels[0];

    if (e.target.checked) {
      console.log("task is complete")

      task.classList.add('task-done')

    } else {
      console.log("task incomplete");
      task.classList.remove('task-done')

    }

  };



  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };

  const displayMenuItems = (e) => {
    const menuTitle = e.target.textContent;
    
    clearDisplay();

    _contentDisplay.appendChild(create.displayHeader(menuTitle));


    _contentDisplay.appendChild(create.listOfTodos(menuTitle))

    _contentDisplay.appendChild(create.newTodoButton(menuTitle));

  };
  

  const _contentDisplay = document.querySelector('.todo-display');



  const _TodoFormPopup = document.querySelector('.todo-form-popup');


  
  const _editFormPopup = document.querySelector('.edit-todo-popup');


  const _projectFormPopup = document.querySelector('.new-project-popup')

  return { displayMenuItems, toggleTaskComplete, openProjectForm, 
    closeProjectForm, openNewTodoForm, closeTodoForm, openEditForm, 
    closeEditForm }


})();


export { renderTodo }