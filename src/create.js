import { todo } from ".";
import { editTodo } from "./edit";
import { renderTodo } from "./render";



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
        inputCheckBox.addEventListener('click', (e) => {
          renderTodo.toggleTaskComplete(e);
          // editTodo.updateObject();
        });

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
        editButton.addEventListener('click', (e) => {
          editTodo.openEditForm()
          editTodo.prefillEditForm(e);
          editTodo.tagEditFormWithIndex(e);
        });
        listedTask.appendChild(editButton);

        const expandButton = document.createElement('button');
        expandButton.classList.add('hide', 'expand');
        expandButton.textContent = 'expand';
        expandButton.addEventListener('click', function() {
          this.classList.toggle('active');
          let content = this.nextElementSibling;
          if (content.style.display === 'flex') {
            content.style.display = 'none';
          } else {
            content.style.display = 'flex';
          }
        })


        listedTask.appendChild(expandButton);


        const dueDateContainer = document.createElement('p');
        dueDateContainer.classList.add('due-date')
        dueDateContainer.textContent = task.dueDate;
        listedTask.appendChild(dueDateContainer)

   


        const collapsedContainer = document.createElement('div');
        collapsedContainer.classList.add('todo-detail');
        listedTask.appendChild(collapsedContainer);


        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('detail-container');
        descriptionContainer.textContent = task.description;
        collapsedContainer.appendChild(descriptionContainer);


        const notesContainer = document.createElement('div');
        notesContainer.classList.add('detail-container');
        if ('notes' in task) {
          notesContainer.textContent = task.notes;
        }
        collapsedContainer.appendChild(notesContainer);






        // const todoDetail = document.createElement('p');
        // todoDetail.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
        // collapsedContainer.appendChild(todoDetail);








        unorderdList.appendChild(listedTask);


      
        
      })

      
      return listContainer


    }
    

    const projectsList = () => {

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