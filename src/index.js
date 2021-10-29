const todoLogic = (() => {

    
    const todoFactory = (title) => {
    
        return { title }
    };
    
    
    
    const captureFormData = () => {
        return new FormData(todoForm)
    };
    
    
    const createTodo = (data) => {
        let title = data.get('title');
    
        return todoFactory(title);
    };
    
    
    
    const startTodoApp = function(e) {
        e.preventDefault();   
    
    
        let formData = captureFormData();
    
        let todo = createTodo(formData);


        todoList.push(todo)
    
        console.log(todo);
        console.log(todoList);
    
        
    };   
    
    
    const todoForm = document.querySelector(".todoForm");

    const todoList = [];


    todoForm.addEventListener('click', startTodoApp);





})();








// const todoFactory = (title, desctiption, dueDate, priority, notes, checklist) => {
//     const name = () => {console.log(this.title)};

//     return { title, desctiption, dueDate, priority, notes, checklist }
// }





