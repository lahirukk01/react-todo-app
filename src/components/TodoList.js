import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    let todoList = null
    if (props.status === 'completed') {
        todoList = props.todos.filter(item => item.completed).map(todo => <Todo key={todo.id} todo={todo} todos={props.todos} setTodos={props.setTodos} />)
    } else if (props.status === 'uncompleted') {
        todoList = props.todos.filter(item => !item.completed).map(todo => <Todo key={todo.id} todo={todo} todos={props.todos} setTodos={props.setTodos} />)
    } else {
        todoList = props.todos.map(todo => <Todo key={todo.id} todo={todo} todos={props.todos} setTodos={props.setTodos} />)
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    )
}

export default TodoList
