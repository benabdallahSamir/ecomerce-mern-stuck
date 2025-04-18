import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Input({
  className,
  placholder,
  type,
  name,
  value,
  onChange,
  icon,
  variant = "default",
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function passwordHandler() {
    setPasswordVisible((prev) => !prev);
  }
  return (
    <div
      className={` bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 w-full h-8 rounded-md relative ${className}`}
    >
      <input
        className="w-full h-full bg-transparent rounded-md px-2 outline-none select-none"
        type={
          variant === "password"
            ? passwordVisible
              ? "text"
              : "password"
            : type
        }
        placeholder={placholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <FontAwesomeIcon
        icon={
          variant === "password" ? (passwordVisible ? faEyeSlash : faEye) : icon
        }
        onClick={passwordHandler}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 dark:text-gray-300"
      />
    </div>
  );
}

export default Input;
