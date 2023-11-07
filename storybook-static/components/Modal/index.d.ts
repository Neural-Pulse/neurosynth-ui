import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
