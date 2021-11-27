import { renderTodo } from "./render";
import './styles.css';
import { addDays, format, isToday, isTomorrow, parseISO } from "date-fns";

const todo = (() => {

  const todoFactory = (data) => {
   
    let title = data.get('title');
    let dueDate = parseISO(data.get('due-date'));
    let priority = data.get('priority');
    let isTodoDone = 'no';
    let project = data.get('part-of-project');


    return { title, dueDate, priority, project, isTodoDone }

  };



  const getTodoList = () => {
    return _todoList
  };


  const getProjectList = () => {
    return _projectList
  };

  const getTodayList = () => {
    return _dueToday
  };

  const getTomorrowList = () => {
    return _dueTomorrow
  }

  const captureFormData = (form) => {
    return new FormData(form)
  };


  const highlightSelectedButton = (event) => {

    const selectedButton = event.target;

    _menuButtons.forEach(item => {
      if (item.classList.contains('current-menu-selected')) {
        item.classList.remove('current-menu-selected')
      }
    })

    selectedButton.classList.add('current-menu-selected');

  };


  const findCurrentMenuSelected = () => {
    return [..._menuButtons].filter(button => button.classList.contains('current-menu-selected'))[0];
  };



  const tagEditSubmitButtonWithIndex = (e) => {
    let _index = e.target.dataset.overallTaskIndex
    _saveEditChangesButton.dataset.overallTaskIndex = _index;    
  };



  const tagWithIndex = (inputs, array) => {
    inputs.forEach(input => {
      let index = array.indexOf(input.value);
      input.dataset['overallIndex'] = index;
    })
  }



  const deleteFromList = (item, list) => {
    let itemIndex = list.indexOf(item);
    list.splice(itemIndex, 1);
  };



  const findCurrentFormInUse = () => {

    let allForms = [...document.querySelectorAll('.form-container')];
    
    let currentForm = allForms.filter(form => form.classList.contains('current-form-inuse'))[0]
 
    return currentForm;
  };



  const createTodo = function(e) {
    e.preventDefault();

    let _menu = findCurrentMenuSelected();



    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

  
    _todoList.push(_newTodo);

    updateDatedLists();

    updateAllCounterData();

    _todoForm.reset();
    renderTodo.closeForm(findCurrentFormInUse());
    
    
    renderTodo.updatePage(_menu)
  };  
  
  

  const createProject = (e) => {
    e.preventDefault();

    let _currentMenu = findCurrentMenuSelected();

    let _projectData = captureFormData(_projectForm);

    let _projectName = _projectData.get('project-name');

    if (_projectList.includes(_projectName)) {
      alert('project already exists');
      return;
    };

    _projectList.push(_projectName);

    updateAllCounterData();

    let _taskAddedToProj = [...projFormSelectTag.selectedOptions].map(option => option.value)

    addProjectToTaskObj(_projectName, _taskAddedToProj)



    
    renderTodo.updatePage(_currentMenu)

    _projectForm.reset();
    renderTodo.closeForm(findCurrentFormInUse()); 
  };


  const addProjectToTaskObj = (projName, projTasks) => {

    projTasks.forEach(taskName => {
      _todoList.forEach(todo => {
        if (taskName == todo.title) {
          todo.project = projName

        }
      })
    })
  }



  const saveEditChanges = (e) => {
    e.preventDefault();

    let _editedFormData = captureFormData(_editForm);

    let _listOfTodos = getTodoList();

    let _objIndex = e.target.dataset.overallTaskIndex;

    let _todoObj = _listOfTodos[_objIndex];

    let newTitle = _editedFormData.get('edit-title');
    let newNotes = _editedFormData.get('edit-notes');
    let newDueDate = _editedFormData.get('edit-due-date');
    let newPriority = _editedFormData.get('edit-priority');
    let newProject = _editedFormData.get('edit-project');

    _todoObj.title = newTitle;


    newDueDate == ''? delete _todoObj.dueDate: _todoObj.dueDate = newDueDate;

    newNotes == ''? delete _todoObj.notes: _todoObj.notes = newNotes;

    newPriority == ''? delete _todoObj.priority: _todoObj.priority = newPriority;

    newProject == ''? delete _todoObj.project: _todoObj.project = newProject;

    
    _editForm.reset();
    renderTodo.closeForm(findCurrentFormInUse());

    let _currentMenu = findCurrentMenuSelected();
    renderTodo.updatePage(_currentMenu);

  };



  const saveProjectChanges = (e) => {
    e.preventDefault();

    let _editedProjFormData = captureFormData(_editProjectForm);
    let _completeListOfTasks = getTodoList();
    let _completeListOfObjects = getProjectList();

    let _formOptions = [...editProjSelectTag.options];
    let _projIndex = projectNameInput.dataset.overallIndex;

   
    _formOptions.forEach(option => {
      if (!option.selected && option.value !== "") {
        let taskIndex = option.dataset.overallIndex;
        let taskObject = _completeListOfTasks[taskIndex];
        delete taskObject.project;
      }
    })

  
    let _newProjName = _editedProjFormData.get('edit-project-name');

    _completeListOfObjects[_projIndex] = _newProjName;

    _editProjectForm.reset();
    renderTodo.closeForm(findCurrentFormInUse());
    renderTodo.updatePage(findCurrentMenuSelected())

  };




  const updateAllCounterData = () => {

    _allTodoButton.setAttribute('counter-data', _todoList.length);
    _projectButton.setAttribute('counter-data', _projectList.length);
    _todayButton.setAttribute('counter-data', _dueToday.length)
    _tomorrowButton.setAttribute('counter-data', _dueTomorrow.length)


  }

  const updateDatedLists = () => {
    _dueToday = _todoList.filter(todo => isToday(todo.dueDate));
    _dueTomorrow = _todoList.filter(todo => isTomorrow(todo.dueDate));
  }


























  // const _todoList = []

  const _todoList = [
    {
      title: "Complete Presentation",
      dueDate: parseISO('2021-11-10'),
      priority: "medium",
      isTodoDone: "no",
      notes: "Notes on meeting prep",
      project: "Work"
    },

    {
      title: "Do groceries",
      dueDate: parseISO('2021-11-26'),
      priority: "high",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Home"
    },

    {
      title: "Fix Car Issues",
      dueDate: parseISO('2021-11-20'),
      priority: "medium",
      isTodoDone: "no",
      notes: "vroom vroom",
      project: "Work"
    },

    {
      title: "Do some stuff",
      dueDate: parseISO('2021-11-27'),
      priority: "low",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Car"
    },

    {
      title: "Do some secret stuff",
      dueDate: parseISO('2021-11-26'),
      priority: "medium",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Home"
    },

    {
      title: "Watch movies",
      dueDate: parseISO('2021-11-27'),
      priority: "high",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Home"
    },
  ];




  const _projectList = ['Home', 'Work', 'Car'];
  // const _projectList = [];


  let _dueToday = _todoList.filter(todo => isToday(todo.dueDate));


  let _dueTomorrow = _todoList.filter(todo => isTomorrow(todo.dueDate));

  





  const _todoForm = document.querySelector('#todo-form');
  const _projectForm = document.querySelector('#new-project-form');
  const _editForm = document.querySelector('#edit-todo-form');  
  const _editProjectForm = document.querySelector('#edit-project-form')
 


  const projFormSelectTag = document.querySelector('#project-form-select-tag');
  const todoFormSelectTag = document.querySelector('#todo-form-select-tag');
  const editFormSelectTag = document.querySelector('#edit-form-proj-select-tag');
  const editProjSelectTag = document.querySelector('#edit-project-select-tag');
  const todoFormContainer = document.querySelector('#todo-form-container');
  const editFormContainer = document.querySelector('#edit-todo-form-container');
  const projectFormContainer = document.querySelector('#new-project-form-container');
  const editProjFormContainer = document.querySelector('#edit-project-form-container')
  const projectNameInput = document.querySelector('#edit-project-name')


  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {

    button.addEventListener('click', function(e) {
      highlightSelectedButton(e);    
      let currentMenu = findCurrentMenuSelected();
      navLinks.classList.toggle('open');
      renderTodo.updatePage(currentMenu);
    });

  });




  const _todayButton = document.querySelector('#today-button');
  const _tomorrowButton = document.querySelector('#tomorrow-button');
  const _allTodoButton = document.querySelector('#all-todo-button');
  const _projectButton = document.querySelector('#projects-button');
  

  _allTodoButton.setAttribute('counter-data', _todoList.length);
  _projectButton.setAttribute('counter-data', _projectList.length);
  _todayButton.setAttribute('counter-data', _dueToday.length);
  _tomorrowButton.setAttribute('counter-data', _dueTomorrow.length);



  const navLinks = document.querySelector('.nav-links')
  const toggleMenu = document.querySelector('.toggle-menu');
  toggleMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('open')
  })





  const _submitTodoForm = document.querySelector('#submit-todo-form');
  _submitTodoForm.addEventListener('click', createTodo);

  const _saveEditChangesButton = document.querySelector('#save-todo-changes');
  _saveEditChangesButton.addEventListener('click', saveEditChanges);


  const _submitProjectForm = document.querySelector('#create-project');
  _submitProjectForm.addEventListener('click', createProject);

  const _saveProjectChangesButton = document.querySelector('#save-project-changes');
  _saveProjectChangesButton.addEventListener('click', saveProjectChanges)




  const _closeFormButtons = document.querySelectorAll('.close-form');
  _closeFormButtons.forEach(button => {
    button.addEventListener('click', function() {
      let _formContainer = findCurrentFormInUse();
      _formContainer.firstElementChild.reset();
      renderTodo.closeForm(_formContainer);
    })
  });



  const deleteProjectButton = document.querySelector('.delete-project')
  deleteProjectButton.addEventListener('click', function(e) {
    let indexOfProject = e.target.dataset.overallIndex
    let proj = getProjectList()[indexOfProject];
    let _menuCurrently = findCurrentMenuSelected();

    deleteFromList(proj, getProjectList())
    


    let optionsInTask = [...editProjSelectTag.options];
    optionsInTask.forEach(item => {

      if (item.value !== "") {
        let itemIndex = item.dataset.overallIndex;
        let itemObj = getTodoList()[itemIndex];
        delete itemObj.project
      } 
    });

    updateAllCounterData();

    editProjFormContainer.firstElementChild.reset()

    renderTodo.closeForm(findCurrentFormInUse())
    renderTodo.updatePage(findCurrentMenuSelected())
  });



  const deleteAllButton = document.querySelector('.delete-all');
  deleteAllButton.addEventListener('click', function(e) {

    let indexOfProject = e.target.dataset.overallIndex
    let proj = getProjectList()[indexOfProject]

    deleteFromList(proj, getProjectList());

    let optionsInTask = [...editProjSelectTag.options];
    optionsInTask.forEach(item => {
      if (item.value !== "") {
        let itemIndex = item.dataset.overallIndex;
        let itemObj = getTodoList()[itemIndex];
        deleteFromList(itemObj, getTodoList())
      } 
    });


    updateDatedLists()

    updateAllCounterData();
    

    editProjFormContainer.firstElementChild.reset()
    renderTodo.closeForm(findCurrentFormInUse())
    renderTodo.updatePage(findCurrentMenuSelected())    
  });



  return { projectNameInput, deleteProjectButton, deleteAllButton, projectFormContainer, todoFormContainer, editFormContainer, editProjFormContainer, 
    projFormSelectTag, todoFormSelectTag, editFormSelectTag, editProjSelectTag, 
    getTodoList, getProjectList, getTodayList, getTomorrowList, tagEditSubmitButtonWithIndex, tagWithIndex, deleteFromList, findCurrentMenuSelected, updateAllCounterData, updateDatedLists }


})();

document.getElementById('all-todo-button').click();

export { todo }







