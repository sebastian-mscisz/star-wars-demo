import React from 'react';
import { Footer, Header } from 'src/components';
import './MasterPage.scss';

interface MasterPageProps {
    children: React.ReactNode;
}

export const MasterPage: React.FC<MasterPageProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="sw-container">{children}</div>
            <Footer />
        </>
    );
};
