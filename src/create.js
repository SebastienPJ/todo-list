import { todo } from ".";
import { editTodo } from "./edit";
import { renderTodo } from "./render";



const create = (() => {

  const newTodoButton = (menu) => {
    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.textContent = '+';

    if (menu == 'Projects') {
      todoButton.classList.add('add-new-project-button');
      todoButton.addEventListener('click', renderTodo.openForm.bind(todoButton, todo.projectFormPopup))
      
    } else {
      todoButton.classList.add('add-new-todo-button');
      todoButton.addEventListener('click', renderTodo.openForm.bind(todoButton, todo.todoFormPopup))

    }



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
        listedTask.classList.add('list');


        const shownContent = document.createElement('div');
        shownContent.classList.add('shown-content');
        listedTask.appendChild(shownContent);



        let inputCheckBox = document.createElement('input');
        inputCheckBox.setAttribute('type', 'checkbox');
        inputCheckBox.addEventListener('click', (e) => {
          renderTodo.toggleTaskComplete(e);
          // editTodo.updateObject();
        });

        inputCheckBox.dataset['taskIndex'] = todoIndex; 

        inputCheckBox.name = `task${todoIndex}`;
    
        inputCheckBox.id = `task${todoIndex}`;  
        inputCheckBox.classList.add('checkbox');
        // inputCheckBox.autocomplete = 'off';
        
        
        shownContent.appendChild(inputCheckBox);


        let inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', `task${todoIndex}`);

        inputLabel.textContent = task.title;

        shownContent.appendChild(inputLabel);



        const priorityMarker = document.createElement('div');
        priorityMarker.classList.add('priority-marker');

        switch (task.priority) {
          case 'high':
            priorityMarker.style.display = 'inline-block'
            priorityMarker.style.backgroundColor = 'red'
            break;
          
          case 'medium':
            priorityMarker.style.display = 'inline-block'
            priorityMarker.style.backgroundColor = 'orange'
            break;
          
          case 'low':
            console.log(task.priority);
            priorityMarker.style.display = 'inline-block'
            priorityMarker.style.backgroundColor = 'cornflowerblue'
            break;
        
          default:
            priorityMarker.style.display = 'none'
            break;
        }
        

        shownContent.appendChild(priorityMarker)


        const editButton = document.createElement('button');
        editButton.classList.add('hide');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', (e) => {
          renderTodo.openForm(todo.editFormPopup)
          editTodo.prefillEditForm(e);
          editTodo.tagEditFormWithIndex(e);
        });
        shownContent.appendChild(editButton);

        const expandButton = document.createElement('button');
        expandButton.classList.add('hide', 'expand');
        expandButton.textContent = 'expand';
        expandButton.addEventListener('click', function() {
          this.classList.toggle('active');
          console.log(this);
          let hiddenContent = this.parentElement.nextElementSibling;
          if (hiddenContent.style.display === 'block') {
            hiddenContent.style.display = 'none';
          } else {
            hiddenContent.style.display = 'block';
          }
        })


        shownContent.appendChild(expandButton);




        const projectContainer = document.createElement('p');
        projectContainer.classList.add('project-container');
        if ('project' in task) {
          projectContainer.textContent = `Project: ${task.project}`;
        }
        shownContent.appendChild(projectContainer)


        

        const dueDateContainer = document.createElement('p');
        dueDateContainer.classList.add('due-date')

        dueDateContainer.textContent = `By: ${task.dueDate}`;
        shownContent.appendChild(dueDateContainer);






   


        const collapsedContainer = document.createElement('div');
        collapsedContainer.classList.add('todo-detail');
        listedTask.appendChild(collapsedContainer);



        const notesContainer = document.createElement('div');
        notesContainer.classList.add('detail-container');
        if ('notes' in task) {
          notesContainer.textContent = task.notes;
        }
        collapsedContainer.appendChild(notesContainer);






        unorderdList.appendChild(listedTask);


      
        
      })

      
      return listContainer


    }
    

    const projectsList = () => {
      console.log("I've got the jects");
      
      const listOfProjects = todo.getProjectList();

      if (listOfProjects.length == 0) {
        const newProjectMessage = document.createElement('p');
        newProjectMessage.textContent = 'No projects yet created, click button to create'

        return newProjectMessage;
      }

    
    }

    const todayList = () => {
      console.log("Do this today");
    }

    const tomorrowList = () => {
      console.log("One more day with your lazy behind");
    }
    
    const listReturned = {
      'All ToDos': allToDosList,
      'Today': todayList,
      'Tomorrow': tomorrowList,
      'Projects': projectsList

    }

    return listReturned[menuClicked]();
  }



  const _contentContainer = document.querySelector('.todo-display');



  return { displayHeader, newTodoButton, listOfTodos }
})();


export { create }