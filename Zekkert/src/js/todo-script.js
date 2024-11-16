function displayLocalStorageValues(){
    const cnt = document.getElementById('todo-result__container')
    let json_todo = JSON.parse(localStorage.getItem("todo_list"));

    while (cnt.firstChild) {
        cnt.removeChild(cnt.lastChild);
    }

    if(json_todo && json_todo.length != 0){
        let counter = 0;
        json_todo.forEach(element => {
            counter++;

            let todocard = document.createElement("div")
            todocard.setAttribute('id', element.id)
            todocard.setAttribute('class', 'todo-card')

            let id_el = document.createElement("div")
            id_el.setAttribute('class', 'todo-id')
            id_el.textContent = counter

            let title_el = document.createElement("div")
            title_el.setAttribute('class', 'todo-title')
            title_el.textContent = element.input_name

            let todo_el = document.createElement("div")
            todo_el.setAttribute('class', 'todo-deadline')
            todo_el.textContent = element.input_deadline

            todocard.appendChild(id_el)
            todocard.appendChild(title_el)
            todocard.appendChild(todo_el)

            cnt.appendChild(todocard);
        });
        
        console.log(cnt.children)
        for(let element of cnt.children){
            element.addEventListener('click', () => killmeplz(element["id"]))
        }
        return;
    }
    let empty_header = document.createElement("h1")
    empty_header.textContent = 'Кажется, дел больше нет...'
    cnt.appendChild(empty_header)
}

function killmeplz(id){
    let json_todo = JSON.parse(localStorage.getItem("todo_list"));
    if(json_todo){
        json_todo = json_todo.filter(item => item.id != id);
        localStorage.setItem('todo_list', JSON.stringify(json_todo))
        displayLocalStorageValues();
        return;
    }
}

window.addEventListener('load', () => {

    displayLocalStorageValues();

    document.getElementById('input__todo').addEventListener('submit', (event) => {
        event.preventDefault();
        displayLocalStorageValues();
    });

    document.getElementById('input__todo-submit').addEventListener('click', () => {
        const input_name = document.getElementById('input__todo-name').value;
        const input_deadline = document.getElementById('input__todo-deadline').value;

        const todo_object = {'input_name' : input_name, 'input_deadline' : input_deadline, 'id': Date.now().toString(36) + Math.random().toString(36).substring(2)};

        let json_todo = JSON.parse(localStorage.getItem("todo_list"));
        if(json_todo){
            json_todo.push(todo_object);
            localStorage.setItem('todo_list', JSON.stringify(json_todo))
            return;
        }

        localStorage.setItem('todo_list', JSON.stringify([todo_object]))

    });
})