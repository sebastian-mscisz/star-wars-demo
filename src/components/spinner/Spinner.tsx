import { BarLoader } from 'react-spinners';
import './Spinner.scss';

export const Spinner: React.FC = () => {
    const colors = ['#EB212E', '#2FF924', '#2E67F8', '#871efe'];

    return (
        <div className="sw-spinner">
            <BarLoader
                height={5}
                cssOverride={{ width: '25px', backgroundColor: 'black', borderRadius: '5px' }}
                speedMultiplier={0}
            />
            <BarLoader height={5} cssOverride={{ borderRadius: '5px' }} color={colors[Math.floor(Math.random() * 4)]} />
        </div>
    );
};
