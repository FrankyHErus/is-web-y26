function displayLocalStorageValues(){
    const cnt = document.getElementById('todo-result__container')
    let json_todo = JSON.parse(localStorage.getItem("todo_list"));
    if(json_todo && json_todo.length != 0){
        let content = ""
        let counter = 0;
        json_todo.forEach(element => {
            counter++;
            content += `
            <div id="${element.id}" class="todo-card">
                <div class="todo-id">${counter}</div>
                <div class="todo-title">${element.input_name}</div>
                <div class="todo-deadline">${element.input_deadline}</div>
            </div>`
        });
        cnt.innerHTML = content;
        console.log(cnt.children)
        for(let element of cnt.children){
            element.addEventListener('click', () => killmeplz(element["id"]))
        }
        return;
    }
    cnt.innerHTML = "<h1>Кажется, дел больше нет...</h1>"
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