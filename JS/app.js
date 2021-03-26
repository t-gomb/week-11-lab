let todolist = [
    {todo: 'clone repo', status: 'complete'},
    {todo: 'link style sheet and JS to html', status: 'complete'},
    {todo: 'commit messages', status: 'started'},
    {todo: 'work on JS', status: 'started'}
]

let completedTodos = []

for ( i in todolist) {
    if (todolist[i].status === 'complete')
    completedTodos.push(todolist[i])
}


for (i in completedTodos) {
    if (completedTodos[i].todo === '')
    completedTodos.push(completedTodos[i])
}

for ({todo} of completedTodos) {
    console.log(todo)
}

console.log(completedTodos)