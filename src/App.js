import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewTodoList } from "./components/viewTodo";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {
  return (
    <div className="app-contents">
      <h1>Hi </h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={ViewTodoList} />
          <Route path="/create-todo" component={CreateTodo} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
