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
        <div className="sw-error-wrapper">
            <div className="sw-error-wrapper__content">
                <h1>
                    {code} {message}
                </h1>
                <button className="sw-error-wrapper__content__button">
                    <NavLink to={landingPagePath()}>Go home</NavLink>
                </button>
            </div>
        </div>
    );
};
