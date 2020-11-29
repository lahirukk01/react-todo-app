import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';

const App = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos')
        if (storedTodos === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    return (
        <div className="App">
            <header>
                <h1>Lahiru's Todo List</h1>
            </header>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
            <TodoList todos={todos} setTodos={setTodos} status={status} />
        </div>
    )
}

export default App
