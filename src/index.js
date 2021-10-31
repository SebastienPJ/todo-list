import { renderTodo } from "./render";
import './styles.css';

const todo = (() => {


  const todoFactory = (data) => {
    let todoObj = {};
    let allTasks = [];




    for(let pair of data.entries()) {
      let key = pair[0];
      let value = pair[1];

      if (key.includes('task')) {
        allTasks.push(value)
      } else {
        todoObj[key] = value;
      };

      // console.log(key[0].includes('task'));
    };

    todoObj['tasks'] = allTasks;
    
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
    // console.log(_newTodo);

    _todoList.push(_newTodo);


    _todoForm.reset();


    // renderTodo.updatePage(_todoList);
    renderTodo.updatePage(_newTodo);


    
        
  };   
    

    
  const _todoForm = document.querySelector(".todoForm");
  const _submitButton = document.querySelector('.submit');

  const _todoList = [];


  _submitButton.addEventListener('click', startTodoApp);
   

  return { getList }

})();


export { todo }

// const todoFactory = (title, desctiption, dueDate, priority, notes, checklist) => {
//     const name = () => {console.log(this.title)};

//     return { title, desctiption, dueDate, priority, notes, checklist }
// }





