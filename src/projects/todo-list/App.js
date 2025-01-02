import { useState } from "react";
import AddTodo from "./components/Addtodo";
import List from "./components/List";
import DeleteButton from "./components/DeleteButton";

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

export default App;
