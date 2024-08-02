import React from 'react';
import './Header.css';

interface HeaderProps {
    leftContent?: React.ReactNode;
    centerContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ leftContent, centerContent, rightContent, className = '' }) => {
    return (
        <header className={`header ${className}`}>
            <div className="header-left">{leftContent}</div>
            <div className="header-center">{centerContent}</div>
            <div className="header-right">{rightContent}</div>
        </header>
    );
};

export default Header;
