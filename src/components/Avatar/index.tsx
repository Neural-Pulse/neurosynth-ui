import React, { memo } from 'react';
import clsx from 'clsx';
import { AvatarProps } from './Avatar.types';

const Avatar: React.FC<AvatarProps> = ({ src, name, size = 40, className }) => {
    return (
        <img
            src={src}
            alt={`${name} avatar`}
            className={clsx('rounded-full', className)}
            style={{ width: size, height: size }}
        />
    );
};

export default memo(Avatar);
