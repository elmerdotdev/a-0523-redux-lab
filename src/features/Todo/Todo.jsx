import './Todo.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos, updateTodo, updateATodo, deleteATodo, updateShowForm, updateNewTodo, addATodo } from './todoSlice'
import { useEffect } from 'react'

const Todo = () => {
  const { list, currentTodo, showForm, newTodo } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateATodo(currentTodo))
    dispatch(updateShowForm(false))
  }

  const handleNewSubmit = (event) => {
    event.preventDefault()
    dispatch(addATodo(newTodo))
    dispatch(updateNewTodo(''))
  }

  const handleUpdate = (todo) => {
    dispatch(updateTodo(todo))
    dispatch(updateShowForm(true))
  }

  return (
    <div className="todo">
      <h1>Todos</h1>

      <h2>Add Todo</h2>
      <form onSubmit={handleNewSubmit}>
        <input type="text" value={newTodo} onChange={(event) => dispatch(updateNewTodo(event.target.value))} className="todo__form__add" />
        <button type="submit">Add todo</button>
      </form>

      {showForm && (
        <form className="todo__form" onSubmit={handleSubmit}>
          <input type="text" className="todo__form__input" value={currentTodo.todo} onChange={(event) => dispatch(updateTodo({...currentTodo, todo: event.target.value}))} />
          <div className="todo__form__buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={() => dispatch(updateShowForm(false))}>Cancel</button>
          </div>
        </form>
      )}

      <ul className="todo__list">
        {list.map(todoItem => (
          <li className="todo__listItem" key={todoItem.id}>
            <span>{todoItem.todo}</span>
            <div className="todo__listItem__buttons">
              <button onClick={() => handleUpdate(todoItem)}>Update</button>
              <button onClick={() => dispatch(deleteATodo(todoItem.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo