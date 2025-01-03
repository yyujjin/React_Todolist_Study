export default function UsersItem({ label, data }) {
  return (
    <div>
      <span style={{ color: "gray" }}>{label} : </span> {data}
    </div>
  );
}
