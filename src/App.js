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
      ➕ add
    </button>
  );
}

function MakeTodoList(props) {
  const todos = props.todos;
  const list = [];
  for (let i = 0; i < todos.length; i++) {
    list.push(
      <li key={i}>
        {todos[i]}{" "}
        <DeleteTodo
          index={i}
          todos={props.todos}
          setTodos={props.setTodos}
        ></DeleteTodo>
      </li>
    );
  }
  return <ul>{list}</ul>;
}

//key를 보내서 배열에서 그걸 삭제하고
function DeleteTodo(props) {
  if (props.todos == null) {
    return;
  }
  return (
    <button
      onClick={() => {
        console.log("삭제할 항목:", props.index);
        props.setTodos(props.todos.filter((_, i) => i !== props.index));
        alert("삭제되었습니다!");
        //props.onDelete(props.index); // 삭제 동작 호출
      }}
    >
      🗑️
    </button>
  );
}

function App() {
  //전역 변수로 쓸 건 여기다 쓰면 될듯
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Todo-List</h1>
      <input
        type="text"
        //autoFocus
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
      />
      <MakeTodoList todos={todos} setTodos={setTodos} />
      <DeleteTodo />
    </div>
  );
}

export default App;
