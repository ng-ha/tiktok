import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import image from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) {
    const [fallBack, setFallback] = useState('');

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={() => setFallback(customFallback)}
        />
    );
}

export default forwardRef(Image);
