import { todo } from "./index";


const editTodo = (() => {



  const prefillEditForm = (e) => {


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


  const tagEditFormWithIndex = (e) => {
    let _saveButton = document.querySelector('.save-changes');
    let _index = e.target.parentElement.firstChild.dataset.taskIndex

    _saveButton.dataset.taskIndex = _index;    
  }



  const saveEditChanges = (e) => {
    e.preventDefault();

    let _editedFormData = todo.captureFormData(_editForm);

    let _listOfTodos = todo.getTodoList();

    let _objIndex = e.target.dataset.taskIndex;

    let _todoObj = _listOfTodos[_objIndex];

    let newTitle = _editedFormData.get('edit-title');
    let newDescription = _editedFormData.get('edit-description');
    let newNotes = _editedFormData.get('edit-notes');
    let newDueDate = _editedFormData.get('edit-due-date');
    let newPriority = _editedFormData.get('edit-priority');

    _todoObj.title = newTitle;
    _todoObj.description = newDescription;
    _todoObj.dueDate = newDueDate;

    if (newNotes != "") {
      _todoObj.notes = newNotes;
    }
    
    _todoObj.priority = newPriority;

    console.log(_todoObj);
    _editForm.reset();
    closeEditForm();



  }


  const _editForm = document.querySelector('.edit-todo-form');  


  const _editTitle = document.querySelector('#edit-title');
  const _editDescription = document.querySelector('#edit-description');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');





  return { prefillEditForm, saveEditChanges, tagEditFormWithIndex }
})();



export { editTodo }