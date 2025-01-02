import { useState } from "react";

function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  //여기서 todo 넘어오면 그걸 객체로 그냥 저장시키자
  const addTodoAndResetInput = () => {
    //문자열 todo를 객체로 만들어서 todos의 배열에 저장시키기

    if (todo === "") {
      alert("todo를 입력해 주세요!");
      return;
    }

    function todoobject(todo, status) {
      //todo가 문자열아니거나 && status가 boolean아니면 빠꾸시키는거 추가하기
      return { todo: todo, status: status };
    }
    //기본값은 false로 저장시키기
    setTodos([...todos, todoobject(todo, false)]);

    setTodo("");
  };

  return (
    <>
      <h1> 📝 Todo-List</h1>

      <AddTodo
        addTodoAndResetInput={addTodoAndResetInput}
        todo={todo}
        setTodo={setTodo}
      />
      <DeleteButton setTodo={setTodo} />

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
  const updateTodoStatus = (i) => {
    const newTodos = [...todos];
    //status 값 만 바꾸기를 권장함
    newTodos[i].status = !newTodos[i].status;

    setTodos(newTodos);
  };

  const makeList = () => {
    return todos.map((todo, i) => (
      <li key={i}>
        {/* todo는 객체니까 거기서 key값 빼서 list 만들기  */}
        {/* 이미 중괄호를 썼는데 거기에 밑에처럼 또 중괄호 쓰고 있는데 이건 어케
        작동? */}
        {todo.status ? todo.todo : <s> {todo.todo}</s>}
        <button onClick={() => updateTodoStatus(i)}>done</button>
      </li>
    ));
  };
  return <ul>{makeList()}</ul>;
}

function DeleteButton({ setTodo }) {
  const reset = () => {
    setTodo("");
  };

  return <button onClick={reset}>reset</button>;
}

export default App;
