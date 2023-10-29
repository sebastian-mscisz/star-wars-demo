import React from 'react';
import { Location, getIdFromUrl, locationDetailsPagePath } from 'src/common';
import { NavLink } from 'react-router-dom';
import './LocationsCard.scss';

type LocationsCardProps = {
    item?: Location;
};

export const LocationsCard: React.ElementType<LocationsCardProps> = ({ item }) => {
    if (!item) return null;

    const { name, url } = item;

    return (
        <div className="sw-locations-card">
            <div className="sw-locations-card__tile">
                <NavLink
                    className={'sw-locations-card__tile__link'}
                    key={name}
                    to={locationDetailsPagePath(getIdFromUrl(url))}
                >
                    <h5 className="sw-locations-card__tile__link__text">{name}</h5>
                    <div className="sw-locations-card__tile__link__image-wrapper">
                        <img src={`./locations/${getIdFromUrl(url)}.jpg`} alt="Star wars planet" />
                    </div>
                </NavLink>
            </div>
        </div>
    );
};
