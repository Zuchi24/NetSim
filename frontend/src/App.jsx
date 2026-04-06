import { useEffect, useState } from "react";
import { getUsers } from "./services/api";
import LandingPage from "./pages/landingpage";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  
  return <LandingPage/>

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;