import { todo } from ".";
import { editTodo } from "./edit";
import { renderTodo } from "./render";



const createElements = (() => {

  const createAddButton = (currentMenu) => {

    let currentMenuTitle = currentMenu.textContent;

    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.textContent = '+';

    if (currentMenuTitle == 'Projects') {
      todoButton.classList.add('add-new-project-button');
      todoButton.addEventListener('click', function() {
        renderTodo.openForm(todo.projectFormPopup)
        renderTodo.populateProjectFormOptions(todo.projFormSelectTag, todo.getTodoList())
      })
      
    } else {
      todoButton.classList.add('add-new-todo-button');
      todoButton.addEventListener('click', function() {
        renderTodo.openForm(todo.todoFormPopup)
        renderTodo.populateTodoFormOptions(todo.todoFormSelectTag, todo.getProjectList())

      })

    }



    return todoButton
  }


  const createDisplayHeader = (highlightedButton) => {

    let title = highlightedButton.textContent;
    
    const _headerContainer = document.createElement('header');
    _headerContainer.classList.add('display-menu-header')
    _contentContainer.appendChild(_headerContainer);


    const pageTitle = document.createElement('h1');
    pageTitle.textContent = title;
    _headerContainer.appendChild(pageTitle);


    return _headerContainer

  }
  

  const _contentContainer = document.querySelector('.todo-display');



  return { createDisplayHeader, createAddButton }
})();


export { createElements }