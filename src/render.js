import { todo } from "./index";
import { createElements } from "./create";


const renderTodo = (() => {


  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');
    form.classList.add('current-form-inuse');

  };



  const closeForm = (formChosen) => {
    ////// Need to reset form when being closed, now data stays
    formChosen.classList.remove('current-form-inuse');
    formChosen.setAttribute('style', 'display: none');

  };




  const prefillEditForm = (e) => { 
    console.log(e);

    let _todoIndex = e.target.dataset.overallTaskIndex

    let _allTodoArray = todo.getTodoList();

    let _currentTodoObject = _allTodoArray[_todoIndex];


    _editTitle.value = _currentTodoObject.title;
    // _editDescription.value = _currentTodoObject.description;
    
    if (_currentTodoObject.hasOwnProperty('notes')) {
      _editNotes.value = _currentTodoObject.notes;
    };

    if (_currentTodoObject.hasOwnProperty('dueDate')) {
      _editDueDate.value = _currentTodoObject.dueDate;
    }


    if (_currentTodoObject.hasOwnProperty('priority')) {
      _editPriority.value = _currentTodoObject.priority;
    }


    if (_currentTodoObject.hasOwnProperty('project')) {
      _editProject.value = _currentTodoObject.project;
    }


    // _editDueDate.value = _currentTodoObject.dueDate
    // _editPriority.value = _currentTodoObject.priority


  };



  const prefillProjForm = (values, optionsArray) => {

    let _currentProjName = values.listOfProjects[values.projectIndex]

    _editProjName.value = _currentProjName

    let _selectedValues = values.tasksBelongingToProj.map(task => task.title)
    
    for (const option of optionsArray) {
  
      option.removeAttribute('selected');

      if (_selectedValues.includes(option.value)) {
        option.setAttribute('selected', 'selected');
      }
    
    };

  };



  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };



  const clearOldOptions = (tag) => {
    let options = [...tag.options];
  
    options.forEach(option => {
      if (option.textContent != "") {
        option.remove()
      }
    })

  };




  const addTodosToFormOptions = (selectTag, allTodosArray) => {
    clearOldOptions(selectTag);

    allTodosArray.forEach(todo => {
      let newOption = document.createElement('option');
      newOption.textContent = todo.title
      selectTag.add(newOption)      
    });
    


  };




  const addProjectsToFormOptions= (selectTag, allProjectsArray) => {
    clearOldOptions(selectTag);

    allProjectsArray.forEach(project => {
      let option = document.createElement('option');
      option.textContent = project
      selectTag.add(option)      
    });
  };





  const toggleTaskComplete = (e) => {
    let task = e.target.labels[0];

    if (e.target.checked) {
      console.log("task is complete")

      task.classList.add('task-done')

    } else {
      console.log("task incomplete");
      task.classList.remove('task-done')

    }

  };





  const updatePage = (menuButtonSelected) => {

    clearDisplay();

    _contentDisplay.appendChild(createElements.createDisplayHeader(menuButtonSelected))

    _contentDisplay.appendChild(createElements.createPageList(menuButtonSelected))


    _contentDisplay.appendChild(createElements.createAddButton(menuButtonSelected));





  
  }



  const _contentDisplay = document.querySelector('.todo-display');


  const _editForm = document.querySelector('#edit-todo-form');  


  const _editTitle = document.querySelector('#edit-title');
  // const _editDescription = document.querySelector('#edit-description');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');
  const _editProject = document.querySelector('#edit-project')


  const _editProjName = document.querySelector('#edit-project-name');




 
  return { openForm, closeForm, updatePage, addTodosToFormOptions,
          addProjectsToFormOptions, toggleTaskComplete, prefillEditForm, prefillProjForm }


})();


export { renderTodo }