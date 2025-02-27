import UsersItem from "./UsersItem";
import DeleteButton from "./DeleteButton";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return users.length > 0 ? (
    users.map((user) => (
      <li key={user.id}>
        <UsersItem label={"name"} data={user.name} />
        <UsersItem label={"email"} data={user.email} />
        <DeleteButton users={users} setUsers={setUsers} id={user.id} />
      </li>
    ))
  ) : (
    <li>등록된 사용자가 없습니다!</li>
  );
}
