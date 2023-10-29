import React, { useState } from 'react';
import {
    CharacterWithNeighbours,
    Locations,
    Species,
    Vehicles,
    characterDetailsPagePath,
    getIdFromUrl,
    locationDetailsPagePath,
    vehicleDetailsPagePath,
} from 'src/common';
import './CharacterDetailsUi.scss';
import { NavLink } from 'react-router-dom';
import { PaginationButtons, Spinner } from 'src/components';

type CharacterDetailsUiProps = {
    character?: CharacterWithNeighbours;
    characterId?: string;
    locations?: Locations;
    species?: Species;
    vehicles?: Vehicles;
};

export const CharacterDetailsUi: React.FC<CharacterDetailsUiProps> = ({
    character,
    characterId,
    locations,
    species,
    vehicles,
}) => {
    const [imgLoading, setImgLoading] = useState(true);
    if (!character) return null;

    const originWorld = locations?.find((location) => location.url === character.homeworld) || {
        name: 'Unknown origin planet',
    };

    const race = species?.find((el) => el.url === character.species![0])?.name || 'Unknown race';

    const usedVehicles = vehicles
        ?.filter((vehicle) => character.vehicles?.includes(vehicle.url!))
        .map((el, i) => [
            i > 0 && ', ',
            <NavLink
                key={`${el.name} ${i}`}
                className="sw-character-detail__details__link"
                to={vehicleDetailsPagePath(getIdFromUrl(el.url))}
            >
                {el.name}
            </NavLink>,
        ]);

    return (
        <>
            <div className="sw-character-detail">
                <div className="sw-character-detail__name">
                    <div className="sw-character-detail__name__image-wrapper">
                        <div
                            className={`${
                                imgLoading
                                    ? 'sw-character-detail__name__image-wrapper__display-spinner'
                                    : 'sw-character-detail__name__image-wrapper__hide-spinner'
                            }`}
                        >
                            <Spinner />
                        </div>
                        <img
                            className={`${imgLoading ? 'sw-character-detail__name__image-wrapper__hide_img' : ''}`}
                            src={`./characters/${characterId}.jpg`}
                            alt="Star wars character"
                            onLoad={() => setImgLoading(false)}
                        />
                    </div>
                    <h3>{character.name}</h3>
                </div>
                <div className="sw-character-detail__details">
                    <p>
                        <strong>Origin world:</strong>{' '}
                        {originWorld.url ? (
                            <NavLink
                                className="sw-character-detail__details__link"
                                to={locationDetailsPagePath(getIdFromUrl(originWorld.url))}
                                children={originWorld.name}
                            />
                        ) : (
                            originWorld.name
                        )}
                    </p>
                    <hr />
                    <p>
                        <strong>Race:</strong> {race}
                    </p>
                    <hr />
                    <p>
                        <strong>Used vehicles:</strong> {usedVehicles?.length !== 0 ? usedVehicles : 'No used vehicles'}
                    </p>
                </div>
            </div>
            <PaginationButtons
                leftPath={characterDetailsPagePath(getIdFromUrl(character.leftNeighbour.url))}
                rightPath={characterDetailsPagePath(getIdFromUrl(character.rightNeighbour.url))}
                center
            />
        </>
    );
};
