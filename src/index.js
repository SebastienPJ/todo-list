const todo = (function(title, desctiption, dueDate, priority, notes, checklist) {
    console.log("Howdy");
})()



const todoFactory = (title, desctiption, dueDate, priority, notes, checklist) => {
    const name = () => {console.log(this.title)};

    return { title, desctiption, dueDate, priority, notes, checklist }
}


const todo2 = todoFactory('fdsg', 'hgfh', 'sfsg', 34, 'dfgsf', 'yyrty', 'cvzzcv')


