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
        {todo.status ? <s> {todo.todo}</s> : todo.todo}
        <button onClick={() => updateTodoStatus(i)}>done</button>
      </li>
    ));
  };
  return <ul>{makeList()}</ul>;
}

export default List;
