import { createEffect, createSignal } from "solid-js"
import {useTodos} from '../store/todosContext'

const AddTodo = () => {
    const [todo, setTodo] = createSignal("")

    const [_, { addToDo }] = useTodos()

    const addItem = () => {
        addToDo(todo)
    }
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      <input
        type="text"
        value={todo()}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

    </div>
  )
}

export default AddTodo