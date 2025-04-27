import { useEffect, useState } from "react";
import Loader from "./pages/Loader";
import { isLoggedIn } from "./api/user";
import { Route, Routes } from "react-router-dom";
import Nav from "./pages/com/Nav";
import Register from "./pages/Register";
import ThemeToggle, { THEMEKEY } from "./pages/com/Theme";
import { getItem, setItem } from "./utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { setLogedInState } from "./rtk/isLogedIn";
import { setUserState } from "./rtk/user";
import UserProfile from "./pages/UserProfile";
import Edit from "./pages/Edit";
import AccordationPage from "./pages/com/AccordationPage";
import PasswordPage from "./pages/com/PasswordPage";
import InformationPage from "./pages/com/InformationPage";
import ChangeImagePage from "./pages/com/ChangeImagePage";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatche = useDispatch();
  const { isLoggedIn: isLoggedInState } = useSelector((s) => s);
  useEffect(() => {
    let gettheme = getItem(THEMEKEY);
    if (gettheme === null) {
      setItem(THEMEKEY, "light");
      gettheme = "light";
    }
    (async function () {
      const { data, status } = await isLoggedIn();
      if (status === 200) {
        dispatche(setLogedInState(true));
        dispatche(setUserState(data.user));
      }
      setLoading(false);
    })();
  }, [isLoggedInState]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-screen relateive dark:bg-gray-900 dark:text-gray-200 bg-gray-100 text-gray-900">
      <ThemeToggle />
      <Nav />
      <div className="h-[87vh] w-full">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/products" element={<h1>product</h1>} />
          <Route path="/edit" element={<Edit />}>
            <Route index element={<InformationPage />} />
            <Route path="password" element={<PasswordPage />} />
            <Route path="accordation" element={<AccordationPage />} />
            <Route path="picture" element={<ChangeImagePage />} />
          </Route>
          {!isLoggedInState && (
            <Route path="/register" element={<Register />} />
          )}
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="user/:userId" element={<UserProfile />} />
          <Route
            path="not-found"
            element={<h1>page not found not created yet</h1>}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
