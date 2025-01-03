export default function DeleteButton({ users, setUsers, id }) {
  const deleteUser = () => {
    const newUsers = [...users];

    setUsers(newUsers.filter((user) => user.id !== id));
  };

  return <button onClick={deleteUser}>delete</button>;
}
