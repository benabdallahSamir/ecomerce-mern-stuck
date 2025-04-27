import { useRef, useState } from "react";
import Input from "./com/Input";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./com/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login, signup } from "../api/auth";
import { errorAlert, successAlert } from "../utils/alert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogedInState } from "../rtk/isLogedIn";
function Login({ className, goto, handleSuccessOpp }) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    const value = e.target.value.trimLeft();
    setData((prev) => ({ ...prev, [e.target.name]: value }));
  }
  async function handleClickLogin() {
    const { username, password } = data;
    if (!username || !password) {
      errorAlert("Please fill all fields");
      return;
    }
    const { data: data2, status } = await login(username, password);
    if (status === 200) handleSuccessOpp();
    else {
      console.log(`error : ${data2.message}, with status code ${status}`);
      errorAlert(data2.message);
    }
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`rounded-2xl w-[45%] max-[550px]:w-full h-full flex flex-col pt-5 px-3 ${className}`}
    >
      <h1 className="text-center font-semibold text-xl mb-3">Welcome back</h1>
      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-3">
        you have an account ,
        <span
          className="underline font-semibold text-gray-900 dark:text-gray-100 cursor-pointer"
          onClick={goto}
        >
          welcome back
        </span>
      </p>
      <Input
        className={"mb-2"}
        icon={faUser}
        placholder={"Enter username"}
        name={"username"}
        onChange={handleChange}
        value={data.username}
      />
      <Input
        className={"mb-2"}
        icon={faLock}
        placholder={"Enter your password"}
        name={"password"}
        onChange={handleChange}
        value={data.password}
        variant="password"
      />
      <button
        onClick={handleClickLogin}
        className="w-full py-2 mb-2 rounded-md bg-blue-500 hover:bg-blue-500/50 text-white font-semibold cursor-pointer duration-300"
      >
        Login
      </button>
      <p className="capitalize text-center font-semibold text-gray-800 dark:text-gray-200">
        or
      </p>
      <div className="flex items-center justify-center">
        <Button
          variant="icon"
          icon={<FontAwesomeIcon icon={faGoogle} />}
          className={"mr-2"}
        />
        <Button
          variant="icon"
          icon={<FontAwesomeIcon icon={faGithub} />}
          className={"mr-2"}
        />
        <Button variant="icon" icon={<FontAwesomeIcon icon={faFacebook} />} />
      </div>
    </motion.div>
  );
}
function Signup({ className, goto, handleSuccessOpp }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    const value = e.target.value.trimLeft();
    setData((prev) => ({ ...prev, [e.target.name]: value }));
  }
  async function handleClickLogin() {
    const { username, password, confirmPassword } = data;
    if (!username || !password || !confirmPassword) {
      errorAlert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      errorAlert("Passwords do not match");
      return;
    }
    const { data: data2, status } = await signup(username, password);
    if (status === 200) handleSuccessOpp();
    else {
      console.log(`error : ${data2.message}, with status code ${status}`);
      errorAlert(data2.message);
    }
  }
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`rounded-2xl w-[45%] max-[550px]:w-full h-full opacity-0 px-4 ${className}`}
    >
      <h1 className="text-center font-semibold text-xl mb-3">Join Us Today</h1>
      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-3">
        you have an account ,
        <span
          className="underline font-semibold text-gray-900 dark:text-gray-100 cursor-pointer"
          onClick={goto}
        >
          welcome back
        </span>
      </p>
      <Input
        className={"mb-2"}
        icon={faUser}
        placholder={"Enter username"}
        name={"username"}
        onChange={handleChange}
        value={data.username}
      />
      <Input
        className={"mb-2"}
        icon={faLock}
        placholder={"Enter your password"}
        name={"password"}
        onChange={handleChange}
        value={data.password}
        variant="password"
      />
      <Input
        className={"mb-2"}
        icon={faLock}
        placholder={"Confirm your password"}
        name={"confirmPassword"}
        onChange={handleChange}
        value={data.confirmPassword}
        variant="password"
      />
      <button
        onClick={handleClickLogin}
        className="w-full py-2 mb-2 rounded-md bg-blue-500 hover:bg-blue-500/50 text-white font-semibold cursor-pointer duration-300"
      >
        Sign up
      </button>
      <p className="capitalize text-center font-semibold text-gray-800 dark:text-gray-200">
        or
      </p>
      <div className="flex items-center justify-center">
        <Button
          variant="icon"
          icon={<FontAwesomeIcon icon={faGoogle} />}
          className={"mr-2"}
        />
        <Button
          variant="icon"
          icon={<FontAwesomeIcon icon={faGithub} />}
          className={"mr-2"}
        />
        <Button variant="icon" icon={<FontAwesomeIcon icon={faFacebook} />} />
      </div>
    </motion.div>
  );
}
function LoginAside({ handleClick }) {
  return (
    <>
      <h1 className="opacity-0 p mb-1 text-3xl animate-openRegisterAside">
        Login
      </h1>
      <p className="opacity-0 p mb-2 animate-openRegisterAside">
        You don'h have an account yet?
      </p>
      <button
        className="opacity-0 px-3 py-1 p cursor-pointer rounded-md border border-gray-200 duration-300 hover:bg-blue-100/40 animate-openRegisterAside"
        onClick={handleClick}
      >
        Register now
      </button>
    </>
  );
}
function SignupAside({ handleClick }) {
  return (
    <>
      <h1 className="opacity-0 p mb-1 text-3xl animate-openRegisterAside">
        Signup
      </h1>
      <p className="opacity-0 p mb-2 animate-openRegisterAside">
        You already have an account ?
      </p>
      <button
        className="opacity-0 px-3 py-1 p cursor-pointer rounded-md border border-gray-200 duration-300 hover:bg-blue-100/40 animate-openRegisterAside"
        onClick={handleClick}
      >
        sign in now
      </button>
    </>
  );
}

function Register() {
  const [pageState, setPageState] = useState("login");
  const aside = useRef();
  const navigate = useNavigate();
  const dispatche = useDispatch();
  function handleSuccessOpp() {
    navigate("/");
    dispatche(setLogedInState(true));
  }

  function handleClick() {
    if (pageState === "login") {
      setPageState("signup");
      aside.current.classList.remove("min-[551px]:animate-register-reverse");
      aside.current.classList.toggle("min-[551px]:animate-register");
    } else {
      aside.current.classList.remove("min-[551px]:animate-register");
      aside.current.classList.toggle("min-[551px]:animate-register-reverse");
      setPageState("login");
    }
  }
  return (
    <div className="grid place-items-center h-full w-full">
      <div className="relative h-5/6 w-3/5 pt-3 flex justify-center items-center rounded-2xl shadow-lg dark:shadow-gray-500 max-[550px]:flex-col max-[900px]:w-[90vw] max-[550px]:w-[350px] max-[350px]:w-[90%] max-[550px]:h-[90%]  ">
        <aside
          ref={aside}
          className="absolute top-0 left-0 max-[550px]:static 
                     w-[55%] max-[550px]:w-full h-full 
                    bg-blue-500 text-white p-5 text-center 
                    rounded-tl-2xl rounded-bl-2xl rounded-tr-[60px] rounded-br-[60px] 
                    max-[550px]:hidden
                    flex flex-col justify-center items-center "
        >
          {pageState === "login" ? (
            <LoginAside handleClick={handleClick} />
          ) : (
            <SignupAside handleClick={handleClick} />
          )}
        </aside>
        <div className="w-full h-full rounded-2xl flex flex-col items-center">
          {pageState === "login" ? (
            <Login
              className={"ml-auto max-[550px]:m-0"}
              goto={handleClick}
              handleSuccessOpp={handleSuccessOpp}
            />
          ) : (
            <Signup
              className={"mr-auto max-[550px]:m-0"}
              goto={handleClick}
              handleSuccessOpp={handleSuccessOpp}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
