import React, { useState } from 'react';
import { Character, characterDetailsPagePath, getIdFromUrl } from 'src/common';
import { NavLink } from 'react-router-dom';
import './CharactersCard.scss';
import { Spinner } from 'src/components';

type CharactersCardProps = {
    item?: Character;
};

export const CharactersCard: React.FC<CharactersCardProps> = ({ item }) => {
    const [imgLoading, setImgLoading] = useState(true);

    if (!item) return null;

    const { name, url } = item;

    return (
        <div className="sw-characters-card">
            <div className="sw-characters-card__tile">
                <NavLink
                    className={'sw-characters-card__tile__link'}
                    key={name}
                    to={characterDetailsPagePath(getIdFromUrl(url))}
                >
                    <div className="sw-characters-card__tile__link__image-wrapper">
                        <div className={`${imgLoading ? 'sw-characters-card__tile__link__image-wrapper__display-spinner' : 'sw-characters-card__tile__link__image-wrapper__hide-spinner'}`}>
                            <Spinner />
                        </div>
                        <img
                            className={`${imgLoading ? 'sw-characters-card__tile__link__image-wrapper__hide_img' : ''}`}
                            src={`./characters/${getIdFromUrl(url)}.jpg`}
                            alt="Star wars character"
                            onLoad={() => setImgLoading(false)}
                        />
                    </div>
                    <h5 className="sw-characters-card__tile__link__text">{name}</h5>
                </NavLink>
            </div>
        </div>
    );
};
