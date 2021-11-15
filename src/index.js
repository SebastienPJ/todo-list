import { renderTodo } from "./render";
import { editTodo } from "./edit";
import './styles.css';

const todo = (() => {



  const captureFormData = (form) => {
    return new FormData(form)
  };



  const getTodoList = () => {
    return _todoList
  };


  const highlightSelectedButton = (selectedButton) => {
    console.log(selectedButton);

    _menuButtons.forEach(item => {
      if (item.classList.contains('current-menu-selected')) {
        item.classList.remove('current-menu-selected')
      }
    })

    selectedButton.classList.add('current-menu-selected');

  }



  const todoFactory = (data) => {
    let title = data.get('title');
    let description = data.get('description');
    let dueDate = data.get('due-date');
    let priority = data.get('priority');
    let isTodoDone = 'no'


    return { title, description, dueDate, priority, isTodoDone }

  };



  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  };


  const updateProjectList = () => {
    _todoList.forEach(todoObj => {

      if ('project' in todoObj) {
        if (_projectList.includes(todoObj['project'])) return
        _projectList.push(todoObj['project'])
      }
    })

    console.log(_projectList);
  }


  const getProjectList = () => {
    return _projectList;
  }


  const startTodoApp = function(e) {
    e.preventDefault();


    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    _todoForm.reset();
    renderTodo.closeForm(todoFormPopup); 
  };   



  const createProject = function(e) {
    e.preventDefault();


    let _projectData = captureFormData(_projectForm);

    let _projectName = _projectData.get('project-name');

    _projectList.push(_projectName);

    console.log([...todoSelected.selectedOptions])



    // console.log([...todoSelected.selectedOptions].map(option => option.value));


    // _projectForm.reset();
    // renderTodo.closeForm(projectFormPopup); 

  }



  const _todoList = [
    {
      title: "Complete Presentation",
      description: "Must complete and sell pitch to board",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "Notes on meeting prep",
      project: "Work"
    },

    {
      title: "Do groceries",
      description: "Need foood",
      dueDate: "2021-11-18",
      priority: "high",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Home"
    },

    {
      title: "Fix Car Issues",
      description: "Need fast car",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "vroom vroom",
      project: "Home"
    }
  ];


  const _projectList = [];

  const _todoForm = document.querySelector('.todo-form');
  const _projectForm = document.querySelector('.new-project-form')
  const todoSelected = document.querySelector('.todos-selected')


  const todoFormPopup = document.querySelector('.todo-form-popup');
  const editFormPopup = document.querySelector('.edit-todo-popup');
  const projectFormPopup = document.querySelector('.new-project-popup');





  const _closeTodoFormButtons = document.querySelectorAll('.close-todo-form');
  _closeTodoFormButtons.forEach(button => {
    button.addEventListener('click', renderTodo.closeForm.bind(button, todoFormPopup));
  });



  const _submitTodoForm = document.querySelector('.submit-form');
  _submitTodoForm.addEventListener('click', startTodoApp);



  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      renderTodo.displayMenuItems(e);
      highlightSelectedButton(button);    
    });

  })



  const _closeEditFormButtons = document.querySelectorAll('.close-edit-form');
  _closeEditFormButtons.forEach(button => { 
    button.addEventListener('click', renderTodo.closeForm.bind(button, editFormPopup));
  })


  const _saveEditChangesButton = document.querySelector('.save-changes');
  _saveEditChangesButton.addEventListener('click', editTodo.saveEditChanges)



  const _closeProjectFormButtons = document.querySelectorAll('.close-project-form');
  _closeProjectFormButtons.forEach(button => {
    button.addEventListener('click', renderTodo.closeForm.bind(button, projectFormPopup))
  })

  const _submitProjectForm = document.querySelector('.create-project');
  _submitProjectForm.addEventListener('click', createProject)


  

  return { getTodoList, findIndexOf, captureFormData, getProjectList, todoFormPopup,
     editFormPopup, projectFormPopup, todoSelected }


})();

document.getElementById('all-todo-button').click();

export { todo }







