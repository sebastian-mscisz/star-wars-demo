import './Footer.scss';

export const Footer: React.FC = () => {
    const getCurrentYear = new Date().getFullYear();

    return (
        <footer className="sw-footer">
            <p className="sw-footer__text">©{getCurrentYear} Star Wars Demopedia</p>
        </footer>
    );
};
