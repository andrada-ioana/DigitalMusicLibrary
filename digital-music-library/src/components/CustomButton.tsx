import React from "react";

interface ButtonProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  iconFront?: React.ReactNode;
  iconBack?: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
  iconFront,
  iconBack,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {iconFront && <span className="icon">{iconFront}</span>}
      {label + " "}
      {iconBack && <span className="icon">{iconBack}</span>}
    </button>
  );
};

export default CustomButton;
