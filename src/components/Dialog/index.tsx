import React, { memo } from 'react';
import { DialogProps } from './Dialog.types';

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, onConfirm, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <div className="mb-4">{children}</div>
                <div className="flex justify-end space-x-2">
                    <button className="bg-neuralpulse-gray hover:bg-neuralpulse-dark text-white font-bold py-2 px-4 rounded" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="bg-neuralpulse-green hover:bg-neuralpulse-light-green text-white font-bold py-2 px-4 rounded" onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Dialog);
