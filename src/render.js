import { todo } from "./index";
import { create } from "./create";


const renderTodo = (() => {



  const updatePage = (newObject) => {

    console.log(newObject);

    const projectDisplay = document.querySelector('.all-projects');

    projectDisplay.appendChild(create.projectContainer(newObject))

  }


  const addMoreTask = () => {
    let table = document.querySelector('.project-table');

    let row = table.insertRow(-1);



    let cellName = row.insertCell(0);
    let newLabel = document.createElement('label');
    


    let cellValue = row.insertCell(1);

    cellName.textContent = "New Task";
    cellValue.textContent = "Add it  here"



  }


  return { updatePage, addMoreTask }


})();


export { renderTodo }