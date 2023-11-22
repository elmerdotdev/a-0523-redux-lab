import './Todo.css'

const Todo = () => {
  return (
    <div className="todo">
      <h1>Todos</h1>

      <form className="todo__form">
        <input type="text" className="todo__form__input" />
        <div className="todo__form__buttons">
          <button type="submit">Update</button>
          <button type="button">Cancel</button>
        </div>
      </form>

      <ul className="todo__list">
        <li className="todo__listItem">
          <span></span>
          <div className="todo__listItem__buttons">
            <button>Update</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Todo