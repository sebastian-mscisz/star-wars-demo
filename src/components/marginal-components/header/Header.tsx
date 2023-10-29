import { NavigationBar } from '../navigation-bar';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <header className="sw-header">
            <h2 className="sw-header-logo">
                STAR WARS
                <br />
                DEMOPEDIA
            </h2>
            <NavigationBar />
        </header>
    );
};
