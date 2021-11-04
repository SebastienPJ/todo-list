import { renderTodo } from "./render";
import './styles.css';

const todo = (() => {

  const todoFactory = (data) => {
    let todoObj = {};
    let tasks = [];


    for(let pair of data.entries()) {
      let key = pair[0];
      let value = pair[1];

      console.log(pair);


      if (key.includes('task')) {
        let taskObj = {};

        taskObj[key] = value;
        taskObj['isTaskDone'] = 'no'
        tasks.push(taskObj);
      } else {

        todoObj[key] = value;

      };
    };


    todoObj['all-tasks'] = tasks;

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
    
    console.log(e);
    
    let _formData = captureFormData();    

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);

    
    console.log(_todoList);

    _todoForm.reset();

    renderTodo.updatePage(_newTodo);    
        
  };   



  const _todoForm = document.querySelector(".todoForm");
  const _submitButton = document.querySelector('.submit');

  const _todoList = [];


  _submitButton.addEventListener('click', startTodoApp);
  
  
  let _addTask = document.querySelector('.add-row');
  _addTask.addEventListener('click', renderTodo.addMoreTask)

  return { getList }


})();


export { todo }







