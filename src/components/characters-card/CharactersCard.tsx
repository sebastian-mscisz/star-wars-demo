import React from 'react';
import { Character, characterDetailsPagePath, getIdFromUrl } from 'src/common';
import { NavLink } from 'react-router-dom';
import './CharactersCard.scss';

type CharactersCardProps = {
    item?: Character;
};

export const CharactersCard: React.FC<CharactersCardProps> = ({ item }) => {
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
                        <img loading="lazy" src={`/characters/${getIdFromUrl(url)}.jpg`} alt="Star wars character" />
                    </div>
                    <h5 className="sw-characters-card__tile__link__text">{name}</h5>
                </NavLink>
            </div>
        </div>
    );
};
