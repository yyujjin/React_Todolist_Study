export default function DeleteButton({ users, setUsers, id }) {
  const deleteUser = () => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return <button onClick={deleteUser}>delete</button>;
}
