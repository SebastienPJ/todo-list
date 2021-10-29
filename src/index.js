const todo = (() => {

    
    const todoFactory = (title) => {
    
        return { title }
    };
    
    
    
    const captureFormData = () => {
        return new FormData(_todoForm)
    };
    
    
    const createTodo = (data) => {
        let title = data.get('title');
    
        return todoFactory(title);
    };

    const getList = () => {
        return _todoList
    };
    
    
    
    const startTodoApp = function(e) {
        e.preventDefault();   
    
    
        let formData = captureFormData();
    
        let newTodo = createTodo(formData);


        _todoList.push(newTodo);

        _todoForm.reset();

        console.log(getList());

    
        
    };   
    
    
    const _todoForm = document.querySelector(".todoForm");

    const _todoList = [];


    _todoForm.addEventListener('click', startTodoApp);


    return { getList }

})();




const renderTodo = (() => {




})();







// const todoFactory = (title, desctiption, dueDate, priority, notes, checklist) => {
//     const name = () => {console.log(this.title)};

//     return { title, desctiption, dueDate, priority, notes, checklist }
// }





