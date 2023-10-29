import React from 'react';
import { NavLink } from 'react-router-dom';
import { landingPagePath } from 'src/common';
import './ErrorComponent.scss';

type ErrorComponentProps = {
    code: string;
    message: string;
};

export const ErrorComponent: React.FC<ErrorComponentProps> = ({ code, message }) => {
    return (
        <div className="sw-error">
            <h1>
                {code} {message}
            </h1>
            <button className="sw-error__button">
                <NavLink to={landingPagePath()}>Go home</NavLink>
            </button>
        </div>
    );
};
