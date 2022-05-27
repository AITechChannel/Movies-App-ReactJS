import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Button.module.scss';
const cx = classNames.bind(Styles);

function Button({ children, primary, outline, small, to, href }) {
    let Cmp = 'button';
    const props = {};

    if (to) {
        props.to = to;
        Cmp = Link;
    }
    if (href) {
        props.href = href;
        Cmp = 'a';
    }

    const className = cx('btn', { primary, outline, small });

    return (
        <Cmp className={className} {...props}>
            {children}
        </Cmp>
    );
}

export default Button;
