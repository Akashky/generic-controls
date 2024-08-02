import React, { useEffect, useState } from 'react';
import '../assets/css/Toast.css';

interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'warning';
    duration?: number;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', duration = 3000, onClose }) => {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setExiting(true), duration - 500); // start exit animation 500ms before the timeout
        const exitTimer = setTimeout(onClose, duration);
        return () => {
            clearTimeout(timer);
            clearTimeout(exitTimer);
        };
    }, [duration, onClose]);

    const toastClassName = `toast toast-${type} ${exiting ? 'toast-exit' : ''}`;

    return (
        <div className={toastClassName}>
            {message}
            <button className="toast-close" onClick={onClose}>
                &times;
            </button>
        </div>
    );
};

export default Toast;
