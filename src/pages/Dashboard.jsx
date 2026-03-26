import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

  // Search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="container">
      <h2 className="dashboard-title">User Dashboard</h2>

  <div className="top-bar">
  <SearchBar search={search} setSearch={setSearch} />

  <div className="btn-group">
    <button onClick={() => setSortOrder("asc")}>Sort Asc</button>
    <button onClick={() => setSortOrder("desc")}>Sort Desc</button>
  </div>
</div>

      <UserTable users={sortedUsers} />
    </div>
  );
}

export default Dashboard;