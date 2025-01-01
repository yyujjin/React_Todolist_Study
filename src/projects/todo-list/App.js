import { useState } from "react";

function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  const addTodoAndResetInput = () => {
    setTodos([...todos, todo]);
    setTodo("");
    console.log("배열 값 : ", todos);
  };

  return (
    <>
      <h1> 📝 Todo-List</h1>
      <div>
        <AddTodo
          addTodoAndResetInput={addTodoAndResetInput}
          todo={todo}
          setTodo={setTodo}
        />
      </div>
      <div>
        <button>delete</button>
        {/* <!-- update벙튼을 누르면 todo변수 값 옆에 todo1 -> todo1 - 완료 -->
      <!-- todo1 - 완료 이 상태에서 다시 업데이트를 누르면 하이픈 완료 글자가 사라짐  --> */}
        <button>update</button>
      </div>
      <List todos={todos} />
    </>
  );
}

function AddTodo({ todo, setTodo, addTodoAndResetInput }) {
  return (
    <>
      <input
        placeholder="add your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoAndResetInput}>add</button>
    </>
  );
}

//배열받아서 for 돌려서 만들기
function List({ todos }) {
  const makeList = () => {
    return todos.map((todo, index) => (
      <li key={index}>{todo}</li> // JSX 반환
    ));
  };
  return <ul>{makeList()}</ul>;
}

export default App;
