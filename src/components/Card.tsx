import React from 'react';
import "../assets/css/Card.css"

interface CardProps {
    header?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    header,
    body,
    footer,
    className = '',
    onClick,
}) => {
    return (
        <div className={`card ${className}`} onClick={onClick}>
            {header && <div className="card-header">{header}</div>}
            <div className="card-body">{body}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

export default Card;
