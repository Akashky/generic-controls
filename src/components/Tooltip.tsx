import React from 'react';
import '../assets/css/Tooltip.css';

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="tooltip">
            {children}
            <span className="tooltip-content">{content}</span>
        </div>
    );
};

export default Tooltip;
