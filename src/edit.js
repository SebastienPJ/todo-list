const editTodo = (() => {

  const openEditForm= () => {
    _editFormPopup.setAttribute('style', 'display: flex');
  }

  const closeEditForm = () => {
    _editFormPopup.setAttribute('style', 'display: none')
  }

  const _editFormPopup = document.querySelector('.edit-todo-popup');



  return { openEditForm, closeEditForm }
})();



export { editTodo }