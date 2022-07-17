import User from "../components/User";

function IncrementalStaticRegeneration({ users }) {
  return (
    <>
      <h1>Incremental Static Regeneration</h1>
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

export default IncrementalStaticRegeneration;

export async function getStaticProps() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await fetch("http://localhost:7000/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },

    revalidate: 100,
  };
}
