import { useState, useEffect } from "react";
import User from "../components/User";

function ClientSideRendering() {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch("https://my-user-api.herokuapp.com/users");
    // const response = await fetch("http://localhost:7000/users");
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Client-side Rendering</h1>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
}

export default ClientSideRendering;
