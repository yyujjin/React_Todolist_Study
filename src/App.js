import "./App.css";
import { useState } from "react";

function Header(props) {
  console.log(props.todo);
  //input

  return;
}
function Body() {
  //todo-list
  return;
}

function MakeTodos({ input, setInput }) {
  const [todos, setTodos] = useState([]);
  console.log("찍히고 있음", input);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        alert("추가되었습니다!");
        setTodos([...todos, input]);
        console.log("투두스", todos);
        setInput("");
      }}
    >
      추가하기
    </button>
  );
}

function App() {
  const [input, setInput] = useState("");

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
      <MakeTodos input={input} setInput={setInput}></MakeTodos>
    </div>
  );
}

export default App;

// todos 해야할것이라는 배열이 필요함
// input 칸에 해야할것을 적는다.
// 버튼을 누르면 input칸이 비어진다.
// todos 배열에가 todo가 추가되고
// list로 나타난다.
//버튼 기본동작 submit 무력화 시키기
