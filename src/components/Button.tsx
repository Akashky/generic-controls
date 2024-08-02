import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'danger' | 'default';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, loading = false, variant = 'default', size = 'small', className = '', type = 'button' }) => {

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!disabled && !loading && onClick) {
            onClick(e);
        }
    }

    const buttonClassName = `button ${variant} ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}${className}`

    return (
        <button type={type} className={buttonClassName} onClick={handleClick} disabled={disabled}>
            {loading ? 'loading' : children}
        </button>
    )
}

export default Button;