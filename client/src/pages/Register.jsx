import React, { useRef, useState } from "react";

function Login({ className }) {
  return (
    <div
      className={`rounded-2xl w-[45%] max-[550px]:w-full h-full ${className}`}
    >
      Login
    </div>
  );
}
function Signup({ className }) {
  return (
    <div
      className={`rounded-2xl w-[45%] max-[550px]:w-full h-full ${className}`}
    >
      Signup
    </div>
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
      <div className="relative h-4/6 w-3/5 flex justify-center items-center rounded-2xl shadow-lg max-[550px]:flex-col max-[550px]:w-[350px] max-[350px]:w-[90%] max-[550px]:h-[90%]  ">
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
            <Login className={"ml-auto max-[550px]:m-0"} />
          ) : (
            <Signup className={"mr-auto max-[550px]:m-0"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
