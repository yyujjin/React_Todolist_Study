function DeleteButton({ setTodo }) {
  const reset = () => {
    setTodo("");
  };

  return <button onClick={reset}>reset</button>;
}

export default DeleteButton;
