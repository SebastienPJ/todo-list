import { todo } from "./index";



const renderTodo = (() => {


  const separateTasks = (obj) => {
    let keys = Object.keys(obj);

    let projectTasks;


    keys.forEach(key =>{

      if (key == 'tasks') {
        projectTasks = obj[key]
      }
    })

    return projectTasks
  };


  const toggleTaskComplete = (e) => {
 
    let task = e.target.labels[0];
    
    let boxChecked = e.target.checked;

    console.log(boxChecked);


    task.classList.toggle('task-done')

        


    // console.log(e)
    // console.log(e.target.labels[0].textContent)
  };


  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  }


  const updatePage = (object) => {
    console.log('Todos have been rendered')
    console.log(object);



    let tasks = separateTasks(object);

    console.log(tasks);
    

    const projectDisplay = document.querySelector('.all-projects');

    
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    let todoIndex = findIndexOf(object, todo.getList());
    projectContainer.dataset['objIndex'] = todoIndex;
    projectDisplay.appendChild(projectContainer);


    let projectName = document.createElement('h2');
    projectName.classList.add('project-header');
    projectName.textContent = object.title;
    projectContainer.appendChild(projectName);


    let projectDescription = document.createElement('div');
    projectDescription.classList.add('project-description');
    projectDescription.textContent = object.description;
    projectContainer.appendChild(projectDescription);


    let unorderedList = document.createElement('ul');
    projectContainer.appendChild(unorderedList);



    tasks.forEach(task => {
      let item = document.createElement('li')
      unorderedList.appendChild(item);

      let inputCheckBox = document.createElement('input');
      let taskIndex = findIndexOf(task, tasks);
      inputCheckBox.dataset['taskIndex'] = taskIndex;      
      inputCheckBox.type = 'checkbox';
      inputCheckBox.name = `task${todoIndex}${taskIndex}`;
      inputCheckBox.id = `task${todoIndex}${taskIndex}`;
      inputCheckBox.classList.add('task');
      inputCheckBox.autocomplete = 'off';
      item.appendChild(inputCheckBox);

      let inputLabel = document.createElement('label');
      inputLabel.setAttribute('for', `task${todoIndex}${taskIndex}`);
      inputLabel.textContent = task
      item.appendChild(inputLabel)


    })

    const checkbox = [...document.querySelectorAll('.task')]
    checkbox.forEach(task => {
      task.addEventListener("click", toggleTaskComplete)
    });







  }


  return { updatePage }


})();


export { renderTodo }