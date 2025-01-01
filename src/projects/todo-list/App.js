import { useState } from "react";

function App() {
  // <!-- 투두라는 변수를 만들고 초기값은 빈문자열, input에다 값을 입력하고 add 버튼을 누르면 todo 변수의 값이 바뀜  -->
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  const addTodoAndResetInput = () => {
    //setTodos = todos.push(todo);
    setTodos([...todos, todo]); // 새로운 배열로 상태 업데이트
    setTodo("");
    console.log("배열 값 : ", todos);
  };

  const resetInput = () => {};

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
        {/* <!-- delete버튼을 누르면 todo 변수가 빈 문자열로 초기화 됨 --> */}
        <button>delete</button>
        {/* <!-- update벙튼을 누르면 todo변수 값 옆에 todo1 -> todo1 - 완료 -->
      <!-- todo1 - 완료 이 상태에서 다시 업데이트를 누르면 하이픈 완료 글자가 사라짐  --> */}
        <button>update</button>
      </div>
      <ul>
        {/* <!-- todo1 대신 todo 변수넣기 --> */}
        <li>Todo1</li>
      </ul>
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

export default App;
