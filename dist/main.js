/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7Ozs7O0FBTUEsQ0FBQzs7Ozs7Ozs7O0FBU0Q7QUFDQSwyQkFBMkI7O0FBRTNCLGdCQUFnQjtBQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvTG9naWMgPSAoKCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUgfVxuICAgIH07XG4gICAgXG4gICAgXG4gICAgXG4gICAgY29uc3QgY2FwdHVyZUZvcm1EYXRhID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEZvcm1EYXRhKHRvZG9Gb3JtKVxuICAgIH07XG4gICAgXG4gICAgXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRhdGEuZ2V0KCd0aXRsZScpO1xuICAgIFxuICAgICAgICByZXR1cm4gdG9kb0ZhY3RvcnkodGl0bGUpO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgXG4gICAgY29uc3Qgc3RhcnRUb2RvQXBwID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgXG4gICAgXG4gICAgXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YSgpO1xuICAgIFxuICAgICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8oZm9ybURhdGEpO1xuXG5cbiAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKVxuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0xpc3QpO1xuICAgIFxuICAgICAgICBcbiAgICB9OyAgIFxuICAgIFxuICAgIFxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRm9ybVwiKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG5cblxuICAgIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRUb2RvQXBwKTtcblxuXG5cblxuXG59KSgpO1xuXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjdGlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpID0+IHtcbi8vICAgICBjb25zdCBuYW1lID0gKCkgPT4ge2NvbnNvbGUubG9nKHRoaXMudGl0bGUpfTtcblxuLy8gICAgIHJldHVybiB7IHRpdGxlLCBkZXNjdGlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QgfVxuLy8gfVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==