import { todo } from ".";
import { renderTodo } from "./render";
import Bin from './images/bin.png'
import { isDate, format, isToday, isThisYear } from "date-fns";




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

    let _currentMenuTitle = currentMenu.textContent;

    let _todoTitlesList = todo.getTodoList().map(todo => todo.title);

    const _todoButton = document.createElement('button');
    _todoButton.setAttribute('type', 'button');
    _todoButton.textContent = '+';
    

    if (_currentMenuTitle == 'Projects') {
      _todoButton.classList.add('add-new-project-button');
      _todoButton.addEventListener('click', function() {
        renderTodo.openForm(todo.projectFormContainer)
        renderTodo.addItemsToFormOptions(todo.projFormSelectTag, _todoTitlesList)
      })
      
    } else {
      _todoButton.classList.add('add-new-todo-button');
      _todoButton.addEventListener('click', function() {
        renderTodo.openForm(todo.todoFormContainer)
        renderTodo.addItemsToFormOptions(todo.todoFormSelectTag, todo.getProjectList())

      })

    }

    return _todoButton
    
  };




  const createPageList = (buttonSelected) => {
    let menuSelected = buttonSelected.textContent

    const returnedList = {
      'All ToDos': createAllTodosList,
      'Today': createTodayList,
      'Tomorrow': createTomorrowList,
      'Projects': createProjectsList,

    };


    return returnedList[menuSelected]();
    
  };


  const createAllTodosList = () => {

    let _allTasksArray = todo.getTodoList();

    if (_allTasksArray.length == 0) {
      const _noTodosMessage = document.createElement('p');
      _noTodosMessage.textContent = 'No tasks yet created, click button to create a new task'

      return _noTodosMessage;
    };


    const _listContainer = document.createElement('div');

    let uL = createListOfTasks(_allTasksArray, _allTasksArray)

    _listContainer.appendChild(uL);



    return _listContainer


  };



  const createTodayList = () => {

    let _dueTodayList = todo.getTodayList();
    let _allTasksArray = todo.getTodoList();


    if (_dueTodayList.length == 0) {
      const _noTodosMessage = document.createElement('p');
      _noTodosMessage.textContent = 'YAY! No tasks do today'

      return _noTodosMessage;
    };

    const _listContainer = document.createElement('div');


    let uL = createListOfTasks(_dueTodayList, _allTasksArray)

    _listContainer.appendChild(uL);


    
    return _listContainer


  };



  const createTomorrowList = () => {

    let _dueTomorrowList = todo.getTomorrowList();
    let _allTasksArray = todo.getTodoList();


    if (_dueTomorrowList.length == 0) {
      const _noTodosMessage = document.createElement('p');
      _noTodosMessage.textContent = 'YAY! No tasks do tomorrow'

      return _noTodosMessage;
    };

    const _listContainer = document.createElement('div');


    let uL = createListOfTasks(_dueTomorrowList, _allTasksArray)

    _listContainer.appendChild(uL);


    
    return _listContainer


  }


  const createProjectsList = () => {

    const _listOfAllTasks = todo.getTodoList();
    const _listOfProjects = todo.getProjectList();


    if (_listOfProjects.length == 0) {
      const _noProjectMessage = document.createElement('p');
      _noProjectMessage.textContent = 'No projects yet created, click button to create a new project'

      return _noProjectMessage;
    };


    const _pageDisplay = document.createElement('div');

    _listOfProjects.forEach(_projectName => {
      let _projIndex = _listOfProjects.indexOf(_projectName); 


      const _projContainer = document.createElement('div');
      _projContainer.classList.add('project-container');
      _pageDisplay.appendChild(_projContainer);

      const _projHeader = document.createElement('div');
      _projHeader.classList.add('project-title');
      _projContainer.appendChild(_projHeader);


      const _projNameSection = document.createElement('h2');
      _projNameSection.textContent = _projectName;
      _projHeader.appendChild(_projNameSection);


      let _tasksBelongingToProj = _listOfAllTasks.filter(task => task.project == _projectName)

      const _editProjButton = document.createElement('button');
      _editProjButton.textContent = 'Edit Project';
      _editProjButton.classList.add('edit-project-button');
      _editProjButton.dataset['projectIndex'] = _projIndex;
      _editProjButton.addEventListener('click', function(e) {

        renderTodo.openForm(todo.editProjFormContainer);
        renderTodo.addItemsToFormOptions(todo.editProjSelectTag, _tasksBelongingToProj)


        let _options = todo.editProjSelectTag.options;
        let _valuesNeeded = {'projectIndex': _projIndex, 'listOfProjects': _listOfProjects, 'tasksBelongingToProj': _tasksBelongingToProj};
        renderTodo.prefillProjForm(_valuesNeeded, _options);


        let _todoListTitlesArray = todo.getTodoList().map(item => item.title)
        todo.tagWithIndex([...todo.editProjSelectTag.selectedOptions], _todoListTitlesArray)

        todo.tagWithIndex([todo.projectNameInput], todo.getProjectList())

        todo.deleteProjectButton.dataset['overallIndex'] = _projIndex
        todo.deleteAllButton.dataset['overallIndex'] = _projIndex
      })

      _projHeader.appendChild(_editProjButton);




      const _listContainer = document.createElement('div');

      let uL = createListOfTasks(_tasksBelongingToProj, _listOfAllTasks)

      _listContainer.appendChild(uL);

      _projContainer.appendChild(_listContainer)   
      

    })




    return _pageDisplay

  };



  const createListOfTasks = (listOfTasks, allTodosArray) => {

    const _unorderedList = document.createElement('ul');
  
  
    listOfTasks.forEach(task => {
  
      let _overallTaskIndex = allTodosArray.indexOf(task);
  
  
      const list = document.createElement('li');
      list.classList.add('list');
    
    
    
      let _visibleContent = document.createElement('div');
      _visibleContent.classList.add('shown-content');
      list.appendChild(_visibleContent);
  
  
      let checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.classList.add('checkbox');
  
      checkBox.dataset['overallTaskIndex'] = _overallTaskIndex;
      checkBox.name = `task${_overallTaskIndex}`;
      checkBox.id = `task${_overallTaskIndex}`;
  
      checkBox.addEventListener('click', (e) => {
        renderTodo.toggleTaskComplete(e);
        // todo.updateObject()
      });
  
      _visibleContent.appendChild(checkBox);
  
  
  
      let label = document.createElement('label');
      label.classList.add('task-label');
      label.textContent = task.title;
  
      label.setAttribute('for', `task${_overallTaskIndex}`);
  
      _visibleContent.appendChild(label);
  
  
  
  
      let _priorityMarker = document.createElement('div');
      _priorityMarker.classList.add('priority-marker');
    
    
      switch (task.priority) {
        case 'high':
          _priorityMarker.style.display = 'inline-block'
          _priorityMarker.style.backgroundColor = HIGH_PRIORITY;
          break;
      
    
    
        case 'medium':
          _priorityMarker.style.display = 'inline-block'
          _priorityMarker.style.backgroundColor = MEDIUM_PRIORITY;
          break;
    
        
    
    
        case 'low':
          _priorityMarker.style.display = 'inline-block'
          _priorityMarker.style.backgroundColor = LOW_PRIORITY;
          break;
    
    
    
        default:
          _priorityMarker.style.display = 'none'
          break;
      };
    
      _visibleContent.appendChild(_priorityMarker);
  
  
  
      let editButton = document.createElement('button');
      editButton.classList.add('hide', 'edit-task-button')
      editButton.textContent = 'edit';
      editButton.dataset['overallTaskIndex'] = _overallTaskIndex;
      editButton.addEventListener('click', (e) => {
        renderTodo.openForm(todo.editFormContainer);
        renderTodo.addItemsToFormOptions(todo.editFormSelectTag, todo.getProjectList());
        renderTodo.prefillEditForm(e);
        todo.tagEditSubmitButtonWithIndex(e); /// LOOK INTO CHANGING THIS
  
      })
    
    
      _visibleContent.appendChild(editButton);  
  
  
      let _expandButton = document.createElement('button');
      _expandButton.classList.add('hide', 'expand-button')
      _expandButton.textContent = 'expand'
    
      _expandButton.addEventListener('click', function() {
  
        this.classList.toggle('active');
        this.classList.toggle('hide');
        this.previousSibling.classList.toggle('hide');
        this.previousSibling.classList.toggle('active');
        this.textContent == 'expand'? this.textContent = 'collapse' : this.textContent = 'expand';
    
    
        let _hiddenContent = this.parentElement.nextElementSibling;
        if (_hiddenContent.style.display === 'block') {
          _hiddenContent.style.display = 'none';
        } else {
          _hiddenContent.style.display = 'block';
        }
      });
    
      _visibleContent.appendChild(_expandButton);   
    
    
    
      let _projContainer = document.createElement('p');
      _projContainer.classList.add('project-section');
      if ('project' in task) {
        _projContainer.textContent = `Project: ${task.project}`;
      };
    
      _visibleContent.appendChild(_projContainer);
    
    
    
      let _dueDateContainer = document.createElement('p');
      _dueDateContainer.classList.add('due-date-section');
      if ('dueDate' in task) {
        isThisYear(task.dueDate)? _dueDateContainer.textContent = `Due: ${format(task.dueDate, 'MMM dd')}`:
                              _dueDateContainer.textContent = `Due: ${format(task.dueDate, 'MMM dd, yyyy')}`
        
      };
    
      _visibleContent.appendChild(_dueDateContainer);
  
  
  
  
      const _deleteBinContainer = document.createElement('div');
      _deleteBinContainer.classList.add('delete-bin-container');
      _visibleContent.appendChild(_deleteBinContainer);
  
  
      const _deleteBin = document.createElement('button');
      _deleteBin.classList.add('delete-bin-button');
      _deleteBin.dataset['overallTaskIndex'] = _overallTaskIndex;
  
      _deleteBin.addEventListener('click', function() {
        todo.deleteFromList(task, todo.getTodoList());   
        todo.updateDatedLists();
        todo.updateAllCounterData();
  
        renderTodo.updatePage(todo.findCurrentMenuSelected());
  
  
      });
  
      _deleteBinContainer.appendChild(_deleteBin);  
  
      const _deleteIcon = document.createElement('img');
      _deleteIcon.classList.add('delete-bin');
      _deleteIcon.src = Bin;
  
      _deleteBin.appendChild(_deleteIcon);
    
    
    
    
      let _collapsedContainer = document.createElement('div');
      _collapsedContainer.classList.add('hidden-container');
    
      list.appendChild(_collapsedContainer);
    
    
    
      let _notesContainer = document.createElement('div');
      _notesContainer.classList.add('notes-container');
      'notes' in task ? _notesContainer.textContent = task.notes : 
                _notesContainer.textContent = 'No notes for this task. Edit task to add notes';
      
      _collapsedContainer.appendChild(_notesContainer);


      _unorderedList.appendChild(list)
      
    });
  
  
  
    return _unorderedList
  
  }
 
   


  const _contentContainer = document.querySelector('.todo-display');

  const HIGH_PRIORITY = 'red';
  const MEDIUM_PRIORITY = 'orange';
  const LOW_PRIORITY = 'cornflowerblue';



  return { createDisplayHeader, createAddButton, createPageList,  }
})();


export { createElements }