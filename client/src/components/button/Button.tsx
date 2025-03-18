import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outlined";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full border dark:border-slate-300/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-medium";

  const variantStyles = {
    primary:
      "bg-gray-900 dark:bg-white/10 hover:bg-gray-600 text-white dark:text-white/90",
    secondary:
      "bg-blue-600 dark:bg-white/10 hover:bg-blue-500 text-white dark:text-white/90",
    outlined:
      "bg-none border-gray-900 text-gray-900 hover:bg-gray-200 text-gray-900 dark:text-white/90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
