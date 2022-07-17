// import { useEffect, useState } from "react";
// import User from "../components/User";

// function ClientSideRendering({ users }) {
//   const [state, setState] = useState([]);

//   const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonData = await res.json();
//     setState(jsonData);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <h1>Static Site Generation</h1>
//       <ul>
//         {state.data?.map((e) => (
//           <li key={e.id}>{e.email}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ClientSideRendering;
import { useState, useEffect } from "react";
import User from "../components/User";

function ClientSideRendering() {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:7000/users");
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
