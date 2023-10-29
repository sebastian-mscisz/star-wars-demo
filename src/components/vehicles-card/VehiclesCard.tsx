import React, { useState } from 'react';
import { Vehicle, getIdFromUrl, vehicleDetailsPagePath } from 'src/common';
import { NavLink } from 'react-router-dom';
import './VehiclesCard.scss';
import { Spinner } from 'src/components';

type VehiclesCardProps = {
    item?: Vehicle;
};

export const VehiclesCard: React.FC<VehiclesCardProps> = ({ item }) => {
    const [imgLoading, setImgLoading] = useState(true);

    if (!item) return null;

    const { name, url } = item;

    return (
        <div className="sw-vehicles-card">
            <div className="sw-vehicles-card__tile">
                <NavLink
                    className={'sw-vehicles-card__tile__link'}
                    key={name}
                    to={vehicleDetailsPagePath(getIdFromUrl(url))}
                >
                    <div className="sw-vehicles-card__tile__link__image-wrapper">
                        <div
                            className={`${
                                imgLoading
                                    ? 'sw-vehicles-card__tile__link__image-wrapper__display-spinner'
                                    : 'sw-vehicles-card__tile__link__image-wrapper__hide-spinner'
                            }`}
                        >
                            <Spinner />
                        </div>
                        <img
                            className={`${imgLoading ? 'sw-vehicles-card__tile__link__image-wrapper__hide_img' : ''}`}
                            src={`./vehicles/${getIdFromUrl(url)}.jpg`}
                            alt="Star wars vehicle"
                            onLoad={() => setImgLoading(false)}
                        />
                    </div>
                    <h5 className="sw-vehicles-card__tile__link__text">{name}</h5>
                </NavLink>
            </div>
        </div>
    );
};
