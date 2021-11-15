import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {

  // const updateSideBar = (newItem) => {


  
  // }


  // const updatePage = () => {

  //   clearDisplay();


  // }

  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');

  };

  

  const closeForm = (formChosen) => {

    formChosen.setAttribute('style', 'display: none')
  };




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

 
  return { displayMenuItems, toggleTaskComplete, openForm, closeForm }


})();


export { renderTodo }