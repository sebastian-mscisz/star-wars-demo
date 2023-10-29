import React from 'react';
import { Vehicle, getIdFromUrl, vehicleDetailsPagePath } from 'src/common';
import { NavLink } from 'react-router-dom';
import './VehiclesCard.scss';

type VehiclesCardProps = {
    item?: Vehicle;
};

export const VehiclesCard: React.FC<VehiclesCardProps> = ({ item }) => {
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
                        <img src={`/vehicles/${getIdFromUrl(url)}.jpg`} alt="Star wars vehicle" />
                    </div>
                    <h5 className="sw-vehicles-card__tile__link__text">{name}</h5>
                </NavLink>
            </div>
        </div>
    );
};
