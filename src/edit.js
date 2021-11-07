import { todo } from "./index";


const editTodo = (() => {

  const openEditForm= () => {
    _editFormPopup.setAttribute('style', 'display: flex');
  }



  const closeEditForm = () => {
    _editFormPopup.setAttribute('style', 'display: none')
  }


  const prefillEditForm = (e) => {
    console.log(e);

    console.log(e.target.parentElement.firstChild.dataset.taskIndex);

    let _todoIndex = e.target.parentElement.firstChild.dataset.taskIndex
    let _allTodoArray = todo.getTodoList();

    let _todoObject = _allTodoArray[_todoIndex];

    _editTitle.value = _todoObject.title;
    _editDescription.value = _todoObject.description;
    
    if (_todoObject.hasOwnProperty('notes')) {
      _editNotes.value = _todoObject.notes;
    }

    _editDueDate.value = _todoObject.dueDate
    _editPriority.value = _todoObject.priority


  }


  const _editFormPopup = document.querySelector('.edit-todo-popup');  


  const _editTitle = document.querySelector('#edit-title');
  const _editDescription = document.querySelector('#edit-description');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');





  return { openEditForm, closeEditForm, prefillEditForm }
})();



export { editTodo }