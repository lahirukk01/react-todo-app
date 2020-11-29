import React from 'react'

const Form = props => {
    const inputTextHandler = e => {
        props.setInputText(e.target.value)
    }

    const submitTextHandler = e => {
        e.preventDefault()
        const newTodos = [
            ...props.todos,
            { text: props.inputText, completed: false, id: Math.random() * 1000}
        ]
        props.setTodos(newTodos)

        props.setInputText('')
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const statusHandler = e => {
        props.setStatus(e.target.value)
    }

    return (
        <form>
            <input value={props.inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitTextHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
