import { todo } from ".";


const create = (() => {

  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  }


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
    let task = document.createElement('li');

    let inputCheckBox = document.createElement('input');
    
    // let taskIndex = findIndexOf(taskObj, taskArray);
    
    // let projectObjectIndex = findIndexOf(projectObj, todo.getList())
    
    // inputCheckBox.dataset['taskIndex'] = taskIndex; 

    // inputCheckBox.name = `task${projectObjectIndex}${taskIndex}`;

    // inputCheckBox.id = `task${projectObjectIndex}${taskIndex}`;  
    // inputCheckBox.classList.add('task');
    // inputCheckBox.autocomplete = 'off';
    
    
    // task.appendChild(inputCheckBox);


    // let inputLabel = document.createElement('label');
    // inputLabel.setAttribute('for', `task${projectObjectIndex}${taskIndex}`);
   
    // let contentKey = Object.keys(taskObj);
    // console.log(`contentKey: ${contentKey}`);


    return task
  }


  const createTaskSection = (newObj) => {
    let taskSection = document.createElement('ul');


    let tasksOnly = separateTasksFromObj(newObj);
    console.log(tasksOnly);

    tasksOnly.forEach(taskObj => {
      // console.log(taskObj);
      // console.log(findIndexOf(taskObj,tasksOnly))
      taskSection.appendChild(listTasks(taskObj, tasksOnly. newObj));

    })




    return taskSection
  }



  const projectContainer = (obj) => {

    let container = document.createElement('div');
    container.classList.add('project-container');

    let todoIndex = findIndexOf(obj, todo.getList());

    console.log(todoIndex);
    
    container.dataset['objIndex'] = todoIndex;


    container.appendChild(createNameSection(obj));

    container.appendChild(createDescriptionSection(obj));

    container.appendChild(createTaskSection(obj));




    return container;
  }



  return { projectContainer }
})();


export { create }