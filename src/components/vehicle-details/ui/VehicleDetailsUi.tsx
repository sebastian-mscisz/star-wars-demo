import React, { useState } from 'react';
import {
    Characters,
    VehicleWithNeighbours,
    characterDetailsPagePath,
    getIdFromUrl,
    vehicleDetailsPagePath,
} from 'src/common';
import './VehicleDetailsUi.scss';
import { NavLink } from 'react-router-dom';
import { PaginationButtons, Spinner } from 'src/components';

type VehicleDetailsUiProps = {
    vehicle?: VehicleWithNeighbours;
    characters?: Characters;
    vehicleId: string;
};

export const VehicleDetailsUi: React.FC<VehicleDetailsUiProps> = ({ vehicle, vehicleId, characters }) => {
    const [imgLoading, setImgLoading] = useState(true);
    if (!vehicle) return null;

    const pilots = characters
        ?.filter((character) => vehicle.pilots?.includes(character.url!))
        .map((el, i) => [
            i > 0 && ', ',
            <NavLink
                key={`${el.name} ${i}`}
                className="sw-vehicle-detail__details__link"
                to={characterDetailsPagePath(getIdFromUrl(el.url))}
            >
                {el.name}
            </NavLink>,
        ]);

    return (
        <>
            <div className="sw-vehicle-detail">
                <div className="sw-vehicle-detail__image-wrapper">
                    <div className={`${imgLoading ? 'sw-vehicle-detail__image-wrapper__display-spinner' : 'sw-vehicle-detail__image-wrapper__hide-spinner'}`}>
                        <Spinner />
                    </div>
                    <img
                        className={`${imgLoading ? 'sw-vehicle-detail__image-wrapper__hide_img' : ''}`}
                        src={`./vehicles/${vehicleId}.jpg`}
                        alt="Star wars vehicle"
                        onLoad={() => setImgLoading(false)} />
                </div>
                <div className="sw-vehicle-detail__name">
                    <h2>{vehicle.name}</h2>
                    <p>
                        <strong>Vehicle type:</strong> {vehicle.vehicle_class || 'Unknown vehicle class'}
                    </p>
                </div>
                <div className="sw-vehicle-detail__details">
                    <p>
                        <strong>Famous pilots:</strong> {pilots?.length !== 0 ? pilots : 'No famous pilots'}
                    </p>
                </div>
            </div>
            <PaginationButtons
                leftPath={vehicleDetailsPagePath(getIdFromUrl(vehicle.leftNeighbour.url))}
                rightPath={vehicleDetailsPagePath(getIdFromUrl(vehicle.rightNeighbour.url))}
                center
            />
        </>
    );
};
