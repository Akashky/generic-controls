import React, { ChangeEventHandler } from "react";
import "../assets/css/Textbox.css"

interface TextBoxProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'number';
    className?: string;
    size?: 'small' | 'medium' | 'large';
    id?: string;
    name?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ value, onChange, placeholder = "", disabled = false, type = 'text', className = "", size = "medium", id = '', name = '' }) => {

    const textBoxClassName = `textbox ${size} ${disabled ? 'disabled' : ''} ${className}`;

    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={textBoxClassName}
        />
    )
}

export default TextBox;