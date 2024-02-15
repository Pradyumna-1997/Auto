import Image from "next/image";
import React from "react";

type ButtonProps={
  type: 'button'|'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green'
}

const Button = ({ type, title, icon , variant}: ButtonProps) => {
  return (
    <button
    className={'flexCenter gap-3 rounder-full border ${variant}'}
    type={type}
    >
    {icon && <Image src={icon} alt='title' width={24} height={24} />}
    <label className="bold-16 whitespace-nowrap">{title}</label>

    </button>
  )
}

export default Button