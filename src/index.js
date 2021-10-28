const todo = (function(title, desctiption, dueDate, priority, notes, checklist) {
    console.log("Howdy");
})()

// const todoFactory = (title, desctiption, dueDate, priority, notes, checklist) => {
//     const name = () => {console.log(this.title)};

//     return { title, desctiption, dueDate, priority, notes, checklist }
// }

const todoFactory = (title) => {
    const name = () => {console.log(this.title)};

    return { title }
}


const todoForm = document.querySelector(".todoForm")

let formData = new FormData(todoForm)

console.log(formData);