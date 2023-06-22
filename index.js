
const todolist = document.getElementById('container');

const getTasks = () => {
  return fetch('https://dummyjson.com/todos?limit=5')
        .then(response => response.json())
        .then(response => {
          return response;
        })
        .catch(error => {
          console.error('Error fetching todos:', error);
          return [];
        });
    };
//  getTasks();
    
const displayTasks = async () => {
  const todolists = await getTasks();
  console.log(todolists);

  todolists.todos.map(item => {
    // item.todo
    
    let div = document.createElement('div');
    div.style.width = '150%';
    div.style.marginLeft = '-20%';
    let checkbox = document.createElement('input');
       checkbox.type = "checkbox";
    let todos = document.createElement('input');
    todos.value = item.todo;
    todos.style.padding = '8px 60px'
    todos.style.width = '30%';
    todos.style.backgroundColor = 'rgb(253, 126, 20)';
    todos.style.border = 'none';
    todos.style.borderRadius = '5px';
    todos.style.color = 'white';
    todos.style.fontWeight = '600';
    let edit = document.createElement('button');
       edit.innerHTML = "Edit";
    let deleted = document.createElement('button');
    deleted.innerHTML = '<i class="material-icons">delete_forever</i>';
    deleted.style.fontSize = '6%';
    
// buttons functionality
    // checkbox.checked = item.completed.value == false;
    checkbox.addEventListener(`change`, () => {
      if (checkbox.checked == true) {
        todos.style.textDecoration = 'line-through';
      } else {
        todos.style.textDecoration = 'none';
      }
    });

    deleted.addEventListener(`click`, () => {
      div.remove();
    })

  //  edit btn
 
  // edit btn


    div.appendChild(checkbox);
    div.appendChild(todos);
    div.appendChild(edit);
    div.appendChild(deleted);

    todolist.appendChild(div);
  });
};
displayTasks();


const note = document.getElementById('note');
const savebtn = document.getElementById('savebtn'); 
const formit = document.getElementById('form');

formit.addEventListener('submit', event => {
  event.preventDefault()
  // event()
  const newTask = note.value

if (newTask) {
  const div = document.createElement('div');
  div.style.width = '150%';
  div.style.marginLeft = '-20%';
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
let todos = document.createElement('input');
todos.value = newTask;
todos.style.padding = '8px 60px'
  todos.style.width = '30%';
  todos.style.backgroundColor = 'rgb(253, 126, 20)';
  todos.style.border = 'none';
  todos.style.borderRadius = '5px';
  // todos.style.color = 'white';
let edit = document.createElement('button');
  edit.innerHTML = "Edit";
let deleted = document.createElement('button');
  deleted.innerHTML = '<i class="material-icons">delete_forever</i>';
 

  checkbox.addEventListener(`change`, () => {
    if (checkbox.checked == true) {
      todos.style.textDecoration = 'line-through';
    } else {
      todos.style.textDecoration = 'none';
    }
  });

  deleted.addEventListener(`click`, () => {
    div.remove();
  })


 
  div.appendChild(checkbox);
    div.appendChild(todos);
    div.appendChild(edit);
    div.appendChild(deleted);

    todolist.prepend(div);
}

})