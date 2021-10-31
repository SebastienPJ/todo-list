import { renderTodo } from "./render";
import './styles.css';

const todo = (() => {

  const todoFactory = (data) => {
    let todoObj = {};
    let tasks = [];


    for(let pair of data.entries()) {
      let key = pair[0];
      let value = pair[1];


      if (key.includes('task')) {
        let taskObj = {};

        taskObj[key] = value;
        taskObj['isTaskDone'] = 'no'
        tasks.push(taskObj);

        // console.log(taskObj);
        // console.log(tasks);
      } else {

        todoObj[key] = value;

      };
    };


    todoObj['all-tasks'] = tasks;

    // console.log(todoObj);

    
    return todoObj
  };



  const captureFormData = () => {
    return new FormData(_todoForm)
  };

  const getList = () => {
    return _todoList
  };


  const startTodoApp = function(e) {
    e.preventDefault();     
    
    let _formData = captureFormData();    

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    _todoForm.reset();

    renderTodo.updatePage(_newTodo);    
        
  };   



  const _todoForm = document.querySelector(".todoForm");
  const _submitButton = document.querySelector('.submit');

  const _todoList = [];


  _submitButton.addEventListener('click', startTodoApp);

  return { getList }


})();


export { todo }







