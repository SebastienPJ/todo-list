import { todo } from "./index";
import { createElements } from "./create";
import { format } from "date-fns";

const renderTodo = (() => {

  const updatePage = (menuButtonSelected) => {

    clearDisplay();

    _contentDisplay.appendChild(createElements.createDisplayHeader(menuButtonSelected))

    _contentDisplay.appendChild(createElements.createPageList(menuButtonSelected))


    _contentDisplay.appendChild(createElements.createAddButton(menuButtonSelected));
  
  };


  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };


  const stopScrolling = () => {

    document.classList.toggle('stop-scolling')
  }


  
  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');
    form.classList.add('current-form-inuse');
    window.scrollTo({top:0});
    document.documentElement.classList.toggle('stop-scrolling');
    _app.classList.toggle('move-to-background');

  };

  

  const closeForm = (formChosen) => {
    formChosen.classList.remove('current-form-inuse');
    formChosen.setAttribute('style', 'display: none');
    document.documentElement.classList.toggle('stop-scrolling')
    _app.classList.toggle('move-to-background');



  };







  const clearOldOptions = (tag) => {
    let options = [...tag.options];
  
    options.forEach(option => {
      if (option.textContent != "") {
        option.remove()
      }
    })

  };


  const addItemsToFormOptions = (selectTag, array) => {
    clearOldOptions(selectTag);

    array.forEach(item => {
      let newOption = document.createElement('option');
      typeof item == 'object'? newOption.textContent = item.title: newOption.textContent = item;
      selectTag.add(newOption)      
    });

  };



  const prefillEditForm = (e) => { 

    let _todoIndex = e.target.dataset.overallTaskIndex

    let _allTodoArray = todo.getTodoList();

    let _currentTodoObject = _allTodoArray[_todoIndex];


    _editTitle.value = _currentTodoObject.title;
    
    if (_currentTodoObject.hasOwnProperty('notes')) {
      _editNotes.value = _currentTodoObject.notes;
    };

    if (_currentTodoObject.hasOwnProperty('dueDate') && _currentTodoObject.dueDate !== '') {
      _editDueDate.value = format(_currentTodoObject.dueDate, 'yyyy-MM-dd');
    }


    if (_currentTodoObject.hasOwnProperty('priority')) {
      _editPriority.value = _currentTodoObject.priority;
    }


    if (_currentTodoObject.hasOwnProperty('project')) {
      _editProject.value = _currentTodoObject.project;
    }

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



  const _contentDisplay = document.querySelector('.todo-display');
  const _app = document.querySelector('.todo-app')


  const _editTitle = document.querySelector('#edit-title');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');
  const _editProject = document.querySelector('#edit-form-proj-select-tag');


  const _editProjName = document.querySelector('#edit-project-name');




 
  return { updatePage, openForm, closeForm, addItemsToFormOptions, prefillEditForm, prefillProjForm, stopScrolling }
})();


export { renderTodo }