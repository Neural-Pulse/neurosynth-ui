import React from 'react';
import { AvatarProps } from './Avatar.types';

const Avatar: React.FC<AvatarProps> = ({ src, size = 50, name, className }) => {
    const initials = name?.split(' ').map((n) => n[0]).join('');

    return (
        <div
            className={`flex items-center justify-center rounded-full shadow-green-glow-md text-neuralpulse-green font-semibold ${className}`
            }
            style={{
                width: size,
                height: size,
                backgroundColor: src ? 'transparent' : '#E0E0E0',
                backgroundImage: src ? `url(${src})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            role="img"
            aria-label="avatar"
        >
            {!src && initials}
        </div>
    );
};

export default Avatar;
