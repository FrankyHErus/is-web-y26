window.addEventListener('load', () => {

    const cnt = document.getElementById('todo-result__container')

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        const arr = json.filter((x) => x['id'] % Math.floor(Math.random() * 10) == 0).slice(0, 5)

        while (cnt.firstChild) {
            cnt.removeChild(cnt.lastChild);
        }

        arr.forEach(todo => {
            let todocard = document.createElement("div")
            todocard.setAttribute('id', todo['id'])
            todocard.setAttribute('class', 'todo-card')

            let id_el = document.createElement("div")
            id_el.setAttribute('class', 'todo-id')
            id_el.textContent = todo['id']

            let title_el = document.createElement("div")
            title_el.setAttribute('class', 'todo-title')
            title_el.textContent = todo['title']

            todocard.appendChild(id_el)
            todocard.appendChild(title_el)

            cnt.appendChild(todocard);
        });
      })
      .catch(ex => {

        while (cnt.firstChild) {
            cnt.removeChild(cnt.lastChild);
        }

        let error_div = document.createElement("div")
        error_div.classList.add("fetch_error_cnt")

        let sad_svg = document.createElement("img")
        sad_svg.setAttribute("src", "./../../lib/img/sad_svg.svg")

        let sad_msg = document.createElement("p")
        sad_msg.textContent = "Oops...Something went wrong..."

        error_div.appendChild(sad_svg)
        error_div.appendChild(sad_msg)

        cnt.appendChild(error_div)
      })
    }
)