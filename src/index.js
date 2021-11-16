import { renderTodo } from "./render";
import { editTodo } from "./edit";
import './styles.css';

const todo = (() => {

  const getTodoList = () => {
    return _todoList
  };

  const captureFormData = (form) => {
    return new FormData(form)
  };

  
  const todoFactory = (data) => {
    let title = data.get('title');
    // let description = data.get('description');
    let dueDate = data.get('due-date');
    let priority = data.get('priority');
    let isTodoDone = 'no'


    return { title, description, dueDate, priority, isTodoDone }

  };


  const findCurrentMenuSelected = () => {
    return [..._menuButtons].filter(button => button.classList.contains('current-menu-selected'))[0];
  };

  

  const findCurrentFormInUse = () => {

    let allForms = [...document.querySelectorAll('.form-container')];
    
    let currentForm = allForms.filter(form => form.classList.contains('current-form-inuse'))[0]
 
    return currentForm;
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


  const createTodo = function(e) {
    e.preventDefault();


    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    _todoForm.reset();
    renderTodo.closeForm(todoFormPopup);
    
    
    let menu = findCurrentMenuSelected();
    updatePage(menu)

    // renderTodo.dispayMenuItems(pass in current menu selected)

  };   














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
  const _projectForm = document.querySelector('.new-project-form');


  const todoSelectedForProject = document.querySelector('.project-form-select-tag');
  const todoFormPopup = document.querySelector('.todo-form-popup');
  const editFormPopup = document.querySelector('.edit-todo-popup');
  const projectFormPopup = document.querySelector('.new-project-popup');




  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // console.log(e);
      // renderTodo.displayMenuItems(e);
      highlightSelectedButton(e);    
      let currentMenu = findCurrentMenuSelected();
      renderTodo.updatePage(currentMenu);
    });

  });


  const _submitTodoForm = document.querySelector('.submit-form');
  _submitTodoForm.addEventListener('click', createTodo);



  const _closeFormButtons = document.querySelectorAll('.close-form');
  _closeFormButtons.forEach(button => {
    button.addEventListener('click', function() {
      renderTodo.closeForm(findCurrentFormInUse())

    })
  })





  

  return { todoFormPopup, editFormPopup,
     projectFormPopup, todoSelectedForProject, getTodoList }


})();

document.getElementById('all-todo-button').click();

export { todo }







