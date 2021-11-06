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
    cellName.classList.add('form-label')
    let newLabel = document.createElement('label');
    newLabel.textContent = "Task 3:";
    newLabel.setAttribute('for', 'task3');
    

    cellName.appendChild(newLabel)

    


    let cellValue = row.insertCell(1);
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.name = 'task3';
    newInput.id = 'task3';
    newInput.autocomplete = 'off';


    cellValue.appendChild(newInput);


    let closeCell = row.insertCell(2);
    closeCell.classList.add('left-align');
    let closeButton = document.createElement('div');
    closeButton.textContent = '+';
    closeButton.classList.add('remove-task');
    closeCell.appendChild(closeButton);




  }


  return { updatePage, addMoreTask }


})();


export { renderTodo }