import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const buttonClasses = `shadow focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded ${
    className || ''
  }`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
