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

console.log(completedTodos)
