import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <Loader />;

 return (
  <div className="container">
    <div className="user-card">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  </div>
);
}

export default UserDetails;