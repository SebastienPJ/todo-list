import { todo } from ".";


const create = (() => {

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



  return { displayHeader }
})();


export { create }