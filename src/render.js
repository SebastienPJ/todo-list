
const renderTodo = (() => {


  const findTasks = (obj) => {
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


  const updatePage = (list) => {
    console.log('Todos have been rendered')
    console.log(list);


    list.forEach(todo => {

      let tasks = findTasks(todo);
     

      const projectDisplay = document.querySelector('.all-projects');

      
      let projectContainer = document.createElement('div');
      projectContainer.classList.add('project-container');
      projectDisplay.appendChild(projectContainer);


      let projectName = document.createElement('h2');
      projectName.classList.add('project-header');
      projectName.textContent = todo.title;
      projectContainer.appendChild(projectName);


      let projectDescription = document.createElement('div');
      projectDescription.classList.add('project-description');
      projectDescription.textContent = todo.description;
      projectContainer.appendChild(projectDescription);


      let unorderedList = document.createElement('ul');
      projectContainer.appendChild(unorderedList);



      tasks.forEach(task => {
        let item = document.createElement('li')
        unorderedList.appendChild(item);

        let inputCheckBox = document.createElement('input');
        inputCheckBox.type = 'checkbox';
        inputCheckBox.name = 'task';
        inputCheckBox.id = 'task';
        inputCheckBox.classList.add('task');
        inputCheckBox.autocomplete = 'off';
        item.appendChild(inputCheckBox);

        let inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', 'task');
        inputLabel.textContent = task
        item.appendChild(inputLabel)


      })

      const checkbox = [...document.querySelectorAll('.task')]
      checkbox.forEach(task => {
        task.addEventListener("click", toggleTaskComplete)
      });







            
      
    });






  }


  return { updatePage }


})();


export { renderTodo }