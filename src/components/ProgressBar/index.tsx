import React from 'react';
import { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = 'neuralpulse-green', label, height = '20px' }) => {
    const progressBarStyles = {
        width: `${progress}%`,
        backgroundColor: color,
        height: height
    };

    return (
        <div>
            {label && <span>{label}</span>} {/* Renderize o label se ele existir */}
            <div
                data-testid="progress-bar"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                style={progressBarStyles}
            >
                {/* Barra de progresso aqui */}
            </div>
        </div>
    );
};

export default ProgressBar;