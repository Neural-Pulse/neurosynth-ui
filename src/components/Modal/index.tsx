import React, { memo } from 'react';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="bg-neuralpulse-light-gray p-6 shadow-green-glow-md">
                <button className="text-neuralpulse-dark" onClick={onClose}>X</button>
                <h2 className="text-neuralpulse-accent font-bold text-lg">{title}</h2>
                <div className="text-neuralpulse-dark">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default memo(Modal);
