import { todo } from "./index";
import { createElements } from "./create";


const renderTodo = (() => {


  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');
    form.classList.add('current-form-inuse');

  };



  const closeForm = (formChosen) => {
    formChosen.classList.remove('current-form-inuse');
    formChosen.setAttribute('style', 'display: none');

  };


  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };


  const populateProjectFormOptions = (selectTag, allTodosArray) => {
    allTodosArray.forEach(todo => {
      let newOption = document.createElement('option');
      newOption.textContent = todo.title
      selectTag.add(newOption)      
    });
  };


  const updatePage = (menuSelected) => {

    clearDisplay();

    _contentDisplay.appendChild(createElements.createDisplayHeader(menuSelected))



    _contentDisplay.appendChild(createElements.createAddButton(menuSelected));





  
  }



  const _contentDisplay = document.querySelector('.todo-display');



 
  return { openForm, closeForm, updatePage, populateProjectFormOptions,  }


})();


export { renderTodo }