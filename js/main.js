document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault()
  var newPost = document.getElementById('newTask').value;
  document.getElementById('newTask').value = ''
  let item = document.createElement('li')
  let checkbox = document.createElement('input')
  let label = document.createElement('label')
  label.innerText = newPost
  checkbox.type = 'checkbox'
  item.append(checkbox)
  item.append(label)
  let tasks = document.getElementById('tasks')
  tasks.append(item)
})

document.getElementById("markButton").addEventListener("click", function(event) {
  event.preventDefault()
  let tasks = document.getElementById('tasks').getElementsByTagName('li')

  for(var task of tasks){
    task.getElementsByTagName('input')[0].checked = true    
  }

})

document.getElementById("clearButton").addEventListener("click", function(event) {
  event.preventDefault()
  let tasks = document.getElementById('tasks').getElementsByTagName('li')
  for(var todos of tasks){
    todos.getElementsByTagName('input')[0].checked = false
  }
})

document.getElementById("deleteButton").addEventListener("click", function(event) {
  event.preventDefault()
  let todos = document.getElementById('tasks')
  todos.innerHTML = ''
})
