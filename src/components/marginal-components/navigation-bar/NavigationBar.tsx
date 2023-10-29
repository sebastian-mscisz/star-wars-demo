import { charactersPagePath, locationsPagePath, vehiclesPagePath } from 'src/common';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';

const navigationItems = [
    { name: 'Characters', path: charactersPagePath() },
    { name: 'Locations', path: locationsPagePath() },
    { name: 'Vehicles', path: vehiclesPagePath() },
];

export const NavigationBar: React.FC = () => {
    const navlinks = navigationItems.map((item, i) => (
        <li className="sw-nav__links__item" key={i}>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? 'sw-nav__links__item__link sw-nav__links__item__link--active'
                        : 'sw-nav__links__item__link'
                }
                key={item.name}
                to={item.path}
            >
                {item.name}
            </NavLink>
        </li>
    ));

    return (
        <div className="sw-nav">
            <ul className="sw-nav__links">{navlinks}</ul>
        </div>
    );
};
