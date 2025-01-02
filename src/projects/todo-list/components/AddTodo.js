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

export default AddTodo;
