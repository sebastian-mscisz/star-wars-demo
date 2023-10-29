import { useNavigate } from 'react-router-dom';
import './PaginationButtons.scss';

type PaginationButtonsProps = {
    hideLeft?: boolean;
    hideRight?: boolean;
    center?: boolean;
    leftPath: string;
    rightPath: string;
};

export const PaginationButtons: React.FC<PaginationButtonsProps> = ({
    hideLeft,
    hideRight,
    leftPath,
    rightPath,
    center,
}) => {
    const navigate = useNavigate();

    return (
        <div
            data-testid="pagination-section"
            className={`sw-pagination-section${center ? ' sw-pagination-section--center' : ''}`}
        >
            <div
                data-testid="left-pagination-button"
                onClick={() => {
                    navigate(leftPath);
                }}
                className={`sw-pagination-button ${hideLeft ? 'sw-pagination-button--hidden' : ''}`}
            >
                &#8592;
            </div>
            <div
                data-testid="right-pagination-button"
                onClick={() => {
                    navigate(rightPath);
                }}
                className={`sw-pagination-button ${hideRight ? 'sw-pagination-button--hidden' : ''}`}
            >
                &#8594;
            </div>
        </div>
    );
};
