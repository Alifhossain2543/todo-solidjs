import { createSignal, createContext, useContext } from "solid-js"

const todosContext = createContext()

function todoContext(props) {
  const [todos, setCount] = createSignal([]),
    store = [
      todos,
      {
        addToDo(data) {
          return setCount((prev) => [data(), ...prev, ] )
        },
     
      },
    ]


  return (
    <todosContext.Provider value={store}>
      {props.children}
    </todosContext.Provider>
  )
}

export function useTodos() {
  return useContext(todosContext)
}

export default todoContext;