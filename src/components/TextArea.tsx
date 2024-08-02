import React, { ChangeEventHandler } from 'react';
import "../assets/css/TextArea.css"

interface TextAreaProps {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
    value,
    onChange,
    placeholder = '',
    disabled = false,
    className = '',
    size = 'medium',
    rows = 3,
}) => {
    const textAreaClassName = `textarea ${size} ${disabled ? 'disabled' : ''} ${className}`;

    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={textAreaClassName}
            rows={rows}
        />
    );
};

export default TextArea;
