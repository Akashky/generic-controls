import React from 'react';
import '../assets/css/Modal.css';

interface ModalProps {
    show: boolean;
    onClose?: () => void;
    onSave?: () => void;
    showClose?: () => void;
    title?: React.ReactNode;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSave, title, children, showClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {title && (
                    <div className="modal-header">
                        {title}
                        <button className="modal-close-icon" onClick={showClose}>&times;</button>
                    </div>
                )}
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    {onSave && <button onClick={onSave}>Save</button>}
                    {onClose && <button onClick={onClose}>Close</button>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
