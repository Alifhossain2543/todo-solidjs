import { ErrorBoundary, For } from "solid-js"
import AddTodo from "../components/AddTodo"
import { useTodos } from "../store/todosContext"

const Home = () => {
    const [todos] = useTodos()

    
  return (
    <ErrorBoundary fallback="Something is off about with this component">
      <div style={{ display: "flex", "justify-content": "center" }}>
        <div
          style={{ width: "400px", margin: "10px", "flex-direction": "column" }}
        >
          <AddTodo />
          <div style={{"margin-top" : "10px"}} >
            <For each={todos()}>
              {(item, inx) => (
                <li>
                  {" "}
                  {inx() + 1} {item}
                </li>
              )}
            </For>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Home