/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import ContextData from "./store/todosContext"

import './index.css';
import App from './App';

render(
  () => (
    <ContextData>
      <Router>
        <App />
      </Router>
    </ContextData>
  ),
  document.getElementById("root")
)
