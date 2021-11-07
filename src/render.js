import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {

  const updateSideBar = (newItem) => {


  
  }



  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    };
  }

  const displayMenuItems = (e) => {
    console.log(todo.getTodoList());
    
    clearDisplay();

    _contentDisplay.appendChild(create.displayHeader(e));

    _contentDisplay.appendChild(create.newTodoButton());

    // _contentDisplay.appendChild(create.listOfTodos())





  }
  

  
  const _projectsContainer = document.querySelector('.projects-container');
  const _sideBarAllProjectsList = document.querySelector('.all-projects');


  const _contentDisplay = document.querySelector('.todo-display');


  return { updateSideBar, displayMenuItems }


})();


export { renderTodo }