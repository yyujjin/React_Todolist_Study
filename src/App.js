import "./App.css";
import { useState } from "react";

function AddTodo(props) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (props.input.trim() === "") {
          alert("할 일을 입력해주세요!");
          return;
        }
        alert("추가되었습니다!");
        props.setTodos([...props.todos, props.input]);
        props.setInput("");
      }}
    >
      추가하기
    </button>
  );
}

function MakeTodoList(props) {
  const todos = props.todos;
  const list = [];
  for (let i = 0; i < todos.length; i++) {
    list.push(<li>{todos[i]}</li>);
  }
  return <ul>{list}</ul>;
}

function App() {
  //전역 변수로 쓸 건 여기다 쓰면 될듯
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(input);

  return (
    <div className="App">
      <h1>Todo-List</h1>
      <input
        type="text"
        placeholder="add todos..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      ></AddTodo>
      <MakeTodoList todos={todos} setTodos={setTodos}></MakeTodoList>
    </div>
  );
}

export default App;
