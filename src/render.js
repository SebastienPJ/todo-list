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
    const menuTitle = e.target.textContent;
    
    clearDisplay();

    _contentDisplay.appendChild(create.displayHeader(menuTitle));


    _contentDisplay.appendChild(create.listOfTodos(menuTitle))

    _contentDisplay.appendChild(create.newTodoButton());





  }
  

  
  const _projectsContainer = document.querySelector('.projects-container');
  const _sideBarAllProjectsList = document.querySelector('.all-projects');


  const _contentDisplay = document.querySelector('.todo-display');


  return { updateSideBar, displayMenuItems }


})();


export { renderTodo }