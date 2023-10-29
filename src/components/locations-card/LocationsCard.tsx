import React, { useState } from 'react';
import { Location, getIdFromUrl, locationDetailsPagePath } from 'src/common';
import { NavLink } from 'react-router-dom';
import './LocationsCard.scss';
import { Spinner } from 'src/components';

type LocationsCardProps = {
    item?: Location;
};

export const LocationsCard: React.ElementType<LocationsCardProps> = ({ item }) => {
    const [imgLoading, setImgLoading] = useState(true);

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
                        <div
                            className={`${imgLoading
                                    ? 'sw-locations-card__tile__link__image-wrapper__display-spinner'
                                    : 'sw-vehicles-card__tile__link__image-wrapper__hide-spinner'
                                }`}
                        >
                            <Spinner />
                        </div>
                        <img
                            className={`${imgLoading ? 'sw-locations-card__tile__link__image-wrapper__hide_img' : ''}`}
                            src={`/locations/${getIdFromUrl(url)}.jpg`}
                            alt="Star wars planet"
                            onLoad={() => setImgLoading(false)}
                        />
                    </div>
                </NavLink>
            </div>
        </div>
    );
};
