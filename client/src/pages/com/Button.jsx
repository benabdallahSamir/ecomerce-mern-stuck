import React from "react";

function Button({
  className,
  variant = "default",
  icon,
  text = "no text (default)",
  onClick,
}) {
  if (variant === "icon")
    return (
      <div
        className={`px-2 py-1 border border-black rounded-md ${className}`}
        onClick={onClick}
      >
        {icon}
      </div>
    );

  if (variant === "default") {
    return (
      <div className={`px-2 py-1 rounded-md border border-black ${className}`}>
        {text}
      </div>
    );
  }
}

export default Button;
