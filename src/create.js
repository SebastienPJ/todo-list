import { todo } from ".";
import { renderTodo } from "./render";



const createElements = (() => {


  const createDisplayHeader = (highlightedButton) => {

    let title = highlightedButton.textContent;
    
    const _headerContainer = document.createElement('header');
    _headerContainer.classList.add('display-menu-header')
    _contentContainer.appendChild(_headerContainer);


    const pageTitle = document.createElement('h1');
    pageTitle.textContent = title;
    _headerContainer.appendChild(pageTitle);


    return _headerContainer

  };



  const createAddButton = (currentMenu) => {

    let currentMenuTitle = currentMenu.textContent;

    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.textContent = '+';

    if (currentMenuTitle == 'Projects') {
      todoButton.classList.add('add-new-project-button');
      todoButton.addEventListener('click', function() {
        renderTodo.openForm(todo.projectFormPopup)
        renderTodo.addTodosToFormOptions(todo.projFormSelectTag, todo.getTodoList())
      })
      
    } else {
      todoButton.classList.add('add-new-todo-button');
      todoButton.addEventListener('click', function() {
        renderTodo.openForm(todo.todoFormPopup)
        renderTodo.addProjectsToFormOptions(todo.todoFormSelectTag, todo.getProjectList())

      })

    }

    return todoButton
  };
  




  const createAllTodosList = () => {
    const listContainer = document.createElement('div');

    const unorderdList = document.createElement('ul');
    listContainer.appendChild(unorderdList);

    let allTasksArray = todo.getTodoList();

    allTasksArray.forEach(task => {
      let todoIndex = todo.findIndexOf(task, allTasksArray);

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
          priorityMarker.style.backgroundColor = HIGH_PRIORITY
          break;
        
        case 'medium':
          priorityMarker.style.display = 'inline-block'
          priorityMarker.style.backgroundColor = MEDIUM_PRIORITY
          break;
        
        case 'low':
          console.log(task.priority);
          priorityMarker.style.display = 'inline-block'
          priorityMarker.style.backgroundColor = LOW_PRIORITY
          break;
      
        default:
          priorityMarker.style.display = 'none'
          break;
      };     

      shownContent.appendChild(priorityMarker);





      const editButton = document.createElement('button');
      editButton.dataset['taskIndex'] = todoIndex; 
      editButton.classList.add('hide');
      editButton.textContent = 'edit';
      editButton.addEventListener('click', (e) => {
        renderTodo.openForm(todo.editFormPopup);
        renderTodo.addProjectsToFormOptions(todo.editFormSelectTag, todo.getProjectList())
        renderTodo.prefillEditForm(e);
        todo.tagEditSubmitButtonWithIndex(e);
      });

      shownContent.appendChild(editButton);






      const expandButton = document.createElement('button');
      expandButton.classList.add('hide', 'expand');
      expandButton.textContent = 'expand';
      expandButton.addEventListener('click', function() {
        this.classList.toggle('active');
        // console.log(this);
        let hiddenContent = this.parentElement.nextElementSibling;
        if (hiddenContent.style.display === 'block') {
          hiddenContent.style.display = 'none';
        } else {
          hiddenContent.style.display = 'block';
        }
      });
      
      shownContent.appendChild(expandButton);






      const projectContainer = document.createElement('p');
      projectContainer.classList.add('project-section');
      if ('project' in task) {
        projectContainer.textContent = `Project: ${task.project}`;
      };
      shownContent.appendChild(projectContainer);




      const dueDateContainer = document.createElement('p');
      dueDateContainer.classList.add('due-date')
      if ('dueDate' in task) {
        dueDateContainer.textContent = `Due: ${task.dueDate}`;
      }
      shownContent.appendChild(dueDateContainer);






      const collapsedContainer = document.createElement('div');
      collapsedContainer.classList.add('todo-detail');
      listedTask.appendChild(collapsedContainer);



      const notesContainer = document.createElement('div');
      notesContainer.classList.add('detail-container');
      'notes' in task? notesContainer.textContent = task.notes: 
                        notesContainer.textContent = 'No notes for this task. Edit task to add notes';
      collapsedContainer.appendChild(notesContainer);






      unorderdList.appendChild(listedTask);






    });

    return listContainer


  };


  const createProjectsList = () => {

    const _listOfTasks = todo.getTodoList();
    const _listOfProjects = todo.getProjectList();


    if (_listOfProjects.length == 0) {
      const _noProjectMessage = document.createElement('p');
      _noProjectMessage.textContent = 'No projects yet created, click button to create a new project'

      return _noProjectMessage;
    };





    const _pageDisplay = document.createElement('div');

    _listOfProjects.forEach(_projectName => {
      const _projContainer = document.createElement('div');
      _projContainer.classList.add('project-container');
      _pageDisplay.appendChild(_projContainer);


      const _projHeader = document.createElement('h2');
      _projHeader.textContent = _projectName;
      _projContainer.appendChild(_projHeader);


      const _uL = document.createElement('ul');
      _projContainer.appendChild(_uL)


      let _tasksBelongingToProj = _listOfTasks.filter(task => task.project == _projectName)

      _tasksBelongingToProj.forEach(_task => {
        let _taskIndex = todo.findIndexOf(_task, _tasksBelongingToProj);
        let _projIndex = todo.findIndexOf(_projectName, _listOfProjects);  

        const _list = document.createElement('li');
        _list.classList.add('list');
        _uL.appendChild(_list);


        const _visibleContent = document.createElement('div');
        _visibleContent.classList.add('shown-content');
        _list.appendChild(_visibleContent);





        let _checkBox = document.createElement('input');
        _checkBox.setAttribute('type', 'checkbox');
        _checkBox.addEventListener('click', (e) => {
          renderTodo.toggleTaskComplete(e);
          // editTodo.updateObject();
        });

        _checkBox.dataset['projectIndex'] = _projIndex; 
        _checkBox.dataset['taskIndex'] = _taskIndex; 
        _checkBox.name = `obj${_projIndex}task${_taskIndex}`;    
        _checkBox.id = `obj${_projIndex}task${_taskIndex}`;  
        _checkBox.classList.add('checkbox');

        _visibleContent.appendChild(_checkBox);






        let _label = document.createElement('label');
        _label.setAttribute('for', `obj${_projIndex}task${_taskIndex}`);

        _label.textContent = _task.title;

        _visibleContent.appendChild(_label)




        const _priorityMarker = document.createElement('div');
        _priorityMarker.classList.add('priority-marker');

        switch (_task.priority) {
          case 'high':
            _priorityMarker.style.display = 'inline-block'
            _priorityMarker.style.backgroundColor = HIGH_PRIORITY
            break;
          
          case 'medium':
            _priorityMarker.style.display = 'inline-block'
            _priorityMarker.style.backgroundColor = MEDIUM_PRIORITY
            break;
          
          case 'low':
            _priorityMarker.style.display = 'inline-block'
            _priorityMarker.style.backgroundColor = LOW_PRIORITY
            break;
        
          default:
            _priorityMarker.style.display = 'none'
            break;
        };


        _visibleContent.appendChild(_priorityMarker);




        const _expandButton = document.createElement('button');
        _expandButton.classList.add('hide', 'expand');
        _expandButton.textContent = 'expand';
        _expandButton.addEventListener('click', function() {
          this.classList.toggle('active');
          let _hiddenContent = this.parentElement.nextElementSibling;
          if (_hiddenContent.style.display === 'block') {
            _hiddenContent.style.display = 'none';
          } else {
            _hiddenContent.style.display = 'block';
          }
        });
        
        _visibleContent.appendChild(_expandButton);



        
  
  
  
        const _dueDateContainer = document.createElement('p');
        _dueDateContainer.classList.add('due-date-section');
        if ('dueDate' in _task) {
          _dueDateContainer.textContent = `Due: ${_task.dueDate}`;
        }
        _visibleContent.appendChild(_dueDateContainer);
  
  
  
  
  
  
        const _collapsedContainer = document.createElement('div');
        _collapsedContainer.classList.add('todo-detail');
        _list.appendChild(_collapsedContainer);
  
  
  
        const _notesContainer = document.createElement('div');
        _notesContainer.classList.add('detail-container');
        'notes' in _task? _notesContainer.textContent = _task.notes: 
                          _notesContainer.textContent = 'No notes for this task. Edit task to add notes';
        _collapsedContainer.appendChild(_notesContainer);






      })


      

    })




    return _pageDisplay





  };



  const createPageList = (buttonSelected) => {
    let menuSelected = buttonSelected.textContent

    const returnedList = {
      'All ToDos': createAllTodosList,
      // 'Today': todayList,
      // 'Tomorrow': tomorrowList,
      'Projects': createProjectsList,

    };


    return returnedList[menuSelected]();
    
  }



  

  const _contentContainer = document.querySelector('.todo-display');


  const HIGH_PRIORITY = 'red';
  const MEDIUM_PRIORITY = 'orange';
  const LOW_PRIORITY = 'cornflowerblue';



  



  return { createDisplayHeader, createAddButton, createPageList }
})();


export { createElements }