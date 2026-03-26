import { useNavigate } from "react-router-dom";

function UserTable({ users }) {
  const navigate = useNavigate();

  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/user/${user.id}`)}
          >
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;