import { useState } from "react";

function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  const addTodoAndResetInput = () => {
    setTodos([...todos, todo]);
    setTodo("");
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
      </div>
      <List todos={todos} setTodos={setTodos} />
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

function List({ todos, setTodos }) {
  const updateTodoStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index] = <s>{newTodos[index]}</s>; //취소선으로
    setTodos(newTodos);
  };

  const makeList = () => {
    return todos.map((todo, index) => (
      <li key={index}>
        {todo} <button onClick={() => updateTodoStatus(index)}>done</button>
      </li>
    ));
  };
  return <ul>{makeList()}</ul>;
}

export default App;
