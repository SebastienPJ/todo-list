import { todo } from ".";


const create = (() => {

  const newTodoButton = () => {
    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.classList.add('add-new-todo-button');
    todoButton.textContent = '+';
    todoButton.addEventListener('click', todo.openNewTodoForm)

    return todoButton
  }

  const displayHeader = (title) => {
    
    const _headerContainer = document.createElement('header');
    _headerContainer.classList.add('display-menu-header')
    _contentContainer.appendChild(_headerContainer);


    const pageTitle = document.createElement('h1');
    pageTitle.textContent = title;
    _headerContainer.appendChild(pageTitle);


    return _headerContainer

  }

  const toggleTaskComplete = (e) => {
    console.log(e);
    console.log("task is complete")

    let task = e.target.labels[0];
    task.classList.toggle('task-done')


  }


  const listOfTodos = (menuClicked) => {
   

    const allToDosList = () => {
      const listContainer = document.createElement('div')

      const unorderdList = document.createElement('ul');
      listContainer.appendChild(unorderdList);

      let taskArray = todo.getTodoList();

      

      taskArray.forEach(task => {
        let todoIndex = todo.findIndexOf(task, taskArray)

        const listedTask = document.createElement('li');
        listedTask.classList.add('list')

        let inputCheckBox = document.createElement('input');
        inputCheckBox.setAttribute('type', 'checkbox');
        inputCheckBox.addEventListener('click', toggleTaskComplete);

        inputCheckBox.dataset['taskIndex'] = todoIndex; 

        inputCheckBox.name = `task${todoIndex}`;
    
        inputCheckBox.id = `task${todoIndex}`;  
        inputCheckBox.classList.add('task');
        inputCheckBox.autocomplete = 'off';
        
        
        listedTask.appendChild(inputCheckBox);


        let inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', `task${todoIndex}`);

        inputLabel.textContent = task.title;

        listedTask.appendChild(inputLabel);


        const editButton = document.createElement('button');
        editButton.classList.add('hide');
        editButton.textContent = 'edit';
        listedTask.appendChild(editButton);

        const expandButton = document.createElement('button');
        expandButton.classList.add('hide');
        expandButton.textContent = 'expand';
        listedTask.appendChild(expandButton);

   

        unorderdList.appendChild(listedTask);
        
      })

      
      return listContainer


    }
    
    
    const listReturned = {
      'All ToDos': allToDosList,
      // 'Today': todayList,
      // 'Tomorrow': tomorrowList,
      // 'Projects': projectsList

    }

    return listReturned[menuClicked]();
  }

  const _contentContainer = document.querySelector('.todo-display');



  return { displayHeader, newTodoButton, listOfTodos }
})();


export { create }