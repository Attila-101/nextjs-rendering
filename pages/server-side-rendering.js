import User from "../components/User";

function ServerSideRendering({ users }) {
  return (
    <>
      <h1>Server-side Rendering</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default ServerSideRendering;

export async function getServerSideProps() {
  const response = await fetch("https://my-user-api.herokuapp.com/users");
  // const response = await fetch("http://localhost:7000/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
