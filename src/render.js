import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {



  const updatePage = (newObject) => {

    console.log(newObject);

    const projectDisplay = document.querySelector('.all-projects');

    projectDisplay.appendChild(create.projectContainer(newObject))





  }


  return { updatePage }


})();


export { renderTodo }