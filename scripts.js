const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const fullTask = document.querySelector('.list-task')
let taskItem = []

function adNewTask () {
    taskItem.push({
        task: input.value,
        check: false
    })

    input.value = ''
    viewTask()
}

function viewTask () {
    let newItem = ''
    
    taskItem.forEach((item, position) => {
       newItem = 
       newItem + 
       `
           <li class="task ${item.check && "done"}">
           <img src="./img/check.png" alt="check-todo" onclick="checkTask(${position})">
           <p>${item.task}</p>
           <img src="./img/remove.png" alt="remove-todo" onclick="removeItem(${position})">
           </li>

        `
    } ) 
    fullTask.innerHTML = newItem
    localStorage.setItem('list', JSON.stringify(taskItem))

}

function removeItem(position) {
    taskItem.splice(position, 1)
    viewTask()
}

function checkTask(position) {
    taskItem[position].check = !taskItem[position].check
    viewTask()
}

function reloadTask(){
    const taskLocalStore = localStorage.getItem("list")
    if(taskLocalStore) {
         taskItem = JSON.parse(taskLocalStore)
    }

    viewTask()

} reloadTask()

button.addEventListener('click', adNewTask)

