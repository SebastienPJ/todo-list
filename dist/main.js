/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQSxhQUFhOztBQUViLENBQUM7Ozs7O0FBS0Q7Ozs7O0FBS0EsQ0FBQzs7Ozs7Ozs7QUFRRDtBQUNBLDJCQUEyQjs7QUFFM0IsZ0JBQWdCO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG8gPSAoKCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUgfVxuICAgIH07XG4gICAgXG4gICAgXG4gICAgXG4gICAgY29uc3QgY2FwdHVyZUZvcm1EYXRhID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEZvcm1EYXRhKF90b2RvRm9ybSlcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBkYXRhLmdldCgndGl0bGUnKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRvZG9GYWN0b3J5KHRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF90b2RvTGlzdFxuICAgIH07XG4gICAgXG4gICAgXG4gICAgXG4gICAgY29uc3Qgc3RhcnRUb2RvQXBwID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgXG4gICAgXG4gICAgXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YSgpO1xuICAgIFxuICAgICAgICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8oZm9ybURhdGEpO1xuXG5cbiAgICAgICAgX3RvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG5cbiAgICAgICAgX3RvZG9Gb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZ2V0TGlzdCgpKTtcblxuICAgIFxuICAgICAgICBcbiAgICB9OyAgIFxuICAgIFxuICAgIFxuICAgIGNvbnN0IF90b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Zvcm1cIik7XG5cbiAgICBjb25zdCBfdG9kb0xpc3QgPSBbXTtcblxuXG4gICAgX3RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRUb2RvQXBwKTtcblxuXG4gICAgcmV0dXJuIHsgZ2V0TGlzdCB9XG5cbn0pKCk7XG5cblxuXG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoKCkgPT4ge1xuXG5cblxuXG59KSgpO1xuXG5cblxuXG5cblxuXG4vLyBjb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3RpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSA9PiB7XG4vLyAgICAgY29uc3QgbmFtZSA9ICgpID0+IHtjb25zb2xlLmxvZyh0aGlzLnRpdGxlKX07XG5cbi8vICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3RpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0IH1cbi8vIH1cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=