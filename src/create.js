import { todo } from ".";


const create = (() => {



  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  };



  const toggleTaskComplete = (e) => {
 
    console.log(e);

    let task = e.target.labels[0];
    
    let boxChecked = e.target.checked;

    console.log(boxChecked);


    task.classList.toggle('task-done')

  };




  const createNameSection = (todoObject) => {

    let section = document.createElement('h2');
    section.classList.add('project-header');
    section.textContent = todoObject.title;

    return section;

  };





  const createDescriptionSection = (object) => {

    let description = document.createElement('div');
    description.classList.add('project-description');
    description.textContent = object.description;


    return description;
  }


  const separateTasksFromObj = (objectCreated) => {
    let keys = Object.keys(objectCreated)
    let tasks;

    keys.forEach(key => {
      if (key == "all-tasks") {
        tasks = objectCreated[key];
      }
    })
 
    return tasks
  };





  const listTasks = (taskObjPassed, taskArray, projectObj) => {
    console.log(taskObjPassed);
    console.log(taskArray);
    console.log(projectObj);

    let task = document.createElement('li');

    let taskIndex = findIndexOf(taskObjPassed, taskArray);

    let projectObjectIndex = findIndexOf(projectObj, todo.getList())


    let inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute('type', 'checkbox');
    inputCheckBox.addEventListener('click', toggleTaskComplete);

        
    
    inputCheckBox.dataset['taskIndex'] = taskIndex; 

    inputCheckBox.name = `task${projectObjectIndex}${taskIndex}`;

    inputCheckBox.id = `task${projectObjectIndex}${taskIndex}`;  
    inputCheckBox.classList.add('task');
    inputCheckBox.autocomplete = 'off';
    
    
    task.appendChild(inputCheckBox);


    let inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', `obj${projectObjectIndex},task${taskIndex}`);
   
    let contentKey = Object.keys(taskObjPassed);
    let labelValue;

    contentKey.forEach(key => {
      if (key.includes('task')) {
        labelValue = taskObjPassed[key];
        inputLabel.textContent = labelValue;
        task.appendChild(inputLabel);
      }
    });

    return task
  };




  const createTaskSection = (newObj) => {
    let taskSection = document.createElement('ul');


    let tasksOnly = separateTasksFromObj(newObj);
    console.log(tasksOnly);

    tasksOnly.forEach(taskObj => {
      let section = listTasks(taskObj, tasksOnly, newObj);
      taskSection.appendChild(section);
    });




    return taskSection
  };



  

  const projectContainer = (obj) => {

    let container = document.createElement('div');
    container.classList.add('project-container');

    let todoIndex = findIndexOf(obj, todo.getList());

    console.log(todoIndex);
    
    container.dataset['objIndex'] = todoIndex;


    container.appendChild(createNameSection(obj));

    container.appendChild(createDescriptionSection(obj));

    container.appendChild(createTaskSection(obj));


    const markTaskComplete = [...document.querySelectorAll('.task')]

    console.log(markTaskComplete);

    markTaskComplete.forEach(task => {
      task.addEventListener("click", toggleTaskComplete)
    });




    return container;
  }



  return { projectContainer }
})();


export { create }