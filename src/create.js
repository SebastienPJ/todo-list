import { todo } from ".";


const create = (() => {

  const newTodoButton = () => {
    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.classList.add('add-new-todo-button');
    todoButton.textContent = '+';
    todoButton.addEventListener('click', todo.openNewTodoForm)

    return todoButton
  }

  const displayHeader = (buttonClicked) => {
    
    const _headerContainer = document.createElement('header');
    _headerContainer.classList.add('display-menu-header')
    _contentContainer.appendChild(_headerContainer);




    const pageTitle = document.createElement('h1');
    pageTitle.textContent = buttonClicked.target.textContent;
    _headerContainer.appendChild(pageTitle);


    return _headerContainer

  }

  const _contentContainer = document.querySelector('.todo-display');



  return { displayHeader, newTodoButton }
})();


export { create }