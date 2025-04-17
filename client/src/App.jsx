import { useEffect, useState } from "react";
import Loader from "./pages/Loadier";
import { isLoggedIn } from "./api/user";
import { Route, Routes } from "react-router-dom";
import Nav from "./pages/com/Nav";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  useEffect(() => {
    (async function () {
      const res = await isLoggedIn();
      if (res.status === 200) {
        setIsLoggedInState(res.data.isLoggedIn);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-screen ">
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/:userId" element={<h1>User Profile</h1>} />
        <Route path="/:userId/edit" element={<h1>Edit Profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
