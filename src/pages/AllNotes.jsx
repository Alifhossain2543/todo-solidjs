import { For } from "solid-js"
import { useTodos } from "../store/todosContext"

const AllNotes = () => {
  const [todos] = useTodos()
  return (
    <>
      <div>AllNotes page</div>
      <For each={todos()} >
        {(item, inx) => (
          <li>
            {" "}
            {inx() + 1} {item}
          </li>
        )}
      </For>
    </>
  )
}

export default AllNotes