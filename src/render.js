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
    newLabel.textContent = "Task3";
    newLabel.setAttribute('for', 'task3');
    

    cellName.appendChild(newLabel)

    


    let cellValue = row.insertCell(1);
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.name = 'task3';
    newInput.id = 'task3';
    newInput.autocomplete = 'off';


    cellValue.appendChild(newInput);




  }


  return { updatePage, addMoreTask }


})();


export { renderTodo }