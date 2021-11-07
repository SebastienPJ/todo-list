import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {

  const updateSideBar = (newItem) => {
    let _newList = document.createElement('li');
    _newList.textContent = newItem.title;
    _sideBarAllTodoList.appendChild(_newList);

  
  }

  const showList = (e) => {
    const _menuDropdown = document.querySelectorAll('.menu-dropdown');

    _menuDropdown.forEach(button => {
      let menuList = button.parentNode.children[1];
      if (menuList.classList.contains('dropdown')) {
        menuList.classList.toggle('dropdown')
      }
    })


    const parentElement = e.target.parentElement;
    const list = parentElement.children[1];
    list.classList.toggle('dropdown')


  }
  




  const _allTasksContainer = document.querySelector('.all-todos-container');
  const _sideBarAllTodoList = document.querySelector('.all-todos');

  const _todayContainer = document.querySelector('.today-container');
  const _sideBarTodayList = document.querySelector('.due-today');
  
  const _tomorrowContainer = document.querySelector('.tomorrow-container');
  const _sideBarTomorrowList = document.querySelector('.due-tomorrow');
  
  const _projectsContainer = document.querySelector('.projects-container');
  const _sideBarAllProjectsList = document.querySelector('.all-projects');

  return { updateSideBar, showList }


})();


export { renderTodo }