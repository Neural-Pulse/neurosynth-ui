import React from 'react';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-dark-gray bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <button className="text-dark-gray" onClick={onClose}>X</button>
                <h2 className="text-cyan-blue font-bold text-lg">{title}</h2>
                <div className="text-dark-gray">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
