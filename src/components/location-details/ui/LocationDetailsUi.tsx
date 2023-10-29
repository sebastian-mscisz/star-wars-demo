import React, { useState } from 'react';
import {
    Characters,
    LocationWithNeighbours,
    characterDetailsPagePath,
    getIdFromUrl,
    locationDetailsPagePath,
} from 'src/common';
import './LocationDetailsUi.scss';
import { NavLink } from 'react-router-dom';
import { PaginationButtons, Spinner } from 'src/components';

type LocationDetailsUiProps = {
    location?: LocationWithNeighbours;
    locationId: string;
    characters?: Characters;
};

export const LocationDetailsUi: React.FC<LocationDetailsUiProps> = ({ location, locationId, characters }) => {
    const [imgLoading, setImgLoading] = useState(true);

    if (!location) return null;

    const residents =
        characters
            ?.filter((character) => location.residents?.includes(character.url!))
            .map((el, i) => [
                i > 0 && ', ',
                <NavLink
                    key={`${el.name} ${i}`}
                    className="sw-location-detail__details__link"
                    to={characterDetailsPagePath(getIdFromUrl(el.url))}
                >
                    {el.name}
                </NavLink>,
            ]) || 'No famous residents';

    return (
        <>
            <div className="sw-location-detail">
                <div className="sw-location-detail__name">
                    <h2>{location.name}</h2>
                </div>
                <div className="sw-location-detail__image-wrapper">
                    <div className={`${imgLoading ? 'sw-location-detail__image-wrapper__display-spinner' : 'sw-location-detail__image-wrapper__hide-spinner'}`}>
                        <Spinner />
                    </div>
                    <img
                        className={`${imgLoading ? 'sw-location-detail__image-wrapper__hide_img' : ''}`}
                        src={`./locations/${locationId}.jpg`}
                        alt="Star wars location"
                        onLoad={() => setImgLoading(false)} />
                </div>
                <div className="sw-location-detail__details">
                    <p>
                        <strong>Population:</strong> {location.population}
                    </p>
                    <hr />
                    <p>
                        <strong>Residents:</strong> {residents?.length !== 0 ? residents : 'No famous residents'}
                    </p>
                </div>
            </div>
            <PaginationButtons
                leftPath={locationDetailsPagePath(getIdFromUrl(location.leftNeighbour.url))}
                rightPath={locationDetailsPagePath(getIdFromUrl(location.rightNeighbour.url))}
                center
            />
        </>
    );
};
