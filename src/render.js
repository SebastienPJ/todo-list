import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {

  const updateSideBar = (newItem) => {


  
  }


  const updatePage = () => {

    clearDisplay();


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


  return { updateSideBar, displayMenuItems, updatePage, toggleTaskComplete }


})();


export { renderTodo }